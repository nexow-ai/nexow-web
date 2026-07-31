---
title: '156 个连接器，90 个已上线：你的组件可以接入的连接目录'
description: '能真正下单的券商与交易所、市场数据与数据库、钱包、浏览器自动化、开放数据和社交平台——五大类连接，可按资产类别和供应商类型筛选。'
pubDate: 2026-07-30
heroImage: ../../../assets/blog/catalog.svg
tags: ['产品', '连接器', '数据']
---

组件的上限，取决于它背后的数据。三周前，目录里有 28 个连接器已上线。今天，连接面板列出了 **156 个连接器，其中 90 个已上线**，而目录的形态变化不亚于它的规模：它早已不只是交易场所。

## 五大类别，同一块画布

- **金融** — 42 个中 30 个已上线。券商与交易所：Interactive Brokers、Alpaca、Charles Schwab、Robinhood、Saxo Bank、tastytrade、TradeStation、Tradovate、Rithmic、OANDA、FXCM、LMAX。加密场所：Binance、Coinbase、Kraken、OKX、Bybit、KuCoin、Deribit、BitMEX，外加作为聚合器的 CCXT。DEX 包括 Hyperliquid、Jupiter、Curve 和 PancakeSwap。预测市场：Kalshi、Polymarket、PredictIt。
- **数据** — 28 个中 20 个已上线。来自 Databento、Polygon.io、Finnhub、Alpha Vantage、Twelve Data、EODHD、Intrinio、IQFeed 和 Trading Economics 的市场数据——以及你自己的存储：PostgreSQL、MySQL、MongoDB、ClickHouse、Snowflake、BigQuery，还有向量库 Qdrant、Pinecone、Weaviate 和 Milvus。
- **服务** — 58 个中 23 个已上线。浏览器自动化（Browserbase、Browser Use、Steel、Browserless、Anchor Browser），抓取与搜索（Firecrawl、Apify、Bright Data、Tavily），以及完全不需要密钥的开放数据：FRED、世界银行指标、NASA、USGS 地震、Open-Meteo、OpenAQ、OpenSky、Data.gov、维基百科。
- **社交** — 13 个中 12 个已上线。X、YouTube、Discord、Telegram、Reddit、Bluesky、Mastodon、Lemmy、Hacker News、DEV Community、Spotify、Strava。
- **钱包** — 15 个中 5 个已上线。目前有：MetaMask、Phantom、Ledger、Coinbase Wallet 和 Trust Wallet。

因为它们都汇入同一块画布，一个工作区可以把一组外汇货币对、一份永续合约、一只股票、一个美联储降息概率、一条 Postgres 查询和一个 subreddit 并排放着——再让一个组件在它们之上做计算。

## 读懂市场，或者交易市场

目录区分了「一条数据流」和「一个你能动手的场所」。**22 个已上线的连接器可以下单**——就是上面那些券商和交易所——它们在面板中带有 *Trading* 标记。其余的在设计上就是只读：数据供应商动不了你的钱，因为这类集成压根没有下单的去处。

需要时按能力筛选。「给我看所有能交易股票的」和「给我看所有能给股票报价的」是两个不同的问题，面板对两者都给得出答案。

## 贴合你思考方式的筛选

每个类别都有自己的分面。**金融**按资产类别筛选：股票、指数、固定收益、外汇、大宗商品、加密、波动率、预测市场。其他类别一律按供应商类型筛选：券商、交易所、DEX、聚合器、市场数据、SQL、NoSQL、数据仓库、向量数据库、钱包、浏览器自动化、网页抓取、网页搜索、天气与空气、开放数据、知识、新闻、地理与交通、消息、社交网络、社区、视频、音乐、运动。

按名称搜索、按状态收窄，打开某个场所查看详情，再从那里连接。

## 场所允许时，直接从浏览器出发

连接器改变的不只是数据从哪来，还有它*怎么流*。在场所的 CORS 策略允许的情况下，Nexow 会**直接从你的浏览器**与它对话，带认证的请求因此完全不经过我们的服务器——延迟更低，凭据留在你自己的机器上。无法直连的场所则改走一层很薄的代理。访问权限始终限定在你实际连接的服务范围内。

目录里的每个连接器在**所有套餐**上都可用，免费版也不例外。配额限制的是机器人和智能体，而不是你能接入什么。

## 接下来会有什么

那 66 个标着*即将上线*的连接器，很能说明方向：**29 家新闻通讯社**——路透社、美联社、法新社、彭博、金融时报、纽约时报、BBC、德国之声、半岛电视台、世界报、国家报、圣保罗页报、NHK World、南华早报等等，刻意分散在各个地区，而不是堆在同一处。另有十个钱包，包括 Rainbow、Rabby、Safe、Solflare、Keplr 和 Trezor。还有支付（Stripe、Adyen、PayPal、Plaid、Wise、Revolut）、可观测性（Datadog、Grafana、Prometheus、Sentry、PagerDuty）和分析（PostHog、Amplitude、Metabase、Looker）。

即将上线的条目是列出来而不是藏起来，是标注出来而不是含糊带过——这样「我能在 Nexow 里做出这个吗？」今天得到的是一个诚实的答案，而不是一句「也许」。

[浏览目录](https://nexow.ai/connectors)，或者
[打开 Nexow](https://x.nexow.ai) 连接你的第一个场所。
