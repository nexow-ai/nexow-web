import { describe, expect, it } from 'vitest';
import {
  ALPHA_BUCKETS,
  DEFAULT_FILTERS,
  alphaBucket,
  assetKeys,
  chipsForCategory,
  countLabel,
  filterConnectors,
  hasActiveFilters,
  leadingLetter,
  matchesFilters,
  normalizeQuery,
  resolveSubcategory,
  toFacets,
  type ConnectorFacets,
  type FilterState,
} from '../../../src/lib/connectorFilter';
import { CONNECTORS, type Connector } from '../../../src/data/connectors';
import {
  ALL_SUBCATEGORIES,
  SUBCATEGORIES_BY_CATEGORY,
} from '../../../src/data/connector-subcategories';
import { useContent } from '../../../src/i18n/content';

const t = useContent('en').connectorsPage as unknown as Parameters<typeof toFacets>[1];

const catalog = CONNECTORS.map((c) => ({ connector: c, facets: toFacets(c, t) }));

const state = (over: Partial<FilterState> = {}): FilterState => ({ ...DEFAULT_FILTERS, ...over });

const facets = (over: Partial<ConnectorFacets> = {}): ConnectorFacets => ({
  category: 'finance',
  kind: 'broker',
  status: 'live',
  trading: 'yes',
  assets: 'equities crypto',
  letter: 'A',
  search: 'alpaca api-first broker',
  ...over,
});

describe('ALPHA_BUCKETS', () => {
  it('partitions A–Z with no gap and no overlap', () => {
    expect(ALPHA_BUCKETS[0].min).toBe('A');
    expect(ALPHA_BUCKETS.at(-1)!.max).toBe('Z');
    for (const [i, bucket] of ALPHA_BUCKETS.entries()) {
      expect(bucket.min <= bucket.max, bucket.key).toBe(true);
      const next = ALPHA_BUCKETS[i + 1];
      if (!next) continue;
      expect(String.fromCharCode(bucket.max.charCodeAt(0) + 1), bucket.key).toBe(next.min);
    }
  });

  it('labels each bucket with its own range', () => {
    for (const bucket of ALPHA_BUCKETS) {
      expect(bucket.label, bucket.key).toBe(`${bucket.min}–${bucket.max}`);
      expect(bucket.key, bucket.key).toBe(`${bucket.min}-${bucket.max}`.toLowerCase());
    }
  });

  it('covers every letter exactly once', () => {
    for (let code = 65; code <= 90; code++) {
      const letter = String.fromCharCode(code);
      const hits = ALPHA_BUCKETS.filter((b) => letter >= b.min && letter <= b.max);
      expect(hits, letter).toHaveLength(1);
    }
  });
});

describe('alphaBucket', () => {
  it('looks a bucket up by key', () => {
    expect(alphaBucket('a-d')).toBe(ALPHA_BUCKETS[0]);
  });

  it('returns undefined for an unknown key', () => {
    expect(alphaBucket('all')).toBeUndefined();
    expect(alphaBucket('nope')).toBeUndefined();
  });
});

describe('leadingLetter', () => {
  it('takes the first Latin letter, uppercased', () => {
    expect(leadingLetter('alpaca')).toBe('A');
    expect(leadingLetter('Interactive Brokers')).toBe('I');
  });

  it('skips leading digits and symbols to find a letter', () => {
    expect(leadingLetter('1inch')).toBe('I');
    expect(leadingLetter('  kraken')).toBe('K');
  });

  it('falls back to the first character when there is no Latin letter', () => {
    expect(leadingLetter('币安')).toBe('币');
  });

  it('is empty for an empty name', () => {
    expect(leadingLetter('')).toBe('');
  });
});

describe('toFacets', () => {
  it('mirrors the connector onto the dataset the card writes', () => {
    const alpaca = CONNECTORS.find((c) => c.id === 'alpaca')!;
    const f = toFacets(alpaca, t);
    expect(f.category).toBe(alpaca.category);
    expect(f.kind).toBe(alpaca.kind);
    expect(f.status).toBe(alpaca.status);
    expect(f.trading).toBe('yes');
    expect(f.assets).toBe(alpaca.assets.join(' '));
    expect(f.letter).toBe('A');
  });

  it('marks a data-only venue as non-trading', () => {
    const readonly = CONNECTORS.find((c) => !c.trading)!;
    expect(toFacets(readonly, t).trading).toBe('no');
  });

  it('builds a lowercase haystack from the id, name, notes and labels', () => {
    const alpaca = CONNECTORS.find((c) => c.id === 'alpaca')!;
    const { search } = toFacets(alpaca, t);
    expect(search).toBe(search.toLowerCase());
    expect(search).toContain('alpaca');
    expect(search).toContain(alpaca.notes.toLowerCase().slice(0, 20));
    expect(search).toContain('broker');
  });

  it('indexes both the raw asset key and its localized label', () => {
    const crypto = CONNECTORS.find((c) => c.assets.includes('crypto'))!;
    const { search } = toFacets(crypto, t);
    expect(search).toContain('crypto');
    expect(search).toContain(t.assets.crypto.toLowerCase());
  });

  it('falls back to the raw key when a label is missing', () => {
    const odd = { ...CONNECTORS[0], kind: 'unmapped', assets: ['unmapped_asset'], category: 'nope' } as unknown as Connector;
    const { search } = toFacets(odd, t);
    expect(search).toContain('unmapped');
    expect(search).toContain('unmapped_asset');
    expect(search).toContain('nope');
  });
});

describe('normalizeQuery', () => {
  it('trims and lowercases', () => {
    expect(normalizeQuery('  Alpaca  ')).toBe('alpaca');
    expect(normalizeQuery('')).toBe('');
    expect(normalizeQuery('   ')).toBe('');
  });
});

describe('assetKeys', () => {
  it('splits the space-separated attribute', () => {
    expect(assetKeys('equities crypto')).toEqual(['equities', 'crypto']);
  });

  it('tolerates empty and irregular whitespace', () => {
    expect(assetKeys('')).toEqual([]);
    expect(assetKeys('   ')).toEqual([]);
    expect(assetKeys('  fx   crypto ')).toEqual(['fx', 'crypto']);
  });
});

describe('matchesFilters', () => {
  it('matches everything with the default state', () => {
    expect(matchesFilters(facets(), state())).toBe(true);
    for (const { facets: f } of catalog) {
      expect(matchesFilters(f, DEFAULT_FILTERS)).toBe(true);
    }
  });

  it('filters by category', () => {
    expect(matchesFilters(facets({ category: 'finance' }), state({ category: 'finance' }))).toBe(true);
    expect(matchesFilters(facets({ category: 'data' }), state({ category: 'finance' }))).toBe(false);
  });

  it('filters by status', () => {
    expect(matchesFilters(facets({ status: 'live' }), state({ status: 'live' }))).toBe(true);
    expect(matchesFilters(facets({ status: 'soon' }), state({ status: 'live' }))).toBe(false);
  });

  it('filters by capability', () => {
    expect(matchesFilters(facets({ trading: 'yes' }), state({ capability: 'trading' }))).toBe(true);
    expect(matchesFilters(facets({ trading: 'no' }), state({ capability: 'trading' }))).toBe(false);
    expect(matchesFilters(facets({ trading: 'no' }), state({ capability: 'readonly' }))).toBe(true);
    expect(matchesFilters(facets({ trading: 'yes' }), state({ capability: 'readonly' }))).toBe(false);
  });

  it('ignores an unrecognised capability rather than hiding everything', () => {
    expect(matchesFilters(facets(), state({ capability: 'nonsense' }))).toBe(true);
  });

  it('matches a subcategory chip against the venue kind', () => {
    expect(matchesFilters(facets({ kind: 'broker' }), state({ subcategory: 'broker' }))).toBe(true);
    expect(matchesFilters(facets({ kind: 'exchange' }), state({ subcategory: 'broker' }))).toBe(false);
  });

  it('matches a subcategory chip against an asset class', () => {
    expect(matchesFilters(facets({ assets: 'fx crypto' }), state({ subcategory: 'crypto' }))).toBe(true);
    expect(matchesFilters(facets({ assets: 'fx' }), state({ subcategory: 'crypto' }))).toBe(false);
  });

  it('does not match an asset key by prefix', () => {
    expect(matchesFilters(facets({ assets: 'crypto_futures' }), state({ subcategory: 'crypto' }))).toBe(false);
  });

  it('filters by alphabet bucket, inclusive at both ends', () => {
    expect(matchesFilters(facets({ letter: 'A' }), state({ alpha: 'a-d' }))).toBe(true);
    expect(matchesFilters(facets({ letter: 'D' }), state({ alpha: 'a-d' }))).toBe(true);
    expect(matchesFilters(facets({ letter: 'E' }), state({ alpha: 'a-d' }))).toBe(false);
    expect(matchesFilters(facets({ letter: 'Z' }), state({ alpha: 'u-z' }))).toBe(true);
  });

  it('uppercases the letter before comparing', () => {
    expect(matchesFilters(facets({ letter: 'b' }), state({ alpha: 'a-d' }))).toBe(true);
  });

  it('hides a name with no Latin letter when a bucket is selected', () => {
    expect(matchesFilters(facets({ letter: '' }), state({ alpha: 'a-d' }))).toBe(false);
  });

  it('matches nothing for an unknown bucket key', () => {
    expect(matchesFilters(facets(), state({ alpha: 'nope' }))).toBe(false);
  });

  it('filters by search substring', () => {
    expect(matchesFilters(facets({ search: 'alpaca broker' }), state({ query: 'alpa' }))).toBe(true);
    expect(matchesFilters(facets({ search: 'alpaca broker' }), state({ query: 'kraken' }))).toBe(false);
  });

  it('requires every active filter to agree', () => {
    const f = facets({ category: 'finance', status: 'live', trading: 'yes', letter: 'A' });
    expect(matchesFilters(f, state({ category: 'finance', status: 'live', capability: 'trading', alpha: 'a-d' }))).toBe(true);
    expect(matchesFilters(f, state({ category: 'finance', status: 'soon', capability: 'trading' }))).toBe(false);
  });
});

describe('filterConnectors over the real catalog', () => {
  it('returns everything unfiltered, in catalog order', () => {
    const result = filterConnectors(catalog, DEFAULT_FILTERS);
    expect(result).toHaveLength(CONNECTORS.length);
    expect(result.map((r) => r.connector.id)).toEqual(CONNECTORS.map((c) => c.id));
  });

  it('agrees with the catalog when filtering by category', () => {
    for (const category of ['finance', 'wallets', 'services', 'data', 'socials'] as const) {
      const result = filterConnectors(catalog, state({ category }));
      expect(result.map((r) => r.connector.id)).toEqual(
        CONNECTORS.filter((c) => c.category === category).map((c) => c.id),
      );
    }
  });

  it('agrees with the catalog when filtering by status and capability', () => {
    expect(filterConnectors(catalog, state({ status: 'live' }))).toHaveLength(
      CONNECTORS.filter((c) => c.status === 'live').length,
    );
    expect(filterConnectors(catalog, state({ capability: 'trading' }))).toHaveLength(
      CONNECTORS.filter((c) => c.trading).length,
    );
    expect(filterConnectors(catalog, state({ capability: 'readonly' }))).toHaveLength(
      CONNECTORS.filter((c) => !c.trading).length,
    );
  });

  it('finds a venue by name, id and asset class', () => {
    expect(filterConnectors(catalog, state({ query: 'alpaca' })).map((r) => r.connector.id)).toContain('alpaca');
    expect(filterConnectors(catalog, state({ query: 'alpha_vantage' })).map((r) => r.connector.id)).toContain('alpha_vantage');
    expect(filterConnectors(catalog, state({ query: 'crypto' })).length).toBeGreaterThan(0);
  });

  it('returns nothing for a query that matches no venue', () => {
    expect(filterConnectors(catalog, state({ query: 'zzzznotaconnector' }))).toEqual([]);
  });

  it('partitions the catalog across the alphabet buckets', () => {
    const bucketed = ALPHA_BUCKETS.flatMap((b) =>
      filterConnectors(catalog, state({ alpha: b.key })).map((r) => r.connector.id),
    );
    // Every connector has a Latin initial, so the buckets are a partition.
    expect(new Set(bucketed).size).toBe(bucketed.length);
    expect(bucketed).toHaveLength(CONNECTORS.length);
  });

  it('leaves every category chip reachable — no chip filters to an empty grid', () => {
    for (const [category, chips] of Object.entries(SUBCATEGORIES_BY_CATEGORY)) {
      for (const chip of chips) {
        const result = filterConnectors(catalog, state({ category, subcategory: chip.key }));
        expect(result.length, `${category} / ${chip.key} shows nothing`).toBeGreaterThan(0);
      }
    }
  });

  it('never shows more results as filters are added', () => {
    const all = filterConnectors(catalog, DEFAULT_FILTERS).length;
    const byCategory = filterConnectors(catalog, state({ category: 'finance' })).length;
    const andLive = filterConnectors(catalog, state({ category: 'finance', status: 'live' })).length;
    const andTrading = filterConnectors(
      catalog,
      state({ category: 'finance', status: 'live', capability: 'trading' }),
    ).length;
    expect(byCategory).toBeLessThanOrEqual(all);
    expect(andLive).toBeLessThanOrEqual(byCategory);
    expect(andTrading).toBeLessThanOrEqual(andLive);
  });
});

describe('hasActiveFilters', () => {
  it('is false for the default state', () => {
    expect(hasActiveFilters(DEFAULT_FILTERS)).toBe(false);
  });

  it.each(['category', 'status', 'capability', 'subcategory', 'alpha'] as const)(
    'is true when %s is narrowed',
    (key) => {
      expect(hasActiveFilters(state({ [key]: 'x' }))).toBe(true);
    },
  );

  it('ignores the search box, which has its own affordance', () => {
    expect(hasActiveFilters(state({ query: 'alpaca' }))).toBe(false);
  });
});

describe('countLabel', () => {
  it('substitutes the count into the template', () => {
    expect(countLabel('{n} connectors', 12)).toBe('12 connectors');
    expect(countLabel('{n} conectores', 0)).toBe('0 conectores');
  });

  it('leaves a template without a token alone', () => {
    expect(countLabel('connectors', 3)).toBe('connectors');
  });

  it('replaces only the first token', () => {
    expect(countLabel('{n} of {n}', 2)).toBe('2 of {n}');
  });
});

describe('chipsForCategory', () => {
  const catalogChips = {
    all: ALL_SUBCATEGORIES.map((s) => ({ ...s, label: s.key })),
    finance: SUBCATEGORIES_BY_CATEGORY.finance.map((s) => ({ ...s, label: s.key })),
  };

  it('returns that category’s chips', () => {
    expect(chipsForCategory(catalogChips, 'finance').map((c) => c.key)).toEqual(
      SUBCATEGORIES_BY_CATEGORY.finance.map((s) => s.key),
    );
  });

  it('falls back to the union for an unknown category', () => {
    expect(chipsForCategory(catalogChips, 'nope')).toBe(catalogChips.all);
  });

  it('returns an empty list when there is no union either', () => {
    expect(chipsForCategory({}, 'finance')).toEqual([]);
  });
});

describe('resolveSubcategory', () => {
  const catalogChips = {
    all: ALL_SUBCATEGORIES.map((s) => ({ ...s, label: s.key })),
    finance: SUBCATEGORIES_BY_CATEGORY.finance.map((s) => ({ ...s, label: s.key })),
    wallets: SUBCATEGORIES_BY_CATEGORY.wallets.map((s) => ({ ...s, label: s.key })),
  };

  it('keeps a chip the new category still offers', () => {
    expect(resolveSubcategory(catalogChips, 'finance', 'crypto')).toBe('crypto');
  });

  it('drops a chip the new category does not offer', () => {
    expect(resolveSubcategory(catalogChips, 'wallets', 'crypto')).toBe('all');
  });

  it('leaves "all" alone', () => {
    expect(resolveSubcategory(catalogChips, 'wallets', 'all')).toBe('all');
    expect(resolveSubcategory({}, 'nope', 'all')).toBe('all');
  });

  it('resets when the category is unknown and the union lacks the chip', () => {
    expect(resolveSubcategory({ all: [] }, 'nope', 'crypto')).toBe('all');
  });
});
