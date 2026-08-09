---
title: 'Nimm dein Dashboard auf — Kamerablase inklusive'
description: 'Bildschirmaufnahme steckt jetzt in der Werkzeugleiste: bis zu zehn Minuten deiner Leinwand mit der Webcam als verschiebbare Blase, eine schwebende Steuerleiste und eine Entscheidung — speichern, teilen oder veröffentlichen — wenn du stoppst.'
pubDate: 2026-08-07
heroImage: ../../../assets/blog/recorder.svg
tags: ['produkt', 'aufnahme', 'community']
---

Du baust etwas Gutes und willst es zeigen — in Bewegung, nicht als Screenshot. Bis
jetzt hieß das: die App verlassen, einen separaten Recorder suchen, ein
Browserfenster einrahmen und hoffen, dass das Ergebnis anschaubar ist. Jetzt ist es
ein Button in der Werkzeugleiste.

**Dashboard aufnehmen** bietet zwei Dinge: einen **Screenshot**, vor dem Speichern
zuschneidbar, oder **Video aufnehmen** — deine Leinwand, live, bis du stoppst oder
zehn Minuten erreichst.

## Was in die Aufnahme kommt

Drei Schalter, vor dem Start entschieden:

- **Kamerablase** — deine Webcam, als Kreis ins Video einkomponiert
- **Mikrofon** — dein Kommentar
- **Tab-Audio** — was die Seite selbst abspielt

Die Kamerablase klebt nicht in einer Ecke. **Zieh sie hin, wo du willst**: Sie
schnappt beim Loslassen an die nächstgelegene Ecke, in der Größe, die du gewählt
hast. Sie ist Teil des Videos, keine nachträglich aufgesetzte Ebene — was du
einrahmst, ist das, was die Datei enthält.

Während der Aufnahme hält sich eine schwebende **Steuerleiste** aus dem Weg und
erledigt die vier Dinge, die man mittendrin wirklich braucht: pausieren und
fortsetzen, Mikrofon stummschalten, Tab-Audio stummschalten, Kamerablase ausblenden
oder verschieben — und stoppen. Ein Timer läuft die ganze Zeit mit und warnt, wenn
du dich der Zehn-Minuten-Grenze näherst, statt ohne Erklärung abzubrechen.

## Dann eine Entscheidung, kein Download

Beim Stoppen öffnet sich die Aufnahme in einer Prüfansicht mit dem Video und vier
Optionen: **Speichern**, **Teilen**, **Veröffentlichen**, **Verwerfen**.

Veröffentlichen schickt sie in den Community-Feed, und nur dort gibt es eine Grenze:
Eine Zehn-Minuten-Aufnahme kann überschreiten, was die Uploads des Feeds zulassen.
Passiert das, ist Veröffentlichen **deaktiviert und erklärt warum**, samt genanntem
Maximum, während Speichern und Teilen verfügbar bleiben, weil beide dieser Grenze
gar nicht nahekommen. Ein ausgegrauter Button, der die Zahl nennt, ist besser als
einer, der scheitert, wenn der Fortschrittsbalken voll ist.

## Die unglamourösen Teile, die die Datei gut machen

Das meiste an der Arbeit eines Bildschirmrecorders ist unsichtbar, wenn er
funktioniert:

- **Das Bild wird immer auf eine Leinwand fester Größe komponiert**, auch ohne
  Kamerablase. Die Auflösung einer Tab-Aufnahme folgt dem Fenster: Eine einzige
  Größenänderung mitten in der Aufnahme würde die Videospur neu aushandeln, und
  Dateien mit einem Auflösungswechsel sind in den meisten Playern kaputt. Die Größe
  einmal am Anfang festzulegen, ist das, was die Ausgabe zu einer einzigen sauberen
  Kodierung macht: 1080p mit 30 fps, mit Abstieg auf 720p, wenn der Browser doch
  eine Vollbildquelle liefert.
- **Der Container wird zur Laufzeit gewählt, nicht angenommen.** Firefox nimmt WebM
  auf, Safari MP4, und Chromium hat je nach Version beides ausgeliefert. Der
  Recorder versucht zuerst MP4 — das ist die Datei, die überall läuft, wohin du sie
  danach mitnimmst —, steigt notfalls auf WebM ab und benennt die Datei nach dem,
  was der Browser tatsächlich benutzt hat, nicht nach dem, wonach gefragt wurde.
- **Die Frames werden unabhängig von der Seite getaktet.** Ein Tab im Hintergrund
  drosselt Animation, aber nicht Audio — genau so entsteht ein eingefrorenes Bild
  über weiterlaufendem Kommentar. War der Tab während der Aufnahme verdeckt, sagt
  die Prüfansicht das, statt es dich später entdecken zu lassen.
- **Jede Spur wird auf jedem Weg nach draußen gestoppt**, auch bei einem Fehlschlag
  mitten im Start. Eine leuchtende Kameraleuchte ist eine App, die aussieht, als
  würde sie dich beobachten, und davon gibt es keine akzeptable Version.

Fehler sind in beide Richtungen ehrlich. Den Auswahldialog des Browsers zu schließen,
ist kein Fehler und bleibt still: Du hast nichts geteilt, und eine Meldung darüber
wäre Lärm. Aber eine Quelle, die kein Bild sendet, warnt, bevor du fünf Minuten auf
ein graues Rechteck sprichst, und ein Browser, der kein Video kodieren kann, sagt es,
statt eine leere Datei zu produzieren.

## Als Nächstes: ein einzelnes Widget aufnehmen

Mit dem nächsten Update kommt die kleinere, schärfere Fassung davon: ein
**Kamera-Button in der Kopfzeile eines Widgets**, der *nur dieses Widget* aufnimmt —
zugeschnitten auf seinen Körper, sodass die Kopfzeile, in der der Button sitzt, und
die Steuerleiste außerhalb des Bildes bleiben. Die Aufnahmeanzeige darf genau dort
stehen, während du aufnimmst, ohne im Video zu landen.

Gebaut ist das auf Region Capture, heute eine Chromium-Desktop-Fähigkeit — der
Button erscheint also nur dort, wo er wirklich liefern kann, statt etwas anzubieten,
wofür er sich hinterher entschuldigen müsste. Er folgt dem Widget, wenn du es
verschiebst, und stoppt sauber, wenn das Widget den Screen verlässt.

Zusammen hört „schau, was ich gebaut habe“ auf, ein Screenshot plus ein Absatz zu
sein.

[Nexow öffnen](https://x.nexow.ai), in der Werkzeugleiste **Dashboard aufnehmen**
suchen und deine Leinwand aufnehmen.
