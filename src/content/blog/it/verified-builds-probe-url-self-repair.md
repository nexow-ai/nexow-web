---
title: 'Widget che controllano la propria plomberia: probe_url, un agente verificatore e una riparazione gratuita'
description: 'La fonte più grande di widget morti era codice scritto contro un''API immaginata. Ora il builder recupera l''endpoint mentre scrive, un verificatore ri-sonda ciò che ha saltato, e un crash nei primi 45 secondi compra una correzione automatica.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/verify.svg
tags: ['prodotto', 'ia', 'come-funziona']
---

Il modo più comune in cui falliva un widget generato non era un bug nel codice
generato. Era un endpoint che non è mai esistito.

Il modello ha preso un URL dalla memoria — o da una riga del directory il cui link
è una *pagina di documentazione*, non un endpoint — ha indovinato la forma della
risposta, ha scritto codice di parsing accurato contro quella ipotesi e ha
spedito. Ottenevi uno spinner eterno o un grafico vuoto, senza nulla a schermo
che dicesse perché.

Questa release chiude quel loop tre volte: mentre il modello scrive, subito dopo
che scrive, e ancora una volta se continua a crashare davanti a te.

## Mentre scrive: `probe_url`

Il builder ora ha un tool che **fa GET su un endpoint pubblico senza chiave
adesso**, tramite lo stesso proxy server che `ctx.data.http()` usa a runtime, e
restituisce lo status HTTP reale e il corpo di risposta reale.

Quell''identità è tutto il punto. Un probe che riesce *è* una chiamata runtime che
riesce. Un probe che fallisce è un widget che sarebbe uscito rotto — e fallisce
ora, mentre resta un turno per sistemare, non sul tuo canvas.

Sta in fondo a una scala che al builder viene detto di percorrere invece di
ragionare dalla memoria: docs di riferimento del venue prima, poi un **directory
di 691 API pubbliche senza chiave in 47 categorie**, ricercabile per topic su nome
*e* descrizione di ogni voce — perché richieste reali (« maree », « qualità
dell''aria ») raramente mappano su una categoria che qualcuno indovinerebbe. Quel
directory è sempre disponibile al builder ora, qualunque sia lo scope, perché è
il fallback universale senza chiave. I suoi link sono documentazione, quindi
l''ultimo passo è sempre lo stesso: derivare l''endpoint, poi sondearlo.

« Ci sono dati per X? » è una domanda a cui si risponde guardando, non ragionando
su quali dataset probabilmente esistono. Arrivare in fondo alla scala e dire *no*
dopo aver davvero controllato è un buon esito. Affermarlo dalla memoria non lo è,
ed era sbagliato molto più spesso di quanto sembrasse.

## Subito dopo che scrive: il verificatore

Chiedere al modello di verificare il proprio lavoro è una richiesta, non una
garanzia. Quindi nel momento in cui il codice del widget atterra, succedono due
cose che non dipendono dall''accordo del modello.

Primo, il risultato del tool **nomina gli endpoint che non ha sondato in questo
turno** e gli dice di andare a controllarli finché restano round.

Secondo — ed è la parte che non si basa sulla cooperazione — un verificatore gira
**in parallelo con il modello che scrive il riassunto**, e fa il lavoro da solo:

- **Lint del modulo** per le classi di fallimento silenziose per costruzione. Un
  export `render` mancante. Codice che non parsea. Un `fetch` o `WebSocket` grezzo
  verso un host terzo, che il sandbox blocca — il fallimento silenzioso più
  dannoso nei widget generati, perché nulla appare in console. Un URL immagine o
  video esterno assegnato direttamente a un `src`. Un URL tile hardcoded passato a
  una libreria mappe, che monta e fa pan perfettamente mentre ogni richiesta tile
  viene rifiutata silenziosamente.
- **Sondare ogni endpoint saltato dal modello** (fino a cinque per modulo), e
  leggere il verdetto come farebbe il modello: irraggiungibile, o un 4xx che dice
  che l''URL o i suoi parametri sono sbagliati.

I problemi reali comprano **un round di riparazione automatica in-turn**, con
l''output del probe allegato come prova e l''istruzione di correggere solo ciò che
è stato nominato. Quel round avviene mentre il contesto completo del build è
ancora caldo — molto più economico che spedire rotto e spendere un turno intero
dopo. Se il modello riscrive il modulo a metà volo, la verifica già in corso è
superata e il suo verdetto scartato. E un verificatore che fallisce internamente
verifica clean: può ritardare un build, mai romperne uno.

## Se continua a crashare: una riparazione, rigidamente limitata

Il contesto auto-riparazione alimentava già errori runtime nel *prossimo* turno
chat — ma solo quando ne inviavi uno. Un widget che crashava secondi dopo il build
restava rotto finché non te ne accorgevi, riaprivi il compositor e scrivevi « è
rotto ».

Ora l''host runtime spende **un turno fix automatico** quando un build fresco
crash. Un turno automatico è l''app che spende i tuoi crediti o la tua chiave,
quindi i limiti sono deliberatamente stretti:

- solo la versione che un build IA *appena* ha prodotto — un crash in una versione
  vecchia che hai ripristinato, o in codice modificato a mano, non qualifica mai;
- solo entro **45 secondi** da quel build, perché un crash un''ora dopo è nuova
  informazione per te, non un difetto evidente del build;
- **una volta per versione**, e una versione prodotta *da* un turno auto-riparazione
  è essa stessa ineleggibile. Un build può innescare al massimo un follow-up
  automatico — mai una catena del modello che si paga per continuare a fallire.

Il turno riparazione è formulato come l''app che segnala un difetto, e porta la
stessa istruzione di tutto quanto sopra: se il fallimento coinvolge un endpoint
dati, sondarlo prima di riscrivere. Correggilo, tieni ciò che funziona, non
allargare lo scope del widget.

Lato server, un build background salvato ora aspetta quando un altro turno dello
stesso widget è già live, invece di gareggiare verso una versione duplicata.

## Stesso loop, ogni modalità

Tutto questo vive in un modulo condiviso, quindi build piattaforma, build
bring-your-own-key nel browser e sweep build server hanno comportamento
**identico** — stessi tool, stesso formato probe, stesso verificatore, stesso
budget riparazione. Le modalità non possono divergere su quali tool esistono o
quanto rigorosamente un widget è controllato, perché c''è una sola implementazione
della risposta. È anche il loop che ha prodotto [i dieci widget di esempio](/blog/starter-widgets-examples-workspace)
in uscita con la prossima release: costruiti esattamente con questo, con
esattamente questi controlli.

Nulla di tutto ciò rende un modello corretto. Rende l''errore sopravvivibile, e
di solito invisibile: l''endpoint viene controllato prima che il codice ne dipenda,
il controllo gira che il modello abbia voglia di eseguirlo o no, e il primo crash
ottiene un tentativo onesto di fix prima di raggiungerti.

[Lancia Nexow](https://x.nexow.ai) e chiedi qualcosa di oscuro — maree, qualità
dell''aria, festività pubbliche. Guarda il rail attività sondare l''endpoint prima
di scrivere una riga di codice di parsing.
