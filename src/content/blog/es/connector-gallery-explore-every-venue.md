---
title: 'Explora todos los mercados: la nueva galería de conectores'
description: 'Explora y busca cada venue que Nexow puede transmitir — 28 conectores en vivo hoy y 56 en el catálogo, entre FX, cripto, acciones, mercados de predicción, bases de datos y redes sociales.'
pubDate: 2026-07-08
heroImage: '/blog/connectors.svg'
tags: ['producto', 'conectores', 'datos']
---

Un widget vale lo que valen los datos que hay detrás. Así que le dimos un hogar a
los datos: una **galería de conectores** con buscador donde puedes ver cada venue
al que Nexow se conecta, filtrar por clase de activo y encontrar exactamente el
feed que necesita tu próximo dashboard.

## 28 en vivo hoy, 56 en el catálogo

Nexow trae **28 conectores en vivo ahora mismo**, con **56 en el catálogo** a
medida que ponemos en marcha el resto. Cada uno es una fuente enchufable de
precios en tiempo real, order books y datos de referencia a la que cualquier
widget puede suscribirse — sin pelearte con una API, sin boilerplate de websocket,
sin normalizar payloads por tu cuenta.

Abre la [galería de conectores](https://nexow.ai/es/connectors), escribe un nombre
o un mercado, y verás qué está en vivo, qué viene en camino y a qué categoría
pertenece.

## Seis categorías, un solo lienzo

La galería agrupa cada venue tal y como piensas los mercados de verdad:

- **FX** — OANDA, LMAX, FXCM
- **Cripto** — Binance, Coinbase, Kraken, Deribit, BitMEX
- **Acciones y futuros** — Interactive Brokers, Alpaca, TradeStation, Polygon,
  Rithmic, IQFeed
- **Mercados de predicción** — Kalshi, Polymarket
- **Datos y bases de datos** — Alpha Vantage, Intrinio, Trading Economics,
  Postgres, ClickHouse, Qdrant
- **Redes sociales** — X, YouTube, Discord, Telegram, Spotify

Como todos alimentan el mismo lienzo, puedes vigilar un par de FX, un perp, una
acción, la probabilidad de un recorte de la Fed y un feed social lado a lado — y
dejar que un widget calcule entre ellos.

## Directo desde el navegador cuando el venue lo permite

Los conectores no son solo una lista de logos — cambian *cómo* fluyen tus datos.
Donde la política de CORS del venue lo permite, Nexow habla con él **directamente
desde tu navegador**, así las llamadas autenticadas nunca pasan por nuestros
servidores. Eso mantiene la latencia baja y tus credenciales en tu máquina. Los
venues que no se pueden alcanzar directo pasan por un proxy ligero.

## Encuentra tu venue y construye

La galería es la forma más rápida de responder a «¿puedo construir esto en
Nexow?». Busca tu exchange o proveedor de datos, confirma que está en vivo y
describe el widget que quieres:

> Un gráfico de velas de EUR-USD desde OANDA con 20 y 50 EMA, y una tabla de
> probabilidades de Kalshi para el próximo FOMC al lado.

Nexow conecta cada widget al conector que nombraste y lo transmite directo al
lienzo.

[Explora la galería de conectores](https://nexow.ai/es/connectors) o
[abre la app](https://x.nexow.ai) y enchúfate a tu primer mercado.
