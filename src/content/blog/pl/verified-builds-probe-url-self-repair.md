---
title: 'Widżety, które same sprawdzają swoją hydraulikę: probe_url, agent weryfikujący i jedna darmowa naprawa'
description: 'Największym źródłem martwych widżetów był kod pisany pod wyobrażone API. Teraz builder pobiera endpoint w trakcie pisania, weryfikator ponownie sprawdza to, co zostało pominięte, a awaria w ciągu pierwszych 45 sekund daje jedną automatyczną poprawkę.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/verify.svg
tags: ['produkt', 'ai', 'jak-to-działa']
---

Najczęstszym powodem, dla którego wygenerowany widżet nie działał, nie był błąd
w wygenerowanym kodzie. Był nim endpoint, który nigdy nie istniał.

Model sięgał po URL z pamięci — albo z wpisu w katalogu, którego link prowadzi
do *strony dokumentacji*, a nie do endpointu — zgadywał kształt odpowiedzi,
pisał staranny kod parsujący pod to przypuszczenie i wysyłał. Dostawałeś
wieczny spinner albo pusty wykres, bez niczego na ekranie, co wyjaśniałoby
dlaczego.

To wydanie domyka tę pętlę trzykrotnie: gdy model pisze, zaraz po tym, jak
napisze, i jeszcze raz, jeśli rzecz nadal wysypuje się na twoich oczach.

## W trakcie pisania: `probe_url`

Builder ma teraz narzędzie, które **wykonuje GET na publicznym endpoincie bez
klucza od razu**, przez dokładnie ten sam serwerowy proxy, którego
`ctx.data.http()` używa w czasie działania, i zwraca prawdziwy status HTTP oraz
prawdziwe ciało odpowiedzi.

Ta tożsamość to cały sens. Próba, która się udaje, *jest* wywołaniem w czasie
działania, które się udaje. Próba, która zawodzi, to widżet, który trafiłby do
ciebie zepsuty — i zawodzi teraz, gdy wciąż została tura na poprawkę, a nie na
twoim canvasie.

Narzędzie stoi na dole drabiny, po której builder ma przejść, zamiast
rozumować z pamięci: najpierw dokumentacja referencyjna serwisu, potem
**katalog 691 publicznych API bez klucza w 47 kategoriach**, przeszukiwalny
tematycznie po nazwie *i* opisie każdego wpisu — bo prawdziwe prośby („pory
pływów”, „jakość powietrza”) rzadko pasują do kategorii, którą ktokolwiek by
zgadł. Ten katalog jest teraz zawsze dostępny dla buildera, niezależnie od tego,
co jeszcze jest w zakresie, bo to uniwersalne wyjście awaryjne bez klucza. Jego
linki to dokumentacja, więc ostatni krok jest zawsze ten sam: wyprowadź
endpoint, a potem go sprawdź.

„Czy są dane o X?” to pytanie, na które odpowiada się, patrząc, a nie
rozważając, jakie zbiory danych prawdopodobnie istnieją. Dojście do końca
drabiny i powiedzenie *nie* po faktycznym sprawdzeniu to dobry wynik.
Twierdzenie tego z pamięci — nie, i było błędne znacznie częściej, niż się
wydawało.

## Zaraz po napisaniu: weryfikator

Poproszenie modelu o zweryfikowanie własnej pracy to prośba, nie gwarancja.
Dlatego w momencie, gdy kod widżetu jest gotowy, dzieją się dwie rzeczy, które
nie zależą od zgody modelu.

Po pierwsze, wynik narzędzia **wymienia endpointy, których w tej turze nie
sprawdzono**, i każe je sprawdzić, póki zostały rundy.

Po drugie — i to jest część, która nie polega na współpracy — weryfikator
działa **równolegle z pisaniem podsumowania przez model** i sam wykonuje
pracę:

- **Lintuje moduł** pod kątem klas błędów, które z natury są ciche. Brak
  eksportu `render`. Kod, który się nie parsuje. Surowy `fetch` lub
  `WebSocket` do zewnętrznego hosta, który sandbox blokuje — najbardziej
  szkodliwy cichy błąd w wygenerowanych widżetach, bo w konsoli nic się nie
  pojawia. Zewnętrzny URL obrazu lub wideo przypisany wprost do `src`. Zakodowany
  na sztywno URL kafelków przekazany do biblioteki map, która montuje się i
  przesuwa idealnie, podczas gdy każde żądanie kafelka jest po cichu odrzucane.
- **Sprawdza każdy endpoint, który model pominął** (do pięciu na moduł), i
  odczytuje werdykt tak samo, jak zrobiłby to model: nieosiągalny albo 4xx,
  który mówi, że URL lub jego parametry są błędne.

Prawdziwe problemy dają **jedną automatyczną rundę naprawczą w tej samej
turze**, z wynikiem próby dołączonym jako dowód i instrukcją, by naprawić
wyłącznie to, co wskazano. Ta runda odbywa się, gdy pełny kontekst builda jest
wciąż gorący — znacznie taniej niż wysłanie zepsutego widżetu i poświęcenie na
niego później całej nowej tury. Jeśli model przepisze moduł w locie, trwająca
weryfikacja zostaje zastąpiona, a jej werdykt odrzucony. A weryfikator, który
zawiedzie wewnętrznie, zwraca czysty wynik: może opóźnić build, nigdy go nie
zepsuć.

## Jeśli nadal się wysypuje: jedna naprawa, ściśle ograniczona

Kontekst samonaprawy już wcześniej przekazywał błędy czasu działania do
*następnej* tury czatu — ale tylko wtedy, gdy ją wysłałeś. Widżet, który
wysypał się kilka sekund po buildzie, pozostawał zepsuty, dopóki tego nie
zauważyłeś, nie otworzyłeś ponownie edytora i nie wpisałeś „nie działa”.

Teraz host środowiska uruchomieniowego wykorzystuje **jedną automatyczną turę
naprawczą**, gdy świeży build się wysypie. Automatyczna tura to aplikacja
wydająca twoje kredyty albo twój klucz, więc granice są celowo ciasne:

- tylko wersja, którą build AI *właśnie* wyprodukował — awaria w starej
  wersji, którą przywróciłeś, albo w kodzie edytowanym ręcznie nigdy się nie
  kwalifikuje;
- tylko w ciągu **45 sekund** od tego builda, bo awaria godzinę później to dla
  ciebie nowa informacja, a nie oczywista wada builda;
- **raz na wersję**, a wersja wyprodukowana *przez* turę automatycznej naprawy
  sama nie jest uprawniona. Jeden build może wywołać co najwyżej jedną
  automatyczną kontynuację — nigdy łańcuch, w którym model płaci sam sobie za
  dalsze porażki.

Tura naprawcza jest sformułowana jako zgłoszenie defektu przez aplikację i
niesie tę samą instrukcję co wszystko powyżej: jeśli awaria dotyczy endpointu
danych, sprawdź go przed przepisaniem. Napraw, zachowaj to, co działa, nie
poszerzaj zakresu widżetu.

Po stronie serwera uratowany build w tle czeka teraz, gdy inna tura tego
samego widżetu już trwa, zamiast ścigać się z nią i tworzyć zduplikowaną
wersję.

## Ta sama pętla w każdym trybie

Wszystko to żyje w jednym współdzielonym module, więc buildy platformy, buildy
z własnym kluczem w przeglądarce i serwerowy przegląd buildów zachowują się
**identycznie** — te same narzędzia, to samo formatowanie prób, ten sam
weryfikator, ten sam budżet napraw. Tryby nie mogą się rozjechać co do tego,
jakie narzędzia istnieją ani jak rygorystycznie widżet jest sprawdzany, bo
istnieje tylko jedna implementacja odpowiedzi. To także pętla, która
wyprodukowała [dziesięć przykładowych widżetów](/blog/starter-widgets-examples-workspace)
dostarczanych w następnym wydaniu: zbudowała je dokładnie ta pętla, z dokładnie
tymi sprawdzeniami.

Nic z tego nie sprawia, że model ma rację. Sprawia, że pomyłka jest do
przeżycia i zwykle niewidoczna: endpoint zostaje sprawdzony, zanim kod będzie
od niego zależał, sprawdzenie odbywa się niezależnie od tego, czy model miał na
nie ochotę, a pierwsza awaria dostaje jedną uczciwą próbę naprawy, zanim
dotrze do ciebie.

[Uruchom Nexow](https://x.nexow.ai) i poproś o coś niszowego — pory pływów,
jakość powietrza, dni wolne od pracy. Zobacz, jak pasek aktywności sprawdza
endpoint, zanim powstanie choćby linijka kodu parsującego.
