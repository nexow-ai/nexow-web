/**
 * Per-category connector subcategories (venue / provider kinds), mirrored from
 * the Nexow app connections panel venue-type facets.
 *
 * - Selecting a category shows only that category’s list.
 * - Selecting "All" shows the union (deduped, category-tab order).
 */
import type { ConnectorCategory } from './connectors';

export interface ConnectorSubcategory {
  /** Matches Connector.kind (and connectorsPage.kinds i18n keys). */
  key: string;
  /** Icon name registered in Icon.astro / icon-paths. */
  icon: string;
}

export const SUBCATEGORIES_BY_CATEGORY: Record<ConnectorCategory, ConnectorSubcategory[]> = {
  finance: [
    { key: 'broker', icon: 'building2' },
    { key: 'exchange', icon: 'repeat' },
    { key: 'dex', icon: 'link2' },
    { key: 'prediction', icon: 'target' },
    { key: 'aggregator', icon: 'network' },
    { key: 'data', icon: 'lineChart' },
    { key: 'payments', icon: 'creditCard' },
  ],
  wallets: [{ key: 'wallet', icon: 'wallet' }],
  services: [
    { key: 'browser', icon: 'earth' },
    { key: 'scraping', icon: 'radar' },
    { key: 'search', icon: 'scanSearch' },
    { key: 'weather', icon: 'cloudSun' },
    { key: 'geo', icon: 'mapPin' },
    { key: 'open_data', icon: 'databaseZap' },
    { key: 'knowledge', icon: 'bookOpen' },
    { key: 'news', icon: 'newspaper' },
    { key: 'observability', icon: 'monitor' },
    { key: 'payments', icon: 'creditCard' },
  ],
  data: [
    { key: 'data', icon: 'lineChart' },
    { key: 'sql', icon: 'table' },
    { key: 'nosql', icon: 'files' },
    { key: 'warehouse', icon: 'database' },
    { key: 'vector', icon: 'sparkles' },
    { key: 'analytics', icon: 'chartPie' },
    { key: 'observability', icon: 'monitor' },
  ],
  socials: [
    { key: 'messaging', icon: 'send' },
    { key: 'social', icon: 'atSign' },
    { key: 'video', icon: 'play' },
    { key: 'community', icon: 'users' },
    { key: 'music', icon: 'music' },
    { key: 'fitness', icon: 'activity' },
  ],
};

const CATEGORY_ORDER: ConnectorCategory[] = [
  'finance',
  'wallets',
  'services',
  'data',
  'socials',
];

/** Union of every category’s subcategories (first occurrence wins for icons). */
export const ALL_SUBCATEGORIES: ConnectorSubcategory[] = (() => {
  const seen = new Set<string>();
  const out: ConnectorSubcategory[] = [];
  for (const cat of CATEGORY_ORDER) {
    for (const sc of SUBCATEGORIES_BY_CATEGORY[cat]) {
      if (seen.has(sc.key)) continue;
      seen.add(sc.key);
      out.push(sc);
    }
  }
  return out;
})();

export function subcategoriesFor(category: ConnectorCategory | 'all'): ConnectorSubcategory[] {
  if (category === 'all') return ALL_SUBCATEGORIES;
  return SUBCATEGORIES_BY_CATEGORY[category] ?? [];
}
