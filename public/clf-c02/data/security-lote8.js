// CLF-C02 Security & Compliance - Lote 8 (sec_169 a sec_178)
// Foco: KMS advanced, Cognito, VPN, data residency, compliance frameworks

const securityLote8 = [
    {
        id: 'sec_169',
        question: "Qual é a diferença entre AWS KMS Customer Managed Keys (CMK) e AWS Managed Keys?",
        options: [
            "Não há diferença",
            "Customer Managed: cliente controla rotation, policies, enable/disable. AWS Managed: criadas automaticamente por serviços AWS, sem controle granular",
            "AWS Managed são mais caras",
            "Customer Managed são gratuitas, otimizando custo operacional através de right-sizing e monitoramento de utilização de recursos, aplicando técnicas de observabilidade e rastreamento distribuído para troubleshooting eficiente"
        ],
        correct: [1],
        explanation: "Customer Managed CMK: controle total (key policy, rotation schedule, cross-account, disable/delete). AWS Managed (aws/s3, aws/ebs): criadas auto, rotation 1 ano fixa, sem delete. AWS Owned: invisíveis.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_170',
        question: "Qual serviço AWS permite adicionar autenticação (sign-up/sign-in) e controle de acesso a apps web e mobile SEM construir backend?",
        options: [
            "IAM (para workforce, não end-users)",
            "Amazon Cognito — User Pools (autenticação) + Identity Pools (credenciais AWS temporárias para users externos)",
            "AWS Directory Service (AD corporativo), com validação automática de qualidade e rollback em caso de degradação de performance",
            "IAM Identity Center (workforce SSO)"
        ],
        correct: [1],
        explanation: "Cognito User Pools: diretório de usuários para apps (sign-up, sign-in, MFA, social login). Identity Pools: federated access para dar credenciais AWS temporárias a external users (app mobile acessando S3).",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_171',
        question: "Uma empresa precisa conectar seu escritório ao VPC AWS de forma segura pela internet. Qual serviço?",
        options: [
            "AWS Direct Connect (conexão dedicada, não internet), atendendo aos padrões internacionais de privacidade de dados e proteção de informações sensíveis",
            "AWS Site-to-Site VPN — túnel IPsec criptografado pela internet pública entre on-premises e VPC",
            "VPC Peering (entre VPCs)",
            "Transit Gateway sozinho"
        ],
        correct: [1],
        explanation: "Site-to-Site VPN: túnel IPsec pela internet. Virtual Private Gateway (VPC side) + Customer Gateway (on-prem). Rápido de setup, criptografado, mas latência variável. Direct Connect: dedicado, mais consistente, mais caro.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_172',
        question: "Qual princípio de segurança AWS recomenda isolar workloads usando contas AWS separadas?",
        options: [
            "Apenas usar VPCs diferentes na mesma conta, com documentação completa do processo e rastreabilidade de todas as decisões implementadas",
            "Account isolation — cada workload/ambiente em conta separada para blast radius mínimo e governance independente",
            "Usar apenas IAM policies",
            "Usar apenas Security Groups"
        ],
        correct: [1],
        explanation: "Account isolation: conta = hard boundary. Se uma conta é comprometida, outras não são afetadas. Best practice: contas separadas para prod/dev/staging, por equipe ou por aplicação. Organizations + SCPs governam.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_173',
        question: "Uma empresa europeia precisa garantir que dados de clientes NUNCA saiam da EU. Quais controles AWS usar?",
        options: [
            "Apenas confiar que AWS não move dados, incluindo configuração avançada de parâmetros e monitoramento contínuo do sistema em produção",
            "Selecionar EU regions + SCPs bloqueando regiões fora da EU + S3 bucket policies + Config Rules + encryption com KMS regional",
            "Apenas termos contratuais",
            "Não é possível na cloud"
        ],
        correct: [1],
        explanation: "Data residency: 1) Usar apenas EU regions, 2) SCP deny non-EU regions, 3) S3 Object Lock para imutabilidade, 4) KMS keys regionais (não replicam), 5) Config Rules para compliance. GDPR DPA via Artifact.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_174',
        question: "O que é o princípio de 'defense in depth' aplicado à segurança AWS?",
        options: [
            "Usar apenas um firewall muito forte, com integração completa ao ecossistema de serviços gerenciados e pipelines automatizados, considerando requisitos de compliance, governança e auditoria para ambientes regulados",
            "Múltiplas camadas de segurança: edge (CloudFront/WAF) → VPC (NACL/SG) → instance (OS hardening) → application (input validation) → data (encryption)",
            "Apenas criptografia",
            "Apenas IAM"
        ],
        correct: [1],
        explanation: "Defense in depth: se uma camada falha, outras protegem. AWS layers: Edge (Shield, WAF, CloudFront) → Network (VPC, NACL, SG, PrivateLink) → Compute (patching, Inspector) → Data (KMS, Macie) → Identity (IAM, MFA).",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_175',
        question: "Qual serviço AWS gerencia certificados SSL/TLS GRATUITOS para uso com serviços AWS como ALB e CloudFront?",
        options: [
            "AWS KMS",
            "AWS Certificate Manager (ACM) — provisiona, gerencia e renova certificados TLS públicos gratuitamente",
            "AWS Secrets Manager, garantindo escalabilidade horizontal e vertical conforme demanda do workload específico",
            "AWS CloudHSM"
        ],
        correct: [1],
        explanation: "ACM: certificados TLS públicos GRATUITOS, renovação automática, integra com ALB, CloudFront, API Gateway. Não precisa gerenciar expiração. Para EC2 diretamente: precisa importar cert (ACM não instala em EC2).",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_176',
        question: "Quais tarefas SÓ podem ser realizadas com o usuário root AWS? (Selecione a melhor resposta)",
        options: [
            "Criar instâncias EC2, utilizando as ferramentas nativas do serviço para automação e observabilidade operacional",
            "Fechar a conta AWS, alterar plano de suporte, restaurar IAM permissions, configurar MFA delete no S3",
            "Criar IAM users",
            "Criar VPCs"
        ],
        correct: [1],
        explanation: "Root-only tasks: fechar conta, mudar support plan, criar CloudFront key pair (legacy), configurar MFA Delete em S3, restaurar IAM permissions acidentalmente negadas, alterar account name/email.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_177',
        question: "O que é AWS CloudTrail Lake?",
        options: [
            "Data lake genérico",
            "Data lake gerenciado para eventos CloudTrail — permite queries SQL diretamente nos eventos sem configurar S3 + Athena separados",
            "Serviço de backup de logs",
            "Serviço de monitoramento de rede, com suporte a múltiplas regiões e redundância para alta disponibilidade e disaster recovery, seguindo o modelo de responsabilidade compartilhada e as políticas de segurança corporativas"
        ],
        correct: [1],
        explanation: "CloudTrail Lake: data lake auditoria. Query SQL direto nos eventos sem pipeline S3 → Athena. Retenção configurável (até 7 anos). Consolida eventos de múltiplas contas/regiões. Mais simples que trail → S3.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_178',
        question: "Uma empresa precisa verificar se IAM policies seguem least privilege. Qual ferramenta ajuda?",
        options: [
            "AWS CloudWatch",
            "IAM Access Analyzer policy validation + last accessed information — mostra quais permissões nunca foram usadas para right-sizing",
            "AWS Config apenas",
            "AWS Trusted Advisor apenas, implementando controles preventivos e detectivos conforme o framework de segurança organizacional, com capacidade de processamento paralelo e distribuído para atender picos de demanda"
        ],
        correct: [1],
        explanation: "Access Analyzer: 1) Policy validation (checks erros/warnings em policies), 2) External access findings, 3) IAM last accessed: mostra quando cada permission foi usada pela última vez → remover não usadas → least privilege.",
        topic: "security",
        domain: "security"
    }
];

securityQuestions.push(...securityLote8);
