// ===== STATE =====
let currentExam = null;
let currentSection = 'kannliste';
let currentLerntyp = 'kompakt';
let cardIndex = 0;
let cardFlipped = false;
let quizIndex = 0;
let quizAnswers = {};
let kannListeState = {};
let currentAufgabe = null;

const EXAMS = { gg: DATA_GG, km: DATA_KM, it: DATA_IT };
const TESTS = {
  gg: [
    ...(typeof TESTS_GG_VOLL !== 'undefined' ? TESTS_GG_VOLL : []),
    ...TESTS_GG,
    ...(typeof TESTS_GG_EXTRA !== 'undefined' ? TESTS_GG_EXTRA : [])
  ],
  km: [
    ...(typeof TESTS_KM_VOLL !== 'undefined' ? TESTS_KM_VOLL : []),
    ...TESTS_KM,
    ...(typeof TESTS_KM_EXTRA !== 'undefined' ? TESTS_KM_EXTRA : [])
  ],
  it: [
    ...(typeof TESTS_IT_VOLL !== 'undefined' ? TESTS_IT_VOLL : []),
    ...TESTS_IT,
    ...(typeof TESTS_IT_EXTRA !== 'undefined' ? TESTS_IT_EXTRA : [])
  ],
};

// Highlight state
let userHighlights = {}; // { examId-topicIdx: [{start, end, color}] }
let activeHighlightColor = null;

// Exam-Mode State
let em = {
  exam: null, examId: null, qIdx: 0, answers: [], canvases: {},
  startTime: 0, duration: 0, timerInterval: null, finished: false,
  draw: { color: '#000', size: 3, tool: 'pen', isDrawing: false, lastX: 0, lastY: 0 }
};

// ===== NAVIGATION =====
function openExam(id) {
  if (id === 'alle') {
    openAlleExams();
    return;
  }
  currentExam = EXAMS[id];
  document.body.className = `exam-${id}`;
  document.getElementById('nav-exam-label').textContent = `${currentExam.short} – ${currentExam.day}`;
  document.getElementById('nav-exam-label').style.color = `var(--${id})`;

  const info = document.getElementById('sidebar-info');
  info.innerHTML = `<div class="info-day">${currentExam.day}</div><div class="info-name" style="color:var(--${id})">${currentExam.short} – ${currentExam.name}</div>`;

  // Akzentfarbe für Nav-Dot
  document.querySelector('.nav-dot').style.background = `var(--${id})`;

  showPage('exam');
  showSection('kannliste');
  loadKannListe();
  loadLernzettel();
  loadFlashcards();
  loadQuiz();
  loadAufgaben();
  loadPruefung();
  loadReferenz();
  loadTipps();
  updateProgress();
}

function openAlleExams() {
  document.body.className = 'exam-alle';
  document.getElementById('nav-exam-label').textContent = 'Alle Prüfungen';
  document.getElementById('nav-exam-label').style.color = 'var(--alle)';
  document.querySelector('.nav-dot').style.background = 'var(--alle)';

  const info = document.getElementById('sidebar-info');
  info.innerHTML = `<div class="info-day">Alle Prüfungen</div><div class="info-name" style="color:var(--alle)">GG + KM + IT</div>`;

  // Merge alle Daten
  currentExam = mergeAllExams();
  showPage('exam');
  showSection('kannliste');
  loadKannListe();
  loadLernzettel();
  loadFlashcards();
  loadQuiz();
  loadAufgaben();
  loadPruefung();
  loadReferenz();
  loadTipps();
  updateProgress();
}

function mergeAllExams() {
  const merged = {
    id: 'alle',
    name: 'Alle Prüfungen',
    short: '∞',
    day: 'Alle',
    kannListe: [],
    lernzettel: { kompakt: [], mittel: [], ausfuehrlich: [] },
    flashcards: [],
    quiz: [],
    aufgaben: [],
  };
  ['gg', 'km', 'it'].forEach(id => {
    const d = EXAMS[id];
    merged.kannListe.push(...d.kannListe.map(g => ({ group: `[${d.short}] ${g.group}`, items: g.items })));
    merged.lernzettel.kompakt.push({ title: `── ${d.short}: ${d.name} ──`, content: '' });
    merged.lernzettel.kompakt.push(...d.lernzettel.kompakt);
    merged.lernzettel.mittel.push({ title: `── ${d.short}: ${d.name} ──`, content: '' });
    merged.lernzettel.mittel.push(...d.lernzettel.mittel);
    merged.lernzettel.ausfuehrlich.push({ title: `── ${d.short}: ${d.name} ──`, content: '' });
    merged.lernzettel.ausfuehrlich.push(...d.lernzettel.ausfuehrlich);
    merged.flashcards.push(...d.flashcards);
    merged.quiz.push(...d.quiz);
    merged.aufgaben.push(...d.aufgaben);
  });
  return merged;
}

function goHome() {
  showPage('home');
  document.body.className = '';
  document.getElementById('nav-exam-label').textContent = '';
  document.querySelector('.nav-dot').style.background = 'var(--accent)';
}

function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(`page-${name}`).classList.add('active');
}

function showSection(name) {
  currentSection = name;
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.snav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`section-${name}`).classList.add('active');
  document.getElementById(`btn-${name}`).classList.add('active');
  window.scrollTo(0, 0);
}

// ===== KANN-LISTE =====
function loadKannListe() {
  const container = document.getElementById('kannliste-content');
  const examId = currentExam.id;
  if (!kannListeState[examId]) kannListeState[examId] = {};

  let html = '';
  currentExam.kannListe.forEach((group, gi) => {
    html += `<div class="kl-group"><div class="kl-group-title">${group.group}</div>`;
    group.items.forEach((item, ii) => {
      const key = `${gi}-${ii}`;
      const done = kannListeState[examId][key] || false;
      html += `<div class="kl-item ${done ? 'done' : ''}" onclick="toggleKann('${key}', this)">
        <div class="kl-checkbox">${done ? '✓' : ''}</div>
        <div class="kl-text">${item}</div>
      </div>`;
    });
    html += '</div>';
  });
  container.innerHTML = html;
  updateProgress();
}

function toggleKann(key, el) {
  const examId = currentExam.id;
  if (!kannListeState[examId]) kannListeState[examId] = {};
  const newState = !kannListeState[examId][key];
  kannListeState[examId][key] = newState;
  el.classList.toggle('done', newState);
  el.querySelector('.kl-checkbox').textContent = newState ? '✓' : '';
  saveProgress();
  updateProgress();
}

function updateProgress() {
  if (!currentExam) return;
  const examId = currentExam.id;
  const state = kannListeState[examId] || {};
  const total = currentExam.kannListe.reduce((s, g) => s + g.items.length, 0);
  const done = Object.values(state).filter(Boolean).length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  document.getElementById('progress-fill').style.width = `${pct}%`;
  document.getElementById('progress-text').textContent = `${done} / ${total} (${pct}%)`;
}

// ===== LERNZETTEL =====
function loadLernzettel() {
  setLerntyp(currentLerntyp);
}

function setLerntyp(typ) {
  currentLerntyp = typ;
  const labels = ['kompakt', 'mittel', 'ausfuehrlich', 'bildlich', 'markiert'];
  document.querySelectorAll('.lerntyp-toggle .toggle-btn').forEach((b, i) => {
    b.classList.toggle('active', labels[i] === typ);
  });

  // Highlight-Toolbar nur bei "markiert" oder normalem Lernzettel
  const tb = document.getElementById('highlight-toolbar');
  tb.classList.toggle('active', typ !== 'bildlich');

  // Bei "bildlich" und "markiert" nutzen wir die mittel-Daten als Basis
  let data;
  if (typ === 'bildlich' || typ === 'markiert') {
    data = currentExam.lernzettel.mittel;
  } else {
    data = currentExam.lernzettel[typ];
  }

  const container = document.getElementById('lernzettel-content');
  let html = '';

  if (typ === 'bildlich') {
    data.forEach(topic => {
      if (!topic.content) {
        html += `<div style="margin:32px 0 12px;padding:12px;background:var(--bg3);border-radius:8px;font-weight:700;font-size:14px;color:var(--text-muted);text-align:center">${topic.title}</div>`;
        return;
      }
      const icon = pickIcon(topic.title);
      const points = splitIntoPoints(topic.content);
      html += `<div class="lz-visual">
        <div class="lz-visual-icon">${icon}</div>
        <div class="lz-visual-content">
          <div class="lz-visual-title">${topic.title}</div>
          <ul class="lz-visual-points">${points.map(p => `<li>${p}</li>`).join('')}</ul>
        </div>
      </div>`;
    });
  } else {
    data.forEach((topic, ti) => {
      if (!topic.content) {
        html += `<div style="margin:32px 0 12px;padding:12px;background:var(--bg3);border-radius:8px;font-weight:700;font-size:14px;color:var(--text-muted);text-align:center">${topic.title}</div>`;
        return;
      }
      let content = topic.content;
      if (typ === 'markiert') content = autoMarkText(content);
      content = content.replace(/\n/g, '<br>');
      // User highlights
      const key = `${currentExam.id}-${typ}-${ti}`;
      content = applyUserHighlights(content, key);
      html += `<div class="lz-topic" data-topic-key="${key}">
        <div class="lz-topic-title">${topic.title}</div>
        <div class="lz-text" data-key="${key}">${content}</div>
      </div>`;
    });
  }

  container.innerHTML = html;

  // Selection-Listener für User-Highlights
  if (typ !== 'bildlich') attachHighlightListeners();
}

// ===== HILFSFUNKTIONEN für neue Varianten =====
function pickIcon(title) {
  const t = title.toLowerCase();
  const map = [
    ['logo', '🎨'], ['marken', '⭐'], ['farb', '🌈'], ['typo', '🔤'], ['schrift', '🔤'],
    ['print', '🖨'], ['plakat', '📰'], ['flyer', '📄'], ['pack', '📦'], ['verpack', '📦'],
    ['foto', '📷'], ['bild', '🖼'], ['gestal', '✏️'], ['urheber', '⚖️'], ['recht', '⚖️'],
    ['datenschutz', '🔒'], ['dsgvo', '🛡'], ['cookie', '🍪'], ['sicher', '🔐'], ['hard', '💻'],
    ['software', '💿'], ['netz', '🌐'], ['impressum', '📋'], ['schufa', '💳'], ['ethik', '🤝'],
    ['web', '🌐'], ['ux', '👤'], ['ui', '🎯'], ['figma', '🎨'], ['responsive', '📱'],
    ['mobile', '📱'], ['cms', '⚙️'], ['seo', '🔍'], ['projekt', '📊'], ['konzept', '💡'],
    ['informations', '🗂'], ['layout', '📐'], ['kompon', '🧩'], ['system', '⚙️'],
    ['mood', '🎭'], ['story', '🎬'], ['stil', '✨'], ['begründ', '💬'],
    ['grundlag', '📚'], ['kontrast', '⚫⚪'], ['hierarc', '📊'],
  ];
  for (const [kw, icon] of map) if (t.includes(kw)) return icon;
  return '📝';
}

function splitIntoPoints(content) {
  // Split on sentences/dots that end logical units
  const cleaned = content.replace(/\s+/g, ' ').trim();
  const parts = cleaned.split(/(?<=[.!?])\s+/).filter(s => s.length > 5);
  return parts.length ? parts : [cleaned];
}

function autoMarkText(content) {
  // Markiere wichtige Begriffe automatisch
  const keywords = {
    yellow: /\b(DSGVO|TTDSG|HTTPS|TOMs?|2FA|CMYK|RGB|DPI|UrhG|CC|SCHUFA|SEO|CMS|UX|UI|API|SVG|PNG|PDF|JPG|GIF|HTML|CSS|JS|JavaScript)\b/g,
    blue: /\b(\d+\s?(Jahre|Tage|Stunden|Minuten|Mio\.|€|%|DPI|Bit|Pixel|Spalten|Punkte))\b/g,
    pink: /\b(Beispiel|z\.B\.|wichtig|Pflicht|zwingend|verboten|nicht erlaubt|MUSS|SOLL|Achtung)\b/gi,
  };

  // Bold vor Doppelpunkt
  content = content.replace(/(^|<br>|\.\s+)([A-ZÄÖÜ][^:.\n]{2,40}):/g, '$1<span class="auto-bold">$2:</span>');

  // Highlights
  for (const [color, re] of Object.entries(keywords)) {
    content = content.replace(re, `<span class="auto-${color}">$&</span>`);
  }
  return content;
}

// User-Highlights via Selection
function attachHighlightListeners() {
  document.querySelectorAll('.lz-text[data-key]').forEach(el => {
    el.addEventListener('mouseup', handleSelection);
  });
}

function handleSelection() {
  if (!activeHighlightColor && activeHighlightColor !== null) return;
  const sel = window.getSelection();
  if (!sel || sel.isCollapsed) return;
  const range = sel.getRangeAt(0);
  const container = range.startContainer.parentElement.closest('.lz-text[data-key]');
  if (!container) return;

  if (activeHighlightColor === null) {
    // Erase highlights in selection
    sel.removeAllRanges();
    return;
  }

  // Wrap selection in <span>
  try {
    const span = document.createElement('span');
    span.className = `user-mark ${activeHighlightColor}`;
    span.appendChild(range.extractContents());
    range.insertNode(span);
    sel.removeAllRanges();

    // Persist
    const key = container.dataset.key;
    if (!userHighlights[key]) userHighlights[key] = [];
    userHighlights[key].push({ html: container.innerHTML });
    saveHighlights();
  } catch (e) { console.warn('Highlight failed', e); }
}

function setHighlight(color) {
  activeHighlightColor = color;
  document.querySelectorAll('.hl-color').forEach(b => {
    b.classList.toggle('active', b.dataset.color === color || (color === null && b.classList.contains('hl-erase')));
  });

  // Wenn Erase: bestehende Marks im Selection-Bereich entfernen
  if (color === null) {
    document.querySelectorAll('.lz-text .user-mark').forEach(el => {
      el.addEventListener('click', removeMark, { once: true });
    });
  }
}

function removeMark(e) {
  const el = e.currentTarget;
  if (activeHighlightColor !== null) return;
  const parent = el.parentNode;
  while (el.firstChild) parent.insertBefore(el.firstChild, el);
  parent.removeChild(el);
  // Persist current state
  const container = parent.closest('.lz-text[data-key]');
  if (container) {
    const key = container.dataset.key;
    userHighlights[key] = [{ html: container.innerHTML }];
    saveHighlights();
  }
}

function applyUserHighlights(content, key) {
  const stored = userHighlights[key];
  if (stored && stored.length && stored[stored.length - 1].html) {
    return stored[stored.length - 1].html;
  }
  return content;
}

function saveHighlights() {
  try { localStorage.setItem('userHighlights', JSON.stringify(userHighlights)); } catch (e) {}
}
function loadHighlights() {
  try {
    const s = localStorage.getItem('userHighlights');
    if (s) userHighlights = JSON.parse(s);
  } catch (e) {}
}

// ===== FLASHCARDS =====
function loadFlashcards() {
  cardIndex = 0;
  cardFlipped = false;
  renderCard();
}

function renderCard() {
  const cards = currentExam.flashcards;
  if (!cards.length) return;
  const card = cards[cardIndex];
  document.getElementById('fc-front').textContent = card.q;
  document.getElementById('fc-back').textContent = card.a;
  document.getElementById('card-counter').textContent = `${cardIndex + 1} / ${cards.length}`;
  document.getElementById('flashcard-inner').classList.remove('flipped');
  cardFlipped = false;
}

function flipCard() {
  cardFlipped = !cardFlipped;
  document.getElementById('flashcard-inner').classList.toggle('flipped', cardFlipped);
}

function nextCard() {
  const cards = currentExam.flashcards;
  cardIndex = (cardIndex + 1) % cards.length;
  renderCard();
}

function prevCard() {
  const cards = currentExam.flashcards;
  cardIndex = (cardIndex - 1 + cards.length) % cards.length;
  renderCard();
}

// ===== QUIZ =====
function loadQuiz() {
  quizIndex = 0;
  quizAnswers = {};
  renderQuiz();
}

function renderQuiz() {
  const container = document.getElementById('quiz-content');
  const questions = currentExam.quiz;
  if (!questions.length) { container.innerHTML = '<p>Keine Quiz-Fragen verfügbar.</p>'; return; }

  const q = questions[quizIndex];
  const answered = quizAnswers[quizIndex] !== undefined;
  const isLast = quizIndex === questions.length - 1;

  let html = `<div class="quiz-question-wrap">
    <div class="quiz-q-num">Frage ${quizIndex + 1} von ${questions.length}</div>
    <div class="quiz-q-text">${q.q}</div>`;

  if (q.type === 'mc') {
    html += '<div class="quiz-options">';
    q.options.forEach((opt, i) => {
      let cls = '';
      if (answered) {
        if (i === q.correct) cls = 'correct';
        else if (i === quizAnswers[quizIndex] && i !== q.correct) cls = 'wrong';
      }
      html += `<button class="quiz-option ${cls}" onclick="answerMC(${i})" ${answered ? 'disabled' : ''}>${opt}</button>`;
    });
    html += '</div>';
    if (answered) {
      html += `<div style="margin-top:16px;padding:14px;background:var(--bg3);border-radius:8px;font-size:14px;color:var(--text-dim)">
        💡 ${q.explanation}</div>`;
    }
  } else {
    html += `<div class="quiz-open">
      <textarea placeholder="Deine Antwort..." id="open-answer">${quizAnswers[quizIndex] || ''}</textarea>
      <button class="quiz-show-answer-btn" onclick="toggleModelAnswer(this)">Musterlösung anzeigen</button>
      <div class="quiz-model-answer" id="model-answer">
        <strong>Musterlösung:</strong><br>${q.model.replace(/\n/g, '<br>')}
      </div>
    </div>`;
  }

  html += `<div class="quiz-nav">
    <button onclick="prevQuestion()" ${quizIndex === 0 ? 'disabled' : ''}>← Zurück</button>
    <span style="font-size:14px;color:var(--text-muted)">${quizIndex + 1} / ${questions.length}</span>
    ${isLast
      ? `<button class="quiz-submit-btn" onclick="showQuizResult()">Auswertung →</button>`
      : `<button onclick="nextQuestion()">Weiter →</button>`
    }
  </div>`;

  html += '</div>';
  container.innerHTML = html;
}

function answerMC(i) {
  quizAnswers[quizIndex] = i;
  renderQuiz();
}

function toggleModelAnswer(btn) {
  const el = document.getElementById('model-answer');
  el.classList.toggle('visible');
  btn.textContent = el.classList.contains('visible') ? 'Musterlösung verbergen' : 'Musterlösung anzeigen';
  // Save text
  const ta = document.getElementById('open-answer');
  if (ta) quizAnswers[quizIndex] = ta.value;
}

function nextQuestion() {
  const ta = document.getElementById('open-answer');
  if (ta) quizAnswers[quizIndex] = ta.value;
  quizIndex++;
  renderQuiz();
}

function prevQuestion() {
  const ta = document.getElementById('open-answer');
  if (ta) quizAnswers[quizIndex] = ta.value;
  quizIndex--;
  renderQuiz();
}

function showQuizResult() {
  const questions = currentExam.quiz;
  const mcQs = questions.filter(q => q.type === 'mc');
  const correct = mcQs.filter((q, i) => {
    const idx = questions.indexOf(q);
    return quizAnswers[idx] === q.correct;
  }).length;
  const pct = mcQs.length > 0 ? Math.round((correct / mcQs.length) * 100) : 0;

  let emoji = '😔';
  if (pct >= 80) emoji = '🎉';
  else if (pct >= 60) emoji = '👍';
  else if (pct >= 40) emoji = '📚';

  document.getElementById('quiz-content').innerHTML = `
    <div class="quiz-result">
      <div style="font-size:60px;margin-bottom:16px">${emoji}</div>
      <h3>${pct}%</h3>
      <p>${correct} von ${mcQs.length} Multiple-Choice-Fragen richtig beantwortet.</p>
      ${mcQs.length < questions.length ? `<p style="font-size:13px;margin-bottom:24px">Die offenen Fragen müssen selbst bewertet werden.</p>` : ''}
      <button class="quiz-restart-btn" onclick="loadQuiz()">Nochmal starten</button>
    </div>`;
}

// ===== AUFGABEN =====
function loadAufgaben() {
  const container = document.getElementById('aufgaben-content');
  const aufgaben = currentExam.aufgaben;
  if (!aufgaben.length) { container.innerHTML = '<p>Keine Aufgaben verfügbar.</p>'; return; }

  let html = '<div class="aufgaben-list">';
  aufgaben.forEach((a, i) => {
    html += `<div class="aufgabe-item" id="aufgabe-item-${i}" onclick="openAufgabe(${i})">
      <div>
        <div class="aufgabe-num">Aufgabe ${i + 1}</div>
        <div class="aufgabe-title">${a.title}</div>
      </div>
      <div class="aufgabe-arrow">›</div>
    </div>`;
  });
  html += '</div>';

  html += '<div class="aufgabe-detail" id="aufgabe-detail"></div>';
  container.innerHTML = html;
}

function openAufgabe(i) {
  const aufgaben = currentExam.aufgaben;
  const a = aufgaben[i];
  currentAufgabe = i;

  document.querySelectorAll('.aufgabe-item').forEach(el => el.classList.remove('active-aufgabe'));
  document.getElementById(`aufgabe-item-${i}`).classList.add('active-aufgabe');

  const detail = document.getElementById('aufgabe-detail');
  detail.classList.add('visible');
  detail.innerHTML = `
    <h3>${a.title}</h3>
    <div class="aufgabe-points">📝 ${a.points}</div>
    <div class="aufgabe-question">${a.question.replace(/\n/g, '<br>')}</div>
    <div class="aufgabe-answer-section">
      <label>Deine Antwort / Notizen:</label>
      <textarea placeholder="Schreibe hier deine Antwort..." id="aufgabe-answer-${i}"></textarea>
      <button class="aufgabe-check-btn" onclick="showAufgabeModel(${i})">Musterlösung anzeigen</button>
      <div class="aufgabe-model" id="aufgabe-model-${i}">
        <div class="aufgabe-model-title">✓ Musterlösung</div>
        ${a.model.replace(/\n/g, '<br>')}
      </div>
    </div>`;

  detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showAufgabeModel(i) {
  document.getElementById(`aufgabe-model-${i}`).classList.toggle('visible');
}

// ===== DOWNLOAD =====
function downloadContent() {
  if (!currentExam) return;
  const exam = currentExam;
  let text = `PRÜFUNGSVORBEREITUNG – ${exam.name} (${exam.short})\n`;
  text += `${'='.repeat(60)}\n\n`;

  text += `KANN-LISTE\n${'─'.repeat(40)}\n`;
  exam.kannListe.forEach(g => {
    text += `\n${g.group}\n`;
    g.items.forEach(item => text += `  ☐ ${item}\n`);
  });

  text += `\n\nLERNZETTEL (Ausführlich)\n${'─'.repeat(40)}\n`;
  exam.lernzettel.ausfuehrlich.forEach(t => {
    text += `\n${t.title}\n${t.content}\n`;
  });

  text += `\n\nFLASHCARDS\n${'─'.repeat(40)}\n`;
  exam.flashcards.forEach((f, i) => {
    text += `\nKarte ${i + 1}:\nFrage: ${f.q}\nAntwort: ${f.a}\n`;
  });

  text += `\n\nBEISPIELPRÜFUNGEN\n${'─'.repeat(40)}\n`;
  exam.aufgaben.forEach((a, i) => {
    text += `\nAufgabe ${i + 1}: ${a.title} (${a.points})\n`;
    text += `${a.question}\n\nMusterlösung:\n${a.model}\n\n`;
  });

  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Pruefungsvorbereitung_${exam.short}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

// ===== PERSISTENZ =====
function saveProgress() {
  try { localStorage.setItem('kannliste', JSON.stringify(kannListeState)); } catch(e) {}
}

function loadProgress() {
  try {
    const saved = localStorage.getItem('kannliste');
    if (saved) kannListeState = JSON.parse(saved);
  } catch(e) {}
}

// ===== PRÜFUNGSMODUS – LIST =====
function loadPruefung() {
  const container = document.getElementById('pruefung-content');
  if (!container) return;
  const examId = currentExam.id;
  let tests = [];
  if (examId === 'alle') {
    tests = [
      ...TESTS.gg.map(t => ({ ...t, _src: 'gg', _srcLabel: 'GG' })),
      ...TESTS.km.map(t => ({ ...t, _src: 'km', _srcLabel: 'KM' })),
      ...TESTS.it.map(t => ({ ...t, _src: 'it', _srcLabel: 'IT' })),
    ];
  } else {
    tests = (TESTS[examId] || []).map(t => ({ ...t, _src: examId, _srcLabel: currentExam.short }));
  }

  if (!tests.length) { container.innerHTML = '<p style="color:var(--text-muted)">Keine Prüfungen verfügbar.</p>'; return; }

  // Sortiere: Vollprüfungen zuerst
  const vollTests = tests.filter(t => t.isFull);
  const restTests = tests.filter(t => !t.isFull);

  let html = '';

  if (vollTests.length) {
    html += `<div class="pruefung-section-head pruefung-voll-head">
      <span class="pruefung-voll-badge">⭐ VOLLPRÜFUNGEN</span>
      <span class="pruefung-section-sub">Realistische 4-5h-Prüfungen wie der echte Prüfungstag</span>
    </div>`;
    html += '<div class="pruefung-list">';
    vollTests.forEach(t => html += renderPruefungCard(t, true));
    html += '</div>';
  }

  if (restTests.length) {
    html += `<div class="pruefung-section-head" style="margin-top:32px">
      <span class="pruefung-section-title">Beispielprüfungen (kürzer)</span>
      <span class="pruefung-section-sub">Themenfokussierte Übungen, 60-180 Min</span>
    </div>`;
    html += '<div class="pruefung-list">';
    restTests.forEach(t => html += renderPruefungCard(t, false));
    html += '</div>';
  }

  container.innerHTML = html;
}

function renderPruefungCard(t, isVoll) {
  const totalPoints = t.questions.reduce((s, q) => s + (q.points || 0), 0);
  const idx = TESTS[t._src].indexOf(TESTS[t._src].find(x => x.title === t.title));
  return `<div class="pruefung-item ${isVoll ? 'pruefung-voll' : ''}" onclick="startExamMode('${t._src}', ${idx})">
    ${isVoll ? '<div class="pruefung-voll-corner">⭐ VOLLPRÜFUNG</div>' : ''}
    <div class="pruefung-meta">
      <span class="pruefung-meta-tag">${t._srcLabel}</span>
      <span class="pruefung-meta-tag timer-tag">⏱ ${t.duration} Min.</span>
      <span class="pruefung-meta-tag">${t.questions.length} Aufgaben</span>
      <span class="pruefung-meta-tag">${totalPoints} Punkte</span>
    </div>
    <div class="pruefung-title">${t.title}</div>
    <div class="pruefung-desc">${t.description || ''}</div>
    <button class="pruefung-start-btn">▶ Prüfung starten</button>
  </div>`;
}

// ===== EXAM MODE START =====
function startExamMode(srcId, idx) {
  const test = TESTS[srcId][idx];
  if (!test) return;

  // Akzentfarbe der Quell-Prüfung übernehmen
  document.body.className = `exam-${srcId}`;

  em.exam = test;
  em.examId = srcId;
  em.qIdx = 0;
  em.answers = test.questions.map(q => {
    if (q.type === 'mc') return null;
    if (q.type === 'checkbox') return [];
    if (q.type === 'open') return '';
    if (q.type === 'draw') return null; // dataURL
    return null;
  });
  em.canvases = {};
  em.duration = test.duration * 60;
  em.startTime = Date.now();
  em.finished = false;

  document.getElementById('em-title').textContent = test.title;
  document.getElementById('exam-mode').classList.add('active');
  document.querySelector('.em-footer').style.display = 'flex';

  // Timer starten
  if (em.timerInterval) clearInterval(em.timerInterval);
  updateTimer();
  em.timerInterval = setInterval(updateTimer, 1000);

  emRender();
}

function abortExamMode() {
  if (!em.finished && !confirm('Prüfung wirklich abbrechen? Dein Fortschritt geht verloren.')) return;
  if (em.timerInterval) clearInterval(em.timerInterval);
  document.getElementById('exam-mode').classList.remove('active');
  document.body.className = `exam-${currentExam.id}`;
  em.finished = false;
}

function updateTimer() {
  const elapsed = Math.floor((Date.now() - em.startTime) / 1000);
  const remaining = em.duration - elapsed;

  if (remaining <= 0) {
    document.getElementById('em-timer').textContent = '00:00';
    clearInterval(em.timerInterval);
    finishExam(true);
    return;
  }

  const mm = Math.floor(remaining / 60);
  const ss = remaining % 60;
  const t = document.getElementById('em-timer');
  t.textContent = `${String(mm).padStart(2,'0')}:${String(ss).padStart(2,'0')}`;
  t.classList.toggle('warning', remaining < 600 && remaining >= 120);
  t.classList.toggle('critical', remaining < 120);
}

// ===== EXAM MODE RENDER =====
function emRender() {
  // dots
  const dots = document.getElementById('em-dots');
  let dh = '';
  em.exam.questions.forEach((q, i) => {
    const ans = em.answers[i];
    const answered = (q.type === 'mc' && ans !== null) ||
                     (q.type === 'checkbox' && Array.isArray(ans) && ans.length > 0) ||
                     (q.type === 'open' && ans && ans.trim()) ||
                     (q.type === 'draw' && ans);
    dh += `<button class="em-dot ${answered ? 'answered' : ''} ${i === em.qIdx ? 'current' : ''}" onclick="emGoTo(${i})">${i+1}</button>`;
  });
  dots.innerHTML = dh;

  document.getElementById('em-progress').textContent = `Frage ${em.qIdx + 1} / ${em.exam.questions.length}`;

  const q = em.exam.questions[em.qIdx];
  const body = document.getElementById('em-body');
  let typeLabel = { mc: 'Multiple Choice', checkbox: 'Mehrfachauswahl', open: 'Freitext', draw: 'Skizze' }[q.type];

  let html = `<div class="em-question">
    <div class="em-q-meta">
      <span>${typeLabel}</span>
      <span class="em-q-points">${q.points || 0} Punkte</span>
    </div>
    <div class="em-q-text">${q.q}</div>`;

  if (q.type === 'mc') {
    html += '<div class="em-options">';
    q.options.forEach((opt, i) => {
      const sel = em.answers[em.qIdx] === i ? 'selected' : '';
      html += `<button class="em-option ${sel}" onclick="emSelectMC(${i})">
        <span class="em-option-marker"></span><span>${opt}</span>
      </button>`;
    });
    html += '</div>';
  } else if (q.type === 'checkbox') {
    html += '<div class="em-options">';
    q.options.forEach((opt, i) => {
      const sel = (em.answers[em.qIdx] || []).includes(i) ? 'selected' : '';
      html += `<button class="em-option checkbox ${sel}" onclick="emToggleCheckbox(${i})">
        <span class="em-option-marker"></span><span>${opt}</span>
      </button>`;
    });
    html += '</div><p style="color:var(--text-muted);font-size:13px;margin-top:8px">Mehrere Antworten möglich.</p>';
  } else if (q.type === 'open') {
    html += `<textarea class="em-textarea" placeholder="Deine Antwort..." oninput="emSetOpen(this.value)">${em.answers[em.qIdx] || ''}</textarea>`;
  } else if (q.type === 'draw') {
    html += `<div class="em-canvas-wrap">
      <div class="em-canvas-tools">
        <button class="em-tool-btn ${em.draw.tool==='pen'?'active':''}" onclick="emSetTool('pen')">✏ Stift</button>
        <button class="em-tool-btn ${em.draw.tool==='eraser'?'active':''}" onclick="emSetTool('eraser')">🧽 Radierer</button>
        <button class="em-tool-btn" onclick="emClearCanvas()">🗑 Löschen</button>
        <span class="em-color ${em.draw.color==='#000'?'active':''}" style="background:#000" onclick="emSetColor('#000')"></span>
        <span class="em-color ${em.draw.color==='#ef4444'?'active':''}" style="background:#ef4444" onclick="emSetColor('#ef4444')"></span>
        <span class="em-color ${em.draw.color==='#3b82f6'?'active':''}" style="background:#3b82f6" onclick="emSetColor('#3b82f6')"></span>
        <span class="em-color ${em.draw.color==='#22c55e'?'active':''}" style="background:#22c55e" onclick="emSetColor('#22c55e')"></span>
        <span class="em-color ${em.draw.color==='#fb923c'?'active':''}" style="background:#fb923c" onclick="emSetColor('#fb923c')"></span>
        <label class="em-size-slider">
          Größe <input type="range" min="1" max="20" value="${em.draw.size}" oninput="emSetSize(this.value)">
        </label>
      </div>
      <canvas id="em-canvas" class="em-canvas" width="900" height="500"></canvas>
    </div>
    <div class="em-image-upload">
      <label class="em-upload-btn">
        🖼 Bild hochladen
        <input type="file" accept="image/*" onchange="emUploadImage(this)">
      </label>
      <span class="em-upload-info">Optional: für fertige Logos / Designs Bild einfügen statt zeichnen.</span>
    </div>
    <p style="color:var(--text-muted);font-size:13px;margin-top:8px">Skizze wird automatisch gespeichert.</p>`;
  }
  html += '</div>';

  body.innerHTML = html;
  body.scrollTop = 0;

  if (q.type === 'draw') initCanvas();

  // Buttons
  const isLast = em.qIdx === em.exam.questions.length - 1;
  document.getElementById('em-prev').disabled = em.qIdx === 0;
  const nextBtn = document.getElementById('em-next');
  nextBtn.textContent = isLast ? '✓ Prüfung abgeben' : 'Weiter →';
  nextBtn.classList.toggle('em-btn-submit', isLast);
}

function emPrev() { saveCurrentCanvas(); if (em.qIdx > 0) { em.qIdx--; emRender(); } }
function emNext() {
  saveCurrentCanvas();
  if (em.qIdx < em.exam.questions.length - 1) { em.qIdx++; emRender(); }
  else { if (confirm('Prüfung wirklich abgeben? Du kannst keine Antworten mehr ändern.')) finishExam(false); }
}
function emGoTo(i) { saveCurrentCanvas(); em.qIdx = i; emRender(); }

function emSelectMC(i) { em.answers[em.qIdx] = i; emRender(); }
function emToggleCheckbox(i) {
  const arr = em.answers[em.qIdx] || [];
  const idx = arr.indexOf(i);
  if (idx >= 0) arr.splice(idx, 1); else arr.push(i);
  em.answers[em.qIdx] = arr;
  emRender();
}
function emSetOpen(v) { em.answers[em.qIdx] = v; }

// ===== CANVAS / DRAWING =====
function initCanvas() {
  const canvas = document.getElementById('em-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // Restore saved drawing
  const saved = em.answers[em.qIdx];
  if (saved) {
    const img = new Image();
    img.onload = () => ctx.drawImage(img, 0, 0);
    img.src = saved;
  } else {
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  const getPos = (e) => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (e.clientX || (e.touches && e.touches[0].clientX) || 0) - rect.left;
    const y = (e.clientY || (e.touches && e.touches[0].clientY) || 0) - rect.top;
    return [x * scaleX, y * scaleY];
  };

  const start = (e) => {
    e.preventDefault();
    em.draw.isDrawing = true;
    [em.draw.lastX, em.draw.lastY] = getPos(e);
  };
  const move = (e) => {
    if (!em.draw.isDrawing) return;
    e.preventDefault();
    const [x, y] = getPos(e);
    ctx.strokeStyle = em.draw.tool === 'eraser' ? '#fff' : em.draw.color;
    ctx.lineWidth = em.draw.tool === 'eraser' ? em.draw.size * 4 : em.draw.size;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(em.draw.lastX, em.draw.lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
    [em.draw.lastX, em.draw.lastY] = [x, y];
  };
  const end = () => {
    if (em.draw.isDrawing) saveCurrentCanvas();
    em.draw.isDrawing = false;
  };

  canvas.addEventListener('mousedown', start);
  canvas.addEventListener('mousemove', move);
  canvas.addEventListener('mouseup', end);
  canvas.addEventListener('mouseleave', end);
  canvas.addEventListener('touchstart', start, { passive: false });
  canvas.addEventListener('touchmove', move, { passive: false });
  canvas.addEventListener('touchend', end);
}

function saveCurrentCanvas() {
  const canvas = document.getElementById('em-canvas');
  if (!canvas) return;
  const q = em.exam.questions[em.qIdx];
  if (q.type === 'draw') em.answers[em.qIdx] = canvas.toDataURL('image/png');
}

function emClearCanvas() {
  const canvas = document.getElementById('em-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  em.answers[em.qIdx] = null;
}
function emSetTool(t) { em.draw.tool = t; emRender(); }
function emSetColor(c) { em.draw.color = c; em.draw.tool = 'pen'; emRender(); }
function emSetSize(s) { em.draw.size = parseInt(s); }

// ===== FINISH & RESULT =====
function finishExam(timeout) {
  saveCurrentCanvas();
  if (em.timerInterval) clearInterval(em.timerInterval);
  em.finished = true;

  const elapsed = Math.floor((Date.now() - em.startTime) / 1000);
  const elapsedMin = Math.floor(elapsed / 60);
  const elapsedSec = elapsed % 60;

  let autoPoints = 0;
  let maxAutoPoints = 0;
  let totalMaxPoints = 0;
  let manualPoints = 0;
  let manualMax = 0;

  const reviews = em.exam.questions.map((q, i) => {
    totalMaxPoints += q.points || 0;
    const ans = em.answers[i];
    let status = 'manual', earned = 0, autoMax = 0;

    if (q.type === 'mc') {
      autoMax = q.points || 0;
      maxAutoPoints += autoMax;
      if (ans === q.correct) { earned = autoMax; status = 'correct'; autoPoints += earned; }
      else { status = 'wrong'; }
    } else if (q.type === 'checkbox') {
      autoMax = q.points || 0;
      maxAutoPoints += autoMax;
      const correct = q.correct || [];
      const given = ans || [];
      // Punkte = (richtige - falsche) / korrekte * Punkte (min 0)
      const rightCount = given.filter(g => correct.includes(g)).length;
      const wrongCount = given.filter(g => !correct.includes(g)).length;
      const rate = Math.max(0, (rightCount - wrongCount) / correct.length);
      earned = Math.round(autoMax * rate);
      autoPoints += earned;
      if (earned === autoMax) status = 'correct';
      else if (earned === 0) status = 'wrong';
      else status = 'partial';
    } else {
      manualMax += q.points || 0;
      status = 'manual';
    }
    return { q, ans, status, earned, autoMax };
  });

  // Render Result
  const score = totalMaxPoints > 0 ? Math.round(((autoPoints + manualPoints) / totalMaxPoints) * 100) : 0;
  const autoPct = maxAutoPoints > 0 ? Math.round((autoPoints / maxAutoPoints) * 100) : 0;

  let emoji = '🎉', grade = 'Sehr gut!';
  if (autoPct < 50) { emoji = '📚'; grade = 'Mehr lernen!'; }
  else if (autoPct < 70) { emoji = '👍'; grade = 'Gut, weiter so!'; }
  else if (autoPct < 90) { emoji = '🌟'; grade = 'Sehr gut!'; }

  let html = `<div class="em-result">
    <div class="em-result-summary">
      <div class="em-result-emoji">${emoji}</div>
      <div class="em-result-score">${autoPoints} / ${maxAutoPoints} P.</div>
      <div class="em-result-grade">${grade} (Auto-Auswertung: ${autoPct}%)</div>
      ${timeout ? '<p style="color:#ef4444;margin-top:8px">⏱ Zeit abgelaufen</p>' : ''}
      <div class="em-result-stats">
        <div class="em-result-stat">
          <div class="em-result-stat-value">${elapsedMin}:${String(elapsedSec).padStart(2,'0')}</div>
          <div class="em-result-stat-label">Bearbeitungszeit</div>
        </div>
        <div class="em-result-stat">
          <div class="em-result-stat-value">${em.exam.questions.length}</div>
          <div class="em-result-stat-label">Aufgaben</div>
        </div>
        <div class="em-result-stat">
          <div class="em-result-stat-value">${totalMaxPoints}</div>
          <div class="em-result-stat-label">Max. Punkte</div>
        </div>
        ${manualMax > 0 ? `<div class="em-result-stat">
          <div class="em-result-stat-value">${manualMax}</div>
          <div class="em-result-stat-label">Manuell zu bewerten</div>
        </div>` : ''}
      </div>
      <div class="em-result-actions">
        <button class="em-btn em-btn-secondary" onclick="abortExamMode()">Schließen</button>
        <button class="em-btn em-btn-primary" onclick="startExamMode('${em.examId}', ${TESTS[em.examId].indexOf(em.exam)})">Nochmal starten</button>
      </div>
    </div>
    <h3 style="margin:24px 0 16px;font-size:20px">📋 Auswertung & Musterlösungen</h3>`;

  reviews.forEach((r, i) => {
    const q = r.q;
    let answerHTML = '';
    if (q.type === 'mc') {
      answerHTML = `<div class="em-review-answer-label">Deine Antwort</div>
        <div class="em-review-answer">${r.ans !== null ? q.options[r.ans] : '<em>(nicht beantwortet)</em>'}</div>
        <div class="em-review-answer-label">Richtige Antwort</div>
        <div class="em-review-answer" style="border-left:3px solid #22c55e">${q.options[q.correct]}</div>`;
      if (q.explanation) answerHTML += `<div class="em-review-model">💡 ${q.explanation}</div>`;
    } else if (q.type === 'checkbox') {
      const given = (r.ans || []).map(i => q.options[i]).join(', ') || '<em>(nichts ausgewählt)</em>';
      const correct = (q.correct || []).map(i => q.options[i]).join(', ');
      answerHTML = `<div class="em-review-answer-label">Deine Auswahl</div>
        <div class="em-review-answer">${given}</div>
        <div class="em-review-answer-label">Richtig wäre</div>
        <div class="em-review-answer" style="border-left:3px solid #22c55e">${correct}</div>`;
      if (q.explanation) answerHTML += `<div class="em-review-model">💡 ${q.explanation}</div>`;
    } else if (q.type === 'open') {
      answerHTML = `<div class="em-review-answer-label">Deine Antwort</div>
        <div class="em-review-answer" style="white-space:pre-wrap">${r.ans || '<em>(nicht beantwortet)</em>'}</div>
        <div class="em-review-answer-label">Musterlösung</div>
        <div class="em-review-model">${(q.model || '').replace(/\n/g,'<br>')}</div>
        <div class="em-self-rate">
          <span style="font-size:13px;color:var(--text-muted)">Selbst bewerten:</span>
          ${[0, Math.floor(q.points/2), q.points].map(p =>
            `<button class="em-self-rate-btn" onclick="rateSelf(${i}, ${p}, this)">${p} / ${q.points} P.</button>`
          ).join('')}
        </div>`;
    } else if (q.type === 'draw') {
      const img = r.ans ? `<img class="em-review-canvas" src="${r.ans}" alt="Skizze"/>` : '<em>(keine Skizze)</em>';
      answerHTML = `<div class="em-review-answer-label">Deine Skizze</div>
        ${img}
        <div class="em-review-answer-label" style="margin-top:12px">Musterlösung / Erwartung</div>
        <div class="em-review-model">${(q.model || '').replace(/\n/g,'<br>')}</div>
        <div class="em-self-rate">
          <span style="font-size:13px;color:var(--text-muted)">Selbst bewerten:</span>
          ${[0, Math.floor(q.points/2), q.points].map(p =>
            `<button class="em-self-rate-btn" onclick="rateSelf(${i}, ${p}, this)">${p} / ${q.points} P.</button>`
          ).join('')}
        </div>`;
    }

    const statusText = {
      correct: '✓ Richtig',
      wrong: '✗ Falsch',
      partial: `Teilweise (${r.earned}/${r.autoMax})`,
      manual: 'Selbst bewerten'
    }[r.status];

    html += `<div class="em-review-q ${r.status}" id="review-${i}">
      <div class="em-review-head">
        <span>Aufgabe ${i+1} · ${q.points} Punkte</span>
        <span class="em-review-status">${statusText}</span>
      </div>
      <div class="em-review-question">${q.q}</div>
      ${answerHTML}
    </div>`;
  });
  html += '</div>';

  document.getElementById('em-body').innerHTML = html;

  // Footer ausblenden während Auswertung
  document.querySelector('.em-footer').style.display = 'none';
  document.getElementById('em-progress').textContent = 'Auswertung';
}

function rateSelf(qIdx, points, btn) {
  btn.parentElement.querySelectorAll('.em-self-rate-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  // Could be used to update total score, simplified for now
}

// ===== REFERENZ SECTION =====
function loadReferenz() {
  const container = document.getElementById('referenz-content');
  if (!container) return;
  const examId = currentExam.id;

  if (examId === 'alle') {
    container.innerHTML = '';
    ['gg', 'km', 'it'].forEach(id => {
      const ex = EXAMS[id];
      const ref = REFERENZ[id];
      if (!ref) return;
      container.innerHTML += `<h3 style="margin:24px 0 12px;font-size:18px;color:var(--${id})">── ${ex.short}: ${ex.name} ──</h3>`;
      container.innerHTML += renderReferenzHTML(ref);
    });
    return;
  }

  const ref = REFERENZ[examId];
  if (!ref) {
    container.innerHTML = '<p style="color:var(--text-muted);padding:20px;">Keine Referenzmaterialien für dieses Fach.</p>';
    return;
  }
  container.innerHTML = renderReferenzHTML(ref);
}

function renderReferenzHTML(data) {
  let html = `<div class="tipps-intro">${data.intro}</div>`;
  data.chapters.forEach((ch, ci) => {
    html += `<div class="ref-chapter ${ci === 0 ? 'open' : ''}">
      <div class="ref-ch-head" onclick="this.parentElement.classList.toggle('open')">
        <span class="tipps-icon">${ch.icon}</span>
        <span class="tipps-title">${ch.title}</span>
        <span class="ref-count">${ch.sections.length} Themen</span>
        <span class="tipps-toggle">▼</span>
      </div>
      <div class="ref-ch-body">
        ${ch.sections.map((sec, si) => `
          <div class="ref-section">
            <div class="ref-sec-head" onclick="this.parentElement.classList.toggle('open')">
              <span class="ref-sec-title">${sec.title}</span>
              ${sec.type ? `<span class="ref-tag ref-tag-${sec.type}">${sec.type}</span>` : ''}
              <span class="tipps-toggle">▼</span>
            </div>
            <div class="ref-sec-body">
              <div class="ref-sec-content">${formatRefContent(sec.content)}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>`;
  });
  return html;
}

function formatRefContent(text) {
  // **bold** → <strong>
  let html = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  // Inline code with backticks
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  // Newlines → <br> (preserve double newlines as paragraph spacing)
  html = html.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>');
  return `<p>${html}</p>`;
}

// ===== TIPPS SECTION =====
function loadTipps() {
  const container = document.getElementById('tipps-content');
  if (!container) return;
  const examId = currentExam.id;

  let tippsData;
  if (examId === 'alle') {
    container.innerHTML = '';
    ['gg', 'km', 'it'].forEach(id => {
      const ex = EXAMS[id];
      container.innerHTML += `<h3 style="margin:24px 0 12px;font-size:18px;color:var(--${id})">── ${ex.short}: ${ex.name} ──</h3>`;
      container.innerHTML += renderTippsHTML(TIPPS[id]);
    });
    bindTippsToggles();
    return;
  }

  tippsData = TIPPS[examId];
  if (!tippsData) { container.innerHTML = '<p style="color:var(--text-muted)">Keine Tipps verfügbar.</p>'; return; }
  container.innerHTML = renderTippsHTML(tippsData);
  bindTippsToggles();
}

function renderTippsHTML(data) {
  let html = `<div class="tipps-intro">${data.intro}</div>`;
  data.sections.forEach((sec, i) => {
    html += `<div class="tipps-section ${i === 0 ? 'open' : ''}">
      <div class="tipps-head" onclick="this.parentElement.classList.toggle('open')">
        <span class="tipps-icon">${sec.icon}</span>
        <span class="tipps-title">${sec.title}</span>
        <span class="tipps-toggle">▼</span>
      </div>
      <div class="tipps-body">
        <div class="tipps-inner">
          ${sec.intro ? `<div class="tipps-section-intro">${sec.intro}</div>` : ''}
          <div class="tipps-grid">
            ${sec.items.map(it => `
              <div class="tipps-item">
                <div class="tipps-item-head">
                  <span class="tipps-name">${it.name}</span>
                  ${it.url ? `<a class="tipps-link" href="${it.url}" target="_blank" rel="noopener">↗ Öffnen</a>` : ''}
                </div>
                <div class="tipps-desc">${it.desc}</div>
              </div>`).join('')}
          </div>
        </div>
      </div>
    </div>`;
  });
  return html;
}
function bindTippsToggles() { /* onclick handler is already on .tipps-head */ }

// ===== EINZEL-DOWNLOAD PRO SEKTION =====
function downloadSection(name) {
  if (!currentExam) return;
  const exam = currentExam;
  let text = '';
  let filename = '';

  if (name === 'lernzettel') {
    const typ = currentLerntyp;
    const data = (typ === 'bildlich' || typ === 'markiert') ? exam.lernzettel.mittel : exam.lernzettel[typ];
    text = `LERNZETTEL (${typ.toUpperCase()}) – ${exam.name}\n${'='.repeat(60)}\n\n`;
    data.forEach(t => {
      if (!t.content) text += `\n── ${t.title} ──\n\n`;
      else text += `## ${t.title}\n${t.content}\n\n`;
    });
    filename = `Lernzettel_${exam.short}_${typ}.txt`;
  } else if (name === 'kannliste') {
    text = `KANN-LISTE – ${exam.name}\n${'='.repeat(60)}\n\n`;
    exam.kannListe.forEach(g => {
      text += `\n${g.group}\n`;
      g.items.forEach(item => text += `  ☐ ${item}\n`);
    });
    filename = `KannListe_${exam.short}.txt`;
  } else if (name === 'flashcards') {
    text = `FLASHCARDS – ${exam.name}\n${'='.repeat(60)}\n\n`;
    exam.flashcards.forEach((f, i) => text += `\nKarte ${i+1}\nFrage: ${f.q}\nAntwort: ${f.a}\n`);
    filename = `Flashcards_${exam.short}.txt`;
  } else if (name === 'quiz') {
    text = `QUIZ – ${exam.name}\n${'='.repeat(60)}\n\n`;
    exam.quiz.forEach((q, i) => {
      text += `\nFrage ${i+1}: ${q.q}\n`;
      if (q.options) {
        q.options.forEach((o, j) => text += `  ${String.fromCharCode(65+j)}) ${o}${j === q.correct ? ' ✓' : ''}\n`);
        if (q.explanation) text += `  💡 ${q.explanation}\n`;
      } else {
        text += `Musterlösung: ${q.model}\n`;
      }
    });
    filename = `Quiz_${exam.short}.txt`;
  } else if (name === 'aufgaben') {
    text = `EINZEL-AUFGABEN – ${exam.name}\n${'='.repeat(60)}\n\n`;
    exam.aufgaben.forEach((a, i) => {
      text += `\nAufgabe ${i+1}: ${a.title} (${a.points})\n${a.question}\n\nMusterlösung:\n${a.model}\n\n`;
    });
    filename = `Aufgaben_${exam.short}.txt`;
  } else if (name === 'pruefung') {
    text = `BEISPIELPRÜFUNGEN – ${exam.name}\n${'='.repeat(60)}\n\n`;
    const examId = exam.id;
    const tests = examId === 'alle'
      ? [...TESTS.gg.map(t => ({ ...t, _src: 'GG' })), ...TESTS.km.map(t => ({ ...t, _src: 'KM' })), ...TESTS.it.map(t => ({ ...t, _src: 'IT' }))]
      : (TESTS[examId] || []).map(t => ({ ...t, _src: exam.short }));
    tests.forEach((t, i) => {
      const totalPoints = t.questions.reduce((s, q) => s + (q.points || 0), 0);
      text += `\n[${t._src}] ${t.title} (${t.duration} Min, ${totalPoints} P.)\n${t.description || ''}\n${'-'.repeat(40)}\n`;
      t.questions.forEach((q, qi) => {
        text += `\n${qi+1}. [${q.type.toUpperCase()}, ${q.points} P.] ${q.q}\n`;
        if (q.options) {
          q.options.forEach((o, j) => {
            const isCorr = q.type === 'mc' ? j === q.correct : (q.correct || []).includes(j);
            text += `   ${String.fromCharCode(65+j)}) ${o}${isCorr ? ' ✓' : ''}\n`;
          });
          if (q.explanation) text += `   💡 ${q.explanation}\n`;
        }
        if (q.model) text += `   Musterlösung: ${q.model}\n`;
      });
    });
    filename = `Pruefungen_${exam.short}.txt`;
  } else if (name === 'referenz') {
    const examId = exam.id;
    const renderRefText = (data, name) => {
      if (!data || !data.chapters) return '';
      let t = `REFERENZMATERIALIEN – ${name}\n${'='.repeat(60)}\n\n${data.intro || ''}\n\n`;
      data.chapters.forEach(ch => {
        t += `\n${ch.icon} ${ch.title.toUpperCase()}\n${'='.repeat(50)}\n`;
        ch.sections.forEach(sec => {
          t += `\n── ${sec.title}${sec.type ? ` [${sec.type}]` : ''} ──\n${sec.content.replace(/\*\*/g, '')}\n`;
        });
      });
      return t + '\n';
    };
    if (examId === 'alle') {
      text = '';
      ['gg', 'km', 'it'].forEach(id => { text += renderRefText(REFERENZ[id], EXAMS[id].name); });
    } else {
      text = renderRefText(REFERENZ[examId], exam.name);
    }
    filename = `Referenz_${exam.short}.txt`;
  } else if (name === 'tipps') {
    const examId = exam.id;
    if (examId === 'alle') {
      text = `TIPPS & TOOLS – Alle Prüfungen\n${'='.repeat(60)}\n\n`;
      ['gg', 'km', 'it'].forEach(id => { text += renderTippsText(TIPPS[id], EXAMS[id].name); });
    } else {
      text = renderTippsText(TIPPS[examId] || {}, exam.name);
    }
    filename = `Tipps_${exam.short}.txt`;
  } else {
    return;
  }

  triggerDownload(text, filename);
}

function renderTippsText(data, name) {
  if (!data.sections) return '';
  let t = `TIPPS & TOOLS – ${name}\n${'='.repeat(60)}\n\n${data.intro || ''}\n\n`;
  data.sections.forEach(sec => {
    t += `\n${sec.icon} ${sec.title.toUpperCase()}\n${'-'.repeat(40)}\n`;
    if (sec.intro) t += `${sec.intro}\n\n`;
    sec.items.forEach(it => {
      t += `• ${it.name}${it.url ? ` (${it.url})` : ''}\n  ${it.desc}\n`;
    });
  });
  return t + '\n';
}

function triggerDownload(text, filename) {
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}

// ===== BILD-UPLOAD im Canvas =====
function emUploadImage(input) {
  if (!input.files || !input.files[0]) return;
  const file = input.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.getElementById('em-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      // Skaliere Bild um in Canvas zu passen, mittig platziert
      const scale = Math.min(canvas.width / img.width, canvas.height / img.height) * 0.9;
      const w = img.width * scale;
      const h = img.height * scale;
      const x = (canvas.width - w) / 2;
      const y = (canvas.height - h) / 2;
      ctx.drawImage(img, x, y, w, h);
      saveCurrentCanvas();
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
  input.value = '';
}

// ===== INIT =====
loadProgress();
loadHighlights();
