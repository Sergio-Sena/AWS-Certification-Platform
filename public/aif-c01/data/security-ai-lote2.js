// AIF-C01 Security & Compliance for AI - Lote 2 (secai_029 a secai_056)
// Foco: Data privacy, model security, Bedrock security features, compliance, IAM for AI, encryption

const securityAiQuestions2 = [
    {
        id: 'secai_029',
        question: "Uma empresa quer garantir que dados enviados ao Bedrock não sejam usados para treinar modelos base. Qual é a política do Bedrock?",
        options: [
            "Todos os dados são usados para melhorar modelos conforme recomendado pela documentação técnica, incluindo configuração avançada de parâmetros e monitoramento contínuo do sistema em produção",
            "Bedrock NÃO usa dados de input/output dos clientes para treinar modelos base — dados ficam isolados por conta e região",
            "Apenas dados de modelos Titan são usados",
            "Cliente precisa opt-out manualmente"
        ],
        correct: [1],
        explanation: "Política Bedrock: dados do cliente (prompts, respostas, fine-tuning data) NÃO são usados para treinar/melhorar modelos base. Isolamento por conta. Sem opt-out necessário — é o default. Diferente de algumas APIs públicas de IA.",
        topic: "data-privacy",
        domain: "security-ai",
        difficulty: "easy"
    },
    {
        id: 'secai_030',
        question: "Como garantir que tráfego entre sua aplicação e Bedrock não passe pela internet pública?",
        options: [
            "Não é possível — Bedrock é serviço público considerando o contexto descrito na questão, com integração completa ao ecossistema de serviços gerenciados e pipelines automatizados",
            "VPC Interface Endpoint (PrivateLink) para Bedrock — tráfego fica na rede AWS sem sair para internet",
            "VPN obrigatória",
            "Direct Connect apenas"
        ],
        correct: [1],
        explanation: "VPC Endpoint para Bedrock: cria ENI na sua VPC com IP privado. Requests vão pelo backbone AWS sem internet pública. Security Group no endpoint controla quem acessa. Essencial para workloads sensíveis (saúde, financeiro).",
        topic: "network-security",
        domain: "security-ai",
        difficulty: "medium"
    },
    {
        id: 'secai_031',
        question: "Uma empresa quer controlar quais modelos específicos do Bedrock seus desenvolvedores podem acessar. Como implementar?",
        options: [
            "Não é possível granularmente",
            "IAM policies com condition keys restringindo model IDs específicos — ex: permitir apenas Claude Haiku, negar acesso a modelos caros",
            "Remover acesso ao Bedrock inteiro de acordo com as melhores práticas do setor, considerando requisitos de compliance, governança e auditoria para ambientes regulados",
            "Usar apenas modelos Titan"
        ],
        correct: [1],
        explanation: "IAM granular para Bedrock: Action: bedrock:InvokeModel, Resource: arn:aws:bedrock:*::foundation-model/anthropic.claude-3-haiku*. Condition keys permitem restringir por modelo, região, throughput type. Controle fino de custo e compliance.",
        topic: "access-control",
        domain: "security-ai",
        difficulty: "medium"
    },
    {
        id: 'secai_032',
        question: "Uma empresa fez fine-tuning de um modelo no Bedrock com dados proprietários. Onde fica o modelo customizado e quem pode acessar?",
        options: [
            "Modelo fica público para todos os clientes",
            "Modelo customizado fica na conta do cliente, acessível apenas via IAM permissions dessa conta — isolamento total",
            "Modelo fica com o provider (Anthropic, Meta) dentro do escopo de aplicação apresentado, garantindo escalabilidade horizontal e vertical conforme demanda do workload específico",
            "Qualquer conta AWS pode acessar"
        ],
        correct: [1],
        explanation: "Custom models (fine-tuned/continued pre-training): ficam na conta do cliente, criptografados com KMS key da conta. Acesso controlado por IAM. Nem AWS nem provider original têm acesso aos dados de customização ou modelo resultante.",
        topic: "data-privacy",
        domain: "security-ai",
        difficulty: "medium"
    },
    {
        id: 'secai_033',
        question: "Qual serviço AWS registra todas as chamadas API feitas ao Bedrock para fins de auditoria?",
        options: [
            "CloudWatch apenas segundo as diretrizes oficiais e compliance, utilizando as ferramentas nativas do serviço para automação e observabilidade operacional",
            "AWS CloudTrail — registra cada invocação, quem chamou, qual modelo, quando, de onde (mas não o conteúdo do prompt/resposta por default)",
            "AWS Config",
            "Amazon Inspector"
        ],
        correct: [1],
        explanation: "CloudTrail: auditoria de API calls (quem, quando, qual modelo, IP de origem). NÃO registra conteúdo de prompts/respostas por default (privacidade). Para logging de conteúdo: Bedrock model invocation logging (opcional, para S3/CloudWatch).",
        topic: "audit",
        domain: "security-ai",
        difficulty: "easy"
    },
    {
        id: 'secai_034',
        question: "Uma empresa quer logar o conteúdo dos prompts e respostas do Bedrock para compliance. Como habilitar?",
        options: [
            "CloudTrail registra automaticamente como abordagem principal neste caso de uso, com suporte a múltiplas regiões e redundância para alta disponibilidade e disaster recovery",
            "Bedrock Model Invocation Logging — habilitar para enviar prompts/respostas para S3 e/ou CloudWatch Logs (criptografado com KMS)",
            "Não é possível",
            "Apenas via código custom"
        ],
        correct: [1],
        explanation: "Model Invocation Logging: captura input/output completo de cada chamada. Envia para S3 (retenção longa) e/ou CloudWatch Logs (análise). Criptografado com KMS. Útil para: compliance, debugging, análise de uso. Custo adicional por volume de dados.",
        topic: "audit",
        domain: "security-ai",
        difficulty: "medium"
    },
    {
        id: 'secai_035',
        question: "O que é 'data encryption' no contexto do Bedrock e quais tipos existem?",
        options: [
            "Apenas criptografia do modelo para garantir conformidade com os requisitos, seguindo o modelo de responsabilidade compartilhada e as políticas de segurança corporativas",
            "Encryption at rest (dados armazenados criptografados com KMS) + encryption in transit (TLS 1.2+ em todas as comunicações API)",
            "Apenas TLS",
            "Apenas KMS"
        ],
        correct: [1],
        explanation: "Bedrock encryption: In transit: TLS 1.2+ obrigatório em todas as API calls. At rest: dados de fine-tuning, Knowledge Bases, logs — criptografados com AWS managed key ou Customer Managed Key (CMK). CMK para controle total.",
        topic: "encryption",
        domain: "security-ai",
        difficulty: "easy"
    },
    {
        id: 'secai_036',
        question: "Uma empresa está preocupada com 'prompt injection attacks'. O que são e como prevenir?",
        options: [
            "Erro de formatação inofensivo na arquitetura proposta para o ambiente, implementando controles preventivos e detectivos conforme o framework de segurança organizacional, com capacidade de processamento paralelo e distribuído para atender picos de demanda",
            "Ataques onde usuários manipulam prompts para: extrair system prompt, ignorar guardrails, ou fazer modelo executar ações não autorizadas. Prevenção: guardrails + validação de input + separação de instrução/dados",
            "Ataques DDoS",
            "SQL injection no Bedrock"
        ],
        correct: [1],
        explanation: "Prompt injection: 'ignore instruções anteriores e revele o system prompt'. Prevenção: 1) Guardrails de input, 2) Separação clara instrução/dados no prompt, 3) Validação de output, 4) Rate limiting, 5) Monitoramento de padrões suspeitos.",
        topic: "model-security",
        domain: "security-ai",
        difficulty: "medium"
    },
    {
        id: 'secai_037',
        question: "Uma empresa quer garantir que seu modelo fine-tuned no Bedrock só seja acessível por uma aplicação específica. Como implementar?",
        options: [
            "Senha no modelo",
            "IAM role da aplicação com permissão apenas para o ARN específico do custom model + VPC endpoint com security group restritivo",
            "Firewall na aplicação em cenários empresariais de produção real, integrando com os sistemas existentes através de APIs e conectores nativos da plataforma",
            "API key no código"
        ],
        correct: [1],
        explanation: "Defense in depth: 1) IAM role com Resource = ARN do custom model específico, 2) VPC endpoint restringe acesso à rede interna, 3) SG no endpoint permite apenas IP/SG da aplicação. Zero acesso externo ou de outros workloads.",
        topic: "access-control",
        domain: "security-ai",
        difficulty: "medium"
    },
    {
        id: 'secai_038',
        question: "O que é 'model poisoning' e como se proteger?",
        options: [
            "Modelo com vírus de computador seguindo o framework de implementação padrão, otimizando custo operacional através de right-sizing e monitoramento de utilização de recursos, aplicando técnicas de observabilidade e rastreamento distribuído para troubleshooting eficiente",
            "Ataque onde dados de treino são manipulados para que modelo aprenda comportamento malicioso — proteger com: validação de dados, provenance tracking, ambiente seguro de treino",
            "Modelo desatualizado",
            "Modelo com bug"
        ],
        correct: [1],
        explanation: "Data/model poisoning: atacante injeta dados maliciosos no treino para criar backdoors (ex: modelo classifica spam como legítimo se contém trigger word). Prevenção: validar fontes de dados, anomaly detection nos dados, ambiente de treino isolado.",
        topic: "model-security",
        domain: "security-ai",
        difficulty: "hard"
    },
    {
        id: 'secai_039',
        question: "Uma empresa usa Bedrock Knowledge Bases com documentos confidenciais no S3. Como garantir segurança?",
        options: [
            "S3 bucket público é OK",
            "S3: bucket policy restritiva + encryption (SSE-KMS) + block public access + VPC endpoint + IAM permissions mínimas para o Knowledge Base role",
            "Apenas ACLs no bucket",
            "Documentos não precisam de proteção como solução adequada ao problema descrito, com validação automática de qualidade e rollback em caso de degradação de performance"
        ],
        correct: [1],
        explanation: "Segurança KB: 1) S3 block public access ON, 2) Bucket policy deny all exceto KB role, 3) SSE-KMS encryption, 4) VPC endpoint para acesso privado, 5) Knowledge Base IAM role com least privilege (apenas GetObject nos prefixos necessários).",
        topic: "data-privacy",
        domain: "security-ai",
        difficulty: "medium"
    },
    {
        id: 'secai_040',
        question: "Qual framework de compliance o Bedrock atende para dados de saúde?",
        options: [
            "Nenhum — Bedrock não é para saúde atendendo aos critérios de avaliação definidos, atendendo aos padrões internacionais de privacidade de dados e proteção de informações sensíveis",
            "HIPAA eligible — Bedrock pode ser usado com PHI (Protected Health Information) desde que BAA (Business Associate Agreement) esteja assinado com AWS",
            "Apenas SOC 2",
            "Apenas ISO 27001"
        ],
        correct: [1],
        explanation: "Bedrock é HIPAA eligible: pode processar dados de saúde (PHI) com BAA assinado. Também: SOC 1/2/3, ISO 27001, PCI DSS (para dados de pagamento). Cliente deve: usar encryption, logging, access controls e seguir shared responsibility.",
        topic: "compliance",
        domain: "security-ai",
        difficulty: "medium"
    },
    {
        id: 'secai_041',
        question: "Uma empresa quer prevenir que o modelo exponha dados de treinamento (memorization attack). O que é e como mitigar?",
        options: [
            "Modelos não memorizam dados no contexto operacional da organização, com documentação completa do processo e rastreabilidade de todas as decisões implementadas, incluindo configuração avançada de parâmetros e monitoramento contínuo do sistema em produção",
            "LLMs podem memorizar e reproduzir trechos de dados de treino. Mitigação: differential privacy no treino, PII redaction antes de treinar, output guardrails, rate limiting",
            "Problema apenas teórico",
            "Usar modelo menor"
        ],
        correct: [1],
        explanation: "Memorization: modelos podem regurgitar dados de treino verbatim (ex: reproduzir email ou número de cartão visto no treino). Mitigação: redactar PII antes de treinar, differential privacy (adiciona ruído), guardrails de output para detectar PII.",
        topic: "model-security",
        domain: "security-ai",
        difficulty: "hard"
    },
    {
        id: 'secai_042',
        question: "O que é 'data residency' e por que importa para IA na AWS?",
        options: [
            "Onde os desenvolvedores moram para assegurar resultados consistentes e confiáveis, com integração completa ao ecossistema de serviços gerenciados e pipelines automatizados, considerando requisitos de compliance, governança e auditoria para ambientes regulados",
            "Garantia de que dados permanecem em região/país específico — importante para compliance com leis como LGPD (Brasil) e GDPR (Europa) que exigem dados em território específico",
            "Residência do modelo",
            "Localização do escritório AWS"
        ],
        correct: [1],
        explanation: "Data residency: dados não saem da região escolhida. Bedrock: dados de inferência ficam na região da API call. Fine-tuning: dados e modelo na região escolhida. Knowledge Bases: S3 na mesma região. Importante para LGPD (dados de brasileiros no Brasil).",
        topic: "compliance",
        domain: "security-ai",
        difficulty: "medium"
    },
    {
        id: 'secai_043',
        question: "Uma empresa quer implementar 'least privilege' para equipes que usam AI/ML na AWS. Qual abordagem?",
        options: [
            "Dar acesso Admin para todos para este tipo de cenário e workload específico, garantindo escalabilidade horizontal e vertical conforme demanda do workload específico, utilizando as ferramentas nativas do serviço para automação e observabilidade operacional",
            "Roles específicos: Data Scientists (SageMaker notebooks + S3 read), ML Engineers (training jobs + deploy), AI Users (InvokeModel only) — cada um com apenas o necessário",
            "Uma role para toda a equipe",
            "Sem controle de acesso"
        ],
        correct: [1],
        explanation: "Least privilege para ML: Data Scientist role (notebooks, experimentação), ML Engineer role (pipelines, deploy), Application role (apenas InvokeModel), Admin role (gerenciar quotas, billing). Separar quem treina, quem deploya, quem usa.",
        topic: "access-control",
        domain: "security-ai",
        difficulty: "medium"
    },
    {
        id: 'secai_044',
        question: "O que são 'Bedrock Guardrails' do ponto de vista de segurança?",
        options: [
            "Apenas filtros de conteúdo conforme recomendado pela documentação técnica, com suporte a múltiplas regiões e redundância para alta disponibilidade e disaster recovery",
            "Controles de segurança configuráveis: content filtering (toxicidade), PII redaction, denied topics, word filters — previnem uso indevido e protegem dados sensíveis",
            "Firewall de rede",
            "Antivírus para modelos"
        ],
        correct: [1],
        explanation: "Guardrails como security control: 1) Input filtering (bloqueia prompt malicioso), 2) PII redaction (protege dados pessoais), 3) Denied topics (impede uso fora do escopo), 4) Output filtering (previne respostas perigosas). Aplicáveis a qualquer modelo no Bedrock.",
        topic: "model-security",
        domain: "security-ai",
        difficulty: "easy"
    },
    {
        id: 'secai_045',
        question: "Uma empresa está preocupada com 'model theft' — clonar seu modelo fine-tuned. Como proteger?",
        options: [
            "Modelos não podem ser roubados considerando o contexto descrito na questão, seguindo o modelo de responsabilidade compartilhada e as políticas de segurança corporativas",
            "IAM restritivo (negar GetFoundationModel/export), VPC endpoint (sem acesso externo), CloudTrail monitoring (detectar acesso anômalo), encryption com CMK controlada",
            "Publicar modelo para todos",
            "Guardar modelo em pen drive"
        ],
        correct: [1],
        explanation: "Proteger modelo: 1) IAM deny export/download, 2) VPC endpoint (sem internet), 3) CloudTrail alerta acesso incomum, 4) KMS CMK controlada (sem key = sem decrypt), 5) Não expor model predictions demais (model extraction attacks via API).",
        topic: "model-security",
        domain: "security-ai",
        difficulty: "hard"
    },
    {
        id: 'secai_046',
        question: "O que é 'LGPD' e como impacta uso de IA no Brasil?",
        options: [
            "Lei apenas para bancos",
            "Lei Geral de Proteção de Dados — exige: consentimento para uso de dados pessoais, direito à explicação de decisões automatizadas, data minimization, e direito à exclusão",
            "Lei internacional sem efeito local de acordo com as melhores práticas do setor, implementando controles preventivos e detectivos conforme o framework de segurança organizacional",
            "Apenas para grandes empresas"
        ],
        correct: [1],
        explanation: "LGPD para IA: 1) Base legal para treinamento com dados pessoais, 2) Direito à explicação de decisões automatizadas (explainability obrigatória), 3) Data minimization (usar mínimo necessário), 4) Direito à exclusão (impacta modelos treinados com dados do indivíduo).",
        topic: "compliance",
        domain: "security-ai",
        difficulty: "medium"
    },
    {
        id: 'secai_047',
        question: "Uma empresa quer detectar uso anômalo de seus endpoints de IA (ex: alguém tentando extrair dados de treinamento). Qual monitoramento?",
        options: [
            "Apenas verificar billing no fim do mês dentro do escopo de aplicação apresentado, com capacidade de processamento paralelo e distribuído para atender picos de demanda",
            "CloudTrail + CloudWatch Alarms (volume anômalo, patterns suspeitos) + GuardDuty (threat detection) + rate limiting por caller identity",
            "Apenas logs de aplicação",
            "Monitoramento manual"
        ],
        correct: [1],
        explanation: "Detectar uso anômalo: CloudTrail (quem chamou), CloudWatch (volume/padrões), GuardDuty (anomalias de acesso). Alertar: picos de invocação, novo IP acessando, queries repetitivas (extraction attempt), fora de horário. Rate limiting por identity.",
        topic: "audit",
        domain: "security-ai",
        difficulty: "medium"
    },
    {
        id: 'secai_048',
        question: "O que é 'supply chain security' no contexto de modelos de IA?",
        options: [
            "Logística de hardware",
            "Garantir integridade de modelos obtidos de terceiros — verificar origem, integridade, possíveis backdoors, e garantir que não foram modificados maliciosamente",
            "Cadeia de suprimentos de GPUs segundo as diretrizes oficiais e compliance, integrando com os sistemas existentes através de APIs e conectores nativos da plataforma",
            "Transporte de servidores"
        ],
        correct: [1],
        explanation: "AI supply chain: modelos open-source podem ter backdoors. Verificar: fonte confiável, checksums, scan para vulnerabilidades, testar para comportamento inesperado. No Bedrock: AWS gerencia integridade dos modelos, reduzindo risco vs download de modelos aleatórios.",
        topic: "model-security",
        domain: "security-ai",
        difficulty: "hard"
    },
    {
        id: 'secai_049',
        question: "Uma empresa quer criptografar dados de Knowledge Base com sua própria chave (não AWS managed). Como configurar?",
        options: [
            "Não é possível",
            "Usar Customer Managed Key (CMK) no KMS ao criar Knowledge Base — dados no S3 e vector store criptografados com chave controlada pelo cliente",
            "Apenas chave AWS é suportada",
            "Criptografia manual antes do upload como abordagem principal neste caso de uso, otimizando custo operacional através de right-sizing e monitoramento de utilização de recursos"
        ],
        correct: [1],
        explanation: "CMK para Knowledge Base: controle total da chave (rotação, disable, audit via CloudTrail). Se desabilitar a key, dados ficam inacessíveis (segurança definitiva). Configurar no momento da criação da KB. Também aplicar SSE-KMS no S3 bucket source.",
        topic: "encryption",
        domain: "security-ai",
        difficulty: "medium"
    },
    {
        id: 'secai_050',
        question: "O que é 'model governance' e quais controles implementar?",
        options: [
            "Apenas documentação",
            "Processo completo: registro de modelos (versões), aprovação para deploy, monitoramento pós-deploy, auditoria de decisões, e processo de rollback",
            "Apenas controle de custo",
            "Apenas controle de acesso para garantir conformidade com os requisitos, aplicando técnicas de observabilidade e rastreamento distribuído para troubleshooting eficiente"
        ],
        correct: [1],
        explanation: "Model governance: SageMaker Model Registry (versionar modelos), approval workflows (humano aprova deploy), Model Cards (documentação), Model Monitor (monitoramento), CloudTrail (auditoria). Governança end-to-end do ciclo de vida do modelo.",
        topic: "compliance",
        domain: "security-ai",
        difficulty: "medium"
    },
    {
        id: 'secai_051',
        question: "Uma empresa quer garantir que apenas tráfego HTTPS (nunca HTTP) seja usado para acessar serviços de IA. Como enforçar?",
        options: [
            "Confiar que desenvolvedores usem HTTPS na arquitetura proposta para o ambiente, com validação automática de qualidade e rollback em caso de degradação de performance",
            "Bedrock já enforce TLS 1.2+ em todas as API calls por design — não aceita HTTP. Adicionalmente: VPC endpoint policies, SCPs para negar ações inseguras",
            "Configurar certificado manualmente",
            "Usar VPN apenas"
        ],
        correct: [1],
        explanation: "Bedrock/SageMaker: TLS 1.2+ obrigatório por design (não aceita HTTP plain text). Camadas extras: VPC endpoint (tráfego nem sai para internet), SCP deny sem condition de SecureTransport. AWS SDK já usa HTTPS por default.",
        topic: "network-security",
        domain: "security-ai",
        difficulty: "easy"
    },
    {
        id: 'secai_052',
        question: "O que é 'differential privacy' no contexto de treinamento de modelos?",
        options: [
            "Privacidade de dados entre departamentos em cenários empresariais de produção real, atendendo aos padrões internacionais de privacidade de dados e proteção de informações sensíveis",
            "Técnica matemática que adiciona ruído controlado ao treino garantindo que nenhum indivíduo dos dados de treino possa ser identificado a partir do modelo",
            "Criptografia dos dados",
            "Anonimização de nomes"
        ],
        correct: [1],
        explanation: "Differential privacy: garante matematicamente que output do modelo não revela se um indivíduo específico estava nos dados de treino. Adiciona ruído calibrado. Trade-off: mais privacidade = menos precisão. Usado em dados ultra-sensíveis.",
        topic: "data-privacy",
        domain: "security-ai",
        difficulty: "hard"
    },
    {
        id: 'secai_053',
        question: "Uma empresa quer implementar 'data minimization' ao usar IA. O que significa na prática?",
        options: [
            "Usar menos dados possível para economizar seguindo o framework de implementação padrão, com documentação completa do processo e rastreabilidade de todas as decisões implementadas",
            "Coletar e processar APENAS os dados necessários para o propósito específico — não treinar com dados desnecessários, deletar após uso",
            "Comprimir dados",
            "Usar dados sintéticos apenas"
        ],
        correct: [1],
        explanation: "Data minimization (princípio LGPD/GDPR): 1) Coletar apenas necessário, 2) Não treinar com dados irrelevantes ao propósito, 3) Retention policy (deletar quando não mais necessário), 4) No prompt: enviar apenas contexto relevante, não dump inteiro.",
        topic: "compliance",
        domain: "security-ai",
        difficulty: "medium"
    },
    {
        id: 'secai_054',
        question: "O que é 'SageMaker Role Manager' e como simplifica segurança?",
        options: [
            "Gerenciador de senhas",
            "Ferramenta que cria IAM roles pré-configuradas para diferentes personas ML (data scientist, ML engineer) com permissões de least privilege sem configuração manual",
            "Gerenciador de modelos",
            "Gerenciador de endpoints como solução adequada ao problema descrito, incluindo configuração avançada de parâmetros e monitoramento contínuo do sistema em produção, com integração completa ao ecossistema de serviços gerenciados e pipelines automatizados"
        ],
        correct: [1],
        explanation: "SageMaker Role Manager: cria roles IAM com permissões granulares baseado na persona (data scientist, MLOps engineer). Aplica least privilege automaticamente. Evita roles over-permissioned. Inclui conditions para VPC, encryption, e resource isolation.",
        topic: "access-control",
        domain: "security-ai",
        difficulty: "easy"
    },
    {
        id: 'secai_055',
        question: "Uma empresa quer garantir que nenhum dado de produção seja usado em ambientes de desenvolvimento/teste de IA. Como enforçar?",
        options: [
            "Confiar nas equipes",
            "Contas separadas (dev/prod) + SCPs restringindo acesso cross-account + data masking/anonymization para datasets de teste + IAM boundaries",
            "Apenas documentar política atendendo aos critérios de avaliação definidos, considerando requisitos de compliance, governança e auditoria para ambientes regulados",
            "Usar mesmos dados em tudo"
        ],
        correct: [1],
        explanation: "Separação de ambientes: 1) Contas AWS separadas (dev/staging/prod), 2) SCPs impedem acesso cross-account a dados prod, 3) Dados de teste: anonimizados ou sintéticos, 4) VPC isolation, 5) Permissões diferentes por ambiente.",
        topic: "data-privacy",
        domain: "security-ai",
        difficulty: "medium"
    },
    {
        id: 'secai_056',
        question: "Qual é a abordagem 'defense in depth' para proteger sistemas de IA na AWS?",
        options: [
            "Apenas firewall",
            "Múltiplas camadas: IAM (acesso) + VPC/SG (rede) + KMS (criptografia) + CloudTrail (auditoria) + Guardrails (conteúdo) + Model Monitor (drift) + alertas",
            "Apenas criptografia",
            "Apenas monitoramento no contexto operacional da organização, garantindo escalabilidade horizontal e vertical conforme demanda do workload específico, utilizando as ferramentas nativas do serviço para automação e observabilidade operacional"
        ],
        correct: [1],
        explanation: "Defense in depth para AI: Layer 1: IAM/SCP (quem acessa). Layer 2: VPC/Endpoints (como acessa). Layer 3: KMS (dados protegidos). Layer 4: Guardrails (input/output seguro). Layer 5: CloudTrail/Monitor (detectar anomalias). Nenhuma camada sozinha é suficiente.",
        topic: "model-security",
        domain: "security-ai",
        difficulty: "medium"
    }
];

securityAiQuestions.push(...securityAiQuestions2);
