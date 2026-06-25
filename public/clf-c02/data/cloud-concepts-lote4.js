// CLF-C02 Cloud Concepts - Lote 4 (cc_021 a cc_030)
// Foco: IaC, serverless, containers, modelos de serviço, AWS CAF

const cloudConceptsLote4 = [
    {
        id: 'cc_021',
        question: "Uma equipe de DevOps quer provisionar infraestrutura de forma reproduzível e versionada. Qual conceito cloud atende?",
        options: [
            "Infrastructure as Code (IaC) — definir infraestrutura em código (CloudFormation/Terraform)",
            "Console manual",
            "Deploy manual via SSH",
            "Documentação em Word"
        ],
        correct: [0],
        explanation: "✅ IaC: infraestrutura definida em templates/código. Benefícios: reproduzível, versionável (Git), auditável, consistente. AWS CloudFormation é o serviço nativo. Terraform é alternativa multi-cloud.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_022',
        question: "Qual modelo de serviço cloud oferece mais controle ao cliente mas mais responsabilidade de gerenciamento?",
        options: [
            "SaaS (Software as a Service)",
            "PaaS (Platform as a Service)",
            "IaaS (Infrastructure as a Service) — máximo controle, máxima responsabilidade",
            "Todos oferecem o mesmo controle"
        ],
        correct: [2],
        explanation: "✅ IaaS (EC2): cliente controla OS, middleware, apps. Mais flexível mas mais trabalho. PaaS (Elastic Beanstalk): plataforma gerenciada. SaaS (Gmail): tudo gerenciado. Trade-off: controle vs responsabilidade.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_023',
        question: "Uma empresa quer executar código sem provisionar servidores e pagar apenas quando o código executa. Qual modelo?",
        options: [
            "IaaS com EC2",
            "Bare metal",
            "Containers com ECS",
            "Serverless (ex: AWS Lambda) — sem gerenciar servidores, pay-per-execution",
        ],
        correct: [3],
        explanation: "✅ Serverless: não provisiona/gerencia servidores. Lambda: upload código → executa sob demanda → paga por ms de execução. Zero custo quando idle. Ideal para eventos, APIs, processamento intermitente.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_024',
        question: "Qual é a diferença entre containers e máquinas virtuais?",
        options: [
            "São a mesma coisa",
            "Containers compartilham o kernel do OS (mais leves e rápidos). VMs têm OS completo próprio (mais isoladas)",
            "VMs são mais rápidas que containers",
            "Containers não funcionam na cloud"
        ],
        correct: [1],
        explanation: "✅ Containers: leves, iniciam em segundos, compartilham kernel. VMs: pesadas, iniciam em minutos, OS completo. Na AWS: ECS/EKS para containers, EC2 para VMs. Containers = mais eficientes para microservices.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_025',
        question: "O AWS Cloud Adoption Framework (CAF) ajuda organizações a planejar migração. Quantas perspectivas ele tem?",
        options: [
            "6 perspectivas: Business, People, Governance, Platform, Security, Operations",
            "3 perspectivas: Business, Technical, Operations",
            "5 pilares como o Well-Architected",
            "4 domínios como o exame CLF"
        ],
        correct: [0],
        explanation: "✅ CAF = 6 perspectivas para migração organizacional. Business: justificativa. People: cultura/skills. Governance: controle. Platform: arquitetura. Security: proteção. Operations: run. Diferente do Well-Architected (6 pilares para design).",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_026',
        question: "Uma empresa tem 500 servidores on-premises para migrar. Qual serviço AWS ajuda a descobrir e planejar a migração?",
        options: [
            "Amazon EC2",
            "AWS CloudFormation",
            "AWS Migration Hub — central para rastrear progresso da migração + discovery de servidores",
            "AWS Direct Connect"
        ],
        correct: [2],
        explanation: "✅ Migration Hub: painel central para planejar e rastrear migrações. Application Discovery Service: descobre servidores/dependências on-premises. Juntos: mapear ambiente → planejar → executar → monitorar progresso.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_027',
        question: "Qual estratégia de migração envolve TROCAR uma aplicação on-premises por uma versão SaaS?",
        options: [
            "Rehost (lift-and-shift)",
            "Retain",
            "Refactor",
            "Repurchase — trocar por SaaS (ex: trocar Exchange on-prem por Microsoft 365)",
        ],
        correct: [3],
        explanation: "✅ 6 Rs: Rehost (lift-shift), Replatform (lift-tinker-shift), Repurchase (trocar por SaaS), Refactor (reescrever), Retire (desligar), Retain (manter on-prem). Repurchase = abandonar código próprio por produto pronto.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_028',
        question: "O que é 'right-sizing' no contexto de otimização na cloud?",
        options: [
            "Sempre usar a maior instância disponível",
            "Selecionar o tipo e tamanho de recurso que corresponde exatamente à necessidade — nem mais, nem menos",
            "Usar sempre a menor instância",
            "Manter mesma configuração de on-premises"
        ],
        correct: [1],
        explanation: "✅ Right-sizing: analisar uso real (CPU, memória) e ajustar. t3.xlarge com 10% CPU → t3.small. Ferramentas: AWS Compute Optimizer, Cost Explorer. Fazer periodicamente pois necessidades mudam.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_029',
        question: "Qual benefício da cloud permite uma empresa alcançar usuários em outros continentes sem construir data centers lá?",
        options: [
            "Alcance global (global reach) — deploy em Regions ao redor do mundo em minutos",
            "Elasticidade",
            "Pay-as-you-go",
            "Segurança aprimorada"
        ],
        correct: [0],
        explanation: "✅ Global reach: 30+ Regions globalmente. Deploy aplicação em São Paulo + Frankfurt + Tokyo em minutos. Sem construir DCs. Usuários acessam Region mais próxima (baixa latência). Route 53 + CloudFront otimizam.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_030',
        question: "Uma empresa quer que sua equipe pare de gerenciar hardware e foque apenas no código da aplicação. Qual benefício da cloud?",
        options: [
            "Economia de escala",
            "Undifferentiated heavy lifting — AWS gerencia infra para que você foque no que gera valor ao negócio",
            "Tolerância a falhas",
            "Compliance automático"
        ],
        correct: [1],
        explanation: "✅ Undifferentiated heavy lifting: tarefas que não diferenciam seu negócio (patching, racking, cooling, rede). AWS cuida disso. Sua equipe foca no que importa: produto, features, clientes. Maior eficiência de engenharia.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    }
];

cloudConceptsQuestions.push(...cloudConceptsLote4);
