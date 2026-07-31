import { describe, expect, it } from 'vitest';
import {
  DEFAULT_LEVEL_INK,
  clamp01,
  levelIndexFor,
  levelInk,
  levelProgress,
  nextLevelLabel,
  totalPoints,
  type LevelBand,
} from '../../../src/lib/reputation';
import { LEVELS, POINT_WEIGHTS, SIM_ACTIONS } from '../../../src/data/gamification';

const BANDS: LevelBand[] = LEVELS.map((l) => ({ id: l.id, min: l.min }));

describe('totalPoints', () => {
  it('is zero for no activity', () => {
    expect(totalPoints([], POINT_WEIGHTS)).toBe(0);
    expect(totalPoints([['posts', 0]], POINT_WEIGHTS)).toBe(0);
  });

  it('scores a stat at its real weight', () => {
    expect(totalPoints([['posts', 1]], POINT_WEIGHTS)).toBe(POINT_WEIGHTS.posts);
    expect(totalPoints([['posts', 4]], POINT_WEIGHTS)).toBe(POINT_WEIGHTS.posts! * 4);
  });

  it('sums across stats', () => {
    const counts: [string, number][] = [
      ['posts', 2],
      ['bots', 1],
      ['followers', 3],
    ];
    expect(totalPoints(counts, POINT_WEIGHTS)).toBe(
      2 * POINT_WEIGHTS.posts! + POINT_WEIGHTS.bots! + 3 * POINT_WEIGHTS.followers!,
    );
  });

  it('scores an unweighted stat as zero rather than NaN', () => {
    expect(totalPoints([['accountAgeDays', 10]], POINT_WEIGHTS)).toBe(0);
    expect(totalPoints([['notAStat', 5]], POINT_WEIGHTS)).toBe(0);
  });

  it('accepts a Map, which is what the simulator holds', () => {
    const counts = new Map([
      ['posts', 3],
      ['boards', 2],
    ]);
    expect(totalPoints(counts, POINT_WEIGHTS)).toBe(
      3 * POINT_WEIGHTS.posts! + 2 * POINT_WEIGHTS.boards!,
    );
  });

  it('scores every simulator chip, so no tap is worth nothing', () => {
    for (const action of SIM_ACTIONS) {
      expect(totalPoints([[action.stat, 1]], POINT_WEIGHTS), action.stat).toBe(action.points);
      expect(action.points, action.stat).toBeGreaterThan(0);
    }
  });
});

describe('levelIndexFor', () => {
  it('starts at the first band', () => {
    expect(levelIndexFor(0, BANDS)).toBe(0);
    expect(levelIndexFor(-10, BANDS)).toBe(0);
  });

  it('promotes exactly on the threshold', () => {
    BANDS.forEach((band, i) => {
      expect(levelIndexFor(band.min, BANDS), band.id).toBe(i);
      if (i > 0) expect(levelIndexFor(band.min - 1, BANDS), band.id).toBe(i - 1);
    });
  });

  it('caps at the top band', () => {
    const top = BANDS.length - 1;
    expect(levelIndexFor(BANDS[top].min, BANDS)).toBe(top);
    expect(levelIndexFor(BANDS[top].min * 100, BANDS)).toBe(top);
  });
});

describe('levelProgress', () => {
  it('reports the band, the next one and the gap', () => {
    const { level, next, remaining } = levelProgress(0, BANDS);
    expect(level.id).toBe('bronze');
    expect(next?.id).toBe('silver');
    expect(remaining).toBe(BANDS[1].min);
  });

  it('is zero progress at the floor of a band and one at the ceiling', () => {
    expect(levelProgress(BANDS[0].min, BANDS).progress).toBe(0);
    expect(levelProgress(BANDS[1].min - 1, BANDS).progress).toBeCloseTo(1, 2);
  });

  it('is halfway at the midpoint of a band', () => {
    const mid = (BANDS[1].min + BANDS[2].min) / 2;
    expect(levelProgress(mid, BANDS).progress).toBeCloseTo(0.5, 6);
  });

  it('tops out with nothing above', () => {
    const top = BANDS.at(-1)!;
    const at = levelProgress(top.min, BANDS);
    expect(at.next).toBeNull();
    expect(at.progress).toBe(1);
    expect(at.remaining).toBe(0);

    const beyond = levelProgress(top.min * 10, BANDS);
    expect(beyond.next).toBeNull();
    expect(beyond.progress).toBe(1);
    expect(beyond.remaining).toBe(0);
  });

  it('clamps progress into 0–1', () => {
    for (const points of [-100, 0, 1, 249, 250, 999, 20_000, 999_999]) {
      const { progress } = levelProgress(points, BANDS);
      expect(progress, String(points)).toBeGreaterThanOrEqual(0);
      expect(progress, String(points)).toBeLessThanOrEqual(1);
    }
  });

  it('never reports a negative gap', () => {
    for (const points of [-5, 0, 251, 5_001]) {
      expect(levelProgress(points, BANDS).remaining, String(points)).toBeGreaterThanOrEqual(0);
    }
  });

  it('treats a band with no room above it as complete', () => {
    // Equal floors: the score lands on the last of them, so there is nothing above.
    const flat: LevelBand[] = [
      { id: 'a', min: 0 },
      { id: 'b', min: 0 },
    ];
    const at = levelProgress(0, flat);
    expect(at.next).toBeNull();
    expect(at.progress).toBe(1);
  });

  it('does not divide by a non-positive span on a misordered ladder', () => {
    // Below every floor, so the first band is assumed — and here the band above
    // it sits lower, which would otherwise make the ratio negative or infinite.
    const misordered: LevelBand[] = [
      { id: 'high', min: 100 },
      { id: 'low', min: 50 },
    ];
    const at = levelProgress(0, misordered);
    expect(at.level.id).toBe('high');
    expect(at.next?.id).toBe('low');
    expect(at.progress).toBe(1);
    expect(at.remaining).toBe(50);
  });

  it('walks the real ladder in order as points climb', () => {
    const seen = [0, 250, 1_000, 5_000, 20_000].map((p) => levelProgress(p, BANDS).level.id);
    expect(seen).toEqual(['bronze', 'silver', 'gold', 'platinum', 'legend']);
  });
});

describe('clamp01', () => {
  it('passes ratios inside the range through', () => {
    expect(clamp01(0)).toBe(0);
    expect(clamp01(0.5)).toBe(0.5);
    expect(clamp01(1)).toBe(1);
  });

  it('clamps both ends', () => {
    expect(clamp01(-0.4)).toBe(0);
    expect(clamp01(-100)).toBe(0);
    expect(clamp01(1.2)).toBe(1);
    expect(clamp01(999)).toBe(1);
  });

  it('treats a non-finite ratio as empty rather than painting a broken bar', () => {
    expect(clamp01(Number.NaN)).toBe(0);
    expect(clamp01(Number.POSITIVE_INFINITY)).toBe(0);
    expect(clamp01(Number.NEGATIVE_INFINITY)).toBe(0);
  });
});

describe('levelInk', () => {
  it('uses light ink on the two deepest medallions', () => {
    expect(levelInk('bronze')).toBe('#fff7ec');
    expect(levelInk('legend')).toBe('#f6efff');
  });

  it('uses dark ink on the light metals', () => {
    for (const id of ['silver', 'gold', 'platinum']) {
      expect(levelInk(id), id).toBe(DEFAULT_LEVEL_INK);
    }
  });

  it('falls back to dark ink for an unknown level', () => {
    expect(levelInk('nope')).toBe(DEFAULT_LEVEL_INK);
  });

  it('resolves an ink for every shipped level', () => {
    for (const level of LEVELS) {
      expect(levelInk(level.id), level.id).toMatch(/^#[0-9a-f]{6}$/);
    }
  });
});

describe('nextLevelLabel', () => {
  it('fills both tokens', () => {
    expect(nextLevelLabel('{n} pts to {level}', 250, 'Silver', 'en-US')).toBe('250 pts to Silver');
  });

  it('groups large numbers for the locale', () => {
    expect(nextLevelLabel('{n}', 20_000, 'Legend', 'en-US')).toBe('20,000');
    expect(nextLevelLabel('{n}', 20_000, 'Legend', 'de-DE')).toBe('20.000');
  });

  it('leaves a template without tokens alone', () => {
    expect(nextLevelLabel('almost there', 5, 'Gold', 'en-US')).toBe('almost there');
  });
});
