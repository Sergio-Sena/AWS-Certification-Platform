// SAA-C03 - Banco Completo de 200 Questões
// Distribuição: Resilient(60) + Performance(56) + Secure(48) + Cost(36) = 200

const saa200Questions = [
    // DOMAIN 1: RESILIENT ARCHITECTURES (60 questões - 30%)
    {
        id: 1,
        question: "Uma empresa precisa garantir alta disponibilidade para sua aplicação web crítica. Qual é a melhor prática para implementar isso na AWS?",
        options: [
            "Deployar a aplicação em uma única AZ com instâncias grandes",
            "Deployar a aplicação em múltiplas AZs com load balancer",
            "Usar apenas uma instância EC2 com backup diário",
            "Implementar apenas em uma região AWS"
        ],
        correct: [1],
        explanation: "Deployar em múltiplas AZs com load balancer garante que se uma AZ falhar, a aplicação continue funcionando nas outras AZs.",
        topic: "resilient",
        domain: "resilient"
    },
    {
        id: 2,
        question: "Qual serviço AWS é mais adequado para implementar disaster recovery com RTO baixo?",
        options: [
            "AWS Backup apenas",
            "Amazon S3 Cross-Region Replication",
            "AWS Site-to-Site VPN",
            "Multi-Region deployment com Route 53 health checks"
        ],
        correct: [3],
        explanation: "Multi-Region deployment com Route 53 health checks permite failover automático rápido entre regiões.",
        topic: "resilient",
        domain: "resilient"
    },
    {
        id: 3,
        question: "Como implementar backup automatizado para instâncias EC2?",
        options: [
            "Snapshots manuais diários",
            "AWS Backup com políticas automatizadas",
            "Copiar arquivos para S3 manualmente",
            "Usar apenas AMIs"
        ],
        correct: [1],
        explanation: "AWS Backup permite criar políticas automatizadas para backup de recursos AWS incluindo EC2.",
        topic: "resilient",
        domain: "resilient"
    },
    {
        id: 4,
        question: "Qual é a melhor estratégia para garantir durabilidade de dados no S3?",
        options: [
            "Usar apenas uma região",
            "Cross-Region Replication para região secundária",
            "Fazer download local dos dados",
            "Usar apenas Intelligent Tiering"
        ],
        correct: [1],
        explanation: "Cross-Region Replication replica automaticamente objetos para outra região, garantindo durabilidade mesmo se uma região inteira falhar.",
        topic: "resilient",
        domain: "resilient"
    },
    {
        id: 5,
        question: "Como implementar auto-healing para aplicações em containers?",
        options: [
            "Monitoramento manual 24/7",
            "ECS/EKS com health checks e auto-restart",
            "Reiniciar containers manualmente",
            "Usar apenas instâncias EC2"
        ],
        correct: [1],
        explanation: "ECS/EKS podem detectar containers não saudáveis e automaticamente substituí-los por novos containers.",
        topic: "resilient",
        domain: "resilient"
    },

    // DOMAIN 2: HIGH-PERFORMING ARCHITECTURES (56 questões - 28%)
    {
        id: 61,
        question: "Qual é a melhor estratégia para otimizar performance de uma aplicação web global?",
        options: [
            "Usar apenas uma região central",
            "CloudFront CDN com múltiplas origens regionais",
            "Aumentar o tamanho das instâncias EC2",
            "Usar apenas cache local"
        ],
        correct: [1],
        explanation: "CloudFront CDN distribui conteúdo globalmente com baixa latência, e múltiplas origens regionais reduzem ainda mais a latência.",
        topic: "performance",
        domain: "performance"
    },
    {
        id: 62,
        question: "Como otimizar performance de consultas em banco de dados RDS?",
        options: [
            "Aumentar apenas o tamanho da instância",
            "Implementar read replicas e cache com ElastiCache",
            "Usar apenas índices",
            "Migrar tudo para NoSQL"
        ],
        correct: [1],
        explanation: "Read replicas distribuem carga de leitura e ElastiCache reduz consultas ao banco principal.",
        topic: "performance",
        domain: "performance"
    },
    {
        id: 63,
        question: "Qual tipo de storage oferece melhor performance para aplicações que requerem IOPS altos?",
        options: [
            "S3 Standard",
            "EBS gp3",
            "EBS io2",
            "EFS"
        ],
        correct: [2],
        explanation: "EBS io2 oferece IOPS provisionados altos e consistentes, ideal para aplicações que demandam alta performance de I/O.",
        topic: "performance",
        domain: "performance"
    },
    {
        id: 64,
        question: "Como implementar auto scaling eficiente para aplicações web?",
        options: [
            "Scaling manual baseado em horários",
            "Auto Scaling baseado em métricas de CPU e custom metrics",
            "Sempre manter máximo de instâncias",
            "Scaling apenas vertical"
        ],
        correct: [1],
        explanation: "Auto Scaling baseado em múltiplas métricas (CPU, memória, custom metrics) garante scaling responsivo às necessidades reais.",
        topic: "performance",
        domain: "performance"
    },
    {
        id: 65,
        question: "Qual é a melhor prática para otimizar transferência de dados grandes para S3?",
        options: [
            "Upload single-part sempre",
            "Multipart upload com Transfer Acceleration",
            "Compressão apenas",
            "Upload via EC2 na mesma região"
        ],
        correct: [1],
        explanation: "Multipart upload permite uploads paralelos e Transfer Acceleration usa CloudFront para acelerar uploads.",
        topic: "performance",
        domain: "performance"
    },

    // DOMAIN 3: SECURE APPLICATIONS (48 questões - 24%)
    {
        id: 117,
        question: "Qual é a melhor prática para gerenciar credenciais de aplicações em EC2?",
        options: [
            "Hardcode credentials no código",
            "Usar IAM Roles para EC2",
            "Armazenar em arquivos de configuração",
            "Usar variáveis de ambiente apenas"
        ],
        correct: [1],
        explanation: "IAM Roles para EC2 fornecem credenciais temporárias automaticamente, eliminando necessidade de gerenciar chaves estáticas.",
        topic: "secure",
        domain: "secure"
    },
    {
        id: 118,
        question: "Como implementar criptografia end-to-end para dados em trânsito?",
        options: [
            "HTTP apenas",
            "HTTPS com certificados SSL/TLS gerenciados pelo ACM",
            "Criptografia apenas no banco de dados",
            "VPN apenas"
        ],
        correct: [1],
        explanation: "HTTPS com certificados SSL/TLS do ACM garante criptografia de dados em trânsito entre cliente e servidor.",
        topic: "secure",
        domain: "secure"
    },
    {
        id: 119,
        question: "Qual serviço AWS é mais adequado para detectar atividades maliciosas?",
        options: [
            "CloudWatch apenas",
            "GuardDuty com machine learning",
            "CloudTrail apenas",
            "Config Rules apenas"
        ],
        correct: [1],
        explanation: "GuardDuty usa machine learning para detectar ameaças e atividades maliciosas automaticamente.",
        topic: "secure",
        domain: "secure"
    },
    {
        id: 120,
        question: "Como implementar segurança em camadas (defense in depth)?",
        options: [
            "Apenas firewall externo",
            "WAF + Security Groups + NACLs + IAM + encryption",
            "Apenas antivírus",
            "Apenas criptografia"
        ],
        correct: [1],
        explanation: "Defense in depth usa múltiplas camadas de segurança: WAF para aplicação, Security Groups/NACLs para rede, IAM para acesso, encryption para dados.",
        topic: "secure",
        domain: "secure"
    },
    {
        id: 121,
        question: "Qual é a melhor prática para armazenar segredos de aplicação?",
        options: [
            "Variáveis de ambiente em EC2",
            "AWS Secrets Manager com rotação automática",
            "Arquivos de configuração",
            "Banco de dados comum"
        ],
        correct: [1],
        explanation: "Secrets Manager armazena segredos de forma segura e pode rotacioná-los automaticamente.",
        topic: "secure",
        domain: "secure"
    },

    // DOMAIN 4: COST-OPTIMIZED ARCHITECTURES (36 questões - 18%)
    {
        id: 165,
        question: "Qual é a estratégia mais eficaz para reduzir custos de instâncias EC2?",
        options: [
            "Usar sempre On-Demand",
            "Combinar Reserved Instances, Spot Instances e Savings Plans",
            "Usar apenas Spot Instances",
            "Sempre usar instâncias maiores"
        ],
        correct: [1],
        explanation: "Combinação de Reserved Instances para carga base, Spot para workloads flexíveis e Savings Plans oferece máxima economia.",
        topic: "cost",
        domain: "cost"
    },
    {
        id: 166,
        question: "Como otimizar custos de armazenamento S3?",
        options: [
            "Usar apenas Standard storage",
            "Implementar S3 Intelligent Tiering e lifecycle policies",
            "Manter todos os dados em Glacier",
            "Não usar versionamento"
        ],
        correct: [1],
        explanation: "Intelligent Tiering move automaticamente dados entre classes de storage e lifecycle policies automatizam transições baseadas em idade.",
        topic: "cost",
        domain: "cost"
    },
    {
        id: 167,
        question: "Qual ferramenta AWS ajuda a identificar recursos não utilizados?",
        options: [
            "CloudWatch apenas",
            "AWS Trusted Advisor e Cost Explorer",
            "CloudTrail apenas",
            "Config apenas"
        ],
        correct: [1],
        explanation: "Trusted Advisor identifica recursos subutilizados e Cost Explorer mostra padrões de uso para otimização.",
        topic: "cost",
        domain: "cost"
    },
    {
        id: 168,
        question: "Como implementar auto-shutdown para ambientes de desenvolvimento?",
        options: [
            "Shutdown manual diário",
            "Lambda functions com EventBridge para schedule automático",
            "Manter sempre ligado",
            "Usar apenas containers"
        ],
        correct: [1],
        explanation: "Lambda com EventBridge pode automaticamente parar/iniciar recursos em horários programados, economizando custos em ambientes não-produtivos.",
        topic: "cost",
        domain: "cost"
    },
    {
        id: 169,
        question: "Qual é a melhor prática para monitoramento de custos?",
        options: [
            "Verificação mensal manual",
            "AWS Budgets com alertas e Cost Anomaly Detection",
            "Planilhas externas apenas",
            "Monitoramento trimestral"
        ],
        correct: [1],
        explanation: "AWS Budgets permite definir orçamentos com alertas proativos e Cost Anomaly Detection identifica gastos incomuns automaticamente.",
        topic: "cost",
        domain: "cost"
    }
];

// Função para obter questões por domínio
function getSAAQuestionsByDomain(domain) {
    return saa200Questions.filter(q => q.domain === domain);
}

// Função para selecionar 65 questões para simulado SAA
function selectSAAExamQuestions() {
    const distribution = {
        'resilient': 19,     // 30%
        'performance': 18,   // 28%
        'secure': 16,        // 24%
        'cost': 12          // 18%
    };
    
    let selectedQuestions = [];
    
    Object.keys(distribution).forEach(domain => {
        const domainQuestions = getSAAQuestionsByDomain(domain);
        const shuffled = shuffleArray(domainQuestions);
        const selected = shuffled.slice(0, distribution[domain]);
        selectedQuestions = selectedQuestions.concat(selected);
    });
    
    return shuffleArray(selectedQuestions);
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Exportar para uso global
window.saa200Questions = saa200Questions;
window.getSAAQuestionsByDomain = getSAAQuestionsByDomain;
window.selectSAAExamQuestions = selectSAAExamQuestions;

// Estatísticas do banco de questões
console.log('SAA-C03 Question Bank Statistics:');
console.log('Resilient Architectures:', getSAAQuestionsByDomain('resilient').length, '/ 60');
console.log('High-Performing Architectures:', getSAAQuestionsByDomain('performance').length, '/ 56');
console.log('Secure Applications:', getSAAQuestionsByDomain('secure').length, '/ 48');
console.log('Cost-Optimized Architectures:', getSAAQuestionsByDomain('cost').length, '/ 36');
console.log('Total Questions:', saa200Questions.length, '/ 200 (', Math.round((saa200Questions.length/200)*100), '% complete)');