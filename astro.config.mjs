// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://nexow.ai',

  // English is served from the root (/), other locales from /{lang}/.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'it', 'de', 'pt', 'zh', 'ja', 'ar', 'he'],
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
          zh: 'zh',
          ja: 'ja',
          ar: 'ar',
          he: 'he',
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
    '/zh/pricing': '/zh/plans',
    '/ja/pricing': '/ja/plans',
    '/ar/pricing': '/ar/plans',
    '/he/pricing': '/he/plans',
  },
});
