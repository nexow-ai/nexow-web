---
title: 'Un workspace, ogni dispositivo: sincronizzazione più profonda, nuove librerie, una modalità privacy più intelligente'
description: 'Le chat dei widget ora ti seguono live tra i dispositivi, schermate e workspace hanno librerie tutte loro, le bozze archiviate conservano le conversazioni e la modalità privacy accantona il tuo stato cloud invece di perderlo.'
pubDate: 2026-07-20
heroImage: ../../../assets/blog/sync-library.svg
tags: ['prodotto', 'sincronizzazione', 'workspace']
---

Sincronizzazione cloud voleva dire che widget e layout ti seguivano. Questa
release fa seguire anche il *resto* — conversazioni, librerie, perfino lo
stato delle tue automazioni quando entri ed esci dalla modalità privacy.

## Le conversazioni si sincronizzano live

La chat di un widget è metà del suo valore: i prompt, le correzioni, il
ragionamento. I thread dei widget ora **si applicano live tra i dispositivi**
— lascia una conversazione sul desktop, apri il portatile e il thread è lì,
aggiornato, senza un refresh.

Sotto il cofano, i record dei widget sono stati divisi in documenti head,
versione e chat, così una conversazione veloce non si trascina più dietro
interi payload di widget. Te ne accorgerai come una sincronizzazione che tiene
il passo.

## Librerie per schermate e workspace

La libreria conteneva i widget. Ora ha schede anche per **schermate** e
**workspace** — salva un intero layout una volta, riusalo ovunque, e si
sincronizza come tutto il resto. Insieme al marketplace, la strada da “la mia
schermata preferita” ad “asset pubblicato” è lunga due clic.

Anche l’archiviazione è diventata più gentile: una bozza di widget archiviata
**conserva la sua conversazione**, e riprenderla in mano fa ripartire la chat
da dove l’avevi lasciata — l’archivio ora è uno scaffale, non un tritacarte. E
se un record di widget resta orfano per un’operazione interrotta, la libreria
lo trova e lo recupera invece di lasciarlo disperso.

## Modalità privacy: accantonare, non distruggere

La regola di Nexow è che il cloud è opt-in — e puoi tornare indietro. Entrare
in **modalità privacy** ora *accantona* il tuo stato lato cloud: agenti in
deploy e sink dei bot cloud vengono parcheggiati, non eliminati. Esci dalla
modalità privacy e vengono ripristinati esattamente com’erano, sink verso
database inclusi. Passare al privato non è più una decisione che paghi al
ritorno.

Anche la sincronizzazione in tempo reale ora è una preferenza ricordata —
spegnila una volta e resta spenta tra le sessioni finché non dici il
contrario.

## Noiosa di proposito

Il resto del lavoro, si spera, non lo noterai mai: i push dei layout sono
compare-and-set così due dispositivi non possono sovrascriversi in silenzio,
un dispositivo ignora l’eco delle proprie scritture e le modifiche offline si
registrano in un outbox che le rigioca al tuo ritorno. La sincronizzazione a
cui non pensi è la feature.

[Avvia Nexow](https://x.nexow.ai) su due schermi e guarda un solo workspace
comportarsi come tale.
