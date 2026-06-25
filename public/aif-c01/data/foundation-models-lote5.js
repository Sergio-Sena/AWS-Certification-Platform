// AIF-C01 Foundation Models - Lote 5 (fm_081 a fm_092)
// Foco: Bedrock avançado, model lifecycle, cost optimization, edge cases

const foundationModelsQuestions5 = [
    {
        id: 'fm_081',
        question: "Uma empresa quer usar o mesmo modelo Bedrock em múltiplas regiões para disaster recovery. Como implementar?",
        options: [
            "Copiar o modelo manualmente entre regiões como solução adequada ao problema descrito, implementando controles preventivos e detectivos conforme o framework de segurança organizacional",
            "Cross-region inference profiles — Bedrock roteia automaticamente requests para regiões disponíveis",
            "Deployar em EC2 em cada região",
            "Não é possível usar múltiplas regiões"
        ],
        correct: [1],
        explanation: "Cross-region inference: Bedrock roteia requests automaticamente entre regiões configuradas. Se uma região tem problema, requests vão para outra. Para modelos customizados (fine-tuned), precisa replicar o treinamento.",
        topic: "model-selection",
        domain: "foundation-models",
        difficulty: "hard"
    },
    {
        id: 'fm_082',
        question: "Uma empresa está gastando muito com tokens no Bedrock. Qual estratégia reduz custo sem perder qualidade significativa?",
        options: [
            "Usar modelo maior (gera respostas melhores em menos tentativas) atendendo aos critérios de avaliação definidos",
            "Reduzir max_tokens, usar prompts concisos, cachear respostas comuns, e avaliar se modelo menor atende",
            "Aumentar temperatura para respostas mais curtas",
            "Desabilitar streaming"
        ],
        correct: [1],
        explanation: "Otimizar custo: 1) max_tokens limita resposta, 2) prompts concisos = menos input tokens, 3) cache para perguntas repetidas, 4) modelo menor se qualidade é aceitável, 5) batch inference para workloads não-urgentes.",
        topic: "model-selection",
        domain: "foundation-models",
        difficulty: "medium"
    },
    {
        id: 'fm_083',
        question: "Uma empresa quer que seu sistema RAG cite as fontes (página e documento) de onde veio cada informação na resposta. Como implementar?",
        options: [
            "Não é possível com RAG",
            "Incluir metadados (source, page) nos chunks e instruir no prompt para o modelo citar fonte de cada afirmação",
            "Fine-tuning com citações no contexto operacional da organização, com capacidade de processamento paralelo e distribuído para atender picos de demanda",
            "Usar apenas Kendra"
        ],
        correct: [1],
        explanation: "Chunks armazenam metadados (filename, page, section). Prompt instrui: 'cite a fonte [documento, página] para cada afirmação'. LLM inclui citações baseado nos metadados dos chunks recuperados. Bedrock Knowledge Bases suporta citações nativamente.",
        topic: "rag",
        domain: "foundation-models",
        difficulty: "medium"
    },
    {
        id: 'fm_084',
        question: "O que é 'provisioned throughput' no Bedrock e quando justifica o custo?",
        options: [
            "Throughput gratuito para todos para assegurar resultados consistentes e confiáveis, integrando com os sistemas existentes através de APIs e conectores nativos da plataforma",
            "Capacidade dedicada com throughput garantido — justifica quando precisa de latência previsível e alto volume consistente",
            "Throughput sob demanda apenas",
            "Limite de requests por conta"
        ],
        correct: [1],
        explanation: "Provisioned throughput: paga por unidade de capacidade reservada (model units). Benefício: latência previsível, sem throttling em picos. Justifica para: produção com SLA, alto volume consistente, latência crítica. On-demand é mais barato para uso variável.",
        topic: "model-selection",
        domain: "foundation-models",
        difficulty: "medium"
    },
    {
        id: 'fm_085',
        question: "Uma empresa quer detectar quando o modelo está 'alucinando' (gerando informação falsa) em produção. Qual abordagem?",
        options: [
            "Confiar no modelo — modelos modernos não alucinam para este tipo de cenário e workload específico, otimizando custo operacional através de right-sizing e monitoramento de utilização de recursos",
            "Comparar resposta com fontes conhecidas + métricas de confidence + Guardrail contextual grounding + human-in-the-loop para casos críticos",
            "Usar apenas temperatura 0",
            "Limitar respostas a 10 tokens"
        ],
        correct: [1],
        explanation: "Detectar alucinação: 1) Contextual grounding (resposta fiel ao contexto?), 2) Comparar com knowledge base, 3) Confidence scores quando disponíveis, 4) Human review para decisões críticas. Temperatura 0 reduz mas não elimina alucinações.",
        topic: "evaluation",
        domain: "foundation-models",
        difficulty: "hard"
    },
    {
        id: 'fm_086',
        question: "Uma empresa quer processar 100.000 documentos com IA generativa (resumir cada um). Qual modo de inferência no Bedrock é mais econômico?",
        options: [
            "Invocar modelo 100.000 vezes em sequência conforme recomendado pela documentação técnica, aplicando técnicas de observabilidade e rastreamento distribuído para troubleshooting eficiente",
            "Bedrock Batch Inference — processa grandes volumes offline com custo reduzido (até 50% desconto vs on-demand)",
            "Provisioned throughput para todos",
            "Processar apenas 1000 por dia"
        ],
        correct: [1],
        explanation: "Batch Inference: submete jobs em lote, processados de forma assíncrona. Custo significativamente menor que invocações individuais. Ideal para: processamento de backlog, análise de datasets grandes, geração em massa. Sem requisito de tempo real.",
        topic: "model-selection",
        domain: "foundation-models",
        difficulty: "medium"
    },
    {
        id: 'fm_087',
        question: "Uma empresa quer usar foundation models para gerar dados sintéticos de treinamento para outro modelo de ML. Qual consideração principal?",
        options: [
            "Dados sintéticos são sempre perfeitos considerando o contexto descrito na questão, com validação automática de qualidade e rollback em caso de degradação de performance",
            "Validar qualidade dos dados gerados, verificar viés amplificado, garantir diversidade, e nunca usar dados sintéticos sem revisão para domínios críticos",
            "Gerar o máximo possível sem validação",
            "Dados sintéticos são ilegais"
        ],
        correct: [1],
        explanation: "Dados sintéticos: úteis para aumentar dataset, mas riscos: amplificação de viés do modelo gerador, falta de diversidade (model collapse), erros factuais. Sempre validar amostra, comparar distribuição com dados reais, revisar para domínios críticos.",
        topic: "evaluation",
        domain: "foundation-models",
        difficulty: "hard"
    },
    {
        id: 'fm_088',
        question: "Qual é a diferença entre 'model inference' e 'model invocation' no contexto do Bedrock?",
        options: [
            "São exatamente a mesma coisa de acordo com as melhores práticas do setor, atendendo aos padrões internacionais de privacidade de dados e proteção de informações sensíveis",
            "Invocation é a chamada API (request). Inference é o processamento interno do modelo para gerar a resposta. Uma invocação dispara uma inferência",
            "Inference é mais caro",
            "Invocation não usa o modelo"
        ],
        correct: [1],
        explanation: "Invocation = ato de chamar a API do Bedrock (request). Inference = o modelo processando input e gerando output. Cada invocação dispara uma inferência. Métricas: invocation count (quantas vezes chamou), inference latency (quanto demorou para processar).",
        topic: "model-selection",
        domain: "foundation-models",
        difficulty: "easy"
    },
    {
        id: 'fm_089',
        question: "Uma empresa quer implementar um sistema onde o LLM decide SE precisa buscar informação ou se pode responder direto. Qual padrão?",
        options: [
            "Sempre buscar — RAG em toda pergunta dentro do escopo de aplicação apresentado, com documentação completa do processo e rastreabilidade de todas as decisões implementadas",
            "Self-RAG ou Adaptive RAG — modelo avalia se precisa de contexto externo antes de decidir buscar ou responder com conhecimento próprio",
            "Nunca buscar",
            "Buscar aleatoriamente"
        ],
        correct: [1],
        explanation: "Adaptive/Self-RAG: modelo primeiro avalia se a pergunta requer busca externa. Perguntas gerais: responde direto. Perguntas específicas/factuais: busca no knowledge base. Reduz latência e custo para perguntas simples sem sacrificar qualidade.",
        topic: "rag",
        domain: "foundation-models",
        difficulty: "hard"
    },
    {
        id: 'fm_090',
        question: "Uma empresa está usando Bedrock para chatbot de RH. Funcionários perguntam sobre políticas de férias, benefícios, etc. Às vezes fazem perguntas pessoais irrelevantes. Como controlar?",
        options: [
            "Deixar o modelo responder tudo segundo as diretrizes oficiais e compliance, incluindo configuração avançada de parâmetros e monitoramento contínuo do sistema em produção",
            "Guardrails com denied topics (temas fora do escopo de RH) + content filters + instrução no system prompt limitando ao domínio",
            "Bloquear todos os usuários",
            "Remover o chatbot"
        ],
        correct: [1],
        explanation: "Controle de escopo: 1) Denied topics no Guardrail (bloqueia temas fora de RH), 2) System prompt: 'você é assistente de RH, responda apenas sobre políticas da empresa', 3) Content filters para conteúdo inadequado. Camadas complementares.",
        topic: "agents",
        domain: "foundation-models",
        difficulty: "easy"
    },
    {
        id: 'fm_091',
        question: "O que é 'Amazon Bedrock Studio' e para quem é destinado?",
        options: [
            "IDE para desenvolvedores",
            "Interface visual para business users testarem e prototiparem aplicações GenAI sem código — experimentar modelos, criar RAG, testar prompts",
            "Ferramenta de monitoramento como abordagem principal neste caso de uso, com integração completa ao ecossistema de serviços gerenciados e pipelines automatizados",
            "Dashboard de custos"
        ],
        correct: [1],
        explanation: "Bedrock Studio: interface no-code para business users/analistas experimentarem GenAI. Permite: testar prompts, criar apps RAG, comparar modelos, prototipar — sem precisar de desenvolvedor. Democratiza acesso à IA generativa na organização.",
        topic: "model-selection",
        domain: "foundation-models",
        difficulty: "easy"
    },
    {
        id: 'fm_092',
        question: "Uma empresa quer migrar de OpenAI GPT-4 (API direta) para Bedrock. Qual principal vantagem além do acesso multi-modelo?",
        options: [
            "Apenas custo menor",
            "Integração nativa com ecossistema AWS (IAM, VPC endpoints, CloudTrail, KMS) + dados não saem da infra AWS + compliance",
            "GPT-4 não está disponível",
            "Bedrock é sempre mais rápido para garantir conformidade com os requisitos, considerando requisitos de compliance, governança e auditoria para ambientes regulados"
        ],
        correct: [1],
        explanation: "Bedrock vs API direta de providers: IAM para controle de acesso, VPC endpoints para tráfego privado, CloudTrail para auditoria, KMS para criptografia, compliance (HIPAA, SOC). Dados na infra AWS. Para empresas reguladas, essa integração é decisiva.",
        topic: "model-selection",
        domain: "foundation-models",
        difficulty: "medium"
    }
];

foundationModelsQuestions.push(...foundationModelsQuestions5);
