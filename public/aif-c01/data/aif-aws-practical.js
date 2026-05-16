// AIF-C01 - Material: Serviços AWS de IA na Prática
// Conecta fundamentos (curso) com serviços AWS (exame)
// Foco: "Dado este problema empresarial, qual serviço AWS usar?"

const aifAwsPractical = {
    'bedrock-practical': {
        title: '☁️ Amazon Bedrock na Prática',
        priority: 'vital',
        content: `
            <div class="study-section">
                <h4>📌 O que o exame pergunta sobre Bedrock:</h4>
                <ul>
                    <li>Quando usar Bedrock vs SageMaker?</li>
                    <li>Como escolher entre modelos (Claude, Titan, Llama)?</li>
                    <li>Quando usar Knowledge Bases vs fine-tuning?</li>
                    <li>Como proteger dados e controlar acesso?</li>
                    <li>Como reduzir alucinações?</li>
                </ul>

                <h4>🔑 Bedrock vs SageMaker — Quando usar cada:</h4>
                <table>
                    <tr><th>Cenário</th><th>Usar Bedrock</th><th>Usar SageMaker</th></tr>
                    <tr><td>Consumir foundation model via API</td><td>✅</td><td></td></tr>
                    <tr><td>RAG com documentos internos</td><td>✅ Knowledge Bases</td><td></td></tr>
                    <tr><td>Treinar modelo custom do zero</td><td></td><td>✅</td></tr>
                    <tr><td>ML clássico (regressão, classificação)</td><td></td><td>✅</td></tr>
                    <tr><td>Fine-tuning de foundation model</td><td>✅ (ou SageMaker JumpStart)</td><td>✅</td></tr>
                    <tr><td>Sem querer gerenciar infra</td><td>✅ Serverless</td><td></td></tr>
                    <tr><td>Controle total de infra/modelo</td><td></td><td>✅</td></tr>
                    <tr><td>ML no-code para analistas</td><td></td><td>✅ Canvas</td></tr>
                </table>

                <h4>🏗️ Arquiteturas comuns com Bedrock:</h4>
                <ul>
                    <li><strong>Chatbot empresarial:</strong> Bedrock + Knowledge Bases (S3 com docs) + Guardrails</li>
                    <li><strong>Assistente que executa ações:</strong> Bedrock Agents + Lambda (action groups)</li>
                    <li><strong>Geração de conteúdo:</strong> Bedrock InvokeModel + prompt engineering</li>
                    <li><strong>Busca semântica:</strong> Titan Embeddings + OpenSearch Serverless</li>
                    <li><strong>Análise de documentos:</strong> Textract (extrair) + Bedrock (analisar/resumir)</li>
                </ul>

                <h4>💰 Modelo de preços Bedrock:</h4>
                <ul>
                    <li><strong>On-Demand:</strong> Pay-per-token (input + output). Sem compromisso.</li>
                    <li><strong>Provisioned Throughput:</strong> Capacidade reservada. Melhor para alto volume constante.</li>
                    <li><strong>Batch Inference:</strong> 50% desconto vs on-demand. Para processamento não-urgente.</li>
                    <li><strong>Fine-tuning:</strong> Cobrado por token de treinamento + armazenamento do modelo.</li>
                </ul>
            </div>
        `
    },

    'sagemaker-practical': {
        title: '🔬 Amazon SageMaker na Prática',
        priority: 'complementary',
        content: `
            <div class="study-section">
                <h4>📌 Componentes SageMaker que caem no exame:</h4>
                <table>
                    <tr><th>Componente</th><th>O que faz</th><th>Caso de uso</th></tr>
                    <tr><td><strong>SageMaker Studio</strong></td><td>IDE para ML</td><td>Cientistas de dados desenvolvendo modelos</td></tr>
                    <tr><td><strong>SageMaker Canvas</strong></td><td>ML no-code</td><td>Business analysts sem programação</td></tr>
                    <tr><td><strong>SageMaker Ground Truth</strong></td><td>Rotulagem de dados</td><td>Preparar datasets para treinamento supervisionado</td></tr>
                    <tr><td><strong>SageMaker Clarify</strong></td><td>Bias + explicabilidade</td><td>Detectar viés, explicar previsões (SHAP)</td></tr>
                    <tr><td><strong>SageMaker Model Monitor</strong></td><td>Monitorar em produção</td><td>Detectar drift de dados/modelo</td></tr>
                    <tr><td><strong>SageMaker JumpStart</strong></td><td>Modelos pré-treinados</td><td>Deploy rápido de foundation models com controle</td></tr>
                    <tr><td><strong>SageMaker Pipelines</strong></td><td>MLOps</td><td>CI/CD para modelos ML</td></tr>
                </table>

                <h4>🔑 Ciclo de vida ML no SageMaker:</h4>
                <ol>
                    <li><strong>Preparar dados:</strong> Ground Truth (rotular) + Data Wrangler (transformar)</li>
                    <li><strong>Treinar:</strong> Training jobs com instâncias gerenciadas (GPU/Trainium)</li>
                    <li><strong>Avaliar:</strong> Clarify (bias) + métricas (F1, AUC, RMSE)</li>
                    <li><strong>Deploy:</strong> Endpoints (real-time, serverless, async, batch)</li>
                    <li><strong>Monitorar:</strong> Model Monitor (drift, qualidade)</li>
                    <li><strong>Retreinar:</strong> Pipelines automatizam o ciclo</li>
                </ol>
            </div>
        `
    },

    'ai-services-practical': {
        title: '🧩 Serviços de IA Pré-treinados (APIs prontas)',
        priority: 'vital',
        content: `
            <div class="study-section">
                <h4>📌 Conceito-chave para o exame:</h4>
                <p>AWS oferece serviços de IA <strong>pré-treinados</strong> que resolvem problemas específicos via API, <strong>sem precisar treinar modelo</strong>. Basta chamar a API.</p>

                <h4>🗣️ Linguagem e Texto:</h4>
                <table>
                    <tr><th>Serviço</th><th>Input</th><th>Output</th><th>Caso de uso real</th></tr>
                    <tr><td><strong>Comprehend</strong></td><td>Texto</td><td>Sentimento, entidades, idioma, tópicos</td><td>Analisar reviews de clientes, classificar tickets</td></tr>
                    <tr><td><strong>Translate</strong></td><td>Texto</td><td>Texto traduzido</td><td>Site multilíngue, traduzir documentos</td></tr>
                    <tr><td><strong>Transcribe</strong></td><td>Áudio</td><td>Texto (transcrição)</td><td>Transcrever reuniões, legendas, call center</td></tr>
                    <tr><td><strong>Polly</strong></td><td>Texto</td><td>Áudio (fala)</td><td>Acessibilidade, audiobooks, IVR</td></tr>
                    <tr><td><strong>Lex</strong></td><td>Texto/voz</td><td>Intent + resposta</td><td>Chatbots, assistentes virtuais (motor do Alexa)</td></tr>
                </table>

                <h4>👁️ Visão e Documentos:</h4>
                <table>
                    <tr><th>Serviço</th><th>Input</th><th>Output</th><th>Caso de uso real</th></tr>
                    <tr><td><strong>Rekognition</strong></td><td>Imagem/vídeo</td><td>Objetos, faces, texto, moderação</td><td>Segurança, verificação de identidade, moderação de conteúdo</td></tr>
                    <tr><td><strong>Textract</strong></td><td>Documento (PDF/imagem)</td><td>Texto + tabelas + formulários</td><td>Processar faturas, contratos, formulários</td></tr>
                </table>

                <h4>📊 Previsão e Personalização:</h4>
                <table>
                    <tr><th>Serviço</th><th>Input</th><th>Output</th><th>Caso de uso real</th></tr>
                    <tr><td><strong>Forecast</strong></td><td>Dados históricos (time-series)</td><td>Previsões futuras</td><td>Demanda, vendas, inventário</td></tr>
                    <tr><td><strong>Personalize</strong></td><td>Dados de interação</td><td>Recomendações</td><td>Produtos, filmes, conteúdo personalizado</td></tr>
                    <tr><td><strong>Fraud Detector</strong></td><td>Dados de transação</td><td>Score de fraude</td><td>Pagamentos, cadastros, login</td></tr>
                    <tr><td><strong>Kendra</strong></td><td>Query + documentos</td><td>Respostas relevantes</td><td>Busca empresarial inteligente, FAQ</td></tr>
                </table>

                <h4>⚠️ Diferença importante para o exame:</h4>
                <table>
                    <tr><th>Abordagem</th><th>Quando usar</th><th>Exemplo</th></tr>
                    <tr><td>Serviço pré-treinado (API)</td><td>Problema comum, sem dados custom</td><td>Comprehend para sentimento</td></tr>
                    <tr><td>SageMaker (treinar custom)</td><td>Problema específico, tem dados rotulados</td><td>Modelo de churn da empresa</td></tr>
                    <tr><td>Bedrock (foundation model)</td><td>Geração de conteúdo, Q&A, análise</td><td>Chatbot com RAG</td></tr>
                </table>
            </div>
        `
    },

    'amazon-q-practical': {
        title: '💬 Amazon Q (Business & Developer)',
        priority: 'complementary',
        content: `
            <div class="study-section">
                <h4>📌 Amazon Q — Dois produtos:</h4>
                <table>
                    <tr><th>Produto</th><th>Para quem</th><th>O que faz</th></tr>
                    <tr><td><strong>Amazon Q Business</strong></td><td>Funcionários da empresa</td><td>Responde perguntas sobre dados internos (docs, wikis, tickets, emails)</td></tr>
                    <tr><td><strong>Amazon Q Developer</strong></td><td>Desenvolvedores</td><td>Gera código, debugga, explica, transforma código, ajuda com AWS</td></tr>
                </table>

                <h4>🔑 Amazon Q Business — Como funciona:</h4>
                <ul>
                    <li>Conecta a fontes de dados: S3, SharePoint, Confluence, Salesforce, ServiceNow, etc.</li>
                    <li>Indexa documentos automaticamente</li>
                    <li>Funcionários perguntam em linguagem natural</li>
                    <li>Responde com base nos documentos internos (RAG gerenciado)</li>
                    <li>Respeita permissões existentes (ACLs) — cada usuário vê apenas o que tem acesso</li>
                </ul>

                <h4>🔑 Amazon Q Developer — Capabilities:</h4>
                <ul>
                    <li>Gerar código a partir de descrição em linguagem natural</li>
                    <li>Explicar código existente</li>
                    <li>Encontrar e corrigir bugs</li>
                    <li>Transformar código (upgrade de versão, refactoring)</li>
                    <li>Responder perguntas sobre AWS (serviços, CLI, SDK)</li>
                    <li>Integrado em IDEs (VS Code, JetBrains, CLI)</li>
                </ul>

                <h4>📎 Diferença Q Business vs Bedrock Knowledge Bases:</h4>
                <table>
                    <tr><th>Aspecto</th><th>Q Business</th><th>Bedrock KB</th></tr>
                    <tr><td>Para quem</td><td>Usuários finais (funcionários)</td><td>Desenvolvedores (integrar em apps)</td></tr>
                    <tr><td>Interface</td><td>Chat pronto (web/Slack)</td><td>API para integrar</td></tr>
                    <tr><td>Permissões</td><td>Respeita ACLs das fontes</td><td>Controle via IAM</td></tr>
                    <tr><td>Customização</td><td>Limitada (plug-and-play)</td><td>Total (prompt, modelo, guardrails)</td></tr>
                </table>
            </div>
        `
    },

    'pricing-models': {
        title: '💰 Modelos de Preço dos Serviços de IA',
        priority: 'complementary',
        content: `
            <div class="study-section">
                <h4>📌 O exame pergunta sobre custos e otimização:</h4>
                <table>
                    <tr><th>Serviço</th><th>Como cobra</th><th>Otimização</th></tr>
                    <tr><td>Bedrock</td><td>Por token (input + output)</td><td>Prompts concisos, modelo menor para tarefas simples, batch inference</td></tr>
                    <tr><td>SageMaker Endpoints</td><td>Por hora de instância</td><td>Serverless para tráfego baixo, auto-scaling, Spot para training</td></tr>
                    <tr><td>Comprehend/Rekognition/etc</td><td>Por request ou unidade processada</td><td>Batch processing, filtrar antes de enviar</td></tr>
                    <tr><td>Trainium/Inferentia</td><td>Por hora de instância</td><td>Mais barato que GPU NVIDIA para workloads compatíveis</td></tr>
                </table>

                <h4>🔑 Estratégias de redução de custo em IA:</h4>
                <ul>
                    <li><strong>Modelo menor para tarefas simples:</strong> Haiku ao invés de Opus para classificação</li>
                    <li><strong>Prompt caching:</strong> Reutilizar prefixos comuns</li>
                    <li><strong>Batch inference:</strong> 50% desconto no Bedrock para não-urgente</li>
                    <li><strong>Serverless endpoints:</strong> Zero custo quando idle</li>
                    <li><strong>Spot instances:</strong> Para training jobs (até 90% desconto)</li>
                    <li><strong>Inferentia:</strong> Custo por inferência menor que GPU</li>
                    <li><strong>Filtrar antes de processar:</strong> Não enviar dados irrelevantes ao modelo</li>
                </ul>
            </div>
        `
    }
};

window.aifAwsPractical = aifAwsPractical;
