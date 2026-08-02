import { expect, test, type Page } from '@playwright/test';
import { CONNECTORS, CONNECTOR_COUNT, CONNECTOR_LIVE_COUNT } from '../../src/data/connectors';
import { toFacets } from '../../src/lib/connectorFilter';
import { useContent } from '../../src/i18n/content';

const labels = useContent('en').connectorsPage as unknown as Parameters<typeof toFacets>[1];

/**
 * The /connectors controls. The filter *predicate* is unit-tested in
 * `tests/unit/lib/connectorFilter.test.ts`; what runs here is the DOM wiring it
 * cannot reach — event listeners, chip visibility, the result counter, the empty
 * state and the detail modal.
 */
const visibleCards = (page: Page) => page.locator('.connector-card:not(.hidden)');

async function openFilters(page: Page) {
  const toggle = page.locator('#connector-filters-toggle');
  if ((await toggle.getAttribute('aria-expanded')) !== 'true') await toggle.click();
  await expect(page.locator('#connector-filters')).toHaveAttribute('data-open', 'true');
}

test.beforeEach(async ({ page }) => {
  await page.goto('/connectors');
  await expect(page.locator('#connector-grid')).toBeVisible();
});

test.describe('catalog', () => {
  test('renders every connector server-side', async ({ page }) => {
    await expect(page.locator('.connector-card')).toHaveCount(CONNECTOR_COUNT);
  });

  test('shows the whole catalog before any filtering', async ({ page }) => {
    await expect(visibleCards(page)).toHaveCount(CONNECTOR_COUNT);
    await expect(page.locator('#connector-empty')).toBeHidden();
  });

  test('states the live and total counts in the hero', async ({ page }) => {
    const hero = page.locator('section').first();
    await expect(hero).toContainText(String(CONNECTOR_LIVE_COUNT));
    await expect(hero).toContainText(String(CONNECTOR_COUNT));
  });
});

test.describe('search', () => {
  test('narrows the grid to matching venues', async ({ page }) => {
    await page.fill('#connector-search', 'alpaca');
    await expect(visibleCards(page)).toHaveCount(1);
    await expect(visibleCards(page).first()).toContainText('Alpaca');
  });

  test('is case-insensitive and ignores surrounding space', async ({ page }) => {
    await page.fill('#connector-search', '  ALPACA  ');
    await expect(visibleCards(page)).toHaveCount(1);
  });

  test('matches on notes and asset class, not just the name', async ({ page }) => {
    // Reuse the very function that writes the card's search attribute, rather
    // than reimplementing it — the haystack includes localized labels too.
    const expected = CONNECTORS.filter((c) => toFacets(c, labels).search.includes('crypto')).length;

    await page.fill('#connector-search', 'crypto');
    await expect(visibleCards(page)).toHaveCount(expected);
    expect(expected, 'crypto should match some venues but not all').toBeGreaterThan(1);
    expect(expected).toBeLessThan(CONNECTOR_COUNT);
  });

  test('updates the result counter', async ({ page }) => {
    await page.fill('#connector-search', 'alpaca');
    await expect(page.locator('#connector-count')).toContainText('1');
  });

  test('shows an empty state when nothing matches, and clears it again', async ({ page }) => {
    await page.fill('#connector-search', 'zzzznotaconnector');
    await expect(visibleCards(page)).toHaveCount(0);
    await expect(page.locator('#connector-empty')).toBeVisible();

    await page.fill('#connector-search', '');
    await expect(visibleCards(page)).toHaveCount(CONNECTOR_COUNT);
    await expect(page.locator('#connector-empty')).toBeHidden();
  });
});

test.describe('filters', () => {
  test('filters by category and marks the active pill', async ({ page }) => {
    await openFilters(page);
    const finance = page.locator('[data-filter-category="finance"]');
    await finance.click();

    await expect(finance).toHaveAttribute('aria-pressed', 'true');
    await expect(visibleCards(page)).toHaveCount(
      CONNECTORS.filter((c) => c.category === 'finance').length,
    );
  });

  test('filters by status', async ({ page }) => {
    await openFilters(page);
    await page.locator('[data-filter-status="live"]').click();
    await expect(visibleCards(page)).toHaveCount(CONNECTOR_LIVE_COUNT);
  });

  test('filters by capability', async ({ page }) => {
    await openFilters(page);
    await page.locator('[data-filter-capability="trading"]').click();
    await expect(visibleCards(page)).toHaveCount(CONNECTORS.filter((c) => c.trading).length);
  });

  test('filters by initial letter', async ({ page }) => {
    await openFilters(page);
    await page.locator('[data-filter-alpha="a-d"]').click();

    const expected = CONNECTORS.filter((c) => {
      const letter = (c.name.match(/[A-Za-z]/)?.[0] ?? '').toUpperCase();
      return letter >= 'A' && letter <= 'D';
    }).length;
    await expect(visibleCards(page)).toHaveCount(expected);
  });

  test('combines filters', async ({ page }) => {
    await openFilters(page);
    await page.locator('[data-filter-category="finance"]').click();
    await page.locator('[data-filter-status="live"]').click();

    await expect(visibleCards(page)).toHaveCount(
      CONNECTORS.filter((c) => c.category === 'finance' && c.status === 'live').length,
    );
  });

  test('shows the active-filter dot only while a filter narrows the list', async ({ page }) => {
    await openFilters(page);
    await expect(page.locator('#connector-filters-badge')).toBeHidden();

    await page.locator('[data-filter-status="soon"]').click();
    await expect(page.locator('#connector-filters-badge')).toBeVisible();

    await page.locator('[data-filter-status="all"]').click();
    await expect(page.locator('#connector-filters-badge')).toBeHidden();
  });

  test('offers only the subcategory chips that belong to the chosen category', async ({ page }) => {
    await openFilters(page);
    await page.locator('[data-filter-category="wallets"]').click();

    // Wallets has a single `wallet` kind; Finance's asset chips must be hidden.
    await expect(page.locator('[data-filter-subcategory="wallet"]')).toBeVisible();
    await expect(page.locator('[data-filter-subcategory="equities"]')).toBeHidden();
  });

  test('drops a subcategory the new category does not offer', async ({ page }) => {
    await openFilters(page);
    await page.locator('[data-filter-category="finance"]').click();
    await page.locator('[data-filter-subcategory="crypto"]').click();
    const filtered = await visibleCards(page).count();

    await page.locator('[data-filter-category="wallets"]').click();
    // Selection resets to "all" rather than filtering to nothing.
    await expect(page.locator('[data-filter-subcategory="all"]')).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    expect(await visibleCards(page).count()).not.toBe(0);
    expect(filtered).toBeGreaterThan(0);
  });

  test('search and filters compose', async ({ page }) => {
    await openFilters(page);
    await page.locator('[data-filter-status="live"]').click();
    await page.fill('#connector-search', 'alpaca');
    await expect(visibleCards(page)).toHaveCount(1);
  });
});

test.describe('detail modal', () => {
  test('opens with the venue’s details and closes on Escape', async ({ page }) => {
    await page.fill('#connector-search', 'alpaca');
    await visibleCards(page).first().click();

    const modal = page.locator('#connector-modal');
    await expect(modal).toBeVisible();
    await expect(page.locator('#connector-modal-title')).toHaveText('Alpaca');

    await page.keyboard.press('Escape');
    await expect(modal).toBeHidden();
  });

  test('links out to the venue and into the app', async ({ page }) => {
    await page.fill('#connector-search', 'alpaca');
    await visibleCards(page).first().click();

    const alpaca = CONNECTORS.find((c) => c.id === 'alpaca')!;
    await expect(page.locator('#connector-modal-website')).toHaveAttribute('href', alpaca.url);
    await expect(page.locator('#connector-modal-connect')).toHaveAttribute(
      'href',
      /x\.nexow\.ai\/c\/\?connector=alpaca/,
    );
  });

  test('returns focus to the card that opened it', async ({ page }) => {
    await page.fill('#connector-search', 'alpaca');
    const card = visibleCards(page).first();
    await card.click();
    await expect(page.locator('#connector-modal')).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(page.locator('#connector-modal')).toBeHidden();
    await expect(card).toBeFocused();
  });

  test('marks a coming-soon venue as unavailable', async ({ page }) => {
    const soon = CONNECTORS.find((c) => c.status === 'soon')!;
    // Search by id: names can carry punctuation the haystack normalises away.
    await page.fill('#connector-search', soon.id);
    await expect(visibleCards(page)).toHaveCount(1);
    await visibleCards(page).first().click();

    await expect(page.locator('#connector-modal-soon-hint')).toBeVisible();
    await expect(page.locator('#connector-modal-title')).toHaveText(soon.name);
  });
});
