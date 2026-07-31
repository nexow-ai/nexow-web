---
title: 'コネクター156、うち90が稼働：ウィジェットを挿せる接続カタログ'
description: '実際に発注できるブローカーと取引所、マーケットデータとデータベース、ウォレット、ブラウザ自動化、オープンデータ、ソーシャル — 5カテゴリの接続を、資産クラスとプロバイダー種別で絞り込めます。'
pubDate: 2026-07-30
heroImage: ../../../assets/blog/catalog.svg
tags: ['プロダクト', 'コネクター', 'データ']
---

ウィジェットは、その背後にあるものの質を超えられません。3週間前、カタログで稼働していたコネクターは28個でした。今日、接続パネルが並べているのは**156個のコネクター、うち90個が稼働中**。しかも変わったのは規模だけでなく、カタログの形そのものです。もはや市場の取引所だけではありません。

## 5つのカテゴリ、ひとつのキャンバス

- **ファイナンス** — 42中30が稼働。ブローカーと取引所：Interactive Brokers、Alpaca、Charles Schwab、Robinhood、Saxo Bank、tastytrade、TradeStation、Tradovate、Rithmic、OANDA、FXCM、LMAX。暗号資産の取引所：Binance、Coinbase、Kraken、OKX、Bybit、KuCoin、Deribit、BitMEX、加えてアグリゲーターのCCXT。DEXはHyperliquid、Jupiter、Curve、PancakeSwapなど。予測市場はKalshi、Polymarket、PredictIt。
- **データ** — 28中20が稼働。Databento、Polygon.io、Finnhub、Alpha Vantage、Twelve Data、EODHD、Intrinio、IQFeed、Trading Economicsからのマーケットデータ — そしてあなた自身のストレージ：PostgreSQL、MySQL、MongoDB、ClickHouse、Snowflake、BigQuery、さらにベクトルストアのQdrant、Pinecone、Weaviate、Milvus。
- **サービス** — 58中23が稼働。ブラウザ自動化（Browserbase、Browser Use、Steel、Browserless、Anchor Browser）、スクレイピングと検索（Firecrawl、Apify、Bright Data、Tavily）、そして鍵すら要らないオープンデータ：FRED、世界銀行指標、NASA、USGS地震、Open-Meteo、OpenAQ、OpenSky、Data.gov、Wikipedia。
- **ソーシャル** — 13中12が稼働。X、YouTube、Discord、Telegram、Reddit、Bluesky、Mastodon、Lemmy、Hacker News、DEV Community、Spotify、Strava。
- **ウォレット** — 15中5が稼働。現時点ではMetaMask、Phantom、Ledger、Coinbase Wallet、Trust Wallet。

すべてが同じキャンバスを流れるので、ひとつのワークスペースに通貨ペア、パーペチュアル、株式、FRB利下げ確率、Postgresのクエリ、subredditを並べて置き — その上でウィジェットに計算させられます。

## 市場を読むか、市場で取引するか

カタログは「フィード」と「実際に動ける取引所」を区別します。**稼働中の22コネクターは発注が可能**で（上のブローカーと取引所です）、パネル上で*Trading*バッジが付きます。それ以外は構造上すべて読み取り専用です。データプロバイダーがあなたのお金を動かせないのは、その連携に注文の送り先が存在しないからです。

必要なときは機能で絞り込んでください。「株式を取引できるものを全部見せて」と「株式を気配表示できるものを全部見せて」は別の問いで、パネルはその両方に答えます。

## 考え方に沿ったフィルター

カテゴリごとに独自のファセットがあります。**ファイナンス**は資産クラスで絞ります：株式、指数、債券、為替、コモディティ、暗号資産、ボラティリティ、予測市場。それ以外はプロバイダー種別で絞ります：ブローカー、取引所、DEX、アグリゲーター、マーケットデータ、SQL、NoSQL、データウェアハウス、ベクトルDB、ウォレット、ブラウザ自動化、Webスクレイピング、Web検索、天気と大気、オープンデータ、ナレッジ、ニュース、地理と交通、メッセージング、SNS、コミュニティ、動画、音楽、フィットネス。

名前で検索し、ステータスで絞り込み、取引所を開いて詳細を見て、そこから接続する。

## 取引所が許すならブラウザから直接

コネクターが変えるのはデータの出どころだけでなく、その*流れ方*でもあります。取引所のCORSポリシーが許す場合、Nexowは**あなたのブラウザから直接**そこへ話しかけます。認証付きの呼び出しが私たちのサーバーを一切経由しない — レイテンシは下がり、認証情報はあなたのマシンに留まります。直接到達できない取引所は、代わりに薄いプロキシを経由します。アクセス範囲は、実際に接続したサービスに限定されたままです。

カタログのどのコネクターも**すべてのプラン**で使えます。無料プランも同じです。クォータが効くのはボットとエージェントであって、何に挿してよいかではありません。

## これから来るもの

*近日*と付いた66のコネクターは、行き先をよく物語っています。**29の通信社** — ロイター、AP、AFP、ブルームバーグ、フィナンシャル・タイムズ、ニューヨーク・タイムズ、BBC、ドイチェ・ヴェレ、アルジャジーラ、ル・モンド、エル・パイス、フォーリャ・デ・サンパウロ、NHK World、サウスチャイナ・モーニング・ポストなど、あえて一極集中させず地域に散らしています。さらに10個のウォレット（Rainbow、Rabby、Safe、Solflare、Keplr、Trezorなど）。決済（Stripe、Adyen、PayPal、Plaid、Wise、Revolut）、オブザーバビリティ（Datadog、Grafana、Prometheus、Sentry、PagerDuty）、アナリティクス（PostHog、Amplitude、Metabase、Looker）も控えています。

近日公開の項目は隠さずに並べ、ほのめかさずに印を付けています。おかげで「これ、Nexowで作れる？」という問いに、今日「たぶん」ではなく正直な答えが返せます。

[カタログを見る](https://nexow.ai/connectors)、または
[Nexowを開いて](https://x.nexow.ai)最初の取引所を接続してください。
