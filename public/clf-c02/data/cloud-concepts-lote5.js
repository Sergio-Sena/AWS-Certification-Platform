// CLF-C02 Cloud Concepts - Lote 5 (cc_031 a cc_040)
// Foco: Well-Architected pilares detalhados, benefícios específicos, AWS Snow Family

const cloudConceptsLote5 = [
    {
        id: 'cc_031',
        question: "Qual pilar do Well-Architected Framework foca em proteger dados, sistemas e ativos?",
        options: [
            "Security — proteger informações, sistemas e ativos através de controles e automação",
            "Reliability",
            "Cost Optimization",
            "Performance Efficiency"
        ],
        correct: [0],
        explanation: "✅ Security pillar: IAM, criptografia, detecção de ameaças, proteção de dados, incident response. Princípio: aplicar segurança em todas as camadas. Automação de controles de segurança.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_032',
        question: "Qual pilar do Well-Architected Framework foca em recuperar de falhas e atender demanda?",
        options: [
            "Operational Excellence",
            "Performance Efficiency",
            "Reliability — capacidade de recuperar de falhas e escalar para atender demanda",
            "Sustainability"
        ],
        correct: [2],
        explanation: "✅ Reliability: auto-recovery, escalar horizontalmente, parar de adivinhar capacidade, gerenciar mudanças com automação, testar procedimentos de recuperação. Multi-AZ e backups são implementações.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_033',
        question: "Qual pilar do Well-Architected Framework foca em usar recursos computacionais eficientemente?",
        options: [
            "Cost Optimization",
            "Security",
            "Operational Excellence",
            "Performance Efficiency — selecionar recursos certos, monitorar performance, evoluir com novas tecnologias",
        ],
        correct: [3],
        explanation: "✅ Performance Efficiency: selecionar tipo/tamanho certo de recurso, monitorar performance, usar serverless quando possível, experimentar com novas tecnologias, considerar mechanical sympathy.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_034',
        question: "Uma empresa precisa transferir 50TB de dados para AWS. Internet levaria semanas. Qual serviço físico usar?",
        options: [
            "AWS Direct Connect (link dedicado permanente)",
            "AWS Snowball — dispositivo físico enviado para transferência offline de grandes volumes de dados",
            "VPN Site-to-Site",
            "S3 Transfer Acceleration"
        ],
        correct: [1],
        explanation: "✅ Snow Family: Snowcone (8TB), Snowball Edge (80TB), Snowmobile (100PB — caminhão). Para transferências massivas onde internet é lenta/cara. Dispositivo chega, você copia dados, envia de volta. Criptografado.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_035',
        question: "O que diferencia uma 'managed service' de uma 'unmanaged service' na AWS?",
        options: [
            "Em managed services, AWS gerencia infra/manutenção (patches, backups, HA). Em unmanaged, o cliente gerencia tudo",
            "Preço apenas",
            "Managed services são gratuitos",
            "Não há diferença"
        ],
        correct: [0],
        explanation: "✅ Managed (RDS, DynamoDB): AWS cuida de patches, backups, HA, scaling. Cliente foca em dados/app. Unmanaged (EC2 com MySQL): cliente instala, configura, patcha, faz backup. Mais controle mas mais trabalho.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_036',
        question: "Uma empresa opera apenas em uma região e quer proteger contra desastre regional (terremoto). Qual estratégia?",
        options: [
            "Multi-AZ na mesma região",
            "Backup local apenas",
            "Multi-Region — replicar aplicação/dados em outra região para disaster recovery",
            "Usar instância maior"
        ],
        correct: [2],
        explanation: "✅ Multi-AZ protege contra falha de AZ. Multi-Region protege contra desastre regional inteiro. Trade-off: multi-region é mais caro e complexo, mas essencial para apps mission-critical. Estratégias: pilot light, warm standby, active-active.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_037',
        question: "Qual conceito cloud permite que desenvolvedores experimentem rapidamente sem medo de custos permanentes?",
        options: [
            "Lock-in",
            "Hardware dedicado",
            "Contratos anuais",
            "Experimentação de baixo custo — criar, testar e destruir recursos em minutos sem compromisso de longo prazo",
        ],
        correct: [3],
        explanation: "✅ Cloud permite: provisionar em minutos, testar hipóteses, destruir se não funcionar. Custo: apenas horas usadas. On-premises: comprar hardware → esperar entrega → instalar → testar → se falhar, hardware fica ocioso.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_038',
        question: "O que é 'loose coupling' e por que é importante na cloud?",
        options: [
            "Componentes fortemente dependentes um do outro",
            "Componentes independentes que se comunicam via interfaces — falha em um não derruba os outros",
            "Tudo em um único servidor",
            "Código monolítico"
        ],
        correct: [1],
        explanation: "✅ Loose coupling: componentes comunicam via APIs/mensagens (SQS, SNS). Se componente A falha, B continua funcionando (mensagens ficam na fila). Tight coupling: falha cascata. Design principle da cloud.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_039',
        question: "Uma empresa quer saber se está seguindo melhores práticas de arquitetura AWS. Qual ferramenta oferece revisão automatizada?",
        options: [
            "AWS Well-Architected Tool — questionnaire que avalia workloads contra os 6 pilares e recomenda melhorias",
            "AWS Inspector",
            "AWS Config",
            "Amazon CloudWatch"
        ],
        correct: [0],
        explanation: "✅ Well-Architected Tool: questionário interativo no console. Avalia workload contra os 6 pilares. Identifica riscos. Fornece recomendações com prioridade. Gratuito. Pode ser conduzido com Solutions Architect AWS.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    },
    {
        id: 'cc_040',
        question: "Qual é o benefício de 'deploy globalmente em minutos'?",
        options: [
            "Aplicação fica mais segura",
            "Expandir para novos mercados rapidamente, com baixa latência para usuários em qualquer continente, sem construir infraestrutura física",
            "Custos ficam menores automaticamente",
            "Não precisa de planejamento"
        ],
        correct: [1],
        explanation: "✅ Deploy global: AWS tem 30+ Regions. Em minutos: replicar stack via IaC para outra Region. Resultado: app disponível globalmente com latência local. Sem meses de procurement/construção de DC.",
        topic: "cloud-concepts",
        domain: "cloud-concepts"
    }
];

cloudConceptsQuestions.push(...cloudConceptsLote5);
