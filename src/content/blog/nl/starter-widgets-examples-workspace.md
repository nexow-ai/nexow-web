---
title: 'Tien voorbeeldwidgets leveren nu mee met Nexow — inclusief het gesprek'
description: 'Een nieuw account opent niet meer op een leeg canvas. Tien af widgets komen als Voorbeelden-workspace, elk met het echte chatgesprek en de echte versiegeschiedenis — gebouwd door dezelfde codegen-loop als jij, zonder verbindingen.'
pubDate: 2026-08-09
heroImage: ../../../assets/blog/starters.svg
tags: ['product', 'onboarding', 'widgets']
---

Het moeilijkste scherm in Nexow was altijd het eerste: een leeg canvas, een
promptbox en geen bewijs dat het werkt. Je kon de docs lezen, of iets typen en
hopen.

Met de volgende release start een nieuw account in een **Voorbeelden-workspace** —
tien af widgets over drie schermen, allemaal draaiend bij eerste load, met
**niets verbonden**. Geen screenshots, geen rondleiding. Werkende widgets die je
kunt openen, bewerken, uit elkaar halen en overschrijven met publicatie.

## Wat zit in het pakket

**Live wereld** — een wereldklok met een dag/nacht-ring en een overlapbalk voor
kantooruren; een zeven-daagse weersverwachting met een uurlijkse curve; elke
aardbeving van het afgelopen uur, dag of week op een live kaart, geschaald op
magnitude; en live luchtkwaliteit met het vervuilende stof dat de index drijft.

**Markten** — Binance-candlesticks met een live laatste candle en een 24u-
veranderingsbadge; een FX-converter op ECB-referentietarieven met 90 dagen
historie; de meest actieve Polymarket-vragen en wat de menigte gelooft; en elke
Wereldbank-indicator, voor twee landen tegelijk, als lange-termijnchart.

**Maken en spelen** — een prikbord dat reloads overleeft via durable per-item
opslag, en Wikipedias «op deze dag»-feed met thumbnails en een datumkiezer.

Elke bron is keyless: Open-Meteo, USGS, Binance-publieke data, Frankfurter,
Polymarket, de Wereldbank, Wikipedia. Dat is een regel, geen toeval — een
voorbeeld dat opent met «Verbind OANDA» is erger dan een leeg canvas.

## Ze zijn echt gebouwd, niet geschreven

Elk voorbeeld begon als een brief geschreven zoals een mens typt — wat ze willen
en waarom, geen specificatie. `starter:build` voert die briefs door
**`runWidgetToolLoop`**: dezelfde module die zowel de platform-codegenroute als
het bring-your-own-key-pad in de browser aandrijft, met hetzelfde contract, dezelfde
tools en dezelfde in-turn verifier. Geen HTTP-stream, geen creditledger, geen
browser — maar dezelfde loop.

De transcript die je in het chat-tabblad van een widget vindt is het echte
gesprek, en elke beurt die code produceerde is een echte versie op de rail. De
meeste hebben er drie. **Luchtkwaliteit heeft er vijf**, omdat de eerste drie
openden op een lege «voer een stad in»-box, en de vijfde beurt is een bugrapport:
zes vervuilings-tegels die allemaal een streepje tonen, en een timestamp die
*«-6375 min geleden»* leest. Die build zit in het pakket precies zoals het
gebeurde.

Cruciaal: de briefs draaien **zonder providers gekoppeld** — precies wat een nieuw
account heeft. Wat uit die loop komt werkt op iemands eerste dag.

## Geen tweede catalogus

Elk voorbeeld is een gewoon marketplace-asset, gepubliceerd door het officiële
account via dezelfde RPC als ieders werk: dezelfde sanitizers, dezelfde
lineage-grafiek, hetzelfde installatiepad, dezelfde royaltyketen. Niets aan een
starter-widget is speciaal op de server — fork er één en je zet een echte lineage
voort in plaats van te ontdekken dat de eigen voorbeelden van de app in een
privé-dialect leven.

Een curatieregister zit erbovenop en bevat alleen de curatie: welke gepubliceerde
assets het pakket vormen, in welke volgorde, op welk scherm. Schrijven is alleen
service-role; lezen is publiek, omdat een uitgelogde bezoeker misschien naar een
listingpagina kijkt.

## Waar het pakket landt, en wat het niet doet

Seeding is drievoudig begrensd. Het draait **één keer per account, niet per
apparaat** — de vlag is een gerepliceerde instelling, opnieuw gelezen bij
accountswitch. Het seed nooit een canvas dat iemand al heeft gebruikt. En het kan
gedwongen worden via **Instellingen → Algemeen → Voorbeeldwidgets toevoegen**,
voor accounts die ouder zijn dan het pakket of voor iedereen die de workspace
heeft verwijderd en hem terug wil.

De voorbeelden landen *naast* je eigen lege workspace in plaats van die te
vervangen, zodat onboarding je nog steeds een schoon scherm geeft om op te typen.
Het hele pakket is één undo-stap.

Elke geseede widget is gestempeld als de marketplace-installatie die het echt is,
zodat verbeteren en publiceren de officiële lineage voortzet in plaats van een
rivaliserende kopie te starten. En wanneer we een betere versie van een
voorbeeld uitbrengen, **houden al-geseede gebruikers die van hen** — het is hun
widget nu, mogelijk bewerkt. Er is geen push-updatepad, en dat hoort ook niet.

## Geverifieerd als pakket, niet op het oog

Voordat ze een account bereiken, draait het hele pakket in echte Chrome en wordt
per widget beoordeeld: bootfouten, runaway animatieloops, trage frames, lege
renders — plus een screenshot elk. Een aparte live check leidt elk publiek
endpoint af uit de gecommitte code en bevestigt dat het nog antwoordt, zodat de
test niet veroudert terwijl de widgets dat wel doen.

De lat voor een elfde is dezelfde als voor deze tien: nul verbindingen, een schone
smoke-verdict, een echte boodschap in plaats van een lege tegel wanneer de
databron een slechte dag heeft, en niets persoonlijks ergens in het gesprek —
omdat het gesprek mee verzendt.

Het pakket gaat mee met de volgende release, en bestaande accounts kunnen het
binnenhalen via **Instellingen → Algemeen** wanneer ze willen. Open er één, lees
de chat die hem bouwde, en verander iets — dat is nog steeds de snelste manier om
te leren wat het canvas kan.

[Start Nexow](https://x.nexow.ai) en begin ondertussen met bouwen.
