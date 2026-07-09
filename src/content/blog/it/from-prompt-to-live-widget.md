---
title: 'Dal prompt al widget live: come Nexow trasforma una frase in una dashboard di trading'
description: 'Uno sguardo sotto il cofano su come Nexow genera un widget di mercato funzionante e connesso ai dati a partire da un prompt in linguaggio naturale — codegen, sandboxing e connettori live spiegati.'
pubDate: 2026-06-24
heroImage: ../../../assets/blog/codegen.svg
tags: ['prodotto', 'ia', 'come-funziona']
---

Costruire una dashboard di trading ha sempre significato lo stesso lavoro: trovare
un’API, leggere la documentazione, gestire un websocket, normalizzare il payload,
scegliere una libreria di grafici, combattere il layout — e ripetere per ogni
strumento che ti interessa. Nexow comprime l’intero ciclo in una frase.

Ecco cosa succede tra il momento in cui scrivi un prompt e quello in cui un
widget live appare sul canvas.

## 1. Descrivi cosa vuoi vedere

Un prompt è semplicemente linguaggio naturale:

> Mostra un grafico a candele di BTC-USD da Coinbase con EMA 20 e 50, e un
> pannello RSI sotto.

Nessuno schema da imparare, nessun file di configurazione. Descrivi il risultato
— strumento, venue, indicatori, layout — come lo descriveresti a un collega.

## 2. Nexow genera il sorgente del widget

Nexow invia il prompt ai modelli Claude di Anthropic tramite l’Anthropic SDK,
con il contesto necessario: quali connettori sono disponibili, la forma dei dati
che restituiscono e il contratto runtime che un widget deve rispettare. Claude
scrive il codice sorgente effettivo del widget — logica di fetch, trasformazioni
e rendering.

Poiché il modello scrive codice reale invece di riempire un template fisso, ciò
che puoi costruire è aperto: grafici di profondità dell’order book, heatmap dei
funding rate, matrici di correlazione, segnali personalizzati, tabelle semplici.
Se riesci a descriverlo, Nexow di solito può costruirlo.

## 3. Il widget gira in sandbox

Il codice generato è potente, quindi gira dietro un confine rigido. Ogni widget
esegue in un iframe isolato: può renderizzare la UI e recuperare i dati necessari,
ma non può accedere al workspace, leggere altri widget o toccare ciò che non gli
è stato dato. Potenza senza rischio.

## 4. I dati live arrivano tramite i connettori

Un widget è utile solo con dati reali. Nexow offre oltre 20 connettori
collegabili che coprono FX, crypto, azioni, futures, opzioni e prediction market
— OANDA, Binance, Coinbase, Kraken, Interactive Brokers, Polygon, Kalshi,
Polymarket e altri. Il widget si iscrive al venue indicato e prezzi, order book
e dati di riferimento arrivano in streaming.

Dove la policy CORS del venue lo consente, quelle chiamate girano **direttamente
dal browser** e non passano mai dai nostri server — latenza bassa e credenziali
sulla tua macchina.

## 5. Lo affini in linguaggio naturale

La prima generazione raramente è l’ultima. Tutto resta modificabile per
conversazione: *«aggiungi EMA 200»*, *«passa a scala logaritmica»*, *«colora le
candele per funding rate.»* Nexow riscrive il widget sul posto, versiona la
modifica e mantiene un log che puoi ispezionare o annullare.

## Perché conta

Il percorso tradizionale dall’idea al grafico si misura in ore. Con Nexow si
misura in secondi, e l’artefatto che ottieni è un widget reale e ispezionabile —
non una scatola nera. La dashboard si assembla da sola, e tu resti in controllo
di codice, dati e chiavi.

Pronto a provare? [Avvia l’app](https://x.nexow.ai) e descrivi il tuo primo
widget.
