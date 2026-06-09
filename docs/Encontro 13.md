# Encontro 13.pdf

*Convertido automaticamente de PDF*


---
## Página 1

Tuning, Métricas
MLOps e
operação de modelos
HPO, Autopilot, BLEU, ROUGE, BERTScore, MLOps, DeepAR e 
monitoramento


---
## Página 2

V I S Ã O  G E R A L  D A  A U L A
Agenda
Visão geral
2 / 38
01
Tuning e AutoML
HPO, Autopilot e adaptação de domínio no SageMaker
02
Métricas para FMs
BLEU, ROUGE, BERTScore e como avaliar modelos 
generativos
04
Implantação
SageMaker Endpoints e modelos de deploy gerenciado 
e auto-hospedado
03
MLOps e DeepAR
Operação de modelos com versionamento, 
experimentos e algoritmo de previsão
05
Monitoramento e Retreinamento
Como acompanhar modelos em produção e quando 
retreinar


---
## Página 3

M Ó D U L O
01
Tuning e AutoML
Hyperparameter Optimization, SageMaker Autopilot e adaptação 
de domínio para acelerar projetos


---
## Página 4

M Ó D U L O  0 1   •   C O N C E I T O  I N I C I A L
O que é Hyperparameter Optimization?
Módulo 1 — Tuning e AutoML
4 / 38
Definição
■
Processo automatizado de buscar a melhor combinação de 
hiperparâmetros para um modelo
■
Substitui a tentativa manual por uma busca sistemática no 
espaço de configurações
■
Costuma usar uma métrica de validação como guia para 
identificar a melhor combinação
■
SageMaker oferece HPO gerenciado integrado aos jobs de 
treinamento
Espaço de busca
Algoritmo
Hiperparâmetros
Treinar
Avaliar


---
## Página 5

M Ó D U L O  0 1   •   M É T O D O S
Métodos de busca em HPO
Módulo 1 — Tuning e AutoML
5 / 38
■
Existem várias estratégias para explorar o espaço de hiperparâmetros
■
Cada método tem trade-offs entre qualidade da busca e custo computacional
■
SageMaker HPO suporta os principais métodos de forma transparente
■
Validação cruzada ajuda a comparar combinações de forma robusta
Definição
Grid
Testa todas as combinações em uma grade 
definida pelo time
Random
Amostra combinações aleatórias dentro 
do espaço de busca
Bayesiano
Usa resultados anteriores para escolher 
próximas tentativas com mais inteligência


---
## Página 6

M Ó D U L O  0 1   •   A U T O M L
SageMaker Autopilot
Módulo 1 — Tuning e AutoML
6 / 38
■
Serviço de AutoML do SageMaker que automatiza o ciclo 
completo de criação de modelos
■
Recebe um dataset tabular e a coluna alvo, e devolve modelos 
treinados e avaliados
■
Realiza pré-processamento, seleção de algoritmo, treino e tuning 
automaticamente
■
Gera notebooks reproduzíveis explicando cada decisão tomada 
pelo serviço
■
Indicado para times sem especialistas em ML que precisam de 
baseline rápido
Definição
D E S T A Q U E
AutoML
Autopilot é a opção certa quando o time 
tem dados, mas não tem cientistas de ML 
disponíveis para construir modelo do 
zero.


---
## Página 7

M Ó D U L O  0 1   •   A D A P T A Ç Ã O
Ajuste fino com adaptação de domínio
Módulo 1 — Tuning e AutoML
7 / 38
■
Técnica que adapta um modelo pré-treinado a um domínio 
específico de aplicação
■
Combina pré-treino continuado com fine-tuning supervisionado 
em sequência
■
Apoia projetos em que o vocabulário e o estilo do setor são bem 
diferentes do geral
■
Reduz alucinações ao alinhar o modelo ao contexto do negócio
■
Geralmente exige menos dados rotulados que treinar do zero
Definição
Onde se aplica
Saúde
Modelos adaptados a prontuários e 
protocolos clínicos
Jurídico
Adaptação ao vocabulário de petições e 
contratos
Financeiro
Compreensão de relatórios, regulações e 
jargão do setor
Indústria
Manuais técnicos, normas e linguagem de 
engenharia


---
## Página 8

M Ó D U L O  0 1   •  C O M P A R A Ç Ã O
HPO, Autopilot e Adaptação de Domínio
Módulo 1 — Tuning e AutoML
8 / 38
Aspecto
HPO
Autopilot
Foco
Encontrar melhor combinação de 
hiperparâmetros
Construir modelo do zero com pouca intervenção
Entrada esperada
Algoritmo definido e espaço de 
busca
Dataset tabular e variável alvo
Esforço do time
Médio: define algoritmo e métricas
Baixo: configura entrada e analisa resultados
IA Generativa
Já existe modelo, falta otimizar 
configurações
Não há modelo, precisa gerar baseline rápido


---
## Página 9

M Ó D U L O
02
Redução de 
Dimensionalidade
Como reduzir o número de variáveis de um conjunto de dados 
sem perder informação relevante


---
## Página 10

M Ó D U L O  0 2   •   C O N C E I T O
O que é redução de dimensionalidade?
Módulo 2 — Redução de Dimensionalidade
10 / 38
■
Conjunto de técnicas para reduzir o número de variáveis de um 
dataset
■
Mantém o máximo possível de informação útil enquanto 
descarta redundâncias
■
Pode ser feita por seleção de variáveis ou por extração de 
novas features
■
Reduz custo computacional, melhora visualização e ajuda a 
evitar overfitting
■
Especialmente útil em datasets com centenas ou milhares de 
variáveis
Definição


---
## Página 11

M Ó D U L O  0 2   •   T É C N I C A S
Como uma rede neural aprende?
Módulo 2 — Redução de Dimensionalidade
11 / 38
1
PCA
Análise de Componentes 
Principais, projeta dados em 
eixos de máxima variância
2
t-SNE
Preserva relações de 
vizinhança, ótima para 
visualização em 2D ou 3D
3
UMAP
Mais rápido que t-SNE e 
preserva estrutura local e 
global do dataset
4
Autoencoder
Rede neural que aprende 
representação compacta dos 
dados de entrada
A escolha da técnica depende do volume de dados e do objetivo do projeto


---
## Página 12

M Ó D U L O  0 2   •   A P L I C A Ç Õ E S
Quando aplicar redução de dimensionalidade
Módulo 2 — Redução de Dimensionalidade
12 / 38
Visualização
Reduzir para 2D ou 3D para explorar e comunicar padrões 
a stakeholders.
Performance
Diminuir custo de treino e inferência removendo variáveis 
pouco informativas.
Anti-overfitting
Modelos com menos features tendem a generalizar melhor 
para dados novos.
Vetores
Reduzir dimensão de embeddings para acelerar busca 
semântica em escala.


---
## Página 13

M Ó D U L O
03
Métricas para Foundation 
Models
Como avaliar a qualidade de modelos generativos com BLEU, 
ROUGE e BERTScore


---
## Página 14

M Ó D U L O  0 3   •   V O C A B U L Á R I O  E S S E N C I A L
Cinco conceitos sobre avaliação
Módulo 3 — Métricas para FMs
14 / 38
0 1
Geração
Texto produzido pelo 
modelo a partir de uma 
entrada ou pergunta
0 2
Referência
Resposta correta 
esperada, escrita por 
humanos ou anotada 
com cuidado
0 3
Métrica
Forma de comparar 
geração e referência e 
atribuir um valor 
numérico
0 4
Avaliação
Conjunto de métricas 
aplicadas ao modelo 
para entender seu 
desempenho real
0 5
Holístico
Avaliação que combina 
métricas automáticas 
com análise humana 
qualitativa


---
## Página 15

M Ó D U L O  0 3   •   C O N C E I T O  1  D E  5
Métricas para FMs
Módulo 3 — Métricas para FMs
15 / 38
■
Foundation Models geram saída livre, então as métricas 
tradicionais não bastam
■
Métricas para FMs comparam texto gerado com texto de 
referência ou critérios
■
BLEU, ROUGE e BERTScore são as três métricas mais usadas em 
texto
■
Cada métrica enxerga um aspecto diferente: precisão, cobertura 
ou semântica
■
Avaliação completa combina métricas automáticas e revisão 
humana qualitativa
Definição
A N A L O G I A
Provador
Pense em métricas como diferentes 
provadores: um repara no sabor, 
outro na apresentação, outro no 
tempero cada um diz algo essencial e 
nenhum é suficiente sozinho.


---
## Página 16

M Ó D U L O  0 3   •   C O N C E I T O  2  D E  5
BLEU
Módulo 3 — Métricas para FMs
16 / 38
■
Sigla para Bilingual Evaluation Understudy, criada para tradução 
automática
■
Mede sobreposição de n-gramas entre o texto gerado e o texto 
de referência
■
Quanto maior o BLEU, mais palavras e sequências em comum 
com a referência
■
Funciona melhor quando há mais de uma referência por geração 
avaliada
■
Limitação clara: não captura sinônimos nem reformulações 
semanticamente equivalentes
Definição
Distinção essencial
Forte
Bom para tradução e tarefas com saída 
próxima da referência
Fraco
Penaliza paráfrases e reformulações 
mesmo que mantenham o significado


---
## Página 17

M Ó D U L O  0 3   •   C O N C E I T O  3  D E  5
ROUGE
Módulo 3 — Métricas para FMs
17 / 38
■
Sigla para Recall-Oriented Understudy for Gisting Evaluation
■
Foi pensada para avaliar resumos automáticos de textos longos
■
Mede o quanto da referência aparece no texto gerado pelo 
modelo
■
Existe em variantes que olham para palavras, sequências ou 
estrutura
■
Costuma ser usada em conjunto com BLEU e revisão humana
Definição
Variantes
ROUGE-N
Compara n-gramas comuns
ROUGE-L
Subsequência comum mais longa
ROUGE-W
Versão ponderada da ROUGE-L
ROUGE-S
Pares de palavras pulando termos


---
## Página 18

M Ó D U L O  0 3   •   C O N C E I T O  4  D E  5
BERT Score
Módulo 3 — Métricas para FMs
18 / 38
■
Métrica que usa o modelo BERT para comparar significado entre 
textos
■
Em vez de palavras, compara representações vetoriais geradas 
pelo BERT
■
Captura sinônimos, reformulações e relações semânticas entre 
frases
■
Custa mais que BLEU e ROUGE por exigir inferência de um 
modelo a cada par
■
Recomendada quando a saída livre exige avaliação semântica e 
não literal
Definição
B E R T   ×
T R A D I C I O N A I S
Comparação
Treinamento: BERTScore mede semântica
Inferência: BLEU e ROUGE medem palavras
Sinônimos
Treinamento: BERTScore reconhece 
equivalentes
Inferência: BLEU e ROUGE penalizam 
reformulações
Custo
Treinamento: BERTScore exige inferência por 
par
Inferência: BLEU e ROUGE são mais leves


---
## Página 19

M Ó D U L O  0 3   •   P R Á T I C A
Como escolher a métrica certa
Módulo 3 — Métricas para FMs
19 / 38
■
A escolha da métrica depende do tipo de tarefa e do nível de variação da saída
■
Tradução costuma usar BLEU, com referências múltiplas quando possível
■
Resumo automático geralmente combina ROUGE com revisão humana
■
Geração livre, como respostas e diálogos, tende a precisar de BERTScore
■
Em produção, métricas automáticas se complementam com avaliação humana
Definição


---
## Página 20

M Ó D U L O
04
Implantação de Modelos
Como disponibilizar modelos para uso real com SageMaker 
Endpoints e opções de deploy


---
## Página 21

M Ó D U L O  0 4   •   D E F I N I Ç Ã O
O que é implantação?
Módulo 4 — Implantação
21 / 38
■
Implantação é a etapa em que o modelo passa a ser usado por 
aplicações reais
■
Pode acontecer como API em tempo real ou processamento em 
lote
■
Demanda atenção a versionamento, escalabilidade, segurança e 
custo
■
Boa implantação prepara terreno para monitorar e retreinar com 
confiança
■
É também onde a maior parte do custo recorrente do projeto se 
concentra
Definição
Online
Responde a cada chamada em tempo real 
com baixa latência
Offline
Processa grandes volumes em lote, sem 
requisito de latência


---
## Página 22

M Ó D U L O  0 4   •   E N D P O I N T S
SageMaker Endpoints
Módulo 4 — Implantação
22 / 38
■
Endpoints são APIs HTTP gerenciadas que servem modelos em tempo real
■
SageMaker cuida da infraestrutura, escalabilidade e segurança do endpoint
■
Suportam multi-modelo, autoscaling e variantes para testes A/B
■
Para cargas em lote, há a alternativa de Batch Transform
■
Endpoints serverless atendem cargas com tráfego intermitente sem pagar tempo ocioso
Definição


---
## Página 23

M Ó D U L O  0 4   •   O P Ç Õ E S
Deploy gerenciado x auto-hospedado
Módulo 4 — Implantação
23 / 38
Gerenciado
■
Infraestrutura, segurança e escalabilidade tratadas 
pelo SageMaker
■
Configurações de autoscaling e logs entregues 
prontas
■
Implementação rápida com poucas linhas de 
código ou via console
■
Pago pelo tempo de instância e pelo modelo de 
invocação escolhido
■
Indicado para times pequenos focados em modelo 
e aplicação
Auto-hospedado
■
Cliente assume gestão de servidor, segurança e 
monitoramento
■
Maior controle sobre customização de runtime e 
dependências
■
Pode reduzir custo unitário em altíssimo volume 
bem dimensionado
■
Exige time com expertise em SRE, segurança e 
cloud
■
Pode ser combinado com containers próprios em 
SageMaker BYOC


---
## Página 24

M Ó D U L O
05
MLOps e Experimentos
Práticas e ferramentas para operar modelos de ML de forma 
confiável e reproduzível


---
## Página 25

M Ó D U L O  0 5   •   D E F I N I Ç Ã O
O que é MLOps?
Módulo 5 — MLOps
25 / 38
■
Conjunto de práticas que une ML, engenharia de software e operações
■
Trata o ciclo de vida do modelo como um pipeline reprodutível e versionado
■
Inclui dados, modelo, código, infraestrutura e métricas em um só processo
■
Reduz tempo entre experimento e produção e melhora qualidade no longo prazo
■
Sem MLOps, projetos ficam dependentes de uma única pessoa e quebram no 
deploy
Definição


---
## Página 26

M Ó D U L O  0 5   •   C O M P A R A Ç Ã O
MLOps x DevOps
Módulo 5 — MLOps
26 / 38
Aspecto
MLOps
DevOps
Foco principal
Ciclo de vida de modelos de ML
Ciclo de vida de software tradicional
Artefatos versionados
Dados, modelo, código e configurações
Código, dependências e infraestrutura
Métrica chave
Acurácia e drift do modelo em produção
Disponibilidade e tempo de resposta
Atualização típica
Retreinamento periódico do modelo
Releases incrementais de funcionalidade
Time envolvido
Cientistas, engenheiros de ML e plataforma
Engenheiros de software e operações


---
## Página 27

M Ó D U L O  0 5   •   P R Á T I C A S
Práticas essenciais de MLOps
Módulo 5 — MLOps
27 / 38
Versionamento
Versionar dados, modelos e código para reproduzir qualquer experimento
Experimentos rastreáveis
SageMaker Experiments registra parâmetros, métricas e artefatos por execução
Pipelines automatizados
Pipelines reproduzíveis levam dados a modelo em produção sem etapas manuais
Monitoramento contínuo
Acompanhar drift, qualidade e custo do modelo em tempo real após o deploy
Governança
Documentar decisões, riscos e responsáveis por cada modelo em uso


---
## Página 28

M Ó D U L O
06
SageMaker DeepAR
Algoritmo do SageMaker para previsão de séries temporais com 
redes neurais


---
## Página 29

M Ó D U L O  0 6   •  C O N C E I T O
O que é SageMaker DeepAR?
Módulo 6 — DeepAR
29 / 38
■
Algoritmo gerenciado do SageMaker para previsão de séries 
temporais
■
Baseado em redes neurais recorrentes, capaz de lidar com 
múltiplas séries
■
Aprende padrões compartilhados entre séries relacionadas 
dentro do mesmo dataset
■
Devolve previsões pontuais e intervalos de confiança para cada 
ponto futuro
■
Útil quando há centenas ou milhares de séries semelhantes a 
serem previstas
Definição
A L G O R I T M O
DeepAR
Permite treinar um único modelo sobre 
muitas séries semelhantes, com previsões 
probabilísticas e variáveis externas 
integradas.


---
## Página 30

M Ó D U L O  0 6   •   F U N C I O N A M E N T O
Como funciona o DeepAR
Módulo 6 — DeepAR
30 / 38
■
Recebe séries temporais alinhadas com mesmas datas e granularidade
■
Aprende um único modelo a partir de muitas séries relacionadas em conjunto
■
Pode incorporar variáveis externas como feriados, promoções ou clima
■
Treina e implanta dentro do SageMaker como qualquer outro algoritmo gerenciado
■
Retorna distribuição completa, permitindo análise probabilística da previsão
Definição


---
## Página 31

M Ó D U L O  0 6   •   A P L I C A Ç Õ E S
Mecanismo de atenção
Módulo 6 — DeepAR
31 / 38
■
Previsão de demanda em varejo com milhares de produtos ao 
longo do tempo
■
Estimativa de carga em redes elétricas, água, telecomunicações e 
logística
■
Planejamento financeiro com previsões de receita por filial, 
produto ou cliente
■
Operações com séries de muitos sensores ou pontos de coleta 
semelhantes
■
Cenários em que prever cada série isoladamente seria caro e 
impreciso
Ideia central
DeepAR é especialmente forte 
quando há muitas séries 
semelhantes para prever em 
conjunto.
Quanto maior o conjunto de séries 
relacionadas, mais o modelo aprende 
padrões compartilhados.


---
## Página 32

M Ó D U L O
07
Monitoramento e 
Retreinamento
Como acompanhar modelos em produção e decidir quando 
retreiná-los para manter qualidade


---
## Página 33

M Ó D U L O  0 7   •   C O N C E I T O
O que é monitoramento de modelos?
Módulo 7 — Monitoramento
33 / 38
■
Acompanhar continuamente o desempenho do modelo depois que ele entra em produção
■
Compara dados de entrada e saída com a distribuição vista durante o treinamento
■
Detecta drift de dados, drift de conceito, vieses e queda de qualidade
■
Sem monitoramento, modelos perdem qualidade em silêncio até o impacto chegar ao negócio
■
Aplicável tanto a modelos de previsão quanto a modelos generativos em uso
Definição


---
## Página 34

M Ó D U L O  0 7   •   R E T R E I N A M E N T O
Quando retreinar o modelo?
Módulo 7 — Monitoramento
34 / 38
Drift de dados
Distribuição dos dados de entrada mudou em relação ao que foi visto no treino
Drift de conceito
A relação entre entrada e saída mudou, o problema de negócio evoluiu
Queda de métricas
As métricas de qualidade caem abaixo do limite definido com o time de negócio
Cadência fixa
Retreinamento periódico programado, mesmo sem alerta, em domínios 
voláteis


---
## Página 35

M Ó D U L O  0 7   •   C I C L O  C O M P L E T O
Ciclo de monitoramento e retreinamento
Módulo 7 — Monitoramento
35 / 38
■
Cada modelo em produção precisa de uma rotina ativa de 
monitoramento contínuo
■
Limites claros para drift e métricas evitam decisões emocionais 
sobre retreino
■
Pipelines de retreinamento automatizam coleta, treino, avaliação 
e novo deploy
■
Sempre validar o novo modelo antes de promover, evitando 
regressões silenciosas
■
MLOps maduro automatiza esse ciclo e mantém qualidade ao 
longo dos meses
Definição
Ciclo de operação
monitorar
alertar
retreinar
implantar
O ciclo é contínuo e permite responder a mudanças 
do negócio ao longo do tempo


---
## Página 36

E N C E R R A M E N T O
Recapitulando os conceitos da aula
Encerramento
36 / 38
■
SageMaker HPO e Autopilot automatizam a busca pela melhor configuração de modelos
■
Adaptação de domínio combina pré-treino continuado e fine-tuning para o setor
■
Redução de dimensionalidade simplifica dados sem perder informação relevante
■
BLEU, ROUGE e BERTScore avaliam qualidade dos modelos generativos por ângulos diferentes
■
SageMaker Endpoints implantam modelos como APIs gerenciadas com autoscaling
■
MLOps une versionamento, experimentos e monitoramento em um ciclo confiável
■
DeepAR é o algoritmo do SageMaker para previsão de séries temporais em escala
■
Monitoramento detecta drift e dispara retreinamento para manter o modelo útil
 Explore na prática:
https://brianmonteiro54.github.io/Balaio-de-Gatos/aula13/


---
## Página 37

P e r g u n t a 1
Pergunta
37 / 38
(A) Versionamento apenas do código fonte
(B) Monitoramento contínuo e retreinamento periódico
(C) Deploy mais rápido do modelo
(D) Aumentar o número de épocas no treino original
Após implantar um modelo em produção, sua equipe percebe que a precisão caiu com o tempo. Qual prática de 
MLOps deveria ter sido implementada para detectar e corrigir esse problema?


---
## Página 38

P e r g u n t a 1
Pergunta
37 / 38
(A) Versionamento apenas do código fonte
(B) Monitoramento contínuo e retreinamento periódico
(C) Deploy mais rápido do modelo
(D) Aumentar o número de épocas no treino original
Após implantar um modelo em produção, sua equipe percebe que a precisão caiu com o tempo. Qual prática de 
MLOps deveria ter sido implementada para detectar e corrigir esse problema?
