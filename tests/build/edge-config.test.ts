import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { localizePath } from '../../src/i18n/utils';
import { LANGS } from '../helpers/locales';

/**
 * `public/_headers` and `public/_redirects` are shipped config that nothing else
 * type-checks or renders: Cloudflare reads them at the edge. A typo here is
 * invisible until production, so the rules are parsed and checked against the
 * route set the build actually produces.
 */
const ROOT = path.resolve(import.meta.dirname, '..', '..');
const DIST = path.join(ROOT, 'dist');
const built = fs.existsSync(path.join(DIST, 'index.html'));

const read = (file: string) => fs.readFileSync(path.join(ROOT, 'public', file), 'utf8');

const headersSource = read('_headers');
const redirectsSource = read('_redirects');

interface Redirect {
  from: string;
  to: string;
  status: number;
}

const redirects: Redirect[] = redirectsSource
  .split('\n')
  .map((line) => line.trim())
  .filter((line) => line !== '' && !line.startsWith('#'))
  .map((line) => {
    const [from, to, status] = line.split(/\s+/);
    return { from, to, status: Number(status) };
  });

/** `_headers` is blocks of `path` followed by indented `Header: value` lines. */
const headerBlocks = (() => {
  const blocks: { pattern: string; headers: Record<string, string> }[] = [];
  let current: { pattern: string; headers: Record<string, string> } | undefined;

  for (const raw of headersSource.split('\n')) {
    if (raw.trim() === '' || raw.trim().startsWith('#')) continue;
    if (!/^\s/.test(raw)) {
      current = { pattern: raw.trim(), headers: {} };
      blocks.push(current);
      continue;
    }
    const [, name, value] = raw.trim().match(/^([^:]+):\s*(.*)$/) ?? [];
    if (name && current) current.headers[name] = value;
  }
  return blocks;
})();

const headersFor = (pattern: string) =>
  headerBlocks.find((b) => b.pattern === pattern)?.headers ?? {};

describe('_redirects', () => {
  it('parses every non-comment line into a rule', () => {
    expect(redirects.length).toBeGreaterThan(0);
    for (const rule of redirects) {
      expect(rule.from, JSON.stringify(rule)).toMatch(/^\//);
      expect(rule.to, JSON.stringify(rule)).toMatch(/^\//);
      expect([301, 302, 307, 308], JSON.stringify(rule)).toContain(rule.status);
    }
  });

  it('carries a referral short link for every locale', () => {
    for (const lang of LANGS) {
      const from = `${localizePath('/r', lang)}/*`;
      const rule = redirects.find((r) => r.from === from);
      expect(rule, `no referral redirect for ${lang} (${from})`).toBeDefined();
      expect(rule!.to, `${lang} referral target`).toBe(
        `${localizePath('/invite', lang)}?code=:splat`,
      );
    }
  });

  it('sends every referral link to that locale’s own invite page', () => {
    for (const rule of redirects.filter((r) => r.from.includes('/r/'))) {
      const fromLang = rule.from.match(/^\/([a-z]{2})\//)?.[1] ?? 'en';
      const toLang = rule.to.match(/^\/([a-z]{2})\//)?.[1] ?? 'en';
      expect(toLang, `${rule.from} crosses locales`).toBe(fromLang);
    }
  });

  it('redirects temporarily, since the destination reads the code client-side', () => {
    for (const rule of redirects.filter((r) => r.from.includes('/r/'))) {
      expect(rule.status, rule.from).toBe(302);
    }
  });

  it('has no duplicate or shadowed source patterns', () => {
    const sources = redirects.map((r) => r.from);
    expect(new Set(sources).size).toBe(sources.length);
  });

  it('passes the captured code through to the destination', () => {
    for (const rule of redirects.filter((r) => r.from.endsWith('/*'))) {
      expect(rule.to, `${rule.from} drops the splat`).toContain(':splat');
    }
  });
});

describe('_headers', () => {
  it('sets the security headers on every response', () => {
    const global = headersFor('/*');
    expect(global['X-Content-Type-Options']).toBe('nosniff');
    expect(global['X-Frame-Options']).toBe('DENY');
    expect(global['Referrer-Policy']).toBe('strict-origin-when-cross-origin');
    expect(global['Permissions-Policy']).toBeDefined();
    expect(global['Strict-Transport-Security']).toMatch(/max-age=\d+/);
  });

  it('sets an HSTS max-age of at least a year, with subdomains', () => {
    const hsts = headersFor('/*')['Strict-Transport-Security'];
    const maxAge = Number(hsts.match(/max-age=(\d+)/)![1]);
    expect(maxAge).toBeGreaterThanOrEqual(31_536_000);
    expect(hsts).toContain('includeSubDomains');
  });

  it('denies the powerful permissions the site never uses', () => {
    const policy = headersFor('/*')['Permissions-Policy'];
    for (const feature of ['geolocation', 'microphone', 'camera']) {
      expect(policy, feature).toContain(`${feature}=()`);
    }
  });

  it('caches hashed build assets immutably', () => {
    const assets = headersFor('/_astro/*')['Cache-Control'];
    expect(assets).toContain('immutable');
    expect(Number(assets.match(/max-age=(\d+)/)![1])).toBeGreaterThanOrEqual(31_536_000);
  });

  it('caches unhashed brand assets for a bounded time, never immutably', () => {
    for (const pattern of ['/*.png', '/*.ico', '/*.svg']) {
      const cache = headersFor(pattern)['Cache-Control'];
      expect(cache, pattern).toBeDefined();
      expect(cache, `${pattern} must stay revalidatable`).not.toContain('immutable');
      expect(Number(cache.match(/max-age=(\d+)/)![1]), pattern).toBeGreaterThan(0);
    }
  });

  it('gives every block at least one header', () => {
    for (const block of headerBlocks) {
      expect(Object.keys(block.headers).length, block.pattern).toBeGreaterThan(0);
    }
  });

  it('uses well-formed header names', () => {
    for (const block of headerBlocks) {
      for (const name of Object.keys(block.headers)) {
        expect(name, `${block.pattern} → ${name}`).toMatch(/^[A-Za-z][A-Za-z0-9-]*$/);
      }
    }
  });
});

describe.skipIf(!built)('edge config in the build', () => {
  it('ships both files to dist, verbatim', () => {
    expect(fs.readFileSync(path.join(DIST, '_headers'), 'utf8')).toBe(headersSource);
    expect(fs.readFileSync(path.join(DIST, '_redirects'), 'utf8')).toBe(redirectsSource);
  });

  it('points every redirect at a page the build produced', () => {
    for (const rule of redirects) {
      const target = rule.to.split('?')[0].replace(/\/$/, '') || '/';
      const asFile = path.join(DIST, `${target.slice(1)}/index.html`);
      expect(fs.existsSync(asFile), `${rule.from} → ${rule.to} (missing ${target})`).toBe(true);
    }
  });

  it('does not shadow a real page with a redirect', () => {
    for (const rule of redirects) {
      const prefix = rule.from.replace(/\/\*$/, '');
      expect(
        fs.existsSync(path.join(DIST, prefix.slice(1), 'index.html')),
        `${rule.from} shadows a built page`,
      ).toBe(false);
    }
  });

  it('emits the hashed asset directory the cache rule targets', () => {
    expect(fs.existsSync(path.join(DIST, '_astro'))).toBe(true);
  });
});
