import { expect, test, type Page } from '@playwright/test';
import { THEME_COLORS, THEME_FAVICONS, THEME_STORAGE_KEY } from '../../src/lib/theme';

/**
 * Theme switching. The resolution rules are unit-tested in
 * `tests/unit/lib/theme.test.ts`; here the browser proves the wiring — the
 * pre-paint script, persistence, and the chrome that repaints with it.
 */
const isDark = (page: Page) =>
  page.evaluate(() => document.documentElement.classList.contains('dark'));

const stored = (page: Page, key: string) =>
  page.evaluate((k) => localStorage.getItem(k), key);

const themeColor = (page: Page) =>
  page.getAttribute('meta[name="theme-color"]:not([media])', 'content');

const faviconHref = (page: Page) =>
  page.evaluate(() => document.getElementById('site-favicon')?.getAttribute('href') ?? null);

test.describe('theme toggle', () => {
  test('flips the theme and says where it will take you', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('#theme-toggle').first();
    const before = await isDark(page);

    await toggle.click();
    await expect.poll(() => isDark(page)).toBe(!before);
    await expect(toggle).toHaveAttribute('aria-pressed', String(!before));

    await toggle.click();
    await expect.poll(() => isDark(page)).toBe(before);
  });

  test('repaints the browser chrome and the favicon to match', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('#theme-toggle').first();

    await toggle.click();
    const dark = await isDark(page);
    const theme = dark ? 'dark' : 'light';

    await expect.poll(() => themeColor(page)).toBe(THEME_COLORS[theme]);
    await expect.poll(() => faviconHref(page)).toBe(THEME_FAVICONS[theme]);
  });

  test('remembers the choice across a reload, with no flash of the other theme', async ({ page }) => {
    await page.goto('/');
    await page.locator('#theme-toggle').first().click();
    const chosen = await isDark(page);
    expect(await stored(page, THEME_STORAGE_KEY)).toBe(chosen ? 'dark' : 'light');

    await page.reload();
    // Read before any paint-time class churn: the blocking script must have
    // settled the theme already.
    expect(await isDark(page)).toBe(chosen);
  });

  test('carries the choice to another page', async ({ page }) => {
    await page.goto('/');
    await page.locator('#theme-toggle').first().click();
    const chosen = await isDark(page);

    await page.goto('/plans');
    expect(await isDark(page)).toBe(chosen);
  });

  test('follows the OS preference when nothing is stored', async ({ browser }) => {
    const dark = await browser.newContext({ colorScheme: 'dark' });
    const darkPage = await dark.newPage();
    await darkPage.goto('/');
    expect(await isDark(darkPage)).toBe(true);
    await dark.close();

    const light = await browser.newContext({ colorScheme: 'light' });
    const lightPage = await light.newPage();
    await lightPage.goto('/');
    expect(await isDark(lightPage)).toBe(false);
    await light.close();
  });

  test('lets a stored choice override the OS preference', async ({ browser }) => {
    const context = await browser.newContext({ colorScheme: 'dark' });
    const page = await context.newPage();

    await page.goto('/');
    await page.evaluate((k) => localStorage.setItem(k, 'light'), THEME_STORAGE_KEY);
    await page.reload();

    expect(await isDark(page)).toBe(false);
    await context.close();
  });

  test('still renders when storage is unavailable', async ({ browser }) => {
    const context = await browser.newContext();
    // Private-mode behaviour: reads and writes throw.
    await context.addInitScript(() => {
      Object.defineProperty(window, 'localStorage', {
        get() {
          throw new Error('storage disabled');
        },
      });
    });
    const page = await context.newPage();

    await page.goto('/');
    await expect(page.locator('main')).toBeVisible();
    await page.locator('#theme-toggle').first().click();
    await expect(page.locator('main')).toBeVisible();
    await context.close();
  });
});
