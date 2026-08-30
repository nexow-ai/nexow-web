import { beforeEach, describe, expect, it } from 'vitest';
import {
  clock,
  cycleTourRate,
  nextTourRate,
  paceMark,
  secondsLeft,
  setTourRate,
  TOUR_MIN_TRAVEL,
  TOUR_RATE_DEFAULT,
  TOUR_RATES,
  TOUR_SPEED,
  tourRate,
  worthTouring,
} from '../../../src/lib/tour';

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
  it('turns down a page with nowhere to scroll', () => {
    expect(worthTouring(0)).toBe(false);
    expect(worthTouring(-40)).toBe(false);
  });

  it('takes any page with somewhere to go, however short', () => {
    expect(worthTouring(TOUR_MIN_TRAVEL)).toBe(true);
    expect(worthTouring(TOUR_SPEED)).toBe(true);
    expect(worthTouring(TOUR_SPEED * 30)).toBe(true);
  });

  it('keeps the bar under a second of travel', () => {
    expect(TOUR_MIN_TRAVEL).toBeLessThan(TOUR_SPEED);
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

describe('tour rate', () => {
  beforeEach(() => {
    setTourRate(TOUR_RATE_DEFAULT);
  });

  it('defaults to x1', () => {
    expect(tourRate()).toBe(1);
    expect(TOUR_RATES).toEqual([0.25, 0.5, 1, 2]);
  });

  it('steps x1 → x2 → x0.25 → x0.5 → x1', () => {
    expect(nextTourRate(1)).toBe(2);
    expect(nextTourRate(2)).toBe(0.25);
    expect(nextTourRate(0.25)).toBe(0.5);
    expect(nextTourRate(0.5)).toBe(1);
  });

  it('treats an unknown rate as x1 when stepping', () => {
    expect(nextTourRate(3)).toBe(2);
  });

  it('marks the rate the way the transport shows it', () => {
    expect(paceMark(1)).toBe('x1');
    expect(paceMark(0.25)).toBe('x0.25');
    expect(paceMark(0.5)).toBe('x0.5');
    expect(paceMark(2)).toBe('x2');
  });

  it('remembers a cycle across callers', () => {
    expect(cycleTourRate()).toBe(2);
    expect(tourRate()).toBe(2);
    expect(cycleTourRate()).toBe(0.25);
  });

  it('falls back to x1 when pinned to something it does not know', () => {
    expect(setTourRate(8)).toBe(1);
    expect(tourRate()).toBe(1);
  });
});
