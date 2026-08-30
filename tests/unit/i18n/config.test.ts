import { describe, expect, it } from 'vitest';
import { SITE, SOCIALS, defaultLang, languages, resolveSocialUrl } from '../../../src/i18n/config';
import { ICON_PATHS } from '../../../src/components/icon-paths';
import { LANGS, PREFIXED_LANGS } from '../../helpers/locales';

describe('languages', () => {
  it('ships 17 locales with English as the default', () => {
    expect(LANGS).toHaveLength(17);
    expect(defaultLang).toBe('en');
    expect(languages[defaultLang]).toBe('English');
  });

  it('lists English first so it heads every language switcher', () => {
    expect(LANGS[0]).toBe('en');
    expect(PREFIXED_LANGS).toHaveLength(16);
    expect(PREFIXED_LANGS).not.toContain('en');
  });

  it('uses lowercase two-letter codes and a non-empty endonym for each', () => {
    for (const lang of LANGS) {
      expect(lang, `${lang} is not a two-letter code`).toMatch(/^[a-z]{2}$/);
      expect(languages[lang].trim(), `${lang} has no endonym`).not.toBe('');
    }
  });

  it('has no duplicate endonyms', () => {
    const names = LANGS.map((l) => languages[l]);
    expect(new Set(names).size).toBe(names.length);
  });
});

describe('SITE', () => {
  it('points the canonical URL and app URL at https origins on the brand domain', () => {
    expect(SITE.url).toBe(`https://${SITE.domain}`);
    expect(new URL(SITE.appUrl).protocol).toBe('https:');
    expect(new URL(SITE.appUrl).hostname.endsWith(SITE.domain)).toBe(true);
  });

  it('has no trailing slash on the origins that get concatenated into deep links', () => {
    expect(SITE.url.endsWith('/')).toBe(false);
    expect(SITE.appUrl.endsWith('/')).toBe(false);
  });

  it('exposes valid addresses for every published inbox', () => {
    for (const email of [SITE.email, SITE.partnersEmail, SITE.supportEmail]) {
      expect(email).toMatch(/^[^@\s]+@[^@\s.]+\.[a-z]{2,}$/);
      expect(email.endsWith(`@${SITE.domain}`)).toBe(true);
    }
  });

  it('keeps the newsletter and waitlist endpoints on the app API', () => {
    for (const endpoint of [SITE.newsletterUrl, SITE.waitlistUrl]) {
      expect(endpoint.startsWith(`${SITE.appUrl}/api/`)).toBe(true);
    }
  });

  it('uses a site-relative, localizable help hub', () => {
    expect(SITE.docsUrl).toBe('/help');
  });

  it('formats the X handle for meta tags', () => {
    expect(SITE.x).toMatch(/^@[\w]+$/);
  });

  it('names a legal entity and a postal address for the imprint', () => {
    expect(SITE.legalName).toContain(SITE.name);
    expect(SITE.address).toMatch(/United States$/);
  });
});

describe('resolveSocialUrl', () => {
  it('keeps a non-empty configured URL', () => {
    expect(resolveSocialUrl(' https://x.com/nexow ', 'https://example.test')).toBe(
      'https://x.com/nexow',
    );
  });

  it('falls back when the env value is missing or blank', () => {
    expect(resolveSocialUrl(undefined, 'https://example.test/fallback')).toBe(
      'https://example.test/fallback',
    );
    expect(resolveSocialUrl('   ', 'https://example.test/fallback')).toBe(
      'https://example.test/fallback',
    );
  });
});

describe('SOCIALS', () => {
  it('links every social profile over https', () => {
    for (const social of SOCIALS) {
      expect(new URL(social.href).protocol, social.label).toBe('https:');
    }
  });

  it('uses icon names Icon.astro can resolve', () => {
    const filled = new Set([
      'youtube',
      'tiktok',
      'x-logo',
      'instagram',
      'linkedin',
      'github',
      'telegram',
      'discord',
      'skool',
    ]);
    for (const social of SOCIALS) {
      const known = social.icon in ICON_PATHS || filled.has(social.icon);
      expect(known, `${social.label} → unknown icon "${social.icon}"`).toBe(true);
    }
  });

  it('has unique labels and hrefs', () => {
    expect(new Set(SOCIALS.map((s) => s.label)).size).toBe(SOCIALS.length);
    expect(new Set(SOCIALS.map((s) => s.href)).size).toBe(SOCIALS.length);
  });

  it('publishes the eight community profiles plus GitHub', () => {
    expect(SOCIALS.map((s) => s.label)).toEqual([
      'Telegram',
      'Discord',
      'X',
      'TikTok',
      'Instagram',
      'LinkedIn',
      'YouTube',
      'Skool',
      'GitHub',
    ]);
  });
});
