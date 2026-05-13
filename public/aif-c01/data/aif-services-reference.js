// AIF-C01 - Material Complementar: Serviços AWS de IA (mapeamento completo)
// Cobre o gap: "identificar uso apropriado de tecnologias AI/ML para problemas empresariais"

const aifServicesReference = {
    'bedrock-deep': {
        title: '🧠 Amazon Bedrock — Guia Completo',
        priority: 'vital',
        content: `
            <div class="study-section">
                <h4>📌 O que é:</h4>
                <p>Serviço serverless para acessar foundation models (Claude, Titan, Llama, Mistral) via API. Pay-per-token. Sem gerenciar infraestrutura.</p>

                <h4>🔑 Componentes do Bedrock:</h4>
                <table>
                    <tr><th>Componente</th><th>O que faz</th><th>Quando usar</th></tr>
                    <tr><td><strong>Model Access</strong></td><td>Invocar modelos via API (InvokeModel)</td><td>Qualquer tarefa de geração/análise de texto</td></tr>
                    <tr><td><strong>Knowledge Bases</strong></td><td>RAG gerenciado (S3→embeddings→busca→resposta)</td><td>Q&A sobre documentos internos</td></tr>
                    <tr><td><strong>Agents</strong></td><td>Modelos que executam ações (APIs, DBs)</td><td>Automação de tarefas multi-step</td></tr>
                    <tr><td><strong>Guardrails</strong></td><td>Filtros de conteúdo e segurança</td><td>Controlar input/output do modelo</td></tr>
                    <tr><td><strong>Model Customization</strong></td><td>Fine-tuning e continued pre-training</td><td>Adaptar modelo ao domínio</td></tr>
                    <tr><td><strong>Model Evaluation</strong></td><td>Comparar modelos com métricas</td><td>Escolher melhor modelo para o caso</td></tr>
                    <tr><td><strong>Provisioned Throughput</strong></td><td>Capacidade reservada</td><td>Alto volume com throughput garantido</td></tr>
                </table>

                <h4>🏗️ Modelos disponíveis no Bedrock:</h4>
                <table>
                    <tr><th>Provedor</th><th>Modelo</th><th>Melhor para</th></tr>
                    <tr><td>Anthropic</td><td>Claude (Haiku, Sonnet, Opus)</td><td>Raciocínio complexo, análise, código</td></tr>
                    <tr><td>Amazon</td><td>Titan Text / Embeddings / Image</td><td>Geração geral, embeddings, imagens</td></tr>
                    <tr><td>Meta</td><td>Llama</td><td>Custo-benefício, open-source</td></tr>
                    <tr><td>Mistral</td><td>Mistral / Mixtral</td><td>Velocidade, eficiência</td></tr>
                    <tr><td>Stability AI</td><td>Stable Diffusion</td><td>Geração de imagens</td></tr>
                    <tr><td>Cohere</td><td>Command / Embed</td><td>Busca, classificação, embeddings</td></tr>
                </table>

                <h4>⚙️ Guardrails — Tipos de proteção:</h4>
                <ul>
                    <li><strong>Content filters:</strong> Hate, Insults, Sexual, Violence, Misconduct (níveis: NONE/LOW/MEDIUM/HIGH)</li>
                    <li><strong>Denied topics:</strong> Tópicos que o modelo deve recusar (ex: "conselhos médicos")</li>
                    <li><strong>Word filters:</strong> Palavras/frases específicas bloqueadas</li>
                    <li><strong>PII redaction:</strong> Detecta e mascara dados pessoais (CPF, email, telefone)</li>
                    <li><strong>Contextual grounding:</strong> Verifica se resposta é fiel ao contexto RAG</li>
                </ul>
            </div>
        `
    },

    'ai-services-map': {
        title: '🗺️ Mapa de Serviços AWS de IA — Serviço → Caso de Uso',
        priority: 'vital',
        content: `
            <div class="study-section">
                <h4>📌 Regra de ouro para o exame:</h4>
                <p><em>"Qual serviço AWS resolve este problema?"</em> — Memorize este mapa:</p>

                <h4>🗣️ Linguagem Natural (NLP):</h4>
                <table>
                    <tr><th>Problema</th><th>Serviço</th><th>Detalhe</th></tr>
                    <tr><td>Analisar sentimento de texto</td><td><strong>Amazon Comprehend</strong></td><td>Sentiment, entities, key phrases, language detection</td></tr>
                    <tr><td>Traduzir texto entre idiomas</td><td><strong>Amazon Translate</strong></td><td>Neural machine translation, 75+ idiomas</td></tr>
                    <tr><td>Converter fala em texto (STT)</td><td><strong>Amazon Transcribe</strong></td><td>Speech-to-text, speaker ID, vocabulário custom</td></tr>
                    <tr><td>Converter texto em fala (TTS)</td><td><strong>Amazon Polly</strong></td><td>Text-to-speech, múltiplas vozes/idiomas</td></tr>
                    <tr><td>Criar chatbot conversacional</td><td><strong>Amazon Lex</strong></td><td>NLU, intents, slots (motor do Alexa)</td></tr>
                    <tr><td>Busca empresarial inteligente</td><td><strong>Amazon Kendra</strong></td><td>Enterprise search com NLU, múltiplas fontes</td></tr>
                </table>

                <h4>👁️ Visão Computacional:</h4>
                <table>
                    <tr><th>Problema</th><th>Serviço</th><th>Detalhe</th></tr>
                    <tr><td>Detectar objetos/faces em imagens</td><td><strong>Amazon Rekognition</strong></td><td>Object detection, face analysis, content moderation</td></tr>
                    <tr><td>Extrair texto de documentos/scans</td><td><strong>Amazon Textract</strong></td><td>OCR + entende estrutura (tabelas, formulários)</td></tr>
                    <tr><td>Analisar documentos inteligentemente</td><td><strong>Amazon Textract + Comprehend</strong></td><td>Extrair texto + analisar conteúdo</td></tr>
                </table>

                <h4>📊 Previsão e Recomendação:</h4>
                <table>
                    <tr><th>Problema</th><th>Serviço</th><th>Detalhe</th></tr>
                    <tr><td>Prever demanda/vendas futuras</td><td><strong>Amazon Forecast</strong></td><td>Time-series forecasting com ML</td></tr>
                    <tr><td>Recomendar produtos personalizados</td><td><strong>Amazon Personalize</strong></td><td>Recommendation engine, real-time</td></tr>
                    <tr><td>Detectar fraude em transações</td><td><strong>Amazon Fraud Detector</strong></td><td>ML para detecção de fraude</td></tr>
                    <tr><td>Detectar anomalias em equipamentos</td><td><strong>Amazon Lookout for Equipment</strong></td><td>Predictive maintenance IoT</td></tr>
                </table>

                <h4>🤖 IA Generativa:</h4>
                <table>
                    <tr><th>Problema</th><th>Serviço</th><th>Detalhe</th></tr>
                    <tr><td>Acessar foundation models via API</td><td><strong>Amazon Bedrock</strong></td><td>Serverless, múltiplos modelos, pay-per-token</td></tr>
                    <tr><td>Assistente IA para empresas</td><td><strong>Amazon Q Business</strong></td><td>Q&A sobre dados internos da organização</td></tr>
                    <tr><td>Assistente IA para desenvolvedores</td><td><strong>Amazon Q Developer</strong></td><td>Gera código, debugga, explica</td></tr>
                    <tr><td>Experimentar GenAI sem código</td><td><strong>PartyRock</strong></td><td>Playground no-code para prototipar</td></tr>
                </table>

                <h4>🔧 ML Platform:</h4>
                <table>
                    <tr><th>Problema</th><th>Serviço</th><th>Detalhe</th></tr>
                    <tr><td>Treinar/deploy modelos custom</td><td><strong>Amazon SageMaker</strong></td><td>Plataforma completa de ML</td></tr>
                    <tr><td>ML sem código (business analysts)</td><td><strong>SageMaker Canvas</strong></td><td>Visual, drag-and-drop, no-code</td></tr>
                    <tr><td>Rotular dados em escala</td><td><strong>SageMaker Ground Truth</strong></td><td>Humano + automação para labeling</td></tr>
                    <tr><td>Detectar bias em modelos</td><td><strong>SageMaker Clarify</strong></td><td>Fairness metrics + explainability</td></tr>
                    <tr><td>Monitorar modelo em produção</td><td><strong>SageMaker Model Monitor</strong></td><td>Drift detection, quality alerts</td></tr>
                </table>
            </div>
        `
    },

    'use-case-decision': {
        title: '🎯 Árvore de Decisão: Qual tecnologia usar?',
        priority: 'vital',
        content: `
            <div class="study-section">
                <h4>📌 Fluxo de decisão para o exame:</h4>

                <h4>1. Precisa GERAR conteúdo novo (texto, imagem, código)?</h4>
                <ul>
                    <li>→ <strong>Amazon Bedrock</strong> (foundation models)</li>
                    <li>→ Se precisa de dados internos: <strong>Bedrock Knowledge Bases</strong> (RAG)</li>
                    <li>→ Se precisa executar ações: <strong>Bedrock Agents</strong></li>
                </ul>

                <h4>2. Precisa ANALISAR/CLASSIFICAR conteúdo existente?</h4>
                <ul>
                    <li>→ Texto (sentimento, entidades): <strong>Comprehend</strong></li>
                    <li>→ Imagem (objetos, faces): <strong>Rekognition</strong></li>
                    <li>→ Documento (extrair texto): <strong>Textract</strong></li>
                    <li>→ Áudio (transcrever): <strong>Transcribe</strong></li>
                </ul>

                <h4>3. Precisa PREVER algo futuro?</h4>
                <ul>
                    <li>→ Séries temporais (demanda, vendas): <strong>Forecast</strong></li>
                    <li>→ Fraude: <strong>Fraud Detector</strong></li>
                    <li>→ Falha de equipamento: <strong>Lookout for Equipment</strong></li>
                </ul>

                <h4>4. Precisa PERSONALIZAR experiência?</h4>
                <ul>
                    <li>→ Recomendações de produtos: <strong>Personalize</strong></li>
                    <li>→ Busca inteligente: <strong>Kendra</strong></li>
                </ul>

                <h4>5. Precisa TREINAR modelo custom?</h4>
                <ul>
                    <li>→ Com código: <strong>SageMaker</strong></li>
                    <li>→ Sem código: <strong>SageMaker Canvas</strong></li>
                    <li>→ Adaptar foundation model: <strong>Bedrock Fine-tuning</strong></li>
                </ul>

                <h4>6. Precisa de CONVERSAÇÃO?</h4>
                <ul>
                    <li>→ Chatbot estruturado (intents/slots): <strong>Lex</strong></li>
                    <li>→ Chatbot com LLM (livre): <strong>Bedrock + Knowledge Bases</strong></li>
                    <li>→ Assistente empresarial: <strong>Amazon Q Business</strong></li>
                </ul>

                <h4>🔑 Customização de Foundation Models (ordem de complexidade):</h4>
                <table>
                    <tr><th>#</th><th>Método</th><th>Quando</th><th>Custo</th></tr>
                    <tr><td>1</td><td>Prompt Engineering</td><td>Sempre primeiro</td><td>Zero extra</td></tr>
                    <tr><td>2</td><td>RAG (Knowledge Bases)</td><td>Precisa de dados atualizados/proprietários</td><td>Baixo-médio</td></tr>
                    <tr><td>3</td><td>Fine-tuning</td><td>Precisa mudar estilo/comportamento</td><td>Alto</td></tr>
                    <tr><td>4</td><td>Continued Pre-training</td><td>Domínio muito específico (médico, legal)</td><td>Muito alto</td></tr>
                    <tr><td>5</td><td>Treinar do zero</td><td>Quase nunca necessário</td><td>Extremo</td></tr>
                </table>
            </div>
        `
    }
};

window.aifServicesReference = aifServicesReference;
