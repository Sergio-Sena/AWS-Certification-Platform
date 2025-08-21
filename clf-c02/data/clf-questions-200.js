// CLF-C02 - Banco Completo de 200 Questões
// Distribuição: Cloud Concepts(48) + Security(60) + Technology(68) + Billing(24) = 200

const clf200Questions = [
    // DOMAIN 1: CLOUD CONCEPTS (48 questões - 24%)
    {
        id: 1,
        question: "Qual é o principal benefício da computação em nuvem em termos de custos?",
        options: ["Custos fixos mensais", "Modelo pay-as-you-go", "Custos únicos de setup", "Sem custos operacionais"],
        correct: [1],
        explanation: "O modelo pay-as-you-go permite pagar apenas pelos recursos utilizados, eliminando custos de infraestrutura ociosa.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 2,
        question: "O que significa 'elasticidade' na AWS Cloud?",
        options: ["Capacidade de resistir a falhas", "Capacidade de escalar recursos automaticamente conforme demanda", "Capacidade de mover dados entre regiões", "Capacidade de criptografar dados"],
        correct: [1],
        explanation: "Elasticidade é a capacidade de aumentar ou diminuir recursos automaticamente baseado na demanda.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 3,
        question: "Quais são os três modelos de deployment de cloud computing?",
        options: ["Public, Private, Hybrid", "Basic, Standard, Premium", "Local, Regional, Global", "Development, Testing, Production"],
        correct: [0],
        explanation: "Os três modelos são Public Cloud, Private Cloud e Hybrid Cloud.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 4,
        question: "O que é Infrastructure as a Service (IaaS)?",
        options: ["Fornece aplicações completas", "Fornece plataforma de desenvolvimento", "Fornece recursos de computação virtualizados", "Fornece apenas armazenamento"],
        correct: [2],
        explanation: "IaaS fornece recursos de computação virtualizados como servidores, storage e rede.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 5,
        question: "Qual é a diferença entre escalabilidade vertical e horizontal?",
        options: ["Vertical adiciona mais servidores, horizontal aumenta capacidade do servidor", "Vertical aumenta capacidade do servidor, horizontal adiciona mais servidores", "Não há diferença", "Vertical é para storage, horizontal para compute"],
        correct: [1],
        explanation: "Escalabilidade vertical (scale up) aumenta recursos de um servidor, horizontal (scale out) adiciona mais servidores.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 6,
        question: "Quais são os seis pilares do AWS Well-Architected Framework?",
        options: ["Security, Reliability, Performance, Cost, Operational Excellence, Sustainability", "Compute, Storage, Database, Network, Security, Monitoring", "Development, Testing, Staging, Production, Backup, Recovery", "Public, Private, Hybrid, Multi-cloud, Edge, On-premises"],
        correct: [0],
        explanation: "Os seis pilares são: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization e Sustainability.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 7,
        question: "O que significa 'alta disponibilidade' na AWS?",
        options: ["Serviços funcionam 24/7 sem interrupção", "Sistemas continuam operacionais mesmo com falhas de componentes", "Dados são replicados globalmente", "Custos são sempre baixos"],
        correct: [1],
        explanation: "Alta disponibilidade significa que sistemas continuam funcionando mesmo quando componentes individuais falham.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 8,
        question: "Qual é a principal vantagem das Availability Zones?",
        options: ["Reduzir custos", "Aumentar performance", "Fornecer isolamento de falhas", "Simplificar gerenciamento"],
        correct: [2],
        explanation: "Availability Zones fornecem isolamento de falhas, permitindo alta disponibilidade e disaster recovery.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 9,
        question: "O que é Platform as a Service (PaaS)?",
        options: ["Fornece apenas infraestrutura", "Fornece plataforma de desenvolvimento sem gerenciar infraestrutura", "Fornece aplicações prontas", "Fornece apenas armazenamento"],
        correct: [1],
        explanation: "PaaS fornece plataforma de desenvolvimento onde você pode deployar aplicações sem gerenciar a infraestrutura subjacente.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 10,
        question: "Qual é o benefício da 'agilidade' na cloud?",
        options: ["Recursos são mais baratos", "Recursos podem ser provisionados rapidamente", "Recursos são mais seguros", "Recursos são mais confiáveis"],
        correct: [1],
        explanation: "Agilidade na cloud significa poder provisionar recursos rapidamente, em minutos ao invés de semanas.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 11,
        question: "O que significa 'fault tolerance' na AWS?",
        options: ["Sistema nunca falha", "Sistema continua operando mesmo com falhas de componentes", "Sistema é mais rápido", "Sistema é mais barato"],
        correct: [1],
        explanation: "Fault tolerance é a capacidade de um sistema continuar operando mesmo quando alguns componentes falham.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 12,
        question: "Qual é a diferença entre Region e Availability Zone?",
        options: ["Region é menor que AZ", "Region contém múltiplas AZs", "São a mesma coisa", "AZ contém múltiplas Regions"],
        correct: [1],
        explanation: "Uma AWS Region contém múltiplas Availability Zones isoladas fisicamente.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 13,
        question: "O que é Software as a Service (SaaS)?",
        options: ["Fornece infraestrutura virtualizada", "Fornece plataforma de desenvolvimento", "Fornece aplicações completas via internet", "Fornece apenas armazenamento"],
        correct: [2],
        explanation: "SaaS fornece aplicações completas acessíveis via internet, como email ou CRM.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 14,
        question: "Qual é o principal benefício da 'economia de escala' na cloud?",
        options: ["Custos menores devido ao volume de usuários", "Performance melhor", "Segurança maior", "Disponibilidade maior"],
        correct: [0],
        explanation: "Economia de escala permite custos menores porque provedores cloud compartilham custos entre milhões de usuários.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 15,
        question: "O que significa 'disaster recovery' na AWS?",
        options: ["Backup de dados apenas", "Capacidade de recuperar operações após desastres", "Monitoramento de sistemas", "Criptografia de dados"],
        correct: [1],
        explanation: "Disaster recovery é a capacidade de recuperar rapidamente operações de TI após desastres naturais ou falhas.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 16,
        question: "Qual é a vantagem do modelo 'OpEx vs CapEx' na cloud?",
        options: ["OpEx permite gastos operacionais ao invés de investimento inicial alto", "CapEx é sempre melhor", "Não há diferença", "OpEx é mais caro"],
        correct: [0],
        explanation: "OpEx (despesas operacionais) na cloud elimina a necessidade de CapEx (investimento de capital) em infraestrutura.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 17,
        question: "O que são Edge Locations na AWS?",
        options: ["Data centers principais", "Pontos de presença para entrega de conteúdo", "Escritórios da AWS", "Servidores de backup"],
        correct: [1],
        explanation: "Edge Locations são pontos de presença usados pelo CloudFront para entregar conteúdo com baixa latência.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 18,
        question: "Qual é o conceito de 'loose coupling' na arquitetura cloud?",
        options: ["Componentes fortemente integrados", "Componentes independentes que se comunicam via APIs", "Componentes que compartilham memória", "Componentes que não se comunicam"],
        correct: [1],
        explanation: "Loose coupling significa componentes independentes que se comunicam via interfaces bem definidas (APIs).",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 19,
        question: "O que é 'serverless computing'?",
        options: ["Computação sem servidores físicos", "Computação onde você não gerencia servidores", "Computação gratuita", "Computação offline"],
        correct: [1],
        explanation: "Serverless significa que você não precisa gerenciar servidores - o provedor cloud cuida da infraestrutura.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 20,
        question: "Qual é o benefício da 'global reach' da AWS?",
        options: ["Custos menores", "Capacidade de deployar aplicações próximo aos usuários globalmente", "Melhor segurança", "Mais serviços disponíveis"],
        correct: [1],
        explanation: "Global reach permite deployar aplicações em múltiplas regiões, próximo aos usuários finais para melhor performance.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 21,
        question: "O que é 'multi-tenancy' na cloud?",
        options: ["Cada cliente tem infraestrutura dedicada", "Múltiplos clientes compartilham recursos de forma segura", "Apenas um cliente por servidor", "Clientes não podem usar o mesmo serviço"],
        correct: [1],
        explanation: "Multi-tenancy permite que múltiplos clientes compartilhem recursos de forma segura e isolada.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 22,
        question: "Qual é o conceito de 'microservices' na arquitetura cloud?",
        options: ["Uma aplicação monolítica grande", "Pequenos serviços independentes que se comunicam", "Serviços que rodam apenas em containers", "Serviços gratuitos da AWS"],
        correct: [1],
        explanation: "Microservices são pequenos serviços independentes que juntos formam uma aplicação maior.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 23,
        question: "O que significa 'auto-scaling' na AWS?",
        options: ["Escalar manualmente recursos", "Ajustar recursos automaticamente baseado na demanda", "Sempre manter o mesmo número de recursos", "Escalar apenas durante horário comercial"],
        correct: [1],
        explanation: "Auto-scaling ajusta automaticamente o número de recursos baseado na demanda atual.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 24,
        question: "Qual é o benefício da 'redundancy' na cloud?",
        options: ["Reduzir custos", "Melhorar disponibilidade através de componentes duplicados", "Aumentar velocidade", "Simplificar arquitetura"],
        correct: [1],
        explanation: "Redundancy melhora disponibilidade tendo componentes duplicados que podem assumir se outros falharem.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 25,
        question: "O que é 'load balancing'?",
        options: ["Distribuir carga de trabalho entre múltiplos recursos", "Balancear custos entre serviços", "Equilibrar segurança e performance", "Distribuir dados entre regiões"],
        correct: [0],
        explanation: "Load balancing distribui requisições entre múltiplos servidores para otimizar performance e disponibilidade.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 26,
        question: "Qual é o conceito de 'immutable infrastructure'?",
        options: ["Infraestrutura que nunca muda", "Infraestrutura que é substituída ao invés de modificada", "Infraestrutura permanente", "Infraestrutura compartilhada"],
        correct: [1],
        explanation: "Immutable infrastructure é substituída completamente ao invés de ser modificada, garantindo consistência.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 27,
        question: "O que significa 'DevOps' no contexto cloud?",
        options: ["Apenas desenvolvimento", "Apenas operações", "Integração entre desenvolvimento e operações", "Apenas deployment"],
        correct: [2],
        explanation: "DevOps integra desenvolvimento e operações para acelerar entrega de software com qualidade.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 28,
        question: "Qual é o benefício da 'API-first approach'?",
        options: ["APIs são mais baratas", "Permite integração e automação fáceis", "APIs são mais seguras", "APIs são mais rápidas"],
        correct: [1],
        explanation: "API-first approach permite fácil integração entre serviços e automação de processos.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 29,
        question: "O que é 'containerization'?",
        options: ["Armazenar dados em containers", "Empacotar aplicações com suas dependências", "Usar apenas Docker", "Virtualização de hardware"],
        correct: [1],
        explanation: "Containerization empacota aplicações com todas suas dependências para execução consistente.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 30,
        question: "Qual é o conceito de 'Infrastructure as Code (IaC)'?",
        options: ["Escrever código apenas", "Gerenciar infraestrutura através de código", "Infraestrutura gratuita", "Código que roda na infraestrutura"],
        correct: [1],
        explanation: "IaC permite gerenciar e provisionar infraestrutura através de código, garantindo consistência e versionamento.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 31,
        question: "O que significa 'cloud-native'?",
        options: ["Aplicações que rodam apenas na nuvem", "Aplicações projetadas especificamente para cloud", "Aplicações nativas do sistema operacional", "Aplicações gratuitas"],
        correct: [1],
        explanation: "Cloud-native são aplicações projetadas especificamente para aproveitar os benefícios da computação em nuvem.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 32,
        question: "Qual é o benefício da 'observability' na cloud?",
        options: ["Ver apenas logs", "Monitorar e entender o comportamento do sistema", "Observar apenas custos", "Ver apenas métricas"],
        correct: [1],
        explanation: "Observability permite monitorar, entender e debugar sistemas através de logs, métricas e traces.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 33,
        question: "O que é 'event-driven architecture'?",
        options: ["Arquitetura baseada em eventos", "Arquitetura para eventos sociais", "Arquitetura apenas para web", "Arquitetura sem eventos"],
        correct: [0],
        explanation: "Event-driven architecture usa eventos para comunicação entre componentes, permitindo sistemas mais flexíveis.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 34,
        question: "Qual é o conceito de 'blue-green deployment'?",
        options: ["Deployment com cores", "Duas versões do ambiente para deployment sem downtime", "Deployment apenas em produção", "Deployment manual"],
        correct: [1],
        explanation: "Blue-green deployment mantém duas versões do ambiente para permitir deployment sem downtime.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 35,
        question: "O que significa 'vendor lock-in'?",
        options: ["Fornecedor bloqueia acesso", "Dependência excessiva de um fornecedor específico", "Fornecedor oferece desconto", "Contrato de longo prazo"],
        correct: [1],
        explanation: "Vendor lock-in é a dependência excessiva de um fornecedor, dificultando migração para outros.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 36,
        question: "Qual é o benefício da 'data locality' na cloud?",
        options: ["Dados ficam apenas locais", "Processar dados próximo de onde estão armazenados", "Dados são sempre globais", "Dados ficam no mesmo país"],
        correct: [1],
        explanation: "Data locality melhora performance processando dados próximo de onde estão armazenados.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 37,
        question: "O que é 'chaos engineering'?",
        options: ["Criar caos no sistema", "Testar resiliência introduzindo falhas controladas", "Engenharia sem planejamento", "Desenvolvimento caótico"],
        correct: [1],
        explanation: "Chaos engineering testa resiliência do sistema introduzindo falhas controladas para identificar pontos fracos.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 38,
        question: "Qual é o conceito de 'circuit breaker pattern'?",
        options: ["Quebrar circuitos elétricos", "Parar chamadas para serviços que estão falhando", "Padrão de segurança", "Padrão de rede"],
        correct: [1],
        explanation: "Circuit breaker para chamadas para serviços que estão falhando, evitando cascata de falhas.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 39,
        question: "O que significa 'eventual consistency'?",
        options: ["Dados sempre consistentes", "Dados se tornam consistentes eventualmente", "Dados nunca consistentes", "Consistência apenas em eventos"],
        correct: [1],
        explanation: "Eventual consistency significa que dados se tornam consistentes ao longo do tempo, não imediatamente.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 40,
        question: "Qual é o benefício da 'stateless architecture'?",
        options: ["Aplicações sem estado são mais simples de escalar", "Aplicações mantêm estado", "Aplicações são mais complexas", "Aplicações são mais lentas"],
        correct: [0],
        explanation: "Stateless architecture é mais fácil de escalar pois não mantém estado entre requisições.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 41,
        question: "O que é 'content delivery network (CDN)'?",
        options: ["Rede de entrega de conteúdo próximo aos usuários", "Rede apenas para vídeos", "Rede privada", "Rede de desenvolvimento"],
        correct: [0],
        explanation: "CDN é uma rede de servidores distribuídos que entrega conteúdo próximo aos usuários finais.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 42,
        question: "Qual é o conceito de 'data lake'?",
        options: ["Lago com dados", "Repositório centralizado para dados estruturados e não estruturados", "Apenas dados estruturados", "Apenas dados pequenos"],
        correct: [1],
        explanation: "Data lake é um repositório centralizado que armazena dados estruturados e não estruturados em escala.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 43,
        question: "O que significa 'right-sizing' na cloud?",
        options: ["Tamanho sempre grande", "Otimizar recursos para necessidades específicas", "Tamanho sempre pequeno", "Tamanho fixo"],
        correct: [1],
        explanation: "Right-sizing é otimizar recursos (CPU, memória, storage) para atender necessidades específicas sem desperdício.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 44,
        question: "Qual é o benefício da 'automation' na cloud?",
        options: ["Reduzir erros humanos e aumentar eficiência", "Apenas reduzir custos", "Apenas aumentar velocidade", "Apenas melhorar segurança"],
        correct: [0],
        explanation: "Automation reduz erros humanos, aumenta eficiência e permite operações consistentes e repetíveis.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 45,
        question: "O que é 'multi-cloud strategy'?",
        options: ["Usar apenas uma cloud", "Usar múltiplos provedores de cloud", "Usar apenas cloud privada", "Evitar cloud pública"],
        correct: [1],
        explanation: "Multi-cloud strategy usa múltiplos provedores de cloud para evitar vendor lock-in e otimizar recursos.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 46,
        question: "Qual é o conceito de 'data governance' na cloud?",
        options: ["Governo controla dados", "Políticas e processos para gerenciar dados", "Dados sem governança", "Apenas backup de dados"],
        correct: [1],
        explanation: "Data governance estabelece políticas e processos para gerenciar qualidade, segurança e uso de dados.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 47,
        question: "O que significa 'cloud bursting'?",
        options: ["Cloud explode", "Expandir para cloud pública quando recursos privados são insuficientes", "Usar apenas cloud privada", "Reduzir uso de cloud"],
        correct: [1],
        explanation: "Cloud bursting expande automaticamente para cloud pública quando recursos da cloud privada são insuficientes.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },
    {
        id: 48,
        question: "Qual é o benefício da 'API economy'?",
        options: ["APIs são gratuitas", "Monetizar e compartilhar serviços através de APIs", "APIs são apenas internas", "APIs são complexas"],
        correct: [1],
        explanation: "API economy permite monetizar e compartilhar serviços, criando novos modelos de negócio e parcerias.",
        topic: "cloud-concepts", domain: "cloud-concepts"
    },

    // DOMAIN 2: SECURITY & COMPLIANCE (60 questões - 30%)
    {
        id: 49,
        question: "O que é o Modelo de Responsabilidade Compartilhada da AWS?",
        options: ["AWS é responsável por tudo", "Cliente é responsável por tudo", "AWS cuida da segurança DA nuvem, cliente cuida da segurança NA nuvem", "Responsabilidades são iguais"],
        correct: [2],
        explanation: "AWS é responsável pela segurança DA nuvem (infraestrutura), cliente pela segurança NA nuvem (dados, aplicações).",
        topic: "security", domain: "security"
    },
    {
        id: 50,
        question: "Qual serviço AWS gerencia identidades e acessos?",
        options: ["AWS CloudTrail", "AWS IAM", "AWS Config", "AWS GuardDuty"],
        correct: [1],
        explanation: "AWS IAM (Identity and Access Management) gerencia usuários, grupos, roles e políticas de acesso.",
        topic: "security", domain: "security"
    }

// Combinar todas as questões dos arquivos separados
const allCLFQuestions = [
    ...clf200Questions,
    ...(window.securityQuestions || []),
    ...(window.technologyQuestions || []),
    ...(window.billingQuestions || [])
];

// Função para obter questões por domínio
function getCLFQuestionsByDomain(domain) {
    return allCLFQuestions.filter(q => q.domain === domain);
}

// Função para selecionar 65 questões para simulado CLF
function selectCLFExamQuestions() {
    const distribution = {
        'cloud-concepts': 16,    // 24%
        'security': 19,          // 30%
        'technology': 22,        // 34%
        'billing': 8             // 12%
    };
    
    let selectedQuestions = [];
    
    Object.keys(distribution).forEach(domain => {
        const domainQuestions = getCLFQuestionsByDomain(domain);
        const shuffled = shuffleArray(domainQuestions);
        const selected = shuffled.slice(0, distribution[domain]);
        selectedQuestions = selectedQuestions.concat(selected);
    });
    
    return shuffleArray(selectedQuestions);
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Exportar para uso global
window.clf200Questions = allCLFQuestions;
window.getCLFQuestionsByDomain = getCLFQuestionsByDomain;
window.selectCLFExamQuestions = selectCLFExamQuestions;

// Estatísticas do banco de questões
console.log('CLF-C02 Question Bank Statistics:');
console.log('Cloud Concepts:', getCLFQuestionsByDomain('cloud-concepts').length, '/ 48');
console.log('Security & Compliance:', getCLFQuestionsByDomain('security').length, '/ 60');
console.log('Technology & Services:', getCLFQuestionsByDomain('technology').length, '/ 68');
console.log('Billing & Support:', getCLFQuestionsByDomain('billing').length, '/ 24');
console.log('Total Questions:', allCLFQuestions.length, '/ 200');