---
title: 'Bot v2: trigger su RSI e volumi, consegna via webhook e database, e un builder più ordinato'
description: 'I bot cloud hanno imparato nuovi trucchi — condizioni su RSI e picchi di volume, osservatori di trade, segnali che fanno POST ai tuoi webhook o si accodano al tuo database, e un builder diviso tra I miei bot e Crea.'
pubDate: 2026-07-22
heroImage: ../../../assets/blog/bots-v2.svg
tags: ['prodotto', 'automazione', 'bots']
---

Al lancio, i bot sapevano osservare soglie, variazioni percentuali, crossover
e digest, e inviare segnali al tuo canvas. Quel nucleo non è cambiato.
Attorno, quasi tutto è diventato più profondo: più condizioni su cui scattare,
più posti dove far arrivare i segnali e un builder che non ti intralcia.

## Nuove condizioni su cui scattare

Il catalogo dei processori è cresciuto. Accanto a soglie, % di variazione e
crossover di medie mobili, i bot ora valutano:

- **RSI** — scatta quando il momentum entra in territorio di ipercomprato o
  ipervenduto
- **Picchi di volume** — cattura attività insolita a cui il prezzo non ha
  ancora reagito
- **Nuovi trade** — scatta sulle esecuzioni fresche di un account collegato
- **Attività e saldo del wallet** — osserva indirizzi on-chain, raccontati nel
  nostro [post sui wallet](/it/blog/wallets-on-the-canvas)

Come sempre: descrivi la regola in una frase e lascia che l’IA abbozzi il bot,
oppure collegalo visivamente e regola ogni parametro da te.

## I segnali vanno dove lavori

Il segnale di un bot prima raggiungeva la tua inbox e i tuoi widget. Due nuove
destinazioni cambiano a cosa servono i bot:

- **Webhook** — fai POST di ogni segnale a un URL che indichi tu. Vale per
  Discord, Slack o Telegram tramite i loro URL webhook, o per il tuo server.
  Il tuo bot diventa un produttore che qualsiasi sistema può consumare.
- **Il tuo database** — accoda ogni segnale come riga a uno dei tuoi database
  collegati. Lascia girare un bot per un mese e hai un log interrogabile di
  ogni trigger, pronto perché un widget lo metta in grafico.

La consegna è un insieme, non una scelta — un solo bot può notificarti,
aggiornare i tuoi widget, pingare Discord e scrivere la riga, tutto dallo
stesso trigger.

## I miei bot e Crea, finalmente separati

Il pannello dei bot ora separa **I miei bot** — la tua flotta in esecuzione,
con lo stato a colpo d’occhio — da **Crea**, dove i nuovi bot prendono forma.
Il modulo stesso si è alleggerito: le sezioni opzionali restano chiuse finché
non ti servono, così un semplice alert di soglia richiede secondi mentre tutta
la profondità resta a un clic di distanza.

## Le bozze partono sicure

Un dettaglio voluto: quando l’IA abbozza un bot per te, il suo sink webhook
parte **vuoto**. Un’automazione generata non arriva mai con una destinazione
che non hai digitato tu — decidi tu dove vanno i segnali, esplicitamente, ogni
volta.

[Avvia Nexow](https://x.nexow.ai), apri Bot e dai al tuo prossimo alert un
posto migliore di una inbox dove atterrare.
