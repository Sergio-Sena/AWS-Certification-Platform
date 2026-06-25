// AIF-C01 Foundation Models - Lote 4 (fm_061 a fm_080)
// Foco: RAG avançado, Bedrock features, model selection, evaluation, casos de uso empresariais

const foundationModelsQuestions4 = [
    {
        id: 'fm_061',
        question: "Uma fintech quer usar IA generativa para responder perguntas de clientes sobre seus investimentos. Os dados mudam a cada minuto (preços de ações). Fine-tuning não é viável pela frequência de atualização. Qual arquitetura?",
        options: [
            "Bedrock Agent com action group que chama API de mercado em tempo real + Knowledge Base para FAQ estático",
            "Fine-tuning a cada hora com dados atualizados para garantir conformidade com os requisitos",
            "Modelo treinado com dados históricos apenas",
            "RAG com documentos atualizados diariamente"
        ],
        correct: [0],
        explanation: "✅ Dados em tempo real (minuto a minuto) exigem API call, não RAG (docs estáticos). Agent combina: action group para dados live (preços via API) + KB para perguntas estáticas (FAQ, regras). Fine-tuning não funciona para dados que mudam a cada minuto.",
        topic: "agents",
        domain: "foundation-models",
        difficulty: "hard"
    },
    {
        id: 'fm_062',
        question: "Uma empresa está escolhendo entre Claude, Llama e Titan no Bedrock para geração de texto. Qual critério NÃO é relevante para a escolha?",
        options: [
            "Tamanho da janela de contexto",
            "Custo por token de input/output",
            "A linguagem de programação usada no backend",
            "Qualidade do output para o caso de uso específico"
        ],
        correct: [2],
        explanation: "✅ A linguagem do backend é irrelevante — Bedrock é acessado via API (qualquer linguagem funciona). Critérios relevantes: janela de contexto (quanto texto cabe), custo por token, qualidade para o caso de uso, latência, e compliance.",
        topic: "model-selection",
        domain: "foundation-models",
        difficulty: "easy"
    },
    {
        id: 'fm_063',
        question: "Uma empresa quer avaliar a qualidade das respostas do seu sistema RAG antes de colocar em produção. Quais métricas usar?",
        options: [
            "Apenas latência e throughput",
            "Apenas satisfação subjetiva do usuário na arquitetura proposta para o ambiente",
            "Apenas número de tokens gerados",
            "Faithfulness (fidelidade ao contexto), relevance (relevância dos chunks), answer correctness, e hallucination rate",
        ],
        correct: [3],
        explanation: "✅ Métricas RAG: Faithfulness (resposta baseada no contexto?), Relevance (chunks recuperados são relevantes?), Correctness (resposta factualmente correta?), Hallucination rate (% de informação inventada). Framework RAGAS automatiza essas avaliações.",
        topic: "evaluation",
        domain: "foundation-models",
        difficulty: "medium"
    },
    {
        id: 'fm_064',
        question: "Uma empresa implementou RAG mas os usuários reclamam que as respostas são genéricas e não usam os documentos internos. Qual é a causa mais provável?",
        options: [
            "Modelo muito grande",
            "Embeddings de baixa qualidade ou chunks mal dimensionados — o retrieval não está trazendo documentos relevantes",
            "Temperatura muito baixa",
            "Janela de contexto muito grande em cenários empresariais de produção real"
        ],
        correct: [1],
        explanation: "✅ Se respostas são genéricas, o retrieval falhou (chunks irrelevantes foram recuperados ou nenhum foi encontrado). Causas: embedding model inadequado, chunks muito grandes (perdem especificidade), ou query não gera embedding que 'casa' com os docs.",
        topic: "rag",
        domain: "foundation-models",
        difficulty: "medium"
    },
    {
        id: 'fm_065',
        question: "Qual é a diferença entre 'zero-shot', 'one-shot' e 'few-shot' prompting no contexto de foundation models?",
        options: [
            "Zero-shot: sem exemplos. One-shot: 1 exemplo. Few-shot: vários exemplos no prompt para guiar o formato/comportamento",
            "Referem-se ao número de modelos usados seguindo o framework de implementação padrão",
            "Referem-se ao número de tentativas",
            "Referem-se ao tamanho do modelo"
        ],
        correct: [0],
        explanation: "✅ Zero-shot: apenas instrução, sem exemplos (depende do conhecimento do modelo). One-shot: 1 exemplo de input→output. Few-shot: 3-5 exemplos que mostram o padrão desejado. Mais exemplos = melhor aderência ao formato mas consome mais tokens.",
        topic: "fine-tuning",
        domain: "foundation-models",
        difficulty: "easy"
    },
    {
        id: 'fm_066',
        question: "Uma empresa quer usar Bedrock para gerar código, mas precisa garantir que o código gerado não contenha vulnerabilidades de segurança. Qual abordagem?",
        options: [
            "Confiar no modelo — LLMs não geram código inseguro como solução adequada ao problema descrito",
            "Usar apenas modelos pequenos",
            "Guardrails para filtrar padrões perigosos + revisão automática com Amazon CodeGuru/ferramentas SAST + testes automatizados",
            "Desabilitar geração de código"
        ],
        correct: [2],
        explanation: "✅ LLMs podem gerar código com vulnerabilidades. Defesa em camadas: Guardrails filtram padrões perigosos conhecidos, SAST tools (CodeGuru) escaneiam output, testes automatizados validam comportamento. Nunca confiar cegamente em código gerado por IA.",
        topic: "agents",
        domain: "foundation-models",
        difficulty: "medium"
    },
    {
        id: 'fm_067',
        question: "Uma empresa quer comparar a performance de 3 modelos diferentes no Bedrock para seu caso de uso. Qual feature usar?",
        options: [
            "Testar manualmente cada modelo",
            "Usar sempre o modelo mais recente",
            "Escolher o mais caro (melhor qualidade) atendendo aos critérios de avaliação definidos",
            "Bedrock Model Evaluation — permite avaliar modelos automaticamente com métricas como accuracy, toxicity, robustness",
        ],
        correct: [3],
        explanation: "✅ Bedrock Model Evaluation: avalia modelos com datasets customizados ou benchmarks. Métricas: accuracy, toxicity, robustness, latência. Permite comparação lado a lado. Dados de avaliação podem ser específicos do caso de uso da empresa.",
        topic: "evaluation",
        domain: "foundation-models",
        difficulty: "easy"
    },
    {
        id: 'fm_068',
        question: "Uma empresa quer que o modelo responda 'Não sei' quando não tem informação suficiente ao invés de inventar. Qual combinação de técnicas?",
        options: [
            "Aumentar temperatura para mais criatividade no contexto operacional da organização",
            "Prompt com instrução explícita + temperatura baixa (0.1-0.3) + Guardrail de contextual grounding",
            "Usar modelo menor",
            "Remover contexto do prompt"
        ],
        correct: [1],
        explanation: "✅ Reduzir alucinação: 1) Instrução 'se não sabe, diga que não sabe', 2) Temperatura baixa (menos criatividade/invenção), 3) Contextual grounding guardrail detecta quando resposta não está ancorada no contexto fornecido.",
        topic: "agents",
        domain: "foundation-models",
        difficulty: "medium"
    },
    {
        id: 'fm_069',
        question: "Uma empresa tem documentos em 5 idiomas e quer implementar RAG multilíngue. Qual consideração é mais importante?",
        options: [
            "Usar modelo de embedding multilíngue (ex: Titan Embeddings v2) que representa todos os idiomas no mesmo espaço vetorial",
            "Traduzir tudo para inglês",
            "Criar um vector store separado por idioma para assegurar resultados consistentes e confiáveis",
            "Usar apenas documentos em inglês"
        ],
        correct: [0],
        explanation: "✅ Embedding multilíngue coloca todos os idiomas no mesmo espaço vetorial. Query em português encontra documento relevante em inglês (e vice-versa). Titan Embeddings v2 e Cohere Multilingual suportam isso. Evita duplicação de infraestrutura por idioma.",
        topic: "embeddings",
        domain: "foundation-models",
        difficulty: "medium"
    },
    {
        id: 'fm_070',
        question: "O que é 'model distillation' e quando é útil?",
        options: [
            "Comprimir dados de treinamento para este tipo de cenário e workload específico",
            "Remover camadas do modelo",
            "Treinar modelo menor (student) para replicar comportamento de modelo maior (teacher) — reduz custo de inferência mantendo qualidade aceitável",
            "Dividir modelo em partes"
        ],
        correct: [2],
        explanation: "✅ Distillation: modelo grande (teacher) gera outputs para dataset. Modelo menor (student) é treinado para replicar esses outputs. Resultado: modelo menor, mais rápido e barato que produz respostas similares ao grande. Ideal para produção com alto volume.",
        topic: "fine-tuning",
        domain: "foundation-models",
        difficulty: "hard"
    },
    {
        id: 'fm_071',
        question: "Uma empresa quer implementar um chatbot que mantém contexto de conversas longas (histórico de 50+ mensagens). Qual desafio principal?",
        options: [
            "Custo de armazenamento conforme recomendado pela documentação técnica",
            "Segurança dos dados",
            "Velocidade de resposta",
            "Limite da janela de contexto — histórico completo pode exceder o máximo de tokens do modelo",
        ],
        correct: [3],
        explanation: "✅ Janela de contexto tem limite (4K-200K tokens dependendo do modelo). Soluções: summarization do histórico antigo, sliding window (últimas N mensagens), ou RAG sobre histórico (busca mensagens relevantes ao invés de enviar todas).",
        topic: "rag",
        domain: "foundation-models",
        difficulty: "medium"
    },
    {
        id: 'fm_072',
        question: "Uma empresa quer usar IA generativa para criar imagens de produtos para e-commerce. Qual modelo no Bedrock?",
        options: [
            "Claude (texto apenas) considerando o contexto descrito na questão",
            "Amazon Titan Image Generator ou Stability AI SDXL no Bedrock",
            "Amazon Comprehend",
            "Amazon Rekognition"
        ],
        correct: [1],
        explanation: "✅ Titan Image Generator e Stability AI (SDXL) são modelos de geração de imagem disponíveis no Bedrock. Claude gera texto. Comprehend analisa texto. Rekognition analisa imagens (não gera).",
        topic: "model-selection",
        domain: "foundation-models",
        difficulty: "easy"
    },
    {
        id: 'fm_073',
        question: "Uma empresa configurou Bedrock Knowledge Base mas as respostas incluem informações de documentos desatualizados que já foram removidos do S3. O que aconteceu?",
        options: [
            "Os embeddings dos documentos removidos ainda estão no vector store — precisa re-sincronizar (re-ingest) a Knowledge Base",
            "Bug do Bedrock",
            "Modelo memorizou os documentos de acordo com as melhores práticas do setor",
            "Cache do CloudFront"
        ],
        correct: [0],
        explanation: "✅ Remover documento do S3 não remove automaticamente seus embeddings do vector store. Precisa executar sync/re-ingest na Knowledge Base para que reflita o estado atual do S3. Embeddings órfãos continuam sendo encontrados na busca.",
        topic: "rag",
        domain: "foundation-models",
        difficulty: "medium"
    },
    {
        id: 'fm_074',
        question: "Qual é a diferença entre 'temperature' e 'top_p' como parâmetros de inferência?",
        options: [
            "São a mesma coisa",
            "Temperature é para imagens, top_p para texto dentro do escopo de aplicação apresentado",
            "Temperature controla aleatoriedade geral. Top_p (nucleus sampling) limita o pool de tokens considerados — ambos afetam criatividade mas de formas diferentes",
            "Top_p é sempre melhor"
        ],
        correct: [2],
        explanation: "✅ Temperature: escala as probabilidades (alta = mais aleatório). Top_p: considera apenas tokens cujas probabilidades somam p% (0.9 = top 90% de probabilidade). Geralmente ajusta-se um e mantém outro no default. Ambos reduzem determinismo.",
        topic: "model-selection",
        domain: "foundation-models",
        difficulty: "medium"
    },
    {
        id: 'fm_075',
        question: "Uma empresa quer usar Bedrock para processar documentos confidenciais (dados de saúde). Qual garantia de privacidade o Bedrock oferece?",
        options: [
            "Nenhuma — dados são usados para treinar modelos segundo as diretrizes oficiais e compliance",
            "Apenas modelos Titan são seguros",
            "Dados são compartilhados entre clientes",
            "Dados de input/output NÃO são usados para treinar modelos base. Dados criptografados em trânsito e repouso. Podem ficar em região específica",
        ],
        correct: [3],
        explanation: "✅ Bedrock: dados do cliente NÃO treinam modelos base (isolamento). Criptografia em trânsito (TLS) e repouso (KMS). VPC endpoints para tráfego privado. Logs no CloudTrail. Compliance: HIPAA eligible, SOC, ISO. Dados não saem da região escolhida.",
        topic: "model-selection",
        domain: "foundation-models",
        difficulty: "easy"
    },
    {
        id: 'fm_076',
        question: "Uma empresa quer criar um pipeline que: recebe email → classifica urgência → extrai informações-chave → gera resposta sugerida. Qual arquitetura?",
        options: [
            "Um único prompt gigante",
            "Chain de prompts: prompt 1 (classifica urgência) → prompt 2 (extrai entidades) → prompt 3 (gera resposta baseada na classificação e entidades)",
            "Fine-tuning para cada etapa como abordagem principal neste caso de uso",
            "Apenas Amazon Comprehend"
        ],
        correct: [1],
        explanation: "✅ Prompt chaining: quebra tarefa complexa em etapas menores e sequenciais. Cada prompt é especializado. Output de um alimenta o próximo. Mais controlável, debugável e preciso que um prompt único tentando fazer tudo. Step Functions pode orquestrar.",
        topic: "agents",
        domain: "foundation-models",
        difficulty: "medium"
    },
    {
        id: 'fm_077',
        question: "O que é 'inference profile' no Bedrock e para que serve?",
        options: [
            "Configuração que define parâmetros de inferência (modelo, região, throughput) para gerenciar roteamento e custos de forma centralizada",
            "Perfil de usuário IAM para garantir conformidade com os requisitos",
            "Perfil de treinamento",
            "Dashboard de métricas"
        ],
        correct: [0],
        explanation: "✅ Inference profiles permitem configurar e gerenciar como requests são roteados entre modelos e regiões. Facilita cross-region inference (se uma região está lotada, roteia para outra), gerenciamento de custos e throughput centralizado.",
        topic: "model-selection",
        domain: "foundation-models",
        difficulty: "hard"
    },
    {
        id: 'fm_078',
        question: "Uma empresa quer implementar 'conversational memory' para seu chatbot no Bedrock. Como manter contexto entre sessões?",
        options: [
            "O modelo lembra automaticamente entre sessões na arquitetura proposta para o ambiente",
            "Aumentar janela de contexto infinitamente",
            "Armazenar histórico de conversas em DynamoDB e injetar resumo/últimas mensagens no prompt de cada nova sessão",
            "Fine-tuning com conversas passadas"
        ],
        correct: [2],
        explanation: "✅ LLMs são stateless — não lembram entre requests. Solução: armazenar conversas em DB, carregar contexto relevante a cada nova sessão. Técnicas: últimas N mensagens, resumo do histórico, ou RAG sobre conversas passadas.",
        topic: "rag",
        domain: "foundation-models",
        difficulty: "medium"
    },
    {
        id: 'fm_079',
        question: "Uma empresa quer usar IA generativa mas tem restrição de latência (resposta < 2 segundos). Qual estratégia?",
        options: [
            "Usar sempre o maior modelo disponível em cenários empresariais de produção real",
            "Cache de todas as respostas possíveis",
            "Aumentar timeout",
            "Modelo menor/mais rápido + streaming de resposta + provisioned throughput no Bedrock para latência previsível",
        ],
        correct: [3],
        explanation: "✅ Para baixa latência: modelo menor (menos tokens para processar), streaming (usuário vê resposta sendo gerada), provisioned throughput (capacidade dedicada, sem queue). Trade-off: modelo menor pode ter qualidade inferior.",
        topic: "model-selection",
        domain: "foundation-models",
        difficulty: "medium"
    },
    {
        id: 'fm_080',
        question: "O que é 'Bedrock Marketplace' e qual seu benefício?",
        options: [
            "Loja de aplicações",
            "Acesso a modelos de terceiros (Meta Llama, Anthropic Claude, Cohere, Mistral, etc.) via API unificada sem gerenciar infraestrutura",
            "Marketplace de dados seguindo o framework de implementação padrão",
            "Loja de prompts"
        ],
        correct: [1],
        explanation: "✅ Bedrock oferece múltiplos modelos de diferentes providers via mesma API. Benefício: trocar de modelo = mudar 1 parâmetro (model_id). Sem gerenciar GPUs, endpoints, ou contratos separados com cada provider. Pay-per-use.",
        topic: "model-selection",
        domain: "foundation-models",
        difficulty: "easy"
    }
];

foundationModelsQuestions.push(...foundationModelsQuestions4);
