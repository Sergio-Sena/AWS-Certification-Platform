// AIF-C01 - Material de Estudo com Método 80/20
// Os 20% vitais que cobrem 80% do exame estão marcados como priority: 'vital'

const aifStudyMaterial = {
    // DOMÍNIO 1: Fundamentals of AI & ML (20%)
    'ai-ml-fundamentals': {
        title: '🧠 Fundamentos de IA e ML',
        weight: 20,
        priority: 'vital',
        pareto: 'Domine: tipos de aprendizado + algoritmos (K-Means, XGBoost, K-NN) + métricas (MSE, RMSE, F1, AUC) + inferência (batch/real-time/serverless) + Trainium/Inferentia',
        content: `
            <div class="study-section">
                <h4>📌 20% Vital — O que cai mais:</h4>
                <ul>
                    <li><strong>Hierarquia:</strong> IA → ML → Deep Learning → IA Generativa</li>
                    <li><strong>Tipos de aprendizado:</strong> Supervisionado (dados rotulados), Não supervisionado (padrões sem rótulo), Reforço (tentativa/erro/recompensa), Federado (privacidade), Transferência (reaproveitar modelo)</li>
                    <li><strong>Treinamento vs Inferência:</strong> Treinamento = caro, pontual, GPUs. Inferência = barato, contínuo, tempo real</li>
                    <li><strong>Modelo vs Algoritmo:</strong> Algoritmo é o método. Modelo é o resultado</li>
                    <li><strong>Qualidade de dados:</strong> Dados relevantes e de qualidade são o requisito mais importante para um bom modelo</li>
                </ul>

                <h4>🔑 Algoritmos de ML (cai no exame!):</h4>
                <table>
                    <tr><th>Algoritmo</th><th>Tipo</th><th>Quando usar</th></tr>
                    <tr><td><strong>Regressão Linear</strong></td><td>Supervisionado (regressão)</td><td>Prever valor numérico com relação linear (preço, demanda)</td></tr>
                    <tr><td><strong>Árvores de Decisão</strong></td><td>Supervisionado</td><td>Relações não-lineares, regras condicionais, fácil de interpretar</td></tr>
                    <tr><td><strong>XGBoost</strong></td><td>Supervisionado (classificação/regressão)</td><td>Alta precisão em dados tabulares, combina múltiplas árvores</td></tr>
                    <tr><td><strong>K-NN</strong></td><td>Supervisionado (classificação)</td><td>Classificar baseado nos K vizinhos mais próximos</td></tr>
                    <tr><td><strong>K-Means</strong></td><td>Não supervisionado (clustering)</td><td>Agrupar dados similares sem rótulos (segmentação de clientes)</td></tr>
                </table>

                <h4>📊 Métricas de Avaliação (cai MUITO!):</h4>
                <table>
                    <tr><th>Métrica</th><th>Tipo</th><th>O que mede</th><th>Quando usar</th></tr>
                    <tr><td><strong>Acurácia</strong></td><td>Classificação</td><td>% de acertos total</td><td>Classes balanceadas</td></tr>
                    <tr><td><strong>Precisão</strong></td><td>Classificação</td><td>Dos previstos positivos, quantos são reais</td><td>Custo alto de falso positivo</td></tr>
                    <tr><td><strong>Recall</strong></td><td>Classificação</td><td>Dos reais positivos, quantos foram encontrados</td><td>Custo alto de falso negativo (fraude, doença)</td></tr>
                    <tr><td><strong>F1 Score</strong></td><td>Classificação</td><td>Média harmônica de Precisão e Recall</td><td>Classes desbalanceadas</td></tr>
                    <tr><td><strong>AUC</strong></td><td>Classificação</td><td>Capacidade de distinguir classes (0.5=aleatório, 1=perfeito)</td><td>Comparar modelos</td></tr>
                    <tr><td><strong>MSE</strong></td><td>Regressão</td><td>Média dos erros ao quadrado (penaliza erros grandes)</td><td>Otimização do modelo</td></tr>
                    <tr><td><strong>RMSE</strong></td><td>Regressão</td><td>Raiz do MSE (mesma unidade dos dados)</td><td>Comunicar erro de forma interpretável</td></tr>
                    <tr><td><strong>R²</strong></td><td>Regressão</td><td>% da variância explicada pelo modelo (0 a 1)</td><td>Avaliar poder explicativo</td></tr>
                    <tr><td><strong>MAE</strong></td><td>Regressão</td><td>Média do erro absoluto</td><td>Erro médio sem penalizar outliers</td></tr>
                </table>

                <h4>🔄 Tipos de Inferência:</h4>
                <table>
                    <tr><th>Tipo</th><th>Latência</th><th>Custo</th><th>Quando usar</th></tr>
                    <tr><td><strong>Batch (Lote)</strong></td><td>Alta (min/horas)</td><td>Menor</td><td>Grandes volumes, sem urgência (relatórios noturnos)</td></tr>
                    <tr><td><strong>Real-time</strong></td><td>Baixa (ms)</td><td>Maior (endpoint 24/7)</td><td>Apps interativos, fraude online</td></tr>
                    <tr><td><strong>Assíncrona</strong></td><td>Média</td><td>Médio</td><td>Payload grande, cliente pode esperar</td></tr>
                    <tr><td><strong>Serverless</strong></td><td>Variável (cold start)</td><td>Pay-per-use</td><td>Tráfego imprevisível, baixo volume</td></tr>
                </table>

                <h4>🖥️ Infraestrutura AWS para IA:</h4>
                <table>
                    <tr><th>Instância</th><th>Chip</th><th>Foco</th><th>Quando usar</th></tr>
                    <tr><td><strong>EC2 Trn (Trainium)</strong></td><td>AWS Trainium</td><td>TREINAMENTO</td><td>Treinar modelos grandes (deep learning, LLMs)</td></tr>
                    <tr><td><strong>EC2 Inf (Inferentia)</strong></td><td>AWS Inferentia</td><td>INFERÊNCIA</td><td>Servir modelos em produção (baixa latência, alto volume)</td></tr>
                </table>
                <p><em>Regra: Trainium = treinar. Inferentia = inferir (usar).</em></p>

                <h4>📈 Explicabilidade — PDPs:</h4>
                <ul>
                    <li><strong>Partial Dependence Plots:</strong> Gráficos que mostram como uma variável influencia a previsão do modelo</li>
                    <li>Eixo X = valores da variável, Eixo Y = efeito na previsão</li>
                    <li>Curva crescente = variável aumenta previsão. Plana = sem efeito</li>
                    <li>Usado para: explicabilidade, auditoria, governança, comunicação com negócio</li>
                </ul>

                <h4>⚠️ Quando NÃO usar IA:</h4>
                <ul>
                    <li>Regra fixa e bem definida (if/else resolve)</li>
                    <li>Baixo ROI (custo > benefício)</li>
                    <li>Dados insuficientes ou de má qualidade</li>
                    <li>Decisão crítica sem possibilidade de supervisão humana</li>
                </ul>

                <h4>📎 Serviços AWS relacionados:</h4>
                <ul>
                    <li><strong>SageMaker:</strong> Treinar, ajustar e implantar modelos ML</li>
                    <li><strong>SageMaker Ground Truth:</strong> Rotulagem de dados em escala</li>
                    <li><strong>SageMaker Canvas:</strong> ML no-code para business analysts</li>
                    <li><strong>SageMaker Clarify:</strong> Detectar bias + explicabilidade (SHAP + PDPs)</li>
                    <li><strong>SageMaker Serverless Inference:</strong> Endpoint sem gerenciar infra</li>
                </ul>
            </div>
        `
    },

    // DOMÍNIO 2: Fundamentals of Generative AI (24%)
    'generative-ai': {
        title: '🤖 Fundamentos de IA Generativa',
        weight: 24,
        priority: 'vital',
        pareto: 'Domine: LLMs + Transformers + Prompt Engineering + Temperatura/Top-p + Tokens/Janela de contexto',
        content: `
            <div class="study-section">
                <h4>📌 20% Vital — O que cai mais:</h4>
                <ul>
                    <li><strong>LLMs:</strong> Bilhões de parâmetros, treinados em trilhões de tokens, geram texto token por token</li>
                    <li><strong>Transformers:</strong> Mecanismo de atenção, processamento paralelo, base de todos os LLMs modernos (2017)</li>
                    <li><strong>Prompt Engineering:</strong> Zero-shot, few-shot, chain-of-thought, system prompts</li>
                    <li><strong>Parâmetros de inferência:</strong> Temperatura (criatividade), Top-p (diversidade), Max tokens (tamanho)</li>
                    <li><strong>Tokens e Janela de contexto:</strong> Token ≈ 4 caracteres. Janela = entrada + saída juntas</li>
                </ul>

                <h4>🔑 Prompt Engineering (cai MUITO):</h4>
                <table>
                    <tr><th>Técnica</th><th>Descrição</th><th>Quando usar</th></tr>
                    <tr><td>Zero-shot</td><td>Sem exemplos, apenas instrução</td><td>Tarefas simples e claras</td></tr>
                    <tr><td>Few-shot</td><td>Alguns exemplos no prompt</td><td>Formato específico de saída</td></tr>
                    <tr><td>Chain-of-thought</td><td>Pedir raciocínio passo a passo</td><td>Problemas complexos/lógicos</td></tr>
                    <tr><td>System prompt</td><td>Define persona/regras do modelo</td><td>Controlar comportamento</td></tr>
                </table>

                <h4>🌡️ Parâmetros de inferência:</h4>
                <ul>
                    <li><strong>Temperatura (0-1):</strong> 0 = determinístico/factual. 1 = criativo/variado</li>
                    <li><strong>Top-p (0-1):</strong> Controla diversidade do vocabulário considerado</li>
                    <li><strong>Max tokens:</strong> Limite de tokens na resposta</li>
                    <li><strong>Stop sequences:</strong> Tokens que encerram a geração</li>
                </ul>

                <h4>📊 LLMs vs SLMs:</h4>
                <table>
                    <tr><th>Aspecto</th><th>LLM</th><th>SLM</th></tr>
                    <tr><td>Tamanho</td><td>Bilhões de parâmetros</td><td>Milhões a poucos bilhões</td></tr>
                    <tr><td>Custo</td><td>Alto</td><td>Baixo</td></tr>
                    <tr><td>Generalização</td><td>Ampla</td><td>Focada em tarefas específicas</td></tr>
                    <tr><td>Onde rodar</td><td>Nuvem com GPUs</td><td>Local ou edge</td></tr>
                    <tr><td>Quando usar</td><td>Tarefas diversas e complexas</td><td>Custo baixo, latência baixa, privacidade</td></tr>
                </table>

                <h4>📎 Serviços AWS:</h4>
                <ul>
                    <li><strong>Amazon Bedrock:</strong> Acesso a foundation models (Claude, Titan, Llama, Mistral) via API</li>
                    <li><strong>Amazon Q:</strong> Assistente IA para empresas e desenvolvedores</li>
                    <li><strong>PartyRock:</strong> Playground no-code para experimentar GenAI</li>
                </ul>
            </div>
        `
    },

    // DOMÍNIO 3: Applications of Foundation Models (28%)
    'foundation-models': {
        title: '☁️ Aplicações de Foundation Models',
        weight: 28,
        priority: 'vital',
        pareto: 'Domine: RAG + Fine-tuning + Bedrock (Knowledge Bases, Agents, Guardrails) + Embeddings',
        content: `
            <div class="study-section">
                <h4>📌 20% Vital — O que cai mais (MAIOR DOMÍNIO: 28%):</h4>
                <ul>
                    <li><strong>RAG (Retrieval-Augmented Generation):</strong> Busca dados externos → injeta no prompt → modelo responde com contexto atualizado</li>
                    <li><strong>Fine-tuning:</strong> Retreinar modelo com dados específicos do domínio</li>
                    <li><strong>Bedrock Knowledge Bases:</strong> RAG gerenciado (S3 → embeddings → busca → resposta)</li>
                    <li><strong>Bedrock Agents:</strong> Modelos que executam ações (chamam APIs, consultam DBs)</li>
                    <li><strong>Embeddings:</strong> Representação vetorial de texto/imagem para busca semântica</li>
                </ul>

                <h4>🔑 RAG — O padrão mais importante:</h4>
                <ol>
                    <li>Documentos são divididos em chunks (intervalos)</li>
                    <li>Chunks são convertidos em embeddings (vetores)</li>
                    <li>Vetores são armazenados em banco vetorial (OpenSearch, Aurora pgvector)</li>
                    <li>Pergunta do usuário vira embedding → busca vetores similares</li>
                    <li>Chunks relevantes são injetados no prompt do LLM</li>
                    <li>LLM responde com base no contexto recuperado</li>
                </ol>

                <h4>🔧 Customização de modelos:</h4>
                <table>
                    <tr><th>Método</th><th>O que faz</th><th>Quando usar</th><th>Custo</th></tr>
                    <tr><td>Prompt Engineering</td><td>Ajusta instrução sem treinar</td><td>Primeiro sempre</td><td>Baixo</td></tr>
                    <tr><td>RAG</td><td>Adiciona conhecimento externo</td><td>Dados atualizados/proprietários</td><td>Médio</td></tr>
                    <tr><td>Fine-tuning</td><td>Retreina com dados específicos</td><td>Estilo/domínio muito específico</td><td>Alto</td></tr>
                    <tr><td>Pre-training</td><td>Treina do zero</td><td>Quase nunca necessário</td><td>Muito alto</td></tr>
                </table>

                <h4>📊 Tipos de Embeddings:</h4>
                <ul>
                    <li><strong>Texto:</strong> Palavras/frases → vetores de significado (busca semântica)</li>
                    <li><strong>Imagem:</strong> Pixels → vetores de características visuais</li>
                    <li><strong>Multimodal:</strong> Texto + imagem no mesmo espaço vetorial (comparação cross-modal)</li>
                    <li><strong>Geração multimodal:</strong> Cria conteúdo de um tipo a partir de outro (texto→imagem)</li>
                </ul>

                <h4>📎 Serviços AWS:</h4>
                <ul>
                    <li><strong>Bedrock Knowledge Bases:</strong> RAG gerenciado end-to-end</li>
                    <li><strong>Bedrock Agents:</strong> Modelos que executam ações via APIs</li>
                    <li><strong>Bedrock Guardrails:</strong> Filtros de conteúdo e segurança</li>
                    <li><strong>Amazon Kendra:</strong> Enterprise search (pode ser fonte para RAG)</li>
                    <li><strong>OpenSearch Serverless:</strong> Banco vetorial para embeddings</li>
                    <li><strong>Aurora PostgreSQL + pgvector:</strong> Vetores em banco relacional</li>
                </ul>
            </div>
        `
    },

    // DOMÍNIO 4: Guidelines for Responsible AI (14%)
    'responsible-ai': {
        title: '⚖️ Diretrizes de IA Responsável',
        weight: 14,
        priority: 'complementary',
        pareto: 'Foque em: tipos de bias + fairness + toxicidade + alucinações + Bedrock Guardrails',
        content: `
            <div class="study-section">
                <h4>📌 Conceitos-chave:</h4>
                <ul>
                    <li><strong>Bias (viés):</strong> Modelo reproduz preconceitos dos dados de treinamento</li>
                    <li><strong>Fairness:</strong> Modelo trata grupos diferentes de forma equitativa</li>
                    <li><strong>Toxicidade:</strong> Geração de conteúdo ofensivo, violento ou prejudicial</li>
                    <li><strong>Alucinação:</strong> Modelo gera informação falsa com tom de certeza</li>
                    <li><strong>Transparência:</strong> Explicar como e por que o modelo tomou uma decisão</li>
                    <li><strong>Explicabilidade:</strong> Capacidade de entender o raciocínio do modelo</li>
                </ul>

                <h4>🔑 Tipos de Bias:</h4>
                <table>
                    <tr><th>Tipo</th><th>Causa</th><th>Exemplo</th></tr>
                    <tr><td>Selection bias</td><td>Dados não representativos</td><td>Treinar com dados de um país apenas</td></tr>
                    <tr><td>Confirmation bias</td><td>Dados reforçam estereótipos</td><td>Associar profissões a gêneros</td></tr>
                    <tr><td>Measurement bias</td><td>Métricas inadequadas</td><td>Avaliar fairness sem considerar subgrupos</td></tr>
                    <tr><td>Automation bias</td><td>Confiar cegamente no modelo</td><td>Aceitar output sem revisão humana</td></tr>
                </table>

                <h4>🛡️ Mitigação:</h4>
                <ul>
                    <li><strong>Bedrock Guardrails:</strong> Filtros de conteúdo (toxicidade, PII, tópicos proibidos)</li>
                    <li><strong>Human-in-the-loop:</strong> Revisão humana antes de ações críticas</li>
                    <li><strong>Diverse training data:</strong> Dados representativos de todos os grupos</li>
                    <li><strong>Model cards:</strong> Documentação de limitações e uso pretendido</li>
                    <li><strong>SageMaker Clarify:</strong> Detecta bias em dados e modelos</li>
                </ul>

                <h4>📎 Serviços AWS:</h4>
                <ul>
                    <li><strong>Bedrock Guardrails:</strong> Content filters, denied topics, PII redaction</li>
                    <li><strong>SageMaker Clarify:</strong> Bias detection e explainability</li>
                    <li><strong>AWS AI Service Cards:</strong> Documentação de responsible AI</li>
                </ul>
            </div>
        `
    },

    // DOMÍNIO 5: Security & Compliance for AI (14%)
    'security-ai': {
        title: '🔒 Segurança e Compliance para IA',
        weight: 14,
        priority: 'complementary',
        pareto: 'Foque em: data privacy + IAM para Bedrock + encryption + shared responsibility + governance',
        content: `
            <div class="study-section">
                <h4>📌 Conceitos-chave:</h4>
                <ul>
                    <li><strong>Data privacy:</strong> Dados de treinamento e inferência devem ser protegidos</li>
                    <li><strong>Shared responsibility:</strong> AWS protege infra, cliente protege dados e configuração</li>
                    <li><strong>Encryption:</strong> Dados em repouso (KMS) e em trânsito (TLS) para modelos</li>
                    <li><strong>IAM:</strong> Controle granular de quem acessa quais modelos e dados</li>
                    <li><strong>Governance:</strong> Políticas de uso, auditoria e compliance</li>
                </ul>

                <h4>🔑 Segurança no Bedrock:</h4>
                <table>
                    <tr><th>Aspecto</th><th>Como proteger</th></tr>
                    <tr><td>Acesso ao modelo</td><td>IAM policies (bedrock:InvokeModel)</td></tr>
                    <tr><td>Dados de fine-tuning</td><td>S3 com encryption + bucket policy</td></tr>
                    <tr><td>Dados em trânsito</td><td>TLS 1.2+ (automático)</td></tr>
                    <tr><td>PII em prompts</td><td>Guardrails com PII redaction</td></tr>
                    <tr><td>Logging</td><td>CloudTrail + CloudWatch para auditoria</td></tr>
                    <tr><td>VPC isolation</td><td>VPC endpoints para Bedrock (PrivateLink)</td></tr>
                </table>

                <h4>🏛️ Compliance:</h4>
                <ul>
                    <li><strong>Bedrock não usa seus dados para treinar modelos</strong> (diferente de APIs públicas)</li>
                    <li><strong>Data residency:</strong> Dados ficam na região escolhida</li>
                    <li><strong>SOC, ISO, HIPAA:</strong> Bedrock é elegível para esses frameworks</li>
                    <li><strong>CloudTrail:</strong> Audita todas as chamadas de API ao Bedrock</li>
                </ul>

                <h4>📎 Serviços AWS:</h4>
                <ul>
                    <li><strong>IAM:</strong> Policies para Bedrock, SageMaker</li>
                    <li><strong>KMS:</strong> Encryption de dados de treinamento e modelos</li>
                    <li><strong>CloudTrail:</strong> Auditoria de uso de modelos</li>
                    <li><strong>VPC Endpoints:</strong> Acesso privado ao Bedrock</li>
                    <li><strong>AWS Config:</strong> Compliance rules para recursos de IA</li>
                    <li><strong>Macie:</strong> Detectar PII em datasets de treinamento</li>
                </ul>
            </div>
        `
    }
};

// Mapa 80/20: Os 20% vitais que cobrem 80% do exame
const aifParetoMap = {
    vital: [
        { topic: 'Amazon Bedrock (Foundation Models, RAG, Agents, Guardrails)', domains: [2, 3, 4, 5], weight: 'Aparece em 4 dos 5 domínios' },
        { topic: 'Tipos de Aprendizado (supervisionado, não supervisionado, reforço)', domains: [1], weight: 'Base do Domínio 1 inteiro' },
        { topic: 'Prompt Engineering (zero-shot, few-shot, chain-of-thought, temperatura)', domains: [2, 3], weight: '52% do exame (D2+D3)' },
        { topic: 'RAG (Retrieval-Augmented Generation)', domains: [3], weight: 'Maior domínio: 28%' },
        { topic: 'Responsible AI (bias, fairness, alucinações, guardrails)', domains: [4, 5], weight: '28% do exame (D4+D5)' },
        { topic: 'Embeddings e Bancos Vetoriais', domains: [1, 3], weight: 'Base de RAG e busca semântica' }
    ],
    complementary: [
        { topic: 'SageMaker (training, inference, Ground Truth, Clarify)', domains: [1, 4] },
        { topic: 'Serviços de IA (Comprehend, Rekognition, Lex, Textract, Polly)', domains: [1, 3] },
        { topic: 'Fine-tuning vs Pre-training', domains: [3] },
        { topic: 'LLMs vs SLMs (quando usar cada)', domains: [2] },
        { topic: 'Tokenização e Janela de Contexto', domains: [2] },
        { topic: 'Data Privacy e IAM para IA', domains: [5] }
    ]
};

window.aifStudyMaterial = aifStudyMaterial;
window.aifParetoMap = aifParetoMap;
