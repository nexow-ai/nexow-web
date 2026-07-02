/** Locales the site ships. English is the default and lives at the root. */
export const languages = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

/** External + brand constants used across the site. */
export const SITE = {
  name: 'Nexow',
  domain: 'nexow.ai',
  url: 'https://nexow.ai',
  appUrl: 'https://app.nexow.ai',
  docsUrl: 'https://app.nexow.ai',
  email: 'hello@nexow.ai',
  twitter: '@nexow_ai',
  github: 'https://github.com/nexow-ai',
} as const;
