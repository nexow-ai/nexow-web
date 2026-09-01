import { describe, expect, it } from 'vitest';
import { SITE, defaultLang, languages, type Lang } from '../../src/i18n/config';
import { useContent } from '../../src/i18n/content';
import { dir, getAlternates, localizePath, withTrailingSlash } from '../../src/i18n/utils';
import { getPageAccent } from '../../src/i18n/accent';
import { getPosts, slugOf } from '../../src/i18n/blog';
import { CANONICAL_ROUTES, LANGS } from '../helpers/locales';
import { linkHrefs, metaContent, render } from '../helpers/render';

/**
 * Every canonical page, imported through Astro's page tree so a render exercises
 * the real layout, head, header, footer and sections.
 */
const pageModules = import.meta.glob<{ default: unknown }>('../../src/pages/**/*.astro', {
  eager: true,
});

function pageFor(route: string, lang: Lang): unknown {
  const localized = localizePath(route, lang);
  const file = localized === '/' ? 'index' : `${localized.replace(/^\//, '')}/index`;
  return (
    pageModules[`../../src/pages/${localized.replace(/^\//, '') || 'index'}.astro`]?.default ??
    pageModules[`../../src/pages/${file}.astro`]?.default
  );
}

/** One representative locale per script direction plus the default. */
const SAMPLE_LANGS: Lang[] = ['en', 'es', 'ja', 'ar'];

describe('page tree renders', () => {
  it('resolves a component for every canonical route in every locale', () => {
    for (const lang of LANGS) {
      for (const route of CANONICAL_ROUTES) {
        expect(pageFor(route, lang), `${lang} ${route}`).toBeDefined();
      }
    }
  });
});

describe.each(CANONICAL_ROUTES)('%s (English)', (route) => {
  it('renders a complete document', async () => {
    const html = await render(pageFor(route, 'en') as never, route);
    expect(html).toContain('<html lang="en"');
    expect(html).toContain('</html>');
    expect(html).toMatch(/<title>[^<]+<\/title>/);
    expect(html).toContain('<main');
    expect(html).toContain('<footer');
  });

  it('exposes exactly one canonical URL, trailing-slashed', async () => {
    const html = await render(pageFor(route, 'en') as never, route);
    const canonical = linkHrefs(html, 'canonical');
    expect(canonical).toHaveLength(1);
    expect(canonical[0]).toBe(withTrailingSlash(new URL(route, SITE.url).href));
  });

  it('lists an hreflang alternate for every locale plus x-default', async () => {
    const html = await render(pageFor(route, 'en') as never, route);
    const expected = getAlternates(route, SITE.url);
    for (const [lang, href] of Object.entries(expected)) {
      expect(html, `${route} → hreflang ${lang}`).toContain(`hreflang="${lang}"`);
      expect(html, `${route} → ${href}`).toContain(href);
    }
  });

  it('carries Open Graph and Twitter cards', async () => {
    const html = await render(pageFor(route, 'en') as never, route);
    expect(metaContent(html, 'og:title')[0]?.length).toBeGreaterThan(0);
    expect(metaContent(html, 'og:description')[0]?.length).toBeGreaterThan(0);
    expect(metaContent(html, 'og:url')[0]).toBe(withTrailingSlash(new URL(route, SITE.url).href));
    expect(metaContent(html, 'og:locale')[0]).toBe('en_US');
    expect(metaContent(html, 'og:site_name')[0]).toBe(SITE.name);
    expect(metaContent(html, 'description')[0]?.length).toBeGreaterThan(0);
  });

  it('applies the route’s accent palette', async () => {
    const html = await render(pageFor(route, 'en') as never, route);
    expect(html).toContain(`data-accent="${getPageAccent(route)}"`);
  });

  it('leaves no unresolved interpolation placeholders in the visible copy', async () => {
    const html = await render(pageFor(route, 'en') as never, route);
    const body = html.replace(/<script[\s\S]*?<\/script>/g, '');
    // Text nodes only: attributes legitimately carry client-side templates
    // such as `data-template="{n} connectors"`.
    const text = body.replace(/<[^>]*>/g, '');

    expect(body, `${route} leaks a template literal`).not.toMatch(/\$\{[a-zA-Z]/);
    expect(text, `${route} leaks an i18n token`).not.toMatch(/\{[a-z]+\}/);
    expect(text, `${route} renders undefined`).not.toMatch(/\bundefined\b/);
    expect(text, `${route} renders an object`).not.toContain('[object Object]');
    expect(text, `${route} renders NaN`).not.toMatch(/\bNaN\b/);
  });
});

describe.each(SAMPLE_LANGS)('home page in %s', (lang) => {
  it('sets the document language and direction', async () => {
    const html = await render(pageFor('/', lang) as never, localizePath('/', lang));
    expect(html).toContain(`<html lang="${lang}"`);
    expect(html).toContain(`dir="${dir(lang)}"`);
  });

  it('renders that locale’s own copy, not English', async () => {
    const html = await render(pageFor('/', lang) as never, localizePath('/', lang));
    const t = useContent(lang);
    expect(html).toContain(t.nav.launch);
    if (lang !== defaultLang) {
      expect(html).not.toContain(`<title>${useContent('en').home.meta.title}</title>`);
    }
  });

  it('links the header nav at that locale’s routes', async () => {
    const html = await render(pageFor('/', lang) as never, localizePath('/', lang));
    for (const link of useContent(lang).nav.links) {
      expect(html, `${lang} nav → ${link.href}`).toContain(`href="${localizePath(link.href, lang)}"`);
    }
  });

  it('canonicalizes to that locale’s home URL', async () => {
    const route = localizePath('/', lang);
    const html = await render(pageFor('/', lang) as never, route);
    expect(linkHrefs(html, 'canonical')[0]).toBe(withTrailingSlash(new URL(route, SITE.url).href));
    expect(metaContent(html, 'og:locale')[0]).toMatch(new RegExp(`^${lang}_`));
  });

  it('offers a switch to every other locale', async () => {
    const html = await render(pageFor('/', lang) as never, localizePath('/', lang));
    for (const other of LANGS.filter((l) => l !== lang)) {
      expect(html, `${lang} → ${other}`).toContain(languages[other]);
    }
  });

  it('stays on the page theme with no invert bands', async () => {
    const html = await render(pageFor('/', lang) as never, localizePath('/', lang));
    expect(html).not.toMatch(/class="[^"]*tone-invert/);
  });
});

describe('404 page', () => {
  it('renders and offers a way home', async () => {
    const html = await render(pageModules['../../src/pages/404.astro']!.default as never, '/nope');
    expect(html).toContain('<html lang="en"');
    expect(html).toContain('href="/"');
  });

  it('embeds copy for every non-default locale, since one file serves them all', async () => {
    const html = await render(pageModules['../../src/pages/404.astro']!.default as never, '/nope');
    for (const lang of LANGS.filter((l) => l !== defaultLang)) {
      expect(html, `404 is missing ${lang}`).toContain(`"${lang}":`);
    }
  });
});

describe('blog index', () => {
  it('links every published post at its localized route', async () => {
    const html = await render(pageFor('/blog', 'en') as never, '/blog');
    const main = html.slice(html.indexOf('<main'));
    const posts = await getPosts('en');
    expect(posts.length).toBeGreaterThan(0);
    for (const post of posts) {
      expect(main, `/blog is missing ${slugOf(post)}`).toContain(`href="/blog/${slugOf(post)}"`);
      expect(main, `/blog is missing the title of ${slugOf(post)}`).toContain(post.data.title);
    }
  });

  it('links each locale’s own posts and feed', async () => {
    for (const lang of ['es', 'ja'] as const) {
      const html = await render(pageFor('/blog', lang) as never, localizePath('/blog', lang));
      expect(html, `${lang} feed link`).toContain(`href="/${lang}/rss.xml"`);
      for (const post of await getPosts(lang)) {
        expect(html, `${lang} is missing ${slugOf(post)}`).toContain(
          `href="/${lang}/blog/${slugOf(post)}"`,
        );
      }
    }
  });
});

describe('changelog', () => {
  it('lists the release posts and omits every other kind of article', async () => {
    const html = await render(pageFor('/changelog', 'en') as never, '/changelog');
    const posts = await getPosts('en');
    const [releases, others] = [
      posts.filter((p) => p.data.category === 'release'),
      posts.filter((p) => p.data.category !== 'release'),
    ];
    expect(releases.length).toBeGreaterThan(0);
    expect(others.length, 'no non-release post to check exclusion against').toBeGreaterThan(0);

    for (const post of releases.slice(0, 24)) {
      expect(html, `/changelog is missing ${slugOf(post)}`).toContain(`href="/blog/${slugOf(post)}"`);
    }
    for (const post of others) {
      expect(html, `/changelog should not list ${slugOf(post)}`).not.toContain(
        `href="/blog/${slugOf(post)}"`,
      );
    }
  });

  it('is populated in locales that translate their tags', async () => {
    // These pages were empty while the filter matched English tag spellings.
    for (const lang of ['es', 'ja', 'ar'] as const) {
      const html = await render(pageFor('/changelog', lang) as never, localizePath('/changelog', lang));
      const releases = (await getPosts(lang)).filter((p) => p.data.category === 'release');
      expect(releases.length, `${lang} has no release posts`).toBeGreaterThan(0);
      expect(html, `${lang} changelog is empty`).toContain(
        `href="/${lang}/blog/${slugOf(releases[0]!)}"`,
      );
    }
  });
});

describe('legal pages', () => {
  const LEGAL = ['/privacy', '/terms', '/cookies', '/legal', '/acceptable-use'] as const;

  it.each(LEGAL)('%s renders numbered sections and an update stamp', async (route) => {
    const html = await render(pageFor(route, 'en') as never, route);
    expect(html).toContain('Last updated:');
    expect(html).toMatch(/>1\.\s/);
  });

  it.each(LEGAL)('%s notes that English is the binding language in a non-English locale', async (route) => {
    const html = await render(pageFor(route, 'es') as never, localizePath(route, 'es'));
    // Locales ship a translated body; the binding-language note still names English.
    expect(html).toContain('English');
  });
});
