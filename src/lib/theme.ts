/**
 * Light/dark theme resolution.
 *
 * Two places decide the theme: the blocking script in BaseHead (before first
 * paint, to avoid a flash) and ThemeToggle (on click). They must agree on the
 * storage key, the precedence rules and the paint values, so all of it lives
 * here and both read from it.
 */
export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'nexow-theme';

/** `<meta name="theme-color">` per theme — browser chrome tint. */
export const THEME_COLORS: Record<Theme, string> = {
  dark: '#08090d',
  light: '#06a086',
};

/** The favicon that reads against the browser's own chrome. */
export const THEME_FAVICONS: Record<Theme, string> = {
  dark: '/favicon.png',
  light: '/favicon-black.png',
};

/** Event the toggle dispatches so other islands can repaint. */
export const THEME_CHANGE_EVENT = 'nexow:themechange';

export function themeColor(theme: Theme): string {
  return THEME_COLORS[theme];
}

export function faviconHref(theme: Theme): string {
  return THEME_FAVICONS[theme];
}

/** The other theme — what a toggle switches to. */
export function nextTheme(current: Theme): Theme {
  return current === 'dark' ? 'light' : 'dark';
}

/** A stored value is only honoured when it names a real theme. */
export function parseStoredTheme(raw: string | null | undefined): Theme | null {
  return raw === 'dark' || raw === 'light' ? raw : null;
}

export interface ThemeSignals {
  /** A page that pins its own theme (`data-theme-locked`) wins outright. */
  locked?: boolean;
  /** The class already on `<html>` — what a locked page has chosen. */
  lockedTheme?: Theme;
  /** `localStorage[THEME_STORAGE_KEY]`, or null when unset or unreadable. */
  stored?: string | null;
  /** `matchMedia('(prefers-color-scheme: dark)').matches`. */
  prefersDark?: boolean;
}

/**
 * Precedence: a locked page, then the visitor's stored choice, then the OS.
 * Mirrors the pre-paint script in BaseHead exactly.
 */
export function resolveInitialTheme(signals: ThemeSignals): Theme {
  if (signals.locked) return signals.lockedTheme ?? 'light';
  return parseStoredTheme(signals.stored) ?? (signals.prefersDark ? 'dark' : 'light');
}

/** Accessible label for the toggle, given where it would take you. */
export function toggleLabel(current: Theme, labels: { toDark: string; toLight: string }): string {
  return current === 'dark' ? labels.toLight : labels.toDark;
}
