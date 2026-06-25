// AIF-C01 Generative AI - Lote 3 (genai_031 a genai_050)
// REESCRITO: Distratores equilibrados + Formato ✅❌📌 + Bias corrigido

const generativeAiLote3 = [
    {
        id: 'genai_031',
        question: "O que é 'model distillation' no contexto de LLMs?",
        options: [
            "Aumentar o tamanho do modelo adicionando mais camadas e parâmetros para melhorar capacidade de representação e generalização",
            "Comprimir dados de treinamento removendo duplicatas e exemplos redundantes para acelerar o processo de treinamento",
            "Treinar modelo menor (student) para replicar comportamento de modelo maior (teacher) com custo reduzido",
            "Remover camadas intermediárias do modelo mantendo apenas entrada e saída para simplificar arquitetura de inferência"
        ],
        correct: [2],
        explanation: "✅ Distillation: teacher (grande) gera outputs → student (pequeno) treina com esses outputs. Resultado: SLM com performance próxima ao LLM.\n❌ Não é aumentar o modelo — é REDUZIR mantendo qualidade.\n❌ Não é comprimir dados — é transferir CONHECIMENTO entre modelos.\n❌ Não é remover camadas — é treinar modelo novo menor.\n📌 Distillation = LLM ensina SLM. Resultado: modelo barato e rápido com boa qualidade.",
        topic: "llm-slm",
        domain: "generative-ai"
    },
    {
        id: 'genai_032',
        question: "Uma empresa quer usar IA generativa mas precisa que o modelo NÃO gere conteúdo sobre tópicos sensíveis (política, religião). Como implementar?",
        options: [
            "Treinar modelo do zero sem incluir nenhum dado sobre política ou religião no corpus de treinamento utilizado",
            "Amazon Bedrock Guardrails com denied topics configurados para bloquear input e output sobre esses temas",
            "Usar temperatura zero para garantir que o modelo nunca explore tópicos fora do seu domínio principal de conhecimento",
            "Filtrar output manualmente com equipe humana revisando cada resposta antes de entregar ao usuário final"
        ],
        correct: [1],
        explanation: "✅ Guardrails denied topics: configura tópicos proibidos. Bloqueia perguntas E respostas sobre eles automaticamente.\n❌ Treinar sem dados: caro e não garante que modelo não aborde (pode inferir de contexto).\n❌ Temp zero: determinístico, mas NÃO impede resposta sobre temas sensíveis.\n❌ Filtro manual: não escala, caro, lento.\n📌 Bedrock Guardrails: denied topics + content filters + PII filters. Automático e escalável.",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_033',
        question: "Qual é a diferença entre Bedrock e SageMaker JumpStart para acessar foundation models?",
        options: [
            "São exatamente o mesmo serviço com nomes diferentes oferecidos em regiões AWS distintas para redundância geográfica",
            "JumpStart é sempre mais barato por usar instâncias spot que reduzem custos de inferência em até 90% automaticamente",
            "Bedrock é serverless (API, pay-per-token); JumpStart requer deploy em endpoint SageMaker (mais controle, mais gestão)",
            "Bedrock não suporta fine-tuning de modelos enquanto JumpStart permite customização completa de todos os parâmetros"
        ],
        correct: [2],
        explanation: "✅ Bedrock: serverless, zero infra, pay-per-token. JumpStart: deploy em endpoint (escolhe instance type, gerencia scaling).\n❌ São serviços DIFERENTES com modelos de operação distintos.\n❌ Custo depende do uso — não é sempre mais barato em nenhum.\n❌ Bedrock SUPORTA fine-tuning (Custom Models).\n📌 Bedrock = simplicidade (serverless). JumpStart = controle (infraestrutura gerenciada por você).",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_034',
        question: "O que é 'temperature sampling' vs 'greedy decoding' em LLMs?",
        options: [
            "São algoritmos idênticos com implementações diferentes que produzem exatamente os mesmos resultados em todas as situações",
            "Temperature sampling é sempre mais preciso e factual pois explora múltiplas hipóteses antes de escolher a melhor resposta",
            "Greedy é mais criativo por sempre explorar caminhos menos prováveis que levam a respostas mais originais e surpreendentes",
            "Greedy sempre escolhe token mais provável (determinístico); temperature sampling adiciona aleatoriedade controlada"
        ],
        correct: [3],
        explanation: "✅ Greedy (temp=0): sempre max probabilidade → determinístico, repetitivo. Temperature: aleatoriedade controlada → variado.\n❌ Produzem resultados DIFERENTES — greedy é determinístico.\n❌ Temperature sampling é mais CRIATIVO, não mais preciso.\n❌ Greedy é o OPOSTO de criativo — sempre repete o mesmo output.\n📌 Greedy = sempre igual, factual. Temperature > 0 = variado, criativo.",
        topic: "parameters",
        domain: "generative-ai"
    },
    {
        id: 'genai_035',
        question: "Uma empresa quer usar IA generativa para resumir documentos longos (100+ páginas). Qual desafio principal?",
        options: [
            "Custo de armazenamento dos documentos em S3 que aumenta significativamente com volumes maiores de texto processado",
            "Modelos generativos não possuem capacidade técnica de resumir texto pois são projetados apenas para gerar conteúdo novo",
            "Necessidade obrigatória de GPU dedicada exclusiva que deve permanecer alocada durante todo o processamento do documento",
            "Documento excede janela de contexto — precisa de chunking, modelo com janela grande, ou map-reduce"
        ],
        correct: [3],
        explanation: "✅ Docs longos > context window. Soluções: chunking (dividir), modelo com janela grande (Claude 200K), map-reduce (resumir partes → resumir resumos).\n❌ Custo S3 é negligível para texto.\n❌ LLMs resumem MUITO BEM — é um dos principais use cases.\n❌ GPU dedicada não é necessária em Bedrock (serverless).\n📌 Doc longo = problema de CONTEXT WINDOW. Soluções: chunk + summarize ou modelo grande.",
        topic: "tokens",
        domain: "generative-ai"
    },
    {
        id: 'genai_036',
        question: "O que é Amazon Q Business?",
        options: [
            "Assistente IA empresarial que responde perguntas baseado em dados internos (docs, wikis, tickets)",
            "Ferramenta de Business Intelligence para criação de dashboards e visualizações interativas de dados em tempo real",
            "Serviço de e-commerce gerenciado para criar lojas online com catálogo de produtos e processamento de pagamentos",
            "Plataforma de treinamento de ML que automatiza todo o pipeline desde coleta de dados até deploy em produção"
        ],
        correct: [0],
        explanation: "✅ Q Business: assistente IA conectado a fontes internas (S3, SharePoint, Confluence, Salesforce). RAG gerenciado para empresas.\n❌ BI/dashboards = Amazon QuickSight.\n❌ E-commerce = não é serviço AWS nesse sentido.\n❌ Pipeline ML = SageMaker.\n📌 Q Business = RAG empresarial (dados internos). Q Developer = código. Bedrock = API de FMs.",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_037',
        question: "Qual técnica de prompt engineering pede ao modelo que assuma um papel específico antes de responder?",
        options: [
            "Few-shot prompting que fornece exemplos concretos de input e output para demonstrar o padrão desejado de resposta",
            "Chain-of-thought que instrui o modelo a mostrar seu raciocínio passo a passo antes de apresentar a conclusão final",
            "Zero-shot que fornece apenas a pergunta direta sem contexto adicional ou exemplos de referência para o modelo seguir",
            "Role prompting — system prompt definindo persona, expertise e tom de comunicação do modelo"
        ],
        correct: [3],
        explanation: "✅ Role prompting: 'Você é um especialista em X...'. Define persona e domínio. Melhora qualidade contextual.\n❌ Few-shot: exemplos de formato, não definição de persona.\n❌ Chain-of-thought: raciocínio passo a passo, não persona.\n❌ Zero-shot: instrução direta sem contexto de papel.\n📌 Role = QUEM o modelo é. Few-shot = COMO responder. CoT = MOSTRE o raciocínio.",
        topic: "prompt-engineering",
        domain: "generative-ai"
    },
    {
        id: 'genai_038',
        question: "Quais são as principais limitações dos LLMs que devem ser consideradas ao implementar soluções?",
        options: [
            "LLMs modernos não possuem limitações significativas desde que configurados corretamente com parâmetros adequados de inferência",
            "Apenas custo operacional é preocupação relevante pois qualidade e segurança são garantidas pela arquitetura Transformer",
            "Apenas velocidade de geração é limitação real pois a qualidade das respostas é sempre perfeita e factualmente correta",
            "Alucinações, conhecimento desatualizado, context window limitada, custo por token, e possível conteúdo inadequado"
        ],
        correct: [3],
        explanation: "✅ Limitações reais: alucinação, cutoff de conhecimento, janela limitada, custo em escala, toxicidade/bias.\n❌ TODOS os LLMs têm limitações significativas.\n❌ Custo é UMA das preocupações, não a única.\n❌ Qualidade NÃO é sempre perfeita — alucinações são frequentes.\n📌 Mitigações: RAG (atualização), Guardrails (segurança), chunking (janela), routing (custo).",
        topic: "limitations",
        domain: "generative-ai"
    },
    {
        id: 'genai_039',
        question: "O que é 'Provisioned Throughput' no Amazon Bedrock?",
        options: [
            "Modo gratuito do Bedrock disponível para novas contas AWS durante os primeiros 12 meses com uso limitado mensal",
            "Capacidade reservada com throughput garantido para workloads de alto volume — preço fixo ao invés de pay-per-token",
            "Limite padrão de requests por segundo imposto automaticamente a todas as contas para evitar abuso e garantir fairness",
            "Tipo específico de modelo otimizado para alto throughput que sacrifica qualidade de resposta em favor de velocidade"
        ],
        correct: [1],
        explanation: "✅ Provisioned Throughput: reserva capacidade dedicada. Throughput garantido, sem throttling. Econômico para alto volume constante.\n❌ Não é gratuito — é modalidade PAGA de capacidade reservada.\n❌ Não é limite default — é opção de UPGRADE para mais capacidade.\n❌ Não é tipo de modelo — é modalidade de COBRANÇA/capacidade.\n📌 On-Demand = pay-per-token (variável). Provisioned = capacidade fixa (previsível).",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_040',
        question: "Uma empresa quer implementar um chatbot que mantém contexto da conversa entre mensagens. Como implementar?",
        options: [
            "Incluir histórico da conversa no prompt a cada nova mensagem (conversation memory)",
            "Treinar modelo separado e especializado para cada usuário individual armazenando preferências nos pesos do modelo",
            "Cada mensagem deve ser processada de forma completamente independente pois LLMs são projetados para ser stateless",
            "Usar banco de dados relacional SQL para armazenar respostas anteriores e fazer JOIN com a nova pergunta do usuário"
        ],
        correct: [0],
        explanation: "✅ Conversation memory: incluir histórico no prompt. LLMs são stateless — contexto deve ser injetado a cada chamada.\n❌ Treinar modelo por usuário é impraticável e desnecessário.\n❌ Stateless é correto, mas a SOLUÇÃO é incluir histórico no prompt (não ignorar contexto).\n❌ DB relacional armazena dados mas não se integra diretamente ao prompt de forma útil.\n📌 LLM = stateless. Memória = incluir histórico no prompt. Desafio: histórico cresce > janela → summarizar.",
        topic: "prompt-engineering",
        domain: "generative-ai"
    },
    {
        id: 'genai_041',
        question: "O que é PartyRock da AWS?",
        options: [
            "Serviço de streaming de música e entretenimento integrado ao ecossistema AWS para clientes corporativos e consumidores",
            "Ferramenta de DevOps para automação de pipelines CI/CD com integração nativa a CodePipeline e CodeBuild",
            "Playground no-code para experimentar IA generativa e criar apps simples com foundation models sem programar",
            "Serviço de gaming na nuvem para desenvolvimento e hospedagem de jogos multiplayer com infraestrutura gerenciada"
        ],
        correct: [2],
        explanation: "✅ PartyRock: plataforma no-code para experimentar GenAI. Cria apps (chatbots, geradores) arrastando componentes.\n❌ Não é streaming de música.\n❌ Não é DevOps/CI-CD.\n❌ Não é gaming.\n📌 PartyRock = playground no-code para GenAI. Ideal para aprender e prototipar sem código.",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_042',
        question: "Qual é a relação entre embeddings e a capacidade de busca semântica?",
        options: [
            "Embeddings não possuem relação com busca pois são usados exclusivamente na fase de treinamento dos modelos de linguagem",
            "Busca semântica depende exclusivamente de keywords exatas e índices invertidos sem necessidade de representações vetoriais",
            "Embeddings são usados apenas para processamento de imagens em modelos de visão computacional e não se aplicam a texto",
            "Embeddings convertem texto em vetores — textos similares ficam próximos no espaço vetorial permitindo busca por similaridade"
        ],
        correct: [3],
        explanation: "✅ Embeddings: texto → vetor numérico que captura SIGNIFICADO. Similares = vetores próximos. Busca semântica: query → embedding → encontrar docs próximos.\n❌ Embeddings são fundamentais para busca semântica.\n❌ Busca semântica NÃO usa keywords — usa similaridade de significado.\n❌ Embeddings funcionam para texto, imagem, áudio — não só imagem.\n📌 Embedding = representação vetorial de significado. Base de RAG e busca semântica.",
        topic: "tokens",
        domain: "generative-ai"
    },
    {
        id: 'genai_043',
        question: "Uma empresa quer que respostas do LLM citem as fontes usadas. Qual técnica permite isso?",
        options: [
            "Aumentar temperatura para que o modelo explore mais informações e naturalmente inclua referências bibliográficas completas",
            "Fine-tuning do modelo base com milhares de exemplos de respostas que incluem citações formatadas em padrão acadêmico",
            "RAG com instrução no prompt para citar fontes dos chunks recuperados da base de conhecimento",
            "Usar modelo maior com mais parâmetros que naturalmente gera citações por ter memorizado mais referências no treinamento"
        ],
        correct: [2],
        explanation: "✅ RAG recupera chunks com metadados (fonte, página). Instrução: 'cite a fonte'. Modelo inclui referências dos docs usados.\n❌ Temperatura alta = mais aleatoriedade, não melhora citações.\n❌ Fine-tuning funciona mas é overkill — RAG + prompt resolve.\n❌ Modelo maior não garante citações corretas (pode alucinar referências).\n📌 Citações confiáveis = RAG (fontes reais recuperadas) + instrução para citar.",
        topic: "prompt-engineering",
        domain: "generative-ai"
    },
    {
        id: 'genai_044',
        question: "O que é RLHF (Reinforcement Learning from Human Feedback)?",
        options: [
            "Treinamento supervisionado padrão com dados rotulados por humanos em formato de pares pergunta-resposta classificados",
            "Técnica que usa feedback humano como recompensa para alinhar modelo com preferências (útil, seguro, honesto)",
            "Aprendizado não supervisionado onde o modelo descobre padrões sem qualquer intervenção humana durante treinamento",
            "Fine-tuning com mais dados de texto da internet para expandir conhecimento base do modelo pré-treinado existente"
        ],
        correct: [1],
        explanation: "✅ RLHF: humanos avaliam respostas → reward model aprende preferências → RL ajusta LLM para maximizar reward. Alinha com valores humanos.\n❌ Não é supervisionado padrão — usa RL com reward model.\n❌ Não é não supervisionado — usa feedback HUMANO explícito.\n❌ Não é apenas mais dados — é ALINHAMENTO de comportamento.\n📌 RLHF = tornar modelo ALINHADO (útil + seguro + honesto). Usado por GPT-4, Claude, etc.",
        topic: "llm-slm",
        domain: "generative-ai"
    },
    {
        id: 'genai_045',
        question: "Qual é a vantagem de usar múltiplos modelos no Bedrock ao invés de apenas um?",
        options: [
            "Diferentes modelos são melhores para diferentes tarefas — escolher por caso otimiza custo e qualidade",
            "Não há vantagem técnica ou financeira em usar múltiplos modelos pois todos produzem resultados equivalentes na prática",
            "Múltiplos modelos são sempre mais baratos que um único modelo pois dividem a carga de processamento entre si",
            "AWS exige obrigatoriamente o uso de pelo menos dois modelos diferentes para garantir redundância e alta disponibilidade"
        ],
        correct: [0],
        explanation: "✅ Cada modelo tem forças: Claude (raciocínio), Titan (embeddings), Llama (custo-benefício), Mistral (velocidade).\n❌ Há vantagem CLARA — modelos diferentes performam diferente por tarefa.\n❌ Não é sobre dividir carga — é sobre ESCOLHER o melhor por tarefa.\n❌ AWS não exige múltiplos — é escolha arquitetural.\n📌 Model routing: tarefa simples → modelo barato. Tarefa complexa → modelo potente. Otimiza custo.",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_046',
        question: "O que é 'model evaluation' no Amazon Bedrock?",
        options: [
            "Avaliar exclusivamente o custo operacional de cada modelo para otimização financeira e chargeback entre departamentos",
            "Processo de treinamento do modelo que avalia convergência dos pesos durante cada época de aprendizado supervisionado",
            "Feature que permite avaliar e comparar modelos usando métricas automáticas ou avaliação humana para escolher o melhor",
            "Deploy do modelo em ambiente de staging para testes de carga e performance antes de migrar para produção definitivamente"
        ],
        correct: [2],
        explanation: "✅ Model Evaluation: compara modelos com métricas (accuracy, robustness, toxicity) ou avaliação humana. Dados reais do seu caso.\n❌ Não é apenas custo — avalia QUALIDADE das respostas.\n❌ Não é treinamento — é AVALIAÇÃO de modelos já prontos.\n❌ Não é deploy — é análise PRÉ-deploy.\n📌 Model Evaluation = decidir QUAL modelo usar. Playground = testar rápido. Evaluation = métricas formais.",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_047',
        question: "Uma empresa quer reduzir custo de inferência no Bedrock mantendo qualidade aceitável. Qual estratégia?",
        options: [
            "Usar sempre o modelo mais caro e potente disponível para todas as requisições independente da complexidade da tarefa",
            "Desabilitar completamente guardrails e filtros de segurança para reduzir overhead de processamento em cada requisição",
            "Aumentar temperatura para máxima de modo que respostas mais curtas e diretas sejam geradas com menos tokens de saída",
            "Prompt caching + modelo menor para tarefas simples + modelo maior apenas para complexas (routing inteligente)"
        ],
        correct: [3],
        explanation: "✅ Estratégias: caching (reutilizar prefixos), routing (SLM para simples, LLM para complexo), prompts concisos (menos tokens).\n❌ Modelo mais caro para tudo = desperdício em tarefas simples.\n❌ Desabilitar guardrails: risco de segurança, economia insignificante.\n❌ Temp alta: respostas potencialmente MAIS longas (mais tokens = mais caro).\n📌 Otimização de custo = routing + caching + prompts concisos + batch para não-real-time.",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_048',
        question: "Uma equipe quer avaliar a qualidade INTRÍNSECA de modelos de linguagem comparando quão BEM cada modelo prevê o PRÓXIMO TOKEN em um conjunto de teste. Qual métrica?",
        options: [
            "BLEU, que mede sobreposição de n-gramas entre tradução gerada pelo modelo e uma tradução de referência humana",
            "Acurácia binária calculada entre saída gerada e gabarito de referência para cada amostra do conjunto de teste",
            "Perplexity, que mede quão bem o modelo prevê o próximo token — valores menores indicam melhor performance",
            "Pontuação F1 calculada sobre classes de tópicos atribuídos pelo modelo em tarefa de classificação multi-label"
        ],
        correct: [2],
        explanation: "✅ Perplexity: métrica INTRÍNSECA de LLMs. Menor = modelo prevê melhor. Mede 'surpresa' do modelo com texto real.\n❌ BLEU: métrica EXTRÍNSECA para tradução (compara com referência).\n❌ Acurácia: para classificação, não geração de texto.\n❌ F1: para classificação, não avaliação de modelos de linguagem.\n📌 Perplexity = quão bem o modelo PREVÊ texto. BLEU/ROUGE = quão similar à REFERÊNCIA.",
        topic: "parameters",
        domain: "generative-ai"
    },
    {
        id: 'genai_049',
        question: "Uma empresa tem aplicação GenAI com TRÁFEGO ALTO, PREVISÍVEL e SUSTENTADO exigindo capacidade GARANTIDA. Qual modalidade Bedrock?",
        options: [
            "Provisioned Throughput com capacidade reservada e custo previsível para tráfego alto e sustentado",
            "On-Demand sob demanda pago por token individual ideal para tráfego intermitente e imprevisível com picos esporádicos",
            "AWS Spot Instances com preço reduzido e possibilidade de interrupção para workloads tolerantes a falha de compute",
            "AWS Savings Plan para Amazon EC2 com compromisso de uso por 1 ou 3 anos aplicado a instâncias de inferência"
        ],
        correct: [0],
        explanation: "✅ Provisioned Throughput: capacidade dedicada, throughput garantido, sem throttling. Ideal para tráfego alto e previsível.\n❌ On-Demand: melhor para tráfego variável/baixo (pode sofrer throttling em pico).\n❌ Spot Instances: são de EC2, não existem no Bedrock.\n❌ Savings Plans: são para EC2/Fargate/Lambda, não Bedrock.\n📌 Alto volume constante = Provisioned. Variável/baixo = On-Demand. Spot/SP = EC2 (não Bedrock).",
        topic: "aws-bedrock",
        domain: "generative-ai"
    },
    {
        id: 'genai_050',
        question: "Quais são os componentes FUNDAMENTAIS do custo de inferência no Bedrock para uma aplicação RAG?",
        options: [
            "Custo fixo mensal de licença por modelo habilitado independentemente do volume de uso efetivo da aplicação",
            "Tokens de ENTRADA (prompt + contexto recuperado) e tokens de SAÍDA (resposta gerada pelo modelo)",
            "Custo de armazenamento dos pesos do modelo na conta do cliente somado ao custo de bandwidth de transferência",
            "Aluguel das GPUs físicas dedicadas onde o modelo está hospedado cobrado por hora de alocação independente de uso"
        ],
        correct: [1],
        explanation: "✅ Custo Bedrock = tokens input (prompt + chunks RAG) + tokens output (resposta). Pay-per-token.\n❌ Sem custo fixo de licença — paga pelo USO.\n❌ Cliente não armazena pesos — AWS gerencia tudo (serverless).\n❌ Não aluga GPUs — Bedrock é serverless, sem instâncias visíveis.\n📌 Em RAG, input tokens são MAIORES (prompt + contexto recuperado). Otimizar: chunks menores, reranking.",
        topic: "aws-bedrock",
        domain: "generative-ai"
    }
];

generativeAiQuestions.push(...generativeAiLote3);
