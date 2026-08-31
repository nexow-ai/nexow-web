---
title: 'Widgets, die ihre eigene Plumbing prüfen: probe_url, Verifier-Agent und eine gratis Reparatur'
description: 'Die größte Quelle toter Widgets war Code gegen eine imaginäre API. Jetzt holt der Builder den Endpoint beim Schreiben, ein Verifier probiert Übersprungenes nach, und ein Crash in den ersten 45 Sekunden kauft einen automatischen Fix.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/verify.svg
tags: ['produkt', 'ki', 'funktionsweise']
---

Der häufigste Grund, warum ein generiertes Widget scheiterte, war kein Bug im
generierten Code. Es war ein Endpoint, der nie existierte.

Das Modell griff nach einer URL aus dem Gedächtnis — oder aus einer Directory-Zeile,
deren Link eine *Dokumentationsseite* ist, nicht ein Endpoint — rät die
Response-Form, schrieb sorgfältiges Parsing gegen diese Vermutung und shipte. Sie
bekamen einen ewigen Spinner oder leeren Chart, ohne Hinweis auf dem Bildschirm.

Dieses Release schließt die Schleife dreifach: während das Modell schreibt, direkt
danach, und noch einmal, wenn es vor Ihnen weiter crasht.

## Während es schreibt: `probe_url`

Der Builder hat jetzt ein Tool, das **jetzt einen public keyless Endpoint GETet**,
über denselben Server-Proxy wie `ctx.data.http()` zur Runtime, und echten HTTP-
Status und echten Response-Body zurückgibt.

Diese Identität ist der ganze Punkt. Ein erfolgreicher Probe *ist* ein
erfolgreicher Runtime-Call. Ein fehlgeschlagener Probe ist ein Widget, das
kaputt geshipt worden wäre — und es scheitert jetzt, solange noch ein Turn zum
Fixen bleibt, nicht auf Ihrem Canvas.

Es steht unten an einer Leiter, die der Builder abarbeiten soll statt aus dem
Gedächtnis zu schließen: Venue-Referenzdocs zuerst, dann ein **Directory von 691
keyless public APIs in 47 Kategorien**, durchsuchbar nach Topic über Name *und*
Beschreibung jedes Eintrags — weil echte Anfragen („Gezeiten“, „Luftqualität“)
selten auf eine Kategorie passen, die man erraten würde. Dieses Directory ist dem
Builder jetzt immer verfügbar, egal was im Scope ist, weil es der universelle
keyless Fallback ist. Seine Links sind Dokumentation, der letzte Schritt ist
immer gleich: Endpoint ableiten, dann proben.

„Gibt es Daten für X?“ wird durch Schauen beantwortet, nicht durch Schlussfolgern,
welche Datasets wahrscheinlich existieren. Am Ende der Leiter *nein* zu sagen
nach echtem Check ist ein gutes Ergebnis. Aus dem Gedächtnis zu behaupten ist es
nicht — und war viel öfter falsch, als es sich anfühlte.

## Direkt danach: der Verifier

Das Modell zu bitten, die eigene Arbeit zu prüfen, ist eine Bitte, keine
Garantie. Sobald der Widget-Code landet, passieren zwei Dinge unabhängig vom
Modell:

Erstens benennt das Tool-Ergebnis **Endpoints, die dieser Turn nicht probte**, und
sagt, sie zu prüfen, solange Rounds bleiben.

Zweitens — ohne Kooperation — läuft ein Verifier **parallel zum Summary-Schreiben**
des Modells und macht die Arbeit selbst:

- **Lint des Moduls** für silent-by-construction Failure-Klassen. Fehlender
  `render`-Export. Code, der nicht parst. Rohes `fetch` oder `WebSocket` zu
  Third-Party-Host, das der Sandbox blockiert — der schädlichste stille Fehler in
  generierten Widgets. Externe Bild-/Video-URL direkt an `src`. Hardcodierte
  Tile-URL an Map-Library, die mountet und pannt, während Tile-Requests leise
  abgelehnt werden.
- **Jeden übersprungenen Endpoint proben** (bis fünf pro Modul) und das Urteil
  wie das Modell lesen: unreachable oder 4xx, das URL/Parameter falsch sagt.

Echte Probleme kaufen **einen automatischen In-Turn-Repair-Round**, mit Probe-
Output als Evidence und Anweisung, nur Benanntes zu fixen — während der volle
Build-Context noch heiß ist. Schreibt das Modell mid-flight um, wird laufende
Verification superseded und verworfen. Ein intern failender Verifier verifiziert
clean: er kann verzögern, nie brechen.

## Wenn es weiter crasht: eine Reparatur, hart begrenzt

Self-Repair-Context fütterte Runtime-Fehler in den *nächsten* Chat-Turn — aber
nur wenn Sie einen schickten. Ein Widget, das Sekunden nach dem Build crashte,
blieb kaputt, bis Sie es merkten, den Composer wieder öffneten und „kaputt“
tippten.

Jetzt gibt der Runtime-Host **einen automatischen Fix-Turn** aus, wenn ein frischer
Build crasht. Automatischer Turn = App verbraucht Credits oder Key, Grenzen sind
bewusst eng:

- nur die Version, die ein AI-Build *gerade* produzierte;
- nur innerhalb von **45 Sekunden** nach diesem Build;
- **einmal pro Version**, und eine Version *durch* Auto-Repair ist selbst
  ineligible. Maximal ein automatisches Follow-up — nie eine Kette, in der das
  Modell sich selbst bezahlt, weiter zu scheitern.

Der Repair-Turn ist formuliert als App meldet Defekt, mit derselben Anweisung:
bei Data-Endpoint-Failure zuerst proben. Fixen, Behalten was funktioniert, Scope
nicht wachsen lassen.

Serverseitig wartet ein geretteter Background-Build, wenn ein anderer Turn desselben
Widgets schon live ist, statt in eine Duplikat-Version zu racen.

## Gleiche Schleife, jeder Modus

Alles lebt in einem shared Module — Plattform-Builds, BYOK im Browser und
Server-Build-Sweep haben **identisches** Verhalten: gleiche Tools, Probe-
Formatierung, Verifier, Repair-Budget. Die Modi können nicht divergieren. Es ist
auch die Schleife hinter [den zehn Beispiel-Widgets](/blog/starter-widgets-examples-workspace).

Nichts davon macht ein Modell korrekt. Es macht Irrtum überlebbar und meist
unsichtbar: Endpoint wird geprüft, bevor Code davon abhängt; Check läuft, ob das
Modell will oder nicht; erster Crash bekommt einen ehrlichen Fix-Versuch, bevor
er Sie erreicht.

[Starten Sie Nexow](https://x.nexow.ai) und fragen Sie nach etwas Obskurem —
Gezeiten, Luftqualität, Feiertage. Beobachten Sie die Activity-Rail, wie sie den
Endpoint probt, bevor eine Parsing-Zeile geschrieben wird.
