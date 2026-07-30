---
title: '156 connettori, 90 attivi: il catalogo di connessioni a cui collegare i tuoi widget'
description: 'Broker ed exchange che piazzano ordini veri, dati di mercato e database, wallet, automazione del browser, dati aperti e social — cinque categorie di connessione, filtrabili per asset class e tipo di provider.'
pubDate: 2026-07-30
heroImage: ../../../assets/blog/catalog.svg
tags: ['prodotto', 'connettori', 'dati']
---

Un widget vale quanto ciò che ha dietro. Tre settimane fa il catalogo aveva 28
connettori attivi. Oggi il pannello connessioni ne elenca **156, di cui 90
attivi**, e la forma del catalogo è cambiata quanto la sua dimensione: non sono
più solo sedi di mercato.

## Cinque categorie, un solo canvas

- **Finanza** — 30 attivi su 42. Broker ed exchange: Interactive Brokers,
  Alpaca, Charles Schwab, Robinhood, Saxo Bank, tastytrade, TradeStation,
  Tradovate, Rithmic, OANDA, FXCM, LMAX. Sedi crypto: Binance, Coinbase, Kraken,
  OKX, Bybit, KuCoin, Deribit, BitMEX, più CCXT come aggregatore. DEX tra cui
  Hyperliquid, Jupiter, Curve e PancakeSwap. Mercati previsionali: Kalshi,
  Polymarket, PredictIt.
- **Dati** — 20 attivi su 28. Dati di mercato da Databento, Polygon.io, Finnhub,
  Alpha Vantage, Twelve Data, EODHD, Intrinio, IQFeed e Trading Economics — e il
  tuo storage: PostgreSQL, MySQL, MongoDB, ClickHouse, Snowflake, BigQuery e i
  vector store Qdrant, Pinecone, Weaviate e Milvus.
- **Servizi** — 23 attivi su 58. Automazione del browser (Browserbase, Browser
  Use, Steel, Browserless, Anchor Browser), scraping e ricerca (Firecrawl,
  Apify, Bright Data, Tavily) e dati aperti che non chiedono alcuna chiave:
  FRED, indicatori della Banca Mondiale, NASA, terremoti USGS, Open-Meteo,
  OpenAQ, OpenSky, Data.gov, Wikipedia.
- **Social** — 12 attivi su 13. X, YouTube, Discord, Telegram, Reddit, Bluesky,
  Mastodon, Lemmy, Hacker News, DEV Community, Spotify, Strava.
- **Wallet** — 5 attivi su 15. Oggi: MetaMask, Phantom, Ledger, Coinbase Wallet
  e Trust Wallet.

Poiché alimentano tutti lo stesso canvas, un workspace può tenere una coppia FX,
un perp, un'azione, la probabilità di un taglio della Fed, una query Postgres e
un subreddit uno accanto all'altro — e lasciare che un widget calcoli su tutti.

## Leggere il mercato, o operarci

Il catalogo distingue tra un feed e una sede su cui puoi agire. **22 connettori
attivi possono piazzare ordini** — i broker e gli exchange qui sopra — e portano
un badge *Trading* nel pannello. Tutto il resto è in sola lettura per come è
costruito: un provider di dati non può muovere il tuo denaro perché
l'integrazione non ha dove mandare un ordine.

Filtra per capacità quando conta. «Mostrami tutto ciò che può negoziare azioni» e
«mostrami tutto ciò che può quotarle» sono domande diverse, e il pannello
risponde a entrambe.

## Filtri che seguono come ragioni

Ogni categoria ha le sue faccette. **Finanza** filtra per asset class: azioni,
indici, reddito fisso, valute, materie prime, crypto, volatilità, mercati
previsionali. Ovunque altrove si filtra per tipo di provider: broker, exchange,
DEX, aggregatore, dati di mercato, SQL, NoSQL, data warehouse, database
vettoriale, wallet, automazione del browser, web scraping, ricerca web, meteo e
aria, dati aperti, conoscenza, notizie, geo e trasporti, messaggistica, social
network, community, video, musica, fitness.

Cerca per nome, restringi per stato, apri una sede per i dettagli e collegati da
lì.

## Direttamente dal browser dove la sede lo consente

I connettori cambiano *come* scorrono i tuoi dati, non solo da dove arrivano.
Dove la policy CORS di una sede lo permette, Nexow le parla **direttamente dal
tuo browser**, così le chiamate autenticate non toccano mai i nostri server:
meno latenza e credenziali che restano sulla tua macchina. Le sedi non
raggiungibili direttamente passano invece per un proxy sottile. L'accesso resta
limitato ai servizi che colleghi davvero.

Ogni connettore del catalogo è disponibile su **tutti i piani**, gratuito
incluso. Le quote riguardano bot e agent, non ciò a cui puoi collegarti.

## Cosa sta arrivando

I 66 connettori marcati *presto* dicono molto su dove si va: **29 agenzie di
stampa** — Reuters, AP, AFP, Bloomberg, Financial Times, New York Times, BBC,
Deutsche Welle, Al Jazeera, Le Monde, El País, Folha de S.Paulo, NHK World,
South China Morning Post e altre, distribuite di proposito tra regioni invece di
accumularsi in una sola. Altri dieci wallet, tra cui Rainbow, Rabby, Safe,
Solflare, Keplr e Trezor. Pagamenti (Stripe, Adyen, PayPal, Plaid, Wise,
Revolut), observability (Datadog, Grafana, Prometheus, Sentry, PagerDuty) e
analytics (PostHog, Amplitude, Metabase, Looker).

Le voci «presto» sono elencate invece che nascoste, e marcate invece che
sottintese — così «posso costruirlo in Nexow?» ha oggi una risposta onesta invece
di un forse.

[Sfoglia il catalogo](https://nexow.ai/connectors) o
[apri Nexow](https://x.nexow.ai) e collega la tua prima sede.
