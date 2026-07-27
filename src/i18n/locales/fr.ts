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
    builtWith: 'Construit avec Astro.',
  },
  home: {
    meta: {
      title: 'Nexow — Créez des tableaux de bord de marché avec l’IA, en langage naturel',
      description:
        'Nexow transforme vos idées en widgets vivants sur un canvas. Créez moodboards, planners, mini-jeux, widgets sociaux, dashboards de marché ou outils personnalisés sans repartir de zéro.',
    },
    hero: {
      badge: 'Preview disponible',
      titleLead: 'Décrivez.',
      titleGradient: 'Obtenez un widget.',
      titleTail: 'Organisez.',
      subtitle:
        'Tapez ce qu’il vous faut — un desk de trading, un board projet, un dashboard de fondateur, un tracker d’habitudes. Nexow génère de vrais widgets fonctionnels, branche les données live et les dispose sur un canvas que vous contrôlez.',
      ctaPrimary: 'Ouvrir l’app',
      ctaSecondary: 'Voir la démo',
      note: 'Preview en ligne · 45+ connecteurs · 10K crédits de départ',
      promptExample: 'Crée un moodboard doux, un suivi de streaks et un mini-jeu de mémoire.',
      promptPlaceholder: 'Décrivez un widget…',
    },
    ticker: { label: 'Ce que les gens construisent' },
    appShowcase: {
      eyebrow: 'Directement depuis l’app',
      title: 'Pas une maquette — c’est Nexow',
      subtitle: 'De vrais espaces de travail, capturés sur le canvas. Une phrase en entrée, un ensemble de widgets connectés en sortie.',
      badge: 'vraie capture',
      cta: 'Essayez vous-même',
      ctaNote: 'gratuit · sans carte bancaire · dans votre navigateur',
      shots: [
        {
          label: 'Desk de trading',
          prompt: 'Construis-moi un desk crypto : graphique en chandeliers, watchlist, profondeur du carnet, heatmap et dérivés.',
          alt: 'Espace Nexow avec graphique en chandeliers BTC, watchlist crypto, profondeur de carnet d’ordres, heatmap de marché, dérivés et marchés de prédiction',
          chip: 'Données live · Binance, BitMEX, Kalshi',
          caption: 'Pensé pour les traders : chaque widget diffuse de vraies données de marché depuis des APIs publiques — rien à configurer à la main.',
        },
        {
          label: 'Board projet',
          prompt: 'Crée un poste de pilotage projet : kanban, timeline Gantt, KPIs, risques et charge d’équipe.',
          alt: 'Espace Nexow avec kanban projet, timeline Gantt, tableau de KPIs, registre des risques, charge d’équipe et burndown de sprint',
          chip: '38 tâches · 7 personnes · un canvas',
          caption: 'Pour les leads projet : sprint board, burndown et registre des risques générés ensemble, disposés comme votre équipe les lit.',
        },
        {
          label: 'QG de fondateur',
          prompt: 'Construis un dashboard de fondateur solo : pipeline de leads, checklist de lancement, calendrier de contenu, courbe de MRR et notes.',
          alt: 'Espace Nexow avec pipeline de leads, dashboard de revenus avec MRR et churn, checklist de lancement produit, calendrier de contenu hebdomadaire et bloc-notes',
          chip: 'Pipeline, MRR, plan de lancement · un prompt',
          caption: 'Pour les fondateurs solo : cinq widgets à partir d’un seul prompt — pipeline, KPIs de revenus, plan de lancement, calendrier de contenu et notes.',
        },
      ],
    },
    trust: 'Un canvas pour tout ce que vous pouvez décrire — moodboards, planners, jeux, widgets sociaux, outils data et marchés.',
    stats: [
      { n: 45, suffix: '+', label: 'connecteurs live pour données, wallets, réseaux sociaux et marchés' },
      { n: 6, label: 'exemples d’espaces depuis un même canvas' },
      { n: 10, suffix: 'K', label: 'crédits IA de départ sur Free' },
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
          title: 'Plus de 45 connecteurs en direct',
          body: 'Fournisseurs de données branchables — OANDA, Binance, Coinbase, Kraken, Polygon, Interactive Brokers, Kalshi, Polymarket et plus — acheminent les données en temps réel vers vos widgets.',
        },
        {
          icon: 'layers',
          title: 'Canvas libre',
          body: 'Glissez, redimensionnez et organisez les widgets sur un canvas libre, avec espaces et écrans pour FX, crypto, recherche — ce que vous tradez. Groupez les widgets et reliez leurs données en direct avec des Links.',
        },
        {
          icon: 'lock',
          title: 'Sécurisé par conception',
          body: 'Les widgets générés tournent en sandbox, les accès connecteurs restent limités à ce dont chaque widget a besoin, et l’historique reste attaché à votre espace.',
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
          body: 'Des agents IA avec un vrai harnais — modèle, mémoire, skills, outils, connaissances et déclencheurs. Confiez un travail à un agent et laissez-le surveiller, raisonner et agir — construisez le vôtre dans l’éditeur visuel du harnais et déployez-le dans le cloud, avec autorisations d’outils, mémoire entre les exécutions et un historique d’exécutions en direct.',
          status: 'live',
        },
        {
          icon: 'chat',
          title: 'Copilot',
          body: 'Un assistant IA pour tout votre espace. Discutez dans des onglets parallèles, laissez-le construire des widgets en arrière-plan et organiser votre canvas, et demandez — « explique ce tableau », « résume ceci », « que changer ensuite ? ».',
          status: 'live',
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
      note: '45 connecteurs sont en direct aujourd’hui et 83 figurent au catalogue — venues de trading, APIs de données de marché, bases de données, sources sociales, wallets crypto et services web. Beaucoup diffusent directement depuis votre navigateur ; les autres passent par un proxy léger.',
      count: 45,
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
      title: 'Construisez votre espace. Branchez-vous au réseau.',
      subtitle:
        'Rejoignez un monde de makers qui construisent, remixent et partagent des widgets à vos côtés, avec espaces synchronisés et crédits prêts pour l’app.',
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
          body: 'Publiez widgets, thèmes, écrans et bots depuis votre bibliothèque, et installez ce que les autres partagent — avec une lignée qui crédite chaque remake. L’achat et la vente arrivent ensuite.',
          status: 'live',
        },
        {
          icon: 'signal',
          title: 'Signaux de stratégie',
          body: 'Publiez des historiques audités, abonnez-vous aux signaux de makers de confiance et gagnez sur les stratégies que vous exécutez.',
          status: 'soon',
        },
        {
          icon: 'trophy',
          title: 'Réputation et médailles',
          body: 'Chaque widget, bot et partage rapporte de la réputation — points, succès par paliers, médailles rares et niveaux sur votre profil public. La conversion en crédits de récompense arrive ensuite.',
          status: 'live',
        },
      ],
      accountBadge: 'Compte gratuit',
      accountTitle: 'Un compte gratuit débloque le réseau',
      accountBody: 'Sans carte bancaire. Vos widgets, crédits, sync et outils communautaires restent ensemble quand votre espace grandit.',
      accountPoints: [
        '10 000 crédits IA de départ sur Free',
        'Sync cloud des espaces et widgets sur tous vos appareils',
        'Communauté, marketplace et bibliothèque de widgets',
        'Points de réputation, médailles et niveaux en construisant et partageant',
      ],
      accountCta: 'Créez votre compte gratuit',
    },
    plans: {
      eyebrow: 'Plans',
      title: 'Commencez gratuitement. Évoluez quand vous voulez.',
      subtitle:
        'Démarrez avec les crédits Free, la sync et le canvas de widgets. Montez en gamme quand vous avez besoin de plus de capacité.',
      cta: 'Comparer tous les plans',
    },
    privacy: {
      eyebrow: 'Sécurisé par conception',
      title: 'Votre espace a des limites claires',
      body: 'Nexow garde le code généré, les identifiants, les versions et les logs dans le périmètre de votre espace. Les widgets tournent en sandbox, les connecteurs sont limités à ce dont chaque widget a besoin, et la sync est pensée autour du contrôle.',
      points: [
        'Les widgets générés s’exécutent dans un runtime sandboxé',
        'Versions et logs restent attachés à l’historique de l’espace',
        'Les identifiants de connecteurs sont limités aux services connectés',
        'La sync cloud rend vos espaces disponibles sur vos appareils',
      ],
      cta: 'Lire l’architecture de confidentialité',
    },
    roadmap: {
      eyebrow: 'Roadmap',
      title: 'C’est la preview. Voici la suite.',
      subtitle:
        'Nexow a lancé le canvas, la génération de code, les bots cloud, les agents, Copilot, le marketplace, les comptes et la communauté. Le canvas d’apps élargi continue d’arriver à travers les blocs ci-dessous.',
      shipped: 'Disponible',
      soon: 'Bientôt',
      items: [
        { status: 'shipped', title: 'Génération de widgets par IA', body: 'Widgets en langage naturel exécutés en sandbox sur le canvas.' },
        { status: 'shipped', title: 'Plus de 45 connecteurs', body: 'Bases de données, réseaux sociaux, brokers, exchanges, wallets, données ouvertes et services web en direct.' },
        { status: 'shipped', title: 'Bots et alertes cloud', body: 'Des automatisations qui surveillent vos données et envoient des signaux à vos widgets, onglet fermé.' },
        { status: 'shipped', title: 'Comptes et sync cloud', body: 'Comptes gratuits avec espaces synchronisés sur tous vos appareils — 10K crédits réservés pour le lancement de la plateforme.' },
        { status: 'shipped', title: 'Communauté : fil et profils', body: 'Suivez des makers, partagez des widgets dans le fil et réclamez votre @pseudo public.' },
        { status: 'shipped', title: 'Agents et Copilot', body: 'Des agents cloud avec un harnais complet, déployés avec autorisations d’outils et historique d’exécutions — plus un Copilot qui construit et organise votre espace.' },
        { status: 'shipped', title: 'Marketplace', body: 'Publiez et installez widgets, thèmes, écrans et bots — avec une lignée qui crédite chaque remake.' },
        { status: 'shipped', title: 'Réputation et médailles', body: 'Points, succès par paliers, médailles rares et niveaux pour ce que vous construisez et partagez.' },
        { status: 'soon', title: 'Widgets premium et signaux', body: 'Publiez des widgets premium et des signaux de stratégie, laissez les autres s’abonner et gagnez sur ce que vous exécutez.' },
        { status: 'soon', title: 'Plans payants et crédits de récompense', body: 'Checkout Supporter et Sponsor, crédits de plateforme et conversion de la réputation en crédits de récompense.' },
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
          q: 'Comment Nexow gère-t-il la confidentialité ?',
          a: 'Les widgets générés tournent en sandbox, les accès connecteurs sont limités, et l’historique reste attaché à l’espace concerné. La sync, les crédits et les fonctions communautaires sont conçus pour garder vos widgets portables et sous votre contrôle.',
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
          a: 'Vous pouvez commencer gratuitement avec les crédits de départ, la sync et le canvas principal. Les plans payants (Supporter et Sponsor) ajoutent des crédits mensuels et des limites de bots et d’agents plus élevées, et Partner s’adresse aux équipes qui ont besoin d’une infrastructure dédiée. Le paiement arrive bientôt ; voir la page tarifs.',
        },
        {
          q: 'Quel modèle IA alimente Nexow ?',
          a: 'Nexow génère avec les modèles Claude d’Anthropic via le SDK Anthropic — Claude Opus 4.8 par défaut, avec Sonnet 4.6 et Haiku 4.5 pour une génération plus rapide et économique.',
        },
      ],
    },
    cta: {
      title: 'Construisez votre premier widget dans la prochaine minute',
      subtitle: 'La preview est en ligne. Décrivez une chose utile et placez-la sur votre canvas.',
      primary: 'Ouvrir Nexow',
      secondary: 'Explorer les fonctionnalités',
    },
  },
  features: {
    meta: {
      title: 'Fonctionnalités — Nexow',
      description:
        'Génération de widgets en langage naturel, runtime sandboxé, canvas libre avec groupes et links, plus de 28 connecteurs, bots et agents cloud, communauté de makers avec récompenses XP et bibliothèque de widgets versionnée. Découvrez tout ce que fait Nexow.',
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
          { icon: 'cpu', title: 'Agents IA', body: 'Des agents avec un harnais complet — modèle, mémoire, skills, outils, connaissances et déclencheurs. Construisez le vôtre dans l’éditeur visuel du harnais et déployez-le dans le cloud — avec autorisations d’outils et un historique d’exécutions en direct.' },
          { icon: 'chat', title: 'Copilot', body: 'Un assistant pour votre espace : joignez la capture d’un widget ou ses données et demandez-lui d’expliquer, résumer ou suggérer la prochaine modification — dans des conversations parallèles qui continuent de construire en arrière-plan.' },
        ],
      },
      {
        title: 'Réseau',
        body: 'Construisez aux côtés d’un monde de makers.',
        items: [
          { icon: 'users', title: 'Communauté', body: 'Suivez des makers, publiez dans le fil et partagez des widgets que d’autres ajoutent directement à leur bibliothèque — en direct dès aujourd’hui, avec des profils publics de maker.' },
          { icon: 'store', title: 'Marketplace', body: 'Publiez et installez widgets, thèmes, écrans et bots prêts à l’emploi — en direct dès aujourd’hui, avec une lignée qui crédite chaque remake. L’achat et la vente arrivent ensuite.' },
          { icon: 'signal', title: 'Signaux de stratégie', body: 'Publiez des historiques audités, abonnez-vous aux signaux de confiance et gagnez sur les stratégies que vous exécutez. Bientôt.' },
          { icon: 'trophy', title: 'Réputation et médailles', body: 'Gagnez des points de réputation en construisant et partageant, débloquez des succès par paliers et des médailles rares — en direct dès aujourd’hui. Les crédits de récompense arrivent ensuite.' },
        ],
      },
      {
        title: 'Posséder',
        body: 'Sécurisé par conception, à vous pour toujours.',
        items: [
          { icon: 'lock', title: 'Limites d’espace', body: 'Les widgets générés tournent en sandbox, avec un accès connecteur limité aux services et données dont ils ont besoin.' },
          { icon: 'sync', title: 'Sync cloud', body: 'Synchronisez espaces, widgets et réglages sur tous vos appareils — avec un coffre d’identifiants chiffré.' },
          { icon: 'library', title: 'Bibliothèque réutilisable', body: 'Enregistrez n’importe quel widget dans votre bibliothèque et déposez-le sur n’importe quel tableau de bord en un clic.' },
        ],
      },
    ],
  },
  plansPage: {
    meta: {
      title: 'Plans — Nexow',
      description:
        'Commencez gratuitement avec Nexow. Construisez avec des crédits de départ et la sync, puis montez en gamme quand vos espaces de widgets ont besoin de plus de capacité.',
    },
    hero: {
      badge: 'Plans',
      title: 'Gratuit pour démarrer. De la place pour grandir.',
      subtitle:
        'Essayez le canvas sans réfléchir aux plans. Free inclut les crédits de départ, la sync et l’espace principal. Les plans payants ajoutent de la capacité ensuite.',
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
      { q: 'Nexow est-il vraiment gratuit ?', a: 'Oui. Free inclut le canvas de widgets, la bibliothèque réutilisable, la sync cloud et 10 000 crédits IA de départ. Les plans payants ajoutent plus de crédits mensuels et des limites plus hautes quand votre espace en a besoin.' },
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
        'Nexow est un canvas de widgets parti des desks de trading et devenu une façon de créer n’importe quel espace utile en langage naturel.',
    },
    hero: {
      badge: 'À propos',
      title: 'Des desks de trading à tout espace de widgets',
      subtitle:
        'Nous avons commencé là où les dashboards sont les plus difficiles : données live, décisions rapides et workflows désordonnés. La même idée fonctionne maintenant pour moodboards, planners, jeux, outils sociaux et dashboards de marché.',
    },
    missionTitle: 'Pourquoi nous construisons Nexow',
    mission: [
      'Chaque trader et analyste finit par reconstruire à la main les mêmes graphiques, tableaux et moniteurs — en collant des APIs, en gérant des websockets et en luttant avec la mise en page. Les outils sont puissants mais lents, et les bons sont enfermés derrière des plateformes lourdes.',
      'Nexow inverse cela. Vous décrivez ce que vous voulez voir et une IA écrit un widget réel et fonctionnel — sandboxé, versionné et connecté aux données en direct des venues que vous utilisez déjà. Le tableau de bord s’assemble tout seul, et vous l’affinez en langage naturel.',
      'Nous le construisons avec des limites de propriété claires : vos widgets sont versionnés, portables et rattachés à leur espace. À mesure que nous ajoutons workflows cloud, bibliothèques partagées et communauté, ce principe reste fixe — vos outils, vos données, votre contrôle.',
    ],
    valuesTitle: 'Ce que nous valorisons',
    values: [
      { icon: 'lock', title: 'Limites claires', body: 'Widgets sandboxés, accès connecteurs limités et contrôle au niveau de l’espace sur ce que vous construisez.' },
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
      description: 'Découvrez comment Nexow traite les données, les clés et les connexions.',
    },
    updated: 'Dernière mise à jour : 1 juillet 2026',
    sections: [
      { h: 'Données d’espace', p: 'Nexow stocke les données nécessaires au fonctionnement de l’app : widgets, versions, logs, éléments de bibliothèque, réglages du compte, état de sync et métadonnées associées.' },
      { h: 'Widgets générés', p: 'Le code généré s’exécute dans un runtime sandboxé. Prompts, code généré et historique de versions restent attachés à l’espace auquel ils appartiennent.' },
      { h: 'Connexions aux données de marché', p: 'Lorsque le venue le permet, Nexow s’y connecte directement depuis votre navigateur, et vos identifiants du venue ne servent qu’à communiquer avec ce venue. Certains venues nécessitent un proxy léger ; dans ces cas, seules les données nécessaires à la requête passent par ce proxy.' },
      { h: 'Ce site web', p: 'Ce site marketing est un site statique. Nous gardons l’analytique minimale et respectueuse de la vie privée, et nous ne vendons pas de données personnelles. Les liens sortants (comme l’app) sont clairement indiqués.' },
      { h: 'Contact', p: 'Des questions sur la confidentialité ? Écrivez à hello@nexow.ai.' },
    ],
  },
};
