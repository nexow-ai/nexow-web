/** Page accent palettes — remapped to `--color-brand-*` / `--color-accent-*` via `data-accent` on `<html>`. */
export type PageAccent = 'brand' | 'gold' | 'sky' | 'violet' | 'amber' | 'rose';

/** Longest-prefix wins. Home & misc pages use `brand` (teal). */
const ROUTE_ACCENTS: { prefix: string; accent: PageAccent }[] = [
  { prefix: '/features', accent: 'brand' },
  { prefix: '/connectors', accent: 'brand' },
  { prefix: '/plans', accent: 'brand' },
  { prefix: '/blog', accent: 'brand' },
  { prefix: '/about', accent: 'brand' },
];

export function getPageAccent(route: string): PageAccent {
  const match = ROUTE_ACCENTS.find(
    ({ prefix }) => route === prefix || route.startsWith(`${prefix}/`),
  );
  return match?.accent ?? 'brand';
}
