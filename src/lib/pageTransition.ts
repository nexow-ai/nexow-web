/**
 * Page-to-page motion — the site as one horizontal strip.
 *
 * Changing page pushes the current one out sideways and pulls the next one in
 * from the opposite edge, so the tour (`src/i18n/page-order.ts`) reads as a
 * strip you scroll along rather than a stack of unrelated documents.
 *
 * Astro's router only knows *history* direction: a "previous page" arrow is
 * still a forward push, and would slide the wrong way. `slideDirection()`
 * re-derives the direction from the two routes and the hook in Layout writes it
 * onto the navigation before the animation pair is picked.
 *
 * The keyframes live in `global.css` (`nexow-page-*`) and are inline-relative,
 * so RTL locales mirror the whole thing for free.
 */
import type { TransitionDirectionalAnimations } from 'astro';
import { getPageIndex, normalizeRoute } from '../i18n/page-order';

/** Long enough to read as travel, short enough to not sit between pages. */
const DURATION = '0.45s';
/** Symmetric in-out: a slide eased only on the way out looks like it slips. */
const EASING = 'cubic-bezier(0.76, 0, 0.24, 1)';

const move = (name: string) => ({ name, duration: DURATION, easing: EASING, fillMode: 'both' });

/**
 * `transition:animate` value for the page body. Names read as
 * `<leaving|arriving>-<inline edge>`: forwards the page leaves toward the start
 * of the line and the next arrives from the end, backwards the reverse.
 */
export const slidePages: TransitionDirectionalAnimations = {
  forwards: { old: move('nexow-page-out-start'), new: move('nexow-page-in-end') },
  backwards: { old: move('nexow-page-out-end'), new: move('nexow-page-in-start') },
};

export type SlideDirection = 'forward' | 'back';

/** Whether `parent` sits above `child` in the path hierarchy (`/blog` → `/blog/x`). */
function contains(parent: string, child: string): boolean {
  return child !== parent && child.startsWith(parent === '/' ? '/' : `${parent}/`);
}

/**
 * Which way a navigation travels, from two locale-agnostic routes.
 *
 * Tour order decides whenever both ends are on it, so the axis always matches
 * the strip — no matter whether the visitor used the corner arrows, the header
 * or the browser. Off the tour, climbing back up a path (a blog post to the
 * blog index) reads as going back; everything else moves forwards.
 */
export function slideDirection(from: string, to: string): SlideDirection {
  const fromIndex = getPageIndex(from);
  const toIndex = getPageIndex(to);
  if (fromIndex !== -1 && toIndex !== -1) return toIndex < fromIndex ? 'back' : 'forward';
  return contains(normalizeRoute(to), normalizeRoute(from)) ? 'back' : 'forward';
}
