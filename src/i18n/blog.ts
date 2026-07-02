import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './config';

export type Post = CollectionEntry<'blog'>;

/** Locale prefix of a post id, e.g. `en/foo` → `en`. */
export function localeOf(entry: Post): Lang {
  return (entry.id.split('/')[0] as Lang) ?? 'en';
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
