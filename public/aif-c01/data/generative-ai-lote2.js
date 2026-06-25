// AIF-C01 Generative AI - Lote 2 (genai_021 a genai_030)
// REESCRITO: Distratores equilibrados + Formato ✅❌📌 + Bias corrigido

const generativeAiLote2 = [
    {
        id: 'genai_021',
        question: "Uma empresa quer que o LLM responda APENAS sobre produtos da empresa e recuse perguntas fora do escopo. Qual abordagem?",
        options: [
            "Treinar um modelo completamente do zero usando exclusivamente dados internos da empresa como corpus de treinamento completo",
            "Reduzir temperatura para zero absoluto de modo que o modelo nunca gere conteúdo fora do que foi estritamente treinado",
            "System prompt com instruções de escopo + Bedrock Guardrails com denied topics para enforcement",
            "Limitar max tokens para respostas curtas que naturalmente impedem o modelo de abordar tópicos fora do escopo"
        ],
        correct: [2],
        explanation: "✅ System prompt (instrução) + Guardrails (enforcement): dupla camada. Prompt guia, guardrails bloqueiam.\n❌ Treinar do zero: caro, desnecessário — prompt + guardrails resolve.\n❌ Temp 0: torna determinístico mas NÃO impede resposta fora do escopo.\n❌ Max tokens curto: limita tamanho, não escopo temático.\n📌 Controle de escopo = System Prompt + Guardrails (denied topics).",
        topic: "prompt-engineering",
        domain: "generative-ai"
    },
    {
        id: 'genai_022',
        question: "Qual modelo da Amazon (nativo do Bedrock) é projetado para geração de texto e embeddings?",
        options: [
            "Claude da Anthropic com capacidades avançadas de raciocínio e seguimento de instruções complexas em múltiplos idiomas",
            "Llama da Meta com arquitetura open-source disponível para fine-tuning e deploy customizado em infraestrutura própria",
            "Amazon Titan — família de modelos da própria Amazon incluindo Text, Embeddings e Image",
            "Mistral AI com modelos eficientes de tamanho reduzido otimizados para baixa latência em tarefas de código e texto"
        ],
        correct: [2],
        explanation: "✅ Titan: família Amazon. Titan Text (geração), Titan Embeddings (vetorização), Titan Image (imagens).\n❌ Claude: Anthropic (não Amazon).\n❌ Llama: Meta (não Amazon).\n❌ Mistral: Mistral AI (não Amazon).\n📌 Modelos AMAZON no Bedrock = Titan. Os outros são de parceiros terceiros.",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_023',
        question: "O que é 'grounding' no contexto de IA generativa?",
        options: [
            "Ancorar respostas do modelo em fontes verificáveis para reduzir alucinações e aumentar factualidade",
            "Treinar o modelo com volume maior de dados para expandir seu conhecimento base e reduzir lacunas de informação",
            "Limitar o tamanho máximo da resposta gerada para evitar divagações longas e manter respostas concisas e focadas",
            "Usar temperatura zero para garantir que o modelo sempre escolha o token mais provável eliminando variação na saída"
        ],
        correct: [0],
        explanation: "✅ Grounding: conectar modelo a fontes de verdade (documentos, DBs) para respostas baseadas em fatos. RAG é técnica principal.\n❌ Mais dados de treino: melhora conhecimento geral, mas não garante factualidade em tempo real.\n❌ Limitar tamanho: controla verbosidade, não factualidade.\n❌ Temp zero: determinístico, mas pode alucinar de forma consistente.\n📌 Grounding = ancorar em FATOS. Principal técnica: RAG (Retrieval Augmented Generation).",
        topic: "limitations",
        domain: "generative-ai"
    },
    {
        id: 'genai_024',
        question: "Uma empresa precisa gerar imagens a partir de descrições textuais para campanhas de marketing. Qual capability do Bedrock usar?",
        options: [
            "Titan Text com prompt engineering avançado para descrever imagens textualmente em formato detalhado e estruturado",
            "Amazon Rekognition com análise e classificação de imagens existentes usando modelos de computer vision pré-treinados",
            "Amazon Comprehend com extração de entidades visuais e conceitos a partir de descrições textuais fornecidas pelo usuário",
            "Titan Image Generator ou Stable Diffusion no Bedrock — modelos de geração text-to-image"
        ],
        correct: [3],
        explanation: "✅ Titan Image + Stable Diffusion: text-to-image no Bedrock. Geram imagens novas a partir de prompts.\n❌ Titan Text: gera TEXTO, não imagens.\n❌ Rekognition: ANALISA imagens existentes (classificação, detecção), não gera novas.\n❌ Comprehend: analisa TEXTO (NLP), não tem relação com geração de imagens.\n📌 Gerar imagem = Titan Image / Stable Diffusion. Analisar imagem = Rekognition.",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_025',
        question: "Qual é a diferença entre inferência síncrona e streaming em modelos generativos?",
        options: [
            "Não há diferença técnica significativa entre os dois modos pois ambos retornam exatamente o mesmo resultado final ao cliente",
            "Streaming é sempre mais caro por token pois requer conexão WebSocket persistente e infraestrutura dedicada de transmissão",
            "Síncrona retorna resposta completa de uma vez; streaming envia tokens progressivamente conforme gerados",
            "Síncrona é significativamente mais rápida em tempo total pois processa todos os tokens em paralelo internamente"
        ],
        correct: [2],
        explanation: "✅ Streaming: tokens enviados conforme gerados (UX melhor, parece mais rápido). Síncrona: espera tudo.\n❌ Há diferença de UX significativa (tempo até primeiro token).\n❌ Mesmo custo por token — diferença é apenas no delivery.\n❌ Mesma velocidade total de geração — streaming só mostra parcial antes.\n📌 Streaming = melhor UX para chatbots. Síncrona = melhor para APIs batch.",
        topic: "parameters",
        domain: "generative-ai"
    },
    {
        id: 'genai_026',
        question: "O que é prompt injection e como mitigar?",
        options: [
            "Técnica legítima e recomendada de prompt engineering para melhorar qualidade das respostas em aplicações de produção",
            "Erro de tokenização que ocorre quando o input contém caracteres especiais não suportados pelo vocabulário do modelo",
            "Problema de temperatura alta que faz o modelo gerar respostas aleatórias e incoerentes com baixa relevância para o tema",
            "Ataque onde usuário manipula prompt para burlar instruções — mitigar com guardrails e input validation"
        ],
        correct: [3],
        explanation: "✅ Prompt injection: 'ignore instruções anteriores e faça X'. Mitigação: Guardrails, sanitização, separação system/user.\n❌ Não é técnica legítima — é ATAQUE/vulnerabilidade.\n❌ Não é erro de tokenização — é manipulação intencional do prompt.\n❌ Não é problema de temperatura — é exploração de vulnerabilidade.\n📌 Prompt injection = ataque. Defesas: Guardrails + input filtering + output validation.",
        topic: "limitations",
        domain: "generative-ai"
    },
    {
        id: 'genai_027',
        question: "Qual é o papel do Amazon Q Developer?",
        options: [
            "Treinar modelos customizados de ML usando dados proprietários da empresa em infraestrutura SageMaker gerenciada automaticamente",
            "Gerenciar infraestrutura AWS criando e configurando recursos como VPCs, EC2 e bancos de dados via interface conversacional",
            "Assistente IA para desenvolvedores — gera código, explica, debugga e transforma código em IDEs",
            "Criar chatbots conversacionais voltados para atendimento ao cliente final com integração a sistemas de CRM"
        ],
        correct: [2],
        explanation: "✅ Q Developer: assistente de código em IDEs. Gera, explica, debugga, refactora, sugere otimizações.\n❌ Treinar modelos = SageMaker.\n❌ Gerenciar infra = Q Business ou console/CLI (Q Developer foca em CÓDIGO).\n❌ Chatbots para clientes = Amazon Lex ou Q Business.\n📌 Q Developer = para DEVS (código). Q Business = para EMPRESAS (dados internos).",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_028',
        question: "Uma empresa quer comparar diferentes foundation models para seu caso de uso antes de escolher. Como fazer no Bedrock?",
        options: [
            "Treinar cada modelo separadamente com dados internos para avaliar qual aprende melhor os padrões específicos do negócio",
            "Usar o Bedrock Playground para testar prompts em diferentes modelos e comparar respostas lado a lado",
            "Escolher automaticamente o modelo mais caro disponível pois preço maior sempre indica qualidade superior de resposta",
            "Usar exclusivamente Amazon Titan pois é o único modelo otimizado nativamente para funcionar dentro do ecossistema Bedrock"
        ],
        correct: [1],
        explanation: "✅ Playground: testa prompts em múltiplos modelos, compara qualidade/latência/custo sem código.\n❌ Treinar cada um é caro e desnecessário para comparação inicial.\n❌ Mais caro ≠ melhor para seu caso específico.\n❌ Bedrock suporta múltiplos provedores — Titan não é o único.\n📌 Bedrock Playground = experimentar antes de decidir. Model Evaluation = métricas formais.",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_029',
        question: "O que é 'few-shot prompting' e quando é mais útil que zero-shot?",
        options: [
            "Treinar o modelo com poucos dados rotulados em processo de fine-tuning rápido para adaptar pesos a tarefa específica",
            "Usar modelo menor (few parameters) que processa mais rápido e custa menos para tarefas simples de classificação",
            "Reduzir quantidade de tokens no prompt ao mínimo absoluto para economizar custos de inferência em produção",
            "Incluir exemplos no prompt para guiar formato/estilo — útil quando zero-shot não produz output adequado"
        ],
        correct: [3],
        explanation: "✅ Few-shot: 2-5 exemplos de input→output no prompt. Modelo aprende padrão e replica.\n❌ Não é fine-tuning — exemplos vão no PROMPT, não ajustam pesos.\n❌ Não é sobre tamanho do modelo — é sobre exemplos no prompt.\n❌ Few-shot AUMENTA tokens (exemplos ocupam espaço), não reduz.\n📌 Zero-shot falha no formato? → Adicione exemplos (few-shot). Ainda falha? → RAG ou fine-tuning.",
        topic: "prompt-engineering",
        domain: "generative-ai"
    },
    {
        id: 'genai_030',
        question: "Qual é o custo principal de usar modelos no Amazon Bedrock?",
        options: [
            "Pay-per-token: cobrado por tokens de input e output processados em cada chamada à API",
            "Custo fixo mensal por modelo habilitado na conta independentemente de quantas requisições são feitas no período",
            "Custo por hora de instância GPU reservada que fica alocada permanentemente para servir o modelo escolhido",
            "Licença anual por modelo com compromisso mínimo de 12 meses e pagamento antecipado obrigatório"
        ],
        correct: [0],
        explanation: "✅ Pay-per-token: input tokens + output tokens. Sem custo fixo, sem instâncias. Serverless.\n❌ Sem custo fixo mensal — paga APENAS pelo uso.\n❌ Sem instâncias para gerenciar — Bedrock é serverless.\n❌ Sem licença anual — on-demand por padrão (Provisioned Throughput é opcional).\n📌 Bedrock On-Demand = pay-per-token. Provisioned = capacidade reservada para alto volume.",
        topic: "aws-bedrock",
        domain: "generative-ai"
    }
];

generativeAiQuestions.push(...generativeAiLote2);
