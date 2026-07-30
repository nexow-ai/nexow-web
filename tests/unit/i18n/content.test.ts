import { afterEach, describe, expect, it, vi } from 'vitest';
import { CONNECTORS, CONNECTOR_GROUPS, content, useContent } from '../../../src/i18n/content';
import { LANGS, PREFIXED_LANGS } from '../../helpers/locales';

/** Every `a.b.c` path to a primitive leaf, plus the type found there. */
function shape(value: unknown, prefix = '', out = new Map<string, string>()): Map<string, string> {
  if (Array.isArray(value)) {
    // Arrays may legitimately differ in length between locales, and entries can
    // carry optional fields (a stat with a `suffix`, one without). Describe the
    // union of every entry's shape rather than indexing.
    out.set(`${prefix}[]`, 'array');
    for (const item of value) shape(item, `${prefix}[]`, out);
    return out;
  }
  if (value !== null && typeof value === 'object') {
    for (const [key, child] of Object.entries(value)) {
      shape(child, prefix ? `${prefix}.${key}` : key, out);
    }
    return out;
  }
  out.set(prefix, value === null ? 'null' : typeof value);
  return out;
}

describe('content', () => {
  it('registers exactly one bundle per shipped locale', () => {
    expect(Object.keys(content).sort()).toEqual([...LANGS].sort());
  });

  it('gives every bundle the page sections the layouts read', () => {
    for (const lang of LANGS) {
      const bundle = content[lang];
      expect(bundle.nav, lang).toBeTruthy();
      expect(bundle.footer, lang).toBeTruthy();
      expect(bundle.home, lang).toBeTruthy();
    }
  });
});

describe('CONNECTOR_GROUPS', () => {
  it('has a unique key per group and at least one venue in each', () => {
    const keys = CONNECTOR_GROUPS.map((g) => g.key);
    expect(new Set(keys).size).toBe(keys.length);
    for (const group of CONNECTOR_GROUPS) {
      expect(group.venues.length, group.key).toBeGreaterThan(0);
    }
  });

  it('flattens to the marquee venue list without duplicates', () => {
    expect(CONNECTORS).toEqual(CONNECTOR_GROUPS.flatMap((g) => g.venues));
    expect(new Set(CONNECTORS).size).toBe(CONNECTORS.length);
  });

  it('names every venue with printable copy', () => {
    for (const venue of CONNECTORS) {
      expect(venue.trim(), venue).not.toBe('');
    }
  });
});

describe('useContent', () => {
  it('returns the English bundle by identity — no merge cost on the default locale', () => {
    expect(useContent('en')).toBe(content.en);
  });

  it('merges every other locale onto English', () => {
    for (const lang of PREFIXED_LANGS) {
      const merged = useContent(lang);
      expect(merged, lang).not.toBe(content[lang]);
      expect(Object.keys(merged).sort(), lang).toEqual(Object.keys(content.en).sort());
    }
  });

  it('produces the same leaf shape as English for every locale', () => {
    const english = shape(content.en);
    for (const lang of PREFIXED_LANGS) {
      const merged = shape(useContent(lang));
      const missing = [...english.keys()].filter((path) => !merged.has(path));
      const extra = [...merged.keys()].filter((path) => !english.has(path));
      expect(missing, `${lang} is missing leaves`).toEqual([]);
      expect(extra, `${lang} has leaves English does not`).toEqual([]);
    }
  });

  it('prefers the locale value wherever the locale provides one', () => {
    const es = useContent('es');
    expect(es.nav.launch).toBe(content.es.nav.launch);
    expect(es.nav.launch).not.toBe(content.en.nav.launch);
    expect(es.nav.links).toBe(content.es.nav.links);
  });

  it('falls back to English for sections a locale omits', () => {
    // `en` is the only bundle guaranteed to carry every section; whichever
    // sections a locale skips must still resolve.
    for (const lang of PREFIXED_LANGS) {
      const merged = useContent(lang);
      for (const key of Object.keys(content.en) as (keyof typeof merged)[]) {
        expect(merged[key], `${lang}.${String(key)}`).toBeDefined();
      }
    }
  });

  it('does not mutate the source bundles', () => {
    const enBefore = JSON.stringify(content.en);
    const esBefore = JSON.stringify(content.es);
    useContent('es');
    expect(JSON.stringify(content.en)).toBe(enBefore);
    expect(JSON.stringify(content.es)).toBe(esBefore);
  });
});

/**
 * The deep-merge itself: reached through `useContent` with the locale bundle
 * swapped for a fixture, so the exported surface stays the one under test.
 */
describe('useContent deep merge', () => {
  afterEach(() => {
    vi.doUnmock('../../../src/i18n/locales/es');
    vi.doUnmock('../../../src/i18n/locales/en');
    vi.resetModules();
  });

  async function withLocales(es: unknown, en?: unknown) {
    vi.resetModules();
    vi.doMock('../../../src/i18n/locales/es', () => ({ es }));
    if (en !== undefined) vi.doMock('../../../src/i18n/locales/en', () => ({ en }));
    const mod = await import('../../../src/i18n/content');
    return mod.useContent('es' as never) as unknown;
  }

  it('replaces arrays wholesale instead of concatenating them', async () => {
    const merged = await withLocales({ list: ['b'] }, { list: ['a', 'a2'], keep: 1 });
    expect(merged).toEqual({ list: ['b'], keep: 1 });
  });

  it('merges nested objects key by key', async () => {
    const merged = await withLocales(
      { nav: { features: 'Funciones' } },
      { nav: { features: 'Features', plans: 'Plans' } },
    );
    expect(merged).toEqual({ nav: { features: 'Funciones', plans: 'Plans' } });
  });

  it('lets the locale add keys English does not define', async () => {
    const merged = await withLocales({ nav: { extra: 'x' } }, { nav: { features: 'Features' } });
    expect(merged).toEqual({ nav: { features: 'Features', extra: 'x' } });
  });

  it('overwrites an English object with a locale primitive and vice versa', async () => {
    expect(await withLocales({ block: 'flat' }, { block: { a: 1 } })).toEqual({ block: 'flat' });
    expect(await withLocales({ block: { a: 1 } }, { block: 'flat' })).toEqual({ block: { a: 1 } });
  });

  it('overwrites with an explicit null from the locale', async () => {
    expect(await withLocales({ block: null }, { block: { a: 1 } })).toEqual({ block: null });
  });

  it('skips keys the locale sets to undefined', async () => {
    expect(await withLocales({ nav: undefined }, { nav: { a: 1 } })).toEqual({ nav: { a: 1 } });
  });

  it('keeps English when the locale bundle is missing entirely', async () => {
    expect(await withLocales(null, { nav: { a: 1 } })).toEqual({ nav: { a: 1 } });
    expect(await withLocales(undefined, { nav: { a: 1 } })).toEqual({ nav: { a: 1 } });
  });

  it('takes the locale bundle whole when it is not a mergeable object', async () => {
    expect(await withLocales(['only'], { nav: { a: 1 } })).toEqual(['only']);
    expect(await withLocales('plain', { nav: { a: 1 } })).toBe('plain');
  });

  it('takes the locale bundle whole when English is not a mergeable object', async () => {
    expect(await withLocales({ nav: { a: 1 } }, null)).toEqual({ nav: { a: 1 } });
    expect(await withLocales({ nav: { a: 1 } }, 'plain')).toEqual({ nav: { a: 1 } });
  });
});
