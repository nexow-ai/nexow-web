---
title: 'Gli agenti sono live: dai al tuo workspace un compagno di team che gira nel cloud'
description: 'Il builder dell’harness era la promessa; il pulsante di deploy è la ricompensa. Costruisci un agente da modello, memoria, skill, tool e trigger, fanne il deploy nel cloud e segui ogni esecuzione in una timeline live.'
pubDate: 2026-07-27
heroImage: ../../../assets/blog/agents-live.svg
tags: ['prodotto', 'agenti', 'automazione']
---

Qualche settimana fa avevamo detto che gli agenti erano in arrivo: IA con un
harness completo che osserva, ragiona e agisce da sola. Oggi sono qui. Puoi
costruire un agente, affidargli dei tool, **farne il deploy nel cloud** e
guardarlo lavorare — su schedule, con la scheda chiusa.

Ecco cosa è stato consegnato.

## L’harness, ora con un pulsante di deploy

Un agente in Nexow è più di un prompt. Lo assembli da un **harness** — modello,
memoria, skill, tool, knowledge e trigger — in un builder visivo. Quella parte
forse l’hai già vista. La novità è l’ultimo passo: **Deploy**.

Il deploy scatta uno snapshot del tuo agente e lo consegna al runtime cloud di
Nexow. Da quel momento gira sul proprio heartbeat — ogni 15 minuti, ogni ora,
ogni giorno, qualunque cadenza tu imposti — senza il tuo browser aperto. Puoi
anche pungolarlo a mano con **Run now** ogni volta che vuoi un passaggio fuori
programma.

## I tool si concedono, non si presumono

Un agente tocca solo ciò che gli lasci toccare. Ogni tool nel suo harness è
**protetto da grant**: decidi tu se può leggere le tue connessioni, inviare
notifiche, scrivere sui widget e così via. Niente grant, niente accesso —
l’agente letteralmente non vede il tool.

Questo rende sicuro affidare a un agente un lavoro vero. Un bot ti dice che BTC
è sceso del 5%; a un agente puoi chiedere di *controllare order book e funding
rate quando succede, e mettere per iscritto ciò che ha trovato* — usando
esattamente gli accessi che hai approvato.

## Memoria tra le esecuzioni

Gli agenti mantengono la **memoria** tra un’esecuzione e l’altra. Ciò che il
tuo agente ha imparato nel passaggio di lunedì è ancora lì martedì — così può
seguire una tesi nel tempo, notare i cambiamenti invece di ridescrivere
istantanee e saltare il lavoro già fatto.

## Ogni esecuzione, messa agli atti

Gli agenti in deploy mantengono una **timeline delle esecuzioni**: quando è
partita ciascuna, se è finita pulita, in errore o è stata saltata, e cosa è
successo dentro — trasmesso live mentre l’esecuzione procede. Apri una
qualsiasi esecuzione e leggi la conversazione completa: cosa ha visto
l’agente, quali tool ha chiamato e cosa ha concluso. Se un modello a monte ha
un singhiozzo, anche quello finisce nella cronologia, etichettato per ciò che
è, non un mistero.

Il controllo resta sempre a te: metti un agente in **pausa**, **riprendilo**,
rifai il deploy di un harness aggiornato o **annulla il deploy** del tutto. Il
tuo piano stabilisce quanti agenti puoi tenere in deploy contemporaneamente.

## Sempre private by default

Il principio non si è spostato: il cloud è qualcosa per cui opti tu. Costruire
un harness non costa nulla e non tocca alcun server; il deploy è una scelta
esplicita per ogni agente, e la modalità privacy mette in pausa le esecuzioni
cloud invece di continuarle in silenzio.

I bot osservano. Gli agenti agiscono. [Avvia Nexow](https://x.nexow.ai), apri
il pannello Agenti e metti in turno il tuo primo compagno di team.
