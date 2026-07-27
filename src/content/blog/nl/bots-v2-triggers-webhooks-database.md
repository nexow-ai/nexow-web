---
title: 'Bots v2: RSI- en volumetriggers, bezorging via webhooks en database, en een opgeruimdere bouwer'
description: 'Cloud bots leerden nieuwe trucs — RSI- en volumepiekcondities, tradewatchers, signalen die naar je webhooks POSTen of aan je database toevoegen, en een bouwer opgesplitst in Mijn bots en Aanmaken.'
pubDate: 2026-07-22
heroImage: ../../../assets/blog/bots-v2.svg
tags: ['product', 'automatisering', 'bots']
---

Toen bots lanceerden, konden ze drempels, procentuele bewegingen, crossovers
en samenvattingen bewaken, en signalen naar je canvas vuren. Die kern is niet
veranderd. Eromheen werd bijna alles dieper: meer condities om op te
triggeren, meer plekken waar signalen kunnen landen, en een bouwer die je niet
in de weg zit.

## Nieuwe condities om op af te gaan

De processorcatalogus groeide. Naast drempels, % verandering en crossovers van
voortschrijdende gemiddelden evalueren bots nu:

- **RSI** — slaat aan wanneer het momentum overbought of oversold gebied
  binnengaat
- **Volumepieken** — vang ongebruikelijke activiteit op waar de prijs nog niet
  op heeft gereageerd
- **Nieuwe trades** — vuurt bij verse fills van een gekoppeld account
- **Walletactiviteit en -saldo** — bewaak on-chain adressen, behandeld in onze
  [wallets-post](/nl/blog/wallets-on-the-canvas)

Zoals altijd: beschrijf de regel in één zin en laat AI de bot opstellen, of
bouw hem visueel en stel elke parameter zelf bij.

## Signalen gaan naar waar jij werkt

Het signaal van een bot bereikte tot nu toe je inbox en je widgets. Twee
nieuwe bestemmingen veranderen waar bots voor dienen:

- **Webhooks** — POST elk signaal naar een URL die jij opgeeft. Dat is
  Discord, Slack of Telegram via hun webhook-URL's, of je eigen server. Je bot
  wordt een producent die elk systeem kan consumeren.
- **Je database** — voeg elk signaal als rij toe aan een van je gekoppelde
  databases. Laat een bot een maand draaien en je hebt een bevraagbaar logboek
  van elke trigger, klaar om door een widget in kaart te worden gebracht.

Bezorging is een verzameling, geen keuze — één bot kan jou informeren, je
widgets bijwerken, Discord pingen en de rij wegschrijven, allemaal vanuit
dezelfde trigger.

## Mijn bots en Aanmaken, eindelijk gescheiden

Het botspaneel scheidt nu **Mijn bots** — je draaiende vloot, met status in
één oogopslag — van **Aanmaken**, waar nieuwe bots vorm krijgen. Het formulier
zelf werd lichter: optionele secties blijven ingeklapt tot je ze nodig hebt,
zodat een simpele drempelwaarschuwing seconden kost terwijl de volledige
diepte één klik verderop blijft.

## Concepten beginnen veilig

Eén bewust detail: wanneer AI een bot voor je opstelt, begint zijn
webhookbestemming **leeg**. Een gegenereerde automatisering wordt nooit
geleverd met een bestemming die je niet zelf hebt getypt — jij bepaalt waar
signalen heengaan, expliciet, elke keer.

[Start Nexow](https://x.nexow.ai), open Bots en geef je volgende waarschuwing
een betere landingsplek dan een inbox.
