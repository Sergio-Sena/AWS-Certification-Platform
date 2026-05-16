// AIF-C01 - Material Complementar: Algoritmos, Métricas e Infraestrutura
// Cobre gaps dos Encontros 3, 4, 5 e 6

const aifAlgorithmsMetrics = {
    'algorithms': {
        title: '🧮 Algoritmos de ML — Regressão, Classificação e Clustering',
        priority: 'vital',
        content: `
            <div class="study-section">
                <h4>📌 Três famílias de técnicas (cai no exame!):</h4>
                <table>
                    <tr><th>Família</th><th>Pergunta</th><th>Saída</th><th>Tipo</th><th>Algoritmos</th></tr>
                    <tr><td><strong>Regressão</strong></td><td>Quanto?</td><td>Número contínuo</td><td>Supervisionado</td><td>Regressão Linear, Árvores de Decisão</td></tr>
                    <tr><td><strong>Classificação</strong></td><td>Qual categoria?</td><td>Classe/rótulo</td><td>Supervisionado</td><td>K-NN, XGBoost, Binária, Multiclasse</td></tr>
                    <tr><td><strong>Clustering</strong></td><td>Quem se parece?</td><td>Grupos</td><td>Não supervisionado</td><td>K-Means</td></tr>
                </table>

                <h4>🔑 Algoritmos que caem no exame:</h4>

                <h5>Regressão Linear:</h5>
                <ul>
                    <li>Traça a melhor reta que descreve relação entre variáveis</li>
                    <li>Simples, rápida, fácil de interpretar</li>
                    <li>Funciona bem quando relação é aproximadamente linear</li>
                    <li>Exemplo: prever preço de imóvel baseado em área</li>
                </ul>

                <h5>Árvores de Decisão:</h5>
                <ul>
                    <li>Perguntas sucessivas que dividem dados em grupos</li>
                    <li>Captura relações não-lineares e condicionais</li>
                    <li>Fácil de visualizar e interpretar</li>
                    <li>Pode overfittar se muito profunda</li>
                </ul>

                <h5>K-NN (K-Nearest Neighbors):</h5>
                <ul>
                    <li>Classifica baseado nos K vizinhos mais próximos</li>
                    <li>Simples e intuitivo, sem treinamento elaborado</li>
                    <li>K pequeno = sensível a ruído. K grande = perde sensibilidade local</li>
                    <li>Pode ficar lento com grandes volumes</li>
                    <li><strong>⚠️ NÃO confundir com K-Means!</strong> K-NN = classificação. K-Means = clustering</li>
                </ul>

                <h5>XGBoost:</h5>
                <ul>
                    <li>Combina várias árvores de decisão em sequência</li>
                    <li>Cada árvore corrige erros das anteriores (boosting)</li>
                    <li>Alta precisão em dados tabulares</li>
                    <li>Padrão de mercado para classificação e regressão</li>
                    <li>Também usado para ranking (ordenar por relevância)</li>
                </ul>

                <h5>K-Means (Clustering):</h5>
                <ul>
                    <li>Divide dados em K grupos por similaridade</li>
                    <li>Cada grupo tem um centróide (ponto central)</li>
                    <li>Aprendizado NÃO supervisionado (sem rótulos)</li>
                    <li>K é escolhido pelo analista</li>
                    <li>Aplicações: segmentação de clientes, detecção de anomalias</li>
                </ul>

                <h4>⚠️ Confusão comum no exame: K-NN vs K-Means</h4>
                <table>
                    <tr><th>Aspecto</th><th>K-NN</th><th>K-Means</th></tr>
                    <tr><td>Tipo</td><td>Classificação (supervisionado)</td><td>Clustering (não supervisionado)</td></tr>
                    <tr><td>O que K significa</td><td>Número de vizinhos</td><td>Número de grupos</td></tr>
                    <tr><td>Precisa de rótulos?</td><td>Sim</td><td>Não</td></tr>
                    <tr><td>Saída</td><td>Classe/categoria</td><td>Grupo descoberto</td></tr>
                </table>
            </div>
        `
    },

    'metrics': {
        title: '📏 Métricas de Avaliação de Modelos',
        priority: 'vital',
        content: `
            <div class="study-section">
                <h4>📌 Métricas de Classificação:</h4>

                <h5>Matriz de Confusão:</h5>
                <table>
                    <tr><th></th><th>Previsto Positivo</th><th>Previsto Negativo</th></tr>
                    <tr><td><strong>Real Positivo</strong></td><td>VP (Verdadeiro Positivo)</td><td>FN (Falso Negativo)</td></tr>
                    <tr><td><strong>Real Negativo</strong></td><td>FP (Falso Positivo)</td><td>VN (Verdadeiro Negativo)</td></tr>
                </table>

                <h5>Métricas derivadas:</h5>
                <table>
                    <tr><th>Métrica</th><th>Fórmula</th><th>Pergunta</th><th>Quando priorizar</th></tr>
                    <tr><td><strong>Acurácia</strong></td><td>(VP+VN) / Total</td><td>Quantas vezes acertou no geral?</td><td>Classes balanceadas</td></tr>
                    <tr><td><strong>Precisão</strong></td><td>VP / (VP+FP)</td><td>Quando previu positivo, acertou?</td><td>Custo alto de falso positivo (ex: bloquear transação legítima)</td></tr>
                    <tr><td><strong>Recall</strong></td><td>VP / (VP+FN)</td><td>Dos positivos reais, quantos encontrou?</td><td>Custo alto de falso negativo (ex: não detectar fraude)</td></tr>
                    <tr><td><strong>F1-Score</strong></td><td>Média harmônica de Precisão e Recall</td><td>Equilíbrio entre precisão e recall?</td><td>Classes desbalanceadas</td></tr>
                    <tr><td><strong>AUC</strong></td><td>Área sob curva ROC</td><td>Quão bem separa as classes?</td><td>Comparar modelos independente do limiar</td></tr>
                </table>

                <h5>Interpretação AUC:</h5>
                <ul>
                    <li>0.90-1.00 = Excelente</li>
                    <li>0.80-0.90 = Bom</li>
                    <li>0.70-0.80 = Razoável</li>
                    <li>≈ 0.50 = Aleatório (inútil)</li>
                </ul>

                <h4>📌 Métricas de Regressão:</h4>
                <table>
                    <tr><th>Métrica</th><th>O que mede</th><th>Unidade</th><th>Interpretação</th></tr>
                    <tr><td><strong>MAE</strong></td><td>Erro absoluto médio</td><td>Mesma da variável</td><td>"Em média, erra X unidades"</td></tr>
                    <tr><td><strong>MSE</strong></td><td>Erro quadrático médio</td><td>Ao quadrado</td><td>Penaliza erros grandes (lupa)</td></tr>
                    <tr><td><strong>RMSE</strong></td><td>Raiz do MSE</td><td>Mesma da variável</td><td>"Distância média do alvo"</td></tr>
                    <tr><td><strong>R²</strong></td><td>Variância explicada</td><td>0 a 1</td><td>"Quanto do problema o modelo explica"</td></tr>
                </table>

                <h5>R² — Escala:</h5>
                <ul>
                    <li>1.0 = Perfeito</li>
                    <li>0.8 = Muito bom</li>
                    <li>0.5 = Razoável</li>
                    <li>0 = Igual a chutar a média</li>
                    <li>Negativo = Pior que chutar</li>
                </ul>

                <h4>📌 Métricas de Negócio:</h4>
                <ul>
                    <li><strong>ROI:</strong> Retorno sobre investimento do modelo</li>
                    <li><strong>Custo operacional:</strong> Inferência + treinamento + manutenção</li>
                    <li><strong>Impacto:</strong> Mudança em receita, conversão, churn</li>
                </ul>
                <p><em>Um modelo tecnicamente bom precisa também gerar valor para a organização.</em></p>
            </div>
        `
    },

    'inference-types': {
        title: '⚡ Tipos de Inferência (SageMaker)',
        priority: 'vital',
        content: `
            <div class="study-section">
                <h4>📌 Quatro tipos de inferência (cai no exame!):</h4>
                <table>
                    <tr><th>Tipo</th><th>Latência</th><th>Volume</th><th>Custo</th><th>Quando usar</th></tr>
                    <tr><td><strong>Tempo Real</strong></td><td>Milissegundos</td><td>Individual</td><td>Alto (endpoint sempre ativo)</td><td>Apps interativos, fraude online</td></tr>
                    <tr><td><strong>Batch (Lote)</strong></td><td>Minutos/horas</td><td>Grande volume</td><td>Baixo (sob demanda)</td><td>Relatórios, scoring noturno</td></tr>
                    <tr><td><strong>Assíncrona</strong></td><td>Segundos/minutos</td><td>Payloads grandes</td><td>Médio</td><td>Processamento pesado sem resposta imediata</td></tr>
                    <tr><td><strong>Serverless</strong></td><td>Variável (cold start)</td><td>Intermitente</td><td>Paga só pelo uso</td><td>Tráfego imprevisível, baixo volume</td></tr>
                </table>

                <h4>🔑 Regra de decisão:</h4>
                <ul>
                    <li>Precisa de resposta imediata? → <strong>Tempo Real</strong></li>
                    <li>Grande volume sem urgência? → <strong>Batch</strong></li>
                    <li>Payload grande, pode esperar? → <strong>Assíncrona</strong></li>
                    <li>Tráfego imprevisível, quer zero custo ocioso? → <strong>Serverless</strong></li>
                </ul>

                <h4>📎 SageMaker Serverless Inference:</h4>
                <ul>
                    <li>Sem gerenciar servidores nem capacidade</li>
                    <li>Escala automaticamente com demanda</li>
                    <li>Cobrança apenas pelo uso efetivo</li>
                    <li>Cold start possível (primeira request após idle)</li>
                    <li>Ideal para workloads intermitentes ou de baixo volume</li>
                </ul>
            </div>
        `
    },

    'infrastructure': {
        title: '🖥️ Infraestrutura AWS para IA (Trainium & Inferentia)',
        priority: 'complementary',
        content: `
            <div class="study-section">
                <h4>📌 Chips AWS customizados para IA:</h4>
                <table>
                    <tr><th>Chip/Instância</th><th>Foco</th><th>Quando usar</th></tr>
                    <tr><td><strong>EC2 Trainium (Trn)</strong></td><td>TREINAMENTO de modelos</td><td>Treinar LLMs e deep learning com custo competitivo</td></tr>
                    <tr><td><strong>EC2 Inferentia (Inf)</strong></td><td>INFERÊNCIA de modelos</td><td>Servir previsões em produção com baixa latência e custo</td></tr>
                    <tr><td>EC2 P (GPU NVIDIA)</td><td>Treinamento geral</td><td>Workloads que precisam de CUDA/NVIDIA</td></tr>
                    <tr><td>EC2 G (GPU)</td><td>Inferência + gráficos</td><td>Inferência com GPU, gaming, rendering</td></tr>
                </table>

                <h4>🔑 Regra prática:</h4>
                <ul>
                    <li><strong>Trainium = TREINAR</strong> (fase de aprendizado, cargas longas e intensivas)</li>
                    <li><strong>Inferentia = INFERIR</strong> (fase de uso, alto volume, baixa latência)</li>
                    <li>Ambos são chips AWS proprietários (mais baratos que NVIDIA para workloads compatíveis)</li>
                </ul>

                <h4>📌 PDPs — Partial Dependence Plots (Explicabilidade):</h4>
                <ul>
                    <li>Gráficos que mostram como uma variável influencia a previsão do modelo</li>
                    <li>Ferramenta de explicabilidade para modelos "caixa-preta"</li>
                    <li>Curva crescente = variável aumenta previsão</li>
                    <li>Curva plana = variável sem efeito</li>
                    <li>Usado para: transparência, auditoria, diagnóstico de bias</li>
                    <li><strong>No exame:</strong> PDPs atendem requisitos de explicabilidade e transparência</li>
                </ul>
            </div>
        `
    },

    'prompt-engineering-advanced': {
        title: '✍️ Engenharia de Prompt — Técnicas Avançadas',
        priority: 'vital',
        content: `
            <div class="study-section">
                <h4>📌 Técnicas de Prompt (Encontro 6):</h4>
                <table>
                    <tr><th>Técnica</th><th>Descrição</th><th>Quando usar</th></tr>
                    <tr><td><strong>Zero-shot</strong></td><td>Instrução sem exemplos</td><td>Tarefas comuns que o modelo já conhece</td></tr>
                    <tr><td><strong>One-shot</strong></td><td>Um exemplo antes da pergunta</td><td>Formato específico com padrão claro</td></tr>
                    <tr><td><strong>Few-shot</strong></td><td>Vários exemplos antes da pergunta</td><td>Tarefas de nicho, formato específico</td></tr>
                    <tr><td><strong>Chain-of-Thought</strong></td><td>Pedir raciocínio passo a passo</td><td>Problemas lógicos, matemáticos</td></tr>
                    <tr><td><strong>Prompt Chaining</strong></td><td>Dividir tarefa em prompts sequenciais</td><td>Tarefas complexas multi-etapa</td></tr>
                    <tr><td><strong>ReAct</strong></td><td>Raciocinar + Agir + Observar</td><td>Agentes que usam ferramentas externas</td></tr>
                </table>

                <h4>🔑 Quando NÃO usar IA (cai no exame!):</h4>
                <ul>
                    <li>Regra fixa e bem definida (if/else resolve)</li>
                    <li>Baixo ROI (custo > benefício)</li>
                    <li>Dados insuficientes ou de má qualidade</li>
                    <li>Decisão crítica sem possibilidade de supervisão humana</li>
                </ul>

                <h4>📎 Alucinação — Mitigação:</h4>
                <ul>
                    <li>Contexto rico e específico no prompt</li>
                    <li>RAG com fontes verificáveis</li>
                    <li>Técnica ReAct (consultar ferramentas externas)</li>
                    <li>Validação humana para decisões críticas</li>
                    <li>Bedrock Guardrails (contextual grounding)</li>
                </ul>
            </div>
        `
    }
};

window.aifAlgorithmsMetrics = aifAlgorithmsMetrics;
