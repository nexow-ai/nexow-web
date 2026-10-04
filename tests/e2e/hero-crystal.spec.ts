import { expect, test, type Page } from '@playwright/test';

/**
 * The hero's one object (`HeroCrystal`). What it must never become again is
 * the world field it replaced: a fixed, full-page canvas that drew every
 * frame from the header to the footer.
 */

/** Counts WebGL draw calls, so "the loop has stopped" is observable. */
const countDraws = () => {
  const w = window as unknown as { __draws: number };
  w.__draws = 0;
  const proto = WebGLRenderingContext.prototype;
  const draw = proto.drawArrays;
  proto.drawArrays = function (...args: Parameters<typeof draw>) {
    w.__draws++;
    return draw.apply(this, args);
  };
};

const draws = (page: Page) => page.evaluate(() => (window as unknown as { __draws: number }).__draws);

test.describe('hero object', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(countDraws);
  });

  test('lives in the hero, never fixed over the rest of the page', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load' });
    const field = page.locator('[data-hero-crystal]');
    await expect(field).toHaveCount(1);
    await expect(field).toHaveAttribute('data-crystal', 'a');
    expect(await field.evaluate((el) => !!el.closest('#hero'))).toBe(true);

    const fixedCanvases = await page.evaluate(
      () =>
        [...document.querySelectorAll('canvas')].filter((c) => {
          for (let el: Element | null = c; el; el = el.parentElement) {
            if (getComputedStyle(el).position === 'fixed') return true;
          }
          return false;
        }).length,
    );
    expect(fixedCanvases, 'a fixed canvas covers the page').toBe(0);
  });

  test('caps the backing store at 1.5× on desktop and 1× on a phone', async ({ page, isMobile }) => {
    await page.goto('/', { waitUntil: 'load' });
    const { w, css } = await page
      .locator('[data-hero-crystal] canvas')
      .evaluate((c: HTMLCanvasElement) => ({ w: c.width, css: c.clientWidth }));
    expect(w / css).toBeLessThanOrEqual(isMobile ? 1.01 : 1.51);
  });

  test('stops drawing once the hero has scrolled away', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load' });
    await expect.poll(() => draws(page)).toBeGreaterThan(0);
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight / 2));
    await page.waitForTimeout(600);
    const settled = await draws(page);
    await page.evaluate(() => window.scrollBy(0, 400));
    await page.waitForTimeout(800);
    expect(await draws(page), 'frames drawn outside the hero').toBe(settled);
  });

  for (const variant of ['b', 'c'] as const) {
    test(`renders variant ${variant} from ?crystal=`, async ({ page }) => {
      const errors: string[] = [];
      page.on('console', (m) => {
        if (m.type() === 'error') errors.push(m.text());
      });
      await page.goto(`/?crystal=${variant}`, { waitUntil: 'load' });
      await expect(page.locator('[data-hero-crystal]')).toHaveAttribute('data-crystal', variant);
      await expect.poll(() => draws(page)).toBeGreaterThan(0);
      expect(errors.filter((e) => e.includes('hero-crystal'))).toEqual([]);
    });
  }

  test('?crystal=none draws nothing at all', async ({ page }) => {
    await page.goto('/?crystal=none', { waitUntil: 'load' });
    await expect(page.locator('[data-hero-crystal]')).toHaveAttribute('data-crystal', 'none');
    await page.waitForTimeout(500);
    expect(await draws(page)).toBe(0);
  });

  test('an unknown value falls back to the default', async ({ page }) => {
    await page.goto('/?crystal=zzz', { waitUntil: 'load' });
    await expect(page.locator('[data-hero-crystal]')).toHaveAttribute('data-crystal', 'a');
  });
});

test.describe('hero object under reduced motion', () => {
  test.use({ contextOptions: { reducedMotion: 'reduce' } });

  test('draws one still frame and never loops', async ({ page }) => {
    await page.addInitScript(countDraws);
    await page.goto('/', { waitUntil: 'load' });
    await expect.poll(() => draws(page)).toBeGreaterThan(0);
    await page.waitForTimeout(300);
    const first = await draws(page);
    await page.waitForTimeout(1000);
    expect(await draws(page)).toBe(first);
  });
});
