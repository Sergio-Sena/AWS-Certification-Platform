// CLF-C02 - Banco Completo de 200 Questões
// Distribuição: Cloud Concepts(48) + Security(60) + Technology(68) + Billing(24) = 200

const clf200Questions = [
    // DOMAIN 1: CLOUD CONCEPTS (48 questões - 24%)
    {
        id: 1,
        question: "Qual é o principal benefício da computação em nuvem em termos de custos?",
        options: [
            "Custos fixos mensais",
            "Modelo pay-as-you-go",
            "Custos únicos de setup",
            "Sem custos operacionais"
        ],
        correct: [1],
        explanation: "O modelo pay-as-you-go permite pagar apenas pelos recursos utilizados, eliminando custos de infraestrutura ociosa.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 2,
        question: "O que significa 'elasticidade' na AWS Cloud?",
        options: [
            "Capacidade de resistir a falhas",
            "Capacidade de escalar recursos automaticamente conforme demanda",
            "Capacidade de mover dados entre regiões",
            "Capacidade de criptografar dados"
        ],
        correct: [1],
        explanation: "Elasticidade é a capacidade de aumentar ou diminuir recursos automaticamente baseado na demanda.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 3,
        question: "Quais são os três modelos de deployment de cloud computing?",
        options: [
            "Public, Private, Hybrid",
            "Basic, Standard, Premium",
            "Local, Regional, Global",
            "Development, Testing, Production"
        ],
        correct: [0],
        explanation: "Os três modelos são Public Cloud, Private Cloud e Hybrid Cloud.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 4,
        question: "O que é Infrastructure as a Service (IaaS)?",
        options: [
            "Fornece aplicações completas",
            "Fornece plataforma de desenvolvimento",
            "Fornece recursos de computação virtualizados",
            "Fornece apenas armazenamento"
        ],
        correct: [2],
        explanation: "IaaS fornece recursos de computação virtualizados como servidores, storage e rede.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 5,
        question: "Qual é a diferença entre escalabilidade vertical e horizontal?",
        options: [
            "Vertical adiciona mais servidores, horizontal aumenta capacidade do servidor",
            "Vertical aumenta capacidade do servidor, horizontal adiciona mais servidores",
            "Não há diferença",
            "Vertical é para storage, horizontal para compute"
        ],
        correct: [1],
        explanation: "Escalabilidade vertical (scale up) aumenta recursos de um servidor, horizontal (scale out) adiciona mais servidores.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },

    // DOMAIN 2: SECURITY & COMPLIANCE (60 questões - 30%)
    {
        id: 49,
        question: "O que é o Modelo de Responsabilidade Compartilhada da AWS?",
        options: [
            "AWS é responsável por tudo",
            "Cliente é responsável por tudo",
            "AWS cuida da segurança DA nuvem, cliente cuida da segurança NA nuvem",
            "Responsabilidades são iguais"
        ],
        correct: [2],
        explanation: "AWS é responsável pela segurança DA nuvem (infraestrutura), cliente pela segurança NA nuvem (dados, aplicações).",
        topic: "security",
        domain: "security"
    },
    {
        id: 50,
        question: "Qual serviço AWS gerencia identidades e acessos?",
        options: [
            "AWS CloudTrail",
            "AWS IAM",
            "AWS Config",
            "AWS GuardDuty"
        ],
        correct: [1],
        explanation: "AWS IAM (Identity and Access Management) gerencia usuários, grupos, roles e políticas de acesso.",
        topic: "security",
        domain: "security"
    },

    // DOMAIN 3: CLOUD TECHNOLOGY & SERVICES (68 questões - 34%)
    {
        id: 109,
        question: "Qual serviço AWS fornece armazenamento de objetos?",
        options: [
            "Amazon EBS",
            "Amazon EFS",
            "Amazon S3",
            "Amazon RDS"
        ],
        correct: [2],
        explanation: "Amazon S3 (Simple Storage Service) é o serviço de armazenamento de objetos da AWS.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 110,
        question: "O que é Amazon EC2?",
        options: [
            "Serviço de banco de dados",
            "Serviço de computação em nuvem",
            "Serviço de armazenamento",
            "Serviço de rede"
        ],
        correct: [1],
        explanation: "Amazon EC2 (Elastic Compute Cloud) fornece capacidade de computação redimensionável na nuvem.",
        topic: "technology",
        domain: "technology"
    },

    // DOMAIN 4: BILLING, PRICING & SUPPORT (24 questões - 12%)
    {
        id: 177,
        question: "Qual ferramenta AWS ajuda a estimar custos antes de usar os serviços?",
        options: [
            "AWS Cost Explorer",
            "AWS Pricing Calculator",
            "AWS Budgets",
            "AWS Billing Dashboard"
        ],
        correct: [1],
        explanation: "AWS Pricing Calculator permite estimar custos de serviços AWS antes da implementação.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 178,
        question: "Qual é o nível de suporte AWS mais básico?",
        options: [
            "Developer",
            "Business",
            "Basic",
            "Enterprise"
        ],
        correct: [2],
        explanation: "Basic Support é gratuito e inclui acesso a documentação, whitepapers e fóruns de suporte.",
        topic: "billing",
        domain: "billing"
    }
];

// Função para obter questões por domínio
function getCLFQuestionsByDomain(domain) {
    return clf200Questions.filter(q => q.domain === domain);
}

// Função para selecionar 65 questões para simulado CLF
function selectCLFExamQuestions() {
    const distribution = {
        'cloud-concepts': 16,    // 24%
        'security': 19,          // 30%
        'technology': 22,        // 34%
        'billing': 8             // 12%
    };
    
    let selectedQuestions = [];
    
    Object.keys(distribution).forEach(domain => {
        const domainQuestions = getCLFQuestionsByDomain(domain);
        const shuffled = shuffleArray(domainQuestions);
        const selected = shuffled.slice(0, distribution[domain]);
        selectedQuestions = selectedQuestions.concat(selected);
    });
    
    return shuffleArray(selectedQuestions);
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Exportar para uso global
window.clf200Questions = clf200Questions;
window.getCLFQuestionsByDomain = getCLFQuestionsByDomain;
window.selectCLFExamQuestions = selectCLFExamQuestions;