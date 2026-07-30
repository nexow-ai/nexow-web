/**
 * Reputation arithmetic for the points simulator on /plans.
 *
 * The simulator's promise is that the number a visitor watches climb is the
 * number the app would compute for the same activity, so the maths lives here
 * and is tested against the real weights and level bands in
 * `src/data/gamification.ts` rather than being retyped in an inline script.
 */
export interface LevelBand {
  id: string;
  /** Points needed to reach the band. */
  min: number;
}

/** Score a set of tap counts at their real point weights. */
export function totalPoints(
  counts: Iterable<readonly [string, number]>,
  weights: Record<string, number | undefined>,
): number {
  let points = 0;
  for (const [stat, n] of counts) {
    points += n * (weights[stat] ?? 0);
  }
  return points;
}

/** Index of the highest band whose floor the score has cleared. */
export function levelIndexFor<T extends LevelBand>(points: number, levels: T[]): number {
  let index = 0;
  for (let i = 0; i < levels.length; i++) {
    if (points >= levels[i].min) index = i;
  }
  return index;
}

export interface LevelProgress<T extends LevelBand> {
  level: T;
  /** The band above, or null at the top. */
  next: T | null;
  /** 0–1 through the current band; 1 once there is nothing above. */
  progress: number;
  /** Points still needed to reach `next`; 0 at the top. */
  remaining: number;
}

/** Where a score sits: its band, the next one, and how far between them. */
export function levelProgress<T extends LevelBand>(points: number, levels: T[]): LevelProgress<T> {
  const index = levelIndexFor(points, levels);
  const level = levels[index];
  const next = levels[index + 1] ?? null;

  if (!next) return { level, next: null, progress: 1, remaining: 0 };

  const span = next.min - level.min;
  const progress = span > 0 ? clamp01((points - level.min) / span) : 1;
  return { level, next, progress, remaining: Math.max(0, next.min - points) };
}

/**
 * Clamp a ratio into 0–1 for the progress bar. `levelProgress` can only produce
 * a value below 0 (a score under the first floor), but the bar is also driven
 * from callers that may not honour that contract, so both ends are guarded.
 */
export function clamp01(ratio: number): number {
  if (!Number.isFinite(ratio)) return 0;
  return Math.min(1, Math.max(0, ratio));
}

/**
 * Icon colour on top of a level medallion. Bronze and Legend are deep enough to
 * need light ink; the metals in between read better with dark.
 */
const LEVEL_INK: Record<string, string> = {
  bronze: '#fff7ec',
  legend: '#f6efff',
};

export const DEFAULT_LEVEL_INK = '#131722';

export function levelInk(levelId: string): string {
  return LEVEL_INK[levelId] ?? DEFAULT_LEVEL_INK;
}

/** Fill the `{n}` / `{level}` tokens in the "N points to Gold" line. */
export function nextLevelLabel(
  template: string,
  remaining: number,
  levelName: string,
  locale?: string,
): string {
  return template
    .replace('{n}', remaining.toLocaleString(locale))
    .replace('{level}', levelName);
}
