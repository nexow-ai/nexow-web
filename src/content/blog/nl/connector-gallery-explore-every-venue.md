---
title: 'Verken elke markt: de nieuwe connectorengalerie'
description: 'Blader en zoek elke locatie waar Nexow kan streamen — 28 connectors vandaag live en 56 in de catalogus, over FX, crypto, aandelen, voorspellingsmarkten, databases en socials.'
pubDate: 2026-07-08
heroImage: ../../../assets/blog/connectors.svg
tags: ['product', 'connectors', 'data']
---

Een widget is slechts zo goed als de gegevens erachter. Dus bouwden we een thuis voor de gegevens: een doorzoekbare **connectorgalerie** waar je elke locatie kunt zien waarmee Nexow verbinding kan maken, kunt filteren op activaklasse en kunt vinden welke exact feed je volgende dashboard nodig heeft.

## 28 vandaag live, 56 in de catalogus

Nexow levert **28 connectors vandaag live**, met **56 in de catalogus** terwijl we de rest online brengen. Elk is een aansluitbare bron van realtime prijzen, orderboeken en referentiegegevens waarvan elke widget zich kan abonneren — geen API-gedoe, geen websocket-boilerplate, geen payloadnormalisatie aan uw zijde.

Open de [connectorgalerie](https://nexow.ai/connectors), typ een naam of een markt, en je ziet wat live is, wat eraan komt, en in welke categorie het hoort.

## Zes categorieën, één canvas

De galerie groepeert elke locatie zoals je eigenlijk over markten denkt:

- **FX** — OANDA, LMAX, FXCM
- **Crypto** — Binance, Coinbase, Kraken, Deribit, BitMEX
- **Aandelen & futures** — Interactive Brokers, Alpaca, TradeStation, Polygon, Rithmic, IQFeed
- **Voorspellingsmarkten** — Kalshi, Polymarket
- **Gegevens & databases** — Alpha Vantage, Intrinio, Trading Economics, Postgres, ClickHouse, Qdrant
- **Socials** — X, YouTube, Discord, Telegram, Spotify

Omdat ze allemaal hetzelfde canvas voeden, kun je een FX-paar, een perp, een aandeel, een Fed-cut waarschijnlijkheid en een socialefeed naast elkaar bekijken — en laat een widget eroverheen berekenen.

## Browser-direct waar de locatie het toestaat

Connectors zijn niet zomaar een lijst met logo's — ze veranderen *hoe* je gegevens stromen. Waar het CORS-beleid van een locatie het toestaat, spreekt Nexow ermee **rechtstreeks vanuit je browser**, dus geverifieerde oproepen gaan nooit door onze servers. Dat houdt de latentie laag en je referenties op je machine. Locaties die niet rechtstreeks kunnen worden bereikt, routeren in plaats daarvan door een dunne proxy.

## Vind je locatie, bouw vervolgens

De galerie is de snelste manier om "kan ik dit in Nexow bouwen?" te beantwoorden. Zoek je beurs of dataprovider, bevestig dat het live is, en beschrijf vervolgens de widget die je wilt:

> Een kandelstakgrafiek van EUR-USD van OANDA met 20 en 50 EMA, en een tabel met Kalshi-odds voor de volgende FOMC ernaast.

Nexow verbindt elke widget met de connector die je noemde en streamt deze rechtstreeks naar het canvas.

[Blader door de connectorgalerie](https://nexow.ai/connectors) of
[start de app](https://x.nexow.ai) en sluit je op je eerste markt aan.