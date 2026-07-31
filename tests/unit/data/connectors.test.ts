import { describe, expect, it } from 'vitest';
import {
  CONNECTORS,
  CONNECTOR_COUNT,
  CONNECTOR_LIVE_COUNT,
  type Connector,
  type ConnectorCategory,
  type ConnectorLogoFit,
  type ConnectorStatus,
} from '../../../src/data/connectors';
import comingSoon from '../../../src/data/coming-soon-connectors.json';
import { SUBCATEGORIES_BY_CATEGORY } from '../../../src/data/connector-subcategories';
import { useContent } from '../../../src/i18n/content';
import { LANGS } from '../../helpers/locales';

const CATEGORIES: ConnectorCategory[] = ['finance', 'wallets', 'services', 'data', 'socials'];
const STATUSES: ConnectorStatus[] = ['live', 'soon'];
const LOGO_FITS: ConnectorLogoFit[] = ['cover', 'contain'];

const en = useContent('en').connectorsPage;
const KIND_KEYS = Object.keys(en.kinds);
const ASSET_KEYS = Object.keys(en.assets);

describe('CONNECTORS catalog', () => {
  it('is non-empty and matches the published counts', () => {
    expect(CONNECTORS.length).toBeGreaterThan(0);
    expect(CONNECTOR_COUNT).toBe(CONNECTORS.length);
    expect(CONNECTOR_LIVE_COUNT).toBe(CONNECTORS.filter((c) => c.status === 'live').length);
    expect(CONNECTOR_LIVE_COUNT).toBeLessThanOrEqual(CONNECTOR_COUNT);
  });

  it('has a unique id and a unique name per connector', () => {
    expect(new Set(CONNECTORS.map((c) => c.id)).size).toBe(CONNECTORS.length);
    expect(new Set(CONNECTORS.map((c) => c.name)).size).toBe(CONNECTORS.length);
  });

  it('lists every live connector before the coming-soon block, which is the render order', () => {
    // ConnectorsPage and ConnectorMarquee both map the catalog as-is.
    const firstSoon = CONNECTORS.findIndex((c) => c.status === 'soon');
    expect(firstSoon).toBeGreaterThan(0);
    expect(CONNECTORS.slice(0, firstSoon).every((c) => c.status === 'live')).toBe(true);
    expect(CONNECTORS.slice(firstSoon).every((c) => c.status === 'soon')).toBe(true);
    expect(firstSoon).toBe(CONNECTOR_LIVE_COUNT);
  });

  it('ships at least one connector in every category', () => {
    for (const category of CATEGORIES) {
      expect(
        CONNECTORS.filter((c) => c.category === category).length,
        `no connectors in ${category}`,
      ).toBeGreaterThan(0);
    }
  });
});

describe.each(CONNECTORS.map((c): [string, Connector] => [c.id, c]))('connector %s', (_id, c) => {
  it('uses a snake_case id', () => {
    expect(c.id).toMatch(/^[a-z0-9]+(_[a-z0-9]+)*$/);
  });

  it('has a display name and a blurb', () => {
    expect(c.name.trim()).not.toBe('');
    expect(c.notes.trim().length).toBeGreaterThan(10);
  });

  it('declares a known category, status and logo fit', () => {
    expect(CATEGORIES).toContain(c.category);
    expect(STATUSES).toContain(c.status);
    expect(LOGO_FITS).toContain(c.logoFit);
    expect(typeof c.trading).toBe('boolean');
  });

  it('declares a kind that has an i18n label', () => {
    expect(KIND_KEYS, `unknown kind "${c.kind}"`).toContain(c.kind);
  });

  it('declares asset classes that have i18n labels', () => {
    expect(Array.isArray(c.assets)).toBe(true);
    for (const asset of c.assets) {
      expect(ASSET_KEYS, `unknown asset "${asset}"`).toContain(asset);
    }
    expect(new Set(c.assets).size, 'duplicate assets').toBe(c.assets.length);
  });

  it('links to an https homepage', () => {
    expect(() => new URL(c.url)).not.toThrow();
    expect(new URL(c.url).protocol).toBe('https:');
  });

  it('points logo and banner at root-relative public assets', () => {
    expect(c.logo).toMatch(/^\/connectors\/[\w.-]+\.(png|jpg|jpeg|svg|webp)$/);
    if (c.banner !== '') {
      expect(c.banner).toMatch(/^\/connectors\/banners\/[\w.-]+\.(png|jpg|jpeg|svg|webp)$/);
    }
  });

  it('is reachable from at least one filter chip in its category', () => {
    const chips = SUBCATEGORIES_BY_CATEGORY[c.category].map((s) => s.key);
    const matches = chips.some((key) => c.kind === key || c.assets.includes(key));
    expect(matches, `${c.id} matches no chip in ${c.category}: ${chips.join(', ')}`).toBe(true);
  });

  it('only claims trading on venues that execute orders', () => {
    if (c.trading) {
      expect(['broker', 'exchange', 'dex', 'prediction'], `${c.id} kind`).toContain(c.kind);
    }
  });
});

describe('connector i18n labels', () => {
  it('is fully translated for every kind the catalog uses in every locale', () => {
    const used = new Set(CONNECTORS.map((c) => c.kind));
    for (const lang of LANGS) {
      const kinds = useContent(lang).connectorsPage.kinds as Record<string, string>;
      for (const kind of used) {
        expect(kinds[kind]?.trim(), `${lang}.kinds.${kind}`).toBeTruthy();
      }
    }
  });

  it('is fully translated for every asset class the catalog uses in every locale', () => {
    const used = new Set(CONNECTORS.flatMap((c) => c.assets));
    for (const lang of LANGS) {
      const assets = useContent(lang).connectorsPage.assets as Record<string, string>;
      for (const asset of used) {
        expect(assets[asset]?.trim(), `${lang}.assets.${asset}`).toBeTruthy();
      }
    }
  });

  it('has a label for every category in every locale', () => {
    for (const lang of LANGS) {
      const categories = useContent(lang).connectorsPage.categories as Record<string, string>;
      for (const category of CATEGORIES) {
        expect(categories[category]?.trim(), `${lang}.categories.${category}`).toBeTruthy();
      }
    }
  });
});

describe('coming-soon-connectors.json', () => {
  const staged = comingSoon as Connector[];

  it('is fully merged into the catalog', () => {
    const byId = new Map(CONNECTORS.map((c) => [c.id, c]));
    for (const entry of staged) {
      expect(byId.get(entry.id), `${entry.id} is staged but not in CONNECTORS`).toEqual(entry);
    }
  });

  it('only stages connectors that are not live yet', () => {
    for (const entry of staged) {
      expect(entry.status, entry.id).toBe('soon');
    }
  });

  it('has no duplicate ids', () => {
    expect(new Set(staged.map((c) => c.id)).size).toBe(staged.length);
  });
});
