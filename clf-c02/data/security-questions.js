// DOMAIN 2: SECURITY & COMPLIANCE - 58 questões adicionais (30% total = 60 questões)

const securityQuestions = [
    {
        id: 51,
        question: "O que é MFA (Multi-Factor Authentication)?",
        options: ["Autenticação com múltiplos usuários", "Autenticação com múltiplos fatores de segurança", "Autenticação apenas com senha", "Autenticação automática"],
        correct: [1],
        explanation: "MFA adiciona camadas extras de segurança além da senha, como tokens ou biometria.",
        topic: "security", domain: "security"
    },
    {
        id: 52,
        question: "Qual serviço AWS monitora atividades de API?",
        options: ["AWS CloudWatch", "AWS CloudTrail", "AWS Config", "AWS Inspector"],
        correct: [1],
        explanation: "AWS CloudTrail registra todas as chamadas de API feitas na conta AWS.",
        topic: "security", domain: "security"
    },
    {
        id: 53,
        question: "O que é AWS KMS?",
        options: ["Serviço de monitoramento", "Serviço de gerenciamento de chaves de criptografia", "Serviço de backup", "Serviço de rede"],
        correct: [1],
        explanation: "AWS KMS (Key Management Service) gerencia chaves de criptografia de forma segura.",
        topic: "security", domain: "security"
    },
    {
        id: 54,
        question: "Qual é o princípio de 'least privilege'?",
        options: ["Dar acesso máximo", "Dar apenas o acesso mínimo necessário", "Dar acesso igual para todos", "Não dar acesso"],
        correct: [1],
        explanation: "Least privilege concede apenas as permissões mínimas necessárias para realizar uma tarefa.",
        topic: "security", domain: "security"
    },
    {
        id: 55,
        question: "O que são Security Groups na AWS?",
        options: ["Grupos de usuários", "Firewalls virtuais para instâncias EC2", "Grupos de serviços", "Grupos de regiões"],
        correct: [1],
        explanation: "Security Groups atuam como firewalls virtuais controlando tráfego de entrada e saída das instâncias.",
        topic: "security", domain: "security"
    },
    {
        id: 56,
        question: "Qual serviço AWS detecta ameaças de segurança?",
        options: ["AWS GuardDuty", "AWS CloudWatch", "AWS Config", "AWS CloudFormation"],
        correct: [0],
        explanation: "AWS GuardDuty é um serviço de detecção de ameaças que monitora atividades maliciosas.",
        topic: "security", domain: "security"
    },
    {
        id: 57,
        question: "O que é criptografia em trânsito?",
        options: ["Criptografia de dados em movimento", "Criptografia de dados parados", "Criptografia de backup", "Criptografia de logs"],
        correct: [0],
        explanation: "Criptografia em trânsito protege dados enquanto estão sendo transmitidos pela rede.",
        topic: "security", domain: "security"
    },
    {
        id: 58,
        question: "O que é criptografia em repouso?",
        options: ["Criptografia de dados em movimento", "Criptografia de dados armazenados", "Criptografia de rede", "Criptografia de aplicação"],
        correct: [1],
        explanation: "Criptografia em repouso protege dados quando estão armazenados em discos ou bancos de dados.",
        topic: "security", domain: "security"
    },
    {
        id: 59,
        question: "Qual serviço AWS avalia configurações de segurança?",
        options: ["AWS Config", "AWS CloudWatch", "AWS CloudTrail", "AWS Lambda"],
        correct: [0],
        explanation: "AWS Config avalia configurações de recursos AWS contra regras de conformidade.",
        topic: "security", domain: "security"
    },
    {
        id: 60,
        question: "O que são NACLs (Network Access Control Lists)?",
        options: ["Listas de usuários", "Firewalls de nível de subnet", "Listas de aplicações", "Listas de serviços"],
        correct: [1],
        explanation: "NACLs são firewalls stateless que controlam tráfego no nível de subnet.",
        topic: "security", domain: "security"
    },
    {
        id: 61,
        question: "Qual é a diferença entre Security Groups e NACLs?",
        options: ["Não há diferença", "Security Groups são stateful, NACLs são stateless", "Security Groups são stateless, NACLs são stateful", "Ambos são iguais"],
        correct: [1],
        explanation: "Security Groups são stateful (lembram conexões), NACLs são stateless (avaliam cada pacote independentemente).",
        topic: "security", domain: "security"
    },
    {
        id: 62,
        question: "O que é AWS WAF?",
        options: ["Web Application Firewall", "Wide Area Framework", "Wireless Access Filter", "Web Access Function"],
        correct: [0],
        explanation: "AWS WAF é um firewall de aplicação web que protege contra ataques comuns como SQL injection.",
        topic: "security", domain: "security"
    },
    {
        id: 63,
        question: "Qual serviço AWS gerencia certificados SSL/TLS?",
        options: ["AWS Certificate Manager", "AWS KMS", "AWS IAM", "AWS CloudFront"],
        correct: [0],
        explanation: "AWS Certificate Manager provisiona e gerencia certificados SSL/TLS para uso com serviços AWS.",
        topic: "security", domain: "security"
    },
    {
        id: 64,
        question: "O que é AWS Shield?",
        options: ["Proteção contra DDoS", "Antivírus", "Backup service", "Monitoring service"],
        correct: [0],
        explanation: "AWS Shield fornece proteção contra ataques DDoS (Distributed Denial of Service).",
        topic: "security", domain: "security"
    },
    {
        id: 65,
        question: "Qual é a diferença entre AWS Shield Standard e Advanced?",
        options: ["Não há diferença", "Standard é gratuito, Advanced é pago com proteção adicional", "Advanced é gratuito", "Standard é mais caro"],
        correct: [1],
        explanation: "Shield Standard é gratuito para todos os clientes, Shield Advanced oferece proteção adicional por uma taxa.",
        topic: "security", domain: "security"
    },
    {
        id: 66,
        question: "O que são IAM Roles?",
        options: ["Usuários permanentes", "Identidades temporárias com permissões específicas", "Grupos de usuários", "Políticas de segurança"],
        correct: [1],
        explanation: "IAM Roles são identidades temporárias que podem ser assumidas por usuários, aplicações ou serviços.",
        topic: "security", domain: "security"
    },
    {
        id: 67,
        question: "O que são IAM Policies?",
        options: ["Documentos que definem permissões", "Usuários do sistema", "Grupos de recursos", "Logs de auditoria"],
        correct: [0],
        explanation: "IAM Policies são documentos JSON que definem permissões para usuários, grupos ou roles.",
        topic: "security", domain: "security"
    },
    {
        id: 68,
        question: "Qual serviço AWS inspeciona vulnerabilidades em aplicações?",
        options: ["AWS Inspector", "AWS GuardDuty", "AWS Config", "AWS CloudWatch"],
        correct: [0],
        explanation: "AWS Inspector avalia aplicações quanto a vulnerabilidades de segurança e desvios de melhores práticas.",
        topic: "security", domain: "security"
    },
    {
        id: 69,
        question: "O que é AWS Secrets Manager?",
        options: ["Gerenciamento de segredos como senhas e chaves de API", "Gerenciamento de usuários", "Gerenciamento de logs", "Gerenciamento de backups"],
        correct: [0],
        explanation: "AWS Secrets Manager armazena e rotaciona automaticamente segredos como senhas de banco de dados.",
        topic: "security", domain: "security"
    },
    {
        id: 70,
        question: "Qual é o benefício do AWS Systems Manager Parameter Store?",
        options: ["Armazenar parâmetros de configuração de forma segura", "Monitorar sistemas", "Fazer backup", "Gerenciar usuários"],
        correct: [0],
        explanation: "Parameter Store armazena dados de configuração e segredos de forma hierárquica e segura.",
        topic: "security", domain: "security"
    },
    {
        id: 71,
        question: "O que é compliance na AWS?",
        options: ["Conformidade com padrões e regulamentações", "Apenas backup de dados", "Monitoramento de performance", "Otimização de custos"],
        correct: [0],
        explanation: "Compliance refere-se à conformidade com padrões de segurança e regulamentações como GDPR, HIPAA.",
        topic: "security", domain: "security"
    },
    {
        id: 72,
        question: "Qual serviço AWS ajuda com conformidade regulatória?",
        options: ["AWS Artifact", "AWS CloudWatch", "AWS Lambda", "AWS S3"],
        correct: [0],
        explanation: "AWS Artifact fornece acesso a relatórios de conformidade e acordos de segurança da AWS.",
        topic: "security", domain: "security"
    },
    {
        id: 73,
        question: "O que é AWS Macie?",
        options: ["Serviço de descoberta e proteção de dados sensíveis", "Serviço de backup", "Serviço de monitoramento", "Serviço de rede"],
        correct: [0],
        explanation: "AWS Macie usa machine learning para descobrir, classificar e proteger dados sensíveis.",
        topic: "security", domain: "security"
    },
    {
        id: 74,
        question: "Qual é o propósito do AWS Security Hub?",
        options: ["Centralizar descobertas de segurança de múltiplos serviços", "Apenas monitorar EC2", "Gerenciar usuários", "Fazer backup"],
        correct: [0],
        explanation: "Security Hub centraliza descobertas de segurança de vários serviços AWS e parceiros.",
        topic: "security", domain: "security"
    },
    {
        id: 75,
        question: "O que são VPC Flow Logs?",
        options: ["Logs de tráfego de rede na VPC", "Logs de aplicação", "Logs de sistema", "Logs de backup"],
        correct: [0],
        explanation: "VPC Flow Logs capturam informações sobre tráfego IP entrando e saindo de interfaces de rede.",
        topic: "security", domain: "security"
    },
    {
        id: 76,
        question: "Qual é o benefício da rotação automática de chaves no KMS?",
        options: ["Melhorar segurança através da troca regular de chaves", "Reduzir custos", "Aumentar performance", "Simplificar gerenciamento"],
        correct: [0],
        explanation: "Rotação automática melhora segurança trocando chaves regularmente sem impactar aplicações.",
        topic: "security", domain: "security"
    },
    {
        id: 77,
        question: "O que é AWS Directory Service?",
        options: ["Serviço de diretório gerenciado", "Serviço de backup", "Serviço de monitoramento", "Serviço de rede"],
        correct: [0],
        explanation: "AWS Directory Service fornece Active Directory gerenciado na nuvem AWS.",
        topic: "security", domain: "security"
    },
    {
        id: 78,
        question: "Qual serviço AWS fornece single sign-on (SSO)?",
        options: ["AWS SSO", "AWS IAM", "AWS Cognito", "AWS Directory Service"],
        correct: [0],
        explanation: "AWS SSO permite acesso centralizado a múltiplas contas AWS e aplicações de negócio.",
        topic: "security", domain: "security"
    },
    {
        id: 79,
        question: "O que é AWS Cognito?",
        options: ["Serviço de autenticação para aplicações web e mobile", "Serviço de backup", "Serviço de monitoramento", "Serviço de rede"],
        correct: [0],
        explanation: "AWS Cognito fornece autenticação, autorização e gerenciamento de usuários para aplicações.",
        topic: "security", domain: "security"
    },
    {
        id: 80,
        question: "Qual é a diferença entre autenticação e autorização?",
        options: ["Autenticação verifica identidade, autorização verifica permissões", "São a mesma coisa", "Autorização verifica identidade, autenticação verifica permissões", "Não há diferença"],
        correct: [0],
        explanation: "Autenticação verifica quem você é, autorização verifica o que você pode fazer.",
        topic: "security", domain: "security"
    },
    {
        id: 81,
        question: "O que são AWS Organizations?",
        options: ["Gerenciamento centralizado de múltiplas contas AWS", "Grupos de usuários", "Grupos de recursos", "Grupos de serviços"],
        correct: [0],
        explanation: "AWS Organizations permite gerenciar centralmente múltiplas contas AWS com políticas e faturamento consolidado.",
        topic: "security", domain: "security"
    },
    {
        id: 82,
        question: "O que são Service Control Policies (SCPs)?",
        options: ["Políticas que definem permissões máximas para contas em Organizations", "Políticas de backup", "Políticas de rede", "Políticas de monitoramento"],
        correct: [0],
        explanation: "SCPs definem as permissões máximas que usuários e roles podem ter em contas de uma organização.",
        topic: "security", domain: "security"
    },
    {
        id: 83,
        question: "Qual é o propósito do AWS Control Tower?",
        options: ["Configurar e governar ambiente AWS multi-conta seguro", "Monitorar performance", "Gerenciar custos", "Fazer backup"],
        correct: [0],
        explanation: "Control Tower automatiza a configuração de um ambiente AWS multi-conta seguro e bem arquitetado.",
        topic: "security", domain: "security"
    },
    {
        id: 84,
        question: "O que é AWS Resource Access Manager (RAM)?",
        options: ["Compartilhar recursos AWS entre contas", "Gerenciar memória", "Monitorar recursos", "Fazer backup de recursos"],
        correct: [0],
        explanation: "AWS RAM permite compartilhar recursos AWS de forma segura entre contas ou dentro de uma organização.",
        topic: "security", domain: "security"
    },
    {
        id: 85,
        question: "Qual é o benefício da auditoria contínua na AWS?",
        options: ["Monitorar conformidade e detectar mudanças não autorizadas", "Reduzir custos", "Aumentar performance", "Simplificar operações"],
        correct: [0],
        explanation: "Auditoria contínua monitora conformidade e detecta mudanças não autorizadas em tempo real.",
        topic: "security", domain: "security"
    },
    {
        id: 86,
        question: "O que são AWS Config Rules?",
        options: ["Regras que avaliam configurações de recursos AWS", "Regras de rede", "Regras de backup", "Regras de monitoramento"],
        correct: [0],
        explanation: "Config Rules avaliam automaticamente se configurações de recursos AWS estão em conformidade.",
        topic: "security", domain: "security"
    },
    {
        id: 87,
        question: "Qual serviço AWS fornece proteção DDoS avançada?",
        options: ["AWS Shield Advanced", "AWS WAF", "AWS GuardDuty", "AWS Inspector"],
        correct: [0],
        explanation: "Shield Advanced fornece proteção DDoS avançada com resposta 24/7 da equipe DRT da AWS.",
        topic: "security", domain: "security"
    },
    {
        id: 88,
        question: "O que é AWS CloudHSM?",
        options: ["Hardware Security Module dedicado na nuvem", "Serviço de backup", "Serviço de monitoramento", "Serviço de rede"],
        correct: [0],
        explanation: "CloudHSM fornece módulos de segurança de hardware dedicados para gerar e usar chaves criptográficas.",
        topic: "security", domain: "security"
    },
    {
        id: 89,
        question: "Qual é a diferença entre KMS e CloudHSM?",
        options: ["KMS é multi-tenant, CloudHSM é single-tenant", "Não há diferença", "CloudHSM é multi-tenant, KMS é single-tenant", "Ambos são iguais"],
        correct: [0],
        explanation: "KMS é um serviço multi-tenant gerenciado, CloudHSM fornece HSMs dedicados single-tenant.",
        topic: "security", domain: "security"
    },
    {
        id: 90,
        question: "O que são AWS Security Groups padrão?",
        options: ["Permitem todo tráfego de saída, negam todo tráfego de entrada", "Permitem todo tráfego", "Negam todo tráfego", "Não existem regras padrão"],
        correct: [0],
        explanation: "Security Groups padrão permitem todo tráfego de saída e negam todo tráfego de entrada por padrão.",
        topic: "security", domain: "security"
    },
    {
        id: 91,
        question: "Qual é o propósito do AWS Trusted Advisor?",
        options: ["Fornecer recomendações de otimização incluindo segurança", "Apenas monitorar custos", "Apenas fazer backup", "Apenas gerenciar usuários"],
        correct: [0],
        explanation: "Trusted Advisor fornece recomendações em cinco categorias: custo, performance, segurança, tolerância a falhas e limites de serviço.",
        topic: "security", domain: "security"
    },
    {
        id: 92,
        question: "O que é penetration testing na AWS?",
        options: ["Teste de segurança autorizado para encontrar vulnerabilidades", "Teste de performance", "Teste de backup", "Teste de rede"],
        correct: [0],
        explanation: "Penetration testing é teste de segurança autorizado para identificar vulnerabilidades em sistemas.",
        topic: "security", domain: "security"
    },
    {
        id: 93,
        question: "Quais serviços AWS podem ser testados sem aprovação prévia?",
        options: ["EC2, RDS, CloudFront, Aurora, Lambda, Lightsail, Elastic Beanstalk", "Todos os serviços", "Nenhum serviço", "Apenas EC2"],
        correct: [0],
        explanation: "AWS permite penetration testing em vários serviços sem aprovação prévia, mas com algumas restrições.",
        topic: "security", domain: "security"
    },
    {
        id: 94,
        question: "O que é AWS Detective?",
        options: ["Serviço de análise e investigação de segurança", "Serviço de backup", "Serviço de monitoramento básico", "Serviço de rede"],
        correct: [0],
        explanation: "AWS Detective analisa e visualiza dados de segurança para investigar potenciais problemas de segurança.",
        topic: "security", domain: "security"
    },
    {
        id: 95,
        question: "Qual é o benefício da criptografia de dados em múltiplas camadas?",
        options: ["Defesa em profundidade com múltiplas barreiras de segurança", "Apenas reduzir custos", "Apenas aumentar performance", "Apenas simplificar gerenciamento"],
        correct: [0],
        explanation: "Criptografia em múltiplas camadas fornece defesa em profundidade, protegendo dados mesmo se uma camada for comprometida.",
        topic: "security", domain: "security"
    },
    {
        id: 96,
        question: "O que são AWS Security Standards?",
        options: ["Conjunto de melhores práticas de segurança da AWS", "Apenas documentação", "Apenas treinamentos", "Apenas certificações"],
        correct: [0],
        explanation: "AWS Security Standards são melhores práticas e diretrizes para implementar segurança robusta na AWS.",
        topic: "security", domain: "security"
    },
    {
        id: 97,
        question: "Qual é o propósito do AWS Well-Architected Security Pillar?",
        options: ["Orientar design de sistemas seguros na nuvem", "Apenas reduzir custos", "Apenas aumentar performance", "Apenas simplificar operações"],
        correct: [0],
        explanation: "O Security Pillar do Well-Architected Framework orienta o design de sistemas seguros e resilientes.",
        topic: "security", domain: "security"
    },
    {
        id: 98,
        question: "O que é incident response na AWS?",
        options: ["Processo estruturado para responder a incidentes de segurança", "Apenas fazer backup", "Apenas monitorar sistemas", "Apenas gerenciar usuários"],
        correct: [0],
        explanation: "Incident response é um processo estruturado para detectar, analisar e responder a incidentes de segurança.",
        topic: "security", domain: "security"
    },
    {
        id: 99,
        question: "Qual é a importância do logging de segurança?",
        options: ["Fornecer trilha de auditoria para investigações e conformidade", "Apenas reduzir custos", "Apenas aumentar performance", "Apenas simplificar operações"],
        correct: [0],
        explanation: "Logging de segurança fornece trilha de auditoria essencial para investigações, conformidade e detecção de ameaças.",
        topic: "security", domain: "security"
    },
    {
        id: 100,
        question: "O que são threat intelligence feeds?",
        options: ["Fontes de informação sobre ameaças de segurança atuais", "Feeds de notícias", "Feeds de performance", "Feeds de custos"],
        correct: [0],
        explanation: "Threat intelligence feeds fornecem informações atualizadas sobre ameaças de segurança conhecidas e emergentes.",
        topic: "security", domain: "security"
    },
    {
        id: 101,
        question: "Qual é o benefício da segmentação de rede na AWS?",
        options: ["Isolar recursos e limitar propagação de ataques", "Apenas reduzir custos", "Apenas aumentar performance", "Apenas simplificar gerenciamento"],
        correct: [0],
        explanation: "Segmentação de rede isola recursos em diferentes segmentos, limitando o escopo de potenciais ataques.",
        topic: "security", domain: "security"
    },
    {
        id: 102,
        question: "O que é zero trust security model?",
        options: ["Modelo que não confia em nada por padrão e verifica tudo", "Modelo que confia em tudo", "Modelo apenas para redes", "Modelo apenas para usuários"],
        correct: [0],
        explanation: "Zero trust não confia em nada por padrão e requer verificação contínua de todos os usuários e dispositivos.",
        topic: "security", domain: "security"
    },
    {
        id: 103,
        question: "Qual é a importância da educação em segurança?",
        options: ["Treinar usuários para reconhecer e evitar ameaças", "Apenas reduzir custos", "Apenas aumentar performance", "Apenas simplificar operações"],
        correct: [0],
        explanation: "Educação em segurança treina usuários para reconhecer ameaças como phishing e seguir melhores práticas.",
        topic: "security", domain: "security"
    },
    {
        id: 104,
        question: "O que são security baselines?",
        options: ["Configurações mínimas de segurança recomendadas", "Apenas documentação", "Apenas monitoramento", "Apenas backup"],
        correct: [0],
        explanation: "Security baselines definem configurações mínimas de segurança que todos os sistemas devem atender.",
        topic: "security", domain: "security"
    },
    {
        id: 105,
        question: "Qual é o propósito da classificação de dados?",
        options: ["Categorizar dados baseado em sensibilidade e requisitos de proteção", "Apenas organizar arquivos", "Apenas reduzir custos", "Apenas aumentar performance"],
        correct: [0],
        explanation: "Classificação de dados categoriza informações baseado em sensibilidade para aplicar proteções apropriadas.",
        topic: "security", domain: "security"
    },
    {
        id: 106,
        question: "O que é data loss prevention (DLP)?",
        options: ["Tecnologias para prevenir vazamento de dados sensíveis", "Apenas backup de dados", "Apenas criptografia", "Apenas monitoramento"],
        correct: [0],
        explanation: "DLP usa tecnologias para identificar, monitorar e proteger dados sensíveis contra vazamentos não autorizados.",
        topic: "security", domain: "security"
    },
    {
        id: 107,
        question: "Qual é a importância da gestão de vulnerabilidades?",
        options: ["Identificar e corrigir vulnerabilidades antes que sejam exploradas", "Apenas reduzir custos", "Apenas aumentar performance", "Apenas simplificar operações"],
        correct: [0],
        explanation: "Gestão de vulnerabilidades identifica, avalia e corrige vulnerabilidades de segurança proativamente.",
        topic: "security", domain: "security"
    },
    {
        id: 108,
        question: "O que são security orchestration tools?",
        options: ["Ferramentas que automatizam resposta a incidentes de segurança", "Apenas monitoramento", "Apenas backup", "Apenas relatórios"],
        correct: [0],
        explanation: "Security orchestration automatiza e coordena respostas a incidentes de segurança para resposta mais rápida e consistente.",
        topic: "security", domain: "security"
    }
];

window.securityQuestions = securityQuestions;