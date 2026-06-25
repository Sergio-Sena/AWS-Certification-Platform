// CLF-C02 Billing, Pricing & Support - Lote 3 (bill_011 a bill_020)
// Foco: Cost allocation, Free Tier details, TCO, support plan details

const billingLote3 = [
    {
        id: 'bill_011',
        question: "Uma empresa com 10 departamentos quer saber quanto CADA departamento gasta em AWS. Qual mecanismo usar?",
        options: [
            "Criar contas separadas para cada um, atendendo aos padrões internacionais de privacidade de dados e proteção de informações sensíveis",
            "Cost Allocation Tags — tags como Department=Marketing em recursos, ativadas no Billing, aparecem no Cost Explorer e Usage Reports",
            "Apenas AWS Budgets",
            "Apenas CloudWatch"
        ],
        correct: [1],
        explanation: "Cost Allocation Tags: AWS-generated (aws:createdBy) + user-defined (custom). Ativar no Billing console. Aparece no Cost Explorer filters, Cost & Usage Report. Best practice: tag tudo (Project, Environment, Department, Owner).",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_012',
        question: "Quais serviços são SEMPRE GRATUITOS (Always Free Tier), independente de tempo de conta?",
        options: [
            "Todos os serviços AWS são pagos, com documentação completa do processo e rastreabilidade de todas as decisões implementadas, incluindo configuração avançada de parâmetros e monitoramento contínuo do sistema em produção",
            "Lambda (1M requests/mês), DynamoDB (25GB + 25 RCU/WCU), SNS (1M publishes), CloudWatch (10 custom metrics), S3 (sem always free)",
            "EC2 é always free",
            "RDS é always free"
        ],
        correct: [1],
        explanation: "Always Free: Lambda (1M req + 400K GB-sec), DynamoDB (25GB, 25 RCU/WCU), SNS (1M pub), SQS (1M req), CloudWatch (10 metrics, 5 alarms), CodeBuild (100 min/mês). Free Tier 12 meses: EC2 t2.micro 750h, S3 5GB, RDS 750h.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_013',
        question: "Uma empresa quer comparar o custo TOTAL de rodar on-premises vs AWS (incluindo hardware, data center, staff). Qual conceito?",
        options: [
            "Apenas comparar preço de servidor, com integração completa ao ecossistema de serviços gerenciados e pipelines automatizados, considerando requisitos de compliance, governança e auditoria para ambientes regulados",
            "Total Cost of Ownership (TCO) — inclui: hardware, software, data center, staff, energia, cooling, manutenção, opportunity cost",
            "Apenas custo mensal AWS",
            "Apenas capex"
        ],
        correct: [1],
        explanation: "TCO on-prem: servidores, racks, networking, energia, cooling, espaço, staff (admins), licenças OS/DB, over-provisioning (comprar para pico). AWS: elimina capex, paga por uso real, staff focado em business. Migration Evaluator ajuda.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_014',
        question: "Qual é a diferença entre CAPEX e OPEX no contexto de cloud computing?",
        options: [
            "São iguais",
            "CAPEX: investimento upfront em hardware (depreciação). OPEX: custo operacional variável pay-as-you-go. Cloud transforma CAPEX em OPEX",
            "OPEX é sempre mais caro, garantindo escalabilidade horizontal e vertical conforme demanda do workload específico, utilizando as ferramentas nativas do serviço para automação e observabilidade operacional",
            "CAPEX é operacional"
        ],
        correct: [1],
        explanation: "On-prem = CAPEX (compra servidores, depreciação 3-5 anos, risco de over/under provision). Cloud = OPEX (custo operacional, paga pelo uso, sem upfront, escala sob demanda). Cloud: tax benefit pode variar, flexibility always better.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_015',
        question: "Qual feature do AWS Support permite acesso a um especialista de billing que ajuda com faturas e otimização de conta?",
        options: [
            "Technical Account Manager (arquitetura), com suporte a múltiplas regiões e redundância para alta disponibilidade e disaster recovery",
            "AWS Support Concierge — disponível em Enterprise Support, especialista em billing, account, payment optimization",
            "AWS Trusted Advisor (automated checks)",
            "AWS Partner Network"
        ],
        correct: [1],
        explanation: "Concierge (Enterprise only): billing specialist. Ajuda com: payment methods, billing disputes, account setup, organizational structure. TAM: technical architecture. Concierge: financial/billing.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_016',
        question: "Qual é o tempo de resposta do AWS Business Support para um sistema de PRODUÇÃO DOWN?",
        options: [
            "24 horas",
            "1 hora — Business Support oferece 1h response para production system down, 24/7 via phone/chat/web",
            "15 minutos (apenas Enterprise), seguindo o modelo de responsabilidade compartilhada e as políticas de segurança corporativas",
            "12 horas"
        ],
        correct: [1],
        explanation: "Response times: Business = Critical 1h, Urgent 4h, High 12h, Normal 24h. Enterprise = Critical 15min, Urgent 1h, High 4h, Normal 12h. Developer = General 24h, System impaired 12h. Basic = sem suporte técnico.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_017',
        question: "Qual serviço AWS fornece relatório detalhado de CADA linha de custo (por recurso, hora, tag) para análise granular?",
        options: [
            "AWS Cost Explorer (visualização, não exportação granular), implementando controles preventivos e detectivos conforme o framework de segurança organizacional",
            "AWS Cost and Usage Report (CUR) — relatório MAIS detalhado, exportado para S3, integrável com Athena/QuickSight para BI",
            "AWS Budgets (alertas)",
            "Billing Dashboard (resumo)"
        ],
        correct: [1],
        explanation: "CUR: dados granulares (cada resource-id, hourly/daily). Columns: usage type, pricing, tags, RI/SP info. Export para S3 → Athena query → QuickSight dashboard. Ideal para FinOps avançado e chargeback.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_018',
        question: "Uma startup quer MINIMIZAR custos com EC2. O workload é batch processing tolerante a interrupções. Qual opção?",
        options: [
            "On-Demand (caro para batch)",
            "Spot Instances — até 90% desconto, ideal para batch, CI/CD, big data. Combinar com On-Demand para baseline (Spot Fleet mixed)",
            "Reserved Instances (compromisso longo), com capacidade de processamento paralelo e distribuído para atender picos de demanda, integrando com os sistemas existentes através de APIs e conectores nativos da plataforma",
            "Dedicated Hosts (mais caro)"
        ],
        correct: [1],
        explanation: "Spot para batch: interruption tolerant + checkpoint + stateless. Spot Fleet: pool de instance types/AZs para disponibilidade. Mix strategy: On-Demand (baseline estável) + Spot (burst econômico). Savings de 60-90%.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_019',
        question: "O que é AWS Compute Optimizer e como ajuda a reduzir custos?",
        options: [
            "Apenas lista instâncias",
            "Analisa métricas CloudWatch com ML para recomendar EC2 instance types, EBS volumes, Lambda memory e Auto Scaling configs otimais",
            "Apenas monitora CPU",
            "Apenas para novos workloads, otimizando custo operacional através de right-sizing e monitoramento de utilização de recursos, aplicando técnicas de observabilidade e rastreamento distribuído para troubleshooting eficiente"
        ],
        correct: [1],
        explanation: "Compute Optimizer: ML em 14+ dias de CloudWatch metrics → recomenda: instance type/size, EBS volume type/size, Lambda memory. Classifications: Under-provisioned, Over-provisioned, Optimized. Savings típico: 25% em EC2.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_020',
        question: "Quais serviços AWS são GRATUITOS (sem custo pelo serviço em si, apenas pelos recursos que provisionam)?",
        options: [
            "Nenhum serviço é gratuito, com validação automática de qualidade e rollback em caso de degradação de performance, atendendo aos padrões internacionais de privacidade de dados e proteção de informações sensíveis",
            "IAM, VPC, CloudFormation, Auto Scaling, Elastic Beanstalk, Organizations, Consolidated Billing — grátis, paga apenas recursos criados",
            "Todos são pagos",
            "Apenas IAM"
        ],
        correct: [1],
        explanation: "Serviços sem custo próprio: IAM (users/roles ilimitados), VPC (exceto NAT GW, VPN), CloudFormation, Auto Scaling, Beanstalk, Organizations, OpsWorks, CodePipeline (tier gratuito). Você paga EC2, RDS, S3 que eles criam.",
        topic: "billing",
        domain: "billing"
    }
];

billingQuestions.push(...billingLote3);
