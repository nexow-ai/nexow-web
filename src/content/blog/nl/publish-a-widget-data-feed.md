---
title: 'Publiceer een datafeed: laat anderen je widget draaien zonder je sleutel'
description: 'Een widget die op je Binance- of OANDA-verbinding was gebouwd, was voor niemand anders bruikbaar. Nu kun je precies de leesacties die hij doet publiceren als een alleen-lezen, gecachet endpoint onder je eigen profiel — zonder sleutel te delen, zonder open proxy.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/datafeeds.svg
tags: ['product', 'widgets', 'data']
---

In het delen zat een ongemakkelijk gat. Je bouwt een prachtige FX-grafiek op je
OANDA-verbinding, publiceert hem, en de eerste die hem installeert leest *Verbind
OANDA om deze data te gebruiken* — een beleefde manier om een vreemde te vragen een
brokerrekening te openen om naar een grafiek te kijken. Gedeeld op een live scherm
was het erger: de widget bevroor tot een miniatuur.

De oplossing is niet je sleutel uitlenen. Het is **de leesacties publiceren die je
widget echt uitvoert**, als eigen endpoints, onder je eigen profiel:

```
GET /<gebruikersnaam>/api/w/<widget>/<endpoint>?symbol=EUR_USD&interval=H1
```

Je zet het aan in het publicatievenster — *Publiceer een alleen-lezen datafeed* — en
kijkers zonder eigen verbinding lezen jouw feed in plaats van dat hun gevraagd wordt
verbinding te maken.

## Drie regels, en elk daarvan is een weigering

**Alleen leesacties die veilig te delen zijn.** Dertien datamethoden mogen
gepubliceerd worden. De rest is geblokkeerd, elk om zijn eigen reden: `account` en
`positions` zijn ook leesacties, maar geven je saldo, je vermogen, je resultaat en je
openstaande posities terug. `order` en `closePosition` verplaatsen geld. `upsert` en
`delete` vernietigen data. `scrape` brengt een derde partij per aanroep kosten in
rekening. En kaal `http` heeft al geen inloggegevens: publiceren zou alleen een open
proxy met jouw naam erop bouwen.

**Alleen de aanroepen die de widget echt heeft gedaan.** De geslaagde leesacties van
je widget worden tijdens het draaien vastgelegd, en het publicatievenster laat je de
lijst zien — *candles van Binance — BTCUSDT, 1h* — als het concrete ding waarmee je
akkoord gaat. Een verzoek om een parameter die je nooit hebt gepubliceerd, of om een
waarde buiten de verzameling waartoe je hem hebt verbreed, wordt geweigerd voordat er
iets ontsleuteld wordt. Parameters die niets in een URL te zoeken hebben — een
SQL-query, een vector — komen daar nooit in voor: ze worden letterlijk uit de opslag
afgespeeld.

**Weigeringen zijn niet van elkaar te onderscheiden.** Een endpoint dat niet bestaat,
een parameter buiten zijn lijst en een publiek waar je niet bij hoort geven alle drie
dezelfde 404. Of er een vrienden-only feed bestaat is zelf informatie over de auteur:
het antwoord laat dat nooit uitlekken.

## Wie hem mag lezen, en wat hij je kost

Het publiek is geen vierde schakelaar om te vergeten: het **volgt de
aankondigingspost** — iedereen, je volgers of je vrienden. Een privé-aankondiging
schakelt de feed helemaal uit, want een aankondiging die alleen jij kunt zien onder
een endpoint dat anderen aanroepen is onsamenhangend.

De kosten zijn het deel dat de moeite van het begrijpen waard is, omdat het het deel
is waar mensen bang voor zijn. Je kiest een verversingsinterval — elke 30 seconden, 5
minuten, elk uur of elke dag — en dat is het **maximum** waarmee je verbinding
gebruikt kan worden, hoeveel mensen de widget ook openen. Lezers delen één gecachete
kopie. Tien kijkers en tienduizend doen hetzelfde aantal aanroepen, en per venster mag
er precies één verversing lopen, ook als meerdere lezers tegelijk de cache missen.

Je sleutel verlaat de server nooit. Je saldo, je posities en je orders worden nooit
gepubliceerd. En de feed hangt aan de vermelding: haal de widget uit de lijst en de
endpoints stoppen met leveren.

## De eigen verbinding van de kijker wint altijd

Een gepubliceerde feed is een terugval, nooit een vervanging. Heeft wie je widget
opent een eigen OANDA-verbinding, dan gebruikt de widget **die van hen**: hun
rekening, hun data, hun limieten. De feed wordt pas geraadpleegd nadat de widget geen
eigen verbinding heeft gevonden, en een misser is stil: ze zien het gewone bericht
*verbind dit venue* in plaats van een nieuwe fout om te leren.

Die endpoints lopen via dezelfde venue-adapters die de app al meelevert, dus een
gepubliceerde feed geeft precies dezelfde vormen terug als wat jij zag toen je de
widget bouwde — over elk actief venue in de catalogus, zonder code per venue.

## Wat hij met opzet niet doet

- **Een gedeeld tradingdashboard tekent zijn grafiek, niet zijn rekeningpaneel.** Dat
  is de blokkeerlijst die zijn werk doet, geen fout.
- **Een symbolenkiezer biedt alleen de symbolen die jij hebt opgesomd.** Een widget
  met vrije invoer valt terug op een vaste verzameling. Dat is de prijs van geen open
  proxy naar je broker bouwen.
- **In privémodus kun je geen feed publiceren.** Daar leven je inloggegevens alleen
  in de verzegeling van dit apparaat: geen server heeft ze, dus geen server kan
  namens jou iets verversen.
- **Een fork erft de feed niet.** Feeds hangen aan de afstamming van een widget: elke
  geïnstalleerde kopie lost dezelfde endpoints op, en een fork lost er geen op.

Het is een kleinigheid om aan te zetten, en het verandert wat publiceren betekent:
een widget die je deelt is nu een widget die mensen ook echt kunnen draaien.

[Start Nexow](https://x.nexow.ai), pak een widget die je op een verbinding met
sleutel hebt gebouwd, en publiceer hem met de feed aan.
