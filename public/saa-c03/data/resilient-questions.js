// SAA-C03 Domain 1: Resilient Architectures (60 questões - 30%)
// Tópicos: Multi-AZ, Multi-Region, Auto Scaling, ELB, Route 53, RDS, S3, DR strategies

const resilientQuestions = [
    {
        id: 'res_001',
        question: "Uma empresa tem uma aplicação web em EC2 com Auto Scaling Group em uma única AZ. Durante uma falha na AZ, a aplicação ficou indisponível por 45 minutos. Como redesenhar para minimizar downtime?",
        options: [
            "Configurar Auto Scaling Group em múltiplas AZs com Application Load Balancer",
            "Aumentar o número de instâncias na mesma AZ",
            "Usar instâncias maiores com Enhanced Networking",
            "Adicionar uma instância standby na mesma AZ"
        ],
        correct: [0],
        explanation: "✅ ASG multi-AZ distribui instâncias entre AZs. Se uma AZ falhar, o ALB roteia tráfego para instâncias saudáveis nas outras AZs automaticamente.",
        topic: "multi-az",
        domain: "resilient"
    },
    {
        id: 'res_002',
        question: "Uma aplicação crítica usa RDS MySQL Single-AZ. O CTO exige RTO < 5 minutos e RPO = 0. Qual solução atende esses requisitos com menor custo?",
        options: [
            "Snapshots automáticos a cada 5 minutos",
            "RDS com read replicas em outra AZ",
            "RDS Multi-AZ com failover automático",
            "Aurora Global Database"
        ],
        correct: [2],
        explanation: "✅ RDS Multi-AZ fornece failover automático em 1-2 minutos (RTO < 5min) com replicação síncrona (RPO = 0). Read replicas são assíncronas (RPO > 0).",
        topic: "rds",
        domain: "resilient"
    },
    {
        id: 'res_003',
        question: "Uma empresa global precisa de disaster recovery com RTO < 15 minutos para sua aplicação principal. O orçamento é limitado. Qual estratégia DR é mais adequada?",
        options: [
            "Backup & Restore (RTO: horas)",
            "Pilot Light com componentes core rodando na região DR",
            "Active-Active multi-region",
            "Warm Standby com ambiente reduzido na região DR",
        ],
        correct: [3],
        explanation: "✅ Warm Standby mantém ambiente reduzido rodando na região DR, permitindo scale-up rápido (RTO ~minutos). Pilot Light tem RTO maior (dezenas de minutos). Active-Active é mais caro.",
        topic: "dr",
        domain: "resilient"
    },
    {
        id: 'res_004',
        question: "Uma aplicação stateful em EC2 perde dados de sessão quando instâncias são terminadas pelo Auto Scaling. Como resolver mantendo elasticidade?",
        options: [
            "Desabilitar scale-in no Auto Scaling",
            "Externalizar sessões para ElastiCache Redis com Multi-AZ",
            "Usar sticky sessions no ALB",
            "Armazenar sessões em EBS volumes"
        ],
        correct: [1],
        explanation: "✅ ElastiCache Redis Multi-AZ externaliza sessões, permitindo que qualquer instância acesse os dados. Sticky sessions não resolvem terminação e EBS não é compartilhado.",
        topic: "elasticache",
        domain: "resilient"
    },
    {
        id: 'res_005',
        question: "Route 53 health checks detectam que o endpoint primário em us-east-1 está down. O failover para eu-west-1 não está acontecendo. Qual é a causa mais provável?",
        options: [
            "Failover routing policy não configurada — está usando Simple routing",
            "TTL do DNS muito alto",
            "Health check interval muito longo",
            "A região secundária não tem capacity"
        ],
        correct: [0],
        explanation: "✅ Simple routing não suporta failover. É necessário usar Failover routing policy com health checks associados ao record primário.",
        topic: "route53",
        domain: "resilient"
    },
    {
        id: 'res_006',
        question: "Uma aplicação processa pedidos via SQS. Algumas mensagens falham repetidamente e bloqueiam o processamento de novas mensagens. Como resolver?",
        options: [
            "Aumentar o visibility timeout para 12 horas",
            "Deletar mensagens com erro manualmente",
            "Configurar Dead Letter Queue com maxReceiveCount = 3",
            "Usar FIFO queue ao invés de Standard"
        ],
        correct: [2],
        explanation: "✅ DLQ com maxReceiveCount move mensagens problemáticas após N tentativas, desbloqueando a fila principal para processar novas mensagens.",
        topic: "sqs",
        domain: "resilient"
    },
    {
        id: 'res_007',
        question: "Uma empresa precisa replicar dados S3 para outra região para compliance e DR. Objetos existentes (500TB) também precisam ser replicados. Qual abordagem?",
        options: [
            "Habilitar Cross-Region Replication — replica tudo automaticamente",
            "Usar S3 Transfer Acceleration",
            "Copiar manualmente com aws s3 cp",
            "Habilitar CRR + usar S3 Batch Replication para objetos existentes",
        ],
        correct: [3],
        explanation: "✅ CRR só replica objetos novos após habilitação. S3 Batch Replication é necessário para replicar objetos existentes.",
        topic: "s3",
        domain: "resilient"
    },
    {
        id: 'res_008',
        question: "Um Auto Scaling Group tem min=2, desired=2, max=10. Durante um pico, as instâncias novas levam 5 minutos para passar no health check do ALB. Usuários recebem erros 503 nesse período. Como resolver?",
        options: [
            "Aumentar max capacity para 20",
            "Usar predictive scaling + warm pool com instâncias pre-initialized",
            "Reduzir health check interval para 5 segundos",
            "Usar instâncias maiores"
        ],
        correct: [1],
        explanation: "✅ Warm pool mantém instâncias pre-initialized prontas para uso imediato. Predictive scaling antecipa picos baseado em padrões históricos.",
        topic: "autoscaling",
        domain: "resilient"
    },
    {
        id: 'res_009',
        question: "Uma aplicação usa Aurora MySQL. O requisito é RPO = 0 e RTO < 1 minuto mesmo em caso de falha regional completa. Qual solução?",
        options: [
            "Aurora Global Database com managed failover",
            "Aurora Multi-AZ com read replicas",
            "RDS Multi-AZ com cross-region read replica",
            "Aurora Serverless v2"
        ],
        correct: [0],
        explanation: "✅ Aurora Global Database replica dados com lag < 1 segundo entre regiões e managed failover promove região secundária em < 1 minuto. RPO tipicamente < 1s.",
        topic: "aurora",
        domain: "resilient"
    },
    {
        id: 'res_010',
        question: "Uma aplicação serverless (API Gateway + Lambda + DynamoDB) precisa funcionar em caso de falha regional. Qual arquitetura multi-region é mais adequada?",
        options: [
            "Deploy manual na região secundária quando necessário",
            "Replicar apenas DynamoDB e usar Lambda@Edge",
            "DynamoDB Global Tables + Lambda em ambas regiões + Route 53 failover",
            "S3 Cross-Region Replication com static website"
        ],
        correct: [2],
        explanation: "✅ DynamoDB Global Tables replica dados automaticamente. Lambda deploy em ambas regiões com Route 53 failover routing fornece DR completo para serverless.",
        topic: "serverless-dr",
        domain: "resilient"
    },
    {
        id: 'res_011',
        question: "Um ELB Application Load Balancer mostra targets unhealthy, mas a aplicação responde normalmente quando acessada diretamente. Qual é a causa mais provável?",
        options: [
            "Security Group do ALB não permite tráfego de saída",
            "O ALB está em uma AZ diferente",
            "A instância está em uma subnet privada",
            "Health check path retorna HTTP 404 ou o Security Group da instância não permite tráfego do ALB",
        ],
        correct: [3],
        explanation: "✅ Causas comuns: health check path incorreto (404), ou Security Group da instância não permite inbound do ALB. O SG da instância deve permitir tráfego do SG do ALB.",
        topic: "elb",
        domain: "resilient"
    },
    {
        id: 'res_012',
        question: "Uma empresa tem aplicação em 3 AZs com Auto Scaling. Após uma AZ failure, o ASG lança instâncias nas 2 AZs restantes mas atinge o limite de capacity da conta. Como prevenir?",
        options: [
            "Aumentar max capacity do ASG",
            "Solicitar aumento de EC2 service quota e configurar AZ rebalancing",
            "Usar instâncias menores",
            "Reduzir min capacity"
        ],
        correct: [1],
        explanation: "✅ Service quotas limitam instâncias por AZ/região. Solicitar aumento preventivo e AZ rebalancing garante distribuição adequada após falha.",
        topic: "autoscaling",
        domain: "resilient"
    },
    {
        id: 'res_013',
        question: "Uma aplicação de e-commerce precisa manter pedidos em processamento mesmo durante deploys. Qual padrão arquitetural garante zero perda de mensagens?",
        options: [
            "SQS queue com Lambda consumer + DLQ + connection draining no ALB",
            "Processar pedidos sincronamente via API",
            "Armazenar pedidos em memória da instância",
            "Usar database polling"
        ],
        correct: [0],
        explanation: "✅ SQS persiste mensagens independente do consumer. Connection draining permite que instâncias terminem requests em andamento. DLQ captura falhas.",
        topic: "sqs",
        domain: "resilient"
    },
    {
        id: 'res_014',
        question: "Uma aplicação usa EFS para storage compartilhado entre instâncias EC2. Performance degrada durante picos de I/O. Qual solução mantém resiliência e melhora performance?",
        options: [
            "Migrar para EBS io2 por instância",
            "Adicionar mais instâncias EC2",
            "Usar EFS com Provisioned Throughput mode ou migrar para FSx for Lustre",
            "Usar S3 como storage principal"
        ],
        correct: [2],
        explanation: "✅ EFS Provisioned Throughput garante throughput consistente. FSx for Lustre oferece alta performance para workloads intensivos mantendo acesso compartilhado.",
        topic: "storage",
        domain: "resilient"
    },
    {
        id: 'res_015',
        question: "Uma empresa quer implementar blue-green deployment para sua aplicação em EC2 atrás de ALB. Como fazer o switch com zero downtime?",
        options: [
            "Parar instâncias blue e iniciar green",
            "Deploy in-place com rolling update",
            "Usar DNS para apontar para novo IP",
            "Criar novo target group (green), testar, e alterar listener rules do ALB",
        ],
        correct: [3],
        explanation: "✅ ALB listener rules permitem switch instantâneo entre target groups (blue→green). Se green falhar, reverter a rule imediatamente.",
        topic: "deployment",
        domain: "resilient"
    },
    {
        id: 'res_016',
        question: "DynamoDB table com on-demand capacity está retornando ThrottlingException durante picos súbitos. A tabela foi criada há 30 minutos. Qual é a causa?",
        options: [
            "On-demand não suporta picos",
            "Tabelas novas em on-demand têm limite inicial que escala gradualmente",
            "Partition key com hot partition",
            "DynamoDB está em manutenção"
        ],
        correct: [1],
        explanation: "✅ Tabelas on-demand novas começam com capacity limitada e escalam automaticamente. Para picos imediatos em tabelas novas, usar provisioned com auto-scaling ou pre-warm.",
        topic: "dynamodb",
        domain: "resilient"
    },
    {
        id: 'res_017',
        question: "Uma aplicação multi-tier tem web servers, app servers e database. O arquiteto quer garantir que falha em uma camada não derrube as outras. Qual padrão aplicar?",
        options: [
            "Desacoplamento com SQS entre camadas + circuit breakers",
            "Deploy tudo na mesma instância",
            "Usar apenas um load balancer na frente",
            "Aumentar timeout entre camadas"
        ],
        correct: [0],
        explanation: "✅ SQS desacopla camadas (se app server cair, mensagens ficam na fila). Circuit breakers evitam cascading failures quando uma camada está degradada.",
        topic: "decoupling",
        domain: "resilient"
    },
    {
        id: 'res_018',
        question: "Uma empresa precisa de backup automatizado para múltiplos serviços (EC2, RDS, EFS, DynamoDB) com retenção de 30 dias e cópia cross-region. Qual solução centralizada?",
        options: [
            "Scripts customizados com Lambda para cada serviço",
            "Snapshots manuais agendados via CloudWatch Events",
            "AWS Backup com backup plan, vault e cross-region copy rule",
            "Cada equipe gerencia seus próprios backups"
        ],
        correct: [2],
        explanation: "✅ AWS Backup centraliza backup de múltiplos serviços com policies, retenção, cross-region copy e compliance reporting em um único serviço.",
        topic: "backup",
        domain: "resilient"
    },
    {
        id: 'res_019',
        question: "Uma aplicação usa CloudFront com origin em ALB. O ALB está em us-east-1. Se us-east-1 ficar indisponível, como manter o site online?",
        options: [
            "CloudFront cache serve conteúdo estático indefinidamente",
            "Replicar CloudFront distribution em outra região",
            "Usar Route 53 para failover do CloudFront",
            "Configurar CloudFront Origin Failover com origin group (primário us-east-1, secundário eu-west-1)",
        ],
        correct: [3],
        explanation: "✅ CloudFront Origin Groups permitem failover automático para origin secundário quando o primário retorna 5xx ou timeout. Transparente para o usuário.",
        topic: "cloudfront",
        domain: "resilient"
    },
    {
        id: 'res_020',
        question: "Uma aplicação processa eventos com Lambda via Kinesis Data Streams. Alguns records causam erro e a Lambda fica presa reprocessando o mesmo batch. Como resolver sem perder dados?",
        options: [
            "Aumentar timeout da Lambda",
            "Configurar bisect batch on error + maximum retry attempts + on-failure destination",
            "Ignorar erros com try/catch",
            "Usar Kinesis Firehose ao invés"
        ],
        correct: [1],
        explanation: "✅ Bisect batch divide o batch para isolar o record problemático. Maximum retry limita tentativas. On-failure destination (SQS/SNS) captura records com falha para análise.",
        topic: "kinesis",
        domain: "resilient"
    }
];

window.resilientQuestions = resilientQuestions;


// Resilient Architectures - Lote 2 (questões 21-40)
const resilientQuestions2 = [
    {
        id: 'res_021',
        question: "Uma aplicação em ECS Fargate precisa manter disponibilidade durante deploys. Atualmente, durante rolling updates, usuários recebem erros 502 por 30 segundos. Como resolver?",
        options: [
            "Configurar deregistration delay no target group + health check grace period no ECS service",
            "Aumentar o número de tasks",
            "Usar deployment type DAEMON",
            "Desabilitar rolling updates"
        ],
        correct: [0],
        explanation: "✅ Deregistration delay permite que tasks existentes terminem requests em andamento. Health check grace period dá tempo para novas tasks ficarem saudáveis antes de receber tráfego.",
        topic: "ecs",
        domain: "resilient"
    },
    {
        id: 'res_022',
        question: "Uma empresa tem VPN Site-to-Site como única conexão com a AWS. Se a VPN cair, toda comunicação é perdida. Como adicionar resiliência com custo controlado?",
        options: [
            "Usar internet pública como fallback",
            "Migrar para Direct Connect dedicado",
            "Adicionar segunda VPN connection ao mesmo Virtual Private Gateway",
            "Configurar VPN sobre Direct Connect"
        ],
        correct: [2],
        explanation: "✅ Segunda VPN connection ao mesmo VGW fornece redundância. Cada VPN já tem 2 tunnels. Com 2 connections = 4 tunnels de redundância, custo muito menor que Direct Connect.",
        topic: "networking",
        domain: "resilient"
    },
    {
        id: 'res_023',
        question: "Uma aplicação usa ElastiCache Redis cluster (cluster mode disabled) como cache principal. O nó primário falhou e a aplicação ficou sem cache por 2 minutos. Como melhorar?",
        options: [
            "Usar cluster mode enabled com múltiplos shards",
            "Usar Memcached ao invés",
            "Aumentar o tamanho do nó",
            "Habilitar Multi-AZ com automatic failover e pelo menos 1 read replica",
        ],
        correct: [3],
        explanation: "✅ Multi-AZ com automatic failover promove read replica para primário automaticamente em ~30 segundos. Sem replica, Redis precisa ser recriado do zero.",
        topic: "elasticache",
        domain: "resilient"
    },
    {
        id: 'res_024',
        question: "Uma aplicação processa uploads de vídeo. O processamento leva 20 minutos por arquivo. Se a instância EC2 falhar durante o processamento, o trabalho é perdido. Como tornar resiliente?",
        options: [
            "Usar instâncias maiores para processar mais rápido",
            "Usar SQS + checkpointing em S3 + Auto Scaling com spot instances",
            "Aumentar o EBS volume para mais IOPS",
            "Usar Lambda com timeout de 15 minutos"
        ],
        correct: [1],
        explanation: "✅ SQS garante que o job não é perdido (visibility timeout). Checkpointing em S3 permite retomar de onde parou. Spot instances reduzem custo com ASG repondo instâncias terminadas.",
        topic: "decoupling",
        domain: "resilient"
    },
    {
        id: 'res_025',
        question: "Uma empresa opera em us-east-1 e precisa de DR em us-west-2. O banco é Aurora PostgreSQL com 2TB. Qual estratégia fornece RTO < 5 minutos com menor custo?",
        options: [
            "Aurora Global Database",
            "Aurora cross-region read replica com promotion",
            "Snapshots cross-region a cada hora",
            "AWS DMS continuous replication"
        ],
        correct: [0],
        explanation: "✅ Aurora Global Database replica com lag < 1s e failover managed em < 5 min. Cross-region read replica requer promotion manual (RTO maior). Snapshots têm RPO de horas.",
        topic: "aurora",
        domain: "resilient"
    },
    {
        id: 'res_026',
        question: "Um API Gateway recebe 50.000 requests/segundo durante flash sales. Lambda functions atingem concurrency limit e retornam 429. Como garantir que pedidos não sejam perdidos?",
        options: [
            "Aumentar Lambda reserved concurrency para 50.000",
            "Usar API Gateway caching",
            "API Gateway → SQS queue → Lambda consumer com reserved concurrency controlada",
            "Adicionar mais regiões"
        ],
        correct: [2],
        explanation: "✅ SQS absorve picos (buffer). Lambda consome no ritmo que consegue sem throttling. Pedidos ficam na fila até serem processados — zero perda.",
        topic: "serverless",
        domain: "resilient"
    },
    {
        id: 'res_027',
        question: "Uma aplicação usa S3 para armazenar documentos críticos. Um desenvolvedor acidentalmente deletou um bucket inteiro. Como prevenir e recuperar?",
        options: [
            "Usar apenas IAM policies restritivas",
            "Usar Glacier Vault Lock",
            "Fazer backup diário para outro bucket",
            "Habilitar versioning + MFA Delete + S3 Object Lock + bucket policy deny delete",
        ],
        correct: [3],
        explanation: "✅ Versioning mantém versões anteriores. MFA Delete exige MFA para deletar. Object Lock previne deleção. Bucket policy com deny delete adiciona camada extra.",
        topic: "s3",
        domain: "resilient"
    },
    {
        id: 'res_028',
        question: "Uma aplicação multi-region usa Route 53 weighted routing (70% us-east-1, 30% eu-west-1). Quando us-east-1 falha, 70% dos usuários ficam sem serviço. Como corrigir?",
        options: [
            "Mudar para simple routing",
            "Associar health checks aos weighted records — Route 53 redistribui automaticamente",
            "Usar latency-based routing",
            "Configurar TTL = 0"
        ],
        correct: [1],
        explanation: "✅ Com health checks associados, Route 53 remove records unhealthy e redistribui o peso para records saudáveis automaticamente.",
        topic: "route53",
        domain: "resilient"
    },
    {
        id: 'res_029',
        question: "Uma empresa tem 50 microservices em EKS. Um serviço com memory leak causa cascading failures em serviços dependentes. Como isolar o impacto?",
        options: [
            "Implementar resource limits + liveness/readiness probes + circuit breakers (Istio/App Mesh)",
            "Aumentar memória de todos os pods",
            "Usar um único pod por serviço",
            "Desabilitar auto-scaling"
        ],
        correct: [0],
        explanation: "✅ Resource limits contêm o memory leak. Probes detectam e reiniciam pods unhealthy. Circuit breakers (service mesh) evitam que falhas se propaguem para dependentes.",
        topic: "containers",
        domain: "resilient"
    },
    {
        id: 'res_030',
        question: "Uma aplicação usa NLB com targets em 2 AZs. Cross-zone load balancing está desabilitado. AZ-a tem 2 instâncias e AZ-b tem 8 instâncias. Usuários na AZ-a reportam lentidão. Por quê?",
        options: [
            "NLB não suporta múltiplas AZs",
            "As instâncias em AZ-a são menores",
            "Sem cross-zone, cada AZ recebe 50% do tráfego — AZ-a com 2 instâncias fica sobrecarregada",
            "Health checks estão falhando"
        ],
        correct: [2],
        explanation: "✅ Sem cross-zone load balancing, tráfego é dividido igualmente entre AZs (50/50). AZ-a com 2 instâncias recebe 25% cada, enquanto AZ-b com 8 recebe 6.25% cada.",
        topic: "elb",
        domain: "resilient"
    },
    {
        id: 'res_031',
        question: "Uma aplicação precisa processar exatamente uma vez cada transação financeira, mesmo com retries. Qual combinação de serviços garante exactly-once processing?",
        options: [
            "SQS Standard + Lambda",
            "Kinesis + Lambda",
            "SNS + Lambda",
            "SQS FIFO + Lambda com idempotency (DynamoDB conditional writes)",
        ],
        correct: [3],
        explanation: "✅ SQS FIFO garante exactly-once delivery. Lambda idempotency com DynamoDB conditional writes garante que mesmo com retry, a transação é processada apenas uma vez.",
        topic: "messaging",
        domain: "resilient"
    },
    {
        id: 'res_032',
        question: "Uma empresa precisa migrar 100TB de dados para AWS com janela de 1 semana. A conexão internet é 1Gbps. Qual método garante entrega no prazo?",
        options: [
            "AWS DataSync pela internet",
            "AWS Snowball Edge (múltiplos devices em paralelo)",
            "S3 Transfer Acceleration",
            "Direct Connect dedicado"
        ],
        correct: [1],
        explanation: "✅ 1Gbps = ~10TB/semana (insuficiente para 100TB). Snowball Edge devices em paralelo transferem petabytes em dias. DataSync/Transfer Acceleration limitados pela bandwidth.",
        topic: "migration",
        domain: "resilient"
    },
    {
        id: 'res_033',
        question: "Uma aplicação stateless em ASG precisa de deployment com zero downtime e capacidade de rollback instantâneo. Qual estratégia de deployment usar?",
        options: [
            "Immutable deployment com novo ASG + swap no ALB target group",
            "Rolling update com 25% batch size",
            "In-place deployment",
            "All-at-once deployment"
        ],
        correct: [0],
        explanation: "✅ Immutable deployment cria novo ASG com nova versão. Após health checks passarem, swap no ALB. Rollback = apontar ALB de volta ao ASG antigo (instantâneo).",
        topic: "deployment",
        domain: "resilient"
    },
    {
        id: 'res_034',
        question: "Uma aplicação usa DynamoDB com provisioned capacity. Durante Black Friday, WCU é insuficiente e writes falham com ProvisionedThroughputExceededException. Como prevenir sem over-provisioning?",
        options: [
            "Mudar para on-demand permanentemente",
            "Provisionar 10x a capacity normal",
            "Usar auto-scaling com target utilization 70% + scheduled scaling para eventos conhecidos",
            "Usar DAX para absorver writes"
        ],
        correct: [2],
        explanation: "✅ Auto-scaling ajusta capacity automaticamente. Scheduled scaling pre-escala antes de eventos conhecidos (Black Friday). Evita custo de on-demand permanente ou over-provisioning.",
        topic: "dynamodb",
        domain: "resilient"
    },
    {
        id: 'res_035',
        question: "Uma aplicação em EC2 depende de um serviço externo (API de pagamento). O serviço externo fica intermitentemente indisponível, causando timeout e degradação. Como tornar a aplicação resiliente?",
        options: [
            "Aumentar timeout para 60 segundos",
            "Usar múltiplos provedores de pagamento simultaneamente",
            "Cachear todas as respostas indefinidamente",
            "Implementar circuit breaker + retry com exponential backoff + fallback response",
        ],
        correct: [3],
        explanation: "✅ Circuit breaker evita chamadas a serviço down. Retry com backoff tenta novamente sem sobrecarregar. Fallback response mantém UX (ex: 'pagamento será processado em breve').",
        topic: "patterns",
        domain: "resilient"
    },
    {
        id: 'res_036',
        question: "Uma empresa tem Direct Connect de 10Gbps como conexão principal com AWS. Qual é a melhor estratégia de backup para a conexão?",
        options: [
            "Segunda Direct Connect no mesmo location",
            "Direct Connect em location diferente + VPN como backup terciário",
            "VPN Site-to-Site apenas",
            "Internet pública"
        ],
        correct: [1],
        explanation: "✅ DX em location diferente protege contra falha do location físico. VPN como backup terciário fornece conectividade mesmo se ambos DX falharem (menor bandwidth mas funcional).",
        topic: "networking",
        domain: "resilient"
    },
    {
        id: 'res_037',
        question: "Uma aplicação usa Lambda com event source mapping para processar records de DynamoDB Streams. A Lambda está falhando e o stream está acumulando records (iterator age crescendo). Como resolver?",
        options: [
            "Configurar maximum retry attempts + bisect batch + on-failure destination + aumentar parallelization factor",
            "Aumentar o shard count",
            "Deletar e recriar o stream",
            "Usar Kinesis ao invés"
        ],
        correct: [0],
        explanation: "✅ Maximum retry limita tentativas. Bisect isola records problemáticos. On-failure destination captura falhas. Parallelization factor aumenta throughput de processamento.",
        topic: "dynamodb-streams",
        domain: "resilient"
    },
    {
        id: 'res_038',
        question: "Uma aplicação web tem picos previsíveis às 9h (início do expediente). Auto Scaling reage com 3-5 minutos de delay, causando lentidão. Como antecipar o scaling?",
        options: [
            "Manter capacity máxima 24/7",
            "Reduzir cooldown period para 30 segundos",
            "Scheduled scaling action para scale-out às 8:50 + predictive scaling",
            "Usar step scaling com thresholds baixos"
        ],
        correct: [2],
        explanation: "✅ Scheduled scaling pre-escala antes do pico conhecido. Predictive scaling usa ML para antecipar padrões. Ambos eliminam o delay reativo do auto-scaling.",
        topic: "autoscaling",
        domain: "resilient"
    },
    {
        id: 'res_039',
        question: "Uma empresa precisa garantir que dados em S3 não possam ser deletados ou modificados por 7 anos (compliance regulatória). Qual feature usar?",
        options: [
            "Bucket policy com deny delete",
            "Glacier Vault Lock",
            "Versioning habilitado",
            "S3 Object Lock em Compliance mode com retention period de 7 anos",
        ],
        correct: [3],
        explanation: "✅ S3 Object Lock Compliance mode impede que QUALQUER pessoa (incluindo root) delete ou modifique objetos durante o retention period. Atende requisitos regulatórios (SEC, FINRA).",
        topic: "s3",
        domain: "resilient"
    },
    {
        id: 'res_040',
        question: "Uma aplicação usa múltiplos microservices que se comunicam via HTTP síncrono. Quando um serviço downstream fica lento, todos os serviços upstream ficam lentos (cascading latency). Como resolver?",
        options: [
            "Aumentar timeout de todos os serviços",
            "Implementar comunicação assíncrona via EventBridge/SQS + timeouts agressivos + bulkhead pattern",
            "Usar instâncias maiores",
            "Adicionar cache em todos os serviços"
        ],
        correct: [1],
        explanation: "✅ Comunicação assíncrona desacopla serviços. Timeouts agressivos evitam espera longa. Bulkhead isola thread pools por dependência, evitando que um serviço lento esgote recursos.",
        topic: "patterns",
        domain: "resilient"
    }
];

resilientQuestions.push(...resilientQuestions2);


// Resilient Architectures - Lote 3 (questões 41-60)
const resilientQuestions3 = [
    {
        id: 'res_041',
        question: "Uma aplicação em EC2 usa EBS gp3 para dados críticos. A instância falhou e o volume ficou em estado 'error'. Como garantir recuperação rápida dos dados?",
        options: [
            "Usar EBS snapshots automáticos com Amazon Data Lifecycle Manager + Multi-Attach para io2",
            "Reattach o volume a outra instância",
            "Usar instance store para melhor performance",
            "Fazer backup manual diário"
        ],
        correct: [0],
        explanation: "✅ DLM automatiza snapshots com schedule e retenção. Snapshots permitem criar novo volume em qualquer AZ. Multi-Attach (io2) permite acesso simultâneo de múltiplas instâncias.",
        topic: "storage",
        domain: "resilient"
    },
    {
        id: 'res_042',
        question: "Uma aplicação global precisa servir conteúdo dinâmico com latência < 100ms para usuários em 5 continentes. Qual arquitetura?",
        options: [
            "Single region com CloudFront",
            "CloudFront com Lambda@Edge",
            "Multi-region deployment com Global Accelerator + regional ALBs",
            "Apenas aumentar instâncias na região principal"
        ],
        correct: [2],
        explanation: "✅ Global Accelerator usa a rede AWS global para rotear tráfego ao endpoint regional mais próximo. ALBs regionais processam requests localmente com baixa latência.",
        topic: "global",
        domain: "resilient"
    },
    {
        id: 'res_043',
        question: "Uma empresa usa AWS Organizations com 20 contas. Precisa garantir que todas as contas tenham backups habilitados e conformes. Como centralizar?",
        options: [
            "Configurar AWS Backup manualmente em cada conta",
            "Usar apenas snapshots manuais",
            "Scripts Lambda em cada conta",
            "AWS Backup com delegated administrator + backup policies via Organizations",
        ],
        correct: [3],
        explanation: "✅ AWS Backup com Organizations permite criar backup policies centralizadas que se aplicam automaticamente a todas as contas membros.",
        topic: "backup",
        domain: "resilient"
    },
    {
        id: 'res_044',
        question: "Uma aplicação usa Aurora MySQL com 5 read replicas. Durante failover, a aplicação continua tentando conectar ao endpoint antigo por 30 segundos. Como reduzir?",
        options: [
            "Usar IP fixo para o writer",
            "Usar cluster endpoint (writer) + configurar DNS TTL baixo + connection retry logic na aplicação",
            "Usar read replica endpoint para writes",
            "Implementar proxy customizado"
        ],
        correct: [1],
        explanation: "✅ Cluster endpoint atualiza automaticamente durante failover. DNS TTL baixo (5s) acelera propagação. Retry logic na aplicação reconecta rapidamente ao novo writer.",
        topic: "aurora",
        domain: "resilient"
    },
    {
        id: 'res_045',
        question: "Uma aplicação de IoT recebe 1 milhão de mensagens/segundo. Precisa processar todas sem perda, mesmo durante picos de 3x. Qual arquitetura?",
        options: [
            "IoT Core → Kinesis Data Streams (on-demand) → Lambda com enhanced fan-out",
            "API Gateway + Lambda diretamente",
            "SQS Standard queue + EC2 consumers",
            "SNS + múltiplos subscribers"
        ],
        correct: [0],
        explanation: "✅ Kinesis on-demand escala automaticamente para picos. Enhanced fan-out fornece throughput dedicado por consumer. IoT Core ingere milhões de mensagens/segundo nativamente.",
        topic: "streaming",
        domain: "resilient"
    },
    {
        id: 'res_046',
        question: "Uma empresa tem aplicação em us-east-1 com RDS PostgreSQL. Precisa de read-only access em eu-west-1 para equipe europeia com latência < 50ms. Qual solução?",
        options: [
            "VPN entre regiões para acessar RDS diretamente",
            "Replicar dados para S3 e usar Athena",
            "RDS cross-region read replica em eu-west-1",
            "Aurora Global Database"
        ],
        correct: [2],
        explanation: "✅ Cross-region read replica fornece acesso read-only local na Europa com latência baixa. Replicação assíncrona é aceitável para reads. Aurora Global seria over-engineering para apenas reads.",
        topic: "rds",
        domain: "resilient"
    },
    {
        id: 'res_047',
        question: "Uma aplicação usa Step Functions para orquestrar um workflow de 10 etapas. Se uma etapa intermediária falhar, todo o workflow reinicia do zero. Como implementar recuperação parcial?",
        options: [
            "Aumentar retry em cada etapa",
            "Usar SQS entre cada etapa",
            "Dividir em 10 Step Functions separadas",
            "Usar Step Functions com Catch + ResultPath para error handling + checkpoint state em DynamoDB",
        ],
        correct: [3],
        explanation: "✅ Catch com ResultPath permite tratar erros por etapa. Checkpoint em DynamoDB salva progresso, permitindo retomar do ponto de falha ao invés de reiniciar.",
        topic: "orchestration",
        domain: "resilient"
    },
    {
        id: 'res_048',
        question: "Uma aplicação web tem pico de 100.000 usuários simultâneos durante eventos ao vivo. O banco RDS atinge max_connections e novos usuários recebem erro. Como resolver?",
        options: [
            "Aumentar instance type do RDS",
            "RDS Proxy para connection pooling + read replicas + ElastiCache para queries frequentes",
            "Migrar para DynamoDB",
            "Usar múltiplos bancos RDS independentes"
        ],
        correct: [1],
        explanation: "✅ RDS Proxy gerencia connection pool (multiplexing). Read replicas distribuem reads. ElastiCache elimina queries repetitivas. Juntos, reduzem drasticamente conexões ao writer.",
        topic: "rds",
        domain: "resilient"
    },
    {
        id: 'res_049',
        question: "Uma empresa precisa garantir que EC2 instances em um ASG sejam distribuídas igualmente entre 3 AZs, mesmo após scale-in. Qual configuração?",
        options: [
            "Habilitar AZ rebalancing + usar allocation strategy 'lowest-price' com múltiplos instance types",
            "Configurar min capacity = 3",
            "Fixar desired capacity",
            "Usar placement groups"
        ],
        correct: [0],
        explanation: "✅ AZ rebalancing redistribui instâncias automaticamente entre AZs. Múltiplos instance types com lowest-price garante capacity mesmo se um tipo estiver indisponível em uma AZ.",
        topic: "autoscaling",
        domain: "resilient"
    },
    {
        id: 'res_050',
        question: "Uma aplicação usa SNS para notificar 5 microservices sobre novos pedidos. Se um subscriber falhar, as mensagens são perdidas. Como garantir entrega?",
        options: [
            "Aumentar retry do SNS",
            "Usar polling ao invés de push",
            "SNS → SQS queue por subscriber (fan-out pattern) com DLQ em cada queue",
            "Implementar retry na aplicação publisher"
        ],
        correct: [2],
        explanation: "✅ Fan-out pattern: SNS publica para SQS queues individuais por subscriber. Cada queue persiste mensagens independentemente. DLQ captura falhas por subscriber sem afetar outros.",
        topic: "messaging",
        domain: "resilient"
    },
    {
        id: 'res_051',
        question: "Uma aplicação precisa de DNS failover com detecção de falha em < 10 segundos. Route 53 health checks padrão têm intervalo de 30 segundos. Como acelerar?",
        options: [
            "Não é possível com Route 53",
            "Implementar DNS customizado",
            "Usar CloudWatch Alarms como health check",
            "Usar Fast health checks (intervalo 10s) + configurar health check com string matching + low TTL",
        ],
        correct: [3],
        explanation: "✅ Fast health checks (10s interval) com 1 failure threshold detectam falha em ~10s. String matching valida conteúdo real (não apenas HTTP 200). Low TTL acelera propagação.",
        topic: "route53",
        domain: "resilient"
    },
    {
        id: 'res_052',
        question: "Uma empresa opera banco de dados on-premises com 50TB. Precisa migrar para Aurora com downtime máximo de 1 hora. Qual estratégia?",
        options: [
            "mysqldump e restore (dias de downtime)",
            "AWS DMS com full load + CDC (Change Data Capture) para replicação contínua",
            "Snowball para transferir dados",
            "Aurora clone do banco on-premises"
        ],
        correct: [1],
        explanation: "✅ DMS full load migra dados iniciais enquanto aplicação roda. CDC replica mudanças em tempo real. Cutover final requer apenas minutos de downtime para switch.",
        topic: "migration",
        domain: "resilient"
    },
    {
        id: 'res_053',
        question: "Uma aplicação em Lambda processa arquivos S3. Ocasionalmente, o mesmo arquivo é processado 2 vezes (Lambda retry). Como garantir idempotência?",
        options: [
            "Usar DynamoDB conditional put com file key como idempotency token antes de processar",
            "Desabilitar retries na Lambda",
            "Verificar se arquivo já existe no destino",
            "Usar SQS FIFO como trigger"
        ],
        correct: [0],
        explanation: "✅ DynamoDB conditional put (attribute_not_exists) falha se o token já existe, garantindo que o processamento ocorra apenas uma vez mesmo com retries.",
        topic: "patterns",
        domain: "resilient"
    },
    {
        id: 'res_054',
        question: "Uma aplicação tem frontend em S3+CloudFront e backend em ALB+EC2. O certificado SSL do ALB expirou e o site ficou inacessível. Como prevenir?",
        options: [
            "Renovar manualmente antes de expirar",
            "Usar certificado self-signed",
            "Usar ACM (AWS Certificate Manager) com renovação automática + CloudWatch alarm para expiração",
            "Desabilitar HTTPS no ALB"
        ],
        correct: [2],
        explanation: "✅ ACM renova certificados automaticamente (para domínios validados por DNS). CloudWatch alarm em dias para expiração alerta caso renovação falhe.",
        topic: "security",
        domain: "resilient"
    },
    {
        id: 'res_055',
        question: "Uma aplicação usa API Gateway com Lambda integration. Durante picos, Lambda cold starts causam timeout no API Gateway (29s limit). Como resolver?",
        options: [
            "Aumentar Lambda memory",
            "Cachear todas as respostas",
            "Usar HTTP API ao invés de REST API",
            "Provisioned Concurrency para Lambda + API Gateway timeout adequado",
        ],
        correct: [3],
        explanation: "✅ Provisioned Concurrency elimina cold starts mantendo instâncias warm. API Gateway REST tem limite fixo de 29s, então eliminar cold start é essencial.",
        topic: "serverless",
        domain: "resilient"
    },
    {
        id: 'res_056',
        question: "Uma empresa precisa de storage compartilhado entre instâncias EC2 em múltiplas AZs com failover automático. Dados são arquivos de configuração (< 1GB). Qual serviço?",
        options: [
            "EBS Multi-Attach",
            "Amazon EFS com mount targets em cada AZ",
            "S3 com sync periódico",
            "Instance store replicado"
        ],
        correct: [1],
        explanation: "✅ EFS é NFS gerenciado, acessível de múltiplas AZs simultaneamente com failover automático. Mount targets em cada AZ garantem acesso local. EBS Multi-Attach é single-AZ (io2 apenas).",
        topic: "storage",
        domain: "resilient"
    },
    {
        id: 'res_057',
        question: "Uma aplicação usa EventBridge para integrar 15 microservices. Um evento crítico ('order.placed') precisa ser processado por todos os consumers sem falha. Como garantir?",
        options: [
            "EventBridge rule → SQS queue por consumer (com DLQ) + archive para replay de eventos perdidos",
            "Configurar retry policy no EventBridge",
            "Usar SNS ao invés",
            "Implementar polling por cada consumer"
        ],
        correct: [0],
        explanation: "✅ SQS por consumer persiste eventos independentemente. DLQ captura falhas. EventBridge Archive permite replay de eventos históricos para recovery.",
        topic: "event-driven",
        domain: "resilient"
    },
    {
        id: 'res_058',
        question: "Uma aplicação em EKS tem pods que consomem muita memória e são killed pelo OOM killer, causando indisponibilidade. Como tornar resiliente?",
        options: [
            "Remover memory limits",
            "Usar nodes maiores",
            "Configurar resource requests/limits + HPA baseado em memory + PodDisruptionBudget",
            "Desabilitar OOM killer"
        ],
        correct: [2],
        explanation: "✅ Resource limits contêm consumo. HPA escala pods antes de atingir limite. PodDisruptionBudget garante mínimo de pods disponíveis durante disruptions.",
        topic: "containers",
        domain: "resilient"
    },
    {
        id: 'res_059',
        question: "Uma empresa precisa de RPO = 0 para seu banco DynamoDB global. Atualmente usa Global Tables mas observa replication lag de 1-2 segundos. Como atingir RPO = 0?",
        options: [
            "DynamoDB Global Tables já garante RPO = 0",
            "Usar DAX para reduzir lag",
            "Aumentar WCU nas tabelas",
            "Não é possível RPO = 0 com Global Tables — usar strong consistency com single-region + Multi-AZ",
        ],
        correct: [3],
        explanation: "✅ Global Tables usa replicação assíncrona (eventual consistency) — RPO > 0 sempre. Para RPO = 0, usar single-region com Multi-AZ (replicação síncrona dentro da região).",
        topic: "dynamodb",
        domain: "resilient"
    },
    {
        id: 'res_060',
        question: "Uma aplicação crítica precisa de 99.99% de disponibilidade. Atualmente está em single-region com Multi-AZ. Qual mudança arquitetural é necessária?",
        options: [
            "Adicionar mais instâncias na mesma região",
            "Multi-region active-active com Route 53 health checks + data replication + automated failover",
            "Usar instâncias dedicated",
            "Adicionar mais AZs na mesma região"
        ],
        correct: [1],
        explanation: "✅ 99.99% requer tolerância a falha regional. Multi-region active-active com failover automático é necessário. Single-region Multi-AZ tipicamente atinge 99.95%.",
        topic: "high-availability",
        domain: "resilient"
    }
];

resilientQuestions.push(...resilientQuestions3);
