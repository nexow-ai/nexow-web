import { describe, expect, it } from 'vitest';
import {
  appUrl,
  claimHandleAppUrl,
  communityAppUrl,
  communityGrowItemHref,
  communityHeroChipHref,
  communityResearchItemHref,
  communitySocialItemHref,
  featureGroupAppHref,
  featureItemAppHref,
  panelAppUrl,
  promptAppUrl,
  shareAppUrl,
  signupAppUrl,
  type AppPanelId,
} from '../../../src/lib/appDeepLinks';
import { SITE } from '../../../src/i18n/config';

const APP = SITE.appUrl;

const PANELS: AppPanelId[] = [
  'account',
  'community',
  'marketplace',
  'copilot',
  'library',
  'bots',
  'agents',
  'connectors',
  'themes',
  'settings',
];

/** Query of a deep link, as `?`-less text plus a parsed param map. */
function query(href: string) {
  const raw = href.includes('?') ? href.slice(href.indexOf('?') + 1) : '';
  return { raw, params: new URLSearchParams(raw) };
}

describe('appUrl', () => {
  it('returns the bare app URL with no query', () => {
    expect(appUrl()).toBe(APP);
    expect(appUrl({})).toBe(APP);
  });

  it('drops undefined and false values', () => {
    expect(appUrl({ panel: undefined })).toBe(APP);
    expect(appUrl({ signup: false })).toBe(APP);
    expect(appUrl({ signup: false, panel: undefined })).toBe(APP);
  });

  it('renders true and empty-string values as bare flags', () => {
    expect(appUrl({ signup: true })).toBe(`${APP}/?signup`);
    expect(appUrl({ signup: '' })).toBe(`${APP}/?signup`);
  });

  it('renders valued params as key=value', () => {
    expect(appUrl({ panel: 'bots' })).toBe(`${APP}/?panel=bots`);
  });

  it('puts bare flags before valued params', () => {
    expect(appUrl({ prompt: 'hi', signup: true })).toBe(`${APP}/?signup&prompt=hi`);
  });

  it('percent-encodes values', () => {
    const href = appUrl({ prompt: 'a b&c=d' });
    expect(href).toBe(`${APP}/?prompt=a+b%26c%3Dd`);
    expect(query(href).params.get('prompt')).toBe('a b&c=d');
  });

  it('always produces a parseable https URL', () => {
    for (const href of [appUrl(), appUrl({ signup: true }), appUrl({ panel: 'bots', tab: 'you' })]) {
      expect(new URL(href).protocol, href).toBe('https:');
    }
  });
});

describe('signupAppUrl', () => {
  it('opens the auth wall', () => {
    expect(signupAppUrl()).toBe(`${APP}/?signup`);
  });

  it('carries a referral code alongside the flag', () => {
    const href = signupAppUrl({ ref: 'ABC123' });
    expect(href).toBe(`${APP}/?signup&ref=ABC123`);
    expect(query(href).params.get('ref')).toBe('ABC123');
  });

  it('ignores an undefined referral code', () => {
    expect(signupAppUrl({ ref: undefined })).toBe(`${APP}/?signup`);
  });
});

describe('promptAppUrl', () => {
  it('prefills the prompt and opens signup by default', () => {
    const href = promptAppUrl('build me a dashboard');
    expect(query(href).params.get('prompt')).toBe('build me a dashboard');
    expect(query(href).raw.startsWith('signup&')).toBe(true);
  });

  it('trims the prompt', () => {
    expect(query(promptAppUrl('  spaced  ')).params.get('prompt')).toBe('spaced');
  });

  it('drops an empty or whitespace-only prompt', () => {
    expect(promptAppUrl('')).toBe(`${APP}/?signup`);
    expect(promptAppUrl('   ')).toBe(`${APP}/?signup`);
  });

  it('can skip the signup flag', () => {
    expect(promptAppUrl('hello', { signup: false })).toBe(`${APP}/?prompt=hello`);
    expect(promptAppUrl('', { signup: false })).toBe(APP);
  });

  it('keeps signup when the option is set explicitly true or omitted', () => {
    expect(promptAppUrl('hello', { signup: true })).toBe(`${APP}/?signup&prompt=hello`);
    expect(promptAppUrl('hello', {})).toBe(`${APP}/?signup&prompt=hello`);
  });
});

describe('panelAppUrl', () => {
  it('opens every known panel', () => {
    for (const panel of PANELS) {
      expect(panelAppUrl(panel), panel).toBe(`${APP}/?panel=${panel}`);
    }
  });

  it('passes extra params through', () => {
    expect(panelAppUrl('community', { tab: 'you' })).toBe(`${APP}/?panel=community&tab=you`);
    expect(panelAppUrl('community', { tab: undefined })).toBe(`${APP}/?panel=community`);
  });
});

describe('communityAppUrl', () => {
  it('defaults to the discover tab', () => {
    expect(communityAppUrl()).toBe(`${APP}/?panel=community&tab=discover`);
    expect(communityAppUrl({})).toBe(`${APP}/?panel=community&tab=discover`);
  });

  it('honours the requested tab', () => {
    expect(communityAppUrl({ tab: 'dao' })).toBe(`${APP}/?panel=community&tab=dao`);
    expect(communityAppUrl({ tab: 'messages' })).toBe(`${APP}/?panel=community&tab=messages`);
  });

  it('adds view and post when given', () => {
    const href = communityAppUrl({ tab: 'discover', view: 'widget', post: 'p42' });
    const { params } = query(href);
    expect(params.get('view')).toBe('widget');
    expect(params.get('post')).toBe('p42');
  });

  it('only asks for signup when requested', () => {
    expect(communityAppUrl({ signup: true }).startsWith(`${APP}/?signup&`)).toBe(true);
    expect(communityAppUrl({ signup: false })).not.toContain('signup');
  });
});

describe('claimHandleAppUrl', () => {
  it('opens Community → You behind the auth wall', () => {
    expect(claimHandleAppUrl()).toBe(`${APP}/?signup&panel=community&tab=you`);
  });
});

describe('shareAppUrl', () => {
  it('points at the PWA share target', () => {
    expect(shareAppUrl()).toBe(`${APP}/share`);
    expect(new URL(shareAppUrl()).pathname).toBe('/share');
  });
});

describe('communityHeroChipHref', () => {
  it('maps the four hero chips by index', () => {
    expect(communityHeroChipHref(0)).toBe(communityAppUrl({ tab: 'discover' }));
    expect(communityHeroChipHref(1)).toBe(communityAppUrl({ tab: 'you' }));
    expect(communityHeroChipHref(2)).toBe(panelAppUrl('marketplace'));
    expect(communityHeroChipHref(3)).toBe(communityAppUrl({ tab: 'dao' }));
  });

  it('falls back to the app root outside the known range', () => {
    expect(communityHeroChipHref(4)).toBe(APP);
    expect(communityHeroChipHref(-1)).toBe(APP);
  });
});

describe('communitySocialItemHref', () => {
  it('maps each social row by icon', () => {
    expect(communitySocialItemHref('sparkles')).toBe(
      communityAppUrl({ tab: 'discover', view: 'widget' }),
    );
    expect(communitySocialItemHref('chat')).toBe(communityAppUrl({ tab: 'discover' }));
    expect(communitySocialItemHref('mail')).toBe(communityAppUrl({ tab: 'messages' }));
    expect(communitySocialItemHref('users')).toBe(claimHandleAppUrl());
  });

  it('falls back to the feed for an unknown icon', () => {
    expect(communitySocialItemHref('nope')).toBe(communityAppUrl({ tab: 'discover' }));
  });
});

describe('communityResearchItemHref', () => {
  it('maps each research row by icon', () => {
    expect(communityResearchItemHref('library')).toBe(communityAppUrl({ tab: 'you' }));
    expect(communityResearchItemHref('link')).toBe(shareAppUrl());
    expect(communityResearchItemHref('layers')).toBe(APP);
    expect(communityResearchItemHref('bolt')).toBe(APP);
  });

  it('falls back to the app root for an unknown icon', () => {
    expect(communityResearchItemHref('nope')).toBe(APP);
  });
});

describe('communityGrowItemHref', () => {
  it('maps each reputation row by icon', () => {
    expect(communityGrowItemHref('trophy')).toBe(panelAppUrl('account'));
    expect(communityGrowItemHref('signal')).toBe(communityAppUrl({ tab: 'discover' }));
    expect(communityGrowItemHref('award')).toBe(communityAppUrl({ tab: 'contacts' }));
    expect(communityGrowItemHref('globe')).toBe(signupAppUrl());
  });

  it('falls back to the app root for an unknown icon', () => {
    expect(communityGrowItemHref('nope')).toBe(APP);
  });
});

describe('featureItemAppHref', () => {
  const CASES: [string, string][] = [
    ['sparkles', panelAppUrl('library')],
    ['wand', panelAppUrl('library')],
    ['library', panelAppUrl('library')],
    ['history', panelAppUrl('library')],
    ['plug', panelAppUrl('connectors')],
    ['globe', panelAppUrl('connectors')],
    ['signal', panelAppUrl('connectors')],
    ['database', panelAppUrl('connectors')],
    ['bot', panelAppUrl('bots')],
    ['cpu', panelAppUrl('agents')],
    ['chat', panelAppUrl('copilot')],
    ['users', communityAppUrl({ tab: 'discover' })],
    ['mail', communityAppUrl({ tab: 'messages' })],
    ['store', panelAppUrl('marketplace')],
    ['vault', panelAppUrl('account')],
    ['trophy', panelAppUrl('account')],
    ['award', panelAppUrl('account')],
    ['moon', panelAppUrl('themes')],
    ['sliders', panelAppUrl('settings')],
    ['sync', panelAppUrl('settings')],
    ['lock', panelAppUrl('settings')],
    ['shield', panelAppUrl('settings')],
    ['layers', SITE.appUrl],
    ['link', SITE.appUrl],
    ['grid', SITE.appUrl],
    ['bolt', SITE.appUrl],
  ];

  it.each(CASES)('maps %s', (icon, expected) => {
    expect(featureItemAppHref(icon)).toBe(expected);
  });

  it('falls back to the app root for an unknown icon', () => {
    expect(featureItemAppHref('nope')).toBe(APP);
    expect(featureItemAppHref('')).toBe(APP);
  });

  it('always returns an https app URL', () => {
    for (const [icon] of CASES) {
      const href = featureItemAppHref(icon);
      expect(href.startsWith(APP), icon).toBe(true);
    }
  });
});

describe('featureGroupAppHref', () => {
  it('maps the six Features pillars by index', () => {
    expect(featureGroupAppHref(0)).toBe(panelAppUrl('library'));
    expect(featureGroupAppHref(1)).toBe(APP);
    expect(featureGroupAppHref(2)).toBe(panelAppUrl('connectors'));
    expect(featureGroupAppHref(3)).toBe(panelAppUrl('bots'));
    expect(featureGroupAppHref(4)).toBe(communityAppUrl({ tab: 'discover' }));
    expect(featureGroupAppHref(5)).toBe(panelAppUrl('account'));
  });

  it('falls back to the app root outside the known range', () => {
    expect(featureGroupAppHref(6)).toBe(APP);
    expect(featureGroupAppHref(-1)).toBe(APP);
  });
});
