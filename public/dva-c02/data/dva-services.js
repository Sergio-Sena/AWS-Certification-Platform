// DVA-C02 Services by Domain

const dvaServices = {
    development: [
        {
            id: 'lambda',
            title: '⚡ AWS Lambda',
            description: 'Serverless computing, cold starts, performance'
        },
        {
            id: 'apigateway',
            title: '🌐 API Gateway',
            description: 'REST/HTTP APIs, rate limiting, CORS'
        },
        {
            id: 'dynamodb',
            title: '🗄️ DynamoDB',
            description: 'NoSQL, throttling, GSI, DAX'
        },
        {
            id: 's3',
            title: '🪣 Amazon S3',
            description: 'Object storage, lifecycle, security'
        },
        {
            id: 'messaging',
            title: '📨 SNS & SQS',
            description: 'Messaging, queues, notifications'
        },
        {
            id: 'stepfunctions',
            title: '🔄 Step Functions',
            description: 'Workflow orchestration, state machines'
        }
    ],
    security: [
        {
            id: 'iam',
            title: '👤 AWS IAM',
            description: 'Policies, roles, least privilege'
        },
        {
            id: 'cognito',
            title: '🔐 AWS Cognito',
            description: 'Authentication, user management'
        },
        {
            id: 'kms',
            title: '🔑 AWS KMS',
            description: 'Key management, encryption'
        },
        {
            id: 'secrets-manager',
            title: '🔒 Secrets Manager',
            description: 'Secrets storage, rotation'
        },
        {
            id: 'parameter-store',
            title: '⚙️ Parameter Store',
            description: 'Configuration management'
        },
        {
            id: 'waf',
            title: '🛡️ AWS WAF',
            description: 'Web application firewall'
        }
    ],
    deployment: [
        {
            id: 'codecommit',
            title: '📝 CodeCommit',
            description: 'Git repositories, source control'
        },
        {
            id: 'codebuild',
            title: '🔨 CodeBuild',
            description: 'Build service, CI/CD'
        },
        {
            id: 'codedeploy',
            title: '🚀 CodeDeploy',
            description: 'Deployment automation'
        },
        {
            id: 'codepipeline',
            title: '🔄 CodePipeline',
            description: 'CI/CD pipeline orchestration'
        },
        {
            id: 'cloudformation',
            title: '📋 CloudFormation',
            description: 'Infrastructure as Code'
        },
        {
            id: 'sam',
            title: '⚡ AWS SAM',
            description: 'Serverless Application Model'
        }
    ],
    troubleshooting: [
        {
            id: 'cloudwatch',
            title: '📊 CloudWatch',
            description: 'Monitoring, metrics, alarms'
        },
        {
            id: 'xray',
            title: '🔍 X-Ray',
            description: 'Distributed tracing, debugging'
        },
        {
            id: 'cloudtrail',
            title: '📋 CloudTrail',
            description: 'API logging, audit trails'
        },
        {
            id: 'config',
            title: '⚙️ AWS Config',
            description: 'Configuration compliance'
        },
        {
            id: 'systems-manager',
            title: '🔧 Systems Manager',
            description: 'Operational insights, automation'
        },
        {
            id: 'trusted-advisor',
            title: '💡 Trusted Advisor',
            description: 'Best practices, optimization'
        }
    ]
};

window.dvaServices = dvaServices;