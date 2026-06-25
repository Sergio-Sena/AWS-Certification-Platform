// AIF-C01 AI & ML Fundamentals - Lote 3 (aiml_051 a aiml_060)
// REESCRITO: Distratores equilibrados + Formato ✅❌📌 + Bias < 30%

const aiMlLote3 = [
    {
        id: 'aiml_051',
        question: "O que é 'cross-validation' e por que é importante?",
        options: [
            "Dividir dados em K partes, treinar K vezes alternando teste — estimativa robusta de performance",
            "Validar modelo em múltiplos servidores de produção para garantir consistência de resultados entre regiões AWS e ambientes",
            "Comparar performance de diferentes algoritmos usando métricas idênticas sobre os mesmos splits de dados para selecionar o melhor",
            "Validar resultados com equipe externa de auditores independentes para atender compliance regulatório do modelo"
        ],
        correct: [0],
        explanation: "✅ K-fold: divide dados em K folds, cada um serve como teste uma vez. Média dos K resultados = estimativa confiável.\n❌ Validação em servidores = deployment testing, não cross-validation.\n❌ Comparar algoritmos = model selection (pode USAR cross-validation, mas não É).\n❌ Validação por auditores = review humano, não técnica estatística.\n📌 Cross-validation = K splits rotativos. Padrão: K=5 ou K=10.",
        topic: "concepts",
        domain: "ai-ml"
    },
    {
        id: 'aiml_052',
        question: "Uma empresa quer usar ML para prever churn (cancelamento) de clientes. Tem dados históricos com features de uso e label (cancelou/não cancelou). Qual tipo de problema?",
        options: [
            "Clustering não supervisionado para agrupar clientes por perfil de risco sem usar labels históricas de cancelamento",
            "Regressão linear multivariada para prever o valor monetário estimado da perda financeira por cada cliente cancelado",
            "Detecção de anomalias para identificar comportamentos estatisticamente atípicos que precedem o cancelamento",
            "Classificação binária supervisionada com dados rotulados (churn/não-churn)"
        ],
        correct: [3],
        explanation: "✅ Classificação binária supervisionada: labels + features → modelo prevê probabilidade de churn.\n❌ Clustering: sem labels, descobre grupos — complementa, mas não é o tipo principal.\n❌ Regressão: prevê VALOR numérico, não categoria.\n❌ Anomalia: detecta outliers sem labels — supervisionado é superior quando há labels.\n📌 Prever SIM/NÃO com dados rotulados = Classificação Binária Supervisionada.",
        topic: "ml-types",
        domain: "ai-ml"
    },
    {
        id: 'aiml_053',
        question: "O que é Amazon SageMaker Autopilot e quando usar?",
        options: [
            "Pipeline de CI/CD automatizado para modelos que orquestra re-treinamento periódico quando data drift é detectado pelo Model Monitor",
            "Serviço de monitoramento contínuo que detecta automaticamente degradação de performance e bias em endpoints de ML em produção",
            "AutoML que explora algoritmos, features e hiperparâmetros retornando o melhor modelo",
            "Serviço de deploy automático com canary deployments e rollback que provisiona endpoints sem configuração manual avançada"
        ],
        correct: [2],
        explanation: "✅ Autopilot: input = dados + target column. Output = leaderboard + notebooks explicativos.\n❌ CI/CD = SageMaker Pipelines.\n❌ Monitoramento = Model Monitor.\n❌ Deploy automático = funcionalidade de endpoints.\n📌 Autopilot = 'dê os dados, eu encontro o melhor modelo'.",
        topic: "aws-services",
        domain: "ai-ml"
    },
    {
        id: 'aiml_054',
        question: "Qual é a diferença entre 'batch inference' e 'real-time inference' no SageMaker?",
        options: [
            "Real-time mantém instâncias GPU dedicadas 24/7 enquanto batch utiliza apenas CPUs spot baratas para processamento econômico",
            "Batch processa em paralelo com throughput superior enquanto real-time processa requests sequencialmente um por vez de forma síncrona",
            "Real-time cobra apenas por request individual enquanto batch cobra por hora de instância durante todo o período de processamento",
            "Batch processa datasets inteiros offline sem endpoint; real-time responde em ms com endpoint ativo"
        ],
        correct: [3],
        explanation: "✅ Batch: dataset inteiro, sem endpoint 24/7, paga só durante job. Real-time: endpoint ativo, ms.\n❌ Ambos podem usar GPUs ou CPUs.\n❌ Real-time é rápido POR REQUEST. Batch é eficiente para VOLUME.\n❌ Invertido: real-time paga por hora de endpoint.\n📌 Urgente = Real-time. Volume sem pressa = Batch. Meio-termo = Assíncrono.",
        topic: "inference-types",
        domain: "ai-ml"
    },
    {
        id: 'aiml_055',
        question: "Uma empresa precisa garantir que seu modelo de crédito não discrimine por gênero ou raça. Qual métrica de fairness usar?",
        options: [
            "Demographic parity e equalized odds — taxas similares entre grupos protegidos",
            "Velocidade de inferência segmentada por grupo demográfico para garantir que nenhum subgrupo espere mais que outro por resposta",
            "Número total de features demográficas incluídas como variáveis de entrada no modelo como indicador de representatividade",
            "Acurácia geral do modelo medida uniformemente sobre todo o dataset completo sem segmentação por nenhum grupo específico"
        ],
        correct: [0],
        explanation: "✅ Demographic parity: mesma taxa positiva por grupo. Equalized odds: mesma taxa TP/FP por grupo.\n❌ Velocidade não é fairness.\n❌ Incluir features demográficas pode CAUSAR bias.\n❌ Acurácia geral esconde disparidades entre subgrupos.\n📌 Fairness ≠ acurácia. SageMaker Clarify calcula fairness metrics.",
        topic: "bias",
        domain: "ai-ml"
    },
    {
        id: 'aiml_056',
        question: "O que é Amazon SageMaker Feature Store e qual problema resolve?",
        options: [
            "Catálogo de datasets públicos e privados organizados por domínio e tipo para facilitar busca e compartilhamento entre equipes de dados",
            "Armazenamento versionado de artefatos de modelo (pesos, configurações, métricas) com capacidade de rollback rápido para versão anterior",
            "Marketplace completo de modelos pré-treinados disponíveis para download, fine-tuning e uso imediato em endpoints de produção",
            "Repositório centralizado de features reutilizáveis — evita re-cálculo e garante consistência treino/inferência"
        ],
        correct: [3],
        explanation: "✅ Feature Store: features transformadas (online + offline). Resolve: re-computação, training-serving skew.\n❌ Catálogo de datasets = Glue Data Catalog / Data Exchange.\n❌ Armazenamento de modelos = Model Registry.\n❌ Marketplace de modelos = JumpStart / Bedrock.\n📌 Feature Store = features PRONTAS. Model Registry = modelos PRONTOS.",
        topic: "aws-services",
        domain: "ai-ml"
    },
    {
        id: 'aiml_057',
        question: "Uma empresa quer treinar modelo com dados sensíveis (saúde) sem centralizar os dados. Qual técnica preserva privacidade?",
        options: [
            "Differential privacy com adição de ruído calibrado aos dados antes de enviá-los ao servidor central para treinamento agregado",
            "Federated Learning — treina localmente em cada instituição, compartilha apenas gradientes",
            "Homomorphic encryption para realizar operações matemáticas diretamente sobre dados criptografados sem necessidade de decriptar",
            "Anonimização K-anonymity com generalização e supressão antes de centralizar num data lake S3 criptografado com KMS"
        ],
        correct: [1],
        explanation: "✅ Federated: modelo vai aos dados. Treina local, envia só updates. Dados nunca saem.\n❌ Differential privacy: dados ruidosos ainda precisam ser centralizados.\n❌ Homomorphic encryption: teoricamente correto mas impraticável (extremamente lento).\n❌ Anonimização + centralização: regulações podem proibir qualquer saída.\n📌 Dados NÃO SAEM + modelo treinado = Federated Learning.",
        topic: "ml-types",
        domain: "ai-ml"
    },
    {
        id: 'aiml_058',
        question: "O que é 'hyperparameter tuning' e como o SageMaker automatiza?",
        options: [
            "Selecionar automaticamente features mais relevantes descartando variáveis com baixa importância usando mutual information ou correlação",
            "Aumentar volume de dados de treinamento progressivamente adicionando augmentation e synthetic data até performance estabilizar",
            "Ajustar pesos internos do modelo via backpropagation e gradient descent para minimizar loss durante cada época de treinamento",
            "Encontrar configs externas ótimas (learning rate, batch size) via múltiplos treinos automáticos paralelos"
        ],
        correct: [3],
        explanation: "✅ Hiperparâmetros: definidos ANTES do treino. SageMaker Tuning: ranges → N treinos → melhor combo.\n❌ Feature selection = etapa de feature engineering, não tuning.\n❌ Aumentar dados = data augmentation, etapa diferente.\n❌ Ajustar pesos = treinamento normal, não hyperparameter tuning.\n📌 Hiperparâmetros = EXTERNOS (você define). Pesos = INTERNOS (modelo aprende).",
        topic: "aws-services",
        domain: "ai-ml"
    },
    {
        id: 'aiml_059',
        question: "Qual é a diferença entre 'precision' e 'recall' em classificação?",
        options: [
            "Precision mede velocidade de previsão em milissegundos por request; recall mede percentual de uso de memória durante inferência",
            "São métricas idênticas com nomes diferentes calculadas por fórmulas equivalentes para validação cruzada e holdout testing final",
            "Precision: dos positivos previstos, quantos corretos. Recall: dos reais positivos, quantos encontrados",
            "Precision é métrica exclusiva de regressão para medir acurácia numérica; recall aplica-se apenas a classificação com múltiplas classes"
        ],
        correct: [2],
        explanation: "✅ Precision = TP/(TP+FP). Recall = TP/(TP+FN). Trade-off entre ambos.\n❌ Não medem velocidade ou memória.\n❌ São métricas DIFERENTES com fórmulas distintas.\n❌ Ambas são para classificação, não regressão.\n📌 Spam: alta Precision. Câncer: alto Recall. F1 = harmônica dos dois.",
        topic: "concepts",
        domain: "ai-ml"
    },
    {
        id: 'aiml_060',
        question: "Uma empresa quer entender POR QUE seu modelo de ML tomou uma decisão específica. Qual técnica de explicabilidade usar?",
        options: [
            "Verificar acurácia geral do modelo como proxy para confiabilidade e usar threshold como indicador de certeza em cada predição",
            "SHAP values mostrando contribuição (+/-) de cada feature para cada previsão individual",
            "Contar frequência de cada feature no dataset de treino para determinar relevância estatística e importância relativa",
            "Analisar pesos brutos das conexões entre camadas da rede neural para inferir quais neurônios dominam a decisão final"
        ],
        correct: [1],
        explanation: "✅ SHAP: para CADA previsão, mostra contribuição de cada feature. SageMaker Clarify calcula.\n❌ Acurácia geral não explica decisões individuais.\n❌ Frequência ≠ importância para o modelo.\n❌ Pesos brutos não são interpretáveis em redes profundas.\n📌 Individual = SHAP/LIME. Global = Feature Importance, PDPs.",
        topic: "concepts",
        domain: "ai-ml"
    }
];

aiMlQuestions.push(...aiMlLote3);
