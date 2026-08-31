import { describe, expect, it } from 'vitest';
import { invertedAt, type ToneBand } from '../../../src/lib/chrome-tone';

const bands: ToneBand[] = [
  { top: 800, bottom: 1600 },
  { top: 3200, bottom: 4000 },
];

describe('invertedAt', () => {
  it('is false on a page-tone stretch', () => {
    expect(invertedAt(0, bands)).toBe(false);
    expect(invertedAt(799, bands)).toBe(false);
    expect(invertedAt(1600, bands)).toBe(false);
  });

  it('is true inside an inverted band, inclusive of the top', () => {
    expect(invertedAt(800, bands)).toBe(true);
    expect(invertedAt(1200, bands)).toBe(true);
    expect(invertedAt(3999, bands)).toBe(true);
  });

  it('is false on an empty page', () => {
    expect(invertedAt(400, [])).toBe(false);
  });
});
