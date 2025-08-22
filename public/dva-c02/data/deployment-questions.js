// DOMAIN 3: DEPLOYMENT - 48 questões completas (24%)

const deploymentQuestions = [
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
    {
        id: 120,
        question: "Em CodePipeline, onde configurar aprovação manual antes do deploy em produção?",
        options: [
            "Source stage",
            "Build stage",
            "Deploy stage", 
            "Approval action entre stages"
        ],
        correct: [3],
        explanation: "Approval actions são inseridas entre stages para gates manuais.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 121,
        question: "Em CodeBuild, onde definir os comandos de build?",
        options: [
            "buildspec.yml",
            "Dockerfile",
            "package.json",
            "requirements.txt"
        ],
        correct: [0],
        explanation: "buildspec.yml define as fases e comandos do processo de build no CodeBuild.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 122,
        question: "Para deploy de Lambda com zero downtime, qual estratégia CodeDeploy usar?",
        options: [
            "AllAtOnce",
            "Linear10PercentEvery1Minute",
            "Canary10Percent5Minutes",
            "AllAtOnceBlueGreen"
        ],
        correct: [2],
        explanation: "Canary deployment testa com pequeno percentual antes do rollout completo.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 123,
        question: "Para implementar saga pattern em serverless, qual serviço usar?",
        options: [
            "Lambda apenas",
            "Step Functions",
            "SQS",
            "EventBridge"
        ],
        correct: [1],
        explanation: "Step Functions é ideal para implementar saga pattern com compensating actions.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 124,
        question: "Em CodePipeline, como fazer rollback automático em caso de falha?",
        options: [
            "Manual rollback apenas",
            "CloudWatch Alarms com CodeDeploy",
            "Lambda function para rollback",
            "Git revert automático"
        ],
        correct: [1],
        explanation: "CloudWatch Alarms podem triggerar rollback automático no CodeDeploy.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 125,
        question: "Para implementar blue/green deployment em Lambda, qual recurso usar?",
        options: [
            "Lambda Versions",
            "Lambda Aliases",
            "Environment variables",
            "Multiple functions"
        ],
        correct: [1],
        explanation: "Lambda Aliases permitem traffic shifting entre versões para blue/green deployment.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 126,
        question: "Em CodeBuild, como usar Docker images customizadas?",
        options: [
            "Não é possível",
            "ECR ou Docker Hub",
            "S3 apenas",
            "Lambda Layers"
        ],
        correct: [1],
        explanation: "CodeBuild pode usar images customizadas do ECR ou Docker Hub.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 127,
        question: "Qual é a melhor prática para error handling em Step Functions?",
        options: [
            "Try/catch em cada estado",
            "Retry e Catch configurations",
            "Lambda error handling apenas",
            "Manual error checking"
        ],
        correct: [1],
        explanation: "Step Functions oferece Retry e Catch configurations nativas para error handling.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 128,
        question: "Para versionamento de APIs, qual abordagem usar no API Gateway?",
        options: [
            "Query parameters",
            "Headers",
            "Path-based versioning",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "API Gateway suporta versionamento via query, headers e path.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 129,
        question: "Em CloudFormation, como fazer deploy condicional de recursos?",
        options: [
            "Conditions section",
            "Parameters apenas",
            "Mappings apenas",
            "Não é possível"
        ],
        correct: [0],
        explanation: "Conditions section permite deploy condicional baseado em parâmetros.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 130,
        question: "Para deploy automatizado de Lambda, qual ferramenta AWS usar?",
        options: [
            "AWS CLI apenas",
            "SAM (Serverless Application Model)",
            "Console AWS apenas",
            "Terraform apenas"
        ],
        correct: [1],
        explanation: "SAM simplifica deploy de aplicações serverless com templates.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 131,
        question: "Como implementar feature flags em deployment serverless?",
        options: [
            "Environment variables",
            "Parameter Store",
            "Lambda Aliases com weights",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Múltiplas abordagens podem implementar feature flags em serverless.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 132,
        question: "Para rollback rápido em caso de problemas, qual estratégia usar?",
        options: [
            "Redeploy completo",
            "Lambda Aliases traffic shifting",
            "Restart da aplicação",
            "Manual intervention"
        ],
        correct: [1],
        explanation: "Lambda Aliases permitem rollback instantâneo via traffic shifting.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 133,
        question: "Em CodeCommit, como triggerar pipeline automaticamente?",
        options: [
            "Manual trigger apenas",
            "CloudWatch Events",
            "Lambda polling",
            "Cron jobs"
        ],
        correct: [1],
        explanation: "CloudWatch Events detecta mudanças no CodeCommit e triggera pipelines.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 134,
        question: "Para deploy multi-região, qual abordagem usar?",
        options: [
            "Manual deploy em cada região",
            "Cross-region replication",
            "Pipeline com múltiplos deploy stages",
            "Single region apenas"
        ],
        correct: [2],
        explanation: "Pipeline com múltiplos stages permite deploy coordenado multi-região.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 135,
        question: "Como validar deployment antes de produção?",
        options: [
            "Deploy direto em produção",
            "Smoke tests automatizados",
            "Manual testing apenas",
            "Não validar"
        ],
        correct: [1],
        explanation: "Smoke tests automatizados validam funcionalidade básica pós-deploy.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 136,
        question: "Para gerenciar configurações por ambiente, qual abordagem usar?",
        options: [
            "Hardcode no código",
            "Parameter Store com hierarquia",
            "Single configuration file",
            "Environment variables apenas"
        ],
        correct: [1],
        explanation: "Parameter Store com hierarquia organiza configurações por ambiente.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 137,
        question: "Em Step Functions, como implementar retry com backoff?",
        options: [
            "Manual retry logic",
            "Retry configuration com IntervalSeconds",
            "Lambda function retry",
            "SQS retry"
        ],
        correct: [1],
        explanation: "Step Functions oferece retry configuration nativa com backoff.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 138,
        question: "Para deploy de container serverless, qual serviço usar?",
        options: [
            "EC2 apenas",
            "ECS Fargate",
            "Lambda Container Images",
            "B e C"
        ],
        correct: [3],
        explanation: "Tanto ECS Fargate quanto Lambda Container Images são serverless.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 139,
        question: "Como implementar circuit breaker em Step Functions?",
        options: [
            "Não é possível",
            "Catch states com fallback",
            "Lambda function apenas",
            "Manual intervention"
        ],
        correct: [1],
        explanation: "Catch states permitem implementar circuit breaker com fallback logic.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 140,
        question: "Para deploy de API Gateway, qual é a melhor prática?",
        options: [
            "Deploy direto em produção",
            "Usar stages (dev, test, prod)",
            "Single stage apenas",
            "Manual deployment"
        ],
        correct: [1],
        explanation: "Stages permitem deploy progressivo e isolamento entre ambientes.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 141,
        question: "Em CloudFormation, como proteger recursos críticos?",
        options: [
            "DeletionPolicy: Retain",
            "Manual backup apenas",
            "No protection needed",
            "Separate templates"
        ],
        correct: [0],
        explanation: "DeletionPolicy: Retain protege recursos contra exclusão acidental.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 142,
        question: "Para monitorar deployment health, qual métrica observar?",
        options: [
            "CPU usage apenas",
            "Error rate e latency",
            "Memory usage apenas",
            "Network traffic apenas"
        ],
        correct: [1],
        explanation: "Error rate e latency indicam saúde do deployment.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 143,
        question: "Como implementar canary analysis automatizada?",
        options: [
            "Manual monitoring",
            "CloudWatch Alarms com CodeDeploy",
            "No analysis needed",
            "Third-party tools apenas"
        ],
        correct: [1],
        explanation: "CloudWatch Alarms podem automatizar canary analysis no CodeDeploy.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 144,
        question: "Para deploy de Lambda Layers, qual consideração importante?",
        options: [
            "Layers são imutáveis após criação",
            "Podem ser modificados livremente",
            "Não afetam versioning",
            "São sempre públicos"
        ],
        correct: [0],
        explanation: "Lambda Layers são imutáveis - mudanças requerem nova versão.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 145,
        question: "Em CodePipeline, como implementar parallel execution?",
        options: [
            "Não é possível",
            "Multiple actions no mesmo stage",
            "Separate pipelines apenas",
            "Manual coordination"
        ],
        correct: [1],
        explanation: "Multiple actions no mesmo stage executam em paralelo.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 146,
        question: "Para deploy de aplicação com dependências externas, qual abordagem?",
        options: [
            "Include tudo no package",
            "Lambda Layers para dependências",
            "Runtime installation",
            "External downloads"
        ],
        correct: [1],
        explanation: "Lambda Layers são ideais para gerenciar dependências compartilhadas.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 147,
        question: "Como implementar deployment gates baseados em métricas?",
        options: [
            "Manual approval apenas",
            "CloudWatch Alarms como gates",
            "No gates needed",
            "Time-based gates apenas"
        ],
        correct: [1],
        explanation: "CloudWatch Alarms podem servir como deployment gates automáticos.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 148,
        question: "Para versionamento de Lambda functions, qual estratégia usar?",
        options: [
            "Overwrite sempre",
            "Semantic versioning com $LATEST",
            "No versioning",
            "Manual numbering"
        ],
        correct: [1],
        explanation: "Semantic versioning com $LATEST oferece controle e rastreabilidade.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 149,
        question: "Em Step Functions, como implementar timeout para estados?",
        options: [
            "TimeoutSeconds parameter",
            "Lambda timeout apenas",
            "No timeout available",
            "Manual intervention"
        ],
        correct: [0],
        explanation: "TimeoutSeconds parameter define timeout para estados individuais.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 150,
        question: "Para deploy de microservices, qual padrão arquitetural usar?",
        options: [
            "Monolithic deployment",
            "Independent service deployment",
            "Single pipeline para todos",
            "Manual coordination"
        ],
        correct: [1],
        explanation: "Microservices devem ter deployment independente para agilidade.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 151,
        question: "Como implementar database migration em pipeline?",
        options: [
            "Manual migration",
            "Pre-deploy hook com migration scripts",
            "Post-deploy apenas",
            "No migration needed"
        ],
        correct: [1],
        explanation: "Pre-deploy hooks executam migrations antes do deploy da aplicação.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 152,
        question: "Para rollback de API Gateway deployment, qual abordagem?",
        options: [
            "Redeploy anterior version",
            "Stage rollback",
            "Manual reconfiguration",
            "No rollback possible"
        ],
        correct: [1],
        explanation: "API Gateway permite rollback via stage management.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 153,
        question: "Em CloudFormation, como implementar cross-stack references?",
        options: [
            "Hardcode values",
            "Export/Import values",
            "Manual coordination",
            "Separate deployments"
        ],
        correct: [1],
        explanation: "Export/Import values permitem referências entre stacks.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 154,
        question: "Para deploy de aplicação com secrets, qual timing usar?",
        options: [
            "Deploy secrets com aplicação",
            "Deploy secrets antes da aplicação",
            "Deploy secrets depois",
            "No secrets needed"
        ],
        correct: [1],
        explanation: "Secrets devem estar disponíveis antes do deploy da aplicação.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 155,
        question: "Como implementar deployment approval baseado em testes?",
        options: [
            "Manual approval apenas",
            "Automated test results como gate",
            "No approval needed",
            "Time-based approval"
        ],
        correct: [1],
        explanation: "Resultados de testes automatizados podem servir como approval gate.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 156,
        question: "Para deploy de Lambda com VPC, qual consideração importante?",
        options: [
            "No impact",
            "Increased cold start time",
            "Reduced functionality",
            "Higher costs apenas"
        ],
        correct: [1],
        explanation: "VPC configuration aumenta cold start time devido à ENI setup.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 157,
        question: "Em CodeBuild, como implementar caching para builds mais rápidos?",
        options: [
            "No caching available",
            "S3 cache ou local cache",
            "Manual caching",
            "External cache apenas"
        ],
        correct: [1],
        explanation: "CodeBuild oferece S3 cache e local cache para otimização.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 158,
        question: "Para deploy de aplicação multi-tenant, qual estratégia usar?",
        options: [
            "Single deployment para todos",
            "Tenant-specific deployments",
            "Manual per-tenant setup",
            "No multi-tenancy support"
        ],
        correct: [1],
        explanation: "Tenant-specific deployments oferecem isolamento e flexibilidade.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 159,
        question: "Como implementar deployment metrics collection?",
        options: [
            "Manual logging",
            "CloudWatch custom metrics",
            "No metrics needed",
            "Third-party tools apenas"
        ],
        correct: [1],
        explanation: "CloudWatch custom metrics capturam métricas específicas de deployment.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 160,
        question: "Para deploy de Step Functions, qual validação fazer?",
        options: [
            "Syntax validation apenas",
            "State machine definition validation",
            "No validation needed",
            "Manual testing apenas"
        ],
        correct: [1],
        explanation: "State machine definition deve ser validada antes do deploy.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 161,
        question: "Em pipeline CI/CD, onde implementar security scanning?",
        options: [
            "Apenas em produção",
            "Build stage",
            "Deploy stage apenas",
            "Post-deployment apenas"
        ],
        correct: [1],
        explanation: "Security scanning deve ocorrer no build stage para detectar vulnerabilidades cedo.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 162,
        question: "Para deploy de aplicação com external APIs, qual consideração?",
        options: [
            "Deploy sem considerações",
            "API availability checks",
            "No external dependencies",
            "Manual coordination"
        ],
        correct: [1],
        explanation: "API availability deve ser verificada antes e durante deployment.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 163,
        question: "Como implementar deployment notifications?",
        options: [
            "Manual notifications",
            "SNS integration com pipeline",
            "Email apenas",
            "No notifications needed"
        ],
        correct: [1],
        explanation: "SNS integration permite notifications automáticas de deployment status.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 164,
        question: "Para deploy de aplicação com compliance requirements, qual abordagem?",
        options: [
            "Standard deployment",
            "Compliance-aware pipeline com approvals",
            "Manual compliance check",
            "No compliance needed"
        ],
        correct: [1],
        explanation: "Pipeline deve incluir compliance checks e approvals obrigatórios.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 165,
        question: "Em deployment automation, como tratar configuration drift?",
        options: [
            "Ignore drift",
            "Infrastructure as Code com drift detection",
            "Manual correction",
            "No drift possible"
        ],
        correct: [1],
        explanation: "IaC com drift detection identifica e corrige configurações divergentes.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 166,
        question: "Para deploy de aplicação com database, qual ordem seguir?",
        options: [
            "App primeiro, depois DB",
            "DB migration primeiro, depois app",
            "Simultaneous deployment",
            "Manual coordination"
        ],
        correct: [1],
        explanation: "Database migrations devem preceder application deployment para compatibilidade.",
        topic: "deployment",
        domain: "deployment"
    }
];

window.deploymentQuestions = deploymentQuestions;