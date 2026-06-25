// DOP-C02 Domain 6: Security & Compliance (37 questões - 17%)
// Tópicos: IAM advanced, pipeline security, secrets rotation, KMS, Config Rules, Security Hub, compliance as code

const securityDopQuestions = [
    {
        id: 'secdop_001',
        question: "Uma empresa quer limitar o máximo de permissões que qualquer IAM policy pode conceder a developers, mesmo que a policy attached seja mais permissiva. Como?",
        options: [
            "Permission Boundaries — define o teto máximo de permissões. A interseção entre boundary e policy determina o acesso efetivo",
            "IAM policy com Deny explícito",
            "SCP na conta",
            "Resource-based policy"
        ],
        correct: [0],
        explanation: "✅ Permission Boundaries: limite máximo de permissões para um IAM entity. Efetivo = interseção de identity policy ∩ boundary. Dev pode ter AdministratorAccess policy, mas boundary limita a apenas S3 e Lambda. Delegação segura.",
        topic: "iam-advanced",
        domain: "security"
    },
    {
        id: 'secdop_002',
        question: "Uma empresa multi-account quer impedir que QUALQUER conta na Organization crie recursos fora de us-east-1 e eu-west-1. Como enforçar?",
        options: [
            "IAM policy em cada conta",
            "AWS Config Rule",
            "Service Control Policy (SCP) na OU com Deny para todas as regiões exceto us-east-1 e eu-west-1 — aplica a todas as contas da OU",
            "CloudTrail alert"
        ],
        correct: [2],
        explanation: "✅ SCPs: guardrails organizacionais. Deny em regiões não aprovadas. Aplica a TODAS as contas na OU (inclusive admin, exceto management account). Não concede permissão, apenas limita. Defense in depth com IAM policies.",
        topic: "iam-advanced",
        domain: "security"
    },
    {
        id: 'secdop_003',
        question: "Uma pipeline CI/CD precisa deployar recursos em outra conta AWS (cross-account). Qual é o padrão seguro?",
        options: [
            "Compartilhar access keys entre contas",
            "VPC Peering entre contas",
            "Criar IAM user na conta target",
            "Cross-account IAM Role: conta target cria role com trust policy para conta source. Pipeline assume a role via STS AssumeRole",
        ],
        correct: [3],
        explanation: "✅ Cross-account roles: conta B cria role com trust policy permitindo conta A assumir. Pipeline na conta A chama sts:AssumeRole, recebe credenciais temporárias da conta B. Sem keys permanentes. Auditável via CloudTrail.",
        topic: "iam-advanced",
        domain: "security"
    },
    {
        id: 'secdop_004',
        question: "Uma equipe quer que secrets (DB passwords, API keys) sejam rotacionados automaticamente a cada 30 dias sem downtime na aplicação. Qual serviço?",
        options: [
            "Parameter Store SecureString",
            "AWS Secrets Manager com rotação automática via Lambda — rotaciona, testa nova credencial, e atualiza sem downtime",
            "KMS key rotation",
            "IAM access key rotation manual"
        ],
        correct: [1],
        explanation: "✅ Secrets Manager: rotação automática configurável (30, 60, 90 dias). Lambda function rotaciona (cria nova credencial no DB, testa, atualiza secret). Aplicação sempre busca versão AWSCURRENT. Multi-user rotation para zero downtime.",
        topic: "secrets",
        domain: "security"
    },
    {
        id: 'secdop_005',
        question: "Uma empresa quer criptografar dados com chave gerenciada pelo cliente, com controle granular de quem pode usar a chave para encrypt/decrypt. Qual configuração?",
        options: [
            "AWS KMS Customer Managed Key (CMK) com key policy definindo quem pode usar (kms:Encrypt, kms:Decrypt) + grants para acesso temporário",
            "SSE-S3 (chave gerenciada pela AWS)",
            "Client-side encryption",
            "CloudHSM"
        ],
        correct: [0],
        explanation: "✅ Customer Managed CMK: cliente controla key policy (quem administra, quem usa). Grants: acesso temporário sem mudar policy. Rotation automática anual. Audit via CloudTrail (toda chamada KMS logada). Envelope encryption para performance.",
        topic: "kms",
        domain: "security"
    },
    {
        id: 'secdop_006',
        question: "Uma pipeline de CI precisa escanear código-fonte para vulnerabilidades de segurança (SQL injection, XSS) ANTES do deploy. Qual prática?",
        options: [
            "Code review manual apenas",
            "WAF em produção",
            "SAST (Static Application Security Testing) integrado ao pipeline — ferramentas como CodeGuru Reviewer, SonarQube, ou Checkmarx escaneiam código em build time",
            "Penetration testing após deploy"
        ],
        correct: [2],
        explanation: "✅ SAST: análise estática do código-fonte sem executar. Detecta vulnerabilidades (injection, XSS, hardcoded secrets) no pipeline CI. Shift-left security. CodeGuru Reviewer: SAST gerenciado da AWS. Complementar com DAST (runtime) em staging.",
        topic: "pipeline-security",
        domain: "security"
    },
    {
        id: 'secdop_007',
        question: "Uma empresa quer garantir que container images usadas em produção não tenham vulnerabilidades conhecidas (CVEs). Como integrar ao pipeline?",
        options: [
            "Confiar nas imagens base",
            "Usar apenas imagens oficiais",
            "Scan manual periódico",
            "Amazon ECR Image Scanning (básico ou enhanced com Inspector) no push + policy que bloqueia deploy se vulnerabilidades críticas encontradas",
        ],
        correct: [3],
        explanation: "✅ ECR Image Scanning: scan on push ou contínuo (enhanced via Inspector). Detecta CVEs nas camadas da imagem. Pipeline verifica findings: se CRITICAL/HIGH → bloqueia deploy. Shift-left: encontra antes de produção.",
        topic: "pipeline-security",
        domain: "security"
    },
    {
        id: 'secdop_008',
        question: "Uma empresa quer garantir que artefatos de build (JARs, Docker images) não foram adulterados entre build e deploy. Qual prática?",
        options: [
            "Checksum manual",
            "Code signing — assinar artefatos com AWS Signer. Deploy verifica assinatura antes de executar. Garante integridade e autenticidade",
            "S3 versioning",
            "Hash no nome do arquivo"
        ],
        correct: [1],
        explanation: "✅ Code signing: assina artefato com chave privada. Deploy verifica assinatura com chave pública. Se adulterado, assinatura inválida → deploy bloqueado. AWS Signer para Lambda, ECR. Garante supply chain integrity.",
        topic: "pipeline-security",
        domain: "security"
    },
    {
        id: 'secdop_009',
        question: "Uma empresa quer detectar automaticamente quando recursos AWS estão non-compliant com políticas de segurança (ex: S3 bucket público, SG aberto). Qual serviço?",
        options: [
            "AWS Config Rules — avalia compliance de recursos continuamente. Managed rules (pré-built) + custom rules (Lambda). Alerta e remedia non-compliance",
            "CloudTrail",
            "GuardDuty",
            "Trusted Advisor"
        ],
        correct: [0],
        explanation: "✅ Config Rules: avaliação contínua de compliance. 300+ managed rules (s3-bucket-public-read-prohibited, restricted-ssh). Custom rules via Lambda. Trigger: config change ou periodic. Remediation automática via SSM.",
        topic: "config-compliance",
        domain: "security"
    },
    {
        id: 'secdop_010',
        question: "Uma empresa quer uma visão centralizada de security findings de múltiplos serviços (GuardDuty, Inspector, Config, Macie) com scoring e priorização. Qual serviço?",
        options: [
            "CloudWatch Dashboard",
            "AWS Config Aggregator",
            "AWS Security Hub — agrega findings de múltiplos serviços, aplica standards (CIS, PCI-DSS), scoring por severidade, e integra com EventBridge para automação",
            "CloudTrail Lake"
        ],
        correct: [2],
        explanation: "✅ Security Hub: painel centralizado de segurança. Agrega findings (GuardDuty, Inspector, Config, Macie, Firewall Manager). Aplica standards (CIS Benchmarks, PCI-DSS). Security score. Integra com EventBridge para auto-remediation.",
        topic: "config-compliance",
        domain: "security"
    },
    {
        id: 'secdop_011',
        question: "Uma empresa quer que KMS keys sejam rotacionadas automaticamente sem impacto nas aplicações que usam a key. Como funciona?",
        options: [
            "Criar nova key e re-encrypt tudo",
            "Não é possível rotacionar",
            "Manual rotation com alias swap",
            "KMS Automatic Key Rotation — AWS gera novo key material anualmente. Key ID não muda. Dados antigos continuam decryptáveis com material anterior",
        ],
        correct: [3],
        explanation: "✅ Automatic rotation: novo backing key material a cada ano. Key ARN/ID não muda. Dados encriptados com material antigo continuam decryptáveis (AWS mantém todas as versões). Zero impacto na aplicação. Habilitado com um click.",
        topic: "kms",
        domain: "security"
    },
    {
        id: 'secdop_012',
        question: "Uma empresa quer que a pipeline só faça deploy se o código passou por aprovação de pelo menos 2 reviewers no PR. Como enforçar?",
        options: [
            "Confiar no processo manual",
            "Branch protection rules (required reviews) + CodePipeline com approval action que valida merge foi aprovado antes de prosseguir",
            "Post-deploy audit",
            "SCP blocking"
        ],
        correct: [1],
        explanation: "✅ Branch protection: requer N approvals antes de merge. CodePipeline approval action: gate manual ou automático. Combinação garante que código não aprovado não chega a produção. Audit trail completo no Git + pipeline.",
        topic: "pipeline-security",
        domain: "security"
    },
    {
        id: 'secdop_013',
        question: "Uma empresa quer implementar envelope encryption para criptografar dados grandes de forma eficiente. Como funciona com KMS?",
        options: [
            "KMS gera Data Key (plaintext + encrypted). App usa plaintext data key para encrypt dados localmente. Armazena encrypted data key junto com dados. Para decrypt: KMS decrypta data key → app decrypta dados",
            "Enviar todos os dados para KMS encrypt",
            "Usar S3 SSE apenas",
            "Client-side com chave fixa"
        ],
        correct: [0],
        explanation: "✅ Envelope encryption: KMS GenerateDataKey → plaintext key + encrypted key. App encrypta dados com plaintext key (rápido, local). Descarta plaintext key. Armazena encrypted key + encrypted data. Para decrypt: KMS Decrypt(encrypted key) → plaintext key → decrypt dados.",
        topic: "kms",
        domain: "security"
    },
    {
        id: 'secdop_014',
        question: "Uma empresa quer detectar secrets (API keys, passwords) que foram acidentalmente commitados no código-fonte. Qual integração no pipeline?",
        options: [
            "Grep manual",
            "Rotacionar secrets após deploy",
            "Secrets detection tools (git-secrets, truffleHog, ou CodeGuru Reviewer) integrados como pre-commit hook ou step no CI — bloqueia commit/build se secret detectado",
            "Encrypt o repositório"
        ],
        correct: [2],
        explanation: "✅ Secrets detection: pre-commit hooks (git-secrets) ou CI step (truffleHog, detect-secrets). Padrões regex para AWS keys, passwords, tokens. Bloqueia antes de chegar ao repo. Se já commitou: rotacionar imediatamente (secret está comprometido).",
        topic: "pipeline-security",
        domain: "security"
    },
    {
        id: 'secdop_015',
        question: "Uma empresa quer aplicar compliance standards (CIS AWS Foundations Benchmark) em todas as contas da Organization automaticamente. Como?",
        options: [
            "Verificar manualmente cada conta",
            "Trusted Advisor",
            "Config Rules individuais",
            "Security Hub com standards habilitados + delegated admin + auto-enable para novas contas. Findings agregados na conta central",
        ],
        correct: [3],
        explanation: "✅ Security Hub standards: CIS, PCI-DSS, AWS Foundational. Delegated admin na Organization. Auto-enable para novas contas. Findings centralizados. Security score por conta/standard. Integra com EventBridge para remediation.",
        topic: "config-compliance",
        domain: "security"
    },
    {
        id: 'secdop_016',
        question: "Uma Lambda function precisa acessar um secret no Secrets Manager. Qual é a forma mais segura de conceder acesso?",
        options: [
            "Hardcode o secret no código",
            "IAM execution role da Lambda com policy permitindo secretsmanager:GetSecretValue apenas para o ARN específico do secret necessário",
            "Environment variable com o valor do secret",
            "Parameter Store public parameter"
        ],
        correct: [1],
        explanation: "✅ Execution role com least privilege: permite GetSecretValue apenas no ARN do secret específico. Lambda busca em runtime. Sem hardcode, sem env vars com valores sensíveis. Rotation transparente. CloudTrail audita cada acesso.",
        topic: "secrets",
        domain: "security"
    },
    {
        id: 'secdop_017',
        question: "Uma empresa quer que todas as API calls em suas contas AWS sejam registradas para auditoria de segurança, incluindo data events (S3 object-level). Como?",
        options: [
            "CloudTrail Organization trail com data events habilitados — registra management + data events de todas as contas em bucket centralizado com integrity validation",
            "CloudWatch Logs",
            "VPC Flow Logs",
            "Config recording"
        ],
        correct: [0],
        explanation: "✅ Organization trail: uma trail para todas as contas. Management events (grátis 90 dias). Data events (S3 GetObject/PutObject, Lambda Invoke — custo adicional). Log file integrity validation. S3 bucket com lifecycle para retenção.",
        topic: "config-compliance",
        domain: "security"
    },
    {
        id: 'secdop_018',
        question: "Uma empresa quer que ECS tasks em Fargate acessem secrets sem expô-los como environment variables em plaintext. Como?",
        options: [
            "Env vars no task definition",
            "Montar volume com secret file",
            "Task definition com secrets referenciando Secrets Manager ou Parameter Store SecureString — ECS injeta o valor em runtime sem expor no task definition",
            "Sidecar container com secret"
        ],
        correct: [2],
        explanation: "✅ ECS secrets integration: task definition referencia ARN do secret (valueFrom). ECS resolve em runtime e injeta como env var no container. Secret não aparece no task definition (apenas ARN). Rotation: container pega novo valor no próximo start.",
        topic: "secrets",
        domain: "security"
    },
    {
        id: 'secdop_019',
        question: "Uma empresa quer impedir que developers criem IAM users com console access (forçar uso de SSO/federation). Como enforçar?",
        options: [
            "Política de empresa apenas",
            "IAM policy no grupo de devs",
            "Config Rule alertando",
            "SCP com Deny em iam:CreateLoginProfile e iam:CreateUser — nenhuma conta na OU pode criar IAM users com console password",
        ],
        correct: [3],
        explanation: "✅ SCP Deny: bloqueia ações em toda a OU. Deny CreateUser/CreateLoginProfile impede criação de IAM users. Força uso de IAM Identity Center (SSO) com federation. Preventivo (não apenas detectivo). Exceção: management account não é afetada por SCPs.",
        topic: "iam-advanced",
        domain: "security"
    },
    {
        id: 'secdop_020',
        question: "Uma empresa quer que recursos criados sem tags obrigatórias (Environment, Owner, Project) sejam detectados e reportados automaticamente. Como?",
        options: [
            "Script manual semanal",
            "AWS Config Rule (required-tags) — avalia se recursos possuem tags obrigatórias. Non-compliant se faltam. Pode remediar com SSM Automation que adiciona tags",
            "Billing alerts",
            "CloudFormation apenas"
        ],
        correct: [1],
        explanation: "✅ Config Rule required-tags: avalia continuamente. Non-compliant se tag ausente. Remediation: SSM Automation adiciona tags default. Complementar com SCP que bloqueia criação sem tags (preventivo + detectivo).",
        topic: "config-compliance",
        domain: "security"
    },
    {
        id: 'secdop_021',
        question: "Uma empresa quer que o pipeline de deploy falhe se a imagem Docker contém vulnerabilidades com CVSS score >= 7.0. Como implementar?",
        options: [
            "ECR Enhanced Scanning (Inspector) + EventBridge rule que verifica findings após push + CodePipeline Lambda action que bloqueia se CRITICAL/HIGH encontrados",
            "Scan manual antes de deploy",
            "Scan apenas em produção",
            "Confiar no base image"
        ],
        correct: [0],
        explanation: "✅ Enhanced scanning (Inspector): contínuo, detecta CVEs com CVSS score. EventBridge recebe findings. Lambda no pipeline consulta findings da imagem: se score >= 7.0, retorna failure. Pipeline para. Shift-left container security.",
        topic: "pipeline-security",
        domain: "security"
    },
    {
        id: 'secdop_022',
        question: "Uma empresa quer que dados em S3 usados para treinamento de ML sejam criptografados com chave que a empresa controla e pode revogar. Qual opção?",
        options: [
            "SSE-S3 (AWS managed)",
            "No encryption",
            "SSE-KMS com Customer Managed Key — empresa controla key policy, pode revogar acesso removendo permissão da key, audit via CloudTrail",
            "Client-side com chave em código"
        ],
        correct: [2],
        explanation: "✅ SSE-KMS com CMK: empresa controla quem usa a key (key policy). Pode revogar acesso a qualquer momento. Todas as operações logadas no CloudTrail. Rotation automática. Separação de duties: admin da key ≠ admin dos dados.",
        topic: "kms",
        domain: "security"
    },
    {
        id: 'secdop_023',
        question: "Uma empresa quer implementar 'compliance as code': definir regras de compliance como código versionado e aplicar automaticamente. Qual abordagem?",
        options: [
            "Documentação manual",
            "Security Hub apenas",
            "Audit manual trimestral",
            "Config Conformance Packs (YAML) + CloudFormation Guard (policy-as-code para templates) + SCPs versionados em Git — tudo como código no pipeline",
        ],
        correct: [3],
        explanation: "✅ Compliance as Code: Conformance Packs (Config Rules em YAML), CloudFormation Guard (valida templates), SCPs em Git com PR review. Deploy via pipeline. Versionado, testável, auditável. Shift-left compliance.",
        topic: "config-compliance",
        domain: "security"
    },
    {
        id: 'secdop_024',
        question: "Uma empresa quer que credenciais de database usadas por aplicações ECS sejam rotacionadas sem restart dos containers. Como?",
        options: [
            "Restart containers após rotação",
            "Secrets Manager com multi-user rotation strategy — alterna entre 2 users (user_A/user_B). App sempre busca AWSCURRENT. Rotação troca qual user é current sem invalidar conexões existentes",
            "Single user rotation com downtime",
            "Não rotacionar"
        ],
        correct: [1],
        explanation: "✅ Multi-user rotation: 2 DB users. Rotação cria nova password para user inativo, testa, swapa AWSCURRENT. Conexões existentes (user antigo) continuam funcionando. Novas conexões usam novo user. Zero downtime.",
        topic: "secrets",
        domain: "security"
    },
    {
        id: 'secdop_025',
        question: "Uma empresa quer auditar continuamente se suas contas AWS seguem o CIS AWS Foundations Benchmark e gerar relatórios para auditores. Qual serviço?",
        options: [
            "AWS Audit Manager — framework de auditoria que coleta evidências automaticamente de Config, CloudTrail, Security Hub e gera relatórios assessment-ready",
            "Manual checklist",
            "Config Rules apenas",
            "Trusted Advisor"
        ],
        correct: [0],
        explanation: "✅ Audit Manager: frameworks pré-built (CIS, PCI, SOC2, GDPR). Coleta evidências automaticamente (Config compliance, CloudTrail logs, Security Hub findings). Gera assessment reports para auditores. Reduz esforço manual de auditoria.",
        topic: "config-compliance",
        domain: "security"
    },
    {
        id: 'secdop_026',
        question: "Uma empresa quer que apenas imagens Docker assinadas possam ser deployadas no ECS/EKS. Como enforçar?",
        options: [
            "Confiar no registry",
            "Scan apenas",
            "Docker Content Trust / AWS Signer para container images + admission controller (EKS) ou task definition validation que verifica assinatura antes de run",
            "Tag policy"
        ],
        correct: [2],
        explanation: "✅ Image signing: AWS Signer assina imagem após scan passar. EKS admission controller (ou Lambda validation para ECS) verifica assinatura antes de permitir deploy. Supply chain security: garante que imagem não foi adulterada.",
        topic: "pipeline-security",
        domain: "security"
    },
    {
        id: 'secdop_027',
        question: "Uma empresa quer que IAM policies sigam least privilege mas não sabe quais permissões cada aplicação realmente usa. Como descobrir?",
        options: [
            "Dar AdministratorAccess e esperar",
            "Usar managed policies",
            "Perguntar aos developers",
            "IAM Access Analyzer policy generation — analisa CloudTrail logs (90 dias) e gera policy com apenas as ações que foram realmente usadas",
        ],
        correct: [3],
        explanation: "✅ Access Analyzer policy generation: analisa CloudTrail (até 90 dias), identifica quais ações/recursos foram acessados, gera IAM policy com apenas essas permissões. Least privilege baseado em uso real. Refine iterativamente.",
        topic: "iam-advanced",
        domain: "security"
    },
    {
        id: 'secdop_028',
        question: "Uma empresa quer que quando um secret é acessado por um principal não autorizado, um alerta seja gerado imediatamente. Como?",
        options: [
            "Revisar logs semanalmente",
            "CloudTrail registra GetSecretValue + EventBridge rule filtra por principal não autorizado + SNS alert. Ou GuardDuty detecta anomalias de acesso",
            "Secrets Manager notification",
            "Config Rule"
        ],
        correct: [1],
        explanation: "✅ CloudTrail loga toda chamada GetSecretValue (quem, quando, qual secret). EventBridge rule: filtra por userIdentity não esperado. Alerta imediato. GuardDuty: detecta padrões anômalos (acesso de IP incomum, horário atípico).",
        topic: "secrets",
        domain: "security"
    },
    {
        id: 'secdop_029',
        question: "Uma empresa quer prevenir que dados sensíveis (PII) sejam acidentalmente armazenados em S3 buckets de desenvolvimento. Qual serviço?",
        options: [
            "Amazon Macie — usa ML para descobrir, classificar e proteger dados sensíveis (PII, financial data) em S3. Alerta quando PII encontrado em buckets não autorizados",
            "Política de empresa",
            "S3 encryption apenas",
            "IAM policy"
        ],
        correct: [0],
        explanation: "✅ Macie: scanneia S3 buckets automaticamente. Detecta PII (CPF, cartão de crédito, emails), dados financeiros, credentials. Findings com severidade. Integra com EventBridge para auto-remediation (mover, deletar, alertar).",
        topic: "config-compliance",
        domain: "security"
    },
    {
        id: 'secdop_030',
        question: "Uma empresa quer que o CodePipeline só execute deploy se testes de segurança (SAST + DAST + image scan) passaram. Como estruturar?",
        options: [
            "Testes opcionais",
            "Testes apenas em produção",
            "Pipeline com stages sequenciais: Build → SAST (CodeGuru) → Image Scan (ECR/Inspector) → Deploy Staging → DAST (OWASP ZAP) → Approval → Deploy Prod",
            "Scan semanal separado"
        ],
        correct: [2],
        explanation: "✅ Security gates no pipeline: SAST (código estático, build time) → Image Scan (vulnerabilidades em containers) → DAST (teste dinâmico em staging, runtime). Cada gate pode bloquear pipeline. Shift-left + defense in depth.",
        topic: "pipeline-security",
        domain: "security"
    },
    {
        id: 'secdop_031',
        question: "Uma empresa quer que recursos non-compliant sejam IMPEDIDOS de serem criados (preventivo), não apenas detectados depois. Qual combinação?",
        options: [
            "Config Rules apenas (detectivo)",
            "GuardDuty",
            "Security Hub",
            "SCPs (bloqueiam API calls) + CloudFormation Guard (valida templates antes de deploy) + Config Rules proactive mode (avalia antes de provisionar)",
        ],
        correct: [3],
        explanation: "✅ Preventivo > Detectivo. SCPs: bloqueiam na API level. CloudFormation Guard: valida template antes de criar stack. Config proactive: avalia compliance antes de provisionar recurso. Três camadas preventivas complementares.",
        topic: "config-compliance",
        domain: "security"
    },
    {
        id: 'secdop_032',
        question: "Uma empresa quer que todas as contas na Organization tenham GuardDuty habilitado automaticamente, incluindo novas contas. Como?",
        options: [
            "Habilitar manualmente em cada conta",
            "GuardDuty com delegated administrator + auto-enable para novos membros da Organization. Findings centralizados na conta admin",
            "CloudFormation StackSet",
            "Lambda trigger"
        ],
        correct: [1],
        explanation: "✅ GuardDuty Organization: delegated admin habilita para todas as contas existentes + auto-enable para novas. Findings centralizados. Detecta: compromised instances, reconnaissance, credential exfiltration. Sem agente.",
        topic: "config-compliance",
        domain: "security"
    },
    {
        id: 'secdop_033',
        question: "Uma empresa quer que a KMS key policy permita que apenas o serviço S3 use a key para encryption, e apenas de um bucket específico. Como?",
        options: [
            "Key policy com condition: kms:ViaService = s3.region.amazonaws.com + kms:EncryptionContext com bucket ARN — restringe uso da key ao S3 e bucket específico",
            "Key policy com Allow para todos",
            "IAM policy apenas",
            "Bucket policy apenas"
        ],
        correct: [0],
        explanation: "✅ Key policy conditions: kms:ViaService restringe a qual serviço pode usar a key. EncryptionContext restringe a qual recurso. Defense in depth: mesmo que alguém tenha kms:Encrypt permission, só funciona via S3 para aquele bucket.",
        topic: "kms",
        domain: "security"
    },
    {
        id: 'secdop_034',
        question: "Uma empresa quer detectar quando IAM policies concedem acesso público ou cross-account não intencional a recursos (S3, SQS, Lambda). Qual serviço?",
        options: [
            "Manual review de policies",
            "Config Rules",
            "IAM Access Analyzer — analisa resource-based policies e identifica recursos acessíveis por principals externos à conta/Organization. Findings para cada acesso externo",
            "Trusted Advisor"
        ],
        correct: [2],
        explanation: "✅ Access Analyzer: analisa policies de S3, SQS, Lambda, KMS, IAM roles. Identifica acesso externo (outra conta, público). Zone of trust = conta ou Organization. Finding para cada recurso acessível externamente. Integra com Security Hub.",
        topic: "iam-advanced",
        domain: "security"
    },
    {
        id: 'secdop_035',
        question: "Uma empresa quer que CloudFormation templates sejam validados contra políticas de segurança ANTES de serem deployados. Qual ferramenta?",
        options: [
            "cfn-lint apenas (syntax)",
            "Manual review",
            "Config Rules após deploy",
            "CloudFormation Guard — policy-as-code que valida templates contra regras customizáveis (ex: S3 deve ter encryption, SG não pode ter 0.0.0.0/0). Integra no CI",
        ],
        correct: [3],
        explanation: "✅ CloudFormation Guard: DSL para escrever regras (when Type == 'AWS::S3::Bucket' { Properties.BucketEncryption exists }). Valida template ANTES do deploy. CI step: cfn-guard validate. Falha = pipeline para. Preventivo.",
        topic: "pipeline-security",
        domain: "security"
    },
    {
        id: 'secdop_036',
        question: "Uma empresa quer centralizar a gestão de firewall rules (WAF, Security Groups, Network Firewall) em todas as contas da Organization. Qual serviço?",
        options: [
            "Gerenciar em cada conta",
            "AWS Firewall Manager — políticas centralizadas de WAF, SG, Network Firewall, Route 53 Resolver DNS Firewall aplicadas automaticamente em todas as contas/VPCs da Organization",
            "CloudFormation StackSets",
            "Security Hub"
        ],
        correct: [1],
        explanation: "✅ Firewall Manager: políticas centralizadas. WAF rules em todos os ALBs/CloudFronts. SG policies em todas as VPCs. Auto-apply em novos recursos/contas. Compliance dashboard. Prerequisite: AWS Organizations + Config habilitado.",
        topic: "config-compliance",
        domain: "security"
    },
    {
        id: 'secdop_037',
        question: "Uma empresa quer que o pipeline de CI/CD tenha permissões mínimas em cada stage (build só acessa CodeCommit/S3, deploy só acessa CloudFormation/target account). Como?",
        options: [
            "IAM roles separadas por stage: CodeBuild role (acesso a repo + artifacts S3), Deploy role (acesso a CloudFormation + target resources). Cada stage assume apenas sua role",
            "Uma role com todas as permissões",
            "Admin role para pipeline",
            "Service-linked roles"
        ],
        correct: [0],
        explanation: "✅ Least privilege por stage: Build role (pull code, push artifacts). Test role (invoke tests, read artifacts). Deploy role (CloudFormation, target resources). Se build comprometido, não tem acesso a produção. Blast radius reduzido.",
        topic: "pipeline-security",
        domain: "security"
    }
];

window.securityDopQuestions = securityDopQuestions;
