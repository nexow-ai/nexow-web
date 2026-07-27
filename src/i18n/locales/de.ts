import type { SiteContent } from '../content';

export const de: SiteContent = {
  nav: {
    links: [
      { label: 'Funktionen', href: '/features' },
      { label: 'Konnektoren', href: '/connectors' },
      { label: 'Tarife', href: '/plans' },
      { label: 'Blog', href: '/blog' },
      { label: 'Über uns', href: '/about' },
    ],
    launch: 'App starten',
    menu: 'Menü öffnen',
    close: 'Menü schließen',
  },
  footer: {
    tagline: 'Beschreibe ein Widget. Nexow baut es, verbindet es mit Live-Marktdaten und legt es auf dein Canvas.',
    columns: [
      {
        title: 'Produkt',
        links: [
          { label: 'Funktionen', href: '/features' },
          { label: 'Tarife', href: '/plans' },
          { label: 'Konnektoren', href: '/connectors' },
          { label: 'Automatisierungen', href: '/#automate' },
          { label: 'Community', href: '/#network' },
          { label: 'Roadmap', href: '/#roadmap' },
        ],
      },
      {
        title: 'Unternehmen',
        links: [
          { label: 'Über uns', href: '/about' },
          { label: 'Blog', href: '/blog' },
        ],
      },
      {
        title: 'Ressourcen',
        links: [
          { label: 'App starten', href: 'https://x.nexow.ai' },
          { label: 'Datenschutz', href: '/privacy' },
        ],
      },
    ],
    rights: 'Alle Rechte vorbehalten.',
    disclaimer:
      'Nexow ist eine Tooling- und Visualisierungsplattform. Nichts hier ist eine Finanzberatung. Märkte bergen Risiken; handle verantwortungsvoll.',
    builtWith: 'Gebaut mit Astro. Standardmäßig privat.',
  },
  home: {
    meta: {
      title: 'Nexow — Baue Markt-Dashboards mit KI, in einfacher Sprache',
      description:
        'Nexow ist ein KI-nativer Workspace für Märkte. Beschreibe ein Widget in einfacher Sprache und Nexow baut es, verbindet es mit Live-Daten aus über 28 Konnektoren und ergänzt Cloud-Bots, KI-Agenten, eine Maker-Community und XP-Belohnungen — standardmäßig privat, kostenlos zum Start.',
    },
    hero: {
      badge: 'Preview jetzt live',
      titleLead: 'Beschreib es.',
      titleGradient: 'Nexow baut es.',
      titleTail: 'Handle es.',
      subtitle:
        'Ein KI-nativer Workspace für Märkte. Frag nach jedem Widget in einfacher Sprache — Nexow schreibt den Code, führt ihn sicher aus und streamt Live-Daten auf ein freies Canvas. Automatisiere es mit Cloud-Bots und Agenten und verbinde dich dann mit einer Community von Makern.',
      ctaPrimary: 'App starten',
      ctaSecondary: 'So funktioniert es',
      note: 'Kein Sign-up zum Ausprobieren · Privat in deinem Browser · Oder ein kostenloses Konto mit 10.000 reservierten Credits',
      promptExample: 'Zeig einen Candlestick-Chart von BTC-USD von Coinbase mit 20er & 50er EMA und RSI darunter.',
      promptPlaceholder: 'Beschreibe ein Widget…',
    },
    ticker: { label: 'Live-Konnektoren' },
    trust: 'Ein Canvas für jeden Markt — FX, Krypto, Aktien, Futures, Optionen & Prognosemärkte.',
    stats: [
      { n: 28, suffix: '+', label: 'Live-Marktdaten-Konnektoren' },
      { n: 6, label: 'Anlageklassen auf einem Canvas' },
      { n: 10, suffix: 'K', label: 'kostenlose KI-Credits bei der Anmeldung reserviert' },
      { n: 30, prefix: '<', suffix: 's', label: 'vom Satz zum laufenden Widget' },
    ],
    showcase: {
      eyebrow: 'Showcase',
      title: 'Ein Satz. Jedes Widget.',
      subtitle:
        'Charts, Orderbücher, Heatmaps, Quoten — wenn du es beschreiben kannst, kann Nexow es bauen und mit Live-Daten verbinden.',
      generatedBadge: 'generiert & live',
      tabs: [
        {
          label: 'Candles + Indikatoren',
          prompt: 'Candlestick-Chart von BTC-USD von Coinbase mit 20er & 50er EMA und RSI darunter.',
          caption: 'Streaming von Coinbase — EMAs und RSI im Widget berechnet.',
        },
        {
          label: 'Orderbuch-Tiefe',
          prompt: 'Live-Orderbuch-Tiefe für ETH-PERP auf Deribit, Bids vs. Asks.',
          caption: 'Bids und Asks in Echtzeit aus dem Deribit-Orderbuch aggregiert.',
        },
        {
          label: 'Korrelations-Heatmap',
          prompt: '30-Tage-Korrelations-Heatmap für BTC, ETH, SOL, EURUSD, gold und SPX.',
          caption: 'Anlageklassenübergreifende Korrelationen bei jedem neuen Close neu berechnet.',
        },
        {
          label: 'Prognosemärkte',
          prompt: 'Kalshi-Quoten für eine Fed-Zinssenkung beim nächsten FOMC, mit 24-Stunden-Veränderung.',
          caption: 'Ereigniswahrscheinlichkeiten direkt aus dem Kalshi-Orderbuch gestreamt.',
        },
      ],
    },
    features: {
      eyebrow: 'Warum Nexow',
      title: 'Das Dashboard baut sich selbst',
      subtitle:
        'Schluss mit dem manuellen Verdrahten von Charts. Beschreibe, was du sehen willst, und Nexow generiert ein echtes, laufendes Widget — das du dann in natürlicher Sprache verfeinerst.',
      items: [
        {
          icon: 'sparkles',
          title: 'Widgets in natürlicher Sprache',
          body: 'Beschreibe einen Chart, eine Tabelle, eine Heatmap oder ein Signal in einfachen Worten. Nexow schreibt den Widget-Quellcode mit Claude und führt ihn live aus — kein Boilerplate, keine Konfigurationsdateien.',
        },
        {
          icon: 'shield',
          title: 'Sandboxed & sicher',
          body: 'Jedes Widget läuft in einem isolierten iframe mit strenger Abgrenzung. Generierter Code kann rendern und Daten abrufen, berührt aber niemals den Rest deines Workspace.',
        },
        {
          icon: 'plug',
          title: 'Über 28 Live-Daten-Konnektoren',
          body: 'Modulare Marktdatenanbieter — OANDA, Binance, Coinbase, Kraken, Polygon, Interactive Brokers, Kalshi, Polymarket und mehr — leiten Echtzeitdaten an deine Widgets.',
        },
        {
          icon: 'layers',
          title: 'Freies Canvas',
          body: 'Ziehe, skaliere und ordne Widgets auf einem freien Canvas mit Workspaces und Screens für FX, Krypto, Research — was auch immer du handelst. Gruppiere Widgets und leite Live-Daten mit Links zwischen ihnen weiter.',
        },
        {
          icon: 'lock',
          title: 'Standardmäßig privat',
          body: 'Laufe vollständig lokal: Füge deinen eigenen Anthropic-Key hinzu und die Codegenerierung passiert in deinem Browser. Widgets, Versionen und Logs bleiben in IndexedDB erhalten — nichts wird an unsere Server gesendet.',
        },
        {
          icon: 'history',
          title: 'Versionen & eine Widget-Bibliothek',
          body: 'Jede Änderung wird versioniert, mit Logs, die du prüfen kannst. Speichere Widgets in einer persönlichen Bibliothek und nutze sie mit einem Klick in mehreren Dashboards wieder.',
        },
      ],
    },
    how: {
      eyebrow: 'So funktioniert es',
      title: 'Vom Satz zum Live-Widget in Sekunden',
      subtitle: 'Drei Schritte. Keine Konfiguration, kein Build-Schritt, kein Glue-Code.',
      steps: [
        {
          n: '01',
          title: 'Beschreiben',
          body: 'Tippe, was du willst, in einfacher Sprache — „ein Orderbuch-Tiefen-Chart für ETH-PERP auf Deribit“.',
        },
        {
          n: '02',
          title: 'Generieren',
          body: 'Nexow schreibt den Quellcode des Widgets mit Claude und führt ihn in einem sandboxed iframe aus, verbunden mit dem Konnektor deiner Wahl.',
        },
        {
          n: '03',
          title: 'Verfeinern & anordnen',
          body: 'Passe es in natürlicher Sprache an, versioniere es und lege es dann auf dein Canvas, neben alles andere, was du beobachtest.',
        },
      ],
    },
    automate: {
      eyebrow: 'Automatisieren',
      title: 'Schalte deinen Workspace auf Autopilot',
      subtitle:
        'Widgets zeigen dir den Markt. Bots, Agenten und Copilot handeln danach — Cloud-Automatisierungen und KI, die weiterarbeiten, wenn dein Tab geschlossen ist.',
      liveLabel: 'Live',
      soonLabel: 'Demnächst',
      items: [
        {
          icon: 'bot',
          title: 'Bots',
          body: 'Cloud-Automatisierungen, die deine Daten beobachten und Signale und Alerts an deine Widgets senden. Beschreibe einen Alert in einfachen Worten — „sag mir, wenn BTC innerhalb einer Stunde um 5 % fällt“ — oder verdrahte ihn visuell mit Schwellenwerten, prozentualer Veränderung, MA-Kreuzungen und Digests. Bots können sogar ein verbundenes Broker-Konto auf neue Trades beobachten.',
          status: 'live',
        },
        {
          icon: 'cpu',
          title: 'Agenten',
          body: 'KI-Agenten mit einem echten Harness — Modell, Speicher, Skills, Tools, Wissen und Trigger. Gib einem Agenten eine Aufgabe und lass ihn beobachten, schlussfolgern und handeln — entwirf deinen heute im visuellen Harness-Builder; Cloud-Deployment kommt demnächst.',
          status: 'soon',
        },
        {
          icon: 'chat',
          title: 'Copilot',
          body: 'Ein KI-Assistent für deinen gesamten Workspace. Hänge den Screenshot eines Widgets oder seine Live-Daten an und frag — „erklär diesen Chart“, „fass das zusammen“, „was sollte ich als Nächstes beobachten?“',
          status: 'soon',
        },
      ],
      harnessChips: ['Modell', 'Speicher', 'Skills', 'Tools', 'Wissen', 'Trigger'],
      copilotPrompts: ['Erklär diesen Chart', 'Fass diese Daten zusammen', 'Was sollte ich als Nächstes beobachten?'],
    },
    connectors: {
      eyebrow: 'Konnektoren',
      title: 'Verbinde dich mit jedem Markt',
      subtitle:
        'Modulare Konnektoren streamen Live-Kurse, Orderbücher und Referenzdaten direkt in deine Widgets — über FX, Krypto, Aktien, Futures, Optionen, Prognosemärkte, Datenbanken und Social-Feeds hinweg.',
      note: '28 Konnektoren sind heute live und 56 stehen im Katalog — Broker, Börsen, Datenanbieter, Datenbanken und Socials. Viele streamen direkt aus deinem Browser; der Rest läuft über einen schlanken Proxy.',
      count: 28,
      countLabel: 'Live-Konnektoren',
      groups: {
        fx: 'FX',
        crypto: 'Krypto',
        equities: 'Aktien & Futures',
        prediction: 'Prognosemärkte',
        data: 'Daten & Datenbanken',
        socials: 'Socials',
      },
    },
    network: {
      eyebrow: 'Das Netzwerk',
      title: 'Baue allein. Oder verbinde dich mit dem Netzwerk.',
      subtitle:
        'Bleib vollständig lokal und privat oder erstelle ein kostenloses Konto und tritt einer Welt von Makern bei, die neben dir Dashboards bauen, teilen und handeln.',
      liveLabel: 'Live',
      soonLabel: 'Demnächst',
      items: [
        {
          icon: 'users',
          title: 'Community',
          body: 'Entdecke und folge Makern, like und kommentiere in einem Social-Feed für Markt-Builder und teile Widgets, die andere direkt in ihre Bibliothek übernehmen können — mit öffentlichen Maker-Profilen.',
          status: 'live',
        },
        {
          icon: 'store',
          title: 'Marketplace',
          body: 'Das Teilen von Widgets ist in der Community bereits live — als Nächstes kommt ein Marketplace, um fertige Widgets zu kaufen und zu verkaufen und mit dem zu verdienen, was du baust.',
          status: 'soon',
        },
        {
          icon: 'signal',
          title: 'Strategie-Signale',
          body: 'Veröffentliche geprüfte Track Records, abonniere Signale von Makern, denen du vertraust, und verdiene mit den Strategien, die du fährst.',
          status: 'soon',
        },
        {
          icon: 'trophy',
          title: 'XP & Belohnungen',
          body: 'Ein spielerisches Konto — jedes Widget, jeder Bot und jedes Teilen bringt XP. Steige auf, schalte Badges für Erfolge frei und verwandle sie in Belohnungs-Credits.',
          status: 'soon',
        },
      ],
      accountBadge: 'Kostenloses Konto',
      accountTitle: 'Ein kostenloses Konto schaltet das Netzwerk frei',
      accountBody: 'Keine Kreditkarte. Baue jederzeit lokal weiter — ein Konto ist immer optional.',
      accountPoints: [
        '10.000 kostenlose KI-Credits bei der Anmeldung reserviert',
        'Geräteübergreifende Cloud-Synchronisierung für Workspaces & Widgets',
        'Community, Marketplace & die Widget-Bibliothek',
        'XP, Badges & Belohnungs-Credits beim Bauen (demnächst)',
      ],
      accountCta: 'Erstelle dein kostenloses Konto',
    },
    plans: {
      eyebrow: 'Tarife',
      title: 'Kostenlos starten. Wachsen, wenn du bereit bist.',
      subtitle:
        'Baue für immer kostenlos — lokal mit deinem eigenen Key oder mit 10.000 reservierten Credits in einem kostenlosen Konto. Upgrade für mehr Credits, Bots und Agenten.',
      cta: 'Alle Tarife vergleichen',
    },
    privacy: {
      eyebrow: 'Privat von Grund auf',
      title: 'Deine Keys. Deine Daten. Deine Maschine.',
      body: 'Nexow läuft standardmäßig vollständig lokal. Im Private-Modus fügst du deinen eigenen Anthropic-API-Key hinzu und die Widget-Generierung passiert vollständig in deinem Browser — nichts wird an unsere Server gesendet, sodass eine nicht authentifizierte Sitzung uns nichts kostet und nichts nach außen dringt.',
      points: [
        'Bring-your-own-Key-Codegen läuft clientseitig',
        'Widgets, Versionen & Logs bleiben in deinem Browser (IndexedDB)',
        'Direkte Venue-Verbindungen halten Zugangsdaten von unserer Infrastruktur fern',
        'Kein Konto nötig, um mit dem Bauen zu starten',
      ],
      cta: 'Lies die Local-Mode-Architektur',
    },
    roadmap: {
      eyebrow: 'Roadmap',
      title: 'Das ist die Preview. Und so geht es weiter.',
      subtitle:
        'Nexow hat eine öffentliche Preview des Canvas, der Codegenerierung, der Cloud-Bots, der Konten und des Community-Feeds ausgeliefert. Die folgenden Bausteine landen als Nächstes.',
      shipped: 'Ausgeliefert',
      soon: 'Demnächst',
      items: [
        { status: 'shipped', title: 'KI-Widget-Codegen', body: 'Widgets in natürlicher Sprache, sandboxed auf dem Canvas ausgeführt.' },
        { status: 'shipped', title: 'Über 28 Marktdaten-Konnektoren', body: 'Broker, Börsen, Datenanbieter, Datenbanken und Socials streamen live.' },
        { status: 'shipped', title: 'Cloud-Bots & Alerts', body: 'Automatisierungen, die deine Daten beobachten und Signale an deine Widgets senden, auch bei geschlossenem Tab.' },
        { status: 'shipped', title: 'Konten & Cloud-Sync', body: 'Kostenlose Konten mit geräteübergreifend synchronisierten Workspaces — 10.000 Credits für den Plattform-Launch reserviert.' },
        { status: 'shipped', title: 'Community-Feed & Profile', body: 'Folge Makern, teile Widgets im Feed und sichere dir dein öffentliches @handle.' },
        { status: 'soon', title: 'Agenten & Copilot', body: 'Deploye Cloud-Agenten mit einem vollständigen Harness und einen Copilot für deinen Workspace.' },
        { status: 'soon', title: 'Marketplace & Signale', body: 'Kaufe und verkaufe Widgets und veröffentliche geprüfte Strategie-Signale, mit denen du verdienen kannst.' },
        { status: 'soon', title: 'XP, Badges & Belohnungen', body: 'Ein spielerisches Konto — verdiene XP und Badges für Erfolge und wandle sie in Belohnungs-Credits um.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Fragen, beantwortet',
      subtitle: 'Alles, was du wissen musst, bevor du die App startest.',
      items: [
        {
          q: 'Was ist Nexow?',
          a: 'Nexow ist ein KI-nativer Workspace für Märkte. Du beschreibst ein Widget — einen Chart, eine Tabelle, eine Heatmap oder ein Signal — in einfacher Sprache, und Nexow generiert dessen Quellcode, führt ihn in einem sandboxed iframe aus und streamt Live-Marktdaten auf ein freies Canvas. Darum herum ergänzt es Cloud-Bots, KI-Agenten, einen Copilot und eine Maker-Community.',
        },
        {
          q: 'Muss ich programmieren können?',
          a: 'Nein. Du beschreibst in natürlicher Sprache, was du willst, und Nexow schreibt und führt das Widget für dich aus. Falls du doch Code liest, stehen der Quellcode und die Versionshistorie jedes Widgets zum Prüfen und Verfeinern bereit.',
        },
        {
          q: 'Sind meine Daten privat? Brauche ich ein Konto?',
          a: 'Es ist kein Konto erforderlich. Nexow läuft standardmäßig vollständig lokal: Füge deinen eigenen Anthropic-API-Key hinzu und die Widget-Generierung passiert in deinem Browser, wobei Widgets, Versionen und Logs in IndexedDB gespeichert werden. Ein kostenloses Konto ist immer optional — es ergänzt KI-Credits, Cloud-Sync und die Community, aber du kannst zu 100 % lokal weiterbauen.',
        },
        {
          q: 'Welche Märkte und Venues werden unterstützt?',
          a: 'Nexow hat 28 Live-Konnektoren (56 im Katalog), die FX (OANDA, LMAX, FXCM), Krypto (Binance, Coinbase, Kraken, Deribit, BitMEX), Aktien und Futures (Interactive Brokers, Alpaca, TradeStation, Polygon, Rithmic, IQFeed), Prognosemärkte (Kalshi, Polymarket), Datenanbieter und Datenbanken (Alpha Vantage, Intrinio, Trading Economics, Postgres, ClickHouse, Qdrant) und Social-Feeds (X, YouTube, Discord, Telegram, Spotify) abdecken.',
        },
        {
          q: 'Was sind Bots und Agenten?',
          a: 'Bots sind Cloud-Automatisierungen, die deine Daten beobachten und Signale und Alerts an deine Widgets senden, selbst wenn dein Tab geschlossen ist — beschreibe einen Alert in einfachen Worten oder verdrahte ihn visuell mit Schwellenwerten, prozentualer Veränderung, Kreuzungen gleitender Durchschnitte und neuen Trades in einem verbundenen Broker-Konto. Agenten sind KI mit einem vollständigen Harness (Modell, Speicher, Skills, Tools, Wissen, Trigger) — entwirf deinen heute im visuellen Harness-Builder; Cloud-Deployment und der Copilot-Assistent kommen demnächst.',
        },
        {
          q: 'Gibt es eine Community und einen Marketplace?',
          a: 'Die Community ist live — erstelle ein kostenloses Konto, sichere dir dein öffentliches @handle, folge Makern, poste in den Feed und teile Widgets, die andere direkt in ihre Bibliothek übernehmen können. Ein Marketplace zum Kaufen und Verkaufen von Widgets und geprüften Strategie-Signalen, mit denen du verdienen kannst, kommt als Nächstes.',
        },
        {
          q: 'Was sind XP und Belohnungen?',
          a: 'Nexow ergänzt eine spielerische Ebene für Konten: Das Bauen von Widgets, das Betreiben von Bots und das Teilen mit der Community bringt XP und schaltet Badges für Erfolge frei — und Erfolge lassen sich in Belohnungs-Credits umwandeln, die du für KI-Nutzung ausgeben kannst. Es wird demnächst ausgerollt; frühe Konten stehen ganz vorn.',
        },
        {
          q: 'Was kostet es?',
          a: 'Für immer kostenlos zum Bauen — lokal mit deinem eigenen Key oder mit 10.000 KI-Credits, die in einem kostenlosen Konto reserviert sind. Bezahltarife (Supporter und Sponsor) ergänzen monatliche Credits und höhere Bot- und Agenten-Limits, und Partner ist für Teams, die eine private Infrastruktur brauchen. Der kostenpflichtige Checkout kommt demnächst; siehe die Tarifseite.',
        },
        {
          q: 'Welches KI-Modell treibt Nexow an?',
          a: 'Nexow generiert mit den Claude-Modellen von Anthropic über das Anthropic SDK — standardmäßig Claude Opus 4.8, mit Sonnet 4.6 und Haiku 4.5 für schnellere, günstigere Generierung. Im Private-Modus stellst du deinen eigenen Key bereit und behältst so die volle Kontrolle über Nutzung und Kosten.',
        },
      ],
    },
    cta: {
      title: 'Baue dein erstes Widget in der nächsten Minute',
      subtitle: 'Die Preview ist live und kostenlos zum Ausprobieren. Kein Sign-up, kein Setup — beschreib einfach, was du sehen willst.',
      primary: 'Nexow starten',
      secondary: 'Funktionen entdecken',
    },
  },
  features: {
    meta: {
      title: 'Funktionen — Nexow',
      description:
        'Widget-Generierung in natürlicher Sprache, eine sandboxed Runtime, ein freies Canvas mit Gruppen und Links, über 28 Marktdaten-Konnektoren, Cloud-Bots und Agenten, eine Maker-Community mit XP-Belohnungen, privater Local-Mode und eine versionierte Widget-Bibliothek. Entdecke alles, was Nexow kann.',
    },
    hero: {
      badge: 'Funktionen',
      title: 'Alles, was du brauchst, um Markt-Dashboards mit Worten zu bauen',
      subtitle:
        'Nexow verwandelt einen Satz in ein laufendes, datenverbundenes Widget — und gibt dir dann das Canvas, die Konnektoren, die Cloud-Automatisierungen und das Netzwerk, um eine echte Workstation zu bauen.',
    },
    groups: [
      {
        title: 'Generieren',
        body: 'Beschreibe, was du sehen willst; Nexow schreibt und führt es aus.',
        items: [
          { icon: 'sparkles', title: 'Codegen in einfacher Sprache', body: 'Beschreibe ein Widget und Nexow generiert dessen vollständigen Quellcode mit Claude — Charts, Tabellen, Heatmaps, Orderbücher, individuelle Signale.' },
          { icon: 'wand', title: 'Per Gespräch verfeinern', body: 'Ändere alles, indem du fragst. „Füge einen 200er EMA hinzu“, „wechsle zur Log-Skala“, „färbe nach Funding-Rate“ — Nexow bearbeitet das Widget an Ort und Stelle.' },
          { icon: 'history', title: 'Versioniert & einsehbar', body: 'Jede Generierung wird versioniert, mit Logs. Rolle zurück, vergleiche und lies den exakten Quellcode, der in jedem Widget läuft.' },
        ],
      },
      {
        title: 'Ausführen',
        body: 'Eine sichere, schnelle Runtime für generierten Code.',
        items: [
          { icon: 'shield', title: 'Sandboxed iframes', body: 'Widgets laufen in isolierten iframes mit strenger Abgrenzung — generierter Code kann rendern und abrufen, aber deinen Workspace oder andere Widgets nicht berühren.' },
          { icon: 'bolt', title: 'Live-Streaming-Daten', body: 'Widgets abonnieren Echtzeitkurse, Orderbücher und Referenzdaten mit minimaler Latenz.' },
          { icon: 'layers', title: 'Freies Canvas & Workspaces', body: 'Ordne Widgets auf einem freien Canvas an, gruppiere sie in Workspaces und Screens und wechsle sofort zwischen Setups.' },
          { icon: 'link', title: 'Gruppen & Links', body: 'Bündle Widgets in Gruppen mit Mosaik- oder Tab-Layouts und verdrahte Widgets mit Links — einseitige oder zweiseitige Pipes, die die Daten eines Widgets in ein anderes streamen.' },
        ],
      },
      {
        title: 'Verbinden',
        body: 'Modulare Daten von den Venues, die du tatsächlich nutzt.',
        items: [
          { icon: 'plug', title: 'Über 28 Marktdaten-Konnektoren', body: 'FX, Krypto, Aktien, Futures, Optionen und Prognosemärkte — OANDA, Binance, Coinbase, IBKR, Polygon, Kalshi, Polymarket und mehr.' },
          { icon: 'globe', title: 'Browser-direkt, wo möglich', body: 'Wo CORS es erlaubt, laufen authentifizierte Venue-Aufrufe direkt aus deinem Browser und umgehen unseren Proxy vollständig.' },
          { icon: 'database', title: 'Datenbanken & Socials auch', body: 'Richte Widgets auf Postgres, ClickHouse oder Qdrant aus oder ziehe neben Live-Märkten Daten aus X, YouTube, Discord und Telegram.' },
        ],
      },
      {
        title: 'Automatisieren',
        body: 'Cloud-Automatisierungen und KI, die handeln, während du weg bist.',
        items: [
          { icon: 'bot', title: 'Cloud-Bots', body: 'Beschreibe einen Alert oder verdrahte ihn visuell — Schwellenwerte, prozentuale Veränderung, MA-Kreuzungen, Digests oder neue Trades in einem verbundenen Broker-Konto. Bots laufen auf einem Cloud-Heartbeat und pushen Signale an deine Widgets, bei geschlossenem Tab.' },
          { icon: 'cpu', title: 'KI-Agenten', body: 'Agenten mit einem vollständigen Harness — Modell, Speicher, Skills, Tools, Wissen und Trigger. Entwirf deinen heute im visuellen Harness-Builder — Cloud-Deployment kommt demnächst.' },
          { icon: 'chat', title: 'Copilot', body: 'Ein Assistent für deinen Workspace: Hänge den Screenshot oder die Daten eines Widgets an und bitte ihn, zu erklären, zusammenzufassen oder vorzuschlagen, was du als Nächstes beobachten solltest. Demnächst.' },
        ],
      },
      {
        title: 'Netzwerk',
        body: 'Baue neben einer Welt von Makern.',
        items: [
          { icon: 'users', title: 'Community', body: 'Folge Makern, poste in den Feed und teile Widgets, die andere direkt in ihre Bibliothek übernehmen können — heute schon live, mit öffentlichen Maker-Profilen.' },
          { icon: 'store', title: 'Marketplace', body: 'Kaufe und verkaufe fertige Widgets und verdiene mit dem, was du baust. Demnächst — das Teilen funktioniert in der Community bereits.' },
          { icon: 'signal', title: 'Strategie-Signale', body: 'Veröffentliche geprüfte Track Records, abonniere Signale, denen du vertraust, und verdiene mit den Strategien, die du fährst. Demnächst.' },
          { icon: 'trophy', title: 'XP & Belohnungen', body: 'Verdiene XP fürs Bauen, schalte Badges für Erfolge frei und wandle sie in Belohnungs-Credits um. Demnächst.' },
        ],
      },
      {
        title: 'Besitzen',
        body: 'Standardmäßig privat, dir gehörend.',
        items: [
          { icon: 'lock', title: 'Privater Local-Mode', body: 'Bring deinen eigenen Anthropic-Key mit und generiere Widgets clientseitig. Nichts wird an unsere Server gesendet — kein Konto erforderlich.' },
          { icon: 'sync', title: 'Optionale Cloud-Synchronisierung', body: 'Erstelle ein kostenloses Konto, um Workspaces, Widgets und Einstellungen über alle Geräte hinweg zu synchronisieren — mit einem verschlüsselten Credential-Vault.' },
          { icon: 'library', title: 'Wiederverwendbare Bibliothek', body: 'Speichere jedes Widget in deiner Bibliothek und lege es mit einem Klick in jedes Dashboard.' },
        ],
      },
    ],
  },
  plansPage: {
    meta: {
      title: 'Tarife — Nexow',
      description:
        'Für immer kostenlos zum Bauen — lokal mit deinem eigenen Key oder mit 10.000 KI-Credits, die in einem kostenlosen Konto reserviert sind. Vergleiche Free, Supporter, Sponsor und Partner für Credits, Bots, Agenten und Anpassung.',
    },
    hero: {
      badge: 'Tarife',
      title: 'Kostenlos starten. Raum zum Wachsen.',
      subtitle:
        'Baue kostenlos — laufe lokal mit deinem eigenen Key oder melde dich an, um 10.000 KI-Credits zu reservieren. Upgrade, wenn du mehr Kapazität, Automatisierung und Feinschliff brauchst.',
    },
    comingSoon:
      'Der Checkout für Supporter & Sponsor kommt demnächst, und Plattform-Credits starten zeitgleich damit. Heute sind alle auf Free — erstelle ein Konto, um bei der Freischaltung des Billings ganz vorn zu sein.',
    highlights: {
      title: 'Was mit deinem Tarif skaliert',
      items: [
        {
          icon: 'coins',
          title: 'KI-Credits',
          body: 'Treiben Widget-Generierung, Copilot-Antworten und Bot-Logik an. Free reserviert 10.000 zum Start; Bezahltarife erneuern sich monatlich.',
        },
        {
          icon: 'bot',
          title: 'Bots & Agenten',
          body: 'Bots beobachten Märkte und lösen Aktionen aus. Agenten führen mehrstufige Workflows aus. Höhere Tarife erhöhen die parallelen Limits.',
        },
        {
          icon: 'sparkles',
          title: 'Anpassung',
          body: 'Akzentfarben, Logos und Premium-UI schalten sich mit dem Upgrade frei — lass Nexow sich wie deins anfühlen.',
        },
      ],
    },
    included: {
      title: 'In jedem Tarif enthalten',
      items: [
        'Unbegrenzte Screens, Workspaces & Widgets',
        'Über 28 Live-Marktdaten-Konnektoren',
        'Sandboxed Widget-Runtime',
        'Globaler Copilot (demnächst)',
        'Zugang zu Community & Marketplace',
      ],
    },
    billing: { monthly: 'Monatlich', yearly: 'Jährlich', save: '2 Monate gratis' },
    tiers: [
      {
        name: 'Free',
        tagline: 'Alles, was du zum Bauen brauchst.',
        priceMonthly: '0 €',
        priceYearly: '0 €',
        cadence: 'für immer',
        stats: ['10.000 Credits', '10 Bots', '3 Agenten'],
        cta: 'Kostenlos loslegen',
        ctaHref: 'https://x.nexow.ai',
        features: [
          '10.000 KI-Credits bei der Anmeldung reserviert',
          'Unbegrenzte Screens, Workspaces & Widgets',
          'Unbegrenzte Browser-Verbindungen',
          'Geräteübergreifende Cloud-Synchronisierung',
          'Globaler Copilot (demnächst)',
          'Zugang zu Community & Marketplace',
        ],
      },
      {
        name: 'Supporter',
        tagline: 'Für Maker, die mehr Raum wollen.',
        priceMonthly: '9,99 €',
        priceYearly: '8,33 €',
        billedYearly: '99,90 € /Jahr',
        cadence: '/Mon.',
        badge: 'Demnächst',
        stats: ['50.000 Credits/Mon.', '30 Bots', '10 Agenten'],
        note: 'Alles in Free, plus:',
        cta: 'Supporter werden',
        ctaHref: 'https://x.nexow.ai',
        features: [
          '50.000 Credits jeden Monat',
          'Bis zu 30 Bots & 10 Agenten',
          'Ein Copilot pro Workspace',
          'Zweite Akzentfarbe (Verlauf)',
          'Exklusive UI- & Erscheinungsoptionen',
        ],
      },
      {
        name: 'Sponsor',
        tagline: 'Für Power-User, die profi werden.',
        priceMonthly: '69,99 €',
        priceYearly: '58,33 €',
        billedYearly: '699,90 € /Jahr',
        cadence: '/Mon.',
        badge: 'Beste Rendite',
        stats: ['800.000 Credits/Mon.', '300 Bots', '100 Agenten'],
        note: 'Alles in Supporter, plus:',
        cta: 'Sponsor werden',
        ctaHref: 'https://x.nexow.ai',
        featured: true,
        features: [
          '800.000 Credits jeden Monat',
          'Bis zu 300 Bots & 100 Agenten',
          'Individuelle Verbindungen (Connector Builder)',
          'Ein Copilot pro Screen',
          'Lade dein eigenes Logo hoch',
          'Premium-UI-Anpassungen',
        ],
      },
      {
        name: 'Partner',
        tagline: 'Für Teams, die alles brauchen.',
        priceMonthly: 'Individuell',
        priceYearly: 'Individuell',
        cadence: '',
        stats: ['Private Infra', 'White-Glove', 'SLA'],
        note: 'Alles in Sponsor, plus:',
        cta: 'Kontaktiere uns',
        ctaHref: 'mailto:partners@nexow.ai',
        features: [
          'Private Infrastruktur',
          'White-Glove-Setup',
          'Erstklassige individuelle Entwicklung',
          'Maßgeschneidertes Branding & Personalisierung',
          'Dedizierter Support',
        ],
      },
    ],
    faqTitle: 'Fragen zu den Tarifen',
    faq: [
      { q: 'Ist Nexow wirklich kostenlos?', a: 'Ja. Du kannst für immer kostenlos bauen — laufe vollständig lokal mit deinem eigenen Anthropic-Key (du zahlst nur deine eigene API-Nutzung) oder erstelle ein kostenloses Konto, das 10.000 KI-Credits für die Öffnung des Plattform-Modus reserviert, sodass kein eigener Key nötig ist.' },
      { q: 'Was sind Credits?', a: 'Credits messen die KI-Nutzung — das Generieren von Widgets, Links, Bots und Copilot-Antworten. Das kostenlose Konto reserviert 10.000 zum Start, und Bezahltarife gewähren ein monatliches Kontingent (50.000 bei Supporter, 800.000 bei Sponsor). Die Credit-Messung geht mit dem Plattform-Modus live, und du kannst jederzeit mehr kaufen.' },
      { q: 'Wann starten die Bezahltarife?', a: 'Supporter und Sponsor sind definiert und werden in der App angezeigt, aber der kostenpflichtige Checkout kommt demnächst. Heute sind alle auf Free — erstelle ein Konto, um bei der Freischaltung des Billings ganz vorn zu sein.' },
      { q: 'Kann ich jährlich zahlen?', a: 'Ja. Die jährliche Abrechnung gibt dir zwei Monate gratis gegenüber der monatlichen Zahlung. Du kannst jederzeit zwischen monatlich und jährlich wechseln.' },
    ],
  },
  connectorsPage: {
    meta: {
      title: 'Konnektoren — Nexow',
      description:
        'Durchstöbere jeden Nexow-Konnektor — 28 live und 56 im Katalog. Broker, Börsen, DEXs, Prognosemärkte, Datenanbieter, Datenbanken und Social-Feeds. Suchen, filtern und verbinden.',
    },
    hero: {
      badge: 'Konnektoren',
      title: 'Jeder Markt, ein Canvas',
      subtitle:
        'Durchsuche den vollständigen Katalog der Venues, mit denen sich Nexow verbindet — Broker, Börsen, Datenanbieter, Datenbanken und Socials. Live-Konnektoren funktionieren heute; der Rest landet demnächst.',
    },
    searchPlaceholder: 'Konnektoren durchsuchen…',
    filters: 'Filter',
    all: 'Alle',
    categories: { finance: 'Finanzen', data: 'Daten', socials: 'Socials' },
    status: { all: 'Alle', live: 'Live', soon: 'Demnächst' },
    kinds: {
      broker: 'Broker',
      exchange: 'Börse',
      prediction: 'Prognosemarkt',
      dex: 'DEX',
      aggregator: 'Aggregator',
      data: 'Marktdaten',
      sql: 'SQL-Datenbank',
      nosql: 'NoSQL-Datenbank',
      warehouse: 'Data Warehouse',
      vector: 'Vektordatenbank',
      messaging: 'Messaging',
      social: 'Soziales Netzwerk',
      video: 'Video',
      community: 'Community',
      music: 'Musik',
    },
    assets: {
      equities: 'Aktien',
      indices: 'Indizes',
      fixed_income: 'Anleihen',
      fx: 'FX',
      commodities: 'Rohstoffe',
      crypto: 'Krypto',
      volatility: 'Volatilität',
      prediction_markets: 'Prognose',
    },
    visit: 'Website besuchen',
    results: '{n} Konnektoren',
    empty: 'Keine Konnektoren passen zu deiner Suche.',
    exploreCta: 'Alle Konnektoren entdecken',
    countLive: 'live',
    countCatalog: 'im Katalog',
  },
  about: {
    meta: {
      title: 'Über uns — Nexow',
      description:
        'Nexow baut eine KI-native Workstation für Märkte: Beschreibe jedes Widget in einfacher Sprache und erhalte ein laufendes, datenverbundenes Dashboard. Standardmäßig privat. Erfahre mehr über unsere Mission.',
    },
    hero: {
      badge: 'Über uns',
      title: 'Eine KI-native Workstation für Märkte',
      subtitle:
        'Wir finden, das Bauen eines Trading-Dashboards sollte so schnell gehen wie das Beschreiben. Nexow verwandelt natürliche Sprache in laufende, datenverbundene Widgets — und behält dich in der Kontrolle über deine Keys und Daten.',
    },
    missionTitle: 'Warum wir Nexow bauen',
    mission: [
      'Jeder Trader und Analyst baut am Ende dieselben Charts, Tabellen und Monitore von Hand nach — verklebt APIs, ringt mit Websockets und kämpft mit dem Layout. Die Tools sind mächtig, aber langsam, und die guten sind hinter schweren Plattformen verschlossen.',
      'Nexow dreht das um. Du beschreibst, was du sehen willst, und eine KI schreibt ein echtes, laufendes Widget — sandboxed, versioniert und mit Live-Daten aus den Venues verbunden, die du ohnehin nutzt. Das Dashboard baut sich selbst zusammen, und du verfeinerst es in einfacher Sprache.',
      'Wir bauen es Privacy-first: Laufe vollständig lokal mit deinem eigenen Key, behalte deine Daten in deinem Browser und verbinde dich, wo möglich, direkt mit den Venues. Während wir Trading-Agenten, Server-Komponenten und eine Community-Ebene ergänzen, bleibt dieses Prinzip fest — deine Keys, deine Daten, deine Maschine.',
    ],
    valuesTitle: 'Was uns wichtig ist',
    values: [
      { icon: 'lock', title: 'Standardmäßig privat', body: 'Local-first, Bring-your-own-Key, keine Daten verlassen deine Maschine, außer du willst es.' },
      { icon: 'bolt', title: 'Schnelligkeit zur Erkenntnis', body: 'Vom Satz zum Live-Widget in Sekunden — der kürzeste Weg zwischen einer Frage und einem Chart.' },
      { icon: 'shield', title: 'Sicher konstruiert', body: 'Generierter Code läuft sandboxed mit strenger Abgrenzung, sodass Leistung nie Risiko bedeutet.' },
      { icon: 'globe', title: 'Offen für jeden Markt', body: 'FX, Krypto, Aktien, Futures, Optionen und Prognosemärkte — ein Canvas für sie alle.' },
    ],
    ctaTitle: 'Überzeug dich selbst',
    ctaBody: 'Die Preview ist live. Beschreibe ein Widget und sieh zu, wie Nexow es baut.',
    cta: 'App starten',
  },
  blog: {
    meta: {
      title: 'Blog — Nexow',
      description:
        'Guides und Deep-Dives zum Bauen von Markt-Dashboards mit KI, zum Verbinden von Live-Daten und zu Trading-Tooling — vom Team bei Nexow.',
    },
    title: 'Der Nexow-Blog',
    subtitle: 'Wir bauen KI-natives Markt-Tooling — Guides, Deep-Dives und Produktnotizen.',
    latest: 'Neueste',
    readMore: 'Artikel lesen',
    backToBlog: 'Zurück zum Blog',
    published: 'Veröffentlicht',
    updated: 'Aktualisiert',
    minRead: 'Min. Lesezeit',
  },
  notFound: {
    title: 'Diese Seite ist vom Canvas gedriftet',
    body: 'Die Seite, die du suchst, existiert nicht — aber dein nächstes Dashboard vielleicht schon.',
    cta: 'Zurück zur Startseite',
  },
  privacyPage: {
    badge: 'Datenschutz',
    title: 'Datenschutzerklärung',
    subtitle: 'Wie Nexow mit deinen Daten umgeht — kurz gesagt: so wenig wie möglich.',
    meta: {
      title: 'Datenschutzerklärung — Nexow',
      description: 'Nexow ist standardmäßig privat. Erfahre, wie wir mit Daten, Keys und Verbindungen umgehen.',
    },
    updated: 'Zuletzt aktualisiert: 1. Juli 2026',
    sections: [
      { h: 'Standardmäßig privat', p: 'Nexow läuft standardmäßig vollständig lokal. Im Private-Modus stellst du deinen eigenen Anthropic-API-Key bereit und die Widget-Generierung passiert vollständig in deinem Browser. Deine Prompts und der generierte Code werden von deinem Browser direkt an Anthropic gesendet — nicht über unsere Server.' },
      { h: 'Was wir speichern', p: 'Deine Widgets, Versionen, Logs und Bibliothek werden in deinem Browser über IndexedDB gespeichert. Sie bleiben auf deinem Gerät und werden nicht zu Nexow hochgeladen. Das Löschen deines Browser-Speichers entfernt sie dauerhaft.' },
      { h: 'Marktdaten-Verbindungen', p: 'Wo eine Venue es erlaubt, verbindet sich Nexow direkt aus deinem Browser damit, und deine Venue-Zugangsdaten werden nur genutzt, um mit dieser Venue zu kommunizieren. Manche Venues erfordern das Routing über einen schlanken Proxy; in diesen Fällen passieren nur die Daten, die zur Erfüllung der Anfrage nötig sind.' },
      { h: 'Diese Website', p: 'Diese Marketing-Website ist eine statische Seite. Wir halten die Analytik minimal und datenschutzfreundlich und wir verkaufen keine personenbezogenen Daten. Ausgehende Links (wie die App) sind klar gekennzeichnet.' },
      { h: 'Kontakt', p: 'Fragen zum Datenschutz? Schreib an hello@nexow.ai.' },
    ],
  },
};
