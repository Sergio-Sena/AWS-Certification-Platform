# Material do Aluno Encontro_13_2.pdf

*Convertido automaticamente de PDF*


---
## Página 1

Instrutora Josely Castro   
1 
MATERIAL DO ALUNO 
 
Tuning, Métricas MLOps e Operação 
de Modelos 
Encontro 13 — Guia Completo de Estudos para AWS AI Practitioner (Foco no 
Exame) 
Instrutora Josely Castro 
Instrutora Josely Castro  
 
 


---
## Página 2

Instrutora Josely Castro   
2 
MÓDULO 01 
Tuning e AutoML no SageMaker 
 
Estudo aprofundado sobre HPO (Hyperparameter Optimization), SageMaker Autopilot para dados 
tabulares e estratégias de Adaptação de Domínio. 
 
 


---
## Página 3

Instrutora Josely Castro   
3 
1. Hyperparameter Optimization (HPO) e Parâmetros 
Para o exame de certificação, é fundamental entender a linha divisória matemática entre 
Parâmetros e Hiperparâmetros. Em modelos de machine learning, os Parâmetros (parameters) 
representam os valores internos ajustados automaticamente pelo próprio algoritmo através de 
otimizações de gradiente (ex: pesos w e vieses b de neurônios). Os Hiperparâmetros 
(hyperparameters), ao contrário, são coeficientes de controle definidos externamente e fixados 
antes do treinamento começar. 
Atributo 
Parâmetro do Modelo 
Hiperparâmetro do Modelo 
Definição 
Variável interna que o modelo aprende 
a partir dos dados durante o treino. 
Variável externa definida pelo 
desenvolvedor para controlar o 
algoritmo. 
Exemplos Práticos 
Pesos de conexões neurais, 
coeficientes de regressão linear, nós 
de árvores de decisão. 
Taxa de aprendizado, número de 
épocas, tamanho de batch, 
profundidade máxima da árvore. 
Método de Ajuste 
Calculado de forma matemática via 
algoritmos como Backpropagation ou 
Gradiente Descendente. 
Definido por métodos sistemáticos de 
busca gerenciados (tuning jobs do 
HPO). 
 
Análise Matemática dos Métodos de Busca de HPO 
O SageMaker suporta três principais estratégias de busca, com diferentes trade-offs econômicos e 
de precisão: 
• Grid Search (Busca em Grade): Testa exaustivamente todas as combinações matemáticas 
possíveis em uma grade de coordenadas definida. Se você define N hiperparâmetros com M 
valores possíveis cada, o número de execuções de treino é M elevado a N. Possui altíssimo 
custo computacional e baixa eficiência, sendo redundante em muitos cenários. 
• Random Search (Busca Aleatória): Sorteia aleatoriamente combinações no espaço de busca. 
A probabilidade matemática de encontrar uma ótima combinação é alta mesmo com poucas 
tentativas, pois ela não fica presa em sub-regiões inflexíveis da grade. É muito mais rápida 
que a busca em grade. 
• Bayesian Optimization (Otimização Bayesiana): O método mais avançado e recomendado. 
Ele modela matematicamente o problema de busca como um processo gaussiano (Gaussian 
Process). A cada nova execução de treino, o algoritmo recalcula a probabilidade de ganho de 
desempenho baseado nos resultados históricos anteriores (função de aquisição). Isso 
direciona a busca para as áreas mais promissoras, otimizando o tempo e reduzindo os custos 
dos recursos computacionais da AWS. 
ANALOGIA 
A Busca pelo Tesouro: 
Imagina que você quer achar um tesouro enterrado em um terreno de 100x100 metros. 
• Grid Search: Cava buracos sequenciais de 1 em 1 metro, gastando dias de trabalho pesado de forma 
burra. 
• Random Search: Joga dardos de olhos vendados e cava onde eles caírem. Acha o tesouro mais 
rápido por sorte estatística. 
• Otimização Bayesiana: Usa um detector de metal. Cada apito do aparelho (treino anterior) te diz 
se você está mais perto ou longe, guiando seus passos inteligentes diretamente para o ponto exato. 


---
## Página 4

Instrutora Josely Castro   
4 
REGRA DE OURO PARA PROVAS 
Para o exame AWS AI Practitioner: Se a questão exigir maximizar a precisão do modelo ao mesmo 
tempo que gerencia e otimiza o orçamento computacional dos jobs de treinamento, escolha a 
Otimização Bayesiana (Bayesian Optimization). 
2. SageMaker Autopilot (AutoML) 
O SageMaker Autopilot automatiza todo o pipeline de ponta a ponta: engenharia de dados (data 
preprocessing), seleção de algoritmos e tuning de hiperparâmetros. 
Um detalhe crucial para a prova é a Transparência do Autopilot (Autopilot Transparency). Ao invés 
de agir como uma caixa preta inacessível, o Autopilot gera automaticamente dois notebooks 
documentados: 
• Notebook de Exploração de Dados: Analisa o dataset para identificar dados ausentes, 
duplicados ou distribuições desequilibradas. 
• Notebook de Candidatos a Modelo: Contém o código Python em SageMaker SDK que 
descreve todas as receitas de processamento e algoritmos testados, permitindo que o time de 
engenharia assuma o controle do código e faça ajustes manuais. 
3. Ajuste Fino com Adaptação de Domínio 
A Adaptação de Domínio (Domain Adaptation) adapta um Foundation Model (FM) geral a um 
vocabulário corporativo de nicho. Na prática do mercado de trabalho, essa abordagem impede 
alucinações e garante conformidade. 
Exemplo Real de Mercado 
Uma grande instituição de saúde adaptou um modelo Llama-3 de uso geral. O modelo geral 
interpretava a sigla médica 'IAM' como 'Inteligência Artificial em Medicina'. Após o processo de 
Adaptação de Domínio com dados clínicos corporativos, o modelo aprendeu corretamente que, no 
contexto hospitalar da instituição, 'IAM' significa 'Infarto Agudo do Miocárdio'. 
 
 


---
## Página 5

Instrutora Josely Castro   
5 
MÓDULO 02 
Redução de Dimensionalidade 
 
Simplificação estrutural de conjuntos de dados. Análise das abordagens lineares e não-lineares, 
com analogia fotográfica e espacial. 
 
 


---
## Página 6

Instrutora Josely Castro   
6 
A Matemática da Redução de Dimensionalidade 
Quando temos tabelas com centenas de colunas ou embeddings vetoriais com milhares de 
dimensões, os modelos de ML enfrentam a 'maldição da dimensionalidade' (curse of 
dimensionality), o que aumenta a latência de busca e facilita a ocorrência de overfitting. Reduzir 
dimensionalidade é essencial para simplificar e acelerar predições. 
Análise Matemática das Técnicas 
1. PCA (Principal Component Analysis) 
Técnica linear clássica. Ela realiza uma transformação ortogonal dos dados para um novo sistema 
de coordenadas. O primeiro componente principal captura a maior variabilidade possível dos dados 
(variância), e cada componente subsequente captura a maior variabilidade restante sob a restrição 
de ser ortogonal (perpendicular) aos componentes anteriores. 
ANALOGIA 
A Sombra da Câmera (PCA): 
Imagina que você quer tirar uma fotografia 2D de uma pipa flutuando no ar em 3D. Se você tirar a 
foto com a câmera posicionada exatamente em cima, a pipa parecerá um traço plano e você perderá a 
largura e a cauda. O PCA é a matemática que move a sua câmera no espaço até achar a angulação 
perfeita que projeta a sombra mais informativa da pipa na parede 2D, preservando o máximo de 
detalhes possível da forma original. 
2. t-SNE (t-Distributed Stochastic Neighbor Embedding) 
Algoritmo não-linear focado na preservação de relações de vizinhança local. Ele converte 
distâncias euclidianas entre pontos em probabilidades condicionais que representam similaridades. 
Ele é excelente para agrupar e visualizar clusters de embeddings em 2D ou 3D, mas altera a 
estrutura de distâncias globais. 
3. UMAP (Uniform Manifold Approximation and Projection) 
Algoritmo moderno não-linear baseado em geometria riemanniana. Diferente do t-SNE, o UMAP 
consegue preservar tanto as relações locais (vizinhos mais próximos) quanto a estrutura global do 
dataset. Além disso, a sua formulação matemática o torna muito mais rápido, sendo a escolha ideal 
para datasets massivos com milhões de vetores. 
4. Autoencoders 
Redes neurais artificiais compostas por duas partes principais: o encoder, que mapeia a entrada X 
de alta dimensão para um espaço latente compactado Z (gargalo), e o decoder, que tenta 
reconstruir o sinal original a partir de Z. A rede é treinada minimizando o erro de reconstrução, 
forçando Z a conter a essência matemática dos dados. 
RESUMO 
Resumo de Engenharia para Prova: 
• Visualização de Embeddings de Palavras: Use t-SNE ou UMAP. 
• Compressão Linear Rápida e Simples: Use PCA. 
• Compactação Não-Linear Complexa: Use Autoencoders. 
 
 


---
## Página 7

Instrutora Josely Castro   
7 
MÓDULO 03 
Métricas para Foundation Models 
 
Como avaliar objetivamente o desempenho de LLMs e FMs. Detalhamento matemático de 
precisão, recall e similaridade por vetores. 
 
 


---
## Página 8

Instrutora Josely Castro   
8 
Matemática das Métricas de Texto 
Avaliar textos gerados livremente por LLMs exige métricas robustas. Para o exame, você deve 
entender como cada uma funciona matematicamente: 
1. BLEU (Bilingual Evaluation Understudy) 
Focada em precisão de termos exatos. Ela calcula a proporção de n-gramas do texto gerado que 
aparecem no texto de referência. Para evitar que modelos gerem respostas curtas e incompletas 
para inflar a nota, o BLEU multiplica o resultado final por um fator de correção chamado Penalidade 
de Brevidade (Brevity Penalty - BP). 
DEFINIÇÃO 
Matemática do BLEU: 
BP = 1 se o tamanho da geração for maior ou igual ao da referência. Caso contrário, BP = exp(1 - r / c), 
onde r é o tamanho da referência e c o da geração. O score final é a multiplicação de BP pela média 
geométrica dos scores de precisão de n-gramas. 
ANALOGIA 
O Corretor Rígido: 
Imagine um professor corrigindo uma prova com um gabarito rígido ao lado. Se o gabarito diz 'A casa 
é amarela' e o aluno escreve 'A residência é amarela', o professor dá zero para a palavra 'residência' 
porque ela não está escrita exatamente igual no gabarito, ignorando que o significado é o mesmo. 
2. ROUGE (Recall-Oriented Understudy for Gisting Evaluation) 
Focada em recall (cobertura). Ela quer saber quanto do conteúdo essencial da referência humana 
foi de fato gerado pelo modelo no resumo. 
A variante ROUGE-L usa a Subsequência Comum Mais Longa (LCS). Ela identifica a sequência 
mais longa de palavras comuns entre os dois textos que aparece na mesma ordem relativa, mesmo 
que existam palavras intermediárias não-comuns. 
DEFINIÇÃO 
Matemática do ROUGE-L: 
Recall_L = LCS(Geração, Referência) / Total_palavras(Referência) 
Precisão_L = LCS(Geração, Referência) / Total_palavras(Geração) 
O ROUGE-L é o F-Score calculado a partir dessas duas frações. 
ANALOGIA 
A Lista de Compras: 
Imagine que seu cônjuge te deu uma lista de compras com 10 itens (Referência). Você vai ao mercado 
e volta com o carrinho cheio (Geração). O ROUGE é o fiscal que confere: 'Dos 10 itens que estavam na 
lista, quantos você trouxe?'. Se você trouxe 8, seu ROUGE (Recall) é 80%, mesmo que você tenha 
trazido outras 20 coisas extras no carrinho. 
3. BERTScore 
A métrica semântica moderna. Em vez de fazer casamento exato de strings (letras e palavras), ela 
converte cada palavra da geração e da referência em embeddings vetoriais contextuais (usando o 
BERT). Em seguida, ela calcula a similaridade de cosseno (o cosseno do ângulo entre os dois 
vetores no espaço multidimensional) para cada par de palavras. Palavras com significados 


---
## Página 9

Instrutora Josely Castro   
9 
próximos possuem vetores apontando quase na mesma direção, resultando em um cosseno 
próximo a 1. 
ANALOGIA 
O Cupido Semântico: 
O BERTScore funciona como um aplicativo de relacionamentos. Ele não olha se as palavras se vestem 
igual (letras escritas), mas sim se a 'vibração e energia interna' (significado) são compatíveis. Ele 
percebe imediatamente que 'cachorro' e 'cão' têm a mesma sintonia interna e dá nota 10 para o par, 
mesmo que a escrita seja diferente. 
 
 


---
## Página 10

Instrutora Josely Castro   
10 
MÓDULO 04 
Implantação de Modelos 
 
Arquitetura de Endpoints do SageMaker. Latência, escalabilidade automatizada e a escolha correta 
do padrão de hospedagem. 
 
 


---
## Página 11

Instrutora Josely Castro   
11 
Decisões de Arquitetura de Deploy para a Certificação 
Na prova AWS AI Practitioner, haverá cenários específicos cobrando a escolha correta de 
infraestrutura de inferência com base no custo, latência e comportamento do tráfego: 
• Real-time Endpoints (Hospedagem em Tempo Real): Recomendado para aplicações 
interativas com tráfego contínuo e exigência de baixíssima latência (milissegundos). Requer 
provisionamento persistente de instâncias EC2 rodando 24/7. 
• Serverless Endpoints (Pontos sem Servidor): Perfeito para tráfego esporádico ou intermitente 
com picos imprevisíveis. Você não paga nada pelo tempo ocioso da máquina. A desvantagem 
são os potenciais atrasos de 'inicialização a frio' (cold start) quando o contêiner precisa ser 
criado do zero após inatividade. 
• Asynchronous Endpoints (Inferência Assíncrona): Para cargas de trabalho com requisições 
grandes (imagens médicas ou vídeos pesados) que levam minutos para processar. Possui 
uma fila interna baseada no Amazon SQS e permite escalar as instâncias de processamento 
até zero se não houver requisições na fila. 
• Batch Transform (Transformação em Lote): Para processamento offline não-interativo de 
datasets massivos armazenados no Amazon S3. Não requer endpoints persistentes ativos, 
reduzindo drasticamente custos recorrentes. 
REGRA DE OURO PARA PROVAS 
Palavras-Chave de Questão: 
• Tráfego intermitente / Desejo de custo zero quando ocioso: Serverless Endpoint. 
• Baixa latência e tráfego persistente: Real-time Endpoint. 
• Processar arquivos gigantescos de forma não-síncrona/lote: Batch Transform. 
 
 


---
## Página 12

Instrutora Josely Castro   
12 
MÓDULO 05 
MLOps e Experimentos 
 
A governança do ciclo de vida de ML. Gerenciamento de desvios e rastreabilidade com SageMaker 
Pipelines. 
 
 


---
## Página 13

Instrutora Josely Castro   
13 
A Governança de MLOps no Exame 
No exame de certificação, entenda que o MLOps resolve a falta de governança e de controle de 
qualidade sobre modelos implantados. 
Os Diferentes Componentes do SageMaker para MLOps 
• SageMaker Pipelines: O primeiro serviço de CI/CD nativo de ML. Permite construir, 
automatizar e gerenciar pipelines de treinamento e deploy como código, garantindo 
reprodutibilidade. 
• SageMaker Experiments: Usado para organizar, rastrear e comparar execuções de 
treinamento (trials). Registra metadados como hiperparâmetros, dados de entrada utilizados, 
curvas de perda e acurácia. 
• SageMaker Model Registry: Catálogo centralizado de modelos. Permite registrar versões do 
modelo, gerenciar seu ciclo de vida de aprovação (Pendente -> Aprovado -> Rejeitado) e 
facilitar a promoção para produção. 
REGRA DE OURO PARA PROVAS 
Diferença Crítica MLOps vs DevOps: DevOps gerencia apenas código estático. MLOps precisa 
gerenciar código, infraestrutura e o desvio contínuo dos dados estatísticos no tempo (Data e Model 
Drift). 
 
 


---
## Página 14

Instrutora Josely Castro   
14 
MÓDULO 06 
SageMaker DeepAR 
 
Previsão estatística probabilística com Deep Learning. Redes recorrentes e previsões baseadas em 
P10, P50 e P90. 
 
 


---
## Página 15

Instrutora Josely Castro   
15 
A Matemática Probabilística do DeepAR 
Diferente de modelos clássicos que calculam previsões determinísticas pontuais (ex: 'amanhã 
venderemos 100 refrigerantes'), o SageMaker DeepAR é baseado em Redes Neurais Recorrentes 
(RNN) e estima uma distribuição de probabilidade sobre o futuro. 
Ele calcula previsões probabilísticas chamadas quantis (quantiles), que representam margens de 
confiança estatística: 
• P10: Cenário pessimista ou subestimado. Há apenas 10% de chance de a demanda real ser 
menor que esse valor. 
• P50: Cenário mediano. Há 50% de chance de a demanda real ser maior ou menor (mediana). 
• P90: Cenário otimista ou de pico de demanda. Há 90% de chance de a demanda real ser 
menor que esse valor (ou apenas 10% de chance de ser maior). 
DEFINIÇÃO 
Por que prever com quantis? 
Para controle de estoque em um supermercado, prever apenas a mediana (P50) significa que em 50% 
dos dias faltará produto nas prateleiras. Planejar compras baseando-se no quantil de segurança P90 
garante que o mercado terá estoque suficiente para cobrir picos de vendas em 90% dos cenários, 
evitando ruptura de estoque. 
ANALOGIA 
A Previsão do Clima Probabilística: 
Dizer 'Amanhã vai chover exatamente 10mm de água' é uma previsão determinística pontual. Se 
chover 100mm, a cidade alaga; se não chover nada, o agricultor desperdiça água. Uma previsão 
probabilística diz: 'A média prevista é 10mm, mas temos 90% de certeza (P90) de que a chuva não 
passará de 35mm'. Isso dá margem de segurança para a tomada de decisões. 
 
 


---
## Página 16

Instrutora Josely Castro   
16 
MÓDULO 07 
Monitoramento e Retreinamento 
 
Mantendo a saúde do modelo em produção. Detalhamento do SageMaker Model Monitor e das 4 
categorias de monitoramento. 
 
 


---
## Página 17

Instrutora Josely Castro   
17 
O Ciclo do SageMaker Model Monitor 
Para o exame de certificação AWS AI Practitioner, memorize as quatro categorias de 
monitoramento de produção oferecidas pelo SageMaker Model Monitor: 
• Monitoramento da Qualidade dos Dados (Data Quality): Detecta o desvio de dados (Data 
Drift) comparando a distribuição estatística das entradas de produção com a baseline de 
treinamento. 
• Monitoramento da Qualidade do Modelo (Model Quality): Compara as predições do modelo 
com os dados reais de gabarito reais (ground truth labels) coletados posteriormente para 
calcular a perda real de acurácia ou recall. 
• Monitoramento do Viés do Modelo (Model Bias Drift): Avalia se o modelo passou a apresentar 
vieses discriminatórios ou preconceituosos em relação a grupos protegidos (ex: gênero, 
idade) após receber dados de produção. 
• Monitoramento da Atribuição de Features (Feature Attribution Drift): Avalia se a importância 
relativa que o modelo dá para cada coluna ao tomar decisões mudou no tempo em 
comparação com o treinamento. 
REGRA DE OURO PARA PROVAS 
Questão Típica do Exame: 
Se a questão mencionar que a acurácia de um classificador de crédito caiu em produção devido a 
mudanças no perfil socioeconômico dos proponentes de empréstimo, a causa raiz é o Data Drift (Desvio 
de Dados), e o serviço AWS usado para capturar isso automaticamente é o SageMaker Model Monitor. 
 
 


---
## Página 18

Instrutora Josely Castro   
18 
Glossário Consolidado do Encontro 13 
Termo em Inglês 
Tradução Sugerida 
Definição Resumida para o Exame 
Hyperparameter 
Optimization (HPO) 
Otimização de 
Hiperparâmetros 
Busca automatizada da melhor combinação de 
configurações externas do modelo. 
SageMaker Autopilot 
SageMaker Autopilot 
(AutoML) 
Serviço que automatiza a criação de modelos 
tabulares gerando notebooks transparentes. 
Domain Adaptation 
Adaptação de Domínio 
Fine-tuning focado em especializar FMs em 
jargões de setores como saúde e finanças. 
Dimensionality Reduction 
Redução de 
Dimensionalidade 
Técnicas de simplificação de dados para 
reduzir custos e evitar overfitting. 
BLEU 
Avaliação Substituta 
Bilíngue 
Métrica de precisão baseada em n-gramas 
exatos, ideal para tradução e insensível a 
sinônimos. 
ROUGE 
Avaliação Baseada em 
Recall de Resumos 
Métrica de cobertura (recall) de tokens com 
foco em avaliar resumos automáticos. 
BERTScore 
BERTScore 
Avaliação semântica via embeddings 
contextualizados, reconhecendo sinônimos. 
Real-time Endpoints 
Pontos de Extremidade 
em Tempo Real 
APIs HTTP dedicadas para inferências 
síncronas de baixíssima latência. 
Data Drift 
Desvio de Dados 
Queda de performance causada pela alteração 
estatística dos dados em produção. 
Concept Drift 
Desvio de Conceito 
Mudança na relação lógica de causa/efeito 
entre as features e o alvo do modelo. 
SageMaker DeepAR 
SageMaker DeepAR 
Algoritmo de previsão probabilística de séries 
temporais baseado em redes neurais. 
Model Monitor 
Monitor de Modelos do 
SageMaker 
Serviço gerenciado para monitoramento de 
drift, qualidade e viés em tempo real. 
 
 


---
## Página 19

Instrutora Josely Castro   
19 
TERMO TÉCNICO: data drift 
Tradução: desvio de dados 
Definição: Desalinhamento estatístico que ocorre quando os dados fornecidos ao modelo em 
produção mudam substancialmente em comparação com os dados usados no treinamento, causando 
a degradação lenta da precisão. 
 
TERMO TÉCNICO: domain adaptation 
Tradução: adaptação de domínio 
Definição: Técnica de especialização de modelos que ajusta um Foundation Model de uso geral a um 
segmento específico de mercado, alinhando a linguagem e prevenindo alucinações. 
 
Análise das Questões de Avaliação 
QUESTÃO DE AVALIAÇÃO — EXAME PREP 
Após implantar um modelo em produção, sua equipe percebe que a precisão caiu com o 
tempo. Qual prática de MLOps deveria ter sido implementada para detectar e corrigir esse 
problema? 
(A) Versionamento apenas do código fonte 
(B) Monitoramento contínuo e retreinamento periódico 
(C) Deploy mais rápido do modelo 
(D) Aumentar o número de épocas no treino original 
 
Opção 
Veredicto 
Análise Detalhada 
(A) 
INCORRETA 
O versionamento do código-fonte é uma boa prática de 
DevOps/MLOps, mas isoladamente ele não avisa que o modelo 
em produção está perdendo precisão devido a variações do 
mundo real, nem corrige a perda de desempenho 
automaticamente. 
(B) 
CORRETA 
O monitoramento contínuo (ex: SageMaker Model Monitor) 
compara as inferências em produção com a baseline para avisar 
sobre desvios de dados. Ao detectar a queda, o retreinamento do 
modelo com dados recentes corrige a precisão. 
(C) 
INCORRETA 
Fazer o deploy mais rápido do modelo não resolve o problema. 
Se o modelo implantado continuar usando dados de treino 
defasados e não for monitorado, a precisão continuará a cair 
independentemente da velocidade do deploy. 
(D) 
INCORRETA 
Aumentar o número de épocas altera o treinamento inicial do 
modelo, o que pode levar ao overfitting e não corrige o 
envelhecimento natural do modelo perante dados novos 
recebidos após o deploy em produção. 
 


---
## Página 20

Instrutora Josely Castro   
20 
RESPOSTA CORRETA: OPÇÃO (B) 
Justificativa com Palavras-Chave: 
A perda de precisão gradual em produção é resolvida através de monitoramento contínuo (para 
detectar desvios de dados e desvios de conceito — data drift e concept drift) e retreinamento 
periódico (para atualizar o modelo com os padrões estatísticos mais recentes do negócio). 
 
