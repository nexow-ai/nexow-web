import type { SiteContent } from '../content';

export const fr: SiteContent = {
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
          { label: 'Ouvrir l’app', href: 'https://x.nexow.ai' },
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
          a: 'Les bots sont des automatisations cloud qui surveillent vos données et envoient signaux et alertes à vos widgets même onglet fermé — décrivez une alerte avec des mots ou construisez-la visuellement avec seuils, % de variation, croisements de moyennes et nouveaux trades sur un compte broker connecté. Les agents sont de l’IA avec un harnais complet (modèle, mémoire, skills, outils, connaissances, déclencheurs) — concevez le vôtre dès aujourd’hui dans l’éditeur visuel ; le déploiement cloud et l’assistant Copilot arrivent bientôt.',
        },
        {
          q: 'Y a-t-il une communauté et un marketplace ?',
          a: 'La communauté est en direct — créez un compte gratuit, réclamez votre @pseudo public, suivez des makers, publiez dans le fil et partagez des widgets que d’autres ajoutent directement à leur bibliothèque. Le marketplace pour acheter et vendre des widgets et les signaux de stratégie audités arrivent ensuite.',
        },
        {
          q: 'Que sont les XP et les récompenses ?',
          a: 'Nexow ajoute une couche gamifiée aux comptes : créer des widgets, faire tourner des bots et partager avec la communauté rapportera de l’XP et débloquera des badges pour vos succès — et les succès se convertiront en crédits de récompense à dépenser en usage IA. Déploiement bientôt ; les premiers comptes seront servis en premier.',
        },
        {
          q: 'Combien ça coûte ?',
          a: 'Gratuit pour toujours pour construire — en local avec votre propre clé, ou avec 10 000 crédits IA réservés sur un compte gratuit. Les plans payants (Supporter et Sponsor) ajoutent des crédits mensuels et des limites de bots et d’agents plus élevées, et Partner s’adresse aux équipes qui ont besoin d’une infrastructure privée. Le paiement arrive bientôt ; voir la page tarifs.',
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
        'Génération de widgets en langage naturel, runtime sandboxé, canvas libre avec groupes et links, plus de 28 connecteurs de données de marché, bots et agents cloud, communauté de makers avec récompenses XP, mode local privé et bibliothèque de widgets versionnée. Découvrez tout ce que fait Nexow.',
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
          { icon: 'layers', title: 'Canvas libre et espaces', body: 'Organisez les widgets sur un canvas libre, regroupez-les en espaces et écrans, et changez de configuration instantanément.' },
          { icon: 'link', title: 'Groupes et Links', body: 'Regroupez les widgets en groupes avec des dispositions mosaïque ou onglets, et câblez-les avec des Links — des tuyaux à sens unique ou bidirectionnels qui font passer les données d’un widget à l’autre.' },
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
          { icon: 'bot', title: 'Bots cloud', body: 'Décrivez une alerte ou construisez-la visuellement — seuils, % de variation, croisements de moyennes, digests ou nouveaux trades sur un compte broker connecté. Les bots tournent sur un battement cloud et poussent des signaux vers vos widgets, onglet fermé.' },
          { icon: 'cpu', title: 'Agents IA', body: 'Des agents avec un harnais complet — modèle, mémoire, skills, outils, connaissances et déclencheurs. Concevez le vôtre dès aujourd’hui dans l’éditeur visuel du harnais — le déploiement cloud arrive bientôt.' },
          { icon: 'chat', title: 'Copilot', body: 'Un assistant pour votre espace : joignez la capture d’un widget ou ses données et demandez-lui d’expliquer, résumer ou suggérer quoi surveiller. Bientôt.' },
        ],
      },
      {
        title: 'Réseau',
        body: 'Construisez aux côtés d’un monde de makers.',
        items: [
          { icon: 'users', title: 'Communauté', body: 'Suivez des makers, publiez dans le fil et partagez des widgets que d’autres ajoutent directement à leur bibliothèque — en direct dès aujourd’hui, avec des profils publics de maker.' },
          { icon: 'store', title: 'Marketplace', body: 'Achetez et vendez des widgets prêts à l’emploi, et gagnez sur ce que vous construisez. Bientôt — le partage fonctionne déjà dans la communauté.' },
          { icon: 'signal', title: 'Signaux de stratégie', body: 'Publiez des historiques audités, abonnez-vous aux signaux de confiance et gagnez sur les stratégies que vous exécutez. Bientôt.' },
          { icon: 'trophy', title: 'XP et récompenses', body: 'Gagnez de l’XP en construisant, débloquez des badges pour vos succès et convertissez-les en crédits de récompense. Bientôt.' },
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
        'Construisez gratuitement pour toujours — en local avec votre propre clé, ou avec 10 000 crédits IA réservés sur un compte gratuit. Comparez Free, Supporter, Sponsor et Partner pour crédits, bots, agents et personnalisation.',
    },
    hero: {
      badge: 'Plans',
      title: 'Gratuit pour démarrer. De la place pour grandir.',
      subtitle:
        'Construisez gratuitement — en local avec votre propre clé, ou inscrivez-vous pour réserver 10 000 crédits IA. Montez en gamme quand vous avez besoin de plus de capacité, d’automatisation et de finition.',
    },
    comingSoon:
      'Le paiement Supporter et Sponsor arrive bientôt, et les crédits de la plateforme se lancent avec lui. Tout le monde est sur Free aujourd’hui — créez un compte pour être parmi les premiers à l’ouverture.',
    highlights: {
      title: 'Ce qui évolue avec votre plan',
      items: [
        {
          icon: 'coins',
          title: 'Crédits IA',
          body: 'Alimentent la génération de widgets, les réponses Copilot et la logique des bots. Free réserve 10K pour démarrer ; les plans payants se renouvellent chaque mois.',
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
        'Copilot global (bientôt)',
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
        ctaHref: 'https://x.nexow.ai',
        features: [
          '10 000 crédits IA réservés à l’inscription',
          'Écrans, espaces et widgets illimités',
          'Connexions navigateur illimitées',
          'Sync cloud multi-appareils',
          'Copilot global (bientôt)',
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
        ctaHref: 'https://x.nexow.ai',
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
        ctaHref: 'https://x.nexow.ai',
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
      { q: 'Nexow est-il vraiment gratuit ?', a: 'Oui. Vous pouvez construire gratuitement pour toujours — entièrement en local avec votre propre clé Anthropic (vous ne payez que votre usage de l’API), ou créez un compte gratuit qui réserve 10 000 crédits IA pour l’ouverture du mode plateforme, sans clé à vous.' },
      { q: 'Que sont les crédits ?', a: 'Les crédits mesurent l’usage de l’IA — génération de widgets, liens, bots et réponses de Copilot. Le compte gratuit réserve 10 000 pour démarrer, et les plans payants offrent une allocation mensuelle (50K sur Supporter, 800K sur Sponsor). Le décompte des crédits s’active avec le mode plateforme, et vous pouvez en acheter davantage à tout moment.' },
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
    filters: 'Filtres',
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
    countLive: 'en direct',
    countCatalog: 'au catalogue',
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
  privacyPage: {
    badge: 'Confidentialité',
    title: 'Politique de confidentialité',
    subtitle: 'Comment Nexow traite vos données — version courte : le minimum possible.',
    meta: {
      title: 'Politique de confidentialité — Nexow',
      description: 'Nexow est privé par défaut. Découvrez comment nous traitons les données, les clés et les connexions.',
    },
    updated: 'Dernière mise à jour : 1 juillet 2026',
    sections: [
      { h: 'Privé par défaut', p: 'Nexow fonctionne entièrement en local par défaut. En mode privé, vous fournissez votre propre clé API Anthropic et la génération de widgets se fait entièrement dans votre navigateur. Vos prompts et le code généré sont envoyés depuis votre navigateur directement à Anthropic — pas via nos serveurs.' },
      { h: 'Ce que nous stockons', p: 'Vos widgets, versions, logs et bibliothèque sont stockés dans votre navigateur via IndexedDB. Ils restent sur votre appareil et ne sont pas téléversés vers Nexow. Effacer le stockage de votre navigateur les supprime définitivement.' },
      { h: 'Connexions aux données de marché', p: 'Lorsque le venue le permet, Nexow s’y connecte directement depuis votre navigateur, et vos identifiants du venue ne servent qu’à communiquer avec ce venue. Certains venues nécessitent un proxy léger ; dans ces cas, seules les données nécessaires à la requête passent par ce proxy.' },
      { h: 'Ce site web', p: 'Ce site marketing est un site statique. Nous gardons l’analytique minimale et respectueuse de la vie privée, et nous ne vendons pas de données personnelles. Les liens sortants (comme l’app) sont clairement indiqués.' },
      { h: 'Contact', p: 'Des questions sur la confidentialité ? Écrivez à hello@nexow.ai.' },
    ],
  },
};
