import type { LegalBundle } from './types';
import { ADDRESS, APP, CONTACT_BLOCK, EMAIL, ENTITY, WEB } from './shared';

const UPDATED = 'Laatst bijgewerkt: 29 juli 2026';

export const nl: LegalBundle = {
  privacyPage: {
    badge: 'Privacy',
    title: 'Privacybeleid',
    subtitle:
      `Hoe Nexow, Inc. persoonsgegevens verzamelt, gebruikt en beschermt wanneer u ${WEB} en de Nexow-applicatie gebruikt.`,
    meta: {
      title: 'Privacybeleid — Nexow',
      description:
        'Privacybeleid van Nexow, Inc.: gegevens die wij verzamelen, hoe wij deze gebruiken, cookies en uw privacyrechten onder de AVG, CCPA/CPRA en andere toepasselijke wetgeving.',
    },
    updated: UPDATED,
    governingNote:
      'De bindende taal van dit Privacybeleid is het Engels (English). Vertalingen worden uitsluitend voor het gemak aangeboden en wijzigen de Engelse versie niet.',
    sections: [
      {
        h: '1. Wie wij zijn',
        paragraphs: [
          `Dit Privacybeleid beschrijft hoe ${ENTITY} (“Nexow”, “wij”, “ons” of “onze”) persoonsgegevens verwerkt in verband met onze websites (waaronder ${WEB}), de Nexow-webapplicatie (${APP}) en gerelateerde diensten (gezamenlijk de “Diensten”).`,
          `Verwerkingsverantwoordelijke / onderneming: ${CONTACT_BLOCK}`,
          'Als u vragen heeft over dit Beleid of uw privacyrechten wilt uitoefenen, neem dan contact met ons op via het bovenstaande adres of e-mailadres met als onderwerp “Privacy Request”.',
        ],
      },
      {
        h: '2. Toepassingsgebied',
        paragraphs: [
          'Dit Beleid is van toepassing op persoonsgegevens die wij verwerken wanneer u onze marketingwebsite bezoekt, een Nexow-account aanmaakt of gebruikt, werkruimten en widgets bouwt of deelt, diensten van derden koppelt, een abonnement afsluit of beheert, of op andere wijze met de Diensten omgaat.',
          'Het is niet van toepassing op websites, apps, venues of API’s van derden die u kiest te koppelen; die vallen onder hun eigen privacyvoorwaarden. Wanneer een connector in uw browser rechtstreeks met een derde communiceert, is die derde doorgaans een zelfstandige verwerkingsverantwoordelijke voor gegevens die u aan hen verstrekt.',
        ],
      },
      {
        h: '3. Gegevens die wij verzamelen',
        paragraphs: [
          'Account- en profielgegevens: e-mailadres, weergavenaam, authenticatie-identificatoren, abonnements- of facturatiestatus, voorkeuren en vergelijkbare accountinstellingen.',
          'Werkruimte- en productgegevens: widgets, prompts, gegenereerde code of configuraties, versies, logbestanden, bibliotheekitems, synchronisatiestatus, samenwerkingsmetadata en gerelateerde inhoud die u in de Diensten aanmaakt of uploadt.',
          'Verbindingsgegevens: tokens, API-sleutels of OAuth-referenties die u verstrekt voor connectors van derden (behandeld zoals beschreven in “Verbindingen en referenties”), plus technische metadata die nodig is om die verbindingen te onderhouden.',
          'Gebruiks- en apparaatgegevens: IP-adres, browsertype, apparaat- of besturingssysteeminformatie, geschatte locatie afgeleid van het IP-adres, referrer, bezochte pagina’s, functiegebruik, prestatie- en diagnostische gebeurtenissen, en vergelijkbare telemetrie die nodig is om de Diensten te exploiteren en te beveiligen.',
          'Communicatie: berichten die u ons stuurt (ondersteuning, privacy of juridische verzoeken) en gerelateerde correspondentie.',
          'Betalingsgegevens: als u een betaald abonnement afsluit, worden betaalmethode en factuurgegevens doorgaans verwerkt door onze betalingsverwerker; wij ontvangen beperkte facturatiemetadata (bijv. abonnement, status, laatste vier cijfers of vergelijkbare tokens) en geen volledige kaartnummers wanneer de verwerker dat toelaat.',
          'Cookies en vergelijkbare technologieën: zie ons Cookiebeleid voor meer informatie.',
        ],
      },
      {
        h: '4. Hoe wij gegevens gebruiken',
        paragraphs: [
          'Wij gebruiken persoonsgegevens om: de Diensten te leveren, te onderhouden en te verbeteren; gebruikers te authenticeren en accounts te beveiligen; werkruimte-inhoud op te slaan en te synchroniseren die u aanvraagt; transacties te verwerken en servicegerelateerde mededelingen te versturen; te reageren op ondersteunings- en privacyverzoeken; betrouwbaarheid, misbruik en beveiliging te monitoren; aan wetgeving te voldoen; en, waar toegestaan, productupdates te communiceren (u kunt zich afmelden voor niet-essentiële marketing).',
          'Wij verkopen geen persoonsgegevens zoals “verkoop” doorgaans wordt gedefinieerd onder de CCPA/CPRA, en wij delen geen persoonsgegevens voor cross-context gedragsadvertenties zoals die termen worden gedefinieerd onder Californisch recht, behalve zoals vermeld in ons Cookiebeleid indien wij advertentiecookies introduceren (in welk geval wij dit Beleid bijwerken en de vereiste opt-outmogelijkheden bieden).',
        ],
      },
      {
        h: '5. Rechtsgrondslagen (EER / VK / Zwitserland)',
        paragraphs: [
          'Waar de EU-AVG, UK GDPR of Zwitserse FADP van toepassing is, verwerken wij persoonsgegevens op een of meer van de volgende grondslagen: uitvoering van een overeenkomst (het leveren van de door u gevraagde Diensten); gerechtvaardigde belangen (beveiligen en verbeteren van de Diensten, misbruik voorkomen, basisanalyse), afgewogen tegen uw rechten; toestemming (waar vereist, bijv. bepaalde cookies of optionele marketing); en wettelijke verplichting (bewaren van administratie of reageren op rechtmatige verzoeken).',
        ],
      },
      {
        h: '6. Verbindingen en referenties',
        paragraphs: [
          'Waar een dienst van een derde dit toelaat, kan Nexow rechtstreeks vanuit uw browser verbinden, zodat referenties voornamelijk worden gebruikt om met die dienst te communiceren. Sommige diensten vereisen een proxy of server-side component; in die gevallen verwerken wij alleen wat nodig is om het verzoek uit te voeren en de connector te exploiteren.',
          'U bent verantwoordelijk voor het waarborgen dat u het recht heeft elke dienst te koppelen en voor het configureren van referenties met minimale rechten. Trek de toegang in bij de dienst van de derde en in Nexow wanneer u een verbinding niet langer nodig heeft.',
        ],
      },
      {
        h: '7. Gegenereerde inhoud en AI-functies',
        paragraphs: [
          'Wanneer u generatie- of AI-ondersteunde functies gebruikt, kunnen prompts en gerelateerde context door ons en/of door model- of infrastructuurleveranciers worden verwerkt die wij gebruiken om de functie te leveren. Wij gebruiken die verwerking om resultaten voor uw werkruimte te genereren en om de Diensten te exploiteren en te verbeteren, onderworpen aan onze contracten met die leveranciers.',
          'Dien geen geheimen, gereguleerde persoonsgegevens of vertrouwelijke gegevens van derden in prompts in, tenzij u een rechtmatige grondslag heeft en het risico accepteert dat dergelijke inhoud door subverwerkers betrokken bij generatie kan worden verwerkt.',
        ],
      },
      {
        h: '8. Doorgifte en verwerkers',
        paragraphs: [
          'Wij delen persoonsgegevens met: dienstverleners (hosting, analyse, e-mail, betalingen, foutmonitoring, AI/modelleveranciers) onder contracten die het gebruik beperken tot het leveren van diensten aan ons; professionele adviseurs; autoriteiten wanneer wettelijk vereist of om rechten en veiligheid te beschermen; en opvolgers bij een fusie, overname of overdracht van activa (met kennisgeving waar vereist).',
          'Wij kunnen ook informatie delen die u ervoor kiest openbaar te maken of met andere gebruikers te delen (bijv. gepubliceerde widgets, communityfuncties) volgens uw instellingen.',
        ],
      },
      {
        h: '9. Internationale doorgiften',
        paragraphs: [
          `${ENTITY} is gevestigd in de Verenigde Staten. Als u de Diensten benadert vanuit de EER, het VK, Zwitserland of andere regio’s, kunnen uw gegevens worden overgedragen naar en verwerkt in de Verenigde Staten en andere landen met andere regels voor gegevensbescherming.`,
          'Waar vereist, gebruiken wij passende waarborgen voor doorgiften (zoals Standaard Contractuele Clausules of opvolgende mechanismen) en nemen wij stappen die wij redelijk achten om persoonsgegevens te beschermen.',
        ],
      },
      {
        h: '10. Bewaring',
        paragraphs: [
          'Wij bewaren persoonsgegevens zolang uw account actief is of zolang nodig om de Diensten te leveren, aan wettelijke verplichtingen te voldoen, geschillen op te lossen en overeenkomsten af te dwingen. Werkruimte-inhoud blijft doorgaans bestaan totdat u deze verwijdert of uw account sluit, onderworpen aan back-up- en juridische bewaarperioden. U kunt verwijdering aanvragen zoals hieronder beschreven; enkele resterende kopieën kunnen gedurende beperkte tijd in back-ups aanwezig blijven.',
        ],
      },
      {
        h: '11. Beveiliging',
        paragraphs: [
          'Wij implementeren technische en organisatorische maatregelen die zijn ontworpen om persoonsgegevens te beschermen (toegangscontroles, versleuteling tijdens transport waar passend, least-privilege-praktijken). Geen enkele methode van verzending of opslag is volledig veilig; u bent verantwoordelijk voor het beveiligen van accountreferenties en apparaten.',
        ],
      },
      {
        h: '12. Uw rechten — Europa en VK (AVG)',
        paragraphs: [
          'Als u zich in de EER, het VK of Zwitserland bevindt, kunt u rechten hebben op inzage, rectificatie, wissing, beperking of bezwaar tegen bepaalde verwerking; op gegevensoverdraagbaarheid; en op intrekking van toestemming wanneer verwerking op toestemming is gebaseerd, zonder de rechtmatigheid van eerdere verwerking te beïnvloeden. U kunt een klacht indienen bij uw lokale toezichthoudende autoriteit.',
          `Om deze rechten uit te oefenen, stuurt u een e-mail naar ${EMAIL} met als onderwerp “Privacy Request”. Wij kunnen uw identiteit moeten verifiëren voordat wij een verzoek honoreren.`,
        ],
      },
      {
        h: '13. Uw rechten — Verenigde Staten (inclusief CCPA/CPRA)',
        paragraphs: [
          'Afhankelijk van uw woonstaat (inclusief Californië onder de CCPA/CPRA) kunt u rechten hebben op kennisgeving/inzage, verwijdering, correctie en opt-out van verkoop of delen van persoonsgegevens, en op beperking van het gebruik van gevoelige persoonsgegevens waar van toepassing. Wij zullen u niet discrimineren voor het uitoefenen van privacyrechten.',
          `Dien verzoeken in via ${EMAIL} (onderwerp: “Privacy Request”) of per post aan ${ADDRESS}. Gemachtigde agenten kunnen verzoeken indienen zoals wettelijk toegestaan; wij kunnen bewijs van machtiging en identiteitsverificatie vereisen.`,
          'Als wij een “Do Not Sell or Share”- of vergelijkbare controle aanbieden (inclusief Global Privacy Control wanneer wij die respecteren), beschrijven wij die in het Cookiebeleid of in de productinstellingen.',
        ],
      },
      {
        h: '14. Opmerkingen over Azië-Pacific (algemeen niveau)',
        paragraphs: [
          `Als u zich bevindt in rechtsgebieden zoals Singapore (PDPA), Japan (APPI), Zuid-Korea (PIPA) of andere regio’s in Azië-Pacific met wetgeving inzake persoonsgegevens, verwerken wij informatie zoals beschreven in dit Beleid en in overeenstemming met toepasselijke lokale vereisten voor zover die van toepassing zijn op ${ENTITY} als Amerikaanse aanbieder van online Diensten.`,
          `U kunt contact met ons opnemen via ${EMAIL} om inzage, correctie of verwijdering aan te vragen conform toepasselijke wetgeving. Waar lokale wetgeving een lokale vertegenwoordiger of aanvullende kennisgevingen vereist, werken wij dit Beleid bij of publiceren wij regiospecifieke mededelingen.`,
        ],
      },
      {
        h: '15. Minderjarigen',
        paragraphs: [
          'De Diensten zijn niet gericht op kinderen jonger dan 16 jaar (of de hogere leeftijd die in uw rechtsgebied vereist is). Wij verzamelen niet bewust persoonsgegevens van kinderen. Als u van mening bent dat een kind ons informatie heeft verstrekt, neem dan contact met ons op; wij nemen passende stappen om deze te verwijderen.',
        ],
      },
      {
        h: '16. Marketingwebsite',
        paragraphs: [
          'Onze marketingwebsite is voornamelijk statisch en gebruikt beperkte analyse en cookies zoals beschreven in het Cookiebeleid. Wij verkopen geen persoonsgegevens die via de marketingwebsite worden verzameld. Uitgaande links (inclusief naar de app) worden waar praktisch aangeduid.',
        ],
      },
      {
        h: '17. Wijzigingen',
        paragraphs: [
          'Wij kunnen dit Beleid periodiek bijwerken. De datum “Laatst bijgewerkt” wijzigt wanneer wij herzieningen publiceren. Materiële wijzigingen kunnen op de website worden benadrukt of per e-mail worden gemeld waar passend. Voortgezet gebruik van de Diensten na een update geldt als aanvaarding van het herziene Beleid voor zover wettelijk toegestaan.',
        ],
      },
      {
        h: '18. Contact',
        paragraphs: [
          `Privacy- en gegevensbeschermingsverzoeken: ${EMAIL}`,
          `Post: ${ENTITY}, ${ADDRESS}`,
          `Web: ${WEB}`,
        ],
      },
    ],
  },
  termsPage: {
    badge: 'Voorwaarden',
    title: 'Gebruiksvoorwaarden',
    subtitle: `De overeenkomst tussen u en Nexow, Inc. voor het gebruik van ${WEB} en de Nexow-applicatie.`,
    meta: {
      title: 'Gebruiksvoorwaarden — Nexow',
      description:
        'Gebruiksvoorwaarden voor de websites en applicatie van Nexow, Inc.: accounts, acceptabel gebruik, intellectueel eigendom, uitsluitingen, aansprakelijkheid en toepasselijk recht.',
    },
    updated: UPDATED,
    governingNote:
      'De bindende taal van deze Gebruiksvoorwaarden is het Engels (English). Vertalingen worden uitsluitend voor het gemak aangeboden en wijzigen de Engelse versie niet.',
    sections: [
      {
        h: '1. Overeenkomst',
        paragraphs: [
          `Deze Gebruiksvoorwaarden (“Voorwaarden”) vormen een bindende overeenkomst tussen u en ${ENTITY} (“Nexow”, “wij”, “ons” of “onze”) die de toegang tot en het gebruik van ${WEB}, ${APP} en gerelateerde diensten (de “Diensten”) regelt.`,
          'Door de Diensten te openen of te gebruiken, een account aan te maken of deze Voorwaarden te accepteren, gaat u akkoord met deze Voorwaarden en met ons Privacybeleid en Cookiebeleid. Als u niet akkoord gaat, gebruik de Diensten dan niet.',
          'Als u de Diensten namens een organisatie gebruikt, verklaart u dat u bevoegd bent die organisatie te binden, en omvat “u” die organisatie.',
        ],
      },
      {
        h: '2. De Diensten',
        paragraphs: [
          'Nexow biedt tools om widgets en werkruimten te beschrijven, genereren, configureren, visualiseren en delen, inclusief verbindingen met gegevensbronnen van derden en optionele samenwerkings-, community- of marketplacefuncties naarmate wij deze beschikbaar stellen.',
          'Wij kunnen functies, abonnementen of de Diensten (geheel of gedeeltelijk) wijzigen, opschorten of beëindigen met redelijke kennisgeving waar praktisch haalbaar. Preview- of bèta-functies kunnen instabiel zijn en worden geleverd “as is”.',
        ],
      },
      {
        h: '3. Geschiktheid en accounts',
        paragraphs: [
          'U moet minstens de leeftijd van digitale toestemming in uw rechtsgebied hebben (en in ieder geval minstens 16 jaar, of 18 waar vereist) om de Diensten te gebruiken. U moet accurate accountinformatie verstrekken en referenties vertrouwelijk houden. U bent verantwoordelijk voor activiteit onder uw account.',
          'Wij kunnen accounts opschorten of beëindigen die deze Voorwaarden schenden, een beveiligingsrisico vormen of gedurende langere tijd inactief blijven.',
        ],
      },
      {
        h: '4. Abonnementen, credits en betaling',
        paragraphs: [
          'Sommige functies vereisen een betaald abonnement, credits of andere gebruikslimieten. Prijzen, inbegrepen quota en factureringsperioden worden beschreven op de Abonnementenpagina of in het product. Tenzij anders vermeld, zijn kosten niet restitueerbaar, behalve waar wettelijk vereist.',
          'U machtigt ons en onze betalingsverwerkers om toepasselijke kosten in rekening te brengen. Belastingen kunnen van toepassing zijn. Wij kunnen prijzen wijzigen met kennisgeving; wijzigingen treden in werking bij de volgende verlenging, tenzij anders vermeld.',
        ],
      },
      {
        h: '5. Uw inhoud en licentie',
        paragraphs: [
          'U behoudt het eigendom van inhoud die u indient of aanmaakt in de Diensten (“Gebruikersinhoud”), inclusief prompts, widgets en configuraties, onder voorbehoud van rechten van derden en van Nexow op ons platform, sjablonen en gegenereerde scaffolding die niet uniek is voor uw invoer.',
          `U verleent ${ENTITY} een wereldwijde, niet-exclusieve licentie om Gebruikersinhoud te hosten, verwerken, verzenden, weergeven en afgeleide werken te maken uitsluitend voor zover nodig om de Diensten te exploiteren, te beveiligen en te verbeteren en zoals door u aangegeven (bijv. delen of publiceren).`,
          'U verklaart dat u alle rechten heeft die nodig zijn om Gebruikersinhoud in te dienen en om diensten van derden te koppelen, en dat Gebruikersinhoud geen wetgeving of rechten van derden schendt.',
        ],
      },
      {
        h: '6. Acceptabel gebruik',
        paragraphs: [
          'U moet ons Beleid voor Acceptabel Gebruik en alle toepasselijke wetgeving naleven. U mag de Diensten niet misbruiken, anderen hinderen, ongeautoriseerde toegang proberen te verkrijgen, op misbruikende wijze gegevens extraheren, of de Diensten gebruiken voor onrechtmatige handel, fraude, malware of inbreuk.',
          'Nexow is een platform voor tools en visualisatie. Niets in de Diensten vormt financieel, beleggings-, juridisch of fiscaal advies. Marktgegevens en voorbeelden kunnen illustratief zijn; u bent uitsluitend verantwoordelijk voor beslissingen die u neemt.',
        ],
      },
      {
        h: '7. Diensten van derden',
        paragraphs: [
          'Connectors en integraties zijn optioneel en onderworpen aan voorwaarden van derden. Wij zijn niet verantwoordelijk voor beschikbaarheid, nauwkeurigheid, kosten of gegevenspraktijken van derden. Referenties die u verstrekt, worden gebruikt zoals beschreven in het Privacybeleid.',
        ],
      },
      {
        h: '8. Intellectueel eigendom',
        paragraphs: [
          `De Diensten, inclusief software, merkidentiteit, documentatie en inhoud die geen Gebruikersinhoud is, zijn eigendom van ${ENTITY} of haar licentiegevers en worden beschermd door wetgeving inzake intellectueel eigendom. Behalve het beperkte recht om de Diensten te gebruiken conform deze Voorwaarden, worden geen rechten verleend.`,
          'Feedback die u ons verstrekt, kan door ons worden gebruikt zonder verplichting jegens u.',
        ],
      },
      {
        h: '9. Vertrouwelijkheid en beveiliging',
        paragraphs: [
          'U mag niet proberen beveiligingscontroles te onderzoeken, te omzeilen of te verstoren. Meld vermoedelijke kwetsbaarheden op verantwoorde wijze. Wij implementeren redelijke beveiligingsmaatregelen, maar kunnen geen absolute beveiliging garanderen.',
        ],
      },
      {
        h: '10. Uitsluiting van garanties',
        paragraphs: [
          'DE DIENSTEN WORDEN GELEVERD “AS IS” EN “AS AVAILABLE”. VOOR ZOVER MAXIMAAL TOEGESTAAN DOOR DE WET, WIJZEN WIJ ALLE GARANTIES AF, UITDRUKKELIJK OF STILZWIJGEND, INCLUSIEF VERKOOPBAARHEID, GESCHIKTHEID VOOR EEN BEPAALD DOEL EN NIET-INBREUK. WIJ GARANDEREN NIET DAT DE DIENSTEN ONONDERBROKEN, FOUTLOOS OF VRIJ VAN SCHADELIJKE COMPONENTEN ZULLEN ZIJN, OF DAT OUTPUTS (INCLUSIEF AI-GENEREERDE INHOUD) NAUWKEURIG, VOLLEDIG OF GESCHIKT ZULLEN ZIJN VOOR UW DOEL.',
        ],
      },
      {
        h: '11. Beperking van aansprakelijkheid',
        paragraphs: [
          `VOOR ZOVER MAXIMAAL TOEGESTAAN DOOR DE WET ZIJN ${ENTITY} EN HAAR DIRECTEUREN, BESTUURSLIDEN, MEDEWERKERS EN AGENTEN NIET AANSPRAKELIJK VOOR INDIRECTE, INCIDENTELE, BIJZONDERE, GEVOLG-, VOORBEELD- OF STRAFSCHADE, OF VOOR GEDERFDE WINST, OMZET, GEGEVENS OF GOODWILL, VOORTVLOEIEND UIT OF VERBAND HOUDEND MET DE DIENSTEN OF DEZE VOORWAARDEN, ONGEACHT OF GEBASEERD OP OVEREENKOMST, ONRECHTMATIGE DAAD OF ANDERSZINS, ZELFS INDIEN OP DE MOGELIJKHEID GEWEZEN.`,
          'ONZE TOTALE AANSPRAKELIJKHEID VOOR ALLE VORDERINGEN MET BETREKKING TOT DE DIENSTEN OF DEZE VOORWAARDEN ZAL NIET HOGER ZIJN DAN HET GROOTSTE VAN (A) DE BEDRAGEN DIE U ONS VOOR DE DIENSTEN HEEFT BETAALD IN DE TWAALF (12) MAANDEN VOORAFGAAND AAN DE VORDERING OF (B) HONDERD AMERIKAANSE DOLLAR (100 USD). SOMMIGE RECHTSGEBIEDEN STAAN BEPAALDE BEPERKINGEN NIET TOE; IN DIE GEVALLEN IS ONZE AANSPRAKELIJKHEID BEPERKT TOT HET MAXIMAAL TOEGESTANE.',
        ],
      },
      {
        h: '12. Vrijwaring',
        paragraphs: [
          `U zult ${ENTITY} verdedigen en vrijwaren tegen vorderingen, schade en kosten (inclusief redelijke advocaatkosten) voortvloeiend uit uw Gebruikersinhoud, uw gebruik van de Diensten, uw verbindingen met derden, of uw schending van deze Voorwaarden of wetgeving.`,
        ],
      },
      {
        h: '13. Beëindiging',
        paragraphs: [
          'U kunt het gebruik van de Diensten te allen tijde stoppen en accountsluiting aanvragen via het product of door contact met ons op te nemen. Wij kunnen de toegang opschorten of beëindigen wegens schending, risico of juridische redenen. Bepalingen die naar hun aard moeten voortduren (inclusief intellectueel eigendom, uitsluitingen, beperkingen, vrijwaring en toepasselijk recht) blijven van kracht na beëindiging.',
        ],
      },
      {
        h: '14. Toepasselijk recht en geschillen',
        paragraphs: [
          `Deze Voorwaarden worden beheerst door de wetten van de staat Delaware, Verenigde Staten, met uitsluiting van conflictenrechtelijke regels. Onder voorbehoud van dwingende consumentenbescherming in uw land van verblijf, hebben rechtbanken in Delaware (of federale rechtbanken met jurisdictie aldaar) exclusieve bevoegdheid over geschillen, behalve dat wij een voorlopige voorziening kunnen vragen in elk rechtsgebied.`,
          'Als u consument bent in de EER/VK, kunt u ook profiteren van dwingende lokale bescherming en, waar wettelijk vereist, procedures aanhangig maken op uw woonplaats.',
        ],
      },
      {
        h: '15. Wijzigingen',
        paragraphs: [
          'Wij kunnen deze Voorwaarden bijwerken door een herziene versie te publiceren met een bijgewerkte datum. Materiële wijzigingen kunnen in het product of per e-mail worden gemeld. Voortgezet gebruik na de ingangsdatum geldt als aanvaarding, behalve waar toepasselijke wetgeving anders vereist.',
        ],
      },
      {
        h: '16. Contact',
        paragraphs: [
          `Juridische kennisgevingen: ${EMAIL}`,
          `${ENTITY}, ${ADDRESS}`,
          `Web: ${WEB}`,
        ],
      },
    ],
  },
  cookiesPage: {
    badge: 'Cookies',
    title: 'Cookiebeleid',
    subtitle:
      `Hoe Nexow, Inc. cookies en vergelijkbare technologieën gebruikt op ${WEB} en in de Nexow-applicatie.`,
    meta: {
      title: 'Cookiebeleid — Nexow',
      description:
        'Cookiebeleid van Nexow, Inc.: soorten cookies, doeleinden, toestemming en hoe u voorkeuren beheert.',
    },
    updated: UPDATED,
    governingNote:
      'De bindende taal van dit Cookiebeleid is het Engels (English). Vertalingen worden uitsluitend voor het gemak aangeboden en wijzigen de Engelse versie niet.',
    sections: [
      {
        h: '1. Inleiding',
        paragraphs: [
          `${ENTITY} (“Nexow”, “wij”, “ons”) gebruikt cookies en vergelijkbare technologieën (lokale opslag, pixels, SDK’s) op ${WEB} en gerelateerde Diensten. Dit Cookiebeleid legt uit wat wij gebruiken, waarom en hoe u deze kunt beheren. Het dient te worden gelezen samen met ons Privacybeleid.`,
          `Contact: ${EMAIL} · ${ADDRESS}`,
        ],
      },
      {
        h: '2. Wat zijn cookies?',
        paragraphs: [
          'Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen. Vergelijkbare technologieën slaan informatie op of lezen deze op vergelijkbare wijze. Ze kunnen “sessie”-cookies zijn (verwijderd wanneer u de browser sluit) of “persistent” (bewaard tot verval of verwijdering), en “first-party” (door ons geplaatst) of “third-party” (geplaatst door een ander domein).',
        ],
      },
      {
        h: '3. Hoe wij cookies gebruiken',
        paragraphs: [
          'Strikt noodzakelijk: vereist voor beveiliging, load balancing, authenticatie, opslag van toestemming en kernfunctionaliteit. Deze vereisen geen toestemming waar toepasselijke wetgeving een vrijstelling voorziet.',
          'Voorkeuren / functioneel: onthouden taal, interface-instellingen of vergelijkbare keuzes.',
          'Analyse / prestaties: helpen ons verkeer te begrijpen en de site of app te verbeteren (bijv. geaggregeerde paginaweergaven). Waar vereist (inclusief in de EU/VK), vragen wij toestemming vóór niet-essentiële analytische cookies.',
          'Marketing / advertenties: wij vertrouwen momenteel niet op advertentiecookies van derden op de marketingwebsite. Als dat verandert, werken wij dit Beleid bij en vragen wij toestemming waar vereist.',
        ],
      },
      {
        h: '4. Lokale opslag en appstatus',
        paragraphs: [
          'De Nexow-applicatie kan browseropslag gebruiken (bijv. localStorage, IndexedDB) om werkruimtegegevens, voorkeuren of sessiestatus te bewaren. Die opslag is nodig om de productfuncties te exploiteren die u gebruikt en wordt verder beschreven in het Privacybeleid.',
        ],
      },
      {
        h: '5. Toestemming (Europa en vergelijkbare regelingen)',
        paragraphs: [
          'Waar de ePrivacy-richtlijn / AVG (of het Britse equivalent) toestemming vereist voor niet-essentiële cookies, vragen wij toestemming vóór het plaatsen ervan en respecteren wij intrekkingen. Strikt noodzakelijke cookies kunnen ongeacht toestemmingsbanners worden geplaatst.',
          'U kunt browserinstellingen wijzigen om cookies te blokkeren of te verwijderen; sommige functies werken mogelijk niet correct als essentiële cookies worden geblokkeerd.',
        ],
      },
      {
        h: '6. Verenigde Staten en andere regio’s',
        paragraphs: [
          'In de VS ondersteunen cookieverklaringen transparantie onder staatsprivacywetgeving (inclusief CCPA/CPRA-concepten van “verkoop”/“delen” wanneer advertentiecookies worden gebruikt). Gebruikers in Azië-Pacific kunnen vergelijkbare transparantie- en keuzerechten hebben onder lokale wetgeving (bijv. PDPA, APPI); neem contact met ons op om toepasselijke rechten uit te oefenen.',
        ],
      },
      {
        h: '7. Cookies beheren',
        paragraphs: [
          'Browserinstellingen: gebruik de helppagina’s van uw browser om cookies te weigeren of te verwijderen.',
          'Product- / site-instellingen: wanneer wij een tool voor cookievoorkeuren aanbieden, gebruik deze om niet-essentiële categorieën aan te passen.',
          `Vragen: ${EMAIL}`,
        ],
      },
      {
        h: '8. Wijzigingen',
        paragraphs: [
          'Wij kunnen dit Cookiebeleid bijwerken wanneer onze praktijken wijzigen. Controleer de datum “Laatst bijgewerkt”. Materiële wijzigingen worden op deze pagina weergegeven en, waar vereist, via vernieuwde toestemming.',
        ],
      },
    ],
  },
  legalPage: {
    badge: 'Legal',
    title: 'Juridische en bedrijfsinformatie',
    subtitle: 'Officiële bedrijfsgegevens en openbare juridische documenten van Nexow, Inc.',
    meta: {
      title: 'Legal — Nexow, Inc.',
      description:
        'Juridische en bedrijfsinformatie van Nexow, Inc., inclusief geregistreerd adres en links naar Privacy, Voorwaarden, Cookies en Acceptabel Gebruik.',
    },
    updated: UPDATED,
    governingNote:
      'Bedrijfsinformatie en juridische documenten worden in het Engels (English) als bindende taal aangeboden, tenzij de wet een verplichte lokale versie vereist.',
    sections: [
      {
        h: '1. Bedrijfsgegevens',
        paragraphs: [
          `Rechtspersoon: ${ENTITY}`,
          `Geregistreerd / postadres: ${ADDRESS}`,
          `Website: ${WEB}`,
          `Applicatie: ${APP}`,
          `Algemeen contact: ${EMAIL}`,
        ],
      },
      {
        h: '2. Openbare juridische documenten',
        paragraphs: [
          'De volgende documenten vormen onze openbare juridische overeenkomsten voor de website en applicatie:',
          '• Privacybeleid — hoe wij persoonsgegevens verwerken (AVG/CCPA-bewust, met opmerkingen over Azië-Pacific).',
          '• Gebruiksvoorwaarden — voorwaarden voor het gebruik van de Diensten.',
          '• Cookiebeleid — cookies en vergelijkbare technologieën.',
          '• Beleid voor Acceptabel Gebruik — verboden en vereist gedrag.',
          'Links zijn beschikbaar in de sitefooter en op /privacy, /terms, /cookies en /acceptable-use.',
        ],
      },
      {
        h: '3. Imprint-achtige kennisgeving',
        paragraphs: [
          `Voor gebruikers die op zoek zijn naar een “juridische kennisgeving”, “imprint” of bedrijfsidentificatie: de Diensten worden geëxploiteerd door ${ENTITY}, gevestigd te ${ADDRESS}. Online contact: ${EMAIL}. Deze pagina is bedoeld om gangbare transparantieverwachtingen in de Verenigde Staten, Europa en andere regio’s te vervullen voor identificatie van de dienstverlener.`,
        ],
      },
      {
        h: '4. Gegevensverwerking',
        paragraphs: [
          'Nexow verwerkt persoonsgegevens zoals beschreven in het Privacybeleid. Klanten die een Data Processing Addendum (DPA) of vergelijkbare contractuele voorwaarden voor AVG artikel 28 (of equivalent) nodig hebben, kunnen deze aanvragen per e-mail met als onderwerp “DPA Request”. Standaard subverwerkers en doorgifte-waarborgen worden beschreven in het Privacybeleid of verstrekt op verzoek.',
        ],
      },
      {
        h: '5. Disclaimers',
        paragraphs: [
          'Nexow is een platform voor tools en visualisatie. Inhoud op de marketingwebsite en in de app (inclusief marktgegevensvoorbeelden) vormt geen financieel, beleggings-, juridisch of fiscaal advies. U blijft uitsluitend verantwoordelijk voor naleving van wetgeving die van toepassing is op uw gebruik van gekoppelde venues en gegevens.',
        ],
      },
      {
        h: '6. Bindende taal',
        paragraphs: [
          'Het Engels (English) is de bindende taal van onze juridische documenten. UI of samenvattingen in andere talen worden uitsluitend voor het gemak aangeboden en wijzigen de Engelse voorwaarden niet, tenzij wij uitdrukkelijk een bindende lokale versie publiceren.',
        ],
      },
      {
        h: '7. Contact voor juridische zaken',
        paragraphs: [
          `E-mail: ${EMAIL} (onderwerp: “Legal”)`,
          `Post: ${ENTITY}, ${ADDRESS}`,
        ],
      },
    ],
  },
  acceptableUsePage: {
    badge: 'Acceptabel gebruik',
    title: 'Beleid voor Acceptabel Gebruik',
    subtitle: 'Regels voor het verantwoordelijk en rechtmatig gebruik van Nexow-websites en de Nexow-applicatie.',
    meta: {
      title: 'Beleid voor Acceptabel Gebruik — Nexow',
      description:
        'Beleid voor Acceptabel Gebruik van Nexow, Inc.: verboden activiteiten, beveiligingsregels en handhaving.',
    },
    updated: UPDATED,
    governingNote:
      'De bindende taal van dit Beleid voor Acceptabel Gebruik is het Engels (English). Vertalingen worden uitsluitend voor het gemak aangeboden.',
    sections: [
      {
        h: '1. Doel',
        paragraphs: [
          `Dit Beleid voor Acceptabel Gebruik (“AUP”) is van toepassing op uw gebruik van Diensten geëxploiteerd door ${ENTITY}. Het vult de Gebruiksvoorwaarden aan. Schending kan leiden tot opschorting of beëindiging.`,
        ],
      },
      {
        h: '2. Verboden activiteiten',
        paragraphs: [
          'U mag de Diensten niet gebruiken om: wetgeving of rechten van derden te schenden; malware, spam of phishing te verspreiden; ongeautoriseerde toegang tot systemen, accounts of gegevens te proberen te verkrijgen; de Diensten te verstoren of te hinderen; gegevens te scrapen of te verzamelen op een wijze die de infrastructuur belast of de voorwaarden van anderen schendt; gebruikslimieten of beveiligingscontroles te omzeilen; uw identiteit of affiliatie verkeerd voor te stellen; of onrechtmatige, inbreukmakende of sterk gereguleerde gevoelige gegevens te uploaden zonder autorisatie.',
          'U mag de Diensten niet gebruiken om fraude, marktmanipulatie, sanctie-ontduiking of onrechtmatige handelsactiviteit te faciliteren. U mag geen widgets genereren of inzetten waarvan het primaire doel misbruik, misleiding of schade is.',
        ],
      },
      {
        h: '3. Referenties en connectors',
        paragraphs: [
          'Gebruik alleen referenties waarvoor u gemachtigd bent. Deel accounttoegang niet onveilig. Configureer connectors met minimale rechten. Probeer geen geheimen van andere gebruikers te extraheren.',
        ],
      },
      {
        h: '4. AI en gegenereerde output',
        paragraphs: [
          'Gebruik generatiefuncties niet om inhoud te maken die onrechtmatig is, intellectueel eigendom schendt, of bedoeld is om anderen op schaal te misleiden (bijv. gecoördineerd onauthentiek gedrag). U bent verantwoordelijk voor het beoordelen van outputs voordat u daarop vertrouwt.',
        ],
      },
      {
        h: '5. Redelijk gebruik van resources',
        paragraphs: [
          'Abonnementen en credits hebben gebruikslimieten. Geautomatiseerd of misbruikend verbruik dat de dienst voor anderen verslechtert, kan worden beperkt of geblokkeerd.',
        ],
      },
      {
        h: '6. Meldingen en handhaving',
        paragraphs: [
          `Meld misbruik aan ${EMAIL} met als onderwerp “Abuse”. Wij kunnen onderzoeken en inhoud verwijderen, functies opschorten of accounts beëindigen. Wij kunnen onrechtmatige activiteit melden aan autoriteiten waar passend.`,
        ],
      },
      {
        h: '7. Contact',
        paragraphs: [
          `${ENTITY}, ${ADDRESS} · ${EMAIL} · ${WEB}`,
        ],
      },
    ],
  },
};
