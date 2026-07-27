---
title: 'Costruire widget con fiducia: build durevoli, versioni oneste, lint nella chat'
description: 'Il composer ha messo su memoria e coscienza — le build sopravvivono alle disconnessioni e i retry sono puliti, ogni versione registra da dove viene, e i problemi di lint e runtime arrivano nella chat, non in una console.'
pubDate: 2026-07-21
heroImage: ../../../assets/blog/builds.svg
tags: ['prodotto', 'widgets', 'ia']
---

Da prompt a widget è sempre stata la parte scintillante. Questa release
riguarda la metà meno glamour di quella promessa: cosa succede quando la rete
cade a metà build, quando una generazione fallisce, quando vuoi sapere quale
versione di un widget stai davvero guardando. La risposta, ora: non si perde
nulla, e nulla viene riscritto alle tue spalle.

## Build che ti sopravvivono

Le build dei widget ora sono **job durevoli**. Chiudi il portatile a metà
generazione, perdi il Wi-Fi, aggiorna nel momento peggiore — la build mantiene
il suo lease sul server e finisce senza di te. Se un turno fallisce davvero,
un **Retry** sta proprio lì sopra, e funziona anche dopo che una
disconnessione ha lasciato le cose in uno stato strano. Le build stantie non
possono più incastrare il composer.

Le tue parole sono altrettanto durevoli: un prompt non inviato che aspetta nel
composer persiste con il widget, così un refresh nel momento sbagliato non si
mangia il paragrafo che stavi per inviare.

## Versioni con provenienza

Ogni versione di un widget ora registra **da dove viene** — un prompt, una
correzione, un salvataggio manuale — e gli interventi creano nuove versioni
invece di riscrivere le vecchie sul posto. La prima versione di ogni widget,
la sua **genesi**, non viene mai potata: puoi sempre tornare indietro fino a
ciò che ha prodotto il primissimo prompt. E quando un chip di versione nella
chat punta a una cronologia che è stata potata, la chat lo dice invece di
fingere.

## La build ti dice cosa non va

Il codice generato viene controllato, e i risultati vanno dove stai già
guardando: **i problemi di lint e runtime compaiono sulla bolla di chat della
build**, come parte della conversazione. Li correggi rispondendo — i problemi
sono contesto che il turno successivo già conosce.

La sandbox è rimasta rigorosa, ed è diventata più rigorosa: i widget non
possono fare chiamate di rete dirette — i dati passano dai connettori — e gli
asset che possono caricare sono vincolati a origini note.

## Conversazioni più ricche

Il composer ha guadagnato gli **allegati** — trascina un’immagine nella chat
per mostrare all’IA cosa intendi — e le **connessioni fissate**, così la
conversazione di un widget sa sempre su quali sorgenti dati sta costruendo. Se
costruisci con la tua chiave API, gli altri dispositivi del tuo account vedono
la build in corso invece di un misterioso stato occupato.

Niente di tutto questo cambia la sensazione del costruire: descrivi, osserva,
rifinisci. Cambia quanto puoi fidarti di ciò che ne esce.

[Avvia Nexow](https://x.nexow.ai) e interrompi la connessione a metà build —
finiremo noi senza di te.
