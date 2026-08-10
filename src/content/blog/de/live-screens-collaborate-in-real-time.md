---
title: 'Live-Screens: zwei Menschen auf einer Leinwand'
description: 'Mach aus einem Screen eine Live-Session und lade deine Kontakte dazu ein. Alle sehen dieselben Widgets, die Cursor der anderen und jedes Verschieben, Skalieren und Prompten in dem Moment, in dem es passiert — und zum Mitmachen braucht niemand einen Plan.'
pubDate: 2026-08-09
heroImage: ../../../assets/blog/collab.svg
tags: ['produkt', 'zusammenarbeit', 'workspace']
---

Ein Arbeitsbereich war immer ein privater Ort. Du konntest ein Widget
veröffentlichen, einen Screenshot teilen, jemandem einen Marketplace-Eintrag
schicken — aber du konntest dich nicht darin neben diese Person setzen. Jetzt
schon: Jeder Screen, der dir gehört, kann zu einer **Live-Session** werden, und die
Leute, die du einlädst, arbeiten mit dir darin — gleichzeitig, auf derselben
Leinwand.

## Einladen, nicht veröffentlichen

Aus dem Tab eines Screens: **Live zusammenarbeiten…**. Wähle Personen aus deinen
Kontakten — die gegenseitigen Follows, die du ohnehin hast —, gib jeder eine Rolle
und geh live.

Nichts wird öffentlich. Es gibt keinen Link, der für Fremde funktioniert, keine
„jeder mit der URL“-Stufe, keine Fläche zum Entdecken. Nur die Leute, die du
ausgewählt hast, können den Screen öffnen, und der Einladungslink, den du kopierst,
nützt sonst niemandem.

Es gibt zwei Rollen, und sie meinen genau das, was sie sagen:

- **Editor** — Widgets verschieben, skalieren, hinzufügen und prompten.
- **Zuschauer** — zusehen und zeigen. Kann nichts verändern.

Ein Zuschauer, der mehr will, kann **Um Bearbeitung bitten**; du bekommst die
Anfrage und gibst sie frei oder nicht. Du kannst jederzeit jemandes Rolle ändern
oder die Person entfernen — sie wird sofort getrennt, und der Screen verschwindet
aus ihrem Bereich „Geteilt“.

## Wie „live“ tatsächlich aussieht

Alle sehen die **Cursor** der anderen, in Echtzeit und mit Namen daran. Der Tab des
Screens bekommt einen Avatar-Stapel, und jeder Avatar trägt einen Zustand statt nur
eines Punkts:

- **bearbeitet** — hat gerade etwas getan, das die Leinwand verändert
- **schaut zu** — hat diesen Screen vor Augen
- **inaktiv** — schaut hin, hat aber seit einer Weile nichts getan
- **abwesend** — in der Session, aber woanders

Der letzte Unterschied zählt mehr, als er klingt. Cursor hören auf zu senden, sobald
ein Screen nicht sichtbar ist — die Anwesenheit nicht: Wer in einen anderen
Arbeitsbereich gewechselt ist, bleibt in der Liste, abgedunkelt, statt zu
verschwinden und wieder aufzutauchen.

Verschieben, Skalieren, neue Widgets und neue Builds erreichen alle. Startet eine
mitarbeitende Person einen Build, sagt das Widget es — *„Ana baut gerade an diesem
Widget — steig ein, wenn sie fertig ist“* — denn zwei Menschen, die dasselbe Widget
gleichzeitig prompten, geben beide Credits aus, und nur ein Ergebnis kann gewinnen.
Der Zug wird für die Dauer des Builds reserviert und danach freigegeben, damit
niemandes Arbeit stillschweigend überschrieben wird.

Eine bewusste Lücke: **Rückgängig ist aus, solange der Screen, auf dem du bist, live
ist.** Deinen eigenen Zug rückgängig zu machen, nachdem jemand anderes dieselbe Box
bewegt hat, beschreibt keinen Zustand, in dem eine von beiden Seiten je war. Ehrlich
abzulehnen ist besser als ein Button, der stillschweigend das Falsche tut — und
Rückgängig funktioniert auf deinen anderen Screens normal weiter, während einer live
ist.

## Gäste bringen nichts mit außer sich selbst

**Zum Mitmachen braucht es nie einen Plan.** Keine Testphase, keinen reduzierten
Modus, keinen Timer. Eine eingeladene Person öffnet den Screen und arbeitet.

Beigetretene Screens landen in **Geteilt**, einem Arbeitsbereich am Ende der Leiste
mit einem Tab pro Session. Er verhält sich wie jeder andere, nur gehört er dir
nicht: Wenn du fertig bist, **verlässt** du ihn, und wenn du behalten willst, was
ihr zusammen gebaut habt, holt **Eine Kopie in meinen Bereich speichern** den Screen
zu dir.

Prompten ist der Teil, der echtes Geld kostet, also steuert die besitzende Person
ihn ausdrücklich. Schalte **„Mitarbeitende dürfen meine Credits nutzen“** ein und
setze ein Limit für die Session: Gäste können bauen, ihre Prompts belasten dein
Guthaben, und wenn das Session-Budget aufgebraucht ist, pausieren die Prompts — für
sie, nicht für dein Konto. Lass es aus, und Mitarbeitende können weiterhin
verschieben, skalieren und umsortieren; sie können nur nicht prompten.

## Deine Verbindungen bleiben deine

Das ist die Grenze, um die herum die ganze Funktion gebaut ist: **Ein geteilter
Screen teilt den Screen, niemals deine Zugangsdaten.**

Widgets auf einem Live-Screen laufen mit **den Verbindungen der jeweils zusehenden
Person**. Ein Widget auf deinem Binance-Schlüssel leiht ihn sich nicht aus: Einem
Gast ohne Binance-Verbindung zeigt es *Verbindung erforderlich*, genau wie überall
sonst. Deine Verbindungen und deine Geheimnisse gehören nicht zu dem, was eine
Session projiziert, und das ist keine Einstellung.

Wenn ein Gast die Daten trotzdem sehen soll, ist dafür ein
[veröffentlichter Daten-Feed](/de/blog/publish-a-widget-data-feed) da: ein
schreibgeschützter Endpunkt mit definiertem Publikum, den du pro Widget aktivierst —
eine andere Entscheidung, absichtlich getrennt.

## Sessions überleben den Tab

Es gibt kein Host-Gerät. Eine Live-Session existiert eigenständig auf dem Server,
sie ist kein Relais in deinem Browser: Den Laptop zuzuklappen wirft niemanden raus,
und ein Tab im Hintergrund bremst die Session der anderen nicht aus. Komm zurück,
öffne den Screen erneut, und du bist in derselben Session mit denselben Leuten.

Beenden ist eine einzige Aktion: **Live-Session beenden**. Alle werden getrennt, und
der Screen samt allem darauf bleibt deiner — du kannst jederzeit eine neue starten.

## Was es kostet

Beitreten ist für immer kostenlos. Hosten ist nach dem gestaffelt, was tatsächlich
verbraucht wird: Plätze.

- **Supporter** — bis zu 3 Mitarbeitende gleichzeitig, auf einem Live-Screen.
- **Sponsor** — bis zu 15 Mitarbeitende und bis zu 5 eigene Screens gleichzeitig
  live.

Live-Zusammenarbeit ist aus, solange der Privatmodus an ist — aus demselben Grund
wie die Cloud-Synchronisation: Privatmodus heißt, dass nichts das Gerät verlässt.

[Nexow öffnen](https://x.nexow.ai), Rechtsklick auf einen Screen-Tab, und lade
jemanden auf deine Leinwand ein.
