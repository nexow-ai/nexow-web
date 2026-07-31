/**
 * Icons for the mint page-hero chip (eyebrow above the H1).
 * Keys match canonical routes without locale prefix.
 */
export const PAGE_BADGE_ICONS: Record<string, string> = {
  '/features': 'sparkles',
  '/community': 'users',
  '/community-rules': 'handshake',
  '/connectors': 'plug',
  '/plans': 'coins',
  '/blog': 'library',
  '/about': 'globe',
  '/privacy': 'shield',
  '/terms': 'scroll',
  '/cookies': 'cookie',
  '/legal': 'landmark',
  '/acceptable-use': 'check',
  '/contact': 'mail',
  '/help': 'bookOpen',
  '/security': 'shield',
  '/changelog': 'history',
  '/invite': 'gift',
  '/for/traders': 'signal',
  '/for/founders': 'bolt',
  '/for/builders': 'cpu',
};

export function getPageBadgeIcon(route: string): string | undefined {
  return PAGE_BADGE_ICONS[route];
}
