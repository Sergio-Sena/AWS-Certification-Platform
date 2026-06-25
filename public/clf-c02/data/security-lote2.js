// CLF-C02 Security & Compliance - Lote 2 (sec_109 a sec_118)
// Foco: Shared Responsibility detalhado, IAM avançado, encryption

const securityLote2 = [
    {
        id: 'sec_109',
        question: "No modelo de responsabilidade compartilhada, qual camada é SEMPRE responsabilidade da AWS, independente do serviço usado?",
        options: [
            "Configuração de Security Groups",
            "Segurança física dos data centers — controle de acesso, vigilância, destruição de hardware",
            "Criptografia dos dados do cliente",
            "Gerenciamento de IAM users"
        ],
        correct: [1],
        explanation: "AWS é SEMPRE responsável por: segurança física (prédios, guardas, câmeras), hardware, rede global, hypervisor (em EC2). Cliente NUNCA gerencia infra física. Isso não muda entre EC2, Lambda ou S3.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_110',
        question: "Em qual serviço a responsabilidade do cliente é MÍNIMA (AWS gerencia quase tudo)?",
        options: [
            "EC2 (IaaS — cliente gerencia OS, apps, dados)",
            "Lambda (Serverless — AWS gerencia OS, runtime, scaling; cliente só cuida do código e permissões)",
            "ECS com EC2 (cliente gerencia instâncias)",
            "EC2 com self-managed database"
        ],
        correct: [1],
        explanation: "Lambda = máxima gestão pela AWS (runtime, OS, patches, scaling, HA). Cliente: código, IAM permissions, configuração do trigger. Quanto mais gerenciado o serviço → menos responsabilidade do cliente.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_111',
        question: "Uma empresa quer que funcionários acessem múltiplas contas AWS com um único login corporativo. Qual serviço?",
        options: [
            "Criar IAM users em cada conta",
            "AWS IAM Identity Center (SSO) — login único para múltiplas contas e aplicações",
            "Compartilhar root credentials",
            "AWS Directory Service apenas"
        ],
        correct: [1],
        explanation: "IAM Identity Center (ex-AWS SSO): login federado, acesso centralizado a múltiplas contas AWS + apps business (Slack, Office). Integra com Active Directory. Elimina IAM users separados por conta.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_112',
        question: "Qual é a primeira ação de segurança recomendada após criar uma conta AWS?",
        options: [
            "Criar instâncias EC2",
            "Habilitar MFA na conta root e criar IAM user administrativo — nunca usar root para tarefas do dia-a-dia",
            "Configurar billing alerts",
            "Criar VPC"
        ],
        correct: [1],
        explanation: "Root account: acesso total irrestrito. Proteger com: 1) MFA hardware/virtual, 2) Criar IAM admin user, 3) Nunca usar root no dia-a-dia, 4) Guardar credenciais root em cofre. Root só para: mudar plano support, fechar conta.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_113',
        question: "Uma aplicação em EC2 precisa acessar S3. Qual é a forma MAIS segura de conceder acesso?",
        options: [
            "Colocar access keys no código da aplicação",
            "IAM Role atachada à instância EC2 — credenciais temporárias, rotacionadas automaticamente, sem keys no código",
            "Armazenar keys em variáveis de ambiente",
            "Usar root credentials"
        ],
        correct: [1],
        explanation: "IAM Role para EC2: credenciais temporárias via instance metadata, rotacionam automaticamente, sem hardcode. Access keys no código = risco de vazamento (Git, logs). Roles = best practice para máquinas.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_114',
        question: "O que é o princípio de 'defense in depth' na AWS?",
        options: [
            "Apenas um firewall é suficiente",
            "Aplicar múltiplas camadas de segurança — se uma falha, outras protegem (IAM + SG + NACL + encryption + monitoring)",
            "Usar apenas encryption",
            "Confiar apenas no perímetro de rede"
        ],
        correct: [1],
        explanation: "Defense in depth: camadas complementares. IAM (quem), Security Groups (rede instância), NACLs (rede subnet), WAF (aplicação), encryption (dados), CloudTrail (auditoria). Nenhuma camada sozinha é suficiente.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_115',
        question: "Qual é a diferença entre IAM Users, Groups e Roles?",
        options: [
            "São a mesma coisa com nomes diferentes",
            "Users: pessoas. Groups: conjuntos de users com mesmas permissões. Roles: identidades temporárias para serviços/apps/cross-account",
            "Groups são para máquinas, Roles para pessoas",
            "Users são temporários, Roles permanentes"
        ],
        correct: [1],
        explanation: "Users: identidade permanente (pessoa). Groups: organizar users (Devs, Admins) e aplicar policies ao grupo. Roles: identidade temporária assumida por serviços (EC2, Lambda), cross-account, ou federação. Roles = sem password/keys permanentes.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_116',
        question: "Uma empresa precisa criptografar dados armazenados no S3 com chave gerenciada pela AWS sem configuração complexa. Qual opção?",
        options: [
            "SSE-C (chave do cliente)",
            "SSE-S3 — criptografia server-side com chave gerenciada pela AWS (default, sem configuração extra)",
            "Client-side encryption",
            "AWS CloudHSM"
        ],
        correct: [1],
        explanation: "SSE-S3: mais simples, AWS gerencia tudo (chave + criptografia). SSE-KMS: cliente controla chave + auditoria. SSE-C: cliente fornece chave. Client-side: criptografa antes de enviar. SSE-S3 é default desde 2023.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_117',
        question: "Qual serviço AWS fornece relatórios de compliance (SOC, PCI, ISO) para auditorias?",
        options: [
            "AWS Config",
            "AWS Artifact — portal self-service para baixar relatórios de compliance e acordos (BAA, NDA)",
            "AWS Inspector",
            "AWS Trusted Advisor"
        ],
        correct: [1],
        explanation: "Artifact: relatórios de auditoria da AWS (SOC 1/2/3, PCI DSS, ISO 27001, HIPAA BAA). Self-service no console. Para provar compliance da AWS aos seus auditores. Config avalia SEUS recursos, não da AWS.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_118',
        question: "Uma empresa quer ser alertada se alguém fizer login no console AWS sem MFA habilitado. Qual combinação de serviços?",
        options: [
            "CloudWatch apenas",
            "AWS CloudTrail (detecta login) + Amazon EventBridge (regra) + SNS (notificação) ou AWS Config Rule (compliance check)",
            "AWS Shield",
            "Amazon GuardDuty apenas"
        ],
        correct: [1],
        explanation: "CloudTrail: registra ConsoleLogin event com MFA=No. EventBridge: regra que filtra esse evento. SNS: envia email/SMS. Alternativa: Config Rule 'iam-user-mfa-enabled' para compliance contínua. Múltiplos serviços integrados.",
        topic: "security",
        domain: "security"
    }
];

securityQuestions.push(...securityLote2);
