---
title: 'Cablare i widget: una superficie, una frase e un pulsante Prova'
description: 'Tutto ciò a cui un widget può essere cablato vive ora dietro un''unica casella di ricerca — altri widget, connessioni, bot e agenti. Descrivi il cablaggio in linguaggio semplice e invia un evento reale per scoprire quale estremità è rotta.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/wires.svg
tags: ['prodotto', 'widgets', 'automazione']
---

Un **link** trasporta eventi tra due widget: cambia il simbolo in uno e l''altro
reagisce. Attiva Bidirezionale e restano sincronizzati in entrambe le direzioni. È
la differenza tra uno schermo pieno di tile separate e uno che si comporta come
un unico strumento.

L''idea era buona. Trovarla no, e neanche sapere se funzionava. Entrambe le cose
sono sistemate in questa release.

## Una superficie, e « Tutti » significa davvero tutti

Il picker era diviso in due sotto-schede — *Widget* e *Fonti* — il che significava
che metà del tuo inventario era sempre nascosta dietro un toggle che dovevi sapere
premere. Un widget da solo sul suo schermo mostrava una griglia vuota, senza
indizio che bot, agenti e connessioni esistessero.

Ora c''è una casella di ricerca e una riga di filtri per tipo su tutto: altri widget
su questo schermo, in questo workspace o altrove; le tue connessioni dati; i tuoi
bot; i tuoi agenti. **Tutti** mostra tutto.

Anche l''ordine è cambiato. **Il mio cablaggio** ora sta *sopra* la superficie di
browse. Stava sotto una griglia picker che può arrivare a decine di tile, quindi
l''elenco a cui torni per gestire — disattiva questo, rimuovi quello — era ciò che
dovevi scorrere passando tutto il resto, mentre il picker di cui hai bisogno solo
aggiungendo qualcosa di nuovo ti salutava ogni volta.

Piccola correzione di onestà nella stessa area: lo stato vuoto ora aspetta che
rispondano gli store bot e agenti prima di affermare che non c''è nulla da cablare,
mostrando **Ricerca…** nel frattempo, e ogni chip filtro porta il proprio conteggio.
Una griglia vuota che significa « ancora in caricamento » è una bugia che
l''interfaccia raccontava di routine.

## Due meccanismi, una domanda

Dietro quel picker unico ci sono due cose genuinamente diverse:

- **Un altro widget** → un **glue link** generato da IA. Codice reale, con il
  proprio storico versioni, in esecuzione nel proprio runtime nascosto, mappando
  ciò che A emette in ciò che B si aspetta.
- **Una connessione, bot o agente** → un **attachment** leggero, che è un record
  di ciò che un rebuild ha insegnato al *proprio* codice di questo widget a fare.
  Scaglionato piuttosto che automatico, così esplorare cinque fonti di fila costa
  un rebuild, non cinque.

Sapere quale vuoi, prima di poter dire cosa vuoi che succeda davvero, è una cattiva
prima domanda. La scheda Collegamenti apre quindi ora con un compositor:
**descrivi il cablaggio**.

> *« Sincronizza il simbolo in entrambe le direzioni con il grafico. »*
> *« Quando clicco una riga qui, filtra l''altro widget. »*
> *« Mostra i segnali del mio bot alert prezzo in questo widget. »*

Un planner legge lo stesso inventario del picker e risolve sia il meccanismo sia
la controparte — « il bot prezzo » diventa un id. **Risolve solo**; non genera
mai. Il codegen streaming costoso gira ancora dove girava sempre, con il proprio
pulsante Stop e il proprio storico versioni.

Se preferisci indicare da solo, il picker lo fa ancora — e ora marca ciò a cui sei
già cablato, così una seconda scelta si legge *« già collegato »* invece di
ripetere silenziosamente la prima. Sceglierlo di nuovo aggiorna il cablaggio
esistente invece di aggiungere una riga duplicata, e il badge lo dice **prima**
che paghi un rebuild.

## « Prova »: quale estremità è davvero rotta?

Fino a questa release un link era write-only. Lo descrivevi, pagavi il codegen,
lasciavi l''editor e toccavi i widget reali per vedere se succedeva qualcosa.
Quando non succedeva, non c''era modo di dire *quale* parte fosse sbagliata — il
widget che non emetteva, il link che non mappava, o l''altro widget che non
ascoltava.

L''editor ha ora una barra **Prova**. Scegli un topic e un valore, scegli quale
estremità finge di emettere (offerto solo su un link bidirezionale, perché un link
unidirezionale riporterebbe sempre nulla dal lato lontano), e invia. L''evento
entra nel runtime reale del link ed esegue il `connect(ctx)` generato — non una
simulazione — e il verdetto distingue ogni modo in cui può restare vuoto:

- **Questo link non gira.** Attivalo — o non ha ancora codice.
- **Ha girato ma non ha inoltrato nulla per quel topic.** Il mapping è sbagliato;
  la scheda Log ha il dettaglio.
- **Inviato « symbol » a Chart.** Funziona.
- **Inoltrato, ma quel widget non è a schermo per ricevere.** Non un bug — l''altra
  estremità è su un altro schermo.

Il test resta sull''elenco invece di spostarti altrove, e il registratore è armato
solo mentre la barra è a schermo, così un link che inoltra uno stream di tick non
paga mai l''instrumentation.

## Quelli silenziosi

I link bidirezionali farebbero eco per sempre senza aiuto, quindi un valore
consegnato viene ricordato e il rimbalzo identico viene scartato una volta — il
loop specchio canonico A↔B si rompe, mentre un valore genuinamente nuovo passa
ancora. Link e attachment si replicano tra le tue schede e dispositivi invece di
vivere in uno solo, quindi cancellarne uno altrove mostra ora uno stato **gone**
nell''editor invece di lasciarti salvare nel nulla. E quando un rebuild fallisce,
lo dice e punta alla scheda Builder, invece di lasciare uno spinner dove dovrebbe
esserci una risposta.

Un altro cambiamento è in arrivo: l''app viene rinominata intorno alla parola che
la gente usa già per questo. *Link* diventa **wire**, e **Il mio cablaggio** resta
esattamente dove è.

[Lancia Nexow](https://x.nexow.ai), apri la scheda Collegamenti di qualsiasi
widget e descrivi cosa dovrebbe succedere quando clicchi qualcosa. Poi prova
prima di uscire.
