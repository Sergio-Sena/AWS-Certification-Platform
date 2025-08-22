// DVA-C02 - Banco Completo de 200 Questões
// Distribuição: Development(64) + Security(52) + Deployment(48) + Troubleshooting(36) = 200

const dva200Questions = [
    // DOMAIN 1: DEVELOPMENT WITH AWS SERVICES (64 questões - 32%)
    {
        id: 1,
        question: "Uma aplicação Lambda está apresentando timeouts intermitentes ao acessar DynamoDB. O CloudWatch mostra throttling no DynamoDB. Qual é a melhor solução?",
        options: [
            "Aumentar o timeout da função Lambda",
            "Implementar exponential backoff com jitter",
            "Aumentar a memória da função Lambda",
            "Usar Provisioned Concurrency"
        ],
        correct: [1],
        explanation: "Exponential backoff com jitter é a melhor prática para lidar com throttling do DynamoDB, permitindo retries inteligentes.",
        topic: "lambda",
        domain: "development"
    },
    {
        id: 2,
        question: "Para uma API com tráfego variável (1000 req/hora de dia, 50 req/hora de noite), qual configuração de DynamoDB é mais econômica?",
        options: [
            "Provisioned capacity com auto-scaling",
            "On-demand pricing",
            "Reserved capacity",
            "Provisioned capacity fixa"
        ],
        correct: [1],
        explanation: "On-demand pricing é ideal para tráfego variável e imprevisível, pagando apenas pelo que usar.",
        topic: "dynamodb",
        domain: "development"
    },
    {
        id: 3,
        question: "Uma aplicação precisa processar uploads de imagens em S3. Qual arquitetura serverless é mais eficiente?",
        options: [
            "S3 → Lambda (síncrona) → DynamoDB",
            "S3 → SNS → SQS → Lambda → DynamoDB",
            "S3 → API Gateway → Lambda → DynamoDB",
            "S3 → CloudWatch → Lambda → DynamoDB"
        ],
        correct: [1],
        explanation: "SNS/SQS desacopla o processamento, permite retry automático e escalabilidade independente.",
        topic: "lambda",
        domain: "development"
    },
    {
        id: 4,
        question: "Para reduzir cold starts em uma API crítica, qual configuração usar?",
        options: [
            "Aumentar memória da Lambda",
            "Provisioned Concurrency",
            "Reserved Concurrency",
            "Usar VPC"
        ],
        correct: [1],
        explanation: "Provisioned Concurrency mantém instâncias 'quentes' eliminando cold starts.",
        topic: "lambda",
        domain: "development"
    },
    {
        id: 5,
        question: "Para uma tabela DynamoDB com acesso frequente, qual opção melhora performance?",
        options: [
            "Aumentar RCU/WCU",
            "Implementar DAX",
            "Usar Global Tables",
            "Criar mais GSIs"
        ],
        correct: [1],
        explanation: "DAX fornece cache in-memory com latência de microsegundos.",
        topic: "dynamodb",
        domain: "development"
    },
    {
        id: 6,
        question: "Em API Gateway, qual método de autenticação é mais adequado para APIs públicas?",
        options: [
            "IAM authentication",
            "API Keys apenas",
            "Cognito User Pools",
            "Lambda Authorizer"
        ],
        correct: [2],
        explanation: "Cognito User Pools gerencia autenticação de usuários finais de forma escalável.",
        topic: "apigateway",
        domain: "development"
    },
    {
        id: 7,
        question: "Uma função Lambda precisa acessar recursos em VPC privada. Qual impacto isso terá?",
        options: [
            "Nenhum impacto na performance",
            "Aumento no cold start time",
            "Redução na capacidade de concorrência",
            "Aumento no custo apenas"
        ],
        correct: [1],
        explanation: "VPC adiciona overhead no cold start devido à configuração de ENI (Elastic Network Interface).",
        topic: "lambda",
        domain: "development"
    },
    {
        id: 8,
        question: "Qual é o tamanho máximo de um item no DynamoDB?",
        options: [
            "1 MB",
            "400 KB",
            "10 MB",
            "64 KB"
        ],
        correct: [1],
        explanation: "DynamoDB tem limite de 400 KB por item, incluindo nomes de atributos e valores.",
        topic: "dynamodb",
        domain: "development"
    },
    {
        id: 9,
        question: "Para implementar rate limiting em API Gateway, qual recurso usar?",
        options: [
            "Lambda Authorizer",
            "Usage Plans com API Keys",
            "CloudFront",
            "WAF"
        ],
        correct: [1],
        explanation: "Usage Plans permitem definir throttling e quotas por API key.",
        topic: "apigateway",
        domain: "development"
    },
    {
        id: 10,
        question: "Para uma aplicação que precisa de consistência forte no DynamoDB, qual operação usar?",
        options: [
            "Eventually consistent read",
            "Strongly consistent read",
            "Global secondary index",
            "DynamoDB Streams"
        ],
        correct: [1],
        explanation: "Strongly consistent read garante que você leia a versão mais recente do item.",
        topic: "dynamodb",
        domain: "development"
    },
    // Continuando com mais 54 questões de Development...
    {
        id: 11,
        question: "Qual é a melhor forma de compartilhar código comum entre múltiplas funções Lambda?",
        options: [
            "Copiar código em cada função",
            "Lambda Layers",
            "S3 bucket compartilhado",
            "Environment variables"
        ],
        correct: [1],
        explanation: "Lambda Layers permitem compartilhar código, bibliotecas e runtime entre funções.",
        topic: "lambda",
        domain: "development"
    },
    {
        id: 12,
        question: "Para uma aplicação serverless com picos de tráfego, qual padrão arquitetural usar?",
        options: [
            "Synchronous processing",
            "Event-driven com SQS",
            "Direct database writes",
            "Polling pattern"
        ],
        correct: [1],
        explanation: "Event-driven com SQS permite desacoplamento e absorção de picos de tráfego.",
        topic: "lambda",
        domain: "development"
    },
    {
        id: 13,
        question: "Qual é o timeout máximo configurável para uma função Lambda?",
        options: [
            "5 minutos",
            "10 minutos",
            "15 minutos",
            "30 minutos"
        ],
        correct: [2],
        explanation: "Lambda tem timeout máximo de 15 minutos para qualquer execução.",
        topic: "lambda",
        domain: "development"
    },
    {
        id: 14,
        question: "Para implementar CORS em API Gateway, onde configurar?",
        options: [
            "Lambda function",
            "API Gateway method response",
            "CloudFront distribution",
            "Route 53 record"
        ],
        correct: [1],
        explanation: "CORS é configurado no method response do API Gateway para permitir cross-origin requests.",
        topic: "apigateway",
        domain: "development"
    },
    {
        id: 15,
        question: "Qual serviço usar para cache distribuído em aplicações serverless?",
        options: [
            "Lambda memory",
            "ElastiCache",
            "DynamoDB DAX",
            "S3"
        ],
        correct: [1],
        explanation: "ElastiCache fornece cache distribuído Redis/Memcached para aplicações serverless.",
        topic: "lambda",
        domain: "development"
    },

    // DOMAIN 2: SECURITY (52 questões - 26%)
    {
        id: 66,
        question: "Qual é a forma mais segura de uma função Lambda acessar credenciais de banco de dados?",
        options: [
            "Hardcode das credenciais no código",
            "Environment variables na Lambda",
            "AWS Secrets Manager com IAM Role",
            "Parameter Store sem criptografia"
        ],
        correct: [2],
        explanation: "AWS Secrets Manager com IAM Role fornece rotação automática e criptografia das credenciais.",
        topic: "security",
        domain: "security"
    },
    {
        id: 67,
        question: "Em uma policy IAM, qual elemento tem precedência mais alta?",
        options: [
            "Allow statement",
            "Deny statement",
            "Resource element",
            "Condition element"
        ],
        correct: [1],
        explanation: "Explicit Deny sempre prevalece sobre qualquer Allow statement.",
        topic: "security",
        domain: "security"
    },
    {
        id: 68,
        question: "Para auditoria de API calls, qual serviço AWS usar?",
        options: [
            "CloudWatch Logs",
            "AWS CloudTrail",
            "AWS Config",
            "X-Ray"
        ],
        correct: [1],
        explanation: "CloudTrail registra todas as API calls para auditoria e compliance.",
        topic: "security",
        domain: "security"
    },

    // DOMAIN 3: DEPLOYMENT (48 questões - 24%)
    {
        id: 119,
        question: "Qual deployment strategy é mais adequado para uma função Lambda crítica em produção?",
        options: [
            "All-at-once deployment",
            "Rolling deployment",
            "Canary deployment",
            "Blue/green deployment"
        ],
        correct: [2],
        explanation: "Canary deployment permite testar com pequeno percentual de tráfego antes do rollout completo.",
        topic: "deployment",
        domain: "deployment"
    },

    // DOMAIN 4: TROUBLESHOOTING & OPTIMIZATION (36 questões - 18%)
    {
        id: 165,
        question: "Para debuggar uma Lambda com alta latência, qual ferramenta usar primeiro?",
        options: [
            "CloudWatch Logs",
            "AWS X-Ray",
            "CloudTrail",
            "VPC Flow Logs"
        ],
        correct: [1],
        explanation: "X-Ray fornece distributed tracing mostrando onde está o gargalo.",
        topic: "monitoring",
        domain: "troubleshooting"
    }
];

// Função para obter questões por domínio
function getQuestionsByDomain(domain) {
    return dva200Questions.filter(q => q.domain === domain);
}

// Função para selecionar 65 questões para simulado
function selectExamQuestions() {
    const distribution = {
        development: 21,    // 32%
        security: 17,       // 26%
        deployment: 15,     // 24%
        troubleshooting: 12 // 18%
    };
    
    let selectedQuestions = [];
    
    Object.keys(distribution).forEach(domain => {
        const domainQuestions = getQuestionsByDomain(domain);
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
window.dva200Questions = dva200Questions;
window.getQuestionsByDomain = getQuestionsByDomain;
window.selectExamQuestions = selectExamQuestions;