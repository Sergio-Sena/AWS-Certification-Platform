// AIF-C01 Domain 2: Fundamentals of Generative AI (47 questões - 24%)
// Tópicos: LLMs, SLMs, Transformers, Prompt Engineering, Temperatura, Tokens, Janela de contexto, Bedrock

const generativeAiQuestions = [
    {
        id: 'genai_001',
        question: "No Amazon Bedrock, qual fator define a quantidade máxima de informações que podem ser enviadas em um único prompt?",
        options: [
            "Temperatura",
            "Tamanho do lote (batch size)",
            "Janela de contexto (context window)",
            "Tamanho do modelo"
        ],
        correct: [2],
        explanation: "Janela de contexto define quantos tokens (entrada + saída) o modelo pode processar de uma vez. Tokens excedentes são truncados. Modelos maiores geralmente têm janelas maiores.",
        topic: "tokens",
        domain: "generative-ai"
    },
    {
        id: 'genai_002',
        question: "Uma empresa quer respostas factuais e consistentes de um LLM para atendimento ao cliente. Qual configuração de temperatura usar?",
        options: [
            "Temperatura alta (0.9-1.0) para criatividade",
            "Temperatura baixa (0.1-0.3) para respostas determinísticas e factuais",
            "Temperatura média (0.5) sempre",
            "Temperatura não afeta a qualidade das respostas"
        ],
        correct: [1],
        explanation: "Temperatura baixa (próxima de 0) torna o modelo mais determinístico — escolhe tokens mais prováveis. Ideal para respostas factuais. Temperatura alta aumenta aleatoriedade/criatividade.",
        topic: "parameters",
        domain: "generative-ai"
    },
    {
        id: 'genai_003',
        question: "O que são tokens no contexto dos modelos de IA generativa?",
        options: [
            "Unidades básicas de entrada/saída — representam palavras, subpalavras ou caracteres",
            "Representações matemáticas de conceitos (embeddings)",
            "Prompts específicos dados ao modelo",
            "Pesos pré-treinados do modelo"
        ],
        correct: [0],
        explanation: "Tokens são as unidades que o modelo processa. Uma palavra pode ser 1 ou mais tokens. O modelo gera resposta token por token. Custo de inferência é cobrado por token processado.",
        topic: "tokens",
        domain: "generative-ai"
    },
    {
        id: 'genai_004',
        question: "Um desenvolvedor quer que o LLM gere respostas em formato JSON específico. Qual técnica de prompt engineering é mais eficaz?",
        options: [
            "Zero-shot com instrução genérica",
            "Few-shot prompting com exemplos do formato JSON desejado",
            "Aumentar a temperatura",
            "Reduzir max tokens"
        ],
        correct: [1],
        explanation: "Few-shot prompting fornece exemplos concretos do formato esperado. O modelo aprende o padrão dos exemplos e replica. Mais eficaz que apenas descrever o formato desejado (zero-shot).",
        topic: "prompt-engineering",
        domain: "generative-ai"
    },
    {
        id: 'genai_005',
        question: "Qual é a diferença entre LLMs (Large Language Models) e SLMs (Small Language Models)?",
        options: [
            "LLMs são sempre melhores",
            "LLMs têm bilhões de parâmetros e generalizam amplamente; SLMs são menores, mais rápidos, baratos e focados em tarefas específicas",
            "SLMs são mais precisos",
            "LLMs rodam localmente, SLMs na nuvem"
        ],
        correct: [1],
        explanation: "LLMs: bilhões de parâmetros, custo alto, generalização ampla, requerem GPUs na nuvem. SLMs: menos parâmetros, mais rápidos, podem rodar local/edge, ideais para tarefas específicas com restrição de custo/latência.",
        topic: "llm-slm",
        domain: "generative-ai"
    },
    {
        id: 'genai_006',
        question: "Uma empresa precisa resolver problemas matemáticos complexos com um LLM. Qual técnica de prompt engineering melhora a precisão?",
        options: [
            "Zero-shot simples",
            "Chain-of-thought prompting (pedir raciocínio passo a passo)",
            "Reduzir a janela de contexto",
            "Usar temperatura máxima"
        ],
        correct: [1],
        explanation: "Chain-of-thought pede ao modelo que mostre o raciocínio passo a passo antes da resposta final. Melhora significativamente a precisão em problemas lógicos, matemáticos e de múltiplas etapas.",
        topic: "prompt-engineering",
        domain: "generative-ai"
    },
    {
        id: 'genai_007',
        question: "O que é o mecanismo de atenção (attention) nos Transformers?",
        options: [
            "Um filtro que remove palavras irrelevantes",
            "Mecanismo que pondera a importância de cada token em relação aos outros, capturando contexto independente da distância",
            "Um tipo de compressão de dados",
            "Um método de tokenização"
        ],
        correct: [1],
        explanation: "Atenção permite ao modelo 'olhar' para todos os tokens simultaneamente e decidir quais são mais relevantes para gerar o próximo token. Resolve o problema de 'esquecimento' das RNNs em textos longos.",
        topic: "transformers",
        domain: "generative-ai"
    },
    {
        id: 'genai_008',
        question: "Qual serviço AWS fornece acesso a múltiplos foundation models (Claude, Titan, Llama, Mistral) via API unificada?",
        options: [
            "Amazon SageMaker",
            "Amazon Bedrock",
            "Amazon Comprehend",
            "AWS Lambda"
        ],
        correct: [1],
        explanation: "Amazon Bedrock é o serviço serverless para acessar foundation models de múltiplos provedores (Anthropic, Amazon, Meta, Mistral) via API. Sem gerenciar infraestrutura. Pay-per-use.",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_009',
        question: "O que é o parâmetro Top-p (nucleus sampling) em modelos generativos?",
        options: [
            "Define o número máximo de tokens na resposta",
            "Controla a diversidade limitando o vocabulário considerado aos tokens cuja probabilidade acumulada atinge p",
            "Define o número de camadas do modelo",
            "Controla a velocidade de geração"
        ],
        correct: [1],
        explanation: "Top-p filtra tokens por probabilidade acumulada. Top-p=0.9 considera apenas tokens que somam 90% de probabilidade, ignorando tokens muito improváveis. Complementa a temperatura para controlar diversidade.",
        topic: "parameters",
        domain: "generative-ai"
    },
    {
        id: 'genai_010',
        question: "Uma empresa quer usar um LLM como assistente de código que segue padrões específicos da empresa. Qual técnica aplicar primeiro?",
        options: [
            "Treinar um modelo do zero",
            "System prompt definindo persona, regras e padrões da empresa",
            "Fine-tuning imediato",
            "Aumentar temperatura para criatividade"
        ],
        correct: [1],
        explanation: "System prompt é a primeira abordagem: define persona, regras, restrições e padrões sem custo de treinamento. Se insuficiente, escalar para RAG ou fine-tuning. Sempre começar pelo mais simples.",
        topic: "prompt-engineering",
        domain: "generative-ai"
    },
    {
        id: 'genai_011',
        question: "Como um LLM gera texto?",
        options: [
            "Pesquisa na internet em tempo real",
            "Gera token por token, calculando a cada passo qual é o próximo token mais provável",
            "Copia trechos de textos do treinamento",
            "Usa regras gramaticais programadas"
        ],
        correct: [1],
        explanation: "LLMs são modelos autoregressivos: geram um token por vez, usando todos os tokens anteriores como contexto para prever o próximo. Não pesquisam na internet — respondem com base no que aprenderam no treinamento.",
        topic: "llm-slm",
        domain: "generative-ai"
    },
    {
        id: 'genai_012',
        question: "Quando preferir um SLM (Small Language Model) ao invés de um LLM?",
        options: [
            "Sempre que possível, SLMs são melhores",
            "Quando a tarefa é específica, custo deve ser baixo, latência mínima ou dados não podem sair do ambiente local",
            "Apenas para tarefas de imagem",
            "SLMs não existem na AWS"
        ],
        correct: [1],
        explanation: "SLMs são preferíveis quando: tarefa bem delimitada, restrição de custo operacional, necessidade de latência baixa (real-time), privacidade (rodar local/edge), hardware limitado.",
        topic: "llm-slm",
        domain: "generative-ai"
    },
    {
        id: 'genai_013',
        question: "O que é 'alucinação' (hallucination) em modelos de linguagem?",
        options: [
            "Erro de programação no código do modelo",
            "Quando o modelo gera informação falsa ou inventada com tom de certeza e confiança",
            "Quando o modelo não responde",
            "Quando o modelo é muito lento"
        ],
        correct: [1],
        explanation: "Alucinação: modelo gera conteúdo factualmente incorreto mas apresentado com confiança. Ocorre porque LLMs modelam padrões de texto, não 'entendem' verdade. Mitigação: RAG, grounding, guardrails.",
        topic: "limitations",
        domain: "generative-ai"
    },
    {
        id: 'genai_014',
        question: "Qual técnica de prompt engineering NÃO fornece exemplos ao modelo?",
        options: [
            "Few-shot prompting",
            "Zero-shot prompting",
            "One-shot prompting",
            "Multi-shot prompting"
        ],
        correct: [1],
        explanation: "Zero-shot: apenas instrução, sem exemplos. O modelo usa seu conhecimento pré-treinado. Few-shot: 2+ exemplos. One-shot: 1 exemplo. Zero-shot funciona para tarefas simples e claras.",
        topic: "prompt-engineering",
        domain: "generative-ai"
    },
    {
        id: 'genai_015',
        question: "Uma empresa quer gerar textos criativos e variados para marketing. Qual configuração de parâmetros?",
        options: [
            "Temperatura 0, Top-p 0.1",
            "Temperatura 0.8-1.0, Top-p 0.9-1.0",
            "Max tokens = 10",
            "Temperatura 0.5, Top-p 0.5"
        ],
        correct: [1],
        explanation: "Para criatividade: temperatura alta (mais aleatoriedade na escolha de tokens) + Top-p alto (vocabulário mais diverso). Para factual/consistente: ambos baixos.",
        topic: "parameters",
        domain: "generative-ai"
    },
    {
        id: 'genai_016',
        question: "O que é tokenização no processamento de texto por LLMs?",
        options: [
            "Criptografia do texto",
            "Processo de quebrar texto em unidades menores (tokens) que o modelo pode processar",
            "Tradução do texto",
            "Compressão do texto"
        ],
        correct: [1],
        explanation: "Tokenização: primeira etapa do processamento. Texto é dividido em tokens (palavras, subpalavras ou caracteres). Cada token vira um número (ID) que o modelo processa. ~4 caracteres = 1 token em inglês.",
        topic: "tokens",
        domain: "generative-ai"
    },
    {
        id: 'genai_017',
        question: "Qual limitação dos LLMs é diretamente resolvida pela técnica de RAG?",
        options: [
            "Velocidade de geração",
            "Conhecimento desatualizado e falta de dados proprietários/específicos",
            "Custo de inferência",
            "Tamanho do modelo"
        ],
        correct: [1],
        explanation: "LLMs têm conhecimento limitado à data de treinamento. RAG resolve isso buscando informações atualizadas/proprietárias em tempo real e injetando no prompt. O modelo responde com contexto atualizado.",
        topic: "limitations",
        domain: "generative-ai"
    },
    {
        id: 'genai_018',
        question: "O que acontece quando o prompt + resposta excedem a janela de contexto do modelo?",
        options: [
            "O modelo automaticamente resume o conteúdo",
            "Tokens excedentes são truncados/descartados — o modelo perde parte da informação",
            "O modelo para de funcionar",
            "A janela se expande automaticamente"
        ],
        correct: [1],
        explanation: "Janela de contexto é fixa por modelo. Se excedida, tokens mais antigos são descartados (truncados). Por isso é importante: prompts concisos, chunking de documentos, e escolher modelo com janela adequada.",
        topic: "tokens",
        domain: "generative-ai"
    },
    {
        id: 'genai_019',
        question: "Qual é a principal vantagem do Amazon Bedrock sobre hospedar modelos em SageMaker?",
        options: [
            "Bedrock é sempre mais barato",
            "Bedrock é serverless — sem gerenciar infraestrutura, pay-per-token, múltiplos modelos via API unificada",
            "Bedrock tem modelos melhores",
            "SageMaker não suporta LLMs"
        ],
        correct: [1],
        explanation: "Bedrock: serverless, zero infra, pay-per-use, múltiplos provedores. SageMaker: mais controle, custom training, mas requer gerenciar endpoints/instâncias. Bedrock para consumir modelos, SageMaker para treinar/customizar.",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_020',
        question: "O que são stop sequences em modelos generativos?",
        options: [
            "Sequências que iniciam a geração",
            "Tokens ou sequências que, quando gerados, encerram a geração de texto",
            "Limites de segurança do modelo",
            "Marcadores de início de parágrafo"
        ],
        correct: [1],
        explanation: "Stop sequences são strings que sinalizam ao modelo para parar de gerar. Ex: '\\n\\n', '</response>', 'Human:'. Útil para controlar formato e evitar geração excessiva.",
        topic: "parameters",
        domain: "generative-ai"
    }
];

window.generativeAiQuestions = generativeAiQuestions;


// Generative AI - Lote 2 (questões 21-47)
const generativeAiQuestions2 = [
    {
        id: 'genai_021',
        question: "Uma empresa quer que o LLM responda APENAS sobre produtos da empresa e recuse perguntas fora do escopo. Qual abordagem?",
        options: [
            "Treinar modelo do zero apenas com dados da empresa",
            "System prompt com instruções claras de escopo + Bedrock Guardrails com denied topics",
            "Reduzir temperatura para 0",
            "Limitar max tokens"
        ],
        correct: [1],
        explanation: "System prompt define escopo ('responda apenas sobre nossos produtos'). Guardrails adicionam enforcement: denied topics bloqueiam respostas fora do escopo mesmo se o modelo tentar responder.",
        topic: "prompt-engineering",
        domain: "generative-ai"
    },
    {
        id: 'genai_022',
        question: "Qual modelo da Amazon (nativo do Bedrock) é projetado para geração de texto e embeddings?",
        options: [
            "Claude",
            "Amazon Titan",
            "Llama",
            "Mistral"
        ],
        correct: [1],
        explanation: "Amazon Titan é a família de modelos da própria Amazon no Bedrock. Inclui Titan Text (geração), Titan Embeddings (vetorização) e Titan Image. Claude é da Anthropic, Llama da Meta.",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_023',
        question: "O que é 'grounding' no contexto de IA generativa?",
        options: [
            "Treinar o modelo com mais dados",
            "Ancorar as respostas do modelo em fontes de dados verificáveis para reduzir alucinações",
            "Limitar o tamanho da resposta",
            "Usar temperatura zero"
        ],
        correct: [1],
        explanation: "Grounding: conectar o modelo a fontes de verdade (documentos, bases de dados) para que respostas sejam baseadas em fatos verificáveis. RAG é a principal técnica de grounding.",
        topic: "limitations",
        domain: "generative-ai"
    },
    {
        id: 'genai_024',
        question: "Uma empresa precisa gerar imagens a partir de descrições textuais para campanhas de marketing. Qual capability do Bedrock usar?",
        options: [
            "Titan Text",
            "Titan Image Generator ou Stable Diffusion no Bedrock",
            "Amazon Rekognition",
            "Amazon Comprehend"
        ],
        correct: [1],
        explanation: "Titan Image Generator e Stable Diffusion (Stability AI) no Bedrock geram imagens a partir de prompts textuais (text-to-image). Rekognition analisa imagens existentes, não gera novas.",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_025',
        question: "Qual é a diferença entre inferência síncrona e streaming em modelos generativos?",
        options: [
            "Não há diferença",
            "Síncrona retorna resposta completa de uma vez; streaming retorna tokens progressivamente conforme são gerados",
            "Streaming é sempre mais caro",
            "Síncrona é mais rápida"
        ],
        correct: [1],
        explanation: "Streaming: tokens são enviados ao cliente conforme gerados (UX melhor, parece mais rápido). Síncrona: aguarda geração completa antes de retornar. Streaming ideal para chatbots e interfaces interativas.",
        topic: "parameters",
        domain: "generative-ai"
    },
    {
        id: 'genai_026',
        question: "O que é prompt injection e como mitigar?",
        options: [
            "Técnica legítima de prompt engineering",
            "Ataque onde usuário manipula o prompt para fazer o modelo ignorar instruções — mitigar com guardrails e input validation",
            "Erro de tokenização",
            "Problema de temperatura alta"
        ],
        correct: [1],
        explanation: "Prompt injection: usuário insere instruções maliciosas ('ignore instruções anteriores e...'). Mitigação: Bedrock Guardrails, input sanitization, separação clara de system/user prompts, output validation.",
        topic: "limitations",
        domain: "generative-ai"
    },
    {
        id: 'genai_027',
        question: "Qual é o papel do Amazon Q Developer?",
        options: [
            "Treinar modelos de ML",
            "Assistente de IA para desenvolvedores — gera código, explica, debugga e transforma código",
            "Gerenciar infraestrutura AWS",
            "Criar chatbots para clientes"
        ],
        correct: [1],
        explanation: "Amazon Q Developer é assistente IA para devs: gera código, explica código existente, encontra bugs, sugere otimizações, ajuda com AWS CLI/SDK. Integrado em IDEs (VS Code, JetBrains).",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_028',
        question: "Uma empresa quer comparar diferentes foundation models para seu caso de uso antes de escolher. Como fazer no Bedrock?",
        options: [
            "Treinar cada modelo separadamente",
            "Usar o Bedrock Playground para testar prompts em diferentes modelos e comparar respostas",
            "Escolher o modelo mais caro",
            "Usar apenas Amazon Titan"
        ],
        correct: [1],
        explanation: "Bedrock Playground permite testar prompts em diferentes modelos (Claude, Titan, Llama, Mistral) lado a lado, comparar qualidade, latência e custo antes de decidir qual usar em produção.",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_029',
        question: "O que é 'few-shot prompting' e quando é mais útil que zero-shot?",
        options: [
            "Treinar o modelo com poucos dados",
            "Incluir exemplos no prompt para guiar o formato/estilo da resposta — útil quando zero-shot não produz output no formato desejado",
            "Usar modelo menor",
            "Reduzir tokens"
        ],
        correct: [1],
        explanation: "Few-shot: incluir 2-5 exemplos de input→output no prompt. O modelo aprende o padrão dos exemplos. Mais útil que zero-shot quando: formato específico, estilo particular, ou tarefa ambígua.",
        topic: "prompt-engineering",
        domain: "generative-ai"
    },
    {
        id: 'genai_030',
        question: "Qual é o custo principal de usar modelos no Amazon Bedrock?",
        options: [
            "Custo fixo mensal por modelo",
            "Pay-per-token: cobrado por tokens de input e output processados",
            "Custo por hora de instância",
            "Licença anual"
        ],
        correct: [1],
        explanation: "Bedrock cobra por token processado (input tokens + output tokens). Sem custo fixo, sem instâncias para gerenciar. Modelos diferentes têm preços diferentes por 1K tokens.",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_031',
        question: "O que é 'model distillation' no contexto de LLMs?",
        options: [
            "Aumentar o tamanho do modelo",
            "Treinar um modelo menor (student) para replicar o comportamento de um modelo maior (teacher)",
            "Comprimir dados de treinamento",
            "Remover camadas do modelo"
        ],
        correct: [1],
        explanation: "Distillation: modelo grande (teacher) gera outputs que são usados para treinar modelo menor (student). Resultado: SLM com performance próxima ao LLM mas muito mais barato e rápido.",
        topic: "llm-slm",
        domain: "generative-ai"
    },
    {
        id: 'genai_032',
        question: "Uma empresa quer usar IA generativa mas precisa que o modelo NÃO gere conteúdo sobre tópicos sensíveis (política, religião). Como implementar?",
        options: [
            "Treinar modelo sem esses dados",
            "Amazon Bedrock Guardrails com denied topics configurados",
            "Usar temperatura 0",
            "Filtrar output manualmente"
        ],
        correct: [1],
        explanation: "Bedrock Guardrails permite configurar 'denied topics' — tópicos que o modelo deve recusar discutir. Aplica-se tanto ao input (bloqueia perguntas) quanto ao output (bloqueia respostas).",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_033',
        question: "Qual é a diferença entre Bedrock e SageMaker JumpStart para acessar foundation models?",
        options: [
            "São a mesma coisa",
            "Bedrock é serverless (API); JumpStart requer deploy em endpoint SageMaker (mais controle, mais gerenciamento)",
            "JumpStart é mais barato",
            "Bedrock não suporta fine-tuning"
        ],
        correct: [1],
        explanation: "Bedrock: serverless, zero infra, pay-per-token. JumpStart: deploy em endpoint SageMaker (escolhe instance type, gerencia scaling). JumpStart dá mais controle mas requer mais gerenciamento.",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_034',
        question: "O que é 'temperature sampling' vs 'greedy decoding' em LLMs?",
        options: [
            "São a mesma coisa",
            "Greedy sempre escolhe o token mais provável (determinístico); temperature sampling adiciona aleatoriedade controlada",
            "Temperature sampling é mais preciso",
            "Greedy é mais criativo"
        ],
        correct: [1],
        explanation: "Greedy (temp=0): sempre escolhe token com maior probabilidade — output determinístico, repetitivo. Temperature sampling (temp>0): adiciona aleatoriedade — outputs variados e criativos.",
        topic: "parameters",
        domain: "generative-ai"
    },
    {
        id: 'genai_035',
        question: "Uma empresa quer usar IA generativa para resumir documentos longos (100+ páginas). Qual desafio principal?",
        options: [
            "Custo de armazenamento",
            "Documento excede a janela de contexto do modelo — precisa de chunking ou modelo com janela grande",
            "Modelos não conseguem resumir",
            "Precisa de GPU dedicada"
        ],
        correct: [1],
        explanation: "Documentos longos excedem a janela de contexto. Soluções: chunking (dividir e resumir partes), modelos com janela grande (Claude 200K tokens), ou map-reduce (resumir chunks e depois resumir resumos).",
        topic: "tokens",
        domain: "generative-ai"
    },
    {
        id: 'genai_036',
        question: "O que é Amazon Q Business?",
        options: [
            "Ferramenta de BI",
            "Assistente IA para empresas que responde perguntas baseado em dados internos da organização (documentos, wikis, tickets)",
            "Serviço de e-commerce",
            "Plataforma de treinamento ML"
        ],
        correct: [1],
        explanation: "Amazon Q Business: assistente IA empresarial que conecta a fontes de dados internas (S3, SharePoint, Confluence, Salesforce) e responde perguntas dos funcionários com base nesses dados. RAG gerenciado.",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_037',
        question: "Qual técnica de prompt engineering pede ao modelo que assuma um papel específico antes de responder?",
        options: [
            "Few-shot",
            "Role prompting (system prompt com persona definida)",
            "Chain-of-thought",
            "Zero-shot"
        ],
        correct: [1],
        explanation: "Role prompting: 'Você é um especialista em segurança AWS...' Define persona, expertise e tom. Melhora qualidade das respostas ao contextualizar o modelo para o domínio específico.",
        topic: "prompt-engineering",
        domain: "generative-ai"
    },
    {
        id: 'genai_038',
        question: "Quais são as principais limitações dos LLMs que devem ser consideradas ao implementar soluções?",
        options: [
            "LLMs não têm limitações",
            "Alucinações, conhecimento desatualizado, janela de contexto limitada, custo por token, e possível geração de conteúdo inadequado",
            "Apenas custo",
            "Apenas velocidade"
        ],
        correct: [1],
        explanation: "Limitações: alucinações (gera falso), cutoff de conhecimento (desatualizado), context window (não processa tudo), custo (tokens caros em escala), toxicidade/bias. Mitigações: RAG, guardrails, human-in-loop.",
        topic: "limitations",
        domain: "generative-ai"
    },
    {
        id: 'genai_039',
        question: "O que é 'Provisioned Throughput' no Amazon Bedrock?",
        options: [
            "Modo gratuito do Bedrock",
            "Capacidade reservada com throughput garantido para workloads de alto volume — preço fixo ao invés de pay-per-token",
            "Limite de requests por segundo",
            "Tipo de modelo"
        ],
        correct: [1],
        explanation: "Provisioned Throughput: reserva capacidade dedicada no Bedrock. Throughput garantido sem throttling. Mais econômico para alto volume constante vs pay-per-token para uso variável.",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_040',
        question: "Uma empresa quer implementar um chatbot que mantém contexto da conversa entre mensagens. Como implementar?",
        options: [
            "Cada mensagem é independente",
            "Incluir histórico da conversa no prompt a cada nova mensagem (conversation memory)",
            "Treinar modelo para cada usuário",
            "Usar banco de dados relacional"
        ],
        correct: [1],
        explanation: "LLMs são stateless — não lembram mensagens anteriores. Conversation memory: incluir histórico no prompt. Desafio: histórico cresce e pode exceder janela. Solução: summarizar histórico antigo.",
        topic: "prompt-engineering",
        domain: "generative-ai"
    },
    {
        id: 'genai_041',
        question: "O que é PartyRock da AWS?",
        options: [
            "Serviço de streaming de música",
            "Playground no-code para experimentar IA generativa e criar apps simples com foundation models sem programar",
            "Ferramenta de DevOps",
            "Serviço de gaming"
        ],
        correct: [1],
        explanation: "PartyRock: plataforma no-code da AWS para experimentar GenAI. Cria apps simples (chatbots, geradores de texto/imagem) arrastando componentes. Ideal para aprender e prototipar sem código.",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_042',
        question: "Qual é a relação entre embeddings e a capacidade de busca semântica?",
        options: [
            "Embeddings não são relacionados a busca",
            "Embeddings convertem texto em vetores numéricos — textos com significado similar ficam próximos no espaço vetorial, permitindo busca por similaridade",
            "Embeddings são usados apenas para imagens",
            "Busca semântica usa apenas keywords"
        ],
        correct: [1],
        explanation: "Embeddings: texto → vetor numérico que captura significado. Textos similares = vetores próximos. Busca semântica: converte query em embedding e encontra documentos com vetores mais próximos (não por keywords exatas).",
        topic: "tokens",
        domain: "generative-ai"
    },
    {
        id: 'genai_043',
        question: "Uma empresa quer que respostas do LLM citem as fontes usadas. Qual técnica permite isso?",
        options: [
            "Aumentar temperatura",
            "RAG com instrução no prompt para citar fontes dos chunks recuperados",
            "Fine-tuning",
            "Usar modelo maior"
        ],
        correct: [1],
        explanation: "RAG recupera chunks com metadados (fonte, página). Instrução no prompt: 'cite a fonte de cada informação'. O modelo inclui referências dos documentos usados na resposta. Aumenta confiabilidade.",
        topic: "prompt-engineering",
        domain: "generative-ai"
    },
    {
        id: 'genai_044',
        question: "O que é RLHF (Reinforcement Learning from Human Feedback)?",
        options: [
            "Treinamento supervisionado com dados rotulados",
            "Técnica que usa feedback humano como recompensa para alinhar o modelo com preferências humanas (útil, seguro, honesto)",
            "Aprendizado não supervisionado",
            "Fine-tuning com mais dados"
        ],
        correct: [1],
        explanation: "RLHF: humanos avaliam respostas do modelo (qual é melhor). Essas avaliações treinam um reward model. O LLM é então ajustado via reinforcement learning para maximizar o reward. Torna modelos mais alinhados.",
        topic: "llm-slm",
        domain: "generative-ai"
    },
    {
        id: 'genai_045',
        question: "Qual é a vantagem de usar múltiplos modelos no Bedrock ao invés de apenas um?",
        options: [
            "Não há vantagem",
            "Diferentes modelos são melhores para diferentes tarefas — usar o mais adequado por caso de uso otimiza custo e qualidade",
            "Múltiplos modelos são sempre mais baratos",
            "AWS exige usar múltiplos"
        ],
        correct: [1],
        explanation: "Cada modelo tem forças: Claude para raciocínio complexo, Titan para embeddings, Llama para custo-benefício, Mistral para velocidade. Escolher por caso de uso otimiza qualidade e custo.",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_046',
        question: "O que é 'model evaluation' no Amazon Bedrock?",
        options: [
            "Avaliar custo do modelo",
            "Feature que permite avaliar e comparar modelos usando métricas automáticas ou avaliação humana para escolher o melhor para seu caso",
            "Treinar o modelo",
            "Deploy do modelo"
        ],
        correct: [1],
        explanation: "Bedrock Model Evaluation: compara modelos usando métricas (accuracy, robustness, toxicity) ou avaliação humana. Ajuda a escolher o modelo ideal para o caso de uso específico com dados reais.",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_047',
        question: "Uma empresa quer reduzir custo de inferência no Bedrock mantendo qualidade aceitável. Qual estratégia?",
        options: [
            "Usar sempre o modelo mais caro",
            "Prompt caching + modelo menor para tarefas simples + modelo maior apenas para tarefas complexas (routing)",
            "Desabilitar guardrails",
            "Aumentar temperatura"
        ],
        correct: [1],
        explanation: "Estratégias de custo: prompt caching (reutilizar prefixos comuns), model routing (SLM para simples, LLM para complexo), prompts concisos (menos tokens), batch inference para não-real-time.",
        topic: "aws-bedrock",
        domain: "generative-ai"
    }
];

generativeAiQuestions.push(...generativeAiQuestions2);
