// CLF-C02 Cloud Concepts - Lote 3 (cc_011 a cc_020)
// Foco: Shared Responsibility, global infrastructure, design principles

const cloudConceptsLote3 = [
    {
        id: 'cc_011',
        question: "No modelo de responsabilidade compartilhada, quem é responsável por patching do sistema operacional de instâncias EC2?",
        options: [
            "AWS é responsável por tudo",
            "O cliente — EC2 é IaaS, cliente gerencia o OS",
            "AWS cuida do OS em todos os serviços",
            "Responsabilidade dividida igualmente"
        ],
        correct: [1],
        explanation: "EC2 = IaaS. Cliente gerencia: OS, patches, firewall, dados. AWS gerencia: hardware, rede física, hypervisor. Em RDS (gerenciado), AWS cuida do OS. A responsabilidade muda conforme o serviço.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_012',
        question: "Uma empresa quer deploy em São Paulo com baixa latência para usuários brasileiros. O que é uma AWS Region?",
        options: [
            "Um único data center",
            "Um cluster de Availability Zones em uma área geográfica — cada Region é isolada das outras",
            "Um ponto de presença para CDN",
            "Um escritório da AWS"
        ],
        correct: [1],
        explanation: "Region = área geográfica com 2+ Availability Zones isoladas. São Paulo (sa-east-1) tem 3 AZs. Regions são completamente independentes (dados não saem automaticamente de uma Region).",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_013',
        question: "O que é uma Availability Zone (AZ)?",
        options: [
            "Uma Region inteira",
            "Um ou mais data centers isolados com energia, rede e conectividade independentes dentro de uma Region",
            "Um edge location do CloudFront",
            "Uma VPC"
        ],
        correct: [1],
        explanation: "AZ = 1+ data centers com infraestrutura independente (energia, cooling, rede). Conectadas entre si com baixa latência (<2ms). Falha em uma AZ não afeta outras. Usar multi-AZ = alta disponibilidade.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_014',
        question: "Para que servem Edge Locations na AWS?",
        options: [
            "Hospedar instâncias EC2",
            "Servir conteúdo em cache mais próximo dos usuários finais (CloudFront CDN)",
            "Armazenar backups",
            "Executar Lambda functions"
        ],
        correct: [1],
        explanation: "Edge Locations: pontos de presença do CloudFront (CDN). Cacheiam conteúdo próximo ao usuário final. 400+ edge locations globalmente. Não hospedam EC2 — são para entrega de conteúdo com baixa latência.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_015',
        question: "Uma empresa quer garantir que sua aplicação continue funcionando se um data center inteiro falhar. Qual conceito aplicar?",
        options: [
            "Deploy em múltiplos edge locations",
            "Deploy em múltiplas Availability Zones dentro da mesma Region",
            "Usar instância maior",
            "Fazer backup diário"
        ],
        correct: [1],
        explanation: "Multi-AZ: se uma AZ falha (incêndio, enchente), a outra assume. Alta disponibilidade. Multi-Region: para desastres regionais. Multi-AZ é suficiente para maioria dos cenários de HA.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_016',
        question: "Qual princípio de design cloud recomenda testar em escala de produção sem custo permanente?",
        options: [
            "Não é possível na cloud",
            "Parar de adivinhar capacidade — provisionar recursos de teste temporários, testar, e destruir depois",
            "Usar apenas ambientes de desenvolvimento",
            "Testes são desnecessários na cloud"
        ],
        correct: [1],
        explanation: "Design principle: 'Stop guessing capacity' + 'Test at production scale'. Na cloud: crie ambiente de teste idêntico ao prod, execute testes de carga, destrua depois. Paga só pelas horas usadas.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_017',
        question: "Qual é a diferença entre escalabilidade vertical e horizontal?",
        options: [
            "Não há diferença prática",
            "Vertical: aumentar recursos de uma máquina (CPU/RAM). Horizontal: adicionar mais máquinas idênticas",
            "Vertical: adicionar máquinas. Horizontal: aumentar CPU",
            "Ambas significam adicionar servidores"
        ],
        correct: [1],
        explanation: "Vertical (scale up): instância t3.micro → t3.xlarge (mais potente, tem limite). Horizontal (scale out): 1 instância → 10 instâncias (mais capacidade, sem limite teórico). Cloud favorece horizontal (Auto Scaling).",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_018',
        question: "O que significa 'design for failure' na cloud?",
        options: [
            "Aceitar que sistemas vão falhar e não fazer nada",
            "Projetar sistemas assumindo que componentes VÃO falhar — redundância, auto-recovery, graceful degradation",
            "Nunca ter falhas",
            "Usar apenas serviços gerenciados"
        ],
        correct: [1],
        explanation: "Design for failure: tudo falha eventualmente. Projeto: redundância (multi-AZ), health checks, auto-healing (Auto Scaling substitui instâncias unhealthy), circuit breakers, graceful degradation. Não evitar falha — sobreviver a ela.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_019',
        question: "Uma empresa gasta $50.000/mês com servidores on-premises que ficam 70% ociosos fora do horário comercial. Qual conceito cloud resolve?",
        options: [
            "Alta disponibilidade",
            "Pay-as-you-go + elasticidade — pagar apenas pelo que usa, escalar para baixo fora do pico",
            "Disaster recovery",
            "Segurança aprimorada"
        ],
        correct: [1],
        explanation: "Pay-as-you-go: paga por hora/segundo de uso. Elasticidade: escala para baixo à noite/fim de semana. Resultado: ao invés de 100% capacidade 24/7, paga 100% no pico e 30% fora. Economia significativa.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_020',
        question: "Qual conceito descreve a capacidade de um sistema continuar operando mesmo com falhas parciais?",
        options: [
            "Escalabilidade",
            "Resiliência/Alta Disponibilidade — sistema absorve falhas sem interrupção percebida pelo usuário",
            "Agilidade",
            "Economia de escala"
        ],
        correct: [1],
        explanation: "Resiliência/HA: sistema projetado para tolerar falhas (componente falha → outro assume). Implementação: multi-AZ, load balancing, auto-scaling, health checks. O usuário final nem percebe a falha.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    }
];

cloudConceptsQuestions.push(...cloudConceptsLote3);
