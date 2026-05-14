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
    document.getElementById('current-q').textContent = examState.currentQuestion + 1;
    document.getElementById('total-q').textContent = examState.questions.length;
    document.getElementById('question-text').innerHTML = `<strong>Questão ${examState.currentQuestion + 1}</strong><br><br>${q.question}`;
    document.getElementById('options-container').innerHTML = q.options.map((opt, i) => {
        const sel = examState.answers[q.id] === i ? 'selected' : '';
        return `<div class="option ${sel}" onclick="selectOption(${i})">${String.fromCharCode(65+i)}. ${opt}</div>`;
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
            return `<div style="margin:0.5rem 0;"><span style="display:inline-block;width:180px;">${domainNames[d]||d}</span><span>${p}%</span></div>`;
        }).join('')}
        <button class="btn-primary" style="margin-top:1.5rem;" onclick="showSection('simulator')">Novo Simulado</button>
    `;
    showSection('results');
    document.querySelectorAll('.nav-btn')[2].classList.add('active');
}

function shuffleArray(a) { const s=[...a]; for(let i=s.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[s[i],s[j]]=[s[j],s[i]];} return s; }

document.addEventListener('DOMContentLoaded', renderDomains);
