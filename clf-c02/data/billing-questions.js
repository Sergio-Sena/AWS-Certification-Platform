// DOMAIN 4: BILLING, PRICING & SUPPORT - 22 questões adicionais (12% total = 24 questões)

const billingQuestions = [
    {
        id: 179,
        question: "Quais são os níveis de suporte AWS disponíveis?",
        options: ["Basic, Developer, Business, Enterprise", "Free, Paid, Premium", "Standard, Advanced, Professional", "Starter, Professional, Enterprise"],
        correct: [0],
        explanation: "AWS oferece quatro níveis: Basic (gratuito), Developer, Business e Enterprise On-Ramp/Enterprise.",
        topic: "billing", domain: "billing"
    },
    {
        id: 180,
        question: "O que está incluído no AWS Basic Support?",
        options: ["Suporte técnico 24/7, documentação, whitepapers, fóruns", "Apenas documentação", "Suporte técnico limitado", "Todos os recursos"],
        correct: [0],
        explanation: "Basic Support inclui documentação, whitepapers, fóruns de suporte e AWS Personal Health Dashboard.",
        topic: "billing", domain: "billing"
    },
    {
        id: 181,
        question: "Qual ferramenta AWS monitora custos em tempo real?",
        options: ["AWS Cost Explorer", "AWS Budgets", "AWS Billing Dashboard", "AWS Pricing Calculator"],
        correct: [2],
        explanation: "AWS Billing Dashboard mostra custos atuais e uso em tempo real.",
        topic: "billing", domain: "billing"
    },
    {
        id: 182,
        question: "O que é AWS Cost Explorer?",
        options: ["Ferramenta para visualizar e analisar custos históricos", "Calculadora de preços", "Monitor de performance", "Ferramenta de backup"],
        correct: [0],
        explanation: "Cost Explorer permite visualizar, entender e gerenciar custos AWS ao longo do tempo.",
        topic: "billing", domain: "billing"
    },
    {
        id: 183,
        question: "Para que serve o AWS Budgets?",
        options: ["Definir alertas de custo e uso", "Calcular preços", "Monitorar performance", "Fazer backup"],
        correct: [0],
        explanation: "AWS Budgets permite definir orçamentos personalizados e receber alertas quando custos excedem limites.",
        topic: "billing", domain: "billing"
    },
    {
        id: 184,
        question: "O que são Reserved Instances?",
        options: ["Instâncias com desconto por compromisso de uso", "Instâncias gratuitas", "Instâncias temporárias", "Instâncias de backup"],
        correct: [0],
        explanation: "Reserved Instances oferecem desconto significativo em troca de compromisso de uso de 1 ou 3 anos.",
        topic: "billing", domain: "billing"
    },
    {
        id: 185,
        question: "Qual é a diferença entre On-Demand e Spot Instances?",
        options: ["On-Demand tem preço fixo, Spot tem preço variável com desconto", "Não há diferença", "Spot é mais caro", "On-Demand é mais lento"],
        correct: [0],
        explanation: "On-Demand tem preço fixo por hora, Spot oferece capacidade não utilizada com desconto mas pode ser interrompida.",
        topic: "billing", domain: "billing"
    },
    {
        id: 186,
        question: "O que são Savings Plans?",
        options: ["Modelo de preços flexível com desconto por compromisso de uso", "Planos de backup", "Planos de segurança", "Planos de performance"],
        correct: [0],
        explanation: "Savings Plans oferecem preços mais baixos em troca de compromisso de uso consistente por 1 ou 3 anos.",
        topic: "billing", domain: "billing"
    },
    {
        id: 187,
        question: "Qual ferramenta AWS recomenda otimizações de custo?",
        options: ["AWS Trusted Advisor", "AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator"],
        correct: [0],
        explanation: "Trusted Advisor fornece recomendações para otimizar custos, performance, segurança e mais.",
        topic: "billing", domain: "billing"
    },
    {
        id: 188,
        question: "O que é AWS Organizations para faturamento?",
        options: ["Faturamento consolidado para múltiplas contas", "Organização de recursos", "Organização de usuários", "Organização de regiões"],
        correct: [0],
        explanation: "Organizations permite faturamento consolidado, combinando uso de múltiplas contas para descontos por volume.",
        topic: "billing", domain: "billing"
    },
    {
        id: 189,
        question: "Quais fatores afetam o preço do Amazon S3?",
        options: ["Armazenamento, requests, transferência de dados", "Apenas armazenamento", "Apenas requests", "Apenas transferência"],
        correct: [0],
        explanation: "S3 cobra por armazenamento usado, número de requests e transferência de dados para fora da AWS.",
        topic: "billing", domain: "billing"
    },
    {
        id: 190,
        question: "O que é AWS Free Tier?",
        options: ["Uso gratuito limitado de serviços AWS", "Todos os serviços gratuitos", "Apenas EC2 gratuito", "Apenas S3 gratuito"],
        correct: [0],
        explanation: "Free Tier oferece uso limitado gratuito de muitos serviços AWS por 12 meses para novos clientes.",
        topic: "billing", domain: "billing"
    },
    {
        id: 191,
        question: "Quais são os tipos de AWS Free Tier?",
        options: ["12 meses gratuitos, sempre gratuito, trials", "Apenas 12 meses", "Apenas sempre gratuito", "Apenas trials"],
        correct: [0],
        explanation: "Free Tier inclui: 12 meses gratuitos para novos clientes, sempre gratuito para certos serviços, e trials de curto prazo.",
        topic: "billing", domain: "billing"
    },
    {
        id: 192,
        question: "O que é data transfer pricing na AWS?",
        options: ["Cobrança por transferência de dados entre regiões e para internet", "Cobrança apenas por armazenamento", "Cobrança apenas por compute", "Sem cobrança por transferência"],
        correct: [0],
        explanation: "AWS cobra por transferência de dados entre regiões, AZs (em alguns casos) e para a internet.",
        topic: "billing", domain: "billing"
    },
    {
        id: 193,
        question: "Qual é o modelo de preços do AWS Lambda?",
        options: ["Pay-per-request e duração de execução", "Preço fixo mensal", "Apenas por requests", "Apenas por duração"],
        correct: [0],
        explanation: "Lambda cobra por número de requests e duração de execução (GB-segundo).",
        topic: "billing", domain: "billing"
    },
    {
        id: 194,
        question: "O que são tags de custo na AWS?",
        options: ["Etiquetas para rastrear e alocar custos", "Tags de segurança", "Tags de performance", "Tags de backup"],
        correct: [0],
        explanation: "Cost allocation tags permitem categorizar e rastrear custos AWS por projeto, departamento ou ambiente.",
        topic: "billing", domain: "billing"
    },
    {
        id: 195,
        question: "Qual é o benefício do AWS Cost and Usage Report?",
        options: ["Relatório detalhado de custos e uso", "Apenas custos básicos", "Apenas uso básico", "Relatório de performance"],
        correct: [0],
        explanation: "Cost and Usage Report fornece dados detalhados sobre custos e uso AWS para análise aprofundada.",
        topic: "billing", domain: "billing"
    },
    {
        id: 196,
        question: "O que é AWS Support API?",
        options: ["API para acessar casos de suporte programaticamente", "API para faturamento", "API para monitoramento", "API para backup"],
        correct: [0],
        explanation: "Support API permite criar e gerenciar casos de suporte AWS programaticamente.",
        topic: "billing", domain: "billing"
    },
    {
        id: 197,
        question: "Qual é a diferença entre Business e Enterprise Support?",
        options: ["Enterprise inclui Technical Account Manager e resposta mais rápida", "Não há diferença", "Business é mais caro", "Enterprise é apenas para grandes empresas"],
        correct: [0],
        explanation: "Enterprise Support inclui TAM dedicado, resposta em 15 minutos para casos críticos e revisões arquiteturais.",
        topic: "billing", domain: "billing"
    },
    {
        id: 198,
        question: "O que é AWS Personal Health Dashboard?",
        options: ["Visão personalizada da saúde dos serviços AWS", "Dashboard de custos", "Dashboard de performance", "Dashboard de segurança"],
        correct: [0],
        explanation: "Personal Health Dashboard fornece alertas e orientações quando eventos AWS podem impactar seus recursos.",
        topic: "billing", domain: "billing"
    },
    {
        id: 199,
        question: "Qual é o propósito do AWS Well-Architected Tool?",
        options: ["Revisar arquiteturas contra melhores práticas AWS", "Calcular custos", "Monitorar performance", "Gerenciar usuários"],
        correct: [0],
        explanation: "Well-Architected Tool ajuda a revisar arquiteturas contra os cinco pilares do framework AWS.",
        topic: "billing", domain: "billing"
    },
    {
        id: 200,
        question: "O que são AWS Credits?",
        options: ["Créditos promocionais para reduzir custos AWS", "Créditos de performance", "Créditos de segurança", "Créditos de backup"],
        correct: [0],
        explanation: "AWS Credits são créditos promocionais aplicados automaticamente à conta para reduzir custos de faturamento.",
        topic: "billing", domain: "billing"
    }
];

window.billingQuestions = billingQuestions;