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

window.configIacQuestions = configIacQuestions;
