/** Resolve page components out of the Astro page tree, by canonical route. */
import { localizePath } from '../../src/i18n/utils';
import type { Lang } from '../../src/i18n/config';

const pageModules = import.meta.glob<{ default: unknown }>('../../src/pages/**/*.astro', {
  eager: true,
});

/**
 * The component for `route` in `lang`, however Astro spells the file:
 * `/features` may live at `features.astro` or `features/index.astro`.
 */
export function pageFor(route: string, lang: Lang): unknown {
  const localized = localizePath(route, lang).replace(/^\//, '');
  const candidates = [
    `../../src/pages/${localized || 'index'}.astro`,
    `../../src/pages/${localized ? `${localized}/index` : 'index'}.astro`,
  ];
  for (const key of candidates) {
    const mod = pageModules[key];
    if (mod) return mod.default;
  }
  return undefined;
}

/** Every page module, keyed by its path under src/pages. */
export const PAGE_MODULES = pageModules;
