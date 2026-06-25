// CLF-C02 Billing, Pricing & Support - Lote 3 (bill_011 a bill_020)
// Foco: Cost allocation, Free Tier details, TCO, support plan details

const billingLote3 = [
    {
        id: 'bill_011',
        question: "Uma empresa com 10 departamentos quer saber quanto CADA departamento gasta em AWS. Qual mecanismo usar?",
        options: [
            "Cost Allocation Tags — tags como Department=Marketing em recursos, ativadas no Billing, aparecem no Cost Explorer e Usage Reports",
            "Criar contas separadas para cada um",
            "Apenas AWS Budgets",
            "Apenas CloudWatch"
        ],
        correct: [0],
        explanation: "✅ Cost Allocation Tags: AWS-generated (aws:createdBy) + user-defined (custom). Ativar no Billing console. Aparece no Cost Explorer filters, Cost & Usage Report. Best practice: tag tudo (Project, Environment, Department, Owner).",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_012',
        question: "Quais serviços são SEMPRE GRATUITOS (Always Free Tier), independente de tempo de conta?",
        options: [
            "Todos os serviços AWS são pagos",
            "EC2 é always free",
            "Lambda (1M requests/mês), DynamoDB (25GB + 25 RCU/WCU), SNS (1M publishes), CloudWatch (10 custom metrics), S3 (sem always free)",
            "RDS é always free"
        ],
        correct: [2],
        explanation: "✅ Always Free: Lambda (1M req + 400K GB-sec), DynamoDB (25GB, 25 RCU/WCU), SNS (1M pub), SQS (1M req), CloudWatch (10 metrics, 5 alarms), CodeBuild (100 min/mês). Free Tier 12 meses: EC2 t2.micro 750h, S3 5GB, RDS 750h.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_013',
        question: "Uma empresa quer comparar o custo TOTAL de rodar on-premises vs AWS (incluindo hardware, data center, staff). Qual conceito?",
        options: [
            "Apenas comparar preço de servidor",
            "Apenas capex",
            "Apenas custo mensal AWS",
            "Total Cost of Ownership (TCO) — inclui: hardware, software, data center, staff, energia, cooling, manutenção, opportunity cost",
        ],
        correct: [3],
        explanation: "✅ TCO on-prem: servidores, racks, networking, energia, cooling, espaço, staff (admins), licenças OS/DB, over-provisioning (comprar para pico). AWS: elimina capex, paga por uso real, staff focado em business. Migration Evaluator ajuda.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_014',
        question: "Qual é a diferença entre CAPEX e OPEX no contexto de cloud computing?",
        options: [
            "São iguais",
            "CAPEX: investimento upfront em hardware (depreciação). OPEX: custo operacional variável pay-as-you-go. Cloud transforma CAPEX em OPEX",
            "OPEX é sempre mais caro",
            "CAPEX é operacional"
        ],
        correct: [1],
        explanation: "✅ On-prem = CAPEX (compra servidores, depreciação 3-5 anos, risco de over/under provision). Cloud = OPEX (custo operacional, paga pelo uso, sem upfront, escala sob demanda). Cloud: tax benefit pode variar, flexibility always better.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_015',
        question: "Qual feature do AWS Support permite acesso a um especialista de billing que ajuda com faturas e otimização de conta?",
        options: [
            "AWS Support Concierge — disponível em Enterprise Support, especialista em billing, account, payment optimization",
            "Technical Account Manager (arquitetura)",
            "AWS Trusted Advisor (automated checks)",
            "AWS Partner Network"
        ],
        correct: [0],
        explanation: "✅ Concierge (Enterprise only): billing specialist. Ajuda com: payment methods, billing disputes, account setup, organizational structure. TAM: technical architecture. Concierge: financial/billing.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_016',
        question: "Qual é o tempo de resposta do AWS Business Support para um sistema de PRODUÇÃO DOWN?",
        options: [
            "24 horas",
            "15 minutos (apenas Enterprise)",
            "1 hora — Business Support oferece 1h response para production system down, 24/7 via phone/chat/web",
            "12 horas"
        ],
        correct: [2],
        explanation: "✅ Response times: Business = Critical 1h, Urgent 4h, High 12h, Normal 24h. Enterprise = Critical 15min, Urgent 1h, High 4h, Normal 12h. Developer = General 24h, System impaired 12h. Basic = sem suporte técnico.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_017',
        question: "Qual serviço AWS fornece relatório detalhado de CADA linha de custo (por recurso, hora, tag) para análise granular?",
        options: [
            "AWS Cost Explorer (visualização, não exportação granular)",
            "Billing Dashboard (resumo)",
            "AWS Budgets (alertas)",
            "AWS Cost and Usage Report (CUR) — relatório MAIS detalhado, exportado para S3, integrável com Athena/QuickSight para BI",
        ],
        correct: [3],
        explanation: "✅ CUR: dados granulares (cada resource-id, hourly/daily). Columns: usage type, pricing, tags, RI/SP info. Export para S3 → Athena query → QuickSight dashboard. Ideal para FinOps avançado e chargeback.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_018',
        question: "Uma startup quer MINIMIZAR custos com EC2. O workload é batch processing tolerante a interrupções. Qual opção?",
        options: [
            "On-Demand (caro para batch)",
            "Spot Instances — até 90% desconto, ideal para batch, CI/CD, big data. Combinar com On-Demand para baseline (Spot Fleet mixed)",
            "Reserved Instances (compromisso longo)",
            "Dedicated Hosts (mais caro)"
        ],
        correct: [1],
        explanation: "✅ Spot para batch: interruption tolerant + checkpoint + stateless. Spot Fleet: pool de instance types/AZs para disponibilidade. Mix strategy: On-Demand (baseline estável) + Spot (burst econômico). Savings de 60-90%.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_019',
        question: "O que é AWS Compute Optimizer e como ajuda a reduzir custos?",
        options: [
            "Analisa métricas CloudWatch com ML para recomendar EC2 instance types, EBS volumes, Lambda memory e Auto Scaling configs otimais",
            "Apenas lista instâncias",
            "Apenas monitora CPU",
            "Apenas para novos workloads"
        ],
        correct: [0],
        explanation: "✅ Compute Optimizer: ML em 14+ dias de CloudWatch metrics → recomenda: instance type/size, EBS volume type/size, Lambda memory. Classifications: Under-provisioned, Over-provisioned, Optimized. Savings típico: 25% em EC2.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_020',
        question: "Quais serviços AWS são GRATUITOS (sem custo pelo serviço em si, apenas pelos recursos que provisionam)?",
        options: [
            "Nenhum serviço é gratuito",
            "IAM, VPC, CloudFormation, Auto Scaling, Elastic Beanstalk, Organizations, Consolidated Billing — grátis, paga apenas recursos criados",
            "Todos são pagos",
            "Apenas IAM"
        ],
        correct: [1],
        explanation: "✅ Serviços sem custo próprio: IAM (users/roles ilimitados), VPC (exceto NAT GW, VPN), CloudFormation, Auto Scaling, Beanstalk, Organizations, OpsWorks, CodePipeline (tier gratuito). Você paga EC2, RDS, S3 que eles criam.",
        topic: "billing",
        domain: "billing"
    }
];

billingQuestions.push(...billingLote3);
