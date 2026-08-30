import type { LegalBundle } from './types';
import { ADDRESS, APP, CONTACT_BLOCK, EMAIL, ENTITY, WEB } from './shared';

const UPDATED = 'Zuletzt aktualisiert: 29. Juli 2026';

export const de: LegalBundle = {
  privacyPage: {
    badge: 'Datenschutz',
    title: 'Datenschutzerklärung',
    subtitle:
      'Wie Nexow, Inc. personenbezogene Daten erhebt, verwendet und schützt, wenn Sie nexow.ai und die Nexow-Anwendung nutzen.',
    meta: {
      title: 'Datenschutzerklärung — Nexow',
      description:
        'Datenschutzerklärung von Nexow, Inc.: erhobene Daten, Verwendungszwecke, Cookies und Ihre Datenschutzrechte nach DSGVO, CCPA/CPRA und anderen anwendbaren Gesetzen.',
    },
    updated: UPDATED,
    governingNote:
      'Die verbindliche Sprache dieser Datenschutzerklärung ist Englisch (English). Übersetzungen dienen ausschließlich der Orientierung und ändern die englische Fassung nicht.',
    sections: [
      {
        h: '1. Wer wir sind',
        paragraphs: [
          `Diese Datenschutzerklärung beschreibt, wie ${ENTITY} („Nexow“, „wir“ oder „unser“) personenbezogene Daten im Zusammenhang mit unseren Websites (einschließlich ${WEB}), der Nexow-Webanwendung (${APP}) und den zugehörigen Diensten (zusammen die „Dienste“) verarbeitet.`,
          `Verantwortlicher / Unternehmen: ${CONTACT_BLOCK}`,
          'Bei Fragen zu dieser Erklärung oder zur Ausübung von Datenschutzrechten kontaktieren Sie uns unter der oben genannten Adresse oder E-Mail mit dem Betreff „Privacy Request“.',
        ],
      },
      {
        h: '2. Geltungsbereich',
        paragraphs: [
          'Diese Erklärung gilt für personenbezogene Daten, die wir verarbeiten, wenn Sie unsere Marketing-Website besuchen, ein Nexow-Konto erstellen oder nutzen, Workspaces und Widgets erstellen oder teilen, Drittanbieterdienste verbinden, einen Plan erwerben oder verwalten oder anderweitig mit den Diensten interagieren.',
          'Sie gilt nicht für Websites, Apps, Venues oder APIs Dritter, die Sie verbinden; diese unterliegen deren eigenen Datenschutzbedingungen. Wenn ein Connector in Ihrem Browser gegen einen Dritten ausgeführt wird, ist dieser Dritte in der Regel unabhängiger Verantwortlicher für die Daten, die Sie an ihn senden.',
        ],
      },
      {
        h: '3. Welche Informationen wir erheben',
        paragraphs: [
          'Konto- und Profildaten: E-Mail-Adresse, Anzeigename, Authentifizierungskennungen, Plan- oder Abrechnungsstatus, Einstellungen und ähnliche Kontoeinstellungen.',
          'Workspace- und Produktdaten: Widgets, Prompts, generierter Code oder Konfigurationen, Versionen, Protokolle, Bibliothekselemente, Synchronisierungsstatus, Kollaborationsmetadaten und zugehörige Inhalte, die Sie in den Diensten erstellen oder hochladen.',
          'Verbindungsdaten: Tokens, API-Schlüssel oder OAuth-Anmeldedaten, die Sie für Drittanbieter-Connectors bereitstellen (behandelt wie unter „Verbindungen und Anmeldedaten“ beschrieben), sowie technische Metadaten, die zur Aufrechterhaltung dieser Verbindungen erforderlich sind.',
          'Nutzungs- und Gerätedaten: IP-Adresse, Browsertyp, Geräte- oder Betriebssysteminformationen, ungefährer Standort aus der IP abgeleitet, Referrer, aufgerufene Seiten, Funktionsnutzung, Leistungs- und Diagnoseereignisse sowie ähnliche Telemetrie, die zum Betrieb und Schutz der Dienste erforderlich ist.',
          'Kommunikation: Nachrichten, die Sie uns senden (Support, Datenschutz oder rechtliche Anfragen), und zugehörige Korrespondenz.',
          'Zahlungsdaten: Wenn Sie einen kostenpflichtigen Plan erwerben, werden Zahlungsmethode und Rechnungsdaten in der Regel von unserem Zahlungsdienstleister verarbeitet; wir erhalten begrenzte Abrechnungsmetadaten (z. B. Plan, Status, letzte vier Ziffern oder vergleichbare Tokens) und keine vollständigen Kartennummern, soweit der Dienstleister dies zulässt.',
          'Cookies und ähnliche Technologien: siehe unsere Cookie-Richtlinie für Details.',
        ],
      },
      {
        h: '4. Wie wir Informationen verwenden',
        paragraphs: [
          'Wir verwenden personenbezogene Daten, um: die Dienste bereitzustellen, zu warten und zu verbessern; Nutzer zu authentifizieren und Konten zu schützen; von Ihnen angeforderte Workspace-Inhalte zu speichern und zu synchronisieren; Transaktionen zu verarbeiten und dienstbezogene Mitteilungen zu senden; Support- und Datenschutzanfragen zu beantworten; Zuverlässigkeit, Missbrauch und Sicherheit zu überwachen; gesetzlichen Pflichten nachzukommen; und, soweit zulässig, Produktaktualisierungen mitzuteilen (Sie können nicht wesentliches Marketing abbestellen).',
          'Wir verkaufen personenbezogene Daten nicht im Sinne der üblichen Definition von „Verkauf“ nach CCPA/CPRA und teilen personenbezogene Daten nicht für kontextübergreifende Verhaltenswerbung im Sinne des kalifornischen Rechts, außer wie in unserer Cookie-Richtlinie offengelegt, falls wir Werbe-Cookies einführen (in diesem Fall aktualisieren wir diese Erklärung und bieten die erforderlichen Opt-out-Optionen).',
        ],
      },
      {
        h: '5. Rechtsgrundlagen (EWR / UK / Schweiz)',
        paragraphs: [
          'Soweit die EU-DSGVO, UK GDPR oder das schweizerische DSG gelten, verarbeiten wir personenbezogene Daten auf einer oder mehreren der folgenden Grundlagen: Vertragserfüllung (Bereitstellung der von Ihnen angeforderten Dienste); berechtigte Interessen (Sicherung und Verbesserung der Dienste, Missbrauchsprävention, grundlegende Analysen), abgewogen gegen Ihre Rechte; Einwilligung (wo erforderlich, z. B. bestimmte Cookies oder optionales Marketing); und gesetzliche Verpflichtung (Aufbewahrung von Aufzeichnungen oder Beantwortung rechtmäßiger Anfragen).',
        ],
      },
      {
        h: '6. Verbindungen und Anmeldedaten',
        paragraphs: [
          'Soweit ein Drittanbieterdienst dies zulässt, kann Nexow direkt aus Ihrem Browser verbinden, sodass Anmeldedaten primär zur Kommunikation mit diesem Dienst verwendet werden. Einige Dienste erfordern einen Proxy oder eine serverseitige Komponente; in diesen Fällen verarbeiten wir nur das zur Erfüllung der Anfrage und zum Betrieb des Connectors Erforderliche.',
          'Sie sind dafür verantwortlich, sicherzustellen, dass Sie berechtigt sind, jeden Dienst zu verbinden, und Anmeldedaten mit minimalen Berechtigungen zu konfigurieren. Widerrufen Sie den Zugriff im Drittanbieterdienst und in Nexow, wenn Sie die Verbindung nicht mehr benötigen.',
        ],
      },
      {
        h: '7. Generierte Inhalte und KI-Funktionen',
        paragraphs: [
          'Wenn Sie Generierungs- oder KI-gestützte Funktionen nutzen, können Prompts und zugehöriger Kontext von uns und/oder von Modell- oder Infrastrukturanbietern verarbeitet werden, die wir zur Bereitstellung der Funktion einsetzen. Wir nutzen diese Verarbeitung, um Ergebnisse für Ihren Workspace zu generieren und die Dienste zu betreiben und zu verbessern, vorbehaltlich unserer Verträge mit diesen Anbietern.',
          'Übermitteln Sie keine Geheimnisse, regulierte personenbezogene Daten oder vertrauliche Daten Dritter in Prompts, es sei denn, Sie haben eine rechtmäßige Grundlage und akzeptieren das Risiko, dass solche Inhalte von an der Generierung beteiligten Unterauftragsverarbeitern verarbeitet werden können.',
        ],
      },
      {
        h: '8. Weitergabe und Auftragsverarbeiter',
        paragraphs: [
          'Wir geben personenbezogene Daten weiter an: Dienstleister (Hosting, Analysen, E-Mail, Zahlungen, Fehlerüberwachung, KI-/Modellanbieter) unter Verträgen, die die Nutzung auf die Erbringung von Dienstleistungen für uns beschränken; professionelle Berater; Behörden, wenn gesetzlich vorgeschrieben oder zum Schutz von Rechten und Sicherheit; und Rechtsnachfolger bei Fusion, Übernahme oder Vermögensübertragung (mit Benachrichtigung, wo erforderlich).',
          'Wir können auch Informationen teilen, die Sie öffentlich machen oder mit anderen Nutzern teilen (z. B. veröffentlichte Widgets, Community-Funktionen), gemäß Ihren Einstellungen.',
        ],
      },
      {
        h: '9. Internationale Übermittlungen',
        paragraphs: [
          `${ENTITY} hat seinen Sitz in den Vereinigten Staaten. Wenn Sie aus dem EWR, dem Vereinigten Königreich, der Schweiz oder anderen Regionen auf die Dienste zugreifen, können Ihre Informationen in die Vereinigten Staaten und andere Länder mit abweichenden Datenschutzregeln übermittelt und dort verarbeitet werden.`,
          'Wo erforderlich, setzen wir angemessene Garantien für Übermittlungen ein (wie Standardvertragsklauseln oder Nachfolgermechanismen) und ergreifen Maßnahmen, die wir zum Schutz personenbezogener Daten für angemessen halten.',
        ],
      },
      {
        h: '10. Aufbewahrung',
        paragraphs: [
          'Wir bewahren personenbezogene Daten auf, solange Ihr Konto aktiv ist oder soweit dies zur Bereitstellung der Dienste, zur Erfüllung gesetzlicher Pflichten, zur Beilegung von Streitigkeiten und zur Durchsetzung von Vereinbarungen erforderlich ist. Workspace-Inhalte bleiben in der Regel bestehen, bis Sie sie löschen oder Ihr Konto schließen, vorbehaltlich Backup- und gesetzlicher Aufbewahrungsfristen. Sie können die Löschung wie unten beschrieben beantragen; einige Restkopien können für begrenzte Zeit in Backups verbleiben.',
        ],
      },
      {
        h: '11. Sicherheit',
        paragraphs: [
          'Wir setzen technische und organisatorische Maßnahmen ein, die zum Schutz personenbezogener Daten bestimmt sind (Zugriffskontrollen, Verschlüsselung während der Übertragung, wo angemessen, Prinzip der geringsten Berechtigung). Keine Übertragungs- oder Speichermethode ist vollständig sicher; Sie sind für den Schutz Ihrer Kontozugangsdaten und Geräte verantwortlich.',
        ],
      },
      {
        h: '12. Ihre Rechte — Europa und UK (DSGVO)',
        paragraphs: [
          'Wenn Sie sich im EWR, im Vereinigten Königreich oder in der Schweiz befinden, können Sie Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung oder Widerspruch gegen bestimmte Verarbeitungen haben; auf Datenübertragbarkeit; und auf Widerruf der Einwilligung, soweit die Verarbeitung darauf beruht, ohne die Rechtmäßigkeit der vorherigen Verarbeitung zu beeinträchtigen. Sie können bei Ihrer lokalen Aufsichtsbehörde Beschwerde einlegen.',
          `Zur Ausübung dieser Rechte schreiben Sie an ${EMAIL} mit dem Betreff „Privacy Request“. Wir müssen möglicherweise Ihre Identität überprüfen, bevor wir eine Anfrage bearbeiten.`,
        ],
      },
      {
        h: '13. Ihre Rechte — Vereinigte Staaten (einschließlich CCPA/CPRA)',
        paragraphs: [
          'Je nach Ihrem Wohnsitzstaat (einschließlich Kalifornien nach CCPA/CPRA) können Sie Rechte auf Kenntnis/Zugang, Löschung, Berichtigung und Widerspruch gegen Verkauf oder Weitergabe personenbezogener Daten sowie auf Einschränkung der Nutzung sensibler personenbezogener Daten haben, soweit anwendbar. Wir werden Sie nicht benachteiligen, wenn Sie Datenschutzrechte ausüben.',
          `Reichen Sie Anfragen ein an ${EMAIL} (Betreff: „Privacy Request“) oder per Post an ${ADDRESS}. Bevollmächtigte Vertreter können Anfragen stellen, soweit gesetzlich zulässig; wir können einen Nachweis der Bevollmächtigung und eine Identitätsprüfung verlangen.`,
          'Wenn wir eine „Do Not Sell or Share“-Steuerung oder vergleichbare Option anbieten (einschließlich Global Privacy Control, sofern wir dies respektieren), beschreiben wir diese in der Cookie-Richtlinie oder in den Produkteinstellungen.',
        ],
      },
      {
        h: '14. Hinweise zu Asien-Pazifik (überblick)',
        paragraphs: [
          `Wenn Sie sich in Rechtsordnungen wie Singapur (PDPA), Japan (APPI), Südkorea (PIPA) oder anderen Regionen in Asien-Pazifik mit Datenschutzgesetzen befinden, verarbeiten wir Informationen wie in dieser Erklärung beschrieben und gemäß anwendbaren lokalen Anforderungen, soweit diese auf ${ENTITY} als US-Anbieter von Online-Diensten anwendbar sind.`,
          `Sie können uns unter ${EMAIL} kontaktieren, um Zugang, Berichtigung oder Löschung gemäß anwendbarem Recht zu beantragen. Wo lokales Recht einen lokalen Vertreter oder zusätzliche Hinweise vorschreibt, aktualisieren wir diese Erklärung oder veröffentlichen regionsspezifische Hinweise.`,
        ],
      },
      {
        h: '15. Kinder',
        paragraphs: [
          'Die Dienste richten sich nicht an Kinder unter 16 Jahren (oder dem höheren in Ihrer Rechtsordnung vorgeschriebenen Alter). Wir erheben wissentlich keine personenbezogenen Daten von Kindern. Wenn Sie glauben, dass ein Kind uns Informationen übermittelt hat, kontaktieren Sie uns, und wir werden angemessene Schritte zu deren Löschung unternehmen.',
        ],
      },
      {
        h: '16. Marketing-Website',
        paragraphs: [
          'Unsere Marketing-Website ist überwiegend statisch und nutzt begrenzte Analysen und Cookies, wie in der Cookie-Richtlinie beschrieben. Wir verkaufen keine personenbezogenen Daten, die auf der Marketing-Website erhoben werden. Ausgehende Links (einschließlich zur App) werden, wo praktikabel, gekennzeichnet.',
        ],
      },
      {
        h: '17. Änderungen',
        paragraphs: [
          'Wir können diese Erklärung von Zeit zu Zeit aktualisieren. Das Datum „Zuletzt aktualisiert“ ändert sich, wenn wir Überarbeitungen veröffentlichen. Wesentliche Änderungen können auf der Website hervorgehoben oder per E-Mail mitgeteilt werden, wo angemessen. Die fortgesetzte Nutzung der Dienste nach einer Aktualisierung gilt als Annahme der überarbeiteten Erklärung, soweit gesetzlich zulässig.',
        ],
      },
      {
        h: '18. Kontakt',
        paragraphs: [
          `Datenschutz- und Datenschutzanfragen: ${EMAIL}`,
          `Post: ${ENTITY}, ${ADDRESS}`,
          `Web: ${WEB}`,
        ],
      },
    ],
  },
  termsPage: {
    badge: 'Nutzungsbedingungen',
    title: 'Nutzungsbedingungen',
    subtitle: 'Die Vereinbarung zwischen Ihnen und Nexow, Inc. zur Nutzung von nexow.ai und der Nexow-Anwendung.',
    meta: {
      title: 'Nutzungsbedingungen — Nexow',
      description:
        'Nutzungsbedingungen für die Websites und Anwendung von Nexow, Inc.: Konten, akzeptable Nutzung, geistiges Eigentum, Haftungsausschlüsse, Haftung und anwendbares Recht.',
    },
    updated: UPDATED,
    governingNote:
      'Die verbindliche Sprache dieser Nutzungsbedingungen ist Englisch (English). Übersetzungen dienen ausschließlich der Orientierung und ändern die englische Fassung nicht.',
    sections: [
      {
        h: '1. Vereinbarung',
        paragraphs: [
          `Diese Nutzungsbedingungen („Bedingungen“) bilden eine verbindliche Vereinbarung zwischen Ihnen und ${ENTITY} („Nexow“, „wir“ oder „unser“) und regeln den Zugang zu und die Nutzung von ${WEB}, ${APP} und zugehörigen Diensten (die „Dienste“).`,
          'Durch den Zugriff auf oder die Nutzung der Dienste, die Erstellung eines Kontos oder die Annahme dieser Bedingungen stimmen Sie diesen sowie unserer Datenschutzerklärung und Cookie-Richtlinie zu. Wenn Sie nicht einverstanden sind, nutzen Sie die Dienste nicht.',
          'Wenn Sie die Dienste im Namen einer Organisation nutzen, erklären Sie, dass Sie befugt sind, diese zu binden, und „Sie“ umfasst diese Organisation.',
        ],
      },
      {
        h: '2. Die Dienste',
        paragraphs: [
          'Nexow stellt Werkzeuge bereit, um Widgets und Workspaces zu beschreiben, zu generieren, zu konfigurieren, zu visualisieren und zu teilen, einschließlich Verbindungen zu Drittanbieter-Datenquellen und optionalen Kollaborations-, Community- oder Marketplace-Funktionen, sobald wir diese bereitstellen.',
          'Wir können Funktionen, Pläne oder die Dienste (ganz oder teilweise) mit angemessener Vorankündigung, soweit praktikabel, ändern, aussetzen oder einstellen. Vorschau- oder Beta-Funktionen können instabil sein und werden ohne Gewähr bereitgestellt.',
        ],
      },
      {
        h: '3. Berechtigung und Konten',
        paragraphs: [
          'Sie müssen mindestens das Alter der digitalen Einwilligung in Ihrer Rechtsordnung erreicht haben (und in jedem Fall mindestens 16 Jahre, oder 18, wo erforderlich), um die Dienste zu nutzen. Sie müssen korrekte Kontoinformationen angeben und Zugangsdaten vertraulich behandeln. Sie sind für Aktivitäten unter Ihrem Konto verantwortlich.',
          'Wir können Konten sperren oder kündigen, die gegen diese Bedingungen verstoßen, ein Sicherheitsrisiko darstellen oder über einen längeren Zeitraum inaktiv bleiben.',
        ],
      },
      {
        h: '4. Pläne, Credits und Zahlung',
        paragraphs: [
          'Einige Funktionen erfordern einen kostenpflichtigen Plan, Credits oder andere Nutzungslimits. Preise, enthaltene Kontingente und Abrechnungszeiträume sind auf der Pläne-Seite oder im Produkt beschrieben. Sofern nicht anders angegeben, sind Gebühren nicht erstattungsfähig, außer wo gesetzlich vorgeschrieben.',
          'Sie ermächtigen uns und unsere Zahlungsdienstleister, anfallende Gebühren zu berechnen. Steuern können anfallen. Wir können Preise mit Vorankündigung ändern; Änderungen gelten bei der nächsten Verlängerung, sofern nicht anders angegeben.',
        ],
      },
      {
        h: '5. Ihre Inhalte und Lizenz',
        paragraphs: [
          'Sie behalten das Eigentum an Inhalten, die Sie in den Diensten einreichen oder erstellen („Nutzerinhalte“), einschließlich Prompts, Widgets und Konfigurationen, vorbehaltlich der Rechte Dritter und von Nexow an unserer Plattform, Vorlagen und generiertem Gerüst, das nicht ausschließlich auf Ihren Eingaben basiert.',
          `Sie gewähren ${ENTITY} eine weltweite, nicht ausschließliche Lizenz, Nutzerinhalte ausschließlich in dem Umfang zu hosten, zu verarbeiten, zu übertragen, anzuzeigen und abgeleitete Werke zu erstellen, der zur Betriebs-, Sicherungs- und Verbesserung der Dienste erforderlich ist und wie von Ihnen angegeben (z. B. Teilen oder Veröffentlichen).`,
          'Sie erklären, dass Sie alle erforderlichen Rechte haben, Nutzerinhalte einzureichen und Drittanbieterdienste zu verbinden, und dass Nutzerinhalte weder Gesetze noch Rechte Dritter verletzen.',
        ],
      },
      {
        h: '6. Akzeptable Nutzung',
        paragraphs: [
          'Sie müssen unsere Richtlinie zur akzeptablen Nutzung und alle anwendbaren Gesetze einhalten. Sie dürfen die Dienste nicht missbrauchen, andere stören, unbefugten Zugriff versuchen, missbräuchlich scrapen oder die Dienste für rechtswidrigen Handel, Betrug, Malware oder Rechtsverletzungen nutzen.',
          'Nexow ist eine Werkzeug- und Visualisierungsplattform. Nichts in den Diensten stellt Finanz-, Anlage-, Rechts- oder Steuerberatung dar. Marktdaten und Beispiele können illustrativ sein; Sie allein sind für Ihre Entscheidungen verantwortlich.',
        ],
      },
      {
        h: '7. Drittanbieterdienste',
        paragraphs: [
          'Connectors und Integrationen sind optional und unterliegen den Bedingungen Dritter. Wir sind nicht verantwortlich für Verfügbarkeit, Genauigkeit, Gebühren oder Datenpraktiken Dritter. Von Ihnen bereitgestellte Anmeldedaten werden wie in der Datenschutzerklärung beschrieben verwendet.',
        ],
      },
      {
        h: '8. Geistiges Eigentum',
        paragraphs: [
          `Die Dienste, einschließlich Software, Marken, Dokumentation und Inhalte, die keine Nutzerinhalte sind, sind Eigentum von ${ENTITY} oder seinen Lizenzgebern und durch Gesetze zum geistigen Eigentum geschützt. Abgesehen vom beschränkten Recht, die Dienste gemäß diesen Bedingungen zu nutzen, werden keine Rechte eingeräumt.`,
          'Feedback, das Sie uns geben, können wir ohne Verpflichtung Ihnen gegenüber verwenden.',
        ],
      },
      {
        h: '9. Vertraulichkeit und Sicherheit',
        paragraphs: [
          'Sie dürfen nicht versuchen, Sicherheitskontrollen zu sondieren, zu umgehen oder zu stören. Melden Sie vermutete Schwachstellen verantwortungsvoll. Wir setzen angemessene Sicherheitsmaßnahmen um, können aber keine absolute Sicherheit garantieren.',
        ],
      },
      {
        h: '10. Haftungsausschluss',
        paragraphs: [
          'DIE DIENSTE WERDEN „WIE BESEHEN“ UND „WIE VERFÜGBAR“ BEREITGESTELLT. IM GRÖSSTMÖGLICHEN GESETZLICH ZULÄSSIGEN UMFANG SCHLIESSEN WIR ALLE GEWÄHRLEISTUNGEN AUS, AUSDRÜCKLICHE ODER STILLSCHWEIGENDE, EINSCHLIESSLICH MARKTGÄNGIGKEIT, EIGNUNG FÜR EINEN BESTIMMTEN ZWECK UND NICHTVERLETZUNG. WIR GEWÄHRLEISTEN NICHT, DASS DIE DIENSTE UNUNTERBROCHEN, FEHLERFREI ODER FREI VON SCHÄDLICHEN KOMPONENTEN SIND ODER DASS ERGEBNISSE (EINSCHLIESSLICH KI-GENERIERTER INHALTE) GENAU, VOLLSTÄNDIG ODER FÜR IHREN ZWECK GEEIGNET SIND.',
        ],
      },
      {
        h: '11. Haftungsbeschränkung',
        paragraphs: [
          `IM GRÖSSTMÖGLICHEN GESETZLICH ZULÄSSIGEN UMFANG HAFTEN ${ENTITY.toUpperCase()} UND SEINE GESCHÄFTSFÜHRER, VORSTÄNDE, MITARBEITER UND BEAUFTRAGTEN NICHT FÜR INDIREKTE, ZUFÄLLIGE, BESONDERE, FOLGE-, EXEMPLARISCHE ODER STRAFSCHÄDEN ODER FÜR ENTGANGENEN GEWINN, UMSATZVERLUST, DATEN- ODER GOODWILL-VERLUST, DIE AUS ODER IM ZUSAMMENHANG MIT DEN DIENSTEN ODER DIESEN BEDINGUNGEN ENTSTEHEN, SEI ES AUS VERTRAG, UNERLAUBTER HANDLUNG ODER ANDERWEITIG, AUCH BEI KENNTNIS DER MÖGLICHKEIT.`,
          'UNSERE GESAMTHAFTUNG FÜR ALLE ANSPRÜCHE IM ZUSAMMENHANG MIT DEN DIENSTEN ODER DIESEN BEDINGUNGEN ÜBERSTEIGT NICHT DEN HÖHEREN BETRAG AUS (A) DEN VON IHNEN FÜR DIE DIENSTE IN DEN ZWÖLF (12) MONATEN VOR DEM ANSPRUCH GEZAHLTEN BETRÄGEN ODER (B) EINHUNDERT US-DOLLAR (100 USD). EINIGE RECHTSORDNUNGEN ERLAUBEN BESTIMMTE BESCHRÄNKUNGEN NICHT; IN DIESEM FALL IST UNSERE HAFTUNG AUF DAS GESETZLICH ZULÄSSIGE MAXIMUM BESCHRÄNKT.',
        ],
      },
      {
        h: '12. Freistellung',
        paragraphs: [
          `Sie werden ${ENTITY} gegen Ansprüche, Schäden und Aufwendungen (einschließlich angemessener Anwaltskosten) verteidigen und freistellen, die aus Ihren Nutzerinhalten, Ihrer Nutzung der Dienste, Ihren Verbindungen zu Dritten oder Ihrem Verstoß gegen diese Bedingungen oder Gesetze entstehen.`,
        ],
      },
      {
        h: '13. Beendigung',
        paragraphs: [
          'Sie können die Nutzung der Dienste jederzeit einstellen und die Kontoschließung über das Produkt oder durch Kontaktaufnahme mit uns beantragen. Wir können den Zugang bei Verstoß, Risiko oder aus rechtlichen Gründen sperren oder beenden. Bestimmungen, die ihrer Natur nach fortbestehen sollen (einschließlich geistiges Eigentum, Haftungsausschlüsse, Beschränkungen, Freistellung und anwendbares Recht), überdauern die Beendigung.',
        ],
      },
      {
        h: '14. Anwendbares Recht und Streitigkeiten',
        paragraphs: [
          `Diese Bedingungen unterliegen den Gesetzen des Staates Delaware, Vereinigte Staaten, unter Ausschluss kollisionsrechtlicher Regeln. Vorbehaltlich zwingender Verbraucherschutzvorschriften in Ihrem Wohnsitzland haben Gerichte in Delaware (oder Bundesgerichte mit dortiger Zuständigkeit) ausschließliche Zuständigkeit für Streitigkeiten, außer dass wir in jeder Rechtsordnung einstweiligen Rechtsschutz beantragen können.`,
          'Wenn Sie Verbraucher im EWR/UK sind, können Sie auch von zwingenden lokalen Schutzvorschriften profitieren und, wo gesetzlich vorgeschrieben, in Ihrem Wohnsitz Klage erheben.',
        ],
      },
      {
        h: '15. Änderungen',
        paragraphs: [
          'Wir können diese Bedingungen aktualisieren, indem wir eine überarbeitete Fassung mit aktualisiertem Datum veröffentlichen. Wesentliche Änderungen können im Produkt oder per E-Mail mitgeteilt werden. Die fortgesetzte Nutzung nach dem Wirksamkeitsdatum gilt als Annahme, außer wo anwendbares Recht etwas anderes vorschreibt.',
        ],
      },
      {
        h: '16. Kontakt',
        paragraphs: [
          `Rechtliche Mitteilungen: ${EMAIL}`,
          `${ENTITY}, ${ADDRESS}`,
          `Web: ${WEB}`,
        ],
      },
    ],
  },
  cookiesPage: {
    badge: 'Cookies',
    title: 'Cookie-Richtlinie',
    subtitle:
      'Wie Nexow, Inc. Cookies und ähnliche Technologien auf nexow.ai und in der Nexow-Anwendung verwendet.',
    meta: {
      title: 'Cookie-Richtlinie — Nexow',
      description:
        'Cookie-Richtlinie von Nexow, Inc.: Cookie-Arten, Zwecke, Einwilligung und Verwaltung der Einstellungen.',
    },
    updated: UPDATED,
    governingNote:
      'Die verbindliche Sprache dieser Cookie-Richtlinie ist Englisch (English). Übersetzungen dienen ausschließlich der Orientierung und ändern die englische Fassung nicht.',
    sections: [
      {
        h: '1. Einleitung',
        paragraphs: [
          `${ENTITY} („Nexow“, „wir“) verwendet Cookies und ähnliche Technologien (lokaler Speicher, Pixel, SDKs) auf ${WEB} und in den zugehörigen Diensten. Diese Cookie-Richtlinie erläutert, was wir verwenden, warum und wie Sie diese steuern können. Sie ist zusammen mit unserer Datenschutzerklärung zu lesen.`,
          `Kontakt: ${EMAIL} · ${ADDRESS}`,
        ],
      },
      {
        h: '2. Was sind Cookies?',
        paragraphs: [
          'Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden. Ähnliche Technologien speichern oder lesen Informationen auf vergleichbare Weise. Sie können „Sitzungs“-Cookies sein (beim Schließen des Browsers gelöscht) oder „persistent“ (bis zum Ablauf oder zur Löschung aufbewahrt) sowie „Erstanbieter“-Cookies (von uns gesetzt) oder „Drittanbieter“-Cookies (von einer anderen Domain gesetzt).',
        ],
      },
      {
        h: '3. Wie wir Cookies verwenden',
        paragraphs: [
          'Unbedingt erforderlich: erforderlich für Sicherheit, Lastverteilung, Authentifizierung, Speicherung der Einwilligung und Kernfunktionalität. Diese erfordern keine Einwilligung, soweit anwendbares Recht eine Ausnahme vorsieht.',
          'Präferenzen / funktional: merken sich Sprache, UI-Einstellungen oder ähnliche Auswahlen.',
          'Analysen / Leistung: helfen uns, Traffic zu verstehen und Website oder App zu verbessern (z. B. aggregierte Seitenaufrufe). Wo erforderlich (einschließlich EU/UK), holen wir vor nicht wesentlichen Analyse-Cookies eine Einwilligung ein.',
          'Marketing / Werbung: wir stützen uns derzeit nicht auf Werbe-Cookies Dritter auf der Marketing-Website. Sollte sich dies ändern, aktualisieren wir diese Richtlinie und holen die Einwilligung ein, wo erforderlich.',
        ],
      },
      {
        h: '4. Lokaler Speicher und App-Status',
        paragraphs: [
          'Die Nexow-Anwendung kann Browserspeicher (z. B. localStorage, IndexedDB) nutzen, um Workspace-Daten, Einstellungen oder Sitzungsstatus zu speichern. Dieser Speicher ist erforderlich, um die von Ihnen genutzten Produktfunktionen zu betreiben, und wird in der Datenschutzerklärung weiter beschrieben.',
        ],
      },
      {
        h: '5. Einwilligung (Europa und ähnliche Regelungen)',
        paragraphs: [
          'Wo die ePrivacy-Richtlinie / DSGVO (oder das britische Äquivalent) eine Einwilligung für nicht wesentliche Cookies verlangen, holen wir diese vor dem Setzen ein und respektieren Widerrufe. Unbedingt erforderliche Cookies können unabhängig von Einwilligungsbannern gesetzt werden.',
          'Sie können Browsereinstellungen ändern, um Cookies zu blockieren oder zu löschen; einige Funktionen funktionieren möglicherweise nicht korrekt, wenn wesentliche Cookies blockiert sind.',
        ],
      },
      {
        h: '6. Vereinigte Staaten und andere Regionen',
        paragraphs: [
          'In den USA unterstützen Cookie-Offenlegungen die Transparenz nach Landes-Datenschutzgesetzen (einschließlich CCPA/CPRA-Konzepte von „Verkauf“/„Weitergabe“, wenn Werbe-Cookies verwendet werden). Nutzer in Asien-Pazifik können ähnliche Transparenz- und Wahlmöglichkeiten nach lokalen Gesetzen haben (z. B. PDPA, APPI); kontaktieren Sie uns zur Ausübung anwendbarer Rechte.',
        ],
      },
      {
        h: '7. Cookies verwalten',
        paragraphs: [
          'Browser-Steuerung: nutzen Sie die Hilfeseiten Ihres Browsers, um Cookies abzulehnen oder zu löschen.',
          'Produkt- / Website-Steuerung: wo wir ein Cookie-Einstellungstool anbieten, nutzen Sie es, um nicht wesentliche Kategorien anzupassen.',
          `Fragen: ${EMAIL}`,
        ],
      },
      {
        h: '8. Änderungen',
        paragraphs: [
          'Wir können diese Cookie-Richtlinie aktualisieren, wenn sich unsere Praktiken ändern. Prüfen Sie das Datum „Zuletzt aktualisiert“. Wesentliche Änderungen werden auf dieser Seite widergespiegelt und, wo erforderlich, durch erneute Einwilligung.',
        ],
      },
    ],
  },
  legalPage: {
    badge: 'Legal',
    title: 'Rechtliche und Unternehmensinformationen',
    subtitle: 'Offizielle Unternehmensdaten und öffentliche Rechtsdokumente von Nexow, Inc.',
    meta: {
      title: 'Legal — Nexow, Inc.',
      description:
        'Rechtliche und Unternehmensinformationen von Nexow, Inc., einschließlich registrierter Adresse und Links zu Datenschutz-, Nutzungs-, Cookie- und Acceptable-Use-Richtlinien.',
    },
    updated: UPDATED,
    governingNote:
      'Unternehmensinformationen und Rechtsdokumente werden in Englisch (English) als verbindliche Sprache bereitgestellt, sofern gesetzlich keine verbindliche lokale Fassung erforderlich ist.',
    sections: [
      {
        h: '1. Unternehmensdaten',
        paragraphs: [
          `Rechtsträger: ${ENTITY}`,
          `Eingetragene / Postanschrift: ${ADDRESS}`,
          `Website: ${WEB}`,
          `Anwendung: ${APP}`,
          `Allgemeiner Kontakt: ${EMAIL}`,
        ],
      },
      {
        h: '2. Öffentliche Rechtsdokumente',
        paragraphs: [
          'Die folgenden Dokumente bilden unsere öffentlichen Rechtsverträge für Website und Anwendung:',
          '• Datenschutzerklärung — wie wir personenbezogene Daten verarbeiten (DSGVO-/CCPA-bewusst, mit Hinweisen zu Asien-Pazifik).',
          '• Nutzungsbedingungen — Bedingungen für die Nutzung der Dienste.',
          '• Cookie-Richtlinie — Cookies und ähnliche Technologien.',
          '• Richtlinie zur akzeptablen Nutzung — verbotenes und erforderliches Verhalten.',
          'Links finden Sie in der Fußzeile der Website sowie unter /privacy, /terms, /cookies und /acceptable-use.',
        ],
      },
      {
        h: '3. Imprint-ähnlicher Hinweis',
        paragraphs: [
          `Für Nutzer, die einen „Rechtlichen Hinweis“, „Impressum“ oder Unternehmensidentifikationsdaten suchen: Die Dienste werden von ${ENTITY} betrieben, mit Sitz in ${ADDRESS}. Online-Kontakt: ${EMAIL}. Diese Seite soll gängige Transparenzanforderungen in den Vereinigten Staaten, Europa und anderen Regionen zur Identifizierung des Dienstanbieters erfüllen.`,
        ],
      },
      {
        h: '4. Datenverarbeitung',
        paragraphs: [
          'Nexow verarbeitet personenbezogene Daten wie in der Datenschutzerklärung beschrieben. Kunden, die einen Data Processing Addendum (DPA) oder vergleichbare vertragliche Bedingungen für DSGVO Artikel 28 (oder gleichwertig) benötigen, können dies per E-Mail mit dem Betreff „DPA Request“ anfordern. Standard-Unterauftragsverarbeiter und Übermittlungsschutzmaßnahmen sind in der Datenschutzerklärung beschrieben oder auf Anfrage verfügbar.',
        ],
      },
      {
        h: '5. Haftungsausschlüsse',
        paragraphs: [
          'Nexow ist eine Werkzeug- und Visualisierungsplattform. Inhalte auf der Marketing-Website und in der App (einschließlich Marktdaten-Beispiele) stellen keine Finanz-, Anlage-, Rechts- oder Steuerberatung dar. Sie allein sind für die Einhaltung der auf Ihre Nutzung verbundener Venues und Daten anwendbaren Gesetze verantwortlich.',
        ],
      },
      {
        h: '6. Verbindliche Sprache',
        paragraphs: [
          'Englisch (English) ist die verbindliche Sprache unserer Rechtsdokumente. UI oder Zusammenfassungen in anderen Sprachen dienen ausschließlich der Orientierung und ändern die englischen Bedingungen nicht, es sei denn, wir veröffentlichen ausdrücklich eine verbindliche lokale Fassung.',
        ],
      },
      {
        h: '7. Kontakt für rechtliche Angelegenheiten',
        paragraphs: [
          `E-Mail: ${EMAIL} (Betreff: „Legal“)`,
          `Post: ${ENTITY}, ${ADDRESS}`,
        ],
      },
    ],
  },
  acceptableUsePage: {
    badge: 'Akzeptable Nutzung',
    title: 'Richtlinie zur akzeptablen Nutzung',
    subtitle: 'Regeln für die verantwortungsvolle und rechtmäßige Nutzung der Nexow-Websites und der Nexow-Anwendung.',
    meta: {
      title: 'Richtlinie zur akzeptablen Nutzung — Nexow',
      description:
        'Richtlinie zur akzeptablen Nutzung von Nexow, Inc.: verbotene Aktivitäten, Sicherheitsregeln und Durchsetzung.',
    },
    updated: UPDATED,
    governingNote:
      'Die verbindliche Sprache dieser Richtlinie zur akzeptablen Nutzung ist Englisch (English). Übersetzungen dienen ausschließlich der Orientierung.',
    sections: [
      {
        h: '1. Zweck',
        paragraphs: [
          `Diese Richtlinie zur akzeptablen Nutzung („AUP“) gilt für Ihre Nutzung der von ${ENTITY} betriebenen Dienste. Sie ergänzt die Nutzungsbedingungen. Verstöße können zur Sperrung oder Kündigung führen.`,
        ],
      },
      {
        h: '2. Verbotene Aktivitäten',
        paragraphs: [
          'Sie dürfen die Dienste nicht nutzen, um: Gesetze oder Rechte Dritter zu verletzen; Malware, Spam oder Phishing zu verbreiten; unbefugten Zugriff auf Systeme, Konten oder Daten zu versuchen; die Dienste zu stören oder zu beeinträchtigen; Daten in einer Weise zu scrapen oder zu sammeln, die die Infrastruktur belastet oder die Bedingungen Dritter verletzt; Nutzungslimits oder Sicherheitskontrollen zu umgehen; Ihre Identität oder Zugehörigkeit falsch darzustellen; oder rechtswidrige, rechtsverletzende oder hochsensible regulierte Daten ohne Genehmigung hochzuladen.',
          'Sie dürfen die Dienste nicht nutzen, um Betrug, Marktmanipulation, Sanktionsumgehung oder rechtswidrige Handelsaktivitäten zu erleichtern. Sie dürfen keine Widgets generieren oder bereitstellen, deren Hauptzweck Missbrauch, Täuschung oder Schaden ist.',
        ],
      },
      {
        h: '3. Anmeldedaten und Connectors',
        paragraphs: [
          'Verwenden Sie nur Anmeldedaten, deren Nutzung Sie berechtigt sind. Teilen Sie Kontozugang nicht unsicher. Konfigurieren Sie Connectors mit minimalen Berechtigungen. Versuchen Sie nicht, Geheimnisse anderer Nutzer zu extrahieren.',
        ],
      },
      {
        h: '4. KI und generierte Ergebnisse',
        paragraphs: [
          'Nutzen Sie Generierungsfunktionen nicht, um Inhalte zu erstellen, die rechtswidrig sind, geistiges Eigentum verletzen oder dazu bestimmt sind, andere in großem Umfang zu täuschen (z. B. koordiniertes unauthentisches Verhalten). Sie sind dafür verantwortlich, Ergebnisse zu prüfen, bevor Sie sich darauf verlassen.',
        ],
      },
      {
        h: '5. Angemessene Ressourcennutzung',
        paragraphs: [
          'Pläne und Credits haben Nutzungslimits. Automatisierter oder missbräuchlicher Verbrauch, der den Dienst für andere verschlechtert, kann gedrosselt oder blockiert werden.',
        ],
      },
      {
        h: '6. Meldungen und Durchsetzung',
        paragraphs: [
          `Melden Sie Missbrauch an ${EMAIL} mit dem Betreff „Abuse“. Wir können Inhalte untersuchen und entfernen, Funktionen sperren oder Konten kündigen. Wir können rechtswidrige Aktivitäten gegebenenfalls den Behörden melden.`,
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
