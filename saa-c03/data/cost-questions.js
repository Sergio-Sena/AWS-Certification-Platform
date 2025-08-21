// DOMAIN 4: COST-OPTIMIZED ARCHITECTURES - 31 questões adicionais (18% total = 36 questões)

const costQuestions = [
    {
        id: 170,
        question: "Como implementar cost allocation tags efetivamente?",
        options: ["No tagging", "Consistent tagging strategy + automation + reporting", "Manual tagging", "Random tags"],
        correct: [1],
        explanation: "Consistent tagging strategy com automation e reporting permite accurate cost allocation.",
        topic: "cost", domain: "cost"
    },
    {
        id: 171,
        question: "Qual estratégia para otimizar custos de data transfer?",
        options: ["Ignore transfer costs", "CloudFront + VPC endpoints + data compression", "Direct transfer", "No optimization"],
        correct: [1],
        explanation: "CloudFront, VPC endpoints e compression reduzem significativamente data transfer costs.",
        topic: "cost", domain: "cost"
    },
    {
        id: 172,
        question: "Como otimizar custos de desenvolvimento/teste?",
        options: ["Production-like always", "Spot instances + auto-shutdown + right-sizing", "Always on", "No optimization"],
        correct: [1],
        explanation: "Spot instances, auto-shutdown e right-sizing reduzem custos de ambientes não-produtivos.",
        topic: "cost", domain: "cost"
    },
    {
        id: 173,
        question: "Qual é a melhor prática para Reserved Instance planning?",
        options: ["Buy maximum RIs", "Usage analysis + gradual commitment + flexibility", "No RIs", "Random purchase"],
        correct: [1],
        explanation: "Usage analysis com gradual commitment e flexibility maximiza RI savings.",
        topic: "cost", domain: "cost"
    },
    {
        id: 174,
        question: "Como otimizar custos de storage lifecycle?",
        options: ["Keep all in Standard", "Intelligent Tiering + lifecycle policies + deletion policies", "Manual management", "No lifecycle"],
        correct: [1],
        explanation: "Intelligent Tiering com lifecycle e deletion policies automatizam cost optimization.",
        topic: "cost", domain: "cost"
    },
    {
        id: 175,
        question: "Qual estratégia para otimizar custos de compute?",
        options: ["Always largest instances", "Right-sizing + Spot + Savings Plans + scheduling", "Fixed instances", "No optimization"],
        correct: [1],
        explanation: "Combinação de right-sizing, Spot, Savings Plans e scheduling maximiza compute savings.",
        topic: "cost", domain: "cost"
    },
    {
        id: 176,
        question: "Como implementar cost anomaly detection?",
        options: ["Manual monitoring", "Cost Anomaly Detection + budgets + alerts", "No monitoring", "Periodic checks"],
        correct: [1],
        explanation: "Cost Anomaly Detection com budgets e alerts identifica gastos incomuns automaticamente.",
        topic: "cost", domain: "cost"
    },
    {
        id: 177,
        question: "Qual é a melhor prática para database cost optimization?",
        options: ["Always largest DB", "Right-sizing + read replicas + Aurora Serverless", "Fixed size", "No optimization"],
        correct: [1],
        explanation: "Right-sizing, read replicas e Aurora Serverless otimizam database costs baseado em usage.",
        topic: "cost", domain: "cost"
    },
    {
        id: 178,
        question: "Como otimizar custos de networking?",
        options: ["Default networking", "VPC endpoints + NAT optimization + data locality", "Public internet", "No optimization"],
        correct: [1],
        explanation: "VPC endpoints, NAT optimization e data locality reduzem networking costs.",
        topic: "cost", domain: "cost"
    },
    {
        id: 179,
        question: "Qual estratégia para otimizar custos de backup?",
        options: ["Daily full backups", "Incremental backups + lifecycle + cross-region optimization", "No backup strategy", "Manual backups"],
        correct: [1],
        explanation: "Incremental backups com lifecycle policies e cross-region optimization reduzem backup costs.",
        topic: "cost", domain: "cost"
    },
    {
        id: 180,
        question: "Como implementar cost governance?",
        options: ["No governance", "Budgets + policies + approval workflows + reporting", "Manual approval", "No controls"],
        correct: [1],
        explanation: "Budgets, policies, approval workflows e reporting implementam effective cost governance.",
        topic: "cost", domain: "cost"
    },
    {
        id: 181,
        question: "Qual é a melhor prática para Spot Instance usage?",
        options: ["Use for critical workloads", "Fault-tolerant workloads + diversification + automation", "Single instance type", "No Spot usage"],
        correct: [1],
        explanation: "Spot instances para fault-tolerant workloads com diversification maximizam savings.",
        topic: "cost", domain: "cost"
    },
    {
        id: 182,
        question: "Como otimizar custos de serverless?",
        options: ["Maximum memory always", "Right-size memory + provisioned concurrency optimization", "Minimum memory", "No optimization"],
        correct: [1],
        explanation: "Right-sizing memory e provisioned concurrency optimization reduzem serverless costs.",
        topic: "cost", domain: "cost"
    },
    {
        id: 183,
        question: "Qual estratégia para otimizar custos de CDN?",
        options: ["Global distribution always", "Regional optimization + caching strategies + compression", "No CDN", "Single region"],
        correct: [1],
        explanation: "Regional optimization, caching strategies e compression otimizam CDN costs.",
        topic: "cost", domain: "cost"
    },
    {
        id: 184,
        question: "Como implementar cost-aware architecture?",
        options: ["Ignore costs in design", "Cost modeling + resource optimization + monitoring", "Over-provision", "No cost consideration"],
        correct: [1],
        explanation: "Cost modeling, resource optimization e monitoring integram cost awareness no design.",
        topic: "cost", domain: "cost"
    },
    {
        id: 185,
        question: "Qual é a melhor prática para container cost optimization?",
        options: ["Large containers always", "Right-sizing + Spot + Fargate Spot + resource limits", "Fixed resources", "No optimization"],
        correct: [1],
        explanation: "Right-sizing, Spot instances, Fargate Spot e resource limits otimizam container costs.",
        topic: "cost", domain: "cost"
    },
    {
        id: 186,
        question: "Como otimizar custos de data analytics?",
        options: ["Always-on clusters", "On-demand clusters + Spot + data partitioning + compression", "Fixed clusters", "No optimization"],
        correct: [1],
        explanation: "On-demand clusters, Spot, partitioning e compression reduzem analytics costs.",
        topic: "cost", domain: "cost"
    },
    {
        id: 187,
        question: "Qual estratégia para otimizar custos de machine learning?",
        options: ["Always GPU instances", "Spot training + inference optimization + model compression", "Fixed instances", "No optimization"],
        correct: [1],
        explanation: "Spot training, inference optimization e model compression reduzem ML costs.",
        topic: "cost", domain: "cost"
    },
    {
        id: 188,
        question: "Como implementar cost optimization automation?",
        options: ["Manual optimization", "Lambda + EventBridge + automated policies", "No automation", "Periodic manual checks"],
        correct: [1],
        explanation: "Lambda com EventBridge e automated policies implementam continuous cost optimization.",
        topic: "cost", domain: "cost"
    },
    {
        id: 189,
        question: "Qual é a melhor prática para multi-account cost management?",
        options: ["Individual billing", "Consolidated billing + cost allocation + chargeback", "No management", "Manual tracking"],
        correct: [1],
        explanation: "Consolidated billing com cost allocation e chargeback otimizam multi-account costs.",
        topic: "cost", domain: "cost"
    },
    {
        id: 190,
        question: "Como otimizar custos de disaster recovery?",
        options: ["Full replication always", "Pilot light + backup strategies + cross-region optimization", "No DR", "Manual DR"],
        correct: [1],
        explanation: "Pilot light, backup strategies e cross-region optimization balanceiam DR e costs.",
        topic: "cost", domain: "cost"
    },
    {
        id: 191,
        question: "Qual estratégia para otimizar custos de API Gateway?",
        options: ["No optimization", "Caching + request optimization + usage plans", "Unlimited usage", "No caching"],
        correct: [1],
        explanation: "Caching, request optimization e usage plans reduzem API Gateway costs.",
        topic: "cost", domain: "cost"
    },
    {
        id: 192,
        question: "Como implementar cost-effective monitoring?",
        options: ["Monitor everything", "Selective monitoring + log optimization + retention policies", "No monitoring", "Default settings"],
        correct: [1],
        explanation: "Selective monitoring, log optimization e retention policies balanceiam visibility e costs.",
        topic: "cost", domain: "cost"
    },
    {
        id: 193,
        question: "Qual é a melhor prática para storage cost optimization?",
        options: ["Use Standard always", "Tiering + compression + deduplication + lifecycle", "No optimization", "Manual management"],
        correct: [1],
        explanation: "Storage tiering, compression, deduplication e lifecycle policies otimizam storage costs.",
        topic: "cost", domain: "cost"
    },
    {
        id: 194,
        question: "Como otimizar custos de content delivery?",
        options: ["Global delivery always", "Regional CDN + origin optimization + caching strategies", "No CDN", "Single origin"],
        correct: [1],
        explanation: "Regional CDN, origin optimization e caching strategies reduzem content delivery costs.",
        topic: "cost", domain: "cost"
    },
    {
        id: 195,
        question: "Qual estratégia para otimizar custos de security?",
        options: ["Maximum security always", "Risk-based security + automation + shared services", "No security", "Manual security"],
        correct: [1],
        explanation: "Risk-based security com automation e shared services otimizam security costs.",
        topic: "cost", domain: "cost"
    },
    {
        id: 196,
        question: "Como implementar cost optimization culture?",
        options: ["Ignore costs", "Training + visibility + incentives + accountability", "Cost is not important", "Manual tracking"],
        correct: [1],
        explanation: "Training, visibility, incentives e accountability criam cost optimization culture.",
        topic: "cost", domain: "cost"
    },
    {
        id: 197,
        question: "Qual é a melhor prática para license optimization?",
        options: ["Buy all licenses", "BYOL + license mobility + usage tracking", "No license management", "Default licensing"],
        correct: [1],
        explanation: "BYOL, license mobility e usage tracking otimizam software licensing costs.",
        topic: "cost", domain: "cost"
    },
    {
        id: 198,
        question: "Como otimizar custos de development tools?",
        options: ["Always-on tools", "On-demand tools + shared resources + automation", "Individual tools", "No optimization"],
        correct: [1],
        explanation: "On-demand tools, shared resources e automation reduzem development tool costs.",
        topic: "cost", domain: "cost"
    },
    {
        id: 199,
        question: "Qual estratégia para otimizar custos de compliance?",
        options: ["Over-compliance", "Risk-based compliance + automation + shared controls", "No compliance", "Manual compliance"],
        correct: [1],
        explanation: "Risk-based compliance com automation e shared controls otimizam compliance costs.",
        topic: "cost", domain: "cost"
    },
    {
        id: 200,
        question: "Como implementar continuous cost optimization?",
        options: ["One-time optimization", "Regular reviews + automation + culture + metrics", "No optimization", "Annual reviews"],
        correct: [1],
        explanation: "Regular reviews, automation, culture e metrics implementam continuous cost optimization.",
        topic: "cost", domain: "cost"
    }
];

window.costQuestions = costQuestions;