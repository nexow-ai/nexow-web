import { describe, expect, it } from 'vitest';
import {
  THEME_CHANGE_EVENT,
  THEME_COLORS,
  THEME_FAVICONS,
  THEME_STORAGE_KEY,
  faviconHref,
  nextTheme,
  parseStoredTheme,
  resolveInitialTheme,
  themeColor,
  toggleLabel,
  type Theme,
} from '../../../src/lib/theme';

const THEMES: Theme[] = ['light', 'dark'];

describe('theme constants', () => {
  it('namespaces the storage key and the change event to the brand', () => {
    expect(THEME_STORAGE_KEY).toBe('nexow-theme');
    expect(THEME_CHANGE_EVENT).toBe('nexow:themechange');
  });

  it('gives each theme a hex chrome colour', () => {
    for (const theme of THEMES) {
      expect(THEME_COLORS[theme], theme).toMatch(/^#[0-9a-f]{6}$/);
    }
    expect(THEME_COLORS.dark).not.toBe(THEME_COLORS.light);
  });

  it('gives each theme a favicon that contrasts with the browser chrome', () => {
    expect(THEME_FAVICONS.dark).toBe('/favicon.png');
    expect(THEME_FAVICONS.light).toBe('/favicon-black.png');
    for (const theme of THEMES) {
      expect(THEME_FAVICONS[theme], theme).toMatch(/^\/[\w-]+\.png$/);
    }
  });
});

describe('themeColor / faviconHref', () => {
  it('resolves both themes', () => {
    for (const theme of THEMES) {
      expect(themeColor(theme)).toBe(THEME_COLORS[theme]);
      expect(faviconHref(theme)).toBe(THEME_FAVICONS[theme]);
    }
  });
});

describe('nextTheme', () => {
  it('flips the theme', () => {
    expect(nextTheme('dark')).toBe('light');
    expect(nextTheme('light')).toBe('dark');
  });

  it('returns to the start after two toggles', () => {
    for (const theme of THEMES) {
      expect(nextTheme(nextTheme(theme))).toBe(theme);
    }
  });
});

describe('parseStoredTheme', () => {
  it('accepts the two real themes', () => {
    expect(parseStoredTheme('dark')).toBe('dark');
    expect(parseStoredTheme('light')).toBe('light');
  });

  it('rejects anything else, including junk left by other apps', () => {
    for (const raw of ['', 'Dark', 'system', 'auto', '{}', null, undefined]) {
      expect(parseStoredTheme(raw), String(raw)).toBeNull();
    }
  });
});

describe('resolveInitialTheme', () => {
  it('honours a stored choice over the OS preference', () => {
    expect(resolveInitialTheme({ stored: 'light', prefersDark: true })).toBe('light');
    expect(resolveInitialTheme({ stored: 'dark', prefersDark: false })).toBe('dark');
  });

  it('falls back to the OS preference when nothing is stored', () => {
    expect(resolveInitialTheme({ stored: null, prefersDark: true })).toBe('dark');
    expect(resolveInitialTheme({ stored: null, prefersDark: false })).toBe('light');
  });

  it('falls back to the OS preference when the stored value is junk', () => {
    expect(resolveInitialTheme({ stored: 'system', prefersDark: true })).toBe('dark');
  });

  it('defaults to light when there is no signal at all', () => {
    // Blocked localStorage and no matchMedia support.
    expect(resolveInitialTheme({})).toBe('light');
  });

  it('lets a locked page override both', () => {
    expect(resolveInitialTheme({ locked: true, lockedTheme: 'dark', stored: 'light', prefersDark: false })).toBe('dark');
    expect(resolveInitialTheme({ locked: true, lockedTheme: 'light', stored: 'dark', prefersDark: true })).toBe('light');
  });

  it('treats a locked page with no class as light', () => {
    expect(resolveInitialTheme({ locked: true, stored: 'dark', prefersDark: true })).toBe('light');
  });
});

describe('toggleLabel', () => {
  const labels = { toDark: 'Switch to dark mode', toLight: 'Switch to light mode' };

  it('offers the opposite of the current theme', () => {
    expect(toggleLabel('dark', labels)).toBe(labels.toLight);
    expect(toggleLabel('light', labels)).toBe(labels.toDark);
  });
});
