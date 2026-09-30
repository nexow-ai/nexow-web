---
title: 'Dziesięć przykładowych widżetów w Nexow — razem z rozmową'
description: 'Nowe konto nie otwiera się już na pustym canvasie. Dziesięć gotowych widżetów trafia do workspace’u Przykłady, każdy z prawdziwym czatem, który go zbudował, i prawdziwą historią wersji — zbudowane tą samą pętlą codegen, której używasz, bez żadnych połączeń.'
pubDate: 2026-08-09
heroImage: ../../../assets/blog/starters.svg
tags: ['produkt', 'onboarding', 'widżety']
---

Najtrudniejszym ekranem w Nexow zawsze był pierwszy: pusty canvas, pole na
prompt i żadnego dowodu, że cokolwiek z tego działa. Można było czytać
dokumentację albo coś wpisać i liczyć na szczęście.

Od następnego wydania nowe konto startuje w **workspace’ie Przykłady** — dziesięć
gotowych widżetów na trzech ekranach, wszystkie działające od pierwszego
załadowania, **bez żadnych połączeń**. Nie zrzuty ekranu, nie wycieczka z
przewodnikiem. Działające widżety, które możesz otworzyć, edytować, rozebrać na
części i opublikować na nowo.

## Co jest w pakiecie

**Świat na żywo** — zegar światowy z pierścieniem dnia i nocy oraz paskiem
nakładania się godzin pracy; siedmiodniowa prognoza pogody z krzywą godzinową;
każde trzęsienie ziemi z ostatniej godziny, dnia lub tygodnia na mapie na żywo,
skalowane według magnitudy; oraz jakość powietrza na żywo z zanieczyszczeniem,
które aktualnie napędza indeks.

**Rynki** — świece Binance z żywą ostatnią świecą i plakietką zmiany 24h;
przelicznik walut na kursach referencyjnych EBC z historią 90 dni; najbardziej
aktywne pytania Polymarket i to, w co wierzy tłum; oraz dowolny wskaźnik Banku
Światowego, dla dwóch krajów naraz, jako wykres długoterminowy.

**Twórz i baw się** — tablica karteczek samoprzylepnych, która przetrwa
przeładowanie dzięki trwałemu magazynowi dla każdego elementu, oraz kanał „tego
dnia” z Wikipedii z miniaturami i wyborem daty.

Każde źródło działa bez klucza: Open-Meteo, USGS, publiczne dane Binance,
Frankfurter, Polymarket, Bank Światowy, Wikipedia. To zasada, nie przypadek —
przykład, który otwiera się komunikatem „Połącz OANDA”, jest gorszy niż pusty
canvas.

## Zostały naprawdę zbudowane, a nie napisane

Każdy przykład zaczął się od briefu napisanego tak, jak pisze człowiek — czego
chce i dlaczego, a nie specyfikacji. `starter:build` przepuszcza te briefy
przez **`runWidgetToolLoop`**: ten sam moduł, który napędza zarówno ścieżka
codegen platformy, jak i przeglądarkowa ścieżka z własnym kluczem, z tym samym
kontraktem, tymi samymi narzędziami i tym samym weryfikatorem w trakcie tury.
Bez strumienia HTTP, bez księgi kredytów, bez przeglądarki — ale ta sama pętla.

Transkrypt, który znajdziesz w zakładce czatu widżetu, jest więc prawdziwą
rozmową, a każda tura, która wygenerowała kod, to prawdziwa wersja na osi
wersji. Większość przykładów ma ich trzy. **Jakość powietrza ma pięć**, bo
pierwsze trzy zostawiały widżet otwierający się na pustym polu „wpisz miasto”,
a piąta tura to zgłoszenie błędu: sześć kafelków zanieczyszczeń pokazujących
kreskę i znacznik czasu *„-6375 min ago”*. Ten build jest w pakiecie dokładnie
taki, jaki powstał.

Co kluczowe, briefy uruchamiane są **bez podłączonych dostawców** — dokładnie
tak, jak wygląda nowe konto. Cokolwiek wyjdzie z tej pętli, działa w pierwszym
dniu użytkownika.

## To nie drugi katalog

Każdy przykład to zwykły zasób marketplace, opublikowany przez oficjalne konto
przez to samo RPC, przez które przechodzi praca wszystkich innych: te same
sanitizery, ten sam graf pochodzenia, ta sama ścieżka instalacji, ten sam
łańcuch tantiem. Nic w widżecie startowym nie jest traktowane na serwerze
wyjątkowo, celowo — zrób fork i kontynuujesz prawdziwą linię pochodzenia,
zamiast odkryć, że własne przykłady aplikacji żyją w prywatnym dialekcie.

Nad tym znajduje się rejestr kuratorski, który przechowuje tylko kurację: które
opublikowane zasoby tworzą pakiet, w jakiej kolejności i na którym ekranie.
Zapisy do niego mają wyłącznie rolę serwisową; odczyty są publiczne, bo
niezalogowany gość może oglądać stronę oferty jednego z nich.

## Gdzie trafia pakiet i czego nie zrobi

Zasiewanie ma trzy blokady. Działa **raz na konto, nie raz na urządzenie** —
flaga jest replikowanym ustawieniem, odczytywanym ponownie przy zmianie konta.
Nigdy nie zasiewa canvasu, którego ktoś już używał. I można je wymusić w
**Ustawienia → Ogólne → Dodaj przykładowe widżety**, dla kont starszych niż
pakiet albo dla każdego, kto usunął workspace i chce go z powrotem.

Przykłady lądują *obok* twojego własnego pustego workspace’u, zamiast go
zastępować, więc onboarding nadal daje ci czysty ekran do pisania. Cały pakiet
to jeden krok cofania.

Każdy zasiany widżet jest oznaczony jako instalacja z marketplace, którą
faktycznie jest, więc ulepszenie go i opublikowanie kontynuuje oficjalną linię
pochodzenia, zamiast zakładać konkurencyjną kopię. A gdy wydamy lepszą wersję
przykładu, **użytkownicy, którzy już go mają, zachowują swoją** — to teraz ich
widżet, być może zmieniony. Nie ma ścieżki wypychania aktualizacji i nie
powinno jej być.

## Weryfikowane jako pakiet, nie na oko

Zanim którykolwiek z nich trafi na konto, cały pakiet uruchamiany jest w
prawdziwym Chrome i oceniany widżet po widżecie: błędy startu, niekontrolowane
pętle animacji, wolne klatki, puste rendery — plus zrzut ekranu każdego. Osobny
test na żywo wyprowadza każdy publiczny endpoint z zatwierdzonego kodu i
potwierdza, że nadal odpowiada, więc test nie może się zestarzeć, podczas gdy
widżety działają dalej.

Poprzeczka dla jedenastego jest taka sama jak dla tych dziesięciu: zero
połączeń, czysty wynik smoke testu, prawdziwy komunikat zamiast pustego
kafelka, gdy źródło danych ma zły dzień, i nic osobistego nigdzie w rozmowie —
bo rozmowa też jest dostarczana.

Pakiet trafi do następnego wydania, a istniejące konta mogą go pobrać z
**Ustawienia → Ogólne**, kiedy tylko zechcą. Otwórz jeden, przeczytaj czat,
który go zbudował, a potem coś zmień — to wciąż najszybszy sposób, żeby
nauczyć się, co potrafi canvas.

[Uruchom Nexow](https://x.nexow.ai) i zacznij budować już teraz.
