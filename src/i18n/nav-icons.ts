/** Icons for primary nav routes (shown in the header when the link is active). */
export const NAV_ICONS: Record<string, string> = {
  '/features': 'sparkles',
  '/community': 'users',
  '/connectors': 'plug',
  '/plans': 'coins',
  '/blog': 'library',
  '/about': 'globe',
};

export function getNavIcon(href: string): string | undefined {
  return NAV_ICONS[href];
}
