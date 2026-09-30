---
title: 'Połącz swoje widżety: jedna powierzchnia, jedno zdanie i przycisk Przetestuj'
description: 'Wszystko, z czym można połączyć widżet, jest teraz za jednym polem wyszukiwania — inne widżety, połączenia, boty i agenci. Opisz połączenie zwykłym językiem i przepuść przez nie prawdziwe zdarzenie, żeby sprawdzić, który koniec nie działa.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/wires.svg
tags: ['produkt', 'widżety', 'automatyzacja']
---

**Link** przenosi zdarzenia między dwoma widżetami: zmień symbol w jednym, a
drugi zareaguje. Włącz tryb dwukierunkowy, a pozostaną zsynchronizowane w obie
strony. To różnica między ekranem pełnym osobnych kafelków a ekranem, który
zachowuje się jak jeden instrument.

Sam pomysł był dobry. Znalezienie go już nie, podobnie jak ustalenie, czy
działa. W tym wydaniu naprawiamy jedno i drugie.

## Jedna powierzchnia, a „Wszystko” naprawdę znaczy wszystko

Selektor był wcześniej podzielony na dwie podzakładki — *Widżety* i *Źródła* —
co oznaczało, że połowa twoich zasobów zawsze była schowana za przełącznikiem,
o którym trzeba było wiedzieć. Widżet sam na swoim ekranie pokazywał pustą
siatkę, bez żadnej wskazówki, że boty, agenci i połączenia w ogóle istnieją.

Teraz jest jedno pole wyszukiwania i jeden rząd filtrów rodzajów nad
wszystkim: inne widżety na tym ekranie, w tym workspace’ie lub gdzie indziej;
twoje połączenia danych; twoje boty; twoi agenci. **Wszystko** pokazuje to
wszystko.

Zmieniła się też kolejność. **Moje połączenia** znajdują się teraz *nad*
powierzchnią przeglądania. Wcześniej były pod siatką selektora, która potrafi
liczyć dziesiątki kafelków, więc jedyna lista, do której wracasz, żeby nią
zarządzać — wyłączyć to, usunąć tamto — była tym, do czego trzeba było
przewijać przez wszystko inne, a selektor, potrzebny tylko przy dodawaniu
czegoś nowego, witał cię za każdym razem.

Drobna poprawka uczciwości w tym samym miejscu: pusty stan czeka teraz, aż
magazyny botów i agentów odpowiedzą, zanim ogłosi, że nie ma nic do
połączenia, pokazując w międzyczasie **Szukam…**, a każdy filtr ma własny
licznik. Pusta siatka, która oznacza „wciąż się ładuje”, to kłamstwo, które
interfejs dotąd rutynowo powtarzał.

## Dwa mechanizmy, jedno pytanie

Za tym jednym selektorem kryją się dwie naprawdę różne rzeczy:

- **Inny widżet** → wygenerowany przez AI **link klejący**. Prawdziwy kod, z
  własną historią wersji, działający we własnym ukrytym środowisku
  uruchomieniowym, mapujący to, co emituje A, na to, czego oczekuje B.
- **Połączenie, bot lub agent** → lekki **załącznik**, czyli zapis tego, czego
  przebudowa nauczyła *własny* kod tego widżetu. Przygotowywany etapami, a nie
  automatycznie, więc przejrzenie pięciu źródeł pod rząd kosztuje jedną
  przebudowę, a nie pięć.

Wiedza, którego z nich chcesz, zanim jeszcze potrafisz powiedzieć, co ma się
właściwie wydarzyć, to złe pierwsze pytanie. Dlatego zakładka Linki otwiera się
teraz edytorem: **opisz połączenie**.

> *„Synchronizuj symbol w obie strony z wykresem.”*
> *„Gdy kliknę tu wiersz, przefiltruj drugi widżet.”*
> *„Pokazuj w tym widżecie sygnały mojego bota alertów cenowych.”*

Planer czyta te same zasoby, które pokazuje selektor, i ustala zarówno
mechanizm, jak i drugą stronę — „bot cenowy” staje się identyfikatorem. On
**tylko ustala**; nigdy nie generuje. Kosztowny strumieniowy codegen nadal
działa tam, gdzie zawsze, z własnym przyciskiem Stop i własną historią wersji.

Jeśli wolisz wskazywać rzeczy samodzielnie, selektor wciąż to umożliwia — a
teraz oznacza to, z czym już jesteś połączony, więc drugi wybór pokazuje się
jako *„już połączone”*, zamiast po cichu powtarzać pierwszy. Ponowny wybór
aktualizuje istniejące połączenie, zamiast dodawać zduplikowany wiersz, a
plakietka mówi o tym **zanim** zapłacisz za przebudowę.

## „Przetestuj”: który koniec naprawdę nie działa?

Do tego wydania link był tylko do zapisu. Opisywałeś go, płaciłeś za codegen,
a potem wychodziłeś z edytora i szturchałeś prawdziwe widżety, żeby sprawdzić,
czy cokolwiek się stało. Gdy nic się nie działo, nie było sposobu, żeby
ustalić, *która* część jest błędna — widżet, który nie emituje, link, który nie
mapuje, czy drugi widżet, który nie słucha.

Edytor ma teraz pasek **Przetestuj**. Wybierz temat i wartość, wskaż, który
koniec udaje emisję (dostępne tylko przy linku dwukierunkowym, bo link
jednokierunkowy zawsze zgłaszałby brak czegokolwiek z drugiej strony), i
wyślij. Zdarzenie trafia do prawdziwego środowiska uruchomieniowego linku i
uruchamia wygenerowane `connect(ctx)` — nie jego symulację — a werdykt
rozróżnia każdy sposób, w jaki wynik może okazać się pusty:

- **Ten link nie działa.** Włącz go — albo nie ma jeszcze kodu.
- **Uruchomił się, ale nie przekazał niczego dla tego tematu.** Mapowanie jest
  błędne; szczegóły są w zakładce Logi.
- **Przekazano „symbol” do Chart.** Działa.
- **Przekazano, ale tego widżetu nie ma na ekranie, żeby to odebrał.** To nie
  błąd — drugi koniec jest na innym ekranie.

Testowanie odbywa się na liście, zamiast przerzucać cię gdzie indziej, a
rejestrator jest uzbrojony tylko wtedy, gdy pasek jest na ekranie, więc link
przekazujący strumień ticków nigdy nie płaci za instrumentację.

## Te ciche

Linki dwukierunkowe odbijałyby echo w nieskończoność bez pomocy, więc
dostarczona wartość jest zapamiętywana, a identyczne odbicie zwrotne jest raz
odrzucane — kanoniczna pętla lustrzana A↔B zostaje przerwana, a naprawdę nowa
wartość nadal przechodzi. Linki i załączniki replikują się między twoimi
kartami i urządzeniami, zamiast żyć w jednym z nich, więc usunięcie któregoś
gdzie indziej pokazuje teraz w edytorze stan **usunięte**, zamiast pozwalać ci
zapisywać w próżnię. A gdy przebudowa się nie powiedzie, mówi o tym i wskazuje
zakładkę Builder, zamiast zostawiać spinner tam, gdzie powinna być odpowiedź.

W drodze jest jeszcze jedna zmiana: aplikacja zmienia nazewnictwo wokół słowa,
którego ludzie już do tego używają. *Link* staje się **wire**, a *Moje
połączenia* zostają dokładnie tam, gdzie są.

[Uruchom Nexow](https://x.nexow.ai), otwórz zakładkę Linki dowolnego widżetu i
opisz, co ma się stać, gdy coś klikniesz. A potem przetestuj to, zanim
wyjdziesz.
