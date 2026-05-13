// AIF-C01 Domain 1: Fundamentals of AI & ML (39 questões - 20%)
// Tópicos: IA vs ML vs DL vs GenAI, tipos de aprendizado, redes neurais, treinamento vs inferência, SageMaker

const aiMlQuestions = [
    {
        id: 'aiml_001',
        question: "Uma empresa quer criar um sistema que identifique padrões de compra em dados de clientes sem ter exemplos rotulados de categorias. Qual tipo de aprendizado de máquina é mais adequado?",
        options: [
            "Aprendizado supervisionado",
            "Aprendizado não supervisionado",
            "Aprendizado por reforço",
            "Aprendizado por transferência"
        ],
        correct: [1],
        explanation: "Aprendizado não supervisionado descobre padrões e agrupamentos em dados sem rótulos. Ideal para clustering de clientes por comportamento de compra.",
        topic: "ml-types",
        domain: "ai-ml"
    },
    {
        id: 'aiml_002',
        question: "Qual é a relação correta entre IA, Machine Learning, Deep Learning e IA Generativa?",
        options: [
            "São tecnologias independentes sem relação",
            "IA contém ML, que contém DL, que contém IA Generativa (hierarquia)",
            "Deep Learning é mais amplo que Machine Learning",
            "IA Generativa não usa Deep Learning"
        ],
        correct: [1],
        explanation: "A hierarquia é: IA (campo amplo) → ML (subárea que aprende de dados) → Deep Learning (ML com redes neurais profundas) → IA Generativa (DL que cria conteúdo novo).",
        topic: "hierarchy",
        domain: "ai-ml"
    },
    {
        id: 'aiml_003',
        question: "Uma plataforma educacional quer que seu assistente virtual melhore recomendações ao longo do tempo baseado no feedback dos alunos após cada interação. Qual estratégia de aprendizado é mais indicada?",
        options: [
            "Aprendizado não supervisionado para identificar padrões",
            "Aprendizado supervisionado com dados curados manualmente",
            "Aprendizado supervisionado com banco atualizado continuamente",
            "Aprendizado por reforço com recompensas para feedback positivo"
        ],
        correct: [3],
        explanation: "Aprendizado por reforço é ideal quando o sistema aprende por tentativa e erro, recebendo recompensas (feedback positivo) e penalidades (feedback negativo) ao longo do tempo.",
        topic: "ml-types",
        domain: "ai-ml"
    },
    {
        id: 'aiml_004',
        question: "Uma empresa lançou um sistema de visão computacional para monitoramento de segurança em tempo real. Quando o sistema analisa imagens das câmeras para reconhecer intrusos, qual etapa do processo de IA está sendo ativada?",
        options: [
            "Treinamento",
            "Inferência",
            "Implantação do modelo",
            "Correção de viés"
        ],
        correct: [1],
        explanation: "Inferência é a fase em que o modelo treinado é usado para gerar respostas/previsões em tempo real. Treinamento já aconteceu antes. Inferência = uso do modelo em produção.",
        topic: "training-inference",
        domain: "ai-ml"
    },
    {
        id: 'aiml_005',
        question: "Qual é a diferença fundamental entre treinamento e inferência em modelos de IA?",
        options: [
            "Treinamento é mais barato que inferência",
            "Treinamento ajusta o modelo com dados; inferência usa o modelo para gerar respostas",
            "Inferência acontece antes do treinamento",
            "Não há diferença, são a mesma coisa"
        ],
        correct: [1],
        explanation: "Treinamento: caro, pontual, consome GPUs, ajusta pesos do modelo. Inferência: mais barato por request, contínuo, usa modelo pronto para responder ao usuário.",
        topic: "training-inference",
        domain: "ai-ml"
    },
    {
        id: 'aiml_006',
        question: "Um laboratório quer evitar o custo de criar modelos do zero e deseja adaptar modelos já existentes para novas aplicações. Qual método de aprendizado atende melhor?",
        options: [
            "Aprendizado por transferência",
            "Aprendizado não supervisionado",
            "Aumentar o número de épocas de treinamento",
            "Diminuir o número de épocas"
        ],
        correct: [0],
        explanation: "Aprendizado por transferência reaproveita conhecimento de um modelo pré-treinado e o adapta para nova tarefa com menos dados e custo. Base dos foundation models.",
        topic: "ml-types",
        domain: "ai-ml"
    },
    {
        id: 'aiml_007',
        question: "Qual tipo de rede neural é mais adequado para processar imagens e detectar objetos visuais?",
        options: [
            "Redes Recorrentes (RNN)",
            "Redes Convolucionais (CNN)",
            "Redes Feedforward simples",
            "Transformers"
        ],
        correct: [1],
        explanation: "CNNs (Convolutional Neural Networks) são especializadas em dados com estrutura espacial como imagens. Detectam padrões visuais (bordas, texturas, objetos) através de filtros convolucionais.",
        topic: "neural-networks",
        domain: "ai-ml"
    },
    {
        id: 'aiml_008',
        question: "Uma empresa de saúde precisa treinar um modelo com dados de pacientes distribuídos em vários hospitais, mas regulações impedem centralizar os dados. Qual abordagem usar?",
        options: [
            "Aprendizado supervisionado centralizado",
            "Aprendizado federado",
            "Aprendizado não supervisionado",
            "Aprendizado por reforço"
        ],
        correct: [1],
        explanation: "Aprendizado federado treina o modelo de forma distribuída — cada hospital treina localmente e envia apenas atualizações do modelo (não os dados). Preserva privacidade e atende regulações.",
        topic: "ml-types",
        domain: "ai-ml"
    },
    {
        id: 'aiml_009',
        question: "Qual serviço AWS é usado para rotulagem de dados em escala, combinando trabalho humano com automação?",
        options: [
            "Amazon Rekognition",
            "Amazon SageMaker Ground Truth",
            "Amazon Comprehend",
            "Amazon Mechanical Turk apenas"
        ],
        correct: [1],
        explanation: "SageMaker Ground Truth é o serviço gerenciado para construção de datasets rotulados. Combina rotulagem humana (equipes próprias ou Mechanical Turk) com automação para reduzir custo.",
        topic: "aws-services",
        domain: "ai-ml"
    },
    {
        id: 'aiml_010',
        question: "Qual é a diferença entre um modelo e um algoritmo em Machine Learning?",
        options: [
            "São a mesma coisa",
            "O algoritmo é o método de treinamento; o modelo é o resultado após o treinamento",
            "O modelo é o método; o algoritmo é o resultado",
            "Algoritmo é usado apenas em Deep Learning"
        ],
        correct: [1],
        explanation: "Algoritmo = conjunto de passos que define como treinar (método). Modelo = resultado matemático do treinamento, capaz de fazer previsões. O algoritmo produz o modelo.",
        topic: "concepts",
        domain: "ai-ml"
    },
    {
        id: 'aiml_011',
        question: "Uma empresa quer detectar transações fraudulentas em tempo real. Tem histórico de transações rotuladas como 'fraude' ou 'legítima'. Qual tipo de aprendizado usar?",
        options: [
            "Aprendizado não supervisionado",
            "Aprendizado supervisionado (classificação)",
            "Aprendizado por reforço",
            "Aprendizado federado"
        ],
        correct: [1],
        explanation: "Com dados rotulados (fraude/legítima), aprendizado supervisionado de classificação é ideal. O modelo aprende padrões de fraude a partir dos exemplos rotulados.",
        topic: "ml-types",
        domain: "ai-ml"
    },
    {
        id: 'aiml_012',
        question: "Qual arquitetura de rede neural substituiu as RNNs para processamento de linguagem natural e é a base dos LLMs modernos?",
        options: [
            "CNN (Convolutional Neural Network)",
            "Transformer",
            "GAN (Generative Adversarial Network)",
            "Autoencoder"
        ],
        correct: [1],
        explanation: "Transformers (2017) resolveram limitações das RNNs: processamento paralelo, mecanismo de atenção para capturar contexto longo. Base de GPT, Claude, Llama e todos os LLMs modernos.",
        topic: "neural-networks",
        domain: "ai-ml"
    },
    {
        id: 'aiml_013',
        question: "Qual serviço AWS permite treinar, ajustar e implantar modelos de Machine Learning com infraestrutura gerenciada?",
        options: [
            "Amazon Bedrock",
            "Amazon SageMaker",
            "AWS Lambda",
            "Amazon Comprehend"
        ],
        correct: [1],
        explanation: "SageMaker é a plataforma completa de ML da AWS: notebooks para experimentação, training jobs com GPUs gerenciadas, endpoints para inferência, e pipelines para MLOps.",
        topic: "aws-services",
        domain: "ai-ml"
    },
    {
        id: 'aiml_014',
        question: "Uma empresa quer prever o preço de imóveis baseado em características como área, localização e número de quartos. Qual tipo de problema de ML é esse?",
        options: [
            "Classificação",
            "Regressão",
            "Clustering",
            "Detecção de anomalias"
        ],
        correct: [1],
        explanation: "Regressão prevê valores numéricos contínuos (preço). Classificação prevê categorias discretas. Ambos são aprendizado supervisionado, mas regressão = output numérico.",
        topic: "ml-types",
        domain: "ai-ml"
    },
    {
        id: 'aiml_015',
        question: "O que caracteriza o Deep Learning em relação ao Machine Learning tradicional?",
        options: [
            "Usa menos dados para treinar",
            "Usa redes neurais com múltiplas camadas que aprendem representações complexas automaticamente",
            "Não precisa de poder computacional",
            "Funciona apenas com dados estruturados"
        ],
        correct: [1],
        explanation: "Deep Learning usa redes neurais profundas (múltiplas camadas ocultas) que aprendem representações hierárquicas dos dados automaticamente. Exige mais dados e GPUs, mas captura padrões complexos.",
        topic: "hierarchy",
        domain: "ai-ml"
    },
    {
        id: 'aiml_016',
        question: "Qual é o principal mecanismo que torna os Transformers superiores às RNNs para textos longos?",
        options: [
            "Usam menos memória",
            "Mecanismo de atenção — pondera todas as palavras simultaneamente independente da distância",
            "Processam texto caractere por caractere",
            "Não precisam de treinamento"
        ],
        correct: [1],
        explanation: "O mecanismo de atenção permite ao Transformer considerar todas as palavras do texto simultaneamente, ponderando quais são mais relevantes. RNNs processam sequencialmente e 'esquecem' contexto distante.",
        topic: "neural-networks",
        domain: "ai-ml"
    },
    {
        id: 'aiml_017',
        question: "Uma empresa quer usar ML mas não tem cientistas de dados. Precisa de uma ferramenta visual no-code para criar modelos. Qual serviço AWS?",
        options: [
            "SageMaker Studio",
            "SageMaker Canvas",
            "Amazon Bedrock",
            "AWS Glue"
        ],
        correct: [1],
        explanation: "SageMaker Canvas é a interface visual no-code para business analysts criarem modelos ML sem programação. Importa dados, treina modelos e faz previsões com interface drag-and-drop.",
        topic: "aws-services",
        domain: "ai-ml"
    },
    {
        id: 'aiml_018',
        question: "Qual é a diferença entre IA Generativa e IA tradicional (discriminativa)?",
        options: [
            "Não há diferença",
            "IA tradicional classifica/prevê; IA Generativa cria conteúdo novo (texto, imagem, código)",
            "IA Generativa é mais simples",
            "IA tradicional cria conteúdo, IA Generativa classifica"
        ],
        correct: [1],
        explanation: "IA discriminativa: classifica, prevê, identifica (ex: spam/não-spam). IA Generativa: cria conteúdo novo — texto, imagens, áudio, código, dados sintéticos. Baseada em Deep Learning de grande escala.",
        topic: "hierarchy",
        domain: "ai-ml"
    },
    {
        id: 'aiml_019',
        question: "Um instituto de pesquisa tem grande quantidade de dados genéticos não rotulados e quer identificar agrupamentos em perfis genéticos. Qual metodologia é mais adequada?",
        options: [
            "Aprendizagem supervisionada",
            "Aprendizagem não supervisionada",
            "Aprendizagem por reforço (RLHF)",
            "Aprendizagem por reforço"
        ],
        correct: [1],
        explanation: "Dados não rotulados + objetivo de encontrar agrupamentos = aprendizado não supervisionado (clustering). O modelo descobre padrões e grupos sem precisar de respostas corretas.",
        topic: "ml-types",
        domain: "ai-ml"
    },
    {
        id: 'aiml_020',
        question: "Quais são as características do treinamento de modelos de IA comparado à inferência?",
        options: [
            "Treinamento é barato e rápido; inferência é cara e lenta",
            "Treinamento é caro, pontual e usa GPUs; inferência é mais barata, contínua e em tempo real",
            "Ambos têm o mesmo custo",
            "Inferência consome mais recursos que treinamento"
        ],
        correct: [1],
        explanation: "Treinamento: custo alto, computação intensiva (GPUs), horas/dias/semanas, acontece uma vez. Inferência: custo menor por request, contínua, tempo real, é quando o usuário interage com a IA.",
        topic: "training-inference",
        domain: "ai-ml"
    }
];

window.aiMlQuestions = aiMlQuestions;


// AI & ML Fundamentals - Lote 2 (questões 21-39)
const aiMlQuestions2 = [
    {
        id: 'aiml_021',
        question: "Uma empresa quer usar Amazon Rekognition para detectar conteúdo impróprio em imagens enviadas por usuários. Qual tipo de IA está sendo aplicado?",
        options: [
            "IA Generativa",
            "Visão computacional (Computer Vision)",
            "Processamento de linguagem natural",
            "Aprendizado por reforço"
        ],
        correct: [1],
        explanation: "Rekognition usa visão computacional (subárea de IA/Deep Learning) para analisar imagens: detectar objetos, faces, texto, conteúdo impróprio. Não gera conteúdo — classifica.",
        topic: "aws-services",
        domain: "ai-ml"
    },
    {
        id: 'aiml_022',
        question: "Qual serviço AWS analisa texto para extrair sentimento, entidades, idioma e tópicos automaticamente?",
        options: [
            "Amazon Textract",
            "Amazon Comprehend",
            "Amazon Translate",
            "Amazon Polly"
        ],
        correct: [1],
        explanation: "Comprehend é o serviço de NLP (Natural Language Processing) da AWS. Extrai sentimento, entidades (nomes, datas), idioma, key phrases e tópicos de texto. Sem necessidade de treinar modelo.",
        topic: "aws-services",
        domain: "ai-ml"
    },
    {
        id: 'aiml_023',
        question: "Uma empresa precisa extrair texto e dados estruturados de documentos escaneados (PDFs, formulários). Qual serviço AWS usar?",
        options: [
            "Amazon Comprehend",
            "Amazon Textract",
            "Amazon Rekognition",
            "Amazon Translate"
        ],
        correct: [1],
        explanation: "Textract extrai texto, tabelas e formulários de documentos escaneados usando ML. Vai além de OCR simples — entende a estrutura do documento (campos, valores, tabelas).",
        topic: "aws-services",
        domain: "ai-ml"
    },
    {
        id: 'aiml_024',
        question: "Qual é a principal vantagem de usar um Foundation Model pré-treinado ao invés de treinar um modelo do zero?",
        options: [
            "Foundation Models são sempre gratuitos",
            "Reduz drasticamente tempo, custo e dados necessários — aproveita conhecimento já aprendido",
            "Foundation Models não precisam de dados",
            "São mais simples que modelos tradicionais"
        ],
        correct: [1],
        explanation: "Foundation Models foram pré-treinados com bilhões de dados. Usar transfer learning/fine-tuning sobre eles requer muito menos dados e compute do que treinar do zero. Economia de meses e milhões.",
        topic: "concepts",
        domain: "ai-ml"
    },
    {
        id: 'aiml_025',
        question: "O que é overfitting em Machine Learning e como identificá-lo?",
        options: [
            "Modelo performa bem em todos os dados",
            "Modelo memoriza dados de treino mas falha em dados novos — alta acurácia no treino, baixa no teste",
            "Modelo é muito simples para os dados",
            "Modelo treina muito rápido"
        ],
        correct: [1],
        explanation: "Overfitting: modelo 'decora' os dados de treino ao invés de aprender padrões generalizáveis. Sintoma: acurácia alta no treino, baixa no teste/validação. Solução: mais dados, regularização, early stopping.",
        topic: "concepts",
        domain: "ai-ml"
    },
    {
        id: 'aiml_026',
        question: "Uma empresa quer criar um chatbot que entenda linguagem natural e responda perguntas dos clientes. Qual serviço AWS é específico para isso?",
        options: [
            "Amazon Polly",
            "Amazon Lex",
            "Amazon Translate",
            "Amazon Transcribe"
        ],
        correct: [1],
        explanation: "Amazon Lex é o serviço para construir interfaces conversacionais (chatbots) com NLU (Natural Language Understanding). Mesmo motor do Alexa. Entende intenções e extrai slots de conversas.",
        topic: "aws-services",
        domain: "ai-ml"
    },
    {
        id: 'aiml_027',
        question: "Qual métrica é mais importante para avaliar um modelo de classificação binária com classes desbalanceadas (ex: 99% legítimo, 1% fraude)?",
        options: [
            "Acurácia (accuracy)",
            "Precisão e Recall (F1-score)",
            "Tempo de treinamento",
            "Número de parâmetros"
        ],
        correct: [1],
        explanation: "Com classes desbalanceadas, acurácia é enganosa (prever sempre 'legítimo' dá 99%). F1-score combina Precisão (falsos positivos) e Recall (falsos negativos) — métrica mais relevante para fraude.",
        topic: "concepts",
        domain: "ai-ml"
    },
    {
        id: 'aiml_028',
        question: "Qual serviço AWS converte texto em fala natural (text-to-speech)?",
        options: [
            "Amazon Transcribe",
            "Amazon Polly",
            "Amazon Comprehend",
            "Amazon Lex"
        ],
        correct: [1],
        explanation: "Amazon Polly converte texto em fala realista em múltiplos idiomas e vozes. Transcribe faz o inverso (speech-to-text). Polly = TTS, Transcribe = STT.",
        topic: "aws-services",
        domain: "ai-ml"
    },
    {
        id: 'aiml_029',
        question: "Uma empresa quer recomendar produtos personalizados para cada usuário baseado em histórico de compras. Qual serviço AWS é especializado nisso?",
        options: [
            "Amazon Comprehend",
            "Amazon Personalize",
            "Amazon Forecast",
            "Amazon Kendra"
        ],
        correct: [1],
        explanation: "Amazon Personalize cria sistemas de recomendação personalizados usando ML. Ingere dados de interação (compras, cliques) e gera recomendações em tempo real sem precisar de expertise em ML.",
        topic: "aws-services",
        domain: "ai-ml"
    },
    {
        id: 'aiml_030',
        question: "O que é underfitting em Machine Learning?",
        options: [
            "Modelo é muito complexo para os dados",
            "Modelo é muito simples e não captura padrões — baixa acurácia tanto no treino quanto no teste",
            "Modelo treina por tempo demais",
            "Modelo usa dados demais"
        ],
        correct: [1],
        explanation: "Underfitting: modelo muito simples para capturar a complexidade dos dados. Resultado: performance ruim em treino E teste. Solução: modelo mais complexo, mais features, mais treinamento.",
        topic: "concepts",
        domain: "ai-ml"
    },
    {
        id: 'aiml_031',
        question: "Qual é a função de um dataset de validação no processo de treinamento de ML?",
        options: [
            "Treinar o modelo",
            "Ajustar hiperparâmetros e detectar overfitting durante o treinamento",
            "Testar o modelo final em produção",
            "Rotular dados automaticamente"
        ],
        correct: [1],
        explanation: "Dataset de validação: usado durante treinamento para ajustar hiperparâmetros e detectar overfitting. Diferente do teste (avaliação final) e treino (ajuste de pesos). Split típico: 70/15/15.",
        topic: "concepts",
        domain: "ai-ml"
    },
    {
        id: 'aiml_032',
        question: "Uma empresa quer prever demanda de produtos para os próximos 3 meses baseado em dados históricos de vendas. Qual serviço AWS?",
        options: [
            "Amazon Personalize",
            "Amazon Forecast",
            "Amazon Comprehend",
            "Amazon SageMaker apenas"
        ],
        correct: [1],
        explanation: "Amazon Forecast usa ML para previsão de séries temporais (demanda, receita, inventário). Ingere dados históricos e gera previsões sem necessidade de expertise em ML.",
        topic: "aws-services",
        domain: "ai-ml"
    },
    {
        id: 'aiml_033',
        question: "Qual é a diferença entre classificação e regressão em aprendizado supervisionado?",
        options: [
            "Classificação usa mais dados",
            "Classificação prevê categorias discretas; regressão prevê valores numéricos contínuos",
            "Regressão é mais precisa",
            "Não há diferença"
        ],
        correct: [1],
        explanation: "Classificação: output é categoria (spam/não-spam, gato/cachorro). Regressão: output é número contínuo (preço, temperatura, idade). Ambos são supervisionados (precisam de rótulos).",
        topic: "ml-types",
        domain: "ai-ml"
    },
    {
        id: 'aiml_034',
        question: "O que é feature engineering em Machine Learning?",
        options: [
            "Treinar o modelo por mais tempo",
            "Processo de selecionar, transformar e criar variáveis de entrada que melhoram a performance do modelo",
            "Aumentar o tamanho do modelo",
            "Rotular dados manualmente"
        ],
        correct: [1],
        explanation: "Feature engineering: transformar dados brutos em features úteis para o modelo. Ex: extrair dia da semana de uma data, normalizar valores, criar combinações. Impacta diretamente a qualidade do modelo.",
        topic: "concepts",
        domain: "ai-ml"
    },
    {
        id: 'aiml_035',
        question: "Qual serviço AWS converte fala em texto (speech-to-text) para transcrição de áudio?",
        options: [
            "Amazon Polly",
            "Amazon Transcribe",
            "Amazon Comprehend",
            "Amazon Lex"
        ],
        correct: [1],
        explanation: "Amazon Transcribe converte áudio em texto (STT). Suporta múltiplos idiomas, speaker identification, vocabulário customizado. Polly faz o inverso (TTS).",
        topic: "aws-services",
        domain: "ai-ml"
    },
    {
        id: 'aiml_036',
        question: "Uma empresa quer detectar anomalias em dados de sensores IoT sem ter exemplos de falhas rotulados. Qual abordagem de ML?",
        options: [
            "Classificação supervisionada",
            "Detecção de anomalias com aprendizado não supervisionado",
            "Regressão linear",
            "Aprendizado por reforço"
        ],
        correct: [1],
        explanation: "Sem rótulos de falha, usa-se detecção de anomalias não supervisionada. O modelo aprende o padrão 'normal' e identifica desvios. Serviço AWS: Amazon Lookout for Equipment.",
        topic: "ml-types",
        domain: "ai-ml"
    },
    {
        id: 'aiml_037',
        question: "Qual é o papel do Amazon SageMaker Clarify?",
        options: [
            "Treinar modelos mais rápido",
            "Detectar bias em dados e modelos + fornecer explicabilidade das previsões",
            "Rotular dados automaticamente",
            "Fazer deploy de modelos"
        ],
        correct: [1],
        explanation: "SageMaker Clarify: detecta viés (bias) nos dados de treinamento e nas previsões do modelo. Também fornece explicabilidade (feature importance) — quais features influenciaram cada previsão.",
        topic: "aws-services",
        domain: "ai-ml"
    },
    {
        id: 'aiml_038',
        question: "O que diferencia dados estruturados de dados não estruturados no contexto de IA?",
        options: [
            "Dados estruturados são maiores",
            "Estruturados são tabulares (SQL); não estruturados são texto, imagem, áudio (precisam de embeddings para análise)",
            "Não estruturados são mais fáceis de processar",
            "Dados estruturados não podem ser usados em ML"
        ],
        correct: [1],
        explanation: "Estruturados: tabelas, linhas/colunas, SQL (fácil para ML clássico). Não estruturados: texto, imagem, áudio, vídeo (maioria dos dados do mundo). Precisam de embeddings/deep learning para análise.",
        topic: "concepts",
        domain: "ai-ml"
    },
    {
        id: 'aiml_039',
        question: "Uma empresa quer traduzir automaticamente conteúdo do site para 10 idiomas. Qual serviço AWS?",
        options: [
            "Amazon Comprehend",
            "Amazon Translate",
            "Amazon Polly",
            "Amazon Transcribe"
        ],
        correct: [1],
        explanation: "Amazon Translate é o serviço de tradução neural da AWS. Traduz texto entre idiomas com qualidade de ML. Suporta tradução em tempo real e em batch para grandes volumes.",
        topic: "aws-services",
        domain: "ai-ml"
    }
];

aiMlQuestions.push(...aiMlQuestions2);
