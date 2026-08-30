---
title: 'Anatomia di un cockpit di trading: uno schermo, otto widget e cosa alimenta ciascuno'
description: 'Una scrivania di riferimento smontata tile per tile — cos''è ogni widget, quale connessione lo alimenta, quali fili li legano e cosa continua a girare con la scheda chiusa. Meno una release note che una mappa.'
pubDate: 2026-08-09
heroImage: ../../../assets/blog/cockpit-teardown.svg
tags: ['smontaggio', 'workspace', 'crypto']
category: teardown
---

La maggior parte di ciò che pubblichiamo qui è una release note: qualcosa è
uscito, ecco cosa fa. Questo post è di un altro tipo. Niente di quanto segue è
nuovo. È uno schermo finito, smontato, così puoi vedere come i pezzi che
spediamo separatamente si incastrano davvero.

La scrivania è un cockpit crypto — otto widget su uno schermo, costruiti con
dati di mercato pubblici, senza chiavi da nessuna parte. Nulla è speciale. È il
punto: ogni parte è qualcosa che puoi ricostruire descrivendola.

## Lo schermo

![Uno schermo con otto tile di widget, ciascuna marcata con un numero da uno a otto](../../../assets/blog/anatomy-of-a-trading-cockpit-fig1.svg "L''intera scrivania. Uno schermo, otto widget, disposti sul canvas libero — i numeri corrispondono all''elenco sotto.")

1. **Candlestick.** La tile ancora. Un simbolo, un intervallo, un''ultima candela
   live. Tutto il resto sullo schermo la alimenta o la segue.
2. **Profondità order book.** Bid e ask come barre impilate, così un book sottile
   è visibile e non inferito.
3. **Watchlist.** Una manciata di simboli, uno selezionato. Questa tile è il
   volante dello schermo — più sotto.
4. **Saldi wallet.** Un indirizzo pubblico, sola lettura, tramite una connessione
   wallet. Nessuna firma, nessuna chiave, nulla da approvare.
5. **Funding rate.** Funding perp sulle ultime finestre, positivo e negativo ai
   lati di una linea zero.
6. **Heatmap.** Lo stesso universo della watchlist, dimensionato e ombreggiato,
   per uno sguardo rapido invece della lettura.
7. **Mercati predittivi.** Cosa sta prezzando la folla, accanto a cosa prezza
   l''order book. L''interessante è quando i due divergono.
8. **Inbox alert.** Vuota per gran parte della giornata. La riempie un bot che
   continua a lavorare con la scheda chiusa.

Uno **schermo** è una disposizione di widget. Un **workspace** ne contiene
diversi. Il canvas è libero — metti le cose dove vuoi, e i gruppi possono
impilare tile in mosaici o schede — ma è un canvas con bordi, non un piano
infinito in cui perdersi.

## Seguire una tile fino in fondo

Ogni tile su quello schermo ha le stesse quattro strati sotto. Prendi la
watchlist:

![Un percorso da sinistra a destra: una connessione alimenta codice generato, il codice renderizza un widget dentro un confine sandbox tratteggiato, e un filo porta un valore verso un grafico](../../../assets/blog/anatomy-of-a-trading-cockpit-fig2.svg "Una tile, dall''alto in basso: una connessione, il codice generato, il widget in esecuzione e il filo che ne esce un valore.")

1. **Una connessione.** Uno dei 90 connettori live — qui, dati di mercato
   pubblici, che non richiedono credenziali. Le connessioni sono inventario, non
   configurazione: ne attacchi una a un widget e il widget viene ricostruito
   sapendo usarla.
2. **Codice generato.** Hai descritto una watchlist; un build ne ha scritto una.
   Ha uno storico versioni, e puoi leggere ogni turno della conversazione che l''ha
   prodotta.
3. **Il widget in esecuzione.** Esegue in sandbox. Un widget che si comporta male
   rovina la propria tile e nient''altro sullo schermo — ed è l''unica ragione per
   cui ha senso eseguire software che non hai letto.
4. **Un filo in uscita.** La tile emette quando clicchi una riga. Da sola non va
   da nessuna parte. Ciò che la rende un cockpit e non otto tile separate è la
   parte successiva.

## Ciò che tiene insieme tutto sono i fili, non il codice

![Un grafo degli stessi otto widget numerati, con un filo bidirezionale tra watchlist e grafico, fili unidirezionali verso order book e funding, e una connessione, un bot e un agente attaccati da sinistra](../../../assets/blog/anatomy-of-a-trading-cockpit-fig3.svg "Le stesse otto tile come grafo. Le linee piene sono fili tra widget; le tratteggiate sono attaccamenti dal resto del tuo inventario.")

Due meccanismi stanno dietro l''unica parola *filo*, e la distinzione compare nel
diagramma come pieno versus tratteggiato:

- **Widget a widget** è un **glue link** — codice generato reale, con il proprio
  storico versioni, in esecuzione nel proprio runtime nascosto, mappando ciò che
  una tile emette in ciò che l''altra si aspetta. L''arco tra watchlist e grafico è
  bidirezionale: cambia il simbolo in uno dei due e entrambi seguono. I fili
  bidirezionali farebbero eco per sempre senza aiuto, quindi un valore consegnato
  viene ricordato e il rimbalzo identico viene scartato una volta.
- **Widget a connessione, bot o agente** è un **attachment** — un record di ciò
  che un rebuild ha insegnato al *proprio* codice del widget a fare. Sono le linee
  tratteggiate. Scaglionato piuttosto che automatico, così esplorare cinque fonti
  di fila costa un rebuild invece di cinque.

Su questo schermo il cablaggio è deliberatamente sottile: la watchlist guida il
grafico in entrambe le direzioni, e order book e tile funding in una sola. Tre
fili. Aggiungere un quarto per la heatmap tentava ed era sbagliato — una tile che
cambia quando non la guardavi è una tile di cui smetti di fidarti.

L''editor dei fili ha una barra **Prova** proprio per questo. Scegli un topic e
un valore, scegli quale estremità finge di emettere, e invia un evento reale
nel runtime reale. Il verdetto distingue *questo filo non gira* da *ha girato ma
non ha inoltrato nulla per quel topic* da *inoltrato, ma quel widget non è a
schermo per riceverlo*. Prima che esistesse, un filo rotto e un filo che punta a
un altro schermo sembravano identici: non succedeva nulla.

## Cosa continua a girare con la scheda chiusa

La tile 8 è l''unica che non è davvero un widget nel senso usuale. È un''inbox, e ciò
che la riempie è un **bot**.

I bot sono deliberatamente poco glamour — un catalogo fisso di processori
(soglia, cambio, crossover, RSI, picco di volume, digest, nuovo trade, attività
wallet, saldo wallet) su esattamente tre tipi di cose: candele di mercato, conto
broker, indirizzo wallet pubblico. Nessun modello nel loop, ed è proprio per questo
che puoi lasciarne uno attivo un mese. Quando uno scatta, si distribuisce in
quattro posti insieme: l''inbox alert, il bus widget (così la tile 8 si aggiorna
live), un webhook e un database connesso.

Gli **agenti** sono l''altra metà, e la forma opposta: generalisti, con grant per
tool per ricerca web, social, dati di mercato, database, memoria e altro, su
trigger manuale o da 15 minuti a giornaliero. Un agente è ciò che usi quando la
domanda è *« riassumi cos''è successo stanotte »* piuttosto che *« dimmi quando
questo attraversa quello »*. Entrambi alimentano la tile 8; solo uno è economico
da lasciare incustodito.

## Cosa questo schermo deliberatamente non fa

Non fa trading. Nulla qui piazza un ordine — è un grant separato, su un connettore
separato, e metterlo sullo stesso schermo di una heatmap a cui dai un''occhiata è
così che succedono gli incidenti.

Non detiene una chiave. Ogni fonte è pubblica: candele, profondità, funding,
mercati predittivi, un indirizzo sola lettura. Una scrivania che puoi passare a
qualcun altro senza revocare nulla dopo vale più di una scrivania con due tile
in più.

E non è finita, perché non è uno stato che uno schermo raggiunge. La versione
onesta di questo smontaggio è che il layout sopra è il quarto; i primi tre
avevano più tile e dicevano meno.

[Lancia Nexow](https://x.nexow.ai) e descrivi la prima tile. Le altre sette sono
più facili.
