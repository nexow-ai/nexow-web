// AUTO-GENERATED from the Nexow app connector catalog. Do not edit by hand.
// Regenerate with scratchpad/gen-connectors.mjs.

export type ConnectorCategory = 'finance' | 'wallets' | 'services' | 'data' | 'socials';
export type ConnectorStatus = 'live' | 'soon';
export type ConnectorLogoFit = 'cover' | 'contain';

export interface Connector {
  id: string;
  name: string;
  category: ConnectorCategory;
  /** i18n key into connectorsPage.kinds */
  kind: string;
  status: ConnectorStatus;
  trading: boolean;
  /** asset-class keys (i18n into connectorsPage.assets) */
  assets: string[];
  url: string;
  /** public path to the venue icon */
  logo: string;
  /** public path to the wide brand banner (empty when none) */
  banner: string;
  logoFit: ConnectorLogoFit;
  /** short venue blurb from the app catalog */
  notes: string;
}

export const CONNECTORS: Connector[] = [
  {
    "id": "alpaca",
    "name": "Alpaca",
    "category": "finance",
    "kind": "broker",
    "status": "live",
    "trading": true,
    "assets": [
      "equities",
      "crypto"
    ],
    "url": "https://alpaca.markets/",
    "logo": "/connectors/alpaca.png",
    "banner": "/connectors/banners/alpaca.png",
    "logoFit": "cover",
    "notes": "API-first; best developer experience and paper-trading sandbox. US equities/options/crypto."
  },
  {
    "id": "alpha_vantage",
    "name": "Alpha Vantage",
    "category": "data",
    "kind": "data",
    "status": "live",
    "trading": false,
    "assets": [
      "equities",
      "fx",
      "crypto",
      "commodities"
    ],
    "url": "https://www.alphavantage.co/",
    "logo": "/connectors/alpha_vantage.jpg",
    "banner": "/connectors/banners/alpha_vantage.jpg",
    "logoFit": "cover",
    "notes": "Free-tier market data API covering stocks, forex, crypto, and commodities. Good for prototyping and lightweight backtesting."
  },
  {
    "id": "anchor_browser",
    "name": "Anchor Browser",
    "category": "services",
    "kind": "browser",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://www.anchorbrowser.io/",
    "logo": "/connectors/anchor_browser.png",
    "banner": "/connectors/banners/anchor_browser.png",
    "logoFit": "cover",
    "notes": "Cloud browser infrastructure for AI agents — persistent sessions, stealth, and automation APIs. Coming soon as a remote-browser provider."
  },
  {
    "id": "apify",
    "name": "Apify",
    "category": "services",
    "kind": "scraping",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://apify.com/",
    "logo": "/connectors/apify.svg",
    "banner": "/connectors/banners/apify.png",
    "logoFit": "cover",
    "notes": "Actor platform for web scraping and automation — run store actors or your own crawlers via API. Coming soon for scheduled scrapes and agent tool calls."
  },
  {
    "id": "bigquery",
    "name": "BigQuery",
    "category": "data",
    "kind": "warehouse",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://cloud.google.com/bigquery",
    "logo": "/connectors/bigquery.png",
    "banner": "/connectors/banners/bigquery.png",
    "logoFit": "cover",
    "notes": "Google Cloud analytics warehouse connector for reading research datasets, feature stores, and backtest outputs from BigQuery."
  },
  {
    "id": "binance",
    "name": "Binance",
    "category": "finance",
    "kind": "exchange",
    "status": "live",
    "trading": true,
    "assets": [
      "crypto"
    ],
    "url": "https://www.binance.com/",
    "logo": "/connectors/binance.png",
    "banner": "/connectors/banners/binance.jpeg",
    "logoFit": "cover",
    "notes": "Deepest crypto liquidity. US users restricted; treat region carefully in the filter. Public spot market data is keyless; trading (Spot + USD-M Futures) needs an API key, with a full Testnet demo."
  },
  {
    "id": "bitmex",
    "name": "BitMEX",
    "category": "finance",
    "kind": "exchange",
    "status": "live",
    "trading": true,
    "assets": [
      "crypto"
    ],
    "url": "https://www.bitmex.com/",
    "logo": "/connectors/bitmex.png",
    "banner": "/connectors/banners/bitmex.jpg",
    "logoFit": "cover",
    "notes": "Pioneer crypto derivatives exchange. Perpetual swaps and dated futures on BTC/ETH and altcoins (Bitcoin is XBT). Public market data is keyless; trading needs an API key, with a full Testnet demo."
  },
  {
    "id": "bluesky",
    "name": "Bluesky",
    "category": "socials",
    "kind": "social",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://bsky.app/",
    "logo": "/connectors/bluesky.svg",
    "banner": "",
    "logoFit": "cover",
    "notes": "Read the Discover feed or an account's posts via the public Bluesky AppView API. Keyless — no signup. Read from a widget with ctx.data.feed({ provider: 'bluesky' }) or ({ channel: 'handle.bsky.social' }). Keyword search needs an authenticated session, so it is not offered."
  },
  {
    "id": "bright_data",
    "name": "Bright Data",
    "category": "services",
    "kind": "scraping",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://brightdata.com/",
    "logo": "/connectors/bright_data.png",
    "banner": "/connectors/banners/bright_data.jpg",
    "logoFit": "cover",
    "notes": "Web data platform (proxies, unlocker, scraping browser, datasets). Coming soon for hard-to-reach sites and large-scale collection."
  },
  {
    "id": "browser_use",
    "name": "Browser Use",
    "category": "services",
    "kind": "browser",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://browser-use.com/",
    "logo": "/connectors/browser_use.png",
    "banner": "/connectors/banners/browser_use.png",
    "logoFit": "cover",
    "notes": "AI browser agent that can navigate sites, fill forms, and complete multi-step web tasks. Coming soon as an alternate remote-browser / agent runtime alongside Browserbase."
  },
  {
    "id": "browserbase",
    "name": "Browserbase",
    "category": "services",
    "kind": "browser",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://www.browserbase.com/",
    "logo": "/connectors/browserbase.svg",
    "banner": "/connectors/banners/browserbase.png",
    "logoFit": "cover",
    "notes": "Remote browser sessions for sites that block normal embeds. Add your own Browserbase API key so Remote Browser embeds use your provider instead of a Nexow-managed key."
  },
  {
    "id": "browserless",
    "name": "Browserless",
    "category": "services",
    "kind": "browser",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://www.browserless.io/",
    "logo": "/connectors/browserless.png",
    "banner": "/connectors/banners/browserless.jpg",
    "logoFit": "cover",
    "notes": "Headless Chrome as a service (Puppeteer/Playwright compatible). Coming soon for remote browser sessions and web automation."
  },
  {
    "id": "bybit",
    "name": "Bybit",
    "category": "finance",
    "kind": "exchange",
    "status": "live",
    "trading": true,
    "assets": [
      "crypto"
    ],
    "url": "https://www.bybit.com/",
    "logo": "/connectors/bybit.png",
    "banner": "/connectors/banners/bybit.jpeg",
    "logoFit": "cover",
    "notes": "Crypto exchange API for spot and derivatives, including unified account trading, market streams, and private order updates."
  },
  {
    "id": "ccxt",
    "name": "CCXT",
    "category": "finance",
    "kind": "aggregator",
    "status": "live",
    "trading": false,
    "assets": [
      "crypto"
    ],
    "url": "https://ccxt.com/",
    "logo": "/connectors/ccxt.svg",
    "banner": "/connectors/banners/ccxt.png",
    "logoFit": "cover",
    "notes": "Unified crypto exchange API layer. In Nexow v1 it serves keyless PUBLIC market data (candles) browser-side for CORS-open exchanges — trading and keyed calls belong to each exchange’s dedicated connector."
  },
  {
    "id": "charles_schwab",
    "name": "Charles Schwab",
    "category": "finance",
    "kind": "broker",
    "status": "live",
    "trading": true,
    "assets": [
      "equities",
      "indices",
      "fixed_income"
    ],
    "url": "https://www.schwab.com/",
    "logo": "/connectors/charles_schwab.png",
    "banner": "/connectors/banners/charles_schwab.jpg",
    "logoFit": "cover",
    "notes": "US brokerage API for Schwab accounts, including market data and order workflows through the Schwab developer platform."
  },
  {
    "id": "clickhouse",
    "name": "ClickHouse",
    "category": "data",
    "kind": "sql",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://clickhouse.com/",
    "logo": "/connectors/clickhouse.jpeg",
    "banner": "/connectors/banners/clickhouse.png",
    "logoFit": "cover",
    "notes": "Columnar OLAP database — store and query large tick/bar history at speed."
  },
  {
    "id": "coinbase",
    "name": "Coinbase",
    "category": "finance",
    "kind": "exchange",
    "status": "live",
    "trading": true,
    "assets": [
      "crypto"
    ],
    "url": "https://www.coinbase.com/",
    "logo": "/connectors/coinbase.jpeg",
    "banner": "/connectors/banners/coinbase.jpg",
    "logoFit": "cover",
    "notes": "US-regulated spot crypto. CDP API key (key name + EC private key); live only — no sandbox."
  },
  {
    "id": "coinbase_wallet",
    "name": "Coinbase Wallet",
    "category": "wallets",
    "kind": "wallet",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://wallet.coinbase.com/",
    "logo": "/connectors/coinbase_wallet.png",
    "banner": "/connectors/banners/coinbase_wallet.png",
    "logoFit": "cover",
    "notes": "Connect the Coinbase Wallet extension (or the app’s browser on mobile) — the self-custody wallet, separate from the Coinbase exchange. It approves sharing its public address, and Nexow tracks it watch-only: native balance, ERC-20 holdings, USD value, and recent activity via Blockscout public APIs. Nexow never asks for signatures or transactions. Any address can also be pasted to watch."
  },
  {
    "id": "curve_finance",
    "name": "Curve Finance",
    "category": "finance",
    "kind": "dex",
    "status": "live",
    "trading": false,
    "assets": [
      "crypto"
    ],
    "url": "https://curve.fi/",
    "logo": "/connectors/curve_finance.png",
    "banner": "/connectors/banners/curve_finance.png",
    "logoFit": "cover",
    "notes": "Decentralized exchange protocol focused on stablecoin, pegged-asset, and concentrated liquidity pools across EVM networks."
  },
  {
    "id": "data_gov",
    "name": "Data.gov",
    "category": "services",
    "kind": "open_data",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://data.gov/",
    "logo": "/connectors/data_gov.png",
    "banner": "/connectors/banners/data_gov.png",
    "logoFit": "cover",
    "notes": "US federal open-data catalog (CKAN) — search datasets across agencies. Free API key from api.data.gov."
  },
  {
    "id": "databento",
    "name": "Databento",
    "category": "data",
    "kind": "data",
    "status": "live",
    "trading": false,
    "assets": [
      "equities",
      "indices",
      "fixed_income",
      "fx",
      "commodities",
      "crypto"
    ],
    "url": "https://databento.com/",
    "logo": "/connectors/databento.png",
    "banner": "/connectors/banners/databento.png",
    "logoFit": "cover",
    "notes": "Developer-first market data API for historical and live tick, order book, bar, and reference data across equities, futures, options, FX, and crypto datasets."
  },
  {
    "id": "deribit",
    "name": "Deribit",
    "category": "finance",
    "kind": "exchange",
    "status": "live",
    "trading": true,
    "assets": [
      "crypto"
    ],
    "url": "https://www.deribit.com/",
    "logo": "/connectors/deribit.png",
    "banner": "/connectors/banners/deribit.webp",
    "logoFit": "cover",
    "notes": "Dominant venue for crypto options; key for derivatives/vol quants. Public market data is keyless; account data and trading use an OAuth2 API key (client id + secret), with a full Testnet demo."
  },
  {
    "id": "devto",
    "name": "DEV Community",
    "category": "socials",
    "kind": "community",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://dev.to/",
    "logo": "/connectors/devto.svg",
    "banner": "",
    "logoFit": "cover",
    "notes": "Read the latest developer articles, one tag, or one author via the public Forem API. Keyless — no signup. Read from a widget with ctx.data.feed({ provider: 'devto', query: 'rust' }) or ({ channel: 'username' }). `query` is matched as a TAG — the public API has no full-text search."
  },
  {
    "id": "discord",
    "name": "Discord",
    "category": "socials",
    "kind": "community",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://discord.com/",
    "logo": "/connectors/discord.svg",
    "banner": "/connectors/banners/discord.jpg",
    "logoFit": "cover",
    "notes": "Read messages from server channels your bot can access via the Discord API. Add a bot token and invite it to your server, then read from a widget with ctx.data.feed({ provider: 'discord', channel: '<channelId>' })."
  },
  {
    "id": "dome",
    "name": "Dome",
    "category": "finance",
    "kind": "aggregator",
    "status": "live",
    "trading": false,
    "assets": [
      "prediction_markets"
    ],
    "url": "https://domeapi.io/",
    "logo": "/connectors/dome.svg",
    "banner": "/connectors/banners/dome.jpeg",
    "logoFit": "cover",
    "notes": "Unified prediction-market API for cross-platform prices, candlesticks, wallet analytics, and order tracking across Polymarket and Kalshi."
  },
  {
    "id": "eodhd",
    "name": "EODHD",
    "category": "data",
    "kind": "data",
    "status": "live",
    "trading": false,
    "assets": [
      "equities",
      "indices",
      "fx",
      "crypto",
      "commodities",
      "fixed_income"
    ],
    "url": "https://eodhd.com/",
    "logo": "/connectors/eodhd.png",
    "banner": "/connectors/banners/eodhd.jpeg",
    "logoFit": "cover",
    "notes": "Broad financial data API for EOD/intraday prices, fundamentals, options, bonds, forex, crypto, news, and macro datasets."
  },
  {
    "id": "finnhub",
    "name": "Finnhub",
    "category": "data",
    "kind": "data",
    "status": "live",
    "trading": false,
    "assets": [
      "equities",
      "indices",
      "fx",
      "crypto",
      "fixed_income"
    ],
    "url": "https://finnhub.io/",
    "logo": "/connectors/finnhub.png",
    "banner": "/connectors/banners/finnhub.png",
    "logoFit": "cover",
    "notes": "Market data API for equities, fundamentals, news, forex, crypto, bonds, and economic data with REST and WebSocket endpoints."
  },
  {
    "id": "firecrawl",
    "name": "Firecrawl",
    "category": "services",
    "kind": "scraping",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://www.firecrawl.dev/",
    "logo": "/connectors/firecrawl.png",
    "banner": "/connectors/banners/firecrawl.png",
    "logoFit": "cover",
    "notes": "Web crawling API that turns sites into clean markdown/JSON for LLM agents. Coming soon for research widgets and agent data ingestion."
  },
  {
    "id": "frankfurter",
    "name": "Frankfurter",
    "category": "services",
    "kind": "open_data",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://www.frankfurter.app/",
    "logo": "/connectors/frankfurter.png",
    "banner": "/connectors/banners/frankfurter.png",
    "logoFit": "cover",
    "notes": "Free ECB foreign-exchange rates API (powered by the European Central Bank reference rates). Keyless — latest and historical FX pairs with no signup."
  },
  {
    "id": "fred",
    "name": "FRED",
    "category": "services",
    "kind": "open_data",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://fred.stlouisfed.org/",
    "logo": "/connectors/fred.png",
    "banner": "/connectors/banners/fred.png",
    "logoFit": "cover",
    "notes": "Federal Reserve Economic Data (St. Louis Fed) — thousands of macro series (GDP, CPI, unemployment, rates). Free API key from the FRED site."
  },
  {
    "id": "fxcm",
    "name": "FXCM",
    "category": "finance",
    "kind": "broker",
    "status": "live",
    "trading": true,
    "assets": [
      "fx",
      "indices",
      "commodities"
    ],
    "url": "https://www.fxcm.com/",
    "logo": "/connectors/fxcm.jpeg",
    "banner": "/connectors/banners/fxcm.png",
    "logoFit": "cover",
    "notes": "Retail FX/CFD broker with REST and FIX APIs. Covers major/minor/exotic FX pairs plus index and commodity CFDs. REST auth uses a persistent access token from Trading Station Web."
  },
  {
    "id": "hackernews",
    "name": "Hacker News",
    "category": "socials",
    "kind": "community",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://news.ycombinator.com/",
    "logo": "/connectors/hackernews.svg",
    "banner": "",
    "logoFit": "cover",
    "notes": "Read the front page, search stories, or follow a user's submissions via the Algolia HN Search API. Keyless — no signup. Read from a widget with ctx.data.feed({ provider: 'hackernews' }) or ({ query: '...' })."
  },
  {
    "id": "hyperliquid",
    "name": "Hyperliquid",
    "category": "finance",
    "kind": "dex",
    "status": "live",
    "trading": false,
    "assets": [
      "crypto"
    ],
    "url": "https://hyperliquid.xyz/",
    "logo": "/connectors/hyperliquid.webp",
    "banner": "/connectors/banners/hyperliquid.png",
    "logoFit": "cover",
    "notes": "On-chain order book exchange for crypto spot and perpetual markets with API access for market data and trading."
  },
  {
    "id": "interactive_brokers",
    "name": "Interactive Brokers",
    "category": "finance",
    "kind": "broker",
    "status": "live",
    "trading": true,
    "assets": [
      "equities",
      "indices",
      "fixed_income",
      "fx",
      "commodities",
      "crypto",
      "volatility"
    ],
    "url": "https://www.interactivebrokers.com/",
    "logo": "/connectors/interactive_brokers.png",
    "banner": "/connectors/banners/interactive_brokers.webp",
    "logoFit": "cover",
    "notes": "Widest multi-asset API coverage; the natural 'covers-everything' anchor connection. CFDs/FX outside US. Connects via the local Client Portal Web API gateway (run it on your machine and log in); requests reach it through the Nexow server, so self-host alongside the gateway."
  },
  {
    "id": "intrinio",
    "name": "Intrinio",
    "category": "data",
    "kind": "data",
    "status": "live",
    "trading": false,
    "assets": [
      "equities",
      "indices"
    ],
    "url": "https://intrinio.com/",
    "logo": "/connectors/intrinio.jpeg",
    "banner": "/connectors/banners/intrinio.png",
    "logoFit": "cover",
    "notes": "Financial data API with fundamentals, real-time/delayed prices, and options data. Good for building screeners and analytics."
  },
  {
    "id": "iqfeed",
    "name": "IQFeed (DTN)",
    "category": "data",
    "kind": "data",
    "status": "live",
    "trading": false,
    "assets": [
      "equities",
      "indices",
      "commodities",
      "fx"
    ],
    "url": "https://www.iqfeed.net/",
    "logo": "/connectors/iqfeed.png",
    "banner": "/connectors/banners/iqfeed.jpg",
    "logoFit": "cover",
    "notes": "Low-latency historical market data for US equities, futures, and options. Popular with active day traders and algo developers. Connects via the local IQConnect client (run it on your machine and log in); requests reach it through the Nexow server, so self-host alongside IQConnect."
  },
  {
    "id": "jupiter",
    "name": "Jupiter",
    "category": "finance",
    "kind": "dex",
    "status": "live",
    "trading": false,
    "assets": [
      "crypto"
    ],
    "url": "https://jup.ag/",
    "logo": "/connectors/jupiter.png",
    "banner": "/connectors/banners/jupiter.jpg",
    "logoFit": "cover",
    "notes": "Solana liquidity aggregator and trading API for token swaps, routing, and on-chain execution workflows."
  },
  {
    "id": "kalshi",
    "name": "Kalshi",
    "category": "finance",
    "kind": "prediction",
    "status": "live",
    "trading": true,
    "assets": [
      "prediction_markets",
      "crypto"
    ],
    "url": "https://kalshi.com/",
    "logo": "/connectors/kalshi.png",
    "banner": "/connectors/banners/kalshi.jpg",
    "logoFit": "cover",
    "notes": "CFTC-regulated event-contract exchange. Binary YES/NO markets priced in cents (the implied probability). Public market data — markets and candlesticks — is keyless; account and trading need an API key id plus its RSA private key. Live updates are polled off the candlesticks endpoint. Every call routes through the Nexow server (Kalshi's REST has no CORS and signs each private call with your RSA key). Has a demo (mock-funds) environment with its own account."
  },
  {
    "id": "kraken",
    "name": "Kraken",
    "category": "finance",
    "kind": "exchange",
    "status": "live",
    "trading": true,
    "assets": [
      "crypto"
    ],
    "url": "https://www.kraken.com/",
    "logo": "/connectors/kraken.webp",
    "banner": "/connectors/banners/kraken.png",
    "logoFit": "cover",
    "notes": "Spot plus Kraken Futures (perpetual + dated). Public market data (candles + live stream) is keyless on both; account and trading need an API key. Spot and Futures are separate platforms with separate keys — one connection can hold both. Futures has a demo (testnet) network; spot is live only."
  },
  {
    "id": "kucoin",
    "name": "KuCoin",
    "category": "finance",
    "kind": "exchange",
    "status": "live",
    "trading": true,
    "assets": [
      "crypto"
    ],
    "url": "https://www.kucoin.com/",
    "logo": "/connectors/kucoin.png",
    "banner": "/connectors/banners/kucoin.jpg",
    "logoFit": "cover",
    "notes": "Crypto exchange API with broad spot listings plus futures/perpetual markets and streaming market data."
  },
  {
    "id": "ledger",
    "name": "Ledger",
    "category": "wallets",
    "kind": "wallet",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://www.ledger.com/",
    "logo": "/connectors/ledger.svg",
    "banner": "/connectors/banners/ledger.webp",
    "logoFit": "cover",
    "notes": "Watch a Ledger hardware wallet’s EVM accounts by pasting their public addresses — native balance, ERC-20 holdings, USD value, and recent activity via Blockscout public APIs (single network or all at once). No device pairing, no keys, no signing; the Ledger itself never connects to Nexow."
  },
  {
    "id": "lemmy",
    "name": "Lemmy",
    "category": "socials",
    "kind": "community",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://join-lemmy.org/",
    "logo": "/connectors/lemmy.svg",
    "banner": "",
    "logoFit": "cover",
    "notes": "Read an instance's hot posts, one community, or a keyword search via the public Lemmy API (default instance lemmy.world). Keyless — no signup. Read from a widget with ctx.data.feed({ provider: 'lemmy', channel: 'technology' }) or ({ query: '...' })."
  },
  {
    "id": "lmax_digital",
    "name": "LMAX Digital",
    "category": "finance",
    "kind": "exchange",
    "status": "live",
    "trading": true,
    "assets": [
      "crypto"
    ],
    "url": "https://www.lmax.com/",
    "logo": "/connectors/lmax_digital.jpg",
    "banner": "/connectors/banners/lmax_digital.png",
    "logoFit": "cover",
    "notes": "LMAX Group's institutional crypto spot exchange (BTC, ETH and more vs USD/EUR/GBP/JPY). Public market data (instruments, ticker, order book, live trade stream) is keyless and called straight from the browser. Add an LMAX Account API key (client key id + secret) to trade and read your account — keyed calls go through the Nexow server, which signs the auth challenge so your secret stays off the wire (the browser-direct toggle is locked off, like Binance/Coinbase). No OHLC history over HTTP: live candles are synthesized from the trade stream, so charts build forward from connect time (true history is FIX-only)."
  },
  {
    "id": "lmax",
    "name": "LMAX Exchange",
    "category": "finance",
    "kind": "exchange",
    "status": "live",
    "trading": true,
    "assets": [
      "fx",
      "commodities",
      "indices"
    ],
    "url": "https://www.lmax.com/",
    "logo": "/connectors/lmax.png",
    "banner": "/connectors/banners/lmax.jpg",
    "logoFit": "cover",
    "notes": "Institutional-grade FX ECN with a transparent order book. Public market data (instruments, ticker, order book, live trade stream) is keyless and called straight from the browser. Add an LMAX Account API key (client key id + secret) to trade and read your account — keyed calls go through the Nexow server, which signs the auth challenge so your secret stays off the wire (the browser-direct toggle is locked off, like Binance/Coinbase). No OHLC history over HTTP: live candles are synthesized from the trade stream, so charts build forward from connect time (true history is FIX-only)."
  },
  {
    "id": "massive",
    "name": "Massive (ex Polygon.io)",
    "category": "data",
    "kind": "data",
    "status": "live",
    "trading": false,
    "assets": [
      "equities",
      "indices",
      "fx",
      "crypto",
      "commodities"
    ],
    "url": "https://massive.com/",
    "logo": "/connectors/massive.png",
    "banner": "/connectors/banners/massive.jpg",
    "logoFit": "cover",
    "notes": "Market data only, formerly known as Polygon.io. Strong US equities/options coverage; good for backtesting feeds."
  },
  {
    "id": "mastodon",
    "name": "Mastodon",
    "category": "socials",
    "kind": "social",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://joinmastodon.org/",
    "logo": "/connectors/mastodon.svg",
    "banner": "",
    "logoFit": "cover",
    "notes": "Read an instance's trending statuses, a hashtag, or one account's posts via the public Mastodon REST API (default instance mastodon.social). Keyless — no signup. Read from a widget with ctx.data.feed({ provider: 'mastodon', query: '#fintech' }) or ({ channel: '@user' })."
  },
  {
    "id": "metamask",
    "name": "MetaMask",
    "category": "wallets",
    "kind": "wallet",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://metamask.io/",
    "logo": "/connectors/metamask.svg",
    "banner": "/connectors/banners/metamask.jpg",
    "logoFit": "cover",
    "notes": "Connect the MetaMask extension (or the MetaMask app’s browser on mobile) — the wallet approves sharing its public address, and Nexow tracks it watch-only: native balance, ERC-20 holdings, USD value, and recent activity via Blockscout public APIs (Ethereum, Base, Arbitrum, OP Mainnet, Polygon, Gnosis, zkSync Era). Nexow never asks for signatures or transactions. Any address can also be pasted to watch."
  },
  {
    "id": "milvus",
    "name": "Milvus",
    "category": "data",
    "kind": "vector",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://milvus.io/",
    "logo": "/connectors/milvus.png",
    "banner": "/connectors/banners/milvus.png",
    "logoFit": "cover",
    "notes": "Open-source vector database connector for similarity search over embeddings, metadata, and high-scale AI retrieval collections."
  },
  {
    "id": "mongodb",
    "name": "MongoDB",
    "category": "data",
    "kind": "nosql",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://www.mongodb.com/",
    "logo": "/connectors/mongodb.svg",
    "banner": "/connectors/banners/mongodb.png",
    "logoFit": "cover",
    "notes": "Document database connector for reading your own collections, signals, market metadata, and research documents from MongoDB or Atlas."
  },
  {
    "id": "mysql",
    "name": "MySQL",
    "category": "data",
    "kind": "sql",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://www.mysql.com/",
    "logo": "/connectors/mysql.svg",
    "banner": "/connectors/banners/mysql.png",
    "logoFit": "cover",
    "notes": "Relational SQL database connector for reading tables, research datasets, and application data from MySQL-compatible databases."
  },
  {
    "id": "nager_date",
    "name": "Nager.Date",
    "category": "services",
    "kind": "open_data",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://date.nager.at/",
    "logo": "/connectors/nager_date.png",
    "banner": "/connectors/banners/nager_date.png",
    "logoFit": "cover",
    "notes": "Public holidays API covering 100+ countries. Keyless REST endpoints for holiday calendars — useful for market-hours and calendar widgets."
  },
  {
    "id": "nasa",
    "name": "NASA Open APIs",
    "category": "services",
    "kind": "open_data",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://www.nasa.gov/",
    "logo": "/connectors/nasa.png",
    "banner": "/connectors/banners/nasa.png",
    "logoFit": "cover",
    "notes": "NASA Open APIs — Astronomy Picture of the Day, NEO, Earth imagery, and more. Free key; DEMO_KEY works for light testing."
  },
  {
    "id": "nominatim",
    "name": "Nominatim",
    "category": "services",
    "kind": "geo",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://nominatim.org/",
    "logo": "/connectors/nominatim.png",
    "banner": "/connectors/banners/nominatim.png",
    "logoFit": "cover",
    "notes": "OpenStreetMap Nominatim geocoding — forward and reverse lookup of places and addresses. Usage policy: identify with a valid User-Agent and keep to at most one request per second."
  },
  {
    "id": "oanda",
    "name": "OANDA",
    "category": "finance",
    "kind": "broker",
    "status": "live",
    "trading": true,
    "assets": [
      "fx",
      "indices",
      "commodities",
      "fixed_income"
    ],
    "url": "https://www.oanda.com/",
    "logo": "/connectors/oanda.png",
    "banner": "/connectors/banners/oanda.png",
    "logoFit": "cover",
    "notes": "FX spot plus CFDs on indices/commodities/bonds. High rate limits; strong for FX quants."
  },
  {
    "id": "okx",
    "name": "OKX",
    "category": "finance",
    "kind": "exchange",
    "status": "live",
    "trading": true,
    "assets": [
      "crypto"
    ],
    "url": "https://www.okx.com/",
    "logo": "/connectors/okx.png",
    "banner": "/connectors/banners/okx.jpg",
    "logoFit": "cover",
    "notes": "Global crypto exchange API with spot, margin, futures, perpetual swaps, and options market data and trading."
  },
  {
    "id": "open_meteo",
    "name": "Open-Meteo",
    "category": "services",
    "kind": "weather",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://open-meteo.com/",
    "logo": "/connectors/open_meteo.png",
    "banner": "/connectors/banners/open_meteo.png",
    "logoFit": "cover",
    "notes": "Free open-source weather API — forecasts, historical weather, and marine data. Fully keyless; no signup required. Ideal for dry-run widgets that need weather context."
  },
  {
    "id": "openaq",
    "name": "OpenAQ",
    "category": "services",
    "kind": "weather",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://openaq.org/",
    "logo": "/connectors/openaq.png",
    "banner": "/connectors/banners/openaq.png",
    "logoFit": "cover",
    "notes": "Open air-quality data from government and research monitors worldwide. Free API key from the OpenAQ Explorer."
  },
  {
    "id": "opensky",
    "name": "OpenSky Network",
    "category": "services",
    "kind": "geo",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://opensky-network.org/",
    "logo": "/connectors/opensky.png",
    "banner": "/connectors/banners/opensky.png",
    "logoFit": "cover",
    "notes": "Live and historical ADS-B flight tracking from the OpenSky Network. Coming soon — anonymous access is rate-limited; authenticated access needs an OpenSky account."
  },
  {
    "id": "pancakeswap",
    "name": "PancakeSwap",
    "category": "finance",
    "kind": "dex",
    "status": "live",
    "trading": false,
    "assets": [
      "crypto"
    ],
    "url": "https://pancakeswap.finance/",
    "logo": "/connectors/pancakeswap.png",
    "banner": "/connectors/banners/pancakeswap.jpg",
    "logoFit": "cover",
    "notes": "Decentralized exchange and liquidity protocol for token swaps, pools, and derivatives across BNB Chain and supported EVM networks."
  },
  {
    "id": "phantom",
    "name": "Phantom",
    "category": "wallets",
    "kind": "wallet",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://phantom.app/",
    "logo": "/connectors/phantom.svg",
    "banner": "/connectors/banners/phantom.jpg",
    "logoFit": "cover",
    "notes": "Connect the Phantom extension (or the Phantom app’s browser on mobile) — the wallet approves sharing its public key, and Nexow tracks it watch-only: SOL balance, SPL token holdings, and USD value via Jupiter public APIs. Nexow never asks for signatures or transactions. Any address can also be pasted to watch."
  },
  {
    "id": "pinecone",
    "name": "Pinecone",
    "category": "data",
    "kind": "vector",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://www.pinecone.io/",
    "logo": "/connectors/pinecone.png",
    "banner": "/connectors/banners/pinecone.png",
    "logoFit": "cover",
    "notes": "Managed vector database connector for querying embeddings and metadata from Pinecone indexes."
  },
  {
    "id": "polygon_io",
    "name": "Polygon.io",
    "category": "data",
    "kind": "data",
    "status": "live",
    "trading": false,
    "assets": [
      "equities",
      "indices",
      "fx",
      "crypto"
    ],
    "url": "https://polygon.io/",
    "logo": "/connectors/polygon_io.jpg",
    "banner": "",
    "logoFit": "cover",
    "notes": "Market data only. Strong US equities/options coverage; good for backtesting feeds."
  },
  {
    "id": "polymarket",
    "name": "Polymarket",
    "category": "finance",
    "kind": "dex",
    "status": "live",
    "trading": false,
    "assets": [
      "prediction_markets"
    ],
    "url": "https://polymarket.com/",
    "logo": "/connectors/polymarket.png",
    "banner": "/connectors/banners/polymarket.webp",
    "logoFit": "cover",
    "notes": "On-chain CLOB on Polygon — the largest prediction market by volume. Each market is a binary YES/NO outcome priced 0–1 (the implied probability). Public market data — price history and order book — is keyless and called straight from your browser (no key, no Nexow server). Add a public wallet address for a read-only portfolio view (positions, value, P&L). Order placement is not supported here: Polymarket orders are signed on-chain with your wallet's private key and need USDC/CTF allowances, so trade with Polymarket's own client. US access restricted."
  },
  {
    "id": "postgres",
    "name": "PostgreSQL",
    "category": "data",
    "kind": "sql",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://www.postgresql.org/",
    "logo": "/connectors/postgres.png",
    "banner": "/connectors/banners/postgres.jpg",
    "logoFit": "cover",
    "notes": "Relational SQL database — read your own signals, backtest results, or tables from a widget. Read-only."
  },
  {
    "id": "predictit",
    "name": "PredictIt",
    "category": "finance",
    "kind": "prediction",
    "status": "live",
    "trading": false,
    "assets": [
      "prediction_markets"
    ],
    "url": "https://www.predictit.org/",
    "logo": "/connectors/predictit.png",
    "banner": "/connectors/banners/predictit.png",
    "logoFit": "cover",
    "notes": "Prediction market data source for US political event contracts. Market data from PredictIt (attribution required); the public API is read-only and polled at most once per 60 seconds per market, so this connector is for market data and sentiment research rather than automated trading."
  },
  {
    "id": "public_apis",
    "name": "Public APIs",
    "category": "services",
    "kind": "open_data",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://github.com/nexow-ai/public-apis",
    "logo": "/connectors/public_apis.svg",
    "banner": "/connectors/banners/public_apis.svg",
    "logoFit": "cover",
    "notes": "Directory of ~700 community-curated public data APIs that need no authentication — animals, books, calendars, geocoding, government, health, science, sports, transport, weather and more. Every listed API is keyless and reachable from widgets via ctx.data.http(); the per-category reference docs name them all. Sourced from the public-apis list; regenerate with scripts/generate-public-apis.mjs."
  },
  {
    "id": "qdrant",
    "name": "Qdrant",
    "category": "data",
    "kind": "vector",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://qdrant.tech/",
    "logo": "/connectors/qdrant.png",
    "banner": "/connectors/banners/qdrant.png",
    "logoFit": "cover",
    "notes": "Vector database — store embeddings + JSON payloads in your own collections and run similarity search from a widget with ctx.data.search({ collection, vector, provider: 'qdrant' })."
  },
  {
    "id": "reddit",
    "name": "Reddit",
    "category": "socials",
    "kind": "community",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://www.reddit.com/",
    "logo": "/connectors/reddit.svg",
    "banner": "",
    "logoFit": "cover",
    "notes": "Read a subreddit's hot posts or search site-wide via the Reddit listing API. Needs a free app Client ID + Secret from reddit.com/prefs/apps — Reddit no longer serves its public JSON listings to unauthenticated clients. Read from a widget with ctx.data.feed({ provider: 'reddit', channel: 'r/wallstreetbets' }) or ({ query: '...' })."
  },
  {
    "id": "rithmic",
    "name": "Rithmic",
    "category": "finance",
    "kind": "broker",
    "status": "live",
    "trading": true,
    "assets": [
      "commodities",
      "indices",
      "fixed_income",
      "fx",
      "volatility"
    ],
    "url": "https://www.rithmic.com/",
    "logo": "/connectors/rithmic.jpg",
    "banner": "/connectors/banners/rithmic.png",
    "logoFit": "cover",
    "notes": "Low-latency futures execution and market data used by prop firms (Apex, TopstepTrader) and active futures traders. Connects over the R | Protocol API — Protocol Buffers over a secure WebSocket, routed through the Nexow server (Rithmic has no REST API). Historical candles, account, positions and trading; symbols are a futures root (ES) or dated contract (ESM5.CME). Needs a Rithmic-approved app and credentials; the test gateway carries no historical data."
  },
  {
    "id": "robinhood",
    "name": "Robinhood",
    "category": "finance",
    "kind": "broker",
    "status": "live",
    "trading": true,
    "assets": [
      "equities",
      "indices",
      "crypto"
    ],
    "url": "https://robinhood.com/",
    "logo": "/connectors/robinhood.svg",
    "banner": "/connectors/banners/robinhood.jpg",
    "logoFit": "cover",
    "notes": "Retail brokerage connector for US stocks, ETFs, options, and crypto account workflows where API access is available."
  },
  {
    "id": "saxo_bank",
    "name": "Saxo Bank",
    "category": "finance",
    "kind": "broker",
    "status": "live",
    "trading": true,
    "assets": [
      "equities",
      "indices",
      "fixed_income",
      "fx",
      "commodities",
      "volatility"
    ],
    "url": "https://www.home.saxo/",
    "logo": "/connectors/saxo_bank.png",
    "banner": "/connectors/banners/saxo_bank.jpg",
    "logoFit": "cover",
    "notes": "Global multi-asset OpenAPI covering market data, portfolios, and order workflows across Saxo-supported regions."
  },
  {
    "id": "snowflake",
    "name": "Snowflake",
    "category": "data",
    "kind": "warehouse",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://www.snowflake.com/",
    "logo": "/connectors/snowflake.png",
    "banner": "/connectors/banners/snowflake.png",
    "logoFit": "cover",
    "notes": "Cloud data warehouse connector for querying your own analytics, signals, and research tables from widgets."
  },
  {
    "id": "spotify",
    "name": "Spotify",
    "category": "socials",
    "kind": "music",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://www.spotify.com/",
    "logo": "/connectors/spotify.svg",
    "banner": "/connectors/banners/spotify.jpg",
    "logoFit": "cover",
    "notes": "Music streaming catalog via the Spotify Web API. Search tracks or read new releases from a widget with ctx.data.feed({ provider: 'spotify', query }). Add a Client ID + Client Secret from the Spotify developer dashboard."
  },
  {
    "id": "steel",
    "name": "Steel",
    "category": "services",
    "kind": "browser",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://www.steel.dev/",
    "logo": "/connectors/steel.png",
    "banner": "/connectors/banners/steel.png",
    "logoFit": "cover",
    "notes": "Open-source browser API for hosting and controlling remote Chromium sessions. Coming soon as another remote-browser provider for embeds and agent automation."
  },
  {
    "id": "strava",
    "name": "Strava",
    "category": "socials",
    "kind": "fitness",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://www.strava.com/",
    "logo": "/connectors/strava.png",
    "banner": "/connectors/banners/strava.svg",
    "logoFit": "cover",
    "notes": "Athlete activity feed via the Strava API v3. Read your recent runs, rides, and workouts from a widget with ctx.data.feed({ provider: 'strava' }); query filters by activity name or sport, and each post carries stats { distance (m), movingTime (s), elevationGain (m) } for numeric filtering. Add the Client ID, Client Secret, and a Refresh Token from your Strava API application."
  },
  {
    "id": "tastytrade",
    "name": "tastytrade",
    "category": "finance",
    "kind": "broker",
    "status": "live",
    "trading": true,
    "assets": [
      "equities",
      "indices",
      "commodities"
    ],
    "url": "https://tastytrade.com/",
    "logo": "/connectors/tastytrade.png",
    "banner": "/connectors/banners/tastytrade.jpg",
    "logoFit": "cover",
    "notes": "Options-first brokerage API with market data, account state, and order routing for active derivatives workflows."
  },
  {
    "id": "tavily",
    "name": "Tavily",
    "category": "services",
    "kind": "search",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://tavily.com/",
    "logo": "/connectors/tavily.png",
    "banner": "/connectors/banners/tavily.png",
    "logoFit": "cover",
    "notes": "AI-native web search API built for agents — ranked results, snippets, and research answers. Coming soon for grounded research in widgets and copilots."
  },
  {
    "id": "telegram",
    "name": "Telegram",
    "category": "socials",
    "kind": "messaging",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://telegram.org/",
    "logo": "/connectors/telegram.svg",
    "banner": "/connectors/banners/telegram.png",
    "logoFit": "cover",
    "notes": "Read messages from chats and channels your bot can see via the Telegram Bot API. Add a bot token from @BotFather, then read a feed from a widget with ctx.data.feed({ provider: 'telegram' })."
  },
  {
    "id": "guardian",
    "name": "The Guardian",
    "category": "services",
    "kind": "news",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://www.theguardian.com/",
    "logo": "/connectors/guardian.png",
    "banner": "/connectors/banners/guardian.png",
    "logoFit": "cover",
    "notes": "The Guardian Open Platform — search articles and headlines across sections. Free developer key from the Open Platform site."
  },
  {
    "id": "tradestation",
    "name": "TradeStation",
    "category": "finance",
    "kind": "broker",
    "status": "live",
    "trading": true,
    "assets": [
      "equities",
      "indices",
      "commodities",
      "crypto",
      "volatility"
    ],
    "url": "https://www.tradestation.com/",
    "logo": "/connectors/tradestation.png",
    "banner": "/connectors/banners/tradestation.jpg",
    "logoFit": "cover",
    "notes": "US equities, options and listed futures (plus index/ETF products). OAuth2 v3 API with a full simulated (paper) environment — charts, balances, positions and order routing."
  },
  {
    "id": "trading_economics",
    "name": "Trading Economics",
    "category": "data",
    "kind": "data",
    "status": "live",
    "trading": false,
    "assets": [
      "equities",
      "indices",
      "fx",
      "commodities",
      "fixed_income"
    ],
    "url": "https://tradingeconomics.com/",
    "logo": "/connectors/trading_economics.png",
    "banner": "/connectors/banners/trading_economics.png",
    "logoFit": "cover",
    "notes": "Global macro and financial data API — economic indicators, government bonds, commodities, currencies, and stock market data for 196 countries."
  },
  {
    "id": "tradovate",
    "name": "Tradovate",
    "category": "finance",
    "kind": "broker",
    "status": "live",
    "trading": true,
    "assets": [
      "indices",
      "commodities",
      "fixed_income",
      "fx"
    ],
    "url": "https://www.tradovate.com/",
    "logo": "/connectors/tradovate.png",
    "banner": "/connectors/banners/tradovate.png",
    "logoFit": "cover",
    "notes": "Cloud futures brokerage API with REST/WebSocket access for accounts, margin, market data, and futures order routing."
  },
  {
    "id": "trust_wallet",
    "name": "Trust Wallet",
    "category": "wallets",
    "kind": "wallet",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://trustwallet.com/",
    "logo": "/connectors/trust_wallet.svg",
    "banner": "/connectors/banners/trust_wallet.png",
    "logoFit": "cover",
    "notes": "Connect the Trust Wallet extension (or the app’s browser on mobile) — the wallet approves sharing its public address, and Nexow tracks it watch-only on EVM chains: native balance, ERC-20 holdings, USD value, and recent activity via Blockscout public APIs. For Solana holdings use the Phantom connector. Nexow never asks for signatures or transactions. Any address can also be pasted to watch."
  },
  {
    "id": "twelve_data",
    "name": "Twelve Data",
    "category": "data",
    "kind": "data",
    "status": "live",
    "trading": false,
    "assets": [
      "equities",
      "indices",
      "fx",
      "crypto",
      "commodities"
    ],
    "url": "https://twelvedata.com/",
    "logo": "/connectors/twelve_data.png",
    "banner": "/connectors/banners/twelve_data.png",
    "logoFit": "cover",
    "notes": "Developer-friendly market data API for real-time and historical prices across stocks, ETFs, forex, crypto, and indices."
  },
  {
    "id": "usgs_earthquake",
    "name": "USGS Earthquake",
    "category": "services",
    "kind": "open_data",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://earthquake.usgs.gov/",
    "logo": "/connectors/usgs_earthquake.png",
    "banner": "/connectors/banners/usgs_earthquake.png",
    "logoFit": "cover",
    "notes": "USGS Earthquake Hazards Program GeoJSON feeds — recent and significant earthquakes worldwide. Fully keyless public data."
  },
  {
    "id": "weaviate",
    "name": "Weaviate",
    "category": "data",
    "kind": "vector",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://weaviate.io/",
    "logo": "/connectors/weaviate.jpeg",
    "banner": "/connectors/banners/weaviate.jpg",
    "logoFit": "cover",
    "notes": "Vector database connector for semantic search over embeddings, metadata, and research documents stored in Weaviate collections."
  },
  {
    "id": "wikipedia",
    "name": "Wikipedia",
    "category": "services",
    "kind": "knowledge",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://www.wikipedia.org/",
    "logo": "/connectors/wikipedia.png",
    "banner": "/connectors/banners/wikipedia.png",
    "logoFit": "cover",
    "notes": "Wikimedia REST API for Wikipedia page summaries, related articles, and media. Keyless with polite User-Agent; great for knowledge lookups in dry-run widgets."
  },
  {
    "id": "world_bank",
    "name": "World Bank Indicators",
    "category": "services",
    "kind": "open_data",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://data.worldbank.org/",
    "logo": "/connectors/world_bank.png",
    "banner": "/connectors/banners/world_bank.png",
    "logoFit": "cover",
    "notes": "World Bank Open Data indicators API — GDP, population, poverty, and thousands of development statistics by country. Keyless public REST endpoints."
  },
  {
    "id": "twitter",
    "name": "X",
    "category": "socials",
    "kind": "social",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://x.com/",
    "logo": "/connectors/twitter.svg",
    "banner": "/connectors/banners/twitter.png",
    "logoFit": "cover",
    "notes": "Read posts from a handle's timeline or search recent posts via the X API v2. Add an app Bearer token, then read from a widget with ctx.data.feed({ provider: 'twitter', query }) or ({ channel: 'handle' })."
  },
  {
    "id": "youtube",
    "name": "YouTube",
    "category": "socials",
    "kind": "video",
    "status": "live",
    "trading": false,
    "assets": [],
    "url": "https://www.youtube.com/",
    "logo": "/connectors/youtube.svg",
    "banner": "/connectors/banners/youtube.jpg",
    "logoFit": "cover",
    "notes": "Read a channel's uploads or search videos via the YouTube Data API v3. Add an API key, then read from a widget with ctx.data.feed({ provider: 'youtube', query }) or ({ channel: 'UC...' })."
  },
  {
    "id": "uniswap",
    "name": "Uniswap",
    "category": "finance",
    "kind": "dex",
    "status": "soon",
    "trading": false,
    "assets": [
      "crypto"
    ],
    "url": "https://uniswap.org/",
    "logo": "/connectors/uniswap.png",
    "banner": "/connectors/banners/uniswap.png",
    "logoFit": "cover",
    "notes": "Decentralized exchange protocol for token swaps and AMM liquidity across Ethereum and supported EVM networks."
  }
];

export const CONNECTOR_COUNT = CONNECTORS.length;
export const CONNECTOR_LIVE_COUNT = CONNECTORS.filter((c) => c.status === 'live').length;
