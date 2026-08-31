import { describe, expect, it } from 'vitest';
import BlogCard from '../../src/components/BlogCard.astro';
import BrandMark from '../../src/components/BrandMark.astro';
import Button from '../../src/components/Button.astro';
import Compliance from '../../src/components/sections/Compliance.astro';
import Privacy from '../../src/components/sections/Privacy.astro';
import ConnectorCard from '../../src/components/ConnectorCard.astro';
import ConnectorMarquee from '../../src/components/ConnectorMarquee.astro';
import FeatureCard from '../../src/components/FeatureCard.astro';
import FeatureMap from '../../src/components/FeatureMap.astro';
import Footer from '../../src/components/Footer.astro';
import Header from '../../src/components/Header.astro';
import Hero from '../../src/components/sections/Hero.astro';
import SocialLinks from '../../src/components/SocialLinks.astro';
import Hex from '../../src/components/Hex.astro';
import Icon from '../../src/components/Icon.astro';
import Logo from '../../src/components/Logo.astro';
import PageHero from '../../src/components/PageHero.astro';
import PageNav from '../../src/components/PageNav.astro';
import SectionHeading from '../../src/components/SectionHeading.astro';
import ThemeToggle from '../../src/components/ThemeToggle.astro';
import { ICON_PATHS } from '../../src/components/icon-paths';
import { CONNECTORS } from '../../src/data/connectors';
import { SITE, SOCIALS, languages } from '../../src/i18n/config';
import { useContent } from '../../src/i18n/content';
import { localizePath } from '../../src/i18n/utils';
import { resolveFeatureMapGroups } from '../../src/lib/featureMap';
import { LANGS } from '../helpers/locales';
import { attrs, render, text } from '../helpers/render';

describe('Icon', () => {
  it('draws the requested glyph', async () => {
    const html = await render(Icon, '/', { props: { name: 'sparkles' } });
    expect(html).toContain('<svg');
    expect(html).toContain('viewBox="0 0 24 24"');
    expect(html).toContain(ICON_PATHS.sparkles.split(' ')[0]);
    expect(html).toContain('aria-hidden="true"');
  });

  it('passes through class and style', async () => {
    const html = await render(Icon, '/', {
      props: { name: 'coins', class: 'size-4', style: 'color:red' },
    });
    expect(html).toContain('size-4');
    expect(html).toContain('color:red');
  });

  it('renders the filled brand marks with a fill, not a stroke', async () => {
    for (const name of ['youtube', 'tiktok', 'telegram', 'discord']) {
      const html = await render(Icon, '/', { props: { name } });
      expect(html, name).toContain('fill="currentColor"');
    }
  });

  it('renders every registered glyph without throwing', async () => {
    for (const name of Object.keys(ICON_PATHS)) {
      const html = await render(Icon, '/', { props: { name } });
      expect(html, name).toContain('<svg');
      expect(html, name).toContain('<path');
    }
  });

  it('degrades to an empty glyph for an unknown name', async () => {
    const html = await render(Icon, '/', { props: { name: 'definitely-not-an-icon' } });
    expect(html).toContain('<svg');
    expect(html).not.toContain('undefined');
  });
});

describe('Button', () => {
  it('renders the slot inside an anchor', async () => {
    const html = await render(Button, '/', {
      props: { href: '/plans' },
      slots: { default: 'See plans' },
    });
    expect(html).toContain('href="/plans"');
    expect(html).toContain('See plans');
  });

  it('opens external links safely', async () => {
    const html = await render(Button, '/', {
      props: { href: SITE.appUrl, external: true },
      slots: { default: 'Launch' },
    });
    expect(html).toContain('target="_blank"');
    expect(html).toContain('rel="noopener noreferrer"');
  });

  it('keeps internal links in the same tab', async () => {
    const html = await render(Button, '/', { props: { href: '/plans' }, slots: { default: 'Go' } });
    expect(html).not.toContain('target="_blank"');
    expect(html).not.toContain('rel="noopener');
  });

  it('renders leading and trailing icons', async () => {
    const html = await render(Button, '/', {
      props: { href: '/plans', icon: 'coins', iconRight: 'chevronRight' },
      slots: { default: 'Plans' },
    });
    expect((html.match(/<svg/g) ?? []).length).toBe(2);
  });

  it.each(['primary', 'secondary', 'ghost', 'dark', 'outline', 'gradient'] as const)(
    'paints the %s variant',
    async (variant) => {
      const html = await render(Button, '/', {
        props: { href: '/x', variant },
        slots: { default: 'Go' },
      });
      expect(html).toContain('<a');
      expect(html).not.toContain('undefined');
    },
  );

  it.each(['sm', 'md', 'lg'] as const)('sizes the %s button', async (size) => {
    const html = await render(Button, '/', { props: { href: '/x', size }, slots: { default: 'Go' } });
    expect(html).toContain('<a');
    expect(html).not.toContain('undefined');
  });

  it('appends caller classes', async () => {
    const html = await render(Button, '/', {
      props: { href: '/x', class: 'w-full' },
      slots: { default: 'Go' },
    });
    expect(html).toContain('w-full');
  });
});

describe('SectionHeading', () => {
  it('renders the title, and the eyebrow and subtitle when given', async () => {
    const html = await render(SectionHeading, '/', {
      props: { eyebrow: 'Features', title: 'Everything on one canvas', subtitle: 'A subtitle' },
    });
    expect(html).toContain('Features');
    expect(html).toContain('Everything on one canvas');
    expect(html).toContain('A subtitle');
  });

  it('omits the optional parts cleanly', async () => {
    const html = await render(SectionHeading, '/', { props: { title: 'Just a title' } });
    expect(html).toContain('Just a title');
    expect(html).not.toContain('undefined');
  });
});

describe('PageHero', () => {
  it('renders the badge, icon, title and anchor id', async () => {
    const html = await render(PageHero, '/features', {
      props: { badge: 'Features', icon: 'sparkles', title: 'Title', subtitle: 'Sub', id: 'top' },
    });
    expect(html).toContain('Features');
    expect(html).toContain('<svg');
    expect(html).toContain('Title');
    expect(html).toContain('Sub');
    expect(html).toContain('id="top"');
  });

  it('renders without an icon or subtitle', async () => {
    const html = await render(PageHero, '/about', { props: { badge: 'About', title: 'Title' } });
    expect(html).toContain('Title');
    expect(html).not.toContain('undefined');
  });
});

describe('Header', () => {
  it.each(LANGS)('renders the nav for %s', async (lang) => {
    const route = localizePath('/', lang);
    const html = await render(Header, route, { props: { lang, route: '/' } });
    const t = useContent(lang);
    for (const link of t.nav.links) {
      expect(html, `${lang} → ${link.href}`).toContain(`href="${localizePath(link.href, lang)}"`);
      expect(html, `${lang} → ${link.label}`).toContain(link.label);
    }
    expect(html).toContain(t.nav.launch);
  });

  it('links the app CTA at the product', async () => {
    const html = await render(Header, '/', { props: { lang: 'en', route: '/' } });
    expect(html).toContain(SITE.appUrl);
  });

  it('offers every other locale in the language switcher', async () => {
    for (const active of ['en', 'ja'] as const) {
      const html = await render(Header, localizePath('/', active), {
        props: { lang: active, route: '/' },
      });
      for (const other of LANGS.filter((l) => l !== active)) {
        expect(html, `${active} switcher is missing ${other}`).toContain(languages[other]);
        expect(html, `${active} switcher → ${other}`).toContain(`href="${localizePath('/', other)}"`);
      }
    }
  });

  it('marks the active route', async () => {
    const html = await render(Header, '/features', { props: { lang: 'en', route: '/features' } });
    expect(html).toContain('href="/features"');
    expect(html).toContain('aria-current="page"');
  });

  it('numbers inactive nav links and skips the current page’s kbd', async () => {
    const home = await render(Header, '/', { props: { lang: 'en', route: '/' } });
    const t = useContent('en');
    t.nav.links.forEach((link, i) => {
      const key = String(i + 1);
      expect(home, `${link.label} kbd`).toContain(`data-nav-key="${key}"`);
      expect(home, `${link.label} kbd`).toMatch(new RegExp(`<kbd[^>]*>${key}</kbd>`));
    });
    expect(home).toContain('data-nav-key="0"');
    expect(home).not.toMatch(/<kbd[^>]*>0<\/kbd>/);

    const features = await render(Header, '/features', { props: { lang: 'en', route: '/features' } });
    expect(features).not.toMatch(/<kbd[^>]*>1<\/kbd>/);
    expect(features).toMatch(/<kbd[^>]*>2<\/kbd>/);
    expect(features).toMatch(/<kbd[^>]*>6<\/kbd>/);
  });
});

describe('Footer', () => {
  it.each(LANGS)('renders for %s with legal links and socials', async (lang) => {
    const html = await render(Footer, localizePath('/', lang), { props: { lang, route: '/' } });
    expect(html).toContain('<footer');
    expect(html).toContain(localizePath('/privacy', lang));
    expect(html).toContain(localizePath('/terms', lang));
    expect(html).not.toContain('undefined');
  });

  it('links every social profile with rel=noopener', async () => {
    const html = await render(Footer, '/', { props: { lang: 'en', route: '/' } });
    for (const social of SOCIALS) {
      expect(html, social.label).toContain(social.href);
    }
    expect(html).toContain('noopener');
    expect(html).toContain('is-grid');
  });

  it('shows the legal entity and the current year', async () => {
    const html = await render(Footer, '/', { props: { lang: 'en', route: '/' } });
    expect(text(html)).toContain(SITE.legalName);
    expect(text(html)).toMatch(/\b20\d{2}\b/);
  });
});

describe('PageNav', () => {
  it('holds the home next-page arrow for the foot of the page', async () => {
    const home = await render(PageNav, '/');
    expect(home).toContain('page-nav--end-only');
    expect(home).toMatch(/page-nav__btn--next[^>]*aria-hidden="true"/);
    expect(home).toMatch(/page-nav__btn--next[^>]*\binert\b/);
    expect(home).toContain('href="/features"');

    const es = await render(PageNav, '/es');
    expect(es).toContain('page-nav--end-only');
    expect(es).toContain('href="/es/features"');
  });

  it('leaves other tour pages with the arrows in view', async () => {
    const features = await render(PageNav, '/features');
    expect(features).toContain('page-nav__btn--prev');
    expect(features).toContain('page-nav__btn--next');
    expect(features).not.toContain('page-nav--end-only');
    expect(features).not.toMatch(/page-nav__btn--next[^>]*aria-hidden="true"/);
    expect(features).not.toMatch(/page-nav__btn--next[^>]*\binert\b/);
  });
});

describe('SocialLinks', () => {
  it('renders every profile as a branded outbound link', async () => {
    const html = await render(SocialLinks, '/');
    expect(html).toContain('aria-label="Social"');
    for (const social of SOCIALS) {
      expect(html, social.label).toContain(`href="${social.href}"`);
      expect(html, social.label).toContain(`aria-label="${social.label}"`);
    }
    expect(html).toContain('noopener');
  });

  it('can sit start-aligned in the footer', async () => {
    const html = await render(SocialLinks, '/', { props: { align: 'start' } });
    expect(html).toContain('is-start');
  });

  it('can lay out as a 3×3 grid', async () => {
    const html = await render(SocialLinks, '/', { props: { layout: 'grid' } });
    expect(html).toContain('is-grid');
  });

  it('drops the nav landmark when it is a second copy of the same links', async () => {
    const html = await render(SocialLinks, '/', {
      props: { landmark: false, label: 'Follow Nexow' },
    });
    expect(html).not.toContain('<nav');
    expect(html).toContain('role="group"');
    expect(html).toContain('aria-label="Follow Nexow"');
  });
});

describe('Hero', () => {
  it('includes the social row with every profile', async () => {
    const html = await render(Hero, '/', { props: { lang: 'en' } });
    expect(html).toContain('hero__socials');
    for (const social of SOCIALS) {
      expect(html, social.label).toContain(social.href);
    }
  });

  it('renders starter chips, a more control, and animated dashboard boards', async () => {
    const html = await render(Hero, '/', { props: { lang: 'en' } });
    expect(html).toContain('data-prompt-example');
    expect(html).toContain('data-hero-more');
    expect(html).toContain('data-hero-board="trading"');
    expect(html).toContain('data-hero-scene="trading"');
    expect((html.match(/data-prompt-example/g) ?? []).length).toBeGreaterThan(16);
  });

  it('renders hero boards and routes chips to the desk scenes', async () => {
    const html = await render(Hero, '/', { props: { lang: 'en' } });
    expect(html).toContain('data-hero-board="trading"');
    expect(html).toContain('data-hero-scene="portfolio"');
    expect(html).toContain('data-hero-scene="macro"');
    expect(html).toContain('data-hero-scene="onchain"');
    expect((html.match(/data-hero-board="/g) ?? []).length).toBe(8);
  });
});

describe('Logo and BrandMark', () => {
  it.each(['auto', 'light', 'dark'] as const)('renders the %s logo tone', async (tone) => {
    const html = await render(Logo, '/', { props: { lang: 'en', tone } });
    expect(html).toContain('href="/"');
    expect(html).not.toContain('undefined');
  });

  it('links the logo at the localized home route', async () => {
    const html = await render(Logo, '/es', { props: { lang: 'es' } });
    expect(html).toContain('href="/es"');
  });

  it.each(['auto', 'light', 'dark'] as const)('renders the %s brand mark', async (tone) => {
    const html = await render(BrandMark, '/', { props: { tone, title: 'Nexow' } });
    expect(html).toContain('alt="Nexow"');
    expect(html).toMatch(/src="\/favicon(-black)?\.png"/);
    expect(html).not.toContain('undefined');
  });

  it('picks the mark that reads on the surface it sits on', async () => {
    // light tone = white mark for a dark background, and the reverse.
    expect(await render(BrandMark, '/', { props: { tone: 'light' } })).toContain('/favicon.png');
    expect(await render(BrandMark, '/', { props: { tone: 'dark' } })).toContain('/favicon-black.png');
  });
});

describe('ThemeToggle', () => {
  it('labels both directions for assistive tech', async () => {
    const html = await render(ThemeToggle, '/', {
      props: { toDarkLabel: 'Switch to dark mode', toLightLabel: 'Switch to light mode' },
    });
    expect(html).toContain('Switch to dark mode');
    expect(html).toContain('Switch to light mode');
    expect(html).toContain('<button');
  });
});

describe('FeatureCard', () => {
  it('renders copy and links when given an href', async () => {
    const html = await render(FeatureCard, '/features', {
      props: { icon: 'bot', title: 'Bots', body: 'Automate things', href: SITE.appUrl },
    });
    expect(html).toContain('Bots');
    expect(html).toContain('Automate things');
    expect(html).toContain(SITE.appUrl);
  });

  it('renders as a plain card without an href', async () => {
    const html = await render(FeatureCard, '/features', {
      props: { icon: 'bot', title: 'Bots', body: 'Automate things' },
    });
    expect(html).toContain('Bots');
    expect(html).not.toContain('<a ');
  });
});

describe('Hex', () => {
  it.each(['sm', 'md', 'lg', 'xl'] as const)('renders the %s medallion', async (size) => {
    const html = await render(Hex, '/plans', {
      props: { icon: 'award', from: '#cd9a67', to: '#8c5a2b', size },
    });
    expect(html).toContain('<svg');
    expect(html).toContain('#cd9a67');
    expect(html).not.toContain('undefined');
  });

  it('renders a locked medallion', async () => {
    const html = await render(Hex, '/plans', { props: { icon: 'crown', locked: true } });
    expect(html).toContain('<svg');
    expect(html).toContain('data-locked="true"');
    expect(html).not.toContain('undefined');
  });

  it('leaves the gradient stops unset when none are given, so the CSS fallback applies', async () => {
    const html = await render(Hex, '/plans', { props: { icon: 'award' } });
    expect(html).not.toContain('--from');
    expect(html).not.toContain('--to');
    expect(html).toContain('--hex-ink');
  });
});

describe('BlogCard', () => {
  const props = {
    lang: 'en' as const,
    slug: 'a-post',
    title: 'A post title',
    description: 'A description',
    pubDate: new Date('2026-03-04T00:00:00Z'),
    category: 'release' as const,
  };

  it('links at the localized post route and shows the metadata', async () => {
    const html = await render(BlogCard, '/blog', { props });
    expect(html).toContain('href="/blog/a-post"');
    expect(html).toContain('A post title');
    expect(html).toContain('A description');
    expect(html).toContain('Release');
  });

  it('formats the date in the post’s own locale', async () => {
    const html = await render(BlogCard, '/ja/blog', { props: { ...props, lang: 'ja' } });
    expect(html).toContain('href="/ja/blog/a-post"');
    expect(html).toContain('2026');
  });

  it('labels a non-release article by its category', async () => {
    const html = await render(BlogCard, '/blog', { props: { ...props, category: 'teardown' } });
    expect(html).toContain('Teardown');
  });

  it('falls back to the English label in a locale that has not translated them', async () => {
    const html = await render(BlogCard, '/ja/blog', {
      props: { ...props, lang: 'ja', category: 'deep-dive' },
    });
    expect(html).toContain('Deep dive');
  });

  it('renders a featured card and an anchor id', async () => {
    const html = await render(BlogCard, '/blog', { props: { ...props, featured: true, id: 'first' } });
    expect(html).toContain('id="first"');
    expect(html).not.toContain('undefined');
  });
});

describe('ConnectorCard', () => {
  const t = useContent('en').connectorsPage;

  it('renders a live trading venue with its badges', async () => {
    const connector = CONNECTORS.find((c) => c.status === 'live' && c.trading)!;
    const html = await render(ConnectorCard, '/connectors', { props: { c: connector, t } });
    expect(html).toContain(connector.name);
    expect(html).toContain(connector.logo);
    expect(html).toContain(t.tradingBadge);
  });

  it('marks a coming-soon venue', async () => {
    const connector = CONNECTORS.find((c) => c.status === 'soon')!;
    const html = await render(ConnectorCard, '/connectors', { props: { c: connector, t } });
    expect(html).toContain(connector.name);
    expect(html).toContain(t.comingSoon);
  });

  it('renders every connector in the catalog without leaking undefined', async () => {
    for (const connector of CONNECTORS) {
      const html = await render(ConnectorCard, '/connectors', { props: { c: connector, t } });
      const body = text(html);
      expect(body, connector.id).not.toMatch(/\bundefined\b/);
      expect(body, connector.id).toContain(connector.name);
    }
  });

  it('carries the filter facets the page filters on', async () => {
    const connector = CONNECTORS.find((c) => c.assets.length > 0)!;
    const html = await render(ConnectorCard, '/connectors', { props: { c: connector, t } });
    expect(attrs(html, 'article', 'data-category')[0] ?? html).toContain(connector.category);
  });
});

describe('ConnectorMarquee', () => {
  it.each(['light', 'dark'] as const)('renders the %s tone with connector logos', async (tone) => {
    const html = await render(ConnectorMarquee, '/', { props: { tone } });
    expect(html).toContain('/connectors/');
    expect(html).not.toContain('undefined');
  });
});

describe('FeatureMap', () => {
  it.each(['en', 'es', 'ar'] as const)('renders the grouped explorer for %s', async (lang) => {
    const content = useContent(lang);
    const groups = resolveFeatureMapGroups(content.home.features, useContent('en').home.features);
    const html = await render(FeatureMap, localizePath('/', lang), {
      props: {
        lang,
        groups,
        hint: 'Tap a surface',
        moreLabel: 'More',
        openLabel: 'Open',
        closeLabel: 'Close',
      },
    });
    for (const group of groups) {
      for (const node of group.nodes) {
        expect(html, `${lang} → ${node.id}`).toContain(node.title);
      }
    }
    expect(html).toContain(SITE.appUrl);
    expect(text(html)).not.toMatch(/\bundefined\b/);
  });
});

describe('Compliance', () => {
  it.each(['en', 'es', 'ja', 'ar'] as const)(
    'names every audited standard and its status in %s',
    async (lang) => {
      const t = useContent(lang).securityPage!.compliance;
      const html = await render(Compliance, localizePath('/security', lang), { props: { lang } });

      for (const item of t.items) {
        expect(html, `${lang} → ${item.standard}`).toContain(item.standard);
        expect(text(html), `${lang} → ${item.standard} status`).toContain(item.status);
      }
      expect(text(html)).toContain(t.note);
      expect(text(html)).not.toMatch(/\bundefined\b/);
    },
  );

  it('anchors the section so the page nav can reach it', async () => {
    const html = await render(Compliance, '/security', { props: { lang: 'en' } });
    expect(html).toContain('id="compliance"');
  });

  it('points the report request at the localized contact page', async () => {
    const html = await render(Compliance, '/es/security', { props: { lang: 'es' } });
    expect(html).toContain(localizePath('/contact', 'es'));
  });

  it('titles each standard as a heading rather than loose text', async () => {
    // The section sits between h1 and the principles h2s; standards are h3s so
    // the outline stays continuous for screen readers.
    const html = await render(Compliance, '/security', { props: { lang: 'en' } });
    for (const item of useContent('en').securityPage!.compliance.items) {
      expect(html, item.standard).toMatch(new RegExp(`<h3[^>]*>\\s*${item.standard}`));
    }
  });
});

describe('Privacy', () => {
  it.each(['en', 'de', 'he'] as const)('shows the trust marks for %s', async (lang) => {
    const t = useContent(lang).home.privacy;
    const html = await render(Privacy, localizePath('/', lang), { props: { lang } });

    expect(text(html)).toContain(t.certificationsLabel);
    for (const mark of t.certifications) {
      expect(html, `${lang} → ${mark}`).toContain(mark);
    }
  });

  it('links the trust marks through to the security page', async () => {
    const html = await render(Privacy, '/', { props: { lang: 'en' } });
    expect(html).toContain('/security');
  });
});
