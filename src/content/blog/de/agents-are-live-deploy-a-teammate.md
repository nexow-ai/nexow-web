---
title: 'Agents sind live: Geben Sie Ihrem Workspace einen Teamkollegen in der Cloud'
description: 'Der Harness-Builder war das Versprechen; der Deploy-Button ist die Einlösung. Bauen Sie einen Agent aus Modell, Memory, Skills, Tools und Triggers, deployen Sie ihn in die Cloud und verfolgen Sie jeden Run in einer Live-Timeline.'
pubDate: 2026-07-27
heroImage: ../../../assets/blog/agents-live.svg
tags: ['produkt', 'agenten', 'automatisierung']
---

Vor ein paar Wochen haben wir angekündigt, dass Agents kommen: KI mit vollem
Harness, die selbstständig beobachtet, schlussfolgert und handelt. Heute sind
sie da. Sie können einen Agent bauen, ihm Tools geben, **ihn in die Cloud
deployen** und ihm bei der Arbeit zusehen — nach Zeitplan, bei geschlossenem
Tab.

Hier ist, was geliefert wurde.

## Der Harness, jetzt mit Deploy-Button

Ein Agent in Nexow ist mehr als ein Prompt. Sie setzen ihn aus einem
**Harness** zusammen — Modell, Memory, Skills, Tools, Knowledge und Triggers —
in einem visuellen Builder. Diesen Teil kennen Sie vielleicht schon. Neu ist
der letzte Schritt: **Deploy**.

Beim Deployen wird ein Snapshot Ihres Agents erstellt und an Nexows
Cloud-Runtime übergeben. Von da an läuft er auf eigenem Heartbeat — alle 15
Minuten, stündlich, täglich, in welchem Takt auch immer Sie festlegen — ohne
dass Ihr Browser offen ist. Mit **Run now** stoßen Sie außerdem jederzeit
manuell einen Lauf außer der Reihe an.

## Tools werden gewährt, nicht vorausgesetzt

Ein Agent fasst nur an, was Sie ihn anfassen lassen. Jedes Tool in seinem
Harness ist **grant-gated**: Sie entscheiden, ob er Ihre Verbindungen lesen,
Benachrichtigungen senden, in Widgets schreiben darf und so weiter. Kein
Grant, kein Zugriff — der Agent sieht das Tool schlicht nicht.

Das macht es sicher, einem Agent einen echten Job zu geben. Ein Bot sagt
Ihnen, dass BTC 5 % gefallen ist; ein Agent kann angewiesen werden, *in dem
Moment Order Book und Funding Rate zu prüfen und aufzuschreiben, was er
gefunden hat* — mit exakt dem Zugriff, den Sie freigegeben haben.

## Memory zwischen den Runs

Agents behalten **Memory** über Runs hinweg. Was Ihr Agent im Montagslauf
gelernt hat, ist am Dienstag noch da — er kann eine These über die Zeit
verfolgen, Veränderungen bemerken, statt Momentaufnahmen immer neu zu
beschreiben, und Arbeit überspringen, die er bereits erledigt hat.

## Jeder Run, dokumentiert

Deployte Agents führen eine **Run-Timeline**: wann jeder Run gestartet ist, ob
er sauber durchlief, fehlschlug oder übersprungen wurde, und was darin
passiert ist — live gestreamt, während der Run ausgeführt wird. Öffnen Sie
einen beliebigen Run und lesen Sie die vollständige Konversation: was der
Agent gesehen hat, welche Tools er aufgerufen hat und zu welchem Schluss er
kam. Stolpert ein vorgelagertes Modell, landet auch das in der Historie —
benannt als das, was es ist, kein Mysterium.

Sie behalten durchgehend die Kontrolle: **pausieren** Sie einen Agent, setzen
Sie ihn **fort**, deployen Sie einen aktualisierten Harness neu oder
**undeployen** Sie ihn ganz. Ihr Plan bestimmt, wie viele Agents Sie
gleichzeitig deployed halten können.

## Weiterhin private by default

Das Prinzip hat sich nicht bewegt: Die Cloud ist etwas, wofür Sie sich
explizit entscheiden. Einen Harness zu bauen kostet nichts und berührt keinen
Server; das Deployen ist eine bewusste Entscheidung pro Agent, und der private
Modus pausiert Cloud-Runs, statt sie stillschweigend weiterlaufen zu lassen.

Bots beobachten. Agents handeln. [Starten Sie Nexow](https://x.nexow.ai),
öffnen Sie das Agents-Panel und nehmen Sie Ihren ersten Teamkollegen in
Dienst.
