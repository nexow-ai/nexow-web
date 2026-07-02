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
export const CONNECTORS = [
  'OANDA',
  'Binance',
  'Coinbase',
  'Kraken',
  'Deribit',
  'BitMEX',
  'Alpaca',
  'Interactive Brokers',
  'TradeStation',
  'Polygon',
  'Alpha Vantage',
  'Intrinio',
  'IQFeed',
  'Rithmic',
  'LMAX',
  'FXCM',
  'Kalshi',
  'Polymarket',
  'Trading Economics',
  'Postgres',
  'ClickHouse',
  'Qdrant',
] as const;

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

/* ------------------------------------------------------------------ */
export const content: Record<Lang, SiteContent> = { en, es };

export function useContent(lang: Lang): SiteContent {
  return content[lang];
}
