/**
 * Home FeatureMap layout + deep-link wiring.
 * Copy (title/body) comes from locale `home.features`; positions are locale-neutral.
 */
import type { Feature } from '../i18n/content';
import { SITE } from '../i18n/config';
import { communityAppUrl, panelAppUrl, type AppPanelId } from './appDeepLinks';

export type FeatureMapSurfaceId =
  | 'account'
  | 'community'
  | 'marketplace'
  | 'library'
  | 'widgets'
  | 'canvas'
  | 'bots'
  | 'agents'
  | 'copilot'
  | 'connectors'
  | 'social'
  | 'themes'
  | 'settings'
  | 'toolbar'
  | 'dock'
  | 'chats';

export interface FeatureMapSurfaceDef {
  id: FeatureMapSurfaceId;
  /** Locale-agnostic icon key used to resolve title/body from feature lists. */
  icon: string;
  /** Percent positions inside the map stage (0–100). */
  x: number;
  y: number;
  /** Visual depth tier for parallax / layering (0 = back, 3 = front). */
  depth: 0 | 1 | 2 | 3;
  /** Features page path (localized by caller). */
  morePath: '/features' | '/connectors' | '/community';
  /** Prod app target. */
  app: 'root' | 'community' | 'messages' | AppPanelId;
}

/**
 * Isometric “whole app” hotspot layout — one node per major chrome surface.
 * Coordinates are % of the stage so the SVG scene and HTML hotspots stay aligned.
 */
export const FEATURE_MAP_SURFACES: FeatureMapSurfaceDef[] = [
  // Header / account chrome (back)
  { id: 'account', icon: 'vault', x: 82, y: 14, depth: 0, morePath: '/features', app: 'account' },
  { id: 'themes', icon: 'moon', x: 70, y: 12, depth: 0, morePath: '/features', app: 'themes' },
  { id: 'settings', icon: 'sync', x: 88, y: 22, depth: 0, morePath: '/features', app: 'settings' },
  // Social / network (left-back)
  { id: 'community', icon: 'users', x: 14, y: 18, depth: 0, morePath: '/community', app: 'community' },
  { id: 'marketplace', icon: 'store', x: 26, y: 14, depth: 0, morePath: '/community', app: 'marketplace' },
  { id: 'chats', icon: 'mail', x: 18, y: 32, depth: 1, morePath: '/community', app: 'messages' },
  // Build core (center)
  { id: 'canvas', icon: 'layers', x: 50, y: 42, depth: 1, morePath: '/features', app: 'root' },
  { id: 'widgets', icon: 'sparkles', x: 40, y: 34, depth: 2, morePath: '/features', app: 'library' },
  { id: 'library', icon: 'library', x: 58, y: 30, depth: 2, morePath: '/features', app: 'library' },
  // Automate (mid-left)
  { id: 'bots', icon: 'bot', x: 32, y: 52, depth: 2, morePath: '/features', app: 'bots' },
  { id: 'agents', icon: 'cpu', x: 28, y: 64, depth: 2, morePath: '/features', app: 'agents' },
  { id: 'copilot', icon: 'chat', x: 44, y: 68, depth: 3, morePath: '/features', app: 'copilot' },
  // Data (right)
  { id: 'connectors', icon: 'plug', x: 72, y: 48, depth: 2, morePath: '/connectors', app: 'connectors' },
  { id: 'social', icon: 'globe', x: 78, y: 60, depth: 2, morePath: '/connectors', app: 'connectors' },
  // Chrome front
  { id: 'toolbar', icon: 'sliders', x: 50, y: 78, depth: 3, morePath: '/features', app: 'root' },
  { id: 'dock', icon: 'grid', x: 66, y: 82, depth: 3, morePath: '/features', app: 'root' },
];

export function featureMapAppHref(app: FeatureMapSurfaceDef['app']): string {
  switch (app) {
    case 'root':
      return SITE.appUrl;
    case 'community':
      return communityAppUrl({ tab: 'discover' });
    case 'messages':
      return communityAppUrl({ tab: 'messages' });
    default:
      return panelAppUrl(app);
  }
}

/** Flatten locale feature lists into an icon → Feature map (first wins). */
export function featureCopyByIcon(
  features: { items: Feature[]; groups?: { title: string; items: Feature[] }[] },
): Map<string, Feature> {
  const map = new Map<string, Feature>();
  const push = (list: Feature[]) => {
    for (const f of list) {
      if (!map.has(f.icon)) map.set(f.icon, f);
    }
  };
  if (features.groups?.length) {
    for (const g of features.groups) push(g.items);
  }
  push(features.items);
  return map;
}

/**
 * Resolve map node copy. Prefer the active locale; fall back to English for
 * icons that locales still combine (e.g. themes+settings) or omit (library).
 */
export function resolveFeatureMapNodes(
  locale: { items: Feature[]; groups?: { title: string; items: Feature[] }[] },
  english: { items: Feature[]; groups?: { title: string; items: Feature[] }[] },
): Array<FeatureMapSurfaceDef & { title: string; body: string }> {
  const local = featureCopyByIcon(locale);
  const en = featureCopyByIcon(english);

  // Locales that still ship combined “Themes & settings” / “Toolbar & dock”
  // under moon/grid — reuse that copy for the split nodes when needed.
  const moon = local.get('moon') ?? en.get('moon');
  const grid = local.get('grid') ?? en.get('grid');

  return FEATURE_MAP_SURFACES.map((surface) => {
    let copy = local.get(surface.icon) ?? en.get(surface.icon);
    if (!copy && surface.id === 'settings' && moon) copy = moon;
    if (!copy && surface.id === 'themes' && moon) copy = moon;
    if (!copy && surface.id === 'toolbar' && grid) copy = grid;
    if (!copy && surface.id === 'dock' && grid) copy = grid;
    if (!copy) {
      copy = { icon: surface.icon, title: surface.id, body: '' };
    }
    return { ...surface, title: copy.title, body: copy.body };
  });
}
