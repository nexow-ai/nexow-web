// Regenerates src/data/connectors.ts (and copies missing venue logos into
// public/connectors/) from the Nexow app connector catalog at ../nexow.
// Run from the repo root: node scratchpad/gen-connectors.mjs
import { readFileSync, writeFileSync, readdirSync, copyFileSync, existsSync } from 'node:fs';
import { extname, join } from 'node:path';

const APP = '../nexow';
const venuesRaw = JSON.parse(
  readFileSync(join(APP, 'app/assets/connections/connections_venues.json'), 'utf8')
);
const venues = Array.isArray(venuesRaw) ? venuesRaw : venuesRaw.venues;

// Site categories mirror the app's connections panel tabs.
const CATEGORY_BY_KIND = {
  undefined: 'finance', // market venues carry no `kind`
  db: 'data',
  social: 'socials',
  wallet: 'wallets',
  service: 'services',
};

// venue_type → i18n key into connectorsPage.kinds
const MARKET_KINDS = {
  broker: 'broker',
  exchange: 'exchange',
  prediction_exchange: 'prediction',
  dex: 'dex',
  aggregator: 'aggregator',
  data_provider: 'data',
};
const SOCIAL_KINDS = {
  messaging: 'messaging',
  social_network: 'social',
  video_platform: 'video',
  community: 'community',
  music_platform: 'music',
};
const SERVICE_KINDS = {
  browser_service: 'browser',
  scraping_service: 'scraping',
  search_service: 'search',
  weather_service: 'weather',
  open_data: 'open_data',
  knowledge_service: 'knowledge',
  news_service: 'news',
  geo_service: 'geo',
};

// Asset-class keys the site's connectorsPage.assets i18n map knows about.
const SITE_ASSETS = new Set([
  'equities', 'indices', 'fixed_income', 'fx', 'commodities', 'crypto',
  'volatility', 'prediction_markets',
]);

const kindOf = (v) => {
  if (v.kind === 'db') return v.dbType ?? 'sql';
  if (v.kind === 'social') return SOCIAL_KINDS[v.venue_type] ?? 'social';
  if (v.kind === 'wallet') return 'wallet';
  if (v.kind === 'service') return SERVICE_KINDS[v.venue_type] ?? 'open_data';
  return MARKET_KINDS[v.venue_type] ?? 'data';
};

const urlOf = (v) => {
  const links = v.links ?? {};
  return links.website?.url ?? Object.values(links)[0]?.url ?? '';
};

// Keep an existing site logo when one is already there; otherwise copy the
// app's icon (preserving its extension) into public/connectors/<id>.<ext>.
const existing = new Map(
  readdirSync('public/connectors').map((f) => [f.replace(/\.[a-z]+$/, ''), f])
);
const logoOf = (v) => {
  const have = existing.get(v.id);
  if (have) return `/connectors/${have}`;
  const src = join(APP, 'app/assets/connections/logos', v.logo);
  if (!existsSync(src)) throw new Error(`no logo for ${v.id}: ${src}`);
  const file = `${v.id}${extname(v.logo)}`;
  copyFileSync(src, join('public/connectors', file));
  return `/connectors/${file}`;
};

const connectors = venues
  .map((v) => ({
    id: v.id,
    name: v.name,
    category: CATEGORY_BY_KIND[v.kind],
    kind: kindOf(v),
    status: v.status === 'available' ? 'live' : 'soon',
    trading: !!v.trading,
    assets: (v.asset_classes ?? []).filter((a) => SITE_ASSETS.has(a)),
    url: urlOf(v),
    logo: logoOf(v),
  }))
  .sort((a, b) => a.id.localeCompare(b.id));

const header = `// AUTO-GENERATED from the Nexow app connector catalog. Do not edit by hand.
// Regenerate with scratchpad/gen-connectors.mjs.

export type ConnectorCategory = 'finance' | 'wallets' | 'services' | 'data' | 'socials';
export type ConnectorStatus = 'live' | 'soon';

export interface Connector {
  id: string;
  name: string;
  category: ConnectorCategory;
  /** i18n key into connectorsPage.kinds */
  kind: string;
  status: ConnectorStatus;
  trading: boolean;
  /** asset-class keys (i18n into connectorsPage.assets) */
  assets: string[];
  url: string;
  /** public path to the venue icon */
  logo: string;
}

export const CONNECTORS: Connector[] = `;

const footer = `;

export const CONNECTOR_COUNT = CONNECTORS.length;
export const CONNECTOR_LIVE_COUNT = CONNECTORS.filter((c) => c.status === 'live').length;
`;

writeFileSync('src/data/connectors.ts', header + JSON.stringify(connectors, null, 2) + footer);
const live = connectors.filter((c) => c.status === 'live').length;
console.log(`wrote ${connectors.length} connectors (${live} live) to src/data/connectors.ts`);
