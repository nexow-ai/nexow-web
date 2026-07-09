/** Locales the site ships. English is the default and lives at the root. */
export const languages = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  it: 'Italiano',
  de: 'Deutsch',
  pt: 'Português',
  zh: '中文',
  ja: '日本語',
  ar: 'العربية',
  he: 'עברית',
  ko: '한국어',
  ru: 'Русский',
  uk: 'Українська',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

/** External + brand constants used across the site. */
export const SITE = {
  name: 'Nexow',
  domain: 'nexow.ai',
  url: 'https://nexow.ai',
  appUrl: 'https://x.nexow.ai',
  docsUrl: 'https://x.nexow.ai',
  email: 'hello@nexow.ai',
  /** @username for Open Graph / meta tags (X). */
  x: '@nexow_ai',
} as const;

/** Footer + schema social links (icon names match `Icon.astro`). */
export const SOCIALS = [
  { label: 'X', href: 'https://x.com/nexow_ai', icon: 'x-logo' },
  { label: 'TikTok', href: 'https://tiktok.com/@nexow_ai', icon: 'tiktok' },
  { label: 'Instagram', href: 'https://instagram.com/nexow_ai', icon: 'instagram' },
  { label: 'YouTube', href: 'https://youtube.com/@nexow_ai', icon: 'youtube' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/nexow-ai', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/nexow-ai', icon: 'github' },
] as const;
