import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { Post } from '../../../src/i18n/blog';

/**
 * `astro:content` is stubbed so the draft/locale filter can be exercised
 * against a fixed catalog. The real collection is covered in
 * `tests/integration/content-collection.test.ts`.
 */
const entries: Post[] = [
  entry('en/oldest', { pubDate: '2026-01-01' }),
  entry('en/newest', { pubDate: '2026-06-01' }),
  entry('en/middle', { pubDate: '2026-03-01' }),
  entry('en/draft-post', { pubDate: '2026-07-01', draft: true }),
  entry('es/hola', { pubDate: '2026-05-01' }),
  entry('ja/nested/deep-slug', { pubDate: '2026-04-01' }),
];

function entry(id: string, data: { pubDate: string; draft?: boolean }): Post {
  return {
    id,
    data: { title: id, pubDate: new Date(data.pubDate), draft: data.draft ?? false },
  } as unknown as Post;
}

vi.mock('astro:content', () => ({
  getCollection: async (_name: string, filter?: (e: Post) => boolean) =>
    filter ? entries.filter(filter) : entries,
}));

let blog: typeof import('../../../src/i18n/blog');

beforeEach(async () => {
  vi.resetModules();
  blog = await import('../../../src/i18n/blog');
});

afterEach(() => {
  vi.unstubAllEnvs();
});

describe('localeOf', () => {
  it('reads the locale from the id prefix', () => {
    expect(blog.localeOf(entry('en/post', { pubDate: '2026-01-01' }))).toBe('en');
    expect(blog.localeOf(entry('ar/post', { pubDate: '2026-01-01' }))).toBe('ar');
  });

  it('reads the locale from a nested id', () => {
    expect(blog.localeOf(entry('ja/nested/deep', { pubDate: '2026-01-01' }))).toBe('ja');
  });
});

describe('slugOf', () => {
  it('drops the locale segment', () => {
    expect(blog.slugOf(entry('en/hello-world', { pubDate: '2026-01-01' }))).toBe('hello-world');
  });

  it('keeps nested path segments', () => {
    expect(blog.slugOf(entry('ja/nested/deep-slug', { pubDate: '2026-01-01' }))).toBe('nested/deep-slug');
  });

  it('is empty for an id with no slug', () => {
    expect(blog.slugOf(entry('en', { pubDate: '2026-01-01' }))).toBe('');
  });
});

describe('getPosts', () => {
  it('returns only the requested locale', async () => {
    const posts = await blog.getPosts('en');
    expect(posts.every((p) => p.id.startsWith('en/'))).toBe(true);

    expect((await blog.getPosts('es')).map((p) => p.id)).toEqual(['es/hola']);
    expect((await blog.getPosts('ja')).map((p) => p.id)).toEqual(['ja/nested/deep-slug']);
  });

  it('returns an empty list for a locale with no posts', async () => {
    expect(await blog.getPosts('tr')).toEqual([]);
  });

  it('sorts newest first', async () => {
    const posts = await blog.getPosts('en');
    const dates = posts.map((p) => p.data.pubDate.valueOf());
    expect(dates).toEqual([...dates].sort((a, b) => b - a));
  });

  it('keeps drafts in development so authors can preview them', async () => {
    vi.stubEnv('PROD', '');
    vi.resetModules();
    const dev = await import('../../../src/i18n/blog');
    expect((await dev.getPosts('en')).map((p) => p.id)).toContain('en/draft-post');
  });

  it('drops drafts in production', async () => {
    vi.stubEnv('PROD', 'true');
    vi.resetModules();
    const prod = await import('../../../src/i18n/blog');
    const posts = await prod.getPosts('en');
    expect(posts.map((p) => p.id)).not.toContain('en/draft-post');
    expect(posts.map((p) => p.id)).toEqual(['en/newest', 'en/middle', 'en/oldest']);
  });
});
