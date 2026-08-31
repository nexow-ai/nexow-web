import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  clock,
  cycleTourRate,
  dismissPaceHint,
  dismissTrackHint,
  crossesHold,
  holdSecondsAhead,
  measureSectionHolds,
  parkScrollY,
  nextTourRate,
  paceHintDismissed,
  paceMark,
  secondsLeft,
  setTourRate,
  TOUR_END_HOLD,
  TOUR_HOLD_INSET,
  TOUR_MIN_TRAVEL,
  TOUR_RATE_DEFAULT,
  TOUR_RATE_INTRO,
  TOUR_RATES,
  TOUR_SECTION_HOLDS,
  TOUR_SPEED,
  tourRate,
  trackHintDismissed,
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

describe('measureSectionHolds', () => {
  it('drops ids the page does not have', () => {
    expect(measureSectionHolds(new Map())).toEqual([]);
  });

  it('parks each hold so the title sits under the header, not mid-screen', () => {
    const tops = new Map([
      ['plans', 4000],
      ['rewards', 5200],
      ['faq', 6400],
    ]);
    const marks = measureSectionHolds(tops);
    expect(marks.map((m) => m.id)).toEqual(['plans', 'rewards', 'faq']);
    expect(marks[0].y).toBe(4000 - TOUR_HOLD_INSET);
    expect(marks[1].y).toBe(5200 - TOUR_HOLD_INSET);
    expect(marks[2].y).toBe(6400 - TOUR_HOLD_INSET);
    expect(marks[0].seconds).toBe(TOUR_SECTION_HOLDS[0].seconds);
    expect(marks[1].seconds).toBe(2.5);
    expect(marks[2].seconds).toBe(2.5);
    // 28% of an 800px screen was 224px — that centred the heading and
    // clipped the section. The inset is a hairline, not a reading band.
    expect(TOUR_HOLD_INSET).toBe(16);
    expect(TOUR_HOLD_INSET).toBeLessThan(48);
  });

  it('takes the caller inset', () => {
    const marks = measureSectionHolds(new Map([['plans', 4000]]), 64);
    expect(marks[0].y).toBe(3936);
  });

  it('never starts a hold above the top of the page', () => {
    const marks = measureSectionHolds(new Map([['plans', 8]]));
    expect(marks[0].y).toBe(0);
  });

  it('ignores a non-finite inset and clamps a negative one', () => {
    const tops = new Map([['plans', 4000]]);
    expect(measureSectionHolds(tops, Number.NaN)[0].y).toBe(4000 - TOUR_HOLD_INSET);
    expect(measureSectionHolds(tops, -20)[0].y).toBe(4000);
  });
});

describe('parkScrollY', () => {
  it('scrolls so the title lands on the inset', () => {
    expect(parkScrollY(200, 1000)).toBe(1000 + 200 - TOUR_HOLD_INSET);
  });

  it('never parks above the top of the page', () => {
    expect(parkScrollY(8, 0)).toBe(0);
  });

  it('ignores a non-finite inset and clamps a negative one', () => {
    expect(parkScrollY(200, 1000, Number.NaN)).toBe(1000 + 200 - TOUR_HOLD_INSET);
    expect(parkScrollY(200, 1000, -8)).toBe(1200);
  });
});

describe('crossesHold', () => {
  it('is true when this frame would carry the title onto the inset', () => {
    expect(crossesHold(40, 30)).toBe(true);
    expect(crossesHold(16.5, 1)).toBe(true);
  });

  it('is false while the title is still below the inset', () => {
    expect(crossesHold(400, 6)).toBe(false);
  });

  it('is false once the title has already passed the inset', () => {
    expect(crossesHold(16, 6)).toBe(false);
    expect(crossesHold(0, 6)).toBe(false);
  });

  it('ignores a non-finite inset and clamps a negative one', () => {
    expect(crossesHold(40, 30, Number.NaN)).toBe(true);
    expect(crossesHold(8, 20, -4)).toBe(true);
  });
});

describe('holdSecondsAhead', () => {
  const marks = [
    { id: 'plans', y: 1000, seconds: 2.5 },
    { id: 'rewards', y: 2000, seconds: 2.5 },
    { id: 'faq', y: 3000, seconds: 2.5 },
  ];

  it('counts every hold and the footer linger from the top at x1', () => {
    expect(holdSecondsAhead(0, marks, new Set())).toBeCloseTo(2.5 * 3 + TOUR_END_HOLD, 6);
  });

  it('shrinks with the transport rate', () => {
    expect(holdSecondsAhead(0, marks, new Set(), 0, 2)).toBeCloseTo((2.5 * 3 + TOUR_END_HOLD) / 2, 6);
  });

  it('drops holds already taken or already passed', () => {
    expect(holdSecondsAhead(1500, marks, new Set(['plans']), 0, 1, TOUR_END_HOLD)).toBeCloseTo(
      2.5 + 2.5 + TOUR_END_HOLD,
      6,
    );
    expect(holdSecondsAhead(2500, marks, new Set(), 0, 1, 0)).toBeCloseTo(2.5, 6);
  });

  it('adds an active freeze on top of what is still ahead', () => {
    expect(holdSecondsAhead(1000, marks, new Set(['plans']), 1.2, 1, TOUR_END_HOLD)).toBeCloseTo(
      1.2 + 2.5 + 2.5 + TOUR_END_HOLD,
      6,
    );
  });

  it('can clear the footer linger once it has finished', () => {
    expect(holdSecondsAhead(9000, marks, new Set(['plans', 'rewards', 'faq']), 0, 1, 0)).toBe(0);
  });

  it('treats a non-positive rate as x1 and ignores negative leftovers', () => {
    expect(holdSecondsAhead(0, marks, new Set(), -2, 0, -3)).toBeCloseTo(2.5 * 3, 6);
    expect(holdSecondsAhead(0, marks, new Set(), 0, -1, TOUR_END_HOLD)).toBeCloseTo(
      2.5 * 3 + TOUR_END_HOLD,
      6,
    );
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
    expect(clock(70)).toBe('1:10');
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

describe('track hint', () => {
  const store = new Map<string, string>();

  beforeEach(() => {
    store.clear();
    vi.stubGlobal('localStorage', {
      getItem: (key: string) => store.get(key) ?? null,
      setItem: (key: string, value: string) => {
        store.set(key, value);
      },
      removeItem: (key: string) => {
        store.delete(key);
      },
    });
  });

  it('starts visible until the visitor uses the track button', () => {
    expect(trackHintDismissed()).toBe(false);
    dismissTrackHint();
    expect(trackHintDismissed()).toBe(true);
  });
});

describe('pace hint', () => {
  const store = new Map<string, string>();

  beforeEach(() => {
    store.clear();
    vi.stubGlobal('localStorage', {
      getItem: (key: string) => store.get(key) ?? null,
      setItem: (key: string, value: string) => {
        store.set(key, value);
      },
      removeItem: (key: string) => {
        store.delete(key);
      },
    });
  });

  it('starts visible until the visitor uses the pace hint', () => {
    expect(paceHintDismissed()).toBe(false);
    dismissPaceHint();
    expect(paceHintDismissed()).toBe(true);
  });

  it('treats a blocked store as “not dismissed”', () => {
    vi.stubGlobal('localStorage', {
      getItem: () => {
        throw new Error('blocked');
      },
      setItem: () => {
        throw new Error('blocked');
      },
    });
    expect(trackHintDismissed()).toBe(false);
    expect(paceHintDismissed()).toBe(false);
    expect(() => dismissTrackHint()).not.toThrow();
    expect(() => dismissPaceHint()).not.toThrow();
  });

  it('offers a slower intro rate before the hint is dismissed', () => {
    expect(TOUR_RATE_INTRO).toBe(0.5);
    expect(TOUR_RATE_INTRO).toBeLessThan(TOUR_RATE_DEFAULT);
  });
});
