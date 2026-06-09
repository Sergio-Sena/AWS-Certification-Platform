# Material_Aluno_Simulado_01.pdf

*Convertido automaticamente de PDF*


---
## Página 1

MATERIAL DO ALUNO 
 
AWS Certified AI Practitioner - AIF-C01 
Simulado Comentado 01 
 
 
Instrutora Josely Castro 
 
Maio de 2026 
 
 
 
 
 
 


---
## Página 2

ÍNDICE 
 
• 
Encontro 1: Fundamentos 
• 
Treinamento vs Inferência 
• 
SLMs vs LLMs 
• 
Transformers e Mecanismo de Atenção 
• 
Algoritmo vs Modelo 
• 
Encontro 2: Embeddings e Rotulagem 
• 
Modelos Multimodais 
• 
Rotulagem de Dados 
• 
Bancos de Vetores 
• 
Tipos de Aprendizado de Máquina 
• 
Encontro 3: Técnicas e Algoritmos 
• 
Regressão Linear 
• 
Clustering (K-means) 
• 
Limiar de Decisão 
• 
Aplicações de Classificação Binária 
• 
Encontro 4: Inferência e Métricas 
• 
Inferência em Lote vs Tempo Real 
• 
Serverless Inference 
• 
F1 Score e Classes Desbalanceadas 
• 
Matriz de Confusão 
• 
Encontro 5: Métricas Avançadas 
• 
RMSE vs MSE 
• 
R² Score 
• 
Partial Dependence Plots 
• 
Hardware Especializado (Trainium vs Inferentia) 
 
 


---
## Página 3

ENCONTRO 1: FUNDAMENTOS DE 
MACHINE LEARNING 
Este encontro cobre os conceitos fundamentais que sustentam toda a inteligência artificial. Estes 
tópicos são a base para entender problemas mais complexos, então dedique tempo para absorver 
bem cada conceito. 
1. Treinamento vs Inferência 
Um dos conceitos mais críticos em machine learning é entender a diferença entre as duas fases 
principais da vida de um modelo de IA. 
O Ciclo de Vida de um Modelo 
Um modelo de machine learning passa por dois estágios principais, e cada um tem características, 
custos e objetivos muito diferentes. 
FASE 1: TREINAMENTO (Training) 
 
O modelo está aprendendo. Você fornece dados históricos com exemplos e respostas corretas 
(em aprendizado supervisionado). O algoritmo ajusta seus parâmetros para minimizar o erro nas 
previsões. É como um estudante estudando para uma prova — caro em tempo e energia, 
acontece uma vez (ou periodicamente). 
 
Características: 
• Acontece uma vez (ou em ciclos periódicos) 
• Consome muitos dados (às vezes bilhões de exemplos) 
• Exige hardware especializado (GPUs, TPUs, Trainium) 
• Custo computacional ALTO 
• Demanda tempo (pode levar horas, dias ou semanas) 
• Resultado: um modelo treinado pronto para usar 
 
FASE 2: INFERÊNCIA (Inference) 
 
O modelo já está treinado e agora está sendo USADO em produção. Novas requisições chegam, e o 


---
## Página 4

modelo gera previsões. É como o estudante fazendo a prova — rápido, barato, repetido muitas 
vezes. 
 
Características: 
• Acontece continuamente em produção 
• Processa um (ou poucos) exemplos por vez 
• Exige poder computacional BAIXO (até pode rodar em celular) 
• Custo unitário MUITO BAIXO 
• Latência baixa (resposta em milissegundos) 
• Resultado: previsões/recomendações entregues aos usuários 
 
A confusão comum é pensar que ambos custam o mesmo ou têm o mesmo padrão. Errado. 
Treinamento é investimento inicial (você paga muito uma vez). Inferência é operação contínua 
(você paga pouco, mas muitas vezes). 
Exemplo Prático: Banco de Detecção de Fraude 
Imagine um grande banco que quer detectar transações fraudulentas automaticamente. 
TREINAMENTO: 
1. O banco reúne histórico de 10 anos de transações (bilhões delas) 
2. Especialistas marcam quais eram fraude e quais eram legítimas 
3. Máquinas com GPUs poderosas rodam 24 horas por 3 meses 
4. Custo total: centenas de milhares de dólares 
5. Resultado: um modelo que aprendeu os padrões de fraude 
 
INFERÊNCIA: 
1. Agora, cada transação que chega é checada pelo modelo 
2. Processamento leva milissegundos 
3. Acontece bilhões de vezes por dia 
4. Custo por transação: centavos de centavo 
5. Total inferido por mês pode ser caro, mas unitário é ínfimo 
Por Que Isso Importa em Produção? 
Quando você está resolvendo um problema de IA na vida real, precisa pensar em ambas: 
 
1. PLANEJAMENTO: será que faz sentido investir em treinamento se você vai fazer inferência em 


---
## Página 5

poucas amostras? 
2. CUSTO-BENEFÍCIO: em muitos casos, a inferência frequente justifica o investimento alto em 
treinamento 
3. ESCALABILIDADE: para crescer, você aumenta a frequência de inferência, não o custo de 
treinamento 
4. ATUALIZAÇÃO: quando seus dados mudam, você retreina (de novo, caro), mas a inferência 
continua barata 
2. SLMs vs LLMs 
A tecnologia de linguagem avançou drasticamente. Agora temos dois tipos principais de modelos de 
linguagem, e cada um tem seu lugar. 
Large Language Models (LLMs) 
LLMs são modelos gigantescos treinados em enormes quantidades de texto. Exemplos famosos: 
ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google), Llama (Meta). 
Características de LLMs: 
• Parâmetros: dezenas a centenas de bilhões (GPT-4: ~1 trilhão) 
• Treinamento: feito com trilhões de tokens (palavras e subpalavras) 
• Generalização: muito bom em muitas tarefas diferentes 
• Conhecimento: sabe sobre quase qualquer tópico 
• Localização: roda principalmente em servidores cloud poderosos 
• Latência: segundos a minutos para gerar resposta 
• Custo de operação: muito alto (exige GPUs caras) 
Small Language Models (SLMs) 
SLMs surgiram como alternativa prática. Exemplos: Phi (Microsoft), Gemma (Google), Mistral 7B. 
Características de SLMs: 
• Parâmetros: milhões a poucos bilhões (Gemma: 2B ou 7B) 
• Treinamento: feito com quantidades menores e mais focadas 
• Generalização: bom em tarefas específicas, pode não ter conhecimento amplo 
• Conhecimento: mais limitado, mas suficiente para domínios específicos 
• Localização: roda localmente, em servidores modestos, até em devices edge 


---
## Página 6

• Latência: milissegundos 
• Custo de operação: muito baixo (roda em CPU comum) 
Aspecto 
LLM 
SLM 
Parâmetros 
70B-1T 
7M-7B 
Dados Treinamento 
Trilhões de tokens 
Bilhões de tokens 
Generalização 
Excelente (conhecimento amplo) 
Boa (conhecimento focado) 
Localização 
Cloud (servers caros) 
Local (computador, celular) 
Latência 
1-10 segundos 
100-500ms 
Custo por Operação 
$$$ (caro) 
$ (barato) 
Privacidade 
Dados vão à nuvem 
Tudo local 
Melhor Para 
Conversação geral, análise 
complexa 
Apps específicas, edge, 
privacidade 
Quando Usar Cada Um? 
LLM quando você precisa de: 
• Generalização em muitos tópicos 
• Raciocínio complexo 
• Conhecimento amplo 
• Conversação natural sobre qualquer assunto 
Exemplo: chatbot para suporte ao cliente genérico 
SLM quando você precisa de: 
• Especialização em um domínio 
• Velocidade ultra-rápida 
• Privacidade garantida (sem enviar dados para cloud) 
• Rodar offline ou em dispositivos com pouca capacidade 
Exemplo: app de tradução offline no celular 
IMPORTANTE 
SLMs NÃO substituem LLMs em todos os cenários. É complementar. Use SLM para eficiência e 
privacidade, LLM para generalização. 
3. Transformers e o Mecanismo de Atenção 
Este é talvez o conceito mais revolucionário dos últimos anos na IA. Compreender como o 
mecanismo de atenção funciona é essencial para entender modelos modernos. 


---
## Página 7

A Revolução dos Transformers (2017) 
Em 2017, um paper chamado "Attention is All You Need" foi publicado e mudou completamente o 
curso da IA. Antes, a gente pensava que era impossível treinar modelos gigantescos de linguagem 
em tempo razoável. Os Transformers mudaram isso. 
O Problema das Redes Anteriores 
Antes dos Transformers, usávamos RNNs (Redes Neurais Recorrentes) para processar sequências 
(textos, séries temporais, etc.). 
O problema? RNNs processam sequencialmente: palavra 1 → palavra 2 → palavra 3 → ... 
 
Isso significa: 
• Não pode processar em paralelo (computador moderno tem múltiplos processadores, não pode 
aproveitar) 
• Informação de palavras no início da frase desaparece quando processa o final 
• Treinar é LENTÍSSIMO 
• Não consegue capturar dependências longas bem 
 
Exemplo: "O gato que estava dormindo no sofá da sala onde meus pais costumavam assistir TV 
acordou assustado quando ouviu barulho." 
 
Para o modelo entender a quem "acordou" se refere, ele precisa lembrar de "gato" mesmo depois de 
processar 20+ palavras depois. RNNs tinham dificuldade nisso. 
Como Funciona o Mecanismo de Atenção 
O mecanismo de atenção resolve isso de forma elegante. A ideia central: quando o modelo quer 
entender uma palavra, ele olha para TODAS as outras palavras, mas dá pesos diferentes para cada 
uma. 
Processo (simplificado): 
1. Para cada palavra na frase, calcula um "score de importância" para ela em relação a cada outra 
palavra 
2. Converte esses scores em pesos (via softmax) 
3. Combina as representações de todas as palavras, ponderadas por esses pesos 


---
## Página 8

4. Resultado: uma representação enriquecida da palavra que captura contexto 
 
Exemplo na prática: 
Frase: "O gato pulou sobre o cachorro" 
Para entender "pulou": 
• Dá peso ALTO para "gato" (quem pulou?) 
• Dá peso ALTO para "cachorro" (pulou sobre quem?) 
• Dá peso ALTO para "sobre" (qual foi a ação?) 
• Dá peso BAIXO para "o" (artigo, menos importante) 
 
Resultado: "pulou" é entendido no contexto do gato e cachorro, mesmo não estando próximos. 
CURIOSIDADE 
O mecanismo de atenção é tão poderoso que você consegue paralelizar o processamento — 
enquanto processa palavra 1, já processa palavras 2, 3, 4... simultaneamente. Daí o treinamento 
ficar muito mais rápido. 
Por Que Isso Revolucionou a IA? 
1. Paralelização: processamento mais rápido em GPUs 
2. Captura de contexto: entende dependências longas na sequência 
3. Escalabilidade: consegue treinar modelos muito maiores 
4. Generalização: modelos maiores aprendem padrões mais gerais 
 
Resultado: em poucos anos saímos de modelos de 100 milhões de parâmetros para bilhões. E a 
qualidade explodiu. 
4. Algoritmo vs Modelo 
Duas palavras que parecem sinônimas mas são fundamentalmente diferentes. 
DEFINIÇÃO 
 
ALGORITMO: O método, os passos lógicos para ensinar o modelo. É como uma receita de bolo — 
instruções detalhadas sobre o que fazer. 


---
## Página 9

 
MODELO: O resultado, a função matemática aprendida. É o bolo pronto que você conseguiu 
seguindo a receita. 
 
Exemplos de Algoritmos 
• Regressão Linear: encontra a reta que melhor descreve a relação entre variáveis 
• Árvores de Decisão: cria uma árvore de decisões recursivas 
• Gradient Boosting: cria múltiplas árvores fracas e as "booста" em conjunto 
• Redes Neurais: neurônios conectados que aprendem através de backpropagation 
• K-means: agrupa dados em K centróides 
• SVM (Support Vector Machine): encontra hiperplano ótimo que separa classes 
Exemplos de Modelos 
Resultado após aplicar um algoritmo aos dados: 
• Um modelo de regressão: "preço = 50000 + 2000*area + 5000*proximidade_metrô" 
• Uma árvore de decisão treinada: estrutura específica de nós de decisão 
• Uma rede neural treinada: pesos específicos em cada neurônio 
• Um agrupamento K-means: 5 centróides em posições específicas no espaço 
 
Cada um desses é um modelo único, resultado de treinar um algoritmo em dados específicos. 
A Analogia da Culinária 
RECEITA (Algoritmo): 
"1. Bata 3 ovos com 200g de açúcar por 5 minutos 
 2. Adicione 250g de farinha de trigo e mexa 
 3. Despeje em forma untada 
 4. Asse a 180°C por 30 minutos" 
 
BOLO PRONTO (Modelo): 
O bolo que você conseguiu seguindo a receita. Tem cor específica, textura específica, gosto 
específico — resultado de ter seguido os passos com seus ingredientes específicos. 
 
Se 10 pessoas seguem a mesma receita, todas conseguem um bolo bom, mas cada um será 


---
## Página 10

ligeiramente diferente (temperatura do forno variada, ingredientes diferentes, etc.). Mesma receita 
(algoritmo), modelos um pouco diferentes. 
IMPORTANTE 
Na prática: você ESCOLHE o algoritmo, aplica aos seus DADOS, e obtém um MODELO que usa em 
produção. 
Como isso afeta suas decisões: 
• Algoritmo diferente → modelo diferente (mesmo com dados iguais) 
• Dados diferentes → modelo diferente (mesmo com algoritmo igual) 
• Para melhorar um modelo, você pode: mudar o algoritmo, pegar mais/melhores dados, ou ajustar 
parâmetros do algoritmo 
 
 


---
## Página 11

ENCONTRO 2: EMBEDDINGS E 
ROTULAGEM 
Este encontro explora como convertemos informação abstrata em números que máquinas 
conseguem processar, e como preparamos dados para treinar modelos. 
1. Modelos Multimodais: Embedding vs Geração 
A IA moderna trabalha com múltiplas "modalidades" — texto, imagem, áudio, vídeo. Há duas 
operações principais que fazemos com dados multimodais. 
EMBEDDING MULTIMODAL 
 
Coloca conteúdo de diferentes modalidades no MESMO ESPAÇO VETORIAL, para poder comparar 
similaridade entre elas. 
 
Função: COMPARAR e RECUPERAR 
 
Exemplo: modelo CLIP treina olhando para pares (imagem, descrição textual). Aprende que uma 
foto de cachorro é similar à descrição "um cachorro fofo". 
 
Uso prático: 
• Busca de imagens por texto ("encontre fotos de gatos") 
• Recomendação entre modalidades ("se você gostou desse vídeo, talvez goste desse artigo") 
• Validação de compatibilidade ("essa descrição descreve bem essa imagem?") 
 
GERAÇÃO MULTIMODAL 
 
Usa conteúdo de UMA modalidade para CRIAR conteúdo em OUTRA modalidade. 
 
Função: CRIAR e GERAR 
 
Exemplo: DALL-E treina a gerar imagens a partir de descrições textuais. Recebe "um astronauta 
montando um unicórnio em Marte" e gera uma imagem. 
 
Uso prático: 


---
## Página 12

• Texto→Imagem: descrição para ilustração (DALL-E, Midjourney, Stable Diffusion) 
• Imagem→Texto: legenda de fotos (descrição automática) 
• Áudio→Texto: transcrição de fala (speech-to-text) 
• Texto→Áudio: síntese de fala (text-to-speech) 
 
Diferença Crítica 
Embedding multimodal responde: "Como essas duas coisas (de modalidades diferentes) se 
comparam?" 
 
Geração multimodal responde: "Crie algo novo nesta modalidade baseado nisso que recebi." 
 
A confusão é comum porque ambos lidam com múltiplas modalidades. Mas o objetivo é totalmente 
diferente. 
Aplicações Práticas 
Cenário 1: E-commerce inteligente 
Você quer um sistema que, dado uma descrição de roupa, encontra produtos similares no catálogo. 
→ Usa EMBEDDING MULTIMODAL (texto→imagem) 
Você compara a descrição (texto) com imagens dos produtos no espaço vetorial comum. 
 
Cenário 2: App de geração de arte 
Você quer um app que, dado uma descrição, gera uma pintura. 
→ Usa GERAÇÃO MULTIMODAL (texto→imagem) 
Você alimenta um descrição e o modelo cria uma imagem nova. 
2. Rotulagem de Dados e Mechanical Turk 
Um segredo sujo da IA: a maioria dos projetos de aprendizado supervisionado depende de humanos 
para rotular dados. 
Por Que Precisamos de Rótulos? 
Em aprendizado supervisionado, você treina dizendo ao modelo "isso é A" ou "isso é B" para 
milhares de exemplos. O modelo aprende a padrão. 
 


---
## Página 13

Problema: alguém precisa dizer "isso é A" ou "isso é B". Máquinas não conseguem isso sozinhas (em 
muitos casos). 
Exemplos de tarefas de rotulagem: 
• Diagnóstico médico: radiologista vê raio-X e marca "tem câncer" ou "sem câncer" 
• Detecção de objetos: pessoa marca retângulo ao redor de cada cachorro numa foto 
• Sentimento de texto: pessoa lê tweet e marca "positivo", "negativo" ou "neutro" 
• Qualidade de imagem: pessoa classifica foto como "clara" ou "borrada" 
• Transcrição: pessoa ouve áudio e escreve o que foi dito 
Amazon Mechanical Turk 
É uma plataforma da AWS que conecta você com força de trabalho humana sob demanda, distribída 
globalmente. 
Como funciona: 
1. Você define uma tarefa (HIT — Human Intelligence Task) 
2. Publica ela na plataforma 
3. Trabalhadores ao redor do mundo executam a tarefa 
4. Você aprova/rejeita o trabalho 
5. Paga pelos trabalhos aprovados 
 
Preços variam: desde $0.01 para tarefas simples até $10+ para tarefas complexas. 
Vantagens e Desvantagens 
VANTAGENS: 
• Escalável: 1.000 imagens precisam de rotulagem? Distribui para 100 pessoas em paralelo 
• Rápido: tarefas simples terminam em horas 
• Barato em escala: custo por unidade é baixo 
• Flexível: pode rodar tarefas muito variadas 
• Trabalho sob demanda: não precisa contratar ninguém 
 
DESVANTAGENS: 
• Qualidade variável: alguns trabalhadores são negligentes 
• Precisa de validação: você precisa revisar e aceitar/rejeitar o trabalho 
• Não funciona para tarefas muito complexas (que exigem conhecimento especializado) 


---
## Página 14

• Problemas éticos: trabalhadores podem ganhar muito pouco 
• Dilúcao: se tarefas são muito chatas, qualidade cai 
IMPORTANTE 
SageMaker Ground Truth (serviço da AWS) automatiza e gerencia rotulagem em escala, 
integrando Mechanical Turk quando necessário. 
3. Bancos de Vetores 
Embeddings são vetores (listas de números). Quando você tem milhões deles, você precisa 
armazená-los e buscar similaridade neles rapidamente. 
O Desafio 
Imagine um RAG (Retrieval-Augmented Generation) system: 
1. Você tem milhões de documentos 
2. Você converte cada um em um embedding (vetor com 768 números, por exemplo) 
3. Um usuário faz uma pergunta 
4. Você converte a pergunta em embedding 
5. Precisa encontrar os documentos MAIS SIMILARES à pergunta 
 
"Similares" significa: menor distância vetorial (cosine similarity, euclidiana, etc.) 
 
Buscar em força bruta (testar contra cada um dos milhões) é lento demais. 
Soluções Tradicionais 
Histórica, tínhamos: 
• Bancos vetoriais especializados: Pinecone, Weaviate, Milvus (ótimos para busca vetorial, mas você 
precisa de um banco separado) 
• Elasticsearch com plugins: permite busca vetorial mas não é natural 
 
Problema: você tem dados estruturados (preço, categoria, estoque) em um banco relacional, e 
vetores em um banco separado. Síncrono entre os dois é pesadelo. 


---
## Página 15

PostgreSQL com pgvector (Solução Moderna) 
A maioria dos bancos de dados relacionais agora tem suporte a tipos vetoriais (extensões). 
PostgreSQL tem `pgvector`. 
 
Vantagem crítica: você armazena TUDO no MESMO banco. 
 
Estrutura de tabela: 
``` 
CREATE TABLE produtos ( 
    id SERIAL PRIMARY KEY, 
    nome VARCHAR, 
    preco DECIMAL, 
    categoria VARCHAR, 
    estoque INT, 
    descricao_embedding vector(768)  -- coluna com embedding 
); 
``` 
 
Agora você pode: 
• Buscar por preço: `SELECT * FROM produtos WHERE preco > 100` 
• Buscar por similaridade vetorial: `SELECT * FROM produtos ORDER BY descricao_embedding <-> 
query_embedding LIMIT 10` 
• Combinar: `SELECT * FROM produtos WHERE categoria = 'Eletrônicos' AND descricao_embedding 
<-> query_embedding < distance_threshold` 
 
Tudo em uma única query SQL! 
IMPORTANTE 
PostgreSQL com pgvector unifica dados estruturados e vetores no mesmo banco, eliminando 
complexidade de manter dois bancos sincronizados. 


---
## Página 16

4. Tipos de Aprendizado de Máquina 
Existem vários paradigmas de aprendizado. Conhecer quando usar cada um é essencial. 
Tipo 
Dados 
Objetivo 
Feedback 
Exemplo 
Supervisionado 
Rótulos prévios 
Prever 
corretamente 
Resposta correta 
Classificar emails 
como spam 
Não 
Supervisionado 
Sem rótulos 
Encontrar padrões 
Nenhum 
Agrupar clientes 
Por Reforço 
Sem rótulos 
Maximizar 
recompensa 
Recompensa/punição 
Treinar robô a 
andar 
Federado 
Sem centralizar 
Treinar distribuído 
Varies 
Treinar no próprio 
celular 
Transferência 
Modelo pré-
treinado 
Adaptar a nova 
tarefa 
Dados da nova tarefa 
Usar modelo 
Imagenet para 
gatos 
Aprendizado Supervisionado 
Você fornece exemplos COM RÓTULOS. O modelo aprende a padrão. 
Tipos: 
• REGRESSÃO: previne um número contínuo (preço, temperatura, idade) 
• CLASSIFICAÇÃO: previne uma categoria (gato/cachorro, spam/não-spam) 
 
Algoritmos populares: 
• Regressão Linear, Logística 
• Árvores de Decisão 
• Random Forest 
• Gradient Boosting (XGBoost, LightGBM) 
• Redes Neurais 
• SVM (Support Vector Machines) 
Aprendizado Não Supervisionado 
Você fornece dados SEM rótulos. O modelo descobre padrões/estrutura nos dados. 
Tipos: 
• CLUSTERING: agrupa dados similares (K-means, DBSCAN, Hierarchical) 
• REDUÇÃO DIMENSIONAL: reduz número de variáveis mantendo informação (PCA, t-SNE) 
• REGRAS DE ASSOCIAÇÃO: encontra relações (se compra pão, provavelmente compra manteiga) 
 


---
## Página 17

Use quando: 
• Você não tem rótulos 
• Quer descobrir estrutura nos dados 
• Exploratory Data Analysis 
Aprendizado por Reforço 
O modelo aprende interagindo com um AMBIENTE. Toma ações, recebe feedback (recompensa ou 
punição), e aprende com isso. 
Componentes: 
• AGENTE: o modelo que toma decisões 
• AMBIENTE: o mundo em que o agente atua 
• AÇÃO: o que o agente pode fazer 
• ESTADO: situação atual 
• RECOMPENSA: feedback sobre se a ação foi boa ou ruim 
 
Exemplo: treinar um robô a andar 
• Agente: rede neural controlando os motores 
• Ambiente: simulação 3D da física 
• Ação: velocidade/ângulo de cada motor 
• Recompensa: quanto o robô avançou sem cair 
• Aprendizado: maximizar recompensa ao longo do tempo 
 
Muito usado em: jogos (AlphaGo), robótica, sistemas de recomendação 
Aprendizado Federado 
Treinar UM modelo de forma DESCENTRALIZADA, sem centralizar os dados. 
Como funciona: 
1. Cada dispositivo (celular, laptop, servidor local) tem dados locais 
2. Cada um treina o modelo LOCALMENTE com seus dados 
3. Envia apenas os UPDATES (mudanças) para servidor central 
4. Servidor central combina os updates 
5. Envia modelo atualizado de volta para todos 
6. Repete 


---
## Página 18

 
Vantagens: 
• PRIVACIDADE: dados nunca saem do dispositivo 
• SEGURANÇA: dados sensíveis não viajam na rede 
• EFICIÊNCIA: menos tráfego de rede (envia updates, não dados brutos) 
• COMPLIANCE: atende regulações tipo GDPR 
 
Exemplo: teclado inteligente do telefone que aprende suas preferências de digitação, mas isso 
treina no seu telefone, não em servidor remoto. 
Aprendizado por Transferência 
Você NÃO treina do zero. Você começa com um modelo já treinado em uma tarefa SIMILAR, e 
"adapta" para sua tarefa. 
Exemplo: 
1. Modelo treinado em ImageNet: aprendeu a reconhecer milhares de objetos em imagens 
2. Você quer um modelo para detectar gatos especificamente 
3. Em vez de treinar um novo modelo from scratch, você: 
   - Pega o modelo ImageNet 
   - Congela as camadas inferiores (que aprenderam features genéricas como "bordas", "formas") 
   - Treina apenas as camadas superiores com suas imagens de gatos 
   - Resultado: modelo treinado em dias, não meses, com melhor performance 
 
Vantagens: 
• Treina muito mais rápido 
• Precisa de menos dados 
• Performance é melhor (aproveita conhecimento anterior) 
 
Quando usar: 
• Você tem uma tarefa similar a algo que já foi treinado 
• Seus dados são limitados 
• Quer treinar rápido com pouco recurso 
 
 


---
## Página 19

ENCONTRO 3: TÉCNICAS E ALGORITMOS 
Este encontro aprofunda técnicas específicas de machine learning. O objetivo não é entender a 
matemática exata, mas ter clareza sobre QUANDO usar cada técnica e POR QUÊ. 
1. Regressão Linear 
Regressão Linear é uma das técnicas mais antigas e ainda uma das mais importantes. Não 
subestime sua simplicidade. 
O Conceito 
Regressão Linear tenta descrever a relação entre uma VARIÁVEL DEPENDENTE (o que você quer 
prever) e uma ou mais VARIÁVEIS INDEPENDENTES (inputs que você tem). 
 
A forma mais simples é uma reta em 2D: 
y = a + b*x 
 
Onde: 
• y = output 
• x = input 
• a = intercept 
• b = slope (o quanto y muda para cada unidade de x) 
 
Exemplo: preço de casa 
y = 100000 + 3000*area_m2 
2. K-means Clustering 
K-means agrupa dados em K grupos sem rótulos prévios. 
Algoritmo: 
1. Escolha K (número de grupos) 
2. Coloque K centros (centróides) aleatoriamente 
3. Para cada ponto, atribua ao centróide mais próximo 


---
## Página 20

4. Recalcule centróides como média dos pontos atribuídos 
5. Repita até convergir 
IMPORTANTE 
K-means é rápido e escala bem para grandes datasets. Use o Elbow Method para escolher K. 
 
 


---
## Página 21

ENCONTRO 4: INFERÊNCIA E MÉTRICAS 
Agora que você entende como treinar modelos, precisa aprender a usá-los em produção. 
1. Dois Paradigmas de Inferência 
Inferência em Tempo Real (Online) 
Requisição chega → Modelo processa → Resposta retorna em MILISSEGUNDOS. 
 
Características: 
• Endpoint sempre aguardando requisições 
• Latência baixa (tipicamente <100ms) 
• Custo ALTO 
• Ideal para: aplicações interativas 
Inferência em Lote (Batch) 
Acumula dados, depois em momento específico, processa TUDO de uma vez. 
 
Características: 
• Dados se acumulam 
• Job é executado em horário planejado (ex: 3 AM) 
• Latência alta (você não recebe resposta imediatamente) 
• Custo BAIXO 
• Ideal para: processamento que não é urgente 
2. Métricas de Classificação 
ACURÁCIA 
Percentual de acertos. PROBLEMA: em dados desbalanceados, pode enganar. 
PRECISÃO 
De tudo que previu COMO POSITIVO, quanto estava certo? 


---
## Página 22

RECALL 
De tudo que ERA positivo, quanto você capturou? 
F1 SCORE 
Média harmônica entre Precisão e Recall. Use em dados desbalanceados. 
MATRIZ DE CONFUSÃO tem 4 categorias: 
• VP (Verdadeiro Positivo): acerto bom 
• FP (Falso Positivo): alarme falso 
• VN (Verdadeiro Negativo): acerto bom 
• FN (Falso Negativo): deixou passar 
 
 


---
## Página 23

ENCONTRO 5: MÉTRICAS AVANÇADAS E 
HARDWARE 
Neste último encontro, aprofundamos em métricas de regressão, explicabilidade de modelos, e 
infraestrutura especializada da AWS. 
1. Métricas de Regressão 
MAE (Mean Absolute Error) 
Erro absoluto médio. Média de quanto as predições desviaram do real. 
MSE (Mean Squared Error) 
Eleva erro ao quadrado antes de fazer a média. Penaliza erros grandes. 
RMSE (Root Mean Squared Error) 
Raiz quadrada do MSE. Retorna à unidade original. Use para comunicar com negócio! 
R² (Coeficiente de Determinação) 
Percentual da variabilidade que o modelo explica. R²=0.85 significa 85% da variância explicada. 
2. Explicabilidade: PDPs 
Partial Dependence Plots responde: 'Em média, o que acontece com a previsão quando eu mudo 
esta variável?' 
 
PDPs funcionam em QUALQUER modelo — linear, árvore, rede neural. São essenciais para auditoria 
e compliance. 
3. Hardware Especializado da AWS 
AWS TRAINIUM 


---
## Página 24

Chip para TREINAMENTO. Otimizado para cargas pesadas de aprendizado. Para treinar modelos 
de larga escala. 
AWS INFERENTIA 
Chip para INFERÊNCIA. Otimizado para latência baixa e eficiência. Para servir modelos em 
produção. 
REGRA DE OURO 
Trainium para APRENDER. Inferentia para SERVIR. 
 
 


---
## Página 25

CONCLUSÃO E PRÓXIMOS PASSOS 
Você agora tem conhecimento sólido sobre os fundamentos de Machine Learning e IA. 
Dicas para o Exame 
• 
Memorize a diferença entre treinamento e inferência 
• 
Saiba quando usar: supervisionado (rótulos), não supervisionado (sem rótulos), reforço 
(feedback) 
• 
Regressão = números. Classificação = categorias. Clustering = agrupar 
• 
Trainium para treinar, Inferentia para servir 
• 
Em dados desbalanceados: use F1 Score, não acurácia 
• 
PDPs são para explicar modelos caixa-preta 
• 
Batch = barato, Tempo Real = caro, Serverless = pague pelo que usa 
Próximos Passos 
1. REVISE: Volte a este material sempre que tiver dúvida 
 
2. PRATIQUE: Use datasets públicos (Kaggle) e construa modelos 
 
3. EXPLORE AWS: Use SageMaker de verdade. Treine, faça inferência, veja custos 
 
4. ESTUDE CASOS REAIS: Procure por blogs e talks sobre como empresas usam IA 
 
5. SIMULE MAIS: Faça mais simulados. Entenda POR QUÊ cada resposta está certa 
 
6. ENGAJE: Comunidades têm pessoas dispostas a ajudar. Faça perguntas. 
Último Conselho 
A IA parece intimidante porque é. Mas não é mágica. É matemática, algoritmos, paciência e 
entendimento. 
 
Você passou por 20 questões de simulado, explorou conceitos profundos, viu exemplos práticos. 


---
## Página 26

Você está pronto. 
 
Na prova, quando ver uma pergunta ambígua: 
• Qual é o OBJETIVO? 
• Qual é a RESTRIÇÃO? 
• Qual TÉCNICA se encaixa? 
 
Confiança vem de conhecimento sólido. Você tem isso agora. 
 
Bons estudos! 💪 
