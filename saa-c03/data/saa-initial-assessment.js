// SAA-C03 Avaliação Inicial - 5 questões para nivelar conhecimento

const saaInitialAssessment = [
    {
        id: 'assess_1',
        question: "Qual é a melhor prática para garantir alta disponibilidade de uma aplicação web?",
        options: [
            "Usar uma instância EC2 grande em uma AZ",
            "Deployar em múltiplas AZs com load balancer",
            "Usar apenas armazenamento local",
            "Configurar backup diário"
        ],
        correct: [1],
        level: 'basic',
        explanation: "Deploy em múltiplas AZs com load balancer garante que a aplicação continue funcionando mesmo se uma AZ falhar."
    },
    {
        id: 'assess_2',
        question: "Como implementar disaster recovery com RTO baixo?",
        options: [
            "Backup semanal para S3",
            "Multi-Region deployment com Route 53 failover",
            "Snapshot manual das instâncias",
            "Replicação apenas local"
        ],
        correct: [1],
        level: 'intermediate',
        explanation: "Multi-Region deployment com Route 53 failover permite recuperação rápida em caso de falha regional."
    },
    {
        id: 'assess_3',
        question: "Qual estratégia otimiza performance para usuários globais?",
        options: [
            "Servidor único na região mais barata",
            "CloudFront CDN com múltiplas origens regionais",
            "Instâncias maiores",
            "Mais bandwidth"
        ],
        correct: [1],
        level: 'intermediate',
        explanation: "CloudFront CDN distribui conteúdo globalmente com baixa latência usando edge locations."
    },
    {
        id: 'assess_4',
        question: "Como implementar segurança em camadas (defense in depth)?",
        options: [
            "Apenas firewall externo",
            "WAF + Security Groups + NACLs + IAM + encryption",
            "Apenas antivírus",
            "Senha forte apenas"
        ],
        correct: [1],
        level: 'advanced',
        explanation: "Defense in depth usa múltiplas camadas: WAF, Security Groups, NACLs, IAM e encryption."
    },
    {
        id: 'assess_5',
        question: "Qual é a estratégia mais eficaz para otimização de custos?",
        options: [
            "Usar sempre On-Demand instances",
            "Combinar Reserved Instances, Spot e Savings Plans",
            "Usar apenas Spot instances",
            "Sempre usar instâncias maiores"
        ],
        correct: [1],
        level: 'advanced',
        explanation: "Combinação de Reserved Instances, Spot instances e Savings Plans oferece máxima otimização de custos."
    }
];

// Função para avaliar nível baseado nas respostas
function assessSAALevel(answers) {
    let score = 0;
    let basicCorrect = 0;
    let intermediateCorrect = 0;
    let advancedCorrect = 0;
    
    saaInitialAssessment.forEach((question, index) => {
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
            'Comece com fundamentos de arquitetura AWS',
            'Estude conceitos de alta disponibilidade',
            'Foque em serviços core (EC2, S3, VPC)',
            'Pratique com cenários básicos'
        ];
    } else if (score <= 3) {
        level = 'Básico-Intermediário';
        recommendations = [
            'Aprofunde em padrões de arquitetura',
            'Estude disaster recovery e backup',
            'Foque em otimização de performance',
            'Pratique design de soluções completas'
        ];
    } else if (score <= 4) {
        level = 'Intermediário';
        recommendations = [
            'Estude arquiteturas complexas e híbridas',
            'Aprofunde em segurança avançada',
            'Foque em otimização de custos',
            'Pratique troubleshooting avançado'
        ];
    } else {
        level = 'Avançado';
        recommendations = [
            'Foque em cenários enterprise complexos',
            'Estude integrações multi-serviços',
            'Pratique arquiteturas serverless avançadas',
            'Considere agendar o exame oficial'
        ];
    }
    
    return {
        score: score,
        total: saaInitialAssessment.length,
        percentage: Math.round((score / saaInitialAssessment.length) * 100),
        level: level,
        recommendations: recommendations,
        breakdown: {
            basic: basicCorrect,
            intermediate: intermediateCorrect,
            advanced: advancedCorrect
        }
    };
}

window.saaInitialAssessment = saaInitialAssessment;
window.assessSAALevel = assessSAALevel;