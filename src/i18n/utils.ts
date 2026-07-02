import { defaultLang, type Lang } from './config';

/** Detect the active locale from a URL pathname (`/es/...` → `es`). */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  return seg === 'es' ? 'es' : 'en';
}

/**
 * The locale-agnostic route for a URL — the path with any `/es` prefix removed.
 * `/es/features` → `/features`, `/es` → `/`, `/pricing` → `/pricing`.
 */
export function getRouteFromUrl(url: URL): string {
  const path = url.pathname.replace(/\/es(?=\/|$)/, '') || '/';
  return path;
}

/**
 * Localize a canonical route (always English-shaped, e.g. `/features`) for a
 * given locale. English keeps the root; Spanish is prefixed with `/es`.
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  if (lang === defaultLang) return clean || '/';
  return `/es${clean}` || '/es/';
}

/**
 * Ensure a URL's path ends in a trailing slash to match Astro's directory
 * output and the generated sitemap, keeping canonical/hreflang consistent.
 */
export function withTrailingSlash(href: string): string {
  const u = new URL(href);
  if (!u.pathname.endsWith('/')) u.pathname += '/';
  return u.href;
}

/** Build the set of alternate-locale URLs for a canonical route (for hreflang). */
export function getAlternates(route: string, siteUrl: string) {
  return {
    en: withTrailingSlash(new URL(localizePath(route, 'en'), siteUrl).href),
    es: withTrailingSlash(new URL(localizePath(route, 'es'), siteUrl).href),
    'x-default': withTrailingSlash(new URL(localizePath(route, 'en'), siteUrl).href),
  };
}
