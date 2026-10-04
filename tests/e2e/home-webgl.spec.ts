import { expect, test } from '@playwright/test';

/**
 * The home page has no WebGL. The fixed, full-page world field and the hero
 * object that briefly replaced it are both gone; the hero stands on the
 * world's wash alone. This keeps either from coming back unnoticed.
 *
 * (TextAppear's short-lived 2D canvases, which draw the headings' dots as
 * they form, are not WebGL and are not what this guards.)
 */
test('creates no WebGL context and no canvas in the hero or over the page', async ({ page }) => {
  await page.addInitScript(() => {
    const w = window as unknown as { __webgl: number };
    w.__webgl = 0;
    const get = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (this: HTMLCanvasElement, ...args: unknown[]) {
      if (typeof args[0] === 'string' && args[0].startsWith('webgl')) w.__webgl++;
      return (get as (...a: unknown[]) => unknown).apply(this, args);
    } as typeof get;
  });
  await page.goto('/', { waitUntil: 'load' });
  await page.waitForTimeout(500);

  await expect(page.locator('#hero canvas')).toHaveCount(0);
  const fixed = await page.evaluate(
    () =>
      [...document.querySelectorAll('canvas')].filter((c) => {
        for (let el: Element | null = c; el; el = el.parentElement) {
          if (getComputedStyle(el).position === 'fixed') return true;
        }
        return false;
      }).length,
  );
  expect(fixed, 'a fixed canvas covers the page').toBe(0);

  /* All the way down and back: nothing may ask for a context lazily. */
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  await page.waitForTimeout(400);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
  expect(await page.evaluate(() => (window as unknown as { __webgl: number }).__webgl)).toBe(0);
});
