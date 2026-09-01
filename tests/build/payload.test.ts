import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * Payload budget, measured on the build output rather than in a browser.
 *
 * Intercepting responses in Playwright conflates the page's own cost with
 * Astro's link prefetching, which Chromium reports as `script` and which starts
 * before `load`. The shipped bytes are a static fact, so they are asserted
 * statically — deterministic, fast, and immune to runner noise.
 */
const DIST = path.resolve(import.meta.dirname, '..', '..', 'dist');
const built = fs.existsSync(path.join(DIST, 'index.html'));

const walk = (dir: string): string[] =>
  fs.existsSync(dir)
    ? fs
        .readdirSync(dir, { withFileTypes: true })
        .flatMap((e) =>
          e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)],
        )
    : [];

const sizeOf = (files: string[]) => files.reduce((sum, f) => sum + fs.statSync(f).size, 0);
const kb = (bytes: number) => Math.round((bytes / 1024) * 10) / 10;

const assets = built ? walk(path.join(DIST, '_astro')) : [];
const scripts = assets.filter((f) => f.endsWith('.js'));
const styles = assets.filter((f) => f.endsWith('.css'));
const fonts = assets.filter((f) => /\.(woff2?|ttf|otf)$/.test(f));

describe.skipIf(!built)('shipped payload', () => {
  it('ships a small amount of JavaScript — there is no framework runtime here', () => {
    expect(kb(sizeOf(scripts)), `total JS is ${kb(sizeOf(scripts))} KB`).toBeLessThan(150);
  });

  it('keeps every individual script small enough to parse cheaply', () => {
    /* 65 → 70: the WorldField chunk had crept to 65.9 on its own, and the
       dashboard-atlas hookup (the rasteriser itself is a deferred chunk,
       `worldBoards`) put it at ~67. */
    for (const file of scripts) {
      expect(kb(fs.statSync(file).size), path.basename(file)).toBeLessThan(70);
    }
  });

  it('ships one bounded stylesheet bundle', () => {
    /* 410 → 430: the hero dashboards (HeroDashboards.astro) grew from four
       sketches to twelve instrument panels, and the playground art picked up
       weight alongside.
       430 → 440: those panels stopped being screenshots. The shared loop
       vocabulary — value cyclers, print flashes, rolling plots, meters,
       sweeps — is ~3 KB of keyframes and rules that dresses every board, and
       is why the boards themselves grew markup without growing CSS per
       board. */
    expect(kb(sizeOf(styles)), `total CSS is ${kb(sizeOf(styles))} KB`).toBeLessThan(440);
  });

  it('self-hosts its fonts, in woff2', () => {
    expect(fonts.length, 'no fonts were emitted').toBeGreaterThan(0);
    for (const file of fonts) {
      expect(file.endsWith('.woff2'), `${path.basename(file)} is not woff2`).toBe(true);
    }
  });

  it('keeps each page document within a sane size', () => {
    /* The home pages are the big ones — around 815 KB, and rising to that from
       ~600 KB when the hero stopped rendering sixteen of its dashboards and
       started rendering all thirty-seven, which is also the world's channel
       table (src/lib/worldBoards.ts rasterises them into the atlas the 3D
       screens sample), and to ~860 KB when the boards started running —
       ticking readouts are several copies of one number, and a plot that
       scrolls draws its series twice.

       900 → 1060: the twelve chart desks (×1/×2/×4/×8 grids of live plots
       across stocks, commodities, indices, FX, crypto and macro) took the
       list to forty-nine and the biggest page to ~1020 KB. Most of that is
       mechanical rather than authored — an eight-up sheet is ~250 SVG nodes
       and every one of them carries Astro's 24-byte scoped-style attribute,
       which is a third of the board. It compresses to ~139 KB gzipped, which
       is what actually crosses the wire. ~40 KB of headroom; another eight-up
       sheet costs ~20 KB, so the next one wants the byte budget looked at
       rather than the cap raised again. */
    const pages = walk(DIST).filter((f) => f.endsWith('.html'));
    const oversized = pages
      .filter((f) => fs.statSync(f).size > 1060 * 1024)
      .map((f) => `${path.relative(DIST, f)} (${kb(fs.statSync(f).size)} KB)`);
    expect(oversized).toEqual([]);
  });

  it('optimises the raster art it ships', () => {
    const images = walk(DIST).filter((f) => /\.(png|jpe?g|webp|avif)$/i.test(f));
    const heavy = images
      .filter((f) => fs.statSync(f).size > 400 * 1024)
      .map((f) => `${path.relative(DIST, f)} (${kb(fs.statSync(f).size)} KB)`);
    expect(heavy, 'images over 400 KB should be resized or re-encoded').toEqual([]);
  });
});

describe.skipIf(!built)('third-party requests', () => {
  it('references no external origin from any page', () => {
    const allowed = [
      'https://nexow.ai',
      'https://x.nexow.ai',
      'https://schema.org',
      'http://schema.org',
      'https://www.w3.org',
      'http://www.w3.org',
    ];
    // Social profile links are outbound anchors, not resources — only
    // `src`/`href`-on-link attributes can cost the visitor a request.
    const resourceAttr = /<(?:script|img|source|iframe)\b[^>]*\bsrc="(https?:\/\/[^"]+)"|<link\b[^>]*\bhref="(https?:\/\/[^"]+)"[^>]*>/g;

    const offenders = new Set<string>();
    for (const file of walk(DIST).filter((f) => f.endsWith('.html'))) {
      const html = fs.readFileSync(file, 'utf8');
      for (const [tag, src, href] of html.matchAll(resourceAttr)) {
        const url = src ?? href;
        if (!url) continue;
        // rel=alternate/canonical point at our own pages, not resources.
        if (/rel="(alternate|canonical)"/.test(tag)) continue;
        const origin = new URL(url).origin;
        if (!allowed.includes(origin)) offenders.add(`${path.relative(DIST, file)} → ${url}`);
      }
    }
    expect([...offenders].slice(0, 10), 'external resource requests').toEqual([]);
  });
});
