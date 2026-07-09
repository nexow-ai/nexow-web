---
title: 'Explorez tous les marchés : la nouvelle galerie de connecteurs'
description: 'Parcourez et recherchez chaque venue que Nexow peut diffuser — 28 connecteurs en direct aujourd’hui et 56 dans le catalogue, à travers le FX, la crypto, les actions, les marchés de prédiction, les bases de données et les réseaux sociaux.'
pubDate: 2026-07-08
heroImage: ../../../assets/blog/connectors.svg
tags: ['product', 'connectors', 'data']
---

Un widget ne vaut que les données qui se trouvent derrière lui. Nous avons donc donné un foyer aux données : une **galerie de connecteurs** avec recherche, où vous pouvez voir chaque venue auquel Nexow se branche, filtrer par classe d’actifs et trouver exactement le flux dont votre prochain tableau de bord a besoin.

## 28 en direct aujourd’hui, 56 dans le catalogue

Nexow propose **28 connecteurs en direct dès maintenant**, avec **56 dans le catalogue** à mesure que nous mettons le reste en ligne. Chacun est une source enfichable de prix en temps réel, de carnets d’ordres et de données de référence à laquelle n’importe quel widget peut s’abonner — sans bagarre avec une API, sans boilerplate de websocket, sans normaliser les payloads de votre côté.

Ouvrez la [galerie de connecteurs](https://nexow.ai/fr/connectors), tapez un nom ou un marché, et vous verrez ce qui est en direct, ce qui arrive et à quelle catégorie il appartient.

## Six catégories, un seul canvas

La galerie regroupe chaque venue de la façon dont vous pensez réellement les marchés :

- **FX** — OANDA, LMAX, FXCM
- **Crypto** — Binance, Coinbase, Kraken, Deribit, BitMEX
- **Actions et futures** — Interactive Brokers, Alpaca, TradeStation, Polygon, Rithmic, IQFeed
- **Marchés de prédiction** — Kalshi, Polymarket
- **Données et bases de données** — Alpha Vantage, Intrinio, Trading Economics, Postgres, ClickHouse, Qdrant
- **Réseaux sociaux** — X, YouTube, Discord, Telegram, Spotify

Comme ils alimentent tous le même canvas, vous pouvez surveiller une paire FX, un perp, une action, la probabilité d’une baisse de taux de la Fed et un flux social côte à côte — et laisser un widget calculer entre eux.

## En direct depuis le navigateur là où le venue l’autorise

Les connecteurs ne sont pas qu’une liste de logos — ils changent *la façon* dont vos données circulent. Là où la politique CORS d’un venue le permet, Nexow lui parle **directement depuis votre navigateur**, de sorte que les appels authentifiés ne passent jamais par nos serveurs. Cela maintient la latence basse et vos identifiants sur votre machine. Les venues qui ne peuvent pas être atteints directement passent plutôt par un proxy léger.

## Trouvez votre venue, puis construisez

La galerie est le moyen le plus rapide de répondre à « puis-je construire ça dans Nexow ? ». Cherchez votre exchange ou fournisseur de données, confirmez qu’il est en direct, puis décrivez le widget que vous voulez :

> Un graphique en chandeliers d’EUR-USD depuis OANDA avec 20 et 50 EMA, et à côté une table des probabilités Kalshi pour le prochain FOMC.

Nexow branche chaque widget au connecteur que vous avez nommé et le diffuse directement sur le canvas.

[Parcourez la galerie de connecteurs](https://nexow.ai/fr/connectors) ou [lancez l’app](https://x.nexow.ai) et branchez-vous à votre premier marché.
