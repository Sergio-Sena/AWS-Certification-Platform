// DOMAIN 4: TROUBLESHOOTING & OPTIMIZATION - 36 questões completas (18%)

const troubleshootingQuestions = [
    {
        id: 167,
        question: "Para debuggar uma Lambda com alta latência, qual ferramenta usar primeiro?",
        options: [
            "CloudWatch Logs",
            "AWS X-Ray",
            "CloudTrail",
            "VPC Flow Logs"
        ],
        correct: [1],
        explanation: "X-Ray fornece distributed tracing mostrando onde está o gargalo.",
        topic: "monitoring",
        domain: "troubleshooting"
    },
    {
        id: 168,
        question: "Qual é a melhor prática para logs estruturados em Lambda?",
        options: [
            "print() statements simples",
            "JSON estruturado com logging library",
            "CloudWatch Events",
            "X-Ray apenas"
        ],
        correct: [1],
        explanation: "JSON estruturado permite queries eficientes no CloudWatch Insights.",
        topic: "monitoring",
        domain: "troubleshooting"
    },
    {
        id: 169,
        question: "Para monitorar APIs em tempo real, qual métrica do CloudWatch é mais importante?",
        options: [
            "4XXError",
            "5XXError",
            "Latency",
            "Count"
        ],
        correct: [1],
        explanation: "5XXError indica problemas no servidor/backend que precisam atenção imediata.",
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
        explanation: "PutMetricData API permite enviar métricas customizadas para CloudWatch.",
        topic: "monitoring",
        domain: "troubleshooting"
    },
    {
        id: 171,
        question: "Para troubleshooting de Lambda timeout, qual log procurar primeiro?",
        options: [
            "CloudTrail logs",
            "VPC Flow Logs",
            "CloudWatch Logs da função",
            "X-Ray traces"
        ],
        correct: [2],
        explanation: "CloudWatch Logs da função mostram exatamente onde a execução está travando.",
        topic: "monitoring",
        domain: "troubleshooting"
    },
    {
        id: 172,
        question: "Para debug de cold start em Lambda, qual métrica analisar?",
        options: [
            "Duration",
            "Init Duration",
            "Billed Duration",
            "Memory Utilization"
        ],
        correct: [1],
        explanation: "Init Duration mostra especificamente o tempo de cold start da função.",
        topic: "monitoring",
        domain: "troubleshooting"
    },
    {
        id: 173,
        question: "Para debugging de performance em Lambda, qual métrica CloudWatch observar primeiro?",
        options: [
            "Invocations",
            "Duration",
            "Errors",
            "Throttles"
        ],
        correct: [1],
        explanation: "Duration mostra o tempo de execução e ajuda identificar gargalos de performance.",
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
        explanation: "CloudWatch Alarms podem notificar em tempo real baseado em métricas de erro.",
        topic: "monitoring",
        domain: "troubleshooting"
    },
    {
        id: 175,
        question: "Para debug de performance em DynamoDB, qual métrica observar?",
        options: [
            "ItemCount",
            "ConsumedReadCapacityUnits",
            "TableSizeBytes",
            "ProvisionedThroughputExceeded"
        ],
        correct: [3],
        explanation: "ProvisionedThroughputExceeded indica throttling que afeta performance.",
        topic: "monitoring",
        domain: "troubleshooting"
    },
    {
        id: 176,
        question: "Para otimizar custos de Lambda, qual estratégia usar?",
        options: [
            "Sempre usar máxima memória",
            "Otimizar memory/duration ratio",
            "Usar apenas timeout mínimo",
            "Provisioned Concurrency sempre"
        ],
        correct: [1],
        explanation: "Otimizar a relação memória/duração encontra o sweet spot de custo-performance.",
        topic: "lambda",
        domain: "troubleshooting"
    },
    {
        id: 177,
        question: "Qual é a melhor prática para connection pooling em Lambda?",
        options: [
            "Criar conexão a cada invocação",
            "Conexão global fora do handler",
            "Usar RDS Proxy",
            "Connection pooling não é necessário"
        ],
        correct: [2],
        explanation: "RDS Proxy gerencia connection pooling automaticamente para Lambda.",
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
        explanation: "Parameter Store permite mudanças dinâmicas de configuração sem redeploy.",
        topic: "lambda",
        domain: "troubleshooting"
    },
    {
        id: 179,
        question: "Para uma API que precisa de alta disponibilidade, qual configuração usar?",
        options: [
            "Single AZ deployment",
            "Multi-AZ com Route 53 health checks",
            "Single region apenas",
            "CloudFront apenas"
        ],
        correct: [1],
        explanation: "Multi-AZ com health checks garante failover automático em caso de falha.",
        topic: "apigateway",
        domain: "troubleshooting"
    },
    {
        id: 180,
        question: "Em DynamoDB Streams, qual é o período de retenção dos records?",
        options: [
            "1 hora",
            "24 horas",
            "7 dias",
            "30 dias"
        ],
        correct: [1],
        explanation: "DynamoDB Streams mantém records por 24 horas.",
        topic: "dynamodb",
        domain: "troubleshooting"
    },
    {
        id: 181,
        question: "Para uma função Lambda que processa imagens, qual é o limite de memória temporária (/tmp)?",
        options: [
            "512 MB",
            "1 GB",
            "10 GB",
            "Sem limite"
        ],
        correct: [2],
        explanation: "Lambda oferece até 10 GB de storage temporário em /tmp.",
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
        explanation: "API Gateway tem cache integrado configurável por método.",
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
        explanation: "SQS Standard oferece maior throughput, FIFO garante ordem e exactly-once delivery.",
        topic: "lambda",
        domain: "troubleshooting"
    },
    {
        id: 184,
        question: "Para uma aplicação que precisa de transações ACID, qual solução usar?",
        options: [
            "DynamoDB Transactions",
            "RDS com Lambda",
            "Multiple Lambda functions",
            "Step Functions"
        ],
        correct: [0],
        explanation: "DynamoDB Transactions oferece ACID compliance para operações relacionadas.",
        topic: "dynamodb",
        domain: "troubleshooting"
    },
    {
        id: 185,
        question: "Para troubleshooting de API Gateway 502 errors, onde investigar primeiro?",
        options: [
            "CloudFront logs",
            "Lambda function logs",
            "Route 53 health checks",
            "VPC configuration"
        ],
        correct: [1],
        explanation: "502 errors geralmente indicam problemas na função Lambda backend.",
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
        explanation: "Query com partition key é muito mais eficiente que scan operations.",
        topic: "dynamodb",
        domain: "troubleshooting"
    },
    {
        id: 187,
        question: "Para debugging de Lambda memory issues, qual métrica observar?",
        options: [
            "Duration apenas",
            "Max Memory Used",
            "Invocations",
            "Errors"
        ],
        correct: [1],
        explanation: "Max Memory Used mostra se a função está próxima do limite de memória.",
        topic: "lambda",
        domain: "troubleshooting"
    },
    {
        id: 188,
        question: "Para troubleshooting de Step Functions failures, onde verificar primeiro?",
        options: [
            "CloudWatch Logs",
            "Execution history",
            "X-Ray traces",
            "CloudTrail"
        ],
        correct: [1],
        explanation: "Execution history mostra exatamente onde e por que a execução falhou.",
        topic: "monitoring",
        domain: "troubleshooting"
    },
    {
        id: 189,
        question: "Para otimizar Lambda cold starts, qual configuração ajustar primeiro?",
        options: [
            "Timeout",
            "Memory allocation",
            "Environment variables",
            "VPC configuration"
        ],
        correct: [1],
        explanation: "Memory allocation afeta diretamente CPU disponível e cold start performance.",
        topic: "lambda",
        domain: "troubleshooting"
    },
    {
        id: 190,
        question: "Para debugging de DynamoDB throttling, qual causa investigar?",
        options: [
            "Hot partitions",
            "Network issues",
            "Lambda timeout",
            "API Gateway limits"
        ],
        correct: [0],
        explanation: "Hot partitions são a causa mais comum de throttling no DynamoDB.",
        topic: "dynamodb",
        domain: "troubleshooting"
    },
    {
        id: 191,
        question: "Para monitorar Lambda concurrency issues, qual métrica usar?",
        options: [
            "Duration",
            "ConcurrentExecutions",
            "Invocations",
            "Errors"
        ],
        correct: [1],
        explanation: "ConcurrentExecutions mostra se está próximo dos limites de concorrência.",
        topic: "lambda",
        domain: "troubleshooting"
    },
    {
        id: 192,
        question: "Para troubleshooting de API Gateway timeout, qual configuração verificar?",
        options: [
            "CloudFront timeout",
            "Integration timeout",
            "Route 53 TTL",
            "VPC timeout"
        ],
        correct: [1],
        explanation: "Integration timeout controla quanto tempo API Gateway espera pelo backend.",
        topic: "apigateway",
        domain: "troubleshooting"
    },
    {
        id: 193,
        question: "Para otimizar DynamoDB costs, qual estratégia usar?",
        options: [
            "Sempre usar provisioned capacity",
            "On-demand para workloads imprevisíveis",
            "Máxima RCU/WCU sempre",
            "Disable auto-scaling"
        ],
        correct: [1],
        explanation: "On-demand é mais econômico para workloads com tráfego imprevisível.",
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
        explanation: "VPC Flow Logs mostram tráfego de rede e problemas de conectividade.",
        topic: "lambda",
        domain: "troubleshooting"
    },
    {
        id: 195,
        question: "Para troubleshooting de SQS message processing delays, qual causa investigar?",
        options: [
            "Message size",
            "Visibility timeout configuration",
            "Queue type",
            "Lambda memory"
        ],
        correct: [1],
        explanation: "Visibility timeout incorreto pode causar reprocessamento e delays.",
        topic: "lambda",
        domain: "troubleshooting"
    },
    {
        id: 196,
        question: "Para otimizar API Gateway performance, qual configuração usar?",
        options: [
            "Disable caching",
            "Enable caching com TTL apropriado",
            "Increase timeout apenas",
            "Reduce payload size apenas"
        ],
        correct: [1],
        explanation: "Caching com TTL apropriado reduz latência e carga no backend.",
        topic: "apigateway",
        domain: "troubleshooting"
    },
    {
        id: 197,
        question: "Para debugging de Lambda deployment issues, onde verificar primeiro?",
        options: [
            "CloudWatch Logs",
            "CloudFormation events",
            "X-Ray traces",
            "API Gateway logs"
        ],
        correct: [1],
        explanation: "CloudFormation events mostram problemas durante deployment de recursos.",
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
        explanation: "GSI tem sua própria capacidade que deve ser ajustada independentemente.",
        topic: "dynamodb",
        domain: "troubleshooting"
    },
    {
        id: 199,
        question: "Para otimizar Lambda function startup time, qual abordagem usar?",
        options: [
            "Minimize deployment package size",
            "Increase memory allocation",
            "Use Provisioned Concurrency",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Todas as estratégias contribuem para reduzir startup time.",
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
        explanation: "Input/output de cada state mostra exatamente onde e como o erro ocorreu.",
        topic: "monitoring",
        domain: "troubleshooting"
    }
];

window.troubleshootingQuestions = troubleshootingQuestions;