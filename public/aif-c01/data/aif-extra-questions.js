// AIF-C01 - Questões Complementares: Baseadas em Prova Real (955/1000)
// Cobrindo gaps do banco: JumpStart, Provisioned Throughput, Invocation Logging, k-fold,
// Auto Scaling endpoints, Security Scoping Matrix, LIME, GAN, pipeline Transcribe+Comprehend

const aifExtraQuestions = [
    // D1 - Fundamentos IA/ML (5 questões)
    {
        id: 'extra_001',
        question: "Uma empresa quer avaliar o desempenho de um modelo com um conjunto de dados RELATIVAMENTE PEQUENO, usando TODAS as amostras tanto para treino quanto para validação ao longo de várias iterações. Qual técnica?",
        options: [
            "Treinar com todo o dataset sem separar dados de validação",
            "Validação cruzada k-fold (k-fold cross-validation)",
            "Dividir 99% dos dados para treino e 1% para teste",
            "Treinar o modelo várias vezes com os mesmos dados de treino e teste"
        ],
        correct: [1],
        explanation: "K-fold cross-validation divide o dataset em K partes, treina em K-1 e valida em 1, rotacionando. Cada amostra é usada para treino e validação em diferentes rodadas, dando estimativa robusta com poucos dados.",
        topic: "algorithms",
        domain: "ai-ml"
    },
    {
        id: 'extra_002',
        question: "Uma empresa observa que seu endpoint SageMaker para inferência em tempo real sofre PICOS DE LATÊNCIA durante horários comerciais, mas fica OCIOSO à noite. Qual recurso ajusta AUTOMATICAMENTE a capacidade?",
        options: [
            "Habilitar Auto Scaling no endpoint do SageMaker",
            "Aumentar permanentemente o número de instâncias para o pico máximo",
            "Reduzir a temperatura do modelo durante a noite",
            "Reiniciar manualmente o endpoint a cada hora"
        ],
        correct: [0],
        explanation: "Auto Scaling em endpoints SageMaker adiciona ou remove instâncias automaticamente com base em métricas (invocações/min, CPU), mantendo latência aceitável e reduzindo custo em horários de baixa demanda.",
        topic: "inference-types",
        domain: "ai-ml"
    },
    {
        id: 'extra_003',
        question: "Uma empresa está construindo um aplicativo que precisa gerar dados sintéticos baseados em dados existentes. Que tipo de modelo a empresa pode usar?",
        options: [
            "Generative Adversarial Network (GAN)",
            "Rede neural residual, incluindo configuração avançada de parâmetros e monitoramento contínuo do sistema em produção",
            "XGBoost",
            "WaveNet"
        ],
        correct: [0],
        explanation: "GANs são compostas por Gerador (cria dados sintéticos) e Discriminador (julga se é real ou falso). A competição produz dados cada vez mais realistas. Técnica clássica para data augmentation e geração de dados sintéticos.",
        topic: "neural-networks",
        domain: "ai-ml"
    },
    {
        id: 'extra_004',
        question: "Uma empresa está construindo um chatbot de atendimento ao cliente. Quer que o chatbot melhore suas respostas aprendendo com interações passadas. Qual estratégia fornece essa capacidade de autoaperfeiçoamento?",
        options: [
            "Aprendizagem supervisionada com banco de perguntas frequentes continuamente atualizado",
            "Aprendizagem supervisionada com conjunto de dados manualmente selecionado de boas e más respostas",
            "Aprendizagem por reforço com recompensas por feedback positivo do cliente",
            "Aprendizagem não supervisionada para encontrar grupos de consultas semelhantes"
        ],
        correct: [2],
        explanation: "Aprendizagem por reforço: o chatbot recebe recompensa (feedback positivo) ou penalidade (negativo) e ajusta comportamento para maximizar recompensas. É o paradigma de autoaperfeiçoamento (RLHF).",
        topic: "ml-types",
        domain: "ai-ml"
    },
    {
        id: 'extra_005',
        question: "Uma empresa está treinando um modelo de fundação (FM). Quer aumentar a precisão do modelo até um nível de aceitação específico. Qual solução?",
        options: [
            "Diminua o tamanho do lote",
            "Diminua as épocas",
            "Aumentar as épocas",
            "Aumente o parâmetro de temperatura"
        ],
        correct: [2],
        explanation: "Aumentar épocas = mais passagens pelos dados = modelo aprende mais padrões = precisão aumenta (até certo ponto antes de overfitting). Temperatura é parâmetro de inferência, não de treinamento.",
        topic: "training-inference",
        domain: "ai-ml"
    },
    // D2 - IA Generativa (5 questões)
    {
        id: 'extra_006',
        question: "Uma empresa quer usar um LLM no Bedrock para análise de sentimentos. Precisa do LLM para produzir respostas mais CONSISTENTES ao mesmo prompt. Qual ajuste?",
        options: [
            "Aumentar o comprimento máximo de geração",
            "Diminua o valor da temperatura",
            "Diminua o comprimento dos tokens de saída",
            "Aumente o valor da temperatura"
        ],
        correct: [1],
        explanation: "Temperatura baixa (próxima de 0) → modelo escolhe tokens mais prováveis → respostas consistentes e determinísticas. Temperatura alta → mais aleatoriedade → respostas diferentes a cada vez.",
        topic: "inference-params",
        domain: "generative-ai"
    },
    {
        id: 'extra_007',
        question: "Uma empresa quer classificar sentimento de passagens de texto como positivo ou negativo usando LLM no Bedrock. Qual estratégia de prompt engineering?",
        options: [
            "Forneça a passagem sem contexto ou exemplo adicional",
            "Forneça o trecho com exemplos de tarefas não relacionadas (resumo, Q&A), com integração completa ao ecossistema de serviços gerenciados e pipelines automatizados",
            "Forneça explicação detalhada de como LLMs funcionam no prompt",
            "Forneça exemplos de passagens com rótulos positivos ou negativos, seguidos pela nova passagem a classificar"
        ],
        correct: [3],
        explanation: "Few-shot prompting: dar exemplos rotulados no prompt guia o modelo no formato e tarefa. O modelo aprende o padrão dos exemplos e classifica corretamente a nova passagem.",
        topic: "prompt-engineering",
        domain: "generative-ai"
    },
    {
        id: 'extra_008',
        question: "Uma empresa tem terabytes de dados em banco de dados para análise de negócios. Quer construir aplicativo de IA que construa consultas SQL a partir de texto. Funcionários têm experiência mínima. Qual solução?",
        options: [
            "Rede neural residual",
            "Transformadores pré-treinados generativos (GPT)",
            "Rede de Ondas (WaveNet)",
            "Máquina de vetores de suporte, considerando requisitos de compliance, governança e auditoria para ambientes regulados"
        ],
        correct: [1],
        explanation: "GPT (LLMs baseados em Transformers) são projetados para geração de texto, incluindo conversão de linguagem natural para SQL (text-to-SQL). ResNet é para imagens, WaveNet para áudio, SVM para classificação tradicional.",
        topic: "llm-applications",
        domain: "generative-ai"
    },
    {
        id: 'extra_009',
        question: "Uma empresa quer saber quanta informação cabe em um prompt ao escolher um FM no Amazon Bedrock. Qual consideração?",
        options: [
            "Tamanho do lote",
            "Temperatura",
            "Tamanho do modelo, garantindo escalabilidade horizontal e vertical conforme demanda do workload específico",
            "Janela de contexto"
        ],
        correct: [3],
        explanation: "Janela de contexto define o máximo de tokens que o modelo pode processar (prompt + resposta). Modelos diferentes têm janelas diferentes (4K, 32K, 128K, 200K tokens). Temperatura controla criatividade, não capacidade.",
        topic: "inference-params",
        domain: "generative-ai"
    },
    {
        id: 'extra_010',
        question: "Uma empresa de pesquisa implementou chatbot com FM do Bedrock. Após várias tentativas de prompt engineering, o FM apresenta desempenho ruim devido a termos científicos complexos. Como melhorar?",
        options: [
            "Use ajuste fino de adaptação de domínio para adaptar o FM a termos científicos complexos",
            "Limpe os dados para remover termos científicos complexos, utilizando as ferramentas nativas do serviço para automação e observabilidade operacional",
            "Altere os parâmetros de inferência do FM",
            "Use prompt de poucas tentativas (few-shot)"
        ],
        correct: [0],
        explanation: "Prompt engineering já foi tentado sem sucesso. Próximo passo: fine-tuning de adaptação de domínio para que o modelo aprenda vocabulário científico. Remover termos destrói o valor. Parâmetros não melhoram compreensão.",
        topic: "fine-tuning",
        domain: "generative-ai"
    },
    // D3 - Aplicações de Foundation Models (5 questões)
    {
        id: 'extra_011',
        question: "Qual serviço ou recurso da AWS pode ajudar uma equipe a implantar e consumir rapidamente um modelo de base (FM) dentro do VPC da equipe?",
        options: [
            "PartyRock, an Amazon Bedrock Playground",
            "Amazon Personalize",
            "Amazon SageMaker JumpStart",
            "Amazon SageMaker Endpoints"
        ],
        correct: [2],
        explanation: "SageMaker JumpStart oferece catálogo de FMs pré-treinados (Llama, Falcon, Mistral) que podem ser implantados com poucos cliques dentro do VPC do cliente. PartyRock é playground público. Bedrock não roda no seu VPC.",
        topic: "aws-ai-services",
        domain: "foundation-models"
    },
    {
        id: 'extra_012',
        question: "Uma empresa treinou modelo personalizado no Amazon Bedrock para melhorar qualidade de resumo. Qual ação para usar o modelo personalizado?",
        options: [
            "Conceda acesso ao modelo personalizado no Amazon Bedrock, com suporte a múltiplas regiões e redundância para alta disponibilidade e disaster recovery",
            "Adquira o throughput provisionado para o modelo personalizado",
            "Registre o modelo no Amazon SageMaker Model Registry",
            "Implante o modelo em endpoint do Amazon SageMaker"
        ],
        correct: [1],
        explanation: "No Bedrock, modelos customizados (fine-tuned) requerem Provisioned Throughput para inferência. Diferente dos modelos base que funcionam on-demand, modelos personalizados precisam de capacidade dedicada reservada.",
        topic: "bedrock",
        domain: "foundation-models"
    },
    {
        id: 'extra_013',
        question: "Um praticante de IA usa modelo base do Bedrock para resumir chats de atendimento. Quer armazenar logs de invocação para monitorar dados de entrada e saída. Qual estratégia?",
        options: [
            "Configure AWS CloudTrail como destino de logs para o modelo",
            "Habilite o registro de invocação no Amazon Bedrock",
            "Configure AWS Audit Manager como destino de logs",
            "Configure o registro de invocação no Amazon EventBridge"
        ],
        correct: [1],
        explanation: "Bedrock Model Invocation Logging registra inputs (prompts) e outputs (respostas) de cada chamada. CloudTrail registra quem chamou a API, mas NÃO o conteúdo do prompt/resposta.",
        topic: "bedrock",
        domain: "foundation-models"
    },
    {
        id: 'extra_014',
        question: "Uma empresa quer usar modelos de linguagem com Bedrock para interface de chat sobre manuais de produtos (PDFs). Qual solução MAIS econômica?",
        options: [
            "Use todos os PDFs para ajustar (fine-tune) um modelo no Bedrock, seguindo o modelo de responsabilidade compartilhada e as políticas de segurança corporativas",
            "Adicione todos os PDFs como contexto ao prompt do usuário",
            "Carregue PDFs para uma base de conhecimento do Amazon Bedrock (Knowledge Base)",
            "Adicione um PDF como contexto ao prompt do usuário"
        ],
        correct: [2],
        explanation: "Bedrock Knowledge Bases (RAG gerenciado): chunking → embeddings → busca vetorial → só chunks relevantes no prompt. Econômico: sem fine-tuning (caro), sem enviar todos os PDFs (excede janela e custa tokens).",
        topic: "rag",
        domain: "foundation-models"
    },
    {
        id: 'extra_015',
        question: "Uma empresa precisa escolher modelo do Bedrock que gere respostas em estilo que funcionários PREFIRAM. O que fazer?",
        options: [
            "Use tabelas de classificação de modelos públicos",
            "Use métricas de InvocationLatency no CloudWatch",
            "Avalie modelos usando conjuntos de dados de prompt integrados, implementando controles preventivos e detectivos conforme o framework de segurança organizacional",
            "Avalie modelos usando força de trabalho humana e conjuntos de dados de prompts personalizados"
        ],
        correct: [3],
        explanation: "Estilo preferido é subjetivo — não pode ser medido com métricas automáticas. Precisa de humanos da empresa avaliando respostas com prompts relevantes ao contexto real. Rankings públicos são genéricos.",
        topic: "bedrock",
        domain: "foundation-models"
    },
    // D4 - IA Responsável (2 questões)
    {
        id: 'extra_016',
        question: "Uma instituição financeira precisa explicar previsões INDIVIDUAIS de seu modelo de crédito para clientes com pedidos negados. Quer técnica LOCAL e AGNÓSTICA AO MODELO. Qual?",
        options: [
            "Aumentar o número de épocas durante o treinamento, com capacidade de processamento paralelo e distribuído para atender picos de demanda",
            "LIME (Local Interpretable Model-agnostic Explanations)",
            "Reduzir o tamanho do dataset de treinamento",
            "Aumentar o parâmetro de temperatura do modelo"
        ],
        correct: [1],
        explanation: "LIME é técnica de explicabilidade LOCAL e AGNÓSTICA: aproxima o comportamento na vizinhança de uma predição específica com modelo simples, indicando quais atributos pesaram naquela decisão individual.",
        topic: "explainability",
        domain: "responsible-ai"
    },
    {
        id: 'extra_017',
        question: "Uma empresa usa a Generative AI Security Scoping Matrix para avaliar responsabilidades de segurança. Qual escopo dá MAIOR propriedade de responsabilidades de segurança?",
        options: [
            "Usar aplicativo empresarial de terceiros com IA generativa incorporada, integrando com os sistemas existentes através de APIs e conectores nativos da plataforma",
            "Construir aplicativo usando FM de terceiros existente",
            "Refinar FM de terceiros ajustando com dados específicos do negócio",
            "Construir e treinar modelo de IA generativa do zero usando dados proprietários"
        ],
        correct: [3],
        explanation: "Quanto mais você constrói/controla, mais responsabilidade de segurança assume. Treinar do zero = responsável por TUDO (dados, modelo, infra, segurança, bias). App de terceiros = menor responsabilidade.",
        topic: "responsible-ai-governance",
        domain: "responsible-ai"
    },
    // D5 - Segurança e Compliance (3 questões)
    {
        id: 'extra_018',
        question: "Uma empresa de segurança usa Amazon Bedrock para executar FMs. Quer identificar tentativas de acesso não autorizado para definir políticas IAM. Qual serviço?",
        options: [
            "AWS Audit Manager",
            "Amazon Fraud Detector",
            "AWS CloudTrail",
            "AWS Trusted Advisor"
        ],
        correct: [2],
        explanation: "CloudTrail registra todas as API calls (quem chamou InvokeModel, quando, se foi permitido ou negado). Mostra tentativas de acesso não autorizado. Audit Manager gera relatórios, não identifica acessos em tempo real.",
        topic: "iam-security",
        domain: "security-ai"
    },
    {
        id: 'extra_019',
        question: "Uma empresa de IA avalia seus sistemas com ajuda de ISVs. Precisa receber notificações quando relatórios de conformidade de um ISV ficam disponíveis. Qual serviço?",
        options: [
            "AWS Artifact",
            "AWS Data Exchange",
            "AWS Trusted Advisor",
            "AWS Audit Manager"
        ],
        correct: [0],
        explanation: "AWS Artifact é o portal centralizado para acessar relatórios de conformidade e segurança da AWS e de terceiros. Permite configurar notificações quando novos relatórios ficam disponíveis.",
        topic: "compliance",
        domain: "security-ai"
    },
    {
        id: 'extra_020',
        question: "Uma empresa quer desenvolver aplicativo LLM usando Bedrock e dados de clientes no S3. Política de segurança: cada equipe acessa dados somente dos clientes da própria equipe. Qual solução?",
        options: [
            "Redija dados pessoais no S3. Atualize política de bucket para a equipe",
            "Crie função de serviço com acesso ao S3. Equipes especificam nome do cliente em cada request, otimizando custo operacional através de right-sizing e monitoramento de utilização de recursos",
            "Crie função de serviço personalizada do Bedrock para cada equipe com acesso somente aos dados da equipe",
            "Crie função Bedrock com acesso total ao S3. Crie funções IAM por equipe com acesso às pastas"
        ],
        correct: [2],
        explanation: "Service role separada do Bedrock por equipe, com permissões S3 restritas aos prefixos dos clientes daquela equipe. Princípio do menor privilégio. Confiar no input do usuário (B) é inseguro. Acesso total (D) não isola.",
        topic: "iam-security",
        domain: "security-ai"
    }
];

window.aifExtraQuestions = aifExtraQuestions;
