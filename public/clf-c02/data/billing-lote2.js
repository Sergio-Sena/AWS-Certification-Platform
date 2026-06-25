// CLF-C02 Billing, Pricing & Support - Lote 2 (bill_001 a bill_010)
// Foco: Pricing models deep-dive, cost optimization strategies, support plans

const billingLote2 = [
    {
        id: 'bill_001',
        question: "Uma empresa roda EC2 instances 24/7 por 3 anos para um ERP. Qual modelo de pricing economiza mais?",
        options: [
            "Reserved Instances All Upfront 3 anos — até 72% desconto vs On-Demand para uso constante e previsível",
            "On-Demand (preço cheio, sem compromisso)",
            "Spot Instances (pode ser interrompida)",
            "Dedicated Hosts (mais caro)"
        ],
        correct: [0],
        explanation: "✅ RI pricing: No Upfront < Partial Upfront < All Upfront (maior desconto). 1 ano: até 40%. 3 anos: até 72%. Savings Plans: alternativa flexível (Compute SP aplica em EC2+Fargate+Lambda). Para steady-state = RI/SP.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_002',
        question: "Qual é a diferença entre Compute Savings Plans e EC2 Instance Savings Plans?",
        options: [
            "São iguais",
            "EC2 SP é mais flexível",
            "Compute SP: flexível (qualquer EC2, Fargate, Lambda, qualquer family/region/OS). EC2 Instance SP: maior desconto mas locked para family+region específica",
            "Compute SP é mais barato"
        ],
        correct: [2],
        explanation: "✅ Compute SP: até 66% desconto, aplica em EC2 (qualquer family/size/OS/tenancy/region) + Fargate + Lambda. EC2 Instance SP: até 72% (mais desconto) mas locked para instance family + region. Trade-off: flexibilidade vs desconto.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_003',
        question: "Qual ferramenta AWS PREVÊ custos futuros e permite criar orçamentos com alertas quando limites são atingidos?",
        options: [
            "AWS Cost Explorer (análise histórica e forecast)",
            "AWS Pricing Calculator (estimativa pré-compra)",
            "AWS Billing Dashboard (visualização atual)",
            "AWS Budgets — criar orçamentos para custo, uso, RI coverage. Alertas por email/SNS quando actual ou forecast excede threshold",
        ],
        correct: [3],
        explanation: "✅ Budgets: definir budget ($100/mês), alertas em % (80%, 100%, forecasted 100%). Types: Cost, Usage, RI Utilization, RI Coverage, Savings Plans. Actions: SNS, auto-apply SCP, Lambda. Cost Explorer: análise e forecast, não alertas.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_004',
        question: "Uma empresa paga $500K/ano em AWS e quer resposta em 15 minutos para casos críticos + Technical Account Manager dedicado. Qual plano?",
        options: [
            "Business Support ($100/mês ou 3-10% do uso)",
            "Enterprise Support — TAM, 15 min critical response, Concierge, Well-Architected reviews, Infrastructure Event Management incluso",
            "Developer Support ($29/mês ou 3%)",
            "Enterprise On-Ramp"
        ],
        correct: [1],
        explanation: "✅ Enterprise: 15 min critical, TAM dedicado, Concierge (billing), proactive reviews, training credits, IEM incluso. Enterprise On-Ramp: 30 min critical, pool de TAMs (mais barato). Business: 1h critical, sem TAM.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_005',
        question: "O que é 'pay-as-you-go' pricing na AWS e quais são os outros princípios de pricing?",
        options: [
            "3 princípios: Pay-as-you-go (pague pelo que usa), Save when you commit (RI/SP), Pay less by using more (volume discounts em S3, data transfer)",
            "Apenas pagamento por uso",
            "Apenas preço fixo mensal",
            "Apenas compromisso anual"
        ],
        correct: [0],
        explanation: "✅ AWS pricing philosophy: 1) Pay-as-you-go: sem upfront, cobra por segundo/hora/GB/request. 2) Save when you commit: RI/SP para workloads previsíveis. 3) Pay less at scale: tiered pricing (quanto mais usa, menor o preço/unit).",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_006',
        question: "O que é cobrado na transferência de dados AWS? (IMPORTANTE para o exame)",
        options: [
            "Tudo é cobrado igualmente",
            "Toda transferência é gratuita",
            "Inbound: GRATUITO. Outbound para internet: cobrado por GB (tiered). Entre AZs: cobrado. Entre regions: cobrado. Dentro da mesma AZ (private IP): gratuito",
            "Apenas inbound é cobrado"
        ],
        correct: [2],
        explanation: "✅ Data transfer: IN = free. OUT to internet = $0.09/GB (primeiros 10TB, diminui com volume). Cross-AZ: ~$0.01/GB cada direction. Cross-region: $0.02/GB. Same AZ private IP: free. S3 → CloudFront: free.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_007',
        question: "Qual ferramenta AWS analisa custos dos últimos 12 meses, identifica tendências e fornece PREVISÃO de custos futuros?",
        options: [
            "AWS Budgets (alertas, não análise profunda)",
            "AWS Billing Dashboard (resumo)",
            "AWS Pricing Calculator (pré-compra)",
            "AWS Cost Explorer — visualização histórica, filtros por serviço/conta/tag, forecast 12 meses, rightsizing recommendations para EC2",
        ],
        correct: [3],
        explanation: "✅ Cost Explorer: análise gráfica (daily/monthly). Filters: service, account, tag, region. Forecast: predict 12 meses baseado em padrão. Rightsizing: recomenda instance types menores. Reports: Savings Plans recommendations, RI coverage.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_008',
        question: "O que é Consolidated Billing no AWS Organizations e qual seu benefício financeiro?",
        options: [
            "Cada conta paga separadamente",
            "Uma conta payer recebe UMA fatura para todas as contas — benefício: uso COMBINADO para descontos de volume (tiered pricing)",
            "Apenas organização de faturas",
            "Desconto automático de 50%"
        ],
        correct: [1],
        explanation: "✅ Consolidated Billing: management account paga todas. Benefício: volume aggregation. Ex: 3 contas usando 50TB S3 cada = 150TB combinados → tier de preço menor para todas. Também: RI sharing entre contas (habilitável/desabilitável).",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_009',
        question: "Uma equipe precisa estimar custos ANTES de migrar para AWS. Qual ferramenta usar?",
        options: [
            "AWS Pricing Calculator — estimativa de custo mensal para arquiteturas planejadas, sem conta AWS necessária",
            "AWS Cost Explorer (requer conta ativa com uso)",
            "AWS Budgets (requer conta)",
            "AWS Trusted Advisor"
        ],
        correct: [0],
        explanation: "✅ Pricing Calculator (calculator.aws): estima custos ANTES de usar. Define: serviços, configurações, usage patterns → custo mensal estimado. Público, sem login. Substitui o antigo Simple Monthly Calculator e TCO Calculator.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_010',
        question: "Qual serviço AWS identifica instâncias EC2 OCIOSAS ou subutilizadas e recomenda desligar ou resize?",
        options: [
            "AWS CloudWatch (mostra métricas, não recomenda)",
            "AWS Cost Explorer Rightsizing Recommendations + AWS Compute Optimizer — ML-based para optimal instance type/size",
            "AWS Budgets (alertas de custo)",
            "AWS Config (compliance)"
        ],
        correct: [1],
        explanation: "✅ Compute Optimizer: ML analisa 14 dias de CloudWatch metrics → recomenda instance type optimal. Cost Explorer rightsizing: identifica underutilized. Trusted Advisor: low utilization checks. Juntos: encontram waste.",
        topic: "billing",
        domain: "billing"
    }
];

billingQuestions.push(...billingLote2);
