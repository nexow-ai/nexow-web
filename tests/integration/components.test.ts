import { describe, expect, it } from 'vitest';
import BlogCard from '../../src/components/BlogCard.astro';
import BrandMark from '../../src/components/BrandMark.astro';
import Button from '../../src/components/Button.astro';
import ConnectorCard from '../../src/components/ConnectorCard.astro';
import ConnectorMarquee from '../../src/components/ConnectorMarquee.astro';
import FeatureCard from '../../src/components/FeatureCard.astro';
import FeatureMap from '../../src/components/FeatureMap.astro';
import Footer from '../../src/components/Footer.astro';
import Header from '../../src/components/Header.astro';
import Hex from '../../src/components/Hex.astro';
import Icon from '../../src/components/Icon.astro';
import Logo from '../../src/components/Logo.astro';
import PageHero from '../../src/components/PageHero.astro';
import SectionHeading from '../../src/components/SectionHeading.astro';
import ThemeToggle from '../../src/components/ThemeToggle.astro';
import { ICON_PATHS } from '../../src/components/icon-paths';
import { CONNECTORS } from '../../src/data/connectors';
import { SITE, languages } from '../../src/i18n/config';
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
    for (const name of ['youtube', 'tiktok']) {
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
    for (const social of SOCIAL_HREFS) {
      expect(html, social).toContain(social);
    }
    expect(html).toContain('noopener');
  });

  it('shows the legal entity and the current year', async () => {
    const html = await render(Footer, '/', { props: { lang: 'en', route: '/' } });
    expect(text(html)).toContain(SITE.legalName);
    expect(text(html)).toMatch(/\b20\d{2}\b/);
  });
});

const SOCIAL_HREFS = ['https://x.com/nexowofficial', 'https://github.com/nexow-ai'];

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
    tags: ['product', 'ai'],
  };

  it('links at the localized post route and shows the metadata', async () => {
    const html = await render(BlogCard, '/blog', { props });
    expect(html).toContain('href="/blog/a-post"');
    expect(html).toContain('A post title');
    expect(html).toContain('A description');
    expect(html).toContain('product');
  });

  it('formats the date in the post’s own locale', async () => {
    const html = await render(BlogCard, '/ja/blog', { props: { ...props, lang: 'ja' } });
    expect(html).toContain('href="/ja/blog/a-post"');
    expect(html).toContain('2026');
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
