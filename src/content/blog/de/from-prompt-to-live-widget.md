---
title: 'Vom Prompt zum Live-Widget: Wie Nexow einen Satz in ein Trading-Dashboard verwandelt'
description: 'Ein Blick unter die Haube, wie Nexow aus einem Prompt in natürlicher Sprache ein laufendes, datenverbundenes Markt-Widget erzeugt — Codegen, Sandboxing und Live-Connectors erklärt.'
pubDate: 2026-06-24
heroImage: ../../../assets/blog/codegen.svg
tags: ['produkt', 'ki', 'funktionsweise']
---

Ein Trading-Dashboard zu bauen bedeutete immer dasselbe: API finden, Docs lesen,
Websocket wranglen, Payload normalisieren, Charting-Library wählen, Layout
kämpfen — und das für jedes Instrument wiederholen. Nexow kollabiert diese
gesamte Schleife in einen Satz.

So passiert zwischen dem Tippen eines Prompts und dem Erscheinen eines Live-
Widgets auf Ihrem Canvas.

## 1. Sie beschreiben, was Sie sehen möchten

Ein Prompt ist einfach natürliche Sprache:

> Zeige ein Candlestick-Chart von BTC-USD von Coinbase mit EMA 20 und 50 und
> darunter ein RSI-Panel.

Kein Schema zu lernen, keine Konfigurationsdatei. Sie beschreiben das Ergebnis —
Instrument, Venue, Indikatoren, Layout — so, wie Sie es einem Kollegen
beschreiben würden.

## 2. Nexow generiert den Quellcode des Widgets

Nexow sendet Ihren Prompt über das Anthropic SDK an Anthropics Claude-Modelle,
zusammen mit dem nötigen Kontext: welche Connectors verfügbar sind, die Form
der zurückgegebenen Daten und den Runtime-Vertrag, den ein Widget erfüllen muss.
Claude schreibt den eigentlichen Quellcode des Widgets — Fetch-Logik, Transforms
und Rendering.

Weil das Modell echten Code schreibt statt eine feste Vorlage auszufüllen, ist
der Spielraum offen: Order-Book-Tiefencharts, Funding-Rate-Heatmaps,
Korrelationsmatrizen, Custom-Signale, einfache Tabellen. Wenn Sie es beschreiben
können, kann Nexow es meist bauen.

## 3. Das Widget läuft sandboxed

Generierter Code ist mächtig, deshalb läuft er hinter einer strikten Grenze.
Jedes Widget führt in einem isolierten iframe aus: Es kann seine UI rendern und
die benötigten Daten holen, aber nicht in Ihren Workspace greifen, andere
Widgets lesen oder etwas anfassen, was ihm nicht gegeben wurde. Power ohne Risiko.

## 4. Live-Daten fließen über Connectors

Ein Widget ist nur mit echten Daten nützlich. Nexow liefert über 20 einsteckbare
Connectors für FX, Krypto, Aktien, Futures, Optionen und Prediction Markets —
OANDA, Binance, Coinbase, Kraken, Interactive Brokers, Polygon, Kalshi,
Polymarket und mehr. Das Widget abonniert den benannten Venue, und Preise, Order
Books und Referenzdaten streamen direkt ein.

Wo die CORS-Richtlinie eines Venues es erlaubt, laufen diese Aufrufe **direkt
aus Ihrem Browser** und passieren nie unsere Server — niedrige Latenz und Ihre
Credentials auf Ihrer Maschine.

## 5. Sie verfeinern in natürlicher Sprache

Die erste Generation ist selten die letzte. Alles bleibt per Konversation
editierbar: *„füge EMA 200 hinzu"*, *„wechsle auf Log-Skala"*, *„färbe die Kerzen
nach Funding Rate."* Nexow schreibt das Widget an Ort und Stelle um, versioniert
die Änderung und führt ein Log, das Sie inspizieren oder zurückrollen können.

## Warum das wichtig ist

Der traditionelle Weg von der Idee zum Chart dauert Stunden. Mit Nexow dauert
er Sekunden, und das Ergebnis ist ein echtes, inspizierbares Widget — keine Black
Box. Das Dashboard baut sich selbst, und Sie behalten die Kontrolle über Code,
Daten und Schlüssel.

Bereit zum Ausprobieren? [Starten Sie die App](https://x.nexow.ai) und
beschreiben Sie Ihr erstes Widget.
