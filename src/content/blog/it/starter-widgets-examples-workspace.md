---
title: 'Dieci widget di esempio ora inclusi in Nexow — conversazione inclusa'
description: 'Un nuovo account non apre più su un canvas vuoto. Dieci widget finiti arrivano come workspace Esempi, ciascuno con la chat reale che lo ha costruito e il vero storico versioni — costruiti dallo stesso loop codegen che usi tu, senza nulla connesso.'
pubDate: 2026-08-09
heroImage: ../../../assets/blog/starters.svg
tags: ['prodotto', 'onboarding', 'widgets']
---

Lo schermo più difficile in Nexow è sempre stato il primo: un canvas bianco, una
casella prompt e nessuna prova che funzioni. Potevi leggere la documentazione, o
scrivere qualcosa e sperare.

Con la prossima release, un nuovo account parte in un **workspace Esempi** — dieci
widget finiti su tre schermi, tutti funzionanti al primo caricamento, con
**nulla connesso**. Non screenshot, non un tour guidato. Widget veri che puoi
aprire, modificare, smontare e pubblicare sopra.

## Cosa c''è nel pack

**Mondo live** — un orologio mondiale con anello giorno/notte e barra di
sovrapposizione orario lavorativo; previsioni meteo a sette giorni con curva
oraria; tutti i terremoti dell''ultima ora, giorno o settimana su una mappa live,
dimensionati per magnitudine; e qualità dell''aria live con l''inquinante che guida
l''indice.

**Mercati** — candlestick Binance con ultima candela live e badge variazione 24h;
un convertitore FX su tassi di riferimento BCE con storico 90 giorni; le domande
Polymarket più attive e cosa crede la folla; e qualsiasi indicatore Banca
Mondiale, per due paesi insieme, come grafico di lungo periodo.

**Crea e gioca** — una bacheca di note adesive che sopravvive ai reload con
storage durable per item, e il feed Wikipedia «in questo giorno» con miniature e
selettore data.

Ogni fonte è senza chiave: Open-Meteo, USGS, dati pubblici Binance, Frankfurter,
Polymarket, Banca Mondiale, Wikipedia. È una regola, non una coincidenza — un
esempio che apre su «Connetti OANDA» è peggio di un canvas vuoto.

## Sono stati davvero costruiti, non scritti

Ogni esempio è partito da un brief scritto come lo digita una persona — cosa vuole
e perché, non una specifica. `starter:build` passa quei brief in
**`runWidgetToolLoop`**: lo stesso modulo che guidano la route codegen della
piattaforma e il percorso bring-your-own-key del browser, con lo stesso contratto,
gli stessi tool e lo stesso verificatore in-turn. Nessuno stream HTTP, nessun
ledger crediti, nessun browser — ma lo stesso loop.

La trascrizione che trovi nella scheda chat di un widget è quindi la conversazione
genuina, e ogni turno che ha prodotto codice è una versione genuina sul rail. La
maggior parte ne porta tre. **Qualità dell''aria ne porta cinque**, perché i primi
tre lo lasciavano aprire su una casella vuota «inserisci una città», e il quinto
turno è una segnalazione bug: sei tile inquinanti che mostrano un trattino, e un
timestamp che diceva *«-6375 min fa »*. Quel build è nel pack esattamente com''è
successo.

Crucialmente, i brief girano **senza provider attaccati** — esattamente ciò che ha
un nuovo account. Qualunque cosa esca da quel loop funziona il primo giorno di
qualcuno.

## Non un secondo catalogo

Ogni esempio è un asset marketplace ordinario, pubblicato dall''account ufficiale
tramite lo stesso RPC del lavoro di tutti gli altri: stessi sanitizer, stesso
grafo lineage, stesso percorso install, stessa catena royalty. Nulla di un widget
starter è trattato in modo speciale lato server, deliberatamente — forkane uno e
continui un lineage reale invece di scoprire che gli esempi dell''app vivono in un
dialetto privato.

Un registro di curazione sopra tiene solo la curazione: quali asset pubblicati
compongono il pack, in che ordine, su quale schermo. Le scritture sono solo
service-role; le letture sono pubbliche, perché un visitatore non autenticato può
guardare una pagina listing per uno di essi.

## Dove atterra il pack e cosa non farà

Il seeding è gated in tre modi. Gira **una volta per account, non una volta per
dispositivo** — il flag è un''impostazione replicata, riletta al cambio account.
Non seeda mai un canvas già usato. E può essere forzato da **Impostazioni →
Generale → Aggiungi widget di esempio**, per account precedenti al pack o per chi
ha cancellato il workspace e lo vuole indietro.

Gli esempi atterrano *accanto* al tuo workspace vuoto invece di sostituirlo, così
l''onboarding ti consegna ancora uno schermo pulito su cui scrivere. L''intero pack
è un passo di undo.

Ogni widget seedato è timbrato come l''install marketplace che è davvero, così
migliorarlo e pubblicarlo continua il lineage ufficiale invece di avviare una
copia rivale. E quando spediamo una versione migliore di un esempio, **gli utenti
già seedati tengono la propria** — è il loro widget ora, forse modificato. Non
c''è percorso push-update, e non dovrebbe esserci.

## Verificato come pack, non a occhio

Prima che uno raggiunga un account, l''intero pack gira in Chrome reale ed è
valutato per widget: errori boot, loop animazione fuori controllo, frame lenti,
render vuoti — più uno screenshot ciascuno. Un controllo live separato deriva
ogni endpoint pubblico dal codice committato e conferma che risponde ancora, così
il test non invecchia mentre i widget evolvono.

La barra per un undicesimo è la stessa di questi dieci: zero connessioni, un
verdetto smoke pulito, un messaggio reale invece di una tile vuota quando la sua
fonte dati ha una giornata storta, e nulla di personale da nessuna parte nella
conversazione — perché anche la conversazione viene spedita.

Il pack esce con la prossima release, e gli account esistenti possono importarlo
da **Impostazioni → Generale** quando vogliono. Aprine uno, leggi la chat che lo
ha costruito, poi cambia qualcosa — resta il modo più veloce per capire cosa può
fare il canvas.

[Lancia Nexow](https://x.nexow.ai) e inizia a costruire nel frattempo.
