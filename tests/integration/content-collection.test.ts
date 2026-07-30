import { getCollection } from 'astro:content';
import { z } from 'astro:content';
import { describe, expect, it } from 'vitest';
import { collections } from '../../src/content.config';
import { getPosts, localeOf, slugOf, type Post } from '../../src/i18n/blog';
import { LANGS } from '../helpers/locales';

const all = await getCollection('blog');

describe('blog collection config', () => {
  it('loads markdown and MDX from the per-locale content tree', () => {
    expect(collections.blog).toBeDefined();
    expect(all.length).toBeGreaterThan(0);
  });

  it('validates a well-formed entry through the shipped schema', () => {
    // The schema is a factory so `image()` can be injected by Astro.
    const schema = (collections.blog as { schema: (ctx: { image: () => z.ZodTypeAny }) => z.ZodTypeAny })
      .schema({ image: () => z.string() });

    const parsed = schema.parse({
      title: 'Hello',
      description: 'A post',
      pubDate: '2026-01-02',
    });
    expect(parsed).toMatchObject({
      title: 'Hello',
      description: 'A post',
      author: 'The Nexow Team',
      tags: [],
      draft: false,
    });
    expect(parsed.pubDate).toBeInstanceOf(Date);
  });

  it('accepts the optional fields posts actually use', () => {
    const schema = (collections.blog as { schema: (ctx: { image: () => z.ZodTypeAny }) => z.ZodTypeAny })
      .schema({ image: () => z.string() });

    const parsed = schema.parse({
      title: 'Hello',
      description: 'A post',
      pubDate: '2026-01-02',
      updatedDate: '2026-02-03',
      author: 'Alex',
      tags: ['product', 'ai'],
      heroImage: '/img.svg',
      draft: true,
    });
    expect(parsed.updatedDate).toBeInstanceOf(Date);
    expect(parsed).toMatchObject({ author: 'Alex', tags: ['product', 'ai'], draft: true });
  });

  it('rejects an entry missing the required frontmatter', () => {
    const schema = (collections.blog as { schema: (ctx: { image: () => z.ZodTypeAny }) => z.ZodTypeAny })
      .schema({ image: () => z.string() });

    expect(() => schema.parse({ description: 'no title', pubDate: '2026-01-02' })).toThrow();
    expect(() => schema.parse({ title: 'no date', description: 'x' })).toThrow();
    expect(() => schema.parse({ title: 'bad tags', description: 'x', pubDate: '2026-01-02', tags: 'nope' })).toThrow();
  });
});

describe('published posts', () => {
  it('lives under a locale directory the site ships', () => {
    for (const entry of all) {
      expect(LANGS, entry.id).toContain(localeOf(entry));
      expect(slugOf(entry), entry.id).not.toBe('');
    }
  });

  it('uses url-safe slugs, unique within each locale', () => {
    for (const lang of LANGS) {
      const slugs = all.filter((e) => localeOf(e) === lang).map(slugOf);
      expect(new Set(slugs).size, `${lang} has duplicate slugs`).toBe(slugs.length);
      for (const slug of slugs) {
        expect(slug, `${lang}/${slug}`).toMatch(/^[a-z0-9]+(?:[-/][a-z0-9]+)*$/);
      }
    }
  });

  it('carries complete frontmatter on every entry', () => {
    for (const entry of all) {
      expect(entry.data.title.trim(), entry.id).not.toBe('');
      expect(entry.data.description.trim(), entry.id).not.toBe('');
      expect(entry.data.pubDate, entry.id).toBeInstanceOf(Date);
      expect(Number.isNaN(entry.data.pubDate.valueOf()), entry.id).toBe(false);
      expect(entry.data.author.trim(), entry.id).not.toBe('');
      expect(Array.isArray(entry.data.tags), entry.id).toBe(true);
    }
  });

  it('never dates an update before publication', () => {
    for (const entry of all) {
      if (!entry.data.updatedDate) continue;
      expect(entry.data.updatedDate.valueOf(), entry.id).toBeGreaterThanOrEqual(
        entry.data.pubDate.valueOf(),
      );
    }
  });

  it('tags with lowercase, trimmed keywords', () => {
    for (const entry of all) {
      for (const tag of entry.data.tags) {
        expect(tag, `${entry.id} → "${tag}"`).toBe(tag.trim());
        expect(tag, `${entry.id} → "${tag}"`).toMatch(/^[a-z0-9][a-z0-9 -]*$/);
      }
    }
  });

  it('has body copy to render', () => {
    for (const entry of all) {
      expect((entry.body ?? '').trim().length, entry.id).toBeGreaterThan(100);
    }
  });
});

describe('getPosts against the real collection', () => {
  it('partitions the collection by locale with nothing left over', async () => {
    const perLocale = await Promise.all(LANGS.map((lang) => getPosts(lang)));
    const total = perLocale.reduce((sum, posts) => sum + posts.length, 0);
    expect(total).toBe(all.length);
  });

  it('returns English posts newest first', async () => {
    const posts = await getPosts('en');
    expect(posts.length).toBeGreaterThan(0);
    const dates = posts.map((p) => p.data.pubDate.valueOf());
    expect(dates).toEqual([...dates].sort((a, b) => b - a));
  });

  it('serves the same slugs in every locale that has posts', async () => {
    const english = new Set((await getPosts('en')).map(slugOf));
    for (const lang of LANGS.filter((l) => l !== 'en')) {
      const posts = await getPosts(lang);
      if (posts.length === 0) continue;
      for (const post of posts) {
        expect(english, `${lang}/${slugOf(post)} has no English original`).toContain(slugOf(post));
      }
    }
  });

  it('only returns entries belonging to the requested locale', async () => {
    for (const lang of LANGS) {
      const posts: Post[] = await getPosts(lang);
      for (const post of posts) {
        expect(localeOf(post), post.id).toBe(lang);
      }
    }
  });
});
