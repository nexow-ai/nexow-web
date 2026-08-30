import type { LegalBundle } from './types';
import { ADDRESS, APP, CONTACT_BLOCK, EMAIL, ENTITY, WEB } from './shared';

const UPDATED = 'Última atualização: 29 de julho de 2026';

export const pt: LegalBundle = {
  privacyPage: {
    badge: 'Privacidade',
    title: 'Política de Privacidade',
    subtitle:
      'Como a Nexow, Inc. recolhe, utiliza e protege informações pessoais quando utiliza nexow.ai e a aplicação Nexow.',
    meta: {
      title: 'Política de Privacidade — Nexow',
      description:
        'Política de Privacidade da Nexow, Inc.: dados que recolhemos, como os utilizamos, cookies e os seus direitos de privacidade ao abrigo do RGPD, da CCPA/CPRA e de outras leis aplicáveis.',
    },
    updated: UPDATED,
    governingNote:
      'A língua vinculativa desta Política de Privacidade é o inglês (English). As traduções são disponibilizadas apenas por conveniência e não alteram a versão em inglês.',
    sections: [
      {
        h: '1. Quem somos',
        paragraphs: [
          `Esta Política de Privacidade descreve como a ${ENTITY} (“Nexow”, “nós” ou “nosso”) trata informações pessoais no âmbito dos nossos websites (incluindo ${WEB}), da aplicação web Nexow (${APP}) e dos serviços relacionados (coletivamente, os “Serviços”).`,
          `Responsável pelo tratamento / entidade: ${CONTACT_BLOCK}`,
          'Se tiver questões sobre esta Política ou pretender exercer direitos de privacidade, contacte-nos através do endereço ou email acima indicados com o assunto “Privacy Request”.',
        ],
      },
      {
        h: '2. Âmbito',
        paragraphs: [
          'Esta Política aplica-se às informações pessoais que tratamos quando visita o nosso site de marketing, cria ou utiliza uma conta Nexow, constrói ou partilha workspaces e widgets, liga serviços de terceiros, adquire ou gere um plano, ou interage de outra forma com os Serviços.',
          'Não se aplica a websites, aplicações, venues ou APIs de terceiros que escolha ligar; estes regem-se pelas respetivas condições de privacidade. Quando um conector é executado no seu browser perante um terceiro, esse terceiro é normalmente um responsável independente pelos dados que lhe envia.',
        ],
      },
      {
        h: '3. Informações que recolhemos',
        paragraphs: [
          'Dados de conta e perfil: endereço de email, nome apresentado, identificadores de autenticação, estado do plano ou faturação, preferências e definições similares da conta.',
          'Dados de workspace e produto: widgets, prompts, código ou configurações gerados, versões, registos, itens de biblioteca, estado de sincronização, metadados de colaboração e conteúdo relacionado que cria ou carrega nos Serviços.',
          'Dados de ligação: tokens, chaves API ou credenciais OAuth que fornece para conectores de terceiros (tratados conforme descrito em “Ligações e credenciais”), bem como metadados técnicos necessários para manter essas ligações.',
          'Dados de utilização e dispositivo: endereço IP, tipo de browser, informações de dispositivo ou sistema operativo, localização aproximada derivada do IP, referenciador, páginas visualizadas, utilização de funcionalidades, eventos de desempenho e diagnóstico, e telemetria similar necessária para operar e proteger os Serviços.',
          'Comunicações: mensagens que nos envia (suporte, privacidade ou pedidos legais) e a correspondência relacionada.',
          'Dados de pagamento: se adquire um plano pago, o método de pagamento e os dados de faturação são normalmente processados pelo nosso processador de pagamentos; recebemos metadados de faturação limitados (p. ex., plano, estado, últimos quatro dígitos ou tokens equivalentes) e não o número completo do cartão quando o processador o permite.',
          'Cookies e tecnologias similares: consulte a nossa Política de Cookies para mais detalhes.',
        ],
      },
      {
        h: '4. Como utilizamos as informações',
        paragraphs: [
          'Utilizamos informações pessoais para: prestar, manter e melhorar os Serviços; autenticar utilizadores e proteger contas; armazenar e sincronizar o conteúdo de workspace que solicita; processar transações e enviar avisos de serviço; responder a pedidos de suporte e privacidade; monitorizar fiabilidade, abusos e segurança; cumprir a lei; e, quando permitido, comunicar atualizações do produto (pode opor-se ao marketing não essencial).',
          'Não vendemos informações pessoais conforme a “venda” é comummente definida ao abrigo da CCPA/CPRA, e não partilhamos informações pessoais para publicidade comportamental entre contextos nos termos da lei da Califórnia, exceto conforme divulgado na nossa Política de Cookies se introduzirmos cookies publicitários (caso em que atualizaremos esta Política e disponibilizaremos as opções de exclusão exigidas).',
        ],
      },
      {
        h: '5. Bases jurídicas (EEE / Reino Unido / Suíça)',
        paragraphs: [
          'Quando se aplicam o RGPD da UE, o UK GDPR ou a LPD suíça, tratamos dados pessoais com base numa ou mais das seguintes: execução de um contrato (prestação dos Serviços que solicita); interesses legítimos (proteção e melhoria dos Serviços, prevenção de abusos, analítica básica), ponderados face aos seus direitos; consentimento (quando exigido, p. ex. determinados cookies ou marketing opcional); e obrigação legal (conservação de registos ou resposta a pedidos lícitos).',
        ],
      },
      {
        h: '6. Ligações e credenciais',
        paragraphs: [
          'Quando um serviço de terceiros o permite, a Nexow pode ligar-se diretamente a partir do seu browser de modo que as credenciais sejam utilizadas principalmente para comunicar com esse serviço. Alguns serviços requerem um proxy ou componente no servidor; nesses casos tratamos apenas o necessário para cumprir o pedido e operar o conector.',
          'É responsável por garantir que tem direito a ligar cada serviço e por configurar credenciais com o mínimo de privilégios. Revogue o acesso no serviço de terceiros e na Nexow quando já não necessitar de uma ligação.',
        ],
      },
      {
        h: '7. Conteúdo gerado e funcionalidades de IA',
        paragraphs: [
          'Quando utiliza funcionalidades de geração ou assistidas por IA, prompts e contexto relacionado podem ser tratados por nós e/ou por fornecedores de modelos ou infraestrutura que utilizamos para prestar a funcionalidade. Utilizamos esse tratamento para gerar resultados no seu workspace e para operar e melhorar os Serviços, nos termos dos nossos contratos com esses fornecedores.',
          'Não envie segredos, dados pessoais regulamentados ou dados confidenciais de terceiros em prompts, salvo se tiver uma base lícita e aceitar o risco de que esse conteúdo possa ser tratado por subcontratantes envolvidos na geração.',
        ],
      },
      {
        h: '8. Partilha e subcontratantes',
        paragraphs: [
          'Partilhamos informações pessoais com: prestadores de serviços (alojamento, analítica, email, pagamentos, monitorização de erros, fornecedores de IA/modelos) vinculados por contratos que limitam a utilização à prestação de serviços a nós; consultores profissionais; autoridades quando exigido por lei ou para proteger direitos e segurança; e sucessores numa fusão, aquisição ou transferência de ativos (com aviso quando exigido).',
          'Também podemos partilhar informações que escolhe tornar públicas ou partilhar com outros utilizadores (p. ex., widgets publicados, funcionalidades de comunidade) de acordo com as suas definições.',
        ],
      },
      {
        h: '9. Transferências internacionais',
        paragraphs: [
          `A ${ENTITY} está sediada nos Estados Unidos. Se acede aos Serviços a partir do EEE, do Reino Unido, da Suíça ou de outras regiões, as suas informações podem ser transferidas e tratadas nos Estados Unidos e noutros países com regras de proteção de dados diferentes.`,
          'Quando exigido, utilizamos garantias adequadas para transferências (como Cláusulas Contratuais-Tipo ou mecanismos sucessores) e adotamos medidas que consideramos razoáveis para proteger informações pessoais.',
        ],
      },
      {
        h: '10. Conservação',
        paragraphs: [
          'Conservamos informações pessoais enquanto a sua conta estiver ativa ou for necessário para prestar os Serviços, cumprir obrigações legais, resolver litígios e fazer valer acordos. O conteúdo de workspace persiste normalmente até o eliminar ou encerrar a conta, sujeito a cópias de segurança e períodos de retenção legal. Pode solicitar a eliminação conforme descrito abaixo; algumas cópias residuais podem permanecer em backups durante um período limitado.',
        ],
      },
      {
        h: '11. Segurança',
        paragraphs: [
          'Implementamos medidas técnicas e organizativas concebidas para proteger informações pessoais (controlos de acesso, encriptação em trânsito quando apropriado, práticas de privilégio mínimo). Nenhum método de transmissão ou armazenamento é completamente seguro; é responsável por salvaguardar as credenciais da conta e os dispositivos.',
        ],
      },
      {
        h: '12. Os seus direitos — Europa e Reino Unido (RGPD)',
        paragraphs: [
          'Se se encontra no EEE, no Reino Unido ou na Suíça, pode ter direito a aceder, retificar, eliminar, limitar ou opor-se a determinados tratamentos; à portabilidade dos dados; e a retirar o consentimento quando o tratamento se baseie nele, sem afetar o tratamento lícito anterior. Pode apresentar reclamação junto da autoridade de controlo local.',
          `Para exercer estes direitos, escreva para ${EMAIL} com o assunto “Privacy Request”. Poderemos ter de verificar a sua identidade antes de satisfazer o pedido.`,
        ],
      },
      {
        h: '13. Os seus direitos — Estados Unidos (incluindo CCPA/CPRA)',
        paragraphs: [
          'Conforme o seu estado de residência (incluindo a Califórnia ao abrigo da CCPA/CPRA), pode ter direito a conhecer/aceder, eliminar, corrigir e opor-se à venda ou partilha de informações pessoais, e a limitar a utilização de informações pessoais sensíveis quando aplicável. Não o discriminaremos por exercer direitos de privacidade.',
          `Envie pedidos para ${EMAIL} (assunto: “Privacy Request”) ou por correio para ${ADDRESS}. Agentes autorizados podem apresentar pedidos conforme permitido por lei; poderemos exigir prova de autorização e verificação de identidade.`,
          'Se disponibilizarmos um controlo “Do Not Sell or Share” ou similar (incluindo Global Privacy Control quando o respeitamos), descrevê-lo-emos na Política de Cookies ou nas definições do produto.',
        ],
      },
      {
        h: '14. Notas sobre Ásia-Pacífico (nível geral)',
        paragraphs: [
          `Se se encontra em jurisdições como Singapura (PDPA), Japão (APPI), Coreia do Sul (PIPA) ou outras regiões da Ásia-Pacífico com leis de dados pessoais, tratamos informações conforme descrito nesta Política e de acordo com requisitos locais aplicáveis na medida em que se aplicam à ${ENTITY} como prestador norte-americano de Serviços online.`,
          `Pode contactar-nos em ${EMAIL} para solicitar acesso, retificação ou eliminação conforme a lei aplicável. Quando a lei local exija um representante local ou avisos adicionais, atualizaremos esta Política ou publicaremos avisos específicos por região.`,
        ],
      },
      {
        h: '15. Menores',
        paragraphs: [
          'Os Serviços não se destinam a menores de 16 anos (ou à idade superior exigida na sua jurisdição). Não recolhemos conscientemente informações pessoais de menores. Se acredita que um menor nos forneceu informações, contacte-nos e tomaremos medidas adequadas para as eliminar.',
        ],
      },
      {
        h: '16. Site de marketing',
        paragraphs: [
          'O nosso site de marketing é predominantemente estático e utiliza analítica e cookies limitados, conforme descrito na Política de Cookies. Não vendemos dados pessoais recolhidos no site de marketing. Links de saída (incluindo para a app) são identificados quando praticável.',
        ],
      },
      {
        h: '17. Alterações',
        paragraphs: [
          'Podemos atualizar esta Política periodicamente. A data de “Última atualização” alterar-se-á quando publicarmos revisões. Alterações materiais podem ser destacadas no site ou notificadas por email quando apropriado. A utilização continuada dos Serviços após uma atualização constitui aceitação da Política revista na medida permitida por lei.',
        ],
      },
      {
        h: '18. Contacto',
        paragraphs: [
          `Pedidos de privacidade e proteção de dados: ${EMAIL}`,
          `Correio: ${ENTITY}, ${ADDRESS}`,
          `Web: ${WEB}`,
        ],
      },
    ],
  },
  termsPage: {
    badge: 'Termos',
    title: 'Termos de Utilização',
    subtitle: 'O acordo entre si e a Nexow, Inc. para a utilização de nexow.ai e da aplicação Nexow.',
    meta: {
      title: 'Termos de Utilização — Nexow',
      description:
        'Termos de Utilização dos websites e da aplicação da Nexow, Inc.: contas, utilização aceitável, propriedade intelectual, exclusões de garantia, responsabilidade e lei aplicável.',
    },
    updated: UPDATED,
    governingNote:
      'A língua vinculativa destes Termos de Utilização é o inglês (English). As traduções são disponibilizadas apenas por conveniência e não alteram a versão em inglês.',
    sections: [
      {
        h: '1. Acordo',
        paragraphs: [
          `Estes Termos de Utilização (“Termos”) constituem um acordo vinculativo entre si e a ${ENTITY} (“Nexow”, “nós” ou “nosso”) que regula o acesso e a utilização de ${WEB}, ${APP} e dos serviços relacionados (os “Serviços”).`,
          'Ao aceder ou utilizar os Serviços, criar uma conta ou aceitar estes Termos, concorda com estes, bem como com a nossa Política de Privacidade e a nossa Política de Cookies. Se não concordar, não utilize os Serviços.',
          'Se utilizar os Serviços em nome de uma organização, declara que tem autoridade para a vincular, e “si” inclui essa organização.',
        ],
      },
      {
        h: '2. Os Serviços',
        paragraphs: [
          'A Nexow disponibiliza ferramentas para descrever, gerar, configurar, visualizar e partilhar widgets e workspaces, incluindo ligações a fontes de dados de terceiros e funcionalidades opcionais de colaboração, comunidade ou marketplace à medida que as disponibilizamos.',
          'Podemos modificar, suspender ou descontinuar funcionalidades, planos ou os Serviços (no todo ou em parte) com aviso prévio razoável quando praticável. Funcionalidades em pré-visualização ou beta podem ser instáveis e são fornecidas tal como estão.',
        ],
      },
      {
        h: '3. Elegibilidade e contas',
        paragraphs: [
          'Deve ter pelo menos a idade de consentimento digital na sua jurisdição (e, em qualquer caso, pelo menos 16 anos, ou 18 quando exigido) para utilizar os Serviços. Deve fornecer informações de conta verídicas e manter as credenciais confidenciais. É responsável pela atividade realizada na sua conta.',
          'Podemos suspender ou encerrar contas que violem estes Termos, representem um risco de segurança ou permaneçam inativas durante um período prolongado.',
        ],
      },
      {
        h: '4. Planos, créditos e pagamento',
        paragraphs: [
          'Algumas funcionalidades requerem um plano pago, créditos ou outros limites de utilização. Preços, quotas incluídas e períodos de faturação são descritos na página Planos ou no produto. Salvo indicação em contrário, as taxas não são reembolsáveis, exceto quando exigido por lei.',
          'Autoriza-nos, a nós e aos nossos processadores de pagamento, a cobrar as taxas aplicáveis. Podem aplicar-se impostos. Podemos alterar preços com aviso prévio; as alterações produzem efeito na renovação seguinte, salvo indicação em contrário.',
        ],
      },
      {
        h: '5. O seu conteúdo e licença',
        paragraphs: [
          'Conserva a titularidade do conteúdo que submete ou cria nos Serviços (“Conteúdo do Utilizador”), incluindo prompts, widgets e configurações, sem prejuízo dos direitos de terceiros e da Nexow sobre a nossa plataforma, modelos e scaffolding gerado que não seja exclusivo dos seus inputs.',
          `Concede à ${ENTITY} uma licença mundial e não exclusiva para alojar, tratar, transmitir, apresentar e criar obras derivadas do Conteúdo do Utilizador apenas na medida necessária para operar, proteger e melhorar os Serviços e conforme indicado por si (p. ex., ao partilhar ou publicar).`,
          'Declara que possui todos os direitos necessários para submeter Conteúdo do Utilizador e para ligar quaisquer serviços de terceiros, e que o Conteúdo do Utilizador não viola a lei nem direitos de terceiros.',
        ],
      },
      {
        h: '6. Utilização aceitável',
        paragraphs: [
          'Deve cumprir a nossa Política de Utilização Aceitável e todas as leis aplicáveis. Não pode fazer uso indevido dos Serviços, interferir com outros, tentar acessos não autorizados, extrair dados de forma abusiva, nem utilizar os Serviços para trading ilícito, fraude, malware ou infrações.',
          'A Nexow é uma plataforma de ferramentas e visualização. Nada nos Serviços constitui aconselhamento financeiro, de investimento, legal ou fiscal. Dados de mercado e exemplos podem ser ilustrativos; é o único responsável pelas decisões que toma.',
        ],
      },
      {
        h: '7. Serviços de terceiros',
        paragraphs: [
          'Conectores e integrações são opcionais e sujeitos aos termos de terceiros. Não somos responsáveis pela disponibilidade, exatidão, taxas ou práticas de dados de terceiros. As credenciais que fornece são utilizadas conforme descrito na Política de Privacidade.',
        ],
      },
      {
        h: '8. Propriedade intelectual',
        paragraphs: [
          `Os Serviços, incluindo software, marca, documentação e conteúdo que não seja Conteúdo do Utilizador, são propriedade da ${ENTITY} ou dos seus licenciantes e estão protegidos pelas leis de propriedade intelectual. Salvo o direito limitado de utilizar os Serviços nos termos destes Termos, não é concedido qualquer outro direito.`,
          'Podemos utilizar o feedback que nos fornece sem obrigação para consigo.',
        ],
      },
      {
        h: '9. Confidencialidade e segurança',
        paragraphs: [
          'Não deve tentar sondar, contornar ou perturbar controlos de segurança. Reporte vulnerabilidades suspeitas de forma responsável. Implementamos medidas de segurança razoáveis, mas não podemos garantir segurança absoluta.',
        ],
      },
      {
        h: '10. Exclusão de garantias',
        paragraphs: [
          'OS SERVIÇOS SÃO FORNECIDOS “TAL COMO ESTÃO” E “CONFORME DISPONÍVEIS”. NA MÁXIMA MEDIDA PERMITIDA POR LEI, EXCLUÍMOS TODAS AS GARANTIAS, EXPRESSAS OU IMPLÍCITAS, INCLUINDO COMERCIALIZAÇÃO, ADEQUAÇÃO A UM FIM ESPECÍFICO E NÃO VIOLAÇÃO. NÃO GARANTIMOS QUE OS SERVIÇOS SERÃO ININTERRUPTOS, ISENTOS DE ERROS OU DE COMPONENTES PREJUDICIAIS, NEM QUE OS RESULTADOS (INCLUINDO CONTEÚDO GERADO POR IA) SERÃO EXATOS, COMPLETOS OU ADEQUADOS AO SEU FIM.',
        ],
      },
      {
        h: '11. Limitação de responsabilidade',
        paragraphs: [
          `NA MÁXIMA MEDIDA PERMITIDA POR LEI, A ${ENTITY.toUpperCase()} E OS SEUS ADMINISTRADORES, DIRETORES, EMPREGADOS E AGENTES NÃO SERÃO RESPONSÁVEIS POR DANOS INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQUENCIAIS, EXEMPLARES OU PUNITIVOS, NEM POR LUCROS CESSANTES, PERDA DE RECEITAS, DADOS OU FUNDO DE COMÉRCIO, DECORRENTES DE OU RELACIONADOS COM OS SERVIÇOS OU ESTES TERMOS, SEJA POR CONTRATO, ATO ILÍCITO OU OUTRO, AINDA QUE TENHAM SIDO ADVERTIDOS DA POSSIBILIDADE.`,
          'A NOSSA RESPONSABILIDADE AGREGADA POR TODAS AS RECLAMAÇÕES RELACIONADAS COM OS SERVIÇOS OU ESTES TERMOS NÃO EXCEDERÁ O MAIOR DE (A) OS VALORES QUE NOS PAGOU PELOS SERVIÇOS NOS DOZE (12) MESES ANTERIORES À RECLAMAÇÃO OU (B) CEM DÓLARES AMERICANOS (100 USD). ALGUMAS JURISDIÇÕES NÃO PERMITEM CERTAS LIMITAÇÕES; NESSAS SITUAÇÕES, A NOSSA RESPONSABILIDADE LIMITA-SE AO MÁXIMO PERMITIDO.',
        ],
      },
      {
        h: '12. Indemnização',
        paragraphs: [
          `Defenderá e indemnizará a ${ENTITY} contra reclamações, danos e despesas (incluindo honorários razoáveis de advogados) decorrentes do seu Conteúdo do Utilizador, da sua utilização dos Serviços, das suas ligações a terceiros ou da violação destes Termos ou da lei.`,
        ],
      },
      {
        h: '13. Resolução',
        paragraphs: [
          'Pode deixar de utilizar os Serviços a qualquer momento e solicitar o encerramento da conta através do produto ou contactando-nos. Podemos suspender ou terminar o acesso por incumprimento, risco ou motivos legais. As cláusulas que por natureza devam subsistir (incluindo propriedade intelectual, exclusões, limitações, indemnização e lei aplicável) subsistem após a resolução.',
        ],
      },
      {
        h: '14. Lei aplicável e litígios',
        paragraphs: [
          `Estes Termos regem-se pelas leis do Estado de Delaware, Estados Unidos, com exclusão das normas de conflito de leis. Sem prejuízo das proteções imperativas de consumidores no seu país de residência, os tribunais situados em Delaware (ou tribunais federais com jurisdição aí) terão jurisdição exclusiva sobre litígios, exceto que podemos solicitar medidas cautelares em qualquer jurisdição.`,
          'Se for consumidor no EEE/Reino Unido, também pode beneficiar de proteções locais imperativas e, quando exigido por lei, intentar ações no seu local de residência.',
        ],
      },
      {
        h: '15. Alterações',
        paragraphs: [
          'Podemos atualizar estes Termos publicando uma versão revista com data atualizada. Alterações materiais podem ser notificadas no produto ou por email. A utilização continuada após a data de entrada em vigor constitui aceitação, exceto quando a lei aplicável exija o contrário.',
        ],
      },
      {
        h: '16. Contacto',
        paragraphs: [
          `Notificações legais: ${EMAIL}`,
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
      'Como a Nexow, Inc. utiliza cookies e tecnologias similares em nexow.ai e na aplicação Nexow.',
    meta: {
      title: 'Política de Cookies — Nexow',
      description:
        'Política de Cookies da Nexow, Inc.: tipos de cookies, finalidades, consentimento e gestão de preferências.',
    },
    updated: UPDATED,
    governingNote:
      'A língua vinculativa desta Política de Cookies é o inglês (English). As traduções são disponibilizadas apenas por conveniência e não alteram a versão em inglês.',
    sections: [
      {
        h: '1. Introdução',
        paragraphs: [
          `A ${ENTITY} (“Nexow”, “nós”) utiliza cookies e tecnologias similares (armazenamento local, pixels, SDKs) em ${WEB} e nos Serviços relacionados. Esta Política de Cookies explica o que utilizamos, porquê e como pode controlá-los. Deve ser lida em conjunto com a nossa Política de Privacidade.`,
          `Contacto: ${EMAIL} · ${ADDRESS}`,
        ],
      },
      {
        h: '2. O que são cookies',
        paragraphs: [
          'Cookies são pequenos ficheiros de texto armazenados no seu dispositivo. Tecnologias similares armazenam ou leem informações de forma comparável. Podem ser de “sessão” (eliminados ao fechar o browser) ou “persistentes” (conservados até expiração ou eliminação), e de “primeira parte” (definidos por nós) ou “terceira parte” (definidos por outro domínio).',
        ],
      },
      {
        h: '3. Como utilizamos cookies',
        paragraphs: [
          'Estritamente necessários: exigidos para segurança, balanceamento de carga, autenticação, armazenamento de consentimento e funcionalidade essencial. Não requerem consentimento quando a lei aplicável prevê uma isenção.',
          'Preferências / funcionais: memorizam idioma, definições de interface ou escolhas similares.',
          'Analítica / desempenho: ajudam-nos a compreender tráfego e a melhorar o site ou a app (p. ex., visualizações de página agregadas). Quando exigido (incluindo na UE/Reino Unido), solicitamos consentimento antes de cookies analíticos não essenciais.',
          'Marketing / publicidade: atualmente não dependemos de cookies publicitários de terceiros no site de marketing. Se isso mudar, atualizaremos esta Política e obteremos consentimento quando exigido.',
        ],
      },
      {
        h: '4. Armazenamento local e estado da app',
        paragraphs: [
          'A aplicação Nexow pode utilizar armazenamento do browser (p. ex., localStorage, IndexedDB) para conservar dados de workspace, preferências ou estado de sessão. Esse armazenamento é necessário para operar as funcionalidades do produto que utiliza e é descrito com mais detalhe na Política de Privacidade.',
        ],
      },
      {
        h: '5. Consentimento (Europa e regimes similares)',
        paragraphs: [
          'Quando a Diretiva ePrivacy / o RGPD (ou equivalente britânico) exigem consentimento para cookies não essenciais, solicitá-lo-emos antes de os definir e respeitaremos revogações. Cookies estritamente necessários podem ser definidos independentemente de banners de consentimento.',
          'Pode alterar as definições do browser para bloquear ou eliminar cookies; algumas funcionalidades podem não funcionar corretamente se cookies essenciais forem bloqueados.',
        ],
      },
      {
        h: '6. Estados Unidos e outras regiões',
        paragraphs: [
          'Nos EUA, as divulgações sobre cookies apoiam a transparência ao abrigo das leis estatais de privacidade (incluindo os conceitos de “venda”/“partilha” da CCPA/CPRA quando cookies publicitários são utilizados). Utilizadores da Ásia-Pacífico podem ter direitos similares de transparência e escolha ao abrigo de leis locais (p. ex., PDPA, APPI); contacte-nos para exercer direitos aplicáveis.',
        ],
      },
      {
        h: '7. Gestão de cookies',
        paragraphs: [
          'Controlos do browser: utilize as páginas de ajuda do browser para recusar ou eliminar cookies.',
          'Controlos no produto / site: quando disponibilizarmos uma ferramenta de preferências de cookies, utilize-a para ajustar categorias não essenciais.',
          `Questões: ${EMAIL}`,
        ],
      },
      {
        h: '8. Alterações',
        paragraphs: [
          'Podemos atualizar esta Política de Cookies quando as nossas práticas mudarem. Consulte a data de “Última atualização”. Alterações materiais serão refletidas nesta página e, quando exigido, mediante novo consentimento.',
        ],
      },
    ],
  },
  legalPage: {
    badge: 'Legal',
    title: 'Informação legal e societária',
    subtitle: 'Dados oficiais da empresa e documentos legais públicos da Nexow, Inc.',
    meta: {
      title: 'Legal — Nexow, Inc.',
      description:
        'Informação legal e societária da Nexow, Inc., incluindo endereço registado e links para as políticas de Privacidade, Termos, Cookies e Utilização Aceitável.',
    },
    updated: UPDATED,
    governingNote:
      'A informação societária e os documentos legais são disponibilizados em inglês (English) como língua vinculativa, salvo quando a lei exija uma versão local obrigatória.',
    sections: [
      {
        h: '1. Dados da empresa',
        paragraphs: [
          `Entidade jurídica: ${ENTITY}`,
          `Sede social / endereço postal: ${ADDRESS}`,
          `Website: ${WEB}`,
          `Aplicação: ${APP}`,
          `Contacto geral: ${EMAIL}`,
        ],
      },
      {
        h: '2. Documentos legais públicos',
        paragraphs: [
          'Os seguintes documentos constituem os nossos contratos legais públicos para o website e a aplicação:',
          '• Política de Privacidade — como tratamos informações pessoais (com enfoque RGPD/CCPA e notas sobre Ásia-Pacífico).',
          '• Termos de Utilização — condições que regem a utilização dos Serviços.',
          '• Política de Cookies — cookies e tecnologias similares.',
          '• Política de Utilização Aceitável — condutas proibidas e exigidas.',
          'Os links estão no rodapé do site e em /privacy, /terms, /cookies e /acceptable-use.',
        ],
      },
      {
        h: '3. Aviso tipo imprint',
        paragraphs: [
          `Para quem procura um “aviso legal”, “imprint” ou dados de identificação da empresa: os Serviços são operados pela ${ENTITY}, com sede em ${ADDRESS}. Contacto online: ${EMAIL}. Esta página destina-se a satisfazer as expectativas habituais de transparência nos Estados Unidos, na Europa e noutras regiões para identificar o operador do serviço.`,
        ],
      },
      {
        h: '4. Tratamento de dados',
        paragraphs: [
          'A Nexow trata dados pessoais conforme descrito na Política de Privacidade. Clientes que necessitem de um Data Processing Addendum (DPA) ou cláusulas contratuais equivalentes ao artigo 28.º do RGPD (ou equivalente) podem solicitá-lo por email com o assunto “DPA Request”. Subcontratantes padrão e garantias de transferência são descritos na Política de Privacidade ou fornecidos mediante pedido.',
        ],
      },
      {
        h: '5. Avisos legais',
        paragraphs: [
          'A Nexow é uma plataforma de ferramentas e visualização. O conteúdo do site de marketing e da app (incluindo exemplos de dados de mercado) não constitui aconselhamento financeiro, de investimento, legal ou fiscal. Continua a ser o único responsável pelo cumprimento das leis aplicáveis à sua utilização de venues e dados ligados.',
        ],
      },
      {
        h: '6. Língua vinculativa',
        paragraphs: [
          'O inglês (English) é a língua vinculativa dos nossos documentos legais. A interface ou resumos noutras línguas são disponibilizados apenas por conveniência e não alteram os termos em inglês, salvo quando publicarmos expressamente uma versão local vinculativa.',
        ],
      },
      {
        h: '7. Contacto para assuntos legais',
        paragraphs: [
          `Email: ${EMAIL} (assunto: “Legal”)`,
          `Correio: ${ENTITY}, ${ADDRESS}`,
        ],
      },
    ],
  },
  acceptableUsePage: {
    badge: 'Utilização aceitável',
    title: 'Política de Utilização Aceitável',
    subtitle: 'Regras para utilizar os websites Nexow e a aplicação Nexow de forma responsável e lícita.',
    meta: {
      title: 'Política de Utilização Aceitável — Nexow',
      description:
        'Política de Utilização Aceitável da Nexow, Inc.: atividades proibidas, regras de segurança e medidas de aplicação.',
    },
    updated: UPDATED,
    governingNote:
      'A língua vinculativa desta Política de Utilização Aceitável é o inglês (English). As traduções são disponibilizadas apenas por conveniência.',
    sections: [
      {
        h: '1. Finalidade',
        paragraphs: [
          `Esta Política de Utilização Aceitável (“AUP”) aplica-se à sua utilização dos Serviços operados pela ${ENTITY}. Complementa os Termos de Utilização. A violação pode resultar em suspensão ou encerramento.`,
        ],
      },
      {
        h: '2. Atividades proibidas',
        paragraphs: [
          'Não pode utilizar os Serviços para: violar a lei ou direitos de terceiros; distribuir malware, spam ou phishing; tentar acessos não autorizados a sistemas, contas ou dados; interferir ou perturbar os Serviços; extrair ou recolher dados de forma que sobrecarregue a infraestrutura ou viole termos de terceiros; contornar limites de utilização ou controlos de segurança; falsear a sua identidade ou afiliação; ou carregar dados ilícitos, infractores ou altamente sensíveis e regulamentados sem autorização.',
          'Não pode utilizar os Serviços para facilitar fraude, manipulação de mercado, evasão de sanções ou atividade de trading ilícita. Não deve gerar nem implementar widgets cujo propósito principal seja abuso, engano ou dano.',
        ],
      },
      {
        h: '3. Credenciais e conectores',
        paragraphs: [
          'Utilize apenas credenciais que esteja autorizado a usar. Não partilhe acesso à conta de forma insegura. Configure conectores com o mínimo de privilégios. Não tente extrair segredos de outros utilizadores.',
        ],
      },
      {
        h: '4. IA e resultados gerados',
        paragraphs: [
          'Não utilize funcionalidades de geração para criar conteúdo ilegal, que viole propriedade intelectual ou destinado a enganar terceiros em escala (p. ex., conduta inautêntica coordenada). É responsável por rever os resultados antes de neles confiar.',
        ],
      },
      {
        h: '5. Utilização razoável de recursos',
        paragraphs: [
          'Planos e créditos têm limites de utilização. Consumo automatizado ou abusivo que degrade o serviço para outros pode ser limitado ou bloqueado.',
        ],
      },
      {
        h: '6. Denúncias e aplicação',
        paragraphs: [
          `Denuncie abusos para ${EMAIL} com o assunto “Abuse”. Podemos investigar e remover conteúdo, suspender funcionalidades ou encerrar contas. Podemos reportar atividade ilegal às autoridades quando apropriado.`,
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
