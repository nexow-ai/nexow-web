---
title: '커넥터 156개, 그중 90개 가동: 위젯을 꽂을 수 있는 연결 카탈로그'
description: '실제 주문을 내는 브로커와 거래소, 시장 데이터와 데이터베이스, 지갑, 브라우저 자동화, 공공 데이터와 소셜 — 자산군과 공급자 유형으로 걸러 볼 수 있는 다섯 가지 연결 카테고리.'
pubDate: 2026-07-30
heroImage: ../../../assets/blog/catalog.svg
tags: ['제품', '커넥터', '데이터']
---

위젯은 그 뒤에 무엇이 있느냐만큼만 좋습니다. 3주 전 카탈로그에는 가동 중인
커넥터가 28개였습니다. 오늘 연결 패널은 **커넥터 156개, 그중 90개 가동 중**을
나열합니다. 그리고 규모만큼이나 카탈로그의 형태도 달라졌습니다. 이제 시장
거래소만 있는 게 아닙니다.

## 다섯 카테고리, 하나의 캔버스

- **금융** — 42개 중 30개 가동. 브로커와 거래소: Interactive Brokers, Alpaca,
  Charles Schwab, Robinhood, Saxo Bank, tastytrade, TradeStation, Tradovate,
  Rithmic, OANDA, FXCM, LMAX. 크립토 거래소: Binance, Coinbase, Kraken, OKX,
  Bybit, KuCoin, Deribit, BitMEX, 여기에 애그리게이터 CCXT까지. DEX로는
  Hyperliquid, Jupiter, Curve, PancakeSwap. 예측 시장: Kalshi, Polymarket,
  PredictIt.
- **데이터** — 28개 중 20개 가동. Databento, Polygon.io, Finnhub, Alpha
  Vantage, Twelve Data, EODHD, Intrinio, IQFeed, Trading Economics의 시장
  데이터 — 그리고 당신의 저장소: PostgreSQL, MySQL, MongoDB, ClickHouse,
  Snowflake, BigQuery, 벡터 스토어 Qdrant, Pinecone, Weaviate, Milvus.
- **서비스** — 58개 중 23개 가동. 브라우저 자동화(Browserbase, Browser Use,
  Steel, Browserless, Anchor Browser), 스크래핑과 검색(Firecrawl, Apify,
  Bright Data, Tavily), 그리고 키조차 필요 없는 공공 데이터: FRED, 세계은행
  지표, NASA, USGS 지진, Open-Meteo, OpenAQ, OpenSky, Data.gov, Wikipedia.
- **소셜** — 13개 중 12개 가동. X, YouTube, Discord, Telegram, Reddit,
  Bluesky, Mastodon, Lemmy, Hacker News, DEV Community, Spotify, Strava.
- **지갑** — 15개 중 5개 가동. 현재는 MetaMask, Phantom, Ledger, Coinbase
  Wallet, Trust Wallet.

모두가 같은 캔버스로 흘러들기 때문에, 하나의 워크스페이스가 통화쌍과 무기한
선물, 주식, 연준 인하 확률, Postgres 쿼리, 서브레딧을 나란히 올려 두고 — 그
위에서 위젯이 계산하도록 둘 수 있습니다.

## 시장을 읽거나, 시장에서 거래하거나

카탈로그는 피드와, 직접 움직일 수 있는 거래소를 구분합니다. **가동 중인 커넥터
22개는 주문을 낼 수 있고**(위의 브로커와 거래소들), 패널에서 *Trading* 배지를
답니다. 나머지는 구조상 읽기 전용입니다. 데이터 공급자가 당신의 돈을 움직일 수
없는 건, 그 연동에 주문을 보낼 곳 자체가 없기 때문입니다.

필요할 때는 기능으로 거르세요. "주식을 거래할 수 있는 걸 전부 보여 줘"와 "주식을
호가할 수 있는 걸 전부 보여 줘"는 다른 질문이고, 패널은 둘 다에 답합니다.

## 사고방식에 맞춘 필터

카테고리마다 고유한 패싯이 있습니다. **금융**은 자산군으로 거릅니다. 주식, 지수,
채권, 외환, 원자재, 크립토, 변동성, 예측 시장. 나머지는 모두 공급자 유형으로
거릅니다. 브로커, 거래소, DEX, 애그리게이터, 시장 데이터, SQL, NoSQL, 데이터
웨어하우스, 벡터 DB, 지갑, 브라우저 자동화, 웹 스크래핑, 웹 검색, 날씨와 대기,
공공 데이터, 지식, 뉴스, 지리와 교통, 메시징, 소셜 네트워크, 커뮤니티, 비디오,
음악, 피트니스.

이름으로 검색하고, 상태로 좁히고, 거래소를 열어 세부 정보를 보고, 거기서
연결하세요.

## 거래소가 허용하면 브라우저에서 직접

커넥터는 데이터가 어디서 오는지뿐 아니라 *어떻게 흐르는지*도 바꿉니다. 거래소의
CORS 정책이 허용하면 Nexow는 **당신의 브라우저에서 곧바로** 그쪽에 말을 겁니다.
인증된 호출이 우리 서버를 전혀 거치지 않으므로 지연이 줄고, 자격 증명은 당신의
기기에 남습니다. 직접 닿을 수 없는 거래소는 대신 얇은 프록시를 지납니다. 접근
범위는 실제로 연결한 서비스로 계속 한정됩니다.

카탈로그의 모든 커넥터는 **모든 플랜**에서 쓸 수 있고, 무료 플랜도 마찬가지
입니다. 할당량이 걸리는 건 봇과 에이전트이지, 무엇에 꽂을 수 있느냐가
아닙니다.

## 앞으로 올 것들

*곧*으로 표시된 커넥터 66개는 방향을 잘 보여 줍니다. **통신사 29곳** — 로이터,
AP, AFP, 블룸버그, 파이낸셜 타임스, 뉴욕 타임스, BBC, 도이체 벨레, 알자지라,
르몽드, 엘 파이스, 폴랴 지 상파울루, NHK World, 사우스차이나 모닝 포스트 등,
한 지역에 몰지 않고 일부러 여러 권역에 흩어 놓았습니다. 지갑 10개가 더
옵니다 — Rainbow, Rabby, Safe, Solflare, Keplr, Trezor 등. 결제(Stripe,
Adyen, PayPal, Plaid, Wise, Revolut), 옵저버빌리티(Datadog, Grafana,
Prometheus, Sentry, PagerDuty), 애널리틱스(PostHog, Amplitude, Metabase,
Looker)도 있습니다.

곧 나올 항목은 숨기지 않고 나열하며, 암시하지 않고 표시합니다. 그래서 "이걸
Nexow에서 만들 수 있나?"라는 질문이 오늘 "아마도"가 아니라 정직한 답을 받습니다.

[카탈로그 둘러보기](https://nexow.ai/connectors) 또는
[Nexow 열고](https://x.nexow.ai) 첫 거래소를 연결하세요.
