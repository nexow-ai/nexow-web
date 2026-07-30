// @vitest-environment jsdom
import { describe, expect, it } from 'vitest';
import { audit, describeViolations } from '../helpers/a11y';
import { dir, localizePath } from '../../src/i18n/utils';
import { CANONICAL_ROUTES, LANGS } from '../helpers/locales';
import { render } from '../helpers/render';
import type { Lang } from '../../src/i18n/config';

const pageModules = import.meta.glob<{ default: unknown }>('../../src/pages/**/*.astro', {
  eager: true,
});

function pageFor(route: string, lang: Lang): unknown {
  const localized = localizePath(route, lang);
  const key = `../../src/pages/${localized.replace(/^\//, '') || 'index'}.astro`;
  return pageModules[key]?.default;
}

/** Rendering every page in every locale would be 340 audits; sample by script. */
const SAMPLE_LANGS: Lang[] = ['en', 'de', 'ja', 'ar'];

describe.each(CANONICAL_ROUTES)('%s is accessible', (route) => {
  it('has no axe violations', async () => {
    const html = await render(pageFor(route, 'en') as never, route);
    const { violations } = await audit(html);
    expect(describeViolations(violations), `${route} has accessibility violations`).toEqual([]);
  });
});

describe.each(SAMPLE_LANGS)('the %s home page is accessible', (lang) => {
  it('has no axe violations', async () => {
    const route = localizePath('/', lang);
    const html = await render(pageFor('/', lang) as never, route);
    const { violations } = await audit(html);
    expect(describeViolations(violations), `${lang} home has violations`).toEqual([]);
  });
});

describe('document structure', () => {
  it('declares the language and direction on every locale’s home page', async () => {
    for (const lang of LANGS) {
      const html = await render(pageFor('/', lang) as never, localizePath('/', lang));
      expect(html, `${lang} lang attribute`).toContain(`<html lang="${lang}"`);
      expect(html, `${lang} dir attribute`).toContain(`dir="${dir(lang)}"`);
    }
  });

  it('offers a skip link as the first focusable element', async () => {
    const html = await render(pageFor('/', 'en') as never, '/');
    const body = html.slice(html.indexOf('<body'));
    const firstAnchor = body.match(/<a\b[^>]*>/)?.[0] ?? '';
    expect(firstAnchor).toContain('href="#main"');
  });

  it('gives every page exactly one h1 and one main landmark', async () => {
    for (const route of CANONICAL_ROUTES) {
      const html = await render(pageFor(route, 'en') as never, route);
      expect((html.match(/<h1\b/g) ?? []).length, `${route} h1 count`).toBe(1);
      expect((html.match(/<main\b/g) ?? []).length, `${route} main count`).toBe(1);
      expect(html, `${route} main id`).toContain('id="main"');
    }
  });

  it('never skips a heading level', async () => {
    for (const route of CANONICAL_ROUTES) {
      const html = await render(pageFor(route, 'en') as never, route);
      const levels = [...html.matchAll(/<h([1-6])\b/g)].map(([, n]) => Number(n));
      let previous = levels[0];
      for (const level of levels.slice(1)) {
        expect(level - previous, `${route} jumps from h${previous} to h${level}`).toBeLessThanOrEqual(1);
        previous = level;
      }
    }
  });

  it('labels every image, or hides it from assistive tech', async () => {
    for (const route of CANONICAL_ROUTES) {
      const html = await render(pageFor(route, 'en') as never, route);
      for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) {
        const labelled = /\balt="/.test(tag) || /aria-hidden="true"/.test(tag);
        expect(labelled, `${route} has an unlabelled image: ${tag.slice(0, 120)}`).toBe(true);
      }
    }
  });

  it('hides every decorative svg from assistive tech, or names it', async () => {
    for (const route of CANONICAL_ROUTES) {
      const html = await render(pageFor(route, 'en') as never, route);
      const unnamed = [...html.matchAll(/<svg\b[^>]*>/g)]
        .map(([tag]) => tag)
        .filter((tag) => !/aria-hidden="true"|aria-label=|role="img"/.test(tag));
      expect(unnamed.slice(0, 3), `${route} has unnamed svg`).toEqual([]);
    }
  });

  it('gives every control an accessible name', async () => {
    for (const route of CANONICAL_ROUTES) {
      const html = await render(pageFor(route, 'en') as never, route);
      for (const [tag, inner] of html.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/g)) {
        const named =
          /aria-label=|aria-labelledby=|title=/.test(tag) ||
          inner.replace(/<[^>]*>/g, '').trim() !== '';
        expect(named, `${route} has an unnamed button: ${tag.slice(0, 120)}`).toBe(true);
      }
    }
  });

  it('pairs every text input with a label or an aria-label', async () => {
    for (const route of CANONICAL_ROUTES) {
      const html = await render(pageFor(route, 'en') as never, route);
      for (const [tag] of html.matchAll(/<(?:input|textarea|select)\b[^>]*>/g)) {
        if (/type="(hidden|submit|button)"/.test(tag)) continue;
        const id = tag.match(/\bid="([^"]*)"/)?.[1];
        const labelled =
          /aria-label=|aria-labelledby=/.test(tag) ||
          (id !== undefined && new RegExp(`<label[^>]*\\bfor="${id}"`).test(html));
        expect(labelled, `${route} has an unlabelled field: ${tag.slice(0, 120)}`).toBe(true);
      }
    }
  });

  it('uses unique ids, so labels and aria references resolve', async () => {
    for (const route of CANONICAL_ROUTES) {
      const html = await render(pageFor(route, 'en') as never, route);
      const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(([, id]) => id);
      const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
      expect([...new Set(duplicates)], `${route} repeats an id`).toEqual([]);
    }
  });

  it('marks every external link so it opens safely', async () => {
    for (const route of CANONICAL_ROUTES) {
      const html = await render(pageFor(route, 'en') as never, route);
      for (const [tag] of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) {
        expect(tag, `${route} opens a tab without rel=noopener`).toMatch(/rel="[^"]*noopener/);
      }
    }
  });
});
