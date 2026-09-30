import type { LegalBundle } from './types';
import { ADDRESS, APP, CONTACT_BLOCK, EMAIL, ENTITY, WEB } from './shared';

const UPDATED = 'Ostatnia aktualizacja: 29 lipca 2026';

export const pl: LegalBundle = {
  privacyPage: {
    badge: 'Prywatność',
    title: 'Polityka prywatności',
    subtitle:
      `W jaki sposób Nexow, Inc. zbiera, wykorzystuje i chroni dane osobowe podczas korzystania z ${WEB} oraz aplikacji Nexow.`,
    meta: {
      title: 'Polityka prywatności — Nexow',
      description:
        'Polityka prywatności Nexow, Inc.: zbierane dane, sposób ich wykorzystania, pliki cookie oraz przysługujące Ci prawa na gruncie RODO, CCPA/CPRA i innych obowiązujących przepisów.',
    },
    updated: UPDATED,
    governingNote:
      'Wiążącą wersją językową niniejszej Polityki prywatności jest wersja angielska (English). Tłumaczenia udostępniane są wyłącznie dla wygody i nie zmieniają wersji angielskiej.',
    sections: [
      {
        h: '1. Kim jesteśmy',
        paragraphs: [
          `Niniejsza Polityka prywatności opisuje, w jaki sposób ${ENTITY} („Nexow”, „my”, „nas” lub „nasz”) przetwarza dane osobowe w związku z naszymi stronami internetowymi (w tym ${WEB}), aplikacją internetową Nexow (${APP}) oraz powiązanymi usługami (łącznie „Usługi”).`,
          `Administrator danych / przedsiębiorca: ${CONTACT_BLOCK}`,
          'W przypadku pytań dotyczących niniejszej Polityki lub chęci skorzystania z praw w zakresie prywatności prosimy o kontakt pod powyższym adresem lub adresem e-mail, z tematem wiadomości „Privacy Request”.',
        ],
      },
      {
        h: '2. Zakres',
        paragraphs: [
          'Niniejsza Polityka ma zastosowanie do danych osobowych przetwarzanych przez nas, gdy odwiedzasz naszą witrynę marketingową, zakładasz konto Nexow lub z niego korzystasz, tworzysz lub udostępniasz obszary robocze i widżety, łączysz usługi podmiotów trzecich, nabywasz plan lub nim zarządzasz albo w inny sposób korzystasz z Usług.',
          'Polityka nie ma zastosowania do witryn, aplikacji, platform ani interfejsów API podmiotów trzecich, które zdecydujesz się połączyć; podlegają one ich własnym zasadom ochrony prywatności. Jeżeli konektor działa w Twojej przeglądarce w relacji z podmiotem trzecim, podmiot ten jest co do zasady niezależnym administratorem danych, które mu przekazujesz.',
        ],
      },
      {
        h: '3. Zbierane informacje',
        paragraphs: [
          'Dane konta i profilu: adres e-mail, nazwa wyświetlana, identyfikatory uwierzytelniające, status planu lub rozliczeń, preferencje oraz podobne ustawienia konta.',
          'Dane obszaru roboczego i produktu: widżety, prompty, wygenerowany kod lub konfiguracje, wersje, logi, elementy biblioteki, stan synchronizacji, metadane współpracy oraz powiązane treści tworzone lub przesyłane przez Ciebie w ramach Usług.',
          'Dane połączeń: tokeny, klucze API lub poświadczenia OAuth przekazywane przez Ciebie na potrzeby konektorów podmiotów trzecich (przetwarzane zgodnie z opisem w sekcji „Połączenia i poświadczenia”) oraz metadane techniczne niezbędne do utrzymania tych połączeń.',
          'Dane dotyczące użytkowania i urządzenia: adres IP, typ przeglądarki, informacje o urządzeniu lub systemie operacyjnym, przybliżona lokalizacja ustalona na podstawie adresu IP, strona odsyłająca, wyświetlone strony, korzystanie z funkcji, zdarzenia wydajnościowe i diagnostyczne oraz podobna telemetria niezbędna do działania i zabezpieczenia Usług.',
          'Komunikacja: wiadomości wysyłane do nas (zgłoszenia dotyczące wsparcia, prywatności lub kwestii prawnych) oraz związana z nimi korespondencja.',
          'Dane płatnicze: w przypadku zakupu płatnego planu metoda płatności i dane rozliczeniowe są co do zasady przetwarzane przez naszego operatora płatności; otrzymujemy ograniczone metadane rozliczeniowe (np. plan, status, cztery ostatnie cyfry lub podobne tokeny), a nie pełne numery kart, o ile operator na to pozwala.',
          'Pliki cookie i podobne technologie: szczegółowe informacje zawiera nasza Polityka plików cookie.',
        ],
      },
      {
        h: '4. Sposób wykorzystania informacji',
        paragraphs: [
          'Wykorzystujemy dane osobowe w celu: świadczenia, utrzymania i ulepszania Usług; uwierzytelniania użytkowników i zabezpieczania kont; przechowywania i synchronizacji żądanych przez Ciebie treści obszaru roboczego; realizacji transakcji i wysyłania powiadomień związanych z usługą; odpowiadania na zgłoszenia dotyczące wsparcia i prywatności; monitorowania niezawodności, nadużyć i bezpieczeństwa; wypełniania obowiązków prawnych; a także, w dozwolonym zakresie, informowania o aktualizacjach produktu (możesz zrezygnować z nieistotnych komunikatów marketingowych).',
          'Nie sprzedajemy danych osobowych w rozumieniu pojęcia „sprzedaży” powszechnie przyjętego na gruncie CCPA/CPRA ani nie udostępniamy danych osobowych na potrzeby reklamy behawioralnej w różnych kontekstach (cross-context behavioral advertising) w rozumieniu prawa Kalifornii, z wyjątkiem przypadków ujawnionych w Polityce plików cookie, jeżeli wprowadzimy reklamowe pliki cookie (w takim przypadku zaktualizujemy niniejszą Politykę i zapewnimy wymagane mechanizmy rezygnacji).',
        ],
      },
      {
        h: '5. Podstawy prawne (EOG / Wielka Brytania / Szwajcaria)',
        paragraphs: [
          'Jeżeli zastosowanie ma unijne RODO, brytyjskie UK GDPR lub szwajcarska ustawa FADP, przetwarzamy dane osobowe na jednej lub kilku z następujących podstaw: wykonanie umowy (świadczenie żądanych przez Ciebie Usług); prawnie uzasadnione interesy (zabezpieczanie i ulepszanie Usług, zapobieganie nadużyciom, podstawowa analityka), wyważone względem Twoich praw; zgoda (gdy jest wymagana, np. w odniesieniu do niektórych plików cookie lub opcjonalnego marketingu); oraz obowiązek prawny (przechowywanie dokumentacji lub odpowiadanie na zgodne z prawem żądania).',
        ],
      },
      {
        h: '6. Połączenia i poświadczenia',
        paragraphs: [
          'Jeżeli usługa podmiotu trzeciego na to pozwala, Nexow może łączyć się z nią bezpośrednio z Twojej przeglądarki, tak aby poświadczenia były wykorzystywane przede wszystkim do komunikacji z tą usługą. Niektóre usługi wymagają serwera pośredniczącego (proxy) lub komponentu po stronie serwera; w takich przypadkach przetwarzamy wyłącznie dane niezbędne do realizacji żądania i obsługi konektora.',
          'Ponosisz odpowiedzialność za zapewnienie, że masz prawo do połączenia każdej usługi, oraz za skonfigurowanie poświadczeń zgodnie z zasadą najmniejszych uprawnień. Gdy połączenie nie jest już potrzebne, cofnij dostęp w usłudze podmiotu trzeciego oraz w Nexow.',
        ],
      },
      {
        h: '7. Treści generowane i funkcje AI',
        paragraphs: [
          'Podczas korzystania z funkcji generowania lub funkcji wspomaganych przez AI prompty i powiązany kontekst mogą być przetwarzane przez nas lub przez dostawców modeli bądź infrastruktury, z których korzystamy w celu udostępnienia danej funkcji. Przetwarzanie to wykorzystujemy do generowania wyników dla Twojego obszaru roboczego oraz do obsługi i ulepszania Usług, z zastrzeżeniem naszych umów z tymi dostawcami.',
          'Nie umieszczaj w promptach sekretów, danych osobowych podlegających szczególnym regulacjom ani poufnych danych podmiotów trzecich, chyba że dysponujesz podstawą prawną i akceptujesz ryzyko, że takie treści mogą być przetwarzane przez podmioty przetwarzające uczestniczące w generowaniu.',
        ],
      },
      {
        h: '8. Udostępnianie danych i podmioty przetwarzające',
        paragraphs: [
          'Udostępniamy dane osobowe: usługodawcom (hosting, analityka, poczta e-mail, płatności, monitorowanie błędów, dostawcy AI/modeli) na podstawie umów ograniczających wykorzystanie danych do świadczenia usług na naszą rzecz; doradcom zawodowym; organom władzy publicznej, gdy wymagają tego przepisy prawa lub jest to konieczne do ochrony praw i bezpieczeństwa; a także następcom prawnym w przypadku połączenia, przejęcia lub zbycia aktywów (z powiadomieniem, gdy jest ono wymagane).',
          'Możemy również udostępniać informacje, które sam zdecydujesz się upublicznić lub udostępnić innym użytkownikom (np. opublikowane widżety, funkcje społecznościowe), zgodnie z Twoimi ustawieniami.',
        ],
      },
      {
        h: '9. Przekazywanie danych za granicę',
        paragraphs: [
          `${ENTITY} ma siedzibę w Stanach Zjednoczonych. Jeżeli korzystasz z Usług z terytorium EOG, Wielkiej Brytanii, Szwajcarii lub innych regionów, Twoje dane mogą być przekazywane do Stanów Zjednoczonych i innych państw, w których mogą obowiązywać odmienne przepisy o ochronie danych, oraz tam przetwarzane.`,
          'W wymaganych przypadkach stosujemy odpowiednie zabezpieczenia przekazywania danych (takie jak standardowe klauzule umowne lub mechanizmy je zastępujące) i podejmujemy działania, które uznajemy za rozsądne w celu ochrony danych osobowych.',
        ],
      },
      {
        h: '10. Okres przechowywania',
        paragraphs: [
          'Przechowujemy dane osobowe przez okres aktywności Twojego konta lub tak długo, jak jest to niezbędne do świadczenia Usług, wypełniania obowiązków prawnych, rozstrzygania sporów i egzekwowania umów. Treści obszaru roboczego są co do zasady przechowywane do czasu ich usunięcia przez Ciebie lub zamknięcia konta, z zastrzeżeniem okresów przechowywania kopii zapasowych i blokad prawnych. Możesz zażądać usunięcia danych w sposób opisany poniżej; niektóre kopie szczątkowe mogą pozostawać w kopiach zapasowych przez ograniczony czas.',
        ],
      },
      {
        h: '11. Bezpieczeństwo',
        paragraphs: [
          'Wdrażamy środki techniczne i organizacyjne mające na celu ochronę danych osobowych (kontrola dostępu, szyfrowanie danych w trakcie przesyłania, w stosownych przypadkach, praktyki najmniejszych uprawnień). Żadna metoda przesyłania ani przechowywania danych nie jest całkowicie bezpieczna; odpowiadasz za zabezpieczenie poświadczeń konta i swoich urządzeń.',
        ],
      },
      {
        h: '12. Twoje prawa — Europa i Wielka Brytania (RODO)',
        paragraphs: [
          'Jeżeli przebywasz na terytorium EOG, Wielkiej Brytanii lub Szwajcarii, mogą przysługiwać Ci prawa dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania lub wniesienia sprzeciwu wobec określonego przetwarzania; prawo do przenoszenia danych; a także prawo do wycofania zgody, gdy przetwarzanie odbywa się na jej podstawie, bez wpływu na zgodność z prawem przetwarzania dokonanego przed jej wycofaniem. Masz prawo wnieść skargę do właściwego lokalnego organu nadzorczego.',
          `Aby skorzystać z tych praw, wyślij wiadomość e-mail na adres ${EMAIL} z tematem „Privacy Request”. Przed realizacją żądania możemy być zobowiązani do weryfikacji Twojej tożsamości.`,
        ],
      },
      {
        h: '13. Twoje prawa — Stany Zjednoczone (w tym CCPA/CPRA)',
        paragraphs: [
          'W zależności od stanu zamieszkania (w tym Kalifornii na gruncie CCPA/CPRA) mogą przysługiwać Ci prawa do uzyskania informacji/dostępu, usunięcia i sprostowania danych osobowych, do rezygnacji z ich sprzedaży lub udostępniania, a także, w stosownych przypadkach, do ograniczenia wykorzystania wrażliwych danych osobowych. Nie będziemy Cię dyskryminować z powodu korzystania z praw w zakresie prywatności.',
          `Żądania należy kierować na adres ${EMAIL} (temat: „Privacy Request”) lub pocztą na adres ${ADDRESS}. Upoważnieni pełnomocnicy mogą składać żądania w zakresie dozwolonym przez prawo; możemy wymagać dowodu upoważnienia oraz weryfikacji tożsamości.`,
          'Jeżeli udostępnimy mechanizm „Do Not Sell or Share” lub podobny (w tym za pośrednictwem Global Privacy Control, o ile go respektujemy), opiszemy go w Polityce plików cookie lub w ustawieniach produktu.',
        ],
      },
      {
        h: '14. Informacje dla regionu Azji i Pacyfiku (ogólne)',
        paragraphs: [
          `Jeżeli przebywasz w jurysdykcjach takich jak Singapur (PDPA), Japonia (APPI), Korea Południowa (PIPA) lub w innych regionach Azji i Pacyfiku, w których obowiązują przepisy o ochronie danych osobowych, przetwarzamy informacje zgodnie z niniejszą Polityką oraz z mającymi zastosowanie wymogami lokalnymi w zakresie, w jakim dotyczą one ${ENTITY} jako amerykańskiego dostawcy Usług online.`,
          `Możesz skontaktować się z nami pod adresem ${EMAIL} w sprawie dostępu do danych, ich sprostowania lub usunięcia zgodnie z obowiązującymi przepisami. Jeżeli przepisy lokalne wymagają ustanowienia lokalnego przedstawiciela lub dodatkowych informacji, zaktualizujemy niniejszą Politykę lub udostępnimy informacje właściwe dla danego regionu.`,
        ],
      },
      {
        h: '15. Dzieci',
        paragraphs: [
          'Usługi nie są skierowane do dzieci poniżej 16. roku życia (lub wyższego wieku wymaganego w Twojej jurysdykcji). Nie zbieramy świadomie danych osobowych dzieci. Jeżeli uważasz, że dziecko przekazało nam informacje, skontaktuj się z nami, a podejmiemy odpowiednie kroki w celu ich usunięcia.',
        ],
      },
      {
        h: '16. Witryna marketingowa',
        paragraphs: [
          'Nasza witryna marketingowa ma przede wszystkim charakter statyczny i wykorzystuje ograniczoną analitykę oraz pliki cookie w sposób opisany w Polityce plików cookie. Nie sprzedajemy danych osobowych zebranych za pośrednictwem witryny marketingowej. Linki zewnętrzne (w tym do aplikacji) są, w miarę możliwości, odpowiednio oznaczone.',
        ],
      },
      {
        h: '17. Zmiany',
        paragraphs: [
          'Możemy okresowo aktualizować niniejszą Politykę. Po opublikowaniu zmian data „Ostatnia aktualizacja” zostanie zmieniona. Istotne zmiany mogą zostać wyróżnione na stronie lub, w stosownych przypadkach, przekazane pocztą e-mail. Dalsze korzystanie z Usług po aktualizacji oznacza akceptację zmienionej Polityki w zakresie dozwolonym przez prawo.',
        ],
      },
      {
        h: '18. Kontakt',
        paragraphs: [
          `Zgłoszenia dotyczące prywatności i ochrony danych: ${EMAIL}`,
          `Adres pocztowy: ${ENTITY}, ${ADDRESS}`,
          `Web: ${WEB}`,
        ],
      },
    ],
  },
  termsPage: {
    badge: 'Regulamin',
    title: 'Warunki korzystania',
    subtitle: `Umowa między Tobą a Nexow, Inc. dotycząca korzystania z ${WEB} oraz aplikacji Nexow.`,
    meta: {
      title: 'Warunki korzystania — Nexow',
      description:
        'Warunki korzystania ze stron internetowych i aplikacji Nexow, Inc.: konta, dopuszczalne użytkowanie, własność intelektualna, wyłączenia odpowiedzialności, ograniczenie odpowiedzialności i prawo właściwe.',
    },
    updated: UPDATED,
    governingNote:
      'Wiążącą wersją językową niniejszych Warunków korzystania jest wersja angielska (English). Tłumaczenia udostępniane są wyłącznie dla wygody i nie zmieniają wersji angielskiej.',
    sections: [
      {
        h: '1. Umowa',
        paragraphs: [
          `Niniejsze Warunki korzystania („Warunki”) stanowią wiążącą umowę między Tobą a ${ENTITY} („Nexow”, „my”, „nas” lub „nasz”), regulującą dostęp do ${WEB}, ${APP} oraz powiązanych usług („Usługi”) i korzystanie z nich.`,
          'Uzyskując dostęp do Usług lub korzystając z nich, zakładając konto lub klikając w celu akceptacji niniejszych Warunków, wyrażasz zgodę na nie oraz na naszą Politykę prywatności i Politykę plików cookie. Jeżeli się nie zgadzasz, nie korzystaj z Usług.',
          'Jeżeli korzystasz z Usług w imieniu organizacji, oświadczasz, że jesteś umocowany do zaciągania zobowiązań w jej imieniu, a określenie „Ty” obejmuje również tę organizację.',
        ],
      },
      {
        h: '2. Usługi',
        paragraphs: [
          'Nexow udostępnia narzędzia do opisywania, generowania, konfigurowania, wizualizowania i udostępniania widżetów oraz obszarów roboczych, w tym połączenia ze źródłami danych podmiotów trzecich oraz opcjonalne funkcje współpracy, społecznościowe lub marketplace, w miarę ich udostępniania.',
          'Możemy modyfikować, zawieszać lub wycofywać funkcje, plany lub Usługi (w całości lub w części), w miarę możliwości z zachowaniem rozsądnego terminu powiadomienia. Funkcje w wersji zapoznawczej lub beta mogą działać niestabilnie i są udostępniane w stanie, w jakim się znajdują.',
        ],
      },
      {
        h: '3. Uprawnienia i konta',
        paragraphs: [
          'Aby korzystać z Usług, musisz osiągnąć wiek zgody cyfrowej obowiązujący w Twojej jurysdykcji (a w każdym przypadku co najmniej 16 lat lub 18 lat, jeżeli jest to wymagane). Musisz podawać prawdziwe dane konta i zachować poufność poświadczeń. Ponosisz odpowiedzialność za działania podejmowane za pośrednictwem Twojego konta.',
          'Możemy zawiesić lub zamknąć konta, które naruszają niniejsze Warunki, stwarzają zagrożenie dla bezpieczeństwa lub pozostają nieaktywne przez dłuższy czas.',
        ],
      },
      {
        h: '4. Plany, kredyty i płatności',
        paragraphs: [
          'Niektóre funkcje wymagają płatnego planu, kredytów lub podlegają innym limitom użytkowania. Ceny, uwzględnione limity i okresy rozliczeniowe są opisane na stronie Plany lub w produkcie. O ile nie wskazano inaczej, opłaty nie podlegają zwrotowi, z wyjątkiem przypadków przewidzianych przepisami prawa.',
          'Upoważniasz nas i naszych operatorów płatności do pobierania należnych opłat. Mogą mieć zastosowanie podatki. Możemy zmieniać ceny za uprzednim powiadomieniem; zmiany wchodzą w życie z chwilą kolejnego odnowienia, o ile nie wskazano inaczej.',
        ],
      },
      {
        h: '5. Twoje treści i licencja',
        paragraphs: [
          'Zachowujesz prawa własności do treści przesyłanych lub tworzonych w ramach Usług („Treści Użytkownika”), w tym promptów, widżetów i konfiguracji, z zastrzeżeniem praw podmiotów trzecich oraz praw Nexow do naszej platformy, szablonów i wygenerowanych struktur bazowych, które nie są unikalne dla Twoich danych wejściowych.',
          `Udzielasz ${ENTITY} ogólnoświatowej, niewyłącznej licencji na hostowanie, przetwarzanie, przesyłanie, wyświetlanie Treści Użytkownika oraz tworzenie na ich podstawie utworów zależnych wyłącznie w zakresie niezbędnym do obsługi, zabezpieczania i ulepszania Usług oraz w inny sposób zgodny z Twoimi poleceniami (np. udostępnianie lub publikowanie).`,
          'Oświadczasz, że posiadasz wszelkie prawa niezbędne do przesyłania Treści Użytkownika i łączenia usług podmiotów trzecich oraz że Treści Użytkownika nie naruszają przepisów prawa ani praw podmiotów trzecich.',
        ],
      },
      {
        h: '6. Dopuszczalne użytkowanie',
        paragraphs: [
          'Zobowiązujesz się przestrzegać naszej Polityki dopuszczalnego użytkowania oraz wszystkich obowiązujących przepisów. Nie wolno Ci nadużywać Usług, zakłócać korzystania z nich innym osobom, podejmować prób nieuprawnionego dostępu, pozyskiwać danych w sposób stanowiący nadużycie ani wykorzystywać Usług do niezgodnego z prawem obrotu, oszustw, złośliwego oprogramowania lub naruszeń praw.',
          'Nexow jest platformą narzędziową i wizualizacyjną. Żadne elementy Usług nie stanowią porady finansowej, inwestycyjnej, prawnej ani podatkowej. Dane rynkowe i przykłady mogą mieć charakter poglądowy; ponosisz wyłączną odpowiedzialność za podejmowane przez siebie decyzje.',
        ],
      },
      {
        h: '7. Usługi podmiotów trzecich',
        paragraphs: [
          'Konektory i integracje są opcjonalne i podlegają warunkom podmiotów trzecich. Nie ponosimy odpowiedzialności za dostępność, dokładność, opłaty ani praktyki dotyczące danych stosowane przez podmioty trzecie. Przekazane przez Ciebie poświadczenia są wykorzystywane w sposób opisany w Polityce prywatności.',
        ],
      },
      {
        h: '8. Własność intelektualna',
        paragraphs: [
          `Usługi, w tym oprogramowanie, oznaczenia marki, dokumentacja oraz treści niebędące Treściami Użytkownika, stanowią własność ${ENTITY} lub jego licencjodawców i są chronione przepisami prawa własności intelektualnej. Poza ograniczonym prawem do korzystania z Usług na podstawie niniejszych Warunków nie udziela się żadnych innych praw.`,
          'Przekazane przez Ciebie uwagi i sugestie możemy wykorzystywać bez jakichkolwiek zobowiązań wobec Ciebie.',
        ],
      },
      {
        h: '9. Poufność i bezpieczeństwo',
        paragraphs: [
          'Nie wolno Ci podejmować prób testowania, obchodzenia ani zakłócania zabezpieczeń. Podejrzewane podatności zgłaszaj nam w sposób odpowiedzialny. Stosujemy rozsądne środki bezpieczeństwa, lecz nie możemy zagwarantować bezwzględnego bezpieczeństwa.',
        ],
      },
      {
        h: '10. Wyłączenia odpowiedzialności',
        paragraphs: [
          'USŁUGI SĄ ŚWIADCZONE W STANIE „TAK JAK SĄ” („AS IS”) I „W MIARĘ DOSTĘPNOŚCI” („AS AVAILABLE”). W MAKSYMALNYM ZAKRESIE DOZWOLONYM PRZEZ PRAWO WYŁĄCZAMY WSZELKIE GWARANCJE, WYRAŹNE LUB DOROZUMIANE, W TYM GWARANCJE PRZYDATNOŚCI HANDLOWEJ, PRZYDATNOŚCI DO OKREŚLONEGO CELU ORAZ NIENARUSZANIA PRAW. NIE GWARANTUJEMY, ŻE USŁUGI BĘDĄ DZIAŁAĆ BEZ PRZERW, BEZ BŁĘDÓW LUB BEZ SZKODLIWYCH KOMPONENTÓW, ANI ŻE WYNIKI (W TYM TREŚCI GENEROWANE PRZEZ AI) BĘDĄ DOKŁADNE, KOMPLETNE LUB ODPOWIEDNIE DO TWOICH CELÓW.',
        ],
      },
      {
        h: '11. Ograniczenie odpowiedzialności',
        paragraphs: [
          `W MAKSYMALNYM ZAKRESIE DOZWOLONYM PRZEZ PRAWO ${ENTITY.toUpperCase()} ORAZ JEGO DYREKTORZY, CZŁONKOWIE KADRY KIEROWNICZEJ, PRACOWNICY I PEŁNOMOCNICY NIE PONOSZĄ ODPOWIEDZIALNOŚCI ZA SZKODY POŚREDNIE, PRZYPADKOWE, SZCZEGÓLNE, WYNIKOWE, ODSTRASZAJĄCE LUB KARNE ANI ZA UTRATĘ ZYSKÓW, PRZYCHODÓW, DANYCH LUB RENOMY, WYNIKAJĄCE Z USŁUG LUB NINIEJSZYCH WARUNKÓW ALBO Z NIMI ZWIĄZANE, NIEZALEŻNIE OD TEGO, CZY PODSTAWĄ JEST UMOWA, CZYN NIEDOZWOLONY CZY INNA PODSTAWA, NAWET JEŻELI POINFORMOWANO O MOŻLIWOŚCI ICH WYSTĄPIENIA.`,
          'NASZA ŁĄCZNA ODPOWIEDZIALNOŚĆ Z TYTUŁU WSZELKICH ROSZCZEŃ ZWIĄZANYCH Z USŁUGAMI LUB NINIEJSZYMI WARUNKAMI NIE PRZEKROCZY WYŻSZEJ Z NASTĘPUJĄCYCH KWOT: (A) KWOT ZAPŁACONYCH NAM PRZEZ CIEBIE ZA USŁUGI W OKRESIE DWUNASTU (12) MIESIĘCY POPRZEDZAJĄCYCH ROSZCZENIE LUB (B) STU DOLARÓW AMERYKAŃSKICH (100 USD). NIEKTÓRE JURYSDYKCJE NIE DOPUSZCZAJĄ OKREŚLONYCH OGRANICZEŃ; W TAKICH PRZYPADKACH NASZA ODPOWIEDZIALNOŚĆ JEST OGRANICZONA W MAKSYMALNYM DOZWOLONYM ZAKRESIE.',
        ],
      },
      {
        h: '12. Zwolnienie z odpowiedzialności',
        paragraphs: [
          `Zobowiązujesz się bronić ${ENTITY} i zwolnić go z odpowiedzialności z tytułu roszczeń, szkód i wydatków (w tym uzasadnionych kosztów zastępstwa prawnego) wynikających z Twoich Treści Użytkownika, korzystania przez Ciebie z Usług, Twoich połączeń z podmiotami trzecimi lub naruszenia przez Ciebie niniejszych Warunków bądź przepisów prawa.`,
        ],
      },
      {
        h: '13. Rozwiązanie',
        paragraphs: [
          'Możesz w każdej chwili zaprzestać korzystania z Usług i zażądać zamknięcia konta za pośrednictwem produktu lub kontaktując się z nami. Możemy zawiesić lub zakończyć dostęp w przypadku naruszenia, zagrożenia lub z przyczyn prawnych. Postanowienia, które ze swej natury powinny obowiązywać po rozwiązaniu (w tym dotyczące własności intelektualnej, wyłączeń odpowiedzialności, ograniczeń, zwolnienia z odpowiedzialności i prawa właściwego), pozostają w mocy po rozwiązaniu umowy.',
        ],
      },
      {
        h: '14. Prawo właściwe i spory',
        paragraphs: [
          'Niniejsze Warunki podlegają prawu stanu Delaware w Stanach Zjednoczonych, z wyłączeniem norm kolizyjnych. Z zastrzeżeniem bezwzględnie obowiązujących przepisów o ochronie konsumentów w państwie Twojego zamieszkania, wyłączną jurysdykcję w sprawach sporów mają sądy z siedzibą w Delaware (lub sądy federalne właściwe dla tego obszaru), z tym że możemy dochodzić zabezpieczenia roszczeń w każdej jurysdykcji.',
          'Jeżeli jesteś konsumentem w EOG lub Wielkiej Brytanii, możesz również korzystać z bezwzględnie obowiązującej ochrony przewidzianej przepisami lokalnymi oraz wszczynać postępowania w miejscu swojego zamieszkania, jeżeli wymagają tego przepisy prawa.',
        ],
      },
      {
        h: '15. Zmiany',
        paragraphs: [
          'Możemy aktualizować niniejsze Warunki, publikując zmienioną wersję ze zaktualizowaną datą. O istotnych zmianach możemy informować w produkcie lub pocztą e-mail. Dalsze korzystanie z Usług po dniu wejścia zmian w życie oznacza ich akceptację, chyba że obowiązujące przepisy stanowią inaczej.',
        ],
      },
      {
        h: '16. Kontakt',
        paragraphs: [
          `Zawiadomienia prawne: ${EMAIL}`,
          `${ENTITY}, ${ADDRESS}`,
          `Web: ${WEB}`,
        ],
      },
    ],
  },
  cookiesPage: {
    badge: 'Pliki cookie',
    title: 'Polityka plików cookie',
    subtitle:
      `W jaki sposób Nexow, Inc. wykorzystuje pliki cookie i podobne technologie w ${WEB} oraz w aplikacji Nexow.`,
    meta: {
      title: 'Polityka plików cookie — Nexow',
      description:
        'Polityka plików cookie Nexow, Inc.: rodzaje plików cookie, cele, zgoda oraz sposób zarządzania preferencjami.',
    },
    updated: UPDATED,
    governingNote:
      'Wiążącą wersją językową niniejszej Polityki plików cookie jest wersja angielska (English). Tłumaczenia udostępniane są wyłącznie dla wygody i nie zmieniają wersji angielskiej.',
    sections: [
      {
        h: '1. Wprowadzenie',
        paragraphs: [
          `${ENTITY} („Nexow”, „my”, „nas”) wykorzystuje pliki cookie i podobne technologie (pamięć lokalną, piksele, pakiety SDK) w ${WEB} oraz w powiązanych Usługach. Niniejsza Polityka plików cookie wyjaśnia, z czego korzystamy, w jakim celu i jak możesz tym zarządzać. Należy ją czytać łącznie z naszą Polityką prywatności.`,
          `Kontakt: ${EMAIL} · ${ADDRESS}`,
        ],
      },
      {
        h: '2. Czym są pliki cookie?',
        paragraphs: [
          'Pliki cookie to niewielkie pliki tekstowe zapisywane na Twoim urządzeniu. Podobne technologie zapisują lub odczytują informacje w porównywalny sposób. Mogą one mieć charakter „sesyjny” (usuwane po zamknięciu przeglądarki) lub „trwały” (przechowywane do czasu wygaśnięcia lub usunięcia), a także być „własne” (ustawiane przez nas) lub „podmiotów trzecich” (ustawiane przez inną domenę).',
        ],
      },
      {
        h: '3. Jak wykorzystujemy pliki cookie',
        paragraphs: [
          'Niezbędne: wymagane ze względów bezpieczeństwa, równoważenia obciążenia, uwierzytelniania, przechowywania zgód i podstawowej funkcjonalności. Nie wymagają zgody, jeżeli obowiązujące przepisy przewidują takie zwolnienie.',
          'Preferencyjne / funkcjonalne: zapamiętują język, ustawienia interfejsu lub podobne wybory.',
          'Analityczne / wydajnościowe: pomagają nam zrozumieć ruch i ulepszać witrynę lub aplikację (np. zagregowane odsłony stron). W wymaganych przypadkach (w tym w UE i Wielkiej Brytanii) prosimy o zgodę przed zastosowaniem nieniezbędnych analitycznych plików cookie.',
          'Marketingowe / reklamowe: obecnie nie korzystamy z reklamowych plików cookie podmiotów trzecich w witrynie marketingowej. Jeżeli to się zmieni, zaktualizujemy niniejszą Politykę i uzyskamy zgodę, gdy będzie wymagana.',
        ],
      },
      {
        h: '4. Pamięć lokalna i stan aplikacji',
        paragraphs: [
          'Aplikacja Nexow może korzystać z pamięci przeglądarki (np. localStorage, IndexedDB) w celu przechowywania danych obszaru roboczego, preferencji lub stanu sesji. Pamięć ta jest niezbędna do działania wykorzystywanych przez Ciebie funkcji produktu i została szerzej opisana w Polityce prywatności.',
        ],
      },
      {
        h: '5. Zgoda (Europa i podobne systemy prawne)',
        paragraphs: [
          'Jeżeli dyrektywa o prywatności i łączności elektronicznej (ePrivacy) lub RODO (albo ich brytyjskie odpowiedniki) wymagają zgody na nieniezbędne pliki cookie, poprosimy o zgodę przed ich zastosowaniem i uszanujemy jej wycofanie. Niezbędne pliki cookie mogą być ustawiane niezależnie od banerów zgody.',
          'Możesz zmienić ustawienia przeglądarki, aby blokować lub usuwać pliki cookie; niektóre funkcje mogą nie działać prawidłowo, jeżeli niezbędne pliki cookie zostaną zablokowane.',
        ],
      },
      {
        h: '6. Stany Zjednoczone i inne regiony',
        paragraphs: [
          'W Stanach Zjednoczonych informacje o plikach cookie służą zapewnieniu przejrzystości wymaganej przez stanowe przepisy o ochronie prywatności (w tym pojęć „sprzedaży” i „udostępniania” na gruncie CCPA/CPRA w przypadku stosowania reklamowych plików cookie). Użytkownikom z regionu Azji i Pacyfiku mogą przysługiwać podobne prawa do przejrzystości i wyboru na podstawie przepisów lokalnych (np. PDPA, APPI); skontaktuj się z nami, aby skorzystać z przysługujących praw.',
        ],
      },
      {
        h: '7. Zarządzanie plikami cookie',
        paragraphs: [
          'Ustawienia przeglądarki: skorzystaj ze stron pomocy swojej przeglądarki, aby odrzucić lub usunąć pliki cookie.',
          'Ustawienia w produkcie / witrynie: jeżeli udostępniamy narzędzie do zarządzania preferencjami plików cookie, użyj go, aby dostosować kategorie nieniezbędne.',
          `Pytania: ${EMAIL}`,
        ],
      },
      {
        h: '8. Zmiany',
        paragraphs: [
          'Możemy aktualizować niniejszą Politykę plików cookie w przypadku zmiany naszych praktyk. Sprawdzaj datę „Ostatnia aktualizacja”. Istotne zmiany zostaną odzwierciedlone na tej stronie oraz, w wymaganych przypadkach, poprzez ponowne uzyskanie zgody.',
        ],
      },
    ],
  },
  legalPage: {
    badge: 'Informacje prawne',
    title: 'Informacje prawne i dane spółki',
    subtitle: 'Oficjalne dane spółki oraz publiczne dokumenty prawne Nexow, Inc.',
    meta: {
      title: 'Informacje prawne — Nexow, Inc.',
      description:
        'Informacje prawne i dane spółki Nexow, Inc., w tym adres rejestrowy oraz odnośniki do Polityki prywatności, Warunków korzystania, Polityki plików cookie i Polityki dopuszczalnego użytkowania.',
    },
    updated: UPDATED,
    governingNote:
      'Informacje o spółce i dokumenty prawne są udostępniane w języku angielskim (English) jako wiążącej wersji językowej, chyba że przepisy prawa wymagają obowiązkowej wersji lokalnej.',
    sections: [
      {
        h: '1. Dane spółki',
        paragraphs: [
          `Podmiot prawny: ${ENTITY}`,
          `Adres rejestrowy / korespondencyjny: ${ADDRESS}`,
          `Strona internetowa: ${WEB}`,
          `Aplikacja: ${APP}`,
          `Kontakt ogólny: ${EMAIL}`,
        ],
      },
      {
        h: '2. Publiczne dokumenty prawne',
        paragraphs: [
          'Następujące dokumenty stanowią nasze publiczne dokumenty prawne dotyczące witryny i aplikacji:',
          '• Polityka prywatności — sposób przetwarzania przez nas danych osobowych (z uwzględnieniem RODO/CCPA oraz informacji dla regionu Azji i Pacyfiku).',
          '• Warunki korzystania — warunki regulujące korzystanie z Usług.',
          '• Polityka plików cookie — pliki cookie i podobne technologie.',
          '• Polityka dopuszczalnego użytkowania — zachowania zabronione i wymagane.',
          'Odnośniki są dostępne w stopce witryny oraz pod adresami /privacy, /terms, /cookies i /acceptable-use.',
        ],
      },
      {
        h: '3. Nota identyfikacyjna (impressum)',
        paragraphs: [
          `Dla użytkowników poszukujących „noty prawnej”, „impressum” lub danych identyfikujących spółkę: operatorem Usług jest ${ENTITY}, z siedzibą pod adresem ${ADDRESS}. Kontakt online: ${EMAIL}. Niniejsza strona ma na celu spełnienie powszechnych oczekiwań w zakresie przejrzystości obowiązujących w Stanach Zjednoczonych, Europie i innych regionach w odniesieniu do identyfikacji operatora usługi.`,
        ],
      },
      {
        h: '4. Przetwarzanie danych',
        paragraphs: [
          'Nexow przetwarza dane osobowe w sposób opisany w Polityce prywatności. Klienci, którzy potrzebują umowy powierzenia przetwarzania danych (DPA) lub podobnych postanowień umownych na potrzeby art. 28 RODO (lub równoważnych przepisów), mogą o nią wystąpić, wysyłając do nas wiadomość e-mail z tematem „DPA Request”. Standardowe podmioty przetwarzające oraz zabezpieczenia przekazywania danych są opisane w Polityce prywatności lub udostępniane na żądanie.',
        ],
      },
      {
        h: '5. Wyłączenia odpowiedzialności',
        paragraphs: [
          'Nexow jest platformą narzędziową i wizualizacyjną. Treści w witrynie marketingowej i w aplikacji (w tym przykłady danych rynkowych) nie stanowią porady finansowej, inwestycyjnej, prawnej ani podatkowej. Ponosisz wyłączną odpowiedzialność za przestrzeganie przepisów mających zastosowanie do korzystania przez Ciebie z połączonych platform i danych.',
        ],
      },
      {
        h: '6. Wiążąca wersja językowa',
        paragraphs: [
          'Wiążącą wersją językową naszych dokumentów prawnych jest język angielski. Interfejs lub streszczenia w językach lokalnych służą wyłącznie wygodzie i nie zmieniają postanowień w wersji angielskiej, chyba że wyraźnie opublikujemy wiążącą wersję lokalną.',
        ],
      },
      {
        h: '7. Kontakt w sprawach prawnych',
        paragraphs: [
          `E-mail: ${EMAIL} (temat: „Legal”)`,
          `Poczta: ${ENTITY}, ${ADDRESS}`,
        ],
      },
    ],
  },
  acceptableUsePage: {
    badge: 'Dopuszczalne użytkowanie',
    title: 'Polityka dopuszczalnego użytkowania',
    subtitle: 'Zasady odpowiedzialnego i zgodnego z prawem korzystania ze stron internetowych Nexow oraz aplikacji Nexow.',
    meta: {
      title: 'Polityka dopuszczalnego użytkowania — Nexow',
      description:
        'Polityka dopuszczalnego użytkowania Nexow, Inc.: działania zabronione, zasady bezpieczeństwa i egzekwowanie.',
    },
    updated: UPDATED,
    governingNote:
      'Wiążącą wersją językową niniejszej Polityki dopuszczalnego użytkowania jest wersja angielska (English).',
    sections: [
      {
        h: '1. Cel',
        paragraphs: [
          `Niniejsza Polityka dopuszczalnego użytkowania („AUP”) ma zastosowanie do korzystania przez Ciebie z Usług obsługiwanych przez ${ENTITY}. Uzupełnia ona Warunki korzystania. Jej naruszenie może skutkować zawieszeniem lub zamknięciem konta.`,
        ],
      },
      {
        h: '2. Działania zabronione',
        paragraphs: [
          'Nie wolno Ci wykorzystywać Usług do: naruszania przepisów prawa lub praw podmiotów trzecich; rozpowszechniania złośliwego oprogramowania, spamu lub phishingu; podejmowania prób nieuprawnionego dostępu do systemów, kont lub danych; zakłócania lub przerywania działania Usług; pozyskiwania lub gromadzenia danych w sposób obciążający infrastrukturę lub naruszający warunki innych podmiotów; obchodzenia limitów zapytań lub zabezpieczeń; wprowadzania w błąd co do swojej tożsamości lub powiązań; ani przesyłania bez upoważnienia danych niezgodnych z prawem, naruszających prawa lub stanowiących szczególnie wrażliwe dane podlegające regulacjom.',
          'Nie wolno Ci wykorzystywać Usług do ułatwiania oszustw, manipulacji rynkiem, obchodzenia sankcji ani niezgodnego z prawem obrotu. Nie wolno Ci generować ani wdrażać widżetów, których głównym celem jest nadużycie, wprowadzanie w błąd lub wyrządzanie szkody.',
        ],
      },
      {
        h: '3. Poświadczenia i konektory',
        paragraphs: [
          'Korzystaj wyłącznie z poświadczeń, do których używania jesteś upoważniony. Nie udostępniaj dostępu do konta w sposób niebezpieczny. Konfiguruj konektory zgodnie z zasadą najmniejszych uprawnień. Nie podejmuj prób wydobycia sekretów należących do innych użytkowników.',
        ],
      },
      {
        h: '4. AI i generowane wyniki',
        paragraphs: [
          'Nie wykorzystuj funkcji generowania do tworzenia treści niezgodnych z prawem, naruszających prawa własności intelektualnej lub mających na celu wprowadzanie innych w błąd na dużą skalę (np. skoordynowane nieautentyczne zachowania). Ponosisz odpowiedzialność za weryfikację wyników przed poleganiem na nich.',
        ],
      },
      {
        h: '5. Uczciwe korzystanie z zasobów',
        paragraphs: [
          'Plany i kredyty podlegają limitom użytkowania. Zautomatyzowane lub stanowiące nadużycie zużycie zasobów, które pogarsza jakość usług dla innych, może zostać ograniczone lub zablokowane.',
        ],
      },
      {
        h: '6. Zgłaszanie i egzekwowanie',
        paragraphs: [
          `Nadużycia zgłaszaj na adres ${EMAIL} z tematem „Abuse”. Możemy prowadzić postępowania wyjaśniające i usuwać treści, zawieszać funkcje lub zamykać konta. W stosownych przypadkach możemy zgłaszać działania niezgodne z prawem właściwym organom.`,
        ],
      },
      {
        h: '7. Kontakt',
        paragraphs: [
          `${ENTITY}, ${ADDRESS} · ${EMAIL} · ${WEB}`,
        ],
      },
    ],
  },
};
