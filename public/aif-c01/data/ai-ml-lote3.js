// AIF-C01 AI & ML Fundamentals - Lote 3 (aiml_061 a aiml_080)
// Foco: NLP, Computer Vision, serviços AWS específicos, deployment patterns, edge cases

const aiMlQuestions5 = [
    {
        id: 'aiml_061',
        question: "Uma empresa quer converter áudio de chamadas de suporte em texto para análise. Qual serviço AWS?",
        options: [
            "Amazon Polly",
            "Amazon Transcribe — speech-to-text com suporte a múltiplos idiomas, speaker identification e custom vocabularies",
            "Amazon Translate",
            "Amazon Comprehend"
        ],
        correct: [1],
        explanation: "Transcribe: áudio→texto. Polly: texto→áudio (inverso). Transcribe features: speaker identification (quem falou o quê), custom vocabulary (termos técnicos), auto-punctuation, redaction de PII em áudio.",
        topic: "aws-services",
        domain: "ai-ml",
        difficulty: "easy"
    },
    {
        id: 'aiml_062',
        question: "Uma empresa quer criar um sistema de recomendação de produtos personalizado sem expertise em ML. Qual serviço AWS?",
        options: [
            "Amazon SageMaker (requer ML expertise)",
            "Amazon Personalize — serviço gerenciado de recomendação que treina modelos automaticamente a partir de dados de interação",
            "Amazon Comprehend",
            "Amazon Forecast"
        ],
        correct: [1],
        explanation: "Personalize: importa dados de interação (cliques, compras, views), treina modelos de recomendação automaticamente, serve recomendações via API em real-time. Sem necessidade de expertise ML. Usa mesma tecnologia do Amazon.com.",
        topic: "aws-services",
        domain: "ai-ml",
        difficulty: "easy"
    },
    {
        id: 'aiml_063',
        question: "Uma empresa quer prever demanda de produtos para os próximos 3 meses baseado em dados históricos de vendas. Qual serviço AWS?",
        options: [
            "Amazon Personalize",
            "Amazon Forecast — serviço de previsão de séries temporais que automaticamente seleciona algoritmo e treina modelo",
            "Amazon Rekognition",
            "Amazon Lex"
        ],
        correct: [1],
        explanation: "Forecast: forecasting de séries temporais gerenciado. Importa dados históricos + metadados, testa múltiplos algoritmos (DeepAR+, ARIMA, Prophet), gera previsões com intervalos de confiança. Casos: demanda, inventário, recursos.",
        topic: "aws-services",
        domain: "ai-ml",
        difficulty: "easy"
    },
    {
        id: 'aiml_064',
        question: "O que é 'transfer learning' e por que é fundamental para foundation models?",
        options: [
            "Transferir dados entre servidores",
            "Reaproveitar conhecimento aprendido em uma tarefa para outra — foundation models são pré-treinados em dados massivos e depois adaptados para tarefas específicas",
            "Mover modelo para outra região",
            "Copiar parâmetros entre modelos"
        ],
        correct: [1],
        explanation: "Transfer learning: modelo pré-treinado (ex: bilhões de textos) tem conhecimento geral. Adaptar para tarefa específica (fine-tuning) requer muito menos dados/compute que treinar do zero. É o princípio fundamental dos foundation models.",
        topic: "ml-types",
        domain: "ai-ml",
        difficulty: "medium"
    },
    {
        id: 'aiml_065',
        question: "Uma empresa quer detectar objetos específicos em imagens de câmeras de segurança (capacetes, coletes). Qual serviço AWS permite treinar detecção customizada?",
        options: [
            "Amazon Comprehend",
            "Amazon Rekognition Custom Labels — treina detector de objetos customizado com suas imagens sem expertise em ML",
            "Amazon Textract",
            "Amazon Translate"
        ],
        correct: [1],
        explanation: "Rekognition Custom Labels: upload imagens rotuladas (com bounding boxes), treina modelo de detecção automaticamente. Sem código ML. Casos: detectar EPI, defeitos em produção, objetos específicos do negócio.",
        topic: "aws-services",
        domain: "ai-ml",
        difficulty: "medium"
    },
    {
        id: 'aiml_066',
        question: "Qual é a diferença entre 'labeled data' e 'unlabeled data'?",
        options: [
            "Labeled tem nome de arquivo, unlabeled não",
            "Labeled tem resposta correta associada (ex: email + tag 'spam'). Unlabeled é dado bruto sem resposta — aprendizado supervisionado requer labeled",
            "Não há diferença prática",
            "Unlabeled é mais valioso"
        ],
        correct: [1],
        explanation: "Labeled: dado + resposta (imagem + 'gato', transação + 'fraude'). Unlabeled: apenas dado sem anotação. Supervisionado precisa de labeled. Não-supervisionado usa unlabeled. Semi-supervisionado combina ambos. Rotular é caro (SageMaker Ground Truth ajuda).",
        topic: "concepts",
        domain: "ai-ml",
        difficulty: "easy"
    },
    {
        id: 'aiml_067',
        question: "O que são 'epochs' no treinamento de modelos?",
        options: [
            "Tempo total de treinamento",
            "Uma epoch = uma passagem completa por todos os dados de treino. Mais epochs = mais aprendizado, mas risco de overfitting",
            "Número de features",
            "Tamanho do batch"
        ],
        correct: [1],
        explanation: "Epoch: 1 passagem completa pelo dataset. 10 epochs = modelo viu cada exemplo 10 vezes. Poucas epochs: underfitting. Muitas: overfitting. Early stopping: para quando performance no validation set para de melhorar.",
        topic: "concepts",
        domain: "ai-ml",
        difficulty: "easy"
    },
    {
        id: 'aiml_068',
        question: "O que é 'learning rate' e por que é o hiperparâmetro mais importante?",
        options: [
            "Velocidade do computador",
            "Tamanho do passo de atualização dos pesos — muito alto: não converge (oscila). Muito baixo: converge lentamente ou fica preso em mínimo local",
            "Quantidade de dados",
            "Número de camadas"
        ],
        correct: [1],
        explanation: "Learning rate: quanto os pesos mudam a cada step. Alto (0.1): passos grandes, pode não convergir. Baixo (0.0001): passos pequenos, lento mas estável. Geralmente: começar com 0.001, usar scheduler para reduzir ao longo do treino.",
        topic: "concepts",
        domain: "ai-ml",
        difficulty: "medium"
    },
    {
        id: 'aiml_069',
        question: "Uma empresa quer usar ML para detectar anomalias em logs de servidores (padrões incomuns) sem ter exemplos rotulados de anomalias. Qual abordagem?",
        options: [
            "Classificação supervisionada",
            "Detecção de anomalias não-supervisionada — algoritmos como Isolation Forest, Random Cut Forest (SageMaker) aprendem o 'normal' e identificam desvios",
            "Regressão linear",
            "Clustering K-Means"
        ],
        correct: [1],
        explanation: "Anomaly detection não-supervisionada: aprende padrão 'normal' dos dados e flagra desvios. SageMaker Random Cut Forest: algoritmo built-in otimizado para anomalias em streaming. Não precisa de exemplos rotulados de anomalia.",
        topic: "ml-types",
        domain: "ai-ml",
        difficulty: "medium"
    },
    {
        id: 'aiml_070',
        question: "O que é 'data augmentation' e quando usar?",
        options: [
            "Coletar mais dados reais",
            "Criar variações artificiais dos dados existentes (rotação, flip, crop em imagens; sinônimos em texto) para aumentar dataset e reduzir overfitting",
            "Comprimir dados",
            "Remover dados duplicados"
        ],
        correct: [1],
        explanation: "Data augmentation: gera variantes dos dados existentes. Imagens: rotação, zoom, flip, cor. Texto: sinônimos, paráfrase, back-translation. Benefício: mais dados sem coletar novamente, reduz overfitting, melhora generalização.",
        topic: "pipeline",
        domain: "ai-ml",
        difficulty: "medium"
    },
    {
        id: 'aiml_071',
        question: "O que é SageMaker Pipelines e qual problema resolve?",
        options: [
            "Pipelines de dados ETL",
            "MLOps — orquestra workflow completo de ML (prep dados → treino → avaliação → deploy) de forma automatizada, reproduzível e auditável",
            "Pipelines de CI/CD para código",
            "Streaming de dados"
        ],
        correct: [1],
        explanation: "SageMaker Pipelines: define workflow ML como código (DAG). Cada step é rastreável e reproduzível. Automatiza: retreinamento periódico, avaliação automática, deploy condicional (se métricas atendem threshold). Base de MLOps na AWS.",
        topic: "aws-services",
        domain: "ai-ml",
        difficulty: "medium"
    },
    {
        id: 'aiml_072',
        question: "O que é 'A/B testing' no contexto de deployment de modelos ML?",
        options: [
            "Testar modelo em 2 datasets",
            "Rotear parte do tráfego para modelo novo e parte para modelo atual — comparar performance em produção antes de migrar 100% para o novo",
            "Treinar 2 modelos simultaneamente",
            "Comparar 2 algoritmos no treino"
        ],
        correct: [1],
        explanation: "A/B testing de modelos: production variant no SageMaker. Ex: 90% tráfego → modelo atual, 10% → modelo novo. Comparar métricas de negócio (conversão, satisfação). Se novo é melhor, migrar gradualmente. Reduz risco de deploy.",
        topic: "inference-types",
        domain: "ai-ml",
        difficulty: "medium"
    },
    {
        id: 'aiml_073',
        question: "Qual é a diferença entre SageMaker Serverless Inference e Real-time Inference?",
        options: [
            "São a mesma coisa",
            "Serverless: escala para zero quando não há tráfego (paga apenas por uso). Real-time: endpoint sempre ativo (paga por hora). Serverless para tráfego esporádico",
            "Serverless é mais rápido",
            "Real-time é mais barato"
        ],
        correct: [1],
        explanation: "Serverless Inference: cold start (alguns segundos) mas $0 quando idle. Real-time: sempre pronto (ms latência) mas paga por hora 24/7. Serverless ideal para: dev/test, tráfego imprevisível, baixo volume. Real-time para: produção com SLA.",
        topic: "inference-types",
        domain: "ai-ml",
        difficulty: "medium"
    },
    {
        id: 'aiml_074',
        question: "Uma empresa tem dados tabulares (CSV com features numéricas e categóricas) e quer classificação. Qual algoritmo geralmente funciona melhor?",
        options: [
            "Deep Learning (redes neurais profundas)",
            "Gradient Boosting (XGBoost, LightGBM) — superior para dados tabulares na maioria dos casos práticos",
            "Regressão Linear",
            "K-Means"
        ],
        correct: [1],
        explanation: "Para dados tabulares, Gradient Boosting (XGBoost) supera deep learning na maioria dos benchmarks. Deep Learning brilha em: imagens (CNN), texto (Transformers), áudio, vídeo. Para tabelas: XGBoost/LightGBM é padrão da indústria.",
        topic: "algorithms",
        domain: "ai-ml",
        difficulty: "medium"
    },
    {
        id: 'aiml_075',
        question: "O que é 'Amazon SageMaker Data Wrangler' e para quem é destinado?",
        options: [
            "Ferramenta de visualização de dados",
            "Interface visual para preparação de dados ML — importar, transformar, visualizar e exportar dados para treino sem escrever código",
            "Ferramenta de deploy",
            "Monitoramento de modelos"
        ],
        correct: [1],
        explanation: "Data Wrangler: interface visual para data prep. Importa de múltiplas fontes (S3, Redshift, Athena), 300+ transformações built-in (encoding, scaling, imputation), visualizações, exporta para treino. Para data scientists e analistas.",
        topic: "aws-services",
        domain: "ai-ml",
        difficulty: "easy"
    },
    {
        id: 'aiml_076',
        question: "O que é 'ensemble learning' e por que geralmente melhora performance?",
        options: [
            "Treinar um único modelo grande",
            "Combinar previsões de múltiplos modelos — reduz variância e viés. Tipos: bagging (Random Forest), boosting (XGBoost), stacking",
            "Treinar com múltiplos datasets",
            "Usar múltiplas GPUs"
        ],
        correct: [1],
        explanation: "Ensemble: combinar modelos fracos em modelo forte. Bagging: treina em paralelo, média das previsões (Random Forest). Boosting: treina sequencialmente, cada modelo corrige erros do anterior (XGBoost). Stacking: modelo aprende a combinar outputs de outros.",
        topic: "algorithms",
        domain: "ai-ml",
        difficulty: "hard"
    },
    {
        id: 'aiml_077',
        question: "Uma empresa quer entender automaticamente o sentimento de reviews de produtos (positivo, negativo, neutro, misto). Qual serviço AWS mais simples?",
        options: [
            "Treinar modelo custom no SageMaker",
            "Amazon Comprehend — sentiment analysis built-in, sem treino necessário, funciona em múltiplos idiomas nativamente",
            "Amazon Lex",
            "Amazon Polly"
        ],
        correct: [1],
        explanation: "Comprehend Sentiment Analysis: API simples, sem treino, detecta sentimento (Positive, Negative, Neutral, Mixed) com confidence scores. Suporta múltiplos idiomas. Para classificação customizada (além de sentimento): Comprehend Custom Classification.",
        topic: "aws-services",
        domain: "ai-ml",
        difficulty: "easy"
    },
    {
        id: 'aiml_078',
        question: "O que é 'regularization' em Machine Learning e por que usar?",
        options: [
            "Organizar dados em tabelas regulares",
            "Técnica para prevenir overfitting adicionando penalidade por complexidade do modelo — força modelo a ser mais simples e generalizar melhor",
            "Regular frequência de treinamento",
            "Normalizar outputs"
        ],
        correct: [1],
        explanation: "Regularization: penaliza pesos grandes (L1: soma absoluta, L2: soma quadrática). Modelo é incentivado a usar features realmente importantes e ignorar ruído. L1 pode zerar features (feature selection). Dropout em deep learning também é regularização.",
        topic: "concepts",
        domain: "ai-ml",
        difficulty: "hard"
    },
    {
        id: 'aiml_079',
        question: "Uma empresa quer usar SageMaker mas não quer gerenciar infraestrutura de treino. Qual opção simplifica?",
        options: [
            "EC2 com scripts manuais",
            "SageMaker Training Jobs — gerencia infraestrutura automaticamente: provisiona instâncias, executa treino, salva modelo no S3, desliga instâncias",
            "Lambda para treinar modelos",
            "Fargate com containers ML"
        ],
        correct: [1],
        explanation: "SageMaker Training Jobs: define script + instância type + dados. SageMaker provisiona, configura, executa, salva artefatos, e desliga. Paga apenas pelo tempo de treino. Suporta distributed training, spot instances para economia.",
        topic: "aws-services",
        domain: "ai-ml",
        difficulty: "easy"
    },
    {
        id: 'aiml_080',
        question: "O que é 'MLOps' e por que é importante?",
        options: [
            "Operações de marketing",
            "Práticas de DevOps aplicadas a ML — automatizar pipeline completo (dados→treino→deploy→monitor→retrain) para entregar modelos de forma confiável e reproduzível",
            "Apenas monitoramento",
            "Apenas deploy"
        ],
        correct: [1],
        explanation: "MLOps = DevOps + ML. Inclui: versionamento de dados/modelos, pipelines automatizados, CI/CD para modelos, monitoramento em produção, retraining automático. SageMaker Pipelines + Model Registry + Model Monitor = stack MLOps completa na AWS.",
        topic: "pipeline",
        domain: "ai-ml",
        difficulty: "medium"
    }
];

aiMlQuestions.push(...aiMlQuestions5);
