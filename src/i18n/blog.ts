import { getCollection, type CollectionEntry } from 'astro:content';
import { languages, type Lang } from './config';

export type Post = CollectionEntry<'blog'>;

/** Article kind, language-neutral. Mirrors the enum in `src/content.config.ts`. */
export type BlogCategory = Post['data']['category'];

/** Locale prefix of a post id, e.g. `en/foo` → `en`. */
export function localeOf(entry: Post): Lang {
  // `split` always yields at least one element, so index 0 is never undefined.
  return entry.id.split('/')[0] as Lang;
}

/** Slug of a post id, e.g. `en/foo` → `foo`. */
export function slugOf(entry: Post): string {
  return entry.id.split('/').slice(1).join('/');
}

/** Published posts for a locale, newest first. Drafts excluded in production. */
export async function getPosts(lang: Lang): Promise<Post[]> {
  const posts = await getCollection('blog', (e) => {
    const isDraft = e.data.draft && import.meta.env.PROD;
    return !isDraft && localeOf(e) === lang;
  });
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/**
 * Locales that actually publish `slug`, in site order. Translations arrive
 * after the English original, so pointing hreflang at all 17 locales
 * unconditionally would advertise pages that 404.
 */
export async function localesForSlug(slug: string): Promise<Lang[]> {
  const posts = await getCollection('blog', (e) => {
    const isDraft = e.data.draft && import.meta.env.PROD;
    return !isDraft && slugOf(e) === slug;
  });
  const published = new Set(posts.map(localeOf));
  return (Object.keys(languages) as Lang[]).filter((lang) => published.has(lang));
}
