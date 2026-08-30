---
title: 'Widgets verdrahten: eine Oberfläche, ein Satz und ein Testen-Button'
description: 'Alles, womit ein Widget verdrahtet werden kann, lebt jetzt hinter einer Suchbox — andere Widgets, Verbindungen, Bots und Agents. Beschreiben Sie die Verdrahtung in Klartext und feuern Sie ein echtes Event, um zu sehen, welches Ende kaputt ist.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/wires.svg
tags: ['produkt', 'widgets', 'automatisierung']
---

Ein **Link** trägt Events zwischen zwei Widgets: ändern Sie das Symbol in einem,
reagiert das andere. Schalten Sie Zwei-Wege ein und sie bleiben synchron. Das ist
der Unterschied zwischen einem Bildschirm voller getrennter Kacheln und einem,
der sich wie ein Instrument verhält.

Die Idee war gut. Sie zu finden nicht, und zu wissen, ob es funktionierte, auch
nicht. Beides ist in diesem Release behoben.

## Eine Oberfläche, und „Alle“ meint wirklich alle

Der Picker war in zwei Sub-Tabs geteilt — *Widgets* und *Quellen* — die Hälfte
Ihres Inventars war immer hinter einem Toggle versteckt. Ein Widget allein auf
seinem Bildschirm zeigte leeres Grid, ohne Hinweis auf Bots, Agents und
Verbindungen.

Jetzt gibt es eine Suchbox und eine Reihe Kind-Filter über alles: andere Widgets
auf diesem Bildschirm, in diesem Workspace oder woanders; Ihre Datenverbindungen;
Ihre Bots; Ihre Agents. **Alle** zeigt alles.

Die Reihenfolge änderte sich: **Meine Verdrahtung** sitzt jetzt *über* der Browse-
Fläche. Früher unter einem Picker-Grid mit Dutzenden Kacheln — die Liste, die Sie
zum Verwalten brauchen, mussten Sie scrollen, während der Picker zum Hinzufügen
Sie jedes Mal begrüßte.

Kleiner Honesty-Fix: der Empty State wartet, bis Bot- und Agent-Stores antworten,
bevor er behauptet, nichts zu verdrahten gibt — zeigt **Suche…** unterdessen;
jeder Filter-Chip hat eigene Count. Leeres Grid als „lädt noch“ war eine Lüge,
die die UI routinemäßig erzählte.

## Zwei Mechanismen, eine Frage

Hinter dem einen Picker stecken zwei verschiedene Dinge:

- **Anderes Widget** → AI-generierter **glue link**. Echter Code, eigene
  Versionshistorie, hidden Runtime, mappt A-Emission auf B-Erwartung.
- **Verbindung, Bot oder Agent** → leichtes **attachment**, Record dessen, was ein
  Rebuild dem *eigenen* Widget-Code beigebracht hat. Gestaffelt, damit fünf
  Quellen hintereinander einen Rebuild kosten, nicht fünf.

Welches Sie wollen zu wissen, bevor Sie sagen können, was passieren soll, ist eine
schlechte erste Frage. Der Links-Tab öffnet deshalb mit Composer: **Verdrahtung
beschreiben**.

> *„Symbol mit Chart in beide Richtungen synchronisieren.“*
> *„Wenn ich hier eine Zeile klicke, das andere Widget filtern.“*
> *„Signale meines Preis-Alert-Bots in diesem Widget anzeigen.“*

Ein Planner liest dasselbe Inventar wie der Picker und löst Mechanismus und
Gegenstück — „der Preis-Bot“ wird eine id. Er **löst nur**; generiert nie. Das
teure Streaming-Codegen läuft weiter dort mit eigenem Stop und eigener
Versionshistorie.

Bevorzugen Sie Zeigen statt Beschreiben, markiert der Picker jetzt, womit Sie
schon verdrahtet sind — zweiter Pick liest *„bereits verknüpft“* statt still zu
wiederholen. Erneutes Picken aktualisiert bestehende Verdrahtung; Badge sagt es
**bevor** Sie für Rebuild zahlen.

## „Testen“: welches Ende ist wirklich kaputt?

Bis zu diesem Release war ein Link write-only. Beschreiben, Codegen bezahlen,
Editor verlassen, echte Widgets antippen. Wenn nichts passierte, keine Möglichkeit
zu sagen, *welcher* Teil falsch war.

Der Editor hat jetzt eine **Testen**-Leiste. Topic und Wert wählen, welches Ende
emitieren simuliert (nur bei Zwei-Wege-Link), senden. Event geht in echten Link-
Runtime und führt generiertes `connect(ctx)` aus — keine Simulation — und das
Urteil unterscheidet jede leere Variante:

- **Dieser Link läuft nicht.** Einschalten — oder noch kein Code.
- **Lief, leitete aber nichts für dieses Topic weiter.** Mapping falsch; Logs-Tab
  hat Details.
- **„symbol“ an Chart gesendet.** Funktioniert.
- **Weitergeleitet, aber Widget nicht auf Bildschirm zum Empfangen.** Kein Bug.

Test bleibt in der Liste; Recorder nur aktiv, solange die Leiste sichtbar ist.

## Die leisen

Zwei-Wege-Links würden ohne Hilfe ewig echoen — gelieferter Wert wird gemerkt,
identischer Rückprall einmal verworfen. Links und Attachments replizieren über
Tabs und Geräte; Löschen woanders zeigt **gone** im Editor. Rebuild-Failure sagt
es und zeigt auf Builder-Tab.

Eine Umbenennung kommt: *Link* wird **wire**, **Meine Verdrahtung** bleibt, wo es
ist.

[Starten Sie Nexow](https://x.nexow.ai), öffnen Sie den Links-Tab eines Widgets,
beschreiben Sie, was beim Klicken passieren soll. Dann testen, bevor Sie gehen.
