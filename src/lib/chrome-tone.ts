/**
 * Which tone the fixed chrome is floating over.
 *
 * The home page is one continuous room whose bands alternate tone — a light
 * one, then a dark one, then light again, all on the same page theme (see
 * `components/world/World.astro`). The chrome that stays on screen while those
 * scroll past — the header bar, the tour's transport, the corner arrows — is
 * coloured from the page theme alone, so on every other band it is drawn in
 * the tone it is sitting on. The scroll tour is where that hurts most: it is
 * the one time nobody is touching the page, and the transport's white glyphs
 * spend half the story invisible on a white band.
 *
 * So the chrome reads what is behind it instead. This module owns the sums:
 * the bands, in document space, and whether a line of the viewport falls
 * inside one. Reading the boxes and painting the class is
 * `components/ChromeTone.astro`; each piece of chrome styles itself from
 * `.chrome-invert`, which means "the opposite of the page tone is behind me".
 */

/** A band that paints in the opposite tone to the page, in document pixels. */
export interface ToneBand {
  top: number;
  bottom: number;
}

/** Dispatched on `document` whenever the tone under a piece of chrome flips. */
export const CHROME_TONE_EVENT = 'nexow:chrometone';

/**
 * The line the top chrome is read against, down from the top of the viewport:
 * the middle of the header's 4rem bar under its 0.75rem margin.
 */
export const CHROME_TOP_INSET = 44;

/**
 * The line the foot chrome is read against, up from the bottom of the
 * viewport: the middle of the tour's transport, and of the corner arrows.
 */
export const CHROME_FOOT_INSET = 48;

/** Whether document position `y` sits in a band that inverts the page tone. */
export function invertedAt(y: number, bands: ToneBand[]): boolean {
  return bands.some((band) => y >= band.top && y < band.bottom);
}
