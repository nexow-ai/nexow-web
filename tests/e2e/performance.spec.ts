import { expect, test } from '@playwright/test';

/**
 * The performance facts that need a real engine. Byte budgets are asserted on
 * the build output instead, in `tests/build/payload.test.ts` — intercepting
 * responses here conflates the page's own cost with Astro's link prefetching,
 * which Chromium reports as `script` and which starts before `load`.
 */
test.describe('render path', () => {
  test('blocks render on stylesheets only, never on scripts', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load' });

    const blocking = await page.evaluate(() =>
      [...document.querySelectorAll('head script[src]')]
        .filter(
          (s) =>
            !s.hasAttribute('defer') &&
            !s.hasAttribute('async') &&
            s.getAttribute('type') !== 'module',
        )
        .map((s) => s.getAttribute('src')),
    );
    expect(blocking, 'render-blocking scripts in the head').toEqual([]);
  });

  test('contacts no third-party origin while loading', async ({ page }) => {
    const external = new Set<string>();
    const onResponse = (response: import('@playwright/test').Response) => {
      const origin = new URL(response.url()).origin;
      if (!origin.includes('localhost')) external.add(origin);
    };

    page.on('response', onResponse);
    await page.goto('/', { waitUntil: 'load' });
    page.off('response', onResponse);

    expect([...external], 'the page reached another origin').toEqual([]);
  });

  test('defers offscreen images rather than loading the whole catalog', async ({ page }) => {
    await page.goto('/connectors', { waitUntil: 'load' });
    await expect(page.locator('.connector-card').first()).toBeVisible();

    const total = await page.locator('.connector-card img').count();
    const eager = await page.locator('.connector-card img:not([loading="lazy"])').count();

    expect(total, 'the catalog should render images').toBeGreaterThan(50);
    expect(eager, `${eager} of ${total} catalog images load eagerly`).toBeLessThan(15);
  });

  test('sizes catalog images so the grid does not shift as they arrive', async ({ page }) => {
    await page.goto('/connectors', { waitUntil: 'load' });
    await expect(page.locator('.connector-card').first()).toBeVisible();

    const unsized = await page.evaluate(() =>
      [...document.querySelectorAll('.connector-card img')]
        .filter((img) => !img.getAttribute('width') || !img.getAttribute('height'))
        .map((img) => img.getAttribute('src'))
        .slice(0, 5),
    );
    expect(unsized, 'images without intrinsic dimensions cause layout shift').toEqual([]);
  });

  /**
   * Measured with motion reduced, and that is the point rather than a dodge.
   * The hero's typing effect and the playground's looping tab/workspace demo
   * reflow on purpose and forever, so any threshold on the animated page is
   * really a threshold on how long you watched. Parking them leaves exactly
   * what CLS is meant to catch — unsized media, late fonts, hydration reflow —
   * and doubles as proof that the reduced-motion paths genuinely stop the
   * movement rather than merely slowing it.
   */
  test.describe('with motion reduced', () => {
    test.use({ contextOptions: { reducedMotion: 'reduce' } });

    test('has no layout shift after paint on the home page', async ({ page }) => {
      await page.goto('/', { waitUntil: 'networkidle' });
      // Fonts swapping in are the classic late shift; wait for the real settle
      // point rather than a fixed delay a loaded machine would cut short.
      await page.evaluate(() => document.fonts.ready);

      const shift = await page.evaluate(
        () =>
          new Promise<number>((resolve) => {
            let score = 0;
            new PerformanceObserver((list) => {
              for (const entry of list.getEntries() as (PerformanceEntry & {
                value: number;
                hadRecentInput: boolean;
              })[]) {
                if (!entry.hadRecentInput) score += entry.value;
              }
            }).observe({ type: 'layout-shift', buffered: true });
            // `buffered` replays every shift since navigation, so a couple of
            // frames drain the queue now that nothing else is in flight.
            requestAnimationFrame(() => requestAnimationFrame(() => resolve(score)));
          }),
      );

      // 0.1 is the "good" Core Web Vitals threshold for CLS.
      expect(shift, 'cumulative layout shift').toBeLessThan(0.1);
    });
  });
});
