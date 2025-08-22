// SAA-C03 Material de Estudo

const saaStudyMaterial = {
    resilient: {
        title: "🏗️ Resilient Architectures",
        content: `
            <button class="close-topic" onclick="hideTopic()" aria-label="Fechar tópico">×</button>
            <h4>Conceitos de Resiliência (30% do exame)</h4>
            <p>Arquiteturas resilientes são projetadas para resistir a falhas e se recuperar rapidamente.</p>
            
            <div class="services-grid" style="margin-top: 2rem;">
                <div class="service-card">
                    <div class="service-icon">🗄️</div>
                    <h3>RDS Multi-AZ</h3>
                    <p>Replicação síncrona para instância standby em AZ diferente</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">☁️</div>
                    <h3>EC2 Multi-AZ</h3>
                    <p>Distribui instâncias em múltiplas AZs para alta disponibilidade</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">💾</div>
                    <h3>EBS Snapshots</h3>
                    <p>Snapshots automaticamente replicados entre AZs</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">⚖️</div>
                    <h3>Application Load Balancer</h3>
                    <p>Layer 7, ideal para HTTP/HTTPS, suporte a containers</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🌐</div>
                    <h3>Network Load Balancer</h3>
                    <p>Layer 4, ultra performance, IP estático</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🛡️</div>
                    <h3>Gateway Load Balancer</h3>
                    <p>Layer 3, para appliances de segurança</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">📈</div>
                    <h3>Auto Scaling Groups</h3>
                    <p>Ajusta automaticamente número de instâncias EC2</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🎯</div>
                    <h3>Scaling Policies</h3>
                    <p>Target tracking, step scaling, simple scaling</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">💾</div>
                    <h3>AWS Backup</h3>
                    <p>Backup centralizado e automatizado</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🌍</div>
                    <h3>Route 53 Health Checks</h3>
                    <p>Failover automático baseado em saúde</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🔄</div>
                    <h3>S3 Cross-Region Replication</h3>
                    <p>Replicação automática entre regiões</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🏗️</div>
                    <h3>CloudFormation</h3>
                    <p>Infrastructure as Code para consistência</p>
                </div>
            </div>
        `
    },
    performance: {
        title: "⚡ High-Performing Architectures",
        content: `
            <button class="close-topic" onclick="hideTopic()" aria-label="Fechar tópico">×</button>
            <h4>Arquiteturas de Alto Desempenho (28% do exame)</h4>
            <p>Otimização de performance para computação, armazenamento, banco de dados e rede.</p>
            
            <div class="services-grid" style="margin-top: 2rem;">
                <div class="service-card">
                    <div class="service-icon">🚀</div>
                    <h3>CloudFront</h3>
                    <p>CDN global com 400+ edge locations, cache de conteúdo estático/dinâmico</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">⚡</div>
                    <h3>ElastiCache Redis</h3>
                    <p>Cache em memória com persistência, clustering, backup</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">💨</div>
                    <h3>ElastiCache Memcached</h3>
                    <p>Cache simples, multi-threaded, sem persistência</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🏎️</div>
                    <h3>DynamoDB DAX</h3>
                    <p>Cache em memória para DynamoDB, microssegundos de latência</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">💻</div>
                    <h3>EC2 Instance Types</h3>
                    <p>General Purpose (T3, M5), Compute Optimized (C5), Memory (R5)</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">📍</div>
                    <h3>Placement Groups</h3>
                    <p>Cluster (baixa latência), Partition (isolação), Spread (HA)</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">💽</div>
                    <h3>EBS gp3</h3>
                    <p>Balanço custo/performance, IOPS e throughput independentes</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🔥</div>
                    <h3>EBS io2</h3>
                    <p>Highest IOPS, 99.999% durabilidade, crítico para produção</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">📊</div>
                    <h3>RDS Read Replicas</h3>
                    <p>Distribui carga de leitura, até 15 replicas</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🌟</div>
                    <h3>Aurora Serverless</h3>
                    <p>Auto-scaling baseado em demanda</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🔗</div>
                    <h3>VPC Endpoints</h3>
                    <p>Acesso privado a serviços AWS sem internet gateway</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🌍</div>
                    <h3>Global Accelerator</h3>
                    <p>Melhora performance usando rede global AWS</p>
                </div>
            </div>
        `
    },
    secure: {
        title: "🔒 Secure Applications",
        content: `
            <button class="close-topic" onclick="hideTopic()" aria-label="Fechar tópico">×</button>
            <h4>Aplicações Seguras (24% do exame)</h4>
            <p>Implementação de segurança em múltiplas camadas para proteger dados e aplicações.</p>
            
            <div class="services-grid" style="margin-top: 2rem;">
                <div class="service-card">
                    <div class="service-icon">👤</div>
                    <h3>IAM Users</h3>
                    <p>Identidades permanentes para pessoas</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🎭</div>
                    <h3>IAM Roles</h3>
                    <p>Identidades temporárias para serviços/aplicações</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">📋</div>
                    <h3>IAM Policies</h3>
                    <p>Documentos JSON que definem permissões</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🛡️</div>
                    <h3>Security Groups</h3>
                    <p>Firewall stateful no nível de instância</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🚧</div>
                    <h3>NACLs</h3>
                    <p>Firewall stateless no nível de subnet</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🔥</div>
                    <h3>AWS WAF</h3>
                    <p>Firewall de aplicação web contra OWASP Top 10</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🔑</div>
                    <h3>KMS</h3>
                    <p>Gerenciamento de chaves de criptografia</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🏦</div>
                    <h3>CloudHSM</h3>
                    <p>Hardware Security Module dedicado</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🔐</div>
                    <h3>Secrets Manager</h3>
                    <p>Armazena e rotaciona segredos automaticamente</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🔍</div>
                    <h3>CloudTrail</h3>
                    <p>Auditoria de API calls e eventos</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🛡️</div>
                    <h3>GuardDuty</h3>
                    <p>Detecção de ameaças com machine learning</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🔐</div>
                    <h3>Cognito</h3>
                    <p>Autenticação e autorização para apps web/mobile</p>
                </div>
            </div>
        `
    },
    cost: {
        title: "💰 Cost-Optimized Architectures",
        content: `
            <button class="close-topic" onclick="hideTopic()" aria-label="Fechar tópico">×</button>
            <h4>Arquiteturas Otimizadas para Custo (18% do exame)</h4>
            <p>Estratégias para minimizar custos mantendo performance e disponibilidade.</p>
            
            <div class="services-grid" style="margin-top: 2rem;">
                <div class="service-card">
                    <div class="service-icon">💻</div>
                    <h3>On-Demand Instances</h3>
                    <p>Sem compromisso, preço por hora/segundo</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">📅</div>
                    <h3>Reserved Instances</h3>
                    <p>1-3 anos de compromisso, até 75% desconto</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">💡</div>
                    <h3>Savings Plans</h3>
                    <p>Compromisso de gasto por hora, flexível entre instâncias</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">⚡</div>
                    <h3>Spot Instances</h3>
                    <p>Até 90% desconto, pode ser interrompido</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">📊</div>
                    <h3>S3 Standard</h3>
                    <p>Acesso frequente, 99.999999999% durabilidade</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">❄️</div>
                    <h3>S3 Glacier</h3>
                    <p>Arquivamento, retrieval em minutos a horas</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🧠</div>
                    <h3>S3 Intelligent Tiering</h3>
                    <p>Move automaticamente entre classes</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🗄️</div>
                    <h3>RDS Reserved</h3>
                    <p>Até 60% desconto com compromisso</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">📊</div>
                    <h3>Cost Explorer</h3>
                    <p>Visualiza e analisa custos históricos</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🎯</div>
                    <h3>AWS Budgets</h3>
                    <p>Define orçamentos e alertas proativos</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🔍</div>
                    <h3>Cost Anomaly Detection</h3>
                    <p>Detecta gastos incomuns automaticamente</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">📈</div>
                    <h3>Auto Scaling</h3>
                    <p>Ajusta recursos automaticamente à demanda</p>
                </div>
            </div>
        `
    }
};

window.saaStudyMaterial = saaStudyMaterial;