/**
 * Tailwind default families for live widget chrome.
 *
 * The 3D screens and the FeatureMap plate share this list so a view switch
 * always lands on a designed colourway — complementary pair, readable shades —
 * rather than a muddy random RGB. Order walks the full spectrum so a full
 * scroll shows every family, not three teals.
 */
export type WidgetWay = {
  id: string;
  c300: string;
  c400: string;
  c500: string;
  c600: string;
  c700: string;
  /** Complementary / analog family index into the same list. */
  pair: number;
};

/** Official Tailwind default 300–700, in hue order. */
export const TAILWIND_WAYS: WidgetWay[] = [
  { id: 'slate', c300: '#cbd5e1', c400: '#94a3b8', c500: '#64748b', c600: '#475569', c700: '#334155', pair: 14 },
  { id: 'gray', c300: '#d1d5db', c400: '#9ca3af', c500: '#6b7280', c600: '#4b5563', c700: '#374151', pair: 8 },
  { id: 'zinc', c300: '#d4d4d8', c400: '#a1a1aa', c500: '#71717a', c600: '#52525b', c700: '#3f3f46', pair: 16 },
  { id: 'neutral', c300: '#d4d4d4', c400: '#a3a3a3', c500: '#737373', c600: '#525252', c700: '#404040', pair: 21 },
  { id: 'stone', c300: '#d6d3d1', c400: '#a8a29e', c500: '#78716c', c600: '#57534e', c700: '#44403c', pair: 12 },
  { id: 'red', c300: '#fca5a5', c400: '#f87171', c500: '#ef4444', c600: '#dc2626', c700: '#b91c1c', pair: 13 },
  { id: 'orange', c300: '#fdba74', c400: '#fb923c', c500: '#f97316', c600: '#ea580c', c700: '#c2410c', pair: 15 },
  { id: 'amber', c300: '#fcd34d', c400: '#fbbf24', c500: '#f59e0b', c600: '#d97706', c700: '#b45309', pair: 16 },
  { id: 'yellow', c300: '#fde047', c400: '#facc15', c500: '#eab308', c600: '#ca8a04', c700: '#a16207', pair: 18 },
  { id: 'lime', c300: '#bef264', c400: '#a3e635', c500: '#84cc16', c600: '#65a30d', c700: '#4d7c0f', pair: 19 },
  { id: 'green', c300: '#86efac', c400: '#4ade80', c500: '#22c55e', c600: '#16a34a', c700: '#15803d', pair: 20 },
  { id: 'emerald', c300: '#6ee7b7', c400: '#34d399', c500: '#10b981', c600: '#059669', c700: '#047857', pair: 21 },
  { id: 'teal', c300: '#5eead4', c400: '#2dd4bf', c500: '#14b8a6', c600: '#0d9488', c700: '#0f766e', pair: 6 },
  { id: 'cyan', c300: '#67e8f9', c400: '#22d3ee', c500: '#06b6d4', c600: '#0891b2', c700: '#0e7490', pair: 7 },
  { id: 'sky', c300: '#7dd3fc', c400: '#38bdf8', c500: '#0ea5e9', c600: '#0284c7', c700: '#0369a1', pair: 21 },
  { id: 'blue', c300: '#93c5fd', c400: '#60a5fa', c500: '#3b82f6', c600: '#2563eb', c700: '#1d4ed8', pair: 7 },
  { id: 'indigo', c300: '#a5b4fc', c400: '#818cf8', c500: '#6366f1', c600: '#4f46e5', c700: '#4338ca', pair: 8 },
  { id: 'violet', c300: '#c4b5fd', c400: '#a78bfa', c500: '#8b5cf6', c600: '#7c3aed', c700: '#6d28d9', pair: 9 },
  { id: 'purple', c300: '#d8b4fe', c400: '#c084fc', c500: '#a855f7', c600: '#9333ea', c700: '#7e22ce', pair: 8 },
  { id: 'fuchsia', c300: '#f0abfc', c400: '#e879f9', c500: '#d946ef', c600: '#c026d3', c700: '#a21caf', pair: 9 },
  { id: 'pink', c300: '#f9a8d4', c400: '#f472b6', c500: '#ec4899', c600: '#db2777', c700: '#be185d', pair: 12 },
  { id: 'rose', c300: '#fda4af', c400: '#fb7185', c500: '#f43f5e', c600: '#e11d48', c700: '#be123c', pair: 14 },
];

export const WAY_COUNT = TAILWIND_WAYS.length;

export function wayAt(index: number): WidgetWay {
  const n = TAILWIND_WAYS.length;
  return TAILWIND_WAYS[((index % n) + n) % n];
}

export function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

/** 400s — the shade the 3D chrome uses on a dark stage. */
export const WAY_RGB400: [number, number, number][] = TAILWIND_WAYS.map((w) => hexToRgb(w.c400));
