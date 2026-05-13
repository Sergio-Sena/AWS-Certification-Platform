// AIF-C01 - Questões Complementares: Correspondência e Ordenação
// Formatos adicionais do exame real que não tínhamos

const aifExtraQuestions = [
    // CORRESPONDÊNCIA: Serviço → Caso de Uso (formato real do exame)
    {
        id: 'extra_001',
        question: "Associe cada serviço AWS ao seu caso de uso principal:\n\n1. Amazon Comprehend\n2. Amazon Rekognition\n3. Amazon Textract\n4. Amazon Polly\n\nA) Extrair texto de documentos escaneados\nB) Detectar sentimento em reviews de clientes\nC) Converter relatórios em áudio para acessibilidade\nD) Identificar objetos em imagens de segurança",
        options: [
            "1-B, 2-D, 3-A, 4-C",
            "1-A, 2-B, 3-C, 4-D",
            "1-D, 2-A, 3-B, 4-C",
            "1-C, 2-D, 3-B, 4-A"
        ],
        correct: [0],
        explanation: "Comprehend = NLP (sentimento). Rekognition = visão (objetos/faces). Textract = OCR inteligente (documentos). Polly = text-to-speech (áudio).",
        topic: "services-matching",
        domain: "ai-ml"
    },
    {
        id: 'extra_002',
        question: "Associe cada tipo de aprendizado ao cenário:\n\n1. Supervisionado\n2. Não supervisionado\n3. Por reforço\n4. Por transferência\n\nA) Robô aprende a andar por tentativa e erro\nB) Classificar emails como spam usando exemplos rotulados\nC) Agrupar clientes por comportamento sem categorias pré-definidas\nD) Adaptar modelo de linguagem pré-treinado para domínio médico",
        options: [
            "1-B, 2-C, 3-A, 4-D",
            "1-C, 2-B, 3-D, 4-A",
            "1-A, 2-D, 3-C, 4-B",
            "1-D, 2-A, 3-B, 4-C"
        ],
        correct: [0],
        explanation: "Supervisionado = dados rotulados (spam). Não supervisionado = encontrar padrões (clustering). Reforço = tentativa/erro/recompensa (robô). Transferência = reaproveitar modelo existente (adaptar LLM).",
        topic: "services-matching",
        domain: "ai-ml"
    },
    {
        id: 'extra_003',
        question: "Associe cada componente do Bedrock à sua função:\n\n1. Knowledge Bases\n2. Agents\n3. Guardrails\n4. Model Evaluation\n\nA) Comparar qualidade de diferentes modelos\nB) Filtrar conteúdo tóxico e PII\nC) RAG gerenciado com documentos\nD) Executar ações via APIs externas",
        options: [
            "1-C, 2-D, 3-B, 4-A",
            "1-D, 2-C, 3-A, 4-B",
            "1-A, 2-B, 3-C, 4-D",
            "1-B, 2-A, 3-D, 4-C"
        ],
        correct: [0],
        explanation: "Knowledge Bases = RAG (busca em docs). Agents = ações (chamam APIs). Guardrails = filtros (segurança). Model Evaluation = comparar modelos (métricas).",
        topic: "services-matching",
        domain: "foundation-models"
    },
    {
        id: 'extra_004',
        question: "Associe cada parâmetro de inferência ao seu efeito:\n\n1. Temperatura\n2. Top-p\n3. Max tokens\n4. Stop sequences\n\nA) Limita o tamanho da resposta gerada\nB) Controla criatividade/aleatoriedade\nC) Define quando parar de gerar\nD) Filtra vocabulário por probabilidade acumulada",
        options: [
            "1-B, 2-D, 3-A, 4-C",
            "1-A, 2-B, 3-C, 4-D",
            "1-D, 2-C, 3-B, 4-A",
            "1-C, 2-A, 3-D, 4-B"
        ],
        correct: [0],
        explanation: "Temperatura = criatividade (0=determinístico, 1=criativo). Top-p = diversidade de vocabulário. Max tokens = tamanho máximo. Stop sequences = quando parar.",
        topic: "services-matching",
        domain: "generative-ai"
    },
    {
        id: 'extra_005',
        question: "Associe cada conceito de IA responsável à sua definição:\n\n1. Bias\n2. Fairness\n3. Explainability\n4. Transparency\n\nA) Informar usuários que interagem com IA\nB) Modelo reproduz preconceitos dos dados\nC) Explicar como o modelo tomou uma decisão\nD) Tratar grupos diferentes de forma equitativa",
        options: [
            "1-B, 2-D, 3-C, 4-A",
            "1-D, 2-B, 3-A, 4-C",
            "1-A, 2-C, 3-D, 4-B",
            "1-C, 2-A, 3-B, 4-D"
        ],
        correct: [0],
        explanation: "Bias = preconceito nos dados/modelo. Fairness = equidade entre grupos. Explainability = explicar decisões. Transparency = ser aberto sobre uso de IA.",
        topic: "services-matching",
        domain: "responsible-ai"
    },

    // ORDENAÇÃO: Sequência correta de etapas
    {
        id: 'extra_006',
        question: "Qual é a ordem correta para implementar RAG com Bedrock Knowledge Bases?",
        options: [
            "1) Upload docs no S3 → 2) Criar Knowledge Base → 3) Chunking automático → 4) Gerar embeddings → 5) Armazenar em vector store → 6) Usuário pergunta → 7) Busca similares → 8) LLM responde",
            "1) Criar Knowledge Base → 2) Treinar modelo → 3) Upload docs → 4) Responder",
            "1) Fine-tuning → 2) Upload docs → 3) Criar embeddings → 4) Responder",
            "1) Gerar embeddings → 2) Upload docs → 3) Criar Knowledge Base → 4) Chunking"
        ],
        correct: [0],
        explanation: "Pipeline RAG: docs no S3 → KB criada → chunking automático → embeddings gerados → armazenados em vector DB → query do usuário → busca vetorial → chunks relevantes injetados no prompt → LLM responde.",
        topic: "ordering",
        domain: "foundation-models"
    },
    {
        id: 'extra_007',
        question: "Qual é a ordem correta de customização de foundation models (do mais simples ao mais complexo)?",
        options: [
            "1) Prompt Engineering → 2) RAG → 3) Fine-tuning → 4) Continued Pre-training → 5) Treinar do zero",
            "1) Fine-tuning → 2) RAG → 3) Prompt Engineering → 4) Pre-training",
            "1) Treinar do zero → 2) Fine-tuning → 3) RAG → 4) Prompt Engineering",
            "1) RAG → 2) Prompt Engineering → 3) Pre-training → 4) Fine-tuning"
        ],
        correct: [0],
        explanation: "Sempre começar pelo mais simples/barato: Prompt Engineering (zero custo) → RAG (adiciona conhecimento) → Fine-tuning (muda comportamento) → Continued Pre-training (absorve domínio) → Treinar do zero (raramente).",
        topic: "ordering",
        domain: "foundation-models"
    },
    {
        id: 'extra_008',
        question: "Qual é a ordem correta do ciclo de vida de um modelo ML?",
        options: [
            "1) Coletar dados → 2) Preparar/rotular → 3) Treinar modelo → 4) Avaliar → 5) Deploy → 6) Monitorar → 7) Retreinar se necessário",
            "1) Treinar → 2) Coletar dados → 3) Deploy → 4) Avaliar",
            "1) Deploy → 2) Treinar → 3) Coletar → 4) Monitorar",
            "1) Avaliar → 2) Treinar → 3) Coletar → 4) Deploy"
        ],
        correct: [0],
        explanation: "ML lifecycle: dados → preparação → treinamento → avaliação (métricas) → deploy (endpoint) → monitoramento (drift) → retreinar quando performance degrada. Ciclo contínuo (MLOps).",
        topic: "ordering",
        domain: "ai-ml"
    },
    {
        id: 'extra_009',
        question: "Qual é a ordem correta para responder a um incidente de segurança com IA (modelo gerando conteúdo inadequado)?",
        options: [
            "1) Ativar Guardrails/bloquear → 2) Analisar logs (o que aconteceu) → 3) Identificar causa raiz → 4) Implementar correção → 5) Testar → 6) Documentar",
            "1) Documentar → 2) Analisar → 3) Bloquear → 4) Testar",
            "1) Testar → 2) Bloquear → 3) Documentar → 4) Analisar",
            "1) Ignorar → 2) Monitorar → 3) Reportar → 4) Bloquear"
        ],
        correct: [0],
        explanation: "Incident response: 1) Conter (bloquear imediatamente), 2) Investigar (logs, o que causou), 3) Root cause (por que guardrails não pegaram), 4) Fix (ajustar guardrails/prompt), 5) Validar, 6) Documentar lições.",
        topic: "ordering",
        domain: "security-ai"
    },
    {
        id: 'extra_010',
        question: "Associe cada técnica de prompt engineering ao cenário ideal:\n\n1. Zero-shot\n2. Few-shot\n3. Chain-of-thought\n4. System prompt\n\nA) Definir que o modelo deve responder como especialista AWS\nB) Pedir ao modelo que resolva equação mostrando cada passo\nC) Pedir tradução simples sem exemplos\nD) Mostrar 3 exemplos de classificação antes de pedir nova classificação",
        options: [
            "1-C, 2-D, 3-B, 4-A",
            "1-D, 2-C, 3-A, 4-B",
            "1-A, 2-B, 3-C, 4-D",
            "1-B, 2-A, 3-D, 4-C"
        ],
        correct: [0],
        explanation: "Zero-shot = tarefa simples sem exemplos (tradução). Few-shot = exemplos para guiar formato (classificação). Chain-of-thought = raciocínio passo a passo (matemática). System prompt = definir persona/regras.",
        topic: "services-matching",
        domain: "generative-ai"
    },
    {
        id: 'extra_011',
        question: "Associe cada serviço AWS à camada de segurança que fornece para IA:\n\n1. IAM\n2. KMS\n3. CloudTrail\n4. VPC Endpoints\n\nA) Criptografar dados de fine-tuning em repouso\nB) Controlar quem pode invocar quais modelos\nC) Manter tráfego ao Bedrock dentro da rede privada\nD) Auditar todas as chamadas de API ao Bedrock",
        options: [
            "1-B, 2-A, 3-D, 4-C",
            "1-A, 2-B, 3-C, 4-D",
            "1-C, 2-D, 3-A, 4-B",
            "1-D, 2-C, 3-B, 4-A"
        ],
        correct: [0],
        explanation: "IAM = controle de acesso (quem faz o quê). KMS = encryption (dados em repouso). CloudTrail = auditoria (quem fez o quê, quando). VPC Endpoints = rede privada (sem internet).",
        topic: "services-matching",
        domain: "security-ai"
    },
    {
        id: 'extra_012',
        question: "Qual é a ordem correta para avaliar e mitigar bias em um modelo ML?",
        options: [
            "1) Analisar dados de treinamento (SageMaker Clarify) → 2) Identificar grupos sub-representados → 3) Balancear/corrigir dados → 4) Treinar modelo → 5) Avaliar fairness pós-treinamento → 6) Monitorar em produção",
            "1) Treinar modelo → 2) Verificar bias → 3) Corrigir dados → 4) Retreinar",
            "1) Deploy → 2) Monitorar → 3) Corrigir → 4) Retreinar",
            "1) Ignorar bias → 2) Treinar → 3) Deploy → 4) Esperar reclamações"
        ],
        correct: [0],
        explanation: "Bias mitigation: pré-treinamento (analisar dados, balancear) + pós-treinamento (métricas de fairness por grupo) + produção (monitorar drift de fairness). Clarify ajuda em todas as fases.",
        topic: "ordering",
        domain: "responsible-ai"
    }
];

window.aifExtraQuestions = aifExtraQuestions;
