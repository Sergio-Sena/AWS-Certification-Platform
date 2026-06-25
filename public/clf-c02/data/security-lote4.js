// CLF-C02 Security & Compliance - Lote 4 (sec_129 a sec_138)
// Foco: Organizations, SCPs, Access Analyzer, CloudTrail, incident response

const securityLote4 = [
    {
        id: 'sec_129',
        question: "Uma empresa com 20 contas AWS precisa impedir que qualquer conta crie recursos fora de us-east-1 e eu-west-1. Qual mecanismo?",
        options: [
            "IAM policies em cada conta",
            "Service Control Policies (SCPs) no AWS Organizations — guardrails que limitam permissões máximas de TODAS as contas",
            "Security Groups",
            "AWS Config Rules"
        ],
        correct: [1],
        explanation: "SCPs: políticas no Organizations que definem permissões MÁXIMAS. Deny em SCP não pode ser overridden por nenhuma IAM policy na conta — nem pelo root da conta membro. Ideal para guardrails organizacionais.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_130',
        question: "Qual serviço AWS ajuda a identificar recursos compartilhados externamente (S3 buckets públicos, IAM roles cross-account)?",
        options: [
            "AWS Config",
            "IAM Access Analyzer — identifica recursos acessíveis fora da sua conta/organização",
            "Amazon Inspector",
            "AWS Trusted Advisor"
        ],
        correct: [1],
        explanation: "Access Analyzer: analisa policies de recursos (S3, IAM, KMS, Lambda, SQS) e identifica quais são acessíveis externamente. Gera findings com recomendação. Ajuda a encontrar acessos não intencionais.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_131',
        question: "Uma equipe de segurança precisa investigar QUEM deletou um bucket S3 ontem às 15h. Qual serviço consultar?",
        options: [
            "Amazon CloudWatch (métricas e logs de performance)",
            "AWS CloudTrail — registra todas as API calls com: quem, quando, de onde, o que fez",
            "AWS Config (estado atual de recursos)",
            "Amazon GuardDuty (ameaças)"
        ],
        correct: [1],
        explanation: "CloudTrail: auditoria de API calls. Registra: DeleteBucket, quem (IAM user/role), quando (timestamp), IP de origem, resultado (sucesso/falha). Padrão: 90 dias no console. Trail para S3: retenção ilimitada.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_132',
        question: "Uma empresa quer que funcionários usem MFA obrigatório para acessar AWS. Quais tipos de MFA a AWS suporta?",
        options: [
            "Apenas SMS",
            "Virtual MFA (app como Google Authenticator), hardware token (Yubikey), SMS (para root apenas no legacy)",
            "Apenas biometria",
            "Apenas email"
        ],
        correct: [1],
        explanation: "MFA types: Virtual (app - gratuito), U2F security key (Yubikey - hardware), Hardware TOTP token (gemalto). SMS foi descontinuado para IAM users (ainda funciona para root em legacy). Virtual MFA é mais comum.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_133',
        question: "O que são IAM Policies e qual é o formato?",
        options: [
            "Arquivos XML que definem permissões",
            "Documentos JSON que definem: Effect (Allow/Deny), Action (o que pode fazer), Resource (em quais recursos)",
            "Scripts Python de automação",
            "Configurações de rede"
        ],
        correct: [1],
        explanation: "IAM Policy = JSON com: Version, Statement[Effect + Action + Resource + Condition(opcional)]. Ex: Allow s3:GetObject em arn:aws:s3:::bucket/*. Explicit Deny sempre prevalece sobre Allow.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_134',
        question: "Qual é a diferença entre AWS managed policies e customer managed policies?",
        options: [
            "Não há diferença",
            "AWS managed: criadas/mantidas pela AWS (ex: AmazonS3ReadOnly). Customer managed: criadas pelo cliente com permissões específicas do negócio",
            "Customer managed são gratuitas, AWS managed são pagas",
            "AWS managed dão acesso total"
        ],
        correct: [1],
        explanation: "AWS managed: prontas, mantidas pela AWS, broad (AdministratorAccess, ReadOnlyAccess). Customer managed: customizadas, least privilege específico. Best practice: preferir customer managed para controle fino.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_135',
        question: "Uma empresa sofreu um incidente: credenciais IAM foram vazadas no GitHub. Quais ações imediatas tomar?",
        options: [
            "Apenas trocar a senha",
            "Desabilitar/rotacionar keys → verificar CloudTrail → revogar sessões ativas → avaliar dano → remediar recursos criados pelo atacante",
            "Apenas deletar o repositório",
            "Esperar até o próximo dia útil"
        ],
        correct: [1],
        explanation: "Incident response: 1) Desabilitar key comprometida (parar acesso), 2) CloudTrail audit (o que fizeram?), 3) Revogar sessions, 4) Criar nova key se necessário, 5) Remediar (deletar recursos criados, ex: EC2 minerando crypto).",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_136',
        question: "O que é AWS Control Tower?",
        options: [
            "Serviço de monitoramento de custos",
            "Serviço que configura e governa ambiente multi-conta seguro automaticamente — landing zone com guardrails pré-configurados",
            "Serviço de load balancing",
            "Serviço de database"
        ],
        correct: [1],
        explanation: "Control Tower: configura 'landing zone' (ambiente multi-conta com best practices). Guardrails preventivos (SCPs) e detectivos (Config Rules). Account Factory para criar contas padronizadas. Governance automatizada.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_137',
        question: "O que é 'encryption at rest' vs 'encryption in transit'?",
        options: [
            "São a mesma coisa",
            "At rest: dados armazenados criptografados (disco, S3, DB). In transit: dados em movimento criptografados (TLS/HTTPS na rede)",
            "At rest é mais importante",
            "In transit não é necessário na cloud"
        ],
        correct: [1],
        explanation: "At rest: KMS + SSE protege dados parados (se disco for roubado, dados ilegíveis). In transit: TLS protege dados na rede (se interceptado, dados ilegíveis). Ambos necessários para proteção completa.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_138',
        question: "Qual serviço AWS recomenda melhorias de segurança com checks automáticos (ex: 'MFA não habilitado no root')?",
        options: [
            "Amazon Inspector (vulnerabilidades de OS)",
            "AWS Trusted Advisor — checks automáticos em 5 categorias: cost, performance, security, fault tolerance, service limits",
            "AWS Config (compliance de recursos)",
            "Amazon GuardDuty (threat detection)"
        ],
        correct: [1],
        explanation: "Trusted Advisor: checks automáticos. Security checks incluem: MFA no root, SGs abertos, S3 bucket permissions, IAM use. Basic plan: 7 core checks. Business/Enterprise: todos os checks + API access.",
        topic: "security",
        domain: "security"
    }
];

securityQuestions.push(...securityLote4);
