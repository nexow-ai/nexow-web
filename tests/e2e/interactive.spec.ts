import { expect, test, type Page } from '@playwright/test';
import { LEVELS, POINT_WEIGHTS, SIM_ACTIONS } from '../../src/data/gamification';

/**
 * The reputation simulator and the two signup forms. The arithmetic behind the
 * simulator is unit-tested in `tests/unit/lib/reputation.test.ts`; here the
 * browser proves the chips, the bar and the level readout are wired to it, and
 * that the forms handle every response the API can return.
 */
const points = async (page: Page) =>
  Number(((await page.locator('[data-sim-points]').textContent()) ?? '0').replace(/[^\d]/g, ''));

test.describe('reputation simulator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/plans');
    await expect(page.locator('#rep-sim')).toBeVisible();
  });

  test('starts at zero, in the first level band', async ({ page }) => {
    expect(await points(page)).toBe(0);
    await expect(page.locator('[data-sim-level]')).not.toBeEmpty();
  });

  test('scores a tap at that stat’s real weight', async ({ page }) => {
    const action = SIM_ACTIONS[0];
    await page.locator(`[data-sim-action="${action.stat}"]`).click();

    await expect.poll(() => points(page)).toBe(POINT_WEIGHTS[action.stat]);
    await expect(page.locator(`[data-sim-action="${action.stat}"] [data-sim-count]`)).toHaveText('1');
  });

  test('accumulates across taps and stats', async ({ page }) => {
    const [a, b] = SIM_ACTIONS;
    await page.locator(`[data-sim-action="${a.stat}"]`).click();
    await page.locator(`[data-sim-action="${a.stat}"]`).click();
    await page.locator(`[data-sim-action="${b.stat}"]`).click();

    const expected = 2 * POINT_WEIGHTS[a.stat]! + POINT_WEIGHTS[b.stat]!;
    await expect.poll(() => points(page)).toBe(expected);
  });

  test('promotes through the level bands as the score climbs', async ({ page }) => {
    test.slow();
    const first = await page.locator('[data-sim-level]').textContent();
    const heaviest = [...SIM_ACTIONS].sort((x, y) => y.points - x.points)[0];
    const target = LEVELS[1].min;
    const taps = Math.ceil(target / heaviest.points);

    const chip = page.locator(`[data-sim-action="${heaviest.stat}"]`);
    for (let i = 0; i < taps; i++) await chip.click();

    await expect.poll(() => points(page)).toBeGreaterThanOrEqual(target);
    await expect(page.locator('[data-sim-level]')).not.toHaveText(first ?? '');
  });

  test('fills the progress bar between 0 and 100%', async ({ page }) => {
    const width = () =>
      page.locator('[data-sim-bar]').evaluate((el) => Number.parseFloat((el as HTMLElement).style.width));

    await page.locator(`[data-sim-action="${SIM_ACTIONS[0].stat}"]`).click();
    await expect.poll(width).toBeGreaterThan(0);
    await expect.poll(width).toBeLessThanOrEqual(100);
  });

  test('resets to zero', async ({ page }) => {
    const reset = page.locator('[data-sim-reset]');
    test.skip((await reset.count()) === 0, 'no reset control in this build');

    await page.locator(`[data-sim-action="${SIM_ACTIONS[0].stat}"]`).click();
    await expect.poll(() => points(page)).toBeGreaterThan(0);

    await reset.click();
    await expect.poll(() => points(page)).toBe(0);
  });
});

/** Both signup forms POST to the same newsletter endpoint. */
const FORMS = [
  {
    name: 'newsletter',
    page: '/',
    form: '#newsletter-form',
    email: '#newsletter-email',
    submit: '#newsletter-submit',
    status: '#newsletter-status',
  },
  {
    name: 'waitlist',
    page: '/plans',
    form: '#waitlist-form',
    email: '#waitlist-email',
    submit: '#waitlist-submit',
    status: '#waitlist-status',
  },
] as const;

for (const form of FORMS) {
  test.describe(`${form.name} form`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(form.page);
      await page.locator(form.form).scrollIntoViewIfNeeded();
    });

    test('rejects an address the browser would not accept', async ({ page }) => {
      let posted = false;
      await page.route('**/api/newsletter', async (route) => {
        posted = true;
        await route.fulfill({ status: 200, body: '{}' });
      });

      await page.fill(form.email, 'not-an-email');
      await page.locator(form.submit).click();

      // Either the browser's own validation or the script's check must stop it;
      // what matters is that nothing reaches the API.
      const valid = await page.locator(form.email).evaluate(
        (el) => (el as HTMLInputElement).checkValidity(),
      );
      const status = (await page.locator(form.status).textContent()) ?? '';
      expect(valid === false || status.trim() !== '').toBe(true);
      expect(posted, 'an invalid address must not reach the API').toBe(false);
    });

    test('confirms a successful signup', async ({ page }) => {
      await page.route('**/api/newsletter', (route) =>
        route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' }),
      );

      await page.fill(form.email, 'maker@example.com');
      await page.locator(form.submit).click();

      await expect(page.locator(form.status)).not.toBeEmpty();
      await expect(page.locator(form.status)).toHaveClass(/text-brand/);
    });

    test('surfaces the server’s own message on a rejection', async ({ page }) => {
      await page.route('**/api/newsletter', (route) =>
        route.fulfill({
          status: 400,
          contentType: 'application/json',
          body: JSON.stringify({ statusMessage: 'That address is already subscribed.' }),
        }),
      );

      await page.fill(form.email, 'maker@example.com');
      await page.locator(form.submit).click();

      await expect(page.locator(form.status)).toContainText('already subscribed');
    });

    test('degrades gracefully when the request fails outright', async ({ page }) => {
      await page.route('**/api/newsletter', (route) => route.abort('failed'));

      await page.fill(form.email, 'maker@example.com');
      await page.locator(form.submit).click();

      await expect(page.locator(form.status)).not.toBeEmpty();
      // The page must stay usable rather than throwing into a broken state.
      await expect(page.locator('main')).toBeVisible();
    });

    test('sends the address to the newsletter endpoint', async ({ page }) => {
      const requests: string[] = [];
      await page.route('**/api/newsletter', async (route) => {
        requests.push(route.request().postData() ?? '');
        await route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' });
      });

      await page.fill(form.email, 'maker@example.com');
      await page.locator(form.submit).click();

      await expect.poll(() => requests.length).toBe(1);
      expect(requests[0]).toContain('maker@example.com');
    });
  });
}
