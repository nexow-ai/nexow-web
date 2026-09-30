---
title: 'Ekrany na żywo: dwie osoby na jednym canvasie'
description: 'Zamień ekran w sesję na żywo i zaproś na nią swoje kontakty. Wszyscy widzą te same widżety, kursory pozostałych oraz każde przesunięcie, zmianę rozmiaru i prompt w chwili, gdy się pojawia — a nikt nie potrzebuje planu, by dołączyć.'
pubDate: 2026-08-09
heroImage: ../../../assets/blog/collab.svg
tags: ['produkt', 'współpraca', 'przestrzeń-robocza']
---

Przestrzeń robocza zawsze była miejscem prywatnym. Mogłeś opublikować widżet,
udostępnić zrzut ekranu, przekazać komuś wpis z marketplace — ale nie mogłeś
usiąść obok tej osoby w środku. Teraz możesz: każdy ekran, którego jesteś
właścicielem, może stać się **sesją na żywo**, a zaproszone osoby pracują na nim
razem z Tobą, w tym samym czasie, na tym samym canvasie.

## Zapraszaj, nie publikuj

Z karty ekranu: **Współpracuj na żywo…**. Wybierz osoby ze swoich kontaktów —
wzajemnych obserwacji, które już masz — nadaj każdej rolę i przejdź na żywo.

Nic nie staje się publiczne. Nie ma linku działającego dla nieznajomych, nie ma
poziomu „każdy, kto ma URL”, nie ma powierzchni odkrywania. Tylko wybrane przez
Ciebie osoby mogą otworzyć ekran, a skopiowany link z zaproszeniem jest
bezużyteczny dla kogokolwiek innego.

Role są dwie i znaczą dokładnie to, co mówią:

- **Edytor** — przesuwa, zmienia rozmiar, dodaje widżety i wysyła do nich prompty.
- **Widz** — ogląda i wskazuje. Nie może niczego zmienić.

Widz, który chce więcej, może **poprosić o edycję**; dostajesz prośbę i albo ją
akceptujesz, albo nie. W każdej chwili możesz zmienić czyjąś rolę lub usunąć
kogoś z sesji — zostaje natychmiast rozłączony, a ekran znika z jego przestrzeni
Shared.

## Jak naprawdę wygląda „na żywo”

Każdy na ekranie widzi **kursory** wszystkich pozostałych, poruszające się w
czasie rzeczywistym, z podpisanym imieniem. Na karcie ekranu pojawia się stos
awatarów, a każdy awatar pokazuje stan, a nie tylko kropkę:

- **edytuje** — właśnie zrobił coś, co zmieniło canvas
- **ogląda** — patrzy na ten ekran
- **bezczynny** — patrzy na ekran, ale od dłuższego czasu nic nie robi
- **nieobecny** — jest w sesji, ale patrzy na coś innego

To ostatnie rozróżnienie ma większe znaczenie, niż się wydaje. Kursory przestają
być nadawane w chwili, gdy ekran nie jest widoczny, ale obecność już nie — więc
ktoś, kto zawędrował do innej przestrzeni roboczej, pozostaje na liście,
przygaszony, zamiast znikać i pojawiać się na nowo.

Przesunięcia, zmiany rozmiaru, nowe widżety i nowe buildy docierają do
wszystkich. Gdy współpracownik rozpoczyna build, widżet to komunikuje — *„Ana
buduje ten widżet — dołącz, gdy skończy”* — ponieważ dwie osoby wysyłające
jednocześnie prompty do tego samego widżetu obie wydają kredyty, a wygrać może
tylko jeden wynik. Kolejka jest zajęta na czas trwania buildu i zwalniana po
nim, więc niczyja praca nie zostaje po cichu nadpisana.

Jeden celowy brak: **cofanie jest wyłączone, gdy ekran, na którym jesteś, działa
na żywo**. Cofnięcie własnego ruchu po tym, jak ktoś inny przesunął ten sam
element, nie opisuje stanu, w którym którekolwiek z Was było. Uczciwa odmowa jest
lepsza niż przycisk, który po cichu robi coś złego — a cofanie działa normalnie
na Twoich własnych ekranach, gdy na żywo jest inny ekran.

## Goście nie muszą niczego wnosić

**Nigdy nie potrzebujesz planu, żeby dołączyć.** Ani wersji próbnej, ani
ograniczonego trybu, ani licznika czasu. Zaproszony współpracownik otwiera ekran
i pracuje.

Ekrany, do których dołączysz, trafiają do **Shared** — przestrzeni roboczej
przypiętej na końcu paska, z jedną kartą na sesję. Zachowuje się jak każda inna
przestrzeń robocza, z tą różnicą, że nie jest Twoja: gdy skończysz, klikasz
**Opuść**, a jeśli chcesz zachować to, co zbudowaliście razem, **Zapisz kopię w
mojej przestrzeni roboczej** zabiera ekran ze sobą do domu.

Wysyłanie promptów to ta część, która kosztuje prawdziwe pieniądze, więc
właściciel kontroluje ją jawnie. Włącz **„Pozwól współpracownikom korzystać z
moich kredytów”** i ustaw limit na sesję: goście mogą budować, ich prompty
obciążają Twoje saldo, a gdy budżet sesji się wyczerpie, prompty zostają
wstrzymane — dla nich, nie dla Twojego konta. Zostaw tę opcję wyłączoną, a
współpracownicy nadal mogą przesuwać, zmieniać rozmiar i przestawiać elementy;
po prostu nie mogą wysyłać promptów.

## Twoje połączenia pozostają Twoje

To granica, wokół której zbudowana jest cała funkcja: **współdzielony ekran
udostępnia ekran, nigdy Twoje dane uwierzytelniające.**

Widżety na ekranie na żywo działają z **własnymi połączeniami oglądającego**.
Widżet zbudowany na Twoim kluczu Binance nie pożycza go — dla gościa, który nie
podłączył Binance, wyświetla *wymagane połączenie*, dokładnie tak, jak w każdym
innym miejscu. Twoje połączenia i sekrety nie są częścią tego, co projektuje
sesja, i nie jest to ustawienie.

Jeśli mimo to chcesz, żeby gość widział dane, do tego służy
[opublikowany feed danych](/pl/blog/publish-a-widget-data-feed) — endpoint
tylko do odczytu, ograniczony do wybranej publiczności, który włączasz dla
każdego widżetu osobno. To inna decyzja, podejmowana świadomie.

## Sesje przeżywają kartę

Nie ma urządzenia-hosta. Sesja na żywo to osobny byt na serwerze, a nie
przekaźnik działający w Twojej przeglądarce, więc zamknięcie laptopa nie wyrzuca
wszystkich, a karta w tle nie spowalnia sesji reszcie pokoju. Wróć, otwórz
ponownie ekran i jesteś w tej samej sesji z tymi samymi osobami.

Zakończenie to jedna akcja: **Zakończ sesję na żywo**. Wszyscy zostają
rozłączeni, a ekran i wszystko na nim pozostaje Twoje — nową sesję możesz
rozpocząć, kiedy tylko zechcesz.

## Ile to kosztuje

Dołączanie jest darmowe na zawsze. Hostowanie jest stopniowane według tego, co
faktycznie generuje koszt — miejsc:

- **Supporter** — do 3 współpracowników jednocześnie, na jednym ekranie na żywo.
- **Sponsor** — do 15 współpracowników i do 5 Twoich własnych ekranów na żywo w
  tym samym czasie.

Współpraca na żywo jest wyłączona, gdy włączony jest tryb prywatności, z tego
samego powodu co synchronizacja w chmurze: tryb prywatności oznacza, że nic nie
opuszcza urządzenia.

[Uruchom Nexow](https://x.nexow.ai), kliknij prawym przyciskiem kartę ekranu i
zaproś kogoś na swój canvas.
