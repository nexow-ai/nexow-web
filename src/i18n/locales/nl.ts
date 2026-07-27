import type { SiteContent } from '../content';

export const nl: SiteContent = {
  nav: {
    links: [
      { label: 'Functies', href: '/features' },
      { label: 'Connectoren', href: '/connectors' },
      { label: 'Plannen', href: '/plans' },
      { label: 'Blog', href: '/blog' },
      { label: 'Over', href: '/about' },
    ],
    launch: 'App starten',
    menu: 'Menu openen',
    close: 'Menu sluiten',
  },
  footer: {
    tagline: 'Beschrijf een widget. Nexow bouwt het, verbindt het met live marktgegevens, en zet het op je canvas.',
    columns: [
      {
        title: 'Product',
        links: [
          { label: 'Functies', href: '/features' },
          { label: 'Plannen', href: '/plans' },
          { label: 'Connectoren', href: '/connectors' },
          { label: 'Automatisering', href: '/#automate' },
          { label: 'Gemeenschap', href: '/#network' },
          { label: 'Routekaart', href: '/#roadmap' },
        ],
      },
      {
        title: 'Bedrijf',
        links: [
          { label: 'Over', href: '/about' },
          { label: 'Blog', href: '/blog' },
        ],
      },
      {
        title: 'Bronnen',
        links: [
          { label: 'App starten', href: 'https://x.nexow.ai' },
          { label: 'Privacy', href: '/privacy' },
        ],
      },
    ],
    rights: 'Alle rechten voorbehouden.',
    disclaimer:
      'Nexow is een tooling- en visualisatieplatform. Niets hiervan is financieel advies. Markten dragen risico mee; handel verantwoord.',
    builtWith: 'Gebouwd met Astro. Standaard privé.',
  },
  home: {
    meta: {
      title: 'Nexow — Bouw marktdashboards met AI, in normaal Nederlands',
      description:
        'Nexow is een AI-native werkruimte voor markten. Beschrijf een widget in normaal Nederlands en Nexow bouwt het, verbindt het met live gegevens van 28+ connectoren, en voegt cloud bots, AI agenten, een maker-gemeenschap en XP-beloningen toe — standaard privé, gratis om te beginnen.',
    },
    hero: {
      badge: 'Preview nu live',
      titleLead: 'Beschrijf het.',
      titleGradient: 'Nexow bouwt het.',
      titleTail: 'Verhandel het.',
      subtitle:
        'Een AI-native werkruimte voor markten. Vraag om welke widget dan ook in normaal Nederlands — Nexow schrijft de code, voert het veilig uit, en streamt live gegevens naar een canvas met vrije vorm. Automatiseer het met cloud bots en agenten, vervolgens plug in de maker-gemeenschap.',
      ctaPrimary: 'Start de app',
      ctaSecondary: 'Zie hoe het werkt',
      note: 'Geen aanmelding nodig om te proberen · Privé in je browser · Of een gratis account met 10K gereserveerde credits',
      promptExample: 'Toon een candlestick chart van BTC-USD van Coinbase met 20 & 50 EMA en RSI eronder.',
      promptPlaceholder: 'Beschrijf een widget…',
    },
    ticker: { label: 'Live connectoren' },
    trust: 'Één canvas voor elke markt — FX, crypto, aandelen, futures, opties & voorspellingsmarkten.',
    stats: [
      { n: 28, suffix: '+', label: 'live marktgegevenscommunicatoren' },
      { n: 6, label: 'activaklassen op één canvas' },
      { n: 10, suffix: 'K', label: 'gratis AI-credits gereserveerd bij aanmelding' },
      { n: 30, prefix: '<', suffix: 's', label: 'van zin tot werkende widget' },
    ],
    showcase: {
      eyebrow: 'Showcase',
      title: 'Één zin. Elke widget.',
      subtitle:
        'Grafieken, orderboeken, heatmaps, kansen — als je het kunt beschrijven, kan Nexow het bouwen en met live gegevens verbinden.',
      generatedBadge: 'gegenereerd & live',
      tabs: [
        {
          label: 'Kaarsen + indicatoren',
          prompt: 'Candlestick chart van BTC-USD van Coinbase met 20 & 50 EMA en RSI eronder.',
          caption: 'Streamen van Coinbase — EMA\'s en RSI berekend in de widget.',
        },
        {
          label: 'Orderboekdiepte',
          prompt: 'Live orderboekdiepte voor ETH-PERP op Deribit, biedingen vs aanbiedingen.',
          caption: 'Biedingen en aanbiedingen in real-time geaggregeerd uit het Deribit-boek.',
        },
        {
          label: 'Correlatieheatmap',
          prompt: '30-daagse correlatieheatmap voor BTC, ETH, SOL, EURUSD, goud en SPX.',
          caption: 'Cross-asset correlaties opnieuw berekend wanneer nieuwe closes arriveren.',
        },
        {
          label: 'Voorspellingsmarkten',
          prompt: 'Kalshi kansen op een Fed-renteverlaging bij de volgende FOMC, met 24u verandering.',
          caption: 'Waarschijnlijkheden van gebeurtenissen rechtstreeks gestreamed uit het Kalshi orderboek.',
        },
      ],
    },
    features: {
      eyebrow: 'Waarom Nexow',
      title: 'Het dashboard bouwt zichzelf',
      subtitle:
        'Stop met het handmatig verbinden van grafieken. Beschrijf wat je wilt zien en Nexow genereert een echt, werkende widget — vervolgens laat het je deze in normaal Nederlands verfijnen.',
      items: [
        {
          icon: 'sparkles',
          title: 'Widgets in normaal Nederlands',
          body: 'Beschrijf een grafiek, tabel, heatmap of signaal in gewone woorden. Nexow schrijft de widgetbron met Claude en voert deze live uit — geen boilerplate, geen configuratiebestanden.',
        },
        {
          icon: 'shield',
          title: 'Sandbox & veilig',
          body: 'Elke widget wordt uitgevoerd in een geïsoleerde iframe met een strikte grens. Gegenereerde code kan weergeven en gegevens ophalen, maar raakt nooit uw werkruimte of andere widgets aan.',
        },
        {
          icon: 'plug',
          title: '28+ live gegevensverbindingen',
          body: 'Pluggable marktgegevensleveranciers — OANDA, Binance, Coinbase, Kraken, Polygon, Interactive Brokers, Kalshi, Polymarket en meer — sturen real-time gegevens naar uw widgets.',
        },
        {
          icon: 'layers',
          title: 'Canvas met vrije vorm',
          body: 'Sleep, verander de grootte van en rangschik widgets op een canvas met vrije vorm met werkruimten en schermen voor FX, crypto, onderzoek — wat je ook verhandelt. Groepeer widgets en pipe live gegevens ertussen met Koppelingen.',
        },
        {
          icon: 'lock',
          title: 'Standaard privé',
          body: 'Voer volledig lokaal uit: voeg uw eigen Anthropic-sleutel toe en codegeneratie gebeurt in uw browser. Widgets, versies en logs blijven in IndexedDB — niets wordt naar onze servers verzonden.',
        },
        {
          icon: 'history',
          title: 'Versies & widgetbibliotheek',
          body: 'Elke bewerking is versioned met logs die je kunt inspecteren. Sla widgets op in een persoonlijke bibliotheek en hergebruik ze in één klik in alle dashboards.',
        },
      ],
    },
    how: {
      eyebrow: 'Hoe het werkt',
      title: 'Van zin tot live widget in seconden',
      subtitle: 'Drie stappen. Geen configuratie, geen bouwstap, geen kleeflood.',
      steps: [
        {
          n: '01',
          title: 'Beschrijf',
          body: 'Typ wat je wilt in normaal Nederlands — "een orderboekdieptegrafiek voor ETH-PERP op Deribit".',
        },
        {
          n: '02',
          title: 'Genereer',
          body: 'Nexow schrijft de widgetbron met Claude en voert deze uit in een sandbox iframe, verbonden met de connector die je hebt gekozen.',
        },
        {
          n: '03',
          title: 'Verfijn & rangschik',
          body: 'Verfijn het in normaal Nederlands, version het, zet het op je canvas naast alles anders dat je bekijkt.',
        },
      ],
    },
    automate: {
      eyebrow: 'Automatisering',
      title: 'Zet je werkruimte op autopilot',
      subtitle:
        'Widgets tonen je de markt. Bots, agenten en Copilot handelen ernaar — cloud automatisering en AI die blijft werken wanneer je tab is gesloten.',
      liveLabel: 'Live',
      soonLabel: 'Komt binnenkort',
      items: [
        {
          icon: 'bot',
          title: 'Bots',
          body: 'Cloud automatisering die je gegevens bewaakt en signalen en waarschuwingen naar je widgets stuurt. Beschrijf een waarschuwing in normaal Nederlands — "zeg me wanneer BTC 5% in een uur daalt" — of verbind het visueel met drempels, % verandering, MA-overgangen en samenvattingen. Bots kunnen zelfs een verbonden broker-account controleren op nieuwe trades.',
          status: 'live',
        },
        {
          icon: 'cpu',
          title: 'Agenten',
          body: 'AI-agenten met een echt harnas — model, geheugen, vaardigheden, tools, kennis en triggers. Geef een agent een taak en laat hem kijken, redeneren en handelen — bouw de jouwe in de visuele harnas builder en implementeer hem naar de cloud, met tool-rechten, geheugen tussen runs en een live rungeschiedenis.',
          status: 'live',
        },
        {
          icon: 'chat',
          title: 'Copilot',
          body: 'Een AI-assistent voor je hele werkruimte. Chat in parallelle tabs, laat hem widgets bouwen op de achtergrond en je canvas ordenen, en vraag — "leg deze grafiek uit", "vat dit samen", "wat moet ik volgen?"',
          status: 'live',
        },
      ],
      harnessChips: ['model', 'geheugen', 'vaardigheden', 'tools', 'kennis', 'triggers'],
      copilotPrompts: ['Leg deze grafiek uit', 'Vat deze gegevens samen', 'Wat moet ik volgen?'],
    },
    connectors: {
      eyebrow: 'Connectoren',
      title: 'Plug in elke markt',
      subtitle:
        'Pluggable connectoren streamen live prijzen, orderboeken en referentiegegevens rechtstreeks in je widgets — over FX, crypto, aandelen, futures, opties, voorspellingsmarkten, databases en social feeds.',
      note: '28 connectoren zijn vandaag live en 56 zitten in de catalogus — makelaars, beurzen, gegevensleveranciers, databases en sociale media. Velen streamen rechtstreeks vanuit je browser; de rest routeren via een dun proxy.',
      count: 28,
      countLabel: 'live connectoren',
      groups: {
        fx: 'FX',
        crypto: 'Crypto',
        equities: 'Aandelen & futures',
        prediction: 'Voorspellingsmarkten',
        data: 'Gegevens & databases',
        socials: 'Sociaal',
      },
    },
    network: {
      eyebrow: 'Het netwerk',
      title: 'Bouw alleen. Of plug in het netwerk.',
      subtitle:
        'Blijf volledig lokaal en privé, of maak een gratis account aan en sluit je aan bij een wereld van makers die dashboards bouwen, delen en verhandelen naast je.',
      liveLabel: 'Live',
      soonLabel: 'Komt binnenkort',
      items: [
        {
          icon: 'users',
          title: 'Gemeenschap',
          body: 'Ontdek en volg makers, like en reageer in een sociale feed voor marktbouwers, en deel widgets die anderen rechtstreeks aan hun bibliotheek kunnen toevoegen — met openbare maker-profielen.',
          status: 'live',
        },
        {
          icon: 'store',
          title: 'Marketplace',
          body: 'Publiceer widgets, thema\'s, schermen en bots uit je bibliotheek, en installeer wat anderen delen — met herkomst die elke remake crediteert. Kopen en verkopen komt daarna.',
          status: 'live',
        },
        {
          icon: 'signal',
          title: 'Strategische signalen',
          body: 'Publiceer geaudeerde track records, abonneer je op signalen van makers die je vertrouwt, en verdien aan de strategieën die je uitvoert.',
          status: 'soon',
        },
        {
          icon: 'trophy',
          title: 'Reputatie & medailles',
          body: 'Elke widget, bot en share verdient reputatie — punten, gelaagde achievements, zeldzame medailles en levels op je openbare profiel. Ze omzetten in beloningscredits komt daarna.',
          status: 'live',
        },
      ],
      accountBadge: 'Gratis account',
      accountTitle: 'Één gratis account ontgrendelt het netwerk',
      accountBody: 'Geen creditcard. Blijf bouwen wanneer je wilt — een account is altijd optioneel.',
      accountPoints: [
        '10.000 gratis AI-credits gereserveerd bij aanmelding',
        'Cloud-synchronisatie over apparaten voor werkruimten & widgets',
        'Gemeenschap, marketplace & widgetbibliotheek',
        'Reputatiepunten, medailles & levels terwijl je bouwt en deelt',
      ],
      accountCta: 'Maak je gratis account aan',
    },
    plans: {
      eyebrow: 'Plannen',
      title: 'Gratis beginnen. Groei wanneer je klaar bent.',
      subtitle:
        'Bouw gratis voor altijd — lokaal met je eigen sleutel, of met 10.000 gereserveerde credits op een gratis account. Upgrade voor meer credits, bots en agenten.',
      cta: 'Vergelijk alle plannen',
    },
    privacy: {
      eyebrow: 'Privé naar ontwerp',
      title: 'Je sleutels. Je gegevens. Je machine.',
      body: 'Nexow draait standaard volledig lokaal. In privé-modus voeg je je eigen Anthropic API-sleutel toe en widget-generatie gebeurt volledig in je browser — niets wordt naar onze servers verzonden, dus een ongeauthenticeerde sessie kost ons niets en lekt niets.',
      points: [
        'Bring-your-own-key codegen draait client-side',
        'Widgets, versies & logs blijven in je browser (IndexedDB)',
        'Direct-to-venue-verbindingen houden referenties buiten onze infrastructuur',
        'Geen account nodig om te beginnen met bouwen',
      ],
      cta: 'Lees de lokale-modus architectuur',
    },
    roadmap: {
      eyebrow: 'Routekaart',
      title: 'Dit is de preview. Hier is wat er volgt.',
      subtitle:
        'Nexow heeft het canvas, codegen, cloud bots, agenten, Copilot, de marketplace, accounts en de gemeenschap gelanceerd. Het bredere app-canvas blijft landen via de bouwstenen hieronder.',
      shipped: 'Gelanceerd',
      soon: 'Komt binnenkort',
      items: [
        { status: 'shipped', title: 'AI widget codegen', body: 'Widgets in normaal Nederlands draaiend in sandbox op het canvas.' },
        { status: 'shipped', title: '28+ marktgegevenscommunicatoren', body: 'Makelaars, beurzen, gegevensleveranciers, databases en social media streamen live.' },
        { status: 'shipped', title: 'Cloud bots & waarschuwingen', body: 'Automatisering die je gegevens bewaakt en signalen naar je widgets stuurt, tab gesloten.' },
        { status: 'shipped', title: 'Accounts & cloud sync', body: 'Gratis accounts met werkruimten gesynchroniseerd op elk apparaat — 10K credits gereserveerd voor platformlancering.' },
        { status: 'shipped', title: 'Community feed & profielen', body: 'Volg makers, deel widgets naar de feed, en claim je openbare @handle.' },
        { status: 'shipped', title: 'Agenten & Copilot', body: 'Cloud-agenten met een volledig harnas, geïmplementeerd met tool-rechten en rungeschiedenis — plus een Copilot die je werkruimte bouwt en ordent.' },
        { status: 'shipped', title: 'Marketplace', body: 'Publiceer en installeer widgets, thema\'s, schermen en bots — met herkomst die elke remake crediteert.' },
        { status: 'shipped', title: 'Reputatie & medailles', body: 'Punten, gelaagde achievements, zeldzame medailles en levels voor wat je bouwt en deelt.' },
        { status: 'soon', title: 'Premium widgets & signalen', body: 'Publiceer premium widgets en strategische signalen, laat anderen zich abonneren, en verdien aan wat je uitvoert.' },
        { status: 'soon', title: 'Betaalde plannen & beloningscredits', body: 'Supporter- en Sponsor-checkout, platformcredits, en reputatie omzetten in beloningscredits.' },
      ],
    },
    faq: {
      eyebrow: 'Veelgestelde vragen',
      title: 'Vragen, beantwoord',
      subtitle: 'Alles wat je moet weten voordat je de app start.',
      items: [
        {
          q: 'Wat is Nexow?',
          a: 'Nexow is een AI-native werkruimte voor markten. Je beschrijft een widget — een grafiek, tabel, heatmap of signaal — in normaal Nederlands, en Nexow genereert de broncode, voert deze uit in een sandbox iframe, en streamt live marktgegevens naar een canvas met vrije vorm. Daarin voegt het cloud bots, AI-agenten, een Copilot en een maker-gemeenschap toe.',
        },
        {
          q: 'Moet ik weten hoe ik moet coderen?',
          a: 'Nee. Je beschrijft wat je wilt in normaal Nederlands en Nexow schrijft en voert de widget voor je uit. Als je code leest, zijn de bron en versiegeschiedenis van elke widget beschikbaar om te inspecteren en te verfijnen.',
        },
        {
          q: 'Zijn mijn gegevens privé? Heb ik een account nodig?',
          a: 'Geen account nodig. Nexow draait standaard volledig lokaal: voeg je eigen Anthropic API-sleutel toe en widget-generatie gebeurt in je browser, met widgets, versies en logs opgeslagen in IndexedDB. Een gratis account is altijd optioneel — het voegt AI-credits, cloud-synchronisatie en de gemeenschap toe, maar je kunt 100% lokaal blijven bouwen.',
        },
        {
          q: 'Welke markten en venues worden ondersteund?',
          a: 'Nexow heeft 28 live connectoren (56 in de catalogus) over FX (OANDA, LMAX, FXCM), crypto (Binance, Coinbase, Kraken, Deribit, BitMEX), aandelen en futures (Interactive Brokers, Alpaca, TradeStation, Polygon, Rithmic, IQFeed), voorspellingsmarkten (Kalshi, Polymarket), gegevensleveranciers en databases (Alpha Vantage, Intrinio, Trading Economics, Postgres, ClickHouse, Qdrant) en social feeds (X, YouTube, Discord, Telegram, Spotify).',
        },
        {
          q: 'Wat zijn bots en agenten?',
          a: 'Bots zijn cloud-automatisering die je gegevens bewaken en signalen en waarschuwingen naar je widgets sturen, zelfs wanneer je tab is gesloten — beschrijf een waarschuwing in normaal Nederlands of verbind het visueel met drempels, % verandering, voortschrijdend-gemiddelde overgangen en nieuwe trades in een verbonden broker-account. Agenten zijn AI met een volledig harnas (model, geheugen, vaardigheden, tools, kennis, triggers) — ontwerp je vandaag in de visuele harnas builder; cloud deployment en de Copilot-assistent komen binnenkort.',
        },
        {
          q: 'Is er een gemeenschap en marketplace?',
          a: 'De gemeenschap is live — maak een gratis account aan, claim je openbare @handle, volg makers, post naar de feed, en deel widgets die anderen rechtstreeks aan hun bibliotheek kunnen toevoegen. Een marketplace voor het kopen en verkopen van widgets en geaudeerde strategische signalen waar je op kunt verdienen, komen volgende.',
        },
        {
          q: 'Wat zijn XP en beloningen?',
          a: 'Nexow voegt een gamified laag toe aan accounts: widgets bouwen, bots uitvoeren en delen met de gemeenschap verdient XP en ontgrendelt badges voor achievements — en achievements zetten zich om in beloningscredits die je kunt gebruiken voor AI-gebruik. Het wordt binnenkort uitgerold; vroege accounts zijn eerst.',
        },
        {
          q: 'Hoeveel kost het?',
          a: 'Gratis voor altijd om te bouwen — lokaal met je eigen sleutel, of met 10.000 AI-credits gereserveerd op een gratis account. Betaalde plannen (Supporter en Sponsor) voegen maandelijkse credits en hogere bot- en agent-limieten toe, en Partner is voor teams die private infrastructuur nodig hebben. Betaalde checkout komt binnenkort; zie de planpagina.',
        },
        {
          q: 'Welk AI-model drijft Nexow aan?',
          a: 'Nexow genereert met Anthropic Claude-modellen via de Anthropic SDK — Claude Opus 4.8 standaard, met Sonnet 4.6 en Haiku 4.5 voor snellere, goedkopere generatie. In privé-modus voer je je eigen sleutel in, dus je behoudt volledige controle over gebruik en kosten.',
        },
      ],
    },
    cta: {
      title: 'Bouw je eerste widget in de volgende minuut',
      subtitle: 'De preview is live en gratis om te proberen. Geen aanmelding, geen setup — beschrijf gewoon wat je wilt zien.',
      primary: 'Start Nexow',
      secondary: 'Verken functies',
    },
  },
  features: {
    meta: {
      title: 'Functies — Nexow',
      description:
        'Gegenereerde widgets in normaal Nederlands, een sandbox runtime, een canvas met vrije vorm met groepen en koppelingen, 28+ marktgegevenscommunicatoren, cloud bots en agenten, een maker-gemeenschap met XP-beloningen, privé lokale modus en een versioned widgetbibliotheek. Verken alles wat Nexow doet.',
    },
    hero: {
      badge: 'Functies',
      title: 'Alles wat je nodig hebt om marktdashboards met woorden te bouwen',
      subtitle:
        'Nexow zet een zin om in een werkende, data-verbonden widget — en geeft je vervolgens het canvas, de connectoren, cloud automatisering en netwerk om een echte werkstatie te bouwen.',
    },
    groups: [
      {
        title: 'Genereer',
        body: 'Beschrijf wat je wilt zien; Nexow schrijft en voert het uit.',
        items: [
          { icon: 'sparkles', title: 'Gegenereerde code in normaal Nederlands', body: 'Beschrijf een widget en Nexow genereert de volledige bron met Claude — grafieken, tabellen, heatmaps, orderboeken, aangepaste signalen.' },
          { icon: 'wand', title: 'Verfijn door gesprek', body: 'Wijzig alles door te vragen. "Voeg een 200 EMA toe", "schakel naar logschaal", "kleur op financieringstarief" — Nexow bewerkt de widget ter plekke.' },
          { icon: 'history', title: 'Versioned & inspecteerbaar', body: 'Elke generatie is versioned met logs. Rol terug, vergelijk, en lees de exacte bron die in elke widget wordt uitgevoerd.' },
        ],
      },
      {
        title: 'Voer uit',
        body: 'Een veilige, snelle runtime voor gegenereerde code.',
        items: [
          { icon: 'shield', title: 'Sandbox iframes', body: 'Widgets worden uitgevoerd in geïsoleerde iframes met een strikte grens — gegenereerde code kan weergeven en ophalen, maar kan je werkruimte of andere widgets niet aanraken.' },
          { icon: 'bolt', title: 'Live, streaming gegevens', body: 'Widgets abonneren zich op real-time prijzen, orderboeken en referentiegegevens met minimale latentie.' },
          { icon: 'layers', title: 'Canvas met vrije vorm & werkruimten', body: 'Rangschik widgets op een canvas met vrije vorm, groepeer ze in werkruimten en schermen, en schakel onmiddellijk tussen setups.' },
          { icon: 'link', title: 'Groepen & Koppelingen', body: 'Bundel widgets in groepen met mozaïek of tab-indelingen, en verbind widgets samen met Koppelingen — eenweg of tweeweg buizen die gegevens van de ene widget naar de andere streamen.' },
        ],
      },
      {
        title: 'Verbind',
        body: 'Pluggable gegevens van de venues waar je eigenlijk gebruikt.',
        items: [
          { icon: 'plug', title: '28+ marktgegevenscommunicatoren', body: 'FX, crypto, aandelen, futures, opties en voorspellingsmarkten — OANDA, Binance, Coinbase, IBKR, Polygon, Kalshi, Polymarket en meer.' },
          { icon: 'globe', title: 'Browser-direct waar mogelijk', body: 'Waar CORS toestaat, draaien geverifieerde venue-oproepen rechtstreeks vanuit je browser en passeren onze proxy volledig.' },
          { icon: 'database', title: 'Databases & sociaal ook', body: 'Wijs widgets naar Postgres, ClickHouse of Qdrant, of trek uit X, YouTube, Discord en Telegram naast live markten.' },
        ],
      },
      {
        title: 'Automatiseer',
        body: 'Cloud automatisering en AI die handelt terwijl je weg bent.',
        items: [
          { icon: 'bot', title: 'Cloud bots', body: 'Beschrijf een waarschuwing of verbind deze visueel — drempels, % verandering, MA-overgangen, samenvattingen, of nieuwe trades in een verbonden broker-account. Bots draaien op een cloud-hartslag en duwen signalen naar je widgets, tab gesloten.' },
          { icon: 'cpu', title: 'AI-agenten', body: 'Agenten met een volledig harnas — model, geheugen, vaardigheden, tools, kennis en triggers. Ontwerp de jouwe in de visuele harnas builder en implementeer hem naar de cloud met tool-rechten en een live rungeschiedenis.' },
          { icon: 'chat', title: 'Copilot', body: 'Een assistent voor je werkruimte: voeg een screenshot of gegevens van een widget toe en vraag het uit te leggen, samen te vatten of voor te stellen wat je volgt — in parallelle gesprekken die op de achtergrond blijven bouwen.' },
        ],
      },
      {
        title: 'Netwerk',
        body: 'Bouw naast een wereld van makers.',
        items: [
          { icon: 'users', title: 'Gemeenschap', body: 'Volg makers, post naar de feed, en deel widgets die anderen rechtstreeks aan hun bibliotheek kunnen toevoegen — vandaag live, met openbare maker-profielen.' },
          { icon: 'store', title: 'Marketplace', body: 'Publiceer en installeer kant-en-klare widgets, thema\'s, schermen en bots — vandaag live, met herkomst die elke remake crediteert. Kopen en verkopen komt daarna.' },
          { icon: 'signal', title: 'Strategische signalen', body: 'Publiceer geaudeerde track records, abonneer je op signalen die je vertrouwt, en verdien aan de strategieën die je uitvoert. Komt binnenkort.' },
          { icon: 'trophy', title: 'Reputatie & medailles', body: 'Verdien reputatiepunten voor bouwen en delen, ontgrendel gelaagde achievements en zeldzame medailles — vandaag live. Beloningscredits komen daarna.' },
        ],
      },
      {
        title: 'Eigendom',
        body: 'Privé standaard, van jou om te houden.',
        items: [
          { icon: 'lock', title: 'Privé lokale modus', body: 'Voeg je eigen Anthropic-sleutel in en genereer widgets aan de client-kant. Niets wordt naar onze servers verzonden — geen account nodig.' },
          { icon: 'sync', title: 'Optionele cloud sync', body: 'Maak een gratis account aan om werkruimten, widgets en instellingen over elk apparaat te synchroniseren — met een versleutelde referentie-kluis.' },
          { icon: 'library', title: 'Herbruikbare bibliotheek', body: 'Sla elke widget op in je bibliotheek en zet deze in één klik in elk dashboard.' },
        ],
      },
    ],
  },
  plansPage: {
    meta: {
      title: 'Plannen — Nexow',
      description:
        'Gratis voor altijd om te bouwen — lokaal met je eigen sleutel, of met 10.000 AI-credits gereserveerd op een gratis account. Vergelijk Gratis, Supporter, Sponsor en Partner voor credits, bots, agenten en aanpassingen.',
    },
    hero: {
      badge: 'Plannen',
      title: 'Gratis starten. Ruimte voor groei.',
      subtitle:
        'Bouw gratis — voer lokaal uit met je eigen sleutel, of meld je aan om 10.000 AI-credits te reserveren. Upgrade wanneer je meer capaciteit, automatisering en pooling nodig hebt.',
    },
    comingSoon:
      'Supporter & Sponsor checkout komt binnenkort, en platformcredits worden ermee gelanceerd. Iedereen is vandaag Gratis — maak een account aan om eerst te zijn wanneer facturering opent.',
    highlights: {
      title: 'Wat schaalt met je plan',
      items: [
        {
          icon: 'coins',
          title: 'AI-credits',
          body: 'Energiewidget-generatie, Copilot-antwoorden en bot-logica. Gratis reserveert 10K om mee te beginnen; betaalde plannen verversen maandelijks.',
        },
        {
          icon: 'bot',
          title: 'Bots & agenten',
          body: 'Bots bewaken markten en triggeren acties. Agenten voeren workflows in meerdere stappen uit. Hogere plannen verhogen gelijktijdige limieten.',
        },
        {
          icon: 'sparkles',
          title: 'Aanpassing',
          body: 'Accentkleuren, logo\'s en premium UI ontgrendelen naarmate je upgrade — maak Nexow van jezelf.',
        },
      ],
    },
    included: {
      title: 'Inbegrepen in elk plan',
      items: [
        'Onbeperkte schermen, werkruimten & widgets',
        '28+ live marktgegevenscommunicatoren',
        'Sandbox widget runtime',
        'Globale Copilot (komt binnenkort)',
        'Toegang tot gemeenschap & marketplace',
      ],
    },
    billing: { monthly: 'Maandelijks', yearly: 'Jaarlijks', save: '2 maanden gratis' },
    tiers: [
      {
        name: 'Gratis',
        tagline: 'Alles wat je nodig hebt om te bouwen.',
        priceMonthly: '$0',
        priceYearly: '$0',
        cadence: 'altijd',
        stats: ['10K credits', '10 bots', '3 agenten'],
        cta: 'Gratis aan de slag',
        ctaHref: 'https://x.nexow.ai',
        features: [
          '10.000 AI-credits gereserveerd bij aanmelding',
          'Onbeperkte schermen, werkruimten & widgets',
          'Onbeperkte browserverbindingen',
          'Cloud-synchronisatie over apparaten',
          'Globale Copilot (komt binnenkort)',
          'Toegang tot gemeenschap & marketplace',
        ],
      },
      {
        name: 'Supporter',
        tagline: 'Voor makers die meer ruimte willen.',
        priceMonthly: '$9.99',
        priceYearly: '$8.33',
        billedYearly: '$99.90 jaarlijks gefactureerd',
        cadence: '/mnd',
        badge: 'Komt binnenkort',
        stats: ['50K credits/mnd', '30 bots', '10 agenten'],
        note: 'Alles in Gratis, plus:',
        cta: 'Word Supporter',
        ctaHref: 'https://x.nexow.ai',
        features: [
          '50.000 credits elke maand',
          'Tot 30 bots & 10 agenten',
          'Één Copilot per werkruimte',
          'Tweede accentkleur (gradient)',
          'Exclusieve UI & verschijningsopties',
        ],
      },
      {
        name: 'Sponsor',
        tagline: 'Voor power users die pro gaan.',
        priceMonthly: '$69.99',
        priceYearly: '$58.33',
        billedYearly: '$699.90 jaarlijks gefactureerd',
        cadence: '/mnd',
        badge: 'Beste rendement',
        stats: ['800K credits/mnd', '300 bots', '100 agenten'],
        note: 'Alles in Supporter, plus:',
        cta: 'Word Sponsor',
        ctaHref: 'https://x.nexow.ai',
        featured: true,
        features: [
          '800.000 credits elke maand',
          'Tot 300 bots & 100 agenten',
          'Aangepaste verbindingen (Connector Builder)',
          'Één Copilot per scherm',
          'Upload je eigen logo',
          'Premium UI-aanpassingen',
        ],
      },
      {
        name: 'Partner',
        tagline: 'Voor teams die alles nodig hebben.',
        priceMonthly: 'Aangepast',
        priceYearly: 'Aangepast',
        cadence: '',
        stats: ['Private infra', 'White-glove', 'SLA'],
        note: 'Alles in Sponsor, plus:',
        cta: 'Neem contact op',
        ctaHref: 'mailto:partners@nexow.ai',
        features: [
          'Private infrastructuur',
          'White-glove setup',
          'Eerste klasse aangepaste ontwikkeling',
          'Bespoke branding & personalisatie',
          'Dedicated support',
        ],
      },
    ],
    faqTitle: 'Planvragen',
    faq: [
      { q: 'Is Nexow echt gratis?', a: 'Ja. Je kunt voor altijd gratis bouwen — voer volledig lokaal uit met je eigen Anthropic-sleutel (je betaalt alleen je eigen API-gebruik), of maak een gratis account aan dat 10.000 AI-credits reserveert voor wanneer platformmodus opent, dus geen eigen sleutel nodig.' },
      { q: 'Wat zijn credits?', a: 'Credits meten AI-gebruik — het genereren van widgets, links, bots en Copilot-antwoorden. Het gratis account reserveert 10.000 om mee te beginnen, en betaalde plannen geven een maandelijks budget (50K op Supporter, 800K op Sponsor). Credit-meting gaat live met platformmodus, en je kunt altijd meer kopen.' },
      { q: 'Wanneer worden betaalde plannen gelanceerd?', a: 'Supporter en Sponsor zijn gedefinieerd en weergegeven in de app, maar betaalde checkout komt binnenkort. Iedereen is vandaag Gratis — maak een account aan om eerst te zijn wanneer facturering opent.' },
      { q: 'Kan ik jaarlijks betalen?', a: 'Ja. Jaarlijkse facturering geeft je twee maanden gratis tegenover maandelijks betalen. Je kunt op elk moment tussen maandelijks en jaarlijks schakelen.' },
    ],
  },
  connectorsPage: {
    meta: {
      title: 'Connectoren — Nexow',
      description:
        'Blader door elke Nexow-connector — 28 live en 56 in de catalogus. Makelaars, beurzen, DEX\'s, voorspellingsmarkten, gegevensleveranciers, databases en social feeds. Zoeken, filteren en verbinden.',
    },
    hero: {
      badge: 'Connectoren',
      title: 'Elke markt, één canvas',
      subtitle:
        'Zoek in de volledige catalogus van venues waarmee Nexow verbindt — makelaars, beurzen, gegevensleveranciers, databases en sociaal. Live connectoren werken vandaag; de rest komen binnenkort.',
    },
    searchPlaceholder: 'Zoek connectoren…',
    filters: 'Filters',
    all: 'Alles',
    categories: { finance: 'Financiën', data: 'Gegevens', socials: 'Sociaal' },
    status: { all: 'Alles', live: 'Live', soon: 'Binnenkort' },
    kinds: {
      broker: 'Makelaar',
      exchange: 'Beurs',
      prediction: 'Voorspellingsmarkt',
      dex: 'DEX',
      aggregator: 'Aggregator',
      data: 'Marktgegevens',
      sql: 'SQL-database',
      nosql: 'NoSQL-database',
      warehouse: 'Gegevenspakhuis',
      vector: 'Vectordatabase',
      messaging: 'Berichten',
      social: 'Sociaal netwerk',
      video: 'Video',
      community: 'Gemeenschap',
      music: 'Muziek',
    },
    assets: {
      equities: 'Aandelen',
      indices: 'Indices',
      fixed_income: 'Vaste inkomsten',
      fx: 'FX',
      commodities: 'Grondsoffen',
      crypto: 'Crypto',
      volatility: 'Volatiliteit',
      prediction_markets: 'Voorspelling',
    },
    visit: 'Bezoek site',
    results: '{n} connectoren',
    empty: 'Geen connectoren komen overeen met je zoekopdracht.',
    exploreCta: 'Verken alle connectoren',
    countLive: 'live',
    countCatalog: 'in de catalogus',
  },
  about: {
    meta: {
      title: 'Over — Nexow',
      description:
        'Nexow bouwt een AI-native werkstatie voor markten: beschrijf elke widget in normaal Nederlands en krijg een werkend, data-verbonden dashboard. Standaard privé. Leer over onze missie.',
    },
    hero: {
      badge: 'Over',
      title: 'Een AI-native werkstatie voor markten',
      subtitle:
        'We denken dat het bouwen van een handelsdashboard zo snel zou moeten zijn als het beschrijven. Nexow zet natuurlijke taal om in werkende, data-verbonden widgets — en geeft je controle over je sleutels en gegevens.',
    },
    missionTitle: 'Waarom we Nexow bouwen',
    mission: [
      'Elke trader en analist eindigt met het handmatig herbouwen van dezelfde grafieken, tabellen en monitors — API\'s kleven, websockets worstelen en layout bestrijden. De tools zijn krachtig maar traag, en de goede zijn achter zware platforms vergrendeld.',
      'Nexow draait dat om. Je beschrijft wat je wilt zien en een AI schrijft een echt, werkend widget — sandbox, versioned en verbonden met live gegevens van de venues die je al gebruikt. Het dashboard assembleert zichzelf, en je verfijnt het in normaal Nederlands.',
      'We bouwen het privé-eerst: voer volledig lokaal uit met je eigen sleutel, houd je gegevens in je browser, en verbind rechtstreeks met venues waar mogelijk. Naarmate we trading-agenten, servercomponenten en een communautaire laag toevoegen, blijft dat principe vast — je sleutels, je gegevens, je machine.',
    ],
    valuesTitle: 'Wat we waarderen',
    values: [
      { icon: 'lock', title: 'Standaard privé', body: 'Lokaal-eerste, breng je eigen sleutel mee, geen gegevens die je machine verlaten tenzij je dat kiest.' },
      { icon: 'bolt', title: 'Snelheid naar inzicht', body: 'Van een zin naar een live widget in seconden — het kortste pad tussen een vraag en een grafiek.' },
      { icon: 'shield', title: 'Veilig naar ontwerp', body: 'Gegenereerde code draait in sandbox met een strikte grens, dus kracht betekent nooit risico.' },
      { icon: 'globe', title: 'Open voor elke markt', body: 'FX, crypto, aandelen, futures, opties en voorspellingsmarkten — één canvas voor alles.' },
    ],
    ctaTitle: 'Zie het zelf',
    ctaBody: 'De preview is live. Beschrijf een widget en kijk hoe Nexow het bouwt.',
    cta: 'Start de app',
  },
  blog: {
    meta: {
      title: 'Blog — Nexow',
      description:
        'Gidsen en diepgravingen over het bouwen van marktdashboards met AI, het verbinden van live gegevens en handelsinstrumenten — van het team bij Nexow.',
    },
    title: 'De Nexow blog',
    subtitle: 'AI-native marktgereedschap bouwen — gidsen, diepgravingen en productnotities.',
    latest: 'Laatste',
    readMore: 'Lees artikel',
    backToBlog: 'Terug naar blog',
    published: 'Gepubliceerd',
    updated: 'Bijgewerkt',
    minRead: 'min. lezen',
  },
  notFound: {
    title: 'Deze pagina is van het canvas afgegleden',
    body: 'De pagina die je zoekt bestaat niet — maar je volgende dashboard misschien.',
    cta: 'Terug naar home',
  },
  privacyPage: {
    badge: 'Privacy',
    title: 'Privacybeleid',
    subtitle: 'Hoe Nexow je gegevens behandelt — korte versie: zo min mogelijk.',
    meta: {
      title: 'Privacybeleid — Nexow',
      description: 'Nexow is standaard privé. Lees hoe we gegevens, sleutels en verbindingen beheren.',
    },
    updated: 'Laatst bijgewerkt: 1 juli 2026',
    sections: [
      { h: 'Standaard privé', p: 'Nexow draait standaard volledig lokaal. In privé-modus voer je je eigen Anthropic API-sleutel in en widget-generatie gebeurt volledig in je browser. Je aanwijzingen en gegenereerde code worden van je browser rechtstreeks naar Anthropic verzonden — niet via onze servers.' },
      { h: 'Wat we opslaan', p: 'Je widgets, versies, logs en bibliotheek worden opgeslagen in je browser met IndexedDB. Ze blijven op je apparaat en worden niet naar Nexow geüpload. Het wissen van je browseropslag verwijdert ze permanent.' },
      { h: 'Marktgegevenverbindingen', p: 'Waar een venue het toestaat, verbindt Nexow rechtstreeks vanuit je browser, en je venuegerechtigheden worden alleen gebruikt om met die venue te spreken. Sommige venues vereisen routering via een dun proxy; in die gevallen gaat alleen de gegevens nodig om aan het verzoek te voldoen.' },
      { h: 'Deze website', p: 'Deze marketingsite is een statische site. We houden analytics minimaal en privacy-respecterend, en we verkopen geen persoonlijke gegevens. Uitgaande links (zoals de app) zijn duidelijk gelabeld.' },
      { h: 'Contact', p: 'Vragen over privacy? Email hello@nexow.ai.' },
    ],
  },
};
