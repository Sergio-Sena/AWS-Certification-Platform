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

// Navegação entre seções
function showSection(section) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    document.getElementById(section).classList.add('active');
    
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    currentSection = section;
}

// Material de Estudo
function showTopic(topic) {
    const topicContent = document.getElementById('topic-content');
    const material = clfStudyMaterial[topic];
    
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
    examState.questions = selectCLFExamQuestions();
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
    examState.questions = shuffleArray(clf200Questions).slice(0, 10);
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
    
    document.getElementById('current-q').textContent = examState.currentQuestion + 1;
    document.getElementById('total-q').textContent = examState.questions.length;
    
    document.getElementById('question-text').innerHTML = `
        <strong>Questão ${examState.currentQuestion + 1}</strong><br><br>
        ${question.question}
        ${isMultipleChoice ? '<br><br><em>Selecione todas as opções corretas:</em>' : ''}
    `;
    
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
        } else {
            answerArray.push(optionIndex);
        }
    } else {
        examState.answers[questionId] = optionIndex;
    }
    
    updateOptionVisuals();
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
    const officialScore = CERTIFICATION_CONFIG.passingScore.clf;
    const passed = percentage >= officialScore;

    return {
        correctAnswers,
        totalQuestions,
        percentage,
        officialScore,
        passed,
        resultsByTopic,
        motivationalMessage: CERTIFICATION_CONFIG.getMotivationalMessage('clf', percentage)
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
    `;
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