/**
 * Page-to-page motion — the site as one horizontal strip, with the language
 * picker as a vertical one.
 *
 * Changing page pushes the current one out sideways and pulls the next one in
 * from the opposite edge, so the tour (`src/i18n/page-order.ts`) reads as a
 * strip you scroll along rather than a stack of unrelated documents. Changing
 * language keeps the page and runs the same move vertically: the picker lists
 * locales top to bottom, so picking one further down pulls the page down, and
 * one further up pulls it up.
 *
 * Astro's router only knows *history* direction: a "previous page" arrow is
 * still a forward push, and would slide the wrong way. `navigationDirection()`
 * re-derives the direction from the two URLs and the hook in Layout writes it
 * onto the navigation before the animation pair is picked.
 *
 * The keyframes live in `global.css` (`nexow-page-*`). The horizontal ones are
 * inline-relative, so RTL locales mirror the strip for free; the vertical ones
 * travel a viewport height, since `<main>` is as tall as the whole page.
 */
import type { TransitionAnimationPair, TransitionDirectionalAnimations } from 'astro';
import { languages, type Lang } from '../i18n/config';
import { getPageIndex, normalizeRoute } from '../i18n/page-order';
import { getLangFromUrl, getRouteFromUrl } from '../i18n/utils';

/** Long enough to read as travel, short enough to not sit between pages. */
const DURATION = '0.45s';
/** Symmetric in-out: a slide eased only on the way out looks like it slips. */
const EASING = 'cubic-bezier(0.76, 0, 0.24, 1)';

const move = (name: string) => ({ name, duration: DURATION, easing: EASING, fillMode: 'both' });

export type SlideDirection = 'forward' | 'back' | 'up' | 'down';

/**
 * `transition:animate` value for the page body. Names read as
 * `<leaving|arriving>-<edge>`: forwards the page leaves toward the start of
 * the line and the next arrives from the end, backwards the reverse; down the
 * page leaves through the top and the next rises from the bottom, up the
 * reverse. Astro types only the two history directions but keys its generated
 * CSS on whatever direction the navigation carries, so the vertical pair
 * rides along under the names `navigationDirection()` hands out.
 */
export const slidePages: TransitionDirectionalAnimations &
  Record<Extract<SlideDirection, 'up' | 'down'>, TransitionAnimationPair> = {
  forwards: { old: move('nexow-page-out-start'), new: move('nexow-page-in-end') },
  backwards: { old: move('nexow-page-out-end'), new: move('nexow-page-in-start') },
  down: { old: move('nexow-page-out-top'), new: move('nexow-page-in-bottom') },
  up: { old: move('nexow-page-out-bottom'), new: move('nexow-page-in-top') },
};

/** Whether `parent` sits above `child` in the path hierarchy (`/blog` → `/blog/x`). */
function contains(parent: string, child: string): boolean {
  return child !== parent && child.startsWith(parent === '/' ? '/' : `${parent}/`);
}

/**
 * Which way a navigation travels along the strip, from two locale-agnostic
 * routes.
 *
 * Tour order decides whenever both ends are on it, so the axis always matches
 * the strip — no matter whether the visitor used the corner arrows, the header
 * or the browser. Off the tour, climbing back up a path (a blog post to the
 * blog index) reads as going back; everything else moves forwards.
 */
export function slideDirection(from: string, to: string): Extract<SlideDirection, 'forward' | 'back'> {
  const fromIndex = getPageIndex(from);
  const toIndex = getPageIndex(to);
  if (fromIndex !== -1 && toIndex !== -1) return toIndex < fromIndex ? 'back' : 'forward';
  return contains(normalizeRoute(to), normalizeRoute(from)) ? 'back' : 'forward';
}

/** Locales in the order the language picker lists them. */
const LANG_ORDER = Object.keys(languages) as Lang[];

/**
 * Which way a language switch travels: `down` to a locale listed below the
 * current one in the picker, `up` to one listed above. `undefined` when the
 * locale does not change, so the caller can fall back to the strip.
 */
export function langDirection(from: Lang, to: Lang): Extract<SlideDirection, 'up' | 'down'> | undefined {
  if (from === to) return undefined;
  return LANG_ORDER.indexOf(to) > LANG_ORDER.indexOf(from) ? 'down' : 'up';
}

/**
 * Direction for a navigation between two URLs. A change of locale is the
 * picker's vertical move whatever the route does — that is the action the
 * visitor took, and the route only changes alongside it when the page has no
 * translation yet. Everything else travels the strip.
 */
export function navigationDirection(from: URL, to: URL): SlideDirection {
  return (
    langDirection(getLangFromUrl(from), getLangFromUrl(to)) ??
    slideDirection(getRouteFromUrl(from), getRouteFromUrl(to))
  );
}
