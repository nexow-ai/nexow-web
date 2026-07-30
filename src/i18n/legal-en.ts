import type { LegalPageContent } from './content';
import { SITE } from './config';

const ENTITY = SITE.legalName;
const ADDRESS = SITE.address;
const WEB = SITE.url;
const APP = SITE.appUrl;
const EMAIL = SITE.email;
const UPDATED = 'Last updated: 29 July 2026';

const CONTACT_BLOCK = `${ENTITY}, ${ADDRESS}. Email: ${EMAIL}. Web: ${WEB}.`;

/**
 * English legal documents — governing language for Nexow web and app.
 * These are professional template-quality policies for public posting;
 * they are not a substitute for jurisdiction-specific legal counsel.
 */
export const privacyPage: LegalPageContent = {
  badge: 'Privacy',
  title: 'Privacy Policy',
  subtitle:
    'How Nexow, Inc. collects, uses, and protects personal information when you use nexow.ai and the Nexow application.',
  meta: {
    title: 'Privacy Policy — Nexow',
    description:
      'Privacy Policy for Nexow, Inc.: data we collect, how we use it, cookies, and your privacy rights under GDPR, CCPA/CPRA, and other applicable laws.',
  },
  updated: UPDATED,
  governingNote:
    'This Privacy Policy is provided in English, which is the governing language. Translated summaries, if any, are for convenience only.',
  sections: [
    {
      h: '1. Who we are',
      paragraphs: [
        `This Privacy Policy describes how ${ENTITY} (“Nexow,” “we,” “us,” or “our”) processes personal information in connection with our websites (including ${WEB}), the Nexow web application (${APP}), and related services (collectively, the “Services”).`,
        `Controller / business: ${CONTACT_BLOCK}`,
        'If you have questions about this Policy or wish to exercise privacy rights, contact us at the address or email above with the subject line “Privacy Request.”',
      ],
    },
    {
      h: '2. Scope',
      paragraphs: [
        'This Policy applies to personal information we process when you visit our marketing site, create or use a Nexow account, build or share workspaces and widgets, connect third-party services, purchase or manage a plan, or otherwise interact with the Services.',
        'It does not apply to third-party websites, apps, venues, or APIs you choose to connect; those are governed by their own privacy terms. Where a connector runs in your browser against a third party, that third party is typically an independent controller of data you send to them.',
      ],
    },
    {
      h: '3. Information we collect',
      paragraphs: [
        'Account and profile data: email address, display name, authentication identifiers, plan or billing status, preferences, and similar account settings.',
        'Workspace and product data: widgets, prompts, generated code or configurations, versions, logs, library items, sync state, collaboration metadata, and related content you create or upload in the Services.',
        'Connection data: tokens, API keys, or OAuth credentials you supply for third-party connectors (handled as described in “Connections and credentials”), plus technical metadata needed to maintain those connections.',
        'Usage and device data: IP address, browser type, device or OS information, approximate location derived from IP, referrer, pages viewed, feature usage, performance and diagnostic events, and similar telemetry needed to operate and secure the Services.',
        'Communications: messages you send to us (support, privacy, or legal requests), and related correspondence.',
        'Payment data: if you purchase a paid plan, payment method and billing details are typically processed by our payment processor; we receive limited billing metadata (e.g., plan, status, last four digits or similar tokens) rather than full card numbers where the processor allows.',
        'Cookies and similar technologies: see our Cookie Policy for details.',
      ],
    },
    {
      h: '4. How we use information',
      paragraphs: [
        'We use personal information to: provide, maintain, and improve the Services; authenticate users and secure accounts; store and sync workspace content you request; process transactions and send service-related notices; respond to support and privacy requests; monitor reliability, abuse, and security; comply with law; and, where permitted, communicate product updates (you may opt out of non-essential marketing).',
        'We do not sell personal information as “sale” is commonly defined under CCPA/CPRA, and we do not share personal information for cross-context behavioral advertising as those terms are defined under California law, except as disclosed in our Cookie Policy if we introduce advertising cookies (in which case we will update this Policy and provide required opt-outs).',
      ],
    },
    {
      h: '5. Legal bases (EEA / UK / Switzerland)',
      paragraphs: [
        'Where the EU GDPR, UK GDPR, or Swiss FADP applies, we process personal data on one or more of these bases: performance of a contract (providing the Services you request); legitimate interests (securing and improving the Services, preventing abuse, basic analytics), balanced against your rights; consent (where required, e.g., certain cookies or optional marketing); and legal obligation (retaining records or responding to lawful requests).',
      ],
    },
    {
      h: '6. Connections and credentials',
      paragraphs: [
        'Where a third-party service permits it, Nexow may connect directly from your browser so credentials are used primarily to talk to that service. Some services require a proxy or server-side component; in those cases we process only what is needed to fulfill the request and operate the connector.',
        'You are responsible for ensuring you have the right to connect each service and for configuring least-privilege credentials. Revoke access in the third-party service and in Nexow when you no longer need a connection.',
      ],
    },
    {
      h: '7. Generated content and AI features',
      paragraphs: [
        'When you use generation or AI-assisted features, prompts and related context may be processed by us and/or by model or infrastructure providers we use to deliver the feature. We use that processing to generate results for your workspace and to operate and improve the Services, subject to our contracts with those providers.',
        'Do not submit secrets, regulated personal data, or confidential third-party data in prompts unless you have a lawful basis and accept the risk that such content may be processed by subprocessors involved in generation.',
      ],
    },
    {
      h: '8. Sharing and processors',
      paragraphs: [
        'We share personal information with: service providers (hosting, analytics, email, payments, error monitoring, AI/model providers) under contracts that limit use to providing services to us; professional advisors; authorities when required by law or to protect rights and safety; and successors in a merger, acquisition, or asset transfer (with notice where required).',
        'We may also share information you choose to make public or share with other users (e.g., published widgets, community features) according to your settings.',
      ],
    },
    {
      h: '9. International transfers',
      paragraphs: [
        `${ENTITY} is based in the United States. If you access the Services from the EEA, UK, Switzerland, or other regions, your information may be transferred to and processed in the United States and other countries that may have different data-protection rules.`,
        'Where required, we use appropriate safeguards for transfers (such as Standard Contractual Clauses or successor mechanisms) and take steps we consider reasonable to protect personal information.',
      ],
    },
    {
      h: '10. Retention',
      paragraphs: [
        'We retain personal information for as long as your account is active or as needed to provide the Services, comply with legal obligations, resolve disputes, and enforce agreements. Workspace content generally persists until you delete it or close your account, subject to backup and legal hold periods. You may request deletion as described below; some residual copies may remain in backups for a limited time.',
      ],
    },
    {
      h: '11. Security',
      paragraphs: [
        'We implement technical and organizational measures designed to protect personal information (access controls, encryption in transit where appropriate, least-privilege practices). No method of transmission or storage is completely secure; you are responsible for safeguarding account credentials and devices.',
      ],
    },
    {
      h: '12. Your rights — Europe and UK (GDPR)',
      paragraphs: [
        'If you are in the EEA, UK, or Switzerland, you may have rights to access, rectify, erase, restrict, or object to certain processing; to data portability; and to withdraw consent where processing is consent-based, without affecting prior lawful processing. You may lodge a complaint with your local supervisory authority.',
        `To exercise these rights, email ${EMAIL} with “Privacy Request” in the subject line. We may need to verify your identity before fulfilling a request.`,
      ],
    },
    {
      h: '13. Your rights — United States (including CCPA/CPRA)',
      paragraphs: [
        'Depending on your state of residence (including California under the CCPA/CPRA), you may have rights to know/access, delete, correct, and opt out of sale or sharing of personal information, and to limit use of sensitive personal information where applicable. We will not discriminate against you for exercising privacy rights.',
        `Submit requests to ${EMAIL} (subject: “Privacy Request”) or by mail to ${ADDRESS}. Authorized agents may submit requests as permitted by law; we may require proof of authorization and identity verification.`,
        'If we offer a “Do Not Sell or Share” or similar control (including via Global Privacy Control where we honor it), we will describe it in the Cookie Policy or product settings.',
      ],
    },
    {
      h: '14. Asia-Pacific notes (high level)',
      paragraphs: [
        `If you are in jurisdictions such as Singapore (PDPA), Japan (APPI), South Korea (PIPA), or other Asia-Pacific regions with personal-data laws, we process information as described in this Policy and in accordance with applicable local requirements to the extent they apply to ${ENTITY} as a U.S. provider of online Services.`,
        `You may contact us at ${EMAIL} to inquire about access, correction, or deletion consistent with applicable law. Where local law requires a local representative or additional notices, we will update this Policy or provide region-specific notices.`,
      ],
    },
    {
      h: '15. Children',
      paragraphs: [
        'The Services are not directed to children under 16 (or the higher age required in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided us information, contact us and we will take appropriate steps to delete it.',
      ],
    },
    {
      h: '16. Marketing site',
      paragraphs: [
        'Our marketing website is primarily static and uses limited analytics and cookies as described in the Cookie Policy. We do not sell personal data collected from the marketing site. Outbound links (including to the app) are labelled where practical.',
      ],
    },
    {
      h: '17. Changes',
      paragraphs: [
        'We may update this Policy from time to time. The “Last updated” date will change when we post revisions. Material changes may be highlighted on the site or notified by email where appropriate. Continued use of the Services after an update constitutes acceptance of the revised Policy to the extent permitted by law.',
      ],
    },
    {
      h: '18. Contact',
      paragraphs: [
        `Privacy and data-protection requests: ${EMAIL}`,
        `Postal: ${ENTITY}, ${ADDRESS}`,
        `Web: ${WEB}`,
      ],
    },
  ],
};

export const termsPage: LegalPageContent = {
  badge: 'Terms',
  title: 'Terms of Use',
  subtitle:
    'The agreement between you and Nexow, Inc. for use of nexow.ai and the Nexow application.',
  meta: {
    title: 'Terms of Use — Nexow',
    description:
      'Terms of Use for Nexow, Inc. websites and application: accounts, acceptable use, IP, disclaimers, liability, and governing law.',
  },
  updated: UPDATED,
  governingNote:
    'These Terms of Use are provided in English, which is the governing language. Translated summaries, if any, are for convenience only.',
  sections: [
    {
      h: '1. Agreement',
      paragraphs: [
        `These Terms of Use (“Terms”) form a binding agreement between you and ${ENTITY} (“Nexow,” “we,” “us,” or “our”) governing access to and use of ${WEB}, ${APP}, and related services (the “Services”).`,
        'By accessing or using the Services, creating an account, or clicking to accept these Terms, you agree to them and to our Privacy Policy and Cookie Policy. If you do not agree, do not use the Services.',
        `If you use the Services on behalf of an organization, you represent that you have authority to bind that organization, and “you” includes that organization.`,
      ],
    },
    {
      h: '2. The Services',
      paragraphs: [
        'Nexow provides tooling to describe, generate, configure, visualize, and share widgets and workspaces, including connections to third-party data sources and optional collaboration, community, or marketplace features as we make them available.',
        'We may modify, suspend, or discontinue features, plans, or the Services (in whole or part) with reasonable notice where practicable. Preview or beta features may be unstable and are provided as-is.',
      ],
    },
    {
      h: '3. Eligibility and accounts',
      paragraphs: [
        'You must be at least the age of digital consent in your jurisdiction (and in any event at least 16, or 18 where required) to use the Services. You must provide accurate account information and keep credentials confidential. You are responsible for activity under your account.',
        'We may suspend or terminate accounts that violate these Terms, pose a security risk, or remain inactive for an extended period.',
      ],
    },
    {
      h: '4. Plans, credits, and payment',
      paragraphs: [
        'Some features require a paid plan, credits, or other usage limits. Prices, included quotas, and billing periods are described on the Plans page or in-product. Unless stated otherwise, fees are non-refundable except where required by law.',
        'You authorize us and our payment processors to charge applicable fees. Taxes may apply. We may change pricing with notice; changes take effect on the next renewal unless otherwise stated.',
      ],
    },
    {
      h: '5. Your content and license',
      paragraphs: [
        'You retain ownership of content you submit or create in the Services (“User Content”), including prompts, widgets, and configurations, subject to rights of third parties and of Nexow in our platform, templates, and generated scaffolding that is not unique to your inputs.',
        `You grant ${ENTITY} a worldwide, non-exclusive license to host, process, transmit, display, and create derivative works of User Content solely as needed to operate, secure, and improve the Services and as otherwise directed by you (e.g., sharing or publishing).`,
        'You represent that you have all rights needed to submit User Content and to connect any third-party services, and that User Content does not violate law or third-party rights.',
      ],
    },
    {
      h: '6. Acceptable use',
      paragraphs: [
        'You must comply with our Acceptable Use Policy and all applicable laws. You may not misuse the Services, interfere with others, attempt unauthorized access, scrape in abusive ways, or use the Services for unlawful trading, fraud, malware, or infringement.',
        'Nexow is a tooling and visualization platform. Nothing in the Services constitutes financial, investment, legal, or tax advice. Market data and examples may be illustrative; you are solely responsible for decisions you make.',
      ],
    },
    {
      h: '7. Third-party services',
      paragraphs: [
        'Connectors and integrations are optional and subject to third-party terms. We are not responsible for third-party availability, accuracy, fees, or data practices. Credentials you supply are used as described in the Privacy Policy.',
      ],
    },
    {
      h: '8. Intellectual property',
      paragraphs: [
        `The Services, including software, branding, documentation, and non-User Content, are owned by ${ENTITY} or its licensors and are protected by intellectual-property laws. Except for the limited right to use the Services under these Terms, no rights are granted.`,
        'Feedback you provide may be used by us without obligation to you.',
      ],
    },
    {
      h: '9. Confidentiality and security',
      paragraphs: [
        'You must not attempt to probe, bypass, or disrupt security controls. Report suspected vulnerabilities responsibly to us. We implement reasonable security measures but cannot guarantee absolute security.',
      ],
    },
    {
      h: '10. Disclaimers',
      paragraphs: [
        'THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS, OR THAT OUTPUTS (INCLUDING AI-GENERATED CONTENT) WILL BE ACCURATE, COMPLETE, OR FIT FOR YOUR PURPOSE.',
      ],
    },
    {
      h: '11. Limitation of liability',
      paragraphs: [
        `TO THE MAXIMUM EXTENT PERMITTED BY LAW, ${ENTITY.toUpperCase()} AND ITS DIRECTORS, OFFICERS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, REVENUE, DATA, OR GOODWILL, ARISING FROM OR RELATED TO THE SERVICES OR THESE TERMS, WHETHER BASED IN CONTRACT, TORT, OR OTHERWISE, EVEN IF ADVISED OF THE POSSIBILITY.`,
        `OUR AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICES OR THESE TERMS WILL NOT EXCEED THE GREATER OF (A) THE AMOUNTS YOU PAID TO US FOR THE SERVICES IN THE TWELVE (12) MONTHS BEFORE THE CLAIM OR (B) ONE HUNDRED U.S. DOLLARS (US $100). SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS; IN THOSE CASES OUR LIABILITY IS LIMITED TO THE MAXIMUM EXTENT PERMITTED.`,
      ],
    },
    {
      h: '12. Indemnity',
      paragraphs: [
        `You will defend and indemnify ${ENTITY} against claims, damages, and expenses (including reasonable attorneys’ fees) arising from your User Content, your use of the Services, your connections to third parties, or your violation of these Terms or law.`,
      ],
    },
    {
      h: '13. Termination',
      paragraphs: [
        'You may stop using the Services at any time and may request account closure via the product or by contacting us. We may suspend or terminate access for breach, risk, or legal reasons. Provisions that by nature should survive (including IP, disclaimers, limitations, indemnity, and governing law) will survive termination.',
      ],
    },
    {
      h: '14. Governing law and disputes',
      paragraphs: [
        `These Terms are governed by the laws of the State of Delaware, United States, excluding conflict-of-law rules. Subject to mandatory consumer protections in your country of residence, courts located in Delaware (or federal courts with jurisdiction there) will have exclusive jurisdiction over disputes, except that we may seek injunctive relief in any jurisdiction.`,
        'If you are a consumer in the EEA/UK, you may also benefit from mandatory local protections and may bring proceedings in your place of residence where required by law.',
      ],
    },
    {
      h: '15. Changes',
      paragraphs: [
        'We may update these Terms by posting a revised version with an updated date. Material changes may be notified in-product or by email. Continued use after the effective date constitutes acceptance, except where applicable law requires otherwise.',
      ],
    },
    {
      h: '16. Contact',
      paragraphs: [
        `Legal notices: ${EMAIL}`,
        `${ENTITY}, ${ADDRESS}`,
        `Web: ${WEB}`,
      ],
    },
  ],
};

export const cookiesPage: LegalPageContent = {
  badge: 'Cookies',
  title: 'Cookie Policy',
  subtitle:
    'How Nexow, Inc. uses cookies and similar technologies on nexow.ai and in the Nexow application.',
  meta: {
    title: 'Cookie Policy — Nexow',
    description:
      'Cookie Policy for Nexow, Inc.: types of cookies, purposes, consent, and how to manage preferences.',
  },
  updated: UPDATED,
  governingNote:
    'This Cookie Policy is provided in English, which is the governing language. Translated summaries, if any, are for convenience only.',
  sections: [
    {
      h: '1. Introduction',
      paragraphs: [
        `${ENTITY} (“Nexow,” “we,” “us”) uses cookies and similar technologies (local storage, pixels, SDKs) on ${WEB} and related Services. This Cookie Policy explains what we use, why, and how you can control them. It should be read with our Privacy Policy.`,
        `Contact: ${EMAIL} · ${ADDRESS}`,
      ],
    },
    {
      h: '2. What are cookies?',
      paragraphs: [
        'Cookies are small text files stored on your device. Similar technologies store or read information in comparable ways. They may be “session” (deleted when you close the browser) or “persistent” (retained until expiry or deletion), and “first-party” (set by us) or “third-party” (set by another domain).',
      ],
    },
    {
      h: '3. How we use cookies',
      paragraphs: [
        'Strictly necessary: required for security, load balancing, authentication, consent storage, and core functionality. These do not require consent where applicable law provides an exemption.',
        'Preferences / functional: remember language, UI settings, or similar choices.',
        'Analytics / performance: help us understand traffic and improve the site or app (e.g., aggregated page views). Where required (including in the EU/UK), we request consent before non-essential analytics cookies.',
        'Marketing / advertising: we do not currently rely on third-party advertising cookies on the marketing site. If that changes, we will update this Policy and obtain consent where required.',
      ],
    },
    {
      h: '4. Local storage and app state',
      paragraphs: [
        'The Nexow application may use browser storage (e.g., localStorage, IndexedDB) to keep workspace data, preferences, or session state. That storage is necessary to operate the product features you use and is described further in the Privacy Policy.',
      ],
    },
    {
      h: '5. Consent (Europe and similar regimes)',
      paragraphs: [
        'Where the ePrivacy Directive / GDPR (or UK equivalent) require consent for non-essential cookies, we will request consent before setting them and honor withdrawals. Strictly necessary cookies may be set regardless of consent banners.',
        'You can change browser settings to block or delete cookies; some features may not work correctly if essential cookies are blocked.',
      ],
    },
    {
      h: '6. United States and other regions',
      paragraphs: [
        'In the U.S., cookie disclosures support transparency under state privacy laws (including CCPA/CPRA “sale”/“share” concepts where advertising cookies are used). Asia-Pacific users may have similar transparency and choice rights under local laws (e.g., PDPA, APPI); contact us to exercise applicable rights.',
      ],
    },
    {
      h: '7. Managing cookies',
      paragraphs: [
        'Browser controls: use your browser’s help pages to refuse or delete cookies.',
        'In-product / site controls: where we provide a cookie preferences tool, use it to adjust non-essential categories.',
        `Questions: ${EMAIL}`,
      ],
    },
    {
      h: '8. Changes',
      paragraphs: [
        'We may update this Cookie Policy when our practices change. Check the “Last updated” date. Material changes will be reflected on this page and, where required, through renewed consent.',
      ],
    },
  ],
};

export const legalPage: LegalPageContent = {
  badge: 'Legal',
  title: 'Legal & Company Information',
  subtitle: 'Official company details and public legal documents for Nexow, Inc.',
  meta: {
    title: 'Legal — Nexow, Inc.',
    description:
      'Legal and company information for Nexow, Inc., including registered address and links to Privacy, Terms, Cookies, and Acceptable Use policies.',
  },
  updated: UPDATED,
  governingNote:
    'Company information and legal documents are provided in English as the governing language unless a mandatory local version is required by law.',
  sections: [
    {
      h: '1. Company details',
      paragraphs: [
        `Legal entity: ${ENTITY}`,
        `Registered / mailing address: ${ADDRESS}`,
        `Website: ${WEB}`,
        `Application: ${APP}`,
        `General contact: ${EMAIL}`,
      ],
    },
    {
      h: '2. Public legal documents',
      paragraphs: [
        'The following documents form our public legal contracts for the website and application:',
        '• Privacy Policy — how we process personal information (GDPR/CCPA-aware, with Asia-Pacific notes).',
        '• Terms of Use — terms governing use of the Services.',
        '• Cookie Policy — cookies and similar technologies.',
        '• Acceptable Use Policy — prohibited and required conduct.',
        'Links are available in the site footer and at /privacy, /terms, /cookies, and /acceptable-use.',
      ],
    },
    {
      h: '3. Imprint-style notice',
      paragraphs: [
        `For users seeking “legal notice,” “imprint,” or company identification information: the Services are operated by ${ENTITY}, at ${ADDRESS}. Online contact: ${EMAIL}. This page is intended to satisfy common transparency expectations in the United States, Europe, and other regions for identifying the service operator.`,
      ],
    },
    {
      h: '4. Data processing',
      paragraphs: [
        'Nexow processes personal data as described in the Privacy Policy. Customers who require a Data Processing Addendum (DPA) or similar contractual terms for GDPR Article 28 (or equivalent) may request one by emailing us with “DPA Request” in the subject line. Standard subprocessors and transfer safeguards are described in the Privacy Policy or provided on request.',
      ],
    },
    {
      h: '5. Disclaimers',
      paragraphs: [
        'Nexow is a tooling and visualization platform. Content on the marketing site and in the app (including market-data examples) is not financial, investment, legal, or tax advice. You remain solely responsible for compliance with laws applicable to your use of connected venues and data.',
      ],
    },
    {
      h: '6. Governing language',
      paragraphs: [
        'English is the governing language of our legal documents. Local-language UI or summaries are for convenience only and do not modify the English terms unless we expressly publish a binding local version.',
      ],
    },
    {
      h: '7. Contact for legal matters',
      paragraphs: [
        `Email: ${EMAIL} (subject: “Legal”)`,
        `Post: ${ENTITY}, ${ADDRESS}`,
      ],
    },
  ],
};

export const acceptableUsePage: LegalPageContent = {
  badge: 'Acceptable Use',
  title: 'Acceptable Use Policy',
  subtitle: 'Rules for using Nexow websites and the Nexow application responsibly and lawfully.',
  meta: {
    title: 'Acceptable Use Policy — Nexow',
    description:
      'Acceptable Use Policy for Nexow, Inc.: prohibited activities, security rules, and enforcement.',
  },
  updated: UPDATED,
  governingNote:
    'This Acceptable Use Policy is provided in English, which is the governing language.',
  sections: [
    {
      h: '1. Purpose',
      paragraphs: [
        `This Acceptable Use Policy (“AUP”) applies to your use of Services operated by ${ENTITY}. It supplements the Terms of Use. Violation may result in suspension or termination.`,
      ],
    },
    {
      h: '2. Prohibited activities',
      paragraphs: [
        'You may not use the Services to: violate law or third-party rights; distribute malware, spam, or phishing; attempt unauthorized access to systems, accounts, or data; interfere with or disrupt the Services; scrape or harvest data in a way that burdens infrastructure or violates others’ terms; evade rate limits or security controls; misrepresent your identity or affiliation; or upload unlawful, infringing, or highly sensitive regulated data without authorization.',
        'You may not use the Services to facilitate fraud, market manipulation, sanctions evasion, or unlawful trading activity. You must not generate or deploy widgets whose primary purpose is abuse, deception, or harm.',
      ],
    },
    {
      h: '3. Credentials and connectors',
      paragraphs: [
        'Use only credentials you are authorized to use. Do not share account access unsafely. Configure connectors with least privilege. Do not attempt to extract secrets belonging to other users.',
      ],
    },
    {
      h: '4. AI and generated output',
      paragraphs: [
        'Do not use generation features to create content that is illegal, that infringes IP, or that is intended to deceive others at scale (e.g., coordinated inauthentic behavior). You are responsible for reviewing outputs before relying on them.',
      ],
    },
    {
      h: '5. Fair use of resources',
      paragraphs: [
        'Plans and credits have usage limits. Automated or abusive consumption that degrades service for others may be throttled or blocked.',
      ],
    },
    {
      h: '6. Reporting and enforcement',
      paragraphs: [
        `Report abuse to ${EMAIL} with “Abuse” in the subject line. We may investigate and remove content, suspend features, or terminate accounts. We may report illegal activity to authorities where appropriate.`,
      ],
    },
    {
      h: '7. Contact',
      paragraphs: [
        `${ENTITY}, ${ADDRESS} · ${EMAIL} · ${WEB}`,
      ],
    },
  ],
};
