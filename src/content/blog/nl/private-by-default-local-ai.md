---
title: 'Privé standaard: waarom je AI marktworkstation lokaal moet werken'
description: 'Nexow werkt standaard volledig lokaal — breng je eigen sleutelcodegen in de browser mee, IndexedDB-persistentie en directe verbindingen naar locaties. Dit is wat privé-standaard betekent en waarom het voor traders belangrijk is.'
pubDate: 2026-07-01
heroImage: ../../../assets/blog/private.svg
tags: ['privacy', 'architectuur', 'security']
---

De meeste AI-tools verzenden je gegevens standaard naar een server. Voor een marktworkstation — waar je sleutels, posities en strategieën het hele spel zijn — is die standaard achterwaarts. Nexow keert dit om: **privé standaard, lokaal ontworpen.**

Dit is wat het werkelijk betekent.

## Breng je eigen sleutelcodegen in de browser mee

In privémode voeg je je eigen Anthropic API-sleutel toe, en widgetgeneratie wordt client-side uitgevoerd. Wanneer je een widget opvraagt, gaat het verzoek van je browser naar Anthropic met je sleutel — niet door Nexow-infrastructuur. Een onverifieerde sessie kost ons niets omdat er niets te runnen is: het werk gebeurt op je machine.

## Je widgets wonen in je browser

Elke widget die je bouwt, elke versie, elk logboek, en je volledige widgetbibliotheek blijven behouden in je browser's **IndexedDB**. Ze zijn offline beschikbaar en niet aan een account gebonden. Wis je opslag en ze zijn weg — er is geen kopie aan de server zijde omdat er nooit een serverupload was.

## Directe verbindingen naar locaties

Waar het CORS-beleid van een locatie het toestaat, verbindt Nexow ermee **rechtstreeks vanuit je browser**, volledig de proxy omzeild. Je ruilreferenties worden gebruikt om met de ruilwinkel te spreken — niet om met ons te spreken. Minder hops betekent lagere latentie en een kleiner vertrouwensoppervlak.

## Waarom privé-standaard belangrijk is

- **Beveiliging.** Hoe minder partijen je sleutels aanraken, hoe minder plaatsen waar ze kunnen uitkomen. Lokaal-eerst verwijdert ons volledig uit het pad in privémode.
- **Latentie.** Directe verbindingen overslaan een netwerkhop, wat belangrijk is wanneer je een orderboek bekijkt.
- **Eigenaarschap.** Je dashboards zijn van jou. Geen lock-in, geen export dans — ze wonen op je machine.
- **Kosten.** Je betaalt alleen voor je eigen modelgebruik, zonder opslag en zonder abonnement vereist om vandaag op het canvas te bouwen.

## De afwegingen, eerlijk

Lokaal-eerst is niet vrij van afwegingen. Sommige locaties staan geen browser-directe verbindingen toe en moeten via een dunne proxy routeren. Lokale persistentie betekent dat je werk aan een browserprofiel is gebonden totdat je ervoor kiest te synchroniseren. En je eigen sleutel gebruiken betekent je eigen gebruik beheren. We denken dat dit de juiste afwegingen zijn voor een tool die dit dicht bij je geld zit.

Nu we hosted plans, trading agents en servercomponenten toevoegen, blijft het principe vast: **je sleutels, je gegevens, je machine** — tenzij je expliciet in de cloud opteert.

[Start Nexow](https://x.nexow.ai) en zie privémode zelf.