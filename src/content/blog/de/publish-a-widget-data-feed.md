---
title: 'Einen Daten-Feed veröffentlichen: dein Widget läuft auch ohne deinen Schlüssel'
description: 'Ein Widget auf deiner Binance- oder OANDA-Verbindung war für alle anderen unbrauchbar. Jetzt kannst du genau die Lesezugriffe, die es macht, als schreibgeschützten, gecachten Endpunkt unter deinem eigenen Profil veröffentlichen — ohne Schlüssel zu teilen, ohne offenen Proxy.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/datafeeds.svg
tags: ['produkt', 'widgets', 'daten']
---

Im Teilen klaffte eine unangenehme Lücke. Du baust ein schönes FX-Chart auf deiner
OANDA-Verbindung, veröffentlichst es, und die erste Person, die es installiert,
liest *Verbinde OANDA, um diese Daten zu nutzen* — eine höfliche Art, eine fremde
Person zu bitten, ein Broker-Konto zu eröffnen, um ein Chart anzusehen. Auf einem
Live-Screen geteilt war es noch schlimmer: Das Widget fror zu einem Vorschaubild
ein.

Die Lösung ist nicht, jemandem deinen Schlüssel zu leihen. Sie ist, **die
Lesezugriffe zu veröffentlichen, die dein Widget tatsächlich macht** — als eigene
Endpunkte, unter deinem eigenen Profil:

```
GET /<benutzername>/api/w/<widget>/<endpunkt>?symbol=EUR_USD&interval=H1
```

Einschalten lässt es sich im Veröffentlichungsdialog — *Schreibgeschützten
Daten-Feed veröffentlichen* — und wer keine eigene Verbindung hat, liest deinen Feed,
statt zum Verbinden aufgefordert zu werden.

## Drei Regeln, und jede ist eine Absage

**Nur Lesezugriffe, die sicher zu teilen sind.** Dreizehn Datenmethoden sind
veröffentlichbar. Der Rest ist gesperrt, jede aus ihrem eigenen Grund: `account` und
`positions` sind auch Lesezugriffe, geben aber deinen Kontostand, dein Vermögen,
deine G&V und deine offenen Positionen zurück. `order` und `closePosition` bewegen
Geld. `upsert` und `delete` zerstören Daten. `scrape` stellt Dritten jeden Aufruf in
Rechnung. Und blankes `http` ist ohnehin ohne Zugangsdaten — es zu veröffentlichen
würde nur einen offenen Proxy mit deinem Namen darauf bauen.

**Nur die Aufrufe, die das Widget wirklich gemacht hat.** Die erfolgreichen
Lesezugriffe deines Widgets werden im Betrieb mitgeschrieben, und der Dialog zeigt
dir die Liste — *Kerzen von Binance — BTCUSDT, 1h* — als die konkrete Sache, der du
zustimmst. Eine Anfrage nach einem Parameter, den du nie veröffentlicht hast, oder
nach einem Wert außerhalb der Menge, auf die du ihn erweitert hast, wird abgelehnt,
bevor irgendetwas entschlüsselt wird. Parameter, die in keiner URL etwas verloren
haben — eine SQL-Abfrage, ein Vektor —, tauchen dort nie auf: Sie werden wortwörtlich
aus dem Speicher wiedergegeben.

**Absagen sind ununterscheidbar.** Ein Endpunkt, den es nicht gibt, ein Parameter
außerhalb seiner Liste und ein Publikum, zu dem du nicht gehörst, liefern alle
dasselbe 404. Ob ein Feed nur für Freunde existiert, ist selbst eine Information über
die Autorin — die Antwort verrät sie nie.

## Wer ihn lesen darf, und was er dich kostet

Das Publikum ist kein vierter Schalter zum Vergessen: Es **folgt dem
Ankündigungsbeitrag** — alle, deine Follower oder deine Freunde. Eine private
Ankündigung deaktiviert den Feed vollständig, denn eine Ankündigung, die nur du sehen
kannst, hinter einem Endpunkt, den andere aufrufen, ergibt keinen Sinn.

Die Kosten sind der Teil, der sich zu verstehen lohnt, weil er der ist, vor dem man
Angst hat. Du wählst ein Aktualisierungsintervall — alle 30 Sekunden, 5 Minuten,
stündlich oder täglich —, und das ist das **Maximum** dessen, wie oft deine
Verbindung genutzt wird, egal wie viele Leute das Widget öffnen. Alle Lesenden teilen
sich eine gecachte Kopie. Zehn Zuschauer und zehntausend erzeugen dieselbe Zahl an
Aufrufen, und pro Fenster ist genau eine Aktualisierung erlaubt, selbst wenn mehrere
gleichzeitig den Cache verfehlen.

Dein Schlüssel verlässt nie den Server. Kontostand, Positionen und Orders werden nie
veröffentlicht. Und der Feed hängt am Eintrag: Nimm das Widget vom Listing, und die
Endpunkte hören auf zu liefern.

## Die eigene Verbindung gewinnt immer

Ein veröffentlichter Feed ist ein Rückfall, nie ein Ersatz. Wer dein Widget öffnet
und eine eigene OANDA-Verbindung hat, dessen Widget nutzt **seine**: sein Konto,
seine Daten, seine Limits. Der Feed wird erst befragt, nachdem das Widget keine
eigene Verbindung gefunden hat, und ein Fehlschlag ist stumm: Die Person sieht die
gewohnte Meldung *dieses Venue verbinden* statt eines neuen Fehlers, den sie erst
lernen müsste.

Diese Endpunkte laufen über dieselben Venue-Adapter, die die App ohnehin mitbringt —
ein veröffentlichter Feed liefert also byteidentische Formen zu dem, was du beim
Bauen gesehen hast, über jedes aktive Venue des Katalogs hinweg und ohne
venue-spezifischen Code.

## Was er absichtlich nicht tut

- **Ein geteiltes Trading-Dashboard zeichnet sein Chart, nicht sein Kontopanel.** Das
  ist die Sperrliste bei der Arbeit, kein Fehler.
- **Ein Symbolwähler bietet nur die Symbole, die du aufgezählt hast.** Ein Widget mit
  freiem Texteingabefeld fällt auf eine feste Menge zurück. Das ist der Preis dafür,
  keinen offenen Proxy auf deinen Broker zu bauen.
- **Im Privatmodus lässt sich kein Feed veröffentlichen.** Dort leben deine
  Zugangsdaten nur im Siegel dieses Geräts: Kein Server hält sie, also kann auch
  keiner etwas für dich aktualisieren.
- **Ein Fork erbt den Feed nicht.** Feeds hängen an der Abstammung eines Widgets:
  Jede installierte Kopie löst dieselben Endpunkte auf, ein Fork löst keine auf.

Es ist eine Kleinigkeit zum Einschalten, und sie verändert, was Veröffentlichen
bedeutet: Ein Widget, das du teilst, ist jetzt ein Widget, das andere wirklich
betreiben können.

[Nexow öffnen](https://x.nexow.ai), ein Widget nehmen, das du auf einer Verbindung
mit Schlüssel gebaut hast, und es mit eingeschaltetem Feed veröffentlichen.
