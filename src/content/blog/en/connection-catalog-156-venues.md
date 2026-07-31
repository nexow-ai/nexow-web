---
title: '156 connectors, 90 live: the connection catalog your widgets can plug into'
description: 'Brokers and exchanges that place real orders, market data and databases, wallets, browser automation, open data and socials — five categories of connection, filterable by asset class and provider kind.'
pubDate: 2026-07-30
heroImage: ../../../assets/blog/catalog.svg
tags: ['product', 'connectors', 'data']
---

A widget is only as good as what's behind it. Three weeks ago the catalog had
28 connectors live. Today the connections panel lists **156 connectors, 90 of
them live**, and the shape of the catalog has changed as much as the size:
it's no longer just market venues.

## Five categories, one canvas

- **Finance** — 30 live of 42. Brokers and exchanges: Interactive Brokers,
  Alpaca, Charles Schwab, Robinhood, Saxo Bank, tastytrade, TradeStation,
  Tradovate, Rithmic, OANDA, FXCM, LMAX. Crypto venues: Binance, Coinbase,
  Kraken, OKX, Bybit, KuCoin, Deribit, BitMEX, plus CCXT as an aggregator. DEXs
  including Hyperliquid, Jupiter, Curve and PancakeSwap. Prediction markets:
  Kalshi, Polymarket, PredictIt.
- **Data** — 20 live of 28. Market data from Databento, Polygon.io, Finnhub,
  Alpha Vantage, Twelve Data, EODHD, Intrinio, IQFeed and Trading Economics —
  and your own storage: PostgreSQL, MySQL, MongoDB, ClickHouse, Snowflake,
  BigQuery, and the vector stores Qdrant, Pinecone, Weaviate and Milvus.
- **Services** — 23 live of 58. Browser automation (Browserbase, Browser Use,
  Steel, Browserless, Anchor Browser), scraping and search (Firecrawl, Apify,
  Bright Data, Tavily), and open data that needs no key at all: FRED, World Bank
  Indicators, NASA, USGS earthquakes, Open-Meteo, OpenAQ, OpenSky, Data.gov,
  Wikipedia.
- **Socials** — 12 live of 13. X, YouTube, Discord, Telegram, Reddit, Bluesky,
  Mastodon, Lemmy, Hacker News, DEV Community, Spotify, Strava.
- **Wallets** — 5 live of 15. MetaMask, Phantom, Ledger, Coinbase Wallet and
  Trust Wallet today.

Because they all feed the same canvas, one workspace can hold an FX pair, a
perp, an equity, a Fed-cut probability, a Postgres query and a subreddit
side by side — and let a widget compute across them.

## Read the market, or trade it

The catalog distinguishes between a feed and a venue you can act on. **22 live
connectors can place orders** — the brokers and exchanges above — and they carry
a *Trading* badge in the panel. Everything else is read-only by construction:
a data provider can't move your money because the integration has nowhere to
send an order.

Filter by capability when it matters. "Show me everything that can trade
equities" and "show me everything that can quote them" are different questions,
and the panel answers both.

## Filters that match how you think

Each category gets its own facets. **Finance** filters by asset class —
equities, indices, fixed income, FX, commodities, crypto, volatility,
prediction markets. Everywhere else filters by provider kind: broker, exchange,
DEX, aggregator, market data, SQL, NoSQL, warehouse, vector database, wallet,
browser automation, web scraping, web search, weather and air, open data,
knowledge, news, geo and transit, messaging, social network, community, video,
music, fitness.

Search by name, narrow by status, open a venue for its details and connect from
there.

## Browser-direct where the venue allows it

Connectors change *how* your data flows, not just where it comes from. Where a
venue's CORS policy permits, Nexow talks to it **straight from your browser**,
so authenticated calls never touch our servers — lower latency, and credentials
that stay on your machine. Venues that can't be reached directly route through a
thin proxy instead. Access stays scoped to the services you actually connect.

Every connector in the catalog is available on **every plan**, Free included.
Quotas apply to bots and agents, not to what you're allowed to plug into.

## What's coming

The 66 connectors marked *soon* say a lot about where this goes: **29 news
wires** — Reuters, AP, AFP, Bloomberg, the Financial Times, the New York Times,
BBC, Deutsche Welle, Al Jazeera, Le Monde, El País, Folha de S.Paulo, NHK World,
South China Morning Post and more, deliberately spread across regions rather
than piling up in one. Ten more wallets including Rainbow, Rabby, Safe,
Solflare, Keplr and Trezor. Payments (Stripe, Adyen, PayPal, Plaid, Wise,
Revolut), observability (Datadog, Grafana, Prometheus, Sentry, PagerDuty) and
analytics (PostHog, Amplitude, Metabase, Looker).

Coming-soon entries are listed rather than hidden, and marked rather than
implied — so "can I build this in Nexow?" gets an honest answer today instead of
a maybe.

[Browse the catalog](https://nexow.ai/connectors) or
[launch Nexow](https://x.nexow.ai) and connect your first venue.
