import { defaultLang, languages, type Lang } from './config';

const prefixedLangs = Object.keys(languages).filter((l) => l !== defaultLang) as Lang[];

/** BCP 47 tags (Intl) and Open Graph locale codes, keyed by locale. */
const LOCALE_TAGS: Record<string, string> = {
  en: 'en-US', es: 'es-ES', fr: 'fr-FR', it: 'it-IT', de: 'de-DE',
  nl: 'nl-NL', pt: 'pt-PT', zh: 'zh-CN', ja: 'ja-JP', ar: 'ar', he: 'he-IL',
  ko: 'ko-KR', ru: 'ru-RU', uk: 'uk-UA', ms: 'ms-MY', el: 'el-GR', tr: 'tr-TR',
};
const OG_LOCALES: Record<string, string> = {
  en: 'en_US', es: 'es_ES', fr: 'fr_FR', it: 'it_IT', de: 'de_DE',
  nl: 'nl_NL', pt: 'pt_PT', zh: 'zh_CN', ja: 'ja_JP', ar: 'ar_AR', he: 'he_IL',
  ko: 'ko_KR', ru: 'ru_RU', uk: 'uk_UA', ms: 'ms_MY', el: 'el_GR', tr: 'tr_TR',
};

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

/** Right-to-left locales. */
const RTL_LANGS = ['ar', 'he'];

/** Text direction for a locale — `rtl` for Arabic & Hebrew, else `ltr`. */
export function dir(lang: Lang): 'ltr' | 'rtl' {
  return RTL_LANGS.includes(lang) ? 'rtl' : 'ltr';
}

/** BCP 47 locale tag for Intl formatters. */
export function dateLocale(lang: Lang): string {
  return LOCALE_TAGS[lang];
}

/** Open Graph locale code. */
export function ogLocale(lang: Lang): string {
  return OG_LOCALES[lang];
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
