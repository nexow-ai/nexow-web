import { defaultLang, languages, type Lang } from './config';

const prefixedLangs = Object.keys(languages).filter((l) => l !== defaultLang) as Lang[];

/** Detect the active locale from a URL pathname (`/es/...` → `es`). */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  return prefixedLangs.includes(seg as Lang) ? (seg as Lang) : defaultLang;
}

/**
 * The locale-agnostic route for a URL — the path with any locale prefix removed.
 * `/es/features` → `/features`, `/es` → `/`, `/plans` → `/plans`.
 */
export function getRouteFromUrl(url: URL): string {
  const prefix = prefixedLangs.join('|');
  const path = url.pathname.replace(new RegExp(`\\/(${prefix})(?=\\/|$)`), '') || '/';
  return path;
}

/**
 * Localize a canonical route (always English-shaped, e.g. `/features`) for a
 * given locale. English keeps the root; other locales are prefixed.
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  if (lang === defaultLang) return clean || '/';
  return `/${lang}${clean}` || `/${lang}/`;
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

/** BCP 47 locale tag for Intl formatters. */
export function dateLocale(lang: Lang): string {
  return { en: 'en-US', es: 'es-ES', fr: 'fr-FR' }[lang];
}

/** Open Graph locale code. */
export function ogLocale(lang: Lang): string {
  return { en: 'en_US', es: 'es_ES', fr: 'fr_FR' }[lang];
}

/** Build the set of alternate-locale URLs for a canonical route (for hreflang). */
export function getAlternates(route: string, siteUrl: string) {
  const langs = Object.keys(languages) as Lang[];
  const alternates = Object.fromEntries(
    langs.map((lang) => [lang, withTrailingSlash(new URL(localizePath(route, lang), siteUrl).href)]),
  ) as Record<Lang, string> & { 'x-default': string };
  alternates['x-default'] = alternates[defaultLang];
  return alternates;
}
