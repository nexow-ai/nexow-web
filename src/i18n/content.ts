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

export interface PricingTier {
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  cta: string;
  ctaHref: string;
  featured?: boolean;
  features: string[];
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
    connectors: {
      eyebrow: string;
      title: string;
      subtitle: string;
      note: string;
      groups: Record<ConnectorGroupKey, string>;
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
  pricing: {
    meta: { title: string; description: string };
    hero: { badge: string; title: string; subtitle: string };
    tiers: PricingTier[];
    faqTitle: string;
    faq: Faq[];
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
      { label: 'Pricing', href: '/pricing' },
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
          { label: 'Pricing', href: '/pricing' },
          { label: 'Connectors', href: '/#connectors' },
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
        'Nexow is an AI-native dashboard builder for markets. Describe a widget in plain English and Nexow generates it, runs it sandboxed, and wires it to live data from 20+ trading and market-data connectors — private by default.',
    },
    hero: {
      badge: 'Preview now live',
      titleLead: 'Describe it.',
      titleGradient: 'Nexow builds it.',
      titleTail: 'Trade it.',
      subtitle:
        'An AI-native dashboard builder for markets. Ask for any widget in plain language — Nexow writes the code, runs it safely, and streams live data from your favorite venues onto a free-form canvas.',
      ctaPrimary: 'Launch the app',
      ctaSecondary: 'See how it works',
      note: 'No sign-up to try · Runs private in your browser · Bring your own key',
      promptExample: 'Show a candlestick chart of BTC-USD from Coinbase with 20 & 50 EMA and RSI below.',
      promptPlaceholder: 'Describe a widget…',
    },
    ticker: { label: 'Live connectors' },
    trust: 'One canvas for every market — FX, crypto, equities, futures, options & prediction markets.',
    stats: [
      { n: 22, suffix: '+', label: 'live market-data connectors' },
      { n: 6, label: 'asset classes on one canvas' },
      { n: 0, label: 'bytes sent to our servers in private mode' },
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
          title: '20+ live data connectors',
          body: 'Pluggable market-data providers — OANDA, Binance, Coinbase, Kraken, Polygon, Interactive Brokers, Kalshi, Polymarket and more — route real-time data to your widgets.',
        },
        {
          icon: 'layers',
          title: 'Free-form canvas',
          body: 'Drag, resize and arrange widgets on an infinite canvas. Group them into workspaces and screens for FX, crypto, research — whatever you trade.',
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
    connectors: {
      eyebrow: 'Connectors',
      title: 'Plug into every market',
      subtitle:
        'Pluggable connectors stream live prices, order books and reference data straight into your widgets — across FX, crypto, equities, futures, options and prediction markets.',
      note: 'Some venues connect directly from your browser where CORS allows; the rest route through a thin proxy. New connectors are added regularly.',
      groups: {
        fx: 'FX',
        crypto: 'Crypto',
        equities: 'Equities & futures',
        prediction: 'Prediction markets',
        data: 'Data & databases',
      },
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
        'Nexow shipped a public preview of the canvas and codegen. The building blocks below are landing next.',
      shipped: 'Shipped',
      soon: 'Coming soon',
      items: [
        { status: 'shipped', title: 'AI widget codegen', body: 'Natural-language widgets running sandboxed on the canvas.' },
        { status: 'shipped', title: 'Market-data connectors', body: '20+ venues streaming live data into widgets.' },
        { status: 'shipped', title: 'Workspaces & library', body: 'Multi-screen canvas, versions, logs and a reusable widget library.' },
        { status: 'soon', title: 'Trading agents', body: 'Autonomous agents that watch your widgets and act on rules you describe.' },
        { status: 'soon', title: 'Server components', body: 'Persistent server-side widgets and jobs that keep running when your tab is closed.' },
        { status: 'soon', title: 'Community', body: 'Share widgets and dashboards, fork what others build, and publish to a public library.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions, answered',
      subtitle: 'Everything you need to know before you launch the app.',
      items: [
        {
          q: 'What is Nexow?',
          a: 'Nexow is an AI-native dashboard builder for financial markets. You describe a widget — a chart, table, heatmap or signal — in plain language, and Nexow generates its source code, runs it in a sandboxed iframe, and streams live market data into it on a free-form canvas.',
        },
        {
          q: 'Do I need to know how to code?',
          a: 'No. You describe what you want in natural language and Nexow writes and runs the widget for you. If you do read code, every widget’s source and version history is available to inspect and refine.',
        },
        {
          q: 'Is my data private?',
          a: 'Yes. Nexow runs fully local by default: you add your own Anthropic API key and widget generation happens in your browser. Your widgets, versions and logs are stored in your browser’s IndexedDB, and many venues connect directly from the browser — so your data and credentials stay on your machine.',
        },
        {
          q: 'Which markets and venues are supported?',
          a: 'Nexow ships 20+ pluggable connectors spanning FX (OANDA, LMAX, FXCM), crypto (Binance, Coinbase, Kraken, Deribit, BitMEX), equities and futures (Interactive Brokers, Alpaca, TradeStation, Polygon), prediction markets (Kalshi, Polymarket) and data providers (Alpha Vantage, Intrinio, Trading Economics, and databases like Postgres and ClickHouse).',
        },
        {
          q: 'How much does it cost?',
          a: 'The preview is free to try, and in private mode you only pay for your own Anthropic API usage. See the pricing page for details on future hosted plans.',
        },
        {
          q: 'Which AI model powers Nexow?',
          a: 'Nexow generates widgets using Anthropic’s Claude models via the Anthropic SDK. In private mode you supply your own key so you stay in full control of usage and cost.',
        },
        {
          q: 'What’s coming next?',
          a: 'Trading agents that act on rules you describe, persistent server-side components, and a community layer to share and fork widgets and dashboards.',
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
        'Natural-language widget generation, a sandboxed runtime, 20+ market-data connectors, a free-form canvas, private local-mode and a versioned widget library. Explore everything Nexow does.',
    },
    hero: {
      badge: 'Features',
      title: 'Everything you need to build markets dashboards with words',
      subtitle:
        'Nexow turns a sentence into a running, data-connected widget — then gives you the canvas, connectors and privacy model to build a real workstation.',
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
          { icon: 'layers', title: 'Free-form canvas & workspaces', body: 'Arrange widgets on an infinite canvas, group them into workspaces and screens, and switch between setups instantly.' },
        ],
      },
      {
        title: 'Connect',
        body: 'Pluggable data from the venues you actually use.',
        items: [
          { icon: 'plug', title: '20+ market-data connectors', body: 'FX, crypto, equities, futures, options and prediction markets — OANDA, Binance, Coinbase, IBKR, Polygon, Kalshi, Polymarket and more.' },
          { icon: 'globe', title: 'Browser-direct where possible', body: 'Where CORS allows, authenticated venue calls run straight from your browser and bypass our proxy entirely.' },
          { icon: 'database', title: 'Databases too', body: 'Point widgets at Postgres, ClickHouse or Qdrant to blend your own data with live markets.' },
        ],
      },
      {
        title: 'Own',
        body: 'Private by default, yours to keep.',
        items: [
          { icon: 'lock', title: 'Private local mode', body: 'Bring your own Anthropic key and generate widgets client-side. Nothing is sent to our servers.' },
          { icon: 'save', title: 'Local persistence', body: 'Widgets, versions, logs and your library live in your browser’s IndexedDB — available offline, tied to no account.' },
          { icon: 'library', title: 'Reusable library', body: 'Save any widget to your library and drop it into any dashboard in one click.' },
        ],
      },
    ],
  },
  pricing: {
    meta: {
      title: 'Pricing — Nexow',
      description:
        'Start free in private mode with your own Anthropic key. Hosted plans with server components, trading agents and community features are coming. See Nexow pricing.',
    },
    hero: {
      badge: 'Pricing',
      title: 'Start free. Pay only for what you use.',
      subtitle:
        'The preview runs private in your browser — you only pay your own Anthropic usage. Hosted plans arrive as agents, server components and community land.',
    },
    tiers: [
      {
        name: 'Private',
        price: '$0',
        cadence: 'forever',
        tagline: 'Fully local. Bring your own key.',
        cta: 'Launch app',
        ctaHref: 'https://app.nexow.ai',
        features: [
          'Natural-language widget codegen',
          'Sandboxed runtime & free-form canvas',
          'All 20+ market-data connectors',
          'Versions, logs & widget library',
          'Runs in your browser (IndexedDB)',
          'You pay only your Anthropic API usage',
        ],
      },
      {
        name: 'Pro',
        price: 'Coming soon',
        cadence: '',
        tagline: 'Hosted codegen & persistence.',
        cta: 'Join the waitlist',
        ctaHref: 'https://app.nexow.ai',
        featured: true,
        features: [
          'Everything in Private',
          'Managed codegen — no key needed',
          'Server components that keep running',
          'Cloud-synced workspaces',
          'Priority connectors & higher limits',
          'Email support',
        ],
      },
      {
        name: 'Teams',
        price: 'Let’s talk',
        cadence: '',
        tagline: 'For desks & communities.',
        cta: 'Contact us',
        ctaHref: 'mailto:hello@nexow.ai',
        features: [
          'Everything in Pro',
          'Trading agents & automation',
          'Shared workspaces & community library',
          'SSO & role-based access',
          'Dedicated support',
          'Custom connectors',
        ],
      },
    ],
    faqTitle: 'Pricing questions',
    faq: [
      { q: 'Is the preview really free?', a: 'Yes. Private mode is free to use — you only pay for your own Anthropic API usage when generating widgets. There’s no Nexow subscription required to build on the canvas today.' },
      { q: 'Do I need an Anthropic key?', a: 'For private mode, yes — you add your own key in Settings and codegen runs in your browser. Hosted plans will offer managed codegen so no key is needed.' },
      { q: 'When do paid plans launch?', a: 'Pro and Teams land alongside server components, trading agents and community features. Join the waitlist from the app to hear first.' },
      { q: 'Are there usage limits?', a: 'In private mode your only limit is your own Anthropic account. Hosted plans will publish clear limits per tier.' },
    ],
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
      { label: 'Precios', href: '/pricing' },
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
          { label: 'Precios', href: '/pricing' },
          { label: 'Conectores', href: '/#connectors' },
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
        'Nexow es un creador de dashboards nativo de IA para mercados. Describe un widget en lenguaje natural y Nexow lo genera, lo ejecuta de forma aislada y lo conecta a datos en vivo de más de 20 conectores de trading y mercado — privado por defecto.',
    },
    hero: {
      badge: 'Preview ya disponible',
      titleLead: 'Descríbelo.',
      titleGradient: 'Nexow lo crea.',
      titleTail: 'Opéralo.',
      subtitle:
        'Un creador de dashboards nativo de IA para mercados. Pide cualquier widget en lenguaje natural — Nexow escribe el código, lo ejecuta de forma segura y transmite datos en vivo de tus venues favoritos a un lienzo libre.',
      ctaPrimary: 'Abrir la app',
      ctaSecondary: 'Ver cómo funciona',
      note: 'Sin registro para probar · Corre privado en tu navegador · Usa tu propia clave',
      promptExample: 'Muestra un gráfico de velas de BTC-USD de Coinbase con EMA 20 y 50 y RSI debajo.',
      promptPlaceholder: 'Describe un widget…',
    },
    ticker: { label: 'Conectores en vivo' },
    trust: 'Un lienzo para todos los mercados — FX, cripto, acciones, futuros, opciones y mercados de predicción.',
    stats: [
      { n: 22, suffix: '+', label: 'conectores de datos de mercado en vivo' },
      { n: 6, label: 'clases de activos en un solo lienzo' },
      { n: 0, label: 'bytes enviados a nuestros servidores en modo privado' },
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
          title: 'Más de 20 conectores en vivo',
          body: 'Proveedores de datos conectables — OANDA, Binance, Coinbase, Kraken, Polygon, Interactive Brokers, Kalshi, Polymarket y más — llevan datos en tiempo real a tus widgets.',
        },
        {
          icon: 'layers',
          title: 'Lienzo libre',
          body: 'Arrastra, redimensiona y organiza widgets en un lienzo infinito. Agrúpalos en espacios y pantallas para FX, cripto, research — lo que operes.',
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
    connectors: {
      eyebrow: 'Conectores',
      title: 'Conéctate a todos los mercados',
      subtitle:
        'Conectores conectables transmiten precios en vivo, order books y datos de referencia directo a tus widgets — en FX, cripto, acciones, futuros, opciones y mercados de predicción.',
      note: 'Algunos venues se conectan directo desde tu navegador donde CORS lo permite; el resto pasa por un proxy ligero. Añadimos conectores nuevos con frecuencia.',
      groups: {
        fx: 'FX',
        crypto: 'Cripto',
        equities: 'Acciones y futuros',
        prediction: 'Mercados de predicción',
        data: 'Datos y bases de datos',
      },
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
        'Nexow lanzó una preview pública del lienzo y la generación de código. Los siguientes bloques están por llegar.',
      shipped: 'Disponible',
      soon: 'Próximamente',
      items: [
        { status: 'shipped', title: 'Generación de widgets con IA', body: 'Widgets en lenguaje natural corriendo aislados en el lienzo.' },
        { status: 'shipped', title: 'Conectores de datos de mercado', body: 'Más de 20 venues transmitiendo datos en vivo a los widgets.' },
        { status: 'shipped', title: 'Espacios y biblioteca', body: 'Lienzo multipantalla, versiones, logs y una biblioteca de widgets reutilizable.' },
        { status: 'soon', title: 'Agentes de trading', body: 'Agentes autónomos que vigilan tus widgets y actúan según las reglas que describas.' },
        { status: 'soon', title: 'Componentes de servidor', body: 'Widgets y trabajos persistentes en el servidor que siguen corriendo con la pestaña cerrada.' },
        { status: 'soon', title: 'Comunidad', body: 'Comparte widgets y dashboards, haz fork de lo que otros crean y publica en una biblioteca pública.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Preguntas, respondidas',
      subtitle: 'Todo lo que necesitas saber antes de abrir la app.',
      items: [
        {
          q: '¿Qué es Nexow?',
          a: 'Nexow es un creador de dashboards nativo de IA para los mercados financieros. Describes un widget — un gráfico, tabla, mapa de calor o señal — en lenguaje natural, y Nexow genera su código, lo ejecuta en un iframe aislado y le transmite datos de mercado en vivo sobre un lienzo libre.',
        },
        {
          q: '¿Necesito saber programar?',
          a: 'No. Describes lo que quieres en lenguaje natural y Nexow escribe y ejecuta el widget por ti. Si lees código, el código fuente y el historial de versiones de cada widget están disponibles para inspeccionar y refinar.',
        },
        {
          q: '¿Mis datos son privados?',
          a: 'Sí. Nexow corre totalmente local por defecto: añades tu propia clave de Anthropic y la generación ocurre en tu navegador. Tus widgets, versiones y logs se guardan en el IndexedDB de tu navegador, y muchos venues se conectan directo desde el navegador — así tus datos y credenciales se quedan en tu máquina.',
        },
        {
          q: '¿Qué mercados y venues soporta?',
          a: 'Nexow incluye más de 20 conectores conectables que abarcan FX (OANDA, LMAX, FXCM), cripto (Binance, Coinbase, Kraken, Deribit, BitMEX), acciones y futuros (Interactive Brokers, Alpaca, TradeStation, Polygon), mercados de predicción (Kalshi, Polymarket) y proveedores de datos (Alpha Vantage, Intrinio, Trading Economics, y bases de datos como Postgres y ClickHouse).',
        },
        {
          q: '¿Cuánto cuesta?',
          a: 'La preview es gratis para probar, y en modo privado solo pagas tu propio uso de la API de Anthropic. Consulta la página de precios para los detalles de los futuros planes gestionados.',
        },
        {
          q: '¿Qué modelo de IA usa Nexow?',
          a: 'Nexow genera widgets con los modelos Claude de Anthropic mediante el SDK de Anthropic. En modo privado aportas tu propia clave, así mantienes el control total del uso y el coste.',
        },
        {
          q: '¿Qué viene después?',
          a: 'Agentes de trading que actúan según las reglas que describas, componentes persistentes del lado del servidor y una capa de comunidad para compartir y hacer fork de widgets y dashboards.',
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
        'Generación de widgets en lenguaje natural, runtime aislado, más de 20 conectores de datos de mercado, lienzo libre, modo local privado y biblioteca de widgets versionada. Descubre todo lo que hace Nexow.',
    },
    hero: {
      badge: 'Funciones',
      title: 'Todo lo que necesitas para crear dashboards de mercado con palabras',
      subtitle:
        'Nexow convierte una frase en un widget funcionando y conectado a datos — y te da el lienzo, los conectores y el modelo de privacidad para armar una estación de trabajo real.',
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
          { icon: 'layers', title: 'Lienzo libre y espacios', body: 'Organiza widgets en un lienzo infinito, agrúpalos en espacios y pantallas, y cambia de configuración al instante.' },
        ],
      },
      {
        title: 'Conecta',
        body: 'Datos conectables de los venues que de verdad usas.',
        items: [
          { icon: 'plug', title: 'Más de 20 conectores', body: 'FX, cripto, acciones, futuros, opciones y mercados de predicción — OANDA, Binance, Coinbase, IBKR, Polygon, Kalshi, Polymarket y más.' },
          { icon: 'globe', title: 'Directo desde el navegador', body: 'Donde CORS lo permite, las llamadas autenticadas a los venues corren directo desde tu navegador y evitan por completo nuestro proxy.' },
          { icon: 'database', title: 'También bases de datos', body: 'Apunta widgets a Postgres, ClickHouse o Qdrant para mezclar tus propios datos con mercados en vivo.' },
        ],
      },
      {
        title: 'Controla',
        body: 'Privado por defecto, tuyo para siempre.',
        items: [
          { icon: 'lock', title: 'Modo local privado', body: 'Usa tu propia clave de Anthropic y genera widgets en el cliente. Nada se envía a nuestros servidores.' },
          { icon: 'save', title: 'Persistencia local', body: 'Widgets, versiones, logs y tu biblioteca viven en el IndexedDB de tu navegador — disponibles offline y sin cuenta.' },
          { icon: 'library', title: 'Biblioteca reutilizable', body: 'Guarda cualquier widget en tu biblioteca y colócalo en cualquier dashboard con un clic.' },
        ],
      },
    ],
  },
  pricing: {
    meta: {
      title: 'Precios — Nexow',
      description:
        'Empieza gratis en modo privado con tu propia clave de Anthropic. Llegan planes gestionados con componentes de servidor, agentes de trading y comunidad. Consulta los precios de Nexow.',
    },
    hero: {
      badge: 'Precios',
      title: 'Empieza gratis. Paga solo por lo que uses.',
      subtitle:
        'La preview corre privada en tu navegador — solo pagas tu propio uso de Anthropic. Los planes gestionados llegan con los agentes, los componentes de servidor y la comunidad.',
    },
    tiers: [
      {
        name: 'Privado',
        price: '0 €',
        cadence: 'para siempre',
        tagline: 'Totalmente local. Con tu propia clave.',
        cta: 'Abrir la app',
        ctaHref: 'https://app.nexow.ai',
        features: [
          'Generación de widgets en lenguaje natural',
          'Runtime aislado y lienzo libre',
          'Los más de 20 conectores de mercado',
          'Versiones, logs y biblioteca de widgets',
          'Corre en tu navegador (IndexedDB)',
          'Solo pagas tu uso de la API de Anthropic',
        ],
      },
      {
        name: 'Pro',
        price: 'Próximamente',
        cadence: '',
        tagline: 'Generación y persistencia gestionadas.',
        cta: 'Únete a la lista',
        ctaHref: 'https://app.nexow.ai',
        featured: true,
        features: [
          'Todo lo de Privado',
          'Generación gestionada — sin clave',
          'Componentes de servidor que siguen corriendo',
          'Espacios sincronizados en la nube',
          'Conectores prioritarios y límites más altos',
          'Soporte por email',
        ],
      },
      {
        name: 'Equipos',
        price: 'Hablemos',
        cadence: '',
        tagline: 'Para mesas y comunidades.',
        cta: 'Contáctanos',
        ctaHref: 'mailto:hello@nexow.ai',
        features: [
          'Todo lo de Pro',
          'Agentes de trading y automatización',
          'Espacios compartidos y biblioteca comunitaria',
          'SSO y acceso por roles',
          'Soporte dedicado',
          'Conectores a medida',
        ],
      },
    ],
    faqTitle: 'Preguntas sobre precios',
    faq: [
      { q: '¿La preview es de verdad gratis?', a: 'Sí. El modo privado es gratis — solo pagas tu propio uso de la API de Anthropic al generar widgets. Hoy no hace falta ninguna suscripción de Nexow para construir en el lienzo.' },
      { q: '¿Necesito una clave de Anthropic?', a: 'Para el modo privado, sí — añades tu propia clave en Ajustes y la generación corre en tu navegador. Los planes gestionados ofrecerán generación sin necesidad de clave.' },
      { q: '¿Cuándo salen los planes de pago?', a: 'Pro y Equipos llegan junto a los componentes de servidor, los agentes de trading y la comunidad. Únete a la lista desde la app para enterarte primero.' },
      { q: '¿Hay límites de uso?', a: 'En modo privado tu único límite es tu propia cuenta de Anthropic. Los planes gestionados publicarán límites claros por nivel.' },
    ],
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
      { label: 'Tarifs', href: '/pricing' },
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
          { label: 'Tarifs', href: '/pricing' },
          { label: 'Connecteurs', href: '/#connectors' },
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
        'Nexow est un créateur de tableaux de bord natif IA pour les marchés. Décrivez un widget en langage naturel et Nexow le génère, l’exécute en sandbox et le connecte aux données en direct de plus de 20 connecteurs de trading et de marché — privé par défaut.',
    },
    hero: {
      badge: 'Preview disponible',
      titleLead: 'Décrivez-le.',
      titleGradient: 'Nexow le construit.',
      titleTail: 'Tradez-le.',
      subtitle:
        'Un créateur de tableaux de bord natif IA pour les marchés. Demandez n’importe quel widget en langage naturel — Nexow écrit le code, l’exécute en toute sécurité et diffuse les données en direct de vos venues préférées sur un canvas libre.',
      ctaPrimary: 'Ouvrir l’app',
      ctaSecondary: 'Voir comment ça marche',
      note: 'Sans inscription pour essayer · Fonctionne en privé dans votre navigateur · Apportez votre propre clé',
      promptExample: 'Affiche un graphique en chandeliers de BTC-USD depuis Coinbase avec EMA 20 et 50 et RSI en dessous.',
      promptPlaceholder: 'Décrivez un widget…',
    },
    ticker: { label: 'Connecteurs en direct' },
    trust: 'Un canvas pour tous les marchés — FX, crypto, actions, futures, options et marchés de prédiction.',
    stats: [
      { n: 22, suffix: '+', label: 'connecteurs de données de marché en direct' },
      { n: 6, label: 'classes d’actifs sur un seul canvas' },
      { n: 0, label: 'octets envoyés à nos serveurs en mode privé' },
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
          title: 'Plus de 20 connecteurs en direct',
          body: 'Fournisseurs de données branchables — OANDA, Binance, Coinbase, Kraken, Polygon, Interactive Brokers, Kalshi, Polymarket et plus — acheminent les données en temps réel vers vos widgets.',
        },
        {
          icon: 'layers',
          title: 'Canvas libre',
          body: 'Glissez, redimensionnez et organisez les widgets sur un canvas infini. Regroupez-les en espaces et écrans pour FX, crypto, recherche — ce que vous tradez.',
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
    connectors: {
      eyebrow: 'Connecteurs',
      title: 'Branchez-vous à tous les marchés',
      subtitle:
        'Des connecteurs branchables diffusent prix en direct, carnets d’ordres et données de référence directement dans vos widgets — FX, crypto, actions, futures, options et marchés de prédiction.',
      note: 'Certains venues se connectent directement depuis votre navigateur lorsque CORS le permet ; les autres passent par un proxy léger. De nouveaux connecteurs sont ajoutés régulièrement.',
      groups: {
        fx: 'FX',
        crypto: 'Crypto',
        equities: 'Actions et futures',
        prediction: 'Marchés de prédiction',
        data: 'Données et bases de données',
      },
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
        'Nexow a lancé une preview publique du canvas et de la génération de code. Les blocs suivants arrivent bientôt.',
      shipped: 'Disponible',
      soon: 'Bientôt',
      items: [
        { status: 'shipped', title: 'Génération de widgets par IA', body: 'Widgets en langage naturel exécutés en sandbox sur le canvas.' },
        { status: 'shipped', title: 'Connecteurs de données de marché', body: 'Plus de 20 venues diffusant des données en direct vers les widgets.' },
        { status: 'shipped', title: 'Espaces et bibliothèque', body: 'Canvas multi-écrans, versions, logs et une bibliothèque de widgets réutilisable.' },
        { status: 'soon', title: 'Agents de trading', body: 'Agents autonomes qui surveillent vos widgets et agissent selon les règles que vous décrivez.' },
        { status: 'soon', title: 'Composants serveur', body: 'Widgets et tâches persistants côté serveur qui continuent de tourner lorsque votre onglet est fermé.' },
        { status: 'soon', title: 'Communauté', body: 'Partagez widgets et tableaux de bord, forkez ce que d’autres construisent et publiez dans une bibliothèque publique.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions, réponses',
      subtitle: 'Tout ce qu’il faut savoir avant d’ouvrir l’app.',
      items: [
        {
          q: 'Qu’est-ce que Nexow ?',
          a: 'Nexow est un créateur de tableaux de bord natif IA pour les marchés financiers. Vous décrivez un widget — un graphique, un tableau, une heatmap ou un signal — en langage naturel, et Nexow génère son code source, l’exécute dans un iframe sandboxé et lui diffuse des données de marché en direct sur un canvas libre.',
        },
        {
          q: 'Dois-je savoir coder ?',
          a: 'Non. Vous décrivez ce que vous voulez en langage naturel et Nexow écrit et exécute le widget pour vous. Si vous lisez le code, le code source et l’historique des versions de chaque widget sont disponibles pour inspection et affinage.',
        },
        {
          q: 'Mes données sont-elles privées ?',
          a: 'Oui. Nexow fonctionne entièrement en local par défaut : vous ajoutez votre propre clé Anthropic et la génération se fait dans votre navigateur. Vos widgets, versions et logs sont stockés dans l’IndexedDB de votre navigateur, et de nombreux venues se connectent directement depuis le navigateur — vos données et identifiants restent sur votre machine.',
        },
        {
          q: 'Quels marchés et venues sont pris en charge ?',
          a: 'Nexow inclut plus de 20 connecteurs branchables couvrant FX (OANDA, LMAX, FXCM), crypto (Binance, Coinbase, Kraken, Deribit, BitMEX), actions et futures (Interactive Brokers, Alpaca, TradeStation, Polygon), marchés de prédiction (Kalshi, Polymarket) et fournisseurs de données (Alpha Vantage, Intrinio, Trading Economics, et bases de données comme Postgres et ClickHouse).',
        },
        {
          q: 'Combien ça coûte ?',
          a: 'La preview est gratuite à essayer, et en mode privé vous ne payez que votre propre usage de l’API Anthropic. Consultez la page tarifs pour les détails des futurs plans hébergés.',
        },
        {
          q: 'Quel modèle IA alimente Nexow ?',
          a: 'Nexow génère des widgets avec les modèles Claude d’Anthropic via le SDK Anthropic. En mode privé, vous fournissez votre propre clé pour garder le contrôle total de l’usage et du coût.',
        },
        {
          q: 'Qu’est-ce qui arrive ensuite ?',
          a: 'Des agents de trading qui agissent selon les règles que vous décrivez, des composants persistants côté serveur et une couche communautaire pour partager et forker widgets et tableaux de bord.',
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
        'Génération de widgets en langage naturel, runtime sandboxé, plus de 20 connecteurs de données de marché, canvas libre, mode local privé et bibliothèque de widgets versionnée. Découvrez tout ce que fait Nexow.',
    },
    hero: {
      badge: 'Fonctionnalités',
      title: 'Tout ce qu’il faut pour créer des tableaux de bord de marché avec des mots',
      subtitle:
        'Nexow transforme une phrase en widget fonctionnel connecté aux données — puis vous donne le canvas, les connecteurs et le modèle de confidentialité pour construire un vrai poste de travail.',
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
          { icon: 'plug', title: 'Plus de 20 connecteurs de marché', body: 'FX, crypto, actions, futures, options et marchés de prédiction — OANDA, Binance, Coinbase, IBKR, Polygon, Kalshi, Polymarket et plus.' },
          { icon: 'globe', title: 'Direct depuis le navigateur', body: 'Lorsque CORS le permet, les appels authentifiés aux venues s’exécutent directement depuis votre navigateur et contournent entièrement notre proxy.' },
          { icon: 'database', title: 'Bases de données aussi', body: 'Pointez les widgets vers Postgres, ClickHouse ou Qdrant pour mélanger vos propres données avec les marchés en direct.' },
        ],
      },
      {
        title: 'Posséder',
        body: 'Privé par défaut, à vous pour toujours.',
        items: [
          { icon: 'lock', title: 'Mode local privé', body: 'Apportez votre propre clé Anthropic et générez des widgets côté client. Rien n’est envoyé à nos serveurs.' },
          { icon: 'save', title: 'Persistance locale', body: 'Widgets, versions, logs et votre bibliothèque vivent dans l’IndexedDB de votre navigateur — disponibles hors ligne, sans compte.' },
          { icon: 'library', title: 'Bibliothèque réutilisable', body: 'Enregistrez n’importe quel widget dans votre bibliothèque et déposez-le sur n’importe quel tableau de bord en un clic.' },
        ],
      },
    ],
  },
  pricing: {
    meta: {
      title: 'Tarifs — Nexow',
      description:
        'Commencez gratuitement en mode privé avec votre propre clé Anthropic. Des plans hébergés avec composants serveur, agents de trading et communauté arrivent bientôt. Consultez les tarifs Nexow.',
    },
    hero: {
      badge: 'Tarifs',
      title: 'Commencez gratuitement. Payez uniquement ce que vous utilisez.',
      subtitle:
        'La preview fonctionne en privé dans votre navigateur — vous ne payez que votre propre usage Anthropic. Les plans hébergés arrivent avec les agents, les composants serveur et la communauté.',
    },
    tiers: [
      {
        name: 'Privé',
        price: '0 €',
        cadence: 'pour toujours',
        tagline: 'Entièrement local. Apportez votre propre clé.',
        cta: 'Ouvrir l’app',
        ctaHref: 'https://app.nexow.ai',
        features: [
          'Génération de widgets en langage naturel',
          'Runtime sandboxé et canvas libre',
          'Les plus de 20 connecteurs de marché',
          'Versions, logs et bibliothèque de widgets',
          'Fonctionne dans votre navigateur (IndexedDB)',
          'Vous ne payez que votre usage de l’API Anthropic',
        ],
      },
      {
        name: 'Pro',
        price: 'Bientôt',
        cadence: '',
        tagline: 'Génération et persistance hébergées.',
        cta: 'Rejoindre la liste',
        ctaHref: 'https://app.nexow.ai',
        featured: true,
        features: [
          'Tout ce qui est dans Privé',
          'Génération gérée — sans clé',
          'Composants serveur qui continuent de tourner',
          'Espaces synchronisés dans le cloud',
          'Connecteurs prioritaires et limites plus élevées',
          'Support par email',
        ],
      },
      {
        name: 'Équipes',
        price: 'Discutons-en',
        cadence: '',
        tagline: 'Pour les desks et communautés.',
        cta: 'Nous contacter',
        ctaHref: 'mailto:hello@nexow.ai',
        features: [
          'Tout ce qui est dans Pro',
          'Agents de trading et automatisation',
          'Espaces partagés et bibliothèque communautaire',
          'SSO et accès par rôles',
          'Support dédié',
          'Connecteurs personnalisés',
        ],
      },
    ],
    faqTitle: 'Questions sur les tarifs',
    faq: [
      { q: 'La preview est-elle vraiment gratuite ?', a: 'Oui. Le mode privé est gratuit — vous ne payez que votre propre usage de l’API Anthropic lors de la génération de widgets. Aucun abonnement Nexow n’est requis pour construire sur le canvas aujourd’hui.' },
      { q: 'Ai-je besoin d’une clé Anthropic ?', a: 'Pour le mode privé, oui — vous ajoutez votre propre clé dans les Paramètres et la génération s’exécute dans votre navigateur. Les plans hébergés proposeront une génération gérée sans clé.' },
      { q: 'Quand les plans payants arrivent-ils ?', a: 'Pro et Équipes arrivent avec les composants serveur, les agents de trading et la communauté. Rejoignez la liste depuis l’app pour être informé en premier.' },
      { q: 'Y a-t-il des limites d’usage ?', a: 'En mode privé, votre seule limite est votre propre compte Anthropic. Les plans hébergés publieront des limites claires par niveau.' },
    ],
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
