// SAA-C03 Domain 2: High-Performing Architectures (56 questões - 28%)
// Tópicos: EC2, EBS, S3, CloudFront, ElastiCache, RDS, DynamoDB, Lambda, Auto Scaling, networking

const performanceQuestions = [
    {
        id: 'perf_001',
        question: "Uma aplicação de analytics processa queries em um data warehouse de 10TB. Queries levam 15 minutos em RDS PostgreSQL. O requisito é reduzir para < 30 segundos. Qual solução?",
        options: [
            "Migrar para RDS com instância maior",
            "Migrar para Amazon Redshift com distribuição por colunas e compression",
            "Adicionar read replicas ao RDS",
            "Usar ElastiCache na frente do RDS"
        ],
        correct: [1],
        explanation: "Redshift é otimizado para analytics (columnar storage, MPP, compression). Queries analíticas em TB de dados executam em segundos vs minutos em bancos row-based.",
        topic: "database",
        domain: "performance"
    },
    {
        id: 'perf_002',
        question: "Uma aplicação serve imagens de produtos (média 2MB cada) para usuários globais. Latência média é 800ms para usuários na Ásia (origin em us-east-1). Como reduzir para < 100ms?",
        options: [
            "Usar S3 Transfer Acceleration",
            "CloudFront com S3 origin + cache policy com TTL alto para imagens",
            "Replicar bucket S3 para região na Ásia",
            "Usar instâncias EC2 na Ásia para servir imagens"
        ],
        correct: [1],
        explanation: "CloudFront cacheia imagens nos edge locations globais. Após primeiro acesso, imagens são servidas do edge mais próximo com latência < 50ms. TTL alto maximiza cache hit ratio.",
        topic: "cdn",
        domain: "performance"
    },
    {
        id: 'perf_003',
        question: "Uma aplicação de machine learning precisa de GPU instances para training jobs que duram 4-8 horas. Os jobs são tolerantes a interrupção. Como otimizar custo e performance?",
        options: [
            "On-Demand p4d instances",
            "Spot Instances p4d com checkpointing em S3 + Spot Fleet diversificado",
            "Reserved Instances p4d por 1 ano",
            "Lambda com GPU"
        ],
        correct: [1],
        explanation: "Spot Instances oferecem até 90% desconto. Checkpointing em S3 permite retomar após interrupção. Fleet diversificado (múltiplos instance types/AZs) reduz chance de interrupção.",
        topic: "compute",
        domain: "performance"
    },
    {
        id: 'perf_004',
        question: "Uma aplicação de trading financeiro requer latência de rede < 1ms entre instâncias EC2 que processam dados em paralelo. Qual configuração de rede?",
        options: [
            "Enhanced Networking com ENA",
            "Cluster Placement Group com Enhanced Networking + Elastic Fabric Adapter",
            "Spread Placement Group",
            "Instâncias em AZs diferentes para redundância"
        ],
        correct: [1],
        explanation: "Cluster Placement Group coloca instâncias no mesmo rack (latência mínima). EFA fornece bypass do kernel para comunicação inter-node com latência < 1ms.",
        topic: "networking",
        domain: "performance"
    },
    {
        id: 'perf_005',
        question: "Uma aplicação web tem banco RDS MySQL com 90% reads e 10% writes. Read latency está em 50ms mas o requisito é < 5ms para queries frequentes. Qual solução?",
        options: [
            "Migrar para instância RDS maior",
            "ElastiCache Redis como cache-aside para queries frequentes + RDS read replicas",
            "Usar RDS Proxy",
            "Converter para Aurora"
        ],
        correct: [1],
        explanation: "ElastiCache Redis fornece latência sub-millisecond para dados cacheados. Cache-aside pattern: app verifica cache primeiro, se miss vai ao DB e popula cache. Read replicas distribuem reads não-cacheados.",
        topic: "caching",
        domain: "performance"
    },
    {
        id: 'perf_006',
        question: "Uma aplicação processa arquivos de log de 500GB/dia. Precisa de queries ad-hoc rápidas sem gerenciar infraestrutura. Dados são acessados por 30 dias, depois raramente. Qual solução?",
        options: [
            "RDS com particionamento por data",
            "S3 (Parquet format) + Athena para queries + lifecycle policy para Glacier após 30 dias",
            "Elasticsearch cluster",
            "Redshift com resize automático"
        ],
        correct: [1],
        explanation: "Athena é serverless, paga por query. Parquet é columnar (scan eficiente). S3 lifecycle move dados antigos para Glacier automaticamente. Zero infraestrutura para gerenciar.",
        topic: "analytics",
        domain: "performance"
    },
    {
        id: 'perf_007',
        question: "Uma API REST tem endpoint que retorna dados que mudam a cada 5 minutos. 80% dos requests são idênticos. Latência atual é 200ms. Como reduzir para < 10ms?",
        options: [
            "Usar instâncias EC2 maiores",
            "API Gateway caching com TTL de 300 segundos",
            "CloudFront com origin ALB",
            "Lambda com Provisioned Concurrency"
        ],
        correct: [1],
        explanation: "API Gateway cache armazena respostas por TTL configurado. 80% dos requests idênticos serão servidos do cache em < 1ms sem atingir o backend.",
        topic: "caching",
        domain: "performance"
    },
    {
        id: 'perf_008',
        question: "Uma aplicação de vídeo streaming precisa entregar conteúdo 4K com bitrate adaptativo para milhões de usuários simultâneos. Qual arquitetura?",
        options: [
            "EC2 instances com nginx",
            "CloudFront com S3 origin + MediaConvert para transcoding + múltiplas resoluções",
            "ALB com Auto Scaling",
            "Global Accelerator com EC2"
        ],
        correct: [1],
        explanation: "MediaConvert gera múltiplas resoluções/bitrates (HLS/DASH). CloudFront distribui globalmente com adaptive bitrate streaming. S3 armazena segmentos. Escala para milhões sem gerenciar servers.",
        topic: "cdn",
        domain: "performance"
    },
    {
        id: 'perf_009',
        question: "Uma aplicação de e-commerce tem DynamoDB table com partition key 'product_id'. Durante promoções, 5 produtos populares recebem 90% dos reads, causando hot partitions. Como resolver?",
        options: [
            "Aumentar RCU provisionado",
            "DAX (DynamoDB Accelerator) como cache in-memory na frente do DynamoDB",
            "Criar GSI com partition key diferente",
            "Mudar para on-demand capacity"
        ],
        correct: [1],
        explanation: "DAX fornece cache in-memory com latência microseconds. Items populares são servidos do cache, eliminando hot partitions no DynamoDB. Transparente para a aplicação.",
        topic: "database",
        domain: "performance"
    },
    {
        id: 'perf_010',
        question: "Uma aplicação precisa processar 10.000 arquivos CSV pequenos (1MB cada) em S3 diariamente. Processamento individual leva 2 segundos. Como maximizar throughput?",
        options: [
            "Uma Lambda processando sequencialmente",
            "S3 Event → SQS → Lambda com reserved concurrency alta + batch size otimizado",
            "EC2 instance com script sequencial",
            "Step Functions com Map state sequencial"
        ],
        correct: [1],
        explanation: "SQS + Lambda escala automaticamente. Com concurrency alta, milhares de arquivos são processados em paralelo. 10.000 arquivos × 2s = ~20s total com concurrency suficiente.",
        topic: "serverless",
        domain: "performance"
    },
    {
        id: 'perf_011',
        question: "Uma aplicação de banco de dados precisa de 64.000 IOPS consistentes com latência < 1ms. Volume atual EBS gp3 (16.000 IOPS max) é insuficiente. Qual solução?",
        options: [
            "Usar múltiplos gp3 em RAID 0",
            "EBS io2 Block Express com 64.000 IOPS provisionados",
            "Instance store NVMe",
            "EFS com Provisioned Throughput"
        ],
        correct: [1],
        explanation: "io2 Block Express suporta até 256.000 IOPS com latência sub-millisecond e 99.999% durabilidade. Instance store não persiste dados. RAID 0 adiciona complexidade.",
        topic: "storage",
        domain: "performance"
    },
    {
        id: 'perf_012',
        question: "Uma aplicação web tem Auto Scaling baseado em CPU (target 70%). Durante picos de requests, CPU fica em 40% mas response time degrada. Qual métrica usar para scaling?",
        options: [
            "Reduzir CPU target para 30%",
            "Custom metric: ALBRequestCountPerTarget ou response latency",
            "Memory utilization",
            "Network bytes in"
        ],
        correct: [1],
        explanation: "CPU baixa com latência alta indica bottleneck em I/O ou conexões, não CPU. ALBRequestCountPerTarget escala baseado em requests por instância — métrica mais relevante para web apps.",
        topic: "autoscaling",
        domain: "performance"
    },
    {
        id: 'perf_013',
        question: "Uma aplicação precisa fazer queries full-text search em 50 milhões de documentos com latência < 100ms. Qual serviço AWS?",
        options: [
            "DynamoDB com Scan e FilterExpression",
            "Amazon OpenSearch Service com índices otimizados",
            "RDS com LIKE queries",
            "S3 Select"
        ],
        correct: [1],
        explanation: "OpenSearch (Elasticsearch) é otimizado para full-text search com inverted indexes. Queries em milhões de documentos retornam em milliseconds. DynamoDB/RDS não são eficientes para full-text.",
        topic: "search",
        domain: "performance"
    },
    {
        id: 'perf_014',
        question: "Uma aplicação Lambda com 128MB de memória tem duration média de 5 segundos. Aumentar memória para 1024MB reduz duration para 800ms. Qual configuração é mais custo-eficiente?",
        options: [
            "Manter 128MB (menor custo por ms)",
            "1024MB — custo total menor porque duration reduz proporcionalmente mais que o aumento de preço",
            "512MB como meio-termo",
            "3008MB para máxima performance"
        ],
        correct: [1],
        explanation: "Lambda cobra por GB-second. 128MB × 5s = 640 MB-s. 1024MB × 0.8s = 819 MB-s. Porém, 1024MB é apenas 28% mais caro com 84% menos duration. Para workloads CPU-bound, mais memória = mais vCPU = melhor custo-benefício.",
        topic: "serverless",
        domain: "performance"
    },
    {
        id: 'perf_015',
        question: "Uma aplicação precisa transferir 1TB de dados entre VPCs em regiões diferentes diariamente. Atualmente usa internet pública (lento e inseguro). Qual solução otimiza performance?",
        options: [
            "VPN Site-to-Site entre VPCs",
            "VPC Peering inter-region (tráfego pela backbone AWS, criptografado)",
            "S3 como intermediário",
            "Direct Connect entre regiões"
        ],
        correct: [1],
        explanation: "VPC Peering inter-region usa a backbone AWS (alta bandwidth, baixa latência, criptografado). Sem overhead de VPN. Custo por GB transferido mas performance superior à internet.",
        topic: "networking",
        domain: "performance"
    },
    {
        id: 'perf_016',
        question: "Uma aplicação de real-time gaming precisa de latência < 10ms para matchmaking entre jogadores globais. Qual serviço AWS?",
        options: [
            "ALB com Auto Scaling",
            "AWS Global Accelerator com endpoints em múltiplas regiões",
            "CloudFront com dynamic content",
            "Route 53 latency-based routing"
        ],
        correct: [1],
        explanation: "Global Accelerator usa anycast IPs e a rede AWS global para rotear jogadores ao endpoint mais próximo com latência mínima. Diferente de CloudFront, otimizado para TCP/UDP dinâmico.",
        topic: "networking",
        domain: "performance"
    },
    {
        id: 'perf_017',
        question: "Uma aplicação de data lake em S3 tem 500TB de dados em formato JSON. Queries Athena levam 10+ minutos. Como otimizar para < 30 segundos?",
        options: [
            "Usar S3 Intelligent Tiering",
            "Converter para Parquet (columnar) + particionar por data + usar compression (Snappy)",
            "Migrar para RDS",
            "Usar S3 Select"
        ],
        correct: [1],
        explanation: "Parquet reduz scan em 90%+ (columnar). Particionamento elimina scan de dados irrelevantes. Snappy compression reduz I/O. Combinados, queries de minutos viram segundos.",
        topic: "analytics",
        domain: "performance"
    },
    {
        id: 'perf_018',
        question: "Uma aplicação tem microservices que fazem chamadas síncronas entre si. Latência end-to-end é 2 segundos (soma de 10 chamadas de 200ms cada). Como reduzir?",
        options: [
            "Usar instâncias maiores",
            "Paralelizar chamadas independentes + cache de respostas frequentes + connection reuse",
            "Combinar todos em um monolito",
            "Usar gRPC ao invés de REST"
        ],
        correct: [1],
        explanation: "Chamadas independentes em paralelo reduzem latência de soma para max. Cache elimina chamadas repetidas. Connection reuse (keep-alive) elimina overhead de handshake.",
        topic: "architecture",
        domain: "performance"
    },
    {
        id: 'perf_019',
        question: "Uma aplicação precisa de banco de dados com latência de leitura < 1ms para session data (key-value, 1KB por item). Qual serviço?",
        options: [
            "RDS com read replicas",
            "ElastiCache Redis com cluster mode enabled",
            "DynamoDB com DAX",
            "Opções B e C"
        ],
        correct: [3],
        explanation: "Tanto ElastiCache Redis (sub-ms) quanto DynamoDB+DAX (microseconds) atendem < 1ms para key-value. Redis é mais simples para sessions. DAX se já usa DynamoDB.",
        topic: "caching",
        domain: "performance"
    },
    {
        id: 'perf_020',
        question: "Uma aplicação de HPC (High Performance Computing) precisa de throughput de 100 GB/s para storage compartilhado entre 1000 instâncias. Qual serviço?",
        options: [
            "EFS com Max I/O mode",
            "FSx for Lustre integrado com S3",
            "EBS io2 com Multi-Attach",
            "S3 com multipart"
        ],
        correct: [1],
        explanation: "FSx for Lustre fornece centenas de GB/s de throughput para HPC workloads. Integra com S3 para dados persistentes. Projetado para computação paralela massiva.",
        topic: "storage",
        domain: "performance"
    }
];

window.performanceQuestions = performanceQuestions;


// High-Performing Architectures - Lote 2 (questões 21-40)
const performanceQuestions2 = [
    {
        id: 'perf_021',
        question: "Uma aplicação de e-commerce tem página de produto que faz 8 queries ao banco para montar a resposta. Latência total é 400ms. Como reduzir para < 50ms sem mudar o schema?",
        options: [
            "Usar instância RDS maior",
            "Implementar query result caching com ElastiCache + cache invalidation via DynamoDB Streams ou TTL",
            "Adicionar índices em todas as tabelas",
            "Usar connection pooling"
        ],
        correct: [1],
        explanation: "Cache da resposta completa (ou parcial) em ElastiCache elimina as 8 queries. TTL ou event-driven invalidation mantém dados frescos. Latência de cache: < 1ms.",
        topic: "caching",
        domain: "performance"
    },
    {
        id: 'perf_022',
        question: "Uma aplicação precisa ingerir 1 milhão de eventos/segundo com processamento em tempo real e armazenamento para replay. Qual arquitetura?",
        options: [
            "SQS Standard + Lambda",
            "Kinesis Data Streams (on-demand) + Kinesis Data Analytics + S3 para archive",
            "SNS + múltiplos subscribers",
            "API Gateway + DynamoDB"
        ],
        correct: [1],
        explanation: "Kinesis on-demand escala para milhões de records/s. Data Analytics processa em real-time (SQL/Flink). Retention de até 365 dias permite replay. SQS não mantém ordem nem permite replay.",
        topic: "streaming",
        domain: "performance"
    },
    {
        id: 'perf_023',
        question: "Uma aplicação serve arquivos estáticos de 50-200MB (instaladores de software). Downloads são lentos para usuários distantes do origin. Como otimizar?",
        options: [
            "Usar instâncias EC2 maiores",
            "CloudFront com large file optimization (range GETs) + origin shield + S3 origin",
            "S3 Transfer Acceleration",
            "Múltiplos buckets S3 em regiões diferentes"
        ],
        correct: [1],
        explanation: "CloudFront usa range GETs para cachear arquivos grandes em chunks nos edges. Origin Shield reduz carga no origin. Usuários baixam do edge mais próximo com alta velocidade.",
        topic: "cdn",
        domain: "performance"
    },
    {
        id: 'perf_024',
        question: "Uma aplicação de IoT coleta dados de 100.000 sensores a cada segundo. Precisa armazenar e consultar séries temporais dos últimos 90 dias. Qual banco de dados?",
        options: [
            "DynamoDB com TTL",
            "Amazon Timestream com memory store (recente) + magnetic store (histórico)",
            "RDS PostgreSQL com TimescaleDB",
            "Redshift"
        ],
        correct: [1],
        explanation: "Timestream é otimizado para time-series: ingestão massiva, queries temporais rápidas, tiering automático (memory→magnetic), retenção configurável. Serverless, sem gerenciamento.",
        topic: "database",
        domain: "performance"
    },
    {
        id: 'perf_025',
        question: "Uma aplicação tem Auto Scaling Group com instâncias c5.xlarge. CPU média é 30% mas memory é 85%. Instâncias ficam lentas por swap. Como otimizar?",
        options: [
            "Adicionar mais instâncias c5.xlarge",
            "Mudar para instâncias memory-optimized (r5.xlarge) + scaling baseado em custom memory metric",
            "Aumentar para c5.2xlarge",
            "Adicionar swap space"
        ],
        correct: [1],
        explanation: "r5 (memory-optimized) tem 2x mais RAM que c5 pelo mesmo preço relativo. Custom metric de memória no CloudWatch Agent permite scaling baseado no recurso real (memória, não CPU).",
        topic: "compute",
        domain: "performance"
    },
    {
        id: 'perf_026',
        question: "Uma aplicação de machine learning precisa carregar modelo de 20GB em memória para inferência. Cold start leva 3 minutos. Como servir inferências com latência < 100ms?",
        options: [
            "Lambda com 10GB memory",
            "SageMaker Real-time Inference endpoint com modelo pre-loaded + Auto Scaling",
            "EC2 com modelo em EBS",
            "Fargate com modelo em EFS"
        ],
        correct: [1],
        explanation: "SageMaker endpoint mantém modelo carregado em memória permanentemente. Auto Scaling ajusta instâncias por demanda. Inferência em ms sem cold start. Lambda tem limite de 10GB.",
        topic: "ml",
        domain: "performance"
    },
    {
        id: 'perf_027',
        question: "Uma aplicação de chat em tempo real precisa entregar mensagens para 500.000 usuários conectados simultaneamente com latência < 200ms. Qual arquitetura?",
        options: [
            "Polling HTTP a cada segundo",
            "API Gateway WebSocket + Lambda + DynamoDB para connection management",
            "ALB com long polling",
            "SNS push notifications"
        ],
        correct: [1],
        explanation: "WebSocket mantém conexão persistente (sem polling overhead). API Gateway gerencia até 500K conexões simultâneas. Lambda processa mensagens. DynamoDB armazena connectionIds para targeting.",
        topic: "realtime",
        domain: "performance"
    },
    {
        id: 'perf_028',
        question: "Uma aplicação de relatórios executa queries complexas em Aurora MySQL que levam 30 segundos e impactam o writer. Como isolar workloads analíticos?",
        options: [
            "Aumentar instância do writer",
            "Aurora read replicas com custom endpoint para analytics + reader endpoint para app reads",
            "Migrar analytics para RDS separado",
            "Usar query cache do MySQL"
        ],
        correct: [1],
        explanation: "Custom endpoint direciona queries analíticas para replicas específicas (maiores). Reader endpoint distribui reads da app. Writer fica isolado para writes apenas.",
        topic: "database",
        domain: "performance"
    },
    {
        id: 'perf_029',
        question: "Uma aplicação precisa de DNS resolution com latência mínima para milhões de requests/segundo internos (service discovery). Qual solução?",
        options: [
            "Route 53 public hosted zone",
            "Route 53 Resolver com private hosted zones + VPC DNS caching",
            "Hosts file em cada instância",
            "Consul/etcd self-managed"
        ],
        correct: [1],
        explanation: "Route 53 private hosted zones com Resolver fornecem DNS interno de alta performance. VPC DNS cache reduz latência. Escala automaticamente para milhões de queries.",
        topic: "networking",
        domain: "performance"
    },
    {
        id: 'perf_030',
        question: "Uma aplicação batch processa 1TB de dados em EMR cluster. Job leva 4 horas com instâncias m5.xlarge. Como reduzir para 1 hora?",
        options: [
            "Usar instâncias m5.4xlarge (4x maiores)",
            "Usar instâncias com NVMe local (i3/d3) + aumentar paralelismo + Spot para task nodes",
            "Adicionar mais steps ao job",
            "Usar S3 Select para filtrar dados"
        ],
        correct: [1],
        explanation: "NVMe local elimina network I/O para shuffle. Mais paralelismo (mais nodes) distribui trabalho. Spot para task nodes reduz custo do cluster maior. Combinados: 4x speedup viável.",
        topic: "bigdata",
        domain: "performance"
    },
    {
        id: 'perf_031',
        question: "Uma API tem endpoint que agrega dados de 3 microservices downstream. Cada chamada leva 100ms. Total sequencial: 300ms. Como reduzir para ~100ms?",
        options: [
            "Cachear tudo por 1 hora",
            "Fazer as 3 chamadas em paralelo (Promise.all / async) + timeout individual de 150ms",
            "Combinar os 3 serviços em um",
            "Usar gRPC streaming"
        ],
        correct: [1],
        explanation: "Chamadas paralelas: latência total = max(100ms, 100ms, 100ms) = ~100ms ao invés de soma. Timeout individual evita que um serviço lento bloqueie a resposta.",
        topic: "architecture",
        domain: "performance"
    },
    {
        id: 'perf_032',
        question: "Uma aplicação de geolocalização precisa encontrar os 10 pontos mais próximos de uma coordenada entre 50 milhões de registros com latência < 50ms. Qual solução?",
        options: [
            "DynamoDB com Scan",
            "Amazon OpenSearch com geo_distance query + geo_point mapping",
            "RDS com cálculo de distância em SQL",
            "ElastiCache com geospatial commands"
        ],
        correct: [1],
        explanation: "OpenSearch geo queries são otimizadas com spatial indexing (BKD trees). Queries geo_distance em milhões de pontos retornam em ms. ElastiCache Redis GEORADIUS funciona mas para datasets menores.",
        topic: "search",
        domain: "performance"
    },
    {
        id: 'perf_033',
        question: "Uma aplicação usa DynamoDB com partition key 'date' (YYYY-MM-DD). Todas as writes do dia vão para a mesma partition, causando throttling. Como redesenhar?",
        options: [
            "Aumentar WCU",
            "Usar partition key composta: date#random_suffix (write sharding) + GSI para queries por data",
            "Mudar para on-demand",
            "Usar sort key como date"
        ],
        correct: [1],
        explanation: "Write sharding distribui writes entre múltiplas partitions (date#01, date#02...). GSI com date como partition key permite queries por data. Elimina hot partition.",
        topic: "database",
        domain: "performance"
    },
    {
        id: 'perf_034',
        question: "Uma aplicação de video conferência precisa de latência UDP < 50ms entre participantes em diferentes continentes. Qual serviço AWS?",
        options: [
            "CloudFront",
            "AWS Global Accelerator com UDP support + endpoints regionais",
            "Route 53 latency routing",
            "VPN entre regiões"
        ],
        correct: [1],
        explanation: "Global Accelerator suporta UDP, usa a rede AWS global (menos hops que internet pública), e roteia para o endpoint mais próximo. Ideal para real-time media com requisito de baixa latência.",
        topic: "networking",
        domain: "performance"
    },
    {
        id: 'perf_035',
        question: "Uma aplicação precisa processar imagens (resize, watermark) on-demand quando acessadas via URL. Volume: 10.000 requests/minuto com picos de 50.000. Qual arquitetura?",
        options: [
            "EC2 com Auto Scaling",
            "CloudFront + Lambda@Edge para processamento no edge + S3 origin para originais",
            "API Gateway + Lambda + S3",
            "ECS Fargate com Auto Scaling"
        ],
        correct: [1],
        explanation: "Lambda@Edge processa imagens no edge location mais próximo do usuário. CloudFront cacheia resultado. Requests subsequentes servidos do cache sem reprocessamento.",
        topic: "serverless",
        domain: "performance"
    },
    {
        id: 'perf_036',
        question: "Uma aplicação de data warehouse em Redshift tem queries que fazem full table scan em tabela de 5TB. Como otimizar para scan apenas dados relevantes?",
        options: [
            "Adicionar mais nodes ao cluster",
            "Usar sort keys na coluna de filtro + distribution style adequado + VACUUM regular",
            "Migrar para Redshift Serverless",
            "Usar materialized views para tudo"
        ],
        correct: [1],
        explanation: "Sort keys permitem zone maps (skip blocks irrelevantes). Distribution style otimiza joins (KEY para join columns, ALL para dimensões pequenas). VACUUM mantém sort order.",
        topic: "analytics",
        domain: "performance"
    },
    {
        id: 'perf_037',
        question: "Uma aplicação tem 200 Lambda functions que conectam ao mesmo RDS. Cada invocação abre nova conexão. RDS atinge max_connections (1000) e novas Lambdas falham. Como resolver?",
        options: [
            "Aumentar max_connections para 5000",
            "RDS Proxy para connection pooling + multiplexing entre Lambda e RDS",
            "Reduzir Lambda concurrency para 100",
            "Usar DynamoDB ao invés"
        ],
        correct: [1],
        explanation: "RDS Proxy mantém pool de conexões persistentes ao RDS. Múltiplas Lambda invocations compartilham conexões via multiplexing. Reduz conexões de milhares para dezenas.",
        topic: "database",
        domain: "performance"
    },
    {
        id: 'perf_038',
        question: "Uma aplicação precisa de throughput de escrita de 100.000 items/segundo em DynamoDB. Cada item tem 2KB. Qual configuração?",
        options: [
            "Provisioned com 100.000 WCU",
            "On-demand mode (escala automaticamente) + batch writes (BatchWriteItem)",
            "Provisioned com 200.000 WCU (2KB = 2 WCU por write)",
            "Opções B ou C dependendo do padrão de tráfego"
        ],
        correct: [3],
        explanation: "2KB item = 2 WCU por write. 100K writes/s = 200K WCU. On-demand é melhor para tráfego imprevisível. Provisioned (200K WCU) é mais barato para tráfego constante. BatchWriteItem reduz overhead.",
        topic: "database",
        domain: "performance"
    },
    {
        id: 'perf_039',
        question: "Uma aplicação web tem assets estáticos (JS, CSS, imagens) que mudam a cada deploy. CloudFront serve versões antigas por causa do cache. Como resolver sem invalidar todo o cache?",
        options: [
            "Desabilitar cache no CloudFront",
            "Usar cache busting com hash no filename (app.a1b2c3.js) + TTL longo para assets",
            "TTL = 0 para todos os assets",
            "Invalidar /* após cada deploy"
        ],
        correct: [1],
        explanation: "Hash no filename (content-based) garante URL única por versão. TTL longo maximiza cache. Novos deploys geram novos filenames, servidos fresh. Sem invalidação necessária.",
        topic: "cdn",
        domain: "performance"
    },
    {
        id: 'perf_040',
        question: "Uma aplicação precisa de banco de dados graph para queries de relacionamento (ex: 'amigos de amigos' em rede social) com latência < 10ms em grafos com bilhões de edges. Qual serviço?",
        options: [
            "DynamoDB com adjacency list",
            "Amazon Neptune com Gremlin/SPARQL queries",
            "RDS com recursive CTEs",
            "OpenSearch com nested documents"
        ],
        correct: [1],
        explanation: "Neptune é graph database gerenciado, otimizado para traversal queries em grafos massivos. Queries de N-hops em bilhões de edges retornam em ms. DynamoDB adjacency list não escala para traversals profundos.",
        topic: "database",
        domain: "performance"
    }
];

performanceQuestions.push(...performanceQuestions2);


// High-Performing Architectures - Lote 3 (questões 41-56)
const performanceQuestions3 = [
    {
        id: 'perf_041',
        question: "Uma aplicação de e-commerce precisa retornar resultados de busca personalizados para cada usuário em < 50ms. Catálogo tem 10 milhões de produtos. Qual arquitetura?",
        options: [
            "RDS com queries complexas",
            "OpenSearch para busca + Amazon Personalize para ranking personalizado + ElastiCache para resultados frequentes",
            "DynamoDB com GSI",
            "Redshift para analytics em tempo real"
        ],
        correct: [1],
        explanation: "OpenSearch retorna resultados relevantes em ms. Personalize re-rankeia baseado no perfil do usuário. ElastiCache cacheia combinações frequentes (user segment + query). Pipeline completo < 50ms.",
        topic: "search",
        domain: "performance"
    },
    {
        id: 'perf_042',
        question: "Uma aplicação de streaming de áudio precisa servir arquivos de 3-5MB com start time < 500ms para usuários globais. Qual configuração de CloudFront?",
        options: [
            "Default cache behavior com TTL alto",
            "CloudFront com Origin Shield + Range GET habilitado + PriceClass_All + HTTP/3 enabled",
            "S3 website hosting direto",
            "Global Accelerator com S3"
        ],
        correct: [1],
        explanation: "Origin Shield consolida requests ao origin. Range GET permite streaming parcial (start rápido). PriceClass_All usa todos os edges. HTTP/3 (QUIC) reduz latência de conexão.",
        topic: "cdn",
        domain: "performance"
    },
    {
        id: 'perf_043',
        question: "Uma aplicação precisa executar ETL em 500GB de dados CSV diariamente, transformando para Parquet particionado. Precisa ser serverless e custo-eficiente. Qual serviço?",
        options: [
            "Lambda com S3 Select",
            "AWS Glue com Spark jobs + job bookmarks para processamento incremental",
            "EMR cluster permanente",
            "Athena CTAS (Create Table As Select)"
        ],
        correct: [1],
        explanation: "Glue é serverless ETL com Spark. Job bookmarks rastreiam dados já processados (incremental). Auto-scaling de DPUs. Paga apenas pelo tempo de execução. Para 500GB, mais eficiente que EMR permanente.",
        topic: "bigdata",
        domain: "performance"
    },
    {
        id: 'perf_044',
        question: "Uma aplicação de monitoramento coleta métricas de 10.000 servidores a cada 10 segundos. Precisa de dashboards real-time e alertas com latência < 30 segundos. Qual stack?",
        options: [
            "CloudWatch custom metrics + dashboards + alarms",
            "Kinesis Data Streams → Lambda → Timestream + Grafana para dashboards + SNS para alertas",
            "Elasticsearch + Kibana",
            "RDS + aplicação custom"
        ],
        correct: [0],
        explanation: "CloudWatch aceita custom metrics em alta resolução (1s), dashboards nativos com auto-refresh, e alarms com evaluation period de 10s. Solução mais simples e integrada para métricas AWS.",
        topic: "monitoring",
        domain: "performance"
    },
    {
        id: 'perf_045',
        question: "Uma aplicação de banco digital precisa de reads com latência < 5ms em DynamoDB para consulta de saldo. Table tem 100 milhões de items. Eventually consistent reads são aceitáveis. Como garantir?",
        options: [
            "Provisionar mais RCU",
            "DynamoDB com DAX cluster (microsecond latency para cache hits)",
            "Usar Global Tables",
            "Usar strongly consistent reads"
        ],
        correct: [1],
        explanation: "DAX fornece latência de microseconds para items em cache. Saldo é acessado frequentemente (alto cache hit ratio). Eventually consistent é perfeito para DAX. Sem mudança na aplicação.",
        topic: "database",
        domain: "performance"
    },
    {
        id: 'perf_046',
        question: "Uma aplicação precisa processar uploads de vídeo (transcoding) com SLA de 30 minutos. Volumes variam de 10 a 1000 vídeos/hora. Como escalar de forma custo-eficiente?",
        options: [
            "EC2 Auto Scaling com instâncias fixas",
            "SQS queue + ECS Fargate Spot tasks com auto-scaling baseado em queue depth",
            "Lambda com 15 min timeout",
            "MediaConvert apenas"
        ],
        correct: [1],
        explanation: "SQS bufferiza uploads. Fargate Spot escala tasks baseado em ApproximateNumberOfMessages. Sem capacity ociosa em baixa demanda. Spot reduz custo em 70%. Tasks terminam após processar.",
        topic: "compute",
        domain: "performance"
    },
    {
        id: 'perf_047',
        question: "Uma aplicação de recommendation engine precisa computar similaridade entre 1 milhão de items em batch diário. Resultado deve estar disponível para queries em < 10ms. Qual arquitetura?",
        options: [
            "Lambda para computação + DynamoDB para resultados",
            "EMR/Glue para batch computation → resultados em ElastiCache Redis (sorted sets) para serving",
            "SageMaker para tudo",
            "Redshift para computation e serving"
        ],
        correct: [1],
        explanation: "EMR/Glue computa similaridades em batch (custo-eficiente para 1M items). Redis sorted sets servem top-N recommendations em < 1ms. Separação de compute (batch) e serving (real-time).",
        topic: "architecture",
        domain: "performance"
    },
    {
        id: 'perf_048',
        question: "Uma aplicação tem API que retorna dados agregados de 3 tabelas DynamoDB. Cada query consome 50 RCU. Volume: 5000 requests/segundo. Como reduzir custo e latência?",
        options: [
            "Aumentar RCU para 250.000",
            "Materializar agregações em tabela separada via DynamoDB Streams + Lambda + cache em DAX",
            "Usar Scan com parallel segments",
            "Migrar para Aurora"
        ],
        correct: [1],
        explanation: "Pre-computar agregações (materialized view pattern) via Streams reduz query de 50 RCU para 1 RCU (single item read). DAX adiciona cache layer. 250K RCU → ~5K RCU + DAX.",
        topic: "database",
        domain: "performance"
    },
    {
        id: 'perf_049',
        question: "Uma aplicação de log analytics ingere 10TB/dia de logs. Precisa de busca full-text nos últimos 7 dias e archive para compliance (2 anos). Qual arquitetura custo-eficiente?",
        options: [
            "OpenSearch para tudo (2 anos)",
            "Kinesis Firehose → OpenSearch (hot, 7 dias) + S3 (warm/cold, 2 anos) com lifecycle policies",
            "CloudWatch Logs para tudo",
            "Splunk on EC2"
        ],
        correct: [1],
        explanation: "Firehose ingere e entrega para múltiplos destinos. OpenSearch para busca ativa (7 dias, depois delete). S3 para archive barato (Glacier após 30 dias). Custo otimizado por tier.",
        topic: "analytics",
        domain: "performance"
    },
    {
        id: 'perf_050',
        question: "Uma aplicação precisa de network throughput de 100 Gbps entre instâncias EC2 para transferência de dados em cluster de big data. Qual configuração?",
        options: [
            "Enhanced Networking com ENA",
            "Instâncias com 100 Gbps network (c5n.18xlarge/p4d) + Placement Group + Jumbo Frames",
            "Múltiplas ENIs por instância",
            "Direct Connect"
        ],
        correct: [1],
        explanation: "c5n.18xlarge oferece 100 Gbps network. Placement Group garante proximidade física. Jumbo Frames (9001 MTU) reduz overhead de pacotes. Combinados: throughput máximo entre instâncias.",
        topic: "networking",
        domain: "performance"
    },
    {
        id: 'perf_051',
        question: "Uma aplicação serverless tem Step Functions workflow que chama 5 Lambda functions sequencialmente. Latência total: 2.5 segundos (500ms cada). Como reduzir para < 1 segundo?",
        options: [
            "Aumentar memória de todas as Lambdas",
            "Usar Parallel state para funções independentes + Express Workflow para menor overhead",
            "Combinar em uma única Lambda",
            "Usar Standard Workflow com async"
        ],
        correct: [1],
        explanation: "Parallel state executa branches simultaneamente (latência = max, não soma). Express Workflows têm menor overhead de state transitions (~ms vs ~50ms). Se 3 de 5 são independentes: ~1s total.",
        topic: "serverless",
        domain: "performance"
    },
    {
        id: 'perf_052',
        question: "Uma aplicação de marketplace precisa de busca com facets (filtros por categoria, preço, rating) em 20 milhões de produtos com latência < 100ms. Qual solução?",
        options: [
            "DynamoDB com FilterExpression",
            "Amazon OpenSearch com aggregations para facets + index aliases para zero-downtime reindex",
            "RDS com múltiplos índices",
            "Athena para queries"
        ],
        correct: [1],
        explanation: "OpenSearch aggregations computam facets (contagem por categoria, range de preço) em ms. Index aliases permitem reindexar sem downtime. DynamoDB FilterExpression não computa aggregations.",
        topic: "search",
        domain: "performance"
    },
    {
        id: 'perf_053',
        question: "Uma aplicação precisa servir conteúdo dinâmico (HTML personalizado por usuário) com latência < 50ms globalmente. Conteúdo muda a cada request. Qual abordagem?",
        options: [
            "CloudFront com TTL = 0 (pass-through)",
            "CloudFront com Lambda@Edge (viewer-request) para personalização no edge",
            "Multi-region EC2 deployment",
            "API Gateway com regional endpoints"
        ],
        correct: [1],
        explanation: "Lambda@Edge no viewer-request personaliza conteúdo no edge location mais próximo do usuário. Sem round-trip ao origin. Latência = edge processing (~ms) + cache de base template.",
        topic: "cdn",
        domain: "performance"
    },
    {
        id: 'perf_054',
        question: "Uma aplicação de fraud detection precisa analisar transações em < 100ms usando modelo ML. Volume: 10.000 transações/segundo. Qual arquitetura de inferência?",
        options: [
            "SageMaker batch transform",
            "SageMaker Real-time endpoint com auto-scaling + model caching + multi-model endpoint",
            "Lambda com modelo embarcado",
            "EMR com Spark ML"
        ],
        correct: [1],
        explanation: "SageMaker real-time endpoint com auto-scaling ajusta capacity por demanda. Multi-model endpoint serve múltiplos modelos no mesmo endpoint. Latência de inferência: ~ms para modelos otimizados.",
        topic: "ml",
        domain: "performance"
    },
    {
        id: 'perf_055',
        question: "Uma aplicação usa Aurora PostgreSQL com queries que fazem JOIN de 5 tabelas grandes (100M+ rows cada). Queries levam 30 segundos. Como otimizar sem mudar o schema?",
        options: [
            "Adicionar mais read replicas",
            "Usar Aurora parallel query + otimizar work_mem + criar índices compostos para join conditions",
            "Migrar para DynamoDB",
            "Usar query hints"
        ],
        correct: [1],
        explanation: "Aurora Parallel Query distribui scan de tabelas grandes entre storage nodes (paralelismo massivo). work_mem adequado evita disk spill em sorts/joins. Índices compostos aceleram join lookups.",
        topic: "database",
        domain: "performance"
    },
    {
        id: 'perf_056',
        question: "Uma aplicação precisa de cache distribuído com 500GB de dados, latência < 500 microseconds, e suporte a data structures (sorted sets, hashes). Qual configuração?",
        options: [
            "ElastiCache Memcached com múltiplos nodes",
            "ElastiCache Redis cluster mode enabled com múltiplos shards + r6g instances (Graviton)",
            "DynamoDB com DAX",
            "ElastiCache Redis single node grande"
        ],
        correct: [1],
        explanation: "Redis cluster mode distribui 500GB entre shards (cada shard até ~100GB). Suporta data structures nativamente. r6g (Graviton) oferece melhor price-performance. Memcached não suporta data structures.",
        topic: "caching",
        domain: "performance"
    }
];

performanceQuestions.push(...performanceQuestions3);
