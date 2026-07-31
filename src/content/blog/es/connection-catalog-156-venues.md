---
title: '156 conectores, 90 activos: el catálogo de conexiones al que enchufar tus widgets'
description: 'Brokers y exchanges que ejecutan órdenes reales, datos de mercado y bases de datos, wallets, automatización de navegador, datos abiertos y redes sociales — cinco categorías de conexión, filtrables por clase de activo y tipo de proveedor.'
pubDate: 2026-07-30
heroImage: ../../../assets/blog/catalog.svg
tags: ['producto', 'conectores', 'datos']
---

Un widget vale lo que valen sus datos. Hace tres semanas el catálogo tenía 28
conectores activos. Hoy el panel de conexiones lista **156 conectores, 90 de
ellos activos**, y la forma del catálogo ha cambiado tanto como su tamaño: ya no
son solo plazas de mercado.

## Cinco categorías, un mismo lienzo

- **Finanzas** — 30 activos de 42. Brokers y exchanges: Interactive Brokers,
  Alpaca, Charles Schwab, Robinhood, Saxo Bank, tastytrade, TradeStation,
  Tradovate, Rithmic, OANDA, FXCM, LMAX. Plazas cripto: Binance, Coinbase,
  Kraken, OKX, Bybit, KuCoin, Deribit, BitMEX, más CCXT como agregador. DEX como
  Hyperliquid, Jupiter, Curve y PancakeSwap. Mercados de predicción: Kalshi,
  Polymarket, PredictIt.
- **Datos** — 20 activos de 28. Datos de mercado de Databento, Polygon.io,
  Finnhub, Alpha Vantage, Twelve Data, EODHD, Intrinio, IQFeed y Trading
  Economics — y tu propio almacenamiento: PostgreSQL, MySQL, MongoDB,
  ClickHouse, Snowflake, BigQuery y los almacenes vectoriales Qdrant, Pinecone,
  Weaviate y Milvus.
- **Servicios** — 23 activos de 58. Automatización de navegador (Browserbase,
  Browser Use, Steel, Browserless, Anchor Browser), scraping y búsqueda
  (Firecrawl, Apify, Bright Data, Tavily) y datos abiertos que no piden clave
  alguna: FRED, indicadores del Banco Mundial, NASA, terremotos del USGS,
  Open-Meteo, OpenAQ, OpenSky, Data.gov, Wikipedia.
- **Sociales** — 12 activos de 13. X, YouTube, Discord, Telegram, Reddit,
  Bluesky, Mastodon, Lemmy, Hacker News, DEV Community, Spotify, Strava.
- **Wallets** — 5 activas de 15. Hoy: MetaMask, Phantom, Ledger, Coinbase Wallet
  y Trust Wallet.

Como todas alimentan el mismo lienzo, un workspace puede tener un par de divisas,
un perpetuo, una acción, la probabilidad de un recorte de la Fed, una consulta a
Postgres y un subreddit uno al lado del otro — y dejar que un widget calcule
sobre todos ellos.

## Leer el mercado, u operar en él

El catálogo distingue entre un feed y una plaza en la que puedes actuar. **22
conectores activos pueden ejecutar órdenes** — los brokers y exchanges de
arriba — y llevan una etiqueta *Trading* en el panel. El resto es de solo
lectura por construcción: un proveedor de datos no puede mover tu dinero porque
la integración no tiene a dónde enviar una orden.

Filtra por capacidad cuando importe. «Enséñame todo lo que pueda operar
acciones» y «enséñame todo lo que pueda cotizarlas» son preguntas distintas, y
el panel responde a las dos.

## Filtros que encajan con cómo piensas

Cada categoría tiene sus propias facetas. **Finanzas** filtra por clase de
activo: acciones, índices, renta fija, divisas, materias primas, cripto,
volatilidad, mercados de predicción. El resto filtra por tipo de proveedor:
broker, exchange, DEX, agregador, datos de mercado, SQL, NoSQL, data warehouse,
base de datos vectorial, wallet, automatización de navegador, scraping, búsqueda
web, clima y aire, datos abiertos, conocimiento, noticias, geo y transporte,
mensajería, red social, comunidad, vídeo, música, fitness.

Busca por nombre, acota por estado, abre una plaza para ver su detalle y conecta
desde ahí.

## Directo desde el navegador cuando la plaza lo permite

Los conectores cambian *cómo* fluyen tus datos, no solo de dónde vienen. Cuando
la política CORS de una plaza lo permite, Nexow habla con ella **directamente
desde tu navegador**, así que las llamadas autenticadas nunca tocan nuestros
servidores: menos latencia y credenciales que se quedan en tu máquina. Las
plazas que no se pueden alcanzar directamente pasan por un proxy fino. El acceso
sigue acotado a los servicios que conectas de verdad.

Todos los conectores del catálogo están disponibles en **todos los planes**,
incluido el gratuito. Las cuotas aplican a bots y agentes, no a lo que puedes
enchufar.

## Lo que viene

Los 66 conectores marcados como *pronto* dicen mucho de hacia dónde va esto: **29
agencias de noticias** — Reuters, AP, AFP, Bloomberg, Financial Times, The New
York Times, BBC, Deutsche Welle, Al Jazeera, Le Monde, El País, Folha de
S.Paulo, NHK World, South China Morning Post y más, repartidas a propósito entre
regiones en vez de amontonarse en una. Diez wallets más, entre ellas Rainbow,
Rabby, Safe, Solflare, Keplr y Trezor. Pagos (Stripe, Adyen, PayPal, Plaid,
Wise, Revolut), observabilidad (Datadog, Grafana, Prometheus, Sentry, PagerDuty)
y analítica (PostHog, Amplitude, Metabase, Looker).

Las entradas «pronto» se listan en vez de esconderse, y se marcan en vez de
insinuarse — así «¿puedo construir esto en Nexow?» tiene hoy una respuesta
honesta en lugar de un quizá.

[Explora el catálogo](https://nexow.ai/connectors) o
[abre Nexow](https://x.nexow.ai) y conecta tu primera plaza.
