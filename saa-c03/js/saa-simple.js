// SAA-C03 Script Simplificado - Versão sem erros

// Estados globais
let currentSection = 'study';
let currentTopic = null;
let assessmentState = {
    currentQuestion: 0,
    answers: {},
    isActive: false,
    completed: false
};

// Navegação simples
function showSection(section) {
    // Esconder todas as seções
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(s => s.classList.remove('active'));
    
    // Mostrar seção selecionada
    const targetSection = document.getElementById(section);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Atualizar botões de navegação
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    currentSection = section;
}

// Avaliação inicial
function startAssessment() {
    const intro = document.getElementById('assessment-intro');
    const quiz = document.getElementById('assessment-quiz');
    
    if (intro) intro.style.display = 'none';
    if (quiz) quiz.style.display = 'block';
    
    assessmentState.currentQuestion = 0;
    assessmentState.answers = {};
    assessmentState.isActive = true;
    
    showAssessmentQuestion();
}

function skipAssessment() {
    const intro = document.getElementById('assessment-intro');
    const material = document.getElementById('study-material');
    
    if (intro) intro.style.display = 'none';
    if (material) material.style.display = 'block';
}

function showAssessmentQuestion() {
    if (!window.saaInitialAssessment) {
        console.error('Avaliação inicial não carregada');
        return;
    }
    
    const question = window.saaInitialAssessment[assessmentState.currentQuestion];
    if (!question) return;
    
    // Atualizar contador
    const currentEl = document.getElementById('assessment-current');
    if (currentEl) currentEl.textContent = assessmentState.currentQuestion + 1;
    
    // Atualizar barra de progresso
    const progress = ((assessmentState.currentQuestion + 1) / window.saaInitialAssessment.length) * 100;
    const progressBar = document.getElementById('assessment-progress-bar');
    if (progressBar) progressBar.style.width = progress + '%';
    
    // Mostrar questão
    const questionEl = document.getElementById('assessment-question');
    if (questionEl) questionEl.innerHTML = `<h4>${question.question}</h4>`;
    
    // Mostrar opções
    const optionsContainer = document.getElementById('assessment-options');
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.onclick = () => selectAssessmentOption(index);
            optionDiv.innerHTML = `${String.fromCharCode(65 + index)}. ${option}`;
            optionsContainer.appendChild(optionDiv);
        });
    }
    
    // Desabilitar botão próxima
    const nextBtn = document.getElementById('assessment-next');
    if (nextBtn) nextBtn.disabled = true;
}

function selectAssessmentOption(optionIndex) {
    if (!window.saaInitialAssessment) return;
    
    const questionId = window.saaInitialAssessment[assessmentState.currentQuestion].id;
    assessmentState.answers[questionId] = optionIndex;
    
    // Atualizar visual das opções
    const options = document.querySelectorAll('#assessment-options .option');
    options.forEach((opt, idx) => {
        opt.classList.toggle('selected', idx === optionIndex);
    });
    
    // Habilitar botão próxima
    const nextBtn = document.getElementById('assessment-next');
    if (nextBtn) nextBtn.disabled = false;
}

function nextAssessmentQuestion() {
    if (!window.saaInitialAssessment) return;
    
    if (assessmentState.currentQuestion < window.saaInitialAssessment.length - 1) {
        assessmentState.currentQuestion++;
        showAssessmentQuestion();
    } else {
        finishAssessment();
    }
}

function finishAssessment() {
    if (!window.assessSAALevel) {
        console.error('Função de avaliação não encontrada');
        return;
    }
    
    const results = window.assessSAALevel(assessmentState.answers);
    showAssessmentResults(results);
}

function showAssessmentResults(results) {
    const quiz = document.getElementById('assessment-quiz');
    const resultsDiv = document.getElementById('assessment-results');
    
    if (quiz) quiz.style.display = 'none';
    if (resultsDiv) {
        resultsDiv.style.display = 'block';
        resultsDiv.innerHTML = `
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
}

function proceedToStudy() {
    const resultsDiv = document.getElementById('assessment-results');
    const material = document.getElementById('study-material');
    
    if (resultsDiv) resultsDiv.style.display = 'none';
    if (material) material.style.display = 'block';
    
    assessmentState.completed = true;
}

// Material de estudo
function showTopic(topic) {
    if (!window.saaStudyMaterial) {
        console.error('Material de estudo não carregado');
        return;
    }
    
    const topicContent = document.getElementById('topic-content');
    const material = window.saaStudyMaterial[topic];
    
    if (material && topicContent) {
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
    const topicContent = document.getElementById('topic-content');
    if (topicContent) {
        topicContent.classList.remove('active');
    }
    currentTopic = null;
}

// Simulado básico
function startExam() {
    alert('Funcionalidade de simulado será implementada em breve');
}

function practiceMode() {
    alert('Modo prática será implementado em breve');
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    console.log('SAA-C03 carregado');
    
    // Aplicar tema se disponível
    if (typeof applyTheme === 'function') {
        applyTheme('saa');
    }
    
    // Inserir breadcrumb se disponível
    if (typeof insertBreadcrumb === 'function') {
        insertBreadcrumb('saa-c03');
    }
});