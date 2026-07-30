export default {
  meta: {
    title: 'Communauté — Nexow',
    description:
      'Nexow est un espace social pour les makers : posts interactifs, boards de research, dashboards live, un marketplace en USDC sur Solana, et une DAO qui laissera la communauté piloter la roadmap.',
  },
  hero: {
    badge: 'Communauté',
    titleLead: 'Une app sociale pour',
    titleGradient: 'les makers qui shippent',
    titleTail: 'du vrai travail.',
    subtitle:
      'Partagez des widgets interactifs, du research et des dashboards. Suivez des makers, discutez en temps réel, publiez sur un marketplace réglé en USDC sur Solana — et faites grandir une communauté qui compose.',
    ctaPrimary: 'Rejoindre la communauté',
    ctaSecondary: 'Explorer le marketplace',
    chips: ['Feed live', 'Boards & dashboards', 'USDC sur Solana', 'DAO bientôt'],
  },
  social: {
    eyebrow: 'Feed social',
    title: 'Des posts qui s’exécutent vraiment — pas juste des captures.',
    subtitle:
      'Le feed est pensé pour les builders. Partagez un widget, une image, une vidéo ou une note de research ; les autres peuvent liker, commenter, remaker et installer ce que vous shippez.',
    items: [
      { icon: 'sparkles', title: 'Posts widgets interactifs', body: 'Attachez un widget live à un post. Les lecteurs le prévisualisent dans le feed, puis l’ajoutent à leur bibliothèque — avec une lignée qui crédite votre travail.' },
      { icon: 'chat', title: 'Likes, commentaires & mentions', body: 'Réponses en fil, réactions et une boîte de mentions pour que la conversation reste sur le post — pas éparpillée dans les DM.' },
      { icon: 'mail', title: 'Chats en temps réel', body: 'DM 1:1 et de groupe avec présence et réactions, depuis Compte ou le dock — amis et contacts à un clic.' },
      { icon: 'users', title: 'Profils makers publics', body: 'Réclamez votre @handle, épinglez des posts, montrez vos boards et laissez les gens suivre ce que vous publiez.' },
    ],
  },
  research: {
    eyebrow: 'Research & dashboards',
    title: 'Collectez les sources. Montez le bureau. Gardez-le live.',
    subtitle:
      'Les boards portent la piste de research — liens, médias et widgets. Dashboards et écrans en font un bureau de travail que vous pouvez partager ou remaker.',
    items: [
      { icon: 'library', title: 'Boards de profil', body: 'Moodboards pour makers : déposez des widgets, uploadez des médias, épinglez des posts du feed, et sauvez des liens depuis TikTok, YouTube, articles et ailleurs.' },
      { icon: 'link', title: 'Partager vers Nexow', body: 'Installez la PWA ou utilisez le share target — une URL atterrit sur un board avec aperçu, prête à ouvrir sur votre canvas.' },
      { icon: 'layers', title: 'Dashboards, écrans & workspaces', body: 'Arrangez des widgets live sur un canvas libre, regroupez-les en écrans et workspaces, et changez de setup sans tout reconstruire.' },
      { icon: 'bolt', title: 'Ouvrir un board sur le canvas', body: 'Transformez les liens sauvés en embeds live sur votre dashboard en une action — le research reste branché aux outils qui l’utilisent.' },
    ],
  },
  grow: {
    eyebrow: 'Faire grandir le réseau',
    title: 'Une réputation qui suit le travail que vous partagez.',
    subtitle:
      'Construire, shipper et aider les autres rapporte points, médailles et niveaux sur votre profil public — la même surface de réputation sur Free et les plans payants.',
    items: [
      { icon: 'trophy', title: 'Points, médailles & niveaux', body: 'Gagnez de la réputation pour widgets, bots, partages et activité sociale. Débloquez des succès échelonnés et des médailles rares visibles sur votre profil.' },
      { icon: 'signal', title: 'Découvrir & suivre', body: 'Parcourez le feed Discover, filtrez par widgets, images ou vidéo, cherchez des personnes et des posts, et suivez les makers dont vous voulez le travail dans votre stream.' },
      { icon: 'award', title: 'Contacts qui composent', body: 'Les follows mutuels deviennent des contacts. Chats de groupe, mentions et un réseau partagé font de la collaboration un produit — pas un canal à côté.' },
      { icon: 'globe', title: 'Un compte gratuit débloque tout', body: 'Sync cloud, crédits de départ, feed, marketplace et réputation viennent avec un compte gratuit. Pas de carte pour commencer.' },
    ],
  },
  referrals: {
    eyebrow: "Parrainage",
    badge: "Bientôt",
    title: "Faites grandir le réseau. Gagnez quand il compose.",
    subtitle: "Invitez des makers qui shippent — et gagnez quand de nouveaux followers rejoignent votre orbite.",
    body: "Les récompenses de parrainage et les bonus followers sont la suite sur la piste communauté. Réclamez votre handle maintenant pour être prêt quand le ledger sera live.",
    pillars: [
      { icon: "gift", title: "Gagnez sur les parrainages", body: "Partagez votre invite. Quand quelqu’un que vous amenez construit, shippe ou upgrade, vous touchez une part de l’upside." },
      { icon: "users", title: "Gagnez grâce aux nouveaux followers", body: "Attirez une audience et soyez récompensé à mesure que votre réseau grandit — une réputation qui paie dans les deux sens." },
      { icon: "sparkles", title: "Crédits & NXW ensuite", body: "Les premières récompenses arrivent en crédits ; les bonus liés au NXW s’ouvrent avec la DAO. Même surface de réputation, de nouvelles façons de gagner." },
    ],
    cta: "Réclamez votre handle",
  },
  marketplace: {
    eyebrow: 'Marketplace',
    title: 'Publiez une fois. Vendez en USDC. Gardez la lignée.',
    subtitle:
      'Un seul dialogue de partage couvre widgets, écrans, workspaces, bots, agents et thèmes — gratuits à installer, ou tarifés en USDC et réglés sur Solana.',
    intro:
      'Nexow ne custodie jamais l’argent. Une vente est un transfert SPL direct du wallet de l’acheteur au vôtre. La plateforme vérifie la chaîne, débloque l’actif, et ne stocke que la compta dont les deux côtés ont besoin pour faire confiance au résultat.',
    pillars: [
      { icon: 'store', title: 'Un dialogue, six types', body: 'Partagez depuis Bibliothèque, Bots, Agents ou Thèmes. Choisissez gratuit ou un prix USDC, ajoutez description et tags, et annoncez optionnellement dans le feed.' },
      { icon: 'history', title: 'Lignée sur chaque remake', body: 'Si vous publiez un remake, le dialogue nomme de qui descend le travail avant tout envoi. Le crédit n’est jamais découvert après coup.' },
      { icon: 'shield', title: 'Pas d’escrow, pas de commission', body: 'Phantom signe le transfert USDC. Nexow ne détient pas les fonds et ne prend pas de cut — il vérifie seulement le reçu on-chain avant de débloquer l’install.' },
      { icon: 'check', title: 'Les mises à jour suivent l’acheteur', body: 'Acheter une version vous donne droit aux versions suivantes du même auteur. Le remake de quelqu’un d’autre est un produit séparé, avec son propre prix.' },
    ],
    railTitle: 'Comment marche un achat USDC',
    railBody:
      'Les prix sont cotés en USDC sur Solana. Le serveur crée la commande ; votre wallet paie ; la chaîne doit être d’accord avant le déblocage.',
    railSteps: [
      { n: '01', title: 'Créer la commande', body: 'Le checkout demande au serveur le prix et le wallet vendeur — le client n’invente jamais le montant.' },
      { n: '02', title: 'Payer avec Phantom', body: 'Votre wallet signe un transfert USDC avec l’id de commande en mémo et le diffuse sur Solana.' },
      { n: '03', title: 'Vérifier on-chain', body: 'Nexow relit la transaction : confirmée, mémo correspondant, solde USDC vendeur augmenté du montant coté, mint correct.' },
      { n: '04', title: 'Installer ce que vous avez acheté', body: 'Le droit s’ouvre. Installez le widget, thème, bot ou agent — les aperçus payants restent verrouillés jusqu’au règlement.' },
    ],
    railNotes: [
      'Les reçus sont sauvés en local dès que le wallet renvoie une signature — si l’onglet se ferme en cours, « Terminer l’achat » reprend sans payer deux fois.',
      'Les bots installés arrivent en pause ; les agents non déployés ; les thèmes ne s’appliquent jamais seuls. Le premier run est toujours votre choix.',
      'Le privé ne voyage pas : prompts, historique de chat, ids de connexion, adresses wallet et mémoire d’agent restent chez l’auteur.',
    ],
    kindsTitle: 'Ce que vous pouvez publier',
    kinds: [
      { label: 'Widgets', body: 'Le code de la version active — sandboxé et remakable.' },
      { label: 'Écrans & workspaces', body: 'Géométrie, code widgets et links comme un bureau portable.' },
      { label: 'Bots', body: 'Processeur, params et schedule — arrive en pause pour l’acheteur.' },
      { label: 'Agents', body: 'Modèle, skills, grants d’outils et cadence — non déployé tant qu’ils n’ont pas branché les leurs.' },
      { label: 'Thèmes', body: 'Couleurs, polices, radius et densité — ajoutés à la bibliothèque, jamais imposés.' },
    ],
  },
  dao: {
    eyebrow: 'Gouvernance',
    badge: 'Bientôt',
    title: 'Possédez la roadmap avec la Nexow DAO.',
    subtitle:
      'NXW est le token de gouvernance. Gagnez-le en construisant et en shippant ; dépensez-le en proposant, votant et pilotant un trésor partagé.',
    body:
      'L’onglet DAO est déjà dans le panneau communauté en teaser — vrais ballots, trésor et récompenses creators arrivent ensuite. En attendant, réputation et médailles sont live pour que les makers précoces partent devant.',
    pillars: [
      { icon: 'lightbulb', title: 'Proposer', body: 'Proposez des features, connecteurs et règles. Quiconque détient du NXW peut mettre une idée au vote.' },
      { icon: 'vote', title: 'Voter', body: 'Des votes publics et transparents décident de ce qui se construit ensuite et dans quel ordre.' },
      { icon: 'vault', title: 'Trésor', body: 'Un trésor partagé finance les bounties et grants que la communauté vote.' },
      { icon: 'gift', title: 'Récompenses creators', body: 'Les builders touchent une part quand la DAO shippe et promeut leur travail.' },
    ],
    previewTitle: 'Premiers ballots',
    previewBadge: 'Aperçu',
    forLabel: '{pct}% pour',
    votesLabel: '{n} votes',
    proposals: [
      { title: 'Financer un programme de bounties widgets', tag: 'Trésor', pct: 72, votes: 341 },
      { title: 'Partage de revenus pour les creators marketplace', tag: 'Récompenses', pct: 87, votes: 512 },
      { title: 'Open-sourcer le runtime des widgets', tag: 'Roadmap', pct: 64, votes: 289 },
      { title: "Baisser le seuil de proposition NXW à 1 000", tag: "Gouvernance", pct: 58, votes: 203 },
      { title: "Réduire les fees marketplace Solana à 2,5 %", tag: "Fees", pct: 81, votes: 456 },
      { title: "Élire les modérateurs des research boards", tag: "Modération", pct: 69, votes: 318 },
    ],
    footer: 'Façonné en ouvert avec la communauté — les détails atterrissent d’abord dans l’onglet DAO.',
  },
  cta: {
    title: 'Réclamez votre @handle et shippez quelque chose.',
    subtitle: 'Compte gratuit. Feed live. Marketplace en USDC. La DAO est la suite.',
    primary: 'Lancer Nexow',
    secondary: 'Voir toutes les fonctionnalités',
  },
};
