# Encontro 5.pdf

*Convertido automaticamente de PDF*


---
## Página 1

Avaliação de Modelos de IA:
Infraestrutura de Treinamento e Inferência 
na AWS
MSE  ·  RMSE  ·  R²  ·  PDPs  ·  EC2 Trainium (Trn)  ·  EC2 Inferentia (Inf)


---
## Página 2

V I S Ã O  G E R A L  D A  A U L A
Agenda
Visão geral
2 / 34
01
Por que avaliar um modelo de IA?
Contexto e motivação para o uso de métricas.
02
MSE  —  Mean Squared Error
Conceito, fórmula e características da métrica.
03
RMSE  — Root Mean Squared Error
Relação com o MSE e ganho de interpretabilidade.
05
PDPs  — Partial Dependence Plots
Explicabilidade: entendendo o efeito das variáveis.
06
EC2 Trainium e Inferentia
Infraestrutura AWS para treinar e inferir.
04
R²  — Coeficiente de Determinação
Quanto da variância o modelo explica.


---
## Página 3

M Ó D U L O
01
Por que avaliar um modelo 
de IA?
Contexto e motivação para o uso de métricas em IA.


---
## Página 4

M Ó D U L O  1
•
F U N D A M E N T O
Por que avaliar um modelo de IA?
Módulo 1 — FUNDAMENTO
4 / 34
Definição
▪
Modelo treinado não significa modelo confiável
▪
Precisamos medir o quanto o modelo erra e o quanto acerta
▪
Métricas tornam a qualidade do modelo objetiva e comparável
▪
Permitem comparar diferentes algoritmos sobre os mesmos dados
▪
Apoiam decisões de negócio baseadas em evidências numéricas
Métricas são o vocabulário comum entre quem treina o modelo e quem decide pelo negócio.


---
## Página 5

M Ó D U L O  1
•
F U N D A M E N T O
O conceito de erro em modelos preditivos
Módulo 1 — FUNDAMENTO
5 / 34
Definição
▪
Em modelos de regressão, o modelo prevê um valor numérico
▪
Erro é a diferença entre o valor previsto e o valor real
▪
Cada previsão gera um erro individual (positivo ou negativo)
▪
O conjunto dos erros precisa ser resumido em uma única métrica
▪
MSE, RMSE e R² são formas diferentes de resumir esses erros
Erro = Previsto − Real
Resumir o conjunto
de erros é o papel
das métricas


---
## Página 6

M Ó D U L O
02
MSE  — Mean Squared 
Error
Conceito, fórmula e características da métrica.


---
## Página 7

M Ó D U L O  2
•
M S E
Mean Squared Error  —  Erro Quadrático Médio
Módulo 2 — MSE
7 / 34
Definição
▪
Em modelos de regressão, o modelo prevê um valor numérico
▪
Erro é a diferença entre o valor previsto e o valor real
▪
Cada previsão gera um erro individual (positivo ou negativo)
▪
O conjunto dos erros precisa ser resumido em uma única métrica
▪
MSE, RMSE e R² são formas diferentes de resumir esses erros
MSE  =  média dos  ( valor previsto  −  valor real )²


---
## Página 8

M Ó D U L O  2
•
M S E
O que esperar dessa métrica
Módulo 2 — MSE
8 / 34
Sempre positivo
O quadrado elimina sinais, quanto menor, melhor o 
modelo.
Sensível a outliers
Erros grandes ganham peso desproporcional ao serem 
elevados ao quadrado.
Unidade ao quadrado
O resultado não está na mesma unidade da variável 
original.
Comparações entre modelos
Ideal para comparar modelos avaliados no mesmo 
conjunto de dados.


---
## Página 9

M Ó D U L O
03
RMSE  — Root Mean 
Squared Error
Relação com o MSE e ganho de interpretabilidade.


---
## Página 10

M Ó D U L O  3
•
R M S E
Root Mean Squared Error  —  Raiz do Erro Quadrático Médio
Módulo 3 — RMSE
10 / 34
Definição
▪
Derivada diretamente do MSE
▪
É simplesmente a raiz quadrada do MSE
▪
Volta o resultado para a unidade original dos dados
▪
Mais fácil de interpretar do que o MSE puro
▪
Também penaliza erros grandes, mas em escala interpretável
RMSE  =  raiz quadrada de ( MSE )


---
## Página 11

M Ó D U L O  3
•
R M S E
Como ler o valor do RMSE
Módulo 3 — RMSE
11 / 34
Definição
▪
Pode ser lido como o erro médio típico do modelo
▪
Está na mesma unidade da variável que se quer prever
▪
Ex.: prevendo preço em reais, o RMSE também está em reais
▪
Quanto menor o RMSE, mais próximo o modelo está dos valores reais
▪
Continua sensível a outliers, herdando essa propriedade do MSE
L E I T U R A  I N T U I T I V A
"Em média, o modelo erra cerca de X 
unidades em relação ao valor real."


---
## Página 12

M Ó D U L O  3
•
R M S E
MSE  vs.  RMSE
Módulo 3 — RMSE
12 / 34
MSE
•
Erros elevados ao quadrado
•
Unidade ao quadrado (não interpretável)
•
Penaliza fortemente erros grandes
•
Útil em otimização matemática
RMSE
•
Raiz quadrada do MSE
•
Mesma unidade dos dados originais
•
Mais intuitivo para comunicação
•
Preferido em relatórios e apresentações
MSE e RMSE contam a mesma história — o RMSE apenas a conta na unidade dos dados.


---
## Página 13

M Ó D U L O
04
R²  — Coeficiente de 
Determinação
Quanto da variância o modelo explica.


---
## Página 14

M Ó D U L O  4
•
R ²   —
C o e f i c i e n t e  d e  D e t e r m i n a ç ã o
Como ler o valor do RMSE
Módulo 4 — R²  — Coeficiente de Determinação
14 / 34
Definição
▪
Métrica que mede a qualidade do ajuste de um modelo
▪
Indica quanto da variância dos dados é explicada pelo modelo
▪
Não mede o erro em si, mas o poder explicativo
▪
Costuma ser apresentada em escala de 0 a 1 (ou em porcentagem)
▪
Complementa o MSE/RMSE com uma visão proporcional
R²  =  fração da variabilidade dos dados que o modelo consegue explicar


---
## Página 15

M Ó D U L O  4
•
R ²   —
C o e f i c i e n t e  d e  D e t e r m i n a ç ã o
Como ler o valor do R-squared
Módulo 4 — R²  — Coeficiente de Determinação
15 / 34
1
Modelo perfeito
Explica toda a variabilidade dos dados.
0
Não explica nada
Equivale a prever sempre a média dos 
valores reais.
< 0
Pior que a média
Modelo é menos útil do que 
simplesmente usar a média.
•
Quanto mais próximo de 1, mais o modelo se aproxima dos dados reais
•
Valores intermediários indicam que parte da variação não é explicada


---
## Página 16

M Ó D U L O  4
•
R ²   —
L i m i t a ç õ e s
Cuidados ao usar o R²
Módulo 4 — R²  — Coeficiente de Determinação
16 / 34
Definição
▪
R² alto não garante que o modelo seja bom em produção
▪
Pode ser inflado artificialmente ao adicionar muitas variáveis
▪
Não substitui o MSE/RMSE fornece uma visão complementar
▪
Avalia apenas o ajuste, não avalia generalização
▪
Deve ser analisado sempre junto de outras métricas e validações
Boa prática: combinar R² com RMSE para avaliar tanto a qualidade do ajuste quanto a magnitude do erro.


---
## Página 17

S Í N T E S E
MSE, RMSE e R² lado a lado
SÍNTESE
17 / 34
Métrica
O que mede
Unidade
Sensível a 
outliers?
Ideal para
MSE
Média do erro ao quadrado
Ao quadrado
Sim
Otimização do modelo
RMSE
Raiz do MSE
Mesma da variável
Sim
Comunicação do erro
R²
Variância explicada pelo modelo
Adimensional (0 a 1)
Indiretamente
Avaliar poder explicativo
Boa prática profissional: relatar sempre RMSE e R² em conjunto para uma avaliação equilibrada.


---
## Página 18

M Ó D U L O
05
PDPs  — Partial 
Dependence Plots
Métricas dizem o quanto o modelo erra.
PDPs ajudam a entender o porquê.


---
## Página 19

M Ó D U L O  5
•
P a r t i a l  D e p e n d e n c e  P l o t s
Partial Dependence Plots  —  Gráficos de Dependência Parcial
Módulo 5 — PDPs
19 / 34
Definição
▪
Ferramenta de explicabilidade de modelos de IA
▪
Mostram a relação entre uma variável e as previsões do modelo
▪
Ajudam a responder: "como esta variável influencia a previsão?"
▪
Aplicáveis a modelos complexos, inclusive caixa-preta
▪
Apresentadas em forma de gráfico, fáceis de comunicar
PDP responde:  "em média, o que acontece com a previsão quando esta variável muda?"


---
## Página 20

M Ó D U L O  5
•
C O M O  F U N C I O N A M
A ideia conceitual por trás do gráfico
Módulo 5 — PDPs
20 / 34
1
Escolher uma variável
Selecionamos uma feature de 
interesse para analisar.
2
Variar seus valores
Geramos previsões para diferentes 
valores dessa variável, mantendo as 
demais.
3
Plotar a média
Calculamos a média das previsões e 
desenhamos a curva resultante.
Resultado: uma curva que mostra, em média, o efeito daquela variável na previsão do modelo.


---
## Página 21

M Ó D U L O  5
•
I N T E R P R E T A Ç Ã O
A ideia conceitual por trás do gráfico
Módulo 5 — PDPs
21 / 34
Definição
▪
Eixo X: valores da variável escolhida
▪
Eixo Y: efeito médio dessa variável na previsão do modelo
▪
Curva crescente: aumentar a variável tende a aumentar a previsão
▪
Curva decrescente: aumentar a variável tende a diminuir a previsão
▪
Curva plana: a variável tem pouco ou nenhum efeito médio
▪
Curvas não lineares revelam efeitos mais complexos
F o rm a  d a  c u r va
Crescente
Decrescente
Plana (sem efeito)


---
## Página 22

M Ó D U L O  5
•
A P L I C A Ç Õ E S
Por que e quando usar
Módulo 5 — PDPs
22 / 34
Explicabilidade
Tornar previsões compreensíveis para humanos.
Diagnóstico do modelo
Detectar comportamentos inesperados ou enviesados.
Comunicação técnica
Apresentar resultados a áreas de negócio sem jargão.
Conformidade
Apoiar requisitos de auditoria e governança em IA.


---
## Página 23

M Ó D U L O
06
EC2 Trainium e Inferentia
Para treinar e usar modelos em escala, escolhemos a infraestrutura 
certa na nuvem.
Na AWS, isso passa pelas famílias de instâncias EC2.


---
## Página 24

M Ó D U L O  6
•
E C 2  T r a i n i u m  e  I n f e r e n t i a
Famílias de instâncias e seu propósito
Módulo 6 — EC2 Trainium e Inferentia
24 / 34
Definição
▪
Amazon EC2 oferece servidores virtuais sob demanda
▪
Instâncias são organizadas em famílias com propósitos distintos
▪
Cada família é otimizada para um tipo de carga de trabalho
▪
Para IA, duas famílias merecem destaque:
▪
Trainium (Trn) — voltada ao treinamento de modelos
▪
Inferentia (Inf) — voltada à inferência (uso) dos modelos


---
## Página 25

M Ó D U L O  6
•
E C 2  T r a i n i u m  e  I n f e r e n t i a
Instâncias voltadas ao treinamento de IA
Módulo 6 — EC2 Trainium e Inferentia
25 / 34
Definição
▪
Família de instâncias EC2 desenhada para treinamento de modelos de IA
▪
Utiliza o chip AWS Trainium, projetado pela própria AWS
▪
Otimizada para cargas pesadas e prolongadas de aprendizado
▪
Voltada para treinar modelos de larga escala, inclusive deep learning
▪
Busca alto desempenho com custo competitivo no treinamento
Trainium = treinar.  É a infraestrutura que suporta a fase de aprendizado dos modelos.


---
## Página 26

M Ó D U L O  6
•
E C 2  T r a i n i u m  e  I n f e r e n t i a
Cenários típicos de aplicação
Módulo 6 — EC2 Trainium e Inferentia
26 / 34
Modelos de larga escala
Treinamento de redes neurais profundas com grande 
volume de dados.
Cargas intensivas
Workloads que exigem muito poder de cálculo durante o 
aprendizado.
Custo de treinamento
Alternativa para reduzir custo em ciclos longos de 
treinamento.
Cenários de deep learning
Aplicações como visão computacional, NLP e modelos 
generativos.


---
## Página 27

M Ó D U L O  6
•
E C 2  T r a i n i u m  e  I n f e r e n t i a
Instâncias voltadas à inferência de IA
Módulo 6 — EC2 Trainium e Inferentia
27 / 34
Definição
▪
Família de instâncias EC2 desenhada para inferência de modelos de IA
▪
Inferência = usar um modelo já treinado para gerar previsões
▪
Utiliza o chip AWS Inferentia, projetado pela própria AWS
▪
Otimizada para baixa latência e alto volume de previsões
▪
Busca custo por inferência reduzido em produção
Inferentia = inferir.  É a infraestrutura que suporta o uso do modelo já pronto.


---
## Página 28

M Ó D U L O  6
•
E C 2  T r a i n i u m  e  I n f e r e n t i a
Cenários típicos de aplicação
Módulo 6 — EC2 Trainium e Inferentia
28 / 34
Aplicações em produção
Servir previsões para usuários finais ou sistemas em tempo 
real.
Alto volume
Cargas com milhares ou milhões de inferências por dia.
Custo por inferência
Quando o objetivo é reduzir custo unitário de cada 
previsão.
Latência reduzida
APIs de IA, chatbots e cenários sensíveis ao tempo de 
resposta.


---
## Página 29

M Ó D U L O  6
•
E C 2  T r a i n i u m  e  I n f e r e n t i a
Trainium  vs.  Inferentia
Módulo 6 — EC2 Trainium e Inferentia
29 / 34
TRAINIUM (Trn)
•
Foco em treinar modelos
•
Cargas longas e intensivas
•
Chip AWS Trainium
•
Otimizada para deep learning
•
Custo competitivo no treinamento
INFERENTIA (Inf)
•
Foco em inferência (uso)
•
Alto volume de previsões
•
Chip AWS Inferentia
•
Otimizada para baixa latência
•
Custo por inferência reduzido
Regra prática: Trainium para a fase de aprender; Inferentia para a fase de servir.


---
## Página 30

E N C E R R A M E N T O
Principais aprendizados da aula
Módulo 3 — Clustering
30 / 34
1
MSE e RMSE medem o erro do modelo; o RMSE é mais interpretável
2
R² mede o poder explicativo do modelo, complementando o erro
3
PDPs traduzem o comportamento do modelo em curvas explicáveis
4
Trainium é a infraestrutura AWS otimizada para treinar modelos
Inferentia é a infraestrutura AWS otimizada para servir modelos


---
## Página 31

P e r g u n t a 1
Pergunta
31 / 34
(A) Amazon EC2 série C
(B) Amazon EC2 série P 
(C) Amazon EC2 série Trn
(D) Amazon EC2 série G
Uma instituição acadêmica deseja desenvolver seu próprio modelo de linguagem avançado (LLM) utilizando 
exclusivamente dados internos de pesquisa. A instituição está focada em reduzir o impacto ambiental durante o 
processo de treinamento. Qual tipo de instância Amazon EC2 é mais indicada para minimizar esse impacto?


---
## Página 32

P e r g u n t a 1
Pergunta
32 / 34
(A) Amazon EC2 série C
(B) Amazon EC2 série P 
(C) Amazon EC2 série Trn
(D) Amazon EC2 série G
Uma instituição acadêmica deseja desenvolver seu próprio modelo de linguagem avançado (LLM) utilizando 
exclusivamente dados internos de pesquisa. A instituição está focada em reduzir o impacto ambiental durante o 
processo de treinamento. Qual tipo de instância Amazon EC2 é mais indicada para minimizar esse impacto?


---
## Página 33

P e r g u n t a 1
Pergunta
33 / 34
(A) Código para treinamento de modelo 
(B) Gráficos de dependência parcial (PDPs)
(C) Dados de amostra para treinamento
(D) Tabelas de convergência de modelo
Uma universidade utiliza modelos de Machine Learning para prever a taxa de evasão dos estudantes ao final de 
cada semestre. Um analista de dados está elaborando um relatório sobre os modelos desenvolvidos com o 
objetivo de garantir transparência e explicabilidade para os coordenadores acadêmicos. O que o analista deve 
apresentar no relatório para atender às exigências de transparência e explicabilidade?


---
## Página 34

P e r g u n t a 1
Pergunta
34 / 34
(A) Código para treinamento de modelo 
(B) Gráficos de dependência parcial (PDPs)
(C) Dados de amostra para treinamento
(D) Tabelas de convergência de modelo
Uma universidade utiliza modelos de Machine Learning para prever a taxa de evasão dos estudantes ao final de 
cada semestre. Um analista de dados está elaborando um relatório sobre os modelos desenvolvidos com o 
objetivo de garantir transparência e explicabilidade para os coordenadores acadêmicos. O que o analista deve 
apresentar no relatório para atender às exigências de transparência e explicabilidade?
