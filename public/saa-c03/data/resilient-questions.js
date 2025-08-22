// DOMAIN 1: RESILIENT ARCHITECTURES - 55 questões adicionais (30% total = 60 questões)

const resilientQuestions = [
    {
        id: 6,
        question: "Como implementar failover automático para banco de dados RDS?",
        options: ["Single-AZ apenas", "Multi-AZ deployment com failover automático", "Backup manual", "Read replica apenas"],
        correct: [1],
        explanation: "Multi-AZ RDS fornece failover automático para instância standby em outra AZ em caso de falha.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 7,
        question: "Qual é a melhor estratégia para distribuir carga entre múltiplas instâncias?",
        options: ["DNS round-robin", "Application Load Balancer com health checks", "IP fixo", "Proxy reverso manual"],
        correct: [1],
        explanation: "ALB distribui tráfego automaticamente e remove instâncias não saudáveis da rotação.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 8,
        question: "Como garantir que Auto Scaling funcione corretamente durante picos de tráfego?",
        options: ["Scaling manual", "Políticas baseadas em múltiplas métricas com cooldown apropriado", "Instâncias fixas", "Scaling apenas por CPU"],
        correct: [1],
        explanation: "Múltiplas métricas (CPU, memória, requests) com cooldown evitam scaling desnecessário.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 9,
        question: "Qual serviço AWS fornece DNS com failover automático?",
        options: ["Route 53 com health checks", "CloudFront apenas", "ELB apenas", "VPC DNS"],
        correct: [0],
        explanation: "Route 53 health checks monitoram endpoints e fazem failover automático para recursos saudáveis.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 10,
        question: "Como implementar backup cross-region para dados críticos?",
        options: ["Backup local apenas", "S3 Cross-Region Replication + AWS Backup", "Manual copy", "Single region backup"],
        correct: [1],
        explanation: "CRR replica dados automaticamente e AWS Backup pode fazer backup cross-region de múltiplos serviços.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 11,
        question: "Qual é a diferença entre RTO e RPO em disaster recovery?",
        options: ["São iguais", "RTO é tempo para recuperar, RPO é perda de dados aceitável", "RTO é custo, RPO é tempo", "Não há diferença"],
        correct: [1],
        explanation: "RTO (Recovery Time Objective) é tempo máximo para restaurar serviços, RPO (Recovery Point Objective) é perda máxima de dados aceitável.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 12,
        question: "Como implementar circuit breaker pattern na AWS?",
        options: ["API Gateway com throttling", "Lambda com error handling", "ELB health checks", "Todas as anteriores"],
        correct: [3],
        explanation: "Circuit breaker pode ser implementado em múltiplas camadas: API Gateway, Lambda functions e load balancers.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 13,
        question: "Qual estratégia de deployment minimiza downtime?",
        options: ["Big bang deployment", "Blue-green deployment", "Recreate deployment", "Manual deployment"],
        correct: [1],
        explanation: "Blue-green deployment permite testar nova versão e fazer switch instantâneo sem downtime.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 14,
        question: "Como garantir que dados em EBS sejam resilientes?",
        options: ["Single volume", "EBS snapshots regulares + Multi-AZ", "Local storage", "RAM apenas"],
        correct: [1],
        explanation: "EBS snapshots são armazenados no S3 e podem ser restaurados em qualquer AZ.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 15,
        question: "Qual é a melhor prática para monitoramento de saúde de aplicações?",
        options: ["Logs apenas", "CloudWatch + health checks + custom metrics", "Manual checking", "CPU monitoring apenas"],
        correct: [1],
        explanation: "Combinação de CloudWatch, health checks e métricas customizadas fornece visibilidade completa.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 16,
        question: "Como implementar retry logic resiliente?",
        options: ["Retry infinito", "Exponential backoff com jitter", "Retry fixo", "Sem retry"],
        correct: [1],
        explanation: "Exponential backoff com jitter evita thundering herd e reduz carga em sistemas sob stress.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 17,
        question: "Qual serviço AWS ajuda com chaos engineering?",
        options: ["AWS Fault Injection Simulator", "CloudWatch", "X-Ray", "Config"],
        correct: [0],
        explanation: "FIS permite injetar falhas controladas para testar resiliência de sistemas.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 18,
        question: "Como garantir resiliência em arquiteturas serverless?",
        options: ["Lambda em single AZ", "Lambda multi-AZ + DLQ + retry policies", "Sem error handling", "Synchronous apenas"],
        correct: [1],
        explanation: "Lambda automaticamente executa em múltiplas AZs, DLQ captura falhas e retry policies aumentam resiliência.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 19,
        question: "Qual é a melhor estratégia para database failover?",
        options: ["Manual failover", "RDS Multi-AZ com automatic failover", "Single database", "Read replica promotion manual"],
        correct: [1],
        explanation: "RDS Multi-AZ detecta falhas e faz failover automático em 1-2 minutos.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 20,
        question: "Como implementar graceful degradation?",
        options: ["Falhar completamente", "Circuit breakers + fallback responses", "Ignorar erros", "Retry infinito"],
        correct: [1],
        explanation: "Circuit breakers detectam falhas e fallback responses mantêm funcionalidade básica.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 21,
        question: "Qual é a importância de idempotency em sistemas distribuídos?",
        options: ["Não é importante", "Permite retry seguro de operações", "Apenas para performance", "Apenas para segurança"],
        correct: [1],
        explanation: "Idempotency garante que retry de operações não cause efeitos colaterais indesejados.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 22,
        question: "Como implementar bulkhead pattern na AWS?",
        options: ["Single resource pool", "Separate resource pools por função crítica", "Shared resources", "No isolation"],
        correct: [1],
        explanation: "Bulkhead isola recursos críticos em pools separados para evitar que falhas se propaguem.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 23,
        question: "Qual estratégia para backup de bancos de dados distribuídos?",
        options: ["Backup de um nó apenas", "Point-in-time recovery coordenado", "Sem backup", "Backup manual"],
        correct: [1],
        explanation: "Point-in-time recovery coordenado garante consistência entre todos os nós do cluster.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 24,
        question: "Como garantir resiliência de APIs?",
        options: ["Single endpoint", "Rate limiting + circuit breakers + health checks", "Sem proteção", "Manual monitoring"],
        correct: [1],
        explanation: "Combinação de rate limiting, circuit breakers e health checks protege APIs de sobrecarga.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 25,
        question: "Qual é a melhor prática para session management resiliente?",
        options: ["Server-side sessions", "Stateless tokens + external session store", "In-memory apenas", "Database sessions"],
        correct: [1],
        explanation: "Stateless tokens com session store externo (Redis/DynamoDB) permite failover sem perda de sessão.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 26,
        question: "Como implementar timeout apropriados?",
        options: ["Timeout infinito", "Timeouts em cascata com valores apropriados", "Sem timeout", "Timeout fixo"],
        correct: [1],
        explanation: "Timeouts em cascata (client > proxy > service) evitam resource exhaustion.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 27,
        question: "Qual serviço AWS fornece service mesh para resiliência?",
        options: ["App Mesh", "API Gateway", "CloudFront", "Route 53"],
        correct: [0],
        explanation: "App Mesh fornece circuit breakers, retry policies e observability para microservices.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 28,
        question: "Como implementar disaster recovery pilot light?",
        options: ["Full replication", "Core components running + data replication", "Cold backup", "No DR"],
        correct: [1],
        explanation: "Pilot light mantém componentes core rodando com dados replicados, permitindo scale-up rápido.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 29,
        question: "Qual é a importância de correlation IDs?",
        options: ["Não são importantes", "Rastreamento de requests através de sistemas distribuídos", "Apenas para logs", "Apenas para debug"],
        correct: [1],
        explanation: "Correlation IDs permitem rastrear requests através de múltiplos serviços para debugging e monitoring.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 30,
        question: "Como garantir resiliência em message queues?",
        options: ["Single queue", "Dead letter queues + retry policies + visibility timeout", "No error handling", "Synchronous processing"],
        correct: [1],
        explanation: "DLQ captura mensagens com falha, retry policies reprocessam e visibility timeout evita duplicação.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 31,
        question: "Qual estratégia para rolling deployments seguros?",
        options: ["Deploy tudo de uma vez", "Canary deployment com health checks", "Manual deployment", "No testing"],
        correct: [1],
        explanation: "Canary deployment testa nova versão com pequeno percentual de tráfego antes de full rollout.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 32,
        question: "Como implementar rate limiting distribuído?",
        options: ["Local rate limiting", "API Gateway + ElastiCache para state compartilhado", "No rate limiting", "Manual throttling"],
        correct: [1],
        explanation: "API Gateway com ElastiCache permite rate limiting consistente através de múltiplas instâncias.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 33,
        question: "Qual é a melhor prática para connection pooling?",
        options: ["Single connection", "Connection pools com circuit breakers", "Unlimited connections", "No pooling"],
        correct: [1],
        explanation: "Connection pools otimizam recursos e circuit breakers protegem contra connection exhaustion.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 34,
        question: "Como garantir data consistency em sistemas distribuídos?",
        options: ["Strong consistency sempre", "Eventual consistency com conflict resolution", "No consistency", "Manual resolution"],
        correct: [1],
        explanation: "Eventual consistency com estratégias de conflict resolution balanceia performance e consistência.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 35,
        question: "Qual serviço AWS para orchestração resiliente de workflows?",
        options: ["Step Functions com error handling", "Lambda apenas", "SQS apenas", "Manual orchestration"],
        correct: [0],
        explanation: "Step Functions fornece retry policies, error handling e state management para workflows complexos.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 36,
        question: "Como implementar health checks efetivos?",
        options: ["Ping apenas", "Deep health checks com dependencies", "No health checks", "Manual checks"],
        correct: [1],
        explanation: "Deep health checks verificam dependencies críticas e fornecem status real da aplicação.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 37,
        question: "Qual estratégia para cache resiliente?",
        options: ["Single cache instance", "Multi-AZ cache com failover", "No caching", "Local cache apenas"],
        correct: [1],
        explanation: "Multi-AZ cache (ElastiCache) fornece failover automático e alta disponibilidade.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 38,
        question: "Como implementar graceful shutdown?",
        options: ["Kill process", "Drain connections + finish requests + cleanup", "Immediate stop", "No shutdown handling"],
        correct: [1],
        explanation: "Graceful shutdown drena conexões, completa requests em andamento e faz cleanup de recursos.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 39,
        question: "Qual é a importância de monitoring distribuído?",
        options: ["Não é importante", "Visibilidade end-to-end com tracing", "Local monitoring apenas", "Manual monitoring"],
        correct: [1],
        explanation: "Distributed tracing (X-Ray) fornece visibilidade completa de requests através de sistemas distribuídos.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 40,
        question: "Como garantir resiliência de storage?",
        options: ["Single storage", "Multi-AZ storage com replication", "Local storage apenas", "No backup"],
        correct: [1],
        explanation: "Multi-AZ storage (EFS, S3) com replication automática garante durabilidade e disponibilidade.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 41,
        question: "Qual estratégia para error propagation?",
        options: ["Propagate all errors", "Fail fast com error boundaries", "Hide all errors", "Manual handling"],
        correct: [1],
        explanation: "Fail fast com error boundaries evita cascading failures e isola problemas.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 42,
        question: "Como implementar load shedding?",
        options: ["Accept all requests", "Priority-based request dropping", "Random dropping", "No load shedding"],
        correct: [1],
        explanation: "Load shedding baseado em prioridade mantém funcionalidade crítica durante sobrecarga.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 43,
        question: "Qual é a melhor prática para dependency management?",
        options: ["Tight coupling", "Loose coupling com service discovery", "Hard-coded dependencies", "No dependency management"],
        correct: [1],
        explanation: "Loose coupling com service discovery (Route 53, ELB) permite mudanças sem impacto.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 44,
        question: "Como garantir resiliência em batch processing?",
        options: ["Single batch job", "Checkpointing + retry + dead letter processing", "No error handling", "Manual retry"],
        correct: [1],
        explanation: "Checkpointing salva progresso, retry reprocessa falhas e DLQ captura jobs problemáticos.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 45,
        question: "Qual serviço AWS para disaster recovery automation?",
        options: ["Manual processes", "AWS Elastic Disaster Recovery", "Local backup", "No DR"],
        correct: [1],
        explanation: "Elastic Disaster Recovery automatiza replication e failover para DR sites.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 46,
        question: "Como implementar feature flags resilientes?",
        options: ["Hard-coded flags", "External config service com fallbacks", "No feature flags", "Manual flags"],
        correct: [1],
        explanation: "External config service (AppConfig) com fallbacks permite mudanças seguras sem deploy.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 47,
        question: "Qual estratégia para network partitioning?",
        options: ["Ignore partitions", "Partition tolerance com eventual consistency", "Fail immediately", "Manual handling"],
        correct: [1],
        explanation: "Partition tolerance permite operação durante network splits com eventual consistency.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 48,
        question: "Como garantir resiliência de authentication?",
        options: ["Single auth service", "Multi-region auth com token caching", "No auth", "Local auth apenas"],
        correct: [1],
        explanation: "Multi-region auth (Cognito) com token caching mantém autenticação durante falhas.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 49,
        question: "Qual é a importância de capacity planning?",
        options: ["Não é importante", "Prevent resource exhaustion com auto-scaling", "Fixed capacity", "Manual scaling"],
        correct: [1],
        explanation: "Capacity planning com auto-scaling previne resource exhaustion durante picos de demanda.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 50,
        question: "Como implementar progressive delivery?",
        options: ["Big bang release", "Feature flags + canary + blue-green", "Manual rollout", "No delivery strategy"],
        correct: [1],
        explanation: "Progressive delivery combina feature flags, canary e blue-green para releases seguros.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 51,
        question: "Qual estratégia para data backup verification?",
        options: ["No verification", "Automated backup testing + restore validation", "Manual verification", "Trust backups"],
        correct: [1],
        explanation: "Automated testing e restore validation garantem que backups são válidos e restauráveis.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 52,
        question: "Como garantir resiliência de CDN?",
        options: ["Single CDN", "Multi-CDN com failover", "No CDN", "Manual failover"],
        correct: [1],
        explanation: "Multi-CDN strategy com failover automático garante entrega de conteúdo mesmo com falhas de CDN.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 53,
        question: "Qual é a melhor prática para incident response?",
        options: ["Manual response", "Automated incident detection + runbooks", "Ignore incidents", "Reactive only"],
        correct: [1],
        explanation: "Automated detection com runbooks padronizados acelera response e reduz MTTR.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 54,
        question: "Como implementar self-healing systems?",
        options: ["Manual intervention", "Auto-scaling + health checks + auto-restart", "No healing", "Reactive healing"],
        correct: [1],
        explanation: "Self-healing combina auto-scaling, health checks e auto-restart para recuperação automática.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 55,
        question: "Qual estratégia para cross-region resilience?",
        options: ["Single region", "Active-active multi-region com data sync", "Passive backup", "No cross-region"],
        correct: [1],
        explanation: "Active-active multi-region com data synchronization fornece máxima resiliência e performance.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 56,
        question: "Como garantir resiliência de microservices?",
        options: ["Monolithic design", "Service mesh + circuit breakers + bulkheads", "Tight coupling", "No resilience patterns"],
        correct: [1],
        explanation: "Service mesh com circuit breakers e bulkheads isola falhas e mantém resiliência.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 57,
        question: "Qual é a importância de chaos testing?",
        options: ["Não é importante", "Proactive resilience validation", "Apenas para produção", "Manual testing apenas"],
        correct: [1],
        explanation: "Chaos testing valida resiliência proativamente identificando pontos fracos antes de falhas reais.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 58,
        question: "Como implementar resilient data pipelines?",
        options: ["Single pipeline", "Checkpointing + retry + monitoring + alerting", "No error handling", "Manual recovery"],
        correct: [1],
        explanation: "Resilient pipelines usam checkpointing, retry logic, monitoring e alerting para recuperação automática.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 59,
        question: "Qual estratégia para API versioning resiliente?",
        options: ["Breaking changes", "Backward compatibility + graceful deprecation", "No versioning", "Force upgrades"],
        correct: [1],
        explanation: "Backward compatibility com graceful deprecation mantém clientes funcionando durante transições.",
        topic: "resilient", domain: "resilient"
    },
    {
        id: 60,
        question: "Como garantir resilient configuration management?",
        options: ["Hard-coded config", "External config service + validation + rollback", "No config management", "Manual config"],
        correct: [1],
        explanation: "External config service (AppConfig) com validation e rollback permite mudanças seguras de configuração.",
        topic: "resilient", domain: "resilient"
    }
];

window.resilientQuestions = resilientQuestions;