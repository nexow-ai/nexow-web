import { describe, expect, it } from 'vitest';
import { dir, localizePath } from '../../src/i18n/utils';
import { CANONICAL_ROUTES, LANGS } from '../helpers/locales';
import { pageFor } from '../helpers/pages';
import { render } from '../helpers/render';


/** Rendering every canonical route takes well past the default per-test budget. */
const RENDER_TIMEOUT = 120_000;

describe('document structure', () => {
  it('declares the language and direction on every locale’s home page', async () => {
    for (const lang of LANGS) {
      const html = await render(pageFor('/', lang) as never, localizePath('/', lang));
      expect(html, `${lang} lang attribute`).toContain(`<html lang="${lang}"`);
      expect(html, `${lang} dir attribute`).toContain(`dir="${dir(lang)}"`);
    }
  }, RENDER_TIMEOUT);

  it('offers a skip link as the first focusable element', async () => {
    const html = await render(pageFor('/', 'en') as never, '/');
    const body = html.slice(html.indexOf('<body'));
    const firstAnchor = body.match(/<a\b[^>]*>/)?.[0] ?? '';
    expect(firstAnchor).toContain('href="#main"');
  }, RENDER_TIMEOUT);

  it('gives every page exactly one h1 and one main landmark', async () => {
    for (const route of CANONICAL_ROUTES) {
      const html = await render(pageFor(route, 'en') as never, route);
      expect((html.match(/<h1\b/g) ?? []).length, `${route} h1 count`).toBe(1);
      expect((html.match(/<main\b/g) ?? []).length, `${route} main count`).toBe(1);
      expect(html, `${route} main id`).toContain('id="main"');
    }
  }, RENDER_TIMEOUT);

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
  }, RENDER_TIMEOUT);

  it('labels every image, or hides it from assistive tech', async () => {
    for (const route of CANONICAL_ROUTES) {
      const html = await render(pageFor(route, 'en') as never, route);
      for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) {
        const labelled = /\balt="/.test(tag) || /aria-hidden="true"/.test(tag);
        expect(labelled, `${route} has an unlabelled image: ${tag.slice(0, 120)}`).toBe(true);
      }
    }
  }, RENDER_TIMEOUT);

  it('hides every decorative svg from assistive tech, or names it', async () => {
    for (const route of CANONICAL_ROUTES) {
      const html = await render(pageFor(route, 'en') as never, route);
      const unnamed = [...html.matchAll(/<svg\b[^>]*>/g)]
        .map(([tag]) => tag)
        .filter((tag) => !/aria-hidden="true"|aria-label=|role="img"/.test(tag));
      expect(unnamed.slice(0, 3), `${route} has unnamed svg`).toEqual([]);
    }
  }, RENDER_TIMEOUT);

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
  }, RENDER_TIMEOUT);

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
  }, RENDER_TIMEOUT);

  it('uses unique ids, so labels and aria references resolve', async () => {
    for (const route of CANONICAL_ROUTES) {
      const html = await render(pageFor(route, 'en') as never, route);
      const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(([, id]) => id);
      const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
      expect([...new Set(duplicates)], `${route} repeats an id`).toEqual([]);
    }
  }, RENDER_TIMEOUT);

  it('marks every external link so it opens safely', async () => {
    for (const route of CANONICAL_ROUTES) {
      const html = await render(pageFor(route, 'en') as never, route);
      for (const [tag] of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) {
        expect(tag, `${route} opens a tab without rel=noopener`).toMatch(/rel="[^"]*noopener/);
      }
    }
  }, RENDER_TIMEOUT);
});
