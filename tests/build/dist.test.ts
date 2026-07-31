import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { SITE, defaultLang } from '../../src/i18n/config';
import { localizePath } from '../../src/i18n/utils';
import { CANONICAL_ROUTES, LANGS, PREFIXED_LANGS } from '../helpers/locales';

/**
 * Checks over the real build output. These catch what a component-level render
 * cannot: a link that resolves nowhere, a page missing from the sitemap, a
 * referenced asset that was never emitted.
 *
 * Requires `astro build` to have run — the suite skips itself otherwise so a
 * plain `vitest run` on a clean checkout does not fail spuriously.
 */
const DIST = path.resolve(import.meta.dirname, '..', '..', 'dist');
const built = fs.existsSync(path.join(DIST, 'index.html'));

const walk = (dir: string): string[] =>
  fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) =>
      entry.isDirectory()
        ? walk(path.join(dir, entry.name))
        : [path.relative(DIST, path.join(dir, entry.name)).split(path.sep).join('/')],
    );

const files = built ? walk(DIST) : [];
const pages = files.filter((f) => f.endsWith('.html'));
const assets = new Set(files);

/** `blog/a-post/index.html` → `/blog/a-post/`; `index.html` → `/`. */
const routeOf = (file: string) => `/${file.replace(/(^|\/)index\.html$/, '').replace(/\.html$/, '')}`.replace(/\/{2,}/g, '/');

const pageRoutes = new Set(pages.map(routeOf).map((r) => (r === '/' ? '/' : r.replace(/\/$/, ''))));

/** Resolve an internal href to the route a static host would serve. */
function resolveHref(href: string, from: string): string | null {
  if (/^(https?:|mailto:|tel:|data:|#|javascript:)/i.test(href)) return null;
  const base = new URL(from === '/' ? '/' : `${from}/`, 'https://nexow.ai');
  const url = new URL(href, base);
  if (url.origin !== 'https://nexow.ai') return null;
  return url.pathname.replace(/\/$/, '') || '/';
}

describe.skipIf(!built)('build output', () => {
  it('emitted a page for every canonical route in every locale', () => {
    for (const lang of LANGS) {
      for (const route of CANONICAL_ROUTES) {
        const expected = localizePath(route, lang);
        expect(pageRoutes, `missing ${expected}`).toContain(expected === '/' ? '/' : expected);
      }
    }
  });

  it('emitted a 404 page', () => {
    expect(assets.has('404.html')).toBe(true);
  });

  it('emitted a feed for every locale', () => {
    for (const lang of LANGS) {
      const feed = lang === defaultLang ? 'rss.xml' : `${lang}/rss.xml`;
      expect(assets.has(feed), `missing ${feed}`).toBe(true);
    }
  });

  it('emitted the icons and social card the head references', () => {
    for (const asset of [
      'favicon.png',
      'favicon-black.png',
      'apple-touch-icon.png',
      'og.png',
      'sitemap-index.xml',
    ]) {
      expect(assets.has(asset), `missing ${asset}`).toBe(true);
    }
  });

  it('built roughly the number of pages the route tree implies', () => {
    // 17 locales × canonical routes, plus per-locale blog posts.
    expect(pages.length).toBeGreaterThanOrEqual(LANGS.length * CANONICAL_ROUTES.length);
  });
});

describe.skipIf(!built)('internal links', () => {
  it('every internal href resolves to a built page', () => {
    const broken: string[] = [];

    for (const page of pages) {
      const html = fs.readFileSync(path.join(DIST, page), 'utf8');
      const from = routeOf(page).replace(/\/$/, '') || '/';
      for (const [, href] of html.matchAll(/<a\b[^>]*\bhref="([^"]*)"/g)) {
        const target = resolveHref(href, from);
        if (target === null) continue;
        // A file asset (PDF, feed, image) is served directly.
        if (assets.has(target.slice(1))) continue;
        if (!pageRoutes.has(target)) broken.push(`${page} → ${href}`);
      }
    }

    expect([...new Set(broken)].slice(0, 20), `${broken.length} broken internal links`).toEqual([]);
  });

  it('every canonical URL points at a page that exists', () => {
    const broken: string[] = [];
    for (const page of pages) {
      const html = fs.readFileSync(path.join(DIST, page), 'utf8');
      const canonical = html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]*)"/)?.[1];
      if (!canonical) {
        broken.push(`${page} has no canonical`);
        continue;
      }
      const target = new URL(canonical).pathname.replace(/\/$/, '') || '/';
      if (!pageRoutes.has(target)) broken.push(`${page} → ${canonical}`);
    }
    expect(broken.slice(0, 20)).toEqual([]);
  });

  it('every hreflang alternate points at a page that exists', () => {
    const broken: string[] = [];
    // One representative page per locale keeps this linear rather than quadratic.
    const sample = LANGS.map((lang) => {
      const route = localizePath('/features', lang);
      return route === '/' ? 'index.html' : `${route.slice(1)}/index.html`;
    });

    for (const page of sample) {
      const html = fs.readFileSync(path.join(DIST, page), 'utf8');
      for (const [, href] of html.matchAll(/<link\b[^>]*hreflang="[^"]*"[^>]*href="([^"]*)"/g)) {
        const target = new URL(href).pathname.replace(/\/$/, '') || '/';
        if (!pageRoutes.has(target)) broken.push(`${page} → ${href}`);
      }
    }
    expect(broken.slice(0, 20)).toEqual([]);
  });

  it('references only assets that were emitted', () => {
    const missing: string[] = [];
    for (const page of pages) {
      const html = fs.readFileSync(path.join(DIST, page), 'utf8');
      for (const [, src] of html.matchAll(/<(?:img|source)\b[^>]*\bsrc="(\/[^"]*)"/g)) {
        const asset = src.split('?')[0].slice(1);
        if (!assets.has(asset)) missing.push(`${page} → ${src}`);
      }
    }
    expect([...new Set(missing)].slice(0, 20)).toEqual([]);
  });

  it('emitted every connector logo the catalog references', async () => {
    const { CONNECTORS } = await import('../../src/data/connectors');
    for (const connector of CONNECTORS) {
      expect(assets.has(connector.logo.slice(1)), `${connector.id} logo`).toBe(true);
      if (connector.banner) {
        expect(assets.has(connector.banner.slice(1)), `${connector.id} banner`).toBe(true);
      }
    }
  });
});

describe.skipIf(!built)('sitemap', () => {
  const sitemap = built ? fs.readFileSync(path.join(DIST, 'sitemap-0.xml'), 'utf8') : '';
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, loc]) => loc);

  it('lists absolute URLs on the canonical origin', () => {
    expect(locs.length).toBeGreaterThan(0);
    for (const loc of locs) {
      expect(new URL(loc).origin, loc).toBe(SITE.url);
    }
  });

  it('lists every canonical route in every locale', () => {
    const listed = new Set(locs.map((loc) => new URL(loc).pathname.replace(/\/$/, '') || '/'));
    for (const lang of LANGS) {
      for (const route of CANONICAL_ROUTES) {
        const expected = localizePath(route, lang);
        expect(listed, `sitemap is missing ${expected}`).toContain(expected);
      }
    }
  });

  it('lists no URL that is not a built page', () => {
    const orphans = locs
      .map((loc) => new URL(loc).pathname.replace(/\/$/, '') || '/')
      .filter((p) => !pageRoutes.has(p));
    expect([...new Set(orphans)]).toEqual([]);
  });

  it('does not list the 404 page', () => {
    expect(locs.some((loc) => loc.includes('/404'))).toBe(false);
  });

  it('carries hreflang alternates for the locale set', () => {
    expect(sitemap).toContain('xhtml:link');
    for (const lang of PREFIXED_LANGS) {
      expect(sitemap, `sitemap has no ${lang} alternate`).toContain(`hreflang="${lang}"`);
    }
  });

  it('has no duplicate entries', () => {
    expect(new Set(locs).size).toBe(locs.length);
  });
});
