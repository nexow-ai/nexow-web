---
title: 'Van prompt naar live widget: hoe Nexow een zin in een handelsdashboard verandert'
description: 'Een blik onder de motorkap hoe Nexow een draaiende, gegevensverbonden marktwidget genereert op basis van een prompt in gewone taal — codegen, sandboxing en live connectors uitgelegd.'
pubDate: 2026-06-24
heroImage: ../../../assets/blog/codegen.svg
tags: ['product', 'ai', 'hoe-het-werkt']
---

Een handelsdashboard bouwen heeft altijd dezelfde sleur betekend: vind een API, lees de documentatie, gedoe met een websocket, normaliseer de payload, kies een grafiekbibliotheek, vecht met de layout, en herhaal dit voor elk instrument waar je om geeft. Nexow verplettert die hele lus in één zin.

Dit is wat werkelijk gebeurt tussen het typen van een prompt en het kijken naar een live widget die op je canvas verschijnt.

## 1. Je beschrijft wat je wilt zien

Een prompt is slechts natuurlijke taal:

> Toon een kandelstakgrafiek van BTC-USD van Coinbase met 20 en 50 EMA, en een RSI-paneel eronder.

Er is geen schema om te leren en geen configuratiebestand. Je beschrijft het resultaat — het instrument, de locatie, de indicatoren, de layout — zoals je het aan een collega zou beschrijven.

## 2. Nexow genereert de widgetbron

Nexow stuurt je prompt naar Anthropic's Claude-modellen via de Anthropic SDK, samen met de context die het nodig heeft: welke connectors beschikbaar zijn, de vorm van de gegevens die ze retourneren, en het runtime-contract dat een widget moet erfüllen. Claude schrijft de werkelijke broncode van de widget — de ophaallogica, de transformaties en de rendering.

Omdat het model echte code schrijft in plaats van een vaste sjabloon in te vullen, is het bereik van wat je kunt bouwen open-ended: orderboekdieptegrafeken, financieringsheatmaps, correlatiematrices, aangepaste signalen, gewone tabellen. Als je het kunt beschrijven, kan Nexow het meestal bouwen.

## 3. De widget werkt in sandbox

Gegenereerde code is krachtig, dus het werkt achter een strikte grens. Elke widget wordt geëxecuteerd in een geïsoleerde iframe: het kan zijn UI renderen en de gegevens ophalen die het nodig heeft, maar het kan niet in je werkruimte reiken, andere widgets lezen of iets aanraken wat niet aan het werd gegeven. Kracht zonder risico.

## 4. Live-gegevens stromen in via connectors

Een widget is alleen nuttig met echte gegevens. Nexow levert meer dan 20 aansluitbare connectors die FX, crypto, aandelen, futures, opties en voorspellingsmarkten omspannen — OANDA, Binance, Coinbase, Kraken, Interactive Brokers, Polygon, Kalshi, Polymarket en meer. De widget abonneert zich op de locatie die je noemde, en prijzen, orderboeken en referentiegegevens stromen rechtstreeks in.

Waar het CORS-beleid van een locatie het toestaat, worden die oproepen **rechtstreeks vanuit je browser** uitgevoerd en gaan ze nooit door onze servers — wat de latentie laag houdt en je referenties op je machine.

## 5. Je verfijnt het in gewone taal

De eerste generatie is zelden de laatste. Alles blijft door conversatie bewerkbaar: *"voeg een 200 EMA toe"*, *"schakel over naar logaritmische schaal"*, *"kleur de kaarsen op financieringspercentage."* Nexow herschrijft de widget ter plaatse, versiet de wijziging, en houdt een logboek bij dat je kunt inspecteren of terugdraaien.

## Waarom dit belangrijk is

Het traditionele pad van idee naar grafiek wordt gemeten in uren. Met Nexow wordt het in seconden gemeten, en het artefact dat je krijgt is een echte, inspecteerbare widget — niet een zwarte doos. Het dashboard stelt zich samen, en jij behoudt de controle over de code, de gegevens en de sleutels.

Klaar om het te proberen? [Start de app](https://x.nexow.ai) en beschrijf je eerste widget.