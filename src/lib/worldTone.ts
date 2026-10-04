/**
 * The home world's section colour, without a canvas.
 *
 * Each scene of the story owns a colour family (an index into
 * TAILWIND_WAYS). The page wears the family of the scene under the middle of
 * the viewport and crosses to the next one over the last half-viewport before
 * the boundary, so a section is one colour and the handover is the seam.
 * `World.astro` writes the result as five shade steps on the document
 * (--w-hue-300 … --w-hue-700, which the world maps onto its brand tokens and
 * the rail and scrollbar read) and as the three stops of the world's wash.
 *
 * This used to be computed inside the WebGL frame loop, which ran on every
 * frame from the header to the footer. It is a function of the scroll
 * position alone, so it now runs on scroll, and only writes when the
 * quantised colour actually moves.
 */
import { TAILWIND_WAYS, WAY_COUNT, hexToRgb } from './widgetPalette';

export type Rgb = [number, number, number];

/** One family per scene, hero through the footer (and an exit row). */
export const HUE = [12, 3, 9, 7, 2, 6, 8, 1, 14, 18, 13, 16, 5, 8, 7, 7];
/** Each scene's second tone, for the wash. */
export const HUE_B = [3, 7, 6, 0, 1, 9, 2, 8, 12, 15, 12, 2, 7, 1, 14, 14];

/** The hero's own wash: ember, indigo, plasma — the first-paint fallbacks. */
export const HERO_WASH: readonly [Rgb, Rgb, Rgb] = [
  hexToRgb('#ff4d14'),
  hexToRgb('#4f46e5'),
  hexToRgb('#d946ef'),
];

export const HUE_STEP_NAMES = ['300', '400', '500', '600', '700'] as const;
const HUE_STEPS: Rgb[][] = TAILWIND_WAYS.map((w) =>
  [w.c300, w.c400, w.c500, w.c600, w.c700].map((c) => hexToRgb(c)),
);

/**
 * Steps a handover is cut into. Every write of --w-hue-* restyles the whole
 * document, so the crossing is a few dozen discrete steps rather than one per
 * frame; at this count each step is a couple of percent of a colour shift.
 */
export const TONE_STEPS = 32;

/**
 * Which scene owns `mid` (a viewport y, in document space), and how far
 * through it the reader is. Past the last scene, the last one at 1.
 */
export function sceneAt(tops: ArrayLike<number>, bottoms: ArrayLike<number>, mid: number) {
  let index = 0;
  let local = 0;
  for (let i = 0; i < tops.length; i++) {
    if (tops[i] <= mid && bottoms[i] >= mid) {
      const h = Math.max(1, bottoms[i] - tops[i]);
      return { index: i, local: Math.min(1, Math.max(0, (mid - tops[i]) / h)) };
    }
    if (tops[i] > mid) break;
    index = i;
    local = 1;
  }
  return { index, local };
}

/** 0 while a section is read, easing to 1 across its last half-viewport. */
export function handover(sceneBottom: number, mid: number, vh: number) {
  const k = Math.min(1, Math.max(0, 1 - (sceneBottom - mid) / (vh * 0.5)));
  const e = k * k * (3 - 2 * k);
  return Math.round(e * TONE_STEPS) / TONE_STEPS;
}

const at = <T>(list: readonly T[], i: number) => list[Math.min(Math.max(i, 0), list.length - 1)];

/** A family index wrapped onto the palette. */
export function wrapWay(way: number) {
  return ((way % WAY_COUNT) + WAY_COUNT) % WAY_COUNT;
}

/** The scene's family and its pair, or the features tab's when it owns the room. */
export function familyOf(scene: number, featuresWay: number | null) {
  if (featuresWay !== null) return { fam: featuresWay, pair: featuresWay };
  return { fam: at(HUE, scene), pair: at(HUE_B, scene) };
}

const css = (c: Rgb) =>
  `rgb(${Math.round(c[0] * 255)} ${Math.round(c[1] * 255)} ${Math.round(c[2] * 255)})`;
const mix = (a: Rgb, b: Rgb, k: number): Rgb => [
  a[0] + (b[0] - a[0]) * k,
  a[1] + (b[1] - a[1]) * k,
  a[2] + (b[2] - a[2]) * k,
];

/** The five shade steps, 300 … 700, for a crossing from `famA` to `famB`. */
export function hueSteps(famA: number, famB: number, k: number): string[] {
  const A = HUE_STEPS[famA] ?? HUE_STEPS[0];
  const B = HUE_STEPS[famB] ?? HUE_STEPS[0];
  return A.map((c, s) => css(mix(c, B[s], k)));
}

/** A section's wash: its 500, its pair's 600, its 300. */
function washOf(fam: number, pair: number): readonly [Rgb, Rgb, Rgb] {
  const S = HUE_STEPS[fam] ?? HUE_STEPS[0];
  const P = HUE_STEPS[pair] ?? S;
  return [S[2], P[3], S[0]];
}

/** The wash's three stops for a crossing; the hero keeps its own cloth. */
export function washStops(
  sceneA: number,
  a: { fam: number; pair: number },
  b: { fam: number; pair: number },
  k: number,
): string[] {
  const from = sceneA === 0 ? HERO_WASH : washOf(a.fam, a.pair);
  const to = washOf(b.fam, b.pair);
  return from.map((c, s) => css(mix(c, to[s], k)));
}
