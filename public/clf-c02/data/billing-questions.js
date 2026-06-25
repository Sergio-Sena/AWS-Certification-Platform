// DOMAIN 4: BILLING, PRICING & SUPPORT - 22 questões adicionais (12% total = 24 questões)

const billingQuestions = [
    {
        id: 179,
        question: "Uma empresa de médio porte precisa de suporte AWS 24/7 para aplicações críticas em produção, mas não precisa de Technical Account Manager. Qual nível de suporte é mais adequado?",
        options: ["Basic Support (gratuito)", "Developer Support", "Business Support", "Enterprise Support"],
        options: [
            "Suporte técnico 24/7, documentação, whitepapers, fóruns",
            "Apenas documentação",
            "Suporte técnico limitado",
            "Todos os recursos"
        ],
        correct: [0],
        explanation: "✅ Basic Support inclui documentação, whitepapers, fóruns de suporte e AWS Personal Health Dashboard.",
        topic: "billing", domain: "billing"
    },
    {
        id: 181,
        question: "Qual ferramenta AWS monitora custos em tempo real?",
        options: ["AWS Cost Explorer", "AWS Budgets", "AWS Billing Dashboard", "AWS Pricing Calculator"],
        options: [
            "Monitor de performance",
            "Calculadora de preços",
            "Ferramenta para visualizar e analisar custos históricos",
            "Ferramenta de backup"
        ],
        correct: [2],
        explanation: "✅ Cost Explorer permite visualizar, entender e gerenciar custos AWS ao longo do tempo.",
        topic: "billing", domain: "billing"
    },
    {
        id: 183,
        question: "Para que serve o AWS Budgets?",
        options: [
            "Fazer backup",
            "Calcular preços",
            "Monitorar performance",
            "Definir alertas de custo e uso",
        ],
        correct: [3],
        explanation: "✅ AWS Budgets permite definir orçamentos personalizados e receber alertas quando custos excedem limites.",
        topic: "billing", domain: "billing"
    },
    {
        id: 184,
        question: "O que são Reserved Instances?",
        options: [
            "Instâncias gratuitas",
            "Instâncias com desconto por compromisso de uso",
            "Instâncias temporárias",
            "Instâncias de backup"
        ],
        correct: [1],
        explanation: "✅ Reserved Instances oferecem desconto significativo em troca de compromisso de uso de 1 ou 3 anos.",
        topic: "billing", domain: "billing"
    },
    {
        id: 185,
        question: "Qual é a diferença entre On-Demand e Spot Instances?",
        options: [
            "On-Demand tem preço fixo, Spot tem preço variável com desconto",
            "Não há diferença",
            "Spot é mais caro",
            "On-Demand é mais lento"
        ],
        correct: [0],
        explanation: "✅ On-Demand tem preço fixo por hora, Spot oferece capacidade não utilizada com desconto mas pode ser interrompida.",
        topic: "billing", domain: "billing"
    },
    {
        id: 186,
        question: "O que são Savings Plans?",
        options: [
            "Planos de segurança",
            "Planos de backup",
            "Modelo de preços flexível com desconto por compromisso de uso",
            "Planos de performance"
        ],
        correct: [2],
        explanation: "✅ Savings Plans oferecem preços mais baixos em troca de compromisso de uso consistente por 1 ou 3 anos.",
        topic: "billing", domain: "billing"
    },
    {
        id: 187,
        question: "Qual ferramenta AWS recomenda otimizações de custo?",
        options: ["AWS Trusted Advisor", "AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator"],
        options: [
            "Organização de regiões",
            "Organização de recursos",
            "Organização de usuários",
            "Faturamento consolidado para múltiplas contas",
        ],
        correct: [3],
        explanation: "✅ Organizations permite faturamento consolidado, combinando uso de múltiplas contas para descontos por volume.",
        topic: "billing", domain: "billing"
    },
    {
        id: 189,
        question: "Quais fatores afetam o preço do Amazon S3?",
        options: [
            "Apenas armazenamento",
            "Armazenamento, requests, transferência de dados",
            "Apenas requests",
            "Apenas transferência"
        ],
        correct: [1],
        explanation: "✅ S3 cobra por armazenamento usado, número de requests e transferência de dados para fora da AWS.",
        topic: "billing", domain: "billing"
    },
    {
        id: 190,
        question: "O que é AWS Free Tier?",
        options: [
            "Uso gratuito limitado de serviços AWS",
            "Todos os serviços gratuitos",
            "Apenas EC2 gratuito",
            "Apenas S3 gratuito"
        ],
        correct: [0],
        explanation: "✅ Free Tier oferece uso limitado gratuito de muitos serviços AWS por 12 meses para novos clientes.",
        topic: "billing", domain: "billing"
    },
    {
        id: 191,
        question: "Quais são os tipos de AWS Free Tier?",
        options: [
            "Apenas sempre gratuito",
            "Apenas 12 meses",
            "12 meses gratuitos, sempre gratuito, trials",
            "Apenas trials"
        ],
        correct: [2],
        explanation: "✅ Free Tier inclui: 12 meses gratuitos para novos clientes, sempre gratuito para certos serviços, e trials de curto prazo.",
        topic: "billing", domain: "billing"
    },
    {
        id: 192,
        question: "O que é data transfer pricing na AWS?",
        options: [
            "Sem cobrança por transferência",
            "Cobrança apenas por armazenamento",
            "Cobrança apenas por compute",
            "Cobrança por transferência de dados entre regiões e para internet",
        ],
        correct: [3],
        explanation: "✅ AWS cobra por transferência de dados entre regiões, AZs (em alguns casos) e para a internet.",
        topic: "billing", domain: "billing"
    },
    {
        id: 193,
        question: "Qual é o modelo de preços do AWS Lambda?",
        options: [
            "Preço fixo mensal",
            "Pay-per-request e duração de execução",
            "Apenas por requests",
            "Apenas por duração"
        ],
        correct: [1],
        explanation: "✅ Lambda cobra por número de requests e duração de execução (GB-segundo).",
        topic: "billing", domain: "billing"
    },
    {
        id: 194,
        question: "O que são tags de custo na AWS?",
        options: [
            "Etiquetas para rastrear e alocar custos",
            "Tags de segurança",
            "Tags de performance",
            "Tags de backup"
        ],
        correct: [0],
        explanation: "✅ Cost allocation tags permitem categorizar e rastrear custos AWS por projeto, departamento ou ambiente.",
        topic: "billing", domain: "billing"
    },
    {
        id: 195,
        question: "Qual é o benefício do AWS Cost and Usage Report?",
        options: [
            "Apenas uso básico",
            "Apenas custos básicos",
            "Relatório detalhado de custos e uso",
            "Relatório de performance"
        ],
        correct: [2],
        explanation: "✅ Cost and Usage Report fornece dados detalhados sobre custos e uso AWS para análise aprofundada.",
        topic: "billing", domain: "billing"
    },
    {
        id: 196,
        question: "O que é AWS Support API?",
        options: [
            "API para backup",
            "API para faturamento",
            "API para monitoramento",
            "API para acessar casos de suporte programaticamente",
        ],
        correct: [3],
        explanation: "✅ Support API permite criar e gerenciar casos de suporte AWS programaticamente.",
        topic: "billing", domain: "billing"
    },
    {
        id: 197,
        question: "Qual é a diferença entre Business e Enterprise Support?",
        options: [
            "Não há diferença",
            "Enterprise inclui Technical Account Manager e resposta mais rápida",
            "Business é mais caro",
            "Enterprise é apenas para grandes empresas"
        ],
        correct: [1],
        explanation: "✅ Enterprise Support inclui TAM dedicado, resposta em 15 minutos para casos críticos e revisões arquiteturais.",
        topic: "billing", domain: "billing"
    },
    {
        id: 198,
        question: "O que é AWS Personal Health Dashboard?",
        options: [
            "Visão personalizada da saúde dos serviços AWS",
            "Dashboard de custos",
            "Dashboard de performance",
            "Dashboard de segurança"
        ],
        correct: [0],
        explanation: "✅ Personal Health Dashboard fornece alertas e orientações quando eventos AWS podem impactar seus recursos.",
        topic: "billing", domain: "billing"
    },
    {
        id: 199,
        question: "Qual é o propósito do AWS Well-Architected Tool?",
        options: [
            "Monitorar performance",
            "Calcular custos",
            "Revisar arquiteturas contra melhores práticas AWS",
            "Gerenciar usuários"
        ],
        correct: [2],
        explanation: "✅ Well-Architected Tool ajuda a revisar arquiteturas contra os cinco pilares do framework AWS.",
        topic: "billing", domain: "billing"
    },
    {
        id: 200,
        question: "O que são AWS Credits?",
        options: [
            "Créditos de backup",
            "Créditos de performance",
            "Créditos de segurança",
            "Créditos promocionais para reduzir custos AWS",
        ],
        correct: [3],
        explanation: "✅ AWS Credits são créditos promocionais aplicados automaticamente à conta para reduzir custos de faturamento.",
        topic: "billing", domain: "billing"
    }
];

window.billingQuestions = billingQuestions;