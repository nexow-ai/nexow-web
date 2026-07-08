---
title: 'Explore every market: the new connector gallery'
description: 'Browse and search every venue Nexow can stream — 28 connectors live today and 56 in the catalog, across FX, crypto, equities, prediction markets, databases and socials.'
pubDate: 2026-07-08
heroImage: '/blog/connectors.svg'
tags: ['product', 'connectors', 'data']
---

A widget is only as good as the data behind it. So we built a home for the data:
a searchable **connector gallery** where you can see every venue Nexow can plug
into, filter by asset class, and find the exact feed your next dashboard needs.

## 28 live today, 56 in the catalog

Nexow ships **28 connectors live right now**, with **56 in the catalog** as we
bring the rest online. Each one is a pluggable source of real-time prices, order
books and reference data that any widget can subscribe to — no API wrangling, no
websocket boilerplate, no payload normalization on your side.

Open the [connector gallery](https://nexow.ai/connectors), type a name or a
market, and you'll see what's live, what's coming, and which category it belongs
to.

## Six categories, one canvas

The gallery groups every venue the way you actually think about markets:

- **FX** — OANDA, LMAX, FXCM
- **Crypto** — Binance, Coinbase, Kraken, Deribit, BitMEX
- **Equities & futures** — Interactive Brokers, Alpaca, TradeStation, Polygon,
  Rithmic, IQFeed
- **Prediction markets** — Kalshi, Polymarket
- **Data & databases** — Alpha Vantage, Intrinio, Trading Economics, Postgres,
  ClickHouse, Qdrant
- **Socials** — X, YouTube, Discord, Telegram, Spotify

Because they all feed the same canvas, you can watch an FX pair, a perp, an
equity, a Fed-cut probability and a social feed side by side — and let a widget
compute across them.

## Browser-direct where the venue allows it

Connectors aren't just a list of logos — they change *how* your data flows. Where
a venue's CORS policy permits, Nexow talks to it **directly from your browser**,
so authenticated calls never pass through our servers. That keeps latency low and
your credentials on your machine. The venues that can't be reached directly route
through a thin proxy instead.

## Find your venue, then build

The gallery is the fastest way to answer "can I build this in Nexow?" Search for
your exchange or data provider, confirm it's live, then describe the widget you
want:

> A candlestick chart of EUR-USD from OANDA with 20 and 50 EMA, and a table of
> Kalshi odds for the next FOMC beside it.

Nexow wires each widget to the connector you named and streams it straight onto
the canvas.

[Browse the connector gallery](https://nexow.ai/connectors) or
[launch the app](https://app.nexow.ai) and plug into your first market.
