---
title: 'Pubblica un feed di dati: fai girare il tuo widget senza la tua chiave'
description: 'Un widget costruito sulla tua connessione Binance o OANDA era inutilizzabile per chiunque altro. Ora puoi pubblicare esattamente le letture che esegue come endpoint in sola lettura e in cache, sotto il tuo profilo — senza condividere la chiave e senza aprire un proxy.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/datafeeds.svg
tags: ['prodotto', 'widgets', 'dati']
---

Nella condivisione c'era un buco fastidioso. Costruisci uno splendido grafico FX
sulla tua connessione OANDA, lo pubblichi, e la prima persona che lo installa legge
*Collega OANDA per usare questi dati* — un modo cortese di chiedere a uno
sconosciuto di aprire un conto presso un broker per guardare un grafico. Condiviso
su una schermata live era anche peggio: il widget si congelava in una miniatura.

La soluzione non è prestare a nessuno la tua chiave. È pubblicare **le letture che
il tuo widget esegue davvero**, come endpoint a sé stanti, sotto il tuo profilo:

```
GET /<utente>/api/w/<widget>/<endpoint>?symbol=EUR_USD&interval=H1
```

Si attiva dalla finestra di pubblicazione — *Pubblica un feed di dati in sola
lettura* — e chi non ha una connessione propria legge il tuo feed invece di vedersi
chiedere di collegarsi.

## Tre regole, e ognuna è un rifiuto

**Solo letture che è sicuro condividere.** Tredici metodi di dati sono
pubblicabili. Gli altri sono bloccati, ciascuno per una sua ragione: `account` e
`positions` sono letture anche loro, ma restituiscono saldo, patrimonio, P&L e
posizioni aperte. `order` e `closePosition` muovono denaro. `upsert` e `delete`
distruggono dati. `scrape` addebita a terzi ogni chiamata. E `http` da solo è già
privo di credenziali: pubblicarlo costruirebbe soltanto un proxy aperto con sopra il
tuo nome.

**Solo le chiamate che il widget ha davvero fatto.** Le letture riuscite del tuo
widget vengono registrate mentre gira, e la finestra di pubblicazione ti mostra
l'elenco — *candele da Binance — BTCUSDT, 1h* — come la cosa concreta che stai
accettando. Una richiesta che chieda un parametro che non hai mai pubblicato, o un
valore fuori dall'insieme a cui l'hai allargato, viene rifiutata prima che si decifri
alcunché. I parametri che non dovrebbero stare in una URL — una query SQL, un
vettore — non ci compaiono mai: vengono riprodotti alla lettera dallo storage.

**I rifiuti sono indistinguibili.** Un endpoint che non esiste, un parametro fuori
elenco e un pubblico di cui non fai parte restituiscono tutti lo stesso 404. Che
esista o meno un feed riservato agli amici è già un'informazione sull'autore: la
risposta non la fa trapelare mai.

## Chi può leggerlo, e cosa ti costa

Il pubblico non è un quarto interruttore da dimenticare: **segue il post di
annuncio** — chiunque, i tuoi follower o i tuoi amici. Un annuncio privato disattiva
del tutto il feed, perché un annuncio che solo tu puoi vedere a sostegno di un
endpoint che altri chiamano non ha senso.

Il costo è la parte che vale la pena capire, perché è quella che spaventa. Scegli un
intervallo di aggiornamento — ogni 30 secondi, 5 minuti, ogni ora o ogni giorno — e
quello è il **massimo** utilizzo della tua connessione, per quante persone aprano il
widget. Chi legge condivide una sola copia in cache. Dieci spettatori e diecimila
fanno lo stesso numero di chiamate, e per ogni finestra è consentito un solo
aggiornamento anche se più lettori mancano la cache nello stesso istante.

La tua chiave non lascia mai il server. Saldo, posizioni e ordini non vengono mai
pubblicati. E il feed è legato alla scheda: togli il widget dall'elenco e gli
endpoint smettono di servire.

## La connessione di chi guarda vince sempre

Un feed pubblicato è un ripiego, mai un sostituto. Se chi apre il tuo widget ha la
propria connessione OANDA, il widget usa **la sua**: il suo conto, i suoi dati, i
suoi limiti. Il feed viene consultato solo dopo che il widget non è riuscito a
trovare una connessione propria, e un mancato riscontro è silenzioso: vedrà il
consueto messaggio *collega questo venue* invece di un nuovo errore da imparare.

Quegli endpoint passano per gli stessi adattatori di venue che l'app già include,
così un feed pubblicato restituisce forme identiche a quelle che vedevi mentre
costruivi il widget — su ogni venue attivo del catalogo, senza codice dedicato a
nessuno.

## Cosa non farà, di proposito

- **Una dashboard di trading condivisa disegna il suo grafico, non il suo pannello
  conto.** È l'elenco dei metodi bloccati che fa il suo lavoro, non un bug.
- **Un selettore di simboli offre solo quelli che hai elencato.** Un widget con
  input libero ripiega su un insieme fisso. È il prezzo per non costruire un proxy
  aperto verso il tuo broker.
- **In modalità privata non si può pubblicare un feed.** In modalità privata le tue
  credenziali vivono solo nel sigillo di questo dispositivo: nessun server le
  possiede, quindi nessuno può aggiornare nulla al posto tuo.
- **Un fork non eredita il feed.** I feed sono legati al lignaggio del widget:
  ogni copia installata risolve gli stessi endpoint, e un fork non ne risolve nessuno.

È poca cosa da attivare, e cambia che cosa significhi pubblicare: un widget che
condividi è ora un widget che le persone possono davvero far girare.

[Apri Nexow](https://x.nexow.ai), prendi un widget che hai costruito su una
connessione con chiave e pubblicalo con il feed attivo.
