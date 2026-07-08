import type { SiteContent } from '../content';

export const pt: SiteContent = {
  nav: {
    links: [
      { label: 'Funcionalidades', href: '/features' },
      { label: 'Conectores', href: '/connectors' },
      { label: 'Planos', href: '/plans' },
      { label: 'Blog', href: '/blog' },
      { label: 'Sobre', href: '/about' },
    ],
    launch: 'Abrir app',
    menu: 'Abrir menu',
    close: 'Fechar menu',
  },
  footer: {
    tagline: 'Descreva um widget. O Nexow constrói-o, liga-o a dados de mercado em tempo real e coloca-o no seu canvas.',
    columns: [
      {
        title: 'Produto',
        links: [
          { label: 'Funcionalidades', href: '/features' },
          { label: 'Planos', href: '/plans' },
          { label: 'Conectores', href: '/connectors' },
          { label: 'Automações', href: '/#automate' },
          { label: 'Comunidade', href: '/#network' },
          { label: 'Roadmap', href: '/#roadmap' },
        ],
      },
      {
        title: 'Empresa',
        links: [
          { label: 'Sobre', href: '/about' },
          { label: 'Blog', href: '/blog' },
        ],
      },
      {
        title: 'Recursos',
        links: [
          { label: 'Abrir app', href: 'https://x.nexow.app' },
          { label: 'Privacidade', href: '/privacy' },
        ],
      },
    ],
    rights: 'Todos os direitos reservados.',
    disclaimer:
      'O Nexow é uma plataforma de ferramentas e visualização. Nada aqui constitui aconselhamento financeiro. Os mercados envolvem risco; negoceie de forma responsável.',
    builtWith: 'Construído com Astro. Privado por predefinição.',
  },
  home: {
    meta: {
      title: 'Nexow — Crie dashboards de mercado com IA, em linguagem natural',
      description:
        'O Nexow é um workspace nativo de IA para mercados. Descreva um widget em linguagem natural e o Nexow constrói-o, liga-o a dados em tempo real de mais de 28 conectores e acrescenta bots na cloud, agentes de IA, uma comunidade de criadores e recompensas em XP — privado por predefinição, grátis para começar.',
    },
    hero: {
      badge: 'Pré-visualização já disponível',
      titleLead: 'Descreva.',
      titleGradient: 'O Nexow constrói.',
      titleTail: 'Negoceie.',
      subtitle:
        'Um workspace nativo de IA para mercados. Peça qualquer widget em linguagem natural — o Nexow escreve o código, executa-o em segurança e transmite dados em tempo real para um canvas livre. Automatize com bots e agentes na cloud e ligue-se a uma comunidade de criadores.',
      ctaPrimary: 'Abrir a app',
      ctaSecondary: 'Veja como funciona',
      note: 'Sem registo para experimentar · Privado no seu navegador · Ou uma conta grátis com 10 mil créditos reservados',
      promptExample: 'Mostra um gráfico de velas de BTC-USD da Coinbase com EMA de 20 e 50 e RSI por baixo.',
      promptPlaceholder: 'Descreva um widget…',
    },
    ticker: { label: 'Conectores ativos' },
    trust: 'Um canvas para todos os mercados — FX, cripto, ações, futuros, opções e mercados de previsão.',
    stats: [
      { n: 28, suffix: '+', label: 'conectores de dados de mercado ativos' },
      { n: 6, label: 'classes de ativos num só canvas' },
      { n: 10, suffix: 'K', label: 'créditos de IA grátis reservados no registo' },
      { n: 30, prefix: '<', suffix: 's', label: 'da frase ao widget em funcionamento' },
    ],
    showcase: {
      eyebrow: 'Demonstração',
      title: 'Uma frase. Qualquer widget.',
      subtitle:
        'Gráficos, order books, heatmaps, probabilidades — se conseguir descrevê-lo, o Nexow consegue construí-lo e ligá-lo a dados em tempo real.',
      generatedBadge: 'gerado e em tempo real',
      tabs: [
        {
          label: 'Velas + indicadores',
          prompt: 'Gráfico de velas de BTC-USD da Coinbase com EMA de 20 e 50 e RSI por baixo.',
          caption: 'Em streaming da Coinbase — EMAs e RSI calculados no widget.',
        },
        {
          label: 'Profundidade do order book',
          prompt: 'Profundidade do order book em tempo real para ETH-PERP na Deribit, bids vs asks.',
          caption: 'Bids e asks agregados em tempo real a partir do book da Deribit.',
        },
        {
          label: 'Heatmap de correlação',
          prompt: 'Heatmap de correlação a 30 dias para BTC, ETH, SOL, EURUSD, gold e SPX.',
          caption: 'Correlações entre ativos recalculadas à medida que chegam novos fechos.',
        },
        {
          label: 'Mercados de previsão',
          prompt: 'Probabilidades na Kalshi de um corte de taxas da Fed no próximo FOMC, com variação a 24h.',
          caption: 'Probabilidades de eventos transmitidas diretamente do order book da Kalshi.',
        },
      ],
    },
    features: {
      eyebrow: 'Porquê o Nexow',
      title: 'O dashboard constrói-se sozinho',
      subtitle:
        'Deixe de montar gráficos à mão. Descreva o que quer ver e o Nexow gera um widget real e funcional — e depois deixa-o refiná-lo em linguagem natural.',
      items: [
        {
          icon: 'sparkles',
          title: 'Widgets em linguagem natural',
          body: 'Descreva um gráfico, tabela, heatmap ou sinal por palavras simples. O Nexow escreve o código do widget com o Claude e executa-o em tempo real — sem boilerplate, sem ficheiros de configuração.',
        },
        {
          icon: 'shield',
          title: 'Isolado e seguro',
          body: 'Cada widget corre num iframe isolado com uma fronteira rígida. O código gerado pode renderizar e obter dados, mas nunca toca no resto do seu workspace.',
        },
        {
          icon: 'plug',
          title: 'Mais de 28 conectores de dados em tempo real',
          body: 'Fornecedores de dados de mercado plugáveis — OANDA, Binance, Coinbase, Kraken, Polygon, Interactive Brokers, Kalshi, Polymarket e mais — encaminham dados em tempo real para os seus widgets.',
        },
        {
          icon: 'layers',
          title: 'Canvas livre',
          body: 'Arraste, redimensione e organize widgets num canvas livre com workspaces e ecrãs para FX, cripto, análise — o que quer que negoceie. Agrupe widgets e canalize dados em tempo real entre eles com Links.',
        },
        {
          icon: 'lock',
          title: 'Privado por predefinição',
          body: 'Corra totalmente local: adicione a sua própria chave Anthropic e a geração de código acontece no seu navegador. Widgets, versões e logs persistem no IndexedDB — nada é enviado para os nossos servidores.',
        },
        {
          icon: 'history',
          title: 'Versões e uma biblioteca de widgets',
          body: 'Cada edição é versionada com logs que pode inspecionar. Guarde widgets numa biblioteca pessoal e reutilize-os em vários dashboards com um clique.',
        },
      ],
    },
    how: {
      eyebrow: 'Como funciona',
      title: 'Da frase ao widget em tempo real em segundos',
      subtitle: 'Três passos. Sem configuração, sem passo de build, sem código de ligação.',
      steps: [
        {
          n: '01',
          title: 'Descreva',
          body: 'Escreva o que quer em linguagem natural — “um gráfico de profundidade do order book para ETH-PERP na Deribit”.',
        },
        {
          n: '02',
          title: 'Gere',
          body: 'O Nexow escreve o código do widget com o Claude e executa-o num iframe isolado, ligado ao conector que escolheu.',
        },
        {
          n: '03',
          title: 'Refine e organize',
          body: 'Ajuste-o em linguagem natural, versione-o e coloque-o no seu canvas ao lado de tudo o resto que acompanha.',
        },
      ],
    },
    automate: {
      eyebrow: 'Automatize',
      title: 'Coloque o seu workspace em piloto automático',
      subtitle:
        'Os widgets mostram-lhe o mercado. Os bots, agentes e o Copilot agem sobre ele — automações na cloud e IA que continuam a trabalhar quando o separador está fechado.',
      liveLabel: 'Disponível',
      soonLabel: 'Em breve',
      items: [
        {
          icon: 'bot',
          title: 'Bots',
          body: 'Automações na cloud que vigiam os seus dados e disparam sinais e alertas para os seus widgets. Descreva um alerta por palavras simples — “avisa-me quando o BTC cair 5% numa hora” — ou monte-o visualmente com limites, variação em %, cruzamentos de MA e resumos. Os bots podem até vigiar uma conta de corretora ligada em busca de novas negociações.',
          status: 'live',
        },
        {
          icon: 'cpu',
          title: 'Agentes',
          body: 'Agentes de IA com um verdadeiro harness — modelo, memória, competências, ferramentas, conhecimento e gatilhos. Dê uma tarefa a um agente e deixe-o observar, raciocinar e agir — desenhe o seu no construtor visual de harness hoje; o deploy na cloud chega em breve.',
          status: 'soon',
        },
        {
          icon: 'chat',
          title: 'Copilot',
          body: 'Um assistente de IA para todo o seu workspace. Anexe a captura de ecrã de um widget ou os seus dados em tempo real e pergunte — “explica este gráfico”, “resume isto”, “o que devo acompanhar a seguir?”',
          status: 'soon',
        },
      ],
      harnessChips: ['modelo', 'memória', 'competências', 'ferramentas', 'conhecimento', 'gatilhos'],
      copilotPrompts: ['Explica este gráfico', 'Resume estes dados', 'O que devo acompanhar a seguir?'],
    },
    connectors: {
      eyebrow: 'Conectores',
      title: 'Ligue-se a todos os mercados',
      subtitle:
        'Conectores plugáveis transmitem preços em tempo real, order books e dados de referência diretamente para os seus widgets — em FX, cripto, ações, futuros, opções, mercados de previsão, bases de dados e feeds sociais.',
      note: '28 conectores estão disponíveis hoje e 56 fazem parte do catálogo — corretoras, exchanges, fornecedores de dados, bases de dados e redes sociais. Muitos transmitem diretamente do seu navegador; os restantes passam por um proxy leve.',
      count: 28,
      countLabel: 'conectores ativos',
      groups: {
        fx: 'FX',
        crypto: 'Cripto',
        equities: 'Ações e futuros',
        prediction: 'Mercados de previsão',
        data: 'Dados e bases de dados',
        socials: 'Redes sociais',
      },
    },
    network: {
      eyebrow: 'A rede',
      title: 'Construa sozinho. Ou ligue-se à rede.',
      subtitle:
        'Fique totalmente local e privado, ou crie uma conta grátis e junte-se a um mundo de criadores que constroem, partilham e negoceiam dashboards ao seu lado.',
      liveLabel: 'Disponível',
      soonLabel: 'Em breve',
      items: [
        {
          icon: 'users',
          title: 'Comunidade',
          body: 'Descubra e siga criadores, dê gosto e comente num feed social para quem constrói para os mercados, e partilhe widgets que outros podem adicionar diretamente à sua biblioteca — com perfis públicos de criadores.',
          status: 'live',
        },
        {
          icon: 'store',
          title: 'Marketplace',
          body: 'A partilha de widgets já está disponível na comunidade — a seguir chega um marketplace para comprar e vender widgets prontos a usar e ganhar com o que constrói.',
          status: 'soon',
        },
        {
          icon: 'signal',
          title: 'Sinais de estratégia',
          body: 'Publique históricos auditados, subscreva sinais de criadores em quem confia e ganhe com as estratégias que executa.',
          status: 'soon',
        },
        {
          icon: 'trophy',
          title: 'XP e recompensas',
          body: 'Uma conta gamificada — cada widget, bot e partilha ganha XP. Suba de nível, desbloqueie distintivos por conquistas e converta-os em créditos de recompensa.',
          status: 'soon',
        },
      ],
      accountBadge: 'Conta grátis',
      accountTitle: 'Uma conta grátis desbloqueia a rede',
      accountBody: 'Sem cartão de crédito. Continue a construir localmente sempre que quiser — a conta é sempre opcional.',
      accountPoints: [
        '10 000 créditos de IA grátis reservados no registo',
        'Sincronização na cloud entre dispositivos para workspaces e widgets',
        'Comunidade, marketplace e a biblioteca de widgets',
        'XP, distintivos e créditos de recompensa à medida que constrói (em breve)',
      ],
      accountCta: 'Crie a sua conta grátis',
    },
    plans: {
      eyebrow: 'Planos',
      title: 'Comece grátis. Cresça quando estiver pronto.',
      subtitle:
        'Construa grátis para sempre — localmente com a sua própria chave, ou com 10 000 créditos reservados numa conta grátis. Faça upgrade para mais créditos, bots e agentes.',
      cta: 'Compare todos os planos',
    },
    privacy: {
      eyebrow: 'Privado por conceção',
      title: 'As suas chaves. Os seus dados. A sua máquina.',
      body: 'O Nexow corre totalmente local por predefinição. No modo privado, adiciona a sua própria chave da API Anthropic e a geração de widgets acontece inteiramente no seu navegador — nada é enviado para os nossos servidores, por isso uma sessão não autenticada não nos custa nada e não expõe nada.',
      points: [
        'A geração de código com a sua própria chave corre no cliente',
        'Widgets, versões e logs persistem no seu navegador (IndexedDB)',
        'As ligações diretas às plataformas mantêm as credenciais fora da nossa infraestrutura',
        'Não é preciso conta para começar a construir',
      ],
      cta: 'Leia a arquitetura do modo local',
    },
    roadmap: {
      eyebrow: 'Roadmap',
      title: 'Isto é a pré-visualização. Eis o que vem a seguir.',
      subtitle:
        'O Nexow lançou uma pré-visualização pública do canvas, da geração de código, dos bots na cloud, das contas e do feed da comunidade. Os blocos abaixo chegam a seguir.',
      shipped: 'Lançado',
      soon: 'Em breve',
      items: [
        { status: 'shipped', title: 'Geração de widgets com IA', body: 'Widgets em linguagem natural a correr isolados no canvas.' },
        { status: 'shipped', title: 'Mais de 28 conectores de dados de mercado', body: 'Corretoras, exchanges, fornecedores de dados, bases de dados e redes sociais a transmitir em tempo real.' },
        { status: 'shipped', title: 'Bots e alertas na cloud', body: 'Automações que vigiam os seus dados e disparam sinais para os seus widgets, mesmo com o separador fechado.' },
        { status: 'shipped', title: 'Contas e sincronização na cloud', body: 'Contas grátis com workspaces sincronizados em todos os dispositivos — 10 mil créditos reservados para o lançamento da plataforma.' },
        { status: 'shipped', title: 'Feed e perfis da comunidade', body: 'Siga criadores, partilhe widgets no feed e reivindique o seu @handle público.' },
        { status: 'soon', title: 'Agentes e Copilot', body: 'Faça deploy de agentes na cloud com um harness completo, e um Copilot para o seu workspace.' },
        { status: 'soon', title: 'Marketplace e sinais', body: 'Compre e venda widgets, e publique sinais de estratégia auditados com que pode ganhar.' },
        { status: 'soon', title: 'XP, distintivos e recompensas', body: 'Uma conta gamificada — ganhe XP e distintivos por conquistas e converta-os em créditos de recompensa.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Perguntas, respondidas',
      subtitle: 'Tudo o que precisa de saber antes de abrir a app.',
      items: [
        {
          q: 'O que é o Nexow?',
          a: 'O Nexow é um workspace nativo de IA para mercados. Descreve um widget — um gráfico, tabela, heatmap ou sinal — em linguagem natural, e o Nexow gera o respetivo código, executa-o num iframe isolado e transmite dados de mercado em tempo real para um canvas livre. À volta disso, acrescenta bots na cloud, agentes de IA, um Copilot e uma comunidade de criadores.',
        },
        {
          q: 'Preciso de saber programar?',
          a: 'Não. Descreve o que quer em linguagem natural e o Nexow escreve e executa o widget por si. Se souber ler código, o código de cada widget e o histórico de versões estão disponíveis para inspecionar e refinar.',
        },
        {
          q: 'Os meus dados são privados? Preciso de conta?',
          a: 'Não é preciso conta. O Nexow corre totalmente local por predefinição: adicione a sua própria chave da API Anthropic e a geração de widgets acontece no seu navegador, com widgets, versões e logs guardados no IndexedDB. Uma conta grátis é sempre opcional — acrescenta créditos de IA, sincronização na cloud e a comunidade, mas pode continuar a construir 100% localmente.',
        },
        {
          q: 'Que mercados e plataformas são suportados?',
          a: 'O Nexow tem 28 conectores ativos (56 no catálogo) que abrangem FX (OANDA, LMAX, FXCM), cripto (Binance, Coinbase, Kraken, Deribit, BitMEX), ações e futuros (Interactive Brokers, Alpaca, TradeStation, Polygon, Rithmic, IQFeed), mercados de previsão (Kalshi, Polymarket), fornecedores de dados e bases de dados (Alpha Vantage, Intrinio, Trading Economics, Postgres, ClickHouse, Qdrant) e feeds sociais (X, YouTube, Discord, Telegram, Spotify).',
        },
        {
          q: 'O que são bots e agentes?',
          a: 'Os bots são automações na cloud que vigiam os seus dados e disparam sinais e alertas para os seus widgets mesmo com o separador fechado — descreva um alerta por palavras simples ou monte-o visualmente com limites, variação em %, cruzamentos de médias móveis e novas negociações numa conta de corretora ligada. Os agentes são IA com um harness completo (modelo, memória, competências, ferramentas, conhecimento, gatilhos) — desenhe o seu no construtor visual de harness hoje; o deploy na cloud e o assistente Copilot chegam em breve.',
        },
        {
          q: 'Existe uma comunidade e um marketplace?',
          a: 'A comunidade já está disponível — crie uma conta grátis, reivindique o seu @handle público, siga criadores, publique no feed e partilhe widgets que outros podem adicionar diretamente à sua biblioteca. Um marketplace para comprar e vender widgets e sinais de estratégia auditados com que pode ganhar chegam a seguir.',
        },
        {
          q: 'O que são XP e recompensas?',
          a: 'O Nexow está a acrescentar uma camada gamificada às contas: construir widgets, executar bots e partilhar com a comunidade vai ganhar XP e desbloquear distintivos por conquistas — e as conquistas convertem-se em créditos de recompensa que pode gastar em utilização de IA. Vai ser disponibilizado em breve; as primeiras contas têm prioridade.',
        },
        {
          q: 'Quanto custa?',
          a: 'Grátis para sempre para construir — localmente com a sua própria chave, ou com 10 000 créditos de IA reservados numa conta grátis. Os planos pagos (Supporter e Sponsor) acrescentam créditos mensais e limites mais altos de bots e agentes, e o Partner destina-se a equipas que precisam de infraestrutura privada. O checkout pago chega em breve; consulte a página de planos.',
        },
        {
          q: 'Que modelo de IA move o Nexow?',
          a: 'O Nexow gera com os modelos Claude da Anthropic através do SDK da Anthropic — Claude Opus 4.8 por predefinição, com o Sonnet 4.6 e o Haiku 4.5 para uma geração mais rápida e económica. No modo privado, fornece a sua própria chave, por isso mantém o controlo total da utilização e do custo.',
        },
      ],
    },
    cta: {
      title: 'Construa o seu primeiro widget no próximo minuto',
      subtitle: 'A pré-visualização está disponível e é grátis para experimentar. Sem registo, sem configuração — basta descrever o que quer ver.',
      primary: 'Abrir o Nexow',
      secondary: 'Explorar funcionalidades',
    },
  },
  features: {
    meta: {
      title: 'Funcionalidades — Nexow',
      description:
        'Geração de widgets em linguagem natural, um runtime isolado, um canvas livre com grupos e links, mais de 28 conectores de dados de mercado, bots e agentes na cloud, uma comunidade de criadores com recompensas em XP, modo local privado e uma biblioteca de widgets versionada. Explore tudo o que o Nexow faz.',
    },
    hero: {
      badge: 'Funcionalidades',
      title: 'Tudo o que precisa para criar dashboards de mercado com palavras',
      subtitle:
        'O Nexow transforma uma frase num widget funcional e ligado a dados — e depois dá-lhe o canvas, os conectores, as automações na cloud e a rede para construir uma verdadeira estação de trabalho.',
    },
    groups: [
      {
        title: 'Gerar',
        body: 'Descreva o que quer ver; o Nexow escreve-o e executa-o.',
        items: [
          { icon: 'sparkles', title: 'Geração de código em linguagem natural', body: 'Descreva um widget e o Nexow gera todo o código com o Claude — gráficos, tabelas, heatmaps, order books, sinais personalizados.' },
          { icon: 'wand', title: 'Refine por conversa', body: 'Mude tudo pedindo. “Adiciona uma EMA de 200”, “muda para escala logarítmica”, “colore por funding rate” — o Nexow edita o widget no lugar.' },
          { icon: 'history', title: 'Versionado e inspecionável', body: 'Cada geração é versionada com logs. Reverta, compare e leia o código exato que corre em cada widget.' },
        ],
      },
      {
        title: 'Executar',
        body: 'Um runtime rápido e seguro para o código gerado.',
        items: [
          { icon: 'shield', title: 'Iframes isolados', body: 'Os widgets executam em iframes isolados com uma fronteira rígida — o código gerado pode renderizar e obter dados, mas não pode tocar no seu workspace nem noutros widgets.' },
          { icon: 'bolt', title: 'Dados em streaming em tempo real', body: 'Os widgets subscrevem preços em tempo real, order books e dados de referência com latência mínima.' },
          { icon: 'layers', title: 'Canvas livre e workspaces', body: 'Organize widgets num canvas livre, agrupe-os em workspaces e ecrãs, e alterne entre configurações instantaneamente.' },
          { icon: 'link', title: 'Grupos e Links', body: 'Junte widgets em grupos com esquemas em mosaico ou separadores, e ligue widgets entre si com Links — canais unidirecionais ou bidirecionais que transmitem os dados de um widget para outro.' },
        ],
      },
      {
        title: 'Ligar',
        body: 'Dados plugáveis das plataformas que realmente usa.',
        items: [
          { icon: 'plug', title: 'Mais de 28 conectores de dados de mercado', body: 'FX, cripto, ações, futuros, opções e mercados de previsão — OANDA, Binance, Coinbase, IBKR, Polygon, Kalshi, Polymarket e mais.' },
          { icon: 'globe', title: 'Direto do navegador quando possível', body: 'Onde o CORS permite, as chamadas autenticadas às plataformas correm diretamente do seu navegador e contornam totalmente o nosso proxy.' },
          { icon: 'database', title: 'Bases de dados e redes sociais também', body: 'Aponte widgets para o Postgres, ClickHouse ou Qdrant, ou puxe dados de X, YouTube, Discord e Telegram a par dos mercados em tempo real.' },
        ],
      },
      {
        title: 'Automatizar',
        body: 'Automações na cloud e IA que agem enquanto está ausente.',
        items: [
          { icon: 'bot', title: 'Bots na cloud', body: 'Descreva um alerta ou monte-o visualmente — limites, variação em %, cruzamentos de MA, resumos, ou novas negociações numa conta de corretora ligada. Os bots correm num heartbeat na cloud e enviam sinais para os seus widgets, com o separador fechado.' },
          { icon: 'cpu', title: 'Agentes de IA', body: 'Agentes com um harness completo — modelo, memória, competências, ferramentas, conhecimento e gatilhos. Desenhe o seu no construtor visual de harness hoje — o deploy na cloud chega em breve.' },
          { icon: 'chat', title: 'Copilot', body: 'Um assistente para o seu workspace: anexe a captura de ecrã ou os dados de um widget e peça-lhe para explicar, resumir ou sugerir o que acompanhar a seguir. Em breve.' },
        ],
      },
      {
        title: 'Rede',
        body: 'Construa ao lado de um mundo de criadores.',
        items: [
          { icon: 'users', title: 'Comunidade', body: 'Siga criadores, publique no feed e partilhe widgets que outros podem adicionar diretamente à sua biblioteca — disponível hoje, com perfis públicos de criadores.' },
          { icon: 'store', title: 'Marketplace', body: 'Compre e venda widgets prontos a usar, e ganhe com o que constrói. Em breve — a partilha já funciona na comunidade.' },
          { icon: 'signal', title: 'Sinais de estratégia', body: 'Publique históricos auditados, subscreva sinais em que confia e ganhe com as estratégias que executa. Em breve.' },
          { icon: 'trophy', title: 'XP e recompensas', body: 'Ganhe XP por construir, desbloqueie distintivos por conquistas e converta-os em créditos de recompensa. Em breve.' },
        ],
      },
      {
        title: 'Possuir',
        body: 'Privado por predefinição, seu para manter.',
        items: [
          { icon: 'lock', title: 'Modo local privado', body: 'Traga a sua própria chave Anthropic e gere widgets no cliente. Nada é enviado para os nossos servidores — não é preciso conta.' },
          { icon: 'sync', title: 'Sincronização na cloud opcional', body: 'Crie uma conta grátis para sincronizar workspaces, widgets e definições em todos os dispositivos — com um cofre de credenciais encriptado.' },
          { icon: 'library', title: 'Biblioteca reutilizável', body: 'Guarde qualquer widget na sua biblioteca e coloque-o em qualquer dashboard com um clique.' },
        ],
      },
    ],
  },
  plansPage: {
    meta: {
      title: 'Planos — Nexow',
      description:
        'Grátis para sempre para construir — localmente com a sua própria chave, ou com 10 000 créditos de IA reservados numa conta grátis. Compare Free, Supporter, Sponsor e Partner em créditos, bots, agentes e personalização.',
    },
    hero: {
      badge: 'Planos',
      title: 'Grátis para começar. Espaço para crescer.',
      subtitle:
        'Construa grátis — corra local com a sua própria chave, ou registe-se para reservar 10 000 créditos de IA. Faça upgrade quando precisar de mais capacidade, automação e requinte.',
    },
    comingSoon:
      'O checkout do Supporter e do Sponsor chega em breve, e os créditos da plataforma são lançados em conjunto. Hoje toda a gente está no Free — crie uma conta para ser dos primeiros quando a faturação abrir.',
    highlights: {
      title: 'O que cresce com o seu plano',
      items: [
        {
          icon: 'coins',
          title: 'Créditos de IA',
          body: 'Alimentam a geração de widgets, as respostas do Copilot e a lógica dos bots. O Free reserva 10 mil para começar; os planos pagos renovam mensalmente.',
        },
        {
          icon: 'bot',
          title: 'Bots e agentes',
          body: 'Os bots vigiam os mercados e despoletam ações. Os agentes executam fluxos de trabalho em vários passos. Os planos superiores aumentam os limites concorrentes.',
        },
        {
          icon: 'sparkles',
          title: 'Personalização',
          body: 'Cores de destaque, logótipos e UI premium desbloqueiam à medida que faz upgrade — faça o Nexow parecer seu.',
        },
      ],
    },
    included: {
      title: 'Incluído em todos os planos',
      items: [
        'Ecrãs, workspaces e widgets ilimitados',
        'Mais de 28 conectores de dados de mercado ativos',
        'Runtime de widgets isolado',
        'Copilot global (em breve)',
        'Acesso à comunidade e ao marketplace',
      ],
    },
    billing: { monthly: 'Mensal', yearly: 'Anual', save: '2 meses grátis' },
    tiers: [
      {
        name: 'Free',
        tagline: 'Tudo o que precisa para construir.',
        priceMonthly: '0 €',
        priceYearly: '0 €',
        cadence: 'para sempre',
        stats: ['10 mil créditos', '10 bots', '3 agentes'],
        cta: 'Comece grátis',
        ctaHref: 'https://x.nexow.app',
        features: [
          '10 000 créditos de IA reservados no registo',
          'Ecrãs, workspaces e widgets ilimitados',
          'Ligações de navegador ilimitadas',
          'Sincronização na cloud entre dispositivos',
          'Copilot global (em breve)',
          'Acesso à comunidade e ao marketplace',
        ],
      },
      {
        name: 'Supporter',
        tagline: 'Para criadores que querem mais espaço.',
        priceMonthly: '9,99 €',
        priceYearly: '8,33 €',
        billedYearly: '99,90 € /ano',
        cadence: '/mês',
        badge: 'Em breve',
        stats: ['50 mil créditos/mês', '30 bots', '10 agentes'],
        note: 'Tudo do Free, e ainda:',
        cta: 'Torne-se Supporter',
        ctaHref: 'https://x.nexow.app',
        features: [
          '50 000 créditos por mês',
          'Até 30 bots e 10 agentes',
          'Um Copilot por workspace',
          'Segunda cor de destaque (gradiente)',
          'Opções exclusivas de UI e aparência',
        ],
      },
      {
        name: 'Sponsor',
        tagline: 'Para utilizadores avançados que passam a pro.',
        priceMonthly: '69,99 €',
        priceYearly: '58,33 €',
        billedYearly: '699,90 € /ano',
        cadence: '/mês',
        badge: 'Melhor retorno',
        stats: ['800 mil créditos/mês', '300 bots', '100 agentes'],
        note: 'Tudo do Supporter, e ainda:',
        cta: 'Torne-se Sponsor',
        ctaHref: 'https://x.nexow.app',
        featured: true,
        features: [
          '800 000 créditos por mês',
          'Até 300 bots e 100 agentes',
          'Ligações personalizadas (Connector Builder)',
          'Um Copilot por ecrã',
          'Carregue o seu próprio logótipo',
          'Personalizações de UI premium',
        ],
      },
      {
        name: 'Partner',
        tagline: 'Para equipas que precisam de tudo.',
        priceMonthly: 'Personalizado',
        priceYearly: 'Personalizado',
        cadence: '',
        stats: ['Infraestrutura privada', 'Serviço dedicado', 'SLA'],
        note: 'Tudo do Sponsor, e ainda:',
        cta: 'Contacte-nos',
        ctaHref: 'mailto:partners@nexow.ai',
        features: [
          'Infraestrutura privada',
          'Configuração dedicada',
          'Desenvolvimento personalizado de primeira',
          'Branding e personalização à medida',
          'Apoio dedicado',
        ],
      },
    ],
    faqTitle: 'Perguntas sobre planos',
    faq: [
      { q: 'O Nexow é mesmo grátis?', a: 'Sim. Pode construir grátis para sempre — corra totalmente local com a sua própria chave Anthropic (paga apenas a sua utilização da API), ou crie uma conta grátis que reserva 10 000 créditos de IA para quando o modo plataforma abrir, sem precisar de uma chave sua.' },
      { q: 'O que são créditos?', a: 'Os créditos medem a utilização de IA — gerar widgets, links, bots e respostas do Copilot. A conta grátis reserva 10 000 para começar, e os planos pagos concedem um limite mensal (50 mil no Supporter, 800 mil no Sponsor). A medição de créditos entra em funcionamento com o modo plataforma, e pode comprar mais a qualquer momento.' },
      { q: 'Quando são lançados os planos pagos?', a: 'O Supporter e o Sponsor estão definidos e visíveis na app, mas o checkout pago chega em breve. Hoje toda a gente está no Free — crie uma conta para ser dos primeiros quando a faturação abrir.' },
      { q: 'Posso pagar anualmente?', a: 'Sim. A faturação anual dá-lhe dois meses grátis face ao pagamento mensal. Pode alternar entre mensal e anual a qualquer momento.' },
    ],
  },
  connectorsPage: {
    meta: {
      title: 'Conectores — Nexow',
      description:
        'Explore todos os conectores do Nexow — 28 ativos e 56 no catálogo. Corretoras, exchanges, DEXs, mercados de previsão, fornecedores de dados, bases de dados e feeds sociais. Pesquise, filtre e ligue.',
    },
    hero: {
      badge: 'Conectores',
      title: 'Todos os mercados, um só canvas',
      subtitle:
        'Pesquise o catálogo completo de plataformas a que o Nexow se liga — corretoras, exchanges, fornecedores de dados, bases de dados e redes sociais. Os conectores ativos funcionam hoje; os restantes chegam em breve.',
    },
    searchPlaceholder: 'Pesquisar conectores…',
    all: 'Todos',
    categories: { finance: 'Finanças', data: 'Dados', socials: 'Redes sociais' },
    status: { all: 'Todos', live: 'Disponível', soon: 'Em breve' },
    kinds: {
      broker: 'Corretora',
      exchange: 'Exchange',
      prediction: 'Mercado de previsão',
      dex: 'DEX',
      aggregator: 'Agregador',
      data: 'Dados de mercado',
      sql: 'Base de dados SQL',
      nosql: 'Base de dados NoSQL',
      warehouse: 'Data warehouse',
      vector: 'Base de dados vetorial',
      messaging: 'Mensagens',
      social: 'Rede social',
      video: 'Vídeo',
      community: 'Comunidade',
      music: 'Música',
    },
    assets: {
      equities: 'Ações',
      indices: 'Índices',
      fixed_income: 'Rendimento fixo',
      fx: 'FX',
      commodities: 'Matérias-primas',
      crypto: 'Cripto',
      volatility: 'Volatilidade',
      prediction_markets: 'Previsão',
    },
    visit: 'Visitar site',
    results: '{n} conectores',
    empty: 'Nenhum conector corresponde à sua pesquisa.',
    exploreCta: 'Explorar todos os conectores',
    countLive: 'ativos',
    countCatalog: 'no catálogo',
  },
  about: {
    meta: {
      title: 'Sobre — Nexow',
      description:
        'O Nexow está a construir uma estação de trabalho nativa de IA para mercados: descreva qualquer widget em linguagem natural e obtenha um dashboard funcional e ligado a dados. Privado por predefinição. Conheça a nossa missão.',
    },
    hero: {
      badge: 'Sobre',
      title: 'Uma estação de trabalho nativa de IA para mercados',
      subtitle:
        'Achamos que criar um dashboard de trading deve ser tão rápido como descrevê-lo. O Nexow transforma linguagem natural em widgets funcionais e ligados a dados — e mantém-no no controlo das suas chaves e dados.',
    },
    missionTitle: 'Porque estamos a construir o Nexow',
    mission: [
      'Todos os traders e analistas acabam por reconstruir os mesmos gráficos, tabelas e monitores à mão — colando APIs, a lidar com websockets e a lutar com o layout. As ferramentas são poderosas mas lentas, e as boas estão fechadas atrás de plataformas pesadas.',
      'O Nexow inverte isso. Descreve o que quer ver e uma IA escreve um widget real e funcional — isolado, versionado e ligado a dados em tempo real das plataformas que já usa. O dashboard monta-se sozinho, e refina-o em linguagem natural.',
      'Estamos a construí-lo com a privacidade em primeiro lugar: corra totalmente local com a sua própria chave, mantenha os seus dados no navegador e ligue-se diretamente às plataformas quando possível. À medida que acrescentamos agentes de trading, componentes de servidor e uma camada de comunidade, esse princípio mantém-se — as suas chaves, os seus dados, a sua máquina.',
    ],
    valuesTitle: 'O que valorizamos',
    values: [
      { icon: 'lock', title: 'Privado por predefinição', body: 'Local em primeiro lugar, com a sua própria chave, sem dados a sair da sua máquina a menos que o escolha.' },
      { icon: 'bolt', title: 'Rapidez até ao insight', body: 'De uma frase a um widget em tempo real em segundos — o caminho mais curto entre uma pergunta e um gráfico.' },
      { icon: 'shield', title: 'Seguro por construção', body: 'O código gerado corre isolado com uma fronteira rígida, por isso o poder nunca significa risco.' },
      { icon: 'globe', title: 'Aberto a todos os mercados', body: 'FX, cripto, ações, futuros, opções e mercados de previsão — um só canvas para todos.' },
    ],
    ctaTitle: 'Veja por si próprio',
    ctaBody: 'A pré-visualização está disponível. Descreva um widget e veja o Nexow construí-lo.',
    cta: 'Abrir a app',
  },
  blog: {
    meta: {
      title: 'Blog — Nexow',
      description:
        'Guias e análises detalhadas sobre criar dashboards de mercado com IA, ligar dados em tempo real e ferramentas de trading — da equipa do Nexow.',
    },
    title: 'O blog do Nexow',
    subtitle: 'A construir ferramentas de mercado nativas de IA — guias, análises detalhadas e notas de produto.',
    latest: 'Mais recente',
    readMore: 'Ler artigo',
    backToBlog: 'Voltar ao blog',
    published: 'Publicado',
    updated: 'Atualizado',
    minRead: 'min de leitura',
  },
  notFound: {
    title: 'Esta página desapareceu do canvas',
    body: 'A página que procura não existe — mas o seu próximo dashboard pode existir.',
    cta: 'Voltar à página inicial',
  },
  privacyPage: {
    badge: 'Privacidade',
    title: 'Política de Privacidade',
    subtitle: 'Como o Nexow trata os seus dados — versão curta: o mínimo possível.',
    meta: {
      title: 'Política de Privacidade — Nexow',
      description: 'O Nexow é privado por predefinição. Saiba como tratamos dados, chaves e ligações.',
    },
    updated: 'Última atualização: 1 de julho de 2026',
    sections: [
      { h: 'Privado por predefinição', p: 'O Nexow corre totalmente local por predefinição. No modo privado, fornece a sua própria chave da API Anthropic e a geração de widgets acontece inteiramente no seu navegador. As suas instruções e o código gerado são enviados do seu navegador diretamente para a Anthropic — não através dos nossos servidores.' },
      { h: 'O que guardamos', p: 'Os seus widgets, versões, logs e biblioteca são guardados no seu navegador através do IndexedDB. Ficam no seu dispositivo e não são carregados para o Nexow. Limpar o armazenamento do navegador remove-os permanentemente.' },
      { h: 'Ligações de dados de mercado', p: 'Sempre que uma plataforma o permite, o Nexow liga-se a ela diretamente do seu navegador, e as suas credenciais são usadas apenas para comunicar com essa plataforma. Algumas plataformas exigem encaminhamento por um proxy leve; nesses casos, passa apenas os dados necessários para satisfazer o pedido.' },
      { h: 'Este site', p: 'Este site de marketing é um site estático. Mantemos as análises mínimas e respeitadoras da privacidade, e não vendemos dados pessoais. As ligações externas (como a app) estão claramente identificadas.' },
      { h: 'Contacto', p: 'Dúvidas sobre privacidade? Envie um email para hello@nexow.ai.' },
    ],
  },
};
