import type { SiteContent } from '../content';

export const en: SiteContent = {
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
          { label: 'Launch app', href: 'https://x.nexow.app' },
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
        ctaHref: 'https://x.nexow.app',
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
        ctaHref: 'https://x.nexow.app',
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
        ctaHref: 'https://x.nexow.app',
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
  privacyPage: {
    badge: 'Privacy',
    title: 'Privacy Policy',
    subtitle: 'How Nexow handles your data — short version: as little as possible.',
    meta: {
      title: 'Privacy Policy — Nexow',
      description: 'Nexow is private by default. Learn how we handle data, keys and connections.',
    },
    updated: 'Last updated: 1 July 2026',
    sections: [
      { h: 'Private by default', p: 'Nexow runs fully local by default. In private mode you supply your own Anthropic API key and widget generation happens entirely in your browser. Your prompts and generated code are sent from your browser directly to Anthropic — not through our servers.' },
      { h: 'What we store', p: 'Your widgets, versions, logs and library are stored in your browser using IndexedDB. They stay on your device and are not uploaded to Nexow. Clearing your browser storage removes them permanently.' },
      { h: 'Market-data connections', p: 'Where a venue permits it, Nexow connects to it directly from your browser, and your venue credentials are used only to talk to that venue. Some venues require routing through a thin proxy; in those cases only the data needed to fulfil the request passes through.' },
      { h: 'This website', p: 'This marketing site is a static site. We keep analytics minimal and privacy-respecting, and we do not sell personal data. Outbound links (such as the app) are clearly labelled.' },
      { h: 'Contact', p: 'Questions about privacy? Email hello@nexow.ai.' },
    ],
  },
};
