// AIF-C01 AI & ML Fundamentals - Lote 2 (aiml_041 a aiml_060)
// Foco: Pipeline ML, feature engineering, bias, data preparation, SageMaker avançado, MLOps

const aiMlQuestions4 = [
    {
        id: 'aiml_041',
        question: "Uma empresa quer colocar um modelo de ML em produção. Qual é a ordem correta do pipeline de ML?",
        options: [
            "Deploy → Treino → Coleta de dados → Avaliação",
            "Coleta de dados → Preparação/limpeza → Feature engineering → Treino → Avaliação → Deploy → Monitoramento",
            "Treino → Coleta → Deploy",
            "Feature engineering → Treino → Deploy"
        ],
        correct: [1],
        explanation: "Pipeline ML completo: 1) Coleta de dados, 2) Preparação (limpeza, missing values), 3) Feature engineering, 4) Treino, 5) Avaliação (métricas), 6) Deploy (endpoint), 7) Monitoramento (drift). Cada etapa é iterativa.",
        topic: "pipeline",
        domain: "ai-ml",
        difficulty: "easy"
    },
    {
        id: 'aiml_042',
        question: "O que é 'feature engineering' e por que é importante?",
        options: [
            "Engenharia de software para features de produto",
            "Processo de criar, selecionar e transformar variáveis de input para melhorar performance do modelo — frequentemente a etapa mais impactante do pipeline",
            "Configurar parâmetros do modelo",
            "Coletar mais dados"
        ],
        correct: [1],
        explanation: "Feature engineering: transformar dados brutos em variáveis úteis. Exemplos: extrair hora/dia de timestamp, calcular médias móveis, one-hot encoding de categorias. Boas features > modelo complexo. SageMaker Feature Store armazena features reutilizáveis.",
        topic: "pipeline",
        domain: "ai-ml",
        difficulty: "medium"
    },
    {
        id: 'aiml_043',
        question: "Uma empresa treinou um modelo que tem 99% de acurácia no treino mas 60% em dados novos. O que está acontecendo?",
        options: [
            "Modelo excelente — 99% é ótimo",
            "Overfitting — modelo memorizou dados de treino mas não generaliza. Soluções: mais dados, regularização, cross-validation, reduzir complexidade",
            "Underfitting",
            "Dados de teste corrompidos"
        ],
        correct: [1],
        explanation: "Gap grande (99% treino vs 60% teste) = overfitting clássico. Modelo decorou exemplos ao invés de aprender padrões. Soluções: regularização (L1/L2), dropout, mais dados, early stopping, cross-validation, modelo menos complexo.",
        topic: "concepts",
        domain: "ai-ml",
        difficulty: "easy"
    },
    {
        id: 'aiml_044',
        question: "O que é 'underfitting' e como identificar?",
        options: [
            "Modelo muito preciso",
            "Modelo muito simples que não captura padrões — performance ruim tanto no treino quanto no teste. Solução: modelo mais complexo ou melhores features",
            "Modelo com muitos dados",
            "Modelo treinado demais"
        ],
        correct: [1],
        explanation: "Underfitting: performance ruim em AMBOS treino e teste. Modelo não consegue aprender os padrões. Causas: modelo muito simples, poucas features, treino insuficiente. Solução: modelo mais complexo, mais features, mais épocas de treino.",
        topic: "concepts",
        domain: "ai-ml",
        difficulty: "easy"
    },
    {
        id: 'aiml_045',
        question: "Uma empresa quer detectar fraudes mas apenas 0.1% das transações são fraude. Qual problema de ML isso representa?",
        options: [
            "Dados insuficientes",
            "Classes desbalanceadas — modelo pode atingir 99.9% de acurácia apenas prevendo 'não fraude' para tudo. Métricas adequadas: precision, recall, F1, AUC-ROC",
            "Dados corrompidos",
            "Problema impossível de resolver"
        ],
        correct: [1],
        explanation: "Class imbalance: acurácia é enganosa (prever 'não fraude' sempre = 99.9% acurácia). Usar: F1-score, precision-recall curve, AUC-ROC. Técnicas: SMOTE (oversampling), class weights, threshold tuning, ensemble methods.",
        topic: "concepts",
        domain: "ai-ml",
        difficulty: "medium"
    },
    {
        id: 'aiml_046',
        question: "O que é 'data drift' e 'model drift' em modelos em produção?",
        options: [
            "Migração de dados para outro servidor",
            "Data drift: distribuição dos dados muda ao longo do tempo. Model drift: performance do modelo degrada porque dados novos diferem dos de treino",
            "Erro de rede",
            "Backup de dados"
        ],
        correct: [1],
        explanation: "Data drift: input muda (ex: comportamento de clientes pós-pandemia). Model drift: performance cai. Detectar: SageMaker Model Monitor compara distribuição de dados em produção vs treino. Solução: retreinar periodicamente com dados recentes.",
        topic: "monitoring",
        domain: "ai-ml",
        difficulty: "medium"
    },
    {
        id: 'aiml_047',
        question: "Qual serviço AWS monitora modelos de ML em produção para detectar degradação de qualidade e data drift?",
        options: [
            "Amazon CloudWatch apenas",
            "Amazon SageMaker Model Monitor — detecta data drift, concept drift, bias drift e feature attribution drift automaticamente",
            "AWS Config",
            "Amazon GuardDuty"
        ],
        correct: [1],
        explanation: "SageMaker Model Monitor: agendável, compara dados de inferência com baseline do treino. Detecta: data quality issues, data drift, bias drift, feature attribution drift. Alertas via CloudWatch. Automatiza o que seria inspeção manual.",
        topic: "monitoring",
        domain: "ai-ml",
        difficulty: "medium"
    },
    {
        id: 'aiml_048',
        question: "O que é 'bias' em Machine Learning e quais tipos existem?",
        options: [
            "Apenas preconceito racial",
            "Viés sistemático que leva a resultados injustos. Tipos: sampling bias (dados não representativos), measurement bias (métricas inadequadas), algorithmic bias (modelo amplifica desigualdades)",
            "Erro matemático",
            "Bug de software"
        ],
        correct: [1],
        explanation: "Bias em ML: sampling (dados não representam população), label (rótulos humanos tendenciosos), selection (subgrupos excluídos), confirmation (dados confirmam preconceitos). SageMaker Clarify detecta e mede bias em dados e modelos.",
        topic: "bias",
        domain: "ai-ml",
        difficulty: "medium"
    },
    {
        id: 'aiml_049',
        question: "Qual serviço AWS ajuda a detectar e mitigar viés (bias) em dados e modelos de ML?",
        options: [
            "Amazon Rekognition",
            "Amazon SageMaker Clarify — detecta bias em dados de treino e previsões do modelo, e fornece explicabilidade (feature importance)",
            "AWS IAM",
            "Amazon Comprehend"
        ],
        correct: [1],
        explanation: "SageMaker Clarify: 1) Pre-training bias (detecta bias nos dados antes de treinar), 2) Post-training bias (detecta bias nas previsões), 3) Explainability (SHAP values — quais features influenciaram cada previsão). Essencial para IA responsável.",
        topic: "bias",
        domain: "ai-ml",
        difficulty: "easy"
    },
    {
        id: 'aiml_050',
        question: "Uma empresa tem dados com 30% de valores faltantes (missing values). Qual é a MELHOR abordagem antes de treinar?",
        options: [
            "Deletar todas as linhas com valores faltantes",
            "Analisar padrão dos missing values e escolher: imputação (média/mediana/moda), modelo preditivo, ou remoção — depende do contexto e % faltante",
            "Preencher tudo com zero",
            "Ignorar e treinar assim"
        ],
        correct: [1],
        explanation: "Missing values: não há solução universal. Analisar se é MCAR/MAR/MNAR. Opções: imputação simples (média), imputação avançada (KNN, modelo), ou remoção (se poucos). 30% é alto — imputação provavelmente necessária. SageMaker Data Wrangler ajuda.",
        topic: "pipeline",
        domain: "ai-ml",
        difficulty: "medium"
    },
    {
        id: 'aiml_051',
        question: "O que é 'cross-validation' e por que é importante?",
        options: [
            "Validar modelo em múltiplos servidores",
            "Dividir dados em K partes, treinar K vezes usando K-1 partes e testar na restante — fornece estimativa mais robusta de performance que split único",
            "Validar com equipe externa",
            "Comparar modelos diferentes"
        ],
        correct: [1],
        explanation: "K-fold cross-validation: divide dados em K folds. Cada fold serve como teste uma vez. Média dos K resultados = estimativa robusta. Evita resultado otimista/pessimista de um split aleatório único. Padrão: K=5 ou K=10.",
        topic: "concepts",
        domain: "ai-ml",
        difficulty: "medium"
    },
    {
        id: 'aiml_052',
        question: "Uma empresa quer usar ML para prever churn (cancelamento) de clientes. Tem dados históricos com features de uso e label (cancelou/não cancelou). Qual tipo de problema?",
        options: [
            "Clustering",
            "Classificação binária supervisionada — prever classe (churn/não-churn) a partir de features com dados rotulados",
            "Regressão",
            "Detecção de anomalias"
        ],
        correct: [1],
        explanation: "Churn prediction: dados rotulados (cancelou=1, ficou=0) + features (uso, tempo, reclamações). Classificação binária supervisionada. Métricas: precision (evitar falsos positivos), recall (não perder churners reais), AUC-ROC.",
        topic: "ml-types",
        domain: "ai-ml",
        difficulty: "easy"
    },
    {
        id: 'aiml_053',
        question: "O que é Amazon SageMaker Autopilot e quando usar?",
        options: [
            "Piloto automático para aviões",
            "AutoML — automaticamente explora algoritmos, faz feature engineering e treina múltiplos modelos para encontrar o melhor. Ideal quando não tem cientista de dados dedicado",
            "Serviço de deploy automático",
            "Monitoramento automático"
        ],
        correct: [1],
        explanation: "Autopilot (AutoML): dê os dados rotulados, ele testa múltiplos algoritmos, faz feature engineering, otimiza hiperparâmetros, e retorna leaderboard com melhores modelos. Também gera notebooks explicando o que fez. Democratiza ML.",
        topic: "aws-services",
        domain: "ai-ml",
        difficulty: "easy"
    },
    {
        id: 'aiml_054',
        question: "Qual é a diferença entre 'batch inference' e 'real-time inference' no SageMaker?",
        options: [
            "São a mesma coisa",
            "Real-time: endpoint sempre ativo, resposta imediata (ms). Batch: processa dataset inteiro de uma vez, sem endpoint permanente — mais barato para grandes volumes sem urgência",
            "Batch é mais rápido",
            "Real-time é mais barato"
        ],
        correct: [1],
        explanation: "Real-time: SageMaker endpoint 24/7, resposta em ms, paga por hora de uptime. Batch Transform: processa arquivo inteiro, recursos alocados apenas durante job, resultado em minutos/horas. Usar batch para: scoring noturno, relatórios, backlog.",
        topic: "inference-types",
        domain: "ai-ml",
        difficulty: "easy"
    },
    {
        id: 'aiml_055',
        question: "Uma empresa precisa garantir que seu modelo de crédito não discrimine por gênero ou raça. Qual métrica de fairness usar?",
        options: [
            "Apenas acurácia geral",
            "Demographic parity (taxa de aprovação similar entre grupos), equalized odds (taxa de erro similar entre grupos), disparate impact ratio",
            "Apenas velocidade de inferência",
            "Número de features usadas"
        ],
        correct: [1],
        explanation: "Fairness metrics: Demographic parity (mesma taxa de resultado positivo por grupo), Equalized odds (mesma taxa de TP/FP por grupo), Disparate Impact (ratio entre grupos < threshold). SageMaker Clarify calcula automaticamente.",
        topic: "bias",
        domain: "ai-ml",
        difficulty: "hard"
    },
    {
        id: 'aiml_056',
        question: "O que é 'Amazon SageMaker Feature Store' e qual problema resolve?",
        options: [
            "Loja de aplicações ML",
            "Repositório centralizado de features reutilizáveis para ML — evita re-calcular features, garante consistência entre treino e inferência",
            "Armazenamento de modelos",
            "Catálogo de datasets"
        ],
        correct: [1],
        explanation: "Feature Store: armazena features calculadas (online para real-time, offline para batch). Problemas que resolve: re-computação desnecessária, inconsistência treino/inferência (training-serving skew), compartilhamento entre equipes.",
        topic: "aws-services",
        domain: "ai-ml",
        difficulty: "medium"
    },
    {
        id: 'aiml_057',
        question: "Uma empresa quer treinar modelo com dados sensíveis (saúde) sem centralizar os dados. Qual técnica preserva privacidade?",
        options: [
            "Copiar todos os dados para um local central",
            "Federated Learning — cada instituição treina localmente, apenas gradientes/pesos do modelo são compartilhados, não os dados brutos",
            "Anonimizar e centralizar",
            "Não treinar o modelo"
        ],
        correct: [1],
        explanation: "Federated Learning: modelo vai aos dados (não dados ao modelo). Cada hospital treina localmente, envia apenas updates do modelo ao servidor central. Dados sensíveis nunca saem da instituição. Atende LGPD/HIPAA para dados de saúde.",
        topic: "ml-types",
        domain: "ai-ml",
        difficulty: "hard"
    },
    {
        id: 'aiml_058',
        question: "O que é 'hyperparameter tuning' e como o SageMaker automatiza?",
        options: [
            "Ajustar pesos do modelo manualmente",
            "Encontrar os melhores hiperparâmetros (learning rate, batch size, camadas) automaticamente — SageMaker Hyperparameter Tuning executa múltiplos treinos com diferentes configs",
            "Aumentar dados de treino",
            "Selecionar features"
        ],
        correct: [1],
        explanation: "Hiperparâmetros: configs definidas ANTES do treino (learning rate, epochs, layers). SageMaker Automatic Model Tuning: define ranges, escolhe estratégia (Bayesian, Random), executa N treinos em paralelo, retorna melhor combinação.",
        topic: "aws-services",
        domain: "ai-ml",
        difficulty: "medium"
    },
    {
        id: 'aiml_059',
        question: "Qual é a diferença entre 'precision' e 'recall' em classificação?",
        options: [
            "São a mesma coisa",
            "Precision: dos que o modelo disse ser positivo, quantos realmente são (evita falsos positivos). Recall: dos que realmente são positivos, quantos o modelo encontrou (evita falsos negativos)",
            "Precision é para regressão",
            "Recall é para clustering"
        ],
        correct: [1],
        explanation: "Precision = TP/(TP+FP) — 'quando disse sim, acertou?'. Recall = TP/(TP+FN) — 'encontrou todos os positivos?'. Trade-off: aumentar um geralmente diminui o outro. F1 = média harmônica dos dois. Para fraude: recall alto (não perder fraude).",
        topic: "concepts",
        domain: "ai-ml",
        difficulty: "medium"
    },
    {
        id: 'aiml_060',
        question: "Uma empresa quer entender POR QUE seu modelo de ML tomou uma decisão específica. Qual técnica de explicabilidade usar?",
        options: [
            "Olhar os pesos do modelo",
            "SHAP values — mostra contribuição de cada feature para cada previsão individual. SageMaker Clarify calcula automaticamente",
            "Contar features usadas",
            "Verificar acurácia geral"
        ],
        correct: [1],
        explanation: "SHAP (SHapley Additive exPlanations): para cada previsão, mostra quanto cada feature contribuiu (+/-). Ex: 'aprovação de crédito porque renda alta (+0.4) apesar de dívida moderada (-0.1)'. Essencial para compliance e debugging.",
        topic: "concepts",
        domain: "ai-ml",
        difficulty: "hard"
    }
];

aiMlQuestions.push(...aiMlQuestions4);
