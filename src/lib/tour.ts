/**
 * The scroll tour's pace, as a function of where you are on the page.
 *
 * The tour advances the scroll at a real-world speed in CSS pixels per second,
 * and that speed is not one number: the right-hand scene of a pinned act is the
 * part that was crawling, so that half runs fast; the copy beside it then gets
 * a few seconds to be read. `Header.astro` reads `speedAt` once per frame to
 * drive the scroll.
 *
 * Because the pace depends only on the scroll position — never on time, never
 * on what the visitor does — the whole tour can be integrated ahead of time.
 * `timeTable` walks the document once and returns how many seconds it takes to
 * reach each step of it; `secondsLeft` then answers "how long is left" for any
 * position without touching the DOM. That is what the tour HUD counts down.
 *
 * Everything here is pure and works in document space: geometry comes in as
 * boxes measured once (`{ top, height }`, `top` relative to the document, not
 * the viewport), so a frame of the tour costs no layout reads at all.
 */

/** Pinned scene: the beats are already lit, move through them. */
export const TOUR_SCENE = 380;
/** Between acts: the pace of an unhurried scroll. */
export const TOUR_CRUISE = 260;
/** Copy in the reading band: slow to something you can actually read. */
export const TOUR_READ = 64;
/** How long the copy hold at the end of a pinned act should last, in seconds. */
export const TOUR_READ_HOLD = 4.2;
/** Time constant for easing from one pace into the next, in seconds. */
export const TOUR_EASE = 0.18;

/** The band of the viewport a reader's eyes are in, as fractions of its height. */
const BAND_TOP = 0.22;
const BAND_BOTTOM = 0.72;
/** Below this much of the viewport, an act is passing by rather than playing. */
const ACT_COVER = 0.15;
/** The share of a pinned act's travel that the closing hold may take. */
const HOLD_SHARE = 0.42;
/** Shorter than this and an act has no travel worth pinning (phone layout). */
const PINNED_MIN = 80;

/** A measured element: `top` in document space, so it is scroll-independent. */
export interface Box {
  top: number;
  height: number;
}

/** An act and the two halves the stacked layout paces off. */
export interface ActBox extends Box {
  copy?: Box;
  scene?: Box;
}

/** Everything the pace depends on, measured once. */
export interface TourMap {
  acts: ActBox[];
  /** Every `.act-copy` on the page, for the gaps between acts. */
  copies: Box[];
  vh: number;
}

/** How far apart `timeTable` samples the document, in CSS pixels. */
export const TOUR_STEP = 24;

function inBand(box: Box, y: number, vh: number): boolean {
  const top = box.top - y;
  return top + box.height > vh * BAND_TOP && top < vh * BAND_BOTTOM;
}

/** The tour's speed, in pixels per second, with the page scrolled to `y`. */
export function speedAt(y: number, map: TourMap): number {
  const { acts, copies, vh } = map;

  let best: ActBox | undefined;
  let bestCover = 0;
  for (const act of acts) {
    const top = act.top - y;
    const cover = Math.max(0, Math.min(top + act.height, vh) - Math.max(top, 0));
    if (cover > bestCover) {
      bestCover = cover;
      best = act;
    }
  }

  if (best && bestCover > vh * ACT_COVER) {
    const travel = best.height - vh;
    if (travel > PINNED_MIN) {
      /* Pinned: zip the scene together, then linger once every beat is lit. */
      const scrolled = Math.max(0, y - best.top);
      const hold = Math.min(travel * HOLD_SHARE, TOUR_READ * TOUR_READ_HOLD);
      return scrolled >= travel - hold ? TOUR_READ : TOUR_SCENE;
    }

    /* Stacked (phone): pace off whichever half is in the reading band. */
    const reading = !!best.copy && inBand(best.copy, y, vh);
    if (best.scene && !reading && inBand(best.scene, y, vh)) return TOUR_SCENE;
    if (reading) return TOUR_READ;
  }

  for (const copy of copies) {
    if (inBand(copy, y, vh)) return TOUR_READ;
  }
  return TOUR_CRUISE;
}

/**
 * Seconds from the top of the document to every `step`th pixel of it, summed.
 * The last entry is how long the whole tour takes.
 */
export function timeTable(map: TourMap, max: number, step = TOUR_STEP): Float64Array {
  const stops = Math.max(1, Math.ceil(Math.max(0, max) / step)) + 1;
  const table = new Float64Array(stops);
  let seconds = 0;
  for (let i = 1; i < stops; i++) {
    const y = (i - 1) * step;
    const span = Math.min(step, Math.max(0, max - y));
    // Sampled mid-span: a step that straddles a change of pace splits it.
    seconds += span / speedAt(y + span / 2, map);
    table[i] = seconds;
  }
  return table;
}

/** How much of the tour is still ahead, in seconds, from position `y`. */
export function secondsLeft(y: number, table: Float64Array, step = TOUR_STEP): number {
  const total = table[table.length - 1] ?? 0;
  const at = Math.min(table.length - 1, Math.max(0, y / step));
  const lower = Math.floor(at);
  const upper = Math.min(table.length - 1, lower + 1);
  const done = table[lower] + (table[upper] - table[lower]) * (at - lower);
  return Math.max(0, total - done);
}

/** Seconds as a clock, rounded up so the countdown only reads 0:00 at the end. */
export function clock(seconds: number): string {
  const whole = Math.max(0, Math.ceil(seconds));
  const rest = whole % 60;
  return `${Math.floor(whole / 60)}:${rest < 10 ? '0' : ''}${rest}`;
}
