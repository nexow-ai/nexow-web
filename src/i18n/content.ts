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

/* ------------------------------------------------------------------ *
 * English
 * ------------------------------------------------------------------ */
const en: SiteContent = {
  nav: {
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Connectors', href: '/connectors' },
      { label: 'Plans', href: '/plans' },
      { label: 'Blog', href: '/blog' },
      { label: 'About', href: '/about' },
    ],
    launch: 'Launch app',
    menu: 'Open menu',
    close: 'Close menu',
  },
  footer: {
    tagline: 'Describe a widget. Nexow builds it, wires it to live market data, and drops it on your canvas.',
    columns: [
      {
        title: 'Product',
        links: [
          { label: 'Features', href: '/features' },
          { label: 'Plans', href: '/plans' },
          { label: 'Connectors', href: '/connectors' },
          { label: 'Automations', href: '/#automate' },
          { label: 'Community', href: '/#network' },
          { label: 'Roadmap', href: '/#roadmap' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Blog', href: '/blog' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Launch app', href: 'https://app.nexow.ai' },
          { label: 'Privacy', href: '/privacy' },
        ],
      },
    ],
    rights: 'All rights reserved.',
    disclaimer:
      'Nexow is a tooling and visualization platform. Nothing here is financial advice. Markets carry risk; trade responsibly.',
    builtWith: 'Built with Astro. Private by default.',
  },
  home: {
    meta: {
      title: 'Nexow — Build market dashboards with AI, in plain language',
      description:
        'Nexow is an AI-native workspace for markets. Describe a widget in plain English and Nexow builds it, wires it to live data from 28+ connectors, and adds cloud bots, AI agents, a maker community and XP rewards — private by default, free to start.',
    },
    hero: {
      badge: 'Preview now live',
      titleLead: 'Describe it.',
      titleGradient: 'Nexow builds it.',
      titleTail: 'Trade it.',
      subtitle:
        'An AI-native workspace for markets. Ask for any widget in plain language — Nexow writes the code, runs it safely, and streams live data onto a free-form canvas. Automate it with cloud bots and agents, then plug into a community of makers.',
      ctaPrimary: 'Launch the app',
      ctaSecondary: 'See how it works',
      note: 'No sign-up to try · Private in your browser · Or a free account with 10K credits reserved',
      promptExample: 'Show a candlestick chart of BTC-USD from Coinbase with 20 & 50 EMA and RSI below.',
      promptPlaceholder: 'Describe a widget…',
    },
    ticker: { label: 'Live connectors' },
    trust: 'One canvas for every market — FX, crypto, equities, futures, options & prediction markets.',
    stats: [
      { n: 28, suffix: '+', label: 'live market-data connectors' },
      { n: 6, label: 'asset classes on one canvas' },
      { n: 10, suffix: 'K', label: 'free AI credits reserved on sign-up' },
      { n: 30, prefix: '<', suffix: 's', label: 'from sentence to running widget' },
    ],
    showcase: {
      eyebrow: 'Showcase',
      title: 'One sentence. Any widget.',
      subtitle:
        'Charts, order books, heatmaps, odds — if you can describe it, Nexow can build it and wire it to live data.',
      generatedBadge: 'generated & live',
      tabs: [
        {
          label: 'Candles + indicators',
          prompt: 'Candlestick chart of BTC-USD from Coinbase with 20 & 50 EMA and RSI below.',
          caption: 'Streaming from Coinbase — EMAs and RSI computed in the widget.',
        },
        {
          label: 'Order-book depth',
          prompt: 'Live order-book depth for ETH-PERP on Deribit, bids vs asks.',
          caption: 'Bids and asks aggregated in real time from the Deribit book.',
        },
        {
          label: 'Correlation heatmap',
          prompt: '30-day correlation heatmap for BTC, ETH, SOL, EURUSD, gold and SPX.',
          caption: 'Cross-asset correlations recomputed as new closes arrive.',
        },
        {
          label: 'Prediction markets',
          prompt: 'Kalshi odds of a Fed rate cut at the next FOMC, with 24h change.',
          caption: 'Event probabilities streamed straight from the Kalshi order book.',
        },
      ],
    },
    features: {
      eyebrow: 'Why Nexow',
      title: 'The dashboard builds itself',
      subtitle:
        'Stop wiring charts by hand. Describe what you want to see and Nexow generates a real, running widget — then lets you refine it in natural language.',
      items: [
        {
          icon: 'sparkles',
          title: 'Natural-language widgets',
          body: 'Describe a chart, table, heatmap or signal in plain words. Nexow writes the widget source with Claude and runs it live — no boilerplate, no config files.',
        },
        {
          icon: 'shield',
          title: 'Sandboxed & safe',
          body: 'Every widget runs in an isolated iframe with a strict boundary. Generated code can render and fetch data, but never touches the rest of your workspace.',
        },
        {
          icon: 'plug',
          title: '28+ live data connectors',
          body: 'Pluggable market-data providers — OANDA, Binance, Coinbase, Kraken, Polygon, Interactive Brokers, Kalshi, Polymarket and more — route real-time data to your widgets.',
        },
        {
          icon: 'layers',
          title: 'Free-form canvas',
          body: 'Drag, resize and arrange widgets on a free-form canvas with workspaces and screens for FX, crypto, research — whatever you trade. Group widgets together and pipe live data between them with Links.',
        },
        {
          icon: 'lock',
          title: 'Private by default',
          body: 'Run fully local: add your own Anthropic key and codegen happens in your browser. Widgets, versions and logs persist in IndexedDB — nothing is sent to our servers.',
        },
        {
          icon: 'history',
          title: 'Versions & a widget library',
          body: 'Every edit is versioned with logs you can inspect. Save widgets to a personal library and reuse them across dashboards in one click.',
        },
      ],
    },
    how: {
      eyebrow: 'How it works',
      title: 'From sentence to live widget in seconds',
      subtitle: 'Three steps. No config, no build step, no glue code.',
      steps: [
        {
          n: '01',
          title: 'Describe',
          body: 'Type what you want in plain language — “an order-book depth chart for ETH-PERP on Deribit”.',
        },
        {
          n: '02',
          title: 'Generate',
          body: 'Nexow writes the widget’s source with Claude and runs it in a sandboxed iframe, wired to the connector you chose.',
        },
        {
          n: '03',
          title: 'Refine & arrange',
          body: 'Tweak it in natural language, version it, then drop it on your canvas next to everything else you watch.',
        },
      ],
    },
    automate: {
      eyebrow: 'Automate',
      title: 'Put your workspace on autopilot',
      subtitle:
        'Widgets show you the market. Bots, agents and Copilot act on it — cloud automations and AI that keep working when your tab is closed.',
      liveLabel: 'Live',
      soonLabel: 'Coming soon',
      items: [
        {
          icon: 'bot',
          title: 'Bots',
          body: 'Cloud automations that watch your data and fire signals and alerts to your widgets. Describe an alert in plain words — “tell me when BTC drops 5% in an hour” — or wire it visually with thresholds, % change, MA crossovers and digests. Bots can even watch a connected broker account for new trades.',
          status: 'live',
        },
        {
          icon: 'cpu',
          title: 'Agents',
          body: 'AI agents with a real harness — model, memory, skills, tools, knowledge and triggers. Give an agent a job and let it watch, reason and act — design yours in the visual harness builder today; cloud deploy is coming soon.',
          status: 'soon',
        },
        {
          icon: 'chat',
          title: 'Copilot',
          body: 'An AI assistant for your whole workspace. Attach a widget’s screenshot or its live data and ask — “explain this chart”, “summarize this”, “what should I watch next?”',
          status: 'soon',
        },
      ],
      harnessChips: ['model', 'memory', 'skills', 'tools', 'knowledge', 'triggers'],
      copilotPrompts: ['Explain this chart', 'Summarize this data', 'What should I watch next?'],
    },
    connectors: {
      eyebrow: 'Connectors',
      title: 'Plug into every market',
      subtitle:
        'Pluggable connectors stream live prices, order books and reference data straight into your widgets — across FX, crypto, equities, futures, options, prediction markets, databases and social feeds.',
      note: '28 connectors are live today and 56 sit in the catalog — brokers, exchanges, data providers, databases and socials. Many stream straight from your browser; the rest route through a thin proxy.',
      count: 28,
      countLabel: 'live connectors',
      groups: {
        fx: 'FX',
        crypto: 'Crypto',
        equities: 'Equities & futures',
        prediction: 'Prediction markets',
        data: 'Data & databases',
        socials: 'Socials',
      },
    },
    network: {
      eyebrow: 'The network',
      title: 'Build alone. Or plug into the network.',
      subtitle:
        'Stay fully local and private, or create a free account and join a world of makers building, sharing and trading dashboards alongside you.',
      liveLabel: 'Live',
      soonLabel: 'Coming soon',
      items: [
        {
          icon: 'users',
          title: 'Community',
          body: 'Discover and follow makers, like and comment in a social feed for market builders, and share widgets others can add straight to their library — with public maker profiles.',
          status: 'live',
        },
        {
          icon: 'store',
          title: 'Marketplace',
          body: 'Widget sharing is live in the community — next comes a marketplace to buy and sell ready-made widgets, and earn on what you build.',
          status: 'soon',
        },
        {
          icon: 'signal',
          title: 'Strategy signals',
          body: 'Publish audited track records, subscribe to signals from makers you trust, and earn on the strategies you run.',
          status: 'soon',
        },
        {
          icon: 'trophy',
          title: 'XP & rewards',
          body: 'A gamified account — every widget, bot and share earns XP. Level up, unlock badges for achievements, and turn them into reward credits.',
          status: 'soon',
        },
      ],
      accountBadge: 'Free account',
      accountTitle: 'One free account unlocks the network',
      accountBody: 'No credit card. Keep building locally whenever you want — an account is always optional.',
      accountPoints: [
        '10,000 free AI credits reserved at sign-up',
        'Cross-device cloud sync for workspaces & widgets',
        'Community, marketplace & the widget library',
        'XP, badges & reward credits as you build (coming soon)',
      ],
      accountCta: 'Create your free account',
    },
    plans: {
      eyebrow: 'Plans',
      title: 'Start free. Grow when you’re ready.',
      subtitle:
        'Build for free forever — locally with your own key, or with 10,000 credits reserved on a free account. Upgrade for more credits, bots and agents.',
      cta: 'Compare all plans',
    },
    privacy: {
      eyebrow: 'Private by design',
      title: 'Your keys. Your data. Your machine.',
      body: 'Nexow runs fully local by default. In private mode you add your own Anthropic API key and widget generation happens entirely in your browser — nothing is sent to our servers, so an unauthenticated session costs us nothing and leaks nothing.',
      points: [
        'Bring-your-own-key codegen runs client-side',
        'Widgets, versions & logs persist in your browser (IndexedDB)',
        'Direct-to-venue connections keep credentials off our infrastructure',
        'No account required to start building',
      ],
      cta: 'Read the local-mode architecture',
    },
    roadmap: {
      eyebrow: 'Roadmap',
      title: 'This is the preview. Here’s what’s next.',
      subtitle:
        'Nexow shipped a public preview of the canvas, codegen, cloud bots, accounts and the community feed. The building blocks below are landing next.',
      shipped: 'Shipped',
      soon: 'Coming soon',
      items: [
        { status: 'shipped', title: 'AI widget codegen', body: 'Natural-language widgets running sandboxed on the canvas.' },
        { status: 'shipped', title: '28+ market-data connectors', body: 'Brokers, exchanges, data providers, databases and socials streaming live.' },
        { status: 'shipped', title: 'Cloud bots & alerts', body: 'Automations that watch your data and fire signals to your widgets, tab closed.' },
        { status: 'shipped', title: 'Accounts & cloud sync', body: 'Free accounts with workspaces synced across every device — 10K credits reserved for platform launch.' },
        { status: 'shipped', title: 'Community feed & profiles', body: 'Follow makers, share widgets to the feed, and claim your public @handle.' },
        { status: 'soon', title: 'Agents & Copilot', body: 'Deploy cloud agents with a full harness, and a Copilot for your workspace.' },
        { status: 'soon', title: 'Marketplace & signals', body: 'Buy and sell widgets, and publish audited strategy signals you can earn on.' },
        { status: 'soon', title: 'XP, badges & rewards', body: 'A gamified account — earn XP and badges for achievements, and convert them into reward credits.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions, answered',
      subtitle: 'Everything you need to know before you launch the app.',
      items: [
        {
          q: 'What is Nexow?',
          a: 'Nexow is an AI-native workspace for markets. You describe a widget — a chart, table, heatmap or signal — in plain language, and Nexow generates its source code, runs it in a sandboxed iframe, and streams live market data onto a free-form canvas. Around that it adds cloud bots, AI agents, a Copilot and a maker community.',
        },
        {
          q: 'Do I need to know how to code?',
          a: 'No. You describe what you want in natural language and Nexow writes and runs the widget for you. If you do read code, every widget’s source and version history is available to inspect and refine.',
        },
        {
          q: 'Is my data private? Do I need an account?',
          a: 'No account is required. Nexow runs fully local by default: add your own Anthropic API key and widget generation happens in your browser, with widgets, versions and logs stored in IndexedDB. A free account is always optional — it adds AI credits, cloud sync and the community, but you can keep building 100% locally.',
        },
        {
          q: 'Which markets and venues are supported?',
          a: 'Nexow has 28 live connectors (56 in the catalog) spanning FX (OANDA, LMAX, FXCM), crypto (Binance, Coinbase, Kraken, Deribit, BitMEX), equities and futures (Interactive Brokers, Alpaca, TradeStation, Polygon, Rithmic, IQFeed), prediction markets (Kalshi, Polymarket), data providers and databases (Alpha Vantage, Intrinio, Trading Economics, Postgres, ClickHouse, Qdrant) and social feeds (X, YouTube, Discord, Telegram, Spotify).',
        },
        {
          q: 'What are bots and agents?',
          a: 'Bots are cloud automations that watch your data and fire signals and alerts to your widgets even when your tab is closed — describe an alert in plain words or wire it visually with thresholds, % change, moving-average crossovers and new trades in a connected broker account. Agents are AI with a full harness (model, memory, skills, tools, knowledge, triggers) — design yours in the visual harness builder today; cloud deploy and the Copilot assistant are coming soon.',
        },
        {
          q: 'Is there a community and marketplace?',
          a: 'The community is live — create a free account, claim your public @handle, follow makers, post to the feed, and share widgets others can add straight to their library. A marketplace for buying and selling widgets and audited strategy signals you can earn on are coming next.',
        },
        {
          q: 'What are XP and rewards?',
          a: 'Nexow is adding a gamified layer to accounts: building widgets, running bots and sharing with the community will earn XP and unlock badges for achievements — and achievements will convert into reward credits you can spend on AI usage. It is rolling out soon; early accounts are first in line.',
        },
        {
          q: 'How much does it cost?',
          a: 'Free forever to build — locally with your own key, or with 10,000 AI credits reserved on a free account. Paid plans (Supporter and Sponsor) add monthly credits and higher bot and agent limits, and Partner is for teams that need private infrastructure. Paid checkout is coming soon; see the plans page.',
        },
        {
          q: 'Which AI model powers Nexow?',
          a: 'Nexow generates with Anthropic’s Claude models via the Anthropic SDK — Claude Opus 4.8 by default, with Sonnet 4.6 and Haiku 4.5 for faster, cheaper generation. In private mode you supply your own key, so you stay in full control of usage and cost.',
        },
      ],
    },
    cta: {
      title: 'Build your first widget in the next minute',
      subtitle: 'The preview is live and free to try. No sign-up, no setup — just describe what you want to see.',
      primary: 'Launch Nexow',
      secondary: 'Explore features',
    },
  },
  features: {
    meta: {
      title: 'Features — Nexow',
      description:
        'Natural-language widget generation, a sandboxed runtime, a free-form canvas with groups and links, 28+ market-data connectors, cloud bots and agents, a maker community with XP rewards, private local-mode and a versioned widget library. Explore everything Nexow does.',
    },
    hero: {
      badge: 'Features',
      title: 'Everything you need to build market dashboards with words',
      subtitle:
        'Nexow turns a sentence into a running, data-connected widget — then gives you the canvas, connectors, cloud automations and network to build a real workstation.',
    },
    groups: [
      {
        title: 'Generate',
        body: 'Describe what you want to see; Nexow writes and runs it.',
        items: [
          { icon: 'sparkles', title: 'Plain-language codegen', body: 'Describe a widget and Nexow generates its full source with Claude — charts, tables, heatmaps, order books, custom signals.' },
          { icon: 'wand', title: 'Refine by conversation', body: 'Change anything by asking. “Add a 200 EMA”, “switch to log scale”, “colour by funding rate” — Nexow edits the widget in place.' },
          { icon: 'history', title: 'Versioned & inspectable', body: 'Every generation is versioned with logs. Roll back, compare, and read the exact source running in each widget.' },
        ],
      },
      {
        title: 'Run',
        body: 'A secure, fast runtime for generated code.',
        items: [
          { icon: 'shield', title: 'Sandboxed iframes', body: 'Widgets execute in isolated iframes with a strict boundary — generated code can render and fetch, but can’t touch your workspace or other widgets.' },
          { icon: 'bolt', title: 'Live, streaming data', body: 'Widgets subscribe to real-time prices, order books and reference data with minimal latency.' },
          { icon: 'layers', title: 'Free-form canvas & workspaces', body: 'Arrange widgets on a free-form canvas, group them into workspaces and screens, and switch between setups instantly.' },
          { icon: 'link', title: 'Groups & Links', body: 'Bundle widgets into groups with mosaic or tab layouts, and wire widgets together with Links — one-way or two-way pipes that stream one widget’s data into another.' },
        ],
      },
      {
        title: 'Connect',
        body: 'Pluggable data from the venues you actually use.',
        items: [
          { icon: 'plug', title: '28+ market-data connectors', body: 'FX, crypto, equities, futures, options and prediction markets — OANDA, Binance, Coinbase, IBKR, Polygon, Kalshi, Polymarket and more.' },
          { icon: 'globe', title: 'Browser-direct where possible', body: 'Where CORS allows, authenticated venue calls run straight from your browser and bypass our proxy entirely.' },
          { icon: 'database', title: 'Databases & socials too', body: 'Point widgets at Postgres, ClickHouse or Qdrant, or pull from X, YouTube, Discord and Telegram alongside live markets.' },
        ],
      },
      {
        title: 'Automate',
        body: 'Cloud automations and AI that act while you’re away.',
        items: [
          { icon: 'bot', title: 'Cloud bots', body: 'Describe an alert or wire it visually — thresholds, % change, MA crossovers, digests, or new trades in a connected broker account. Bots run on a cloud heartbeat and push signals to your widgets, tab closed.' },
          { icon: 'cpu', title: 'AI agents', body: 'Agents with a full harness — model, memory, skills, tools, knowledge and triggers. Design yours in the visual harness builder today — cloud deploy is coming soon.' },
          { icon: 'chat', title: 'Copilot', body: 'An assistant for your workspace: attach a widget’s screenshot or data and ask it to explain, summarize or suggest what to watch next. Coming soon.' },
        ],
      },
      {
        title: 'Network',
        body: 'Build alongside a world of makers.',
        items: [
          { icon: 'users', title: 'Community', body: 'Follow makers, post to the feed, and share widgets others can add straight to their library — live today, with public maker profiles.' },
          { icon: 'store', title: 'Marketplace', body: 'Buy and sell ready-made widgets, and earn on what you build. Coming soon — sharing already works in the community.' },
          { icon: 'signal', title: 'Strategy signals', body: 'Publish audited track records, subscribe to signals you trust, and earn on the strategies you run. Coming soon.' },
          { icon: 'trophy', title: 'XP & rewards', body: 'Earn XP for building, unlock badges for achievements, and convert them into reward credits. Coming soon.' },
        ],
      },
      {
        title: 'Own',
        body: 'Private by default, yours to keep.',
        items: [
          { icon: 'lock', title: 'Private local mode', body: 'Bring your own Anthropic key and generate widgets client-side. Nothing is sent to our servers — no account required.' },
          { icon: 'sync', title: 'Optional cloud sync', body: 'Create a free account to sync workspaces, widgets and settings across every device — with an encrypted credential vault.' },
          { icon: 'library', title: 'Reusable library', body: 'Save any widget to your library and drop it into any dashboard in one click.' },
        ],
      },
    ],
  },
  plansPage: {
    meta: {
      title: 'Plans — Nexow',
      description:
        'Free forever to build — locally with your own key, or with 10,000 AI credits reserved on a free account. Compare Free, Supporter, Sponsor and Partner for credits, bots, agents and customization.',
    },
    hero: {
      badge: 'Plans',
      title: 'Free to start. Room to grow.',
      subtitle:
        'Build for free — run local with your own key, or sign up to reserve 10,000 AI credits. Upgrade when you need more capacity, automation and polish.',
    },
    comingSoon:
      'Supporter & Sponsor checkout is coming soon, and platform credits launch alongside it. Everyone is on Free today — create an account to be first when billing opens.',
    highlights: {
      title: 'What scales with your plan',
      items: [
        {
          icon: 'coins',
          title: 'AI credits',
          body: 'Power widget generation, Copilot replies and bot logic. Free reserves 10K to start; paid plans refresh monthly.',
        },
        {
          icon: 'bot',
          title: 'Bots & agents',
          body: 'Bots watch markets and trigger actions. Agents run multi-step workflows. Higher plans raise concurrent limits.',
        },
        {
          icon: 'sparkles',
          title: 'Customization',
          body: 'Accent colors, logos and premium UI unlock as you upgrade — make Nexow feel like yours.',
        },
      ],
    },
    included: {
      title: 'Included in every plan',
      items: [
        'Unlimited screens, workspaces & widgets',
        '28+ live market-data connectors',
        'Sandboxed widget runtime',
        'Global Copilot (coming soon)',
        'Community & marketplace access',
      ],
    },
    billing: { monthly: 'Monthly', yearly: 'Yearly', save: '2 months free' },
    tiers: [
      {
        name: 'Free',
        tagline: 'Everything you need to build.',
        priceMonthly: '$0',
        priceYearly: '$0',
        cadence: 'forever',
        stats: ['10K credits', '10 bots', '3 agents'],
        cta: 'Get started free',
        ctaHref: 'https://app.nexow.ai',
        features: [
          '10,000 AI credits reserved at sign-up',
          'Unlimited screens, workspaces & widgets',
          'Unlimited browser connections',
          'Cross-device cloud sync',
          'Global Copilot (coming soon)',
          'Community & marketplace access',
        ],
      },
      {
        name: 'Supporter',
        tagline: 'For makers who want more room.',
        priceMonthly: '$9.99',
        priceYearly: '$8.33',
        billedYearly: '$99.90 billed yearly',
        cadence: '/mo',
        badge: 'Coming soon',
        stats: ['50K credits/mo', '30 bots', '10 agents'],
        note: 'Everything in Free, plus:',
        cta: 'Become a Supporter',
        ctaHref: 'https://app.nexow.ai',
        features: [
          '50,000 credits every month',
          'Up to 30 bots & 10 agents',
          'A Copilot per workspace',
          'Second accent color (gradient)',
          'Exclusive UI & appearance options',
        ],
      },
      {
        name: 'Sponsor',
        tagline: 'For power users going pro.',
        priceMonthly: '$69.99',
        priceYearly: '$58.33',
        billedYearly: '$699.90 billed yearly',
        cadence: '/mo',
        badge: 'Best return',
        stats: ['800K credits/mo', '300 bots', '100 agents'],
        note: 'Everything in Supporter, plus:',
        cta: 'Become a Sponsor',
        ctaHref: 'https://app.nexow.ai',
        featured: true,
        features: [
          '800,000 credits every month',
          'Up to 300 bots & 100 agents',
          'Custom connections (Connector Builder)',
          'A Copilot per screen',
          'Upload your own logo',
          'Premium UI customizations',
        ],
      },
      {
        name: 'Partner',
        tagline: 'For teams that need it all.',
        priceMonthly: 'Custom',
        priceYearly: 'Custom',
        cadence: '',
        stats: ['Private infra', 'White-glove', 'SLA'],
        note: 'Everything in Sponsor, plus:',
        cta: 'Contact us',
        ctaHref: 'mailto:partners@nexow.ai',
        features: [
          'Private infrastructure',
          'White-glove setup',
          'First-class custom development',
          'Bespoke branding & personalization',
          'Dedicated support',
        ],
      },
    ],
    faqTitle: 'Plan questions',
    faq: [
      { q: 'Is Nexow really free?', a: 'Yes. You can build for free forever — run fully local with your own Anthropic key (you only pay your own API usage), or create a free account that reserves 10,000 AI credits for when platform mode opens, so no key of your own is needed.' },
      { q: 'What are credits?', a: 'Credits meter AI usage — generating widgets, links, bots and Copilot replies. The free account reserves 10,000 to start, and paid plans grant a monthly allowance (50K on Supporter, 800K on Sponsor). Credit metering goes live with platform mode, and you can buy more anytime.' },
      { q: 'When do paid plans launch?', a: 'Supporter and Sponsor are defined and shown in the app, but paid checkout is coming soon. Everyone is on Free today — create an account to be first when billing opens.' },
      { q: 'Can I pay yearly?', a: 'Yes. Yearly billing gives you two months free versus paying monthly. You can switch between monthly and yearly at any time.' },
    ],
  },
  connectorsPage: {
    meta: {
      title: 'Connectors — Nexow',
      description:
        'Browse every Nexow connector — 28 live and 56 in the catalog. Brokers, exchanges, DEXs, prediction markets, data providers, databases and social feeds. Search, filter and connect.',
    },
    hero: {
      badge: 'Connectors',
      title: 'Every market, one canvas',
      subtitle:
        'Search the full catalog of venues Nexow connects to — brokers, exchanges, data providers, databases and socials. Live connectors work today; the rest are landing soon.',
    },
    searchPlaceholder: 'Search connectors…',
    all: 'All',
    categories: { finance: 'Finance', data: 'Data', socials: 'Socials' },
    status: { all: 'All', live: 'Live', soon: 'Soon' },
    kinds: {
      broker: 'Broker',
      exchange: 'Exchange',
      prediction: 'Prediction market',
      dex: 'DEX',
      aggregator: 'Aggregator',
      data: 'Market data',
      sql: 'SQL database',
      nosql: 'NoSQL database',
      warehouse: 'Data warehouse',
      vector: 'Vector database',
      messaging: 'Messaging',
      social: 'Social network',
      video: 'Video',
      community: 'Community',
      music: 'Music',
    },
    assets: {
      equities: 'Equities',
      indices: 'Indices',
      fixed_income: 'Fixed income',
      fx: 'FX',
      commodities: 'Commodities',
      crypto: 'Crypto',
      volatility: 'Volatility',
      prediction_markets: 'Prediction',
    },
    visit: 'Visit site',
    results: '{n} connectors',
    empty: 'No connectors match your search.',
    exploreCta: 'Explore all connectors',
    countLive: 'live',
    countCatalog: 'in the catalog',
  },
  about: {
    meta: {
      title: 'About — Nexow',
      description:
        'Nexow is building an AI-native workstation for markets: describe any widget in plain language and get a running, data-connected dashboard. Private by default. Learn about our mission.',
    },
    hero: {
      badge: 'About',
      title: 'An AI-native workstation for markets',
      subtitle:
        'We think building a trading dashboard should be as fast as describing it. Nexow turns natural language into running, data-connected widgets — and keeps you in control of your keys and data.',
    },
    missionTitle: 'Why we’re building Nexow',
    mission: [
      'Every trader and analyst ends up rebuilding the same charts, tables and monitors by hand — gluing together APIs, wrangling websockets, and fighting layout. The tools are powerful but slow, and the good ones are locked behind heavy platforms.',
      'Nexow flips that. You describe what you want to see and an AI writes a real, running widget — sandboxed, versioned and wired to live data from the venues you already use. The dashboard assembles itself, and you refine it in plain language.',
      'We’re building it private-first: run fully local with your own key, keep your data in your browser, and connect straight to venues where possible. As we add trading agents, server components and a community layer, that principle stays fixed — your keys, your data, your machine.',
    ],
    valuesTitle: 'What we value',
    values: [
      { icon: 'lock', title: 'Private by default', body: 'Local-first, bring-your-own-key, no data leaving your machine unless you choose it.' },
      { icon: 'bolt', title: 'Speed to insight', body: 'From a sentence to a live widget in seconds — the shortest path between a question and a chart.' },
      { icon: 'shield', title: 'Safe by construction', body: 'Generated code runs sandboxed with a strict boundary, so power never means risk.' },
      { icon: 'globe', title: 'Open to every market', body: 'FX, crypto, equities, futures, options and prediction markets — one canvas for all of them.' },
    ],
    ctaTitle: 'See it for yourself',
    ctaBody: 'The preview is live. Describe a widget and watch Nexow build it.',
    cta: 'Launch the app',
  },
  blog: {
    meta: {
      title: 'Blog — Nexow',
      description:
        'Guides and deep-dives on building market dashboards with AI, connecting live data, and trading tooling — from the team at Nexow.',
    },
    title: 'The Nexow blog',
    subtitle: 'Building AI-native market tooling — guides, deep-dives and product notes.',
    latest: 'Latest',
    readMore: 'Read article',
    backToBlog: 'Back to blog',
    published: 'Published',
    updated: 'Updated',
    minRead: 'min read',
  },
  notFound: {
    title: 'This page drifted off the canvas',
    body: 'The page you’re looking for doesn’t exist — but your next dashboard might.',
    cta: 'Back to home',
  },
};

/* ------------------------------------------------------------------ *
 * Spanish
 * ------------------------------------------------------------------ */
const es: SiteContent = {
  nav: {
    links: [
      { label: 'Funciones', href: '/features' },
      { label: 'Conectores', href: '/connectors' },
      { label: 'Planes', href: '/plans' },
      { label: 'Blog', href: '/blog' },
      { label: 'Nosotros', href: '/about' },
    ],
    launch: 'Abrir la app',
    menu: 'Abrir menú',
    close: 'Cerrar menú',
  },
  footer: {
    tagline: 'Describe un widget. Nexow lo construye, lo conecta a datos de mercado en vivo y lo coloca en tu lienzo.',
    columns: [
      {
        title: 'Producto',
        links: [
          { label: 'Funciones', href: '/features' },
          { label: 'Planes', href: '/plans' },
          { label: 'Conectores', href: '/connectors' },
          { label: 'Automatizaciones', href: '/#automate' },
          { label: 'Comunidad', href: '/#network' },
          { label: 'Roadmap', href: '/#roadmap' },
        ],
      },
      {
        title: 'Empresa',
        links: [
          { label: 'Nosotros', href: '/about' },
          { label: 'Blog', href: '/blog' },
        ],
      },
      {
        title: 'Recursos',
        links: [
          { label: 'Abrir la app', href: 'https://app.nexow.ai' },
          { label: 'Privacidad', href: '/privacy' },
        ],
      },
    ],
    rights: 'Todos los derechos reservados.',
    disclaimer:
      'Nexow es una plataforma de herramientas y visualización. Nada aquí es asesoramiento financiero. Los mercados conllevan riesgo; opera con responsabilidad.',
    builtWith: 'Hecho con Astro. Privado por defecto.',
  },
  home: {
    meta: {
      title: 'Nexow — Crea dashboards de mercado con IA, en lenguaje natural',
      description:
        'Nexow es un espacio de trabajo nativo de IA para mercados. Describe un widget en lenguaje natural y Nexow lo crea, lo conecta a datos en vivo de más de 28 conectores y suma bots en la nube, agentes de IA, una comunidad de makers y recompensas XP — privado por defecto, gratis para empezar.',
    },
    hero: {
      badge: 'Preview ya disponible',
      titleLead: 'Descríbelo.',
      titleGradient: 'Nexow lo crea.',
      titleTail: 'Opéralo.',
      subtitle:
        'Un espacio de trabajo nativo de IA para mercados. Pide cualquier widget en lenguaje natural — Nexow escribe el código, lo ejecuta de forma segura y transmite datos en vivo a un lienzo libre. Automatízalo con bots y agentes en la nube, y conéctate a una comunidad de makers.',
      ctaPrimary: 'Abrir la app',
      ctaSecondary: 'Ver cómo funciona',
      note: 'Sin registro para probar · Privado en tu navegador · O cuenta gratis con 10K créditos reservados',
      promptExample: 'Muestra un gráfico de velas de BTC-USD de Coinbase con EMA 20 y 50 y RSI debajo.',
      promptPlaceholder: 'Describe un widget…',
    },
    ticker: { label: 'Conectores en vivo' },
    trust: 'Un lienzo para todos los mercados — FX, cripto, acciones, futuros, opciones y mercados de predicción.',
    stats: [
      { n: 28, suffix: '+', label: 'conectores de datos de mercado en vivo' },
      { n: 6, label: 'clases de activos en un solo lienzo' },
      { n: 10, suffix: 'K', label: 'créditos de IA reservados al registrarte' },
      { n: 30, prefix: '<', suffix: 's', label: 'de una frase a un widget funcionando' },
    ],
    showcase: {
      eyebrow: 'Showcase',
      title: 'Una frase. Cualquier widget.',
      subtitle:
        'Gráficos, order books, mapas de calor, probabilidades — si puedes describirlo, Nexow puede construirlo y conectarlo a datos en vivo.',
      generatedBadge: 'generado y en vivo',
      tabs: [
        {
          label: 'Velas + indicadores',
          prompt: 'Gráfico de velas de BTC-USD de Coinbase con EMA 20 y 50 y RSI debajo.',
          caption: 'En streaming desde Coinbase — EMAs y RSI calculados en el widget.',
        },
        {
          label: 'Profundidad del libro',
          prompt: 'Profundidad del order book de ETH-PERP en Deribit, bids contra asks.',
          caption: 'Bids y asks agregados en tiempo real del libro de Deribit.',
        },
        {
          label: 'Mapa de correlación',
          prompt: 'Mapa de calor de correlación a 30 días de BTC, ETH, SOL, EURUSD, oro y SPX.',
          caption: 'Correlaciones entre activos recalculadas con cada nuevo cierre.',
        },
        {
          label: 'Mercados de predicción',
          prompt: 'Probabilidad en Kalshi de un recorte de tipos de la Fed en el próximo FOMC, con cambio a 24h.',
          caption: 'Probabilidades de eventos directas del order book de Kalshi.',
        },
      ],
    },
    features: {
      eyebrow: 'Por qué Nexow',
      title: 'El dashboard se construye solo',
      subtitle:
        'Deja de cablear gráficos a mano. Describe lo que quieres ver y Nexow genera un widget real y funcionando — luego lo refinas en lenguaje natural.',
      items: [
        {
          icon: 'sparkles',
          title: 'Widgets en lenguaje natural',
          body: 'Describe un gráfico, tabla, mapa de calor o señal con palabras. Nexow escribe el código del widget con Claude y lo ejecuta en vivo — sin boilerplate ni archivos de config.',
        },
        {
          icon: 'shield',
          title: 'Aislado y seguro',
          body: 'Cada widget corre en un iframe aislado con una frontera estricta. El código generado puede renderizar y obtener datos, pero nunca toca el resto de tu espacio de trabajo.',
        },
        {
          icon: 'plug',
          title: 'Más de 28 conectores en vivo',
          body: 'Proveedores de datos conectables — OANDA, Binance, Coinbase, Kraken, Polygon, Interactive Brokers, Kalshi, Polymarket y más — llevan datos en tiempo real a tus widgets.',
        },
        {
          icon: 'layers',
          title: 'Lienzo libre',
          body: 'Arrastra, redimensiona y organiza widgets en un lienzo libre con espacios y pantallas para FX, cripto, research — lo que operes. Agrupa widgets y conecta sus datos en vivo con Links.',
        },
        {
          icon: 'lock',
          title: 'Privado por defecto',
          body: 'Corre totalmente local: añade tu propia clave de Anthropic y la generación ocurre en tu navegador. Widgets, versiones y logs se guardan en IndexedDB — nada se envía a nuestros servidores.',
        },
        {
          icon: 'history',
          title: 'Versiones y biblioteca de widgets',
          body: 'Cada edición queda versionada con logs que puedes inspeccionar. Guarda widgets en tu biblioteca y reutilízalos en cualquier dashboard con un clic.',
        },
      ],
    },
    how: {
      eyebrow: 'Cómo funciona',
      title: 'De una frase a un widget en vivo en segundos',
      subtitle: 'Tres pasos. Sin config, sin build, sin código pegamento.',
      steps: [
        {
          n: '01',
          title: 'Describe',
          body: 'Escribe lo que quieres en lenguaje natural — «un gráfico de profundidad del order book para ETH-PERP en Deribit».',
        },
        {
          n: '02',
          title: 'Genera',
          body: 'Nexow escribe el código del widget con Claude y lo ejecuta en un iframe aislado, conectado al conector que elijas.',
        },
        {
          n: '03',
          title: 'Refina y organiza',
          body: 'Ajústalo en lenguaje natural, versiónalo y colócalo en tu lienzo junto a todo lo que sigues.',
        },
      ],
    },
    automate: {
      eyebrow: 'Automatiza',
      title: 'Pon tu espacio en piloto automático',
      subtitle:
        'Los widgets te muestran el mercado. Los bots, agentes y Copilot actúan sobre él — automatizaciones en la nube e IA que siguen trabajando con la pestaña cerrada.',
      liveLabel: 'En vivo',
      soonLabel: 'Próximamente',
      items: [
        {
          icon: 'bot',
          title: 'Bots',
          body: 'Automatizaciones en la nube que vigilan tus datos y envían señales y alertas a tus widgets. Describe una alerta con palabras — «avísame cuando BTC caiga 5% en una hora» — o constrúyela visualmente con umbrales, % de cambio, cruces de medias y resúmenes. Los bots pueden incluso vigilar una cuenta de broker conectada y avisar de operaciones nuevas.',
          status: 'live',
        },
        {
          icon: 'cpu',
          title: 'Agentes',
          body: 'Agentes de IA con un harness real — modelo, memoria, skills, herramientas, conocimiento y disparadores. Dale un trabajo a un agente y deja que vigile, razone y actúe — diseña el tuyo hoy en el editor visual del harness; el despliegue en la nube llega pronto.',
          status: 'soon',
        },
        {
          icon: 'chat',
          title: 'Copilot',
          body: 'Un asistente de IA para todo tu espacio. Adjunta la captura de un widget o sus datos en vivo y pregunta — «explica este gráfico», «resume esto», «¿qué debería vigilar ahora?».',
          status: 'soon',
        },
      ],
      harnessChips: ['modelo', 'memoria', 'skills', 'herramientas', 'conocimiento', 'disparadores'],
      copilotPrompts: ['Explica este gráfico', 'Resume estos datos', '¿Qué debería vigilar ahora?'],
    },
    connectors: {
      eyebrow: 'Conectores',
      title: 'Conéctate a todos los mercados',
      subtitle:
        'Conectores conectables transmiten precios en vivo, order books y datos de referencia directo a tus widgets — en FX, cripto, acciones, futuros, opciones, mercados de predicción, bases de datos y feeds sociales.',
      note: 'Hoy hay 28 conectores en vivo y 56 en el catálogo — brokers, exchanges, proveedores de datos, bases de datos y redes sociales. Muchos transmiten directo desde tu navegador; el resto pasa por un proxy ligero.',
      count: 28,
      countLabel: 'conectores en vivo',
      groups: {
        fx: 'FX',
        crypto: 'Cripto',
        equities: 'Acciones y futuros',
        prediction: 'Mercados de predicción',
        data: 'Datos y bases de datos',
        socials: 'Redes sociales',
      },
    },
    network: {
      eyebrow: 'La red',
      title: 'Construye solo. O conéctate a la red.',
      subtitle:
        'Quédate totalmente local y privado, o crea una cuenta gratis y únete a un mundo de makers que construyen, comparten y operan dashboards a tu lado.',
      liveLabel: 'En vivo',
      soonLabel: 'Próximamente',
      items: [
        {
          icon: 'users',
          title: 'Comunidad',
          body: 'Descubre y sigue makers, da like y comenta en un feed social para constructores de mercados, y comparte widgets que otros pueden añadir directo a su biblioteca — con perfiles públicos de maker.',
          status: 'live',
        },
        {
          icon: 'store',
          title: 'Marketplace',
          body: 'Compartir widgets ya funciona en la comunidad — lo siguiente es un marketplace para comprar y vender widgets listos, y ganar con lo que construyes.',
          status: 'soon',
        },
        {
          icon: 'signal',
          title: 'Señales de estrategia',
          body: 'Publica historiales auditados, suscríbete a señales de makers de confianza y gana con las estrategias que ejecutas.',
          status: 'soon',
        },
        {
          icon: 'trophy',
          title: 'XP y recompensas',
          body: 'Una cuenta gamificada — cada widget, bot y publicación da XP. Sube de nivel, desbloquea insignias por logros y conviértelos en créditos de recompensa.',
          status: 'soon',
        },
      ],
      accountBadge: 'Cuenta gratis',
      accountTitle: 'Una cuenta gratis desbloquea la red',
      accountBody: 'Sin tarjeta. Sigue construyendo en local cuando quieras — la cuenta siempre es opcional.',
      accountPoints: [
        '10.000 créditos de IA reservados al registrarte',
        'Sincronización en la nube de espacios y widgets entre dispositivos',
        'Comunidad, marketplace y biblioteca de widgets',
        'XP, insignias y créditos de recompensa al construir (próximamente)',
      ],
      accountCta: 'Crea tu cuenta gratis',
    },
    plans: {
      eyebrow: 'Planes',
      title: 'Empieza gratis. Crece cuando quieras.',
      subtitle:
        'Construye gratis para siempre — en local con tu propia clave, o con 10.000 créditos reservados en una cuenta gratis. Sube de plan para más créditos, bots y agentes.',
      cta: 'Comparar todos los planes',
    },
    privacy: {
      eyebrow: 'Privado por diseño',
      title: 'Tus claves. Tus datos. Tu máquina.',
      body: 'Nexow corre totalmente local por defecto. En modo privado añades tu propia clave de Anthropic y la generación de widgets ocurre íntegramente en tu navegador — nada se envía a nuestros servidores, así que una sesión sin autenticar no nos cuesta nada ni filtra nada.',
      points: [
        'La generación con tu propia clave corre en el cliente',
        'Widgets, versiones y logs se guardan en tu navegador (IndexedDB)',
        'Las conexiones directas a venues mantienen las credenciales fuera de nuestra infraestructura',
        'No necesitas cuenta para empezar a construir',
      ],
      cta: 'Lee la arquitectura de modo local',
    },
    roadmap: {
      eyebrow: 'Roadmap',
      title: 'Esto es la preview. Esto es lo que viene.',
      subtitle:
        'Nexow lanzó una preview pública del lienzo, la generación de código, los bots en la nube, las cuentas y el feed de la comunidad. Los siguientes bloques están por llegar.',
      shipped: 'Disponible',
      soon: 'Próximamente',
      items: [
        { status: 'shipped', title: 'Generación de widgets con IA', body: 'Widgets en lenguaje natural corriendo aislados en el lienzo.' },
        { status: 'shipped', title: 'Más de 28 conectores', body: 'Brokers, exchanges, proveedores de datos, bases de datos y redes sociales en vivo.' },
        { status: 'shipped', title: 'Bots y alertas en la nube', body: 'Automatizaciones que vigilan tus datos y envían señales a tus widgets, con la pestaña cerrada.' },
        { status: 'shipped', title: 'Cuentas y sync en la nube', body: 'Cuentas gratis con espacios sincronizados en todos tus dispositivos — 10K créditos reservados para el lanzamiento de la plataforma.' },
        { status: 'shipped', title: 'Comunidad: feed y perfiles', body: 'Sigue makers, comparte widgets en el feed y reclama tu @usuario público.' },
        { status: 'soon', title: 'Agentes y Copilot', body: 'Despliega agentes en la nube con un harness completo, y un Copilot para tu espacio.' },
        { status: 'soon', title: 'Marketplace y señales', body: 'Compra y vende widgets, y publica señales de estrategia auditadas con las que ganar.' },
        { status: 'soon', title: 'XP, insignias y recompensas', body: 'Una cuenta gamificada — gana XP e insignias por logros y conviértelos en créditos de recompensa.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Preguntas, respondidas',
      subtitle: 'Todo lo que necesitas saber antes de abrir la app.',
      items: [
        {
          q: '¿Qué es Nexow?',
          a: 'Nexow es un espacio de trabajo nativo de IA para mercados. Describes un widget — un gráfico, tabla, mapa de calor o señal — en lenguaje natural, y Nexow genera su código, lo ejecuta en un iframe aislado y le transmite datos de mercado en vivo sobre un lienzo libre. Alrededor suma bots en la nube, agentes de IA, un Copilot y una comunidad de makers.',
        },
        {
          q: '¿Necesito saber programar?',
          a: 'No. Describes lo que quieres en lenguaje natural y Nexow escribe y ejecuta el widget por ti. Si lees código, el código fuente y el historial de versiones de cada widget están disponibles para inspeccionar y refinar.',
        },
        {
          q: '¿Mis datos son privados? ¿Necesito cuenta?',
          a: 'No hace falta cuenta. Nexow corre totalmente local por defecto: añades tu propia clave de Anthropic y la generación ocurre en tu navegador, con widgets, versiones y logs en IndexedDB. Una cuenta gratis siempre es opcional — suma créditos de IA, sync en la nube y comunidad, pero puedes seguir construyendo 100% en local.',
        },
        {
          q: '¿Qué mercados y venues soporta?',
          a: 'Nexow tiene 28 conectores en vivo (56 en el catálogo) que abarcan FX (OANDA, LMAX, FXCM), cripto (Binance, Coinbase, Kraken, Deribit, BitMEX), acciones y futuros (Interactive Brokers, Alpaca, TradeStation, Polygon, Rithmic, IQFeed), mercados de predicción (Kalshi, Polymarket), proveedores de datos y bases de datos (Alpha Vantage, Intrinio, Trading Economics, Postgres, ClickHouse, Qdrant) y feeds sociales (X, YouTube, Discord, Telegram, Spotify).',
        },
        {
          q: '¿Qué son los bots y los agentes?',
          a: 'Los bots son automatizaciones en la nube que vigilan tus datos y envían señales y alertas a tus widgets aunque tengas la pestaña cerrada — describe una alerta con palabras o constrúyela visualmente con umbrales, % de cambio, cruces de medias y operaciones nuevas en una cuenta de broker conectada. Los agentes son IA con un harness completo (modelo, memoria, skills, herramientas, conocimiento, disparadores) — diseña el tuyo hoy en el editor visual; el despliegue en la nube y el asistente Copilot llegan pronto.',
        },
        {
          q: '¿Hay comunidad y marketplace?',
          a: 'La comunidad ya está en vivo — crea una cuenta gratis, reclama tu @usuario público, sigue makers, publica en el feed y comparte widgets que otros pueden añadir directo a su biblioteca. El marketplace para comprar y vender widgets y las señales de estrategia auditadas llegan pronto.',
        },
        {
          q: '¿Qué son los XP y las recompensas?',
          a: 'Nexow está añadiendo una capa gamificada a las cuentas: crear widgets, ejecutar bots y compartir con la comunidad dará XP y desbloqueará insignias por logros — y los logros se convertirán en créditos de recompensa que podrás gastar en uso de IA. Llega pronto; las cuentas tempranas serán las primeras.',
        },
        {
          q: '¿Cuánto cuesta?',
          a: 'Gratis para siempre para construir — en local con tu propia clave, o con 10.000 créditos de IA reservados en una cuenta gratis. Los planes de pago (Supporter y Sponsor) suman créditos mensuales y límites más altos de bots y agentes, y Partner es para equipos que necesitan infraestructura privada. El pago llega pronto; consulta la página de precios.',
        },
        {
          q: '¿Qué modelo de IA usa Nexow?',
          a: 'Nexow genera con los modelos Claude de Anthropic mediante el SDK de Anthropic — Claude Opus 4.8 por defecto, con Sonnet 4.6 y Haiku 4.5 para una generación más rápida y económica. En modo privado aportas tu propia clave, así mantienes el control total del uso y el coste.',
        },
      ],
    },
    cta: {
      title: 'Crea tu primer widget en el próximo minuto',
      subtitle: 'La preview está en vivo y es gratis para probar. Sin registro, sin setup — solo describe lo que quieres ver.',
      primary: 'Abrir Nexow',
      secondary: 'Explorar funciones',
    },
  },
  features: {
    meta: {
      title: 'Funciones — Nexow',
      description:
        'Generación de widgets en lenguaje natural, runtime aislado, lienzo libre con grupos y links, más de 28 conectores de datos de mercado, bots y agentes en la nube, comunidad de makers con recompensas XP, modo local privado y biblioteca de widgets versionada. Descubre todo lo que hace Nexow.',
    },
    hero: {
      badge: 'Funciones',
      title: 'Todo lo que necesitas para crear dashboards de mercado con palabras',
      subtitle:
        'Nexow convierte una frase en un widget funcionando y conectado a datos — y te da el lienzo, los conectores, las automatizaciones en la nube y la red para armar una estación de trabajo real.',
    },
    groups: [
      {
        title: 'Genera',
        body: 'Describe lo que quieres ver; Nexow lo escribe y lo ejecuta.',
        items: [
          { icon: 'sparkles', title: 'Codegen en lenguaje natural', body: 'Describe un widget y Nexow genera todo su código con Claude — gráficos, tablas, mapas de calor, order books, señales a medida.' },
          { icon: 'wand', title: 'Refina conversando', body: 'Cambia lo que quieras pidiéndolo. «Añade una EMA 200», «pasa a escala log», «colorea por funding rate» — Nexow edita el widget en su sitio.' },
          { icon: 'history', title: 'Versionado e inspeccionable', body: 'Cada generación queda versionada con logs. Revierte, compara y lee el código exacto que corre en cada widget.' },
        ],
      },
      {
        title: 'Ejecuta',
        body: 'Un runtime seguro y rápido para el código generado.',
        items: [
          { icon: 'shield', title: 'Iframes aislados', body: 'Los widgets se ejecutan en iframes aislados con una frontera estricta — el código generado puede renderizar y obtener datos, pero no toca tu espacio ni otros widgets.' },
          { icon: 'bolt', title: 'Datos en vivo y en streaming', body: 'Los widgets se suscriben a precios en tiempo real, order books y datos de referencia con mínima latencia.' },
          { icon: 'layers', title: 'Lienzo libre y espacios', body: 'Organiza widgets en un lienzo libre, agrúpalos en espacios y pantallas, y cambia de configuración al instante.' },
          { icon: 'link', title: 'Grupos y Links', body: 'Reúne widgets en grupos con diseño de mosaico o pestañas, y conéctalos con Links — tuberías de un sentido o bidireccionales que llevan los datos de un widget a otro.' },
        ],
      },
      {
        title: 'Conecta',
        body: 'Datos conectables de los venues que de verdad usas.',
        items: [
          { icon: 'plug', title: 'Más de 28 conectores', body: 'FX, cripto, acciones, futuros, opciones y mercados de predicción — OANDA, Binance, Coinbase, IBKR, Polygon, Kalshi, Polymarket y más.' },
          { icon: 'globe', title: 'Directo desde el navegador', body: 'Donde CORS lo permite, las llamadas autenticadas a los venues corren directo desde tu navegador y evitan por completo nuestro proxy.' },
          { icon: 'database', title: 'Bases de datos y redes', body: 'Apunta widgets a Postgres, ClickHouse o Qdrant, o trae X, YouTube, Discord y Telegram junto a los mercados en vivo.' },
        ],
      },
      {
        title: 'Automatiza',
        body: 'Automatizaciones en la nube e IA que actúan sin ti.',
        items: [
          { icon: 'bot', title: 'Bots en la nube', body: 'Describe una alerta o constrúyela visualmente — umbrales, % de cambio, cruces de medias, resúmenes u operaciones nuevas en una cuenta de broker conectada. Los bots corren en un latido en la nube y envían señales a tus widgets, con la pestaña cerrada.' },
          { icon: 'cpu', title: 'Agentes de IA', body: 'Agentes con un harness completo — modelo, memoria, skills, herramientas, conocimiento y disparadores. Diseña el tuyo hoy en el editor visual del harness — el despliegue en la nube llega pronto.' },
          { icon: 'chat', title: 'Copilot', body: 'Un asistente para tu espacio: adjunta la captura de un widget o sus datos y pídele explicar, resumir o sugerir qué vigilar. Próximamente.' },
        ],
      },
      {
        title: 'Red',
        body: 'Construye junto a un mundo de makers.',
        items: [
          { icon: 'users', title: 'Comunidad', body: 'Sigue makers, publica en el feed y comparte widgets que otros pueden añadir directo a su biblioteca — en vivo hoy, con perfiles públicos de maker.' },
          { icon: 'store', title: 'Marketplace', body: 'Compra y vende widgets listos, y gana con lo que construyes. Próximamente — compartir ya funciona en la comunidad.' },
          { icon: 'signal', title: 'Señales de estrategia', body: 'Publica historiales auditados, suscríbete a señales de confianza y gana con las estrategias que ejecutas. Próximamente.' },
          { icon: 'trophy', title: 'XP y recompensas', body: 'Gana XP por construir, desbloquea insignias por logros y conviértelas en créditos de recompensa. Próximamente.' },
        ],
      },
      {
        title: 'Controla',
        body: 'Privado por defecto, tuyo para siempre.',
        items: [
          { icon: 'lock', title: 'Modo local privado', body: 'Usa tu propia clave de Anthropic y genera widgets en el cliente. Nada se envía a nuestros servidores — sin cuenta.' },
          { icon: 'sync', title: 'Sync opcional en la nube', body: 'Crea una cuenta gratis para sincronizar espacios, widgets y ajustes entre dispositivos — con un baúl de credenciales cifrado.' },
          { icon: 'library', title: 'Biblioteca reutilizable', body: 'Guarda cualquier widget en tu biblioteca y colócalo en cualquier dashboard con un clic.' },
        ],
      },
    ],
  },
  plansPage: {
    meta: {
      title: 'Planes — Nexow',
      description:
        'Construye gratis para siempre — en local con tu propia clave, o con 10.000 créditos de IA reservados en una cuenta gratis. Compara Free, Supporter, Sponsor y Partner por créditos, bots, agentes y personalización.',
    },
    hero: {
      badge: 'Planes',
      title: 'Gratis para empezar. Espacio para crecer.',
      subtitle:
        'Construye gratis — en local con tu propia clave, o regístrate y reserva 10.000 créditos de IA. Sube de plan cuando necesites más capacidad, automatización y acabado.',
    },
    comingSoon:
      'El pago de Supporter y Sponsor llega pronto, y los créditos de la plataforma se activan con él. Hoy todos están en Free — crea una cuenta para ser de los primeros cuando se abra.',
    highlights: {
      title: 'Qué escala con tu plan',
      items: [
        {
          icon: 'coins',
          title: 'Créditos de IA',
          body: 'Impulsan la generación de widgets, respuestas de Copilot y lógica de bots. Free reserva 10K para empezar; los planes de pago se renuevan cada mes.',
        },
        {
          icon: 'bot',
          title: 'Bots y agentes',
          body: 'Los bots vigilan mercados y disparan acciones. Los agentes ejecutan flujos de varios pasos. Los planes superiores suben los límites concurrentes.',
        },
        {
          icon: 'sparkles',
          title: 'Personalización',
          body: 'Colores de acento, logos y UI premium se desbloquean al subir de plan — haz que Nexow se sienta tuyo.',
        },
      ],
    },
    included: {
      title: 'Incluido en todos los planes',
      items: [
        'Pantallas, espacios y widgets ilimitados',
        '28+ conectores de datos de mercado en vivo',
        'Runtime de widgets en sandbox',
        'Copilot global (próximamente)',
        'Acceso a comunidad y marketplace',
      ],
    },
    billing: { monthly: 'Mensual', yearly: 'Anual', save: '2 meses gratis' },
    tiers: [
      {
        name: 'Free',
        tagline: 'Todo lo que necesitas para construir.',
        priceMonthly: '0 €',
        priceYearly: '0 €',
        cadence: 'para siempre',
        stats: ['10K créditos', '10 bots', '3 agentes'],
        cta: 'Empezar gratis',
        ctaHref: 'https://app.nexow.ai',
        features: [
          '10.000 créditos de IA reservados al registrarte',
          'Pantallas, espacios y widgets ilimitados',
          'Conexiones de navegador ilimitadas',
          'Sync en la nube entre dispositivos',
          'Copilot global (próximamente)',
          'Acceso a comunidad y marketplace',
        ],
      },
      {
        name: 'Supporter',
        tagline: 'Para makers que quieren más espacio.',
        priceMonthly: '9,99 €',
        priceYearly: '8,33 €',
        billedYearly: '99,90 € al año',
        cadence: '/mes',
        badge: 'Próximamente',
        stats: ['50K créditos/mes', '30 bots', '10 agentes'],
        note: 'Todo lo de Free, y además:',
        cta: 'Hazte Supporter',
        ctaHref: 'https://app.nexow.ai',
        features: [
          '50.000 créditos cada mes',
          'Hasta 30 bots y 10 agentes',
          'Un Copilot por espacio de trabajo',
          'Segundo color de acento (gradiente)',
          'Opciones de UI y apariencia exclusivas',
        ],
      },
      {
        name: 'Sponsor',
        tagline: 'Para power users que van en serio.',
        priceMonthly: '69,99 €',
        priceYearly: '58,33 €',
        billedYearly: '699,90 € al año',
        cadence: '/mes',
        badge: 'Mejor relación',
        stats: ['800K créditos/mes', '300 bots', '100 agentes'],
        note: 'Todo lo de Supporter, y además:',
        cta: 'Hazte Sponsor',
        ctaHref: 'https://app.nexow.ai',
        featured: true,
        features: [
          '800.000 créditos cada mes',
          'Hasta 300 bots y 100 agentes',
          'Conexiones a medida (Connector Builder)',
          'Un Copilot por pantalla',
          'Sube tu propio logo',
          'Personalizaciones premium de UI',
        ],
      },
      {
        name: 'Partner',
        tagline: 'Para equipos que lo necesitan todo.',
        priceMonthly: 'A medida',
        priceYearly: 'A medida',
        cadence: '',
        stats: ['Infra privada', 'A tu lado', 'SLA'],
        note: 'Todo lo de Sponsor, y además:',
        cta: 'Contáctanos',
        ctaHref: 'mailto:partners@nexow.ai',
        features: [
          'Infraestructura privada',
          'Puesta en marcha guiada',
          'Desarrollo a medida de primera',
          'Marca y personalización a medida',
          'Soporte dedicado',
        ],
      },
    ],
    faqTitle: 'Preguntas sobre los planes',
    faq: [
      { q: '¿Nexow es de verdad gratis?', a: 'Sí. Puedes construir gratis para siempre — totalmente local con tu propia clave de Anthropic (solo pagas tu uso de la API), o crea una cuenta gratis que reserva 10.000 créditos de IA para cuando se abra el modo plataforma, sin necesidad de clave propia.' },
      { q: '¿Qué son los créditos?', a: 'Los créditos miden el uso de IA — generar widgets, links, bots y respuestas de Copilot. La cuenta gratis reserva 10.000 para empezar, y los planes de pago dan una asignación mensual (50K en Supporter, 800K en Sponsor). La medición de créditos se activa con el modo plataforma, y puedes comprar más cuando quieras.' },
      { q: '¿Cuándo salen los planes de pago?', a: 'Supporter y Sponsor ya están definidos y se muestran en la app, pero el pago llega pronto. Hoy todos están en Free — crea una cuenta para ser de los primeros cuando se abra.' },
      { q: '¿Puedo pagar anual?', a: 'Sí. La facturación anual te da dos meses gratis frente al pago mensual. Puedes cambiar entre mensual y anual cuando quieras.' },
    ],
  },
  connectorsPage: {
    meta: {
      title: 'Conectores — Nexow',
      description:
        'Explora todos los conectores de Nexow — 28 en vivo y 56 en el catálogo. Brokers, exchanges, DEX, mercados de predicción, proveedores de datos, bases de datos y redes sociales. Busca, filtra y conecta.',
    },
    hero: {
      badge: 'Conectores',
      title: 'Todos los mercados, un solo lienzo',
      subtitle:
        'Busca en el catálogo completo de venues a los que Nexow se conecta — brokers, exchanges, proveedores de datos, bases de datos y redes. Los conectores en vivo ya funcionan; el resto llega pronto.',
    },
    searchPlaceholder: 'Buscar conectores…',
    all: 'Todos',
    categories: { finance: 'Finanzas', data: 'Datos', socials: 'Redes' },
    status: { all: 'Todos', live: 'En vivo', soon: 'Pronto' },
    kinds: {
      broker: 'Broker',
      exchange: 'Exchange',
      prediction: 'Mercado de predicción',
      dex: 'DEX',
      aggregator: 'Agregador',
      data: 'Datos de mercado',
      sql: 'Base de datos SQL',
      nosql: 'Base de datos NoSQL',
      warehouse: 'Data warehouse',
      vector: 'Base de datos vectorial',
      messaging: 'Mensajería',
      social: 'Red social',
      video: 'Vídeo',
      community: 'Comunidad',
      music: 'Música',
    },
    assets: {
      equities: 'Acciones',
      indices: 'Índices',
      fixed_income: 'Renta fija',
      fx: 'FX',
      commodities: 'Materias primas',
      crypto: 'Cripto',
      volatility: 'Volatilidad',
      prediction_markets: 'Predicción',
    },
    visit: 'Visitar sitio',
    results: '{n} conectores',
    empty: 'Ningún conector coincide con tu búsqueda.',
    exploreCta: 'Explorar todos los conectores',
    countLive: 'en vivo',
    countCatalog: 'en el catálogo',
  },
  about: {
    meta: {
      title: 'Nosotros — Nexow',
      description:
        'Nexow construye una estación de trabajo nativa de IA para mercados: describe cualquier widget en lenguaje natural y obtén un dashboard funcionando y conectado a datos. Privado por defecto. Conoce nuestra misión.',
    },
    hero: {
      badge: 'Nosotros',
      title: 'Una estación de trabajo nativa de IA para los mercados',
      subtitle:
        'Creemos que armar un dashboard de trading debería ser tan rápido como describirlo. Nexow convierte el lenguaje natural en widgets funcionando y conectados a datos — y mantiene el control de tus claves y datos en tus manos.',
    },
    missionTitle: 'Por qué construimos Nexow',
    mission: [
      'Cada trader y analista acaba reconstruyendo a mano los mismos gráficos, tablas y monitores — pegando APIs, peleándose con websockets y luchando con el layout. Las herramientas son potentes pero lentas, y las buenas están encerradas tras plataformas pesadas.',
      'Nexow le da la vuelta. Describes lo que quieres ver y una IA escribe un widget real y funcionando — aislado, versionado y conectado a datos en vivo de los venues que ya usas. El dashboard se arma solo y tú lo refinas en lenguaje natural.',
      'Lo construimos con la privacidad primero: corre totalmente local con tu propia clave, guarda tus datos en tu navegador y conéctate directo a los venues cuando se pueda. A medida que añadimos agentes de trading, componentes de servidor y una capa de comunidad, ese principio no cambia — tus claves, tus datos, tu máquina.',
    ],
    valuesTitle: 'Lo que valoramos',
    values: [
      { icon: 'lock', title: 'Privado por defecto', body: 'Local primero, con tu propia clave, sin que tus datos salgan de tu máquina salvo que lo decidas.' },
      { icon: 'bolt', title: 'Velocidad al insight', body: 'De una frase a un widget en vivo en segundos — el camino más corto entre una pregunta y un gráfico.' },
      { icon: 'shield', title: 'Seguro por construcción', body: 'El código generado corre aislado con una frontera estricta, para que potencia nunca signifique riesgo.' },
      { icon: 'globe', title: 'Abierto a todos los mercados', body: 'FX, cripto, acciones, futuros, opciones y mercados de predicción — un solo lienzo para todos.' },
    ],
    ctaTitle: 'Compruébalo tú mismo',
    ctaBody: 'La preview está en vivo. Describe un widget y mira a Nexow construirlo.',
    cta: 'Abrir la app',
  },
  blog: {
    meta: {
      title: 'Blog — Nexow',
      description:
        'Guías y análisis a fondo sobre crear dashboards de mercado con IA, conectar datos en vivo y herramientas de trading — del equipo de Nexow.',
    },
    title: 'El blog de Nexow',
    subtitle: 'Construyendo herramientas de mercado nativas de IA — guías, análisis y notas de producto.',
    latest: 'Novedad',
    readMore: 'Leer artículo',
    backToBlog: 'Volver al blog',
    published: 'Publicado',
    updated: 'Actualizado',
    minRead: 'min de lectura',
  },
  notFound: {
    title: 'Esta página se salió del lienzo',
    body: 'La página que buscas no existe — pero tu próximo dashboard sí puede existir.',
    cta: 'Volver al inicio',
  },
};

/* ------------------------------------------------------------------ *
 * French
 * ------------------------------------------------------------------ */
const fr: SiteContent = {
  nav: {
    links: [
      { label: 'Fonctionnalités', href: '/features' },
      { label: 'Connecteurs', href: '/connectors' },
      { label: 'Plans', href: '/plans' },
      { label: 'Blog', href: '/blog' },
      { label: 'À propos', href: '/about' },
    ],
    launch: 'Ouvrir l’app',
    menu: 'Ouvrir le menu',
    close: 'Fermer le menu',
  },
  footer: {
    tagline: 'Décrivez un widget. Nexow le construit, le connecte aux données de marché en direct et le place sur votre canvas.',
    columns: [
      {
        title: 'Produit',
        links: [
          { label: 'Fonctionnalités', href: '/features' },
          { label: 'Plans', href: '/plans' },
          { label: 'Connecteurs', href: '/connectors' },
          { label: 'Automatisations', href: '/#automate' },
          { label: 'Communauté', href: '/#network' },
          { label: 'Roadmap', href: '/#roadmap' },
        ],
      },
      {
        title: 'Entreprise',
        links: [
          { label: 'À propos', href: '/about' },
          { label: 'Blog', href: '/blog' },
        ],
      },
      {
        title: 'Ressources',
        links: [
          { label: 'Ouvrir l’app', href: 'https://app.nexow.ai' },
          { label: 'Confidentialité', href: '/privacy' },
        ],
      },
    ],
    rights: 'Tous droits réservés.',
    disclaimer:
      'Nexow est une plateforme d’outils et de visualisation. Rien ici ne constitue un conseil financier. Les marchés comportent des risques ; tradez de manière responsable.',
    builtWith: 'Construit avec Astro. Privé par défaut.',
  },
  home: {
    meta: {
      title: 'Nexow — Créez des tableaux de bord de marché avec l’IA, en langage naturel',
      description:
        'Nexow est un espace de travail natif IA pour les marchés. Décrivez un widget en langage naturel et Nexow le construit, le connecte aux données en direct de plus de 28 connecteurs et ajoute bots cloud, agents IA, une communauté de makers et des récompenses XP — privé par défaut, gratuit pour démarrer.',
    },
    hero: {
      badge: 'Preview disponible',
      titleLead: 'Décrivez-le.',
      titleGradient: 'Nexow le construit.',
      titleTail: 'Tradez-le.',
      subtitle:
        'Un espace de travail natif IA pour les marchés. Demandez n’importe quel widget en langage naturel — Nexow écrit le code, l’exécute en toute sécurité et diffuse les données en direct sur un canvas libre. Automatisez-le avec des bots et des agents cloud, puis branchez-vous à une communauté de makers.',
      ctaPrimary: 'Ouvrir l’app',
      ctaSecondary: 'Voir comment ça marche',
      note: 'Sans inscription pour essayer · Privé dans votre navigateur · Ou un compte gratuit avec 10K crédits réservés',
      promptExample: 'Affiche un graphique en chandeliers de BTC-USD depuis Coinbase avec EMA 20 et 50 et RSI en dessous.',
      promptPlaceholder: 'Décrivez un widget…',
    },
    ticker: { label: 'Connecteurs en direct' },
    trust: 'Un canvas pour tous les marchés — FX, crypto, actions, futures, options et marchés de prédiction.',
    stats: [
      { n: 28, suffix: '+', label: 'connecteurs de données de marché en direct' },
      { n: 6, label: 'classes d’actifs sur un seul canvas' },
      { n: 10, suffix: 'K', label: 'crédits IA réservés à l’inscription' },
      { n: 30, prefix: '<', suffix: 's', label: 'd’une phrase à un widget fonctionnel' },
    ],
    showcase: {
      eyebrow: 'Showcase',
      title: 'Une phrase. N’importe quel widget.',
      subtitle:
        'Graphiques, carnets d’ordres, heatmaps, probabilités — si vous pouvez le décrire, Nexow peut le construire et le connecter aux données en direct.',
      generatedBadge: 'généré et en direct',
      tabs: [
        {
          label: 'Chandeliers + indicateurs',
          prompt: 'Graphique en chandeliers de BTC-USD depuis Coinbase avec EMA 20 et 50 et RSI en dessous.',
          caption: 'En streaming depuis Coinbase — EMA et RSI calculés dans le widget.',
        },
        {
          label: 'Profondeur du carnet',
          prompt: 'Profondeur du carnet d’ordres pour ETH-PERP sur Deribit, bids vs asks.',
          caption: 'Bids et asks agrégés en temps réel depuis le carnet Deribit.',
        },
        {
          label: 'Heatmap de corrélation',
          prompt: 'Heatmap de corrélation sur 30 jours pour BTC, ETH, SOL, EURUSD, or et SPX.',
          caption: 'Corrélations inter-actifs recalculées à chaque nouveau clôture.',
        },
        {
          label: 'Marchés de prédiction',
          prompt: 'Probabilités Kalshi d’une baisse des taux de la Fed au prochain FOMC, avec variation sur 24h.',
          caption: 'Probabilités d’événements diffusées directement depuis le carnet Kalshi.',
        },
      ],
    },
    features: {
      eyebrow: 'Pourquoi Nexow',
      title: 'Le tableau de bord se construit tout seul',
      subtitle:
        'Arrêtez de câbler les graphiques à la main. Décrivez ce que vous voulez voir et Nexow génère un widget réel et fonctionnel — puis vous l’affinez en langage naturel.',
      items: [
        {
          icon: 'sparkles',
          title: 'Widgets en langage naturel',
          body: 'Décrivez un graphique, un tableau, une heatmap ou un signal avec des mots. Nexow écrit le code du widget avec Claude et l’exécute en direct — sans boilerplate ni fichiers de config.',
        },
        {
          icon: 'shield',
          title: 'Sandboxé et sécurisé',
          body: 'Chaque widget s’exécute dans un iframe isolé avec une frontière stricte. Le code généré peut rendre et récupérer des données, mais ne touche jamais au reste de votre espace de travail.',
        },
        {
          icon: 'plug',
          title: 'Plus de 28 connecteurs en direct',
          body: 'Fournisseurs de données branchables — OANDA, Binance, Coinbase, Kraken, Polygon, Interactive Brokers, Kalshi, Polymarket et plus — acheminent les données en temps réel vers vos widgets.',
        },
        {
          icon: 'layers',
          title: 'Canvas libre',
          body: 'Glissez, redimensionnez et organisez les widgets sur un canvas libre, avec espaces et écrans pour FX, crypto, recherche — ce que vous tradez. Groupez les widgets et reliez leurs données en direct avec des Links.',
        },
        {
          icon: 'lock',
          title: 'Privé par défaut',
          body: 'Fonctionne entièrement en local : ajoutez votre propre clé Anthropic et la génération se fait dans votre navigateur. Widgets, versions et logs sont stockés dans IndexedDB — rien n’est envoyé à nos serveurs.',
        },
        {
          icon: 'history',
          title: 'Versions et bibliothèque de widgets',
          body: 'Chaque modification est versionnée avec des logs que vous pouvez inspecter. Enregistrez des widgets dans votre bibliothèque et réutilisez-les sur n’importe quel tableau de bord en un clic.',
        },
      ],
    },
    how: {
      eyebrow: 'Comment ça marche',
      title: 'D’une phrase à un widget en direct en quelques secondes',
      subtitle: 'Trois étapes. Pas de config, pas de build, pas de code glue.',
      steps: [
        {
          n: '01',
          title: 'Décrivez',
          body: 'Tapez ce que vous voulez en langage naturel — « un graphique de profondeur du carnet d’ordres pour ETH-PERP sur Deribit ».',
        },
        {
          n: '02',
          title: 'Générez',
          body: 'Nexow écrit le code du widget avec Claude et l’exécute dans un iframe sandboxé, connecté au connecteur que vous avez choisi.',
        },
        {
          n: '03',
          title: 'Affinez et organisez',
          body: 'Ajustez-le en langage naturel, versionnez-le, puis placez-le sur votre canvas à côté de tout ce que vous suivez.',
        },
      ],
    },
    automate: {
      eyebrow: 'Automatisez',
      title: 'Mettez votre espace en pilote automatique',
      subtitle:
        'Les widgets vous montrent le marché. Les bots, agents et Copilot agissent dessus — des automatisations cloud et de l’IA qui continuent de travailler onglet fermé.',
      liveLabel: 'En direct',
      soonLabel: 'Bientôt',
      items: [
        {
          icon: 'bot',
          title: 'Bots',
          body: 'Des automatisations cloud qui surveillent vos données et envoient signaux et alertes à vos widgets. Décrivez une alerte avec des mots — « préviens-moi quand BTC chute de 5% en une heure » — ou construisez-la visuellement avec seuils, % de variation, croisements de moyennes et digests. Les bots peuvent même surveiller un compte broker connecté et signaler les nouveaux trades.',
          status: 'live',
        },
        {
          icon: 'cpu',
          title: 'Agents',
          body: 'Des agents IA avec un vrai harnais — modèle, mémoire, skills, outils, connaissances et déclencheurs. Confiez un travail à un agent et laissez-le surveiller, raisonner et agir — concevez le vôtre dès aujourd’hui dans l’éditeur visuel du harnais ; le déploiement cloud arrive bientôt.',
          status: 'soon',
        },
        {
          icon: 'chat',
          title: 'Copilot',
          body: 'Un assistant IA pour tout votre espace. Joignez la capture d’un widget ou ses données en direct et demandez — « explique ce graphique », « résume ceci », « que surveiller ensuite ? ».',
          status: 'soon',
        },
      ],
      harnessChips: ['modèle', 'mémoire', 'skills', 'outils', 'connaissances', 'déclencheurs'],
      copilotPrompts: ['Explique ce graphique', 'Résume ces données', 'Que surveiller ensuite ?'],
    },
    connectors: {
      eyebrow: 'Connecteurs',
      title: 'Branchez-vous à tous les marchés',
      subtitle:
        'Des connecteurs branchables diffusent prix en direct, carnets d’ordres et données de référence directement dans vos widgets — FX, crypto, actions, futures, options, marchés de prédiction, bases de données et flux sociaux.',
      note: '28 connecteurs sont en direct aujourd’hui et 56 figurent au catalogue — brokers, exchanges, fournisseurs de données, bases de données et réseaux sociaux. Beaucoup diffusent directement depuis votre navigateur ; les autres passent par un proxy léger.',
      count: 28,
      countLabel: 'connecteurs en direct',
      groups: {
        fx: 'FX',
        crypto: 'Crypto',
        equities: 'Actions et futures',
        prediction: 'Marchés de prédiction',
        data: 'Données et bases de données',
        socials: 'Réseaux sociaux',
      },
    },
    network: {
      eyebrow: 'Le réseau',
      title: 'Construisez seul. Ou branchez-vous au réseau.',
      subtitle:
        'Restez entièrement local et privé, ou créez un compte gratuit et rejoignez un monde de makers qui construisent, partagent et tradent des tableaux de bord à vos côtés.',
      liveLabel: 'En direct',
      soonLabel: 'Bientôt',
      items: [
        {
          icon: 'users',
          title: 'Communauté',
          body: 'Découvrez et suivez des makers, likez et commentez dans un fil social pour bâtisseurs de marchés, et partagez des widgets que d’autres ajoutent directement à leur bibliothèque — avec des profils publics de maker.',
          status: 'live',
        },
        {
          icon: 'store',
          title: 'Marketplace',
          body: 'Le partage de widgets est déjà en direct dans la communauté — vient ensuite un marketplace pour acheter et vendre des widgets prêts à l’emploi, et gagner sur ce que vous construisez.',
          status: 'soon',
        },
        {
          icon: 'signal',
          title: 'Signaux de stratégie',
          body: 'Publiez des historiques audités, abonnez-vous aux signaux de makers de confiance et gagnez sur les stratégies que vous exécutez.',
          status: 'soon',
        },
        {
          icon: 'trophy',
          title: 'XP et récompenses',
          body: 'Un compte gamifié — chaque widget, bot et partage rapporte de l’XP. Montez de niveau, débloquez des badges pour vos succès et convertissez-les en crédits de récompense.',
          status: 'soon',
        },
      ],
      accountBadge: 'Compte gratuit',
      accountTitle: 'Un compte gratuit débloque le réseau',
      accountBody: 'Sans carte bancaire. Continuez à construire en local quand vous voulez — le compte reste toujours optionnel.',
      accountPoints: [
        '10 000 crédits IA réservés à l’inscription',
        'Sync cloud des espaces et widgets sur tous vos appareils',
        'Communauté, marketplace et bibliothèque de widgets',
        'XP, badges et crédits de récompense en construisant (bientôt)',
      ],
      accountCta: 'Créez votre compte gratuit',
    },
    plans: {
      eyebrow: 'Plans',
      title: 'Commencez gratuitement. Évoluez quand vous voulez.',
      subtitle:
        'Construisez gratuitement pour toujours — en local avec votre propre clé, ou avec 10 000 crédits réservés sur un compte gratuit. Montez en gamme pour plus de crédits, de bots et d’agents.',
      cta: 'Comparer tous les plans',
    },
    privacy: {
      eyebrow: 'Privé par conception',
      title: 'Vos clés. Vos données. Votre machine.',
      body: 'Nexow fonctionne entièrement en local par défaut. En mode privé, vous ajoutez votre propre clé API Anthropic et la génération de widgets se fait entièrement dans votre navigateur — rien n’est envoyé à nos serveurs, donc une session non authentifiée ne nous coûte rien et ne fuit rien.',
      points: [
        'La génération avec votre propre clé s’exécute côté client',
        'Widgets, versions et logs sont stockés dans votre navigateur (IndexedDB)',
        'Les connexions directes aux venues gardent les identifiants hors de notre infrastructure',
        'Aucun compte requis pour commencer à construire',
      ],
      cta: 'Lire l’architecture du mode local',
    },
    roadmap: {
      eyebrow: 'Roadmap',
      title: 'C’est la preview. Voici la suite.',
      subtitle:
        'Nexow a lancé une preview publique du canvas, de la génération de code, des bots cloud, des comptes et du fil communautaire. Les blocs suivants arrivent bientôt.',
      shipped: 'Disponible',
      soon: 'Bientôt',
      items: [
        { status: 'shipped', title: 'Génération de widgets par IA', body: 'Widgets en langage naturel exécutés en sandbox sur le canvas.' },
        { status: 'shipped', title: 'Plus de 28 connecteurs', body: 'Brokers, exchanges, fournisseurs de données, bases de données et réseaux sociaux en direct.' },
        { status: 'shipped', title: 'Bots et alertes cloud', body: 'Des automatisations qui surveillent vos données et envoient des signaux à vos widgets, onglet fermé.' },
        { status: 'shipped', title: 'Comptes et sync cloud', body: 'Comptes gratuits avec espaces synchronisés sur tous vos appareils — 10K crédits réservés pour le lancement de la plateforme.' },
        { status: 'shipped', title: 'Communauté : fil et profils', body: 'Suivez des makers, partagez des widgets dans le fil et réclamez votre @pseudo public.' },
        { status: 'soon', title: 'Agents et Copilot', body: 'Déployez des agents cloud avec un harnais complet, et un Copilot pour votre espace.' },
        { status: 'soon', title: 'Marketplace et signaux', body: 'Achetez et vendez des widgets, et publiez des signaux de stratégie audités pour gagner.' },
        { status: 'soon', title: 'XP, badges et récompenses', body: 'Un compte gamifié — gagnez XP et badges pour vos succès et convertissez-les en crédits de récompense.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions, réponses',
      subtitle: 'Tout ce qu’il faut savoir avant d’ouvrir l’app.',
      items: [
        {
          q: 'Qu’est-ce que Nexow ?',
          a: 'Nexow est un espace de travail natif IA pour les marchés. Vous décrivez un widget — un graphique, un tableau, une heatmap ou un signal — en langage naturel, et Nexow génère son code source, l’exécute dans un iframe sandboxé et lui diffuse des données de marché en direct sur un canvas libre. Autour, il ajoute des bots cloud, des agents IA, un Copilot et une communauté de makers.',
        },
        {
          q: 'Dois-je savoir coder ?',
          a: 'Non. Vous décrivez ce que vous voulez en langage naturel et Nexow écrit et exécute le widget pour vous. Si vous lisez le code, le code source et l’historique des versions de chaque widget sont disponibles pour inspection et affinage.',
        },
        {
          q: 'Mes données sont-elles privées ? Faut-il un compte ?',
          a: 'Aucun compte requis. Nexow fonctionne entièrement en local par défaut : ajoutez votre propre clé Anthropic et la génération se fait dans votre navigateur, avec widgets, versions et logs dans IndexedDB. Un compte gratuit reste toujours optionnel — il ajoute des crédits IA, la sync cloud et la communauté, mais vous pouvez continuer à construire 100% en local.',
        },
        {
          q: 'Quels marchés et venues sont pris en charge ?',
          a: 'Nexow compte 28 connecteurs en direct (56 au catalogue) couvrant FX (OANDA, LMAX, FXCM), crypto (Binance, Coinbase, Kraken, Deribit, BitMEX), actions et futures (Interactive Brokers, Alpaca, TradeStation, Polygon, Rithmic, IQFeed), marchés de prédiction (Kalshi, Polymarket), fournisseurs de données et bases de données (Alpha Vantage, Intrinio, Trading Economics, Postgres, ClickHouse, Qdrant) et flux sociaux (X, YouTube, Discord, Telegram, Spotify).',
        },
        {
          q: 'Que sont les bots et les agents ?',
          a: 'Les bots sont des automatisations cloud qui surveillent vos données et envoient signaux et alertes à vos widgets même onglet fermé — décrivez une alerte avec des mots ou construisez-la visuellement avec seuils, % de variation et croisements de moyennes. Les agents sont de l’IA avec un harnais complet (modèle, mémoire, skills, outils, déclencheurs) tournant dans le cloud ; le déploiement des agents et l’assistant Copilot arrivent bientôt.',
        },
        {
          q: 'Y a-t-il une communauté et un marketplace ?',
          a: 'Oui — un compte gratuit vous branche au réseau : suivez des makers, partagez et forkez tableaux de bord et widgets, publiez sur un marketplace et suivez des signaux de stratégie audités pour gagner. La communauté et le marketplace se déploient en ce moment.',
        },
        {
          q: 'Combien ça coûte ?',
          a: 'Gratuit pour toujours pour construire — en local avec votre propre clé, ou avec 10 000 crédits IA sur un compte gratuit. Les plans payants (Supporter et Sponsor) ajoutent des crédits mensuels et des limites de bots et d’agents plus élevées, et Partner s’adresse aux équipes qui ont besoin d’une infrastructure privée. Le paiement arrive bientôt ; voir la page tarifs.',
        },
        {
          q: 'Quel modèle IA alimente Nexow ?',
          a: 'Nexow génère avec les modèles Claude d’Anthropic via le SDK Anthropic — Claude Opus 4.8 par défaut, avec Sonnet 4.6 et Haiku 4.5 pour une génération plus rapide et économique. En mode privé, vous fournissez votre propre clé pour garder le contrôle total de l’usage et du coût.',
        },
      ],
    },
    cta: {
      title: 'Construisez votre premier widget dans la prochaine minute',
      subtitle: 'La preview est en ligne et gratuite à essayer. Sans inscription, sans setup — décrivez simplement ce que vous voulez voir.',
      primary: 'Ouvrir Nexow',
      secondary: 'Explorer les fonctionnalités',
    },
  },
  features: {
    meta: {
      title: 'Fonctionnalités — Nexow',
      description:
        'Génération de widgets en langage naturel, runtime sandboxé, plus de 28 connecteurs de données de marché, bots et agents cloud, communauté et marketplace de makers, mode local privé et bibliothèque de widgets versionnée. Découvrez tout ce que fait Nexow.',
    },
    hero: {
      badge: 'Fonctionnalités',
      title: 'Tout ce qu’il faut pour créer des tableaux de bord de marché avec des mots',
      subtitle:
        'Nexow transforme une phrase en widget fonctionnel connecté aux données — puis vous donne le canvas, les connecteurs, les automatisations cloud et le réseau pour construire un vrai poste de travail.',
    },
    groups: [
      {
        title: 'Générer',
        body: 'Décrivez ce que vous voulez voir ; Nexow l’écrit et l’exécute.',
        items: [
          { icon: 'sparkles', title: 'Codegen en langage naturel', body: 'Décrivez un widget et Nexow génère tout son code avec Claude — graphiques, tableaux, heatmaps, carnets d’ordres, signaux personnalisés.' },
          { icon: 'wand', title: 'Affiner par conversation', body: 'Changez ce que vous voulez en demandant. « Ajoute une EMA 200 », « passe en échelle log », « colore par funding rate » — Nexow modifie le widget sur place.' },
          { icon: 'history', title: 'Versionné et inspectable', body: 'Chaque génération est versionnée avec des logs. Revenez en arrière, comparez et lisez le code exact qui tourne dans chaque widget.' },
        ],
      },
      {
        title: 'Exécuter',
        body: 'Un runtime sécurisé et rapide pour le code généré.',
        items: [
          { icon: 'shield', title: 'Iframes sandboxés', body: 'Les widgets s’exécutent dans des iframes isolés avec une frontière stricte — le code généré peut rendre et récupérer des données, mais ne touche pas votre espace ni les autres widgets.' },
          { icon: 'bolt', title: 'Données en direct et en streaming', body: 'Les widgets s’abonnent aux prix en temps réel, carnets d’ordres et données de référence avec une latence minimale.' },
          { icon: 'layers', title: 'Canvas libre et espaces', body: 'Organisez les widgets sur un canvas infini, regroupez-les en espaces et écrans, et changez de configuration instantanément.' },
        ],
      },
      {
        title: 'Connecter',
        body: 'Des données branchables depuis les venues que vous utilisez vraiment.',
        items: [
          { icon: 'plug', title: 'Plus de 28 connecteurs de marché', body: 'FX, crypto, actions, futures, options et marchés de prédiction — OANDA, Binance, Coinbase, IBKR, Polygon, Kalshi, Polymarket et plus.' },
          { icon: 'globe', title: 'Direct depuis le navigateur', body: 'Lorsque CORS le permet, les appels authentifiés aux venues s’exécutent directement depuis votre navigateur et contournent entièrement notre proxy.' },
          { icon: 'database', title: 'Bases de données et réseaux', body: 'Pointez les widgets vers Postgres, ClickHouse ou Qdrant, ou tirez de X, YouTube, Discord et Telegram aux côtés des marchés en direct.' },
        ],
      },
      {
        title: 'Automatiser',
        body: 'Des automatisations cloud et de l’IA qui agissent en votre absence.',
        items: [
          { icon: 'bot', title: 'Bots cloud', body: 'Décrivez une alerte ou construisez-la visuellement — seuils, % de variation, croisements de moyennes, digests. Les bots tournent sur un battement cloud et poussent des signaux vers vos widgets, onglet fermé.' },
          { icon: 'cpu', title: 'Agents IA', body: 'Des agents avec un harnais complet — modèle, mémoire, skills, outils, connaissances et déclencheurs — tournant dans le cloud. Déploiement bientôt.' },
          { icon: 'chat', title: 'Copilot', body: 'Un assistant pour votre espace : joignez la capture d’un widget ou ses données et demandez-lui d’expliquer, résumer ou suggérer quoi surveiller. Bientôt.' },
        ],
      },
      {
        title: 'Réseau',
        body: 'Construisez aux côtés d’un monde de makers.',
        items: [
          { icon: 'users', title: 'Communauté', body: 'Suivez des makers, partagez et forkez tableaux de bord et widgets, et découvrez ce que d’autres construisent dans un fil social pour les marchés.' },
          { icon: 'store', title: 'Marketplace', body: 'Publiez des widgets que d’autres déposent sur leur canvas, et récupérez ceux déjà prêts pour le vôtre.' },
          { icon: 'signal', title: 'Signaux de stratégie', body: 'Publiez des historiques audités, abonnez-vous aux signaux de confiance et gagnez sur les stratégies que vous exécutez.' },
        ],
      },
      {
        title: 'Posséder',
        body: 'Privé par défaut, à vous pour toujours.',
        items: [
          { icon: 'lock', title: 'Mode local privé', body: 'Apportez votre propre clé Anthropic et générez des widgets côté client. Rien n’est envoyé à nos serveurs — sans compte.' },
          { icon: 'sync', title: 'Sync cloud optionnelle', body: 'Créez un compte gratuit pour synchroniser espaces, widgets et réglages sur tous vos appareils — avec un coffre d’identifiants chiffré.' },
          { icon: 'library', title: 'Bibliothèque réutilisable', body: 'Enregistrez n’importe quel widget dans votre bibliothèque et déposez-le sur n’importe quel tableau de bord en un clic.' },
        ],
      },
    ],
  },
  plansPage: {
    meta: {
      title: 'Plans — Nexow',
      description:
        'Construisez gratuitement pour toujours — en local avec votre propre clé, ou avec 10 000 crédits IA sur un compte gratuit. Comparez Free, Supporter, Sponsor et Partner pour crédits, bots, agents et personnalisation.',
    },
    hero: {
      badge: 'Plans',
      title: 'Gratuit pour démarrer. De la place pour grandir.',
      subtitle:
        'Construisez gratuitement — en local avec votre propre clé, ou inscrivez-vous avec 10 000 crédits IA. Montez en gamme quand vous avez besoin de plus de capacité, d’automatisation et de finition.',
    },
    comingSoon:
      'Le paiement Supporter et Sponsor arrive bientôt. Tout le monde est sur Free aujourd’hui — créez un compte pour être parmi les premiers à l’ouverture.',
    highlights: {
      title: 'Ce qui évolue avec votre plan',
      items: [
        {
          icon: 'coins',
          title: 'Crédits IA',
          body: 'Alimentent la génération de widgets, les réponses Copilot et la logique des bots. Free inclut 10K pour démarrer ; les plans payants se renouvellent chaque mois.',
        },
        {
          icon: 'bot',
          title: 'Bots et agents',
          body: 'Les bots surveillent les marchés et déclenchent des actions. Les agents exécutent des workflows en plusieurs étapes. Les plans supérieurs augmentent les limites concurrentes.',
        },
        {
          icon: 'sparkles',
          title: 'Personnalisation',
          body: 'Couleurs d’accent, logos et UI premium se débloquent en montant de gamme — faites de Nexow le vôtre.',
        },
      ],
    },
    included: {
      title: 'Inclus dans chaque plan',
      items: [
        'Écrans, espaces et widgets illimités',
        '28+ connecteurs de données de marché en direct',
        'Runtime de widgets en bac à sable',
        'Copilot global',
        'Accès communauté et marketplace',
      ],
    },
    billing: { monthly: 'Mensuel', yearly: 'Annuel', save: '2 mois offerts' },
    tiers: [
      {
        name: 'Free',
        tagline: 'Tout ce qu’il faut pour construire.',
        priceMonthly: '0 €',
        priceYearly: '0 €',
        cadence: 'pour toujours',
        stats: ['10K crédits', '10 bots', '3 agents'],
        cta: 'Démarrer gratuitement',
        ctaHref: 'https://app.nexow.ai',
        features: [
          '10 000 crédits IA à l’inscription',
          'Écrans, espaces et widgets illimités',
          'Connexions navigateur illimitées',
          'Sync cloud multi-appareils',
          'Copilot global',
          'Accès communauté et marketplace',
        ],
      },
      {
        name: 'Supporter',
        tagline: 'Pour les makers qui veulent plus d’espace.',
        priceMonthly: '9,99 €',
        priceYearly: '8,33 €',
        billedYearly: '99,90 € par an',
        cadence: '/mois',
        badge: 'Bientôt',
        stats: ['50K crédits/mois', '30 bots', '10 agents'],
        note: 'Tout ce qui est dans Free, plus :',
        cta: 'Devenir Supporter',
        ctaHref: 'https://app.nexow.ai',
        features: [
          '50 000 crédits chaque mois',
          'Jusqu’à 30 bots et 10 agents',
          'Un Copilot par espace de travail',
          'Deuxième couleur d’accent (dégradé)',
          'Options d’UI et d’apparence exclusives',
        ],
      },
      {
        name: 'Sponsor',
        tagline: 'Pour les power users qui passent au pro.',
        priceMonthly: '69,99 €',
        priceYearly: '58,33 €',
        billedYearly: '699,90 € par an',
        cadence: '/mois',
        badge: 'Meilleur rapport',
        stats: ['800K crédits/mois', '300 bots', '100 agents'],
        note: 'Tout ce qui est dans Supporter, plus :',
        cta: 'Devenir Sponsor',
        ctaHref: 'https://app.nexow.ai',
        featured: true,
        features: [
          '800 000 crédits chaque mois',
          'Jusqu’à 300 bots et 100 agents',
          'Connexions sur mesure (Connector Builder)',
          'Un Copilot par écran',
          'Importez votre propre logo',
          'Personnalisations d’UI premium',
        ],
      },
      {
        name: 'Partner',
        tagline: 'Pour les équipes qui ont besoin de tout.',
        priceMonthly: 'Sur mesure',
        priceYearly: 'Sur mesure',
        cadence: '',
        stats: ['Infra privée', 'À vos côtés', 'SLA'],
        note: 'Tout ce qui est dans Sponsor, plus :',
        cta: 'Nous contacter',
        ctaHref: 'mailto:partners@nexow.ai',
        features: [
          'Infrastructure privée',
          'Mise en place accompagnée',
          'Développement sur mesure de premier ordre',
          'Marque et personnalisation sur mesure',
          'Support dédié',
        ],
      },
    ],
    faqTitle: 'Questions sur les plans',
    faq: [
      { q: 'Nexow est-il vraiment gratuit ?', a: 'Oui. Vous pouvez construire gratuitement pour toujours — entièrement en local avec votre propre clé Anthropic (vous ne payez que votre usage de l’API), ou créez un compte gratuit et recevez 10 000 crédits IA sans clé à vous.' },
      { q: 'Que sont les crédits ?', a: 'Les crédits mesurent l’usage de l’IA — génération de widgets, liens, bots et réponses de Copilot. Le compte gratuit inclut 10 000 pour démarrer, et les plans payants offrent une allocation mensuelle (50K sur Supporter, 800K sur Sponsor). Vous pouvez en acheter davantage à tout moment.' },
      { q: 'Quand les plans payants arrivent-ils ?', a: 'Supporter et Sponsor sont déjà définis et affichés dans l’app, mais le paiement arrive bientôt. Tout le monde est sur Free aujourd’hui — créez un compte pour être parmi les premiers à l’ouverture.' },
      { q: 'Puis-je payer à l’année ?', a: 'Oui. La facturation annuelle vous offre deux mois gratuits par rapport au paiement mensuel. Vous pouvez basculer entre mensuel et annuel à tout moment.' },
    ],
  },
  connectorsPage: {
    meta: {
      title: 'Connecteurs — Nexow',
      description:
        'Parcourez tous les connecteurs Nexow — 28 en direct et 56 au catalogue. Brokers, exchanges, DEX, marchés de prédiction, fournisseurs de données, bases de données et réseaux sociaux. Cherchez, filtrez et connectez.',
    },
    hero: {
      badge: 'Connecteurs',
      title: 'Tous les marchés, un seul canvas',
      subtitle:
        'Cherchez dans le catalogue complet des venues auxquels Nexow se connecte — brokers, exchanges, fournisseurs de données, bases de données et réseaux. Les connecteurs en direct fonctionnent déjà ; le reste arrive bientôt.',
    },
    searchPlaceholder: 'Rechercher des connecteurs…',
    all: 'Tous',
    categories: { finance: 'Finance', data: 'Données', socials: 'Réseaux' },
    status: { all: 'Tous', live: 'En direct', soon: 'Bientôt' },
    kinds: {
      broker: 'Broker',
      exchange: 'Exchange',
      prediction: 'Marché de prédiction',
      dex: 'DEX',
      aggregator: 'Agrégateur',
      data: 'Données de marché',
      sql: 'Base de données SQL',
      nosql: 'Base de données NoSQL',
      warehouse: 'Data warehouse',
      vector: 'Base de données vectorielle',
      messaging: 'Messagerie',
      social: 'Réseau social',
      video: 'Vidéo',
      community: 'Communauté',
      music: 'Musique',
    },
    assets: {
      equities: 'Actions',
      indices: 'Indices',
      fixed_income: 'Taux',
      fx: 'FX',
      commodities: 'Matières premières',
      crypto: 'Crypto',
      volatility: 'Volatilité',
      prediction_markets: 'Prédiction',
    },
    visit: 'Visiter le site',
    results: '{n} connecteurs',
    empty: 'Aucun connecteur ne correspond à votre recherche.',
    exploreCta: 'Explorer tous les connecteurs',
  },
  about: {
    meta: {
      title: 'À propos — Nexow',
      description:
        'Nexow construit un poste de travail natif IA pour les marchés : décrivez n’importe quel widget en langage naturel et obtenez un tableau de bord fonctionnel connecté aux données. Privé par défaut. Découvrez notre mission.',
    },
    hero: {
      badge: 'À propos',
      title: 'Un poste de travail natif IA pour les marchés',
      subtitle:
        'Nous pensons que construire un tableau de bord de trading devrait être aussi rapide que de le décrire. Nexow transforme le langage naturel en widgets fonctionnels connectés aux données — et vous garde le contrôle de vos clés et données.',
    },
    missionTitle: 'Pourquoi nous construisons Nexow',
    mission: [
      'Chaque trader et analyste finit par reconstruire à la main les mêmes graphiques, tableaux et moniteurs — en collant des APIs, en gérant des websockets et en luttant avec la mise en page. Les outils sont puissants mais lents, et les bons sont enfermés derrière des plateformes lourdes.',
      'Nexow inverse cela. Vous décrivez ce que vous voulez voir et une IA écrit un widget réel et fonctionnel — sandboxé, versionné et connecté aux données en direct des venues que vous utilisez déjà. Le tableau de bord s’assemble tout seul, et vous l’affinez en langage naturel.',
      'Nous le construisons avec la confidentialité en premier : fonctionnez entièrement en local avec votre propre clé, gardez vos données dans votre navigateur et connectez-vous directement aux venues lorsque c’est possible. À mesure que nous ajoutons des agents de trading, des composants serveur et une couche communautaire, ce principe reste fixe — vos clés, vos données, votre machine.',
    ],
    valuesTitle: 'Ce que nous valorisons',
    values: [
      { icon: 'lock', title: 'Privé par défaut', body: 'Local d’abord, apportez votre propre clé, aucune donnée ne quitte votre machine sauf si vous le choisissez.' },
      { icon: 'bolt', title: 'Rapidité vers l’insight', body: 'D’une phrase à un widget en direct en quelques secondes — le chemin le plus court entre une question et un graphique.' },
      { icon: 'shield', title: 'Sûr par construction', body: 'Le code généré s’exécute en sandbox avec une frontière stricte, pour que la puissance ne signifie jamais le risque.' },
      { icon: 'globe', title: 'Ouvert à tous les marchés', body: 'FX, crypto, actions, futures, options et marchés de prédiction — un canvas pour tous.' },
    ],
    ctaTitle: 'Voyez par vous-même',
    ctaBody: 'La preview est en ligne. Décrivez un widget et regardez Nexow le construire.',
    cta: 'Ouvrir l’app',
  },
  blog: {
    meta: {
      title: 'Blog — Nexow',
      description:
        'Guides et analyses approfondies sur la création de tableaux de bord de marché avec l’IA, la connexion de données en direct et les outils de trading — par l’équipe Nexow.',
    },
    title: 'Le blog Nexow',
    subtitle: 'Construire des outils de marché natifs IA — guides, analyses et notes produit.',
    latest: 'Nouveau',
    readMore: 'Lire l’article',
    backToBlog: 'Retour au blog',
    published: 'Publié',
    updated: 'Mis à jour',
    minRead: 'min de lecture',
  },
  notFound: {
    title: 'Cette page a dérivé hors du canvas',
    body: 'La page que vous cherchez n’existe pas — mais votre prochain tableau de bord, peut-être.',
    cta: 'Retour à l’accueil',
  },
};

/* ------------------------------------------------------------------ */
export const content: Record<Lang, SiteContent> = { en, es, fr };

export function useContent(lang: Lang): SiteContent {
  return content[lang];
}
