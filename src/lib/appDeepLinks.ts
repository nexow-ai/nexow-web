/**
 * Deep links into the production app (https://x.nexow.ai).
 *
 * Convention (from nexow PANEL_ACTIONS + CommunityPanel URL sync + auth plugin):
 *   /?signup                              → open auth / onboarding (AuthWall when signed out)
 *   /?panel=<id>[&tab=<tab>][&view=<…>][&post=<id>]
 *
 * Panel ids match the in-app chrome: account, community, marketplace, copilot,
 * library, bots, agents, connectors, themes, settings.
 *
 * Community tabs: discover | you | dao (plus legacy: following, contacts, people,
 * messages, inbox, marketplace — routed by CommunityPanel).
 */
import { SITE } from '../i18n/config';

/** Panel ids from nexow `PANEL_ACTIONS`. */
export type AppPanelId =
  | 'account'
  | 'community'
  | 'marketplace'
  | 'copilot'
  | 'library'
  | 'bots'
  | 'agents'
  | 'connectors'
  | 'themes'
  | 'settings';

export type CommunityTab =
  | 'discover'
  | 'you'
  | 'dao'
  | 'following'
  | 'contacts'
  | 'people'
  | 'messages'
  | 'inbox'
  | 'marketplace';

export type CommunityView = 'explore' | 'all' | 'image' | 'video' | 'widget';

/** Build an app URL with optional query params. */
export function appUrl(query?: Record<string, string | undefined | boolean>): string {
  if (!query) return SITE.appUrl;
  const flags: string[] = [];
  const params = new URLSearchParams();
  for (const [k, v] of Object.entries(query)) {
    if (v === false || v === undefined) continue;
    // Boolean / empty flags → bare `?signup` (not `?signup=`).
    if (v === true || v === '') flags.push(k);
    else params.set(k, v);
  }
  const valued = params.toString();
  const qs = [...flags, valued].filter(Boolean).join('&');
  return qs ? `${SITE.appUrl}/?${qs}` : SITE.appUrl;
}

/** Signup / onboarding: `/?signup` (AuthWall when signed out). */
export function signupAppUrl(extra?: Record<string, string | undefined>): string {
  return appUrl({ signup: true, ...extra });
}

/** Open a side panel: `/?panel=<id>`. */
export function panelAppUrl(panel: AppPanelId, extra?: Record<string, string | undefined>): string {
  return appUrl({ panel, ...extra });
}

/** Community panel deep link with optional tab / view / post. */
export function communityAppUrl(opts?: {
  tab?: CommunityTab;
  view?: CommunityView;
  post?: string;
  signup?: boolean;
}): string {
  return appUrl({
    signup: opts?.signup || undefined,
    panel: 'community',
    tab: opts?.tab ?? 'discover',
    view: opts?.view,
    post: opts?.post,
  });
}

/** Claim-handle surface: Community → You (profile / username). */
export function claimHandleAppUrl(): string {
  return communityAppUrl({ tab: 'you', signup: true });
}

/** PWA / share-target entry. */
export function shareAppUrl(): string {
  return `${SITE.appUrl}/share`;
}

/**
 * Map Community hero chips by stable index (locale-agnostic copy order).
 * 0 Live feed · 1 Boards & dashboards · 2 USDC / marketplace · 3 DAO
 */
export function communityHeroChipHref(index: number): string {
  switch (index) {
    case 0:
      return communityAppUrl({ tab: 'discover' });
    case 1:
      return communityAppUrl({ tab: 'you' });
    case 2:
      return panelAppUrl('marketplace');
    case 3:
      return communityAppUrl({ tab: 'dao' });
    default:
      return SITE.appUrl;
  }
}

/** Map Community social feature rows by stable icon id. */
export function communitySocialItemHref(icon: string): string {
  switch (icon) {
    case 'sparkles':
      return communityAppUrl({ tab: 'discover', view: 'widget' });
    case 'chat':
      return communityAppUrl({ tab: 'discover' });
    case 'mail':
      return communityAppUrl({ tab: 'messages' });
    case 'users':
      return claimHandleAppUrl();
    default:
      return communityAppUrl({ tab: 'discover' });
  }
}

/** Map Community research feature rows by stable icon id. */
export function communityResearchItemHref(icon: string): string {
  switch (icon) {
    case 'library':
      return communityAppUrl({ tab: 'you' });
    case 'link':
      return shareAppUrl();
    case 'layers':
    case 'bolt':
      return SITE.appUrl;
    default:
      return SITE.appUrl;
  }
}

/** Map Community grow / reputation rows by stable icon id. */
export function communityGrowItemHref(icon: string): string {
  switch (icon) {
    case 'trophy':
      return panelAppUrl('account');
    case 'signal':
      return communityAppUrl({ tab: 'discover' });
    case 'award':
      return communityAppUrl({ tab: 'contacts' });
    case 'globe':
      return signupAppUrl();
    default:
      return SITE.appUrl;
  }
}

/**
 * Map a feature item (by stable icon id — locale-agnostic) to an app deep link.
 */
export function featureItemAppHref(icon: string): string {
  switch (icon) {
    case 'sparkles':
    case 'wand':
    case 'library':
    case 'history':
      return panelAppUrl('library');
    case 'plug':
    case 'globe':
    case 'signal':
    case 'database':
      return panelAppUrl('connectors');
    case 'bot':
      return panelAppUrl('bots');
    case 'cpu':
      return panelAppUrl('agents');
    case 'chat':
      return panelAppUrl('copilot');
    case 'users':
      return communityAppUrl({ tab: 'discover' });
    case 'mail':
      return communityAppUrl({ tab: 'messages' });
    case 'store':
      return panelAppUrl('marketplace');
    case 'vault':
    case 'trophy':
    case 'award':
      return panelAppUrl('account');
    case 'moon':
      return panelAppUrl('themes');
    case 'sliders':
    case 'sync':
    case 'lock':
      return panelAppUrl('settings');
    case 'shield':
      return panelAppUrl('settings');
    // Canvas / toolbar / dock / links — main workspace chrome (no panel)
    case 'layers':
    case 'link':
    case 'grid':
    case 'bolt':
    default:
      return SITE.appUrl;
  }
}

/**
 * Map a Features page pillar (stable group index) to an app deep link.
 * Index matches `features.groups` in locale files.
 */
export function featureGroupAppHref(groupIndex: number): string {
  switch (groupIndex) {
    case 0: // Widgets
      return panelAppUrl('library');
    case 1: // Workspace (canvas / toolbar / dock)
      return SITE.appUrl;
    case 2: // Connectors
      return panelAppUrl('connectors');
    case 3: // Automate
      return panelAppUrl('bots');
    case 4: // Network
      return communityAppUrl({ tab: 'discover' });
    case 5: // Account & appearance
      return panelAppUrl('account');
    default:
      return SITE.appUrl;
  }
}
