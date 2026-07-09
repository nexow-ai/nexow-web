---
title: 'Explore todos os mercados: a nova galeria de conectores'
description: 'Navegue e pesquise todos os venues que o Nexow pode transmitir — 28 conectores ativos hoje e 56 no catálogo, cobrindo FX, cripto, ações, mercados de predição, bancos de dados e redes sociais.'
pubDate: 2026-07-08
heroImage: ../../../assets/blog/connectors.svg
tags: ['produto', 'conectores', 'dados']
---

Um widget é tão bom quanto os dados por trás dele. Por isso criamos um lar para os
dados: uma **galeria de conectores** pesquisável onde você vê todos os venues que o
Nexow pode conectar, filtra por classe de ativo e encontra o feed exato que seu
próximo dashboard precisa.

## 28 ativos hoje, 56 no catálogo

O Nexow oferece **28 conectores ativos agora**, com **56 no catálogo** conforme
colocamos o restante no ar. Cada um é uma fonte plugável de preços em tempo real,
order books e dados de referência que qualquer widget pode assinar — sem lidar com
API, sem boilerplate de websocket, sem normalização de payload do seu lado.

Abra a [galeria de conectores](https://nexow.ai/connectors), digite um nome ou um
mercado, e você verá o que está ativo, o que está chegando e a qual categoria
pertence.

## Seis categorias, um canvas

A galeria agrupa cada venue do jeito que você realmente pensa sobre mercados:

- **FX** — OANDA, LMAX, FXCM
- **Crypto** — Binance, Coinbase, Kraken, Deribit, BitMEX
- **Equities & futures** — Interactive Brokers, Alpaca, TradeStation, Polygon,
  Rithmic, IQFeed
- **Prediction markets** — Kalshi, Polymarket
- **Data & databases** — Alpha Vantage, Intrinio, Trading Economics, Postgres,
  ClickHouse, Qdrant
- **Socials** — X, YouTube, Discord, Telegram, Spotify

Como todos alimentam o mesmo canvas, você pode acompanhar um par de FX, um perp,
uma ação, uma probabilidade de corte do Fed e um feed social lado a lado — e deixar
um widget calcular entre eles.

## Direto do navegador onde o venue permite

Conectores não são só uma lista de logos — eles mudam *como* seus dados fluem. Onde
a política de CORS de um venue permite, o Nexow fala com ele **diretamente do seu
navegador**, então chamadas autenticadas nunca passam pelos nossos servidores. Isso
mantém a latência baixa e suas credenciais na sua máquina. Os venues que não podem
ser alcançados diretamente passam por um proxy fino.

## Encontre seu venue e construa

A galeria é a forma mais rápida de responder "posso construir isso no Nexow?".
Pesquise sua exchange ou provedor de dados, confirme que está ativo e descreva o
widget que você quer:

> Um gráfico de velas de EUR-USD da OANDA com EMA 20 e 50, e uma tabela com as
> odds da Kalshi para o próximo FOMC ao lado.

O Nexow conecta cada widget ao conector que você nomeou e transmite direto para o
canvas.

[Navegue pela galeria de conectores](https://nexow.ai/connectors) ou
[abra o app](https://x.nexow.ai) e conecte-se ao seu primeiro mercado.
