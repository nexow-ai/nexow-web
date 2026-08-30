/**
 * The scroll tour's pace.
 *
 * The tour advances the scroll at one real-world speed, in CSS pixels per
 * second: the same tempo through a pinned scene, the copy beside it and the
 * road between acts, so the page reads as one take rather than a series of
 * stops. `Header.astro` moves the page by `TOUR_SPEED` × the chosen rate × the
 * frame's seconds, which is what makes a 120Hz laptop and a 60Hz monitor
 * travel it at the same rate.
 *
 * The rate is a multiplier the transport can step through (`x0.25` … `x2`).
 * Time left is distance over the current speed, so the HUD countdown follows
 * the rate from nothing more than the scroll position.
 */

/** The tour's base pace, in CSS pixels per second — the `x1` rate. */
export const TOUR_SPEED = 380;

/** Multipliers the transport steps through. Default is `1`. */
export const TOUR_RATES = [0.25, 0.5, 1, 2] as const;
export type TourRate = (typeof TOUR_RATES)[number];
export const TOUR_RATE_DEFAULT: TourRate = 1;

let rate: TourRate = TOUR_RATE_DEFAULT;

/** The rate last chosen on this page load — survives view transitions. */
export function tourRate(): TourRate {
  return rate;
}

/** Pin the rate. Unknown values fall back to `x1`. */
export function setTourRate(next: number): TourRate {
  rate = (TOUR_RATES as readonly number[]).includes(next) ? (next as TourRate) : TOUR_RATE_DEFAULT;
  return rate;
}

/** Step to the next rate, wrapping `x2` back to `x0.25`. */
export function nextTourRate(current: number): TourRate {
  const i = TOUR_RATES.indexOf(current as TourRate);
  const from = i === -1 ? TOUR_RATES.indexOf(TOUR_RATE_DEFAULT) : i;
  return TOUR_RATES[(from + 1) % TOUR_RATES.length];
}

/** Advance the remembered rate and return it. */
export function cycleTourRate(): TourRate {
  return setTourRate(nextTourRate(rate));
}

/** The mark the transport shows, e.g. `x1` or `x0.25`. */
export function paceMark(current: number): string {
  return `x${current}`;
}

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
