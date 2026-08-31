---
title: 'Zehn Beispiel-Widgets liefern jetzt mit Nexow — inklusive Conversation'
description: 'Ein neues Konto öffnet nicht mehr auf leerem Canvas. Zehn fertige Widgets kommen als Beispiele-Workspace, jedes mit dem echten Chat, der es baute, und echter Versionshistorie — gebaut vom selben Codegen-Loop wie Sie, ohne Anbindungen.'
pubDate: 2026-08-09
heroImage: ../../../assets/blog/starters.svg
tags: ['produkt', 'onboarding', 'widgets']
---

Der schwierigste Bildschirm in Nexow war immer der erste: leeres Canvas, Prompt-
Box und kein Beweis, dass irgendetwas funktioniert. Sie konnten die Docs lesen
oder etwas tippen und hoffen.

Mit dem nächsten Release bootet ein neues Konto in einen **Beispiele-Workspace**
— zehn fertige Widgets über drei Bildschirme, alle beim ersten Laden laufend,
mit **nichts verbunden**. Keine Screenshots, keine Führung. Echte Widgets, die
Sie öffnen, bearbeiten, zerlegen und darüber veröffentlichen können.

## Was im Pack ist

**Live world** — eine Weltuhr mit Tag/Nacht-Ring und Überlappungsbalken für
Arbeitszeiten; Sieben-Tage-Wetter mit Stundenkurve; alle Erdbeben der letzten
Stunde, Tag oder Woche auf live Karte, nach Magnitude skaliert; und live
Luftqualität mit dem Schadstoff, der den Index treibt.

**Markets** — Binance-Candlesticks mit live letzter Kerze und 24h-Change-Badge;
ein FX-Konverter auf EZB-Referenzkursen mit 90-Tage-Historie; die aktivsten
Polymarket-Fragen und was die Menge glaubt; und jeder Weltbank-Indikator für
zwei Länder gleichzeitig als Langfrist-Chart.

**Make and play** — ein Haftnotiz-Board, das Reloads über durable per-item
Storage überlebt, und Wikipedias „an diesem Tag“-Feed mit Thumbnails und
Datumsauswahl.

Jede Quelle ist keyless: Open-Meteo, USGS, Binance Public Data, Frankfurter,
Polymarket, Weltbank, Wikipedia. Das ist Regel, kein Zufall — ein Beispiel, das
auf „OANDA verbinden“ öffnet, ist schlechter als leeres Canvas.

## Sie wurden wirklich gebaut, nicht geschrieben

Jedes Beispiel startete als Brief, geschrieben wie eine Person tippt — was sie
will und warum, keine Spec. `starter:build` führt diese Briefs durch
**`runWidgetToolLoop`**: dasselbe Modul, das die Plattform-Codegen-Route und der
Bring-your-own-key-Pfad im Browser antreiben, mit gleichem Contract, gleichen
Tools und gleichem In-Turn-Verifier. Kein HTTP-Stream, kein Credit-Ledger, kein
Browser — aber dieselbe Schleife.

Die Transkription in einem Widgets Chat-Tab ist also die echte Conversation, und
jeder Turn, der Code produzierte, ist eine echte Version auf der Rail. Die
meisten tragen drei. **Luftqualität trägt fünf**, weil die ersten drei es auf
leerer „Stadt eingeben“-Box öffneten, und der fünfte Turn ist ein Bug-Report:
sechs Schadstoff-Kacheln zeigen alle einen Strich, und ein Timestamp las *„vor
-6375 Min“*. Dieser Build ist im Pack genau so, wie er passierte.

Entscheidend: die Briefs laufen **ohne attached Providers** — genau das, was ein
neues Konto hat. Was aus dieser Schleife kommt, funktioniert am ersten Tag.

## Kein zweiter Katalog

Jedes Beispiel ist ein gewöhnliches Marketplace-Asset, vom offiziellen Konto über
denselben RPC veröffentlicht wie aller anderen Arbeit: gleiche Sanitizer, gleicher
Lineage-Graph, gleicher Install-Pfad, gleiche Royalty-Chain. Nichts an einem
Starter-Widget ist serverseitig speziell behandelt — forken Sie eines und Sie
setzen echten Lineage fort statt zu entdecken, dass die App-Beispiele in einem
privaten Dialekt leben.

Ein Curation-Registry darüber hält nur die Curation: welche veröffentlichten
Assets das Pack bilden, in welcher Reihenfolge, auf welchem Bildschirm.
Schreibzugriffe nur service-role; Lesen ist public, weil ein ausgeloggter
Besucher eine Listing-Seite dafür sehen kann.

## Wo das Pack landet und was es nicht tut

Seeding ist dreifach gated. Es läuft **einmal pro Konto, nicht einmal pro Gerät**
— das Flag ist eine replizierte Einstellung, beim Account-Wechsel neu gelesen.
Es seedet nie ein Canvas, das jemand schon benutzt hat. Und es kann erzwungen
werden unter **Einstellungen → Allgemein → Beispiel-Widgets hinzufügen**, für
Konten vor dem Pack oder wer den Workspace gelöscht und ihn zurück will.

Die Beispiele landen *neben* Ihrem eigenen leeren Workspace statt ihn zu
ersetzen — Onboarding gibt Ihnen weiterhin einen sauberen Bildschirm zum Tippen.
Das ganze Pack ist ein Undo-Schritt.

Jedes geseedete Widget ist als die Marketplace-Installation gestempelt, die es
wirklich ist — verbessern und veröffentlichen setzt offiziellen Lineage fort
statt eine Rival-Kopie zu starten. Wenn wir eine bessere Beispiel-Version
shippen, **behalten bereits geseedete Nutzer ihre** — es ist jetzt ihr Widget,
evtl. editiert. Kein Push-Update-Pfad, und es sollte keinen geben.

## Als Pack verifiziert, nicht mit dem Auge

Bevor eines ein Konto erreicht, läuft das ganze Pack in echtem Chrome und wird
pro Widget bewertet: Boot-Fehler, unkontrollierte Animations-Loops, langsame
Frames, leere Renders — plus Screenshot je Widget. Ein separater Live-Check
leitet jeden Public Endpoint aus committed Code ab und bestätigt, dass er noch
antwortet, damit der Test nicht veraltet, während Widgets sich ändern.

Die Latte für ein elftes ist dieselbe wie für diese zehn: null Verbindungen,
sauberes Smoke-Urteil, echte Message statt leerer Kachel, wenn die Datenquelle
einen schlechten Tag hat, und nichts Persönliches irgendwo in der Conversation —
weil die Conversation mitshipt.

Das Pack kommt mit dem nächsten Release, bestehende Konten können es jederzeit
unter **Einstellungen → Allgemein** holen. Öffnen Sie eines, lesen Sie den Chat,
der es baute, und ändern Sie etwas — das ist weiterhin der schnellste Weg zu
lernen, was das Canvas kann.

[Starten Sie Nexow](https://x.nexow.ai) und bauen Sie in der Zwischenzeit weiter.
