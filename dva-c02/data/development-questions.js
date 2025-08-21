// DOMAIN 1: DEVELOPMENT WITH AWS SERVICES - Questões 16-64 (49 questões restantes)

const developmentQuestions = [
    {
        id: 16,
        question: "Em DynamoDB, qual é a diferença entre GSI e LSI?",
        options: [
            "GSI é mais rápido que LSI",
            "LSI permite diferentes partition keys",
            "GSI pode ser criado após criação da tabela",
            "LSI tem mais capacidade de throughput"
        ],
        correct: [2],
        explanation: "GSI pode ser criado a qualquer momento, LSI deve ser criado junto com a tabela.",
        topic: "dynamodb",
        domain: "development"
    },
    {
        id: 17,
        question: "Para uma função Lambda que processa arquivos grandes, qual estratégia usar?",
        options: [
            "Aumentar memória para 10GB",
            "Usar Step Functions para orquestração",
            "Processar tudo em uma execução",
            "Usar EC2 em vez de Lambda"
        ],
        correct: [1],
        explanation: "Step Functions permite quebrar processamento em etapas menores e orquestrar o workflow.",
        topic: "lambda",
        domain: "development"
    },
    {
        id: 18,
        question: "Para uma API que retorna dados em tempo real, qual padrão usar?",
        options: [
            "REST API com polling",
            "WebSocket API",
            "GraphQL",
            "gRPC"
        ],
        correct: [1],
        explanation: "WebSocket API permite comunicação bidirecional em tempo real.",
        topic: "apigateway",
        domain: "development"
    },
    {
        id: 19,
        question: "Qual é o limite de concorrência padrão para Lambda por região?",
        options: [
            "100",
            "500",
            "1000",
            "10000"
        ],
        correct: [2],
        explanation: "Lambda tem limite padrão de 1000 execuções concorrentes por região (pode ser aumentado).",
        topic: "lambda",
        domain: "development"
    },
    {
        id: 20,
        question: "Uma aplicação Lambda está recebendo erro 'Unable to import module'. Qual é a causa mais provável?",
        options: [
            "Timeout da função",
            "Falta de permissões IAM",
            "Dependência não incluída no deployment package",
            "Cold start muito longo"
        ],
        correct: [2],
        explanation: "Erro de import geralmente indica que uma dependência/biblioteca não foi incluída no package de deployment.",
        topic: "lambda",
        domain: "development"
    },
    {
        id: 21,
        question: "Para implementar circuit breaker pattern em serverless, qual abordagem usar?",
        options: [
            "Lambda com DLQ",
            "Step Functions com retry logic",
            "API Gateway com throttling",
            "SQS com visibility timeout"
        ],
        correct: [1],
        explanation: "Step Functions permite implementar circuit breaker com retry logic e error handling avançado.",
        topic: "lambda",
        domain: "development"
    },
    {
        id: 22,
        question: "Em DynamoDB, quando usar Eventually Consistent vs Strongly Consistent reads?",
        options: [
            "Sempre usar Strongly Consistent",
            "Eventually Consistent para performance, Strongly para precisão crítica",
            "Strongly Consistent é sempre mais barato",
            "Eventually Consistent apenas para GSI"
        ],
        correct: [1],
        explanation: "Eventually Consistent é mais rápido e barato, Strongly Consistent garante dados mais recentes.",
        topic: "dynamodb",
        domain: "development"
    },
    {
        id: 23,
        question: "Para uma API com autenticação JWT customizada, qual recurso do API Gateway usar?",
        options: [
            "IAM authentication",
            "Cognito User Pools",
            "Lambda Authorizer",
            "API Keys"
        ],
        correct: [2],
        explanation: "Lambda Authorizer permite lógica de autenticação customizada, incluindo validação de JWT.",
        topic: "apigateway",
        domain: "development"
    },
    {
        id: 24,
        question: "Qual é a melhor estratégia para lidar com DynamoDB hot partitions?",
        options: [
            "Aumentar RCU/WCU",
            "Usar composite keys para distribuir carga",
            "Criar mais GSIs",
            "Usar DAX"
        ],
        correct: [1],
        explanation: "Composite keys (partition + sort key) ajudam a distribuir a carga entre partições.",
        topic: "dynamodb",
        domain: "development"
    },
    {
        id: 25,
        question: "Para uma aplicação que precisa processar eventos em ordem, qual serviço usar?",
        options: [
            "SQS Standard",
            "SQS FIFO",
            "SNS",
            "EventBridge"
        ],
        correct: [1],
        explanation: "SQS FIFO garante ordem de processamento (First In, First Out).",
        topic: "lambda",
        domain: "development"
    },
    {
        id: 26,
        question: "Qual é o tamanho máximo do deployment package para Lambda?",
        options: [
            "50 MB (zipped)",
            "250 MB (unzipped)",
            "10 GB (com layers)",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Lambda tem limites: 50MB zipped, 250MB unzipped, 10GB total com layers.",
        topic: "lambda",
        domain: "development"
    },
    {
        id: 27,
        question: "Para cache de sessão em aplicação serverless, qual solução usar?",
        options: [
            "Lambda memory",
            "DynamoDB",
            "ElastiCache Redis",
            "S3"
        ],
        correct: [2],
        explanation: "ElastiCache Redis é ideal para cache de sessão com TTL e alta performance.",
        topic: "lambda",
        domain: "development"
    },
    {
        id: 28,
        question: "Em API Gateway, como implementar request validation?",
        options: [
            "Lambda function validation",
            "Request Validators com JSON Schema",
            "CloudFront validation",
            "WAF rules"
        ],
        correct: [1],
        explanation: "Request Validators com JSON Schema validam requests antes de chegar ao backend.",
        topic: "apigateway",
        domain: "development"
    },
    {
        id: 29,
        question: "Qual é a diferença entre Reserved e Provisioned Concurrency no Lambda?",
        options: [
            "Reserved limita, Provisioned garante",
            "São a mesma coisa",
            "Reserved é mais caro",
            "Provisioned é apenas para VPC"
        ],
        correct: [0],
        explanation: "Reserved Concurrency limita execuções, Provisioned garante instâncias sempre prontas.",
        topic: "lambda",
        domain: "development"
    },
    {
        id: 30,
        question: "Para backup automático de DynamoDB, qual recurso usar?",
        options: [
            "Manual snapshots",
            "Point-in-time Recovery",
            "DynamoDB Streams",
            "Lambda scheduled backup"
        ],
        correct: [1],
        explanation: "Point-in-time Recovery permite backup contínuo e restore para qualquer momento.",
        topic: "dynamodb",
        domain: "development"
    }
];

// Exportar questões de desenvolvimento
window.developmentQuestions = developmentQuestions;