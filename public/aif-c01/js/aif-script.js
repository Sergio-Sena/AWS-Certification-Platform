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

    const allMaterial = { ...aifStudyMaterial, ...(window.aifServicesReference || {}), ...(window.aifAlgorithmsMetrics || {}) };

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
    const allMaterial = { ...aifStudyMaterial, ...(window.aifServicesReference || {}), ...(window.aifAlgorithmsMetrics || {}) };
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
    document.getElementById('current-q').textContent = examState.currentQuestion + 1;
    document.getElementById('total-q').textContent = examState.questions.length;
    document.getElementById('question-text').innerHTML = `<strong>Questão ${examState.currentQuestion + 1}</strong><br><br>${q.question}`;

    const container = document.getElementById('options-container');
    container.innerHTML = q.options.map((opt, i) => {
        const selected = examState.answers[q.id] === i ? 'selected' : '';
        return `<div class="option ${selected}" onclick="selectOption(${i})">${String.fromCharCode(65+i)}. ${opt}</div>`;
    }).join('');

    document.getElementById('prev-btn').disabled = examState.currentQuestion === 0;
    document.getElementById('next-btn').style.display = examState.currentQuestion === examState.questions.length - 1 ? 'none' : 'inline-block';
    document.getElementById('finish-btn').style.display = examState.currentQuestion === examState.questions.length - 1 ? 'inline-block' : 'none';
}

function selectOption(index) {
    examState.answers[examState.questions[examState.currentQuestion].id] = index;
    showQuestion();
}

function previousQuestion() { if (examState.currentQuestion > 0) { examState.currentQuestion--; showQuestion(); } }
function nextQuestion() { if (examState.currentQuestion < examState.questions.length - 1) { examState.currentQuestion++; showQuestion(); } }

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
    showSection('progress');
    // Trigger nav button
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.nav-btn')[2].classList.add('active');
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
