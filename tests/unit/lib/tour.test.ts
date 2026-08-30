import { describe, expect, it } from 'vitest';
import {
  clock,
  secondsLeft,
  speedAt,
  timeTable,
  TOUR_CRUISE,
  TOUR_READ,
  TOUR_SCENE,
  TOUR_STEP,
  type TourMap,
} from '../../../src/lib/tour';

const VH = 800;

/** A pinned act: tall enough to hold its scene still while you scroll through it. */
function pinned(top: number, height = VH * 2.2): TourMap['acts'][number] {
  return { top, height };
}

/** The stacked phone layout: a short act, its scene above its copy. */
function stacked(top: number): TourMap['acts'][number] {
  return {
    top,
    height: VH,
    scene: { top, height: VH * 0.7 },
    copy: { top: top + VH * 0.75, height: VH * 0.25 },
  };
}

function map(partial: Partial<TourMap> = {}): TourMap {
  return { acts: [], copies: [], vh: VH, ...partial };
}

describe('speedAt', () => {
  it('cruises where there is no act on screen', () => {
    expect(speedAt(0, map({ acts: [pinned(VH * 4)] }))).toBe(TOUR_CRUISE);
  });

  it('runs a pinned act at scene pace while its beats are still lighting', () => {
    const acts = [pinned(0)];
    expect(speedAt(0, map({ acts }))).toBe(TOUR_SCENE);
    expect(speedAt(VH * 0.5, map({ acts }))).toBe(TOUR_SCENE);
  });

  it('holds on the copy at the end of a pinned act', () => {
    const acts = [pinned(0)];
    // Travel is 1.2 viewports; the hold is the last few seconds of it.
    expect(speedAt(VH * 1.2, map({ acts }))).toBe(TOUR_READ);
  });

  it('only lingers once, however tall the act is', () => {
    const acts = [pinned(0, VH * 20)];
    const travel = VH * 20 - VH;
    expect(speedAt(travel * 0.5, map({ acts }))).toBe(TOUR_SCENE);
    expect(speedAt(travel - 1, map({ acts }))).toBe(TOUR_READ);
  });

  it('paces a stacked act off whichever half is in the reading band', () => {
    const acts = [stacked(0)];
    expect(speedAt(0, map({ acts }))).toBe(TOUR_SCENE);
    expect(speedAt(VH * 0.5, map({ acts }))).toBe(TOUR_READ);
  });

  it('slows for copy between acts', () => {
    const copies = [{ top: VH * 0.4, height: 200 }];
    expect(speedAt(0, map({ copies }))).toBe(TOUR_READ);
    expect(speedAt(VH * 3, map({ copies }))).toBe(TOUR_CRUISE);
  });

  it('ignores an act that is only passing the edge of the screen', () => {
    // A tenth of the viewport is below the cover threshold.
    expect(speedAt(0, map({ acts: [pinned(VH * 0.9)] }))).toBe(TOUR_CRUISE);
  });
});

describe('timeTable', () => {
  it('times an empty page at the cruising pace', () => {
    const table = timeTable(map(), 2600);
    expect(table[table.length - 1]).toBeCloseTo(2600 / TOUR_CRUISE, 3);
  });

  it('only ever goes forwards', () => {
    const table = timeTable(map({ acts: [pinned(VH), pinned(VH * 5)] }), VH * 9);
    for (let i = 1; i < table.length; i++) expect(table[i]).toBeGreaterThanOrEqual(table[i - 1]);
  });

  it('spends longer on a page that holds on its copy', () => {
    const held = timeTable(map({ acts: [pinned(0)] }), VH * 2);
    const plain = timeTable(map(), VH * 2);
    expect(held[held.length - 1]).toBeGreaterThan(plain[plain.length - 1]);
  });

  it('never counts past the end of the page', () => {
    const max = TOUR_STEP * 2.5;
    const table = timeTable(map(), max);
    expect(table[table.length - 1]).toBeCloseTo(max / TOUR_CRUISE, 5);
  });

  it('has nothing to time on a page that does not scroll', () => {
    const table = timeTable(map(), 0);
    expect(table[table.length - 1]).toBe(0);
  });
});

describe('secondsLeft', () => {
  const max = VH * 6;
  const table = timeTable(map({ acts: [pinned(VH)] }), max);

  it('is the whole tour at the top', () => {
    expect(secondsLeft(0, table)).toBeCloseTo(table[table.length - 1], 6);
  });

  it('is nothing at the bottom', () => {
    expect(secondsLeft(max, table)).toBe(0);
  });

  it('counts down as the page goes by', () => {
    let previous = Infinity;
    for (let y = 0; y <= max; y += 120) {
      const left = secondsLeft(y, table);
      expect(left).toBeLessThanOrEqual(previous);
      previous = left;
    }
  });

  it('stays inside the tour past either end of the page', () => {
    expect(secondsLeft(-500, table)).toBeCloseTo(table[table.length - 1], 6);
    expect(secondsLeft(max * 2, table)).toBe(0);
  });
});

describe('clock', () => {
  it('pads the seconds', () => {
    expect(clock(9)).toBe('0:09');
    expect(clock(69)).toBe('1:09');
    expect(clock(600)).toBe('10:00');
  });

  it('rounds up, so it reads 0:00 only at the end', () => {
    expect(clock(0.2)).toBe('0:01');
    expect(clock(0)).toBe('0:00');
  });

  it('never counts below zero', () => {
    expect(clock(-12)).toBe('0:00');
  });
});
