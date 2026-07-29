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

/** Standalone legal document page (privacy, terms, cookies, imprint, AUP). */
export interface LegalPageContent {
  badge: string;
  title: string;
  subtitle: string;
  meta: { title: string; description: string };
  updated: string;
  /** Shown when a localized UI falls back to English legal text. */
  governingNote?: string;
  sections: { h: string; paragraphs: string[] }[];
}

/** Dedicated /community marketing page copy. */
export interface CommunityPageContent {
  meta: { title: string; description: string };
  hero: {
    badge: string;
    titleLead: string;
    titleGradient: string;
    titleTail: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    chips: string[];
  };
  social: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Feature[];
  };
  research: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Feature[];
  };
  grow: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Feature[];
  };
  marketplace: {
    eyebrow: string;
    title: string;
    subtitle: string;
    intro: string;
    pillars: Feature[];
    railTitle: string;
    railBody: string;
    railSteps: { n: string; title: string; body: string }[];
    railNotes: string[];
    kindsTitle: string;
    kinds: { label: string; body: string }[];
  };
  dao: {
    eyebrow: string;
    badge: string;
    title: string;
    subtitle: string;
    body: string;
    pillars: Feature[];
    previewTitle: string;
    previewBadge: string;
    forLabel: string;
    votesLabel: string;
    proposals: { title: string; tag: string; pct: number; votes: number }[];
    footer: string;
  };
  cta: {
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
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

/**
 * Reputation & rewards copy for the Plans page. The NUMBERS all live in
 * `src/data/gamification.ts` (mirrored from the app); this is purely the words
 * wrapped around them, so a locale never has to restate a threshold or a price.
 */
export interface RewardsContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  /** Status chips: what ships today vs what ships with the DAO. */
  live: string;
  planned: string;
  plannedNote: string;
  points: {
    title: string;
    body: string;
    /** "Reputation" — the score's name in the app. */
    label: string;
    /** "pts" */
    unit: string;
    tableTitle: string;
    /** Column header over the weights, e.g. 'pts each'. */
    perAction: string;
    bonusTitle: string;
    bonusBody: string;
    /** Interactive simulator. */
    simTitle: string;
    simBody: string;
    simReset: string;
    simNext: string;
    /** Shown instead of simNext once the top band is reached. */
    simMaxed: string;
    simHint: string;
  };
  levels: {
    title: string;
    body: string;
    /** "from {n} pts" */
    at: string;
    /** Bare noun for the teaser strip, e.g. 'levels'. */
    unit: string;
    names: Record<'bronze' | 'silver' | 'gold' | 'platinum' | 'legend', string>;
  };
  badges: {
    title: string;
    body: string;
    filters: Record<'all' | 'tiered' | 'rare' | 'legendary', string>;
    /** "{n} badges" */
    count: string;
    /** Bare noun for the teaser strip, e.g. 'badges'. */
    unit: string;
    /** Card back labels. */
    tracks: string;
    unlocks: string;
    /** "+{n} pts per tier" / "+{n} pts". */
    worth: string;
    tiers: Record<'bronze' | 'silver' | 'gold', string>;
    rarity: Record<'tiered' | 'rare' | 'legendary', string>;
    rarityBody: Record<'tiered' | 'rare' | 'legendary', string>;
    flipHint: string;
    /** One label per tracked stat — the badge's "Tracks" line. */
    stats: Record<string, string>;
    /** One name per badge id (18 tiered + 10 rare + 6 legendary). */
    names: Record<string, string>;
  };
  ledger: {
    title: string;
    body: string;
    tokenName: string;
    tokenNote: string;
    colUnlock: string;
    colCount: string;
    colPoints: string;
    colCredits: string;
    colTokens: string;
    rows: Record<'bronze' | 'silver' | 'gold' | 'rare' | 'legendary', string>;
    /** "Reach {level}" for the level-up rows. */
    levelRow: string;
    totalTitle: string;
    totalBody: string;
    creditsLabel: string;
    tokensLabel: string;
    /** "≈ {usd} of AI generation at list price". */
    worth: string;
    /** "= {n} months of Sponsor-grade generation". */
    months: string;
  };
  dao: {
    title: string;
    body: string;
    cards: { icon: string; title: string; body: string }[];
  };
  credits: {
    eyebrow: string;
    title: string;
    body: string;
    /** "{usd} per 1,000,000 credits". */
    rate: string;
    rateNote: string;
    tokensTitle: string;
    tokensNote: string;
    /** "tokens per credit" */
    tokensUnit: string;
    packsTitle: string;
    packsNote: string;
    /** "Save {n}%" */
    packSave: string;
    /** "credits" under the pack number. */
    packUnit: string;
    packTtl: string;
    packCta: string;
  };
}

/**
 * One animated use case in the Bots & Agents deep-dive. `scene` selects the SVG
 * scene drawn by UseCaseScene.astro — keep the key, translations only touch the
 * prose. `kind` decides whether the card is badged as a bot or an agent.
 */
export interface UseCaseItem {
  scene: 'news' | 'social' | 'monitor' | 'alerts' | 'reason' | 'execute' | 'pipeline' | 'markets';
  kind: 'bot' | 'agent';
  title: string;
  body: string;
  /** Mono one-liner under the scene, e.g. `every 1h → web_search → notify`. */
  recipe: string;
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
      /**
       * Optional fourth beat under the three-line headline ("In seconds — not
       * weeks or months."). Set apart typographically because four equal lines
       * stop reading as a slogan. Locales without it just show three.
       */
      titleKicker?: string;
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
      /** Flat list used for schema / locales that have not migrated to groups yet. */
      items: Feature[];
      /**
       * Optional product-area groups. Home FeatureMap resolves node copy from
       * groups (preferred) or items by stable icon id.
       */
      groups?: { title: string; items: Feature[] }[];
      /** Chrome strings for the interactive home FeatureMap popovers. */
      map?: {
        hint: string;
        moreLabel: string;
        openLabel: string;
        closeLabel: string;
      };
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
    /**
     * Bots & Agents deep-dive: the two kinds of teammate, a scroll-scrubbed
     * anatomy of one run, and the use-case gallery. Optional — locales without
     * a translation fall back to the English strings (see BotsAgents.astro).
     */
    botsAgents?: {
      eyebrow: string;
      title: string;
      subtitle: string;
      /** [bots, agents] — order matters, the component pairs them with visuals. */
      kinds: {
        badge: string;
        title: string;
        body: string;
        points: string[];
      }[];
      run: {
        eyebrow: string;
        title: string;
        subtitle: string;
        /** Nudge under the diagram telling people the stages follow the scroll. */
        hint: string;
        /** Four inputs, in diagram order: web, socials, markets, stores. */
        sources: string[];
        /** Six harness pieces: model, memory, skills, tools, knowledge, triggers. */
        harness: string[];
        /** Four outputs, in diagram order: widgets, inbox, webhook, database. */
        deliveries: string[];
        sourcesLabel: string;
        harnessLabel: string;
        deliveriesLabel: string;
        /** Exactly four — the diagram scrubs through them as you scroll. */
        stages: { n: string; title: string; body: string }[];
      };
      cases: {
        eyebrow: string;
        title: string;
        subtitle: string;
        botLabel: string;
        agentLabel: string;
        items: UseCaseItem[];
      };
      more: {
        title: string;
        items: string[];
      };
      cta: string;
      ctaNote: string;
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
  /**
   * Dedicated Community marketing page (/community).
   */
  communityPage: CommunityPageContent;
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
    /** Full feature comparison. Rows/cells come from `src/data/gamification.ts`. */
    matrix: {
      eyebrow: string;
      title: string;
      subtitle: string;
      /** Header over the row-label column. */
      feature: string;
      /** Chip on rows that are defined but not live yet. */
      soon: string;
      /** Helper above the mobile plan picker. */
      pick: string;
      groups: Record<string, string>;
      rows: Record<string, string>;
      values: Record<string, string>;
    };
    faqTitle: string;
    faq: Faq[];
  };
  /** Reputation, badges and the credit / DAO-token reward ladder (Plans page). */
  rewards: RewardsContent;
  connectorsPage: {
    meta: { title: string; description: string };
    hero: { badge: string; title: string; subtitle: string };
    searchPlaceholder: string;
    /** Mobile toggle label for the category/status filter panel. */
    filters: string;
    all: string;
    categories: { finance: string; wallets: string; services: string; data: string; socials: string };
    status: { all: string; live: string; soon: string };
    /** Trading-capable vs data/read-only connectors. */
    capability: { all: string; trading: string; readonly: string };
    /** Screen-reader / group labels for extra filter rows. */
    filterSubcategories: string;
    /** @deprecated Prefer filterSubcategories; kept for asset chip a11y if reintroduced. */
    filterAssets: string;
    filterAlpha: string;
    kinds: Record<string, string>;
    assets: Record<string, string>;
    visit: string;
    /** Card hover cue — open the detail modal. */
    openDetails: string;
    /** Modal / card chip for not-yet-ready venues. */
    comingSoon: string;
    /** Modal hint when the connect CTA is unavailable. */
    comingSoonHint: string;
    /** Card chip for connectors that support order routing. */
    tradingBadge: string;
    /** Primary modal CTA — opens the app with this connector selected. */
    connect: string;
    /** Secondary modal CTA — venue website in a new tab. */
    visitWebsite: string;
    /** Modal dismiss control (aria + button). */
    close: string;
    /** Result count; contains a `{n}` placeholder. */
    results: string;
    empty: string;
    /** Homepage connectors-section CTA to the full gallery. */
    exploreCta: string;
    /** Hero count line labels: "{n} live · {m} in the catalog". */
    countLive: string;
    countCatalog: string;
  };
  /**
   * Standalone legal documents. English is the source of truth; other locales
   * may omit these and LegalDocPage falls back to English (governing language).
   */
  privacyPage?: LegalPageContent;
  termsPage?: LegalPageContent;
  cookiesPage?: LegalPageContent;
  legalPage?: LegalPageContent;
  acceptableUsePage?: LegalPageContent;
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
