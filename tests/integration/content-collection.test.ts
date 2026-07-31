import { getCollection } from 'astro:content';
import { z } from 'astro:content';
import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { collections } from '../../src/content.config';
import { getPosts, localeOf, slugOf, type Post } from '../../src/i18n/blog';
import { LANGS } from '../helpers/locales';

const ROOT = path.resolve(import.meta.dirname, '..', '..');
const BLOG_ASSETS = path.join(ROOT, 'src/assets/blog');
const BLOG_CONTENT = path.join(ROOT, 'src/content/blog');

const all = await getCollection('blog');

/**
 * The collection schema is a factory so Astro can inject `image()`. Resolve it
 * once with a stand-in image type, and validate frontmatter against it.
 */
type Frontmatter = {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  author: string;
  tags: string[];
  draft: boolean;
};

function blogSchema(): { parse: (value: unknown) => Frontmatter } {
  const factory = collections.blog as unknown as {
    schema: (context: { image: () => unknown }) => { parse: (value: unknown) => Frontmatter };
  };
  return factory.schema({ image: () => z.string() });
}

describe('blog collection config', () => {
  it('loads markdown and MDX from the per-locale content tree', () => {
    expect(collections.blog).toBeDefined();
    expect(all.length).toBeGreaterThan(0);
  });

  it('validates a well-formed entry through the shipped schema', () => {
    const schema = blogSchema();

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
    const schema = blogSchema();

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
    const schema = blogSchema();

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

  it('tags with trimmed, unique keywords in the post’s own language', () => {
    for (const entry of all) {
      expect(new Set(entry.data.tags).size, `${entry.id} repeats a tag`).toBe(entry.data.tags.length);
      for (const tag of entry.data.tags) {
        const label = `${entry.id} → "${tag}"`;
        expect(tag, label).toBe(tag.trim());
        expect(tag, label).not.toBe('');
        // Tags become RSS categories and filter chips — no separators inside one.
        expect(tag, label).not.toMatch(/[,;/|]/);
      }
    }
  });

  it('never spells the same tag two ways, which would split the tag into two chips', () => {
    // Non-Latin acronyms stay capitalised (uk "ШІ"), so the rule is consistency
    // across the corpus rather than a blanket lowercase.
    const byFold = new Map<string, Set<string>>();
    for (const entry of all) {
      for (const tag of entry.data.tags) {
        const fold = tag.toLocaleLowerCase();
        (byFold.get(fold) ?? byFold.set(fold, new Set()).get(fold)!).add(tag);
      }
    }
    const collisions = [...byFold.values()].filter((variants) => variants.size > 1).map((v) => [...v]);
    expect(collisions, 'tags that differ only by case').toEqual([]);
  });

  it('references a hero image that exists on disk', () => {
    // A missing `heroImage` fails `astro build` with ImageNotFound, so it must
    // be caught here rather than in CI's build step.
    for (const entry of all) {
      if (!entry.data.heroImage) continue;
      const src = (entry.data.heroImage as { src: string }).src;
      const name = src.split('/').pop()!.replace(/\.[a-z0-9]+\.svg$/i, '.svg');
      const file = path.join(BLOG_ASSETS, name.replace(/\?.*$/, ''));
      expect(fs.existsSync(file) || fs.existsSync(path.join(BLOG_ASSETS, name)), `${entry.id} → ${src}`).toBe(true);
    }
  });

  it('points every raw frontmatter heroImage at a file in src/assets/blog', () => {
    const posts = fs.globSync('**/*.{md,mdx}', { cwd: BLOG_CONTENT });
    expect(posts.length).toBe(all.length);
    for (const post of posts) {
      const raw = fs.readFileSync(path.join(BLOG_CONTENT, post), 'utf8');
      const hero = raw.match(/^heroImage:\s*(\S+)\s*$/m)?.[1];
      if (!hero) continue;
      const resolved = path.resolve(path.dirname(path.join(BLOG_CONTENT, post)), hero);
      expect(fs.existsSync(resolved), `${post} → ${hero}`).toBe(true);
      expect(path.dirname(resolved), `${post} → ${hero}`).toBe(BLOG_ASSETS);
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
