import { describe, expect, it } from 'vitest';
import { useContent } from '../../../src/i18n/content';
import {
  getPageIndex,
  getPageNeighbours,
  normalizeRoute,
  PAGE_ORDER,
} from '../../../src/i18n/page-order';
import type { SiteContent } from '../../../src/i18n/content';

/** Minimal content stub — only the fields `pageLabels` / neighbours read. */
function stubContent(overrides: {
  home?: string;
  navLinks?: { href: string; label: string }[];
  footerLinks?: { href: string; label: string }[];
} = {}): SiteContent {
  const base = useContent('en');
  return {
    ...base,
    nav: {
      ...base.nav,
      home: overrides.home,
      links: overrides.navLinks ?? [],
    },
    footer: {
      ...base.footer,
      columns: [{ title: 'Site', links: overrides.footerLinks ?? [] }],
    },
  };
}

describe('normalizeRoute', () => {
  it('strips a trailing slash from non-root paths', () => {
    expect(normalizeRoute('/features/')).toBe('/features');
    expect(normalizeRoute('/blog/post/')).toBe('/blog/post');
  });

  it('leaves the root and already-clean paths alone', () => {
    expect(normalizeRoute('/')).toBe('/');
    expect(normalizeRoute('/features')).toBe('/features');
  });
});

describe('getPageIndex', () => {
  it('returns the tour position for a known route', () => {
    expect(getPageIndex('/')).toBe(0);
    expect(getPageIndex('/features')).toBe(1);
    expect(getPageIndex('/community-rules')).toBe(PAGE_ORDER.length - 1);
  });

  it('tolerates a trailing slash', () => {
    expect(getPageIndex('/plans/')).toBe(getPageIndex('/plans'));
  });

  it('returns -1 for routes outside the tour', () => {
    expect(getPageIndex('/blog/a-post')).toBe(-1);
    expect(getPageIndex('/nope')).toBe(-1);
  });
});

describe('getPageNeighbours', () => {
  const t = useContent('en');

  it('returns nothing for a route outside the tour', () => {
    expect(getPageNeighbours('/blog/a-post', 'en', t)).toEqual({});
  });

  it('omits previous on the first stop and next on the last', () => {
    const first = getPageNeighbours('/', 'en', t);
    expect(first.prev).toBeUndefined();
    expect(first.next?.route).toBe('/features');

    const last = getPageNeighbours('/community-rules', 'en', t);
    expect(last.next).toBeUndefined();
    expect(last.prev?.route).toBe('/acceptable-use');
  });

  it('localizes hrefs for a prefixed locale', () => {
    const { prev, next } = getPageNeighbours('/features', 'es', t);
    expect(prev).toEqual({ route: '/', href: '/es', label: expect.any(String) });
    expect(next).toEqual({
      route: '/community',
      href: '/es/community',
      label: expect.any(String),
    });
  });

  it('falls back to "Home" when nav.home is unset', () => {
    const bare = stubContent({ home: undefined, navLinks: [{ href: '/features', label: 'Features' }] });
    const { next } = getPageNeighbours('/', 'en', bare);
    // Neighbour of / is /features; walk back from features to exercise the home label.
    const { prev } = getPageNeighbours('/features', 'en', bare);
    expect(prev?.label).toBe('Home');
    expect(next?.label).toBe('Features');
  });

  it('prefers nav labels over footer duplicates', () => {
    const mixed = stubContent({
      home: 'Home',
      navLinks: [{ href: '/features', label: 'Nav Features' }],
      footerLinks: [
        { href: '/features', label: 'Footer Features' },
        { href: '/community', label: 'Community' },
      ],
    });
    const { next } = getPageNeighbours('/', 'en', mixed);
    expect(next?.label).toBe('Nav Features');
  });

  it('falls back to the route path when no label is known', () => {
    const empty = stubContent({ home: 'Home', navLinks: [], footerLinks: [] });
    const { next } = getPageNeighbours('/', 'en', empty);
    expect(next).toEqual({ route: '/features', href: '/features', label: '/features' });
  });

  it('covers every neighbouring pair in PAGE_ORDER', () => {
    for (let i = 0; i < PAGE_ORDER.length; i++) {
      const { prev, next } = getPageNeighbours(PAGE_ORDER[i], 'en', t);
      if (i === 0) expect(prev).toBeUndefined();
      else expect(prev?.route).toBe(PAGE_ORDER[i - 1]);
      if (i === PAGE_ORDER.length - 1) expect(next).toBeUndefined();
      else expect(next?.route).toBe(PAGE_ORDER[i + 1]);
    }
  });
});
