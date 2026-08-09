---
title: 'Registra la tua dashboard, bolla della fotocamera inclusa'
description: 'La registrazione dello schermo è nella barra degli strumenti: fino a dieci minuti della tua tela con la webcam incorporata come bolla trascinabile, una barra di controllo fluttuante e una decisione — salva, condividi o pubblica — quando ti fermi.'
pubDate: 2026-08-07
heroImage: ../../../assets/blog/recorder.svg
tags: ['prodotto', 'cattura', 'community']
---

Costruisci qualcosa di buono e vuoi mostrarlo — in movimento, non come uno
screenshot. Finora significava uscire dall'app, procurarsi un registratore a parte,
inquadrare una finestra del browser e sperare che il risultato fosse guardabile.
Ora è un pulsante nella barra degli strumenti.

**Cattura dashboard** offre due cose: uno **screenshot**, ritagliabile prima di
salvarlo, oppure **registra video** — la tua tela, dal vivo, finché non ti fermi o
raggiungi i dieci minuti.

## Che cosa entra nella ripresa

Tre interruttori, decisi prima di iniziare:

- **Bolla della fotocamera** — la tua webcam, incorporata nel video come un cerchio
- **Microfono** — la tua voce
- **Audio della scheda** — quello che la pagina stessa sta riproducendo

La bolla della fotocamera non è fissata in un angolo. **Trascinala dove vuoi**: si
aggancia all'angolo più vicino a dove la lasci, nella dimensione che hai scelto. Fa
parte del video, non è un livello aggiunto dopo, quindi ciò che inquadri è ciò che
il file contiene.

Mentre registri, una **barra di controllo** fluttuante resta in disparte e fa le
quattro cose che servono davvero durante la ripresa: mettere in pausa e riprendere,
silenziare il microfono, silenziare l'audio della scheda, nascondere o spostare la
bolla della fotocamera — e fermare. Un timer scorre per tutto il tempo, e avvisa
mentre ti avvicini al tetto dei dieci minuti invece di interrompersi senza
spiegazioni.

## Poi una decisione, non un download

Quando ti fermi, la ripresa si apre in una schermata di revisione con il video e
quattro scelte: **Salva**, **Condividi**, **Pubblica**, **Scarta**.

Pubblica la manda al feed della community, ed è l'unica con un limite: una ripresa
di dieci minuti può superare quello che i caricamenti del feed consentono. Quando
succede, Pubblica è **disattivato e spiega perché**, con il massimo indicato, mentre
Salva e Condividi restano disponibili perché nessuna delle due si avvicina a quel
tetto. Un pulsante in grigio che ti dice il numero è meglio di uno che fallisce a
barra di caricamento piena.

## Le parti poco vistose che rendono buono il file

Quasi tutto il lavoro di un registratore di schermo è invisibile quando funziona:

- **L'immagine è sempre composta su una tela di dimensioni fisse**, anche senza
  bolla della fotocamera. La risoluzione di una cattura di scheda segue la finestra:
  un solo ridimensionamento a metà ripresa rinegozierebbe la traccia video, e i file
  che contengono un cambio di risoluzione sono rotti in gran parte dei lettori.
  Fissare la dimensione una volta all'inizio è ciò che rende l'uscita una codifica
  unica e pulita: 1080p a 30 fps, con discesa a 720p quando il browser consegna
  comunque una superficie a schermo intero.
- **Il contenitore si sceglie a runtime, non si dà per scontato.** Firefox registra
  WebM, Safari registra MP4, e Chromium ha spedito entrambi a seconda della
  versione. Il registratore prova prima MP4 — è il file che si riproduce ovunque tu
  lo porti dopo —, scende a WebM se deve, e nomina il file in base a quello che il
  browser ha davvero usato, non a quello che gli era stato chiesto.
- **I fotogrammi sono scanditi da un orologio indipendente dalla pagina.** Una
  scheda in secondo piano rallenta l'animazione ma non l'audio: è esattamente così
  che si ottiene un'immagine congelata su una voce che continua. Se la scheda era
  nascosta durante la ripresa, la schermata di revisione lo dice, invece di
  lasciartelo scoprire dopo.
- **Ogni traccia viene fermata su ogni via d'uscita**, incluso un errore a metà
  avvio. Una spia della fotocamera lasciata accesa è un'app che sembra guardarti, e
  non ne esiste una versione accettabile.

Gli errori sono onesti in entrambe le direzioni. Chiudere il selettore del browser
non è un errore e resta in silenzio: non hai condiviso niente, e una notifica
sarebbe rumore. Ma una sorgente che non manda immagine genera un avviso prima che tu
parli per cinque minuti su un rettangolo grigio, e un browser che non sa codificare
video lo dice invece di produrre un file vuoto.

## Il prossimo passo: registrare un singolo widget

Con il prossimo aggiornamento arriva la versione più piccola e più precisa di tutto
questo: un **pulsante fotocamera nell'intestazione di un widget** che registra *solo
quel widget* — ritagliato sul suo corpo, così l'intestazione in cui vive il pulsante,
e la barra di controllo, restano fuori dall'inquadratura. L'indicatore di
registrazione può stare proprio lì mentre registri senza finire nel video.

È costruito su Region Capture, oggi una capacità di Chromium su desktop: il pulsante
compare solo dove può davvero mantenere la promessa, invece di offrire qualcosa per
cui poi dovrebbe scusarsi. Segue il widget se lo sposti, e si ferma in modo pulito
se il widget lascia la schermata.

Fra i due, «ecco cosa ho costruito» smette di essere uno screenshot più un paragrafo.

[Apri Nexow](https://x.nexow.ai), trova **Cattura dashboard** nella barra degli
strumenti e registra la tua tela.
