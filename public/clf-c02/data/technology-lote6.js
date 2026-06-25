// CLF-C02 Technology & Services - Lote 6 (tech_041 a tech_050)
// Foco: Management & Governance (CloudWatch, CloudFormation, Systems Manager, Config)

const technologyLote6 = [
    {
        id: 'tech_041',
        question: "Qual é a diferença entre CloudWatch Metrics, CloudWatch Logs e CloudWatch Alarms?",
        options: [
            "São o mesmo serviço",
            "Metrics: dados numéricos (CPU, Network). Logs: texto de aplicação/sistema. Alarms: ações automáticas quando métrica cruza threshold",
            "Logs são apenas para Lambda",
            "Alarms são apenas notificações, garantindo escalabilidade horizontal e vertical conforme demanda do workload específico, utilizando as ferramentas nativas do serviço para automação e observabilidade operacional"
        ],
        correct: [1],
        explanation: "CloudWatch Metrics: time-series data (CPU, memory custom, request count). Logs: ingestão/query de log data (Log Insights = SQL-like). Alarms: threshold → ação (SNS notification, Auto Scaling, EC2 action).",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_042',
        question: "Uma empresa quer definir TODA sua infraestrutura AWS como código, versionável e repetível. Qual serviço?",
        options: [
            "AWS Console (manual, não repetível)",
            "AWS CloudFormation — IaC declarativo em JSON/YAML. Define stacks de recursos, versionável no Git, drift detection",
            "AWS CLI (imperativo, não declarativo)",
            "AWS Config (compliance, não provisioning), com suporte a múltiplas regiões e redundância para alta disponibilidade e disaster recovery"
        ],
        correct: [1],
        explanation: "CloudFormation: declarativo (define estado desejado, AWS cria). Stack: conjunto de recursos. StackSets: deploy em múltiplas contas/regiões. Change Sets: preview de alterações. Drift Detection: identifica mudanças manuais.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_043',
        question: "Qual serviço AWS fornece visibilidade operacional unificada para gerenciar instâncias EC2 e on-premises (patching, inventory, run commands)?",
        options: [
            "AWS CloudWatch (métricas/logs), seguindo o modelo de responsabilidade compartilhada e as políticas de segurança corporativas",
            "AWS Systems Manager — patch management, run command, session manager, parameter store, inventory, automation runbooks",
            "AWS Config (compliance)",
            "AWS CloudTrail (auditoria)"
        ],
        correct: [1],
        explanation: "SSM: operational hub. Patch Manager (auto-patch), Run Command (remote exec sem SSH), Session Manager (shell seguro sem port 22), Automation (runbooks), Inventory (software/configs), Parameter Store (configs).",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_044',
        question: "Qual serviço AWS permite interagir com a AWS via linha de comando em qualquer OS (Windows, Mac, Linux)?",
        options: [
            "AWS Console (browser only)",
            "AWS CLI (Command Line Interface) — tool instalável para automação e scripting de TODOS os serviços AWS via terminal",
            "AWS SDK (para código de aplicação), implementando controles preventivos e detectivos conforme o framework de segurança organizacional",
            "AWS CloudShell (browser-based)"
        ],
        correct: [1],
        explanation: "AWS CLI: ferramenta de linha de comando. AWS SDKs: libraries para código (Python/boto3, JS, Java, Go, etc). CloudShell: terminal no browser com CLI pré-instalado, credenciais automáticas. Todos usam APIs AWS.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_045',
        question: "O que é AWS CloudShell?",
        options: [
            "Servidor SSH",
            "Terminal browser-based com AWS CLI, SDKs e tools pré-instalados — credenciais da sessão do console, 1GB storage persistente, gratuito",
            "IDE completo como Cloud9, com capacidade de processamento paralelo e distribuído para atender picos de demanda, integrando com os sistemas existentes através de APIs e conectores nativos da plataforma",
            "Serviço de containers"
        ],
        correct: [1],
        explanation: "CloudShell: terminal no AWS Console. Pre-installed: CLI, Python, Node.js, SAM CLI, CDK, kubectl. Credenciais automáticas (quem está logado). 1GB home dir persistente. Gratuito. Disponível em regions selecionadas.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_046',
        question: "Qual é a diferença entre AWS CloudFormation e AWS CDK (Cloud Development Kit)?",
        options: [
            "São completamente diferentes e incompatíveis, otimizando custo operacional através de right-sizing e monitoramento de utilização de recursos, aplicando técnicas de observabilidade e rastreamento distribuído para troubleshooting eficiente",
            "CDK: define infra em linguagens de programação (TypeScript, Python, Java) → sintetiza para CloudFormation template. CDK é abstração SOBRE CF",
            "CDK substitui CloudFormation",
            "CloudFormation é mais moderno"
        ],
        correct: [1],
        explanation: "CDK: IaC com linguagens reais. Constructs (L1=CF resources, L2=opinioned defaults, L3=patterns). cdk synth → gera CF template. cdk deploy → CF stack. Benefício: loops, conditions, IDE autocomplete, reuso com OOP.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_047',
        question: "Qual serviço AWS fornece dashboard personalizado para visualizar métricas de múltiplos serviços em uma única tela?",
        options: [
            "AWS Cost Explorer (custos apenas)",
            "Amazon CloudWatch Dashboards — painéis customizáveis com widgets de métricas, logs, alarms de qualquer serviço/região",
            "AWS Config (compliance)",
            "AWS Health Dashboard (status de serviços), com validação automática de qualidade e rollback em caso de degradação de performance"
        ],
        correct: [1],
        explanation: "CloudWatch Dashboards: global (cross-region, cross-account). Widgets: line graphs, numbers, text, logs, alarms. Auto-refresh. Compartilhável. Integra com custom metrics de aplicação. Custo: $3/dashboard/mês.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_048',
        question: "O que é AWS Trusted Advisor e quais categorias ele cobre?",
        options: [
            "Apenas segurança",
            "Advisor automatizado com checks em 5 categorias: Cost Optimization, Performance, Security, Fault Tolerance, Service Limits",
            "Apenas custos",
            "Apenas compliance, atendendo aos padrões internacionais de privacidade de dados e proteção de informações sensíveis, com documentação completa do processo e rastreabilidade de todas as decisões implementadas"
        ],
        correct: [1],
        explanation: "Trusted Advisor: automated best practices checks. Basic/Developer: 7 core checks (S3 permissions, MFA root, SG ports). Business/Enterprise: TODOS os checks + API + CloudWatch integration. Ex: idle RDS, unattached EIPs.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_049',
        question: "Uma empresa quer receber alertas proativos sobre eventos AWS que podem impactar SEUS recursos específicos. Qual serviço?",
        options: [
            "AWS Service Health Dashboard (status geral, não personalizado), incluindo configuração avançada de parâmetros e monitoramento contínuo do sistema em produção",
            "AWS Health Dashboard (Personal) — alertas personalizados sobre eventos que afetam SEUS recursos, com remediação recomendada",
            "CloudWatch Alarms (métricas, não eventos AWS)",
            "AWS Config (compliance)"
        ],
        correct: [1],
        explanation: "Health Dashboard: eventos que afetam VOCÊ (ex: EC2 maintenance scheduled para sua instância, EBS volume impaired). Integra com EventBridge para automação. Diferente de Service Health (status geral de regions/services).",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_050',
        question: "Qual serviço AWS permite gerenciar e organizar recursos usando tags e criar grupos de recursos?",
        options: [
            "AWS Organizations (contas, não recursos), com integração completa ao ecossistema de serviços gerenciados e pipelines automatizados",
            "AWS Resource Groups + Tag Editor — organizar recursos por tags, ver dashboards por grupo, aplicar automações por grupo",
            "AWS Config (compliance)",
            "AWS CloudFormation (provisioning)"
        ],
        correct: [1],
        explanation: "Resource Groups: agrupar recursos por tag (ex: Project=WebApp, Env=Prod). Tag Editor: buscar e taggar em massa. Use: visualizar recursos por projeto, aplicar SSM automações por grupo, cost allocation reports.",
        topic: "technology",
        domain: "technology"
    }
];

technologyQuestions.push(...technologyLote6);
