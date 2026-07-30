---
title: '156 connectors, 90 live: de verbindingscatalogus waar je widgets op aansluiten'
description: 'Brokers en exchanges die echte orders plaatsen, marktdata en databases, wallets, browserautomatisering, open data en socials — vijf categorieën verbindingen, te filteren op assetklasse en aanbiedertype.'
pubDate: 2026-07-30
heroImage: ../../../assets/blog/catalog.svg
tags: ['product', 'connectors', 'data']
---

Een widget is zo goed als wat erachter zit. Drie weken geleden had de catalogus
28 connectors live. Vandaag toont het verbindingspaneel **156 connectors,
waarvan 90 live** — en de vorm van de catalogus is net zo hard veranderd als de
omvang: het zijn allang niet meer alleen handelsplaatsen.

## Vijf categorieën, één canvas

- **Financieel** — 30 van de 42 live. Brokers en exchanges: Interactive Brokers,
  Alpaca, Charles Schwab, Robinhood, Saxo Bank, tastytrade, TradeStation,
  Tradovate, Rithmic, OANDA, FXCM, LMAX. Cryptoplaatsen: Binance, Coinbase,
  Kraken, OKX, Bybit, KuCoin, Deribit, BitMEX, plus CCXT als aggregator. DEX'en
  waaronder Hyperliquid, Jupiter, Curve en PancakeSwap. Voorspelmarkten: Kalshi,
  Polymarket, PredictIt.
- **Data** — 20 van de 28 live. Marktdata van Databento, Polygon.io, Finnhub,
  Alpha Vantage, Twelve Data, EODHD, Intrinio, IQFeed en Trading Economics — en
  je eigen opslag: PostgreSQL, MySQL, MongoDB, ClickHouse, Snowflake, BigQuery,
  plus de vectorstores Qdrant, Pinecone, Weaviate en Milvus.
- **Diensten** — 23 van de 58 live. Browserautomatisering (Browserbase, Browser
  Use, Steel, Browserless, Anchor Browser), scraping en zoeken (Firecrawl,
  Apify, Bright Data, Tavily) en open data waar helemaal geen sleutel voor nodig
  is: FRED, Wereldbank-indicatoren, NASA, USGS-aardbevingen, Open-Meteo, OpenAQ,
  OpenSky, Data.gov, Wikipedia.
- **Socials** — 12 van de 13 live. X, YouTube, Discord, Telegram, Reddit,
  Bluesky, Mastodon, Lemmy, Hacker News, DEV Community, Spotify, Strava.
- **Wallets** — 5 van de 15 live. Vandaag: MetaMask, Phantom, Ledger, Coinbase
  Wallet en Trust Wallet.

Omdat ze allemaal hetzelfde canvas voeden, kan één workspace een valutapaar, een
perp, een aandeel, een kans op een Fed-verlaging, een Postgres-query en een
subreddit naast elkaar hebben — en een widget eroverheen laten rekenen.

## De markt lezen, of erin handelen

De catalogus maakt onderscheid tussen een feed en een plaats waar je kunt
handelen. **22 live connectors kunnen orders plaatsen** — de brokers en exchanges
hierboven — en dragen in het paneel een *Trading*-label. De rest is alleen-lezen
van constructie: een dataleverancier kan je geld niet verplaatsen, want de
integratie heeft nergens een order naartoe te sturen.

Filter op capaciteit wanneer het uitmaakt. "Laat me alles zien wat aandelen kan
verhandelen" en "laat me alles zien wat ze kan noteren" zijn verschillende
vragen, en het paneel beantwoordt ze allebei.

## Filters die aansluiten op hoe je denkt

Elke categorie heeft eigen facetten. **Financieel** filtert op assetklasse:
aandelen, indices, vastrentend, valuta, grondstoffen, crypto, volatiliteit,
voorspelmarkten. Overal elders filter je op aanbiedertype: broker, exchange,
DEX, aggregator, marktdata, SQL, NoSQL, datawarehouse, vectordatabase, wallet,
browserautomatisering, webscraping, webzoeken, weer en lucht, open data, kennis,
nieuws, geo en vervoer, messaging, sociaal netwerk, community, video, muziek,
fitness.

Zoek op naam, verfijn op status, open een plaats voor de details en verbind
vandaaruit.

## Rechtstreeks uit de browser waar de plaats het toestaat

Connectors veranderen *hoe* je data stroomt, niet alleen waar die vandaan komt.
Waar het CORS-beleid van een plaats het toelaat, praat Nexow er **rechtstreeks
vanuit je browser** mee, zodat geauthenticeerde calls onze servers nooit raken —
minder latency, en inloggegevens die op je eigen machine blijven. Plaatsen die
niet direct bereikbaar zijn, lopen via een dunne proxy. Toegang blijft beperkt
tot de diensten die je daadwerkelijk verbindt.

Elke connector in de catalogus is beschikbaar op **elk plan**, gratis inbegrepen.
Quota gelden voor bots en agents, niet voor waar je op mag aansluiten.

## Wat eraan komt

De 66 connectors met het label *binnenkort* zeggen veel over de richting: **29
persbureaus** — Reuters, AP, AFP, Bloomberg, de Financial Times, de New York
Times, BBC, Deutsche Welle, Al Jazeera, Le Monde, El País, Folha de S.Paulo, NHK
World, South China Morning Post en meer, bewust over regio's verdeeld in plaats
van opgestapeld in één. Tien extra wallets, waaronder Rainbow, Rabby, Safe,
Solflare, Keplr en Trezor. Betalingen (Stripe, Adyen, PayPal, Plaid, Wise,
Revolut), observability (Datadog, Grafana, Prometheus, Sentry, PagerDuty) en
analytics (PostHog, Amplitude, Metabase, Looker).

Binnenkort-items worden vermeld in plaats van verborgen, en gemarkeerd in plaats
van gesuggereerd — zodat "kan ik dit in Nexow bouwen?" vandaag een eerlijk
antwoord krijgt in plaats van een misschien.

[Blader door de catalogus](https://nexow.ai/connectors) of
[start Nexow](https://x.nexow.ai) en verbind je eerste plaats.
