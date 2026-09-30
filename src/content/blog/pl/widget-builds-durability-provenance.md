---
title: 'Budowanie widżetów, któremu możesz zaufać: trwałe buildy, uczciwe wersje, lint w czacie'
description: 'Edytor zyskał pamięć i sumienie — buildy przetrwają rozłączenia i czysto się ponawiają, każda wersja zapisuje, skąd pochodzi, a problemy z lintem i czasem działania trafiają do czatu, a nie do konsoli.'
pubDate: 2026-07-21
heroImage: ../../../assets/blog/builds.svg
tags: ['produkt', 'widżety', 'ai']
---

Prompt-do-widżetu zawsze był efektowną częścią. To wydanie dotyczy mniej
błyskotliwej połowy tej obietnicy: co się dzieje, gdy sieć pada w połowie
builda, gdy generowanie się nie powiedzie, gdy chcesz wiedzieć, na którą wersję
widżetu faktycznie patrzysz. Odpowiedź brzmi teraz: nic nie ginie i nic nie
jest przepisywane za twoimi plecami.

## Buildy, które cię przetrwają

Buildy widżetów to teraz **trwałe zadania**. Zamknij laptopa w trakcie
generowania, strać Wi-Fi, odśwież w najgorszym możliwym momencie — build
zachowuje swoją dzierżawę na serwerze i kończy się bez ciebie. Jeśli tura
jednak się nie powiedzie, przycisk **Ponów** jest tuż przy niej i działa nawet
wtedy, gdy rozłączenie zostawiło wszystko w dziwnym stanie. Nieaktualne buildy
nie mogą już zablokować edytora.

Twoje słowa są równie trwałe: niewysłany prompt w edytorze zostaje zapisany
razem z widżetem, więc źle wymierzone odświeżenie nie zje akapitu, który
właśnie miałeś wysłać.

## Wersje z pochodzeniem

Każda wersja widżetu zapisuje teraz, **skąd pochodzi** — z promptu, poprawki
czy ręcznego zapisu — a edycje tworzą nowe wersje, zamiast przepisywać stare w
miejscu. Pierwsza wersja każdego widżetu, jego **geneza**, nigdy nie jest
usuwana: zawsze możesz przewinąć do tego, co wyprodukował pierwszy prompt. A
gdy znacznik wersji w czacie wskazuje historię, która została przycięta, czat
mówi o tym wprost, zamiast udawać.

## Build mówi ci, co jest z nim nie tak

Wygenerowany kod jest sprawdzany, a wyniki trafiają tam, gdzie już patrzysz:
**problemy z lintem i czasem działania pojawiają się w dymku czatu builda**,
jako część rozmowy. Napraw je, odpowiadając — te problemy to kontekst, o którym
następna tura już wie.

Sandbox pozostał rygorystyczny, a nawet stał się bardziej: widżety nie mogą
wykonywać bezpośrednich wywołań sieciowych — dane przychodzą przez konektory —
a zasoby, które mogą ładować, są przypięte do znanych źródeł.

## Bogatsze rozmowy

Edytor zyskał **załączniki** — upuść obraz do czatu, żeby pokazać AI, o co ci
chodzi — oraz **przypięte połączenia**, dzięki czemu rozmowa widżetu zawsze
wie, na jakich źródłach danych buduje. Jeśli budujesz z własnym kluczem API,
inne urządzenia na twoim koncie widzą trwający build, a nie tajemniczy stan
zajętości.

Nic z tego nie zmienia tego, jak się buduje: opisz, obserwuj, dopracuj.
Zmienia to, na ile możesz ufać temu, co z tego wychodzi.

[Uruchom Nexow](https://x.nexow.ai) i przerwij połączenie w trakcie builda —
skończymy bez ciebie.
