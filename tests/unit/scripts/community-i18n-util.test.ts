import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
// @ts-expect-error — plain ESM build script, no types.
import { injectCommunityPage, toTsLiteral } from '../../../scripts/community-i18n/util.mjs';

/** Evaluate an emitted literal back into a value, to prove it is valid syntax. */
const evaluate = (literal: string): unknown => new Function(`return (${literal});`)();

describe('toTsLiteral', () => {
  it('emits primitives', () => {
    expect(toTsLiteral(null)).toBe('null');
    expect(toTsLiteral(42)).toBe('42');
    expect(toTsLiteral(-1.5)).toBe('-1.5');
    expect(toTsLiteral(true)).toBe('true');
    expect(toTsLiteral(false)).toBe('false');
  });

  it('single-quotes strings', () => {
    expect(toTsLiteral('hola')).toBe("'hola'");
  });

  it('escapes backslashes, single quotes and newlines', () => {
    expect(toTsLiteral("it's")).toBe("'it\\'s'");
    expect(toTsLiteral('a\\b')).toBe("'a\\\\b'");
    expect(toTsLiteral('line1\nline2')).toBe("'line1\\nline2'");
    expect(evaluate(toTsLiteral("a\\'b\nc"))).toBe("a\\'b\nc");
  });

  it('leaves typographic quotes alone — the locales use them verbatim', () => {
    expect(toTsLiteral('“Nexow”')).toBe("'“Nexow”'");
  });

  it('emits empty containers inline', () => {
    expect(toTsLiteral([])).toBe('[]');
    expect(toTsLiteral({})).toBe('{}');
  });

  it('emits arrays one item per line with a trailing comma', () => {
    expect(toTsLiteral(['a', 'b'], 0)).toBe("[\n  'a',\n  'b',\n]");
  });

  it('emits objects one key per line with a trailing comma', () => {
    expect(toTsLiteral({ a: 1, b: 'x' }, 0)).toBe("{\n  a: 1,\n  b: 'x',\n}");
  });

  it('quotes keys that are not valid identifiers', () => {
    expect(toTsLiteral({ 'a-b': 1, $ok: 2, _ok: 3, '0bad': 4 }, 0)).toBe(
      "{\n  'a-b': 1,\n  $ok: 2,\n  _ok: 3,\n  '0bad': 4,\n}",
    );
  });

  it('escapes quotes inside a key', () => {
    expect(toTsLiteral({ "it's": 1 }, 0)).toBe("{\n  'it\\'s': 1,\n}");
  });

  it('indents nested structures from the given level', () => {
    expect(toTsLiteral({ outer: { inner: [1] } }, 0)).toBe(
      '{\n  outer: {\n    inner: [\n      1,\n    ],\n  },\n}',
    );
  });

  it('defaults to the two-space indent the locale files use', () => {
    expect(toTsLiteral({ a: 1 })).toBe('{\n    a: 1,\n  }');
  });

  it('round-trips a realistic communityPage payload', () => {
    const payload = {
      meta: { title: 'Comunidad — Nexow', description: 'Descripción con “comillas”.' },
      hero: { badge: 'Comunidad', chips: ['Feed', 'Boards', 'DAO'] },
      counts: { posts: 0, live: true, note: null },
      'odd-key': ["it's", 'multi\nline'],
      empty: {},
      none: [],
    };
    expect(evaluate(toTsLiteral(payload))).toEqual(payload);
  });

  it('refuses values it cannot serialize', () => {
    expect(() => toTsLiteral(undefined)).toThrow('Unsupported value: undefined');
    expect(() => toTsLiteral({ fn: () => 1 })).toThrow('Unsupported value: function');
    expect(() => toTsLiteral([undefined])).toThrow('Unsupported value: undefined');
  });
});

describe('injectCommunityPage', () => {
  let root: string;
  let file: string;
  let log: ReturnType<typeof vi.spyOn>;

  const HEADER = "import type { SiteContent } from '../content';\n\nexport const es: SiteContent = {\n";
  const NAV = "  nav: {\n    launch: 'Abrir la app',\n  },\n";
  const FEATURES = "  features: {\n    meta: {\n      title: 'Funciones',\n    },\n  },\n";
  const FOOTER = '};\n';

  const write = (body: string) => fs.writeFileSync(file, body);
  const read = () => fs.readFileSync(file, 'utf8');

  beforeEach(() => {
    root = fs.mkdtempSync(path.join(os.tmpdir(), 'nexow-i18n-'));
    fs.mkdirSync(path.join(root, 'src/i18n/locales'), { recursive: true });
    file = path.join(root, 'src/i18n/locales/es.ts');
    log = vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    log.mockRestore();
    fs.rmSync(root, { recursive: true, force: true });
  });

  it('inserts communityPage immediately before the features block', () => {
    write(HEADER + NAV + FEATURES + FOOTER);
    injectCommunityPage('es', { meta: { title: 'Comunidad' } }, root);

    const out = read();
    expect(out).toContain('communityPage: {');
    expect(out.indexOf('communityPage:')).toBeGreaterThan(out.indexOf('nav:'));
    expect(out.indexOf('communityPage:')).toBeLessThan(out.indexOf('features:'));
    expect(out).toContain("      title: 'Comunidad',");
  });

  it('leaves the rest of the file untouched', () => {
    write(HEADER + NAV + FEATURES + FOOTER);
    injectCommunityPage('es', { meta: { title: 'Comunidad' } }, root);

    const out = read();
    expect(out.startsWith(HEADER)).toBe(true);
    expect(out).toContain(NAV);
    expect(out).toContain(FEATURES);
    expect(out.endsWith(FOOTER)).toBe(true);
  });

  it('replaces an existing communityPage instead of duplicating it', () => {
    const existing = "  communityPage: {\n    meta: {\n      title: 'Viejo',\n    },\n  },\n";
    write(HEADER + NAV + existing + FEATURES + FOOTER);
    injectCommunityPage('es', { meta: { title: 'Nuevo' } }, root);

    const out = read();
    expect(out.match(/communityPage:/g)).toHaveLength(1);
    expect(out).toContain("title: 'Nuevo'");
    expect(out).not.toContain('Viejo');
  });

  it('is idempotent across repeated runs', () => {
    write(HEADER + NAV + FEATURES + FOOTER);
    injectCommunityPage('es', { meta: { title: 'Comunidad' } }, root);
    const first = read();
    injectCommunityPage('es', { meta: { title: 'Comunidad' } }, root);
    expect(read()).toBe(first);
  });

  it('logs the locale it injected', () => {
    write(HEADER + NAV + FEATURES + FOOTER);
    injectCommunityPage('es', { meta: { title: 'Comunidad' } }, root);
    expect(log).toHaveBeenCalledWith('injected', 'es');
  });

  it('throws when the features anchor is missing, rather than writing a broken file', () => {
    write(HEADER + NAV + FOOTER);
    expect(() => injectCommunityPage('es', { meta: {} }, root)).toThrow(
      'Cannot find features page anchor in es',
    );
    expect(read()).toBe(HEADER + NAV + FOOTER);
  });

  it('throws when the locale file does not exist', () => {
    expect(() => injectCommunityPage('nope', { meta: {} }, root)).toThrow(/ENOENT/);
  });

  it('emits a block that parses as an object literal', () => {
    write(HEADER + NAV + FEATURES + FOOTER);
    const payload = { meta: { title: 'Comunidad' }, chips: ['a', 'b'] };
    injectCommunityPage('es', payload, root);

    const block = read().match(/ {2}communityPage: (\{[\s\S]*?\n {2}\}),\n {2}features:/);
    expect(block).not.toBeNull();
    expect(evaluate(block![1])).toEqual(payload);
  });
});
