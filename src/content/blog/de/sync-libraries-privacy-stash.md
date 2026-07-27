---
title: 'Ein Workspace, jedes Gerät: tieferer Sync, neue Bibliotheken, ein klügerer privater Modus'
description: 'Widget-Chats folgen Ihnen jetzt live über Geräte hinweg, Screens und Workspaces haben eigene Bibliotheken, archivierte Entwürfe behalten ihre Konversationen, und der private Modus verstaut Ihren Cloud-Zustand, statt ihn zu verlieren.'
pubDate: 2026-07-20
heroImage: ../../../assets/blog/sync-library.svg
tags: ['produkt', 'sync', 'workspace']
---

Cloud-Sync hieß bisher: Ihre Widgets und Layouts folgen Ihnen. Dieses Release
lässt auch den *Rest* folgen — Konversationen, Bibliotheken, sogar den
Zustand Ihrer Automatisierungen, wenn Sie in den privaten Modus wechseln und
wieder zurück.

## Konversationen syncen live

Der Chat eines Widgets ist die halbe Miete: die Prompts, die Amendments, die
Begründungen. Widget-Threads **übertragen sich jetzt live auf alle Geräte** —
verlassen Sie eine Konversation am Desktop, öffnen Sie den Laptop, und der
Thread ist da, aktuell, ohne Refresh.

Unter der Haube wurden Widget-Records in Head-, Versions- und Chat-Dokumente
aufgeteilt, sodass eine schnelle Konversation nicht länger ganze
Widget-Payloads mitschleppt. Sie merken es daran, dass der Sync mithält.

## Bibliotheken für Screens und Workspaces

Die Bibliothek hielt bisher Widgets. Jetzt hat sie auch Tabs für **Screens**
und **Workspaces** — speichern Sie ein ganzes Layout einmal, verwenden Sie es
überall wieder, und es synct wie alles andere. Zusammen mit dem Marketplace
ist der Weg von „mein Lieblings-Screen“ zu „veröffentlichtes Asset“ zwei
Klicks lang.

Auch das Archivieren wurde freundlicher: Ein archivierter Widget-Entwurf
**behält seine Konversation**, und wenn Sie ihn wieder aufnehmen, geht der
Chat dort weiter, wo Sie aufgehört haben — das Archiv ist jetzt ein Regal,
kein Schredder. Und bleibt ein Widget-Record nach einer unterbrochenen
Operation je verwaist zurück, findet ihn die Bibliothek und stellt ihn wieder
her, statt ihn versickern zu lassen.

## Privater Modus: verstauen statt zerstören

Nexows Regel lautet: Die Cloud ist Opt-in — und Sie können sich jederzeit
wieder abmelden. Der Wechsel in den **privaten Modus** *verstaut* jetzt Ihren
Cloud-seitigen Zustand: Deployte Agents und Cloud-Bot-Sinks werden geparkt,
nicht gelöscht. Verlassen Sie den privaten Modus, sind sie exakt so
wiederhergestellt, wie sie waren, Datenbank-Sinks inklusive. Privat zu gehen
ist keine Entscheidung mehr, für die Sie bei der Rückkehr bezahlen.

Auch Realtime-Sync ist jetzt eine gemerkte Präferenz — einmal ausgeschaltet,
bleibt er über Sessions hinweg aus, bis Sie es anders bestimmen.

## Absichtlich langweilig

Den Rest der Arbeit bemerken Sie hoffentlich nie: Layout-Pushes sind
Compare-and-Set, damit zwei Geräte einander nicht stillschweigend
überschreiben, ein Gerät ignoriert das Echo seiner eigenen Writes, und
Offline-Änderungen wandern in eine Outbox, die abgespielt wird, sobald Sie
zurück sind. Sync, über den Sie nicht nachdenken, ist das Feature.

[Starten Sie Nexow](https://x.nexow.ai) auf zwei Bildschirmen und sehen Sie
zu, wie sich ein Workspace auch wie einer verhält.
