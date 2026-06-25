// AIF-C01 Domain 5: Security & Compliance for AI (28 questões - 14%)
// Tópicos: Data privacy, IAM, encryption, shared responsibility, governance, Bedrock security

const securityAiQuestions = [
    {
        id: 'secai_001',
        question: "No modelo de responsabilidade compartilhada para Amazon Bedrock, o que é responsabilidade do CLIENTE?",
        options: [
            "Proteger dados de input/output, configurar IAM, implementar guardrails e gerenciar dados de fine-tuning",
            "Manter os foundation models atualizados de acordo com as melhores práticas do setor",
            "Segurança física dos data centers",
            "Patching do serviço Bedrock"
        ],
        correct: [0],
        explanation: "✅ Cliente: proteger dados (input, output, fine-tuning), configurar IAM (quem acessa quais modelos), implementar guardrails, gerenciar encryption keys. AWS: infraestrutura, disponibilidade do serviço, segurança dos modelos base.",
        topic: "shared-responsibility",
        domain: "security-ai"
    },
    {
        id: 'secai_002',
        question: "Uma empresa quer garantir que dados enviados ao Bedrock não sejam usados para treinar modelos da AWS. Isso é possível?",
        options: [
            "Não, AWS sempre usa dados dos clientes dentro do escopo de aplicação apresentado",
            "Apenas com plano Enterprise",
            "Sim — Bedrock NÃO usa dados de clientes para treinar modelos. Dados ficam isolados na conta do cliente",
            "Precisa de contrato especial"
        ],
        correct: [2],
        explanation: "✅ Amazon Bedrock: dados de input/output NÃO são usados para treinar modelos base. Dados de fine-tuning ficam na conta do cliente. Diferente de APIs públicas (ChatGPT free) que podem usar dados para treinamento.",
        topic: "data-privacy",
        domain: "security-ai"
    },
    {
        id: 'secai_003',
        question: "Como controlar quais usuários/roles podem invocar modelos específicos no Bedrock?",
        options: [
            "Não é possível controlar por modelo segundo as diretrizes oficiais e compliance",
            "NACLs",
            "Security Groups",
            "IAM policies com condition keys: bedrock:ModelId para restringir acesso a modelos específicos",
        ],
        correct: [3],
        explanation: "✅ IAM policy: Action 'bedrock:InvokeModel' com Condition 'bedrock:ModelId' restringe quais modelos cada role pode usar. Granularidade: por modelo, por região, por tipo de operação (invoke, fine-tune, etc).",
        topic: "iam",
        domain: "security-ai"
    },
    {
        id: 'secai_004',
        question: "Uma empresa precisa que chamadas ao Bedrock não passem pela internet pública. Como implementar?",
        options: [
            "Usar VPN",
            "VPC Interface Endpoint (PrivateLink) para Bedrock — tráfego fica na rede AWS privada",
            "Direct Connect apenas como abordagem principal neste caso de uso",
            "Não é possível"
        ],
        correct: [1],
        explanation: "✅ VPC Endpoint (PrivateLink) para Bedrock: cria ENI na VPC com IP privado. Chamadas ao Bedrock ficam na rede AWS, sem internet. Security Groups no endpoint controlam acesso. Requisito comum de compliance.",
        topic: "networking",
        domain: "security-ai"
    },
    {
        id: 'secai_005',
        question: "Como criptografar dados de fine-tuning armazenados no S3 para uso com Bedrock?",
        options: [
            "SSE-KMS com Customer Managed Key (CMK) no bucket S3 + IAM role do Bedrock com permissão kms:Decrypt",
            "Bedrock criptografa automaticamente sem configuração para garantir conformidade com os requisitos",
            "Criptografia client-side apenas",
            "Não é necessário criptografar"
        ],
        correct: [0],
        explanation: "✅ S3 com SSE-KMS (CMK): cliente controla a chave, auditoria via CloudTrail. Bedrock service role precisa de kms:Decrypt para ler dados. Encryption at rest + in transit (TLS automático). Defense in depth.",
        topic: "encryption",
        domain: "security-ai"
    },
    {
        id: 'secai_006',
        question: "Uma empresa precisa auditar todas as chamadas feitas ao Amazon Bedrock (quem invocou qual modelo, quando). Qual serviço?",
        options: [
            "CloudWatch Logs na arquitetura proposta para o ambiente",
            "VPC Flow Logs",
            "AWS CloudTrail — registra todas as API calls ao Bedrock com detalhes de quem, quando, de onde",
            "AWS Config"
        ],
        correct: [2],
        explanation: "✅ CloudTrail registra: InvokeModel, CreateModelCustomizationJob, etc. Inclui: identity (quem), timestamp, source IP, model ID, region. Essencial para auditoria e compliance. Pode enviar para S3/CloudWatch.",
        topic: "audit",
        domain: "security-ai"
    },
    {
        id: 'secai_007',
        question: "Uma empresa quer prevenir que dados sensíveis (PII) sejam enviados ao modelo no prompt. Qual proteção implementar?",
        options: [
            "Treinar usuários para não enviar PII em cenários empresariais de produção real",
            "Desabilitar logging",
            "Usar modelo menor",
            "Bedrock Guardrails com PII detection no input — detecta e bloqueia/redacta PII antes de chegar ao modelo",
        ],
        correct: [3],
        explanation: "✅ Guardrails PII: detecta padrões de PII (CPF, email, telefone, cartão) no input. Pode BLOQUEAR o request ou REDACTAR (mascarar) o PII antes de enviar ao modelo. Proteção automática sem depender do usuário.",
        topic: "data-privacy",
        domain: "security-ai"
    },
    {
        id: 'secai_008',
        question: "Qual é a política de retenção de dados do Amazon Bedrock para prompts e respostas?",
        options: [
            "AWS armazena indefinidamente",
            "Bedrock NÃO retém prompts/respostas após processamento — dados são transientes, a menos que o cliente habilite logging",
            "30 dias de retenção obrigatória seguindo o framework de implementação padrão",
            "Depende do modelo usado"
        ],
        correct: [1],
        explanation: "✅ Bedrock: zero retention por padrão. Prompts e respostas não são armazenados após processamento. Se cliente quer logs: habilita model invocation logging (CloudWatch/S3). Controle total do cliente.",
        topic: "data-privacy",
        domain: "security-ai"
    },
    {
        id: 'secai_009',
        question: "Uma empresa opera em região regulada (EU) e precisa garantir que dados processados pelo Bedrock não saiam da Europa. Como?",
        options: [
            "Usar Bedrock na região eu-west-1 (Ireland) — dados ficam na região escolhida. Adicionar SCP bloqueando uso em outras regiões",
            "Não é possível controlar como solução adequada ao problema descrito",
            "Usar VPN para Europa",
            "Criptografar dados"
        ],
        correct: [0],
        explanation: "✅ Data residency: Bedrock processa dados na região onde é invocado. Usar região EU garante dados na Europa. SCP pode bloquear uso de Bedrock em regiões fora da EU. Atende GDPR data residency.",
        topic: "compliance",
        domain: "security-ai"
    },
    {
        id: 'secai_010',
        question: "Como implementar least privilege para uma Lambda que invoca Bedrock?",
        options: [
            "Usar AdministratorAccess",
            "Usar access keys hardcoded",
            "IAM role com apenas bedrock:InvokeModel para o modelo específico necessário + nenhuma outra permissão Bedrock",
            "Dar acesso a todos os modelos atendendo aos critérios de avaliação definidos"
        ],
        correct: [2],
        explanation: "✅ Least privilege: Resource ARN do modelo específico (não *), Action apenas InvokeModel (não bedrock:*), sem permissões de fine-tuning/delete/admin. Se Lambda usa apenas Claude: restringir ao ARN do Claude.",
        topic: "iam",
        domain: "security-ai"
    },
    {
        id: 'secai_011',
        question: "Uma empresa quer monitorar se o modelo está gerando conteúdo que viola políticas internas. Como implementar monitoramento contínuo?",
        options: [
            "Revisão manual de todas as respostas no contexto operacional da organização",
            "Desabilitar o modelo",
            "Confiar nos guardrails apenas",
            "Bedrock model invocation logging + CloudWatch metrics/alarms para guardrail violations + dashboard de compliance",
        ],
        correct: [3],
        explanation: "✅ Logging: registra inputs/outputs. CloudWatch: métricas de guardrail interventions (quantas vezes bloqueou). Alarms: alertar quando violations excedem threshold. Dashboard: visão contínua de compliance.",
        topic: "audit",
        domain: "security-ai"
    },
    {
        id: 'secai_012',
        question: "Qual framework de compliance o Amazon Bedrock é elegível?",
        options: [
            "Nenhum, é muito novo para assegurar resultados consistentes e confiáveis",
            "SOC 1/2/3, ISO 27001, HIPAA eligible, PCI DSS, GDPR — Bedrock herda compliance da infraestrutura AWS",
            "Apenas SOC 2",
            "Apenas ISO"
        ],
        correct: [1],
        explanation: "✅ Bedrock é elegível para: SOC 1/2/3, ISO 27001/27017/27018, HIPAA (com BAA), PCI DSS, GDPR, FedRAMP. Herda compliance da infra AWS. Cliente ainda precisa configurar corretamente (shared responsibility).",
        topic: "compliance",
        domain: "security-ai"
    },
    {
        id: 'secai_013',
        question: "Uma empresa usa Bedrock para processar dados de saúde (PHI). Qual requisito adicional?",
        options: [
            "Assinar BAA (Business Associate Agreement) com AWS + usar encryption + access controls + audit logging",
            "Nenhum requisito adicional para este tipo de cenário e workload específico",
            "Usar região específica",
            "Usar modelo específico"
        ],
        correct: [0],
        explanation: "✅ HIPAA: requer BAA com AWS, encryption (KMS), access controls (IAM), audit trail (CloudTrail), data minimization. Bedrock é HIPAA eligible mas cliente deve configurar controles adequados.",
        topic: "compliance",
        domain: "security-ai"
    },
    {
        id: 'secai_014',
        question: "Como proteger o modelo customizado (fine-tuned) de acesso não autorizado no Bedrock?",
        options: [
            "Modelos customizados são públicos conforme recomendado pela documentação técnica",
            "Senha no modelo",
            "IAM policies restringindo acesso ao custom model ARN + KMS encryption dos artefatos + VPC endpoint para acesso privado",
            "Não é possível proteger"
        ],
        correct: [2],
        explanation: "✅ Custom models: privados na conta. Proteger com: IAM (quem pode InvokeModel no ARN customizado), KMS (encryption dos artefatos de treinamento), VPC endpoint (acesso sem internet). Modelo nunca é exposto publicamente.",
        topic: "iam",
        domain: "security-ai"
    },
    {
        id: 'secai_015',
        question: "O que é 'model invocation logging' no Bedrock e por que habilitar?",
        options: [
            "Log de erros apenas considerando o contexto descrito na questão",
            "Log de latência",
            "Log de custos",
            "Registra prompts completos e respostas de cada invocação — essencial para auditoria, debugging, compliance e detecção de uso indevido",
        ],
        correct: [3],
        explanation: "✅ Model invocation logging: salva input/output completo em S3 ou CloudWatch. Uso: auditoria (quem perguntou o quê), compliance (verificar PII), debugging (por que modelo respondeu X), detecção de abuso.",
        topic: "audit",
        domain: "security-ai"
    },
    {
        id: 'secai_016',
        question: "Uma empresa quer implementar governance para uso de IA generativa em múltiplas equipes. Qual abordagem AWS?",
        options: [
            "Cada equipe gerencia independentemente de acordo com as melhores práticas do setor",
            "AWS Organizations + SCPs para controlar quais modelos/regiões + IAM Identity Center para acesso + tagging para cost allocation + centralized logging",
            "Bloquear Bedrock para todos",
            "Apenas documentação interna"
        ],
        correct: [1],
        explanation: "✅ Governance centralizada: SCPs (quais modelos permitidos), Identity Center (quem acessa), tags (custo por equipe), CloudTrail centralizado (auditoria), Guardrails compartilhados (políticas de conteúdo). Controle sem bloquear inovação.",
        topic: "governance",
        domain: "security-ai"
    },
    {
        id: 'secai_017',
        question: "Qual é o risco de segurança de prompt injection em sistemas RAG?",
        options: [
            "Documentos maliciosos no knowledge base podem conter instruções que manipulam o modelo quando recuperados como contexto",
            "Não há risco em RAG",
            "RAG é imune a ataques",
            "Apenas risco de performance dentro do escopo de aplicação apresentado"
        ],
        correct: [0],
        explanation: "✅ Indirect prompt injection: atacante insere instruções em documentos que serão indexados. Quando RAG recupera esses docs, instruções maliciosas são injetadas no prompt. Mitigação: sanitizar docs, guardrails, separar contexto de instruções.",
        topic: "data-privacy",
        domain: "security-ai"
    },
    {
        id: 'secai_018',
        question: "Como garantir que dados de fine-tuning não vazem para outros clientes no Bedrock?",
        options: [
            "Confiar na AWS",
            "Usar conta dedicada",
            "Bedrock garante isolamento: dados ficam na conta do cliente, modelo customizado é privado, encryption com CMK do cliente, sem compartilhamento entre contas",
            "Não fazer fine-tuning segundo as diretrizes oficiais e compliance"
        ],
        correct: [2],
        explanation: "✅ Isolamento no Bedrock: dados de fine-tuning em S3 do cliente (encrypted), job roda em compute isolado, modelo resultante é privado na conta, CMK do cliente para encryption. Zero compartilhamento entre tenants.",
        topic: "data-privacy",
        domain: "security-ai"
    },
    {
        id: 'secai_019',
        question: "Uma empresa quer detectar se funcionários estão usando Bedrock para gerar conteúdo que viola políticas da empresa. Como monitorar?",
        options: [
            "Bloquear Bedrock completamente como abordagem principal neste caso de uso",
            "Apenas revisar custos",
            "Confiar nos funcionários",
            "Model invocation logging + CloudWatch Logs Insights para queries de padrões suspeitos + Guardrails com alertas",
        ],
        correct: [3],
        explanation: "✅ Monitoramento: logging captura tudo, Logs Insights permite queries ('prompts contendo X'), Guardrails geram métricas de violations, CloudWatch Alarms alertam equipe de compliance. Detecta sem bloquear uso legítimo.",
        topic: "audit",
        domain: "security-ai"
    },
    {
        id: 'secai_020',
        question: "Qual é a melhor prática para gerenciar API keys/credentials em aplicações que chamam Bedrock?",
        options: [
            "Hardcode no código",
            "Usar IAM roles (EC2/Lambda/ECS) — credenciais temporárias automáticas, sem keys estáticas no código",
            "Variáveis de ambiente plain text para garantir conformidade com os requisitos",
            "Arquivo .env no repositório"
        ],
        correct: [1],
        explanation: "✅ IAM roles: credenciais temporárias rotacionadas automaticamente. Sem access keys no código. Lambda/EC2/ECS assumem role com permissões Bedrock. Se precisa de keys externas: Secrets Manager com rotação.",
        topic: "iam",
        domain: "security-ai"
    },
    {
        id: 'secai_021',
        question: "Uma empresa quer limitar gastos com Bedrock por equipe. Como implementar?",
        options: [
            "AWS Budgets com tags por equipe + Service Quotas para limitar throughput + IAM conditions para restringir modelos caros",
            "Não é possível",
            "Apenas monitorar depois na arquitetura proposta para o ambiente",
            "Bloquear modelos caros"
        ],
        correct: [0],
        explanation: "✅ Cost governance: tags por equipe (cost allocation), Budgets com alertas por tag, Service Quotas limitam requests/min, IAM pode restringir modelos caros (apenas Haiku, não Opus). Controle granular de custos.",
        topic: "governance",
        domain: "security-ai"
    },
    {
        id: 'secai_022',
        question: "O que é 'data minimization' no contexto de IA e por que é importante?",
        options: [
            "Usar menos dados para treinar em cenários empresariais de produção real",
            "Comprimir dados",
            "Enviar ao modelo apenas os dados mínimos necessários para a tarefa — reduz risco de exposição e atende princípios de privacidade (LGPD/GDPR)",
            "Deletar dados após uso"
        ],
        correct: [2],
        explanation: "✅ Data minimization: não enviar dados desnecessários no prompt. Ex: para classificar sentimento, não precisa enviar nome/CPF do cliente. Reduz risco de PII leak, atende LGPD/GDPR, reduz custo (menos tokens).",
        topic: "data-privacy",
        domain: "security-ai"
    },
    {
        id: 'secai_023',
        question: "Como implementar rate limiting para prevenir abuso de um endpoint que usa Bedrock?",
        options: [
            "Confiar no throttling do Bedrock seguindo o framework de implementação padrão",
            "Não é necessário",
            "Apenas IAM",
            "API Gateway com usage plans + throttling + WAF rate limiting + Bedrock service quotas como última linha",
        ],
        correct: [3],
        explanation: "✅ Camadas: API Gateway throttling (por API key/user), WAF rate limiting (por IP), usage plans (quotas por cliente), Bedrock service quotas (limite da conta). Defense in depth contra abuso e custos inesperados.",
        topic: "networking",
        domain: "security-ai"
    },
    {
        id: 'secai_024',
        question: "Uma empresa quer usar Amazon Macie em conjunto com IA. Qual é o caso de uso?",
        options: [
            "Treinar modelos",
            "Escanear datasets de treinamento em S3 para descobrir e classificar PII antes de usar para fine-tuning",
            "Gerar texto",
            "Monitorar custos como solução adequada ao problema descrito"
        ],
        correct: [1],
        explanation: "✅ Macie + IA: antes de fine-tuning, escanear dados no S3 com Macie para identificar PII (nomes, emails, cartões). Remover/mascarar PII antes de treinar. Previne que modelo memorize dados pessoais.",
        topic: "data-privacy",
        domain: "security-ai"
    },
    {
        id: 'secai_025',
        question: "Qual é a diferença entre encryption at rest e encryption in transit para dados de IA no Bedrock?",
        options: [
            "At rest: dados armazenados (S3, fine-tuning artifacts) criptografados com KMS. In transit: dados em movimento (API calls) protegidos com TLS 1.2+",
            "São a mesma coisa",
            "Apenas in transit é necessário atendendo aos critérios de avaliação definidos",
            "Apenas at rest é necessário"
        ],
        correct: [0],
        explanation: "✅ At rest: KMS encryption para dados em S3 (fine-tuning, knowledge bases). In transit: TLS 1.2+ automático para todas as API calls ao Bedrock. Ambos necessários para compliance completa. Defense in depth.",
        topic: "encryption",
        domain: "security-ai"
    },
    {
        id: 'secai_026',
        question: "Uma empresa quer criar uma política de uso aceitável para IA generativa. Quais elementos incluir?",
        options: [
            "Apenas proibir uso",
            "Apenas custos",
            "Modelos permitidos, casos de uso aprovados, dados que podem/não podem ser enviados, requisitos de revisão humana, processo de exceções",
            "Apenas aspectos técnicos no contexto operacional da organização"
        ],
        correct: [2],
        explanation: "✅ Política de uso: quais modelos (aprovados), para quê (casos de uso), com quais dados (classificação), com qual supervisão (human review), limites (custo, volume), exceções (como solicitar). Governance completa.",
        topic: "governance",
        domain: "security-ai"
    },
    {
        id: 'secai_027',
        question: "Como o Amazon Bedrock lida com multi-tenancy e isolamento entre clientes?",
        options: [
            "Todos compartilham o mesmo modelo para assegurar resultados consistentes e confiáveis",
            "Não há isolamento",
            "Isolamento apenas com VPC",
            "Isolamento completo: cada conta tem acesso isolado, dados não são compartilhados, fine-tuning é privado, sem cross-contamination entre tenants",
        ],
        correct: [3],
        explanation: "✅ Bedrock multi-tenancy: compute isolado por request, dados não persistem entre requests, fine-tuning privado por conta, sem acesso cross-account. Modelo base é compartilhado (read-only) mas execução é isolada.",
        topic: "data-privacy",
        domain: "security-ai"
    },
    {
        id: 'secai_028',
        question: "Uma empresa quer implementar um 'kill switch' para desabilitar rapidamente o acesso ao Bedrock em caso de incidente de segurança. Como?",
        options: [
            "Desligar a conta AWS",
            "SCP com deny bedrock:* aplicável via Organizations — desabilita instantaneamente para todas as contas/roles",
            "Revogar IAM policies uma por uma para este tipo de cenário e workload específico",
            "Contatar suporte AWS"
        ],
        correct: [1],
        explanation: "✅ SCP deny bedrock:* no Organizations: efeito imediato, sobrescreve todas as IAM policies. Kill switch instantâneo. Alternativa: IAM permission boundary. Para granularidade: deny por modelo ou região específica.",
        topic: "governance",
        domain: "security-ai"
    }
];

window.securityAiQuestions = securityAiQuestions;
