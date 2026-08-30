import type { LegalBundle } from './types';
import { ADDRESS, APP, CONTACT_BLOCK, EMAIL, ENTITY, WEB } from './shared';

const UPDATED = 'Ultimo aggiornamento: 29 luglio 2026';

export const it: LegalBundle = {
  privacyPage: {
    badge: 'Privacy',
    title: 'Informativa sulla Privacy',
    subtitle:
      `Come Nexow, Inc. raccoglie, utilizza e protegge le informazioni personali quando utilizzi ${WEB} e l’applicazione Nexow.`,
    meta: {
      title: 'Informativa sulla Privacy — Nexow',
      description:
        'Informativa sulla Privacy di Nexow, Inc.: dati raccolti, modalità di utilizzo, cookie e diritti privacy ai sensi del GDPR, della CCPA/CPRA e di altre leggi applicabili.',
    },
    updated: UPDATED,
    governingNote:
      'La lingua vincolante di questa Informativa sulla Privacy è l’inglese (English). Le traduzioni sono offerte solo per comodità e non modificano la versione in inglese.',
    sections: [
      {
        h: '1. Chi siamo',
        paragraphs: [
          `La presente Informativa sulla Privacy descrive come ${ENTITY} (“Nexow”, “noi” o “nostro”) tratta le informazioni personali in relazione ai nostri siti web (incluso ${WEB}), all’applicazione web Nexow (${APP}) e ai servizi correlati (collettivamente, i “Servizi”).`,
          `Titolare del trattamento / ente: ${CONTACT_BLOCK}`,
          'Per domande su questa Informativa o per esercitare diritti privacy, contattateci all’indirizzo o all’email sopra indicati con oggetto “Privacy Request”.',
        ],
      },
      {
        h: '2. Ambito di applicazione',
        paragraphs: [
          'La presente Informativa si applica alle informazioni personali che trattiamo quando visitate il nostro sito di marketing, create o utilizzate un account Nexow, create o condividete workspace e widget, collegate servizi di terze parti, acquistate o gestite un piano, o interagite altrimenti con i Servizi.',
          'Non si applica a siti web, applicazioni, venue o API di terze parti che scegliete di collegare; questi sono regolati dalle rispettive informative privacy. Quando un connettore viene eseguito nel vostro browser verso una terza parte, quest’ultima è in genere un titolare autonomo dei dati che le inviate.',
        ],
      },
      {
        h: '3. Informazioni che raccogliamo',
        paragraphs: [
          'Dati di account e profilo: indirizzo email, nome visualizzato, identificativi di autenticazione, stato del piano o della fatturazione, preferenze e impostazioni analoghe dell’account.',
          'Dati di workspace e prodotto: widget, prompt, codice o configurazioni generati, versioni, log, elementi della libreria, stato di sincronizzazione, metadati di collaborazione e contenuti correlati che create o caricate nei Servizi.',
          'Dati di connessione: token, chiavi API o credenziali OAuth fornite per connettori di terze parti (trattati come descritto in “Connessioni e credenziali”), nonché metadati tecnici necessari per mantenere tali connessioni.',
          'Dati di utilizzo e dispositivo: indirizzo IP, tipo di browser, informazioni su dispositivo o sistema operativo, posizione approssimativa derivata dall’IP, referrer, pagine visualizzate, utilizzo delle funzionalità, eventi di prestazione e diagnostica, e telemetria analoga necessaria per operare e proteggere i Servizi.',
          'Comunicazioni: messaggi che ci inviate (supporto, privacy o richieste legali) e la corrispondenza correlata.',
          'Dati di pagamento: se acquistate un piano a pagamento, il metodo di pagamento e i dati di fatturazione sono in genere trattati dal nostro processore di pagamenti; riceviamo metadati di fatturazione limitati (ad es., piano, stato, ultime quattro cifre o token equivalenti) e non il numero completo della carta quando il processore lo consente.',
          'Cookie e tecnologie simili: consultate la nostra Informativa sui Cookie per maggiori dettagli.',
        ],
      },
      {
        h: '4. Come utilizziamo le informazioni',
        paragraphs: [
          'Utilizziamo le informazioni personali per: fornire, mantenere e migliorare i Servizi; autenticare gli utenti e proteggere gli account; archiviare e sincronizzare i contenuti del workspace richiesti; elaborare transazioni e inviare comunicazioni di servizio; rispondere a richieste di supporto e privacy; monitorare affidabilità, abusi e sicurezza; adempiere agli obblighi di legge; e, ove consentito, comunicare aggiornamenti sul prodotto (potete opporvi al marketing non essenziale).',
          'Non vendiamo informazioni personali secondo la definizione comunemente adottata di “vendita” ai sensi della CCPA/CPRA, e non condividiamo informazioni personali per pubblicità comportamentale cross-context secondo la legge californiana, salvo quanto indicato nella nostra Informativa sui Cookie qualora introducessimo cookie pubblicitari (in tal caso aggiorneremo la presente Informativa e offriremo le opzioni di opt-out richieste).',
        ],
      },
      {
        h: '5. Basi giuridiche (SEE / Regno Unito / Svizzera)',
        paragraphs: [
          'Quando si applicano il GDPR dell’UE, il UK GDPR o la LPD svizzera, trattiamo i dati personali sulla base di una o più delle seguenti: esecuzione di un contratto (fornitura dei Servizi richiesti); interessi legittimi (protezione e miglioramento dei Servizi, prevenzione degli abusi, analisi di base), bilanciati rispetto ai vostri diritti; consenso (ove richiesto, ad es. determinati cookie o marketing facoltativo); e obbligo legale (conservazione dei registri o risposta a richieste lecite).',
        ],
      },
      {
        h: '6. Connessioni e credenziali',
        paragraphs: [
          'Quando un servizio di terze parti lo consente, Nexow può connettersi direttamente dal vostro browser in modo che le credenziali siano utilizzate principalmente per comunicare con tale servizio. Alcuni servizi richiedono un proxy o un componente lato server; in tali casi trattiamo solo quanto necessario per evadere la richiesta e operare il connettore.',
          'Siete responsabili di assicurarvi di avere il diritto di collegare ciascun servizio e di configurare credenziali con privilegi minimi. Revocate l’accesso nel servizio di terze parti e in Nexow quando non avete più bisogno di una connessione.',
        ],
      },
      {
        h: '7. Contenuti generati e funzionalità di IA',
        paragraphs: [
          'Quando utilizzate funzionalità di generazione o assistite dall’IA, prompt e contesto correlato possono essere trattati da noi e/o da fornitori di modelli o infrastrutture che utilizziamo per erogare la funzionalità. Utilizziamo tale trattamento per generare risultati nel vostro workspace e per operare e migliorare i Servizi, nel rispetto dei nostri contratti con tali fornitori.',
          'Non inviate segreti, dati personali regolamentati o dati riservati di terze parti nei prompt, salvo che abbiate una base giuridica lecita e accettiate il rischio che tali contenuti possano essere trattati da sub-responsabili coinvolti nella generazione.',
        ],
      },
      {
        h: '8. Comunicazioni e responsabili del trattamento',
        paragraphs: [
          'Condividiamo informazioni personali con: fornitori di servizi (hosting, analitica, email, pagamenti, monitoraggio errori, fornitori di IA/modelli) vincolati da contratti che limitano l’uso alla fornitura di servizi a noi; consulenti professionali; autorità quando richiesto dalla legge o per proteggere diritti e sicurezza; e successori in caso di fusione, acquisizione o cessione di beni (con avviso ove richiesto).',
          'Possiamo inoltre condividere informazioni che scegliete di rendere pubbliche o di condividere con altri utenti (ad es., widget pubblicati, funzionalità community) secondo le vostre impostazioni.',
        ],
      },
      {
        h: '9. Trasferimenti internazionali',
        paragraphs: [
          `${ENTITY} ha sede negli Stati Uniti. Se accedete ai Servizi dal SEE, dal Regno Unito, dalla Svizzera o da altre regioni, le vostre informazioni possono essere trasferite e trattate negli Stati Uniti e in altri Paesi con norme di protezione dei dati diverse.`,
          'Ove richiesto, utilizziamo garanzie adeguate per i trasferimenti (come le Clausole Contrattuali Standard o meccanismi successori) e adottiamo misure che riteniamo ragionevoli per proteggere le informazioni personali.',
        ],
      },
      {
        h: '10. Conservazione',
        paragraphs: [
          'Conserviamo le informazioni personali finché il vostro account è attivo o per il tempo necessario a fornire i Servizi, adempiere agli obblighi di legge, risolvere controversie e far valere gli accordi. I contenuti del workspace in genere persistono fino alla cancellazione da parte vostra o alla chiusura dell’account, fatte salve copie di backup e periodi di conservazione legale. Potete richiedere la cancellazione come indicato di seguito; alcune copie residue possono permanere nei backup per un periodo limitato.',
        ],
      },
      {
        h: '11. Sicurezza',
        paragraphs: [
          'Implementiamo misure tecniche e organizzative progettate per proteggere le informazioni personali (controlli di accesso, crittografia in transito ove appropriato, pratiche di privilegio minimo). Nessun metodo di trasmissione o archiviazione è completamente sicuro; siete responsabili della protezione delle credenziali dell’account e dei dispositivi.',
        ],
      },
      {
        h: '12. I vostri diritti — Europa e Regno Unito (GDPR)',
        paragraphs: [
          'Se vi trovate nel SEE, nel Regno Unito o in Svizzera, potete avere diritto ad accesso, rettifica, cancellazione, limitazione o opposizione a determinati trattamenti; alla portabilità dei dati; e a revocare il consenso ove il trattamento si basi su di esso, senza pregiudicare il trattamento lecito precedente. Potete presentare reclamo presso l’autorità di controllo locale.',
          `Per esercitare tali diritti, scrivete a ${EMAIL} con oggetto “Privacy Request”. Potremmo dover verificare la vostra identità prima di evadere la richiesta.`,
        ],
      },
      {
        h: '13. I vostri diritti — Stati Uniti (inclusa CCPA/CPRA)',
        paragraphs: [
          'A seconda dello Stato di residenza (inclusa la California ai sensi della CCPA/CPRA), potete avere diritto a conoscere/accedere, cancellare, correggere e opportarvi alla vendita o condivisione di informazioni personali, e a limitare l’uso di informazioni personali sensibili ove applicabile. Non vi discrimineremo per l’esercizio dei diritti privacy.',
          `Inviate le richieste a ${EMAIL} (oggetto: “Privacy Request”) o per posta a ${ADDRESS}. Gli agenti autorizzati possono presentare richieste come consentito dalla legge; potremmo richiedere prova dell’autorizzazione e verifica dell’identità.`,
          'Se offriamo un controllo “Do Not Sell or Share” o simile (incluso Global Privacy Control ove lo rispettiamo), lo descriveremo nell’Informativa sui Cookie o nelle impostazioni del prodotto.',
        ],
      },
      {
        h: '14. Note sull’Asia-Pacifico (livello generale)',
        paragraphs: [
          `Se vi trovate in giurisdizioni come Singapore (PDPA), Giappone (APPI), Corea del Sud (PIPA) o altre regioni dell’Asia-Pacifico con leggi sui dati personali, trattiamo le informazioni come descritto nella presente Informativa e in conformità ai requisiti locali applicabili nella misura in cui si applicano a ${ENTITY} in qualità di fornitore statunitense di Servizi online.`,
          `Potete contattarci a ${EMAIL} per richiedere accesso, rettifica o cancellazione conformemente alla legge applicabile. Ove la normativa locale richieda un rappresentante locale o avvisi aggiuntivi, aggiorneremo la presente Informativa o pubblicheremo avvisi specifici per regione.`,
        ],
      },
      {
        h: '15. Minori',
        paragraphs: [
          'I Servizi non sono destinati a minori di 16 anni (o all’età superiore richiesta nella vostra giurisdizione). Non raccogliamo consapevolmente informazioni personali di minori. Se ritenete che un minore ci abbia fornito informazioni, contattateci e adotteremo le misure appropriate per cancellarle.',
        ],
      },
      {
        h: '16. Sito di marketing',
        paragraphs: [
          'Il nostro sito di marketing è prevalentemente statico e utilizza analitica e cookie limitati, come descritto nell’Informativa sui Cookie. Non vendiamo dati personali raccolti dal sito di marketing. I link in uscita (incluso quello all’app) sono indicati ove praticabile.',
        ],
      },
      {
        h: '17. Modifiche',
        paragraphs: [
          'Possiamo aggiornare periodicamente la presente Informativa. La data di “Ultimo aggiornamento” cambierà quando pubblichiamo revisioni. Le modifiche sostanziali possono essere evidenziate sul sito o notificate via email ove appropriato. L’uso continuato dei Servizi dopo un aggiornamento costituisce accettazione dell’Informativa revisionata nella misura consentita dalla legge.',
        ],
      },
      {
        h: '18. Contatti',
        paragraphs: [
          `Richieste privacy e protezione dei dati: ${EMAIL}`,
          `Posta: ${ENTITY}, ${ADDRESS}`,
          `Web: ${WEB}`,
        ],
      },
    ],
  },
  termsPage: {
    badge: 'Termini',
    title: 'Termini di Utilizzo',
    subtitle: `L’accordo tra voi e Nexow, Inc. per l’utilizzo di ${WEB} e dell’applicazione Nexow.`,
    meta: {
      title: 'Termini di Utilizzo — Nexow',
      description:
        'Termini di Utilizzo dei siti web e dell’applicazione di Nexow, Inc.: account, uso accettabile, proprietà intellettuale, esclusioni di garanzia, responsabilità e legge applicabile.',
    },
    updated: UPDATED,
    governingNote:
      'La lingua vincolante dei presenti Termini di Utilizzo è l’inglese (English). Le traduzioni sono offerte solo per comodità e non modificano la versione in inglese.',
    sections: [
      {
        h: '1. Accordo',
        paragraphs: [
          `I presenti Termini di Utilizzo (“Termini”) costituiscono un accordo vincolante tra voi e ${ENTITY} (“Nexow”, “noi” o “nostro”) che regola l’accesso e l’utilizzo di ${WEB}, ${APP} e dei servizi correlati (i “Servizi”).`,
          'Accedendo o utilizzando i Servizi, creando un account o accettando i presenti Termini, accettate questi ultimi nonché la nostra Informativa sulla Privacy e la nostra Informativa sui Cookie. Se non siete d’accordo, non utilizzate i Servizi.',
          'Se utilizzate i Servizi per conto di un’organizzazione, dichiarate di avere l’autorità per vincolarla, e “voi” include tale organizzazione.',
        ],
      },
      {
        h: '2. I Servizi',
        paragraphs: [
          'Nexow fornisce strumenti per descrivere, generare, configurare, visualizzare e condividere widget e workspace, incluse connessioni a fonti di dati di terze parti e funzionalità facoltative di collaborazione, community o marketplace man mano che le rendiamo disponibili.',
          'Possiamo modificare, sospendere o interrompere funzionalità, piani o i Servizi (in tutto o in parte) con un preavviso ragionevole ove praticabile. Le funzionalità in anteprima o beta possono essere instabili e sono fornite così come sono.',
        ],
      },
      {
        h: '3. Idoneità e account',
        paragraphs: [
          'Dovete avere almeno l’età del consenso digitale nella vostra giurisdizione (e, in ogni caso, almeno 16 anni, o 18 ove richiesto) per utilizzare i Servizi. Dovete fornire informazioni di account veritiere e mantenere riservate le credenziali. Siete responsabili dell’attività svolta con il vostro account.',
          'Possiamo sospendere o chiudere account che violino i presenti Termini, comportino un rischio per la sicurezza o restino inattivi per un periodo prolungato.',
        ],
      },
      {
        h: '4. Piani, crediti e pagamento',
        paragraphs: [
          'Alcune funzionalità richiedono un piano a pagamento, crediti o altri limiti di utilizzo. Prezzi, quote incluse e periodi di fatturazione sono descritti nella pagina Piani o nel prodotto. Salvo diversa indicazione, le tariffe non sono rimborsabili, salvo ove richiesto dalla legge.',
          'Ci autorizzate, noi e i nostri processori di pagamento, ad addebitare le tariffe applicabili. Possono applicarsi imposte. Possiamo modificare i prezzi con preavviso; le modifiche hanno effetto al rinnovo successivo salvo diversa indicazione.',
        ],
      },
      {
        h: '5. I vostri contenuti e licenza',
        paragraphs: [
          'Conservate la titolarità dei contenuti che inviate o create nei Servizi (“Contenuti Utente”), inclusi prompt, widget e configurazioni, fatti salvi i diritti di terze parti e di Nexow sulla nostra piattaforma, modelli e scaffolding generato non esclusivo dei vostri input.',
          `Concedete a ${ENTITY} una licenza mondiale e non esclusiva per ospitare, trattare, trasmettere, visualizzare e creare opere derivate dei Contenuti Utente esclusivamente nella misura necessaria per operare, proteggere e migliorare i Servizi e come da voi indicato (ad es., condivisione o pubblicazione).`,
          'Dichiarate di possedere tutti i diritti necessari per inviare Contenuti Utente e per collegare eventuali servizi di terze parti, e che i Contenuti Utente non violano la legge né diritti di terze parti.',
        ],
      },
      {
        h: '6. Uso accettabile',
        paragraphs: [
          'Dovete rispettare la nostra Politica di Uso Accettabile e tutte le leggi applicabili. Non potete utilizzare indebitamente i Servizi, interferire con altri, tentare accessi non autorizzati, estrarre dati in modo abusivo, né utilizzare i Servizi per trading illecito, frode, malware o violazioni.',
          'Nexow è una piattaforma di strumenti e visualizzazione. Nulla nei Servizi costituisce consulenza finanziaria, di investimento, legale o fiscale. I dati di mercato e gli esempi possono essere illustrativi; siete gli unici responsabili delle decisioni che prendete.',
        ],
      },
      {
        h: '7. Servizi di terze parti',
        paragraphs: [
          'Connettori e integrazioni sono facoltativi e soggetti ai termini di terze parti. Non siamo responsabili della disponibilità, accuratezza, tariffe o pratiche sui dati di terze parti. Le credenziali fornite sono utilizzate come descritto nell’Informativa sulla Privacy.',
        ],
      },
      {
        h: '8. Proprietà intellettuale',
        paragraphs: [
          `I Servizi, inclusi software, marchio, documentazione e contenuti diversi dai Contenuti Utente, sono di proprietà di ${ENTITY} o dei suoi licenzianti e sono protetti dalle leggi sulla proprietà intellettuale. Salvo il diritto limitato di utilizzare i Servizi conformemente ai presenti Termini, non viene concesso alcun altro diritto.`,
          'Possiamo utilizzare i feedback che ci fornite senza obblighi nei vostri confronti.',
        ],
      },
      {
        h: '9. Riservatezza e sicurezza',
        paragraphs: [
          'Non dovete tentare di sondare, eludere o compromettere i controlli di sicurezza. Segnalate responsabilmente eventuali vulnerabilità sospette. Implementiamo misure di sicurezza ragionevoli, ma non possiamo garantire una sicurezza assoluta.',
        ],
      },
      {
        h: '10. Esclusione di garanzie',
        paragraphs: [
          'I SERVIZI SONO FORNITI “COSÌ COME SONO” E “SECONDO DISPONIBILITÀ”. NELLA MASSIMA MISURA CONSENTITA DALLA LEGGE, ESCLUDIAMO TUTTE LE GARANZIE, ESPRESSE O IMPLICITE, INCLUSE COMMERCIABILITÀ, IDONEITÀ A UNO SCOPO PARTICOLARE E NON VIOLAZIONE. NON GARANTIAMO CHE I SERVIZI SIANO ININTERROTTI, PRIVO DI ERRORI O DI COMPONENTI DANNOSI, NÉ CHE I RISULTATI (INCLUSI CONTENUTI GENERATI DALL’IA) SIANO ACCURATI, COMPLETI O ADATTI AL VOSTRO SCOPO.',
        ],
      },
      {
        h: '11. Limitazione di responsabilità',
        paragraphs: [
          `NELLA MASSIMA MISURA CONSENTITA DALLA LEGGE, ${ENTITY} E I SUOI AMMINISTRATORI, DIRIGENTI, DIPENDENTI E AGENTI NON SARANNO RESPONSABILI PER DANNI INDIRETTI, INCIDENTALI, SPECIALI, CONSEQUENZIALI, ESEMPLARI O PUNITIVI, NÉ PER MANCATO GUADAGNO, PERDITA DI RICAVI, DATI O AVVIAMENTO, DERIVANTI DA O RELATIVI AI SERVIZI O AI PRESENTI TERMINI, SIA IN CONTRATTO, ILLECITO CIVILE O ALTRO, ANCHE SE INFORMATI DELLA POSSIBILITÀ.`,
          'LA NOSTRA RESPONSABILITÀ AGGREGATA PER TUTTE LE RICHIESTE RELATIVE AI SERVIZI O AI PRESENTI TERMINI NON SUPERERÀ IL MAGGIORE TRA (A) GLI IMPORTI DA VOI PAGATI PER I SERVIZI NEI DODICI (12) MESI PRECEDENTI LA RICHIESTA O (B) CENTO DOLLARI STATUNITENSI (100 USD). ALCUNE GIURISPRUDENZE NON CONSENTONO DETERMINATE LIMITAZIONI; IN TALI CASI LA NOSTRA RESPONSABILITÀ È LIMITATA AL MASSIMO CONSENTITO.',
        ],
      },
      {
        h: '12. Indennizzo',
        paragraphs: [
          `Difenderete e indennizzerete ${ENTITY} da richieste, danni e spese (inclusi onorari legali ragionevoli) derivanti dai vostri Contenuti Utente, dal vostro utilizzo dei Servizi, dalle vostre connessioni a terze parti o dalla violazione dei presenti Termini o della legge.`,
        ],
      },
      {
        h: '13. Risoluzione',
        paragraphs: [
          'Potete cessare di utilizzare i Servizi in qualsiasi momento e richiedere la chiusura dell’account tramite il prodotto o contattandoci. Possiamo sospendere o terminare l’accesso per violazione, rischio o motivi legali. Le clausole che per natura devono sopravvivere (inclusa proprietà intellettuale, esclusioni, limitazioni, indennizzo e legge applicabile) sopravvivono alla risoluzione.',
        ],
      },
      {
        h: '14. Legge applicabile e controversie',
        paragraphs: [
          `I presenti Termini sono regolati dalle leggi dello Stato del Delaware, Stati Uniti, con esclusione delle norme sul conflitto di leggi. Fatte salve le protezioni obbligatorie dei consumatori nel vostro Paese di residenza, i tribunali situati nel Delaware (o i tribunali federali con giurisdizione ivi) avranno giurisdizione esclusiva sulle controversie, salvo che possiamo richiedere provvedimenti cautelari in qualsiasi giurisdizione.`,
          'Se siete consumatori nel SEE/Regno Unito, potete anche beneficiare di protezioni locali obbligatorie e, ove richiesto dalla legge, promuovere azioni nel vostro luogo di residenza.',
        ],
      },
      {
        h: '15. Modifiche',
        paragraphs: [
          'Possiamo aggiornare i presenti Termini pubblicando una versione revisionata con data aggiornata. Le modifiche sostanziali possono essere notificate nel prodotto o via email. L’uso continuato dopo la data di efficacia costituisce accettazione, salvo ove la legge applicabile richieda diversamente.',
        ],
      },
      {
        h: '16. Contatti',
        paragraphs: [
          `Comunicazioni legali: ${EMAIL}`,
          `${ENTITY}, ${ADDRESS}`,
          `Web: ${WEB}`,
        ],
      },
    ],
  },
  cookiesPage: {
    badge: 'Cookie',
    title: 'Informativa sui Cookie',
    subtitle:
      `Come Nexow, Inc. utilizza cookie e tecnologie simili su ${WEB} e nell’applicazione Nexow.`,
    meta: {
      title: 'Informativa sui Cookie — Nexow',
      description:
        'Informativa sui Cookie di Nexow, Inc.: tipi di cookie, finalità, consenso e gestione delle preferenze.',
    },
    updated: UPDATED,
    governingNote:
      'La lingua vincolante della presente Informativa sui Cookie è l’inglese (English). Le traduzioni sono offerte solo per comodità e non modificano la versione in inglese.',
    sections: [
      {
        h: '1. Introduzione',
        paragraphs: [
          `${ENTITY} (“Nexow”, “noi”) utilizza cookie e tecnologie simili (archiviazione locale, pixel, SDK) su ${WEB} e sui Servizi correlati. La presente Informativa sui Cookie spiega cosa utilizziamo, perché e come potete controllarli. Va letta congiuntamente alla nostra Informativa sulla Privacy.`,
          `Contatti: ${EMAIL} · ${ADDRESS}`,
        ],
      },
      {
        h: '2. Cosa sono i cookie',
        paragraphs: [
          'I cookie sono piccoli file di testo memorizzati sul vostro dispositivo. Tecnologie simili archiviano o leggono informazioni in modo analogo. Possono essere di “sessione” (eliminati alla chiusura del browser) o “persistenti” (conservati fino a scadenza o cancellazione), e di “prima parte” (impostati da noi) o “terza parte” (impostati da un altro dominio).',
        ],
      },
      {
        h: '3. Come utilizziamo i cookie',
        paragraphs: [
          'Strettamente necessari: richiesti per sicurezza, bilanciamento del carico, autenticazione, memorizzazione del consenso e funzionalità essenziali. Non richiedono consenso ove la legge applicabile preveda un’esenzione.',
          'Preferenze / funzionali: ricordano lingua, impostazioni dell’interfaccia o scelte analoghe.',
          'Analitica / prestazioni: ci aiutano a comprendere il traffico e a migliorare sito o app (ad es., visualizzazioni di pagina aggregate). Ove richiesto (incluso UE/Regno Unito), richiediamo consenso prima di cookie analitici non essenziali.',
          'Marketing / pubblicità: attualmente non facciamo affidamento su cookie pubblicitari di terze parti sul sito di marketing. Se ciò cambiasse, aggiorneremo la presente Informativa e otterremo il consenso ove richiesto.',
        ],
      },
      {
        h: '4. Archiviazione locale e stato dell’app',
        paragraphs: [
          'L’applicazione Nexow può utilizzare l’archiviazione del browser (ad es., localStorage, IndexedDB) per conservare dati del workspace, preferenze o stato di sessione. Tale archiviazione è necessaria per operare le funzionalità del prodotto che utilizzate ed è descritta più dettagliatamente nell’Informativa sulla Privacy.',
        ],
      },
      {
        h: '5. Consenso (Europa e regimi analoghi)',
        paragraphs: [
          'Quando la Direttiva ePrivacy / il GDPR (o l’equivalente britannico) richiedono consenso per cookie non essenziali, lo richiederemo prima di impostarli e rispetteremo le revoche. I cookie strettamente necessari possono essere impostati indipendentemente dai banner di consenso.',
          'Potete modificare le impostazioni del browser per bloccare o eliminare i cookie; alcune funzionalità potrebbero non funzionare correttamente se i cookie essenziali sono bloccati.',
        ],
      },
      {
        h: '6. Stati Uniti e altre regioni',
        paragraphs: [
          'Negli Stati Uniti, le informative sui cookie supportano la trasparenza ai sensi delle leggi statali sulla privacy (inclusi i concetti di “vendita”/“condivisione” della CCPA/CPRA quando si utilizzano cookie pubblicitari). Gli utenti dell’Asia-Pacifico possono avere diritti analoghi di trasparenza e scelta ai sensi delle leggi locali (ad es., PDPA, APPI); contattateci per esercitare i diritti applicabili.',
        ],
      },
      {
        h: '7. Gestione dei cookie',
        paragraphs: [
          'Controlli del browser: utilizzate le pagine di aiuto del browser per rifiutare o eliminare i cookie.',
          'Controlli nel prodotto / sito: ove offriamo uno strumento di preferenze sui cookie, utilizzatelo per regolare le categorie non essenziali.',
          `Domande: ${EMAIL}`,
        ],
      },
      {
        h: '8. Modifiche',
        paragraphs: [
          'Possiamo aggiornare la presente Informativa sui Cookie quando cambiano le nostre pratiche. Consultate la data di “Ultimo aggiornamento”. Le modifiche sostanziali saranno riflesse in questa pagina e, ove richiesto, mediante un nuovo consenso.',
        ],
      },
    ],
  },
  legalPage: {
    badge: 'Legal',
    title: 'Informazioni legali e societarie',
    subtitle: 'Dati ufficiali dell’azienda e documenti legali pubblici di Nexow, Inc.',
    meta: {
      title: 'Legal — Nexow, Inc.',
      description:
        'Informazioni legali e societarie di Nexow, Inc., incluso l’indirizzo registrato e i link alle informative Privacy, Termini, Cookie e Uso Accettabile.',
    },
    updated: UPDATED,
    governingNote:
      'Le informazioni societarie e i documenti legali sono forniti in inglese (English) come lingua vincolante, salvo ove la legge richieda una versione locale obbligatoria.',
    sections: [
      {
        h: '1. Dati dell’azienda',
        paragraphs: [
          `Entità giuridica: ${ENTITY}`,
          `Sede legale / indirizzo postale: ${ADDRESS}`,
          `Sito web: ${WEB}`,
          `Applicazione: ${APP}`,
          `Contatto generale: ${EMAIL}`,
        ],
      },
      {
        h: '2. Documenti legali pubblici',
        paragraphs: [
          'I seguenti documenti costituiscono i nostri contratti legali pubblici per il sito web e l’applicazione:',
          '• Informativa sulla Privacy — come trattiamo le informazioni personali (con riferimento GDPR/CCPA e note sull’Asia-Pacifico).',
          '• Termini di Utilizzo — condizioni che regolano l’utilizzo dei Servizi.',
          '• Informativa sui Cookie — cookie e tecnologie simili.',
          '• Politica di Uso Accettabile — condotte vietate e richieste.',
          'I link sono nel footer del sito e in /privacy, /terms, /cookies e /acceptable-use.',
        ],
      },
      {
        h: '3. Avviso tipo imprint',
        paragraphs: [
          `Per chi cerca un “avviso legale”, “imprint” o dati di identificazione dell’azienda: i Servizi sono gestiti da ${ENTITY}, con sede in ${ADDRESS}. Contatto online: ${EMAIL}. Questa pagina intende soddisfare le comuni aspettative di trasparenza negli Stati Uniti, in Europa e in altre regioni per identificare l’operatore del servizio.`,
        ],
      },
      {
        h: '4. Trattamento dei dati',
        paragraphs: [
          'Nexow tratta i dati personali come descritto nell’Informativa sulla Privacy. I clienti che necessitano di un Data Processing Addendum (DPA) o clausole contrattuali equivalenti ai sensi dell’articolo 28 del GDPR (o equivalente) possono richiederlo via email con oggetto “DPA Request”. I sub-responsabili standard e le garanzie per i trasferimenti sono descritti nell’Informativa sulla Privacy o forniti su richiesta.',
        ],
      },
      {
        h: '5. Avvertenze',
        paragraphs: [
          'Nexow è una piattaforma di strumenti e visualizzazione. I contenuti del sito di marketing e dell’app (inclusi esempi di dati di mercato) non costituiscono consulenza finanziaria, di investimento, legale o fiscale. Restate gli unici responsabili della conformità alle leggi applicabili al vostro utilizzo di venue e dati collegati.',
        ],
      },
      {
        h: '6. Lingua vincolante',
        paragraphs: [
          'L’inglese (English) è la lingua vincolante dei nostri documenti legali. L’interfaccia o i riepiloghi in altre lingue sono offerti solo per comodità e non modificano i termini in inglese, salvo che pubblichiamo espressamente una versione locale vincolante.',
        ],
      },
      {
        h: '7. Contatti per questioni legali',
        paragraphs: [
          `Email: ${EMAIL} (oggetto: “Legal”)`,
          `Posta: ${ENTITY}, ${ADDRESS}`,
        ],
      },
    ],
  },
  acceptableUsePage: {
    badge: 'Uso accettabile',
    title: 'Politica di Uso Accettabile',
    subtitle: 'Regole per utilizzare i siti web Nexow e l’applicazione Nexow in modo responsabile e lecito.',
    meta: {
      title: 'Politica di Uso Accettabile — Nexow',
      description:
        'Politica di Uso Accettabile di Nexow, Inc.: attività vietate, regole di sicurezza e misure di enforcement.',
    },
    updated: UPDATED,
    governingNote:
      'La lingua vincolante della presente Politica di Uso Accettabile è l’inglese (English). Le traduzioni sono offerte solo per comodità.',
    sections: [
      {
        h: '1. Finalità',
        paragraphs: [
          `La presente Politica di Uso Accettabile (“AUP”) si applica al vostro utilizzo dei Servizi gestiti da ${ENTITY}. Integra i Termini di Utilizzo. La violazione può comportare sospensione o chiusura.`,
        ],
      },
      {
        h: '2. Attività vietate',
        paragraphs: [
          'Non potete utilizzare i Servizi per: violare la legge o diritti di terze parti; distribuire malware, spam o phishing; tentare accessi non autorizzati a sistemi, account o dati; interferire o compromettere i Servizi; estrarre o raccogliere dati in modo da sovraccaricare l’infrastruttura o violare i termini di terze parti; eludere limiti di utilizzo o controlli di sicurezza; falsificare identità o affiliazione; o caricare dati illeciti, violativi o altamente sensibili e regolamentati senza autorizzazione.',
          'Non potete utilizzare i Servizi per facilitare frode, manipolazione di mercato, elusione di sanzioni o attività di trading illecita. Non dovete generare o distribuire widget il cui scopo principale sia abuso, inganno o danno.',
        ],
      },
      {
        h: '3. Credenziali e connettori',
        paragraphs: [
          'Utilizzate solo credenziali che siete autorizzati a usare. Non condividete l’accesso all’account in modo non sicuro. Configurate i connettori con privilegi minimi. Non tentate di estrarre segreti appartenenti ad altri utenti.',
        ],
      },
      {
        h: '4. IA e risultati generati',
        paragraphs: [
          'Non utilizzate le funzionalità di generazione per creare contenuti illegali, che violino la proprietà intellettuale o destinati a ingannare terze parti su larga scala (ad es., comportamento inautentico coordinato). Siete responsabili di verificare i risultati prima di fare affidamento su di essi.',
        ],
      },
      {
        h: '5. Uso ragionevole delle risorse',
        paragraphs: [
          'Piani e crediti hanno limiti di utilizzo. Il consumo automatizzato o abusivo che degrada il servizio per altri può essere limitato o bloccato.',
        ],
      },
      {
        h: '6. Segnalazioni e enforcement',
        paragraphs: [
          `Segnalate abusi a ${EMAIL} con oggetto “Abuse”. Possiamo indagare e rimuovere contenuti, sospendere funzionalità o chiudere account. Possiamo segnalare attività illegali alle autorità ove appropriato.`,
        ],
      },
      {
        h: '7. Contatti',
        paragraphs: [
          `${ENTITY}, ${ADDRESS} · ${EMAIL} · ${WEB}`,
        ],
      },
    ],
  },
};
