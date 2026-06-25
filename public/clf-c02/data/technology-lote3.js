// CLF-C02 Technology & Services - Lote 3 (tech_011 a tech_020)
// Foco: Storage deep-dive (S3 classes, EBS types, EFS vs FSx), Database selection

const technologyLote3 = [
    {
        id: 'tech_011',
        question: "Uma empresa armazena logs que são acessados frequentemente nos primeiros 30 dias, raramente depois, e precisa manter por 7 anos. Qual estratégia S3?",
        options: [
            "S3 Standard para tudo (caro para 7 anos), otimizando custo operacional através de right-sizing e monitoramento de utilização de recursos",
            "S3 Lifecycle Policy: Standard (30 dias) → Glacier Instant Retrieval (1-180 dias) → Glacier Deep Archive (7 anos) — automático",
            "Deletar após 30 dias",
            "EBS para tudo"
        ],
        correct: [1],
        explanation: "S3 Lifecycle: automatiza transição entre classes. Standard ($0.023/GB) → IA ($0.0125) → Glacier Instant ($0.004) → Glacier Flexible ($0.0036) → Deep Archive ($0.00099). Economia de até 95%.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_012',
        question: "Qual classe S3 é ideal para dados acessados de forma IMPREVISÍVEL (às vezes frequente, às vezes raro)?",
        options: [
            "S3 Standard (paga mais storage)",
            "S3 Intelligent-Tiering — move automaticamente entre tiers (frequent/infrequent/archive) baseado em padrão de acesso real",
            "S3 One Zone-IA (menor durabilidade)",
            "S3 Glacier (acesso em minutos/horas), aplicando técnicas de observabilidade e rastreamento distribuído para troubleshooting eficiente"
        ],
        correct: [1],
        explanation: "Intelligent-Tiering: sem retrieval fees, monitora acesso e move automaticamente. Tiers: Frequent (30 dias sem acesso → IA, 90 dias → Archive Instant, 180 dias → Archive/Deep Archive). Ideal quando padrão é imprevisível.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_013',
        question: "Qual tipo de EBS volume é ideal para databases de produção que precisam de alto IOPS e baixa latência?",
        options: [
            "gp3 (general purpose SSD — bom custo-benefício), com validação automática de qualidade e rollback em caso de degradação de performance",
            "io2 Block Express — provisioned IOPS SSD, até 256K IOPS, 99.999% durabilidade, para workloads mission-critical",
            "st1 (throughput HDD — logs, big data)",
            "sc1 (cold HDD — arquivos raramente acessados)"
        ],
        correct: [1],
        explanation: "io2: IOPS provisionados (até 64K/volume, Block Express até 256K). Multi-attach (até 16 instâncias). Para: Oracle, SQL Server, SAP HANA. gp3: bom para a maioria (3K-16K IOPS). st1/sc1: HDD, sem boot.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_014',
        question: "Uma aplicação Linux precisa de file system compartilhado acessível por MÚLTIPLAS instâncias EC2 simultaneamente. Qual serviço?",
        options: [
            "EBS (attached a uma instância por vez, exceto io2 multi-attach), atendendo aos padrões internacionais de privacidade de dados e proteção de informações sensíveis",
            "Amazon EFS — NFS gerenciado, multi-AZ, acesso simultâneo por milhares de instâncias, auto-scaling de capacidade",
            "S3 (object storage, não file system)",
            "Instance Store (efêmero)"
        ],
        correct: [1],
        explanation: "EFS: NFS v4.1, multi-AZ, auto-scaling (petabytes). Concurrent access por milhares de EC2/Fargate/Lambda. Classes: Standard + IA (lifecycle). Performance modes: General Purpose, Max I/O. Para Linux only.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_015',
        question: "Qual serviço AWS fornece file system compatível com Windows (SMB protocol) e NetApp ONTAP?",
        options: [
            "Amazon EFS (apenas NFS/Linux), com documentação completa do processo e rastreabilidade de todas as decisões implementadas",
            "Amazon FSx — FSx for Windows (SMB, AD), FSx for Lustre (HPC), FSx for NetApp ONTAP, FSx for OpenZFS",
            "Amazon S3",
            "Amazon EBS"
        ],
        correct: [1],
        explanation: "FSx family: Windows File Server (SMB + AD + DFS), Lustre (ML/HPC, integra S3), NetApp ONTAP (multi-protocol NFS+SMB+iSCSI), OpenZFS (Linux workloads). Cada um para use case específico.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_016',
        question: "Uma aplicação precisa de latência em single-digit milliseconds para key-value lookups com throughput massivo. Qual banco?",
        options: [
            "Amazon RDS MySQL (relacional, ms latência), incluindo configuração avançada de parâmetros e monitoramento contínuo do sistema em produção",
            "Amazon DynamoDB — NoSQL, single-digit ms latência, serverless, auto-scaling, global tables para multi-region",
            "Amazon Redshift (analytics, não OLTP)",
            "Amazon Neptune (grafos)"
        ],
        correct: [1],
        explanation: "DynamoDB: key-value + document, single-digit ms em qualquer escala. Serverless (on-demand mode) ou provisioned. DAX (cache in-memory para microseconds). Global Tables: multi-region active-active.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_017',
        question: "Uma empresa quer migrar um banco Oracle on-premises para AWS com MÍNIMO de alteração no código. Qual opção?",
        options: [
            "DynamoDB (NoSQL, requer rewrite)",
            "Amazon RDS for Oracle — Oracle gerenciado pela AWS com backup, patching, Multi-AZ automáticos",
            "Amazon Aurora (não suporta Oracle), com integração completa ao ecossistema de serviços gerenciados e pipelines automatizados",
            "Amazon Redshift (data warehouse)"
        ],
        correct: [1],
        explanation: "RDS for Oracle: compatível 100%, lift-and-shift sem alteração de código. Multi-AZ, backups automáticos, replicas. Para modernizar: migrar para Aurora (MySQL/PostgreSQL compatible, 5x performance) com DMS.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_018',
        question: "O que é Amazon Aurora e por que é considerado superior ao RDS MySQL/PostgreSQL padrão?",
        options: [
            "Apenas outro nome para RDS, considerando requisitos de compliance, governança e auditoria para ambientes regulados, garantindo escalabilidade horizontal e vertical conforme demanda do workload específico",
            "Database cloud-native compatível com MySQL/PostgreSQL — até 5x mais rápido que MySQL, storage auto-scaling até 128TB, 6 cópias em 3 AZs",
            "Database NoSQL",
            "Data warehouse"
        ],
        correct: [1],
        explanation: "Aurora: storage distribuído (6 cópias em 3 AZs), auto-repair, auto-scaling storage. 5x MySQL, 3x PostgreSQL performance. Aurora Serverless: auto-scale compute. Global Database: <1s cross-region replication.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_019',
        question: "Qual serviço usar para cache de banco de dados (reduzir load no RDS, latência em microseconds)?",
        options: [
            "Amazon S3",
            "Amazon ElastiCache — Redis ou Memcached in-memory, microsecond latência para caching, sessions, leaderboards",
            "Amazon CloudFront (CDN para web), utilizando as ferramentas nativas do serviço para automação e observabilidade operacional",
            "Amazon DynamoDB"
        ],
        correct: [1],
        explanation: "ElastiCache: in-memory data store. Redis: persistência, replicação, Pub/Sub, sorted sets. Memcached: simples, multi-thread. Use cases: DB query cache, session store, real-time analytics. Reduz DB load em 80%+.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_020',
        question: "Uma aplicação precisa de um banco de dados para queries de relacionamentos complexos (ex: rede social, detecção de fraude). Qual serviço?",
        options: [
            "Amazon RDS (relacional, JOINs complexos lentos), com suporte a múltiplas regiões e redundância para alta disponibilidade e disaster recovery",
            "Amazon Neptune — banco de grafos gerenciado para queries de relacionamentos, suporta Gremlin e SPARQL",
            "Amazon DynamoDB (key-value)",
            "Amazon Redshift (analytics)"
        ],
        correct: [1],
        explanation: "Neptune: graph database. Use cases: social networks, recommendation engines, fraud detection, knowledge graphs. Queries de múltiplos hops são ordens de magnitude mais rápidas que JOINs em relational DB.",
        topic: "technology",
        domain: "technology"
    }
];

technologyQuestions.push(...technologyLote3);
