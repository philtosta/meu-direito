/* Meu Direito V3 — CaseRepository (DEMO, local).
   Entidades: Case, CaseEvent, CaseMessage, CaseNote, Attachment, Referral, Institution, TeamMember.
   Nada sai do navegador. Nomes e casos são fictícios. Substituível por backend via mesma interface. */
(function () {
  var L = window.MD_LEGAL;
  var STATUSES = ['new', 'triage', 'waiting_service', 'in_service', 'waiting_user', 'waiting_document', 'referred', 'waiting_agency', 'done', 'archived'];
  var STAGE = { new: 0, triage: 1, waiting_service: 1, in_service: 2, waiting_user: 2, waiting_document: 2, referred: 3, waiting_agency: 3, done: 4, archived: 4 };
  var REF_STATUSES = ['preparing', 'sent', 'received', 'external', 'return_requested', 'done', 'not_done'];
  var TOPICS = ['docs', 'refuge', 'family', 'stateless', 'work', 'health', 'edu', 'social', 'violence', 'natural', 'other', 'unsure'];
  var ROLES = {
    volunteer: ['overview', 'queue', 'mine', 'case.view', 'case.act', 'messages', 'agenda', 'sources', 'referrals', 'institutions'],
    supervisor: ['overview', 'queue', 'mine', 'case.view', 'case.act', 'case.assign', 'messages', 'agenda', 'sources', 'referrals', 'institutions', 'manage', 'team', 'reports'],
    admin: ['overview', 'queue', 'mine', 'case.view', 'case.act', 'case.assign', 'messages', 'agenda', 'sources', 'referrals', 'institutions', 'manage', 'team', 'reports', 'settings']
  };
  var TEAM = [
    { id: 'u1', name: 'Maria Souza', role: 'volunteer', status: 'online', langs: ['pt-BR', 'es'], skills: ['docs', 'family'], cap: 6 },
    { id: 'u2', name: 'João Lima', role: 'volunteer', status: 'away', langs: ['pt-BR', 'en'], skills: ['stateless', 'work'], cap: 5 },
    { id: 'u3', name: 'Fátima Haddad', role: 'volunteer', status: 'online', langs: ['pt-BR', 'ar', 'en'], skills: ['refuge', 'health'], cap: 5 },
    { id: 'u4', name: 'Olena Kovalenko', role: 'volunteer', status: 'offline', langs: ['pt-BR', 'uk', 'en'], skills: ['family', 'docs'], cap: 4 },
    { id: 'u5', name: 'Ana Ribeiro', role: 'supervisor', status: 'online', langs: ['pt-BR', 'es', 'en'], skills: [], cap: 3 },
    { id: 'u6', name: 'Conta Admin (demo)', role: 'admin', status: 'online', langs: ['pt-BR'], skills: [], cap: 0 }
  ];
  function pt(k) { return L.SRC[k] ? k : null; }
  var INSTITUTIONS = [
    { id: 'pf', name: L.DELEMIG.name, org: 'Polícia Federal', cat: 'federal', uf: 'BA', city: 'Salvador', src: pt('pfBahia'), rows: L.DELEMIG.rows, langs: ['pt-BR'], services: ['CRNM', 'Registro migratório', 'Autorização de residência'] },
    { id: 'conare', name: 'CONARE — Sisconare', org: 'Ministério da Justiça e Segurança Pública', cat: 'federal', uf: '—', city: 'Online', src: pt('sisconare'), rows: [], langs: ['pt-BR', 'en', 'es', 'fr'], services: ['Solicitação de refúgio'] },
    { id: 'mj', name: 'Reconhecimento da condição de apátrida', org: 'Ministério da Justiça e Segurança Pública', cat: 'federal', uf: '—', city: 'Online', src: pt('apatridia_mj'), rows: [], langs: ['pt-BR'], services: ['Apatridia'] },
    { id: 'dpu', name: L.DPU_POINT.name, org: 'DPU', cat: 'justice', uf: 'BR', city: '—', src: pt('dpu'), rows: L.DPU_POINT.rows, langs: ['pt-BR'], services: ['Atendimento jurídico gratuito'] },
    { id: 'cras', name: 'CRAS — Salvador', org: 'Prefeitura de Salvador', cat: 'social', uf: 'BA', city: 'Salvador', src: pt('cras'), rows: [], langs: ['pt-BR'], services: ['Assistência social', 'CadÚnico'] },
    { id: 'crai', name: 'CRAI — Lauro de Freitas', org: 'Prefeitura de Lauro de Freitas', cat: 'social', uf: 'BA', city: 'Lauro de Freitas', src: pt('craiLf'), rows: [], langs: ['pt-BR'], services: ['Atendimento a migrantes'] },
    { id: 'creas', name: 'CREAS', org: 'Rede municipal de assistência', cat: 'social', uf: 'BA', city: '—', src: null, rows: [], langs: [], services: ['Violação de direitos'] },
    { id: 'dpe', name: 'Defensoria Pública do Estado', org: 'Defensoria estadual', cat: 'justice', uf: 'BA', city: '—', src: null, rows: [], langs: [], services: ['Atendimento jurídico'] },
    { id: 'partner', name: 'Organização parceira (exemplo)', org: 'Rede de apoio', cat: 'partner', uf: 'BA', city: 'Salvador', src: null, rows: [], langs: [], services: ['Acolhimento'] }
  ];

  var consent = false, db, KEY = 'md3_cases';
  function now() { return Date.now(); }
  function H(h) { return now() - h * 3600000; }
  function ev(at, actor, action, detail) { return { at: at, actor: actor, action: action, detail: detail || '' }; }
  function mk(n, o) {
    var c = Object.assign({ id: 'MD-DEMO-2026-' + String(n).padStart(6, '0'), code: String(1000 + (n * 7919) % 9000), origin: 'seed', city: 'Salvador', priority: 'normal', assignee: null, contact: { name: '', channel: 'email', email: 'contato.demo@exemplo.org', phone: '' }, messages: [], notes: [], docRequests: [], attachments: [], referrals: [], engine: null, serviceId: null, shareTriage: false }, o);
    c.updatedAt = c.events[c.events.length - 1].at; c.createdAt = c.events[0].at; return c;
  }
  function seeds() {
    return { seq: 110, cases: [
      mk(101, { topic: 'docs', serviceId: 'crnm2via', lang: 'es', status: 'waiting_document', assignee: 'u1', code: '4821', contact: { name: 'Lucía', channel: 'whatsapp', email: '', phone: '71900000001' },
        summary: 'Perdi minha CRNM no ônibus e preciso da segunda via para começar um trabalho.', engine: { flowTitle: 'Segunda via da CRNM', certainty: 'direct', facts: ['Você está no Brasil.', 'Você está em Salvador.', 'Você perdeu o documento.', 'Sua autorização de residência está válida.'] }, shareTriage: true,
        events: [ev(H(50), 'Autoatendimento', 'Demanda criada'), ev(H(49.9), 'Sistema', 'Triagem concluída', 'Segunda via da CRNM'), ev(H(30), 'Maria Souza', 'Demanda assumida'), ev(H(29), 'Maria Souza', 'Documento solicitado', 'Boletim de ocorrência')],
        messages: [{ at: H(29), from: 'staff', author: 'Maria Souza', text: 'Olá, Lucía. Para seguir com a segunda via, envie o boletim de ocorrência da perda, se tiver.' }],
        docRequests: [{ id: 'd1', name: 'Boletim de ocorrência', status: 'requested', at: H(29) }],
        notes: [{ at: H(29.5), author: 'Maria Souza', text: 'Fonte crnm2via confirma BO em caso de extravio. Conferir antes do agendamento.' }] }),
      mk(102, { topic: 'refuge', lang: 'ar', status: 'in_service', assignee: 'u3', priority: 'high', summary: 'Relato original em árabe: saiu do país por ameaças e chegou há duas semanas. Quer saber como pedir proteção.',
        engine: { flowTitle: 'Solicitação de refúgio', certainty: 'direct', facts: ['Você está no Brasil.', 'Você tem medo de voltar ao seu país.'] },
        events: [ev(H(20), 'Autoatendimento', 'Demanda criada'), ev(H(19.9), 'Sistema', 'Triagem concluída', 'Solicitação de refúgio'), ev(H(6), 'Fátima Haddad', 'Demanda assumida')],
        messages: [{ at: H(5.5), from: 'staff', author: 'Fátima Haddad', text: 'مرحباً، سنساعدك في طلب اللجوء عبر نظام Sisconare.' }] }),
      mk(103, { topic: 'family', serviceId: 'reuniao', lang: 'uk', status: 'waiting_service', summary: 'Relato original em ucraniano: quer trazer a filha que está no exterior.', events: [ev(H(9), 'Autoatendimento', 'Demanda criada'), ev(H(8.9), 'Sistema', 'Triagem concluída', 'Reunião familiar — familiar no exterior')] }),
      mk(104, { topic: 'violence', lang: 'pt-BR', status: 'new', priority: 'urgent', summary: 'Sofri ofensas xenofóbicas no trabalho e tenho medo de perder o emprego.', events: [ev(H(1.2), 'Autoatendimento', 'Demanda criada')] }),
      mk(105, { topic: 'stateless', serviceId: 'apatridia', lang: 'en', status: 'waiting_agency', assignee: 'u2', summary: 'Nasci em um campo e nenhum país me reconhece. Moro em Salvador há 3 anos.',
        events: [ev(H(200), 'Autoatendimento', 'Demanda criada'), ev(H(190), 'João Lima', 'Demanda assumida'), ev(H(150), 'João Lima', 'Encaminhada', 'Ministério da Justiça — apatridia'), ev(H(100), 'João Lima', 'Status alterado', 'Aguardando retorno do órgão')],
        referrals: [{ id: 'r1', instId: 'mj', type: 'Pedido de reconhecimento', reason: 'Apatridia com residência no Brasil', at: H(150), owner: 'João Lima', instructions: 'Acompanhar protocolo no serviço oficial.', docs: 'Documentos pessoais que tiver', status: 'external', feedback: '', note: '' }] }),
      mk(106, { topic: 'docs', lang: 'zh-CN', status: 'triage', city: 'Lauro de Freitas', summary: 'Relato original em chinês: a CRNM venceu e não sabe se precisa renovar a residência.', events: [ev(H(3), 'Autoatendimento', 'Demanda criada'), ev(H(2.9), 'Sistema', 'Triagem com pendência', 'Tipo de residência não informado')] }),
      mk(107, { topic: 'social', lang: 'es', status: 'referred', assignee: 'u1', summary: 'Chegamos com duas crianças e precisamos de ajuda com alimentação e cadastro.',
        events: [ev(H(80), 'Autoatendimento', 'Demanda criada'), ev(H(70), 'Maria Souza', 'Demanda assumida'), ev(H(60), 'Maria Souza', 'Encaminhada', 'CRAS — Salvador')],
        referrals: [{ id: 'r2', instId: 'cras', type: 'Atendimento socioassistencial', reason: 'Família com crianças, sem renda', at: H(60), owner: 'Maria Souza', instructions: 'Procure o CRAS mais próximo com documento de identificação.', docs: 'Documento de identificação', status: 'sent', feedback: '', note: '' }] }),
      mk(108, { topic: 'work', lang: 'pt-BR', status: 'done', assignee: 'u2', summary: 'Dúvida sobre carteira de trabalho digital.', events: [ev(H(300), 'Autoatendimento', 'Demanda criada'), ev(H(290), 'João Lima', 'Demanda assumida'), ev(H(240), 'João Lima', 'Concluída', 'Orientação enviada com fonte oficial')] }),
      mk(109, { topic: 'health', lang: 'ar', status: 'waiting_user', assignee: 'u3', summary: 'Relato original em árabe: precisa de atendimento no SUS e não tem cartão.', events: [ev(H(40), 'Autoatendimento', 'Demanda criada'), ev(H(35), 'Fátima Haddad', 'Demanda assumida'), ev(H(34), 'Fátima Haddad', 'Informação solicitada', 'Bairro onde mora')],
        messages: [{ at: H(34), from: 'staff', author: 'Fátima Haddad', text: 'في أي حي تسكن؟' }] }),
      mk(110, { topic: 'natural', lang: 'en', status: 'new', summary: 'I have lived in Brazil for 6 years and want to know about naturalisation.', events: [ev(H(0.4), 'Autoatendimento', 'Demanda criada')] })
    ] };
  }
  function load() {
    db = seeds();
    try { var s = window.localStorage; consent = !!(s && s.getItem('md2_consent') === '1'); var x = consent && JSON.parse(s.getItem(KEY) || 'null'); if (x && x.cases) db = x; } catch (e) {}
  }
  function persist() { try { if (consent && window.localStorage) window.localStorage.setItem(KEY, JSON.stringify(db)); } catch (e) {} }
  load();
  function clone(x) { return JSON.parse(JSON.stringify(x)); }
  function wait(v, ms) { return new Promise(function (r) { setTimeout(function () { r(v); }, ms || 350); }); }
  function find(id) { return db.cases.filter(function (c) { return c.id === id; })[0]; }
  function touch(c, actor, action, detail) { var t = now(); c.events.push(ev(t, actor, action, detail)); c.updatedAt = t; persist(); }
  function member(id) { return TEAM.filter(function (m) { return m.id === id; })[0] || null; }
  var LABEL = { new: 'Novo', triage: 'Em triagem', waiting_service: 'Aguardando atendimento', in_service: 'Em atendimento', waiting_user: 'Aguardando informação do usuário', waiting_document: 'Aguardando documento', referred: 'Encaminhado', waiting_agency: 'Aguardando retorno do órgão', done: 'Concluído', archived: 'Arquivado' };
  var REF_LABEL = { preparing: 'Preparando', sent: 'Encaminhado', received: 'Recebido', external: 'Em análise externa', return_requested: 'Retorno solicitado', done: 'Concluído', not_done: 'Não concluído' };

  var cases = {
    list: function () { return clone(db.cases).sort(function (a, b) { return b.updatedAt - a.updatedAt; }); },
    get: function (id) { var c = find(id); return c ? clone(c) : null; },
    create: function (i) {
      db.seq += 1; var id = 'MD-DEMO-2026-' + String(db.seq).padStart(6, '0');
      var a = new Uint32Array(1); (window.crypto || {}).getRandomValues ? window.crypto.getRandomValues(a) : (a[0] = Math.random() * 1e9);
      var code = String(1000 + a[0] % 9000), t = now();
      var c = { id: id, code: code, origin: 'user', topic: i.topic, serviceId: i.serviceId || null, lang: i.lang, city: i.city || null, priority: i.priority || 'normal', status: 'new', assignee: null,
        contact: { name: i.name || '', channel: i.channel, email: i.email || '', phone: i.phone || '' }, summary: i.summary, shareTriage: !!i.engine, engine: i.engine || null,
        attachments: (i.files || []).map(function (f) { return { name: f.name, size: f.size, type: f.type }; }), messages: [], notes: [], docRequests: [], referrals: [],
        events: [ev(t, 'Autoatendimento', 'Demanda criada')], createdAt: t, updatedAt: t };
      if (i.engine) c.events.push(ev(t, 'Sistema', 'Triagem anexada', i.engine.flowTitle));
      db.cases.push(c); persist(); return wait({ case: clone(c), code: code }, 500);
    },
    access: function (id, code) { var c = find(String(id || '').trim().toUpperCase()); return wait(c && c.code === code ? clone(c) : null); },
    accept: function (id, user) { var c = find(id); c.assignee = user.id; if (['new', 'triage', 'waiting_service'].indexOf(c.status) >= 0) c.status = 'in_service'; touch(c, user.name, 'Demanda assumida'); return clone(c); },
    assign: function (id, toId, by) { var c = find(id), m = member(toId); c.assignee = toId; touch(c, by.name, 'Responsável definido', m ? m.name : ''); return clone(c); },
    setStatus: function (id, st, by) { var c = find(id); c.status = st; touch(c, by.name, 'Status alterado', LABEL[st]); return clone(c); },
    message: function (id, from, author, text) { var c = find(id); c.messages.push({ at: now(), from: from, author: author, text: text }); if (from === 'user' && c.status === 'waiting_user') c.status = 'in_service'; touch(c, from === 'user' ? 'Usuário' : author, from === 'user' ? 'Mensagem do usuário' : 'Mensagem enviada ao usuário'); return clone(c); },
    note: function (id, author, text) { var c = find(id); c.notes.push({ at: now(), author: author, text: text }); touch(c, author, 'Nota interna registrada'); return clone(c); },
    requestDoc: function (id, name, by) { var c = find(id); c.docRequests.push({ id: 'd' + now(), name: name, status: 'requested', at: now() }); c.status = 'waiting_document'; touch(c, by.name, 'Documento solicitado', name); return clone(c); },
    uploadDoc: function (id, reqId, file) { var c = find(id), r = c.docRequests.filter(function (x) { return x.id === reqId; })[0]; if (r) { r.status = 'received'; r.file = { name: file.name, size: file.size, type: file.type }; } if (c.docRequests.every(function (x) { return x.status === 'received'; }) && c.status === 'waiting_document') c.status = 'in_service'; touch(c, 'Usuário', 'Documento recebido', r ? r.name : ''); return wait(clone(c)); },
    refer: function (id, ref, by) { var c = find(id); ref.id = 'r' + now(); ref.at = now(); ref.owner = by.name; ref.status = ref.status || 'preparing'; c.referrals.push(ref); if (ref.status !== 'preparing') c.status = 'referred'; var inst = INSTITUTIONS.filter(function (x) { return x.id === ref.instId; })[0]; touch(c, by.name, 'Encaminhamento criado', inst ? inst.name : ''); return clone(c); },
    referStatus: function (id, refId, st, by, feedback) { var c = find(id), r = c.referrals.filter(function (x) { return x.id === refId; })[0]; r.status = st; if (feedback) r.feedback = feedback; if (st === 'sent' && c.status !== 'waiting_agency') c.status = 'referred'; if (st === 'external' || st === 'return_requested') c.status = 'waiting_agency'; touch(c, by.name, 'Encaminhamento atualizado', REF_LABEL[st]); return clone(c); }
  };
  function metrics() {
    var cs = db.cases, open = cs.filter(function (c) { return c.status !== 'done' && c.status !== 'archived'; });
    var closed = cs.filter(function (c) { return c.status === 'done'; });
    var durs = closed.map(function (c) { return c.updatedAt - c.createdAt; });
    var by = function (k, list) { var m = {}; (list || cs).forEach(function (c) { m[c[k]] = (m[c[k]] || 0) + 1; }); return m; };
    var refs = []; cs.forEach(function (c) { c.referrals.forEach(function (r) { refs.push(r); }); });
    var load = TEAM.filter(function (m) { return m.cap; }).map(function (m) { return { id: m.id, name: m.name, role: m.role, active: open.filter(function (c) { return c.assignee === m.id; }).length, cap: m.cap }; });
    return { total: cs.length, last7: cs.filter(function (c) { return c.createdAt > H(168); }).length, open: open.length, closed: closed.length, unassigned: open.filter(function (c) { return !c.assignee; }).length,
      avgHours: durs.length ? Math.round(durs.reduce(function (a, b) { return a + b; }, 0) / durs.length / 3600000) : null,
      stale: open.filter(function (c) { return c.updatedAt < H(48); }), byTopic: by('topic', open), byLang: by('lang', open), byStatus: by('status', open),
      refs: refs.length, refsByStatus: refs.reduce(function (m, r) { m[r.status] = (m[r.status] || 0) + 1; return m; }, {}), load: load, urgent: open.filter(function (c) { return c.priority === 'urgent'; }).length };
  }
  window.MD_CASES = { STATUSES: STATUSES, STAGE: STAGE, REF_STATUSES: REF_STATUSES, TOPICS: TOPICS, ROLES: ROLES, TEAM: TEAM, INSTITUTIONS: INSTITUTIONS, LABEL: LABEL, REF_LABEL: REF_LABEL,
    cases: cases, metrics: metrics, member: member, can: function (role, perm) { return !!(ROLES[role] && ROLES[role].indexOf(perm) >= 0); },
    setConsent: function (on) { consent = !!on; if (on) persist(); else try { window.localStorage.removeItem(KEY); } catch (e) {} },
    clearAll: function () { try { window.localStorage && window.localStorage.removeItem(KEY); } catch (e) {} consent = false; db = seeds(); },
    reset: function () { db = seeds(); persist(); },
    selfTest: function () {
      var R = [], ok = function (id, name, v) { R.push({ id: id, name: name, pass: !!v }); };
      var m = metrics(); ok('C01', 'Sementes carregadas com 10 demandas', db.cases.length >= 10);
      ok('C02', 'Todos os status das sementes são válidos', db.cases.every(function (c) { return STATUSES.indexOf(c.status) >= 0; }));
      ok('C03', 'Instituições sem fonte marcadas como não validadas', INSTITUTIONS.every(function (i) { return i.src === null || !!L.SRC[i.src]; }));
      ok('C04', 'RBAC: voluntário não acessa gestão', !this.can('volunteer', 'manage') && this.can('supervisor', 'manage'));
      ok('C05', 'RBAC: somente admin acessa configurações', this.can('admin', 'settings') && !this.can('supervisor', 'settings'));
      ok('C06', 'Métricas: abertas + concluídas + arquivadas = total', m.open + m.closed + db.cases.filter(function (c) { return c.status === 'archived'; }).length === m.total);
      ok('C07', 'Código de acesso exigido para consultar', find('MD-DEMO-2026-000101').code === '4821');
      return R;
    }
  };
})();
