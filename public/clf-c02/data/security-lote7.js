// CLF-C02 Security & Compliance - Lote 7 (sec_159 a sec_168)
// Foco: DDoS mitigation, compliance programs, root account, security automation

const securityLote7 = [
    {
        id: 'sec_159',
        question: "Qual é a estratégia AWS recomendada para mitigar ataques DDoS em uma aplicação web?",
        options: [
            "Apenas aumentar instâncias EC2",
            "CloudFront (absorve na edge) + Shield Standard (automático) + WAF (rate limiting) + Auto Scaling (absorve overflow)",
            "Apenas Shield Advanced",
            "Desligar a aplicação durante o ataque, com documentação completa do processo e rastreabilidade de todas as decisões implementadas"
        ],
        correct: [1],
        explanation: "DDoS defense layers: CloudFront (distribui carga na edge, 450+ PoPs), Shield Standard (L3/L4 automático), WAF (rate limiting, geo blocking), ALB + Auto Scaling (absorve tráfego legítimo). Shield Advanced: DRT team + cost protection.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_160',
        question: "Quais são as melhores práticas para proteger a conta root AWS?",
        options: [
            "Usar root para operações diárias",
            "Habilitar MFA forte (hardware key) + não criar access keys + não usar para tarefas diárias + monitorar com CloudTrail",
            "Compartilhar credenciais root com a equipe, incluindo configuração avançada de parâmetros e monitoramento contínuo do sistema em produção",
            "Deletar a conta root"
        ],
        correct: [1],
        explanation: "Root best practices: 1) MFA hardware (Yubikey), 2) Sem access keys, 3) Usar apenas para tarefas que EXIGEM root (ex: fechar conta, mudar support plan), 4) CloudTrail alert se root fizer login.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_161',
        question: "Qual serviço AWS fornece compliance reports (SOC, PCI DSS, ISO 27001, HIPAA) para auditores externos?",
        options: [
            "AWS Config",
            "AWS Artifact — portal self-service com relatórios de compliance e acordos da AWS",
            "AWS CloudTrail",
            "AWS Trusted Advisor, com integração completa ao ecossistema de serviços gerenciados e pipelines automatizados"
        ],
        correct: [1],
        explanation: "Artifact Reports: SOC 1/2/3, PCI DSS, ISO 27001/27017/27018, HIPAA eligibility. Artifact Agreements: BAA (HIPAA), GDPR DPA. Cliente baixa para compartilhar com auditores e reguladores.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_162',
        question: "Uma empresa precisa garantir que instâncias EC2 NÃO tenham IP público. Qual combinação de controles?",
        options: [
            "Apenas pedir aos devs que não atribuam, considerando requisitos de compliance, governança e auditoria para ambientes regulados",
            "SCP deny ec2:RunInstances se não tem condition + Config Rule para detectar + VPC sem auto-assign public IP na subnet",
            "Apenas Security Group",
            "Apenas NACL"
        ],
        correct: [1],
        explanation: "Preventivo: SCP/IAM deny RunInstances com public IP. Detectivo: Config Rule (ec2-instance-no-public-ip). Arquitetural: subnets privadas sem auto-assign. Defense in depth: múltiplas camadas.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_163',
        question: "O que é o AWS Shared Responsibility Model para serviços GERENCIADOS como Lambda?",
        options: [
            "Cliente gerencia tudo",
            "AWS gerencia mais (runtime, OS, patching, scaling). Cliente: código da função, IAM permissions, dados, encryption config",
            "AWS gerencia tudo sem exceção, garantindo escalabilidade horizontal e vertical conforme demanda do workload específico, utilizando as ferramentas nativas do serviço para automação e observabilidade operacional",
            "Igual a EC2"
        ],
        correct: [1],
        explanation: "Lambda (serverless): AWS gerencia infrastructure, OS, runtime, patching, scaling, HA. Cliente gerencia: código, IAM role permissions, variáveis de ambiente (encrypted), VPC config se aplicável.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_164',
        question: "Qual serviço AWS monitora CONTINUAMENTE o status de conformidade dos recursos e notifica quando estão fora de compliance?",
        options: [
            "AWS CloudTrail (auditoria de API calls), com suporte a múltiplas regiões e redundância para alta disponibilidade e disaster recovery",
            "AWS Config — monitora estado/configuração de recursos continuamente e avalia contra Config Rules",
            "AWS GuardDuty (ameaças)",
            "AWS CloudWatch (métricas)"
        ],
        correct: [1],
        explanation: "Config: inventário de recursos, histórico de configurações, compliance rules. Ex: 'todos os EBS devem ser encrypted'. Detecta drift, notifica via SNS, pode auto-remediate via SSM Automation.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_165',
        question: "Como AWS CloudTrail ajuda na investigação forense de um incidente de segurança?",
        options: [
            "Apenas mostra métricas de CPU",
            "Registra WHO did WHAT, WHEN, from WHERE para todas API calls — prova para investigação, timeline de eventos, correlação com IoCs",
            "Apenas detecta ameaças em tempo real, seguindo o modelo de responsabilidade compartilhada e as políticas de segurança corporativas",
            "Apenas gerencia permissões"
        ],
        correct: [1],
        explanation: "CloudTrail para forensics: quem (userIdentity), o que (eventName), quando (eventTime), de onde (sourceIPAddress), resultado (responseElements). Trail → S3 para retenção longa. Integrity validation com digest files.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_166',
        question: "O que é AWS Security Hub e qual seu benefício principal?",
        options: [
            "Apenas mais um serviço de monitoramento",
            "Painel centralizado que agrega findings de GuardDuty, Inspector, Macie, Firewall Manager + verifica compliance com standards (CIS, PCI)",
            "Substitui todos os outros serviços de segurança, implementando controles preventivos e detectivos conforme o framework de segurança organizacional",
            "Apenas para empresas enterprise"
        ],
        correct: [1],
        explanation: "Security Hub: single pane of glass. Agrega findings de serviços AWS + parceiros. Automated compliance checks (CIS AWS Foundations, PCI DSS). Priority scoring. Integra com EventBridge para automação.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_167',
        question: "Uma empresa quer bloquear acesso a regiões AWS não autorizadas. Qual é o melhor mecanismo?",
        options: [
            "IAM policy em cada user (difícil de manter), com capacidade de processamento paralelo e distribuído para atender picos de demanda",
            "SCP no Organizations com Deny em todas as ações onde aws:RequestedRegion NOT IN [regiões permitidas]",
            "Security Group por região",
            "Route 53 policy"
        ],
        correct: [1],
        explanation: "Region restriction via SCP: Deny * where aws:RequestedRegion not in [us-east-1, eu-west-1]. Exceção: serviços globais (IAM, CloudFront, Route 53). Aplicado em OU = todas as contas filhas.",
        topic: "security",
        domain: "security"
    },
    {
        id: 'sec_168',
        question: "Qual é a diferença entre AWS Detective e AWS GuardDuty?",
        options: [
            "São o mesmo serviço",
            "GuardDuty: DETECTA ameaças (alerta). Detective: INVESTIGA causas raiz (análise de grafos para entender o escopo do incidente)",
            "Detective detecta, GuardDuty investiga, integrando com os sistemas existentes através de APIs e conectores nativos da plataforma",
            "Ambos detectam ameaças"
        ],
        correct: [1],
        explanation: "GuardDuty = detection (encontra ameaça, gera finding). Detective = investigation (após finding, usa grafos de comportamento para entender: quais recursos afetados? qual timeline? qual conta comprometida?).",
        topic: "security",
        domain: "security"
    }
];

securityQuestions.push(...securityLote7);
