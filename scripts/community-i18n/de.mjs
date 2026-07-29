export default {
  meta: {
    title: 'Community — Nexow',
    description:
      'Nexow ist ein sozialer Workspace für Maker: interaktive Posts, Research-Boards, Live-Dashboards, ein USDC-Marketplace auf Solana und eine DAO, mit der die Community die Roadmap steuert.',
  },
  hero: {
    badge: 'Community',
    titleLead: 'Eine Social-App für',
    titleGradient: 'Maker, die shippen',
    titleTail: 'echte Arbeit.',
    subtitle:
      'Teile interaktive Widgets, Research und Dashboards. Folge Makern, chatte in Echtzeit, publiziere in einem Marketplace, der in USDC auf Solana abwickelt — und baue eine Community, die sich verstärkt.',
    ctaPrimary: 'Community beitreten',
    ctaSecondary: 'Marketplace entdecken',
    chips: ['Live-Feed', 'Boards & Dashboards', 'USDC auf Solana', 'DAO demnächst'],
  },
  social: {
    eyebrow: 'Social-Feed',
    title: 'Posts, die wirklich laufen — keine bloßen Screenshots.',
    subtitle:
      'Der Feed ist für Builder gebaut. Teile ein Widget, ein Bild, ein Video oder eine Research-Notiz; andere können liken, kommentieren, remaken und installieren, was du shippst.',
    items: [
      { icon: 'sparkles', title: 'Interaktive Widget-Posts', body: 'Hänge ein Live-Widget an einen Post. Viewer sehen die Vorschau im Feed und fügen es direkt ihrer Bibliothek hinzu — mit Lineage, die deine Arbeit creditiert.' },
      { icon: 'chat', title: 'Likes, Kommentare & Mentions', body: 'Threaded Replies, Reaktionen und ein Inbox für Mentions, damit Gespräche am Post bleiben — nicht über DMs verstreut.' },
      { icon: 'mail', title: 'Echtzeit-Chats', body: '1:1- und Gruppen-DMs mit Presence und Reaktionen, erreichbar aus Account oder Dock — Freunde und Kontakte einen Klick entfernt.' },
      { icon: 'users', title: 'Öffentliche Maker-Profile', body: 'Sichere dir dein @handle, pinne Posts, zeige deine Boards und lass Leute der Arbeit folgen, die du publizierst.' },
    ],
  },
  research: {
    eyebrow: 'Research & Dashboards',
    title: 'Quellen sammeln. Den Desk bauen. Live halten.',
    subtitle:
      'Boards halten die Research-Spur — Links, Media und Widgets. Dashboards und Screens machen daraus einen Arbeitsdesk, den du teilen oder remaken kannst.',
    items: [
      { icon: 'library', title: 'Profil-Boards', body: 'Moodboards für Maker: Widgets ablegen, Media hochladen, Posts aus dem Feed pinnen und Links von TikTok, YouTube, Artikeln und überall speichern.' },
      { icon: 'link', title: 'Share-to-Nexow', body: 'Installiere die PWA oder nutze das Share-Target — eine URL landet mit Preview auf einem Board, bereit für deine Canvas.' },
      { icon: 'layers', title: 'Dashboards, Screens & Workspaces', body: 'Arrangiere Live-Widgets auf einer freien Canvas, gruppiere sie in Screens und Workspaces und wechsle Setups, ohne von vorn anzufangen.' },
      { icon: 'bolt', title: 'Board auf der Canvas öffnen', body: 'Verwandle gespeicherte Links in Live-Embeds auf deinem Dashboard in einer Aktion — Research bleibt an die Tools gekoppelt, die es nutzen.' },
    ],
  },
  grow: {
    eyebrow: 'Netzwerk wachsen lassen',
    title: 'Reputation, die der Arbeit folgt, die du teilst.',
    subtitle:
      'Bauen, Shippen und Helfen bringt Punkte, Medaillen und Levels auf deinem öffentlichen Profil — dieselbe Reputationsebene auf Free und Paid.',
    items: [
      { icon: 'trophy', title: 'Punkte, Medaillen & Levels', body: 'Verdiene Reputation für Widgets, Bots, Shares und Social-Aktivität. Schalte gestufte Achievements und seltene Medaillen frei, die auf deinem Profil sichtbar sind.' },
      { icon: 'signal', title: 'Discover & Follow', body: 'Durchstöbere den Discover-Feed, filtere nach Widgets, Bildern oder Video, suche Personen und Posts und folge Makern, deren Arbeit du in deinem Stream willst.' },
      { icon: 'award', title: 'Kontakte, die sich verstärken', body: 'Gegenseitige Follows werden Kontakte. Gruppenchats, Mentions und ein geteiltes Netzwerk machen Kollaboration zum Produkt — nicht zum Nebenkanal.' },
      { icon: 'globe', title: 'Ein Free-Account schaltet es frei', body: 'Cloud-Sync, Starter-Credits, Feed, Marketplace und Reputation kommen mit einem Free-Account. Keine Karte nötig zum Start.' },
    ],
  },
  referrals: {
    eyebrow: "Referrals",
    badge: "Demnächst",
    title: "Netzwerk wachsen lassen. Verdienen, wenn es compoundet.",
    subtitle: "Lade Maker ein, die shippen — und verdiene, wenn neue Follower in deine Orbit kommen.",
    body: "Referral-Rewards und Follower-Boni sind als Nächstes auf der Community-Spur. Sichere dir jetzt dein Handle, damit du bereit bist, wenn das Ledger live geht.",
    pillars: [
      { icon: "gift", title: "Verdienen mit Referrals", body: "Teile deine Invite. Wenn jemand, den du bringst, baut, shippt oder upgradet, verdienst du einen Anteil am Upside." },
      { icon: "users", title: "Verdienen mit neuen Followern", body: "Ziehe Audience an und werde belohnt, während dein Netzwerk wächst — Reputation, die in beide Richtungen zahlt." },
      { icon: "sparkles", title: "Credits & später NEXO", body: "Frühe Rewards kommen als Credits; NEXO-gebundene Boni öffnen sich mit der DAO. Gleiche Reputation, neue Earn-Wege." },
    ],
    cta: "Handle sichern",
  },
  marketplace: {
    eyebrow: 'Marketplace',
    title: 'Einmal publizieren. In USDC verkaufen. Lineage behalten.',
    subtitle:
      'Ein Share-Dialog deckt Widgets, Screens, Workspaces, Bots, Agents und Themes ab — gratis zu installieren oder in USDC bepreist und auf Solana abgewickelt.',
    intro:
      'Nexow verwahrt nie das Geld. Ein Verkauf ist ein direkter SPL-Token-Transfer vom Wallet des Käufers zu deinem. Die Plattform verifiziert die Chain, schaltet den Asset frei und speichert nur die Buchhaltung, die beide Seiten brauchen, um dem Ergebnis zu vertrauen.',
    pillars: [
      { icon: 'store', title: 'Ein Dialog, sechs Arten', body: 'Teile aus Library, Bots, Agents oder Themes. Wähle gratis oder einen USDC-Preis, füge Beschreibung und Tags hinzu und kündige optional im Feed an.' },
      { icon: 'history', title: 'Lineage bei jedem Remake', body: 'Wenn du ein Remake publizierst, nennt der Dialog, von wessen Arbeit es abstammt, bevor etwas shippt. Credit ist nie etwas, das du hinterher entdeckst.' },
      { icon: 'shield', title: 'Kein Escrow, kein Platform-Cut', body: 'Phantom signiert den USDC-Transfer. Nexow hält keine Funds und nimmt keinen Cut — prüft nur den On-Chain-Beleg, bevor die Installation freigeschaltet wird.' },
      { icon: 'check', title: 'Updates bleiben beim Käufer', body: 'Der Kauf einer Version berechtigt dich zu späteren Versionen desselben Autors. Das Remake von jemand anderem ist ein separates Produkt mit eigenem Preis.' },
    ],
    railTitle: 'So funktioniert ein USDC-Kauf',
    railBody:
      'Preise werden in USDC auf Solana notiert. Der Server erstellt die Order; dein Wallet zahlt; die Chain muss zustimmen, bevor der Asset freigeschaltet wird.',
    railSteps: [
      { n: '01', title: 'Order erstellen', body: 'Checkout fragt den Server nach Preis und Seller-Wallet — der Client erfindet nie den Betrag.' },
      { n: '02', title: 'Mit Phantom zahlen', body: 'Dein Wallet signiert einen USDC-Transfer mit der Order-ID im Memo und broadcastet ihn auf Solana.' },
      { n: '03', title: 'On-Chain verifizieren', body: 'Nexow liest die Transaktion zurück: bestätigt, passendes Memo, Seller-USDC-Saldo um den notierten Betrag gestiegen, korrekter Mint.' },
      { n: '04', title: 'Installieren, was du gekauft hast', body: 'Berechtigung wird freigeschaltet. Installiere Widget, Theme, Bot oder Agent — bezahlte Previews bleiben bis zur Settlement gesperrt.' },
    ],
    railNotes: [
      'Belege werden lokal gespeichert, sobald das Wallet eine Signatur zurückgibt — schließt sich der Tab mitten drin, setzt „Kauf abschließen“ fort, ohne zweimal zu zahlen.',
      'Installierte Bots kommen pausiert an; Agents undeployed; Themes werden nie auto-applied. Der erste Run ist immer deine Wahl.',
      'Privates reist nie mit: Prompts, Chat-Historie, Connection-IDs, Wallet-Adressen und Agent-Memory bleiben beim Autor.',
    ],
    kindsTitle: 'Was du publizieren kannst',
    kinds: [
      { label: 'Widgets', body: 'Der Code der aktiven Version — sandboxed und remakable.' },
      { label: 'Screens & Workspaces', body: 'Geometrie, Widget-Code und Links als portabler Desk.' },
      { label: 'Bots', body: 'Processor, Params und Schedule — kommt für den Käufer pausiert an.' },
      { label: 'Agents', body: 'Modell, Skills, Tool-Grants und Cadence — undeployed, bis sie ihre Connections setzen.' },
      { label: 'Themes', body: 'Farben, Fonts, Radius und Density — in die Bibliothek, nie erzwungen.' },
    ],
  },
  dao: {
    eyebrow: 'Governance',
    badge: 'Demnächst',
    title: 'Besitze die Roadmap mit der Nexow DAO.',
    subtitle:
      'NEXO ist der Governance-Token. Verdiene ihn durch Bauen und Shippen; gib ihn aus, indem du vorschlägst, abstimmst und eine gemeinsame Treasury steuerst.',
    body:
      'Der DAO-Tab ist schon im Community-Panel als Teaser — echte Ballots, Treasury und Creator-Rewards folgen. Bis dahin sind Reputation und Medaillen live, damit frühe Maker voraus starten.',
    pillars: [
      { icon: 'lightbulb', title: 'Vorschlagen', body: 'Schlage Features, Connectoren und Regeln vor. Wer NEXO hält, kann eine Idee auf den Stimmzettel setzen.' },
      { icon: 'vote', title: 'Abstimmen', body: 'Öffentliche, transparente Votes entscheiden, was als Nächstes gebaut wird und in welcher Reihenfolge.' },
      { icon: 'vault', title: 'Treasury', body: 'Eine gemeinsame Treasury finanziert Bounties und Grants, die die Community einstimmt.' },
      { icon: 'gift', title: 'Creator-Rewards', body: 'Builder verdienen einen Anteil, wenn die DAO ihre Arbeit shippt und pusht.' },
    ],
    previewTitle: 'Erste Ballots',
    previewBadge: 'Vorschau',
    forLabel: '{pct}% dafür',
    votesLabel: '{n} Stimmen',
    proposals: [
      { title: 'Community-Widget-Bounty-Programm finanzieren', tag: 'Treasury', pct: 72, votes: 341 },
      { title: 'Umsatzbeteiligung für Marketplace-Creators', tag: 'Rewards', pct: 87, votes: 512 },
      { title: 'Widget-Runtime open-sourcen', tag: 'Roadmap', pct: 64, votes: 289 },
      { title: "NEXO-Proposal-Schwelle auf 1.000 senken", tag: "Governance", pct: 58, votes: 203 },
      { title: "Solana-Marketplace-Fees auf 2,5 % senken", tag: "Fees", pct: 81, votes: 456 },
      { title: "Moderatoren für Research Boards wählen", tag: "Moderation", pct: 69, votes: 318 },
    ],
    footer: 'Offen mit der Community geformt — Details landen zuerst im DAO-Tab.',
  },
  cta: {
    title: 'Sichere dir dein @handle und shippe etwas.',
    subtitle: 'Free-Account. Live-Feed. Marketplace mit USDC. Als Nächstes die DAO.',
    primary: 'Nexow starten',
    secondary: 'Alle Funktionen ansehen',
  },
};
