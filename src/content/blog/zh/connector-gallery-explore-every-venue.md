---
title: '探索所有市场：全新连接器画廊'
description: '浏览并搜索 Nexow 可接入的每一个场所 — 28 个连接器已上线，目录中共 56 个，覆盖外汇、加密货币、股票、预测市场、数据库和社交。'
pubDate: 2026-07-08
heroImage: ../../../assets/blog/connectors.svg
tags: ['产品', '连接器', '数据']
---

组件的好坏取决于背后的数据。因此我们为数据建了一个家：可搜索的 **connector gallery**，你可以查看 Nexow 能接入的每一个场所，按资产类别筛选，找到下一个仪表盘所需的确切数据源。

## 28 个已上线，目录中共 56 个

Nexow 目前提供 **28 个已上线连接器**，**目录中共 56 个**，其余正在陆续上线。每一个都是可插拔的实时价格、订单簿和参考数据源，任何组件都可以订阅 — 无需处理 API、无需 websocket 样板代码、无需在你这边做载荷规范化。

打开 [connector gallery](https://nexow.ai/connectors)，输入名称或市场，即可查看哪些已上线、哪些即将推出，以及所属类别。

## 六大类别，一块画布

画廊按你思考市场的实际方式对所有场所分组：

- **FX** — OANDA、LMAX、FXCM
- **Crypto** — Binance、Coinbase、Kraken、Deribit、BitMEX
- **Equities & futures** — Interactive Brokers、Alpaca、TradeStation、Polygon、Rithmic、IQFeed
- **Prediction markets** — Kalshi、Polymarket
- **Data & databases** — Alpha Vantage、Intrinio、Trading Economics、Postgres、ClickHouse、Qdrant
- **Socials** — X、YouTube、Discord、Telegram、Spotify

因为它们都汇入同一块画布，你可以并排查看外汇对、永续合约、股票、美联储降息概率和社交动态 — 并让组件跨数据源计算。

## 场所允许时，浏览器直连

连接器不只是 logo 列表 — 它们改变了数据的 *流动方式*。在场所的 CORS 策略允许的情况下，Nexow **直接从浏览器**与其通信，因此经过身份验证的调用不会经过我们的服务器。这降低了延迟，也让凭证留在本机。无法直接访问的场所则通过轻量代理路由。

## 找到场所，然后开始构建

画廊是回答「我能在 Nexow 里搭建这个吗？」最快的方式。搜索你的交易所或数据提供商，确认已上线，然后描述你想要的组件：

> 来自 OANDA 的 EUR-USD K 线图，带 20 和 50 EMA，旁边放一张 Kalshi 下次 FOMC 赔率表。

Nexow 将每个组件连接到你指定的连接器，并直接流式传输到画布。

[浏览 connector gallery](https://nexow.ai/connectors)，或 [启动应用](https://x.nexow.ai)，接入你的第一个市场。
