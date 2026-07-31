import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';

/**
 * The accessibility pass a JSDOM run cannot do: a real engine with layout and
 * painted colour, so `color-contrast` and the other geometry rules actually
 * mean something. Both themes are audited — the palette differs, and a ratio
 * that passes on white can fail on the dark canvas.
 */
const ROUTES = [
  '/',
  '/features',
  '/connectors',
  '/plans',
  '/community',
  '/blog',
  '/about',
  '/contact',
  '/privacy',
  '/for/traders',
] as const;

const TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'];

/**
 * Audit with motion reduced. Several diagrams animate their stages through
 * opacity, and sampling mid-fade reports a contrast failure for text that is
 * deliberately invisible at that instant. Reduced motion is also how a
 * motion-sensitive visitor actually sees the page, so it is the honest state
 * to measure.
 */
test.use({ contextOptions: { reducedMotion: 'reduce' } });

/**
 * Contrast is measured across both themes in `contrast.spec.ts`; excluding it
 * here keeps this pass about structure, names and roles, and avoids reporting
 * the same violation from two suites.
 */
const analyze = (page: Page) =>
  new AxeBuilder({ page }).withTags(TAGS).disableRules(['color-contrast']).analyze();

/** Compact, readable failure output instead of axe's full node dump. */
const summarize = (violations: Awaited<ReturnType<typeof analyze>>['violations']) =>
  violations.map((v) => `${v.id} (${v.impact}): ${v.help} — ${v.nodes[0]?.html.slice(0, 140) ?? ''}`);

async function setTheme(page: Page, theme: 'light' | 'dark') {
  await page.evaluate((t) => {
    document.documentElement.classList.toggle('dark', t === 'dark');
    document.documentElement.dataset.theme = t;
  }, theme);
}

for (const theme of ['light', 'dark'] as const) {
  test.describe(`${theme} theme`, () => {
    for (const route of ROUTES) {
      test(`${route} has no WCAG A/AA violations`, async ({ page }) => {
        test.slow();
        await page.goto(route);
        await setTheme(page, theme);
        // Let entrance animations settle so nothing is mid-fade when sampled.
        await page.waitForTimeout(500);

        const results = await analyze(page);
        expect(summarize(results.violations), `${route} (${theme})`).toEqual([]);
      });
    }
  });
}

test.describe('interactive states', () => {
  test('the connector modal is accessible while open', async ({ page }) => {
    test.slow();
    await page.goto('/connectors');
    await page.locator('.connector-card:not(.hidden)').first().click();
    await expect(page.locator('#connector-modal')).toBeVisible();

    const results = await analyze(page);
    expect(summarize(results.violations), 'open connector modal').toEqual([]);
  });

  test('the mobile menu is accessible while open', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await page.locator('#menu-toggle').click();
    await expect(page.locator('#mobile-menu')).toBeVisible();

    const results = await analyze(page);
    expect(summarize(results.violations), 'open mobile menu').toEqual([]);
  });

  test('focus is always visible for keyboard users', async ({ page }) => {
    await page.goto('/');

    for (let i = 0; i < 8; i++) {
      await page.keyboard.press('Tab');
      const outlined = await page.evaluate(() => {
        const el = document.activeElement;
        if (!el || el === document.body) return true;
        const style = getComputedStyle(el);
        return (
          style.outlineStyle !== 'none' ||
          style.boxShadow !== 'none' ||
          Number.parseFloat(style.outlineWidth) > 0
        );
      });
      expect(outlined, `focused element ${i} has no visible focus ring`).toBe(true);
    }
  });
});
