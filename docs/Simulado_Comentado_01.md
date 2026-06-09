# Simulado_Comentado_01.pdf

*Convertido automaticamente de PDF*


---
## Página 1

Simulado Comentado 01
AWS Certified AI Practitioner  •  AIF-C01
F U N D A M E N T O S
•   E M B E D D I N G S
•   M L
•   I N F E R Ê N C I A
•   M É T R I C A S
•   E C 2  T R N / I N F


---
## Página 2

S I M U L A D O   •   P E R G U N T A  1  D E  2 0   •   E N C O N T R O  1
Fundamentos - Treinamento vs Inferência
Uma empresa avalia o ciclo de vida de um modelo de Machine Learning. Sobre as fases de 
treinamento e inferência, qual afirmação está CORRETA?
A
Treinamento e inferência têm exatamente o mesmo custo computacional e ocorrem em paralelo.
B
Inferência ocorre antes do treinamento, gerando os dados que serão usados para aprender.
C
Treinamento costuma ser pontual e tem custo computacional alto; inferência é contínua e tem custo unitário menor, 
mas recorrente.
D
Inferência exige um volume de dados maior que o treinamento, pois é executada milhões de vezes.
Encontro 1  — Fundamentos — Treinamento vs Inferência
1 / 20


---
## Página 3

G A B A R I T O   •   P E R G U N T A  1  D E  2 0   •   E N C O N T R O  1
Fundamentos — Treinamento vs Inferência
A
A)
Treinamento e inferência têm exatamente o mesmo custo computacional e ocorrem em paralelo.
B
B)
Inferência ocorre antes do treinamento, gerando os dados que serão usados para aprender.
✓
C)
Treinamento costuma ser pontual e tem custo computacional alto; inferência é contínua e tem custo unitário 
menor, mas recorrente.
D
D)
Inferência exige um volume de dados maior que o treinamento, pois é executada milhões de vezes.
Por que C é a resposta correta
Treinamento é a fase em que o modelo aprende a partir dos dados 
geralmente acontece uma vez (ou em ciclos pontuais), consome muitos 
dados e exige hardware especializado (GPUs/Trainium). 
Inferência é o uso do modelo já treinado para gerar previsões: acontece 
continuamente em produção, com custo unitário menor, mas 
recorrente.
Encontro 1  — Fundamentos — Treinamento vs Inferência
1 / 20


---
## Página 4

S I M U L A D O   •   P E R G U N T A  2  D E  2 0   •   E N C O N T R O  1
S E L E C I O N E  2  
R E S P O S T A S
Fundamentos — Características dos SLMs
Selecione DUAS características que distinguem os SLMs (Small Language Models) dos LLMs (Large 
Language Models).
A
Possuem ordens de grandeza MENOS parâmetros que os LLMs.
B
São treinados com trilhões de tokens em pré-treinamento massivo.
C
Podem rodar localmente, em servidores menores ou em dispositivos finais (edge).
D
Apresentam latência de inferência maior que os LLMs.
E
Substituem os LLMs em qualquer cenário, sempre com qualidade superior.
Encontro 1  — Fundamentos — Características dos SLMs
2 / 20


---
## Página 5

G A B A R I T O   •   P E R G U N T A  2  D E  2 0   •   E N C O N T R O  1
S E L E C I O N E  2  
R E S P O S T A S
Fundamentos — Características dos SLMs
✓
A)
Possuem ordens de grandeza MENOS parâmetros que os LLMs.
B
B)
São treinados com trilhões de tokens em pré-treinamento massivo.
✓
C)
Podem rodar localmente, em servidores menores ou em dispositivos finais (edge).
D
D)
Apresentam latência de inferência maior que os LLMs.
E
E)
Substituem os LLMs em qualquer cenário, sempre com qualidade superior.
Por que A e C são as respostas corretas
SLMs possuem ordens de grandeza menos parâmetros que os LLMs (A), 
milhões a poucos bilhões, contra dezenas/centenas de bilhões dos LLMs. 
Justamente por serem menores, podem rodar localmente, em servidores 
modestos ou em dispositivos finais (C), ideal para edge, baixa latência e 
privacidade. As demais são incorretas: SLMs são treinados com volumes 
menores e mais focados; são MAIS rápidos na inferência; e NÃO 
substituem LLMs em qualquer cenário (perdem em generalização ampla).
Encontro 1  — Fundamentos — Características dos SLMs
2 / 20


---
## Página 6

S I M U L A D O   •   P E R G U N T A  3  D E  2 0   •   E N C O N T R O  1
Fundamentos — Transformer
Qual mecanismo, central na arquitetura Transformer, permite ao modelo decidir quais partes do 
texto são mais importantes em cada momento, ponderando os tokens anteriores e capturando 
relações independentemente da distância no texto?
A
Janela deslizante de convolução.
B
Mecanismo de atenção (attention).
C
Backpropagation no tempo (BPTT) das RNNs.
D
Pooling máximo entre camadas.
Encontro 1  — Fundamentos — Transformer
3 / 20


---
## Página 7

G A B A R I T O   •   P E R G U N T A  3  D E  2 0   •   E N C O N T R O  1
Fundamentos — Transformer
A
A)
Janela deslizante de convolução.
✓
B)
Mecanismo de atenção (attention).
C
C)
Backpropagation no tempo (BPTT) das RNNs.
D
D)
Pooling máximo entre camadas.
Por que B é a resposta correta
O mecanismo de atenção é o componente central do Transformer. Permite ao modelo dar mais 
peso às palavras que mais importam para prever a próxima, independentemente da distância 
no texto. Foi essa inovação (publicada em 2017) que viabilizou treinar modelos muito maiores 
em paralelo e originou os LLMs modernos.
Encontro 1  — Fundamentos — Transformer
3 / 20


---
## Página 8

S I M U L A D O   •   P E R G U N T A  4  D E  2 0   •   E N C O N T R O  1
Fundamentos — Modelo vs Algoritmo
Sobre a distinção entre algoritmo e modelo em Machine Learning, qual afirmação está CORRETA?
A
Algoritmo e modelo são sinônimos: termos diferentes para a mesma coisa.
B
Modelo é o método de treinamento; algoritmo é o resultado final usado em produção.
C
Algoritmo é o conjunto de passos para treinar, modelo é o resultado obtido após aplicar o algoritmo aos dados.
D
Algoritmo só atua na fase de inferência; modelo só atua na fase de treinamento.
Encontro 1  — Fundamentos — Modelo vs Algoritmo
4 / 20


---
## Página 9

G A B A R I T O   •   P E R G U N T A  4  D E  2 0   •   E N C O N T R O  1
Fundamentos — Modelo vs Algoritmo
A
A)
Algoritmo e modelo são sinônimos: termos diferentes para a mesma coisa.
B
B)
Modelo é o método de treinamento; algoritmo é o resultado final usado em produção.
✓
C)
Algoritmo é o conjunto de passos para treinar, modelo é o resultado obtido após aplicar o algoritmo aos dados.
D
D)
Algoritmo só atua na fase de inferência; modelo só atua na fase de treinamento.
Por que C é a resposta correta
O algoritmo é o método, o conjunto de passos lógicos que define como o modelo será 
treinado (ex.: regressão linear, árvores de decisão, gradient boosting). O modelo é o 
resultado, a função matemática aprendida que transforma entradas em saídas. Pense: 
receita (algoritmo) vs prato pronto (modelo).
Encontro 1  — Fundamentos — Modelo vs Algoritmo
4 / 20


---
## Página 10

S I M U L A D O   •   P E R G U N T A  5  D E  2 0   •   E N C O N T R O  2
Embeddings
Uma equipe quer construir uma funcionalidade na qual o usuário envia uma descrição em texto 
("praia ao pôr do sol") e recebe uma imagem gerada com base nessa descrição. Qual tipo de 
modelo é o MAIS adequado para essa tarefa?
A
Modelo de embedding de texto.
B
Modelo de embedding multimodal (apenas).
C
Modelo de geração multimodal.
D
Modelo bag-of-words com TF-IDF.
Encontro 2  — Embeddings
5 / 20


---
## Página 11

G A B A R I T O   •   P E R G U N T A  5  D E  2 0   •   E N C O N T R O  2
Embeddings
A
A)
Modelo de embedding de texto.
B
B)
Modelo de embedding multimodal.
✓
C)
Modelo de geração multimodal.
D
D)
Modelo bag-of-words com TF-IDF.
Por que C é a resposta correta
Embedding multimodal apenas COMPARA conteúdos de modalidades diferentes em 
um espaço vetorial comum. Geração multimodal CRIA saída em uma modalidade a 
partir de outra, exatamente o caso de texto-para-imagem. A diferença-chave: 
embedding compara, geração cria.
Encontro 2  — Embeddings 
5 / 20


---
## Página 12

S I M U L A D O   •   P E R G U N T A  6  D E  2 0   •   E N C O N T R O  2
Rotulagem — Mechanical Turk
Qual a principal função do Amazon Mechanical Turk no contexto de preparação de dados para 
Inteligência Artificial?
A
Treinar modelos de deep learning em GPUs gerenciadas.
B
Armazenar embeddings em colunas vetoriais consultáveis por SQL.
C
Fornecer força de trabalho humana sob demanda para tarefas como rotulagem, validação e curadoria de dados.
D
Servir endpoints de inferência em tempo real para LLMs.
Encontro 2  — Rotulagem — Mechanical Turk
6 / 20


---
## Página 13

G A B A R I T O   •   P E R G U N T A  6  D E  2 0   •   E N C O N T R O  2
Rotulagem — Mechanical Turk
A
A)
Treinar modelos de deep learning em GPUs gerenciadas.
B
B)
Armazenar embeddings em colunas vetoriais consultáveis por SQL.
✓
C)
Fornecer força de trabalho humana sob demanda para tarefas como rotulagem, validação e curadoria de dados.
D
D)
Servir endpoints de inferência em tempo real para LLMs.
Por que C é a resposta correta
Mechanical Turk é uma plataforma da AWS de força de trabalho 
humana sob demanda. Trabalhadores executam "human intelligence 
tasks" (HITs), úteis para rotulagem, validação e curadoria, tarefas que 
máquinas fazem mal. Pode ser integrado ao SageMaker Ground Truth 
para escalar a rotulagem.
Encontro 2  — Rotulagem — Mechanical Turk
6 / 20


---
## Página 14

S I M U L A D O   •   P E R G U N T A  7  D E  2 0   •   E N C O N T R O  2
Banco de vetores
Uma aplicação de RAG precisa armazenar embeddings junto com dados estruturados de produtos 
(preço, categoria, estoque) em um único banco gerenciado da AWS, consultando ambos com SQL. 
Qual solução é a MAIS adequada?
A
Amazon S3 com Athena para consultas em arquivos Parquet.
B
Amazon Aurora PostgreSQL com a extensão pgvector.
C
Amazon DynamoDB com índices secundários globais.
D
Amazon SageMaker Ground Truth para indexar vetores.
Encontro 2  — Banco de vetores
7 / 20


---
## Página 15

G A B A R I T O   •   P E R G U N T A  7  D E  2 0   •   E N C O N T R O  2
Banco de vetores
A
A)
Amazon S3 com Athena para consultas em arquivos Parquet.
✓
B)
Amazon Aurora PostgreSQL com a extensão pgvector.
C
C)
Amazon DynamoDB com índices secundários globais.
D
D)
Amazon SageMaker Ground Truth para indexar vetores.
Por que B é a resposta correta
Aurora PostgreSQL é o banco relacional gerenciado da AWS. A 
extensão pgvector adiciona suporte a tipos vetoriais, 
permitindo armazenar embeddings em colunas e consultar por 
similaridade usando SQL. Une, no mesmo banco, dados 
estruturados e vetores, reduzindo a complexidade de manter 
um banco vetorial separado.
Encontro 2  — Banco de vetores
7 / 20


---
## Página 16

S I M U L A D O   •   P E R G U N T A  8  D E  2 0   •   E N C O N T R O  2
S E L E C I O N E  2  
R E S P O S T A S
Tipos de Aprendizado de Máquina
Selecione DUAS afirmações CORRETAS sobre os tipos de aprendizado de máquina.
A
O aprendizado supervisionado depende de dados previamente rotulados com a resposta correta.
B
O aprendizado por reforço aprende observando pares de entrada e saída previamente rotulados.
C
O aprendizado federado treina o modelo SEM centralizar os dados, preservando privacidade.
D
O aprendizado não supervisionado exige um conjunto auxiliar de rótulos para funcionar.
E
O aprendizado por transferência exige treinar o modelo do zero, sem aproveitar conhecimento anterior.
Encontro 2  — Tipos de Aprendizado de Máquina
8 / 20


---
## Página 17

G A B A R I T O   •   P E R G U N T A  8  D E  2 0   •   E N C O N T R O  2
S E L E C I O N E  2  
R E S P O S T A S
Tipos de Aprendizado de Máquina
✓
A)
O aprendizado supervisionado depende de dados previamente rotulados com a resposta correta.
B
B)
O aprendizado por reforço aprende observando pares de entrada e saída previamente rotulados.
✓
C)
O aprendizado federado treina o modelo SEM centralizar os dados, preservando privacidade.
D
D)
O aprendizado não supervisionado exige um conjunto auxiliar de rótulos para funcionar.
E
E)
O aprendizado por transferência exige treinar o modelo do zero, sem aproveitar conhecimento anterior.
Por que A e C são as respostas corretas
Encontro 2  — Tipos de Aprendizado de Máquina
8 / 20


---
## Página 18

S I M U L A D O   •   P E R G U N T A  9  D E  2 0   •   E N C O N T R O  3
Uma imobiliária deseja prever o preço de venda de imóveis a partir da área (m²) e do bairro, 
modelando essa relação como uma combinação linear das variáveis de entrada. Qual técnica é a 
MAIS adequada?
A
K-means clustering.
B
Regressão Linear.
C
Classificação binária com K-NN.
D
Bag-of-words com TF-IDF.
Encontro 3
9 / 20


---
## Página 19

G A B A R I T O   •   P E R G U N T A  9  D E  2 0   •   E N C O N T R O  3
A
A)
K-means clustering.
✓
B)
Regressão Linear.
C
C)
Classificação binária com K-NN.
D
D)
Bag-of-words com TF-IDF.
Por que B é a resposta correta
Regressão Linear traça a melhor reta (combinação linear) 
que descreve a relação entre variáveis de entrada e uma 
saída numérica contínua. A saída "preço do imóvel" é 
numérica → regressão. Cada variável recebe um peso 
indicando seu impacto. Simples, rápida e interpretável.
Encontro 3  — Regressão — Regressão Linear
9 / 20


---
## Página 20

S I M U L A D O   •   P E R G U N T A  1 0  D E  2 0   •   E N C O N T R O  3
Um time de marketing quer segmentar a base de clientes em grupos com comportamento de 
compra semelhante, SEM dispor de rótulos prévios. Qual técnica deve ser utilizada?
A
XGBoost para classificação multiclasse.
B
K-NN supervisionado.
C
Regressão Linear sobre o ticket médio.
D
K-means clustering.
Encontro 3
10 / 20


---
## Página 21

G A B A R I T O   •   P E R G U N T A  1 0  D E  2 0   •   E N C O N T R O  3
A
A)
XGBoost para classificação multiclasse.
B
B)
K-NN supervisionado.
C
C)
Regressão Linear sobre o ticket médio.
✓
D)
K-means clustering.
Por que D é a resposta correta
Clustering é a família que agrupa observações parecidas SEM rótulos 
prévios, aprendizado não supervisionado. K-means divide os dados em K 
grupos representados por centróides, atribuindo cada observação ao 
centróide mais próximo. Ideal para segmentação de clientes, produtos ou 
perfis comportamentais.
Encontro 3
10 / 20


---
## Página 22

S I M U L A D O   •   P E R G U N T A  1 1  D E  2 0   •   E N C O N T R O  3
Classificação
Um modelo de classificação binária produz uma probabilidade para cada caso. Reduzir o limiar de 
decisão de 0.5 para 0.3 fará com que o modelo:
A
Aceite MAIS casos como positivos, ficando mais sensível (mais alarmes, inclusive falsos).
B
Aceite MENOS casos como positivos, ficando mais conservador.
C
Elimine simultaneamente falsos positivos e falsos negativos.
D
Não tenha nenhum efeito sobre a decisão final.
Encontro 3  — Classificação
11 / 20


---
## Página 23

G A B A R I T O   •   P E R G U N T A  1 1  D E  2 0   •   E N C O N T R O  3
Classificação
✓
A)
Aceite MAIS casos como positivos, ficando mais sensível (mais alarmes, inclusive falsos).
B
B)
Aceite MENOS casos como positivos, ficando mais conservador.
C
C)
Elimine simultaneamente falsos positivos e falsos negativos.
D
D)
Não tenha nenhum efeito sobre a decisão final.
Por que A é a resposta correta
O limiar (intervalo) é o ponto de corte da probabilidade a partir do qual o modelo 
escolhe a classe positiva. Limiar mais baixo (0.3) → o modelo aceita mais casos como 
positivos → mais sensível, mais alarmes falsos. Limiar mais alto → mais conservador, 
pode deixar passar casos importantes. É um trade-off entre Recall e Precisão.
Encontro 3  — Classificação
11 / 20


---
## Página 24

S I M U L A D O   •   P E R G U N T A  1 2  D E  2 0   •   E N C O N T R O  3
S E L E C I O N E  2  
R E S P O S T A S
Aplicações de Classificação Binária
Selecione DUAS aplicações típicas em que a CLASSIFICAÇÃO BINÁRIA é a técnica de Machine 
Learning adequada.
A
Prever o preço de venda de um imóvel a partir da área (m²) e da localização.
B
Identificar se uma transação financeira é FRAUDE ou NÃO-FRAUDE.
C
Detectar se um e-mail é SPAM ou NÃO-SPAM.
D
Agrupar clientes em segmentos com comportamento de compra semelhante.
E
Identificar o idioma de um texto dentre 20 idiomas possíveis.
Encontro 3  — Aplicações de Classificação Binária
12 / 20


---
## Página 25

G A B A R I T O   •   P E R G U N T A  1 2  D E  2 0   •   E N C O N T R O  3
S E L E C I O N E  2  
R E S P O S T A S
Aplicações de Classificação Binária
A
A)
Prever o preço de venda de um imóvel a partir da área (m²) e da localização.
✓
B)
Identificar se uma transação financeira é FRAUDE ou NÃO-FRAUDE.
✓
C)
Detectar se um e-mail é SPAM ou NÃO-SPAM.
D
D)
Agrupar clientes em segmentos com comportamento de compra semelhante.
E
E)
Identificar o idioma de um texto dentre 20 idiomas possíveis.
Por que B e C são as respostas corretas
Classificação binária responde "a qual de DUAS categorias o 
exemplo pertence?“ Fraude/Não-fraude (B) e Spam/Não-spam (C) 
são casos clássicos, apenas duas classes possíveis. As demais são 
outras famílias: prever preço (A) é regressão (saída numérica), 
agrupar clientes sem rótulos (D) é clustering, identificar idioma 
entre 20 possíveis (E) é classificação multiclasse.
Encontro 3  — Aplicações de Classificação Binária
12 / 20


---
## Página 26

S I M U L A D O   •   P E R G U N T A  1 3  D E  2 0   •   E N C O N T R O  4
S E L E C I O N E  2  
R E S P O S T A S
Selecione DUAS características da Inferência em Lote (Batch).
A
Processa grandes volumes de dados de uma só vez, em jobs planejados.
B
Mantém o endpoint sempre disponível com latência de milissegundos.
C
Geralmente apresenta MENOR custo por previsão.
D
É a escolha ideal para detecção de fraude online em tempo real.
E
Exige escalar a capacidade para o pico de uso contínuo, 24/7.
Encontro 4  — Inferência em Lote (Batch)
13 / 20
Inferência em Lote (Batch)


---
## Página 27

G A B A R I T O   •   P E R G U N T A  1 3  D E  2 0   •   E N C O N T R O  4
S E L E C I O N E  2  
R E S P O S T A S
Inferência em Lote (Batch)
✓
A)
Processa grandes volumes de dados de uma só vez, em jobs planejados.
B
B)
Mantém o endpoint sempre disponível com latência de milissegundos.
✓
C)
Geralmente apresenta MENOR custo por previsão.
D
D)
É a escolha ideal para detecção de fraude online em tempo real.
E
E)
Exige escalar a capacidade para o pico de uso contínuo, 24/7.
Por que A e C são as respostas corretas
Inferência em Lote (A) processa grandes volumes de dados acumulados de uma só 
vez, em jobs planejados (ex.: scoring noturno de crédito, relatórios). Os recursos 
computacionais são alocados apenas durante a execução do job (C), o que reduz o 
custo por previsão. As demais descrevem inferência em tempo real: endpoint 
sempre ativo (B), aplicações interativas como fraude online (D) e capacidade 
dimensionada para o pico (E).
Encontro 4  — Inferência em Lote (Batch)
13 / 20


---
## Página 28

S I M U L A D O   •   P E R G U N T A  1 4  D E  2 0   •   E N C O N T R O  4
Um modelo recebe tráfego imprevisível e intermitente, com longos períodos ocioso entre rajadas 
de uso. A equipe quer evitar pagar por capacidade não usada e não quer gerenciar infraestrutura. 
Qual opção é a MAIS adequada?
A
Amazon SageMaker Serverless Inference.
B
Endpoint provisionado 24/7 em instância EC2 P4.
C
Inferência em lote agendada de hora em hora.
D
Mechanical Turk para processar cada requisição.
Encontro 4
14 / 20


---
## Página 29

G A B A R I T O   •   P E R G U N T A  1 4  D E  2 0   •   E N C O N T R O  4
✓
A)
Amazon SageMaker Serverless Inference.
B
B)
Endpoint provisionado 24/7 em instância EC2 P4.
C
C)
Inferência em lote agendada de hora em hora.
D
D)
Mechanical Turk para processar cada requisição.
Por que A é a resposta correta
SageMaker Serverless Inference é um serviço gerenciado que 
inicia automaticamente o endpoint quando há requisições, escala 
conforme o tráfego e não cobra enquanto o endpoint está 
ocioso. Ideal para cargas imprevisíveis, intermitentes ou de baixo 
volume, reduz complexidade operacional e custo ocioso.
Encontro 4
14 / 20


---
## Página 30

S I M U L A D O   •   P E R G U N T A  1 5  D E  2 0   •   E N C O N T R O  4
Métricas
Em um problema de classificação com classes muito desbalanceadas (poucos positivos), qual 
métrica equilibra Precisão e Recall em uma única medida e é recomendada para esse cenário?
A
Acurácia.
B
MAE (Mean Absolute Error).
C
F1 Score.
D
MSE (Mean Squared Error).
Encontro 4  — Métricas
15 / 20


---
## Página 31

G A B A R I T O   •   P E R G U N T A  1 5  D E  2 0   •   E N C O N T R O  4
Métricas
A
A)
Acurácia.
B
B)
MAE (Mean Absolute Error).
✓
C)
F1 Score.
D
D)
MSE (Mean Squared Error).
Por que C é a resposta correta
F1 Score é a média harmônica entre Precisão e Recall, penaliza desequilíbrios. Em 
classes desbalanceadas, a Acurácia pode ser enganosa (um modelo que sempre 
prevê "negativo" teria alta acurácia se 99% das amostras são negativas, mas 
Recall zero). MAE e MSE são métricas de regressão, não de classificação.
Encontro 4  — Métricas
15 / 20


---
## Página 32

S I M U L A D O   •   P E R G U N T A  1 6  D E  2 0   •   E N C O N T R O  4
Matriz de Confusão
No diagnóstico médico para uma doença grave, o modelo deixou de identificar um paciente que 
realmente tinha a doença (classificou como saudável). Esse erro é classificado na matriz de 
confusão como:
A
Verdadeiro Positivo (VP).
B
Falso Positivo (FP).
C
Verdadeiro Negativo (VN).
D
Falso Negativo (FN).
Encontro 4  — Matriz de Confusão
16 / 20


---
## Página 33

G A B A R I T O   •   P E R G U N T A  1 6  D E  2 0   •   E N C O N T R O  4
Matriz de Confusão
A
A)
Verdadeiro Positivo (VP).
B
B)
Falso Positivo (FP).
C
C)
Verdadeiro Negativo (VN).
✓
D)
Falso Negativo (FN).
Por que D é a resposta correta
Falso Negativo (FN): o modelo previu "Negativo" 
(saudável), mas o real era "Positivo" (doente). Em 
diagnóstico médico, FN é o erro mais caro  deixar 
passar um caso real de doença. Por isso, nesse tipo 
de aplicação, prioriza-se o Recall (VP / (VP + FN)), 
que mede a capacidade de capturar os positivos 
reais.
Encontro 4  — Matriz de Confusão
16 / 20


---
## Página 34

S I M U L A D O   •   P E R G U N T A  1 7  D E  2 0   •   E N C O N T R O  5
Métricas
Qual a PRINCIPAL vantagem do RMSE (Root Mean Squared Error) em relação ao MSE quando se 
comunica o desempenho de um modelo de regressão para áreas de negócio?
A
RMSE é mais barato de calcular computacionalmente que o MSE.
B
RMSE elimina completamente o efeito de outliers.
C
RMSE está na mesma unidade da variável original, facilitando a interpretação.
D
RMSE substitui a necessidade de calcular o R².
Encontro 5  — Métricas
17 / 20


---
## Página 35

G A B A R I T O   •   P E R G U N T A  1 7  D E  2 0   •   E N C O N T R O  5
Métricas
A
A)
RMSE é mais barato de calcular computacionalmente que o MSE.
B
B)
RMSE elimina completamente o efeito de outliers.
✓
C)
RMSE está na mesma unidade da variável original, facilitando a interpretação.
D
D)
RMSE substitui a necessidade de calcular o R².
Por que C é a resposta correta
MSE eleva os erros ao quadrado, então a unidade resulta ao quadrado
(ex.: R² em vez de R$), o que dificulta a comunicação. RMSE é a raiz do MSE, 
retornando à unidade original da variável "o modelo erra em média X reais". 
Continua sensível a outliers (herdada do MSE), mas é mais intuitivo em 
relatórios.
Encontro 5  — Métricas
17 / 20


---
## Página 36

S I M U L A D O   •   P E R G U N T A  1 8  D E  2 0   •   E N C O N T R O  5
Métricas
Um modelo de regressão apresentou R² igual a 0.85 no conjunto de validação. Qual a interpretação 
CORRETA desse valor?
A
O modelo erra em média 85 unidades em relação ao valor real.
B
O modelo explica aproximadamente 85% da variabilidade dos dados.
C
O modelo acerta 85% das classificações no conjunto de validação.
D
O modelo tem 85% de precisão (precision) nas classes positivas.
Encontro 5  — Métricas
18 / 20


---
## Página 37

G A B A R I T O   •   P E R G U N T A  1 8  D E  2 0   •   E N C O N T R O  5
Métricas
A
A)
O modelo erra em média 85 unidades em relação ao valor real.
✓
B)
O modelo explica aproximadamente 85% da variabilidade dos dados.
C
C)
O modelo acerta 85% das classificações no conjunto de validação.
D
D)
O modelo tem 85% de precisão (precision) nas classes positivas.
Por que B é a resposta correta
R² mede a fração da variabilidade dos dados que o modelo consegue explicar. 
R² = 1 → modelo perfeito (explica toda a variância). R² = 0 → equivale a sempre 
prever a média. R² < 0 → pior que prever a média. R² = 0.85 → o modelo explica 
~85% da variância. Atenção: R² não mede erro (use RMSE) nem se aplica a 
classificação (use F1/Acurácia).
Encontro 5  — Métricas
18 / 20


---
## Página 38

S I M U L A D O   •   P E R G U N T A  1 9  D E  2 0   •   E N C O N T R O  5
Explicabilidade
Sobre Partial Dependence Plots (PDPs), qual afirmação está CORRETA?
A
São métricas numéricas de erro de regressão, como o MSE e o RMSE.
B
São gráficos de explicabilidade que mostram, em média, o efeito de uma variável na previsão do modelo.
C
Substituem totalmente a matriz de confusão em problemas de classificação.
D
São aplicáveis apenas a modelos lineares, não a modelos caixa-preta.
Encontro 5  — Explicabilidade
19 / 20


---
## Página 39

G A B A R I T O   •   P E R G U N T A  1 9  D E  2 0   •   E N C O N T R O  5
Explicabilidade
A
A)
São métricas numéricas de erro de regressão, como o MSE e o RMSE.
✓
B)
São gráficos de explicabilidade que mostram, em média, o efeito de uma variável na previsão do modelo.
C
C)
Substituem totalmente a matriz de confusão em problemas de classificação.
D
D)
São aplicáveis apenas a modelos lineares, não a modelos caixa-preta.
Por que B é a resposta correta
PDPs são ferramentas de explicabilidade. Respondem: "em média, o que 
acontece com a previsão quando esta variável muda?" Variam o valor de uma 
feature, mantendo as demais, e plotam a média das previsões. Aplicáveis 
inclusive a modelos caixa-preta (random forest, XGBoost, redes neurais), 
fundamentais para auditoria e governança em IA.
Encontro 5  — Explicabilidade
19 / 20


---
## Página 40

S I M U L A D O   •   P E R G U N T A  2 0  D E  2 0   •   E N C O N T R O  5
S E L E C I O N E  2  
R E S P O S T A S
Selecione DUAS afirmações CORRETAS sobre a família de instâncias AWS EC2 Trainium (Trn).
A
É a família otimizada para a fase de INFERÊNCIA de modelos já treinados.
B
Utiliza o chip AWS Trainium, projetado pela própria AWS.
C
É otimizada para cargas pesadas e prolongadas de APRENDIZADO de modelos de IA.
D
Foi desenhada principalmente para baixa latência em chatbots de produção.
E
Não é capaz de treinar modelos de deep learning de larga escala.
Encontro 5 
20 / 20


---
## Página 41

G A B A R I T O   •   P E R G U N T A  2 0  D E  2 0   •   E N C O N T R O  5
S E L E C I O N E  2  
R E S P O S T A S
A
A)
É a família otimizada para a fase de INFERÊNCIA de modelos já treinados.
✓
B)
Utiliza o chip AWS Trainium, projetado pela própria AWS.
✓
C)
É otimizada para cargas pesadas e prolongadas de APRENDIZADO de modelos de IA.
D
D)
Foi desenhada principalmente para baixa latência em chatbots de produção.
E
E)
Não é capaz de treinar modelos de deep learning de larga escala.
Por que B e C são as respostas corretas
Trainium usa o chip AWS Trainium projetado pela própria AWS (B) e é otimizada para 
cargas pesadas e prolongadas de treinamento de modelos de IA, incluindo deep 
learning de larga escala (C). Busca alto desempenho com custo competitivo no 
treinamento. As demais descrevem a Inferentia: inferência (A) e baixa latência em 
produção (D). A alternativa E é falsa, Trainium é justamente desenhada para treinar 
deep learning em larga escala. Regra: Trainium para aprender, Inferentia para servir.
Encontro 5
20 / 20


---
## Página 42

Fim do Simulado
Bons estudos para a AWS Certified AI Practitioner (AIF-C01)
20
Questões respondidas
05
Encontros revisados
Revise os pontos errados antes da próxima aula
