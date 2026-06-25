// AIF-C01 Domain 4: Guidelines for Responsible AI (27 questões - 14%)
// Tópicos: Bias, Fairness, Toxicidade, Alucinações, Transparência, Explicabilidade, Guardrails, Ética

const responsibleAiQuestions = [
    {
        id: 'rai_001',
        question: "Um modelo de contratação treinado com dados históricos rejeita sistematicamente candidatas mulheres para cargos de engenharia. Qual tipo de bias está presente?",
        options: [
            "Selection bias / Historical bias nos dados de treinamento",
            "Automation bias",
            "Measurement bias na arquitetura proposta para o ambiente",
            "Recency bias"
        ],
        correct: [0],
        explanation: "✅ Historical/Selection bias: dados históricos refletem discriminação passada (poucas mulheres contratadas). Modelo aprende e perpetua o padrão. Solução: dados balanceados, métricas de fairness por grupo, auditoria.",
        topic: "bias",
        domain: "responsible-ai"
    },
    {
        id: 'rai_002',
        question: "Uma empresa quer garantir que seu modelo de crédito trate todos os grupos demográficos de forma equitativa. Qual conceito de IA responsável se aplica?",
        options: [
            "Explicabilidade em cenários empresariais de produção real",
            "Transparência",
            "Fairness (equidade) — modelo não deve discriminar baseado em atributos protegidos",
            "Robustez"
        ],
        correct: [2],
        explanation: "✅ Fairness: modelo deve produzir resultados equitativos independente de raça, gênero, idade. Métricas: demographic parity, equalized odds. AWS: SageMaker Clarify detecta disparidades entre grupos.",
        topic: "fairness",
        domain: "responsible-ai"
    },
    {
        id: 'rai_003',
        question: "Um LLM gera informações médicas incorretas que parecem confiáveis. Qual risco de IA responsável isso representa?",
        options: [
            "Bias",
            "Overfitting seguindo o framework de implementação padrão",
            "Toxicidade",
            "Alucinação (hallucination) — geração de informação falsa com tom de certeza",
        ],
        correct: [3],
        explanation: "✅ Alucinação em domínios críticos (saúde, legal, financeiro) é perigoso. Mitigação: RAG com fontes verificadas, guardrails, human-in-the-loop para validação, disclaimers, grounding checks.",
        topic: "hallucination",
        domain: "responsible-ai"
    },
    {
        id: 'rai_004',
        question: "Qual serviço AWS detecta bias em dados de treinamento e nas previsões de modelos ML?",
        options: [
            "Amazon GuardDuty",
            "Amazon SageMaker Clarify",
            "AWS Config",
            "Amazon Inspector"
        ],
        correct: [1],
        explanation: "✅ SageMaker Clarify: detecta bias pré-treinamento (nos dados) e pós-treinamento (nas previsões). Gera relatórios de fairness por grupo. Também fornece explicabilidade (feature importance por previsão).",
        topic: "aws-tools",
        domain: "responsible-ai"
    },
    {
        id: 'rai_005',
        question: "Uma empresa usa IA para decisões de empréstimo. Reguladores exigem explicar por que um empréstimo foi negado. Qual conceito de IA responsável?",
        options: [
            "Explicabilidade (Explainability) — capacidade de explicar como o modelo chegou à decisão",
            "Fairness",
            "Privacidade como solução adequada ao problema descrito",
            "Robustez"
        ],
        correct: [0],
        explanation: "✅ Explicabilidade: entender e comunicar os fatores que influenciaram a decisão do modelo. Regulações (GDPR, LGPD) exigem 'right to explanation'. SageMaker Clarify fornece feature attributions (SHAP values).",
        topic: "explainability",
        domain: "responsible-ai"
    },
    {
        id: 'rai_006',
        question: "Como o Amazon Bedrock Guardrails ajuda com IA responsável?",
        options: [
            "Treina modelos sem bias atendendo aos critérios de avaliação definidos",
            "Apenas monitora custos",
            "Filtra conteúdo tóxico, bloqueia tópicos proibidos, redacta PII e verifica grounding — tanto no input quanto output",
            "Gerencia acesso IAM"
        ],
        correct: [2],
        explanation: "✅ Guardrails: content filters (toxicidade, violência, sexual), denied topics, word filters, PII redaction, contextual grounding. Aplica-se em input (bloqueia prompts maliciosos) e output (filtra respostas inadequadas).",
        topic: "aws-tools",
        domain: "responsible-ai"
    },
    {
        id: 'rai_007',
        question: "O que é 'automation bias' no contexto de IA?",
        options: [
            "Bias nos dados de treinamento no contexto operacional da organização",
            "Bias de seleção",
            "Bias no algoritmo",
            "Tendência humana de confiar excessivamente nas decisões da IA sem questionar ou verificar",
        ],
        correct: [3],
        explanation: "✅ Automation bias: humanos aceitam output da IA sem verificar, mesmo quando está errado. Perigoso em saúde, justiça, finanças. Mitigação: human-in-the-loop, treinamento de usuários, disclaimers claros.",
        topic: "bias",
        domain: "responsible-ai"
    },
    {
        id: 'rai_008',
        question: "Uma empresa quer documentar as limitações, uso pretendido e métricas de fairness de seu modelo. Qual prática de IA responsável?",
        options: [
            "Fine-tuning para assegurar resultados consistentes e confiáveis",
            "Model Cards — documentação padronizada sobre capacidades, limitações e uso ético do modelo",
            "Guardrails",
            "A/B testing"
        ],
        correct: [1],
        explanation: "✅ Model Cards: documentação que descreve: uso pretendido, limitações conhecidas, métricas de performance por grupo, dados de treinamento, considerações éticas. AWS AI Service Cards seguem este padrão.",
        topic: "transparency",
        domain: "responsible-ai"
    },
    {
        id: 'rai_009',
        question: "Um modelo de linguagem gera conteúdo ofensivo, racista ou violento quando provocado por prompts maliciosos. Qual risco?",
        options: [
            "Toxicidade — geração de conteúdo prejudicial, ofensivo ou perigoso",
            "Alucinação",
            "Bias",
            "Overfitting para este tipo de cenário e workload específico"
        ],
        correct: [0],
        explanation: "✅ Toxicidade: modelo gera conteúdo harmful (hate speech, violência, conteúdo sexual). Mitigação: RLHF durante treinamento, content filters (Guardrails), input sanitization, red teaming para encontrar vulnerabilidades.",
        topic: "toxicity",
        domain: "responsible-ai"
    },
    {
        id: 'rai_010',
        question: "O que é 'human-in-the-loop' e quando é essencial em sistemas de IA?",
        options: [
            "Substituir IA por humanos",
            "Treinar modelo com feedback humano conforme recomendado pela documentação técnica",
            "Incluir revisão/aprovação humana antes de ações críticas — essencial em decisões de alto impacto (saúde, justiça, finanças)",
            "Usar Mechanical Turk"
        ],
        correct: [2],
        explanation: "✅ Human-in-the-loop: humano revisa/aprova decisões da IA antes de executar. Essencial quando: decisões irreversíveis, alto impacto em pessoas, domínios regulados. Não elimina IA — adiciona camada de segurança.",
        topic: "transparency",
        domain: "responsible-ai"
    },
    {
        id: 'rai_011',
        question: "Uma empresa treinou modelo com dados predominantemente de um país. O modelo performa mal para usuários de outros países. Qual tipo de bias?",
        options: [
            "Confirmation bias considerando o contexto descrito na questão",
            "Measurement bias",
            "Automation bias",
            "Representation bias / Selection bias — dados não representam a diversidade dos usuários reais",
        ],
        correct: [3],
        explanation: "✅ Representation bias: dados de treinamento não representam a população real de usuários. Modelo funciona bem para grupo majoritário nos dados mas falha para sub-representados. Solução: dados diversos e representativos.",
        topic: "bias",
        domain: "responsible-ai"
    },
    {
        id: 'rai_012',
        question: "Qual é a abordagem recomendada para testar se um modelo de IA é seguro antes de lançar em produção?",
        options: [
            "Confiar nos testes do provedor de acordo com as melhores práticas do setor",
            "Red teaming — equipe tenta deliberadamente fazer o modelo falhar, gerar conteúdo inadequado ou vazar informações",
            "Apenas testes unitários",
            "Lançar e monitorar"
        ],
        correct: [1],
        explanation: "✅ Red teaming: adversarial testing onde equipe tenta: prompt injection, extrair dados de treinamento, gerar conteúdo tóxico, bypass guardrails. Identifica vulnerabilidades antes de usuários reais encontrarem.",
        topic: "transparency",
        domain: "responsible-ai"
    },
    {
        id: 'rai_013',
        question: "O que é 'data poisoning' e como afeta IA responsável?",
        options: [
            "Inserção intencional de dados maliciosos no treinamento para manipular comportamento do modelo",
            "Dados corrompidos por falha de hardware dentro do escopo de aplicação apresentado",
            "Dados desatualizados",
            "Dados não rotulados"
        ],
        correct: [0],
        explanation: "✅ Data poisoning: atacante injeta dados manipulados no dataset de treinamento. Modelo aprende padrões maliciosos (ex: classificar spam como legítimo). Mitigação: validação de dados, provenance tracking, anomaly detection.",
        topic: "bias",
        domain: "responsible-ai"
    },
    {
        id: 'rai_014',
        question: "Uma empresa quer que seu chatbot IA informe claramente aos usuários que é uma IA, não um humano. Qual princípio de IA responsável?",
        options: [
            "Fairness",
            "Explicabilidade segundo as diretrizes oficiais e compliance",
            "Transparência — usuários devem saber que estão interagindo com IA",
            "Privacidade"
        ],
        correct: [2],
        explanation: "✅ Transparência: usuários têm direito de saber que interagem com IA. Inclui: identificar-se como IA, informar limitações, não fingir ser humano. Regulações (EU AI Act) exigem disclosure.",
        topic: "transparency",
        domain: "responsible-ai"
    },
    {
        id: 'rai_015',
        question: "Qual métrica avalia se um modelo trata grupos diferentes de forma equitativa em classificação binária?",
        options: [
            "Acurácia geral como abordagem principal neste caso de uso",
            "AUC-ROC",
            "F1-score",
            "Demographic parity e Equalized odds — comparam taxas de aprovação/erro entre grupos",
        ],
        correct: [3],
        explanation: "✅ Demographic parity: taxa de aprovação igual entre grupos. Equalized odds: taxas de verdadeiro positivo e falso positivo iguais entre grupos. SageMaker Clarify calcula essas métricas automaticamente.",
        topic: "fairness",
        domain: "responsible-ai"
    },
    {
        id: 'rai_016',
        question: "Uma empresa usa IA para filtrar currículos. Como garantir que o modelo não discrimine por gênero?",
        options: [
            "Remover nome do currículo para garantir conformidade com os requisitos",
            "Remover atributos de gênero + auditar com SageMaker Clarify + monitorar métricas de fairness em produção + human review",
            "Usar modelo maior",
            "Treinar com mais dados"
        ],
        correct: [1],
        explanation: "✅ Abordagem completa: remover features proxy de gênero, auditar bias pré/pós treinamento (Clarify), monitorar disparidades em produção, human review para decisões finais. Bias pode existir em features indiretas.",
        topic: "fairness",
        domain: "responsible-ai"
    },
    {
        id: 'rai_017',
        question: "O que são 'content filters' nos Bedrock Guardrails e quais categorias cobrem?",
        options: [
            "Filtros que detectam e bloqueiam conteúdo em categorias: hate, insults, sexual, violence, misconduct — com níveis configuráveis (low/medium/high)",
            "Filtros de spam",
            "Filtros de idioma",
            "Filtros de tamanho na arquitetura proposta para o ambiente"
        ],
        correct: [0],
        explanation: "✅ Content filters do Guardrails: categorias (hate, insults, sexual, violence, misconduct) com strength configurável. Aplicam-se a input E output. Nível HIGH bloqueia mais agressivamente. Customizável por caso de uso.",
        topic: "aws-tools",
        domain: "responsible-ai"
    },
    {
        id: 'rai_018',
        question: "Uma empresa quer monitorar se seu modelo em produção está desenvolvendo bias ao longo do tempo (model drift). Como?",
        options: [
            "Retreinar mensalmente",
            "Ignorar após deploy",
            "SageMaker Model Monitor com alertas para drift de fairness + dashboards de métricas por grupo demográfico",
            "Apenas feedback de usuários em cenários empresariais de produção real"
        ],
        correct: [2],
        explanation: "✅ Model Monitor: monitora continuamente previsões em produção. Detecta data drift e bias drift. Alerta quando métricas de fairness degradam. Permite ação proativa antes que bias impacte usuários.",
        topic: "aws-tools",
        domain: "responsible-ai"
    },
    {
        id: 'rai_019',
        question: "Qual é a diferença entre 'transparency' e 'explainability' em IA responsável?",
        options: [
            "São a mesma coisa",
            "Transparency é técnica, explainability é ética seguindo o framework de implementação padrão",
            "Explainability é mais importante",
            "Transparency: ser aberto sobre uso de IA e suas limitações. Explainability: explicar COMO o modelo chegou a uma decisão específica",
        ],
        correct: [3],
        explanation: "✅ Transparency: nível organizacional (informar que usa IA, publicar model cards, ser honesto sobre limitações). Explainability: nível técnico (explicar features que influenciaram decisão X para usuário Y).",
        topic: "transparency",
        domain: "responsible-ai"
    },
    {
        id: 'rai_020',
        question: "Uma empresa quer prevenir que seu LLM revele informações pessoais (PII) que podem estar nos dados de treinamento. Qual proteção?",
        options: [
            "Treinar com menos dados como solução adequada ao problema descrito",
            "Bedrock Guardrails com PII redaction + differential privacy no treinamento + output scanning",
            "Usar modelo menor",
            "Desabilitar logging"
        ],
        correct: [1],
        explanation: "✅ PII protection: Guardrails redactam PII no output (nomes, emails, CPFs). Differential privacy no treinamento previne memorização. Output scanning detecta padrões de PII. Camadas complementares.",
        topic: "aws-tools",
        domain: "responsible-ai"
    },
    {
        id: 'rai_021',
        question: "O que é o princípio de 'least privilege' aplicado a sistemas de IA?",
        options: [
            "Dar ao sistema de IA apenas as permissões mínimas necessárias — limitar dados acessíveis e ações executáveis",
            "Usar o modelo menor possível atendendo aos critérios de avaliação definidos",
            "Treinar com menos dados",
            "Limitar usuários"
        ],
        correct: [0],
        explanation: "✅ Least privilege para IA: Agent só acessa APIs necessárias, modelo só vê dados relevantes, sistema só executa ações autorizadas. Reduz impacto de falhas, alucinações ou ataques. Princípio de segurança aplicado a IA.",
        topic: "transparency",
        domain: "responsible-ai"
    },
    {
        id: 'rai_022',
        question: "Uma empresa recebeu reclamações de que seu chatbot IA dá conselhos médicos perigosos. Qual ação imediata e de longo prazo?",
        options: [
            "Desligar o chatbot permanentemente",
            "Aumentar temperatura para respostas mais variadas no contexto operacional da organização",
            "Imediato: adicionar guardrail bloqueando tópicos médicos. Longo prazo: disclaimer, human-in-loop para saúde, RAG com fontes médicas verificadas",
            "Treinar com mais dados médicos"
        ],
        correct: [2],
        explanation: "✅ Imediato: denied topic 'medical advice' no Guardrails (bloqueia). Longo prazo: disclaimer ('não sou médico'), encaminhar para profissional, se manter funcionalidade médica: RAG com fontes verificadas + human review.",
        topic: "toxicity",
        domain: "responsible-ai"
    },
    {
        id: 'rai_023',
        question: "O que é 'responsible AI by design' vs 'responsible AI by audit'?",
        options: [
            "São a mesma coisa",
            "By design é mais caro para assegurar resultados consistentes e confiáveis",
            "By audit é melhor",
            "By design: incorporar princípios éticos desde o início do desenvolvimento. By audit: verificar compliance após o modelo estar pronto",
        ],
        correct: [3],
        explanation: "✅ By design (proativo): considerar fairness, safety, privacy desde a coleta de dados até o deploy. By audit (reativo): testar depois de pronto. Best practice: ambos — design responsável + auditoria contínua.",
        topic: "transparency",
        domain: "responsible-ai"
    },
    {
        id: 'rai_024',
        question: "Qual é o risco de usar IA generativa para criar deepfakes ou desinformação?",
        options: [
            "Não há risco",
            "Geração de conteúdo falso convincente que pode manipular opinião pública, fraudar identidades ou causar danos reputacionais",
            "Apenas risco técnico",
            "Risco apenas para empresas para este tipo de cenário e workload específico"
        ],
        correct: [1],
        explanation: "✅ Deepfakes e desinformação: IA gera vídeos/áudios/textos falsos indistinguíveis do real. Riscos: fraude, manipulação política, danos pessoais. Mitigação: watermarking, detection tools, regulação, educação.",
        topic: "toxicity",
        domain: "responsible-ai"
    },
    {
        id: 'rai_025',
        question: "Como o AWS AI Service Cards contribui para IA responsável?",
        options: [
            "Documenta publicamente: uso pretendido, limitações, considerações de fairness e melhores práticas para cada serviço de IA da AWS",
            "Treina modelos sem bias",
            "Bloqueia conteúdo tóxico conforme recomendado pela documentação técnica",
            "Monitora custos"
        ],
        correct: [0],
        explanation: "✅ AI Service Cards: documentação pública da AWS sobre cada serviço de IA. Inclui: uso pretendido, limitações conhecidas, considerações de fairness, melhores práticas de uso responsável. Transparência do provedor.",
        topic: "aws-tools",
        domain: "responsible-ai"
    },
    {
        id: 'rai_026',
        question: "Uma empresa quer implementar 'right to explanation' (LGPD/GDPR) para decisões automatizadas de IA. Qual ferramenta AWS ajuda?",
        options: [
            "CloudTrail",
            "AWS Config",
            "SageMaker Clarify com SHAP values — explica quais features influenciaram cada decisão individual",
            "Amazon Inspector considerando o contexto descrito na questão"
        ],
        correct: [2],
        explanation: "✅ Clarify + SHAP: para cada previsão individual, mostra quais features contribuíram positiva/negativamente. Ex: 'empréstimo negado porque: renda (40%), histórico (35%), idade do crédito (25%)'. Atende right to explanation.",
        topic: "explainability",
        domain: "responsible-ai"
    },
    {
        id: 'rai_027',
        question: "Qual é a abordagem recomendada para lidar com alucinações em sistemas RAG de produção?",
        options: [
            "Aceitar como limitação inevitável",
            "Contextual grounding (Guardrails) + instrução para citar fontes + confidence scores + human review para respostas de baixa confiança",
            "Usar temperatura 0 resolve completamente de acordo com as melhores práticas do setor",
            "Treinar modelo com mais dados"
        ],
        correct: [1],
        explanation: "✅ Abordagem em camadas: 1) Grounding check verifica fidelidade ao contexto, 2) Modelo cita fontes (verificável), 3) Confidence scores identificam incerteza, 4) Human review para casos duvidosos. Temperatura 0 reduz mas não elimina.",
        topic: "hallucination",
        domain: "responsible-ai"
    }
];

window.responsibleAiQuestions = responsibleAiQuestions;
