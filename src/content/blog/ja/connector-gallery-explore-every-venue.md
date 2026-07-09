---
title: 'すべての市場を探索：新しいコネクターギャラリー'
description: 'Nexowがストリーミングできるすべてのベニューを閲覧・検索 — 28コネクターが本日ライブ、カタログに56、FX、暗号資産、株式、予測市場、データベース、ソーシャルに対応。'
pubDate: 2026-07-08
heroImage: ../../../assets/blog/connectors.svg
tags: ['プロダクト', 'コネクター', 'データ']
---

ウィジェットは、その背後にあるデータの良し悪しで決まります。そこでデータの居場所を構築しました：検索可能な **connector gallery** で、Nexowが接続できるすべてのベニューを確認し、資産クラスでフィルタし、次のダッシュボードに必要な正確なフィードを見つけられます。

## 本日28ライブ、カタログに56

Nexowは**現在本日28コネクターがライブ**、**カタログに56**、残りは順次オンライン化中です。それぞれがリアルタイム価格、板情報、参照データのプラグ可能なソースで、どのウィジェットも購読可能 — APIの手間も、websocketのボイラープレートも、ペイロードの正規化も不要です。

[connector gallery](https://nexow.ai/connectors)を開き、名前や市場を入力すれば、何がライブで、何が近日公開で、どのカテゴリに属するかがわかります。

## 6カテゴリ、1つのキャンバス

ギャラリーは、市場を実際に考える方法でベニューをグループ化します：

- **FX** — OANDA、LMAX、FXCM
- **Crypto** — Binance、Coinbase、Kraken、Deribit、BitMEX
- **Equities & futures** — Interactive Brokers、Alpaca、TradeStation、Polygon、Rithmic、IQFeed
- **Prediction markets** — Kalshi、Polymarket
- **Data & databases** — Alpha Vantage、Intrinio、Trading Economics、Postgres、ClickHouse、Qdrant
- **Socials** — X、YouTube、Discord、Telegram、Spotify

すべてが同じキャンバスに供給されるため、FXペア、パーペチュアル、株式、Fed利下げ確率、ソーシャルフィードを並べて監視し、ウィジェットで横断計算できます。

## ベニューが許す場合はブラウザ直接接続

コネクターはロゴのリストではありません — データの*流れ方*を変えます。ベニューのCORSポリシーが許す場合、Nexowは**ブラウザから直接**通信するため、認証済み呼び出しはサーバーを通過しません。レイテンシが低く、認証情報はお使いのマシンに留まります。直接到達できないベニューは薄いプロキシ経由です。

## ベニューを見つけて、構築を始める

ギャラリーは「これをNexowで構築できる？」への最速の答えです。取引所やデータプロバイダーを検索し、ライブを確認してから、欲しいウィジェットを説明します：

> OANDAのEUR-USDのローソク足チャート、20と50のEMA、隣に次回FOMCのKalshiオッズテーブル。

Nexowは各ウィジェットを指定したコネクターに接続し、キャンバスへ直接ストリーミングします。

[connector galleryを閲覧](https://nexow.ai/connectors)するか、[アプリを起動](https://x.nexow.ai)して最初の市場に接続しましょう。
