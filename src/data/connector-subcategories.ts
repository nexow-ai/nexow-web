/**
 * Per-category connector subcategories, mirrored from the Nexow app connections
 * panel facets:
 * - Finance → asset classes (equities, crypto, …) plus payments (kind) for
 *   payment rails that carry no asset classes
 * - Other tabs → venue / provider kinds (broker, messaging, sql, …)
 *
 * Selecting a category shows only that category’s list.
 * Selecting "All" shows the union (deduped, category-tab order).
 *
 * Filter matching (ConnectorsPage): chips match Connector.assets OR Connector.kind.
 */
import type { ConnectorCategory } from './connectors';

export interface ConnectorSubcategory {
  /**
   * Filter key: usually assets on Finance and kinds elsewhere. Labels come from
   * connectorsPage.assets / .kinds. Matching always ORs assets + kind.
   */
  key: string;
  /** Icon name registered in Icon.astro / icon-paths. */
  icon: string;
  /** Where to resolve the i18n label. */
  labelFrom: 'assets' | 'kinds';
}

export const SUBCATEGORIES_BY_CATEGORY: Record<ConnectorCategory, ConnectorSubcategory[]> = {
  finance: [
    { key: 'equities', icon: 'candlestick', labelFrom: 'assets' },
    { key: 'indices', icon: 'barChart', labelFrom: 'assets' },
    { key: 'fixed_income', icon: 'landmark', labelFrom: 'assets' },
    { key: 'fx', icon: 'banknote', labelFrom: 'assets' },
    { key: 'commodities', icon: 'wheat', labelFrom: 'assets' },
    { key: 'crypto', icon: 'bitcoin', labelFrom: 'assets' },
    { key: 'volatility', icon: 'activity', labelFrom: 'assets' },
    { key: 'prediction_markets', icon: 'target', labelFrom: 'assets' },
    // Kind chip: PayPal / Plaid / Adyen (and similar) have empty assets.
    { key: 'payments', icon: 'creditCard', labelFrom: 'kinds' },
  ],
  wallets: [{ key: 'wallet', icon: 'wallet', labelFrom: 'kinds' }],
  services: [
    { key: 'browser', icon: 'earth', labelFrom: 'kinds' },
    { key: 'scraping', icon: 'radar', labelFrom: 'kinds' },
    { key: 'search', icon: 'scanSearch', labelFrom: 'kinds' },
    { key: 'weather', icon: 'cloudSun', labelFrom: 'kinds' },
    { key: 'geo', icon: 'mapPin', labelFrom: 'kinds' },
    { key: 'open_data', icon: 'databaseZap', labelFrom: 'kinds' },
    { key: 'knowledge', icon: 'bookOpen', labelFrom: 'kinds' },
    { key: 'news', icon: 'newspaper', labelFrom: 'kinds' },
    { key: 'observability', icon: 'monitor', labelFrom: 'kinds' },
  ],
  data: [
    { key: 'data', icon: 'lineChart', labelFrom: 'kinds' },
    { key: 'sql', icon: 'table', labelFrom: 'kinds' },
    { key: 'nosql', icon: 'files', labelFrom: 'kinds' },
    { key: 'warehouse', icon: 'database', labelFrom: 'kinds' },
    { key: 'vector', icon: 'sparkles', labelFrom: 'kinds' },
    { key: 'analytics', icon: 'chartPie', labelFrom: 'kinds' },
  ],
  socials: [
    { key: 'messaging', icon: 'send', labelFrom: 'kinds' },
    { key: 'social', icon: 'atSign', labelFrom: 'kinds' },
    { key: 'video', icon: 'play', labelFrom: 'kinds' },
    { key: 'community', icon: 'users', labelFrom: 'kinds' },
    { key: 'music', icon: 'music', labelFrom: 'kinds' },
    { key: 'fitness', icon: 'activity', labelFrom: 'kinds' },
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
export function unionSubcategories(
  byCategory: Record<ConnectorCategory, ConnectorSubcategory[]>,
  order: readonly ConnectorCategory[] = CATEGORY_ORDER,
): ConnectorSubcategory[] {
  const seen = new Set<string>();
  const out: ConnectorSubcategory[] = [];
  for (const cat of order) {
    for (const sc of byCategory[cat]) {
      if (seen.has(sc.key)) continue;
      seen.add(sc.key);
      out.push(sc);
    }
  }
  return out;
}

export const ALL_SUBCATEGORIES: ConnectorSubcategory[] = unionSubcategories(
  SUBCATEGORIES_BY_CATEGORY,
);

export function subcategoriesFor(category: ConnectorCategory | 'all'): ConnectorSubcategory[] {
  if (category === 'all') return ALL_SUBCATEGORIES;
  return SUBCATEGORIES_BY_CATEGORY[category] ?? [];
}
