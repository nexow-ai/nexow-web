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
    tagline: 'Describe what you need. Nexow turns it into widgets on a canvas.',
    columns: [
      {
        title: 'Product',
        links: [
          { label: 'Features', href: '/features' },
          { label: 'Plans', href: '/plans' },
          { label: 'Connectors', href: '/connectors' },
          { label: 'Privacy', href: '/privacy' },
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
          { label: 'Launch app', href: 'https://x.nexow.ai' },
          { label: 'Privacy', href: '/privacy' },
        ],
      },
    ],
    rights: 'All rights reserved.',
    disclaimer:
      'Nexow is a tooling and visualization platform. Some examples use market data, but the canvas is built for general-purpose widgets and workflows.',
    builtWith: 'Built with Astro.',
  },
  home: {
    meta: {
      title: 'Nexow — Describe anything. Get a live widget workspace.',
      description:
        'Nexow turns plain-language ideas into live widgets on a canvas. Build moodboards, habit planners, mini games, social widgets, market dashboards or custom tools without starting from scratch.',
    },
    hero: {
      badge: 'Preview now live',
      titleLead: 'Describe anything.',
      titleGradient: 'Get a widget.',
      titleTail: 'Arrange it.',
      subtitle:
        'Type what you need — a trading desk, a project board, a founder dashboard, a habit tracker. Nexow generates real working widgets, plugs in live data and lays them out on a canvas you control.',
      ctaPrimary: 'Launch the app',
      ctaSecondary: 'See it live',
      note: 'Preview live · 28+ connectors · 10K starter credits',
      promptExample: 'Make a soft moodboard, a habit streak tracker, and a tiny memory game.',
      promptPlaceholder: 'Describe a widget…',
    },
    ticker: { label: 'What people build' },
    appShowcase: {
      eyebrow: 'Straight from the app',
      title: 'Not a mockup — this is Nexow',
      subtitle: 'Real workspaces, captured on the canvas. One sentence in, a full set of connected widgets out.',
      badge: 'real screenshot',
      cta: 'Try it yourself',
      ctaNote: 'free · no credit card · runs in your browser',
      shots: [
        {
          label: 'Trading desk',
          prompt: 'Build me a crypto desk: candlestick chart, watchlist, order book depth, heatmap and derivatives.',
          alt: 'Nexow workspace with a BTC candlestick chart, crypto watchlist, order book depth, market heatmap, derivatives and prediction markets widgets',
          chip: 'Live market data · Binance, BitMEX, Kalshi',
          caption: 'Built for traders: every widget streams real market data from public APIs — nothing to configure by hand.',
        },
        {
          label: 'Project board',
          prompt: 'Create a project command center: kanban board, Gantt timeline, KPIs, risks and team workload.',
          alt: 'Nexow workspace with a kanban project board, Gantt timeline, KPI scorecard, risk register, team workload and sprint burndown widgets',
          chip: '38 tasks · 7 people · one canvas',
          caption: 'For project leads: sprint board, burndown and risk register generated together, arranged the way your team reads them.',
        },
        {
          label: 'Founder HQ',
          prompt: 'Build a solo founder dashboard: lead pipeline, launch checklist, content calendar, MRR chart and quick notes.',
          alt: 'Nexow workspace with a lead pipeline, revenue dashboard with MRR and churn KPIs, product launch checklist, weekly content calendar and scratchpad widgets',
          chip: 'Pipeline, MRR, launch plan · one prompt',
          caption: 'For solo founders: five widgets from a single prompt — pipeline, revenue KPIs, launch plan, content calendar and notes.',
        },
      ],
    },
    trust: 'One canvas for anything you can describe — moodboards, planners, games, social widgets, data tools and markets.',
    stats: [
      { n: 28, suffix: '+', label: 'live connectors for data, socials and markets' },
      { n: 6, label: 'example workspaces from one canvas' },
      { n: 10, suffix: 'K', label: 'starter AI credits on Free' },
      { n: 30, prefix: '<', suffix: 's', label: 'from sentence to running widget' },
    ],
    showcase: {
      eyebrow: 'Examples',
      title: 'Start with something concrete',
      subtitle:
        'Nexow is not just for trading. The same canvas can hold creative boards, personal systems, small games, social views and live data tools.',
      generatedBadge: 'generated & themed',
      tabs: [
        {
          label: 'Moodboard',
          prompt: 'Create a clean moodboard with image tiles, palette swatches and notes.',
          caption: 'A visual board with theme-aware cards, saved locally and reusable across screens.',
        },
        {
          label: 'Habit planner',
          prompt: 'Build a weekly habit tracker with streaks, check-ins and a calm progress view.',
          caption: 'Interactive planner state persists in the widget and syncs when you choose cloud mode.',
        },
        {
          label: 'Mini game',
          prompt: 'Make a small memory game with levels, score and a playful pixel-board layout.',
          caption: 'Generated UI logic runs inside a sandboxed iframe, like every Nexow widget.',
        },
        {
          label: 'Social hub',
          prompt: 'Create a social widget that tracks posts, saves, comments and people I follow.',
          caption: 'Connect community workflows, shared widgets and social feeds on the same canvas.',
        },
      ],
    },
    features: {
      eyebrow: 'What you get',
      title: 'A simple loop: ask, edit, arrange',
      subtitle:
        'The AI is the starting point, not the product. You get working widgets you can inspect, change, reuse and keep on your own workspace.',
      items: [
        {
          icon: 'sparkles',
          title: 'Plain-language creation',
          body: 'Describe a widget in normal words. Nexow writes the interface and logic, then runs it live so you can use it immediately.',
        },
        {
          icon: 'layers',
          title: 'A canvas, not a chat result',
          body: 'Drag, resize and arrange widgets into workspaces. Keep a moodboard beside a planner, a game beside a feed, or a chart beside your notes.',
        },
        {
          icon: 'shield',
          title: 'Generated code stays contained',
          body: 'Every widget runs in an isolated sandbox. It can render, store state and fetch data, but it cannot reach into the rest of your workspace.',
        },
        {
          icon: 'plug',
          title: 'Useful when you connect it',
          body: 'Use local state for personal widgets, or plug into databases, social feeds and market data when the widget needs live information.',
        },
      ],
    },
    how: {
      eyebrow: 'How it works',
      title: 'From idea to canvas in three steps',
      subtitle: 'No blank project. No setup screen. Start with the thing you want to use.',
      steps: [
        {
          n: '01',
          title: 'Say what you want',
          body: 'Write a simple prompt: “a moodboard with palette swatches” or “a weekly habit tracker with streaks”.',
        },
        {
          n: '02',
          title: 'Use the widget',
          body: 'Nexow generates a real interactive widget and runs it in a sandboxed frame, with local state or live data if needed.',
        },
        {
          n: '03',
          title: 'Make the space yours',
          body: 'Ask for changes, save versions, theme the result and place it beside the other widgets in your workspace.',
        },
      ],
    },
    automate: {
      eyebrow: 'Automate',
      title: 'Put your workspace on autopilot',
      subtitle:
        'Widgets show you the thing. Bots, agents and Copilot act on it — cloud automations and AI that keep working when your tab is closed.',
      liveLabel: 'Live',
      soonLabel: 'Coming soon',
      items: [
        {
          icon: 'bot',
          title: 'Bots',
          body: 'Cloud automations that watch your data and fire signals to your widgets. Describe an alert in plain words — “remind me when a habit streak is at risk”, “summarize saved posts every Friday”, or “tell me when BTC drops 5% in an hour” — or wire it visually.',
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
          body: 'An AI assistant for your whole workspace. Attach a widget’s screenshot or state and ask — “explain this board”, “summarize this”, “what should I change next?”',
          status: 'soon',
        },
      ],
      harnessChips: ['model', 'memory', 'skills', 'tools', 'knowledge', 'triggers'],
      copilotPrompts: ['Explain this board', 'Summarize this data', 'What should I change next?'],
    },
    connectors: {
      eyebrow: 'When you need data',
      title: 'Trading-grade data, optional everywhere',
      subtitle:
        'Nexow started with trading, so live APIs and data connectors are built into the base. Use them for markets, databases, social feeds or any widget that needs live information.',
      note: '28 connectors are live today and 56 sit in the catalog — trading venues, market data APIs, databases and social sources.',
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
      title: 'Build your workspace. Plug into the network.',
      subtitle:
        'Join a world of makers building, remixing and sharing widgets alongside you, with synced workspaces and credits ready for the app.',
      liveLabel: 'Live',
      soonLabel: 'Coming soon',
      items: [
        {
          icon: 'users',
          title: 'Community',
          body: 'Discover and follow makers, like and comment in a social feed for builders, and share widgets others can add straight to their library — with public maker profiles.',
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
          title: 'Premium widgets',
          body: 'Publish polished widgets, templates and workflows, let others subscribe or buy, and earn on what you build.',
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
      accountBody: 'No credit card. Your widgets, credits, sync and community tools stay together as your workspace grows.',
      accountPoints: [
        '10,000 starter AI credits on Free',
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
        'Start with Free credits, sync and the widget canvas. Upgrade later when you need more capacity.',
      cta: 'Compare all plans',
    },
    privacy: {
      eyebrow: 'Secure by design',
      title: 'Your workspace has clear boundaries',
      body: 'Nexow keeps generated code, credentials, versions and logs scoped to your workspace. Widgets run in a sandbox, connector access is limited to what each widget needs, and sync is designed around ownership and control.',
      points: [
        'Generated widgets run inside a sandboxed runtime',
        'Widget versions & logs stay attached to your workspace history',
        'Connector credentials are scoped to the services you connect',
        'Cloud sync keeps workspaces available across devices',
      ],
      cta: 'Read the privacy architecture',
    },
    roadmap: {
      eyebrow: 'Roadmap',
      title: 'This is the preview. Here’s what’s next.',
      subtitle:
        'Nexow shipped a public preview of the canvas, codegen, cloud bots, accounts and the community feed. The broader app canvas is landing through the building blocks below.',
      shipped: 'Shipped',
      soon: 'Coming soon',
      items: [
        { status: 'shipped', title: 'AI widget codegen', body: 'Natural-language widgets running sandboxed on the canvas.' },
        { status: 'shipped', title: '28+ connectors', body: 'Databases, socials, brokers, exchanges and data providers streaming live.' },
        { status: 'shipped', title: 'Cloud bots & alerts', body: 'Automations that watch your data and fire signals to your widgets, tab closed.' },
        { status: 'shipped', title: 'Accounts & cloud sync', body: 'Free accounts with workspaces synced across every device — 10K credits reserved for platform launch.' },
        { status: 'shipped', title: 'Community feed & profiles', body: 'Follow makers, share widgets to the feed, and claim your public @handle.' },
        { status: 'soon', title: 'Agents & Copilot', body: 'Deploy cloud agents with a full harness, and a Copilot for your workspace.' },
        { status: 'soon', title: 'Marketplace & templates', body: 'Buy, sell and remix widgets, app screens and reusable workflows.' },
        { status: 'soon', title: 'XP, badges & rewards', body: 'A gamified account — earn XP and badges for achievements, and convert them into reward credits.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Quick answers',
      subtitle: 'The short version before you open the app.',
      items: [
        {
          q: 'What is Nexow?',
          a: 'Nexow is a canvas for live widgets. You describe what you want in plain language, and Nexow generates a working widget you can arrange, edit and reuse.',
        },
        {
          q: 'Do I need to know how to code?',
          a: 'No. You describe what you want in natural language and Nexow writes and runs the widget for you. If you do read code, every widget’s source and version history is available to inspect and refine.',
        },
        {
          q: 'How does Nexow handle privacy?',
          a: 'Generated widgets run in a sandbox, connector access is scoped, and workspace history is kept with the workspace it belongs to. Cloud sync, credits and community features are designed so your widgets remain portable and under your control.',
        },
        {
          q: 'Is Nexow only for trading?',
          a: 'No. Nexow started with trading because live dashboards are a hard test for generated widgets, but the platform is general: moodboards, habit planners, mini games, social widgets, internal tools, databases, market dashboards and custom workflows all run on the same canvas.',
        },
        {
          q: 'What are bots and agents?',
          a: 'They are advanced automation features. They are useful later, but you do not need them to understand or use Nexow: the core product is the widget canvas.',
        },
        {
          q: 'How much does it cost?',
          a: 'You can start for free with starter credits, sync and the core widget canvas. Paid plans are for more capacity later.',
        },
      ],
    },
    cta: {
      title: 'Build your first widget in the next minute',
      subtitle: 'Open the preview, describe one useful thing, and place it on your canvas.',
      primary: 'Launch Nexow',
      secondary: 'Explore features',
    },
  },
  features: {
    meta: {
      title: 'Features — Nexow',
      description:
        'Explore Nexow features: plain-language widget generation, a sandboxed runtime, a free-form canvas, trading-grade data connectors, local privacy and reusable widget workspaces.',
    },
    hero: {
      badge: 'Features',
      title: 'The parts behind the widget canvas',
      subtitle:
        'Start with one useful widget, then arrange, refine, connect and reuse it. Advanced automation exists, but the core stays simple: describe what you need and keep it on your canvas.',
    },
    groups: [
      {
        title: 'Generate',
        body: 'Describe what you want. Nexow turns it into a working widget.',
        items: [
          { icon: 'sparkles', title: 'Plain-language codegen', body: 'Describe a widget and Nexow generates its full source with Claude — moodboards, planners, games, feeds, charts, tables and custom tools.' },
          { icon: 'wand', title: 'Refine by conversation', body: 'Change anything by asking. “Make it warmer”, “add a streak calendar”, “turn this into a game” — Nexow edits the widget in place.' },
          { icon: 'history', title: 'Versioned & inspectable', body: 'Every generation is versioned with logs. Roll back, compare, and read the exact source running in each widget.' },
        ],
      },
      {
        title: 'Run',
        body: 'Generated code runs contained, inspectable and ready to use.',
        items: [
          { icon: 'shield', title: 'Sandboxed iframes', body: 'Widgets execute in isolated iframes with a strict boundary — generated code can render and fetch, but can’t touch your workspace or other widgets.' },
          { icon: 'bolt', title: 'Interactive by default', body: 'Widgets can keep state, react to events, subscribe to data and update live without turning your workspace into a static mockup.' },
          { icon: 'layers', title: 'Themed canvas & workspaces', body: 'Arrange widgets on a themed free-form canvas, group them into workspaces and screens, and switch between setups instantly.' },
          { icon: 'link', title: 'Groups & Links', body: 'Bundle widgets into groups with mosaic or tab layouts, and wire widgets together with Links — one-way or two-way pipes that stream one widget’s data into another.' },
        ],
      },
      {
        title: 'Connect',
        body: 'Trading-grade APIs, generalized for every live-data widget.',
        items: [
          { icon: 'plug', title: '28+ live connectors', body: 'Databases, social feeds and markets — Postgres, ClickHouse, Qdrant, X, YouTube, Discord, OANDA, Binance, Coinbase, Polygon, Kalshi and more.' },
          { icon: 'globe', title: 'Browser-direct where possible', body: 'Where CORS allows, authenticated calls run straight from your browser and bypass our proxy entirely.' },
          { icon: 'database', title: 'Local state too', body: 'Many widgets need no external data at all: games, planners, moodboards and private trackers can live in the browser until you choose to sync.' },
        ],
      },
      {
        title: 'Automate',
        body: 'Optional automations for widgets that need to watch and act.',
        items: [
          { icon: 'bot', title: 'Background watchers', body: 'Describe an alert or wire it visually — streak reminders, weekly digests, social updates, thresholds or market moves. Watchers run on a cloud heartbeat and push signals back to your widgets.' },
          { icon: 'cpu', title: 'Advanced workflows', body: 'For operational canvases, attach memory, tools, knowledge and triggers so a workflow can watch, reason and prepare the next step. Cloud deploy is coming soon.' },
          { icon: 'chat', title: 'Workspace assistant', body: 'Ask about a widget screenshot or its data: explain what changed, summarize the state, or suggest the next edit. Coming soon.' },
        ],
      },
      {
        title: 'Network',
        body: 'Optional sharing when you want to reuse or publish widgets.',
        items: [
          { icon: 'users', title: 'Community', body: 'Follow makers, post to the feed, and share widgets others can add straight to their library — live today, with public maker profiles.' },
          { icon: 'store', title: 'Marketplace', body: 'Buy and sell ready-made widgets, templates and workflows. Coming soon — sharing already works in the community.' },
          { icon: 'signal', title: 'Premium workflows', body: 'Publish polished app screens and workflows, let others subscribe, and earn on what you run. Coming soon.' },
          { icon: 'trophy', title: 'XP & rewards', body: 'Earn XP for building, unlock badges for achievements, and convert them into reward credits. Coming soon.' },
        ],
      },
      {
        title: 'Own',
        body: 'Secure by design, yours to keep.',
        items: [
          { icon: 'lock', title: 'Workspace boundaries', body: 'Generated widgets run sandboxed, with connector access limited to the services and data each widget needs.' },
          { icon: 'sync', title: 'Cloud sync', body: 'Sync workspaces, widgets and settings across every device — with an encrypted credential vault.' },
          { icon: 'library', title: 'Reusable library', body: 'Save any widget to your library and drop it into any dashboard in one click.' },
        ],
      },
    ],
  },
  plansPage: {
    meta: {
      title: 'Plans — Nexow',
      description:
        'Start free with Nexow. Build with starter credits and sync, then upgrade when your widget workspaces need more room.',
    },
    hero: {
      badge: 'Plans',
      title: 'Start simple. Scale only when needed.',
      subtitle:
        'Try the canvas without overthinking plans. Free includes starter credits, sync and the core workspace. Paid plans add capacity later.',
    },
    comingSoon:
      'Supporter & Sponsor checkout is coming soon, and platform credits launch alongside it. Everyone is on Free today — create an account to be first when billing opens.',
    highlights: {
      title: 'What changes when you grow',
      items: [
        {
          icon: 'coins',
          title: 'AI credits',
          body: 'Credits power widget generation and AI edits. Free gives you room to try; paid plans refresh monthly.',
        },
        {
          icon: 'plug',
          title: 'More live workflows',
          body: 'Use more connected widgets, trading/data APIs and background workflows as your workspace becomes operational.',
        },
        {
          icon: 'sparkles',
          title: 'More polish',
          body: 'Higher plans add more room for customization, branding and support when Nexow becomes part of your daily work.',
        },
      ],
    },
    included: {
      title: 'Included in every plan',
      items: [
        'Unlimited screens, workspaces & widgets',
        '28+ live connectors',
        'Sandboxed widget runtime',
        'Cross-device cloud sync',
        'Reusable widget library',
      ],
    },
    billing: { monthly: 'Monthly', yearly: 'Yearly', save: '2 months free' },
    tiers: [
      {
        name: 'Free',
        tagline: 'A real canvas for personal widgets.',
        priceMonthly: '$0',
        priceYearly: '$0',
        cadence: 'forever',
        stats: ['10K credits', 'Workspace sync', 'Widget library'],
        cta: 'Get started free',
        ctaHref: 'https://x.nexow.ai',
        features: [
          '10,000 starter AI credits',
          'Unlimited screens, workspaces & widgets',
          'Unlimited browser connections',
          'Cross-device cloud sync',
          'Reusable widget library',
          'Community access',
        ],
      },
      {
        name: 'Supporter',
        tagline: 'For makers using Nexow every week.',
        priceMonthly: '$9.99',
        priceYearly: '$8.33',
        billedYearly: '$99.90 billed yearly',
        cadence: '/mo',
        badge: 'Coming soon',
        stats: ['50K credits/mo', 'More workflows', 'Themes'],
        note: 'Everything in Free, plus:',
        cta: 'Become a Supporter',
        ctaHref: 'https://x.nexow.ai',
        features: [
          '50,000 credits every month',
          'More connected widgets and background workflows',
          'Workspace assistant previews',
          'Extra themes and canvas appearance options',
          'Early access to marketplace publishing',
        ],
      },
      {
        name: 'Sponsor',
        tagline: 'For power users with live workspaces.',
        priceMonthly: '$69.99',
        priceYearly: '$58.33',
        billedYearly: '$699.90 billed yearly',
        cadence: '/mo',
        badge: 'Best return',
        stats: ['800K credits/mo', 'Custom connectors', 'Priority'],
        note: 'Everything in Supporter, plus:',
        cta: 'Become a Sponsor',
        ctaHref: 'https://x.nexow.ai',
        featured: true,
        features: [
          '800,000 credits every month',
          'Higher limits for connected widgets and live workflows',
          'Custom connections through Connector Builder',
          'Workspace assistant across screens',
          'Custom logo and workspace identity',
          'Priority support for complex setups',
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
      { q: 'Is Nexow really free?', a: 'Yes. Free gives you the core widget canvas, reusable library, cloud sync and 10,000 starter AI credits. Paid plans add more monthly credits and higher limits when your workspace needs them.' },
      { q: 'What are credits?', a: 'Credits meter AI usage — generating widgets, editing them by conversation, creating links and using assistant features. The free account reserves 10,000 to start, and paid plans grant a monthly allowance (50K on Supporter, 800K on Sponsor). Credit metering goes live with platform mode, and you can buy more anytime.' },
      { q: 'When do paid plans launch?', a: 'Supporter and Sponsor are defined and shown in the app, but paid checkout is coming soon. Everyone is on Free today — create an account to be first when billing opens.' },
      { q: 'Can I pay yearly?', a: 'Yes. Yearly billing gives you two months free versus paying monthly. You can switch between monthly and yearly at any time.' },
    ],
  },
  connectorsPage: {
    meta: {
      title: 'Connectors — Nexow',
      description:
        'Browse Nexow connectors: trading venues, market data APIs, databases and social sources that can power live widgets on your canvas.',
    },
    hero: {
      badge: 'Connectors',
      title: 'Trading-grade data for any widget',
      subtitle:
        'Nexow started with trading, so APIs and live data are part of the foundation. Connect brokers, exchanges, market data, databases and social feeds when your widget needs real information.',
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
        'Nexow is a widget canvas that started with trading desks and grew into a way to build any useful workspace from plain language.',
    },
    hero: {
      badge: 'About',
      title: 'From trading desks to any widget workspace',
      subtitle:
        'We started where custom dashboards are hardest: live market data, fast decisions and messy workflows. The same idea now works for moodboards, planners, games, social tools and private dashboards.',
    },
    missionTitle: 'Why we’re building Nexow',
    mission: [
      'We started with trading dashboards because they are a demanding test: live data, custom visuals, dense layouts and real consequences when the tool is slow. But the same canvas works for much more than markets.',
      'Nexow flips software creation around. You describe what you want to use and an AI writes a real, running widget — sandboxed, versioned, themed and arranged on a free-form canvas. A moodboard, habit planner, mini game, social feed or market dashboard are all the same primitive: widgets you own.',
      'We’re building it with clear ownership boundaries: your widgets are versioned, portable and scoped to the workspace they belong to. As we add cloud workflows, shared libraries and community features, that principle stays fixed — your tools, your data, your control.',
    ],
    valuesTitle: 'What we value',
    values: [
      { icon: 'lock', title: 'Clear boundaries', body: 'Sandboxed widgets, scoped connector access and workspace-level control over what you build.' },
      { icon: 'bolt', title: 'Speed to software', body: 'From a sentence to a live widget in seconds — the shortest path between an idea and a working interface.' },
      { icon: 'shield', title: 'Safe by construction', body: 'Generated code runs sandboxed with a strict boundary, so power never means risk.' },
      { icon: 'globe', title: 'Open to every use case', body: 'Creative boards, personal systems, social tools, internal dashboards and markets — one canvas for all of them.' },
    ],
    ctaTitle: 'See it for yourself',
    ctaBody: 'The preview is live. Describe a widget and watch Nexow build it.',
    cta: 'Launch the app',
  },
  blog: {
    meta: {
      title: 'Blog — Nexow',
      description:
        'Nexow guides, examples and product notes about building live widgets, trading/data dashboards and custom workspaces from plain language.',
    },
    title: 'Ideas, examples and build notes',
    subtitle: 'Practical notes on widgets, canvas workflows, trading-grade data and the path from prompt to useful workspace.',
    latest: 'Latest',
    readMore: 'Read article',
    backToBlog: 'Back to blog',
    published: 'Published',
    updated: 'Updated',
    minRead: 'min read',
  },
  notFound: {
    title: 'This page drifted off the canvas',
    body: 'The page you’re looking for doesn’t exist — but your next widget might.',
    cta: 'Back to home',
  },
  privacyPage: {
    badge: 'Privacy',
    title: 'Privacy Policy',
    subtitle: 'How Nexow handles your data — short version: as little as possible.',
    meta: {
      title: 'Privacy Policy — Nexow',
      description: 'Learn how Nexow handles data, keys and connections.',
    },
    updated: 'Last updated: 1 July 2026',
    sections: [
      { h: 'Workspace data', p: 'Nexow stores the workspace data needed to provide the app: widgets, versions, logs, library items, account settings, sync state and related metadata.' },
      { h: 'Generated widgets', p: 'Generated code runs inside a sandboxed runtime. Widget prompts, generated code and version history stay attached to the workspace they belong to.' },
      { h: 'Connections', p: 'Where a service permits it, Nexow connects to it directly from your browser, and your credentials are used only to talk to that service. Some services require routing through a thin proxy; in those cases only the data needed to fulfil the request passes through.' },
      { h: 'This website', p: 'This marketing site is a static site. We keep analytics minimal and privacy-respecting, and we do not sell personal data. Outbound links (such as the app) are clearly labelled.' },
      { h: 'Contact', p: 'Questions about privacy? Email hello@nexow.ai.' },
    ],
  },
};
