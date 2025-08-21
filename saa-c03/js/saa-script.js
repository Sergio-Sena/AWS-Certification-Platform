// SAA-C03 Solutions Architect Associate - Script Principal

// Configuração específica SAA-C03
const SAA_CONFIG = {
    examDuration: 130, // 130 minutos
    totalQuestions: 65,
    passingScore: 72, // Score oficial AWS
    recommendedScore: 80, // Nossa recomendação
    certification: 'SAA-C03',
    domains: {
        'resilient': { name: 'Resilient Architectures', weight: 30, examQuestions: 19, bankQuestions: 60 },
        'performance': { name: 'High-Performing Architectures', weight: 28, examQuestions: 18, bankQuestions: 56 },
        'secure': { name: 'Secure Applications', weight: 24, examQuestions: 16, bankQuestions: 48 },
        'cost': { name: 'Cost-Optimized Architectures', weight: 18, examQuestions: 12, bankQuestions: 36 }
    }
};

// Estado do exame
let currentExam = {
    questions: [],
    currentIndex: 0,
    answers: {},
    startTime: null,
    timeRemaining: SAA_CONFIG.examDuration * 60,
    isActive: false,
    isPractice: false
};

// Timer do exame
let examTimer = null;

// Inicializar aplicação
document.addEventListener('DOMContentLoaded', function() {
    initializeSAA();
});

function initializeSAA() {
    console.log('Inicializando SAA-C03...');
    
    // Verificar se as questões estão carregadas
    if (typeof window.saa200Questions === 'undefined') {
        console.warn('Questões SAA-C03 não carregadas ainda');
        setTimeout(initializeSAA, 100);
        return;
    }
    
    console.log('SAA-C03 inicializado com', window.saa200Questions.length, 'questões');
    showSection('study');
}

// Navegação entre seções
function showSection(sectionName) {
    // Esconder todas as seções
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remover classe active de todos os botões
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Mostrar seção selecionada
    document.getElementById(sectionName).classList.add('active');
    
    // Ativar botão correspondente
    event.target.classList.add('active');
    
    // Parar timer se mudou de seção durante exame
    if (sectionName !== 'simulator' && currentExam.isActive) {
        pauseExam();
    }
}

// Mostrar tópico de estudo
function showTopic(topicName) {
    const topicContent = document.getElementById('topic-content');
    const domain = SAA_CONFIG.domains[topicName];
    
    if (!domain) {
        topicContent.innerHTML = '<p>Tópico não encontrado.</p>';
        return;
    }
    
    topicContent.innerHTML = `
        <div class="topic-detail">
            <h3>${domain.name}</h3>
            <p><strong>Peso no exame:</strong> ${domain.weight}% (${domain.examQuestions} questões)</p>
            <p><strong>Questões no banco:</strong> ${domain.bankQuestions} questões</p>
            <div class="topic-description">
                <p>Material de estudo para ${domain.name} será carregado aqui.</p>
            </div>
        </div>
    `;
}

// Iniciar simulado completo
function startExam() {
    if (!window.selectSAAExamQuestions) {
        alert('Sistema de questões não carregado. Aguarde...');
        return;
    }
    
    currentExam.questions = window.selectSAAExamQuestions();
    currentExam.currentIndex = 0;
    currentExam.answers = {};
    currentExam.startTime = new Date();
    currentExam.timeRemaining = SAA_CONFIG.examDuration * 60;
    currentExam.isActive = true;
    currentExam.isPractice = false;
    
    document.getElementById('start-exam').style.display = 'none';
    document.getElementById('practice-mode').style.display = 'none';
    document.getElementById('exam-interface').style.display = 'block';
    
    startTimer();
    displayQuestion();
}

// Modo prática
function practiceMode() {
    if (!window.selectSAAExamQuestions) {
        alert('Sistema de questões não carregado. Aguarde...');
        return;
    }
    
    // Selecionar 10 questões aleatórias
    const allQuestions = window.saa200Questions || [];
    const shuffled = shuffleArray([...allQuestions]);
    currentExam.questions = shuffled.slice(0, 10);
    
    currentExam.currentIndex = 0;
    currentExam.answers = {};
    currentExam.startTime = new Date();
    currentExam.timeRemaining = null; // Sem limite de tempo
    currentExam.isActive = true;
    currentExam.isPractice = true;
    
    document.getElementById('start-exam').style.display = 'none';
    document.getElementById('practice-mode').style.display = 'none';
    document.getElementById('exam-interface').style.display = 'block';
    
    // Esconder timer no modo prática
    document.querySelector('.timer').style.display = 'none';
    document.getElementById('total-q').textContent = '10';
    
    displayQuestion();
}

// Iniciar timer
function startTimer() {
    if (currentExam.isPractice) return;
    
    examTimer = setInterval(() => {
        currentExam.timeRemaining--;
        updateTimerDisplay();
        
        if (currentExam.timeRemaining <= 0) {
            finishExam();
        }
    }, 1000);
}

// Atualizar display do timer
function updateTimerDisplay() {
    const minutes = Math.floor(currentExam.timeRemaining / 60);
    const seconds = currentExam.timeRemaining % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Pausar exame
function pauseExam() {
    if (examTimer) {
        clearInterval(examTimer);
        examTimer = null;
    }
    currentExam.isActive = false;
}

// Exibir questão atual
function displayQuestion() {
    const question = currentExam.questions[currentExam.currentIndex];
    if (!question) return;
    
    document.getElementById('current-q').textContent = currentExam.currentIndex + 1;
    document.getElementById('question-text').textContent = question.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectOption(index);
        
        // Marcar se já foi selecionada
        if (currentExam.answers[question.id] && currentExam.answers[question.id].includes(index)) {
            optionDiv.classList.add('selected');
        }
        
        optionsContainer.appendChild(optionDiv);
    });
    
    // Atualizar botões de navegação
    document.getElementById('prev-btn').disabled = currentExam.currentIndex === 0;
    document.getElementById('next-btn').style.display = 
        currentExam.currentIndex === currentExam.questions.length - 1 ? 'none' : 'inline-block';
    document.getElementById('finish-btn').style.display = 
        currentExam.currentIndex === currentExam.questions.length - 1 ? 'inline-block' : 'none';
}

// Selecionar opção
function selectOption(optionIndex) {
    const question = currentExam.questions[currentExam.currentIndex];
    
    // Limpar seleções anteriores
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    
    // Marcar nova seleção
    document.querySelectorAll('.option')[optionIndex].classList.add('selected');
    
    // Salvar resposta
    currentExam.answers[question.id] = [optionIndex];
}

// Questão anterior
function previousQuestion() {
    if (currentExam.currentIndex > 0) {
        currentExam.currentIndex--;
        displayQuestion();
    }
}

// Próxima questão
function nextQuestion() {
    if (currentExam.currentIndex < currentExam.questions.length - 1) {
        currentExam.currentIndex++;
        displayQuestion();
    }
}

// Finalizar exame
function finishExam() {
    if (examTimer) {
        clearInterval(examTimer);
        examTimer = null;
    }
    
    currentExam.isActive = false;
    
    // Calcular resultados
    const results = calculateResults();
    
    // Salvar no localStorage
    saveResults(results);
    
    // Mostrar resultados
    showSection('results');
    displayResults(results);
    
    // Reset interface
    resetExamInterface();
}

// Calcular resultados
function calculateResults() {
    let correct = 0;
    const domainScores = {};
    
    // Inicializar scores por domínio
    Object.keys(SAA_CONFIG.domains).forEach(domain => {
        domainScores[domain] = { correct: 0, total: 0 };
    });
    
    currentExam.questions.forEach(question => {
        const userAnswer = currentExam.answers[question.id];
        const isCorrect = userAnswer && 
            JSON.stringify(userAnswer.sort()) === JSON.stringify(question.correct.sort());
        
        if (isCorrect) {
            correct++;
            if (domainScores[question.domain]) {
                domainScores[question.domain].correct++;
            }
        }
        
        if (domainScores[question.domain]) {
            domainScores[question.domain].total++;
        }
    });
    
    const percentage = Math.round((correct / currentExam.questions.length) * 100);
    const passed = percentage >= SAA_CONFIG.passingScore;
    
    return {
        certification: SAA_CONFIG.certification,
        date: new Date().toISOString(),
        score: percentage,
        correct: correct,
        total: currentExam.questions.length,
        passed: passed,
        isPractice: currentExam.isPractice,
        timeSpent: currentExam.startTime ? Math.round((new Date() - currentExam.startTime) / 1000 / 60) : 0,
        domainScores: domainScores
    };
}

// Salvar resultados
function saveResults(results) {
    const saved = JSON.parse(localStorage.getItem('saa_results') || '[]');
    saved.push(results);
    localStorage.setItem('saa_results', JSON.stringify(saved));
}

// Exibir resultados
function displayResults(results) {
    const resultsContent = document.getElementById('results-content');
    
    const statusClass = results.passed ? 'success' : 'warning';
    const statusText = results.passed ? 'APROVADO! 🎉' : 'Continue estudando 📚';
    const motivationalMessage = results.score >= SAA_CONFIG.recommendedScore ? 
        'Parabéns! Com ' + results.score + '% você está pronto para o exame oficial!' :
        results.passed ? 
            'Você passou com ' + results.score + '%! Recomendamos 80%+ para máxima confiança.' :
            'Você obteve ' + results.score + '%. Nota oficial: 72%. Recomendamos 80%+ antes do exame real.';
    
    resultsContent.innerHTML = `
        <div class="result-card">
            <div class="score-display ${statusClass}">
                <div class="score-percentage">${results.score}%</div>
                <div class="score-status">${statusText}</div>
                <div class="score-details">${results.correct}/${results.total} questões corretas</div>
            </div>
            
            <div class="motivational-message">
                <p><strong>💡 ${motivationalMessage}</strong></p>
            </div>
            
            <div class="exam-info">
                <p><strong>Tipo:</strong> ${results.isPractice ? 'Modo Prática (10 questões)' : 'Simulado Completo (65 questões)'}</p>
                <p><strong>Data:</strong> ${new Date(results.date).toLocaleString('pt-BR')}</p>
                ${!results.isPractice ? `<p><strong>Tempo gasto:</strong> ${results.timeSpent} minutos</p>` : ''}
            </div>
            
            <div class="domain-breakdown">
                <h4>Performance por Domínio:</h4>
                ${Object.entries(results.domainScores).map(([domain, score]) => {
                    const domainInfo = SAA_CONFIG.domains[domain];
                    const domainPercentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
                    return `
                        <div class="domain-score">
                            <span>${domainInfo ? domainInfo.name : domain}:</span>
                            <span>${score.correct}/${score.total} (${domainPercentage}%)</span>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

// Reset da interface do exame
function resetExamInterface() {
    document.getElementById('exam-interface').style.display = 'none';
    document.getElementById('start-exam').style.display = 'inline-block';
    document.getElementById('practice-mode').style.display = 'inline-block';
    document.querySelector('.timer').style.display = 'block';
    document.getElementById('total-q').textContent = '65';
}

// Função auxiliar para embaralhar array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}