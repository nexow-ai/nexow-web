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
    /* 150 → 100: the full-page world field (~50 KB) and its dashboard-atlas
       rasteriser went, replaced by the hero's single object (~12 KB). ~80 KB
       today. */
    expect(kb(sizeOf(scripts)), `total JS is ${kb(sizeOf(scripts))} KB`).toBeLessThan(100);
  });

  it('keeps every individual script small enough to parse cheaply', () => {
    /* Back to the 60 KB the world was budgeted at, now with room to spare:
       the biggest script is ~12 KB since the world field (~67 KB at the end)
       gave way to the hero's single object. */
    for (const file of scripts) {
      expect(kb(fs.statSync(file).size), path.basename(file)).toBeLessThan(60);
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
       board.
       440 → 425: the hero dashboards are gone with the atlas they fed;
       ~414 KB today. */
    expect(kb(sizeOf(styles)), `total CSS is ${kb(sizeOf(styles))} KB`).toBeLessThan(425);
  });

  it('self-hosts its fonts, in woff2', () => {
    expect(fonts.length, 'no fonts were emitted').toBeGreaterThan(0);
    for (const file of fonts) {
      expect(file.endsWith('.woff2'), `${path.basename(file)} is not woff2`).toBe(true);
    }
  });

  it('keeps each page document within a sane size', () => {
    /* The home pages used to be the big ones — past 1 MB, most of it the
       forty-nine hidden SVG dashboards the world field rasterised into its
       atlas. With the atlas gone the home page is ~530 KB and the biggest
       page is a connectors catalogue at ~630 KB. 1060 → 700 holds that. */
    const pages = walk(DIST).filter((f) => f.endsWith('.html'));
    const oversized = pages
      .filter((f) => fs.statSync(f).size > 700 * 1024)
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
