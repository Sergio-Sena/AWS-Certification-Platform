// CLF-C02 Technology & Services - Lote 7 (tech_051 a tech_060)
// Foco: Migration & Transfer, AI/ML Services, Analytics

const technologyLote7 = [
    {
        id: 'tech_051',
        question: "Uma empresa quer migrar 50TB de dados on-premises para S3, mas o link de internet é lento (100 Mbps). Qual serviço usar?",
        options: [
            "AWS Snow Family — Snowcone (8-14TB), Snowball Edge (80TB), Snowmobile (100PB): dispositivos físicos para transferência offline",
            "Upload direto pela internet (levaria semanas)",
            "AWS Direct Connect (semanas para setup)",
            "AWS DataSync (depende da internet)"
        ],
        correct: [0],
        explanation: "✅ Snow Family: transferência física. Snowcone: 8TB/14TB SSD portátil. Snowball Edge: 80TB, compute capacity. Snowmobile: caminhão com 100PB. Criptografado, tamper-resistant. Para > 10TB e/ou link lento.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_052',
        question: "Qual serviço AWS facilita migrar databases de qualquer engine para AWS com MÍNIMO de downtime (replicação contínua)?",
        options: [
            "Backup manual e restore",
            "AWS DataSync (arquivos, não databases)",
            "AWS Database Migration Service (DMS) — migração com replicação contínua, suporta homogeneous e heterogeneous migration",
            "AWS Transfer Family (SFTP)"
        ],
        correct: [2],
        explanation: "✅ DMS: migra databases com mínimo downtime. Homogeneous (Oracle→Oracle): direto. Heterogeneous (Oracle→Aurora): usa SCT (Schema Conversion Tool) primeiro. CDC (Change Data Capture) para replicação contínua durante cutover.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_053',
        question: "Qual framework AWS ajuda a planejar e executar migrações cloud com assessments, planejamento e execução?",
        options: [
            "Well-Architected Framework (review de arquitetura)",
            "AWS Control Tower",
            "AWS Landing Zone",
            "AWS Migration Hub + AWS Cloud Adoption Framework (CAF) — central de tracking + metodologia de migração",
        ],
        correct: [3],
        explanation: "✅ Migration Hub: painel central para rastrear progresso de migrações. CAF: framework com 6 perspectivas (Business, People, Governance, Platform, Security, Operations). 7 Rs: Rehost, Replatform, Refactor, Repurchase, Retain, Retire, Relocate.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_054',
        question: "Quais são as 7 estratégias de migração (7 Rs) para mover workloads para a cloud?",
        options: [
            "Apenas lift-and-shift",
            "Rehost (lift-shift), Replatform (lift-tinker-shift), Refactor (re-architect), Repurchase (SaaS), Retain (keep), Retire (decommission), Relocate (VMware)",
            "Apenas refactor",
            "Apenas 3 opções"
        ],
        correct: [1],
        explanation: "✅ Rehost: mover sem mudanças (EC2). Replatform: otimizações simples (RDS). Refactor: redesign para cloud-native. Repurchase: trocar por SaaS. Retain: manter on-prem (não migrar agora). Retire: desligar. Relocate: VMware Cloud on AWS.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_055',
        question: "Qual serviço AWS permite queries SQL diretamente em dados no S3 SEM provisionar servidores ou carregar em banco de dados?",
        options: [
            "Amazon Athena — serverless SQL query engine para S3. Pay per query ($5/TB scanned). Suporta CSV, JSON, Parquet, ORC",
            "Amazon RDS (requer ingestão)",
            "Amazon Redshift (requires cluster)",
            "Amazon DynamoDB (NoSQL, não SQL em S3)"
        ],
        correct: [0],
        explanation: "✅ Athena: serverless, schema-on-read. Formats: CSV, JSON, Parquet, ORC, Avro. Integra com Glue Data Catalog (schema). Use cases: ad-hoc queries em logs, analytics em data lake. Partitioning reduz custo (menos dados scanned).",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_056',
        question: "Qual serviço AWS fornece data warehouse para analytics em PETABYTES de dados com queries complexas?",
        options: [
            "Amazon RDS (OLTP, não analytics)",
            "Amazon DynamoDB (OLTP NoSQL)",
            "Amazon Redshift — data warehouse columnar, MPP (massively parallel processing), queries em PB, integra com S3/Athena/QuickSight",
            "Amazon Aurora (OLTP relacional)"
        ],
        correct: [2],
        explanation: "✅ Redshift: columnar storage (analytics otimizado), MPP, compression. Redshift Spectrum: query S3 diretamente sem carregar. Serverless option: auto-scales. Use: BI dashboards, reports complexos, historical analysis.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_057',
        question: "Qual serviço AWS fornece ETL (Extract, Transform, Load) serverless para preparar dados para analytics?",
        options: [
            "Amazon Athena (query, não transform)",
            "Amazon Redshift (warehouse)",
            "Amazon Kinesis (streaming)",
            "AWS Glue — ETL serverless + Data Catalog (metadados). Crawlers descobrem schema automaticamente. Spark-based jobs",
        ],
        correct: [3],
        explanation: "✅ Glue: ETL serverless. Crawlers: descobrem schema de S3/RDS e populam Data Catalog. Jobs: Spark/Python para transformar dados. Data Catalog: metadados centralizados usado por Athena, Redshift Spectrum, EMR.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_058',
        question: "Qual serviço AWS permite criar dashboards interativos de BI (Business Intelligence) com ML-powered insights?",
        options: [
            "Amazon CloudWatch Dashboards (ops, não BI)",
            "Amazon QuickSight — serverless BI com visualizações, ML insights (anomaly detection, forecasting), pagamento per-session",
            "Amazon Athena (query engine, não visualização)",
            "AWS Glue (ETL)"
        ],
        correct: [1],
        explanation: "✅ QuickSight: serverless BI. SPICE engine (in-memory, fast). ML insights: anomaly detection, forecasting, narratives. Embed in apps. Data sources: Redshift, RDS, Athena, S3, SaaS. Pay per session (reader) ou user (author).",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_059',
        question: "Qual serviço AWS usa ML para extrair texto, dados e tabelas de documentos escaneados (PDFs, imagens)?",
        options: [
            "Amazon Textract — OCR + ML para extrair texto, formulários e tabelas de documentos automaticamente",
            "Amazon Rekognition (imagens e vídeo)",
            "Amazon Comprehend (NLP em texto)",
            "Amazon Translate"
        ],
        correct: [0],
        explanation: "✅ Textract: vai além de OCR simples. Detecta: texto (handwritten + printed), forms (key-value pairs), tables (com estrutura). Use cases: processar faturas, tax forms, medical records, passaportes automaticamente.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_060',
        question: "Qual serviço AWS fornece recomendações personalizadas (como Amazon.com) usando ML sem precisar de expertise em ML?",
        options: [
            "Amazon SageMaker (requer ML expertise)",
            "Amazon Personalize — ML service que gera recomendações personalizadas em tempo real sem precisar construir modelos do zero",
            "Amazon Comprehend (NLP)",
            "Amazon Forecast (previsão temporal)"
        ],
        correct: [1],
        explanation: "✅ Personalize: same tech as Amazon.com. Input: user interactions data. Output: personalized recommendations, search re-ranking, customized emails. Sem ML expertise. Também: Forecast (time-series), Comprehend (NLP), Kendra (search).",
        topic: "technology",
        domain: "technology"
    }
];

technologyQuestions.push(...technologyLote7);
