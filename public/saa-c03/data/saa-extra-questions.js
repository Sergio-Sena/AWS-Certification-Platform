// SAA-C03 - Questões Extras (fonte: fork Thiago-code-lab, licença MIT)
// 25 questões adicionais convertidas - distribuídas pelos 4 domínios

const saaExtraQuestions = [
    // DOMÍNIO: Resilient Architectures
    {
        id: 'extra_res_001',
        question: "Uma aplicação web precisa continuar disponível durante falha de uma zona de disponibilidade. O tráfego deve ser distribuído automaticamente entre instâncias saudáveis. Qual abordagem é mais aderente?",
        options: [
            "Uma instância EC2 única com snapshot diário",
            "Auto Scaling Group em múltiplas AZs atrás de um Application Load Balancer",
            "Uma instância EC2 maior em uma subnet pública",
            "Backup manual da AMI antes de cada deploy"
        ],
        correct: [1],
        explanation: "ASG multi-AZ com ALB distribui tráfego para destinos saudáveis e mantém capacidade mesmo com falha em uma AZ. Snapshot ajuda recuperação, mas não entrega alta disponibilidade durante a falha.",
        topic: "high-availability",
        domain: "resilient"
    },
    {
        id: 'extra_res_002',
        question: "Um cenário exige failover automático entre zonas com mínimo downtime para um banco relacional transacional. Qual recurso atende melhor?",
        options: [
            "Instância única maior",
            "RDS Multi-AZ com monitoramento e failover nativo",
            "Backup semanal manual",
            "Escala vertical apenas"
        ],
        correct: [1],
        explanation: "RDS Multi-AZ oferece alta disponibilidade com failover gerenciado e troca automática para o standby com menor indisponibilidade.",
        topic: "database",
        domain: "resilient"
    },
    {
        id: 'extra_res_003',
        question: "Uma aplicação com pico imprevisível precisa absorver carga sem perder requisições, aceitando processamento assíncrono. Qual serviço reduz melhor o risco operacional?",
        options: [
            "Fila desacoplada (SQS) com consumidores elásticos",
            "Processamento síncrono fixo",
            "Retry manual no cliente",
            "Bloquear requisições extras"
        ],
        correct: [0],
        explanation: "SQS absorve picos, desacopla componentes e permite escalar consumidores conforme backlog. Processamento síncrono fixo não lida com picos imprevisíveis.",
        topic: "decoupling",
        domain: "resilient"
    },
    {
        id: 'extra_res_004',
        question: "Uma empresa precisa de DR com RPO baixo e custo moderado. Qual estratégia equilibra esses requisitos?",
        options: [
            "Backup anual em S3",
            "Pilot Light com recursos mínimos pré-provisionados",
            "Sem replicação entre regiões",
            "Apenas snapshots locais"
        ],
        correct: [1],
        explanation: "Pilot Light mantém recursos core mínimos rodando (ex: DB replicado) na região DR, equilibrando custo com recuperação mais rápida que backup puro.",
        topic: "disaster-recovery",
        domain: "resilient"
    },
    {
        id: 'extra_res_005',
        question: "Um banco relacional precisa de failover automático com mínima interrupção. O objetivo principal não é escalar leitura. Qual recurso atende melhor?",
        options: [
            "RDS Multi-AZ",
            "Read Replica em outra região",
            "Exportação para S3 a cada hora",
            "EC2 com banco instalado manualmente"
        ],
        correct: [0],
        explanation: "RDS Multi-AZ oferece alta disponibilidade com failover gerenciado para o banco principal. Read Replica ajuda leitura e DR, mas não substitui Multi-AZ para failover síncrono.",
        topic: "database",
        domain: "resilient"
    },
    // DOMÍNIO: High-Performing Architectures
    {
        id: 'extra_perf_001',
        question: "Uma aplicação precisa distribuir conteúdo estático globalmente com baixa latência. Qual serviço é mais adequado?",
        options: [
            "CloudFront com origin S3",
            "EC2 em região única",
            "NAT Gateway",
            "Amazon SQS"
        ],
        correct: [0],
        explanation: "CloudFront entrega conteúdo no edge e reduz latência por proximidade geográfica com o usuário final.",
        topic: "cdn",
        domain: "performance"
    },
    {
        id: 'extra_perf_002',
        question: "Uma API com throughput variável precisa de baixa operação e escala automática. Qual abordagem é mais adequada?",
        options: [
            "Serverless com Lambda e API Gateway",
            "EC2 fixa sem auto scaling",
            "Processo cron agendado",
            "Monolito sem balanceador"
        ],
        correct: [0],
        explanation: "Serverless ajusta capacidade por demanda sem gerenciamento de servidor, ideal para throughput variável com baixa operação.",
        topic: "serverless",
        domain: "performance"
    },
    {
        id: 'extra_perf_003',
        question: "Uma aplicação tem leitura massiva e repetitiva em dados quentes de sessão. A latência precisa ser sub-milissegundo. Qual solução?",
        options: [
            "Cache gerenciado (ElastiCache)",
            "Snapshot diário do banco",
            "Log manual de sessões",
            "Auto Scaling Group sem cache"
        ],
        correct: [0],
        explanation: "Cache in-memory (ElastiCache Redis/Memcached) reduz latência para sub-milissegundo e alivia o banco de dados em leituras repetitivas.",
        topic: "caching",
        domain: "performance"
    },
    {
        id: 'extra_perf_004',
        question: "Um workload DynamoDB tem leitura irregular com picos imprevisíveis. A equipe não quer gerenciar capacidade manualmente. Qual modo escolher?",
        options: [
            "DynamoDB On-Demand (capacity mode sob demanda)",
            "Provisionado estático sem autoscaling",
            "Banco relacional local",
            "Arquivo CSV em S3"
        ],
        correct: [0],
        explanation: "On-demand absorve variação automaticamente e evita throttling por subprovisionamento. Paga apenas pelo que consome.",
        topic: "database",
        domain: "performance"
    },
    {
        id: 'extra_perf_005',
        question: "Uma equipe precisa executar consultas analíticas sobre dados em S3 sem provisionar cluster dedicado. Qual serviço atende?",
        options: [
            "Amazon Athena",
            "NAT Gateway",
            "IAM Identity Center",
            "Route 53"
        ],
        correct: [0],
        explanation: "Athena executa SQL direto no S3 sem infraestrutura para gerenciar. Paga por query. Ideal para análise ad-hoc sem cluster.",
        topic: "analytics",
        domain: "performance"
    },
    {
        id: 'extra_perf_006',
        question: "Instâncias em subnet privada precisam acessar S3 sem expor tráfego à internet. Qual escolha reduz custo e aumenta segurança?",
        options: [
            "NAT Gateway para todo acesso ao S3",
            "Internet Gateway associado à subnet privada",
            "VPC Gateway Endpoint para S3",
            "Elastic IP em cada instância privada"
        ],
        correct: [2],
        explanation: "Gateway Endpoint para S3 mantém o tráfego na rede AWS, é gratuito e reduz dependência de NAT Gateway para esse acesso.",
        topic: "networking",
        domain: "performance"
    },
    // DOMÍNIO: Secure Architectures
    {
        id: 'extra_sec_001',
        question: "Uma aplicação precisa armazenar credenciais com rotação automática sem causar downtime. Qual serviço gerencia isso nativamente?",
        options: [
            "Secrets Manager com rotação automática via Lambda",
            "Arquivo texto em EC2",
            "Variável fixa em pipeline",
            "KMS sozinho"
        ],
        correct: [0],
        explanation: "Secrets Manager gerencia armazenamento, acesso e rotação automática de segredos. Integração nativa com RDS para rotação sem downtime.",
        topic: "secrets",
        domain: "secure"
    },
    {
        id: 'extra_sec_002',
        question: "Uma empresa precisa de trilha de auditoria completa de todas as API calls na conta, incluindo quem fez o quê e quando. Qual serviço?",
        options: [
            "CloudTrail com log file validation",
            "CloudFront access logs",
            "Amazon EFS",
            "AWS Snowball"
        ],
        correct: [0],
        explanation: "CloudTrail registra chamadas de API para investigação e compliance. Log file validation garante integridade dos registros.",
        topic: "audit",
        domain: "secure"
    },
    {
        id: 'extra_sec_003',
        question: "Uma empresa precisa criptografar dados em repouso com chave controlada pelo cliente e auditoria de uso. Qual solução?",
        options: [
            "KMS com Customer Managed Key (CMK) e rotação automática",
            "Security Group inbound",
            "Auto Scaling policy",
            "IAM group"
        ],
        correct: [0],
        explanation: "KMS com CMK oferece governança de chave, rotação automática anual e auditoria de uso via CloudTrail.",
        topic: "encryption",
        domain: "secure"
    },
    {
        id: 'extra_sec_004',
        question: "Uma empresa precisa segmentar tráfego entre camadas na VPC (web, app, DB) para reduzir blast radius. Qual abordagem?",
        options: [
            "Security Groups e NACLs por camada com regras restritivas",
            "Tudo em subnet pública",
            "Porta 0.0.0.0/0 aberta",
            "Um único Security Group amplo para todos"
        ],
        correct: [0],
        explanation: "Segmentação por camada com SGs referenciando outros SGs diminui blast radius e risco de movimentação lateral.",
        topic: "networking",
        domain: "secure"
    },
    {
        id: 'extra_sec_005',
        question: "Uma empresa com AWS Organizations precisa impedir que contas membro desabilitem CloudTrail ou deletem logs. Qual mecanismo?",
        options: [
            "IAM policies em cada conta",
            "Service Control Policy (SCP) com deny explícito para cloudtrail:StopLogging e cloudtrail:DeleteTrail",
            "CloudTrail organization trail apenas",
            "Config Rules"
        ],
        correct: [1],
        explanation: "SCPs são guardrails que limitam permissões máximas. Deny explícito em SCP não pode ser overridden por nenhuma IAM policy na conta — nem pelo root da conta membro.",
        topic: "organizations",
        domain: "secure"
    },
    // DOMÍNIO: Cost-Optimized Architectures
    {
        id: 'extra_cost_001',
        question: "Dados raramente acessados precisam de retenção longa (anos) com custo mínimo de armazenamento. Qual classe S3?",
        options: [
            "S3 Glacier Deep Archive ou classe de arquivamento adequada",
            "S3 Standard para tudo",
            "EBS io2 para backup frio",
            "Replicar para múltiplas regiões sem necessidade"
        ],
        correct: [0],
        explanation: "Glacier Deep Archive oferece o menor custo de armazenamento para dados de acesso raro com retenção longa.",
        topic: "storage",
        domain: "cost"
    },
    {
        id: 'extra_cost_002',
        question: "Uma carga EC2 previsível roda 24x7 há meses sem variação. Como reduzir custos significativamente?",
        options: [
            "Compromisso de uso (Savings Plans ou Reserved Instances)",
            "Spot Instances para banco crítico único",
            "On-Demand sem análise",
            "Escala manual diária"
        ],
        correct: [0],
        explanation: "Consumo estável e previsível se beneficia de desconto por compromisso (até 72% vs On-Demand).",
        topic: "compute",
        domain: "cost"
    },
    {
        id: 'extra_cost_003',
        question: "Uma função Lambda com execução curta e esporádica processa eventos de forma eventual. Qual vantagem de custo sobre containers permanentes?",
        options: [
            "Pagar por invocação evita custo fixo ocioso",
            "ECS permanente é obrigatório para eventos",
            "Cluster dedicado fixo é mais barato",
            "Banco de dados como fila é mais eficiente"
        ],
        correct: [0],
        explanation: "Lambda cobra por invocação e duração. Para carga eventual, evita custo de containers ociosos esperando eventos.",
        topic: "serverless",
        domain: "cost"
    },
    {
        id: 'extra_cost_004',
        question: "Uma empresa quer evitar custo de transferência de dados desnecessário ao acessar S3 de dentro da VPC. Qual solução?",
        options: [
            "VPC Gateway Endpoint para S3 (gratuito, sem NAT)",
            "NAT Gateway para tudo",
            "Tunnel manual",
            "S3 bucket público"
        ],
        correct: [0],
        explanation: "Gateway Endpoint é gratuito e elimina custo de processamento do NAT Gateway para tráfego S3.",
        topic: "networking",
        domain: "cost"
    },
    {
        id: 'extra_cost_005',
        question: "Uma empresa precisa de processo contínuo de revisão de custos AWS. Qual abordagem garante governança proativa?",
        options: [
            "AWS Budgets com alertas + Cost Explorer + revisão mensal com tagging",
            "Ver fatura só no fim do ano",
            "Ignorar tags de custo",
            "Sem ownership definido por equipe"
        ],
        correct: [0],
        explanation: "Budgets com alertas detectam desvios cedo. Cost Explorer identifica tendências. Tags permitem atribuição por equipe/projeto. Governance proativa evita surpresas.",
        topic: "governance",
        domain: "cost"
    }
];

// Adicionar ao banco existente
if (window.secureQuestions) {
    window.secureQuestions.push(...saaExtraQuestions.filter(q => q.domain === 'secure'));
}
if (window.resilientQuestions) {
    window.resilientQuestions.push(...saaExtraQuestions.filter(q => q.domain === 'resilient'));
}
if (window.performanceQuestions) {
    window.performanceQuestions.push(...saaExtraQuestions.filter(q => q.domain === 'performance'));
}
if (window.costQuestions) {
    window.costQuestions.push(...saaExtraQuestions.filter(q => q.domain === 'cost'));
}

window.saaExtraQuestions = saaExtraQuestions;
