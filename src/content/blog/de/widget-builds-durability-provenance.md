---
title: 'Widget-Building, dem Sie vertrauen können: durable Builds, ehrliche Versionen, Lint im Chat'
description: 'Der Composer hat ein Gedächtnis und ein Gewissen bekommen — Builds überleben Verbindungsabbrüche und lassen sich sauber wiederholen, jede Version hält fest, woher sie kam, und Lint- und Runtime-Probleme landen im Chat, nicht in einer Konsole.'
pubDate: 2026-07-21
heroImage: ../../../assets/blog/builds.svg
tags: ['produkt', 'widgets', 'ki']
---

Prompt-to-Widget war schon immer der glamouröse Teil. In diesem Release geht
es um die unglamouröse Hälfte dieses Versprechens: was passiert, wenn das
Netzwerk mitten im Build wegbricht, wenn eine Generierung fehlschlägt, wenn
Sie wissen wollen, welche Version eines Widgets Sie eigentlich gerade
ansehen. Die Antwort, jetzt: Nichts geht verloren, und nichts wird hinter
Ihrem Rücken umgeschrieben.

## Builds, die Sie überleben

Widget-Builds sind jetzt **durable Jobs**. Klappen Sie den Laptop mitten in
der Generierung zu, verlieren Sie das WLAN, refreshen Sie im dümmsten
Moment — der Build behält seinen Lease auf dem Server und wird ohne Sie
fertig. Schlägt ein Turn doch fehl, sitzt ein **Retry** direkt daran — und er
funktioniert auch dann, wenn ein Disconnect die Dinge in einem seltsamen
Zustand hinterlassen hat. Veraltete Builds können den Composer nicht mehr
blockieren.

Ihre Worte sind genauso beständig: Ein ungesendeter Prompt im Composer bleibt
mit dem Widget erhalten — ein unglücklich getimter Refresh frisst nicht mehr
den Absatz, den Sie gerade senden wollten.

## Versionen mit Provenance

Jede Widget-Version hält jetzt fest, **woher sie kam** — ein Prompt, ein
Amend, ein manuelles Speichern — und Bearbeitungen erzeugen neue Versionen,
statt alte an Ort und Stelle umzuschreiben. Die erste Version jedes Widgets,
seine **Genesis**, wird nie bereinigt: Sie können immer zurückscrollen zu
dem, was der allererste Prompt erzeugt hat. Und wenn ein Versions-Chip im
Chat auf Historie zeigt, die bereinigt wurde, sagt der Chat das, statt etwas
vorzutäuschen.

## Der Build sagt Ihnen, was mit ihm nicht stimmt

Generierter Code wird geprüft, und die Befunde gehen dorthin, wo Sie ohnehin
hinschauen: **Lint- und Runtime-Probleme erscheinen auf der Chat-Bubble des
Builds**, als Teil der Konversation. Beheben Sie sie per Antwort — die
Probleme sind Kontext, den der nächste Turn bereits kennt.

Die Sandbox blieb strikt und wurde strikter: Widgets können keine direkten
Netzwerk-Calls machen — Daten kommen durch Connectors — und die Assets, die
sie laden dürfen, sind auf bekannte Origins gepinnt.

## Reichere Konversationen

Der Composer hat **Attachments** bekommen — ziehen Sie ein Bild in den Chat,
um der KI zu zeigen, was Sie meinen — und **gepinnte Verbindungen**, damit
die Konversation eines Widgets immer weiß, gegen welche Datenquellen es
gebaut wird. Bauen Sie mit Ihrem eigenen API-Schlüssel, sehen andere Geräte
Ihres Kontos den laufenden Build statt eines rätselhaften Busy-Zustands.

Nichts davon ändert, wie sich das Bauen anfühlt: beschreiben, zusehen,
verfeinern. Es ändert, wie sehr Sie dem vertrauen können, was dabei
herauskommt.

[Starten Sie Nexow](https://x.nexow.ai) und kappen Sie Ihre Verbindung mitten
im Build — wir werden ohne Sie fertig.
