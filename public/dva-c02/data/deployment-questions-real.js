// DVA-C02 Deployment Questions - Questões Reais (48 questões)

const deploymentQuestionsReal = [
    // CODEPIPELINE (12 questões)
    {
        id: 'dep_001',
        question: "CodePipeline está falhando no stage de Deploy com erro 'Insufficient permissions'. Pipeline service role tem AdministratorAccess. Qual pode ser a causa?",
        options: [
            "CodeDeploy service role sem permissões",
            "Cross-account deployment sem trust policy",
            "CloudFormation execution role inadequada",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Pipeline role executa actions, mas cada service (CodeDeploy, CloudFormation) precisa de service role própria com permissões específicas.",
        topic: "codepipeline",
        domain: "deployment"
    },
    {
        id: 'dep_002',
        question: "CodePipeline precisa deployar em múltiplas regiões sequencialmente. Como implementar com menor complexidade?",
        options: [
            "Pipeline separada por região",
            "Usar CloudFormation StackSets no pipeline",
            "Stage paralelo com actions por região",
            "Lambda function para deploy cross-region, garantindo escalabilidade horizontal e vertical conforme demanda do workload específico"
        ],
        correct: [1],
        explanation: "CloudFormation StackSets deploy automaticamente em múltiplas regiões/contas. Integra nativamente com CodePipeline.",
        topic: "codepipeline",
        domain: "deployment"
    },
    {
        id: 'dep_003',
        question: "Pipeline tem source no GitHub, mas webhook não está triggerando builds após commits. GitHub connection está ativa. Qual verificar?",
        options: [
            "Branch configurado no source action",
            "GitHub webhook URL e secret",
            "CodeStar connection permissions",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Verificar: branch correto, webhook configurado, CodeStar connection ativa, e permissões do GitHub app.",
        topic: "codepipeline",
        domain: "deployment"
    },
    {
        id: 'dep_004',
        question: "Pipeline precisa de approval manual apenas para deploy em produção, mas não em staging. Como configurar?",
        options: [
            "Manual approval action antes do deploy stage",
            "Conditional approval baseado em parameter",
            "Pipelines separadas para staging e produção, utilizando as ferramentas nativas do serviço para automação e observabilidade operacional",
            "Approval action em todos os stages"
        ],
        correct: [0],
        explanation: "Manual approval action pode ser adicionada antes de qualquer stage. Configurar apenas antes do production deploy stage.",
        topic: "codepipeline",
        domain: "deployment"
    },

    // CLOUDFORMATION (12 questões)
    {
        id: 'dep_005',
        question: "CloudFormation stack está em estado UPDATE_ROLLBACK_FAILED. Tentativa de update falhou e rollback também falhou. Como resolver?",
        options: [
            "Deletar e recriar stack",
            "Usar continue-update-rollback com skip resources",
            "Forçar update com --force flag, com suporte a múltiplas regiões e redundância para alta disponibilidade e disaster recovery",
            "Aguardar timeout automático"
        ],
        correct: [1],
        explanation: "continue-update-rollback permite pular recursos que causaram falha no rollback. Resolve estado stuck sem perder stack.",
        topic: "cloudformation",
        domain: "deployment"
    },
    {
        id: 'dep_006',
        question: "CloudFormation template tem parâmetro 'Environment' com valores permitidos [dev, staging, prod]. Como usar para criar recursos condicionalmente?",
        options: [
            "Usar Conditions com Fn::Equals",
            "Usar Mappings com Fn::FindInMap",
            "Usar Parameters com AllowedValues",
            "Usar Metadata section"
        ],
        correct: [0],
        explanation: "Conditions com Fn::Equals compara parâmetro com valor específico. Usar na propriedade Condition dos recursos.",
        topic: "cloudformation",
        domain: "deployment"
    },
    {
        id: 'dep_007',
        question: "Nested CloudFormation stack precisa passar output de stack pai como parâmetro. Como implementar?",
        options: [
            "Usar Fn::GetAtt no nested stack",
            "Usar Fn::Ref para referenciar output",
            "Hardcode valor no nested template",
            "Usar cross-stack references"
        ],
        correct: [0],
        explanation: "Fn::GetAtt pode referenciar outputs de nested stacks: !GetAtt NestedStack.Outputs.OutputName",
        topic: "cloudformation",
        domain: "deployment"
    },
    {
        id: 'dep_008',
        question: "CloudFormation stack precisa criar IAM role que será usado por recursos na mesma stack. Como evitar circular dependency?",
        options: [
            "Criar role em stack separada",
            "Usar DependsOn attribute",
            "CloudFormation resolve automaticamente",
            "Usar Fn::GetAtt para role ARN, seguindo o modelo de responsabilidade compartilhada e as políticas de segurança corporativas"
        ],
        correct: [2],
        explanation: "CloudFormation resolve dependências automaticamente. IAM roles são criados antes de recursos que os referenciam.",
        topic: "cloudformation",
        domain: "deployment"
    },

    // CODEDEPLOY (10 questões)
    {
        id: 'dep_009',
        question: "CodeDeploy deployment para EC2 está falhando em 'ApplicationStop' lifecycle event. Aplicação não tem script para este evento. Como resolver?",
        options: [
            "Criar script ApplicationStop.sh",
            "ApplicationStop é opcional, ignorar",
            "Usar deployment configuration sem ApplicationStop",
            "Configurar timeout maior"
        ],
        correct: [0],
        explanation: "ApplicationStop é obrigatório mesmo se aplicação não estiver rodando. Criar script que para aplicação gracefully ou retorna exit 0.",
        topic: "codedeploy",
        domain: "deployment"
    },
    {
        id: 'dep_010',
        question: "CodeDeploy Blue/Green deployment para Lambda está falhando com 'AliasUpdateFailed'. Alias está configurado corretamente. Qual pode ser a causa?",
        options: [
            "Lambda function não existe",
            "Insufficient permissions para UpdateAlias",
            "Concurrent deployment em andamento, implementando controles preventivos e detectivos conforme o framework de segurança organizacional",
            "Lambda version não publicada"
        ],
        correct: [1],
        explanation: "CodeDeploy precisa de lambda:UpdateAlias permission para modificar alias durante Blue/Green deployment.",
        topic: "codedeploy",
        domain: "deployment"
    },
    {
        id: 'dep_011',
        question: "CodeDeploy deployment configuration usa 'CodeDeployDefault.Lambda10PercentEvery5Minutes'. Como customizar para 25% a cada 2 minutos?",
        options: [
            "Modificar configuração existente",
            "Criar custom deployment configuration",
            "Usar CodeDeployDefault.LambdaLinear25PercentEvery2Minutes",
            "Não é possível customizar"
        ],
        correct: [1],
        explanation: "Criar custom deployment configuration com linear ou canary traffic shifting personalizado. Configurações default não podem ser modificadas.",
        topic: "codedeploy",
        domain: "deployment"
    },

    // SAM (8 questões)
    {
        id: 'dep_012',
        question: "SAM template tem função Lambda com evento API Gateway, mas após deploy, API não está funcionando. 'sam build' e 'sam deploy' executaram sem erro. O que verificar?",
        options: [
            "API Gateway stage não foi deployed, com capacidade de processamento paralelo e distribuído para atender picos de demanda",
            "Lambda function permissions",
            "SAM automaticamente cria API e stage",
            "CORS configuration"
        ],
        correct: [2],
        explanation: "SAM automaticamente cria API Gateway, stage e permissions. Verificar se template está correto e se API endpoint foi outputado.",
        topic: "sam",
        domain: "deployment"
    },
    {
        id: 'dep_013',
        question: "SAM local testing com 'sam local start-api' não consegue acessar DynamoDB local. Como configurar?",
        options: [
            "Usar --docker-network para conectar containers",
            "Configurar AWS_ENDPOINT_URL environment variable",
            "Usar DynamoDB local em container separado",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Múltiplas opções: docker network para containers, endpoint URL para DynamoDB local, ou usar LocalStack para ambiente completo.",
        topic: "sam",
        domain: "deployment"
    },
    {
        id: 'dep_014',
        question: "SAM template precisa deployar em múltiplos ambientes (dev/prod) com diferentes parâmetros. Como implementar?",
        options: [
            "Templates separados por ambiente",
            "Usar samconfig.toml com environments",
            "Parameters no template com default values",
            "Environment variables no deploy"
        ],
        correct: [1],
        explanation: "samconfig.toml suporta múltiplos environments com parâmetros específicos. Deploy com --config-env dev/prod.",
        topic: "sam",
        domain: "deployment"
    },

    // CODEBUILD (6 questões)
    {
        id: 'dep_015',
        question: "CodeBuild project está falhando com 'DOWNLOAD_SOURCE_FAILED' para repositório GitHub privado. Como resolver?",
        options: [
            "Usar CodeStar connection ao invés de OAuth",
            "Configurar GitHub personal access token, integrando com os sistemas existentes através de APIs e conectores nativos da plataforma",
            "Tornar repositório público",
            "Usar S3 source ao invés de GitHub"
        ],
        correct: [0],
        explanation: "CodeStar connections fornecem acesso mais seguro e confiável a repositórios privados que OAuth tokens.",
        topic: "codebuild",
        domain: "deployment"
    },
    {
        id: 'dep_016',
        question: "CodeBuild buildspec.yml precisa instalar dependências que demoram 10 minutos a cada build. Como otimizar?",
        options: [
            "Usar build environment com dependências pré-instaladas",
            "Cache dependencies no S3",
            "Usar Docker image customizada",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Múltiplas estratégias: custom Docker image (mais rápido), S3 cache (flexível), ou environment pré-configurado.",
        topic: "codebuild",
        domain: "deployment"
    },
    {
        id: 'dep_017',
        question: "CodeBuild precisa acessar recursos em VPC privada durante build. Como configurar?",
        options: [
            "Configurar VPC configuration no CodeBuild project",
            "Usar NAT Gateway para internet access",
            "VPC endpoints para AWS services",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "VPC config permite acesso a recursos privados. NAT Gateway para internet. VPC endpoints para AWS services sem internet.",
        topic: "codebuild",
        domain: "deployment"
    },

    // ADDITIONAL CODEPIPELINE (8 questões)
    {
        id: 'dep_018',
        question: "CodePipeline artifact store está em região diferente do pipeline. Deploy falha com 'Access Denied'. Como resolver?",
        options: [
            "Artifact store deve estar na mesma região",
            "Configurar cross-region artifact replication",
            "Usar S3 bucket policy cross-region",
            "Opções A e B"
        ],
        correct: [3],
        explanation: "Artifact store deve estar na mesma região ou configurar replicação cross-region para deployments multi-region.",
        topic: "codepipeline",
        domain: "deployment"
    },
    {
        id: 'dep_019',
        question: "Pipeline precisa aguardar aprovação externa via API. Como implementar?",
        options: [
            "Manual approval action apenas",
            "Lambda function com PutApprovalResult",
            "External webhook integration",
            "Opções A e B"
        ],
        correct: [3],
        explanation: "Manual approval pode ser aprovado via console ou API usando PutApprovalResult para integração externa.",
        topic: "codepipeline",
        domain: "deployment"
    },
    {
        id: 'dep_020',
        question: "CodePipeline precisa deployar apenas se tests passaram. Como implementar gate?",
        options: [
            "Test action com failure behavior 'STOP'",
            "Lambda function para validar test results",
            "Manual approval após tests",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Múltiplas opções: test action que para pipeline, Lambda validation, ou manual approval baseado em results.",
        topic: "codepipeline",
        domain: "deployment"
    },
    {
        id: 'dep_021',
        question: "Pipeline tem múltiplos environments (dev/staging/prod) em paralelo. Como evitar conflicts?",
        options: [
            "Usar diferentes artifact stores",
            "Sequential deployment ao invés de parallel",
            "Environment-specific branches",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Evitar conflicts com: artifact stores separados, deployment sequencial, ou branches específicos por environment.",
        topic: "codepipeline",
        domain: "deployment"
    },
    {
        id: 'dep_022',
        question: "CodePipeline CloudWatch Events não estão triggerando Lambda. Rule está enabled. O que verificar?",
        options: [
            "Lambda execution role permissions",
            "EventBridge rule target configuration",
            "Pipeline CloudWatch Events role",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Verificar: Lambda permissions para EventBridge, rule target config, e pipeline service role para CloudWatch Events.",
        topic: "codepipeline",
        domain: "deployment"
    },
    {
        id: 'dep_023',
        question: "Pipeline precisa fazer rollback automático se deployment falhar. Como implementar?",
        options: [
            "CodeDeploy automatic rollback",
            "Lambda function para rollback",
            "CloudFormation rollback on failure",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Rollback pode ser implementado via: CodeDeploy config, Lambda custom logic, ou CloudFormation rollback policies.",
        topic: "codepipeline",
        domain: "deployment"
    },
    {
        id: 'dep_024',
        question: "Pipeline execution está lenta (30+ minutos). Como otimizar?",
        options: [
            "Parallel actions onde possível",
            "Otimizar build/test stages",
            "Cache dependencies",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Otimizações: paralelizar actions, otimizar builds, cache dependencies, e eliminar steps desnecessários.",
        topic: "codepipeline",
        domain: "deployment"
    },
    {
        id: 'dep_025',
        question: "Pipeline precisa notificar equipe sobre failures via Slack. Como implementar?",
        options: [
            "CloudWatch Events + Lambda + Slack API",
            "SNS topic + Slack webhook",
            "ChatBot integration",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Múltiplas opções: CloudWatch Events + Lambda, SNS integration, ou AWS ChatBot para Slack notifications.",
        topic: "codepipeline",
        domain: "deployment"
    },

    // ADDITIONAL CLOUDFORMATION (8 questões)
    {
        id: 'dep_026',
        question: "CloudFormation stack update está falhando com 'Resource already exists'. Como resolver?",
        options: [
            "Usar DeletionPolicy: Retain",
            "Import existing resource para stack",
            "Usar different logical ID",
            "Opções B e C"
        ],
        correct: [3],
        explanation: "Resolver conflicts com: import de recursos existentes ou usar logical IDs diferentes para novos recursos.",
        topic: "cloudformation",
        domain: "deployment"
    },
    {
        id: 'dep_027',
        question: "CloudFormation template precisa de valores diferentes por região (AMI IDs). Como implementar?",
        options: [
            "Usar Mappings section",
            "Parameters com default values",
            "Pseudo parameters AWS::Region",
            "Opções A e C"
        ],
        correct: [3],
        explanation: "Mappings com AWS::Region pseudo parameter permite valores específicos por região (AMI IDs, instance types, etc).",
        topic: "cloudformation",
        domain: "deployment"
    },
    {
        id: 'dep_028',
        question: "CloudFormation custom resource precisa fazer cleanup quando stack é deletado. Como implementar?",
        options: [
            "Lambda function handle DELETE event",
            "DeletionPolicy: Delete",
            "Custom resource sempre faz cleanup, otimizando custo operacional através de right-sizing e monitoramento de utilização de recursos",
            "Não é possível fazer cleanup"
        ],
        correct: [0],
        explanation: "Custom resource Lambda deve handle DELETE event para fazer cleanup de recursos externos quando stack é deletado.",
        topic: "cloudformation",
        domain: "deployment"
    },
    {
        id: 'dep_029',
        question: "CloudFormation drift detection mostra 'DRIFTED' para recurso. Como resolver?",
        options: [
            "Update stack para match current state",
            "Revert manual changes",
            "Import current configuration",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Resolver drift: update template para match estado atual, reverter mudanças manuais, ou import nova configuração.",
        topic: "cloudformation",
        domain: "deployment"
    },
    {
        id: 'dep_030',
        question: "CloudFormation stack precisa de diferentes IAM permissions por environment. Como implementar?",
        options: [
            "Condition-based IAM policies",
            "Different execution roles",
            "Parameter-driven permissions",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Permissions por environment: conditions em policies, execution roles diferentes, ou parameters para controlar permissions.",
        topic: "cloudformation",
        domain: "deployment"
    },
    {
        id: 'dep_031',
        question: "CloudFormation StackSets deployment falha em algumas contas. Como debuggar?",
        options: [
            "Verificar trust relationships",
            "Check account-specific permissions",
            "Validate template compatibility",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "StackSets failures: verificar trust policies, permissions por conta, e compatibilidade do template com diferentes environments.",
        topic: "cloudformation",
        domain: "deployment"
    },
    {
        id: 'dep_032',
        question: "CloudFormation template tem 500+ resources e está atingindo limits. Como resolver?",
        options: [
            "Usar nested stacks",
            "Dividir em múltiplos stacks",
            "Cross-stack references",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Resolver limits com: nested stacks para organização, múltiplos stacks independentes, e cross-stack references para sharing.",
        topic: "cloudformation",
        domain: "deployment"
    },
    {
        id: 'dep_033',
        question: "CloudFormation change set mostra 'No changes' mas template foi modificado. Por quê?",
        options: [
            "Mudanças apenas em Metadata/Description",
            "Parameter values não mudaram",
            "Conditions resultam no mesmo outcome",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "'No changes' quando: apenas metadata mudou, parameters iguais, ou conditions resultam na mesma configuração final.",
        topic: "cloudformation",
        domain: "deployment"
    },

    // ADDITIONAL CODEDEPLOY (5 questões)
    {
        id: 'dep_034',
        question: "CodeDeploy Blue/Green deployment para ECS está falhando durante traffic shifting. Como debuggar?",
        options: [
            "Verificar health checks do target group",
            "Analisar ECS service events",
            "Check deployment configuration",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Blue/Green failures: verificar ALB health checks, ECS service stability, e deployment configuration compatibility.",
        topic: "codedeploy",
        domain: "deployment"
    },
    {
        id: 'dep_035',
        question: "CodeDeploy deployment para Lambda tem rollback automático mas versão anterior também tem issues. Como resolver?",
        options: [
            "Stop deployment e fix manualmente",
            "Deploy versão known-good",
            "Usar Lambda versioning strategy",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Quando rollback falha: stop deployment, deploy versão estável conhecida, e implementar better versioning strategy.",
        topic: "codedeploy",
        domain: "deployment"
    },
    {
        id: 'dep_036',
        question: "CodeDeploy precisa fazer deployment apenas durante maintenance window. Como implementar?",
        options: [
            "Schedule deployment com EventBridge",
            "Manual trigger durante window",
            "Lambda function para controlar timing",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Controlar timing com: EventBridge scheduling, manual triggers, ou Lambda functions para automated timing control.",
        topic: "codedeploy",
        domain: "deployment"
    },
    {
        id: 'dep_037',
        question: "CodeDeploy deployment group tem múltiplos Auto Scaling groups. Como garantir deployment coordenado?",
        options: [
            "Deployment configuration com batch size",
            "Sequential deployment por ASG",
            "Health check grace period",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Coordenar deployments com: batch size configuration, sequential processing, e adequate grace periods.",
        topic: "codedeploy",
        domain: "deployment"
    },
    {
        id: 'dep_038',
        question: "CodeDeploy application revision está no S3 mas deployment falha com 'RevisionDoesNotExist'. Como resolver?",
        options: [
            "Verificar S3 bucket permissions",
            "Check revision location format",
            "Validate CodeDeploy service role",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Revision issues: verificar S3 permissions, formato da location (bucket/key), e service role permissions.",
        topic: "codedeploy",
        domain: "deployment"
    },

    // ADDITIONAL SAM (5 questões)
    {
        id: 'dep_039',
        question: "SAM template usa !Ref para referenciar resource mas deploy falha com 'Unresolved resource'. Como resolver?",
        options: [
            "Usar !GetAtt ao invés de !Ref",
            "Verificar logical ID do resource",
            "Resource deve estar no mesmo template",
            "Opções B e C"
        ],
        correct: [3],
        explanation: "!Ref requer: logical ID correto e resource no mesmo template. Para cross-stack, usar Outputs/Imports.",
        topic: "sam",
        domain: "deployment"
    },
    {
        id: 'dep_040',
        question: "SAM build está falhando com 'Requirements file not found' para Python function. Como resolver?",
        options: [
            "Criar requirements.txt vazio",
            "Especificar requirements file path",
            "Usar --skip-pull-image flag",
            "Opções A e B"
        ],
        correct: [3],
        explanation: "SAM build Python requer requirements.txt ou especificar path alternativo. Arquivo vazio é válido se sem dependencies.",
        topic: "sam",
        domain: "deployment"
    },
    {
        id: 'dep_041',
        question: "SAM local API não consegue conectar com RDS em VPC. Como resolver?",
        options: [
            "Usar --docker-network host",
            "Configure VPC settings no template",
            "Use RDS proxy endpoint",
            "SAM local não suporta VPC"
        ],
        correct: [0],
        explanation: "SAM local com --docker-network host permite acesso a recursos locais. Para RDS real, usar connection strings apropriados.",
        topic: "sam",
        domain: "deployment"
    },
    {
        id: 'dep_042',
        question: "SAM deploy está criando resources duplicados. Como evitar?",
        options: [
            "Usar --stack-name consistente",
            "Verificar samconfig.toml",
            "Delete stack anterior",
            "Opções A e B"
        ],
        correct: [3],
        explanation: "Evitar duplicação com: stack name consistente e samconfig.toml correto para environment.",
        topic: "sam",
        domain: "deployment"
    },
    {
        id: 'dep_043',
        question: "SAM template precisa de custom domain para API Gateway. Como configurar?",
        options: [
            "Domain property no AWS::Serverless::Api",
            "Route53 record pointing para API",
            "ACM certificate",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Custom domain requer: Domain configuration no SAM template, Route53 DNS record, e ACM certificate.",
        topic: "sam",
        domain: "deployment"
    },

    // ADDITIONAL CODEBUILD (5 questões)
    {
        id: 'dep_044',
        question: "CodeBuild está falhando com 'Docker daemon not running' em custom image. Como resolver?",
        options: [
            "Usar privileged mode",
            "Start Docker daemon no buildspec",
            "Usar AWS managed image",
            "Opções A e B"
        ],
        correct: [3],
        explanation: "Docker-in-Docker requer: privileged mode habilitado e start daemon no buildspec pre_build phase.",
        topic: "codebuild",
        domain: "deployment"
    },
    {
        id: 'dep_045',
        question: "CodeBuild artifacts são muito grandes (>5GB) e upload falha. Como resolver?",
        options: [
            "Comprimir artifacts",
            "Múltiplos artifact locations",
            "Upload direto para S3 no buildspec",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Artifacts grandes: compressão, múltiplos outputs, ou upload direto para S3 durante build.",
        topic: "codebuild",
        domain: "deployment"
    },
    {
        id: 'dep_046',
        question: "CodeBuild precisa acessar private Docker registry. Como configurar?",
        options: [
            "Registry credentials em environment variables",
            "Docker login no buildspec",
            "ECR authentication",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Private registry access: credentials via env vars, docker login command, ou ECR authentication para AWS registries.",
        topic: "codebuild",
        domain: "deployment"
    },
    {
        id: 'dep_047',
        question: "CodeBuild build time varia muito (5-30 min) para mesmo código. Como investigar?",
        options: [
            "Analisar build logs por phase",
            "Verificar compute type consistency",
            "Monitor network performance",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Variabilidade de build: analisar logs detalhados, verificar compute resources, e monitorar network/dependency downloads.",
        topic: "codebuild",
        domain: "deployment"
    },
    {
        id: 'dep_048',
        question: "CodeBuild precisa fazer deploy para múltiplas contas AWS. Como implementar com segurança?",
        options: [
            "Cross-account IAM roles",
            "AssumeRole no buildspec",
            "Separate build projects por conta",
            "Opções A e B"
        ],
        correct: [3],
        explanation: "Cross-account deployment: configurar cross-account roles e usar AssumeRole no buildspec para cada target account.",
        topic: "codebuild",
        domain: "deployment"
    }
];

window.deploymentQuestionsReal = deploymentQuestionsReal;