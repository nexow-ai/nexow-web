---
title: '156 connecteurs, 90 actifs : le catalogue de connexions où brancher vos widgets'
description: 'Brokers et exchanges qui passent de vrais ordres, données de marché et bases de données, wallets, automatisation de navigateur, données ouvertes et réseaux sociaux — cinq catégories de connexion, filtrables par classe d’actifs et type de fournisseur.'
pubDate: 2026-07-30
heroImage: ../../../assets/blog/catalog.svg
tags: ['product', 'connectors', 'data']
---

Un widget ne vaut que ce qu’il y a derrière. Il y a trois semaines, le catalogue
comptait 28 connecteurs actifs. Aujourd’hui le panneau de connexions en liste
**156, dont 90 actifs**, et la forme du catalogue a autant changé que sa taille :
ce ne sont plus seulement des places de marché.

## Cinq catégories, un seul canvas

- **Finance** — 30 actifs sur 42. Brokers et exchanges : Interactive Brokers,
  Alpaca, Charles Schwab, Robinhood, Saxo Bank, tastytrade, TradeStation,
  Tradovate, Rithmic, OANDA, FXCM, LMAX. Places crypto : Binance, Coinbase,
  Kraken, OKX, Bybit, KuCoin, Deribit, BitMEX, plus CCXT comme agrégateur. Des
  DEX dont Hyperliquid, Jupiter, Curve et PancakeSwap. Marchés prédictifs :
  Kalshi, Polymarket, PredictIt.
- **Données** — 20 actifs sur 28. Données de marché de Databento, Polygon.io,
  Finnhub, Alpha Vantage, Twelve Data, EODHD, Intrinio, IQFeed et Trading
  Economics — et votre propre stockage : PostgreSQL, MySQL, MongoDB, ClickHouse,
  Snowflake, BigQuery, ainsi que les bases vectorielles Qdrant, Pinecone,
  Weaviate et Milvus.
- **Services** — 23 actifs sur 58. Automatisation de navigateur (Browserbase,
  Browser Use, Steel, Browserless, Anchor Browser), scraping et recherche
  (Firecrawl, Apify, Bright Data, Tavily), et des données ouvertes qui ne
  demandent aucune clé : FRED, indicateurs de la Banque mondiale, NASA, séismes
  de l’USGS, Open-Meteo, OpenAQ, OpenSky, Data.gov, Wikipédia.
- **Sociaux** — 12 actifs sur 13. X, YouTube, Discord, Telegram, Reddit,
  Bluesky, Mastodon, Lemmy, Hacker News, DEV Community, Spotify, Strava.
- **Wallets** — 5 actifs sur 15. Aujourd’hui : MetaMask, Phantom, Ledger,
  Coinbase Wallet et Trust Wallet.

Comme ils alimentent tous le même canvas, un workspace peut tenir une paire de
devises, un perp, une action, une probabilité de baisse des taux Fed, une requête
Postgres et un subreddit côte à côte — et laisser un widget calculer par-dessus.

## Lire le marché, ou le trader

Le catalogue distingue un flux d’une place où vous pouvez agir. **22 connecteurs
actifs peuvent passer des ordres** — les brokers et exchanges ci-dessus — et
portent un badge *Trading* dans le panneau. Tout le reste est en lecture seule
par construction : un fournisseur de données ne peut pas bouger votre argent,
parce que l’intégration n’a nulle part où envoyer un ordre.

Filtrez par capacité quand ça compte. « Montre-moi tout ce qui peut trader des
actions » et « montre-moi tout ce qui peut les coter » sont deux questions
différentes, et le panneau répond aux deux.

## Des filtres qui suivent votre façon de penser

Chaque catégorie a ses propres facettes. **Finance** filtre par classe d’actifs :
actions, indices, taux, devises, matières premières, crypto, volatilité, marchés
prédictifs. Partout ailleurs, on filtre par type de fournisseur : broker,
exchange, DEX, agrégateur, données de marché, SQL, NoSQL, entrepôt de données,
base vectorielle, wallet, automatisation de navigateur, scraping, recherche web,
météo et air, données ouvertes, connaissance, actualités, géo et transport,
messagerie, réseau social, communauté, vidéo, musique, fitness.

Cherchez par nom, restreignez par statut, ouvrez une place pour ses détails et
connectez-vous depuis là.

## En direct du navigateur quand la place l’autorise

Les connecteurs changent *comment* vos données circulent, pas seulement d’où
elles viennent. Quand la politique CORS d’une place le permet, Nexow lui parle
**directement depuis votre navigateur** : les appels authentifiés ne touchent
jamais nos serveurs — moins de latence, et des identifiants qui restent sur votre
machine. Les places injoignables directement passent par un proxy léger. L’accès
reste limité aux services que vous connectez réellement.

Tous les connecteurs du catalogue sont disponibles sur **tous les plans**,
gratuit compris. Les quotas portent sur les bots et les agents, pas sur ce que
vous avez le droit de brancher.

## Ce qui arrive

Les 66 connecteurs marqués *bientôt* en disent long sur la suite : **29 agences
de presse** — Reuters, AP, AFP, Bloomberg, le Financial Times, le New York Times,
BBC, Deutsche Welle, Al Jazeera, Le Monde, El País, Folha de S.Paulo, NHK World,
South China Morning Post et d’autres, volontairement réparties entre régions
plutôt qu’entassées sur une seule. Dix wallets de plus, dont Rainbow, Rabby,
Safe, Solflare, Keplr et Trezor. Paiements (Stripe, Adyen, PayPal, Plaid, Wise,
Revolut), observabilité (Datadog, Grafana, Prometheus, Sentry, PagerDuty) et
analytics (PostHog, Amplitude, Metabase, Looker).

Les entrées « bientôt » sont listées plutôt que cachées, et marquées plutôt que
sous-entendues — pour que « puis-je construire ça dans Nexow ? » ait une réponse
honnête aujourd’hui, et pas un peut-être.

[Parcourir le catalogue](https://nexow.ai/connectors) ou
[lancer Nexow](https://x.nexow.ai) et connecter votre première place.
