// AIF-C01 Script Principal — Método 80/20 integrado
let currentSection = 'study';
let examState = { isActive: false, questions: [], currentQuestion: 0, answers: {}, timeRemaining: 90 * 60, timer: null };

// === NAVEGAÇÃO ===
function showSection(section) {
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
    document.getElementById(section).style.display = 'block';
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    currentSection = section;
    if (section === 'progress') renderProgress();
}

// === MAPA 80/20 ===
function renderParetoMap() {
    const vitalDiv = document.getElementById('vital-topics');
    const compDiv = document.getElementById('complementary-topics');
    if (!window.aifParetoMap) return;

    vitalDiv.innerHTML = aifParetoMap.vital.map((t, i) => `
        <div class="pareto-card vital" onclick="showDomainByTopic(${i})">
            <div class="pareto-icon">🎯</div>
            <h4>${t.topic}</h4>
            <span class="pareto-weight">${t.weight}</span>
            ${getTopicProgress(t.topic)}
        </div>
    `).join('');

    compDiv.innerHTML = aifParetoMap.complementary.map(t => `
        <div class="pareto-card complementary">
            <div class="pareto-icon">📎</div>
            <h4>${t.topic}</h4>
        </div>
    `).join('');
}

function getTopicProgress(topic) {
    const progress = JSON.parse(localStorage.getItem('aif-progress') || '{}');
    const score = progress[topic] || 0;
    const cls = score >= 80 ? 'mastered' : score > 0 ? 'in-progress' : '';
    return score > 0 ? `<div class="topic-progress ${cls}">${score}%</div>` : '';
}

// === MATERIAL DE ESTUDO ===
function renderDomains() {
    const grid = document.getElementById('domains-grid');
    if (!window.aifStudyMaterial) return;

    const allMaterial = { ...aifStudyMaterial, ...(window.aifServicesReference || {}), ...(window.aifAlgorithmsMetrics || {}), ...(window.aifAwsPractical || {}) };

    grid.innerHTML = Object.entries(allMaterial).map(([key, domain]) => `
        <div class="domain-card ${domain.priority}" onclick="showTopic('${key}')">
            <div class="domain-header">
                ${domain.weight ? `<span class="domain-weight-badge">${domain.weight}%</span>` : '<span class="domain-weight-badge">REF</span>'}
                ${domain.priority === 'vital' ? '<span class="vital-badge">VITAL</span>' : ''}
            </div>
            <h3>${domain.title}</h3>
            ${domain.pareto ? `<p class="pareto-hint">${domain.pareto}</p>` : ''}
        </div>
    `).join('');
}

function showTopic(key) {
    const allMaterial = { ...aifStudyMaterial, ...(window.aifServicesReference || {}), ...(window.aifAlgorithmsMetrics || {}), ...(window.aifAwsPractical || {}) };
    const material = allMaterial[key];
    if (!material) return;
    const div = document.getElementById('topic-content');
    div.innerHTML = `
        <button class="close-topic" onclick="hideTopic()">&times;</button>
        <h3>${material.title} ${material.weight ? `<span class="weight-tag">${material.weight}% do exame</span>` : ''}</h3>
        ${material.content}
    `;
    div.style.display = 'block';
    div.scrollIntoView({ behavior: 'smooth' });
}

function hideTopic() {
    document.getElementById('topic-content').style.display = 'none';
}

function showDomainByTopic(index) {
    const domainKeys = Object.keys(aifStudyMaterial);
    const mapping = [0, 1, 1, 2, 3, 2]; // vital topics → domain index
    if (domainKeys[mapping[index]]) showTopic(domainKeys[mapping[index]]);
}

// === SIMULADO ===
function startExam() {
    const questions = typeof selectAIFExamQuestions === 'function' ? selectAIFExamQuestions() : [];
    if (!questions.length) { alert('Questões não carregadas. Recarregue a página.'); return; }
    examState = { isActive: true, questions, currentQuestion: 0, answers: {}, timeRemaining: 90 * 60, timer: null };
    document.getElementById('exam-interface').style.display = 'block';
    document.querySelector('.simulator-header').style.display = 'none';
    startTimer();
    showQuestion();
}

function practiceMode() {
    const all = window.aif195Questions || [];
    if (!all.length) { alert('Questões não carregadas.'); return; }
    const questions = shuffleArray(all).slice(0, 10);
    examState = { isActive: true, questions, currentQuestion: 0, answers: {}, timeRemaining: null, timer: null };
    document.getElementById('exam-interface').style.display = 'block';
    document.querySelector('.simulator-header').style.display = 'none';
    document.getElementById('timer').parentElement.style.display = 'none';
    showQuestion();
}

function startTimer() {
    if (!examState.timeRemaining) return;
    examState.timer = setInterval(() => {
        examState.timeRemaining--;
        const m = Math.floor(examState.timeRemaining / 60);
        const s = examState.timeRemaining % 60;
        document.getElementById('timer').textContent = `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
        if (examState.timeRemaining <= 0) { clearInterval(examState.timer); finishExam(); }
    }, 1000);
}

function showQuestion() {
    const q = examState.questions[examState.currentQuestion];
    
    // Shuffle de opções para eliminar bias de posição/tamanho
    if (!q._shuffleMap) {
        const indices = q.options.map((_, i) => i);
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        q._shuffleMap = indices;
    }
    const sm = q._shuffleMap;
    
    document.getElementById('current-q').textContent = examState.currentQuestion + 1;
    document.getElementById('total-q').textContent = examState.questions.length;
    document.getElementById('question-text').innerHTML = `<strong>Questão ${examState.currentQuestion + 1}</strong><br><br>${q.question}`;

    const container = document.getElementById('options-container');
    container.innerHTML = sm.map((origIdx, visIdx) => {
        const selected = examState.answers[q.id] === origIdx ? 'selected' : '';
        return `<div class="option ${selected}" onclick="selectOption(${origIdx})">${String.fromCharCode(65+visIdx)}. ${q.options[origIdx]}</div>`;
    }).join('');

    document.getElementById('prev-btn').disabled = examState.currentQuestion === 0;
    document.getElementById('next-btn').style.display = examState.currentQuestion === examState.questions.length - 1 ? 'none' : 'inline-block';
    document.getElementById('finish-btn').style.display = examState.currentQuestion === examState.questions.length - 1 ? 'inline-block' : 'none';

    // Mostrar campo de justificativa se já tem resposta
    if (examState.answers[q.id] !== undefined) {
        setTimeout(() => showJustificationField(), 0);
    }
}

function selectOption(index) {
    const q = examState.questions[examState.currentQuestion];
    examState.answers[q.id] = index;
    showQuestion();
    // Mostrar campo de justificativa após selecionar
    showJustificationField();
}

function showJustificationField() {
    const q = examState.questions[examState.currentQuestion];
    const existing = document.getElementById('justification-area');
    if (existing) return; // Já visível
    if (examState.answers[q.id] === undefined) return; // Nenhuma opção selecionada

    const container = document.getElementById('options-container');
    const justDiv = document.createElement('div');
    justDiv.id = 'justification-area';
    justDiv.style.cssText = 'margin-top:1.5rem;padding:1rem;background:#f8f9fa;border-radius:8px;border:1px solid #e0e0e0;';
    justDiv.innerHTML = `
        <label style="font-weight:600;font-size:0.9rem;color:#333;display:block;margin-bottom:0.5rem;">💭 Por que você escolheu essa resposta? <span style="color:#999;font-weight:400;">(opcional)</span></label>
        <textarea id="justification-input" rows="2" placeholder="Ex: Escolhi porque o serviço X atende o requisito de baixa latência..." 
            style="width:100%;border:1px solid #ddd;border-radius:6px;padding:0.75rem;font-size:0.9rem;font-family:inherit;resize:vertical;"
            oninput="saveJustification()"></textarea>
    `;
    container.parentElement.appendChild(justDiv);

    // Restaurar justificativa se já existe
    if (!examState.justifications) examState.justifications = {};
    const saved = examState.justifications[q.id];
    if (saved) document.getElementById('justification-input').value = saved;
}

function saveJustification() {
    const q = examState.questions[examState.currentQuestion];
    const input = document.getElementById('justification-input');
    if (!input) return;
    if (!examState.justifications) examState.justifications = {};
    examState.justifications[q.id] = input.value;
}

function previousQuestion() { if (examState.currentQuestion > 0) { examState.currentQuestion--; removeJustificationField(); showQuestion(); } }
function nextQuestion() { if (examState.currentQuestion < examState.questions.length - 1) { examState.currentQuestion++; removeJustificationField(); showQuestion(); } }

function removeJustificationField() {
    const el = document.getElementById('justification-area');
    if (el) el.remove();
}

function finishExam() {
    if (examState.timer) clearInterval(examState.timer);
    examState.isActive = false;
    const results = calculateResults();
    saveProgress(results);
    showResults(results);
}

function calculateResults() {
    let correct = 0;
    const byDomain = {};

    examState.questions.forEach(q => {
        if (!byDomain[q.domain]) byDomain[q.domain] = { correct: 0, total: 0 };
        byDomain[q.domain].total++;
        const isCorrect = examState.answers[q.id] === q.correct[0];
        if (isCorrect) { correct++; byDomain[q.domain].correct++; }
    });

    const percentage = Math.round((correct / examState.questions.length) * 100);
    return { correct, total: examState.questions.length, percentage, byDomain };
}

// === PROGRESSO E FEEDBACK 80/20 ===
function saveProgress(results) {
    const history = JSON.parse(localStorage.getItem('aif-history') || '[]');
    history.push({ date: new Date().toISOString(), ...results });
    localStorage.setItem('aif-history', JSON.stringify(history.slice(-20)));

    // Salvar progresso por domínio
    const progress = JSON.parse(localStorage.getItem('aif-progress') || '{}');
    Object.entries(results.byDomain).forEach(([domain, data]) => {
        progress[domain] = Math.round((data.correct / data.total) * 100);
    });
    localStorage.setItem('aif-progress', JSON.stringify(progress));
}

function renderProgress() {
    const history = JSON.parse(localStorage.getItem('aif-history') || '[]');
    const progress = JSON.parse(localStorage.getItem('aif-progress') || '{}');
    const overview = document.getElementById('progress-overview');
    const feedback = document.getElementById('pareto-feedback');

    if (!history.length) {
        overview.innerHTML = '<p>Complete um simulado para ver seu progresso aqui.</p>';
        feedback.innerHTML = '';
        return;
    }

    const last = history[history.length - 1];
    const domainNames = {
        'ai-ml': 'Fundamentals AI/ML',
        'generative-ai': 'Generative AI',
        'foundation-models': 'Foundation Models',
        'responsible-ai': 'Responsible AI',
        'security-ai': 'Security & Compliance'
    };

    overview.innerHTML = `
        <div class="result-card ${last.percentage >= 80 ? 'passed' : last.percentage >= 70 ? 'borderline' : 'failed'}">
            <div class="result-score">${last.percentage}%</div>
            <p>${last.correct}/${last.total} corretas | Meta: 80% | Oficial: 70%</p>
            <p>${last.percentage >= 80 ? '🎉 Pronto para o exame!' : last.percentage >= 70 ? '👍 Passaria, mas busque 80%' : '📚 Continue praticando'}</p>
        </div>
        <h4>Performance por Domínio:</h4>
        <div class="domain-bars">
            ${Object.entries(last.byDomain).map(([d, data]) => {
                const pct = Math.round((data.correct / data.total) * 100);
                const cls = pct >= 80 ? 'bar-green' : pct >= 60 ? 'bar-yellow' : 'bar-red';
                return `<div class="domain-bar-item">
                    <span>${domainNames[d] || d}</span>
                    <div class="bar-bg"><div class="bar-fill ${cls}" style="width:${pct}%"></div></div>
                    <span>${pct}%</span>
                </div>`;
            }).join('')}
        </div>
    `;

    // Feedback 80/20: identificar próximos 20% a focar
    const weakDomains = Object.entries(last.byDomain)
        .map(([d, data]) => ({ domain: d, name: domainNames[d] || d, pct: Math.round((data.correct / data.total) * 100) }))
        .filter(d => d.pct < 80)
        .sort((a, b) => a.pct - b.pct);

    if (weakDomains.length) {
        feedback.innerHTML = `
            <div class="pareto-feedback-card">
                <h4>🎯 Método 80/20 — Seus próximos 20%:</h4>
                <p>Foque nestes domínios para maior impacto:</p>
                <ol>
                    ${weakDomains.slice(0, 3).map(d => `<li><strong>${d.name}</strong> (${d.pct}%) — ${getStudyRecommendation(d.domain)}</li>`).join('')}
                </ol>
            </div>
        `;
    } else {
        feedback.innerHTML = '<div class="pareto-feedback-card"><h4>🎉 Todos os domínios acima de 80%! Você está pronto.</h4></div>';
    }
}

function getStudyRecommendation(domain) {
    const recs = {
        'ai-ml': 'Revise tipos de aprendizado e diferença treinamento vs inferência',
        'generative-ai': 'Foque em prompt engineering e parâmetros (temperatura, top-p)',
        'foundation-models': 'Domine RAG e Bedrock Knowledge Bases/Agents',
        'responsible-ai': 'Estude tipos de bias e Bedrock Guardrails',
        'security-ai': 'Revise IAM para Bedrock e data privacy'
    };
    return recs[domain] || 'Revise o material do domínio';
}

function showResults(results) {
    document.getElementById('exam-interface').style.display = 'none';
    document.querySelector('.simulator-header').style.display = 'block';
    document.getElementById('timer').parentElement.style.display = 'block';

    // Renderizar revisão detalhada diretamente na seção progresso
    renderProgress();
    renderDetailedReview();

    // Mostrar seção progresso
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
    document.getElementById('progress').style.display = 'block';
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.nav-btn')[2].classList.add('active');
}

// === REVISÃO DETALHADA PÓS-SIMULADO ===
function renderDetailedReview() {
    const container = document.getElementById('pareto-feedback');
    if (!examState.questions.length) return;

    const domainNames = {
        'ai-ml': 'Fundamentals AI/ML',
        'generative-ai': 'Generative AI',
        'foundation-models': 'Foundation Models',
        'responsible-ai': 'Responsible AI',
        'security-ai': 'Security & Compliance'
    };

    const domainMaterialMap = {
        'ai-ml': 'ai-ml-fundamentals',
        'generative-ai': 'generative-ai',
        'foundation-models': 'foundation-models',
        'responsible-ai': 'responsible-ai',
        'security-ai': 'security-ai'
    };

    // Separar acertos e erros
    const wrongQuestions = [];
    const correctQuestions = [];

    examState.questions.forEach((q, idx) => {
        const userAnswer = examState.answers[q.id];
        const isCorrect = userAnswer === q.correct[0];
        const item = { question: q, userAnswer, index: idx + 1, isCorrect };
        if (isCorrect) correctQuestions.push(item);
        else wrongQuestions.push(item);
    });

    let html = `
        <div class="pareto-feedback-card" style="margin-top:2rem;">
            <h4>📋 Revisão Detalhada — ${examState.questions.length} questões</h4>
            <p style="margin-bottom:1rem; color: var(--aif-text-muted);">
                ✅ ${correctQuestions.length} corretas | ❌ ${wrongQuestions.length} erradas
            </p>
            <div style="display:flex; gap:0.5rem; margin-bottom:1.5rem; flex-wrap:wrap;">
                <button class="btn-secondary" onclick="toggleReviewFilter('wrong')" id="btn-filter-wrong" style="font-size:0.85rem; padding:0.5rem 1rem;">❌ Ver Erradas (${wrongQuestions.length})</button>
                <button class="btn-secondary" onclick="toggleReviewFilter('correct')" id="btn-filter-correct" style="font-size:0.85rem; padding:0.5rem 1rem;">✅ Ver Corretas (${correctQuestions.length})</button>
                <button class="btn-secondary" onclick="toggleReviewFilter('all')" id="btn-filter-all" style="font-size:0.85rem; padding:0.5rem 1rem;">📋 Ver Todas</button>
            </div>
        </div>
    `;

    // Renderizar questões erradas (visíveis por default)
    html += '<div id="review-wrong" class="review-section">';
    if (wrongQuestions.length === 0) {
        html += '<p style="text-align:center; padding:2rem; color: var(--aif-success);">🎉 Parabéns! Nenhuma questão errada!</p>';
    } else {
        html += wrongQuestions.map(item => renderReviewQuestion(item, domainNames, domainMaterialMap)).join('');
    }
    html += '</div>';

    // Renderizar questões corretas (ocultas por default)
    html += '<div id="review-correct" class="review-section" style="display:none;">';
    html += correctQuestions.map(item => renderReviewQuestion(item, domainNames, domainMaterialMap)).join('');
    html += '</div>';

    // Renderizar todas (ocultas por default)
    html += '<div id="review-all" class="review-section" style="display:none;">';
    const allItems = examState.questions.map((q, idx) => {
        const userAnswer = examState.answers[q.id];
        return { question: q, userAnswer, index: idx + 1, isCorrect: userAnswer === q.correct[0] };
    });
    html += allItems.map(item => renderReviewQuestion(item, domainNames, domainMaterialMap)).join('');
    html += '</div>';

    container.innerHTML += html;
}

function renderReviewQuestion(item, domainNames, domainMaterialMap) {
    const q = item.question;
    const correctIdx = q.correct[0];
    const userIdx = item.userAnswer;
    const domainName = domainNames[q.domain] || q.domain;
    const materialKey = domainMaterialMap[q.domain] || '';
    // Usar ordem original na revisão para clareza
    return `
        <div class="review-item ${item.isCorrect ? 'review-correct-item' : 'review-wrong-item'}">
            <div class="review-header">
                <span class="review-number">${item.isCorrect ? '✅' : '❌'} Questão ${item.index}</span>
                <span class="review-domain" ${materialKey ? `onclick="showTopic('${materialKey}')" style="cursor:pointer;"` : ''}>${domainName} ${!item.isCorrect ? '→ Revisar' : ''}</span>
            </div>
            <div class="review-question">${q.question}</div>
            <div class="review-options">
                ${q.options.map((opt, i) => {
                    let cls = 'review-opt';
                    let icon = '';
                    if (i === correctIdx) { cls += ' review-opt-correct'; icon = '✅'; }
                    else if (i === userIdx && !item.isCorrect) { cls += ' review-opt-wrong'; icon = '❌'; }
                    return `<div class="${cls}">${icon} ${String.fromCharCode(65+i)}. ${opt}</div>`;
                }).join('')}
            </div>
            <div class="review-explanation">
                <strong>💡 Explicação:</strong><br>${q.explanation.replace(/\n/g, '<br>')}
            </div>
            ${examState.justifications && examState.justifications[q.id] ? `<div class="review-justification" style="background:#fff8e1;border-left:3px solid #f59e0b;padding:0.75rem 1rem;margin-top:0.5rem;border-radius:4px;font-size:0.85rem;"><strong>💭 Sua justificativa:</strong> ${examState.justifications[q.id]}</div>` : ''}
        </div>
    `;
}

function toggleReviewFilter(filter) {
    document.getElementById('review-wrong').style.display = filter === 'wrong' || filter === 'all' ? 'block' : 'none';
    document.getElementById('review-correct').style.display = filter === 'correct' ? 'block' : 'none';
    document.getElementById('review-all').style.display = filter === 'all' ? 'block' : 'none';

    if (filter === 'all') {
        document.getElementById('review-wrong').style.display = 'none';
        document.getElementById('review-correct').style.display = 'none';
    }

    // Visual feedback nos botões
    ['wrong','correct','all'].forEach(f => {
        const btn = document.getElementById(`btn-filter-${f}`);
        if (btn) btn.style.opacity = f === filter ? '1' : '0.5';
    });
}

// === UTILS ===
function shuffleArray(array) {
    const s = [...array];
    for (let i = s.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [s[i], s[j]] = [s[j], s[i]]; }
    return s;
}

// === INIT ===
document.addEventListener('DOMContentLoaded', function() {
    renderParetoMap();
    renderDomains();
    console.log('AIF-C01 loaded with 80/20 method');
});
