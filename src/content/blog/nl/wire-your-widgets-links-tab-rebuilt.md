---
title: 'Verbind je widgets: één oppervlak, één zin en een Testen-knop'
description: 'Alles waarmee een widget verbonden kan worden zit nu achter één zoekvak — widgets, verbindingen, bots en agents. Beschrijf de bedrading en stuur een echt event om te zien welk uiteinde kapot is.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/wires.svg
tags: ['product', 'widgets', 'automatisering']
---

Een **link** draagt events tussen twee widgets: wijzig het symbool in de ene en de
andere reageert. Zet Tweerichtings aan en ze blijven beide kanten op sync. Het is
het verschil tussen een scherm vol losse tegels en een scherm dat zich gedraagt
als één instrument.

Het idee was goed. Het vinden niet, en weten of het werkte ook niet. Beide zijn
in deze release opgelost.

## Eén oppervlak, en «Alle» betekent echt alle

De picker was gesplitst over twee sub-tabbladen — *Widgets* en *Bronnen* — wat
betekende dat de helft van je inventaris altijd achter een toggle zat die je
moest weten te drukken. Een widget alleen op zijn scherm toonde een leeg raster,
zonder hint dat bots, agents en verbindingen überhaupt bestonden.

Nu is er één zoekvak en één rij kind-filters over alles: andere widgets op dit
scherm, in deze workspace of elders; je dataverbindingen; je bots; je agents.
**Alle** toont alles.

De volgorde veranderde ook. **Mijn bedrading** staat nu *boven* het browse-
oppervlak. Vroeger zat het onder een picker-raster dat tientallen tegels kon
hebben, dus de lijst waar je terugkomt om te beheren — dit uitzetten, dat
verwijderen — was wat je voorbij al het andere moest scrollen, terwijl de picker
die je alleen nodig hebt bij iets nieuws je elke keer begroette.

Kleine eerlijkheidsfix in dezelfde hoek: de lege staat wacht nu tot de bot- en
agent-stores antwoorden voordat hij beweert dat er niets te bedraden is, toont
**Zoeken…** intussen, en elke filterchip draagt zijn eigen telling. Een leeg
raster dat «nog laden» betekent was een leugen die de interface routinematig
vertelde.

## Twee mechanismen, één vraag

Achter die ene picker zitten twee echt verschillende dingen:

- **Een andere widget** → een AI-gegenereerde **glue link**. Echte code, met
  eigen versiegeschiedenis, draaiend in een eigen verborgen runtime, die map wat
  A emitteert naar wat B verwacht.
- **Een verbinding, bot of agent** → een lichtgewicht **attachment**, een record
  van wat een rebuild de *eigen* code van deze widget leerde te doen. Gefaseerd
  in plaats van automatisch, zodat vijf bronnen achter elkaar browsen één rebuild
  kost, niet vijf.

Weten welke je wilt, voordat je kunt zeggen wat je echt wilt laten gebeuren, is
een slechte eerste vraag. Het tabblad Koppelingen opent daarom nu met een
composer: **beschrijf de bedrading**.

> *«Sync het symbool beide kanten op met de chart.»*
> *«Als ik hier een rij klik, filter de andere widget.»*
> *«Toon de signalen van mijn prijsalert-bot in deze widget.»*

Een planner leest dezelfde inventaris als de picker en lost zowel het mechanisme
als de tegenpart op — «de prijsbot» wordt een id. Hij **lost alleen op**; hij
genereert nooit. De dure streaming-codegen draait nog steeds waar hij altijd
draaide, met zijn eigen Stop-knop en zijn eigen versiegeschiedenis.

Als je liever zelf wijst, kan de picker dat nog steeds — en markeert nu waar je
al aan bedraad bent, zodat een tweede pick leest als *«al gekoppeld»* in plaats
van stilletjes de eerste te herhalen. Opnieuw kiezen werkt de bestaande bedrading
bij in plaats van een dubbele rij toe te voegen, en de badge zegt dat **voordat**
je voor een rebuild betaalt.

## «Testen»: welk uiteinde is echt kapot?

Tot deze release was een link write-only. Je beschreef hem, betaalde de codegen,
verliet de editor en tikte op de echte widgets om te zien of er iets gebeurde.
Als er niets gebeurde, was er geen manier om te zeggen *welk* deel fout was — de
widget die niet emitteert, de link die niet mapt, of de andere widget die niet
luistert.

De editor heeft nu een **Testen**-balk. Kies een topic en een waarde, kies welk
uiteinde doet alsof het emitteert (alleen aangeboden op een tweerichtingslink,
want een eenrichtingslink zou altijd niets rapporteren van de verre kant), en
stuur. Het event gaat de echte runtime van de link in en draait de gegenereerde
`connect(ctx)` — geen simulatie — en het verdict onderscheidt elke manier waarop
het leeg kan uitvallen:

- **Deze link draait niet.** Zet hem aan — of hij heeft nog geen code.
- **Hij draaide maar stuurde niets door voor dat topic.** De mapping is fout; het
  tabblad Logs heeft het detail.
- **«symbol» doorgestuurd naar Chart.** Het werkt.
- **Doorgestuurd, maar die widget staat niet op het scherm om te ontvangen.** Geen
  bug — het andere uiteinde staat op een ander scherm.

Testen blijft op de lijst in plaats of je ergens anders naartoe te sturen, en de
recorder is alleen actief zolang de balk op het scherm staat, zodat een link die
een tickstream doorstuurt nooit voor de instrumentatie betaalt.

## De stille

Tweerichtingslinks zouden voor altijd echoën zonder hulp, dus een afgeleverde
waarde wordt onthouden en de identieke terugkaats wordt één keer weggegooid — de
canonieke A↔B-spiegelloop breekt, terwijl een echt nieuwe waarde nog door komt.
Links en attachments repliceren over je tabbladen en apparaten in plaats of in
één ervan te leven, dus er een elders verwijderen toont nu een **gone**-staat in
de editor in plaats of je in het niets te laten opslaan. En wanneer een rebuild
faalt, zegt hij dat en wijst naar het tabblad Builder, in plaats van een spinner
te laten waar een antwoord hoorde.

Nog een wijziging komt eraan: de app wordt hernoemd rond het woord dat mensen
al voor dit gebruiken. *Link* wordt **wire**, en **Mijn bedrading** blijft
precies waar het is.

[Start Nexow](https://x.nexow.ai), open het tabblad Koppelingen van een widget,
en beschrijf wat er moet gebeuren wanneer je ergens klikt. Test het daarna voordat
je weggaat.
