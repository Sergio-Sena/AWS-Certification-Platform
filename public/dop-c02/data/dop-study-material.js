// DOP-C02 - Material de Estudo (6 domínios)
// DevOps Engineer Professional - 75q / 180min / 75%

const dopStudyMaterial = {
    'sdlc-automation': {
        title: '🔄 SDLC Automation',
        weight: 22,
        content: `
            <div class="study-section">
                <h4>📌 Conceitos-chave (22% do exame):</h4>
                <ul>
                    <li><strong>CI/CD Pipelines:</strong> CodePipeline orquestra, CodeBuild compila/testa, CodeDeploy implanta</li>
                    <li><strong>Deployment Strategies:</strong> In-place, Rolling, Blue/Green, Canary, Linear</li>
                    <li><strong>Branching Strategies:</strong> GitFlow, Trunk-based, Feature branches</li>
                    <li><strong>Testing:</strong> Unit, Integration, E2E, Load, Security (shift-left)</li>
                    <li><strong>Artifact Management:</strong> CodeArtifact, ECR, S3 para artifacts</li>
                </ul>

                <h4>🔑 Serviços AWS:</h4>
                <table>
                    <tr><th>Serviço</th><th>Função</th><th>Detalhe</th></tr>
                    <tr><td>CodePipeline</td><td>Orquestração CI/CD</td><td>Source→Build→Test→Deploy stages</td></tr>
                    <tr><td>CodeBuild</td><td>Build & Test</td><td>Managed build, buildspec.yml, custom images</td></tr>
                    <tr><td>CodeDeploy</td><td>Deployment</td><td>EC2, ECS, Lambda. AppSpec file</td></tr>
                    <tr><td>CodeCommit</td><td>Git repository</td><td>Managed Git (sendo descontinuado)</td></tr>
                    <tr><td>CodeArtifact</td><td>Package manager</td><td>npm, pip, Maven artifacts</td></tr>
                    <tr><td>ECR</td><td>Container registry</td><td>Docker images, scan vulnerabilities</td></tr>
                </table>

                <h4>🚀 Deployment Strategies:</h4>
                <table>
                    <tr><th>Strategy</th><th>Downtime</th><th>Rollback</th><th>Quando usar</th></tr>
                    <tr><td>All-at-once</td><td>Sim</td><td>Redeploy</td><td>Dev/test apenas</td></tr>
                    <tr><td>Rolling</td><td>Mínimo</td><td>Rolling back</td><td>Prod com tolerância</td></tr>
                    <tr><td>Blue/Green</td><td>Zero</td><td>Instantâneo (swap)</td><td>Prod crítico</td></tr>
                    <tr><td>Canary</td><td>Zero</td><td>Rápido</td><td>Validar com % pequeno</td></tr>
                    <tr><td>Linear</td><td>Zero</td><td>Rápido</td><td>Rollout gradual controlado</td></tr>
                </table>
            </div>
        `
    },
    'config-iac': {
        title: '🏗️ Configuration Management & IaC',
        weight: 17,
        content: `
            <div class="study-section">
                <h4>📌 Conceitos-chave (17% do exame):</h4>
                <ul>
                    <li><strong>CloudFormation:</strong> Templates YAML/JSON, stacks, change sets, drift detection, nested stacks, StackSets</li>
                    <li><strong>CDK:</strong> IaC com linguagens de programação (TypeScript, Python), synth → CloudFormation</li>
                    <li><strong>Systems Manager:</strong> Patch Manager, State Manager, Run Command, Parameter Store, Automation</li>
                    <li><strong>OpsWorks:</strong> Chef/Puppet managed (legacy)</li>
                    <li><strong>Immutable Infrastructure:</strong> Replace, don't patch. AMIs, containers</li>
                </ul>

                <h4>🔑 CloudFormation Deep Dive:</h4>
                <table>
                    <tr><th>Feature</th><th>Uso</th></tr>
                    <tr><td>Change Sets</td><td>Preview de mudanças antes de aplicar</td></tr>
                    <tr><td>Drift Detection</td><td>Detectar mudanças manuais fora do template</td></tr>
                    <tr><td>StackSets</td><td>Deploy multi-account/multi-region</td></tr>
                    <tr><td>Nested Stacks</td><td>Modularizar templates grandes</td></tr>
                    <tr><td>Custom Resources</td><td>Lambda para lógica custom no stack</td></tr>
                    <tr><td>cfn-signal/WaitCondition</td><td>Aguardar instância ficar ready</td></tr>
                    <tr><td>DeletionPolicy: Retain</td><td>Preservar recurso ao deletar stack</td></tr>
                </table>

                <h4>🔧 Systems Manager:</h4>
                <ul>
                    <li><strong>Parameter Store:</strong> Config centralizada (plain/encrypted), hierárquica, versionada</li>
                    <li><strong>Patch Manager:</strong> Patching automatizado com baselines e maintenance windows</li>
                    <li><strong>State Manager:</strong> Manter estado desejado (associações)</li>
                    <li><strong>Run Command:</strong> Executar comandos remotamente sem SSH</li>
                    <li><strong>Automation:</strong> Runbooks para tarefas operacionais</li>
                    <li><strong>Session Manager:</strong> Acesso shell sem porta 22</li>
                </ul>
            </div>
        `
    },
    'resilient-cloud': {
        title: '🛡️ Resilient Cloud Solutions',
        weight: 15,
        content: `
            <div class="study-section">
                <h4>📌 Conceitos-chave (15% do exame):</h4>
                <ul>
                    <li><strong>Multi-AZ/Multi-Region:</strong> HA patterns, failover automático</li>
                    <li><strong>Auto Scaling:</strong> Policies, predictive, scheduled, warm pools</li>
                    <li><strong>DR Strategies:</strong> Backup&Restore, Pilot Light, Warm Standby, Active-Active</li>
                    <li><strong>Self-healing:</strong> Health checks, auto-replacement, auto-recovery</li>
                    <li><strong>Data replication:</strong> S3 CRR, RDS Multi-AZ, Aurora Global, DynamoDB Global Tables</li>
                </ul>

                <h4>🔑 Patterns de resiliência para DevOps:</h4>
                <table>
                    <tr><th>Pattern</th><th>Implementação AWS</th></tr>
                    <tr><td>Blue/Green DR</td><td>Route 53 failover + ASG em região secundária</td></tr>
                    <tr><td>Self-healing</td><td>ASG + health checks + auto-replace unhealthy</td></tr>
                    <tr><td>Chaos Engineering</td><td>AWS Fault Injection Simulator (FIS)</td></tr>
                    <tr><td>Immutable deploys</td><td>New ASG → swap ALB → terminate old</td></tr>
                    <tr><td>Circuit breaker</td><td>App Mesh + retry policies</td></tr>
                </table>
            </div>
        `
    },
    'monitoring-logging': {
        title: '📊 Monitoring & Logging',
        weight: 15,
        content: `
            <div class="study-section">
                <h4>📌 Conceitos-chave (15% do exame):</h4>
                <ul>
                    <li><strong>CloudWatch:</strong> Metrics, Logs, Alarms, Dashboards, Insights, Anomaly Detection</li>
                    <li><strong>X-Ray:</strong> Distributed tracing, service map, segments, subsegments</li>
                    <li><strong>EventBridge:</strong> Event-driven automation, rules, targets, event buses</li>
                    <li><strong>CloudTrail:</strong> API audit, management events, data events, Insights</li>
                    <li><strong>Observability:</strong> Metrics + Logs + Traces (3 pillars)</li>
                </ul>

                <h4>🔑 CloudWatch Deep Dive:</h4>
                <table>
                    <tr><th>Feature</th><th>Uso</th></tr>
                    <tr><td>Custom Metrics</td><td>Métricas de aplicação (PutMetricData)</td></tr>
                    <tr><td>Metric Filters</td><td>Extrair métricas de logs</td></tr>
                    <tr><td>Composite Alarms</td><td>Combinar múltiplos alarms (AND/OR)</td></tr>
                    <tr><td>Anomaly Detection</td><td>ML para detectar desvios automáticos</td></tr>
                    <tr><td>Logs Insights</td><td>Query language para logs</td></tr>
                    <tr><td>Container Insights</td><td>Métricas ECS/EKS</td></tr>
                    <tr><td>Lambda Insights</td><td>Performance de Lambda functions</td></tr>
                </table>

                <h4>🔍 X-Ray:</h4>
                <ul>
                    <li><strong>Service Map:</strong> Visualização de dependências entre serviços</li>
                    <li><strong>Traces:</strong> Request completo end-to-end</li>
                    <li><strong>Annotations:</strong> Key-value para filtrar traces</li>
                    <li><strong>Metadata:</strong> Dados adicionais não-indexados</li>
                    <li><strong>Sampling:</strong> Controlar % de requests traced</li>
                </ul>
            </div>
        `
    },
    'incident-response': {
        title: '🚨 Incident & Event Response',
        weight: 14,
        content: `
            <div class="study-section">
                <h4>📌 Conceitos-chave (14% do exame):</h4>
                <ul>
                    <li><strong>Event-driven automation:</strong> EventBridge → Lambda/SSM para resposta automática</li>
                    <li><strong>Runbooks:</strong> SSM Automation documents para procedimentos padronizados</li>
                    <li><strong>Incident Management:</strong> AWS Systems Manager Incident Manager</li>
                    <li><strong>Auto-remediation:</strong> Config Rules + SSM Automation para corrigir automaticamente</li>
                    <li><strong>Escalation:</strong> SNS, PagerDuty, ChatOps (AWS Chatbot)</li>
                </ul>

                <h4>🔑 Automação de resposta:</h4>
                <table>
                    <tr><th>Evento</th><th>Detecção</th><th>Resposta automática</th></tr>
                    <tr><td>Security Group aberto</td><td>Config Rule</td><td>SSM Automation fecha SG</td></tr>
                    <tr><td>EC2 unhealthy</td><td>CloudWatch Alarm</td><td>ASG replace instance</td></tr>
                    <tr><td>Credential exposed</td><td>GuardDuty</td><td>Lambda desabilita key + notifica</td></tr>
                    <tr><td>High error rate</td><td>CloudWatch Anomaly</td><td>Rollback via CodeDeploy</td></tr>
                    <tr><td>DDoS detected</td><td>Shield Advanced</td><td>WAF rate limiting automático</td></tr>
                </table>

                <h4>📋 SSM Automation Runbooks:</h4>
                <ul>
                    <li><strong>AWS-managed:</strong> AWS-RestartEC2Instance, AWS-StopEC2Instance</li>
                    <li><strong>Custom:</strong> Criar runbooks com steps (aws:executeScript, aws:invokeLambda)</li>
                    <li><strong>Approval:</strong> Steps que requerem aprovação humana</li>
                    <li><strong>Cross-account:</strong> Executar em múltiplas contas via Organizations</li>
                </ul>
            </div>
        `
    },
    'security-compliance': {
        title: '🔒 Security & Compliance',
        weight: 17,
        content: `
            <div class="study-section">
                <h4>📌 Conceitos-chave (17% do exame):</h4>
                <ul>
                    <li><strong>IAM:</strong> Policies, roles, cross-account, permission boundaries, SCPs</li>
                    <li><strong>Secrets:</strong> Secrets Manager (rotação), Parameter Store (config)</li>
                    <li><strong>Encryption:</strong> KMS, CMK, envelope encryption, key policies</li>
                    <li><strong>Compliance:</strong> Config Rules, conformance packs, Security Hub</li>
                    <li><strong>Pipeline Security:</strong> Scan de código, SAST/DAST, image scanning</li>
                </ul>

                <h4>🔑 Security no Pipeline CI/CD:</h4>
                <table>
                    <tr><th>Stage</th><th>Security Check</th><th>Ferramenta</th></tr>
                    <tr><td>Source</td><td>Branch protection, signed commits</td><td>Git hooks, CodeCommit</td></tr>
                    <tr><td>Build</td><td>SAST, dependency scan</td><td>CodeGuru, Snyk, SonarQube</td></tr>
                    <tr><td>Test</td><td>DAST, penetration testing</td><td>Inspector, third-party</td></tr>
                    <tr><td>Artifact</td><td>Image scanning, signing</td><td>ECR scan, Signer</td></tr>
                    <tr><td>Deploy</td><td>Least privilege, encryption</td><td>IAM roles, KMS</td></tr>
                    <tr><td>Runtime</td><td>Monitoring, anomaly detection</td><td>GuardDuty, Security Hub</td></tr>
                </table>

                <h4>🏛️ Compliance as Code:</h4>
                <ul>
                    <li><strong>AWS Config:</strong> Rules avaliam compliance continuamente</li>
                    <li><strong>Conformance Packs:</strong> Conjunto de rules por framework (CIS, PCI)</li>
                    <li><strong>Security Hub:</strong> Aggregação de findings + compliance scores</li>
                    <li><strong>Audit Manager:</strong> Coleta evidências para auditorias</li>
                    <li><strong>Organizations SCPs:</strong> Guardrails preventivos</li>
                </ul>
            </div>
        `
    }
};

window.dopStudyMaterial = dopStudyMaterial;
