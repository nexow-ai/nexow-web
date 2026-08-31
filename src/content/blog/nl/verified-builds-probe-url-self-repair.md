---
title: 'Widgets die hun eigen leiding controleren: probe_url, verifier-agent en één gratis reparatie'
description: 'De grootste bron van dode widgets was code tegen een ingebeelde API. Nu haalt de builder het endpoint tijdens het schrijven, een verifier her-probet wat overgeslagen werd, en een crash in 45 seconden koopt één automatische fix.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/verify.svg
tags: ['product', 'ai', 'hoe-het-werkt']
---

De meest voorkomende manier waarop een gegenereerde widget faalde was geen bug in
de gegenereerde code. Het was een endpoint dat nooit bestond.

Het model greep naar een URL uit het geheugen — of uit een directoryregel waarvan
de link een *documentatiepagina* is, geen endpoint — raadde de response-vorm,
schreef zorgvuldige parsingcode tegen die gok en leverde. Wat je kreeg was een
eeuwige spinner of een lege chart, met niets op het scherm dat uitlegde waarom.

Deze release sluit die loop drie keer: terwijl het model schrijft, direct nadat
het schrijft, en nog een keer als het ding nog steeds voor je neus crasht.

## Tijdens het schrijven: `probe_url`

De builder heeft nu een tool die **nu een keyless public endpoint GET**, via
exact dezelfde serverproxy die `ctx.data.http()` runtime gebruikt, en de echte
HTTP-status en het echte response-body teruggeeft.

Die identiteit is het hele punt. Een probe die slaagt *is* een runtime-call die
slaagt. Een probe die faalt is een widget die kapot was uitgeleverd — en hij faalt
nu, terwijl er nog een beurt over is om te fixen, in plaats van op je canvas.

Hij staat onderaan een ladder die de builder wordt verteld te werken in plaats van
uit het geheugen te redeneren: venue-referentiedocs eerst, dan een **directory van
691 keyless public APIs in 47 categorieën**, doorzoekbaar op topic over elke
entry's naam *en* beschrijving — omdat echte requests («getijden», «luchtkwaliteit»)
zeldzaam mappen op een categorie die iemand zou raden. Die directory is nu
altijd beschikbaar voor de builder, wat er verder in scope is, omdat het de
universele keyless fallback is. De links zijn documentatie, dus de laatste stap
is altijd hetzelfde: leid het endpoint af, en probeer het.

«Is er data voor X?» is een vraag die je beantwoordt door te kijken, niet door te
redeneren over welke datasets waarschijnlijk bestaan. Het einde van de ladder
bereiken en *nee* zeggen na echt te hebben gekeken is een prima uitkomst. Het uit
het geheugen beweren is dat niet, en het was veel vaker fout dan het leek.

## Direct erna: de verifier

Het model vragen zijn eigen werk te verifiëren is een verzoek, geen garantie. Dus
op het moment dat de widgetcode landt, gebeuren twee dingen die niet afhangen van
het model dat meewerkt.

Eerst **noemt het toolresultaat de endpoints die het deze beurt nooit probeerde**
en zegt het ze te checken zolang er rondes over zijn.

Tweede — en dit is het deel dat niet op medewerking vertrouwt — draait een
verifier **gelijktijdig terwijl het model zijn samenvatting schrijft**, en doet
het werk zelf:

- **Lint de module** op de faalklassen die stil zijn by construction. Een
  ontbrekende `render`-export. Code die niet parseert. Een ruwe `fetch` of
  `WebSocket` naar een third-party host, die de sandbox blokkeert — de meest
  schadelijke stille faal in gegenereerde widgets, omdat er niets in de console
  verschijnt. Een externe afbeelding- of video-URL direct aan een `src`
  toegewezen. Een hardcoded tile-URL aan een maplibrary gegeven, die mount en
  panned perfect terwijl elk tilerequest stilletjes wordt geweigerd.
- **Probe elk endpoint dat het model oversloeg** (tot vijf per module), en lees
  het verdict zoals het model zou: onbereikbaar, of een 4xx die zegt dat de URL
  of parameters fout zijn.

Echte problemen kopen **één automatische in-turn repairronde**, met probe-output
als bewijs en instructie om alleen te fixen wat genoemd werd. Die ronde gebeurt
terwijl de volledige buildcontext nog heet is — veel goedkoper dan kapot
uitleveren en later een hele nieuwe beurt eraan besteden. Als het model de module
mid-flight herschrijft, wordt de al lopende verificatie vervangen en het verdict
weggedaan. En een verifier die intern faalt verifieert schoon: hij kan een build
vertragen, nooit breken.

## Als het nog crasht: één reparatie, hard begrensd

Self-repair-context voerde runtimefouten al in de *volgende* chatbeurt — maar
alleen wanneer je er één stuurde. Een widget die seconden na zijn build crashte,
bleef kapot tot je het merkte, de composer heropende en «het is kapot» typte.

Nu besteedt de runtimehost **één automatische fixbeurt** wanneer een verse build
crasht. Een automatische beurt is de app die je credits of je key uitgeeft, dus
de grenzen zijn bewust strak:

- alleen de versie die een AI-build *net* produceerde — een crash in een oude
  versie die je herstelde, of in code die je handmatig bewerkte, kwalificeert
  nooit;
- alleen binnen **45 seconden** van die build, omdat een crash een uur later
  nieuwe informatie voor jou is, geen voor de hand liggend builddefect;
- **één keer per versie**, en een versie geproduceerd *door* een auto-repairbeurt
  is zelf ineligible. Eén build kan hoogstens één automatische follow-up
  triggeren — nooit een keten van het model dat zichzelf betaalt om te blijven
  falen.

De repairbeurt is geformuleerd als de app die een defect rapporteert, en draagt
dezelfde instructie als alles hierboven: als de faal een data-endpoint betreft,
probeer het voordat je herschrijft. Fix het, houd wat werkt, laat de scope van de
widget niet groeien.

Aan serverzijde wacht een geredde background-build nu wanneer een andere beurt
van dezelfde widget al live is, in plaats of daartegen te racen naar een
dubbele versie.

## Dezelfde loop, elke modus

Dit alles leeft in één gedeelde module, dus platformbuilds, bring-your-own-key-
builds in de browser en de server-side build sweep krijgen **identiek** gedrag —
dezelfde tools, dezelfde probe-opmaak, dezelfde verifier, hetzelfde
repairbudget. De modi kunnen niet divergeren over welke tools bestaan of hoe
streng een widget wordt gecheckt, omdat er maar één implementatie van het
antwoord is. Het is ook de loop die [de tien voorbeeldwidgets](/blog/starter-widgets-examples-workspace)
produceerde die met de volgende release meekomen: ze zijn precies hierdoor
gebouwd, met precies deze checks.

Geen enkel deel maakt een model correct. Het maakt fout zijn overleefbaar, en
meestal onzichtbaar: het endpoint wordt gecheckt voordat de code ervan afhangt,
de check draait of het model zin had om hem te draaien of niet, en de eerste crash
krijgt één eerlijke fixpoging voordat hij jou bereikt.

[Start Nexow](https://x.nexow.ai) en vraag iets obscuurs — getijden, luchtkwaliteit,
feestdagen. Kijk hoe de activity rail het endpoint probeert voordat er een regel
parsingcode wordt geschreven.
