// ============================================================
// app.js — Consulta Rápida ENF — UDP
// Lógica de navegación, renderizado y búsqueda
// ============================================================

// ─── Estado global ──────────────────────────────────────────
let currentSessionId = null;
let currentSubject = 'farm';
let quizState = {}; // {answered: Set, score: 0}

// ─── Init ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildSidebar('farm');
  buildSidebar('fisio');
  showHome();
});

// ─── Sidebar ────────────────────────────────────────────────
function buildSidebar(subject) {
  const container = document.getElementById('sidebar-' + subject);
  const data = APP_DATA[subject];
  let html = '';
  data.units.forEach(unit => {
    html += `
      <div class="unit-group">
        <div class="unit-header" onclick="toggleUnit(this)">
          ${unit.title}
          <span class="arrow">▶</span>
        </div>
        <div class="unit-items">`;
    unit.sessions.forEach(s => {
      html += `<div class="nav-item" id="nav-${s.id}" onclick="loadSession('${s.id}','${subject}')">
        ${s.title}
      </div>`;
    });
    html += `</div></div>`;
  });
  container.innerHTML = html;
}

function toggleUnit(header) {
  header.classList.toggle('open');
}

function switchSidebarTab(subject, el) {
  document.querySelectorAll('.sidebar-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.sidebar-content').forEach(c => c.classList.remove('active'));
  document.getElementById('sidebar-' + subject).classList.add('active');
  currentSubject = subject;
}

// ─── Utilidad de vistas ─────────────────────────────────────
function hideAllViews() {
  ['home','content-view','subject-view','xref-view','calc-view','progress-view'].forEach(id => {
    document.getElementById(id).style.display = 'none';
  });
}

// ─── Vistas principales ─────────────────────────────────────
function showHome() {
  hideAllViews();
  document.getElementById('home').style.display = 'block';
  currentSessionId = null;
  clearNavActive();
}

function showSubject(subject) {
  currentSubject = subject;
  // activar tab lateral
  const tabs = document.querySelectorAll('.sidebar-tab');
  tabs.forEach(t => t.classList.remove('active'));
  if (subject === 'farm') tabs[0].classList.add('active');
  else tabs[1].classList.add('active');
  document.querySelectorAll('.sidebar-content').forEach(c => c.classList.remove('active'));
  document.getElementById('sidebar-' + subject).classList.add('active');

  hideAllViews();

  const sv = document.getElementById('subject-view');
  sv.style.display = 'block';

  const data = APP_DATA[subject];
  const label = subject === 'farm' ? '💊 Farmacología en Enfermería' : '🫀 Fisiopatología en Enfermería';
  const code  = subject === 'farm' ? 'ENF3013 · 3° semestre' : 'ENF3014 · 4° semestre';
  let html = `
    <div class="cv-header">
      <div class="cv-title">${label}</div>
      <div class="cv-meta"><span class="cv-meta-item">${code}</span></div>
    </div>
    <div class="unit-index">`;
  data.units.forEach(unit => {
    html += `<div class="unit-card" onclick="openUnit('${subject}','${unit.id}')">
      <h3>${unit.title}</h3>
      <ul>${unit.sessions.map(s => `<li>${s.title}</li>`).join('')}</ul>
    </div>`;
  });
  html += `</div>`;
  sv.innerHTML = html;
}

function openUnit(subject, unitId) {
  const unit = APP_DATA[subject].units.find(u => u.id === unitId);
  if (!unit) return;
  if (unit.sessions.length === 1) {
    loadSession(unit.sessions[0].id, subject);
  } else {
    loadSession(unit.sessions[0].id, subject);
  }
}

// ─── Carga de sesión/clase ───────────────────────────────────
function findSession(id) {
  for (const subj of ['farm','fisio']) {
    for (const unit of APP_DATA[subj].units) {
      const s = unit.sessions.find(s => s.id === id);
      if (s) return { session: s, subject: subj, unitTitle: unit.title };
    }
  }
  return null;
}

function loadSession(id, subject) {
  const found = findSession(id);
  if (!found) return;
  const { session, unitTitle } = found;
  subject = found.subject;
  currentSessionId = id;

  // Ocultar otras vistas
  hideAllViews();
  document.getElementById('content-view').style.display = 'block';

  // Registrar progreso
  trackVisit(id);

  // Actualizar sidebar
  clearNavActive();
  const navEl = document.getElementById('nav-' + id);
  if (navEl) {
    navEl.classList.add('active');
    // Abrir el grupo padre
    const unitItems = navEl.closest('.unit-items');
    if (unitItems) {
      const header = unitItems.previousElementSibling;
      if (header && !header.classList.contains('open')) header.classList.toggle('open');
    }
  }

  // Tabs disponibles
  const hasDiagrams = session.diagrams && session.diagrams.length > 0;
  const hasExtras = typeof EXTRAS !== 'undefined' && EXTRAS[id];
  const tabs = [
    { id: 'contenido', label: '📋 Contenido' },
    { id: 'keywords', label: '🔑 Palabras Clave' },
    { id: 'alertas', label: `⚠️ Alertas (${session.alerts.length})` },
    { id: 'conexiones', label: `🔗 Conexiones (${session.connections.length})` },
  ];
  if (hasDiagrams) tabs.push({ id: 'diagramas', label: '📊 Diagramas' });
  if (hasExtras && EXTRAS[id].quiz) tabs.push({ id: 'quiz', label: '📝 Quiz' });
  if (hasExtras && EXTRAS[id].vignette) tabs.push({ id: 'caso', label: '🏥 Caso Clínico' });

  // Breadcrumb, título y meta
  const subjectLabel = subject === 'farm' ? 'Farmacología' : 'Fisiopatología';
  const code = subject === 'farm' ? 'ENF3013' : 'ENF3014';
  document.getElementById('cv-breadcrumb').innerHTML =
    `<span onclick="showHome()">Inicio</span> / <span onclick="showSubject('${subject}')">${subjectLabel}</span> / ${unitTitle}`;
  document.getElementById('cv-title').textContent = session.title;
  document.getElementById('cv-meta').innerHTML = `
    <span class="cv-meta-item"><span class="badge ${subject}">${subjectLabel}</span></span>
    <span class="cv-meta-item">📘 ${code}</span>
    <span class="cv-meta-item">📌 ${unitTitle}</span>`;

  // Tabs HTML
  const tabsContainer = document.getElementById('content-tabs');
  tabsContainer.innerHTML = tabs.map((t, i) =>
    `<div class="content-tab${i===0?' active':''}" onclick="switchContentTab('${t.id}', this)">${t.label}</div>`
  ).join('');

  // Panes
  renderContenido(session);
  renderKeywords(session);
  renderAlertas(session);
  renderConexiones(session, subject);
  if (hasDiagrams) renderDiagramas(session);
  if (hasExtras && EXTRAS[id].quiz) renderQuiz(id);
  if (hasExtras && EXTRAS[id].vignette) renderVignette(id);

  // Activar primer tab
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  document.getElementById('tab-contenido').classList.add('active');

  window.scrollTo(0, 0);
}

function clearNavActive() {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
}

function switchContentTab(tabId, el) {
  document.querySelectorAll('.content-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  const pane = document.getElementById('tab-' + tabId);
  if (pane) pane.classList.add('active');
}

// ─── Render: Contenido (accordion con definiciones) ─────────
function renderContenido(session) {
  const pane = document.getElementById('tab-contenido');
  let html = `<div class="card"><h3>📌 Temas principales — haz clic para ver definición rápida</h3>
    <div class="topics-list">`;
  session.topics.forEach((topic, i) => {
    const t = typeof topic === 'string' ? topic : topic.t;
    const def = typeof topic === 'object' && topic.def ? topic.def : '';
    html += `<div class="topic-item" onclick="this.classList.toggle('open')">
      <div class="topic-header">
        <div class="topic-header-left">
          <span class="topic-num">${i + 1}</span>
          <span class="topic-title">${t}</span>
        </div>
        <span class="topic-toggle">▶</span>
      </div>
      ${def ? `<div class="topic-def">${def}</div>` : ''}
    </div>`;
  });
  html += `</div></div>`;
  pane.innerHTML = html;
}

// ─── Render: Keywords (vertical) ────────────────────────────
function renderKeywords(session) {
  const pane = document.getElementById('tab-keywords');
  if (!session.keywords || session.keywords.length === 0) {
    pane.innerHTML = `<div class="card"><p>No hay palabras clave registradas.</p></div>`;
    return;
  }
  let html = `<div class="card"><h3>🔑 Palabras clave — ${session.keywords.length} términos</h3>
    <div class="kw-vertical">`;
  session.keywords.forEach((kw, i) => {
    html += `<div class="kw-vert-item" onclick="searchFromKeyword('${kw.replace(/'/g, "\\'")}')">
      <span class="kw-vert-num">${i + 1}</span>
      <span class="kw-vert-text">${kw}</span>
      <span class="kw-vert-icon">🔍</span>
    </div>`;
  });
  html += `</div></div>`;
  pane.innerHTML = html;
}

// ─── Render: Alertas ────────────────────────────────────────
function renderAlertas(session) {
  const pane = document.getElementById('tab-alertas');
  if (!session.alerts || session.alerts.length === 0) {
    pane.innerHTML = `<div class="card"><div class="alert-box success"><strong>Sin alertas especiales</strong>No se registran alertas farmacológicas críticas para esta sesión.</div></div>`;
    return;
  }
  let html = '';
  session.alerts.forEach(a => {
    html += `<div class="alert-box ${a.type}"><strong>${a.title}</strong>${a.text}</div>`;
  });
  pane.innerHTML = html;
}

// ─── Render: Conexiones ─────────────────────────────────────
function renderConexiones(session, subject) {
  const pane = document.getElementById('tab-conexiones');
  if (!session.connections || session.connections.length === 0) {
    pane.innerHTML = `<div class="card"><p>No se registran conexiones cruzadas para esta sesión.</p></div>`;
    return;
  }
  let html = `<div class="card"><h3>🔗 Integración Fisiopatología ↔ Farmacología</h3>`;
  session.connections.forEach(c => {
    const targetSubj = c.type; // 'farm' o 'fisio'
    const targetLabel = targetSubj === 'farm' ? 'Farmacología' : 'Fisiopatología';
    html += `<div class="conn-item" onclick="loadSession('${c.toId}','${targetSubj}')">
      <div class="conn-dot ${targetSubj}"></div>
      <div>
        <div class="conn-title">${c.title}</div>
        <div class="conn-desc">${c.desc}</div>
        <span class="conn-tag ${targetSubj}">${targetLabel}</span>
      </div>
    </div>`;
  });
  html += `</div>`;
  pane.innerHTML = html;
}

// ─── Render: Diagramas ──────────────────────────────────────
function renderDiagramas(session) {
  const pane = document.getElementById('tab-diagramas');
  if (!session.diagrams || session.diagrams.length === 0) {
    pane.innerHTML = '';
    return;
  }
  let html = '';
  session.diagrams.forEach(d => {
    html += `<div class="flow-container"><div class="flow-title">📊 ${d.title}</div><div class="flow">`;
    d.steps.forEach((step, i) => {
      html += `<div class="flow-row">
        <div class="flow-box ${step.color}">${step.label}${step.note ? `<br><small style="font-weight:400;opacity:.8">${step.note}</small>` : ''}</div>
      </div>`;
      if (i < d.steps.length - 1) {
        html += `<div class="flow-row"><span class="flow-arrow down">↓</span></div>`;
      }
    });
    html += `</div></div>`;
  });
  pane.innerHTML = html;
}

// ─── Cross-References View ───────────────────────────────────
function showCrossRef() {
  hideAllViews();
  document.getElementById('xref-view').style.display = 'block';
  clearNavActive();

  const xrefs = APP_DATA.crossrefs;
  let html = `<div class="card">
    <h3>📋 Tabla de Integración — ${xrefs.length} conexiones registradas</h3>
    <table class="xref-table">
      <thead>
        <tr>
          <th>Fisiopatología (ENF3014)</th>
          <th>Farmacología (ENF3013)</th>
          <th>Nexo clínico</th>
        </tr>
      </thead>
      <tbody>`;
  xrefs.forEach(x => {
    html += `<tr>
      <td><span onclick="loadSession('${x.fisioId}','fisio')" style="cursor:pointer;color:#1a7a4a;font-weight:600">${x.fisioTitle}</span></td>
      <td><span onclick="loadSession('${x.farmId}','farm')" style="cursor:pointer;color:#1a3a6b;font-weight:600">${x.farmTitle}</span></td>
      <td>${x.desc}</td>
    </tr>`;
  });
  html += `</tbody></table></div>`;
  document.getElementById('xref-content').innerHTML = html;
}

// ─── Search ──────────────────────────────────────────────────
function buildSearchIndex() {
  const index = [];
  ['farm','fisio'].forEach(subj => {
    APP_DATA[subj].units.forEach(unit => {
      unit.sessions.forEach(s => {
        // Título
        index.push({ id: s.id, subject: subj, type: 'session', title: s.title, snippet: unit.title, score: 0 });
        // Keywords
        s.keywords.forEach(kw => {
          index.push({ id: s.id, subject: subj, type: 'keyword', title: kw, snippet: s.title, score: 0 });
        });
        // Topics
        s.topics.forEach(t => {
          const text = typeof t === 'string' ? t : t.t;
          const defText = typeof t === 'object' && t.def ? t.def : '';
          index.push({ id: s.id, subject: subj, type: 'topic', title: text.substring(0,80), snippet: s.title, score: 0 });
          if (defText) index.push({ id: s.id, subject: subj, type: 'topic', title: defText.substring(0,80), snippet: text.substring(0,50), score: 0 });
        });
        // Alerts
        s.alerts.forEach(a => {
          index.push({ id: s.id, subject: subj, type: 'alert', title: a.title, snippet: s.title, score: 0 });
        });
      });
    });
  });
  return index;
}

let _searchIndex = null;

function onSearch(query) {
  const resultsEl = document.getElementById('search-results');
  if (!query || query.trim().length < 2) {
    resultsEl.classList.remove('active');
    return;
  }
  if (!_searchIndex) _searchIndex = buildSearchIndex();
  const q = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  // Puntuar y filtrar
  const hits = [];
  const seen = new Set();
  _searchIndex.forEach(entry => {
    const text = (entry.title + ' ' + entry.snippet).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    if (text.includes(q)) {
      const key = entry.id + '-' + entry.type + '-' + entry.title;
      if (!seen.has(key)) {
        seen.add(key);
        // Prioridad: session title > keyword > alert > topic
        const priority = { session: 4, keyword: 3, alert: 2, topic: 1 }[entry.type] || 0;
        hits.push({ ...entry, priority });
      }
    }
  });

  // Ordenar por prioridad y deduplicar por session
  hits.sort((a, b) => b.priority - a.priority);
  const sessionsSeen = new Set();
  const final = [];
  hits.forEach(h => {
    if (!sessionsSeen.has(h.id) || h.type === 'keyword') {
      if (!sessionsSeen.has(h.id)) sessionsSeen.add(h.id);
      final.push(h);
    }
  });

  if (final.length === 0) {
    resultsEl.innerHTML = `<div class="sr-item"><div class="sr-item-title" style="color:#888">Sin resultados para "${query}"</div></div>`;
    resultsEl.classList.add('active');
    return;
  }

  resultsEl.innerHTML = final.slice(0, 10).map(h => {
    const badge = h.subject === 'farm' ? 'farm' : 'fisio';
    const badgeLabel = h.subject === 'farm' ? 'Farmaco' : 'Fisiopato';
    const icon = h.type === 'alert' ? '⚠️ ' : h.type === 'keyword' ? '🔑 ' : '';
    return `<div class="sr-item" onclick="loadSession('${h.id}','${h.subject}');closeSearch()">
      <div>
        <span class="sr-badge ${badge}">${badgeLabel}</span>
        <div class="sr-item-title">${icon}${h.title}</div>
        <div class="sr-item-snippet">${h.snippet}</div>
      </div>
    </div>`;
  }).join('');
  resultsEl.classList.add('active');
}

function closeSearch() {
  document.getElementById('search-results').classList.remove('active');
  document.getElementById('search-input').value = '';
}

function searchFromKeyword(kw) {
  const input = document.getElementById('search-input');
  input.value = kw;
  onSearch(kw);
  input.focus();
}

// ─── Mobile sidebar ──────────────────────────────────────────
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// ============================================================
// QUIZ — Autoevaluación de 5 preguntas por sesión
// ============================================================
function renderQuiz(sessionId) {
  const pane = document.getElementById('tab-quiz');
  const data = EXTRAS[sessionId];
  if (!data || !data.quiz) { pane.innerHTML = ''; return; }

  quizState = { answered: new Set(), score: 0, total: data.quiz.length };
  const letters = ['A','B','C','D','E'];
  let html = `<div class="quiz-container">`;
  data.quiz.forEach((q, qi) => {
    html += `<div class="quiz-question" id="quiz-q-${qi}">
      <div class="quiz-q-text"><span class="quiz-q-num">${qi+1}</span>${q.q}</div>
      <div class="quiz-options">`;
    q.options.forEach((opt, oi) => {
      html += `<div class="quiz-opt" id="quiz-opt-${qi}-${oi}" onclick="answerQuiz('${sessionId}',${qi},${oi})">
        <span class="quiz-opt-letter">${letters[oi]}</span>${opt}
      </div>`;
    });
    html += `</div>
      <div class="quiz-explanation" id="quiz-exp-${qi}">💡 ${q.explanation}</div>
    </div>`;
  });
  html += `<div id="quiz-score-box"></div></div>`;
  pane.innerHTML = html;
}

function answerQuiz(sessionId, qi, selected) {
  if (quizState.answered.has(qi)) return;
  quizState.answered.add(qi);

  const data = EXTRAS[sessionId].quiz[qi];
  const correct = data.correct;

  // Marcar opciones
  data.options.forEach((_, oi) => {
    const el = document.getElementById(`quiz-opt-${qi}-${oi}`);
    if (oi === correct) el.classList.add('correct', 'reveal-correct');
    if (oi === selected && selected !== correct) el.classList.add('incorrect');
    el.style.pointerEvents = 'none';
  });

  if (selected === correct) quizState.score++;

  // Mostrar explicación
  document.getElementById(`quiz-exp-${qi}`).classList.add('show');

  // Si respondió todo, mostrar score
  if (quizState.answered.size === quizState.total) {
    const pct = Math.round((quizState.score / quizState.total) * 100);
    const emoji = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📖';
    document.getElementById('quiz-score-box').innerHTML = `
      <div class="quiz-score">
        <h3>${emoji} ${quizState.score} / ${quizState.total} correctas (${pct}%)</h3>
        <p>${pct >= 80 ? '¡Excelente dominio del tema!' : pct >= 60 ? 'Buen avance, repasa los puntos débiles.' : 'Te recomiendo revisar el contenido nuevamente.'}</p>
        <button class="quiz-btn" onclick="renderQuiz('${sessionId}')">🔄 Reintentar</button>
      </div>`;
    // Guardar score
    saveQuizScore(sessionId, quizState.score, quizState.total);
  }
}

// ============================================================
// VIÑETA CLÍNICA
// ============================================================
function renderVignette(sessionId) {
  const pane = document.getElementById('tab-caso');
  const data = EXTRAS[sessionId];
  if (!data || !data.vignette) { pane.innerHTML = ''; return; }

  const v = data.vignette;
  pane.innerHTML = `
    <div class="vignette-card">
      <div class="vignette-header">
        <h3>🏥 Caso Clínico — Viñeta de Integración</h3>
        <p>Lee el escenario, analiza y responde antes de ver la respuesta</p>
      </div>
      <div class="vignette-body">
        <div class="vignette-scenario">${v.text}</div>
        <div class="vignette-question">❓ ${v.question}</div>
        <button class="vignette-toggle" id="vignette-btn" onclick="toggleVignetteAnswer()">
          👁️ Mostrar respuesta
        </button>
        <div class="vignette-answer" id="vignette-answer">✅ ${v.answer}</div>
      </div>
    </div>`;
}

function toggleVignetteAnswer() {
  const ans = document.getElementById('vignette-answer');
  const btn = document.getElementById('vignette-btn');
  if (ans.classList.contains('show')) {
    ans.classList.remove('show');
    btn.textContent = '👁️ Mostrar respuesta';
  } else {
    ans.classList.add('show');
    btn.textContent = '🙈 Ocultar respuesta';
  }
}

// ============================================================
// HERRAMIENTAS CDSS — Soporte a la Decisión Clínica
// ============================================================
function showCalculator() {
  hideAllViews();
  document.getElementById('calc-view').style.display = 'block';
  clearNavActive();
  switchCDSSMode('interactions', document.querySelector('.cdss-mode.active') || document.querySelector('.cdss-mode'));
}

function switchCDSSMode(mode, el) {
  document.querySelectorAll('.cdss-mode').forEach(m => m.classList.remove('active'));
  if (el) el.classList.add('active');
  const area = document.getElementById('cdss-panel');

  if (mode === 'interactions') renderInteractionChecker(area);
  else if (mode === 'dosevalidator') renderDoseValidator(area);
  else if (mode === 'glasgow') renderGlasgow(area);
  else if (mode === 'calculos') renderCalculosSection(area);
}

// ── CHECKER DE INTERACCIONES ──
function renderInteractionChecker(area) {
  const drugList = getDrugList();
  const opts = drugList.map(d => `<option value="${d}">`).join('');
  area.innerHTML = `
    <div class="calc-card">
      <h3>⚠️ Checker de Interacciones Farmacológicas</h3>
      <p style="font-size:12px;color:var(--text-muted);margin-bottom:16px">Ingresa un fármaco nuevo y los medicamentos actuales del paciente. El sistema verificará interacciones y alergias cruzadas.</p>
      <datalist id="dl-drugs">${opts}</datalist>
      <div class="calc-form">
        <div class="calc-field">
          <label>Fármaco nuevo a administrar</label>
          <input type="text" id="cdss-new-drug" list="dl-drugs" placeholder="Ej: warfarina" autocomplete="off">
        </div>
        <div class="calc-field">
          <label>Medicamentos actuales (separados por coma)</label>
          <input type="text" id="cdss-current-meds" placeholder="Ej: aspirina, metformina, enalapril">
        </div>
        <div class="calc-field">
          <label>Alergias documentadas (separados por coma)</label>
          <input type="text" id="cdss-allergies" placeholder="Ej: penicilina, sulfonamidas">
        </div>
        <button class="vignette-toggle" onclick="runInteractionCheck()" style="margin-top:8px">🔍 Verificar interacciones</button>
      </div>
      <div id="cdss-interaction-results" style="margin-top:16px"></div>
    </div>`;
}

function runInteractionCheck() {
  const newDrug = document.getElementById('cdss-new-drug').value.trim();
  const medsRaw = document.getElementById('cdss-current-meds').value;
  const allergiesRaw = document.getElementById('cdss-allergies').value;
  const resultsEl = document.getElementById('cdss-interaction-results');

  if (!newDrug) { resultsEl.innerHTML = '<p style="color:#888">Ingresa el fármaco a verificar.</p>'; return; }

  const meds = medsRaw.split(',').map(s => s.trim()).filter(Boolean);
  const allergies = allergiesRaw.split(',').map(s => s.trim()).filter(Boolean);

  const alerts = checkInteractions(newDrug, meds, allergies);

  if (alerts.length === 0) {
    resultsEl.innerHTML = `
      <div class="cdss-alert-card cdss-safe">
        <div class="cdss-alert-icon">✅</div>
        <div><strong>Sin interacciones detectadas</strong>
        <p>No se encontraron interacciones entre <strong>${newDrug}</strong> y los medicamentos/alergias ingresados.</p>
        <p style="font-size:11px;color:#666;margin-top:6px">Nota: La base de datos cubre las interacciones más frecuentes en enfermería. Consulte siempre fuentes adicionales.</p></div>
      </div>`;
    return;
  }

  let html = '';
  alerts.forEach(a => {
    const sevClass = a.severity === 'critical' ? 'cdss-critical' : a.severity === 'major' ? 'cdss-major' : 'cdss-minor';
    const sevLabel = a.severity === 'critical' ? '🚫 CRÍTICA' : a.severity === 'major' ? '⚠️ MAYOR' : 'ℹ️ MENOR';
    const icon = a.type === 'allergy' ? '🧬' : '💊';
    html += `
      <div class="cdss-alert-card ${sevClass}">
        <div class="cdss-alert-header">
          <span class="cdss-sev-badge ${sevClass}">${sevLabel}</span>
          <span>${icon} ${a.pair[0]} + ${a.pair[1]}</span>
        </div>
        <div class="cdss-alert-body">
          <div><strong>Mecanismo:</strong> ${a.mechanism}</div>
          <div><strong>Efecto clínico:</strong> ${a.message}</div>
          <div class="cdss-recommendation"><strong>Recomendación:</strong> ${a.recommendation}</div>
        </div>
      </div>`;
  });
  resultsEl.innerHTML = html;
}

// ── VALIDADOR DE DOSIS ──
function renderDoseValidator(area) {
  const grouped = getDrugsByCategory();
  const catOrder = ['analgesicos_antiinflamatorios','antibioticos','anticoagulantes_antiplaquetarios',
    'cardiovascular_antihipertensivos','cardiovascular_antiarritmicos','cardiovascular_otros',
    'corticoides','diabetes_endocrino','diureticos','gastrointestinal',
    'neurologico_psiquiatrico','anticonvulsivantes','opioides_sedacion',
    'respiratorio','electrolitos_fluidos','antidotos_emergencia'];
  let opts = '';
  for (const cat of catOrder) {
    if (!grouped[cat]) continue;
    opts += `<optgroup label="${grouped[cat].label}">`;
    opts += grouped[cat].drugs.map(d => `<option value="${d}">${d.charAt(0).toUpperCase()+d.slice(1)}</option>`).join('');
    opts += '</optgroup>';
  }
  area.innerHTML = `
    <div class="calc-card">
      <h3>💊 Validador de Dosis con Ajuste Clínico</h3>
      <p style="font-size:12px;color:var(--text-muted);margin-bottom:12px">81 fármacos organizados por familia. Valida dosis según peso, edad y función renal (eGFR).</p>
      <div class="calc-form">
        <div class="calc-field">
          <label>Fármaco (por familia)</label>
          <select id="dv-drug" onchange="updateDoseRoutes()"><option value="">— Seleccionar fármaco —</option>${opts}</select>
        </div>
        <div class="calc-field">
          <label>Vía de administración</label>
          <select id="dv-route"><option value="">— Seleccionar fármaco primero —</option></select>
        </div>
        <div class="calc-field"><label>Dosis indicada</label><input type="number" id="dv-dose" step="any" placeholder="Ej: 1000"></div>
        <div class="calc-field"><label>Peso paciente (kg) — requerido para fármacos mg/kg</label><input type="number" id="dv-weight" step="any" placeholder="Ej: 70"></div>
        <div class="calc-field"><label>Edad (años)</label><input type="number" id="dv-age" step="1" placeholder="Ej: 72"></div>
        <div class="calc-field"><label>eGFR (mL/min) — función renal</label><input type="number" id="dv-egfr" step="any" placeholder="Ej: 45"></div>
        <button class="vignette-toggle" onclick="runDoseValidation()" style="margin-top:8px">🔍 Validar dosis</button>
      </div>
      <div id="cdss-dose-results" style="margin-top:16px"></div>
    </div>`;
}

function updateDoseRoutes() {
  const drug = document.getElementById('dv-drug').value;
  const routeSel = document.getElementById('dv-route');
  const routes = drug ? getRoutesForDrug(drug) : [];
  const routeLabels = {oral:'Oral', iv:'Intravenosa (IV)', im:'Intramuscular (IM)', sc:'Subcutánea (SC)', sl:'Sublingual (SL)', topical:'Tópica', inhalatoria:'Inhalatoria (puff/MDI)', nebulizacion:'Nebulización', transdermica:'Transdérmica (parche)'};
  routeSel.innerHTML = routes.length
    ? routes.map(r => `<option value="${r}">${routeLabels[r] || r}</option>`).join('')
    : '<option value="">Sin vías disponibles</option>';
}

function runDoseValidation() {
  const drug = document.getElementById('dv-drug').value;
  const route = document.getElementById('dv-route').value;
  const dose = parseFloat(document.getElementById('dv-dose').value);
  const weight = parseFloat(document.getElementById('dv-weight').value) || undefined;
  const age = parseFloat(document.getElementById('dv-age').value) || undefined;
  const egfr = parseFloat(document.getElementById('dv-egfr').value);
  const renalFn = isNaN(egfr) ? undefined : egfr;
  const el = document.getElementById('cdss-dose-results');

  if (!drug || !route) { el.innerHTML = '<p style="color:#888">Selecciona fármaco y vía.</p>'; return; }
  if (isNaN(dose) || dose <= 0) { el.innerHTML = '<p style="color:#888">Ingresa la dosis.</p>'; return; }

  const result = validateDose(drug, dose, route, weight, age, renalFn);

  const cls = result.valid ? 'cdss-safe' : (result.factors.some(f => f.includes('contraindicated') || f === 'weight_missing') ? 'cdss-critical' : 'cdss-major');
  const icon = result.valid ? '✅' : '🚫';
  let html = `<div class="cdss-alert-card ${cls}">
    <div class="cdss-alert-header"><span>${icon} ${result.message}</span></div>
    <div class="cdss-alert-body">`;

  if (result.suggestedRange) {
    html += `<div><strong>Rango sugerido:</strong> ${result.suggestedRange.min} — ${result.suggestedRange.max} ${result.suggestedRange.unit}</div>`;
  }
  if (result.factors.length > 0) {
    html += `<div><strong>Factores evaluados:</strong> ${result.factors.join(', ')}</div>`;
  }
  if (result.notes) {
    html += `<div class="cdss-recommendation"><strong>Nota clínica:</strong> ${result.notes}</div>`;
  }
  html += `</div></div>`;
  el.innerHTML = html;
}

// ── SCORES CLÍNICOS: GLASGOW ──
function renderGlasgow(area) {
  area.innerHTML = `
    <div class="calc-card">
      <h3>🧠 Escala de Glasgow (GCS)</h3>
      <p style="font-size:12px;color:var(--text-muted);margin-bottom:16px">Evaluación del nivel de conciencia. GCS ≤8 = asegurar vía aérea.</p>
      <div class="calc-form" style="max-width:500px">
        <div class="calc-field"><label>Apertura ocular (E)</label>
          <select id="gcs-eye">
            <option value="4">4 — Espontánea</option>
            <option value="3">3 — Al estímulo verbal</option>
            <option value="2">2 — Al dolor</option>
            <option value="1">1 — Sin apertura</option>
          </select>
        </div>
        <div class="calc-field"><label>Respuesta verbal (V)</label>
          <select id="gcs-verbal">
            <option value="5">5 — Orientado</option>
            <option value="4">4 — Confuso</option>
            <option value="3">3 — Palabras inapropiadas</option>
            <option value="2">2 — Sonidos incomprensibles</option>
            <option value="1">1 — Sin respuesta</option>
          </select>
        </div>
        <div class="calc-field"><label>Respuesta motora (M)</label>
          <select id="gcs-motor">
            <option value="6">6 — Obedece órdenes</option>
            <option value="5">5 — Localiza dolor</option>
            <option value="4">4 — Retira al dolor</option>
            <option value="3">3 — Flexión anormal (decorticación)</option>
            <option value="2">2 — Extensión (descerebración)</option>
            <option value="1">1 — Sin respuesta</option>
          </select>
        </div>
        <button class="vignette-toggle" onclick="runGlasgow()" style="margin-top:8px">📊 Calcular Glasgow</button>
      </div>
      <div id="cdss-gcs-results" style="margin-top:16px"></div>
    </div>`;
}

function runGlasgow() {
  const result = calculateGlasgow({
    eye: parseInt(document.getElementById('gcs-eye').value),
    verbal: parseInt(document.getElementById('gcs-verbal').value),
    motor: parseInt(document.getElementById('gcs-motor').value)
  });
  const cls = result.severity === 'severe' ? 'cdss-critical' : result.severity === 'moderate' ? 'cdss-major' : 'cdss-safe';
  const sevLabels = {severe:'SEVERO (≤8)', moderate:'MODERADO (9-12)', mild:'LEVE (13-15)'};
  document.getElementById('cdss-gcs-results').innerHTML = `
    <div class="cdss-alert-card ${cls}">
      <div class="cdss-alert-header">
        <span class="cdss-sev-badge ${cls}">GCS: ${result.total}/15 — ${sevLabels[result.severity]}</span>
      </div>
      <div class="cdss-alert-body">
        <div class="cdss-score-grid">
          <div class="cdss-score-item"><span class="cdss-score-label">Ocular (E)</span><span class="cdss-score-val">${result.eye}/4</span></div>
          <div class="cdss-score-item"><span class="cdss-score-label">Verbal (V)</span><span class="cdss-score-val">${result.verbal}/5</span></div>
          <div class="cdss-score-item"><span class="cdss-score-label">Motor (M)</span><span class="cdss-score-val">${result.motor}/6</span></div>
        </div>
        <div class="cdss-recommendation"><strong>Acción:</strong> ${result.recommendation}</div>
      </div>
    </div>`;
}

// ── SECCIÓN CÁLCULOS (agrupa las 5 calculadoras) ──
function renderCalculosSection(area) {
  area.innerHTML = `
    <div class="calc-card">
      <h3>🧮 Calculadoras Clínicas</h3>
      <p style="font-size:12px;color:var(--text-muted);margin-bottom:12px">Herramientas de cálculo para dosificación, goteo, dilución, miliequivalentes y unidades internacionales.</p>
      <div class="cdss-modes" id="calc-sub-tabs" style="margin-bottom:16px">
        <div class="cdss-mode active" onclick="switchCalcTab('mgkg',this)">🧮 mg/kg</div>
        <div class="cdss-mode" onclick="switchCalcTab('mlh',this)">💧 Goteo</div>
        <div class="cdss-mode" onclick="switchCalcTab('dilution',this)">💉 Dilución</div>
        <div class="cdss-mode" onclick="switchCalcTab('meq',this)">⚗️ mEq</div>
        <div class="cdss-mode" onclick="switchCalcTab('ui',this)">🔬 UI</div>
      </div>
      <div id="calc-sub-panel"></div>
    </div>`;
  // Render default tab
  renderBasicCalc(document.getElementById('calc-sub-panel'), 'mgkg');
}

function switchCalcTab(mode, el) {
  document.querySelectorAll('#calc-sub-tabs .cdss-mode').forEach(m => m.classList.remove('active'));
  if (el) el.classList.add('active');
  renderBasicCalc(document.getElementById('calc-sub-panel'), mode);
}

// ── CALCULADORAS BÁSICAS (mg/kg, mL/h, dilución, mEq, UI) ──
function renderBasicCalc(area, mode) {
  const forms = {
    mgkg: `<h4 style="margin:0 0 12px">🧮 Cálculo mg/kg</h4>
      <div class="calc-form">
        <div class="calc-field"><label>Dosis indicada (mg/kg)</label><input type="number" id="calc-dose" step="any" placeholder="Ej: 15" oninput="calcMgKg()"></div>
        <div class="calc-field"><label>Peso del paciente (kg)</label><input type="number" id="calc-weight" step="any" placeholder="Ej: 70" oninput="calcMgKg()"></div>
        <div class="calc-field"><label>Frecuencia (horas entre dosis)</label><input type="number" id="calc-freq" step="any" placeholder="Ej: 8" oninput="calcMgKg()"></div>
      </div><div id="calc-basic-result" class="calc-result"></div>`,
    mlh: `<h4 style="margin:0 0 12px">💧 Cálculo mL/h (Goteo)</h4>
      <div class="calc-form">
        <div class="calc-field"><label>Volumen total (mL)</label><input type="number" id="calc-vol" step="any" placeholder="Ej: 500" oninput="calcMlH()"></div>
        <div class="calc-field"><label>Tiempo de infusión (horas)</label><input type="number" id="calc-time" step="any" placeholder="Ej: 4" oninput="calcMlH()"></div>
        <div class="calc-field"><label>Factor de goteo (gotas/mL)</label><input type="number" id="calc-factor" step="any" value="20" oninput="calcMlH()"></div>
      </div><div id="calc-basic-result" class="calc-result"></div>`,
    dilution: `<h4 style="margin:0 0 12px">💉 Cálculo de Dilución</h4>
      <div class="calc-form">
        <div class="calc-field"><label>Dosis deseada (mg)</label><input type="number" id="calc-desired" step="any" placeholder="Ej: 80" oninput="calcDilution()"></div>
        <div class="calc-field"><label>Concentración (mg/mL)</label><input type="number" id="calc-conc" step="any" placeholder="Ej: 10" oninput="calcDilution()"></div>
        <div class="calc-field"><label>Volumen final dilución (mL)</label><input type="number" id="calc-finalvol" step="any" placeholder="Ej: 100" oninput="calcDilution()"></div>
      </div><div id="calc-basic-result" class="calc-result"></div>`,

    meq: `<h4 style="margin:0 0 12px">⚗️ Conversor de Miliequivalentes (mEq)</h4>
      <p style="font-size:12px;color:var(--text-muted);margin-bottom:12px">Convierte entre mEq, mg y gramos. Selecciona el electrolito o ingresa peso atómico y valencia manualmente.</p>
      <div class="calc-form">
        <div class="calc-field"><label>Electrolito</label>
          <select id="meq-electrolyte" onchange="updateMeqFields()">
            <option value="">— Manual —</option>
            <option value="Na">Sodio (Na⁺) — PA: 23, Val: 1</option>
            <option value="K">Potasio (K⁺) — PA: 39.1, Val: 1</option>
            <option value="Ca">Calcio (Ca²⁺) — PA: 40.1, Val: 2</option>
            <option value="Mg">Magnesio (Mg²⁺) — PA: 24.3, Val: 2</option>
            <option value="Cl">Cloro (Cl⁻) — PA: 35.5, Val: 1</option>
            <option value="HCO3">Bicarbonato (HCO₃⁻) — PA: 61, Val: 1</option>
            <option value="NaCl">Cloruro de sodio (NaCl) — PM: 58.4</option>
            <option value="KCl">Cloruro de potasio (KCl) — PM: 74.5</option>
            <option value="CaCl2">Cloruro de calcio (CaCl₂) — PM: 111</option>
            <option value="MgSO4">Sulfato de magnesio (MgSO₄) — PM: 120.4</option>
            <option value="NaHCO3">Bicarbonato de sodio (NaHCO₃) — PM: 84</option>
            <option value="CaGluc">Gluconato de calcio (C₁₂H₂₂CaO₁₄) — PM: 430.4</option>
          </select>
        </div>
        <div class="calc-field"><label>Peso atómico/molecular (g/mol)</label><input type="number" id="meq-mw" step="any" placeholder="Ej: 39.1 para K⁺" oninput="calcMeq()"></div>
        <div class="calc-field"><label>Valencia (carga iónica)</label><input type="number" id="meq-val" step="1" value="1" placeholder="Ej: 1 para Na⁺, 2 para Ca²⁺" oninput="calcMeq()"></div>
        <hr style="border:none;border-top:1px dashed #ccc;margin:8px 0">
        <div class="calc-field"><label>Dirección de conversión</label>
          <select id="meq-dir" onchange="calcMeq()">
            <option value="meq2mg">mEq → mg / g</option>
            <option value="mg2meq">mg → mEq</option>
            <option value="g2meq">g → mEq</option>
          </select>
        </div>
        <div class="calc-field"><label>Cantidad</label><input type="number" id="meq-amount" step="any" placeholder="Ej: 40" oninput="calcMeq()"></div>
      </div>
      <div id="calc-basic-result" class="calc-result"></div>
      <div style="margin-top:12px;padding:10px;background:var(--bg-secondary);border-radius:8px;font-size:11px;color:var(--text-muted)">
        <strong>📐 Fórmulas:</strong><br>
        mEq = (mg × valencia) ÷ peso atómico<br>
        mg = (mEq × peso atómico) ÷ valencia<br>
        g = mg ÷ 1000<br><br>
        <strong>📋 Equivalencias frecuentes:</strong><br>
        • 1 g NaCl = 17.1 mEq Na⁺<br>
        • 1 g KCl = 13.4 mEq K⁺<br>
        • 1 amp KCl 10% (10 mL) = 13.4 mEq K⁺<br>
        • 1 amp CaGluc 10% (10 mL) = 4.65 mEq Ca²⁺<br>
        • 1 amp NaHCO₃ 8.4% (20 mL) = 20 mEq HCO₃⁻<br>
        • 1 amp MgSO₄ 25% (5 mL) = 10.4 mEq Mg²⁺
      </div>`,

    ui: `<h4 style="margin:0 0 12px">🔬 Conversor de Unidades Internacionales (UI)</h4>
      <p style="font-size:12px;color:var(--text-muted);margin-bottom:12px">Convierte entre UI y mg/mcg para fármacos con dosificación en Unidades Internacionales.</p>
      <div class="calc-form">
        <div class="calc-field"><label>Fármaco</label>
          <select id="ui-drug" onchange="calcUI()">
            <option value="">— Seleccionar —</option>
            <option value="insulina">Insulina (1 UI = 0.0347 mg = 34.7 mcg)</option>
            <option value="heparina">Heparina sódica (1 UI ≈ 0.01 mg = 10 mcg)</option>
            <option value="vitD">Vitamina D (1 UI = 0.025 mcg = 25 ng)</option>
            <option value="vitA">Vitamina A / Retinol (1 UI = 0.3 mcg retinol)</option>
            <option value="vitE">Vitamina E / α-tocoferol (1 UI = 0.67 mg)</option>
            <option value="vitK">Vitamina K (no tiene equivalencia UI estándar)</option>
            <option value="epo">Eritropoyetina (1 UI = 8.4 ng = 0.0084 mcg)</option>
            <option value="calcitonina">Calcitonina (1 UI = 0.2 mcg)</option>
            <option value="penicilina">Penicilina G (1 UI = 0.6 mcg = 0.0006 mg)</option>
          </select>
        </div>
        <div class="calc-field"><label>Dirección de conversión</label>
          <select id="ui-dir" onchange="calcUI()">
            <option value="ui2mg">UI → mg / mcg</option>
            <option value="mg2ui">mg → UI</option>
          </select>
        </div>
        <div class="calc-field"><label>Cantidad</label><input type="number" id="ui-amount" step="any" placeholder="Ej: 100" oninput="calcUI()"></div>
      </div>
      <div id="calc-basic-result" class="calc-result"></div>
      <div style="margin-top:12px;padding:10px;background:var(--bg-secondary);border-radius:8px;font-size:11px;color:var(--text-muted)">
        <strong>⚠️ Importante:</strong> Las UI NO son equivalentes entre fármacos distintos. 1 UI de insulina ≠ 1 UI de heparina.<br><br>
        <strong>📋 Conversiones clínicas frecuentes:</strong><br>
        • Insulina: 100 UI/mL (concentración estándar). 1 mL = 100 UI<br>
        • Heparina: ampollas de 5.000 UI/mL y 25.000 UI/5mL<br>
        • Vitamina D: 400 UI = 10 mcg. Déficit: 50.000 UI/sem<br>
        • Eritropoyetina: ampollas 2.000 / 4.000 / 10.000 UI<br>
        • Penicilina G: 1 millón UI = 600 mg
      </div>`
  };
  area.innerHTML = forms[mode] || '';
}

function calcMgKg() {
  const dose = parseFloat(document.getElementById('calc-dose').value);
  const weight = parseFloat(document.getElementById('calc-weight').value);
  const freq = parseFloat(document.getElementById('calc-freq').value);
  const r = document.getElementById('calc-basic-result');
  if (!dose || !weight) { r.classList.remove('show'); return; }
  const totalDose = (dose * weight).toFixed(1);
  let txt = `💊 Dosis por toma: <strong>${totalDose} mg</strong>`;
  if (freq) { const daily = ((dose * weight * 24) / freq).toFixed(1); txt += `<br>📅 Dosis diaria: <strong>${daily} mg/día</strong> (c/${freq}h)`; }
  r.innerHTML = txt + `<small>mg/kg × peso = dosis por administración</small>`;
  r.classList.add('show');
}

function calcMlH() {
  const vol = parseFloat(document.getElementById('calc-vol').value);
  const time = parseFloat(document.getElementById('calc-time').value);
  const factor = parseFloat(document.getElementById('calc-factor').value) || 20;
  const r = document.getElementById('calc-basic-result');
  if (!vol || !time) { r.classList.remove('show'); return; }
  r.innerHTML = `💧 <strong>${(vol/time).toFixed(1)} mL/h</strong> · <strong>${((vol*factor)/(time*60)).toFixed(1)} gotas/min</strong> (factor ${factor})<small>Vol × factor ÷ (min) = gpm</small>`;
  r.classList.add('show');
}

function calcDilution() {
  const desired = parseFloat(document.getElementById('calc-desired').value);
  const conc = parseFloat(document.getElementById('calc-conc').value);
  const finalVol = parseFloat(document.getElementById('calc-finalvol').value);
  const r = document.getElementById('calc-basic-result');
  if (!desired || !conc) { r.classList.remove('show'); return; }
  const ml = (desired / conc).toFixed(2);
  let txt = `💉 Extraer: <strong>${ml} mL</strong>`;
  if (finalVol) { const dil = (finalVol - parseFloat(ml)).toFixed(1); txt += ` · Diluyente: <strong>${dil > 0 ? dil : 0} mL</strong>`; }
  r.innerHTML = txt + `<small>dosis ÷ concentración = volumen</small>`;
  r.classList.add('show');
}

// ── CONVERSOR mEq ──
const MEQ_DB = {
  'Na':    {name:'Sodio (Na⁺)', mw:23, val:1},
  'K':     {name:'Potasio (K⁺)', mw:39.1, val:1},
  'Ca':    {name:'Calcio (Ca²⁺)', mw:40.1, val:2},
  'Mg':    {name:'Magnesio (Mg²⁺)', mw:24.3, val:2},
  'Cl':    {name:'Cloro (Cl⁻)', mw:35.5, val:1},
  'HCO3':  {name:'Bicarbonato (HCO₃⁻)', mw:61, val:1},
  'NaCl':  {name:'Cloruro de sodio', mw:58.4, val:1},
  'KCl':   {name:'Cloruro de potasio', mw:74.5, val:1},
  'CaCl2': {name:'Cloruro de calcio', mw:111, val:2},
  'MgSO4': {name:'Sulfato de magnesio', mw:120.4, val:2},
  'NaHCO3':{name:'Bicarbonato de sodio', mw:84, val:1},
  'CaGluc':{name:'Gluconato de calcio', mw:430.4, val:2}
};

function updateMeqFields() {
  const sel = document.getElementById('meq-electrolyte').value;
  const mwEl = document.getElementById('meq-mw');
  const valEl = document.getElementById('meq-val');
  if (sel && MEQ_DB[sel]) {
    mwEl.value = MEQ_DB[sel].mw;
    valEl.value = MEQ_DB[sel].val;
  } else {
    mwEl.value = '';
    valEl.value = 1;
  }
  calcMeq();
}

function calcMeq() {
  const mw = parseFloat(document.getElementById('meq-mw').value);
  const val = parseFloat(document.getElementById('meq-val').value);
  const dir = document.getElementById('meq-dir').value;
  const amt = parseFloat(document.getElementById('meq-amount').value);
  const r = document.getElementById('calc-basic-result');
  if (!mw || !val || !amt) { r.classList.remove('show'); return; }

  let txt = '';
  if (dir === 'meq2mg') {
    const mg = (amt * mw) / val;
    const g = mg / 1000;
    txt = `⚗️ <strong>${amt} mEq</strong> = <strong>${mg.toFixed(2)} mg</strong> = <strong>${g.toFixed(4)} g</strong>`;
    txt += `<small>mEq × (PM ÷ valencia) = mg</small>`;
  } else if (dir === 'mg2meq') {
    const meq = (amt * val) / mw;
    txt = `⚗️ <strong>${amt} mg</strong> = <strong>${meq.toFixed(2)} mEq</strong>`;
    txt += `<small>(mg × valencia) ÷ PM = mEq</small>`;
  } else if (dir === 'g2meq') {
    const mg = amt * 1000;
    const meq = (mg * val) / mw;
    txt = `⚗️ <strong>${amt} g</strong> = <strong>${mg.toFixed(0)} mg</strong> = <strong>${meq.toFixed(2)} mEq</strong>`;
    txt += `<small>g × 1000 = mg → (mg × valencia) ÷ PM = mEq</small>`;
  }
  r.innerHTML = txt;
  r.classList.add('show');
}

// ── CONVERSOR UI ──
const UI_DB = {
  'insulina':   {name:'Insulina', factor:0.0347, unit:'mg', desc:'1 UI = 0.0347 mg = 34.7 mcg'},
  'heparina':   {name:'Heparina sódica', factor:0.01, unit:'mg', desc:'1 UI ≈ 0.01 mg = 10 mcg'},
  'vitD':       {name:'Vitamina D', factor:0.000025, unit:'mg', desc:'1 UI = 0.025 mcg'},
  'vitA':       {name:'Vitamina A', factor:0.0003, unit:'mg', desc:'1 UI = 0.3 mcg retinol'},
  'vitE':       {name:'Vitamina E', factor:0.67, unit:'mg', desc:'1 UI = 0.67 mg α-tocoferol'},
  'epo':        {name:'Eritropoyetina', factor:0.0000084, unit:'mg', desc:'1 UI = 8.4 ng'},
  'calcitonina':{name:'Calcitonina', factor:0.0002, unit:'mg', desc:'1 UI = 0.2 mcg'},
  'penicilina': {name:'Penicilina G', factor:0.0006, unit:'mg', desc:'1 UI = 0.6 mcg'}
};

function calcUI() {
  const drug = document.getElementById('ui-drug').value;
  const dir = document.getElementById('ui-dir').value;
  const amt = parseFloat(document.getElementById('ui-amount').value);
  const r = document.getElementById('calc-basic-result');

  if (!drug || !amt) { r.classList.remove('show'); return; }
  if (drug === 'vitK') {
    r.innerHTML = '⚠️ Vitamina K no tiene equivalencia UI estándar. Se prescribe directamente en mg (ej: 10 mg IV/IM).';
    r.classList.add('show');
    return;
  }

  const info = UI_DB[drug];
  if (!info) { r.classList.remove('show'); return; }

  let txt = '';
  if (dir === 'ui2mg') {
    const mg = amt * info.factor;
    if (mg >= 1) {
      txt = `🔬 <strong>${amt} UI</strong> de ${info.name} = <strong>${mg.toFixed(4)} mg</strong>`;
    } else if (mg >= 0.001) {
      txt = `🔬 <strong>${amt} UI</strong> de ${info.name} = <strong>${(mg*1000).toFixed(2)} mcg</strong> (${mg.toFixed(6)} mg)`;
    } else {
      txt = `🔬 <strong>${amt} UI</strong> de ${info.name} = <strong>${(mg*1000000).toFixed(2)} ng</strong> (${(mg*1000).toFixed(4)} mcg)`;
    }
  } else {
    const ui = amt / info.factor;
    txt = `🔬 <strong>${amt} mg</strong> de ${info.name} = <strong>${ui.toFixed(1)} UI</strong>`;
  }
  txt += `<small>${info.desc}</small>`;
  r.innerHTML = txt;
  r.classList.add('show');
}

// ============================================================
// PROGRESO DE ESTUDIO (localStorage)
// ============================================================
function getProgress() {
  try {
    return JSON.parse(localStorage.getItem('crEnfProgress') || '{}');
  } catch(e) { return {}; }
}

function saveProgress(data) {
  try { localStorage.setItem('crEnfProgress', JSON.stringify(data)); } catch(e) {}
}

function trackVisit(sessionId) {
  const prog = getProgress();
  if (!prog.visits) prog.visits = {};
  if (!prog.visits[sessionId]) prog.visits[sessionId] = { count: 0, first: new Date().toISOString() };
  prog.visits[sessionId].count++;
  prog.visits[sessionId].last = new Date().toISOString();
  saveProgress(prog);
}

function saveQuizScore(sessionId, score, total) {
  const prog = getProgress();
  if (!prog.quizzes) prog.quizzes = {};
  if (!prog.quizzes[sessionId]) prog.quizzes[sessionId] = [];
  prog.quizzes[sessionId].push({ score, total, date: new Date().toISOString() });
  saveProgress(prog);
}

function showProgress() {
  hideAllViews();
  document.getElementById('progress-view').style.display = 'block';
  clearNavActive();

  const prog = getProgress();
  const visits = prog.visits || {};
  const quizzes = prog.quizzes || {};

  // Contar total de sesiones
  let totalSessions = 0;
  let allSessions = [];
  ['farm','fisio'].forEach(subj => {
    APP_DATA[subj].units.forEach(unit => {
      unit.sessions.forEach(s => {
        totalSessions++;
        allSessions.push({ id: s.id, title: s.title, subject: subj });
      });
    });
  });

  const visitedCount = Object.keys(visits).length;
  const pct = totalSessions > 0 ? Math.round((visitedCount / totalSessions) * 100) : 0;

  // Mejor quiz
  let bestQuiz = 0;
  let quizCount = 0;
  Object.values(quizzes).forEach(arr => {
    arr.forEach(q => {
      quizCount++;
      const s = Math.round((q.score / q.total) * 100);
      if (s > bestQuiz) bestQuiz = s;
    });
  });

  let html = `
    <div class="progress-bar-container">
      <div class="progress-stat">
        <div class="ps-val">${visitedCount}/${totalSessions}</div>
        <div class="ps-label">Sesiones visitadas</div>
        <div class="progress-meter"><div class="progress-meter-fill" style="width:${pct}%"></div></div>
      </div>
      <div class="progress-stat">
        <div class="ps-val">${pct}%</div>
        <div class="ps-label">Progreso general</div>
      </div>
      <div class="progress-stat">
        <div class="ps-val">${quizCount}</div>
        <div class="ps-label">Quizzes respondidos</div>
      </div>
      <div class="progress-stat">
        <div class="ps-val">${bestQuiz}%</div>
        <div class="ps-label">Mejor score quiz</div>
      </div>
    </div>`;

  // Mapa visual de sesiones
  ['farm','fisio'].forEach(subj => {
    const label = subj === 'farm' ? '💊 Farmacología' : '🫀 Fisiopatología';
    html += `<div class="card"><h3>${label}</h3><div class="progress-sessions">`;
    APP_DATA[subj].units.forEach(unit => {
      unit.sessions.forEach((s, i) => {
        const visited = visits[s.id] ? 'visited' : '';
        const count = visits[s.id] ? visits[s.id].count : 0;
        const short = s.title.substring(0, 3).toUpperCase();
        html += `<div class="progress-dot ${visited}" onclick="loadSession('${s.id}','${subj}')" title="${s.title} (${count} visitas)">${short}</div>`;
      });
    });
    html += `</div></div>`;
  });

  // Historial de quizzes
  if (quizCount > 0) {
    html += `<div class="card"><h3>📝 Historial de Quizzes</h3><table class="comp-table"><thead><tr><th>Sesión</th><th>Score</th><th>Fecha</th></tr></thead><tbody>`;
    Object.entries(quizzes).forEach(([sid, arr]) => {
      const found = findSession(sid);
      const title = found ? found.session.title : sid;
      arr.slice(-5).reverse().forEach(q => {
        const d = new Date(q.date);
        const dateStr = d.toLocaleDateString('es-CL');
        const scorePct = Math.round((q.score / q.total) * 100);
        const color = scorePct >= 80 ? '#16a34a' : scorePct >= 60 ? '#d97706' : '#dc2626';
        html += `<tr><td>${title}</td><td style="font-weight:700;color:${color}">${q.score}/${q.total} (${scorePct}%)</td><td>${dateStr}</td></tr>`;
      });
    });
    html += `</tbody></table></div>`;
  }

  document.getElementById('progress-content').innerHTML = html;
}
