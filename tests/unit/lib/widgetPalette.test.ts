import { describe, expect, it } from 'vitest';
import {
  TAILWIND_WAYS,
  WAY_COUNT,
  WAY_RGB400,
  WAY_RGB600,
  hexToRgb,
  wayAt,
} from '../../../src/lib/widgetPalette';

describe('TAILWIND_WAYS', () => {
  it('is the walk the 3D wall and the feature map share', () => {
    expect(WAY_COUNT).toBe(TAILWIND_WAYS.length);
    expect(WAY_COUNT).toBeGreaterThanOrEqual(16);
  });

  it('gives every family a unique id and a pair inside the list', () => {
    const ids = TAILWIND_WAYS.map((w) => w.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const way of TAILWIND_WAYS) {
      expect(way.pair, way.id).toBeGreaterThanOrEqual(0);
      expect(way.pair, way.id).toBeLessThan(WAY_COUNT);
      expect(wayAt(way.pair).id, way.id).not.toBe('');
    }
  });

  it('keeps every shade as a six-digit hex', () => {
    for (const way of TAILWIND_WAYS) {
      for (const hex of [way.c300, way.c400, way.c500, way.c600, way.c700]) {
        expect(hex, way.id).toMatch(/^#[0-9a-f]{6}$/);
      }
    }
  });
});

describe('wayAt', () => {
  it('returns the family at the index', () => {
    expect(wayAt(0)).toBe(TAILWIND_WAYS[0]);
    expect(wayAt(3)).toBe(TAILWIND_WAYS[3]);
  });

  it('wraps both ways around the list', () => {
    expect(wayAt(WAY_COUNT)).toBe(TAILWIND_WAYS[0]);
    expect(wayAt(WAY_COUNT + 5)).toBe(TAILWIND_WAYS[5]);
    expect(wayAt(-1)).toBe(TAILWIND_WAYS[WAY_COUNT - 1]);
    expect(wayAt(-WAY_COUNT)).toBe(TAILWIND_WAYS[0]);
  });
});

describe('hexToRgb', () => {
  it('normalises #rrggbb into 0..1 channels', () => {
    expect(hexToRgb('#000000')).toEqual([0, 0, 0]);
    expect(hexToRgb('#ffffff')).toEqual([1, 1, 1]);
    expect(hexToRgb('#14b8a6')).toEqual([0x14 / 255, 0xb8 / 255, 0xa6 / 255]);
  });
});

describe('WAY_RGB400 / WAY_RGB600', () => {
  it('precomputes the dark-stage and daylight shades', () => {
    expect(WAY_RGB400).toHaveLength(WAY_COUNT);
    expect(WAY_RGB600).toHaveLength(WAY_COUNT);
    expect(WAY_RGB400[0]).toEqual(hexToRgb(TAILWIND_WAYS[0].c400));
    expect(WAY_RGB600[0]).toEqual(hexToRgb(TAILWIND_WAYS[0].c600));
  });
});
