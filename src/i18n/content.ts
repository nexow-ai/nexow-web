import type { Lang } from './config';

/* ------------------------------------------------------------------ *
 * Types
 * ------------------------------------------------------------------ */
export interface NavLink {
  label: string;
  href: string; // canonical (English-shaped) route or hash
}

export interface Feature {
  icon: string;
  title: string;
  body: string;
}

export interface Step {
  n: string;
  title: string;
  body: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface PlanTier {
  name: string;
  tagline: string;
  /** Per-month price billed monthly, e.g. '$9.99'. Free uses '$0', custom uses 'Custom'. */
  priceMonthly: string;
  /** Per-month price when billed yearly (2 months free), e.g. '$8.33'. */
  priceYearly: string;
  /** Annual total shown as a caption on the yearly toggle, e.g. '$99.90 billed yearly'. */
  billedYearly?: string;
  /** Trailing unit after the price, e.g. 'forever', '/mo'. Empty for custom tiers. */
  cadence: string;
  /** Optional ribbon: 'Best return' (featured) or 'Coming soon' (paid, pre-launch). */
  badge?: string;
  /** Small mono stat line, e.g. ['10K credits', '10 bots', '3 agents']. */
  stats?: string[];
  /** Lead-in above the feature list, e.g. 'Everything in Free, plus:'. */
  note?: string;
  cta: string;
  ctaHref: string;
  featured?: boolean;
  features: string[];
}

/** A product pillar card with a live / coming-soon status (Automate & Network sections). */
export interface PillarItem {
  icon: string;
  title: string;
  body: string;
  status: 'live' | 'soon';
}

export interface SiteContent {
  nav: {
    links: NavLink[];
    launch: string;
    menu: string;
    close: string;
  };
  footer: {
    tagline: string;
    columns: { title: string; links: NavLink[] }[];
    rights: string;
    disclaimer: string;
    builtWith: string;
  };
  home: {
    meta: { title: string; description: string };
    hero: {
      badge: string;
      titleLead: string;
      titleGradient: string;
      titleTail: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
      note: string;
      promptExample: string;
      promptPlaceholder: string;
    };
    ticker: { label: string };
    /**
     * Real-screenshot demo section. Optional: locales without a translation
     * fall back to the English strings built into AppShowcase.astro.
     * `shots` must keep the component's order: trading desk, project board, founder HQ.
     */
    appShowcase?: {
      eyebrow: string;
      title: string;
      subtitle: string;
      badge: string;
      cta: string;
      ctaNote: string;
      shots: { label: string; prompt: string; alt: string; chip: string; caption: string }[];
    };
    trust: string;
    stats: { n: number; prefix?: string; suffix?: string; label: string }[];
    showcase: {
      eyebrow: string;
      title: string;
      subtitle: string;
      generatedBadge: string;
      tabs: { label: string; prompt: string; caption: string }[];
    };
    features: {
      eyebrow: string;
      title: string;
      subtitle: string;
      items: Feature[];
    };
    how: {
      eyebrow: string;
      title: string;
      subtitle: string;
      steps: Step[];
    };
    automate: {
      eyebrow: string;
      title: string;
      subtitle: string;
      liveLabel: string;
      soonLabel: string;
      items: PillarItem[];
      /** Decorative agent-harness chips shown on the Agents card. */
      harnessChips: string[];
      /** Decorative example prompts shown on the Copilot card. */
      copilotPrompts: string[];
    };
    connectors: {
      eyebrow: string;
      title: string;
      subtitle: string;
      note: string;
      count: number;
      countLabel: string;
      groups: Record<ConnectorGroupKey, string>;
    };
    network: {
      eyebrow: string;
      title: string;
      subtitle: string;
      liveLabel: string;
      soonLabel: string;
      items: PillarItem[];
      accountBadge: string;
      accountTitle: string;
      accountBody: string;
      accountPoints: string[];
      accountCta: string;
    };
    plans: {
      eyebrow: string;
      title: string;
      subtitle: string;
      cta: string;
    };
    privacy: {
      eyebrow: string;
      title: string;
      body: string;
      points: string[];
      cta: string;
    };
    roadmap: {
      eyebrow: string;
      title: string;
      subtitle: string;
      shipped: string;
      soon: string;
      items: { status: 'shipped' | 'soon'; title: string; body: string }[];
    };
    faq: {
      eyebrow: string;
      title: string;
      subtitle: string;
      items: Faq[];
    };
    cta: {
      title: string;
      subtitle: string;
      primary: string;
      secondary: string;
    };
  };
  features: {
    meta: { title: string; description: string };
    hero: { badge: string; title: string; subtitle: string };
    groups: { title: string; body: string; items: Feature[] }[];
  };
  plansPage: {
    meta: { title: string; description: string };
    hero: { badge: string; title: string; subtitle: string };
    comingSoon: string;
    highlights: {
      title: string;
      items: { icon: string; title: string; body: string }[];
    };
    included: { title: string; items: string[] };
    billing: { monthly: string; yearly: string; save: string };
    tiers: PlanTier[];
    faqTitle: string;
    faq: Faq[];
  };
  connectorsPage: {
    meta: { title: string; description: string };
    hero: { badge: string; title: string; subtitle: string };
    searchPlaceholder: string;
    /** Mobile toggle label for the category/status filter panel. */
    filters: string;
    all: string;
    categories: { finance: string; data: string; socials: string };
    status: { all: string; live: string; soon: string };
    kinds: Record<string, string>;
    assets: Record<string, string>;
    visit: string;
    /** Result count; contains a `{n}` placeholder. */
    results: string;
    empty: string;
    /** Homepage connectors-section CTA to the full gallery. */
    exploreCta: string;
    /** Hero count line labels: "{n} live · {m} in the catalog". */
    countLive: string;
    countCatalog: string;
  };
  /** Privacy Policy page (standalone legal copy). */
  privacyPage: {
    badge: string;
    title: string;
    subtitle: string;
    meta: { title: string; description: string };
    updated: string;
    sections: { h: string; p: string }[];
  };
  about: {
    meta: { title: string; description: string };
    hero: { badge: string; title: string; subtitle: string };
    missionTitle: string;
    mission: string[];
    valuesTitle: string;
    values: Feature[];
    ctaTitle: string;
    ctaBody: string;
    cta: string;
  };
  blog: {
    meta: { title: string; description: string };
    title: string;
    subtitle: string;
    latest: string;
    readMore: string;
    backToBlog: string;
    published: string;
    updated: string;
    minRead: string;
  };
  notFound: {
    title: string;
    body: string;
    cta: string;
  };
}

/* ------------------------------------------------------------------ *
 * Shared, language-neutral data
 * ------------------------------------------------------------------ */
export const CONNECTOR_GROUPS = [
  { key: 'fx', venues: ['OANDA', 'LMAX', 'FXCM'] },
  { key: 'crypto', venues: ['Binance', 'Coinbase', 'Kraken', 'Deribit', 'BitMEX'] },
  {
    key: 'equities',
    venues: ['Interactive Brokers', 'Alpaca', 'TradeStation', 'Polygon', 'Rithmic', 'IQFeed'],
  },
  { key: 'prediction', venues: ['Kalshi', 'Polymarket'] },
  {
    key: 'data',
    venues: ['Alpha Vantage', 'Intrinio', 'Trading Economics', 'Postgres', 'ClickHouse', 'Qdrant'],
  },
  { key: 'socials', venues: ['X', 'YouTube', 'Discord', 'Telegram', 'Spotify'] },
] as const;

export type ConnectorGroupKey = (typeof CONNECTOR_GROUPS)[number]['key'];

export const CONNECTORS = CONNECTOR_GROUPS.flatMap((g) => g.venues);

import { en } from './locales/en';
import { es } from './locales/es';
import { fr } from './locales/fr';
import { it } from './locales/it';
import { de } from './locales/de';
import { nl } from './locales/nl';
import { pt } from './locales/pt';
import { zh } from './locales/zh';
import { ja } from './locales/ja';
import { ar } from './locales/ar';
import { he } from './locales/he';
import { ko } from './locales/ko';
import { ru } from './locales/ru';
import { uk } from './locales/uk';
import { ms } from './locales/ms';
import { el } from './locales/el';
import { tr } from './locales/tr';

export const content: Record<Lang, SiteContent> = { en, es, fr, it, de, nl, pt, zh, ja, ar, he, ko, ru, uk, ms, el, tr };

export function useContent(lang: Lang): SiteContent {
  return content[lang];
}
