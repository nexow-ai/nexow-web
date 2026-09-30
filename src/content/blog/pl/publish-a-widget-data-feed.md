---
title: 'Opublikuj feed danych: pozwól innym uruchomić Twój widżet bez Twojego klucza'
description: 'Widżet zbudowany na Twoim połączeniu z Binance lub OANDA był dotąd bezużyteczny dla kogokolwiek innego. Teraz możesz opublikować dokładnie te odczyty, które wykonuje, jako buforowany endpoint tylko do odczytu pod własnym profilem — bez udostępniania klucza, bez otwartego proxy.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/datafeeds.svg
tags: ['produkt', 'widżety', 'dane']
---

W udostępnianiu była niezręczna luka. Budujesz piękny wykres FX na swoim
połączeniu z OANDA, publikujesz go, a pierwsza osoba, która go zainstaluje,
widzi *Połącz OANDA, aby korzystać z tych danych* — co jest uprzejmym sposobem na
poproszenie nieznajomego o otwarcie rachunku maklerskiego tylko po to, by
obejrzał wykres. Na ekranie na żywo było jeszcze gorzej: widżet zamarzał w
miniaturę.

Rozwiązaniem nie jest pożyczanie ludziom swojego klucza. Jest nim publikowanie
**odczytów, które Twój widżet faktycznie wykonuje**, jako osobnych endpointów,
pod Twoim własnym profilem:

```
GET /<username>/api/w/<widget>/<endpoint>?symbol=EUR_USD&interval=H1
```

Włącz to w oknie publikacji — *Opublikuj feed danych tylko do odczytu* — a
oglądający bez własnego połączenia będą czytać Twój feed, zamiast być proszeni o
podłączenie się.

## Trzy zasady, a każda z nich to odmowa

**Tylko odczyty, które można bezpiecznie udostępnić.** Opublikować można
trzynaście metod danych. Pozostałe są zablokowane, każda z własnego powodu:
`account` i `positions` to też odczyty, ale zwracają Twoje saldo, NAV, P&L i
otwarte pozycje. `order` i `closePosition` przesuwają pieniądze. `upsert` i
`delete` niszczą dane. `scrape` obciąża zewnętrzny serwis za każde wywołanie.
Zwykłe `http` i tak nie wymaga danych uwierzytelniających, więc jego publikacja
zbudowałaby jedynie otwarte proxy podpisane Twoim nazwiskiem.

**Tylko wywołania, które widżet faktycznie wykonał.** Udane odczyty Twojego
widżetu są rejestrowane podczas jego działania, a okno publikacji pokazuje Ci ich
listę — *świece z Binance — BTCUSDT, 1h* — jako konkretną rzecz, na którą się
zgadzasz. Żądanie z parametrem, którego nigdy nie opublikowałeś, lub z wartością
spoza zbioru, do którego go rozszerzyłeś, zostaje odrzucone, zanim cokolwiek
zostanie odszyfrowane. Parametry, które w ogóle nie powinny trafiać do URL-a —
zapytanie SQL, wektor zapytania — nigdy się w nim nie pojawiają; są odtwarzane
dosłownie z pamięci.

**Odmowy są nie do odróżnienia.** Endpoint, który nie istnieje, parametr spoza
swojego enuma i publiczność, do której nie należysz — wszystkie zwracają ten sam
404. Samo istnienie feedu tylko dla znajomych mówi coś o autorze, więc odpowiedź
nigdy tego nie zdradza.

## Kto może go czytać i ile Cię to kosztuje

Publiczność to nie czwarty przełącznik, o którym łatwo zapomnieć — **podąża za
postem z ogłoszeniem**: wszyscy, Twoi obserwujący lub Twoi znajomi. Prywatne
ogłoszenie całkowicie wyłącza feed, bo ogłoszenie widoczne tylko dla Ciebie,
stojące za endpointem wywoływanym przez innych, nie miałoby sensu.

Koszt to część, którą warto zrozumieć, bo to jej ludzie się boją. Wybierasz
interwał odświeżania — co 30 sekund, co 5 minut, co godzinę lub codziennie — i to
jest **maksimum**, w jakim Twoje połączenie może zostać użyte, niezależnie od
tego, ile osób otworzy widżet. Czytelnicy dzielą jedną buforowaną kopię. Dziesięciu
oglądających i dziesięć tysięcy oglądających generuje tę samą liczbę wywołań do
źródła, a w każdym oknie może się wykonać dokładnie jedno odświeżenie, nawet gdy
kilku czytelników w tej samej chwili nie trafi w cache.

Twój klucz nigdy nie opuszcza serwera. Twoje saldo, pozycje i zlecenia nigdy nie
są publikowane. A feed jest powiązany z wpisem: wycofaj widżet z listy, a
endpointy przestaną odpowiadać.

## Własne połączenie oglądającego zawsze wygrywa

Opublikowany feed to rozwiązanie awaryjne, nigdy zamiennik. Jeśli ktoś
otwierający Twój widżet ma własne połączenie z OANDA, widżet używa **jego**
połączenia — jego konta, jego danych, jego limitów zapytań. Po feed sięga się
dopiero wtedy, gdy widżet nie znajdzie własnego połączenia, a chybienie jest
ciche: użytkownik widzi zwykły komunikat *podłącz tę giełdę*, a nie nowy błąd,
którego musiałby się nauczyć.

Te same endpointy działają przez prawdziwe adaptery giełd, które aplikacja już
zawiera, więc opublikowany feed zwraca kształty identyczne co do bajtu z tymi,
które widziałeś podczas budowania widżetu — dla każdej działającej giełdy w
katalogu, bez specjalnych przypadków dla poszczególnych giełd.

## Czego celowo nie robi

- **Udostępniony dashboard tradingowy renderuje wykres, a nie panel konta.** To
  lista zablokowanych metod robi swoje, a nie błąd.
- **Selektor symboli oferuje tylko symbole, które wyliczyłeś.** Widżet z polem
  tekstowym degraduje się do stałego zestawu. To cena za niebudowanie otwartego
  proxy do Twojego brokera.
- **Autorzy w trybie prywatności nie mogą publikować feedu.** W trybie
  prywatności Twoje dane uwierzytelniające żyją wyłącznie w zabezpieczonym
  magazynie tego urządzenia — żaden serwer ich nie przechowuje, więc żaden serwer
  nie może niczego odświeżać w Twoim imieniu.
- **Fork nie dziedziczy feedu.** Feedy są powiązane z rodowodem widżetu, więc
  każda zainstalowana kopia rozwiązuje te same endpointy, a fork nie rozwiązuje
  żadnego.

To drobiazg do włączenia, a zmienia znaczenie publikowania: widżet, który
udostępniasz, to teraz widżet, który ludzie mogą naprawdę uruchomić.

[Uruchom Nexow](https://x.nexow.ai), otwórz widżet zbudowany na połączeniu z
kluczem i opublikuj go z włączonym feedem.
