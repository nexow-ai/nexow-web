import { describe, expect, it } from 'vitest';
import { SITE, defaultLang } from '../../../src/i18n/config';
import {
  dateLocale,
  dir,
  getAlternates,
  getLangFromUrl,
  getRouteFromUrl,
  localizePath,
  ogLocale,
  withTrailingSlash,
} from '../../../src/i18n/utils';
import { CANONICAL_ROUTES, LANGS, PREFIXED_LANGS } from '../../helpers/locales';

const url = (path: string) => new URL(path, SITE.url);

describe('getLangFromUrl', () => {
  it('reads the locale from a prefixed path', () => {
    for (const lang of PREFIXED_LANGS) {
      expect(getLangFromUrl(url(`/${lang}/features`))).toBe(lang);
      expect(getLangFromUrl(url(`/${lang}/`))).toBe(lang);
      expect(getLangFromUrl(url(`/${lang}`))).toBe(lang);
    }
  });

  it('falls back to the default locale for unprefixed paths', () => {
    expect(getLangFromUrl(url('/'))).toBe(defaultLang);
    expect(getLangFromUrl(url('/features'))).toBe(defaultLang);
    expect(getLangFromUrl(url('/blog/some-post/'))).toBe(defaultLang);
  });

  it('never treats the default locale as a prefix', () => {
    // `/en/...` is not a route this site builds, so it resolves as content.
    expect(getLangFromUrl(url('/en/features'))).toBe(defaultLang);
  });

  it('ignores segments that merely look like a locale', () => {
    expect(getLangFromUrl(url('/esports'))).toBe(defaultLang);
    expect(getLangFromUrl(url('/de-DE/features'))).toBe(defaultLang);
  });
});

describe('getRouteFromUrl', () => {
  it('strips the locale prefix', () => {
    expect(getRouteFromUrl(url('/es/features'))).toBe('/features');
    expect(getRouteFromUrl(url('/ja/for/traders'))).toBe('/for/traders');
    expect(getRouteFromUrl(url('/ar/blog/a-post/'))).toBe('/blog/a-post/');
  });

  it('maps a bare locale root to /', () => {
    for (const lang of PREFIXED_LANGS) {
      expect(getRouteFromUrl(url(`/${lang}`))).toBe('/');
    }
  });

  it('leaves unprefixed routes untouched', () => {
    expect(getRouteFromUrl(url('/'))).toBe('/');
    expect(getRouteFromUrl(url('/plans'))).toBe('/plans');
    expect(getRouteFromUrl(url('/plans/'))).toBe('/plans/');
  });

  it('does not strip a segment that only starts with a locale code', () => {
    expect(getRouteFromUrl(url('/esports'))).toBe('/esports');
    expect(getRouteFromUrl(url('/italy/guide'))).toBe('/italy/guide');
  });

  it('only strips the leading locale, not a later one', () => {
    expect(getRouteFromUrl(url('/es/de/nested'))).toBe('/de/nested');
  });
});

describe('localizePath', () => {
  it('keeps the default locale at the root', () => {
    expect(localizePath('/', defaultLang)).toBe('/');
    expect(localizePath('/features', defaultLang)).toBe('/features');
  });

  it('prefixes every other locale', () => {
    expect(localizePath('/features', 'es')).toBe('/es/features');
    expect(localizePath('/for/traders', 'zh')).toBe('/zh/for/traders');
  });

  it('maps the home route to the bare locale root', () => {
    for (const lang of PREFIXED_LANGS) {
      expect(localizePath('/', lang)).toBe(`/${lang}`);
    }
  });

  it('normalizes a trailing slash away before prefixing', () => {
    expect(localizePath('/features/', 'de')).toBe('/de/features');
    expect(localizePath('/features/', defaultLang)).toBe('/features');
  });
});

describe('localizePath ⇄ getRouteFromUrl', () => {
  it('round-trips every canonical route in every locale', () => {
    for (const lang of LANGS) {
      for (const route of CANONICAL_ROUTES) {
        const localized = localizePath(route, lang);
        expect(getRouteFromUrl(url(localized)), `${lang} ${route}`).toBe(route);
        expect(getLangFromUrl(url(localized)), `${lang} ${route}`).toBe(lang);
      }
    }
  });
});

describe('withTrailingSlash', () => {
  it('appends a slash when the path has none', () => {
    expect(withTrailingSlash('https://nexow.ai/features')).toBe('https://nexow.ai/features/');
  });

  it('is idempotent', () => {
    const once = withTrailingSlash('https://nexow.ai/features');
    expect(withTrailingSlash(once)).toBe(once);
    expect(withTrailingSlash('https://nexow.ai/')).toBe('https://nexow.ai/');
  });

  it('preserves the query string and hash', () => {
    expect(withTrailingSlash('https://nexow.ai/plans?tab=yearly#matrix')).toBe(
      'https://nexow.ai/plans/?tab=yearly#matrix',
    );
  });
});

describe('dir', () => {
  it('marks Arabic and Hebrew right-to-left', () => {
    expect(dir('ar')).toBe('rtl');
    expect(dir('he')).toBe('rtl');
  });

  it('marks every other locale left-to-right', () => {
    for (const lang of LANGS.filter((l) => l !== 'ar' && l !== 'he')) {
      expect(dir(lang), lang).toBe('ltr');
    }
  });
});

describe('dateLocale', () => {
  it('returns a BCP 47 tag Intl accepts for every locale', () => {
    for (const lang of LANGS) {
      const tag = dateLocale(lang);
      expect(tag, lang).toMatch(/^[a-z]{2}(-[A-Za-z]{2,4})?$/);
      expect(() => new Intl.DateTimeFormat(tag), lang).not.toThrow();
      expect(new Intl.Locale(tag).language, lang).toBe(lang);
    }
  });
});

describe('ogLocale', () => {
  it('returns an underscore-separated Open Graph code for every locale', () => {
    for (const lang of LANGS) {
      const code = ogLocale(lang);
      expect(code, lang).toMatch(/^[a-z]{2}_[A-Z]{2}$/);
      expect(code.startsWith(`${lang}_`), lang).toBe(true);
    }
  });
});

describe('getAlternates', () => {
  const alternates = getAlternates('/features', SITE.url);

  it('covers every locale plus x-default', () => {
    expect(Object.keys(alternates).sort()).toEqual([...LANGS, 'x-default'].sort());
  });

  it('points x-default at the default locale', () => {
    expect(alternates['x-default']).toBe(alternates[defaultLang]);
    expect(alternates[defaultLang]).toBe('https://nexow.ai/features/');
  });

  it('emits absolute, trailing-slashed URLs on the canonical origin', () => {
    for (const [lang, href] of Object.entries(alternates)) {
      expect(href, lang).toMatch(/^https:\/\/nexow\.ai\/.*\/$/);
      expect(new URL(href).origin, lang).toBe(SITE.url);
    }
  });

  it('prefixes non-default locales', () => {
    expect(alternates.es).toBe('https://nexow.ai/es/features/');
    expect(alternates.tr).toBe('https://nexow.ai/tr/features/');
  });

  it('resolves the home route to bare locale roots', () => {
    const home = getAlternates('/', SITE.url);
    expect(home.en).toBe('https://nexow.ai/');
    expect(home.ja).toBe('https://nexow.ai/ja/');
  });

  it('produces one distinct URL per locale', () => {
    const hrefs = LANGS.map((l) => alternates[l]);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });
});
