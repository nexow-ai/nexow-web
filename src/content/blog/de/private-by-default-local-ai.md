---
title: 'Private by default: Warum Ihre KI-Markt-Workstation lokal laufen sollte'
description: 'Nexow läuft standardmäßig vollständig lokal — Bring-your-own-key-Codegen im Browser, IndexedDB-Persistenz und Direct-to-Venue-Verbindungen. Was private-by-default bedeutet und warum es für Trader wichtig ist.'
pubDate: 2026-07-01
heroImage: ../../../assets/blog/private.svg
tags: ['privatsphäre', 'architektur', 'sicherheit']
category: deep-dive
---

Die meisten KI-Tools senden Ihre Daten standardmäßig an einen Server. Für eine
Markt-Workstation — wo Ihre Schlüssel, Positionen und Strategien das ganze Spiel
sind — ist dieser Standard verkehrt herum. Nexow kehrt ihn um: **private by
default, local by design.**

Was das konkret bedeutet.

## Bring-your-own-key-Codegen im Browser

Im privaten Modus fügen Sie Ihren eigenen Anthropic API-Schlüssel hinzu, und die
Widget-Generierung läuft clientseitig. Wenn Sie ein Widget prompten, geht die
Anfrage von Ihrem Browser mit Ihrem Schlüssel zu Anthropic — nicht über Nexows
Infrastruktur. Eine nicht authentifizierte Session kostet uns nichts, weil es
nichts zu betreiben gibt: Die Arbeit passiert auf Ihrer Maschine.

## Ihre Widgets leben in Ihrem Browser

Jedes Widget, das Sie bauen, jede Version, jedes Log und Ihre gesamte Widget-
Bibliothek werden in **IndexedDB** Ihres Browsers gespeichert. Sie sind offline
verfügbar und an kein Konto gebunden. Löschen Sie den Speicher und sie sind weg
— es gibt keine serverseitige Kopie, weil es nie einen serverseitigen Upload gab.

## Direct-to-Venue-Verbindungen

Wo die CORS-Richtlinie eines Venues es erlaubt, verbindet sich Nexow **direkt
aus Ihrem Browser** und umgeht unseren Proxy vollständig. Ihre Exchange-
Credentials sprechen mit der Exchange — nicht mit uns. Weniger Hops bedeuten
niedrigere Latenz und eine kleinere Vertrauensfläche.

## Warum private-by-default wichtig ist

- **Sicherheit.** Je weniger Parteien Ihre Schlüssel berühren, desto weniger
  Leckstellen. Local-first entfernt uns im privaten Modus vollständig aus dem
  Pfad.
- **Latenz.** Direkte Verbindungen überspringen einen Netzwerk-Hop — wichtig,
  wenn Sie ein Order Book beobachten.
- **Eigentum.** Ihre Dashboards gehören Ihnen. Kein Lock-in, kein Export-Ritual
  — sie leben auf Ihrer Maschine.
- **Kosten.** Sie zahlen nur für Ihre eigene Modellnutzung, ohne Aufschlag und
  ohne Abo, um heute auf dem Canvas zu bauen.

## Die Trade-offs, ehrlich

Local-first ist nicht ohne Trade-offs. Manche Venues erlauben keine Browser-
Direktverbindungen und müssen über einen schlanken Proxy laufen. Lokale
Persistenz bedeutet, dass Ihre Arbeit an ein Browser-Profil gebunden ist, bis Sie
sie synchronisieren. Und Ihren eigenen Schlüssel zu nutzen bedeutet, Ihre
Nutzung selbst zu verwalten. Wir halten das für die richtigen Trade-offs für ein
Tool, das so nah an Ihrem Geld sitzt.

Während wir gehostete Pläne, Trading-Agents und Server-Komponenten hinzufügen,
bleibt das Prinzip fest: **Ihre Schlüssel, Ihre Daten, Ihre Maschine** — es sei
denn, Sie entscheiden sich explizit für die Cloud.

[Starten Sie Nexow](https://x.nexow.ai) und erleben Sie den privaten Modus
selbst.
