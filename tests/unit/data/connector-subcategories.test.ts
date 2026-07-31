import { describe, expect, it } from 'vitest';
import {
  ALL_SUBCATEGORIES,
  SUBCATEGORIES_BY_CATEGORY,
  subcategoriesFor,
} from '../../../src/data/connector-subcategories';
import type { ConnectorCategory } from '../../../src/data/connectors';
import { ICON_PATHS } from '../../../src/components/icon-paths';
import { useContent } from '../../../src/i18n/content';
import { LANGS } from '../../helpers/locales';

const CATEGORIES: ConnectorCategory[] = ['finance', 'wallets', 'services', 'data', 'socials'];

describe('SUBCATEGORIES_BY_CATEGORY', () => {
  it('covers every connector category', () => {
    expect(Object.keys(SUBCATEGORIES_BY_CATEGORY).sort()).toEqual([...CATEGORIES].sort());
  });

  it('gives every category at least one chip', () => {
    for (const category of CATEGORIES) {
      expect(SUBCATEGORIES_BY_CATEGORY[category].length, category).toBeGreaterThan(0);
    }
  });

  it('has no duplicate keys inside a category', () => {
    for (const category of CATEGORIES) {
      const keys = SUBCATEGORIES_BY_CATEGORY[category].map((s) => s.key);
      expect(new Set(keys).size, category).toBe(keys.length);
    }
  });

  it('uses icons the shared icon set can draw', () => {
    for (const category of CATEGORIES) {
      for (const sub of SUBCATEGORIES_BY_CATEGORY[category]) {
        expect(ICON_PATHS, `${category}.${sub.key} → ${sub.icon}`).toHaveProperty(sub.icon);
      }
    }
  });

  it('resolves every label from assets or kinds, in every locale', () => {
    for (const lang of LANGS) {
      const page = useContent(lang).connectorsPage as unknown as {
        assets: Record<string, string>;
        kinds: Record<string, string>;
      };
      for (const category of CATEGORIES) {
        for (const sub of SUBCATEGORIES_BY_CATEGORY[category]) {
          expect(['assets', 'kinds'], sub.key).toContain(sub.labelFrom);
          const label = page[sub.labelFrom][sub.key];
          expect(label?.trim(), `${lang}.${sub.labelFrom}.${sub.key}`).toBeTruthy();
        }
      }
    }
  });

  it('keys Finance chips on asset classes, apart from the payments kind', () => {
    for (const sub of SUBCATEGORIES_BY_CATEGORY.finance) {
      expect(sub.labelFrom, sub.key).toBe(sub.key === 'payments' ? 'kinds' : 'assets');
    }
  });

  it('keys every non-Finance chip on a venue kind', () => {
    for (const category of CATEGORIES.filter((c) => c !== 'finance')) {
      for (const sub of SUBCATEGORIES_BY_CATEGORY[category]) {
        expect(sub.labelFrom, `${category}.${sub.key}`).toBe('kinds');
      }
    }
  });
});

describe('ALL_SUBCATEGORIES', () => {
  it('is the deduplicated union of every category', () => {
    const keys = ALL_SUBCATEGORIES.map((s) => s.key);
    expect(new Set(keys).size).toBe(keys.length);
    const union = new Set(CATEGORIES.flatMap((c) => SUBCATEGORIES_BY_CATEGORY[c].map((s) => s.key)));
    expect(new Set(keys)).toEqual(union);
  });

  it('follows category-tab order, first occurrence winning the icon', () => {
    expect(ALL_SUBCATEGORIES[0]).toEqual(SUBCATEGORIES_BY_CATEGORY.finance[0]);
    // `payments` appears in both finance and services; finance defines it first.
    const payments = ALL_SUBCATEGORIES.find((s) => s.key === 'payments');
    expect(payments).toBe(SUBCATEGORIES_BY_CATEGORY.finance.find((s) => s.key === 'payments'));
    // `observability` appears in services before data.
    const observability = ALL_SUBCATEGORIES.find((s) => s.key === 'observability');
    expect(observability).toBe(
      SUBCATEGORIES_BY_CATEGORY.services.find((s) => s.key === 'observability'),
    );
  });
});

describe('subcategoriesFor', () => {
  it('returns the union for "all"', () => {
    expect(subcategoriesFor('all')).toBe(ALL_SUBCATEGORIES);
  });

  it('returns just that category’s chips', () => {
    for (const category of CATEGORIES) {
      expect(subcategoriesFor(category)).toBe(SUBCATEGORIES_BY_CATEGORY[category]);
    }
  });

  it('returns an empty list for an unknown category', () => {
    expect(subcategoriesFor('nope' as ConnectorCategory)).toEqual([]);
  });
});
