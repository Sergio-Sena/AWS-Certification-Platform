// CLF-C02 Material de Estudo

const clfStudyMaterial = {
    'cloud-concepts': {
        title: '☁️ Cloud Concepts',
        content: `
            <h4>Conceitos Fundamentais de Cloud Computing</h4>
            <ul>
                <li><strong>Definição de Cloud Computing:</strong> Entrega sob demanda de recursos de TI via internet</li>
                <li><strong>Modelos de Deployment:</strong> Public, Private, Hybrid Cloud</li>
                <li><strong>Modelos de Serviço:</strong> IaaS, PaaS, SaaS</li>
                <li><strong>Benefícios:</strong> Agilidade, elasticidade, economia de escala, pay-as-you-go</li>
                <li><strong>Well-Architected Framework:</strong> 6 pilares (Operational Excellence, Security, Reliability, Performance, Cost, Sustainability)</li>
            </ul>
            
            <h4>Conceitos AWS Essenciais</h4>
            <ul>
                <li><strong>Regions:</strong> Localizações geográficas com múltiplas AZs</li>
                <li><strong>Availability Zones:</strong> Data centers isolados dentro de uma região</li>
                <li><strong>Edge Locations:</strong> Pontos de presença para CloudFront</li>
                <li><strong>Global Infrastructure:</strong> Rede mundial da AWS</li>
            </ul>
        `
    },
    'security': {
        title: '🔒 Security & Compliance',
        content: `
            <h4>Modelo de Responsabilidade Compartilhada</h4>
            <ul>
                <li><strong>AWS é responsável por:</strong> Segurança DA nuvem (infraestrutura, hardware, software)</li>
                <li><strong>Cliente é responsável por:</strong> Segurança NA nuvem (dados, aplicações, SO, rede)</li>
            </ul>
            
            <h4>Serviços de Segurança</h4>
            <ul>
                <li><strong>IAM:</strong> Identity and Access Management</li>
                <li><strong>CloudTrail:</strong> Auditoria de API calls</li>
                <li><strong>GuardDuty:</strong> Detecção de ameaças</li>
                <li><strong>Security Groups:</strong> Firewalls virtuais</li>
                <li><strong>KMS:</strong> Gerenciamento de chaves de criptografia</li>
            </ul>
            
            <h4>Compliance</h4>
            <ul>
                <li><strong>AWS Artifact:</strong> Relatórios de compliance</li>
                <li><strong>Certificações:</strong> SOC, PCI DSS, HIPAA, GDPR</li>
            </ul>
        `
    },
    'technology': {
        title: '⚙️ Technology & Services',
        content: `
            <h4>Compute Services</h4>
            <ul>
                <li><strong>Amazon EC2 (Elastic Compute Cloud):</strong> Fornece capacidade de computação redimensionável na nuvem. Funciona como servidores virtuais que você pode configurar conforme necessário.</li>
                <li><strong>AWS Lambda:</strong> Serviço de computação serverless que executa código sem provisionar servidores. Você paga apenas pelo tempo de execução.</li>
                <li><strong>AWS Fargate:</strong> Mecanismo de computação serverless para containers que trabalha com ECS e EKS.</li>
                <li><strong>AWS Elastic Beanstalk:</strong> Serviço PaaS para deploy fácil de aplicações web. Você faz upload do código e o Beanstalk gerencia a infraestrutura.</li>
                <li><strong>Amazon Lightsail:</strong> Plataforma simplificada para projetos pequenos com preços previsíveis.</li>
            </ul>
            
            <h4>Storage Services</h4>
            <ul>
                <li><strong>Amazon S3 (Simple Storage Service):</strong> Armazenamento de objetos seguro, durável e escalável. Ideal para websites, backups e arquivamento.</li>
                <li><strong>Amazon EBS (Elastic Block Store):</strong> Volumes de armazenamento em bloco para instâncias EC2. Funciona como um disco rígido virtual.</li>
                <li><strong>Amazon EFS (Elastic File System):</strong> Sistema de arquivos compartilhado que pode ser acessado por múltiplas instâncias EC2 simultaneamente.</li>
                <li><strong>Amazon S3 Glacier:</strong> Armazenamento de baixo custo para arquivamento e backup de longo prazo.</li>
            </ul>
            
            <h4>Database Services</h4>
            <ul>
                <li><strong>Amazon RDS (Relational Database Service):</strong> Serviço gerenciado para bancos relacionais (MySQL, PostgreSQL, Oracle, SQL Server).</li>
                <li><strong>Amazon DynamoDB:</strong> Banco NoSQL rápido e flexível para qualquer escala. Ideal para aplicações que precisam de latência baixa.</li>
                <li><strong>Amazon Aurora:</strong> Banco relacional compatível com MySQL/PostgreSQL, até 5x mais rápido que MySQL padrão.</li>
                <li><strong>Amazon Redshift:</strong> Data warehouse para análise de big data com performance rápida.</li>
                <li><strong>Amazon ElastiCache:</strong> Cache em memória que melhora performance de aplicações (Redis/Memcached).</li>
            </ul>
            
            <h4>Networking & Content Delivery</h4>
            <ul>
                <li><strong>Amazon VPC (Virtual Private Cloud):</strong> Rede privada virtual isolada onde você controla o ambiente de rede.</li>
                <li><strong>Amazon CloudFront:</strong> CDN que acelera entrega de conteúdo para usuários globais através de edge locations.</li>
                <li><strong>Amazon Route 53:</strong> Serviço DNS escalável e confiável para roteamento de tráfego.</li>
                <li><strong>AWS Direct Connect:</strong> Conexão de rede dedicada entre seu datacenter e AWS.</li>
            </ul>
            
            <h4>Analytics Services</h4>
            <ul>
                <li><strong>Amazon Athena:</strong> Consulta dados no S3 usando SQL padrão sem infraestrutura.</li>
                <li><strong>Amazon Kinesis:</strong> Coleta, processa e analisa dados de streaming em tempo real.</li>
                <li><strong>Amazon QuickSight:</strong> Business Intelligence para criar dashboards e visualizações.</li>
            </ul>
        `
    },
    'billing': {
        title: '💰 Billing & Pricing',
        content: `
            <h4>Modelos de Preços</h4>
            <ul>
                <li><strong>On-Demand:</strong> Pay-as-you-go sem compromisso</li>
                <li><strong>Reserved Instances:</strong> Desconto por compromisso de 1-3 anos</li>
                <li><strong>Spot Instances:</strong> Capacidade não utilizada com desconto</li>
                <li><strong>Savings Plans:</strong> Modelo flexível de desconto</li>
            </ul>
            
            <h4>Ferramentas de Custo</h4>
            <ul>
                <li><strong>Pricing Calculator:</strong> Estimar custos antes de usar</li>
                <li><strong>Cost Explorer:</strong> Visualizar e analisar custos</li>
                <li><strong>AWS Budgets:</strong> Definir orçamentos e alertas</li>
                <li><strong>Trusted Advisor:</strong> Recomendações de otimização</li>
            </ul>
            
            <h4>Níveis de Suporte</h4>
            <ul>
                <li><strong>Basic:</strong> Gratuito, documentação e fóruns</li>
                <li><strong>Developer:</strong> Suporte técnico durante horário comercial</li>
                <li><strong>Business:</strong> Suporte 24/7, resposta em 1 hora</li>
                <li><strong>Enterprise:</strong> TAM dedicado, resposta em 15 minutos</li>
            </ul>
        `
    }
};

window.clfStudyMaterial = clfStudyMaterial;