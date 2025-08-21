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
                <li><strong>EC2:</strong> Virtual servers na nuvem</li>
                <li><strong>Lambda:</strong> Serverless computing</li>
                <li><strong>ECS/EKS:</strong> Container orchestration</li>
                <li><strong>Elastic Beanstalk:</strong> Platform as a Service</li>
            </ul>
            
            <h4>Storage Services</h4>
            <ul>
                <li><strong>S3:</strong> Object storage</li>
                <li><strong>EBS:</strong> Block storage para EC2</li>
                <li><strong>EFS:</strong> File system compartilhado</li>
                <li><strong>Glacier:</strong> Archive storage</li>
            </ul>
            
            <h4>Database Services</h4>
            <ul>
                <li><strong>RDS:</strong> Relational databases</li>
                <li><strong>DynamoDB:</strong> NoSQL database</li>
                <li><strong>Redshift:</strong> Data warehouse</li>
                <li><strong>ElastiCache:</strong> In-memory caching</li>
            </ul>
            
            <h4>Networking</h4>
            <ul>
                <li><strong>VPC:</strong> Virtual Private Cloud</li>
                <li><strong>CloudFront:</strong> Content Delivery Network</li>
                <li><strong>Route 53:</strong> DNS service</li>
                <li><strong>Direct Connect:</strong> Dedicated network connection</li>
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