// Keyword Signals — Palavras-chave do exame que indicam a resposta correta
// Usar como referência no material de estudo de TODAS as certificações

const keywordSignals = {
    // === UNIVERSAL (todas as certs) ===
    universal: [
        { keyword: "least operational overhead", signal: "Serverless (Lambda, Fargate, Bedrock, managed services)", exams: "ALL" },
        { keyword: "most cost-effective", signal: "Spot Instances, S3 IA/Glacier, Reserved/Savings Plans, right-sizing", exams: "ALL" },
        { keyword: "highest availability", signal: "Multi-AZ, Multi-Region, Global Accelerator, Route 53 failover", exams: "ALL" },
        { keyword: "minimum downtime", signal: "Blue/Green deploy, Multi-AZ failover, Read Replicas promotion", exams: "ALL" },
        { keyword: "most secure", signal: "Encryption (KMS), Private subnets, VPC endpoints, least privilege", exams: "ALL" },
        { keyword: "decouple / loosely coupled", signal: "SQS, SNS, EventBridge, Step Functions", exams: "ALL" },
        { keyword: "real-time", signal: "Kinesis Data Streams, ElastiCache, DynamoDB, Lambda", exams: "ALL" },
        { keyword: "near real-time", signal: "Kinesis Firehose, DynamoDB Streams", exams: "ALL" },
        { keyword: "serverless", signal: "Lambda, Fargate, DynamoDB, API Gateway, S3, Bedrock", exams: "ALL" },
        { keyword: "without managing infrastructure", signal: "Managed/Serverless services (= sem EC2)", exams: "ALL" }
    ],

    // === CLF-C02 ===
    clf: [
        { keyword: "shared responsibility", signal: "AWS: segurança DA nuvem. Cliente: segurança NA nuvem", exams: "CLF" },
        { keyword: "pay-as-you-go", signal: "Sem upfront, paga pelo uso real", exams: "CLF" },
        { keyword: "global content delivery", signal: "CloudFront (CDN)", exams: "CLF" },
        { keyword: "DNS", signal: "Route 53", exams: "CLF" },
        { keyword: "compliance reports", signal: "AWS Artifact", exams: "CLF" },
        { keyword: "cost alerts / budget", signal: "AWS Budgets (alertas), Cost Explorer (análise)", exams: "CLF" },
        { keyword: "technical account manager", signal: "Enterprise Support", exams: "CLF" },
        { keyword: "all API calls / audit", signal: "CloudTrail", exams: "CLF" },
        { keyword: "metrics and alarms", signal: "CloudWatch", exams: "CLF" }
    ],

    // === DVA-C02 ===
    dva: [
        { keyword: "environment variables / secrets", signal: "Secrets Manager ou Parameter Store (SecureString)", exams: "DVA" },
        { keyword: "X-Ray", signal: "Tracing distribuído, debug latência", exams: "DVA" },
        { keyword: "DynamoDB throttling", signal: "DAX (cache), exponential backoff, provisioned → on-demand", exams: "DVA" },
        { keyword: "API caching", signal: "API Gateway caching ou CloudFront", exams: "DVA" },
        { keyword: "blue/green deployment", signal: "CodeDeploy com ECS ou Lambda aliases", exams: "DVA" },
        { keyword: "canary deployment", signal: "Lambda aliases com traffic shifting", exams: "DVA" },
        { keyword: "SQS dead letter queue", signal: "Mensagens que falharam N vezes → DLQ para análise", exams: "DVA" },
        { keyword: "Lambda cold start", signal: "Provisioned Concurrency ou SnapStart (Java)", exams: "DVA" },
        { keyword: "idempotent", signal: "DynamoDB conditional writes, SQS deduplication", exams: "DVA" }
    ],

    // === SAA-C03 ===
    saa: [
        { keyword: "disaster recovery / RPO / RTO", signal: "Pilot Light < Warm Standby < Multi-Site (custo vs velocidade)", exams: "SAA" },
        { keyword: "data at rest encryption", signal: "KMS (SSE-KMS), S3 default encryption", exams: "SAA" },
        { keyword: "cross-region replication", signal: "S3 CRR, Aurora Global Database, DynamoDB Global Tables", exams: "SAA" },
        { keyword: "hybrid cloud / on-premises", signal: "Direct Connect, Storage Gateway, Outposts", exams: "SAA" },
        { keyword: "millions of requests", signal: "DynamoDB, ElastiCache, CloudFront", exams: "SAA" },
        { keyword: "petabytes / data lake", signal: "S3 + Athena + Glue, ou Redshift para warehouse", exams: "SAA" },
        { keyword: "static website", signal: "S3 + CloudFront", exams: "SAA" },
        { keyword: "private connection to AWS", signal: "Direct Connect (dedicado) ou VPN (internet criptografada)", exams: "SAA" },
        { keyword: "least privilege access", signal: "IAM policies granulares, Resource-based policies", exams: "SAA" }
    ],

    // === DOP-C02 ===
    dop: [
        { keyword: "infrastructure as code", signal: "CloudFormation, CDK, Terraform", exams: "DOP" },
        { keyword: "automatic rollback", signal: "CodeDeploy com CloudWatch alarms", exams: "DOP" },
        { keyword: "configuration drift", signal: "AWS Config rules + auto-remediation", exams: "DOP" },
        { keyword: "immutable infrastructure", signal: "AMI baking + Auto Scaling replace", exams: "DOP" },
        { keyword: "multi-account governance", signal: "Organizations + SCPs + Control Tower", exams: "DOP" },
        { keyword: "centralized logging", signal: "CloudWatch Logs + cross-account subscriptions ou S3 central", exams: "DOP" },
        { keyword: "automated patching", signal: "Systems Manager Patch Manager", exams: "DOP" },
        { keyword: "pipeline approval", signal: "CodePipeline manual approval action", exams: "DOP" },
        { keyword: "container orchestration", signal: "ECS/EKS + Fargate (serverless) ou EC2 (controle)", exams: "DOP" }
    ],

    // === AIF-C01 ===
    aif: [
        { keyword: "no ML expertise needed", signal: "SageMaker Canvas (no-code) ou Bedrock (API)", exams: "AIF" },
        { keyword: "reduce hallucination", signal: "RAG + Guardrails + temperatura baixa + grounding", exams: "AIF" },
        { keyword: "detect bias", signal: "SageMaker Clarify", exams: "AIF" },
        { keyword: "explain model decisions", signal: "SHAP values, SageMaker Clarify explainability", exams: "AIF" },
        { keyword: "data changes frequently", signal: "RAG (não fine-tuning)", exams: "AIF" },
        { keyword: "change model behavior/style", signal: "Fine-tuning (não RAG)", exams: "AIF" },
        { keyword: "multiple foundation models", signal: "Amazon Bedrock (API unificada)", exams: "AIF" },
        { keyword: "train custom model", signal: "SageMaker (não Bedrock)", exams: "AIF" },
        { keyword: "monitor model in production", signal: "SageMaker Model Monitor (drift detection)", exams: "AIF" },
        { keyword: "blocked topics / content filter", signal: "Bedrock Guardrails", exams: "AIF" }
    ]
};

window.keywordSignals = keywordSignals;
