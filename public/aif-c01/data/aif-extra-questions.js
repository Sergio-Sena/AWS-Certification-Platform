// AIF-C01 - Questões Complementares: Simulado 02 + Formatos Especiais
// Distribuição alinhada ao exame: D1(4) + D2(3) + D3(8) + D4(1) + D5(2) + Matching(2) = 20

const aifExtraQuestions = [
    // D1 - Fundamentos IA/ML (CNN, K-fold, MLOps, Pipeline)
    {
        id: 'extra_001',
        question: "Uma empresa de seguros precisa classificar AUTOMATICAMENTE fotografias de veículos em três categorias de severidade: leve, moderada e grave. Que tipo de arquitetura de rede neural é a MAIS adequada?",
        options: [
            "Rede neural recorrente (RNN)",
            "Rede neural convolucional (CNN)",
            "Regressão linear simples sobre os pixels da imagem",
            "Árvore de decisão sobre os metadados das fotos"
        ],
        correct: [1],
        explanation: "CNNs são projetadas para extrair padrões espaciais em imagens (bordas, formas, texturas), sendo a arquitetura padrão para visão computacional. RNNs são para dados sequenciais. Regressão linear é simples demais. Árvore sobre metadados ignora o conteúdo visual.",
        topic: "neural-networks",
        domain: "ai-ml"
    },
    {
        id: 'extra_002',
        question: "Uma equipe quer avaliar o desempenho de um modelo com um conjunto de dados RELATIVAMENTE PEQUENO, usando TODAS as amostras tanto para treino quanto para validação ao longo de várias iterações. Qual técnica?",
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
        id: 'extra_003',
        question: "Selecione DUAS práticas FUNDAMENTAIS de MLOps para garantir qualidade e reprodutibilidade de modelos em produção.",
        options: [
            "VERSIONAR dados, modelos e código de forma integrada, permitindo reproduzir qualquer experimento",
            "Implantar modelos manualmente em produção, sem pipelines automatizados",
            "MONITORAR continuamente drift, qualidade e custo do modelo em produção, disparando ações quando necessário",
            "Eliminar a etapa de avaliação automática, confiando apenas na inspeção humana após o deploy"
        ],
        correct: [0, 2],
        explanation: "MLOps maduro exige: versionamento integrado (dados + modelo + código) para reprodutibilidade e auditoria, e monitoramento contínuo em produção para detectar drift e degradação silenciosa. Deploys manuais e pular avaliação são antipadrões.",
        topic: "concepts",
        domain: "ai-ml"
    },
    {
        id: 'extra_004',
        question: "Em um projeto de ML, após o deploy a precisão do modelo caiu drasticamente devido a mudanças nos dados em produção. Qual ferramenta da AWS deveria ter sido usada para detectar esse problema?",
        options: [
            "SageMaker Data Wrangler",
            "SageMaker Feature Store",
            "SageMaker Model Monitor",
            "Amazon Kendra"
        ],
        correct: [2],
        explanation: "Model Monitor captura baseline dos dados de treino, monitora dados em produção, compara distribuições usando PSI e KL Divergence, e gera alertas quando detecta data drift. Data Wrangler é para preparação. Feature Store é para consistência de features. Kendra é busca corporativa.",
        topic: "aws-services",
        domain: "ai-ml"
    },
    // D2 - IA Generativa (Top-p, Prompt Management, Titan Embeddings)
    {
        id: 'extra_005',
        question: "Uma equipe quer controlar a DIVERSIDADE da saída de um LLM limitando o conjunto de tokens candidatos àqueles cuja probabilidade ACUMULADA atinge 0.9. Qual parâmetro?",
        options: [
            "Temperature, que controla a aleatoriedade da distribuição",
            "Top-p (nucleus sampling), que limita o sorteio aos tokens cuja probabilidade acumulada atinge o valor configurado",
            "Maximum tokens, que limita o tamanho da resposta gerada",
            "Stop sequences, que indicam quando o modelo deve parar de gerar"
        ],
        correct: [1],
        explanation: "Top-p (nucleus sampling) limita o sorteio ao menor conjunto de tokens cuja probabilidade acumulada atinge o valor configurado (ex: 0.9 = só tokens que juntos somam 90% da massa de probabilidade). Temperature afeta a forma da distribuição. Max tokens define tamanho.",
        topic: "inference-params",
        domain: "generative-ai"
    },
    {
        id: 'extra_006',
        question: "Uma empresa quer PADRONIZAR prompts, REUTILIZAR templates entre times e GERENCIAR versões de forma centralizada no Bedrock. Qual recurso?",
        options: [
            "Amazon Bedrock Knowledge Bases, para implementar RAG sobre dados privados",
            "Amazon Bedrock Agents, para orquestrar chamadas a APIs",
            "Amazon Bedrock Prompt Management, para criar, versionar e compartilhar prompts",
            "Amazon Bedrock Guardrails, para filtrar conteúdo sensível"
        ],
        correct: [2],
        explanation: "Bedrock Prompt Management é o recurso para criação, versionamento e compartilhamento de prompts entre times, permitindo padronizar e iterar templates sem espalhar prompts pelo código.",
        topic: "bedrock",
        domain: "generative-ai"
    },
    {
        id: 'extra_007',
        question: "Uma empresa quer converter milhões de descrições textuais de produtos em representações vetoriais (embeddings) para busca semântica, usando um modelo gerenciado no Bedrock. Qual modelo?",
        options: [
            "Amazon Titan Text Generation, para gerar descrições novas a partir de prompts",
            "Amazon Titan Embeddings, para gerar representações vetoriais de texto",
            "Stable Diffusion, para gerar imagens a partir de texto",
            "Amazon Nova Reel, para gerar vídeos a partir de texto"
        ],
        correct: [1],
        explanation: "Amazon Titan Embeddings é o modelo do Bedrock projetado para converter texto em vetores numéricos densos, base para busca semântica, RAG e clusterização. Titan Text Generation gera texto novo. Stable Diffusion gera imagens. Nova Reel gera vídeos.",
        topic: "bedrock",
        domain: "generative-ai"
    },
    // D3 - Aplicações de Foundation Models / Serviços de IA (8 questões)
    {
        id: 'extra_008',
        question: "Uma rede de varejo quer detectar atividades atípicas em VÍDEOS de câmeras de segurança, identificando pessoas, objetos e movimentos suspeitos sem treinar um modelo do zero. Qual serviço?",
        options: [
            "Amazon Rekognition Video, que analisa pessoas, objetos e atividades em fluxos de vídeo",
            "Amazon Polly, que converte texto em voz",
            "Amazon Comprehend Medical, que analisa textos clínicos",
            "Amazon Translate, que traduz texto entre idiomas"
        ],
        correct: [0],
        explanation: "Rekognition Video é o serviço gerenciado para análise de vídeos: detecta pessoas, objetos, atividades, rostos e conteúdo impróprio em fluxos armazenados ou em tempo quase real, sem treinar modelos.",
        topic: "aws-ai-services",
        domain: "foundation-models"
    },
    {
        id: 'extra_009',
        question: "Uma empresa quer classificar tickets de suporte em categorias ESPECÍFICAS do negócio ('problema de rede', 'bug de software', 'pedido de feature') que NÃO estão nas categorias padrão. Sem time de data science. Qual serviço?",
        options: [
            "Amazon Comprehend Custom Classification, treinando um classificador customizado com exemplos rotulados",
            "Amazon Polly com vozes neurais",
            "Amazon Translate em modo batch",
            "Amazon Rekognition Custom Labels"
        ],
        correct: [0],
        explanation: "Comprehend Custom Classification permite treinar classificador de texto customizado para categorias específicas do negócio, fornecendo apenas exemplos rotulados, sem expertise em ML. Rekognition Custom Labels é para imagens, não texto.",
        topic: "aws-ai-services",
        domain: "foundation-models"
    },
    {
        id: 'extra_010',
        question: "Um podcast quer gerar transcrições automáticas DISTINGUINDO o que cada participante disse, com rótulos por falante ('Speaker 0', 'Speaker 1'). Qual recurso?",
        options: [
            "Amazon Translate em modo batch",
            "Amazon Transcribe com identificação de falantes (Speaker Diarization)",
            "Amazon Polly com SSML para múltiplas vozes",
            "Amazon Comprehend com análise de sentimento por sentença"
        ],
        correct: [1],
        explanation: "Amazon Transcribe oferece speaker diarization, que segmenta a transcrição rotulando cada trecho com o falante correspondente. Ideal para podcasts, reuniões e atendimentos.",
        topic: "aws-ai-services",
        domain: "foundation-models"
    },
    {
        id: 'extra_011',
        question: "Uma empresa de telecomunicações quer construir uma URA inteligente que entenda perguntas em linguagem natural por voz e texto, com intenções pré-definidas e integração com Lambda. Qual serviço?",
        options: [
            "Amazon Polly, para converter texto em voz natural",
            "Amazon Lex, para construir chatbots conversacionais com intenções e slots",
            "Amazon Transcribe, para converter fala em texto",
            "Amazon Comprehend, para extrair sentimento de textos"
        ],
        correct: [1],
        explanation: "Amazon Lex é o serviço para interfaces conversacionais (chatbots de voz e texto) usando intenções, slots e prompts, com integração nativa ao Lambda. É a base da Alexa. Polly, Transcribe e Comprehend cobrem partes do pipeline mas não orquestram o chatbot.",
        topic: "aws-ai-services",
        domain: "foundation-models"
    },
    {
        id: 'extra_012',
        question: "Uma plataforma de e-commerce quer mostrar produtos SEMELHANTES a um item que o usuário está visualizando ('outras camisetas semelhantes a esta'). Qual receita do Amazon Personalize?",
        options: [
            "USER_PERSONALIZATION, para recomendações personalizadas baseadas no usuário",
            "SIMS (item-to-item similarity), para recomendar itens similares a um item dado",
            "PERSONALIZED_RANKING, para reordenar uma lista existente para o usuário",
            "FORECAST, para previsão de séries temporais"
        ],
        correct: [1],
        explanation: "SIMS (Similar Items) é a receita do Personalize para recomendações ITEM-A-ITEM: dado um item de referência, retorna itens semelhantes com base no comportamento agregado dos usuários.",
        topic: "aws-ai-services",
        domain: "foundation-models"
    },
    {
        id: 'extra_013',
        question: "Uma equipe de busca semântica converte documentos em embeddings de 1024 dimensões e precisa encontrar os documentos MAIS SIMILARES a uma consulta. Qual métrica é a mais usada?",
        options: [
            "Erro quadrático médio (MSE) entre os vetores",
            "Similaridade do cosseno (Cosine similarity) entre os vetores",
            "Acurácia entre os valores de cada dimensão",
            "Pontuação F1 entre os vetores comparados"
        ],
        correct: [1],
        explanation: "Similaridade do cosseno mede o ângulo entre dois vetores e é a métrica padrão para comparar embeddings em busca semântica e RAG, pois captura proximidade direcional independentemente da magnitude.",
        topic: "embeddings",
        domain: "foundation-models"
    },
    {
        id: 'extra_014',
        question: "Uma equipe de cientistas de dados quer um ambiente integrado baseado em WEB para desenvolver, treinar, depurar e implantar modelos de ML, com notebooks colaborativos e gestão de experimentos. Qual recurso?",
        options: [
            "Amazon SageMaker Canvas, interface visual no-code para analistas de negócio",
            "Amazon SageMaker Studio, IDE web completa para cientistas de dados",
            "AWS DeepRacer, ambiente de aprendizado por reforço gamificado",
            "Amazon Rekognition, serviço pré-treinado de visão computacional"
        ],
        correct: [1],
        explanation: "SageMaker Studio é a IDE web unificada com notebooks Jupyter colaborativos, debugger visual, profiler, gerenciamento de experimentos, pipelines e endpoints. Canvas é no-code para analistas. DeepRacer é educacional.",
        topic: "aws-ai-services",
        domain: "foundation-models"
    },
    {
        id: 'extra_015',
        question: "Uma empresa precisa que funcionários encontrem informação rapidamente em documentos internos (SharePoint, S3, Confluence) usando perguntas em linguagem natural. Qual serviço?",
        options: [
            "Amazon OpenSearch Service",
            "Amazon Kendra — busca corporativa inteligente com NLP que entende intenção e retorna respostas diretas",
            "Amazon Athena",
            "Amazon Comprehend"
        ],
        correct: [1],
        explanation: "Kendra é busca corporativa com NLP: entende perguntas em linguagem natural, indexa 40+ fontes (S3, SharePoint, Confluence), respeita permissões e retorna respostas diretas. OpenSearch é para busca técnica/logs. Regra: linguagem natural + docs corporativos = Kendra.",
        topic: "aws-ai-services",
        domain: "foundation-models"
    },
    // D4 - IA Responsável (LIME/explicabilidade)
    {
        id: 'extra_016',
        question: "Uma instituição financeira precisa explicar previsões INDIVIDUAIS de seu modelo de crédito para clientes que tiveram pedidos negados. Quer técnica LOCAL e AGNÓSTICA AO MODELO. Qual?",
        options: [
            "Aumentar o número de épocas durante o treinamento",
            "LIME (Local Interpretable Model-agnostic Explanations)",
            "Reduzir o tamanho do dataset de treinamento",
            "Aumentar o parâmetro de temperatura do modelo"
        ],
        correct: [1],
        explanation: "LIME é técnica de explicabilidade LOCAL e AGNÓSTICA ao modelo: aproxima o comportamento na vizinhança de uma predição específica com modelo simples e interpretável, indicando quais atributos pesaram naquela decisão individual.",
        topic: "explainability",
        domain: "responsible-ai"
    },
    // D5 - Segurança (IAM Roles, menor privilégio)
    {
        id: 'extra_017',
        question: "Uma aplicação de IA em EC2 precisa acessar dados em S3 para inferência. Selecione DUAS práticas RECOMENDADAS para conceder permissões de forma SEGURA.",
        options: [
            "Atribuir uma IAM Role à instância EC2 com permissões mínimas necessárias para acessar o bucket S3",
            "Embutir Access Key e Secret Key permanentes diretamente no código-fonte da aplicação",
            "Aplicar o princípio do MENOR PRIVILÉGIO, concedendo apenas as ações S3 estritamente necessárias",
            "Compartilhar a credencial root da conta AWS com a aplicação"
        ],
        correct: [0, 2],
        explanation: "IAM Role na EC2 entrega credenciais TEMPORÁRIAS automaticamente sem chaves estáticas. Menor privilégio concede apenas ações necessárias. Embutir keys em código e usar root são antipadrões graves de segurança.",
        topic: "iam-security",
        domain: "security-ai"
    },
    {
        id: 'extra_018',
        question: "Um hospital usa modelo de ML para identificar pacientes com RISCO DE CÂNCER. A equipe considera MUITO MAIS GRAVE deixar de detectar um paciente doente (falso negativo). Qual métrica priorizar?",
        options: [
            "Acurácia (Accuracy), pois é a métrica mais simples",
            "Precisão (Precision), pois minimiza falsos positivos",
            "Recall (Revocação), pois minimiza falsos negativos",
            "Tempo médio de resposta (Latency)"
        ],
        correct: [2],
        explanation: "Recall mede a proporção de positivos REAIS que o modelo captou. Priorizar quando falsos negativos são mais custosos (diagnóstico de doenças, fraude, segurança). Acurácia pode enganar em datasets desbalanceados.",
        topic: "metrics",
        domain: "ai-ml"
    },
    // Formatos especiais (Correspondência e Ordenação)
    {
        id: 'extra_019',
        question: "Associe cada serviço AWS ao seu caso de uso principal:\n\n1. Amazon Comprehend\n2. Amazon Rekognition\n3. Amazon Textract\n4. Amazon Polly\n\nA) Extrair texto de documentos escaneados\nB) Detectar sentimento em reviews de clientes\nC) Converter relatórios em áudio para acessibilidade\nD) Identificar objetos em imagens de segurança",
        options: [
            "1-B, 2-D, 3-A, 4-C",
            "1-A, 2-B, 3-C, 4-D",
            "1-D, 2-A, 3-B, 4-C",
            "1-C, 2-D, 3-B, 4-A"
        ],
        correct: [0],
        explanation: "Comprehend = NLP (sentimento). Rekognition = visão (objetos/faces). Textract = OCR inteligente (documentos). Polly = text-to-speech (áudio).",
        topic: "services-matching",
        domain: "foundation-models"
    },
    {
        id: 'extra_020',
        question: "Qual é a ordem correta do ciclo de vida de ML?",
        options: [
            "1) Definir problema e métricas → 2) Coletar e preparar dados → 3) Treinar modelo → 4) Avaliar → 5) Implantar → 6) Monitorar (drift) → 7) Retreinar se necessário",
            "1) Treinar → 2) Coletar dados → 3) Deploy → 4) Avaliar",
            "1) Deploy → 2) Treinar → 3) Coletar → 4) Monitorar",
            "1) Avaliar → 2) Treinar → 3) Coletar → 4) Deploy"
        ],
        correct: [0],
        explanation: "ML lifecycle: definir → dados → treinamento → avaliação → deploy → monitoramento (drift) → retreinar. Ciclo iterativo. 80-85% dos projetos falham por falta de processo. Monitoramento fecha o ciclo detectando degradação.",
        topic: "ordering",
        domain: "ai-ml"
    }
];

window.aifExtraQuestions = aifExtraQuestions;
