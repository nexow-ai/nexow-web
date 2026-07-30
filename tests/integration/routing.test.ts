import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import astroConfig from '../../astro.config.mjs';
import { defaultLang, languages, type Lang } from '../../src/i18n/config';
import { useContent } from '../../src/i18n/content';
import { localizePath } from '../../src/i18n/utils';
import { NAV_ICONS } from '../../src/i18n/nav-icons';
import { PAGE_BADGE_ICONS } from '../../src/i18n/page-badge-icons';
import { CANONICAL_ROUTES, LANGS, PREFIXED_LANGS } from '../helpers/locales';

const ROOT = path.resolve(import.meta.dirname, '..', '..');
const PAGES = path.join(ROOT, 'src/pages');

const i18n = astroConfig.i18n as unknown as {
  defaultLocale: string;
  locales: string[];
  routing: Record<string, boolean>;
};
const integrations = (astroConfig.integrations ?? []) as unknown as { name?: string }[];
const redirects = (astroConfig.redirects ?? {}) as Record<string, string>;

/**
 * Every page file, as a repo-relative path under src/pages. `readdirSync` is
 * used rather than `fs.globSync`, which drops bracketed names like `[code].astro`.
 */
const pageFiles = fs
  .readdirSync(PAGES, { recursive: true, withFileTypes: true })
  .filter((entry) => entry.isFile() && /\.(astro|js|ts)$/.test(entry.name))
  .map((entry) => path.relative(PAGES, path.join(entry.parentPath, entry.name)).split(path.sep).join('/'))
  .sort();

/** `es/features.astro` → `/es/features`; `index.astro` → `/`. */
function routeOf(file: string): string {
  const withoutExt = file.replace(/\.(astro|js|ts)$/, '');
  const trimmed = withoutExt.replace(/(^|\/)index$/, '');
  return `/${trimmed}`.replace(/\/$/, '') || '/';
}

const routes = new Set(pageFiles.map(routeOf));

describe('astro.config i18n', () => {
  it('declares the same locales as src/i18n/config', () => {
    expect([...i18n.locales].sort()).toEqual([...LANGS].sort());
    expect(i18n.defaultLocale).toBe(defaultLang);
  });

  it('serves the default locale from the root', () => {
    expect(i18n.routing.prefixDefaultLocale).toBe(false);
    expect(i18n.routing.redirectToDefaultLocale).toBe(false);
  });

  it('keeps the sitemap and MDX integrations registered', () => {
    const names = integrations.map((i) => i?.name);
    expect(names, 'the sitemap integration must stay registered').toContain('@astrojs/sitemap');
    expect(names, 'MDX posts need the mdx integration').toContain('@astrojs/mdx');
  });

  it('points the site at the canonical origin', () => {
    expect(astroConfig.site).toBe('https://nexow.ai');
  });
});

describe('legacy redirects', () => {
  it('redirects /pricing to /plans in every locale', () => {
    for (const lang of LANGS) {
      const from = `${localizePath('/pricing', lang)}`;
      expect(redirects[from], from).toBe(localizePath('/plans', lang));
    }
  });

  it('only redirects to routes that exist', () => {
    for (const [from, to] of Object.entries(redirects)) {
      expect(routes, `${from} → ${to}`).toContain(to);
      expect(routes, `${from} must not shadow a real page`).not.toContain(from);
    }
  });
});

describe('page tree', () => {
  it('builds a page for every canonical route in the default locale', () => {
    for (const route of CANONICAL_ROUTES) {
      expect(routes, `missing ${route}`).toContain(route);
    }
  });

  it('builds the same set of routes for every locale', () => {
    const canonical = (route: string, lang: Lang) => localizePath(route, lang);
    for (const lang of PREFIXED_LANGS) {
      for (const route of CANONICAL_ROUTES) {
        expect(routes, `missing ${canonical(route, lang)}`).toContain(canonical(route, lang));
      }
    }
  });

  it('ships a blog post route and a feed per locale', () => {
    for (const lang of LANGS) {
      const prefix = lang === defaultLang ? '' : `/${lang}`;
      expect(routes, `${lang} blog post route`).toContain(`${prefix}/blog/[...slug]`);
      expect(routes, `${lang} feed`).toContain(`${prefix}/rss.xml`);
    }
  });

  it('gives every locale the same dynamic routes as the default locale', () => {
    // Derived rather than listed, so adding or retiring a dynamic route only
    // has to stay consistent across locales.
    const dynamic = [...routes].filter(
      (route) => route.includes('[') && !/^\/[a-z]{2}\//.test(route),
    );
    expect(dynamic.length, 'no dynamic routes found').toBeGreaterThan(0);
    for (const lang of PREFIXED_LANGS) {
      for (const route of dynamic) {
        expect(routes, `${lang} is missing ${route}`).toContain(`/${lang}${route}`);
      }
    }
  });

  it('ships exactly one 404 page, at the root', () => {
    expect(pageFiles.filter((f) => f.includes('404'))).toEqual(['404.astro']);
  });

  it('has no locale directory the site does not declare', () => {
    const dirs = fs
      .readdirSync(PAGES, { withFileTypes: true })
      .filter((e) => e.isDirectory() && /^[a-z]{2}$/.test(e.name))
      .map((e) => e.name);
    expect(dirs.sort()).toEqual([...PREFIXED_LANGS].sort());
  });

  it('gives every locale the same number of pages', () => {
    const counts = new Map<string, number>();
    for (const file of pageFiles) {
      // 404 is served once, from the root, for every locale.
      if (file === '404.astro') continue;
      const match = file.match(/^([a-z]{2})\//);
      const lang = match && match[1] in languages ? match[1] : defaultLang;
      counts.set(lang, (counts.get(lang) ?? 0) + 1);
    }
    const perLocale = [...counts.values()];
    expect(counts.size).toBe(LANGS.length);
    expect(new Set(perLocale), `page counts differ: ${JSON.stringify([...counts])}`).toHaveLength(1);
  });
});

describe('navigation links', () => {
  it('points every header link at a route that exists, in every locale', () => {
    for (const lang of LANGS) {
      for (const link of useContent(lang).nav.links) {
        expect(routes, `${lang} nav → ${link.href}`).toContain(localizePath(link.href, lang));
        expect(link.label.trim(), `${lang} nav → ${link.href}`).not.toBe('');
      }
    }
  });

  it('points every footer link at a route that exists or an external URL', () => {
    for (const lang of LANGS) {
      const footer = useContent(lang).footer as unknown as {
        columns?: { links: { href: string; label: string }[] }[];
      };
      for (const column of footer.columns ?? []) {
        for (const link of column.links) {
          if (/^(https?:|mailto:|#)/.test(link.href)) continue;
          // Footer links may deep-link to a section: `/#automate`, `/plans#matrix`.
          const [pathname] = link.href.split('#');
          expect(routes, `${lang} footer → ${link.href}`).toContain(
            localizePath(pathname || '/', lang),
          );
        }
      }
    }
  });

  it('maps every nav and hero-badge icon to a route that exists', () => {
    for (const route of [...Object.keys(NAV_ICONS), ...Object.keys(PAGE_BADGE_ICONS)]) {
      expect(routes, `icon table → ${route}`).toContain(route);
    }
  });

  it('uses locale-free hrefs in nav copy, so localizePath can prefix them', () => {
    for (const lang of LANGS) {
      for (const link of useContent(lang).nav.links) {
        expect(link.href, `${lang} nav → ${link.href}`).not.toMatch(/^\/[a-z]{2}\//);
        expect(link.href, `${lang} nav → ${link.href}`).toMatch(/^\//);
      }
    }
  });
});
