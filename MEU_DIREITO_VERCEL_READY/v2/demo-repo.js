/* Meu Direito V2 — LocalDemoRepository.
   DEMO_MODE: nenhum serviço governamental é chamado; nada sai do navegador.
   Interfaces pensadas para troca futura por backend (ApplicationRepository,
   AppointmentRepository, ProcessRepository) sem reescrever a UI. */
(function () {
  var DEMO_MODE = true;
  var K = { consent: 'md2_consent', db: 'md2_db', draft: 'md2_draft', prefs: 'md2_prefs', ctx: 'md2_ctx' };
  var ALPHA = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  function rnd(n) {
    var a = new Uint32Array(n), s = '';
    (window.crypto || window.msCrypto).getRandomValues(a);
    for (var i = 0; i < n; i++) s += ALPHA[a[i] % ALPHA.length];
    return s;
  }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function iso(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function today() { var d = new Date(); d.setHours(0, 0, 0, 0); return d; }
  function addDays(d, n) { var x = new Date(d); x.setDate(x.getDate() + n); return x; }
  function isWeekend(d) { var w = d.getDay(); return w === 0 || w === 6; }
  function weekdayAfter(n) { var d = addDays(today(), n); while (isWeekend(d)) d = addDays(d, 1); return d; }
  function wait(v, ms) { return new Promise(function (r) { setTimeout(function () { r(v); }, ms || 380); }); }
  function clone(x) { return JSON.parse(JSON.stringify(x)); }
  function ls() { try { return window.localStorage; } catch (e) { return null; } }
  function ss() { try { return window.sessionStorage; } catch (e) { return null; } }
  function hist(keys, startDaysAgo, step) {
    return keys.map(function (k, i) { return { key: k, at: iso(addDays(today(), -startDaysAgo + i * step)) }; });
  }

  /* Dados sintéticos. Nenhum nome, número ou data real. */
  function seeds() {
    return {
      apps: [
        { protocol: 'MD-DEMO-2026-K7M2Q9XA', birth: '15/03/1991', serviceId: 'crnm2via', city: 'Salvador', origin: 'seed',
          history: hist(['created', 'docs', 'waiting', 'analysis', 'pending'], 36, 8), pendingDoc: 'Boletim de ocorrência ou comunicação à polícia' },
        { protocol: 'MD-DEMO-2026-R4T8W1ZB', birth: '02/11/1985', serviceId: 'reuniao', city: 'Salvador', origin: 'seed',
          history: hist(['created', 'docs', 'waiting'], 12, 5) },
        { protocol: 'MD-DEMO-2026-H3J6N5LC', birth: '28/06/1979', serviceId: 'crnmSubst', city: 'Lauro de Freitas', origin: 'seed',
          history: hist(['created', 'docs', 'waiting', 'analysis', 'decision', 'production', 'done'], 70, 10) }
      ],
      appts: [
        { code: 'MD-DEMO-AG-7XK2PQ', protocol: 'MD-DEMO-2026-K7M2Q9XA', serviceId: 'crnm2via', unitId: 'delemig', date: iso(weekdayAfter(9)), time: '10:30', status: 'active', origin: 'seed' }
      ]
    };
  }

  var consent = false;
  var db = seeds();
  (function load() {
    var s = ls();
    if (!s) return;
    consent = s.getItem(K.consent) === '1';
    if (consent) { try { var saved = JSON.parse(s.getItem(K.db) || 'null'); if (saved && saved.apps) db = saved; } catch (e) {} }
  })();
  function persist() { var s = ls(); if (consent && s) { try { s.setItem(K.db, JSON.stringify(db)); } catch (e) {} } }

  var HOURS = { delemig: { from: 9, to: 16 } };
  function hash(str) { var h = 2166136261; for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function times(unitId) {
    var h = HOURS[unitId]; if (!h) return [];
    var out = []; for (var x = h.from; x < h.to; x++) { out.push(pad(x) + ':00'); out.push(pad(x) + ':30'); }
    return out;
  }
  function slots(unitId, isoDate, ignoreCode) {
    var d = new Date(isoDate + 'T00:00:00');
    var t0 = today();
    if (isWeekend(d) || d <= t0 || d > addDays(t0, 75)) return [];
    var hv = hash(unitId + isoDate), all = times(unitId);
    var cap = hv % 7;
    var booked = db.appts.filter(function (a) { return a.status === 'active' && a.unitId === unitId && a.date === isoDate && a.code !== ignoreCode; }).map(function (a) { return a.time; });
    var free = all.filter(function (t, i) { return ((hv >> (i % 24)) & 3) === 0 || i % 5 === hv % 5; }).slice(0, cap);
    return free.filter(function (t) { return booked.indexOf(t) < 0; });
  }

  var applications = {
    create: function (input) {
      var app = { protocol: 'MD-DEMO-2026-' + rnd(8), birth: input.birth, serviceId: input.serviceId, city: input.city || null, origin: 'user',
        history: [{ key: 'created', at: iso(today()) }] };
      db.apps.push(app); persist();
      return wait(clone(app));
    },
    find: function (protocol, birth) {
      var p = String(protocol || '').trim().toUpperCase();
      var hit = db.apps.filter(function (a) { return a.protocol === p && a.birth === birth; })[0];
      return wait(hit ? clone(hit) : null);
    },
    list: function () { return clone(db.apps); }
  };
  var processes = { get: applications.find };
  var appointments = {
    list: function () { return clone(db.appts).sort(function (a, b) { return (a.date + a.time).localeCompare(b.date + b.time); }); },
    activeFor: function (protocol) { return clone(db.appts.filter(function (a) { return a.protocol === protocol && a.status === 'active'; })); },
    slots: slots,
    dayCount: function (unitId, isoDate, ignoreCode) { return slots(unitId, isoDate, ignoreCode).length; },
    create: function (input) {
      if (slots(input.unitId, input.date).indexOf(input.time) < 0) return wait(null);
      var a = { code: 'MD-DEMO-AG-' + rnd(6), protocol: input.protocol, serviceId: input.serviceId, unitId: input.unitId, date: input.date, time: input.time, status: 'active', origin: 'user' };
      db.appts.push(a); persist(); return wait(clone(a));
    },
    reschedule: function (code, date, time) {
      var a = db.appts.filter(function (x) { return x.code === code; })[0];
      if (!a || slots(a.unitId, date, code).indexOf(time) < 0) return wait(null);
      a.date = date; a.time = time; a.rescheduled = true; persist(); return wait(clone(a));
    },
    cancel: function (code) {
      var a = db.appts.filter(function (x) { return x.code === code; })[0];
      if (!a) return wait(null);
      a.status = 'cancelled'; persist(); return wait(clone(a));
    }
  };

  var storage = {
    hasConsent: function () { return consent; },
    setConsent: function (on) {
      var s = ls(); consent = !!on;
      if (!s) return false;
      try {
        if (on) { s.setItem(K.consent, '1'); s.setItem(K.db, JSON.stringify(db)); }
        else { s.removeItem(K.consent); s.removeItem(K.db); s.removeItem(K.draft); }
        return true;
      } catch (e) { return false; }
    },
    /* Rascunho do wizard: somente com consentimento. Arquivos nunca entram. */
    saveDraft: function (draft) {
      var s = ls(); if (!consent || !s) return false;
      try { var d = clone(draft); d.files = {}; s.setItem(K.draft, JSON.stringify(d)); return s.getItem(K.draft) !== null; } catch (e) { return false; }
    },
    loadDraft: function () { var s = ls(); if (!consent || !s) return null; try { return JSON.parse(s.getItem(K.draft) || 'null'); } catch (e) { return null; } },
    clearDraft: function () { var s = ls(); if (s) try { s.removeItem(K.draft); } catch (e) {} },
    savePrefs: function (p) { var s = consent ? ls() : ss(); if (s) try { s.setItem(K.prefs, JSON.stringify(p)); } catch (e) {} },
    loadPrefs: function () { var out = null; [ls(), ss()].forEach(function (s) { if (!out && s) try { out = JSON.parse(s.getItem(K.prefs) || 'null'); } catch (e) {} }); return out; },
    /* Contexto não sensível triagem → serviço (serviço, cidade, variante). */
    saveCtx: function (c) { var s = ss(); if (s) try { s.setItem(K.ctx, JSON.stringify({ serviceId: c.serviceId, city: c.city || null, variant: c.variant || null })); } catch (e) {} },
    clearAll: function (withPrefs) {
      [ls(), ss()].forEach(function (s) {
        if (!s) return;
        try { s.removeItem(K.consent); s.removeItem(K.db); s.removeItem(K.draft); s.removeItem(K.ctx); if (withPrefs) s.removeItem(K.prefs); } catch (e) {}
      });
      consent = false; db = seeds();
    },
    resetSeeds: function () { db = seeds(); persist(); }
  };

  window.MD_REPO = { DEMO_MODE: DEMO_MODE, applications: applications, processes: processes, appointments: appointments, storage: storage,
    util: { iso: iso, today: today, addDays: addDays, isWeekend: isWeekend, times: times } };
})();
