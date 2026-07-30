import { describe, expect, it } from 'vitest';
import { SITE, type Lang } from '../../src/i18n/config';
import { content, useContent } from '../../src/i18n/content';
import { LANGS, PREFIXED_LANGS } from '../helpers/locales';

/**
 * Translation checks a machine can actually judge. Nothing here evaluates
 * whether a translation *reads* well — only the structural properties that
 * break the UI or the brand when they drift: interpolation tokens, markup,
 * brand spelling, whitespace and shared identifiers.
 */
type Leaf = [path: string, value: string];

function leaves(value: unknown, prefix = '', out: Leaf[] = []): Leaf[] {
  if (typeof value === 'string') {
    out.push([prefix, value]);
    return out;
  }
  if (Array.isArray(value)) {
    value.forEach((item, i) => leaves(item, `${prefix}[${i}]`, out));
    return out;
  }
  if (value !== null && typeof value === 'object') {
    for (const [key, child] of Object.entries(value)) {
      leaves(child, prefix ? `${prefix}.${key}` : key, out);
    }
    return out;
  }
  return out;
}

const englishLeaves = leaves(content.en);
const english = new Map(englishLeaves);

/** `{n}`, `{level}`, `{usd}` — the interpolation slots the UI fills at runtime. */
const tokens = (s: string) => [...s.matchAll(/\{[a-zA-Z]+\}/g)].map(([m]) => m).sort();

/** Remove URLs and email addresses, whose lowercase domain is not a brand slip. */
const stripAddresses = (s: string) =>
  s.replace(/https?:\/\/\S+/g, ' ').replace(/[\w.+-]+@[\w.-]+/g, ' ');

/**
 * The numeric amount in a price string, ignoring currency symbol, digit grouping
 * and decimal separator. `null` for a quoted price like "Custom".
 */
function amount(price: string): number | null {
  const digits = price.replace(/[^\d.,]/g, '');
  if (!/\d/.test(digits)) return null;
  // Whichever separator comes last is the decimal one.
  const normalized =
    digits.lastIndexOf(',') > digits.lastIndexOf('.')
      ? digits.replace(/\./g, '').replace(',', '.')
      : digits.replace(/,/g, '');
  const n = Number(normalized);
  return Number.isFinite(n) ? n : null;
}

/** Leaves that are identifiers rather than prose, so translation rules do not apply. */
const isIdentifier = (path: string) =>
  /\b(href|ctaHref|url|icon|id|key|src|logo|banner|placeholder)\b/i.test(path) ||
  path.endsWith('.slug');

const prose = (lang: Lang): Leaf[] =>
  leaves(content[lang]).filter(([path]) => !isIdentifier(path));

describe.each(PREFIXED_LANGS)('%s translations', (lang) => {
  const localeLeaves = prose(lang);

  it('keeps every interpolation token English defines', () => {
    const mismatched: string[] = [];
    for (const [path, value] of localeLeaves) {
      const source = english.get(path);
      if (source === undefined) continue;
      const want = tokens(source);
      const got = tokens(value);
      if (JSON.stringify(want) !== JSON.stringify(got)) {
        mismatched.push(`${path}: expected ${want.join(',') || '—'} got ${got.join(',') || '—'}`);
      }
    }
    expect(mismatched, `${lang} breaks interpolation`).toEqual([]);
  });

  it('introduces no token English does not know how to fill', () => {
    const unknown: string[] = [];
    for (const [path, value] of localeLeaves) {
      if (!english.has(path)) {
        for (const token of tokens(value)) unknown.push(`${path}: ${token}`);
      }
    }
    expect(unknown).toEqual([]);
  });

  it('contains no HTML markup — copy is plain text', () => {
    const markup = localeLeaves.filter(([, v]) => /<\/?[a-z][^>]*>/i.test(v)).map(([p]) => p);
    expect(markup).toEqual([]);
  });

  it('leaves no unresolved template literal', () => {
    const leaked = localeLeaves.filter(([, v]) => /\$\{/.test(v)).map(([p]) => p);
    expect(leaked).toEqual([]);
  });

  it('spells the brand consistently in prose', () => {
    const wrong = localeLeaves
      // The domain is legitimately lowercase inside a URL or an address.
      .map(([p, v]) => [p, stripAddresses(v)] as Leaf)
      .filter(([, v]) => /\b(nexow|NEXOW|NexOw|Nexlow)\b/.test(v))
      .map(([p, v]) => `${p}: ${v.slice(0, 60)}`);
    expect(wrong, 'brand must be written "Nexow"').toEqual([]);
  });

  it('uses the governance token ticker consistently', () => {
    // The token was renamed NEXO → NXW; no locale may still carry the old name.
    const stale = localeLeaves
      .filter(([, v]) => /\bNEXO\b/.test(v))
      .map(([p, v]) => `${p}: ${v.slice(0, 60)}`);
    expect(stale, 'governance token is NXW').toEqual([]);
  });

  it('has no leading or trailing whitespace, or doubled spaces', () => {
    const sloppy = localeLeaves
      .filter(([, v]) => v !== v.trim() || /\s\s/.test(v.replace(/\n\s*/g, ' ')))
      .map(([p]) => p);
    expect(sloppy).toEqual([]);
  });

  it('never empties a string English fills', () => {
    const empty = localeLeaves
      .filter(([path, v]) => v.trim() === '' && (english.get(path) ?? '').trim() !== '')
      .map(([p]) => p);
    expect(empty).toEqual([]);
  });

  it('points every URL at the brand’s own domains', () => {
    const foreign = leaves(content[lang])
      .filter(([, v]) => /^https?:\/\//.test(v))
      .filter(([, v]) => !new URL(v).hostname.endsWith(SITE.domain))
      .map(([p, v]) => `${p}: ${v}`);
    // Social profiles live in SOCIALS, not the locale bundles.
    expect(foreign).toEqual([]);
  });

  it('shares the identifiers English defines, rather than translating them', () => {
    const translated: string[] = [];
    for (const [path, value] of leaves(content[lang]).filter(([p]) => isIdentifier(p))) {
      const source = english.get(path);
      if (source === undefined) continue;
      // A localized href is legitimate only through `localizePath`, never baked in.
      if (path.toLowerCase().includes('href') && value !== source) {
        translated.push(`${path}: ${value} ≠ ${source}`);
      }
    }
    expect(translated).toEqual([]);
  });

  it('writes locale-free hrefs so localizePath can prefix them', () => {
    const prefixed = leaves(content[lang])
      .filter(([p]) => /href/i.test(p))
      .filter(([, v]) => new RegExp(`^/(${LANGS.join('|')})(/|$)`).test(v))
      .map(([p, v]) => `${p}: ${v}`);
    expect(prefixed).toEqual([]);
  });
});

describe('shared facts across locales', () => {
  it('quotes the same plan amounts everywhere, however the currency is formatted', () => {
    // Presentation is localized ("$9.99" vs "9,99 €"); the amount must not be.
    const amounts = (lang: Lang) =>
      useContent(lang).plansPage.tiers.map((t) => [amount(t.priceMonthly), amount(t.priceYearly)]);
    const reference = amounts('en');
    for (const lang of PREFIXED_LANGS) {
      expect(amounts(lang), `${lang} plan amounts drifted`).toEqual(reference);
    }
  });

  it('quotes the same plan CTA targets everywhere', () => {
    const hrefs = (lang: Lang) => useContent(lang).plansPage.tiers.map((t) => t.ctaHref);
    const reference = hrefs('en');
    for (const lang of PREFIXED_LANGS) {
      expect(hrefs(lang), `${lang} CTA targets drifted`).toEqual(reference);
    }
  });

  it('offers the same nav destinations everywhere, whatever the labels', () => {
    for (const lang of PREFIXED_LANGS) {
      const hrefs = useContent(lang).nav.links.map((l) => l.href);
      expect(new Set(hrefs).size, `${lang} repeats a nav destination`).toBe(hrefs.length);
      for (const href of hrefs) {
        expect(
          content.en.nav.links.map((l) => l.href),
          `${lang} nav offers ${href}, which English does not`,
        ).toContain(href);
      }
    }
  });

  it('gives every locale a distinct meta title and description per page', () => {
    for (const lang of LANGS) {
      const bundle = useContent(lang) as unknown as Record<string, { meta?: { title: string; description: string } }>;
      const metas = Object.entries(bundle)
        .filter(([, v]) => v && typeof v === 'object' && 'meta' in v && v.meta?.title)
        .map(([page, v]) => [page, v.meta!] as const);

      expect(metas.length, `${lang} has no page metadata`).toBeGreaterThan(5);
      const titles = metas.map(([, m]) => m.title);
      expect(new Set(titles).size, `${lang} repeats a meta title`).toBe(titles.length);

      // CJK packs far more meaning per character, so the floor is script-aware.
      const floor = ['zh', 'ja', 'ko'].includes(lang) ? 20 : 50;
      for (const [page, meta] of metas) {
        expect(meta.title.trim(), `${lang}.${page}.meta.title`).not.toBe('');
        expect(meta.description.length, `${lang}.${page}.meta.description too short`).toBeGreaterThan(floor);
        expect(meta.description.length, `${lang}.${page}.meta.description too long`).toBeLessThan(400);
      }
    }
  });
});

describe('English source copy', () => {
  const prosePairs = englishLeaves.filter(([path]) => !isIdentifier(path));

  it('uses typographic apostrophes rather than straight quotes in prose', () => {
    const straight = prosePairs
      .filter(([path]) => !/\bcode\b|\bprompt\b/i.test(path))
      .filter(([, v]) => /\w'\w/.test(v))
      .map(([p, v]) => `${p}: ${v.slice(0, 60)}`);
    expect(straight).toEqual([]);
  });

  it('has no doubled spaces or stray whitespace', () => {
    const sloppy = prosePairs
      .filter(([, v]) => v !== v.trim() || /\s\s/.test(v.replace(/\n\s*/g, ' ')))
      .map(([p]) => p);
    expect(sloppy).toEqual([]);
  });

  it('leaves no TODO or placeholder marker', () => {
    const markers = prosePairs
      .filter(([, v]) => /\b(TODO|TBD|FIXME|Lorem ipsum|XXX)\b/i.test(v))
      .map(([p]) => p);
    expect(markers).toEqual([]);
  });
});
