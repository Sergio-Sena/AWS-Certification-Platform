// SAA-C03 Domain 4: Cost-Optimized Architectures (36 questões - 18%)
// Tópicos: EC2 pricing, S3 storage classes, Reserved/Spot/Savings Plans, right-sizing, serverless, data transfer

const costQuestions = [
    {
        id: 'cost_001',
        question: "Uma empresa tem 50 instâncias EC2 m5.xlarge rodando 24/7 para produção (workload estável há 2 anos). Pagam On-Demand. Como reduzir custos em até 72%?",
        options: [
            "Compute Savings Plans (3 anos, All Upfront) para a baseline + On-Demand para picos",
            "Migrar para Spot Instances",
            "Reserved Instances Standard (1 ano, No Upfront)",
            "Desligar instâncias à noite"
        ],
        correct: [0],
        explanation: "✅ Compute Savings Plans (3 anos, All Upfront) oferece até 72% desconto. Flexível entre instance families/regions/OS. Baseline estável de 2 anos justifica commitment longo. Spot não é adequado para produção 24/7.",
        topic: "compute",
        domain: "cost"
    },
    {
        id: 'cost_002',
        question: "Uma aplicação armazena 100TB de logs em S3 Standard. Análise mostra: 5% acessados na primeira semana, 1% no primeiro mês, resto nunca mais. Como otimizar custos de storage?",
        options: [
            "Manter tudo em Standard",
            "Deletar logs após 30 dias",
            "S3 Intelligent-Tiering para dados recentes + lifecycle policy: IA após 30 dias → Glacier Instant após 90 dias → Glacier Deep Archive após 180 dias",
            "Comprimir todos os arquivos"
        ],
        correct: [2],
        explanation: "✅ Lifecycle policies movem dados automaticamente para classes mais baratas. Intelligent-Tiering para acesso imprevisível. Glacier Deep Archive: $1/TB/mês (vs $23/TB Standard). Economia de ~95% para dados antigos.",
        topic: "storage",
        domain: "cost"
    },
    {
        id: 'cost_003',
        question: "Uma aplicação de machine learning treina modelos em GPU instances (p3.8xlarge) por 8 horas/dia, 5 dias/semana. Jobs são tolerantes a interrupção (checkpoint a cada 30min). Como reduzir custo?",
        options: [
            "Reserved Instances para p3.8xlarge",
            "Usar instâncias menores por mais tempo",
            "On-Demand apenas durante horário comercial",
            "Spot Instances com checkpointing em S3 + Spot Fleet diversificado (múltiplos instance types/AZs)",
        ],
        correct: [3],
        explanation: "✅ Spot oferece até 90% desconto para GPU instances. Checkpointing permite retomar após interrupção. Fleet diversificado reduz chance de interrupção. Economia: ~$50k/ano vs On-Demand para este workload.",
        topic: "compute",
        domain: "cost"
    },
    {
        id: 'cost_004',
        question: "Uma empresa tem ambientes de desenvolvimento (20 instâncias) que rodam 24/7 mas são usados apenas 10h/dia (8h-18h). Como reduzir custos sem impactar desenvolvedores?",
        options: [
            "Usar instâncias menores",
            "EventBridge scheduled rule + Lambda para stop/start instâncias fora do horário comercial",
            "Migrar para Spot",
            "Usar Auto Scaling com min=0"
        ],
        correct: [1],
        explanation: "✅ Stop/start automático economiza 58% (14h/24h paradas). EventBridge agenda, Lambda executa. Dados em EBS persistem. Desenvolvedores encontram ambiente pronto às 8h. Simples e eficaz.",
        topic: "automation",
        domain: "cost"
    },
    {
        id: 'cost_005',
        question: "Uma aplicação tem API com tráfego variável: 100 requests/segundo durante o dia, 2 requests/segundo à noite. Atualmente usa 10 instâncias EC2 24/7. Como otimizar?",
        options: [
            "Migrar para API Gateway + Lambda (pay-per-request, zero custo quando idle)",
            "Auto Scaling com min=10",
            "Reduzir para 5 instâncias",
            "Usar Spot Instances"
        ],
        correct: [0],
        explanation: "✅ Serverless (API Gateway + Lambda) cobra apenas por request executado. À noite com 2 req/s, custo é mínimo. Sem instâncias ociosas. Para tráfego variável com períodos idle, serverless é mais econômico.",
        topic: "serverless",
        domain: "cost"
    },
    {
        id: 'cost_006',
        question: "Uma empresa transfere 50TB/mês de dados entre us-east-1 e eu-west-1 para replicação. Data transfer costs são $4,500/mês. Como reduzir?",
        options: [
            "Usar VPN entre regiões",
            "Mover tudo para uma região",
            "Comprimir dados antes de transferir + usar S3 replication com Replication Time Control apenas para dados críticos",
            "Usar CloudFront para transferência"
        ],
        correct: [2],
        explanation: "✅ Compressão reduz volume transferido (ex: 70% compression = 15TB ao invés de 50TB). Replicar apenas dados críticos (não tudo). Combinados: redução de 60-80% no data transfer cost.",
        topic: "networking",
        domain: "cost"
    },
    {
        id: 'cost_007',
        question: "Uma empresa usa RDS db.r5.4xlarge (Multi-AZ) para produção. CloudWatch mostra CPU média de 15% e memória 30%. Como right-size sem risco?",
        options: [
            "Mudar para db.r5.xlarge imediatamente",
            "Migrar para Aurora Serverless",
            "Mudar para Single-AZ",
            "Usar AWS Compute Optimizer para recomendação + testar db.r5.2xlarge em staging + monitorar 2 semanas antes de aplicar em prod",
        ],
        correct: [3],
        explanation: "✅ Compute Optimizer analisa métricas históricas e recomenda tamanho ideal. Testar em staging valida performance. Monitorar 2 semanas em prod garante que picos são cobertos. Redução segura de ~50%.",
        topic: "rightsizing",
        domain: "cost"
    },
    {
        id: 'cost_008',
        question: "Uma aplicação usa NAT Gateway para 100 instâncias em subnet privada acessarem internet. Custo do NAT Gateway é $500/mês (processamento + data). Como reduzir?",
        options: [
            "Usar NAT Instance (mais barato)",
            "VPC Gateway Endpoints para S3/DynamoDB (gratuitos) + Interface Endpoints para serviços AWS frequentes + revisar se instâncias realmente precisam de internet",
            "Remover NAT Gateway",
            "Usar um NAT Gateway por AZ"
        ],
        correct: [1],
        explanation: "✅ Gateway Endpoints (S3, DynamoDB) são gratuitos — eliminam tráfego pelo NAT. Interface Endpoints para outros serviços AWS evitam NAT. Muitas vezes 80%+ do tráfego NAT é para serviços AWS, não internet.",
        topic: "networking",
        domain: "cost"
    },
    {
        id: 'cost_009',
        question: "Uma empresa tem 200TB em EBS gp3 volumes. Análise mostra que 150TB são snapshots antigos (> 1 ano) mantidos para compliance. Como reduzir custo de snapshots?",
        options: [
            "EBS Snapshots Archive para snapshots > 90 dias (75% mais barato) + lifecycle policy com DLM",
            "Deletar snapshots antigos",
            "Mover para S3",
            "Comprimir snapshots"
        ],
        correct: [0],
        explanation: "✅ Snapshots Archive custa 75% menos que standard ($0.0125 vs $0.05/GB-month). DLM automatiza archival após 90 dias. Restore leva 24-72h (aceitável para compliance). Economia: ~$5,600/mês para 150TB.",
        topic: "storage",
        domain: "cost"
    },
    {
        id: 'cost_010',
        question: "Uma aplicação usa DynamoDB com provisioned capacity: 10.000 RCU e 5.000 WCU 24/7. Tráfego real varia: pico de 8.000 RCU por 2 horas, resto do dia < 1.000 RCU. Como otimizar?",
        options: [
            "Manter provisioned com valores atuais",
            "Auto-scaling com target 70%",
            "Mudar para on-demand mode (paga apenas pelo consumo real, sem over-provisioning)",
            "Reduzir para 1.000 RCU fixo"
        ],
        correct: [2],
        explanation: "✅ On-demand é mais barato quando utilização média é < 18% da capacity provisionada. Aqui: média ~1.500 RCU vs 10.000 provisionados (15% utilização). On-demand elimina desperdício de 85% da capacity.",
        topic: "database",
        domain: "cost"
    },
    {
        id: 'cost_011',
        question: "Uma empresa paga $3,000/mês em CloudWatch Logs (ingestão + storage). Logs são usados para troubleshooting ocasional. Como reduzir sem perder capacidade de debug?",
        options: [
            "Desabilitar logging",
            "Usar log sampling (1 em 10)",
            "Reduzir log level para ERROR apenas",
            "CloudWatch Logs com retention policy curta (7 dias) + export para S3 (lifecycle → Glacier) para retenção longa",
        ],
        correct: [3],
        explanation: "✅ CloudWatch Logs storage é caro ($0.03/GB/mês). S3 Standard é $0.023, Glacier $0.004. Export automático para S3 após 7 dias reduz custo em 85%+ mantendo logs acessíveis para compliance.",
        topic: "monitoring",
        domain: "cost"
    },
    {
        id: 'cost_012',
        question: "Uma empresa tem 3 contas AWS sem visibilidade consolidada de custos. Cada equipe gerencia seu próprio billing. Como implementar governança de custos?",
        options: [
            "Verificar cada conta separadamente",
            "AWS Organizations com consolidated billing + Cost Explorer + AWS Budgets com alertas + tag policies para cost allocation",
            "Planilha compartilhada",
            "Trusted Advisor em cada conta"
        ],
        correct: [1],
        explanation: "✅ Consolidated billing: volume discounts compartilhados. Cost Explorer: visão cross-account. Budgets: alertas proativos. Tag policies: forçam tags para cost allocation. Governança completa.",
        topic: "governance",
        domain: "cost"
    },
    {
        id: 'cost_013',
        question: "Uma aplicação de batch processing roda jobs de 1-4 horas em instâncias c5.4xlarge. Jobs podem ser interrompidos e retomados. Volume: 100 jobs/dia. Como minimizar custo de compute?",
        options: [
            "Spot Instances com AWS Batch (managed compute environment) + retry strategy + checkpointing",
            "Reserved Instances",
            "On-Demand com Auto Scaling",
            "Lambda com 15min timeout encadeado"
        ],
        correct: [0],
        explanation: "✅ AWS Batch gerencia Spot automaticamente (provisioning, interruption handling, retry). Spot para batch = 60-90% economia. Checkpointing evita reprocessamento completo após interrupção.",
        topic: "compute",
        domain: "cost"
    },
    {
        id: 'cost_014',
        question: "Uma aplicação serve conteúdo estático (10TB) via CloudFront. 80% dos requests são para os mesmos 100 arquivos. Data transfer out é $2,000/mês. Como reduzir?",
        options: [
            "Remover CloudFront e servir direto do S3",
            "Usar S3 Transfer Acceleration",
            "Aumentar cache TTL para arquivos populares + habilitar compression (gzip/brotli) + usar CloudFront Price Class 100",
            "Mover para região mais barata"
        ],
        correct: [2],
        explanation: "✅ TTL alto = mais cache hits (menos origin fetches). Compression reduz tamanho em 60-80% (menos data transfer). Price Class 100 usa apenas edges mais baratos (NA/EU). Combinados: 40-60% economia.",
        topic: "cdn",
        domain: "cost"
    },
    {
        id: 'cost_015',
        question: "Uma empresa tem Aurora MySQL com db.r5.2xlarge writer + 2 read replicas. Tráfego noturno é 5% do diurno. Como reduzir custo sem afetar performance diurna?",
        options: [
            "Desligar replicas à noite",
            "Scheduled scaling do writer",
            "Usar instâncias menores fixas",
            "Migrar para Aurora Serverless v2 (escala automaticamente de 0.5 ACU a capacity necessária)",
        ],
        correct: [3],
        explanation: "✅ Aurora Serverless v2 escala de 0.5 ACU (mínimo) até o necessário. À noite: ~1 ACU ($0.12/h). De dia: escala para equivalente ao r5.2xlarge. Sem replicas separadas (auto-scaling inclui reads). Economia de 40-60%.",
        topic: "database",
        domain: "cost"
    },
    {
        id: 'cost_016',
        question: "Uma empresa usa Elastic IP addresses em 20 instâncias EC2. 8 dessas instâncias estão paradas (stopped) mas mantêm os EIPs. Qual é o impacto e como resolver?",
        options: [
            "EIPs são gratuitos sempre",
            "EIPs em instâncias stopped cobram $0.005/hora cada — liberar EIPs não usados + usar dynamic DNS ou ALB",
            "Manter para não perder os IPs",
            "Associar a instâncias running"
        ],
        correct: [1],
        explanation: "✅ EIPs não associados ou em instâncias stopped cobram ~$3.60/mês cada. 8 EIPs ociosos = $28.80/mês desperdiçado. Usar ALB (IP dinâmico) ou liberar EIPs e usar DNS para referência.",
        topic: "waste",
        domain: "cost"
    },
    {
        id: 'cost_017',
        question: "Uma aplicação processa 1 milhão de mensagens SQS/dia. Cada mensagem trigger uma Lambda que executa por 200ms com 256MB. Como estimar e otimizar custo?",
        options: [
            "Batch processing: configurar batch size = 10 na Lambda (10x menos invocations) + right-size memory com Power Tuning",
            "Não há como otimizar serverless",
            "Migrar para EC2",
            "Usar SNS ao invés de SQS"
        ],
        correct: [0],
        explanation: "✅ Batch size 10: 100K invocations ao invés de 1M (10x menos). Power Tuning encontra memory ideal (talvez 128MB basta). Combinados: redução de 50-70% no custo Lambda sem perder throughput.",
        topic: "serverless",
        domain: "cost"
    },
    {
        id: 'cost_018',
        question: "Uma empresa tem 500 instâncias EC2 em múltiplas contas. Precisa identificar instâncias over-provisioned e under-utilized automaticamente. Qual ferramenta?",
        options: [
            "CloudWatch dashboards manuais",
            "Trusted Advisor apenas",
            "AWS Compute Optimizer (analisa métricas históricas e recomenda instance types) + Cost Explorer rightsizing recommendations",
            "Custom scripts com boto3"
        ],
        correct: [2],
        explanation: "✅ Compute Optimizer usa ML em 14 dias de métricas para recomendar instance type ideal. Cost Explorer rightsizing mostra economia potencial. Cross-account via Organizations. Zero esforço manual.",
        topic: "rightsizing",
        domain: "cost"
    },
    {
        id: 'cost_019',
        question: "Uma aplicação usa S3 para hosting de website estático com 1TB de assets. Requests: 100 milhões GET/mês. Qual storage class minimiza custo total (storage + requests)?",
        options: [
            "S3 Standard (storage caro, requests baratos)",
            "S3 Intelligent-Tiering para tudo",
            "S3 One Zone-IA para tudo",
            "S3 Standard para assets frequentes + análise com S3 Storage Lens para identificar assets não acessados → mover para IA",
        ],
        correct: [3],
        explanation: "✅ Storage Lens identifica padrões de acesso reais. Assets frequentes em Standard (requests baratos). Assets raramente acessados em IA (storage 45% mais barato, requests mais caros mas poucos). Otimização baseada em dados.",
        topic: "storage",
        domain: "cost"
    },
    {
        id: 'cost_020',
        question: "Uma empresa quer implementar chargeback: cada equipe deve pagar pelos recursos AWS que consome. Como implementar visibilidade por equipe?",
        options: [
            "Contas separadas por equipe",
            "Cost allocation tags obrigatórias (Team, Project) + tag policies via Organizations + Cost Explorer filtrado por tag + AWS Budgets por tag",
            "Dividir fatura igualmente",
            "Planilha manual mensal"
        ],
        correct: [1],
        explanation: "✅ Cost allocation tags permitem filtrar custos por equipe/projeto. Tag policies forçam tagging. Cost Explorer mostra breakdown. Budgets alertam quando equipe excede orçamento. Chargeback automatizado.",
        topic: "governance",
        domain: "cost"
    }
];

window.costQuestions = costQuestions;


// Cost-Optimized Architectures - Lote 2 (questões 21-36)
const costQuestions2 = [
    {
        id: 'cost_021',
        question: "Uma empresa tem workload com baseline de 10 instâncias 24/7 e picos de até 50 instâncias por 3 horas/dia. Como combinar pricing models para máxima economia?",
        options: [
            "10 Savings Plans (baseline) + 40 Spot Instances (picos, com fallback para On-Demand se Spot indisponível)",
            "50 Reserved Instances",
            "50 On-Demand com Auto Scaling",
            "10 Reserved + 40 On-Demand"
        ],
        correct: [0],
        explanation: "✅ Savings Plans cobrem baseline (até 72% desconto). Spot para picos tolerantes a interrupção (até 90% desconto). On-Demand fallback garante capacity se Spot não disponível. Mix ideal.",
        topic: "compute",
        domain: "cost"
    },
    {
        id: 'cost_022',
        question: "Uma aplicação de data pipeline usa EMR cluster de 20 nodes rodando 24/7. Utilização real: 6 horas de processamento intenso, 18 horas idle. Como otimizar?",
        options: [
            "Manter cluster permanente com Reserved Instances",
            "Reduzir para 10 nodes permanentes",
            "EMR transient clusters (criar → processar → terminar) com Spot para task nodes + S3 para dados persistentes",
            "Usar Glue ao invés"
        ],
        correct: [2],
        explanation: "✅ Transient clusters: paga apenas 6h/dia (75% economia vs 24/7). Spot para task nodes (60-90% desconto). S3 persiste dados entre execuções. Sem custo de cluster idle por 18h.",
        topic: "bigdata",
        domain: "cost"
    },
    {
        id: 'cost_023',
        question: "Uma empresa migrou para AWS mas mantém mesma arquitetura on-premises (instâncias grandes, sempre ligadas). Bill mensal é $50k. Como identificar oportunidades de economia?",
        options: [
            "Negociar Enterprise Discount Program",
            "Usar apenas Free Tier",
            "Migrar para região mais barata",
            "AWS Well-Architected Review (Cost Optimization pillar) + Trusted Advisor + Cost Explorer + Compute Optimizer",
        ],
        correct: [3],
        explanation: "✅ Well-Architected Review identifica anti-patterns. Trusted Advisor encontra waste (idle resources, over-provisioned). Cost Explorer mostra trends. Compute Optimizer recomenda right-sizing. Abordagem holística.",
        topic: "governance",
        domain: "cost"
    },
    {
        id: 'cost_024',
        question: "Uma aplicação usa ALB + 4 instâncias EC2 para servir API com 50 requests/segundo. Cada request leva 50ms. Custo mensal: $400 (EC2) + $50 (ALB). Qual alternativa mais barata?",
        options: [
            "Reduzir para 2 instâncias",
            "API Gateway HTTP API + Lambda (50 req/s × 50ms × 2.6M seconds/mês = ~$15 compute + $3.50 API Gateway)",
            "Fargate com 1 task",
            "Lightsail"
        ],
        correct: [1],
        explanation: "✅ Para este volume (50 req/s, 50ms): Lambda ~$15/mês + API Gateway ~$3.50/mês = ~$18.50 total vs $450 com EC2+ALB. Serverless é 95% mais barato para workloads leves com baixa duration.",
        topic: "serverless",
        domain: "cost"
    },
    {
        id: 'cost_025',
        question: "Uma empresa tem 50TB em EFS Standard. 90% dos arquivos não são acessados há mais de 30 dias. Custo atual: $15,000/mês. Como reduzir?",
        options: [
            "Habilitar EFS Lifecycle Management (mover para EFS Infrequent Access após 30 dias) — custo IA é 92% menor",
            "Migrar para S3",
            "Comprimir arquivos",
            "Usar EBS ao invés"
        ],
        correct: [0],
        explanation: "✅ EFS IA: $0.016/GB vs Standard $0.30/GB (92% mais barato). Lifecycle Management move automaticamente. 90% de 50TB em IA: economia de ~$12,000/mês. Acesso transparente (sem mudança na app).",
        topic: "storage",
        domain: "cost"
    },
    {
        id: 'cost_026',
        question: "Uma empresa usa CloudFront para distribuir conteúdo globalmente. 70% do tráfego vem da América do Norte e Europa. Como reduzir custos de CDN?",
        options: [
            "Remover CloudFront",
            "Usar S3 website hosting direto",
            "Usar Price Class 100 (apenas NA + EU edges) + Origin Shield para reduzir origin fetches",
            "Reduzir TTL para menos cache"
        ],
        correct: [2],
        explanation: "✅ Price Class 100 usa apenas edges NA/EU (mais baratos). Se 70% do tráfego é dessas regiões, impacto mínimo em latência. Origin Shield consolida requests ao origin (menos data transfer). Economia de 20-30%.",
        topic: "cdn",
        domain: "cost"
    },
    {
        id: 'cost_027',
        question: "Uma aplicação usa RDS Multi-AZ para ambiente de staging. Staging é usado apenas durante horário comercial e não precisa de alta disponibilidade. Como reduzir custo?",
        options: [
            "Manter Multi-AZ para consistência com produção",
            "Usar Aurora Serverless",
            "Deletar staging",
            "Converter para Single-AZ + usar instância menor + stop/start automático fora do horário + snapshots para backup",
        ],
        correct: [3],
        explanation: "✅ Single-AZ: 50% menos custo (sem standby). Instância menor para staging. Stop/start: paga apenas 10h/dia (58% economia adicional). Snapshots garantem recovery. Total: ~75% economia vs atual.",
        topic: "database",
        domain: "cost"
    },
    {
        id: 'cost_028',
        question: "Uma empresa transfere 10TB/mês de dados de EC2 para internet (usuários finais). Data transfer out custa $900/mês. Como reduzir?",
        options: [
            "Comprimir dados no servidor",
            "CloudFront na frente do ALB (data transfer do CloudFront é mais barato que direto do EC2 + cache reduz origin transfer)",
            "Mover para região mais barata",
            "Usar VPN para usuários"
        ],
        correct: [1],
        explanation: "✅ CloudFront data transfer: $0.085/GB vs EC2 direto: $0.09/GB. Mais importante: cache hit ratio de 80% significa apenas 2TB saem do EC2 (não 10TB). Economia real: ~60-70% no data transfer.",
        topic: "networking",
        domain: "cost"
    },
    {
        id: 'cost_029',
        question: "Uma empresa tem 100 Lambda functions. Análise mostra que 30 functions têm memory configurada em 1024MB mas usam apenas 150MB. Como otimizar?",
        options: [
            "AWS Lambda Power Tuning (step functions) para encontrar memory ideal por function + aplicar recomendações",
            "Manter para evitar cold starts",
            "Reduzir todas para 128MB",
            "Usar Provisioned Concurrency"
        ],
        correct: [0],
        explanation: "✅ Power Tuning testa cada function com diferentes memory configs e mostra custo vs performance. Muitas vezes 256MB é suficiente (75% economia vs 1024MB) sem impacto em duration. Dados reais, não guess.",
        topic: "serverless",
        domain: "cost"
    },
    {
        id: 'cost_030',
        question: "Uma empresa quer prever custos AWS para os próximos 12 meses e receber alertas quando gastos excederem o planejado. Qual combinação de ferramentas?",
        options: [
            "Planilha com estimativas manuais",
            "AWS Pricing Calculator apenas",
            "Cost Explorer forecast (ML-based) + AWS Budgets (alertas em 80%, 100%, 120%) + Cost Anomaly Detection",
            "CloudWatch billing alarm apenas"
        ],
        correct: [2],
        explanation: "✅ Cost Explorer forecast usa ML em dados históricos para projetar 12 meses. Budgets alertam em thresholds configuráveis. Anomaly Detection identifica gastos inesperados automaticamente. Governança proativa.",
        topic: "governance",
        domain: "cost"
    },
    {
        id: 'cost_031',
        question: "Uma aplicação usa Kinesis Data Streams com 20 shards provisionados 24/7. Tráfego real usa 20 shards por 4 horas/dia e 2 shards no resto. Como otimizar?",
        options: [
            "Manter 20 shards para picos",
            "Usar SQS ao invés",
            "Reduzir para 5 shards fixos",
            "Migrar para Kinesis on-demand mode (escala automaticamente, paga por throughput real)",
        ],
        correct: [3],
        explanation: "✅ On-demand mode: paga por GB ingerido/consumido, sem shards provisionados. Para tráfego variável (pico 4h, idle 20h), on-demand é significativamente mais barato que 20 shards 24/7.",
        topic: "streaming",
        domain: "cost"
    },
    {
        id: 'cost_032',
        question: "Uma empresa tem múltiplos ambientes (dev, staging, prod) com recursos idênticos. Prod custa $10k/mês. Dev e staging juntos custam $15k/mês. Como reduzir ambientes não-prod?",
        options: [
            "Deletar dev e staging",
            "Dev: instâncias menores + Spot + stop/start. Staging: réplica reduzida de prod (50% capacity) + Single-AZ + shared resources entre equipes",
            "Usar mesma infra para dev e staging",
            "Apenas reduzir instance types"
        ],
        correct: [1],
        explanation: "✅ Dev não precisa de HA nem performance de prod: instâncias menores, Spot, stop/start = 80% economia. Staging: capacity reduzida, Single-AZ, compartilhado = 60% economia. Total: $15k → ~$4k.",
        topic: "environments",
        domain: "cost"
    },
    {
        id: 'cost_033',
        question: "Uma aplicação usa DynamoDB Global Tables em 3 regiões para latência global. Análise mostra que 95% dos writes vêm de us-east-1 e reads são distribuídos. Como reduzir custo de replicação?",
        options: [
            "Single-region writer (us-east-1) + DynamoDB Streams + replicação seletiva apenas de dados necessários para outras regiões",
            "Manter Global Tables (necessário para reads globais)",
            "Remover 2 regiões",
            "Usar ElastiCache Global Datastore"
        ],
        correct: [0],
        explanation: "✅ Global Tables replica TODOS os writes para TODAS as regiões (custo alto). Replicação seletiva via Streams replica apenas dados necessários para reads globais. Reduz replicated WCU em 60-80%.",
        topic: "database",
        domain: "cost"
    },
    {
        id: 'cost_034',
        question: "Uma empresa usa AWS Backup para 500 EC2 instances com retenção de 30 dias. Custo de snapshots: $8,000/mês. Como reduzir mantendo compliance?",
        options: [
            "Reduzir retenção para 7 dias",
            "Backup apenas semanal",
            "Excluir volumes temporários/cache do backup + usar incremental snapshots + EBS Snapshots Archive para retenção > 90 dias",
            "Usar AMIs ao invés de snapshots"
        ],
        correct: [2],
        explanation: "✅ Excluir volumes de cache/temp (não precisam backup). Incrementais já são padrão (paga apenas delta). Archive para retenção longa (75% mais barato). Combinados: 40-60% economia mantendo compliance.",
        topic: "storage",
        domain: "cost"
    },
    {
        id: 'cost_035',
        question: "Uma empresa quer migrar banco Oracle on-premises (licença cara) para AWS. Workload é OLTP com 10.000 transactions/segundo. Qual opção elimina custo de licença?",
        options: [
            "RDS for Oracle com License Included",
            "RDS for Oracle BYOL",
            "EC2 com Oracle BYOL",
            "Migrar para Aurora PostgreSQL (compatível, sem licença) usando AWS SCT + DMS",
        ],
        correct: [3],
        explanation: "✅ Aurora PostgreSQL: sem custo de licença Oracle ($47k+/ano economizado). SCT converte schema. DMS migra dados com mínimo downtime. Aurora suporta 10K+ TPS facilmente. ROI em meses.",
        topic: "database",
        domain: "cost"
    },
    {
        id: 'cost_036',
        question: "Uma empresa gasta $2,000/mês em Elastic IPs, Load Balancers e NAT Gateways em ambientes de desenvolvimento que ficam idle nos finais de semana. Como automatizar economia?",
        options: [
            "Lembrar de desligar manualmente",
            "Infrastructure as Code (CloudFormation/Terraform) + pipeline que destrói ambiente sexta à noite e recria segunda de manhã",
            "Usar apenas IPs dinâmicos",
            "Consolidar em um único ambiente"
        ],
        correct: [1],
        explanation: "✅ IaC permite destruir e recriar ambientes em minutos. Sem recursos idle no weekend (48h/semana = 28% economia). ELBs, NATs, EIPs cobram por hora — destruir elimina custo completamente. Dados persistem em S3/RDS snapshots.",
        topic: "automation",
        domain: "cost"
    }
];

costQuestions.push(...costQuestions2);
