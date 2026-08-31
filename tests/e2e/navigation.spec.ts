import { expect, test, type Page } from '@playwright/test';
import { languages } from '../../src/i18n/config';

/** Header, mobile menu, language switcher and the skip link — all client-driven. */
test.describe('header navigation', () => {
  // The nav list is `hidden lg:flex`, so these exercise the desktop header
  // regardless of which project runs them; the mobile path is the menu below.
  test.use({ viewport: { width: 1280, height: 900 } });

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

  test('shows a numbered kbd on inactive links and an icon on the current page', async ({
    page,
  }) => {
    await page.goto('/');
    await expect(page.locator('#site-nav kbd').first()).toHaveText('1');
    await expect(page.locator('#site-nav a[href="/community"] kbd')).toHaveText('2');
    await expect(page.locator('#site-nav kbd', { hasText: '0' })).toHaveCount(0);

    await page.goto('/features');
    await expect(page.locator('#site-nav a[href="/features"][aria-current="page"] svg')).toBeVisible();
    await expect(page.locator('#site-nav a[href="/features"] kbd')).toHaveCount(0);
    await expect(page.locator('#site-nav a[href="/community"] kbd')).toHaveText('2');
  });

  test('number keys switch pages and 0 returns home', async ({ page }) => {
    await page.goto('/');
    // The home composer autofocuses; shortcuts must not fire while typing.
    await page.evaluate(() => (document.activeElement as HTMLElement | null)?.blur());
    await page.keyboard.press('1');
    await expect(page).toHaveURL(/\/features\/?$/);

    await page.keyboard.press('4');
    await expect(page).toHaveURL(/\/plans\/?$/);

    await page.keyboard.press('0');
    await expect(page).toHaveURL(/\/$/);
  });

  test('does not steal digits typed into a field', async ({ page }) => {
    await page.goto('/contact');
    const field = page.locator('#contact-name');
    await field.click();
    await page.keyboard.type('1');
    await expect(page).toHaveURL(/\/contact\/?$/);
    await expect(field).toHaveValue('1');
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

  test('scrolls when the sheet is taller than the screen', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto('/');
    await page.locator('#menu-toggle').click();

    const menu = page.locator('#mobile-menu');
    await expect(menu).toBeVisible();

    const canScroll = await menu.evaluate((el) => {
      const cs = getComputedStyle(el);
      return (
        (cs.overflowY === 'auto' || cs.overflowY === 'scroll') &&
        el.scrollHeight > el.clientHeight + 8
      );
    });
    expect(canScroll).toBe(true);

    const chip = menu.locator('.mobile-lang').first();
    await expect(chip).toBeVisible();
    const box = await chip.boundingBox();
    expect(box?.height ?? 0).toBeGreaterThanOrEqual(44);
  });
});

/**
 * Pages travel sideways between routes. The direction is the part that can
 * silently break — Astro would slide every link the same way — so record what
 * the router settles on rather than trying to sample a 450ms animation.
 */
test.describe('page-to-page slide', () => {
  /**
   * These are the only tests that wait on a view transition to run to
   * completion. The routes involved animate continuously, so on a machine with
   * several browsers competing the swap lands well past the 10s default —
   * `data-astro-transition` is already on <html> while the URL is still the old
   * one. Waiting longer costs nothing when it passes and keeps the assertions
   * exact rather than trading them for a looser check.
   */
  test.describe.configure({ timeout: 120_000 });
  const SWAP = { timeout: 45_000 };

  type Flagged = Window & { __routerReady?: boolean };

  /**
   * Navigate, then wait for the ClientRouter to be live. A click that lands
   * before `astro:page-load` does a full page load instead of a swap, so no
   * `astro:before-swap` ever fires and the recording comes back empty.
   */
  async function gotoReady(page: Page, url: string) {
    await page.addInitScript(() => {
      document.addEventListener(
        'astro:page-load',
        () => {
          (window as Flagged).__routerReady = true;
        },
        { once: true },
      );
    });
    await page.goto(url);
    await page.waitForFunction(() => (window as Flagged).__routerReady === true);
  }

  /** Collects the direction of every client-side navigation from here on. */
  async function recordDirections(page: Page) {
    await page.evaluate(() => {
      const seen: string[] = ((window as any).__slides = []);
      document.addEventListener('astro:before-swap', (event) => {
        seen.push(event.direction, document.documentElement.dataset.astroTransition ?? '');
      });
    });
    return () => page.evaluate(() => (window as any).__slides as string[]);
  }

  test('runs backwards to the previous page and forwards to the next', async ({ page }) => {
    // Start mid-tour so both arrows stay in view. Home hides its next arrow
    // until the page end, which is a different contract (see the test below).
    await gotoReady(page, '/community');
    const directions = await recordDirections(page);

    await page.locator('.page-nav__btn--prev').click();
    await expect(page).toHaveURL(/\/features\/?$/, SWAP);

    await page.locator('.page-nav__btn--next').click();
    await expect(page).toHaveURL(/\/community\/?$/, SWAP);

    // Each navigation reports twice: the event's direction, then the attribute
    // the router put on <html> for the animation to key off.
    expect(await directions()).toEqual(['back', 'back', 'forward', 'forward']);
  });

  test('holds the home next-page arrow until the foot of the page', async ({ page }) => {
    await page.goto('/');
    const next = page.locator('.page-nav__btn--next');
    await expect(next).toBeHidden();

    // The world can still be growing the document; keep landing on the real bottom.
    await page.waitForFunction(() => {
      window.scrollTo(0, document.documentElement.scrollHeight);
      return document.querySelector('.page-nav')?.classList.contains('is-at-end');
    });
    await expect(next).toBeVisible();
    await expect(next).toHaveAttribute('aria-label', /Features/);

    await page.goto('/features');
    await expect(page.locator('.page-nav__btn--next')).toBeVisible();
  });

  test.describe('from the header', () => {
    // Jumping across the tour needs the desktop nav list, not the mobile menu.
    test.use({ viewport: { width: 1280, height: 900 } });

    test('follows tour order even when the header jumps across it', async ({ page }) => {
      await gotoReady(page, '/plans');
      const directions = await recordDirections(page);

      // /features sits well before /plans, so the header link must slide back.
      await page.locator('#site-nav a[href="/features"]').first().click();
      await expect(page).toHaveURL(/\/features\/?$/, SWAP);

      expect(await directions()).toEqual(['back', 'back']);
    });
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
