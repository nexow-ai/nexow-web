import { describe, expect, it } from 'vitest';
import { NAV_ICONS, getNavIcon } from '../../../src/i18n/nav-icons';
import { PAGE_BADGE_ICONS, getPageBadgeIcon } from '../../../src/i18n/page-badge-icons';
import { ICON_PATHS } from '../../../src/components/icon-paths';

describe('NAV_ICONS', () => {
  it('keys every entry on a canonical, locale-free route', () => {
    for (const route of Object.keys(NAV_ICONS)) {
      expect(route, route).toMatch(/^\/[a-z][a-z0-9/-]*$/);
      expect(route.endsWith('/'), route).toBe(false);
    }
  });

  it('resolves every icon in the shared icon set', () => {
    for (const [route, icon] of Object.entries(NAV_ICONS)) {
      expect(ICON_PATHS, `${route} → ${icon}`).toHaveProperty(icon);
    }
  });
});

describe('getNavIcon', () => {
  it('returns the mapped icon', () => {
    expect(getNavIcon('/features')).toBe('sparkles');
    expect(getNavIcon('/plans')).toBe('coins');
  });

  it('returns undefined for routes without a nav icon', () => {
    expect(getNavIcon('/privacy')).toBeUndefined();
    expect(getNavIcon('/es/features')).toBeUndefined();
  });

  it('agrees with the table for every key', () => {
    for (const [route, icon] of Object.entries(NAV_ICONS)) {
      expect(getNavIcon(route)).toBe(icon);
    }
  });
});

describe('PAGE_BADGE_ICONS', () => {
  it('resolves every icon in the shared icon set', () => {
    for (const [route, icon] of Object.entries(PAGE_BADGE_ICONS)) {
      expect(ICON_PATHS, `${route} → ${icon}`).toHaveProperty(icon);
    }
  });

  it('covers every nav route so header links and page heroes agree', () => {
    for (const route of Object.keys(NAV_ICONS)) {
      expect(PAGE_BADGE_ICONS[route], route).toBe(NAV_ICONS[route]);
    }
  });

  it('keys every entry on a canonical, locale-free route', () => {
    for (const route of Object.keys(PAGE_BADGE_ICONS)) {
      expect(route, route).toMatch(/^\/[a-z][a-z0-9/-]*$/);
    }
  });
});

describe('getPageBadgeIcon', () => {
  it('returns the mapped icon', () => {
    expect(getPageBadgeIcon('/for/traders')).toBe('signal');
    expect(getPageBadgeIcon('/legal')).toBe('landmark');
  });

  it('returns undefined for unmapped routes', () => {
    expect(getPageBadgeIcon('/')).toBeUndefined();
    expect(getPageBadgeIcon('/nope')).toBeUndefined();
  });

  it('agrees with the table for every key', () => {
    for (const [route, icon] of Object.entries(PAGE_BADGE_ICONS)) {
      expect(getPageBadgeIcon(route)).toBe(icon);
    }
  });
});
