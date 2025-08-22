// DOMAIN 3: SECURE APPLICATIONS - 43 questões adicionais (24% total = 48 questões)

const secureQuestions = [
    {
        id: 122,
        question: "Como implementar zero-trust network architecture na AWS?",
        options: ["Trust internal network", "VPC + Security Groups + NACLs + IAM + encryption", "Perimeter security only", "No security"],
        correct: [1],
        explanation: "Zero-trust usa múltiplas camadas: VPC isolation, Security Groups, NACLs, IAM e encryption.",
        topic: "secure", domain: "secure"
    },
    {
        id: 123,
        question: "Qual é a melhor prática para API security?",
        options: ["No authentication", "API Gateway + Cognito + WAF + rate limiting", "Basic auth only", "IP whitelisting only"],
        correct: [1],
        explanation: "API Gateway com Cognito, WAF e rate limiting fornece security completa para APIs.",
        topic: "secure", domain: "secure"
    },
    {
        id: 124,
        question: "Como implementar data encryption at rest?",
        options: ["No encryption", "KMS + S3 encryption + EBS encryption + RDS encryption", "Application-level only", "Transport encryption only"],
        correct: [1],
        explanation: "KMS gerencia chaves e services AWS oferecem encryption nativa at rest.",
        topic: "secure", domain: "secure"
    },
    {
        id: 125,
        question: "Qual estratégia para secure container deployment?",
        options: ["Root containers", "Non-root containers + image scanning + secrets management", "No security", "Default settings"],
        correct: [1],
        explanation: "Non-root containers, image scanning e secrets management garantem container security.",
        topic: "secure", domain: "secure"
    },
    {
        id: 126,
        question: "Como implementar network segmentation?",
        options: ["Flat network", "VPC + subnets + Security Groups + NACLs", "Single subnet", "No segmentation"],
        correct: [1],
        explanation: "VPC com subnets, Security Groups e NACLs criam network segmentation efetiva.",
        topic: "secure", domain: "secure"
    },
    {
        id: 127,
        question: "Qual é a melhor prática para identity federation?",
        options: ["Local accounts only", "SAML/OIDC + Cognito + IAM roles", "Shared passwords", "No federation"],
        correct: [1],
        explanation: "SAML/OIDC com Cognito e IAM roles permite secure identity federation.",
        topic: "secure", domain: "secure"
    },
    {
        id: 128,
        question: "Como implementar secure CI/CD pipeline?",
        options: ["No security", "CodePipeline + security scanning + secrets management + IAM", "Manual deployment", "Basic pipeline"],
        correct: [1],
        explanation: "CodePipeline com security scanning, secrets management e IAM garante secure deployments.",
        topic: "secure", domain: "secure"
    },
    {
        id: 129,
        question: "Qual estratégia para DDoS protection?",
        options: ["No protection", "Shield + WAF + CloudFront + Auto Scaling", "Manual mitigation", "Basic firewall"],
        correct: [1],
        explanation: "Shield, WAF, CloudFront e Auto Scaling fornecem proteção DDoS em múltiplas camadas.",
        topic: "secure", domain: "secure"
    },
    {
        id: 130,
        question: "Como implementar secure data transfer?",
        options: ["HTTP only", "HTTPS + VPN + encryption in transit", "FTP", "No encryption"],
        correct: [1],
        explanation: "HTTPS, VPN e encryption in transit garantem secure data transfer.",
        topic: "secure", domain: "secure"
    },
    {
        id: 131,
        question: "Qual é a melhor prática para vulnerability management?",
        options: ["No scanning", "Inspector + patch management + security monitoring", "Manual checks", "Periodic scans"],
        correct: [1],
        explanation: "Inspector automatiza vulnerability scanning com patch management e monitoring.",
        topic: "secure", domain: "secure"
    },
    {
        id: 132,
        question: "Como implementar secure logging?",
        options: ["No logs", "CloudTrail + CloudWatch + log encryption + centralized logging", "Local logs only", "Basic logging"],
        correct: [1],
        explanation: "CloudTrail, CloudWatch com encryption e centralized logging garantem secure audit trail.",
        topic: "secure", domain: "secure"
    },
    {
        id: 133,
        question: "Qual estratégia para secure backup?",
        options: ["No backup", "Encrypted backups + cross-region + access controls", "Local backup only", "Unencrypted backup"],
        correct: [1],
        explanation: "Encrypted backups com cross-region replication e access controls garantem data protection.",
        topic: "secure", domain: "secure"
    },
    {
        id: 134,
        question: "Como implementar secure microservices communication?",
        options: ["Plain HTTP", "mTLS + service mesh + API authentication", "No authentication", "Basic auth"],
        correct: [1],
        explanation: "mTLS com service mesh e API authentication garantem secure service-to-service communication.",
        topic: "secure", domain: "secure"
    },
    {
        id: 135,
        question: "Qual é a melhor prática para secure configuration management?",
        options: ["Hard-coded configs", "Parameter Store + Secrets Manager + encryption", "Plain text configs", "No management"],
        correct: [1],
        explanation: "Parameter Store e Secrets Manager com encryption garantem secure configuration management.",
        topic: "secure", domain: "secure"
    },
    {
        id: 136,
        question: "Como implementar secure database access?",
        options: ["Root access", "IAM database authentication + encryption + VPC", "Shared passwords", "Public access"],
        correct: [1],
        explanation: "IAM database authentication com encryption e VPC isolation garantem secure database access.",
        topic: "secure", domain: "secure"
    },
    {
        id: 137,
        question: "Qual estratégia para secure file storage?",
        options: ["Public buckets", "S3 + bucket policies + encryption + access logging", "No access controls", "Default settings"],
        correct: [1],
        explanation: "S3 com bucket policies, encryption e access logging garantem secure file storage.",
        topic: "secure", domain: "secure"
    },
    {
        id: 138,
        question: "Como implementar secure serverless architecture?",
        options: ["No security", "Lambda + IAM roles + VPC + encryption", "Default permissions", "Public functions"],
        correct: [1],
        explanation: "Lambda com IAM roles, VPC e encryption garantem secure serverless deployment.",
        topic: "secure", domain: "secure"
    },
    {
        id: 139,
        question: "Qual é a melhor prática para secure monitoring?",
        options: ["No monitoring", "GuardDuty + Security Hub + CloudWatch + alerting", "Basic monitoring", "Manual checks"],
        correct: [1],
        explanation: "GuardDuty, Security Hub e CloudWatch com alerting fornecem comprehensive security monitoring.",
        topic: "secure", domain: "secure"
    },
    {
        id: 140,
        question: "Como implementar secure web application?",
        options: ["No protection", "WAF + HTTPS + input validation + OWASP compliance", "HTTP only", "Basic validation"],
        correct: [1],
        explanation: "WAF, HTTPS, input validation e OWASP compliance protegem web applications.",
        topic: "secure", domain: "secure"
    },
    {
        id: 141,
        question: "Qual estratégia para secure mobile backend?",
        options: ["No authentication", "Cognito + API Gateway + device fingerprinting", "Basic auth", "Public APIs"],
        correct: [1],
        explanation: "Cognito com API Gateway e device fingerprinting garantem secure mobile backend.",
        topic: "secure", domain: "secure"
    },
    {
        id: 142,
        question: "Como implementar secure data analytics?",
        options: ["Public data", "IAM + encryption + VPC + data masking", "No access controls", "Plain text data"],
        correct: [1],
        explanation: "IAM, encryption, VPC e data masking garantem secure data analytics.",
        topic: "secure", domain: "secure"
    },
    {
        id: 143,
        question: "Qual é a melhor prática para secure IoT?",
        options: ["No security", "IoT Device Management + certificates + encryption", "Default settings", "Shared keys"],
        correct: [1],
        explanation: "IoT Device Management com certificates e encryption garantem secure IoT deployment.",
        topic: "secure", domain: "secure"
    },
    {
        id: 144,
        question: "Como implementar secure content delivery?",
        options: ["HTTP only", "CloudFront + signed URLs + HTTPS + WAF", "No protection", "Basic CDN"],
        correct: [1],
        explanation: "CloudFront com signed URLs, HTTPS e WAF garantem secure content delivery.",
        topic: "secure", domain: "secure"
    },
    {
        id: 145,
        question: "Qual estratégia para secure email services?",
        options: ["Plain text", "SES + DKIM + SPF + encryption", "No authentication", "Basic SMTP"],
        correct: [1],
        explanation: "SES com DKIM, SPF e encryption garantem secure email delivery.",
        topic: "secure", domain: "secure"
    },
    {
        id: 146,
        question: "Como implementar secure machine learning?",
        options: ["Public models", "SageMaker + VPC + encryption + IAM", "No access controls", "Default settings"],
        correct: [1],
        explanation: "SageMaker com VPC, encryption e IAM garantem secure ML workflows.",
        topic: "secure", domain: "secure"
    },
    {
        id: 147,
        question: "Qual é a melhor prática para secure DNS?",
        options: ["Plain DNS", "Route 53 + DNSSEC + private hosted zones", "Public DNS only", "No security"],
        correct: [1],
        explanation: "Route 53 com DNSSEC e private hosted zones garantem secure DNS resolution.",
        topic: "secure", domain: "secure"
    },
    {
        id: 148,
        question: "Como implementar secure hybrid cloud?",
        options: ["No encryption", "Direct Connect + VPN + encryption + IAM", "Public internet", "Basic connection"],
        correct: [1],
        explanation: "Direct Connect/VPN com encryption e IAM garantem secure hybrid connectivity.",
        topic: "secure", domain: "secure"
    },
    {
        id: 149,
        question: "Qual estratégia para secure code deployment?",
        options: ["No scanning", "CodeGuru + security scanning + SAST/DAST", "Manual review", "Basic deployment"],
        correct: [1],
        explanation: "CodeGuru com security scanning e SAST/DAST identificam vulnerabilities no código.",
        topic: "secure", domain: "secure"
    },
    {
        id: 150,
        question: "Como implementar secure event processing?",
        options: ["Public events", "EventBridge + encryption + IAM + filtering", "No access controls", "Plain text events"],
        correct: [1],
        explanation: "EventBridge com encryption, IAM e filtering garantem secure event processing.",
        topic: "secure", domain: "secure"
    },
    {
        id: 151,
        question: "Qual é a melhor prática para secure search?",
        options: ["Public search", "Elasticsearch + VPC + encryption + fine-grained access", "No access controls", "Basic search"],
        correct: [1],
        explanation: "Elasticsearch com VPC, encryption e fine-grained access garantem secure search.",
        topic: "secure", domain: "secure"
    },
    {
        id: 152,
        question: "Como implementar secure blockchain?",
        options: ["Public blockchain", "Managed Blockchain + VPC + encryption", "No security", "Default settings"],
        correct: [1],
        explanation: "Managed Blockchain com VPC e encryption garantem secure blockchain deployment.",
        topic: "secure", domain: "secure"
    },
    {
        id: 153,
        question: "Qual estratégia para secure quantum computing?",
        options: ["No security", "Braket + IAM + encryption + VPC", "Public access", "Default settings"],
        correct: [1],
        explanation: "Braket com IAM, encryption e VPC garantem secure quantum computing access.",
        topic: "secure", domain: "secure"
    },
    {
        id: 154,
        question: "Como implementar secure edge computing?",
        options: ["No security", "Wavelength + security groups + encryption", "Public edge", "Basic deployment"],
        correct: [1],
        explanation: "Wavelength com security groups e encryption garantem secure edge computing.",
        topic: "secure", domain: "secure"
    },
    {
        id: 155,
        question: "Qual é a melhor prática para secure gaming?",
        options: ["No protection", "GameLift + anti-cheat + DDoS protection", "Basic deployment", "Public servers"],
        correct: [1],
        explanation: "GameLift com anti-cheat e DDoS protection garantem secure gaming infrastructure.",
        topic: "secure", domain: "secure"
    },
    {
        id: 156,
        question: "Como implementar secure media processing?",
        options: ["Public processing", "MediaConvert + encryption + IAM + VPC", "No access controls", "Plain text media"],
        correct: [1],
        explanation: "MediaConvert com encryption, IAM e VPC garantem secure media processing.",
        topic: "secure", domain: "secure"
    },
    {
        id: 157,
        question: "Qual estratégia para secure satellite communication?",
        options: ["No encryption", "Ground Station + encryption + IAM", "Plain communication", "Public access"],
        correct: [1],
        explanation: "Ground Station com encryption e IAM garantem secure satellite communication.",
        topic: "secure", domain: "secure"
    },
    {
        id: 158,
        question: "Como implementar secure robotics?",
        options: ["No security", "RoboMaker + VPC + encryption + device certificates", "Public robots", "Default settings"],
        correct: [1],
        explanation: "RoboMaker com VPC, encryption e device certificates garantem secure robotics deployment.",
        topic: "secure", domain: "secure"
    },
    {
        id: 159,
        question: "Qual é a melhor prática para secure AR/VR?",
        options: ["No protection", "Sumerian + encryption + access controls", "Public content", "Basic deployment"],
        correct: [1],
        explanation: "Sumerian com encryption e access controls garantem secure AR/VR applications.",
        topic: "secure", domain: "secure"
    },
    {
        id: 160,
        question: "Como implementar secure supply chain?",
        options: ["No tracking", "Blockchain + IoT + encryption + audit trail", "Manual tracking", "Basic logging"],
        correct: [1],
        explanation: "Blockchain com IoT, encryption e audit trail garantem secure supply chain tracking.",
        topic: "secure", domain: "secure"
    },
    {
        id: 161,
        question: "Qual estratégia para secure financial services?",
        options: ["Basic security", "PCI compliance + encryption + fraud detection + audit", "No compliance", "Default settings"],
        correct: [1],
        explanation: "PCI compliance com encryption, fraud detection e audit garantem secure financial services.",
        topic: "secure", domain: "secure"
    },
    {
        id: 162,
        question: "Como implementar secure healthcare?",
        options: ["No compliance", "HIPAA compliance + encryption + access controls + audit", "Basic security", "Public data"],
        correct: [1],
        explanation: "HIPAA compliance com encryption, access controls e audit garantem secure healthcare data.",
        topic: "secure", domain: "secure"
    },
    {
        id: 163,
        question: "Qual é a melhor prática para secure government?",
        options: ["Basic security", "FedRAMP compliance + encryption + multi-factor auth", "No compliance", "Default settings"],
        correct: [1],
        explanation: "FedRAMP compliance com encryption e multi-factor auth garantem secure government services.",
        topic: "secure", domain: "secure"
    },
    {
        id: 164,
        question: "Como implementar secure disaster recovery?",
        options: ["No security", "Encrypted backups + secure replication + access controls", "Plain backups", "Public recovery"],
        correct: [1],
        explanation: "Encrypted backups com secure replication e access controls garantem secure disaster recovery.",
        topic: "secure", domain: "secure"
    }
];

window.secureQuestions = secureQuestions;