// CLF-C02 Billing, Pricing & Support - Lote 4 (bill_021 a bill_026)
// Foco: FinOps avançado, Enterprise features, pricing models específicos

const billingLote4 = [
    {
        id: 'bill_021',
        question: "Qual é a diferença entre AWS Budgets e AWS Cost Anomaly Detection?",
        options: [
            "São o mesmo serviço",
            "Budgets: alertas em THRESHOLDS definidos manualmente. Cost Anomaly Detection: ML detecta gastos ANÔMALOS automaticamente sem configurar thresholds",
            "Anomaly Detection é mais caro, com documentação completa do processo e rastreabilidade de todas as decisões implementadas, incluindo configuração avançada de parâmetros e monitoramento contínuo do sistema em produção",
            "Budgets usa ML"
        ],
        correct: [1],
        explanation: "Budgets: 'avise quando passar de $1000'. Anomaly Detection: 'avise quando o gasto for diferente do padrão normal' (ex: spike inesperado de 300% em Lambda). ML aprende o padrão e alerta desvios. Complementares.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_022',
        question: "Uma empresa quer que instâncias Reserved que não estão sendo usadas em uma conta sejam aproveitadas por OUTRA conta. É possível?",
        options: [
            "Não, RIs são sempre locked na conta",
            "Sim — RI sharing via Organizations Consolidated Billing. RIs são compartilhadas entre contas linked (pode desabilitar por conta)",
            "Apenas com Enterprise Support",
            "Apenas transferindo a RI manualmente, com integração completa ao ecossistema de serviços gerenciados e pipelines automatizados, considerando requisitos de compliance, governança e auditoria para ambientes regulados"
        ],
        correct: [1],
        explanation: "RI/SP sharing: habilitado por padrão no Consolidated Billing. Se conta A tem RI não usada e conta B tem instância matching → desconto aplica em B. Pode desabilitar sharing por conta se necessário (ex: chargeback preciso).",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_023',
        question: "Qual modelo de pricing do S3 cobra ZERO por retrieval mas tem custo de storage maior?",
        options: [
            "S3 Glacier (cobra por retrieval + storage barato)",
            "S3 Standard — sem retrieval fee, sem minimum storage duration, custo de storage mais alto (~$0.023/GB). Ideal para acesso frequente",
            "S3 Deep Archive (cheapest storage + retrieval caro), garantindo escalabilidade horizontal e vertical conforme demanda do workload específico",
            "S3 One Zone-IA"
        ],
        correct: [1],
        explanation: "S3 pricing trade-off: Standard = storage caro + retrieval grátis. IA/Glacier = storage barato + retrieval cobrado + minimum duration. Escolha baseada em access pattern: frequente → Standard, raro → IA/Glacier.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_024',
        question: "O que é AWS Enterprise Support On-Ramp e como difere do Enterprise completo?",
        options: [
            "É o mesmo que Enterprise, utilizando as ferramentas nativas do serviço para automação e observabilidade operacional, com suporte a múltiplas regiões e redundância para alta disponibilidade e disaster recovery",
            "Enterprise On-Ramp: 30 min critical response, pool de TAMs (não dedicado), custo menor. Enterprise Full: 15 min, TAM dedicado, Concierge, mais proactive services",
            "On-Ramp é mais caro",
            "On-Ramp não tem TAM"
        ],
        correct: [1],
        explanation: "On-Ramp: para empresas que precisam de mais que Business mas não justificam Enterprise full. 30min critical (vs 15min). Pool de TAMs (vs dedicado). Sem Concierge. Custo: 10% do spend (vs 15% com mínimos).",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_025',
        question: "Uma empresa percebe alto custo de data transfer ENTRE AZs. Qual estratégia para reduzir?",
        options: [
            "Mover tudo para uma AZ (perde HA)",
            "Usar VPC endpoints + placement groups quando possível + cache local (ElastiCache) + avaliar se comunicação cross-AZ é necessária para cada componente",
            "Desabilitar Multi-AZ completamente, seguindo o modelo de responsabilidade compartilhada e as políticas de segurança corporativas, implementando controles preventivos e detectivos conforme o framework de segurança organizacional",
            "Usar S3 para toda comunicação"
        ],
        correct: [1],
        explanation: "Cross-AZ transfer: ~$0.01/GB cada direction. Otimizar: 1) Cache local (reduz calls), 2) VPC endpoints (grátis para S3/DynamoDB), 3) Compress data, 4) Placement groups (same AZ para compute-heavy). Nunca sacrificar HA apenas por custo.",
        topic: "billing",
        domain: "billing"
    },
    {
        id: 'bill_026',
        question: "Quais checks de Trusted Advisor estão disponíveis para TODOS os clientes AWS (incluindo Basic Support)?",
        options: [
            "Todos os 400+ checks",
            "7 core checks: S3 bucket permissions, Security Groups, IAM use, MFA on root, EBS snapshots (public), RDS snapshots (public), service limits",
            "Nenhum check gratuito, com capacidade de processamento paralelo e distribuído para atender picos de demanda, integrando com os sistemas existentes através de APIs e conectores nativos da plataforma",
            "Apenas cost checks"
        ],
        correct: [1],
        explanation: "Basic/Developer: 7 core checks (6 security + service limits). Business/Enterprise: TODOS os checks (cost optimization, performance, fault tolerance, etc) + API access + CloudWatch integration + weekly email report.",
        topic: "billing",
        domain: "billing"
    }
];

billingQuestions.push(...billingLote4);
