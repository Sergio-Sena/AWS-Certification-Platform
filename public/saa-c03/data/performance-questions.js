// DOMAIN 2: HIGH-PERFORMING ARCHITECTURES - 51 questões adicionais (28% total = 56 questões)

const performanceQuestions = [
    {
        id: 66,
        question: "Como otimizar latência para usuários globais?",
        options: ["Single region deployment", "CloudFront + edge locations + regional caching", "Larger instances", "More bandwidth"],
        correct: [1],
        explanation: "CloudFront com edge locations reduz latência servindo conteúdo próximo aos usuários.",
        topic: "performance", domain: "performance"
    },
    {
        id: 67,
        question: "Qual tipo de EBS oferece melhor throughput para big data?",
        options: ["gp2", "gp3", "io2", "st1"],
        correct: [3],
        explanation: "st1 (Throughput Optimized HDD) é otimizado para workloads sequenciais de big data.",
        topic: "performance", domain: "performance"
    },
    {
        id: 68,
        question: "Como otimizar performance de Lambda functions?",
        options: ["Sempre usar máxima memória", "Right-size memory + provisioned concurrency + connection pooling", "Minimum memory", "No optimization"],
        correct: [1],
        explanation: "Right-sizing memory, provisioned concurrency e connection pooling otimizam performance e cold starts.",
        topic: "performance", domain: "performance"
    },
    {
        id: 69,
        question: "Qual estratégia de caching oferece melhor performance?",
        options: ["No caching", "Multi-layer caching (CDN + application + database)", "Database caching apenas", "Application caching apenas"],
        correct: [1],
        explanation: "Multi-layer caching reduz latência em múltiplos níveis da aplicação.",
        topic: "performance", domain: "performance"
    },
    {
        id: 70,
        question: "Como otimizar performance de consultas DynamoDB?",
        options: ["Scan operations", "Query operations + GSI + partition key design", "Full table scans", "No indexing"],
        correct: [1],
        explanation: "Query operations com GSI bem projetados e partition keys distribuídos otimizam performance.",
        topic: "performance", domain: "performance"
    },
    {
        id: 71,
        question: "Qual instância EC2 oferece melhor performance de rede?",
        options: ["t3.micro", "Enhanced networking instances (C5n, M5n, R5n)", "t2.nano", "General purpose"],
        correct: [1],
        explanation: "Instâncias com enhanced networking oferecem maior bandwidth e menor latência de rede.",
        topic: "performance", domain: "performance"
    },
    {
        id: 72,
        question: "Como otimizar performance de API Gateway?",
        options: ["No caching", "Response caching + request validation + throttling", "Unlimited requests", "No optimization"],
        correct: [1],
        explanation: "Response caching reduz latência, validation reduz processamento e throttling protege backend.",
        topic: "performance", domain: "performance"
    },
    {
        id: 73,
        question: "Qual é a melhor prática para connection pooling em RDS?",
        options: ["Single connection", "RDS Proxy para connection pooling", "Unlimited connections", "No pooling"],
        correct: [1],
        explanation: "RDS Proxy gerencia connection pooling eficientemente, reduzindo overhead de conexões.",
        topic: "performance", domain: "performance"
    },
    {
        id: 74,
        question: "Como otimizar performance de S3 para high request rates?",
        options: ["Sequential naming", "Random prefix + multipart upload + transfer acceleration", "Single part uploads", "No optimization"],
        correct: [1],
        explanation: "Random prefixes distribuem carga, multipart acelera uploads e transfer acceleration usa CloudFront.",
        topic: "performance", domain: "performance"
    },
    {
        id: 75,
        question: "Qual estratégia para otimizar cold starts em Lambda?",
        options: ["Ignore cold starts", "Provisioned concurrency + smaller deployment packages", "Larger packages", "No optimization"],
        correct: [1],
        explanation: "Provisioned concurrency mantém funções warm e packages menores reduzem initialization time.",
        topic: "performance", domain: "performance"
    },
    {
        id: 76,
        question: "Como otimizar performance de ElastiCache?",
        options: ["Single node", "Cluster mode + read replicas + appropriate eviction policies", "No clustering", "Manual management"],
        correct: [1],
        explanation: "Cluster mode distribui carga, read replicas aumentam throughput e eviction policies otimizam memória.",
        topic: "performance", domain: "performance"
    },
    {
        id: 77,
        question: "Qual é a melhor prática para otimizar images na web?",
        options: ["Uncompressed images", "CloudFront + automatic image optimization", "Local processing", "No optimization"],
        correct: [1],
        explanation: "CloudFront pode automaticamente otimizar e comprimir imagens baseado no device do usuário.",
        topic: "performance", domain: "performance"
    },
    {
        id: 78,
        question: "Como otimizar performance de containers?",
        options: ["Large containers", "Right-sized containers + resource limits + health checks", "No limits", "Single container"],
        correct: [1],
        explanation: "Right-sizing com resource limits apropriados e health checks otimizam performance e resource utilization.",
        topic: "performance", domain: "performance"
    },
    {
        id: 79,
        question: "Qual estratégia para otimizar database read performance?",
        options: ["Master only", "Read replicas + query optimization + indexing", "No optimization", "Write replicas"],
        correct: [1],
        explanation: "Read replicas distribuem read load, query optimization e indexing reduzem response time.",
        topic: "performance", domain: "performance"
    },
    {
        id: 80,
        question: "Como otimizar performance de Step Functions?",
        options: ["Sequential execution", "Parallel execution + express workflows + optimized state machines", "No optimization", "Single state"],
        correct: [1],
        explanation: "Parallel execution, express workflows e state machines otimizados reduzem execution time.",
        topic: "performance", domain: "performance"
    },
    {
        id: 81,
        question: "Qual é a melhor prática para content compression?",
        options: ["No compression", "Gzip/Brotli compression at CloudFront + origin", "Client-side only", "Manual compression"],
        correct: [1],
        explanation: "Compression em CloudFront e origin reduz bandwidth e melhora load times.",
        topic: "performance", domain: "performance"
    },
    {
        id: 82,
        question: "Como otimizar performance de SQS?",
        options: ["Standard queues apenas", "FIFO queues + batch operations + long polling", "Short polling", "Single messages"],
        correct: [1],
        explanation: "Batch operations reduzem API calls e long polling reduz latência e custos.",
        topic: "performance", domain: "performance"
    },
    {
        id: 83,
        question: "Qual estratégia para otimizar network performance?",
        options: ["Default networking", "Placement groups + enhanced networking + SR-IOV", "No optimization", "Single AZ"],
        correct: [1],
        explanation: "Placement groups, enhanced networking e SR-IOV maximizam network performance.",
        topic: "performance", domain: "performance"
    },
    {
        id: 84,
        question: "Como otimizar performance de Kinesis?",
        options: ["Single shard", "Multiple shards + batch processing + compression", "No batching", "Sequential processing"],
        correct: [1],
        explanation: "Multiple shards aumentam throughput, batching reduz overhead e compression reduz payload size.",
        topic: "performance", domain: "performance"
    },
    {
        id: 85,
        question: "Qual é a melhor prática para DNS performance?",
        options: ["Single DNS server", "Route 53 + geolocation routing + health checks", "Local DNS only", "No optimization"],
        correct: [1],
        explanation: "Route 53 com geolocation routing direciona usuários para endpoints mais próximos.",
        topic: "performance", domain: "performance"
    },
    {
        id: 86,
        question: "Como otimizar performance de ECS tasks?",
        options: ["Default settings", "Task placement strategies + resource optimization + service discovery", "Random placement", "No optimization"],
        correct: [1],
        explanation: "Task placement strategies otimizam resource utilization e service discovery reduz latência.",
        topic: "performance", domain: "performance"
    },
    {
        id: 87,
        question: "Qual estratégia para otimizar mobile app performance?",
        options: ["No optimization", "CloudFront + API caching + request batching", "Local processing only", "Synchronous calls"],
        correct: [1],
        explanation: "CloudFront reduz latência, API caching reduz backend load e batching reduz requests.",
        topic: "performance", domain: "performance"
    },
    {
        id: 88,
        question: "Como otimizar performance de Aurora?",
        options: ["Single instance", "Aurora Serverless + read replicas + query cache", "No optimization", "Write replicas"],
        correct: [1],
        explanation: "Aurora Serverless auto-scales, read replicas distribuem load e query cache reduz latência.",
        topic: "performance", domain: "performance"
    },
    {
        id: 89,
        question: "Qual é a melhor prática para static content delivery?",
        options: ["Origin server only", "S3 + CloudFront + compression + caching headers", "Local storage", "No CDN"],
        correct: [1],
        explanation: "S3 com CloudFront, compression e caching headers otimizam delivery de conteúdo estático.",
        topic: "performance", domain: "performance"
    },
    {
        id: 90,
        question: "Como otimizar performance de machine learning inference?",
        options: ["CPU inference", "GPU instances + model optimization + batch inference", "Single predictions", "No optimization"],
        correct: [1],
        explanation: "GPU instances aceleram inference, model optimization reduz latência e batching aumenta throughput.",
        topic: "performance", domain: "performance"
    },
    {
        id: 91,
        question: "Qual estratégia para otimizar search performance?",
        options: ["Linear search", "Elasticsearch + indexing strategies + caching", "No indexing", "Manual search"],
        correct: [1],
        explanation: "Elasticsearch com indexing apropriado e caching oferece search performance otimizada.",
        topic: "performance", domain: "performance"
    },
    {
        id: 92,
        question: "Como otimizar performance de video streaming?",
        options: ["Single bitrate", "Adaptive bitrate + CloudFront + edge caching", "No optimization", "Local streaming"],
        correct: [1],
        explanation: "Adaptive bitrate ajusta qualidade baseado na conexão, CloudFront reduz latência.",
        topic: "performance", domain: "performance"
    },
    {
        id: 93,
        question: "Qual é a melhor prática para session management performance?",
        options: ["Database sessions", "ElastiCache + session clustering + sticky sessions", "Local sessions", "No sessions"],
        correct: [1],
        explanation: "ElastiCache oferece fast session access, clustering fornece HA e sticky sessions reduzem latência.",
        topic: "performance", domain: "performance"
    },
    {
        id: 94,
        question: "Como otimizar performance de data analytics?",
        options: ["Single node processing", "Redshift + columnar storage + parallel processing", "Row storage", "Sequential processing"],
        correct: [1],
        explanation: "Redshift com columnar storage e parallel processing otimiza analytics workloads.",
        topic: "performance", domain: "performance"
    },
    {
        id: 95,
        question: "Qual estratégia para otimizar file upload performance?",
        options: ["Single part upload", "Multipart upload + parallel streams + compression", "Sequential upload", "No optimization"],
        correct: [1],
        explanation: "Multipart upload com parallel streams maximiza throughput para large files.",
        topic: "performance", domain: "performance"
    },
    {
        id: 96,
        question: "Como otimizar performance de GraphQL APIs?",
        options: ["No optimization", "Query complexity analysis + caching + batching", "Unlimited queries", "No caching"],
        correct: [1],
        explanation: "Query complexity analysis previne expensive queries, caching e batching otimizam performance.",
        topic: "performance", domain: "performance"
    },
    {
        id: 97,
        question: "Qual é a melhor prática para optimizing WebSocket performance?",
        options: ["HTTP polling", "API Gateway WebSocket + connection pooling + message batching", "No optimization", "Single connections"],
        correct: [1],
        explanation: "API Gateway WebSocket com connection pooling e message batching otimiza real-time communication.",
        topic: "performance", domain: "performance"
    },
    {
        id: 98,
        question: "Como otimizar performance de ETL processes?",
        options: ["Single threaded", "Glue + parallel processing + columnar formats", "Sequential processing", "No optimization"],
        correct: [1],
        explanation: "Glue com parallel processing e columnar formats (Parquet) otimiza ETL performance.",
        topic: "performance", domain: "performance"
    },
    {
        id: 99,
        question: "Qual estratégia para otimizar IoT data ingestion?",
        options: ["Synchronous processing", "Kinesis + batch processing + compression", "Single stream", "No batching"],
        correct: [1],
        explanation: "Kinesis com batch processing e compression otimiza high-volume IoT data ingestion.",
        topic: "performance", domain: "performance"
    },
    {
        id: 100,
        question: "Como otimizar performance de microservices communication?",
        options: ["Synchronous calls", "Async messaging + circuit breakers + connection pooling", "No optimization", "Direct calls"],
        correct: [1],
        explanation: "Async messaging reduz coupling, circuit breakers previnem cascading failures.",
        topic: "performance", domain: "performance"
    },
    {
        id: 101,
        question: "Qual é a melhor prática para optimizing CDN performance?",
        options: ["Single origin", "Multiple origins + edge optimization + compression", "No caching", "Local delivery"],
        correct: [1],
        explanation: "Multiple origins reduzem latência, edge optimization e compression melhoram delivery.",
        topic: "performance", domain: "performance"
    },
    {
        id: 102,
        question: "Como otimizar performance de batch jobs?",
        options: ["Single instance", "Batch + Spot instances + parallel processing", "Sequential processing", "No optimization"],
        correct: [1],
        explanation: "AWS Batch com Spot instances e parallel processing otimiza cost e performance.",
        topic: "performance", domain: "performance"
    },
    {
        id: 103,
        question: "Qual estratégia para otimizar real-time analytics?",
        options: ["Batch processing", "Kinesis Analytics + in-memory processing + windowing", "Disk-based processing", "No optimization"],
        correct: [1],
        explanation: "Kinesis Analytics com in-memory processing e windowing otimiza real-time analytics.",
        topic: "performance", domain: "performance"
    },
    {
        id: 104,
        question: "Como otimizar performance de content personalization?",
        options: ["Static content", "Personalize + edge caching + A/B testing", "No personalization", "Manual curation"],
        correct: [1],
        explanation: "Amazon Personalize com edge caching oferece personalization em real-time com baixa latência.",
        topic: "performance", domain: "performance"
    },
    {
        id: 105,
        question: "Qual é a melhor prática para optimizing database connections?",
        options: ["Direct connections", "Connection pooling + read replicas + query optimization", "Unlimited connections", "No pooling"],
        correct: [1],
        explanation: "Connection pooling reduz overhead, read replicas distribuem load e query optimization reduz latência.",
        topic: "performance", domain: "performance"
    },
    {
        id: 106,
        question: "Como otimizar performance de image processing?",
        options: ["CPU processing", "GPU instances + parallel processing + optimized libraries", "Sequential processing", "No optimization"],
        correct: [1],
        explanation: "GPU instances com parallel processing e libraries otimizadas aceleram image processing.",
        topic: "performance", domain: "performance"
    },
    {
        id: 107,
        question: "Qual estratégia para otimizar API response times?",
        options: ["No caching", "Response caching + compression + pagination", "Large responses", "No optimization"],
        correct: [1],
        explanation: "Response caching, compression e pagination reduzem response times e bandwidth usage.",
        topic: "performance", domain: "performance"
    },
    {
        id: 108,
        question: "Como otimizar performance de log processing?",
        options: ["Synchronous processing", "Kinesis + Lambda + parallel processing", "Sequential processing", "No processing"],
        correct: [1],
        explanation: "Kinesis com Lambda oferece parallel processing escalável para log processing.",
        topic: "performance", domain: "performance"
    },
    {
        id: 109,
        question: "Qual é a melhor prática para optimizing memory usage?",
        options: ["Maximum memory", "Right-sizing + memory monitoring + garbage collection tuning", "Minimum memory", "No optimization"],
        correct: [1],
        explanation: "Right-sizing com monitoring e GC tuning otimiza memory usage e performance.",
        topic: "performance", domain: "performance"
    },
    {
        id: 110,
        question: "Como otimizar performance de distributed caching?",
        options: ["Local cache only", "ElastiCache cluster + consistent hashing + cache warming", "No caching", "Single cache node"],
        correct: [1],
        explanation: "ElastiCache cluster com consistent hashing e cache warming otimiza distributed caching.",
        topic: "performance", domain: "performance"
    },
    {
        id: 111,
        question: "Qual estratégia para otimizar cross-region performance?",
        options: ["Single region", "Multi-region deployment + data locality + edge caching", "No optimization", "Manual routing"],
        correct: [1],
        explanation: "Multi-region deployment com data locality e edge caching reduz latência global.",
        topic: "performance", domain: "performance"
    },
    {
        id: 112,
        question: "Como otimizar performance de event-driven architectures?",
        options: ["Synchronous events", "Async events + batching + dead letter queues", "No optimization", "Sequential processing"],
        correct: [1],
        explanation: "Async events com batching aumentam throughput e DLQ garantem reliability.",
        topic: "performance", domain: "performance"
    },
    {
        id: 113,
        question: "Qual é a melhor prática para optimizing startup times?",
        options: ["Cold starts", "Warm pools + initialization optimization + lazy loading", "No optimization", "Full loading"],
        correct: [1],
        explanation: "Warm pools, initialization optimization e lazy loading reduzem startup times.",
        topic: "performance", domain: "performance"
    },
    {
        id: 114,
        question: "Como otimizar performance de data synchronization?",
        options: ["Full sync", "Incremental sync + change data capture + compression", "No optimization", "Manual sync"],
        correct: [1],
        explanation: "Incremental sync com CDC e compression minimiza data transfer e latência.",
        topic: "performance", domain: "performance"
    },
    {
        id: 115,
        question: "Qual estratégia para otimizar query performance?",
        options: ["Full table scans", "Indexing + query optimization + result caching", "No indexes", "No optimization"],
        correct: [1],
        explanation: "Proper indexing, query optimization e result caching maximizam query performance.",
        topic: "performance", domain: "performance"
    },
    {
        id: 116,
        question: "Como otimizar performance de notification systems?",
        options: ["Synchronous notifications", "SNS + SQS + batching + fan-out patterns", "No optimization", "Single notifications"],
        correct: [1],
        explanation: "SNS/SQS com batching e fan-out patterns otimizam notification delivery performance.",
        topic: "performance", domain: "performance"
    }
];

window.performanceQuestions = performanceQuestions;