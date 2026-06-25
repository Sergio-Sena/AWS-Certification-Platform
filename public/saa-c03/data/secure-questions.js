// SAA-C03 Domain 3: Secure Applications (48 questões - 24%)
// Tópicos: IAM, KMS, Secrets Manager, WAF, Shield, GuardDuty, Security Groups, NACLs, VPC, encryption

const secureQuestions = [
    {
        id: 'sec_001',
        question: "Uma empresa tem 500 desenvolvedores que precisam de acesso a diferentes recursos AWS baseado em seus projetos. Gerenciar IAM users individuais é inviável. Qual solução?",
        options: [
            "Usar IAM Identity Center (SSO) com permission sets mapeados para grupos do IdP corporativo",
            "Criar IAM users com policies inline para cada desenvolvedor",
            "Compartilhar credenciais por equipe",
            "Usar IAM roles com trust policy para cada desenvolvedor"
        ],
        correct: [0],
        explanation: "✅ IAM Identity Center integra com IdP corporativo (AD, Okta). Permission sets definem acesso por grupo/projeto. Credenciais temporárias, auditáveis, sem gerenciar IAM users.",
        topic: "iam",
        domain: "secure"
    },
    {
        id: 'sec_002',
        question: "Uma aplicação em EC2 precisa acessar S3 e DynamoDB. O desenvolvedor colocou access keys no código. Como corrigir seguindo best practices?",
        options: [
            "Mover as keys para variáveis de ambiente",
            "Armazenar keys no Secrets Manager",
            "Remover as keys e usar IAM Role associada à instância EC2 com policy de least privilege",
            "Usar keys rotacionadas a cada 30 dias"
        ],
        correct: [2],
        explanation: "✅ IAM Roles fornecem credenciais temporárias automaticamente via instance metadata. Sem keys estáticas no código. Policy com apenas as permissões necessárias (least privilege).",
        topic: "iam",
        domain: "secure"
    },
    {
        id: 'sec_003',
        question: "Uma empresa precisa criptografar dados em repouso no S3 com chave gerenciada pelo cliente, com rotação automática anual e auditoria de uso. Qual solução?",
        options: [
            "SSE-S3 (chave gerenciada pela AWS)",
            "SSE-C com chave fornecida pelo cliente",
            "Client-side encryption com chave local",
            "SSE-KMS com Customer Managed Key (CMK) + rotação automática + CloudTrail logging",
        ],
        correct: [3],
        explanation: "✅ SSE-KMS com CMK: cliente controla a chave, rotação automática anual, CloudTrail registra cada uso (quem, quando, qual recurso). SSE-S3 não permite auditoria granular.",
        topic: "encryption",
        domain: "secure"
    },
    {
        id: 'sec_004',
        question: "Uma aplicação web está sofrendo ataques SQL injection e XSS. O ALB está exposto à internet. Qual camada de proteção implementar?",
        options: [
            "Security Groups mais restritivos",
            "AWS WAF com managed rules (SQL injection + XSS) associado ao ALB + rate limiting",
            "NACLs bloqueando IPs suspeitos",
            "Mover ALB para subnet privada"
        ],
        correct: [1],
        explanation: "✅ WAF inspeciona HTTP requests no layer 7. Managed rules detectam SQL injection e XSS automaticamente. Rate limiting protege contra brute force. Security Groups operam no layer 4 (não inspecionam payload).",
        topic: "waf",
        domain: "secure"
    },
    {
        id: 'sec_005',
        question: "Uma aplicação precisa armazenar credenciais de banco de dados com rotação automática a cada 30 dias sem downtime na aplicação. Qual serviço?",
        options: [
            "AWS Secrets Manager com rotação automática via Lambda + multi-user rotation strategy",
            "Systems Manager Parameter Store SecureString",
            "KMS para armazenar a senha",
            "Variáveis de ambiente criptografadas"
        ],
        correct: [0],
        explanation: "✅ Secrets Manager rotaciona automaticamente via Lambda. Multi-user strategy cria novo user antes de deletar antigo (zero downtime). Integração nativa com RDS/Aurora.",
        topic: "secrets",
        domain: "secure"
    },
    {
        id: 'sec_006',
        question: "Uma empresa precisa garantir que instâncias EC2 em subnet privada possam acessar S3 sem tráfego passar pela internet. Qual solução mais segura?",
        options: [
            "NAT Gateway para acesso à internet",
            "S3 bucket público",
            "VPC Gateway Endpoint para S3 com bucket policy restringindo acesso ao VPC endpoint",
            "VPN para S3"
        ],
        correct: [2],
        explanation: "✅ Gateway Endpoint mantém tráfego dentro da rede AWS (sem internet). Bucket policy com condition aws:sourceVpce garante que apenas requests via endpoint são aceitos. Gratuito.",
        topic: "vpc",
        domain: "secure"
    },
    {
        id: 'sec_007',
        question: "Uma aplicação multi-tenant precisa isolar dados entre clientes no DynamoDB. Cada cliente deve acessar apenas seus próprios dados. Como implementar com IAM?",
        options: [
            "Tabelas separadas por cliente",
            "Usar VPC endpoints separados por cliente",
            "Filtrar dados na aplicação",
            "IAM policy com condition key dynamodb:LeadingKeys limitando acesso ao partition key do tenant",
        ],
        correct: [3],
        explanation: "✅ Condition dynamodb:LeadingKeys restringe acesso a items cujo partition key corresponde ao tenant_id do usuário. Isolamento no nível IAM, impossível acessar dados de outro tenant.",
        topic: "iam",
        domain: "secure"
    },
    {
        id: 'sec_008',
        question: "Uma empresa detectou atividade suspeita: API calls de um país onde não opera, tentativas de desabilitar CloudTrail, e acesso a dados sensíveis fora do horário. Qual serviço detecta isso automaticamente?",
        options: [
            "CloudWatch Alarms",
            "Amazon GuardDuty com threat intelligence + anomaly detection",
            "AWS Config Rules",
            "CloudTrail Insights"
        ],
        correct: [1],
        explanation: "✅ GuardDuty usa ML e threat intelligence para detectar: unusual API calls, geographic anomalies, credential compromise, data exfiltration. Sem configuração de regras — detecção automática.",
        topic: "detection",
        domain: "secure"
    },
    {
        id: 'sec_009',
        question: "Uma aplicação precisa de comunicação criptografada end-to-end entre microservices em ECS. Certificados devem ser gerenciados automaticamente. Qual solução?",
        options: [
            "AWS App Mesh com mTLS + ACM Private CA para emissão automática de certificados",
            "Self-signed certificates em cada container",
            "ALB com HTTPS apenas no ingress",
            "VPN entre services"
        ],
        correct: [0],
        explanation: "✅ App Mesh com mTLS criptografa tráfego entre todos os services (east-west). ACM Private CA emite e rotaciona certificados automaticamente. Zero trust networking.",
        topic: "encryption",
        domain: "secure"
    },
    {
        id: 'sec_010',
        question: "Uma empresa precisa bloquear acesso SSH direto a instâncias EC2 em produção, mas manter capacidade de troubleshooting. Qual abordagem?",
        options: [
            "Bastion host em subnet pública",
            "VPN + SSH",
            "AWS Systems Manager Session Manager (sem porta 22 aberta, com logging e IAM control)",
            "EC2 Instance Connect"
        ],
        correct: [2],
        explanation: "✅ Session Manager: acesso via IAM (sem SSH keys), sem porta 22 aberta (sem Security Group inbound), sessões logadas no CloudTrail/S3, controle granular por IAM policy.",
        topic: "access",
        domain: "secure"
    },
    {
        id: 'sec_011',
        question: "Uma aplicação web precisa proteger contra DDoS volumétrico (layer 3/4) e ataques sofisticados na camada de aplicação (layer 7). Qual combinação?",
        options: [
            "Security Groups + NACLs",
            "On-premises firewall",
            "Apenas CloudFront",
            "AWS Shield Advanced + WAF + CloudFront + Route 53 (todos com DDoS protection)",
        ],
        correct: [3],
        explanation: "✅ Shield Advanced protege contra DDoS L3/L4 com mitigação automática. WAF protege L7 (rate limiting, bot control). CloudFront absorve tráfego nos edges. Route 53 é resiliente a DNS floods.",
        topic: "ddos",
        domain: "secure"
    },
    {
        id: 'sec_012',
        question: "Uma empresa precisa garantir que todos os buckets S3 na conta tenham encryption habilitada e block public access ativo. Como enforçar automaticamente?",
        options: [
            "Verificar manualmente cada bucket",
            "AWS Config Rules (s3-bucket-server-side-encryption-enabled + s3-bucket-public-read-prohibited) com auto-remediation via SSM",
            "SCPs no Organizations",
            "CloudWatch Events"
        ],
        correct: [1],
        explanation: "✅ Config Rules avaliam compliance continuamente. Auto-remediation via SSM Automation corrige automaticamente buckets non-compliant. SCPs previnem mas não remediam recursos existentes.",
        topic: "compliance",
        domain: "secure"
    },
    {
        id: 'sec_013',
        question: "Uma aplicação em VPC precisa acessar APIs da AWS (SQS, SNS, KMS) sem que o tráfego saia para internet. A VPC não tem NAT Gateway. Como resolver?",
        options: [
            "Criar VPC Interface Endpoints (PrivateLink) para cada serviço necessário",
            "Adicionar NAT Gateway",
            "Usar VPN para AWS",
            "Peering com VPC default"
        ],
        correct: [0],
        explanation: "✅ Interface Endpoints (PrivateLink) criam ENIs na VPC com IPs privados para serviços AWS. Tráfego fica na rede AWS. Sem NAT, sem internet. Security Groups controlam acesso ao endpoint.",
        topic: "vpc",
        domain: "secure"
    },
    {
        id: 'sec_014',
        question: "Uma empresa com AWS Organizations precisa impedir que qualquer conta membro desabilite CloudTrail ou delete logs. Qual mecanismo?",
        options: [
            "IAM policies em cada conta",
            "CloudTrail organization trail apenas",
            "Service Control Policy (SCP) com deny explícito para cloudtrail:StopLogging e cloudtrail:DeleteTrail",
            "Config Rules"
        ],
        correct: [2],
        explanation: "✅ SCPs são guardrails que limitam permissões máximas de contas. Deny explícito em SCP não pode ser overridden por nenhuma IAM policy na conta — nem pelo root da conta membro.",
        topic: "organizations",
        domain: "secure"
    },
    {
        id: 'sec_015',
        question: "Uma aplicação precisa validar tokens JWT de um IdP externo (Auth0) antes de permitir acesso à API. Qual solução serverless?",
        options: [
            "Lambda authorizer que valida JWT em cada request",
            "WAF com custom rules",
            "Cognito User Pool como proxy",
            "API Gateway com JWT authorizer (HTTP API) que valida automaticamente contra JWKS endpoint",
        ],
        correct: [3],
        explanation: "✅ HTTP API JWT authorizer valida tokens nativamente contra o JWKS endpoint do IdP. Sem Lambda, sem código, sem custo extra. Configuração: issuer URL + audience. Caching automático de JWKS.",
        topic: "authentication",
        domain: "secure"
    },
    {
        id: 'sec_016',
        question: "Uma empresa precisa de auditoria completa de todas as ações em todas as contas AWS (20 contas). Logs devem ser imutáveis por 7 anos. Qual arquitetura?",
        options: [
            "CloudTrail em cada conta com S3 local",
            "Organization Trail → S3 bucket centralizado com Object Lock (Compliance mode, 7 anos) + KMS encryption",
            "CloudWatch Logs em cada conta",
            "Third-party SIEM apenas"
        ],
        correct: [1],
        explanation: "✅ Organization Trail captura eventos de todas as contas automaticamente. S3 Object Lock Compliance impede deleção/modificação por 7 anos. KMS encryption protege confidencialidade.",
        topic: "audit",
        domain: "secure"
    },
    {
        id: 'sec_017',
        question: "Uma aplicação em EC2 precisa acessar um banco RDS em subnet privada. Atualmente, o Security Group do RDS permite 0.0.0.0/0 na porta 3306. Como corrigir?",
        options: [
            "Alterar SG do RDS para permitir inbound apenas do Security Group das instâncias EC2 na porta 3306",
            "Usar NACL para bloquear acesso externo",
            "Mover RDS para subnet pública com IP restrito",
            "Usar IAM authentication apenas"
        ],
        correct: [0],
        explanation: "✅ Referenciar Security Group como source (ao invés de CIDR) permite acesso apenas de instâncias naquele SG. Se instâncias mudam de IP, acesso continua funcionando. Princípio de least privilege.",
        topic: "networking",
        domain: "secure"
    },
    {
        id: 'sec_018',
        question: "Uma empresa precisa criptografar volumes EBS existentes (500 volumes não-criptografados). EBS encryption não pode ser habilitada em volumes existentes. Como migrar?",
        options: [
            "Habilitar encryption no volume existente",
            "Usar dm-crypt no OS",
            "Criar snapshot → copiar snapshot com encryption → criar novo volume encrypted → swap",
            "Recriar instâncias com encryption by default"
        ],
        correct: [2],
        explanation: "✅ Snapshot do volume não-encrypted → copy snapshot com KMS key → novo volume encrypted do snapshot. Swap volumes na instância. Habilitar 'EBS encryption by default' para novos volumes.",
        topic: "encryption",
        domain: "secure"
    },
    {
        id: 'sec_019',
        question: "Uma aplicação web usa Cognito User Pool para autenticação. Precisa de MFA obrigatório e bloqueio após 5 tentativas falhas. Como configurar?",
        options: [
            "Implementar MFA custom na aplicação",
            "Lambda trigger para contar tentativas",
            "WAF rate limiting",
            "Cognito User Pool: MFA = Required + Advanced Security Features (adaptive authentication + compromised credentials detection)",
        ],
        correct: [3],
        explanation: "✅ Cognito Advanced Security: adaptive MFA, risk-based authentication, compromised credentials check, account lockout automático. Configuração nativa sem código custom.",
        topic: "authentication",
        domain: "secure"
    },
    {
        id: 'sec_020',
        question: "Uma empresa precisa garantir que dados sensíveis (PII) em S3 sejam identificados e classificados automaticamente. Qual serviço?",
        options: [
            "S3 Storage Lens",
            "Amazon Macie com sensitive data discovery jobs + automated classification",
            "AWS Config",
            "CloudTrail data events"
        ],
        correct: [1],
        explanation: "✅ Macie usa ML para descobrir e classificar dados sensíveis (PII, credentials, financial data) em S3 automaticamente. Gera findings com localização exata e tipo de dado sensível.",
        topic: "data-protection",
        domain: "secure"
    }
];

window.secureQuestions = secureQuestions;


// Secure Applications - Lote 2 (questões 21-40)
const secureQuestions2 = [
    {
        id: 'sec_021',
        question: "Uma aplicação em Lambda precisa acessar uma API externa que requer API key. A key não deve estar no código nem em variáveis de ambiente em plain text. Qual solução?",
        options: [
            "Armazenar no Secrets Manager ou Parameter Store SecureString + IAM role da Lambda com permissão de leitura",
            "Hardcode no código com ofuscação",
            "Variável de ambiente plain text",
            "Arquivo .env no deployment package"
        ],
        correct: [0],
        explanation: "✅ Secrets Manager/Parameter Store SecureString criptografa com KMS. Lambda IAM role permite leitura. SDK busca o secret em runtime. Sem secrets no código ou variáveis plain text.",
        topic: "secrets",
        domain: "secure"
    },
    {
        id: 'sec_022',
        question: "Uma empresa precisa restringir que recursos AWS só possam ser criados em regiões específicas (us-east-1 e eu-west-1) para compliance com GDPR. Como enforçar?",
        options: [
            "IAM policies em cada user",
            "Config Rules",
            "SCP no Organizations com deny para todas as regiões exceto us-east-1 e eu-west-1 (com exceções para serviços globais)",
            "Desabilitar regiões no console"
        ],
        correct: [2],
        explanation: "✅ SCP com deny + StringNotEquals aws:RequestedRegion restringe criação de recursos. Exceções necessárias para serviços globais (IAM, CloudFront, Route 53, etc).",
        topic: "organizations",
        domain: "secure"
    },
    {
        id: 'sec_023',
        question: "Uma aplicação precisa de cross-account access: conta A (produção) precisa ler objetos de um bucket S3 na conta B (data lake). Qual método mais seguro?",
        options: [
            "Tornar o bucket público",
            "Replicar dados para conta A",
            "Compartilhar access keys da conta B",
            "IAM role na conta B com trust policy para conta A + bucket policy permitindo o role",
        ],
        correct: [3],
        explanation: "✅ Cross-account role: conta A assume role na conta B (AssumeRole). Trust policy controla quem pode assumir. Bucket policy restringe ao role. Credenciais temporárias, auditáveis.",
        topic: "iam",
        domain: "secure"
    },
    {
        id: 'sec_024',
        question: "Uma aplicação web sofre ataques de credential stuffing (tentativas de login com credenciais vazadas). Rate limiting por IP não funciona pois atacantes usam botnets distribuídas. Como proteger?",
        options: [
            "Bloquear IPs manualmente",
            "AWS WAF Bot Control + Cognito Advanced Security (compromised credentials detection) + CAPTCHA challenge",
            "Aumentar complexidade de senha",
            "Desabilitar login por 1 hora após 3 falhas"
        ],
        correct: [1],
        explanation: "✅ WAF Bot Control detecta bots distribuídos (fingerprinting). Cognito verifica credenciais contra databases de vazamentos. CAPTCHA challenge para requests suspeitos. Proteção em camadas.",
        topic: "waf",
        domain: "secure"
    },
    {
        id: 'sec_025',
        question: "Uma empresa precisa que todas as comunicações entre VPCs (10 VPCs) sejam inspecionadas por um firewall centralizado. Qual arquitetura?",
        options: [
            "AWS Transit Gateway com inspection VPC + AWS Network Firewall para inspeção centralizada",
            "Security Groups em cada VPC",
            "VPC Peering entre todas as VPCs",
            "NACLs em cada subnet"
        ],
        correct: [0],
        explanation: "✅ Transit Gateway centraliza conectividade. Route tables direcionam tráfego inter-VPC pela inspection VPC. Network Firewall inspeciona com stateful rules (IDS/IPS). Arquitetura hub-and-spoke.",
        topic: "networking",
        domain: "secure"
    },
    {
        id: 'sec_026',
        question: "Uma aplicação armazena dados de cartão de crédito e precisa atender PCI DSS. Os dados devem ser criptografados com chaves que a AWS não pode acessar. Qual solução?",
        options: [
            "SSE-KMS com AWS managed key",
            "SSE-S3",
            "AWS CloudHSM para gerenciamento de chaves (single-tenant HSM) + client-side encryption",
            "KMS com CMK"
        ],
        correct: [2],
        explanation: "✅ CloudHSM é single-tenant (AWS não tem acesso às chaves). FIPS 140-2 Level 3. Client-side encryption garante que dados chegam criptografados ao S3. Atende PCI DSS requirement de key management.",
        topic: "encryption",
        domain: "secure"
    },
    {
        id: 'sec_027',
        question: "Uma empresa descobriu que um IAM access key foi comprometido e publicado no GitHub. Quais ações imediatas tomar? (em ordem)",
        options: [
            "Deletar o usuário IAM",
            "Notificar a AWS",
            "Rotacionar a key apenas",
            "Desabilitar a key → verificar CloudTrail para ações não-autorizadas → revogar sessões ativas → criar nova key → remediar recursos afetados",
        ],
        correct: [3],
        explanation: "✅ 1) Desabilitar key (parar acesso). 2) CloudTrail audit (o que fizeram). 3) Revogar sessões (invalidar tokens temporários). 4) Nova key se necessário. 5) Remediar (deletar recursos criados pelo atacante).",
        topic: "incident",
        domain: "secure"
    },
    {
        id: 'sec_028',
        question: "Uma aplicação precisa de network isolation completa: instâncias em subnet privada sem acesso à internet (nem outbound), mas precisam acessar S3 e DynamoDB. Como?",
        options: [
            "NAT Gateway com NACL restritiva",
            "VPC Gateway Endpoint (S3) + Interface Endpoint (DynamoDB) + sem NAT/IGW + Security Groups restritivos",
            "Proxy HTTP interno",
            "Direct Connect para AWS services"
        ],
        correct: [1],
        explanation: "✅ Gateway Endpoint (S3, gratuito) e Interface Endpoint (DynamoDB) permitem acesso sem internet. Sem NAT/IGW = zero outbound internet. SGs nos endpoints controlam quais instâncias acessam.",
        topic: "vpc",
        domain: "secure"
    },
    {
        id: 'sec_029',
        question: "Uma empresa precisa implementar least privilege para 50 Lambda functions, cada uma acessando recursos diferentes. Criar 50 IAM roles manualmente é inviável. Como automatizar?",
        options: [
            "IAM Access Analyzer para gerar policies baseadas em atividade real + SAM/CloudFormation para definir roles per-function",
            "Uma role compartilhada com todas as permissões",
            "Usar AdministratorAccess em todas",
            "Policies inline em cada function"
        ],
        correct: [0],
        explanation: "✅ Access Analyzer analisa CloudTrail e gera policy com apenas as permissões realmente usadas. SAM template define role per-function como código. Least privilege automatizado e versionado.",
        topic: "iam",
        domain: "secure"
    },
    {
        id: 'sec_030',
        question: "Uma aplicação usa ALB com HTTPS. O certificado precisa cobrir *.example.com e api.example.com. Como gerenciar sem preocupação com renovação?",
        options: [
            "Comprar certificado de CA externa e importar no IAM",
            "Self-signed certificate",
            "AWS Certificate Manager (ACM) com validação DNS + wildcard certificate (auto-renovação)",
            "Let's Encrypt com cron job"
        ],
        correct: [2],
        explanation: "✅ ACM com DNS validation: emissão gratuita, renovação automática (sem intervenção), wildcard (*.example.com) cobre todos os subdomínios. Integração nativa com ALB/CloudFront.",
        topic: "encryption",
        domain: "secure"
    },
    {
        id: 'sec_031',
        question: "Uma empresa precisa detectar quando recursos AWS ficam non-compliant com suas políticas de segurança (ex: SG com 0.0.0.0/0, bucket sem encryption). Qual serviço monitora continuamente?",
        options: [
            "CloudWatch",
            "GuardDuty",
            "Trusted Advisor apenas",
            "AWS Config com conformance packs + continuous evaluation + SNS notifications",
        ],
        correct: [3],
        explanation: "✅ Config avalia compliance continuamente contra rules definidas. Conformance packs agrupam rules por framework (CIS, PCI). SNS notifica mudanças de compliance. Timeline mostra histórico.",
        topic: "compliance",
        domain: "secure"
    },
    {
        id: 'sec_032',
        question: "Uma aplicação multi-tier tem web tier (pública), app tier (privada) e DB tier (privada). Como configurar NACLs para permitir apenas tráfego necessário entre tiers?",
        options: [
            "Allow all entre subnets",
            "NACL web: allow 443 inbound internet + allow ephemeral outbound. NACL app: allow inbound apenas do web subnet CIDR. NACL DB: allow 3306 apenas do app subnet CIDR",
            "Usar apenas Security Groups",
            "Deny all e liberar conforme necessário"
        ],
        correct: [1],
        explanation: "✅ NACLs são stateless (precisam de regras inbound E outbound). Restringir por CIDR de subnet entre tiers. Ephemeral ports (1024-65535) necessários para responses. Defense in depth com SGs.",
        topic: "networking",
        domain: "secure"
    },
    {
        id: 'sec_033',
        question: "Uma empresa precisa que dados em trânsito entre aplicação e RDS sejam criptografados, e que a aplicação verifique a identidade do servidor RDS. Como implementar?",
        options: [
            "Habilitar SSL/TLS no RDS + forçar ssl na connection string + usar RDS CA certificate para verificação",
            "VPN entre app e RDS",
            "Usar IAM authentication",
            "Colocar ambos na mesma subnet"
        ],
        correct: [0],
        explanation: "✅ RDS suporta SSL/TLS nativo. Parameter group: rds.force_ssl=1 rejeita conexões não-SSL. CA certificate do RDS valida identidade do servidor (previne MITM). Sem overhead de VPN.",
        topic: "encryption",
        domain: "secure"
    },
    {
        id: 'sec_034',
        question: "Uma empresa precisa centralizar findings de segurança de GuardDuty, Inspector, Macie, Firewall Manager e third-party tools em um único dashboard. Qual serviço?",
        options: [
            "CloudWatch Dashboard",
            "SIEM third-party apenas",
            "AWS Security Hub com automated compliance checks + cross-account aggregation",
            "EventBridge com custom dashboard"
        ],
        correct: [2],
        explanation: "✅ Security Hub agrega findings de todos os serviços de segurança AWS + third-party. Compliance checks automáticos (CIS, PCI). Cross-account via Organizations. Dashboard unificado com priorização.",
        topic: "detection",
        domain: "secure"
    },
    {
        id: 'sec_035',
        question: "Uma aplicação precisa de autenticação federada: usuários fazem login com Google/Facebook e recebem credenciais AWS temporárias para acessar S3 diretamente do browser. Qual solução?",
        options: [
            "IAM users para cada usuário social",
            "STS AssumeRole direto",
            "API Gateway com Lambda authorizer",
            "Cognito Identity Pool (federated identities) com role mapping baseado em provider + S3 access scoped por identity ID",
        ],
        correct: [3],
        explanation: "✅ Cognito Identity Pool troca token social por credenciais AWS temporárias. Role mapping define permissões por provider. S3 policy com ${cognito-identity.amazonaws.com:sub} isola dados por usuário.",
        topic: "authentication",
        domain: "secure"
    },
    {
        id: 'sec_036',
        question: "Uma empresa precisa prevenir data exfiltration via S3. Funcionários não devem poder copiar dados para buckets pessoais ou contas externas. Como enforçar?",
        options: [
            "Monitorar CloudTrail manualmente",
            "S3 bucket policy com deny s3:PutObject para destinos fora da organização + VPC endpoint policy restringindo buckets permitidos",
            "Desabilitar AWS CLI para funcionários",
            "Usar apenas console"
        ],
        correct: [1],
        explanation: "✅ VPC endpoint policy restringe quais buckets podem ser acessados (apenas da organização). Bucket policy com condition aws:PrincipalOrgID garante acesso apenas de contas da org.",
        topic: "data-protection",
        domain: "secure"
    },
    {
        id: 'sec_037',
        question: "Uma aplicação precisa de temporary elevated access (break-glass) para engenheiros acessarem produção durante incidentes, com aprovação e auditoria. Qual solução?",
        options: [
            "IAM Identity Center com permission sets elevados + AWS SSO com MFA + CloudTrail + time-limited sessions",
            "Compartilhar credenciais de admin",
            "Dar acesso admin permanente",
            "Bastion host com senha compartilhada"
        ],
        correct: [0],
        explanation: "✅ Permission sets elevados com MFA obrigatório. Sessions time-limited (1-12h). CloudTrail audita todas as ações. Pode integrar com approval workflow (ServiceNow, Slack). Acesso revogado automaticamente.",
        topic: "access",
        domain: "secure"
    },
    {
        id: 'sec_038',
        question: "Uma aplicação usa KMS CMK para criptografar dados. A key policy permite apenas a conta owner. Um novo serviço em outra conta precisa descriptografar. Como conceder acesso sem alterar a key policy?",
        options: [
            "Não é possível sem alterar key policy",
            "Compartilhar a key ARN",
            "Criar grant na KMS key para o IAM role da outra conta (grants permitem delegação sem alterar policy)",
            "Reencriptar com nova key"
        ],
        correct: [2],
        explanation: "✅ KMS Grants permitem acesso temporário e delegável sem modificar key policy. Ideal para cross-account ou acesso temporário. Podem ser revogados (RetireGrant). Auditados no CloudTrail.",
        topic: "encryption",
        domain: "secure"
    },
    {
        id: 'sec_039',
        question: "Uma empresa precisa escanear instâncias EC2 e containers ECR para vulnerabilidades (CVEs) automaticamente, sem instalar agentes. Qual serviço?",
        options: [
            "GuardDuty",
            "AWS Config",
            "Qualys/Nessus on EC2",
            "Amazon Inspector com agentless scanning (SSM) + ECR image scanning automático",
        ],
        correct: [3],
        explanation: "✅ Inspector v2: agentless via SSM (scan de OS e packages em EC2), scan automático de imagens ECR no push. Findings com CVE severity e remediation guidance. Sem agente para instalar.",
        topic: "vulnerability",
        domain: "secure"
    },
    {
        id: 'sec_040',
        question: "Uma aplicação precisa de row-level security em um data lake: analistas do departamento A só veem dados do departamento A, mesmo acessando a mesma tabela. Qual solução?",
        options: [
            "Tabelas separadas por departamento",
            "AWS Lake Formation com data filters (column-level e row-level security) + tag-based access control",
            "IAM policies com conditions",
            "Views separadas no Athena"
        ],
        correct: [1],
        explanation: "✅ Lake Formation data filters permitem row-level e column-level security na mesma tabela. Tag-based access control simplifica gerenciamento. Funciona com Athena, Redshift Spectrum, EMR.",
        topic: "data-protection",
        domain: "secure"
    }
];

secureQuestions.push(...secureQuestions2);


// Secure Applications - Lote 3 (questões 41-48)
const secureQuestions3 = [
    {
        id: 'sec_041',
        question: "Uma aplicação em ECS Fargate precisa acessar Secrets Manager para obter database credentials. O container não deve ter acesso a outros secrets. Como implementar least privilege?",
        options: [
            "Task execution role com permissão GetSecretValue restrita ao ARN específico do secret + referência no task definition",
            "Task role com secretsmanager:GetSecretValue para todos os secrets",
            "Variáveis de ambiente com valores plain text",
            "Montar secret como volume EFS"
        ],
        correct: [0],
        explanation: "✅ Task execution role com Resource restrito ao ARN do secret específico. Task definition referencia o secret (valueFrom). ECS injeta automaticamente no container. Zero acesso a outros secrets.",
        topic: "containers",
        domain: "secure"
    },
    {
        id: 'sec_042',
        question: "Uma empresa precisa garantir que todas as API calls em sua conta AWS sejam logadas, incluindo data events (S3 object-level, Lambda invocations). Qual configuração?",
        options: [
            "CloudTrail com management events apenas (padrão)",
            "CloudWatch Logs",
            "CloudTrail trail com management events + data events habilitados para S3 e Lambda + log file validation enabled",
            "VPC Flow Logs"
        ],
        correct: [2],
        explanation: "✅ Data events capturam operações em recursos (GetObject, PutObject, Invoke). Log file validation garante integridade (detecta tampering). Management events sozinhos não capturam acesso a dados.",
        topic: "audit",
        domain: "secure"
    },
    {
        id: 'sec_043',
        question: "Uma aplicação precisa de comunicação segura entre on-premises e AWS VPC. Requisitos: criptografia, bandwidth de 1Gbps consistente, e latência previsível. Qual solução?",
        options: [
            "VPN Site-to-Site apenas",
            "AWS Client VPN",
            "Internet pública com TLS",
            "AWS Direct Connect com MACsec encryption (layer 2) + VPN backup para redundância",
        ],
        correct: [3],
        explanation: "✅ Direct Connect fornece bandwidth dedicada e latência consistente. MACsec criptografa no layer 2 (wire-speed, sem overhead). VPN como backup garante conectividade se DX falhar.",
        topic: "networking",
        domain: "secure"
    },
    {
        id: 'sec_044',
        question: "Uma empresa precisa implementar tag-based access control: desenvolvedores só podem gerenciar recursos com tag Environment=Development. Como enforçar?",
        options: [
            "Confiar que desenvolvedores tagueiem corretamente",
            "IAM policy com condition aws:ResourceTag/Environment = Development + deny se tentarem remover/alterar a tag",
            "Contas separadas por ambiente",
            "Config Rules para verificar tags"
        ],
        correct: [1],
        explanation: "✅ Condition aws:ResourceTag restringe ações a recursos com tag específica. Deny em ec2:DeleteTags/CreateTags para a tag Environment previne escalação (mudar tag para acessar prod).",
        topic: "iam",
        domain: "secure"
    },
    {
        id: 'sec_045',
        question: "Uma aplicação web precisa proteger contra OWASP Top 10 e também bloquear requests de países onde a empresa não opera. Qual configuração WAF?",
        options: [
            "AWS WAF com AWS Managed Rules (Core Rule Set + Known Bad Inputs) + geo match condition com block action",
            "Security Groups com geo-blocking",
            "CloudFront geo restriction apenas",
            "NACLs com listas de IPs por país"
        ],
        correct: [0],
        explanation: "✅ Core Rule Set cobre OWASP Top 10. Known Bad Inputs detecta payloads maliciosos. Geo match condition bloqueia por país. CloudFront geo restriction é mais limitada (não inspeciona payload).",
        topic: "waf",
        domain: "secure"
    },
    {
        id: 'sec_046',
        question: "Uma empresa precisa de segregação de duties: quem cria KMS keys não pode usá-las para encrypt/decrypt, e quem usa não pode deletá-las. Como implementar?",
        options: [
            "Uma IAM policy para todos",
            "Usar AWS managed keys",
            "KMS key policy com statements separados: key administrators (create/delete/manage) vs key users (encrypt/decrypt) — principals diferentes",
            "Rotacionar keys frequentemente"
        ],
        correct: [2],
        explanation: "✅ Key policy separa: Key Administrators (kms:Create*, kms:Delete*, kms:Put*) e Key Users (kms:Encrypt, kms:Decrypt, kms:GenerateDataKey). Principals diferentes = segregation of duties.",
        topic: "encryption",
        domain: "secure"
    },
    {
        id: 'sec_047',
        question: "Uma aplicação serverless (API Gateway + Lambda) precisa de proteção contra ataques de replay (reuso de tokens/requests antigos). Como implementar?",
        options: [
            "HTTPS apenas",
            "API keys",
            "WAF rate limiting",
            "Request signing com timestamp + nonce em DynamoDB (TTL) + rejeitar requests com timestamp > 5 minutos",
        ],
        correct: [3],
        explanation: "✅ Timestamp no request rejeita requests antigos (> 5min = replay). Nonce (unique ID) em DynamoDB com TTL previne reuso dentro da janela válida. Combinados: proteção completa contra replay.",
        topic: "api-security",
        domain: "secure"
    },
    {
        id: 'sec_048',
        question: "Uma empresa com múltiplas contas AWS precisa de uma estratégia de segurança centralizada que inclua: detecção de ameaças, compliance, vulnerability scanning e firewall management. Qual combinação?",
        options: [
            "GuardDuty + Config + Inspector em cada conta separadamente",
            "Security Hub (aggregator) + GuardDuty + Config + Inspector + Firewall Manager — todos com delegated administrator via Organizations",
            "Third-party SIEM apenas",
            "CloudWatch com custom metrics de segurança"
        ],
        correct: [1],
        explanation: "✅ Delegated administrator centraliza gerenciamento. Security Hub agrega findings. GuardDuty detecta ameaças. Config avalia compliance. Inspector escaneia vulnerabilidades. Firewall Manager aplica WAF/SG rules. Tudo multi-account via Organizations.",
        topic: "strategy",
        domain: "secure"
    }
];

secureQuestions.push(...secureQuestions3);
