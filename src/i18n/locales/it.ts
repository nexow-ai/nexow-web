import type { SiteContent } from '../content';

export const it: SiteContent = {
  nav: {
    links: [
      { label: 'Funzionalità', href: '/features' },
      { label: 'Connettori', href: '/connectors' },
      { label: 'Piani', href: '/plans' },
      { label: 'Blog', href: '/blog' },
      { label: 'Chi siamo', href: '/about' },
    ],
    launch: 'Avvia l’app',
    menu: 'Apri il menu',
    close: 'Chiudi il menu',
  },
  footer: {
    tagline: 'Descrivi un widget. Nexow lo costruisce, lo collega ai dati di mercato in tempo reale e lo posiziona sul tuo canvas.',
    columns: [
      {
        title: 'Prodotto',
        links: [
          { label: 'Funzionalità', href: '/features' },
          { label: 'Piani', href: '/plans' },
          { label: 'Connettori', href: '/connectors' },
          { label: 'Automazioni', href: '/#automate' },
          { label: 'Community', href: '/#network' },
          { label: 'Roadmap', href: '/#roadmap' },
        ],
      },
      {
        title: 'Azienda',
        links: [
          { label: 'Chi siamo', href: '/about' },
          { label: 'Blog', href: '/blog' },
        ],
      },
      {
        title: 'Risorse',
        links: [
          { label: 'Avvia l’app', href: 'https://x.nexow.ai' },
          { label: 'Privacy', href: '/privacy' },
        ],
      },
    ],
    rights: 'Tutti i diritti riservati.',
    disclaimer:
      'Nexow è una piattaforma di strumenti e visualizzazione. Nulla di quanto qui riportato costituisce consulenza finanziaria. I mercati comportano rischi; opera in modo responsabile.',
    builtWith: 'Costruito con Astro. Privato di default.',
  },
  home: {
    meta: {
      title: 'Nexow — Costruisci dashboard di mercato con l’AI, in linguaggio naturale',
      description:
        'Nexow è un workspace AI-native per i mercati. Descrivi un widget in linguaggio naturale e Nexow lo costruisce, lo collega ai dati in tempo reale di oltre 45 connettori e aggiunge bot cloud, agenti AI, una community di maker e ricompense XP — privato di default, gratis per iniziare.',
    },
    hero: {
      badge: 'Anteprima ora disponibile',
      titleLead: 'Descrivilo.',
      titleGradient: 'Nexow lo costruisce.',
      titleTail: 'Fai trading.',
      subtitle:
        'Un workspace AI-native per i mercati. Chiedi qualsiasi widget in linguaggio naturale — Nexow scrive il codice, lo esegue in sicurezza e trasmette i dati in tempo reale su un canvas libero. Automatizzalo con bot e agenti cloud, poi entra in una community di maker.',
      ctaPrimary: 'Avvia l’app',
      ctaSecondary: 'Scopri come funziona',
      note: 'Nessuna registrazione per provare · Privato nel tuo browser · Oppure un account gratuito con 10K crediti riservati',
      promptExample: 'Mostra un grafico a candele di BTC-USD da Coinbase con EMA 20 e 50 e RSI sotto.',
      promptPlaceholder: 'Descrivi un widget…',
    },
    ticker: { label: 'Connettori attivi' },
    trust: 'Un canvas per ogni mercato — FX, crypto, azioni, futures, opzioni e prediction market.',
    stats: [
      { n: 45, suffix: '+', label: 'connettori attivi per dati, wallet, social e mercati' },
      { n: 6, label: 'classi di asset su un unico canvas' },
      { n: 10, suffix: 'K', label: 'crediti AI gratuiti riservati alla registrazione' },
      { n: 30, prefix: '<', suffix: 's', label: 'dalla frase al widget in esecuzione' },
    ],
    showcase: {
      eyebrow: 'Showcase',
      title: 'Una frase. Qualsiasi widget.',
      subtitle:
        'Grafici, order book, heatmap, quote — se riesci a descriverlo, Nexow può costruirlo e collegarlo ai dati in tempo reale.',
      generatedBadge: 'generato e attivo',
      tabs: [
        {
          label: 'Candele + indicatori',
          prompt: 'Grafico a candele di BTC-USD da Coinbase con EMA 20 e 50 e RSI sotto.',
          caption: 'In streaming da Coinbase — EMA e RSI calcolati nel widget.',
        },
        {
          label: 'Profondità dell’order book',
          prompt: 'Profondità dell’order book in tempo reale per ETH-PERP su Deribit, bid contro ask.',
          caption: 'Bid e ask aggregati in tempo reale dall’order book di Deribit.',
        },
        {
          label: 'Heatmap di correlazione',
          prompt: 'Heatmap di correlazione a 30 giorni per BTC, ETH, SOL, EURUSD, gold e SPX.',
          caption: 'Correlazioni cross-asset ricalcolate all’arrivo di ogni nuova chiusura.',
        },
        {
          label: 'Prediction market',
          prompt: 'Quote Kalshi di un taglio dei tassi della Fed al prossimo FOMC, con variazione 24h.',
          caption: 'Probabilità degli eventi trasmesse direttamente dall’order book di Kalshi.',
        },
      ],
    },
    features: {
      eyebrow: 'Perché Nexow',
      title: 'La dashboard si costruisce da sola',
      subtitle:
        'Basta collegare grafici a mano. Descrivi ciò che vuoi vedere e Nexow genera un widget reale e funzionante — poi ti lascia perfezionarlo in linguaggio naturale.',
      items: [
        {
          icon: 'sparkles',
          title: 'Widget in linguaggio naturale',
          body: 'Descrivi un grafico, una tabella, una heatmap o un segnale con parole semplici. Nexow scrive il codice del widget con Claude e lo esegue in tempo reale — nessun boilerplate, nessun file di configurazione.',
        },
        {
          icon: 'shield',
          title: 'In sandbox e sicuro',
          body: 'Ogni widget viene eseguito in un iframe isolato con un confine rigoroso. Il codice generato può renderizzare e recuperare dati, ma non tocca mai il resto del tuo workspace.',
        },
        {
          icon: 'plug',
          title: 'Oltre 45 connettori di dati in tempo reale',
          body: 'Provider di dati di mercato modulari — OANDA, Binance, Coinbase, Kraken, Polygon, Interactive Brokers, Kalshi, Polymarket e altri — instradano i dati in tempo reale ai tuoi widget.',
        },
        {
          icon: 'layers',
          title: 'Canvas libero',
          body: 'Trascina, ridimensiona e disponi i widget su un canvas libero con workspace e schermate per FX, crypto, ricerca — qualsiasi cosa tu tratti. Raggruppa i widget e fai fluire i dati in tempo reale tra loro con i Links.',
        },
        {
          icon: 'lock',
          title: 'Privato di default',
          body: 'Esegui tutto in locale: aggiungi la tua chiave Anthropic e la generazione del codice avviene nel tuo browser. Widget, versioni e log rimangono in IndexedDB — nulla viene inviato ai nostri server.',
        },
        {
          icon: 'history',
          title: 'Versioni e una libreria di widget',
          body: 'Ogni modifica è versionata con log che puoi ispezionare. Salva i widget in una libreria personale e riutilizzali in tutte le tue dashboard con un clic.',
        },
      ],
    },
    how: {
      eyebrow: 'Come funziona',
      title: 'Dalla frase al widget in tempo reale in pochi secondi',
      subtitle: 'Tre passaggi. Nessuna configurazione, nessuno step di build, nessun codice di collegamento.',
      steps: [
        {
          n: '01',
          title: 'Descrivi',
          body: 'Scrivi ciò che vuoi in linguaggio naturale — “un grafico della profondità dell’order book per ETH-PERP su Deribit”.',
        },
        {
          n: '02',
          title: 'Genera',
          body: 'Nexow scrive il codice del widget con Claude e lo esegue in un iframe sandbox, collegato al connettore che hai scelto.',
        },
        {
          n: '03',
          title: 'Perfeziona e disponi',
          body: 'Modificalo in linguaggio naturale, versionalo, poi posizionalo sul tuo canvas accanto a tutto ciò che monitori.',
        },
      ],
    },
    automate: {
      eyebrow: 'Automatizza',
      title: 'Metti il tuo workspace in modalità pilota automatico',
      subtitle:
        'I widget ti mostrano il mercato. Bot, agenti e Copilot agiscono su di esso — automazioni cloud e AI che continuano a lavorare anche quando la tua scheda è chiusa.',
      liveLabel: 'Attivo',
      soonLabel: 'In arrivo',
      items: [
        {
          icon: 'bot',
          title: 'Bot',
          body: 'Automazioni cloud che monitorano i tuoi dati e inviano segnali e avvisi ai tuoi widget. Descrivi un avviso con parole semplici — “avvisami quando BTC scende del 5% in un’ora” — oppure impostalo visivamente con soglie, variazione %, incroci di MA e riepiloghi. I bot possono persino monitorare un conto broker collegato per nuovi trade.',
          status: 'live',
        },
        {
          icon: 'cpu',
          title: 'Agenti',
          body: 'Agenti AI con un vero harness — modello, memoria, skill, strumenti, conoscenza e trigger. Assegna un compito a un agente e lascialo osservare, ragionare e agire — costruisci il tuo nel visual harness builder e distribuiscilo nel cloud, con permessi degli strumenti, memoria tra le esecuzioni e una cronologia delle esecuzioni in tempo reale.',
          status: 'live',
        },
        {
          icon: 'chat',
          title: 'Copilot',
          body: 'Un assistente AI per l’intero workspace. Chatta in schede parallele, lascialo costruire widget in background e organizzare il tuo canvas, e chiedi — “spiega questa board”, “riassumi questo”, “cosa dovrei cambiare adesso?”',
          status: 'live',
        },
      ],
      harnessChips: ['modello', 'memoria', 'skill', 'strumenti', 'conoscenza', 'trigger'],
      copilotPrompts: ['Spiega questo grafico', 'Riassumi questi dati', 'Cosa dovrei monitorare adesso?'],
    },
    connectors: {
      eyebrow: 'Connettori',
      title: 'Collegati a ogni mercato',
      subtitle:
        'Connettori modulari trasmettono prezzi, order book e dati di riferimento in tempo reale direttamente nei tuoi widget — su FX, crypto, azioni, futures, opzioni, prediction market, database e feed social.',
      note: '45 connettori sono attivi oggi e 83 sono nel catalogo — venue di trading, API di dati di mercato, database, fonti social, wallet crypto e servizi web. Molti trasmettono direttamente dal tuo browser; gli altri passano attraverso un proxy leggero.',
      count: 45,
      countLabel: 'connettori attivi',
      groups: {
        fx: 'FX',
        crypto: 'Crypto',
        equities: 'Azioni e futures',
        prediction: 'Prediction market',
        data: 'Dati e database',
        socials: 'Social',
      },
    },
    network: {
      eyebrow: 'La rete',
      title: 'Costruisci da solo. O collegati alla rete.',
      subtitle:
        'Resta totalmente in locale e privato, oppure crea un account gratuito ed entra in un mondo di maker che costruiscono, condividono e scambiano dashboard insieme a te.',
      liveLabel: 'Attivo',
      soonLabel: 'In arrivo',
      items: [
        {
          icon: 'users',
          title: 'Community',
          body: 'Scopri e segui i maker, metti like e commenta in un feed social per chi costruisce sui mercati, e condividi widget che altri possono aggiungere direttamente alla loro libreria — con profili maker pubblici.',
          status: 'live',
        },
        {
          icon: 'store',
          title: 'Marketplace',
          body: 'Pubblica widget, temi, schermate e bot dalla tua libreria e installa ciò che gli altri condividono — con una lineage che dà credito a ogni remake. Comprare e vendere arriva dopo.',
          status: 'live',
        },
        {
          icon: 'signal',
          title: 'Segnali di strategia',
          body: 'Pubblica track record verificati, abbonati ai segnali dei maker di cui ti fidi e guadagna sulle strategie che esegui.',
          status: 'soon',
        },
        {
          icon: 'trophy',
          title: 'Reputazione e medaglie',
          body: 'Ogni widget, bot e condivisione fa guadagnare reputazione — punti, traguardi progressivi, medaglie rare e livelli sul tuo profilo pubblico. La conversione in crediti ricompensa arriva dopo.',
          status: 'live',
        },
      ],
      accountBadge: 'Account gratuito',
      accountTitle: 'Un account gratuito sblocca la rete',
      accountBody: 'Nessuna carta di credito. Continua a costruire in locale quando vuoi — l’account è sempre opzionale.',
      accountPoints: [
        '10.000 crediti AI gratuiti riservati alla registrazione',
        'Sincronizzazione cloud cross-device per workspace e widget',
        'Community, marketplace e la libreria di widget',
        'Punti reputazione, medaglie e livelli man mano che costruisci e condividi',
      ],
      accountCta: 'Crea il tuo account gratuito',
    },
    plans: {
      eyebrow: 'Piani',
      title: 'Inizia gratis. Cresci quando sei pronto.',
      subtitle:
        'Costruisci gratis per sempre — in locale con la tua chiave, oppure con 10.000 crediti riservati su un account gratuito. Fai l’upgrade per più crediti, bot e agenti.',
      cta: 'Confronta tutti i piani',
    },
    privacy: {
      eyebrow: 'Privato by design',
      title: 'Le tue chiavi. I tuoi dati. La tua macchina.',
      body: 'Nexow gira totalmente in locale di default. In modalità privata aggiungi la tua chiave API Anthropic e la generazione dei widget avviene interamente nel tuo browser — nulla viene inviato ai nostri server, quindi una sessione non autenticata non ci costa nulla e non rivela nulla.',
      points: [
        'La generazione del codice bring-your-own-key gira lato client',
        'Widget, versioni e log rimangono nel tuo browser (IndexedDB)',
        'Le connessioni dirette ai venue tengono le credenziali fuori dalla nostra infrastruttura',
        'Nessun account richiesto per iniziare a costruire',
      ],
      cta: 'Leggi l’architettura della modalità locale',
    },
    roadmap: {
      eyebrow: 'Roadmap',
      title: 'Questa è l’anteprima. Ecco cosa arriva.',
      subtitle:
        'Nexow ha rilasciato il canvas, la generazione del codice, i bot cloud, gli agenti, Copilot, il marketplace, gli account e la community. Il canvas delle app più ampio continua ad arrivare attraverso i building block qui sotto.',
      shipped: 'Rilasciato',
      soon: 'In arrivo',
      items: [
        { status: 'shipped', title: 'Generazione AI dei widget', body: 'Widget in linguaggio naturale eseguiti in sandbox sul canvas.' },
        { status: 'shipped', title: 'Oltre 45 connettori di dati di mercato', body: 'Database, social, broker, exchange, wallet, dati aperti e servizi web in streaming dal vivo.' },
        { status: 'shipped', title: 'Bot cloud e avvisi', body: 'Automazioni che monitorano i tuoi dati e inviano segnali ai tuoi widget, a scheda chiusa.' },
        { status: 'shipped', title: 'Account e sincronizzazione cloud', body: 'Account gratuiti con workspace sincronizzati su ogni dispositivo — 10K crediti riservati per il lancio della piattaforma.' },
        { status: 'shipped', title: 'Feed della community e profili', body: 'Segui i maker, condividi widget nel feed e rivendica il tuo @handle pubblico.' },
        { status: 'shipped', title: 'Agenti e Copilot', body: 'Agenti cloud con un harness completo, distribuiti con permessi degli strumenti e cronologia delle esecuzioni — più un Copilot che costruisce e organizza il tuo workspace.' },
        { status: 'shipped', title: 'Marketplace', body: 'Pubblica e installa widget, temi, schermate e bot — con una lineage che dà credito a ogni remake.' },
        { status: 'shipped', title: 'Reputazione e medaglie', body: 'Punti, traguardi progressivi, medaglie rare e livelli per ciò che costruisci e condividi.' },
        { status: 'soon', title: 'Widget premium e segnali', body: 'Pubblica widget premium e segnali di strategia, lascia che altri si abbonino e guadagna su ciò che esegui.' },
        { status: 'soon', title: 'Piani a pagamento e crediti ricompensa', body: 'Checkout Supporter e Sponsor, crediti di piattaforma e conversione della reputazione in crediti ricompensa.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Domande, con risposta',
      subtitle: 'Tutto quello che devi sapere prima di avviare l’app.',
      items: [
        {
          q: 'Cos’è Nexow?',
          a: 'Nexow è un workspace AI-native per i mercati. Descrivi un widget — un grafico, una tabella, una heatmap o un segnale — in linguaggio naturale, e Nexow ne genera il codice sorgente, lo esegue in un iframe sandbox e trasmette dati di mercato in tempo reale su un canvas libero. Attorno a questo aggiunge bot cloud, agenti AI, un Copilot e una community di maker.',
        },
        {
          q: 'Devo saper programmare?',
          a: 'No. Descrivi ciò che vuoi in linguaggio naturale e Nexow scrive ed esegue il widget per te. Se sai leggere il codice, il sorgente e la cronologia delle versioni di ogni widget sono disponibili da ispezionare e perfezionare.',
        },
        {
          q: 'I miei dati sono privati? Serve un account?',
          a: 'Nessun account è richiesto. Nexow gira totalmente in locale di default: aggiungi la tua chiave API Anthropic e la generazione dei widget avviene nel tuo browser, con widget, versioni e log archiviati in IndexedDB. Un account gratuito è sempre opzionale — aggiunge crediti AI, sincronizzazione cloud e la community, ma puoi continuare a costruire al 100% in locale.',
        },
        {
          q: 'Quali mercati e venue sono supportati?',
          a: 'Nexow ha 45 connettori attivi (83 nel catalogo) che coprono FX (OANDA, LMAX, FXCM), crypto (Binance, Coinbase, Kraken, Deribit, BitMEX), azioni e futures (Interactive Brokers, Alpaca, TradeStation, Polygon, Rithmic, IQFeed), prediction market (Kalshi, Polymarket), provider di dati e database (Alpha Vantage, Intrinio, Trading Economics, Postgres, ClickHouse, Qdrant) e feed social (X, YouTube, Discord, Telegram, Spotify).',
        },
        {
          q: 'Cosa sono bot e agenti?',
          a: 'I bot sono automazioni cloud che monitorano i tuoi dati e inviano segnali e avvisi ai tuoi widget anche quando la scheda è chiusa — descrivi un avviso con parole semplici o impostalo visivamente con soglie, variazione %, incroci di medie mobili e nuovi trade in un conto broker collegato. Gli agenti sono AI con un harness completo (modello, memoria, skill, strumenti, conoscenza, trigger) — progetta il tuo nel visual harness builder oggi; il deploy cloud e l’assistente Copilot sono in arrivo.',
        },
        {
          q: 'C’è una community e un marketplace?',
          a: 'La community è attiva — crea un account gratuito, rivendica il tuo @handle pubblico, segui i maker, pubblica nel feed e condividi widget che altri possono aggiungere direttamente alla loro libreria. Un marketplace per comprare e vendere widget e segnali di strategia verificati su cui guadagnare sono i prossimi in arrivo.',
        },
        {
          q: 'Cosa sono XP e ricompense?',
          a: 'Nexow sta aggiungendo un livello gamificato agli account: costruire widget, eseguire bot e condividere con la community farà guadagnare XP e sbloccherà badge per i traguardi — e i traguardi si convertiranno in crediti ricompensa da spendere in utilizzo AI. Sta arrivando presto; gli account iniziali sono i primi in fila.',
        },
        {
          q: 'Quanto costa?',
          a: 'Gratis per sempre per costruire — in locale con la tua chiave, oppure con 10.000 crediti AI riservati su un account gratuito. I piani a pagamento (Supporter e Sponsor) aggiungono crediti mensili e limiti più alti per bot e agenti, e Partner è per i team che hanno bisogno di infrastruttura privata. Il checkout a pagamento è in arrivo; vedi la pagina dei piani.',
        },
        {
          q: 'Quale modello AI alimenta Nexow?',
          a: 'Nexow genera con i modelli Claude di Anthropic tramite l’SDK Anthropic — Claude Opus 4.8 di default, con Sonnet 4.6 e Haiku 4.5 per una generazione più veloce ed economica. In modalità privata fornisci la tua chiave, così mantieni il pieno controllo di utilizzo e costi.',
        },
      ],
    },
    cta: {
      title: 'Costruisci il tuo primo widget nel prossimo minuto',
      subtitle: 'L’anteprima è attiva e gratuita da provare. Nessuna registrazione, nessuna configurazione — basta descrivere ciò che vuoi vedere.',
      primary: 'Avvia Nexow',
      secondary: 'Esplora le funzionalità',
    },
  },
  features: {
    meta: {
      title: 'Funzionalità — Nexow',
      description:
        'Generazione di widget in linguaggio naturale, un runtime sandbox, un canvas libero con gruppi e link, oltre 28 connettori di dati di mercato, bot e agenti cloud, una community di maker con ricompense XP, modalità locale privata e una libreria di widget versionata. Esplora tutto ciò che fa Nexow.',
    },
    hero: {
      badge: 'Funzionalità',
      title: 'Tutto ciò che serve per costruire dashboard di mercato con le parole',
      subtitle:
        'Nexow trasforma una frase in un widget funzionante e collegato ai dati — poi ti offre il canvas, i connettori, le automazioni cloud e la rete per costruire una vera postazione di lavoro.',
    },
    groups: [
      {
        title: 'Genera',
        body: 'Descrivi ciò che vuoi vedere; Nexow lo scrive e lo esegue.',
        items: [
          { icon: 'sparkles', title: 'Generazione di codice in linguaggio naturale', body: 'Descrivi un widget e Nexow ne genera l’intero codice sorgente con Claude — grafici, tabelle, heatmap, order book, segnali personalizzati.' },
          { icon: 'wand', title: 'Perfeziona conversando', body: 'Cambia qualsiasi cosa chiedendo. “Aggiungi una EMA 200”, “passa a scala logaritmica”, “colora in base al funding rate” — Nexow modifica il widget sul posto.' },
          { icon: 'history', title: 'Versionato e ispezionabile', body: 'Ogni generazione è versionata con log. Torna indietro, confronta e leggi il codice esatto in esecuzione in ogni widget.' },
        ],
      },
      {
        title: 'Esegui',
        body: 'Un runtime sicuro e veloce per il codice generato.',
        items: [
          { icon: 'shield', title: 'Iframe in sandbox', body: 'I widget vengono eseguiti in iframe isolati con un confine rigoroso — il codice generato può renderizzare e recuperare dati, ma non può toccare il tuo workspace o altri widget.' },
          { icon: 'bolt', title: 'Dati in tempo reale, in streaming', body: 'I widget si abbonano a prezzi, order book e dati di riferimento in tempo reale con latenza minima.' },
          { icon: 'layers', title: 'Canvas libero e workspace', body: 'Disponi i widget su un canvas libero, raggruppali in workspace e schermate e passa da un setup all’altro all’istante.' },
          { icon: 'link', title: 'Gruppi e Links', body: 'Raccogli i widget in gruppi con layout a mosaico o a schede, e collegali tra loro con i Links — canali unidirezionali o bidirezionali che fanno fluire i dati di un widget in un altro.' },
        ],
      },
      {
        title: 'Connetti',
        body: 'Dati modulari dai venue che usi davvero.',
        items: [
          { icon: 'plug', title: 'Oltre 28 connettori di dati di mercato', body: 'FX, crypto, azioni, futures, opzioni e prediction market — OANDA, Binance, Coinbase, IBKR, Polygon, Kalshi, Polymarket e altri.' },
          { icon: 'globe', title: 'Diretto dal browser dove possibile', body: 'Dove il CORS lo consente, le chiamate autenticate ai venue partono direttamente dal tuo browser e bypassano completamente il nostro proxy.' },
          { icon: 'database', title: 'Anche database e social', body: 'Punta i widget su Postgres, ClickHouse o Qdrant, oppure attingi da X, YouTube, Discord e Telegram accanto ai mercati in tempo reale.' },
        ],
      },
      {
        title: 'Automatizza',
        body: 'Automazioni cloud e AI che agiscono mentre sei via.',
        items: [
          { icon: 'bot', title: 'Bot cloud', body: 'Descrivi un avviso o impostalo visivamente — soglie, variazione %, incroci di MA, riepiloghi o nuovi trade in un conto broker collegato. I bot girano su un heartbeat cloud e inviano segnali ai tuoi widget, a scheda chiusa.' },
          { icon: 'cpu', title: 'Agenti AI', body: 'Agenti con un harness completo — modello, memoria, skill, strumenti, conoscenza e trigger. Costruisci il tuo nel visual harness builder e distribuiscilo nel cloud — con permessi degli strumenti e una cronologia delle esecuzioni in tempo reale.' },
          { icon: 'chat', title: 'Copilot', body: 'Un assistente per il tuo workspace: allega lo screenshot o i dati di un widget e chiedigli di spiegare, riassumere o suggerire la prossima modifica — in conversazioni parallele che continuano a costruire in background.' },
        ],
      },
      {
        title: 'Rete',
        body: 'Costruisci insieme a un mondo di maker.',
        items: [
          { icon: 'users', title: 'Community', body: 'Segui i maker, pubblica nel feed e condividi widget che altri possono aggiungere direttamente alla loro libreria — attivo oggi, con profili maker pubblici.' },
          { icon: 'store', title: 'Marketplace', body: 'Pubblica e installa widget pronti all’uso, temi, schermate e bot — attivo oggi, con una lineage che dà credito a ogni remake. Comprare e vendere arriva dopo.' },
          { icon: 'signal', title: 'Segnali di strategia', body: 'Pubblica track record verificati, abbonati ai segnali di cui ti fidi e guadagna sulle strategie che esegui. In arrivo.' },
          { icon: 'trophy', title: 'Reputazione e medaglie', body: 'Guadagna punti reputazione costruendo e condividendo, sblocca traguardi progressivi e medaglie rare — attivo oggi. I crediti ricompensa arrivano dopo.' },
        ],
      },
      {
        title: 'Possiedi',
        body: 'Privato di default, tuo per sempre.',
        items: [
          { icon: 'lock', title: 'Modalità locale privata', body: 'Porta la tua chiave Anthropic e genera widget lato client. Nulla viene inviato ai nostri server — nessun account richiesto.' },
          { icon: 'sync', title: 'Sincronizzazione cloud opzionale', body: 'Crea un account gratuito per sincronizzare workspace, widget e impostazioni su ogni dispositivo — con un vault di credenziali crittografato.' },
          { icon: 'library', title: 'Libreria riutilizzabile', body: 'Salva qualsiasi widget nella tua libreria e inseriscilo in qualsiasi dashboard con un clic.' },
        ],
      },
    ],
  },
  plansPage: {
    meta: {
      title: 'Piani — Nexow',
      description:
        'Gratis per sempre per costruire — in locale con la tua chiave, oppure con 10.000 crediti AI riservati su un account gratuito. Confronta Free, Supporter, Sponsor e Partner per crediti, bot, agenti e personalizzazione.',
    },
    hero: {
      badge: 'Piani',
      title: 'Gratis per iniziare. Spazio per crescere.',
      subtitle:
        'Costruisci gratis — gira in locale con la tua chiave, oppure registrati per riservare 10.000 crediti AI. Fai l’upgrade quando hai bisogno di più capacità, automazione e rifinitura.',
    },
    comingSoon:
      'Il checkout di Supporter e Sponsor è in arrivo, e i crediti della piattaforma verranno lanciati insieme. Oggi sono tutti su Free — crea un account per essere tra i primi quando apre la fatturazione.',
    highlights: {
      title: 'Cosa cresce con il tuo piano',
      items: [
        {
          icon: 'coins',
          title: 'Crediti AI',
          body: 'Alimentano la generazione dei widget, le risposte del Copilot e la logica dei bot. Free riserva 10K per iniziare; i piani a pagamento si rinnovano ogni mese.',
        },
        {
          icon: 'bot',
          title: 'Bot e agenti',
          body: 'I bot monitorano i mercati e attivano azioni. Gli agenti eseguono workflow multi-step. I piani superiori alzano i limiti di esecuzione simultanea.',
        },
        {
          icon: 'sparkles',
          title: 'Personalizzazione',
          body: 'Colori d’accento, loghi e UI premium si sbloccano man mano che fai l’upgrade — rendi Nexow davvero tuo.',
        },
      ],
    },
    included: {
      title: 'Incluso in ogni piano',
      items: [
        'Schermate, workspace e widget illimitati',
        'Oltre 28 connettori di dati di mercato attivi',
        'Runtime dei widget in sandbox',
        'Copilot globale (in arrivo)',
        'Accesso a community e marketplace',
      ],
    },
    billing: { monthly: 'Mensile', yearly: 'Annuale', save: '2 mesi gratis' },
    tiers: [
      {
        name: 'Free',
        tagline: 'Tutto ciò che ti serve per costruire.',
        priceMonthly: '0 €',
        priceYearly: '0 €',
        cadence: 'per sempre',
        stats: ['10K crediti', '10 bot', '3 agenti'],
        cta: 'Inizia gratis',
        ctaHref: 'https://x.nexow.ai',
        features: [
          '10.000 crediti AI riservati alla registrazione',
          'Schermate, workspace e widget illimitati',
          'Connessioni browser illimitate',
          'Sincronizzazione cloud cross-device',
          'Copilot globale (in arrivo)',
          'Accesso a community e marketplace',
        ],
      },
      {
        name: 'Supporter',
        tagline: 'Per i maker che vogliono più spazio.',
        priceMonthly: '9,99 €',
        priceYearly: '8,33 €',
        billedYearly: '99,90 € /anno',
        cadence: '/mese',
        badge: 'In arrivo',
        stats: ['50K crediti/mese', '30 bot', '10 agenti'],
        note: 'Tutto ciò che c’è in Free, più:',
        cta: 'Diventa Supporter',
        ctaHref: 'https://x.nexow.ai',
        features: [
          '50.000 crediti ogni mese',
          'Fino a 30 bot e 10 agenti',
          'Un Copilot per workspace',
          'Secondo colore d’accento (gradiente)',
          'Opzioni esclusive di UI e aspetto',
        ],
      },
      {
        name: 'Sponsor',
        tagline: 'Per i power user che passano al pro.',
        priceMonthly: '69,99 €',
        priceYearly: '58,33 €',
        billedYearly: '699,90 € /anno',
        cadence: '/mese',
        badge: 'Miglior ritorno',
        stats: ['800K crediti/mese', '300 bot', '100 agenti'],
        note: 'Tutto ciò che c’è in Supporter, più:',
        cta: 'Diventa Sponsor',
        ctaHref: 'https://x.nexow.ai',
        featured: true,
        features: [
          '800.000 crediti ogni mese',
          'Fino a 300 bot e 100 agenti',
          'Connessioni personalizzate (Connector Builder)',
          'Un Copilot per schermata',
          'Carica il tuo logo',
          'Personalizzazioni UI premium',
        ],
      },
      {
        name: 'Partner',
        tagline: 'Per i team che hanno bisogno di tutto.',
        priceMonthly: 'Su misura',
        priceYearly: 'Su misura',
        cadence: '',
        stats: ['Infra privata', 'White-glove', 'SLA'],
        note: 'Tutto ciò che c’è in Sponsor, più:',
        cta: 'Contattaci',
        ctaHref: 'mailto:partners@nexow.ai',
        features: [
          'Infrastruttura privata',
          'Configurazione white-glove',
          'Sviluppo personalizzato di prima classe',
          'Branding e personalizzazione su misura',
          'Supporto dedicato',
        ],
      },
    ],
    faqTitle: 'Domande sui piani',
    faq: [
      { q: 'Nexow è davvero gratis?', a: 'Sì. Puoi costruire gratis per sempre — gira totalmente in locale con la tua chiave Anthropic (paghi solo il tuo utilizzo dell’API), oppure crea un account gratuito che riserva 10.000 crediti AI per quando aprirà la modalità piattaforma, così non serve una chiave tua.' },
      { q: 'Cosa sono i crediti?', a: 'I crediti misurano l’utilizzo dell’AI — la generazione di widget, link, bot e le risposte del Copilot. L’account gratuito ne riserva 10.000 per iniziare, e i piani a pagamento garantiscono un’allocazione mensile (50K su Supporter, 800K su Sponsor). La misurazione dei crediti entra in funzione con la modalità piattaforma, e puoi acquistarne altri in qualsiasi momento.' },
      { q: 'Quando vengono lanciati i piani a pagamento?', a: 'Supporter e Sponsor sono definiti e mostrati nell’app, ma il checkout a pagamento è in arrivo. Oggi sono tutti su Free — crea un account per essere tra i primi quando apre la fatturazione.' },
      { q: 'Posso pagare annualmente?', a: 'Sì. La fatturazione annuale ti dà due mesi gratis rispetto al pagamento mensile. Puoi passare da mensile ad annuale in qualsiasi momento.' },
    ],
  },
  connectorsPage: {
    meta: {
      title: 'Connettori — Nexow',
      description:
        'Sfoglia ogni connettore Nexow — 28 attivi e 56 nel catalogo. Broker, exchange, DEX, prediction market, provider di dati, database e feed social. Cerca, filtra e connetti.',
    },
    hero: {
      badge: 'Connettori',
      title: 'Ogni mercato, un solo canvas',
      subtitle:
        'Cerca nel catalogo completo dei venue a cui Nexow si connette — broker, exchange, provider di dati, database e social. I connettori attivi funzionano oggi; gli altri sono in arrivo.',
    },
    searchPlaceholder: 'Cerca connettori…',
    filters: 'Filtri',
    all: 'Tutti',
    categories: { finance: 'Finanza', data: 'Dati', socials: 'Social' },
    status: { all: 'Tutti', live: 'Attivi', soon: 'In arrivo' },
    kinds: {
      broker: 'Broker',
      exchange: 'Exchange',
      prediction: 'Prediction market',
      dex: 'DEX',
      aggregator: 'Aggregatore',
      data: 'Dati di mercato',
      sql: 'Database SQL',
      nosql: 'Database NoSQL',
      warehouse: 'Data warehouse',
      vector: 'Database vettoriale',
      messaging: 'Messaggistica',
      social: 'Social network',
      video: 'Video',
      community: 'Community',
      music: 'Musica',
    },
    assets: {
      equities: 'Azioni',
      indices: 'Indici',
      fixed_income: 'Reddito fisso',
      fx: 'FX',
      commodities: 'Materie prime',
      crypto: 'Crypto',
      volatility: 'Volatilità',
      prediction_markets: 'Prediction',
    },
    visit: 'Visita il sito',
    results: '{n} connettori',
    empty: 'Nessun connettore corrisponde alla tua ricerca.',
    exploreCta: 'Esplora tutti i connettori',
    countLive: 'attivi',
    countCatalog: 'nel catalogo',
  },
  about: {
    meta: {
      title: 'Chi siamo — Nexow',
      description:
        'Nexow sta costruendo una postazione di lavoro AI-native per i mercati: descrivi qualsiasi widget in linguaggio naturale e ottieni una dashboard funzionante e collegata ai dati. Privata di default. Scopri la nostra missione.',
    },
    hero: {
      badge: 'Chi siamo',
      title: 'Una postazione di lavoro AI-native per i mercati',
      subtitle:
        'Pensiamo che costruire una dashboard di trading dovrebbe essere veloce quanto descriverla. Nexow trasforma il linguaggio naturale in widget funzionanti e collegati ai dati — e ti lascia il controllo delle tue chiavi e dei tuoi dati.',
    },
    missionTitle: 'Perché stiamo costruendo Nexow',
    mission: [
      'Ogni trader e analista finisce per ricostruire a mano gli stessi grafici, tabelle e monitor — incollando insieme API, gestendo websocket e lottando con il layout. Gli strumenti sono potenti ma lenti, e i migliori sono chiusi dietro piattaforme pesanti.',
      'Nexow ribalta tutto questo. Descrivi ciò che vuoi vedere e un’AI scrive un widget reale e funzionante — in sandbox, versionato e collegato ai dati in tempo reale dei venue che già usi. La dashboard si assembla da sola, e tu la perfezioni in linguaggio naturale.',
      'Lo stiamo costruendo con la privacy al primo posto: gira totalmente in locale con la tua chiave, tieni i tuoi dati nel tuo browser e connettiti direttamente ai venue dove possibile. Man mano che aggiungiamo agenti di trading, componenti server e un livello community, quel principio resta fisso — le tue chiavi, i tuoi dati, la tua macchina.',
    ],
    valuesTitle: 'Cosa apprezziamo',
    values: [
      { icon: 'lock', title: 'Privato di default', body: 'Local-first, bring-your-own-key, nessun dato che lascia la tua macchina a meno che tu non lo scelga.' },
      { icon: 'bolt', title: 'Velocità verso l’insight', body: 'Da una frase a un widget in tempo reale in pochi secondi — il percorso più breve tra una domanda e un grafico.' },
      { icon: 'shield', title: 'Sicuro per costruzione', body: 'Il codice generato gira in sandbox con un confine rigoroso, così la potenza non significa mai rischio.' },
      { icon: 'globe', title: 'Aperto a ogni mercato', body: 'FX, crypto, azioni, futures, opzioni e prediction market — un solo canvas per tutti.' },
    ],
    ctaTitle: 'Guardalo con i tuoi occhi',
    ctaBody: 'L’anteprima è attiva. Descrivi un widget e guarda Nexow costruirlo.',
    cta: 'Avvia l’app',
  },
  blog: {
    meta: {
      title: 'Blog — Nexow',
      description:
        'Guide e approfondimenti sulla costruzione di dashboard di mercato con l’AI, sulla connessione ai dati in tempo reale e sugli strumenti di trading — dal team di Nexow.',
    },
    title: 'Il blog di Nexow',
    subtitle: 'Costruire strumenti di mercato AI-native — guide, approfondimenti e note di prodotto.',
    latest: 'Ultimi',
    readMore: 'Leggi l’articolo',
    backToBlog: 'Torna al blog',
    published: 'Pubblicato',
    updated: 'Aggiornato',
    minRead: 'min di lettura',
  },
  notFound: {
    title: 'Questa pagina è scivolata fuori dal canvas',
    body: 'La pagina che cerchi non esiste — ma la tua prossima dashboard potrebbe.',
    cta: 'Torna alla home',
  },
  privacyPage: {
    badge: 'Privacy',
    title: 'Informativa sulla privacy',
    subtitle: 'Come Nexow gestisce i tuoi dati — versione breve: il meno possibile.',
    meta: {
      title: 'Informativa sulla privacy — Nexow',
      description: 'Nexow è privato di default. Scopri come gestiamo dati, chiavi e connessioni.',
    },
    updated: 'Ultimo aggiornamento: 1 luglio 2026',
    sections: [
      { h: 'Privato di default', p: 'Nexow gira totalmente in locale di default. In modalità privata fornisci la tua chiave API Anthropic e la generazione dei widget avviene interamente nel tuo browser. I tuoi prompt e il codice generato vengono inviati dal tuo browser direttamente ad Anthropic — non attraverso i nostri server.' },
      { h: 'Cosa archiviamo', p: 'I tuoi widget, versioni, log e libreria sono archiviati nel tuo browser tramite IndexedDB. Restano sul tuo dispositivo e non vengono caricati su Nexow. Cancellando l’archiviazione del browser li rimuovi definitivamente.' },
      { h: 'Connessioni ai dati di mercato', p: 'Dove un venue lo consente, Nexow si connette ad esso direttamente dal tuo browser, e le tue credenziali del venue vengono usate solo per comunicare con quel venue. Alcuni venue richiedono l’instradamento attraverso un proxy leggero; in quei casi passa solo il minimo dei dati necessari a soddisfare la richiesta.' },
      { h: 'Questo sito web', p: 'Questo sito di marketing è un sito statico. Manteniamo le analitiche al minimo e rispettose della privacy, e non vendiamo dati personali. I link in uscita (come quello all’app) sono chiaramente segnalati.' },
      { h: 'Contatti', p: 'Domande sulla privacy? Scrivi a hello@nexow.ai.' },
    ],
  },
};
