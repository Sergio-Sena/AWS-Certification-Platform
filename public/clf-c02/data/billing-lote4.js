// CLF-C02 Billing, Pricing & Support - Lote 4 (bill_021 a bill_026)
// Foco: FinOps avançado, Enterprise features, pricing models específicos

const billingLote4 = [
    {
        id: 'bill_021',
        question: "Qual é a diferença entre AWS Budgets e AWS Cost Anomaly Detection?",
        options: [
            "Budgets: alertas em THRESHOLDS definidos manualmente. Cost Anomaly Detection: ML detecta gastos ANÔMALOS automaticamente sem configurar thresholds",
            "São o mesmo serviço",
            "Anomaly Detection é mais caro",
            "Budgets usa ML"
        ],
        correct: [0],
        explanation: "✅ Budgets: 'avise quando passar de $1000'. Anomaly Detection: 'avise quando o gasto for diferente do padrão normal' (ex: spike inesperado de 300% em Lambda). ML aprende o padrão e alerta desvios. Complementares.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_022',
        question: "Uma empresa quer que instâncias Reserved que não estão sendo usadas em uma conta sejam aproveitadas por OUTRA conta. É possível?",
        options: [
            "Não, RIs são sempre locked na conta",
            "Apenas com Enterprise Support",
            "Sim — RI sharing via Organizations Consolidated Billing. RIs são compartilhadas entre contas linked (pode desabilitar por conta)",
            "Apenas transferindo a RI manualmente"
        ],
        correct: [2],
        explanation: "✅ RI/SP sharing: habilitado por padrão no Consolidated Billing. Se conta A tem RI não usada e conta B tem instância matching → desconto aplica em B. Pode desabilitar sharing por conta se necessário (ex: chargeback preciso).",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_023',
        question: "Qual modelo de pricing do S3 cobra ZERO por retrieval mas tem custo de storage maior?",
        options: [
            "S3 Glacier (cobra por retrieval + storage barato)",
            "S3 One Zone-IA",
            "S3 Deep Archive (cheapest storage + retrieval caro)",
            "S3 Standard — sem retrieval fee, sem minimum storage duration, custo de storage mais alto (~$0.023/GB). Ideal para acesso frequente",
        ],
        correct: [3],
        explanation: "✅ S3 pricing trade-off: Standard = storage caro + retrieval grátis. IA/Glacier = storage barato + retrieval cobrado + minimum duration. Escolha baseada em access pattern: frequente → Standard, raro → IA/Glacier.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_024',
        question: "O que é AWS Enterprise Support On-Ramp e como difere do Enterprise completo?",
        options: [
            "É o mesmo que Enterprise",
            "Enterprise On-Ramp: 30 min critical response, pool de TAMs (não dedicado), custo menor. Enterprise Full: 15 min, TAM dedicado, Concierge, mais proactive services",
            "On-Ramp é mais caro",
            "On-Ramp não tem TAM"
        ],
        correct: [1],
        explanation: "✅ On-Ramp: para empresas que precisam de mais que Business mas não justificam Enterprise full. 30min critical (vs 15min). Pool de TAMs (vs dedicado). Sem Concierge. Custo: 10% do spend (vs 15% com mínimos).",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_025',
        question: "Uma empresa percebe alto custo de data transfer ENTRE AZs. Qual estratégia para reduzir?",
        options: [
            "Usar VPC endpoints + placement groups quando possível + cache local (ElastiCache) + avaliar se comunicação cross-AZ é necessária para cada componente",
            "Mover tudo para uma AZ (perde HA)",
            "Desabilitar Multi-AZ completamente",
            "Usar S3 para toda comunicação"
        ],
        correct: [0],
        explanation: "✅ Cross-AZ transfer: ~$0.01/GB cada direction. Otimizar: 1) Cache local (reduz calls), 2) VPC endpoints (grátis para S3/DynamoDB), 3) Compress data, 4) Placement groups (same AZ para compute-heavy). Nunca sacrificar HA apenas por custo.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_026',
        question: "Quais checks de Trusted Advisor estão disponíveis para TODOS os clientes AWS (incluindo Basic Support)?",
        options: [
            "Todos os 400+ checks",
            "7 core checks: S3 bucket permissions, Security Groups, IAM use, MFA on root, EBS snapshots (public), RDS snapshots (public), service limits",
            "Nenhum check gratuito",
            "Apenas cost checks"
        ],
        correct: [1],
        explanation: "✅ Basic/Developer: 7 core checks (6 security + service limits). Business/Enterprise: TODOS os checks (cost optimization, performance, fault tolerance, etc) + API access + CloudWatch integration + weekly email report.",
        topic: "billing",
        domain: "billing"
    }
];

billingQuestions.push(...billingLote4);
