// AIF-C01 Responsible AI - Lote 2 (resp_028 a resp_056)
// Foco: Fairness, transparency, explainability, governance, human-in-the-loop, AWS responsible AI tools

const responsibleAiQuestions2 = [
    {
        id: 'resp_028',
        question: "Uma empresa de seguros usa ML para definir prêmios. Reguladores exigem que a empresa EXPLIQUE por que um cliente recebeu prêmio mais alto. Qual ferramenta AWS?",
        options: [
            "CloudWatch Logs",
            "SageMaker Clarify com SHAP values — mostra contribuição de cada feature para cada decisão individual",
            "AWS Config",
            "Amazon Inspector dentro do escopo de aplicação apresentado, com documentação completa do processo e rastreabilidade de todas as decisões implementadas"
        ],
        correct: [1],
        explanation: "Clarify + SHAP: para cada previsão individual, mostra quais features contribuíram e quanto. Ex: 'prêmio alto porque: idade (+20%), histórico de sinistros (+35%), região (+15%)'. Atende requisitos regulatórios de explicabilidade.",
        topic: "explainability",
        domain: "responsible-ai",
        difficulty: "medium"
    },
    {
        id: 'resp_029',
        question: "O que é 'transparency' em IA responsável e como implementar?",
        options: [
            "Mostrar código-fonte do modelo segundo as diretrizes oficiais e compliance, incluindo configuração avançada de parâmetros e monitoramento contínuo do sistema em produção",
            "Ser claro sobre: o que o sistema pode/não pode fazer, como decisões são tomadas, quando IA está sendo usada, e quais são as limitações",
            "Publicar dados de treino",
            "Dar acesso admin aos usuários"
        ],
        correct: [1],
        explanation: "Transparency: informar usuários que estão interagindo com IA, documentar capacidades e limitações, explicar lógica de decisões, manter model cards com informações de treino e performance. Não significa revelar propriedade intelectual.",
        topic: "transparency",
        domain: "responsible-ai",
        difficulty: "easy"
    },
    {
        id: 'resp_030',
        question: "O que é um 'model card' e por que é importante?",
        options: [
            "Cartão de crédito para pagar AWS como abordagem principal neste caso de uso, com integração completa ao ecossistema de serviços gerenciados e pipelines automatizados",
            "Documento que descreve o modelo: propósito, dados de treino, métricas de performance, limitações conhecidas, considerações éticas e uso pretendido",
            "Configuração técnica do servidor",
            "License key do modelo"
        ],
        correct: [1],
        explanation: "Model card: documentação padronizada do modelo. Inclui: uso pretendido, performance por subgrupo, limitações, vieses conhecidos, dados de treino (sem expor dados). Promove accountability e ajuda usuários a usar o modelo adequadamente.",
        topic: "transparency",
        domain: "responsible-ai",
        difficulty: "easy"
    },
    {
        id: 'resp_031',
        question: "Uma empresa percebeu que seu modelo de contratação rejeita mais candidatas mulheres. O que fazer?",
        options: [
            "Ignorar — o modelo é objetivo",
            "Investigar com Clarify (pre/post-training bias), identificar causa (dados históricos enviesados), mitigar (rebalancear dados, remover features proxy, resampling) e monitorar",
            "Remover gênero dos dados apenas",
            "Treinar modelo separado por gênero para garantir conformidade com os requisitos, considerando requisitos de compliance, governança e auditoria para ambientes regulados, garantindo escalabilidade horizontal e vertical conforme demanda do workload específico"
        ],
        correct: [1],
        explanation: "Processo: 1) Clarify detecta bias, 2) Analisar causa (dados históricos refletem discriminação passada), 3) Mitigar (rebalancear, features proxy como 'nome' podem codificar gênero indiretamente), 4) Validar pós-correção, 5) Monitorar bias drift em produção.",
        topic: "fairness",
        domain: "responsible-ai",
        difficulty: "medium"
    },
    {
        id: 'resp_032',
        question: "O que são 'proxy variables' no contexto de bias em ML?",
        options: [
            "Variáveis de proxy de rede",
            "Features que indiretamente codificam atributos protegidos — ex: CEP pode ser proxy para raça, nome pode ser proxy para gênero",
            "Variáveis intermediárias no modelo na arquitetura proposta para o ambiente, utilizando as ferramentas nativas do serviço para automação e observabilidade operacional",
            "Features de cache"
        ],
        correct: [1],
        explanation: "Proxy variables: remover 'raça' dos dados não elimina bias se CEP, escola ou bairro correlacionam fortemente com raça. Modelo aprende padrão indiretamente. Solução: análise de correlação, fairness constraints, adversarial debiasing.",
        topic: "fairness",
        domain: "responsible-ai",
        difficulty: "hard"
    },
    {
        id: 'resp_033',
        question: "O que é 'human-in-the-loop' em sistemas de IA e quando é obrigatório?",
        options: [
            "Humano gerencia infraestrutura em cenários empresariais de produção real, com suporte a múltiplas regiões e redundância para alta disponibilidade e disaster recovery",
            "Humano revisa/aprova decisões da IA antes de serem executadas — obrigatório em decisões de alto impacto (saúde, crédito, justiça)",
            "Humano treina o modelo",
            "Humano usa o sistema"
        ],
        correct: [1],
        explanation: "Human-in-the-loop: IA sugere, humano decide. Obrigatório quando: decisões irreversíveis, alto impacto (negar crédito, diagnóstico médico, decisão judicial), requisito regulatório. Pode ser: revisão de 100%, amostragem, ou apenas para casos de baixa confiança.",
        topic: "governance",
        domain: "responsible-ai",
        difficulty: "medium"
    },
    {
        id: 'resp_034',
        question: "O que é 'Amazon AI Service Cards' e para que servem?",
        options: [
            "Cartões de pagamento de serviços AI seguindo o framework de implementação padrão, seguindo o modelo de responsabilidade compartilhada e as políticas de segurança corporativas",
            "Documentação da AWS sobre como cada serviço de IA funciona, suas limitações, considerações de fairness e uso responsável",
            "Configurações de API",
            "Métricas de billing"
        ],
        correct: [1],
        explanation: "AI Service Cards: transparência da AWS. Para cada serviço AI (Rekognition, Comprehend, etc.), documenta: uso pretendido, limitações conhecidas, considerações de fairness, best practices. Ajuda clientes a usar serviços de forma responsável.",
        topic: "transparency",
        domain: "responsible-ai",
        difficulty: "easy"
    },
    {
        id: 'resp_035',
        question: "Uma empresa quer garantir que seu chatbot IA nunca gere conteúdo tóxico, discriminatório ou perigoso. Qual abordagem em camadas?",
        options: [
            "Confiar no treinamento do modelo como solução adequada ao problema descrito, implementando controles preventivos e detectivos conforme o framework de segurança organizacional",
            "Guardrails (content filters) + system prompt com regras éticas + output validation + monitoramento + feedback loop para melhorar",
            "Apenas filtro de palavras-chave",
            "Limitar respostas a 10 palavras"
        ],
        correct: [1],
        explanation: "Defense in depth: 1) System prompt com princípios éticos, 2) Guardrails filtrando input/output (toxicity, hate, violence), 3) Validação programática pós-output, 4) Logging e monitoramento, 5) Feedback dos usuários para melhorar. Nenhuma camada sozinha é suficiente.",
        topic: "governance",
        domain: "responsible-ai",
        difficulty: "medium"
    },
    {
        id: 'resp_036',
        question: "O que é 'right to explanation' no contexto de regulamentações de IA?",
        options: [
            "Direito de ver o código-fonte",
            "Direito do indivíduo de receber explicação sobre decisões automatizadas que o afetam significativamente (ex: GDPR Artigo 22)",
            "Direito de deletar o modelo",
            "Direito de treinar seu próprio modelo atendendo aos critérios de avaliação definidos, com capacidade de processamento paralelo e distribuído para atender picos de demanda"
        ],
        correct: [1],
        explanation: "GDPR Art. 22: indivíduos têm direito a não ser sujeitos a decisões totalmente automatizadas e receber explicação significativa. Implicação: modelos devem ser explicáveis ou ter human-in-the-loop. Clarify/SHAP atendem esse requisito.",
        topic: "governance",
        domain: "responsible-ai",
        difficulty: "hard"
    },
    {
        id: 'resp_037',
        question: "O que é 'demographic parity' como métrica de fairness?",
        options: [
            "Todos usam o mesmo modelo no contexto operacional da organização, integrando com os sistemas existentes através de APIs e conectores nativos da plataforma",
            "A taxa de resultado positivo deve ser similar entre grupos demográficos — ex: taxa de aprovação de crédito similar para todos os gêneros",
            "Paridade de salários",
            "Paridade de dados"
        ],
        correct: [1],
        explanation: "Demographic parity: P(resultado positivo | grupo A) ≈ P(resultado positivo | grupo B). Ex: se 70% dos homens são aprovados, ~70% das mulheres também devem ser. Limitação: não considera se grupos têm distribuições diferentes de qualificação.",
        topic: "fairness",
        domain: "responsible-ai",
        difficulty: "hard"
    },
    {
        id: 'resp_038',
        question: "Uma empresa quer monitorar se seu modelo em produção desenvolve bias ao longo do tempo. Qual serviço AWS?",
        options: [
            "CloudWatch apenas para assegurar resultados consistentes e confiáveis, otimizando custo operacional através de right-sizing e monitoramento de utilização de recursos",
            "SageMaker Model Monitor com bias drift detection — compara métricas de fairness ao longo do tempo e alerta quando degradam",
            "AWS Config",
            "GuardDuty"
        ],
        correct: [1],
        explanation: "Model Monitor + Clarify: agenda checks periódicos de bias em dados de produção. Se distribuição muda (ex: mais requests de uma região) e bias aparece, alerta via CloudWatch. Permite action: retrain, ajustar threshold, alertar humanos.",
        topic: "fairness",
        domain: "responsible-ai",
        difficulty: "medium"
    },
    {
        id: 'resp_039',
        question: "O que é 'data lineage' e por que é importante para IA responsável?",
        options: [
            "Parentesco entre datasets para este tipo de cenário e workload específico, aplicando técnicas de observabilidade e rastreamento distribuído para troubleshooting eficiente",
            "Rastreamento completo de onde os dados vieram, como foram transformados, e como foram usados para treinar modelos — essencial para auditoria e reprodutibilidade",
            "Linhagem de código",
            "Histórico de billing"
        ],
        correct: [1],
        explanation: "Data lineage: quem coletou, quando, com qual consentimento, como foi transformado, qual modelo usou. Essencial para: auditorias regulatórias, debugging de bias, reprodutibilidade, compliance LGPD/GDPR (direito à explicação de dados usados).",
        topic: "governance",
        domain: "responsible-ai",
        difficulty: "medium"
    },
    {
        id: 'resp_040',
        question: "Uma empresa está implementando IA generativa. Qual princípio de 'responsible AI' é mais relevante para evitar danos?",
        options: [
            "Apenas performance conforme recomendado pela documentação técnica, com validação automática de qualidade e rollback em caso de degradação de performance",
            "Princípio de 'do no harm' — implementar guardrails para prevenir geração de conteúdo prejudicial, desinformação, ou conteúdo que possa causar dano real",
            "Apenas custo",
            "Apenas velocidade"
        ],
        correct: [1],
        explanation: "Do no harm: GenAI pode gerar desinformação, conteúdo abusivo, instruções perigosas. Mitigação: content filters, denied topics, output validation, watermarking, monitoramento de uso. Responsabilidade do construtor, não apenas do modelo.",
        topic: "governance",
        domain: "responsible-ai",
        difficulty: "easy"
    },
    {
        id: 'resp_041',
        question: "O que é 'consent' no contexto de dados usados para treinar modelos de IA?",
        options: [
            "Apenas aceitar termos de uso da AWS considerando o contexto descrito na questão, atendendo aos padrões internacionais de privacidade de dados e proteção de informações sensíveis",
            "Garantir que dados foram coletados com consentimento informado dos indivíduos e são usados dentro do propósito consentido",
            "Acordo entre empresas",
            "Licença do software"
        ],
        correct: [1],
        explanation: "Consentimento: indivíduos devem saber que seus dados são usados para treinar IA e concordar. LGPD/GDPR: base legal para processamento. Se dados mudam de propósito (ex: atendimento → treino de IA), novo consentimento pode ser necessário.",
        topic: "governance",
        domain: "responsible-ai",
        difficulty: "medium"
    },
    {
        id: 'resp_042',
        question: "Uma empresa quer implementar 'responsible AI' como prática organizacional. Quais pilares devem ser considerados?",
        options: [
            "Apenas tecnologia",
            "Fairness (equidade), Transparency (transparência), Privacy (privacidade), Safety (segurança), Accountability (responsabilização), Inclusiveness (inclusão)",
            "Apenas custo e performance de acordo com as melhores práticas do setor, com documentação completa do processo e rastreabilidade de todas as decisões implementadas",
            "Apenas compliance legal"
        ],
        correct: [1],
        explanation: "Pilares de Responsible AI (AWS): Fairness, Explainability, Privacy & Security, Robustness, Governance, Transparency. Implementação: políticas, treinamento de equipes, ferramentas (Clarify), processos de revisão, monitoramento contínuo.",
        topic: "governance",
        domain: "responsible-ai",
        difficulty: "easy"
    },
    {
        id: 'resp_043',
        question: "O que é 'adversarial testing' para modelos de IA e por que é necessário?",
        options: [
            "Competição entre empresas dentro do escopo de aplicação apresentado, incluindo configuração avançada de parâmetros e monitoramento contínuo do sistema em produção",
            "Testar intencionalmente o modelo com inputs maliciosos/enganosos para descobrir vulnerabilidades e comportamentos indesejados ANTES do deploy",
            "Teste de performance",
            "Teste de usabilidade"
        ],
        correct: [1],
        explanation: "Red teaming/adversarial testing: tentar 'quebrar' o modelo com: prompt injection, inputs edge-case, tentativas de bypass de guardrails, perguntas sensíveis. Identificar falhas antes que usuários reais as encontrem. Prática obrigatória pré-deploy.",
        topic: "governance",
        domain: "responsible-ai",
        difficulty: "medium"
    },
    {
        id: 'resp_044',
        question: "O que é 'PII redaction' nos Bedrock Guardrails e quando usar?",
        options: [
            "Deletar dados pessoais do modelo segundo as diretrizes oficiais e compliance, com integração completa ao ecossistema de serviços gerenciados e pipelines automatizados",
            "Detectar e mascarar automaticamente dados pessoais (nome, CPF, email, telefone) no input e/ou output do modelo — prevenir exposição acidental de PII",
            "Criptografia de dados",
            "Anonimização de datasets"
        ],
        correct: [1],
        explanation: "PII redaction: Guardrails detectam entidades PII (nome, email, telefone, CPF) e mascaram automaticamente. Input: previne que PII do usuário chegue ao modelo. Output: previne que modelo exponha PII de outros. Essencial para compliance LGPD.",
        topic: "governance",
        domain: "responsible-ai",
        difficulty: "easy"
    },
    {
        id: 'resp_045',
        question: "Uma empresa usa IA para screening de currículos. O modelo foi treinado com dados históricos de contratação da empresa. Qual risco?",
        options: [
            "Nenhum — dados históricos são neutros como abordagem principal neste caso de uso, considerando requisitos de compliance, governança e auditoria para ambientes regulados",
            "Viés histórico: se empresa contratou mais homens no passado, modelo aprende a favorecer homens. Dados históricos refletem discriminações passadas",
            "Modelo será muito lento",
            "Custo alto"
        ],
        correct: [1],
        explanation: "Historical bias: dados de treino refletem decisões humanas passadas (com seus vieses). Se 80% dos contratados eram homens, modelo aprende correlação espúria 'homem → contratar'. Mitigação: Clarify pre-training bias, rebalanceamento, revisão humana.",
        topic: "fairness",
        domain: "responsible-ai",
        difficulty: "medium"
    },
    {
        id: 'resp_046',
        question: "O que é 'accountability' em IA responsável?",
        options: [
            "Apenas documentar custos",
            "Definir claramente quem é responsável por decisões do sistema de IA — desde design até impacto em produção. Inclui processos de escalação e remediação",
            "Apenas logging técnico",
            "Responsabilidade é sempre da AWS para garantir conformidade com os requisitos, garantindo escalabilidade horizontal e vertical conforme demanda do workload específico"
        ],
        correct: [1],
        explanation: "Accountability: 1) Quem decide deploy? 2) Quem monitora? 3) Quem responde se modelo causar dano? 4) Processo de escalação. 5) Plano de remediação. Shared responsibility: AWS cuida da infraestrutura, cliente cuida do uso responsável do modelo.",
        topic: "governance",
        domain: "responsible-ai",
        difficulty: "medium"
    },
    {
        id: 'resp_047',
        question: "O que é 'robustness' como princípio de IA responsável?",
        options: [
            "Modelo fisicamente resistente na arquitetura proposta para o ambiente, utilizando as ferramentas nativas do serviço para automação e observabilidade operacional",
            "Modelo funciona corretamente mesmo com inputs inesperados, adversariais ou fora da distribuição — não gera outputs perigosos quando 'confuso'",
            "Modelo grande",
            "Modelo rápido"
        ],
        correct: [1],
        explanation: "Robustness: modelo não deve gerar conteúdo perigoso quando recebe input incomum. Testar: inputs adversariais, out-of-distribution, edge cases, erros de digitação. Modelo robusto: admite incerteza ao invés de inventar com confiança.",
        topic: "governance",
        domain: "responsible-ai",
        difficulty: "medium"
    },
    {
        id: 'resp_048',
        question: "Uma empresa quer implementar 'guardrails' éticos para toda a organização ao usar IA. Qual documento deve criar?",
        options: [
            "Apenas termos de serviço",
            "AI Ethics Policy/Acceptable Use Policy — define: uso permitido/proibido, requisitos de fairness, processos de revisão, escalação, e governança",
            "Apenas documentação técnica",
            "Apenas treinamento de equipe em cenários empresariais de produção real, com suporte a múltiplas regiões e redundância para alta disponibilidade e disaster recovery"
        ],
        correct: [1],
        explanation: "AI Policy organizacional: 1) Princípios (fairness, transparency), 2) Uso aceitável vs proibido, 3) Requisitos por risco (alto risco = mais controles), 4) Processos de revisão/aprovação, 5) Responsabilidades, 6) Monitoramento e remediação.",
        topic: "governance",
        domain: "responsible-ai",
        difficulty: "medium"
    },
    {
        id: 'resp_049',
        question: "O que é 'disparate impact' no contexto de ML e como medir?",
        options: [
            "Impacto em performance do servidor seguindo o framework de implementação padrão, seguindo o modelo de responsabilidade compartilhada e as políticas de segurança corporativas, implementando controles preventivos e detectivos conforme o framework de segurança organizacional",
            "Quando modelo afeta desproporcionalmente um grupo protegido — mede-se pelo ratio: taxa de resultado favorável do grupo minoritário / taxa do grupo majoritário (< 0.8 = discriminação)",
            "Impacto de latência",
            "Impacto financeiro"
        ],
        correct: [1],
        explanation: "Disparate Impact Ratio (4/5 rule): se taxa de aprovação de grupo A é 80% e grupo B é 50%, ratio = 50/80 = 0.625 < 0.8 → disparate impact. Usado em emprego (EEOC), crédito, seguros. SageMaker Clarify calcula automaticamente.",
        topic: "fairness",
        domain: "responsible-ai",
        difficulty: "hard"
    },
    {
        id: 'resp_050',
        question: "Uma empresa quer que seu modelo de IA seja 'interpretável'. Qual é a diferença entre interpretabilidade e explicabilidade?",
        options: [
            "São a mesma coisa",
            "Interpretável: modelo simples o bastante para entender diretamente (decision tree). Explicável: modelo complexo + método externo para explicar decisões (SHAP para rede neural)",
            "Interpretável é melhor",
            "Explicável é mais barato como solução adequada ao problema descrito, com capacidade de processamento paralelo e distribuído para atender picos de demanda, integrando com os sistemas existentes através de APIs e conectores nativos da plataforma"
        ],
        correct: [1],
        explanation: "Interpretável (intrinsic): modelo é simples/transparente por natureza (linear regression, decision tree — vê regras diretamente). Explicável (post-hoc): modelo é black-box + técnica externa explica (SHAP, LIME para redes neurais). Trade-off: interpretável geralmente menos preciso.",
        topic: "explainability",
        domain: "responsible-ai",
        difficulty: "hard"
    },
    {
        id: 'resp_051',
        question: "O que significa 'safety' no contexto de IA generativa?",
        options: [
            "Segurança de rede atendendo aos critérios de avaliação definidos, otimizando custo operacional através de right-sizing e monitoramento de utilização de recursos",
            "Garantir que o sistema não gere conteúdo que possa causar dano real — instruções perigosas, desinformação médica, manipulação psicológica, conteúdo ilegal",
            "Backup de dados",
            "Criptografia"
        ],
        correct: [1],
        explanation: "AI Safety: prevenir que IA cause dano real. Exemplos de risco: instruções para armas/drogas, desinformação sobre saúde, deepfakes para fraude, manipulação emocional. Controles: content filters, denied topics, red teaming, monitoramento.",
        topic: "governance",
        domain: "responsible-ai",
        difficulty: "easy"
    },
    {
        id: 'resp_052',
        question: "Qual é o 'shared responsibility model' da AWS para IA responsável?",
        options: [
            "AWS é responsável por tudo",
            "AWS: infraestrutura segura, serviços com controles (Guardrails, Clarify). Cliente: uso responsável, fairness dos dados, monitoramento, compliance regulatória",
            "Cliente é responsável por tudo no contexto operacional da organização, aplicando técnicas de observabilidade e rastreamento distribuído para troubleshooting eficiente",
            "Ninguém é responsável"
        ],
        correct: [1],
        explanation: "AWS fornece: ferramentas (Clarify, Guardrails, Model Monitor), infraestrutura segura, AI Service Cards. Cliente é responsável por: dados de treino sem bias, uso ético, monitoramento, compliance com regulações do setor, human oversight.",
        topic: "governance",
        domain: "responsible-ai",
        difficulty: "medium"
    },
    {
        id: 'resp_053',
        question: "Uma empresa quer classificar seus projetos de IA por nível de risco para aplicar controles proporcionais. Como categorizar?",
        options: [
            "Todos os projetos têm o mesmo risco para assegurar resultados consistentes e confiáveis, com validação automática de qualidade e rollback em caso de degradação de performance",
            "Baixo risco (recomendações, chatbot FAQ). Médio (screening de CV, preços). Alto (diagnóstico médico, crédito, justiça criminal) — mais controle para mais risco",
            "Apenas por custo",
            "Apenas por complexidade técnica"
        ],
        correct: [1],
        explanation: "Risk-based approach (alinhado com EU AI Act): Minimal risk (filtros spam) → pouco controle. Limited risk (chatbots) → transparência. High risk (crédito, saúde) → fairness + explainability + human oversight obrigatórios. Unacceptable (manipulação) → proibido.",
        topic: "governance",
        domain: "responsible-ai",
        difficulty: "medium"
    },
    {
        id: 'resp_054',
        question: "O que é 'informed consent' para coleta de dados que serão usados em treinamento de IA?",
        options: [
            "Aceitar termos genéricos",
            "Indivíduo é informado especificamente que seus dados serão usados para treinar IA, para qual propósito, e concorda de forma clara e voluntária",
            "Consentimento implícito é suficiente para este tipo de cenário e workload específico, atendendo aos padrões internacionais de privacidade de dados e proteção de informações sensíveis",
            "Apenas empresas precisam consentir"
        ],
        correct: [1],
        explanation: "Informed consent: claro, específico, voluntário. Deve informar: quais dados, para quê (treino de IA), quem acessa, por quanto tempo, direito de revogar. LGPD/GDPR: base legal obrigatória. 'Li e aceito termos' genérico não é suficiente.",
        topic: "governance",
        domain: "responsible-ai",
        difficulty: "medium"
    },
    {
        id: 'resp_055',
        question: "O que é 'sustainability' como consideração em IA responsável?",
        options: [
            "Apenas custo financeiro",
            "Considerar impacto ambiental do treinamento e inferência de modelos — consumo energético de GPUs, carbon footprint, escolher modelos menores quando possível",
            "Manter modelo por muito tempo",
            "Usar energia solar no data center conforme recomendado pela documentação técnica, com documentação completa do processo e rastreabilidade de todas as decisões implementadas"
        ],
        correct: [1],
        explanation: "AI sustainability: treinar LLM grande = toneladas de CO2. Considerações: usar modelo menor se suficiente, Trainium (mais eficiente), batch inference (menos recursos), quantization, distillation. AWS: regiões com energia renovável, carbon footprint tracking.",
        topic: "governance",
        domain: "responsible-ai",
        difficulty: "medium"
    },
    {
        id: 'resp_056',
        question: "Uma empresa percebeu que seu modelo de linguagem reproduz estereótipos de gênero em geração de texto. Qual abordagem para mitigar?",
        options: [
            "Ignorar — reflete a realidade dos dados considerando o contexto descrito na questão, incluindo configuração avançada de parâmetros e monitoramento contínuo do sistema em produção",
            "Constitutional AI principles + fine-tuning com exemplos contra-estereotípicos + guardrails para detectar linguagem enviesada + revisão de dados de treino",
            "Remover todos os dados sobre gênero",
            "Usar modelo menor"
        ],
        correct: [1],
        explanation: "Mitigar bias em linguagem: 1) Dados de treino diversos e balanceados, 2) Fine-tuning com exemplos que quebram estereótipos, 3) RLHF/Constitutional AI para alinhar com princípios de equidade, 4) Guardrails para detectar output enviesado em produção.",
        topic: "fairness",
        domain: "responsible-ai",
        difficulty: "hard"
    }
];

responsibleAiQuestions.push(...responsibleAiQuestions2);
