// DOMAIN 2: SECURITY - 52 questões completas (26%)

const securityQuestions = [
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
    {
        id: 69,
        question: "Em uma policy IAM, qual condition key usar para restringir acesso por IP?",
        options: [
            "aws:SourceIp",
            "aws:RequestedRegion",
            "aws:userid",
            "aws:TokenIssueTime"
        ],
        correct: [0],
        explanation: "aws:SourceIp permite restringir acesso baseado no endereço IP de origem.",
        topic: "security",
        domain: "security"
    },
    {
        id: 70,
        question: "Qual é a melhor prática para gerenciar secrets em aplicações serverless?",
        options: [
            "Environment variables",
            "Hardcode no código",
            "AWS Secrets Manager",
            "S3 bucket privado"
        ],
        correct: [2],
        explanation: "AWS Secrets Manager oferece rotação automática e criptografia de secrets.",
        topic: "security",
        domain: "security"
    },
    {
        id: 71,
        question: "Para implementar rate limiting por usuário em API Gateway, qual abordagem usar?",
        options: [
            "Lambda authorizer com DynamoDB",
            "Usage Plans com API Keys",
            "CloudFront rate limiting",
            "WAF rate limiting"
        ],
        correct: [0],
        explanation: "Lambda authorizer com DynamoDB permite rate limiting granular por usuário.",
        topic: "security",
        domain: "security"
    },
    {
        id: 72,
        question: "Qual é a melhor forma de lidar com secrets rotation em Lambda?",
        options: [
            "Manual update",
            "Secrets Manager automatic rotation",
            "Environment variables update",
            "Parameter Store manual update"
        ],
        correct: [1],
        explanation: "Secrets Manager oferece rotação automática de credenciais.",
        topic: "security",
        domain: "security"
    },
    {
        id: 73,
        question: "Para criptografia de dados em trânsito no DynamoDB, qual protocolo é usado?",
        options: [
            "HTTP",
            "HTTPS/TLS",
            "SSH",
            "VPN"
        ],
        correct: [1],
        explanation: "DynamoDB usa HTTPS/TLS para criptografia de dados em trânsito.",
        topic: "security",
        domain: "security"
    },
    {
        id: 74,
        question: "Qual serviço AWS fornece chaves de criptografia gerenciadas?",
        options: [
            "IAM",
            "AWS KMS",
            "Secrets Manager",
            "Parameter Store"
        ],
        correct: [1],
        explanation: "AWS KMS (Key Management Service) gerencia chaves de criptografia.",
        topic: "security",
        domain: "security"
    },
    {
        id: 75,
        question: "Para implementar MFA em uma aplicação web, qual serviço AWS usar?",
        options: [
            "IAM Users",
            "AWS Cognito",
            "API Gateway",
            "Lambda Authorizer"
        ],
        correct: [1],
        explanation: "AWS Cognito oferece MFA integrado para aplicações web e mobile.",
        topic: "security",
        domain: "security"
    },
    {
        id: 76,
        question: "Qual é o princípio de segurança mais importante no IAM?",
        options: [
            "Allow by default",
            "Least privilege",
            "Maximum permissions",
            "Open access"
        ],
        correct: [1],
        explanation: "Least privilege garante que usuários tenham apenas as permissões mínimas necessárias.",
        topic: "security",
        domain: "security"
    },
    {
        id: 77,
        question: "Para proteger uma API contra ataques DDoS, qual serviço usar?",
        options: [
            "CloudFront",
            "AWS Shield",
            "WAF",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "CloudFront, Shield e WAF trabalham juntos para proteção contra DDoS.",
        topic: "security",
        domain: "security"
    },
    {
        id: 78,
        question: "Em S3, qual é a diferença entre bucket policy e ACL?",
        options: [
            "Não há diferença",
            "Bucket policy é mais granular",
            "ACL é mais moderno",
            "Bucket policy é legacy"
        ],
        correct: [1],
        explanation: "Bucket policies oferecem controle mais granular que ACLs (que são legacy).",
        topic: "security",
        domain: "security"
    },
    {
        id: 79,
        question: "Para auditoria de mudanças em recursos AWS, qual serviço usar?",
        options: [
            "CloudTrail",
            "AWS Config",
            "CloudWatch",
            "X-Ray"
        ],
        correct: [1],
        explanation: "AWS Config monitora e audita mudanças na configuração de recursos.",
        topic: "security",
        domain: "security"
    },
    {
        id: 80,
        question: "Qual tipo de criptografia o S3 usa por padrão?",
        options: [
            "SSE-S3",
            "SSE-KMS",
            "SSE-C",
            "Nenhuma"
        ],
        correct: [0],
        explanation: "S3 usa SSE-S3 (Server-Side Encryption with S3-Managed Keys) por padrão.",
        topic: "security",
        domain: "security"
    },
    {
        id: 81,
        question: "Para implementar cross-account access, qual recurso IAM usar?",
        options: [
            "IAM Users",
            "IAM Groups",
            "IAM Roles",
            "IAM Policies"
        ],
        correct: [2],
        explanation: "IAM Roles permitem acesso cross-account de forma segura.",
        topic: "security",
        domain: "security"
    },
    {
        id: 82,
        question: "Qual é a melhor prática para armazenar API keys em Lambda?",
        options: [
            "Hardcode no código",
            "Environment variables",
            "Parameter Store (encrypted)",
            "S3 bucket"
        ],
        correct: [2],
        explanation: "Parameter Store com criptografia é a melhor prática para API keys.",
        topic: "security",
        domain: "security"
    },
    {
        id: 83,
        question: "Para monitorar tentativas de login suspeitas, qual serviço usar?",
        options: [
            "CloudTrail",
            "GuardDuty",
            "Inspector",
            "Macie"
        ],
        correct: [1],
        explanation: "GuardDuty detecta atividades maliciosas e tentativas de acesso suspeitas.",
        topic: "security",
        domain: "security"
    },
    {
        id: 84,
        question: "Em DynamoDB, como implementar fine-grained access control?",
        options: [
            "Table-level permissions apenas",
            "IAM policies com condition keys",
            "Bucket policies",
            "Security groups"
        ],
        correct: [1],
        explanation: "IAM policies com condition keys permitem controle granular por item/atributo.",
        topic: "security",
        domain: "security"
    },
    {
        id: 85,
        question: "Para proteger dados sensíveis em logs, qual prática seguir?",
        options: [
            "Logar tudo para debug",
            "Mascarar ou omitir dados sensíveis",
            "Usar apenas CloudWatch",
            "Desabilitar logs"
        ],
        correct: [1],
        explanation: "Dados sensíveis devem ser mascarados ou omitidos dos logs.",
        topic: "security",
        domain: "security"
    }
];

// Exportar questões de segurança
window.securityQuestions = securityQuestions;