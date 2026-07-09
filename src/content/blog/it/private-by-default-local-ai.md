---
title: 'Privato per impostazione predefinita: perché la tua workstation di mercato IA dovrebbe girare in locale'
description: 'Nexow gira completamente in locale per impostazione predefinita — codegen bring-your-own-key nel browser, persistenza IndexedDB e connessioni dirette ai venue. Cosa significa private-by-default e perché conta per i trader.'
pubDate: 2026-07-01
heroImage: ../../../assets/blog/private.svg
tags: ['privacy', 'architettura', 'sicurezza']
---

La maggior parte degli strumenti IA invia i tuoi dati a un server per impostazione
predefinita. Per una workstation di mercato — dove chiavi, posizioni e strategie
sono tutto — quel default è al contrario. Nexow lo inverte: **private by default,
local by design.**

Ecco cosa significa concretamente.

## Codegen bring-your-own-key nel browser

In modalità privata aggiungi la tua chiave API Anthropic e la generazione dei
widget avviene lato client. Quando chiedi un widget, la richiesta va dal browser
ad Anthropic con la tua chiave — non attraverso l’infrastruttura Nexow. Una
sessione non autenticata non ci costa nulla perché non c’è nulla da eseguire: il
lavoro avviene sulla tua macchina.

## I tuoi widget vivono nel browser

Ogni widget che costruisci, ogni versione, ogni log e l’intera libreria di
widget persistono in **IndexedDB** del browser. Sono disponibili offline e non
legati a un account. Cancella l’archiviazione e spariscono — non c’è copia lato
server perché non c’è mai stato un upload lato server.

## Connessioni dirette ai venue

Dove la policy CORS del venue lo consente, Nexow si collega **direttamente dal
browser**, bypassando completamente il nostro proxy. Le credenziali dell’exchange
parlano con l’exchange — non con noi. Meno hop significa latenza più bassa e una
superficie di fiducia più piccola.

## Perché private-by-default conta

- **Sicurezza.** Meno parti toccano le tue chiavi, meno punti di perdita.
  Local-first ci rimuove completamente dal percorso in modalità privata.
- **Latenza.** Le connessioni dirette saltano un hop di rete — importante quando
  osservi un order book.
- **Proprietà.** Le dashboard sono tue. Niente lock-in, niente export — vivono
  sulla tua macchina.
- **Costo.** Paghi solo il tuo utilizzo del modello, senza markup e senza
  abbonamento per costruire sul canvas oggi.

## I compromessi, onestamente

Local-first non è senza compromessi. Alcuni venue non consentono connessioni
dirette dal browser e devono passare da un proxy leggero. La persistenza locale
significa che il lavoro resta legato a un profilo browser finché non scegli di
sincronizzarlo. E usare la propria chiave significa gestire il proprio utilizzo.
Ritengo siano i compromessi giusti per uno strumento così vicino al tuo denaro.

Mentre aggiungiamo piani hosted, agenti di trading e componenti server, il
principio resta fisso: **le tue chiavi, i tuoi dati, la tua macchina** — a
meno che non opti esplicitamente per il cloud.

[Avvia Nexow](https://x.nexow.ai) e prova tu stesso la modalità privata.
