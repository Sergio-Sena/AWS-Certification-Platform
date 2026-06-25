// DOMAIN 3: DEPLOYMENT - 48 questões completas (24%)

const deploymentQuestions = [
    {
        id: 119,
        question: "Qual deployment strategy é mais adequado para uma função Lambda crítica em produção?",
        options: [
            "Canary deployment",
            "Rolling deployment", 
            "All-at-once deployment",
            "Blue/green deployment"
        ],
        correct: [0],
        explanation: "✅ Canary deployment permite testar com pequeno percentual de tráfego antes do rollout completo.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 120,
        question: "Em CodePipeline, onde configurar aprovação manual antes do deploy em produção?",
        options: [
            "Source stage",
            "Build stage",
            "Approval action entre stages",
            "Deploy stage",
        ],
        correct: [2],
        explanation: "✅ Approval actions são inseridas entre stages para gates manuais.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 121,
        question: "Em CodeBuild, onde definir os comandos de build?",
        options: [
            "requirements.txt",
            "Dockerfile",
            "package.json",
            "buildspec.yml",
        ],
        correct: [3],
        explanation: "✅ buildspec.yml define as fases e comandos do processo de build no CodeBuild.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 122,
        question: "Para deploy de Lambda com zero downtime, qual estratégia CodeDeploy usar?",
        options: [
            "AllAtOnce",
            "Canary10Percent5Minutes",
            "Linear10PercentEvery1Minute",
            "AllAtOnceBlueGreen"
        ],
        correct: [1],
        explanation: "✅ Canary deployment testa com pequeno percentual antes do rollout completo.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 123,
        question: "Para implementar saga pattern em serverless, qual serviço usar?",
        options: [
            "Step Functions",
            "Lambda apenas",
            "SQS",
            "EventBridge"
        ],
        correct: [0],
        explanation: "✅ Step Functions é ideal para implementar saga pattern com compensating actions.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 124,
        question: "Em CodePipeline, como fazer rollback automático em caso de falha?",
        options: [
            "Manual rollback apenas",
            "Lambda function para rollback",
            "CloudWatch Alarms com CodeDeploy",
            "Git revert automático"
        ],
        correct: [2],
        explanation: "✅ CloudWatch Alarms podem triggerar rollback automático no CodeDeploy.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 125,
        question: "Para implementar blue/green deployment em Lambda, qual recurso usar?",
        options: [
            "Lambda Versions",
            "Multiple functions",
            "Environment variables",
            "Lambda Aliases",
        ],
        correct: [3],
        explanation: "✅ Lambda Aliases permitem traffic shifting entre versões para blue/green deployment.",
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
        explanation: "✅ CodeBuild pode usar images customizadas do ECR ou Docker Hub.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 127,
        question: "Qual é a melhor prática para error handling em Step Functions?",
        options: [
            "Retry e Catch configurations",
            "Try/catch em cada estado",
            "Lambda error handling apenas",
            "Manual error checking"
        ],
        correct: [0],
        explanation: "✅ Step Functions oferece Retry e Catch configurations nativas para error handling.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 128,
        question: "Para versionamento de APIs, qual abordagem usar no API Gateway?",
        options: [
            "Query parameters",
            "Headers",
            "Todas as anteriores",
            "Path-based versioning",
        ],
        correct: [2],
        explanation: "✅ API Gateway suporta versionamento via query, headers e path.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 129,
        question: "Em CloudFormation, como fazer deploy condicional de recursos?",
        options: [
            "Não é possível",
            "Parameters apenas",
            "Mappings apenas",
            "Conditions section",
        ],
        correct: [3],
        explanation: "✅ Conditions section permite deploy condicional baseado em parâmetros.",
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
        explanation: "✅ SAM simplifica deploy de aplicações serverless com templates.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 131,
        question: "Como implementar feature flags em deployment serverless?",
        options: [
            "Todas as anteriores",
            "Parameter Store",
            "Lambda Aliases com weights",
            "Environment variables",
        ],
        correct: [0],
        explanation: "✅ Múltiplas abordagens podem implementar feature flags em serverless.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 132,
        question: "Para rollback rápido em caso de problemas, qual estratégia usar?",
        options: [
            "Redeploy completo",
            "Restart da aplicação",
            "Lambda Aliases traffic shifting",
            "Manual intervention"
        ],
        correct: [2],
        explanation: "✅ Lambda Aliases permitem rollback instantâneo via traffic shifting.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 133,
        question: "Em CodeCommit, como triggerar pipeline automaticamente?",
        options: [
            "Manual trigger apenas",
            "Cron jobs",
            "Lambda polling",
            "CloudWatch Events",
        ],
        correct: [3],
        explanation: "✅ CloudWatch Events detecta mudanças no CodeCommit e triggera pipelines.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 134,
        question: "Para deploy multi-região, qual abordagem usar?",
        options: [
            "Manual deploy em cada região",
            "Pipeline com múltiplos deploy stages",
            "Cross-region replication",
            "Single region apenas"
        ],
        correct: [1],
        explanation: "✅ Pipeline com múltiplos stages permite deploy coordenado multi-região.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 135,
        question: "Como validar deployment antes de produção?",
        options: [
            "Smoke tests automatizados",
            "Deploy direto em produção",
            "Manual testing apenas",
            "Não validar"
        ],
        correct: [0],
        explanation: "✅ Smoke tests automatizados validam funcionalidade básica pós-deploy.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 136,
        question: "Para gerenciar configurações por ambiente, qual abordagem usar?",
        options: [
            "Hardcode no código",
            "Single configuration file",
            "Parameter Store com hierarquia",
            "Environment variables apenas"
        ],
        correct: [2],
        explanation: "✅ Parameter Store com hierarquia organiza configurações por ambiente.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 137,
        question: "Em Step Functions, como implementar retry com backoff?",
        options: [
            "Manual retry logic",
            "SQS retry",
            "Lambda function retry",
            "Retry configuration com IntervalSeconds",
        ],
        correct: [3],
        explanation: "✅ Step Functions oferece retry configuration nativa com backoff.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 138,
        question: "Para deploy de container serverless, qual serviço usar?",
        options: [
            "EC2 apenas",
            "B e C",
            "Lambda Container Images",
            "ECS Fargate",
        ],
        correct: [1],
        explanation: "✅ Tanto ECS Fargate quanto Lambda Container Images são serverless.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 139,
        question: "Como implementar circuit breaker em Step Functions?",
        options: [
            "Catch states com fallback",
            "Não é possível",
            "Lambda function apenas",
            "Manual intervention"
        ],
        correct: [0],
        explanation: "✅ Catch states permitem implementar circuit breaker com fallback logic.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 140,
        question: "Para deploy de API Gateway, qual é a melhor prática?",
        options: [
            "Deploy direto em produção",
            "Single stage apenas",
            "Usar stages (dev, test, prod)",
            "Manual deployment"
        ],
        correct: [2],
        explanation: "✅ Stages permitem deploy progressivo e isolamento entre ambientes.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 141,
        question: "Em CloudFormation, como proteger recursos críticos?",
        options: [
            "Separate templates",
            "Manual backup apenas",
            "No protection needed",
            "DeletionPolicy: Retain",
        ],
        correct: [3],
        explanation: "✅ DeletionPolicy: Retain protege recursos contra exclusão acidental.",
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
        explanation: "✅ Error rate e latency indicam saúde do deployment.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 143,
        question: "Como implementar canary analysis automatizada?",
        options: [
            "CloudWatch Alarms com CodeDeploy",
            "Manual monitoring",
            "No analysis needed",
            "Third-party tools apenas"
        ],
        correct: [0],
        explanation: "✅ CloudWatch Alarms podem automatizar canary analysis no CodeDeploy.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 144,
        question: "Para deploy de Lambda Layers, qual consideração importante?",
        options: [
            "Não afetam versioning",
            "Podem ser modificados livremente",
            "Layers são imutáveis após criação",
            "São sempre públicos"
        ],
        correct: [2],
        explanation: "✅ Lambda Layers são imutáveis - mudanças requerem nova versão.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 145,
        question: "Em CodePipeline, como implementar parallel execution?",
        options: [
            "Não é possível",
            "Manual coordination",
            "Separate pipelines apenas",
            "Multiple actions no mesmo stage",
        ],
        correct: [3],
        explanation: "✅ Multiple actions no mesmo stage executam em paralelo.",
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
        explanation: "✅ Lambda Layers são ideais para gerenciar dependências compartilhadas.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 147,
        question: "Como implementar deployment gates baseados em métricas?",
        options: [
            "CloudWatch Alarms como gates",
            "Manual approval apenas",
            "No gates needed",
            "Time-based gates apenas"
        ],
        correct: [0],
        explanation: "✅ CloudWatch Alarms podem servir como deployment gates automáticos.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 148,
        question: "Para versionamento de Lambda functions, qual estratégia usar?",
        options: [
            "Overwrite sempre",
            "No versioning",
            "Semantic versioning com $LATEST",
            "Manual numbering"
        ],
        correct: [2],
        explanation: "✅ Semantic versioning com $LATEST oferece controle e rastreabilidade.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 149,
        question: "Em Step Functions, como implementar timeout para estados?",
        options: [
            "Manual intervention",
            "Lambda timeout apenas",
            "No timeout available",
            "TimeoutSeconds parameter",
        ],
        correct: [3],
        explanation: "✅ TimeoutSeconds parameter define timeout para estados individuais.",
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
        explanation: "✅ Microservices devem ter deployment independente para agilidade.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 151,
        question: "Como implementar database migration em pipeline?",
        options: [
            "Pre-deploy hook com migration scripts",
            "Manual migration",
            "Post-deploy apenas",
            "No migration needed"
        ],
        correct: [0],
        explanation: "✅ Pre-deploy hooks executam migrations antes do deploy da aplicação.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 152,
        question: "Para rollback de API Gateway deployment, qual abordagem?",
        options: [
            "Redeploy anterior version",
            "Manual reconfiguration",
            "Stage rollback",
            "No rollback possible"
        ],
        correct: [2],
        explanation: "✅ API Gateway permite rollback via stage management.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 153,
        question: "Em CloudFormation, como implementar cross-stack references?",
        options: [
            "Hardcode values",
            "Separate deployments",
            "Manual coordination",
            "Export/Import values",
        ],
        correct: [3],
        explanation: "✅ Export/Import values permitem referências entre stacks.",
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
        explanation: "✅ Secrets devem estar disponíveis antes do deploy da aplicação.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 155,
        question: "Como implementar deployment approval baseado em testes?",
        options: [
            "Automated test results como gate",
            "Manual approval apenas",
            "No approval needed",
            "Time-based approval"
        ],
        correct: [0],
        explanation: "✅ Resultados de testes automatizados podem servir como approval gate.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 156,
        question: "Para deploy de Lambda com VPC, qual consideração importante?",
        options: [
            "No impact",
            "Reduced functionality",
            "Increased cold start time",
            "Higher costs apenas"
        ],
        correct: [2],
        explanation: "✅ VPC configuration aumenta cold start time devido à ENI setup.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 157,
        question: "Em CodeBuild, como implementar caching para builds mais rápidos?",
        options: [
            "No caching available",
            "External cache apenas",
            "Manual caching",
            "S3 cache ou local cache",
        ],
        correct: [3],
        explanation: "✅ CodeBuild oferece S3 cache e local cache para otimização.",
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
        explanation: "✅ Tenant-specific deployments oferecem isolamento e flexibilidade.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 159,
        question: "Como implementar deployment metrics collection?",
        options: [
            "CloudWatch custom metrics",
            "Manual logging",
            "No metrics needed",
            "Third-party tools apenas"
        ],
        correct: [0],
        explanation: "✅ CloudWatch custom metrics capturam métricas específicas de deployment.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 160,
        question: "Para deploy de Step Functions, qual validação fazer?",
        options: [
            "Syntax validation apenas",
            "No validation needed",
            "State machine definition validation",
            "Manual testing apenas"
        ],
        correct: [2],
        explanation: "✅ State machine definition deve ser validada antes do deploy.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 161,
        question: "Em pipeline CI/CD, onde implementar security scanning?",
        options: [
            "Apenas em produção",
            "Post-deployment apenas",
            "Deploy stage apenas",
            "Build stage",
        ],
        correct: [3],
        explanation: "✅ Security scanning deve ocorrer no build stage para detectar vulnerabilidades cedo.",
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
        explanation: "✅ API availability deve ser verificada antes e durante deployment.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 163,
        question: "Como implementar deployment notifications?",
        options: [
            "SNS integration com pipeline",
            "Manual notifications",
            "Email apenas",
            "No notifications needed"
        ],
        correct: [0],
        explanation: "✅ SNS integration permite notifications automáticas de deployment status.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 164,
        question: "Para deploy de aplicação com compliance requirements, qual abordagem?",
        options: [
            "Standard deployment",
            "Manual compliance check",
            "Compliance-aware pipeline com approvals",
            "No compliance needed"
        ],
        correct: [2],
        explanation: "✅ Pipeline deve incluir compliance checks e approvals obrigatórios.",
        topic: "deployment",
        domain: "deployment"
    },
    {
        id: 165,
        question: "Em deployment automation, como tratar configuration drift?",
        options: [
            "Ignore drift",
            "No drift possible",
            "Manual correction",
            "Infrastructure as Code com drift detection",
        ],
        correct: [3],
        explanation: "✅ IaC com drift detection identifica e corrige configurações divergentes.",
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
        explanation: "✅ Database migrations devem preceder application deployment para compatibilidade.",
        topic: "deployment",
        domain: "deployment"
    }
];

window.deploymentQuestions = deploymentQuestions;