// DOP-C02 Domain 3: Resilient Cloud Solutions (34 questões - 15%)
// Tópicos: Multi-AZ/Multi-Region DR, Auto Scaling advanced, self-healing, chaos engineering (FIS), data replication, backup automation

const resilientDopQuestions = [
    {
        id: 'res_001',
        question: "Uma empresa precisa de RTO < 1 minuto e RPO = 0 para um banco de dados crítico em caso de falha regional. Qual estratégia de DR?",
        options: [
            "Multi-Region Active/Active com Aurora Global Database (RPO < 1s, failover < 1 min) + Route 53 health checks",
            "Backup & Restore (RTO horas)",
            "Pilot Light (RTO minutos)",
            "Warm Standby (RTO minutos)"
        ],
        correct: [0],
        explanation: "✅ Aurora Global Database: replicação storage-level cross-region (lag < 1s). Failover promove região secundária em < 1 min. Active/Active com Route 53 failover routing. Mais caro mas atende RTO/RPO agressivos.",
        topic: "dr-automation",
        domain: "resilient"
    },
    {
        id: 'res_002',
        question: "Uma equipe quer que instâncias EC2 em um ASG executem scripts de cleanup antes de serem terminadas durante scale-in. Como?",
        options: [
            "User-data script",
            "CloudWatch Alarm action",
            "Auto Scaling Lifecycle Hooks — pausa instância em 'Terminating:Wait' state, executa ação (via EventBridge/SNS), depois completa lifecycle action",
            "SSM Run Command manual"
        ],
        correct: [2],
        explanation: "✅ Lifecycle Hooks: intercepta launch/terminate. Terminating:Wait dá tempo para cleanup (drain connections, flush logs, deregister). Timeout configurável. complete-lifecycle-action para prosseguir. EventBridge trigger Lambda/SSM.",
        topic: "autoscaling",
        domain: "resilient"
    },
    {
        id: 'res_003',
        question: "Uma empresa quer testar a resiliência de sua aplicação simulando falhas controladas (CPU stress, network latency, AZ failure). Qual serviço AWS?",
        options: [
            "Terminar instâncias manualmente",
            "GameDay manual",
            "Load testing com JMeter",
            "AWS Fault Injection Simulator (FIS) — chaos engineering gerenciado com experiment templates, stop conditions e rollback automático",
        ],
        correct: [3],
        explanation: "✅ FIS: chaos engineering as a service. Templates definem ações (stop instances, inject latency, throttle API). Stop conditions param experimento se alarme dispara. Targets por tag/%. Integra com CloudWatch para observabilidade.",
        topic: "chaos-engineering",
        domain: "resilient"
    },
    {
        id: 'res_004',
        question: "Uma aplicação precisa fazer failover automático de uma região primária para secundária quando health checks falham. Como orquestrar?",
        options: [
            "Manual DNS update",
            "Route 53 Health Checks + Failover Routing Policy — detecta falha no endpoint primário e redireciona tráfego para região secundária automaticamente",
            "CloudFront origin failover apenas",
            "Global Accelerator apenas"
        ],
        correct: [1],
        explanation: "✅ Route 53 Failover: health check monitora endpoint primário. Se unhealthy, DNS resolve para registro secundário. TTL baixo para failover rápido. Pode combinar com CloudFront/Global Accelerator para failover mais rápido.",
        topic: "dr-automation",
        domain: "resilient"
    },
    {
        id: 'res_005',
        question: "Uma empresa quer atualizar AMI de todas as instâncias em um ASG sem downtime e com rollback automático se health checks falharem. Como?",
        options: [
            "Instance Refresh com MinHealthyPercentage + rollback automático baseado em CloudWatch Alarms",
            "Terminar instâncias uma a uma",
            "Criar novo ASG manualmente",
            "Update Launch Template apenas"
        ],
        correct: [0],
        explanation: "✅ Instance Refresh: atualiza instâncias em rolling fashion. MinHealthyPercentage garante capacidade. Checkpoint (pausa entre batches). Auto Rollback se alarm dispara durante refresh. Nativo do ASG, sem CloudFormation necessário.",
        topic: "autoscaling",
        domain: "resilient"
    },
    {
        id: 'res_006',
        question: "Uma aplicação stateful precisa drenar conexões antes de terminar instâncias durante scale-in. Qual combinação?",
        options: [
            "Terminar imediatamente",
            "NLB apenas",
            "ALB Connection Draining (deregistration delay) + ASG Lifecycle Hook para aguardar drain completar antes de terminar",
            "Route 53 weighted"
        ],
        correct: [2],
        explanation: "✅ Deregistration delay: ALB para de enviar novas requests mas aguarda in-flight completarem (default 300s). Lifecycle Hook: dá tempo adicional para cleanup. Combinação garante zero dropped connections durante scale-in.",
        topic: "autoscaling",
        domain: "resilient"
    },
    {
        id: 'res_007',
        question: "Uma empresa quer implementar self-healing: se uma instância EC2 falhar health check, deve ser automaticamente substituída. Qual configuração?",
        options: [
            "CloudWatch Alarm → restart",
            "Lambda scheduled check",
            "Route 53 health check",
            "ASG com ELB Health Check type — instância que falha health check é terminada e substituída automaticamente pelo ASG",
        ],
        correct: [3],
        explanation: "✅ ASG Health Check Type: ELB (usa health check do ALB/NLB). Se instância falha, ASG marca unhealthy → termina → lança nova. Self-healing automático. Grace period evita false positives durante bootstrap.",
        topic: "self-healing",
        domain: "resilient"
    },
    {
        id: 'res_008',
        question: "Uma empresa precisa de DR para DynamoDB com RPO próximo de zero e failover automático cross-region. Qual feature?",
        options: [
            "DynamoDB Streams + Lambda replication",
            "DynamoDB Global Tables — replicação multi-region active-active com conflict resolution automática (last writer wins)",
            "Backup/Restore cross-region",
            "DynamoDB Export to S3"
        ],
        correct: [1],
        explanation: "✅ Global Tables: multi-region, multi-active. Replicação automática (tipicamente < 1s). Last writer wins para conflitos. Failover automático (app aponta para região local). RPO ~0. Requer DynamoDB Streams habilitado.",
        topic: "dr-automation",
        domain: "resilient"
    },
    {
        id: 'res_009',
        question: "Uma equipe quer que o FIS pare automaticamente um experimento de chaos se a taxa de erro da aplicação ultrapassar 5%. Como?",
        options: [
            "FIS Stop Conditions — CloudWatch Alarm que quando em ALARM state para o experimento e executa rollback das ações",
            "Monitorar manualmente",
            "Lambda watcher",
            "EventBridge rule"
        ],
        correct: [0],
        explanation: "✅ Stop Conditions: associa CloudWatch Alarms ao experiment. Se alarm entra em ALARM durante execução, FIS para imediatamente e faz rollback (ex: reinicia instâncias paradas). Safety net para chaos engineering.",
        topic: "chaos-engineering",
        domain: "resilient"
    },
    {
        id: 'res_010',
        question: "Uma empresa quer automatizar backups de múltiplos serviços (EC2, RDS, EFS, DynamoDB) com lifecycle policies e cross-region copy. Qual serviço?",
        options: [
            "Scripts custom por serviço",
            "Snapshots manuais",
            "AWS Backup — plano centralizado com regras de schedule, retention, cross-region copy e cross-account copy para múltiplos serviços",
            "Data Lifecycle Manager apenas"
        ],
        correct: [2],
        explanation: "✅ AWS Backup: plano unificado para EC2, RDS, Aurora, DynamoDB, EFS, FSx, S3. Backup rules (schedule + retention). Copy rules (cross-region/cross-account). Vault Lock para compliance (WORM). Audit Manager integration.",
        topic: "backup-automation",
        domain: "resilient"
    },
    {
        id: 'res_011',
        question: "Uma aplicação multi-AZ precisa detectar e recuperar automaticamente de uma falha de AZ inteira. Qual padrão?",
        options: [
            "Manual failover",
            "Route 53 failover",
            "Single AZ com backup",
            "ASG com subnets em múltiplas AZs + ALB cross-zone load balancing + RDS Multi-AZ — ASG rebalanceia instâncias automaticamente",
        ],
        correct: [3],
        explanation: "✅ Multi-AZ resilience: ASG distribui instâncias entre AZs. Se AZ falha, ASG lança novas instâncias nas AZs saudáveis. ALB cross-zone distribui tráfego. RDS Multi-AZ failover automático. Sem intervenção manual.",
        topic: "self-healing",
        domain: "resilient"
    },
    {
        id: 'res_012',
        question: "Uma empresa quer implementar Pilot Light DR: infraestrutura mínima na região secundária que pode ser escalada rapidamente. Quais componentes manter ativos?",
        options: [
            "Tudo ativo (Active/Active)",
            "Apenas replicação de dados (RDS read replica, S3 CRR) + AMIs atualizadas + CloudFormation/CDK pronto para escalar compute on-demand",
            "Nada na região secundária",
            "Apenas DNS configurado"
        ],
        correct: [1],
        explanation: "✅ Pilot Light: dados replicados continuamente (RDS replica, S3 CRR). Compute desligado mas pronto (AMIs, Launch Templates). Failover: promove replica, escala ASG, atualiza DNS. RTO: minutos. Custo: baixo (paga só storage).",
        topic: "dr-automation",
        domain: "resilient"
    },
    {
        id: 'res_013',
        question: "Uma equipe quer usar FIS para simular falha de AZ em um experimento de chaos engineering. Qual ação usar?",
        options: [
            "aws:ec2:send-spot-instance-interruptions + aws:network:disrupt-connectivity (target subnet da AZ) para simular AZ impairment",
            "Terminar todas instâncias da AZ",
            "Desabilitar subnet",
            "Security Group deny all"
        ],
        correct: [0],
        explanation: "✅ FIS AZ actions: aws:network:disrupt-connectivity bloqueia tráfego para subnets específicas. Simula AZ failure sem realmente afetar a AZ. Combinado com stop conditions. Valida se aplicação failover para outras AZs corretamente.",
        topic: "chaos-engineering",
        domain: "resilient"
    },
    {
        id: 'res_014',
        question: "Uma empresa precisa garantir que EBS snapshots sejam criados automaticamente a cada 12h e retidos por 30 dias. Qual serviço específico?",
        options: [
            "Cron + AWS CLI",
            "AWS Backup apenas",
            "Amazon Data Lifecycle Manager (DLM) — policies automatizadas para criação, retenção e cross-region copy de EBS snapshots e AMIs",
            "CloudWatch Events + Lambda"
        ],
        correct: [2],
        explanation: "✅ DLM: policies para EBS snapshots e EBS-backed AMIs. Define schedule (every 12h), retention (30 days), tags para target volumes. Cross-region copy. Mais simples que AWS Backup para caso específico de EBS. Sem custo adicional.",
        topic: "backup-automation",
        domain: "resilient"
    },
    {
        id: 'res_015',
        question: "Uma aplicação precisa de failover automático entre origens no CloudFront se a origem primária retornar 5xx. Como?",
        options: [
            "Route 53 failover",
            "ALB failover",
            "Lambda@Edge retry",
            "CloudFront Origin Failover — Origin Group com primary + secondary origin. Se primary retorna 5xx/4xx configurados, CloudFront roteia para secondary automaticamente",
        ],
        correct: [3],
        explanation: "✅ Origin Groups: define primary + secondary origin. Failover criteria: status codes (500, 502, 503, 504). Se primary falha, request vai para secondary (outra região, S3 static page). Transparente para usuário. Sem DNS propagation delay.",
        topic: "self-healing",
        domain: "resilient"
    },
    {
        id: 'res_016',
        question: "Uma empresa quer que Auto Scaling reaja mais rápido a spikes de tráfego, sem esperar métricas de CloudWatch (delay de 1-2 min). Qual abordagem?",
        options: [
            "Aumentar instâncias fixas",
            "Predictive Scaling — usa ML para analisar padrões históricos e pré-escalar capacidade ANTES do spike acontecer",
            "Step Scaling com threshold baixo",
            "Scheduled Scaling apenas"
        ],
        correct: [1],
        explanation: "✅ Predictive Scaling: ML analisa 14 dias de histórico, identifica padrões (ex: spike às 9h). Pré-escala antes do tráfego chegar. Combina com dynamic scaling para eventos imprevistos. Elimina cold start de novas instâncias.",
        topic: "autoscaling",
        domain: "resilient"
    },
    {
        id: 'res_017',
        question: "Uma empresa precisa replicar objetos S3 para outra região com RTO < 15 minutos para DR. Qual feature e configuração?",
        options: [
            "S3 Cross-Region Replication (CRR) com S3 Replication Time Control (RTC) — garante 99.99% dos objetos replicados em 15 minutos",
            "S3 Batch Operations copy",
            "S3 Transfer Acceleration",
            "DataSync scheduled"
        ],
        correct: [0],
        explanation: "✅ CRR: replicação assíncrona cross-region. RTC (Replication Time Control): SLA de 15 min para 99.99% dos objetos. Metrics e notifications para monitorar. Requer versioning habilitado em ambos buckets.",
        topic: "dr-automation",
        domain: "resilient"
    },
    {
        id: 'res_018',
        question: "Uma aplicação usa SQS para desacoplar componentes. Como garantir que mensagens não sejam perdidas se o consumer falhar?",
        options: [
            "Aumentar visibility timeout infinitamente",
            "Duplicar mensagens em outro queue",
            "Dead Letter Queue (DLQ) com maxReceiveCount — após N falhas de processamento, mensagem vai para DLQ para análise. Redrive policy para reprocessar",
            "S3 backup de mensagens"
        ],
        correct: [2],
        explanation: "✅ DLQ: mensagens que falham N vezes (maxReceiveCount) vão para DLQ. Não são perdidas. Alarme em DLQ para investigação. Redrive: move mensagens de volta para queue original após fix. Retention period até 14 dias.",
        topic: "self-healing",
        domain: "resilient"
    },
    {
        id: 'res_019',
        question: "Uma empresa quer validar que sua estratégia de DR funciona sem afetar produção. Qual abordagem com FIS?",
        options: [
            "Failover real em produção",
            "Tabletop exercise",
            "Documentação apenas",
            "FIS experiment em ambiente de staging que simula falha regional + validar que aplicação failover corretamente + medir RTO/RPO real",
        ],
        correct: [3],
        explanation: "✅ Game Days com FIS: simula falhas em staging/prod (com stop conditions). Mede RTO/RPO real vs planejado. Identifica gaps no runbook. Valida automação de failover. Repete regularmente. Cultura de resiliência.",
        topic: "chaos-engineering",
        domain: "resilient"
    },
    {
        id: 'res_020',
        question: "Uma empresa quer proteger backups contra deleção acidental ou ransomware, garantindo que ninguém possa deletar por 1 ano. Como?",
        options: [
            "IAM policy deny delete",
            "AWS Backup Vault Lock (compliance mode) — WORM policy que impede deleção de recovery points durante retention period, nem root pode deletar",
            "S3 Object Lock",
            "MFA Delete"
        ],
        correct: [1],
        explanation: "✅ Vault Lock (compliance mode): imutável após cool-off period. Ninguém pode deletar backups (nem root, nem AWS Support). Atende regulatórios (SEC, FINRA). Governance mode permite admin override. WORM para backups.",
        topic: "backup-automation",
        domain: "resilient"
    },
    {
        id: 'res_021',
        question: "Uma aplicação precisa de Auto Scaling baseado em métrica custom (queue depth por instância). Como configurar?",
        options: [
            "Target Tracking Scaling com custom metric (ApproximateNumberOfMessages / RunningInstances) publicada no CloudWatch — ASG mantém target value",
            "Simple Scaling com CloudWatch default",
            "Step Scaling apenas",
            "Scheduled Scaling"
        ],
        correct: [0],
        explanation: "✅ Target Tracking com custom metric: publica métrica (backlog per instance) no CloudWatch. ASG ajusta capacidade para manter target (ex: 10 msgs/instance). Mais eficiente que step scaling. Scale-in e scale-out automáticos.",
        topic: "autoscaling",
        domain: "resilient"
    },
    {
        id: 'res_022',
        question: "Uma empresa quer implementar Warm Standby DR com infraestrutura reduzida na região secundária. Como automatizar o scale-up durante failover?",
        options: [
            "Manual scaling",
            "Lambda resize",
            "ASG com capacidade mínima na DR region + CloudFormation/SSM Automation runbook que aumenta desired capacity + promove RDS replica durante failover",
            "Terraform apply"
        ],
        correct: [2],
        explanation: "✅ Warm Standby: infraestrutura funcional mas em escala reduzida (min capacity). Failover runbook: 1) Promove RDS replica 2) Aumenta ASG desired 3) Atualiza DNS. SSM Automation orquestra steps. RTO: minutos. Custo: moderado.",
        topic: "dr-automation",
        domain: "resilient"
    },
    {
        id: 'res_023',
        question: "Uma aplicação serverless (Lambda + DynamoDB) precisa de DR multi-region. Qual abordagem com menor RTO?",
        options: [
            "Backup & Restore",
            "Lambda@Edge apenas",
            "Export DynamoDB para S3 cross-region",
            "DynamoDB Global Tables + Lambda em ambas regiões + API Gateway com Route 53 failover — active/active ou active/passive",
        ],
        correct: [3],
        explanation: "✅ Serverless DR: DynamoDB Global Tables (multi-region sync). Lambda deployed em ambas regiões (SAM/CDK pipeline). API Gateway regional em cada região. Route 53 failover ou latency routing. RTO ~0 para active/active.",
        topic: "dr-automation",
        domain: "resilient"
    },
    {
        id: 'res_024',
        question: "Uma empresa quer que EC2 Auto Scaling proteja instâncias específicas (ex: leader node) de serem terminadas durante scale-in. Como?",
        options: [
            "Não é possível",
            "Instance Scale-In Protection — marca instâncias específicas como protegidas. ASG não as seleciona durante scale-in até proteção ser removida",
            "Lifecycle Hook",
            "Termination Policy custom"
        ],
        correct: [1],
        explanation: "✅ Scale-In Protection: protege instâncias individuais de terminação por scale-in. Útil para leader/master nodes, instâncias processando long-running jobs. Pode ser setada via API/SDK. Não protege contra unhealthy replacement.",
        topic: "autoscaling",
        domain: "resilient"
    },
    {
        id: 'res_025',
        question: "Uma empresa quer automatizar o teste de restore de backups mensalmente para validar que backups são recuperáveis. Como?",
        options: [
            "AWS Backup Restore Testing — plano automatizado que restaura backups periodicamente, valida com CloudWatch, e deleta recursos restaurados após validação",
            "Teste manual mensal",
            "Lambda + restore API",
            "Confiar que backups funcionam"
        ],
        correct: [0],
        explanation: "✅ Restore Testing: define plano (quais backups testar, frequência). AWS Backup restaura automaticamente, aguarda validação (CloudWatch check), deleta recurso restaurado. Prova que backups são recuperáveis. Compliance evidence.",
        topic: "backup-automation",
        domain: "resilient"
    },
    {
        id: 'res_026',
        question: "Uma aplicação precisa manter sessões de usuário mesmo quando instâncias são terminadas pelo ASG. Qual padrão?",
        options: [
            "Sticky sessions no ALB",
            "EBS volume compartilhado",
            "Externalizar sessões para ElastiCache Redis (Multi-AZ) ou DynamoDB — instâncias são stateless e descartáveis",
            "Session replication entre instâncias"
        ],
        correct: [2],
        explanation: "✅ Externalize state: sessões em ElastiCache Redis (sub-ms latency, Multi-AZ) ou DynamoDB (serverless, auto-scaling). Instâncias ficam stateless → ASG pode terminar qualquer uma sem perda de sessão. Sticky sessions não escala.",
        topic: "self-healing",
        domain: "resilient"
    },
    {
        id: 'res_027',
        question: "Uma empresa quer usar chaos engineering para validar que circuit breakers da aplicação funcionam quando um serviço downstream fica lento. Qual ação FIS?",
        options: [
            "Terminar serviço downstream",
            "Throttle API Gateway",
            "CPU stress na instância",
            "aws:network:disrupt-connectivity com latency injection — adiciona latência artificial ao tráfego de rede para simular serviço lento",
        ],
        correct: [3],
        explanation: "✅ Network disruption actions: inject latency, packet loss, ou block traffic. Simula degradação de serviço downstream. Valida circuit breakers, timeouts, retry logic, fallback mechanisms. Mais realista que terminar serviço.",
        topic: "chaos-engineering",
        domain: "resilient"
    },
    {
        id: 'res_028',
        question: "Uma empresa precisa de RPO = 0 para Aurora MySQL em DR cross-region. Aurora Global Database tem lag de ~1s. Como atingir RPO = 0?",
        options: [
            "Aurora Global Database é suficiente",
            "Aurora Global Database com write forwarding desabilitado + aplicação confirma replicação antes de ACK ao cliente (synchronous at app level), ou aceitar RPO ~1s",
            "RDS Multi-AZ apenas",
            "DMS continuous replication"
        ],
        correct: [1],
        explanation: "✅ Aurora Global Database: RPO tipicamente < 1s (assíncrono). RPO = 0 absoluto requer synchronous replication (não disponível cross-region por latência). Trade-off: aceitar RPO ~1s ou usar Multi-AZ (RPO=0 mas single-region).",
        topic: "dr-automation",
        domain: "resilient"
    },
    {
        id: 'res_029',
        question: "Uma empresa quer que o ASG use múltiplos instance types para melhor disponibilidade e custo. Qual feature?",
        options: [
            "Mixed Instances Policy — define múltiplos instance types + allocation strategy (capacity-optimized/lowest-price) + On-Demand/Spot mix",
            "Single instance type",
            "Multiple ASGs",
            "Capacity Reservations"
        ],
        correct: [0],
        explanation: "✅ Mixed Instances Policy: múltiplos types (m5.large, m5a.large, m4.large). Se um type não tem capacidade, usa outro. Spot + On-Demand mix (ex: 70% Spot, 30% OD base). Capacity-optimized strategy reduz interrupções Spot.",
        topic: "autoscaling",
        domain: "resilient"
    },
    {
        id: 'res_030',
        question: "Uma aplicação ECS precisa de self-healing: se um container falhar health check, deve ser substituído automaticamente. Qual configuração?",
        options: [
            "Restart manual",
            "CloudWatch Alarm → Lambda",
            "ECS Service com deployment configuration + ALB health check — ECS drena e substitui tasks unhealthy automaticamente, mantendo desired count",
            "Docker restart policy apenas"
        ],
        correct: [2],
        explanation: "✅ ECS Service: mantém desired count. Se task falha (health check ALB ou container health check), ECS para task, lança nova. Deployment circuit breaker: rollback se muitas tasks falham. Self-healing nativo para containers.",
        topic: "self-healing",
        domain: "resilient"
    },
    {
        id: 'res_031',
        question: "Uma empresa quer implementar cross-account backup para proteção contra comprometimento de conta. Como?",
        options: [
            "S3 replication para outra conta",
            "AWS Organizations backup policy",
            "Snapshot share manual",
            "AWS Backup com cross-account copy para vault em conta separada (backup account) + Vault Lock na conta destino + SCP impedindo deleção",
        ],
        correct: [3],
        explanation: "✅ Cross-account backup: copia recovery points para vault em conta dedicada (backup account). Vault Lock impede deleção. SCP na backup account restringe acesso. Se conta primária comprometida, backups seguros na outra conta.",
        topic: "backup-automation",
        domain: "resilient"
    },
    {
        id: 'res_032',
        question: "Uma empresa quer automatizar failover de ElastiCache Redis para outra região em caso de DR. Qual feature?",
        options: [
            "Manual snapshot + restore",
            "ElastiCache Global Datastore — replicação cross-region com failover que promove cluster secundário para primary em < 1 minuto",
            "Redis Sentinel custom",
            "DynamoDB como fallback"
        ],
        correct: [1],
        explanation: "✅ Global Datastore: cross-region replication para Redis. Secondary cluster read-only. Failover: promove secondary para primary (< 1 min). Aplicação atualiza endpoint. RPO tipicamente < 1s. Ideal para session stores e caches críticos.",
        topic: "dr-automation",
        domain: "resilient"
    },
    {
        id: 'res_033',
        question: "Uma empresa quer que ASG substitua instâncias que falham EC2 status checks (hardware failure) automaticamente. Qual health check?",
        options: [
            "EC2 Health Check type (default) — detecta system/instance status check failures e marca instância como unhealthy para replacement",
            "ELB health check apenas",
            "Custom health check",
            "CloudWatch Alarm"
        ],
        correct: [0],
        explanation: "✅ EC2 health check (default no ASG): detecta hardware failures (system status check) e software issues (instance status check). Se falha, ASG termina e substitui. Para app-level health, adicionar ELB health check type.",
        topic: "self-healing",
        domain: "resilient"
    },
    {
        id: 'res_034',
        question: "Uma empresa quer orquestrar um DR failover completo (promote DB, scale compute, update DNS, notify team) com um único trigger. Como?",
        options: [
            "Runbook manual",
            "SSM Automation runbook multi-step: promote RDS replica → update ASG capacity → update Route 53 → SNS notification. Trigger via EventBridge ou manual",
            "Lambda function",
            "Step Functions"
        ],
        correct: [1],
        explanation: "✅ SSM Automation: runbook com steps sequenciais (aws:executeAwsApi). Orquestra todo failover. Pode ter approval step. Logging completo. Testável em DR drills. Trigger: manual, EventBridge, ou API. Mais simples que Step Functions para este caso.",
        topic: "dr-automation",
        domain: "resilient"
    }
];

window.resilientDopQuestions = resilientDopQuestions;
