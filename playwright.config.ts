import { defineConfig, devices } from '@playwright/test';

/**
 * End-to-end tests run against the real static build served by `astro preview`,
 * so they exercise the same bundled client JS Cloudflare will serve — the layer
 * the Vitest suite cannot reach, since the container API renders server output
 * only.
 */
const PORT = 4321;
const BASE_URL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: './tests/e2e',
  // Rendering the 156-card connectors page and auditing it is not a 5s job.
  timeout: 60_000,
  expect: { timeout: 10_000 },

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : [['list']],

  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  /**
   * `channel: 'chromium'` selects the full browser rather than Playwright's
   * default headless *shell*, which has no View Transitions API — Astro's
   * ClientRouter hangs mid-navigation there and every link click appears dead.
   */
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'], channel: 'chromium' } },
    { name: 'mobile', use: { ...devices['Pixel 7'], channel: 'chromium' } },
  ],

  webServer: {
    // `preview` serves ./dist as-is. The `test:e2e` script builds first, so the
    // server starts fast and the tests run against exactly what deploys.
    command: `bunx astro preview --port ${PORT} --host`,
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
    stdout: 'ignore',
    stderr: 'pipe',
  },
});
