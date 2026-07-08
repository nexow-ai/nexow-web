import type { PageAccent } from '../i18n/accent';

/** Mirrors the CtaBand tile: ink-950 + brand/accent gradient wash + spike mark. */
const INK_950 = '#08090d';

const PALETTES: Record<PageAccent, { brand400: string; brand500: string; accent500: string }> = {
  brand: { brand400: '#2adfba', brand500: '#10c5a3', accent500: '#6366f1' },
  gold: { brand400: '#d4af37', brand500: '#c9a227', accent500: '#a8871e' },
  sky: { brand400: '#38b8ff', brand500: '#0ea5e9', accent500: '#0284c7' },
  violet: { brand400: '#a78bfa', brand500: '#8b5cf6', accent500: '#7c3aed' },
  amber: { brand400: '#fbbf24', brand500: '#f59e0b', accent500: '#d97706' },
  rose: { brand400: '#fb7185', brand500: '#f43f5e', accent500: '#e11d48' },
};

/** Rounded-square spike mark — same geometry as CtaBand + BrandMark. */
export function faviconSvg(accent: PageAccent = 'brand', size = 32): string {
  const { brand400, brand500, accent500 } = PALETTES[accent];
  const r = Math.round(size * 0.225);
  const pad = size * 0.22;
  const markSize = size - pad * 2;
  const stroke = Math.max(1, size / 90);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="tile" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${brand500}" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="${accent500}" stop-opacity="0.2"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${r}" fill="${INK_950}"/>
  <rect width="${size}" height="${size}" rx="${r}" fill="url(#tile)"/>
  <rect width="${size}" height="${size}" rx="${r}" fill="none" stroke="#ffffff" stroke-opacity="0.1" stroke-width="${stroke}"/>
  <svg x="${pad}" y="${pad}" width="${markSize}" height="${markSize}" viewBox="0 0 100 100">
    <path d="M30.5 34.5 L40 27 L71.5 66 L62 73.5 Z" fill="${brand400}" opacity="0.92"/>
    <path d="M58 2 L63 49 L44 98 L39 51 Z" fill="${brand400}"/>
  </svg>
</svg>`;
}

export function faviconDataUri(accent: PageAccent = 'brand', size = 32): string {
  return `data:image/svg+xml,${encodeURIComponent(faviconSvg(accent, size))}`;
}
