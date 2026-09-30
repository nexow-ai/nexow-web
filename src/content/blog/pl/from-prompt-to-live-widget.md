---
title: 'Od promptu do działającego widżetu: jak Nexow zamienia jedno zdanie w dashboard tradingowy'
description: 'Zajrzyj pod maskę i zobacz, jak Nexow generuje działający, podłączony do danych widżet rynkowy z promptu w języku naturalnym — wyjaśniamy generowanie kodu, sandboxing i konektory na żywo.'
pubDate: 2026-06-24
heroImage: ../../../assets/blog/codegen.svg
tags: ['produkt', 'ai', 'jak-to-działa']
---

Budowanie dashboardu tradingowego zawsze oznaczało tę samą harówkę: znajdź API,
przeczytaj dokumentację, okiełznaj websocket, znormalizuj payload, wybierz
bibliotekę do wykresów, powalcz z layoutem i powtórz to dla każdego instrumentu,
który Cię interesuje. Nexow sprowadza całą tę pętlę do jednego zdania.

Oto, co naprawdę dzieje się między wpisaniem promptu a pojawieniem się
działającego widżetu na Twoim canvasie.

## 1. Opisujesz, co chcesz zobaczyć

Prompt to po prostu język naturalny:

> Pokaż wykres świecowy BTC-USD z Coinbase z EMA 20 i 50 oraz panelem RSI
> poniżej.

Nie ma schematu do nauczenia ani pliku konfiguracyjnego. Opisujesz efekt —
instrument, giełdę, wskaźniki, układ — tak, jak opisałbyś go koledze.

## 2. Nexow generuje kod źródłowy widżetu

Nexow wysyła Twój prompt do modeli Claude firmy Anthropic przez Anthropic SDK,
razem z potrzebnym kontekstem: jakie konektory są dostępne, jaki kształt mają
zwracane przez nie dane i jaki kontrakt runtime musi spełnić widżet. Claude pisze
rzeczywisty kod źródłowy widżetu — logikę pobierania, transformacje i
renderowanie.

Ponieważ model pisze prawdziwy kod, a nie wypełnia stały szablon, zakres tego, co
możesz zbudować, jest otwarty: wykresy głębokości order booka, heatmapy funding
rate, macierze korelacji, własne sygnały, zwykłe tabele. Jeśli potrafisz to
opisać, Nexow zazwyczaj potrafi to zbudować.

## 3. Widżet działa w sandboxie

Generowany kod ma ogromne możliwości, dlatego działa za ścisłą granicą. Każdy
widżet wykonuje się w izolowanym iframe: może renderować swój interfejs i
pobierać potrzebne dane, ale nie może sięgnąć do Twojej przestrzeni roboczej,
czytać innych widżetów ani dotykać niczego, czego nie otrzymał. Moc bez ryzyka.

## 4. Dane na żywo płyną przez konektory

Widżet jest użyteczny tylko z prawdziwymi danymi. Nexow oferuje ponad 20
wymiennych konektorów obejmujących FX, krypto, akcje, kontrakty futures, opcje i
rynki predykcyjne — OANDA, Binance, Coinbase, Kraken, Interactive Brokers,
Polygon, Kalshi, Polymarket i inne. Widżet subskrybuje wskazaną przez Ciebie
giełdę, a ceny, order booki i dane referencyjne napływają bezpośrednio.

Tam, gdzie pozwala na to polityka CORS danej giełdy, te wywołania wykonywane są
**bezpośrednio z Twojej przeglądarki** i nigdy nie przechodzą przez nasze serwery
— co utrzymuje niskie opóźnienia, a Twoje dane uwierzytelniające na Twoim
komputerze.

## 5. Dopracowujesz go w języku naturalnym

Pierwsza generacja rzadko jest ostatnią. Wszystko pozostaje edytowalne przez
rozmowę: *„dodaj EMA 200”*, *„przełącz na skalę logarytmiczną”*, *„pokoloruj
świece według funding rate.”* Nexow przepisuje widżet na miejscu, wersjonuje
zmianę i prowadzi log, który możesz przejrzeć lub cofnąć.

## Dlaczego to ma znaczenie

Tradycyjna droga od pomysłu do wykresu mierzona jest w godzinach. Z Nexow mierzy
się ją w sekundach, a to, co otrzymujesz, to prawdziwy widżet, który możesz
przejrzeć — a nie czarna skrzynka. Dashboard składa się sam, a Ty zachowujesz
kontrolę nad kodem, danymi i kluczami.

Gotowy, by spróbować? [Uruchom aplikację](https://x.nexow.ai) i opisz swój
pierwszy widżet.
