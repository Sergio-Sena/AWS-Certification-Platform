// Questões adicionais para completar a distribuição oficial
const additionalQuestions = [
    // DOMAIN 1: DEVELOPMENT (mais questões S3, EC2, Containers, etc.)
    {
        id: 66,
        question: "Para hospedar um site estático no S3 com domínio customizado, qual configuração é necessária?",
        options: [
            "Apenas habilitar Static Website Hosting",
            "S3 + CloudFront + Route 53 + Certificate Manager",
            "S3 + API Gateway + Lambda",
            "S3 + EC2 + Load Balancer"
        ],
        correct: [1],
        explanation: "Para domínio customizado com HTTPS, precisa de CloudFront (CDN), Route 53 (DNS) e Certificate Manager (SSL).",
        topic: "s3"
    },
    {
        id: 67,
        question: "Em ECS Fargate, como definir recursos de CPU e memória?",
        options: [
            "No EC2 instance type",
            "Na Task Definition",
            "No Service configuration",
            "No Cluster settings"
        ],
        correct: [1],
        explanation: "Task Definition especifica CPU e memória para containers no Fargate.",
        topic: "containers"
    },
    {
        id: 68,
        question: "Para uma aplicação que precisa processar mensagens em lote, qual configuração SQS usar?",
        options: [
            "Standard queue com batch size 1",
            "FIFO queue com batch processing",
            "Standard queue com ReceiveMessage batch",
            "SNS com multiple subscribers"
        ],
        correct: [2],
        explanation: "ReceiveMessage permite processar até 10 mensagens por vez, otimizando performance.",
        topic: "messaging"
    },
    {
        id: 69,
        question: "Em Cognito User Pools, como implementar login social (Google, Facebook)?",
        options: [
            "Lambda triggers apenas",
            "Identity Providers configuration",
            "API Gateway integration",
            "Custom authentication flow"
        ],
        correct: [1],
        explanation: "Identity Providers permite configurar login social diretamente no User Pool.",
        topic: "cognito"
    },
    {
        id: 70,
        question: "Para armazenar configurações sensíveis de aplicação, qual serviço usar?",
        options: [
            "S3 bucket privado",
            "DynamoDB table",
            "Systems Manager Parameter Store (SecureString)",
            "Lambda environment variables"
        ],
        correct: [2],
        explanation: "Parameter Store SecureString usa KMS para criptografar dados sensíveis.",
        topic: "systems-manager"
    },

    // DOMAIN 2: SECURITY (mais questões de segurança)
    {
        id: 71,
        question: "Para implementar least privilege em Lambda que acessa múltiplos serviços, qual abordagem usar?",
        options: [
            "Uma policy com todas as permissões",
            "Múltiplas policies específicas por serviço",
            "Usar managed policies apenas",
            "Hardcode credentials no código"
        ],
        correct: [1],
        explanation: "Múltiplas policies específicas seguem o princípio de least privilege.",
        topic: "security"
    },
    {
        id: 72,
        question: "Em S3, como prevenir acesso público acidental a objetos sensíveis?",
        options: [
            "Usar apenas ACLs",
            "Block Public Access settings",
            "Encryption apenas",
            "VPC endpoints apenas"
        ],
        correct: [1],
        explanation: "Block Public Access é uma camada adicional de proteção contra exposição acidental.",
        topic: "security"
    },
    {
        id: 73,
        question: "Para rotação automática de credenciais RDS, qual serviço usar?",
        options: [
            "Lambda scheduled function",
            "AWS Secrets Manager",
            "Parameter Store",
            "CloudFormation"
        ],
        correct: [1],
        explanation: "Secrets Manager oferece rotação automática nativa para credenciais RDS.",
        topic: "security"
    },
    {
        id: 74,
        question: "Como implementar MFA para acesso a recursos AWS via API?",
        options: [
            "STS GetSessionToken com MFA",
            "IAM password policy",
            "Cognito MFA apenas",
            "API Gateway authorizer"
        ],
        correct: [0],
        explanation: "STS GetSessionToken permite obter credenciais temporárias após validação MFA.",
        topic: "security"
    },

    // DOMAIN 3: DEPLOYMENT (mais questões de CI/CD)
    {
        id: 75,
        question: "Em CodePipeline, como implementar deploy condicional baseado em branch?",
        options: [
            "Multiple pipelines",
            "Conditional actions com CloudFormation",
            "Lambda function para decisão",
            "Manual approval sempre"
        ],
        correct: [1],
        explanation: "CloudFormation conditions permitem deploy condicional baseado em parâmetros.",
        topic: "deployment"
    },
    {
        id: 76,
        question: "Para deploy de aplicação containerizada com zero downtime, qual estratégia usar?",
        options: [
            "Rolling update no ECS",
            "Blue/Green deployment",
            "All-at-once replacement",
            "Manual container restart"
        ],
        correct: [1],
        explanation: "Blue/Green deployment garante zero downtime para aplicações containerizadas.",
        topic: "deployment"
    },
    {
        id: 77,
        question: "Em SAM template, como definir diferentes configurações para dev/prod?",
        options: [
            "Separate templates",
            "Parameters e Conditions",
            "Environment variables apenas",
            "Multiple AWS accounts"
        ],
        correct: [1],
        explanation: "Parameters e Conditions no SAM permitem configurações dinâmicas por ambiente.",
        topic: "deployment"
    },

    // DOMAIN 4: TROUBLESHOOTING (mais questões de debugging)
    {
        id: 78,
        question: "Lambda está consumindo mais memória que o esperado. Como investigar?",
        options: [
            "CloudWatch Logs apenas",
            "Lambda Insights + Memory utilization metrics",
            "X-Ray apenas",
            "VPC Flow Logs"
        ],
        correct: [1],
        explanation: "Lambda Insights fornece métricas detalhadas de memória e performance.",
        topic: "monitoring"
    },
    {
        id: 79,
        question: "API Gateway retornando 502 Bad Gateway. Qual é a causa mais provável?",
        options: [
            "Problema no CloudFront",
            "Lambda function timeout ou error",
            "DynamoDB throttling",
            "Route 53 misconfiguration"
        ],
        correct: [1],
        explanation: "502 Bad Gateway geralmente indica problema na função Lambda backend.",
        topic: "monitoring"
    },
    {
        id: 80,
        question: "Para debug de performance em DynamoDB com hot partitions, qual métrica observar?",
        options: [
            "ItemCount apenas",
            "ConsumedReadCapacityUnits por partition",
            "TableSizeBytes",
            "BilledSizeBytes"
        ],
        correct: [1],
        explanation: "ConsumedReadCapacityUnits por partition identifica hot partitions.",
        topic: "monitoring"
    }
];

// Adicionar questões ao banco principal
questionBank.push(...additionalQuestions);