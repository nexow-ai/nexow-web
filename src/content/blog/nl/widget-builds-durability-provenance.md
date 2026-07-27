---
title: 'Widgets bouwen waarop je kunt vertrouwen: bestendige builds, eerlijke versies, lint in de chat'
description: 'De composer kreeg een geheugen en een geweten — builds overleven verbroken verbindingen en proberen netjes opnieuw, elke versie legt vast waar hij vandaan komt, en lint- en runtimeproblemen landen in de chat, niet in een console.'
pubDate: 2026-07-21
heroImage: ../../../assets/blog/builds.svg
tags: ['product', 'widgets', 'ai']
---

Prompt-naar-widget was altijd het flitsende deel. Deze release gaat over de
onglamoureuze helft van die belofte: wat er gebeurt wanneer het netwerk
halverwege een build wegvalt, wanneer een generatie mislukt, wanneer je wilt
weten naar welke versie van een widget je eigenlijk kijkt. Het antwoord, nu:
niets raakt verloren, en niets wordt achter je rug herschreven.

## Builds die jou overleven

Widgetbuilds zijn nu **bestendige taken**. Klap de laptop dicht midden in een
generatie, verlies je wifi, refresh op het slechtste moment — de build houdt
zijn plek op de server vast en maakt het zonder jou af. Mislukt een beurt
toch, dan zit er een **Opnieuw proberen** direct op, en die werkt zelfs nadat
een verbroken verbinding de zaak in een rare staat achterliet. Verouderde
builds kunnen de composer niet meer vastzetten.

Je woorden zijn net zo bestendig: een onverzonden prompt in de composer blijft
bij de widget bewaard, zodat een slecht getimede refresh niet de alinea opeet
die je net wilde versturen.

## Versies met herkomst

Elke widgetversie legt nu vast **waar hij vandaan komt** — een prompt, een
aanpassing, een handmatige opslag — en bewerkingen maken nieuwe versies aan
in plaats van oude ter plekke te herschrijven. De eerste versie van elke
widget, zijn **genesis**, wordt nooit opgeruimd: je kunt altijd terugscrollen
naar wat de allereerste prompt opleverde. En wanneer een versiechip in de chat
wijst naar geschiedenis die wel is opgeruimd, zegt de chat dat gewoon in
plaats van te doen alsof.

## De build vertelt je wat eraan schort

Gegenereerde code wordt gecontroleerd, en de bevindingen gaan naar waar je al
kijkt: **lint- en runtimeproblemen verschijnen op de chatballon van de
build**, als onderdeel van het gesprek. Los ze op door te antwoorden — de
problemen zijn context die de volgende beurt al kent.

De sandbox bleef streng, en werd strenger: widgets kunnen geen directe
netwerkaanroepen doen — data komt via connectors — en de assets die ze mogen
laden zijn vastgepind op bekende origins.

## Rijkere gesprekken

De composer kreeg **bijlagen** — sleep een afbeelding in de chat om de AI te
laten zien wat je bedoelt — en **vastgepinde verbindingen**, zodat het gesprek
van een widget altijd weet tegen welke databronnen hij bouwt. Bouw je met je
eigen API-sleutel, dan zien andere apparaten op je account de build in
uitvoering in plaats van een mysterieuze bezet-status.

Niets hiervan verandert hoe bouwen voelt: beschrijven, kijken, verfijnen. Het
verandert hoeveel je kunt vertrouwen op wat eruit komt.

[Start Nexow](https://x.nexow.ai) en verbreek je verbinding midden in een
build — wij maken hem zonder jou af.
