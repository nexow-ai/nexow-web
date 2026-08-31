import type { LegalBundle } from './types';
import { ADDRESS, APP, CONTACT_BLOCK, EMAIL, ENTITY, WEB } from './shared';

const UPDATED = 'Última actualización: 29 de julio de 2026';

export const es: LegalBundle = {
  privacyPage: {
    badge: 'Privacidad',
    title: 'Política de Privacidad',
    subtitle:
      `Cómo Nexow, Inc. recopila, usa y protege la información personal cuando utiliza ${WEB} y la aplicación Nexow.`,
    meta: {
      title: 'Política de Privacidad — Nexow',
      description:
        'Política de Privacidad de Nexow, Inc.: datos que recopilamos, cómo los usamos, cookies y sus derechos de privacidad según el RGPD, la CCPA/CPRA y otras leyes aplicables.',
    },
    updated: UPDATED,
    governingNote:
      'El idioma vinculante de esta Política de Privacidad es el inglés (English). Las traducciones se ofrecen solo por conveniencia y no modifican la versión en inglés.',
    sections: [
      {
        h: '1. Quiénes somos',
        paragraphs: [
          `Esta Política de Privacidad describe cómo ${ENTITY} (“Nexow”, “nosotros” o “nuestro”) trata la información personal en relación con nuestros sitios web (incluido ${WEB}), la aplicación web Nexow (${APP}) y los servicios relacionados (en conjunto, los “Servicios”).`,
          `Responsable / empresa: ${CONTACT_BLOCK}`,
          'Si tiene preguntas sobre esta Política o desea ejercer derechos de privacidad, escríbanos a la dirección o al correo anteriores con el asunto “Privacy Request”.',
        ],
      },
      {
        h: '2. Ámbito',
        paragraphs: [
          'Esta Política se aplica a la información personal que tratamos cuando visita nuestro sitio de marketing, crea o usa una cuenta Nexow, construye o comparte espacios de trabajo y widgets, conecta servicios de terceros, contrata o gestiona un plan, o interactúa de otro modo con los Servicios.',
          'No se aplica a sitios web, aplicaciones, venues o APIs de terceros que usted elija conectar; esos se rigen por sus propias condiciones de privacidad. Cuando un conector se ejecuta en su navegador frente a un tercero, ese tercero suele ser un responsable independiente de los datos que usted le envía.',
        ],
      },
      {
        h: '3. Información que recopilamos',
        paragraphs: [
          'Datos de cuenta y perfil: dirección de correo, nombre visible, identificadores de autenticación, estado del plan o facturación, preferencias y ajustes similares de la cuenta.',
          'Datos de espacio de trabajo y producto: widgets, prompts, código o configuraciones generados, versiones, registros, elementos de biblioteca, estado de sincronización, metadatos de colaboración y contenido relacionado que cree o cargue en los Servicios.',
          'Datos de conexión: tokens, claves API o credenciales OAuth que facilite para conectores de terceros (tratados como se describe en “Conexiones y credenciales”), más metadatos técnicos necesarios para mantener esas conexiones.',
          'Datos de uso y dispositivo: dirección IP, tipo de navegador, información de dispositivo o sistema operativo, ubicación aproximada derivada de la IP, referente, páginas vistas, uso de funciones, eventos de rendimiento y diagnóstico, y telemetría similar necesaria para operar y proteger los Servicios.',
          'Comunicaciones: mensajes que nos envíe (soporte, privacidad o consultas legales) y la correspondencia relacionada.',
          'Datos de pago: si contrata un plan de pago, el método de pago y los datos de facturación suelen ser tratados por nuestro procesador de pagos; recibimos metadatos de facturación limitados (p. ej., plan, estado, últimos cuatro dígitos o tokens equivalentes) y no el número completo de la tarjeta cuando el procesador lo permite.',
          'Cookies y tecnologías similares: consulte nuestra Política de Cookies para más detalle.',
        ],
      },
      {
        h: '4. Cómo usamos la información',
        paragraphs: [
          'Usamos la información personal para: prestar, mantener y mejorar los Servicios; autenticar usuarios y proteger cuentas; almacenar y sincronizar el contenido del espacio de trabajo que usted solicita; procesar transacciones y enviar avisos del servicio; responder a solicitudes de soporte y privacidad; supervisar fiabilidad, abusos y seguridad; cumplir la ley; y, cuando esté permitido, comunicar novedades del producto (puede oponerse al marketing no esencial).',
          'No vendemos información personal según se suele definir la “venta” en la CCPA/CPRA, y no compartimos información personal para publicidad conductual entre contextos según el derecho de California, salvo lo que se indique en nuestra Política de Cookies si introdujéramos cookies publicitarias (en cuyo caso actualizaremos esta Política y ofreceremos las opciones de exclusión exigidas).',
        ],
      },
      {
        h: '5. Bases jurídicas (EEE / Reino Unido / Suiza)',
        paragraphs: [
          'Cuando resulte aplicable el RGPD de la UE, el UK GDPR o la LPD suiza, tratamos datos personales sobre una o más de estas bases: ejecución de un contrato (prestar los Servicios que solicita); intereses legítimos (proteger y mejorar los Servicios, prevenir abusos, analítica básica), ponderados frente a sus derechos; consentimiento (cuando se exija, p. ej. ciertas cookies o marketing opcional); y obligación legal (conservar registros o atender requerimientos lícitos).',
        ],
      },
      {
        h: '6. Conexiones y credenciales',
        paragraphs: [
          'Cuando un servicio de terceros lo permite, Nexow puede conectar directamente desde su navegador de modo que las credenciales se usen principalmente para hablar con ese servicio. Algunos servicios requieren un proxy o un componente en servidor; en esos casos tratamos solo lo necesario para cumplir la petición y operar el conector.',
          'Usted es responsable de asegurarse de que tiene derecho a conectar cada servicio y de configurar credenciales con el mínimo privilegio. Revogue el acceso en el servicio de terceros y en Nexow cuando ya no necesite una conexión.',
        ],
      },
      {
        h: '7. Contenido generado y funciones de IA',
        paragraphs: [
          'Cuando usa funciones de generación o asistidas por IA, los prompts y el contexto relacionado pueden ser tratados por nosotros y/o por proveedores de modelos o infraestructura que usamos para prestar la función. Usamos ese tratamiento para generar resultados en su espacio de trabajo y para operar y mejorar los Servicios, sujeto a nuestros contratos con esos proveedores.',
          'No envíe secretos, datos personales regulados ni datos confidenciales de terceros en los prompts a menos que tenga una base lícita y acepte el riesgo de que ese contenido pueda ser tratado por subencargados implicados en la generación.',
        ],
      },
      {
        h: '8. Cesiones y encargados',
        paragraphs: [
          'Compartimos información personal con: proveedores de servicios (alojamiento, analítica, correo, pagos, monitorización de errores, proveedores de IA/modelos) bajo contratos que limitan el uso a prestarnos servicios; asesores profesionales; autoridades cuando lo exija la ley o para proteger derechos y seguridad; y sucesores en una fusión, adquisición o cesión de activos (con aviso cuando proceda).',
          'También podemos compartir información que usted elija hacer pública o compartir con otros usuarios (p. ej., widgets publicados, funciones de comunidad) según sus ajustes.',
        ],
      },
      {
        h: '9. Transferencias internacionales',
        paragraphs: [
          `${ENTITY} está establecido en Estados Unidos. Si accede a los Servicios desde el EEE, el Reino Unido, Suiza u otras regiones, su información puede transferirse y tratarse en Estados Unidos y en otros países con normas de protección de datos distintas.`,
          'Cuando se exija, usamos garantías adecuadas para las transferencias (como las Cláusulas Contractuales Tipo o mecanismos sucesores) y adoptamos medidas que consideramos razonables para proteger la información personal.',
        ],
      },
      {
        h: '10. Conservación',
        paragraphs: [
          'Conservamos la información personal mientras su cuenta esté activa o sea necesaria para prestar los Servicios, cumplir obligaciones legales, resolver controversias y hacer valer acuerdos. El contenido del espacio de trabajo suele persistir hasta que lo elimine o cierre la cuenta, sujeto a copias de seguridad y periodos de retención legal. Puede solicitar la supresión como se indica más abajo; algunas copias residuales pueden permanecer en copias de seguridad durante un tiempo limitado.',
        ],
      },
      {
        h: '11. Seguridad',
        paragraphs: [
          'Aplicamos medidas técnicas y organizativas diseñadas para proteger la información personal (controles de acceso, cifrado en tránsito cuando corresponda, prácticas de mínimo privilegio). Ningún método de transmisión o almacenamiento es completamente seguro; usted es responsable de proteger las credenciales de la cuenta y los dispositivos.',
        ],
      },
      {
        h: '12. Sus derechos — Europa y Reino Unido (RGPD)',
        paragraphs: [
          'Si se encuentra en el EEE, el Reino Unido o Suiza, puede tener derecho a acceder, rectificar, suprimir, limitar u oponerse a determinados tratamientos; a la portabilidad de los datos; y a retirar el consentimiento cuando el tratamiento se base en él, sin afectar al tratamiento lícito anterior. Puede presentar una reclamación ante su autoridad de control local.',
          `Para ejercer estos derechos, escriba a ${EMAIL} con el asunto “Privacy Request”. Es posible que debamos verificar su identidad antes de atender la solicitud.`,
        ],
      },
      {
        h: '13. Sus derechos — Estados Unidos (incluida la CCPA/CPRA)',
        paragraphs: [
          'Según su estado de residencia (incluido California bajo la CCPA/CPRA), puede tener derecho a conocer/acceder, suprimir, corregir y oponerse a la venta o cesión de información personal, y a limitar el uso de información personal sensible cuando proceda. No le discriminaremos por ejercer derechos de privacidad.',
          `Envíe las solicitudes a ${EMAIL} (asunto: “Privacy Request”) o por correo a ${ADDRESS}. Los agentes autorizados pueden presentar solicitudes según permita la ley; podemos exigir prueba de autorización y verificación de identidad.`,
          'Si ofrecemos un control de “No vender ni compartir” o similar (incluido Global Privacy Control cuando lo respetemos), lo describiremos en la Política de Cookies o en los ajustes del producto.',
        ],
      },
      {
        h: '14. Notas sobre Asia-Pacífico (nivel general)',
        paragraphs: [
          `Si se encuentra en jurisdicciones como Singapur (PDPA), Japón (APPI), Corea del Sur (PIPA) u otras regiones de Asia-Pacífico con leyes de datos personales, tratamos la información como se describe en esta Política y de conformidad con los requisitos locales aplicables en la medida en que resulten aplicables a ${ENTITY} como prestador estadounidense de Servicios en línea.`,
          `Puede contactarnos en ${EMAIL} para solicitar acceso, rectificación o supresión conforme a la ley aplicable. Cuando la normativa local exija un representante local o avisos adicionales, actualizaremos esta Política o publicaremos avisos específicos por región.`,
        ],
      },
      {
        h: '15. Menores',
        paragraphs: [
          'Los Servicios no están dirigidos a menores de 16 años (o la edad superior exigida en su jurisdicción). No recopilamos de forma consciente información personal de menores. Si cree que un menor nos ha facilitado información, contáctenos y tomaremos las medidas adecuadas para eliminarla.',
        ],
      },
      {
        h: '16. Sitio de marketing',
        paragraphs: [
          'Nuestro sitio de marketing es principalmente estático y usa analítica y cookies limitadas, según se describe en la Política de Cookies. No vendemos datos personales recopilados en el sitio de marketing. Los enlaces de salida (incluido el de la app) se identifican cuando es práctico.',
        ],
      },
      {
        h: '17. Cambios',
        paragraphs: [
          'Podemos actualizar esta Política periódicamente. La fecha de “Última actualización” cambiará cuando publiquemos revisiones. Los cambios materiales pueden destacarse en el sitio o notificarse por correo cuando proceda. El uso continuado de los Servicios tras una actualización constituye la aceptación de la Política revisada en la medida en que lo permita la ley.',
        ],
      },
      {
        h: '18. Contacto',
        paragraphs: [
          `Solicitudes de privacidad y protección de datos: ${EMAIL}`,
          `Postal: ${ENTITY}, ${ADDRESS}`,
          `Web: ${WEB}`,
        ],
      },
    ],
  },
  termsPage: {
    badge: 'Términos',
    title: 'Términos de Uso',
    subtitle: `El acuerdo entre usted y Nexow, Inc. para el uso de ${WEB} y la aplicación Nexow.`,
    meta: {
      title: 'Términos de Uso — Nexow',
      description:
        'Términos de Uso de los sitios web y la aplicación de Nexow, Inc.: cuentas, uso aceptable, propiedad intelectual, exclusiones de garantía, responsabilidad y ley aplicable.',
    },
    updated: UPDATED,
    governingNote:
      'El idioma vinculante de estos Términos de Uso es el inglés (English). Las traducciones se ofrecen solo por conveniencia y no modifican la versión en inglés.',
    sections: [
      {
        h: '1. Acuerdo',
        paragraphs: [
          `Estos Términos de Uso (“Términos”) constituyen un acuerdo vinculante entre usted y ${ENTITY} (“Nexow”, “nosotros” o “nuestro”) que rige el acceso y el uso de ${WEB}, ${APP} y los servicios relacionados (los “Servicios”).`,
          'Al acceder o usar los Servicios, crear una cuenta o aceptar estos Términos, usted los acepta junto con nuestra Política de Privacidad y nuestra Política de Cookies. Si no está de acuerdo, no use los Servicios.',
          'Si usa los Servicios en nombre de una organización, declara que tiene autoridad para vincularla, y “usted” incluye a esa organización.',
        ],
      },
      {
        h: '2. Los Servicios',
        paragraphs: [
          'Nexow ofrece herramientas para describir, generar, configurar, visualizar y compartir widgets y espacios de trabajo, incluidas conexiones a fuentes de datos de terceros y funciones opcionales de colaboración, comunidad o marketplace a medida que las pongamos a disposición.',
          'Podemos modificar, suspender o interrumpir funciones, planes o los Servicios (en todo o en parte) con un preaviso razonable cuando sea practicable. Las funciones en vista previa o beta pueden ser inestables y se ofrecen tal cual.',
        ],
      },
      {
        h: '3. Elegibilidad y cuentas',
        paragraphs: [
          'Debe tener al menos la edad de consentimiento digital en su jurisdicción (y, en todo caso, al menos 16 años, o 18 cuando se exija) para usar los Servicios. Debe facilitar información de cuenta veraz y mantener las credenciales en confidencialidad. Usted es responsable de la actividad realizada bajo su cuenta.',
          'Podemos suspender o cancelar cuentas que incumplan estos Términos, supongan un riesgo de seguridad o permanezcan inactivas durante un periodo prolongado.',
        ],
      },
      {
        h: '4. Planes, créditos y pago',
        paragraphs: [
          'Algunas funciones requieren un plan de pago, créditos u otros límites de uso. Los precios, las cuotas incluidas y los periodos de facturación se describen en la página de Planes o en el producto. Salvo indicación en contrario, las tarifas no son reembolsables excepto cuando lo exija la ley.',
          'Usted nos autoriza, a nosotros y a nuestros procesadores de pago, a cargar las tarifas aplicables. Pueden aplicarse impuestos. Podemos cambiar los precios con preaviso; los cambios surten efecto en la siguiente renovación salvo que se indique otra cosa.',
        ],
      },
      {
        h: '5. Su contenido y licencia',
        paragraphs: [
          'Usted conserva la titularidad del contenido que envíe o cree en los Servicios (“Contenido de Usuario”), incluidos prompts, widgets y configuraciones, sin perjuicio de los derechos de terceros y de Nexow sobre nuestra plataforma, plantillas y andamiaje generado que no sea exclusivo de sus entradas.',
          `Usted concede a ${ENTITY} una licencia mundial y no exclusiva para alojar, tratar, transmitir, mostrar y crear obras derivadas del Contenido de Usuario únicamente en la medida necesaria para operar, proteger y mejorar los Servicios y según usted lo indique (p. ej., al compartir o publicar).`,
          'Usted declara que tiene todos los derechos necesarios para enviar Contenido de Usuario y para conectar cualesquiera servicios de terceros, y que el Contenido de Usuario no infringe la ley ni derechos de terceros.',
        ],
      },
      {
        h: '6. Uso aceptable',
        paragraphs: [
          'Debe cumplir nuestra Política de Uso Aceptable y todas las leyes aplicables. No puede hacer un uso indebido de los Servicios, interferir con otros, intentar accesos no autorizados, extraer datos de forma abusiva ni usar los Servicios para trading ilícito, fraude, malware o infracciones.',
          'Nexow es una plataforma de herramientas y visualización. Nada en los Servicios constituye asesoramiento financiero, de inversión, legal o fiscal. Los datos de mercado y los ejemplos pueden ser ilustrativos; usted es el único responsable de las decisiones que tome.',
        ],
      },
      {
        h: '7. Servicios de terceros',
        paragraphs: [
          'Los conectores e integraciones son opcionales y están sujetos a las condiciones de terceros. No somos responsables de la disponibilidad, exactitud, tarifas o prácticas de datos de terceros. Las credenciales que facilite se usan como se describe en la Política de Privacidad.',
        ],
      },
      {
        h: '8. Propiedad intelectual',
        paragraphs: [
          `Los Servicios, incluido el software, la marca, la documentación y el contenido que no sea Contenido de Usuario, son titularidad de ${ENTITY} o de sus licenciantes y están protegidos por las leyes de propiedad intelectual. Salvo el derecho limitado a usar los Servicios conforme a estos Términos, no se concede ningún otro derecho.`,
          'Podemos usar los comentarios que nos facilite sin obligación hacia usted.',
        ],
      },
      {
        h: '9. Confidencialidad y seguridad',
        paragraphs: [
          'No debe intentar sondear, eludir ni perturbar los controles de seguridad. Informe de vulnerabilidades sospechadas de forma responsable. Aplicamos medidas de seguridad razonables, pero no podemos garantizar una seguridad absoluta.',
        ],
      },
      {
        h: '10. Exclusión de garantías',
        paragraphs: [
          'LOS SERVICIOS SE OFRECEN “TAL CUAL” Y “SEGÚN DISPONIBILIDAD”. EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY, RENUNCIAMOS A TODAS LAS GARANTÍAS, EXPRESAS O IMPLÍCITAS, INCLUIDAS LAS DE COMERCIABILIDAD, IDONEIDAD PARA UN FIN PARTICULAR Y NO INFRACCIÓN. NO GARANTIZAMOS QUE LOS SERVICIOS SEAN ININTERRUMPIDOS, EXENTOS DE ERRORES O DE COMPONENTES DAÑINOS, NI QUE LOS RESULTADOS (INCLUIDO EL CONTENIDO GENERADO POR IA) SEAN EXACTOS, COMPLETOS O ADECUADOS PARA SU FINALIDAD.',
        ],
      },
      {
        h: '11. Limitación de responsabilidad',
        paragraphs: [
          `EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY, ${ENTITY} Y SUS ADMINISTRADORES, DIRECTIVOS, EMPLEADOS Y AGENTES NO SERÁN RESPONSABLES DE DAÑOS INDIRECTOS, INCIDENTALES, ESPECIALES, CONSECUENCIALES, EJEMPLARES O PUNITIVOS, NI DE LUCRO CESANTE, PÉRDIDA DE INGRESOS, DATOS O FONDO DE COMERCIO, DERIVADOS DE O RELACIONADOS CON LOS SERVICIOS O ESTOS TÉRMINOS, YA SEA POR CONTRATO, ILÍCITO CIVIL U OTRA TEORÍA, AUNQUE SE HUBIERA ADVERTIDO DE SU POSIBILIDAD.`,
          'NUESTRA RESPONSABILIDAD AGREGADA POR TODAS LAS RECLAMACIONES RELACIONADAS CON LOS SERVICIOS O ESTOS TÉRMINOS NO EXCEDERÁ EL MAYOR DE (A) LOS IMPORTES QUE NOS HAYA PAGADO POR LOS SERVICIOS EN LOS DOCE (12) MESES ANTERIORES A LA RECLAMACIÓN O (B) CIEN DÓLARES ESTADOUNIDENSES (100 USD). ALGUNAS JURISDICCIONES NO PERMITEN CIERTAS LIMITACIONES; EN ESOS CASOS NUESTRA RESPONSABILIDAD SE LIMITA AL MÁXIMO PERMITIDO.',
        ],
      },
      {
        h: '12. Indemnización',
        paragraphs: [
          `Usted defenderá e indemnizará a ${ENTITY} frente a reclamaciones, daños y gastos (incluidos honorarios razonables de abogados) derivados de su Contenido de Usuario, su uso de los Servicios, sus conexiones con terceros o su incumplimiento de estos Términos o de la ley.`,
        ],
      },
      {
        h: '13. Resolución',
        paragraphs: [
          'Puede dejar de usar los Servicios en cualquier momento y solicitar el cierre de la cuenta a través del producto o contactándonos. Podemos suspender o cancelar el acceso por incumplimiento, riesgo o motivos legales. Las cláusulas que por su naturaleza deban sobrevivir (incluida la propiedad intelectual, las exclusiones, las limitaciones, la indemnización y la ley aplicable) sobrevivirán a la resolución.',
        ],
      },
      {
        h: '14. Ley aplicable y controversias',
        paragraphs: [
          `Estos Términos se rigen por las leyes del Estado de Delaware, Estados Unidos, con exclusión de las normas de conflicto de leyes. Sin perjuicio de las protecciones imperativas de consumidores en su país de residencia, los tribunales situados en Delaware (o los tribunales federales con jurisdicción allí) tendrán competencia exclusiva sobre las controversias, salvo que podamos solicitar medidas cautelares en cualquier jurisdicción.`,
          'Si es consumidor en el EEE/Reino Unido, también puede beneficiarse de protecciones locales imperativas y, cuando la ley lo exija, interponer acciones en su lugar de residencia.',
        ],
      },
      {
        h: '15. Cambios',
        paragraphs: [
          'Podemos actualizar estos Términos publicando una versión revisada con fecha actualizada. Los cambios materiales pueden notificarse en el producto o por correo. El uso continuado tras la fecha de entrada en vigor constituye aceptación, salvo que la ley aplicable exija otra cosa.',
        ],
      },
      {
        h: '16. Contacto',
        paragraphs: [
          `Notificaciones legales: ${EMAIL}`,
          `${ENTITY}, ${ADDRESS}`,
          `Web: ${WEB}`,
        ],
      },
    ],
  },
  cookiesPage: {
    badge: 'Cookies',
    title: 'Política de Cookies',
    subtitle:
      `Cómo Nexow, Inc. usa cookies y tecnologías similares en ${WEB} y en la aplicación Nexow.`,
    meta: {
      title: 'Política de Cookies — Nexow',
      description:
        'Política de Cookies de Nexow, Inc.: tipos de cookies, finalidades, consentimiento y cómo gestionar las preferencias.',
    },
    updated: UPDATED,
    governingNote:
      'El idioma vinculante de esta Política de Cookies es el inglés (English). Las traducciones se ofrecen solo por conveniencia y no modifican la versión en inglés.',
    sections: [
      {
        h: '1. Introducción',
        paragraphs: [
          `${ENTITY} (“Nexow”, “nosotros”) usa cookies y tecnologías similares (almacenamiento local, píxeles, SDKs) en ${WEB} y en los Servicios relacionados. Esta Política de Cookies explica qué usamos, por qué y cómo puede controlarlas. Debe leerse junto con nuestra Política de Privacidad.`,
          `Contacto: ${EMAIL} · ${ADDRESS}`,
        ],
      },
      {
        h: '2. ¿Qué son las cookies?',
        paragraphs: [
          'Las cookies son pequeños archivos de texto que se almacenan en su dispositivo. Las tecnologías similares almacenan o leen información de forma comparable. Pueden ser de “sesión” (se eliminan al cerrar el navegador) o “persistentes” (se conservan hasta su caducidad o eliminación), y de “primeras partes” (las establecemos nosotros) o de “terceros” (las establece otro dominio).',
        ],
      },
      {
        h: '3. Cómo usamos las cookies',
        paragraphs: [
          'Estrictamente necesarias: requeridas para seguridad, balanceo de carga, autenticación, almacenamiento del consentimiento y funcionalidad esencial. No requieren consentimiento cuando la ley aplicable prevé una exención.',
          'Preferencias / funcionales: recuerdan el idioma, los ajustes de interfaz u otras elecciones similares.',
          'Analítica / rendimiento: nos ayudan a entender el tráfico y a mejorar el sitio o la app (p. ej., vistas de página agregadas). Cuando se exija (incluido en la UE/Reino Unido), solicitamos consentimiento antes de cookies analíticas no esenciales.',
          'Marketing / publicidad: actualmente no dependemos de cookies publicitarias de terceros en el sitio de marketing. Si eso cambia, actualizaremos esta Política y obtendremos el consentimiento cuando se exija.',
        ],
      },
      {
        h: '4. Almacenamiento local y estado de la app',
        paragraphs: [
          'La aplicación Nexow puede usar almacenamiento del navegador (p. ej., localStorage, IndexedDB) para conservar datos del espacio de trabajo, preferencias o estado de sesión. Ese almacenamiento es necesario para operar las funciones del producto que usted usa y se describe con más detalle en la Política de Privacidad.',
        ],
      },
      {
        h: '5. Consentimiento (Europa y regímenes similares)',
        paragraphs: [
          'Cuando la Directiva ePrivacy / el RGPD (o su equivalente británico) exijan consentimiento para cookies no esenciales, lo solicitaremos antes de establecerlas y respetaremos las retiradas. Las cookies estrictamente necesarias pueden establecerse con independencia de los banners de consentimiento.',
          'Puede cambiar la configuración del navegador para bloquear o eliminar cookies; algunas funciones pueden no funcionar correctamente si se bloquean las cookies esenciales.',
        ],
      },
      {
        h: '6. Estados Unidos y otras regiones',
        paragraphs: [
          'En EE. UU., las divulgaciones sobre cookies apoyan la transparencia bajo las leyes estatales de privacidad (incluidos los conceptos de “venta”/“cesión” de la CCPA/CPRA cuando se usen cookies publicitarias). Los usuarios de Asia-Pacífico pueden tener derechos similares de transparencia y elección bajo leyes locales (p. ej., PDPA, APPI); contáctenos para ejercer los derechos aplicables.',
        ],
      },
      {
        h: '7. Gestión de cookies',
        paragraphs: [
          'Controles del navegador: use las páginas de ayuda de su navegador para rechazar o eliminar cookies.',
          'Controles en el producto / sitio: cuando ofrezcamos una herramienta de preferencias de cookies, úsela para ajustar las categorías no esenciales.',
          `Preguntas: ${EMAIL}`,
        ],
      },
      {
        h: '8. Cambios',
        paragraphs: [
          'Podemos actualizar esta Política de Cookies cuando cambien nuestras prácticas. Consulte la fecha de “Última actualización”. Los cambios materiales se reflejarán en esta página y, cuando se exija, mediante un nuevo consentimiento.',
        ],
      },
    ],
  },
  legalPage: {
    badge: 'Legal',
    title: 'Información legal y societaria',
    subtitle: 'Datos oficiales de la empresa y documentos legales públicos de Nexow, Inc.',
    meta: {
      title: 'Legal — Nexow, Inc.',
      description:
        'Información legal y societaria de Nexow, Inc., incluida la dirección registrada y enlaces a las políticas de Privacidad, Términos, Cookies y Uso Aceptable.',
    },
    updated: UPDATED,
    governingNote:
      'La información societaria y los documentos legales se ofrecen en inglés (English) como idioma vinculante, salvo que la ley exija una versión local obligatoria.',
    sections: [
      {
        h: '1. Datos de la empresa',
        paragraphs: [
          `Entidad jurídica: ${ENTITY}`,
          `Domicilio social / correspondencia: ${ADDRESS}`,
          `Sitio web: ${WEB}`,
          `Aplicación: ${APP}`,
          `Contacto general: ${EMAIL}`,
        ],
      },
      {
        h: '2. Documentos legales públicos',
        paragraphs: [
          'Los siguientes documentos constituyen nuestros contratos legales públicos para el sitio web y la aplicación:',
          '• Política de Privacidad — cómo tratamos la información personal (con enfoque RGPD/CCPA y notas sobre Asia-Pacífico).',
          '• Términos de Uso — condiciones que rigen el uso de los Servicios.',
          '• Política de Cookies — cookies y tecnologías similares.',
          '• Política de Uso Aceptable — conductas prohibidas y exigidas.',
          'Los enlaces están en el pie del sitio y en /privacy, /terms, /cookies y /acceptable-use.',
        ],
      },
      {
        h: '3. Aviso tipo imprint',
        paragraphs: [
          `Para quienes busquen un “aviso legal”, “imprint” o datos de identificación de la empresa: los Servicios son operados por ${ENTITY}, en ${ADDRESS}. Contacto en línea: ${EMAIL}. Esta página pretende satisfacer las expectativas habituales de transparencia en Estados Unidos, Europa y otras regiones para identificar al operador del servicio.`,
        ],
      },
      {
        h: '4. Tratamiento de datos',
        paragraphs: [
          'Nexow trata datos personales según se describe en la Política de Privacidad. Los clientes que necesiten un Acuerdo de Encargo del Tratamiento (DPA) o cláusulas contractuales equivalentes al artículo 28 del RGPD (o equivalente) pueden solicitarlo por correo con el asunto “DPA Request”. Los subencargados estándar y las garantías de transferencia se describen en la Política de Privacidad o se facilitan previa solicitud.',
        ],
      },
      {
        h: '5. Advertencias',
        paragraphs: [
          'Nexow es una plataforma de herramientas y visualización. El contenido del sitio de marketing y de la app (incluidos ejemplos de datos de mercado) no constituye asesoramiento financiero, de inversión, legal ni fiscal. Usted sigue siendo el único responsable del cumplimiento de las leyes aplicables a su uso de venues y datos conectados.',
        ],
      },
      {
        h: '6. Idioma vinculante',
        paragraphs: [
          'El inglés (English) es el idioma vinculante de nuestros documentos legales. La interfaz o los resúmenes en otros idiomas se ofrecen solo por conveniencia y no modifican los términos en inglés, salvo que publiquemos expresamente una versión local vinculante.',
        ],
      },
      {
        h: '7. Contacto para asuntos legales',
        paragraphs: [
          `Correo: ${EMAIL} (asunto: “Legal”)`,
          `Correo postal: ${ENTITY}, ${ADDRESS}`,
        ],
      },
    ],
  },
  acceptableUsePage: {
    badge: 'Uso aceptable',
    title: 'Política de Uso Aceptable',
    subtitle: 'Normas para usar los sitios web de Nexow y la aplicación Nexow de forma responsable y lícita.',
    meta: {
      title: 'Política de Uso Aceptable — Nexow',
      description:
        'Política de Uso Aceptable de Nexow, Inc.: actividades prohibidas, normas de seguridad y medidas de aplicación.',
    },
    updated: UPDATED,
    governingNote:
      'El idioma vinculante de esta Política de Uso Aceptable es el inglés (English). Las traducciones se ofrecen solo por conveniencia.',
    sections: [
      {
        h: '1. Finalidad',
        paragraphs: [
          `Esta Política de Uso Aceptable (“AUP”) se aplica a su uso de los Servicios operados por ${ENTITY}. Complementa los Términos de Uso. Su incumplimiento puede dar lugar a suspensión o cancelación.`,
        ],
      },
      {
        h: '2. Actividades prohibidas',
        paragraphs: [
          'No puede usar los Servicios para: violar la ley o derechos de terceros; distribuir malware, spam o phishing; intentar accesos no autorizados a sistemas, cuentas o datos; interferir o perturbar los Servicios; extraer o recolectar datos de forma que sobrecargue la infraestructura o incumpla las condiciones de terceros; eludir límites de uso o controles de seguridad; falsear su identidad o afiliación; o cargar datos ilícitos, infractores o altamente sensibles y regulados sin autorización.',
          'No puede usar los Servicios para facilitar fraude, manipulación de mercado, evasión de sanciones o actividad de trading ilícita. No debe generar ni desplegar widgets cuyo propósito principal sea el abuso, el engaño o el daño.',
        ],
      },
      {
        h: '3. Credenciales y conectores',
        paragraphs: [
          'Use solo credenciales que esté autorizado a usar. No comparta el acceso a la cuenta de forma insegura. Configure los conectores con el mínimo privilegio. No intente extraer secretos de otros usuarios.',
        ],
      },
      {
        h: '4. IA y resultados generados',
        paragraphs: [
          'No use las funciones de generación para crear contenido ilegal, que infrinja propiedad intelectual o que pretenda engañar a terceros a escala (p. ej., conducta inauténtica coordinada). Usted es responsable de revisar los resultados antes de basarse en ellos.',
        ],
      },
      {
        h: '5. Uso razonable de recursos',
        paragraphs: [
          'Los planes y créditos tienen límites de uso. El consumo automatizado o abusivo que degrade el servicio para otros puede limitarse o bloquearse.',
        ],
      },
      {
        h: '6. Denuncias y aplicación',
        paragraphs: [
          `Denuncie abusos a ${EMAIL} con el asunto “Abuse”. Podemos investigar y retirar contenido, suspender funciones o cancelar cuentas. Podemos comunicar actividad ilícita a las autoridades cuando proceda.`,
        ],
      },
      {
        h: '7. Contacto',
        paragraphs: [
          `${ENTITY}, ${ADDRESS} · ${EMAIL} · ${WEB}`,
        ],
      },
    ],
  },
};
