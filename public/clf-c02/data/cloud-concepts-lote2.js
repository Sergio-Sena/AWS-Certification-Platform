// CLF-C02 Cloud Concepts - Lote 2 (cc_001 a cc_010)
// Foco: Well-Architected, migração, cloud economics, modelos de deploy

const cloudConceptsLote2 = [
    {
        id: 'cc_001',
        question: "Uma empresa está considerando migrar para a AWS. O CFO quer entender a principal diferença financeira entre on-premises e cloud. Qual é o benefício mais relevante?",
        options: [
            "Cloud elimina completamente custos de TI",
            "Cloud transforma CapEx (investimento de capital) em OpEx (despesa operacional) — paga pelo uso",
            "Cloud é sempre mais barato que on-premises, com documentação completa do processo e rastreabilidade de todas as decisões implementadas",
            "Cloud não tem custos mensais"
        ],
        correct: [1],
        explanation: "CapEx → OpEx: on-premises exige investimento pesado antecipado (servidores, DC). Cloud converte em despesa mensal variável baseada no uso. Não é necessariamente mais barato — é mais flexível financeiramente.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_002',
        question: "Qual pilar do AWS Well-Architected Framework foca em reduzir impacto ambiental e minimizar consumo de recursos?",
        options: [
            "Cost Optimization",
            "Performance Efficiency",
            "Sustainability",
            "Operational Excellence"
        ],
        correct: [2],
        explanation: "Sustainability (6º pilar, adicionado em 2021): minimizar impacto ambiental — escolher regiões com energia renovável, right-sizing, desligar recursos ociosos. Cost Optimization foca em dinheiro, não meio-ambiente.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_003',
        question: "Uma startup precisa lançar uma aplicação web globalmente em menos de 1 semana. On-premises levaria 3 meses para provisionar servidores. Qual benefício da cloud isso representa?",
        options: [
            "Economia de escala",
            "Agilidade — capacidade de provisionar recursos em minutos ao invés de semanas/meses",
            "Alta disponibilidade, incluindo configuração avançada de parâmetros e monitoramento contínuo do sistema em produção",
            "Elasticidade"
        ],
        correct: [1],
        explanation: "Agilidade: provisionamento rápido (minutos vs meses). Economia de escala = custos menores. Alta disponibilidade = resistir a falhas. Elasticidade = escalar com demanda. Aqui o problema é VELOCIDADE de provisionar.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_004',
        question: "Uma empresa quer mover aplicações para a nuvem mantendo parte da infraestrutura on-premises para dados regulamentados. Qual modelo de deploy?",
        options: [
            "Public Cloud",
            "Private Cloud, com integração completa ao ecossistema de serviços gerenciados e pipelines automatizados",
            "Hybrid Cloud — combina on-premises com cloud pública",
            "Multi-cloud"
        ],
        correct: [2],
        explanation: "Hybrid Cloud: parte na AWS (aplicações), parte on-premises (dados regulamentados). Conectados via VPN/Direct Connect. Public = tudo na nuvem. Private = infraestrutura isolada. Multi-cloud = múltiplos providers.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_005',
        question: "O AWS Cloud Adoption Framework (AWS CAF) organiza orientações em perspectivas. Qual perspectiva foca em garantir que investimentos em cloud gerem resultados de negócio?",
        options: [
            "Perspectiva de Plataforma",
            "Perspectiva de Negócios",
            "Perspectiva de Segurança",
            "Perspectiva de Operações"
        ],
        correct: [1],
        explanation: "CAF tem 6 perspectivas: Business (ROI, estratégia), People (cultura, skills), Governance (controle), Platform (arquitetura), Security (proteção), Operations (operação). Business foca em resultados de negócio.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_006',
        question: "Uma empresa tem aplicações monolíticas on-premises e quer migrar rapidamente para AWS sem refatorar código. Qual estratégia de migração (6 Rs)?",
        options: [
            "Refactor (reescrever para cloud-native), considerando requisitos de compliance, governança e auditoria para ambientes regulados",
            "Rehost (lift-and-shift) — mover como está para EC2/VMs na cloud",
            "Repurchase (trocar por SaaS)",
            "Retire (desligar)"
        ],
        correct: [1],
        explanation: "Rehost (lift-and-shift): move aplicação sem alterações para cloud. Mais rápido mas não aproveita benefícios cloud-native. Refactor = redesenhar. Repurchase = trocar por SaaS. Retire = descontinuar.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_007',
        question: "Qual é o benefício de 'economia de escala' que a AWS oferece?",
        options: [
            "Cada cliente tem infraestrutura dedicada exclusiva, garantindo escalabilidade horizontal e vertical conforme demanda do workload específico",
            "AWS compra hardware em massa e repassa custos menores aos clientes — quanto mais clientes, menor o preço unitário",
            "AWS não cobra pelo uso",
            "Clientes dividem custos entre si diretamente"
        ],
        correct: [1],
        explanation: "Economies of scale: AWS opera milhões de servidores. Compra em volume massivo = custo unitário menor. Esse benefício é repassado: preços AWS diminuem ao longo do tempo (100+ reduções desde 2006).",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_008',
        question: "Uma aplicação tem picos de tráfego imprevisíveis (ex: Black Friday). Qual benefício da cloud resolve isso?",
        options: [
            "Alta disponibilidade, utilizando as ferramentas nativas do serviço para automação e observabilidade operacional",
            "Elasticidade — capacidade de escalar automaticamente para cima e para baixo conforme demanda",
            "Tolerância a falhas",
            "Alcance global"
        ],
        correct: [1],
        explanation: "Elasticidade: escalar automaticamente com a demanda (Auto Scaling). Alta disponibilidade = resistir a falhas. Tolerância a falhas = continuar funcionando com componentes quebrados. Alcance global = deploy em múltiplas regiões.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_009',
        question: "Qual pilar do Well-Architected Framework foca em executar workloads de forma eficaz e obter insights sobre operações?",
        options: [
            "Reliability",
            "Performance Efficiency, com suporte a múltiplas regiões e redundância para alta disponibilidade e disaster recovery",
            "Operational Excellence — executar, monitorar e melhorar continuamente",
            "Security"
        ],
        correct: [2],
        explanation: "Operational Excellence: automação, IaC, monitoramento, melhoria contínua, runbooks. Reliability = recuperar de falhas. Performance = usar recursos eficientemente. Security = proteger dados e sistemas.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_010',
        question: "Uma empresa quer estimar custos ANTES de migrar para AWS. Qual ferramenta usar?",
        options: [
            "AWS Cost Explorer (analisa custos PASSADOS), seguindo o modelo de responsabilidade compartilhada e as políticas de segurança corporativas",
            "AWS Pricing Calculator — estima custos FUTUROS baseado na configuração planejada",
            "AWS Budgets (define alertas de orçamento)",
            "AWS Trusted Advisor (recomendações gerais)"
        ],
        correct: [1],
        explanation: "Pricing Calculator: estima custos futuros (antes de usar). Cost Explorer: analisa custos já incorridos. Budgets: alertas de orçamento. Cada ferramenta tem momento diferente de uso.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    }
];

cloudConceptsQuestions.push(...cloudConceptsLote2);
