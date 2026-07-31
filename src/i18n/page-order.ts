import type { Lang } from './config';
import type { SiteContent } from './content';
import { localizePath } from './utils';

/**
 * Canonical page tour driving the fixed prev / next arrows.
 *
 * Header-nav order first (the primary journey), then the support pages people
 * reach for once they are interested, and finally the rest of the footer —
 * audience pages, invite, and the legal documents — in footer reading order,
 * so the tour covers every page rather than dead-ending at contact. Blog posts
 * and other routes outside this list simply get no arrows.
 */
export const PAGE_ORDER: string[] = [
  '/',
  '/features',
  '/community',
  '/connectors',
  '/plans',
  '/blog',
  '/help',
  '/security',
  '/about',
  '/contact',
  '/changelog',
  '/for/traders',
  '/for/founders',
  '/for/builders',
  '/invite',
  '/legal',
  '/privacy',
  '/terms',
  '/cookies',
  '/acceptable-use',
  '/community-rules',
];

export interface PageNeighbour {
  /** Canonical (English-shaped) route. */
  route: string;
  /** Localized href to link at. */
  href: string;
  /** Localized page name. */
  label: string;
}

/** Drop a trailing slash so `/features/` and `/features` resolve alike. */
export function normalizeRoute(route: string): string {
  return route.length > 1 && route.endsWith('/') ? route.slice(0, -1) : route;
}

/** Where a route sits on the tour, or -1 when it is not part of it. */
export function getPageIndex(route: string): number {
  return PAGE_ORDER.indexOf(normalizeRoute(route));
}

/**
 * Localized page names harvested from the link tables the site already
 * translates — nav wins over footer, so a page named in both keeps its
 * primary-nav wording.
 */
function pageLabels(t: SiteContent): Map<string, string> {
  const labels = new Map<string, string>();
  for (const link of t.nav.links) labels.set(link.href, link.label);
  for (const column of t.footer.columns) {
    for (const link of column.links) if (!labels.has(link.href)) labels.set(link.href, link.label);
  }
  labels.set('/', t.nav.home ?? 'Home');
  return labels;
}

/** Previous / next page in the tour, already localized. Both may be absent. */
export function getPageNeighbours(
  route: string,
  lang: Lang,
  t: SiteContent,
): { prev?: PageNeighbour; next?: PageNeighbour } {
  const index = getPageIndex(route);
  if (index === -1) return {};

  const labels = pageLabels(t);
  const at = (i: number): PageNeighbour | undefined => {
    const target = PAGE_ORDER[i];
    if (!target) return undefined;
    return { route: target, href: localizePath(target, lang), label: labels.get(target) ?? target };
  };

  return { prev: at(index - 1), next: at(index + 1) };
}
