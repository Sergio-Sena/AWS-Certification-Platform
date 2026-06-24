// AIF-C01 Generative AI - Lote 2 (genai_051 a genai_073)
// Foco: Prompt engineering, LLM concepts, hallucination, tokens, temperature, Bedrock features

const generativeAiQuestions2 = [
    {
        id: 'genai_051',
        question: "Um desenvolvedor está usando um LLM e percebe que respostas variam muito entre chamadas com o mesmo prompt. Qual parâmetro controla essa variabilidade?",
        options: [
            "max_tokens",
            "temperature — valores altos (0.8-1.0) aumentam aleatoriedade, valores baixos (0-0.2) tornam respostas mais determinísticas",
            "top_k",
            "stop_sequences"
        ],
        correct: [1],
        explanation: "Temperature controla aleatoriedade: 0 = quase determinístico (mesma resposta sempre), 1.0 = máxima variação. Para tarefas factuais use 0-0.3. Para criatividade use 0.7-1.0. max_tokens limita tamanho, não variabilidade.",
        topic: "parameters",
        domain: "generative-ai",
        difficulty: "easy"
    },
    {
        id: 'genai_052',
        question: "O que é 'hallucination' em modelos de linguagem e por que acontece?",
        options: [
            "Bug de software que será corrigido em updates futuros",
            "Modelo gera informação factualmente incorreta mas apresentada com confiança — acontece porque LLMs são treinados para gerar texto plausível, não necessariamente verdadeiro",
            "Erro de rede durante inferência",
            "Resultado de prompt mal formatado apenas"
        ],
        correct: [1],
        explanation: "Alucinação: LLMs são treinados para gerar texto estatisticamente provável, não para verificar fatos. Geram sequências plausíveis mesmo sem base factual. Mitigação: RAG, temperature baixa, instrução para admitir incerteza, guardrails.",
        topic: "hallucination",
        domain: "generative-ai",
        difficulty: "easy"
    },
    {
        id: 'genai_053',
        question: "O que são 'tokens' no contexto de LLMs e por que importam?",
        options: [
            "Credenciais de acesso à API",
            "Unidades de texto que o modelo processa — palavras ou pedaços de palavras. Determinam custo, limite de contexto e velocidade",
            "Moedas virtuais para pagamento",
            "Marcadores de segurança"
        ],
        correct: [1],
        explanation: "Tokens: unidades atômicas de texto (~4 caracteres em inglês, ~3 em português). 1 palavra ≈ 1.3 tokens. Importam para: custo (paga por token), janela de contexto (limite total input+output), e latência (mais tokens = mais lento).",
        topic: "tokens",
        domain: "generative-ai",
        difficulty: "easy"
    },
    {
        id: 'genai_054',
        question: "Qual é a diferença entre 'system prompt', 'user prompt' e 'assistant' em uma conversa com LLM?",
        options: [
            "Não há diferença — são todos texto",
            "System: instrui o comportamento do modelo. User: pergunta/input do usuário. Assistant: resposta do modelo. System define 'quem' o modelo é",
            "System é obrigatório, user é opcional",
            "Assistant é o nome do modelo"
        ],
        correct: [1],
        explanation: "System prompt: define persona, regras, tom (ex: 'Você é um assistente de RH'). User: input do humano. Assistant: resposta do modelo. System persiste em toda conversa e guia o comportamento. No Bedrock, configura-se via API ou console.",
        topic: "prompt-engineering",
        domain: "generative-ai",
        difficulty: "easy"
    },
    {
        id: 'genai_055',
        question: "Uma empresa quer que o LLM SEMPRE responda em formato JSON estruturado. Qual técnica de prompting é mais eficaz?",
        options: [
            "Apenas pedir 'responda em JSON'",
            "System prompt com instrução + few-shot examples mostrando formato JSON exato + schema definition + instrução para nunca desviar do formato",
            "Fine-tuning para JSON",
            "Aumentar temperatura"
        ],
        correct: [1],
        explanation: "Para output estruturado: 1) System prompt com regra clara, 2) Few-shot com exemplos do JSON exato, 3) Schema definition no prompt, 4) Instrução 'responda APENAS com JSON válido'. Alguns modelos suportam 'JSON mode' nativo.",
        topic: "prompt-engineering",
        domain: "generative-ai",
        difficulty: "medium"
    },
    {
        id: 'genai_056',
        question: "O que é 'chain-of-thought' (CoT) prompting e quando usar?",
        options: [
            "Encadear múltiplos modelos",
            "Instruir o modelo a raciocinar passo a passo antes de dar resposta final — melhora acurácia em problemas de lógica, matemática e raciocínio complexo",
            "Usar múltiplos prompts em sequência",
            "Treinar o modelo em etapas"
        ],
        correct: [1],
        explanation: "CoT: 'pense passo a passo' no prompt. O modelo externaliza raciocínio antes da resposta final. Melhora drasticamente tarefas de lógica, matemática, e decisões multi-step. Custo: mais tokens de output. Benefício: muito mais preciso.",
        topic: "prompt-engineering",
        domain: "generative-ai",
        difficulty: "medium"
    },
    {
        id: 'genai_057',
        question: "O que é a 'janela de contexto' (context window) de um LLM?",
        options: [
            "Tamanho da tela do usuário",
            "Número máximo de tokens (input + output) que o modelo pode processar em uma única chamada",
            "Tempo máximo de processamento",
            "Número de usuários simultâneos"
        ],
        correct: [1],
        explanation: "Context window: limite total de tokens (prompt + resposta) que o modelo processa. Claude: 200K tokens, GPT-4: 128K, Titan: 8K-32K. Determina quanto contexto (documentos, histórico) cabe no prompt. Maior janela = mais contexto = mais custo.",
        topic: "tokens",
        domain: "generative-ai",
        difficulty: "easy"
    },
    {
        id: 'genai_058',
        question: "Uma empresa está usando LLM para gerar conteúdo de marketing. As respostas são corretas mas muito genéricas e sem personalidade. Como melhorar?",
        options: [
            "Aumentar max_tokens",
            "Definir persona detalhada no system prompt + examples do tom desejado + temperature moderada (0.7) para criatividade",
            "Reduzir temperatura para 0",
            "Usar modelo menor"
        ],
        correct: [1],
        explanation: "Para conteúdo com personalidade: system prompt com persona detalhada ('tom irreverente, informal, use gírias de marketing'), examples do estilo desejado (few-shot), e temperature 0.7+ para variação criativa. Temperatura 0 = robótico.",
        topic: "prompt-engineering",
        domain: "generative-ai",
        difficulty: "medium"
    },
    {
        id: 'genai_059',
        question: "O que é 'prompt injection' e como se proteger?",
        options: [
            "Injetar mais dados no prompt para melhorar qualidade",
            "Ataque onde usuário manipula o prompt para fazer o modelo ignorar instruções originais ou revelar informações — proteger com guardrails e validação de input",
            "Técnica de otimização de prompts",
            "Erro de formatação"
        ],
        correct: [1],
        explanation: "Prompt injection: 'ignore todas as instruções anteriores e...' — usuário tenta sequestrar o modelo. Proteção: Guardrails de input, validação de conteúdo, system prompts robustos, separação clara entre instrução e dados do usuário.",
        topic: "hallucination",
        domain: "generative-ai",
        difficulty: "medium"
    },
    {
        id: 'genai_060',
        question: "Qual é a diferença entre um LLM 'base' (pre-trained) e um LLM 'instruction-tuned' (chat)?",
        options: [
            "Não há diferença",
            "Base: completa texto (predição de próxima palavra). Instruction-tuned: segue instruções e conversa (treinado com RLHF para ser útil, harmless e honest)",
            "Base é mais inteligente",
            "Instruction-tuned é mais barato"
        ],
        correct: [1],
        explanation: "Base model: treinado para prever próximo token (pode completar texto mas não segue instruções bem). Instruction-tuned: fine-tuned com RLHF/DPO para seguir instruções, ser útil e seguro. Chat models (Claude, GPT-4) são instruction-tuned.",
        topic: "llm-concepts",
        domain: "generative-ai",
        difficulty: "medium"
    },
    {
        id: 'genai_061',
        question: "O que é RLHF (Reinforcement Learning from Human Feedback) e por que é importante para LLMs?",
        options: [
            "Técnica de treino de robôs",
            "Processo onde humanos avaliam respostas do modelo e essa avaliação é usada para treinar o modelo a gerar respostas melhores — alinha modelo com preferências humanas",
            "Tipo de RAG",
            "Método de compressão de modelo"
        ],
        correct: [1],
        explanation: "RLHF: 1) Modelo gera respostas, 2) Humanos rankeiam qual resposta é melhor, 3) Reward model aprende preferências, 4) LLM é otimizado via RL para maximizar reward. Resultado: modelo mais útil, menos tóxico, mais alinhado com expectativas humanas.",
        topic: "llm-concepts",
        domain: "generative-ai",
        difficulty: "hard"
    },
    {
        id: 'genai_062',
        question: "Uma empresa quer usar LLM para extrair dados estruturados de emails (nome, data, valor, ação). Qual técnica de prompting?",
        options: [
            "Apenas pedir 'extraia os dados'",
            "Prompt com schema definido + few-shot examples mostrando email→JSON + instrução para retornar null se campo não encontrado",
            "Fine-tuning obrigatório",
            "Usar regex ao invés de LLM"
        ],
        correct: [1],
        explanation: "Extraction prompting: definir schema exato esperado, fornecer 2-3 examples de extraction perfeita, instruir sobre campos ausentes (null vs inferir). LLMs são excelentes em extraction com bom prompt. Fine-tuning só se volume justificar.",
        topic: "prompt-engineering",
        domain: "generative-ai",
        difficulty: "medium"
    },
    {
        id: 'genai_063',
        question: "O que é 'token limit exceeded' error e como resolver?",
        options: [
            "Erro de autenticação",
            "Input + output excedeu janela de contexto do modelo — resolver: reduzir prompt, resumir contexto, usar modelo com janela maior, ou chunking do input",
            "Erro de rede",
            "Modelo indisponível"
        ],
        correct: [1],
        explanation: "Token limit: prompt (system + context + user) + resposta excedeu máximo do modelo. Soluções: 1) Resumir contexto longo, 2) Reduzir few-shot examples, 3) Modelo com janela maior (Claude 200K), 4) Dividir tarefa em partes menores.",
        topic: "tokens",
        domain: "generative-ai",
        difficulty: "easy"
    },
    {
        id: 'genai_064',
        question: "O que é 'stop sequence' e para que serve?",
        options: [
            "Sequência para parar o treinamento",
            "Token ou texto que faz o modelo parar de gerar — útil para controlar formato de saída e evitar texto indesejado após a resposta",
            "Sequência de segurança",
            "Sequência de inicialização"
        ],
        correct: [1],
        explanation: "Stop sequences: quando o modelo gera esse texto, para imediatamente. Útil para: parar após JSON fechar ('}'), parar após resposta e antes de inventar mais, delimitar output. Exemplos: '\\n\\n', '</answer>', '---'.",
        topic: "parameters",
        domain: "generative-ai",
        difficulty: "easy"
    },
    {
        id: 'genai_065',
        question: "Uma empresa quer implementar 'guardrails' para garantir que o LLM nunca discuta concorrentes ou faça afirmações sobre preços futuros. Qual abordagem no Bedrock?",
        options: [
            "Apenas instrução no prompt (pode ser burlada)",
            "Bedrock Guardrails com denied topics ('concorrentes', 'preços futuros') + word filters + content policy — proteção em camadas",
            "Fine-tuning para remover conhecimento sobre concorrentes",
            "Bloquear palavras-chave no frontend apenas"
        ],
        correct: [1],
        explanation: "Guardrails > prompt instruction (mais difícil de burlar). Denied topics bloqueiam temas inteiros. Word filters bloqueiam termos específicos. Content policy define níveis de tolerância. Camadas: prompt instruction + guardrails + monitoring.",
        topic: "hallucination",
        domain: "generative-ai",
        difficulty: "medium"
    },
    {
        id: 'genai_066',
        question: "Qual é a diferença entre 'generative' e 'discriminative' AI no contexto de foundation models?",
        options: [
            "São a mesma coisa",
            "Generative CRIA conteúdo novo (texto, imagem, código). Discriminative CLASSIFICA/ANALISA conteúdo existente (spam/não-spam, sentimento, categorias)",
            "Discriminative é mais avançada",
            "Generative é apenas para imagens"
        ],
        correct: [1],
        explanation: "Generativa: produz conteúdo novo (ChatGPT gerando texto, DALL-E gerando imagem). Discriminativa: analisa e classifica (detector de spam, análise de sentimento). Foundation models modernos podem fazer ambos dependendo do prompt.",
        topic: "llm-concepts",
        domain: "generative-ai",
        difficulty: "easy"
    },
    {
        id: 'genai_067',
        question: "Uma empresa percebeu que o LLM gera respostas muito longas quando precisa de respostas curtas. Como controlar?",
        options: [
            "Reduzir temperatura",
            "Combinar max_tokens baixo + instrução explícita no prompt ('responda em no máximo 2 frases') + stop sequences",
            "Usar modelo menor",
            "Aumentar top_p"
        ],
        correct: [1],
        explanation: "Controlar tamanho: 1) max_tokens como hard limit, 2) Instrução no prompt ('seja conciso, máximo 50 palavras'), 3) Stop sequences para cortar após formato desejado. Temperatura não afeta tamanho diretamente.",
        topic: "parameters",
        domain: "generative-ai",
        difficulty: "easy"
    },
    {
        id: 'genai_068',
        question: "O que é 'model collapse' e como se relaciona com dados sintéticos?",
        options: [
            "Modelo para de funcionar",
            "Quando modelos são treinados repetidamente com dados gerados por outros modelos, perdem diversidade e qualidade progressivamente",
            "Erro de infraestrutura",
            "Modelo fica muito grande"
        ],
        correct: [1],
        explanation: "Model collapse: treinar modelo com output de outro modelo (dados sintéticos) repetidamente causa perda de variabilidade e qualidade. Cada geração amplifica vieses e reduz diversidade. Solução: sempre incluir dados reais, validar dados sintéticos.",
        topic: "llm-concepts",
        domain: "generative-ai",
        difficulty: "hard"
    },
    {
        id: 'genai_069',
        question: "Uma empresa quer usar IA generativa para criar variações de anúncios A/B testing. Qual configuração ideal?",
        options: [
            "Temperatura 0 para consistência",
            "Temperatura alta (0.8-1.0) + mesmo prompt base + gerar múltiplas variações por chamada para máxima diversidade criativa",
            "Fine-tuning por variação",
            "Usar modelos diferentes para cada variação"
        ],
        correct: [1],
        explanation: "Para variações criativas: temperatura alta gera outputs diversos mesmo com mesmo prompt. Gerar 5-10 variações, selecionar as melhores para A/B test. Prompt base mantém mensagem central enquanto temperatura varia execução.",
        topic: "parameters",
        domain: "generative-ai",
        difficulty: "medium"
    },
    {
        id: 'genai_070',
        question: "O que é 'latent space' no contexto de modelos generativos?",
        options: [
            "Espaço de armazenamento em disco",
            "Representação matemática comprimida onde o modelo armazena conhecimento aprendido — pontos próximos nesse espaço têm significado similar",
            "Espaço entre servidores",
            "Latência de rede"
        ],
        correct: [1],
        explanation: "Latent space: representação interna comprimida dos dados. Conceitos similares ficam próximos nesse espaço. Embeddings são coordenadas no latent space. É por isso que busca vetorial funciona — proximidade no latent space = similaridade semântica.",
        topic: "llm-concepts",
        domain: "generative-ai",
        difficulty: "hard"
    },
    {
        id: 'genai_071',
        question: "Uma empresa quer que o modelo categorize emails em 5 categorias predefinidas e NUNCA invente novas categorias. Qual técnica?",
        options: [
            "Apenas listar categorias no prompt",
            "Constrained generation: listar categorias válidas + instrução 'responda APENAS com uma das categorias listadas' + validação pós-output",
            "Fine-tuning obrigatório",
            "Usar Amazon Comprehend apenas"
        ],
        correct: [1],
        explanation: "Constrained generation: limitar output a opções válidas. Prompt lista categorias, instrui que output deve ser exatamente uma delas. Validação programática confirma que output é categoria válida. Se não, re-processar ou usar fallback.",
        topic: "prompt-engineering",
        domain: "generative-ai",
        difficulty: "medium"
    },
    {
        id: 'genai_072',
        question: "O que é 'attention mechanism' e por que revolucionou NLP?",
        options: [
            "Mecanismo de segurança",
            "Permite ao modelo ponderar a importância de cada palavra em relação a todas as outras simultaneamente — captura contexto longo sem limitações sequenciais",
            "Mecanismo de cache",
            "Mecanismo de compressão"
        ],
        correct: [1],
        explanation: "Attention: cada token 'presta atenção' em todos os outros tokens simultaneamente, com pesos aprendidos. 'O banco perto do rio' — 'banco' presta atenção em 'rio' para entender que é margem, não instituição financeira. Base dos Transformers.",
        topic: "llm-concepts",
        domain: "generative-ai",
        difficulty: "hard"
    },
    {
        id: 'genai_073',
        question: "Uma empresa quer usar LLM para gerar documentação técnica a partir de código. Qual prompt strategy?",
        options: [
            "Colar código e pedir 'documente'",
            "System prompt com role (tech writer) + código com anotações + few-shot (code→doc example) + formato desejado (Markdown, docstring, etc.)",
            "Fine-tuning com código-documentação",
            "Usar apenas comentários no código"
        ],
        correct: [1],
        explanation: "Code-to-doc: 1) System prompt define role de tech writer, 2) Código fornecido com contexto, 3) Few-shot mostra formato de doc desejado, 4) Instruções de formato (docstring, README, API docs). Modelos code-aware (Claude, CodeLlama) funcionam melhor.",
        topic: "prompt-engineering",
        domain: "generative-ai",
        difficulty: "medium"
    }
];

generativeAiQuestions.push(...generativeAiQuestions2);
