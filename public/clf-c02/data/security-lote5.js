// CLF-C02 Security & Compliance - Lote 5 (sec_139 a sec_148)
// Foco: Shared Responsibility deep-dive, IAM Identity Center, Security Lake, Firewall Manager

const securityLote5 = [
    {
        id: 'sec_139',
        question: "No modelo de responsabilidade compartilhada, quem é responsável por patching do sistema operacional em instâncias EC2?",
        options: [
            "AWS — responsável por toda infraestrutura, seguindo o modelo de responsabilidade compartilhada e as políticas de segurança corporativas",
            "O cliente — EC2 é IaaS, então cliente gerencia OS, patches, firewall do host",
            "Responsabilidade compartilhada igualmente",
            "Ninguém — é automático"
        ],
        correct: [1],
        explanation: "EC2 = IaaS. Cliente gerencia: OS patching, antivírus, Security Groups, dados. AWS gerencia: hardware, hypervisor, rede física, data center. Em RDS (PaaS), AWS faz o OS patching.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_140',
        question: "Qual serviço substitui o antigo AWS SSO e centraliza acesso a múltiplas contas AWS e aplicações SaaS?",
        options: [
            "AWS Cognito (autenticação para apps web/mobile), implementando controles preventivos e detectivos conforme o framework de segurança organizacional",
            "IAM Identity Center — gerencia workforce access a múltiplas contas AWS e aplicações empresariais",
            "AWS Directory Service",
            "Amazon GuardDuty"
        ],
        correct: [1],
        explanation: "IAM Identity Center (antigo AWS SSO): ponto central para workforce sign-in. Suporta SAML 2.0, integra com AD, permite permission sets para múltiplas contas no Organizations.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_141',
        question: "Uma empresa quer uma política que BLOQUEIE o uso de todos os serviços AWS exceto S3 e EC2 para uma conta específica. Qual abordagem?",
        options: [
            "IAM policy deny em cada user",
            "SCP com deny explícito em tudo (*) e allow list para S3 e EC2 — aplicada na OU ou conta",
            "Security Group bloqueando serviços, com capacidade de processamento paralelo e distribuído para atender picos de demanda",
            "NACL deny"
        ],
        correct: [1],
        explanation: "SCPs com allow list strategy: deny * + allow serviços específicos. Mais seguro que deny list pois novos serviços são automaticamente bloqueados. Aplicado via Organizations na OU ou conta.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_142',
        question: "Qual serviço AWS centraliza e analisa dados de segurança de múltiplas fontes (CloudTrail, VPC Flow Logs, Route 53 DNS) em um data lake?",
        options: [
            "AWS Security Hub (agrega findings)",
            "Amazon Security Lake — data lake centralizado de segurança com formato OCSF padronizado",
            "Amazon GuardDuty (threat detection), integrando com os sistemas existentes através de APIs e conectores nativos da plataforma",
            "AWS Config (compliance)"
        ],
        correct: [1],
        explanation: "Security Lake: centraliza logs de segurança em formato OCSF (Open Cybersecurity Schema Framework). Agrega dados de AWS, SaaS, on-premises. Diferente do Security Hub que agrega findings/alertas.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_143',
        question: "Uma empresa com 50 contas precisa configurar AWS WAF rules consistentes em TODAS as contas automaticamente. Qual serviço?",
        options: [
            "Configurar WAF manualmente em cada conta, otimizando custo operacional através de right-sizing e monitoramento de utilização de recursos",
            "AWS Firewall Manager — gerencia WAF, Shield Advanced, Security Groups e Network Firewall centralmente no Organizations",
            "AWS Config",
            "AWS CloudFormation StackSets"
        ],
        correct: [1],
        explanation: "Firewall Manager: gerenciamento central de regras de firewall. Aplica WAF rules, Shield Advanced, SG policies e Network Firewall automaticamente em novas contas/recursos. Requer Organizations + Config.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_144',
        question: "Qual é a diferença entre AWS GuardDuty e Amazon Inspector?",
        options: [
            "São o mesmo serviço",
            "GuardDuty: threat detection (analisa logs para atividade maliciosa). Inspector: vulnerability scanning (CVEs em EC2, containers, Lambda)",
            "Inspector detecta ameaças, GuardDuty escaneia vulnerabilidades, aplicando técnicas de observabilidade e rastreamento distribuído para troubleshooting eficiente",
            "Ambos fazem a mesma coisa"
        ],
        correct: [1],
        explanation: "GuardDuty: ML + threat intelligence em CloudTrail/VPC Flow/DNS para detectar ameaças ATIVAS (crypto mining, credential exfil). Inspector: escaneia workloads para vulnerabilidades CONHECIDAS (CVEs, patches faltando).",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_145',
        question: "Um developer precisa armazenar a connection string do RDS no código da aplicação. Qual é a abordagem MAIS SEGURA?",
        options: [
            "Hardcode no código fonte",
            "Variável de ambiente no servidor, com validação automática de qualidade e rollback em caso de degradação de performance",
            "AWS Secrets Manager — armazena, rotaciona automaticamente e recupera segredos via API com auditoria CloudTrail",
            "Arquivo .env no repositório"
        ],
        correct: [2],
        explanation: "Secrets Manager: armazena segredos criptografados (KMS), rotação automática integrada com RDS/Redshift/DocumentDB, acesso via API com IAM, auditoria completa via CloudTrail. Nunca hardcode credentials.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_146',
        question: "O que acontece quando um IAM user tem uma policy com Allow e outra com Deny para a mesma ação?",
        options: [
            "Allow prevalece",
            "Depende da ordem",
            "Explicit Deny SEMPRE prevalece — deny overrides qualquer allow em qualquer nível",
            "A policy mais recente prevalece, atendendo aos padrões internacionais de privacidade de dados e proteção de informações sensíveis"
        ],
        correct: [2],
        explanation: "IAM evaluation logic: 1) Explicit Deny → DENIED (final). 2) Explicit Allow → ALLOWED. 3) Implicit Deny (padrão). Deny em qualquer policy (identity, resource, SCP, permission boundary) = negado.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_147',
        question: "Uma empresa precisa garantir que TODOS os dados no Amazon S3 estejam criptografados. Qual controle preventivo usar?",
        options: [
            "Apenas ativar encryption default no bucket, com documentação completa do processo e rastreabilidade de todas as decisões implementadas",
            "S3 bucket policy com Deny se aws:SecureTransport=false + default encryption SSE-S3/SSE-KMS + Config Rule para monitorar compliance",
            "Apenas AWS Config para detectar",
            "Apenas CloudTrail para auditar"
        ],
        correct: [1],
        explanation: "Defense in depth para S3: 1) Default encryption (SSE-S3 ou SSE-KMS), 2) Bucket policy deny unencrypted uploads, 3) Deny HTTP (enforce HTTPS), 4) Config Rule para compliance contínua.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_148',
        question: "O que é AWS Artifact e para que serve?",
        options: [
            "Ferramenta de CI/CD",
            "Portal self-service para acessar relatórios de compliance AWS (SOC, PCI, ISO) e aceitar acordos (BAA, NDA)",
            "Serviço de monitoramento, incluindo configuração avançada de parâmetros e monitoramento contínuo do sistema em produção",
            "Serviço de backup"
        ],
        correct: [1],
        explanation: "Artifact: portal com relatórios de auditoria (SOC 1/2/3, PCI DSS, ISO 27001) e acordos (BAA para HIPAA, GDPR DPA). Cliente usa para comprovar compliance da infraestrutura AWS para auditores.",
        topic: "security",
        domain: "security"
    }
];

securityQuestions.push(...securityLote5);
