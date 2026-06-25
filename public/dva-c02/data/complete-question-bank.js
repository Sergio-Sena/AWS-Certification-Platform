// Completando banco para 200 questões conforme solicitado
const moreQuestions = [
    // DOMAIN 1: DEVELOPMENT - Questões 81-140 (60 questões)
    {
        id: 81,
        question: "Para uma aplicação Lambda que precisa acessar RDS, qual é a melhor prática de connection pooling?",
        options: [
            "Usar RDS Proxy",
            "Criar nova conexão a cada invocação",
            "Connection pooling na Lambda",
            "Usar DynamoDB em vez de RDS"
        ],
        correct: [0],
        explanation: "✅ RDS Proxy gerencia connection pooling automaticamente, otimizando conexões para Lambda.",
        topic: "lambda"
    },
    {
        id: 82,
        question: "Em S3, qual classe de armazenamento é mais econômica para dados acessados raramente?",
        options: [
            "Standard",
            "Standard-IA",
            "Glacier Deep Archive",
            "Intelligent-Tiering"
        ],
        correct: [2],
        explanation: "✅ Glacier Deep Archive é a opção mais barata para dados raramente acessados.",
        topic: "s3"
    },
    {
        id: 83,
        question: "Para processar streams do DynamoDB, qual serviço usar?",
        options: [
            "Kinesis Data Streams",
            "SNS",
            "SQS",
            "Lambda com DynamoDB Streams",
        ],
        correct: [3],
        explanation: "✅ Lambda pode processar DynamoDB Streams automaticamente para reagir a mudanças.",
        topic: "dynamodb"
    },
    {
        id: 84,
        question: "Em API Gateway, como implementar throttling personalizado?",
        options: [
            "CloudFront rate limiting",
            "Usage Plans com diferentes tiers",
            "Lambda authorizer",
            "WAF rules"
        ],
        correct: [1],
        explanation: "✅ Usage Plans permitem definir diferentes limites de throttling por tier de cliente.",
        topic: "apigateway"
    },
    {
        id: 85,
        question: "Para uma aplicação que precisa de processamento em lote, qual serviço usar?",
        options: [
            "AWS Batch",
            "Lambda apenas",
            "EC2 Spot Instances",
            "ECS Tasks"
        ],
        correct: [0],
        explanation: "✅ AWS Batch é otimizado para workloads de processamento em lote.",
        topic: "ec2"
    },
    {
        id: 86,
        question: "Em ECS, qual é a diferença entre Task e Service?",
        options: [
            "Task apenas para Fargate",
            "Service é mais barato que Task",
            "Task é temporário, Service mantém estado desejado",
            "Não há diferença"
        ],
        correct: [2],
        explanation: "✅ Service garante que o número desejado de Tasks esteja sempre rodando.",
        topic: "containers"
    },
    {
        id: 87,
        question: "Para implementar pub/sub com filtros de mensagem, qual configuração SNS usar?",
        options: [
            "Multiple topics",
            "SQS filtering",
            "Lambda function filtering",
            "Message filtering com attributes",
        ],
        correct: [3],
        explanation: "✅ SNS message filtering permite subscribers receberem apenas mensagens relevantes.",
        topic: "messaging"
    },
    {
        id: 88,
        question: "Em Cognito, como implementar login customizado com logo da empresa?",
        options: [
            "Lambda triggers apenas",
            "Hosted UI customization",
            "API Gateway custom domain",
            "CloudFront customization"
        ],
        correct: [1],
        explanation: "✅ Hosted UI permite customizar aparência do login incluindo logo e cores.",
        topic: "cognito"
    },
    {
        id: 89,
        question: "Para automação de patches em EC2, qual serviço Systems Manager usar?",
        options: [
            "Patch Manager",
            "Parameter Store",
            "Session Manager",
            "Run Command"
        ],
        correct: [0],
        explanation: "✅ Patch Manager automatiza instalação de patches em instâncias EC2.",
        topic: "systems-manager"
    },
    {
        id: 90,
        question: "Lambda está retornando erro de memória. Qual é a primeira ação?",
        options: [
            "Aumentar timeout",
            "Usar Provisioned Concurrency",
            "Aumentar memória alocada",
            "Migrar para EC2"
        ],
        correct: [2],
        explanation: "✅ Erro de memória indica necessidade de aumentar memória alocada para a função.",
        topic: "lambda"
    },
    {
        id: 91,
        question: "Para backup cross-region de S3, qual recurso usar?",
        options: [
            "CloudFormation",
            "Lambda scheduled backup",
            "AWS Backup",
            "S3 Cross-Region Replication",
        ],
        correct: [3],
        explanation: "✅ S3 Cross-Region Replication replica objetos automaticamente entre regiões.",
        topic: "s3"
    },
    {
        id: 92,
        question: "Em DynamoDB, como implementar contadores atômicos?",
        options: [
            "PutItem com increment",
            "UpdateItem com ADD action",
            "GetItem + PutItem",
            "Scan + Update"
        ],
        correct: [1],
        explanation: "✅ UpdateItem com ADD action incrementa valores atomicamente.",
        topic: "dynamodb"
    },
    {
        id: 93,
        question: "Para uma API que precisa de versionamento, qual estratégia usar no API Gateway?",
        options: [
            "Path-based versioning",
            "Stage variables",
            "Multiple APIs",
            "Header-based versioning"
        ],
        correct: [0],
        explanation: "✅ Path-based versioning (/v1/, /v2/) é a abordagem mais clara para versionamento.",
        topic: "apigateway"
    },
    {
        id: 94,
        question: "Para uma aplicação web que precisa servir conteúdo global, qual arquitetura usar?",
        options: [
            "Lambda@Edge apenas",
            "EC2 em múltiplas regiões",
            "S3 + CloudFront + Route 53",
            "API Gateway global"
        ],
        correct: [2],
        explanation: "✅ S3 + CloudFront + Route 53 oferece distribuição global otimizada para conteúdo web.",
        topic: "s3"
    },
    {
        id: 95,
        question: "Em EC2, qual é a diferença entre Stop e Terminate?",
        options: [
            "Não há diferença",
            "Terminate é mais barato",
            "Stop apenas para Spot Instances",
            "Stop preserva EBS, Terminate deleta tudo",
        ],
        correct: [3],
        explanation: "✅ Stop preserva volumes EBS, Terminate deleta a instância e volumes não-persistentes.",
        topic: "ec2"
    },
    {
        id: 96,
        question: "Para deploy de containers com secrets, como injetar credenciais seguramente?",
        options: [
            "Environment variables no Dockerfile",
            "Secrets Manager + IAM roles",
            "Hardcode no image",
            "ConfigMap apenas"
        ],
        correct: [1],
        explanation: "✅ Secrets Manager com IAM roles permite injeção segura de credenciais em runtime.",
        topic: "containers"
    },
    {
        id: 97,
        question: "Para garantir ordem de processamento em SQS, qual configuração usar?",
        options: [
            "FIFO queue com MessageGroupId",
            "Standard queue com timestamps",
            "Multiple queues",
            "SNS ordering"
        ],
        correct: [0],
        explanation: "✅ FIFO queue com MessageGroupId garante ordem dentro do grupo de mensagens.",
        topic: "messaging"
    },
    {
        id: 98,
        question: "Em Cognito User Pools, como implementar password reset customizado?",
        options: [
            "API Gateway custom endpoint",
            "SES templates apenas",
            "Lambda triggers (CustomMessage)",
            "SNS notifications"
        ],
        correct: [2],
        explanation: "✅ Lambda trigger CustomMessage permite customizar emails de password reset.",
        topic: "cognito"
    },
    {
        id: 99,
        question: "Para gerenciar configurações hierárquicas, qual estrutura usar no Parameter Store?",
        options: [
            "Flat structure",
            "Multiple parameters",
            "Tags apenas",
            "Hierarchical paths (/app/env/config)",
        ],
        correct: [3],
        explanation: "✅ Paths hierárquicos permitem organização lógica e bulk retrieval de parâmetros.",
        topic: "systems-manager"
    },
    {
        id: 100,
        question: "Lambda está sendo throttled. Qual é a causa mais provável?",
        options: [
            "Timeout muito baixo",
            "Concurrency limit atingido",
            "Memória insuficiente",
            "VPC configuration"
        ],
        correct: [1],
        explanation: "✅ Throttling ocorre quando o limite de concorrência é atingido.",
        topic: "lambda"
    },

    // DOMAIN 2: SECURITY - Questões 101-140 (40 questões)
    {
        id: 101,
        question: "Para implementar assume role cross-account, qual configuração é necessária?",
        options: [
            "Trust policy no role de destino",
            "Resource policy apenas",
            "IAM user credentials",
            "API Gateway authorizer"
        ],
        correct: [0],
        explanation: "✅ Trust policy define quais entidades podem assumir o role.",
        topic: "security"
    },
    {
        id: 102,
        question: "Em S3, como implementar encryption in transit?",
        options: [
            "SSE-S3 apenas",
            "KMS encryption",
            "HTTPS/TLS + bucket policy deny HTTP",
            "Client-side encryption"
        ],
        correct: [2],
        explanation: "✅ HTTPS/TLS com bucket policy negando HTTP garante encryption in transit.",
        topic: "security"
    },
    {
        id: 103,
        question: "Para auditoria de mudanças em IAM policies, qual serviço usar?",
        options: [
            "CloudWatch Logs",
            "AWS Config",
            "X-Ray",
            "CloudTrail",
        ],
        correct: [3],
        explanation: "✅ CloudTrail registra todas as mudanças em IAM policies para auditoria.",
        topic: "security"
    },
    {
        id: 104,
        question: "Como implementar IP whitelisting em API Gateway?",
        options: [
            "Security groups",
            "Resource policy com aws:SourceIp",
            "Lambda authorizer",
            "CloudFront restrictions"
        ],
        correct: [1],
        explanation: "✅ Resource policy com condition aws:SourceIp restringe acesso por IP.",
        topic: "security"
    },
    {
        id: 105,
        question: "Para criptografia de dados em DynamoDB, qual opção usar?",
        options: [
            "Encryption at rest (KMS)",
            "Client-side encryption apenas",
            "Application-level encryption",
            "TLS apenas"
        ],
        correct: [0],
        explanation: "✅ DynamoDB encryption at rest com KMS criptografa dados automaticamente.",
        topic: "security"
    },
    {
        id: 106,
        question: "Em Lambda, como acessar secrets sem hardcode?",
        options: [
            "Environment variables",
            "Secrets Manager SDK call",
            "Todas as anteriores exceto hardcode",
            "Parameter Store GetParameter",
        ],
        correct: [2],
        explanation: "✅ Secrets Manager, Parameter Store e env vars são opções válidas, nunca hardcode.",
        topic: "security"
    },
    {
        id: 107,
        question: "Para implementar MFA delete em S3, qual configuração usar?",
        options: [
            "Bucket policy apenas",
            "CloudTrail logging",
            "IAM policy condition",
            "MFA Delete + versioning habilitado",
        ],
        correct: [3],
        explanation: "✅ MFA Delete requer versioning habilitado e só pode ser configurado via CLI/API.",
        topic: "security"
    },
    {
        id: 108,
        question: "Como restringir acesso a Lambda apenas durante horário comercial?",
        options: [
            "CloudWatch Events",
            "IAM policy com DateGreaterThan condition",
            "API Gateway throttling",
            "Lambda concurrency = 0"
        ],
        correct: [1],
        explanation: "✅ IAM conditions com DateGreaterThan/DateLessThan restringem acesso por horário.",
        topic: "security"
    },
    {
        id: 109,
        question: "Para implementar least privilege em CodeBuild, qual abordagem usar?",
        options: [
            "Service role com permissions mínimas necessárias",
            "Usar managed policies apenas",
            "User credentials",
            "Root access"
        ],
        correct: [0],
        explanation: "✅ Service role com apenas as permissions necessárias segue least privilege.",
        topic: "security"
    },
    {
        id: 110,
        question: "Em Cognito, como implementar custom authentication flow?",
        options: [
            "IAM policies",
            "API Gateway authorizer",
            "Lambda triggers (DefineAuthChallenge)",
            "SRP protocol apenas"
        ],
        correct: [2],
        explanation: "✅ Lambda triggers permitem implementar fluxos de autenticação customizados.",
        topic: "security"
    },
    {
        id: 111,
        question: "Para detectar credenciais expostas em código, qual serviço usar?",
        options: [
            "CodeGuru",
            "Inspector",
            "GuardDuty",
            "Amazon Macie",
        ],
        correct: [3],
        explanation: "✅ Amazon Macie detecta dados sensíveis incluindo credenciais em código e dados.",
        topic: "security"
    },
    {
        id: 112,
        question: "Como implementar session timeout em Cognito User Pools?",
        options: [
            "Lambda triggers",
            "Access token TTL configuration",
            "API Gateway timeout",
            "CloudWatch Events"
        ],
        correct: [1],
        explanation: "✅ Access token TTL define quanto tempo a sessão permanece válida.",
        topic: "security"
    },
    {
        id: 113,
        question: "Para criptografia de logs do CloudWatch, qual configuração usar?",
        options: [
            "KMS key association",
            "S3 encryption",
            "Client-side encryption",
            "TLS apenas"
        ],
        correct: [0],
        explanation: "✅ CloudWatch Logs pode ser criptografado associando uma KMS key.",
        topic: "security"
    },
    {
        id: 114,
        question: "Em API Gateway, como implementar rate limiting por usuário?",
        options: [
            "Usage Plans com API Keys",
            "CloudFront rate limiting",
            "Lambda authorizer com DynamoDB",
            "WAF rate rules"
        ],
        correct: [2],
        explanation: "✅ Lambda authorizer com DynamoDB permite rate limiting granular por usuário.",
        topic: "security"
    },
    {
        id: 115,
        question: "Para implementar data classification em S3, qual serviço usar?",
        options: [
            "CloudTrail",
            "Config",
            "GuardDuty",
            "Amazon Macie",
        ],
        correct: [3],
        explanation: "✅ Amazon Macie classifica e protege dados sensíveis automaticamente em S3.",
        topic: "security"
    },
    {
        id: 116,
        question: "Como implementar temporary credentials para aplicação mobile?",
        options: [
            "IAM users",
            "Cognito Identity Pools",
            "API Keys",
            "Hardcoded credentials"
        ],
        correct: [1],
        explanation: "✅ Cognito Identity Pools fornece temporary AWS credentials para apps mobile.",
        topic: "security"
    },
    {
        id: 117,
        question: "Para implementar network segmentation, qual recurso AWS usar?",
        options: [
            "VPC + Subnets + NACLs",
            "Security Groups apenas",
            "IAM policies",
            "CloudFront"
        ],
        correct: [0],
        explanation: "✅ VPC com subnets e NACLs fornece network segmentation completa.",
        topic: "security"
    },
    {
        id: 118,
        question: "Em Lambda, como implementar secrets rotation sem downtime?",
        options: [
            "Manual update",
            "Environment variables update",
            "Secrets Manager automatic rotation",
            "Code deployment"
        ],
        correct: [2],
        explanation: "✅ Secrets Manager rotation automática não requer downtime da aplicação.",
        topic: "security"
    },
    {
        id: 119,
        question: "Para compliance GDPR, como implementar data deletion em DynamoDB?",
        options: [
            "Table recreation",
            "Manual deletion",
            "Backup and restore",
            "TTL (Time To Live)",
        ],
        correct: [3],
        explanation: "✅ TTL permite deletion automática de dados após período especificado.",
        topic: "security"
    },
    {
        id: 120,
        question: "Como implementar certificate-based authentication em API Gateway?",
        options: [
            "JWT tokens apenas",
            "Client certificates + mutual TLS",
            "API Keys",
            "IAM authentication"
        ],
        correct: [1],
        explanation: "✅ Client certificates com mutual TLS fornece autenticação baseada em certificado.",
        topic: "security"
    },

    // DOMAIN 3: DEPLOYMENT - Questões 121-160 (40 questões)
    {
        id: 121,
        question: "Em CodePipeline, como implementar parallel execution de stages?",
        options: [
            "Parallel actions dentro do stage",
            "Multiple pipelines",
            "Lambda orchestration",
            "Step Functions"
        ],
        correct: [0],
        explanation: "✅ Actions paralelas dentro do mesmo stage executam simultaneamente.",
        topic: "deployment"
    },
    {
        id: 122,
        question: "Para deploy de Lambda com dependencies, qual abordagem usar?",
        options: [
            "Zip file com dependencies",
            "Lambda Layers para dependencies",
            "Todas as anteriores",
            "Container image",
        ],
        correct: [2],
        explanation: "✅ Zip, Layers e Container images são todas opções válidas para dependencies.",
        topic: "deployment"
    },
    {
        id: 123,
        question: "Em CodeBuild, como usar cache para acelerar builds?",
        options: [
            "S3 cache",
            "Local cache",
            "Docker layer cache",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "✅ CodeBuild suporta S3, local e Docker layer caching para otimizar builds.",
        topic: "deployment"
    },
    {
        id: 124,
        question: "Para implementar feature toggles, qual estratégia usar?",
        options: [
            "Environment variables",
            "Todas as anteriores",
            "DynamoDB configuration table",
            "Parameter Store + Lambda",
        ],
        correct: [1],
        explanation: "✅ Parameter Store, DynamoDB e env vars são opções válidas para feature flags.",
        topic: "deployment"
    },
    {
        id: 125,
        question: "Em SAM, como definir diferentes configurações por ambiente?",
        options: [
            "Parameters + Conditions",
            "Multiple templates",
            "Environment variables",
            "Separate deployments"
        ],
        correct: [0],
        explanation: "✅ Parameters e Conditions permitem configurações dinâmicas por ambiente.",
        topic: "deployment"
    },
    {
        id: 126,
        question: "Para rollback automático em CodeDeploy, qual configuração usar?",
        options: [
            "Manual rollback apenas",
            "Lambda function",
            "CloudWatch Alarms + Auto Rollback",
            "SNS notifications"
        ],
        correct: [2],
        explanation: "✅ CloudWatch Alarms podem triggerar rollback automático baseado em métricas.",
        topic: "deployment"
    },
    {
        id: 127,
        question: "Em CloudFormation, como implementar cross-stack references?",
        options: [
            "Hard-coded values",
            "Environment variables",
            "Parameters apenas",
            "Outputs + ImportValue",
        ],
        correct: [3],
        explanation: "✅ Outputs com ImportValue permitem referenciar recursos entre stacks.",
        topic: "deployment"
    },
    {
        id: 128,
        question: "Para deploy de aplicação multi-region, qual estratégia usar?",
        options: [
            "Manual deployment",
            "CodePipeline com multiple regions",
            "Lambda replication",
            "S3 cross-region replication"
        ],
        correct: [1],
        explanation: "✅ CodePipeline pode orquestrar deployments em múltiplas regiões.",
        topic: "deployment"
    },
    {
        id: 129,
        question: "Em CodeCommit, como implementar branch protection?",
        options: [
            "Branch permissions + approval rules",
            "IAM policies",
            "Lambda hooks",
            "Manual review"
        ],
        correct: [0],
        explanation: "✅ Approval rules protegem branches importantes requerendo review.",
        topic: "deployment"
    },
    {
        id: 130,
        question: "Para implementar infrastructure drift detection, qual serviço usar?",
        options: [
            "CloudTrail",
            "AWS Config",
            "CloudFormation Drift Detection",
            "Systems Manager"
        ],
        correct: [2],
        explanation: "✅ CloudFormation Drift Detection identifica mudanças fora do template.",
        topic: "deployment"
    },
    {
        id: 131,
        question: "Em CodeDeploy, qual é a diferença entre in-place e blue/green deployment?",
        options: [
            "Não há diferença",
            "Blue/green é mais barato",
            "In-place apenas para Lambda",
            "In-place atualiza instâncias existentes, blue/green cria novas",
        ],
        correct: [3],
        explanation: "✅ In-place atualiza instâncias atuais, blue/green provisiona novas instâncias.",
        topic: "deployment"
    },
    {
        id: 132,
        question: "Para implementar canary deployments em Lambda, qual recurso usar?",
        options: [
            "Multiple functions",
            "Lambda Aliases com traffic shifting",
            "API Gateway stages",
            "CloudFront distributions"
        ],
        correct: [1],
        explanation: "✅ Lambda Aliases permitem traffic shifting gradual entre versões.",
        topic: "deployment"
    },
    {
        id: 133,
        question: "Em CodePipeline, como implementar conditional deployments?",
        options: [
            "CloudFormation conditions",
            "Lambda function decisions",
            "Manual approval gates",
            "Parameter-based conditions"
        ],
        correct: [0],
        explanation: "✅ CloudFormation conditions permitem deployments condicionais baseados em parâmetros.",
        topic: "deployment"
    },
    {
        id: 134,
        question: "Para implementar database migrations em CI/CD, qual abordagem usar?",
        options: [
            "Manual scripts",
            "Lambda functions",
            "CodeBuild + migration scripts",
            "RDS automated backups"
        ],
        correct: [2],
        explanation: "✅ CodeBuild pode executar migration scripts como parte do pipeline.",
        topic: "deployment"
    },
    {
        id: 135,
        question: "Em SAM, como implementar local testing?",
        options: [
            "sam local start-api",
            "Docker containers",
            "LocalStack",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "✅ SAM CLI, Docker e LocalStack são opções para testing local.",
        topic: "deployment"
    },
    {
        id: 136,
        question: "Para implementar approval workflows, qual serviço usar?",
        options: [
            "Step Functions",
            "CodePipeline approval actions",
            "SNS + Lambda",
            "Manual processes"
        ],
        correct: [1],
        explanation: "✅ CodePipeline approval actions fornecem workflows de aprovação integrados.",
        topic: "deployment"
    },
    {
        id: 137,
        question: "Em CloudFormation, como implementar custom resources?",
        options: [
            "Lambda-backed custom resources",
            "SNS-backed resources",
            "API Gateway integration",
            "Manual provisioning"
        ],
        correct: [0],
        explanation: "✅ Lambda-backed custom resources permitem lógica personalizada no CloudFormation.",
        topic: "deployment"
    },
    {
        id: 138,
        question: "Para implementar environment promotion, qual estratégia usar?",
        options: [
            "Manual copying",
            "Separate accounts",
            "Parameterized templates + pipeline stages",
            "Git branches"
        ],
        correct: [2],
        explanation: "✅ Templates parametrizados com pipeline stages automatizam promotion entre ambientes.",
        topic: "deployment"
    },
    {
        id: 139,
        question: "Em CodeArtifact, como implementar package versioning?",
        options: [
            "Manual versioning",
            "Random versioning",
            "Timestamp-based versions",
            "Semantic versioning + CI/CD integration",
        ],
        correct: [3],
        explanation: "✅ Semantic versioning integrado ao CI/CD é a melhor prática para packages.",
        topic: "deployment"
    },
    {
        id: 140,
        question: "Para implementar disaster recovery, qual estratégia de deployment usar?",
        options: [
            "Single region deployment",
            "Multi-region active-passive",
            "Manual backup/restore",
            "Local backups apenas"
        ],
        correct: [1],
        explanation: "✅ Multi-region active-passive fornece disaster recovery com RTO/RPO otimizados.",
        topic: "deployment"
    },

    // DOMAIN 4: TROUBLESHOOTING - Questões 141-200 (60 questões)
    {
        id: 141,
        question: "Lambda está retornando 'Task timed out'. Como investigar?",
        options: [
            "Verificar CloudWatch Logs + Duration metrics",
            "Aumentar timeout imediatamente",
            "Adicionar mais memória",
            "Usar Provisioned Concurrency"
        ],
        correct: [0],
        explanation: "✅ CloudWatch Logs e Duration metrics mostram onde a função está travando.",
        topic: "monitoring"
    },
    {
        id: 142,
        question: "DynamoDB está retornando ProvisionedThroughputExceededException. Qual ação tomar?",
        options: [
            "Aumentar RCU/WCU",
            "Implementar exponential backoff",
            "Todas as anteriores",
            "Usar auto-scaling",
        ],
        correct: [2],
        explanation: "✅ Combinação de aumento de capacidade, backoff e auto-scaling resolve throttling.",
        topic: "monitoring"
    },
    {
        id: 143,
        question: "API Gateway retornando 504 Gateway Timeout. Qual é a causa?",
        options: [
            "CloudFront timeout",
            "Route 53 resolution",
            "DynamoDB throttling",
            "Lambda function timeout (>29s)",
        ],
        correct: [3],
        explanation: "✅ API Gateway tem timeout de 29s, se Lambda demora mais, retorna 504.",
        topic: "monitoring"
    },
    {
        id: 144,
        question: "Para debug de cold starts, qual métrica CloudWatch observar?",
        options: [
            "Duration",
            "Init Duration",
            "Billed Duration",
            "Memory Utilization"
        ],
        correct: [1],
        explanation: "✅ Init Duration mostra especificamente o tempo de inicialização (cold start).",
        topic: "monitoring"
    },
    {
        id: 145,
        question: "S3 uploads estão falhando intermitentemente. Como investigar?",
        options: [
            "S3 access logs + CloudWatch metrics",
            "CloudTrail logs",
            "VPC Flow Logs",
            "Route 53 query logs"
        ],
        correct: [0],
        explanation: "✅ S3 access logs e CloudWatch metrics mostram padrões de falha em uploads.",
        topic: "monitoring"
    },
    {
        id: 146,
        question: "Para identificar gargalos em aplicação distribuída, qual ferramenta usar?",
        options: [
            "CloudWatch Logs",
            "CloudTrail",
            "AWS X-Ray",
            "VPC Flow Logs"
        ],
        correct: [2],
        explanation: "✅ X-Ray fornece distributed tracing mostrando gargalos entre serviços.",
        topic: "monitoring"
    },
    {
        id: 147,
        question: "Lambda está consumindo mais memória que esperado. Como otimizar?",
        options: [
            "Reduzir timeout",
            "Migrar para EC2",
            "Usar Provisioned Concurrency",
            "Analisar memory utilization + otimizar código",
        ],
        correct: [3],
        explanation: "✅ Memory utilization metrics ajudam identificar vazamentos e otimizar uso.",
        topic: "monitoring"
    },
    {
        id: 148,
        question: "DynamoDB queries estão lentas. Como otimizar?",
        options: [
            "Aumentar RCU apenas",
            "Analisar query patterns + criar GSI apropriados",
            "Usar Scan em vez de Query",
            "Aumentar item size"
        ],
        correct: [1],
        explanation: "✅ GSIs otimizados para query patterns específicos melhoram performance.",
        topic: "monitoring"
    },
    {
        id: 149,
        question: "Para monitorar custos em tempo real, qual serviço usar?",
        options: [
            "AWS Budgets + CloudWatch",
            "Cost Explorer",
            "Billing dashboard",
            "Cost and Usage Reports"
        ],
        correct: [0],
        explanation: "✅ AWS Budgets com CloudWatch Alarms permite monitoramento de custos em tempo real.",
        topic: "monitoring"
    },
    {
        id: 150,
        question: "API está retornando 403 Forbidden intermitentemente. Como debuggar?",
        options: [
            "X-Ray traces",
            "CloudWatch Logs apenas",
            "CloudTrail + IAM policy simulator",
            "VPC Flow Logs"
        ],
        correct: [2],
        explanation: "✅ CloudTrail mostra chamadas negadas e IAM simulator testa policies.",
        topic: "monitoring"
    },
    {
        id: 151,
        question: "Para otimizar custos de Lambda, qual métrica analisar?",
        options: [
            "Invocations apenas",
            "Throttles",
            "Errors apenas",
            "Duration + Memory utilization",
        ],
        correct: [3],
        explanation: "✅ Otimizar relação duration/memory encontra o sweet spot de custo-performance.",
        topic: "monitoring"
    },
    {
        id: 152,
        question: "CloudWatch Logs está gerando muito volume. Como otimizar?",
        options: [
            "Desabilitar logs",
            "Log retention + filtering + structured logging",
            "Usar apenas X-Ray",
            "Logs locais apenas"
        ],
        correct: [1],
        explanation: "✅ Retention policies, filtering e structured logging otimizam volume e custos.",
        topic: "monitoring"
    },
    {
        id: 153,
        question: "Para debug de network connectivity, qual ferramenta usar?",
        options: [
            "VPC Flow Logs + Reachability Analyzer",
            "CloudWatch Logs",
            "X-Ray apenas",
            "CloudTrail"
        ],
        correct: [0],
        explanation: "✅ VPC Flow Logs e Reachability Analyzer diagnosticam problemas de rede.",
        topic: "monitoring"
    },
    {
        id: 154,
        question: "Lambda está sendo throttled. Como identificar a causa?",
        options: [
            "Adicionar memória",
            "Aumentar timeout",
            "Verificar concurrent executions vs limits",
            "Usar VPC"
        ],
        correct: [2],
        explanation: "✅ Throttling ocorre quando concurrent executions excedem os limites configurados.",
        topic: "monitoring"
    },
    {
        id: 155,
        question: "Para monitorar health de aplicação, qual estratégia usar?",
        options: [
            "Logs apenas",
            "Error counting apenas",
            "Manual monitoring",
            "Health checks + custom metrics + alarms",
        ],
        correct: [3],
        explanation: "✅ Combinação de health checks, métricas customizadas e alarms fornece monitoramento completo.",
        topic: "monitoring"
    },
    {
        id: 156,
        question: "S3 está retornando 503 SlowDown. Como resolver?",
        options: [
            "Aumentar bandwidth",
            "Implementar exponential backoff + request rate distribution",
            "Usar CloudFront",
            "Migrar para EBS"
        ],
        correct: [1],
        explanation: "✅ Exponential backoff e distribuição de requests resolve 503 SlowDown errors.",
        topic: "monitoring"
    },
    {
        id: 157,
        question: "Para debug de performance em API Gateway, qual métrica observar?",
        options: [
            "Latency + IntegrationLatency + 4XX/5XX errors",
            "Count apenas",
            "CacheHitCount apenas",
            "ThrottleCount apenas"
        ],
        correct: [0],
        explanation: "✅ Latency, IntegrationLatency e error rates identificam gargalos de performance.",
        topic: "monitoring"
    },
    {
        id: 158,
        question: "Lambda está retornando 'Unable to import module'. Como resolver?",
        options: [
            "Aumentar timeout",
            "Adicionar memória",
            "Verificar deployment package + dependencies",
            "Usar VPC"
        ],
        correct: [2],
        explanation: "✅ Import errors indicam problemas no deployment package ou dependencies faltando.",
        topic: "monitoring"
    },
    {
        id: 159,
        question: "Para otimizar queries DynamoDB, qual ferramenta usar?",
        options: [
            "CloudWatch Insights",
            "CloudTrail",
            "X-Ray",
            "DynamoDB Contributor Insights",
        ],
        correct: [3],
        explanation: "✅ Contributor Insights identifica hot keys e padrões de acesso problemáticos.",
        topic: "monitoring"
    },
    {
        id: 160,
        question: "CloudFormation stack está em ROLLBACK_FAILED. Como resolver?",
        options: [
            "Delete stack",
            "Continue rollback + fix underlying issues",
            "Create new stack",
            "Manual resource cleanup"
        ],
        correct: [1],
        explanation: "✅ Continue rollback após resolver issues subjacentes permite recuperação do stack.",
        topic: "monitoring"
    },
    {
        id: 161,
        question: "Para debug de intermittent failures, qual estratégia usar?",
        options: [
            "Distributed tracing + correlation IDs",
            "Logs apenas",
            "Manual testing",
            "Error counting"
        ],
        correct: [0],
        explanation: "✅ Distributed tracing com correlation IDs permite rastrear requests através de serviços.",
        topic: "monitoring"
    },
    {
        id: 162,
        question: "Lambda está retornando memory errors. Como investigar?",
        options: [
            "Aumentar timeout",
            "Usar Provisioned Concurrency",
            "Memory utilization metrics + profiling",
            "Migrar para EC2"
        ],
        correct: [2],
        explanation: "✅ Memory utilization metrics e profiling identificam vazamentos e otimizações.",
        topic: "monitoring"
    },
    {
        id: 163,
        question: "Para monitorar SLA compliance, qual abordagem usar?",
        options: [
            "Manual checking",
            "User feedback",
            "Error logs apenas",
            "Custom metrics + percentile statistics",
        ],
        correct: [3],
        explanation: "✅ Custom metrics com percentile statistics (p95, p99) monitoram SLA compliance.",
        topic: "monitoring"
    },
    {
        id: 164,
        question: "DynamoDB está retornando ValidationException. Como debuggar?",
        options: [
            "Aumentar RCU/WCU",
            "Verificar item structure + attribute types",
            "Usar DAX",
            "Criar GSI"
        ],
        correct: [1],
        explanation: "✅ ValidationException indica problemas na estrutura do item ou tipos de atributos.",
        topic: "monitoring"
    },
    {
        id: 165,
        question: "Para otimizar cold starts, qual estratégia usar?",
        options: [
            "Provisioned Concurrency + otimização de código",
            "Aumentar memória apenas",
            "Usar VPC",
            "Aumentar timeout"
        ],
        correct: [0],
        explanation: "✅ Provisioned Concurrency elimina cold starts, otimização de código reduz init time.",
        topic: "monitoring"
    },
    {
        id: 166,
        question: "API Gateway está retornando 429 Too Many Requests. Como resolver?",
        options: [
            "Aumentar timeout",
            "Usar CloudFront",
            "Ajustar throttling limits + implement backoff",
            "Adicionar mais APIs"
        ],
        correct: [2],
        explanation: "✅ Ajustar throttling limits e implementar backoff resolve 429 errors.",
        topic: "monitoring"
    },
    {
        id: 167,
        question: "Para debug de data inconsistency, qual ferramenta usar?",
        options: [
            "CloudWatch Logs",
            "VPC Flow Logs",
            "X-Ray",
            "AWS Config + CloudTrail",
        ],
        correct: [3],
        explanation: "✅ Config e CloudTrail rastreiam mudanças e identificam causas de inconsistência.",
        topic: "monitoring"
    },
    {
        id: 168,
        question: "Lambda está retornando 'Process exited before completing request'. Como resolver?",
        options: [
            "Aumentar timeout",
            "Debug application code + error handling",
            "Adicionar memória",
            "Usar Provisioned Concurrency"
        ],
        correct: [1],
        explanation: "✅ Process exit indica crash na aplicação, requer debug do código e error handling.",
        topic: "monitoring"
    },
    {
        id: 169,
        question: "Para monitorar database connection pool, qual métrica usar?",
        options: [
            "RDS DatabaseConnections + custom metrics",
            "Lambda duration",
            "CloudWatch Logs",
            "X-Ray segments"
        ],
        correct: [0],
        explanation: "✅ RDS DatabaseConnections e custom metrics monitoram connection pool health.",
        topic: "monitoring"
    },
    {
        id: 170,
        question: "S3 uploads estão lentos. Como otimizar?",
        options: [
            "Usar CloudFront",
            "Aumentar bandwidth",
            "Multipart upload + Transfer Acceleration",
            "Usar EBS"
        ],
        correct: [2],
        explanation: "✅ Multipart upload e Transfer Acceleration otimizam uploads grandes e distantes.",
        topic: "monitoring"
    },
    {
        id: 171,
        question: "Para debug de authorization failures, qual log verificar?",
        options: [
            "Application logs",
            "X-Ray traces",
            "VPC Flow Logs",
            "CloudTrail + API Gateway access logs",
        ],
        correct: [3],
        explanation: "✅ CloudTrail e API Gateway access logs mostram detalhes de authorization failures.",
        topic: "monitoring"
    },
    {
        id: 172,
        question: "Lambda está retornando inconsistent results. Como investigar?",
        options: [
            "Aumentar timeout",
            "Check for race conditions + state management",
            "Adicionar memória",
            "Usar VPC"
        ],
        correct: [1],
        explanation: "✅ Inconsistent results indicam race conditions ou problemas de state management.",
        topic: "monitoring"
    },
    {
        id: 173,
        question: "Para otimizar DynamoDB costs, qual estratégia usar?",
        options: [
            "On-demand vs provisioned analysis + data archiving",
            "Aumentar RCU/WCU",
            "Usar DAX sempre",
            "Criar mais GSIs"
        ],
        correct: [0],
        explanation: "✅ Análise de padrões de uso e archiving de dados antigos otimizam custos.",
        topic: "monitoring"
    },
    {
        id: 174,
        question: "API está retornando stale data. Como debuggar?",
        options: [
            "Aumentar timeout",
            "Usar mais memória",
            "Check caching layers + TTL settings",
            "Adicionar mais APIs"
        ],
        correct: [2],
        explanation: "✅ Stale data indica problemas em caching layers ou TTL settings inadequados.",
        topic: "monitoring"
    },
    {
        id: 175,
        question: "Para monitorar application security, qual abordagem usar?",
        options: [
            "Logs apenas",
            "Error counting",
            "Manual review",
            "GuardDuty + CloudTrail + custom security metrics",
        ],
        correct: [3],
        explanation: "✅ Combinação de GuardDuty, CloudTrail e métricas customizadas monitora security.",
        topic: "monitoring"
    },
    {
        id: 176,
        question: "Lambda está retornando 'RequestId not found'. Como resolver?",
        options: [
            "Aumentar timeout",
            "Check Lambda service limits + retry logic",
            "Adicionar memória",
            "Usar VPC"
        ],
        correct: [1],
        explanation: "✅ RequestId not found indica problemas de service limits ou necessidade de retry logic.",
        topic: "monitoring"
    },
    {
        id: 177,
        question: "Para debug de high latency, qual métrica priorizar?",
        options: [
            "P95/P99 latency + distributed tracing",
            "Error count",
            "Invocation count",
            "Memory usage"
        ],
        correct: [0],
        explanation: "✅ P95/P99 latency e distributed tracing identificam causas de high latency.",
        topic: "monitoring"
    },
    {
        id: 178,
        question: "DynamoDB scans estão custando muito. Como otimizar?",
        options: [
            "Aumentar RCU",
            "Usar DAX",
            "Replace scans with queries + use indexes",
            "Aumentar item size"
        ],
        correct: [2],
        explanation: "✅ Substituir scans por queries e usar indexes apropriados reduz custos drasticamente.",
        topic: "monitoring"
    },
    {
        id: 179,
        question: "Para debug de deployment failures, qual log verificar?",
        options: [
            "Application logs",
            "X-Ray traces",
            "CloudWatch metrics",
            "CloudFormation events + CodeDeploy logs",
        ],
        correct: [3],
        explanation: "✅ CloudFormation events e CodeDeploy logs mostram detalhes de deployment failures.",
        topic: "monitoring"
    },
    {
        id: 180,
        question: "Lambda está retornando 'Function not found'. Como resolver?",
        options: [
            "Aumentar timeout",
            "Verify function name + region + permissions",
            "Adicionar memória",
            "Usar Provisioned Concurrency"
        ],
        correct: [1],
        explanation: "✅ Function not found indica problemas de naming, region ou permissions.",
        topic: "monitoring"
    },
    {
        id: 181,
        question: "Para otimizar API Gateway performance, qual estratégia usar?",
        options: [
            "Enable caching + optimize backend + use CDN",
            "Aumentar timeout",
            "Adicionar mais APIs",
            "Usar apenas HTTP APIs"
        ],
        correct: [0],
        explanation: "✅ Caching, backend optimization e CDN melhoram performance do API Gateway.",
        topic: "monitoring"
    },
    {
        id: 182,
        question: "S3 está retornando 403 Access Denied. Como debuggar?",
        options: [
            "Aumentar timeout",
            "Usar CloudFront",
            "Check bucket policy + IAM permissions + ACLs",
            "Migrar para EBS"
        ],
        correct: [2],
        explanation: "✅ 403 errors requerem verificação de bucket policies, IAM permissions e ACLs.",
        topic: "monitoring"
    },
    {
        id: 183,
        question: "Para debug de memory leaks, qual ferramenta usar?",
        options: [
            "CloudWatch Logs",
            "CloudTrail",
            "X-Ray",
            "Lambda Insights + memory profiling",
        ],
        correct: [3],
        explanation: "✅ Lambda Insights e memory profiling identificam e diagnosticam memory leaks.",
        topic: "monitoring"
    },
    {
        id: 184,
        question: "DynamoDB está retornando ItemCollectionSizeLimitExceededException. Como resolver?",
        options: [
            "Aumentar RCU/WCU",
            "Redesign partition key strategy",
            "Usar DAX",
            "Criar mais GSIs"
        ],
        correct: [1],
        explanation: "✅ Item collection limit requer redesign da partition key strategy.",
        topic: "monitoring"
    },
    {
        id: 185,
        question: "Para monitorar cross-service dependencies, qual ferramenta usar?",
        options: [
            "AWS X-Ray service map",
            "CloudWatch Logs",
            "CloudTrail",
            "VPC Flow Logs"
        ],
        correct: [0],
        explanation: "✅ X-Ray service map visualiza dependencies e performance entre serviços.",
        topic: "monitoring"
    },
    {
        id: 186,
        question: "Lambda está retornando 'Runtime exited with error'. Como debuggar?",
        options: [
            "Aumentar timeout",
            "Adicionar memória",
            "Check runtime version + dependencies + error logs",
            "Usar VPC"
        ],
        correct: [2],
        explanation: "✅ Runtime errors requerem verificação de versão, dependencies e error logs.",
        topic: "monitoring"
    },
    {
        id: 187,
        question: "Para otimizar CloudWatch costs, qual estratégia usar?",
        options: [
            "Desabilitar logs",
            "Manual monitoring",
            "Usar apenas X-Ray",
            "Log retention policies + metric filters + sampling",
        ],
        correct: [3],
        explanation: "✅ Retention policies, metric filters e sampling otimizam custos do CloudWatch.",
        topic: "monitoring"
    },
    {
        id: 188,
        question: "API está retornando 502 Bad Gateway intermitentemente. Como resolver?",
        options: [
            "Aumentar timeout",
            "Check backend health + implement circuit breaker",
            "Usar CloudFront",
            "Adicionar mais APIs"
        ],
        correct: [1],
        explanation: "✅ 502 intermitente indica problemas de backend health, circuit breaker ajuda.",
        topic: "monitoring"
    },
    {
        id: 189,
        question: "Para debug de data corruption, qual abordagem usar?",
        options: [
            "Data validation + checksums + audit trails",
            "Logs apenas",
            "Manual inspection",
            "Error counting"
        ],
        correct: [0],
        explanation: "✅ Data validation, checksums e audit trails identificam e previnem corruption.",
        topic: "monitoring"
    },
    {
        id: 190,
        question: "Lambda está retornando 'KMSAccessDeniedException'. Como resolver?",
        options: [
            "Aumentar timeout",
            "Adicionar memória",
            "Check KMS key permissions + IAM policies",
            "Usar Provisioned Concurrency"
        ],
        correct: [2],
        explanation: "✅ KMS access denied requer verificação de key permissions e IAM policies.",
        topic: "monitoring"
    },
    {
        id: 191,
        question: "Para monitorar application availability, qual métrica usar?",
        options: [
            "Error count apenas",
            "Memory usage",
            "Invocation count",
            "Success rate + uptime + response time percentiles",
        ],
        correct: [3],
        explanation: "✅ Success rate, uptime e response time percentiles medem availability completa.",
        topic: "monitoring"
    },
    {
        id: 192,
        question: "S3 está retornando 500 Internal Server Error. Como investigar?",
        options: [
            "Aumentar timeout",
            "Check S3 service health + implement retry logic",
            "Usar CloudFront",
            "Migrar para EBS"
        ],
        correct: [1],
        explanation: "✅ 500 errors requerem verificação de service health e implementação de retry logic.",
        topic: "monitoring"
    },
    {
        id: 193,
        question: "Para debug de concurrency issues, qual estratégia usar?",
        options: [
            "Analyze concurrent execution patterns + implement locking",
            "Aumentar timeout",
            "Adicionar memória",
            "Usar VPC"
        ],
        correct: [0],
        explanation: "✅ Análise de concurrent execution patterns e locking resolvem concurrency issues.",
        topic: "monitoring"
    },
    {
        id: 194,
        question: "DynamoDB está retornando ConditionalCheckFailedException. Como debuggar?",
        options: [
            "Aumentar RCU/WCU",
            "Usar DAX",
            "Review conditional expressions + implement retry logic",
            "Criar GSI"
        ],
        correct: [2],
        explanation: "✅ Conditional check failures requerem review de expressions e retry logic.",
        topic: "monitoring"
    },
    {
        id: 195,
        question: "Para otimizar Lambda cold starts, qual código evitar?",
        options: [
            "Imports no handler",
            "Heavy initialization outside handler",
            "Database connections no handler",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "✅ Evitar heavy initialization, imports e connections no handler reduz cold starts.",
        topic: "monitoring"
    },
    {
        id: 196,
        question: "API está retornando inconsistent response times. Como investigar?",
        options: [
            "Aumentar timeout",
            "Analyze traffic patterns + backend performance + caching",
            "Usar mais APIs",
            "Adicionar memória"
        ],
        correct: [1],
        explanation: "✅ Análise de traffic patterns, backend performance e caching identifica inconsistências.",
        topic: "monitoring"
    },
    {
        id: 197,
        question: "Para debug de resource exhaustion, qual métrica observar?",
        options: [
            "CPU + Memory + Connection pool utilization",
            "Error count",
            "Invocation count",
            "Duration apenas"
        ],
        correct: [0],
        explanation: "✅ CPU, Memory e Connection pool utilization identificam resource exhaustion.",
        topic: "monitoring"
    },
    {
        id: 198,
        question: "Lambda está retornando 'ENI limit exceeded'. Como resolver?",
        options: [
            "Aumentar timeout",
            "Adicionar memória",
            "Optimize VPC configuration + increase ENI limits",
            "Usar Provisioned Concurrency"
        ],
        correct: [2],
        explanation: "✅ ENI limit exceeded requer otimização de VPC config e aumento de limits.",
        topic: "monitoring"
    },
    {
        id: 199,
        question: "Para monitorar business metrics, qual abordagem usar?",
        options: [
            "Technical metrics apenas",
            "Error counting",
            "Logs apenas",
            "Custom CloudWatch metrics + business KPIs",
        ],
        correct: [3],
        explanation: "✅ Custom CloudWatch metrics permitem monitorar business KPIs junto com métricas técnicas.",
        topic: "monitoring"
    },
    {
        id: 200,
        question: "S3 está retornando 'Request has expired'. Como resolver?",
        options: [
            "Aumentar timeout",
            "Check clock synchronization + presigned URL TTL",
            "Usar CloudFront",
            "Migrar para EBS"
        ],
        correct: [1],
        explanation: "✅ Request expired indica problemas de clock sync ou presigned URL TTL expirado.",
        topic: "monitoring"
    }
];

// Adicionar ao banco principal
questionBank.push(...moreQuestions);