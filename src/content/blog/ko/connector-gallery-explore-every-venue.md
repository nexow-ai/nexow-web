---
title: '모든 시장 탐색: 새로운 커넥터 갤러리'
description: 'Nexow가 스트리밍할 수 있는 모든 venue를 탐색하고 검색하세요 — FX, 크립토, 주식, 예측 시장, 데이터베이스, 소셜을 아우르는 28개의 라이브 커넥터와 카탈로그 56개.'
pubDate: 2026-07-08
heroImage: ../../../assets/blog/connectors.svg
tags: ['제품', '커넥터', '데이터']
---

위젯은 뒤에 있는 데이터만큼 좋습니다. 그래서 데이터를 위한 공간을 만들었습니다:
검색 가능한 **connector gallery**에서 Nexow가 연결할 수 있는 모든 venue를
확인하고, 자산 클래스별로 필터링하며, 다음 대시보드에 필요한 정확한 피드를
찾을 수 있습니다.

## 오늘 28개 라이브, 카탈로그 56개

Nexow는 **지금 28개의 커넥터가 라이브**이며, 나머지를 온라인으로 전환하면서
**카탈로그에 56개**를 제공합니다. 각각은 실시간 가격, 오더북, 참조 데이터의
플러그 가능한 소스로, 어떤 위젯이든 구독할 수 있습니다 — API wrangling도,
websocket boilerplate도, payload 정규화도 필요 없습니다.

[connector gallery](https://nexow.ai/connectors)를 열고 이름이나 시장을
입력하면 라이브 여부, 출시 예정, 카테고리를 확인할 수 있습니다.

## 6개 카테고리, 하나의 캔버스

갤러리는 시장을 실제로 생각하는 방식으로 venue를 그룹화합니다:

- **FX** — OANDA, LMAX, FXCM
- **Crypto** — Binance, Coinbase, Kraken, Deribit, BitMEX
- **Equities & futures** — Interactive Brokers, Alpaca, TradeStation, Polygon,
  Rithmic, IQFeed
- **Prediction markets** — Kalshi, Polymarket
- **Data & databases** — Alpha Vantage, Intrinio, Trading Economics, Postgres,
  ClickHouse, Qdrant
- **Socials** — X, YouTube, Discord, Telegram, Spotify

모두 같은 캔버스에 공급되므로 FX 페어, perp, 주식, Fed 금리 인하 확률, 소셜
피드를 나란히 볼 수 있고 — 위젯이 그들 사이를 계산하게 할 수 있습니다.

## venue가 허용하는 곳에서는 browser-direct

커넥터는 단순한 로고 목록이 아닙니다 — 데이터가 *흐르는 방식*을 바꿉니다.
venue의 CORS policy가 허용하는 곳에서는 Nexow가 **브라우저에서 직접** 통신하므로
인증된 호출이 서버를 거치지 않습니다. 지연 시간을 낮추고 자격 증명을 사용자의
기기에 둡니다. 직접 연결할 수 없는 venue는 대신 얇은 proxy를 통해
라우팅됩니다.

## venue를 찾고, 그다음 빌드

갤러리는 "Nexow에서 이걸 만들 수 있나?"에 가장 빠르게 답하는 방법입니다.
거래소나 데이터 제공업체를 검색하고, 라이브인지 확인한 뒤 원하는 위젯을
설명하세요:

> OANDA의 EUR-USD 캔들스틱 차트에 EMA 20과 50, 옆에 다음 FOMC에 대한 Kalshi
> 배당률 테이블.

Nexow가 각 위젯을 지정한 커넥터에 연결하고 캔버스로 바로 스트리밍합니다.

[커넥터 갤러리 둘러보기](https://nexow.ai/connectors) 또는
[앱 실행](https://x.nexow.ai)하고 첫 시장에 연결하세요.
