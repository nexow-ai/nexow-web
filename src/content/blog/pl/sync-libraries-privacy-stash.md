---
title: 'Jeden workspace, każde urządzenie: głębsza synchronizacja, nowe biblioteki, sprytniejszy tryb prywatności'
description: 'Czaty widżetów podążają teraz za tobą między urządzeniami na żywo, ekrany i workspace’y mają własne biblioteki, zarchiwizowane szkice zachowują rozmowy, a tryb prywatności odkłada twój stan w chmurze na bok, zamiast go tracić.'
pubDate: 2026-07-20
heroImage: ../../../assets/blog/sync-library.svg
tags: ['produkt', 'synchronizacja', 'przestrzeń-robocza']
---

Synchronizacja w chmurze oznaczała dotąd, że za tobą podążają widżety i
układy. To wydanie sprawia, że podąża też *cała reszta* — rozmowy, biblioteki,
a nawet stan twoich automatyzacji, gdy wchodzisz w tryb prywatności i z niego
wychodzisz.

## Rozmowy synchronizują się na żywo

Czat widżetu to połowa jego wartości: prompty, poprawki, rozumowanie. Wątki
widżetów **stosują się teraz na żywo na wszystkich urządzeniach** — zostaw
rozmowę na komputerze stacjonarnym, otwórz laptopa, a wątek już tam jest,
aktualny, bez odświeżania.

Pod maską rekordy widżetów zostały rozdzielone na dokumenty nagłówka, wersji i
czatu, więc szybko tocząca się rozmowa nie ciągnie już za sobą całych danych
widżetu. Zauważysz to jako synchronizację, która nadąża.

## Biblioteki dla ekranów i workspace’ów

Biblioteka przechowywała dotąd widżety. Teraz ma też zakładki dla **ekranów**
i **workspace’ów** — zapisz cały układ raz, używaj go wszędzie, a synchronizuje
się jak wszystko inne. W połączeniu z marketplace droga od „mojego ulubionego
ekranu” do „opublikowanego zasobu” to dwa kliknięcia.

Archiwizacja też stała się łagodniejsza: zarchiwizowany szkic widżetu
**zachowuje swoją rozmowę**, a gdy do niego wrócisz, czat wznowi się tam, gdzie
skończyłeś — archiwum to teraz półka, nie niszczarka. A jeśli rekord widżetu
kiedyś zostanie osierocony przez przerwaną operację, biblioteka go znajdzie i
odzyska, zamiast pozwolić mu przepaść.

## Tryb prywatności: odłóż, nie niszcz

Zasada Nexow brzmi: chmura jest opcjonalna — i możesz z niej ponownie
zrezygnować. Wejście w **tryb prywatności** teraz *odkłada na bok* twój stan
po stronie chmury: wdrożone agenty i chmurowe ujścia botów są zaparkowane, nie
usunięte. Wyjdź z trybu prywatności, a zostaną przywrócone dokładnie w takim
stanie, w jakim były, łącznie z ujściami do baz danych. Przejście w tryb
prywatny nie jest już decyzją, za którą płacisz, gdy wracasz.

Sama synchronizacja w czasie rzeczywistym jest teraz także zapamiętywaną
preferencją — wyłącz ją raz, a pozostanie wyłączona między sesjami, dopóki nie
zdecydujesz inaczej.

## Nudne z założenia

Resztę pracy, miejmy nadzieję, nigdy nie zauważysz: zapisy układu działają na
zasadzie compare-and-set, więc dwa urządzenia nie mogą po cichu nadpisać się
nawzajem, urządzenie ignoruje echo własnych zapisów, a zmiany offline trafiają
do dziennika w skrzynce nadawczej, który odtwarza się po powrocie online.
Synchronizacja, o której nie myślisz, to właśnie ta funkcja.

[Uruchom Nexow](https://x.nexow.ai) na dwóch ekranach i zobacz, jak jeden
workspace zachowuje się jak jeden.
