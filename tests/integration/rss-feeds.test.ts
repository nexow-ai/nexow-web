import { describe, expect, it } from 'vitest';
import { getPosts, slugOf } from '../../src/i18n/blog';
import { SITE, defaultLang, type Lang } from '../../src/i18n/config';
import { useContent } from '../../src/i18n/content';
import { localizePath } from '../../src/i18n/utils';
import { LANGS } from '../helpers/locales';

/** Every locale's feed endpoint, resolved the way Astro resolves the route. */
const endpoints = import.meta.glob<{ GET: (ctx: { site: URL }) => Promise<Response> }>(
  '../../src/pages/**/rss.xml.js',
  { eager: true },
);

/** `src/pages/es/rss.xml.js` → `es`; the root feed → `en`. */
function localeOfEndpoint(file: string): Lang {
  const match = file.match(/pages\/([a-z]{2})\/rss\.xml\.js$/);
  return (match?.[1] ?? defaultLang) as Lang;
}

const feeds = Object.entries(endpoints).map(([file, mod]) => [localeOfEndpoint(file), mod] as const);

/**
 * Decode the entities `@astrojs/rss` emits, so assertions can compare against
 * the copy as authored instead of guessing which escaping style it used.
 */
function decodeXml(xml: string): string {
  return xml
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code: string) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

describe('RSS endpoints', () => {
  it('ships one feed per locale', () => {
    const locales = feeds.map(([lang]) => lang);
    expect(locales.sort()).toEqual([...LANGS].sort());
    expect(new Set(locales).size).toBe(LANGS.length);
  });
});

describe.each(feeds)('%s feed', (lang, mod) => {
  const render = () => mod.GET({ site: new URL(SITE.url) });

  it('responds with RSS XML', async () => {
    const response = await render();
    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toContain('xml');

    const xml = await response.text();
    expect(xml.startsWith('<?xml')).toBe(true);
    expect(xml).toContain('<rss');
    expect(xml).toContain('</rss>');
    expect(xml).toContain('<channel>');
  });

  it('titles and describes the channel from the locale bundle', async () => {
    const xml = decodeXml(await (await render()).text());
    const t = useContent(lang).blog.meta;
    expect(xml).toContain(`<title>${t.title}</title>`);
    expect(xml).toContain(`<description>${t.description}</description>`);
  });

  it('declares its own language', async () => {
    const xml = await (await render()).text();
    expect(xml).toContain(`<language>${lang}</language>`);
  });

  it('points the channel link at the canonical site', async () => {
    const xml = await (await render()).text();
    expect(xml).toContain(`<link>${SITE.url}/</link>`);
  });

  it('lists every published post for the locale, and nothing else', async () => {
    const xml = await (await render()).text();
    const posts = await getPosts(lang);
    const items = xml.match(/<item>/g) ?? [];
    expect(items.length).toBe(posts.length);
  });

  it('links each item at that locale’s blog route', async () => {
    const xml = await (await render()).text();
    const posts = await getPosts(lang);
    const prefix = localizePath('/blog', lang);
    for (const post of posts) {
      const href = `${prefix === '/blog' ? '/blog' : prefix}/${slugOf(post)}/`;
      expect(xml, `${lang} → ${href}`).toContain(`<link>${SITE.url}${href}</link>`);
    }
  });

  it('gives every item a title, description and pubDate', async () => {
    const xml = await (await render()).text();
    const posts = await getPosts(lang);
    if (posts.length === 0) return;

    const itemBlocks = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(([, body]) => body);
    expect(itemBlocks.length).toBe(posts.length);
    for (const body of itemBlocks) {
      expect(body).toMatch(/<title>[^<]+<\/title>/);
      expect(body).toMatch(/<description>[^<]+<\/description>/);
      expect(body).toMatch(/<pubDate>[^<]+<\/pubDate>/);
      expect(new Date(body.match(/<pubDate>([^<]+)<\/pubDate>/)![1]).valueOf()).not.toBeNaN();
    }
  });

  it('carries each post’s tags as categories', async () => {
    const xml = decodeXml(await (await render()).text());
    for (const post of await getPosts(lang)) {
      for (const tag of post.data.tags) {
        expect(xml, `${lang} → ${tag}`).toContain(`<category>${tag}</category>`);
      }
    }
  });

  it('orders items newest first, matching the blog index', async () => {
    const xml = await (await render()).text();
    const dates = [...xml.matchAll(/<pubDate>([^<]+)<\/pubDate>/g)].map(([, d]) => new Date(d).valueOf());
    expect(dates).toEqual([...dates].sort((a, b) => b - a));
  });
});
