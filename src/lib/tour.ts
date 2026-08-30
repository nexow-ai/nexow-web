/**
 * The scroll tour's pace.
 *
 * The tour advances the scroll at one real-world speed, in CSS pixels per
 * second: the same tempo through a pinned scene, the copy beside it and the
 * road between acts, so the page reads as one take rather than a series of
 * stops. `Header.astro` moves the page by `TOUR_SPEED` × the frame's seconds,
 * which is what makes a 120Hz laptop and a 60Hz monitor travel it at the same
 * rate.
 *
 * Because the pace never changes, the time left is distance over speed, and
 * the tour HUD can count it down from nothing more than the scroll position.
 */

/** The tour's pace, in CSS pixels per second. */
export const TOUR_SPEED = 380;

/**
 * How far a page has to scroll before the tour is worth offering, in CSS
 * pixels — half a second of travel. The bar is deliberately this low: the
 * button belongs on every page of the site, and the only page it cannot serve
 * is one that has nowhere to go, where pressing play would end where it began.
 */
export const TOUR_MIN_TRAVEL = TOUR_SPEED * 0.5;

/** Whether a page with `max` pixels of scroll has anywhere for a tour to go. */
export function worthTouring(max: number, least = TOUR_MIN_TRAVEL): boolean {
  return max >= least;
}

/** How much of the tour is still ahead, in seconds, from position `y` of `max`. */
export function secondsLeft(y: number, max: number, speed = TOUR_SPEED): number {
  const ahead = Math.min(Math.max(0, max), Math.max(0, max - y));
  return ahead / speed;
}

/** Seconds as a clock, rounded up so the countdown only reads 0:00 at the end. */
export function clock(seconds: number): string {
  const whole = Math.max(0, Math.ceil(seconds));
  const rest = whole % 60;
  return `${Math.floor(whole / 60)}:${rest < 10 ? '0' : ''}${rest}`;
}
