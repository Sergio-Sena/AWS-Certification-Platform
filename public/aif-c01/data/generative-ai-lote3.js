// AIF-C01 Generative AI - Lote 3 (genai_074 a genai_096)
// Foco: Diffusion models, GANs, multimodal, evaluation, cost, production patterns

const generativeAiQuestions3 = [
    {
        id: 'genai_074',
        question: "O que são 'diffusion models' e para que são usados?",
        options: [
            "Modelos de propagação de rede",
            "Modelos que geram imagens adicionando e removendo ruído progressivamente — base de DALL-E, Stable Diffusion e Titan Image Generator",
            "Modelos de difusão de dados em clusters",
            "Modelos de análise de texto"
        ],
        correct: [1],
        explanation: "Diffusion models: treinados para remover ruído de imagens. Na geração, partem de ruído puro e removem progressivamente até formar imagem. Controlados por texto (text-to-image). Base da maioria dos geradores de imagem atuais.",
        topic: "image-generation",
        domain: "generative-ai",
        difficulty: "medium"
    },
    {
        id: 'genai_075',
        question: "O que são GANs (Generative Adversarial Networks) e como funcionam?",
        options: [
            "Redes de segurança",
            "Duas redes neurais competindo: Generator cria conteúdo falso, Discriminator tenta identificar se é real ou falso — ambas melhoram pela competição",
            "Redes de armazenamento",
            "Redes de classificação"
        ],
        correct: [1],
        explanation: "GANs: Generator tenta enganar o Discriminator. Discriminator tenta distinguir real de falso. Competição melhora ambos. Resultado: Generator produz conteúdo muito realista. Usado para: imagens, vídeos, dados sintéticos. Antecessor dos diffusion models.",
        topic: "image-generation",
        domain: "generative-ai",
        difficulty: "medium"
    },
    {
        id: 'genai_076',
        question: "Uma empresa quer usar IA para gerar vídeos curtos a partir de descrições textuais. Qual limitação principal dos modelos atuais?",
        options: [
            "Não existe tecnologia para isso",
            "Alta computação necessária, consistência temporal (personagens mudam entre frames), e qualidade inferior a vídeo real para produção profissional",
            "É gratuito e perfeito",
            "Funciona apenas para vídeos de 1 segundo"
        ],
        correct: [1],
        explanation: "Text-to-video: existe (Sora, Runway, etc.) mas limitações: custo computacional alto, inconsistência temporal, qualidade variável, duração limitada. Para produção profissional, ainda requer edição humana. Evoluindo rapidamente mas não é perfeito.",
        topic: "image-generation",
        domain: "generative-ai",
        difficulty: "medium"
    },
    {
        id: 'genai_077',
        question: "O que é um 'multimodal model' e quais tipos de input/output suporta?",
        options: [
            "Modelo que processa apenas texto",
            "Modelo que processa e/ou gera múltiplos tipos de dados: texto, imagem, áudio, vídeo — pode receber imagem e gerar descrição, ou receber texto e gerar imagem",
            "Modelo com múltiplas camadas",
            "Modelo treinado em múltiplos idiomas"
        ],
        correct: [1],
        explanation: "Multimodal: processa/gera diferentes modalidades. Exemplos: Claude (texto+imagem→texto), Titan Image (texto→imagem), GPT-4V (imagem→texto). Permite: descrever imagens, gerar imagens de texto, analisar gráficos, transcrever áudio.",
        topic: "multimodal",
        domain: "generative-ai",
        difficulty: "easy"
    },
    {
        id: 'genai_078',
        question: "Uma empresa quer usar LLM para sumarizar reuniões de 2 horas. A transcrição tem 50.000 tokens mas o modelo suporta apenas 32K. Como resolver?",
        options: [
            "Usar modelo com janela maior (200K)",
            "Map-reduce: dividir transcrição em partes, resumir cada parte individualmente, depois resumir os resumos em um resumo final",
            "Cortar a transcrição pela metade",
            "Não é possível"
        ],
        correct: [1],
        explanation: "Map-reduce summarization: 1) Dividir texto em chunks que cabem na janela, 2) Resumir cada chunk (map), 3) Combinar resumos em prompt final (reduce). Alternativa: usar modelo com janela maior se disponível. Hierarchical: resumir em camadas.",
        topic: "prompt-engineering",
        domain: "generative-ai",
        difficulty: "medium"
    },
    {
        id: 'genai_079',
        question: "O que é 'constitutional AI' e como se relaciona com segurança de LLMs?",
        options: [
            "IA governamental",
            "Método de treinamento onde o modelo aprende a se auto-avaliar e corrigir respostas segundo princípios éticos definidos (uma 'constituição' de regras)",
            "IA para direito constitucional",
            "Método de criptografia"
        ],
        correct: [1],
        explanation: "Constitutional AI (Anthropic/Claude): modelo recebe princípios ('não seja prejudicial, seja honesto') e é treinado para auto-avaliar e revisar suas respostas segundo esses princípios. Alternativa ao RLHF com menos dependência de avaliadores humanos.",
        topic: "llm-concepts",
        domain: "generative-ai",
        difficulty: "hard"
    },
    {
        id: 'genai_080',
        question: "Uma empresa quer avaliar a qualidade de texto gerado por LLM de forma automática. Quais métricas usar?",
        options: [
            "Apenas contar palavras",
            "BLEU/ROUGE (comparação com referência), perplexity (fluência), human evaluation (qualidade subjetiva), task-specific metrics (accuracy para classificação)",
            "Apenas velocidade de geração",
            "Apenas custo por token"
        ],
        correct: [1],
        explanation: "Métricas: BLEU/ROUGE (overlap com texto de referência), BERTScore (similaridade semântica), perplexity (fluência), human eval (qualidade real). Para tarefas específicas: accuracy, F1. No Bedrock: Model Evaluation com métricas automáticas e humanas.",
        topic: "evaluation",
        domain: "generative-ai",
        difficulty: "hard"
    },
    {
        id: 'genai_081',
        question: "O que é 'streaming' na geração de texto e qual o benefício para UX?",
        options: [
            "Transmissão de vídeo",
            "Modelo envia tokens assim que são gerados, ao invés de esperar resposta completa — usuário vê resposta sendo construída em tempo real, reduzindo percepção de latência",
            "Download de modelo",
            "Cache de respostas"
        ],
        correct: [1],
        explanation: "Streaming: tokens enviados incrementalmente. Time-to-first-token: ~200ms (usuário já vê algo). Sem streaming: espera resposta completa (pode ser 5-30s). UX muito melhor. Bedrock InvokeModelWithResponseStream suporta nativamente.",
        topic: "parameters",
        domain: "generative-ai",
        difficulty: "easy"
    },
    {
        id: 'genai_082',
        question: "Uma empresa quer usar LLM para tradução mas mantendo terminologia técnica específica do setor. Qual abordagem?",
        options: [
            "Apenas Amazon Translate",
            "LLM com glossário no prompt (few-shot com termos técnicos) + instrução para manter terminologia OU Amazon Translate com Custom Terminology",
            "Fine-tuning para cada par de idiomas",
            "Tradução manual"
        ],
        correct: [1],
        explanation: "Duas opções: 1) LLM com glossário no prompt (flexível, mais contexto), 2) Amazon Translate Custom Terminology (CSV com termos, mais rápido e barato para volume alto). Para textos criativos: LLM. Para volume técnico: Translate + Custom Terminology.",
        topic: "prompt-engineering",
        domain: "generative-ai",
        difficulty: "medium"
    },
    {
        id: 'genai_083',
        question: "O que é 'few-shot learning' vs 'zero-shot learning' em termos de performance?",
        options: [
            "Zero-shot é sempre melhor",
            "Few-shot (com exemplos) geralmente produz resultados mais consistentes e aderentes ao formato desejado que zero-shot (sem exemplos), mas consome mais tokens",
            "Não há diferença de performance",
            "Few-shot é gratuito"
        ],
        correct: [1],
        explanation: "Trade-off: zero-shot é mais barato (menos tokens) mas menos previsível. Few-shot é mais consistente (modelo 'entende' padrão via exemplos) mas consome tokens para os exemplos. Para tarefas críticas/formato específico: few-shot. Para tarefas simples: zero-shot.",
        topic: "prompt-engineering",
        domain: "generative-ai",
        difficulty: "easy"
    },
    {
        id: 'genai_084',
        question: "Uma empresa quer implementar 'content moderation' automática usando IA generativa. Qual serviço AWS é mais adequado?",
        options: [
            "Bedrock com prompt de classificação",
            "Amazon Rekognition Content Moderation (imagens/vídeo) + Bedrock Guardrails (texto) — serviços especializados são mais eficientes que LLM genérico",
            "Apenas filtros de palavras-chave",
            "Revisão humana de 100% do conteúdo"
        ],
        correct: [1],
        explanation: "Serviços especializados: Rekognition para moderação de imagem/vídeo (detecta nudez, violência). Guardrails para texto (toxicidade, tópicos proibidos). Mais rápidos, baratos e precisos que usar LLM genérico para classificar cada conteúdo.",
        topic: "hallucination",
        domain: "generative-ai",
        difficulty: "medium"
    },
    {
        id: 'genai_085',
        question: "O que é 'model quantization' e para que serve?",
        options: [
            "Aumentar tamanho do modelo",
            "Reduzir precisão dos pesos do modelo (ex: 32-bit → 8-bit) para diminuir tamanho e acelerar inferência com perda mínima de qualidade",
            "Dividir modelo em partes",
            "Treinar modelo mais rápido"
        ],
        correct: [1],
        explanation: "Quantization: reduz bits dos pesos (FP32→INT8 ou INT4). Modelo fica 2-4x menor, inferência mais rápida, usa menos memória GPU. Perda de qualidade geralmente pequena. Útil para deployment em edge ou reduzir custo de inferência.",
        topic: "llm-concepts",
        domain: "generative-ai",
        difficulty: "hard"
    },
    {
        id: 'genai_086',
        question: "Uma empresa quer que o LLM analise uma planilha de vendas (CSV) e responda perguntas sobre os dados. Qual abordagem?",
        options: [
            "Treinar modelo com a planilha",
            "Converter CSV em texto/markdown e incluir no prompt + instrução para analisar os dados + chain-of-thought para cálculos",
            "Usar apenas Excel",
            "RAG com a planilha como documento"
        ],
        correct: [1],
        explanation: "Data analysis via LLM: formatar dados como tabela markdown no prompt, instruir para analisar. Para cálculos: CoT ajuda. Para planilhas grandes: resumir ou pré-processar métricas-chave. Alternativa: Code Interpreter que executa Python sobre os dados.",
        topic: "prompt-engineering",
        domain: "generative-ai",
        difficulty: "medium"
    },
    {
        id: 'genai_087',
        question: "O que é 'grounding' no contexto de IA generativa?",
        options: [
            "Conectar cabos de aterramento",
            "Ancorar respostas do modelo em fontes de informação verificáveis (documentos, dados, bases de conhecimento) ao invés de depender apenas do conhecimento pré-treinado",
            "Instalar modelo no servidor",
            "Fase inicial de treinamento"
        ],
        correct: [1],
        explanation: "Grounding: vincular output do modelo a fontes confiáveis. RAG é uma forma de grounding. Reduces hallucination. Bedrock Guardrails tem 'contextual grounding check' que verifica se resposta está ancorada no contexto fornecido.",
        topic: "hallucination",
        domain: "generative-ai",
        difficulty: "medium"
    },
    {
        id: 'genai_088',
        question: "Uma empresa quer usar IA generativa mas tem preocupação com propriedade intelectual (IP) — conteúdo gerado pode infringir copyright? Qual consideração?",
        options: [
            "IA generativa nunca tem problemas de IP",
            "Risco existe: modelo pode gerar conteúdo similar ao treinamento. Mitigação: usar modelos com indemnity (proteção IP), filtrar output, revisar antes de publicar",
            "Todo conteúdo gerado é automaticamente protegido",
            "IP não se aplica a conteúdo de IA"
        ],
        correct: [1],
        explanation: "Riscos IP: modelo treinado com dados protegidos pode reproduzir trechos. Mitigações: Amazon oferece IP indemnity para output de Titan. Revisar conteúdo antes de publicar. Usar guardrails. Políticas claras de uso. Área legal ainda evoluindo.",
        topic: "hallucination",
        domain: "generative-ai",
        difficulty: "medium"
    },
    {
        id: 'genai_089',
        question: "O que é 'Amazon Q' e como difere dos modelos no Bedrock?",
        options: [
            "São a mesma coisa",
            "Amazon Q é assistente de IA pronto para uso (business e developer). Bedrock é plataforma para CONSTRUIR aplicações GenAI customizadas com modelos foundation",
            "Q é mais barato",
            "Bedrock não usa IA"
        ],
        correct: [1],
        explanation: "Amazon Q: assistente pronto (Q Business para dados corporativos, Q Developer para código). Bedrock: plataforma/API para construir SUAS aplicações GenAI (escolhe modelo, configura RAG, agents, guardrails). Q = produto pronto. Bedrock = building blocks.",
        topic: "llm-concepts",
        domain: "generative-ai",
        difficulty: "easy"
    },
    {
        id: 'genai_090',
        question: "Uma empresa quer monitorar custos de uso do Bedrock em produção. Quais métricas acompanhar?",
        options: [
            "Apenas número de requests",
            "Input tokens, output tokens, número de invocações, latência, e custo por modelo — CloudWatch metrics + Cost Explorer com tags",
            "Apenas latência",
            "Apenas erros"
        ],
        correct: [1],
        explanation: "Monitorar Bedrock: input tokens (custo de envio), output tokens (custo de geração), invocações (volume), latência (performance), throttling (limites). CloudWatch para métricas. Cost Explorer + tags para alocação. Budgets para alertas.",
        topic: "parameters",
        domain: "generative-ai",
        difficulty: "easy"
    },
    {
        id: 'genai_091',
        question: "O que é 'retrieval-augmented generation' (RAG) vs 'parametric knowledge' em LLMs?",
        options: [
            "São a mesma coisa",
            "Parametric: conhecimento armazenado nos pesos do modelo (estático, do treinamento). RAG: conhecimento buscado externamente em tempo real (dinâmico, atualizado)",
            "RAG é interno ao modelo",
            "Parametric é externo"
        ],
        correct: [1],
        explanation: "Parametric knowledge: 'memória' do modelo (limitada ao que viu no treino, fica desatualizada). RAG: busca externa em docs/DBs atuais. Analogia: parametric = estudou para prova, RAG = pode consultar livro durante a prova. Ideal: combinar ambos.",
        topic: "llm-concepts",
        domain: "generative-ai",
        difficulty: "medium"
    },
    {
        id: 'genai_092',
        question: "Uma empresa quer implementar 'semantic caching' para reduzir custos do Bedrock. O que é?",
        options: [
            "Cache de tokens",
            "Cachear respostas para perguntas semanticamente similares (não apenas idênticas) — se pergunta nova é similar a uma já respondida, retorna cache sem chamar o modelo",
            "Cache de modelos",
            "Cache de embeddings apenas"
        ],
        correct: [1],
        explanation: "Semantic caching: embeddings das queries → se nova query tem similaridade alta (>0.95) com query cacheada, retorna resposta do cache. Reduz custo e latência para perguntas frequentes/similares. Implementar com Redis + vector search ou ElastiCache.",
        topic: "parameters",
        domain: "generative-ai",
        difficulty: "hard"
    },
    {
        id: 'genai_093',
        question: "O que é 'Amazon PartyRock' e para quem é destinado?",
        options: [
            "Plataforma de música",
            "Playground gratuito para experimentar IA generativa sem código — permite construir apps GenAI simples com interface visual para aprender conceitos",
            "Serviço de streaming",
            "Ferramenta de DJ"
        ],
        correct: [1],
        explanation: "PartyRock: playground gratuito (sem conta AWS necessária) para experimentar GenAI. Construir mini-apps com prompts visuais. Ideal para: aprender, prototipar, demonstrar conceitos. Não é produção — é educação e experimentação.",
        topic: "llm-concepts",
        domain: "generative-ai",
        difficulty: "easy"
    },
    {
        id: 'genai_094',
        question: "Uma empresa está comparando custo entre usar modelos grandes (Claude 3.5 Sonnet) vs modelos menores (Claude 3 Haiku). Quando usar cada um?",
        options: [
            "Sempre usar o maior",
            "Modelo grande: tarefas complexas (raciocínio, código, análise). Modelo menor: tarefas simples (classificação, extração, resumo curto). Optimizar custo por task complexity",
            "Sempre usar o menor",
            "Tamanho não afeta qualidade"
        ],
        correct: [1],
        explanation: "Model routing: tarefas simples com modelo barato (Haiku: ~10x mais barato), tarefas complexas com modelo capaz (Sonnet/Opus). Técnica: classificar complexidade da query primeiro, rotear para modelo adequado. Reduz custo 60-80% sem perder qualidade.",
        topic: "parameters",
        domain: "generative-ai",
        difficulty: "medium"
    },
    {
        id: 'genai_095',
        question: "O que é 'watermarking' em conteúdo gerado por IA e por que é importante?",
        options: [
            "Marca d'água visual em imagens",
            "Técnica para identificar se conteúdo foi gerado por IA — pode ser invisível no texto/imagem. Importante para: transparência, combate a desinformação, compliance",
            "Proteção contra pirataria",
            "Compressão de dados"
        ],
        correct: [1],
        explanation: "AI watermarking: marca invisível que identifica conteúdo gerado por IA. Titan Image Generator inclui watermark automático (detecção via Amazon). Texto: mais difícil mas existem técnicas estatísticas. Importante para responsible AI e regulações futuras.",
        topic: "hallucination",
        domain: "generative-ai",
        difficulty: "medium"
    },
    {
        id: 'genai_096',
        question: "Uma empresa quer usar LLM em produção com alta disponibilidade. Qual padrão arquitetural para resiliência?",
        options: [
            "Usar apenas um modelo em uma região",
            "Multi-model fallback: se modelo principal falha/throttle, rotear para modelo alternativo + cross-region + retry com exponential backoff + circuit breaker",
            "Esperar modelo voltar",
            "Cache de todas as respostas possíveis"
        ],
        correct: [1],
        explanation: "Produção resiliente: 1) Fallback models (se Claude throttle, usar Titan), 2) Cross-region (se us-east-1 falha, rotear para eu-west-1), 3) Retry + backoff, 4) Circuit breaker (parar de chamar se muitas falhas), 5) Cache para queries comuns.",
        topic: "parameters",
        domain: "generative-ai",
        difficulty: "hard"
    }
];

generativeAiQuestions.push(...generativeAiQuestions3);
