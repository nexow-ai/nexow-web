import { describe, expect, it } from 'vitest';
import { clock, secondsLeft, TOUR_MIN_TRAVEL, TOUR_SPEED, worthTouring } from '../../../src/lib/tour';

describe('secondsLeft', () => {
  const max = 4800;

  it('is the whole tour at the top', () => {
    expect(secondsLeft(0, max)).toBeCloseTo(max / TOUR_SPEED, 6);
  });

  it('is nothing at the bottom', () => {
    expect(secondsLeft(max, max)).toBe(0);
  });

  it('is distance over speed in between', () => {
    expect(secondsLeft(max / 4, max)).toBeCloseTo((max * 0.75) / TOUR_SPEED, 6);
    expect(secondsLeft(max / 4, max, 100)).toBeCloseTo(max * 0.0075, 6);
  });

  it('counts down as the page goes by', () => {
    let previous = Infinity;
    for (let y = 0; y <= max; y += 120) {
      const left = secondsLeft(y, max);
      expect(left).toBeLessThanOrEqual(previous);
      previous = left;
    }
  });

  it('stays inside the tour past either end of the page', () => {
    expect(secondsLeft(-500, max)).toBeCloseTo(max / TOUR_SPEED, 6);
    expect(secondsLeft(max * 2, max)).toBe(0);
  });

  it('has nothing to time on a page that does not scroll', () => {
    expect(secondsLeft(0, 0)).toBe(0);
    expect(secondsLeft(0, -10)).toBe(0);
  });
});

describe('worthTouring', () => {
  it('turns down a page with nothing below the fold', () => {
    expect(worthTouring(0)).toBe(false);
    expect(worthTouring(-40)).toBe(false);
  });

  it('turns down a page that scrolls for barely a second', () => {
    expect(worthTouring(TOUR_SPEED)).toBe(false);
  });

  it('takes a page long enough to be worth watching', () => {
    expect(worthTouring(TOUR_MIN_TRAVEL)).toBe(true);
    expect(worthTouring(TOUR_SPEED * 30)).toBe(true);
  });

  it('takes its bar from the caller', () => {
    expect(worthTouring(500, 400)).toBe(true);
    expect(worthTouring(500, 900)).toBe(false);
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
