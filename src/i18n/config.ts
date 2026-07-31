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

/** Footer + schema social links (icon names match `Icon.astro`). */
export const SOCIALS = [
  { label: 'X', href: 'https://x.com/nexowofficial', icon: 'x-logo' },
  { label: 'TikTok', href: 'https://tiktok.com/nexow-ai', icon: 'tiktok' },
  { label: 'Instagram', href: 'https://instagram.com/nexow-ai', icon: 'instagram' },
  { label: 'YouTube', href: 'https://youtube.com/nexow-ai', icon: 'youtube' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/nexow-ai', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/nexow-ai', icon: 'github' },
] as const;
