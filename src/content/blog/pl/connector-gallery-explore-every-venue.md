---
title: 'Odkryj każdy rynek: nowa galeria konektorów'
description: 'Przeglądaj i przeszukuj wszystkie źródła, które Nexow potrafi strumieniować — 28 konektorów aktywnych już dziś i 56 w katalogu, obejmujących FX, kryptowaluty, akcje, rynki predykcyjne, bazy danych i media społecznościowe.'
pubDate: 2026-07-08
heroImage: ../../../assets/blog/connectors.svg
tags: ['produkt', 'konektory', 'dane']
---

Widget jest tak dobry, jak dane, które za nim stoją. Dlatego zbudowaliśmy dla
danych dom: przeszukiwalną **galerię konektorów**, w której zobaczysz każde
źródło, do którego Nexow może się podłączyć, przefiltrujesz je według klasy
aktywów i znajdziesz dokładnie ten strumień, którego potrzebuje twój następny
dashboard.

## 28 aktywnych dziś, 56 w katalogu

Nexow oferuje **28 konektorów aktywnych już teraz** i **56 w katalogu**, w miarę
jak uruchamiamy kolejne. Każdy z nich to podłączane źródło cen w czasie
rzeczywistym, arkuszy zleceń i danych referencyjnych, które może subskrybować
dowolny widget — bez mocowania się z API, bez szablonowego kodu websocketów, bez
normalizowania payloadów po twojej stronie.

Otwórz [galerię konektorów](https://nexow.ai/connectors), wpisz nazwę lub rynek,
a zobaczysz, co jest aktywne, co nadchodzi i do jakiej kategorii należy.

## Sześć kategorii, jeden canvas

Galeria grupuje wszystkie źródła tak, jak naprawdę myślisz o rynkach:

- **FX** — OANDA, LMAX, FXCM
- **Kryptowaluty** — Binance, Coinbase, Kraken, Deribit, BitMEX
- **Akcje i kontrakty terminowe** — Interactive Brokers, Alpaca, TradeStation,
  Polygon, Rithmic, IQFeed
- **Rynki predykcyjne** — Kalshi, Polymarket
- **Dane i bazy danych** — Alpha Vantage, Intrinio, Trading Economics, Postgres,
  ClickHouse, Qdrant
- **Media społecznościowe** — X, YouTube, Discord, Telegram, Spotify

Ponieważ wszystkie zasilają ten sam canvas, możesz obserwować obok siebie parę
FX, kontrakt perpetual, akcję, prawdopodobieństwo obniżki stóp przez Fed i feed
społecznościowy — i pozwolić widgetowi prowadzić obliczenia na nich wszystkich.

## Bezpośrednio z przeglądarki, gdy pozwala na to dostawca

Konektory to nie tylko lista logotypów — zmieniają *sposób*, w jaki przepływają
twoje dane. Tam, gdzie pozwala na to polityka CORS danego dostawcy, Nexow
komunikuje się z nim **bezpośrednio z twojej przeglądarki**, więc
uwierzytelnione wywołania nigdy nie przechodzą przez nasze serwery. Dzięki temu
opóźnienia są niskie, a twoje poświadczenia zostają na twoim komputerze.
Dostawcy, z którymi nie da się połączyć bezpośrednio, są obsługiwani przez
cienkie proxy.

## Znajdź swoje źródło, a potem buduj

Galeria to najszybszy sposób, by odpowiedzieć na pytanie „czy mogę to zbudować w
Nexow?”. Wyszukaj swoją giełdę lub dostawcę danych, upewnij się, że jest
aktywny, a następnie opisz widget, którego potrzebujesz:

> Wykres świecowy EUR-USD z OANDA z EMA 20 i 50, a obok tabela kursów Kalshi dla
> najbliższego posiedzenia FOMC.

Nexow łączy każdy widget ze wskazanym konektorem i strumieniuje go prosto na
canvas.

[Przeglądaj galerię konektorów](https://nexow.ai/connectors) lub
[uruchom aplikację](https://x.nexow.ai) i podłącz się do swojego pierwszego
rynku.
