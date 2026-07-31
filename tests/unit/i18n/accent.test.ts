import { describe, expect, it } from 'vitest';
import { getPageAccent, type PageAccent } from '../../../src/i18n/accent';
import { CANONICAL_ROUTES } from '../../helpers/locales';

const ACCENTS: PageAccent[] = ['brand', 'gold', 'sky', 'violet', 'amber', 'rose'];

describe('getPageAccent', () => {
  it('gives Community its own sky accent', () => {
    expect(getPageAccent('/community')).toBe('sky');
  });

  it('matches a route exactly', () => {
    expect(getPageAccent('/features')).toBe('brand');
    expect(getPageAccent('/connectors')).toBe('brand');
    expect(getPageAccent('/plans')).toBe('brand');
    expect(getPageAccent('/blog')).toBe('brand');
    expect(getPageAccent('/about')).toBe('brand');
  });

  it('inherits the accent on nested routes', () => {
    expect(getPageAccent('/community/')).toBe('sky');
    expect(getPageAccent('/community/threads')).toBe('sky');
    expect(getPageAccent('/blog/a-post')).toBe('brand');
  });

  it('does not match a route that merely shares a prefix', () => {
    expect(getPageAccent('/communityhub')).toBe('brand');
    expect(getPageAccent('/blogs')).toBe('brand');
  });

  it('falls back to brand for unmapped routes', () => {
    expect(getPageAccent('/')).toBe('brand');
    expect(getPageAccent('/privacy')).toBe('brand');
    expect(getPageAccent('/nope')).toBe('brand');
    expect(getPageAccent('')).toBe('brand');
  });

  it('returns a declared accent for every canonical route', () => {
    for (const route of CANONICAL_ROUTES) {
      expect(ACCENTS, route).toContain(getPageAccent(route));
    }
  });
});
