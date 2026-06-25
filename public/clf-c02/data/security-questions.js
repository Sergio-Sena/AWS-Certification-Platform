// DOMAIN 2: SECURITY & COMPLIANCE - 58 questões adicionais (30% total = 60 questões)

const securityQuestions = [
    {
        id: 51,
        question: "O que é MFA (Multi-Factor Authentication)?",
        options: [
            "Autenticação com múltiplos fatores de segurança",
            "Autenticação com múltiplos usuários",
            "Autenticação apenas com senha",
            "Autenticação automática"
        ],
        correct: [0],
        explanation: "✅ MFA adiciona camadas extras de segurança além da senha, como tokens ou biometria.",
        topic: "security", domain: "security"
    },
    {
        id: 52,
        question: "Qual serviço AWS monitora atividades de API?",
        options: ["AWS CloudWatch", "AWS CloudTrail", "AWS Config", "AWS Inspector"],
        options: ["AWS CloudHSM apenas", "AWS KMS com rotação automática", "Criptografia manual com OpenSSL", "AWS Secrets Manager apenas"],
        options: [
            "Dar acesso máximo",
            "Dar acesso igual para todos",
            "Dar apenas o acesso mínimo necessário",
            "Não dar acesso"
        ],
        correct: [2],
        explanation: "✅ Least privilege concede apenas as permissões mínimas necessárias para realizar uma tarefa.",
        topic: "security", domain: "security"
    },
    {
        id: 55,
        question: "O que são Security Groups na AWS?",
        options: [
            "Grupos de usuários",
            "Grupos de regiões",
            "Grupos de serviços",
            "Firewalls virtuais para instâncias EC2",
        ],
        correct: [3],
        explanation: "✅ Security Groups atuam como firewalls virtuais controlando tráfego de entrada e saída das instâncias.",
        topic: "security", domain: "security"
    },
    {
        id: 56,
        question: "Qual serviço AWS detecta ameaças de segurança?",
        options: ["AWS GuardDuty", "AWS CloudWatch", "AWS Config", "AWS CloudFormation"],
        options: [
            "Criptografia de dados parados",
            "Criptografia de dados em movimento",
            "Criptografia de backup",
            "Criptografia de logs"
        ],
        correct: [1],
        explanation: "✅ Criptografia em trânsito protege dados enquanto estão sendo transmitidos pela rede.",
        topic: "security", domain: "security"
    },
    {
        id: 58,
        question: "O que é criptografia em repouso?",
        options: ["Criptografia de dados em movimento", "Criptografia de dados armazenados", "Criptografia de rede", "Criptografia de aplicação"],
        options: ["AWS Config", "AWS CloudWatch", "AWS CloudTrail", "AWS Lambda"],
        options: [
            "Firewalls de nível de subnet",
            "Listas de usuários",
            "Listas de aplicações",
            "Listas de serviços"
        ],
        correct: [0],
        explanation: "✅ NACLs são firewalls stateless que controlam tráfego no nível de subnet.",
        topic: "security", domain: "security"
    },
    {
        id: 61,
        question: "Qual é a diferença entre Security Groups e NACLs?",
        options: ["Não há diferença", "Security Groups são stateful, NACLs são stateless", "Security Groups são stateless, NACLs são stateful", "Ambos são iguais"],
        options: [
            "Wireless Access Filter",
            "Wide Area Framework",
            "Web Application Firewall",
            "Web Access Function"
        ],
        correct: [2],
        explanation: "✅ AWS WAF é um firewall de aplicação web que protege contra ataques comuns como SQL injection.",
        topic: "security", domain: "security"
    },
    {
        id: 63,
        question: "Qual serviço AWS gerencia certificados SSL/TLS?",
        options: [
            "AWS CloudFront",
            "AWS KMS",
            "AWS IAM",
            "AWS Certificate Manager",
        ],
        correct: [3],
        explanation: "✅ AWS Certificate Manager provisiona e gerencia certificados SSL/TLS para uso com serviços AWS.",
        topic: "security", domain: "security"
    },
    {
        id: 64,
        question: "O que é AWS Shield?",
        options: [
            "Antivírus",
            "Proteção contra DDoS",
            "Backup service",
            "Monitoring service"
        ],
        correct: [1],
        explanation: "✅ AWS Shield fornece proteção contra ataques DDoS (Distributed Denial of Service).",
        topic: "security", domain: "security"
    },
    {
        id: 65,
        question: "Qual é a diferença entre AWS Shield Standard e Advanced?",
        options: [
            "Standard é gratuito, Advanced é pago com proteção adicional",
            "Não há diferença",
            "Advanced é gratuito",
            "Standard é mais caro"
        ],
        correct: [0],
        explanation: "✅ Shield Standard é gratuito para todos os clientes, Shield Advanced oferece proteção adicional por uma taxa.",
        topic: "security", domain: "security"
    },
    {
        id: 66,
        question: "O que são IAM Roles?",
        options: [
            "Usuários permanentes",
            "Grupos de usuários",
            "Identidades temporárias com permissões específicas",
            "Políticas de segurança"
        ],
        correct: [2],
        explanation: "✅ IAM Roles são identidades temporárias que podem ser assumidas por usuários, aplicações ou serviços.",
        topic: "security", domain: "security"
    },
    {
        id: 67,
        question: "O que são IAM Policies?",
        options: [
            "Logs de auditoria",
            "Usuários do sistema",
            "Grupos de recursos",
            "Documentos que definem permissões",
        ],
        correct: [3],
        explanation: "✅ IAM Policies são documentos JSON que definem permissões para usuários, grupos ou roles.",
        topic: "security", domain: "security"
    },
    {
        id: 68,
        question: "Qual serviço AWS inspeciona vulnerabilidades em aplicações?",
        options: ["AWS Inspector", "AWS GuardDuty", "AWS Config", "AWS CloudWatch"],
        options: [
            "Gerenciamento de usuários",
            "Gerenciamento de segredos como senhas e chaves de API",
            "Gerenciamento de logs",
            "Gerenciamento de backups"
        ],
        correct: [1],
        explanation: "✅ AWS Secrets Manager armazena e rotaciona automaticamente segredos como senhas de banco de dados.",
        topic: "security", domain: "security"
    },
    {
        id: 70,
        question: "Qual é o benefício do AWS Systems Manager Parameter Store?",
        options: [
            "Armazenar parâmetros de configuração de forma segura",
            "Monitorar sistemas",
            "Fazer backup",
            "Gerenciar usuários"
        ],
        correct: [0],
        explanation: "✅ Parameter Store armazena dados de configuração e segredos de forma hierárquica e segura.",
        topic: "security", domain: "security"
    },
    {
        id: 71,
        question: "O que é compliance na AWS?",
        options: [
            "Monitoramento de performance",
            "Apenas backup de dados",
            "Conformidade com padrões e regulamentações",
            "Otimização de custos"
        ],
        correct: [2],
        explanation: "✅ Compliance refere-se à conformidade com padrões de segurança e regulamentações como GDPR, HIPAA.",
        topic: "security", domain: "security"
    },
    {
        id: 72,
        question: "Qual serviço AWS ajuda com conformidade regulatória?",
        options: ["AWS Artifact", "AWS CloudWatch", "AWS Lambda", "AWS S3"],
        options: [
            "Serviço de rede",
            "Serviço de backup",
            "Serviço de monitoramento",
            "Serviço de descoberta e proteção de dados sensíveis",
        ],
        correct: [3],
        explanation: "✅ AWS Macie usa machine learning para descobrir, classificar e proteger dados sensíveis.",
        topic: "security", domain: "security"
    },
    {
        id: 74,
        question: "Qual é o propósito do AWS Security Hub?",
        options: [
            "Apenas monitorar EC2",
            "Centralizar descobertas de segurança de múltiplos serviços",
            "Gerenciar usuários",
            "Fazer backup"
        ],
        correct: [1],
        explanation: "✅ Security Hub centraliza descobertas de segurança de vários serviços AWS e parceiros.",
        topic: "security", domain: "security"
    },
    {
        id: 75,
        question: "O que são VPC Flow Logs?",
        options: [
            "Logs de tráfego de rede na VPC",
            "Logs de aplicação",
            "Logs de sistema",
            "Logs de backup"
        ],
        correct: [0],
        explanation: "✅ VPC Flow Logs capturam informações sobre tráfego IP entrando e saindo de interfaces de rede.",
        topic: "security", domain: "security"
    },
    {
        id: 76,
        question: "Qual é o benefício da rotação automática de chaves no KMS?",
        options: [
            "Aumentar performance",
            "Reduzir custos",
            "Melhorar segurança através da troca regular de chaves",
            "Simplificar gerenciamento"
        ],
        correct: [2],
        explanation: "✅ Rotação automática melhora segurança trocando chaves regularmente sem impactar aplicações.",
        topic: "security", domain: "security"
    },
    {
        id: 77,
        question: "O que é AWS Directory Service?",
        options: [
            "Serviço de rede",
            "Serviço de backup",
            "Serviço de monitoramento",
            "Serviço de diretório gerenciado",
        ],
        correct: [3],
        explanation: "✅ AWS Directory Service fornece Active Directory gerenciado na nuvem AWS.",
        topic: "security", domain: "security"
    },
    {
        id: 78,
        question: "Qual serviço AWS fornece single sign-on (SSO)?",
        options: ["AWS SSO", "AWS IAM", "AWS Cognito", "AWS Directory Service"],
        options: [
            "Serviço de backup",
            "Serviço de autenticação para aplicações web e mobile",
            "Serviço de monitoramento",
            "Serviço de rede"
        ],
        correct: [1],
        explanation: "✅ AWS Cognito fornece autenticação, autorização e gerenciamento de usuários para aplicações.",
        topic: "security", domain: "security"
    },
    {
        id: 80,
        question: "Qual é a diferença entre autenticação e autorização?",
        options: ["Autenticação verifica identidade, autorização verifica permissões", "São a mesma coisa", "Autorização verifica identidade, autenticação verifica permissões", "Não há diferença"],
        options: [
            "Gerenciamento centralizado de múltiplas contas AWS",
            "Grupos de usuários",
            "Grupos de recursos",
            "Grupos de serviços"
        ],
        correct: [0],
        explanation: "✅ AWS Organizations permite gerenciar centralmente múltiplas contas AWS com políticas e faturamento consolidado.",
        topic: "security", domain: "security"
    },
    {
        id: 82,
        question: "O que são Service Control Policies (SCPs)?",
        options: [
            "Políticas de rede",
            "Políticas de backup",
            "Políticas que definem permissões máximas para contas em Organizations",
            "Políticas de monitoramento"
        ],
        correct: [2],
        explanation: "✅ SCPs definem as permissões máximas que usuários e roles podem ter em contas de uma organização.",
        topic: "security", domain: "security"
    },
    {
        id: 83,
        question: "Qual é o propósito do AWS Control Tower?",
        options: [
            "Fazer backup",
            "Monitorar performance",
            "Gerenciar custos",
            "Configurar e governar ambiente AWS multi-conta seguro",
        ],
        correct: [3],
        explanation: "✅ Control Tower automatiza a configuração de um ambiente AWS multi-conta seguro e bem arquitetado.",
        topic: "security", domain: "security"
    },
    {
        id: 84,
        question: "O que é AWS Resource Access Manager (RAM)?",
        options: [
            "Gerenciar memória",
            "Compartilhar recursos AWS entre contas",
            "Monitorar recursos",
            "Fazer backup de recursos"
        ],
        correct: [1],
        explanation: "✅ AWS RAM permite compartilhar recursos AWS de forma segura entre contas ou dentro de uma organização.",
        topic: "security", domain: "security"
    },
    {
        id: 85,
        question: "Qual é o benefício da auditoria contínua na AWS?",
        options: [
            "Monitorar conformidade e detectar mudanças não autorizadas",
            "Reduzir custos",
            "Aumentar performance",
            "Simplificar operações"
        ],
        correct: [0],
        explanation: "✅ Auditoria contínua monitora conformidade e detecta mudanças não autorizadas em tempo real.",
        topic: "security", domain: "security"
    },
    {
        id: 86,
        question: "O que são AWS Config Rules?",
        options: [
            "Regras de backup",
            "Regras de rede",
            "Regras que avaliam configurações de recursos AWS",
            "Regras de monitoramento"
        ],
        correct: [2],
        explanation: "✅ Config Rules avaliam automaticamente se configurações de recursos AWS estão em conformidade.",
        topic: "security", domain: "security"
    },
    {
        id: 87,
        question: "Qual serviço AWS fornece proteção DDoS avançada?",
        options: [
            "AWS Inspector",
            "AWS WAF",
            "AWS GuardDuty",
            "AWS Shield Advanced",
        ],
        correct: [3],
        explanation: "✅ Shield Advanced fornece proteção DDoS avançada com resposta 24/7 da equipe DRT da AWS.",
        topic: "security", domain: "security"
    },
    {
        id: 88,
        question: "O que é AWS CloudHSM?",
        options: [
            "Serviço de backup",
            "Hardware Security Module dedicado na nuvem",
            "Serviço de monitoramento",
            "Serviço de rede"
        ],
        correct: [1],
        explanation: "✅ CloudHSM fornece módulos de segurança de hardware dedicados para gerar e usar chaves criptográficas.",
        topic: "security", domain: "security"
    },
    {
        id: 89,
        question: "Qual é a diferença entre KMS e CloudHSM?",
        options: ["KMS é multi-tenant, CloudHSM é single-tenant", "Não há diferença", "CloudHSM é multi-tenant, KMS é single-tenant", "Ambos são iguais"],
        options: [
            "Permitem todo tráfego de saída, negam todo tráfego de entrada",
            "Permitem todo tráfego",
            "Negam todo tráfego",
            "Não existem regras padrão"
        ],
        correct: [0],
        explanation: "✅ Security Groups padrão permitem todo tráfego de saída e negam todo tráfego de entrada por padrão.",
        topic: "security", domain: "security"
    },
    {
        id: 91,
        question: "Qual é o propósito do AWS Trusted Advisor?",
        options: [
            "Apenas fazer backup",
            "Apenas monitorar custos",
            "Fornecer recomendações de otimização incluindo segurança",
            "Apenas gerenciar usuários"
        ],
        correct: [2],
        explanation: "✅ Trusted Advisor fornece recomendações em cinco categorias: custo, performance, segurança, tolerância a falhas e limites de serviço.",
        topic: "security", domain: "security"
    },
    {
        id: 92,
        question: "O que é penetration testing na AWS?",
        options: [
            "Teste de rede",
            "Teste de performance",
            "Teste de backup",
            "Teste de segurança autorizado para encontrar vulnerabilidades",
        ],
        correct: [3],
        explanation: "✅ Penetration testing é teste de segurança autorizado para identificar vulnerabilidades em sistemas.",
        topic: "security", domain: "security"
    },
    {
        id: 93,
        question: "Quais serviços AWS podem ser testados sem aprovação prévia?",
        options: [
            "Todos os serviços",
            "EC2, RDS, CloudFront, Aurora, Lambda, Lightsail, Elastic Beanstalk",
            "Nenhum serviço",
            "Apenas EC2"
        ],
        correct: [1],
        explanation: "✅ AWS permite penetration testing em vários serviços sem aprovação prévia, mas com algumas restrições.",
        topic: "security", domain: "security"
    },
    {
        id: 94,
        question: "O que é AWS Detective?",
        options: [
            "Serviço de análise e investigação de segurança",
            "Serviço de backup",
            "Serviço de monitoramento básico",
            "Serviço de rede"
        ],
        correct: [0],
        explanation: "✅ AWS Detective analisa e visualiza dados de segurança para investigar potenciais problemas de segurança.",
        topic: "security", domain: "security"
    },
    {
        id: 95,
        question: "Qual é o benefício da criptografia de dados em múltiplas camadas?",
        options: [
            "Apenas aumentar performance",
            "Apenas reduzir custos",
            "Defesa em profundidade com múltiplas barreiras de segurança",
            "Apenas simplificar gerenciamento"
        ],
        correct: [2],
        explanation: "✅ Criptografia em múltiplas camadas fornece defesa em profundidade, protegendo dados mesmo se uma camada for comprometida.",
        topic: "security", domain: "security"
    },
    {
        id: 96,
        question: "O que são AWS Security Standards?",
        options: [
            "Apenas certificações",
            "Apenas documentação",
            "Apenas treinamentos",
            "Conjunto de melhores práticas de segurança da AWS",
        ],
        correct: [3],
        explanation: "✅ AWS Security Standards são melhores práticas e diretrizes para implementar segurança robusta na AWS.",
        topic: "security", domain: "security"
    },
    {
        id: 97,
        question: "Qual é o propósito do AWS Well-Architected Security Pillar?",
        options: [
            "Apenas reduzir custos",
            "Orientar design de sistemas seguros na nuvem",
            "Apenas aumentar performance",
            "Apenas simplificar operações"
        ],
        correct: [1],
        explanation: "✅ O Security Pillar do Well-Architected Framework orienta o design de sistemas seguros e resilientes.",
        topic: "security", domain: "security"
    },
    {
        id: 98,
        question: "O que é incident response na AWS?",
        options: [
            "Processo estruturado para responder a incidentes de segurança",
            "Apenas fazer backup",
            "Apenas monitorar sistemas",
            "Apenas gerenciar usuários"
        ],
        correct: [0],
        explanation: "✅ Incident response é um processo estruturado para detectar, analisar e responder a incidentes de segurança.",
        topic: "security", domain: "security"
    },
    {
        id: 99,
        question: "Qual é a importância do logging de segurança?",
        options: [
            "Apenas aumentar performance",
            "Apenas reduzir custos",
            "Fornecer trilha de auditoria para investigações e conformidade",
            "Apenas simplificar operações"
        ],
        correct: [2],
        explanation: "✅ Logging de segurança fornece trilha de auditoria essencial para investigações, conformidade e detecção de ameaças.",
        topic: "security", domain: "security"
    },
    {
        id: 100,
        question: "O que são threat intelligence feeds?",
        options: [
            "Feeds de custos",
            "Feeds de notícias",
            "Feeds de performance",
            "Fontes de informação sobre ameaças de segurança atuais",
        ],
        correct: [3],
        explanation: "✅ Threat intelligence feeds fornecem informações atualizadas sobre ameaças de segurança conhecidas e emergentes.",
        topic: "security", domain: "security"
    },
    {
        id: 101,
        question: "Qual é o benefício da segmentação de rede na AWS?",
        options: [
            "Apenas reduzir custos",
            "Isolar recursos e limitar propagação de ataques",
            "Apenas aumentar performance",
            "Apenas simplificar gerenciamento"
        ],
        correct: [1],
        explanation: "✅ Segmentação de rede isola recursos em diferentes segmentos, limitando o escopo de potenciais ataques.",
        topic: "security", domain: "security"
    },
    {
        id: 102,
        question: "O que é zero trust security model?",
        options: [
            "Modelo que não confia em nada por padrão e verifica tudo",
            "Modelo que confia em tudo",
            "Modelo apenas para redes",
            "Modelo apenas para usuários"
        ],
        correct: [0],
        explanation: "✅ Zero trust não confia em nada por padrão e requer verificação contínua de todos os usuários e dispositivos.",
        topic: "security", domain: "security"
    },
    {
        id: 103,
        question: "Qual é a importância da educação em segurança?",
        options: [
            "Apenas aumentar performance",
            "Apenas reduzir custos",
            "Treinar usuários para reconhecer e evitar ameaças",
            "Apenas simplificar operações"
        ],
        correct: [2],
        explanation: "✅ Educação em segurança treina usuários para reconhecer ameaças como phishing e seguir melhores práticas.",
        topic: "security", domain: "security"
    },
    {
        id: 104,
        question: "O que são security baselines?",
        options: [
            "Apenas backup",
            "Apenas documentação",
            "Apenas monitoramento",
            "Configurações mínimas de segurança recomendadas",
        ],
        correct: [3],
        explanation: "✅ Security baselines definem configurações mínimas de segurança que todos os sistemas devem atender.",
        topic: "security", domain: "security"
    },
    {
        id: 105,
        question: "Qual é o propósito da classificação de dados?",
        options: [
            "Apenas organizar arquivos",
            "Categorizar dados baseado em sensibilidade e requisitos de proteção",
            "Apenas reduzir custos",
            "Apenas aumentar performance"
        ],
        correct: [1],
        explanation: "✅ Classificação de dados categoriza informações baseado em sensibilidade para aplicar proteções apropriadas.",
        topic: "security", domain: "security"
    },
    {
        id: 106,
        question: "O que é data loss prevention (DLP)?",
        options: [
            "Tecnologias para prevenir vazamento de dados sensíveis",
            "Apenas backup de dados",
            "Apenas criptografia",
            "Apenas monitoramento"
        ],
        correct: [0],
        explanation: "✅ DLP usa tecnologias para identificar, monitorar e proteger dados sensíveis contra vazamentos não autorizados.",
        topic: "security", domain: "security"
    },
    {
        id: 107,
        question: "Qual é a importância da gestão de vulnerabilidades?",
        options: [
            "Apenas aumentar performance",
            "Apenas reduzir custos",
            "Identificar e corrigir vulnerabilidades antes que sejam exploradas",
            "Apenas simplificar operações"
        ],
        correct: [2],
        explanation: "✅ Gestão de vulnerabilidades identifica, avalia e corrige vulnerabilidades de segurança proativamente.",
        topic: "security", domain: "security"
    },
    {
        id: 108,
        question: "O que são security orchestration tools?",
        options: [
            "Apenas relatórios",
            "Apenas monitoramento",
            "Apenas backup",
            "Ferramentas que automatizam resposta a incidentes de segurança",
        ],
        correct: [3],
        explanation: "✅ Security orchestration automatiza e coordena respostas a incidentes de segurança para resposta mais rápida e consistente.",
        topic: "security", domain: "security"
    }
];

window.securityQuestions = securityQuestions;