// AIF-C01 Domain 1: Fundamentals of AI & ML (40 questões - 20%)
// REESCRITO: Distratores equilibrados + Formato ✅❌📌

const aiMlQuestions = [
    {
        id: 'aiml_001',
        question: "Uma empresa quer criar um sistema que identifique padrões de compra em dados de clientes sem ter exemplos rotulados de categorias. Qual tipo de aprendizado de máquina é mais adequado?",
        options: [
            "Aprendizado não supervisionado com clustering para descobrir agrupamentos naturais nos dados",
            "Aprendizado supervisionado com classificação multiclasse para segmentar clientes por perfil",
            "Aprendizado por reforço com recompensas baseadas em conversão de vendas do cliente",
            "Aprendizado por transferência com modelo pré-treinado de comportamento de consumo"
        ],
        correct: [0],
        explanation: "✅ Não supervisionado: descobre padrões/agrupamentos sem rótulos. K-Means, DBSCAN agrupam clientes por similaridade de comportamento.\n❌ Supervisionado: exige dados rotulados (que a empresa não tem).\n❌ Reforço: precisa de ambiente com ações/recompensas, não se aplica a análise de dados históricos.\n❌ Transferência: adapta modelo existente, mas ainda precisa de task definida com labels.\n📌 Sem rótulos + descobrir padrões = Não Supervisionado. Com rótulos + prever = Supervisionado.",
        topic: "ml-types",
        domain: "ai-ml"
    },
    {
        id: 'aiml_002',
        question: "Qual é a relação correta entre IA, Machine Learning, Deep Learning e IA Generativa?",
        options: [
            "São tecnologias paralelas independentes que evoluíram separadamente na indústria",
            "Deep Learning é o campo mais amplo que engloba Machine Learning e IA tradicional",
            "IA contém ML, que contém DL, que contém IA Generativa — subconjuntos aninhados",
            "IA Generativa é uma categoria separada que não utiliza técnicas de Deep Learning"
        ],
        correct: [2],
        explanation: "✅ Hierarquia correta: IA (campo geral) ⊃ ML (aprende de dados) ⊃ DL (redes neurais profundas) ⊃ GenAI (cria conteúdo novo).\n❌ Não são paralelas — cada uma é subconjunto da anterior.\n❌ DL é subárea de ML, não o contrário.\n❌ GenAI é baseada em DL (Transformers, GANs, Diffusion Models).\n📌 Boneca russa: IA > ML > DL > GenAI. Cada uma DENTRO da anterior.",
        topic: "hierarchy",
        domain: "ai-ml"
    },
    {
        id: 'aiml_003',
        question: "Uma plataforma educacional quer que seu assistente virtual melhore recomendações ao longo do tempo baseado no feedback dos alunos após cada interação. Qual estratégia de aprendizado é mais indicada?",
        options: [
            "Aprendizado não supervisionado com clustering de perfis para agrupar alunos similares",
            "Aprendizado supervisionado com retraining periódico usando dados curados manualmente",
            "Aprendizado supervisionado incremental com banco de dados atualizado continuamente",
            "Aprendizado por reforço com recompensas para feedback positivo e penalidades para negativo"
        ],
        correct: [3],
        explanation: "✅ Reforço: ideal para aprender por tentativa e erro com feedback contínuo. Agente toma ação → recebe reward/penalty → ajusta política.\n❌ Não supervisionado: agrupa, mas não otimiza por feedback.\n❌ Supervisionado com retraining: necessita pipeline manual, não é adaptativo em tempo real.\n❌ Supervisionado incremental: não tem mecanismo de reward/penalty explícito.\n📌 Feedback + melhora com interação + reward/penalty = Reforço (RL).",
        topic: "ml-types",
        domain: "ai-ml"
    },
    {
        id: 'aiml_004',
        question: "Uma empresa lançou um sistema de visão computacional para monitoramento de segurança em tempo real. Quando o sistema analisa imagens das câmeras para reconhecer intrusos, qual etapa do processo de IA está sendo ativada?",
        options: [
            "Treinamento do modelo com novos dados capturados pelas câmeras de segurança",
            "Inferência — o modelo treinado gera previsões em tempo real sobre novas imagens",
            "Fine-tuning do modelo base com exemplos específicos do ambiente monitorado",
            "Validação cruzada para avaliar a performance do modelo em produção atual"
        ],
        correct: [1],
        explanation: "✅ Inferência: usar modelo pronto para gerar previsões/respostas em dados novos. É a fase de 'produção'.\n❌ Treinamento: já aconteceu antes, ajusta pesos com dados históricos.\n❌ Fine-tuning: adaptação do modelo, feita offline, não em tempo real.\n❌ Validação cruzada: técnica de avaliação durante desenvolvimento, não em produção.\n📌 Modelo pronto + dados novos + resposta em tempo real = INFERÊNCIA.",
        topic: "training-inference",
        domain: "ai-ml"
    },
    {
        id: 'aiml_005',
        question: "Qual é a diferença fundamental entre treinamento e inferência em modelos de IA?",
        options: [
            "Treinamento ajusta pesos do modelo com dados; inferência usa modelo pronto para responder",
            "Treinamento é mais barato por usar instâncias menores e inferência requer GPUs caras",
            "Inferência acontece antes do treinamento como etapa de preparação dos dados de entrada",
            "Treinamento e inferência são fases idênticas executadas em momentos diferentes do dia"
        ],
        correct: [0],
        explanation: "✅ Treinamento: caro, pontual, ajusta pesos/parâmetros com dados. Inferência: contínuo, usa modelo finalizado para predições.\n❌ Treinamento é MAIS caro (GPUs por horas/dias). Inferência é mais barata por request.\n❌ Inferência vem DEPOIS do treinamento, nunca antes.\n❌ São fases fundamentalmente diferentes em objetivo e custo.\n📌 Treinar = APRENDER (caro, pontual). Inferir = RESPONDER (barato, contínuo).",
        topic: "training-inference",
        domain: "ai-ml"
    },
    {
        id: 'aiml_006',
        question: "Um laboratório quer evitar o custo de criar modelos do zero e deseja adaptar modelos já existentes para novas aplicações. Qual método de aprendizado atende melhor?",
        options: [
            "Aumentar épocas de treinamento do modelo atual para melhorar convergência dos pesos",
            "Aprendizado não supervisionado com autoencoders para representação compacta dos dados",
            "Aprendizado por transferência — reaproveita conhecimento de modelo pré-treinado para nova tarefa",
            "Aprendizado por reforço com simulação para explorar soluções de menor custo computacional"
        ],
        correct: [2],
        explanation: "✅ Transfer Learning: modelo pré-treinado (ex: BERT, ResNet) é adaptado para nova tarefa com poucos dados. Base dos Foundation Models.\n❌ Autoencoders: compactam dados, não transferem conhecimento entre tarefas.\n❌ Mais épocas: treina o MESMO modelo por mais tempo, não aproveita modelos existentes.\n❌ RL: otimiza por reward, não transfere conhecimento de modelo pré-existente.\n📌 Reaproveitar modelo existente para nova tarefa = Transfer Learning.",
        topic: "ml-types",
        domain: "ai-ml"
    },
    {
        id: 'aiml_007',
        question: "Qual tipo de rede neural é mais adequado para processar imagens e detectar objetos visuais?",
        options: [
            "Redes Recorrentes (RNN) com memória de longo prazo para sequências visuais temporais",
            "Transformers com mecanismo de atenção para ponderar regiões relevantes da entrada",
            "Redes Feedforward simples com camadas densas totalmente conectadas entre neurônios",
            "Redes Convolucionais (CNN) com filtros que detectam padrões espaciais hierárquicos",
        ],
        correct: [3],
        explanation: "✅ CNN: filtros convolucionais detectam bordas → texturas → objetos. Projetadas para dados com estrutura espacial (imagens).\n❌ RNN: projetadas para sequências temporais (texto, áudio), não dados espaciais.\n❌ Feedforward: sem estrutura para capturar padrões espaciais locais, ineficiente para imagens.\n❌ Transformers (ViT): funcionam para imagens, mas CNN é a resposta clássica e mais eficiente para detecção.\n📌 Imagem/Vídeo = CNN. Texto sequencial = RNN/Transformer. Texto moderno = Transformer.",
        topic: "neural-networks",
        domain: "ai-ml"
    },
    {
        id: 'aiml_008',
        question: "Uma empresa de saúde precisa treinar um modelo com dados de pacientes distribuídos em vários hospitais, mas regulações impedem centralizar os dados. Qual abordagem usar?",
        options: [
            "Aprendizado supervisionado centralizado com cópia anonimizada dos dados em um único local",
            "Aprendizado federado — treina localmente em cada hospital e compartilha apenas o modelo",
            "Aprendizado não supervisionado distribuído com processamento paralelo em cluster central",
            "Aprendizado por reforço com agentes independentes otimizando em cada hospital separadamente"
        ],
        correct: [1],
        explanation: "✅ Federado: cada hospital treina localmente, envia APENAS atualizações de pesos (não dados). Modelo global é atualizado sem expor dados sensíveis.\n❌ Centralizado com anonimização: regulações podem proibir QUALQUER saída de dados, mesmo anonimizados.\n❌ Cluster central: dados saem dos hospitais — viola regulação.\n❌ RL independente: não agrega conhecimento entre hospitais, cada um aprende isolado.\n📌 Dados não podem sair + múltiplos locais + modelo compartilhado = Federado.",
        topic: "ml-types",
        domain: "ai-ml"
    },
    {
        id: 'aiml_009',
        question: "Qual serviço AWS é usado para rotulagem de dados em escala, combinando trabalho humano com automação?",
        options: [
            "Amazon SageMaker Ground Truth com workforce humano e rotulagem automática via ML",
            "Amazon Rekognition com detecção automática de labels em imagens e vídeos enviados",
            "Amazon Comprehend com extração automática de entidades e categorias de documentos",
            "Amazon Mechanical Turk com marketplace de trabalhadores para tarefas de classificação"
        ],
        correct: [0],
        explanation: "✅ Ground Truth: serviço gerenciado de labeling. Combina humanos (equipe própria, MTurk, vendors) + active learning (ML rotula automaticamente exemplos fáceis).\n❌ Rekognition: consome labels prontos, não cria datasets rotulados para treino.\n❌ Comprehend: extrai entidades de texto, não é ferramenta de rotulagem genérica.\n❌ MTurk: apenas marketplace de humanos, sem automação ML integrada.\n📌 Rotular dados em escala + humanos + automação ML = SageMaker Ground Truth.",
        topic: "aws-services",
        domain: "ai-ml"
    },
    {
        id: 'aiml_010',
        question: "Qual é a diferença entre um modelo e um algoritmo em Machine Learning?",
        options: [
            "São termos intercambiáveis que descrevem a mesma estrutura matemática de aprendizado",
            "O modelo é a receita de passos; o algoritmo é o resultado computacional do processo",
            "O algoritmo define o método de treinamento; o modelo é o artefato resultante após treinar",
            "Algoritmo é usado apenas em Deep Learning; modelo é termo exclusivo de ML clássico"
        ],
        correct: [2],
        explanation: "✅ Algoritmo = receita/método (como treinar). Modelo = resultado (artefato treinado que faz previsões). Ex: algoritmo XGBoost produz um modelo treinado.\n❌ Não são intercambiáveis — um produz o outro.\n❌ Invertido: algoritmo é a receita, modelo é o resultado.\n❌ Ambos os termos se aplicam a qualquer tipo de ML (clássico e DL).\n📌 Algoritmo = COMO treinar. Modelo = O QUE foi treinado. Algoritmo PRODUZ modelo.",
        topic: "concepts",
        domain: "ai-ml"
    }
];

window.aiMlQuestions = aiMlQuestions;


// AI & ML Fundamentals - Lote 2 (questões 11-20)
const aiMlQuestions2 = [
    {
        id: 'aiml_011',
        question: "Uma empresa quer detectar transações fraudulentas em tempo real. Tem histórico de transações rotuladas como 'fraude' ou 'legítima'. Qual tipo de aprendizado usar?",
        options: [
            "Aprendizado não supervisionado com detecção de anomalias para encontrar outliers estatísticos",
            "Aprendizado federado distribuído entre bancos parceiros para compartilhar padrões de fraude",
            "Aprendizado por reforço onde o agente aprende a bloquear transações suspeitas em tempo real",
            "Aprendizado supervisionado de classificação usando exemplos rotulados de fraude e legítimo",
        ],
        correct: [3],
        explanation: "✅ Supervisionado (classificação): dados rotulados (fraude/legítima) permitem treinar classificador binário que aprende padrões de fraude.\n❌ Não supervisionado: funciona sem labels, mas com labels disponíveis, supervisionado é mais preciso.\n❌ Reforço: otimiza policy por trial-and-error, não se aplica bem a classificação com dados históricos.\n❌ Federado: método de distribuição de treino, não tipo de aprendizado em si.\n📌 Dados COM rótulos + prever categoria = Supervisionado (Classificação).",
        topic: "ml-types",
        domain: "ai-ml"
    },
    {
        id: 'aiml_012',
        question: "Qual arquitetura de rede neural substituiu as RNNs para processamento de linguagem natural e é a base dos LLMs modernos?",
        options: [
            "CNN (Convolutional Neural Network) com filtros 1D adaptados para sequências de texto",
            "Transformer com mecanismo de self-attention para processar tokens em paralelo",
            "GAN (Generative Adversarial Network) com gerador e discriminador competindo entre si",
            "Autoencoder variacional (VAE) com espaço latente para representação compacta de texto"
        ],
        correct: [1],
        explanation: "✅ Transformer (2017, Google): self-attention processa TODOS os tokens em paralelo, captura contexto de longa distância. Base de GPT, BERT, Claude, Llama.\n❌ CNN 1D: funciona para texto curto, mas não escala para contexto longo como Transformers.\n❌ GAN: gera conteúdo (imagens), mas não é a arquitetura base dos LLMs.\n❌ VAE: gera dados, mas inferior a Transformers para linguagem natural.\n📌 LLMs modernos = Transformer. Palavra-chave: ATTENTION (atenção).",
        topic: "neural-networks",
        domain: "ai-ml"
    },
    {
        id: 'aiml_013',
        question: "Qual serviço AWS permite treinar, ajustar e implantar modelos de Machine Learning com infraestrutura gerenciada?",
        options: [
            "Amazon SageMaker com notebooks, training jobs, endpoints e pipelines de MLOps completos",
            "Amazon Bedrock com acesso a foundation models via API sem gerenciar infraestrutura",
            "AWS Lambda com execução serverless de código de inferência em funções event-driven",
            "Amazon Comprehend com modelos pré-treinados de NLP para análise de texto sem treino"
        ],
        correct: [0],
        explanation: "✅ SageMaker: plataforma completa de ML — notebooks (experimentação), training jobs (GPUs gerenciadas), endpoints (inferência), Pipelines (MLOps).\n❌ Bedrock: acesso a FMs prontos (Claude, Titan), não para treinar seus próprios modelos do zero.\n❌ Lambda: executa código, mas sem infraestrutura de ML (GPUs, training jobs, experiments).\n❌ Comprehend: NLP pronto, sem customização de treinamento do modelo base.\n📌 Treinar SEU modelo + infra gerenciada + MLOps = SageMaker.",
        topic: "aws-services",
        domain: "ai-ml"
    },
    {
        id: 'aiml_014',
        question: "Uma empresa quer prever o preço de imóveis baseado em características como área, localização e número de quartos. Qual tipo de problema de ML é esse?",
        options: [
            "Classificação binária para determinar se o imóvel é caro ou barato por faixa de preço",
            "Clustering para agrupar imóveis similares por características sem supervisão de preço",
            "Regressão para prever um valor numérico contínuo a partir de variáveis de entrada",
            "Detecção de anomalias para identificar imóveis com preços fora do padrão de mercado"
        ],
        correct: [2],
        explanation: "✅ Regressão: output é valor numérico contínuo (R$350.000). Supervisionado com dados históricos de preços.\n❌ Classificação: output seria categoria (caro/barato), não valor exato.\n❌ Clustering: não usa preço como target, apenas agrupa por similaridade.\n❌ Anomalias: encontra outliers, não prevê valor.\n📌 Prever NÚMERO contínuo = Regressão. Prever CATEGORIA = Classificação.",
        topic: "ml-types",
        domain: "ai-ml"
    },
    {
        id: 'aiml_015',
        question: "O que caracteriza o Deep Learning em relação ao Machine Learning tradicional?",
        options: [
            "Usa menos dados para treinar porque os algoritmos são mais eficientes computacionalmente",
            "Funciona exclusivamente com dados estruturados em formato tabular como planilhas e CSVs",
            "Não precisa de poder computacional significativo pois otimiza automaticamente os recursos",
            "Usa redes neurais com múltiplas camadas que aprendem representações hierárquicas automaticamente",
        ],
        correct: [3],
        explanation: "✅ DL: redes profundas (muitas camadas) aprendem features automaticamente (low-level → high-level). Elimina feature engineering manual.\n❌ DL precisa de MAIS dados que ML tradicional, não menos.\n❌ DL é computacionalmente INTENSIVO (GPUs, TPUs necessários).\n❌ DL funciona bem com dados NÃO estruturados (imagens, texto, áudio).\n📌 Deep Learning = muitas camadas + aprende features sozinho + precisa de MUITOS dados e GPUs.",
        topic: "hierarchy",
        domain: "ai-ml"
    },
    {
        id: 'aiml_016',
        question: "Qual é o principal mecanismo que torna os Transformers superiores às RNNs para textos longos?",
        options: [
            "Usam menos memória RAM por processarem apenas um token por vez sequencialmente",
            "Mecanismo de atenção que pondera todas as palavras simultaneamente independente da distância",
            "Processam texto caractere por caractere para capturar nuances ortográficas do idioma",
            "Não precisam de treinamento prévio pois inferem estrutura gramatical por regras codificadas"
        ],
        correct: [1],
        explanation: "✅ Self-Attention: cada token 'olha' para TODOS os outros em paralelo, com pesos de importância. Captura dependências de longa distância.\n❌ Transformers processam TODOS os tokens ao mesmo tempo (paralelo), não um por vez.\n❌ Processam tokens (subpalavras), não caracteres individuais.\n❌ Transformers PRECISAM de treinamento massivo (bilhões de tokens).\n📌 Transformer = Attention (paralelo, contexto global). RNN = sequencial (esquece contexto distante).",
        topic: "neural-networks",
        domain: "ai-ml"
    },
    {
        id: 'aiml_017',
        question: "Uma empresa quer usar ML mas não tem cientistas de dados. Precisa de uma ferramenta visual no-code para criar modelos. Qual serviço AWS?",
        options: [
            "SageMaker Canvas com interface visual drag-and-drop para business analysts sem programação",
            "SageMaker Studio com notebooks Jupyter para desenvolvimento de código Python interativo",
            "Amazon Bedrock com playground para testar prompts em foundation models pré-treinados",
            "AWS Glue DataBrew com transformações visuais de dados para preparação de datasets"
        ],
        correct: [0],
        explanation: "✅ Canvas: interface no-code para ML. Business analysts importam dados, selecionam target, treinam e preveem sem código.\n❌ Studio: IDE completo, requer Python/código — para cientistas de dados.\n❌ Bedrock: usa FMs prontos via prompts, não treina modelos customizados em seus dados tabulares.\n❌ DataBrew: prepara/limpa dados, não treina modelos de ML.\n📌 No-code + ML + business analyst = SageMaker Canvas.",
        topic: "aws-services",
        domain: "ai-ml"
    },
    {
        id: 'aiml_018',
        question: "Qual é a diferença entre IA Generativa e IA tradicional (discriminativa)?",
        options: [
            "IA Generativa é mais simples e requer menos dados de treinamento que IA discriminativa",
            "IA tradicional cria conteúdo novo enquanto IA Generativa apenas categoriza dados existentes",
            "IA discriminativa classifica e prevê categorias; IA Generativa cria conteúdo novo original",
            "Não há diferença técnica relevante, apenas nomenclatura de marketing para o mesmo conceito"
        ],
        correct: [2],
        explanation: "✅ Discriminativa: fronteira entre classes (spam/não-spam, gato/cachorro). Generativa: aprende distribuição dos dados e GERA novos (texto, imagem, código).\n❌ GenAI precisa de MAIS dados e compute, não menos.\n❌ Invertido: discriminativa classifica, generativa cria.\n❌ São fundamentalmente diferentes em objetivo e arquitetura.\n📌 Discriminativa = CLASSIFICAR existente. Generativa = CRIAR novo.",
        topic: "hierarchy",
        domain: "ai-ml"
    },
    {
        id: 'aiml_019',
        question: "Um instituto de pesquisa tem grande quantidade de dados genéticos não rotulados e quer identificar agrupamentos em perfis genéticos. Qual metodologia é mais adequada?",
        options: [
            "Aprendizagem supervisionada com classificação para separar perfis em categorias predefinidas",
            "Aprendizagem por reforço com simulação de mutações genéticas para otimizar combinações",
            "Aprendizagem por reforço (RLHF) com feedback humano para validar os agrupamentos encontrados",
            "Aprendizagem não supervisionada com clustering para descobrir grupos naturais nos dados",
        ],
        correct: [3],
        explanation: "✅ Não supervisionado (clustering): dados sem rótulos + objetivo de encontrar grupos naturais = K-Means, DBSCAN, hierárquico.\n❌ Supervisionado: precisa de categorias predefinidas (não tem).\n❌ RLHF: usado para alinhar LLMs com preferências humanas, não para clustering genético.\n❌ RL com simulação: não se aplica a análise de dados estáticos.\n📌 Dados sem rótulos + encontrar grupos = Não Supervisionado (Clustering).",
        topic: "ml-types",
        domain: "ai-ml"
    },
    {
        id: 'aiml_020',
        question: "Quais são as características do treinamento de modelos de IA comparado à inferência?",
        options: [
            "Treinamento é barato e rápido porque usa apenas CPUs; inferência é cara por usar GPUs dedicadas",
            "Treinamento é caro, pontual e usa GPUs intensivamente; inferência é mais barata por request e contínua",
            "Ambos têm o mesmo custo e perfil computacional pois utilizam a mesma infraestrutura de hardware",
            "Inferência consome mais recursos que treinamento porque processa milhões de requests simultâneos"
        ],
        correct: [1],
        explanation: "✅ Treinamento: caro (GPUs por dias), pontual, ajusta bilhões de pesos. Inferência: barata por request, contínua, usa modelo pronto.\n❌ Treinamento é MAIS caro e usa GPUs, não o contrário.\n❌ Perfis computacionais são muito diferentes (batch vs real-time).\n❌ Total de inferência PODE custar mais em escala, mas POR UNIDADE é muito mais barato.\n📌 Treinar = CARO + PONTUAL + GPUs. Inferir = BARATO/req + CONTÍNUO + pode usar CPUs.",
        topic: "training-inference",
        domain: "ai-ml"
    }
];

aiMlQuestions.push(...aiMlQuestions2);


// AI & ML Fundamentals - Lote 3 (questões 21-30)
const aiMlQuestions3 = [
    {
        id: 'aiml_021',
        question: "Uma empresa quer usar Amazon Rekognition para detectar conteúdo impróprio em imagens enviadas por usuários. Qual tipo de IA está sendo aplicado?",
        options: [
            "Visão computacional (Computer Vision) para analisar e classificar conteúdo visual",
            "IA Generativa com modelos de difusão para gerar versões filtradas das imagens originais",
            "Processamento de linguagem natural para interpretar descrições textuais das imagens",
            "Aprendizado por reforço para otimizar políticas de moderação de conteúdo ao longo do tempo"
        ],
        correct: [0],
        explanation: "✅ Computer Vision: subárea de IA/DL para analisar imagens — detectar objetos, faces, texto, conteúdo impróprio. Rekognition é serviço de CV.\n❌ GenAI: cria conteúdo, não classifica/modera conteúdo existente.\n❌ NLP: processa texto, não imagens.\n❌ RL: otimiza por reward, não é o tipo de IA aplicado aqui.\n📌 Analisar/classificar IMAGENS = Computer Vision. Rekognition = CV da AWS.",
        topic: "aws-services",
        domain: "ai-ml"
    },
    {
        id: 'aiml_022',
        question: "Qual serviço AWS analisa texto para extrair sentimento, entidades, idioma e tópicos automaticamente?",
        options: [
            "Amazon Textract com extração de texto estruturado e tabelas de documentos escaneados",
            "Amazon Translate com tradução neural entre idiomas mantendo contexto e significado",
            "Amazon Comprehend com NLP para sentimento, entidades, idioma e key phrases de texto",
            "Amazon Polly com síntese de voz neural para converter texto em áudio natural realista"
        ],
        correct: [2],
        explanation: "✅ Comprehend: NLP gerenciado. Extrai sentimento (positivo/negativo), entidades (nomes, datas), idioma, key phrases, tópicos. Sem treino.\n❌ Textract: OCR inteligente (extrai texto de imagens/PDFs), não analisa sentimento.\n❌ Translate: traduz entre idiomas, não extrai entidades ou sentimento.\n❌ Polly: text-to-speech, não analisa conteúdo do texto.\n📌 Analisar CONTEÚDO de texto (sentimento, entidades) = Comprehend. Extrair texto de IMAGEM = Textract.",
        topic: "aws-services",
        domain: "ai-ml"
    },
    {
        id: 'aiml_023',
        question: "Uma empresa precisa extrair texto e dados estruturados de documentos escaneados (PDFs, formulários). Qual serviço AWS usar?",
        options: [
            "Amazon Comprehend com análise de linguagem natural para entender conteúdo dos documentos",
            "Amazon Translate com processamento multilíngue para documentos em diferentes idiomas",
            "Amazon Rekognition com detecção de texto em imagens e identificação de caracteres visuais",
            "Amazon Textract com OCR inteligente que extrai texto, tabelas e formulários de documentos",
        ],
        correct: [3],
        explanation: "✅ Textract: vai além de OCR simples — entende ESTRUTURA (forms: key-value, tables: linhas/colunas). Ideal para faturas, tax forms, contratos.\n❌ Comprehend: analisa SIGNIFICADO do texto já extraído, não extrai de imagens.\n❌ Rekognition: detecta texto em fotos (placas, sinais), mas não processa documentos estruturados.\n❌ Translate: traduz texto, não extrai de documentos escaneados.\n📌 Documento escaneado → extrair texto/tabelas/forms = Textract.",
        topic: "aws-services",
        domain: "ai-ml"
    },
    {
        id: 'aiml_024',
        question: "Qual é a principal vantagem de usar um Foundation Model pré-treinado ao invés de treinar um modelo do zero?",
        options: [
            "Foundation Models são sempre gratuitos e open-source sem custos de licenciamento algum",
            "Reduz drasticamente tempo, custo e quantidade de dados necessários para a nova tarefa",
            "Foundation Models não precisam de dados adicionais para funcionar em qualquer domínio específico",
            "São mais simples de implementar que modelos tradicionais por não exigirem infraestrutura"
        ],
        correct: [1],
        explanation: "✅ FMs pré-treinados com bilhões de tokens. Fine-tuning/few-shot requer fração dos dados e compute vs treinar do zero (economia de meses e milhões).\n❌ Muitos FMs são pagos (Claude, GPT-4). Alguns são open (Llama), mas não todos.\n❌ Para domínios específicos, frequentemente precisam de fine-tuning com dados do domínio.\n❌ Ainda requerem infraestrutura (GPUs para fine-tuning, endpoints para servir).\n📌 FM = atalho. Já aprendeu linguagem/mundo → adaptar para SUA tarefa com pouco esforço.",
        topic: "concepts",
        domain: "ai-ml"
    },
    {
        id: 'aiml_025',
        question: "O que é overfitting em Machine Learning e como identificá-lo?",
        options: [
            "Modelo memoriza dados de treino mas falha em dados novos — alta acurácia treino, baixa no teste",
            "Modelo performa igualmente bem em dados de treino e teste indicando boa generalização",
            "Modelo é simples demais para capturar padrões resultando em baixa acurácia em tudo (underfitting)",
            "Modelo treina muito rápido convergindo antes de processar todo o dataset de treinamento disponível"
        ],
        correct: [0],
        explanation: "✅ Overfitting: 'decora' treino, não generaliza. Acurácia treino ~99%, teste ~60%. Solução: mais dados, regularização, dropout, early stopping.\n❌ Performance igual treino/teste = modelo BEM ajustado (ideal).\n❌ Simples demais + baixa acurácia em tudo = Underfitting (oposto do overfitting).\n❌ Treinar rápido demais não define overfitting (mais épocas podem causar overfit, não menos).\n📌 Overfit = decora. Underfit = não aprende. Bom = generaliza. Gap treino/teste = overfit.",
        topic: "concepts",
        domain: "ai-ml"
    },
    {
        id: 'aiml_026',
        question: "Uma empresa quer criar um chatbot que entenda linguagem natural e responda perguntas dos clientes. Qual serviço AWS é específico para isso?",
        options: [
            "Amazon Polly com síntese de voz neural para respostas em áudio natural para o cliente",
            "Amazon Translate com tradução automática para suportar clientes em múltiplos idiomas",
            "Amazon Lex com NLU para entender intenções e extrair informações de conversas em texto/voz",
            "Amazon Transcribe com speech-to-text para converter áudio das ligações em texto transcrito"
        ],
        correct: [2],
        explanation: "✅ Lex: chatbot builder. NLU (entende intenção), slot filling (extrai dados), diálogo multi-turn. Mesmo motor do Alexa. Integra com Lambda.\n❌ Polly: TTS (text-to-speech), gera áudio a partir de texto — não entende linguagem.\n❌ Translate: traduz idiomas, não constrói chatbots conversacionais.\n❌ Transcribe: STT (speech-to-text), transcreve áudio — não responde perguntas.\n📌 Chatbot + entender intenção = Lex. Voz→texto = Transcribe. Texto→voz = Polly.",
        topic: "aws-services",
        domain: "ai-ml"
    },
    {
        id: 'aiml_027',
        question: "Qual métrica é mais importante para avaliar um modelo de classificação binária com classes desbalanceadas (ex: 99% legítimo, 1% fraude)?",
        options: [
            "Acurácia (accuracy) que mede a proporção total de previsões corretas sobre o dataset",
            "Número total de parâmetros do modelo como medida da capacidade de representação interna",
            "Tempo de treinamento do modelo como indicador de complexidade e capacidade de aprendizado",
            "F1-Score que combina Precisão e Recall balanceando falsos positivos e falsos negativos",
        ],
        correct: [3],
        explanation: "✅ F1-Score = harmônica de Precision e Recall. Em dados desbalanceados (1% fraude), F1 revela se o modelo ENCONTRA fraudes (Recall) sem gerar muitos alarmes falsos (Precision).\n❌ Acurácia é ENGANOSA: prever sempre 'legítimo' dá 99% acurácia mas 0% detecção de fraude.\n❌ Tempo de treinamento não mede qualidade das previsões.\n❌ Número de parâmetros indica tamanho, não performance.\n📌 Classes desbalanceadas → IGNORE acurácia → use F1, Precision, Recall, AUC-ROC.",
        topic: "concepts",
        domain: "ai-ml"
    },
    {
        id: 'aiml_028',
        question: "Qual algoritmo de aprendizado não supervisionado é amplamente utilizado para clustering (agrupar dados similares)?",
        options: [
            "K-NN (K-Nearest Neighbors) com classificação por votação dos vizinhos mais próximos",
            "K-Means com particionamento iterativo dos dados em K grupos por proximidade ao centróide",
            "XGBoost com ensemble de árvores de decisão em boosting sequencial para classificação",
            "Regressão Linear com ajuste de coeficientes para minimizar erro quadrático médio"
        ],
        correct: [1],
        explanation: "✅ K-Means: não supervisionado, divide dados em K clusters por distância ao centróide. Iterativo até convergir.\n❌ K-NN: SUPERVISIONADO (precisa de labels), classifica por vizinhos. Não confundir com K-Means!\n❌ XGBoost: supervisionado (boosting), para classificação/regressão com labels.\n❌ Regressão Linear: supervisionado, prevê valores contínuos.\n📌 K-Means = agrupa SEM labels (não supervisionado). K-NN = classifica COM labels (supervisionado).",
        topic: "algorithms",
        domain: "ai-ml"
    },
    {
        id: 'aiml_029',
        question: "Qual é a diferença entre K-NN e K-Means?",
        options: [
            "K-NN classifica por vizinhos (supervisionado); K-Means agrupa por centróides (não supervisionado)",
            "São o mesmo algoritmo com implementações ligeiramente diferentes de distância euclidiana",
            "K-Means é supervisionado com labels de cluster; K-NN é não supervisionado por proximidade",
            "Ambos são algoritmos de regressão para prever valores contínuos com diferentes otimizadores"
        ],
        correct: [0],
        explanation: "✅ K-NN: 'me diga seus vizinhos e te direi quem és' — classificação supervisionada. K-Means: 'encontre K grupos naturais' — clustering não supervisionado.\n❌ Não são o mesmo — objetivos e requisitos completamente diferentes.\n❌ Invertido: K-NN é supervisionado, K-Means é não supervisionado.\n❌ Nenhum dos dois é regressão por padrão (K-NN pode, K-Means não).\n📌 CONFUSÃO CLÁSSICA NO EXAME! K-NN = supervisão + classificar. K-Means = sem supervisão + agrupar.",
        topic: "algorithms",
        domain: "ai-ml"
    },
    {
        id: 'aiml_030',
        question: "O MSE (Mean Squared Error) calcula:",
        options: [
            "A proporção de classificações corretas dividida pelo total de amostras no dataset de teste",
            "A precisão do modelo em distinguir classes positivas de negativas em classificação binária",
            "A média dos erros ao quadrado entre o valor previsto e o valor real para regressão",
            "O número ideal de clusters encontrados automaticamente pelo algoritmo de agrupamento"
        ],
        correct: [2],
        explanation: "✅ MSE = Σ(previsto - real)² / n. Métrica de REGRESSÃO. Penaliza erros grandes (quadrado). Quanto menor, melhor.\n❌ Proporção de acertos = Acurácia (classificação, não regressão).\n❌ Distinguir classes = AUC-ROC ou F1 (classificação).\n❌ Número de clusters = Elbow method ou Silhouette score (clustering).\n📌 MSE/RMSE/R² = métricas de REGRESSÃO. Accuracy/F1/AUC = métricas de CLASSIFICAÇÃO.",
        topic: "metrics",
        domain: "ai-ml"
    }
];

aiMlQuestions.push(...aiMlQuestions3);


// AI & ML Fundamentals - Lote 4 (questões 31-40)
const aiMlQuestions4 = [
    {
        id: 'aiml_031',
        question: "O RMSE é utilizado principalmente em:",
        options: [
            "Problemas de clustering para medir a coesão interna dos grupos formados pelo algoritmo",
            "Redes neurais profundas para medir a taxa de convergência do gradiente durante treinamento",
            "Problemas de classificação binária para medir taxa de falsos positivos do classificador",
            "Problemas de regressão para medir magnitude média do erro em unidades originais dos dados",
        ],
        correct: [3],
        explanation: "✅ RMSE = √MSE. Volta à unidade original (ex: 'erro médio de R$15.000'). Métrica interpretável de regressão.\n❌ Clustering usa Silhouette Score, inércia, não RMSE.\n❌ Classificação binária usa Precision, Recall, F1, AUC — não RMSE.\n❌ Convergência do gradiente é medida pela loss function, não RMSE diretamente.\n📌 RMSE = raiz do MSE = erro médio na MESMA UNIDADE dos dados. Só para REGRESSÃO.",
        topic: "metrics",
        domain: "ai-ml"
    },
    {
        id: 'aiml_032',
        question: "O que o R² (coeficiente de determinação) mede?",
        options: [
            "O erro absoluto médio do modelo em unidades originais para interpretação direta do desvio",
            "Quanto da variância dos dados o modelo explica, numa escala de 0 (nada) a 1 (tudo)",
            "A velocidade de convergência do treinamento medida em épocas até estabilização da loss",
            "O número de features relevantes selecionadas automaticamente pelo algoritmo de treinamento"
        ],
        correct: [1],
        explanation: "✅ R² = poder explicativo. 1.0 = perfeito, 0.8 = explica 80% da variância, 0 = igual chutar a média, negativo = pior que média.\n❌ Erro absoluto médio = MAE (outra métrica de regressão).\n❌ Velocidade de convergência não é o que R² mede.\n❌ Seleção de features é feita por outros métodos (importância, LASSO).\n📌 R² = 'quanto meu modelo explica dos dados'. Complementa MSE/RMSE com interpretação %.",
        topic: "metrics",
        domain: "ai-ml"
    },
    {
        id: 'aiml_033',
        question: "Uma organização de saúde precisa realizar inferência em grandes conjuntos de dados (vários GB) sem necessidade de resposta imediata. Qual tipo de inferência SageMaker usar?",
        options: [
            "Transformação em lote (Batch Transform) para processar datasets inteiros de uma vez offline",
            "Inferência assíncrona com fila de processamento para payloads grandes com entrega posterior",
            "Inferência em tempo real com endpoint sempre ativo para respostas em milissegundos ao cliente",
            "Inferência serverless com auto-scaling a zero para workloads esporádicos de baixo volume"
        ],
        correct: [0],
        explanation: "✅ Batch Transform: processa datasets inteiros offline, sem endpoint persistente. Ideal para scoring noturno, relatórios massivos.\n❌ Real-time: resposta imediata (<ms), mas para requests individuais, não GBs de dados.\n❌ Assíncrona: para payloads grandes individuais com resposta 'em breve', não datasets inteiros.\n❌ Serverless: para tráfego esporádico/baixo, não processamento massivo.\n📌 GBs de dados + sem urgência + offline = Batch Transform. Request individual grande = Assíncrono.",
        topic: "inference-types",
        domain: "ai-ml"
    },
    {
        id: 'aiml_034',
        question: "Uma instituição lida com arquivos de até 1GB e tempos de processamento de 1 hora, mas precisa de resultados quase em tempo real. Qual inferência SageMaker?",
        options: [
            "Transformação em lote que processa todo o dataset de uma vez em um job agendado noturno",
            "Inferência em tempo real com endpoint dedicado para respostas sub-segundo por requisição",
            "Inferência assíncrona com fila que aceita payloads grandes e notifica quando resultado está pronto",
            "Inferência serverless com escalonamento automático para zero nos períodos sem requisições"
        ],
        correct: [2],
        explanation: "✅ Assíncrona: aceita payloads até 1GB, processamento longo (minutos/horas), notifica via SNS quando pronto. Entre batch e real-time.\n❌ Batch: sem urgência, processa datasets programados — não 'quase tempo real'.\n❌ Real-time: timeout de segundos, payload máximo de 6MB — não suporta 1GB/1hora.\n❌ Serverless: para requests leves e esporádicos, não processamento pesado de 1h.\n📌 Payload grande + processamento longo + resultado 'em breve' = Assíncrono.",
        topic: "inference-types",
        domain: "ai-ml"
    },
    {
        id: 'aiml_035',
        question: "Uma instituição acadêmica quer treinar seu próprio LLM focando em reduzir custo e impacto ambiental. Qual instância EC2 é mais indicada?",
        options: [
            "Amazon EC2 série C (compute optimized) com processadores de alta frequência para cálculos",
            "Amazon EC2 série P (GPU NVIDIA A100/H100) para treinamento de propósito geral em deep learning",
            "Amazon EC2 série G (GPU para graphics) otimizada para rendering e inferência de modelos leves",
            "Amazon EC2 série Trn (Trainium) com chip AWS otimizado para training de ML com eficiência",
        ],
        correct: [3],
        explanation: "✅ Trn (Trainium): chip AWS custom para TREINAR DL. Custo até 50% menor que GPUs equivalentes, eficiência energética superior.\n❌ Série C: CPU apenas, sem aceleração para deep learning (muito lento para LLMs).\n❌ Série P: funciona bem para treino, mas MAIS CARO que Trainium para o mesmo workload.\n❌ Série G: otimizada para inferência e graphics, não para treinamento pesado.\n📌 Treinar modelo = Trainium (Trn). Servir/inferir modelo = Inferentia (Inf). Custo-benefício AWS.",
        topic: "infrastructure",
        domain: "ai-ml"
    },
    {
        id: 'aiml_036',
        question: "Qual instância EC2 é otimizada para servir modelos de IA em produção com baixa latência e alto volume de previsões?",
        options: [
            "EC2 série Trn (Trainium) com chip customizado para treinamento distribuído de modelos grandes",
            "EC2 série Inf (Inferentia) com chip AWS otimizado para inferência de alta performance e baixo custo",
            "EC2 série M (general purpose) com balance de compute, memória e rede para workloads gerais",
            "EC2 série T (burstable) com créditos de CPU para workloads com picos esporádicos de uso"
        ],
        correct: [1],
        explanation: "✅ Inf (Inferentia): chip AWS para SERVIR modelos. Baixa latência, alto throughput, custo/inferência reduzido vs GPUs.\n❌ Trn (Trainium): para TREINAR, não servir. Confusão comum no exame.\n❌ Série M: general purpose, sem aceleração de ML — lento e caro para inferência em escala.\n❌ Série T: burstable para web apps, não para inferência de ML de alto volume.\n📌 Treinar = Trainium (TRN). Inferir/Servir = Inferentia (INF). Lembre: INFerir = INFerentia.",
        topic: "infrastructure",
        domain: "ai-ml"
    },
    {
        id: 'aiml_037',
        question: "Um analista precisa apresentar um relatório sobre modelo de ML garantindo transparência e explicabilidade para gestores. O que deve incluir?",
        options: [
            "Gráficos de Dependência Parcial (PDPs) mostrando como cada variável influencia as previsões",
            "Código fonte completo do treinamento com todos os hiperparâmetros e configurações do job",
            "Dados brutos de amostra usados no treinamento com estatísticas descritivas de cada feature",
            "Tabelas de convergência mostrando a evolução da loss function ao longo das épocas de treino"
        ],
        correct: [0],
        explanation: "✅ PDPs: visualização interpretável mostrando impacto de cada variável na previsão. Gestores entendem sem conhecer ML.\n❌ Código fonte: técnico demais para gestores, não explica 'por que' o modelo decide.\n❌ Dados brutos: informação de input, não explicação do comportamento do modelo.\n❌ Tabelas de convergência: mostram se treinou bem, não como o modelo decide.\n📌 Explicabilidade para leigos = PDPs, SHAP, feature importance. NÃO é código ou dados brutos.",
        topic: "explainability",
        domain: "ai-ml"
    },
    {
        id: 'aiml_038',
        question: "O XGBoost é um algoritmo que combina várias árvores de decisão em sequência. Qual é sua principal vantagem?",
        options: [
            "É o algoritmo mais simples de implementar com apenas um hiperparâmetro para configurar",
            "Funciona exclusivamente com dados de imagem processando pixels como features independentes",
            "Cada árvore corrige erros das anteriores, resultando em alta precisão para dados tabulares",
            "Não precisa de dados rotulados pois aprende automaticamente a estrutura dos clusters"
        ],
        correct: [2],
        explanation: "✅ XGBoost (boosting): árvores sequenciais, cada uma focando nos erros da anterior. Estado da arte para dados TABULARES (competições Kaggle).\n❌ XGBoost tem MUITOS hiperparâmetros (learning_rate, max_depth, n_estimators, etc.).\n❌ Para imagens usa-se CNN, não XGBoost. XGBoost = dados tabulares/estruturados.\n❌ XGBoost é SUPERVISIONADO — precisa de labels para treinar.\n📌 Dados tabulares + alta precisão + supervisionado = XGBoost/LightGBM. Imagens = CNN.",
        topic: "algorithms",
        domain: "ai-ml"
    },
    {
        id: 'aiml_039',
        question: "Qual característica do MSE (Mean Squared Error) é verdadeira?",
        options: [
            "Mede exclusivamente o tempo de resposta do modelo em milissegundos para benchmarking",
            "Funciona apenas para clustering medindo distância entre pontos e centróide do grupo",
            "Não utiliza valores numéricos pois é baseada em categorias discretas de classificação",
            "Penaliza erros grandes desproporcionalmente por elevar a diferença ao quadrado antes de somar",
        ],
        correct: [3],
        explanation: "✅ MSE eleva erros ao quadrado: erro de 1→1, erro de 5→25, erro de 10→100. Erros grandes pesam MUITO mais. Sensível a outliers.\n❌ Clustering usa inércia (soma de distâncias ao centróide), não MSE diretamente.\n❌ MSE é 100% numérico — calcula diferença entre valores previstos e reais.\n❌ Tempo de resposta é latency/throughput, não MSE.\n📌 MSE penaliza MUITO erros grandes (quadrado). Bom quando erros grandes são inaceitáveis.",
        topic: "metrics",
        domain: "ai-ml"
    },
    {
        id: 'aiml_040',
        question: "Uma equipe testa muitas combinações de hiperparâmetros em paralelo e precisa REGISTRAR parâmetros, métricas e artefatos de cada execução para COMPARAR resultados. Qual recurso SageMaker?",
        options: [
            "SageMaker Model Monitor para detectar drift de dados e degradação de performance em produção",
            "SageMaker Experiments para rastrear, organizar e comparar múltiplas execuções de treinamento",
            "SageMaker Feature Store para armazenar e compartilhar features reutilizáveis entre equipes",
            "SageMaker Ground Truth para rotular dados de treinamento com workforce humano e automação"
        ],
        correct: [1],
        explanation: "✅ Experiments: rastreia runs (parâmetros + métricas + artefatos). Compara lado a lado. Organiza em trials e trial components.\n❌ Model Monitor: monitoramento PÓS-deploy (data drift, bias drift, model quality). Não rastreia experimentos.\n❌ Feature Store: repositório de features transformadas para reuso. Não rastreia experiments.\n❌ Ground Truth: rotulagem de dados, fase de preparação — não comparação de runs.\n📌 Comparar experimentos = Experiments. Monitorar produção = Model Monitor. Rotular = Ground Truth.",
        topic: "aws-services",
        domain: "ai-ml"
    }
];

aiMlQuestions.push(...aiMlQuestions4);
