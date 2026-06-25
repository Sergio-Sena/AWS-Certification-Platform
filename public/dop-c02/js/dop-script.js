// DOP-C02 Script Principal
let currentSection = 'study';
let examState = { isActive: false, questions: [], currentQuestion: 0, answers: {}, timeRemaining: 180 * 60, timer: null };

function showSection(section) {
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
    document.getElementById(section).style.display = 'block';
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    currentSection = section;
}

function renderDomains() {
    const grid = document.getElementById('domains-grid');
    if (!window.dopStudyMaterial) return;
    grid.innerHTML = Object.entries(dopStudyMaterial).map(([key, d]) => `
        <div class="domain-card" onclick="showTopic('${key}')">
            <div class="domain-header"><span class="domain-weight">${d.weight}%</span></div>
            <h3>${d.title}</h3>
        </div>
    `).join('');
}

function showTopic(key) {
    const material = dopStudyMaterial[key];
    if (!material) return;
    const div = document.getElementById('topic-content');
    div.innerHTML = `<button class="close-topic" onclick="hideTopic()">&times;</button>
        <h3>${material.title} <span style="font-size:0.8rem;background:var(--dop-primary);color:white;padding:0.2rem 0.5rem;border-radius:4px;">${material.weight}%</span></h3>
        ${material.content}`;
    div.style.display = 'block';
    div.scrollIntoView({ behavior: 'smooth' });
}

function hideTopic() { document.getElementById('topic-content').style.display = 'none'; }

function startExam() {
    const questions = typeof selectDOPExamQuestions === 'function' ? selectDOPExamQuestions() : [];
    if (!questions.length) { alert('Questões não carregadas.'); return; }
    examState = { isActive: true, questions, currentQuestion: 0, answers: {}, timeRemaining: 180 * 60, timer: null };
    document.getElementById('exam-interface').style.display = 'block';
    document.querySelector('.simulator-header').style.display = 'none';
    startTimer(); showQuestion();
}

function practiceMode() {
    const all = window.dop225Questions || [];
    if (!all.length) { alert('Questões não carregadas.'); return; }
    examState = { isActive: true, questions: shuffleArray(all).slice(0, 10), currentQuestion: 0, answers: {}, timeRemaining: null, timer: null };
    document.getElementById('exam-interface').style.display = 'block';
    document.querySelector('.simulator-header').style.display = 'none';
    document.getElementById('timer').parentElement.style.display = 'none';
    showQuestion();
}

function startTimer() {
    if (!examState.timeRemaining) return;
    examState.timer = setInterval(() => {
        examState.timeRemaining--;
        const m = Math.floor(examState.timeRemaining / 60), s = examState.timeRemaining % 60;
        document.getElementById('timer').textContent = `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
        if (examState.timeRemaining <= 0) { clearInterval(examState.timer); finishExam(); }
    }, 1000);
}

function showQuestion() {
    const q = examState.questions[examState.currentQuestion];
    
    // Shuffle de opções para eliminar bias de posição
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
    document.getElementById('options-container').innerHTML = sm.map((origIdx, visIdx) => {
        const sel = examState.answers[q.id] === origIdx ? 'selected' : '';
        return `<div class="option ${sel}" onclick="selectOption(${origIdx})">${String.fromCharCode(65+visIdx)}. ${q.options[origIdx]}</div>`;
    }).join('');
    document.getElementById('prev-btn').disabled = examState.currentQuestion === 0;
    document.getElementById('next-btn').style.display = examState.currentQuestion === examState.questions.length - 1 ? 'none' : 'inline-block';
    document.getElementById('finish-btn').style.display = examState.currentQuestion === examState.questions.length - 1 ? 'inline-block' : 'none';
}

function selectOption(i) { examState.answers[examState.questions[examState.currentQuestion].id] = i; showQuestion(); }
function previousQuestion() { if (examState.currentQuestion > 0) { examState.currentQuestion--; showQuestion(); } }
function nextQuestion() { if (examState.currentQuestion < examState.questions.length - 1) { examState.currentQuestion++; showQuestion(); } }

function finishExam() {
    if (examState.timer) clearInterval(examState.timer);
    examState.isActive = false;
    let correct = 0;
    const byDomain = {};
    examState.questions.forEach(q => {
        if (!byDomain[q.domain]) byDomain[q.domain] = { correct: 0, total: 0 };
        byDomain[q.domain].total++;
        if (examState.answers[q.id] === q.correct[0]) { correct++; byDomain[q.domain].correct++; }
    });
    const pct = Math.round((correct / examState.questions.length) * 100);
    const passed = pct >= 80;
    document.getElementById('exam-interface').style.display = 'none';
    document.querySelector('.simulator-header').style.display = 'block';
    document.getElementById('timer').parentElement.style.display = 'block';

    const domainNames = { 'sdlc': 'SDLC Automation', 'config-iac': 'Config & IaC', 'resilient': 'Resilient Cloud', 'monitoring': 'Monitoring & Logging', 'incident': 'Incident Response', 'security': 'Security & Compliance' };
    document.getElementById('results-content').innerHTML = `
        <div class="result-card ${passed ? 'passed' : pct >= 75 ? 'borderline' : 'failed'}">
            <div class="result-score">${pct}%</div>
            <p>${correct}/${examState.questions.length} corretas | Meta: 80% | Oficial: 75%</p>
            <p>${passed ? '🎉 Pronto para o exame!' : pct >= 75 ? '👍 Passaria, mas busque 80%' : '📚 Continue praticando'}</p>
        </div>
        <h4>Por Domínio:</h4>
        ${Object.entries(byDomain).map(([d, data]) => {
            const p = Math.round((data.correct/data.total)*100);
            return `<div style="margin:0.5rem 0;"><span style="display:inline-block;width:180px;">${domainNames[d]||d}</span><span style="color:${p>=80?'#2563eb':'#e53e3e'};font-weight:bold;">${p}%</span> (${data.correct}/${data.total})</div>`;
        }).join('')}
        <button class="btn-primary" style="margin-top:1.5rem;" onclick="showSection('simulator')">Novo Simulado</button>
        <div id="detailed-review" style="margin-top:2rem;"></div>
    `;
    showSection('results');
    document.querySelectorAll('.nav-btn')[2].classList.add('active');
    renderDetailedReview();
}

// === REVISÃO DETALHADA PÓS-SIMULADO ===
function renderDetailedReview() {
    const container = document.getElementById('detailed-review');
    if (!container || !examState.questions.length) return;

    const wrongQuestions = [];
    const correctQuestions = [];

    examState.questions.forEach((q, idx) => {
        const userAnswer = examState.answers[q.id];
        const isCorrect = userAnswer === q.correct[0];
        const item = { question: q, userAnswer, index: idx + 1, isCorrect };
        if (isCorrect) correctQuestions.push(item); else wrongQuestions.push(item);
    });

    let html = `
        <div style="background:white;border-radius:12px;padding:2rem;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <h4>📋 Revisão Detalhada — ${examState.questions.length} questões</h4>
            <p style="margin-bottom:1rem;color:#666;">✅ ${correctQuestions.length} corretas | ❌ ${wrongQuestions.length} erradas</p>
            <div style="display:flex;gap:0.5rem;margin-bottom:1.5rem;flex-wrap:wrap;">
                <button class="btn-secondary" onclick="toggleReviewFilter('wrong')" style="font-size:0.85rem;padding:0.5rem 1rem;">❌ Erradas (${wrongQuestions.length})</button>
                <button class="btn-secondary" onclick="toggleReviewFilter('correct')" style="font-size:0.85rem;padding:0.5rem 1rem;">✅ Corretas (${correctQuestions.length})</button>
                <button class="btn-secondary" onclick="toggleReviewFilter('all')" style="font-size:0.85rem;padding:0.5rem 1rem;">📋 Todas</button>
            </div>
        </div>
    `;

    html += '<div id="review-wrong">' + (wrongQuestions.length === 0 ? '<p style="text-align:center;padding:2rem;color:#7c3aed;">🎉 Nenhuma errada!</p>' : wrongQuestions.map(renderReviewItem).join('')) + '</div>';
    html += '<div id="review-correct" style="display:none;">' + correctQuestions.map(renderReviewItem).join('') + '</div>';
    html += '<div id="review-all" style="display:none;">' + examState.questions.map((q, idx) => {
        const ua = examState.answers[q.id];
        return renderReviewItem({ question: q, userAnswer: ua, index: idx + 1, isCorrect: ua === q.correct[0] });
    }).join('') + '</div>';

    container.innerHTML = html;
}

function renderReviewItem(item) {
    const q = item.question;
    const correctIdx = q.correct[0];
    const userIdx = item.userAnswer;
    const domainNames = { 'sdlc': 'SDLC Automation', 'config-iac': 'Config & IaC', 'resilient': 'Resilient Cloud', 'monitoring': 'Monitoring & Logging', 'incident': 'Incident Response', 'security': 'Security & Compliance' };
    return `
        <div style="background:${item.isCorrect?'#f0fff4':'#fff5f5'};border-left:4px solid ${item.isCorrect?'#7c3aed':'#e53e3e'};border-radius:8px;padding:1.5rem;margin:1rem 0;">
            <div style="display:flex;justify-content:space-between;margin-bottom:0.5rem;">
                <strong>${item.isCorrect?'✅':'❌'} Questão ${item.index}</strong>
                <span style="color:#666;font-size:0.85rem;">${domainNames[q.domain]||q.domain}</span>
            </div>
            <p style="margin:0.5rem 0;font-weight:500;">${q.question}</p>
            <div style="margin:1rem 0;">
                ${q.options.map((opt, i) => {
                    let bg = 'transparent', border = '#ddd', icon = '';
                    if (i === correctIdx) { bg = '#e6ffed'; border = '#7c3aed'; icon = '✅'; }
                    else if (i === userIdx && !item.isCorrect) { bg = '#ffe6e6'; border = '#e53e3e'; icon = '❌'; }
                    return `<div style="background:${bg};border:1px solid ${border};border-radius:6px;padding:0.5rem 1rem;margin:0.3rem 0;font-size:0.9rem;">${icon} ${String.fromCharCode(65+i)}. ${opt}</div>`;
                }).join('')}
            </div>
            <div style="background:#f7fafc;border-radius:6px;padding:1rem;font-size:0.9rem;">
                <strong>💡 Explicação:</strong><br>${(q.explanation||'').replace(/\\n/g,'<br>').replace(/\n/g,'<br>')}
            </div>
        </div>
    `;
}

function toggleReviewFilter(filter) {
    const w = document.getElementById('review-wrong');
    const c = document.getElementById('review-correct');
    const a = document.getElementById('review-all');
    if (!w) return;
    w.style.display = filter === 'wrong' ? 'block' : 'none';
    c.style.display = filter === 'correct' ? 'block' : 'none';
    a.style.display = filter === 'all' ? 'block' : 'none';
    if (filter === 'all') { w.style.display = 'none'; c.style.display = 'none'; }
}

function shuffleArray(a) { const s=[...a]; for(let i=s.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[s[i],s[j]]=[s[j],s[i]];} return s; }

document.addEventListener('DOMContentLoaded', renderDomains);
