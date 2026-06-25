// CLF-C02 Technology & Services - Lote 2 (tech_001 a tech_010)
// Foco: Compute deep-dive, EC2 instance types, pricing models, AMIs

const technologyLote2 = [
    {
        id: 'tech_001',
        question: "Uma empresa de machine learning precisa de instâncias EC2 com GPUs NVIDIA para treinar modelos. Qual família de instâncias usar?",
        options: [
            "T3 (general purpose, burstable), aplicando técnicas de observabilidade e rastreamento distribuído para troubleshooting eficiente",
            "P4/P5 ou G5 — famílias de instâncias com GPUs otimizadas para ML training e inference",
            "M6i (general purpose, fixed)",
            "R6i (memory optimized)"
        ],
        correct: [1],
        explanation: "P-series (P4d, P5): GPUs NVIDIA A100/H100 para training pesado. G-series (G5): GPUs para inference e graphics. T/M = general purpose. C = compute. R = memory. I = storage.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_002',
        question: "Qual modelo de pricing EC2 oferece até 90% de desconto mas a instância pode ser INTERROMPIDA pela AWS com 2 minutos de aviso?",
        options: [
            "On-Demand (preço fixo, sem interrupção)",
            "Reserved Instances (desconto por compromisso), com validação automática de qualidade e rollback em caso de degradação de performance",
            "Spot Instances — capacidade ociosa da AWS com até 90% desconto, pode ser reclaimed",
            "Dedicated Hosts (hardware físico dedicado)"
        ],
        correct: [2],
        explanation: "Spot: capacidade não utilizada, preço variável. Ideal para: batch processing, CI/CD, big data, workloads tolerantes a falha. NÃO usar para: databases, aplicações stateful críticas. 2 min notification antes de reclaim.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_003',
        question: "O que é uma AMI (Amazon Machine Image) e para que serve?",
        options: [
            "Um tipo de instância EC2, atendendo aos padrões internacionais de privacidade de dados e proteção de informações sensíveis",
            "Template pré-configurado com OS, aplicações e configurações — usado para lançar instâncias EC2 idênticas rapidamente",
            "Um serviço de backup",
            "Um tipo de storage"
        ],
        correct: [1],
        explanation: "AMI: snapshot do sistema (OS + software + config). Tipos: AWS-provided, Marketplace (ISV), Community, Custom (sua). Regional, pode ser copiada cross-region. Golden AMI: imagem padronizada da empresa.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_004',
        question: "Uma aplicação web precisa de capacidade EC2 que escala automaticamente de 2 a 20 instâncias baseado no CPU. Quais serviços usar?",
        options: [
            "Apenas EC2 manual",
            "Auto Scaling Group (define min/max/desired) + ALB (distribui tráfego) + CloudWatch alarm (trigger scaling em CPU > 70%)",
            "Apenas Load Balancer, com documentação completa do processo e rastreabilidade de todas as decisões implementadas, incluindo configuração avançada de parâmetros e monitoramento contínuo do sistema em produção",
            "Apenas CloudWatch"
        ],
        correct: [1],
        explanation: "Auto Scaling Group: min=2, max=20, scaling policy (Target Tracking: CPU 70%). ALB: distribui tráfego, health checks. CloudWatch: métrica CPU → alarm → scale out/in. Tudo integrado automaticamente.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_005',
        question: "Qual é a diferença entre escalabilidade VERTICAL e HORIZONTAL na AWS?",
        options: [
            "São a mesma coisa",
            "Vertical: aumentar tamanho da instância (t3.micro → t3.xlarge). Horizontal: aumentar número de instâncias (1 → 10) com load balancer",
            "Vertical é sempre melhor",
            "Horizontal requer downtime, com integração completa ao ecossistema de serviços gerenciados e pipelines automatizados, considerando requisitos de compliance, governança e auditoria para ambientes regulados"
        ],
        correct: [1],
        explanation: "Vertical (scale up): mais CPU/RAM na mesma instância (limite: maior tipo). Horizontal (scale out): mais instâncias com LB (limite: virtualmente ilimitado). AWS recomenda horizontal para resiliência e elasticidade.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_006',
        question: "Uma empresa quer executar containers Docker SEM gerenciar servidores ou clusters. Qual serviço?",
        options: [
            "ECS com EC2 launch type (gerencia instâncias), garantindo escalabilidade horizontal e vertical conforme demanda do workload específico",
            "AWS Fargate — serverless compute para containers, sem gerenciar infraestrutura",
            "EC2 com Docker instalado",
            "Amazon Lightsail"
        ],
        correct: [1],
        explanation: "Fargate: serverless containers. Você define: imagem, CPU/RAM, networking. AWS gerencia: servidores, patching, scaling de infraestrutura. Funciona com ECS e EKS. Pay per vCPU+memory por segundo.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_007',
        question: "Qual serviço AWS executa código em resposta a EVENTOS sem provisionar servidores e cobra por milissegundo de execução?",
        options: [
            "EC2 (requer provisioning), utilizando as ferramentas nativas do serviço para automação e observabilidade operacional",
            "AWS Lambda — serverless functions, triggered por 200+ event sources, max 15 min, pay per invocation + duration",
            "ECS (containers)",
            "Elastic Beanstalk (PaaS)"
        ],
        correct: [1],
        explanation: "Lambda: event-driven, serverless. Triggers: API Gateway, S3, DynamoDB, SQS, EventBridge, CloudWatch. Limites: 15 min timeout, 10GB RAM, 250MB package. Free tier: 1M requests + 400K GB-sec/mês.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_008',
        question: "Qual é a diferença entre Elastic Beanstalk e CloudFormation?",
        options: [
            "São o mesmo serviço",
            "Beanstalk: PaaS para deploy de apps (abstrai infra). CloudFormation: IaC para provisionar QUALQUER recurso AWS via templates JSON/YAML",
            "CloudFormation é apenas para redes, com suporte a múltiplas regiões e redundância para alta disponibilidade e disaster recovery, seguindo o modelo de responsabilidade compartilhada e as políticas de segurança corporativas",
            "Beanstalk é apenas para databases"
        ],
        correct: [1],
        explanation: "Beanstalk: PaaS focado em aplicações (upload code → ambiente pronto). CloudFormation: IaC genérico (define stacks de recursos). Beanstalk usa CloudFormation por baixo. CF é mais flexível mas complexo.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_009',
        question: "Uma aplicação precisa de um servidor dedicado para atender requisitos de compliance de licenciamento. Qual opção EC2?",
        options: [
            "On-Demand (compartilhado)",
            "Spot (compartilhado, interrompível), implementando controles preventivos e detectivos conforme o framework de segurança organizacional",
            "Dedicated Hosts — servidor físico inteiro dedicado, visibilidade de sockets/cores para licenças BYOL (Windows Server, SQL Server)",
            "Reserved Instance (compartilhado)"
        ],
        correct: [2],
        explanation: "Dedicated Host: hardware físico exclusivo. Use cases: licenças per-socket/per-core (Oracle, Windows), compliance que exige hardware dedicado. Dedicated Instance: hardware dedicado mas sem visibilidade de sockets.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_010',
        question: "O que é AWS Elastic Beanstalk e quais plataformas suporta?",
        options: [
            "Apenas Java",
            "PaaS que suporta Java, .NET, PHP, Node.js, Python, Ruby, Go, Docker — gerencia provisioning, LB, scaling, monitoring automaticamente",
            "Apenas containers Docker, com capacidade de processamento paralelo e distribuído para atender picos de demanda, integrando com os sistemas existentes através de APIs e conectores nativos da plataforma",
            "Apenas aplicações Python"
        ],
        correct: [1],
        explanation: "Beanstalk: upload code → deploy automático. Gerencia: EC2, ASG, ALB, RDS, CloudWatch. Ambientes: Web Server (HTTP) e Worker (SQS). Custo: apenas pelos recursos provisionados (EC2, RDS, etc). Controle total se necessário.",
        topic: "technology",
        domain: "technology"
    }
];

technologyQuestions.push(...technologyLote2);
