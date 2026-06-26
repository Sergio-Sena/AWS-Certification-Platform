// CLF-C02 Script Principal
let currentSection = 'study';
let currentTopic = null;
let examState = {
    isActive: false,
    questions: [],
    currentQuestion: 0,
    answers: {},
    startTime: null,
    timeRemaining: 90 * 60, // 90 minutos para CLF-C02
    timer: null
};

// Avaliação Inicial
let assessmentState = {
    currentQuestion: 0,
    answers: {},
    isActive: false,
    completed: false
};

// Navegação entre seções
function showSection(section) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    document.getElementById(section).classList.add('active');
    
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    currentSection = section;
}

// Material de Estudo
function showTopic(topic) {
    const topicContent = document.getElementById('topic-content');
    const material = clfStudyMaterial[topic];
    
    if (material) {
        topicContent.innerHTML = `
            <button class="close-topic" onclick="hideTopic()" aria-label="Fechar">&times;</button>
            <h3>${material.title}</h3>
            ${material.content}
        `;
        topicContent.style.display = 'block';
        currentTopic = topic;
    }
}

function hideTopic() {
    document.getElementById('topic-content').style.display = 'none';
    currentTopic = null;
}

// Sistema de Simulado
function startExam() {
    // Verificar se as questões estão carregadas
    const availableQuestions = window.clf200Questions || [];
    
    if (availableQuestions.length < 65) {
        showNotification('⚠️ Carregando questões... Aguarde um momento.', 'warning');
        setTimeout(() => {
            if ((window.clf200Questions || []).length >= 65) {
                startExam();
            } else {
                showNotification('❌ Erro ao carregar questões. Recarregue a página.', 'error');
            }
        }, 2000);
        return;
    }
    
    // Usar função de seleção inteligente se disponível
    let questions;
    if (typeof selectCLFExamQuestions === 'function') {
        questions = selectCLFExamQuestions();
    } else {
        questions = shuffleArray(availableQuestions).slice(0, 65);
    }
    
    if (!questions || questions.length < 65) {
        showNotification('❌ Questões insuficientes para simulado completo.', 'error');
        return;
    }
    
    examState.questions = questions;
    examState.currentQuestion = 0;
    examState.answers = {};
    examState.startTime = new Date();
    examState.timeRemaining = 90 * 60; // 90 minutos
    examState.isActive = true;
    
    document.getElementById('exam-interface').style.display = 'block';
    document.querySelector('.simulator-header').style.display = 'none';
    
    startTimer();
    showQuestion();
}

function practiceMode() {
    const availableQuestions = window.clf200Questions || [];
    
    if (availableQuestions.length < 10) {
        showNotification('⚠️ Carregando questões para modo prática...', 'warning');
        setTimeout(() => {
            if ((window.clf200Questions || []).length >= 10) {
                practiceMode();
            } else {
                showNotification('❌ Questões insuficientes para modo prática.', 'error');
            }
        }, 1500);
        return;
    }
    
    examState.questions = shuffleArray(availableQuestions).slice(0, 10);
    examState.currentQuestion = 0;
    examState.answers = {};
    examState.startTime = new Date();
    examState.timeRemaining = null; // Sem limite de tempo
    examState.isActive = true;
    
    document.getElementById('exam-interface').style.display = 'block';
    document.querySelector('.simulator-header').style.display = 'none';
    document.getElementById('timer').parentElement.style.display = 'none';
    
    showQuestion();
}

function startTimer() {
    if (examState.timeRemaining === null) return;
    
    examState.timer = setInterval(() => {
        examState.timeRemaining--;
        updateTimerDisplay();
        
        if (examState.timeRemaining <= 0) {
            clearInterval(examState.timer);
            finishExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(examState.timeRemaining / 60);
    const seconds = examState.timeRemaining % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function showQuestion() {
    const question = examState.questions[examState.currentQuestion];
    const isMultipleChoice = question.correct.length > 1;
    
    // Shuffle de opções para eliminar bias de posição/tamanho
    if (!question._shuffleMap) {
        const indices = question.options.map((_, i) => i);
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        question._shuffleMap = indices; // mapa: posição visual → índice original
    }
    const shuffleMap = question._shuffleMap;
    
    document.getElementById('current-q').textContent = examState.currentQuestion + 1;
    document.getElementById('total-q').textContent = examState.questions.length;
    
    document.getElementById('question-text').innerHTML = `
        <strong>Questão ${examState.currentQuestion + 1}</strong><br><br>
        ${question.question}
        ${isMultipleChoice ? '<br><br><em>Selecione todas as opções corretas:</em>' : ''}
    `;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    shuffleMap.forEach((originalIdx, visualIdx) => {
        const option = question.options[originalIdx];
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.onclick = () => selectOption(originalIdx, isMultipleChoice);
        
        const inputType = isMultipleChoice ? 'checkbox' : 'radio';
        const inputName = isMultipleChoice ? `q${question.id}_${visualIdx}` : `q${question.id}`;
        
        optionDiv.innerHTML = `
            <input type="${inputType}" name="${inputName}" id="opt_${visualIdx}" ${isSelected(originalIdx) ? 'checked' : ''}>
            <label for="opt_${visualIdx}">${String.fromCharCode(65 + visualIdx)}. ${option}</label>
        `;
        
        if (isSelected(originalIdx)) {
            optionDiv.classList.add('selected');
        }
        
        optionsContainer.appendChild(optionDiv);
    });
    
    document.getElementById('prev-btn').disabled = examState.currentQuestion === 0;
    document.getElementById('next-btn').style.display = 
        examState.currentQuestion === examState.questions.length - 1 ? 'none' : 'inline-block';
    document.getElementById('finish-btn').style.display = 
        examState.currentQuestion === examState.questions.length - 1 ? 'inline-block' : 'none';
}

function isSelected(optionIndex) {
    const questionId = examState.questions[examState.currentQuestion].id;
    const answer = examState.answers[questionId];
    
    if (!answer) return false;
    
    return Array.isArray(answer) ? answer.includes(optionIndex) : answer === optionIndex;
}

function selectOption(optionIndex, isMultipleChoice) {
    const questionId = examState.questions[examState.currentQuestion].id;
    
    if (isMultipleChoice) {
        if (!examState.answers[questionId]) {
            examState.answers[questionId] = [];
        }
        const answerArray = examState.answers[questionId];
        const index = answerArray.indexOf(optionIndex);
        if (index > -1) { answerArray.splice(index, 1); } else { answerArray.push(optionIndex); }
    } else {
        examState.answers[questionId] = optionIndex;
    }
    
    updateOptionVisuals();
    showJustificationField();
}

function showJustificationField() {
    const q = examState.questions[examState.currentQuestion];
    if (document.getElementById('justification-area')) return;
    if (examState.answers[q.id] === undefined) return;

    const container = document.getElementById('options-container').parentElement;
    const justDiv = document.createElement('div');
    justDiv.id = 'justification-area';
    justDiv.style.cssText = 'margin-top:1.5rem;padding:1rem;background:#f8f9fa;border-radius:8px;border:1px solid #e0e0e0;';
    justDiv.innerHTML = `
        <label style="font-weight:600;font-size:0.9rem;color:#333;display:block;margin-bottom:0.5rem;">💭 Por que você escolheu essa resposta? <span style="color:#999;font-weight:400;">(opcional)</span></label>
        <textarea id="justification-input" rows="2" placeholder="Ex: Escolhi porque atende o requisito de..." 
            style="width:100%;border:1px solid #ddd;border-radius:6px;padding:0.75rem;font-size:0.9rem;font-family:inherit;resize:vertical;"
            oninput="saveJustification()"></textarea>
    `;
    container.appendChild(justDiv);

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

function removeJustificationField() {
    const el = document.getElementById('justification-area');
    if (el) el.remove();
}

function updateOptionVisuals() {
    const options = document.querySelectorAll('.option');
    const question = examState.questions[examState.currentQuestion];
    const answer = examState.answers[question.id];
    const shuffleMap = question._shuffleMap || question.options.map((_, i) => i);
    
    options.forEach((option, visualIdx) => {
        const originalIdx = shuffleMap[visualIdx];
        const input = option.querySelector('input');
        const selected = Array.isArray(answer) ? 
            answer.includes(originalIdx) : answer === originalIdx;
        
        input.checked = selected;
        option.classList.toggle('selected', selected);
    });
}

function previousQuestion() {
    if (examState.currentQuestion > 0) {
        examState.currentQuestion--;
        removeJustificationField();
        showQuestion();
    }
}

function nextQuestion() {
    if (examState.currentQuestion < examState.questions.length - 1) {
        examState.currentQuestion++;
        removeJustificationField();
        showQuestion();
    }
}

function finishExam() {
    if (examState.timer) {
        clearInterval(examState.timer);
    }
    
    examState.isActive = false;
    
    const results = calculateResults();
    showResults(results);
    showSection('results');
    
    document.getElementById('exam-interface').style.display = 'none';
    document.querySelector('.simulator-header').style.display = 'block';
    document.getElementById('timer').parentElement.style.display = 'block';
}

function calculateResults() {
    let correctAnswers = 0;
    let totalQuestions = examState.questions.length;
    let resultsByTopic = {};

    examState.questions.forEach(question => {
        const userAnswer = examState.answers[question.id];
        const correctAnswer = question.correct;

        if (!resultsByTopic[question.topic]) {
            resultsByTopic[question.topic] = { correct: 0, total: 0 };
        }
        resultsByTopic[question.topic].total++;

        let isCorrect = false;
        if (correctAnswer.length > 1) {
            if (Array.isArray(userAnswer) && userAnswer.length === correctAnswer.length) {
                isCorrect = correctAnswer.every(ans => userAnswer.includes(ans)) && 
                           userAnswer.every(ans => correctAnswer.includes(ans));
            }
        } else {
            isCorrect = userAnswer === correctAnswer[0];
        }

        if (isCorrect) {
            correctAnswers++;
            resultsByTopic[question.topic].correct++;
        }
    });

    const percentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
    const officialScore = 70; // CLF-C02 passing score
    const passed = percentage >= 80; // Nossa meta é 80%

    let motivationalMessage;
    if (percentage >= 80) {
        motivationalMessage = "🎉 Excelente! Você está pronto para o exame oficial. Sua preparação está sólida!";
    } else if (percentage >= 70) {
        motivationalMessage = "👍 Bom trabalho! Você passaria no exame oficial, mas recomendamos mais prática para atingir nossa meta de 80%.";
    } else {
        motivationalMessage = "📚 Continue estudando! Foque nos tópicos com menor performance e pratique mais simulados.";
    }

    return {
        correctAnswers,
        totalQuestions,
        percentage,
        officialScore,
        passed,
        resultsByTopic,
        motivationalMessage
    };
}

function showResults(results) {
    const resultsContent = document.getElementById('results-content');
    const statusText = results.passed ? '✅ APROVADO!' : '❌ REPROVADO';
    
    resultsContent.innerHTML = `
        <div class="result-card">
            <div class="result-score">${results.percentage}%</div>
            <div class="result-status">${statusText}</div>
            <p>${results.correctAnswers} de ${results.totalQuestions} questões corretas</p>
            <p><strong>Nota oficial AWS: ${results.officialScore}%</strong></p>
            <div style="background: #e8f4fd; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                <p style="color: #0c5460; margin: 0;">${results.motivationalMessage}</p>
            </div>
        </div>
        <div style="margin-top: 2rem; text-align: center;">
            <button class="btn-primary" onclick="startNewExam()">Novo Simulado</button>
        </div>
        <div id="detailed-review" style="margin-top:2rem;"></div>
    `;
    renderDetailedReview();
}

// === REVISÃO DETALHADA PÓS-SIMULADO ===
function renderDetailedReview() {
    const container = document.getElementById('detailed-review');
    if (!examState.questions.length) return;

    const wrongQuestions = [];
    const correctQuestions = [];

    examState.questions.forEach((q, idx) => {
        const userAnswer = examState.answers[q.id];
        let isCorrect = false;
        if (q.correct.length > 1) {
            isCorrect = Array.isArray(userAnswer) && q.correct.length === userAnswer.length &&
                q.correct.every(a => userAnswer.includes(a));
        } else {
            isCorrect = userAnswer === q.correct[0];
        }
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

    html += '<div id="review-wrong">' + (wrongQuestions.length === 0 ? '<p style="text-align:center;padding:2rem;color:#00A651;">🎉 Nenhuma errada!</p>' : wrongQuestions.map(renderReviewItem).join('')) + '</div>';
    html += '<div id="review-correct" style="display:none;">' + correctQuestions.map(renderReviewItem).join('') + '</div>';
    html += '<div id="review-all" style="display:none;">' + examState.questions.map((q, idx) => {
        const ua = examState.answers[q.id];
        let ic = q.correct.length > 1 ? (Array.isArray(ua) && q.correct.every(a => ua.includes(a))) : ua === q.correct[0];
        return renderReviewItem({ question: q, userAnswer: ua, index: idx + 1, isCorrect: ic });
    }).join('') + '</div>';

    container.innerHTML = html;
}

function renderReviewItem(item) {
    const q = item.question;
    const correctIdx = q.correct[0];
    const userIdx = item.userAnswer;
    return `
        <div style="background:${item.isCorrect?'#f0fff4':'#fff5f5'};border-left:4px solid ${item.isCorrect?'#00A651':'#e53e3e'};border-radius:8px;padding:1.5rem;margin:1rem 0;">
            <div style="display:flex;justify-content:space-between;margin-bottom:0.5rem;">
                <strong>${item.isCorrect?'✅':'❌'} Questão ${item.index}</strong>
                <span style="color:#666;font-size:0.85rem;">${q.domain || q.topic}</span>
            </div>
            <p style="margin:0.5rem 0;font-weight:500;">${q.question}</p>
            <div style="margin:1rem 0;">
                ${q.options.map((opt, i) => {
                    let bg = 'transparent', border = '#ddd', icon = '';
                    if (i === correctIdx) { bg = '#e6ffed'; border = '#00A651'; icon = '✅'; }
                    else if (i === userIdx && !item.isCorrect) { bg = '#ffe6e6'; border = '#e53e3e'; icon = '❌'; }
                    return `<div style="background:${bg};border:1px solid ${border};border-radius:6px;padding:0.5rem 1rem;margin:0.3rem 0;font-size:0.9rem;">${icon} ${String.fromCharCode(65+i)}. ${opt}</div>`;
                }).join('')}
            </div>
            <div style="background:#f7fafc;border-radius:6px;padding:1rem;font-size:0.9rem;">
                <strong>💡 Explicação:</strong><br>${(q.explanation||'').replace(/\n/g,'<br>')}
            </div>
            ${examState.justifications && examState.justifications[q.id] ? `<div style="background:#fff8e1;border-left:3px solid #f59e0b;padding:0.75rem 1rem;margin-top:0.5rem;border-radius:4px;font-size:0.85rem;"><strong>💭 Sua justificativa:</strong> ${examState.justifications[q.id]}</div>` : ''}
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

function startNewExam() {
    examState = {
        isActive: false,
        questions: [],
        currentQuestion: 0,
        answers: {},
        startTime: null,
        timeRemaining: 90 * 60,
        timer: null
    };
    
    showSection('simulator');
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Avaliação Inicial
function startAssessment() {
    document.getElementById('assessment-intro').style.display = 'none';
    document.getElementById('assessment-quiz').style.display = 'block';
    assessmentState.currentQuestion = 0;
    assessmentState.answers = {};
    assessmentState.isActive = true;
    showAssessmentQuestion();
}

function skipAssessment() {
    document.getElementById('assessment-intro').style.display = 'none';
    // Material já está visível, apenas scroll para ele
    document.getElementById('study-material').scrollIntoView({ behavior: 'smooth' });
}

function showAssessmentQuestion() {
    const question = clfInitialAssessment[assessmentState.currentQuestion];
    document.getElementById('assessment-current').textContent = assessmentState.currentQuestion + 1;
    
    // Atualizar barra de progresso
    const progress = ((assessmentState.currentQuestion + 1) / clfInitialAssessment.length) * 100;
    document.getElementById('assessment-progress-bar').style.width = progress + '%';
    
    document.getElementById('assessment-question').innerHTML = `<h4>${question.question}</h4>`;
    
    const optionsContainer = document.getElementById('assessment-options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.onclick = () => selectAssessmentOption(index);
        optionDiv.innerHTML = `${String.fromCharCode(65 + index)}. ${option}`;
        optionsContainer.appendChild(optionDiv);
    });
    
    document.getElementById('assessment-next').disabled = true;
}

function selectAssessmentOption(optionIndex) {
    const questionId = clfInitialAssessment[assessmentState.currentQuestion].id;
    assessmentState.answers[questionId] = optionIndex;
    
    document.querySelectorAll('#assessment-options .option').forEach((opt, idx) => {
        opt.classList.toggle('selected', idx === optionIndex);
    });
    
    document.getElementById('assessment-next').disabled = false;
}

function nextAssessmentQuestion() {
    if (assessmentState.currentQuestion < clfInitialAssessment.length - 1) {
        assessmentState.currentQuestion++;
        showAssessmentQuestion();
    } else {
        finishAssessment();
    }
}

function finishAssessment() {
    const results = assessCLFLevel(assessmentState.answers);
    showAssessmentResults(results);
}

function showAssessmentResults(results) {
    document.getElementById('assessment-quiz').style.display = 'none';
    
    const resultDiv = document.getElementById('assessment-results');
    resultDiv.style.display = 'block';
    
    resultDiv.innerHTML = `
        <div class="assessment-result-card">
            <h3>🎯 Resultado da Avaliação</h3>
            <div class="result-score">${results.percentage}%</div>
            <div class="result-level">Nível: <strong>${results.level}</strong></div>
            <p>${results.score} de ${results.total} questões corretas</p>
            
            <h4>📚 Plano de Estudos Personalizado:</h4>
            <ul>
                ${results.recommendations.map(rec => `<li>${rec}</li>`).join('')}
            </ul>
            
            <div style="text-align: center; margin-top: 2rem;">
                <button class="btn-primary" onclick="proceedToStudy()">Continuar para Material de Estudo</button>
            </div>
        </div>
    `;
}

function proceedToStudy() {
    document.getElementById('assessment-results').style.display = 'none';
    // Material já está visível, apenas scroll para ele
    document.getElementById('study-material').scrollIntoView({ behavior: 'smooth' });
    assessmentState.completed = true;
}
// Sistema de Notificações
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" aria-label="Fechar">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove após 5 segundos
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Validação de Performance
function validatePerformance() {
    const startTime = performance.now();
    
    // Verificar se questões estão carregadas
    const questionsLoaded = window.clf200Questions && window.clf200Questions.length >= 200;
    const materialLoaded = window.clfStudyMaterial && Object.keys(window.clfStudyMaterial).length >= 4;
    
    const loadTime = performance.now() - startTime;
    
    if (loadTime > 100) {
        console.warn('Performance: Carregamento lento detectado');
    }
    
    return {
        questionsLoaded,
        materialLoaded,
        loadTime: Math.round(loadTime)
    };
}

// Inicialização aprimorada
document.addEventListener('DOMContentLoaded', function() {
    const validation = validatePerformance();
    
    if (!validation.questionsLoaded) {
        showNotification('⚠️ Algumas questões ainda estão carregando...', 'warning');
    }
    
    if (!validation.materialLoaded) {
        showNotification('⚠️ Material de estudo carregando...', 'warning');
    }
    
    if (validation.questionsLoaded && validation.materialLoaded) {
        showNotification('✅ CLF-C02 carregado com sucesso!', 'success');
    }
    
    console.log('CLF-C02 Performance:', validation);
});