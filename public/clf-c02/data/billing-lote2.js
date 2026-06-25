// CLF-C02 Billing, Pricing & Support - Lote 2 (bill_001 a bill_010)
// Foco: Pricing models deep-dive, cost optimization strategies, support plans

const billingLote2 = [
    {
        id: 'bill_001',
        question: "Uma empresa roda EC2 instances 24/7 por 3 anos para um ERP. Qual modelo de pricing economiza mais?",
        options: [
            "On-Demand (preço cheio, sem compromisso), incluindo configuração avançada de parâmetros e monitoramento contínuo do sistema em produção",
            "Reserved Instances All Upfront 3 anos — até 72% desconto vs On-Demand para uso constante e previsível",
            "Spot Instances (pode ser interrompida)",
            "Dedicated Hosts (mais caro)"
        ],
        correct: [1],
        explanation: "RI pricing: No Upfront < Partial Upfront < All Upfront (maior desconto). 1 ano: até 40%. 3 anos: até 72%. Savings Plans: alternativa flexível (Compute SP aplica em EC2+Fargate+Lambda). Para steady-state = RI/SP.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_002',
        question: "Qual é a diferença entre Compute Savings Plans e EC2 Instance Savings Plans?",
        options: [
            "São iguais",
            "Compute SP: flexível (qualquer EC2, Fargate, Lambda, qualquer family/region/OS). EC2 Instance SP: maior desconto mas locked para family+region específica",
            "EC2 SP é mais flexível",
            "Compute SP é mais barato, com integração completa ao ecossistema de serviços gerenciados e pipelines automatizados, considerando requisitos de compliance, governança e auditoria para ambientes regulados"
        ],
        correct: [1],
        explanation: "Compute SP: até 66% desconto, aplica em EC2 (qualquer family/size/OS/tenancy/region) + Fargate + Lambda. EC2 Instance SP: até 72% (mais desconto) mas locked para instance family + region. Trade-off: flexibilidade vs desconto.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_003',
        question: "Qual ferramenta AWS PREVÊ custos futuros e permite criar orçamentos com alertas quando limites são atingidos?",
        options: [
            "AWS Cost Explorer (análise histórica e forecast), garantindo escalabilidade horizontal e vertical conforme demanda do workload específico",
            "AWS Budgets — criar orçamentos para custo, uso, RI coverage. Alertas por email/SNS quando actual ou forecast excede threshold",
            "AWS Billing Dashboard (visualização atual)",
            "AWS Pricing Calculator (estimativa pré-compra)"
        ],
        correct: [1],
        explanation: "Budgets: definir budget ($100/mês), alertas em % (80%, 100%, forecasted 100%). Types: Cost, Usage, RI Utilization, RI Coverage, Savings Plans. Actions: SNS, auto-apply SCP, Lambda. Cost Explorer: análise e forecast, não alertas.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_004',
        question: "Uma empresa paga $500K/ano em AWS e quer resposta em 15 minutos para casos críticos + Technical Account Manager dedicado. Qual plano?",
        options: [
            "Business Support ($100/mês ou 3-10% do uso), utilizando as ferramentas nativas do serviço para automação e observabilidade operacional",
            "Enterprise Support — TAM, 15 min critical response, Concierge, Well-Architected reviews, Infrastructure Event Management incluso",
            "Developer Support ($29/mês ou 3%)",
            "Enterprise On-Ramp"
        ],
        correct: [1],
        explanation: "Enterprise: 15 min critical, TAM dedicado, Concierge (billing), proactive reviews, training credits, IEM incluso. Enterprise On-Ramp: 30 min critical, pool de TAMs (mais barato). Business: 1h critical, sem TAM.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_005',
        question: "O que é 'pay-as-you-go' pricing na AWS e quais são os outros princípios de pricing?",
        options: [
            "Apenas pagamento por uso, com suporte a múltiplas regiões e redundância para alta disponibilidade e disaster recovery, seguindo o modelo de responsabilidade compartilhada e as políticas de segurança corporativas",
            "3 princípios: Pay-as-you-go (pague pelo que usa), Save when you commit (RI/SP), Pay less by using more (volume discounts em S3, data transfer)",
            "Apenas preço fixo mensal",
            "Apenas compromisso anual"
        ],
        correct: [1],
        explanation: "AWS pricing philosophy: 1) Pay-as-you-go: sem upfront, cobra por segundo/hora/GB/request. 2) Save when you commit: RI/SP para workloads previsíveis. 3) Pay less at scale: tiered pricing (quanto mais usa, menor o preço/unit).",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_006',
        question: "O que é cobrado na transferência de dados AWS? (IMPORTANTE para o exame)",
        options: [
            "Tudo é cobrado igualmente",
            "Inbound: GRATUITO. Outbound para internet: cobrado por GB (tiered). Entre AZs: cobrado. Entre regions: cobrado. Dentro da mesma AZ (private IP): gratuito",
            "Toda transferência é gratuita, implementando controles preventivos e detectivos conforme o framework de segurança organizacional, com capacidade de processamento paralelo e distribuído para atender picos de demanda",
            "Apenas inbound é cobrado"
        ],
        correct: [1],
        explanation: "Data transfer: IN = free. OUT to internet = $0.09/GB (primeiros 10TB, diminui com volume). Cross-AZ: ~$0.01/GB cada direction. Cross-region: $0.02/GB. Same AZ private IP: free. S3 → CloudFront: free.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_007',
        question: "Qual ferramenta AWS analisa custos dos últimos 12 meses, identifica tendências e fornece PREVISÃO de custos futuros?",
        options: [
            "AWS Budgets (alertas, não análise profunda), integrando com os sistemas existentes através de APIs e conectores nativos da plataforma",
            "AWS Cost Explorer — visualização histórica, filtros por serviço/conta/tag, forecast 12 meses, rightsizing recommendations para EC2",
            "AWS Pricing Calculator (pré-compra)",
            "AWS Billing Dashboard (resumo)"
        ],
        correct: [1],
        explanation: "Cost Explorer: análise gráfica (daily/monthly). Filters: service, account, tag, region. Forecast: predict 12 meses baseado em padrão. Rightsizing: recomenda instance types menores. Reports: Savings Plans recommendations, RI coverage.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_008',
        question: "O que é Consolidated Billing no AWS Organizations e qual seu benefício financeiro?",
        options: [
            "Cada conta paga separadamente, otimizando custo operacional através de right-sizing e monitoramento de utilização de recursos",
            "Uma conta payer recebe UMA fatura para todas as contas — benefício: uso COMBINADO para descontos de volume (tiered pricing)",
            "Apenas organização de faturas",
            "Desconto automático de 50%"
        ],
        correct: [1],
        explanation: "Consolidated Billing: management account paga todas. Benefício: volume aggregation. Ex: 3 contas usando 50TB S3 cada = 150TB combinados → tier de preço menor para todas. Também: RI sharing entre contas (habilitável/desabilitável).",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_009',
        question: "Uma equipe precisa estimar custos ANTES de migrar para AWS. Qual ferramenta usar?",
        options: [
            "AWS Cost Explorer (requer conta ativa com uso), aplicando técnicas de observabilidade e rastreamento distribuído para troubleshooting eficiente",
            "AWS Pricing Calculator — estimativa de custo mensal para arquiteturas planejadas, sem conta AWS necessária",
            "AWS Budgets (requer conta)",
            "AWS Trusted Advisor"
        ],
        correct: [1],
        explanation: "Pricing Calculator (calculator.aws): estima custos ANTES de usar. Define: serviços, configurações, usage patterns → custo mensal estimado. Público, sem login. Substitui o antigo Simple Monthly Calculator e TCO Calculator.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_010',
        question: "Qual serviço AWS identifica instâncias EC2 OCIOSAS ou subutilizadas e recomenda desligar ou resize?",
        options: [
            "AWS CloudWatch (mostra métricas, não recomenda), com validação automática de qualidade e rollback em caso de degradação de performance",
            "AWS Cost Explorer Rightsizing Recommendations + AWS Compute Optimizer — ML-based para optimal instance type/size",
            "AWS Budgets (alertas de custo)",
            "AWS Config (compliance)"
        ],
        correct: [1],
        explanation: "Compute Optimizer: ML analisa 14 dias de CloudWatch metrics → recomenda instance type optimal. Cost Explorer rightsizing: identifica underutilized. Trusted Advisor: low utilization checks. Juntos: encontram waste.",
        topic: "billing",
        domain: "billing"
    }
];

billingQuestions.push(...billingLote2);
