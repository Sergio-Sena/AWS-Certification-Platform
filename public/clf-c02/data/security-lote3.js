// CLF-C02 Security & Compliance - Lote 3 (sec_119 a sec_128)
// Foco: Network security, WAF/Shield, GuardDuty, Inspector, compliance

const securityLote3 = [
    {
        id: 'sec_119',
        question: "Qual é a diferença entre Security Groups e Network ACLs (NACLs)?",
        options: [
            "Security Groups: stateful (nível instância, allow only). NACLs: stateless (nível subnet, allow + deny)",
            "São a mesma coisa",
            "NACLs são stateful, Security Groups stateless",
            "Ambos operam no nível de instância"
        ],
        correct: [0],
        explanation: "✅ SG: stateful (resposta automática), só regras allow, nível instância. NACL: stateless (precisa regra inbound E outbound), allow + deny, nível subnet. SG é mais usado no dia-a-dia. NACL é defesa adicional.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_120',
        question: "Uma aplicação web está sob ataque DDoS volumétrico. Qual serviço AWS protege automaticamente sem custo adicional?",
        options: [
            "AWS WAF (pago)",
            "AWS GuardDuty",
            "AWS Shield Standard — proteção DDoS automática e gratuita para todos os clientes AWS (L3/L4)",
            "Amazon Inspector"
        ],
        correct: [2],
        explanation: "✅ Shield Standard: gratuito, automático, protege contra DDoS comuns (L3/L4: SYN floods, UDP reflection). Shield Advanced: pago ($3000/mês), proteção avançada, DRT team 24/7, cost protection. Standard já está ativo em todas as contas.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_121',
        question: "Uma aplicação precisa bloquear SQL injection e cross-site scripting (XSS). Qual serviço?",
        options: [
            "Security Groups (operam no L4, não inspecionam payload)",
            "NACLs (operam no L3/L4)",
            "AWS Shield (protege contra DDoS, não injeção)",
            "AWS WAF — Web Application Firewall que inspeciona HTTP requests (L7) e bloqueia ataques de aplicação",
        ],
        correct: [3],
        explanation: "✅ WAF: layer 7 (HTTP). Regras para: SQL injection, XSS, rate limiting, geo-blocking, bot control. Associa com ALB, CloudFront, API Gateway. SG/NACL não inspecionam conteúdo HTTP — só IP/porta.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_122',
        question: "Qual serviço AWS detecta ameaças automaticamente analisando logs de VPC Flow, CloudTrail e DNS?",
        options: [
            "AWS Config",
            "Amazon GuardDuty — threat detection com ML que analisa múltiplas fontes de logs automaticamente",
            "AWS CloudWatch",
            "AWS Trusted Advisor"
        ],
        correct: [1],
        explanation: "✅ GuardDuty: ML + threat intelligence. Analisa: VPC Flow Logs, CloudTrail, DNS queries. Detecta: crypto mining, credential compromise, unusual API calls, C&C communication. Sem configuração de regras — automático.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_123',
        question: "Qual serviço AWS escaneia instâncias EC2 e imagens de container para vulnerabilidades (CVEs)?",
        options: [
            "Amazon Inspector — scans automatizados de vulnerabilidades em EC2, Lambda e ECR containers",
            "Amazon GuardDuty (detecta ameaças, não vulnerabilidades)",
            "AWS Config (avalia configurações, não vulnerabilidades de OS)",
            "AWS Shield (protege contra DDoS)"
        ],
        correct: [0],
        explanation: "✅ Inspector: vulnerability scanning. Detecta: CVEs em OS packages, network reachability issues, Lambda code vulnerabilities. Agentless (via SSM). Diferença: GuardDuty = ameaças ativas. Inspector = vulnerabilidades latentes.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_124',
        question: "Uma empresa precisa garantir que TODOS os recursos AWS estejam configurados segundo regras de segurança. Qual serviço avalia compliance continuamente?",
        options: [
            "AWS CloudTrail (registra QUEM fez O QUÊ)",
            "AWS Inspector (vulnerabilidades de OS)",
            "AWS Config — avalia configurações de recursos contra regras e alerta quando non-compliant",
            "Amazon Macie (dados sensíveis em S3)"
        ],
        correct: [2],
        explanation: "✅ Config: monitora configurações. Rules avaliam: 'S3 público?', 'SG aberto 0.0.0.0/0?', 'EC2 sem tag?'. Timeline mostra histórico. Remediation automática possível. Diferente de CloudTrail (ações) e Inspector (CVEs).",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_125',
        question: "Qual serviço AWS usa ML para descobrir dados sensíveis (PII, cartões de crédito) em buckets S3?",
        options: [
            "Amazon GuardDuty",
            "Amazon Comprehend",
            "AWS Config",
            "Amazon Macie — descobre e classifica dados sensíveis em S3 automaticamente usando ML",
        ],
        correct: [3],
        explanation: "✅ Macie: escaneia S3 buckets, detecta PII (CPF, email, cartão, senhas), classifica por sensibilidade, gera findings. Usa ML + padrões. Para: compliance LGPD/GDPR, evitar vazamentos de dados sensíveis.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_126',
        question: "Uma empresa precisa de criptografia de dados em trânsito entre usuários e sua aplicação. O que usar?",
        options: [
            "KMS (criptografia em repouso)",
            "TLS/SSL — protocolo que criptografa dados em movimento (HTTPS). AWS Certificate Manager (ACM) gerencia certificados gratuitamente",
            "S3 encryption",
            "EBS encryption"
        ],
        correct: [1],
        explanation: "✅ Em trânsito: TLS/SSL (HTTPS). ACM provisiona e renova certificados gratuitamente para ALB/CloudFront. Em repouso: KMS/SSE. Ambos são necessários para proteção completa. Nunca transmitir dados sensíveis sem HTTPS.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_127',
        question: "Qual serviço centraliza findings de segurança de GuardDuty, Inspector, Macie e Firewall Manager em um dashboard?",
        options: [
            "AWS Security Hub — agrega e prioriza findings de múltiplos serviços de segurança AWS",
            "CloudWatch Dashboard",
            "AWS CloudTrail",
            "Amazon Detective"
        ],
        correct: [0],
        explanation: "✅ Security Hub: visão centralizada de segurança. Agrega findings de: GuardDuty, Inspector, Macie, Firewall Manager, third-party. Automated compliance checks (CIS, PCI). Prioriza por severidade. Detective = investigar encontrados.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_128',
        question: "Quais tarefas SÓ podem ser feitas com a conta root (nem admin IAM user pode)?",
        options: [
            "Criar EC2 instances",
            "Fechar conta AWS, mudar plano de suporte, restaurar permissões IAM, configurar tax settings",
            "Criar IAM users",
            "Fazer deploy de aplicações"
        ],
        correct: [1],
        explanation: "✅ Root-only: fechar conta, mudar nome da conta, mudar plano suporte, signup para GovCloud, criar CloudFront key pairs, restore IAM permissions, tax/payment settings. Tudo mais: usar IAM admin.",
        topic: "security",
        domain: "security"
    }
];

securityQuestions.push(...securityLote3);
