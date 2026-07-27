---
title: 'Eén werkruimte, elk apparaat: diepere sync, nieuwe bibliotheken, een slimmere privémode'
description: 'Widgetchats volgen je nu live over apparaten heen, schermen en werkruimtes hebben eigen bibliotheken, gearchiveerde concepten behouden hun gesprekken, en privémode bergt je cloudstatus op in plaats van hem te verliezen.'
pubDate: 2026-07-20
heroImage: ../../../assets/blog/sync-library.svg
tags: ['product', 'sync', 'werkruimte']
---

Cloudsync betekende tot nu toe dat je widgets en indelingen met je meereisden.
Deze release laat ook de *rest* meereizen — gesprekken, bibliotheken, zelfs de
status van je automatiseringen wanneer je privémode in- en uitstapt.

## Gesprekken synchroniseren live

De chat van een widget is de helft van zijn waarde: de prompts, de
aanpassingen, de redenering. Widgetthreads worden nu **live toegepast over
apparaten heen** — verlaat een gesprek op de desktop, open de laptop, en de
thread staat er, actueel, zonder refresh.

Onder de motorkap zijn widgetrecords opgesplitst in hoofd-, versie- en
chatdocumenten, zodat een snel bewegend gesprek niet langer complete
widgetpayloads meesleept. Jij merkt het als sync die bijblijft.

## Bibliotheken voor schermen en werkruimtes

De bibliotheek bevatte vroeger widgets. Hij heeft nu ook tabbladen voor
**schermen** en **werkruimtes** — sla een complete indeling één keer op,
hergebruik hem overal, en hij synchroniseert zoals al het andere.
Gecombineerd met de marktplaats is de weg van "mijn favoriete scherm" naar
"gepubliceerd asset" twee klikken lang.

Ook archiveren werd vriendelijker: een gearchiveerde conceptwidget **behoudt
zijn gesprek**, en wie hem weer oppakt hervat de chat waar die ophield — het
archief is nu een plank, geen papierversnipperaar. En blijft een widgetrecord
ooit verweesd achter door een onderbroken operatie, dan vindt de bibliotheek
hem en herstelt hem in plaats van hem te laten weglekken.

## Privémode: opbergen, niet vernietigen

De regel van Nexow is dat de cloud opt-in is — en je kunt er ook weer uit
stappen. Wie nu **privémode** ingaat, ziet zijn cloudstatus *opgeborgen*:
gedeployde agents en cloudbotbestemmingen worden geparkeerd, niet verwijderd.
Verlaat privémode en ze worden precies zo hersteld als ze waren,
databasebestemmingen inbegrepen. Privé gaan is niet langer een besluit waar
je voor betaalt als je terugkomt.

Realtime sync zelf is nu ook een onthouden voorkeur — zet hem één keer uit en
hij blijft uit over sessies heen tot jij anders beslist.

## Met opzet saai

De rest van het werk merk je hopelijk nooit op: layoutpushes zijn
compare-and-set zodat twee apparaten elkaar niet stilletjes kunnen
overschrijven, een apparaat negeert de echo van zijn eigen schrijfacties, en
offline wijzigingen worden bijgehouden in een outbox die opnieuw afspeelt
zodra je terug bent. Sync waar je niet over nadenkt, dat is de feature.

[Start Nexow](https://x.nexow.ai) op twee schermen en zie één werkruimte zich
ook zo gedragen.
