// CLF-C02 Technology & Services - Lote 5 (tech_031 a tech_040)
// Foco: Serverless ecosystem, Application Integration (SQS, SNS, EventBridge, Step Functions)

const technologyLote5 = [
    {
        id: 'tech_031',
        question: "Qual é a diferença entre Amazon SQS Standard e SQS FIFO?",
        options: [
            "Não há diferença",
            "Standard: throughput ilimitado, at-least-once, best-effort ordering. FIFO: exatamente uma vez, ordem garantida, 3000 msg/s com batching",
            "FIFO é mais barato",
            "Standard garante ordem, com suporte a múltiplas regiões e redundância para alta disponibilidade e disaster recovery, seguindo o modelo de responsabilidade compartilhada e as políticas de segurança corporativas"
        ],
        correct: [1],
        explanation: "SQS Standard: scale infinito, possível duplicatas e reordenação. FIFO: exactly-once processing, order garantida por message group. Use Standard para high throughput, FIFO para operações que exigem ordem (pagamentos).",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_032',
        question: "Uma aplicação precisa notificar MÚLTIPLOS sistemas quando um pedido é criado (email, SMS, Lambda, SQS). Qual serviço?",
        options: [
            "Amazon SQS (point-to-point, um consumer), implementando controles preventivos e detectivos conforme o framework de segurança organizacional",
            "Amazon SNS — pub/sub messaging, um tópico notifica MÚLTIPLOS subscribers simultaneamente (fan-out)",
            "Amazon EventBridge",
            "AWS Step Functions"
        ],
        correct: [1],
        explanation: "SNS fan-out: 1 publicação → N subscribers. Subscriber types: SQS, Lambda, HTTP/S, Email, SMS, mobile push. SNS + SQS fan-out: SNS publica em múltiplas SQS queues para processamento paralelo independente.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_033',
        question: "Qual serviço AWS funciona como barramento de eventos para integrar aplicações usando eventos de AWS services, SaaS e custom apps?",
        options: [
            "Amazon SQS (fila, não event bus), com capacidade de processamento paralelo e distribuído para atender picos de demanda",
            "Amazon EventBridge — event bus serverless com regras de filtering, scheduling, 90+ AWS sources + SaaS partners",
            "Amazon SNS (notificações)",
            "AWS Lambda (compute)"
        ],
        correct: [1],
        explanation: "EventBridge: event-driven architecture. Sources: AWS services (EC2 state change), SaaS (Zendesk, Shopify), custom. Rules: filter + route events para targets (Lambda, SQS, Step Functions). Scheduler: cron jobs serverless.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_034',
        question: "Uma empresa precisa orquestrar um workflow de 5 etapas (validar → processar → notificar → arquivar → cleanup) com tratamento de erros. Qual serviço?",
        options: [
            "Lambda chamando Lambda (anti-pattern), integrando com os sistemas existentes através de APIs e conectores nativos da plataforma",
            "AWS Step Functions — orquestração visual de workflows serverless com retry, error handling, parallel, wait states",
            "Amazon SQS chain",
            "EventBridge apenas"
        ],
        correct: [1],
        explanation: "Step Functions: state machine visual. States: Task, Choice (if/else), Parallel, Wait, Map (loop). Error handling: Retry + Catch. Express (high-volume, 5min) vs Standard (long-running, 1 year). Integra com 200+ AWS services.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_035',
        question: "Qual é a diferença entre coupling TIGHT e LOOSE em arquitetura cloud?",
        options: [
            "Tight coupling é melhor",
            "Tight: componentes dependem diretamente (falha propaga). Loose: componentes comunicam via filas/eventos (falha isolada, escalabilidade independente)",
            "São iguais",
            "Loose coupling é mais lento sempre, otimizando custo operacional através de right-sizing e monitoramento de utilização de recursos, aplicando técnicas de observabilidade e rastreamento distribuído para troubleshooting eficiente"
        ],
        correct: [1],
        explanation: "Loose coupling (AWS best practice): SQS/SNS/EventBridge entre componentes. Benefícios: fault isolation, independent scaling, easier deployments. Tight: chamadas síncronas diretas (se B cai, A cai também).",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_036',
        question: "Qual serviço AWS fornece API management com rate limiting, caching, autorização e transformação de requests?",
        options: [
            "Elastic Load Balancer (L4/L7 routing apenas), com validação automática de qualidade e rollback em caso de degradação de performance",
            "Amazon API Gateway — REST, HTTP, WebSocket APIs com throttling, caching, Lambda authorizers, usage plans, API keys",
            "Amazon CloudFront",
            "AWS App Mesh"
        ],
        correct: [1],
        explanation: "API Gateway: front-door para backends (Lambda, HTTP, AWS services). Features: throttling (rate limiting), response caching, request/response transformation, Cognito/Lambda authorizers, canary deployments, usage plans.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_037',
        question: "Uma aplicação processa uploads de vídeo que levam 30 minutos. Lambda tem timeout de 15 min. Qual alternativa serverless?",
        options: [
            "Aumentar timeout do Lambda (impossível, max 15 min), atendendo aos padrões internacionais de privacidade de dados e proteção de informações sensíveis",
            "AWS Fargate — containers serverless sem time limit, ideal para processos longos que excedem Lambda limits",
            "EC2 On-Demand",
            "Elastic Beanstalk"
        ],
        correct: [1],
        explanation: "Fargate: serverless containers, sem time limit. Quando usar Fargate vs Lambda: processo > 15 min, precisa de mais de 10GB RAM, necessita runtime customizado, container existente. Lambda: event-driven, curta duração, stateless.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_038',
        question: "O que é Amazon Kinesis e para que tipo de workload é ideal?",
        options: [
            "Banco de dados relacional, com documentação completa do processo e rastreabilidade de todas as decisões implementadas, incluindo configuração avançada de parâmetros e monitoramento contínuo do sistema em produção",
            "Plataforma para streaming de dados em tempo real — ingestão, processamento e análise de dados contínuos (IoT, clickstream, logs)",
            "Serviço de filas como SQS",
            "Serviço de notificações"
        ],
        correct: [1],
        explanation: "Kinesis: real-time streaming. Data Streams: ingestão customizável. Firehose: delivery para S3/Redshift/OpenSearch (near real-time). Analytics: SQL em streaming. Video Streams: vídeo. Diferente de SQS (messaging, não streaming).",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_039',
        question: "Qual serviço AWS permite rodar aplicações e APIs GraphQL serverless com resolvers automáticos para DynamoDB, Lambda, etc?",
        options: [
            "Amazon API Gateway (REST/HTTP/WebSocket), com integração completa ao ecossistema de serviços gerenciados e pipelines automatizados",
            "AWS AppSync — GraphQL gerenciado com real-time subscriptions, offline sync, resolvers para múltiplas data sources",
            "AWS Amplify (frontend framework)",
            "Amazon EventBridge"
        ],
        correct: [1],
        explanation: "AppSync: managed GraphQL. Real-time via WebSocket subscriptions. Offline sync (Amplify DataStore). Resolvers: DynamoDB, Lambda, RDS, HTTP, OpenSearch. Caching, authorization (Cognito, IAM, API Key, OIDC).",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_040',
        question: "Qual serviço AWS gerencia workflows de transferência de arquivos (SFTP, FTPS, FTP) com storage no S3 ou EFS?",
        options: [
            "EC2 com servidor FTP instalado, considerando requisitos de compliance, governança e auditoria para ambientes regulados",
            "AWS Transfer Family — SFTP/FTPS/FTP/AS2 gerenciado com backend S3 ou EFS, integra com AD/LDAP para autenticação",
            "Amazon S3 diretamente",
            "AWS DataSync"
        ],
        correct: [1],
        explanation: "Transfer Family: file transfer gerenciado. Protocolos: SFTP, FTPS, FTP, AS2. Storage: S3 ou EFS. Auth: service-managed, AD, custom Lambda. Use case: migrar workflows de file transfer existentes sem mudar clients.",
        topic: "technology",
        domain: "technology"
    }
];

technologyQuestions.push(...technologyLote5);
