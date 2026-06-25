// DOMAIN 1: CLOUD CONCEPTS - 48 questões completas (24%)

const cloudConceptsQuestions = [
    {
        id: 6,
        question: "Quais são os seis pilares do AWS Well-Architected Framework?",
        options: [
            "Security, Reliability, Performance, Cost, Operational Excellence, Sustainability",
            "Compute, Storage, Database, Network, Security, Monitoring",
            "Development, Testing, Staging, Production, Backup, Recovery",
            "Public, Private, Hybrid, Multi-cloud, Edge, On-premises"
        ],
        correct: [0],
        explanation: "✅ Os seis pilares são: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization e Sustainability.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 7,
        question: "O que significa 'alta disponibilidade' na AWS?",
        options: [
            "Serviços funcionam 24/7 sem interrupção",
            "Dados são replicados globalmente",
            "Sistemas continuam operacionais mesmo com falhas de componentes",
            "Custos são sempre baixos"
        ],
        correct: [2],
        explanation: "✅ Alta disponibilidade significa que sistemas continuam funcionando mesmo quando componentes individuais falham.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 8,
        question: "Qual é a principal vantagem das Availability Zones?",
        options: [
            "Reduzir custos",
            "Aumentar performance",
            "Simplificar gerenciamento",
            "Fornecer isolamento de falhas",
        ],
        correct: [3],
        explanation: "✅ Availability Zones fornecem isolamento de falhas, permitindo alta disponibilidade e disaster recovery.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 9,
        question: "O que é Platform as a Service (PaaS)?",
        options: [
            "Fornece apenas infraestrutura",
            "Fornece plataforma de desenvolvimento sem gerenciar infraestrutura",
            "Fornece aplicações prontas",
            "Fornece apenas armazenamento"
        ],
        correct: [1],
        explanation: "✅ PaaS fornece plataforma de desenvolvimento onde você pode deployar aplicações sem gerenciar a infraestrutura subjacente.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 10,
        question: "Qual é o benefício da 'agilidade' na cloud?",
        options: [
            "Recursos podem ser provisionados rapidamente",
            "Recursos são mais baratos",
            "Recursos são mais seguros",
            "Recursos são mais confiáveis"
        ],
        correct: [0],
        explanation: "✅ Agilidade na cloud significa poder provisionar recursos rapidamente, em minutos ao invés de semanas.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 11,
        question: "O que significa 'fault tolerance' na AWS?",
        options: [
            "Sistema nunca falha",
            "Sistema é mais rápido",
            "Sistema continua operando mesmo com falhas de componentes",
            "Sistema é mais barato"
        ],
        correct: [2],
        explanation: "✅ Fault tolerance é a capacidade de um sistema continuar operando mesmo quando alguns componentes falham.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 12,
        question: "Qual é a diferença entre Region e Availability Zone?",
        options: [
            "Region é menor que AZ",
            "AZ contém múltiplas Regions",
            "São a mesma coisa",
            "Region contém múltiplas AZs",
        ],
        correct: [3],
        explanation: "✅ Uma AWS Region contém múltiplas Availability Zones isoladas fisicamente.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 13,
        question: "O que é Software as a Service (SaaS)?",
        options: [
            "Fornece infraestrutura virtualizada",
            "Fornece aplicações completas via internet",
            "Fornece plataforma de desenvolvimento",
            "Fornece apenas armazenamento"
        ],
        correct: [1],
        explanation: "✅ SaaS fornece aplicações completas acessíveis via internet, como email ou CRM.",
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
            "Disponibilidade maior"
        ],
        correct: [0],
        explanation: "✅ Economia de escala permite custos menores porque provedores cloud compartilham custos entre milhões de usuários.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 15,
        question: "O que significa 'disaster recovery' na AWS?",
        options: [
            "Backup de dados apenas",
            "Monitoramento de sistemas",
            "Capacidade de recuperar operações após desastres",
            "Criptografia de dados"
        ],
        correct: [2],
        explanation: "✅ Disaster recovery é a capacidade de recuperar rapidamente operações de TI após desastres naturais ou falhas.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 16,
        question: "Qual é a vantagem do modelo 'OpEx vs CapEx' na cloud?",
        options: [
            "OpEx é mais caro",
            "CapEx é sempre melhor",
            "Não há diferença",
            "OpEx permite gastos operacionais ao invés de investimento inicial alto",
        ],
        correct: [3],
        explanation: "✅ OpEx (despesas operacionais) na cloud elimina a necessidade de CapEx (investimento de capital) em infraestrutura.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 17,
        question: "O que são Edge Locations na AWS?",
        options: [
            "Data centers principais",
            "Pontos de presença para entrega de conteúdo",
            "Escritórios da AWS",
            "Servidores de backup"
        ],
        correct: [1],
        explanation: "✅ Edge Locations são pontos de presença usados pelo CloudFront para entregar conteúdo com baixa latência.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 18,
        question: "Qual é o conceito de 'loose coupling' na arquitetura cloud?",
        options: [
            "Componentes independentes que se comunicam via APIs",
            "Componentes fortemente integrados",
            "Componentes que compartilham memória",
            "Componentes que não se comunicam"
        ],
        correct: [0],
        explanation: "✅ Loose coupling significa componentes independentes que se comunicam via interfaces bem definidas (APIs).",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 19,
        question: "O que é 'serverless computing'?",
        options: [
            "Computação sem servidores físicos",
            "Computação gratuita",
            "Computação onde você não gerencia servidores",
            "Computação offline"
        ],
        correct: [2],
        explanation: "✅ Serverless significa que você não precisa gerenciar servidores - o provedor cloud cuida da infraestrutura.",
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
            "Mais serviços disponíveis"
        ],
        correct: [1],
        explanation: "✅ Global reach permite deployar aplicações em múltiplas regiões, próximo aos usuários finais para melhor performance.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    }
];

window.cloudConceptsQuestions = cloudConceptsQuestions;