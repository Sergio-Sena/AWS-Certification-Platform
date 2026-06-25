// DVA-C02 Troubleshooting Questions - Questões Reais (36 questões)

const troubleshootingQuestionsReal = [
    // CLOUDWATCH (12 questões)
    {
        id: 'tro_001',
        question: "Lambda function está executando normalmente mas CloudWatch Logs não mostra nenhum log. Function tem print/console.log statements. Qual pode ser a causa?",
        options: [
            "Lambda execution role sem CloudWatchLogsFullAccess, atendendo aos padrões internacionais de privacidade de dados e proteção de informações sensíveis",
            "Log group não foi criado automaticamente",
            "Logs estão sendo enviados para log group diferente",
            "Lambda execution role sem logs:CreateLogGroup, logs:CreateLogStream, logs:PutLogEvents"
        ],
        correct: [3],
        explanation: "Lambda precisa de permissões específicas para CloudWatch Logs. CloudWatchLogsFullAccess é muito amplo; use permissões mínimas necessárias.",
        topic: "cloudwatch",
        domain: "troubleshooting"
    },
    {
        id: 'tro_002',
        question: "CloudWatch custom metric está sendo enviada mas não aparece no console. PutMetricData retorna sucesso. Aguardou 5 minutos. O que verificar?",
        options: [
            "Namespace correto (não pode começar com 'AWS/')",
            "Timestamp não pode ser futuro ou muito antigo",
            "Metric name e dimensions corretos",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Verificar: namespace válido (não AWS/*), timestamp dentro de 14 dias, metric name sem caracteres especiais, dimensions consistentes.",
        topic: "cloudwatch",
        domain: "troubleshooting"
    },
    {
        id: 'tro_003',
        question: "CloudWatch Alarm está em estado INSUFFICIENT_DATA mesmo com métricas sendo enviadas. Alarm configurado para 2 datapoints em 2 períodos. O que pode estar errado?",
        options: [
            "Período muito curto para frequency de métricas",
            "Statistic incompatível com metric type",
            "Missing data treatment configurado como 'missing'",
            "Threshold muito alto/baixo"
        ],
        correct: [0],
        explanation: "Se período é 1min mas métrica é enviada a cada 5min, não haverá datapoints suficientes. Ajustar período ou frequency.",
        topic: "cloudwatch",
        domain: "troubleshooting"
    },
    {
        id: 'tro_004',
        question: "CloudWatch Dashboard mostra 'No data available' para métrica Lambda Duration, mas função está executando. Qual é a causa mais provável?",
        options: [
            "Região incorreta no dashboard",
            "Função Lambda não está sendo invocada",
            "Permissions insuficientes para CloudWatch",
            "Metric filter mal configurado"
        ],
        correct: [0],
        explanation: "Dashboard deve estar na mesma região da função Lambda. Métricas Lambda são regionais.",
        topic: "cloudwatch",
        domain: "troubleshooting"
    },

    // X-RAY (10 questões)
    {
        id: 'tro_005',
        question: "X-Ray não está mostrando traces para função Lambda mesmo com tracing habilitado. Lambda execution role tem AWSXRayDaemonWriteAccess. O que está faltando?",
        options: [
            "X-Ray SDK não está instrumentando o código",
            "Environment variable _X_AMZN_TRACE_ID não está sendo propagada",
            "Sampling rate está muito baixo",
            "X-Ray daemon não está rodando"
        ],
        correct: [0],
        explanation: "Habilitar tracing no Lambda apenas configura environment. Código deve usar X-Ray SDK para criar segments/subsegments.",
        topic: "xray",
        domain: "troubleshooting"
    },
    {
        id: 'tro_006',
        question: "X-Ray trace mostra alta latência em subsegment 'DynamoDB', mas DynamoDB metrics mostram latência normal. Como investigar?",
        options: [
            "Verificar network latency entre Lambda e DynamoDB",
            "Analisar X-Ray annotations para query patterns",
            "Verificar throttling no DynamoDB",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "X-Ray mostra latência end-to-end incluindo network, serialization, retry. Comparar com DynamoDB metrics e analisar annotations.",
        topic: "xray",
        domain: "troubleshooting"
    },
    {
        id: 'tro_007',
        question: "X-Ray service map não mostra conexão entre API Gateway e Lambda, mas requests estão funcionando. Ambos têm tracing habilitado. Por quê?",
        options: [
            "Trace header não está sendo propagado",
            "Lambda não está usando X-Ray SDK",
            "API Gateway e Lambda em regiões diferentes",
            "Sampling rate muito baixo"
        ],
        correct: [1],
        explanation: "API Gateway propaga trace header, mas Lambda deve usar X-Ray SDK para criar segments que conectam no service map.",
        topic: "xray",
        domain: "troubleshooting"
    },
    {
        id: 'tro_008',
        question: "X-Ray trace mostra erro 'Throttled' em subsegment, mas aplicação não reporta erros. Como interpretar?",
        options: [
            "X-Ray está sendo throttled, não a aplicação, com documentação completa do processo e rastreabilidade de todas as decisões implementadas",
            "Throttling foi resolvido por retry automático",
            "Erro falso positivo do X-Ray",
            "Throttling em service downstream"
        ],
        correct: [1],
        explanation: "X-Ray captura todos os erros, incluindo os que foram resolvidos por retry. Verificar retry logic e error handling.",
        topic: "xray",
        domain: "troubleshooting"
    },

    // PERFORMANCE OPTIMIZATION (8 questões)
    {
        id: 'tro_009',
        question: "Lambda function tem duration média de 5s mas billing duration de 8s. Memory utilization = 60%. Como otimizar custo?",
        options: [
            "Reduzir memory allocation",
            "Otimizar código para usar menos CPU, incluindo configuração avançada de parâmetros e monitoramento contínuo do sistema em produção",
            "Aumentar memory para reduzir duration",
            "Usar Provisioned Concurrency"
        ],
        correct: [2],
        explanation: "Billing duration > actual duration indica CPU-bound workload. Aumentar memory também aumenta CPU, reduzindo duration e custo total.",
        topic: "performance",
        domain: "troubleshooting"
    },
    {
        id: 'tro_010',
        question: "DynamoDB table com 1000 RCU está apresentando ReadThrottledEvents. Queries são distribuídas uniformemente por partition key. Qual pode ser a causa?",
        options: [
            "Hot partition key",
            "Query pattern ineficiente, com integração completa ao ecossistema de serviços gerenciados e pipelines automatizados",
            "RCU insuficiente para burst traffic",
            "GSI throttling"
        ],
        correct: [2],
        explanation: "Mesmo com distribuição uniforme, burst traffic pode exceder RCU. DynamoDB permite burst até 300 segundos, depois throttle.",
        topic: "performance",
        domain: "troubleshooting"
    },
    {
        id: 'tro_011',
        question: "API Gateway está retornando latência de 2s+ para requests simples. Lambda duration = 100ms. Onde está o overhead?",
        options: [
            "Lambda cold start",
            "API Gateway processing overhead",
            "Network latency",
            "Lambda initialization time"
        ],
        correct: [0],
        explanation: "Lambda duration não inclui cold start. 2s latência com 100ms duration indica cold start de ~1.9s. Considerar Provisioned Concurrency.",
        topic: "performance",
        domain: "troubleshooting"
    },
    {
        id: 'tro_012',
        question: "S3 GetObject requests têm latência inconsistente: 50ms-2s. Bucket está na mesma região. Como investigar?",
        options: [
            "Verificar S3 request patterns e hotspotting",
            "Analisar object size distribution",
            "Verificar S3 Transfer Acceleration",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Latência inconsistente pode indicar: hotspotting (request pattern), object size variável, ou network issues. Investigar todos os fatores.",
        topic: "performance",
        domain: "troubleshooting"
    },

    // ERROR HANDLING (6 questões)
    {
        id: 'tro_013',
        question: "SQS queue tem 1000 mensagens em DLQ após Lambda processing. Lambda logs mostram 'Task timed out after 30.00 seconds'. Como debuggar?",
        options: [
            "Aumentar Lambda timeout",
            "Analisar Lambda duration metrics para identificar bottleneck",
            "Reduzir SQS batch size",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Timeout pode indicar: código ineficiente (analisar duration), batch muito grande (reduzir), ou timeout insuficiente (aumentar).",
        topic: "error-handling",
        domain: "troubleshooting"
    },
    {
        id: 'tro_014',
        question: "Lambda function está retornando erro 'Unable to import module' intermitentemente. Deployment package não mudou. Qual pode ser a causa?",
        options: [
            "Cold start issue com dependencies",
            "Lambda runtime version incompatibility",
            "Memory pressure durante import",
            "Concurrent execution limit"
        ],
        correct: [2],
        explanation: "Erro intermitente de import pode indicar memory pressure. Dependencies grandes podem causar OOM durante import em instâncias com pouca memória.",
        topic: "error-handling",
        domain: "troubleshooting"
    },
    {
        id: 'tro_015',
        question: "API Gateway retorna erro 504 'Gateway Timeout' mas Lambda function completa em 10s (timeout = 30s). Qual é a causa?",
        options: [
            "API Gateway timeout é 29s, menor que Lambda",
            "Lambda está sendo throttled",
            "Network timeout entre API Gateway e Lambda, considerando requisitos de compliance, governança e auditoria para ambientes regulados",
            "CORS preflight timeout"
        ],
        correct: [0],
        explanation: "API Gateway tem timeout máximo de 29s. Se Lambda pode demorar mais, usar async processing com SQS/SNS.",
        topic: "error-handling",
        domain: "troubleshooting"
    },

    // ADDITIONAL CLOUDWATCH (6 questões)
    {
        id: 'tro_016',
        question: "CloudWatch Logs Insights query está retornando timeout para log group com 100GB. Como otimizar?",
        options: [
            "Reduzir time range da query",
            "Usar filtros mais específicos",
            "Limitar fields no SELECT",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Otimizar Insights queries: time range menor, filtros específicos, e selecionar apenas fields necessários.",
        topic: "cloudwatch",
        domain: "troubleshooting"
    },
    {
        id: 'tro_017',
        question: "CloudWatch metric filter não está capturando logs esperados. Pattern está correto. O que verificar?",
        options: [
            "Log format mudou",
            "Metric filter foi criado após logs existentes",
            "Case sensitivity no pattern",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Metric filters só processam novos logs. Verificar: formato dos logs, timing da criação, e case sensitivity.",
        topic: "cloudwatch",
        domain: "troubleshooting"
    },
    {
        id: 'tro_018',
        question: "CloudWatch dashboard está mostrando dados desatualizados (delay de 10+ minutos). Como resolver?",
        options: [
            "Refresh dashboard manualmente",
            "Verificar period das métricas",
            "Check metric timestamp",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Dados desatualizados: verificar auto-refresh, period configuration, e timestamp das métricas enviadas.",
        topic: "cloudwatch",
        domain: "troubleshooting"
    },
    {
        id: 'tro_019',
        question: "CloudWatch Synthetics canary está falhando mas aplicação funciona normalmente. Como debuggar?",
        options: [
            "Analisar canary logs detalhados",
            "Verificar network connectivity do canary",
            "Check canary script logic",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Canary failures: analisar logs, verificar network do canary environment, e validar script logic.",
        topic: "cloudwatch",
        domain: "troubleshooting"
    },
    {
        id: 'tro_020',
        question: "CloudWatch composite alarm está em estado INSUFFICIENT_DATA mesmo com child alarms OK. Por quê?",
        options: [
            "Child alarms em regiões diferentes",
            "Composite alarm rule mal configurada",
            "Missing data treatment inconsistente",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Composite alarms: verificar child alarms na mesma região, rule syntax, e consistent missing data treatment.",
        topic: "cloudwatch",
        domain: "troubleshooting"
    },
    {
        id: 'tro_021',
        question: "CloudWatch Events rule não está triggerando Lambda para S3 events. S3 event notifications configuradas. O que verificar?",
        options: [
            "S3 deve enviar para EventBridge, não CloudWatch Events",
            "Event pattern deve match S3 event structure",
            "Lambda permissions para EventBridge",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "S3 + EventBridge: habilitar EventBridge no bucket, event pattern correto, e Lambda permissions adequadas.",
        topic: "cloudwatch",
        domain: "troubleshooting"
    },

    // ADDITIONAL X-RAY (4 questões)
    {
        id: 'tro_022',
        question: "X-Ray sampling rules estão coletando muitos traces (>10000/min) impactando performance. Como otimizar?",
        options: [
            "Reduzir sampling rate",
            "Usar reservoir sampling",
            "Criar rules específicas por service",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Otimizar sampling: reduzir rate, usar reservoir para burst, e rules específicas para different services.",
        topic: "xray",
        domain: "troubleshooting"
    },
    {
        id: 'tro_023',
        question: "X-Ray trace tem gaps entre services. Requests funcionam mas service map não mostra conexões. Como resolver?",
        options: [
            "Verificar trace header propagation",
            "Todos services devem usar X-Ray SDK",
            "Check sampling consistency",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Service map gaps: verificar header propagation, SDK usage em todos services, e sampling consistency.",
        topic: "xray",
        domain: "troubleshooting"
    },
    {
        id: 'tro_024',
        question: "X-Ray annotations não aparecem em filter options. Annotations estão sendo enviadas. O que verificar?",
        options: [
            "Annotation keys devem ser strings",
            "Values devem ser strings, numbers ou booleans",
            "Aguardar indexing (até 5 minutos)",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Annotations indexing: keys string, values simples, e aguardar até 5min para aparecer em filters.",
        topic: "xray",
        domain: "troubleshooting"
    },
    {
        id: 'tro_025',
        question: "X-Ray está mostrando alta latência para DynamoDB mas métricas DDB são normais. Como investigar?",
        options: [
            "X-Ray inclui client-side latency",
            "Verificar network latency",
            "Analisar retry attempts",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "X-Ray latência end-to-end inclui: client processing, network, retries. Comparar com DDB server-side metrics.",
        topic: "xray",
        domain: "troubleshooting"
    },

    // ADDITIONAL PERFORMANCE (5 questões)
    {
        id: 'tro_026',
        question: "Lambda function memory utilization é 90% mas duration não melhora aumentando memory. Por quê?",
        options: [
            "Function é I/O bound, não CPU bound",
            "Memory leak no código",
            "External API latency",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "High memory usage sem melhoria: I/O bottlenecks, memory leaks, ou external dependencies lentas.",
        topic: "performance",
        domain: "troubleshooting"
    },
    {
        id: 'tro_027',
        question: "API Gateway cache hit ratio é baixo (20%) mesmo com TTL alto. Como investigar?",
        options: [
            "Analisar cache keys (query params, headers)",
            "Verificar cache-busting headers",
            "Check request patterns",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Low cache hit: verificar cache key composition, headers que invalidam cache, e patterns de requests.",
        topic: "performance",
        domain: "troubleshooting"
    },
    {
        id: 'tro_028',
        question: "DynamoDB auto-scaling não está respondendo a traffic spikes. RCU/WCU ficam baixos durante picos. Por quê?",
        options: [
            "Auto-scaling tem delay de 2-10 minutos",
            "Target utilization muito alto",
            "Scaling policies mal configuradas",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Auto-scaling issues: delay natural, target utilization inadequado, ou policies mal configuradas.",
        topic: "performance",
        domain: "troubleshooting"
    },
    {
        id: 'tro_029',
        question: "S3 Transfer Acceleration não está melhorando upload speed. Como debuggar?",
        options: [
            "Testar com S3 speed test tool",
            "Verificar distância para edge locations",
            "Comparar com direct S3 endpoint",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Transfer Acceleration debugging: usar speed test, verificar geografia, e comparar performance com endpoint direto.",
        topic: "performance",
        domain: "troubleshooting"
    },
    {
        id: 'tro_030',
        question: "ElastiCache Redis cluster tem alta CPU mas baixo memory usage. Como otimizar?",
        options: [
            "Analisar slow log para queries caras",
            "Verificar key patterns e data structures",
            "Consider read replicas",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "High CPU Redis: analisar slow queries, otimizar data structures, e considerar read replicas para distribuição.",
        topic: "performance",
        domain: "troubleshooting"
    },

    // ADDITIONAL ERROR HANDLING (6 questões)
    {
        id: 'tro_031',
        question: "Lambda function tem 10% error rate mas logs não mostram erros. Como investigar?",
        options: [
            "Verificar CloudWatch metrics vs logs",
            "Errors podem ser timeouts sem logs",
            "Check invocation source errors",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Errors sem logs: timeouts, out-of-memory, ou errors no invocation source (API Gateway, SQS, etc).",
        topic: "error-handling",
        domain: "troubleshooting"
    },
    {
        id: 'tro_032',
        question: "SQS DLQ tem mensagens mas não consegue processar. Mensagens parecem corretas. Como debuggar?",
        options: [
            "Verificar message attributes",
            "Check visibility timeout vs processing time",
            "Analisar receive count",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "DLQ debugging: verificar attributes, visibility timeout adequado, e receive count para identificar padrões.",
        topic: "error-handling",
        domain: "troubleshooting"
    },
    {
        id: 'tro_033',
        question: "API Gateway está retornando erro 500 intermitentemente. Lambda logs mostram sucesso. Como investigar?",
        options: [
            "Verificar Lambda response format",
            "Check API Gateway timeout vs Lambda duration",
            "Analisar CloudWatch API Gateway logs",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "API Gateway 500 errors: verificar response format, timeouts, e habilitar detailed logging no API Gateway.",
        topic: "error-handling",
        domain: "troubleshooting"
    },
    {
        id: 'tro_034',
        question: "DynamoDB está retornando ValidationException mas item structure parece correto. Como debuggar?",
        options: [
            "Verificar attribute types",
            "Check reserved keywords",
            "Validate item size limits",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "DynamoDB ValidationException: verificar data types, reserved keywords, e limits (400KB item, 255 attributes, etc).",
        topic: "error-handling",
        domain: "troubleshooting"
    },
    {
        id: 'tro_035',
        question: "Step Functions workflow está falhando com 'States.Runtime' error. Como identificar a causa?",
        options: [
            "Analisar execution history",
            "Verificar input/output de cada state",
            "Check IAM permissions por state",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Step Functions debugging: execution history detalhado, input/output validation, e permissions por state.",
        topic: "error-handling",
        domain: "troubleshooting"
    },
    {
        id: 'tro_036',
        question: "EventBridge rule está configurada mas events não estão chegando no target. Como debuggar?",
        options: [
            "Verificar event pattern matching",
            "Check target permissions",
            "Analisar EventBridge metrics",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "EventBridge debugging: testar event patterns, verificar target permissions, e monitorar metrics de matched/failed events.",
        topic: "error-handling",
        domain: "troubleshooting"
    }
];

window.troubleshootingQuestionsReal = troubleshootingQuestionsReal;