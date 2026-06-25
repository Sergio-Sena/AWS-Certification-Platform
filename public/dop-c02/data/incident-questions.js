// DOP-C02 Domain 5: Incident & Event Response (32 questões - 14%)
// Tópicos: EventBridge → Lambda/SSM auto-remediation, SSM Automation runbooks, OpsCenter, Incident Manager, Config Rules + SSM, ChatOps

const incidentQuestions = [
    {
        id: 'inc_001',
        question: "Uma empresa quer remediar automaticamente Security Groups que são abertos para 0.0.0.0/0 (porta 22). Qual padrão de auto-remediation?",
        options: [
            "AWS Config Rule (restricted-ssh) + SSM Automation remediation action que remove a regra de ingress automaticamente quando non-compliant",
            "Notificar e esperar ação manual",
            "Lambda scheduled scan",
            "GuardDuty apenas"
        ],
        correct: [0],
        explanation: "✅ Config Rule detecta non-compliance → trigger SSM Automation document (AWS-DisablePublicAccessForSecurityGroup). Remediação automática ou com aprovação. Compliance contínua. Audit trail completo.",
        topic: "auto-remediation",
        domain: "incident"
    },
    {
        id: 'inc_002',
        question: "Uma instância EC2 está com CPU 100% por mais de 10 minutos. A equipe quer auto-remediation (restart automático). Qual orquestração?",
        options: [
            "SSH e restart manual",
            "Auto Scaling terminate",
            "CloudWatch Alarm → EC2 Action (Reboot) OU CloudWatch Alarm → EventBridge → SSM Automation runbook (AWS-RestartEC2Instance)",
            "Lambda restart"
        ],
        correct: [2],
        explanation: "✅ CloudWatch Alarm EC2 Actions: reboot, stop, terminate, recover. Para lógica mais complexa: Alarm → EventBridge → SSM Automation (pode incluir diagnostics antes do restart, notification após). Logging automático.",
        topic: "auto-remediation",
        domain: "incident"
    },
    {
        id: 'inc_003',
        question: "Uma empresa quer centralizar operational issues (alarmes, Config non-compliance, manual tickets) em um único lugar para triagem. Qual serviço?",
        options: [
            "Jira",
            "SNS topics",
            "ServiceNow",
            "AWS Systems Manager OpsCenter — OpsItems agregam issues de múltiplas fontes com runbooks associados para resolução, métricas e timeline",
        ],
        correct: [3],
        explanation: "✅ OpsCenter: OpsItems criados automaticamente (CloudWatch Alarms, Config, EventBridge) ou manualmente. Cada OpsItem tem: descrição, recursos relacionados, runbooks sugeridos, timeline. Priorização e tracking centralizado.",
        topic: "opscenter",
        domain: "incident"
    },
    {
        id: 'inc_004',
        question: "Uma empresa precisa de um processo formal de incident management com escalation, engagement plans e post-incident analysis. Qual serviço AWS?",
        options: [
            "OpsCenter apenas",
            "AWS Systems Manager Incident Manager — response plans com escalation, engagement (pager), runbooks automáticos, timeline e post-incident analysis",
            "PagerDuty",
            "SNS + Lambda"
        ],
        correct: [1],
        explanation: "✅ Incident Manager: response plans definem escalation (contacts, rotation), engagement (SMS, voice, email), runbooks (SSM Automation). Incident timeline automática. Post-incident analysis com action items. Integra com OpsCenter.",
        topic: "incident-manager",
        domain: "incident"
    },
    {
        id: 'inc_005',
        question: "Uma equipe quer receber alertas e executar runbooks diretamente no Slack quando incidentes ocorrem. Qual serviço AWS?",
        options: [
            "AWS Chatbot — integra com Slack/Teams para receber notificações (SNS, EventBridge) e executar comandos AWS CLI diretamente do chat",
            "Lambda + Slack webhook",
            "Custom bot",
            "Email apenas"
        ],
        correct: [0],
        explanation: "✅ AWS Chatbot: canal Slack/Teams recebe alertas (CloudWatch, Security Hub, Budgets via SNS). Pode executar comandos AWS CLI no chat (read-only ou com guardrails). ChatOps: visibilidade + ação sem sair do chat.",
        topic: "chatops",
        domain: "incident"
    },
    {
        id: 'inc_006',
        question: "Uma empresa quer que S3 buckets sem encryption sejam automaticamente corrigidos (encryption habilitada). Qual padrão?",
        options: [
            "Audit manual mensal",
            "Lambda scheduled",
            "Config Rule (s3-bucket-server-side-encryption-enabled) + auto-remediation via SSM Automation (AWS-EnableS3BucketEncryption)",
            "SCP block unencrypted"
        ],
        correct: [2],
        explanation: "✅ Config Rule: avalia continuamente. Non-compliant → auto-remediation (SSM doc habilita encryption). Pode ser automática ou com aprovação. Complementar com SCP para prevenir (defense in depth). Config = detect + remediate.",
        topic: "auto-remediation",
        domain: "incident"
    },
    {
        id: 'inc_007',
        question: "Um SSM Automation runbook precisa executar ações em sequência: diagnosticar → aprovar → remediar → notificar. Como estruturar?",
        options: [
            "Lambda com steps",
            "EventBridge chain",
            "Step Functions",
            "Automation document com steps: aws:executeScript (diagnóstico) → aws:approve (aprovação humana) → aws:executeAwsApi (remediation) → aws:executeAwsApi (SNS publish)",
        ],
        correct: [3],
        explanation: "✅ Automation steps: aws:executeScript (Python/PowerShell), aws:approve (human gate), aws:executeAwsApi (AWS API call), aws:sleep, aws:branch (conditional). Sequenciais com outputs passados entre steps. Logging automático.",
        topic: "ssm-automation",
        domain: "incident"
    },
    {
        id: 'inc_008',
        question: "Uma empresa quer que quando um EBS volume não está encrypted, seja automaticamente criado um snapshot encrypted e o volume substituído. Qual orquestração?",
        options: [
            "Manual replacement",
            "Config Rule (encrypted-volumes) → EventBridge (non-compliant) → Lambda/SSM Automation: snapshot → copy encrypted → create volume → swap → delete old",
            "KMS policy",
            "EBS default encryption apenas"
        ],
        correct: [1],
        explanation: "✅ Auto-remediation complexa: Config detecta → SSM Automation orquestra multi-step (stop instance se necessário, snapshot, encrypted copy, create volume, attach, start). Custom runbook para lógica específica. EBS default encryption previne novos.",
        topic: "auto-remediation",
        domain: "incident"
    },
    {
        id: 'inc_009',
        question: "Uma empresa quer escalar automaticamente um incidente se não for acknowledged em 5 minutos. Como configurar?",
        options: [
            "Incident Manager Escalation Plan — define contacts em stages com timeout. Se stage 1 não responde em X minutos, escala para stage 2 automaticamente",
            "Timer manual",
            "SNS com delay",
            "Lambda scheduler"
        ],
        correct: [0],
        explanation: "✅ Escalation Plan: stages com contacts e timeout. Stage 1: on-call engineer (5 min). Stage 2: team lead (10 min). Stage 3: VP Engineering. Engagement via SMS, voice call, email. Acknowledge para parar escalation.",
        topic: "incident-manager",
        domain: "incident"
    },
    {
        id: 'inc_010',
        question: "Uma empresa quer detectar e remediar automaticamente IAM Access Keys que não são rotacionadas há mais de 90 dias. Qual padrão?",
        options: [
            "Audit manual",
            "IAM policy expiration",
            "Config Rule (access-keys-rotated, maxAccessKeyAge: 90) + auto-remediation: SSM Automation que desativa key antiga e notifica usuário para criar nova",
            "CloudTrail alert"
        ],
        correct: [2],
        explanation: "✅ Config Rule access-keys-rotated: avalia idade das keys. Non-compliant após 90 dias. Remediation: desativa key (não deleta — pode quebrar aplicação). Notifica owner via SNS. Pode criar nova key e armazenar em Secrets Manager.",
        topic: "auto-remediation",
        domain: "incident"
    },
    {
        id: 'inc_011',
        question: "Uma equipe quer que OpsItems sejam criados automaticamente quando CloudWatch Alarms entram em ALARM state. Como?",
        options: [
            "Criar manualmente",
            "SNS → OpsCenter",
            "Lambda intermediária",
            "CloudWatch Alarm → Systems Manager action (criar OpsItem) OU EventBridge rule para CloudWatch Alarm state change → OpsCenter como target",
        ],
        correct: [3],
        explanation: "✅ OpsCenter integração: CloudWatch Alarm com SSM OpsCenter action cria OpsItem automaticamente. Ou EventBridge rule (source: aws.cloudwatch, detail-type: CloudWatch Alarm State Change) → target: SSM OpsCenter. Inclui alarm details.",
        topic: "opscenter",
        domain: "incident"
    },
    {
        id: 'inc_012',
        question: "Uma empresa quer executar um runbook de diagnóstico automaticamente quando um incidente é criado no Incident Manager. Como?",
        options: [
            "Executar manualmente após incidente",
            "Response Plan com SSM Automation runbook associado — quando incidente é criado, runbook executa automaticamente (coleta logs, métricas, estado dos recursos)",
            "EventBridge → Lambda",
            "OpsCenter runbook"
        ],
        correct: [1],
        explanation: "✅ Response Plan: define runbook (SSM Automation) que executa ao criar incidente. Runbook coleta diagnósticos automaticamente (logs, metrics, resource state). Responders já têm informações quando engajados. Reduz MTTR.",
        topic: "incident-manager",
        domain: "incident"
    },
    {
        id: 'inc_013',
        question: "Uma empresa quer que instâncias EC2 que falham health check sejam automaticamente isoladas (removidas do ALB) e um snapshot seja criado para análise forense. Qual automação?",
        options: [
            "EventBridge (EC2 health check failed) → SSM Automation: deregister from target group → create snapshot → change SG to isolate → notify security team",
            "Manual isolation",
            "ASG terminate apenas",
            "CloudWatch Alarm → reboot"
        ],
        correct: [0],
        explanation: "✅ Forensic automation: preserva evidência antes de remediar. Isolate (SG restritivo), snapshot (preserva disco), deregister (remove do tráfego). Não terminar — manter para investigação. SSM Automation orquestra todos os steps.",
        topic: "auto-remediation",
        domain: "incident"
    },
    {
        id: 'inc_014',
        question: "Uma empresa quer implementar auto-remediation mas com aprovação humana para recursos de produção e automática para dev. Como?",
        options: [
            "Regras separadas por ambiente",
            "Dois runbooks diferentes",
            "SSM Automation runbook com aws:branch step que verifica tag 'Environment' — se prod: aws:approve (human gate), se dev: prossegue automaticamente",
            "Config Rule por conta"
        ],
        correct: [2],
        explanation: "✅ aws:branch: conditional logic no runbook. Verifica tag/parameter. Prod → approval step (SNS notification, aguarda approve/deny). Dev → executa direto. Um runbook, comportamento diferente por ambiente. Audit trail para ambos.",
        topic: "ssm-automation",
        domain: "incident"
    },
    {
        id: 'inc_015',
        question: "Uma empresa quer rastrear todas as ações tomadas durante um incidente (quem fez o quê, quando) para post-mortem. Qual feature?",
        options: [
            "Notas manuais",
            "Chat logs",
            "CloudTrail",
            "Incident Manager Timeline — registra automaticamente eventos (alarm triggered, responder engaged, runbook executed, actions taken) com timestamps",
        ],
        correct: [3],
        explanation: "✅ Timeline: registro automático de todos os eventos do incidente. Entries automáticas (alarm, engagement, runbook) + manuais (responder adiciona notas). Post-incident analysis usa timeline para identificar melhorias. Audit completo.",
        topic: "incident-manager",
        domain: "incident"
    },
    {
        id: 'inc_016',
        question: "Uma empresa quer que quando GuardDuty detecta uma instância EC2 comunicando com IP malicioso, a instância seja automaticamente isolada. Qual automação?",
        options: [
            "Verificar manualmente",
            "EventBridge rule (GuardDuty finding type: UnauthorizedAccess:EC2/MaliciousIPCaller) → Lambda/SSM Automation: apply restrictive SG + create snapshot + notify",
            "NACL block",
            "Terminate instância"
        ],
        correct: [1],
        explanation: "✅ GuardDuty → EventBridge → auto-remediation. Isolate: SG que bloqueia todo tráfego exceto forensics. Snapshot para análise. Não terminar (preservar evidência). Notify security team. Pode adicionar approval para prod.",
        topic: "auto-remediation",
        domain: "incident"
    },
    {
        id: 'inc_017',
        question: "Uma equipe quer que o Chatbot no Slack permita executar apenas comandos read-only (describe, list) mas não comandos destrutivos. Como?",
        options: [
            "AWS Chatbot Channel Guardrails — IAM policy que restringe quais ações podem ser executadas via chat. Permite read-only, bloqueia mutating actions",
            "Confiar nos usuários",
            "Slack permissions",
            "Custom bot com whitelist"
        ],
        correct: [0],
        explanation: "✅ Chatbot Guardrails: IAM policy attached ao channel configuration. Define allowed actions (ec2:Describe*, rds:Describe*). Bloqueia tudo que não está permitido. Princípio de least privilege no ChatOps. Audit via CloudTrail.",
        topic: "chatops",
        domain: "incident"
    },
    {
        id: 'inc_018',
        question: "Uma empresa quer implementar conformance packs (conjunto de Config Rules) para compliance frameworks (PCI-DSS, HIPAA). Como?",
        options: [
            "Criar rules uma a uma",
            "Security Hub apenas",
            "AWS Config Conformance Packs — template YAML com múltiplas Config Rules + remediations. Deploy via Organizations para todas as contas",
            "Custom Lambda rules"
        ],
        correct: [2],
        explanation: "✅ Conformance Packs: bundle de Config Rules + remediations em YAML. AWS fornece sample packs (PCI, HIPAA, CIS). Deploy via Organizations (delegated admin). Compliance score por pack. Custom packs para políticas internas.",
        topic: "auto-remediation",
        domain: "incident"
    },
    {
        id: 'inc_019',
        question: "Uma empresa quer que quando um RDS instance é deletado sem final snapshot, um alerta crítico seja enviado e o evento seja registrado. Qual detecção?",
        options: [
            "CloudWatch Metrics",
            "RDS Event Subscription",
            "Config Rule",
            "EventBridge rule com event pattern para RDS API call (DeleteDBInstance com SkipFinalSnapshot=true) via CloudTrail integration → SNS critical alert",
        ],
        correct: [3],
        explanation: "✅ CloudTrail registra API call. EventBridge rule: source aws.rds, detail-type 'AWS API Call via CloudTrail', detail.eventName = DeleteDBInstance. Verifica requestParameters.skipFinalSnapshot. Near real-time detection.",
        topic: "auto-remediation",
        domain: "incident"
    },
    {
        id: 'inc_020',
        question: "Uma empresa quer definir on-call rotations para incident response (diferentes engenheiros por semana). Qual feature?",
        options: [
            "Spreadsheet manual",
            "Incident Manager Rotation — define contacts em rotation schedule (daily, weekly, monthly). Engagement plan usa rotation como contact, engaja quem está on-call",
            "PagerDuty",
            "Lambda scheduler"
        ],
        correct: [1],
        explanation: "✅ Rotations: define schedule (ex: weekly rotation entre 5 engineers). Engagement plan referencia rotation. Quando incidente ocorre, engaja quem está on-call naquele momento. Overrides para férias/ausências. Nativo AWS.",
        topic: "incident-manager",
        domain: "incident"
    },
    {
        id: 'inc_021',
        question: "Uma empresa quer remediar automaticamente EC2 instances que não têm o SSM Agent respondendo (managed instance não reporta). Qual abordagem?",
        options: [
            "EventBridge rule (SSM connection status change to 'ConnectionLost') → SSM Automation: restart agent via EC2 API (SendCommand fallback) ou reboot instance",
            "SSH e reinstalar",
            "Terminate e recriar",
            "CloudWatch Alarm"
        ],
        correct: [0],
        explanation: "✅ SSM emite eventos de connection status. ConnectionLost → automação tenta: 1) EC2 reboot (se agent crashed), 2) Se não resolver, terminate (ASG recria). Lifecycle hook pode reinstalar agent. Garante fleet sempre gerenciável.",
        topic: "auto-remediation",
        domain: "incident"
    },
    {
        id: 'inc_022',
        question: "Uma empresa quer que após resolver um incidente, action items sejam criados automaticamente para prevenir recorrência. Qual feature?",
        options: [
            "Reunião post-mortem apenas",
            "Jira tickets manuais",
            "Incident Manager Post-Incident Analysis — template estruturado com questions, timeline review, action items que viram OpsItems para tracking",
            "Wiki page"
        ],
        correct: [2],
        explanation: "✅ Post-Incident Analysis: template com perguntas (what happened, impact, timeline, root cause, action items). Action items viram OpsItems no OpsCenter para tracking. Métricas de incidents over time. Cultura de melhoria contínua.",
        topic: "incident-manager",
        domain: "incident"
    },
    {
        id: 'inc_023',
        question: "Uma empresa quer detectar e alertar quando alguém faz login no console AWS root account. Qual automação?",
        options: [
            "CloudTrail log review semanal",
            "IAM Access Analyzer",
            "GuardDuty",
            "EventBridge rule: detail-type 'AWS Console Sign In via CloudTrail', detail.userIdentity.type = 'Root' → SNS critical alert + OpsItem creation",
        ],
        correct: [3],
        explanation: "✅ Root login detection: CloudTrail registra ConsoleLogin. EventBridge rule filtra Root user. Alerta imediato (SNS → email/SMS/Chatbot). Cria OpsItem para investigação. Root deve ser usado apenas em emergências. MFA obrigatório.",
        topic: "auto-remediation",
        domain: "incident"
    },
    {
        id: 'inc_024',
        question: "Uma empresa quer que SSM Automation runbooks possam ser compartilhados entre todas as contas da Organization. Como?",
        options: [
            "Copiar documento em cada conta",
            "SSM Document sharing via Organizations — compartilha documento com toda a Organization ou contas específicas. Execução cross-account via Automation",
            "S3 bucket com templates",
            "CodeCommit shared repo"
        ],
        correct: [1],
        explanation: "✅ SSM Document sharing: share com Organization, OU, ou contas específicas. Conta central mantém runbooks. Contas member executam documentos compartilhados. Versionamento centralizado. Automation cross-account para execução.",
        topic: "ssm-automation",
        domain: "incident"
    },
    {
        id: 'inc_025',
        question: "Uma empresa quer que quando um CloudFormation stack falha (CREATE_FAILED/UPDATE_ROLLBACK_COMPLETE), um OpsItem seja criado com detalhes do erro. Como?",
        options: [
            "EventBridge rule (source: aws.cloudformation, detail.status-details.status: CREATE_FAILED) → target: SSM OpsCenter (create OpsItem com stack details)",
            "Verificar console manualmente",
            "CloudWatch Alarm",
            "SNS apenas"
        ],
        correct: [0],
        explanation: "✅ CloudFormation emite eventos para EventBridge em state changes. Rule filtra status de falha. OpsItem criado com: stack name, error reason, resources affected. Equipe investiga via OpsCenter com runbooks sugeridos.",
        topic: "opscenter",
        domain: "incident"
    },
    {
        id: 'inc_026',
        question: "Uma empresa quer implementar 'break glass' procedure: em emergência, conceder acesso admin temporário com audit trail completo. Como?",
        options: [
            "Compartilhar root credentials",
            "IAM user com MFA",
            "SSM Automation runbook com aws:approve → assume role com elevated permissions (time-limited via session policy) → CloudTrail audit → auto-revoke após timeout",
            "AWS SSO temporary elevation"
        ],
        correct: [2],
        explanation: "✅ Break glass: runbook com approval (multiple approvers). Concede temporary elevated access (STS assume role com session duration). Todas ações auditadas via CloudTrail. Auto-revoke após período. OpsItem para tracking. Compliance evidence.",
        topic: "ssm-automation",
        domain: "incident"
    },
    {
        id: 'inc_027',
        question: "Uma empresa quer que Config Rules avaliem compliance não apenas de recursos individuais mas de combinações (ex: EC2 deve ter encryption E estar em VPC privada). Como?",
        options: [
            "Múltiplas rules separadas",
            "Security Hub",
            "Conformance Pack",
            "Custom Config Rule (Lambda) que avalia múltiplas condições do recurso em uma única avaliação — lógica complexa no código Lambda",
        ],
        correct: [3],
        explanation: "✅ Custom Config Rule: Lambda recebe configuration item, avalia qualquer lógica (múltiplas condições, cross-resource checks). Retorna COMPLIANT/NON_COMPLIANT. Mais flexível que managed rules. Pode verificar combinações complexas.",
        topic: "auto-remediation",
        domain: "incident"
    },
    {
        id: 'inc_028',
        question: "Uma empresa quer que durante um incidente, o runbook colete automaticamente logs relevantes dos últimos 30 minutos e os anexe ao incidente. Como?",
        options: [
            "Buscar logs manualmente",
            "SSM Automation step aws:executeScript (Python) que usa CloudWatch Logs Insights query para coletar logs relevantes e salva em S3 com link no OpsItem/Incident",
            "CloudWatch Dashboard",
            "X-Ray trace"
        ],
        correct: [1],
        explanation: "✅ Automation aws:executeScript: Python/PowerShell com boto3. StartQuery no Logs Insights (últimos 30 min, filtro por error). GetQueryResults. Salva em S3. Adiciona link ao incident/OpsItem. Responders têm contexto imediato.",
        topic: "ssm-automation",
        domain: "incident"
    },
    {
        id: 'inc_029',
        question: "Uma empresa quer prevenir que recursos non-compliant sejam criados (preventivo) ao invés de apenas detectar e remediar (reativo). Qual abordagem?",
        options: [
            "Service Control Policies (SCPs) + CloudFormation Guard + Config Rules proactive mode — previne antes de criar, não apenas detecta depois",
            "Config Rules apenas",
            "IAM policies",
            "Trusted Advisor"
        ],
        correct: [0],
        explanation: "✅ Defense in depth: SCPs (bloqueiam API calls na Organization), CloudFormation Guard (valida templates antes de deploy), Config Rules proactive (avalia compliance antes de provisionar). Preventivo > Reativo. Shift-left compliance.",
        topic: "auto-remediation",
        domain: "incident"
    },
    {
        id: 'inc_030',
        question: "Uma empresa quer que quando múltiplos alarmes relacionados disparam simultaneamente (indicando incidente maior), apenas UM incidente seja criado. Como?",
        options: [
            "Deduplicação manual",
            "SNS filter",
            "Composite Alarm que agrupa alarmes relacionados → Incident Manager response plan. Um composite alarm = um incidente, não múltiplos incidentes por alarme individual",
            "Lambda dedup"
        ],
        correct: [2],
        explanation: "✅ Composite Alarm: agrupa child alarms (CPU + Memory + Disk = Infrastructure Issue). Response plan triggered pelo composite, não pelos individuais. Evita alert fatigue e múltiplos incidentes para o mesmo problema.",
        topic: "incident-manager",
        domain: "incident"
    },
    {
        id: 'inc_031',
        question: "Uma empresa quer medir MTTR (Mean Time To Resolution) de incidentes e identificar tendências. Qual feature?",
        options: [
            "Spreadsheet tracking",
            "Jira reports",
            "Custom CloudWatch metric",
            "Incident Manager metrics — automaticamente calcula MTTR, MTTA (time to acknowledge), número de incidentes por período. CloudWatch metrics para dashboards",
        ],
        correct: [3],
        explanation: "✅ Incident Manager publica métricas: time to resolve, time to acknowledge, incidents count. CloudWatch dashboard para trends. Post-incident analysis identifica melhorias. Meta: reduzir MTTR continuamente. Baseline → improve → measure.",
        topic: "incident-manager",
        domain: "incident"
    },
    {
        id: 'inc_032',
        question: "Uma empresa quer que quando um deployment no CodePipeline falha, automaticamente crie um incidente com contexto do deployment (commit, stage, error). Como?",
        options: [
            "Notificação email apenas",
            "EventBridge rule (CodePipeline execution state change: FAILED) → Incident Manager (create incident via response plan) com input transformer incluindo pipeline/stage/error details",
            "CloudWatch Alarm",
            "SNS → OpsCenter"
        ],
        correct: [1],
        explanation: "✅ CodePipeline emite eventos para EventBridge. Rule filtra FAILED state. Input transformer extrai: pipeline name, failed stage, execution ID. Incident Manager cria incidente com contexto. Runbook pode iniciar rollback automático.",
        topic: "incident-manager",
        domain: "incident"
    }
];

window.incidentQuestions = incidentQuestions;
