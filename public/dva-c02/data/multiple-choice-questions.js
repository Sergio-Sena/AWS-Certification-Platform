// Questões de múltipla escolha (mais de uma resposta correta)
const multipleChoiceQuestions = [
    {
        id: 201,
        question: "Quais são as formas válidas de triggerar uma função Lambda? (Selecione todas as corretas)",
        options: [
            "S3 bucket events",
            "API Gateway requests", 
            "CloudWatch Events/EventBridge",
            "DynamoDB Streams"
        ],
        correct: [0, 1, 2, 3],
        explanation: "Lambda pode ser triggerada por S3, API Gateway, CloudWatch Events e DynamoDB Streams, entre outros.",
        topic: "lambda"
    },
    {
        id: 202,
        question: "Para implementar segurança em S3, quais recursos podem ser usados? (Selecione todas as corretas)",
        options: [
            "Bucket Policies",
            "IAM Policies",
            "Access Control Lists (ACLs)",
            "Server-Side Encryption"
        ],
        correct: [0, 1, 2, 3],
        explanation: "Todos são recursos válidos para segurança em S3: Bucket Policies, IAM, ACLs e encryption.",
        topic: "security"
    },
    {
        id: 203,
        question: "Quais tipos de deployment são suportados pelo AWS CodeDeploy? (Selecione todas as corretas)",
        options: [
            "Blue/Green deployment",
            "Rolling deployment", 
            "All-at-once deployment",
            "Canary deployment"
        ],
        correct: [0, 1, 2],
        explanation: "CodeDeploy suporta Blue/Green, Rolling e All-at-once. Canary é específico do Lambda.",
        topic: "deployment"
    },
    {
        id: 204,
        question: "Para monitorar performance de Lambda, quais métricas CloudWatch observar? (Selecione todas as corretas)",
        options: [
            "Duration",
            "Memory Utilization",
            "Error Rate",
            "Throttles"
        ],
        correct: [0, 1, 2, 3],
        explanation: "Todas são métricas importantes: Duration, Memory, Error Rate e Throttles.",
        topic: "monitoring"
    },
    {
        id: 205,
        question: "Quais são os modos de capacidade disponíveis no DynamoDB? (Selecione todas as corretas)",
        options: [
            "On-Demand",
            "Provisioned",
            "Auto Scaling",
            "Reserved Capacity"
        ],
        correct: [0, 1],
        explanation: "DynamoDB oferece On-Demand e Provisioned capacity modes. Auto Scaling é feature do Provisioned.",
        topic: "dynamodb"
    },
    {
        id: 206,
        question: "Para implementar CORS em API Gateway, quais headers devem ser configurados? (Selecione todas as corretas)",
        options: [
            "Access-Control-Allow-Origin",
            "Access-Control-Allow-Methods",
            "Access-Control-Allow-Headers",
            "Access-Control-Max-Age"
        ],
        correct: [0, 1, 2, 3],
        explanation: "Todos os headers são necessários para CORS completo no API Gateway.",
        topic: "apigateway"
    },
    {
        id: 207,
        question: "Quais serviços podem ser usados para armazenar secrets de forma segura? (Selecione todas as corretas)",
        options: [
            "AWS Secrets Manager",
            "Systems Manager Parameter Store",
            "Environment Variables (encrypted)",
            "S3 com encryption"
        ],
        correct: [0, 1],
        explanation: "Secrets Manager e Parameter Store são projetados para secrets. Env vars e S3 não são ideais.",
        topic: "security"
    },
    {
        id: 208,
        question: "Para implementar CI/CD, quais serviços AWS podem ser combinados? (Selecione todas as corretas)",
        options: [
            "CodeCommit",
            "CodeBuild", 
            "CodeDeploy",
            "CodePipeline"
        ],
        correct: [0, 1, 2, 3],
        explanation: "Todos fazem parte da suíte AWS Developer Tools para CI/CD completo.",
        topic: "deployment"
    },
    {
        id: 209,
        question: "Quais tipos de logs podem ser enviados para CloudWatch Logs? (Selecione todas as corretas)",
        options: [
            "Application logs",
            "System logs",
            "Access logs",
            "Error logs"
        ],
        correct: [0, 1, 2, 3],
        explanation: "CloudWatch Logs aceita qualquer tipo de log: application, system, access e error logs.",
        topic: "monitoring"
    },
    {
        id: 210,
        question: "Para otimizar custos de Lambda, quais estratégias podem ser usadas? (Selecione todas as corretas)",
        options: [
            "Otimizar memory allocation",
            "Reduzir execution time",
            "Usar Provisioned Concurrency apenas quando necessário",
            "Implementar connection pooling"
        ],
        correct: [0, 1, 2, 3],
        explanation: "Todas são estratégias válidas para otimização de custos em Lambda.",
        topic: "monitoring"
    },
    {
        id: 211,
        question: "Quais são os componentes principais do Amazon ECS? (Selecione todas as corretas)",
        options: [
            "Cluster",
            "Task Definition",
            "Service",
            "Container Instance"
        ],
        correct: [0, 1, 2, 3],
        explanation: "Todos são componentes essenciais do ECS: Cluster, Task Definition, Service e Container Instance.",
        topic: "containers"
    },
    {
        id: 212,
        question: "Para implementar autenticação em aplicações web, quais serviços Cognito podem ser usados? (Selecione todas as corretas)",
        options: [
            "User Pools",
            "Identity Pools",
            "Federated Identities",
            "Social Identity Providers"
        ],
        correct: [0, 1, 2, 3],
        explanation: "Todos são recursos do Cognito para autenticação: User Pools, Identity Pools, Federation e Social.",
        topic: "cognito"
    },
    {
        id: 213,
        question: "Quais são as classes de armazenamento S3 para dados de acesso infrequente? (Selecione todas as corretas)",
        options: [
            "Standard-IA",
            "One Zone-IA",
            "Glacier",
            "Glacier Deep Archive"
        ],
        correct: [0, 1, 2, 3],
        explanation: "Todas são classes para acesso infrequente: Standard-IA, One Zone-IA, Glacier e Deep Archive.",
        topic: "s3"
    },
    {
        id: 214,
        question: "Para implementar high availability em EC2, quais recursos podem ser usados? (Selecione todas as corretas)",
        options: [
            "Multiple Availability Zones",
            "Auto Scaling Groups",
            "Elastic Load Balancer",
            "Health Checks"
        ],
        correct: [0, 1, 2, 3],
        explanation: "Todos contribuem para HA: Multi-AZ, Auto Scaling, Load Balancer e Health Checks.",
        topic: "ec2"
    },
    {
        id: 215,
        question: "Quais são os tipos de queue disponíveis no Amazon SQS? (Selecione todas as corretas)",
        options: [
            "Standard Queue",
            "FIFO Queue",
            "Priority Queue",
            "Delay Queue"
        ],
        correct: [0, 1],
        explanation: "SQS oferece Standard e FIFO queues. Priority e Delay são features, não tipos separados.",
        topic: "messaging"
    },
    {
        id: 216,
        question: "Para debug de aplicações distribuídas, quais ferramentas AWS podem ser usadas? (Selecione todas as corretas)",
        options: [
            "AWS X-Ray",
            "CloudWatch Logs",
            "CloudWatch Insights",
            "AWS CloudTrail"
        ],
        correct: [0, 1, 2, 3],
        explanation: "Todas são úteis para debug: X-Ray para tracing, Logs para detalhes, Insights para queries, CloudTrail para auditoria.",
        topic: "monitoring"
    },
    {
        id: 217,
        question: "Quais são os benefícios do AWS Systems Manager? (Selecione todas as corretas)",
        options: [
            "Centralized configuration management",
            "Automated patching",
            "Remote command execution",
            "Session management"
        ],
        correct: [0, 1, 2, 3],
        explanation: "Systems Manager oferece todos esses benefícios: config management, patching, remote commands e sessions.",
        topic: "systems-manager"
    },
    {
        id: 218,
        question: "Para implementar disaster recovery, quais estratégias podem ser usadas? (Selecione todas as corretas)",
        options: [
            "Multi-region deployment",
            "Automated backups",
            "Cross-region replication",
            "Infrastructure as Code"
        ],
        correct: [0, 1, 2, 3],
        explanation: "Todas são estratégias válidas para DR: multi-region, backups, replication e IaC.",
        topic: "deployment"
    },
    {
        id: 219,
        question: "Quais são os tipos de encryption suportados pelo DynamoDB? (Selecione todas as corretas)",
        options: [
            "Encryption at rest",
            "Encryption in transit",
            "Client-side encryption",
            "Field-level encryption"
        ],
        correct: [0, 1, 2],
        explanation: "DynamoDB suporta encryption at rest, in transit e client-side. Field-level é específico do CloudFront.",
        topic: "security"
    },
    {
        id: 220,
        question: "Para otimizar performance de API Gateway, quais técnicas podem ser aplicadas? (Selecione todas as corretas)",
        options: [
            "Enable caching",
            "Use CloudFront",
            "Optimize backend services",
            "Implement request/response compression"
        ],
        correct: [0, 1, 2, 3],
        explanation: "Todas otimizam performance: caching, CloudFront, backend optimization e compression.",
        topic: "apigateway"
    }
];

// Adicionar ao banco principal
questionBank.push(...multipleChoiceQuestions);