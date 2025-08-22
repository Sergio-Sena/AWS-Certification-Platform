// Avaliação Inicial para personalizar aprendizado
const initialAssessment = [
    {
        id: 1,
        question: "O que é um serviço 'serverless' na AWS? Qual a principal vantagem dele em relação a uma arquitetura baseada em servidores tradicionais (como EC2)?",
        options: [
            "Serviços sem servidor físico, vantagem é não pagar nada",
            "Serviços gerenciados pela AWS, vantagem é pay-per-use e sem gerenciamento de infraestrutura",
            "Serviços que rodam apenas na nuvem, vantagem é velocidade",
            "Não sei / Preciso estudar este conceito"
        ],
        correct: [1],
        level: "basic",
        topic: "serverless"
    },
    {
        id: 2,
        question: "No contexto da AWS, qual a diferença entre API Gateway e Application Load Balancer (ALB)? Quando você usaria cada um?",
        options: [
            "API Gateway para APIs REST/HTTP, ALB para distribuir tráfego entre instâncias EC2",
            "São a mesma coisa, apenas nomes diferentes",
            "ALB é mais barato que API Gateway",
            "Não sei / Preciso estudar este conceito"
        ],
        correct: [0],
        level: "intermediate",
        topic: "networking"
    },
    {
        id: 3,
        question: "Qual a principal função do IAM (Identity and Access Management)? O que são 'policies' e como elas se relacionam com 'roles'?",
        options: [
            "IAM gerencia identidades e acessos. Policies definem permissões, Roles são identidades que podem assumir policies",
            "IAM é apenas para senhas de usuários",
            "IAM controla apenas custos da AWS",
            "Não sei / Preciso estudar este conceito"
        ],
        correct: [0],
        level: "basic",
        topic: "security"
    },
    {
        id: 4,
        question: "No DynamoDB, o que é uma 'Partition Key'? Por que ela é considerada a chave primária obrigatória?",
        options: [
            "É um índice secundário opcional",
            "É a chave que determina em qual partição o item será armazenado, obrigatória para distribuição dos dados",
            "É apenas para ordenação dos dados",
            "Não sei / Preciso estudar este conceito"
        ],
        correct: [1],
        level: "intermediate",
        topic: "database"
    },
    {
        id: 5,
        question: "Em um pipeline de CI/CD (como o AWS CodePipeline), qual a diferença entre os estágios de 'Build' e 'Deploy'?",
        options: [
            "Build compila/testa o código, Deploy coloca em produção",
            "São a mesma coisa",
            "Build é mais caro que Deploy",
            "Não sei / Preciso estudar este conceito"
        ],
        correct: [0],
        level: "intermediate", 
        topic: "cicd"
    }
];

// Sistema de avaliação e recomendações
const assessmentSystem = {
    evaluateLevel: function(answers) {
        let score = 0;
        let totalQuestions = initialAssessment.length;
        let weakAreas = [];
        let strongAreas = [];
        
        initialAssessment.forEach((question, index) => {
            const userAnswer = answers[question.id];
            const isCorrect = userAnswer === question.correct[0];
            
            if (isCorrect) {
                score++;
                strongAreas.push(question.topic);
            } else {
                weakAreas.push(question.topic);
            }
        });
        
        const percentage = Math.round((score / totalQuestions) * 100);
        
        return {
            score: score,
            total: totalQuestions,
            percentage: percentage,
            level: this.determineLevel(percentage),
            weakAreas: [...new Set(weakAreas)],
            strongAreas: [...new Set(strongAreas)],
            recommendations: this.getRecommendations(percentage, weakAreas)
        };
    },
    
    determineLevel: function(percentage) {
        if (percentage >= 80) return "avançado";
        if (percentage >= 60) return "intermediário";
        if (percentage >= 40) return "básico-intermediário";
        return "iniciante";
    },
    
    getRecommendations: function(percentage, weakAreas) {
        const recommendations = {
            studyPlan: [],
            focusAreas: [],
            timeAllocation: {}
        };
        
        if (percentage < 40) {
            recommendations.studyPlan = [
                "Comece pelos conceitos fundamentais da AWS",
                "Foque em Lambda e conceitos serverless",
                "Estude IAM e segurança básica",
                "Pratique com hands-on labs"
            ];
            recommendations.timeAllocation = {
                "Conceitos básicos": "40%",
                "Hands-on prática": "35%", 
                "Simulados": "25%"
            };
        } else if (percentage < 60) {
            recommendations.studyPlan = [
                "Aprofunde conhecimentos em serviços específicos",
                "Foque em padrões arquiteturais",
                "Estude casos de uso práticos",
                "Aumente frequência de simulados"
            ];
            recommendations.timeAllocation = {
                "Aprofundamento": "45%",
                "Casos práticos": "30%",
                "Simulados": "25%"
            };
        } else if (percentage < 80) {
            recommendations.studyPlan = [
                "Foque em otimização e troubleshooting",
                "Estude cenários avançados",
                "Pratique simulados intensivamente",
                "Revise áreas fracas identificadas"
            ];
            recommendations.timeAllocation = {
                "Cenários avançados": "40%",
                "Simulados": "40%",
                "Revisão": "20%"
            };
        } else {
            recommendations.studyPlan = [
                "Mantenha conhecimento atualizado",
                "Foque em simulados para timing",
                "Revise apenas pontos específicos",
                "Prepare-se para agendamento da prova"
            ];
            recommendations.timeAllocation = {
                "Simulados": "60%",
                "Revisão pontual": "25%",
                "Preparação final": "15%"
            };
        }
        
        // Áreas de foco baseadas em pontos fracos
        const topicNames = {
            "serverless": "AWS Lambda e Serverless",
            "networking": "API Gateway e Networking", 
            "security": "IAM e Segurança",
            "database": "DynamoDB e Databases",
            "cicd": "CI/CD e DevOps"
        };
        
        recommendations.focusAreas = weakAreas.map(area => topicNames[area] || area);
        
        return recommendations;
    }
};