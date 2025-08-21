// SAA-C03 Material de Estudo

const saaStudyMaterial = {
    resilient: {
        title: "🏗️ Resilient Architectures",
        content: `
            <h4>Conceitos de Resiliência (30% do exame)</h4>
            <p>Arquiteturas resilientes são projetadas para resistir a falhas e se recuperar rapidamente.</p>
            
            <h4>Multi-AZ Deployments</h4>
            <ul>
                <li><strong>Amazon RDS Multi-AZ:</strong> Replicação síncrona para instância standby em AZ diferente</li>
                <li><strong>EC2 Multi-AZ:</strong> Distribui instâncias em múltiplas AZs para alta disponibilidade</li>
                <li><strong>EBS Multi-AZ:</strong> Snapshots automaticamente replicados entre AZs</li>
            </ul>
            
            <h4>Load Balancing</h4>
            <ul>
                <li><strong>Application Load Balancer (ALB):</strong> Layer 7, ideal para HTTP/HTTPS, suporte a containers</li>
                <li><strong>Network Load Balancer (NLB):</strong> Layer 4, ultra performance, IP estático</li>
                <li><strong>Gateway Load Balancer:</strong> Layer 3, para appliances de segurança</li>
                <li><strong>Classic Load Balancer:</strong> Legacy, Layer 4 e 7 básico</li>
            </ul>
            
            <h4>Auto Scaling</h4>
            <ul>
                <li><strong>Auto Scaling Groups:</strong> Ajusta automaticamente número de instâncias EC2</li>
                <li><strong>Scaling Policies:</strong> Target tracking, step scaling, simple scaling</li>
                <li><strong>Predictive Scaling:</strong> Usa machine learning para antecipar demanda</li>
            </ul>
            
            <h4>Disaster Recovery Strategies</h4>
            <ul>
                <li><strong>Backup and Restore:</strong> RTO/RPO em horas, menor custo</li>
                <li><strong>Pilot Light:</strong> Core components sempre rodando, RTO em minutos</li>
                <li><strong>Warm Standby:</strong> Versão reduzida sempre rodando, escala quando necessário</li>
                <li><strong>Multi-Site Active/Active:</strong> RTO/RPO mínimos, maior custo</li>
            </ul>
            
            <h4>Serviços Chave</h4>
            <ul>
                <li><strong>AWS Backup:</strong> Backup centralizado e automatizado</li>
                <li><strong>Route 53 Health Checks:</strong> Failover automático baseado em saúde</li>
                <li><strong>S3 Cross-Region Replication:</strong> Replicação automática entre regiões</li>
                <li><strong>CloudFormation:</strong> Infrastructure as Code para consistência</li>
            </ul>
        `
    },
    performance: {
        title: "⚡ High-Performing Architectures",
        content: `
            <h4>Arquiteturas de Alto Desempenho (28% do exame)</h4>
            <p>Otimização de performance para computação, armazenamento, banco de dados e rede.</p>
            
            <h4>Content Delivery & Caching</h4>
            <ul>
                <li><strong>Amazon CloudFront:</strong> CDN global com 400+ edge locations, cache de conteúdo estático/dinâmico</li>
                <li><strong>ElastiCache Redis:</strong> Cache em memória com persistência, clustering, backup</li>
                <li><strong>ElastiCache Memcached:</strong> Cache simples, multi-threaded, sem persistência</li>
                <li><strong>DAX (DynamoDB Accelerator):</strong> Cache em memória para DynamoDB, microssegundos de latência</li>
            </ul>
            
            <h4>Compute Optimization</h4>
            <ul>
                <li><strong>EC2 Instance Types:</strong> General Purpose (T3, M5), Compute Optimized (C5), Memory Optimized (R5, X1), Storage Optimized (I3)</li>
                <li><strong>Placement Groups:</strong> Cluster (baixa latência), Partition (isolação), Spread (alta disponibilidade)</li>
                <li><strong>Enhanced Networking:</strong> SR-IOV para maior bandwidth e menor latência</li>
                <li><strong>Nitro System:</strong> Virtualização de próxima geração da AWS</li>
            </ul>
            
            <h4>Storage Performance</h4>
            <ul>
                <li><strong>EBS gp3:</strong> Balanço custo/performance, IOPS e throughput independentes</li>
                <li><strong>EBS io2:</strong> Highest IOPS, 99.999% durabilidade, crítico para produção</li>
                <li><strong>EBS st1:</strong> Throughput otimizado para big data sequencial</li>
                <li><strong>Instance Store:</strong> Armazenamento temporário de altíssima performance</li>
            </ul>
            
            <h4>Database Performance</h4>
            <ul>
                <li><strong>RDS Read Replicas:</strong> Distribui carga de leitura, até 15 replicas</li>
                <li><strong>Aurora Serverless:</strong> Auto-scaling baseado em demanda</li>
                <li><strong>DynamoDB On-Demand:</strong> Scaling automático sem planejamento</li>
                <li><strong>DynamoDB Provisioned:</strong> Performance previsível com auto-scaling</li>
            </ul>
            
            <h4>Network Performance</h4>
            <ul>
                <li><strong>VPC Endpoints:</strong> Acesso privado a serviços AWS sem internet gateway</li>
                <li><strong>AWS Global Accelerator:</strong> Melhora performance usando rede global AWS</li>
                <li><strong>Direct Connect:</strong> Conexão dedicada de alta velocidade</li>
                <li><strong>Transfer Acceleration:</strong> Upload rápido para S3 via CloudFront</li>
            </ul>
        `
    },
    secure: {
        title: "🔒 Secure Applications",
        content: `
            <h4>Aplicações Seguras (24% do exame)</h4>
            <p>Implementação de segurança em múltiplas camadas para proteger dados e aplicações.</p>
            
            <h4>Identity & Access Management</h4>
            <ul>
                <li><strong>IAM Users:</strong> Identidades permanentes para pessoas</li>
                <li><strong>IAM Roles:</strong> Identidades temporárias para serviços/aplicações</li>
                <li><strong>IAM Policies:</strong> Documentos JSON que definem permissões</li>
                <li><strong>STS (Security Token Service):</strong> Credenciais temporárias</li>
                <li><strong>Cross-Account Access:</strong> Acesso seguro entre contas AWS</li>
            </ul>
            
            <h4>Network Security</h4>
            <ul>
                <li><strong>Security Groups:</strong> Firewall stateful no nível de instância</li>
                <li><strong>NACLs:</strong> Firewall stateless no nível de subnet</li>
                <li><strong>AWS WAF:</strong> Firewall de aplicação web contra OWASP Top 10</li>
                <li><strong>AWS Shield:</strong> Proteção DDoS (Standard gratuito, Advanced pago)</li>
                <li><strong>VPC Flow Logs:</strong> Captura tráfego de rede para auditoria</li>
            </ul>
            
            <h4>Data Protection</h4>
            <ul>
                <li><strong>KMS (Key Management Service):</strong> Gerenciamento de chaves de criptografia</li>
                <li><strong>CloudHSM:</strong> Hardware Security Module dedicado</li>
                <li><strong>Secrets Manager:</strong> Armazena e rotaciona segredos automaticamente</li>
                <li><strong>Parameter Store:</strong> Armazenamento hierárquico de configurações</li>
                <li><strong>Certificate Manager:</strong> Provisiona e gerencia certificados SSL/TLS</li>
            </ul>
            
            <h4>Monitoring & Compliance</h4>
            <ul>
                <li><strong>CloudTrail:</strong> Auditoria de API calls e eventos</li>
                <li><strong>GuardDuty:</strong> Detecção de ameaças com machine learning</li>
                <li><strong>Security Hub:</strong> Centraliza descobertas de segurança</li>
                <li><strong>Inspector:</strong> Avaliação de vulnerabilidades em aplicações</li>
                <li><strong>Config:</strong> Monitora conformidade de configurações</li>
            </ul>
            
            <h4>Application Security</h4>
            <ul>
                <li><strong>Cognito:</strong> Autenticação e autorização para apps web/mobile</li>
                <li><strong>API Gateway:</strong> Autenticação, autorização e throttling de APIs</li>
                <li><strong>Lambda Authorizers:</strong> Autorização customizada para APIs</li>
                <li><strong>Encryption in Transit:</strong> HTTPS, TLS, VPN</li>
                <li><strong>Encryption at Rest:</strong> EBS, S3, RDS encryption</li>
            </ul>
        `
    },
    cost: {
        title: "💰 Cost-Optimized Architectures",
        content: `
            <h4>Arquiteturas Otimizadas para Custo (18% do exame)</h4>
            <p>Estratégias para minimizar custos mantendo performance e disponibilidade.</p>
            
            <h4>EC2 Cost Optimization</h4>
            <ul>
                <li><strong>On-Demand Instances:</strong> Sem compromisso, preço por hora/segundo</li>
                <li><strong>Reserved Instances:</strong> 1-3 anos de compromisso, até 75% desconto</li>
                <li><strong>Savings Plans:</strong> Compromisso de gasto por hora, flexível entre instâncias</li>
                <li><strong>Spot Instances:</strong> Até 90% desconto, pode ser interrompido</li>
                <li><strong>Dedicated Hosts:</strong> Servidor físico dedicado, licenças BYOL</li>
            </ul>
            
            <h4>Storage Cost Optimization</h4>
            <ul>
                <li><strong>S3 Standard:</strong> Acesso frequente, 99.999999999% durabilidade</li>
                <li><strong>S3 Standard-IA:</strong> Acesso infrequente, menor custo de armazenamento</li>
                <li><strong>S3 One Zone-IA:</strong> Uma AZ apenas, 20% mais barato que Standard-IA</li>
                <li><strong>S3 Glacier:</strong> Arquivamento, retrieval em minutos a horas</li>
                <li><strong>S3 Glacier Deep Archive:</strong> Arquivamento de longo prazo, retrieval em 12h</li>
                <li><strong>S3 Intelligent Tiering:</strong> Move automaticamente entre classes</li>
            </ul>
            
            <h4>Database Cost Optimization</h4>
            <ul>
                <li><strong>RDS Reserved Instances:</strong> Até 60% desconto com compromisso</li>
                <li><strong>Aurora Serverless:</strong> Paga apenas quando em uso</li>
                <li><strong>DynamoDB On-Demand:</strong> Paga por request, sem planejamento</li>
                <li><strong>DynamoDB Reserved Capacity:</strong> Desconto com compromisso</li>
            </ul>
            
            <h4>Cost Monitoring & Management</h4>
            <ul>
                <li><strong>AWS Cost Explorer:</strong> Visualiza e analisa custos históricos</li>
                <li><strong>AWS Budgets:</strong> Define orçamentos e alertas proativos</li>
                <li><strong>Cost Anomaly Detection:</strong> Detecta gastos incomuns automaticamente</li>
                <li><strong>Trusted Advisor:</strong> Recomendações de otimização</li>
                <li><strong>Cost Allocation Tags:</strong> Rastreia custos por projeto/departamento</li>
            </ul>
            
            <h4>Architecture Patterns</h4>
            <ul>
                <li><strong>Serverless:</strong> Lambda, API Gateway, DynamoDB - paga por uso</li>
                <li><strong>Auto Scaling:</strong> Ajusta recursos automaticamente à demanda</li>
                <li><strong>Right Sizing:</strong> Escolhe tipo/tamanho correto de instância</li>
                <li><strong>Scheduled Scaling:</strong> Liga/desliga recursos em horários programados</li>
                <li><strong>Multi-AZ vs Single-AZ:</strong> Balança disponibilidade vs custo</li>
            </ul>
        `
    }
};

window.saaStudyMaterial = saaStudyMaterial;