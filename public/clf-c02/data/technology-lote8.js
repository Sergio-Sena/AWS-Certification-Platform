// CLF-C02 Technology & Services - Lote 8 (tech_061 a tech_070)
// Foco: DevOps tools, Well-Architected, Global Infrastructure, Hybrid Cloud

const technologyLote8 = [
    {
        id: 'tech_061',
        question: "Quais são os 6 pilares do AWS Well-Architected Framework?",
        options: [
            "Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability",
            "Apenas custo e performance",
            "Apenas 3 pilares",
            "Apenas segurança e compliance"
        ],
        correct: [0],
        explanation: "✅ 6 pilares: 1) Operational Excellence (automate, improve), 2) Security (protect), 3) Reliability (recover, scale), 4) Performance Efficiency (right resources), 5) Cost Optimization (eliminate waste), 6) Sustainability (reduce environmental impact).",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_062',
        question: "Qual componente da infraestrutura global AWS é um data center ou grupo de data centers isolado com energia e rede independentes?",
        options: [
            "Region (grupo de AZs)",
            "Edge Location (CDN)",
            "Availability Zone (AZ) — data center(s) isolado com energia, cooling e rede independentes dentro de uma Region",
            "Local Zone"
        ],
        correct: [2],
        explanation: "✅ AZ: 1+ data centers com infraestrutura independente. Conectadas com fibra de baixa latência (<2ms entre AZs). Multi-AZ deployment: alta disponibilidade (se 1 AZ cai, outra continua). Mínimo 3 AZs por region.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_063',
        question: "Qual é a diferença entre alta disponibilidade (HA), tolerância a falhas e disaster recovery?",
        options: [
            "São a mesma coisa",
            "HA e DR são iguais",
            "Apenas DR importa",
            "HA: minimizar downtime (Multi-AZ). Fault Tolerance: zero downtime mesmo com falhas (redundância total). DR: recuperar de desastre em outra region",
        ],
        correct: [3],
        explanation: "✅ HA: sistema continua operando com degradação mínima (failover rápido). Fault Tolerance: nenhuma interrupção perceptível (mais caro, redundância ativa). DR: RPO (data loss) + RTO (downtime) entre regions após catástrofe.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_064',
        question: "Qual serviço AWS permite deploy de infraestrutura AWS em edge locations para latência ultra-baixa para aplicações locais?",
        options: [
            "AWS Outposts (hardware AWS on-premises)",
            "AWS Local Zones — extensão de uma AWS Region para áreas metropolitanas específicas, para latência single-digit ms",
            "AWS Wavelength (5G)",
            "CloudFront (CDN)"
        ],
        correct: [1],
        explanation: "✅ Local Zones: AWS compute/storage em cidades grandes (LA, Chicago, etc) para <10ms latency. Outposts: hardware AWS no SEU data center. Wavelength: dentro de redes 5G telecom. Cada um para latência específica.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_065',
        question: "Uma empresa quer CI/CD completamente gerenciado na AWS. Qual conjunto de serviços cobre source → build → test → deploy?",
        options: [
            "CodeCommit (source) → CodeBuild (build/test) → CodeDeploy (deploy) — orquestrado por CodePipeline (CI/CD pipeline)",
            "Apenas EC2 com Jenkins",
            "Apenas S3 + Lambda",
            "Apenas Elastic Beanstalk"
        ],
        correct: [0],
        explanation: "✅ CodePipeline: orquestrador. Stages: Source (CodeCommit/GitHub), Build (CodeBuild), Test (CodeBuild), Deploy (CodeDeploy/ECS/CloudFormation/Beanstalk). CodeArtifact: package manager. CodeGuru: ML code review.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_066',
        question: "Qual serviço AWS fornece containers Kubernetes GERENCIADOS sem precisar instalar/operar o control plane?",
        options: [
            "Instalar K8s manualmente em EC2",
            "Amazon ECS (não é Kubernetes)",
            "Amazon EKS — Kubernetes gerenciado. AWS opera control plane (API server, etcd). Você gerencia worker nodes (ou usa Fargate para serverless)",
            "AWS App Runner"
        ],
        correct: [2],
        explanation: "✅ EKS: managed K8s control plane (HA, multi-AZ, auto-patched). Worker options: EC2 managed node groups, self-managed nodes, Fargate (serverless). Compatível com ecosystem K8s (Helm, kubectl). ECS: proprietário AWS (mais simples).",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_067',
        question: "Qual serviço AWS permite rodar containers web/API de forma MAIS simples que ECS/EKS, sem configurar infraestrutura?",
        options: [
            "ECS com Fargate (precisa task definitions, services)",
            "Lambda (functions, não containers longos)",
            "Amazon Lightsail (VMs)",
            "AWS App Runner — deploy container/source code direto, auto-scaling, HTTPS, sem configurar VPC/LB. Ideal para web apps simples",
        ],
        correct: [3],
        explanation: "✅ App Runner: mais simples para web apps. Input: container image ou source code (Python, Node.js, Java). Output: URL HTTPS com auto-scaling, load balancing. Sem VPC/ALB/ASG config. Para apps que não precisam de controle fino.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_068',
        question: "Uma empresa precisa executar workloads AWS no próprio data center para atender a data residency. Qual serviço?",
        options: [
            "AWS Local Zones (em cidades, não no seu DC)",
            "AWS Outposts — rack de hardware AWS instalado no SEU data center, com serviços AWS (EC2, EBS, S3, EKS) operando localmente",
            "AWS Wavelength (5G)",
            "VPN apenas"
        ],
        correct: [1],
        explanation: "✅ Outposts: AWS infrastructure on-premises. Use cases: data residency, ultra-low latency local, local data processing. Managed by AWS (hardware, patching). Extensão da region (mesma API, console, tools). Rack ou server form factor.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_069',
        question: "Quais são as formas de acessar serviços AWS programaticamente?",
        options: [
            "AWS Management Console (browser), AWS CLI (terminal), AWS SDKs (código), AWS APIs (HTTP calls diretas), CloudShell (browser terminal)",
            "Apenas pelo console web",
            "Apenas CLI",
            "Apenas SDKs"
        ],
        correct: [0],
        explanation: "✅ Console: visual, browser. CLI: automação em scripts. SDKs: integrar em apps (Python/boto3, JS, Java, .NET, Go, Ruby, PHP, C++). APIs: REST calls diretas. CloudShell: CLI no browser. IaC: CloudFormation/CDK. Todos usam mesmas APIs.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_070',
        question: "O que é AWS Infrastructure as Code (IaC) e quais seus benefícios?",
        options: [
            "Apenas documentação de infraestrutura",
            "Definir infra em código (CloudFormation/CDK/Terraform) — benefícios: versionamento, repetibilidade, automação, consistency, auditoria, rollback",
            "Apenas automação de deploy",
            "Apenas monitoramento"
        ],
        correct: [1],
        explanation: "✅ IaC benefits: version control (Git history), repeatability (ambientes idênticos), speed (deploy em minutos), consistency (sem drift manual), documentation (código = documentação), testing (validar antes de deploy), rollback (revert state).",
        topic: "technology",
        domain: "technology"
    }
];

technologyQuestions.push(...technologyLote8);
