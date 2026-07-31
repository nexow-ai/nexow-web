/**
 * Connector catalog filtering — the logic behind the /connectors controls.
 *
 * The page renders every card server-side and the browser only shows or hides
 * them, so the predicate has to agree exactly with the facets baked into each
 * card's dataset. Both sides come from here: `toFacets` writes the attributes
 * in ConnectorCard, and `matchesFilters` reads them back in the page script.
 */
import type { Connector, ConnectorCategory, ConnectorStatus } from '../data/connectors';

/** Alphabet buckets for the A–Z filter row. `all` has no bounds. */
export interface AlphaBucket {
  key: string;
  label: string;
  min: string;
  max: string;
}

export const ALPHA_BUCKETS: AlphaBucket[] = [
  { key: 'a-d', label: 'A–D', min: 'A', max: 'D' },
  { key: 'e-h', label: 'E–H', min: 'E', max: 'H' },
  { key: 'i-l', label: 'I–L', min: 'I', max: 'L' },
  { key: 'm-p', label: 'M–P', min: 'M', max: 'P' },
  { key: 'q-t', label: 'Q–T', min: 'Q', max: 'T' },
  { key: 'u-z', label: 'U–Z', min: 'U', max: 'Z' },
];

export function alphaBucket(key: string): AlphaBucket | undefined {
  return ALPHA_BUCKETS.find((b) => b.key === key);
}

/** The facets a card carries in its dataset, and the predicate filters on. */
export interface ConnectorFacets {
  category: ConnectorCategory | string;
  kind: string;
  status: ConnectorStatus | string;
  /** `'yes'` / `'no'` — matches the `data-trading` attribute exactly. */
  trading: 'yes' | 'no';
  /** Space-separated asset keys, as written to `data-assets`. */
  assets: string;
  /** First Latin letter of the name, uppercased. */
  letter: string;
  /** Lowercased haystack: id, name, notes and every localized label. */
  search: string;
}

/** Localized label tables the card bakes into its search haystack. */
export interface ConnectorLabels {
  kinds: Record<string, string>;
  categories: Record<string, string>;
  assets: Record<string, string>;
}

/** First Latin letter of a connector name, uppercased ('' when it has none). */
export function leadingLetter(name: string): string {
  return (name.match(/[A-Za-z]/)?.[0] ?? name[0] ?? '').toUpperCase();
}

/** Build the dataset a card exposes to the filter. */
export function toFacets(c: Connector, t: ConnectorLabels): ConnectorFacets {
  const kindLabel = t.kinds[c.kind] ?? c.kind;
  const catLabel = t.categories[c.category] ?? c.category;
  const assetLabels = c.assets.map((a) => t.assets[a] ?? a);
  return {
    category: c.category,
    kind: c.kind,
    status: c.status,
    trading: c.trading ? 'yes' : 'no',
    assets: c.assets.join(' '),
    letter: leadingLetter(c.name),
    search: [c.id, c.name, c.notes, kindLabel, catLabel, ...assetLabels, ...c.assets]
      .join(' ')
      .toLowerCase(),
  };
}

export type CapabilityFilter = 'all' | 'trading' | 'readonly';

export interface FilterState {
  category: string;
  status: string;
  capability: string;
  subcategory: string;
  alpha: string;
  /** Already normalized — see `normalizeQuery`. */
  query: string;
}

export const DEFAULT_FILTERS: FilterState = {
  category: 'all',
  status: 'all',
  capability: 'all',
  subcategory: 'all',
  alpha: 'all',
  query: '',
};

/** Search input → comparable haystack form. */
export function normalizeQuery(raw: string): string {
  return raw.trim().toLowerCase();
}

/** Asset keys a card declares, from the space-separated attribute. */
export function assetKeys(assets: string): string[] {
  return assets.split(/\s+/).filter(Boolean);
}

export function matchesFilters(facets: ConnectorFacets, state: FilterState): boolean {
  if (state.category !== 'all' && facets.category !== state.category) return false;
  if (state.status !== 'all' && facets.status !== state.status) return false;

  if (state.capability === 'trading' && facets.trading !== 'yes') return false;
  if (state.capability === 'readonly' && facets.trading !== 'no') return false;

  // A chip matches a venue kind OR one of its asset classes — Finance filters by
  // asset class, every other tab by kind, and `payments` appears as both.
  if (
    state.subcategory !== 'all' &&
    facets.kind !== state.subcategory &&
    !assetKeys(facets.assets).includes(state.subcategory)
  ) {
    return false;
  }

  if (state.alpha !== 'all') {
    const bucket = alphaBucket(state.alpha);
    if (!bucket) return false;
    const letter = facets.letter.toUpperCase();
    if (letter < bucket.min || letter > bucket.max) return false;
  }

  if (state.query !== '' && !facets.search.includes(state.query)) return false;

  return true;
}

/** Filter a catalog, preserving order. */
export function filterConnectors<T extends { facets: ConnectorFacets }>(
  items: T[],
  state: FilterState,
): T[] {
  return items.filter((item) => matchesFilters(item.facets, state));
}

/** Whether any filter is narrowing the list — drives the "filters active" dot. */
export function hasActiveFilters(state: FilterState): boolean {
  return (
    state.category !== 'all' ||
    state.status !== 'all' ||
    state.capability !== 'all' ||
    state.subcategory !== 'all' ||
    state.alpha !== 'all'
  );
}

/** Render the result counter, e.g. `'{n} connectors'` → `'12 connectors'`. */
export function countLabel(template: string, n: number): string {
  return template.replace('{n}', String(n));
}

export interface SubcategoryChip {
  key: string;
  icon: string;
  label: string;
}

/** Chips available for a category, falling back to the `all` union. */
export function chipsForCategory(
  catalog: Record<string, SubcategoryChip[]>,
  category: string,
): SubcategoryChip[] {
  return catalog[category] ?? catalog.all ?? [];
}

/**
 * Keep the selected chip legal when the category changes: a chip that the new
 * category does not offer falls back to `all`.
 */
export function resolveSubcategory(
  catalog: Record<string, SubcategoryChip[]>,
  category: string,
  subcategory: string,
): string {
  if (subcategory === 'all') return 'all';
  const allowed = chipsForCategory(catalog, category).map((s) => s.key);
  return allowed.includes(subcategory) ? subcategory : 'all';
}
