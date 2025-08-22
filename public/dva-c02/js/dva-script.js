// Estado da aplicação
let currentSection = 'study';
let currentTopic = null;
let assessmentState = {
    active: false,
    currentQuestion: 0,
    answers: {},
    completed: false
};
let examState = {
    isActive: false,
    questions: [],
    currentQuestion: 0,
    answers: {},
    startTime: null,
    timeRemaining: 130 * 60, // 130 minutos em segundos
    timer: null
};

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    showSection('study', false); // Não animar na primeira carga
});

// Navegação entre seções
function showSection(section, animate = true) {
    // Atualizar botões de navegação
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
    });
    const activeBtn = document.querySelector(`[onclick="showSection('${section}')"]`);
    activeBtn.classList.add('active');
    activeBtn.setAttribute('aria-pressed', 'true');

    // Animação de fade-out na seção atual
    const currentActiveSection = document.querySelector('.content-section.active');
    if (currentActiveSection && animate) {
        currentActiveSection.style.transition = 'opacity 0.3s ease-out';
        currentActiveSection.style.opacity = 0;
        setTimeout(() => {
            currentActiveSection.classList.remove('active');
            showNewSection(section, animate);
        }, 300);
    } else {
        if (currentActiveSection) currentActiveSection.classList.remove('active');
        showNewSection(section, animate);
    }
}

function showNewSection(section, animate) {
    const targetSection = document.getElementById(section);
    targetSection.classList.add('active');
    if (animate) {
        targetSection.style.opacity = 0;
        setTimeout(() => {
            targetSection.style.transition = 'opacity 0.3s ease-in';
            targetSection.style.opacity = 1;
        }, 10); // Pequeno delay para garantir a transição
    }

    // Focar na seção para leitores de tela
    targetSection.focus();
    currentSection = section;
    announceToScreenReader(`Seção ${getSectionName(section)} ativada`);
}


function getSectionName(section) {
    const names = {
        'study': 'Material de Estudo',
        'simulator': 'Simulado',
        'results': 'Resultados'
    };
    return names[section] || section;
}

function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Material de Estudo
function showTopic(topic) {
    const topicContent = document.getElementById('topic-content');
    const material = studyMaterial[topic];
    
    if (material) {
        topicContent.innerHTML = `
            <h3>${material.title}</h3>
            ${material.content}
            <div style="margin-top: 2rem; text-align: center;">
                <button class="btn-secondary" onclick="hideTopic()">Fechar</button>
            </div>
        `;
        topicContent.classList.add('active');
        currentTopic = topic;
    }
}

function hideTopic() {
    document.getElementById('topic-content').classList.remove('active');
    currentTopic = null;
}

// Sistema de Simulado
function startExam() {
    // Adicionar estado de loading
    const startBtn = document.getElementById('start-exam');
    startBtn.classList.add('loading');
    startBtn.disabled = true;
    
    // Simular carregamento das questões
    setTimeout(() => {
        // Selecionar 65 questões conforme distribuição oficial DVA-C02
        examState.questions = typeof selectExamQuestions === 'function' ? selectExamQuestions() : 
                             shuffleArray(availableQuestions).slice(0, 65);
        examState.currentQuestion = 0;
        examState.answers = {};
        examState.startTime = new Date();
        examState.timeRemaining = 130 * 60; // 130 minutos
        examState.isActive = true;
        
        // Mostrar interface do exame
        document.getElementById('exam-interface').style.display = 'block';
        document.querySelector('.simulator-header').style.display = 'none';
        
        // Iniciar timer
        startTimer();
        
        // Mostrar primeira questão
        showQuestion();
        
        // Focar na primeira questão
        document.getElementById('question-text').focus();
        
        // Remover estado de loading
        startBtn.classList.remove('loading');
        startBtn.disabled = false;
        
        announceToScreenReader('Simulado iniciado. Questão 1 de 65 carregada.');
    }, 800);
}

function practiceMode() {
    // Verificar questões disponíveis
    const availableQuestions = typeof questionBank !== 'undefined' ? questionBank : 
                              (typeof dvaQuestions !== 'undefined' ? dvaQuestions : []);
    
    if (availableQuestions.length === 0) {
        alert('Questões não carregadas. Recarregue a página.');
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
    
    // Mudar cor quando restam menos de 10 minutos
    if (examState.timeRemaining < 600) {
        document.getElementById('timer').style.color = '#dc3545';
    }
}

function showQuestion() {
    const question = examState.questions[examState.currentQuestion];
    const isMultipleChoice = question.correct.length > 1;
    
    // Atualizar header
    document.getElementById('current-q').textContent = examState.currentQuestion + 1;
    document.getElementById('total-q').textContent = examState.questions.length;
    
    // Mostrar questão
    document.getElementById('question-text').innerHTML = `
        <strong>Questão ${examState.currentQuestion + 1}</strong><br><br>
        ${question.question}
        ${isMultipleChoice ? '<br><br><em>Selecione todas as opções corretas:</em>' : ''}
    `;
    
    // Mostrar opções
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.onclick = () => selectOption(index, isMultipleChoice);
        
        const inputType = isMultipleChoice ? 'checkbox' : 'radio';
        const inputName = isMultipleChoice ? `q${question.id}_${index}` : `q${question.id}`;
        
        optionDiv.innerHTML = `
            <input type="${inputType}" name="${inputName}" id="opt_${index}" ${isSelected(index) ? 'checked' : ''}>
            <label for="opt_${index}">${String.fromCharCode(65 + index)}. ${option}</label>
        `;
        
        if (isSelected(index)) {
            optionDiv.classList.add('selected');
        }
        
        optionsContainer.appendChild(optionDiv);
    });
    
    // Atualizar botões de navegação
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
        
        if (index > -1) {
            answerArray.splice(index, 1);
            announceToScreenReader(`Opção ${String.fromCharCode(65 + optionIndex)} desmarcada`);
        } else {
            answerArray.push(optionIndex);
            announceToScreenReader(`Opção ${String.fromCharCode(65 + optionIndex)} selecionada`);
        }
    } else {
        examState.answers[questionId] = optionIndex;
        announceToScreenReader(`Opção ${String.fromCharCode(65 + optionIndex)} selecionada`);
    }
    
    // Atualizar visual
    updateOptionVisuals();
    
    // Adicionar feedback visual temporário
    const option = document.querySelectorAll('.option')[optionIndex];
    option.classList.add('option-feedback');
    setTimeout(() => {
        option.classList.remove('option-feedback');
    }, 200);
}

function updateOptionVisuals() {
    const options = document.querySelectorAll('.option');
    const questionId = examState.questions[examState.currentQuestion].id;
    const answer = examState.answers[questionId];
    
    options.forEach((option, index) => {
        const input = option.querySelector('input');
        const isSelected = Array.isArray(answer) ? 
            answer.includes(index) : answer === index;
        
        input.checked = isSelected;
        option.classList.toggle('selected', isSelected);
    });
}

function previousQuestion() {
    if (examState.currentQuestion > 0) {
        examState.currentQuestion--;
        showQuestion();
    }
}

function nextQuestion() {
    if (examState.currentQuestion < examState.questions.length - 1) {
        examState.currentQuestion++;
        showQuestion();
    }
}

function finishExam() {
    if (examState.timer) {
        clearInterval(examState.timer);
    }
    
    examState.isActive = false;
    
    // Calcular resultados
    const results = calculateResults();
    
    // Mostrar resultados
    showResults(results);
    
    // Voltar para seção de resultados
    showSection('results');
    
    // Resetar interface do simulado
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
        if (correctAnswer.length > 1) { // Multiple choice
            if (Array.isArray(userAnswer) && userAnswer.length === correctAnswer.length) {
                isCorrect = correctAnswer.every(ans => userAnswer.includes(ans)) && userAnswer.every(ans => correctAnswer.includes(ans));
            }
        } else { // Single choice
            isCorrect = userAnswer === correctAnswer[0];
        }

        if (isCorrect) {
            correctAnswers++;
            resultsByTopic[question.topic].correct++;
        }
    });

    const percentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
    const officialScore = 72; // DVA-C02 passing score
    const passed = percentage >= 80; // Nossa meta é 80%

    const endTime = new Date();
    const timeSpent = examState.startTime ? Math.round((endTime - examState.startTime) / 1000 / 60) : 0;

    let motivationalMessage;
    if (percentage >= 80) {
        motivationalMessage = "🎉 Excelente! Você está pronto para o exame oficial. Sua preparação está sólida!";
    } else if (percentage >= 72) {
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
        timeSpent,
        resultsByTopic,
        motivationalMessage
    };
}

// Variável global para armazenar últimos resultados
let lastResults = null;

function showResults(results) {
    lastResults = results; // Salvar para revisão
    const resultsContent = document.getElementById('results-content');
    
    const statusClass = results.passed ? 'success' : 'failure';
    const statusText = results.passed ? '✅ APROVADO!' : '❌ REPROVADO';
    const statusColor = results.passed ? '#28a745' : '#dc3545';
    
    resultsContent.innerHTML = `
        <div class="result-card" style="background: linear-gradient(135deg, ${results.passed ? '#28a745' : '#dc3545'} 0%, ${results.passed ? '#20c997' : '#e74c3c'} 100%);">
            <div class="result-score">${results.percentage}%</div>
            <div class="result-status">${statusText}</div>
            <p>${results.correctAnswers} de ${results.totalQuestions} questões corretas</p>
            <p>Tempo gasto: ${results.timeSpent} minutos</p>
            <p><strong>Nota mínima para aprovação: 80%</strong></p>
            <div style="background: #e8f4fd; border: 1px solid #bee5eb; border-radius: 8px; padding: 1rem; margin-top: 1rem; text-align: center;">
                <p style="color: #0c5460; margin: 0; font-weight: 500;">💡 <strong>Nossa meta de 80% garante que você esteja REALMENTE preparado.</strong><br>
                É mais desafiador que o exame oficial, mas isso te dará confiança total no dia da prova!</p>
            </div>
        </div>
        
        <div class="result-details">
            <h3>📊 Desempenho por Tópico</h3>
            <div class="result-breakdown">
                ${Object.entries(results.resultsByTopic).map(([topic, data]) => {
                    const topicPercentage = Math.round((data.correct / data.total) * 100);
                    const topicNames = {
                        'lambda': 'Lambda',
                        'dynamodb': 'DynamoDB', 
                        'apigateway': 'API Gateway',
                        'security': 'Security & IAM',
                        'monitoring': 'Monitoring',
                        'deployment': 'CI/CD'
                    };
                    
                    return `
                        <div class="breakdown-item">
                            <h4>${topicNames[topic] || topic}</h4>
                            <div style="font-size: 1.5rem; font-weight: bold; color: ${topicPercentage >= 80 ? '#28a745' : '#dc3545'};">
                                ${topicPercentage}%
                            </div>
                            <p>${data.correct}/${data.total} corretas</p>
                        </div>
                    `;
                }).join('')}
            </div>
            
            <div style="margin-top: 2rem; text-align: center;">
                <button class="btn-primary" onclick="startNewExam()">Novo Simulado</button>
                <button class="btn-secondary" onclick="reviewAnswers()" style="margin-left: 1rem;">Revisar Respostas</button>
            </div>
        </div>
        
        ${!results.passed ? `
            <div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 1.5rem; margin-top: 2rem;">
                <h4 style="color: #856404; margin-bottom: 1rem;">💡 Dicas para Melhorar</h4>
                <ul style="color: #856404; margin-left: 1.5rem;">
                    <li>Revise os tópicos com menor pontuação</li>
                    <li>Pratique mais questões do tipo que errou</li>
                    <li>Releia o material de estudo dos temas fracos</li>
                    <li>Faça mais simulados para ganhar confiança</li>
                </ul>
            </div>
        ` : `
            <div style="background: #d4edda; border: 1px solid #c3e6cb; border-radius: 8px; padding: 1.5rem; margin-top: 2rem;">
                <h4 style="color: #155724; margin-bottom: 1rem;">🎉 Parabéns!</h4>
                <p style="color: #155724;">Você está pronto para a certificação DVA-C02! Continue praticando para manter o conhecimento fresco.</p>
            </div>
        `}
    `;
}

function startNewExam() {
    // Reset do estado
    examState = {
        isActive: false,
        questions: [],
        currentQuestion: 0,
        answers: {},
        startTime: null,
        timeRemaining: 130 * 60,
        timer: null
    };
    
    // Voltar para seção do simulado
    showSection('simulator');
}

function reviewAnswers() {
    const reviewContent = document.getElementById('results-content');
    
    let reviewHTML = `
        <div style="margin-bottom: 2rem;">
            <h2>📝 Revisão de Respostas</h2>
            <button class="btn-secondary" onclick="showResults(lastResults)" style="float: right;">← Voltar aos Resultados</button>
        </div>
        <div style="clear: both;"></div>
    `;
    
    examState.questions.forEach((question, index) => {
        const userAnswer = examState.answers[question.id];
        const correctAnswer = question.correct;
        const isMultipleChoice = correctAnswer.length > 1;
        
        // Verificar se está correto
        let isCorrect = false;
        if (correctAnswer.length > 1) { // Multiple choice
            if (Array.isArray(userAnswer) && userAnswer.length === correctAnswer.length) {
                isCorrect = correctAnswer.every(ans => userAnswer.includes(ans)) && userAnswer.every(ans => correctAnswer.includes(ans));
            }
        } else { // Single choice
            isCorrect = userAnswer === correctAnswer[0];
        }
        
        const statusIcon = isCorrect ? '✅' : '❌';
        const statusColor = isCorrect ? '#28a745' : '#dc3545';
        
        reviewHTML += `
            <div style="background: white; border-radius: 10px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-left: 4px solid ${statusColor};">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <h4>Questão ${index + 1} ${statusIcon}</h4>
                    <span style="color: ${statusColor}; font-weight: bold;">${isCorrect ? 'CORRETO' : 'INCORRETO'}</span>
                </div>
                
                <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>${question.question}</strong></p>
                
                <div style="margin-bottom: 1rem;">
                    ${question.options.map((option, optIndex) => {
                        const isUserAnswer = Array.isArray(userAnswer) ? userAnswer.includes(optIndex) : userAnswer === optIndex;
                        const isCorrectOption = correctAnswer.includes(optIndex);
                        
                        let optionStyle = 'padding: 0.5rem; margin: 0.25rem 0; border-radius: 5px; ';
                        let optionIcon = '';
                        
                        if (isCorrectOption && isUserAnswer) {
                            optionStyle += 'background: #d4edda; border: 2px solid #28a745;';
                            optionIcon = '✅ ';
                        } else if (isCorrectOption && !isUserAnswer) {
                            optionStyle += 'background: #d1ecf1; border: 2px solid #17a2b8;';
                            optionIcon = '💡 ';
                        } else if (!isCorrectOption && isUserAnswer) {
                            optionStyle += 'background: #f8d7da; border: 2px solid #dc3545;';
                            optionIcon = '❌ ';
                        } else {
                            optionStyle += 'background: #f8f9fa; border: 1px solid #e9ecef;';
                        }
                        
                        return `<div style="${optionStyle}">${optionIcon}<strong>${String.fromCharCode(65 + optIndex)}.</strong> ${option}</div>`;
                    }).join('')}
                </div>
                
                <div style="background: #f8f9fa; padding: 1rem; border-radius: 5px; border-left: 3px solid #667eea;">
                    <strong>💡 Explicação:</strong><br>
                    ${question.explanation}
                </div>
                
                <div style="margin-top: 0.5rem; font-size: 0.9rem; color: #6c757d;">
                    <strong>Tópico:</strong> ${getTopicName(question.topic)}
                </div>
            </div>
        `;
    });
    
    reviewHTML += `
        <div style="text-align: center; margin-top: 2rem;">
            <button class="btn-primary" onclick="startNewExam()">Novo Simulado</button>
            <button class="btn-secondary" onclick="showResults(lastResults)" style="margin-left: 1rem;">Voltar aos Resultados</button>
        </div>
    `;
    
    reviewContent.innerHTML = reviewHTML;
}

function getTopicName(topic) {
    const topicNames = {
        'lambda': 'AWS Lambda',
        'dynamodb': 'DynamoDB', 
        'apigateway': 'API Gateway',
        'security': 'Security & IAM',
        'monitoring': 'Monitoring',
        'deployment': 'CI/CD',
        's3': 'Amazon S3',
        'ec2': 'Amazon EC2',
        'containers': 'Containers (ECS/EKS)',
        'messaging': 'SNS & SQS',
        'cognito': 'AWS Cognito',
        'systems-manager': 'Systems Manager'
    };
    return topicNames[topic] || topic;
}

// Função utilitária para embaralhar questões
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Salvar progresso no localStorage
function saveProgress() {
    const progress = {
        lastSection: currentSection,
        lastTopic: currentTopic,
        examHistory: JSON.parse(localStorage.getItem('examHistory') || '[]')
    };
    
    localStorage.setItem('dva-c02-progress', JSON.stringify(progress));
}

// Carregar progresso do localStorage
function loadProgress() {
    const progress = JSON.parse(localStorage.getItem('dva-c02-progress') || '{}');
    
    if (progress.lastSection) {
        showSection(progress.lastSection);
    }
    
    if (progress.lastTopic) {
        showTopic(progress.lastTopic);
    }
}

// Salvar resultado do exame
function saveExamResult(results) {
    const history = JSON.parse(localStorage.getItem('examHistory') || '[]');
    
    history.push({
        date: new Date().toISOString(),
        score: results.percentage,
        passed: results.passed,
        timeSpent: results.timeSpent,
        totalQuestions: results.totalQuestions,
        correctAnswers: results.correctAnswers
    });
    
    // Manter apenas os últimos 10 resultados
    if (history.length > 10) {
        history.splice(0, history.length - 10);
    }
    
    localStorage.setItem('examHistory', JSON.stringify(history));
}

// Event listeners para salvar progresso
window.addEventListener('beforeunload', saveProgress);
document.addEventListener('visibilitychange', saveProgress);

// Funções da Avaliação Inicial
function startAssessment() {
    assessmentState.active = true;
    assessmentState.currentQuestion = 0;
    assessmentState.answers = {};
    
    document.getElementById('assessment-intro').style.display = 'none';
    document.getElementById('assessment-quiz').style.display = 'block';
    
    showAssessmentQuestion();
}

function skipAssessment() {
    document.getElementById('assessment-intro').style.display = 'none';
    document.getElementById('study-material').classList.add('active');
}

function showAssessmentQuestion() {
    const question = initialAssessment[assessmentState.currentQuestion];
    const progress = ((assessmentState.currentQuestion + 1) / initialAssessment.length) * 100;
    
    document.getElementById('assessment-current').textContent = assessmentState.currentQuestion + 1;
    document.getElementById('assessment-progress-bar').style.width = progress + '%';
    
    document.getElementById('assessment-question').innerHTML = `
        <strong>Questão ${assessmentState.currentQuestion + 1}</strong><br><br>
        ${question.question}
    `;
    
    const optionsContainer = document.getElementById('assessment-options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'assessment-option';
        optionDiv.onclick = () => selectAssessmentOption(index);
        
        optionDiv.innerHTML = `
            <input type="radio" name="assessment_q${question.id}" id="assess_opt_${index}">
            <label for="assess_opt_${index}">${String.fromCharCode(65 + index)}. ${option}</label>
        `;
        
        optionsContainer.appendChild(optionDiv);
    });
    
    document.getElementById('assessment-next').disabled = true;
}

function selectAssessmentOption(optionIndex) {
    const questionId = initialAssessment[assessmentState.currentQuestion].id;
    assessmentState.answers[questionId] = optionIndex;
    
    // Atualizar visual
    document.querySelectorAll('.assessment-option').forEach((option, index) => {
        const input = option.querySelector('input');
        const isSelected = index === optionIndex;
        
        input.checked = isSelected;
        option.classList.toggle('selected', isSelected);
    });
    
    document.getElementById('assessment-next').disabled = false;
}

function nextAssessmentQuestion() {
    assessmentState.currentQuestion++;
    
    if (assessmentState.currentQuestion < initialAssessment.length) {
        showAssessmentQuestion();
    } else {
        finishAssessment();
    }
}

function finishAssessment() {
    assessmentState.completed = true;
    const results = assessmentSystem.evaluateLevel(assessmentState.answers);
    
    document.getElementById('assessment-quiz').style.display = 'none';
    showAssessmentResults(results);
}

function showAssessmentResults(results) {
    const resultsContainer = document.getElementById('assessment-results');
    
    const levelColors = {
        'iniciante': '#ffeaa7',
        'básico-intermediário': '#74b9ff', 
        'intermediário': '#00b894',
        'avançado': '#6c5ce7'
    };
    
    resultsContainer.innerHTML = `
        <h2>🎯 Sua Avaliação Personalizada</h2>
        
        <div style="text-align: center; margin: 2rem 0;">
            <div style="font-size: 3rem; font-weight: bold; color: #667eea;">${results.percentage}%</div>
            <div style="font-size: 1.2rem; margin: 1rem 0;">${results.score} de ${results.total} questões corretas</div>
            <span class="level-badge level-${results.level.replace(/á|ã/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o')}">
                Nível: ${results.level.toUpperCase()}
            </span>
        </div>
        
        <div class="recommendations">
            <div class="recommendation-card">
                <h4>🎯 Plano de Estudos Personalizado</h4>
                <ul>
                    ${results.recommendations.studyPlan.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            
            <div class="recommendation-card">
                <h4>⏰ Alocação de Tempo</h4>
                <ul>
                    ${Object.entries(results.recommendations.timeAllocation).map(([area, time]) => 
                        `<li><strong>${area}:</strong> ${time}</li>`
                    ).join('')}
                </ul>
            </div>
            
            ${results.focusAreas.length > 0 ? `
                <div class="recommendation-card">
                    <h4>🔴 Áreas de Foco Prioritário</h4>
                    <ul>
                        ${results.recommendations.focusAreas.map(area => `<li>${area}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            
            ${results.strongAreas.length > 0 ? `
                <div class="recommendation-card">
                    <h4>✅ Seus Pontos Fortes</h4>
                    <p>Continue reforçando estas áreas onde você já tem bom conhecimento.</p>
                </div>
            ` : ''}
        </div>
        
        <div style="text-align: center; margin-top: 2rem;">
            <button class="btn-primary" onclick="startStudyPlan()">Iniciar Plano Personalizado 🚀</button>
            <button class="btn-secondary" onclick="retakeAssessment()" style="margin-left: 1rem;">Refazer Avaliação</button>
        </div>
    `;
    
    resultsContainer.style.display = 'block';
}

function startStudyPlan() {
    document.getElementById('assessment-results').style.display = 'none';
    document.getElementById('study-material').classList.add('active');
}

function retakeAssessment() {
    assessmentState = {
        active: false,
        currentQuestion: 0,
        answers: {},
        completed: false
    };
    
    document.getElementById('assessment-results').style.display = 'none';
    document.getElementById('assessment-intro').style.display = 'block';
}

// Função Home
function goHome() {
    // Reset para estado inicial
    showSection('study');
    
    // Reset avaliação se estiver ativa
    if (assessmentState.active) {
        assessmentState = {
            active: false,
            currentQuestion: 0,
            answers: {},
            completed: false
        };
        
        document.getElementById('assessment-quiz').style.display = 'none';
        document.getElementById('assessment-results').style.display = 'none';
        document.getElementById('assessment-intro').style.display = 'block';
        document.getElementById('study-material').classList.remove('active');
    }
    
    // Reset simulado se estiver ativo
    if (examState.isActive) {
        if (examState.timer) {
            clearInterval(examState.timer);
        }
        examState.isActive = false;
        document.getElementById('exam-interface').style.display = 'none';
        document.querySelector('.simulator-header').style.display = 'block';
    }
    
    // Fechar tópico se estiver aberto
    if (currentTopic) {
        hideTopic();
    }
}

// Carregar progresso ao inicializar
document.addEventListener('DOMContentLoaded', loadProgress);
