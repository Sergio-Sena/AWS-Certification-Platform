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


// Foundation Models - Lote 2 (questões 21-54)
const foundationModelsQuestions2 = [
    {
        id: 'fm_021',
        question: "Uma empresa quer implementar RAG mas seus documentos estão em múltiplos formatos (PDF, Word, HTML, Confluence). Como ingerir tudo no Bedrock Knowledge Bases?",
        options: [
            "Converter tudo para texto manualmente",
            "Knowledge Bases suporta múltiplos formatos nativamente — basta colocar no S3 e o serviço processa automaticamente",
            "Usar apenas PDFs",
            "Precisa de ETL customizado para cada formato"
        ],
        correct: [1],
        explanation: "Bedrock Knowledge Bases processa automaticamente: PDF, Word, HTML, Markdown, CSV, texto. Também integra com data sources como Confluence, SharePoint, Salesforce. Chunking e embedding automáticos.",
        topic: "rag",
        domain: "foundation-models"
    },
    {
        id: 'fm_022',
        question: "O que é 'hybrid search' no contexto de RAG e por que é melhor que apenas busca vetorial?",
        options: [
            "Busca em múltiplos bancos de dados",
            "Combina busca semântica (embeddings) com busca por keywords (BM25) para melhor recall e precisão",
            "Busca em múltiplas regiões AWS",
            "Busca com múltiplos modelos"
        ],
        correct: [1],
        explanation: "Hybrid search: semântica captura significado (sinônimos, contexto) + keywords captura termos exatos (nomes, códigos). Combinadas têm melhor recall que qualquer uma sozinha. OpenSearch suporta nativamente.",
        topic: "rag",
        domain: "foundation-models"
    },
    {
        id: 'fm_023',
        question: "Uma empresa quer usar IA generativa para gerar código SQL a partir de perguntas em linguagem natural sobre seu banco de dados. Qual abordagem?",
        options: [
            "Fine-tuning com exemplos SQL",
            "RAG com schema do banco + few-shot examples de queries + prompt com instruções SQL",
            "Usar modelo genérico sem contexto",
            "Treinar modelo do zero"
        ],
        correct: [1],
        explanation: "Text-to-SQL: RAG injeta schema das tabelas no prompt. Few-shot examples mostram padrão pergunta→SQL. Prompt instrui formato. O modelo gera SQL baseado no schema real do banco.",
        topic: "rag",
        domain: "foundation-models"
    },
    {
        id: 'fm_024',
        question: "Qual é o papel do 'reranking' em um pipeline RAG?",
        options: [
            "Reordenar documentos no S3",
            "Após retrieval inicial, reordenar chunks por relevância usando modelo mais preciso antes de passar ao LLM",
            "Reorganizar a resposta do LLM",
            "Reindexar embeddings"
        ],
        correct: [1],
        explanation: "Reranking: retrieval inicial traz top-K chunks (rápido mas impreciso). Reranker (modelo cross-encoder) reordena por relevância real. Melhora qualidade dos chunks passados ao LLM. Custo extra mas melhor precisão.",
        topic: "rag",
        domain: "foundation-models"
    },
    {
        id: 'fm_025',
        question: "Uma empresa quer que o modelo gere respostas APENAS baseadas nos documentos fornecidos, sem usar conhecimento pré-treinado. Como instruir?",
        options: [
            "Usar temperatura 0",
            "Prompt: 'Responda APENAS com base no contexto fornecido. Se a informação não estiver no contexto, diga que não sabe'",
            "Fine-tuning para esquecer conhecimento geral",
            "Usar modelo menor"
        ],
        correct: [1],
        explanation: "Instrução explícita no prompt para responder apenas do contexto + instrução para admitir quando não sabe. Reduz alucinações. Guardrails podem reforçar. Técnica chamada 'grounded generation'.",
        topic: "rag",
        domain: "foundation-models"
    },
    {
        id: 'fm_026',
        question: "O que são 'action groups' no Bedrock Agents?",
        options: [
            "Grupos de usuários IAM",
            "Conjuntos de ações que o Agent pode executar — cada ação é definida por API schema (OpenAPI) e implementada por Lambda",
            "Grupos de modelos",
            "Configurações de segurança"
        ],
        correct: [1],
        explanation: "Action groups: definem o que o Agent pode FAZER. Cada grupo tem API schema (OpenAPI spec) descrevendo ações disponíveis. Lambda implementa a lógica. Agent decide quando/qual ação chamar baseado na conversa.",
        topic: "agents",
        domain: "foundation-models"
    },
    {
        id: 'fm_027',
        question: "Uma empresa quer usar IA para classificar tickets de suporte automaticamente em categorias. Qual abordagem com foundation models?",
        options: [
            "Treinar CNN do zero",
            "Zero-shot classification com prompt descrevendo categorias OU fine-tuning com exemplos rotulados de tickets",
            "Usar apenas regex",
            "Amazon Rekognition"
        ],
        correct: [1],
        explanation: "Zero-shot: prompt lista categorias e pede classificação (funciona para categorias claras). Fine-tuning: se zero-shot não é preciso o suficiente, treinar com exemplos rotulados melhora significativamente.",
        topic: "fine-tuning",
        domain: "foundation-models"
    },
    {
        id: 'fm_028',
        question: "Qual é a vantagem de usar Amazon Titan Embeddings vs embeddings de terceiros no Bedrock?",
        options: [
            "Titan é sempre melhor",
            "Titan é nativo AWS (menor latência, integração direta com Knowledge Bases, sem dados saindo da AWS)",
            "Titan é gratuito",
            "Não há diferença"
        ],
        correct: [1],
        explanation: "Titan Embeddings: nativo AWS, integração seamless com Knowledge Bases, dados não saem da infra AWS (compliance), boa qualidade para múltiplos idiomas. Alternativas (Cohere) podem ser melhores para casos específicos.",
        topic: "embeddings",
        domain: "foundation-models"
    },
    {
        id: 'fm_029',
        question: "Uma empresa implementou RAG mas o modelo às vezes ignora o contexto recuperado e responde com conhecimento próprio. Como forçar uso do contexto?",
        options: [
            "Aumentar temperatura",
            "Prompt engineering: instrução explícita + separadores claros entre contexto e pergunta + pedir citação de fontes",
            "Usar modelo menor",
            "Remover o contexto"
        ],
        correct: [1],
        explanation: "Técnicas: 1) Instrução clara: 'use APENAS o contexto abaixo', 2) Separadores: <context>...</context>, 3) Pedir citações: 'cite o trecho usado', 4) Temperatura baixa. Se persistir, avaliar qualidade do retrieval.",
        topic: "rag",
        domain: "foundation-models"
    },
    {
        id: 'fm_030',
        question: "O que é 'continued pre-training' no Bedrock e quando usar?",
        options: [
            "Treinar modelo do zero",
            "Continuar o pré-treinamento do foundation model com dados de domínio específico para que 'absorva' vocabulário e conhecimento do setor",
            "Fine-tuning com poucos exemplos",
            "RAG com mais documentos"
        ],
        correct: [1],
        explanation: "Continued pre-training: alimenta o modelo com grandes volumes de texto do domínio (papers médicos, código, documentos legais). Modelo 'absorve' vocabulário e padrões do setor. Mais profundo que fine-tuning, menos que treinar do zero.",
        topic: "fine-tuning",
        domain: "foundation-models"
    },
    {
        id: 'fm_031',
        question: "Uma empresa quer automatizar atendimento ao cliente: responder perguntas, verificar status de pedido e processar devoluções. Qual arquitetura?",
        options: [
            "Apenas chatbot com respostas fixas",
            "Bedrock Agent com: Knowledge Base (FAQ/docs) + action groups (API de pedidos, API de devoluções)",
            "Fine-tuning com histórico de atendimento",
            "Amazon Lex apenas"
        ],
        correct: [1],
        explanation: "Agent combina: KB para perguntas informativas (FAQ, políticas) + action groups para ações transacionais (consultar pedido via API, processar devolução via Lambda). Orquestra automaticamente baseado na intenção.",
        topic: "agents",
        domain: "foundation-models"
    },
    {
        id: 'fm_032',
        question: "Qual é o impacto do tamanho do chunk no RAG?",
        options: [
            "Tamanho não importa",
            "Chunks pequenos: mais precisos na busca mas menos contexto. Chunks grandes: mais contexto mas podem trazer informação irrelevante",
            "Sempre usar chunks grandes",
            "Sempre usar chunks de 1 palavra"
        ],
        correct: [1],
        explanation: "Trade-off: chunks pequenos (100-200 tokens) = busca precisa, pouco contexto. Chunks grandes (1000+ tokens) = mais contexto, busca menos precisa. Ideal: 300-500 tokens com overlap entre chunks.",
        topic: "rag",
        domain: "foundation-models"
    },
    {
        id: 'fm_033',
        question: "O que é 'overlap' entre chunks e por que é importante?",
        options: [
            "Duplicação desnecessária de dados",
            "Sobreposição de texto entre chunks adjacentes para preservar contexto nas bordas e evitar perda de informação",
            "Erro de processamento",
            "Compressão de dados"
        ],
        correct: [1],
        explanation: "Overlap (ex: 10-20% do chunk): garante que informação nas bordas não seja cortada. Se uma frase importante está entre dois chunks, o overlap garante que pelo menos um chunk a contenha completa.",
        topic: "rag",
        domain: "foundation-models"
    },
    {
        id: 'fm_034',
        question: "Uma empresa quer usar IA generativa para gerar relatórios financeiros a partir de dados estruturados (tabelas). Qual abordagem?",
        options: [
            "Apenas RAG com documentos",
            "Converter dados em texto descritivo no prompt + instruções de formato + few-shot examples de relatórios",
            "Fine-tuning com relatórios antigos apenas",
            "Usar Amazon QuickSight"
        ],
        correct: [1],
        explanation: "Data-to-text: dados estruturados são formatados como texto/tabela no prompt. Few-shot examples mostram formato desejado do relatório. LLM gera narrativa a partir dos dados. Pode combinar com RAG para contexto adicional.",
        topic: "rag",
        domain: "foundation-models"
    },
    {
        id: 'fm_035',
        question: "Qual é a diferença entre Bedrock Guardrails aplicados no input vs output?",
        options: [
            "Não há diferença",
            "Input guardrails filtram/bloqueiam prompts do usuário antes de chegar ao modelo. Output guardrails filtram/bloqueiam respostas do modelo antes de chegar ao usuário",
            "Guardrails só funcionam no output",
            "Guardrails só funcionam no input"
        ],
        correct: [1],
        explanation: "Input: bloqueia prompts maliciosos, PII, tópicos proibidos ANTES do modelo processar (economia de tokens). Output: filtra respostas inadequadas, redacta PII, bloqueia conteúdo tóxico ANTES de entregar ao usuário.",
        topic: "agents",
        domain: "foundation-models"
    },
    {
        id: 'fm_036',
        question: "Uma empresa quer implementar busca semântica em catálogo de 1 milhão de produtos. Qual pipeline?",
        options: [
            "SQL LIKE queries",
            "Gerar embeddings de cada produto (título+descrição) → armazenar em vector DB → query do usuário vira embedding → busca nearest neighbors",
            "Elasticsearch com keywords apenas",
            "DynamoDB Scan"
        ],
        correct: [1],
        explanation: "Semantic search pipeline: 1) Embedding model processa cada produto, 2) Vetores armazenados em OpenSearch/pgvector, 3) Query do usuário vira embedding, 4) Busca vetores mais próximos (cosine similarity). Encontra produtos por significado.",
        topic: "embeddings",
        domain: "foundation-models"
    },
    {
        id: 'fm_037',
        question: "O que é 'model customization' no Bedrock e quais opções existem?",
        options: [
            "Apenas prompt engineering",
            "Fine-tuning (ajustar com exemplos) e Continued Pre-training (absorver conhecimento de domínio) — ambos criam modelo customizado privado",
            "Apenas RAG",
            "Alterar código do modelo"
        ],
        correct: [1],
        explanation: "Bedrock Model Customization: Fine-tuning (exemplos input→output para ajustar comportamento) e Continued Pre-training (grandes volumes de texto para absorver domínio). Resultado: modelo privado na sua conta.",
        topic: "fine-tuning",
        domain: "foundation-models"
    },
    {
        id: 'fm_038',
        question: "Uma empresa quer que o Agent do Bedrock consulte um banco de dados PostgreSQL para responder perguntas sobre inventário. Como configurar?",
        options: [
            "Conectar Bedrock diretamente ao PostgreSQL",
            "Action group com Lambda function que executa queries no PostgreSQL e retorna resultados ao Agent",
            "Migrar dados para DynamoDB",
            "Usar Knowledge Base com dump do banco"
        ],
        correct: [1],
        explanation: "Agent → Action Group → Lambda → PostgreSQL. Lambda recebe parâmetros do Agent (ex: product_id), executa query, retorna resultado. Agent incorpora na resposta. Separação de responsabilidades.",
        topic: "agents",
        domain: "foundation-models"
    },
    {
        id: 'fm_039',
        question: "Qual é a vantagem de usar 'metadata filtering' em busca vetorial para RAG?",
        options: [
            "Não há vantagem",
            "Filtrar chunks por metadados (data, departamento, tipo) ANTES da busca vetorial — reduz espaço de busca e melhora relevância",
            "Aumenta custo",
            "Reduz qualidade"
        ],
        correct: [1],
        explanation: "Metadata filtering: 'busque apenas em documentos do departamento financeiro de 2024'. Reduz candidatos antes da busca vetorial. Melhora precisão e performance. Bedrock Knowledge Bases suporta nativamente.",
        topic: "rag",
        domain: "foundation-models"
    },
    {
        id: 'fm_040',
        question: "Uma empresa quer usar IA para resumir reuniões gravadas. Qual pipeline AWS?",
        options: [
            "Apenas Amazon Comprehend",
            "Amazon Transcribe (áudio→texto) → Bedrock foundation model (texto→resumo) com prompt de sumarização",
            "Amazon Polly",
            "Amazon Rekognition"
        ],
        correct: [1],
        explanation: "Pipeline: Transcribe converte áudio em texto (transcrição). Bedrock LLM recebe transcrição e gera resumo estruturado (pontos-chave, ações, decisões). Pode adicionar RAG com contexto de projetos.",
        topic: "rag",
        domain: "foundation-models"
    },
    {
        id: 'fm_041',
        question: "O que é 'instruction tuning' e como se relaciona com fine-tuning?",
        options: [
            "São a mesma coisa",
            "Instruction tuning é um tipo de fine-tuning onde o modelo aprende a seguir instruções — treinado com pares (instrução, resposta esperada)",
            "Instruction tuning não usa dados",
            "É mais caro que pre-training"
        ],
        correct: [1],
        explanation: "Instruction tuning: fine-tuning específico com formato (instrução→resposta). Ensina o modelo a seguir comandos. É o que torna modelos 'chat-ready'. Diferente de fine-tuning genérico que pode ser para qualquer tarefa.",
        topic: "fine-tuning",
        domain: "foundation-models"
    },
    {
        id: 'fm_042',
        question: "Uma empresa quer implementar um sistema de Q&A sobre regulamentações que muda frequentemente. Fine-tuning ou RAG?",
        options: [
            "Fine-tuning (mais preciso)",
            "RAG — dados mudam frequentemente, RAG reflete mudanças imediatamente ao atualizar documentos sem retreinar",
            "Ambos são equivalentes para dados dinâmicos",
            "Nenhum dos dois"
        ],
        correct: [1],
        explanation: "RAG para dados dinâmicos: atualizar documento no S3 = respostas atualizadas imediatamente. Fine-tuning requer retreinar (caro, demorado) a cada mudança. RAG = conhecimento dinâmico. Fine-tuning = comportamento estático.",
        topic: "rag",
        domain: "foundation-models"
    },
    {
        id: 'fm_043',
        question: "Qual é o papel do 'orchestration' em Bedrock Agents?",
        options: [
            "Gerenciar infraestrutura",
            "O Agent decide automaticamente: qual ferramenta usar, em qual ordem, quando pedir mais informação ao usuário, e quando entregar resposta final",
            "Agendar tarefas",
            "Balancear carga"
        ],
        correct: [1],
        explanation: "Orchestration: o LLM do Agent raciocina sobre a pergunta, decide se precisa de KB, API, ou pode responder direto. Planeja sequência de ações. Executa. Avalia resultado. Itera se necessário. Tudo automático.",
        topic: "agents",
        domain: "foundation-models"
    },
    {
        id: 'fm_044',
        question: "Uma empresa quer usar embeddings para detectar duplicatas em base de tickets de suporte. Como implementar?",
        options: [
            "Comparar texto exato",
            "Gerar embedding de cada ticket → calcular similaridade coseno entre pares → tickets com similaridade > threshold são duplicatas",
            "Usar regex",
            "Contar palavras em comum"
        ],
        correct: [1],
        explanation: "Embeddings capturam significado. Tickets com mesmo problema mas palavras diferentes terão embeddings similares. Cosine similarity > 0.9 indica provável duplicata. Mais eficaz que comparação textual.",
        topic: "embeddings",
        domain: "foundation-models"
    },
    {
        id: 'fm_045',
        question: "O que é 'prompt caching' no Bedrock e qual o benefício?",
        options: [
            "Cachear respostas do modelo",
            "Reutilizar prefixos de prompt já processados para reduzir latência e custo em requests com contexto compartilhado",
            "Armazenar prompts no S3",
            "Cache de embeddings"
        ],
        correct: [1],
        explanation: "Prompt caching: se múltiplos requests compartilham mesmo prefixo (system prompt + contexto RAG), o processamento do prefixo é cacheado. Requests subsequentes pagam apenas pelos tokens novos. Reduz custo e latência.",
        topic: "rag",
        domain: "foundation-models"
    },
    {
        id: 'fm_046',
        question: "Uma empresa quer usar IA para gerar descrições de produtos a partir de especificações técnicas. Qual abordagem mais custo-eficiente?",
        options: [
            "Fine-tuning de modelo grande",
            "Prompt engineering com few-shot examples (especificação→descrição) usando modelo adequado no Bedrock",
            "Treinar modelo do zero",
            "Contratar redatores"
        ],
        correct: [1],
        explanation: "Para geração de texto com formato definido, few-shot prompting geralmente é suficiente. Exemplos no prompt mostram o padrão especificação→descrição. Sem custo de fine-tuning. Escalar para fine-tuning apenas se qualidade insuficiente.",
        topic: "fine-tuning",
        domain: "foundation-models"
    },
    {
        id: 'fm_047',
        question: "Qual é a diferença entre 'retrieval' e 'generation' em RAG?",
        options: [
            "São a mesma etapa",
            "Retrieval = buscar chunks relevantes no vector store. Generation = LLM gerar resposta usando os chunks como contexto",
            "Retrieval é mais importante",
            "Generation acontece primeiro"
        ],
        correct: [1],
        explanation: "RAG tem 2 fases distintas: Retrieval (busca — qualidade depende de embeddings e chunking) e Generation (resposta — qualidade depende do LLM e prompt). Problemas em qualquer fase afetam o resultado final.",
        topic: "rag",
        domain: "foundation-models"
    },
    {
        id: 'fm_048',
        question: "Uma empresa quer que o modelo gere emails de marketing personalizados para diferentes segmentos de clientes. Qual abordagem?",
        options: [
            "Um email genérico para todos",
            "Prompt com variáveis de personalização (nome, segmento, histórico) + few-shot examples por segmento + temperatura moderada para variação",
            "Fine-tuning por segmento",
            "Usar templates fixos"
        ],
        correct: [1],
        explanation: "Prompt dinâmico: injeta dados do cliente (variáveis) + exemplos do tom por segmento. Temperatura 0.7 gera variação natural. Escala para milhões de emails personalizados sem fine-tuning por segmento.",
        topic: "rag",
        domain: "foundation-models"
    },
    {
        id: 'fm_049',
        question: "O que é 'guardrail' no contexto de Bedrock e quais tipos existem?",
        options: [
            "Firewall de rede",
            "Filtros configuráveis que controlam input/output do modelo: content filters, denied topics, word filters, PII redaction, contextual grounding",
            "Limites de custo",
            "Controle de acesso IAM"
        ],
        correct: [1],
        explanation: "Bedrock Guardrails: content filters (toxicidade, violência), denied topics (temas proibidos), word filters (palavras bloqueadas), PII redaction (mascarar dados pessoais), contextual grounding (verificar fidelidade ao contexto).",
        topic: "agents",
        domain: "foundation-models"
    },
    {
        id: 'fm_050',
        question: "Uma empresa quer avaliar se RAG ou fine-tuning é melhor para seu caso. Qual critério principal de decisão?",
        options: [
            "Custo apenas",
            "Se o problema é de CONHECIMENTO (dados factuais/atualizados) → RAG. Se é de COMPORTAMENTO (estilo/formato/tom) → fine-tuning",
            "Sempre RAG",
            "Sempre fine-tuning"
        ],
        correct: [1],
        explanation: "Regra de ouro: RAG = adicionar/atualizar conhecimento factual. Fine-tuning = mudar como o modelo se comporta (estilo, formato, tom, domínio). Muitas vezes combina-se ambos: fine-tuning para comportamento + RAG para conhecimento.",
        topic: "fine-tuning",
        domain: "foundation-models"
    },
    {
        id: 'fm_051',
        question: "O que é 'contextual grounding check' nos Bedrock Guardrails?",
        options: [
            "Verificar gramática",
            "Verificar se a resposta do modelo é fiel ao contexto fornecido (RAG) — detecta quando o modelo alucina além do contexto",
            "Verificar ortografia",
            "Verificar custo"
        ],
        correct: [1],
        explanation: "Contextual grounding: compara resposta do modelo com o contexto RAG fornecido. Se a resposta contém informação que NÃO está no contexto (alucinação), o guardrail pode bloquear ou alertar. Essencial para RAG confiável.",
        topic: "agents",
        domain: "foundation-models"
    },
    {
        id: 'fm_052',
        question: "Uma empresa quer usar IA para analisar sentimento de reviews de produtos em múltiplos idiomas. Qual abordagem mais simples?",
        options: [
            "Treinar modelo por idioma",
            "Amazon Comprehend (detecta sentimento nativamente em múltiplos idiomas) ou Bedrock com prompt multilíngue",
            "Traduzir tudo para inglês primeiro",
            "Usar regex por idioma"
        ],
        correct: [1],
        explanation: "Comprehend: sentiment analysis nativo em múltiplos idiomas (sem treinar). Alternativa: Bedrock LLM com prompt 'analise o sentimento deste texto' — modelos modernos são multilíngues. Comprehend é mais simples para este caso.",
        topic: "embeddings",
        domain: "foundation-models"
    },
    {
        id: 'fm_053',
        question: "Qual é o benefício de usar 'multi-modal embeddings' em um sistema de busca de produtos?",
        options: [
            "Apenas reduz custo",
            "Permite buscar produtos por texto OU imagem — 'encontre produtos parecidos com esta foto' ou 'encontre a imagem que combina com esta descrição'",
            "Melhora velocidade apenas",
            "Não há benefício vs text-only"
        ],
        correct: [1],
        explanation: "Multi-modal embeddings: texto e imagem no mesmo espaço vetorial. Busca cross-modal: foto de sapato → encontra sapatos similares. Descrição 'vestido vermelho' → encontra imagens correspondentes. Amazon Titan Multimodal Embeddings.",
        topic: "embeddings",
        domain: "foundation-models"
    },
    {
        id: 'fm_054',
        question: "Uma empresa implementou Bedrock Agent mas ele às vezes chama a ação errada. Como melhorar?",
        options: [
            "Usar modelo maior",
            "Melhorar descrições das action groups (API descriptions claras) + adicionar exemplos no prompt do Agent + refinar instruções do Agent",
            "Remover action groups",
            "Aumentar temperatura"
        ],
        correct: [1],
        explanation: "Agent decide ações baseado nas descrições. Descrições vagas = decisões erradas. Solução: API descriptions detalhadas e claras, exemplos de quando usar cada ação, instruções explícitas no Agent prompt sobre critérios de decisão.",
        topic: "agents",
        domain: "foundation-models"
    }
];

foundationModelsQuestions.push(...foundationModelsQuestions2);
