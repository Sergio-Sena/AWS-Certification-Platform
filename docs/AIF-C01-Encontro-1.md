# AIF-C01-Encontro-1.pdf

*Convertido automaticamente de PDF*


---
## Página 1

Fundamentos de IA
Machine Learning e
Modelos de Linguagem
Fundamentos de IA, ML, Deep Learning e IA Generativa


---
## Página 2

[Scan detectado - instale pytesseract e Pillow para OCR]


---
## Página 3

V I S Ã O  G E R A L  D A  A U L A
Agenda
Visão geral
1 / 38
01
IA, ML, Deep Learning e IA Generativa
Definições, diferenças e relação entre os conceitos
02
Redes Neurais
A base computacional dos modelos modernos
03
Conceitos-chave
Modelo, algoritmo, treinamento e inferência
04
LLMs e SLMs
Modelos de linguagem grandes e pequenos
05
Transformers e Dimensões
Arquitetura moderna e espaço vetorial


---
## Página 4

M Ó D U L O
01
IA, ML, Deep Learning e 
IA Generativa
Definindo os termos fundamentais e entendendo como se 
relacionam entre si


---
## Página 5

M Ó D U L O  0 1   •   C O N C E I T O  I N I C I A L
O que é Inteligência Artificial?
Módulo 1 — IA, ML, DL e IA Generativa
3 / 38
Definição
■
Campo da computação que busca criar sistemas capazes de 
realizar tarefas que exigiriam inteligência humana
■
Inclui percepção, raciocínio, aprendizado, decisão e linguagem
■
É uma área ampla que abrange diversas técnicas e abordagens
■
ML e Deep Learning são subáreas dentro da IA
Hierarquia conceitual
IA
Machine Learning
Deep Learning
IA
Generativa


---
## Página 6

M Ó D U L O  0 1   •   S U B Á R E A  D A  I A
Machine Learning (ML)
Módulo 1 — IA, ML, DL e IA Generativa
4 / 38
■
Subárea da IA em que sistemas aprendem padrões a partir de dados, sem serem explicitamente 
programados
■
Em vez de regras fixas, o sistema descobre relações estatísticas nos dados
■
Quanto mais dados de qualidade, melhor tende a ser o aprendizado
■
É a base para previsões, classificações e recomendações
Supervisionada
O modelo aprende a partir de exemplos 
rotulados — entrada e resposta correta
Não supervisionada
O modelo descobre padrões e 
agrupamentos em dados sem rótulos
Por reforço
O modelo aprende por tentativa e erro 
recebendo recompensas e penalidades
Definição


---
## Página 7

M Ó D U L O  0 1   •   M L  A V A N Ç A D O
Deep Learning
Módulo 1 — IA, ML, DL e IA Generativa
5 / 38
■
Ramo do Machine Learning baseado em redes neurais profundas, 
com múltiplas camadas
■
Capaz de aprender representações complexas diretamente dos 
dados brutos
■
Especialmente eficaz em imagens, áudio, vídeo e texto
■
Exige grande volume de dados e poder computacional elevado
■
É o motor por trás de avanços recentes em visão computacional e 
linguagem natural
D E S T A Q U E
Profundidade
O termo "deep" refere-se ao número 
de camadas escondidas na rede 
neural quanto mais camadas, maior a 
capacidade de capturar padrões 
abstratos.
Definição


---
## Página 8

M Ó D U L O  0 1   •   E V O L U Ç Ã O  R E C E N T E
IA Generativa
Módulo 1 — IA, ML, DL e IA Generativa
6 / 38
■
Categoria de IA capaz de criar novos conteúdos a partir do que 
aprendeu
■
Pode gerar texto, imagens, áudio, vídeo, código e dados sintéticos
■
Diferente da IA tradicional, que apenas classifica, prevê ou 
identifica
■
Apoia-se em modelos de Deep Learning de grande escala
■
Está na base dos modelos de linguagem que estudaremos mais 
adiante
Exemplos de geração
Texto
Resumos, redações, código
Imagem
Ilustrações e edições
Áudio
Voz, música, efeitos
Vídeo
Animações curtas
Definição


---
## Página 9

M Ó D U L O  0 1   •   C O M P A R A Ç Ã O
IA, ML, DL e IA Generativa: como se relacionam
Módulo 1 — IA, ML, DL e IA Generativa
7 / 38
Conceito
Foco
Característica principal
Inteligência Artificial
Simular capacidades humanas
Campo amplo que abrange ML, DL e mais
Machine Learning
Aprender padrões a partir de dados
Não depende de regras programadas manualmente
Deep Learning
Representações complexas
Usa redes neurais profundas com múltiplas camadas
IA Generativa
Criar novo conteúdo
Apoia-se em DL para gerar texto, imagem, áudio
Cada conceito está contido no anterior: IA -> ML -> DL -> IA Generativa


---
## Página 10

M Ó D U L O
02
Redes Neurais
A base computacional que torna possível o aprendizado profundo 
e os modelos de linguagem modernos


---
## Página 11

M Ó D U L O  0 2   •   C O N C E I T O
O que é uma Rede Neural?
Módulo 2 — Redes Neurais
9 / 38
■
Estrutura computacional inspirada no funcionamento do 
cérebro humano
■
Composta por unidades chamadas neurônios artificiais, 
organizadas em camadas
■
Cada conexão entre neurônios possui um peso ajustável 
durante o treinamento
■
Recebe entradas, processa em camadas intermediárias e 
produz uma saída
■
É a estrutura matemática que permite o Deep Learning
Estrutura básica
Entrada
Oculta
Saída
Definição


---
## Página 12

M Ó D U L O  0 2   •   P R O C E S S O  D E  A P R E N D I Z A D O
Como uma rede neural aprende?
Módulo 2 — Redes Neurais
10 / 38
1
Recebe os dados
As entradas chegam pela 
primeira camada da rede
2
Faz uma previsão
A informação é processada 
nas camadas e gera uma 
saída
3
Compara com o esperado
Calcula o erro entre o 
resultado obtido e a resposta 
correta
4
Ajusta os pesos
Modifica as conexões para 
reduzir o erro nas próximas 
tentativas
O ciclo se repete milhões de vezes até a rede estabilizar em uma boa precisão


---
## Página 13

M Ó D U L O  0 2   •   A R Q U I T E T U R A S
Principais tipos de redes neurais
Módulo 2 — Redes Neurais
11 / 38
Redes Feedforward
Informação flui em uma única direção, da entrada para a 
saída. Base de muitos modelos.
Redes Convolucionais (CNN)
Especializadas em imagens e dados com estrutura espacial.
Redes Recorrentes (RNN)
Processam sequências, mantendo memória de elementos 
anteriores.
Transformers
Arquitetura moderna que substituiu as RNN para texto e 
linguagem natural.


---
## Página 14

M Ó D U L O
03
Conceitos-chave
Modelo, algoritmo, treinamento, inferência e a introdução aos 
LLMs


---
## Página 15

M Ó D U L O  0 3   •   V O C A B U L Á R I O  E S S E N C I A L
Cinco conceitos que você precisa dominar
Módulo 3 — Conceitos-chave
14 / 38
0 1
Modelo
Resultado matemático 
do aprendizado, capaz 
de fazer previsões
0 2
Algoritmo
Procedimento usado 
para treinar e ajustar o 
modelo
0 3
Treinamento
Fase em que o modelo 
aprende a partir dos 
dados
0 4
Inferência
Uso do modelo 
treinado para gerar 
respostas novas
0 5
LLMs
Modelos de linguagem 
de grande escala que 
veremos em detalhe


---
## Página 16

M Ó D U L O  0 3   •   C O N C E I T O  1  D E  5
Modelo
Módulo 3 — Conceitos-chave
15 / 38
■
É o resultado do processo de aprendizado sobre os dados
■
Funciona como uma função matemática que transforma uma 
entrada em uma saída
■
Contém o conhecimento extraído dos exemplos vistos no 
treinamento
■
Pode ser salvo, distribuído e reutilizado posteriormente
■
A qualidade do modelo depende dos dados e do algoritmo 
usados
A N A L O G I A
Receita aprendida
Pense no modelo como uma receita 
matemática que aprendeu a 
transformar ingredientes (entradas) 
em pratos (saídas) a partir de muitos 
exemplos.
Definição


---
## Página 17

M Ó D U L O  0 3   •   C O N C E I T O  2  D E  5
Algoritmo
Módulo 3 — Conceitos-chave
16 / 38
■
Conjunto de passos lógicos que define como o modelo será 
treinado
■
Determina a forma como os pesos são ajustados durante o 
aprendizado
■
Existem diversos algoritmos, cada um adequado a um tipo de 
problema
■
Não confundir com o modelo: o algoritmo é o método, o modelo 
é o resultado
■
Exemplos clássicos incluem regressão, árvores de decisão e redes 
neurais
Distinção essencial
Algoritmo
É o método: o conjunto de passos para 
chegar ao modelo
Modelo
É o resultado: o que se obtém depois de 
aplicar o algoritmo aos dados
Definição


---
## Página 18

M Ó D U L O  0 3   •   C O N C E I T O  3  D E  5
Treinamento
Módulo 3 — Conceitos-chave
17 / 38
■
Fase em que o algoritmo processa os dados e ajusta o modelo
■
Costuma exigir grande volume de dados de qualidade
■
É a etapa que mais consome tempo e poder computacional
■
Geralmente realizada com hardware especializado, como GPUs
■
O resultado é um modelo pronto para ser usado
Características
Custo alto
Computação e energia intensos
Tempo longo
Horas, dias ou semanas
Dados massivos
Volume grande e diverso
Acontece uma vez
Antes do modelo entrar em uso
Definição


---
## Página 19

M Ó D U L O  0 3   •   C O N C E I T O  4  D E  5
Inferência
Módulo 3 — Conceitos-chave
18 / 38
■
Fase em que o modelo treinado é usado para gerar respostas
■
Recebe novas entradas e produz previsões, classificações ou 
conteúdos
■
Acontece em tempo real ou em lote, dependendo da aplicação
■
Tem custo computacional menor que o treinamento, porém 
recorrente
■
É a fase em que o usuário final efetivamente interage com a IA
T R E I N A M E N T O   ×
I N F E R Ê N C I A
Quando?
Treinamento: Antes do uso
Inferência: Durante o uso
Custo?
Treinamento: Muito alto
Inferência: Mais baixo
Frequência?
Treinamento: Pontual
Inferência: Contínua
Definição


---
## Página 20

M Ó D U L O  0 3   •   C O N C E I T O  5  D E  5
Apresentando os LLMs
Módulo 3 — Conceitos-chave
19 / 38
■
Sigla para Large Language Models, ou modelos de linguagem de grande escala
■
Modelos treinados em volumes massivos de texto
■
Capazes de entender e gerar linguagem natural com fluência
■
Geralmente baseados na arquitetura Transformer
■
Veremos LLMs em profundidade no próximo módulo
LLMs estão na base de assistentes virtuais, mecanismos de busca conversacionais e ferramentas de produtividade
Definição


---
## Página 21

M Ó D U L O
04
Large Language Models 
(LLMs)
Modelos de linguagem de grande escala que protagonizam a IA 
Generativa atual


---
## Página 22

M Ó D U L O  0 4   •   D E F I N I Ç Ã O
O que são LLMs?
Módulo 4 — LLMs
21 / 38
■
Treinados com bilhões ou trilhões de tokens de texto
■
Possuem dezenas a centenas de bilhões de parâmetros
■
Capazes de raciocinar, resumir, traduzir, programar e dialogar
■
Servem como base para muitas aplicações de IA Generativa
■
Modelos de Deep Learning especializados em linguagem natural
Bilhões
de parâmetros ajustados durante o 
treinamento
Trilhões
de tokens vistos durante o pré-treinamento
Definição


---
## Página 23

M Ó D U L O  0 4   •   F U N C I O N A M E N T O
Como funcionam os LLMs?
Módulo 4 — LLMs
22 / 38
■
Recebem um texto de entrada chamado prompt
■
Quebram o texto em tokens, que são pedaços menores como palavras ou subpalavras
■
Calculam, a cada passo, qual é o próximo token mais provável
■
Geram a resposta token por token, formando frases coerentes
■
Não pesquisam na internet em tempo real, respondem com base no que aprenderam
Definição


---
## Página 24

M Ó D U L O  0 4   •   P E R S P E C T I V A  R E A L I S T A
Capacidades e limitações dos LLMs
Módulo 4 — LLMs
23 / 38
Capacidades
■
Compreender e gerar texto fluente
■
Resumir, traduzir e reescrever conteúdos
■
Responder perguntas em linguagem natural
■
Auxiliar na escrita de código
■
Explicar conceitos de forma adaptada ao público
Limitações
■
Podem gerar respostas incorretas com tom de 
certeza
■
Conhecimento limitado pela data do treinamento
■
Não compreendem o mundo, apenas modelam 
padrões de texto
■
Custo elevado de computação e infraestrutura
■
Riscos relacionados a privacidade, viés e segurança


---
## Página 25

M Ó D U L O
05
Small Language Models 
(SLMs)
Modelos de linguagem menores, mais rápidos e adequados a 
cenários específicos


---
## Página 26

M Ó D U L O  0 5   •   D E F I N I Ç Ã O
O que são SLMs?
Módulo 5 — SLMs
25 / 38
■
Sigla para Small Language Models, ou modelos de linguagem de pequena escala
■
Possuem ordens de grandeza menos parâmetros que os LLMs
■
São treinados com volumes menores e mais focados de dados
■
Mais rápidos, mais baratos e exigem menos infraestrutura
■
Podem rodar localmente, em servidores menores ou até em dispositivos finais
Definição
SLMs vs LLMs


---
## Página 27

M Ó D U L O  0 5   •   C O M P A R A Ç Ã O
LLMs versus SLMs
Módulo 5 — SLMs
26 / 38
Aspecto
LLMs
SLMs
Tamanho
Bilhões de parâmetros
Milhões a poucos bilhões
Custo
Alto para treinar e operar
Baixo a moderado
Velocidade
Inferência mais lenta
Inferência mais rápida
Generalização
Ampla, em muitos domínios
Mais focada em tarefas específicas
Onde executar
Nuvem com hardware potente
Pode rodar local ou em borda


---
## Página 28

M Ó D U L O  0 5   •   A P L I C A B I L I D A D E
Quando preferir um SLM?
Módulo 5 — SLMs
27 / 38
Tarefas focadas
O problema é específico e bem delimitado, sem precisar de generalização ampla
Restrição de custo
Operação contínua exige redução de custo de inferência
Latência baixa
É necessária resposta muito rápida em tempo real
Privacidade dos dados
Os dados não devem sair do ambiente local ou da rede da empresa
Hardware limitado
O modelo precisa rodar em servidores modestos ou em dispositivos finais


---
## Página 29

M Ó D U L O
06
Modelos de Linguagem 
baseados em Transformer
A arquitetura que viabilizou os LLMs e a IA Generativa modernos


---
## Página 30

M Ó D U L O  0 6   •   C O N T E X T O  H I S T Ó R I C O
Origem dos Transformers
Módulo 6 — Transformers
29 / 38
■
Arquitetura proposta em pesquisa publicada em 2017
■
Surgiu para resolver limitações das redes recorrentes em 
sequências longas
■
Trouxe um mecanismo central chamado atenção
■
Permitiu treinar modelos muito maiores em paralelo
■
Tornou-se a base de praticamente todos os LLMs modernos
M A R C O  T É C N I C O
2017
Ano em que a arquitetura 
Transformer foi apresentada e mudou 
o rumo do processamento de 
linguagem natural.
Definição


---
## Página 31

M Ó D U L O  0 6   •   E S T R U T U R A
Como é a arquitetura Transformer?
Módulo 6 — Transformers
30 / 38
■
Composta por blocos empilhados que processam o texto em paralelo
■
Cada bloco combina mecanismos de atenção e camadas neurais
■
Trabalha com representações vetoriais dos tokens chamadas embeddings
■
Captura relações entre palavras independentemente da distância no texto
■
Pode ser treinada com volumes muito maiores de dados que arquiteturas anteriores
Definição


---
## Página 32

M Ó D U L O  0 6   •   C O N C E I T O  C E N T R A L
Mecanismo de atenção
Módulo 6 — Transformers
31 / 38
■
Permite ao modelo decidir quais partes do texto são mais 
importantes em cada momento
■
A cada token gerado, o modelo pondera todos os tokens 
anteriores
■
Evita o problema de esquecimento das redes recorrentes em 
textos longos
■
É o que dá ao Transformer sua capacidade de entender contexto 
amplo
■
Tornou possível treinar modelos com janelas de contexto cada 
vez maiores
Ideia central
"O modelo dá mais peso às palavras 
que mais importam para entender a 
próxima."
Atenção é seletiva: nem todas as 
palavras pesam igual quando o 
modelo prevê a próxima.


---
## Página 33

M Ó D U L O
07
Dimensões
O conceito de espaço vetorial e como modelos representam 
significado


---
## Página 34

M Ó D U L O  0 7   •   C O N C E I T O
O que são dimensões em modelos de linguagem?
Módulo 7 — Dimensões
33 / 38
■
Cada token é representado como um vetor com várias dimensões
■
Dimensões são números que descrevem aspectos diferentes do significado
■
Um modelo pode usar centenas ou milhares de dimensões por vetor
■
Quanto mais dimensões, maior a capacidade de capturar nuances de significado
■
Esses vetores são chamados de embeddings
Definição


---
## Página 35

M Ó D U L O  0 7   •   I M P O R T Â N C I A
Por que as dimensões importam?
Módulo 7 — Dimensões
34 / 38
Capturam significado
Permitem que o modelo represente sentido, contexto e relações entre palavras
Aproximam ideias semelhantes
Palavras com sentidos parecidos ficam próximas no espaço vetorial
Habilitam operações matemáticas
É possível medir similaridade calculando distância entre vetores
Influenciam o tamanho do modelo
Mais dimensões aumentam capacidade, mas também elevam custo 
computacional


---
## Página 36

M Ó D U L O  0 7   •   E S P A Ç O  V E T O R I A L
Embeddings e espaço vetorial
Módulo 7 — Dimensões
35 / 38
■
Embedding é a representação numérica de um token em um 
espaço de muitas dimensões
■
Cada palavra, frase ou documento pode ser convertido em um 
vetor
■
Modelos usam esses vetores para entender semelhança e relação 
entre conteúdos
■
Operações entre vetores capturam relações semânticas, como 
sinônimos ou analogias
■
Embeddings são fundamentais para busca semântica, 
recomendação e geração de respostas
Espaço vetorial
rei
rainha
trono
carro
Conceitos relacionados ficam próximos
Definição


---
## Página 37

E N C E R R A M E N T O
Recapitulando os conceitos da aula
Encerramento
36 / 38
■
IA é o campo amplo que estuda sistemas com capacidades de inteligência humana
■
ML aprende padrões a partir de dados; DL é ML com redes neurais profundas
■
IA Generativa cria novos conteúdos a partir do que aprendeu
■
Redes neurais são a base computacional do Deep Learning
■
Modelo, algoritmo, treinamento e inferência formam o vocabulário essencial
■
LLMs são grandes; SLMs são menores e mais especializados
■
Transformers são a arquitetura por trás dos LLMs modernos
■
Dimensões e embeddings permitem representar significado em vetores


---
## Página 38

P e r g u n t a 1
Pergunta
37 / 38
(A) Treinamento
(B) Inferência
(C) Implantação do modelo
(D) Correção de viés
Uma organização criou um sistema de visão computacional para monitoramento de segurança em tempo real e 
lançou o produto no mercado. Qual é a etapa do processo de IA que é ativada quando o sistema analisa imagens 
capturadas pelas câmeras para reconhecer possíveis intrusos ou objetos suspeitos?


---
## Página 39

P e r g u n t a 1
Pergunta
38 / 38
(A) Treinamento
(B) Inferência
(C) Implantação do modelo
(D) Correção de viés
A Escola da Nuvem criou um sistema de visão computacional para monitoramento de segurança em tempo real e 
lançou o produto no mercado. Qual é a etapa do processo de IA que é ativada quando o sistema analisa imagens 
capturadas pelas câmeras para reconhecer possíveis intrusos ou objetos suspeitos?
