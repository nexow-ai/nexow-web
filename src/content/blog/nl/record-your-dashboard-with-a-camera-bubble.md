---
title: 'Neem je dashboard op, camerabubbel en al'
description: 'Schermopname zit nu in de werkbalk: tot tien minuten van je canvas met je webcam als versleepbare bubbel erin, een zwevende bedieningsbalk, en een keuze — opslaan, delen of publiceren — als je stopt.'
pubDate: 2026-08-07
heroImage: ../../../assets/blog/recorder.svg
tags: ['product', 'opname', 'community']
---

Je bouwt iets goeds en wilt het laten zien — in beweging, niet als screenshot. Tot
nu toe betekende dat de app verlaten, een aparte recorder zoeken, een browservenster
uitkaderen en hopen dat het resultaat te bekijken viel. Nu is het een knop in de
werkbalk.

**Dashboard vastleggen** biedt twee dingen: een **screenshot**, bij te snijden voor
je hem opslaat, of **video opnemen** — je canvas, live, tot je stopt of tien minuten
haalt.

## Wat er in de opname komt

Drie schakelaars, vooraf te beslissen:

- **Camerabubbel** — je webcam, als cirkel in de video gecomponeerd
- **Microfoon** — je vertelstem
- **Tabbladgeluid** — wat de pagina zelf afspeelt

De camerabubbel zit niet vast in een hoek. **Sleep hem waar je wilt**: hij klikt vast
aan de hoek waar je hem het dichtst bij loslaat, in het formaat dat je koos. Hij is
onderdeel van de video, geen laag die er achteraf op is geplakt — wat je uitkadert is
wat het bestand bevat.

Tijdens de opname blijft een zwevende **bedieningsbalk** uit de weg en doet de vier
dingen die je onderweg echt nodig hebt: pauzeren en hervatten, de microfoon dempen,
het tabbladgeluid dempen, de camerabubbel verbergen of verplaatsen — en stoppen. Een
teller loopt de hele tijd mee, en waarschuwt als je het plafond van tien minuten
nadert in plaats van zonder uitleg af te breken.

## Daarna een keuze, geen download

Als je stopt, opent de opname in een controlescherm met de video en vier
mogelijkheden: **Opslaan**, **Delen**, **Publiceren**, **Weggooien**.

Publiceren stuurt hem naar de communityfeed, en dat is de enige met een limiet: een
opname van tien minuten kan meer zijn dan de uploads van de feed toelaten. Gebeurt
dat, dan is Publiceren **uitgeschakeld en legt het uit waarom**, met het maximum
erbij, terwijl Opslaan en Delen beschikbaar blijven omdat geen van beide bij dat
plafond in de buurt komt. Een grijze knop die je het getal noemt, is beter dan een
knop die faalt als de uploadbalk al vol staat.

## De weinig glamoureuze delen die het bestand goed maken

Het meeste werk van een schermrecorder is onzichtbaar zolang het werkt:

- **Het beeld wordt altijd op een canvas met vast formaat gecomponeerd**, ook zonder
  camerabubbel. De resolutie van een tabbladopname volgt het venster: één
  formaatwijziging halverwege zou de videotrack heronderhandelen, en bestanden met
  een resolutiewissel zijn in de meeste spelers kapot. Het formaat één keer aan het
  begin vastzetten is wat de uitvoer één schone codering maakt: 1080p op 30 fps, met
  terugval naar 720p als de browser toch een volledig scherm aanlevert.
- **De container wordt tijdens het draaien gekozen, niet aangenomen.** Firefox neemt
  WebM op, Safari neemt MP4 op, en Chromium heeft afhankelijk van de versie allebei
  geleverd. De recorder probeert eerst MP4 — dat is het bestand dat overal speelt waar
  je het daarna mee naartoe neemt —, zakt af naar WebM als het moet, en noemt het
  bestand naar wat de browser echt heeft gebruikt, niet naar wat er gevraagd is.
- **De frames worden geklokt los van de pagina.** Een tabblad op de achtergrond remt
  animatie af maar geluid niet, en zo krijg je precies een bevroren beeld over een
  doorlopende vertelstem. Was het tabblad tijdens de opname verborgen, dan zegt het
  controlescherm dat, in plaats van je het later te laten ontdekken.
- **Elke track wordt op elke uitgang gestopt**, ook bij een fout halverwege het
  starten. Een cameralampje dat aan blijft is een app die eruitziet alsof hij je in de
  gaten houdt, en daar bestaat geen acceptabele versie van.

Fouten zijn beide kanten op eerlijk. De kiezer van de browser sluiten is geen fout en
blijft stil: je hebt niets gedeeld, en een melding erover zou ruis zijn. Maar een bron
die geen beeld stuurt geeft een waarschuwing voordat je vijf minuten over een grijze
rechthoek praat, en een browser die geen video kan coderen zegt dat, in plaats van een
leeg bestand te maken.

## Hierna: één widget opnemen

Met de volgende update komt de kleinere, scherpere versie hiervan: een **cameraknop
in de koptekst van een widget** die *alleen die widget* opneemt — bijgesneden tot zijn
lichaam, zodat de koptekst waarin de knop zit, en de bedieningsbalk, buiten beeld
blijven. De opname-indicator mag daar gewoon staan terwijl je opneemt zonder in de
video te belanden.

Het is gebouwd op Region Capture, vandaag een Chromium-desktopmogelijkheid, dus de
knop verschijnt alleen waar hij het ook echt kan waarmaken in plaats van iets aan te
bieden waarvoor hij zich later zou moeten verontschuldigen. Hij volgt de widget als je
hem verplaatst, en stopt netjes als de widget het scherm verlaat.

Samen houdt "kijk wat ik heb gebouwd" op een screenshot met een alinea te zijn.

[Start Nexow](https://x.nexow.ai), zoek **Dashboard vastleggen** in de werkbalk, en
neem je canvas op.
