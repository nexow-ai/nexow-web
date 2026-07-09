---
title: 'Jeden Markt erkunden: die neue Connector-Galerie'
description: 'Durchsuchen Sie jeden Venue, den Nexow streamen kann — 28 Connectors live und 56 im Katalog, über FX, Krypto, Aktien, Prediction Markets, Datenbanken und Socials.'
pubDate: 2026-07-08
heroImage: ../../../assets/blog/connectors.svg
tags: ['produkt', 'konnektoren', 'daten']
---

Ein Widget ist nur so gut wie die Daten dahinter. Deshalb haben wir ein Zuhause
für die Daten gebaut: eine durchsuchbare **Connector-Galerie**, in der Sie jeden
Venue sehen, den Nexow anbinden kann, nach Asset-Klasse filtern und genau den
Feed finden, den Ihr nächstes Dashboard braucht.

## 28 live, 56 im Katalog

Nexow liefert **28 Connectors live**, mit **56 im Katalog**, während wir den Rest
online schalten. Jeder ist eine einsteckbare Quelle für Echtzeitpreise, Order
Books und Referenzdaten, die jedes Widget abonnieren kann — kein API-Gefummel,
kein Websocket-Boilerplate, keine Payload-Normalisierung auf Ihrer Seite.

Öffnen Sie die [Connector-Galerie](https://nexow.ai/connectors), geben Sie einen
Namen oder Markt ein, und Sie sehen, was live ist, was kommt und zu welcher
Kategorie es gehört.

## Sechs Kategorien, ein Canvas

Die Galerie gruppiert jeden Venue so, wie Sie über Märkte denken:

- **FX** — OANDA, LMAX, FXCM
- **Krypto** — Binance, Coinbase, Kraken, Deribit, BitMEX
- **Aktien & Futures** — Interactive Brokers, Alpaca, TradeStation, Polygon,
  Rithmic, IQFeed
- **Prediction Markets** — Kalshi, Polymarket
- **Daten & Datenbanken** — Alpha Vantage, Intrinio, Trading Economics, Postgres,
  ClickHouse, Qdrant
- **Socials** — X, YouTube, Discord, Telegram, Spotify

Weil sie alle dasselbe Canvas speisen, können Sie ein FX-Paar, einen Perp, eine
Aktie, eine Fed-Senkungswahrscheinlichkeit und einen Social-Feed nebeneinander
beobachten — und ein Widget über sie hinweg rechnen lassen.

## Browser-direkt, wo der Venue es erlaubt

Connectors sind nicht nur eine Liste von Logos — sie ändern, *wie* Ihre Daten
fließen. Wo die CORS-Richtlinie eines Venues es zulässt, spricht Nexow **direkt
aus Ihrem Browser** mit ihm, sodass authentifizierte Aufrufe nie unsere Server
passieren. Das hält die Latenz niedrig und Ihre Credentials auf Ihrer Maschine.
Venues, die nicht direkt erreichbar sind, laufen über einen schlanken Proxy.

## Venue finden, dann bauen

Die Galerie ist der schnellste Weg, die Frage zu beantworten: „Kann ich das in
Nexow bauen?" Suchen Sie Ihre Exchange oder Ihren Datenanbieter, bestätigen Sie,
dass er live ist, und beschreiben Sie dann das gewünschte Widget:

> Ein Candlestick-Chart von EUR-USD von OANDA mit EMA 20 und 50 und daneben eine
> Tabelle der Kalshi-Quoten für das nächste FOMC.

Nexow verbindet jedes Widget mit dem benannten Connector und streamt es direkt
auf das Canvas.

[Durchsuchen Sie die Connector-Galerie](https://nexow.ai/connectors) oder
[starten Sie die App](https://x.nexow.ai) und verbinden Sie sich mit Ihrem
ersten Markt.
