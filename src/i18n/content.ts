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
  referrals: {
    eyebrow: string;
    badge: string;
    title: string;
    subtitle: string;
    body: string;
    pillars: Feature[];
    cta: string;
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

/**
 * Dedicated /community-rules page copy — the house rules for the feed, the
 * marketplace and the automations. Every list here is order-sensitive: the
 * page pairs entries with animated art by index (rule glyphs, ladder rungs,
 * legal links), so translations reorder wording, never entries.
 */
export interface CommunityRulesPageContent {
  meta: { title: string; description: string };
  hero: {
    badge: string;
    titleLead: string;
    titleGradient: string;
    titleTail: string;
    subtitle: string;
    /** "Last updated …" line under the CTAs. */
    updated: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  /** The three-word summary, for people who will not read ten rules. */
  tldr: {
    eyebrow: string;
    title: string;
    subtitle: string;
    /** Exactly three — paired with the useful / honest / human glyph trio. */
    items: { title: string; body: string }[];
  };
  rules: {
    eyebrow: string;
    title: string;
    subtitle: string;
    /**
     * Eight rules, numbered by the component. `note` is the mono one-liner
     * under the body — the rule restated as something you would say out loud.
     */
    items: { title: string; body: string; note: string }[];
  };
  /** Rules for bots and agents, whose owners are still humans. */
  bots: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Feature[];
  };
  /** The escalation ladder: nudge → pause → suspension → door. */
  enforcement: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: Step[];
    note: string;
  };
  report: {
    eyebrow: string;
    title: string;
    subtitle: string;
    /** [report, appeal] — order matters, the component gives them CTAs. */
    cards: { title: string; body: string; cta: string }[];
    legalTitle: string;
    /** Terms, Acceptable Use, Privacy — hrefs live in the component. */
    legal: { label: string; body: string }[];
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
  /** One-line glosses for the plans-page teaser strip. */
  teaser: {
    badges: string;
    levels: string;
    credits: string;
    tokens: string;
  };
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
    /**
     * Imperative how-to per tracked stat — the action that earns the badge.
     * Optional so partial locales compile; `useContent` merges English at runtime.
     */
    how?: Record<string, string>;
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
    /**
     * NXW mint / supply / utility facts for the plans ledger.
     * Optional so partial locales fall back to English via `useContent` merge.
     */
    tokenomics?: {
      eyebrow: string;
      title: string;
      body: string;
      /** Short chip labels under the headline, e.g. Immutable. */
      traits: string[];
      /** Big number tiles — label + value + optional note. */
      facts: { label: string; value: string; note: string }[];
      usesTitle: string;
      uses: { icon: string; title: string; body: string }[];
    };
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
    /** Aria label when the page is light (action switches to dark). */
    themeToDark?: string;
    /** Aria label when the page is dark (action switches to light). */
    themeToLight?: string;
    /** Name of the home route in the page tour (it has no link table entry). */
    home?: string;
    /** Aria labels for the fixed corner page arrows (see `PageNav.astro`). */
    prevPage?: string;
    nextPage?: string;
  };
  footer: {
    tagline: string;
    columns: { title: string; links: NavLink[] }[];
    rights: string;
    disclaimer: string;
    /** Live service-health badge next to the footer clock. */
    status?: string;
    /**
     * Newsletter signup in the site footer. Optional so locales can omit it and
     * fall back to English via `useContent` merge.
     */
    newsletter?: {
      eyebrow: string;
      title: string;
      subtitle: string;
      placeholder: string;
      submit: string;
      submitting: string;
      success: string;
      error: string;
      invalid: string;
    };
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
      /**
       * Starter prompts under the hero composer. Clicking one fills the
       * textarea and re-points the launch CTA at that prompt. Optional so
       * locales can omit them and fall back to English via `useContent` merge.
       * `icon` is a stable `icon-paths` id (locale-agnostic); the first
       * `HERO_EXAMPLES_VISIBLE` entries show up front, the rest behind “more”.
       */
      promptExamplesLabel?: string;
      promptExamplesMore?: string;
      promptExamples?: { icon: string; label: string; prompt: string }[];
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
       * Optional product-area groups. Home FeatureMap uses groups for layout
       * and resolves node copy by stable icon id (items as fallback).
       */
      groups?: { title: string; items: Feature[] }[];
      /** Chrome strings for the interactive home FeatureMap explorer. */
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
      /** May contain `{live}` / `{total}` — filled from the generated catalog. */
      note: string;
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
  /** House rules for the community, marketplace and automations (/community-rules). */
  communityRulesPage: CommunityRulesPageContent;
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
    /** Toggle label for the category/status filter panel. */
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
  /**
   * Optional marketing pages. English defines them; other locales inherit via
   * `useContent` deep-merge.
   */
  contactPage?: {
    meta: { title: string; description: string };
    hero: { badge: string; title: string; subtitle: string };
    form: {
      name: string;
      email: string;
      type: string;
      types: { value: string; label: string }[];
      message: string;
      submit: string;
      submitting: string;
      success: string;
      error: string;
      /** Shown when the API is unreachable and we hand off to the mail client. */
      fallback: string;
      invalid: string;
    };
    aside: {
      title: string;
      body: string;
      channels: { label: string; value: string; href: string }[];
    };
  };
  helpPage?: {
    meta: { title: string; description: string };
    hero: { badge: string; title: string; subtitle: string };
    guides: { icon: string; title: string; body: string; href: string; cta: string }[];
    ctaTitle: string;
    ctaBody: string;
    cta: string;
  };
  securityPage?: {
    meta: { title: string; description: string };
    hero: { badge: string; title: string; subtitle: string };
    pillars: Feature[];
    principlesTitle: string;
    principles: string[];
    ctaTitle: string;
    ctaBody: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  changelogPage?: {
    meta: { title: string; description: string };
    hero: { badge: string; title: string; subtitle: string };
    empty: string;
    readMore: string;
    viewBlog: string;
  };
  invitePage?: {
    meta: { title: string; description: string };
    hero: { badge: string; title: string; subtitle: string };
    body: string;
    pillars: Feature[];
    ctaPrimary: string;
    ctaSecondary: string;
    codeLabel: string;
    codeHint: string;
  };
  useCasePages?: {
    traders: UseCaseLandingContent;
    founders: UseCaseLandingContent;
    builders: UseCaseLandingContent;
  };
  /** Plans billing waitlist (optional — EN defines; others inherit). */
  waitlist?: {
    eyebrow: string;
    title: string;
    subtitle: string;
    placeholder: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
    invalid: string;
  };
}

/** Shared shape for /for/* landing pages. */
export interface UseCaseLandingContent {
  meta: { title: string; description: string };
  hero: { badge: string; title: string; subtitle: string };
  prompt: string;
  points: string[];
  ctaPrimary: string;
  ctaSecondary: string;
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

/**
 * Deep-merge locale content onto English so incomplete translations still
 * resolve (e.g. a missing `rewards` or `plansPage.matrix` block) instead of
 * crashing pages at build/runtime. Arrays from the locale replace English.
 */
function mergeContent<T>(base: T, override: T): T {
  if (override === null || override === undefined) return base;
  if (Array.isArray(override)) return override;
  if (typeof override !== 'object' || typeof base !== 'object' || base === null) {
    return override;
  }
  const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const [key, value] of Object.entries(override as Record<string, unknown>)) {
    if (value === undefined) continue;
    const current = out[key];
    if (
      value &&
      typeof value === 'object' &&
      !Array.isArray(value) &&
      current &&
      typeof current === 'object' &&
      !Array.isArray(current)
    ) {
      out[key] = mergeContent(current, value);
    } else {
      out[key] = value;
    }
  }
  return out as T;
}

export function useContent(lang: Lang): SiteContent {
  if (lang === 'en') return content.en;
  return mergeContent(content.en, content[lang]);
}
