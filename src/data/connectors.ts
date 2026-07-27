// AUTO-GENERATED from the Nexow app connector catalog. Do not edit by hand.
// Regenerate with scratchpad/gen-connectors.mjs.

export type ConnectorCategory = 'finance' | 'wallets' | 'services' | 'data' | 'socials';
export type ConnectorStatus = 'live' | 'soon';

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
    "logo": "/connectors/alpaca.png"
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
    "logo": "/connectors/alpha_vantage.jpg"
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
    "logo": "/connectors/binance.png"
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
    "logo": "/connectors/bitmex.png"
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
    "logo": "/connectors/browserbase.svg"
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
    "logo": "/connectors/clickhouse.jpeg"
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
    "logo": "/connectors/coinbase.jpeg"
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
    "logo": "/connectors/coinbase_wallet.png"
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
    "logo": "/connectors/data_gov.png"
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
    "logo": "/connectors/deribit.png"
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
    "logo": "/connectors/discord.svg"
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
    "logo": "/connectors/frankfurter.png"
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
    "logo": "/connectors/fred.png"
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
    "logo": "/connectors/fxcm.jpeg"
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
    "logo": "/connectors/interactive_brokers.png"
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
    "logo": "/connectors/intrinio.jpeg"
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
    "logo": "/connectors/iqfeed.png"
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
    "logo": "/connectors/kalshi.png"
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
    "logo": "/connectors/kraken.webp"
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
    "logo": "/connectors/ledger.svg"
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
    "logo": "/connectors/lmax_digital.jpg"
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
    "logo": "/connectors/lmax.png"
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
    "logo": "/connectors/metamask.svg"
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
    "logo": "/connectors/nager_date.png"
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
    "logo": "/connectors/nasa.png"
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
    "logo": "/connectors/oanda.png"
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
    "logo": "/connectors/open_meteo.png"
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
    "logo": "/connectors/openaq.png"
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
    "logo": "/connectors/phantom.svg"
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
    "logo": "/connectors/polygon_io.jpg"
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
    "logo": "/connectors/polymarket.png"
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
    "logo": "/connectors/postgres.png"
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
    "logo": "/connectors/qdrant.png"
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
    "logo": "/connectors/rithmic.jpg"
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
    "logo": "/connectors/spotify.svg"
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
    "logo": "/connectors/telegram.svg"
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
    "logo": "/connectors/guardian.png"
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
    "logo": "/connectors/tradestation.png"
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
    "logo": "/connectors/trading_economics.png"
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
    "logo": "/connectors/trust_wallet.svg"
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
    "logo": "/connectors/usgs_earthquake.png"
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
    "logo": "/connectors/wikipedia.png"
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
    "logo": "/connectors/world_bank.png"
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
    "logo": "/connectors/twitter.svg"
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
    "logo": "/connectors/youtube.svg"
  },
  {
    "id": "anchor_browser",
    "name": "Anchor Browser",
    "category": "services",
    "kind": "browser",
    "status": "soon",
    "trading": false,
    "assets": [],
    "url": "https://www.anchorbrowser.io/",
    "logo": "/connectors/anchor_browser.png"
  },
  {
    "id": "apify",
    "name": "Apify",
    "category": "services",
    "kind": "scraping",
    "status": "soon",
    "trading": false,
    "assets": [],
    "url": "https://apify.com/",
    "logo": "/connectors/apify.svg"
  },
  {
    "id": "bigquery",
    "name": "BigQuery",
    "category": "data",
    "kind": "warehouse",
    "status": "soon",
    "trading": false,
    "assets": [],
    "url": "https://cloud.google.com/bigquery",
    "logo": "/connectors/bigquery.png"
  },
  {
    "id": "bright_data",
    "name": "Bright Data",
    "category": "services",
    "kind": "scraping",
    "status": "soon",
    "trading": false,
    "assets": [],
    "url": "https://brightdata.com/",
    "logo": "/connectors/bright_data.png"
  },
  {
    "id": "browser_use",
    "name": "Browser Use",
    "category": "services",
    "kind": "browser",
    "status": "soon",
    "trading": false,
    "assets": [],
    "url": "https://browser-use.com/",
    "logo": "/connectors/browser_use.png"
  },
  {
    "id": "browserless",
    "name": "Browserless",
    "category": "services",
    "kind": "browser",
    "status": "soon",
    "trading": false,
    "assets": [],
    "url": "https://www.browserless.io/",
    "logo": "/connectors/browserless.png"
  },
  {
    "id": "bybit",
    "name": "Bybit",
    "category": "finance",
    "kind": "exchange",
    "status": "soon",
    "trading": true,
    "assets": [
      "crypto"
    ],
    "url": "https://www.bybit.com/",
    "logo": "/connectors/bybit.png"
  },
  {
    "id": "ccxt",
    "name": "CCXT",
    "category": "finance",
    "kind": "aggregator",
    "status": "soon",
    "trading": true,
    "assets": [
      "crypto"
    ],
    "url": "https://ccxt.com/",
    "logo": "/connectors/ccxt.svg"
  },
  {
    "id": "charles_schwab",
    "name": "Charles Schwab",
    "category": "finance",
    "kind": "broker",
    "status": "soon",
    "trading": true,
    "assets": [
      "equities",
      "indices",
      "fixed_income"
    ],
    "url": "https://www.schwab.com/",
    "logo": "/connectors/charles_schwab.png"
  },
  {
    "id": "curve_finance",
    "name": "Curve Finance",
    "category": "finance",
    "kind": "dex",
    "status": "soon",
    "trading": true,
    "assets": [
      "crypto"
    ],
    "url": "https://curve.fi/",
    "logo": "/connectors/curve_finance.png"
  },
  {
    "id": "databento",
    "name": "Databento",
    "category": "data",
    "kind": "data",
    "status": "soon",
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
    "logo": "/connectors/databento.png"
  },
  {
    "id": "dome",
    "name": "Dome",
    "category": "finance",
    "kind": "aggregator",
    "status": "soon",
    "trading": false,
    "assets": [
      "prediction_markets"
    ],
    "url": "https://domeapi.io/",
    "logo": "/connectors/dome.svg"
  },
  {
    "id": "eodhd",
    "name": "EODHD",
    "category": "data",
    "kind": "data",
    "status": "soon",
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
    "logo": "/connectors/eodhd.png"
  },
  {
    "id": "finnhub",
    "name": "Finnhub",
    "category": "data",
    "kind": "data",
    "status": "soon",
    "trading": false,
    "assets": [
      "equities",
      "indices",
      "fx",
      "crypto",
      "fixed_income"
    ],
    "url": "https://finnhub.io/",
    "logo": "/connectors/finnhub.png"
  },
  {
    "id": "firecrawl",
    "name": "Firecrawl",
    "category": "services",
    "kind": "scraping",
    "status": "soon",
    "trading": false,
    "assets": [],
    "url": "https://www.firecrawl.dev/",
    "logo": "/connectors/firecrawl.png"
  },
  {
    "id": "hyperliquid",
    "name": "Hyperliquid",
    "category": "finance",
    "kind": "dex",
    "status": "soon",
    "trading": true,
    "assets": [
      "crypto"
    ],
    "url": "https://hyperliquid.xyz/",
    "logo": "/connectors/hyperliquid.webp"
  },
  {
    "id": "jupiter",
    "name": "Jupiter",
    "category": "finance",
    "kind": "dex",
    "status": "soon",
    "trading": true,
    "assets": [
      "crypto"
    ],
    "url": "https://jup.ag/",
    "logo": "/connectors/jupiter.png"
  },
  {
    "id": "kucoin",
    "name": "KuCoin",
    "category": "finance",
    "kind": "exchange",
    "status": "soon",
    "trading": true,
    "assets": [
      "crypto"
    ],
    "url": "https://www.kucoin.com/",
    "logo": "/connectors/kucoin.png"
  },
  {
    "id": "massive",
    "name": "Massive",
    "category": "data",
    "kind": "data",
    "status": "soon",
    "trading": false,
    "assets": [
      "equities",
      "indices",
      "fx",
      "crypto",
      "commodities"
    ],
    "url": "https://massive.com/",
    "logo": "/connectors/massive.png"
  },
  {
    "id": "milvus",
    "name": "Milvus",
    "category": "data",
    "kind": "vector",
    "status": "soon",
    "trading": false,
    "assets": [],
    "url": "https://milvus.io/",
    "logo": "/connectors/milvus.png"
  },
  {
    "id": "mongodb",
    "name": "MongoDB",
    "category": "data",
    "kind": "nosql",
    "status": "soon",
    "trading": false,
    "assets": [],
    "url": "https://www.mongodb.com/",
    "logo": "/connectors/mongodb.svg"
  },
  {
    "id": "mysql",
    "name": "MySQL",
    "category": "data",
    "kind": "sql",
    "status": "soon",
    "trading": false,
    "assets": [],
    "url": "https://www.mysql.com/",
    "logo": "/connectors/mysql.svg"
  },
  {
    "id": "nominatim",
    "name": "Nominatim",
    "category": "services",
    "kind": "geo",
    "status": "soon",
    "trading": false,
    "assets": [],
    "url": "https://nominatim.org/",
    "logo": "/connectors/nominatim.png"
  },
  {
    "id": "okx",
    "name": "OKX",
    "category": "finance",
    "kind": "exchange",
    "status": "soon",
    "trading": true,
    "assets": [
      "crypto"
    ],
    "url": "https://www.okx.com/",
    "logo": "/connectors/okx.png"
  },
  {
    "id": "opensky",
    "name": "OpenSky Network",
    "category": "services",
    "kind": "geo",
    "status": "soon",
    "trading": false,
    "assets": [],
    "url": "https://opensky-network.org/",
    "logo": "/connectors/opensky.png"
  },
  {
    "id": "pancakeswap",
    "name": "PancakeSwap",
    "category": "finance",
    "kind": "dex",
    "status": "soon",
    "trading": true,
    "assets": [
      "crypto"
    ],
    "url": "https://pancakeswap.finance/",
    "logo": "/connectors/pancakeswap.png"
  },
  {
    "id": "pinecone",
    "name": "Pinecone",
    "category": "data",
    "kind": "vector",
    "status": "soon",
    "trading": false,
    "assets": [],
    "url": "https://www.pinecone.io/",
    "logo": "/connectors/pinecone.png"
  },
  {
    "id": "predictit",
    "name": "PredictIt",
    "category": "finance",
    "kind": "prediction",
    "status": "soon",
    "trading": false,
    "assets": [
      "prediction_markets"
    ],
    "url": "https://www.predictit.org/",
    "logo": "/connectors/predictit.png"
  },
  {
    "id": "robinhood",
    "name": "Robinhood",
    "category": "finance",
    "kind": "broker",
    "status": "soon",
    "trading": true,
    "assets": [
      "equities",
      "indices",
      "crypto"
    ],
    "url": "https://robinhood.com/",
    "logo": "/connectors/robinhood.svg"
  },
  {
    "id": "saxo_bank",
    "name": "Saxo Bank",
    "category": "finance",
    "kind": "broker",
    "status": "soon",
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
    "logo": "/connectors/saxo_bank.png"
  },
  {
    "id": "snowflake",
    "name": "Snowflake",
    "category": "data",
    "kind": "warehouse",
    "status": "soon",
    "trading": false,
    "assets": [],
    "url": "https://www.snowflake.com/",
    "logo": "/connectors/snowflake.png"
  },
  {
    "id": "steel",
    "name": "Steel",
    "category": "services",
    "kind": "browser",
    "status": "soon",
    "trading": false,
    "assets": [],
    "url": "https://www.steel.dev/",
    "logo": "/connectors/steel.png"
  },
  {
    "id": "tastytrade",
    "name": "tastytrade",
    "category": "finance",
    "kind": "broker",
    "status": "soon",
    "trading": true,
    "assets": [
      "equities",
      "indices",
      "commodities"
    ],
    "url": "https://tastytrade.com/",
    "logo": "/connectors/tastytrade.png"
  },
  {
    "id": "tavily",
    "name": "Tavily",
    "category": "services",
    "kind": "search",
    "status": "soon",
    "trading": false,
    "assets": [],
    "url": "https://tavily.com/",
    "logo": "/connectors/tavily.png"
  },
  {
    "id": "tradovate",
    "name": "Tradovate",
    "category": "finance",
    "kind": "broker",
    "status": "soon",
    "trading": true,
    "assets": [
      "indices",
      "commodities",
      "fixed_income",
      "fx"
    ],
    "url": "https://www.tradovate.com/",
    "logo": "/connectors/tradovate.png"
  },
  {
    "id": "twelve_data",
    "name": "Twelve Data",
    "category": "data",
    "kind": "data",
    "status": "soon",
    "trading": false,
    "assets": [
      "equities",
      "indices",
      "fx",
      "crypto",
      "commodities"
    ],
    "url": "https://twelvedata.com/",
    "logo": "/connectors/twelve_data.png"
  },
  {
    "id": "uniswap",
    "name": "Uniswap",
    "category": "finance",
    "kind": "dex",
    "status": "soon",
    "trading": true,
    "assets": [
      "crypto"
    ],
    "url": "https://uniswap.org/",
    "logo": "/connectors/uniswap.png"
  },
  {
    "id": "weaviate",
    "name": "Weaviate",
    "category": "data",
    "kind": "vector",
    "status": "soon",
    "trading": false,
    "assets": [],
    "url": "https://weaviate.io/",
    "logo": "/connectors/weaviate.jpeg"
  }
];

export const CONNECTOR_COUNT = CONNECTORS.length;
export const CONNECTOR_LIVE_COUNT = CONNECTORS.filter((c) => c.status === 'live').length;
