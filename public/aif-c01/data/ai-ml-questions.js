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
        question: "Qual algoritmo de aprendizado não supervisionado é amplamente utilizado para clustering (agrupar dados similares)?",
        options: [
            "K-NN",
            "K-Means",
            "XGBoost",
            "Regressão Linear"
        ],
        correct: [1],
        explanation: "K-Means é o algoritmo padrão de clustering (não supervisionado). Divide dados em K grupos por similaridade. K-NN é classificação (supervisionado). Não confundir!",
        topic: "algorithms",
        domain: "ai-ml"
    },
    {
        id: 'aiml_029',
        question: "Qual é a diferença entre K-NN e K-Means?",
        options: [
            "São o mesmo algoritmo com nomes diferentes",
            "K-NN é classificação (supervisionado, usa vizinhos); K-Means é clustering (não supervisionado, agrupa por centróides)",
            "K-Means é supervisionado e K-NN não supervisionado",
            "Ambos são algoritmos de regressão"
        ],
        correct: [1],
        explanation: "K-NN: classifica baseado nos K vizinhos mais próximos (precisa de rótulos). K-Means: agrupa dados em K clusters por similaridade (sem rótulos). Confusão comum no exame!",
        topic: "algorithms",
        domain: "ai-ml"
    },
    {
        id: 'aiml_030',
        question: "O MSE (Mean Squared Error) calcula:",
        options: [
            "A quantidade de dados categóricos",
            "A média dos erros ao quadrado entre valor previsto e valor real",
            "A precisão do modelo de classificação",
            "O número de clusters encontrados"
        ],
        correct: [1],
        explanation: "MSE = média dos (previsto - real)². Penaliza erros grandes (elevados ao quadrado). Usado em regressão. Quanto menor, melhor. Unidade ao quadrado (não interpretável diretamente).",
        topic: "metrics",
        domain: "ai-ml"
    },
    {
        id: 'aiml_031',
        question: "O RMSE é utilizado principalmente em:",
        options: [
            "Problemas de clustering",
            "Problemas de regressão (prever valores numéricos)",
            "Redes de computadores",
            "Classificação binária"
        ],
        correct: [1],
        explanation: "RMSE = raiz quadrada do MSE. Volta à unidade original dos dados. Interpretação: 'em média, o modelo erra X unidades'. Usado em regressão para comunicar magnitude do erro.",
        topic: "metrics",
        domain: "ai-ml"
    },
    {
        id: 'aiml_032',
        question: "O que o R² (coeficiente de determinação) mede?",
        options: [
            "O erro absoluto do modelo",
            "Quanto da variância dos dados o modelo consegue explicar (0 a 1)",
            "A velocidade de treinamento",
            "O número de features usadas"
        ],
        correct: [1],
        explanation: "R² mede poder explicativo: 1.0 = perfeito, 0.8 = muito bom, 0.5 = razoável, 0 = igual chutar a média, negativo = pior que chutar. Complementa MSE/RMSE.",
        topic: "metrics",
        domain: "ai-ml"
    },
    {
        id: 'aiml_033',
        question: "Uma organização de saúde precisa realizar inferência em grandes conjuntos de dados (vários GB) sem necessidade de resposta imediata. Qual tipo de inferência SageMaker usar?",
        options: [
            "Inferência em tempo real",
            "Inferência assíncrona",
            "Transformação em lote (Batch Transform)",
            "Inferência serverless"
        ],
        correct: [2],
        explanation: "Batch Transform: processa grandes volumes de uma vez, sem resposta imediata. Ideal para scoring noturno, relatórios, datasets grandes. Recursos alocados apenas durante o job.",
        topic: "inference-types",
        domain: "ai-ml"
    },
    {
        id: 'aiml_034',
        question: "Uma instituição lida com arquivos de até 1GB e tempos de processamento de 1 hora, mas precisa de resultados quase em tempo real. Qual inferência SageMaker?",
        options: [
            "Transformação em lote",
            "Inferência em tempo real",
            "Inferência assíncrona",
            "Inferência serverless"
        ],
        correct: [2],
        explanation: "Inferência assíncrona: payloads grandes, processamento longo, mas resultado entregue quando pronto (sem bloqueio). Entre batch (sem urgência) e real-time (resposta imediata).",
        topic: "inference-types",
        domain: "ai-ml"
    },
    {
        id: 'aiml_035',
        question: "Uma instituição acadêmica quer treinar seu próprio LLM focando em reduzir custo e impacto ambiental. Qual instância EC2 é mais indicada?",
        options: [
            "Amazon EC2 série C (compute)",
            "Amazon EC2 série P (GPU NVIDIA)",
            "Amazon EC2 série Trn (Trainium)",
            "Amazon EC2 série G (graphics)"
        ],
        correct: [2],
        explanation: "EC2 Trainium (Trn): chip AWS otimizado para treinamento de deep learning. Custo competitivo e eficiência energética superior para treinar LLMs. Trainium = treinar.",
        topic: "infrastructure",
        domain: "ai-ml"
    },
    {
        id: 'aiml_036',
        question: "Qual instância EC2 é otimizada para servir modelos de IA em produção com baixa latência e alto volume de previsões?",
        options: [
            "EC2 série Trn (Trainium)",
            "EC2 série Inf (Inferentia)",
            "EC2 série M (general purpose)",
            "EC2 série T (burstable)"
        ],
        correct: [1],
        explanation: "EC2 Inferentia (Inf): chip AWS otimizado para inferência. Baixa latência, alto throughput, custo por inferência reduzido. Regra: Trainium = treinar, Inferentia = inferir (servir).",
        topic: "infrastructure",
        domain: "ai-ml"
    },
    {
        id: 'aiml_037',
        question: "Um analista precisa apresentar um relatório sobre modelo de ML garantindo transparência e explicabilidade para gestores. O que deve incluir?",
        options: [
            "Código fonte do treinamento",
            "Gráficos de Dependência Parcial (PDPs) mostrando como variáveis influenciam previsões",
            "Dados de amostra para treinamento",
            "Tabelas de convergência do modelo"
        ],
        correct: [1],
        explanation: "PDPs (Partial Dependence Plots): mostram visualmente como cada variável afeta a previsão. Ferramenta de explicabilidade para modelos caixa-preta. Atende requisitos de transparência e auditoria.",
        topic: "explainability",
        domain: "ai-ml"
    },
    {
        id: 'aiml_038',
        question: "O XGBoost é um algoritmo que combina várias árvores de decisão em sequência. Qual é sua principal vantagem?",
        options: [
            "É o mais simples de implementar",
            "Cada árvore corrige erros das anteriores, resultando em alta precisão para dados tabulares",
            "Funciona apenas com imagens",
            "Não precisa de dados rotulados"
        ],
        correct: [1],
        explanation: "XGBoost (boosting): treina árvores sequencialmente, cada uma focando nos erros da anterior. Alta precisão em dados tabulares. Padrão de mercado para classificação e regressão. Também usado para ranking.",
        topic: "algorithms",
        domain: "ai-ml"
    },
    {
        id: 'aiml_039',
        question: "Qual característica do MSE é verdadeira?",
        options: [
            "Penaliza mais erros grandes (por elevar ao quadrado)",
            "Funciona apenas para clustering",
            "Não utiliza valores numéricos",
            "Mede tempo de resposta do modelo"
        ],
        correct: [0],
        explanation: "MSE eleva erros ao quadrado: erro de 1 = 1, erro de 5 = 25. Erros grandes pesam desproporcionalmente. Útil quando erros grandes são muito piores que erros pequenos. Sensível a outliers.",
        topic: "metrics",
        domain: "ai-ml"
    }
];

aiMlQuestions.push(...aiMlQuestions2);
