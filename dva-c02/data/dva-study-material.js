// DVA-C02 Material de Estudo Detalhado

const dvaStudyMaterial = {
    'development': {
        title: '⚡ Development with AWS Services',
        content: `
            <h4>Desenvolvimento com Serviços AWS (32% do exame)</h4>
            <p>Desenvolvimento, teste e deploy de aplicações usando serviços AWS.</p>
            
            <h4>AWS Lambda</h4>
            <ul>
                <li><strong>Serverless Computing:</strong> Executa código sem gerenciar servidores</li>
                <li><strong>Event-Driven:</strong> Triggers de S3, DynamoDB, API Gateway, SQS, SNS</li>
                <li><strong>Runtime Support:</strong> Node.js, Python, Java, C#, Go, Ruby, Custom Runtime</li>
                <li><strong>Memory & Timeout:</strong> 128MB-10GB RAM, timeout até 15 minutos</li>
                <li><strong>Environment Variables:</strong> Configuração sem hardcode no código</li>
                <li><strong>Layers:</strong> Compartilha bibliotecas entre funções</li>
                <li><strong>Provisioned Concurrency:</strong> Reduz cold starts</li>
            </ul>
            
            <h4>Amazon API Gateway</h4>
            <ul>
                <li><strong>REST APIs:</strong> APIs RESTful com recursos e métodos</li>
                <li><strong>HTTP APIs:</strong> Mais simples e barato que REST</li>
                <li><strong>WebSocket APIs:</strong> Comunicação bidirecional em tempo real</li>
                <li><strong>Integration Types:</strong> Lambda, HTTP, AWS Services, Mock</li>
                <li><strong>Authentication:</strong> IAM, Cognito, Lambda Authorizers, API Keys</li>
                <li><strong>Throttling:</strong> Rate limiting por cliente/método</li>
                <li><strong>Caching:</strong> Cache de responses para melhor performance</li>
            </ul>
            
            <h4>Amazon DynamoDB</h4>
            <ul>
                <li><strong>NoSQL Database:</strong> Chave-valor e documento, fully managed</li>
                <li><strong>Primary Keys:</strong> Partition key (obrigatório) + Sort key (opcional)</li>
                <li><strong>Global Secondary Index (GSI):</strong> Query por atributos não-chave</li>
                <li><strong>Local Secondary Index (LSI):</strong> Sort key alternativo</li>
                <li><strong>DynamoDB Streams:</strong> Captura mudanças em tempo real</li>
                <li><strong>DAX:</strong> Cache em memória com microsegundos de latência</li>
                <li><strong>On-Demand vs Provisioned:</strong> Billing models diferentes</li>
            </ul>
            
            <h4>Amazon S3</h4>
            <ul>
                <li><strong>Object Storage:</strong> Armazenamento de objetos até 5TB</li>
                <li><strong>Bucket Policies:</strong> Controle de acesso baseado em recursos</li>
                <li><strong>CORS:</strong> Cross-Origin Resource Sharing para web apps</li>
                <li><strong>Presigned URLs:</strong> Acesso temporário sem credenciais AWS</li>
                <li><strong>Event Notifications:</strong> Triggers para Lambda, SQS, SNS</li>
                <li><strong>Transfer Acceleration:</strong> Upload rápido via CloudFront</li>
                <li><strong>Multipart Upload:</strong> Upload paralelo para arquivos grandes</li>
            </ul>
            
            <h4>Messaging Services</h4>
            <ul>
                <li><strong>Amazon SQS:</strong> Filas de mensagens, decoupling de componentes</li>
                <li><strong>Amazon SNS:</strong> Pub/Sub messaging, fan-out pattern</li>
                <li><strong>Amazon EventBridge:</strong> Event bus para aplicações event-driven</li>
                <li><strong>AWS Step Functions:</strong> Orquestração de workflows serverless</li>
            </ul>
        `
    },
    'security': {
        title: '🔒 Security',
        content: `
            <h4>Segurança (26% do exame)</h4>
            <p>Implementação de autenticação, autorização e proteção de dados.</p>
            
            <h4>AWS IAM (Identity and Access Management)</h4>
            <ul>
                <li><strong>Users:</strong> Identidades permanentes para pessoas</li>
                <li><strong>Groups:</strong> Coleção de usuários com permissões similares</li>
                <li><strong>Roles:</strong> Identidades temporárias para serviços/aplicações</li>
                <li><strong>Policies:</strong> Documentos JSON que definem permissões</li>
                <li><strong>AssumeRole:</strong> Troca temporária de credenciais</li>
                <li><strong>Cross-Account Access:</strong> Acesso seguro entre contas</li>
                <li><strong>MFA:</strong> Multi-Factor Authentication para segurança extra</li>
            </ul>
            
            <h4>Amazon Cognito</h4>
            <ul>
                <li><strong>User Pools:</strong> Diretório de usuários para autenticação</li>
                <li><strong>Identity Pools:</strong> Credenciais AWS temporárias para usuários</li>
                <li><strong>Social Identity Providers:</strong> Login com Google, Facebook, Amazon</li>
                <li><strong>SAML/OIDC:</strong> Federação com provedores corporativos</li>
                <li><strong>JWT Tokens:</strong> ID, Access e Refresh tokens</li>
                <li><strong>Custom Attributes:</strong> Campos personalizados do usuário</li>
            </ul>
            
            <h4>AWS KMS (Key Management Service)</h4>
            <ul>
                <li><strong>Customer Managed Keys:</strong> Chaves criadas e gerenciadas pelo cliente</li>
                <li><strong>AWS Managed Keys:</strong> Chaves gerenciadas pela AWS para serviços</li>
                <li><strong>Envelope Encryption:</strong> Criptografia de dados com data keys</li>
                <li><strong>Key Rotation:</strong> Rotação automática anual de chaves</li>
                <li><strong>Cross-Region:</strong> Replicação de chaves entre regiões</li>
                <li><strong>Grants:</strong> Permissões temporárias para usar chaves</li>
            </ul>
            
            <h4>AWS Secrets Manager</h4>
            <ul>
                <li><strong>Secret Storage:</strong> Armazena senhas, API keys, tokens</li>
                <li><strong>Automatic Rotation:</strong> Rotação automática de credenciais</li>
                <li><strong>Integration:</strong> RDS, Redshift, DocumentDB rotation</li>
                <li><strong>Cross-Region Replication:</strong> Replica secrets entre regiões</li>
                <li><strong>Fine-grained Access:</strong> IAM policies para controle de acesso</li>
            </ul>
            
            <h4>Encryption</h4>
            <ul>
                <li><strong>Encryption in Transit:</strong> HTTPS, TLS, SSL para dados em movimento</li>
                <li><strong>Encryption at Rest:</strong> S3, EBS, RDS, DynamoDB encryption</li>
                <li><strong>Client-Side Encryption:</strong> Criptografia antes de enviar para AWS</li>
                <li><strong>Server-Side Encryption:</strong> AWS criptografa após receber dados</li>
            </ul>
        `
    },
    'deployment': {
        title: '🚀 Deployment',
        content: `
            <h4>Deployment (24% do exame)</h4>
            <p>Estratégias de deployment, CI/CD e automação de infraestrutura.</p>
            
            <h4>AWS CodeCommit</h4>
            <ul>
                <li><strong>Git Repository:</strong> Repositório Git privado e gerenciado</li>
                <li><strong>Integration:</strong> Integra com CodeBuild, CodePipeline</li>
                <li><strong>Security:</strong> Encryption at rest e in transit</li>
                <li><strong>Access Control:</strong> IAM policies para controle de acesso</li>
            </ul>
            
            <h4>AWS CodeBuild</h4>
            <ul>
                <li><strong>Build Service:</strong> Compila código, executa testes, gera artefatos</li>
                <li><strong>Build Environments:</strong> Docker containers com runtimes pré-configurados</li>
                <li><strong>buildspec.yml:</strong> Arquivo de configuração do build</li>
                <li><strong>Artifacts:</strong> Output armazenado no S3</li>
                <li><strong>Environment Variables:</strong> Configuração sem hardcode</li>
                <li><strong>VPC Support:</strong> Build em VPC privada</li>
            </ul>
            
            <h4>AWS CodeDeploy</h4>
            <ul>
                <li><strong>Deployment Service:</strong> Automatiza deploy para EC2, Lambda, ECS</li>
                <li><strong>Deployment Configurations:</strong> All-at-once, Rolling, Blue/Green</li>
                <li><strong>Application Revisions:</strong> Versões do código para deploy</li>
                <li><strong>Rollback:</strong> Rollback automático em caso de falha</li>
                <li><strong>Hooks:</strong> Scripts customizados durante deployment</li>
            </ul>
            
            <h4>AWS CodePipeline</h4>
            <ul>
                <li><strong>CI/CD Pipeline:</strong> Orquestra todo o processo de release</li>
                <li><strong>Stages:</strong> Source, Build, Test, Deploy</li>
                <li><strong>Actions:</strong> Tarefas dentro de cada stage</li>
                <li><strong>Artifacts:</strong> Output de um stage como input do próximo</li>
                <li><strong>Manual Approval:</strong> Gates manuais no pipeline</li>
            </ul>
            
            <h4>AWS CloudFormation</h4>
            <ul>
                <li><strong>Infrastructure as Code:</strong> Templates JSON/YAML para recursos</li>
                <li><strong>Stacks:</strong> Coleção de recursos gerenciados como unidade</li>
                <li><strong>Change Sets:</strong> Preview de mudanças antes de aplicar</li>
                <li><strong>Nested Stacks:</strong> Reutilização de templates</li>
                <li><strong>Cross-Stack References:</strong> Compartilha outputs entre stacks</li>
                <li><strong>Rollback:</strong> Rollback automático em caso de falha</li>
            </ul>
            
            <h4>AWS SAM (Serverless Application Model)</h4>
            <ul>
                <li><strong>Serverless Framework:</strong> Extensão do CloudFormation para serverless</li>
                <li><strong>SAM CLI:</strong> Ferramenta para build, test e deploy local</li>
                <li><strong>Local Testing:</strong> Testa Lambda functions localmente</li>
                <li><strong>API Gateway Integration:</strong> Simplifica criação de APIs</li>
            </ul>
        `
    },
    'troubleshooting': {
        title: '🔍 Troubleshooting & Optimization',
        content: `
            <h4>Troubleshooting & Optimization (18% do exame)</h4>
            <p>Monitoramento, debugging e otimização de aplicações AWS.</p>
            
            <h4>Amazon CloudWatch</h4>
            <ul>
                <li><strong>Metrics:</strong> Dados numéricos sobre recursos AWS</li>
                <li><strong>Custom Metrics:</strong> Métricas personalizadas da aplicação</li>
                <li><strong>Alarms:</strong> Notificações baseadas em thresholds</li>
                <li><strong>Dashboards:</strong> Visualização de métricas em tempo real</li>
                <li><strong>Events/EventBridge:</strong> Responde a mudanças de estado</li>
                <li><strong>Logs:</strong> Centralização e análise de logs</li>
            </ul>
            
            <h4>AWS X-Ray</h4>
            <ul>
                <li><strong>Distributed Tracing:</strong> Rastreia requests através de serviços</li>
                <li><strong>Service Map:</strong> Visualiza arquitetura e dependências</li>
                <li><strong>Trace Analysis:</strong> Identifica bottlenecks e erros</li>
                <li><strong>Sampling:</strong> Controla quantidade de traces coletados</li>
                <li><strong>Annotations:</strong> Metadados indexáveis para filtering</li>
                <li><strong>Subsegments:</strong> Detalhamento de operações dentro de segments</li>
            </ul>
            
            <h4>AWS CloudTrail</h4>
            <ul>
                <li><strong>API Logging:</strong> Registra todas as chamadas de API</li>
                <li><strong>Event History:</strong> 90 dias de eventos gratuitos</li>
                <li><strong>Trails:</strong> Logging contínuo para S3</li>
                <li><strong>Data Events:</strong> Logs de acesso a objetos S3/Lambda</li>
                <li><strong>Insights:</strong> Detecta atividades incomuns</li>
            </ul>
            
            <h4>Performance Optimization</h4>
            <ul>
                <li><strong>Lambda Optimization:</strong> Memory sizing, provisioned concurrency, layers</li>
                <li><strong>DynamoDB Optimization:</strong> Partition key design, GSI usage, caching</li>
                <li><strong>API Gateway Optimization:</strong> Caching, compression, throttling</li>
                <li><strong>S3 Optimization:</strong> Transfer acceleration, multipart upload, CloudFront</li>
            </ul>
            
            <h4>Error Handling</h4>
            <ul>
                <li><strong>Lambda Error Handling:</strong> Dead letter queues, retry logic</li>
                <li><strong>API Gateway Error Handling:</strong> Custom error responses, CORS</li>
                <li><strong>SQS Error Handling:</strong> Visibility timeout, dead letter queues</li>
                <li><strong>Step Functions Error Handling:</strong> Retry, catch, fail states</li>
            </ul>
            
            <h4>Cost Optimization</h4>
            <ul>
                <li><strong>Lambda Cost:</strong> Right-sizing memory, provisioned concurrency usage</li>
                <li><strong>DynamoDB Cost:</strong> On-demand vs provisioned, auto-scaling</li>
                <li><strong>S3 Cost:</strong> Storage classes, lifecycle policies</li>
                <li><strong>API Gateway Cost:</strong> HTTP vs REST APIs, caching strategies</li>
            </ul>
        `
    }
};

window.dvaStudyMaterial = dvaStudyMaterial;