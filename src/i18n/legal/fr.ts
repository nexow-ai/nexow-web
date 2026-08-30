import type { LegalBundle } from './types';
import { ADDRESS, APP, CONTACT_BLOCK, EMAIL, ENTITY, WEB } from './shared';

const UPDATED = 'Dernière mise à jour : 29 juillet 2026';

export const fr: LegalBundle = {
  privacyPage: {
    badge: 'Confidentialité',
    title: 'Politique de confidentialité',
    subtitle:
      'Comment Nexow, Inc. collecte, utilise et protège les informations personnelles lorsque vous utilisez nexow.ai et l’application Nexow.',
    meta: {
      title: 'Politique de confidentialité — Nexow',
      description:
        'Politique de confidentialité de Nexow, Inc. : données collectées, usages, cookies et vos droits au titre du RGPD, du CCPA/CPRA et des autres lois applicables.',
    },
    updated: UPDATED,
    governingNote:
      'La langue faisant foi de cette Politique de confidentialité est l’anglais (English). Les traductions sont fournies à titre de commodité uniquement et ne modifient pas la version anglaise.',
    sections: [
      {
        h: '1. Qui nous sommes',
        paragraphs: [
          `La présente Politique de confidentialité décrit la manière dont ${ENTITY} (« Nexow », « nous » ou « notre ») traite les informations personnelles dans le cadre de nos sites web (y compris ${WEB}), de l’application web Nexow (${APP}) et des services associés (ensemble, les « Services »).`,
          `Responsable / société : ${CONTACT_BLOCK}`,
          'Pour toute question relative à cette Politique ou pour exercer vos droits, contactez-nous à l’adresse ou à l’e-mail ci-dessus avec l’objet « Privacy Request ».',
        ],
      },
      {
        h: '2. Champ d’application',
        paragraphs: [
          'Cette Politique s’applique aux informations personnelles que nous traitons lorsque vous visitez notre site marketing, créez ou utilisez un compte Nexow, construisez ou partagez des espaces de travail et des widgets, connectez des services tiers, souscrivez ou gérez une offre, ou interagissez autrement avec les Services.',
          'Elle ne s’applique pas aux sites, applications, places de marché ou API tiers que vous choisissez de connecter ; ceux-ci sont régis par leurs propres conditions de confidentialité. Lorsqu’un connecteur s’exécute dans votre navigateur vers un tiers, ce tiers est généralement un responsable indépendant des données que vous lui transmettez.',
        ],
      },
      {
        h: '3. Informations que nous collectons',
        paragraphs: [
          'Données de compte et de profil : adresse e-mail, nom d’affichage, identifiants d’authentification, statut d’offre ou de facturation, préférences et paramètres de compte similaires.',
          'Données d’espace de travail et de produit : widgets, invites, code ou configurations générés, versions, journaux, éléments de bibliothèque, état de synchronisation, métadonnées de collaboration et contenus associés que vous créez ou importez dans les Services.',
          'Données de connexion : jetons, clés API ou identifiants OAuth que vous fournissez pour des connecteurs tiers (traités comme décrit dans « Connexions et identifiants »), ainsi que les métadonnées techniques nécessaires au maintien de ces connexions.',
          'Données d’usage et d’appareil : adresse IP, type de navigateur, informations sur l’appareil ou le système d’exploitation, localisation approximative dérivée de l’IP, référent, pages consultées, usage des fonctionnalités, événements de performance et de diagnostic, et télémétrie similaire nécessaire à l’exploitation et à la sécurité des Services.',
          'Communications : messages que vous nous envoyez (support, confidentialité ou demandes juridiques) et correspondance associée.',
          'Données de paiement : si vous souscrivez une offre payante, le moyen de paiement et les informations de facturation sont généralement traités par notre prestataire de paiement ; nous recevons des métadonnées de facturation limitées (p. ex. offre, statut, quatre derniers chiffres ou jetons équivalents) plutôt que le numéro complet de carte lorsque le prestataire le permet.',
          'Cookies et technologies similaires : voir notre Politique relative aux cookies.',
        ],
      },
      {
        h: '4. Comment nous utilisons les informations',
        paragraphs: [
          'Nous utilisons les informations personnelles pour : fournir, maintenir et améliorer les Services ; authentifier les utilisateurs et sécuriser les comptes ; stocker et synchroniser le contenu d’espace de travail que vous demandez ; traiter les transactions et envoyer des avis liés au service ; répondre aux demandes de support et de confidentialité ; surveiller la fiabilité, les abus et la sécurité ; respecter la loi ; et, lorsque cela est permis, communiquer des actualités produit (vous pouvez vous opposer au marketing non essentiel).',
          'Nous ne vendons pas d’informations personnelles au sens habituel de la « vente » au titre du CCPA/CPRA, et nous ne partageons pas d’informations personnelles à des fins de publicité comportementale inter-contextes au sens du droit californien, sauf mention contraire dans notre Politique relative aux cookies si nous introduisons des cookies publicitaires (auquel cas nous mettrons à jour cette Politique et fournirons les options d’opposition requises).',
        ],
      },
      {
        h: '5. Bases juridiques (EEE / Royaume-Uni / Suisse)',
        paragraphs: [
          'Lorsque le RGPD de l’UE, le UK GDPR ou la LPD suisse s’applique, nous traitons les données personnelles sur l’une ou plusieurs des bases suivantes : exécution d’un contrat (fourniture des Services demandés) ; intérêts légitimes (sécuriser et améliorer les Services, prévenir les abus, analyses de base), mis en balance avec vos droits ; consentement (lorsque requis, p. ex. certains cookies ou un marketing optionnel) ; et obligation légale (conservation de documents ou réponse à des demandes licites).',
        ],
      },
      {
        h: '6. Connexions et identifiants',
        paragraphs: [
          'Lorsqu’un service tiers le permet, Nexow peut se connecter directement depuis votre navigateur afin que les identifiants servent principalement à dialoguer avec ce service. Certains services nécessitent un proxy ou un composant côté serveur ; dans ces cas, nous ne traitons que ce qui est nécessaire pour exécuter la demande et faire fonctionner le connecteur.',
          'Vous êtes responsable de vous assurer que vous avez le droit de connecter chaque service et de configurer des identifiants au moindre privilège. Révoquez l’accès dans le service tiers et dans Nexow lorsque vous n’avez plus besoin d’une connexion.',
        ],
      },
      {
        h: '7. Contenus générés et fonctions d’IA',
        paragraphs: [
          'Lorsque vous utilisez des fonctions de génération ou assistées par l’IA, les invites et le contexte associé peuvent être traités par nous et/ou par des fournisseurs de modèles ou d’infrastructure auxquels nous recourons pour fournir la fonction. Nous utilisons ce traitement pour générer des résultats dans votre espace de travail et pour exploiter et améliorer les Services, sous réserve de nos contrats avec ces fournisseurs.',
          'N’envoyez pas de secrets, de données personnelles réglementées ni de données confidentielles de tiers dans les invites, sauf si vous disposez d’une base légale et acceptez le risque que ces contenus soient traités par des sous-traitants impliqués dans la génération.',
        ],
      },
      {
        h: '8. Partage et sous-traitants',
        paragraphs: [
          'Nous partageons des informations personnelles avec : des prestataires (hébergement, analytics, e-mail, paiements, surveillance d’erreurs, fournisseurs d’IA/modèles) dans le cadre de contrats limitant l’usage à la fourniture de services pour notre compte ; des conseils professionnels ; des autorités lorsque la loi l’exige ou pour protéger des droits et la sécurité ; et des successeurs en cas de fusion, d’acquisition ou de cession d’actifs (avec notification le cas échéant).',
          'Nous pouvons également partager des informations que vous choisissez de rendre publiques ou de partager avec d’autres utilisateurs (p. ex. widgets publiés, fonctions communautaires) selon vos paramètres.',
        ],
      },
      {
        h: '9. Transferts internationaux',
        paragraphs: [
          `${ENTITY} est établi aux États-Unis. Si vous accédez aux Services depuis l’EEE, le Royaume-Uni, la Suisse ou d’autres régions, vos informations peuvent être transférées et traitées aux États-Unis et dans d’autres pays dont les règles de protection des données peuvent différer.`,
          'Lorsque cela est requis, nous recourons à des garanties appropriées pour les transferts (telles que les clauses contractuelles types ou mécanismes successeurs) et prenons des mesures que nous estimons raisonnables pour protéger les informations personnelles.',
        ],
      },
      {
        h: '10. Conservation',
        paragraphs: [
          'Nous conservons les informations personnelles aussi longtemps que votre compte est actif ou que cela est nécessaire pour fournir les Services, respecter des obligations légales, résoudre des litiges et faire appliquer les accords. Le contenu de l’espace de travail persiste généralement jusqu’à ce que vous le supprimiez ou fermiez votre compte, sous réserve des sauvegardes et des durées de conservation légale. Vous pouvez demander la suppression comme indiqué ci-dessous ; des copies résiduelles peuvent subsister dans les sauvegardes pendant une durée limitée.',
        ],
      },
      {
        h: '11. Sécurité',
        paragraphs: [
          'Nous mettons en œuvre des mesures techniques et organisationnelles destinées à protéger les informations personnelles (contrôles d’accès, chiffrement en transit le cas échéant, moindre privilège). Aucune méthode de transmission ou de stockage n’est totalement sûre ; vous êtes responsable de la protection des identifiants de compte et des appareils.',
        ],
      },
      {
        h: '12. Vos droits — Europe et Royaume-Uni (RGPD)',
        paragraphs: [
          'Si vous vous trouvez dans l’EEE, au Royaume-Uni ou en Suisse, vous pouvez disposer de droits d’accès, de rectification, d’effacement, de limitation ou d’opposition à certains traitements ; de portabilité ; et de retrait du consentement lorsque le traitement est fondé sur celui-ci, sans affecter le traitement licite antérieur. Vous pouvez introduire une réclamation auprès de votre autorité de contrôle locale.',
          `Pour exercer ces droits, écrivez à ${EMAIL} avec l’objet « Privacy Request ». Nous pourrons devoir vérifier votre identité avant de donner suite.`,
        ],
      },
      {
        h: '13. Vos droits — États-Unis (y compris CCPA/CPRA)',
        paragraphs: [
          'Selon votre État de résidence (y compris la Californie au titre du CCPA/CPRA), vous pouvez disposer de droits de connaître/accéder, supprimer, corriger et vous opposer à la vente ou au partage d’informations personnelles, et de limiter l’usage d’informations personnelles sensibles le cas échéant. Nous ne vous discriminerons pas pour l’exercice de droits à la vie privée.',
          `Adresses des demandes : ${EMAIL} (objet : « Privacy Request ») ou par courrier à ${ADDRESS}. Les agents autorisés peuvent déposer des demandes dans les conditions prévues par la loi ; nous pouvons exiger une preuve d’autorisation et une vérification d’identité.`,
          'Si nous proposons un contrôle « Ne pas vendre ni partager » ou équivalent (y compris via Global Privacy Control lorsque nous l’honorons), nous le décrirons dans la Politique relative aux cookies ou dans les paramètres du produit.',
        ],
      },
      {
        h: '14. Notes Asie-Pacifique (niveau général)',
        paragraphs: [
          `Si vous vous trouvez dans des juridictions telles que Singapour (PDPA), le Japon (APPI), la Corée du Sud (PIPA) ou d’autres régions d’Asie-Pacifique disposant de lois sur les données personnelles, nous traitons les informations comme décrit dans cette Politique et conformément aux exigences locales applicables dans la mesure où elles s’appliquent à ${ENTITY} en tant que prestataire américain de Services en ligne.`,
          `Vous pouvez nous contacter à ${EMAIL} pour demander un accès, une rectification ou une suppression conformément au droit applicable. Lorsque le droit local exige un représentant local ou des mentions supplémentaires, nous mettrons à jour cette Politique ou publierons des mentions spécifiques par région.`,
        ],
      },
      {
        h: '15. Enfants',
        paragraphs: [
          'Les Services ne s’adressent pas aux enfants de moins de 16 ans (ou l’âge supérieur exigé dans votre juridiction). Nous ne collectons pas sciemment d’informations personnelles auprès d’enfants. Si vous pensez qu’un enfant nous a communiqué des informations, contactez-nous et nous prendrons les mesures appropriées pour les supprimer.',
        ],
      },
      {
        h: '16. Site marketing',
        paragraphs: [
          'Notre site marketing est principalement statique et utilise une analytique et des cookies limités, comme décrit dans la Politique relative aux cookies. Nous ne vendons pas les données personnelles collectées sur le site marketing. Les liens sortants (y compris vers l’application) sont identifiés lorsque c’est possible.',
        ],
      },
      {
        h: '17. Modifications',
        paragraphs: [
          'Nous pouvons mettre à jour cette Politique de temps à autre. La date de « Dernière mise à jour » changera lors de la publication de révisions. Les modifications importantes peuvent être mises en évidence sur le site ou notifiées par e-mail le cas échéant. L’usage continu des Services après une mise à jour vaut acceptation de la Politique révisée dans la mesure permise par la loi.',
        ],
      },
      {
        h: '18. Contact',
        paragraphs: [
          `Demandes relatives à la vie privée et à la protection des données : ${EMAIL}`,
          `Courrier : ${ENTITY}, ${ADDRESS}`,
          `Web : ${WEB}`,
        ],
      },
    ],
  },
  termsPage: {
    badge: 'Conditions',
    title: 'Conditions d’utilisation',
    subtitle: 'L’accord entre vous et Nexow, Inc. pour l’usage de nexow.ai et de l’application Nexow.',
    meta: {
      title: 'Conditions d’utilisation — Nexow',
      description:
        'Conditions d’utilisation des sites et de l’application de Nexow, Inc. : comptes, usage acceptable, PI, exclusions de garantie, responsabilité et droit applicable.',
    },
    updated: UPDATED,
    governingNote:
      'La langue faisant foi de ces Conditions d’utilisation est l’anglais (English). Les traductions sont fournies à titre de commodité uniquement et ne modifient pas la version anglaise.',
    sections: [
      {
        h: '1. Accord',
        paragraphs: [
          `Les présentes Conditions d’utilisation (« Conditions ») forment un accord contraignant entre vous et ${ENTITY} (« Nexow », « nous » ou « notre ») régissant l’accès à ${WEB}, ${APP} et aux services associés (les « Services ») et leur usage.`,
          'En accédant aux Services, en créant un compte ou en acceptant ces Conditions, vous les acceptez ainsi que notre Politique de confidentialité et notre Politique relative aux cookies. Si vous n’êtes pas d’accord, n’utilisez pas les Services.',
          'Si vous utilisez les Services pour le compte d’une organisation, vous déclarez avoir le pouvoir de l’engager, et « vous » inclut cette organisation.',
        ],
      },
      {
        h: '2. Les Services',
        paragraphs: [
          'Nexow fournit des outils pour décrire, générer, configurer, visualiser et partager des widgets et des espaces de travail, y compris des connexions à des sources de données tierces et des fonctions optionnelles de collaboration, de communauté ou de marketplace au fur et à mesure de leur disponibilité.',
          'Nous pouvons modifier, suspendre ou interrompre des fonctionnalités, des offres ou les Services (en tout ou partie) avec un préavis raisonnable lorsque c’est possible. Les fonctionnalités en avant-première ou en bêta peuvent être instables et sont fournies en l’état.',
        ],
      },
      {
        h: '3. Éligibilité et comptes',
        paragraphs: [
          'Vous devez avoir au moins l’âge du consentement numérique dans votre juridiction (et en tout état de cause au moins 16 ans, ou 18 ans lorsque cela est exigé) pour utiliser les Services. Vous devez fournir des informations de compte exactes et conserver vos identifiants confidentiels. Vous êtes responsable de l’activité réalisée sous votre compte.',
          'Nous pouvons suspendre ou résilier des comptes qui violent ces Conditions, présentent un risque de sécurité ou restent inactifs pendant une période prolongée.',
        ],
      },
      {
        h: '4. Offres, crédits et paiement',
        paragraphs: [
          'Certaines fonctionnalités exigent une offre payante, des crédits ou d’autres limites d’usage. Les prix, quotas inclus et périodes de facturation sont décrits sur la page des offres ou dans le produit. Sauf mention contraire, les frais ne sont pas remboursables sauf lorsque la loi l’exige.',
          'Vous nous autorisez, ainsi que nos prestataires de paiement, à encaisser les frais applicables. Des taxes peuvent s’appliquer. Nous pouvons modifier les prix avec préavis ; les changements prennent effet à la prochaine échéance sauf indication contraire.',
        ],
      },
      {
        h: '5. Votre contenu et licence',
        paragraphs: [
          'Vous conservez la propriété du contenu que vous soumettez ou créez dans les Services (« Contenu utilisateur »), y compris invites, widgets et configurations, sous réserve des droits de tiers et de Nexow sur notre plateforme, nos modèles et l’échafaudage généré qui n’est pas propre à vos entrées.',
          `Vous accordez à ${ENTITY} une licence mondiale et non exclusive pour héberger, traiter, transmettre, afficher et créer des œuvres dérivées du Contenu utilisateur uniquement dans la mesure nécessaire pour exploiter, sécuriser et améliorer les Services et selon vos instructions (p. ex. partage ou publication).`,
          'Vous déclarez disposer de tous les droits nécessaires pour soumettre le Contenu utilisateur et connecter tout service tiers, et que le Contenu utilisateur ne viole ni la loi ni des droits de tiers.',
        ],
      },
      {
        h: '6. Usage acceptable',
        paragraphs: [
          'Vous devez respecter notre Politique d’usage acceptable et toutes les lois applicables. Vous ne pouvez pas détourner les Services, perturber autrui, tenter un accès non autorisé, extraire des données de manière abusive, ni utiliser les Services pour un trading illicite, une fraude, des malwares ou des atteintes aux droits.',
          'Nexow est une plateforme d’outils et de visualisation. Rien dans les Services ne constitue un conseil financier, d’investissement, juridique ou fiscal. Les données de marché et les exemples peuvent être illustratifs ; vous êtes seul responsable des décisions que vous prenez.',
        ],
      },
      {
        h: '7. Services tiers',
        paragraphs: [
          'Les connecteurs et intégrations sont optionnels et soumis aux conditions des tiers. Nous ne sommes pas responsables de la disponibilité, de l’exactitude, des frais ou des pratiques de données des tiers. Les identifiants que vous fournissez sont utilisés comme décrit dans la Politique de confidentialité.',
        ],
      },
      {
        h: '8. Propriété intellectuelle',
        paragraphs: [
          `Les Services, y compris les logiciels, la marque, la documentation et les contenus autres que le Contenu utilisateur, appartiennent à ${ENTITY} ou à ses concédants et sont protégés par les lois sur la propriété intellectuelle. Hormis le droit limité d’utiliser les Services au titre des présentes Conditions, aucun droit n’est concédé.`,
          'Les retours que vous nous fournissez peuvent être utilisés sans obligation à votre égard.',
        ],
      },
      {
        h: '9. Confidentialité et sécurité',
        paragraphs: [
          'Vous ne devez pas tenter de sonder, contourner ou perturber les contrôles de sécurité. Signalez-nous de manière responsable toute vulnérabilité suspectée. Nous mettons en œuvre des mesures de sécurité raisonnables, sans pouvoir garantir une sécurité absolue.',
        ],
      },
      {
        h: '10. Exclusions de garantie',
        paragraphs: [
          'LES SERVICES SONT FOURNIS « EN L’ÉTAT » ET « SELON DISPONIBILITÉ ». DANS LA MESURE MAXIMALE PERMISE PAR LA LOI, NOUS EXCLUONS TOUTE GARANTIE, EXPRESSE OU IMPLICITE, Y COMPRIS DE QUALITÉ MARCHANDE, D’ADÉQUATION À UN USAGE PARTICULIER ET DE NON-CONTREFAÇON. NOUS NE GARANTISSONS PAS QUE LES SERVICES SERONT ININTERROMPUS, EXEMPTS D’ERREURS OU DE COMPOSANTS NUISIBLES, NI QUE LES RÉSULTATS (Y COMPRIS LES CONTENUS GÉNÉRÉS PAR L’IA) SERONT EXACTS, COMPLETS OU ADAPTÉS À VOTRE USAGE.',
        ],
      },
      {
        h: '11. Limitation de responsabilité',
        paragraphs: [
          `DANS LA MESURE MAXIMALE PERMISE PAR LA LOI, ${ENTITY.toUpperCase()} AINSI QUE SES ADMINISTRATEURS, DIRIGEANTS, SALARIÉS ET MANDATAIRES NE SERONT PAS RESPONSABLES DES DOMMAGES INDIRECTS, ACCESSOIRES, SPÉCIAUX, CONSÉCUTIFS, EXEMPLAIRES OU PUNITIFS, NI DES PERTES DE BÉNÉFICES, DE CHIFFRE D’AFFAIRES, DE DONNÉES OU DE FONDS DE COMMERCE, DÉCOULANT DES SERVICES OU DES PRÉSENTES CONDITIONS OU S’Y RAPPORTANT, QUE CE SOIT SUR LE FONDEMENT CONTRACTUEL, DÉLICTUEL OU AUTRE, MÊME S’ILS ONT ÉTÉ AVERTIS DE LA POSSIBILITÉ DE TELS DOMMAGES.`,
          'NOTRE RESPONSABILITÉ GLOBALE POUR L’ENSEMBLE DES RÉCLAMATIONS RELATIVES AUX SERVICES OU AUX PRÉSENTES CONDITIONS N’EXCÉDERA PAS LE PLUS ÉLEVÉ DE (A) LES MONTANTS QUE VOUS NOUS AVEZ VERSÉS POUR LES SERVICES AU COURS DES DOUZE (12) MOIS PRÉCÉDANT LA RÉCLAMATION OU (B) CENT DOLLARS AMÉRICAINS (100 USD). CERTAINES JURIDICTIONS N’AUTORISENT PAS CERTAINES LIMITATIONS ; DANS CES CAS, NOTRE RESPONSABILITÉ EST LIMITÉE AU MAXIMUM AUTORISÉ.',
        ],
      },
      {
        h: '12. Indemnisation',
        paragraphs: [
          `Vous défendrez et indemniserez ${ENTITY} contre les réclamations, dommages et frais (y compris les honoraires d’avocat raisonnables) résultant de votre Contenu utilisateur, de votre usage des Services, de vos connexions à des tiers ou de votre violation des présentes Conditions ou de la loi.`,
        ],
      },
      {
        h: '13. Résiliation',
        paragraphs: [
          'Vous pouvez cesser d’utiliser les Services à tout moment et demander la clôture du compte via le produit ou en nous contactant. Nous pouvons suspendre ou résilier l’accès en cas de manquement, de risque ou pour des motifs légaux. Les dispositions qui, par nature, doivent survivre (y compris PI, exclusions, limitations, indemnisation et droit applicable) survivent à la résiliation.',
        ],
      },
      {
        h: '14. Droit applicable et litiges',
        paragraphs: [
          `Les présentes Conditions sont régies par les lois de l’État du Delaware, États-Unis, à l’exclusion des règles de conflit de lois. Sous réserve des protections impératives des consommateurs dans votre pays de résidence, les tribunaux situés au Delaware (ou les tribunaux fédéraux y ayant compétence) auront compétence exclusive, étant entendu que nous pouvons demander des mesures provisoires dans toute juridiction.`,
          'Si vous êtes consommateur dans l’EEE/au Royaume-Uni, vous pouvez également bénéficier de protections locales impératives et, lorsque la loi l’exige, ester devant les juridictions de votre lieu de résidence.',
        ],
      },
      {
        h: '15. Modifications',
        paragraphs: [
          'Nous pouvons mettre à jour ces Conditions en publiant une version révisée portant une date actualisée. Les modifications importantes peuvent être notifiées dans le produit ou par e-mail. L’usage continu après la date d’effet vaut acceptation, sauf exigence contraire du droit applicable.',
        ],
      },
      {
        h: '16. Contact',
        paragraphs: [
          `Notifications juridiques : ${EMAIL}`,
          `${ENTITY}, ${ADDRESS}`,
          `Web : ${WEB}`,
        ],
      },
    ],
  },
  cookiesPage: {
    badge: 'Cookies',
    title: 'Politique relative aux cookies',
    subtitle:
      'Comment Nexow, Inc. utilise les cookies et technologies similaires sur nexow.ai et dans l’application Nexow.',
    meta: {
      title: 'Politique relative aux cookies — Nexow',
      description:
        'Politique relative aux cookies de Nexow, Inc. : types de cookies, finalités, consentement et gestion des préférences.',
    },
    updated: UPDATED,
    governingNote:
      'La langue faisant foi de cette Politique relative aux cookies est l’anglais (English). Les traductions sont fournies à titre de commodité uniquement et ne modifient pas la version anglaise.',
    sections: [
      {
        h: '1. Introduction',
        paragraphs: [
          `${ENTITY} (« Nexow », « nous ») utilise des cookies et technologies similaires (stockage local, pixels, SDK) sur ${WEB} et les Services associés. Cette Politique explique ce que nous utilisons, pourquoi, et comment vous pouvez les contrôler. Elle se lit avec notre Politique de confidentialité.`,
          `Contact : ${EMAIL} · ${ADDRESS}`,
        ],
      },
      {
        h: '2. Qu’est-ce qu’un cookie ?',
        paragraphs: [
          'Les cookies sont de petits fichiers texte stockés sur votre appareil. Des technologies similaires stockent ou lisent des informations de manière comparable. Ils peuvent être de « session » (supprimés à la fermeture du navigateur) ou « persistants » (conservés jusqu’à expiration ou suppression), et « first-party » (déposés par nous) ou « third-party » (déposés par un autre domaine).',
        ],
      },
      {
        h: '3. Comment nous utilisons les cookies',
        paragraphs: [
          'Strictement nécessaires : requis pour la sécurité, la répartition de charge, l’authentification, le stockage du consentement et les fonctions essentielles. Ils ne requièrent pas de consentement lorsque le droit applicable prévoit une exemption.',
          'Préférences / fonctionnels : mémorisent la langue, les réglages d’interface ou des choix similaires.',
          'Analytique / performance : nous aident à comprendre le trafic et à améliorer le site ou l’application (p. ex. vues de pages agrégées). Lorsque cela est requis (y compris dans l’UE/au Royaume-Uni), nous demandons le consentement avant les cookies analytiques non essentiels.',
          'Marketing / publicité : nous ne nous appuyons pas actuellement sur des cookies publicitaires tiers sur le site marketing. Si cela change, nous mettrons à jour cette Politique et recueillerons le consentement lorsque cela est requis.',
        ],
      },
      {
        h: '4. Stockage local et état de l’application',
        paragraphs: [
          'L’application Nexow peut utiliser le stockage du navigateur (p. ex. localStorage, IndexedDB) pour conserver des données d’espace de travail, des préférences ou un état de session. Ce stockage est nécessaire pour faire fonctionner les fonctionnalités que vous utilisez et est décrit plus en détail dans la Politique de confidentialité.',
        ],
      },
      {
        h: '5. Consentement (Europe et régimes similaires)',
        paragraphs: [
          'Lorsque la directive ePrivacy / le RGPD (ou l’équivalent britannique) exigent un consentement pour les cookies non essentiels, nous le demanderons avant de les déposer et respecterons les retraits. Les cookies strictement nécessaires peuvent être déposés indépendamment des bandeaux de consentement.',
          'Vous pouvez modifier les paramètres du navigateur pour bloquer ou supprimer les cookies ; certaines fonctions peuvent ne pas fonctionner correctement si les cookies essentiels sont bloqués.',
        ],
      },
      {
        h: '6. États-Unis et autres régions',
        paragraphs: [
          'Aux États-Unis, les mentions relatives aux cookies soutiennent la transparence au titre des lois étatiques sur la vie privée (y compris les notions de « vente »/« partage » du CCPA/CPRA lorsque des cookies publicitaires sont utilisés). Les utilisateurs d’Asie-Pacifique peuvent disposer de droits similaires de transparence et de choix au titre des lois locales (p. ex. PDPA, APPI) ; contactez-nous pour exercer les droits applicables.',
        ],
      },
      {
        h: '7. Gestion des cookies',
        paragraphs: [
          'Contrôles du navigateur : utilisez les pages d’aide de votre navigateur pour refuser ou supprimer les cookies.',
          'Contrôles dans le produit / sur le site : lorsque nous proposons un outil de préférences cookies, utilisez-le pour ajuster les catégories non essentielles.',
          `Questions : ${EMAIL}`,
        ],
      },
      {
        h: '8. Modifications',
        paragraphs: [
          'Nous pouvons mettre à jour cette Politique lorsque nos pratiques changent. Consultez la date de « Dernière mise à jour ». Les modifications importantes seront reflétées sur cette page et, lorsque cela est requis, via un nouveau consentement.',
        ],
      },
    ],
  },
  legalPage: {
    badge: 'Mentions légales',
    title: 'Informations légales et sociétaires',
    subtitle: 'Coordonnées officielles et documents juridiques publics de Nexow, Inc.',
    meta: {
      title: 'Mentions légales — Nexow, Inc.',
      description:
        'Informations légales et sociétaires de Nexow, Inc., y compris l’adresse enregistrée et les liens vers les politiques de Confidentialité, Conditions, Cookies et Usage acceptable.',
    },
    updated: UPDATED,
    governingNote:
      'Les informations sociétaires et les documents juridiques sont fournis en anglais (English) comme langue faisant foi, sauf si une version locale obligatoire est exigée par la loi.',
    sections: [
      {
        h: '1. Coordonnées de la société',
        paragraphs: [
          `Entité juridique : ${ENTITY}`,
          `Siège / adresse postale : ${ADDRESS}`,
          `Site web : ${WEB}`,
          `Application : ${APP}`,
          `Contact général : ${EMAIL}`,
        ],
      },
      {
        h: '2. Documents juridiques publics',
        paragraphs: [
          'Les documents suivants constituent nos contrats juridiques publics pour le site et l’application :',
          '• Politique de confidentialité — traitement des informations personnelles (approche RGPD/CCPA, avec notes Asie-Pacifique).',
          '• Conditions d’utilisation — conditions régissant l’usage des Services.',
          '• Politique relative aux cookies — cookies et technologies similaires.',
          '• Politique d’usage acceptable — conduites interdites et exigées.',
          'Les liens figurent dans le pied de page et aux adresses /privacy, /terms, /cookies et /acceptable-use.',
        ],
      },
      {
        h: '3. Mention de type imprint',
        paragraphs: [
          `Pour les utilisateurs recherchant une « mention légale », un « imprint » ou des informations d’identification de la société : les Services sont exploités par ${ENTITY}, à ${ADDRESS}. Contact en ligne : ${EMAIL}. Cette page vise à satisfaire les attentes habituelles de transparence aux États-Unis, en Europe et ailleurs pour identifier l’opérateur du service.`,
        ],
      },
      {
        h: '4. Traitement des données',
        paragraphs: [
          'Nexow traite les données personnelles comme décrit dans la Politique de confidentialité. Les clients ayant besoin d’un accord de traitement des données (DPA) ou de clauses équivalentes à l’article 28 du RGPD (ou équivalent) peuvent en faire la demande par e-mail avec l’objet « DPA Request ». Les sous-traitants types et les garanties de transfert sont décrits dans la Politique de confidentialité ou communiqués sur demande.',
        ],
      },
      {
        h: '5. Avertissements',
        paragraphs: [
          'Nexow est une plateforme d’outils et de visualisation. Les contenus du site marketing et de l’application (y compris les exemples de données de marché) ne constituent pas un conseil financier, d’investissement, juridique ou fiscal. Vous restez seul responsable du respect des lois applicables à votre usage des places et données connectées.',
        ],
      },
      {
        h: '6. Langue faisant foi',
        paragraphs: [
          'L’anglais (English) est la langue faisant foi de nos documents juridiques. L’interface ou les synthèses en d’autres langues sont fournies à titre de commodité et ne modifient pas les termes anglais, sauf si nous publions expressément une version locale contraignante.',
        ],
      },
      {
        h: '7. Contact pour questions juridiques',
        paragraphs: [
          `E-mail : ${EMAIL} (objet : « Legal »)`,
          `Courrier : ${ENTITY}, ${ADDRESS}`,
        ],
      },
    ],
  },
  acceptableUsePage: {
    badge: 'Usage acceptable',
    title: 'Politique d’usage acceptable',
    subtitle: 'Règles d’usage responsable et licite des sites Nexow et de l’application Nexow.',
    meta: {
      title: 'Politique d’usage acceptable — Nexow',
      description:
        'Politique d’usage acceptable de Nexow, Inc. : activités interdites, règles de sécurité et mesures d’application.',
    },
    updated: UPDATED,
    governingNote:
      'La langue faisant foi de cette Politique d’usage acceptable est l’anglais (English). Les traductions sont fournies à titre de commodité uniquement.',
    sections: [
      {
        h: '1. Objet',
        paragraphs: [
          `La présente Politique d’usage acceptable (« AUP ») s’applique à votre usage des Services exploités par ${ENTITY}. Elle complète les Conditions d’utilisation. Toute violation peut entraîner une suspension ou une résiliation.`,
        ],
      },
      {
        h: '2. Activités interdites',
        paragraphs: [
          'Vous ne pouvez pas utiliser les Services pour : violer la loi ou des droits de tiers ; diffuser des malwares, du spam ou du hameçonnage ; tenter un accès non autorisé à des systèmes, comptes ou données ; interférer avec les Services ou les perturber ; extraire ou collecter des données d’une manière qui surcharge l’infrastructure ou viole les conditions d’autrui ; contourner des limites d’usage ou des contrôles de sécurité ; usurper une identité ou une affiliation ; ou importer des données illicites, contrefaisantes ou hautement sensibles et réglementées sans autorisation.',
          'Vous ne pouvez pas utiliser les Services pour faciliter une fraude, une manipulation de marché, un contournement de sanctions ou une activité de trading illicite. Vous ne devez pas générer ni déployer de widgets dont l’objet principal est l’abus, la tromperie ou le préjudice.',
        ],
      },
      {
        h: '3. Identifiants et connecteurs',
        paragraphs: [
          'N’utilisez que des identifiants que vous êtes autorisé à utiliser. Ne partagez pas l’accès au compte de manière non sécurisée. Configurez les connecteurs avec le moindre privilège. N’essayez pas d’extraire des secrets appartenant à d’autres utilisateurs.',
        ],
      },
      {
        h: '4. IA et résultats générés',
        paragraphs: [
          'N’utilisez pas les fonctions de génération pour créer un contenu illégal, portant atteinte à des droits de PI, ou destiné à tromper autrui à grande échelle (p. ex. comportement inauthentique coordonné). Vous êtes responsable de l’examen des résultats avant de vous y fier.',
        ],
      },
      {
        h: '5. Usage équitable des ressources',
        paragraphs: [
          'Les offres et crédits comportent des limites d’usage. Une consommation automatisée ou abusive dégradant le service pour autrui peut être limitée ou bloquée.',
        ],
      },
      {
        h: '6. Signalement et application',
        paragraphs: [
          `Signalez les abus à ${EMAIL} avec l’objet « Abuse ». Nous pouvons enquêter et retirer des contenus, suspendre des fonctions ou résilier des comptes. Nous pouvons signaler une activité illégale aux autorités lorsque cela est approprié.`,
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
