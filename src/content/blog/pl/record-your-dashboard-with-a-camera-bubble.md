---
title: 'Nagraj swój dashboard — razem z bąblem kamery'
description: 'Nagrywanie ekranu jest wbudowane w pasek narzędzi: do dziesięciu minut Twojego canvasu z obrazem z kamery wkomponowanym jako przeciągany bąbel, pływającym paskiem sterowania i wyborem zapisz-udostępnij-opublikuj po zatrzymaniu.'
pubDate: 2026-08-07
heroImage: ../../../assets/blog/recorder.svg
tags: ['produkt', 'nagrywanie', 'społeczność']
---

Budujesz coś dobrego i chcesz to pokazać — w ruchu, a nie jako zrzut ekranu. Do
tej pory oznaczało to wyjście z aplikacji do osobnego rejestratora, kadrowanie
okna przeglądarki i nadzieję, że wynik da się obejrzeć. Teraz to przycisk na
pasku narzędzi.

**Przechwyć dashboard** oferuje dwie rzeczy: **zrzut ekranu**, który możesz
przyciąć przed zapisaniem, albo **nagranie wideo** — Twój canvas na żywo, dopóki
nie zatrzymasz nagrania lub nie minie dziesięć minut.

## Co trafia do nagrania

Trzy przełączniki, ustawiane przed startem:

- **Bąbel kamery** — obraz z Twojej kamery, wkomponowany w wideo jako zaokrąglone
  kółko
- **Mikrofon** — Twój komentarz
- **Dźwięk karty** — cokolwiek odtwarza sama strona

Bąbel kamery nie jest przyklejony do rogu. **Przeciągnij go gdziekolwiek**, a
przyciągnie się do najbliższego rogu w miejscu, w którym go puścisz, w wybranym
przez Ciebie rozmiarze. Jest częścią wideo, a nie nakładką doklejoną potem, więc
to, co skadrowałeś, jest dokładnie tym, co zawiera plik.

Podczas nagrywania pływający **pasek sterowania** nie wchodzi w drogę i robi
cztery rzeczy, których naprawdę potrzebujesz w trakcie nagrania: pauza i
wznowienie, wyciszenie mikrofonu, wyciszenie dźwięku karty, ukrycie lub
przesunięcie bąbla kamery — oraz zatrzymanie. Przez cały czas działa licznik,
który ostrzega Cię, gdy zbliżasz się do dziesięciominutowego limitu, zamiast
urwać nagranie bez wyjaśnienia.

## Potem decyzja, a nie pobieranie

Zatrzymaj nagranie, a otworzy się ono w nakładce podglądu z wideo i czterema
opcjami: **Zapisz**, **Udostępnij**, **Opublikuj**, **Odrzuć**.

Opublikuj wysyła nagranie do feedu Community i to jedyna opcja z limitem —
dziesięciominutowe nagranie może przekroczyć to, na co pozwalają przesyłane do
feedu pliki. Gdy tak się stanie, Opublikuj jest **wyłączone i wyjaśnia
dlaczego**, podając maksimum, a Zapisz i Udostępnij pozostają dostępne, bo żadna
z nich nie zbliża się do tego limitu. Wyszarzony przycisk, który podaje Ci
liczbę, jest lepszy niż taki, który zawodzi po zapełnieniu się paska przesyłania.

## Mało efektowne elementy, dzięki którym plik jest dobry

Większość pracy w rejestratorze ekranu jest niewidoczna, gdy wszystko działa:

- **Obraz jest zawsze komponowany na canvasie o stałym rozmiarze** — nawet bez
  bąbla kamery. Rozdzielczość przechwytywania karty podąża za oknem, więc jedna
  zmiana rozmiaru w trakcie nagrania wymusiłaby renegocjację ścieżki wideo, a
  pliki zawierające zmianę rozdzielczości są uszkodzone w większości
  odtwarzaczy. Ustalenie rozmiaru raz, na początku, sprawia, że wynik to jedno
  czyste kodowanie: 1080p przy 30 fps, z obniżeniem do 720p, gdy przeglądarka i
  tak przekazuje cały ekran.
- **Kontener jest wybierany w trakcie działania, a nie zakładany z góry.** Firefox
  nagrywa WebM, Safari nagrywa MP4, a Chromium w różnych wersjach obsługiwał oba.
  Rejestrator najpierw próbuje MP4 — to plik, który odtworzy się wszędzie, dokąd
  najprawdopodobniej go zabierzesz — w razie potrzeby schodzi do WebM i nazywa
  plik według tego, czego przeglądarka faktycznie użyła, a nie tego, o co ją
  poproszono.
- **Klatki są taktowane niezależnie od strony.** Karta w tle dławi animacje, ale
  nie dźwięk — i właśnie tak powstaje zamrożony obraz pod trwającym komentarzem.
  Jeśli karta była ukryta podczas nagrania, nakładka podglądu to mówi, zamiast
  pozwolić Ci odkryć to później.
- **Każda ścieżka jest zatrzymywana na każdej ścieżce wyjścia**, łącznie z awarią
  w połowie uruchamiania. Pozostawiona zapalona lampka kamery to aplikacja, która
  wygląda, jakby Cię obserwowała, i nie ma akceptowalnej wersji czegoś takiego.

Błędy są uczciwe w obie strony. Zamknięcie okna wyboru udostępniania w
przeglądarce nie jest błędem i przechodzi bez komentarza — niczego nie
udostępniłeś, a powiadomienie o tym byłoby tylko szumem. Ale źródło, które nie
wysyła żadnego obrazu, dostaje ostrzeżenie, zanim przez pięć minut będziesz
komentować szary prostokąt, a przeglądarka, która w ogóle nie potrafi kodować
wideo, mówi to wprost, zamiast tworzyć pusty plik.

## Już wkrótce: nagrywanie jednego widżetu

Z następną aktualizacją pojawi się mniejsza, bardziej precyzyjna wersja tej
funkcji: **przycisk kamery w nagłówku samego widżetu**, który nagrywa *tylko ten
widżet* — przycięty do jego zawartości, więc nagłówek z przyciskiem i pasek
sterowania pozostają poza kadrem. Wskaźnik nagrywania może być widoczny właśnie
tam podczas nagrywania, nie pojawiając się w wideo.

Funkcja opiera się na Region Capture, które dziś jest dostępne w Chromium na
desktopie, więc przycisk pojawia się tylko tam, gdzie naprawdę może zadziałać,
zamiast oferować coś, za co musiałby przepraszać. Podąża za widżetem, jeśli go
przesuniesz, i czysto się zatrzymuje, gdy widżet zniknie z ekranu.

Dzięki tym dwóm funkcjom „oto, co zbudowałem” przestaje być zrzutem ekranu i
akapitem tekstu.

[Uruchom Nexow](https://x.nexow.ai), znajdź **Przechwyć dashboard** na pasku
narzędzi i nagraj swój canvas.
