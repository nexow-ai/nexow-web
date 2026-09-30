---
title: 'Boty v2: triggery RSI i wolumenu, dostarczanie do webhooków i bazy danych oraz uporządkowany kreator'
description: 'Boty w chmurze nauczyły się nowych sztuczek — warunków RSI i skoków wolumenu, obserwowania transakcji, sygnałów wysyłanych przez POST do twoich webhooków lub dopisywanych do bazy danych, a kreator podzielono na Moje boty i Utwórz.'
pubDate: 2026-07-22
heroImage: ../../../assets/blog/bots-v2.svg
tags: ['produkt', 'automatyzacja', 'boty']
---

Gdy boty debiutowały, potrafiły obserwować progi, zmiany procentowe, przecięcia i
podsumowania oraz wysyłać sygnały na twój canvas. Ten rdzeń się nie zmienił.
Wokół niego niemal wszystko się pogłębiło: więcej warunków do wyzwalania, więcej
miejsc, do których trafiają sygnały, i kreator, który nie wchodzi ci w drogę.

## Nowe warunki wyzwalające

Katalog procesorów się rozrósł. Obok progów, zmiany procentowej i przecięć
średnich kroczących boty oceniają teraz:

- **RSI** — wyzwalanie, gdy momentum wchodzi w strefę wykupienia lub wyprzedania
- **Skoki wolumenu** — wyłapywanie nietypowej aktywności, na którą cena jeszcze
  nie zareagowała
- **Nowe transakcje** — wyzwalanie przy świeżych realizacjach z podłączonego
  rachunku
- **Aktywność i saldo portfela** — obserwowanie adresów on-chain, opisane w
  naszym [wpisie o portfelach](/pl/blog/wallets-on-the-canvas)

Jak zawsze: opisz regułę jednym zdaniem i pozwól AI przygotować szkic bota albo
połącz go wizualnie i samodzielnie dostrój każdy parametr.

## Sygnały trafiają tam, gdzie pracujesz

Sygnał bota trafiał dotąd do twojej skrzynki i widgetów. Dwa nowe miejsca
docelowe zmieniają to, do czego służą boty:

- **Webhooki** — każdy sygnał wysyłany przez POST na wskazany przez ciebie URL.
  To Discord, Slack lub Telegram przez ich adresy webhooków albo twój własny
  serwer. Twój bot staje się producentem, z którego może korzystać dowolny
  system.
- **Twoja baza danych** — każdy sygnał dopisywany jako wiersz do jednej z twoich
  podłączonych baz danych. Zostaw bota działającego na miesiąc, a będziesz mieć
  przeszukiwalny log każdego wyzwolenia, gotowy do wizualizacji w widgecie.

Dostarczanie to zestaw, a nie wybór — jeden bot może powiadomić ciebie,
zaktualizować twoje widgety, wysłać wiadomość na Discord i zapisać wiersz, a
wszystko z tego samego triggera.

## Moje boty i Utwórz, wreszcie osobno

Panel botów oddziela teraz **Moje boty** — twoją działającą flotę ze statusem
widocznym na pierwszy rzut oka — od **Utwórz**, gdzie powstają nowe boty. Sam
formularz stał się lżejszy: opcjonalne sekcje pozostają zwinięte, dopóki ich nie
potrzebujesz, więc prosty alert progowy zajmuje sekundy, a pełne możliwości są na
wyciągnięcie jednego kliknięcia.

## Szkice startują bezpiecznie

Jeden celowy szczegół: gdy AI przygotowuje dla ciebie szkic bota, jego webhook
startuje **pusty**. Wygenerowana automatyzacja nigdy nie trafia do użytku z
miejscem docelowym, którego sam nie wpisałeś — to ty decydujesz, dokąd trafiają
sygnały, wyraźnie i za każdym razem.

[Uruchom Nexow](https://x.nexow.ai), otwórz Boty i daj swojemu następnemu
alertowi lepsze miejsce do lądowania niż skrzynka odbiorcza.
