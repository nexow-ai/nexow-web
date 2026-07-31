import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs';
import path from 'node:path';
import { expect, test, type Page } from '@playwright/test';

/**
 * Colour contrast, measured in a real engine against a recorded baseline.
 *
 * The baseline in `contrast-baseline.json` is currently empty — every element
 * clears WCAG AA in both themes. It stays as a mechanism so that if a future
 * change introduces debt, it can be recorded deliberately rather than silently
 * disabling the rule. The suite fails on any offender not in the baseline.
 * Re-record with `UPDATE_CONTRAST_BASELINE=1`.
 */
const BASELINE_FILE = path.join(import.meta.dirname, 'contrast-baseline.json');

/**
 * One page per distinct template. The debt is design-system-wide rather than
 * page-specific, so a sample detects regressions without paying for 20 audited
 * loads on every run.
 */
const ROUTES = ['/', '/connectors', '/plans', '/community', '/contact'] as const;

/** A stable identity for an offending element: its tag plus its first classes. */
function fingerprint(html: string): string {
  const tag = html.match(/^<([a-z0-9]+)/i)?.[1] ?? 'node';
  const id = html.match(/\bid="([^"]+)"/)?.[1];
  if (id) return `${tag}#${id}`;
  const classes = (html.match(/\bclass="([^"]*)"/)?.[1] ?? '')
    .split(/\s+/)
    .filter((c) => c && !c.startsWith('data-'))
    .slice(0, 3)
    .join('.');
  return classes ? `${tag}.${classes}` : tag;
}

const readBaseline = (): string[] =>
  fs.existsSync(BASELINE_FILE) ? JSON.parse(fs.readFileSync(BASELINE_FILE, 'utf8')) : [];

async function contrastOffenders(page: Page): Promise<string[]> {
  // Astro's ClientRouter can start a prefetch-driven navigation just as axe
  // injects, tearing down the execution context; one retry settles it.
  for (let attempt = 0; ; attempt++) {
    try {
      const results = await new AxeBuilder({ page }).withRules(['color-contrast']).analyze();
      return results.violations.flatMap((v) => v.nodes.map((n) => fingerprint(n.html)));
    } catch (error) {
      if (attempt >= 2) throw error;
      await page.waitForLoadState('load');
      await page.waitForTimeout(500);
    }
  }
}

test.use({ contextOptions: { reducedMotion: 'reduce' } });

test('colour contrast has not regressed', async ({ browser }) => {
  test.setTimeout(600_000);

  const found = new Set<string>();
  for (const theme of ['light', 'dark'] as const) {
    for (const route of ROUTES) {
      const context = await browser.newContext({ colorScheme: theme, reducedMotion: 'reduce' });
      const page = await context.newPage();
      await page.goto(route, { waitUntil: 'load' });
      await page.waitForLoadState('networkidle').catch(() => {});
      await page.waitForTimeout(400);
      for (const id of await contrastOffenders(page)) found.add(id);
      await context.close();
    }
  }

  const current = [...found].sort();

  if (process.env.UPDATE_CONTRAST_BASELINE) {
    fs.writeFileSync(BASELINE_FILE, `${JSON.stringify(current, null, 2)}\n`);
    test.info().annotations.push({ type: 'baseline', description: `recorded ${current.length}` });
    return;
  }

  const baseline = readBaseline();
  const added = current.filter((id) => !baseline.includes(id));
  const fixed = baseline.filter((id) => !current.includes(id));

  expect(added, 'new colour-contrast violations — these must be fixed, not baselined').toEqual([]);

  if (fixed.length) {
    test.info().annotations.push({
      type: 'baseline shrank',
      description: `${fixed.join(', ')} now pass — remove them from contrast-baseline.json`,
    });
  }
});
