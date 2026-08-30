---
title: 'Anatomie eines Trading-Cockpits: ein Bildschirm, acht Widgets und was jedes speist'
description: 'Ein Referenz-Desk Kachel für Kachel zerlegt — was jedes Widget ist, welche Verbindung es speist, welche Drähte sie verbinden und was weiterläuft, wenn der Tab geschlossen ist. Weniger Release Note als Landkarte.'
pubDate: 2026-08-09
heroImage: ../../../assets/blog/cockpit-teardown.svg
tags: ['teardown', 'workspace', 'krypto']
category: teardown
---

Das meiste, was wir hier veröffentlichen, ist eine Release Note: etwas ist
ausgeliefert, hier ist, was es tut. Dieser Beitrag ist eine andere Art. Nichts
unten ist neu. Es ist ein fertiger Bildschirm, zerlegt, damit Sie sehen, wie
die Teile, die wir getrennt ausliefern, tatsächlich zusammenpassen.

Der Desk ist ein Krypto-Cockpit — acht Widgets auf einem Bildschirm, aus
öffentlichen Marktdaten gebaut, nirgends Keys. Nichts daran ist besonders. Das
ist der Punkt: jedes Teil ist etwas, das Sie durch Beschreiben neu bauen können.

## Der Bildschirm

![Ein Bildschirm mit acht Widget-Kacheln, jede mit einer Nummer von eins bis acht markiert](../../../assets/blog/anatomy-of-a-trading-cockpit-fig1.svg "Der ganze Desk. Ein Bildschirm, acht Widgets, auf dem freien Canvas angeordnet — Nummern verweisen auf die Liste unten.")

1. **Candlesticks.** Die Anker-Kachel. Ein Symbol, ein Intervall, eine live
   letzte Kerze. Alles andere auf dem Bildschirm speist sie oder folgt ihr.
2. **Order-Book-Tiefe.** Bids und Asks als gestapelte Balken, damit ein dünnes
   Book sichtbar ist statt inferiert.
3. **Watchlist.** Eine Handvoll Symbole, eines ausgewählt. Diese Kachel ist das
   Lenkrad des Bildschirms — mehr unten.
4. **Wallet-Salden.** Eine öffentliche Adresse, read-only, über eine
   Wallet-Verbindung. Kein Signieren, keine Keys, nichts zu genehmigen.
5. **Funding Rates.** Perp-Funding über die letzten Fenster, positiv und negativ
   auf beiden Seiten einer Null-Linie.
6. **Heatmap.** Dasselbe Universum wie die Watchlist, dimensioniert und schattiert,
   zum Überfliegen statt Lesen.
7. **Prediction Markets.** Was die Menge preist, neben dem, was das Order Book
   preist. Interessant ist, wenn die beiden divergieren.
8. **Alert-Inbox.** Den Großteil des Tages leer. Gefüllt von einem Bot, der
   weiterarbeitet, wenn der Tab geschlossen ist.

Ein **Bildschirm** ist eine Anordnung von Widgets. Ein **Workspace** hält
mehrere davon. Das Canvas ist frei — Sie platzieren Dinge, wo Sie wollen, und
Gruppen können Kacheln zu Mosaiken oder Tabs stapeln — aber es ist ein Canvas
mit Rändern, keine unendliche Ebene, in der man sich verliert.

## Einer Kachel den ganzen Weg nach unten folgen

Jede Kachel auf diesem Bildschirm hat dieselben vier Schichten darunter. Nehmen
Sie die Watchlist:

![Ein Pfad von links nach rechts: eine Verbindung speist generierten Code, der Code rendert ein Widget innerhalb einer gestrichelten Sandbox-Grenze, und ein Draht trägt einen Wert zu einem Chart](../../../assets/blog/anatomy-of-a-trading-cockpit-fig2.svg "Eine Kachel, von oben nach unten: eine Verbindung, der generierte Code, das laufende Widget und der Draht, der einen Wert herausführt.")

1. **Eine Verbindung.** Einer der 90 Live-Connectors — hier öffentliche
   Marktdaten, die gar keine Credentials brauchen. Verbindungen sind Inventar,
   keine Konfiguration: Sie hängen eine an ein Widget und das Widget wird neu
   gebaut, wissend, wie es sie nutzt.
2. **Generierter Code.** Sie beschrieben eine Watchlist; ein Build schrieb eine.
   Sie hat Versionshistorie, und Sie können jeden Turn der Conversation lesen,
   der sie produzierte.
3. **Das laufende Widget.** Es läuft sandboxed. Ein Widget, das sich falsch
   verhält, ruiniert nur seine eigene Kachel und nichts anderes auf dem
   Bildschirm — der einzige Grund, warum es vertretbar ist, Software zu
   betreiben, die Sie nicht gelesen haben.
4. **Ein Draht hinaus.** Die Kachel emittiert, wenn Sie eine Zeile klicken. Allein
   geht das nirgendwo hin. Was es zum Cockpit statt acht getrennter Kacheln macht,
   ist der nächste Teil.

## Was es zusammenhält, sind Drähte, nicht Code

![Ein Graph derselben acht nummerierten Widgets, mit einem Zwei-Wege-Draht zwischen Watchlist und Chart, Ein-Weg-Drähten zu Order-Book- und Funding-Kacheln, und einer Verbindung, einem Bot und einem Agent von links angehängt](../../../assets/blog/anatomy-of-a-trading-cockpit-fig3.svg "Dieselben acht Kacheln als Graph. Durchgezogene Linien sind Drähte zwischen Widgets; gestrichelte sind Anhänge aus dem Rest Ihres Inventars.")

Zwei Mechanismen stecken hinter dem einen Wort *Draht*, und die Unterscheidung
erscheint im Diagramm als durchgezogen versus gestrichelt:

- **Widget zu Widget** ist ein **glue link** — echter generierter Code, mit
  eigener Versionshistorie, in eigenem versteckten Runtime, der mappt, was eine
  Kachel emittiert, auf das, was die andere erwartet. Der Bogen zwischen Watchlist
  und Chart ist zweiseitig: ändern Sie das Symbol in einem und beide folgen.
  Zwei-Wege-Drähte würden ohne Hilfe ewig echoen, also wird ein gelieferter Wert
  gemerkt und der identische Rückprall einmal verworfen.
- **Widget zu Verbindung, Bot oder Agent** ist ein **attachment** — ein Record
  dessen, was ein Rebuild dem *eigenen* Code des Widgets beigebracht hat. Das
  sind die gestrichelten Linien. Gestaffelt statt automatisch, damit fünf
  Quellen hintereinander einen Rebuild statt fünf kosten.

Auf diesem Bildschirm ist die Verkabelung bewusst dünn: die Watchlist steuert
den Chart in beide Richtungen und Order Book sowie Funding-Kachel in eine.
Drei Drähte. Einen vierten für die Heatmap hinzuzufügen lockte und war falsch —
eine Kachel, die sich ändert, wenn Sie nicht hinschauten, ist eine, der Sie
nicht mehr vertrauen.

Der Draht-Editor hat eine **Testen**-Leiste genau dafür. Wählen Sie Topic und
Wert, wählen Sie, welches Ende emitieren simuliert, und senden Sie ein echtes
Event durch den echten Runtime. Das Urteil unterscheidet *dieser Draht läuft
nicht* von *er lief, leitete aber nichts für dieses Topic weiter* von
*weitergeleitet, aber dieses Widget ist nicht auf dem Bildschirm zum Empfangen*.
Bevor das existierte, sahen ein kaputter Draht und ein Draht zu einem anderen
Bildschirm identisch aus: nichts passierte.

## Was weiterläuft, wenn der Tab geschlossen ist

Kachel 8 ist die einzige, die im üblichen Sinn kein Widget ist. Sie ist eine
Inbox, und was sie füllt, ist ein **Bot**.

Bots sind absichtlich unspektakulär — ein fester Katalog von Prozessoren
(Schwelle, Change, Crossover, RSI, Volume Spike, Digest, New Trade, Wallet
Activity, Wallet Balance) über genau drei Arten von Dingen: Markt-Candles, ein
Broker-Konto, eine öffentliche Wallet-Adresse. Kein Modell in der Schleife, und
genau deshalb können Sie einen einen Monat laufen lassen. Wenn einer feuert,
verteilt er sich an vier Stellen gleichzeitig: Alert-Inbox, Widget-Bus (damit
Kachel 8 live aktualisiert), Webhook und verbundene Datenbank.

**Agents** sind die andere Hälfte und die entgegengesetzte Form: general-purpose,
mit per-Tool-Grants für Websuche, Social, Marktdaten, Datenbanken, Memory und
mehr, auf manuellem oder 15-Minuten-bis-täglichem Trigger. Ein Agent ist das,
was Sie nehmen, wenn die Frage *„fasse zusammen, was über Nacht passiert ist“*
ist statt *„sag mir, wenn das das kreuzt“*. Beide speisen Kachel 8; nur einer
ist günstig unbeaufsichtigt zu lassen.

## Was dieser Bildschirm bewusst nicht tut

Er tradet nicht. Nichts hier platziert eine Order — das ist ein separater Grant,
auf einem separaten Connector, und es auf denselben Bildschirm wie eine Heatmap,
über die Sie flüchtig schauen, zu legen, ist, wie Unfälle passieren.

Er hält keinen Key. Jede Quelle ist öffentlich: Candles, Tiefe, Funding,
Prediction Markets, eine read-only Adresse. Ein Desk, den Sie jemand anderem
geben können, ohne danach etwas zu widerrufen, ist mehr wert als ein Desk mit
zwei extra Kacheln.

Und er ist nicht fertig, weil das kein Zustand ist, den ein Bildschirm erreicht.
Die ehrliche Version dieses Teardowns ist, dass das Layout oben das vierte ist;
die ersten drei hatten mehr Kacheln und sagten weniger.

[Starten Sie Nexow](https://x.nexow.ai) und beschreiben Sie die erste Kachel. Die
anderen sieben sind leichter.
