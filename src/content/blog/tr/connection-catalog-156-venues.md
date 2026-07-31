---
title: '156 bağlayıcı, 90 aktif: widget''larını takabileceğin bağlantı kataloğu'
description: 'Gerçek emir geçen aracı kurumlar ve borsalar, piyasa verisi ve veritabanları, cüzdanlar, tarayıcı otomasyonu, açık veri ve sosyal ağlar — varlık sınıfına ve sağlayıcı türüne göre filtrelenebilen beş bağlantı kategorisi.'
pubDate: 2026-07-30
heroImage: ../../../assets/blog/catalog.svg
tags: ['ürün', 'bağlayıcılar', 'veri']
---

Bir widget ancak arkasındaki kadar iyidir. Üç hafta önce katalogda 28 bağlayıcı
aktifti. Bugün bağlantılar paneli **156 bağlayıcı listeliyor, bunların 90'ı
aktif** — ve kataloğun biçimi boyutu kadar değişti: artık sadece piyasa mekânları
değil.

## Beş kategori, tek tuval

- **Finans** — 42'nin 30'u aktif. Aracı kurumlar ve borsalar: Interactive
  Brokers, Alpaca, Charles Schwab, Robinhood, Saxo Bank, tastytrade,
  TradeStation, Tradovate, Rithmic, OANDA, FXCM, LMAX. Kripto mekânları:
  Binance, Coinbase, Kraken, OKX, Bybit, KuCoin, Deribit, BitMEX, ayrıca
  toplayıcı olarak CCXT. Hyperliquid, Jupiter, Curve ve PancakeSwap gibi DEX'ler.
  Tahmin piyasaları: Kalshi, Polymarket, PredictIt.
- **Veri** — 28'in 20'si aktif. Databento, Polygon.io, Finnhub, Alpha Vantage,
  Twelve Data, EODHD, Intrinio, IQFeed ve Trading Economics'ten piyasa verisi —
  ve kendi deponuz: PostgreSQL, MySQL, MongoDB, ClickHouse, Snowflake, BigQuery
  ile vektör depoları Qdrant, Pinecone, Weaviate ve Milvus.
- **Servisler** — 58'in 23'ü aktif. Tarayıcı otomasyonu (Browserbase, Browser
  Use, Steel, Browserless, Anchor Browser), kazıma ve arama (Firecrawl, Apify,
  Bright Data, Tavily) ve hiç anahtar istemeyen açık veri: FRED, Dünya Bankası
  göstergeleri, NASA, USGS depremleri, Open-Meteo, OpenAQ, OpenSky, Data.gov,
  Wikipedia.
- **Sosyal** — 13'ün 12'si aktif. X, YouTube, Discord, Telegram, Reddit,
  Bluesky, Mastodon, Lemmy, Hacker News, DEV Community, Spotify, Strava.
- **Cüzdanlar** — 15'in 5'i aktif. Bugün: MetaMask, Phantom, Ledger, Coinbase
  Wallet ve Trust Wallet.

Hepsi aynı tuvali beslediği için tek bir çalışma alanı bir döviz paritesini, bir
perp'i, bir hisseyi, bir Fed indirimi olasılığını, bir Postgres sorgusunu ve bir
subreddit'i yan yana tutabilir — ve bir widget'ın hepsinin üstünde hesap
yapmasına izin verebilir.

## Piyasayı okumak ya da işlem yapmak

Katalog, bir akışla üzerinde işlem yapabileceğin bir mekânı ayırır. **22 aktif
bağlayıcı emir geçebilir** — yukarıdaki aracı kurumlar ve borsalar — ve panelde
*Trading* rozeti taşırlar. Geri kalan her şey yapısı gereği salt okunurdur: bir
veri sağlayıcı paranı oynatamaz, çünkü entegrasyonun emri gönderecek bir yeri
yoktur.

Önem taşıdığında yeteneğe göre filtrele. "Bana hisse işlemi yapabilen her şeyi
göster" ile "bana onları fiyatlayabilen her şeyi göster" farklı sorulardır ve
panel ikisini de yanıtlar.

## Düşünme biçimine uyan filtreler

Her kategorinin kendi cepheleri var. **Finans** varlık sınıfına göre filtreler:
hisseler, endeksler, sabit getirili, döviz, emtia, kripto, oynaklık, tahmin
piyasaları. Diğer her yerde sağlayıcı türüne göre filtrelenir: aracı kurum,
borsa, DEX, toplayıcı, piyasa verisi, SQL, NoSQL, veri ambarı, vektör
veritabanı, cüzdan, tarayıcı otomasyonu, web kazıma, web arama, hava ve hava
kalitesi, açık veri, bilgi, haber, coğrafya ve ulaşım, mesajlaşma, sosyal ağ,
topluluk, video, müzik, fitness.

Ada göre ara, duruma göre daralt, ayrıntıları için bir mekânı aç ve oradan
bağlan.

## Mekân izin verdiğinde doğrudan tarayıcıdan

Bağlayıcılar verinin sadece nereden geldiğini değil, *nasıl* aktığını da
değiştirir. Bir mekânın CORS politikası izin verdiğinde Nexow onunla **doğrudan
tarayıcından** konuşur; böylece kimlik doğrulamalı çağrılar sunucularımıza hiç
uğramaz — düşük gecikme ve makinende kalan kimlik bilgileri. Doğrudan
erişilemeyen mekânlar bunun yerine ince bir vekil üzerinden geçer. Erişim,
gerçekten bağladığın servislerle sınırlı kalır.

Katalogdaki her bağlayıcı **her planda** kullanılabilir, ücretsiz plan dâhil.
Kotalar botlar ve ajanlar için geçerli, neye bağlanabileceğin için değil.

## Sırada ne var

*Yakında* işaretli 66 bağlayıcı gidişat hakkında çok şey söylüyor: **29 haber
ajansı** — Reuters, AP, AFP, Bloomberg, Financial Times, New York Times, BBC,
Deutsche Welle, Al Jazeera, Le Monde, El País, Folha de S.Paulo, NHK World,
South China Morning Post ve dahası; tek bir bölgede yığılmak yerine bilinçli
olarak bölgelere yayılmış. Rainbow, Rabby, Safe, Solflare, Keplr ve Trezor dâhil
on cüzdan daha. Ödemeler (Stripe, Adyen, PayPal, Plaid, Wise, Revolut),
gözlemlenebilirlik (Datadog, Grafana, Prometheus, Sentry, PagerDuty) ve analitik
(PostHog, Amplitude, Metabase, Looker).

Yakında gelen kayıtlar gizlenmek yerine listeleniyor, ima edilmek yerine
işaretleniyor — böylece "bunu Nexow'da kurabilir miyim?" sorusu bugün bir
belkiyle değil, dürüst bir yanıtla karşılanıyor.

[Kataloğa göz at](https://nexow.ai/connectors) ya da
[Nexow'u aç](https://x.nexow.ai) ve ilk mekânını bağla.
