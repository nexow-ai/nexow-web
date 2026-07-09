---
title: 'Esplora ogni mercato: la nuova galleria dei connettori'
description: 'Sfoglia e cerca ogni venue che Nexow può trasmettere — 28 connettori live oggi e 56 nel catalogo, tra FX, crypto, azioni, prediction market, database e social.'
pubDate: 2026-07-08
heroImage: ../../../assets/blog/connectors.svg
tags: ['prodotto', 'connettori', 'dati']
---

Un widget vale quanto i dati che lo alimentano. Per questo abbiamo creato una
casa per i dati: una **galleria dei connettori** ricercabile dove vedere ogni
venue a cui Nexow può collegarsi, filtrare per asset class e trovare il feed
esatto per la tua prossima dashboard.

## 28 live oggi, 56 nel catalogo

Nexow offre **28 connettori live in questo momento**, con **56 nel catalogo**
mentre portiamo online il resto. Ognuno è una fonte collegabile di prezzi in
tempo reale, order book e dati di riferimento a cui ogni widget può iscriversi —
niente gestione API, niente boilerplate websocket, nessuna normalizzazione del
payload da parte tua.

Apri la [galleria dei connettori](https://nexow.ai/connectors), digita un nome o
un mercato e vedrai cosa è live, cosa sta arrivando e a quale categoria
appartiene.

## Sei categorie, un canvas

La galleria raggruppa ogni venue come pensi ai mercati:

- **FX** — OANDA, LMAX, FXCM
- **Crypto** — Binance, Coinbase, Kraken, Deribit, BitMEX
- **Azioni e futures** — Interactive Brokers, Alpaca, TradeStation, Polygon,
  Rithmic, IQFeed
- **Prediction market** — Kalshi, Polymarket
- **Dati e database** — Alpha Vantage, Intrinio, Trading Economics, Postgres,
  ClickHouse, Qdrant
- **Social** — X, YouTube, Discord, Telegram, Spotify

Poiché alimentano tutti lo stesso canvas, puoi osservare una coppia FX, un perp,
un’azione, una probabilità di taglio Fed e un feed social affiancati — e far
calcolare un widget su di essi.

## Diretto dal browser dove il venue lo consente

I connettori non sono solo un elenco di loghi — cambiano *come* fluiscono i tuoi
dati. Dove la policy CORS del venue lo permette, Nexow parla con esso **direttamente
dal browser**, quindi le chiamate autenticate non passano mai dai nostri server.
Così la latenza resta bassa e le credenziali sulla tua macchina. I venue non
raggiungibili direttamente passano da un proxy leggero.

## Trova il venue, poi costruisci

La galleria è il modo più rapido per rispondere a «posso costruirlo in Nexow?».
Cerca il tuo exchange o provider dati, conferma che è live, poi descrivi il
widget che vuoi:

> Un grafico a candele di EUR-USD da OANDA con EMA 20 e 50, e accanto una tabella
> delle quote Kalshi per il prossimo FOMC.

Nexow collega ogni widget al connettore che hai indicato e lo trasmette
direttamente sul canvas.

[Sfoglia la galleria dei connettori](https://nexow.ai/connectors) o
[avvia l’app](https://x.nexow.ai) e collegati al tuo primo mercato.
