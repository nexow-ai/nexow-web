---
title: 'Bots v2: RSI- und Volumen-Trigger, Webhook- und Datenbank-Delivery und ein aufgeräumterer Builder'
description: 'Cloud-Bots haben neue Tricks gelernt — RSI- und Volume-Spike-Bedingungen, Trade-Watcher, Signale, die per POST an Ihre Webhooks gehen oder an Ihre Datenbank angehängt werden, und ein Builder, aufgeteilt in My bots und Create.'
pubDate: 2026-07-22
heroImage: ../../../assets/blog/bots-v2.svg
tags: ['produkt', 'automatisierung', 'bots']
---

Als Bots starteten, konnten sie Schwellenwerte, Prozent-Bewegungen, Crossovers
und Digests beobachten und Signale an Ihr Canvas feuern. Dieser Kern hat sich
nicht geändert. Drumherum ist fast alles tiefer geworden: mehr Bedingungen
zum Auslösen, mehr Orte, an denen Signale landen können, und ein Builder, der
Ihnen nicht im Weg steht.

## Neue Bedingungen zum Auslösen

Der Processor-Katalog ist gewachsen. Neben Schwellenwerten, % Änderung und
Moving-Average-Crossovers werten Bots jetzt aus:

- **RSI** — löst aus, wenn das Momentum in überkauftes oder überverkauftes
  Terrain kreuzt
- **Volume-Spikes** — fangen ungewöhnliche Aktivität ab, auf die der Preis
  noch nicht reagiert hat
- **Neue Trades** — feuern bei frischen Fills eines verbundenen Kontos
- **Wallet-Aktivität und -Balance** — beobachten On-Chain-Adressen, mehr dazu
  in unserem [Beitrag zu Wallets](/de/blog/wallets-on-the-canvas)

Wie immer gilt: Beschreiben Sie die Regel in einem Satz und lassen Sie die KI
den Bot entwerfen — oder verdrahten Sie ihn visuell und justieren Sie jeden
Parameter selbst.

## Signale gehen dorthin, wo Sie arbeiten

Das Signal eines Bots erreichte bisher Ihre Inbox und Ihre Widgets. Zwei neue
Ziele ändern, wofür Bots da sind:

- **Webhooks** — jedes Signal geht per POST an eine URL, die Sie benennen.
  Das ist Discord, Slack oder Telegram über deren Webhook-URLs — oder Ihr
  eigener Server. Ihr Bot wird zum Producer, den jedes System konsumieren
  kann.
- **Ihre Datenbank** — jedes Signal wird als Zeile an eine Ihrer verbundenen
  Datenbanken angehängt. Lassen Sie einen Bot einen Monat laufen und Sie
  haben ein abfragbares Log jedes Triggers, bereit für ein Widget zum
  Charten.

Delivery ist ein Set, keine Entweder-oder-Wahl — ein Bot kann Sie
benachrichtigen, Ihre Widgets aktualisieren, Discord anpingen und die Zeile
schreiben, alles vom selben Trigger.

## My bots und Create, endlich getrennt

Das Bots-Panel trennt jetzt **My bots** — Ihre laufende Flotte, mit Status
auf einen Blick — von **Create**, wo neue Bots entstehen. Das Formular selbst
wurde leichter: Optionale Abschnitte bleiben eingeklappt, bis Sie sie
brauchen. Eine einfache Schwellenwert-Alert dauert Sekunden, während die
volle Tiefe einen Klick entfernt bleibt.

## Entwürfe starten sicher

Ein bewusstes Detail: Wenn die KI einen Bot für Sie entwirft, startet sein
Webhook-Sink **leer**. Eine generierte Automatisierung wird nie mit einem
Ziel ausgeliefert, das Sie nicht selbst eingetippt haben — Sie entscheiden,
wohin Signale gehen, explizit, jedes Mal.

[Starten Sie Nexow](https://x.nexow.ai), öffnen Sie Bots und geben Sie Ihrer
nächsten Alert einen besseren Landeplatz als eine Inbox.
