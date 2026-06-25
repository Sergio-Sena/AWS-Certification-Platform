// CLF-C02 Security & Compliance - Lote 6 (sec_149 a sec_158)
// Foco: Network Firewall, Permission Boundaries, Cross-account access, Data Protection

const securityLote6 = [
    {
        id: 'sec_149',
        question: "Qual serviço AWS fornece inspeção profunda de pacotes (deep packet inspection) e filtragem de tráfego na VPC?",
        options: [
            "AWS Network Firewall — inspeção stateful/stateless, IDS/IPS, filtragem por domínio e protocolo no nível da VPC",
            "Security Groups (stateful L4)",
            "NACLs (stateless L4)",
            "AWS WAF (camada 7 HTTP)"
        ],
        correct: [0],
        explanation: "✅ Network Firewall: firewall gerenciado com IDS/IPS, filtragem por domínio (bloquear sites), stateful inspection, regras Suricata compatíveis. Opera no VPC level. WAF = apenas HTTP/S. SG/NACL = apenas IP/porta.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_150',
        question: "O que são IAM Permission Boundaries?",
        options: [
            "Limites de rede",
            "Políticas de billing",
            "Políticas que definem o MÁXIMO de permissões que uma IAM entity pode ter — mesmo que a identity policy conceda mais",
            "Limites de recursos"
        ],
        correct: [2],
        explanation: "✅ Permission Boundaries: limite máximo de permissões. Permissão efetiva = interseção entre identity policy E boundary. Uso: permitir admins delegarem criação de roles sem escalar privilégios.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_151',
        question: "Como uma aplicação rodando em EC2 deve acessar um bucket S3 de forma segura?",
        options: [
            "Armazenar access keys no código",
            "Armazenar access keys em variável de ambiente",
            "Usar root credentials",
            "Usar IAM Role atribuída à instância EC2 — credenciais temporárias rotacionadas automaticamente via instance metadata",
        ],
        correct: [3],
        explanation: "✅ Instance Profile (IAM Role para EC2): credenciais temporárias via STS, rotacionadas automaticamente, sem keys no código. SDK/CLI detecta automaticamente. NUNCA usar access keys em EC2.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_152',
        question: "Uma empresa quer permitir que uma conta AWS parceira acesse um bucket S3 específico. Qual abordagem?",
        options: [
            "Compartilhar access keys",
            "Cross-account IAM Role — conta parceira assume role na sua conta com trust policy + resource policy no S3",
            "Tornar o bucket público",
            "Copiar dados para a outra conta"
        ],
        correct: [1],
        explanation: "✅ Cross-account access: 1) Criar role com trust policy para a conta externa, 2) Opcionalmente resource-based policy no S3. A conta parceira faz sts:AssumeRole. Auditável, revogável, temporário.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_153',
        question: "Qual serviço AWS descobre automaticamente dados sensíveis (PII, cartões de crédito) em buckets S3?",
        options: [
            "Amazon Macie — ML para descobrir, classificar e proteger dados sensíveis em S3 automaticamente",
            "AWS Config",
            "AWS GuardDuty",
            "AWS CloudTrail"
        ],
        correct: [0],
        explanation: "✅ Macie: ML + pattern matching para encontrar PII (CPF, email, cartão), PHI (saúde), credentials em S3. Gera findings com localização exata. Integra com Security Hub e EventBridge para automação.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_154',
        question: "Qual é a diferença entre SSE-S3, SSE-KMS e SSE-C para criptografia no S3?",
        options: [
            "Não há diferença",
            "SSE-C é a mais simples",
            "SSE-S3: AWS gerencia tudo. SSE-KMS: cliente controla key via KMS (audit trail). SSE-C: cliente fornece a key em cada request",
            "SSE-KMS é gratuito"
        ],
        correct: [2],
        explanation: "✅ SSE-S3: chave gerenciada pela AWS (simples, sem custo extra). SSE-KMS: chave no KMS (auditoria CloudTrail, controle granular, custo por API call). SSE-C: cliente envia key (AWS não armazena).",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_155',
        question: "O que é AWS PrivateLink?",
        options: [
            "VPN connection",
            "Internet Gateway privado",
            "Direct Connect",
            "Acesso privado a serviços AWS (e SaaS) pela VPC sem tráfego passar pela internet pública — via VPC endpoints",
        ],
        correct: [3],
        explanation: "✅ PrivateLink: ENI na sua VPC que roteia tráfego para serviços AWS (S3, DynamoDB, etc.) ou SaaS de terceiros sem internet. Interface endpoints (ENI) ou Gateway endpoints (S3/DynamoDB, gratuito).",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_156',
        question: "Uma equipe de segurança precisa responder automaticamente quando GuardDuty detecta ameaça. Qual integração usar?",
        options: [
            "Verificar manualmente diariamente",
            "EventBridge rule → Lambda function para resposta automática (ex: isolar instância, revogar credentials)",
            "Apenas email notification",
            "AWS Config remediation"
        ],
        correct: [1],
        explanation: "✅ Automated incident response: GuardDuty finding → EventBridge → Lambda (isolar EC2 via SG, desabilitar access key, snapshot para forensics). Security Hub também pode trigger automação via EventBridge.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_157',
        question: "No modelo de responsabilidade compartilhada, quem é responsável pela segurança FÍSICA dos data centers?",
        options: [
            "AWS — responsável por segurança física: biometria, guardas, câmeras, controle ambiental, destruição de discos",
            "O cliente",
            "Responsabilidade compartilhada",
            "Terceiros contratados pelo cliente"
        ],
        correct: [0],
        explanation: "✅ AWS: segurança OF the cloud = data centers, hardware, rede global, hypervisor. Inclui: controle de acesso físico, destruição de mídia (NIST 800-88), redundância de energia, detecção de incêndio.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_158',
        question: "Qual recurso IAM permite definir condições como 'só permitir acesso se MFA estiver ativo' ou 'só de IPs específicos'?",
        options: [
            "IAM Groups",
            "IAM Policy Conditions — bloco Condition com keys como aws:MultiFactorAuthPresent, aws:SourceIp, aws:RequestedRegion",
            "IAM Tags",
            "IAM Access Keys"
        ],
        correct: [1],
        explanation: "✅ Condition block: lógica adicional em policies. Keys comuns: aws:MultiFactorAuthPresent (MFA), aws:SourceIp (IP), aws:RequestedRegion (região), aws:PrincipalOrgID (organização). Granularidade fina.",
        topic: "security",
        domain: "security"
    }
];

securityQuestions.push(...securityLote6);
