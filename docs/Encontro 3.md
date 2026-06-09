# Encontro 3.pdf

*Convertido automaticamente de PDF*


---
## Página 1

Técnicas de Machine Learning
• Regressão • Classificação • Clustering


---
## Página 2

V I S Ã O  G E R A L  D A  A U L A
Agenda
Visão geral
2 / 30
01
Fundamentos de Machine Learning
Conceito, contexto na nuvem e as três famílias de 
técnicas
02
Regressão
Regressão Linear  e  Árvores de Decisão
03
Classificação
Binária, Limiar (Intervalo) ,  Multiclasse ,   K-NN,  
XGBoost
04
Clustering
Aprendizado não-supervisionado e K-means


---
## Página 3

M Ó D U L O
01
Fundamentos de Machine 
Learning
Conceito


---
## Página 4

M Ó D U L O  1
•
C O N C E I T O  I N I C I A L
O que é Machine Learning?
Módulo 1 —Fundamentos de Machine Learnings
4 / 30
Definição
Aprendizado a partir de dados
Em vez de programar regras explícitas, o 
computador identifica padrões nos dados e 
aprende a tomar decisões.
Por que isso importa?
Permite resolver problemas onde escrever regras 
manualmente seria inviável: prever valores, 
classificar itens, agrupar perfis, recomendar 
conteúdo.
Fluxo conceitual
Dados históricos (entrada)
Modelo de ML (aprendizado)
Previsão / Decisão (saída)


---
## Página 5

M Ó D U L O  1
•
C O N C E I T O  I N I C I A L
Machine Learning no contexto da nuvem
Módulo 1 —Fundamentos de Machine Learnings
5 / 30
Escala sob demanda
A nuvem fornece recursos 
computacionais elásticos para treinar 
e executar modelos de ML.
Serviços gerenciados
Provedores oferecem ferramentas 
que simplificam o ciclo de vida dos 
modelos, do treino à produção.
Acesso democratizado
Profissionais não-cientistas-de-dados 
conseguem aplicar ML usando APIs e 
serviços prontos.


---
## Página 6

M Ó D U L O  1
•  C O N C E I T O  I N I C I A L
As três grandes famílias de técnicas
Módulo 1 —Fundamentos de Machine Learnings
6 / 30
01
Regressão
Pergunta: Quanto?
Prever um valor numérico contínuo (preço, temperatura, demanda).
• Regressão Linear  •  Árvores de Decisão
02
Classificação
Pergunta: Qual categoria?
Atribuir uma classe ou rótulo a uma observação.
• Binária •  Multiclasse  •  K-NN  •  XGBoost
03
Clustering
Pergunta: Quem se parece com quem?
Encontrar grupos naturais sem rótulos predefinidos.
• K-means


---
## Página 7

M Ó D U L O
02
Regressão
Prever valores numéricos contínuos
• Regressão Linear 
• Árvores de Decisão


---
## Página 8

M Ó D U L O  2
•
R e g r e s s ã o
O que é Regressão?
Módulo 2 —Regressão
8 / 30
Objetivo central
Prever um número, uma quantidade ou uma medida contínua.
Características
•
A saída é numérica, e não uma categoria.
•
O modelo aprende a relação entre variáveis de entrada e a 
variável-alvo.
•
Avaliação considera o quão próxima a previsão está do 
valor real.
Exemplos típicos
•
Preço de um imóvel a partir de área e 
localização
•
Demanda futura de um produto no varejo
•
Tempo estimado de entrega de um pedido
•
Consumo de energia em uma região


---
## Página 9

M Ó D U L O  2
•  R e g r e s s ã o
Regressão Linear
Módulo 2 —Regressão
9 / 30
0
10
20
30
40
50
60
70
0
1
2
3
4
5
6
7
8
9
Variável de entrada × Valor previsto
Observações
Reta de regressão
Ideia central
Traçar a melhor linha reta que descreve a relação entre uma variável de 
entrada e o valor a prever.
Como funciona
•
O modelo busca a reta que minimiza o erro entre as previsões e os 
valores reais.
•
Cada variável recebe um peso, indicando seu impacto na previsão.
•
A previsão final é uma combinação linear dessas variáveis.
Vantagens e limites
•
Simples, rápida e fácil de interpretar.
•
Funciona bem quando a relação entre as variáveis é 
aproximadamente linear.


---
## Página 10

M Ó D U L O  2
•
R e g r e s s ã o
Intuição: a reta que melhor descreve os dados
Módulo 2 —Regressão
10 / 30
Encontrar o padrão
Observar como a variável-alvo cresce ou 
decresce conforme a entrada.
Traçar a reta
Escolher a reta que passa o mais próximo 
possível de todos os pontos.
Usar para prever
Para um novo valor de entrada, ler na 
reta o valor numérico esperado.
Caso prático: prever o preço de imóveis
•
Entrada: área do imóvel em metros quadrados.
•
Saída prevista: preço estimado do imóvel.
•
A reta aprendida resume: quanto cada metro quadrado adiciona, em média, ao valor.


---
## Página 11

M Ó D U L O  2
•
R e g r e s s ã o
Árvores de Decisão
Módulo 2 —Regressão
11 / 30
Ideia central
Tomar decisões sucessivas em forma de perguntas, dividindo os 
dados em grupos cada vez mais homogêneos.
Estrutura da árvore
•
Cada nó interno representa uma pergunta sobre uma variável.
•
Cada ramo representa uma resposta possível.
•
Cada folha entrega uma previsão final (um valor numérico, no 
caso da regressão).
Por que é útil
•
Captura relações não-lineares e regras condicionais.
•
Resultado fácil de interpretar visualmente.
Área > 100m²?
Não
Sim
Bairro central?
Tem garagem?
R$ 250k
R$ 380k
R$ 520k
R$ 700k
Cada folha entrega uma previsão


---
## Página 12

M Ó D U L O  2
•
R e g r e s s ã o
Regressão Linear vs Árvores de Decisão
Módulo 2 —Regressão
12 / 30
Regressão Linear
•
Captura relações lineares.
•
Coeficientes fáceis de interpretar.
•
Treinamento rápido e estável.
•
Menos eficaz quando os dados têm padrões 
complexos ou condicionais.
Árvores de Decisão
•
Captura relações não-lineares e por regras.
•
Decisões em forma de árvore, fáceis de visualizar.
•
Lida bem com diferentes tipos de variáveis.
•
Pode se ajustar demais aos dados se for muito 
profunda.


---
## Página 13

M Ó D U L O
03
Classificação
Atribuir uma categoria a cada observação
• Binária  
• Limiar (Intervalo)  
• Multiclasse 
•  K-NN 
•  XGBoost


---
## Página 14

M Ó D U L O  3
•
D E F I N I Ç Ã O
O que é Classificação?
Módulo 3 — Classificação
14 / 30
Objetivo central
Atribuir um rótulo (uma categoria) a cada observação, com base em 
padrões aprendidos a partir de exemplos rotulados.
Diferença em relação à regressão
•
Regressão prevê números; classificação prevê categorias.
Tipos principais
•
Classificação Binária — apenas duas classes possíveis.
•
Classificação Multiclasse — três ou mais classes possíveis.
Exemplos típicos
•
Detectar se um e-mail é spam ou não 
(binária)
•
Aprovar ou negar uma transação como 
fraude
•
Identificar o tipo de produto em uma 
imagem (multiclasse)
•
Classificar o sentimento de um comentário


---
## Página 15

M Ó D U L O  3
•
T I P O  1
Classificação Binária
Módulo 3 — Classificação
15 / 30
Definição
O modelo precisa escolher entre apenas duas categorias possíveis.
Como o modelo decide
•
Calcula a probabilidade de a observação pertencer à classe positiva.
•
Compara essa probabilidade com um limiar de decisão.
•
Acima do limiar: classe positiva. Abaixo: classe negativa.
Exemplos práticos
•
Fraude / Não-fraude.
•
Spam / Não-spam.
•
Cliente irá cancelar? Sim ou não.
Duas classes possíveis
Classe A
Ex.: Fraude
OU
Classe B
Ex.: Não-fraude
Decisão final = uma e somente uma das duas opções.
O modelo aprende a fronteira que separa as duas classes.


---
## Página 16

M Ó D U L O  3
•   C O N C E I T O - C H A V E
Intervalo: o limiar de decisão
Módulo 3 — Classificação
16 / 30
O que é limiar (intervalo)
É o valor de probabilidade a partir do qual o modelo escolhe uma classe 
em vez da outra.
Por que ajustar esse intervalo
•
Limiar mais baixo: o modelo aceita mais casos como positivos (mais 
sensível).
•
Limiar mais alto: o modelo aceita menos casos como positivos (mais 
conservador).
Trade-off envolvido
•
Aumentar a sensibilidade pode gerar mais alarmes falsos.
•
Aumentar o rigor pode deixar passar casos importantes.
Probabilidade prevista pelo modelo
0.0
Limiar = 0.5
1.0
Classe Negativa
Classe Positiva
Mover o limiar muda o comportamento do modelo.
Limiar baixo
Mais sensível,
mais alarmes falsos
Limiar alto
Mais conservador,
pode perder casos


---
## Página 17

M Ó D U L O  3
•   T I P O  2
Classificação Multiclasse
Módulo 3 — Classificação
17 / 30
Definição
O modelo escolhe entre três ou mais categorias possíveis para cada 
observação.
Como o modelo decide
•
Calcula a probabilidade de cada classe possível.
•
Atribui a observação à classe com maior probabilidade.
Exemplos práticos
•
Categorizar tickets de suporte: financeiro, técnico, comercial.
•
Identificar o idioma de um texto.
•
Reconhecer o tipo de objeto em uma imagem.
Probabilidade por classe
Categoria A
65%
Categoria B
20%
Categoria C
10%
Categoria D
5%
O modelo escolhe a classe com maior probabilidade.


---
## Página 18

M Ó D U L O  3
•   A L G O R I T M O  1
K-NN (K-Nearest Neighbors)
Módulo 3 — Classificação
18 / 30
Ideia central
Para classificar uma nova observação, o modelo olha quais são os K 
vizinhos mais próximos no conjunto de exemplos conhecidos.
Como funciona
•
Calcula a distância entre o novo ponto e os pontos já rotulados.
•
Seleciona os K pontos mais próximos.
•
Atribui ao novo ponto a classe mais frequente entre esses vizinhos.
Características
•
Algoritmo simples e intuitivo.
•
Não exige treinamento prévio elaborado.
•
Pode ficar lento com volumes grandes de dados.
Quem está mais perto do novo ponto?
?
Classe A
Classe B
Novo ponto


---
## Página 19

M Ó D U L O  3
K - N N
A escolha do K importa
Módulo 3 — Classificação
19 / 30
K muito pequeno
O modelo se torna sensível a ruído: 
pequenas variações nos vizinhos 
podem mudar a decisão.
K muito grande
O modelo perde sensibilidade local e 
tende a sempre prever a classe 
majoritária.
03
K bem ajustado
Equilíbrio entre captar a vizinhança 
imediata e ignorar pontos isolados 
que não representam o padrão.
02
01


---
## Página 20

M Ó D U L O  3
•   A L G O R I T M O  2
XGBoost
Módulo 3 — Classificação
20 / 30
Ideia central
Combinar várias árvores de decisão simples, em sequência, para construir 
um modelo final mais forte.
Como funciona
•
Treina uma árvore inicial e observa onde ela erra.
•
A próxima árvore foca em corrigir esses erros.
•
O processo se repete, somando o conhecimento de várias árvores.
Por que é tão usado
•
Alta precisão em problemas tabulares.
•
Lida bem com diferentes tipos de variáveis.
•
Bom desempenho mesmo com volumes consideráveis de dados.
Aprendizado em sequência
Árvore 1
Árvore 2
Árvore 3
Modelo
Cada nova árvore é treinada para corrigir os erros 
das anteriores.
O modelo final combina o conhecimento de todas 
elas.


---
## Página 21

M Ó D U L O  3
•   X G B O O S T
Por que é referência em problemas de classificação
Módulo 3 — Classificação
21 / 30
Aprendizado por correção
Cada árvore foca exatamente nos erros cometidos 
pelas anteriores.
Modelo final mais robusto
A combinação das árvores produz uma decisão mais 
estável e precisa.
Versátil
Funciona tanto em classificação binária quanto 
multiclasse e também em regressão.
Padrão de mercado
Muito usado em competições de ciência de dados e 
em soluções de produção.


---
## Página 22

M Ó D U L O  3   •   X G B O O S T
Ranking — aprendendo a ordenar
Ideia central
Em vez de prever uma classe ou um valor, o modelo aprende a ordenar 
itens por relevância dentro de um grupo.
Como aprende
Durante o treino, o XGBoost compara pares de itens do mesmo grupo. 
O item mais relevante deve receber pontuação maior e o modelo é 
ajustado para que isso aconteça.
Onde se aplica
Buscadores, sistemas de recomendação, ranking de produtos em 
e-commerce e priorização de leads em CRMs.
Ordenação por relevância
Busca:  “tênis para corrida”
#1
Tênis de corrida
9.2
#2
Tênis esportivo
7.5
#3
Tênis casual
5.1
#4
Sandália
2.3
O modelo aprende a colocar os itens mais relevantes no topo.
Módulo 3 — Classificação
22 / 30


---
## Página 23

M Ó D U L O
04
Clustering
Encontrar grupos naturais nos dados
K-means


---
## Página 24

M Ó D U L O  4
•   D E F I N I Ç Ã O
O que é Clustering?
Módulo 4 — Clustering
24 / 30
Objetivo central
Agrupar observações que se parecem, sem dispor de rótulos previamente 
definidos.
Diferença em relação ás técnicas anteriores
•
Não há um valor-alvo para o modelo aprender a prever.
•
O algoritmo descobre, sozinho, quais observações pertencem ao 
mesmo grupo.
Pergunta que responde
Quem se parece com quem dentro deste conjunto de dados?
Aplicações típicas
•
Segmentar clientes por comportamento de 
compra
•
Agrupar usuários com perfis de uso 
semelhantes
•
Identificar grupos de produtos com 
características parecidas
•
Detectar padrões anômalos em logs ou 
tráfego


---
## Página 25

M Ó D U L O  4
• C l u s t e r i n g
K-means
Módulo 4 — Clustering
25 / 30
Ideia central
Dividir os dados em K grupos, de forma que pontos dentro do mesmo 
grupo sejam parecidos entre si e diferentes dos demais grupos.
Conceito de centróide
•
Cada grupo é representado por um ponto central, chamado 
centróide.
•
Cada observação é atribuída ao centróide mais próximo.
O papel do K
•
K define quantos grupos o algoritmo deve formar.
•
É uma escolha do analista e influencia diretamente o resultado.
Três grupos descobertos automaticamente
×
×
×
× = centróide do grupo


---
## Página 26

M Ó D U L O  4
• C l u s t e r i n g
Como o algoritmo funciona
Módulo 4 — Clustering
26 / 30
01
02
03
04
05
Definir K
O analista escolhe quantos grupos o algoritmo deve formar.
Posições iniciais
K centróides são posicionados, inicialmente, em locais quaisquer dos dados.
Atribuir pontos
Cada observação é associada ao centróide mais próximo, formando um grupo.
Atualizar centróides
Cada centróide é recalculado para representar o centro do seu grupo atual.
Repetir até estabilizar
Os passos 3 e 4 se repetem até que os grupos não mudem mais.


---
## Página 27

K - M E A N S
Aplicações e cuidados
Aplicações típicas
•
Segmentação de clientes em perfis comportamentais.
•
Agrupamento de produtos por características.
•
Identificação de regiões com padrões similares.
•
Análise exploratória inicial de grandes volumes de 
dados.
Pontos de atenção
•
A escolha do K influencia muito o resultado.
•
Funciona melhor com grupos de formato regular.
•
É sensível à escala das variáveis (preparação dos 
dados é importante).
•
Os grupos descobertos precisam ser interpretados 
pelo analista.
Técnicas de Machine Learning
27 / 30


---
## Página 28

E N C E R R A M E N T O
Visão comparativa das técnicas
Módulo 3 — Clustering
28 / 30
Família
Saída prevista
Tipo de aprendizado
Técnicas vistas
Regressão
Valor numérico contínuo
Supervisionado
Regressão Linear, Árvores de Decisão
Classificação
Categoria (rótulo)
Supervisionado
Binária, Multiclasse, K-NN, XGBoost
Clustering
Grupo descoberto
Não-supervisionado
K-means


---
## Página 29

E N C E R R A M E N T O
Como escolher a técnica adequada
Módulo 3 — Clustering
29 / 30
Preciso prever um valor numérico?
Use Regressão.
Linear (relação simples) ou Árvores (relações 
condicionais).
Preciso atribuir uma categoria?
Use Classificação.
K-NN (problema simples) ou XGBoost (alta precisão 
em dados tabulares).
Não tenho rótulos e quero descobrir grupos?
Use Clustering.
K-means para encontrar segmentos naturais nos 
dados.


---
## Página 30

E N C E R R A M E N T O
Principais aprendizados da aula
Módulo 3 — Clustering
30 / 30
1
ML é aprendizado a partir de dados
Em vez de regras, padrões. A nuvem oferece a infraestrutura para isso em escala.
2
Três famílias resolvem três perguntas distintas
Quanto? (Regressão), qual categoria? (Classificação), quem se parece com quem? (Clustering).
3
A escolha da técnica depende do problema
Tipo da saída desejada, presença ou não de rótulos e complexidade dos padrões nos dados.
4
Conceitos antes de ferramentas
Compreender o raciocínio das técnicas é a base para usar bem qualquer serviço de ML em nuvem.
