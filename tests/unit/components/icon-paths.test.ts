import { describe, expect, it } from 'vitest';
import { ICON_PATHS } from '../../../src/components/icon-paths';

const NAMES = Object.keys(ICON_PATHS);

/** Every SVG path command letter that may appear in a 24×24 stroke glyph. */
const PATH_COMMANDS = /^[MmLlHhVvCcSsQqTtAaZz0-9\s.,+-]+$/;

describe('ICON_PATHS', () => {
  it('ships a non-trivial set of glyphs', () => {
    expect(NAMES.length).toBeGreaterThan(50);
  });

  it('names every icon in camelCase, or kebab-case for brand marks', () => {
    for (const name of NAMES) {
      expect(name, name).toMatch(/^[a-z][a-zA-Z0-9]*(-[a-z0-9]+)*$/);
    }
  });

  it('has no duplicate names', () => {
    expect(new Set(NAMES).size).toBe(NAMES.length);
  });
});

describe.each(NAMES)('icon %s', (name) => {
  const d = ICON_PATHS[name];

  it('is a non-empty path that starts with a move command', () => {
    expect(d.trim()).not.toBe('');
    expect(d.trimStart().startsWith('M') || d.trimStart().startsWith('m')).toBe(true);
  });

  it('contains only valid SVG path syntax', () => {
    expect(d).toMatch(PATH_COMMANDS);
  });

  it('draws something beyond the opening move', () => {
    // Anything after the leading M/m must include a real drawing command,
    // otherwise the glyph renders as an invisible point.
    expect(d.slice(1), name).toMatch(/[LlHhVvCcSsQqTtAaZz]/);
  });

  it('is normalized: no leading, trailing or doubled whitespace', () => {
    expect(d, name).toBe(d.trim());
    expect(d, name).not.toMatch(/\s\s/);
  });
});
