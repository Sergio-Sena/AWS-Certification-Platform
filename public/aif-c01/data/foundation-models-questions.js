// AIF-C01 Domain 3: Applications of Foundation Models (54 questões - 28%)
// Tópicos: RAG, Fine-tuning, Bedrock Knowledge Bases, Agents, Guardrails, Embeddings, casos de uso

const foundationModelsQuestions = [
    {
        id: 'fm_001',
        question: "Uma empresa quer que seu LLM responda perguntas sobre documentos internos atualizados semanalmente. O modelo não foi treinado com esses dados. Qual técnica usar?",
        options: [
            "Fine-tuning semanal do modelo",
            "RAG (Retrieval-Augmented Generation) com Bedrock Knowledge Bases",
            "Treinar modelo do zero com dados internos",
            "Aumentar janela de contexto"
        ],
        correct: [1],
        explanation: "RAG busca documentos relevantes em tempo real e injeta no prompt. Knowledge Bases do Bedrock automatiza: ingere docs do S3, cria embeddings, busca e responde. Sem retreinar o modelo.",
        topic: "rag",
        domain: "foundation-models"
    },
    {
        id: 'fm_002',
        question: "Qual é a ordem correta das etapas em um pipeline RAG?",
        options: [
            "Pergunta → Modelo → Busca → Resposta",
            "Documentos em chunks → Embeddings → Armazenar em banco vetorial → Pergunta vira embedding → Busca similares → Injeta no prompt → Modelo responde",
            "Treinar modelo → Fazer pergunta → Resposta",
            "Pergunta → Fine-tuning → Resposta"
        ],
        correct: [1],
        explanation: "Pipeline RAG: 1) Docs divididos em chunks, 2) Chunks viram embeddings, 3) Armazenados em vector DB, 4) Query vira embedding, 5) Busca chunks similares, 6) Chunks injetados no prompt, 7) LLM responde com contexto.",
        topic: "rag",
        domain: "foundation-models"
    },
    {
        id: 'fm_003',
        question: "Uma equipe de cientistas de dados está desenvolvendo um sistema de recomendação que precisa analisar simultaneamente descrições textuais e imagens de produtos. Qual tipo de foundation model usar?",
        options: [
            "Modelo de embedding de texto",
            "Modelo de geração multimodal",
            "Modelo de embedding multimodal",
            "Modelo de geração de imagens"
        ],
        correct: [2],
        explanation: "Embedding multimodal coloca texto e imagem no mesmo espaço vetorial. Permite comparar descrição textual com imagem do produto para recomendações cross-modal. Geração multimodal CRIA conteúdo, embedding COMPARA.",
        topic: "embeddings",
        domain: "foundation-models"
    },
    {
        id: 'fm_004',
        question: "Quando usar fine-tuning ao invés de RAG para customizar um foundation model?",
        options: [
            "Sempre que possível, fine-tuning é melhor",
            "Quando precisa mudar o estilo/tom/formato do modelo ou ensinar conhecimento de domínio muito específico que RAG não resolve",
            "Fine-tuning é sempre mais barato",
            "RAG e fine-tuning são a mesma coisa"
        ],
        correct: [1],
        explanation: "Fine-tuning: muda comportamento/estilo do modelo (ex: responder como médico, gerar código em padrão específico). RAG: adiciona conhecimento factual. Hierarquia: prompt engineering → RAG → fine-tuning → pre-training.",
        topic: "fine-tuning",
        domain: "foundation-models"
    },
    {
        id: 'fm_005',
        question: "O que são Bedrock Agents e qual problema resolvem?",
        options: [
            "Modelos de ML para classificação",
            "Permitem que foundation models executem ações (chamar APIs, consultar bancos, executar workflows) além de apenas gerar texto",
            "Agentes humanos que revisam outputs",
            "Ferramentas de monitoramento"
        ],
        correct: [1],
        explanation: "Bedrock Agents: LLM + capacidade de ação. O modelo decide quais ferramentas usar (APIs, Lambda, DBs) para completar tarefas. Ex: 'reserve um voo' → agent chama API de reservas. Vai além de gerar texto.",
        topic: "agents",
        domain: "foundation-models"
    },
    {
        id: 'fm_006',
        question: "Qual serviço AWS armazena embeddings para busca vetorial em um pipeline RAG?",
        options: [
            "Amazon DynamoDB",
            "Amazon OpenSearch Serverless (com vector engine) ou Aurora PostgreSQL com pgvector",
            "Amazon S3",
            "Amazon RDS MySQL"
        ],
        correct: [1],
        explanation: "Vector stores para RAG: OpenSearch Serverless (vector engine), Aurora PostgreSQL + pgvector, ou Pinecone. Armazenam embeddings e fazem busca por similaridade (nearest neighbor). S3 armazena docs originais.",
        topic: "rag",
        domain: "foundation-models"
    },
    {
        id: 'fm_007',
        question: "Uma empresa quer que o LLM acesse dados em tempo real (preços de ações, clima). RAG com documentos estáticos não resolve. Qual solução?",
        options: [
            "Fine-tuning diário",
            "Bedrock Agents com action groups que chamam APIs externas em tempo real",
            "Aumentar janela de contexto",
            "Usar modelo mais recente"
        ],
        correct: [1],
        explanation: "Agents com action groups: o modelo decide quando precisa de dados em tempo real e chama APIs (Lambda functions) para obter informações atuais. Combina raciocínio do LLM com dados live.",
        topic: "agents",
        domain: "foundation-models"
    },
    {
        id: 'fm_008',
        question: "Qual é a diferença entre embedding de texto e geração multimodal?",
        options: [
            "São a mesma coisa",
            "Embedding COMPARA/representa conteúdo como vetores; geração multimodal CRIA conteúdo novo de um tipo a partir de outro",
            "Embedding gera imagens",
            "Geração multimodal apenas classifica"
        ],
        correct: [1],
        explanation: "Embedding: converte conteúdo em vetor para comparação/busca (não gera nada novo). Geração multimodal: cria conteúdo (texto→imagem, imagem→descrição). Embedding = representar. Geração = criar.",
        topic: "embeddings",
        domain: "foundation-models"
    },
    {
        id: 'fm_009',
        question: "Uma empresa configurou RAG mas as respostas ainda contêm informações incorretas. O que pode estar errado?",
        options: [
            "O modelo é muito grande",
            "Chunks muito grandes/pequenos, embeddings de baixa qualidade, ou documentos fonte desatualizados/incorretos",
            "Temperatura muito baixa",
            "Janela de contexto muito grande"
        ],
        correct: [1],
        explanation: "Problemas comuns em RAG: chunks mal dimensionados (muito grandes perdem relevância, muito pequenos perdem contexto), modelo de embedding inadequado, docs fonte com erros, ou retrieval trazendo chunks irrelevantes.",
        topic: "rag",
        domain: "foundation-models"
    },
    {
        id: 'fm_010',
        question: "O que é 'chunking' no contexto de RAG e por que é importante?",
        options: [
            "Comprimir documentos",
            "Dividir documentos em pedaços menores (chunks) para que cada pedaço caiba na janela de contexto e seja indexável separadamente",
            "Criptografar documentos",
            "Traduzir documentos"
        ],
        correct: [1],
        explanation: "Chunking: dividir docs em pedaços (300-1000 tokens). Cada chunk vira um embedding independente. Na busca, apenas chunks relevantes são recuperados (não o doc inteiro). Tamanho do chunk afeta qualidade do RAG.",
        topic: "rag",
        domain: "foundation-models"
    },
    {
        id: 'fm_011',
        question: "Qual é a hierarquia correta de customização de foundation models (do mais simples ao mais complexo)?",
        options: [
            "Fine-tuning → RAG → Prompt Engineering → Pre-training",
            "Prompt Engineering → RAG → Fine-tuning → Pre-training (continued)",
            "Pre-training → Fine-tuning → RAG → Prompt Engineering",
            "Todos são equivalentes"
        ],
        correct: [1],
        explanation: "Sempre começar pelo mais simples: 1) Prompt Engineering (zero custo extra), 2) RAG (adiciona conhecimento), 3) Fine-tuning (muda comportamento), 4) Pre-training (treinar do zero — raramente necessário).",
        topic: "fine-tuning",
        domain: "foundation-models"
    },
    {
        id: 'fm_012',
        question: "Uma empresa quer criar um assistente que busca em 10.000 documentos PDF internos e responde perguntas dos funcionários. Qual arquitetura AWS?",
        options: [
            "Lambda + Comprehend",
            "Bedrock Knowledge Bases (S3 com PDFs → embeddings automáticos → vector store → RAG com foundation model)",
            "SageMaker training job",
            "Amazon Kendra apenas"
        ],
        correct: [1],
        explanation: "Bedrock Knowledge Bases: end-to-end gerenciado. Upload PDFs no S3 → chunking automático → embeddings → armazena em OpenSearch/Aurora → RAG automático quando usuário pergunta. Zero código para pipeline.",
        topic: "rag",
        domain: "foundation-models"
    },
    {
        id: 'fm_013',
        question: "O que é Amazon Kendra e como se relaciona com RAG?",
        options: [
            "Modelo de linguagem",
            "Serviço de enterprise search inteligente que pode ser usado como retriever em pipelines RAG",
            "Banco de dados vetorial",
            "Ferramenta de fine-tuning"
        ],
        correct: [1],
        explanation: "Kendra: busca empresarial inteligente com NLU. Indexa documentos de múltiplas fontes (S3, SharePoint, DBs). Pode ser usado como retriever em RAG — busca docs relevantes que são passados ao LLM.",
        topic: "rag",
        domain: "foundation-models"
    },
    {
        id: 'fm_014',
        question: "Uma empresa fez fine-tuning de um modelo no Bedrock. O modelo agora responde bem para o domínio específico mas perdeu capacidades gerais. O que aconteceu?",
        options: [
            "Bug no Bedrock",
            "Catastrophic forgetting — fine-tuning excessivo fez o modelo 'esquecer' conhecimento geral",
            "Modelo muito pequeno",
            "Dados de fine-tuning corrompidos"
        ],
        correct: [1],
        explanation: "Catastrophic forgetting: fine-tuning agressivo sobrescreve conhecimento geral. Mitigação: usar poucos epochs, learning rate baixo, ou técnicas como LoRA (Low-Rank Adaptation) que ajustam apenas parte dos pesos.",
        topic: "fine-tuning",
        domain: "foundation-models"
    },
    {
        id: 'fm_015',
        question: "Qual é a diferença entre Bedrock Knowledge Bases e Bedrock Agents?",
        options: [
            "São a mesma coisa",
            "Knowledge Bases = RAG (busca em documentos). Agents = execução de ações (chamam APIs, fazem tarefas). Agents podem USAR Knowledge Bases como uma de suas ferramentas",
            "Knowledge Bases são mais caras",
            "Agents não usam LLMs"
        ],
        correct: [1],
        explanation: "Knowledge Bases: RAG gerenciado (pergunta → busca docs → responde). Agents: orquestração de ações (pergunta → decide ação → chama API/KB/Lambda → responde). Agent pode usar KB como uma tool.",
        topic: "agents",
        domain: "foundation-models"
    },
    {
        id: 'fm_016',
        question: "Uma empresa quer gerar resumos de contratos legais mantendo precisão jurídica. Qual abordagem combina melhor?",
        options: [
            "Apenas prompt engineering",
            "RAG com base de conhecimento jurídico + prompt com instruções de precisão + guardrails para validação",
            "Fine-tuning apenas",
            "Usar modelo genérico sem customização"
        ],
        correct: [1],
        explanation: "Combinação: RAG traz contexto jurídico relevante, prompt instrui precisão e formato, guardrails validam output. Para domínios críticos (legal, médico), múltiplas camadas de controle são necessárias.",
        topic: "rag",
        domain: "foundation-models"
    },
    {
        id: 'fm_017',
        question: "O que é 'semantic search' e como difere de keyword search?",
        options: [
            "São a mesma coisa",
            "Keyword busca por palavras exatas; semantic search usa embeddings para encontrar conteúdo com significado similar mesmo com palavras diferentes",
            "Semantic search é mais lenta",
            "Keyword search é mais precisa"
        ],
        correct: [1],
        explanation: "Keyword: 'carro veloz' só encontra docs com essas palavras. Semantic: encontra docs sobre 'automóvel rápido', 'veículo de alta performance' — entende significado via embeddings. Base do RAG moderno.",
        topic: "embeddings",
        domain: "foundation-models"
    },
    {
        id: 'fm_018',
        question: "Qual técnica de fine-tuning é mais eficiente em termos de custo e preserva melhor o conhecimento original do modelo?",
        options: [
            "Full fine-tuning (todos os parâmetros)",
            "LoRA (Low-Rank Adaptation) — ajusta apenas uma pequena fração dos parâmetros",
            "Treinar do zero",
            "Aumentar dados de treinamento 10x"
        ],
        correct: [1],
        explanation: "LoRA: adiciona pequenas matrizes treináveis ao modelo sem modificar pesos originais. Muito mais barato (menos compute), mais rápido, e preserva conhecimento geral. Padrão para fine-tuning eficiente.",
        topic: "fine-tuning",
        domain: "foundation-models"
    },
    {
        id: 'fm_019',
        question: "Uma empresa quer que o LLM execute um workflow: verificar estoque → calcular preço → criar pedido. Qual feature do Bedrock?",
        options: [
            "Knowledge Bases",
            "Bedrock Agents com action groups (cada ação = Lambda function)",
            "Guardrails",
            "Model evaluation"
        ],
        correct: [1],
        explanation: "Agents com action groups: cada ação (verificar estoque, calcular preço, criar pedido) é uma Lambda function. O Agent decide a sequência, chama as funções e orquestra o workflow automaticamente.",
        topic: "agents",
        domain: "foundation-models"
    },
    {
        id: 'fm_020',
        question: "Qual métrica é mais relevante para avaliar a qualidade de um sistema RAG?",
        options: [
            "Velocidade de geração",
            "Relevância dos chunks recuperados (retrieval accuracy) + fidelidade da resposta aos chunks (faithfulness)",
            "Tamanho do modelo",
            "Número de documentos indexados"
        ],
        correct: [1],
        explanation: "RAG quality = retrieval quality + generation quality. Retrieval: chunks recuperados são relevantes? Faithfulness: resposta é fiel aos chunks (não alucina)? Métricas: precision@k, recall, RAGAS framework.",
        topic: "rag",
        domain: "foundation-models"
    }
];

window.foundationModelsQuestions = foundationModelsQuestions;
