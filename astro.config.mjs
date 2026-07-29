// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://nexow.ai',

  // English is served from the root (/), other locales from /{lang}/.
  // Keep in sync with `src/i18n/config.ts` → `languages`.
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en',
      'es',
      'fr',
      'it',
      'de',
      'pt',
      'nl',
      'zh',
      'ja',
      'ar',
      'he',
      'ko',
      'ru',
      'uk',
      'ms',
      'el',
      'tr',
    ],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
          fr: 'fr',
          it: 'it',
          de: 'de',
          pt: 'pt',
          nl: 'nl',
          zh: 'zh',
          ja: 'ja',
          ar: 'ar',
          he: 'he',
          ko: 'ko',
          ru: 'ru',
          uk: 'uk',
          ms: 'ms',
          el: 'el',
          tr: 'tr',
        },
      },
    }),
    mdx(),
  ],

  redirects: {
    '/pricing': '/plans',
    '/es/pricing': '/es/plans',
    '/fr/pricing': '/fr/plans',
    '/it/pricing': '/it/plans',
    '/de/pricing': '/de/plans',
    '/pt/pricing': '/pt/plans',
    '/nl/pricing': '/nl/plans',
    '/zh/pricing': '/zh/plans',
    '/ja/pricing': '/ja/plans',
    '/ar/pricing': '/ar/plans',
    '/he/pricing': '/he/plans',
    '/ko/pricing': '/ko/plans',
    '/ru/pricing': '/ru/plans',
    '/uk/pricing': '/uk/plans',
    '/ms/pricing': '/ms/plans',
    '/el/pricing': '/el/plans',
    '/tr/pricing': '/tr/plans',
  },
});
