// CLF-C02 Avaliação Inicial - 5 questões para nivelar conhecimento

const clfInitialAssessment = [
    {
        id: 'assess_1',
        question: "O que é AWS Cloud Computing?",
        options: [
            "Um software instalado localmente",
            "Entrega sob demanda de recursos de TI via internet",
            "Um tipo de hardware específico",
            "Uma linguagem de programação"
        ],
        correct: [1],
        level: 'basic',
        explanation: "Cloud Computing é a entrega sob demanda de recursos de TI via internet com preços pay-as-you-go."
    },
    {
        id: 'assess_2', 
        question: "Qual é a diferença entre uma AWS Region e uma Availability Zone?",
        options: [
            "São a mesma coisa",
            "Region é menor que AZ", 
            "Region contém múltiplas AZs geograficamente separadas",
            "AZ contém múltiplas Regions"
        ],
        correct: [2],
        level: 'intermediate',
        explanation: "Uma AWS Region é uma área geográfica que contém múltiplas Availability Zones isoladas."
    },
    {
        id: 'assess_3',
        question: "No Modelo de Responsabilidade Compartilhada da AWS, quem é responsável pela segurança do sistema operacional de uma instância EC2?",
        options: [
            "AWS é totalmente responsável",
            "Cliente é responsável",
            "Responsabilidade é compartilhada igualmente", 
            "Ninguém é responsável"
        ],
        correct: [1],
        level: 'intermediate',
        explanation: "O cliente é responsável pela segurança NA nuvem, incluindo SO, aplicações e dados."
    },
    {
        id: 'assess_4',
        question: "Qual serviço AWS você usaria para armazenar arquivos estáticos de um website?",
        options: [
            "Amazon EC2",
            "Amazon RDS", 
            "Amazon S3",
            "Amazon Lambda"
        ],
        correct: [2],
        level: 'basic',
        explanation: "Amazon S3 é ideal para armazenar arquivos estáticos como imagens, CSS, JavaScript de websites."
    },
    {
        id: 'assess_5',
        question: "Qual é a principal vantagem das Reserved Instances comparado ao modelo On-Demand?",
        options: [
            "Maior performance",
            "Melhor segurança",
            "Desconto significativo no preço",
            "Mais flexibilidade"
        ],
        correct: [2],
        level: 'advanced',
        explanation: "Reserved Instances oferecem desconto significativo (até 75%) em troca de compromisso de 1-3 anos."
    }
];

// Função para avaliar nível baseado nas respostas
function assessCLFLevel(answers) {
    let score = 0;
    let basicCorrect = 0;
    let intermediateCorrect = 0;
    let advancedCorrect = 0;
    
    clfInitialAssessment.forEach((question, index) => {
        const userAnswer = answers[question.id];
        const isCorrect = userAnswer !== undefined && userAnswer === question.correct[0];
        
        if (isCorrect) {
            score++;
            if (question.level === 'basic') basicCorrect++;
            else if (question.level === 'intermediate') intermediateCorrect++;
            else if (question.level === 'advanced') advancedCorrect++;
        }
    });
    
    // Determinar nível e recomendações
    let level, recommendations;
    
    if (score <= 1) {
        level = 'Iniciante';
        recommendations = [
            'Comece com conceitos básicos de cloud computing',
            'Foque nos fundamentos da AWS (Regions, AZs)',
            'Estude o modelo de responsabilidade compartilhada',
            'Pratique com AWS Free Tier'
        ];
    } else if (score <= 3) {
        level = 'Básico-Intermediário';
        recommendations = [
            'Aprofunde conhecimento em serviços core da AWS',
            'Estude casos de uso práticos',
            'Foque em segurança e compliance',
            'Pratique com simulados regulares'
        ];
    } else if (score <= 4) {
        level = 'Intermediário';
        recommendations = [
            'Estude modelos de preços em detalhes',
            'Aprofunde em arquiteturas Well-Architected',
            'Pratique troubleshooting',
            'Faça simulados completos regularmente'
        ];
    } else {
        level = 'Avançado';
        recommendations = [
            'Foque em cenários complexos e edge cases',
            'Estude integrações entre serviços',
            'Pratique com simulados em tempo real',
            'Considere agendar o exame oficial'
        ];
    }
    
    return {
        score: score,
        total: clfInitialAssessment.length,
        percentage: Math.round((score / clfInitialAssessment.length) * 100),
        level: level,
        recommendations: recommendations,
        breakdown: {
            basic: basicCorrect,
            intermediate: intermediateCorrect,
            advanced: advancedCorrect
        }
    };
}

window.clfInitialAssessment = clfInitialAssessment;
window.assessCLFLevel = assessCLFLevel;