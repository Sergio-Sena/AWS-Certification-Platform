// AIF-C01 AI & ML Fundamentals - Lote 2 (aiml_041 a aiml_050)
// REESCRITO: Distratores equilibrados + Formato ✅❌📌
// Foco: Pipeline ML, feature engineering, bias, data preparation

const aiMlLote2 = [
    {
        id: 'aiml_041',
        question: "Uma empresa quer colocar um modelo de ML em produção. Qual é a ordem correta do pipeline de ML?",
        options: [
            "Deploy do modelo em endpoint → treino com dados novos → coleta retroativa → avaliação pós-deploy",
            "Coleta → preparação/limpeza → feature engineering → treino → avaliação → deploy → monitoramento",
            "Feature engineering dos dados brutos → treino do modelo → deploy imediato sem testes de validação",
            "Treino com dados disponíveis → coleta adicional se necessário → deploy rápido em produção"
        ],
        correct: [1],
        explanation: "✅ Pipeline completo: Coleta → Prep → Features → Treino → Avaliação → Deploy → Monitor. Cada etapa alimenta a próxima.\n❌ Deploy antes de treino é impossível — não há modelo para servir.\n❌ Pular avaliação pós-treino é perigoso — modelo pode ter overfit ou bias.\n❌ Treinar sem preparação adequada produz modelos de baixa qualidade.\n📌 Pipeline ML é CÍCLICO: monitor detecta drift → retreina. Nunca é 'one-shot'.",
        topic: "pipeline",
        domain: "ai-ml"
    },
    {
        id: 'aiml_042',
        question: "O que é 'feature engineering' e por que é importante?",
        options: [
            "Processo de engenharia de software para desenvolver novas funcionalidades no produto final",
            "Criar, selecionar e transformar variáveis de input para melhorar performance do modelo de ML",
            "Configurar hiperparâmetros do algoritmo de treinamento para otimizar convergência do modelo, com integração completa ao ecossistema de serviços gerenciados e pipelines automatizados",
            "Coletar mais dados brutos de fontes externas para aumentar volume do dataset de treinamento"
        ],
        correct: [1],
        explanation: "✅ Feature engineering: transformar dados brutos em variáveis úteis (ex: extrair hora de timestamp, calcular médias móveis, one-hot encoding).\n❌ Engenharia de software = desenvolvimento de produto, não ML.\n❌ Hiperparâmetros = tuning, etapa diferente do pipeline.\n❌ Coleta de dados = etapa anterior à feature engineering.\n📌 Boas FEATURES > modelo complexo. Feature Store do SageMaker armazena features reutilizáveis.",
        topic: "pipeline",
        domain: "ai-ml"
    },
    {
        id: 'aiml_043',
        question: "Uma empresa treinou um modelo que tem 99% de acurácia no treino mas 60% em dados novos. O que está acontecendo?",
        options: [
            "Modelo excelente que atingiu convergência ideal demonstrada pela alta acurácia de treinamento",
            "Underfitting porque o modelo é simples demais para capturar padrões complexos nos dados",
            "Overfitting — modelo memorizou treino mas não generaliza para dados novos nunca vistos antes",
            "Dados de teste corrompidos ou com distribuição incompatível com os dados de treinamento"
        ],
        correct: [2],
        explanation: "✅ Overfitting: gap grande (99% treino vs 60% teste) = memorizou ao invés de aprender padrões. Soluções: regularização, dropout, mais dados, early stopping.\n❌ 99% treino + 60% teste NÃO é excelente — é red flag clássico.\n❌ Underfitting = ruim em AMBOS treino e teste (modelo simples demais).\n❌ Dados corrompidos é possível mas raro — overfit é a causa mais provável com esse padrão.\n📌 Treino alto + teste baixo = OVERFIT. Ambos baixos = UNDERFIT. Ambos altos = IDEAL.",
        topic: "concepts",
        domain: "ai-ml"
    },
    {
        id: 'aiml_044',
        question: "O que é 'underfitting' e como identificar?",
        options: [
            "Modelo com acurácia alta no treino e baixa no teste indicando memorização dos dados",
            "Modelo que performa bem em produção mas degrada com o tempo por data drift detectado",
            "Modelo simples demais que não captura padrões — performance ruim tanto no treino quanto no teste",
            "Modelo treinado por tempo excessivo que convergiu para um mínimo local subótimo da loss, considerando requisitos de compliance, governança e auditoria para ambientes regulados"
        ],
        correct: [2],
        explanation: "✅ Underfitting: modelo não consegue aprender NEM os dados de treino. Resultado ruim em tudo. Causa: modelo muito simples, poucas features.\n❌ Treino alto + teste baixo = Overfitting (oposto).\n❌ Degradação temporal = data/model drift (problema de produção, não de complexidade).\n❌ Treino excessivo geralmente causa overfit, não underfit.\n📌 Underfit = não aprende (ruim em tudo). Overfit = decora (bom só no treino).",
        topic: "concepts",
        domain: "ai-ml"
    },
    {
        id: 'aiml_045',
        question: "Uma empresa quer detectar fraudes mas apenas 0.1% das transações são fraude. Qual problema de ML isso representa?",
        options: [
            "Dados insuficientes para treinamento adequado exigindo coleta de mais amostras de todas as classes",
            "Classes desbalanceadas — acurácia é enganosa, usar F1/Precision/Recall como métricas adequadas",
            "Dados corrompidos por ruído excessivo impedindo o modelo de distinguir padrões reais de artefatos",
            "Problema impossível de resolver com ML atual exigindo abordagens baseadas em regras manuais"
        ],
        correct: [1],
        explanation: "✅ Class imbalance: prever 'não fraude' sempre = 99.9% acurácia (inútil). Técnicas: SMOTE, class weights, threshold tuning. Métricas: F1, AUC-ROC.\n❌ Volume pode ser suficiente (1M transações × 0.1% = 1000 fraudes — pode ser viável).\n❌ Desbalanceamento ≠ corrupção — dados são legítimos, apenas desproporcionais.\n❌ ML resolve isso muito bem com técnicas adequadas (é problema comum e resolvido).\n📌 Classes desbalanceadas: NÃO use acurácia. USE F1, Precision, Recall, AUC-ROC.",
        topic: "concepts",
        domain: "ai-ml"
    },
    {
        id: 'aiml_046',
        question: "O que é 'data drift' e 'model drift' em modelos em produção?",
        options: [
            "Migração planejada de dados entre regiões AWS para otimizar latência e custos de storage",
            "Data drift: distribuição dos inputs muda ao longo do tempo. Model drift: performance degrada porque dados novos diferem do treino",
            "Erro de rede durante transferência de dados causando perda de pacotes entre serviços de ML, garantindo escalabilidade horizontal e vertical conforme demanda do workload específico",
            "Backup incremental automático de dados e checkpoints do modelo para disaster recovery"
        ],
        correct: [1],
        explanation: "✅ Data drift: dados em produção mudam vs treino (ex: comportamento pós-pandemia). Model drift: performance cai como consequência. SageMaker Model Monitor detecta.\n❌ Migração de dados entre regiões é operação de infraestrutura, não conceito de ML.\n❌ Erro de rede não é drift — é problema de infraestrutura.\n❌ Backup não é drift — é operação de resiliência.\n📌 Drift = dados mudam com o tempo → modelo fica obsoleto → precisa retreinar.",
        topic: "monitoring",
        domain: "ai-ml"
    },
    {
        id: 'aiml_047',
        question: "Qual serviço AWS monitora modelos de ML em produção para detectar degradação de qualidade e data drift?",
        options: [
            "Amazon CloudWatch com métricas customizadas de latência e throughput dos endpoints de inferência, utilizando as ferramentas nativas do serviço para automação e observabilidade operacional",
            "SageMaker Model Monitor com detecção automática de data drift, bias drift e degradação de qualidade",
            "AWS Config com regras de compliance para verificar configuração dos endpoints de ML",
            "Amazon GuardDuty com detecção de ameaças e anomalias de segurança nos workloads de IA"
        ],
        correct: [1],
        explanation: "✅ Model Monitor: compara dados de inferência com baseline do treino. Detecta: data quality, data drift, bias drift, feature attribution drift.\n❌ CloudWatch: métricas de INFRA (latência, erros), não de QUALIDADE DO MODELO.\n❌ Config: compliance de recursos AWS, não monitoramento de ML.\n❌ GuardDuty: segurança (ameaças), não qualidade de modelos.\n📌 Monitorar MODELO = Model Monitor. Monitorar INFRA = CloudWatch. Monitorar SEGURANÇA = GuardDuty.",
        topic: "monitoring",
        domain: "ai-ml"
    },
    {
        id: 'aiml_048',
        question: "O que é 'bias' em Machine Learning e quais tipos existem?",
        options: [
            "Apenas preconceito racial ou de gênero presente em datasets coletados de forma intencional",
            "Viés sistemático levando a resultados injustos: sampling bias, measurement bias, algorithmic bias",
            "Erro matemático puramente técnico na função de perda sem relação com justiça ou equidade",
            "Bug de software na implementação do algoritmo causando resultados incorretos aleatoriamente, com suporte a múltiplas regiões e redundância para alta disponibilidade e disaster recovery"
        ],
        correct: [1],
        explanation: "✅ Bias em ML: viés sistemático. Sampling (dados não representativos), Label (humanos enviesados), Selection (subgrupos excluídos), Algorithmic (modelo amplifica).\n❌ Não é APENAS racial — inclui gênero, idade, região, qualquer subgrupo sub-representado.\n❌ Não é erro matemático puro — tem componente social/ético.\n❌ Não é bug aleatório — é SISTEMÁTICO (reproduzível, direcionado).\n📌 Bias ≠ bug. É viés SISTEMÁTICO. SageMaker Clarify detecta bias pré e pós treinamento.",
        topic: "bias",
        domain: "ai-ml"
    },
    {
        id: 'aiml_049',
        question: "Qual serviço AWS ajuda a detectar e mitigar viés (bias) em dados e modelos de ML?",
        options: [
            "Amazon Rekognition com análise de fairness em detecção facial para diferentes demografias",
            "SageMaker Clarify com detecção de bias pré/pós-treinamento e explicabilidade via SHAP values",
            "AWS IAM com políticas de acesso granular para restringir quem pode treinar modelos enviesados",
            "Amazon Comprehend com análise de sentimento para detectar linguagem discriminatória em textos"
        ],
        correct: [1],
        explanation: "✅ Clarify: 1) Pre-training bias (dados), 2) Post-training bias (previsões), 3) Explainability (SHAP). Métricas: DPL, CI, KL divergence.\n❌ Rekognition: consome modelos, não detecta/mitiga bias sistematicamente.\n❌ IAM: controle de acesso, não análise de fairness de ML.\n❌ Comprehend: NLP para sentimento, não ferramenta de fairness.\n📌 Bias detection + explicabilidade = SageMaker Clarify. SHAP = 'por que essa decisão?'.",
        topic: "bias",
        domain: "ai-ml"
    },
    {
        id: 'aiml_050',
        question: "Uma empresa tem dados com 30% de valores faltantes (missing values). Qual é a MELHOR abordagem antes de treinar?",
        options: [
            "Deletar todas as linhas com qualquer valor faltante para garantir dataset limpo e completo",
            "Preencher todos os campos vazios com zero independente do tipo de variável ou distribuição",
            "Analisar padrão dos missing values e aplicar imputação adequada (média/mediana/modelo preditivo)",
            "Ignorar os valores faltantes e treinar o modelo normalmente pois algoritmos modernos lidam sozinhos"
        ],
        correct: [2],
        explanation: "✅ Analisar padrão (MCAR/MAR/MNAR) e escolher: média/mediana para numéricos, moda para categóricos, KNN/modelo para complexos.\n❌ Deletar 30% das linhas perde MUITA informação — aceitável só se < 5%.\n❌ Zero pode distorcer distribuições (zero não é 'ausência' para todas as variáveis).\n❌ Ignorar causa erros — maioria dos algoritmos não lida com NaN automaticamente.\n📌 Missing values: ENTENDER o padrão → escolher estratégia. SageMaker Data Wrangler automatiza.",
        topic: "pipeline",
        domain: "ai-ml"
    }
];

aiMlQuestions.push(...aiMlLote2);
