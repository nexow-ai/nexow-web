/**
 * Home FeatureMap layout + deep-link wiring.
 * Copy (title/body) comes from locale `home.features`; groups drive the UI.
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
  /** Features page path (localized by caller). */
  morePath: '/features' | '/connectors' | '/community';
  /** Prod app target. */
  app: 'root' | 'community' | 'messages' | AppPanelId;
}

export type FeatureMapNode = FeatureMapSurfaceDef & { title: string; body: string };

export type FeatureMapGroup = {
  title: string;
  nodes: FeatureMapNode[];
};

/**
 * One node per major chrome surface — deep links + stable ids.
 * Display order comes from locale `home.features.groups`.
 */
export const FEATURE_MAP_SURFACES: FeatureMapSurfaceDef[] = [
  { id: 'account', icon: 'vault', morePath: '/features', app: 'account' },
  { id: 'themes', icon: 'moon', morePath: '/features', app: 'themes' },
  { id: 'settings', icon: 'sync', morePath: '/features', app: 'settings' },
  { id: 'community', icon: 'users', morePath: '/community', app: 'community' },
  { id: 'marketplace', icon: 'store', morePath: '/community', app: 'marketplace' },
  { id: 'chats', icon: 'mail', morePath: '/community', app: 'messages' },
  { id: 'canvas', icon: 'layers', morePath: '/features', app: 'root' },
  { id: 'widgets', icon: 'sparkles', morePath: '/features', app: 'library' },
  { id: 'library', icon: 'library', morePath: '/features', app: 'library' },
  { id: 'bots', icon: 'bot', morePath: '/features', app: 'bots' },
  { id: 'agents', icon: 'cpu', morePath: '/features', app: 'agents' },
  { id: 'copilot', icon: 'chat', morePath: '/features', app: 'copilot' },
  { id: 'connectors', icon: 'plug', morePath: '/connectors', app: 'connectors' },
  { id: 'social', icon: 'globe', morePath: '/connectors', app: 'connectors' },
  { id: 'toolbar', icon: 'sliders', morePath: '/features', app: 'root' },
  { id: 'dock', icon: 'grid', morePath: '/features', app: 'root' },
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

function resolveCopy(
  icon: string,
  surfaceId: FeatureMapSurfaceId,
  local: Map<string, Feature>,
  en: Map<string, Feature>,
): Feature {
  const moon = local.get('moon') ?? en.get('moon');
  const grid = local.get('grid') ?? en.get('grid');

  let copy = local.get(icon) ?? en.get(icon);
  if (!copy && surfaceId === 'settings' && moon) copy = moon;
  if (!copy && surfaceId === 'themes' && moon) copy = moon;
  if (!copy && surfaceId === 'toolbar' && grid) copy = grid;
  if (!copy && surfaceId === 'dock' && grid) copy = grid;
  if (!copy) {
    copy = { icon, title: surfaceId, body: '' };
  }
  return copy;
}

/**
 * Resolve map node copy. Prefer the active locale; fall back to English for
 * icons that locales still combine (e.g. themes+settings) or omit (library).
 */
export function resolveFeatureMapNodes(
  locale: { items: Feature[]; groups?: { title: string; items: Feature[] }[] },
  english: { items: Feature[]; groups?: { title: string; items: Feature[] }[] },
): FeatureMapNode[] {
  const local = featureCopyByIcon(locale);
  const en = featureCopyByIcon(english);

  return FEATURE_MAP_SURFACES.map((surface) => {
    const copy = resolveCopy(surface.icon, surface.id, local, en);
    return { ...surface, title: copy.title, body: copy.body };
  });
}

/**
 * Grouped explorer layout: use locale groups when present, otherwise a flat list.
 * Nodes are matched by icon to FEATURE_MAP_SURFACES for deep links.
 */
export function resolveFeatureMapGroups(
  locale: { items: Feature[]; groups?: { title: string; items: Feature[] }[] },
  english: { items: Feature[]; groups?: { title: string; items: Feature[] }[] },
): FeatureMapGroup[] {
  const nodes = resolveFeatureMapNodes(locale, english);
  const byIcon = new Map(nodes.map((n) => [n.icon, n]));
  const sourceGroups = locale.groups?.length ? locale.groups : english.groups;

  if (sourceGroups?.length) {
    return sourceGroups
      .map((g) => ({
        title: g.title,
        nodes: g.items
          .map((item) => byIcon.get(item.icon))
          .filter((n): n is FeatureMapNode => Boolean(n)),
      }))
      .filter((g) => g.nodes.length > 0);
  }

  return [{ title: '', nodes }];
}
