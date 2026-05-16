// DOP-C02 Domain 1: SDLC Automation (50 questões - 22%)
// Tópicos: CodePipeline, CodeBuild, CodeDeploy, deployment strategies, testing, CI/CD patterns

const sdlcQuestions = [
    {
        id: 'sdlc_001',
        question: "Uma equipe usa CodePipeline com CodeDeploy para deploy em EC2. Após deploy, 5% dos requests retornam erro 500. O deploy precisa ser revertido automaticamente. Qual configuração?",
        options: [
            "Rollback manual via console",
            "CodeDeploy com deployment group configurado para automatic rollback on alarm (CloudWatch alarm em HTTP 5xx > threshold)",
            "Redesploy versão anterior manualmente",
            "Usar Blue/Green sem rollback"
        ],
        correct: [1],
        explanation: "CodeDeploy automatic rollback: configura CloudWatch alarm (ex: 5xx > 5%). Se alarm dispara durante deploy, CodeDeploy reverte automaticamente para última versão estável. Zero intervenção manual.",
        topic: "codedeploy",
        domain: "sdlc"
    },
    {
        id: 'sdlc_002',
        question: "Uma empresa quer implementar Blue/Green deployment para aplicação em ECS Fargate. Como configurar com CodeDeploy?",
        options: [
            "Criar dois clusters ECS separados",
            "CodeDeploy ECS deployment: cria novo task set (green) → redireciona tráfego do ALB → termina task set antigo (blue) após validação",
            "Usar rolling update do ECS",
            "Deploy manual com dois services"
        ],
        correct: [1],
        explanation: "CodeDeploy ECS Blue/Green: cria novo task set com nova versão, ALB listener redireciona tráfego (all-at-once, canary ou linear). Se falhar, reverte listener para task set original. AppSpec define hooks de validação.",
        topic: "codedeploy",
        domain: "sdlc"
    },
    {
        id: 'sdlc_003',
        question: "Um CodeBuild project falha com 'DOWNLOAD_SOURCE' error. O source é um repositório GitHub privado. Qual é a causa mais provável?",
        options: [
            "GitHub está fora do ar",
            "CodeBuild não tem credenciais configuradas para acessar o repositório privado (OAuth token ou connection não configurada)",
            "buildspec.yml com erro de sintaxe",
            "Timeout do build"
        ],
        correct: [1],
        explanation: "DOWNLOAD_SOURCE error: CodeBuild não consegue clonar o repo. Para GitHub privado: configurar GitHub connection (CodeStar Connections) ou OAuth token. Verificar permissões do token para o repo.",
        topic: "codebuild",
        domain: "sdlc"
    },
    {
        id: 'sdlc_004',
        question: "Uma equipe quer que o pipeline execute testes de integração em ambiente isolado antes de deploy em produção. Como implementar?",
        options: [
            "Testar em produção com feature flags",
            "CodePipeline stage 'Test' com CodeBuild que provisiona ambiente temporário (CloudFormation) → roda testes → destrói ambiente",
            "Testes manuais pela equipe QA",
            "Pular testes para deploy mais rápido"
        ],
        correct: [1],
        explanation: "Ephemeral test environments: CodeBuild cria stack CloudFormation (ambiente isolado), executa testes de integração, reporta resultado, destrói stack. Ambiente limpo a cada execução, sem custo permanente.",
        topic: "codepipeline",
        domain: "sdlc"
    },
    {
        id: 'sdlc_005',
        question: "Uma empresa precisa que deploys em produção requeiram aprovação manual de um tech lead antes de prosseguir. Como implementar no CodePipeline?",
        options: [
            "Não é possível no CodePipeline",
            "Adicionar Manual Approval action entre stages de staging e production com SNS notification",
            "Usar IAM para bloquear deploy",
            "Webhook externo"
        ],
        correct: [1],
        explanation: "Manual Approval action: pausa o pipeline até aprovação. SNS notifica o aprovador. Pode incluir URL para review (ex: link para staging). Timeout configurável. Rejeição para o pipeline.",
        topic: "codepipeline",
        domain: "sdlc"
    },
    {
        id: 'sdlc_006',
        question: "CodeDeploy está fazendo deploy em 100 instâncias EC2. Configuração: OneAtATime. Deploy leva 3 horas. Como acelerar sem aumentar risco?",
        options: [
            "AllAtOnce (mais rápido mas arriscado)",
            "Usar deployment configuration HalfAtATime ou criar custom config (ex: 25% at a time) com health checks",
            "Aumentar timeout",
            "Usar mais instâncias"
        ],
        correct: [1],
        explanation: "HalfAtATime: deploya 50% simultaneamente (2x mais rápido). Custom config (25%): 4 batches. Health checks entre batches garantem que cada batch está saudável antes de prosseguir. Balanceia velocidade e segurança.",
        topic: "codedeploy",
        domain: "sdlc"
    },
    {
        id: 'sdlc_007',
        question: "Uma equipe quer cachear dependências (node_modules) entre builds no CodeBuild para reduzir tempo de build de 10min para 3min. Como?",
        options: [
            "Não é possível cachear no CodeBuild",
            "Configurar cache no buildspec.yml com S3 cache ou local cache (Docker layer caching)",
            "Instalar dependências no AMI",
            "Usar instância maior"
        ],
        correct: [1],
        explanation: "CodeBuild cache: S3 cache (persiste entre builds, compartilhável) ou local cache (mais rápido, mesmo build host). No buildspec: cache.paths: ['node_modules/**/*']. Reduz drasticamente tempo de install.",
        topic: "codebuild",
        domain: "sdlc"
    },
    {
        id: 'sdlc_008',
        question: "Uma empresa quer implementar Canary deployment para Lambda function: 10% do tráfego na nova versão por 10 minutos, depois 100%. Como?",
        options: [
            "Usar Lambda aliases manualmente",
            "CodeDeploy com Lambda deployment preference: Canary10Percent10Minutes + pre/post traffic hooks para validação",
            "API Gateway com weighted routing",
            "Usar Lambda@Edge"
        ],
        correct: [1],
        explanation: "CodeDeploy Lambda: Canary10Percent10Minutes envia 10% para nova versão por 10min. Se hooks (Lambda functions de validação) passam, shift 100%. Se falham, rollback automático. Alias com traffic shifting.",
        topic: "codedeploy",
        domain: "sdlc"
    },
    {
        id: 'sdlc_009',
        question: "Um pipeline precisa fazer deploy em 3 regiões AWS sequencialmente (us-east-1 → eu-west-1 → ap-southeast-1) com validação entre cada região. Como estruturar?",
        options: [
            "3 pipelines separados",
            "CodePipeline com stages sequenciais por região: Deploy-US → Test-US → Approve → Deploy-EU → Test-EU → Approve → Deploy-AP",
            "Deploy simultâneo em todas",
            "Usar CloudFormation StackSets apenas"
        ],
        correct: [1],
        explanation: "Stages sequenciais com cross-region actions: cada stage deploya em uma região, testa, e aguarda aprovação antes da próxima. CodePipeline suporta cross-region actions nativamente. Rollback por região se falhar.",
        topic: "codepipeline",
        domain: "sdlc"
    },
    {
        id: 'sdlc_010',
        question: "Uma equipe quer que CodeBuild execute testes em paralelo (unit tests, integration tests, security scan) para reduzir tempo total. Como?",
        options: [
            "Executar sequencialmente no mesmo build",
            "CodePipeline com stage contendo múltiplas actions em paralelo (cada action = CodeBuild project diferente)",
            "Usar múltiplos buildspec files",
            "Não é possível paralelizar"
        ],
        correct: [1],
        explanation: "Actions paralelas no mesmo stage: CodePipeline executa simultaneamente. Cada action pode ser um CodeBuild project diferente (unit-tests, integration-tests, security-scan). Stage só avança quando TODAS completam.",
        topic: "codepipeline",
        domain: "sdlc"
    },
    {
        id: 'sdlc_011',
        question: "CodeDeploy em EC2 falha com 'The deployment failed because no instances were found for the deployment group'. O que verificar?",
        options: [
            "Verificar buildspec.yml",
            "Verificar se instâncias têm CodeDeploy agent instalado + tags corretas que match o deployment group filter",
            "Verificar IAM do pipeline",
            "Verificar VPC settings"
        ],
        correct: [1],
        explanation: "Deployment group usa tags para identificar instâncias. Verificar: 1) Tags nas instâncias match o filtro do deployment group, 2) CodeDeploy agent está running nas instâncias, 3) Agent pode comunicar com CodeDeploy service.",
        topic: "codedeploy",
        domain: "sdlc"
    },
    {
        id: 'sdlc_012',
        question: "Uma empresa quer armazenar artifacts de build (JARs, Docker images) de forma centralizada com controle de versão e acesso. Qual combinação?",
        options: [
            "S3 apenas",
            "CodeArtifact para packages (npm, Maven, pip) + ECR para Docker images + IAM policies para controle de acesso",
            "GitHub Packages",
            "Nexus self-hosted"
        ],
        correct: [1],
        explanation: "CodeArtifact: managed package repository (npm, pip, Maven, NuGet). ECR: managed Docker registry com image scanning. Ambos integram com IAM para controle granular. Upstream repositories para cache de packages públicos.",
        topic: "artifacts",
        domain: "sdlc"
    },
    {
        id: 'sdlc_013',
        question: "Uma equipe usa trunk-based development. Como garantir que código no main branch está sempre deployable?",
        options: [
            "Code reviews apenas",
            "Branch protection + CI obrigatório (build + tests passam) + feature flags para código incompleto + automated rollback",
            "Deploy manual com verificação",
            "Usar GitFlow ao invés"
        ],
        correct: [1],
        explanation: "Trunk-based: main sempre deployable. Garantias: CI roda em cada commit (build+test), branch protection exige CI pass, feature flags escondem código incompleto, automated rollback se produção falhar.",
        topic: "practices",
        domain: "sdlc"
    },
    {
        id: 'sdlc_014',
        question: "Um CodeBuild project precisa acessar um repositório privado de packages npm no CodeArtifact durante o build. Como autenticar?",
        options: [
            "Hardcode token no buildspec",
            "IAM role do CodeBuild com permissão codeartifact:GetAuthorizationToken + comando aws codeartifact login no buildspec",
            "Variável de ambiente com password",
            "SSH key"
        ],
        correct: [1],
        explanation: "CodeBuild service role com permissão CodeArtifact. No buildspec pre_build: 'aws codeartifact login --tool npm --repository X'. Token temporário gerado automaticamente via IAM. Sem credentials estáticas.",
        topic: "codebuild",
        domain: "sdlc"
    },
    {
        id: 'sdlc_015',
        question: "Uma empresa quer implementar GitOps: mudanças em infraestrutura são feitas via PR no repositório, e o pipeline aplica automaticamente. Qual arquitetura?",
        options: [
            "Editar recursos manualmente e commitar depois",
            "Repo com templates CloudFormation/Terraform → PR trigger → CI valida (plan/changeset) → merge → CD aplica (deploy/apply)",
            "Usar console AWS",
            "Scripts bash no cron"
        ],
        correct: [1],
        explanation: "GitOps: repo é source of truth. PR → CI roda plan/changeset (preview). Reviewer aprova. Merge → CD aplica mudanças. Drift detection alerta se estado real diverge do repo. Auditável, reversível, colaborativo.",
        topic: "practices",
        domain: "sdlc"
    },
    {
        id: 'sdlc_016',
        question: "CodePipeline falha no stage de deploy com 'InsufficientPermissions'. O pipeline usa service role. O que verificar?",
        options: [
            "Verificar IAM do desenvolvedor",
            "Verificar se a service role do CodePipeline tem permissões para o serviço de deploy (CodeDeploy, CloudFormation, ECS, etc)",
            "Verificar VPC",
            "Verificar buildspec"
        ],
        correct: [1],
        explanation: "CodePipeline service role precisa de permissões para TODOS os serviços que o pipeline usa: CodeBuild (StartBuild), CodeDeploy (CreateDeployment), S3 (GetObject/PutObject), CloudFormation (CreateStack), etc.",
        topic: "codepipeline",
        domain: "sdlc"
    },
    {
        id: 'sdlc_017',
        question: "Uma equipe quer que o pipeline faça deploy automático em staging após cada commit, mas deploy em produção apenas com tag de release. Como?",
        options: [
            "Dois pipelines completamente separados",
            "CodePipeline com source trigger em branch main (staging auto) + segundo pipeline com source trigger em tag pattern (v*) para produção",
            "Manual approval para tudo",
            "Cron job para produção"
        ],
        correct: [1],
        explanation: "Dois pipelines ou pipeline com conditions: Pipeline 1 (staging): trigger em push to main, deploy automático. Pipeline 2 (prod): trigger em tag v* (release). Separação clara de ambientes com triggers diferentes.",
        topic: "codepipeline",
        domain: "sdlc"
    },
    {
        id: 'sdlc_018',
        question: "Uma aplicação em ECS precisa de zero-downtime deployment com capacidade de testar a nova versão antes de receber tráfego real. Qual strategy?",
        options: [
            "Rolling update",
            "Blue/Green com CodeDeploy: test traffic listener no ALB permite testar green antes de shift + hooks de validação",
            "Recreate deployment",
            "In-place"
        ],
        correct: [1],
        explanation: "Blue/Green ECS: ALB com 2 listeners (prod:443 + test:8443). Green task set recebe tráfego no test listener. Hooks validam. Se OK, shift tráfego prod para green. Test listener permite QA antes do shift.",
        topic: "codedeploy",
        domain: "sdlc"
    },
    {
        id: 'sdlc_019',
        question: "Um build no CodeBuild precisa de Docker para construir imagens. Como habilitar Docker-in-Docker?",
        options: [
            "Não é possível no CodeBuild",
            "Habilitar 'privileged mode' no CodeBuild project + usar imagem com Docker instalado (aws/codebuild/standard)",
            "Instalar Docker no buildspec",
            "Usar EC2 ao invés"
        ],
        correct: [1],
        explanation: "Privileged mode: necessário para Docker daemon dentro do container CodeBuild. Imagem aws/codebuild/standard já tem Docker. buildspec: docker build, docker push para ECR. Sem privileged mode, docker commands falham.",
        topic: "codebuild",
        domain: "sdlc"
    },
    {
        id: 'sdlc_020',
        question: "Uma empresa quer implementar deployment em múltiplas contas AWS (dev, staging, prod) com um único pipeline. Como?",
        options: [
            "Credenciais de cada conta no pipeline",
            "CodePipeline cross-account: assume IAM roles em cada conta destino + artifact bucket com KMS key compartilhada + bucket policy cross-account",
            "Pipelines separados por conta",
            "Usar Organizations apenas"
        ],
        correct: [1],
        explanation: "Cross-account pipeline: pipeline na conta central assume roles nas contas destino (AssumeRole). Artifact S3 bucket com KMS CMK acessível por todas as contas. Bucket policy permite acesso cross-account. Centraliza orquestração.",
        topic: "codepipeline",
        domain: "sdlc"
    },
    {
        id: 'sdlc_021',
        question: "CodeDeploy AppSpec file para EC2 define hooks. Qual é a ordem correta dos lifecycle events?",
        options: [
            "Install → BeforeInstall → AfterInstall → Start",
            "BeforeInstall → Install → AfterInstall → ApplicationStart → ValidateService",
            "ApplicationStop → Install → ApplicationStart",
            "Download → Install → Configure → Start"
        ],
        correct: [1],
        explanation: "Lifecycle order: ApplicationStop → BeforeInstall → Install → AfterInstall → ApplicationStart → ValidateService. Cada hook pode executar scripts. ValidateService é onde testes de saúde rodam.",
        topic: "codedeploy",
        domain: "sdlc"
    },
    {
        id: 'sdlc_022',
        question: "Uma equipe quer detectar vulnerabilidades em dependências (npm, pip) durante o build antes de deploy. Como integrar no pipeline?",
        options: [
            "Verificar manualmente",
            "CodeBuild step com ferramentas de SCA (npm audit, pip-audit, Snyk) + falhar build se vulnerabilidades críticas encontradas",
            "Verificar após deploy",
            "Usar apenas WAF"
        ],
        correct: [1],
        explanation: "Shift-left security: SCA (Software Composition Analysis) no build. npm audit / pip-audit / Snyk detectam CVEs em dependências. buildspec: se critical encontrado, exit 1 (falha build). Pipeline não avança com vulnerabilidades.",
        topic: "practices",
        domain: "sdlc"
    },
    {
        id: 'sdlc_023',
        question: "Uma empresa quer que cada PR trigger um ambiente de preview temporário para review. Como implementar?",
        options: [
            "Compartilhar ambiente de staging",
            "Webhook de PR → Lambda/CodeBuild → CloudFormation cria stack temporário com nome do PR → URL de preview → destroy após merge/close",
            "Deploy em produção com feature flag",
            "Screenshots no PR"
        ],
        correct: [1],
        explanation: "Preview environments: PR aberto → trigger cria stack (CloudFormation/CDK) com nome único (pr-123) → URL de preview para reviewer. PR merged/closed → trigger destrói stack. Custo apenas durante review.",
        topic: "practices",
        domain: "sdlc"
    },
    {
        id: 'sdlc_024',
        question: "CodePipeline precisa fazer deploy de Lambda function. Qual método é recomendado para zero-downtime com rollback?",
        options: [
            "Upload direto do ZIP",
            "CloudFormation com AWS::Lambda::Function + CodeDeploy para traffic shifting (alias com weighted routing)",
            "Atualizar function code via CLI",
            "Criar nova function a cada deploy"
        ],
        correct: [1],
        explanation: "SAM/CloudFormation + CodeDeploy: publica nova version, CodeDeploy faz traffic shifting no alias (Canary/Linear). Se CloudWatch alarm dispara, rollback automático para version anterior. Zero downtime, safe rollback.",
        topic: "codedeploy",
        domain: "sdlc"
    },
    {
        id: 'sdlc_025',
        question: "Uma equipe quer métricas de DORA (Deployment Frequency, Lead Time, MTTR, Change Failure Rate) para seu pipeline. Como coletar?",
        options: [
            "Planilha manual",
            "CodePipeline events → EventBridge → Lambda → CloudWatch custom metrics + dashboard com as 4 métricas DORA",
            "Apenas contar deploys",
            "Usar third-party apenas"
        ],
        correct: [1],
        explanation: "DORA metrics via events: Pipeline execution events (frequency, lead time), CodeDeploy rollback events (change failure rate), alarm duration (MTTR). EventBridge captura, Lambda processa, CloudWatch visualiza.",
        topic: "practices",
        domain: "sdlc"
    }
];

window.sdlcQuestions = sdlcQuestions;


// SDLC Automation - Lote 2 (questões 26-50)
const sdlcQuestions2 = [
    {
        id: 'sdlc_026',
        question: "Uma empresa quer que builds falhem automaticamente se cobertura de testes cair abaixo de 80%. Como implementar no CodeBuild?",
        options: [
            "Verificar manualmente após build",
            "No buildspec.yml post_build: verificar coverage report e exit 1 se < 80%",
            "Configurar no CodePipeline",
            "Usar CloudWatch alarm"
        ],
        correct: [1],
        explanation: "buildspec post_build phase: script verifica coverage report gerado na build phase. Se coverage < threshold, exit 1 falha o build. Pipeline não avança. Quality gate automatizado.",
        topic: "codebuild",
        domain: "sdlc"
    },
    {
        id: 'sdlc_027',
        question: "CodeDeploy Blue/Green para EC2 Auto Scaling: como funciona o processo?",
        options: [
            "Atualiza instâncias existentes",
            "Cria novo ASG (green) com nova versão → testa → redireciona ELB → termina ASG antigo (blue)",
            "Swap de AMIs no ASG existente",
            "Rolling update no ASG"
        ],
        correct: [1],
        explanation: "Blue/Green EC2: CodeDeploy cria novo ASG com nova launch config/template. Após health checks, ELB redireciona tráfego. ASG antigo é terminado após wait time configurável (rollback window).",
        topic: "codedeploy",
        domain: "sdlc"
    },
    {
        id: 'sdlc_028',
        question: "Uma equipe quer notificação no Slack quando pipeline falha. Como implementar?",
        options: [
            "Verificar console manualmente",
            "CodePipeline event → EventBridge rule → SNS → AWS Chatbot → Slack channel",
            "Email apenas",
            "CloudWatch Dashboard"
        ],
        correct: [1],
        explanation: "EventBridge captura eventos de falha do CodePipeline. SNS como target. AWS Chatbot integra SNS com Slack/Teams. Notificação instantânea com detalhes do erro no canal da equipe.",
        topic: "codepipeline",
        domain: "sdlc"
    },
    {
        id: 'sdlc_029',
        question: "Uma aplicação precisa de database migrations durante deploy. Como integrar migrations no pipeline sem downtime?",
        options: [
            "Rodar migrations manualmente antes do deploy",
            "CodePipeline stage com CodeBuild que executa migrations backward-compatible ANTES do deploy de código",
            "Migrations no startup da aplicação",
            "Migrations após deploy"
        ],
        correct: [1],
        explanation: "Migrations backward-compatible primeiro: adicionar colunas (não remover), depois deploy código que usa novas colunas, depois cleanup de colunas antigas. Expand-contract pattern. Zero downtime.",
        topic: "practices",
        domain: "sdlc"
    },
    {
        id: 'sdlc_030',
        question: "CodeBuild precisa acessar um secret do Secrets Manager durante o build (ex: API key para testes). Como configurar de forma segura?",
        options: [
            "Hardcode no buildspec",
            "Referência ao secret no buildspec env/secrets-manager + IAM role do CodeBuild com permissão secretsmanager:GetSecretValue",
            "Variável de ambiente plain text",
            "Arquivo .env no repositório"
        ],
        correct: [1],
        explanation: "buildspec env.secrets-manager: referencia secret por ARN. CodeBuild injeta valor em runtime como env var. IAM role precisa de GetSecretValue. Secret nunca aparece no código ou logs.",
        topic: "codebuild",
        domain: "sdlc"
    },
    {
        id: 'sdlc_031',
        question: "Uma empresa quer implementar feature flags para separar deploy de release. Qual serviço AWS?",
        options: [
            "Parameter Store apenas",
            "AWS AppConfig com feature flags + gradual rollout + instant rollback",
            "Lambda environment variables",
            "S3 config file"
        ],
        correct: [1],
        explanation: "AppConfig: feature flags gerenciados com validação, gradual rollout (% de usuários), instant rollback, monitoring integration. Separa deploy (código) de release (ativar feature).",
        topic: "practices",
        domain: "sdlc"
    },
    {
        id: 'sdlc_032',
        question: "Um pipeline precisa fazer build de múltiplos microservices em paralelo a partir de um monorepo. Como estruturar?",
        options: [
            "Um pipeline por serviço com trigger separado",
            "CodePipeline com source trigger em monorepo + parallel actions no build stage (um CodeBuild por serviço) + change detection por path",
            "Build sequencial de todos",
            "Um único build para tudo"
        ],
        correct: [1],
        explanation: "Monorepo: trigger detecta quais paths mudaram. Parallel CodeBuild actions compilam apenas serviços afetados. Reduz tempo total e evita builds desnecessários. EventBridge pode filtrar por path.",
        topic: "codepipeline",
        domain: "sdlc"
    },
    {
        id: 'sdlc_033',
        question: "CodeDeploy em Lambda: qual é a diferença entre Canary, Linear e AllAtOnce?",
        options: [
            "Não há diferença para Lambda",
            "Canary: X% por N minutos depois 100%. Linear: X% a cada N minutos. AllAtOnce: 100% imediato",
            "Canary é mais lento que Linear",
            "AllAtOnce é o mais seguro"
        ],
        correct: [1],
        explanation: "Canary10Percent5Minutes: 10% por 5min, depois 100%. Linear10PercentEvery1Minute: +10% a cada minuto. AllAtOnce: shift imediato. Canary detecta problemas com menor blast radius.",
        topic: "codedeploy",
        domain: "sdlc"
    },
    {
        id: 'sdlc_034',
        question: "Uma empresa quer garantir que imagens Docker no ECR sejam escaneadas para vulnerabilidades antes de deploy. Como automatizar?",
        options: [
            "Scan manual periódico",
            "ECR image scanning on push + EventBridge rule que bloqueia deploy se CRITICAL findings + CodePipeline gate",
            "Scan apenas em produção",
            "Usar apenas imagens oficiais"
        ],
        correct: [1],
        explanation: "ECR scan on push: detecta CVEs automaticamente. EventBridge captura scan results. Se CRITICAL: Lambda atualiza SSM parameter ou falha pipeline gate. Shift-left security para containers.",
        topic: "practices",
        domain: "sdlc"
    },
    {
        id: 'sdlc_035',
        question: "Uma equipe usa CodePipeline mas quer migrar para GitHub Actions mantendo deploy na AWS. Como integrar?",
        options: [
            "Não é possível",
            "GitHub Actions com aws-actions/configure-aws-credentials (OIDC) + aws CLI para deploy S3/ECS/Lambda",
            "Manter CodePipeline obrigatoriamente",
            "Usar Jenkins"
        ],
        correct: [1],
        explanation: "GitHub Actions + OIDC: assume IAM role sem access keys estáticas. Actions fazem build/test. Deploy via AWS CLI/SDK (S3 sync, ECS update-service, Lambda update). Flexibilidade do GitHub com segurança AWS.",
        topic: "practices",
        domain: "sdlc"
    },
    {
        id: 'sdlc_036',
        question: "Um deploy CodeDeploy em EC2 falha no hook AfterInstall com 'Script timeout'. O que verificar?",
        options: [
            "Verificar IAM permissions",
            "Script no hook está demorando mais que o timeout configurado no appspec.yml — aumentar timeout ou otimizar script",
            "Verificar VPC settings",
            "Verificar CodePipeline"
        ],
        correct: [1],
        explanation: "AppSpec hooks têm timeout padrão (3600s). Se script demora mais, falha. Soluções: otimizar script, aumentar timeout no appspec (timeout: 1800), ou mover lógica pesada para background.",
        topic: "codedeploy",
        domain: "sdlc"
    },
    {
        id: 'sdlc_037',
        question: "Uma empresa quer implementar continuous deployment (sem aprovação manual) mas com safety net. Qual abordagem?",
        options: [
            "Deploy direto sem proteção",
            "Canary deployment + CloudWatch alarms + automatic rollback se métricas degradam + feature flags para kill switch",
            "Apenas testes unitários",
            "Deploy apenas em horário comercial"
        ],
        correct: [1],
        explanation: "Continuous deployment seguro: canary (blast radius pequeno), alarms monitoram métricas reais (latência, erros), rollback automático se alarm dispara, feature flags para desabilitar sem redeploy.",
        topic: "practices",
        domain: "sdlc"
    },
    {
        id: 'sdlc_038',
        question: "CodePipeline precisa fazer deploy em ECS Fargate. Qual action type usar?",
        options: [
            "CodeDeploy action (ECS)",
            "ECS deploy action (standard rolling) OU CodeDeploy ECS (Blue/Green) — depende da strategy desejada",
            "CloudFormation deploy",
            "Lambda invoke"
        ],
        correct: [1],
        explanation: "Duas opções: 1) ECS standard action: rolling update (simples). 2) CodeDeploy ECS action: Blue/Green com canary/linear (mais controle, test traffic, hooks). Escolher baseado em requisitos de rollback.",
        topic: "codepipeline",
        domain: "sdlc"
    },
    {
        id: 'sdlc_039',
        question: "Uma equipe quer que o pipeline execute testes de carga antes de deploy em produção e falhe se latência P99 > 500ms. Como?",
        options: [
            "Testes manuais",
            "CodeBuild stage que executa load test tool (k6/Locust) contra staging → analisa resultados → exit 1 se P99 > threshold",
            "Testar em produção",
            "CloudWatch alarm apenas"
        ],
        correct: [1],
        explanation: "Load testing no pipeline: CodeBuild executa ferramenta (k6, Locust, Artillery) contra staging. Script analisa output (P99 latency). Se > threshold, exit 1 bloqueia deploy em prod. Performance gate.",
        topic: "codebuild",
        domain: "sdlc"
    },
    {
        id: 'sdlc_040',
        question: "Uma empresa quer rollback automático se o deploy causar aumento de erros 5xx acima de 5% por mais de 2 minutos. Como configurar?",
        options: [
            "Monitorar manualmente",
            "CloudWatch Alarm (5xx rate > 5%, period 1min, evaluation 2) + CodeDeploy automatic rollback on alarm",
            "Rollback após 1 hora",
            "Usar Blue/Green sem alarm"
        ],
        correct: [1],
        explanation: "CloudWatch Alarm: métrica HTTPCode_Target_5XX_Count / RequestCount > 0.05, period 60s, evaluation periods 2. CodeDeploy deployment group: enable automatic rollback when alarm triggers.",
        topic: "codedeploy",
        domain: "sdlc"
    },
    {
        id: 'sdlc_041',
        question: "Uma empresa quer que cada commit em develop trigger CI (build+test) mas deploy só aconteça quando merge para main. Como?",
        options: [
            "Um pipeline para tudo",
            "Pipeline CI: source=develop, stages=build+test (sem deploy). Pipeline CD: source=main, stages=deploy. Ou um pipeline com branch conditions",
            "Manual trigger para deploy",
            "Cron job para deploy"
        ],
        correct: [1],
        explanation: "Separação CI/CD: CI pipeline trigger em develop (valida código). CD pipeline trigger em main (deploya). Merge de develop→main via PR (com CI obrigatório). Garante que main é sempre deployable.",
        topic: "codepipeline",
        domain: "sdlc"
    },
    {
        id: 'sdlc_042',
        question: "CodeBuild reporta 'BUILD_GENERAL1_SMALL: not enough memory'. Como resolver?",
        options: [
            "Otimizar código apenas",
            "Mudar compute type para BUILD_GENERAL1_MEDIUM ou LARGE no CodeBuild project configuration",
            "Adicionar swap",
            "Usar cache"
        ],
        correct: [1],
        explanation: "CodeBuild compute types: SMALL (3GB RAM), MEDIUM (7GB), LARGE (15GB), 2XLARGE (145GB). Se build precisa de mais memória (ex: compilar projeto grande), upgrade o compute type.",
        topic: "codebuild",
        domain: "sdlc"
    },
    {
        id: 'sdlc_043',
        question: "Uma empresa quer implementar semantic versioning automático baseado em conventional commits. Como integrar no pipeline?",
        options: [
            "Versionar manualmente",
            "CodeBuild step que analisa commit messages (feat/fix/breaking) e bumpa version automaticamente + cria tag",
            "Usar timestamp como versão",
            "Incrementar sempre major"
        ],
        correct: [1],
        explanation: "Conventional commits + semantic-release: feat = minor bump, fix = patch, BREAKING CHANGE = major. CodeBuild executa tool (semantic-release) que analisa commits, bumpa version, cria tag e changelog.",
        topic: "practices",
        domain: "sdlc"
    },
    {
        id: 'sdlc_044',
        question: "Uma aplicação serverless (SAM) precisa de pipeline CI/CD. Qual é a forma mais simples de configurar?",
        options: [
            "CodePipeline manual",
            "SAM Pipelines (sam pipeline init) — gera pipeline completo (CodePipeline + CodeBuild) com stages para cada ambiente",
            "Deploy manual com sam deploy",
            "CloudFormation apenas"
        ],
        correct: [1],
        explanation: "sam pipeline init: gera automaticamente CodePipeline + CodeBuild + IAM roles + stages (dev/staging/prod) para aplicações SAM. Inclui build, test, package e deploy. Bootstrap completo.",
        topic: "practices",
        domain: "sdlc"
    },
    {
        id: 'sdlc_045',
        question: "Uma empresa quer que deploys em produção só aconteçam em janelas de manutenção (terça e quinta, 2-4am). Como enforçar?",
        options: [
            "Disciplina da equipe",
            "CodePipeline com manual approval + SSM Maintenance Window que auto-aprova apenas no horário permitido",
            "Cron job",
            "Desabilitar pipeline fora do horário"
        ],
        correct: [1],
        explanation: "Maintenance windows: SSM Automation pode aprovar pending approvals apenas durante janela. Fora da janela, approval fica pendente. Alternativa: EventBridge scheduled rule que habilita/desabilita pipeline stage.",
        topic: "codepipeline",
        domain: "sdlc"
    },
    {
        id: 'sdlc_046',
        question: "CodeDeploy appspec.yml para ECS: quais são os hooks disponíveis para validação?",
        options: [
            "BeforeInstall e AfterInstall apenas",
            "BeforeInstall, AfterInstall, AfterAllowTestTraffic, BeforeAllowTraffic, AfterAllowTraffic",
            "Apenas ValidateService",
            "Não há hooks para ECS"
        ],
        correct: [1],
        explanation: "ECS hooks: AfterAllowTestTraffic (validar com test traffic antes de prod), BeforeAllowTraffic (última chance antes de shift), AfterAllowTraffic (validar após shift). Cada hook = Lambda function.",
        topic: "codedeploy",
        domain: "sdlc"
    },
    {
        id: 'sdlc_047',
        question: "Uma empresa quer rastrear qual commit causou um bug em produção. Como implementar traceability no pipeline?",
        options: [
            "Git blame manualmente",
            "Tags de deploy com commit SHA + CloudWatch Annotations no momento do deploy + CodeDeploy revision tracking",
            "Logs apenas",
            "Não é possível"
        ],
        correct: [1],
        explanation: "Traceability: cada deploy registra commit SHA (CodeDeploy revision). CloudWatch annotation marca momento do deploy no dashboard. Correlacionar: bug apareceu após deploy X = commit Y causou.",
        topic: "practices",
        domain: "sdlc"
    },
    {
        id: 'sdlc_048',
        question: "Uma equipe quer que o pipeline falhe se houver secrets (API keys, passwords) no código fonte. Como implementar?",
        options: [
            "Code review manual",
            "CodeBuild step com git-secrets ou trufflehog que escaneia código por padrões de secrets + exit 1 se encontrar",
            "Confiar no .gitignore",
            "Usar apenas variáveis de ambiente"
        ],
        correct: [1],
        explanation: "Secret scanning no CI: git-secrets, trufflehog, ou detect-secrets escaneiam código por padrões (AKIA*, private keys, passwords). Se encontrar, build falha. Previne leak antes de chegar ao repo.",
        topic: "practices",
        domain: "sdlc"
    },
    {
        id: 'sdlc_049',
        question: "Uma empresa tem 10 microservices com pipelines independentes. Quando service A deploya, precisa trigger testes de integração com services B e C. Como?",
        options: [
            "Testes manuais",
            "Pipeline A emite evento via EventBridge após deploy → trigger pipeline de integration tests que testa A+B+C juntos",
            "Testar apenas isoladamente",
            "Deploy todos juntos sempre"
        ],
        correct: [1],
        explanation: "Event-driven pipelines: deploy de A emite evento. EventBridge rule trigger pipeline de integration tests. Testa contratos entre serviços. Se falhar, alerta equipe (não rollback automático de A).",
        topic: "codepipeline",
        domain: "sdlc"
    },
    {
        id: 'sdlc_050',
        question: "Uma empresa quer medir 'time to production' — tempo desde commit até estar rodando em produção. Como instrumentar?",
        options: [
            "Cronômetro manual",
            "CodePipeline execution history (startTime → deploy complete) + custom CloudWatch metric + dashboard",
            "Apenas contar deploys por dia",
            "Git log timestamps"
        ],
        correct: [1],
        explanation: "Lead time for changes (DORA): CodePipeline registra start/end de cada execution. Custom metric: endTime - startTime. Dashboard mostra trend. Meta: reduzir continuamente. EventBridge events para cálculo preciso.",
        topic: "practices",
        domain: "sdlc"
    }
];

sdlcQuestions.push(...sdlcQuestions2);
