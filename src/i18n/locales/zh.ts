import type { SiteContent } from '../content';

export const zh: SiteContent = {
  nav: {
    links: [
      { label: '功能', href: '/features' },
      { label: '连接器', href: '/connectors' },
      { label: '方案', href: '/plans' },
      { label: '博客', href: '/blog' },
      { label: '关于', href: '/about' },
    ],
    launch: '启动应用',
    menu: '打开菜单',
    close: '关闭菜单',
  },
  footer: {
    tagline: '描述一个组件。Nexow 会构建它、接入实时市场数据，并放到你的画布上。',
    columns: [
      {
        title: '产品',
        links: [
          { label: '功能', href: '/features' },
          { label: '方案', href: '/plans' },
          { label: '连接器', href: '/connectors' },
          { label: '自动化', href: '/#automate' },
          { label: '社区', href: '/#network' },
          { label: '路线图', href: '/#roadmap' },
        ],
      },
      {
        title: '公司',
        links: [
          { label: '关于', href: '/about' },
          { label: '博客', href: '/blog' },
        ],
      },
      {
        title: '资源',
        links: [
          { label: '启动应用', href: 'https://x.nexow.ai' },
          { label: '隐私', href: '/privacy' },
        ],
      },
    ],
    rights: '保留所有权利。',
    disclaimer:
      'Nexow 是一个工具与可视化平台。此处内容均不构成投资建议。市场有风险，交易需谨慎。',
    builtWith: '基于 Astro 构建。默认私密。',
  },
  home: {
    meta: {
      title: 'Nexow — 用自然语言，借助 AI 构建市场仪表盘',
      description:
        'Nexow 是一个面向市场的 AI 原生工作区。用平实的中文描述一个组件，Nexow 就会构建它、接入来自 45+ 连接器的实时数据，并加入云端机器人、AI 智能体、创作者社区和 XP 奖励——默认私密，免费起步。',
    },
    hero: {
      badge: '预览版现已上线',
      titleLead: '描述它。',
      titleGradient: 'Nexow 构建它。',
      titleTail: '交易它。',
      subtitle:
        '一个面向市场的 AI 原生工作区。用自然语言描述任意组件——Nexow 会编写代码、安全地运行它，并将实时数据流式呈现到自由画布上。用云端机器人和智能体让它自动运转，再接入创作者社区。',
      ctaPrimary: '启动应用',
      ctaSecondary: '了解它如何运作',
      note: '无需注册即可试用 · 在你的浏览器中私密运行 · 或注册免费账户，预留 10K 积分',
      promptExample: '展示一张来自 Coinbase 的 BTC-USD K 线图，叠加 20 和 50 EMA，并在下方显示 RSI。',
      promptPlaceholder: '描述一个组件……',
    },
    ticker: { label: '实时连接器' },
    trust: '一块画布，覆盖每个市场——FX、加密货币、股票、期货、期权与预测市场。',
    stats: [
      { n: 45, suffix: '+', label: '个覆盖数据、钱包、社交与市场的实时连接器' },
      { n: 6, label: '类资产同处一块画布' },
      { n: 10, suffix: 'K', label: '注册即预留的免费 AI 积分' },
      { n: 30, prefix: '<', suffix: 's', label: '从一句话到运行中的组件' },
    ],
    showcase: {
      eyebrow: '展示',
      title: '一句话，任意组件。',
      subtitle:
        '图表、订单簿、热力图、赔率——只要你能描述，Nexow 就能构建它并接入实时数据。',
      generatedBadge: '已生成并实时运行',
      tabs: [
        {
          label: 'K 线 + 指标',
          prompt: '来自 Coinbase 的 BTC-USD K 线图，叠加 20 和 50 EMA，下方显示 RSI。',
          caption: '数据流来自 Coinbase——EMA 与 RSI 在组件内计算。',
        },
        {
          label: '订单簿深度',
          prompt: 'Deribit 上 ETH-PERP 的实时订单簿深度，买盘对比卖盘。',
          caption: '买盘与卖盘实时聚合自 Deribit 订单簿。',
        },
        {
          label: '相关性热力图',
          prompt: 'BTC、ETH、SOL、EURUSD、gold 与 SPX 的 30 日相关性热力图。',
          caption: '每当新的收盘价到来，跨资产相关性即刻重新计算。',
        },
        {
          label: '预测市场',
          prompt: '下次 FOMC 上 Fed 降息的 Kalshi 赔率，含 24 小时变化。',
          caption: '事件概率直接从 Kalshi 订单簿流式获取。',
        },
      ],
    },
    features: {
      eyebrow: '为什么选 Nexow',
      title: '仪表盘自己构建自己',
      subtitle:
        '别再手工拼接图表。描述你想看到什么，Nexow 就会生成一个真实、运行中的组件——然后让你用自然语言持续打磨它。',
      items: [
        {
          icon: 'sparkles',
          title: '自然语言组件',
          body: '用平实的话描述一张图表、表格、热力图或信号。Nexow 借助 Claude 编写组件源码并实时运行——无需样板代码，无需配置文件。',
        },
        {
          icon: 'shield',
          title: '沙箱化且安全',
          body: '每个组件都在隔离的 iframe 中运行，边界严格。生成的代码可以渲染和获取数据，但绝不会触及你工作区的其余部分。',
        },
        {
          icon: 'plug',
          title: '45+ 个实时数据连接器',
          body: '可插拔的市场数据提供方——OANDA、Binance、Coinbase、Kraken、Polygon、Interactive Brokers、Kalshi、Polymarket 等——将实时数据路由到你的组件。',
        },
        {
          icon: 'layers',
          title: '自由画布',
          body: '在自由画布上拖动、调整和排列组件，用工作区和屏幕分区管理 FX、加密货币、研究——以及你交易的一切。将组件编组，并用 Links 在它们之间传递实时数据。',
        },
        {
          icon: 'lock',
          title: '默认私密',
          body: '完全本地运行：添加你自己的 Anthropic 密钥，代码生成就在你的浏览器中完成。组件、版本和日志持久化在 IndexedDB 中——不会发送到我们的服务器。',
        },
        {
          icon: 'history',
          title: '版本管理与组件库',
          body: '每一次编辑都有版本记录，日志可供查看。将组件保存到个人组件库，一键在各个仪表盘间复用。',
        },
      ],
    },
    how: {
      eyebrow: '如何运作',
      title: '几秒内，从一句话到实时组件',
      subtitle: '三个步骤。无需配置，无需构建步骤，无需胶水代码。',
      steps: [
        {
          n: '01',
          title: '描述',
          body: '用自然语言输入你想要的——“一张 Deribit 上 ETH-PERP 的订单簿深度图”。',
        },
        {
          n: '02',
          title: '生成',
          body: 'Nexow 借助 Claude 编写组件源码，并在沙箱化的 iframe 中运行，接入你选择的连接器。',
        },
        {
          n: '03',
          title: '打磨与排布',
          body: '用自然语言微调它、记录版本，然后把它放到画布上，与你关注的一切并排陈列。',
        },
      ],
    },
    automate: {
      eyebrow: '自动化',
      title: '让你的工作区进入自动驾驶',
      subtitle:
        '组件让你看清市场。机器人、智能体和 Copilot 替你行动——即使标签页关闭，云端自动化和 AI 也持续运转。',
      liveLabel: '已上线',
      soonLabel: '即将推出',
      items: [
        {
          icon: 'bot',
          title: '机器人',
          body: '云端自动化，监视你的数据并向组件推送信号和提醒。用平实的话描述一条提醒——“当 BTC 一小时内下跌 5% 时通知我”——或用阈值、涨跌幅、MA 交叉和摘要以可视化方式搭建。机器人甚至能监视已连接的券商账户的新成交。',
          status: 'live',
        },
        {
          icon: 'cpu',
          title: '智能体',
          body: 'AI 智能体配备完整框架——模型、记忆、技能、工具、知识和触发器。交给智能体一项任务，让它监视、推理并行动——在可视化框架构建器中构建你的智能体并部署到云端，配有工具授权、跨运行记忆和实时运行历史。',
          status: 'live',
        },
        {
          icon: 'chat',
          title: 'Copilot',
          body: '面向整个工作区的 AI 助手。在并行标签页中对话，让它在后台构建组件、整理你的画布，然后提问——“解释这张图”、“总结一下”、“我接下来该关注什么？”',
          status: 'live',
        },
      ],
      harnessChips: ['模型', '记忆', '技能', '工具', '知识', '触发器'],
      copilotPrompts: ['解释这张图', '总结这些数据', '我接下来该关注什么？'],
    },
    connectors: {
      eyebrow: '连接器',
      title: '接入每一个市场',
      subtitle:
        '可插拔的连接器将实时价格、订单簿和参考数据直接流式送入你的组件——覆盖 FX、加密货币、股票、期货、期权、预测市场、数据库和社交信息流。',
      note: '如今已有 45 个连接器上线，另有 83 个在目录中——交易场所、市场数据 API、数据库、社交来源、加密钱包和网络服务。许多直接从你的浏览器流式传输；其余则通过一层轻量代理路由。',
      count: 45,
      countLabel: '个实时连接器',
      groups: {
        fx: 'FX',
        crypto: '加密货币',
        equities: '股票与期货',
        prediction: '预测市场',
        data: '数据与数据库',
        socials: '社交平台',
      },
    },
    network: {
      eyebrow: '网络',
      title: '独自构建。或接入网络。',
      subtitle:
        '保持完全本地和私密，或创建一个免费账户，加入一个由创作者组成的世界，与你并肩构建、分享和交易仪表盘。',
      liveLabel: '已上线',
      soonLabel: '即将推出',
      items: [
        {
          icon: 'users',
          title: '社区',
          body: '发现并关注创作者，在面向市场构建者的社交信息流中点赞和评论，分享组件供他人直接加入自己的组件库——并配有公开的创作者主页。',
          status: 'live',
        },
        {
          icon: 'store',
          title: '市场',
          body: '从你的组件库发布组件、主题、界面和机器人，并安装他人分享的作品——溯源机制为每一次重制致谢原作者。买卖功能随后推出。',
          status: 'live',
        },
        {
          icon: 'signal',
          title: '策略信号',
          body: '发布经审计的业绩记录，订阅你信任的创作者的信号，并从你运行的策略中获得收益。',
          status: 'soon',
        },
        {
          icon: 'trophy',
          title: '声望与勋章',
          body: '每个组件、机器人和分享都能赚取声望——公开主页上的点数、分级成就、稀有勋章和等级。把它们兑换成奖励积分的功能随后推出。',
          status: 'live',
        },
      ],
      accountBadge: '免费账户',
      accountTitle: '一个免费账户即可解锁网络',
      accountBody: '无需信用卡。随时可以继续本地构建——账户始终是可选的。',
      accountPoints: [
        '注册即预留 10,000 免费 AI 积分',
        '工作区与组件跨设备云同步',
        '社区、市场与组件库',
        '在构建与分享中赚取声望点数、勋章和等级',
      ],
      accountCta: '创建你的免费账户',
    },
    plans: {
      eyebrow: '方案',
      title: '免费起步。准备好了再成长。',
      subtitle:
        '永久免费构建——用你自己的密钥在本地运行，或用免费账户预留的 10,000 积分。升级以获得更多积分、机器人和智能体。',
      cta: '对比所有方案',
    },
    privacy: {
      eyebrow: '为隐私而设计',
      title: '你的密钥。你的数据。你的机器。',
      body: 'Nexow 默认完全本地运行。在私密模式下，你添加自己的 Anthropic API 密钥，组件生成完全在你的浏览器中进行——不会发送到我们的服务器，因此一个未认证的会话对我们既无成本、也不泄露任何东西。',
      points: [
        '自带密钥的代码生成在客户端运行',
        '组件、版本和日志持久化在你的浏览器中（IndexedDB）',
        '直连交易场所，凭据不经过我们的基础设施',
        '开始构建无需账户',
      ],
      cta: '阅读本地模式架构',
    },
    roadmap: {
      eyebrow: '路线图',
      title: '这是预览版。接下来是这些。',
      subtitle:
        'Nexow 已发布画布、代码生成、云端机器人、智能体、Copilot、市场、账户和社区。更广阔的应用画布正通过下面这些基础模块持续落地。',
      shipped: '已发布',
      soon: '即将推出',
      items: [
        { status: 'shipped', title: 'AI 组件代码生成', body: '自然语言组件在画布上沙箱化运行。' },
        { status: 'shipped', title: '28+ 个市场数据连接器', body: '券商、交易所、数据提供方、数据库和社交平台实时流式传输。' },
        { status: 'shipped', title: '云端机器人与提醒', body: '自动化监视你的数据并向组件推送信号，即使标签页已关闭。' },
        { status: 'shipped', title: '账户与云同步', body: '免费账户，工作区在每台设备间同步——为平台上线预留 10K 积分。' },
        { status: 'shipped', title: '社区信息流与主页', body: '关注创作者、将组件分享到信息流，并认领你的公开 @handle。' },
        { status: 'shipped', title: '智能体与 Copilot', body: '配备完整框架的云端智能体，带工具授权和运行历史部署——外加一个能为你构建并整理工作区的 Copilot。' },
        { status: 'shipped', title: '市场', body: '发布并安装组件、主题、界面和机器人——溯源机制为每一次重制致谢原作者。' },
        { status: 'shipped', title: '声望与勋章', body: '为你构建和分享的一切提供点数、分级成就、稀有勋章和等级。' },
        { status: 'soon', title: '高级组件与信号', body: '发布高级组件和策略信号，让他人订阅，并从你运行的内容中获得收益。' },
        { status: 'soon', title: '付费方案与奖励积分', body: 'Supporter 与 Sponsor 结账、平台积分，以及把声望兑换成奖励积分。' },
      ],
    },
    faq: {
      eyebrow: '常见问题',
      title: '问题，一一解答',
      subtitle: '启动应用前你需要知道的一切。',
      items: [
        {
          q: 'Nexow 是什么？',
          a: 'Nexow 是一个面向市场的 AI 原生工作区。你用自然语言描述一个组件——图表、表格、热力图或信号——Nexow 就会生成它的源码，在沙箱化的 iframe 中运行，并将实时市场数据流式呈现到自由画布上。围绕这些，它还加入了云端机器人、AI 智能体、Copilot 和创作者社区。',
        },
        {
          q: '我需要会写代码吗？',
          a: '不需要。你用自然语言描述想要什么，Nexow 就会为你编写并运行组件。如果你确实会读代码，每个组件的源码和版本历史都可供查看和打磨。',
        },
        {
          q: '我的数据私密吗？我需要账户吗？',
          a: '无需账户。Nexow 默认完全本地运行：添加你自己的 Anthropic API 密钥，组件生成就在你的浏览器中进行，组件、版本和日志存储在 IndexedDB 中。免费账户始终是可选的——它增加 AI 积分、云同步和社区，但你也可以保持 100% 本地构建。',
        },
        {
          q: '支持哪些市场和交易场所？',
          a: 'Nexow 拥有 28 个实时连接器（目录中共 56 个），覆盖 FX（OANDA、LMAX、FXCM）、加密货币（Binance、Coinbase、Kraken、Deribit、BitMEX）、股票和期货（Interactive Brokers、Alpaca、TradeStation、Polygon、Rithmic、IQFeed）、预测市场（Kalshi、Polymarket）、数据提供方和数据库（Alpha Vantage、Intrinio、Trading Economics、Postgres、ClickHouse、Qdrant）以及社交信息流（X、YouTube、Discord、Telegram、Spotify）。',
        },
        {
          q: '机器人和智能体是什么？',
          a: '机器人是云端自动化，监视你的数据并向组件推送信号和提醒，即使标签页已关闭——用平实的话描述一条提醒，或用阈值、涨跌幅、移动平均线交叉以及已连接券商账户的新成交以可视化方式搭建。智能体则是配备完整框架（模型、记忆、技能、工具、知识、触发器）的 AI——今天就能在可视化框架构建器中设计你的智能体；云端部署和 Copilot 助手即将推出。',
        },
        {
          q: '有社区和市场吗？',
          a: '社区已上线——创建免费账户，认领你的公开 @handle，关注创作者，发帖到信息流，并分享组件供他人直接加入自己的组件库。接下来是一个用于买卖组件的市场，以及你可以从中获益的经审计策略信号。',
        },
        {
          q: 'XP 和奖励是什么？',
          a: 'Nexow 正在为账户加入游戏化层：构建组件、运行机器人和在社区分享都将赚取 XP 并解锁成就徽章——而成就将兑换成奖励积分，可用于抵扣 AI 使用。它即将推出；早期账户享有优先权。',
        },
        {
          q: '费用是多少？',
          a: '永久免费构建——用你自己的密钥在本地运行，或用免费账户预留的 10,000 AI 积分。付费方案（Supporter 和 Sponsor）提供每月积分以及更高的机器人和智能体上限，而 Partner 面向需要私有基础设施的团队。付费结账即将推出；详见方案页。',
        },
        {
          q: '哪个 AI 模型驱动 Nexow？',
          a: 'Nexow 通过 Anthropic SDK 使用 Anthropic 的 Claude 模型进行生成——默认 Claude Opus 4.8，另有 Sonnet 4.6 和 Haiku 4.5 用于更快、更省成本的生成。在私密模式下你提供自己的密钥，因此你对用量和成本拥有完全掌控。',
        },
      ],
    },
    cta: {
      title: '在接下来一分钟内构建你的第一个组件',
      subtitle: '预览版已上线，可免费试用。无需注册，无需设置——只需描述你想看到什么。',
      primary: '启动 Nexow',
      secondary: '探索功能',
    },
  },
  features: {
    meta: {
      title: '功能 — Nexow',
      description:
        '自然语言组件生成、沙箱化运行时、带编组和链接的自由画布、28+ 个市场数据连接器、云端机器人和智能体、带 XP 奖励的创作者社区、私密本地模式，以及带版本管理的组件库。探索 Nexow 的一切。',
    },
    hero: {
      badge: '功能',
      title: '用文字构建市场仪表盘所需的一切',
      subtitle:
        'Nexow 把一句话变成运行中、已接入数据的组件——再给你画布、连接器、云端自动化和网络，去搭建一个真正的工作站。',
    },
    groups: [
      {
        title: '生成',
        body: '描述你想看到什么；Nexow 编写并运行它。',
        items: [
          { icon: 'sparkles', title: '自然语言代码生成', body: '描述一个组件，Nexow 就会借助 Claude 生成完整源码——图表、表格、热力图、订单簿、自定义信号。' },
          { icon: 'wand', title: '对话式打磨', body: '开口就能修改任何东西。“加一条 200 EMA”、“切换到对数刻度”、“按资金费率着色”——Nexow 原地编辑组件。' },
          { icon: 'history', title: '可版本化、可查看', body: '每次生成都有版本和日志。回滚、对比，并阅读每个组件中正在运行的确切源码。' },
        ],
      },
      {
        title: '运行',
        body: '一个安全、快速的生成代码运行时。',
        items: [
          { icon: 'shield', title: '沙箱化 iframe', body: '组件在边界严格的隔离 iframe 中执行——生成的代码可以渲染和获取数据，但无法触及你的工作区或其他组件。' },
          { icon: 'bolt', title: '实时流式数据', body: '组件以极低延迟订阅实时价格、订单簿和参考数据。' },
          { icon: 'layers', title: '自由画布与工作区', body: '在自由画布上排布组件，将它们编入工作区和屏幕分区，并即时切换各种布置。' },
          { icon: 'link', title: '编组与 Links', body: '用马赛克或标签布局把组件打包成组，并用 Links 把组件连在一起——单向或双向的管道，将一个组件的数据流入另一个。' },
        ],
      },
      {
        title: '连接',
        body: '来自你实际使用的交易场所的可插拔数据。',
        items: [
          { icon: 'plug', title: '28+ 个市场数据连接器', body: 'FX、加密货币、股票、期货、期权和预测市场——OANDA、Binance、Coinbase、IBKR、Polygon、Kalshi、Polymarket 等。' },
          { icon: 'globe', title: '尽可能浏览器直连', body: '在 CORS 允许的地方，已认证的交易场所调用直接从你的浏览器运行，完全绕过我们的代理。' },
          { icon: 'database', title: '也支持数据库与社交平台', body: '让组件指向 Postgres、ClickHouse 或 Qdrant，或在实时市场之外从 X、YouTube、Discord 和 Telegram 拉取数据。' },
        ],
      },
      {
        title: '自动化',
        body: '在你离开时行动的云端自动化和 AI。',
        items: [
          { icon: 'bot', title: '云端机器人', body: '描述一条提醒或以可视化方式搭建——阈值、涨跌幅、MA 交叉、摘要，或已连接券商账户的新成交。机器人在云端心跳上运行，即使标签页已关闭也向你的组件推送信号。' },
          { icon: 'cpu', title: 'AI 智能体', body: '配备完整框架的智能体——模型、记忆、技能、工具、知识和触发器。在可视化框架构建器中构建，然后带着工具授权和实时运行历史部署到云端。' },
          { icon: 'chat', title: 'Copilot', body: '面向你工作区的助手：附上某个组件的截图或数据，让它解释、总结或建议你接下来该关注什么——在并行对话中进行，后台持续构建。' },
        ],
      },
      {
        title: '网络',
        body: '与一个创作者的世界并肩构建。',
        items: [
          { icon: 'users', title: '社区', body: '关注创作者，发帖到信息流，并分享组件供他人直接加入自己的组件库——如今已上线，配有公开的创作者主页。' },
          { icon: 'store', title: '市场', body: '发布并安装现成的组件、主题、界面和机器人——如今已上线，溯源机制为每一次重制致谢原作者。买卖功能随后推出。' },
          { icon: 'signal', title: '策略信号', body: '发布经审计的业绩记录，订阅你信任的信号，并从你运行的策略中获得收益。即将推出。' },
          { icon: 'trophy', title: '声望与勋章', body: '通过构建和分享赚取声望点数，解锁分级成就和稀有勋章——如今已上线。奖励积分随后推出。' },
        ],
      },
      {
        title: '掌控',
        body: '默认私密，归你所有。',
        items: [
          { icon: 'lock', title: '私密本地模式', body: '自带你的 Anthropic 密钥，在客户端生成组件。不会发送到我们的服务器——无需账户。' },
          { icon: 'sync', title: '可选云同步', body: '创建免费账户，即可在每台设备间同步工作区、组件和设置——并配有加密的凭据保险库。' },
          { icon: 'library', title: '可复用组件库', body: '把任意组件保存到你的组件库，一键放入任何仪表盘。' },
        ],
      },
    ],
  },
  plansPage: {
    meta: {
      title: '方案 — Nexow',
      description:
        '永久免费构建——用你自己的密钥在本地运行，或用免费账户预留的 10,000 AI 积分。对比 Free、Supporter、Sponsor 和 Partner 在积分、机器人、智能体和定制方面的差异。',
    },
    hero: {
      badge: '方案',
      title: '免费起步。留足成长空间。',
      subtitle:
        '免费构建——用你自己的密钥在本地运行，或注册以预留 10,000 AI 积分。当你需要更多容量、自动化和精致体验时再升级。',
    },
    comingSoon:
      'Supporter 与 Sponsor 结账即将推出，平台积分也将随之上线。今天所有人都在 Free 方案——创建账户，在计费开启时抢先一步。',
    highlights: {
      title: '随方案而扩展的内容',
      items: [
        {
          icon: 'coins',
          title: 'AI 积分',
          body: '为组件生成、Copilot 回复和机器人逻辑提供动力。Free 起步预留 10K；付费方案每月刷新。',
        },
        {
          icon: 'bot',
          title: '机器人与智能体',
          body: '机器人监视市场并触发动作。智能体运行多步骤工作流。更高的方案提升并发上限。',
        },
        {
          icon: 'sparkles',
          title: '定制',
          body: '随着升级，解锁强调色、徽标和高级界面——让 Nexow 有你自己的样子。',
        },
      ],
    },
    included: {
      title: '每个方案都包含',
      items: [
        '无限屏幕、工作区和组件',
        '28+ 个实时市场数据连接器',
        '沙箱化组件运行时',
        '全局 Copilot（即将推出）',
        '社区与市场访问权',
      ],
    },
    billing: { monthly: '按月', yearly: '按年', save: '省两个月' },
    tiers: [
      {
        name: 'Free',
        tagline: '构建所需的一切。',
        priceMonthly: '$0',
        priceYearly: '$0',
        cadence: '永久',
        stats: ['10K 积分', '10 个机器人', '3 个智能体'],
        cta: '免费开始',
        ctaHref: 'https://x.nexow.ai',
        features: [
          '注册即预留 10,000 AI 积分',
          '无限屏幕、工作区和组件',
          '无限浏览器连接',
          '跨设备云同步',
          '全局 Copilot（即将推出）',
          '社区与市场访问权',
        ],
      },
      {
        name: 'Supporter',
        tagline: '给想要更多空间的创作者。',
        priceMonthly: '$9.99',
        priceYearly: '$8.33',
        billedYearly: '$99.90 按年计费',
        cadence: '/月',
        badge: '即将推出',
        stats: ['50K 积分/月', '30 个机器人', '10 个智能体'],
        note: '包含 Free 的一切，另加：',
        cta: '成为 Supporter',
        ctaHref: 'https://x.nexow.ai',
        features: [
          '每月 50,000 积分',
          '最多 30 个机器人和 10 个智能体',
          '每个工作区一个 Copilot',
          '第二强调色（渐变）',
          '专属界面与外观选项',
        ],
      },
      {
        name: 'Sponsor',
        tagline: '给走向专业的高阶用户。',
        priceMonthly: '$69.99',
        priceYearly: '$58.33',
        billedYearly: '$699.90 按年计费',
        cadence: '/月',
        badge: '最佳回报',
        stats: ['800K 积分/月', '300 个机器人', '100 个智能体'],
        note: '包含 Supporter 的一切，另加：',
        cta: '成为 Sponsor',
        ctaHref: 'https://x.nexow.ai',
        featured: true,
        features: [
          '每月 800,000 积分',
          '最多 300 个机器人和 100 个智能体',
          '自定义连接（Connector Builder）',
          '每个屏幕一个 Copilot',
          '上传你自己的徽标',
          '高级界面定制',
        ],
      },
      {
        name: 'Partner',
        tagline: '给需要一切的团队。',
        priceMonthly: '定制',
        priceYearly: '定制',
        cadence: '',
        stats: ['私有基础设施', '专属服务', 'SLA'],
        note: '包含 Sponsor 的一切，另加：',
        cta: '联系我们',
        ctaHref: 'mailto:partners@nexow.ai',
        features: [
          '私有基础设施',
          '专属设置服务',
          '一流的定制开发',
          '量身定制的品牌与个性化',
          '专属支持',
        ],
      },
    ],
    faqTitle: '方案相关问题',
    faq: [
      { q: 'Nexow 真的免费吗？', a: '是的。你可以永久免费构建——用你自己的 Anthropic 密钥完全本地运行（你只需支付自己的 API 用量），或创建一个免费账户，它会预留 10,000 AI 积分供平台模式开放时使用，因此无需你自己的密钥。' },
      { q: '积分是什么？', a: '积分用于计量 AI 用量——生成组件、链接、机器人和 Copilot 回复。免费账户起步预留 10,000，付费方案则提供每月额度（Supporter 5 万，Sponsor 80 万）。积分计量将随平台模式上线，你可随时购买更多。' },
      { q: '付费方案何时上线？', a: 'Supporter 和 Sponsor 已定义并展示在应用中，但付费结账即将推出。今天所有人都在 Free 方案——创建账户，在计费开启时抢先一步。' },
      { q: '我可以按年付费吗？', a: '可以。相比按月付费，按年计费可为你省下两个月。你可随时在按月和按年之间切换。' },
    ],
  },
  connectorsPage: {
    meta: {
      title: '连接器 — Nexow',
      description:
        '浏览 Nexow 的每一个连接器——28 个已上线，目录中共 56 个。券商、交易所、DEX、预测市场、数据提供方、数据库和社交信息流。搜索、筛选并连接。',
    },
    hero: {
      badge: '连接器',
      title: '每一个市场，一块画布',
      subtitle:
        '搜索 Nexow 连接的全部交易场所目录——券商、交易所、数据提供方、数据库和社交平台。实时连接器如今即可使用；其余即将落地。',
    },
    searchPlaceholder: '搜索连接器……',
    filters: '筛选',
    all: '全部',
    categories: { finance: '金融', data: '数据', socials: '社交' },
    status: { all: '全部', live: '已上线', soon: '即将' },
    kinds: {
      broker: '券商',
      exchange: '交易所',
      prediction: '预测市场',
      dex: 'DEX',
      aggregator: '聚合器',
      data: '市场数据',
      sql: 'SQL 数据库',
      nosql: 'NoSQL 数据库',
      warehouse: '数据仓库',
      vector: '向量数据库',
      messaging: '消息',
      social: '社交网络',
      video: '视频',
      community: '社区',
      music: '音乐',
    },
    assets: {
      equities: '股票',
      indices: '指数',
      fixed_income: '固定收益',
      fx: 'FX',
      commodities: '大宗商品',
      crypto: '加密货币',
      volatility: '波动率',
      prediction_markets: '预测',
    },
    visit: '访问网站',
    results: '{n} 个连接器',
    empty: '没有匹配你搜索的连接器。',
    exploreCta: '探索全部连接器',
    countLive: '已上线',
    countCatalog: '在目录中',
  },
  about: {
    meta: {
      title: '关于 — Nexow',
      description:
        'Nexow 正在打造一个面向市场的 AI 原生工作站：用自然语言描述任意组件，即可得到一个运行中、已接入数据的仪表盘。默认私密。了解我们的使命。',
    },
    hero: {
      badge: '关于',
      title: '一个面向市场的 AI 原生工作站',
      subtitle:
        '我们认为，构建一个交易仪表盘应当和描述它一样快。Nexow 把自然语言变成运行中、已接入数据的组件——并让你始终掌控自己的密钥和数据。',
    },
    missionTitle: '我们为什么要构建 Nexow',
    mission: [
      '每一位交易者和分析师最终都在手工重建同样的图表、表格和监视器——拼接 API、摆弄 websocket、跟布局较劲。这些工具很强大却很慢，而好用的那些又被锁在笨重的平台之后。',
      'Nexow 反其道而行。你描述想看到什么，AI 就会编写一个真实、运行中的组件——沙箱化、有版本管理，并接入来自你已在使用的交易场所的实时数据。仪表盘自我组装，你用自然语言打磨它。',
      '我们以隐私优先的方式构建它：用你自己的密钥完全本地运行，把数据留在你的浏览器里，并尽可能直连交易场所。随着我们加入交易智能体、服务端组件和社区层，这一原则始终不变——你的密钥、你的数据、你的机器。',
    ],
    valuesTitle: '我们所看重的',
    values: [
      { icon: 'lock', title: '默认私密', body: '本地优先、自带密钥，除非你选择，数据绝不离开你的机器。' },
      { icon: 'bolt', title: '洞见即达', body: '几秒内从一句话到实时组件——问题与图表之间最短的路径。' },
      { icon: 'shield', title: '构造即安全', body: '生成的代码在严格边界内沙箱化运行，因此强大永远不意味着风险。' },
      { icon: 'globe', title: '面向每一个市场', body: 'FX、加密货币、股票、期货、期权和预测市场——一块画布容纳它们全部。' },
    ],
    ctaTitle: '亲眼看看',
    ctaBody: '预览版已上线。描述一个组件，看 Nexow 把它构建出来。',
    cta: '启动应用',
  },
  blog: {
    meta: {
      title: '博客 — Nexow',
      description:
        '关于用 AI 构建市场仪表盘、接入实时数据和交易工具的指南与深度解析——来自 Nexow 团队。',
    },
    title: 'Nexow 博客',
    subtitle: '构建 AI 原生的市场工具——指南、深度解析和产品笔记。',
    latest: '最新',
    readMore: '阅读文章',
    backToBlog: '返回博客',
    published: '发布于',
    updated: '更新于',
    minRead: '分钟阅读',
  },
  notFound: {
    title: '这个页面飘出了画布',
    body: '你要找的页面并不存在——但你的下一个仪表盘或许存在。',
    cta: '返回首页',
  },
  privacyPage: {
    badge: '隐私',
    title: '隐私政策',
    subtitle: 'Nexow 如何处理你的数据——简版：尽可能少。',
    meta: {
      title: '隐私政策 — Nexow',
      description: 'Nexow 默认私密。了解我们如何处理数据、密钥和连接。',
    },
    updated: '最后更新：2026 年 7 月 1 日',
    sections: [
      { h: '默认私密', p: 'Nexow 默认完全本地运行。在私密模式下，你提供自己的 Anthropic API 密钥，组件生成完全在你的浏览器中进行。你的提示词和生成的代码从你的浏览器直接发送给 Anthropic——不经过我们的服务器。' },
      { h: '我们存储什么', p: '你的组件、版本、日志和组件库使用 IndexedDB 存储在你的浏览器中。它们留在你的设备上，不会上传到 Nexow。清除浏览器存储会将它们永久删除。' },
      { h: '市场数据连接', p: '在交易场所允许的情况下，Nexow 直接从你的浏览器连接到它，而你的交易场所凭据仅用于与该场所通信。有些场所需要通过一层轻量代理路由；在这些情况下，只有完成请求所需的数据才会通过。' },
      { h: '本网站', p: '这个营销网站是一个静态站点。我们把分析保持在最低限度且尊重隐私，并且我们不出售个人数据。外链（例如应用）都有清晰标注。' },
      { h: '联系', p: '有关于隐私的问题？发邮件至 hello@nexow.ai。' },
    ],
  },
};
