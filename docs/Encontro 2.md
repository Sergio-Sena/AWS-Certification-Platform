# Encontro 2.pdf

*Convertido automaticamente de PDF*


---
## Página 1

Embeddings, Dados e 
Aprendizado de Máquina


---
## Página 2

V I S Ã O  G E R A L  D A  A U L A
Agenda
Visão geral
1 / 49
01
Embeddings
Conceito, modelos de texto, imagem, multimodal e 
geração multimodal
02
Processamento de texto
Tokenização, bag-of-words, frequência, janela de 
contexto e intervalo
03
Tipos de dados
Dados estruturados versus dados não estruturados
05
Rotulagem de dados
Dados rotulados, SageMaker Ground Truth e 
Mechanical Turk
06
Tipos de aprendizado de máquina
Supervisionado, não supervisionado, reforço, federado 
e por transferência
04
Bancos de dados de vetores
Conceito e Aurora PostgreSQL com pgvector


---
## Página 3

M Ó D U L O
01
Embeddings
Como máquinas convertem palavras, imagens e conceitos em 
representações numéricas que podem ser comparadas, agrupadas 
e pesquisadas.


---
## Página 4

M Ó D U L O  1
•
E M B E D D I N G S
O que são embeddings
Módulo 1 —Embeddings
4 / 49
Definição
■
Representação numérica de um dado em um espaço 
vetorial.
■
Convertem texto, imagem ou áudio em vetores de números.
■
Conceitos semelhantes ficam próximos no espaço vetorial.
■
Conceitos diferentes ficam distantes uns dos outros.
■
Permitem comparações por similaridade entre os dados.
■
Base de busca semântica, recomendação e RAG.
E S P A Ç O  V E T O R I A L  —
V I S Ã O  C O N C E I T U A L
gato
cão
leão
carro
moto
caminhão
Conceitos semelhantes formam vizinhanças.


---
## Página 5

M Ó D U L O  1
•
E M B E D D I N G S
Modelo de embedding de texto
Módulo 1 —Embeddings
5 / 49
Definição
Texto → Vetor
■
Recebe palavras, frases ou documentos como entrada.
■
Gera um vetor numérico que representa o significado do texto.
■
Captura sinônimos, contexto e relações semânticas.
■
Usado em busca semântica, classificação e clustering.
■
Base de mecanismos de RAG (Retrieval-Augmented Generation).
E X E M P L O
"banco financeiro"  →  [0.21, -0.45, 0.88, 0.13, ...]   (vetor com centenas de dimensões)


---
## Página 6

M Ó D U L O  1
•
E M B E D D I N G S
Modelo de embedding de imagem
Módulo 1 —Embeddings
6 / 49
Definição
■
Recebe imagens como entrada (pixels, formas, cores).
■
Gera um vetor que representa características visuais.
■
Identifica padrões: objetos, texturas, composição.
■
Permite buscar imagens similares por conteúdo visual.
■
Aplicado em catálogos, moderação e visão computacional.
E X E M P L O
→  [0.62, 0.05, -0.31, 0.74, ...]   (representa o conteúdo visual)
Imagem → Vetor


---
## Página 7

M Ó D U L O  1
•
E M B E D D I N G S
Modelo de embedding multimodal
Módulo 1 —Embeddings
7 / 49
Definição
Vários tipos
em um só espaço
■
Processa diferentes tipos de dados (texto, imagem, áudio).
■
Coloca todas as modalidades em um mesmo espaço vetorial.
■
Permite comparar texto com imagem (e vice-versa).
■
Base de buscas como “encontre a imagem que combine com este texto”.
■
Útil para legendagem, busca cruzada e classificação multimodal.
E X E M P L O
texto "praia ao pôr do sol"  e
→  vetores próximos no mesmo espaço
Texto "praia ao pôr do sol"  →  [0.81, 0.12, -0.44, 0.67, ...]
Foto de praia ao pôr do sol  →  [0.79, 0.15, -0.41, 0.69, ...]
↑ Os números são parecidos!


---
## Página 8

M Ó D U L O  1
•
E M B E D D I N G S
Modelo de geração multimodal
Módulo 1 —Embeddings
8 / 49
Definição
Entrada de um tipo,
saída de outro
■
Recebe uma modalidade e gera saída em outra modalidade.
■
Texto pode virar imagem, áudio ou vídeo (e o inverso).
■
Combina compreensão multimodal com geração de conteúdo.
■
Aplicações: descrição de imagens, geração de imagens a partir de texto, legendagem 
automática.
■
Não apenas representa: também produz novos conteúdos.
D I F E R E N Ç A - C H A V E
Embedding multimodal compara conteúdos. Geração multimodal cria conteúdos novos.


---
## Página 9

M Ó D U L O  1
•
E M B E D D I N G S
Comparativo entre os modelos
Módulo 1 —Embeddings
9 / 49
Embedding de Texto
Converte palavras e frases em vetores de significado. Permite busca 
semântica e classificação.
Embedding de Imagem
Converte imagens em vetores de características visuais. Permite busca 
por similaridade visual.
Embedding Multimodal
Coloca texto e imagem no mesmo espaço. Permite comparar 
modalidades diferentes entre si.
Geração Multimodal
Cria saída em uma modalidade a partir de outra. Texto vira imagem, 
imagem vira descrição.


---
## Página 10

M Ó D U L O
02
Processamento de texto
Antes do embedding, o texto precisa ser quebrado, contado e 
organizado. Aqui estão os blocos básicos que sustentam qualquer 
modelo de linguagem.


---
## Página 11

M Ó D U L O  2
•
P R O C E S S A M E N T O  D E  T E X T O
Tokenização
Módulo 2 — Processamento de texto
11 / 49
Definição
■
Processo de quebrar o texto em unidades menores chamadas 
tokens.
■
Um token pode ser uma palavra, parte de palavra ou caractere.
■
É a primeira etapa do processamento de linguagem natural.
■
Permite que o modelo trabalhe com unidades padronizadas.
■
A forma de tokenizar influencia diretamente o resultado do 
modelo.
E X E M P L O
"O gato dorme na cama"
↓  T O K E N I Z A Ç Ã O   ↓
O
gato
dorme
na
cama
Cada peça é um token a ser convertido em vetor.


---
## Página 12

M Ó D U L O  2
•
P R O C E S S A M E N T O  D E  T E X T O
Bag-of-words
Módulo 2— Processamento de texto
12 / 49
Definição
■
Técnica clássica de representação de texto.
■
Considera apenas quais palavras aparecem e quantas vezes.
■
Ignora a ordem das palavras dentro do texto.
■
Cada documento vira um vetor de contagens de palavras.
■
Simples e útil, mas perde nuances de significado e contexto.
Palavra
Frequência
gato
2
cama
1
dorme
1
casa
1
Texto: "o gato dorme na cama, o gato adora a casa"


---
## Página 13

M Ó D U L O  2
•
P R O C E S S A M E N T O  D E  T E X T O
Contagem de frequência
Módulo 2 — Processamento de texto
13 / 49
Definição
■
Mede quantas vezes cada palavra aparece em um texto ou 
conjunto.
■
Palavras frequentes podem indicar o tema central do 
documento.
■
Palavras raras podem ser muito informativas em buscas.
■
Usada como base de bag-of-words e variações como TF-IDF.
■
Ajuda a transformar texto em algo numérico e comparável.
F R E Q U Ê N C I A  P O R  P A L A V R A
modelo
5
dados
4
treina
3
vetor
2
regra
1


---
## Página 14

M Ó D U L O  2
•
P R O C E S S A M E N T O  D E  T E X T O
Janela de contexto
Módulo 2 — Processamento de texto
14 / 49
Definição
■
Quantidade máxima de tokens que o modelo consegue ver de 
uma vez.
■
Inclui tanto a entrada do usuário quanto a resposta do modelo.
■
Janela maior permite analisar documentos mais longos.
■
Janela maior também aumenta o custo de processamento.
■
Limitar o contexto certo é decisão de arquitetura da solução.
J A N E L A  D E  C O N T E X T O
entrada + saída cabem aqui dentro
Tokens excedentes são descartados ou truncados:
× fora da janela
Pense na janela como o tamanho da memória de curto prazo do 
modelo.


---
## Página 15

M Ó D U L O  2
•
P R O C E S S A M E N T O  D E  T E X T O
Intervalo
Módulo 2 — Processamento de texto
15 / 49
Definição
■
Recorte de texto com início e fim definidos dentro de um 
documento.
■
Permite trabalhar com partes específicas, sem processar tudo.
■
Útil quando o documento é maior do que a janela de contexto.
■
Cada intervalo (chunk) pode ser indexado e buscado 
separadamente.
■
Estratégia central em pipelines de RAG e busca semântica.
D O C U M E N T O   →  I N T E R V A L O S
Documento longo
Intervalo 1
Intervalo 2
Intervalo 3


---
## Página 16

M Ó D U L O
03
Tipos de dados
A natureza dos dados determina como eles devem ser 
armazenados, processados e consumidos por modelos de IA.


---
## Página 17

M Ó D U L O  3
•
T I P O S  D E  D A D O S
Estruturados vs não estruturados
Módulo 3 — TIPOS DE DADOS
17 / 49
D A D O S  E S T R U T U R A D O S
■
Organizados em linhas e colunas (tabelas).
■
Esquema fixo e bem definido.
■
Fáceis de consultar com SQL.
■
Exemplos: planilhas, bancos relacionais.
■
Fáceis de validar e auditar.
D A D O S  N Ã O  E S T R U T U R A D O S
■
Sem formato tabular pré-definido.
■
Texto livre, imagens, áudio, vídeo, e-mails.
■
Maioria dos dados gerados hoje no mundo.
■
Difíceis de consultar com SQL tradicional.
■
Exigem técnicas como embeddings para análise.


---
## Página 18

M Ó D U L O  3
•
T I P O S  D E  D A D O S
Por que isso importa para IA
Módulo 3 — TIPOS DE DADOS
18 / 49
Onde guardar
Estruturados vão para bancos relacionais. Não estruturados vão 
para data lakes e armazenamento de objetos.
Como buscar
Estruturados aceitam SQL. Não estruturados precisam de busca 
semântica via embeddings.
Como modelar
Modelos clássicos preferem dados estruturados. Modelos de IA 
generativa lidam bem com não estruturados.
Como processar
Pré-processamento e limpeza são mais simples no estruturado, 
mais sofisticados no não estruturado.


---
## Página 19

M Ó D U L O
04
Bancos de dados de 
vetores
Onde os embeddings são guardados, indexados e pesquisados em 
grande escala.


---
## Página 20

M Ó D U L O  4
•
B A N C O S  D E  V E T O R E S
Bancos de dados de vetores
Módulo 4 — BANCOS DE VETORES
20 / 49
Definição
■
Bancos especializados em armazenar embeddings.
■
Indexam vetores para busca eficiente em grande volume.
■
Permitem encontrar os vetores mais similares a uma consulta.
■
Base de busca semântica, recomendação e RAG.
■
Comparam vetores por proximidade no espaço vetorial.
■
Diferem dos bancos relacionais clássicos no tipo de consulta.
C O N S U L T A  P O R  S I M I L A R I D A D E
Consulta
Retorna os vetores mais próximos da consulta.


---
## Página 21

M Ó D U L O  4
•
B A N C O S  D E  V E T O R E S
Aurora PostgreSQL com pgvector
Módulo 4 — BANCOS DE VETORES
21 / 49
Definição
■
Aurora PostgreSQL é o banco relacional gerenciado da AWS.
■
A extensão pgvector adiciona suporte a tipos vetoriais.
■
Permite armazenar embeddings em colunas do banco.
■
Consulta vetores por similaridade usando SQL.
■
Une dados estruturados e vetores no mesmo banco.
■
Reduz a complexidade de manter um banco vetorial separado.
Aurora
PostgreSQL
+ extensão pgvector
Banco relacional gerenciado da AWS, com suporte a 
vetores via pgvector.


---
## Página 22

M Ó D U L O
05
Rotulagem de dados
Modelos de IA aprendem com exemplos. Rotular esses exemplos 
é o que permite ensinar uma máquina a reconhecer padrões.


---
## Página 23

M Ó D U L O  5
•
R O T U L A G E M
O que é rotulagem de dados
Módulo 5 — ROTULAGEM
23 / 49
Definição
■
Processo de marcar dados com a resposta correta.
■
Cada exemplo recebe um rótulo (label) explicando o que é.
■
Esses rótulos viram o material de ensino do modelo.
■
Pode ser feito por humanos, máquinas ou de forma híbrida.
■
Qualidade do rótulo influencia diretamente a qualidade do 
modelo.
E X E M P L O  D E  R O T U L A G E M
→
rótulo: "gato"
→
rótulo: "cão"
→
rótulo: "carro"


---
## Página 24

M Ó D U L O  5
•
R O T U L A G E M
Dados rotulados vs não rotulados
Módulo 5 — ROTULAGEM
24 / 49
D A D O S  R O T U L A D O S
■
Cada exemplo vem com sua resposta correta.
■
Modelo aprende observando entrada e resposta 
esperada.
■
Necessários para aprendizado supervisionado.
■
Caros e demorados de produzir em grande volume.
■
Geralmente exigem revisão humana.
D A D O S  N Ã O  R O T U L A D O S
■
Apenas a entrada  sem resposta associada.
■
Mais abundantes e baratos de obter.
■
Usados em aprendizado não supervisionado.
■
Modelo precisa descobrir padrões por conta própria.
■
Servem como base para muitos modelos pré-treinados.


---
## Página 25

M Ó D U L O  5
•
R O T U L A G E M
Amazon SageMaker Ground Truth
Módulo 5 — ROTULAGEM
25 / 49
Definição
SageMaker
Ground Truth
Serviço gerenciado da AWS para construção de datasets 
rotulados com alta qualidade.
■
Serviço da AWS para rotulagem de dados em escala.
■
Apoia rotulagem de imagens, texto, vídeo e mais.
■
Combina trabalho humano com automação.
■
Permite usar equipes próprias, fornecedores ou Mechanical 
Turk.
■
Reduz tempo e custo da preparação de dados de treino.
■
Foco em qualidade e governança do dataset rotulado.


---
## Página 26

M Ó D U L O  5
•
R O T U L A G E M
Amazon Mechanical Turk
Módulo 5 — ROTULAGEM
26 / 49
Definição
■
Plataforma da AWS de força de trabalho humana sob demanda.
■
Trabalhadores executam tarefas que máquinas fazem mal.
■
Útil para rotulagem, validação e curadoria de dados.
■
Pode ser integrado ao SageMaker Ground Truth.
■
Escala em paralelo: muitas pessoas trabalhando ao mesmo 
tempo.
■
Modelo de pagamento por tarefa concluída.
Amazon
Mechanical Turk
Plataforma de tarefas humanas em escala — chamadas de 
“human intelligence tasks”.


---
## Página 27

M Ó D U L O
06
Tipos de aprendizado de 
máquina
Como modelos aprendem a partir dos dados — supervisionado, 
não supervisionado, reforço, federado e por transferência.


---
## Página 28

M Ó D U L O  6
•
T i p o s  d e  a p r e n d i z a d o
Visão geral dos tipos de aprendizado
Módulo 6 — Tipos de aprendizado de máquina
28 / 49
Supervisionado
Aprende com dados 
rotulados.
Não supervisionado
Encontra padrões em dados 
sem rótulo.
Por reforço
Aprende por tentativa e 
recompensa.
Federado
Treina sem centralizar os 
dados.
Por transferência
Reaproveita conhecimento 
prévio.


---
## Página 29

M Ó D U L O  6
•
T i p o s  d e  a p r e n d i z a d o
Aprendizado supervisionado
Módulo 6 — Tipos de aprendizado de máquina
29 / 49
Definição
Aprende com
respostas certas
■
Modelo aprende a partir de dados rotulados.
■
Cada entrada tem uma resposta correta associada.
■
Objetivo: prever a saída para entradas novas.
■
Bom para classificação e regressão.
■
Exige um conjunto rotulado de boa qualidade.
■
Exemplos: detectar spam, prever preço, identificar imagens.


---
## Página 30

M Ó D U L O  6
•
T i p o s  d e  a p r e n d i z a d o
Aprendizado não supervisionado
Módulo 6 — Tipos de aprendizado de máquina
30 / 49
Definição
Aprende a
organizar sozinho
■
Modelo aprende a partir de dados não rotulados.
■
Não recebe respostas certas descobre padrões sozinho.
■
Útil para encontrar grupos (clustering) e estrutura escondida.
■
Detecta anomalias e segmenta usuários ou produtos.
■
Reduz dimensionalidade para visualização e simplificação.
■
Aproveita o grande volume de dados sem rótulo.


---
## Página 31

M Ó D U L O  6
•
T i p o s  d e  a p r e n d i z a d o
Módulo 6 — Tipos de aprendizado de máquina
31 / 49
Definição
Aprende com
tentativa e erro
■
Modelo (agente) interage com um ambiente.
■
Toma ações e recebe recompensas ou penalidades.
■
Aprende a estratégia que maximiza recompensas no longo prazo.
■
Não precisa de dados rotulados previamente.
■
Bom para tomada de decisão sequencial.
■
Exemplos: jogos, robótica, otimização operacional.
Aprendizado por reforço


---
## Página 32

M Ó D U L O  6
•
T i p o s  d e  a p r e n d i z a d o
Módulo 6 — Tipos de aprendizado de máquina
32 / 49
Definição
Aprendizado federado
Treina sem
mover os dados
■
Treinamento distribuído entre vários dispositivos ou organizações.
■
Os dados permanecem onde foram gerados (não viajam).
■
Cada participante treina localmente e envia apenas atualizações.
■
Preserva privacidade e atende a requisitos regulatórios.
■
Útil em saúde, finanças e dispositivos móveis.
■
Combina conhecimento de várias fontes em um modelo central.


---
## Página 33

M Ó D U L O  6
•
T i p o s  d e  a p r e n d i z a d o
Módulo 6 — Tipos de aprendizado de máquina
33 / 49
Definição
Aprendizado por transferência
■
Treinamento distribuído entre vários dispositivos ou organizações.
■
Os dados permanecem onde foram gerados (não viajam).
■
Cada participante treina localmente e envia apenas atualizações.
■
Preserva privacidade e atende a requisitos regulatórios.
■
Útil em saúde, finanças e dispositivos móveis.
■
Combina conhecimento de várias fontes em um modelo central.
Reaproveita o
que já foi aprendido


---
## Página 34

M Ó D U L O  6
•
T i p o s  d e  a p r e n d i z a d o
Quadro comparativo
Módulo 6 — Tipos de aprendizado de máquina
34 / 49
Tipo
Dados usados
Como aprende
Onde se aplica
Supervisionado
Rotulados
Mapeia entrada → resposta
Classificação, regressão
Não supervisionado
Não rotulados
Descobre padrões sozinho
Clustering, anomalias
Por reforço
Interação com ambiente
Tentativa, erro e recompensa
Jogos, robótica, decisão
Federado
Distribuídos, locais
Treina sem centralizar dados
Privacidade e regulação
Por transferência
Modelo pré-treinado + ajuste
Reaproveita conhecimento
Modelos fundacionais, NLP


---
## Página 35

E N C E R R A M E N T O
Síntese da aula
ENCERRAMENTO
35 / 49
Embeddings
Conceitos viram vetores. Texto, imagem e 
multimodal vivem em espaços vetoriais 
comparáveis.
Processamento de texto
Tokenizar, contar, recortar base de todo modelo de 
linguagem.
Tipos de dados
Estruturados são tabulares e fáceis. Não 
estruturados dominam o mundo real.
Bancos de vetores
Aurora PostgreSQL com pgvector permite vetores e 
SQL no mesmo banco.
Rotulagem
Ground Truth e Mechanical Turk cuidam da 
preparação dos datasets.
Tipos de aprendizado
Cinco famílias: supervisionado, não supervisionado, 
reforço, federado e por transferência.


---
## Página 36

E N C E R R A M E N T O
Como os conceitos se conectam
ENCERRAMENTO
36 / 49
Dados
estruturados ou
não estruturados
→
Pré-processo
tokenização, BoW,
intervalo
→
Embedding
vetor numérico
de significado
→
Banco vetorial
Aurora + pgvector
armazena vetores
→
Aprendizado
treina e responde
ao usuário
Todo pipeline de IA passa, em alguma forma, por essas etapas.


---
## Página 37

E N C E R R A M E N T O
Recapitulando os conceitos da aula​
ENCERRAMENTO
37 / 49
Diferencie embedding e geração multimodal
Embedding compara conteúdos. Geração multimodal cria conteúdos 
novos a partir de outras modalidades.
Saiba escolher entre rotulado e não rotulado
Aprendizado supervisionado precisa de rótulos. Não supervisionado 
trabalha sem eles.
Lembre o papel do pgvector
Permite vetores em Aurora PostgreSQL um banco relacional gerenciado 
pela AWS.
SageMaker Ground Truth e Mechanical Turk
Ground Truth é o serviço gerenciado de rotulagem Mechanical Turk é a 
força de trabalho humana sob demanda.
Federado vs transferência
Federado distribui o treino para preservar privacidade. Transferência 
reaproveita modelos prévios.
Janela de contexto e intervalos
Janela define o quanto o modelo enxerga. Intervalos quebram 
documentos para caber na janela.


---
## Página 38

P e r g u n t a 1
Pergunta
38 / 49
(A) Aprendizagem supervisionada
(B) Aprendizagem não supervisionada 
(C) Aprendizagem por reforço a partir de feedback humano (RLHF)
(D) Aprendizagem por reforço
Um instituto de pesquisa tem uma grande quantidade de dados genéticos não rotulados. O objetivo é identificar 
padrões e agrupamentos em diferentes perfis genéticos para desenvolver tratamentos personalizados. Qual 
metodologia de aprendizado de IA seria mais adequada para atender a esses requisitos?


---
## Página 39

P e r g u n t a 1
Pergunta
39 / 49
(A) Aprendizagem supervisionada
(B) Aprendizagem não supervisionada 
(C) Aprendizagem por reforço a partir de feedback humano (RLHF)
(D) Aprendizagem por reforço
Um instituto de pesquisa tem uma grande quantidade de dados genéticos não rotulados. O objetivo é identificar 
padrões e agrupamentos em diferentes perfis genéticos para desenvolver tratamentos personalizados. Qual 
metodologia de aprendizado de IA seria mais adequada para atender a esses requisitos?


---
## Página 40

P e r g u n t a 2
Pergunta
40 / 49
(A) Aprendizado não supervisionado para identificar padrões de preferências de usuários
(B) Aprendizado supervisionado com um conjunto de dados manualmente curado de avaliações positivas e 
negativas
(C) Aprendizado supervisionado com um banco de dados de recomendações continuamente atualizado
(D) Aprendizado por reforço com recompensas para feedback positivo dos usuários
Uma plataforma educacional está desenvolvendo um assistente virtual para orientar os alunos durante seus 
estudos. A equipe quer que o assistente melhore suas recomendações ao longo do tempo, ajustando-se com base 
nos comentários e avaliações fornecidos pelos alunos após cada interação. Qual estratégia de aprendizado de IA 
seria a mais indicada para permitir essa melhoria contínua?


---
## Página 41

P e r g u n t a 2
Pergunta
41 / 49
(A) Aprendizado não supervisionado para identificar padrões de preferências de usuários
(B) Aprendizado supervisionado com um conjunto de dados manualmente curado de avaliações positivas e 
negativas
(C) Aprendizado supervisionado com um banco de dados de recomendações continuamente atualizado
(D) Aprendizado por reforço com recompensas para feedback positivo dos usuários
Uma plataforma educacional está desenvolvendo um assistente virtual para orientar os alunos durante seus 
estudos. A equipe quer que o assistente melhore suas recomendações ao longo do tempo, ajustando-se com base 
nos comentários e avaliações fornecidos pelos alunos após cada interação. Qual estratégia de aprendizado de IA 
seria a mais indicada para permitir essa melhoria contínua?


---
## Página 42

P e r g u n t a 3
Pergunta
42 / 49
(A) Usar aprendizado por transferência
(B) Usar aprendizado não supervisionado
(C) Aumentar o número de épocas
(D) Diminuir o número de épocas
Um laboratório de pesquisa quer evitar o custo e o tempo envolvidos na criação de modelos de aprendizado de 
máquina do zero e, em vez disso, deseja adaptar modelos já existentes para novas aplicações. Qual método de 
aprendizado de máquina atende melhor a essa necessidade?


---
## Página 43

P e r g u n t a 3
Pergunta
43 / 49
(A) Usar aprendizado por transferência
(B) Usar aprendizado não supervisionado
(C) Aumentar o número de épocas
(D) Diminuir o número de épocas
Um laboratório de pesquisa quer evitar o custo e o tempo envolvidos na criação de modelos de aprendizado de 
máquina do zero e, em vez disso, deseja adaptar modelos já existentes para novas aplicações. Qual método de 
aprendizado de máquina atende melhor a essa necessidade?


---
## Página 44

P e r g u n t a 4
Pergunta
44 / 49
(A) Temperatura
(B) Tamanho do lote
(C) Janela de Contexto
(D) Tamanho do modelo
No Amazon BedRock, qual fator define a quantidade máxima de informações que podem ser enviadas em um 
único prompt?


---
## Página 45

P e r g u n t a 4
Pergunta
45 / 49
(A) Temperatura
(B) Tamanho do lote
(C) Janela de Contexto
(D) Tamanho do modelo
No Amazon BedRock, qual fator define a quantidade máxima de informações que podem ser enviadas em um 
único prompt?


---
## Página 46

P e r g u n t a 5
Pergunta
46 / 49
(A) Modelo de incorporação de texto
(B) Modelo de geração multimodal
(C) Modelo de incorporação multimodal
(D) Modelo de geração de imagens
Uma equipe de cientistas de dados está desenvolvendo um sistema de recomendação para uma plataforma de e-
commerce. Esse sistema precisa analisar simultaneamente descrições textuais dos produtos e imagens dos 
mesmos para fornecer sugestões mais precisas aos usuários. Qual tipo de foundation model seria mais adequado 
para implementar esse sistema?


---
## Página 47

P e r g u n t a 5
Pergunta
47 / 49
(A) Modelo de incorporação de texto
(B) Modelo de geração multimodal
(C) Modelo de incorporação multimodal
(D) Modelo de geração de imagens
Uma equipe de cientistas de dados está desenvolvendo um sistema de recomendação para uma plataforma de e-
commerce. Esse sistema precisa analisar simultaneamente descrições textuais dos produtos e imagens dos 
mesmos para fornecer sugestões mais precisas aos usuários. Qual tipo de foundation model seria mais adequado 
para implementar esse sistema?


---
## Página 48

P e r g u n t a 6
Pergunta
48 / 49
(A) Os tokens são as unidades básicas de entrada e saída com as quais um modelo de IA generativa opera, 
representando palavras, subpalavras ou outras unidades linguísticas
(B) Os tokens são representações matemáticas de palavras ou conceitos usados em modelos de IA generativa 
(C) Os tokens são os prompts específicos ou instruções dadas ao modelo de IA generativa para gerar uma saída
(D) Os tokens são os pesos pré-treinados de um modelo de IA generativa que são ajustados para tarefas 
específicas
O que são tokens no contexto dos modelos de IA generativa?


---
## Página 49

P e r g u n t a 6
Pergunta
49 / 49
(A) Os tokens são as unidades básicas de entrada e saída com as quais um modelo de IA generativa opera, 
representando palavras, subpalavras ou outras unidades linguísticas
(B) Os tokens são representações matemáticas de palavras ou conceitos usados em modelos de IA generativa 
(C) Os tokens são os prompts específicos ou instruções dadas ao modelo de IA generativa para gerar uma saída
(D) Os tokens são os pesos pré-treinados de um modelo de IA generativa que são ajustados para tarefas 
específicas
O que são tokens no contexto dos modelos de IA generativa?
