/** Locales the site ships. English is the default and lives at the root. */
export const languages = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  it: 'Italiano',
  pt: 'Português',
  de: 'Deutsch',
  nl: 'Nederlands',
  zh: '中文',
  ja: '日本語',
  ar: 'العربية',
  he: 'עברית',
  ko: '한국어',
  ru: 'Русский',
  uk: 'Українська',
  ms: 'Bahasa Melayu',
  el: 'Ελληνικά',
  tr: 'Türkçe',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

/** External + brand constants used across the site. */
export const SITE = {
  name: 'Nexow',
  /** Legal entity name for contracts, imprint, and copyright. */
  legalName: 'Nexow, Inc.',
  /** Registered / mailing address (Delaware, United States). */
  address: '2810 N Church St STE 89080 Wilmington, DE 19802, United States',
  domain: 'nexow.ai',
  url: 'https://nexow.ai',
  appUrl: 'https://x.nexow.ai',
  /**
   * Marketing-site help hub (localized via `localizePath`).
   * In-app docs / the product itself remain at `appUrl`.
   */
  docsUrl: '/help',
  /** Marketing newsletter signup (Nuxt API on the app host). */
  newsletterUrl: 'https://x.nexow.ai/api/newsletter',
  /** Billing / plans waitlist — same newsletter pipeline with a source tag. */
  waitlistUrl: 'https://x.nexow.ai/api/newsletter',
  /** Contact form (Nuxt API on the app host). Routes by inquiry type server-side. */
  contactUrl: 'https://x.nexow.ai/api/contact',
  email: 'hello@nexow.ai',
  /** Partnership / sales inbox. */
  partnersEmail: 'partners@nexow.ai',
  /** Support inbox. */
  supportEmail: 'support@nexow.ai',
  /** @username for Open Graph / meta tags (X). */
  x: '@nexowofficial',
  /** Chain NXW mints on — linked from the DAO / tokenomics sections. */
  solanaUrl: 'https://solana.com',
} as const;

/**
 * Prefer the env value when it is a non-empty string; otherwise keep the
 * published fallback so the site still builds without a `.env`.
 */
export function resolveSocialUrl(configured: string | undefined, fallback: string): string {
  const value = configured?.trim();
  return value ? value : fallback;
}

/**
 * Footer + hero + schema social links (icon names match `Icon.astro`).
 *
 * Read through `import.meta.env`, never `process.env`: this module rides in
 * the client bundle too (the page-slide direction reads the locale list from
 * it), and there is no `process` in the browser — one throw here and every
 * script importing `i18n/*` dies at load.
 */
export const SOCIALS = [
  {
    label: 'X',
    href: resolveSocialUrl(import.meta.env.X_URL, 'https://x.com/nexowofficial'),
    icon: 'x-logo',
  },
  {
    label: 'Discord',
    href: resolveSocialUrl(import.meta.env.DISCORD_URL, 'https://discord.gg/nexow'),
    icon: 'discord',
  },
  {
    label: 'Telegram',
    href: resolveSocialUrl(import.meta.env.TELEGRAM_URL, 'https://t.me/nexowofficial'),
    icon: 'telegram',
  },
  {
    label: 'TikTok',
    href: resolveSocialUrl(import.meta.env.TIKTOK_URL, 'https://tiktok.com/nexow-ai'),
    icon: 'tiktok',
  },
  {
    label: 'Instagram',
    href: resolveSocialUrl(import.meta.env.INSTAGRAM_URL, 'https://instagram.com/nexow-ai'),
    icon: 'instagram',
  },
  {
    label: 'LinkedIn',
    href: resolveSocialUrl(import.meta.env.LINKEDIN_URL, 'https://linkedin.com/company/nexow-ai'),
    icon: 'linkedin',
  },
  {
    label: 'YouTube',
    href: resolveSocialUrl(import.meta.env.YOUTUBE_URL, 'https://youtube.com/nexow-ai'),
    icon: 'youtube',
  },
  {
    label: 'Skool',
    href: resolveSocialUrl(import.meta.env.SKOOL_URL, 'https://www.skool.com/nexow'),
    icon: 'skool',
  },
  {
    label: 'GitHub',
    href: resolveSocialUrl(import.meta.env.GITHUB_URL, 'https://github.com/nexow-ai'),
    icon: 'github',
  },
] as const;
