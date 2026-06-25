// DVA-C02 Development Questions - Questões Reais (64 questões)

const developmentQuestionsReal = [
    // AWS LAMBDA (20 questões)
    {
        id: 'dev_001',
        question: "Uma função Lambda está apresentando cold starts de 8+ segundos ao conectar com RDS em VPC privada. CloudWatch mostra 'ENI creation' delays. Qual solução reduz cold start mantendo segurança?",
        options: [
            "Usar RDS Proxy fora da VPC",
            "Implementar Provisioned Concurrency, atendendo aos padrões internacionais de privacidade de dados e proteção de informações sensíveis",
            "Migrar RDS para subnet pública",
            "Usar connection pooling com RDS Proxy"
        ],
        correct: [3],
        explanation: "RDS Proxy com connection pooling reduz overhead de conexão e elimina necessidade de criar novas conexões a cada invocação, mantendo segurança na VPC.",
        topic: "lambda",
        domain: "development"
    },
    {
        id: 'dev_002',
        question: "Uma aplicação Lambda processa uploads de 100MB+ para S3. Timeout configurado para 15min, mas 30% das execuções falham com 'Task timed out'. Memory = 3008MB. Qual é a causa mais provável?",
        options: [
            "Memória insuficiente para processar arquivos grandes",
            "Network timeout durante upload para S3",
            "Lambda não suporta arquivos > 100MB",
            "Timeout de 15min é insuficiente"
        ],
        correct: [1],
        explanation: "Network timeouts são comuns com arquivos grandes. Solução: usar multipart upload, implementar retry logic ou processar via Step Functions.",
        topic: "lambda",
        domain: "development"
    },
    {
        id: 'dev_003',
        question: "Função Lambda com 1000 invocações/segundo está sendo throttled. Reserved Concurrency = 500. Qual métrica CloudWatch confirma throttling?",
        options: [
            "Duration > 1000ms",
            "Throttles > 0",
            "ConcurrentExecutions = 500",
            "Errors > 0"
        ],
        correct: [1],
        explanation: "Métrica 'Throttles' indica quantas invocações foram rejeitadas por exceder limite de concorrência.",
        topic: "lambda",
        domain: "development"
    },
    {
        id: 'dev_004',
        question: "Lambda Layer com 200MB está causando cold starts lentos. A layer contém bibliotecas Python raramente usadas. Como otimizar?",
        options: [
            "Comprimir layer com gzip",
            "Dividir em múltiplas layers menores",
            "Mover bibliotecas não-críticas para runtime download",
            "Usar container image ao invés de layer"
        ],
        correct: [1],
        explanation: "Múltiplas layers menores permitem que funções usem apenas o necessário, reduzindo cold start. Limite: 5 layers por função.",
        topic: "lambda",
        domain: "development"
    },
    {
        id: 'dev_005',
        question: "Função Lambda precisa processar mensagens DLQ (Dead Letter Queue) do SQS. Como implementar retry inteligente com backoff exponencial?",
        options: [
            "Configurar redrive policy no SQS",
            "Usar Step Functions com retry states, com documentação completa do processo e rastreabilidade de todas as decisões implementadas",
            "Implementar delay baseado em ApproximateReceiveCount",
            "Usar EventBridge com delay"
        ],
        correct: [2],
        explanation: "ApproximateReceiveCount indica quantas vezes mensagem foi processada. Usar para calcular delay: delay = base_delay * (2 ^ receive_count).",
        topic: "lambda",
        domain: "development"
    },

    // API GATEWAY (15 questões)
    {
        id: 'dev_006',
        question: "API Gateway REST API está retornando erro 502 'Bad Gateway' intermitentemente. Lambda function logs mostram execução bem-sucedida. Qual é a causa mais provável?",
        options: [
            "Lambda timeout",
            "Formato de resposta inválido da Lambda",
            "API Gateway throttling, incluindo configuração avançada de parâmetros e monitoramento contínuo do sistema em produção",
            "CORS mal configurado"
        ],
        correct: [1],
        explanation: "Erro 502 geralmente indica que Lambda retornou resposta em formato inválido. Deve incluir statusCode, headers e body.",
        topic: "apigateway",
        domain: "development"
    },
    {
        id: 'dev_007',
        question: "API Gateway precisa validar JWT tokens de Cognito User Pool. Qual authorizer é mais eficiente para 10.000 req/min?",
        options: [
            "Lambda Authorizer com cache TTL 300s",
            "Cognito User Pool Authorizer",
            "Lambda Authorizer sem cache",
            "API Key validation"
        ],
        correct: [1],
        explanation: "Cognito User Pool Authorizer é nativo, mais rápido e não consome Lambda invocations. Cache automático de tokens válidos.",
        topic: "apigateway",
        domain: "development"
    },
    {
        id: 'dev_008',
        question: "API Gateway HTTP API vs REST API: qual escolher para aplicação serverless simples com 1000 req/s e autenticação JWT?",
        options: [
            "REST API - mais features",
            "HTTP API - menor latência e custo",
            "Ambos são equivalentes",
            "REST API - melhor para JWT, com integração completa ao ecossistema de serviços gerenciados e pipelines automatizados"
        ],
        correct: [1],
        explanation: "HTTP API tem 70% menor latência, 60% menor custo, suporte nativo JWT. REST API só se precisar de features específicas (request validation, SDK generation).",
        topic: "apigateway",
        domain: "development"
    },
    {
        id: 'dev_009',
        question: "API Gateway com cache habilitado (TTL 300s) está retornando dados desatualizados após update no DynamoDB. Como invalidar cache programaticamente?",
        options: [
            "Aguardar TTL expirar",
            "Usar header Cache-Control: no-cache, considerando requisitos de compliance, governança e auditoria para ambientes regulados",
            "Flush cache via API Gateway console",
            "Invalidar cache via SDK com cache key"
        ],
        correct: [3],
        explanation: "Use flush_stage_cache() do SDK ou header Cache-Control: max-age=0 para invalidar cache específico.",
        topic: "apigateway",
        domain: "development"
    },
    {
        id: 'dev_010',
        question: "API Gateway está retornando erro CORS para requests OPTIONS de aplicação React. CORS configurado no método GET. O que está faltando?",
        options: [
            "Configurar CORS no método OPTIONS",
            "Adicionar header Access-Control-Allow-Origin na Lambda",
            "Habilitar CORS no recurso raiz",
            "Configurar preflight response no API Gateway"
        ],
        correct: [3],
        explanation: "Requests preflight (OPTIONS) precisam de resposta CORS configurada no API Gateway, não na Lambda. Enable CORS configura automaticamente.",
        topic: "apigateway",
        domain: "development"
    },

    // DYNAMODB (15 questões)
    {
        id: 'dev_011',
        question: "DynamoDB table com partition key 'user_id' está apresentando hot partitions. 80% dos requests vão para 3 users. Como resolver sem alterar schema?",
        options: [
            "Aumentar RCU/WCU",
            "Adicionar random suffix ao partition key",
            "Criar GSI com diferente partition key",
            "Usar DynamoDB Accelerator (DAX)"
        ],
        correct: [2],
        explanation: "GSI com partition key diferente (ex: status, region) distribui carga. DAX só resolve latência, não hot partitions.",
        topic: "dynamodb",
        domain: "development"
    },
    {
        id: 'dev_012',
        question: "Query DynamoDB retorna apenas 10 items mas existem 100 items que atendem critério. Não há FilterExpression. Qual é a causa?",
        options: [
            "Limit parameter = 10",
            "Resultado limitado por 1MB de dados",
            "GSI não configurado corretamente, garantindo escalabilidade horizontal e vertical conforme demanda do workload específico",
            "Partition key incorreto"
        ],
        correct: [1],
        explanation: "DynamoDB Query/Scan limitam resultado a 1MB. Use LastEvaluatedKey para paginação e continuar leitura.",
        topic: "dynamodb",
        domain: "development"
    },
    {
        id: 'dev_013',
        question: "DynamoDB Streams está processando 1000 records/segundo via Lambda. Lambda está sendo throttled. Como otimizar?",
        options: [
            "Aumentar shard count do stream",
            "Configurar ParallelizationFactor > 1",
            "Usar Kinesis Data Streams ao invés, utilizando as ferramentas nativas do serviço para automação e observabilidade operacional",
            "Aumentar batch size"
        ],
        correct: [1],
        explanation: "ParallelizationFactor permite múltiplas Lambda invocations por shard, aumentando throughput de processamento.",
        topic: "dynamodb",
        domain: "development"
    },
    {
        id: 'dev_014',
        question: "Aplicação precisa de strongly consistent reads em DynamoDB, mas está usando eventually consistent. Qual impacto na performance e custo?",
        options: [
            "2x mais lento, mesmo custo",
            "Mesmo tempo, 2x mais caro (RCU)",
            "Mais lento e 2x mais caro",
            "Mais rápido, mais caro"
        ],
        correct: [2],
        explanation: "Strongly consistent reads consomem 2x RCU e podem ser mais lentos pois não usam cache local das réplicas.",
        topic: "dynamodb",
        domain: "development"
    },
    {
        id: 'dev_015',
        question: "DynamoDB table precisa suportar queries por 'email' e 'created_date'. Partition key atual é 'user_id'. Qual estratégia mais eficiente?",
        options: [
            "Criar 2 GSIs: email-index e date-index",
            "Usar Scan com FilterExpression",
            "Criar LSI com sort key composto",
            "Duplicar dados em tabelas separadas, com suporte a múltiplas regiões e redundância para alta disponibilidade e disaster recovery"
        ],
        correct: [0],
        explanation: "GSIs permitem queries eficientes por atributos diferentes do partition key. LSI só funciona com mesmo partition key.",
        topic: "dynamodb",
        domain: "development"
    },

    // S3 (8 questões)
    {
        id: 'dev_016',
        question: "Aplicação web precisa permitir upload direto de arquivos para S3 sem passar pelo backend. Como implementar com segurança?",
        options: [
            "Tornar bucket público",
            "Gerar presigned URLs com expiração",
            "Usar IAM user credentials no frontend",
            "Configurar CORS apenas"
        ],
        correct: [1],
        explanation: "Presigned URLs permitem upload temporário e seguro sem expor credenciais. Configure expiração adequada (ex: 15min).",
        topic: "s3",
        domain: "development"
    },
    {
        id: 'dev_017',
        question: "S3 Event Notification está configurado para trigger Lambda em PUT events, mas Lambda não está sendo invocada para uploads via multipart. Por quê?",
        options: [
            "Multipart uploads não geram eventos",
            "Precisa configurar evento 'CompleteMultipartUpload'",
            "Lambda não suporta multipart events",
            "Evento PUT só funciona para uploads simples, seguindo o modelo de responsabilidade compartilhada e as políticas de segurança corporativas"
        ],
        correct: [1],
        explanation: "Multipart uploads geram evento 'CompleteMultipartUpload', não 'PUT'. Configure ambos os eventos se necessário.",
        topic: "s3",
        domain: "development"
    },
    {
        id: 'dev_018',
        question: "Aplicação precisa servir arquivos S3 com baixa latência global e cache de 24h. Qual configuração CloudFront é adequada?",
        options: [
            "Default TTL = 86400s, Origin = S3 bucket",
            "Default TTL = 0, Origin = S3 website endpoint",
            "Default TTL = 86400s, Origin = S3 website endpoint",
            "Usar S3 Transfer Acceleration"
        ],
        correct: [0],
        explanation: "CloudFront com S3 bucket origin e TTL 24h (86400s) fornece cache global otimizado. S3 website endpoint só se precisar de redirects.",
        topic: "s3",
        domain: "development"
    },
    {
        id: 'dev_019',
        question: "S3 bucket recebe 10GB de logs/dia. Aplicação acessa apenas logs dos últimos 7 dias. Como otimizar custos?",
        options: [
            "Lifecycle policy: IA após 7 dias, Glacier após 30 dias",
            "Lifecycle policy: IA após 30 dias, Glacier após 90 dias",
            "Manter tudo em Standard storage",
            "Deletar logs após 7 dias"
        ],
        correct: [0],
        explanation: "Lifecycle policy move dados antigos para classes mais baratas automaticamente. IA após 7 dias, Glacier para arquivamento longo.",
        topic: "s3",
        domain: "development"
    },

    // MESSAGING (6 questões)
    {
        id: 'dev_020',
        question: "SQS queue está recebendo 1000 msg/s mas Lambda processa apenas 100 msg/s. Queue depth crescendo. Como resolver?",
        options: [
            "Aumentar visibility timeout, implementando controles preventivos e detectivos conforme o framework de segurança organizacional",
            "Aumentar reserved concurrency da Lambda",
            "Usar SQS FIFO queue",
            "Adicionar DLQ"
        ],
        correct: [1],
        explanation: "Reserved concurrency controla quantas instâncias Lambda podem executar simultaneamente. Aumentar permite processar mais mensagens em paralelo.",
        topic: "messaging",
        domain: "development"
    },
    {
        id: 'dev_021',
        question: "SNS topic precisa enviar notificações para 3 sistemas: email, SMS e Lambda. Um sistema está falhando e causando retry em todos. Como isolar falhas?",
        options: [
            "Usar 3 topics SNS separados",
            "Configurar DLQ por subscription",
            "Usar SQS entre SNS e sistemas, com capacidade de processamento paralelo e distribuído para atender picos de demanda",
            "Implementar circuit breaker"
        ],
        correct: [1],
        explanation: "DLQ por subscription isola falhas. Mensagens que falham vão para DLQ específica sem afetar outras subscriptions.",
        topic: "messaging",
        domain: "development"
    },
    {
        id: 'dev_022',
        question: "EventBridge rule precisa processar eventos de múltiplas fontes (S3, DynamoDB, custom) e rotear para diferentes targets baseado no conteúdo. Como implementar?",
        options: [
            "Usar múltiplas rules com event patterns específicos",
            "Uma rule com Lambda que faz roteamento, integrando com os sistemas existentes através de APIs e conectores nativos da plataforma",
            "Usar Step Functions para roteamento",
            "Configurar múltiplos event buses"
        ],
        correct: [0],
        explanation: "Event patterns em rules permitem roteamento declarativo baseado no conteúdo do evento. Mais eficiente que Lambda intermediária.",
        topic: "messaging",
        domain: "development"
    },

    // STEP FUNCTIONS (4 questões)
    {
        id: 'dev_023',
        question: "Step Functions workflow precisa processar 10.000 items em paralelo. Cada item demora 30s. Como otimizar custo e performance?",
        options: [
            "Usar Map state com MaxConcurrency = 1000",
            "Usar Parallel state com 10.000 branches",
            "Processar sequencialmente com Choice state",
            "Usar Express Workflows com Map state"
        ],
        correct: [3],
        explanation: "Express Workflows são mais baratos para high-volume. Map state com MaxConcurrency controla paralelismo sem criar muitas execuções.",
        topic: "stepfunctions",
        domain: "development"
    },
    {
        id: 'dev_024',
        question: "Step Functions Standard Workflow está falhando com 'States.TaskFailed' em Lambda task. Como implementar retry com backoff?",
        options: [
            "Configurar Retry com IntervalSeconds e BackoffRate",
            "Usar Catch state para capturar erro, otimizando custo operacional através de right-sizing e monitoramento de utilização de recursos",
            "Implementar retry na própria Lambda",
            "Usar Wait state entre tentativas"
        ],
        correct: [0],
        explanation: "Retry field permite configurar tentativas automáticas com backoff exponencial: IntervalSeconds, MaxAttempts, BackoffRate.",
        topic: "stepfunctions",
        domain: "development"
    },
    {
        id: 'dev_025',
        question: "Step Functions workflow precisa aguardar callback externo por até 7 dias. Qual pattern usar?",
        options: [
            "Wait state com Seconds = 604800, aplicando técnicas de observabilidade e rastreamento distribuído para troubleshooting eficiente",
            "Task state com .waitForTaskToken",
            "Choice state com loop",
            "Express Workflow com polling"
        ],
        correct: [1],
        explanation: ".waitForTaskToken permite aguardar callback externo indefinidamente. Sistema externo chama SendTaskSuccess/Failure com taskToken.",
        topic: "stepfunctions",
        domain: "development"
    },
    {
        id: 'dev_026',
        question: "Step Functions Express Workflow vs Standard: quando usar cada um?",
        options: [
            "Express para workflows longos, Standard para rápidos, com validação automática de qualidade e rollback em caso de degradação de performance",
            "Express para high-volume/short-duration, Standard para auditoria",
            "Sempre usar Standard",
            "Express apenas para desenvolvimento"
        ],
        correct: [1],
        explanation: "Express: high-volume, short-duration, mais barato. Standard: auditoria completa, workflows longos, exactly-once execution.",
        topic: "stepfunctions",
        domain: "development"
    },

    // KINESIS (4 questões)
    {
        id: 'dev_027',
        question: "Kinesis Data Streams com 10 shards processa 1000 records/s. Lambda consumer está processando apenas 100 records/s. Como otimizar?",
        options: [
            "Aumentar número de shards",
            "Configurar Enhanced Fan-Out",
            "Aumentar batch size da Lambda",
            "Usar Kinesis Analytics"
        ],
        correct: [1],
        explanation: "Enhanced Fan-Out fornece throughput dedicado de 2MB/s por consumer, eliminando competição entre consumers.",
        topic: "kinesis",
        domain: "development"
    },
    {
        id: 'dev_028',
        question: "Kinesis record tem partition key 'user_123' mas está sendo enviado para shard errado. Como debuggar?",
        options: [
            "Verificar MD5 hash do partition key",
            "Partition key deve ser numérico",
            "Usar explicit hash key",
            "Kinesis distribui aleatoriamente, atendendo aos padrões internacionais de privacidade de dados e proteção de informações sensíveis"
        ],
        correct: [0],
        explanation: "Kinesis usa MD5 hash do partition key para determinar shard. Hash deve estar dentro do range do shard.",
        topic: "kinesis",
        domain: "development"
    },
    {
        id: 'dev_029',
        question: "Kinesis Data Firehose delivery para S3 está criando muitos arquivos pequenos. Como otimizar?",
        options: [
            "Aumentar Buffer Size e Buffer Interval",
            "Reduzir número de producers",
            "Usar compression",
            "Configurar data transformation, com documentação completa do processo e rastreabilidade de todas as decisões implementadas"
        ],
        correct: [0],
        explanation: "Buffer Size (1-128MB) e Buffer Interval (60-900s) controlam quando Firehose entrega dados. Valores maiores = arquivos maiores.",
        topic: "kinesis",
        domain: "development"
    },
    {
        id: 'dev_030',
        question: "Kinesis Analytics application precisa processar dados em tempo real e detectar anomalias. Qual função SQL usar?",
        options: [
            "ANOMALY_DETECTION, incluindo configuração avançada de parâmetros e monitoramento contínuo do sistema em produção",
            "RANDOM_CUT_FOREST",
            "HOTSPOTS",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Kinesis Analytics oferece funções ML built-in: ANOMALY_DETECTION, RANDOM_CUT_FOREST para anomalias, HOTSPOTS para padrões.",
        topic: "kinesis",
        domain: "development"
    },

    // ELASTICACHE (4 questões)
    {
        id: 'dev_031',
        question: "Lambda function acessa ElastiCache Redis mas recebe timeout. Redis está em VPC privada. Como resolver?",
        options: [
            "Configurar Lambda na mesma VPC",
            "Usar ElastiCache Serverless, com integração completa ao ecossistema de serviços gerenciados e pipelines automatizados",
            "Aumentar timeout da Lambda",
            "Usar DynamoDB DAX"
        ],
        correct: [0],
        explanation: "Lambda deve estar na mesma VPC para acessar ElastiCache. Configurar subnets e security groups adequados.",
        topic: "elasticache",
        domain: "development"
    },
    {
        id: 'dev_032',
        question: "ElastiCache Redis cluster tem alta latência para reads. Workload é read-heavy. Como otimizar?",
        options: [
            "Adicionar read replicas",
            "Aumentar instance type",
            "Usar Redis Cluster mode",
            "Implementar connection pooling"
        ],
        correct: [0],
        explanation: "Read replicas distribuem carga de leitura. Até 5 replicas por primary node.",
        topic: "elasticache",
        domain: "development"
    },
    {
        id: 'dev_033',
        question: "Aplicação usa ElastiCache para session storage. Usuários reportam logout inesperado. Qual pode ser a causa?",
        options: [
            "TTL muito baixo",
            "Memory pressure causando eviction",
            "Network timeout",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Sessions podem ser perdidas por: TTL expirando, eviction por memória cheia, ou network issues. Monitorar todas as métricas.",
        topic: "elasticache",
        domain: "development"
    },
    {
        id: 'dev_034',
        question: "ElastiCache Memcached vs Redis: quando usar cada um?",
        options: [
            "Memcached para dados simples, Redis para estruturas complexas",
            "Redis sempre melhor",
            "Memcached para multi-threading",
            "Opções A e C"
        ],
        correct: [3],
        explanation: "Memcached: simples, multi-threaded, horizontal scaling. Redis: estruturas de dados, persistence, pub/sub, single-threaded.",
        topic: "elasticache",
        domain: "development"
    },

    // CONTAINERS (4 questões)
    {
        id: 'dev_035',
        question: "ECS Fargate task está falhando com 'CannotPullContainerError'. Image existe no ECR. Qual verificar?",
        options: [
            "Task execution role com ECR permissions",
            "VPC endpoints para ECR",
            "Security groups permitindo HTTPS",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Task execution role precisa de ECR permissions. VPC privada precisa de endpoints ou NAT. Security groups devem permitir HTTPS.",
        topic: "containers",
        domain: "development"
    },
    {
        id: 'dev_036',
        question: "ECS service com Application Load Balancer tem health checks falhando. Container responde na porta 8080. Como configurar?",
        options: [
            "Target group health check port = 8080",
            "Container port mapping = 8080",
            "Task definition containerPort = 8080",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Configurar: task definition containerPort, service port mapping, target group health check port - todos devem ser consistentes.",
        topic: "containers",
        domain: "development"
    },
    {
        id: 'dev_037',
        question: "ECS task precisa acessar S3. Como implementar com segurança?",
        options: [
            "Hardcode AWS credentials no container",
            "Usar task role com S3 permissions",
            "Usar instance profile",
            "Environment variables com access keys"
        ],
        correct: [1],
        explanation: "Task role fornece credenciais temporárias e específicas para cada task. Mais seguro que instance profile.",
        topic: "containers",
        domain: "development"
    },
    {
        id: 'dev_038',
        question: "EKS cluster precisa de auto-scaling baseado em CPU. Como implementar?",
        options: [
            "Horizontal Pod Autoscaler (HPA)",
            "Cluster Autoscaler",
            "Vertical Pod Autoscaler (VPA)",
            "Opções A e B"
        ],
        correct: [3],
        explanation: "HPA escala pods baseado em métricas. Cluster Autoscaler adiciona/remove nodes. Usar ambos para scaling completo.",
        topic: "containers",
        domain: "development"
    },

    // ADDITIONAL LAMBDA (8 questões)
    {
        id: 'dev_039',
        question: "Lambda function precisa processar arquivo de 1GB do S3. Como implementar sem exceder limites?",
        options: [
            "Aumentar memória Lambda para 10GB, considerando requisitos de compliance, governança e auditoria para ambientes regulados",
            "Usar Step Functions com Map state",
            "Processar arquivo em chunks via S3 Range requests",
            "Usar ECS task ao invés de Lambda"
        ],
        correct: [2],
        explanation: "S3 Range requests permitem ler arquivo em pedaços. Lambda processa chunks sequencialmente sem carregar arquivo inteiro.",
        topic: "lambda",
        domain: "development"
    },
    {
        id: 'dev_040',
        question: "Lambda function tem dependência externa que demora 30s para inicializar. Como otimizar?",
        options: [
            "Mover inicialização para fora do handler",
            "Usar Provisioned Concurrency",
            "Cache da dependência em /tmp",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Inicializar fora do handler (reutiliza entre invocações), Provisioned Concurrency (elimina cold start), cache em /tmp (persiste).",
        topic: "lambda",
        domain: "development"
    },
    {
        id: 'dev_041',
        question: "Lambda function precisa fazer 1000 calls para API externa. Como implementar com rate limiting?",
        options: [
            "Usar SQS com visibility timeout",
            "Implementar semaphore com DynamoDB",
            "Usar Step Functions com Wait states",
            "Reserved Concurrency = 10"
        ],
        correct: [3],
        explanation: "Reserved Concurrency limita execuções simultâneas, controlando rate de calls para API externa.",
        topic: "lambda",
        domain: "development"
    },
    {
        id: 'dev_042',
        question: "Lambda function retorna response de 10MB mas API Gateway retorna erro 413. Como resolver?",
        options: [
            "Aumentar timeout do API Gateway",
            "API Gateway tem limite de 10MB, usar S3 presigned URL",
            "Comprimir response",
            "Usar HTTP API ao invés de REST API, garantindo escalabilidade horizontal e vertical conforme demanda do workload específico"
        ],
        correct: [1],
        explanation: "API Gateway tem limite de 10MB payload. Para responses grandes, salvar no S3 e retornar presigned URL.",
        topic: "lambda",
        domain: "development"
    },
    {
        id: 'dev_043',
        question: "Lambda function precisa conectar com RDS mas connection pool está esgotando. Como resolver?",
        options: [
            "Aumentar max_connections no RDS",
            "Usar RDS Proxy",
            "Reduzir Reserved Concurrency",
            "Opções B e C"
        ],
        correct: [3],
        explanation: "RDS Proxy gerencia connection pooling. Reserved Concurrency limita funções simultâneas, reduzindo pressão no pool.",
        topic: "lambda",
        domain: "development"
    },
    {
        id: 'dev_044',
        question: "Lambda function usa 3GB de memória mas billing duration é muito alto. Como otimizar custo?",
        options: [
            "Reduzir memória para 1GB, utilizando as ferramentas nativas do serviço para automação e observabilidade operacional",
            "Otimizar algoritmo para usar menos memória",
            "Usar Spot instances",
            "Migrar para ECS Fargate"
        ],
        correct: [1],
        explanation: "Otimizar algoritmo reduz memória e CPU usage, diminuindo billing duration. Mais eficaz que apenas reduzir memória.",
        topic: "lambda",
        domain: "development"
    },
    {
        id: 'dev_045',
        question: "Lambda function precisa processar eventos em ordem. SQS FIFO queue configurada. Como garantir ordem?",
        options: [
            "Reserved Concurrency = 1",
            "Usar MessageGroupId consistente",
            "Processar um por vez com batch size = 1",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "FIFO + MessageGroupId + Concurrency=1 + BatchSize=1 garante processamento sequencial dentro do grupo.",
        topic: "lambda",
        domain: "development"
    },
    {
        id: 'dev_046',
        question: "Lambda function tem cold start de 10s devido a VPC ENI creation. Como reduzir sem sair da VPC?",
        options: [
            "Usar Hyperplane ENIs (Lambda otimiza automaticamente)",
            "Pre-warm com CloudWatch Events",
            "Provisioned Concurrency",
            "Opções A e C"
        ],
        correct: [3],
        explanation: "AWS otimizou VPC Lambda com Hyperplane ENIs (reduz cold start). Provisioned Concurrency elimina completamente.",
        topic: "lambda",
        domain: "development"
    },

    // ADDITIONAL API GATEWAY (6 questões)
    {
        id: 'dev_047',
        question: "API Gateway REST API precisa validar request payload antes de chamar Lambda. Como implementar?",
        options: [
            "Request Validation com JSON Schema",
            "Lambda Authorizer",
            "Validar na própria Lambda, com suporte a múltiplas regiões e redundância para alta disponibilidade e disaster recovery",
            "WAF rules"
        ],
        correct: [0],
        explanation: "Request Validation valida payload contra JSON Schema antes de invocar backend, economizando Lambda invocations.",
        topic: "apigateway",
        domain: "development"
    },
    {
        id: 'dev_048',
        question: "API Gateway tem 1000 req/s mas Lambda só processa 100 req/s. Como implementar backpressure?",
        options: [
            "API Gateway throttling",
            "SQS entre API Gateway e Lambda",
            "Lambda Reserved Concurrency, seguindo o modelo de responsabilidade compartilhada e as políticas de segurança corporativas",
            "Todas as anteriores"
        ],
        correct: [1],
        explanation: "SQS desacopla API Gateway de Lambda, permitindo buffering de requests durante picos de tráfego.",
        topic: "apigateway",
        domain: "development"
    },
    {
        id: 'dev_049',
        question: "API Gateway WebSocket API precisa enviar mensagem para cliente específico. Como implementar?",
        options: [
            "Usar connectionId com PostToConnection",
            "Broadcast para todos os clientes, implementando controles preventivos e detectivos conforme o framework de segurança organizacional",
            "Usar SNS topic",
            "WebSocket não suporta targeting"
        ],
        correct: [0],
        explanation: "PostToConnection API permite enviar mensagem para connectionId específico. Armazenar connectionIds no DynamoDB.",
        topic: "apigateway",
        domain: "development"
    },
    {
        id: 'dev_050',
        question: "API Gateway precisa integrar com serviço HTTP que retorna XML. Como transformar para JSON?",
        options: [
            "Mapping Templates com VTL",
            "Lambda proxy integration",
            "CloudFront com Lambda@Edge",
            "Não é possível"
        ],
        correct: [0],
        explanation: "Mapping Templates com Velocity Template Language (VTL) podem transformar XML para JSON e vice-versa.",
        topic: "apigateway",
        domain: "development"
    },
    {
        id: 'dev_051',
        question: "API Gateway Custom Domain precisa de certificado SSL. Como configurar?",
        options: [
            "ACM certificate na mesma região",
            "ACM certificate em us-east-1, com capacidade de processamento paralelo e distribuído para atender picos de demanda",
            "Self-signed certificate",
            "Certificado não necessário"
        ],
        correct: [0],
        explanation: "Custom Domain requer ACM certificate na mesma região do API Gateway (exceto CloudFront distributions que usam us-east-1).",
        topic: "apigateway",
        domain: "development"
    },
    {
        id: 'dev_052',
        question: "API Gateway está retornando erro 429 'Too Many Requests'. Throttling não configurado. Qual pode ser a causa?",
        options: [
            "Account-level throttling (10000 req/s)",
            "Lambda concurrent execution limit",
            "Backend service throttling",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "429 pode vir de: account throttling, Lambda limits, ou backend throttling. Verificar CloudWatch metrics para identificar.",
        topic: "apigateway",
        domain: "development"
    },

    // ADDITIONAL DYNAMODB (6 questões)
    {
        id: 'dev_053',
        question: "DynamoDB Global Table está apresentando conflitos de write. Como resolver?",
        options: [
            "Usar conditional writes",
            "Implementar last-writer-wins logic",
            "Usar version attributes",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Global Tables usa last-writer-wins. Implementar version control, conditional writes, ou conflict resolution logic na aplicação.",
        topic: "dynamodb",
        domain: "development"
    },
    {
        id: 'dev_054',
        question: "DynamoDB Scan operation está consumindo muita RCU. Como otimizar?",
        options: [
            "Usar Parallel Scan",
            "Implementar FilterExpression",
            "Usar Query ao invés de Scan",
            "Opção C é sempre melhor"
        ],
        correct: [3],
        explanation: "Query é sempre mais eficiente que Scan. Redesenhar schema para permitir Query. FilterExpression não reduz RCU consumido.",
        topic: "dynamodb",
        domain: "development"
    },
    {
        id: 'dev_055',
        question: "DynamoDB item tem 500KB mas precisa armazenar mais dados. Como resolver?",
        options: [
            "Comprimir dados",
            "Armazenar dados grandes no S3",
            "Dividir item em múltiplos items",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Limite de 400KB é rígido. Opções: compressão, S3 para dados grandes, ou normalização dividindo em items menores.",
        topic: "dynamodb",
        domain: "development"
    },
    {
        id: 'dev_056',
        question: "DynamoDB precisa de backup point-in-time recovery. Como habilitar?",
        options: [
            "PITR é habilitado por padrão, integrando com os sistemas existentes através de APIs e conectores nativos da plataforma",
            "Habilitar PITR nas configurações da tabela",
            "Usar DynamoDB Streams",
            "Backup manual apenas"
        ],
        correct: [1],
        explanation: "PITR deve ser habilitado explicitamente. Permite recovery para qualquer ponto nos últimos 35 dias.",
        topic: "dynamodb",
        domain: "development"
    },
    {
        id: 'dev_057',
        question: "DynamoDB table tem LSI mas queries estão lentas. Como otimizar?",
        options: [
            "LSI herda RCU da tabela principal",
            "Criar GSI ao invés de LSI",
            "LSI tem limite de 10GB por partition",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "LSI limitações: compartilha RCU, limite 10GB/partition. GSI tem RCU própria e sem limite de tamanho.",
        topic: "dynamodb",
        domain: "development"
    },
    {
        id: 'dev_058',
        question: "DynamoDB Accelerator (DAX) não está melhorando performance. Workload é write-heavy. Por quê?",
        options: [
            "DAX só acelera reads",
            "DAX precisa de warming up",
            "Cluster size insuficiente",
            "TTL muito baixo"
        ],
        correct: [0],
        explanation: "DAX é read-through cache. Não melhora writes. Para workload write-heavy, otimizar WCU e partition design.",
        topic: "dynamodb",
        domain: "development"
    },

    // ADDITIONAL S3 (4 questões)
    {
        id: 'dev_059',
        question: "S3 bucket recebe 10.000 PUT requests/segundo com prefixo sequencial (timestamp). Como otimizar performance?",
        options: [
            "Usar random prefix",
            "Distribuir requests por múltiplos prefixes",
            "S3 otimiza automaticamente",
            "Opções A e B"
        ],
        correct: [3],
        explanation: "Prefixos sequenciais causam hotspotting. Usar random prefix ou distribuir por múltiplos prefixes para melhor performance.",
        topic: "s3",
        domain: "development"
    },
    {
        id: 'dev_060',
        question: "S3 Cross-Region Replication não está replicando objetos existentes. Como resolver?",
        options: [
            "CRR só replica objetos novos",
            "Usar S3 Batch Replication para objetos existentes",
            "Recriar objetos para trigger replication",
            "Opções A e B"
        ],
        correct: [3],
        explanation: "CRR replica apenas objetos criados após habilitar. S3 Batch Replication replica objetos existentes.",
        topic: "s3",
        domain: "development"
    },
    {
        id: 'dev_061',
        question: "S3 Select está sendo usado para query arquivo JSON de 1GB. Performance ainda lenta. Como otimizar?",
        options: [
            "Usar formato Parquet",
            "Comprimir arquivo com GZIP",
            "Dividir arquivo em múltiplos objetos",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "S3 Select é mais eficiente com: Parquet (formato colunar), compressão, arquivos menores para paralelismo.",
        topic: "s3",
        domain: "development"
    },
    {
        id: 'dev_062',
        question: "S3 bucket policy nega acesso mas IAM policy permite. Qual prevalece?",
        options: [
            "IAM policy",
            "Bucket policy",
            "Explicit deny sempre prevalece",
            "Depende da ordem, otimizando custo operacional através de right-sizing e monitoramento de utilização de recursos"
        ],
        correct: [2],
        explanation: "Explicit deny em qualquer policy (IAM, bucket, ACL) sempre prevalece sobre allow statements.",
        topic: "s3",
        domain: "development"
    },

    // ADDITIONAL MESSAGING (2 questões)
    {
        id: 'dev_063',
        question: "SQS FIFO queue tem throughput de apenas 300 TPS mas precisa de 3000 TPS. Como resolver?",
        options: [
            "Usar múltiplas FIFO queues",
            "Usar MessageGroupId diferentes",
            "Migrar para Standard queue",
            "Opções A e B"
        ],
        correct: [3],
        explanation: "FIFO queue: 300 TPS por MessageGroupId. Usar múltiplos groups ou múltiplas queues para maior throughput.",
        topic: "messaging",
        domain: "development"
    },
    {
        id: 'dev_064',
        question: "EventBridge custom bus precisa receber eventos de conta externa. Como configurar?",
        options: [
            "Resource-based policy no event bus",
            "Cross-account IAM role",
            "EventBridge replication, aplicando técnicas de observabilidade e rastreamento distribuído para troubleshooting eficiente",
            "Não é possível"
        ],
        correct: [0],
        explanation: "Resource-based policy no custom event bus permite que contas externas enviem eventos. Configurar principal e actions.",
        topic: "messaging",
        domain: "development"
    }
];

window.developmentQuestionsReal = developmentQuestionsReal;