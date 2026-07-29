export default {
  meta: {
    title: 'Comunidade — Nexow',
    description:
      'Nexow é um espaço social para makers: posts interativos, boards de research, dashboards ao vivo, um marketplace em USDC na Solana e uma DAO que deixará a comunidade dirigir o roadmap.',
  },
  hero: {
    badge: 'Comunidade',
    titleLead: 'Uma app social para',
    titleGradient: 'makers que publicam',
    titleTail: 'trabalho real.',
    subtitle:
      'Partilhe widgets interativos, research e dashboards. Siga makers, converse em tempo real, publique num marketplace liquidado em USDC na Solana — e faça crescer uma comunidade que se multiplica.',
    ctaPrimary: 'Juntar-se à comunidade',
    ctaSecondary: 'Explorar marketplace',
    chips: ['Feed ao vivo', 'Boards e dashboards', 'USDC na Solana', 'DAO em breve'],
  },
  social: {
    eyebrow: 'Feed social',
    title: 'Posts que realmente correm — não só capturas.',
    subtitle:
      'O feed é feito para builders. Partilhe um widget, uma imagem, um vídeo ou uma nota de research; outros podem gostar, comentar, remakear e instalar o que publica.',
    items: [
      { icon: 'sparkles', title: 'Posts com widgets interativos', body: 'Anexe um widget ao vivo a um post. Quem vê pré-visualiza no feed e adiciona à biblioteca — com linhagem que credita o seu trabalho.' },
      { icon: 'chat', title: 'Gostos, comentários e menções', body: 'Respostas em fio, reações e uma caixa de menções para a conversa ficar no post — não espalhada pelos DMs.' },
      { icon: 'mail', title: 'Chats em tempo real', body: 'DMs 1:1 e de grupo com presença e reações, a partir de Conta ou do dock — amigos e contactos a um clique.' },
      { icon: 'users', title: 'Perfis públicos de maker', body: 'Reivindique o seu @handle, fixe posts, mostre os boards e deixe as pessoas seguir o que publica.' },
    ],
  },
  research: {
    eyebrow: 'Research e dashboards',
    title: 'Reúna fontes. Monte a secretária. Mantenha-a viva.',
    subtitle:
      'Os boards guardam o rasto de research — links, media e widgets. Dashboards e ecrãs transformam isso numa secretária de trabalho que pode partilhar ou remakear.',
    items: [
      { icon: 'library', title: 'Boards de perfil', body: 'Moodboards para makers: solte widgets, carregue media, fixe posts do feed e guarde links do TikTok, YouTube, artigos e de qualquer sítio.' },
      { icon: 'link', title: 'Partilhar para o Nexow', body: 'Instale a PWA ou use o share target — um URL aterra num board com pré-visualização, pronto para o canvas.' },
      { icon: 'layers', title: 'Dashboards, ecrãs e workspaces', body: 'Organize widgets ao vivo num canvas livre, agrupe-os em ecrãs e workspaces e mude de setup sem reconstruir do zero.' },
      { icon: 'bolt', title: 'Abrir um board no canvas', body: 'Transforme links guardados em embeds ao vivo no dashboard num gesto — o research fica ligado às ferramentas que o usam.' },
    ],
  },
  grow: {
    eyebrow: 'Fazer crescer a rede',
    title: 'Reputação que segue o trabalho que partilha.',
    subtitle:
      'Construir, publicar e ajudar outros rende pontos, medalhas e níveis no perfil público — a mesma superfície de reputação no Free e nos planos pagos.',
    items: [
      { icon: 'trophy', title: 'Pontos, medalhas e níveis', body: 'Ganhe reputação por widgets, bots, partilhas e atividade social. Desbloqueie conquistas em níveis e medalhas raras no perfil.' },
      { icon: 'signal', title: 'Descobrir e seguir', body: 'Explore o feed Discover, filtre por widgets, imagens ou vídeo, procure pessoas e posts e siga makers cujo trabalho quer no stream.' },
      { icon: 'award', title: 'Contactos que se multiplicam', body: 'Follows mútuos tornam-se contactos. Chats de grupo, menções e uma rede partilhada fazem a colaboração parecer produto — não um canal à parte.' },
      { icon: 'globe', title: 'Uma conta grátis abre tudo', body: 'Sync na cloud, créditos iniciais, feed, marketplace e reputação vêm com uma conta grátis. Sem cartão para começar.' },
    ],
  },
  referrals: {
    eyebrow: "Referências",
    badge: "Em breve",
    title: "Faça a rede crescer. Ganhe quando ela compõe.",
    subtitle: "Convide makers que publicam — e ganhe quando novos seguidores entram na sua órbita.",
    body: "Recompensas por referência e bónus de seguidores são o próximo na pista community. Reivindique o seu handle agora para estar pronto quando o ledger for live.",
    pillars: [
      { icon: "gift", title: "Ganhe com referências", body: "Partilhe o seu convite. Quando alguém que traz constrói, publica ou faz upgrade, recebe uma parte do upside." },
      { icon: "users", title: "Ganhe com novos seguidores", body: "Atraia audiência e seja recompensado à medida que a rede cresce — reputação que paga nos dois sentidos." },
      { icon: "sparkles", title: "Créditos e depois NEXO", body: "As primeiras recompensas chegam como créditos; bónus ligados a NEXO abrem com a DAO. A mesma reputação, novas formas de ganhar." },
    ],
    cta: "Reivindique o seu handle",
  },
  marketplace: {
    eyebrow: 'Marketplace',
    title: 'Publique uma vez. Venda em USDC. Mantenha a linhagem.',
    subtitle:
      'Um único diálogo de partilha cobre widgets, ecrãs, workspaces, bots, agents e temas — grátis para instalar, ou com preço em USDC liquidado na Solana.',
    intro:
      'O Nexow nunca custodia o dinheiro. Uma venda é uma transferência SPL direta da carteira do comprador para a sua. A plataforma verifica a chain, desbloqueia o ativo e guarda só a contabilidade de que ambos os lados precisam para confiar no resultado.',
    pillars: [
      { icon: 'store', title: 'Um diálogo, seis tipos', body: 'Partilhe a partir de Biblioteca, Bots, Agents ou Temas. Escolha grátis ou um preço em USDC, adicione descrição e tags e, opcionalmente, anuncie no feed.' },
      { icon: 'history', title: 'Linhagem em cada remake', body: 'Se publicar um remake, o diálogo nomeia de quem o trabalho descende antes de sair. O crédito nunca é algo que descobre depois.' },
      { icon: 'shield', title: 'Sem escrow, sem comissão', body: 'A Phantom assina a transferência USDC. O Nexow não retém fundos nem fica com uma cut — só verifica o recibo on-chain antes de desbloquear a instalação.' },
      { icon: 'check', title: 'As atualizações ficam com o comprador', body: 'Comprar qualquer versão dá-lhe direito a versões posteriores do mesmo autor. O remake de outra pessoa é um produto separado, com o seu preço.' },
    ],
    railTitle: 'Como funciona uma compra em USDC',
    railBody:
      'Os preços são cotados em USDC na Solana. O servidor cria a encomenda; a sua carteira paga; a chain tem de concordar antes de desbloquear o ativo.',
    railSteps: [
      { n: '01', title: 'Criar a encomenda', body: 'O checkout pede ao servidor o preço e a carteira do vendedor — o cliente nunca inventa o montante.' },
      { n: '02', title: 'Pagar com Phantom', body: 'A carteira assina uma transferência USDC com o id da encomenda no memo e transmite-a na Solana.' },
      { n: '03', title: 'Verificar on-chain', body: 'O Nexow lê a transação: confirmada, memo correspondente, saldo USDC do vendedor aumentado pelo montante cotado, mint correto.' },
      { n: '04', title: 'Instalar o que comprou', body: 'O direito desbloqueia. Instale o widget, tema, bot ou agent — pré-visualizações pagas ficam bloqueadas até ao settlement.' },
    ],
    railNotes: [
      'Os recibos guardam-se localmente no instante em que a carteira devolve a assinatura — se o separador fechar a meio, «Concluir compra» retoma sem pagar duas vezes.',
      'Bots instalados chegam em pausa; agents sem deploy; temas nunca se aplicam sozinhos. A primeira execução é sempre a sua escolha.',
      'O privado não viaja: prompts, histórico de chat, ids de ligação, endereços de carteira e memória do agent ficam com o autor.',
    ],
    kindsTitle: 'O que pode publicar',
    kinds: [
      { label: 'Widgets', body: 'O código da versão ativa — isolado e remakeável.' },
      { label: 'Ecrãs e workspaces', body: 'Geometria, código de widgets e links como uma secretária portátil.' },
      { label: 'Bots', body: 'Processor, params e schedule — chega em pausa para o comprador.' },
      { label: 'Agents', body: 'Modelo, skills, grants de ferramentas e cadência — sem deploy até ligarem os deles.' },
      { label: 'Temas', body: 'Cores, tipos de letra, radius e densidade — na biblioteca, nunca forçados.' },
    ],
  },
  dao: {
    eyebrow: 'Governação',
    badge: 'Em breve',
    title: 'Seja dono do roadmap com a Nexow DAO.',
    subtitle:
      'NEXO é o token de governação. Ganhe-o a construir e publicar; gaste-o a propor, votar e dirigir um tesouro partilhado.',
    body:
      'O separador DAO já está no painel da comunidade como teaser — urnas reais, tesouro e recompensas a creators chegam a seguir. Até lá, reputação e medalhas estão ao vivo para makers cedo começarem à frente.',
    pillars: [
      { icon: 'lightbulb', title: 'Propor', body: 'Proponha funcionalidades, conectores e regras. Quem tiver NEXO pode pôr uma ideia na urna.' },
      { icon: 'vote', title: 'Votar', body: 'Votos públicos e transparentes decidem o que se constrói a seguir e em que ordem.' },
      { icon: 'vault', title: 'Tesouro', body: 'Um tesouro partilhado financia bounties e grants que a comunidade vota.' },
      { icon: 'gift', title: 'Recompensas a creators', body: 'Builders ganham uma parte quando a DAO publica e promove o seu trabalho.' },
    ],
    previewTitle: 'Primeiras urnas',
    previewBadge: 'Pré-visualização',
    forLabel: '{pct}% a favor',
    votesLabel: '{n} votos',
    proposals: [
      { title: 'Financiar um programa de bounties de widgets', tag: 'Tesouro', pct: 72, votes: 341 },
      { title: 'Partilha de receita para creators do marketplace', tag: 'Recompensas', pct: 87, votes: 512 },
      { title: 'Open-source do runtime de widgets', tag: 'Roadmap', pct: 64, votes: 289 },
      { title: "Baixar o limiar de propostas NEXO para 1.000", tag: "Governação", pct: 58, votes: 203 },
      { title: "Cortar fees do marketplace Solana para 2,5%", tag: "Fees", pct: 81, votes: 456 },
      { title: "Eleger moderadores de research boards", tag: "Moderação", pct: 69, votes: 318 },
    ],
    footer: 'Moldada em aberto com a comunidade — os detalhes aterraram primeiro no separador DAO.',
  },
  cta: {
    title: 'Reivindique o seu @handle e publique algo.',
    subtitle: 'Conta grátis. Feed ao vivo. Marketplace com USDC. A DAO é o próximo.',
    primary: 'Abrir Nexow',
    secondary: 'Ver todas as funcionalidades',
  },
};
