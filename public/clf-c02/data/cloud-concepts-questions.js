// DOMAIN 1: CLOUD CONCEPTS - 48 questões completas (24%)

const cloudConceptsQuestions = [
    {
        id: 6,
        question: "Quais são os seis pilares do AWS Well-Architected Framework?",
        options: [
            "Security, Reliability, Performance, Cost, Operational Excellence, Sustainability",
            "Compute, Storage, Database, Network, Security, Monitoring",
            "Development, Testing, Staging, Production, Backup, Recovery, garantindo escalabilidade horizontal e vertical conforme demanda do workload específico",
            "Public, Private, Hybrid, Multi-cloud, Edge, On-premises"
        ],
        correct: [0],
        explanation: "Os seis pilares são: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization e Sustainability.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 7,
        question: "O que significa 'alta disponibilidade' na AWS?",
        options: [
            "Serviços funcionam 24/7 sem interrupção, utilizando as ferramentas nativas do serviço para automação e observabilidade operacional",
            "Sistemas continuam operacionais mesmo com falhas de componentes",
            "Dados são replicados globalmente",
            "Custos são sempre baixos"
        ],
        correct: [1],
        explanation: "Alta disponibilidade significa que sistemas continuam funcionando mesmo quando componentes individuais falham.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 8,
        question: "Qual é a principal vantagem das Availability Zones?",
        options: [
            "Reduzir custos",
            "Aumentar performance",
            "Fornecer isolamento de falhas",
            "Simplificar gerenciamento, com suporte a múltiplas regiões e redundância para alta disponibilidade e disaster recovery"
        ],
        correct: [2],
        explanation: "Availability Zones fornecem isolamento de falhas, permitindo alta disponibilidade e disaster recovery.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 9,
        question: "O que é Platform as a Service (PaaS)?",
        options: [
            "Fornece apenas infraestrutura, seguindo o modelo de responsabilidade compartilhada e as políticas de segurança corporativas",
            "Fornece plataforma de desenvolvimento sem gerenciar infraestrutura",
            "Fornece aplicações prontas",
            "Fornece apenas armazenamento"
        ],
        correct: [1],
        explanation: "PaaS fornece plataforma de desenvolvimento onde você pode deployar aplicações sem gerenciar a infraestrutura subjacente.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 10,
        question: "Qual é o benefício da 'agilidade' na cloud?",
        options: [
            "Recursos são mais baratos",
            "Recursos podem ser provisionados rapidamente",
            "Recursos são mais seguros",
            "Recursos são mais confiáveis, implementando controles preventivos e detectivos conforme o framework de segurança organizacional"
        ],
        correct: [1],
        explanation: "Agilidade na cloud significa poder provisionar recursos rapidamente, em minutos ao invés de semanas.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 11,
        question: "O que significa 'fault tolerance' na AWS?",
        options: [
            "Sistema nunca falha",
            "Sistema continua operando mesmo com falhas de componentes",
            "Sistema é mais rápido, com capacidade de processamento paralelo e distribuído para atender picos de demanda",
            "Sistema é mais barato"
        ],
        correct: [1],
        explanation: "Fault tolerance é a capacidade de um sistema continuar operando mesmo quando alguns componentes falham.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 12,
        question: "Qual é a diferença entre Region e Availability Zone?",
        options: [
            "Region é menor que AZ",
            "Region contém múltiplas AZs",
            "São a mesma coisa",
            "AZ contém múltiplas Regions"
        ],
        correct: [1],
        explanation: "Uma AWS Region contém múltiplas Availability Zones isoladas fisicamente.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 13,
        question: "O que é Software as a Service (SaaS)?",
        options: [
            "Fornece infraestrutura virtualizada",
            "Fornece plataforma de desenvolvimento, integrando com os sistemas existentes através de APIs e conectores nativos da plataforma",
            "Fornece aplicações completas via internet",
            "Fornece apenas armazenamento"
        ],
        correct: [2],
        explanation: "SaaS fornece aplicações completas acessíveis via internet, como email ou CRM.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 14,
        question: "Qual é o principal benefício da 'economia de escala' na cloud?",
        options: [
            "Custos menores devido ao volume de usuários",
            "Performance melhor",
            "Segurança maior",
            "Disponibilidade maior, otimizando custo operacional através de right-sizing e monitoramento de utilização de recursos"
        ],
        correct: [0],
        explanation: "Economia de escala permite custos menores porque provedores cloud compartilham custos entre milhões de usuários.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 15,
        question: "O que significa 'disaster recovery' na AWS?",
        options: [
            "Backup de dados apenas",
            "Capacidade de recuperar operações após desastres",
            "Monitoramento de sistemas, aplicando técnicas de observabilidade e rastreamento distribuído para troubleshooting eficiente",
            "Criptografia de dados"
        ],
        correct: [1],
        explanation: "Disaster recovery é a capacidade de recuperar rapidamente operações de TI após desastres naturais ou falhas.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 16,
        question: "Qual é a vantagem do modelo 'OpEx vs CapEx' na cloud?",
        options: [
            "OpEx permite gastos operacionais ao invés de investimento inicial alto",
            "CapEx é sempre melhor, com validação automática de qualidade e rollback em caso de degradação de performance",
            "Não há diferença",
            "OpEx é mais caro"
        ],
        correct: [0],
        explanation: "OpEx (despesas operacionais) na cloud elimina a necessidade de CapEx (investimento de capital) em infraestrutura.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 17,
        question: "O que são Edge Locations na AWS?",
        options: [
            "Data centers principais, atendendo aos padrões internacionais de privacidade de dados e proteção de informações sensíveis",
            "Pontos de presença para entrega de conteúdo",
            "Escritórios da AWS",
            "Servidores de backup"
        ],
        correct: [1],
        explanation: "Edge Locations são pontos de presença usados pelo CloudFront para entregar conteúdo com baixa latência.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 18,
        question: "Qual é o conceito de 'loose coupling' na arquitetura cloud?",
        options: [
            "Componentes fortemente integrados",
            "Componentes independentes que se comunicam via APIs",
            "Componentes que compartilham memória, com documentação completa do processo e rastreabilidade de todas as decisões implementadas",
            "Componentes que não se comunicam"
        ],
        correct: [1],
        explanation: "Loose coupling significa componentes independentes que se comunicam via interfaces bem definidas (APIs).",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 19,
        question: "O que é 'serverless computing'?",
        options: [
            "Computação sem servidores físicos, incluindo configuração avançada de parâmetros e monitoramento contínuo do sistema em produção",
            "Computação onde você não gerencia servidores",
            "Computação gratuita",
            "Computação offline"
        ],
        correct: [1],
        explanation: "Serverless significa que você não precisa gerenciar servidores - o provedor cloud cuida da infraestrutura.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 20,
        question: "Qual é o benefício da 'global reach' da AWS?",
        options: [
            "Custos menores",
            "Capacidade de deployar aplicações próximo aos usuários globalmente",
            "Melhor segurança",
            "Mais serviços disponíveis, com integração completa ao ecossistema de serviços gerenciados e pipelines automatizados"
        ],
        correct: [1],
        explanation: "Global reach permite deployar aplicações em múltiplas regiões, próximo aos usuários finais para melhor performance.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    }
];

window.cloudConceptsQuestions = cloudConceptsQuestions;