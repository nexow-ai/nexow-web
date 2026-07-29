export default {
  meta: {
    title: 'Community — Nexow',
    description:
      'Nexow è uno spazio social per maker: post interattivi, board di research, dashboard live, un marketplace in USDC su Solana e una DAO che lascerà alla community guidare la roadmap.',
  },
  hero: {
    badge: 'Community',
    titleLead: 'Una social app per',
    titleGradient: 'maker che shippano',
    titleTail: 'lavoro vero.',
    subtitle:
      'Condividi widget interattivi, research e dashboard. Segui i maker, chatta in tempo reale, pubblica su un marketplace liquidato in USDC su Solana — e fai crescere una community che si moltiplica.',
    ctaPrimary: 'Unisciti alla community',
    ctaSecondary: 'Esplora il marketplace',
    chips: ['Feed live', 'Board e dashboard', 'USDC su Solana', 'DAO in arrivo'],
  },
  social: {
    eyebrow: 'Feed social',
    title: 'Post che girano davvero — non solo screenshot.',
    subtitle:
      'Il feed è pensato per i builder. Condividi un widget, un’immagine, un video o una nota di research; altri possono mettere like, commentare, remake e installare ciò che shippi.',
    items: [
      { icon: 'sparkles', title: 'Post con widget interattivi', body: 'Allega un widget live a un post. Chi guarda lo anteprima nel feed e lo aggiunge alla libreria — con lineage che accredita il tuo lavoro.' },
      { icon: 'chat', title: 'Like, commenti e menzioni', body: 'Risposte in thread, reazioni e una inbox per le menzioni così le conversazioni restano sul post — non sparse nei DM.' },
      { icon: 'mail', title: 'Chat in tempo reale', body: 'DM 1:1 e di gruppo con presenza e reazioni, da Account o dal dock — amici e contatti a un clic.' },
      { icon: 'users', title: 'Profili maker pubblici', body: 'Rivendica il tuo @handle, fissa i post, mostra le board e lascia che la gente segua ciò che pubblichi.' },
    ],
  },
  research: {
    eyebrow: 'Research e dashboard',
    title: 'Raccogli le fonti. Monta la scrivania. Tienila live.',
    subtitle:
      'Le board tengono la traccia di research — link, media e widget. Dashboard e screen la trasformano in una scrivania di lavoro che puoi condividere o remakeare.',
    items: [
      { icon: 'library', title: 'Board di profilo', body: 'Moodboard per maker: lascia widget, carica media, fissa post dal feed e salva link da TikTok, YouTube, articoli e ovunque.' },
      { icon: 'link', title: 'Condividi su Nexow', body: 'Installa la PWA o usa lo share target — un URL atterra su una board con anteprima, pronto per il canvas.' },
      { icon: 'layers', title: 'Dashboard, screen e workspace', body: 'Disponi widget live su un canvas libero, raggruppali in screen e workspace e cambia setup senza ricostruire da zero.' },
      { icon: 'bolt', title: 'Apri una board sul canvas', body: 'Trasforma i link salvati in embed live sulla dashboard in un’azione — la research resta collegata agli strumenti che la usano.' },
    ],
  },
  grow: {
    eyebrow: 'Fai crescere la rete',
    title: 'Reputazione che segue il lavoro che condividi.',
    subtitle:
      'Costruire, shippare e aiutare gli altri fa guadagnare punti, medaglie e livelli sul profilo pubblico — la stessa superficie di reputazione su Free e sui piani a pagamento.',
    items: [
      { icon: 'trophy', title: 'Punti, medaglie e livelli', body: 'Guadagna reputazione per widget, bot, share e attività social. Sblocca achievement a livelli e medaglie rare visibili sul profilo.' },
      { icon: 'signal', title: 'Scopri e segui', body: 'Sfoglia il feed Discover, filtra per widget, immagini o video, cerca persone e post e segui i maker di cui vuoi il lavoro nello stream.' },
      { icon: 'award', title: 'Contatti che si moltiplicano', body: 'I follow reciproci diventano contatti. Chat di gruppo, menzioni e una rete condivisa fanno sembrare la collaborazione un prodotto — non un canale a parte.' },
      { icon: 'globe', title: 'Un account gratis lo sblocca', body: 'Sync cloud, crediti iniziali, feed, marketplace e reputazione arrivano con un account gratis. Nessuna carta per iniziare.' },
    ],
  },
  referrals: {
    eyebrow: "Referral",
    badge: "In arrivo",
    title: "Fai crescere la rete. Guadagna quando compone.",
    subtitle: "Invita maker che shippano — e guadagna quando nuovi follower entrano nella tua orbita.",
    body: "Le reward da referral e i bonus follower sono il prossimo passo sulla pista community. Rivendica il tuo handle ora per essere pronto quando il ledger sarà live.",
    pillars: [
      { icon: "gift", title: "Guadagna sui referral", body: "Condividi il tuo invite. Quando qualcuno che porti costruisce, shippa o fa upgrade, guadagni una quota dell’upside." },
      { icon: "users", title: "Guadagna dai nuovi follower", body: "Attira audience e vieni premiato mentre la rete cresce — reputazione che paga in entrambe le direzioni." },
      { icon: "sparkles", title: "Crediti e poi NEXO", body: "Le prime reward arrivano come crediti; i bonus legati a NEXO si sbloccano con la DAO. Stessa reputazione, nuovi modi di guadagnare." },
    ],
    cta: "Rivendica il tuo handle",
  },
  marketplace: {
    eyebrow: 'Marketplace',
    title: 'Pubblica una volta. Vendi in USDC. Conserva il lineage.',
    subtitle:
      'Un solo dialogo di share copre widget, screen, workspace, bot, agent e temi — gratis da installare, o prezzati in USDC e liquidati su Solana.',
    intro:
      'Nexow non custodia mai i soldi. Una vendita è un trasferimento SPL diretto dal wallet dell’acquirente al tuo. La piattaforma verifica la chain, sblocca l’asset e conserva solo la contabilità di cui entrambe le parti hanno bisogno per fidarsi del risultato.',
    pillars: [
      { icon: 'store', title: 'Un dialogo, sei tipi', body: 'Condividi da Libreria, Bot, Agent o Temi. Scegli gratis o un prezzo USDC, aggiungi descrizione e tag e, opzionalmente, annuncia nel feed.' },
      { icon: 'history', title: 'Lineage su ogni remake', body: 'Se pubblichi un remake, il dialogo nomina da chi discende il lavoro prima che esca. Il credito non è mai qualcosa che scopri dopo.' },
      { icon: 'shield', title: 'Niente escrow, niente cut', body: 'Phantom firma il trasferimento USDC. Nexow non trattiene fondi e non prende una cut — verifica solo la ricevuta on-chain prima di sbloccare l’install.' },
      { icon: 'check', title: 'Gli update restano all’acquirente', body: 'Comprare una versione ti dà diritto alle versioni successive dello stesso autore. Il remake di qualcun altro è un prodotto separato, con il suo prezzo.' },
    ],
    railTitle: 'Come funziona un acquisto in USDC',
    railBody:
      'I prezzi sono quotati in USDC su Solana. Il server crea l’ordine; il tuo wallet paga; la chain deve concordare prima dello sblocco.',
    railSteps: [
      { n: '01', title: 'Crea l’ordine', body: 'Il checkout chiede al server prezzo e wallet del venditore — il client non inventa mai l’importo.' },
      { n: '02', title: 'Paga con Phantom', body: 'Il wallet firma un trasferimento USDC con l’id ordine nel memo e lo trasmette su Solana.' },
      { n: '03', title: 'Verifica on-chain', body: 'Nexow rilegge la transazione: confermata, memo corrispondente, saldo USDC del venditore aumentato dell’importo quotato, mint corretto.' },
      { n: '04', title: 'Installa ciò che hai comprato', body: 'Si sblocca l’entitlement. Installa widget, tema, bot o agent — le anteprime a pagamento restano bloccate fino al settlement.' },
    ],
    railNotes: [
      'Le ricevute si salvano in locale appena il wallet restituisce una firma — se la scheda si chiude a metà, «Completa acquisto» riprende senza pagare due volte.',
      'I bot installati arrivano in pausa; gli agent undeployed; i temi non si applicano mai da soli. Il primo run è sempre una tua scelta.',
      'Il privato non viaggia: prompt, cronologia chat, id di connessione, indirizzi wallet e memoria agent restano con l’autore.',
    ],
    kindsTitle: 'Cosa puoi pubblicare',
    kinds: [
      { label: 'Widget', body: 'Il codice della versione attiva — sandboxato e remakeabile.' },
      { label: 'Screen e workspace', body: 'Geometria, codice widget e link come una scrivania portatile.' },
      { label: 'Bot', body: 'Processor, params e schedule — arriva in pausa per l’acquirente.' },
      { label: 'Agent', body: 'Modello, skill, grant di tool e cadenza — undeployed finché non collegano i loro.' },
      { label: 'Temi', body: 'Colori, font, radius e densità — in libreria, mai forzati.' },
    ],
  },
  dao: {
    eyebrow: 'Governance',
    badge: 'In arrivo',
    title: 'Possiedi la roadmap con la Nexow DAO.',
    subtitle:
      'NEXO è il token di governance. Guadagnalo costruendo e shippando; spendilo proponendo, votando e guidando un tesoro condiviso.',
    body:
      'Il tab DAO è già nel pannello community come teaser — ballot reali, tesoro e reward ai creator arrivano dopo. Intanto reputazione e medaglie sono live così i maker early partono avanti.',
    pillars: [
      { icon: 'lightbulb', title: 'Proporre', body: 'Proponi feature, connector e regole. Chiunque detenga NEXO può mettere un’idea in urna.' },
      { icon: 'vote', title: 'Votare', body: 'Voti pubblici e trasparenti decidono cosa si costruisce dopo e in che ordine.' },
      { icon: 'vault', title: 'Tesoro', body: 'Un tesoro condiviso finanzia bounty e grant che la community vota.' },
      { icon: 'gift', title: 'Reward ai creator', body: 'I builder guadagnano una quota quando la DAO shippa e promuove il loro lavoro.' },
    ],
    previewTitle: 'Prime urne',
    previewBadge: 'Anteprima',
    forLabel: '{pct}% a favore',
    votesLabel: '{n} voti',
    proposals: [
      { title: 'Finanziare un programma di bounty sui widget', tag: 'Tesoro', pct: 72, votes: 341 },
      { title: 'Revenue share per i creator del marketplace', tag: 'Reward', pct: 87, votes: 512 },
      { title: 'Open-source del runtime dei widget', tag: 'Roadmap', pct: 64, votes: 289 },
      { title: "Abbassare la soglia proposte NEXO a 1.000", tag: "Governance", pct: 58, votes: 203 },
      { title: "Tagliare le fee marketplace Solana al 2,5%", tag: "Fee", pct: 81, votes: 456 },
      { title: "Eleggere i moderator dei research board", tag: "Moderazione", pct: 69, votes: 318 },
    ],
    footer: 'Plasmata in aperto con la community — i dettagli atterrano prima nel tab DAO.',
  },
  cta: {
    title: 'Rivendica il tuo @handle e shippa qualcosa.',
    subtitle: 'Account gratis. Feed live. Marketplace con USDC. Poi la DAO.',
    primary: 'Avvia Nexow',
    secondary: 'Vedi tutte le funzionalità',
  },
};
