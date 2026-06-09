// DOP-C02 Domain 2: Configuration Management & IaC (38 questões - 17%)
// Tópicos: CloudFormation, CDK, Systems Manager, SSM, Parameter Store, OpsWorks, immutable infra

const configIacQuestions = [
    {
        id: 'cfg_001',
        question: "Uma equipe quer fazer preview das mudanças antes de atualizar um CloudFormation stack em produção. Como?",
        options: [
            "Atualizar direto e verificar depois",
            "Criar Change Set — mostra quais recursos serão adicionados, modificados ou deletados antes de executar",
            "Usar drift detection",
            "Criar novo stack"
        ],
        correct: [1],
        explanation: "Change Sets: preview de mudanças sem executar. Mostra: Add, Modify, Remove, Replace (recurso recriado). Permite review antes de aplicar. Essencial para produção.",
        topic: "cloudformation",
        domain: "config-iac"
    },
    {
        id: 'cfg_002',
        question: "Um CloudFormation stack falha durante update com 'UPDATE_ROLLBACK_FAILED'. O que fazer?",
        options: [
            "Deletar o stack e recriar",
            "Usar ContinueUpdateRollback com resources to skip — pula recursos que não conseguem reverter",
            "Esperar resolver sozinho",
            "Criar ticket AWS Support"
        ],
        correct: [1],
        explanation: "UPDATE_ROLLBACK_FAILED: rollback automático falhou (recurso foi modificado fora do CloudFormation). ContinueUpdateRollback com skip permite completar rollback ignorando recursos problemáticos.",
        topic: "cloudformation",
        domain: "config-iac"
    },
    {
        id: 'cfg_003',
        question: "Uma empresa precisa deployar o mesmo stack CloudFormation em 20 contas AWS e 5 regiões. Como automatizar?",
        options: [
            "Deploy manual em cada conta",
            "CloudFormation StackSets com deployment targets (OUs) + auto-deployment para novas contas",
            "20 pipelines separados",
            "Terraform apenas"
        ],
        correct: [1],
        explanation: "StackSets: deploy multi-account/multi-region a partir de uma conta admin. Targets por OU. Auto-deployment: novas contas na OU recebem stack automaticamente. Gerenciamento centralizado.",
        topic: "cloudformation",
        domain: "config-iac"
    },
    {
        id: 'cfg_004',
        question: "Alguém modificou um Security Group manualmente no console que foi criado por CloudFormation. Como detectar?",
        options: [
            "Comparar manualmente",
            "CloudFormation Drift Detection — compara estado atual dos recursos com o template",
            "CloudTrail apenas",
            "AWS Config apenas"
        ],
        correct: [1],
        explanation: "Drift Detection: CloudFormation compara estado real dos recursos com o que está definido no template. Mostra quais propriedades divergem. Não corrige automaticamente — apenas detecta.",
        topic: "cloudformation",
        domain: "config-iac"
    },
    {
        id: 'cfg_005',
        question: "Uma equipe quer que instâncias EC2 criadas por CloudFormation sinalizem quando estão prontas (user-data completou). Como?",
        options: [
            "Esperar timeout",
            "cfn-signal + WaitCondition/CreationPolicy — instância sinaliza sucesso após bootstrap completar",
            "Health check do ALB",
            "CloudWatch alarm"
        ],
        correct: [1],
        explanation: "CreationPolicy com cfn-signal: CloudFormation aguarda sinal da instância antes de marcar como CREATE_COMPLETE. Se timeout sem sinal, rollback. Garante que bootstrap (user-data) completou com sucesso.",
        topic: "cloudformation",
        domain: "config-iac"
    },
    {
        id: 'cfg_006',
        question: "Uma empresa quer preservar um RDS database mesmo se o CloudFormation stack for deletado. Como?",
        options: [
            "Não é possível",
            "DeletionPolicy: Retain no recurso RDS — CloudFormation não deleta o recurso ao destruir o stack",
            "Backup manual antes de deletar",
            "Usar snapshot apenas"
        ],
        correct: [1],
        explanation: "DeletionPolicy: Retain preserva o recurso. Snapshot cria snapshot antes de deletar. Delete (padrão) remove. Para databases em produção, sempre usar Retain ou Snapshot.",
        topic: "cloudformation",
        domain: "config-iac"
    },
    {
        id: 'cfg_007',
        question: "Uma equipe usa CDK (TypeScript) para IaC. Qual é a relação entre CDK e CloudFormation?",
        options: [
            "CDK substitui CloudFormation",
            "CDK sintetiza (compila) código em templates CloudFormation que são deployados normalmente",
            "São tecnologias independentes",
            "CDK usa Terraform por baixo"
        ],
        correct: [1],
        explanation: "CDK: escreve IaC em linguagem de programação (TS, Python, Java). 'cdk synth' gera template CloudFormation. 'cdk deploy' executa o template. CDK é abstração sobre CloudFormation, não substituto.",
        topic: "cdk",
        domain: "config-iac"
    },
    {
        id: 'cfg_008',
        question: "Uma empresa precisa aplicar patches de segurança em 500 instâncias EC2 com janela de manutenção e aprovação. Qual serviço?",
        options: [
            "SSH em cada instância",
            "Systems Manager Patch Manager com patch baselines + maintenance windows + approval rules",
            "User-data script",
            "AMI update"
        ],
        correct: [1],
        explanation: "Patch Manager: define baseline (quais patches aplicar), maintenance window (quando), approval rules (auto-approve após X dias). Aplica em centenas de instâncias sem SSH. Compliance reporting.",
        topic: "ssm",
        domain: "config-iac"
    },
    {
        id: 'cfg_009',
        question: "Uma aplicação precisa de configuração centralizada (database URLs, feature flags) acessível por múltiplos serviços. Qual serviço AWS?",
        options: [
            "S3 config file",
            "Systems Manager Parameter Store com hierarquia (/app/prod/db-url) + encryption opcional (SecureString)",
            "Environment variables em cada serviço",
            "DynamoDB table"
        ],
        correct: [1],
        explanation: "Parameter Store: config centralizada, hierárquica (/app/env/key), versionada, com encryption (SecureString via KMS). Integra com CloudFormation, Lambda, ECS. Gratuito para standard parameters.",
        topic: "ssm",
        domain: "config-iac"
    },
    {
        id: 'cfg_010',
        question: "Uma empresa quer garantir que todas as instâncias EC2 tenham o CloudWatch Agent instalado e configurado. Como enforçar continuamente?",
        options: [
            "Instalar manualmente em cada instância",
            "SSM State Manager com association que aplica documento de instalação do CW Agent — reaplica se drift detectado",
            "AMI com agent pré-instalado apenas",
            "User-data script"
        ],
        correct: [1],
        explanation: "State Manager: define estado desejado (CW Agent instalado + configurado). Association aplica em schedule. Se instância perde o agent, State Manager reaplica. Compliance contínua.",
        topic: "ssm",
        domain: "config-iac"
    },
    {
        id: 'cfg_011',
        question: "CloudFormation template está ficando muito grande (3000+ linhas). Como modularizar?",
        options: [
            "Manter em um arquivo",
            "Nested Stacks (AWS::CloudFormation::Stack) — cada módulo é um stack separado referenciado pelo parent",
            "Dividir em arquivos sem relação",
            "Usar apenas CDK"
        ],
        correct: [1],
        explanation: "Nested Stacks: template pai referencia templates filhos (S3 URLs). Cada filho é stack independente. Reutilizável entre projetos. Outputs do filho disponíveis no pai. Limite de 500 recursos por stack contornado.",
        topic: "cloudformation",
        domain: "config-iac"
    },
    {
        id: 'cfg_012',
        question: "Uma empresa quer executar um script em 200 instâncias EC2 sem SSH e sem abrir portas. Como?",
        options: [
            "SSH com bastion host",
            "SSM Run Command — executa comandos/scripts remotamente via SSM Agent (sem SSH, sem porta 22)",
            "User-data (requer reboot)",
            "Lambda invoke"
        ],
        correct: [1],
        explanation: "Run Command: executa documentos (scripts) em instâncias via SSM Agent. Sem SSH, sem porta 22, sem key pairs. Logging em S3/CloudWatch. Rate control (concurrency). IAM para autorização.",
        topic: "ssm",
        domain: "config-iac"
    },
    {
        id: 'cfg_013',
        question: "Uma equipe quer que CloudFormation crie um recurso custom (ex: configurar third-party service). Como?",
        options: [
            "Não é possível",
            "Custom Resource (AWS::CloudFormation::CustomResource) backed por Lambda function que executa lógica custom",
            "Fazer manualmente após stack criar",
            "Usar apenas SDK"
        ],
        correct: [1],
        explanation: "Custom Resources: CloudFormation invoca Lambda durante Create/Update/Delete do stack. Lambda executa qualquer lógica (API calls, configurações externas). Retorna sucesso/falha ao CloudFormation.",
        topic: "cloudformation",
        domain: "config-iac"
    },
    {
        id: 'cfg_014',
        question: "Uma empresa adota immutable infrastructure. Qual é o princípio e como implementar na AWS?",
        options: [
            "Patchar instâncias existentes",
            "Nunca modificar instâncias em produção — criar nova AMI/container → deploy novo ASG → terminar antigo",
            "Usar apenas containers",
            "Backup antes de modificar"
        ],
        correct: [1],
        explanation: "Immutable: instâncias são descartáveis. Mudança = nova AMI (Packer) ou nova imagem Docker → novo ASG/task definition → swap tráfego → terminar antigo. Elimina configuration drift. Rollback = voltar AMI anterior.",
        topic: "patterns",
        domain: "config-iac"
    },
    {
        id: 'cfg_015',
        question: "CloudFormation precisa passar outputs de um stack para outro stack na mesma região. Como?",
        options: [
            "Copiar valores manualmente",
            "Export/Import: stack A exporta valor (Outputs.Export.Name) → stack B importa (Fn::ImportValue)",
            "Parameter Store como intermediário",
            "Hardcode no template B"
        ],
        correct: [1],
        explanation: "Cross-stack references: Export no stack A (ex: VPC ID). ImportValue no stack B. Cria dependência entre stacks. Limitação: não pode deletar stack A enquanto B importa. Alternativa: SSM Parameter Store.",
        topic: "cloudformation",
        domain: "config-iac"
    },
    {
        id: 'cfg_016',
        question: "Uma empresa quer automatizar a criação de AMIs com software pré-instalado para immutable deployments. Qual ferramenta?",
        options: [
            "Snapshot manual",
            "EC2 Image Builder — pipeline automatizado que cria, testa e distribui AMIs com componentes definidos",
            "CloudFormation apenas",
            "Docker apenas"
        ],
        correct: [1],
        explanation: "EC2 Image Builder: define recipe (base AMI + componentes a instalar), pipeline (build + test + distribute). Agenda builds automáticos. Testa AMI antes de disponibilizar. Distribui cross-region/cross-account.",
        topic: "patterns",
        domain: "config-iac"
    },
    {
        id: 'cfg_017',
        question: "SSM Automation precisa reiniciar instâncias EC2 em sequência com aprovação entre cada batch. Como?",
        options: [
            "Script manual",
            "SSM Automation runbook com steps: aws:approve (aguarda aprovação) + aws:executeAwsApi (restart) + rate control",
            "Lambda com sleep",
            "Maintenance window apenas"
        ],
        correct: [1],
        explanation: "Automation runbooks: steps sequenciais com approval gates. aws:approve pausa para aprovação humana. Rate control limita concurrency. Pode executar cross-account via Organizations.",
        topic: "ssm",
        domain: "config-iac"
    },
    {
        id: 'cfg_018',
        question: "Uma empresa quer detectar quando recursos AWS divergem do estado desejado definido em código (IaC). Qual combinação?",
        options: [
            "Verificar manualmente",
            "CloudFormation Drift Detection + AWS Config Rules para compliance contínua + alertas via EventBridge",
            "CloudTrail apenas",
            "Trusted Advisor"
        ],
        correct: [1],
        explanation: "Drift detection: CloudFormation detecta mudanças manuais. Config Rules: avalia compliance continuamente (ex: SG não deve ter 0.0.0.0/0). EventBridge alerta quando non-compliant. Defense in depth.",
        topic: "patterns",
        domain: "config-iac"
    },
    {
        id: 'cfg_019',
        question: "CloudFormation stack update vai substituir (Replace) uma instância EC2. Como evitar perda de dados?",
        options: [
            "Não atualizar",
            "Verificar Change Set (identifica Replace) + usar DeletionPolicy: Snapshot para EBS + ou migrar para dados em EFS/S3",
            "Backup manual",
            "Usar UpdatePolicy"
        ],
        correct: [1],
        explanation: "Change Set mostra Replace antes de executar. DeletionPolicy: Snapshot cria snapshot do EBS antes de deletar. Melhor prática: dados em storage externo (EFS, S3, RDS) — instância é descartável.",
        topic: "cloudformation",
        domain: "config-iac"
    },
    {
        id: 'cfg_020',
        question: "Uma empresa quer que Parameter Store parameters sejam automaticamente rotacionados (ex: database password). Como?",
        options: [
            "Parameter Store não suporta rotação",
            "Usar Secrets Manager ao invés — suporta rotação automática via Lambda. Parameter Store é para config, Secrets Manager para secrets",
            "Cron job manual",
            "CloudWatch Event"
        ],
        correct: [1],
        explanation: "Parameter Store: config (URLs, flags, non-sensitive). Secrets Manager: secrets com rotação automática (DB passwords, API keys). Se precisa de rotação → Secrets Manager. Se é config estática → Parameter Store.",
        topic: "ssm",
        domain: "config-iac"
    }
];

    {
        id: 'cfg_021',
        question: "Uma empresa quer atualizar instâncias EC2 em um Auto Scaling Group gerenciado por CloudFormation sem downtime. Qual configuração?",
        options: [
            "Deletar stack e recriar",
            "UpdatePolicy com AutoScalingRollingUpdate — define MinInstancesInService, MaxBatchSize e PauseTime para rolling update",
            "Terminar instâncias manualmente",
            "Usar Blue/Green com Route 53"
        ],
        correct: [1],
        explanation: "AutoScalingRollingUpdate: CloudFormation atualiza instâncias em batches. MinInstancesInService garante capacidade mínima. MaxBatchSize controla quantas atualizam por vez. PauseTime aguarda health check. Zero downtime.",
        topic: "cloudformation",
        domain: "config-iac"
    },
    {
        id: 'cfg_022',
        question: "Uma instância EC2 criada por CloudFormation precisa instalar pacotes, criar arquivos e iniciar serviços durante bootstrap. Qual helper script?",
        options: [
            "User-data bash script apenas",
            "cfn-init — lê metadata (AWS::CloudFormation::Init) e executa packages, files, commands, services de forma declarativa",
            "SSM Run Command",
            "CodeDeploy agent"
        ],
        correct: [1],
        explanation: "cfn-init: lê AWS::CloudFormation::Init metadata do template. Instala packages (yum/apt), cria files, executa commands, configura services. Declarativo e idempotente. Mais robusto que user-data scripts.",
        topic: "cloudformation",
        domain: "config-iac"
    },
    {
        id: 'cfg_023',
        question: "Após deploy inicial, a equipe quer que instâncias EC2 detectem mudanças no CloudFormation metadata e se reconfigurem automaticamente. Qual helper?",
        options: [
            "Redeploy manual",
            "cfn-hup — daemon que detecta mudanças na metadata do stack e re-executa cfn-init automaticamente",
            "CloudWatch Agent",
            "SSM State Manager"
        ],
        correct: [1],
        explanation: "cfn-hup: daemon que monitora metadata changes no stack. Quando detecta mudança, executa hooks (geralmente re-run cfn-init). Permite atualizar configuração de instâncias existentes sem replace.",
        topic: "cloudformation",
        domain: "config-iac"
    },
    {
        id: 'cfg_024',
        question: "Uma equipe CDK quer reutilizar um padrão de infraestrutura (VPC + subnets + NAT) em múltiplos projetos. Qual nível de construct usar?",
        options: [
            "L1 (CfnResource) — mapeamento 1:1 com CloudFormation",
            "L3 (Patterns) — constructs de alto nível que combinam múltiplos recursos com best practices embutidas",
            "L2 (curated constructs)",
            "Custom Resource"
        ],
        correct: [1],
        explanation: "L1: raw CloudFormation (Cfn*). L2: abstrações curadas com defaults inteligentes (ex: Bucket com encryption). L3 (Patterns): combinam múltiplos L2 em padrões reutilizáveis (ex: ApplicationLoadBalancedFargateService).",
        topic: "cdk",
        domain: "config-iac"
    },
    {
        id: 'cfg_025',
        question: "Uma empresa quer enforçar que todos os S3 buckets criados via CDK tenham encryption e versioning habilitados, independente do que o dev definiu. Como?",
        options: [
            "Code review manual",
            "CDK Aspects — visitor pattern que percorre toda a construct tree e aplica/valida regras em todos os nodes",
            "Config Rules após deploy",
            "Pre-commit hooks"
        ],
        correct: [1],
        explanation: "Aspects: implementam IAspect interface. Percorrem construct tree durante synth. Podem modificar propriedades (adicionar encryption) ou reportar errors/warnings. Enforcement em tempo de síntese, antes do deploy.",
        topic: "cdk",
        domain: "config-iac"
    },
    {
        id: 'cfg_026',
        question: "Uma equipe CDK precisa usar valores diferentes por ambiente (dev/staging/prod) como instance size e replica count. Como parametrizar?",
        options: [
            "Hardcode por branch",
            "CDK Context (cdk.json ou -c flag) — valores por ambiente acessíveis via node.tryGetContext() no código",
            "Environment variables apenas",
            "CloudFormation Parameters"
        ],
        correct: [1],
        explanation: "CDK Context: valores em cdk.json ou passados via CLI (-c env=prod). Acessados com tryGetContext(). Permite stacks determinísticos por ambiente. Melhor que CFN Parameters pois resolve em synth time.",
        topic: "cdk",
        domain: "config-iac"
    },
    {
        id: 'cfg_027',
        question: "Uma equipe quer testar que seu CDK stack gera os recursos esperados antes de deployar. Qual abordagem?",
        options: [
            "Deploy em dev e verificar",
            "CDK Assertions (Template.fromStack) — testa template sintetizado: hasResource, hasResourceProperties, resourceCountIs",
            "CloudFormation validate-template",
            "Linting apenas"
        ],
        correct: [1],
        explanation: "CDK Assertions: unit tests no template sintetizado. Template.fromStack(stack).hasResourceProperties('AWS::S3::Bucket', {Encryption: 'AES256'}). Fine-grained assertions ou snapshot testing. Roda sem deploy.",
        topic: "cdk",
        domain: "config-iac"
    },
    {
        id: 'cfg_028',
        question: "Uma empresa com 500 instâncias (EC2 + on-premises) precisa inventariar software instalado, patches e configurações. Qual serviço?",
        options: [
            "Script manual em cada servidor",
            "SSM Inventory — coleta metadata (apps instalados, patches, network config, Windows updates) de managed instances automaticamente",
            "AWS Config apenas",
            "CloudWatch Agent"
        ],
        correct: [1],
        explanation: "SSM Inventory: coleta automaticamente metadata de instâncias (applications, AWS components, network config, Windows updates, custom inventory). Visualiza em Resource Data Sync (S3 + Athena). Suporta on-premises.",
        topic: "ssm",
        domain: "config-iac"
    },
    {
        id: 'cfg_029',
        question: "Uma empresa precisa visualizar quais instâncias estão non-compliant com patch baselines e associações do State Manager. Qual feature?",
        options: [
            "CloudWatch Dashboard",
            "SSM Compliance — dashboard unificado mostrando compliance status de patches e associations em todas as instâncias",
            "AWS Config",
            "Security Hub"
        ],
        correct: [1],
        explanation: "SSM Compliance: visão unificada de patch compliance + association compliance. Mostra Compliant/Non-Compliant por instância. Integra com EventBridge para alertas. Pode enviar dados para Security Hub.",
        topic: "ssm",
        domain: "config-iac"
    },
    {
        id: 'cfg_030',
        question: "Uma empresa precisa distribuir e instalar software custom (agentes de monitoramento) em centenas de instâncias de forma versionada. Qual feature do SSM?",
        options: [
            "Run Command com script",
            "SSM Distributor — cria packages versionados que podem ser instalados/atualizados em managed instances via State Manager ou Run Command",
            "S3 + user-data",
            "CodeDeploy"
        ],
        correct: [1],
        explanation: "Distributor: empacota software (zip + manifest). Versiona packages. Instala via Run Command (ad-hoc) ou State Manager (contínuo). Suporta install, update, uninstall. Cross-platform (Linux/Windows).",
        topic: "ssm",
        domain: "config-iac"
    },
    {
        id: 'cfg_031',
        question: "Uma empresa quer gerenciar servidores on-premises com SSM (Run Command, Patch Manager, Inventory). O que é necessário?",
        options: [
            "VPN apenas",
            "Instalar SSM Agent + criar Hybrid Activation (activation code/ID) + IAM service role para registrar como managed instances",
            "Direct Connect obrigatório",
            "Instalar CloudWatch Agent apenas"
        ],
        correct: [1],
        explanation: "Hybrid Activation: gera activation code + ID. Instala SSM Agent no servidor on-premises com o activation. Servidor aparece como 'mi-' (managed instance). Acesso a todos os SSM features. Requer internet ou VPC endpoint.",
        topic: "ssm",
        domain: "config-iac"
    },
    {
        id: 'cfg_032',
        question: "CloudFormation UpdatePolicy com AutoScalingReplacingUpdate cria um novo ASG inteiro. Quando usar isso ao invés de RollingUpdate?",
        options: [
            "Sempre usar RollingUpdate",
            "Quando a mudança requer novo Launch Template incompatível — ReplacingUpdate cria novo ASG, valida, e deleta o antigo (immutable update)",
            "Quando tem poucas instâncias",
            "Quando não tem ALB"
        ],
        correct: [1],
        explanation: "ReplacingUpdate: cria ASG novo → aguarda instâncias healthy → swap → deleta ASG antigo. Mais seguro para mudanças breaking (novo AMI, novo instance type). RollingUpdate: atualiza in-place em batches. Mais rápido mas mais risco.",
        topic: "cloudformation",
        domain: "config-iac"
    },
    {
        id: 'cfg_033',
        question: "Uma equipe CDK quer que o pipeline de CI falhe se algum construct criar um Security Group com ingress 0.0.0.0/0. Como implementar?",
        options: [
            "Config Rule após deploy",
            "CDK Aspect que verifica CfnSecurityGroup ingress rules e chama Annotations.of(node).addError() para falhar o synth",
            "Code review manual",
            "cfn-lint"
        ],
        correct: [1],
        explanation: "Aspect com addError(): percorre tree, verifica propriedades, adiciona error annotation. cdk synth falha se há errors. Pipeline CI quebra antes do deploy. Shift-left security. Pode ser publicado como library compartilhada.",
        topic: "cdk",
        domain: "config-iac"
    },
    {
        id: 'cfg_034',
        question: "Uma empresa quer que CloudFormation aguarde o ASG ter instâncias healthy no ELB antes de prosseguir com o update. Qual configuração?",
        options: [
            "PauseTime longo",
            "UpdatePolicy AutoScalingRollingUpdate com WaitOnResourceSignals: true + PauseTime — aguarda cfn-signal das novas instâncias",
            "Health check do ALB apenas",
            "MinSuccessfulInstancesPercent"
        ],
        correct: [1],
        explanation: "WaitOnResourceSignals: true faz CloudFormation aguardar cfn-signal de cada instância nova antes de continuar batch. PauseTime define timeout. Garante que instância está serving traffic antes de atualizar próximo batch.",
        topic: "cloudformation",
        domain: "config-iac"
    },
    {
        id: 'cfg_035',
        question: "Uma empresa quer centralizar dados de SSM Inventory de múltiplas contas/regiões em um único S3 bucket para análise. Como?",
        options: [
            "Export manual",
            "Resource Data Sync — sincroniza dados de Inventory para S3 bucket centralizado. Usar Athena/QuickSight para análise cross-account",
            "CloudWatch Logs",
            "AWS Config Aggregator"
        ],
        correct: [1],
        explanation: "Resource Data Sync: envia Inventory data para S3 em formato estruturado. Múltiplas contas/regiões → um bucket. Athena queries para análise (ex: quais instâncias têm Java < 11). QuickSight para dashboards.",
        topic: "ssm",
        domain: "config-iac"
    },
    {
        id: 'cfg_036',
        question: "Uma equipe quer usar CloudFormation helper scripts mas a instância não tem acesso à internet. Como resolver?",
        options: [
            "Abrir internet access",
            "Usar VPC Endpoint para CloudFormation (com.amazonaws.region.cloudformation) — helpers se comunicam via endpoint privado",
            "Copiar scripts para S3",
            "Usar SSM ao invés"
        ],
        correct: [1],
        explanation: "cfn-init/cfn-signal precisam se comunicar com CloudFormation service. Sem internet: VPC Interface Endpoint para CloudFormation. Também precisa endpoint para S3 (se baixa packages) e logs (se envia logs).",
        topic: "cloudformation",
        domain: "config-iac"
    },
    {
        id: 'cfg_037',
        question: "Uma empresa quer que CDK gere nomes de recursos previsíveis para facilitar referências cross-stack, mas sem conflitos. Qual abordagem?",
        options: [
            "Hardcode nomes",
            "Usar physicalName com naming convention (incluir stage/account) + SSM Parameter Store para compartilhar ARNs entre stacks",
            "Deixar CDK gerar nomes aleatórios",
            "CloudFormation Exports apenas"
        ],
        correct: [1],
        explanation: "CDK gera nomes únicos por padrão (hash). Para cross-stack: physicalName com convention (app-stage-resource) ou exportar para SSM. SSM é mais flexível que CFN Exports (sem dependência circular, pode deletar independente).",
        topic: "cdk",
        domain: "config-iac"
    },
    {
        id: 'cfg_038',
        question: "Uma empresa quer executar um documento SSM Automation em múltiplas contas de uma AWS Organization automaticamente. Como?",
        options: [
            "Executar manualmente em cada conta",
            "SSM Automation com targets por AWS Organizations OU — executa runbook em todas as contas da OU com rate control e error threshold",
            "StackSets apenas",
            "Lambda cross-account"
        ],
        correct: [1],
        explanation: "Automation multi-account: target por OU ou lista de contas. Management account ou delegated admin executa. Rate control (concurrency/error threshold). Ideal para remediation em escala organizacional.",
        topic: "ssm",
        domain: "config-iac"
    }
];

window.configIacQuestions = configIacQuestions;
