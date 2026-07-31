import { describe, expect, it } from 'vitest';
import { audit, describeViolations } from '../helpers/a11y';
import { localizePath } from '../../src/i18n/utils';
import { pageFor } from '../helpers/pages';
import { render } from '../helpers/render';
import type { Lang } from '../../src/i18n/config';


/**
 * An axe pass parses the rule bundle into a fresh document each time, so it runs
 * over one page per distinct template rather than all 340 route/locale pairs.
 * The structural checks below are cheap and do cover every route.
 */
const AUDITED_ROUTES = [
  '/',
  '/features',
  '/connectors',
  '/plans',
  '/community',
  '/blog',
  '/contact',
  '/privacy',
  '/for/traders',
] as const;

/** One locale per script direction and writing system. */
const SAMPLE_LANGS: Lang[] = ['de', 'ja', 'ar'];

const AXE_TIMEOUT = 120_000;

describe.each(AUDITED_ROUTES)('%s is accessible', (route) => {
  it(
    'has no axe violations',
    async () => {
      const html = await render(pageFor(route, 'en') as never, route);
      expect(
        describeViolations(await audit(html)),
        `${route} has accessibility violations`,
      ).toEqual([]);
    },
    AXE_TIMEOUT,
  );
});

describe.each(SAMPLE_LANGS)('the %s home page is accessible', (lang) => {
  it(
    'has no axe violations',
    async () => {
      const route = localizePath('/', lang);
      const html = await render(pageFor('/', lang) as never, route);
      expect(describeViolations(await audit(html)), `${lang} home has violations`).toEqual([]);
    },
    AXE_TIMEOUT,
  );
});
