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
