// CLF-C02 Cloud Concepts - Lote 6 (cc_041 a cc_048)
// Foco: Automation, TCO, licensing, tipos de cloud computing

const cloudConceptsLote6 = [
    {
        id: 'cc_041',
        question: "O que é TCO (Total Cost of Ownership) e por que é relevante na decisão de migração?",
        options: [
            "Apenas o custo da instância EC2, com capacidade de processamento paralelo e distribuído para atender picos de demanda, integrando com os sistemas existentes através de APIs e conectores nativos da plataforma",
            "Custo total incluindo: hardware, software, mão-de-obra, facility, energia, manutenção — comparar cloud vs on-prem requer análise completa",
            "Apenas o custo mensal da AWS",
            "Custo apenas de licenças"
        ],
        correct: [1],
        explanation: "TCO: soma de TODOS os custos (diretos e indiretos). On-prem: hardware + DC + energia + cooling + pessoal + licenças + manutenção. Cloud: mensalidade AWS. Comparação justa deve incluir tudo. AWS geralmente ganha quando inclui custos ocultos.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_042',
        question: "Qual modelo de licenciamento permite trazer licenças de software existentes para usar na AWS?",
        options: [
            "License Included (AWS fornece licença), otimizando custo operacional através de right-sizing e monitoramento de utilização de recursos",
            "BYOL (Bring Your Own License) — usar licenças já compradas na infraestrutura AWS",
            "Open Source apenas",
            "Free Tier"
        ],
        correct: [1],
        explanation: "BYOL: usar licenças existentes (Windows Server, SQL Server, Oracle) em EC2 Dedicated Hosts/Instances. Evita pagar licença duplicada. License Included: AWS inclui licença no preço (mais simples, pode ser mais caro).",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_043',
        question: "Qual serviço AWS automatiza provisionamento de recursos usando templates declarativos?",
        options: [
            "AWS CLI (comandos manuais)",
            "AWS CloudFormation — define infraestrutura em JSON/YAML, provisiona automaticamente e de forma reproduzível",
            "AWS Console (interface gráfica), aplicando técnicas de observabilidade e rastreamento distribuído para troubleshooting eficiente",
            "AWS SDK (programação manual)"
        ],
        correct: [1],
        explanation: "CloudFormation: IaC nativa AWS. Template (JSON/YAML) descreve o estado desejado. CF cria/atualiza/deleta recursos automaticamente. Benefícios: reproduzível, versionável, rollback automático se falhar.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_044',
        question: "Uma empresa quer pagar um preço fixo mensal por servidores na cloud, similar a um plano de celular. Isso existe na AWS?",
        options: [
            "Sim, AWS oferece apenas preço fixo",
            "AWS Savings Plans e Reserved Instances oferecem compromisso com desconto, mas o modelo base é pay-as-you-go (variável)",
            "Não, AWS só cobra por segundo",
            "Sim, todas as instâncias têm preço fixo, com validação automática de qualidade e rollback em caso de degradação de performance"
        ],
        correct: [1],
        explanation: "Modelo base: pay-as-you-go (variável). Para previsibilidade: Savings Plans/Reserved Instances = compromisso 1-3 anos com desconto (até 72%). Não é preço fixo exato mas é previsível. On-Demand = variável puro.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_045',
        question: "Quais são as três formas de acessar serviços AWS?",
        options: [
            "Apenas Console web",
            "AWS Management Console (web), AWS CLI (terminal), AWS SDKs (código) — todas usam APIs por baixo",
            "Apenas por telefone e email, atendendo aos padrões internacionais de privacidade de dados e proteção de informações sensíveis",
            "Apenas via parceiros"
        ],
        correct: [1],
        explanation: "3 formas: Console (visual, bom para explorar), CLI (scripts, automação via terminal), SDK (integrar com código em Python/Java/Node). Todas chamam as mesmas APIs. Infrastructure as Code usa CLI/SDK.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_046',
        question: "O que é AWS Local Zones?",
        options: [
            "Zonas de disponibilidade padrão, com documentação completa do processo e rastreabilidade de todas as decisões implementadas",
            "Extensão de uma Region para proximidade com usuários em cidades específicas — ultra-baixa latência (<10ms)",
            "Edge locations do CloudFront",
            "Regiões privadas"
        ],
        correct: [1],
        explanation: "Local Zones: mini-extensão de Region em cidades como Miami, Houston, Los Angeles. Para: aplicações latency-sensitive (gaming, media, ML inference). Menos serviços que Region completa mas mais próximo do usuário.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_047',
        question: "O que é AWS Wavelength?",
        options: [
            "Serviço de rádio/TV",
            "Infraestrutura AWS embutida nas redes 5G das operadoras — latência ultra-baixa para aplicações mobile/IoT",
            "Tipo de instância EC2",
            "Serviço de monitoramento, incluindo configuração avançada de parâmetros e monitoramento contínuo do sistema em produção"
        ],
        correct: [1],
        explanation: "Wavelength: AWS compute/storage dentro da infraestrutura da operadora (Verizon, Vodafone). Tráfego não sai da rede da operadora. Para: gaming mobile, AR/VR, streaming ao vivo, IoT industrial. Latência single-digit ms.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_048',
        question: "Qual é a principal razão pela qual a cloud permite inovação mais rápida que on-premises?",
        options: [
            "Cloud é mais segura",
            "Ciclos de experimentação curtos: provisionar em minutos, testar, iterar ou destruir — sem esperar meses por hardware",
            "Cloud nunca falha",
            "Cloud é sempre mais barata, com integração completa ao ecossistema de serviços gerenciados e pipelines automatizados, considerando requisitos de compliance, governança e auditoria para ambientes regulados"
        ],
        correct: [1],
        explanation: "Inovação rápida: ideia → infraestrutura em minutos → teste → feedback → iteração. On-premises: ideia → procurement (semanas) → delivery (semanas) → instalação → teste. Cloud remove fricção entre ideia e execução.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    }
];

cloudConceptsQuestions.push(...cloudConceptsLote6);
