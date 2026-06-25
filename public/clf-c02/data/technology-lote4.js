// CLF-C02 Technology & Services - Lote 4 (tech_021 a tech_030)
// Foco: Networking (VPC, subnets, gateways, Route 53, CloudFront, Global Accelerator)

const technologyLote4 = [
    {
        id: 'tech_021',
        question: "Qual é a diferença entre uma subnet pública e uma subnet privada na VPC?",
        options: [
            "Pública: route table aponta para Internet Gateway (acesso internet direto). Privada: sem rota para IGW, acesso internet via NAT Gateway",
            "Não há diferença",
            "Pública é mais segura",
            "Privada não pode acessar nenhum serviço AWS"
        ],
        correct: [0],
        explanation: "✅ Subnet pública: rota 0.0.0.0/0 → IGW. Subnet privada: rota 0.0.0.0/0 → NAT Gateway (outbound only). Web servers → pública. Databases, app servers → privada. Best practice: mínimo de recursos em subnet pública.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_022',
        question: "Uma aplicação em subnet privada precisa baixar patches da internet mas NÃO deve ser acessível da internet. Qual serviço?",
        options: [
            "Internet Gateway (permite inbound + outbound)",
            "VPN Gateway",
            "NAT Gateway — permite outbound internet da subnet privada, bloqueia inbound. Gerenciado, HA dentro da AZ",
            "Direct Connect"
        ],
        correct: [2],
        explanation: "✅ NAT Gateway: traduz IP privado → público para outbound. Managed, scales automaticamente. Deploy em subnet pública, referenciado na route table da subnet privada. NAT Instance (EC2): legacy, self-managed.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_023',
        question: "Qual serviço DNS da AWS oferece routing policies como geolocation, latency-based e failover?",
        options: [
            "Amazon CloudFront (CDN, não DNS)",
            "AWS Global Accelerator",
            "Elastic Load Balancer",
            "Amazon Route 53 — DNS autoritativo com routing policies: Simple, Weighted, Latency, Failover, Geolocation, Multivalue Answer",
        ],
        correct: [3],
        explanation: "✅ Route 53 policies: Simple (1 record), Weighted (split traffic %), Latency (lowest latency region), Failover (active-passive DR), Geolocation (by country/continent), Geoproximity (bias traffic).",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_024',
        question: "Qual é a diferença entre CloudFront e Global Accelerator?",
        options: [
            "São o mesmo serviço",
            "CloudFront: CDN para conteúdo estático/dinâmico (cache na edge). Global Accelerator: rede AWS para TCP/UDP (sem cache, fixed IPs, failover rápido)",
            "Global Accelerator é apenas para vídeo",
            "CloudFront não usa edge locations"
        ],
        correct: [1],
        explanation: "✅ CloudFront: HTTP/S, cache, Lambda@Edge. Ideal para websites, APIs, streaming. Global Accelerator: anycast IPs fixos, rede AWS backbone, sem cache. Ideal para gaming, IoT, VoIP, failover instantâneo entre regions.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_025',
        question: "Uma empresa com 3 VPCs em regiões diferentes precisa que todas se comuniquem. Qual serviço simplifica a conectividade?",
        options: [
            "AWS Transit Gateway — hub central que conecta múltiplas VPCs, VPNs, Direct Connect em topologia hub-and-spoke",
            "VPC Peering entre cada par (3 connections, não escala)",
            "Internet Gateway (via internet pública)",
            "NAT Gateway"
        ],
        correct: [0],
        explanation: "✅ Transit Gateway: hub regional que conecta VPCs, VPN, Direct Connect. Evita mesh de peering (N VPCs = N*(N-1)/2 peerings). Suporta inter-region peering. Route tables para segmentação. Escala para milhares de VPCs.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_026',
        question: "Qual é a diferença entre Application Load Balancer (ALB) e Network Load Balancer (NLB)?",
        options: [
            "São iguais",
            "NLB é para aplicações web",
            "ALB: Layer 7 (HTTP/S, routing por path/host/header). NLB: Layer 4 (TCP/UDP, ultra-low latency, millions of requests/sec, static IP)",
            "ALB é para gaming"
        ],
        correct: [2],
        explanation: "✅ ALB (L7): content-based routing, WebSocket, gRPC, WAF integration. NLB (L4): extreme performance (~100ns latency), static/elastic IP, TLS termination. Gateway LB: 3rd party appliances (firewalls).",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_027',
        question: "O que é VPC Peering e qual sua limitação principal?",
        options: [
            "Conexão via internet",
            "Conexão apenas na mesma conta",
            "Conexão apenas na mesma região",
            "Conexão privada entre 2 VPCs (mesmo/diferentes accounts/regions) — limitação: NÃO transitiva (A↔B e B↔C não significa A↔C)",
        ],
        correct: [3],
        explanation: "✅ VPC Peering: private IP communication entre VPCs. Cross-account, cross-region. Não transitiva: cada par precisa seu peering. Para conectividade transitiva: usar Transit Gateway. CIDRs não podem overlapping.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_028',
        question: "Uma empresa quer reduzir latência para usuários globais de sua aplicação hospedada em us-east-1. Qual serviço?",
        options: [
            "Apenas aumentar instâncias na mesma região",
            "Amazon CloudFront — CDN com 450+ edge locations globais, cache conteúdo perto dos usuários, reduz latência significativamente",
            "Apenas Route 53",
            "Apenas Auto Scaling"
        ],
        correct: [1],
        explanation: "✅ CloudFront: edge locations em 90+ cidades. Cache estático (imagens, CSS, JS) e dinâmico (API com TTL curto). Origin: S3, ALB, EC2, custom. HTTPS grátis (ACM), DDoS protection (Shield Standard incluso).",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_029',
        question: "Qual serviço permite conexão de rede DEDICADA (não pela internet) entre data center on-premises e AWS?",
        options: [
            "AWS Direct Connect — conexão física dedicada 1Gbps/10Gbps/100Gbps, latência consistente, não passa pela internet pública",
            "Site-to-Site VPN (usa internet, criptografado)",
            "VPC Peering (entre VPCs)",
            "Transit Gateway sozinho"
        ],
        correct: [0],
        explanation: "✅ Direct Connect: fibra dedicada via partner location. Benefícios: latência consistente, bandwidth garantida, custos de transferência menores. Lead time: semanas/meses para setup. Para HA: 2 connections em locations diferentes.",
        topic: "technology",
        domain: "technology"
    },
    {
        id: 'tech_030',
        question: "O que são VPC Endpoints e por que usá-los?",
        options: [
            "Endpoints para internet",
            "Conexões privadas da VPC para serviços AWS SEM usar internet — Gateway Endpoint (S3, DynamoDB, grátis) e Interface Endpoint (outros, via PrivateLink)",
            "Endpoints de DNS apenas",
            "Endpoints para VPN"
        ],
        correct: [1],
        explanation: "✅ VPC Endpoints: tráfego para AWS services fica dentro da rede AWS (nunca sai para internet). Gateway: S3 e DynamoDB (gratuito, route table). Interface: 100+ services (ENI, cobra por hora + dados). Segurança + performance.",
        topic: "technology",
        domain: "technology"
    }
];

technologyQuestions.push(...technologyLote4);
