// Exam Engine - Sistema de Simulado Unificado
class ExamEngine {
    constructor(certType, questionBank) {
        this.certType = certType;
        this.questionBank = questionBank;
        this.config = CERTIFICATION_CONFIG;
        this.examState = {
            isActive: false,
            questions: [],
            currentQuestion: 0,
            answers: {},
            startTime: null,
            timeRemaining: this.config.examDuration * 60
        };
    }

    // Selecionar 65 questões conforme distribuição oficial
    selectExamQuestions() {
        const distribution = this.config.distributions[this.certType].exam;
        const questionsByDomain = this.groupQuestionsByDomain();
        let selectedQuestions = [];

        Object.keys(distribution).forEach(domain => {
            const needed = distribution[domain];
            const available = questionsByDomain[domain] || [];
            const shuffled = this.shuffleArray(available);
            const selected = shuffled.slice(0, Math.min(needed, available.length));
            selectedQuestions = selectedQuestions.concat(selected);
        });

        // Completar com questões aleatórias se necessário
        while (selectedQuestions.length < 65) {
            const remaining = this.questionBank.filter(q => !selectedQuestions.includes(q));
            if (remaining.length === 0) break;
            const randomQuestion = remaining[Math.floor(Math.random() * remaining.length)];
            selectedQuestions.push(randomQuestion);
        }

        return this.shuffleArray(selectedQuestions).slice(0, 65);
    }

    // Agrupar questões por domínio
    groupQuestionsByDomain() {
        const grouped = {};
        this.questionBank.forEach(question => {
            const domain = this.mapTopicToDomain(question.topic);
            if (!grouped[domain]) grouped[domain] = [];
            grouped[domain].push(question);
        });
        return grouped;
    }

    // Mapear tópicos para domínios
    mapTopicToDomain(topic) {
        const mapping = {
            clf: {
                'cloud-concepts': 'domain1',
                'security': 'domain2', 
                'technology': 'domain3',
                'billing': 'domain4'
            },
            dva: {
                'lambda': 'domain1',
                'dynamodb': 'domain1',
                'apigateway': 'domain1',
                'security': 'domain2',
                'deployment': 'domain3',
                'monitoring': 'domain4'
            },
            saa: {
                'resilient': 'domain1',
                'performance': 'domain2',
                'secure': 'domain3',
                'cost': 'domain4'
            }
        };
        
        return mapping[this.certType]?.[topic] || 'domain1';
    }

    // Calcular resultados com nota oficial
    calculateResults() {
        let correctAnswers = 0;
        const totalQuestions = this.examState.questions.length;
        const resultsByDomain = {};

        this.examState.questions.forEach(question => {
            const userAnswer = this.examState.answers[question.id];
            const correctAnswer = question.correct;
            const domain = this.mapTopicToDomain(question.topic);

            if (!resultsByDomain[domain]) {
                resultsByDomain[domain] = { correct: 0, total: 0 };
            }
            resultsByDomain[domain].total++;

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
                resultsByDomain[domain].correct++;
            }
        });

        const percentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
        const officialScore = this.config.passingScore[this.certType];
        const passed = percentage >= officialScore;

        return {
            correctAnswers,
            totalQuestions,
            percentage,
            officialScore,
            passed,
            resultsByDomain,
            motivationalMessage: this.config.getMotivationalMessage(this.certType, percentage)
        };
    }

    // Utility: Shuffle array
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
}

// Exportar para uso global
window.ExamEngine = ExamEngine;