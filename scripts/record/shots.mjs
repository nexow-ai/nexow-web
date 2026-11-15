/**
 * Shot list for every recording the site shows. One entry per `public/video/<slug>` clip.
 *
 *   surface  web | desktop | mobile — picks the recorder (record-web.mjs, record-mobile.sh)
 *   route    app path or deep link to open first (relative to the app origin)
 *   steps    what the recorder does, in order (see the `do` helpers in record-web.mjs)
 *   seconds  loop length to capture; clips are trimmed to 6–15 s by encode-videos.mjs
 *
 * Web and desktop footage comes from the web app, so desktop clips reuse web steps in a native
 * window frame. Mobile clips are driven by Flutter integration tests (see record-mobile.sh).
 */
export const SHOTS = [
  {
    slug: 'web-hero',
    surface: 'web',
    route: '/',
    seconds: 12,
    steps: ['prompt:Build a crypto desk with a candlestick chart and a watchlist', 'wait:build'],
  },
  {
    slug: 'web-build',
    surface: 'web',
    route: '/',
    seconds: 15,
    steps: ['prompt:Build a habit tracker with a weekly streak', 'wait:build'],
  },
  {
    slug: 'web-canvas',
    surface: 'web',
    route: '/',
    seconds: 10,
    steps: ['drag:first-widget', 'resize:first-widget', 'group:two-widgets', 'zoom:out'],
  },
  {
    slug: 'web-wires',
    surface: 'web',
    route: '/?library=links',
    seconds: 10,
    steps: ['zoom:in', 'drag:port'],
  },
  {
    slug: 'web-connectors',
    surface: 'web',
    route: '/?connectors=binance',
    seconds: 10,
    steps: ['scroll:catalog', 'open:first-connector'],
  },
  {
    slug: 'web-copilot',
    surface: 'web',
    route: '/?copilot=kwami',
    seconds: 12,
    steps: ['say:Add a clock widget', 'wait:reply'],
  },
  {
    slug: 'web-automate',
    surface: 'web',
    route: '/?bots',
    seconds: 10,
    steps: ['open:mission-control'],
  },
  {
    slug: 'web-machines',
    surface: 'web',
    route: '/',
    seconds: 12,
    steps: ['insert:pc', 'wait:stream'],
  },
  {
    slug: 'web-marketplace',
    surface: 'web',
    route: '/?marketplace',
    seconds: 10,
    steps: ['scroll:listings', 'open:first-listing'],
  },
  {
    slug: 'web-collab',
    surface: 'web',
    route: '/',
    seconds: 10,
    steps: ['invite:second-session', 'cursor:both'],
  },
  {
    slug: 'web-private',
    surface: 'web',
    route: '/?account=settings',
    seconds: 10,
    steps: ['toggle:privacy-mode', 'open:app-lock'],
  },

  {
    slug: 'desktop-hero',
    surface: 'desktop',
    route: '/',
    seconds: 12,
    steps: ['launch:desktop', 'open:canvas'],
  },
  { slug: 'desktop-native', surface: 'desktop', route: '/', seconds: 8, steps: ['launch:desktop'] },
  {
    slug: 'desktop-permissions',
    surface: 'desktop',
    route: '/?copilot=kwami',
    seconds: 10,
    steps: ['say:Hello', 'record:screen'],
  },
  {
    slug: 'desktop-platforms',
    surface: 'desktop',
    route: '/?account=settings',
    seconds: 8,
    steps: ['open:this-device'],
  },
  {
    slug: 'desktop-extension',
    surface: 'desktop',
    route: '/share',
    seconds: 8,
    steps: ['extension:save-page'],
  },

  {
    slug: 'mobile-hero-phone',
    surface: 'mobile',
    route: '/community',
    seconds: 12,
    steps: ['feed', 'builder', 'home-widget'],
  },
  {
    slug: 'mobile-feed-phone',
    surface: 'mobile',
    route: '/community',
    seconds: 12,
    steps: ['scroll:mosaic', 'open:immersive'],
  },
  {
    slug: 'mobile-build-phone',
    surface: 'mobile',
    route: '/widgets',
    seconds: 15,
    steps: ['prompt', 'wait:build', 'run'],
  },
  {
    slug: 'mobile-home-phone',
    surface: 'mobile',
    route: '/home-widgets',
    seconds: 10,
    steps: ['pick:glance', 'add:home-screen'],
  },
  {
    slug: 'mobile-share-phone',
    surface: 'mobile',
    route: '/incoming-shares',
    seconds: 8,
    steps: ['share:image', 'post'],
  },
  {
    slug: 'mobile-messages-phone',
    surface: 'mobile',
    route: '/messages',
    seconds: 10,
    steps: ['open:group', 'open:calendar'],
  },
  {
    slug: 'mobile-push-phone',
    surface: 'mobile',
    route: '/notifications/settings',
    seconds: 8,
    steps: ['enable:push'],
  },
  {
    slug: 'mobile-connect-phone',
    surface: 'mobile',
    route: '/connections',
    seconds: 10,
    steps: ['open:venue', 'fill:key'],
  },

  {
    slug: 'for-traders',
    surface: 'web',
    route: '/',
    seconds: 15,
    steps: [
      'prompt:Build me a crypto desk: candlestick chart, watchlist, order book depth, heatmap and derivatives.',
      'wait:build',
    ],
  },
  {
    slug: 'for-founders',
    surface: 'web',
    route: '/',
    seconds: 15,
    steps: ['prompt:Build a founder dashboard with revenue, signups and runway', 'wait:build'],
  },
  {
    slug: 'for-builders',
    surface: 'web',
    route: '/',
    seconds: 15,
    steps: ['prompt:Build a widget that charts GitHub stars over time', 'wait:build'],
  },

  {
    slug: 'features-widgets',
    surface: 'web',
    route: '/',
    seconds: 10,
    steps: ['prompt:Build a moodboard', 'wait:build'],
  },
  {
    slug: 'features-workspace',
    surface: 'web',
    route: '/',
    seconds: 10,
    steps: ['drag:first-widget', 'switch:screen'],
  },
  {
    slug: 'features-connectors',
    surface: 'web',
    route: '/?connectors=binance',
    seconds: 10,
    steps: ['open:first-connector'],
  },
  {
    slug: 'features-automate',
    surface: 'web',
    route: '/?bots',
    seconds: 10,
    steps: ['open:mission-control'],
  },
  {
    slug: 'features-network',
    surface: 'web',
    route: '/community',
    seconds: 10,
    steps: ['scroll:feed'],
  },
  {
    slug: 'features-account',
    surface: 'web',
    route: '/?account=settings',
    seconds: 10,
    steps: ['toggle:privacy-mode'],
  },
];
