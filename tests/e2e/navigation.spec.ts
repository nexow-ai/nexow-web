import { expect, test } from '@playwright/test';
import { languages } from '../../src/i18n/config';

/** Header, mobile menu, language switcher and the skip link — all client-driven. */
test.describe('header navigation', () => {
  test('follows a nav link to its page', async ({ page }) => {
    await page.goto('/');
    await page.locator('#site-nav a[href="/features"]').first().click();
    await expect(page).toHaveURL(/\/features\/?$/);
    // View transitions can briefly keep the outgoing document's heading around.
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('marks the current page in the nav', async ({ page }) => {
    await page.goto('/plans');
    await expect(page.locator('#site-nav a[href="/plans"]').first()).toHaveAttribute(
      'aria-current',
      'page',
    );
  });

  test('switches locale and keeps you on the same page', async ({ page }) => {
    await page.goto('/features');

    // The switcher is a <details> dropdown; open it before clicking through.
    await page.locator('summary[aria-label="Switch language"]').first().click();
    await page.locator('a[href="/es/features"]').first().click();

    await expect(page).toHaveURL(/\/es\/features\/?$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  });

  test('sends the 404 language switcher to the locale home, not a missing page', async ({ page }) => {
    const response = await page.goto('/definitely-not-a-page');
    expect(response?.status()).toBe(404);

    // Cloudflare serves the one 404.html for every locale, so the switcher must
    // offer routes that exist.
    for (const href of await page.locator('a[href^="/es"]').evaluateAll((els) =>
      els.map((e) => e.getAttribute('href')),
    )) {
      expect(href).not.toMatch(/\/404/);
    }
  });

  test('offers every other locale in the switcher', async ({ page }) => {
    await page.goto('/');
    const hrefs = await page
      .locator('a[hreflang], #site-header a')
      .evaluateAll((els) => els.map((e) => e.getAttribute('href')));

    for (const lang of Object.keys(languages).filter((l) => l !== 'en')) {
      expect(hrefs, `switcher is missing ${lang}`).toContain(`/${lang}`);
    }
  });

  test('reveals the skip link on first Tab and jumps to the content', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');

    const skip = page.locator('a[href="#main"]');
    await expect(skip).toBeFocused();
    await skip.press('Enter');
    await expect(page).toHaveURL(/#main$/);
  });
});

test.describe('mobile menu', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('opens, lists the nav, and closes again', async ({ page }) => {
    await page.goto('/');
    const menu = page.locator('#mobile-menu');
    await expect(menu).toBeHidden();

    await page.locator('#menu-toggle').click();
    await expect(menu).toBeVisible();
    await expect(menu.locator('a[href="/features"]').first()).toBeVisible();

    await page.locator('#menu-close').click();
    await expect(menu).toBeHidden();
  });

  test('closes on Escape', async ({ page }) => {
    await page.goto('/');
    await page.locator('#menu-toggle').click();
    await expect(page.locator('#mobile-menu')).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(page.locator('#mobile-menu')).toBeHidden();
  });

  test('navigates from the menu', async ({ page }) => {
    await page.goto('/');
    await page.locator('#menu-toggle').click();
    await page.locator('#mobile-menu a[href="/plans"]').first().click();

    await expect(page).toHaveURL(/\/plans\/?$/);
  });

  test('reports its state to assistive tech', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('#menu-toggle');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  });
});

/**
 * Pages travel sideways between routes. The direction is the part that can
 * silently break — Astro would slide every link the same way — so record what
 * the router settles on rather than trying to sample a 450ms animation.
 */
test.describe('page-to-page slide', () => {
  /** Collects the direction of every client-side navigation from here on. */
  async function recordDirections(page: import('@playwright/test').Page) {
    await page.evaluate(() => {
      const seen: string[] = ((window as any).__slides = []);
      document.addEventListener('astro:before-swap', (event) => {
        seen.push(event.direction, document.documentElement.dataset.astroTransition ?? '');
      });
    });
    return () => page.evaluate(() => (window as any).__slides as string[]);
  }

  test('runs backwards to the previous page and forwards to the next', async ({ page }) => {
    await page.goto('/features');
    const directions = await recordDirections(page);

    await page.locator('.page-nav__btn--prev').click();
    await expect(page).toHaveURL(/localhost:\d+\/$/);

    await page.locator('.page-nav__btn--next').click();
    await expect(page).toHaveURL(/\/features\/?$/);

    // Each navigation reports twice: the event's direction, then the attribute
    // the router put on <html> for the animation to key off.
    expect(await directions()).toEqual(['back', 'back', 'forward', 'forward']);
  });

  test('follows tour order even when the header jumps across it', async ({ page }) => {
    await page.goto('/plans');
    const directions = await recordDirections(page);

    // /features sits well before /plans, so the header link must slide back.
    await page.locator('#site-nav a[href="/features"]').first().click();
    await expect(page).toHaveURL(/\/features\/?$/);

    expect(await directions()).toEqual(['back', 'back']);
  });
});

test.describe('legacy redirects', () => {
  test('/pricing lands on /plans', async ({ page }) => {
    await page.goto('/pricing');
    await expect(page).toHaveURL(/\/plans\/?$/);
  });

  // `/r/*` referral links are Cloudflare `_redirects` rules, which `astro
  // preview` does not process — they are verified statically against the built
  // route set in `tests/build/edge-config.test.ts`.

  test('the invite page reads a referral code from the query', async ({ page }) => {
    await page.goto('/invite?code=ABC123');
    await expect(page.locator('h1').first()).toBeVisible();
    await expect(page.locator('body')).toContainText('ABC123');
  });
});
