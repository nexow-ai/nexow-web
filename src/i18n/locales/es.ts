import type { SiteContent } from '../content';

export const es: SiteContent = {
  nav: {
    links: [
      { label: 'Funciones', href: '/features' },
      { label: 'Conectores', href: '/connectors' },
      { label: 'Planes', href: '/plans' },
      { label: 'Blog', href: '/blog' },
      { label: 'Nosotros', href: '/about' },
    ],
    launch: 'Abrir la app',
    menu: 'Abrir menú',
    close: 'Cerrar menú',
  },
  footer: {
    tagline: 'Describe un widget. Nexow lo construye, lo conecta a datos de mercado en vivo y lo coloca en tu lienzo.',
    columns: [
      {
        title: 'Producto',
        links: [
          { label: 'Funciones', href: '/features' },
          { label: 'Planes', href: '/plans' },
          { label: 'Conectores', href: '/connectors' },
          { label: 'Automatizaciones', href: '/#automate' },
          { label: 'Comunidad', href: '/#network' },
          { label: 'Roadmap', href: '/#roadmap' },
        ],
      },
      {
        title: 'Empresa',
        links: [
          { label: 'Nosotros', href: '/about' },
          { label: 'Blog', href: '/blog' },
        ],
      },
      {
        title: 'Recursos',
        links: [
          { label: 'Abrir la app', href: 'https://x.nexow.ai' },
          { label: 'Privacidad', href: '/privacy' },
        ],
      },
    ],
    rights: 'Todos los derechos reservados.',
    disclaimer:
      'Nexow es una plataforma de herramientas y visualización. Nada aquí es asesoramiento financiero. Los mercados conllevan riesgo; opera con responsabilidad.',
    builtWith: 'Hecho con Astro. Privado por defecto.',
  },
  home: {
    meta: {
      title: 'Nexow — Crea dashboards de mercado con IA, en lenguaje natural',
      description:
        'Nexow es un espacio de trabajo nativo de IA para mercados. Describe un widget en lenguaje natural y Nexow lo crea, lo conecta a datos en vivo de más de 28 conectores y suma bots en la nube, agentes de IA, una comunidad de makers y recompensas XP — privado por defecto, gratis para empezar.',
    },
    hero: {
      badge: 'Preview ya disponible',
      titleLead: 'Descríbelo.',
      titleGradient: 'Nexow lo crea.',
      titleTail: 'Opéralo.',
      subtitle:
        'Un espacio de trabajo nativo de IA para mercados. Pide cualquier widget en lenguaje natural — Nexow escribe el código, lo ejecuta de forma segura y transmite datos en vivo a un lienzo libre. Automatízalo con bots y agentes en la nube, y conéctate a una comunidad de makers.',
      ctaPrimary: 'Abrir la app',
      ctaSecondary: 'Ver cómo funciona',
      note: 'Sin registro para probar · Privado en tu navegador · O cuenta gratis con 10K créditos reservados',
      promptExample: 'Muestra un gráfico de velas de BTC-USD de Coinbase con EMA 20 y 50 y RSI debajo.',
      promptPlaceholder: 'Describe un widget…',
    },
    ticker: { label: 'Conectores en vivo' },
    trust: 'Un lienzo para todos los mercados — FX, cripto, acciones, futuros, opciones y mercados de predicción.',
    stats: [
      { n: 28, suffix: '+', label: 'conectores de datos de mercado en vivo' },
      { n: 6, label: 'clases de activos en un solo lienzo' },
      { n: 10, suffix: 'K', label: 'créditos de IA reservados al registrarte' },
      { n: 30, prefix: '<', suffix: 's', label: 'de una frase a un widget funcionando' },
    ],
    showcase: {
      eyebrow: 'Showcase',
      title: 'Una frase. Cualquier widget.',
      subtitle:
        'Gráficos, order books, mapas de calor, probabilidades — si puedes describirlo, Nexow puede construirlo y conectarlo a datos en vivo.',
      generatedBadge: 'generado y en vivo',
      tabs: [
        {
          label: 'Velas + indicadores',
          prompt: 'Gráfico de velas de BTC-USD de Coinbase con EMA 20 y 50 y RSI debajo.',
          caption: 'En streaming desde Coinbase — EMAs y RSI calculados en el widget.',
        },
        {
          label: 'Profundidad del libro',
          prompt: 'Profundidad del order book de ETH-PERP en Deribit, bids contra asks.',
          caption: 'Bids y asks agregados en tiempo real del libro de Deribit.',
        },
        {
          label: 'Mapa de correlación',
          prompt: 'Mapa de calor de correlación a 30 días de BTC, ETH, SOL, EURUSD, oro y SPX.',
          caption: 'Correlaciones entre activos recalculadas con cada nuevo cierre.',
        },
        {
          label: 'Mercados de predicción',
          prompt: 'Probabilidad en Kalshi de un recorte de tipos de la Fed en el próximo FOMC, con cambio a 24h.',
          caption: 'Probabilidades de eventos directas del order book de Kalshi.',
        },
      ],
    },
    features: {
      eyebrow: 'Por qué Nexow',
      title: 'El dashboard se construye solo',
      subtitle:
        'Deja de cablear gráficos a mano. Describe lo que quieres ver y Nexow genera un widget real y funcionando — luego lo refinas en lenguaje natural.',
      items: [
        {
          icon: 'sparkles',
          title: 'Widgets en lenguaje natural',
          body: 'Describe un gráfico, tabla, mapa de calor o señal con palabras. Nexow escribe el código del widget con Claude y lo ejecuta en vivo — sin boilerplate ni archivos de config.',
        },
        {
          icon: 'shield',
          title: 'Aislado y seguro',
          body: 'Cada widget corre en un iframe aislado con una frontera estricta. El código generado puede renderizar y obtener datos, pero nunca toca el resto de tu espacio de trabajo.',
        },
        {
          icon: 'plug',
          title: 'Más de 28 conectores en vivo',
          body: 'Proveedores de datos conectables — OANDA, Binance, Coinbase, Kraken, Polygon, Interactive Brokers, Kalshi, Polymarket y más — llevan datos en tiempo real a tus widgets.',
        },
        {
          icon: 'layers',
          title: 'Lienzo libre',
          body: 'Arrastra, redimensiona y organiza widgets en un lienzo libre con espacios y pantallas para FX, cripto, research — lo que operes. Agrupa widgets y conecta sus datos en vivo con Links.',
        },
        {
          icon: 'lock',
          title: 'Privado por defecto',
          body: 'Corre totalmente local: añade tu propia clave de Anthropic y la generación ocurre en tu navegador. Widgets, versiones y logs se guardan en IndexedDB — nada se envía a nuestros servidores.',
        },
        {
          icon: 'history',
          title: 'Versiones y biblioteca de widgets',
          body: 'Cada edición queda versionada con logs que puedes inspeccionar. Guarda widgets en tu biblioteca y reutilízalos en cualquier dashboard con un clic.',
        },
      ],
    },
    how: {
      eyebrow: 'Cómo funciona',
      title: 'De una frase a un widget en vivo en segundos',
      subtitle: 'Tres pasos. Sin config, sin build, sin código pegamento.',
      steps: [
        {
          n: '01',
          title: 'Describe',
          body: 'Escribe lo que quieres en lenguaje natural — «un gráfico de profundidad del order book para ETH-PERP en Deribit».',
        },
        {
          n: '02',
          title: 'Genera',
          body: 'Nexow escribe el código del widget con Claude y lo ejecuta en un iframe aislado, conectado al conector que elijas.',
        },
        {
          n: '03',
          title: 'Refina y organiza',
          body: 'Ajústalo en lenguaje natural, versiónalo y colócalo en tu lienzo junto a todo lo que sigues.',
        },
      ],
    },
    automate: {
      eyebrow: 'Automatiza',
      title: 'Pon tu espacio en piloto automático',
      subtitle:
        'Los widgets te muestran el mercado. Los bots, agentes y Copilot actúan sobre él — automatizaciones en la nube e IA que siguen trabajando con la pestaña cerrada.',
      liveLabel: 'En vivo',
      soonLabel: 'Próximamente',
      items: [
        {
          icon: 'bot',
          title: 'Bots',
          body: 'Automatizaciones en la nube que vigilan tus datos y envían señales y alertas a tus widgets. Describe una alerta con palabras — «avísame cuando BTC caiga 5% en una hora» — o constrúyela visualmente con umbrales, % de cambio, cruces de medias y resúmenes. Los bots pueden incluso vigilar una cuenta de broker conectada y avisar de operaciones nuevas.',
          status: 'live',
        },
        {
          icon: 'cpu',
          title: 'Agentes',
          body: 'Agentes de IA con un harness real — modelo, memoria, skills, herramientas, conocimiento y disparadores. Dale un trabajo a un agente y deja que vigile, razone y actúe — construye el tuyo en el editor visual del harness y despliégalo en la nube, con permisos de herramientas, memoria entre ejecuciones y un historial de ejecuciones en vivo.',
          status: 'live',
        },
        {
          icon: 'chat',
          title: 'Copilot',
          body: 'Un asistente de IA para todo tu espacio. Chatea en pestañas paralelas, deja que construya widgets en segundo plano y organice tu lienzo, y pregunta — «explica este tablero», «resume esto», «¿qué debería cambiar ahora?».',
          status: 'live',
        },
      ],
      harnessChips: ['modelo', 'memoria', 'skills', 'herramientas', 'conocimiento', 'disparadores'],
      copilotPrompts: ['Explica este gráfico', 'Resume estos datos', '¿Qué debería vigilar ahora?'],
    },
    connectors: {
      eyebrow: 'Conectores',
      title: 'Conéctate a todos los mercados',
      subtitle:
        'Conectores conectables transmiten precios en vivo, order books y datos de referencia directo a tus widgets — en FX, cripto, acciones, futuros, opciones, mercados de predicción, bases de datos y feeds sociales.',
      note: 'Hoy hay 28 conectores en vivo y 56 en el catálogo — brokers, exchanges, proveedores de datos, bases de datos y redes sociales. Muchos transmiten directo desde tu navegador; el resto pasa por un proxy ligero.',
      count: 28,
      countLabel: 'conectores en vivo',
      groups: {
        fx: 'FX',
        crypto: 'Cripto',
        equities: 'Acciones y futuros',
        prediction: 'Mercados de predicción',
        data: 'Datos y bases de datos',
        socials: 'Redes sociales',
      },
    },
    network: {
      eyebrow: 'La red',
      title: 'Construye solo. O conéctate a la red.',
      subtitle:
        'Quédate totalmente local y privado, o crea una cuenta gratis y únete a un mundo de makers que construyen, comparten y operan dashboards a tu lado.',
      liveLabel: 'En vivo',
      soonLabel: 'Próximamente',
      items: [
        {
          icon: 'users',
          title: 'Comunidad',
          body: 'Descubre y sigue makers, da like y comenta en un feed social para constructores de mercados, y comparte widgets que otros pueden añadir directo a su biblioteca — con perfiles públicos de maker.',
          status: 'live',
        },
        {
          icon: 'store',
          title: 'Marketplace',
          body: 'Publica widgets, temas, pantallas y bots desde tu biblioteca, e instala lo que otros comparten — con un linaje que da crédito a cada remake. Comprar y vender es lo siguiente.',
          status: 'live',
        },
        {
          icon: 'signal',
          title: 'Señales de estrategia',
          body: 'Publica historiales auditados, suscríbete a señales de makers de confianza y gana con las estrategias que ejecutas.',
          status: 'soon',
        },
        {
          icon: 'trophy',
          title: 'Reputación y medallas',
          body: 'Cada widget, bot y publicación da reputación — puntos, logros escalonados, medallas raras y niveles en tu perfil público. Convertirlos en créditos de recompensa es lo siguiente.',
          status: 'live',
        },
      ],
      accountBadge: 'Cuenta gratis',
      accountTitle: 'Una cuenta gratis desbloquea la red',
      accountBody: 'Sin tarjeta. Sigue construyendo en local cuando quieras — la cuenta siempre es opcional.',
      accountPoints: [
        '10.000 créditos de IA reservados al registrarte',
        'Sincronización en la nube de espacios y widgets entre dispositivos',
        'Comunidad, marketplace y biblioteca de widgets',
        'Puntos de reputación, medallas y niveles al construir y compartir',
      ],
      accountCta: 'Crea tu cuenta gratis',
    },
    plans: {
      eyebrow: 'Planes',
      title: 'Empieza gratis. Crece cuando quieras.',
      subtitle:
        'Construye gratis para siempre — en local con tu propia clave, o con 10.000 créditos reservados en una cuenta gratis. Sube de plan para más créditos, bots y agentes.',
      cta: 'Comparar todos los planes',
    },
    privacy: {
      eyebrow: 'Privado por diseño',
      title: 'Tus claves. Tus datos. Tu máquina.',
      body: 'Nexow corre totalmente local por defecto. En modo privado añades tu propia clave de Anthropic y la generación de widgets ocurre íntegramente en tu navegador — nada se envía a nuestros servidores, así que una sesión sin autenticar no nos cuesta nada ni filtra nada.',
      points: [
        'La generación con tu propia clave corre en el cliente',
        'Widgets, versiones y logs se guardan en tu navegador (IndexedDB)',
        'Las conexiones directas a venues mantienen las credenciales fuera de nuestra infraestructura',
        'No necesitas cuenta para empezar a construir',
      ],
      cta: 'Lee la arquitectura de modo local',
    },
    roadmap: {
      eyebrow: 'Roadmap',
      title: 'Esto es la preview. Esto es lo que viene.',
      subtitle:
        'Nexow lanzó el lienzo, la generación de código, los bots en la nube, los agentes, Copilot, el marketplace, las cuentas y la comunidad. El lienzo de apps más amplio sigue llegando a través de los bloques de abajo.',
      shipped: 'Disponible',
      soon: 'Próximamente',
      items: [
        { status: 'shipped', title: 'Generación de widgets con IA', body: 'Widgets en lenguaje natural corriendo aislados en el lienzo.' },
        { status: 'shipped', title: 'Más de 28 conectores', body: 'Brokers, exchanges, proveedores de datos, bases de datos y redes sociales en vivo.' },
        { status: 'shipped', title: 'Bots y alertas en la nube', body: 'Automatizaciones que vigilan tus datos y envían señales a tus widgets, con la pestaña cerrada.' },
        { status: 'shipped', title: 'Cuentas y sync en la nube', body: 'Cuentas gratis con espacios sincronizados en todos tus dispositivos — 10K créditos reservados para el lanzamiento de la plataforma.' },
        { status: 'shipped', title: 'Comunidad: feed y perfiles', body: 'Sigue makers, comparte widgets en el feed y reclama tu @usuario público.' },
        { status: 'soon', title: 'Agentes y Copilot', body: 'Despliega agentes en la nube con un harness completo, y un Copilot para tu espacio.' },
        { status: 'soon', title: 'Marketplace y señales', body: 'Compra y vende widgets, y publica señales de estrategia auditadas con las que ganar.' },
        { status: 'soon', title: 'XP, insignias y recompensas', body: 'Una cuenta gamificada — gana XP e insignias por logros y conviértelos en créditos de recompensa.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Preguntas, respondidas',
      subtitle: 'Todo lo que necesitas saber antes de abrir la app.',
      items: [
        {
          q: '¿Qué es Nexow?',
          a: 'Nexow es un espacio de trabajo nativo de IA para mercados. Describes un widget — un gráfico, tabla, mapa de calor o señal — en lenguaje natural, y Nexow genera su código, lo ejecuta en un iframe aislado y le transmite datos de mercado en vivo sobre un lienzo libre. Alrededor suma bots en la nube, agentes de IA, un Copilot y una comunidad de makers.',
        },
        {
          q: '¿Necesito saber programar?',
          a: 'No. Describes lo que quieres en lenguaje natural y Nexow escribe y ejecuta el widget por ti. Si lees código, el código fuente y el historial de versiones de cada widget están disponibles para inspeccionar y refinar.',
        },
        {
          q: '¿Mis datos son privados? ¿Necesito cuenta?',
          a: 'No hace falta cuenta. Nexow corre totalmente local por defecto: añades tu propia clave de Anthropic y la generación ocurre en tu navegador, con widgets, versiones y logs en IndexedDB. Una cuenta gratis siempre es opcional — suma créditos de IA, sync en la nube y comunidad, pero puedes seguir construyendo 100% en local.',
        },
        {
          q: '¿Qué mercados y venues soporta?',
          a: 'Nexow tiene 28 conectores en vivo (56 en el catálogo) que abarcan FX (OANDA, LMAX, FXCM), cripto (Binance, Coinbase, Kraken, Deribit, BitMEX), acciones y futuros (Interactive Brokers, Alpaca, TradeStation, Polygon, Rithmic, IQFeed), mercados de predicción (Kalshi, Polymarket), proveedores de datos y bases de datos (Alpha Vantage, Intrinio, Trading Economics, Postgres, ClickHouse, Qdrant) y feeds sociales (X, YouTube, Discord, Telegram, Spotify).',
        },
        {
          q: '¿Qué son los bots y los agentes?',
          a: 'Los bots son automatizaciones en la nube que vigilan tus datos y envían señales y alertas a tus widgets aunque tengas la pestaña cerrada — describe una alerta con palabras o constrúyela visualmente con umbrales, % de cambio, cruces de medias y operaciones nuevas en una cuenta de broker conectada. Los agentes son IA con un harness completo (modelo, memoria, skills, herramientas, conocimiento, disparadores) — diseña el tuyo hoy en el editor visual; el despliegue en la nube y el asistente Copilot llegan pronto.',
        },
        {
          q: '¿Hay comunidad y marketplace?',
          a: 'La comunidad ya está en vivo — crea una cuenta gratis, reclama tu @usuario público, sigue makers, publica en el feed y comparte widgets que otros pueden añadir directo a su biblioteca. El marketplace para comprar y vender widgets y las señales de estrategia auditadas llegan pronto.',
        },
        {
          q: '¿Qué son los XP y las recompensas?',
          a: 'Nexow está añadiendo una capa gamificada a las cuentas: crear widgets, ejecutar bots y compartir con la comunidad dará XP y desbloqueará insignias por logros — y los logros se convertirán en créditos de recompensa que podrás gastar en uso de IA. Llega pronto; las cuentas tempranas serán las primeras.',
        },
        {
          q: '¿Cuánto cuesta?',
          a: 'Gratis para siempre para construir — en local con tu propia clave, o con 10.000 créditos de IA reservados en una cuenta gratis. Los planes de pago (Supporter y Sponsor) suman créditos mensuales y límites más altos de bots y agentes, y Partner es para equipos que necesitan infraestructura privada. El pago llega pronto; consulta la página de precios.',
        },
        {
          q: '¿Qué modelo de IA usa Nexow?',
          a: 'Nexow genera con los modelos Claude de Anthropic mediante el SDK de Anthropic — Claude Opus 4.8 por defecto, con Sonnet 4.6 y Haiku 4.5 para una generación más rápida y económica. En modo privado aportas tu propia clave, así mantienes el control total del uso y el coste.',
        },
      ],
    },
    cta: {
      title: 'Crea tu primer widget en el próximo minuto',
      subtitle: 'La preview está en vivo y es gratis para probar. Sin registro, sin setup — solo describe lo que quieres ver.',
      primary: 'Abrir Nexow',
      secondary: 'Explorar funciones',
    },
  },
  features: {
    meta: {
      title: 'Funciones — Nexow',
      description:
        'Generación de widgets en lenguaje natural, runtime aislado, lienzo libre con grupos y links, más de 28 conectores de datos de mercado, bots y agentes en la nube, comunidad de makers con recompensas XP, modo local privado y biblioteca de widgets versionada. Descubre todo lo que hace Nexow.',
    },
    hero: {
      badge: 'Funciones',
      title: 'Todo lo que necesitas para crear dashboards de mercado con palabras',
      subtitle:
        'Nexow convierte una frase en un widget funcionando y conectado a datos — y te da el lienzo, los conectores, las automatizaciones en la nube y la red para armar una estación de trabajo real.',
    },
    groups: [
      {
        title: 'Genera',
        body: 'Describe lo que quieres ver; Nexow lo escribe y lo ejecuta.',
        items: [
          { icon: 'sparkles', title: 'Codegen en lenguaje natural', body: 'Describe un widget y Nexow genera todo su código con Claude — gráficos, tablas, mapas de calor, order books, señales a medida.' },
          { icon: 'wand', title: 'Refina conversando', body: 'Cambia lo que quieras pidiéndolo. «Añade una EMA 200», «pasa a escala log», «colorea por funding rate» — Nexow edita el widget en su sitio.' },
          { icon: 'history', title: 'Versionado e inspeccionable', body: 'Cada generación queda versionada con logs. Revierte, compara y lee el código exacto que corre en cada widget.' },
        ],
      },
      {
        title: 'Ejecuta',
        body: 'Un runtime seguro y rápido para el código generado.',
        items: [
          { icon: 'shield', title: 'Iframes aislados', body: 'Los widgets se ejecutan en iframes aislados con una frontera estricta — el código generado puede renderizar y obtener datos, pero no toca tu espacio ni otros widgets.' },
          { icon: 'bolt', title: 'Datos en vivo y en streaming', body: 'Los widgets se suscriben a precios en tiempo real, order books y datos de referencia con mínima latencia.' },
          { icon: 'layers', title: 'Lienzo libre y espacios', body: 'Organiza widgets en un lienzo libre, agrúpalos en espacios y pantallas, y cambia de configuración al instante.' },
          { icon: 'link', title: 'Grupos y Links', body: 'Reúne widgets en grupos con diseño de mosaico o pestañas, y conéctalos con Links — tuberías de un sentido o bidireccionales que llevan los datos de un widget a otro.' },
        ],
      },
      {
        title: 'Conecta',
        body: 'Datos conectables de los venues que de verdad usas.',
        items: [
          { icon: 'plug', title: 'Más de 28 conectores', body: 'FX, cripto, acciones, futuros, opciones y mercados de predicción — OANDA, Binance, Coinbase, IBKR, Polygon, Kalshi, Polymarket y más.' },
          { icon: 'globe', title: 'Directo desde el navegador', body: 'Donde CORS lo permite, las llamadas autenticadas a los venues corren directo desde tu navegador y evitan por completo nuestro proxy.' },
          { icon: 'database', title: 'Bases de datos y redes', body: 'Apunta widgets a Postgres, ClickHouse o Qdrant, o trae X, YouTube, Discord y Telegram junto a los mercados en vivo.' },
        ],
      },
      {
        title: 'Automatiza',
        body: 'Automatizaciones en la nube e IA que actúan sin ti.',
        items: [
          { icon: 'bot', title: 'Bots en la nube', body: 'Describe una alerta o constrúyela visualmente — umbrales, % de cambio, cruces de medias, resúmenes u operaciones nuevas en una cuenta de broker conectada. Los bots corren en un latido en la nube y envían señales a tus widgets, con la pestaña cerrada.' },
          { icon: 'cpu', title: 'Agentes de IA', body: 'Agentes con un harness completo — modelo, memoria, skills, herramientas, conocimiento y disparadores. Diseña el tuyo hoy en el editor visual del harness — el despliegue en la nube llega pronto.' },
          { icon: 'chat', title: 'Copilot', body: 'Un asistente para tu espacio: adjunta la captura de un widget o sus datos y pídele explicar, resumir o sugerir qué vigilar. Próximamente.' },
        ],
      },
      {
        title: 'Red',
        body: 'Construye junto a un mundo de makers.',
        items: [
          { icon: 'users', title: 'Comunidad', body: 'Sigue makers, publica en el feed y comparte widgets que otros pueden añadir directo a su biblioteca — en vivo hoy, con perfiles públicos de maker.' },
          { icon: 'store', title: 'Marketplace', body: 'Compra y vende widgets listos, y gana con lo que construyes. Próximamente — compartir ya funciona en la comunidad.' },
          { icon: 'signal', title: 'Señales de estrategia', body: 'Publica historiales auditados, suscríbete a señales de confianza y gana con las estrategias que ejecutas. Próximamente.' },
          { icon: 'trophy', title: 'XP y recompensas', body: 'Gana XP por construir, desbloquea insignias por logros y conviértelas en créditos de recompensa. Próximamente.' },
        ],
      },
      {
        title: 'Controla',
        body: 'Privado por defecto, tuyo para siempre.',
        items: [
          { icon: 'lock', title: 'Modo local privado', body: 'Usa tu propia clave de Anthropic y genera widgets en el cliente. Nada se envía a nuestros servidores — sin cuenta.' },
          { icon: 'sync', title: 'Sync opcional en la nube', body: 'Crea una cuenta gratis para sincronizar espacios, widgets y ajustes entre dispositivos — con un baúl de credenciales cifrado.' },
          { icon: 'library', title: 'Biblioteca reutilizable', body: 'Guarda cualquier widget en tu biblioteca y colócalo en cualquier dashboard con un clic.' },
        ],
      },
    ],
  },
  plansPage: {
    meta: {
      title: 'Planes — Nexow',
      description:
        'Construye gratis para siempre — en local con tu propia clave, o con 10.000 créditos de IA reservados en una cuenta gratis. Compara Free, Supporter, Sponsor y Partner por créditos, bots, agentes y personalización.',
    },
    hero: {
      badge: 'Planes',
      title: 'Gratis para empezar. Espacio para crecer.',
      subtitle:
        'Construye gratis — en local con tu propia clave, o regístrate y reserva 10.000 créditos de IA. Sube de plan cuando necesites más capacidad, automatización y acabado.',
    },
    comingSoon:
      'El pago de Supporter y Sponsor llega pronto, y los créditos de la plataforma se activan con él. Hoy todos están en Free — crea una cuenta para ser de los primeros cuando se abra.',
    highlights: {
      title: 'Qué escala con tu plan',
      items: [
        {
          icon: 'coins',
          title: 'Créditos de IA',
          body: 'Impulsan la generación de widgets, respuestas de Copilot y lógica de bots. Free reserva 10K para empezar; los planes de pago se renuevan cada mes.',
        },
        {
          icon: 'bot',
          title: 'Bots y agentes',
          body: 'Los bots vigilan mercados y disparan acciones. Los agentes ejecutan flujos de varios pasos. Los planes superiores suben los límites concurrentes.',
        },
        {
          icon: 'sparkles',
          title: 'Personalización',
          body: 'Colores de acento, logos y UI premium se desbloquean al subir de plan — haz que Nexow se sienta tuyo.',
        },
      ],
    },
    included: {
      title: 'Incluido en todos los planes',
      items: [
        'Pantallas, espacios y widgets ilimitados',
        '28+ conectores de datos de mercado en vivo',
        'Runtime de widgets en sandbox',
        'Copilot global (próximamente)',
        'Acceso a comunidad y marketplace',
      ],
    },
    billing: { monthly: 'Mensual', yearly: 'Anual', save: '2 meses gratis' },
    tiers: [
      {
        name: 'Free',
        tagline: 'Todo lo que necesitas para construir.',
        priceMonthly: '0 €',
        priceYearly: '0 €',
        cadence: 'para siempre',
        stats: ['10K créditos', '10 bots', '3 agentes'],
        cta: 'Empezar gratis',
        ctaHref: 'https://x.nexow.ai',
        features: [
          '10.000 créditos de IA reservados al registrarte',
          'Pantallas, espacios y widgets ilimitados',
          'Conexiones de navegador ilimitadas',
          'Sync en la nube entre dispositivos',
          'Copilot global (próximamente)',
          'Acceso a comunidad y marketplace',
        ],
      },
      {
        name: 'Supporter',
        tagline: 'Para makers que quieren más espacio.',
        priceMonthly: '9,99 €',
        priceYearly: '8,33 €',
        billedYearly: '99,90 € al año',
        cadence: '/mes',
        badge: 'Próximamente',
        stats: ['50K créditos/mes', '30 bots', '10 agentes'],
        note: 'Todo lo de Free, y además:',
        cta: 'Hazte Supporter',
        ctaHref: 'https://x.nexow.ai',
        features: [
          '50.000 créditos cada mes',
          'Hasta 30 bots y 10 agentes',
          'Un Copilot por espacio de trabajo',
          'Segundo color de acento (gradiente)',
          'Opciones de UI y apariencia exclusivas',
        ],
      },
      {
        name: 'Sponsor',
        tagline: 'Para power users que van en serio.',
        priceMonthly: '69,99 €',
        priceYearly: '58,33 €',
        billedYearly: '699,90 € al año',
        cadence: '/mes',
        badge: 'Mejor relación',
        stats: ['800K créditos/mes', '300 bots', '100 agentes'],
        note: 'Todo lo de Supporter, y además:',
        cta: 'Hazte Sponsor',
        ctaHref: 'https://x.nexow.ai',
        featured: true,
        features: [
          '800.000 créditos cada mes',
          'Hasta 300 bots y 100 agentes',
          'Conexiones a medida (Connector Builder)',
          'Un Copilot por pantalla',
          'Sube tu propio logo',
          'Personalizaciones premium de UI',
        ],
      },
      {
        name: 'Partner',
        tagline: 'Para equipos que lo necesitan todo.',
        priceMonthly: 'A medida',
        priceYearly: 'A medida',
        cadence: '',
        stats: ['Infra privada', 'A tu lado', 'SLA'],
        note: 'Todo lo de Sponsor, y además:',
        cta: 'Contáctanos',
        ctaHref: 'mailto:partners@nexow.ai',
        features: [
          'Infraestructura privada',
          'Puesta en marcha guiada',
          'Desarrollo a medida de primera',
          'Marca y personalización a medida',
          'Soporte dedicado',
        ],
      },
    ],
    faqTitle: 'Preguntas sobre los planes',
    faq: [
      { q: '¿Nexow es de verdad gratis?', a: 'Sí. Puedes construir gratis para siempre — totalmente local con tu propia clave de Anthropic (solo pagas tu uso de la API), o crea una cuenta gratis que reserva 10.000 créditos de IA para cuando se abra el modo plataforma, sin necesidad de clave propia.' },
      { q: '¿Qué son los créditos?', a: 'Los créditos miden el uso de IA — generar widgets, links, bots y respuestas de Copilot. La cuenta gratis reserva 10.000 para empezar, y los planes de pago dan una asignación mensual (50K en Supporter, 800K en Sponsor). La medición de créditos se activa con el modo plataforma, y puedes comprar más cuando quieras.' },
      { q: '¿Cuándo salen los planes de pago?', a: 'Supporter y Sponsor ya están definidos y se muestran en la app, pero el pago llega pronto. Hoy todos están en Free — crea una cuenta para ser de los primeros cuando se abra.' },
      { q: '¿Puedo pagar anual?', a: 'Sí. La facturación anual te da dos meses gratis frente al pago mensual. Puedes cambiar entre mensual y anual cuando quieras.' },
    ],
  },
  connectorsPage: {
    meta: {
      title: 'Conectores — Nexow',
      description:
        'Explora todos los conectores de Nexow — 28 en vivo y 56 en el catálogo. Brokers, exchanges, DEX, mercados de predicción, proveedores de datos, bases de datos y redes sociales. Busca, filtra y conecta.',
    },
    hero: {
      badge: 'Conectores',
      title: 'Todos los mercados, un solo lienzo',
      subtitle:
        'Busca en el catálogo completo de venues a los que Nexow se conecta — brokers, exchanges, proveedores de datos, bases de datos y redes. Los conectores en vivo ya funcionan; el resto llega pronto.',
    },
    searchPlaceholder: 'Buscar conectores…',
    filters: 'Filtros',
    all: 'Todos',
    categories: { finance: 'Finanzas', data: 'Datos', socials: 'Redes' },
    status: { all: 'Todos', live: 'En vivo', soon: 'Pronto' },
    kinds: {
      broker: 'Broker',
      exchange: 'Exchange',
      prediction: 'Mercado de predicción',
      dex: 'DEX',
      aggregator: 'Agregador',
      data: 'Datos de mercado',
      sql: 'Base de datos SQL',
      nosql: 'Base de datos NoSQL',
      warehouse: 'Data warehouse',
      vector: 'Base de datos vectorial',
      messaging: 'Mensajería',
      social: 'Red social',
      video: 'Vídeo',
      community: 'Comunidad',
      music: 'Música',
    },
    assets: {
      equities: 'Acciones',
      indices: 'Índices',
      fixed_income: 'Renta fija',
      fx: 'FX',
      commodities: 'Materias primas',
      crypto: 'Cripto',
      volatility: 'Volatilidad',
      prediction_markets: 'Predicción',
    },
    visit: 'Visitar sitio',
    results: '{n} conectores',
    empty: 'Ningún conector coincide con tu búsqueda.',
    exploreCta: 'Explorar todos los conectores',
    countLive: 'en vivo',
    countCatalog: 'en el catálogo',
  },
  about: {
    meta: {
      title: 'Nosotros — Nexow',
      description:
        'Nexow construye una estación de trabajo nativa de IA para mercados: describe cualquier widget en lenguaje natural y obtén un dashboard funcionando y conectado a datos. Privado por defecto. Conoce nuestra misión.',
    },
    hero: {
      badge: 'Nosotros',
      title: 'Una estación de trabajo nativa de IA para los mercados',
      subtitle:
        'Creemos que armar un dashboard de trading debería ser tan rápido como describirlo. Nexow convierte el lenguaje natural en widgets funcionando y conectados a datos — y mantiene el control de tus claves y datos en tus manos.',
    },
    missionTitle: 'Por qué construimos Nexow',
    mission: [
      'Cada trader y analista acaba reconstruyendo a mano los mismos gráficos, tablas y monitores — pegando APIs, peleándose con websockets y luchando con el layout. Las herramientas son potentes pero lentas, y las buenas están encerradas tras plataformas pesadas.',
      'Nexow le da la vuelta. Describes lo que quieres ver y una IA escribe un widget real y funcionando — aislado, versionado y conectado a datos en vivo de los venues que ya usas. El dashboard se arma solo y tú lo refinas en lenguaje natural.',
      'Lo construimos con la privacidad primero: corre totalmente local con tu propia clave, guarda tus datos en tu navegador y conéctate directo a los venues cuando se pueda. A medida que añadimos agentes de trading, componentes de servidor y una capa de comunidad, ese principio no cambia — tus claves, tus datos, tu máquina.',
    ],
    valuesTitle: 'Lo que valoramos',
    values: [
      { icon: 'lock', title: 'Privado por defecto', body: 'Local primero, con tu propia clave, sin que tus datos salgan de tu máquina salvo que lo decidas.' },
      { icon: 'bolt', title: 'Velocidad al insight', body: 'De una frase a un widget en vivo en segundos — el camino más corto entre una pregunta y un gráfico.' },
      { icon: 'shield', title: 'Seguro por construcción', body: 'El código generado corre aislado con una frontera estricta, para que potencia nunca signifique riesgo.' },
      { icon: 'globe', title: 'Abierto a todos los mercados', body: 'FX, cripto, acciones, futuros, opciones y mercados de predicción — un solo lienzo para todos.' },
    ],
    ctaTitle: 'Compruébalo tú mismo',
    ctaBody: 'La preview está en vivo. Describe un widget y mira a Nexow construirlo.',
    cta: 'Abrir la app',
  },
  blog: {
    meta: {
      title: 'Blog — Nexow',
      description:
        'Guías y análisis a fondo sobre crear dashboards de mercado con IA, conectar datos en vivo y herramientas de trading — del equipo de Nexow.',
    },
    title: 'El blog de Nexow',
    subtitle: 'Construyendo herramientas de mercado nativas de IA — guías, análisis y notas de producto.',
    latest: 'Novedad',
    readMore: 'Leer artículo',
    backToBlog: 'Volver al blog',
    published: 'Publicado',
    updated: 'Actualizado',
    minRead: 'min de lectura',
  },
  notFound: {
    title: 'Esta página se salió del lienzo',
    body: 'La página que buscas no existe — pero tu próximo dashboard sí puede existir.',
    cta: 'Volver al inicio',
  },
  privacyPage: {
    badge: 'Privacidad',
    title: 'Política de Privacidad',
    subtitle: 'Cómo trata Nexow tus datos — versión corta: lo mínimo posible.',
    meta: {
      title: 'Política de Privacidad — Nexow',
      description: 'Nexow es privado por defecto. Descubre cómo tratamos los datos, las claves y las conexiones.',
    },
    updated: 'Última actualización: 1 de julio de 2026',
    sections: [
      { h: 'Privado por defecto', p: 'Nexow corre totalmente local por defecto. En modo privado aportas tu propia clave de la API de Anthropic y la generación de widgets ocurre íntegramente en tu navegador. Tus prompts y el código generado se envían desde tu navegador directo a Anthropic — no a través de nuestros servidores.' },
      { h: 'Qué guardamos', p: 'Tus widgets, versiones, logs y biblioteca se guardan en tu navegador con IndexedDB. Permanecen en tu dispositivo y no se suben a Nexow. Borrar el almacenamiento de tu navegador los elimina de forma permanente.' },
      { h: 'Conexiones a datos de mercado', p: 'Donde el venue lo permite, Nexow se conecta directo desde tu navegador, y tus credenciales del venue se usan solo para hablar con ese venue. Algunos venues requieren pasar por un proxy ligero; en esos casos solo pasa la información necesaria para cumplir la petición.' },
      { h: 'Este sitio web', p: 'Este sitio de marketing es un sitio estático. Mantenemos la analítica al mínimo y respetuosa con la privacidad, y no vendemos datos personales. Los enlaces salientes (como la app) están claramente señalados.' },
      { h: 'Contacto', p: '¿Dudas sobre privacidad? Escribe a hello@nexow.ai.' },
    ],
  },
};
