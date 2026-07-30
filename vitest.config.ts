/// <reference types="vitest/config" />
import { getViteConfig } from 'astro/config';

/**
 * Astro's `getViteConfig` loads astro.config.mjs and the Astro Vite plugins, so
 * tests can import `astro:content`, `.astro` components and `~/src` modules
 * exactly as the site does.
 */
export default getViteConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    environment: 'node',
    globals: false,
    // Astro's container renderer keeps module-level state; a single fork keeps
    // component tests deterministic without paying for a worker per file.
    pool: 'forks',
    coverage: {
      provider: 'v8',
      reportsDirectory: 'coverage',
      reporter: ['text', 'html', 'lcov'],
      // Vitest reports on every file matched by `include`, imported or not, so a
      // new untested module drags the score down instead of scoring 100 % unseen.
      include: ['src/**/*.{ts,js}', 'scripts/**/*.mjs'],
      exclude: [
        // Type-only declarations and generated Astro types.
        'src/**/*.d.ts',
        'src/env.d.ts',
        // Stray artifacts from an `astro dev` run inside src/i18n/locales.
        'src/i18n/locales/dist/**',
        'src/i18n/locales/node_modules/**',
        'src/i18n/locales/.astro/**',
        // Asset pipeline scripts: thin `sharp` wrappers run by hand, not shipped.
        'scripts/make-favicon.mjs',
        'scripts/make-og.mjs',
        'scripts/optimize-assets.mjs',
        // One-off translation payloads + the driver that injects them.
        'scripts/community-i18n/inject.mjs',
        'scripts/community-i18n/[a-z][a-z].mjs',
      ],
      thresholds: {
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100,
      },
    },
  },
});
