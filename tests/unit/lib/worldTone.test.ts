import { describe, expect, it } from 'vitest';
import {
  HUE,
  TONE_STEPS,
  familyOf,
  handover,
  hueSteps,
  sceneAt,
  washStops,
  wrapWay,
} from '../../../src/lib/worldTone';
import { WAY_COUNT } from '../../../src/lib/widgetPalette';

describe('sceneAt', () => {
  const tops = [0, 1000, 2500];
  const bottoms = [1000, 2500, 3000];

  it('finds the scene under the middle and how far through it is', () => {
    expect(sceneAt(tops, bottoms, 500)).toEqual({ index: 0, local: 0.5 });
    expect(sceneAt(tops, bottoms, 1750)).toEqual({ index: 1, local: 0.5 });
  });

  it('holds the last scene past the end', () => {
    expect(sceneAt(tops, bottoms, 9000)).toEqual({ index: 2, local: 1 });
  });

  it('falls back to the first scene with nothing measured', () => {
    expect(sceneAt([], [], 100)).toEqual({ index: 0, local: 0 });
  });
});

describe('handover', () => {
  it('holds while a section is read and crosses over its last half-viewport', () => {
    expect(handover(2000, 1000, 800)).toBe(0);
    expect(handover(2000, 2000, 800)).toBe(1);
    expect(handover(2000, 1800, 800)).toBeCloseTo(0.5, 1);
  });

  it('is quantised, so a crossing is a bounded number of writes', () => {
    const seen = new Set<number>();
    for (let mid = 1500; mid <= 2000; mid += 1) seen.add(handover(2000, mid, 1000));
    expect(seen.size).toBeLessThanOrEqual(TONE_STEPS + 1);
  });
});

describe('colours', () => {
  it('maps scenes to their family, and the features tab overrides it', () => {
    expect(familyOf(0, null).fam).toBe(HUE[0]);
    expect(familyOf(99, null).fam).toBe(HUE[HUE.length - 1]);
    expect(familyOf(8, 4)).toEqual({ fam: 4, pair: 4 });
  });

  it('wraps a tab index onto the palette', () => {
    expect(wrapWay(-1)).toBe(WAY_COUNT - 1);
    expect(wrapWay(WAY_COUNT)).toBe(0);
  });

  it('writes five shade steps and three wash stops as css colours', () => {
    const steps = hueSteps(0, 1, 0.5);
    expect(steps).toHaveLength(5);
    for (const c of steps) expect(c).toMatch(/^rgb\(\d+ \d+ \d+\)$/);
    expect(hueSteps(3, 7, 0)).toEqual(hueSteps(3, 3, 1));
    expect(washStops(1, familyOf(1, null), familyOf(2, null), 0.25)).toHaveLength(3);
  });

  it('keeps the hero on its own ember cloth until the handover', () => {
    expect(washStops(0, familyOf(0, null), familyOf(1, null), 0)[0]).toBe('rgb(255 77 20)');
  });
});
