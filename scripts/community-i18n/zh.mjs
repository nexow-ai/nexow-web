export default {
  meta: {
    title: '社区 — Nexow',
    description:
      'Nexow 是面向创作者的社交工作区：互动帖子、研究看板、实时仪表盘、Solana 上的 USDC 市场，以及即将到来、由社区主导路线图的 DAO。',
  },
  hero: {
    badge: '社区',
    titleLead: '一款社交应用，为',
    titleGradient: '真正交付作品的创作者',
    titleTail: '而生。',
    subtitle:
      '分享互动小组件、研究与仪表盘。关注创作者，实时聊天，在 Solana 上以 USDC 结算的市场发布 — 并让社区不断复利增长。',
    ctaPrimary: '加入社区',
    ctaSecondary: '探索市场',
    chips: ['实时动态', '看板与仪表盘', 'Solana 上的 USDC', 'DAO 即将推出'],
  },
  social: {
    eyebrow: '社交动态',
    title: '真正能运行的帖子 — 不只是截图。',
    subtitle:
      '动态专为构建者设计。分享小组件、图片、视频或研究笔记；他人可以点赞、评论、二次创作并安装你发布的内容。',
    items: [
      { icon: 'sparkles', title: '互动小组件帖子', body: '把实时小组件挂到帖子上。浏览者可在动态中预览，并直接加入自己的库 — 谱系会标注你的贡献。' },
      { icon: 'chat', title: '点赞、评论与提及', body: '串式回复、表情反应和提及收件箱，让对话留在帖子里 — 而不是散落在私信中。' },
      { icon: 'mail', title: '实时聊天', body: '一对一与群组私信，含在线状态与反应，可从账户或 Dock 进入 — 好友与联系人一键可达。' },
      { icon: 'users', title: '公开创作者主页', body: '领取你的 @handle，置顶帖子，展示看板，让人们关注你发布的作品。' },
    ],
  },
  research: {
    eyebrow: '研究与仪表盘',
    title: '收集来源。搭好工作台。保持实时。',
    subtitle:
      '看板保存研究轨迹 — 链接、媒体与小组件。仪表盘与屏幕把它们变成可分享、可二次创作的工作台。',
    items: [
      { icon: 'library', title: '个人看板', body: '创作者的情绪板：放入小组件、上传媒体、置顶动态帖子，并保存来自 TikTok、YouTube、文章等处的链接。' },
      { icon: 'link', title: '分享到 Nexow', body: '安装 PWA 或使用系统分享目标 — URL 会落到带预览快照的看板上，随时可在画布打开。' },
      { icon: 'layers', title: '仪表盘、屏幕与工作区', body: '在自由画布上排列实时小组件，归入屏幕与工作区，切换布局无需从头重建。' },
      { icon: 'bolt', title: '在画布打开看板', body: '一键把已保存链接变成仪表盘上的实时嵌入 — 研究始终连着使用它的工具。' },
    ],
  },
  grow: {
    eyebrow: '壮大网络',
    title: '声誉跟着你分享的作品走。',
    subtitle:
      '构建、发布与帮助他人，会在公开主页上积累积分、勋章与等级 — Free 与付费计划共用同一套声誉体系。',
    items: [
      { icon: 'trophy', title: '积分、勋章与等级', body: '通过小组件、机器人、分享与社交活动获得声誉。解锁分级成就与稀有勋章，展示在主页上。' },
      { icon: 'signal', title: '发现与关注', body: '浏览 Discover 动态，按小组件、图片或视频筛选，搜索人物与帖子，关注你想看进信息流的创作者。' },
      { icon: 'award', title: '会复利的联系人', body: '互相关注成为联系人。群聊、提及与共享网络让协作像产品 — 而不是旁路频道。' },
      { icon: 'globe', title: '一个免费账户即可解锁', body: '云同步、起步积分、动态、市场与声誉层随免费账户提供。开始无需绑卡。' },
    ],
  },
  referrals: {
    eyebrow: "推荐",
    badge: "即将推出",
    title: "让网络增长。在复利中赚钱。",
    subtitle: "邀请会交付的创造者——并在新关注者进入你的轨道时获得收益。",
    body: "推荐奖励与关注者奖金是社区路线图的下一步。现在领取你的 @handle，等账本上线时你已准备就绪。",
    pillars: [
      { icon: "gift", title: "从推荐中赚钱", body: "分享你的邀请。当你带来的人构建、发布或升级时，你获得一部分收益。" },
      { icon: "users", title: "从新关注者赚钱", body: "吸引受众，并在网络成长时获得奖励——双向回报的声誉。" },
      { icon: "sparkles", title: "先积分，后 NXW", body: "早期奖励以积分落地；与 NXW 绑定的奖金随 DAO 解锁。同一声誉层，新的赚钱方式。" },
    ],
    cta: "领取你的 handle",
  },
  marketplace: {
    eyebrow: '市场',
    title: '发布一次。用 USDC 出售。保留谱系。',
    subtitle:
      '一个分享对话框覆盖小组件、屏幕、工作区、机器人、智能体与主题 — 可免费安装，或以 USDC 标价并在 Solana 上结算。',
    intro:
      'Nexow 从不托管资金。一笔交易是从买家钱包到卖家的直接 SPL 代币转账。平台核验链上结果、解锁资产，只保存双方信任结果所需的账目。',
    pillars: [
      { icon: 'store', title: '一个对话框，六种类型', body: '从资料库、机器人、智能体或主题分享。选择免费或 USDC 价格，填写描述与标签，并可选择在动态中公告。' },
      { icon: 'history', title: '每次二次创作都有谱系', body: '若发布二次创作，对话框会在发出前标明作品来源。署名不会变成事后才发现的事。' },
      { icon: 'shield', title: '无托管、无平台抽成', body: 'Phantom 签署 USDC 转账。Nexow 不持有资金、不抽成 — 只在解锁安装前核验链上回执。' },
      { icon: 'check', title: '更新跟随买家', body: '购买任一版本即可获得同一作者后续版本。他人的二次创作是独立产品，自有定价。' },
    ],
    railTitle: 'USDC 购买如何运作',
    railBody:
      '价格以 Solana 上的 USDC 报价。服务器创建订单；你的钱包付款；链上一致后资产才会解锁。',
    railSteps: [
      { n: '01', title: '创建订单', body: '结账向服务器查询价格与卖家钱包 — 客户端从不自行编造金额。' },
      { n: '02', title: '用 Phantom 支付', body: '钱包签署带订单 id 备忘录的 USDC 转账，并在 Solana 上广播。' },
      { n: '03', title: '链上核验', body: 'Nexow 回读交易：已确认、备忘录匹配、卖家 USDC 余额至少增加报价金额、铸币正确。' },
      { n: '04', title: '安装已购内容', body: '权益解锁。安装小组件、主题、机器人或智能体 — 付费预览在结算前保持锁定。' },
    ],
    railNotes: [
      '钱包一返回签名，回执即本地保存 — 若确认中途关闭标签页，「完成购买」可续办且不会二次付款。',
      '安装的机器人处于暂停；智能体未部署；主题永不自动应用。第一次运行始终由你决定。',
      '私密内容不会随行：提示词、聊天记录、连接 id、钱包地址与智能体记忆留在作者侧。',
    ],
    kindsTitle: '你可以发布什么',
    kinds: [
      { label: '小组件', body: '当前版本的代码 — 沙箱隔离且可二次创作。' },
      { label: '屏幕与工作区', body: '布局、小组件代码与链接，做成可移植的工作台。' },
      { label: '机器人', body: '处理器、参数与计划 — 买家侧以暂停状态到达。' },
      { label: '智能体', body: '模型、技能、工具授权与节奏 — 在对方接好连接前保持未部署。' },
      { label: '主题', body: '颜色、字体、圆角与密度 — 加入资料库，从不强制套用。' },
    ],
  },
  dao: {
    eyebrow: '治理',
    badge: '即将推出',
    title: '用 Nexow DAO 拥有路线图。',
    subtitle:
      'NXW 是治理代币。通过构建与发布获得；通过提案、投票与共同金库调度来花费。',
    body:
      '社区面板里已有 DAO 标签作为预告 — 真正的投票、金库与创作者奖励随后上线。在此之前，声誉与勋章已上线，让早期创作者抢先一步。',
    pillars: [
      { icon: 'lightbulb', title: '提案', body: '提出功能、连接器与规则。持有 NXW 即可把想法放上选票。' },
      { icon: 'vote', title: '投票', body: '公开透明的投票决定下一步构建什么、以何顺序。' },
      { icon: 'vault', title: '金库', body: '共享金库资助社区投票通过的赏金与资助。' },
      { icon: 'gift', title: '创作者奖励', body: '当 DAO 发布并推广其作品时，构建者获得分成。' },
    ],
    previewTitle: '首批选票',
    previewBadge: '预览',
    forLabel: '{pct}% 赞成',
    votesLabel: '{n} 票',
    proposals: [
      { title: '资助社区小组件赏金计划', tag: '金库', pct: 72, votes: 341 },
      { title: '市场创作者收入分成', tag: '奖励', pct: 87, votes: 512 },
      { title: '开源小组件运行时', tag: '路线图', pct: 64, votes: 289 },
      { title: "将 NXW 提案门槛降至 1,000", tag: "治理", pct: 58, votes: 203 },
      { title: "将 Solana 市场手续费降至 2.5%", tag: "费用", pct: 81, votes: 456 },
      { title: "选举社区研究看板版主", tag: "审核", pct: 69, votes: 318 },
    ],
    footer: '与社区公开共创 — 细节会先出现在 DAO 标签。',
  },
  cta: {
    title: '领取你的 @handle，发布点什么。',
    subtitle: '免费账户。实时动态。USDC 市场。下一步是 DAO。',
    primary: '启动 Nexow',
    secondary: '查看全部功能',
  },
};
