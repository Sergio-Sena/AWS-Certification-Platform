// DOMAIN 3: CLOUD TECHNOLOGY & SERVICES - 66 questões adicionais (34% total = 68 questões)

const technologyQuestions = [
    {
        id: 111,
        question: "O que é Amazon RDS?",
        options: ["Serviço de banco de dados relacional gerenciado", "Serviço de armazenamento", "Serviço de computação", "Serviço de rede"],
        correct: [0],
        explanation: "Amazon RDS é um serviço de banco de dados relacional gerenciado que suporta MySQL, PostgreSQL, Oracle, SQL Server e outros.",
        topic: "technology", domain: "technology"
    },
    {
        id: 112,
        question: "Qual é a diferença entre Amazon S3 e Amazon EBS?",
        options: ["S3 é armazenamento de objetos, EBS é armazenamento de blocos", "Não há diferença", "EBS é armazenamento de objetos, S3 é armazenamento de blocos", "Ambos são iguais"],
        correct: [0],
        explanation: "S3 fornece armazenamento de objetos via internet, EBS fornece armazenamento de blocos para instâncias EC2.",
        topic: "technology", domain: "technology"
    },
    {
        id: 113,
        question: "O que é Amazon Lambda?",
        options: ["Serviço de computação serverless", "Serviço de banco de dados", "Serviço de armazenamento", "Serviço de rede"],
        correct: [0],
        explanation: "AWS Lambda executa código sem provisionar ou gerenciar servidores, cobrando apenas pelo tempo de execução.",
        topic: "technology", domain: "technology"
    },
    {
        id: 114,
        question: "Qual serviço AWS fornece CDN (Content Delivery Network)?",
        options: ["Amazon CloudFront", "Amazon S3", "Amazon EC2", "Amazon RDS"],
        correct: [0],
        explanation: "Amazon CloudFront é o serviço de CDN da AWS que entrega conteúdo com baixa latência globalmente.",
        topic: "technology", domain: "technology"
    },
    {
        id: 115,
        question: "O que é Amazon VPC?",
        options: ["Rede privada virtual na nuvem AWS", "Serviço de computação", "Serviço de armazenamento", "Serviço de banco de dados"],
        correct: [0],
        explanation: "Amazon VPC permite criar uma rede privada virtual isolada na nuvem AWS.",
        topic: "technology", domain: "technology"
    },
    {
        id: 116,
        question: "Qual serviço AWS fornece balanceamento de carga?",
        options: ["Elastic Load Balancer (ELB)", "Amazon EC2", "Amazon S3", "Amazon RDS"],
        correct: [0],
        explanation: "ELB distribui automaticamente tráfego de entrada entre múltiplas instâncias EC2.",
        topic: "technology", domain: "technology"
    },
    {
        id: 117,
        question: "O que é Amazon DynamoDB?",
        options: ["Banco de dados NoSQL gerenciado", "Banco de dados relacional", "Serviço de armazenamento", "Serviço de computação"],
        correct: [0],
        explanation: "DynamoDB é um banco de dados NoSQL totalmente gerenciado com performance consistente.",
        topic: "technology", domain: "technology"
    },
    {
        id: 118,
        question: "Qual serviço AWS fornece monitoramento e observabilidade?",
        options: ["Amazon CloudWatch", "Amazon S3", "Amazon EC2", "Amazon RDS"],
        correct: [0],
        explanation: "CloudWatch coleta e monitora métricas, logs e eventos de recursos AWS.",
        topic: "technology", domain: "technology"
    },
    {
        id: 119,
        question: "O que é Amazon Route 53?",
        options: ["Serviço de DNS gerenciado", "Serviço de armazenamento", "Serviço de computação", "Serviço de banco de dados"],
        correct: [0],
        explanation: "Route 53 é um serviço de DNS altamente disponível e escalável.",
        topic: "technology", domain: "technology"
    },
    {
        id: 120,
        question: "Qual serviço AWS fornece filas de mensagens?",
        options: ["Amazon SQS", "Amazon S3", "Amazon EC2", "Amazon RDS"],
        correct: [0],
        explanation: "Amazon SQS é um serviço de filas de mensagens totalmente gerenciado.",
        topic: "technology", domain: "technology"
    },
    {
        id: 121,
        question: "O que é Amazon SNS?",
        options: ["Serviço de notificações pub/sub", "Serviço de armazenamento", "Serviço de computação", "Serviço de banco de dados"],
        correct: [0],
        explanation: "SNS é um serviço de mensagens pub/sub para envio de notificações.",
        topic: "technology", domain: "technology"
    },
    {
        id: 122,
        question: "Qual serviço AWS fornece armazenamento de arquivos compartilhado?",
        options: ["Amazon EFS", "Amazon S3", "Amazon EBS", "Amazon RDS"],
        correct: [0],
        explanation: "EFS fornece sistema de arquivos NFS totalmente gerenciado para uso com EC2.",
        topic: "technology", domain: "technology"
    },
    {
        id: 123,
        question: "O que é AWS Auto Scaling?",
        options: ["Ajusta automaticamente capacidade de recursos", "Serviço de backup", "Serviço de monitoramento", "Serviço de rede"],
        correct: [0],
        explanation: "Auto Scaling ajusta automaticamente o número de instâncias EC2 baseado na demanda.",
        topic: "technology", domain: "technology"
    },
    {
        id: 124,
        question: "Qual serviço AWS fornece data warehouse?",
        options: ["Amazon Redshift", "Amazon RDS", "Amazon DynamoDB", "Amazon S3"],
        correct: [0],
        explanation: "Redshift é um serviço de data warehouse totalmente gerenciado para analytics.",
        topic: "technology", domain: "technology"
    },
    {
        id: 125,
        question: "O que é Amazon ElastiCache?",
        options: ["Serviço de cache em memória", "Serviço de armazenamento", "Serviço de computação", "Serviço de banco de dados"],
        correct: [0],
        explanation: "ElastiCache fornece cache em memória gerenciado (Redis e Memcached).",
        topic: "technology", domain: "technology"
    },
    {
        id: 126,
        question: "Qual serviço AWS fornece busca e análise?",
        options: ["Amazon Elasticsearch Service", "Amazon RDS", "Amazon S3", "Amazon EC2"],
        correct: [0],
        explanation: "Elasticsearch Service fornece busca, análise e visualização de dados em tempo real.",
        topic: "technology", domain: "technology"
    },
    {
        id: 127,
        question: "O que é AWS Elastic Beanstalk?",
        options: ["Plataforma para deploy de aplicações web", "Serviço de banco de dados", "Serviço de armazenamento", "Serviço de rede"],
        correct: [0],
        explanation: "Elastic Beanstalk facilita o deploy e gerenciamento de aplicações web na AWS.",
        topic: "technology", domain: "technology"
    },
    {
        id: 128,
        question: "Qual serviço AWS fornece containers gerenciados?",
        options: ["Amazon ECS", "Amazon EC2", "Amazon S3", "Amazon RDS"],
        correct: [0],
        explanation: "ECS é um serviço de orquestração de containers totalmente gerenciado.",
        topic: "technology", domain: "technology"
    },
    {
        id: 129,
        question: "O que é Amazon EKS?",
        options: ["Kubernetes gerenciado", "Serviço de armazenamento", "Serviço de banco de dados", "Serviço de rede"],
        correct: [0],
        explanation: "EKS é um serviço Kubernetes totalmente gerenciado na AWS.",
        topic: "technology", domain: "technology"
    },
    {
        id: 130,
        question: "Qual serviço AWS fornece API Gateway?",
        options: ["Amazon API Gateway", "Amazon EC2", "Amazon S3", "Amazon RDS"],
        correct: [0],
        explanation: "API Gateway permite criar, publicar e gerenciar APIs REST e WebSocket.",
        topic: "technology", domain: "technology"
    },
    {
        id: 131,
        question: "O que é AWS Step Functions?",
        options: ["Orquestração de workflows serverless", "Serviço de banco de dados", "Serviço de armazenamento", "Serviço de rede"],
        correct: [0],
        explanation: "Step Functions coordena múltiplos serviços AWS em workflows serverless.",
        topic: "technology", domain: "technology"
    },
    {
        id: 132,
        question: "Qual serviço AWS fornece streaming de dados?",
        options: ["Amazon Kinesis", "Amazon S3", "Amazon EC2", "Amazon RDS"],
        correct: [0],
        explanation: "Kinesis coleta, processa e analisa dados de streaming em tempo real.",
        topic: "technology", domain: "technology"
    },
    {
        id: 133,
        question: "O que é Amazon Athena?",
        options: ["Serviço de consulta SQL serverless", "Banco de dados relacional", "Serviço de armazenamento", "Serviço de computação"],
        correct: [0],
        explanation: "Athena permite consultar dados no S3 usando SQL padrão sem infraestrutura.",
        topic: "technology", domain: "technology"
    },
    {
        id: 134,
        question: "Qual serviço AWS fornece machine learning gerenciado?",
        options: ["Amazon SageMaker", "Amazon EC2", "Amazon S3", "Amazon RDS"],
        correct: [0],
        explanation: "SageMaker é uma plataforma totalmente gerenciada para machine learning.",
        topic: "technology", domain: "technology"
    },
    {
        id: 135,
        question: "O que é AWS Glue?",
        options: ["Serviço de ETL serverless", "Serviço de banco de dados", "Serviço de armazenamento", "Serviço de rede"],
        correct: [0],
        explanation: "Glue é um serviço de ETL totalmente gerenciado para preparar dados para analytics.",
        topic: "technology", domain: "technology"
    },
    {
        id: 136,
        question: "Qual serviço AWS fornece IoT core?",
        options: ["AWS IoT Core", "Amazon EC2", "Amazon S3", "Amazon RDS"],
        correct: [0],
        explanation: "IoT Core conecta dispositivos IoT à nuvem AWS de forma segura.",
        topic: "technology", domain: "technology"
    },
    {
        id: 137,
        question: "O que é Amazon WorkSpaces?",
        options: ["Desktops virtuais na nuvem", "Serviço de armazenamento", "Serviço de banco de dados", "Serviço de rede"],
        correct: [0],
        explanation: "WorkSpaces fornece desktops virtuais seguros na nuvem AWS.",
        topic: "technology", domain: "technology"
    },
    {
        id: 138,
        question: "Qual serviço AWS fornece backup gerenciado?",
        options: ["AWS Backup", "Amazon S3", "Amazon EC2", "Amazon RDS"],
        correct: [0],
        explanation: "AWS Backup centraliza e automatiza backup de recursos AWS.",
        topic: "technology", domain: "technology"
    },
    {
        id: 139,
        question: "O que é Amazon Lightsail?",
        options: ["Plataforma simplificada para aplicações pequenas", "Serviço de banco de dados", "Serviço de armazenamento", "Serviço de rede"],
        correct: [0],
        explanation: "Lightsail oferece servidores virtuais, armazenamento e rede com preços previsíveis.",
        topic: "technology", domain: "technology"
    },
    {
        id: 140,
        question: "Qual serviço AWS fornece migração de dados?",
        options: ["AWS DataSync", "Amazon S3", "Amazon EC2", "Amazon RDS"],
        correct: [0],
        explanation: "DataSync transfere dados entre on-premises e AWS de forma segura e rápida.",
        topic: "technology", domain: "technology"
    },
    {
        id: 141,
        question: "O que é AWS Direct Connect?",
        options: ["Conexão de rede dedicada para AWS", "Serviço de armazenamento", "Serviço de computação", "Serviço de banco de dados"],
        correct: [0],
        explanation: "Direct Connect estabelece conexão de rede dedicada entre on-premises e AWS.",
        topic: "technology", domain: "technology"
    },
    {
        id: 142,
        question: "Qual serviço AWS fornece transcodificação de mídia?",
        options: ["Amazon Elastic Transcoder", "Amazon S3", "Amazon EC2", "Amazon RDS"],
        correct: [0],
        explanation: "Elastic Transcoder converte arquivos de mídia para diferentes formatos na nuvem.",
        topic: "technology", domain: "technology"
    },
    {
        id: 143,
        question: "O que é Amazon Rekognition?",
        options: ["Serviço de análise de imagem e vídeo", "Serviço de armazenamento", "Serviço de computação", "Serviço de banco de dados"],
        correct: [0],
        explanation: "Rekognition analisa imagens e vídeos usando machine learning para detectar objetos, pessoas e atividades.",
        topic: "technology", domain: "technology"
    },
    {
        id: 144,
        question: "Qual serviço AWS fornece text-to-speech?",
        options: ["Amazon Polly", "Amazon S3", "Amazon EC2", "Amazon RDS"],
        correct: [0],
        explanation: "Polly converte texto em fala realista usando tecnologias de deep learning.",
        topic: "technology", domain: "technology"
    },
    {
        id: 145,
        question: "O que é Amazon Comprehend?",
        options: ["Serviço de processamento de linguagem natural", "Serviço de armazenamento", "Serviço de computação", "Serviço de banco de dados"],
        correct: [0],
        explanation: "Comprehend usa machine learning para encontrar insights em textos.",
        topic: "technology", domain: "technology"
    },
    {
        id: 146,
        question: "Qual serviço AWS fornece tradução automática?",
        options: ["Amazon Translate", "Amazon S3", "Amazon EC2", "Amazon RDS"],
        correct: [0],
        explanation: "Translate fornece tradução de texto rápida e de alta qualidade.",
        topic: "technology", domain: "technology"
    },
    {
        id: 147,
        question: "O que é Amazon Lex?",
        options: ["Serviço para construir chatbots", "Serviço de armazenamento", "Serviço de computação", "Serviço de banco de dados"],
        correct: [0],
        explanation: "Lex permite construir interfaces conversacionais usando voz e texto.",
        topic: "technology", domain: "technology"
    },
    {
        id: 148,
        question: "Qual serviço AWS fornece blockchain gerenciado?",
        options: ["Amazon Managed Blockchain", "Amazon S3", "Amazon EC2", "Amazon RDS"],
        correct: [0],
        explanation: "Managed Blockchain facilita criar e gerenciar redes blockchain escaláveis.",
        topic: "technology", domain: "technology"
    },
    {
        id: 149,
        question: "O que é AWS Fargate?",
        options: ["Computação serverless para containers", "Serviço de armazenamento", "Serviço de banco de dados", "Serviço de rede"],
        correct: [0],
        explanation: "Fargate executa containers sem gerenciar servidores ou clusters.",
        topic: "technology", domain: "technology"
    },
    {
        id: 150,
        question: "Qual serviço AWS fornece edge computing?",
        options: ["AWS Wavelength", "Amazon S3", "Amazon EC2", "Amazon RDS"],
        correct: [0],
        explanation: "Wavelength entrega aplicações ultra-baixa latência para dispositivos 5G.",
        topic: "technology", domain: "technology"
    },
    {
        id: 151,
        question: "O que é Amazon DocumentDB?",
        options: ["Banco de dados compatível com MongoDB", "Banco de dados relacional", "Serviço de armazenamento", "Serviço de computação"],
        correct: [0],
        explanation: "DocumentDB é um banco de dados de documentos totalmente gerenciado compatível com MongoDB.",
        topic: "technology", domain: "technology"
    },
    {
        id: 152,
        question: "Qual serviço AWS fornece time series database?",
        options: ["Amazon Timestream", "Amazon RDS", "Amazon DynamoDB", "Amazon S3"],
        correct: [0],
        explanation: "Timestream é um banco de dados de séries temporais totalmente gerenciado.",
        topic: "technology", domain: "technology"
    },
    {
        id: 153,
        question: "O que é Amazon Neptune?",
        options: ["Banco de dados de grafos", "Banco de dados relacional", "Serviço de armazenamento", "Serviço de computação"],
        correct: [0],
        explanation: "Neptune é um banco de dados de grafos totalmente gerenciado.",
        topic: "technology", domain: "technology"
    },
    {
        id: 154,
        question: "Qual serviço AWS fornece quantum computing?",
        options: ["Amazon Braket", "Amazon EC2", "Amazon S3", "Amazon RDS"],
        correct: [0],
        explanation: "Braket é um serviço de computação quântica totalmente gerenciado.",
        topic: "technology", domain: "technology"
    },
    {
        id: 155,
        question: "O que é AWS Outposts?",
        options: ["Infraestrutura AWS on-premises", "Serviço de armazenamento", "Serviço de banco de dados", "Serviço de rede"],
        correct: [0],
        explanation: "Outposts traz serviços AWS para infraestrutura on-premises.",
        topic: "technology", domain: "technology"
    },
    {
        id: 156,
        question: "Qual serviço AWS fornece desktop as a service?",
        options: ["Amazon WorkSpaces", "Amazon EC2", "Amazon S3", "Amazon RDS"],
        correct: [0],
        explanation: "WorkSpaces fornece desktops virtuais seguros acessíveis de qualquer lugar.",
        topic: "technology", domain: "technology"
    },
    {
        id: 157,
        question: "O que é Amazon AppStream 2.0?",
        options: ["Streaming de aplicações", "Serviço de armazenamento", "Serviço de banco de dados", "Serviço de rede"],
        correct: [0],
        explanation: "AppStream 2.0 transmite aplicações desktop para qualquer dispositivo.",
        topic: "technology", domain: "technology"
    },
    {
        id: 158,
        question: "Qual serviço AWS fornece email marketing?",
        options: ["Amazon SES", "Amazon SNS", "Amazon SQS", "Amazon S3"],
        correct: [0],
        explanation: "SES é um serviço de email escalável e econômico.",
        topic: "technology", domain: "technology"
    },
    {
        id: 159,
        question: "O que é AWS X-Ray?",
        options: ["Serviço de tracing distribuído", "Serviço de armazenamento", "Serviço de banco de dados", "Serviço de rede"],
        correct: [0],
        explanation: "X-Ray ajuda a analisar e debugar aplicações distribuídas.",
        topic: "technology", domain: "technology"
    },
    {
        id: 160,
        question: "Qual serviço AWS fornece service mesh?",
        options: ["AWS App Mesh", "Amazon EC2", "Amazon S3", "Amazon RDS"],
        correct: [0],
        explanation: "App Mesh facilita monitorar e controlar microservices.",
        topic: "technology", domain: "technology"
    },
    {
        id: 161,
        question: "O que é Amazon EventBridge?",
        options: ["Barramento de eventos serverless", "Serviço de armazenamento", "Serviço de banco de dados", "Serviço de rede"],
        correct: [0],
        explanation: "EventBridge conecta aplicações usando eventos de várias fontes.",
        topic: "technology", domain: "technology"
    },
    {
        id: 162,
        question: "Qual serviço AWS fornece code repository?",
        options: ["AWS CodeCommit", "Amazon S3", "Amazon EC2", "Amazon RDS"],
        correct: [0],
        explanation: "CodeCommit é um serviço de controle de versão Git totalmente gerenciado.",
        topic: "technology", domain: "technology"
    },
    {
        id: 163,
        question: "O que é AWS CodeBuild?",
        options: ["Serviço de build e teste de código", "Serviço de armazenamento", "Serviço de banco de dados", "Serviço de rede"],
        correct: [0],
        explanation: "CodeBuild compila código, executa testes e produz pacotes de software.",
        topic: "technology", domain: "technology"
    },
    {
        id: 164,
        question: "Qual serviço AWS fornece deployment automation?",
        options: ["AWS CodeDeploy", "Amazon S3", "Amazon EC2", "Amazon RDS"],
        correct: [0],
        explanation: "CodeDeploy automatiza deployments de aplicações para instâncias EC2, Lambda e on-premises.",
        topic: "technology", domain: "technology"
    },
    {
        id: 165,
        question: "O que é AWS CodePipeline?",
        options: ["Serviço de CI/CD", "Serviço de armazenamento", "Serviço de banco de dados", "Serviço de rede"],
        correct: [0],
        explanation: "CodePipeline automatiza pipelines de release para atualizações rápidas e confiáveis.",
        topic: "technology", domain: "technology"
    },
    {
        id: 166,
        question: "Qual serviço AWS fornece container registry?",
        options: ["Amazon ECR", "Amazon S3", "Amazon EC2", "Amazon RDS"],
        correct: [0],
        explanation: "ECR é um registro de containers Docker totalmente gerenciado.",
        topic: "technology", domain: "technology"
    },
    {
        id: 167,
        question: "O que é AWS Cloud9?",
        options: ["IDE baseado em nuvem", "Serviço de armazenamento", "Serviço de banco de dados", "Serviço de rede"],
        correct: [0],
        explanation: "Cloud9 é um IDE baseado em nuvem para escrever, executar e debugar código.",
        topic: "technology", domain: "technology"
    },
    {
        id: 168,
        question: "Qual serviço AWS fornece application performance monitoring?",
        options: ["AWS X-Ray", "Amazon CloudWatch", "Amazon S3", "Amazon EC2"],
        correct: [0],
        explanation: "X-Ray fornece tracing end-to-end para análise de performance de aplicações.",
        topic: "technology", domain: "technology"
    },
    {
        id: 169,
        question: "O que é Amazon QuickSight?",
        options: ["Serviço de business intelligence", "Serviço de armazenamento", "Serviço de banco de dados", "Serviço de rede"],
        correct: [0],
        explanation: "QuickSight é um serviço de analytics e visualização de dados escalável.",
        topic: "technology", domain: "technology"
    },
    {
        id: 170,
        question: "Qual serviço AWS fornece data lake?",
        options: ["Amazon S3", "Amazon RDS", "Amazon EC2", "Amazon DynamoDB"],
        correct: [0],
        explanation: "S3 é frequentemente usado como foundation para data lakes devido à sua escalabilidade e durabilidade.",
        topic: "technology", domain: "technology"
    },
    {
        id: 171,
        question: "O que é AWS Lake Formation?",
        options: ["Serviço para construir data lakes", "Serviço de armazenamento", "Serviço de banco de dados", "Serviço de rede"],
        correct: [0],
        explanation: "Lake Formation facilita configurar data lakes seguros em dias ao invés de meses.",
        topic: "technology", domain: "technology"
    },
    {
        id: 172,
        question: "Qual serviço AWS fornece managed Apache Kafka?",
        options: ["Amazon MSK", "Amazon SQS", "Amazon SNS", "Amazon S3"],
        correct: [0],
        explanation: "MSK (Managed Streaming for Apache Kafka) é Apache Kafka totalmente gerenciado.",
        topic: "technology", domain: "technology"
    },
    {
        id: 173,
        question: "O que é Amazon Personalize?",
        options: ["Serviço de recomendações ML", "Serviço de armazenamento", "Serviço de banco de dados", "Serviço de rede"],
        correct: [0],
        explanation: "Personalize permite criar recomendações personalizadas usando machine learning.",
        topic: "technology", domain: "technology"
    },
    {
        id: 174,
        question: "Qual serviço AWS fornece fraud detection?",
        options: ["Amazon Fraud Detector", "Amazon GuardDuty", "Amazon Inspector", "Amazon Macie"],
        correct: [0],
        explanation: "Fraud Detector usa machine learning para identificar atividades fraudulentas online.",
        topic: "technology", domain: "technology"
    },
    {
        id: 175,
        question: "O que é Amazon Forecast?",
        options: ["Serviço de previsão usando ML", "Serviço de armazenamento", "Serviço de banco de dados", "Serviço de rede"],
        correct: [0],
        explanation: "Forecast usa machine learning para gerar previsões de negócio precisas.",
        topic: "technology", domain: "technology"
    },
    {
        id: 176,
        question: "Qual serviço AWS fornece contact center?",
        options: ["Amazon Connect", "Amazon Chime", "Amazon WorkSpaces", "Amazon AppStream"],
        correct: [0],
        explanation: "Connect é um contact center na nuvem que melhora experiência do cliente.",
        topic: "technology", domain: "technology"
    }
];

window.technologyQuestions = technologyQuestions;