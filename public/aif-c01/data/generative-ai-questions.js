// AIF-C01 Domain 2: Fundamentals of Generative AI (50 questões - 24%)
// REESCRITO: Distratores equilibrados + Formato ✅❌📌 + Bias corrigido

const generativeAiQuestions = [
    {
        id: 'genai_001',
        question: "No Amazon Bedrock, qual fator define a quantidade máxima de informações que podem ser enviadas em um único prompt?",
        options: [
            "Temperatura do modelo que controla aleatoriedade e diversidade na geração de cada token de saída",
            "Tamanho do lote (batch size) que define quantas requisições são processadas simultaneamente no endpoint",
            "Janela de contexto (context window) — limite de tokens de entrada + saída por chamada",
            "Tamanho total de parâmetros do modelo medido em bilhões que determina sua capacidade de representação"
        ],
        correct: [2],
        explanation: "✅ Context window: limite de tokens (input + output) por chamada. Ex: Claude 200K tokens, Titan 8K.\n❌ Temperatura: controla criatividade/aleatoriedade, não limite de tamanho.\n❌ Batch size: quantos requests paralelos, não tamanho de cada um.\n❌ Parâmetros: capacidade do modelo, não limite de input.\n📌 Context window = quanto cabe no prompt. Tokens excedentes são truncados.",
        topic: "tokens",
        domain: "generative-ai"
    },
    {
        id: 'genai_002',
        question: "Uma empresa quer respostas factuais e consistentes de um LLM para atendimento ao cliente. Qual configuração de temperatura usar?",
        options: [
            "Temperatura alta (0.9-1.0) para gerar respostas mais criativas e variadas em cada interação com o cliente",
            "Temperatura baixa (0.1-0.3) para respostas determinísticas e factuais com mínima variação",
            "Temperatura média (0.5) como padrão universal que equilibra todas as necessidades de qualquer aplicação",
            "Temperatura não afeta a qualidade das respostas pois o modelo sempre gera o mesmo output independente do valor"
        ],
        correct: [1],
        explanation: "✅ Temp baixa (~0): escolhe tokens mais prováveis → respostas consistentes e factuais.\n❌ Temp alta: mais aleatoriedade → criatividade, mas respostas inconsistentes.\n❌ 0.5 não é universal — depende do caso de uso.\n❌ Temperatura afeta MUITO o output (mais variação com temp alta).\n📌 Factual/consistente = temp BAIXA. Criativo/variado = temp ALTA.",
        topic: "parameters",
        domain: "generative-ai"
    },
    {
        id: 'genai_003',
        question: "O que são tokens no contexto dos modelos de IA generativa?",
        options: [
            "Unidades de entrada/saída — palavras, subpalavras ou caracteres que o modelo processa",
            "Representações matemáticas de conceitos abstratos armazenadas como vetores multidimensionais no espaço latente (embeddings)",
            "Instruções específicas fornecidas pelo usuário no system prompt para guiar comportamento do modelo em cada sessão",
            "Pesos numéricos pré-treinados armazenados nas camadas do modelo que codificam conhecimento aprendido durante treinamento"
        ],
        correct: [0],
        explanation: "✅ Tokens: unidades que o modelo processa. ~4 chars em inglês = 1 token. Modelo gera token por token.\n❌ Embeddings: vetores que REPRESENTAM tokens, mas não são os tokens em si.\n❌ Prompts: instruções do usuário, compostas POR tokens.\n❌ Pesos: parâmetros internos do modelo, não unidades de processamento.\n📌 Token = unidade de texto. Custo de Bedrock = tokens de input + output.",
        topic: "tokens",
        domain: "generative-ai"
    },
    {
        id: 'genai_004',
        question: "Um desenvolvedor quer que o LLM gere respostas em formato JSON específico. Qual técnica de prompt engineering é mais eficaz?",
        options: [
            "Zero-shot com instrução genérica pedindo que o modelo tente formatar a saída como JSON sem referência de estrutura",
            "Aumentar a temperatura para 1.0 de modo que o modelo explore mais opções criativas de formatação da resposta",
            "Reduzir max tokens para forçar respostas curtas que naturalmente se aproximem de estruturas JSON compactas",
            "Few-shot prompting com exemplos concretos do formato JSON desejado incluídos no prompt"
        ],
        correct: [3],
        explanation: "✅ Few-shot: exemplos concretos de input→output JSON. Modelo aprende o padrão e replica.\n❌ Zero-shot: funciona para formatos simples, mas menos confiável para JSON complexo.\n❌ Temperatura alta: mais aleatoriedade, possivelmente PIOR formatação.\n❌ Reduzir tokens: trunca resposta, não melhora formato.\n📌 Formato específico = Few-shot (mostre exemplos). Tarefa simples = Zero-shot (só instrua).",
        topic: "prompt-engineering",
        domain: "generative-ai"
    },
    {
        id: 'genai_005',
        question: "Qual é a diferença entre LLMs (Large Language Models) e SLMs (Small Language Models)?",
        options: [
            "LLMs são sempre superiores em todas as tarefas independente de custo, latência ou requisitos de infraestrutura disponível",
            "LLMs rodam exclusivamente em dispositivos locais enquanto SLMs requerem obrigatoriamente infraestrutura de nuvem pesada",
            "SLMs são universalmente mais precisos que LLMs porque modelos menores generalizam melhor por ter menos parâmetros redundantes",
            "LLMs têm bilhões de parâmetros e generalizam; SLMs são menores, mais rápidos e baratos para tarefas específicas"
        ],
        correct: [3],
        explanation: "✅ LLMs: bilhões de params, custo alto, generalização ampla. SLMs: menos params, mais rápidos, baratos, podem rodar local.\n❌ LLMs não são SEMPRE melhores — SLMs podem ser superiores em tarefas específicas com fine-tuning.\n❌ Invertido: LLMs precisam de nuvem/GPUs, SLMs podem rodar local/edge.\n❌ Menor nem sempre = mais preciso. Depende da tarefa e fine-tuning.\n📌 LLM = generalista caro. SLM = especialista barato. Escolha pelo caso de uso.",
        topic: "llm-slm",
        domain: "generative-ai"
    },
    {
        id: 'genai_006',
        question: "Uma empresa precisa resolver problemas matemáticos complexos com um LLM. Qual técnica de prompt engineering melhora a precisão?",
        options: [
            "Chain-of-thought prompting — pedir raciocínio passo a passo antes da resposta final",
            "Zero-shot simples com instrução direta pedindo apenas o resultado numérico sem mostrar desenvolvimento intermediário",
            "Reduzir a janela de contexto para forçar o modelo a focar apenas nos dados numéricos essenciais do problema",
            "Usar temperatura máxima (1.0) para que o modelo explore múltiplas abordagens criativas de resolução simultaneamente"
        ],
        correct: [0],
        explanation: "✅ Chain-of-thought: 'mostre o raciocínio passo a passo'. Melhora significativamente em problemas lógicos/matemáticos.\n❌ Zero-shot sem raciocínio: modelo pode pular passos e errar.\n❌ Reduzir contexto: menos espaço para raciocinar, piora resultado.\n❌ Temperatura alta: adiciona aleatoriedade, piora precisão matemática.\n📌 Problema complexo = Chain-of-thought. Formato = Few-shot. Persona = Role prompting.",
        topic: "prompt-engineering",
        domain: "generative-ai"
    },
    {
        id: 'genai_007',
        question: "O que é o mecanismo de atenção (attention) nos Transformers?",
        options: [
            "Um filtro determinístico que remove palavras irrelevantes e stopwords do texto antes do processamento pelo modelo",
            "Um tipo de compressão lossless de dados que reduz o tamanho do input antes de passar pelas camadas de processamento",
            "Um método de tokenização adaptativa que divide o texto em unidades de tamanho variável conforme complexidade semântica",
            "Mecanismo que pondera importância de cada token em relação aos outros, capturando contexto independente da distância"
        ],
        correct: [3],
        explanation: "✅ Attention: cada token 'olha' todos os outros com pesos de relevância. Captura dependências longas em paralelo.\n❌ Não remove palavras — pondera TODAS com pesos diferentes.\n❌ Não é compressão — é cálculo de relevância entre tokens.\n❌ Não é tokenização — é processamento APÓS tokenização.\n📌 Attention = 'quais palavras são importantes para entender ESTA palavra?'",
        topic: "transformers",
        domain: "generative-ai"
    },
    {
        id: 'genai_008',
        question: "Qual serviço AWS fornece acesso a múltiplos foundation models (Claude, Titan, Llama, Mistral) via API unificada?",
        options: [
            "Amazon SageMaker com deploy de modelos em endpoints gerenciados que requerem configuração de instâncias e auto-scaling",
            "Amazon Bedrock — serverless, múltiplos provedores via API unificada, pay-per-token",
            "Amazon Comprehend com modelos pré-treinados de NLP para análise de sentimento, entidades e tópicos em texto",
            "AWS Lambda com layers customizadas contendo modelos de ML empacotados para execução serverless event-driven"
        ],
        correct: [1],
        explanation: "✅ Bedrock: serverless, zero infra, múltiplos FMs (Anthropic, Amazon, Meta, Mistral), pay-per-token.\n❌ SageMaker: requer deploy/gerenciamento de endpoints, mais controle mas mais complexo.\n❌ Comprehend: NLP específico (sentimento, entidades), não acesso a FMs genéricos.\n❌ Lambda: compute serverless, não plataforma de FMs.\n📌 Acessar FMs prontos = Bedrock. Treinar/customizar modelos = SageMaker.",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_009',
        question: "O que é o parâmetro Top-p (nucleus sampling) em modelos generativos?",
        options: [
            "Define o número máximo de tokens que o modelo pode gerar na resposta antes de encerrar automaticamente a geração",
            "Define o número de camadas do modelo que são ativadas durante inferência para controlar profundidade do processamento",
            "Controla a velocidade de geração limitando o throughput de tokens por segundo para otimizar uso de recursos",
            "Controla diversidade limitando vocabulário aos tokens cuja probabilidade acumulada atinge p"
        ],
        correct: [3],
        explanation: "✅ Top-p=0.9: considera apenas tokens que somam 90% de probabilidade, ignora muito improváveis.\n❌ Número máximo de tokens = max_tokens (parâmetro separado).\n❌ Camadas ativas = não é configurável pelo usuário em inferência.\n❌ Velocidade de geração = throughput, controlado por infra, não por Top-p.\n📌 Top-p + Temperatura = controle de diversidade. Ambos baixos = determinístico.",
        topic: "parameters",
        domain: "generative-ai"
    },
    {
        id: 'genai_010',
        question: "Uma empresa quer usar um LLM como assistente de código que segue padrões específicos da empresa. Qual técnica aplicar primeiro?",
        options: [
            "Treinar um modelo completamente do zero usando apenas o codebase interno da empresa como dataset de treinamento",
            "Fine-tuning imediato com milhares de exemplos de código da empresa para adaptar os pesos do modelo base",
            "System prompt definindo persona, regras e padrões de código da empresa como contexto inicial",
            "Aumentar temperatura para máxima criatividade de modo que o modelo explore soluções diversificadas de implementação"
        ],
        correct: [2],
        explanation: "✅ System prompt: define regras/padrões sem custo de treinamento. Primeiro passo, mais simples.\n❌ Treinar do zero: caro demais, desnecessário quando FMs existem.\n❌ Fine-tuning: funciona mas é caro e complexo — tentar prompt engineering antes.\n❌ Temperatura alta: variação indesejada em padrões de código.\n📌 Escala de customização: System Prompt → Few-shot → RAG → Fine-tuning → Treinar do zero.",
        topic: "prompt-engineering",
        domain: "generative-ai"
    }
];

window.generativeAiQuestions = generativeAiQuestions;


// Generative AI - Lote 2 (questões 11-20)
const generativeAiQuestions2 = [
    {
        id: 'genai_011',
        question: "Como um LLM gera texto?",
        options: [
            "Pesquisa na internet em tempo real para encontrar trechos relevantes e compilar uma resposta baseada em múltiplas fontes web",
            "Copia trechos exatos de textos memorizados durante o treinamento e os concatena para formar respostas coerentes ao usuário",
            "Gera token por token, calculando a cada passo qual próximo token é mais provável dado o contexto anterior",
            "Usa regras gramaticais programadas manualmente por linguistas para construir frases sintaticamente corretas em qualquer idioma"
        ],
        correct: [2],
        explanation: "✅ Autoregressivo: gera um token por vez usando todos os anteriores como contexto para prever o próximo.\n❌ Não pesquisa internet — responde com base no treinamento.\n❌ Não copia trechos — gera probabilisticamente (pode parecer cópia, mas é geração).\n❌ Não usa regras programadas — aprende padrões estatísticos.\n📌 LLM = modelo AUTOREGRESSIVO. Gera token por token. Não 'entende' — calcula probabilidades.",
        topic: "llm-slm",
        domain: "generative-ai"
    },
    {
        id: 'genai_012',
        question: "Quando preferir um SLM (Small Language Model) ao invés de um LLM?",
        options: [
            "Sempre que possível pois SLMs são universalmente superiores em qualidade de resposta para qualquer tipo de tarefa",
            "Apenas para tarefas de processamento de imagem pois SLMs são especializados exclusivamente em visão computacional",
            "SLMs não existem na AWS e não são suportados por nenhum serviço gerenciado de machine learning atualmente",
            "Tarefa específica, custo deve ser baixo, latência mínima ou dados não podem sair do ambiente local"
        ],
        correct: [3],
        explanation: "✅ SLMs: tarefa delimitada, restrição de custo/latência, privacidade (rodar local), hardware limitado (edge).\n❌ SLMs NÃO são universalmente melhores — perdem para LLMs em tarefas complexas/gerais.\n❌ SLMs processam TEXTO, não são específicos para imagem.\n❌ AWS suporta SLMs via Bedrock (Mistral 7B) e SageMaker.\n📌 LLM = generalista potente. SLM = especialista eficiente. Escolha por REQUISITO.",
        topic: "llm-slm",
        domain: "generative-ai"
    },
    {
        id: 'genai_013',
        question: "O que é 'alucinação' (hallucination) em modelos de linguagem?",
        options: [
            "Erro de programação no código-fonte do modelo causado por bugs na implementação das camadas de atenção durante desenvolvimento",
            "Quando o modelo não responde por timeout ou limitação de recursos computacionais disponíveis no endpoint de inferência",
            "Quando o modelo gera informação falsa ou inventada apresentada com tom de certeza e confiança",
            "Quando o modelo processa a requisição muito lentamente por sobrecarga no servidor de inferência em horário de pico"
        ],
        correct: [2],
        explanation: "✅ Alucinação: conteúdo factualmente incorreto mas apresentado com confiança. LLMs modelam PADRÕES de texto, não 'verdade'.\n❌ Não é bug de código — é comportamento inerente ao modelo probabilístico.\n❌ Timeout ≠ alucinação (é problema de infra).\n❌ Lentidão ≠ alucinação (é problema de performance).\n📌 Mitigar alucinações: RAG (grounding), guardrails, human-in-loop, temperatura baixa.",
        topic: "limitations",
        domain: "generative-ai"
    },
    {
        id: 'genai_014',
        question: "Qual técnica de prompt engineering NÃO fornece exemplos ao modelo?",
        options: [
            "Few-shot prompting que inclui 2-5 exemplos de input e output esperado para guiar o modelo no padrão desejado",
            "Zero-shot prompting — apenas instrução direta sem nenhum exemplo de referência",
            "One-shot prompting que fornece exatamente um exemplo completo de input e output para demonstrar o formato desejado",
            "Multi-shot prompting que inclui múltiplos exemplos variados cobrindo diferentes cenários e edge cases relevantes"
        ],
        correct: [1],
        explanation: "✅ Zero-shot: apenas instrução, zero exemplos. Modelo usa conhecimento pré-treinado.\n❌ Few-shot: 2+ exemplos.\n❌ One-shot: 1 exemplo.\n❌ Multi-shot: muitos exemplos.\n📌 Zero = 0 exemplos. One = 1. Few = 2-5. O nome diz quantos SHOTS (exemplos).",
        topic: "prompt-engineering",
        domain: "generative-ai"
    },
    {
        id: 'genai_015',
        question: "Uma empresa quer gerar textos criativos e variados para marketing. Qual configuração de parâmetros?",
        options: [
            "Temperatura 0 com Top-p 0.1 para máxima consistência e repetibilidade entre diferentes gerações de conteúdo",
            "Max tokens = 10 para forçar respostas extremamente curtas e concisas que vão direto ao ponto sem elaboração",
            "Temperatura 0.8-1.0 com Top-p 0.9-1.0 para máxima criatividade e diversidade de vocabulário",
            "Temperatura 0.5 com Top-p 0.5 como configuração padrão balanceada que serve para todos os casos de uso"
        ],
        correct: [2],
        explanation: "✅ Temp alta + Top-p alto: mais aleatoriedade + vocabulário diverso = criatividade.\n❌ Temp 0 + Top-p baixo: determinístico, respostas sempre iguais — oposto de criativo.\n❌ Max tokens baixo: limita tamanho, não melhora criatividade.\n❌ 0.5/0.5: meio-termo que não maximiza criatividade.\n📌 Criativo = temp ALTA + top-p ALTO. Factual = temp BAIXA + top-p BAIXO.",
        topic: "parameters",
        domain: "generative-ai"
    },
    {
        id: 'genai_016',
        question: "O que é tokenização no processamento de texto por LLMs?",
        options: [
            "Processo de criptografia end-to-end do texto para proteger dados sensíveis durante transmissão entre cliente e modelo",
            "Processo de quebrar texto em unidades menores (tokens) que o modelo pode processar numericamente",
            "Tradução automática do texto de entrada para inglês antes do processamento pois modelos só operam neste idioma",
            "Compressão lossless do texto para reduzir uso de banda e latência na comunicação com o endpoint de inferência"
        ],
        correct: [1],
        explanation: "✅ Tokenização: texto → tokens (subpalavras) → IDs numéricos. Primeira etapa do pipeline.\n❌ Não é criptografia — é processamento de linguagem.\n❌ Não é tradução — modelos processam múltiplos idiomas diretamente.\n❌ Não é compressão — é representação para processamento neural.\n📌 ~4 chars inglês = 1 token. Idiomas não-latinos = mais tokens por palavra.",
        topic: "tokens",
        domain: "generative-ai"
    },
    {
        id: 'genai_017',
        question: "Qual limitação dos LLMs é diretamente resolvida pela técnica de RAG?",
        options: [
            "Velocidade de geração de tokens que é limitada pelo hardware disponível e capacidade de processamento paralelo do acelerador",
            "Custo de inferência por token que acumula significativamente em aplicações de alto volume com muitos usuários simultâneos",
            "Tamanho total do modelo em parâmetros que impacta requisitos de memória GPU e custo de hospedagem do endpoint",
            "Conhecimento desatualizado e falta de acesso a dados proprietários/específicos da empresa"
        ],
        correct: [3],
        explanation: "✅ RAG resolve: conhecimento limitado ao cutoff de treinamento + falta de dados internos. Busca info atualizada e injeta no prompt.\n❌ Velocidade = problema de infra/hardware, não resolvido por RAG.\n❌ Custo = otimizado por caching/routing, RAG pode até AUMENTAR custo (mais tokens).\n❌ Tamanho do modelo = questão de arquitetura, RAG não reduz.\n📌 RAG = buscar + injetar contexto. Resolve: desatualização + dados proprietários + alucinação.",
        topic: "limitations",
        domain: "generative-ai"
    },
    {
        id: 'genai_018',
        question: "O que acontece quando o prompt + resposta excedem a janela de contexto do modelo?",
        options: [
            "O modelo automaticamente resume e compacta o conteúdo anterior para liberar espaço mantendo informação essencial",
            "Tokens excedentes são truncados/descartados — o modelo perde parte da informação de contexto",
            "O modelo para de funcionar completamente e retorna erro 500 exigindo que o usuário reenvie com prompt menor",
            "A janela se expande automaticamente e dinamicamente para acomodar todo o conteúdo sem perda de informação"
        ],
        correct: [1],
        explanation: "✅ Janela é FIXA. Tokens antigos são descartados silenciosamente. Modelo perde contexto.\n❌ Não resume automaticamente — simplesmente trunca.\n❌ Não para necessariamente (depende da implementação — pode truncar silenciosamente).\n❌ Não expande — é limite arquitetural fixo do modelo.\n📌 Solução: prompts concisos, chunking de documentos, modelo com janela maior.",
        topic: "tokens",
        domain: "generative-ai"
    },
    {
        id: 'genai_019',
        question: "Qual é a principal vantagem do Amazon Bedrock sobre hospedar modelos em SageMaker?",
        options: [
            "Bedrock é sempre significativamente mais barato que SageMaker independente do volume de requests ou padrão de uso",
            "Bedrock possui modelos exclusivos que são objetivamente superiores em qualidade a todos os modelos disponíveis no SageMaker",
            "Bedrock é serverless — sem gerenciar infra, pay-per-token, múltiplos modelos via API unificada",
            "SageMaker não suporta LLMs e é limitado exclusivamente a modelos de ML tradicional como XGBoost e regressão"
        ],
        correct: [2],
        explanation: "✅ Bedrock: serverless, zero infra, pay-per-use, múltiplos provedores numa API.\n❌ Nem sempre mais barato — alto volume constante pode ser mais barato com SageMaker endpoints.\n❌ Mesmos modelos disponíveis em ambos (JumpStart tem Claude, Llama etc).\n❌ SageMaker suporta LLMs via JumpStart e custom endpoints.\n📌 Bedrock = consumir FMs facilmente. SageMaker = controle total + treinar custom.",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_020',
        question: "O que são stop sequences em modelos generativos?",
        options: [
            "Sequências especiais que iniciam e configuram o processo de geração definindo parâmetros iniciais do modelo",
            "Limites de segurança implementados pelo provedor que impedem geração de conteúdo tóxico ou perigoso automaticamente",
            "Marcadores estruturais de início de parágrafo que organizam a saída em blocos formatados para melhor legibilidade",
            "Tokens ou strings que, quando gerados pelo modelo, encerram imediatamente a geração de texto"
        ],
        correct: [3],
        explanation: "✅ Stop sequences: strings que sinalizam PARAR de gerar. Ex: '\\n\\n', '</response>', 'Human:'.\n❌ Não iniciam geração — ENCERRAM.\n❌ Limites de segurança = guardrails (conceito diferente).\n❌ Não são marcadores de formatação — são sinais de PARADA.\n📌 Stop sequences controlam ONDE o modelo para. Útil para evitar geração excessiva.",
        topic: "parameters",
        domain: "generative-ai"
    }
];

generativeAiQuestions.push(...generativeAiQuestions2);
