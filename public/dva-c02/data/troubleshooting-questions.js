// DOMAIN 4: TROUBLESHOOTING & OPTIMIZATION - 36 questões completas (18%)

const troubleshootingQuestions = [
    {
        id: 167,
        question: "Para debuggar uma Lambda com alta latência, qual ferramenta usar primeiro?",
        options: [
            "AWS X-Ray",
            "CloudWatch Logs",
            "CloudTrail",
            "VPC Flow Logs"
        ],
        correct: [0],
        explanation: "✅ X-Ray fornece distributed tracing mostrando onde está o gargalo.",
        topic: "monitoring",
        domain: "troubleshooting"
    },
    {
        id: 168,
        question: "Qual é a melhor prática para logs estruturados em Lambda?",
        options: [
            "print() statements simples",
            "CloudWatch Events",
            "JSON estruturado com logging library",
            "X-Ray apenas"
        ],
        correct: [2],
        explanation: "✅ JSON estruturado permite queries eficientes no CloudWatch Insights.",
        topic: "monitoring",
        domain: "troubleshooting"
    },
    {
        id: 169,
        question: "Para monitorar APIs em tempo real, qual métrica do CloudWatch é mais importante?",
        options: [
            "4XXError",
            "Count",
            "Latency",
            "5XXError",
        ],
        correct: [3],
        explanation: "✅ 5XXError indica problemas no servidor/backend que precisam atenção imediata.",
        topic: "monitoring",
        domain: "troubleshooting"
    },
    {
        id: 170,
        question: "Para monitorar custom metrics de uma aplicação Lambda, qual abordagem usar?",
        options: [
            "CloudWatch Logs apenas",
            "PutMetricData API do CloudWatch",
            "X-Ray segments",
            "Environment variables"
        ],
        correct: [1],
        explanation: "✅ PutMetricData API permite enviar métricas customizadas para CloudWatch.",
        topic: "monitoring",
        domain: "troubleshooting"
    },
    {
        id: 171,
        question: "Para troubleshooting de Lambda timeout, qual log procurar primeiro?",
        options: [
            "CloudWatch Logs da função",
            "VPC Flow Logs",
            "CloudTrail logs",
            "X-Ray traces"
        ],
        correct: [0],
        explanation: "✅ CloudWatch Logs da função mostram exatamente onde a execução está travando.",
        topic: "monitoring",
        domain: "troubleshooting"
    },
    {
        id: 172,
        question: "Para debug de cold start em Lambda, qual métrica analisar?",
        options: [
            "Duration",
            "Billed Duration",
            "Init Duration",
            "Memory Utilization"
        ],
        correct: [2],
        explanation: "✅ Init Duration mostra especificamente o tempo de cold start da função.",
        topic: "monitoring",
        domain: "troubleshooting"
    },
    {
        id: 173,
        question: "Para debugging de performance em Lambda, qual métrica CloudWatch observar primeiro?",
        options: [
            "Invocations",
            "Throttles",
            "Errors",
            "Duration",
        ],
        correct: [3],
        explanation: "✅ Duration mostra o tempo de execução e ajuda identificar gargalos de performance.",
        topic: "monitoring",
        domain: "troubleshooting"
    },
    {
        id: 174,
        question: "Para monitorar erros de aplicação em tempo real, qual serviço usar?",
        options: [
            "CloudWatch Logs",
            "CloudWatch Alarms",
            "X-Ray",
            "EventBridge"
        ],
        correct: [1],
        explanation: "✅ CloudWatch Alarms podem notificar em tempo real baseado em métricas de erro.",
        topic: "monitoring",
        domain: "troubleshooting"
    },
    {
        id: 175,
        question: "Para debug de performance em DynamoDB, qual métrica observar?",
        options: [
            "ProvisionedThroughputExceeded",
            "ConsumedReadCapacityUnits",
            "TableSizeBytes",
            "ItemCount",
        ],
        correct: [0],
        explanation: "✅ ProvisionedThroughputExceeded indica throttling que afeta performance.",
        topic: "monitoring",
        domain: "troubleshooting"
    },
    {
        id: 176,
        question: "Para otimizar custos de Lambda, qual estratégia usar?",
        options: [
            "Sempre usar máxima memória",
            "Usar apenas timeout mínimo",
            "Otimizar memory/duration ratio",
            "Provisioned Concurrency sempre"
        ],
        correct: [2],
        explanation: "✅ Otimizar a relação memória/duração encontra o sweet spot de custo-performance.",
        topic: "lambda",
        domain: "troubleshooting"
    },
    {
        id: 177,
        question: "Qual é a melhor prática para connection pooling em Lambda?",
        options: [
            "Criar conexão a cada invocação",
            "Conexão global fora do handler",
            "Connection pooling não é necessário",
            "Usar RDS Proxy",
        ],
        correct: [3],
        explanation: "✅ RDS Proxy gerencia connection pooling automaticamente para Lambda.",
        topic: "lambda",
        domain: "troubleshooting"
    },
    {
        id: 178,
        question: "Para implementar feature flags em serverless, qual abordagem usar?",
        options: [
            "Environment variables",
            "Parameter Store",
            "DynamoDB table",
            "S3 configuration file"
        ],
        correct: [1],
        explanation: "✅ Parameter Store permite mudanças dinâmicas de configuração sem redeploy.",
        topic: "lambda",
        domain: "troubleshooting"
    },
    {
        id: 179,
        question: "Para uma API que precisa de alta disponibilidade, qual configuração usar?",
        options: [
            "Multi-AZ com Route 53 health checks",
            "Single AZ deployment",
            "Single region apenas",
            "CloudFront apenas"
        ],
        correct: [0],
        explanation: "✅ Multi-AZ com health checks garante failover automático em caso de falha.",
        topic: "apigateway",
        domain: "troubleshooting"
    },
    {
        id: 180,
        question: "Em DynamoDB Streams, qual é o período de retenção dos records?",
        options: [
            "1 hora",
            "7 dias",
            "24 horas",
            "30 dias"
        ],
        correct: [2],
        explanation: "✅ DynamoDB Streams mantém records por 24 horas.",
        topic: "dynamodb",
        domain: "troubleshooting"
    },
    {
        id: 181,
        question: "Para uma função Lambda que processa imagens, qual é o limite de memória temporária (/tmp)?",
        options: [
            "512 MB",
            "1 GB",
            "Sem limite",
            "10 GB",
        ],
        correct: [3],
        explanation: "✅ Lambda oferece até 10 GB de storage temporário em /tmp.",
        topic: "lambda",
        domain: "troubleshooting"
    },
    {
        id: 182,
        question: "Em API Gateway, como implementar request/response caching?",
        options: [
            "Lambda memory caching",
            "API Gateway caching",
            "CloudFront apenas",
            "ElastiCache"
        ],
        correct: [1],
        explanation: "✅ API Gateway tem cache integrado configurável por método.",
        topic: "apigateway",
        domain: "troubleshooting"
    },
    {
        id: 183,
        question: "Qual é a diferença entre SQS Standard e FIFO queues?",
        options: [
            "Standard é mais rápido, FIFO garante ordem",
            "FIFO é mais barato",
            "Standard apenas para Lambda",
            "Não há diferença"
        ],
        correct: [0],
        explanation: "✅ SQS Standard oferece maior throughput, FIFO garante ordem e exactly-once delivery.",
        topic: "lambda",
        domain: "troubleshooting"
    },
    {
        id: 184,
        question: "Para uma aplicação que precisa de transações ACID, qual solução usar?",
        options: [
            "Multiple Lambda functions",
            "RDS com Lambda",
            "DynamoDB Transactions",
            "Step Functions"
        ],
        correct: [2],
        explanation: "✅ DynamoDB Transactions oferece ACID compliance para operações relacionadas.",
        topic: "dynamodb",
        domain: "troubleshooting"
    },
    {
        id: 185,
        question: "Para troubleshooting de API Gateway 502 errors, onde investigar primeiro?",
        options: [
            "CloudFront logs",
            "VPC configuration",
            "Route 53 health checks",
            "Lambda function logs",
        ],
        correct: [3],
        explanation: "✅ 502 errors geralmente indicam problemas na função Lambda backend.",
        topic: "apigateway",
        domain: "troubleshooting"
    },
    {
        id: 186,
        question: "Para otimizar DynamoDB query performance, qual estratégia usar?",
        options: [
            "Scan operations",
            "Query com partition key",
            "Full table scan",
            "Random access patterns"
        ],
        correct: [1],
        explanation: "✅ Query com partition key é muito mais eficiente que scan operations.",
        topic: "dynamodb",
        domain: "troubleshooting"
    },
    {
        id: 187,
        question: "Para debugging de Lambda memory issues, qual métrica observar?",
        options: [
            "Max Memory Used",
            "Duration apenas",
            "Invocations",
            "Errors"
        ],
        correct: [0],
        explanation: "✅ Max Memory Used mostra se a função está próxima do limite de memória.",
        topic: "lambda",
        domain: "troubleshooting"
    },
    {
        id: 188,
        question: "Para troubleshooting de Step Functions failures, onde verificar primeiro?",
        options: [
            "CloudWatch Logs",
            "X-Ray traces",
            "Execution history",
            "CloudTrail"
        ],
        correct: [2],
        explanation: "✅ Execution history mostra exatamente onde e por que a execução falhou.",
        topic: "monitoring",
        domain: "troubleshooting"
    },
    {
        id: 189,
        question: "Para otimizar Lambda cold starts, qual configuração ajustar primeiro?",
        options: [
            "Timeout",
            "VPC configuration",
            "Environment variables",
            "Memory allocation",
        ],
        correct: [3],
        explanation: "✅ Memory allocation afeta diretamente CPU disponível e cold start performance.",
        topic: "lambda",
        domain: "troubleshooting"
    },
    {
        id: 190,
        question: "Para debugging de DynamoDB throttling, qual causa investigar?",
        options: [
            "Network issues",
            "Hot partitions",
            "Lambda timeout",
            "API Gateway limits"
        ],
        correct: [1],
        explanation: "✅ Hot partitions são a causa mais comum de throttling no DynamoDB.",
        topic: "dynamodb",
        domain: "troubleshooting"
    },
    {
        id: 191,
        question: "Para monitorar Lambda concurrency issues, qual métrica usar?",
        options: [
            "ConcurrentExecutions",
            "Duration",
            "Invocations",
            "Errors"
        ],
        correct: [0],
        explanation: "✅ ConcurrentExecutions mostra se está próximo dos limites de concorrência.",
        topic: "lambda",
        domain: "troubleshooting"
    },
    {
        id: 192,
        question: "Para troubleshooting de API Gateway timeout, qual configuração verificar?",
        options: [
            "CloudFront timeout",
            "Route 53 TTL",
            "Integration timeout",
            "VPC timeout"
        ],
        correct: [2],
        explanation: "✅ Integration timeout controla quanto tempo API Gateway espera pelo backend.",
        topic: "apigateway",
        domain: "troubleshooting"
    },
    {
        id: 193,
        question: "Para otimizar DynamoDB costs, qual estratégia usar?",
        options: [
            "Sempre usar provisioned capacity",
            "Disable auto-scaling",
            "Máxima RCU/WCU sempre",
            "On-demand para workloads imprevisíveis",
        ],
        correct: [3],
        explanation: "✅ On-demand é mais econômico para workloads com tráfego imprevisível.",
        topic: "dynamodb",
        domain: "troubleshooting"
    },
    {
        id: 194,
        question: "Para debugging de Lambda network connectivity, qual ferramenta usar?",
        options: [
            "CloudWatch Logs",
            "VPC Flow Logs",
            "X-Ray",
            "CloudTrail"
        ],
        correct: [1],
        explanation: "✅ VPC Flow Logs mostram tráfego de rede e problemas de conectividade.",
        topic: "lambda",
        domain: "troubleshooting"
    },
    {
        id: 195,
        question: "Para troubleshooting de SQS message processing delays, qual causa investigar?",
        options: [
            "Visibility timeout configuration",
            "Message size",
            "Queue type",
            "Lambda memory"
        ],
        correct: [0],
        explanation: "✅ Visibility timeout incorreto pode causar reprocessamento e delays.",
        topic: "lambda",
        domain: "troubleshooting"
    },
    {
        id: 196,
        question: "Para otimizar API Gateway performance, qual configuração usar?",
        options: [
            "Disable caching",
            "Increase timeout apenas",
            "Enable caching com TTL apropriado",
            "Reduce payload size apenas"
        ],
        correct: [2],
        explanation: "✅ Caching com TTL apropriado reduz latência e carga no backend.",
        topic: "apigateway",
        domain: "troubleshooting"
    },
    {
        id: 197,
        question: "Para debugging de Lambda deployment issues, onde verificar primeiro?",
        options: [
            "CloudWatch Logs",
            "API Gateway logs",
            "X-Ray traces",
            "CloudFormation events",
        ],
        correct: [3],
        explanation: "✅ CloudFormation events mostram problemas durante deployment de recursos.",
        topic: "monitoring",
        domain: "troubleshooting"
    },
    {
        id: 198,
        question: "Para troubleshooting de DynamoDB GSI throttling, qual solução aplicar?",
        options: [
            "Increase table capacity apenas",
            "Increase GSI capacity",
            "Remove GSI",
            "Change partition key"
        ],
        correct: [1],
        explanation: "✅ GSI tem sua própria capacidade que deve ser ajustada independentemente.",
        topic: "dynamodb",
        domain: "troubleshooting"
    },
    {
        id: 199,
        question: "Para otimizar Lambda function startup time, qual abordagem usar?",
        options: [
            "Todas as anteriores",
            "Increase memory allocation",
            "Use Provisioned Concurrency",
            "Minimize deployment package size",
        ],
        correct: [0],
        explanation: "✅ Todas as estratégias contribuem para reduzir startup time.",
        topic: "lambda",
        domain: "troubleshooting"
    },
    {
        id: 200,
        question: "Para troubleshooting de Step Functions state machine errors, qual informação é mais útil?",
        options: [
            "CloudWatch metrics apenas",
            "Execution input/output de cada state",
            "Lambda logs apenas",
            "CloudTrail events"
        ],
        correct: [1],
        explanation: "✅ Input/output de cada state mostra exatamente onde e como o erro ocorreu.",
        topic: "monitoring",
        domain: "troubleshooting"
    }
];

window.troubleshootingQuestions = troubleshootingQuestions;