/* Meu Direito V2 — base jurídica controlada.
   Extraída sem alteração de conteúdo de "Meu Direito IA V1.0.2.dc.html" (kb-2026-08-14).
   Não editar regras aqui sem atualizar source_manifest e regression_results. */
(function () {
const V = '14/08/2026';
const APPV = '1.0.2';
const KB = 'kb-2026-08-14';

const SRC = {
  refugio: { org: 'GOV.BR / MJSP', title: 'Solicitar refúgio', url: 'https://www.gov.br/pt-br/servicos/solicitar-refugio', jur: 'federal', status: 'Verificada', dynamic: false },
  conareServicos: { org: 'Ministério da Justiça', title: 'Serviços da Coordenação-Geral do Conare', url: 'https://www.gov.br/mj/pt-br/assuntos/seus-direitos/refugio/servicos', jur: 'federal', status: 'Verificada', dynamic: false },
  sisconare: { org: 'Ministério da Justiça', title: 'Sisconare — Sistema do Conare', url: 'https://www.gov.br/mj/pt-br/assuntos/seus-direitos/refugio/sisconare', jur: 'federal', status: 'Verificada', dynamic: false },
  dprnm: { org: 'GOV.BR', title: 'Obter Documento Provisório de Registro Nacional Migratório', url: 'https://www.gov.br/pt-br/servicos/obter-documento-provisorio-de-registro-nacional-migratorio', jur: 'federal', status: 'Verificada', dynamic: false },
  protocolo: { org: 'GOV.BR', title: 'Renovar protocolo de refúgio (Sisconare)', url: 'https://www.gov.br/pt-br/servicos/renovar-protocolo-de-refugio-para-solicitante-que-esta-no-sisconare', jur: 'federal', status: 'Verificada', dynamic: false },
  apatridia: { org: 'GOV.BR / MJSP', title: 'Obter reconhecimento como apátrida', url: 'https://www.gov.br/pt-br/servicos/obter-reconhecimento-como-apatrida', jur: 'federal', status: 'Verificada', dynamic: false },
  apatridia_mj: { org: 'Ministério da Justiça', title: 'Apatridia — informações institucionais', url: 'https://www.gov.br/mj/pt-br/assuntos/seus-direitos/migracoes/apatridia', jur: 'federal', status: 'Verificada', dynamic: false },
  crnm2via: { org: 'GOV.BR', title: 'Solicitar 2ª via de CRNM', url: 'https://www.gov.br/pt-br/servicos/solicitar-2a-via-de-carteira-de-registro-nacional-migratorio-crnm', jur: 'federal', status: 'Verificada', dynamic: false },
  crnmSubst: { org: 'GOV.BR', title: 'Obter Carteira de Registro Nacional Migratório (emissão e substituição)', url: 'https://www.gov.br/pt-br/servicos/obter-carteira-de-registro-nacional-migratorio', jur: 'federal', status: 'Verificada', dynamic: false },
  faqPf: { org: 'Polícia Federal', title: 'Dúvidas frequentes — imigração', url: 'https://www.gov.br/pf/pt-br/assuntos/imigracao/pt/duvidas', jur: 'federal', status: 'Verificada', dynamic: true },
  residencia: { org: 'GOV.BR', title: 'Obter autorização de residência e CRNM', url: 'https://www.gov.br/pt-br/servicos/obter-autorizacao-de-residencia-e-carteira-de-registro-migratorio', jur: 'federal', status: 'Revisão periódica', dynamic: true },
  taxas: { org: 'Polícia Federal', title: 'Taxas de migração', url: 'https://www.gov.br/pf/pt-br/assuntos/imigracao/card/taxas', jur: 'federal', status: 'Revisão periódica', dynamic: true },
  docsPf: { org: 'Polícia Federal', title: 'Documentação exigida — imigração', url: 'https://www.gov.br/pf/pt-br/assuntos/imigracao/pt/nacionalidade/objetivo/servico/documentos', jur: 'federal', status: 'Verificada', dynamic: false },
  pfUnidades: { org: 'Polícia Federal', title: 'Superintendências e delegacias da PF', url: 'https://www.gov.br/pf/pt-br/acesso-a-informacao/institucional/quem-e-quem/superintendencias-e-delegacias', jur: 'federal', status: 'Revisão periódica', dynamic: true },
  reuniao: { org: 'Ministério da Justiça', title: 'Autorização de residência — reunião familiar', url: 'https://www.gov.br/mj/pt-br/assuntos/seus-direitos/migracoes/autorizacao-de-residencia', jur: 'federal', status: 'Verificada', dynamic: false },
  vistoReuniao: { org: 'Ministério da Justiça', title: 'Visto para reunião familiar', url: 'https://www.gov.br/mj/pt-br/assuntos/seus-direitos/refugio/servicos/visto-para-reuniao-familiar', jur: 'federal', status: 'Verificada', dynamic: false },
  mre: { org: 'Ministério das Relações Exteriores', title: 'Portal Consular — repartições e serviços consulares', url: 'https://www.gov.br/mre/pt-br/assuntos/portal-consular', jur: 'federal', status: 'Precisa revalidação atual', dynamic: true },
  pfBahia: { org: 'Polícia Federal', title: 'Superintendência Regional na Bahia', url: 'https://www.gov.br/pf/pt-br/acesso-a-informacao/institucional/quem-e-quem/superintendencias-e-delegacias/bahia/superintendencia-regional-na-bahia', jur: 'state_bahia', status: 'Revisão periódica', dynamic: true },
  dpu: { org: 'DPU', title: 'Defensoria Pública da União — onde nos encontrar', url: 'https://direitoshumanos.dpu.def.br/onde-nos-encontrar/', jur: 'federal', status: 'Verificada', dynamic: true },
  lei13445: { org: 'Presidência da República', title: 'Lei nº 13.445/2017 — Lei de Migração', url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13445.htm', jur: 'federal', status: 'Verificada', dynamic: false },
  lei9474: { org: 'Presidência da República', title: 'Lei nº 9.474/1997 — Lei do Refúgio', url: 'https://www.planalto.gov.br/ccivil_03/leis/l9474.htm', jur: 'federal', status: 'Verificada', dynamic: false },
  cras: { org: 'Prefeitura de Salvador', title: 'CRAS — unidades', url: 'https://sempre.salvador.ba.gov.br/cras/', jur: 'salvador', status: 'Revisão periódica', dynamic: true },
  craiLf: { org: 'Prefeitura de Lauro de Freitas', title: 'CRAI — notícia oficial de mapeamento (2021)', url: 'https://laurodefreitas.ba.gov.br/2021/noticias/sepadhir-divulga-resultado-do-mapeamento-de-pessoas-refugiadas-e-migrantes-em-lauro-de-freitas/3562', jur: 'lauro_de_freitas', status: 'Precisa revalidação atual', dynamic: true },
  anatel190: { org: 'Anatel', title: 'Serviços de Utilidade Pública e de Emergência (tridígitos) — 190 Polícia Militar', url: 'https://www.gov.br/anatel/pt-br/regulado/acompanhamento-e-controle/servicos-de-utilidade-publica-e-de-emergencia-tridigitos', jur: 'federal', status: 'Verificada', dynamic: false },
  disque100: { org: 'GOV.BR', title: 'Denunciar violação de direitos humanos (Disque 100)', url: 'https://www.gov.br/pt-br/servicos/denunciar-violacao-de-direitos-humanos', jur: 'federal', status: 'Verificada', dynamic: false },
  ligue180: { org: 'Ministério das Mulheres', title: 'Ligue 180', url: 'https://www.gov.br/mulheres/pt-br/ligue180', jur: 'federal', status: 'Verificada', dynamic: false },
  samu: { org: 'Ministério da Saúde', title: 'SAMU 192', url: 'https://www.gov.br/saude/pt-br/composicao/saes/samu-192', jur: 'federal', status: 'Verificada', dynamic: false }
};

const DELEMIG = {
  name: 'Delegacia de Polícia de Migração (DELEMIG) — Núcleo de Registro de Estrangeiros',
  role: 'Órgão que cuida de registro migratório e documentos de migração na Bahia',
  rows: [
    { k: 'Endereço', v: 'Aeroporto Internacional Luís Eduardo Magalhães, Praça Gago Coutinho, nº 282, São Cristóvão, Salvador/BA, CEP 41520-970' },
    { k: 'Horário', v: '9h às 16h, de segunda a sexta, em dias úteis' },
    { k: 'Telefone', v: '(71) 3254-4460' },
    { k: 'E-mail', v: 'delemig.drex.srba@pf.gov.br · migracao.srba@pf.gov.br' }
  ],
  actions: [
    { label: 'Abrir site oficial', href: SRC.pfBahia.url },
    { label: 'Ligar', href: 'tel:+557132544460' },
    { label: 'Enviar e-mail', href: 'mailto:migracao.srba@pf.gov.br' },
    { label: 'Ver no mapa', href: 'https://www.google.com/maps/search/?api=1&query=Pra%C3%A7a+Gago+Coutinho+282+Salvador+BA' }
  ],
  org: SRC.pfBahia.org, sourceUrl: SRC.pfBahia.url
};

const DPU_POINT = {
  name: 'Defensoria Pública da União (DPU)',
  role: 'Atendimento jurídico gratuito a pessoas migrantes, solicitantes de refúgio e apátridas',
  rows: [ { k: 'Como achar', v: 'A DPU mantém página oficial com as unidades de atendimento. Esta versão da pesquisa não fixa endereço local sem fonte atualizada.' } ],
  actions: [ { label: 'Abrir site oficial', href: SRC.dpu.url }, { label: 'Ver unidades', href: 'https://www.dpu.def.br/' } ],
  org: SRC.dpu.org, sourceUrl: SRC.dpu.url
};

const CONSULAR_POINT = {
  name: 'Repartição consular brasileira no país onde você está',
  role: 'Etapa consular: pedidos e orientações para quem está fora do Brasil',
  rows: [
    { k: 'Como achar', v: 'O Ministério das Relações Exteriores mantém a lista oficial de embaixadas e consulados. Esta versão não fixa endereço consular específico.' },
    { k: 'Custos', v: 'Taxas consulares podem variar conforme a repartição. Consulte a repartição responsável.' }
  ],
  actions: [ { label: 'Abrir Portal Consular', href: SRC.mre.url } ],
  org: SRC.mre.org, sourceUrl: SRC.mre.url
};

const PF_LOCATOR = {
  name: 'Unidade da Polícia Federal do seu município',
  role: 'Órgão de registro migratório fora do recorte local desta versão',
  rows: [ { k: 'Como achar', v: 'A Polícia Federal publica a lista de superintendências e delegacias. Esta versão mapeou contatos presenciais apenas em Salvador e Lauro de Freitas e não indica endereço local sem fonte.' } ],
  actions: [ { label: 'Localizar unidade da PF', href: SRC.pfUnidades.url }, { label: 'Dúvidas frequentes da PF', href: SRC.faqPf.url } ],
  org: SRC.pfUnidades.org, sourceUrl: SRC.pfUnidades.url
};

const T_QUESTIONS = [
  { id: 'in_brazil', title: 'Você está no Brasil agora?', help: 'Isso muda o órgão competente e a própria rota indicada.', options: [
    { label: 'Sim', fact: 'Você informou que está no Brasil.' },
    { label: 'Não', fact: 'Você informou que está fora do Brasil.' },
    { label: 'Não sei como responder', fact: 'Você não soube informar se está no Brasil.', escalate: 'Sem saber se você está no Brasil, não é possível indicar o órgão competente com segurança. Este caso precisa de atendimento humano.' } ] },
  { id: 'city', when: function (a) { return !!(a.in_brazil && a.in_brazil.label === 'Sim'); }, title: 'Em qual cidade você está?', help: 'Contatos presenciais desta versão cobrem Salvador e Lauro de Freitas.', options: [
    { label: 'Salvador', fact: 'Você está em Salvador (BA).' },
    { label: 'Lauro de Freitas', fact: 'Você está em Lauro de Freitas (BA).' },
    { label: 'Outra cidade', fact: 'Você está em outra cidade do Brasil.', unmapped: true } ] },
  { id: 'minor', title: 'Você tem menos de 18 anos?', help: 'Crianças e adolescentes têm proteção específica.', options: [
    { label: 'Sim', fact: 'Você informou ter menos de 18 anos.', escalate: 'Você informou ter menos de 18 anos. Adolescentes e crianças migrantes não devem depender apenas de um fluxo automatizado: procure a Defensoria Pública da União ou o Conselho Tutelar.' },
    { label: 'Não', fact: 'Você informou ter 18 anos ou mais.' } ] }
];

const CRNM_BASE_DOCS = {
  required: [
    { name: 'Formulário do pedido', condition: 'Preenchido no próprio serviço oficial.', src: 'crnm2via', explain: 'É o pedido eletrônico que você preenche na página do governo, sem intermediários.' },
    { name: 'Documento de identificação disponível', condition: 'Passaporte ou outro documento que identifique você.', src: 'docsPf', explain: 'Serve para confirmar que você é a pessoa registrada.' }
  ],
  conditional: [
    { name: 'Boletim de ocorrência ou comunicação à polícia', condition: 'Verificação aplicável a extravio, furto e roubo, conforme a fonte oficial do serviço. Não é exigência universal para todos os subcasos e não se aplica ao documento apenas danificado.', src: 'docsPf', explain: 'Registro feito na polícia contando o que aconteceu com o documento.' }
  ],
  useful: [
    { name: 'Cópia ou foto do documento antigo', condition: 'Se você tiver guardado, ajuda a localizar seu registro.', src: 'docsPf', explain: 'Mesmo uma foto no celular pode ajudar no atendimento.' }
  ],
  verify: [
    { name: 'Comprovante de pagamento da taxa', condition: 'Só se aplica se a taxa incidir no seu caso. Confirme na página de taxas antes de pagar.', src: 'taxas', explain: 'O pagamento é feito por guia oficial (GRU). Nunca pague a intermediários.' }
  ]
};

const CRNM_COSTS = [
  { label: 'Taxa de emissão da CRNM', value: 'R$ 204,77', note: 'A página oficial de autorização de residência informa atualmente esta taxa quando aplicável (código STN 140120). Confirme se ela incide no seu caso na página de taxas da Polícia Federal.', waiver: true, src: 'residencia' },
  { label: 'Isenções', value: 'Precisa confirmar', note: 'Existem hipóteses de isenção previstas oficialmente. Confira na página de taxas de migração da Polícia Federal se a sua situação está entre elas.', waiver: false, src: 'taxas' }
];

const FLOWS = {
  refugio: {
    title: 'Solicitação de refúgio',
    certainty: 'direct',
    questions: [
      { id: 'fear', title: 'Você tem medo de voltar ao seu país?', help: 'Responda apenas o que você quiser contar.', options: [
        { label: 'Sim', fact: 'Você informou que tem medo de voltar ao seu país.' },
        { label: 'Não', fact: 'Você informou que não tem medo de voltar ao seu país.' },
        { label: 'Prefiro não responder', fact: 'Você preferiu não responder sobre medo de retorno.' } ] },
      { id: 'reason', title: 'Esse medo está relacionado a alguma destas situações?', help: 'Pode marcar mais de uma. Nenhuma resposta é obrigatória.', multi: true, options: [
        { label: 'Perseguição por raça ou etnia' }, { label: 'Religião' }, { label: 'Nacionalidade' },
        { label: 'Opinião política' }, { label: 'Pertencer a um grupo social' },
        { label: 'Violência grave no país' }, { label: 'Conflito ou grave violação de direitos humanos' },
        { label: 'Outro motivo' }, { label: 'Não sei explicar' } ] },
      { id: 'started', title: 'Você já começou um pedido de refúgio no Brasil?', help: '', options: [
        { label: 'Sim, já tenho protocolo', fact: 'Você informou que já possui protocolo de solicitação de refúgio.' },
        { label: 'Comecei, mas não terminei', fact: 'Você informou que começou o pedido, mas não concluiu.' },
        { label: 'Não comecei', fact: 'Você ainda não iniciou uma solicitação de refúgio.' },
        { label: 'Não sei', fact: 'Você não soube informar se já iniciou o pedido.' } ] }
    ],
    meaning: 'Pelo que você contou, pode ser importante conhecer o procedimento de solicitação de refúgio no Brasil. Solicitar refúgio é pedir que o Estado analise sua situação; quem decide é o Comitê Nacional para os Refugiados (CONARE), não este aplicativo. O pedido é feito pelo sistema oficial Sisconare e gera um protocolo, que permite permanecer no país enquanto o pedido é analisado e precisa ser renovado enquanto houver análise. Você não precisa provar tudo de imediato, e pode pedir ajuda gratuita da Defensoria Pública da União.',
    steps: [
      { title: 'Acesse o Sisconare', desc: 'É o sistema oficial do governo para pedidos de refúgio.', src: 'sisconare' },
      { title: 'Faça seu cadastro', desc: 'Crie seu acesso com os dados pedidos pelo próprio sistema.', src: 'refugio' },
      { title: 'Preencha a solicitação', desc: 'Conte sua situação com suas palavras. Não invente fatos e não deixe de contar o que é importante.', src: 'refugio' },
      { title: 'Guarde seu protocolo', desc: 'É o documento que comprova que seu pedido está em análise.', src: 'refugio' },
      { title: 'Siga as orientações de atendimento da Polícia Federal', desc: 'Quando o procedimento exigir, você será orientado a comparecer à Polícia Federal.', src: 'faqPf' },
      { title: 'Renove o protocolo enquanto o pedido estiver em análise', desc: 'O serviço oficial de renovação é feito para quem já está no Sisconare.', src: 'protocolo' },
      { title: 'Peça o documento provisório quando aplicável', desc: 'Existe um Documento Provisório de Registro Nacional Migratório (DPRNM) para quem solicitou refúgio.', src: 'dprnm' }
    ],
    docs: {
      required: [
        { name: 'Documento de identificação que você tenha', condition: 'Passaporte, documento do seu país ou outro documento que ajude a identificar você.', src: 'refugio', explain: 'Qualquer documento oficial que traga seu nome e sua nacionalidade. Se você não tem nenhum, informe isso no pedido: a falta de documento não impede solicitar refúgio.' },
        { name: 'Relato da sua situação', condition: 'Contado por você mesmo no formulário do Sisconare.', src: 'refugio', explain: 'É a sua história, escrita com suas palavras: o que aconteceu, quando e por que você não pode voltar.' }
      ],
      conditional: [ { name: 'Documentos dos seus filhos menores de idade', condition: 'Se você está pedindo refúgio junto com crianças ou adolescentes.', src: 'refugio', explain: 'Certidão de nascimento é o documento que registra oficialmente o nascimento de uma pessoa.' } ],
      useful: [ { name: 'Comprovante de endereço no Brasil', condition: 'Ajuda no contato e no atendimento, quando você tiver.', src: 'refugio', explain: 'Conta de luz, água ou declaração de quem mora com você.' } ],
      verify: [ { name: 'Exigências específicas do seu caso', condition: 'A lista completa depende do que o sistema oficial pedir no momento do seu pedido. Confirme na página oficial.', src: 'refugio', explain: 'Procedimentos mudam. Antes de agir, abra a página oficial e confira a lista atual.' } ]
    },
    costs: [
      { label: 'Solicitação de refúgio', value: 'Gratuito', note: 'A Coordenação-Geral do Conare informa que seus serviços são gratuitos. Nunca pague a intermediários para solicitar refúgio.', waiver: false, src: 'conareServicos' },
      { label: 'Documento Provisório de Registro Nacional Migratório (DPRNM)', value: 'Sem custo', note: 'A página oficial do serviço indica que não há custo para obter o DPRNM.', waiver: false, src: 'dprnm' }
    ],
    points: ['delemig', 'dpu'],
    outsidePoints: ['dpu'],
    outsideSummary: 'Atendimento jurídico gratuito',
    outsideBody: 'O pedido de refúgio brasileiro é protocolado em território brasileiro. Por isso não indicamos atendimento presencial no Brasil como próximo passo agora e não apresentamos consulado como local de protocolo deste pedido.',
    sources: ['refugio', 'conareServicos', 'sisconare', 'protocolo', 'dprnm', 'faqPf', 'lei9474', 'dpu'],
    fallbacks: [
      { title: 'Se o Sisconare estiver fora do ar', body: 'A página oficial do serviço orienta atualmente contato pelo e-mail sisconare@mj.gov.br. Não use intermediários nem sites parecidos.' },
      { title: 'Se você não tiver nenhum documento do seu país', body: 'Informe isso no próprio pedido. A falta de documento não impede solicitar refúgio, e a Defensoria Pública da União pode ajudar gratuitamente.' },
      { title: 'Se sua situação for diferente do que descrevemos', body: 'Este aplicativo faz orientação inicial. Casos com prazo, risco ou contradição precisam de uma pessoa real analisando.' }
    ],
    missing: ['Se há pessoas dependentes de você no pedido.', 'Se você já tem alguma data de atendimento marcada.']
  },

  apatridia: {
    title: 'Reconhecimento da condição de apátrida',
    certainty: 'needs_info',
    questions: [
      { id: 'residence_br', title: 'Você reside atualmente no Brasil?', help: 'Residir no Brasil é requisito deste serviço. Isso é diferente de estar no Brasil hoje.', options: [
        { label: 'Sim', residence: 'yes', fact: 'Você informou que reside atualmente no Brasil.' },
        { label: 'Não', residence: 'no', fact: 'Você informou que não reside atualmente no Brasil.' },
        { label: 'Não sei / preciso de ajuda para confirmar', residence: 'unknown', fact: 'Você não soube confirmar se reside no Brasil.', escalate: 'Sem confirmar se você reside no Brasil, não é possível verificar o requisito do serviço de apatridia. Não vamos presumir residência: procure a Defensoria Pública da União para confirmar a sua situação.' } ] },
      { id: 'nat', title: 'Algum país reconhece você como cidadão ou nacional?', help: '', options: [
        { label: 'Sim, um país me reconhece', fact: 'Você informou que um país reconhece você como nacional.' },
        { label: 'Nenhum país me reconhece', fact: 'Você informou que nenhum país reconhece você como nacional.' },
        { label: 'Não tenho certeza', fact: 'Você não tem certeza se algum país reconhece você como nacional.' } ] },
      { id: 'nat_doc', title: 'Você tem algum documento relacionado à sua nacionalidade?', help: '', options: [
        { label: 'Tenho alguns documentos', fact: 'Você informou ter alguns documentos relacionados à nacionalidade.' },
        { label: 'Não tenho nenhum', fact: 'Você informou não ter documentos relacionados à nacionalidade.' },
        { label: 'Não sei quais servem', fact: 'Você não soube dizer quais documentos servem.' } ] },
      { id: 'other_countries', title: 'Você morou em outros países nos últimos cinco anos?', help: 'Isso pode influenciar documentos pedidos no procedimento.', options: [
        { label: 'Sim', fact: 'Você morou em outros países nos últimos cinco anos.' },
        { label: 'Não', fact: 'Você não morou em outros países nos últimos cinco anos.' },
        { label: 'Não sei', fact: 'Você não soube informar sobre residência em outros países.' } ] }
    ],
    meaning: 'Talvez seja importante conhecer o procedimento brasileiro de reconhecimento da condição de apátrida. Em termos gerais, pessoa apátrida é aquela que não é considerada nacional por nenhum Estado segundo a legislação desses países. Este aplicativo não reconhece ninguém como apátrida: o pedido é analisado pelo Ministério da Justiça e Segurança Pública, pelo sistema SisApatridia. Como a comprovação envolve documentos de outros países, este é um caso em que apoio jurídico gratuito ajuda bastante.',
    steps: [
      { title: 'Leia o serviço oficial de reconhecimento como apátrida', desc: 'A página oficial descreve requisitos, documentos e etapas atuais.', src: 'apatridia' },
      { title: 'Reúna os documentos que você conseguir', desc: 'Inclui documentos que demonstrem sua situação e comprovante de endereço ou declaração.', src: 'apatridia' },
      { title: 'Faça o pedido pelo sistema oficial (SisApatridia)', desc: 'O procedimento é conduzido pelo Ministério da Justiça e Segurança Pública.', src: 'apatridia_mj' },
      { title: 'Acompanhe o pedido e responda às exigências', desc: 'Se pedirem documentos que você não tem, explique a sua situação em vez de desistir.', src: 'apatridia' },
      { title: 'Procure apoio jurídico gratuito', desc: 'A Defensoria Pública da União atende pessoas apátridas gratuitamente.', src: 'dpu' }
    ],
    docs: {
      required: [
        { name: 'Comprovante de residência no Brasil ou declaração', condition: 'A fonte oficial estabelece residir no Brasil como requisito para utilizar o serviço.', src: 'apatridia', explain: 'Pode ser conta no seu nome, contrato ou uma declaração de quem mora com você.' },
        { name: 'Documentos que você tenha sobre sua situação', condition: 'Documentos que demonstrem que nenhum Estado considera você nacional.', src: 'apatridia', explain: 'Qualquer papel oficial de país onde você nasceu ou morou, mesmo antigo ou incompleto.' }
      ],
      conditional: [ { name: 'Documentos sobre antecedentes nos países onde morou', condition: 'Se você residiu em outros países nos últimos anos.', src: 'apatridia', explain: 'Certidão emitida por autoridade do país onde você morou. Se não for possível obter, explique isso no pedido.' } ],
      useful: [ { name: 'Certidão de nascimento, se existir', condition: 'Ajuda a demonstrar onde você nasceu.', src: 'apatridia', explain: 'Certidão de nascimento é o documento que registra oficialmente o nascimento de uma pessoa.' } ],
      verify: [ { name: 'Lista completa e atual de documentos', condition: 'Consulte a página oficial no momento do pedido: o procedimento pode ter sido atualizado.', src: 'apatridia', explain: 'Esta versão da base foi verificada em 14/08/2026 e não substitui a leitura da fonte no dia em que você for pedir.' } ]
    },
    costs: [ { label: 'Reconhecimento da condição de apátrida', value: 'Gratuito', note: 'Este serviço é indicado como gratuito no portal oficial. Confirme na página do serviço antes de qualquer pagamento e nunca pague a intermediários.', waiver: false, src: 'apatridia' } ],
    points: ['dpu', 'delemig'],
    outsidePoints: ['dpu'],
    outsideSummary: 'Atendimento jurídico gratuito',
    outsideBody: 'O serviço de reconhecimento da condição de apátrida exige residir no Brasil e é apresentado pelo SisApatridia. Estar fora do Brasil não cria etapa consular para este pedido: mostramos a fonte oficial e o atendimento humano.',
    sources: ['apatridia', 'apatridia_mj', 'dpu', 'lei13445'],
    fallbacks: [
      { title: 'Se pedirem um documento que você não consegue obter', body: 'Explique no pedido por que não é possível obter aquele documento. Apoio jurídico gratuito ajuda a redigir essa justificativa.' },
      { title: 'Se um país afirmar que você tem aquela nacionalidade', body: 'A situação muda e precisa de análise humana. Não conclua nada com base apenas nesta orientação inicial.' },
      { title: 'Se você tiver dúvida sobre sua nacionalidade', body: 'Dúvida de nacionalidade é um caso que este aplicativo encaminha para atendimento humano.' }
    ],
    missing: ['Se algum país já afirmou que você possui aquela nacionalidade.', 'Quais documentos você consegue obter hoje.']
  },

  crnm: {
    title: 'Carteira de Registro Nacional Migratório (CRNM)',
    certainty: 'direct',
    questions: [
      { id: 'what', title: 'O que aconteceu com seu documento?', help: 'Cada situação tem uma rota oficial diferente.', options: [
        { label: 'Perdi ou extraviei', variant: 'via2', bo: true, fact: 'Você informou que perdeu ou extraviou sua CRNM.' },
        { label: 'Fui vítima de furto', variant: 'via2', bo: true, fact: 'Você informou que sua CRNM foi furtada.' },
        { label: 'Fui vítima de roubo', variant: 'via2', bo: true, fact: 'Você informou que sua CRNM foi roubada.' },
        { label: 'O documento foi danificado', variant: 'via2', fact: 'Você informou que sua CRNM está danificada.' },
        { label: 'Venceu', variant: 'venceu', fact: 'Você informou que sua CRNM está vencida.' },
        { label: 'Preciso corrigir ou alterar um dado', variant: 'substituicao', fact: 'Você informou que precisa corrigir ou alterar um dado cadastral da CRNM.' } ] },
      { id: 'bo', when: function (a) { return !!(a.what && a.what.bo); }, title: 'Você registrou boletim de ocorrência ou comunicação à polícia?', help: 'Perguntamos em extravio, furto e roubo, porque a fonte oficial pode pedir o registro nesses casos. Não é exigência universal para todos os subcasos, e não pedimos isso quando o documento apenas foi danificado.', options: [
        { label: 'Sim', fact: 'Você informou que registrou boletim de ocorrência.' },
        { label: 'Não', fact: 'Você informou que não registrou boletim de ocorrência.' },
        { label: 'Não sei como fazer', fact: 'Você não sabe como registrar boletim de ocorrência.' } ] },
      { id: 'res_valid', when: function (a) { return !!(a.what && a.what.variant === 'via2'); }, title: 'Sua autorização de residência está válida?', help: 'A fonte oficial da segunda via informa que o serviço é destinado a quem possui CRNM/CIE com autorização de residência válida. Validade da autorização é diferente da validade do cartão.', options: [
        { label: 'Sim', res: 'yes', fact: 'Você informou que a sua autorização de residência está válida.' },
        { label: 'Não', res: 'no', fact: 'Você informou que a sua autorização de residência não está válida.' },
        { label: 'Não sei / preciso confirmar', res: 'unknown', fact: 'Você não soube confirmar se a sua autorização de residência está válida.', escalate: 'Sem confirmar se a sua autorização de residência está válida, não é possível indicar a segunda via como rota. Confirme na fonte oficial ou procure a Defensoria Pública da União.' } ] },
      { id: 'res_type', when: function (a) { return !!(a.what && a.what.variant === 'venceu'); }, title: 'A sua autorização de residência é por prazo determinado ou indeterminado?', help: 'CRNM emitida para residência por prazo determinado pode exigir a renovação da própria autorização, e não apenas um novo documento.', options: [
        { label: 'Prazo indeterminado', fact: 'Você informou ter residência por prazo indeterminado.' },
        { label: 'Prazo determinado (temporária)', fact: 'Você informou ter residência por prazo determinado.' },
        { label: 'Não sei informar', fact: 'Você não soube informar o tipo da sua autorização de residência.', escalate: 'Sem saber se a sua residência é por prazo determinado ou indeterminado, não é possível dizer se o caso é apenas emissão de documento ou renovação da autorização. Confirme na fonte oficial ou procure a Defensoria Pública da União.' } ] }
    ],
    meaning: 'A CRNM é o documento de identificação da pessoa migrante registrada no Brasil. Antes de indicar um caminho, é preciso separar as hipóteses: emissão de segunda via, substituição por alteração de dados e situação de documento vencido não seguem a mesma rota oficial.',
    steps: [ { title: 'Identifique a rota oficial do seu caso', desc: 'Responda as perguntas para saber qual serviço se aplica.', src: 'faqPf' } ],
    docs: CRNM_BASE_DOCS,
    costs: CRNM_COSTS,
    points: ['delemig', 'dpu'],
    outsidePoints: ['dpu'],
    outsideSummary: 'Etapas presenciais da CRNM ocorrem no Brasil',
    outsideBody: 'O serviço de CRNM pertence à Polícia Federal e possui etapas presenciais no Brasil. Estar fora do Brasil não transforma consulado em rota de segunda via, substituição ou renovação, e esta versão não infere Autorização de Retorno ao Brasil sem pergunta própria e fonte específica.',
    sources: ['crnm2via', 'crnmSubst', 'faqPf', 'docsPf', 'taxas', 'residencia'],
    fallbacks: [
      { title: 'Se a taxa não parecer aplicável ao seu caso', body: 'Não pague antes de confirmar. A página oficial de taxas indica as hipóteses de incidência e de isenção.' },
      { title: 'Se você não conseguir agendar atendimento', body: 'Guarde os comprovantes das tentativas e procure os canais oficiais da Polícia Federal. Não recorra a intermediários que cobram por agendamento.' },
      { title: 'Se receberem uma exigência que você não entendeu', body: 'Peça a exigência por escrito e procure a Defensoria Pública da União.' }
    ],
    missing: ['Qual é a situação atual da sua autorização de residência.', 'Se a taxa incide no seu caso.'],
    variants: {
      via2: {
        title: 'Segunda via da CRNM',
        certainty: 'direct',
        meaning: 'Segunda via é a emissão de documento de igual teor, prevista para perda, extravio, furto, roubo ou dano. Perder o documento não faz você perder o registro migratório: o registro continua existindo. Correção de dados não entra aqui — isso é substituição.',
        steps: [
          { title: 'Abra o serviço oficial de segunda via', desc: 'A página oficial descreve as etapas e o que é exigido para emissão de via de igual teor.', src: 'crnm2via' },
          { title: 'Confira as taxas aplicáveis', desc: 'A Polícia Federal mantém página própria de taxas de migração e de hipóteses de isenção.', src: 'taxas' },
          { title: 'Reúna os documentos pedidos', desc: 'A Polícia Federal publica a lista de documentação exigida por tipo de serviço.', src: 'docsPf' },
          { title: 'Compareça à unidade de migração quando exigido', desc: 'O atendimento presencial, quando exigido, é feito na Polícia Federal.', src: 'faqPf' }
        ],
        sources: ['crnm2via', 'taxas', 'docsPf', 'residencia', 'faqPf']
      },
      substituicao: {
        title: 'Substituição da CRNM — correção ou alteração de dados',
        certainty: 'direct',
        meaning: 'Correção ou alteração de dado cadastral não é segunda via. A rota oficial é o serviço de obtenção e substituição da CRNM, que descreve as hipóteses de alteração e os documentos que comprovam o dado correto.',
        steps: [
          { title: 'Abra o serviço oficial de CRNM', desc: 'É a página que trata de emissão e substituição do documento, inclusive alteração de dados.', src: 'crnmSubst' },
          { title: 'Confira a hipótese de substituição que se aplica', desc: 'A página oficial indica em quais casos cabe substituição e o que comprova o dado correto.', src: 'crnmSubst' },
          { title: 'Reúna o documento que comprova o dado correto', desc: 'Certidão ou documento oficial que demonstre a informação a ser corrigida.', src: 'docsPf' },
          { title: 'Confira as taxas e as isenções', desc: 'Confirme na página de taxas se há incidência no seu caso antes de pagar.', src: 'taxas' }
        ],
        docs: {
          required: [
            { name: 'Formulário do pedido de substituição', condition: 'Preenchido no serviço oficial de CRNM.', src: 'crnmSubst', explain: 'É o pedido eletrônico na página do governo, sem intermediários.' },
            { name: 'Documento que comprove o dado correto', condition: 'Certidão ou documento oficial que demonstre a informação que precisa ser alterada.', src: 'docsPf', explain: 'Por exemplo, certidão de casamento para alteração de nome, quando for o caso.' }
          ],
          conditional: [ { name: 'Documento anterior', condition: 'Se você tem a CRNM atual em mãos, ela costuma ser apresentada no atendimento.', src: 'docsPf', explain: 'A via antiga costuma ser entregue quando há emissão de nova.' } ],
          verify: [ { name: 'Hipóteses de substituição aplicáveis', condition: 'Confirme na página oficial se a sua alteração está entre as hipóteses previstas.', src: 'crnmSubst', explain: 'Não toda alteração de dado segue o mesmo caminho. A fonte oficial é quem define.' } ]
        },
        sources: ['crnmSubst', 'docsPf', 'taxas', 'residencia', 'faqPf']
      },
      venceu: {
        title: 'CRNM vencida — primeiro verificar a sua autorização de residência',
        certainty: 'needs_info',
        meaning: 'CRNM vencida não tem solução única. A fonte oficial informa que a CRNM emitida para residência por prazo determinado pode exigir a renovação da própria autorização de residência, e não apenas a emissão de um novo documento. Por isso, aqui não afirmamos que o caminho é segunda via: primeiro é preciso saber qual é a situação da sua residência.',
        steps: [
          { title: 'Verifique o tipo da sua autorização de residência', desc: 'Prazo determinado e prazo indeterminado seguem caminhos diferentes.', src: 'faqPf' },
          { title: 'Se a residência for por prazo determinado, veja a renovação da autorização', desc: 'A renovação é da autorização de residência, não apenas do documento.', src: 'residencia' },
          { title: 'Se a residência for por prazo indeterminado, veja o serviço de CRNM', desc: 'A página oficial descreve emissão e substituição do documento.', src: 'crnmSubst' },
          { title: 'Confira taxas e isenções antes de pagar', desc: 'A incidência depende do serviço que se aplica ao seu caso.', src: 'taxas' },
          { title: 'Procure apoio jurídico gratuito em caso de dúvida', desc: 'A Defensoria Pública da União atende gratuitamente.', src: 'dpu' }
        ],
        docs: {
          required: [ { name: 'Documento de identificação disponível', condition: 'Passaporte ou outro documento que identifique você.', src: 'docsPf', explain: 'Serve para confirmar que você é a pessoa registrada.' } ],
          conditional: [ { name: 'Documentos do pedido de autorização de residência', condition: 'Se o seu caso for de renovação da autorização, e não apenas de documento.', src: 'residencia', explain: 'A lista consta na página oficial do serviço de autorização de residência.' } ],
          verify: [ { name: 'Qual serviço se aplica ao seu caso', condition: 'Confirme na fonte oficial se o seu caso é emissão de documento ou renovação da autorização de residência.', src: 'faqPf', explain: 'Esta é a informação que muda tudo no seu caso. Não presuma: confirme.' } ]
        },
        costs: [
          { label: 'Taxa de emissão da CRNM', value: 'R$ 204,77', note: 'Informada na página oficial quando aplicável (código STN 140120). Só incide se o seu caso envolver emissão de novo documento.', waiver: true, src: 'residencia' },
          { label: 'Taxa de processamento de autorização de residência', value: 'R$ 168,13', note: 'Informada na página oficial quando aplicável (código STN 140066). Só incide se o seu caso envolver pedido ou renovação de autorização de residência.', waiver: true, src: 'residencia' },
          { label: 'Isenções', value: 'Precisa confirmar', note: 'Existem hipóteses de isenção previstas oficialmente. Confira na página de taxas de migração da Polícia Federal.', waiver: false, src: 'taxas' }
        ],
        sources: ['crnmSubst', 'residencia', 'faqPf', 'taxas', 'docsPf', 'dpu']
      }
    }
  },

  familia: {
    title: 'Reunião familiar',
    certainty: 'needs_info',
    questions: [
      { id: 'who', title: 'Com quem você quer morar no Brasil?', help: '', options: [
        { label: 'Cônjuge ou companheiro(a)', fact: 'Você quer morar com seu cônjuge ou companheiro(a).' },
        { label: 'Filho ou filha', fact: 'Você quer morar com seu filho ou filha.' },
        { label: 'Pai ou mãe', fact: 'Você quer morar com seu pai ou sua mãe.' },
        { label: 'Avô ou avó', fact: 'Você quer morar com seu avô ou sua avó.' },
        { label: 'Neto ou neta', fact: 'Você quer morar com seu neto ou sua neta.' },
        { label: 'Irmão ou irmã', fact: 'Você quer morar com seu irmão ou sua irmã.' },
        { label: 'Outro familiar', fact: 'Você quer morar com outro familiar.' } ] },
      { id: 'benef', title: 'Quem precisa do visto ou da autorização de residência?', help: 'A rota depende de quem é a pessoa juridicamente relevante no pedido.', options: [
        { label: 'Eu', benef: 'self', fact: 'Você informou que é você quem precisa do visto ou da autorização de residência.' },
        { label: 'Meu familiar', benef: 'other', fact: 'Você informou que é o seu familiar quem precisa do visto ou da autorização de residência.' },
        { label: 'Não sei', benef: 'unknown', fact: 'Você não soube informar quem precisa do visto ou da autorização de residência.', escalate: 'Sem identificar quem precisa do visto ou da autorização de residência, não é possível indicar a etapa aplicável. Procure a Defensoria Pública da União.' } ] },
      { id: 'benef_loc', title: 'Essa pessoa está atualmente no Brasil ou no exterior?', help: 'Vale a localização de quem precisa do visto ou da autorização, não a de quem está respondendo.', options: [
        { label: 'No Brasil', variant: 'residencia', fact: 'A pessoa que precisa do visto ou da autorização está no Brasil.' },
        { label: 'No exterior', variant: 'consular', fact: 'A pessoa que precisa do visto ou da autorização está no exterior.' },
        { label: 'Não sei', variant: null, fact: 'Você não soube informar onde está a pessoa que precisa do visto ou da autorização.', escalate: 'Sem saber onde está a pessoa que precisa do visto ou da autorização de residência, não é possível indicar a etapa correta nem o custo aplicável. Procure a Defensoria Pública da União.' } ] }
    ],
    meaning: 'Reunião familiar tem dois pedidos diferentes, que não se confundem: o visto para reunião familiar, na etapa consular, quando a pessoa está fora do Brasil, e a autorização de residência para reunião familiar, quando a pessoa já está no Brasil. O grau de parentesco sozinho não decide o resultado.',
    steps: [ { title: 'Identifique qual dos dois pedidos é o seu caso', desc: 'Visto na etapa consular quando o familiar está fora; autorização de residência quando já está no Brasil.', src: 'vistoReuniao' } ],
    docs: {
      required: [
        { name: 'Documento que comprove o vínculo familiar', condition: 'Certidão de casamento, certidão de nascimento ou documento equivalente.', src: 'docsPf', explain: 'É o documento que mostra a relação entre você e seu familiar.' },
        { name: 'Documento de identificação de quem pede', condition: 'Passaporte ou outro documento aceito no serviço.', src: 'docsPf', explain: 'Serve para identificar você no pedido.' }
      ],
      conditional: [ { name: 'Documentos do familiar que está no Brasil', condition: 'Se o pedido depende de vínculo com pessoa residente no Brasil.', src: 'reuniao', explain: 'Documentos da pessoa da família que já mora aqui, para comprovar a ligação.' } ],
      useful: [ { name: 'Provas da convivência', condition: 'Fotos, mensagens, comprovantes de moradia em comum, quando existirem.', src: 'reuniao', explain: 'Ajudam a demonstrar que a relação familiar é real, especialmente em união estável.' } ],
      verify: [ { name: 'Necessidade de tradução, apostilamento ou legalização', condition: 'Não existe regra única. Confirme na documentação oficial o que se aplica ao seu documento e ao seu país.', src: 'docsPf', explain: 'Apostilamento é um selo internacional que confirma que um documento estrangeiro é autêntico. Não vale para todos os países nem para todos os documentos.' } ]
    },
    costs: [ { label: 'Custo aplicável', value: 'Precisa confirmar', note: 'Etapa consular e etapa de residência têm custos diferentes. Sem saber onde está o familiar, não é possível indicar o custo correto sem misturar as duas etapas.', waiver: false, src: 'vistoReuniao' } ],
    points: ['dpu'],
    outsidePoints: ['dpu'],
    outsideSummary: 'Depende de quem precisa do visto ou da autorização',
    outsideBody: 'Em reunião familiar, a rota depende da localização da pessoa que precisa do visto ou da autorização de residência, não de quem está respondendo. Por isso a etapa não muda apenas porque você está fora do Brasil.',
    sources: ['reuniao', 'vistoReuniao', 'docsPf', 'taxas', 'residencia', 'mre'],
    fallbacks: [
      { title: 'Se o familiar estiver no exterior', body: 'O caminho começa pelo visto para reunião familiar, pedido em repartição consular, e não pela autorização de residência.' },
      { title: 'Se você não tiver certidão do vínculo', body: 'Não desista do pedido: procure a Defensoria Pública da União antes, para entender quais alternativas a fonte oficial admite.' },
      { title: 'Se a orientação recebida no atendimento for diferente', body: 'Peça a exigência por escrito e confira na página oficial. Este aplicativo faz orientação inicial e pode não cobrir a sua hipótese específica.' }
    ],
    missing: ['Onde está a pessoa que precisa do visto ou da autorização de residência.', 'Se existe documento oficial que comprove o vínculo.'],
    variants: {
      consular: {
        title: 'Reunião familiar — etapa consular (visto)',
        certainty: 'needs_info',
        meaning: 'Como o familiar está no exterior, a etapa aplicável é a do visto temporário para reunião familiar, pedido em repartição consular brasileira. As taxas brasileiras de autorização de residência e de emissão de CRNM pertencem a outra etapa, posterior ao ingresso, e não são o custo deste pedido consular.',
        steps: [
          { title: 'Leia a página oficial do visto para reunião familiar', desc: 'Descreve a hipótese e o encaminhamento da etapa consular.', src: 'vistoReuniao' },
          { title: 'Procure a repartição consular brasileira responsável', desc: 'O pedido de visto é feito na repartição consular competente para o local onde o familiar está.', src: 'mre' },
          { title: 'Reúna os documentos de vínculo familiar', desc: 'A exigência de tradução ou legalização depende do documento e do país.', src: 'docsPf' },
          { title: 'Após o ingresso com visto, faça o registro na Polícia Federal no prazo oficial', desc: 'O prazo e o procedimento de registro constam na fonte oficial da Polícia Federal.', src: 'faqPf' },
          { title: 'Procure apoio jurídico gratuito se houver dúvida sobre o vínculo', desc: 'Documento de vínculo emitido no exterior costuma ser a parte mais difícil.', src: 'dpu' }
        ],
        costs: [
          { label: 'Pedido de visto para reunião familiar (etapa consular)', value: 'Consultar a repartição', note: 'Taxas consulares podem variar conforme a repartição. Consulte a repartição responsável. As taxas brasileiras de autorização de residência e de CRNM são de etapa posterior, já no Brasil, e não se aplicam a este pedido.', waiver: false, src: 'mre' }
        ],
        points: ['consular', 'dpu'],
        pointsFromFlow: true,
        outsidePoints: ['consular', 'dpu'],
        outsideSummary: 'Etapa consular de visto e atendimento gratuito',
        sources: ['vistoReuniao', 'mre', 'docsPf', 'faqPf', 'dpu']
      },
      residencia: {
        title: 'Reunião familiar — autorização de residência no Brasil',
        certainty: 'needs_info',
        meaning: 'Como o familiar está no Brasil, a etapa aplicável é a autorização de residência para reunião familiar. Os critérios oficiais atualizados são do Ministério da Justiça e da Polícia Federal; aqui indicamos a fonte e o órgão, não a elegibilidade.',
        steps: [
          { title: 'Leia os critérios oficiais de autorização de residência', desc: 'O Ministério da Justiça mantém a página com as hipóteses e o procedimento.', src: 'reuniao' },
          { title: 'Confira a documentação exigida pela Polícia Federal', desc: 'A lista varia conforme o vínculo familiar e o serviço escolhido.', src: 'docsPf' },
          { title: 'Confira as taxas e as hipóteses de isenção', desc: 'A página oficial informa quais taxas se aplicam ao pedido de autorização de residência.', src: 'taxas' },
          { title: 'Compareça à unidade de migração quando exigido', desc: 'O atendimento presencial, quando exigido, é feito na Polícia Federal.', src: 'faqPf' },
          { title: 'Procure apoio jurídico gratuito se houver dúvida sobre o vínculo', desc: 'A Defensoria Pública da União atende gratuitamente.', src: 'dpu' }
        ],
        costs: [
          { label: 'Taxa de processamento do pedido de autorização de residência', value: 'R$ 168,13', note: 'A página oficial informa atualmente esta taxa quando aplicável (código STN 140066). Esta é a etapa de residência, já no Brasil.', waiver: true, src: 'residencia' },
          { label: 'Taxa de emissão da CRNM', value: 'R$ 204,77', note: 'A página oficial informa atualmente esta taxa quando aplicável (código STN 140120).', waiver: true, src: 'residencia' }
        ],
        points: ['delemig', 'dpu'],
        pointsFromFlow: true,
        outsidePoints: ['delemig', 'dpu'],
        outsideSummary: 'Órgão de residência no Brasil e atendimento gratuito',
        sources: ['reuniao', 'docsPf', 'taxas', 'residencia', 'faqPf', 'dpu']
      }
    }
  }
};

const APATRIDIA_UNCERTAIN = {
  title: 'Reconhecimento de apatridia — precisamos confirmar sua residência',
  certainty: 'blocked',
  meaning: 'O serviço brasileiro de reconhecimento da condição de apátrida exige residir no Brasil. Você não soube confirmar se reside no Brasil, e esta versão não presume residência nem elegibilidade. O próximo passo é confirmar essa informação, com apoio humano se necessário, antes de qualquer orientação sobre o pedido.',
  steps: [
    { title: 'Leia o requisito na página oficial do serviço', desc: 'A página oficial estabelece residir no Brasil entre os requisitos para utilizar o serviço.', src: 'apatridia' },
    { title: 'Confirme a sua situação de residência com apoio jurídico gratuito', desc: 'A Defensoria Pública da União pode ajudar a entender se a sua situação caracteriza residência no Brasil.', src: 'dpu' }
  ],
  costs: [ { label: 'Custos deste pedido', value: 'Precisa confirmar', note: 'Sem confirmar o requisito de residência, esta versão não indica custos para este pedido.', waiver: false, src: 'apatridia' } ],
  points: ['dpu'],
  sources: ['apatridia', 'apatridia_mj', 'dpu'],
  fallbacks: [
    { title: 'Se você não tem certeza do que conta como residência', body: 'Isso é uma dúvida jurídica legítima e comum. Leve a pergunta à Defensoria Pública da União em vez de responder por conta própria.' },
    { title: 'Se alguém oferecer um atalho para o reconhecimento', body: 'Desconfie. O procedimento é conduzido por órgão público e não depende de intermediários pagos.' }
  ],
  missing: ['Se a sua situação atual caracteriza residência no Brasil.', 'Desde quando você está no país e em que condição.'],
  docs: { verify: [ { name: 'Requisito de residência no Brasil', condition: 'Confirme na página oficial do serviço e com apoio jurídico antes de reunir qualquer documento.', src: 'apatridia', explain: 'É o requisito que define se este pedido se aplica a você.' } ] }
};

const APATRIDIA_BLOCK = {
  title: 'Reconhecimento de apatridia — requisito de residência no Brasil',
  certainty: 'blocked',
  meaning: 'O serviço brasileiro de reconhecimento da condição de apátrida exige residir no Brasil e o pedido é apresentado pelo sistema SisApatridia. Como você informou que não reside no Brasil, esta versão não apresenta o pedido como caminho disponível para você agora, não inventa etapa consular e não trata consulado como órgão deste pedido. O que podemos fazer é mostrar a fonte oficial do requisito e encaminhar você para orientação jurídica gratuita.',
  steps: [
    { title: 'Leia o requisito na página oficial do serviço', desc: 'A página oficial estabelece residir no Brasil entre os requisitos para utilizar o serviço.', src: 'apatridia' },
    { title: 'Procure orientação jurídica gratuita', desc: 'A Defensoria Pública da União pode esclarecer opções sem que você dependa apenas desta triagem.', src: 'dpu' }
  ],
  costs: [ { label: 'Custos deste pedido', value: 'Não se aplica agora', note: 'Sem o requisito de residência no Brasil atendido, esta versão não indica custos para este pedido.', waiver: false, src: 'apatridia' } ],
  points: ['dpu'],
  outsidePoints: ['dpu'],
  outsideSummary: 'Atendimento jurídico gratuito',
  sources: ['apatridia', 'apatridia_mj', 'dpu'],
  fallbacks: [
    { title: 'Se você passar a residir no Brasil', body: 'A rota muda: volte à triagem e refaça a pergunta sobre onde você está.' },
    { title: 'Se alguém oferecer um atalho para o reconhecimento', body: 'Desconfie. O procedimento é conduzido por órgão público e não depende de intermediários pagos.' }
  ],
  missing: ['Se você pretende ou consegue residir no Brasil.', 'Qual é a sua situação documental no país onde está.'],
  docs: { verify: [ { name: 'Requisito de residência no Brasil', condition: 'Confirme na página oficial do serviço antes de reunir qualquer documento.', src: 'apatridia', explain: 'É o requisito que hoje impede indicar este pedido para quem está fora do Brasil.' } ] }
};

const REFUGIO_LOCATION_BLOCK = {
  title: 'Solicitação de refúgio — é preciso estar em território brasileiro',
  certainty: 'blocked',
  meaning: 'Para solicitar refúgio ao Brasil, é preciso já estar no território brasileiro. Não é possível protocolar o pedido de refúgio brasileiro estando em outro país. Por isso esta versão não apresenta a solicitação de refúgio como rota disponível para você agora, não indica consulado como local de protocolo do pedido e não cria rota alternativa sem fonte. Isso não significa que não existam outras formas de proteção: significa que o procedimento brasileiro coberto por este sistema exige presença no território.',
  steps: [
    { title: 'Leia a fonte oficial do serviço de refúgio', desc: 'A página oficial descreve quem pode solicitar e como o pedido é apresentado.', src: 'refugio' },
    { title: 'Conheça os serviços da Coordenação-Geral do Conare', desc: 'A página do Ministério da Justiça reúne os serviços oficiais relacionados a refúgio.', src: 'conareServicos' },
    { title: 'Procure orientação jurídica gratuita', desc: 'A Defensoria Pública da União pode orientar sobre a sua situação sem que você dependa apenas desta triagem.', src: 'dpu' }
  ],
  costs: [ { label: 'Custos deste pedido', value: 'Não se aplica agora', note: 'Sem estar em território brasileiro, esta versão não indica custos para o pedido de refúgio brasileiro.', waiver: false, src: 'conareServicos' } ],
  points: ['dpu'],
  outsidePoints: ['dpu'],
  outsideSummary: 'Atendimento jurídico gratuito',
  outsideBody: 'O pedido de refúgio brasileiro é protocolado em território brasileiro. Esta versão não apresenta consulado como local de protocolo deste pedido.',
  sources: ['refugio', 'conareServicos', 'lei9474', 'dpu'],
  fallbacks: [
    { title: 'Se você entrar em território brasileiro', body: 'A rota muda: volte à triagem e refaça a pergunta sobre onde você está.' },
    { title: 'Se alguém oferecer protocolar refúgio para você de fora do Brasil', body: 'Desconfie. O procedimento é conduzido por órgão público brasileiro e não depende de intermediários pagos.' }
  ],
  missing: ['Se e quando você conseguirá entrar em território brasileiro.', 'Qual é a sua situação documental no país onde está.'],
  docs: { verify: [ { name: 'Requisito de estar em território brasileiro', condition: 'Confirme na página oficial do serviço antes de reunir qualquer documento.', src: 'refugio', explain: 'É o requisito que hoje impede apresentar este pedido de fora do Brasil.' } ] }
};

const REFUGIO_INSUFFICIENT = {
  title: 'Solicitação de refúgio — informações ainda insuficientes',
  certainty: 'needs_info',
  meaning: 'As informações fornecidas ainda não são suficientes para indicar o pedido de refúgio como o caminho principal. Este aplicativo não decide reconhecimento de refúgio e também não afirma que o pedido é o caminho mais adequado quando os dados informados são insuficientes ou contraditórios. Você pode conhecer o procedimento oficial, responder novamente ou buscar atendimento humano.',
  steps: [
    { title: 'Conheça o procedimento oficial de solicitação de refúgio', desc: 'A página oficial descreve o procedimento sem que isso signifique indicação de elegibilidade.', src: 'refugio' },
    { title: 'Veja os serviços oficiais relacionados a refúgio', desc: 'A página do Ministério da Justiça reúne os serviços da Coordenação-Geral do Conare.', src: 'conareServicos' },
    { title: 'Procure orientação jurídica gratuita', desc: 'A Defensoria Pública da União atende gratuitamente e pode analisar a sua situação.', src: 'dpu' }
  ],
  costs: [ { label: 'Solicitação de refúgio', value: 'Gratuito', note: 'A Coordenação-Geral do Conare informa que seus serviços são gratuitos. Nunca pague a intermediários.', waiver: false, src: 'conareServicos' } ],
  points: ['dpu'],
  outsidePoints: ['dpu'],
  outsideSummary: 'Atendimento jurídico gratuito',
  sources: ['refugio', 'conareServicos', 'lei9474', 'dpu'],
  fallbacks: [
    { title: 'Se houver informação que você não quis escrever', body: 'Você não precisa relatar nada que não queira. Nesses casos, atendimento humano é mais adequado do que uma triagem automatizada.' },
    { title: 'Se as respostas não descreverem bem a sua situação', body: 'Responda novamente ou procure a Defensoria Pública da União: uma pessoa real pode analisar o que o formulário não capta.' }
  ],
  missing: ['O que exatamente faz você não poder retornar ao seu país, se for o caso.', 'Se existe risco atual a você ou à sua família.'],
  docs: { verify: [ { name: 'Informações que sustentam o pedido', condition: 'A fonte oficial descreve o procedimento; a análise dos fatos cabe à autoridade competente.', src: 'refugio', explain: 'Não reunimos documentos antes de saber se este é o caminho do seu caso.' } ] }
};

const CRNM_VIA2_RES_BLOCK = {
  title: 'Segunda via da CRNM — requisito de autorização de residência válida',
  certainty: 'blocked',
  meaning: 'A fonte oficial informa que o serviço de segunda via é destinado a quem possui CRNM ou CIE com autorização de residência válida. Como você informou que a sua autorização de residência não está válida, esta versão não apresenta a segunda via como rota direta e não afirma qual é a sua situação migratória. O passo anterior é verificar a autorização de residência.',
  steps: [
    { title: 'Leia o requisito na página oficial da segunda via', desc: 'A página descreve a quem o serviço se destina.', src: 'crnm2via' },
    { title: 'Verifique a situação da sua autorização de residência', desc: 'A página oficial de autorização de residência trata do pedido e da renovação da autorização, não apenas do documento.', src: 'residencia' },
    { title: 'Confira as dúvidas frequentes da Polícia Federal', desc: 'A PF publica esclarecimentos sobre serviços de migração.', src: 'faqPf' },
    { title: 'Procure apoio jurídico gratuito', desc: 'A Defensoria Pública da União atende gratuitamente.', src: 'dpu' }
  ],
  costs: [ { label: 'Custos desta rota', value: 'Precisa confirmar', note: 'Sem autorização de residência válida confirmada, esta versão não indica a taxa de segunda via como aplicável ao seu caso.', waiver: false, src: 'taxas' } ],
  points: ['delemig', 'dpu'],
  outsidePoints: ['dpu'],
  outsideSummary: 'Etapas presenciais da CRNM ocorrem no Brasil',
  sources: ['crnm2via', 'residencia', 'faqPf', 'taxas', 'dpu'],
  fallbacks: [
    { title: 'Se a sua autorização de residência estiver vencida', body: 'O caminho pode ser a renovação da autorização, e não a emissão de nova via do documento. Confirme na fonte oficial.' },
    { title: 'Se alguém disser que resolve a segunda via mesmo assim', body: 'Desconfie. Requisito de serviço público não é negociado por intermediário.' }
  ],
  missing: ['Qual é a situação atual da sua autorização de residência.', 'Se o seu caso é renovação da autorização ou emissão de documento.'],
  docs: { verify: [ { name: 'Autorização de residência válida', condition: 'Confirme a validade da autorização de residência antes de reunir documentos da segunda via.', src: 'crnm2via', explain: 'Validade da autorização de residência é diferente da validade do cartão da CRNM.' } ] }
};

const CRNM_VIA2_RES_UNKNOWN = {
  title: 'Segunda via da CRNM — precisamos confirmar a sua autorização de residência',
  certainty: 'needs_info',
  meaning: 'A fonte oficial informa que o serviço de segunda via é destinado a quem possui CRNM ou CIE com autorização de residência válida. Você não soube confirmar se a sua autorização está válida, e esta versão não presume validade nem elegibilidade. Antes de seguir, confirme essa informação, se possível com apoio jurídico gratuito.',
  steps: [
    { title: 'Leia o requisito na página oficial da segunda via', desc: 'A página descreve a quem o serviço se destina.', src: 'crnm2via' },
    { title: 'Confirme a situação da sua autorização de residência', desc: 'A página oficial de autorização de residência descreve pedido e renovação.', src: 'residencia' },
    { title: 'Procure apoio jurídico gratuito', desc: 'A Defensoria Pública da União pode ajudar a confirmar a sua situação.', src: 'dpu' }
  ],
  costs: [ { label: 'Custos desta rota', value: 'Precisa confirmar', note: 'Sem confirmar a autorização de residência, esta versão não indica taxa aplicável.', waiver: false, src: 'taxas' } ],
  points: ['delemig', 'dpu'],
  outsidePoints: ['dpu'],
  outsideSummary: 'Etapas presenciais da CRNM ocorrem no Brasil',
  sources: ['crnm2via', 'residencia', 'faqPf', 'taxas', 'dpu'],
  fallbacks: [
    { title: 'Se você não sabe onde confirmar', body: 'A Defensoria Pública da União e os canais oficiais da Polícia Federal são os caminhos. Não pague intermediários por consulta.' },
    { title: 'Se a informação recebida for contraditória', body: 'Peça a informação por escrito e confira na página oficial.' }
  ],
  missing: ['Se a sua autorização de residência está válida hoje.', 'Se o seu caso é renovação da autorização ou emissão de documento.'],
  docs: { verify: [ { name: 'Autorização de residência válida', condition: 'Confirme a validade da autorização de residência antes de reunir documentos da segunda via.', src: 'crnm2via', explain: 'Validade da autorização de residência é diferente da validade do cartão da CRNM.' } ] }
};

const CATEGORIES = [
  { tag: '01', title: 'Documento ou situação migratória', sub: 'Quero regularizar ou entender meus documentos', flow: 'crnm' },
  { tag: '02', title: 'Refúgio e proteção', sub: 'Tenho medo de voltar ao meu país', flow: 'refugio' },
  { tag: '03', title: 'Não tenho nacionalidade', sub: 'Nenhum país me reconhece como nacional', flow: 'apatridia' },
  { tag: '04', title: 'Família', sub: 'Quero morar com um familiar no Brasil', flow: 'familia' },
  { tag: '05', title: 'Trabalho', sub: 'Fora do recorte verificado desta versão', flow: 'unmapped' },
  { tag: '06', title: 'Saúde', sub: 'Fora do recorte verificado desta versão', flow: 'unmapped' },
  { tag: '07', title: 'Escola ou faculdade', sub: 'Fora do recorte verificado desta versão', flow: 'unmapped' },
  { tag: '08', title: 'Assistência e benefícios', sub: 'Fora do recorte verificado desta versão', flow: 'unmapped' },
  { tag: '09', title: 'Sofri violência ou discriminação', sub: 'Preciso de proteção ou ajuda', flow: 'urgent' },
  { tag: '10', title: 'Perdi, venceu ou preciso corrigir meu documento', sub: 'CRNM: segunda via, substituição ou documento vencido', flow: 'crnm' },
  { tag: '11', title: 'Naturalização', sub: 'Fora do recorte verificado desta versão', flow: 'unmapped' },
  { tag: '12', title: 'Não sei qual é o meu problema', sub: 'Me ajude a descobrir', flow: 'narrative' }
];

const DOC_STATES = [
  { label: 'Marcar', mark: '', border: 'rgba(11,31,51,.25)', bg: '#fff', color: 'rgba(11,31,51,.4)', text: '' },
  { label: 'Já tenho', mark: '✓', border: '#14666B', bg: '#14666B', color: '#14666B', text: 'Já tenho' },
  { label: 'Não tenho', mark: '–', border: '#B02A2A', bg: '#B02A2A', color: '#B02A2A', text: 'Não tenho' },
  { label: 'Preciso descobrir', mark: '?', border: '#C08A2E', bg: '#C08A2E', color: '#8A5F14', text: 'Preciso descobrir' }
];

/* MDIA_AI_VALIDATOR_START — validação pós-modelo (AI001). Mesma função usada nos testes internos. */
const AI_LIMITS = { factsMax: 6, factLen: 240, questionsMax: 4, questionLen: 180 };
const AI_BAD_PATTERNS = [
  { re: /https?:\/\//i, why: 'URL' },
  { re: /www\./i, why: 'URL' },
  { re: /javascript:/i, why: 'protocolo executável' },
  { re: /data:/i, why: 'protocolo de dados' },
  { re: /<\s*\/?\s*[a-z][^>]*>/i, why: 'HTML' },
  { re: /&lt;\s*script/i, why: 'HTML escapado' },
  { re: /(ignore|desconsidere|esqueca|esqueça)[^.]{0,60}(instru|regra|prompt|sistema|politica|política)/i, why: 'tentativa de alterar a política do sistema' },
  { re: /system\s*:/i, why: 'marcador de papel do modelo' },
  { re: /(execute|rode|abra o terminal|curl |rm -rf)/i, why: 'comando' },
  { re: /\{\{|\}\}/, why: 'template injection' }
];
const AI_FLOW_ALLOWLIST = { refugio: 'refugio', apatridia: 'apatridia', crnm: 'crnm', familia: 'familia', reuniao: 'familia' };
function aiCheckString(v, maxLen) {
  if (typeof v !== 'string') return { ok: false, why: 'campo não é string' };
  const t = v.trim();
  if (!t) return { ok: false, why: 'string vazia' };
  if (t.length > maxLen) return { ok: false, why: 'string acima do limite de ' + maxLen + ' caracteres' };
  for (let i = 0; i < AI_BAD_PATTERNS.length; i++) {
    if (AI_BAD_PATTERNS[i].re.test(t)) return { ok: false, why: 'conteúdo proibido: ' + AI_BAD_PATTERNS[i].why };
  }
  return { ok: true, value: t };
}
function aiValidate(raw) {
  const violations = [];
  let j = null;
  try {
    if (typeof raw === 'string') {
      const m = raw.match(/\{[\s\S]*\}/);
      j = JSON.parse(m ? m[0] : raw);
    } else j = raw;
  } catch (e) { return { ok: false, violations: ['JSON inválido'], value: null }; }
  if (!j || typeof j !== 'object' || Array.isArray(j)) return { ok: false, violations: ['payload não é objeto'], value: null };
  if (!Array.isArray(j.facts)) return { ok: false, violations: ['campo facts ausente ou não é lista'], value: null };
  if (!j.facts.length) return { ok: false, violations: ['facts vazio'], value: null };
  if (j.facts.length > AI_LIMITS.factsMax) return { ok: false, violations: ['facts acima do limite de ' + AI_LIMITS.factsMax], value: null };
  const facts = [];
  for (let i = 0; i < j.facts.length; i++) {
    const c = aiCheckString(j.facts[i], AI_LIMITS.factLen);
    if (!c.ok) return { ok: false, violations: ['facts[' + i + ']: ' + c.why], value: null };
    facts.push(c.value);
  }
  const mq = j.missing_questions === undefined || j.missing_questions === null ? [] : j.missing_questions;
  if (!Array.isArray(mq)) return { ok: false, violations: ['missing_questions não é lista'], value: null };
  if (mq.length > AI_LIMITS.questionsMax) return { ok: false, violations: ['missing_questions acima do limite de ' + AI_LIMITS.questionsMax], value: null };
  const questions = [];
  for (let i = 0; i < mq.length; i++) {
    const c = aiCheckString(mq[i], AI_LIMITS.questionLen);
    if (!c.ok) return { ok: false, violations: ['missing_questions[' + i + ']: ' + c.why], value: null };
    questions.push(c.value);
  }
  let flow = null;
  if (j.suggested_flow !== null && j.suggested_flow !== undefined && j.suggested_flow !== 'null') {
    if (typeof j.suggested_flow === 'string' && AI_FLOW_ALLOWLIST[j.suggested_flow]) flow = AI_FLOW_ALLOWLIST[j.suggested_flow];
    else violations.push('suggested_flow fora da allowlist — convertido para null');
  }
  let confidence = 'low';
  if (['low', 'medium', 'high'].indexOf(j.confidence) >= 0) confidence = j.confidence;
  else violations.push('confidence inválida — comportamento conservador (low)');
  let risk = '';
  if (j.risk_reason !== undefined && j.risk_reason !== null && j.risk_reason !== '') {
    const c = aiCheckString(j.risk_reason, AI_LIMITS.questionLen);
    if (!c.ok) violations.push('risk_reason descartado: ' + c.why);
    else risk = c.value;
  }
  return { ok: true, violations: violations, value: { facts: facts, missing: questions, flow: flow, needsHuman: !!j.needs_human, risk: risk, confidence: confidence, confirmed: false } };
}
/* MDIA_AI_VALIDATOR_END */

const AI_SYSTEM = [
  'Você é a camada de organização de relatos do Meu Direito.IA, uma ferramenta de orientação migratória no Brasil.',
  'Sua única função é organizar o que a pessoa escreveu. Você NÃO dá orientação jurídica, NÃO cita leis, NÃO cria fontes ou links, NÃO afirma elegibilidade e NÃO acrescenta fatos que não estejam no relato.',
  'Responda SOMENTE com um objeto JSON válido, sem texto antes ou depois, no formato:',
  '{"facts":["fato objetivo extraído do relato"],"missing_questions":["pergunta curta sobre informação que falta"],"suggested_flow":"refugio|apatridia|crnm|reuniao|null","needs_human":true,"risk_reason":"","confidence":"low|medium|high"}',
  'facts: no máximo 6 itens, cada um em português simples, na segunda pessoa, apenas com o que a pessoa contou.',
  'missing_questions: no máximo 4 perguntas curtas sobre informação que muda a rota.',
  'suggested_flow: apenas o fluxo determinístico que deve ser investigado, ou null se não houver base suficiente.',
  'needs_human: true quando houver urgência, risco, violência, criança ou adolescente, ou informação insuficiente.',
  'risk_reason: uma frase curta, vazia quando needs_human for false.'
].join(' ');

const FLOW_LABEL = { refugio: 'Solicitação de refúgio', apatridia: 'Reconhecimento da condição de apátrida', crnm: 'Carteira de Registro Nacional Migratório (CRNM)', familia: 'Reunião familiar' };


window.MD_LEGAL = { V: V, APPV: APPV, KB: KB, SRC: SRC, DELEMIG: DELEMIG, DPU_POINT: DPU_POINT, CONSULAR_POINT: CONSULAR_POINT, PF_LOCATOR: PF_LOCATOR,
  T_QUESTIONS: T_QUESTIONS, CRNM_BASE_DOCS: CRNM_BASE_DOCS, CRNM_COSTS: CRNM_COSTS, FLOWS: FLOWS,
  APATRIDIA_UNCERTAIN: APATRIDIA_UNCERTAIN, APATRIDIA_BLOCK: APATRIDIA_BLOCK, REFUGIO_LOCATION_BLOCK: REFUGIO_LOCATION_BLOCK,
  REFUGIO_INSUFFICIENT: REFUGIO_INSUFFICIENT, CRNM_VIA2_RES_BLOCK: CRNM_VIA2_RES_BLOCK, CRNM_VIA2_RES_UNKNOWN: CRNM_VIA2_RES_UNKNOWN,
  CATEGORIES: CATEGORIES, aiValidate: aiValidate, AI_SYSTEM: AI_SYSTEM, FLOW_LABEL: FLOW_LABEL };
})();
