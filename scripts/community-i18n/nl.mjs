export default {
  meta: {
    title: 'Community — Nexow',
    description:
      'Nexow is een sociale workspace voor makers: interactieve posts, research-boards, live dashboards, een USDC-marketplace op Solana, en een DAO waarmee de community de roadmap stuurt.',
  },
  hero: {
    badge: 'Community',
    titleLead: 'Een social app voor',
    titleGradient: 'makers die shippen',
    titleTail: 'echt werk.',
    subtitle:
      'Deel interactieve widgets, research en dashboards. Volg makers, chat realtime, publiceer op een marketplace die in USDC op Solana afrekent — en groei een community die zich versterkt.',
    ctaPrimary: 'Word lid van de community',
    ctaSecondary: 'Marketplace verkennen',
    chips: ['Live feed', 'Boards & dashboards', 'USDC op Solana', 'DAO binnenkort'],
  },
  social: {
    eyebrow: 'Sociale feed',
    title: 'Posts die echt draaien — niet alleen screenshots.',
    subtitle:
      'De feed is gebouwd voor builders. Deel een widget, afbeelding, video of research-notitie; anderen kunnen liken, reageren, remaken en installeren wat je shippt.',
    items: [
      { icon: 'sparkles', title: 'Interactieve widget-posts', body: 'Hang een live widget aan een post. Viewers zien de preview in de feed en voegen ’m direct toe aan hun bibliotheek — met lineage die jouw werk crediteert.' },
      { icon: 'chat', title: 'Likes, comments & mentions', body: 'Threaded replies, reacties en een inbox voor mentions zodat gesprekken bij de post blijven — niet verspreid over DM’s.' },
      { icon: 'mail', title: 'Realtime chats', body: '1:1- en groeps-DM’s met presence en reacties, vanuit Account of de dock — vrienden en contacten één klik weg.' },
      { icon: 'users', title: 'Publieke maker-profielen', body: 'Claim je @handle, pin posts, toon je boards en laat mensen het werk volgen dat je publiceert.' },
    ],
  },
  research: {
    eyebrow: 'Research & dashboards',
    title: 'Bronnen verzamelen. Het bureau bouwen. Live houden.',
    subtitle:
      'Boards houden het research-spoor bij — links, media en widgets. Dashboards en screens maken daar een werkdesk van die je kunt delen of remaken.',
    items: [
      { icon: 'library', title: 'Profielboards', body: 'Moodboards voor makers: drop widgets, upload media, pin posts uit de feed en bewaar links van TikTok, YouTube, artikelen en overal.' },
      { icon: 'link', title: 'Delen naar Nexow', body: 'Installeer de PWA of gebruik het share-target — een URL landt met preview op een board, klaar voor je canvas.' },
      { icon: 'layers', title: 'Dashboards, screens & workspaces', body: 'Rangschik live widgets op een vrije canvas, groepeer ze in screens en workspaces, en wissel van setup zonder opnieuw te beginnen.' },
      { icon: 'bolt', title: 'Open een board op de canvas', body: 'Maak van opgeslagen links live embeds op je dashboard in één actie — research blijft gekoppeld aan de tools die ’t gebruiken.' },
    ],
  },
  grow: {
    eyebrow: 'Het netwerk laten groeien',
    title: 'Reputatie die het werk volgt dat je deelt.',
    subtitle:
      'Bouwen, shippen en anderen helpen levert punten, medailles en levels op je publieke profiel — dezelfde reputatielaag op Free en betaalde plannen.',
    items: [
      { icon: 'trophy', title: 'Punten, medailles & levels', body: 'Verdien reputatie voor widgets, bots, shares en sociale activiteit. Ontgrendel gelaagde achievements en zeldzame medailles op je profiel.' },
      { icon: 'signal', title: 'Ontdekken & volgen', body: 'Blader door de Discover-feed, filter op widgets, afbeeldingen of video, zoek mensen en posts, en volg makers wiens werk je in je stream wilt.' },
      { icon: 'award', title: 'Contacten die zich versterken', body: 'Wederzijdse follows worden contacten. Groepschats, mentions en een gedeeld netwerk maken samenwerking tot een product — geen zij-kanaal.' },
      { icon: 'globe', title: 'Eén gratis account ontsluit het', body: 'Cloud-sync, startercredits, feed, marketplace en reputatie komen met een gratis account. Geen kaart nodig om te starten.' },
    ],
  },
  marketplace: {
    eyebrow: 'Marketplace',
    title: 'Publiceer één keer. Verkoop in USDC. Houd de lineage.',
    subtitle:
      'Eén share-dialoog dekt widgets, screens, workspaces, bots, agents en themes — gratis te installeren, of geprijsd in USDC en afgerekend op Solana.',
    intro:
      'Nexow custodieert nooit het geld. Een verkoop is een directe SPL-token-transfer van de wallet van de koper naar die van jou. Het platform verifieert de chain, ontgrendelt het asset en bewaart alleen de boekhouding die beide kanten nodig hebben om het resultaat te vertrouwen.',
    pillars: [
      { icon: 'store', title: 'Eén dialoog, zes soorten', body: 'Deel vanuit Bibliotheek, Bots, Agents of Themes. Kies gratis of een USDC-prijs, voeg beschrijving en tags toe, en kondig optioneel aan in de feed.' },
      { icon: 'history', title: 'Lineage bij elke remake', body: 'Als je een remake publiceert, noemt de dialoog van wiens werk ’t afstamt vóór er iets shippt. Credit is nooit iets wat je achteraf ontdekt.' },
      { icon: 'shield', title: 'Geen escrow, geen platform-cut', body: 'Phantom tekent de USDC-transfer. Nexow houdt geen funds vast en neemt geen cut — verifieert alleen het on-chain-bewijs vóór install wordt ontgrendeld.' },
      { icon: 'check', title: 'Updates blijven bij de koper', body: 'Een versie kopen geeft recht op latere versies van dezelfde auteur. Iemands anders remake is een apart product met eigen prijs.' },
    ],
    railTitle: 'Hoe een USDC-aankoop werkt',
    railBody:
      'Prijzen worden genoteerd in USDC op Solana. De server maakt de order; jouw wallet betaalt; de chain moet akkoord gaan vóór het asset ontgrendelt.',
    railSteps: [
      { n: '01', title: 'Order aanmaken', body: 'Checkout vraagt de server om prijs en seller-wallet — de client verzint nooit het bedrag.' },
      { n: '02', title: 'Betalen met Phantom', body: 'Je wallet tekent een USDC-transfer met de order-id in de memo en broadcast ’m op Solana.' },
      { n: '03', title: 'On-chain verifiëren', body: 'Nexow leest de transactie terug: bevestigd, passende memo, seller-USDC-saldo omhoog met het genoteerde bedrag, juiste mint.' },
      { n: '04', title: 'Installeer wat je kocht', body: 'Entitlement ontgrendelt. Installeer de widget, theme, bot of agent — betaalde previews blijven vergrendeld tot settlement.' },
    ],
    railNotes: [
      'Bonnen worden lokaal opgeslagen zodra de wallet een handtekening teruggeeft — sluit de tab halverwege, dan hervat «Aankoop afronden» zonder twee keer te betalen.',
      'Geïnstalleerde bots komen gepauzeerd binnen; agents undeployed; themes worden nooit auto-applied. De eerste run is altijd jouw keuze.',
      'Privé reist niet mee: prompts, chathistorie, connection-ids, walletadressen en agentgeheugen blijven bij de auteur.',
    ],
    kindsTitle: 'Wat je kunt publiceren',
    kinds: [
      { label: 'Widgets', body: 'De code van de actieve versie — gesandboxt en remakable.' },
      { label: 'Screens & workspaces', body: 'Geometrie, widgetcode en links als een portable desk.' },
      { label: 'Bots', body: 'Processor, params en schedule — komt voor de koper gepauzeerd binnen.' },
      { label: 'Agents', body: 'Model, skills, tool-grants en cadence — undeployed tot ze hun connections zetten.' },
      { label: 'Themes', body: 'Kleuren, fonts, radius en density — in de bibliotheek, nooit opgedrongen.' },
    ],
  },
  dao: {
    eyebrow: 'Governance',
    badge: 'Binnenkort',
    title: 'Bezit de roadmap met de Nexow DAO.',
    subtitle:
      'NEXO is de governance-token. Verdien ’m door te bouwen en te shippen; geef ’m uit door voorstellen, stemmen en een gedeelde treasury te sturen.',
    body:
      'De DAO-tab zit al als teaser in het community-paneel — echte ballots, treasury en creator-rewards volgen. Tot die tijd zijn reputatie en medailles live zodat vroege makers voorop starten.',
    pillars: [
      { icon: 'lightbulb', title: 'Voorstellen', body: 'Stel features, connectors en regels voor. Wie NEXO houdt, kan een idee op de stemming zetten.' },
      { icon: 'vote', title: 'Stemmen', body: 'Publieke, transparante stemmen bepalen wat als volgende wordt gebouwd en in welke volgorde.' },
      { icon: 'vault', title: 'Treasury', body: 'Een gedeelde treasury financiert bounties en grants die de community instemt.' },
      { icon: 'gift', title: 'Creator-rewards', body: 'Builders verdienen een aandeel wanneer de DAO hun werk shippt en promoot.' },
    ],
    previewTitle: 'Eerste ballots',
    previewBadge: 'Voorbeeld',
    forLabel: '{pct}% voor',
    votesLabel: '{n} stemmen',
    proposals: [
      { title: 'Community widget-bountyprogramma financieren', tag: 'Treasury', pct: 72, votes: 341 },
      { title: 'Omzetaandeel voor marketplace-creators', tag: 'Rewards', pct: 87, votes: 512 },
      { title: 'Widget-runtime open-sourcen', tag: 'Roadmap', pct: 64, votes: 289 },
    ],
    footer: 'Open met de community gevormd — details landen eerst in de DAO-tab.',
  },
  cta: {
    title: 'Claim je @handle en ship iets.',
    subtitle: 'Gratis account. Live feed. Marketplace met USDC. De DAO is next.',
    primary: 'Nexow starten',
    secondary: 'Alle functies bekijken',
  },
};
