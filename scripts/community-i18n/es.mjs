/** Spanish community page copy */
export default {
  meta: {
    title: 'Comunidad — Nexow',
    description:
      'Nexow es un espacio social para makers: posts interactivos, tableros de research, dashboards en vivo, un marketplace en USDC sobre Solana y una DAO que dejará que la comunidad dirija el roadmap.',
  },
  hero: {
    badge: 'Comunidad',
    titleLead: 'Una app social para',
    titleGradient: 'makers que publican',
    titleTail: 'trabajo real.',
    subtitle:
      'Comparte widgets interactivos, research y dashboards. Sigue makers, chatea en tiempo real, publica en un marketplace liquidado en USDC sobre Solana — y haz crecer una comunidad que se multiplica.',
    ctaPrimary: 'Únete a la comunidad',
    ctaSecondary: 'Explorar marketplace',
    chips: ['Feed en vivo', 'Tableros y dashboards', 'USDC en Solana', 'DAO próximamente'],
  },
  social: {
    eyebrow: 'Feed social',
    title: 'Posts que de verdad se ejecutan — no solo capturas.',
    subtitle:
      'El feed está pensado para builders. Comparte un widget, una imagen, un vídeo o una nota de research; otros pueden dar like, comentar, remakear e instalar lo que publicas.',
    items: [
      {
        icon: 'sparkles',
        title: 'Posts con widgets interactivos',
        body: 'Adjunta un widget en vivo a un post. Quien lo ve lo previsualiza en el feed y lo añade directo a su biblioteca — con linaje que acredita tu trabajo.',
      },
      {
        icon: 'chat',
        title: 'Likes, comentarios y menciones',
        body: 'Respuestas en hilo, reacciones y una bandeja de menciones para que la conversación quede en el post — no repartida en DMs.',
      },
      {
        icon: 'mail',
        title: 'Chats en tiempo real',
        body: 'DMs 1:1 y de grupo con presencia y reacciones, desde Cuenta o el dock — amigos y contactos a un clic.',
      },
      {
        icon: 'users',
        title: 'Perfiles públicos de maker',
        body: 'Reclama tu @handle, fija posts, muestra tus tableros y deja que la gente siga lo que publicas.',
      },
    ],
  },
  research: {
    eyebrow: 'Research y dashboards',
    title: 'Reúne fuentes. Arma el escritorio. Manténlo en vivo.',
    subtitle:
      'Los tableros guardan el rastro de research — enlaces, media y widgets. Los dashboards y pantallas lo convierten en un escritorio que puedes compartir o remakear.',
    items: [
      {
        icon: 'library',
        title: 'Tableros de perfil',
        body: 'Moodboards para makers: suelta widgets, sube media, fija posts del feed y guarda enlaces de TikTok, YouTube, artículos y de cualquier sitio.',
      },
      {
        icon: 'link',
        title: 'Compartir a Nexow',
        body: 'Instala la PWA o usa el share target — una URL aterriza en un tablero con vista previa, lista para abrir en tu lienzo.',
      },
      {
        icon: 'layers',
        title: 'Dashboards, pantallas y espacios',
        body: 'Organiza widgets en vivo en un lienzo libre, agrúpalos en pantallas y espacios, y cambia de setup sin reconstruir desde cero.',
      },
      {
        icon: 'bolt',
        title: 'Abrir un tablero en el lienzo',
        body: 'Convierte enlaces guardados en embeds en vivo en tu dashboard de un golpe — el research sigue conectado a las herramientas que lo usan.',
      },
    ],
  },
  grow: {
    eyebrow: 'Haz crecer la red',
    title: 'Reputación que sigue al trabajo que compartes.',
    subtitle:
      'Construir, publicar y ayudar a otros suma puntos, medallas y niveles en tu perfil público — la misma capa de reputación en Free y en planes de pago.',
    items: [
      {
        icon: 'trophy',
        title: 'Puntos, medallas y niveles',
        body: 'Gana reputación por widgets, bots, shares y actividad social. Desbloquea logros escalonados y medallas raras que se ven en tu perfil.',
      },
      {
        icon: 'signal',
        title: 'Descubrir y seguir',
        body: 'Explora el feed Discover, filtra por widgets, imágenes o vídeo, busca personas y posts, y sigue a makers cuyo trabajo quieres en tu stream.',
      },
      {
        icon: 'award',
        title: 'Contactos que se multiplican',
        body: 'Los follows mutuos se vuelven contactos. Chats de grupo, menciones y una red compartida hacen que colaborar se sienta producto — no un canal aparte.',
      },
      {
        icon: 'globe',
        title: 'Una cuenta gratis lo abre todo',
        body: 'Sync en la nube, créditos iniciales, el feed, el marketplace y la reputación vienen con una cuenta gratis. Sin tarjeta para empezar.',
      },
    ],
  },
  marketplace: {
    eyebrow: 'Marketplace',
    title: 'Publica una vez. Vende en USDC. Conserva el linaje.',
    subtitle:
      'Un solo diálogo de share cubre widgets, pantallas, espacios, bots, agentes y temas — gratis para instalar, o con precio en USDC liquidado en Solana.',
    intro:
      'Nexow nunca custodia el dinero. Una venta es una transferencia SPL directa del monedero del comprador al tuyo. La plataforma verifica la cadena, desbloquea el activo y solo guarda la contabilidad que ambas partes necesitan para confiar en el resultado.',
    pillars: [
      {
        icon: 'store',
        title: 'Un diálogo, seis tipos',
        body: 'Comparte desde Biblioteca, Bots, Agentes o Temas. Elige gratis o un precio en USDC, añade descripción y tags, y opcionalmente anúncialo en el feed.',
      },
      {
        icon: 'history',
        title: 'Linaje en cada remake',
        body: 'Si publicas un remake, el diálogo nombra de quién desciende el trabajo antes de que salga. El crédito nunca es algo que descubres después.',
      },
      {
        icon: 'shield',
        title: 'Sin escrow, sin comisión',
        body: 'Phantom firma la transferencia USDC. Nexow no retiene fondos ni se queda un corte — solo verifica el recibo on-chain antes de desbloquear la instalación.',
      },
      {
        icon: 'check',
        title: 'Las actualizaciones van con el comprador',
        body: 'Comprar cualquier versión te da derecho a versiones posteriores del mismo autor. El remake de otra persona es un producto aparte, con su propio precio.',
      },
    ],
    railTitle: 'Cómo funciona una compra en USDC',
    railBody:
      'Los precios se cotizan en USDC sobre Solana. El servidor crea el pedido; tu monedero paga; la cadena tiene que coincidir antes de desbloquear el activo.',
    railSteps: [
      {
        n: '01',
        title: 'Crear el pedido',
        body: 'El checkout pide al servidor el precio y el monedero del vendedor — el cliente nunca inventa el importe.',
      },
      {
        n: '02',
        title: 'Pagar con Phantom',
        body: 'Tu monedero firma una transferencia USDC con el id del pedido en el memo y la emite en Solana.',
      },
      {
        n: '03',
        title: 'Verificar on-chain',
        body: 'Nexow lee la transacción: confirmada, memo coincidente, saldo USDC del vendedor subido al menos el importe cotizado, mint correcto.',
      },
      {
        n: '04',
        title: 'Instalar lo comprado',
        body: 'Se desbloquea el derecho. Instala el widget, tema, bot o agente — las vistas previas de pago siguen bloqueadas hasta la liquidación.',
      },
    ],
    railNotes: [
      'Los recibos se guardan en local en el instante en que el monedero devuelve la firma — si la pestaña se cierra a mitad, «Terminar compra» retoma sin pagar dos veces.',
      'Los bots instalados llegan en pausa; los agentes sin desplegar; los temas nunca se aplican solos. El primer arranque siempre es tu elección.',
      'Lo privado no viaja: prompts, historial de chat, ids de conexión, direcciones de monedero y memoria del agente se quedan con el autor.',
    ],
    kindsTitle: 'Qué puedes publicar',
    kinds: [
      { label: 'Widgets', body: 'El código de la versión activa — aislado y remakeable.' },
      { label: 'Pantallas y espacios', body: 'Geometría, código de widgets y links como un escritorio portable.' },
      { label: 'Bots', body: 'Procesador, params y schedule — llega en pausa para el comprador.' },
      { label: 'Agentes', body: 'Modelo, skills, permisos de herramientas y cadencia — sin desplegar hasta que conecten los suyos.' },
      { label: 'Temas', body: 'Colores, fuentes, radio y densidad — a la biblioteca, nunca forzados.' },
    ],
  },
  dao: {
    eyebrow: 'Gobernanza',
    badge: 'Próximamente',
    title: 'Sé dueño del roadmap con la Nexow DAO.',
    subtitle:
      'NEXO es el token de gobernanza. Gánalo construyendo y publicando; gástalo proponiendo, votando y dirigiendo un tesoro compartido.',
    body:
      'La pestaña DAO ya está en el panel de comunidad como avance — las votaciones reales, el tesoro y las recompensas a creators llegan después. Mientras, la reputación y las medallas están en vivo para que los makers tempranos empiecen por delante.',
    pillars: [
      {
        icon: 'lightbulb',
        title: 'Proponer',
        body: 'Propón funciones, conectores y reglas. Quien tenga NEXO puede poner una idea en la urna.',
      },
      {
        icon: 'vote',
        title: 'Votar',
        body: 'Votos públicos y transparentes deciden qué se construye después y en qué orden.',
      },
      {
        icon: 'vault',
        title: 'Tesoro',
        body: 'Un tesoro compartido financia las recompensas y grants que la comunidad vota.',
      },
      {
        icon: 'gift',
        title: 'Recompensas a creators',
        body: 'Los builders ganan una parte cuando la DAO publica y promociona su trabajo.',
      },
    ],
    previewTitle: 'Primeras urnas',
    previewBadge: 'Vista previa',
    forLabel: '{pct}% a favor',
    votesLabel: '{n} votos',
    proposals: [
      { title: 'Financiar un programa de bounties de widgets', tag: 'Tesoro', pct: 72, votes: 341 },
      { title: 'Reparto de ingresos para creators del marketplace', tag: 'Recompensas', pct: 87, votes: 512 },
      { title: 'Abrir el runtime de widgets en código abierto', tag: 'Roadmap', pct: 64, votes: 289 },
    ],
    footer: 'Se construye en abierto con la comunidad — los detalles aterrizan primero en la pestaña DAO.',
  },
  cta: {
    title: 'Reclama tu @handle y publica algo.',
    subtitle: 'Cuenta gratis. Feed en vivo. Marketplace con USDC. La DAO es lo siguiente.',
    primary: 'Abrir Nexow',
    secondary: 'Ver todas las funciones',
  },
};
