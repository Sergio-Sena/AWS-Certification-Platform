// CLF-C02 Material de Estudo

const clfStudyMaterial = {
    'cloud-concepts': {
        title: '☁️ Cloud Concepts',
        content: `
            <div class="topic-cards-grid">
                <div class="topic-card">
                    <h4>💡 Definição de Cloud Computing</h4>
                    <p>Entrega sob demanda de recursos de TI via internet com modelo pay-as-you-go</p>
                    <a href="https://aws.amazon.com/what-is-cloud-computing/" target="_blank" class="doc-link">📚 Documentação Oficial</a>
                </div>
                <div class="topic-card">
                    <h4>🏗️ Modelos de Deployment</h4>
                    <p><strong>Public Cloud:</strong> Recursos compartilhados<br>
                    <strong>Private Cloud:</strong> Recursos dedicados<br>
                    <strong>Hybrid Cloud:</strong> Combinação de ambos</p>
                </div>
                <div class="topic-card">
                    <h4>⚙️ Modelos de Serviço</h4>
                    <p><strong>IaaS:</strong> Infraestrutura como Serviço<br>
                    <strong>PaaS:</strong> Plataforma como Serviço<br>
                    <strong>SaaS:</strong> Software como Serviço</p>
                </div>
                <div class="topic-card">
                    <h4>🚀 Benefícios da Nuvem</h4>
                    <p>Agilidade, elasticidade, economia de escala, pay-as-you-go, alcance global</p>
                </div>
                <div class="topic-card">
                    <h4>🏛️ Well-Architected Framework</h4>
                    <p>6 pilares: Operational Excellence, Security, Reliability, Performance, Cost, Sustainability</p>
                </div>
                <div class="topic-card">
                    <h4>🌍 Infraestrutura Global AWS</h4>
                    <p><strong>Regions:</strong> Localizações geográficas<br>
                    <strong>AZs:</strong> Data centers isolados<br>
                    <strong>Edge Locations:</strong> Pontos CloudFront</p>
                </div>
            </div>
        `
    },
    'security': {
        title: '🔒 Security & Compliance',
        content: `
            <div class="topic-cards-grid">
                <div class="topic-card">
                    <h4>🤝 Responsabilidade Compartilhada</h4>
                    <p><strong>AWS:</strong> Segurança DA nuvem (infraestrutura, hardware)<br>
                    <strong>Cliente:</strong> Segurança NA nuvem (dados, aplicações, SO)</p>
                    <a href="https://aws.amazon.com/compliance/shared-responsibility-model/" target="_blank" class="doc-link">📚 Modelo Oficial</a>
                </div>
                <div class="topic-card">
                    <h4>👤 AWS IAM</h4>
                    <p>Identity and Access Management - Controle de acesso a recursos AWS</p>
                </div>
                <div class="topic-card">
                    <h4>📋 AWS CloudTrail</h4>
                    <p>Auditoria e log de todas as chamadas de API na conta AWS</p>
                </div>
                <div class="topic-card">
                    <h4>🛡️ Amazon GuardDuty</h4>
                    <p>Serviço de detecção de ameaças usando machine learning</p>
                </div>
                <div class="topic-card">
                    <h4>🔐 AWS KMS</h4>
                    <p>Key Management Service - Gerenciamento de chaves de criptografia</p>
                </div>
                <div class="topic-card">
                    <h4>📜 AWS Artifact</h4>
                    <p>Portal para acessar relatórios de compliance e certificações (SOC, PCI DSS, HIPAA)</p>
                </div>
            </div>
        `
    },
    'technology': {
        title: '⚙️ Technology & Services',
        content: `
            <div class="topic-cards-grid">
                <div class="topic-card">
                    <h4>☁️ Amazon EC2</h4>
                    <p>Elastic Compute Cloud - Servidores virtuais redimensionáveis na nuvem</p>
                </div>
                <div class="topic-card">
                    <h4>⚡ AWS Lambda</h4>
                    <p>Computação serverless - Execute código sem gerenciar servidores</p>
                </div>
                <div class="topic-card">
                    <h4>🗄️ Amazon S3</h4>
                    <p>Simple Storage Service - Armazenamento de objetos seguro e escalável</p>
                </div>
                <div class="topic-card">
                    <h4>💾 Amazon EBS</h4>
                    <p>Elastic Block Store - Volumes de armazenamento em bloco para EC2</p>
                </div>
                <div class="topic-card">
                    <h4>🗃️ Amazon RDS</h4>
                    <p>Relational Database Service - Bancos relacionais gerenciados</p>
                </div>
                <div class="topic-card">
                    <h4>⚡ Amazon DynamoDB</h4>
                    <p>Banco NoSQL rápido e flexível com latência de milissegundos</p>
                </div>
                <div class="topic-card">
                    <h4>🌐 Amazon VPC</h4>
                    <p>Virtual Private Cloud - Rede privada virtual isolada</p>
                </div>
                <div class="topic-card">
                    <h4>🚀 Amazon CloudFront</h4>
                    <p>CDN global para acelerar entrega de conteúdo</p>
                </div>
                <div class="topic-card">
                    <h4>📡 Amazon Route 53</h4>
                    <p>Serviço DNS escalável e confiável</p>
                </div>
                <div class="topic-card">
                    <h4>🔍 Amazon Athena</h4>
                    <p>Consulte dados no S3 usando SQL sem infraestrutura</p>
                </div>
                <div class="topic-card">
                    <h4>📊 Amazon QuickSight</h4>
                    <p>Business Intelligence para dashboards e visualizações</p>
                </div>
                <div class="topic-card">
                    <h4>🎯 AWS Elastic Beanstalk</h4>
                    <p>Deploy fácil de aplicações web - PaaS da AWS</p>
                </div>
            </div>
        `
    },
    'billing': {
        title: '💰 Billing & Pricing',
        content: `
            <div class="topic-cards-grid">
                <div class="topic-card">
                    <h4>💳 On-Demand</h4>
                    <p>Pay-as-you-go sem compromisso de longo prazo. Pague apenas pelo que usar.</p>
                </div>
                <div class="topic-card">
                    <h4>📅 Reserved Instances</h4>
                    <p>Desconto significativo por compromisso de 1-3 anos. Até 75% de economia.</p>
                </div>
                <div class="topic-card">
                    <h4>⚡ Spot Instances</h4>
                    <p>Capacidade não utilizada com até 90% de desconto. Pode ser interrompida.</p>
                </div>
                <div class="topic-card">
                    <h4>💡 Savings Plans</h4>
                    <p>Modelo flexível de desconto baseado em compromisso de uso por hora.</p>
                </div>
                <div class="topic-card">
                    <h4>🧮 Pricing Calculator</h4>
                    <p>Ferramenta para estimar custos AWS antes de implementar recursos.</p>
                </div>
                <div class="topic-card">
                    <h4>📊 Cost Explorer</h4>
                    <p>Visualize e analise seus custos AWS com gráficos e relatórios detalhados.</p>
                </div>
                <div class="topic-card">
                    <h4>🎯 AWS Budgets</h4>
                    <p>Defina orçamentos personalizados e receba alertas quando exceder limites.</p>
                </div>
                <div class="topic-card">
                    <h4>🏆 Níveis de Suporte</h4>
                    <p><strong>Basic:</strong> Gratuito<br>
                    <strong>Developer:</strong> Horário comercial<br>
                    <strong>Business:</strong> 24/7<br>
                    <strong>Enterprise:</strong> TAM dedicado</p>
                </div>
            </div>
        `
    }
};

window.clfStudyMaterial = clfStudyMaterial;