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
 * Time left is distance over the current speed, plus any still-ahead holds, so
 * the HUD countdown follows the rate from the scroll position and the map.
 *
 * Holds are intentional freezes at the close of the home story — plans,
 * rewards, FAQ — parked with the title under the header so the section is
 * fully in view — and a linger at the foot of the page before the music ends.
 * Their durations are written for `x1` and shrink when the transport runs
 * faster (`left -= dt × rate`).
 */

/** The tour's base pace, in CSS pixels per second — the `x1` rate. */
export const TOUR_SPEED = 380;

/** Multipliers the transport steps through. Default is `1`. */
export const TOUR_RATES = [0.25, 0.5, 1, 2] as const;
export type TourRate = (typeof TOUR_RATES)[number];
export const TOUR_RATE_DEFAULT: TourRate = 1;
/** First tour starts slower until the visitor accepts the pace hint. */
export const TOUR_RATE_INTRO: TourRate = 0.5;

/**
 * Mid-page freezes on the home close, in seconds at `x1`. Fired once each when
 * the section title reaches the hold inset.
 */
export const TOUR_SECTION_HOLDS = [
  { id: 'plans', seconds: 2.5 },
  { id: 'rewards', seconds: 2.5 },
  { id: 'faq', seconds: 2.5 },
] as const;

/** Linger at the bottom of the page at `x1` before the tour (and music) end. */
export const TOUR_END_HOLD = 5;

/**
 * Pixels from the top of the viewport where a hold parks the section title.
 * The header has already hidden on the way down, so this is a hairline of
 * air — not `scroll-padding-top` — so the heading sits at the top and the
 * rest of the section stays in view. A viewport fraction used to centre
 * the title and clip the cards below it.
 */
export const TOUR_HOLD_INSET = 16;

/** A hold's trigger, in document space. */
export type TourHoldMark = {
  id: string;
  /** Scroll Y at which the freeze starts. */
  y: number;
  /** Duration at `x1`, in seconds. */
  seconds: number;
};

/**
 * Map section holds onto the page. `tops` are the titles (not the padded
 * section boxes). Missing ids (every non-home route) are dropped — those
 * pages cruise straight through.
 */
export function measureSectionHolds(
  tops: ReadonlyMap<string, number>,
  inset: number = TOUR_HOLD_INSET,
  holds: readonly { id: string; seconds: number }[] = TOUR_SECTION_HOLDS,
): TourHoldMark[] {
  const marks: TourHoldMark[] = [];
  const pad = Number.isFinite(inset) ? Math.max(0, inset) : TOUR_HOLD_INSET;
  for (const hold of holds) {
    const top = tops.get(hold.id);
    if (top === undefined) continue;
    marks.push({
      id: hold.id,
      y: Math.max(0, top - pad),
      seconds: hold.seconds,
    });
  }
  return marks.sort((a, b) => a.y - b.y);
}

/** Scroll Y that puts a heading with viewport-top `viewTop` on the hold inset. */
export function parkScrollY(viewTop: number, scrollY: number, inset = TOUR_HOLD_INSET): number {
  const pad = Number.isFinite(inset) ? Math.max(0, inset) : TOUR_HOLD_INSET;
  return Math.max(0, scrollY + viewTop - pad);
}

/** This frame's travel would carry the heading onto or past the inset. */
export function crossesHold(viewTop: number, travel: number, inset = TOUR_HOLD_INSET): boolean {
  const pad = Number.isFinite(inset) ? Math.max(0, inset) : TOUR_HOLD_INSET;
  return viewTop > pad && viewTop - travel <= pad;
}

/**
 * Seconds of holds still ahead of `y` at the given rate. `activeLeft` is a
 * mid-page freeze's remaining time in `x1` seconds; `endLeft` is the footer
 * linger still owed (also in `x1` seconds — pass `0` once it has finished).
 * `done` are mid-page holds already taken on this run.
 */
export function holdSecondsAhead(
  y: number,
  marks: readonly TourHoldMark[],
  done: ReadonlySet<string>,
  activeLeft = 0,
  rate = 1,
  endLeft = TOUR_END_HOLD,
): number {
  const pace = rate > 0 ? rate : 1;
  let x1 = Math.max(0, activeLeft) + Math.max(0, endLeft);
  for (const mark of marks) {
    if (done.has(mark.id)) continue;
    if (mark.y > y) x1 += mark.seconds;
  }
  return x1 / pace;
}

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

/** Set when the visitor has used the tour transport's track button once. */
export const TOUR_TRACK_HINT_KEY = 'nexow-tour-track-hint';

export function trackHintDismissed(): boolean {
  try {
    return localStorage.getItem(TOUR_TRACK_HINT_KEY) === '1';
  } catch {
    return false;
  }
}

export function dismissTrackHint(): void {
  try {
    localStorage.setItem(TOUR_TRACK_HINT_KEY, '1');
  } catch {
    /* Storage blocked — the button still drops the label for this session. */
  }
}

/** Set when the visitor has used the tour transport's pace hint once. */
export const TOUR_PACE_HINT_KEY = 'nexow-tour-pace-hint';

export function paceHintDismissed(): boolean {
  try {
    return localStorage.getItem(TOUR_PACE_HINT_KEY) === '1';
  } catch {
    return false;
  }
}

export function dismissPaceHint(): void {
  try {
    localStorage.setItem(TOUR_PACE_HINT_KEY, '1');
  } catch {
    /* Storage blocked — the button still drops the label for this session. */
  }
}
