# Encontro 11.pdf

*Convertido automaticamente de PDF*


---
## Página 1

Kendra e MLOps
Construindo
pipelines de IA na AWS
Amazon Kendra, ciclo de ML, EDA, Data Wrangler, Feature 
Store e Model Monitor


---
## Página 2

V I S Ã O  G E R A L  D A  A U L A
Agenda
Visão geral
2 / 38
01
Amazon Kendra
Busca corporativa inteligente baseada em IA
02
Ciclo de ML e Pipeline
Etapas para construir cargas de trabalho de ML
04
Data Wrangler e Feature Store
Preparação de dados e gestão centralizada de features
03
Coleta de Dados e EDA
Captura e exploração de dados para alimentar modelos
05
SageMaker Model Monitor
Acompanhamento de modelos em produção


---
## Página 3

M Ó D U L O
01
Amazon Kendra
Serviço de busca corporativa que entende perguntas em 
linguagem natural usando IA


---
## Página 4

M Ó D U L O  0 1   •   C O N C E I T O  I N I C I A L
O que é Amazon Kendra?
Módulo 1 — Amazon Kendra
4 / 38
Definição
■
Serviço gerenciado de busca corporativa que entende 
intenções e contexto das perguntas
■
Vai além da busca por palavras-chave compreendendo 
linguagem natural completa
■
Indexa documentos de várias fontes mantendo as permissões 
originais de acesso
■
Retorna respostas precisas, trechos relevantes ou documentos 
completos
Como Kendra responde
Documentos
Índice
Pergunta
Resposta


---
## Página 5

M Ó D U L O  0 1   •   C A P A C I D A D E S
Capacidades do Amazon Kendra
Módulo 1 — Amazon Kendra
5 / 38
■
Entende perguntas em linguagem natural e devolve a resposta exata quando possível
■
Indexa conteúdos em S3, SharePoint, Confluence, Salesforce e bancos de dados
■
Aprende com o uso, melhorando os resultados conforme os usuários interagem
■
Respeita permissões existentes para que cada usuário só veja o que pode acessar
Definição
Busca semântica
Compreende contexto e sinônimos, não 
depende de coincidência de palavras
Conectores
Mais de 40 conectores nativos para fontes 
corporativas comuns
Permissões
Filtros automáticos por usuário, grupo ou 
perfil de acesso


---
## Página 6

M Ó D U L O  0 1   •   P O S I C I O N A M E N T O
Kendra x busca tradicional
Módulo 1 — Amazon Kendra
6/ 38
■
Buscadores tradicionais retornam páginas que contêm as 
palavras digitadas
■
Kendra identifica intenção e devolve respostas diretas quando 
possível
■
Reconhece sinônimos, jargões e termos específicos do domínio 
da empresa
■
Reduz tempo gasto pelos usuários procurando informação em 
sistemas dispersos
■
Não substitui a busca tradicional, mas eleva a qualidade da 
experiência corporativa
Definição
D E S T A Q U E
Sem treinar
Kendra usa modelos pré-treinados pela 
AWS, dispensando esforço de treinar IA 
própria para começar a usar.


---
## Página 7

M Ó D U L O  0 1   •   C A S O S  D E  U S O
Onde aplicar o Kendra
Módulo 1 — Amazon Kendra
7 / 38
■
Empresas adotam Kendra para que funcionários encontrem 
informação rapidamente
■
Atende setores como atendimento, RH, jurídico, pesquisa e 
suporte técnico
■
Reduz dependência de consultas humanas a especialistas para 
perguntas comuns
■
É também a base de chatbots corporativos quando combinado 
com LLMs em RAG
■
Aumenta a produtividade ao centralizar conhecimento espalhado 
em silos
Definição
Setores que mais usam
Atendimento
Respostas a clientes via FAQs e bases 
internas
Recursos Humanos
Buscas em manuais, políticas e benefícios
Jurídico
Localização de cláusulas em contratos e 
processos
Pesquisa
Consulta a artigos científicos e relatórios 
técnicos


---
## Página 8

M Ó D U L O  0 1   •   C O M P A R A Ç Ã O
Amazon Kendra x Amazon OpenSearch
Módulo 1 — Amazon Kendra
8 / 38
Aspecto
Amazon Kendra
Amazon OpenSearch
Foco
Busca corporativa em linguagem 
natural
Busca, análise e observabilidade
Tipo de consulta
Pergunta natural com resposta 
direta
Palavra-chave, filtros e busca vetorial
Configuração
Pronto para uso, baixa configuração
Mais flexível, exige modelagem do índice
IA Generativa
Atendimento e knowledge bases 
corporativas
Logs, métricas e busca técnica


---
## Página 9

M Ó D U L O
02
Ciclo de Vida de ML
Visão geral das fases para construir, implantar e operar uma carga 
de trabalho de machine learning


---
## Página 10

M Ó D U L O  0 2   •   C O N C E I T O
Sequência de criação de uma carga de ML
Módulo 2 — Ciclo de Vida de ML
10 / 38
■
Toda carga de trabalho de ML segue uma sequência clara, do 
problema à operação
■
Começa com a definição do problema e das métricas de 
sucesso do negócio
■
Passa pelo desenvolvimento do modelo com dados, treino e 
avaliação
■
Termina com a implantação em produção e o monitoramento 
contínuo do desempenho
■
Sem essa visão de ciclo, projetos de ML viram experimentos 
isolados sem valor
Estrutura básica
Definir
Desenvolver
Operar
Definição


---
## Página 11

M Ó D U L O  0 2   •   E T A P A S
As 4 etapas do ciclo de ML
Módulo 2 — Ciclo de Vida de ML
11 / 38
1
Definir
Identificar problema de 
negócio, métricas de sucesso 
e disponibilidade de dados
2
Desenvolver
Coletar dados, treinar e 
avaliar o modelo até atingir 
desempenho aceitável
3
Implantar
Disponibilizar o modelo em 
endpoint ou pipeline para 
consumo da aplicação
4
Monitorar
Acompanhar performance 
em produção e retreinar 
quando os dados mudarem
O ciclo é iterativo: monitorar gera aprendizados que voltam para a etapa de definir


---
## Página 12

M Ó D U L O  0 2   •   A N A L O G I A
ML é como cozinhar
Módulo 2 — Ciclo de Vida de ML
12 / 38
Ingredientes
Os dados são os ingredientes do modelo: sem qualidade, o 
resultado decepciona.
Preparo
Treinar é o preparo: combinar ingredientes na ordem certa 
com o método correto.
Provar
Avaliar é provar antes de servir, garantindo que o resultado 
atende ao padrão.
Servir
Implantar e monitorar é servir e ouvir o feedback dos 
clientes para ajustar.


---
## Página 13

M Ó D U L O
03
Pipeline de ML em 
detalhe
As fases granulares de um pipeline de machine learning, da coleta 
ao monitoramento


---
## Página 14

M Ó D U L O  0 3   •   V O C A B U L Á R I O  E S S E N C I A L
Cinco etapas do pipeline de ML
Módulo 3 — Pipeline de ML
14 / 38
0 1
Coleta
Reunir dados de várias 
fontes em formato 
utilizável pelo pipeline
0 2
Preparação
Limpar, transformar e 
enriquecer os dados 
para alimentar o 
treinamento
0 3
Treinamento
Ajustar os parâmetros 
do modelo a partir dos 
dados preparados
0 4
Avaliação
Medir a qualidade do 
modelo em dados de 
teste antes de 
implantar
0 5
Implantação
Disponibilizar o modelo 
para consumo em 
produção e monitorar 
resultados


---
## Página 15

M Ó D U L O  0 3   •   C O N C E I T O  1  D E  5
Coleta de dados
Módulo 3 — Pipeline de ML
15 / 38
■
Captura de dados de várias fontes em formato adequado para 
análise e treino
■
Deve ser tratada como pipeline contínuo, não como atividade 
pontual de projeto
■
Inclui captura, validação, deduplicação e versionamento dos 
dados
■
A qualidade da coleta define o teto de qualidade do modelo final
■
Erros comuns incluem dados desatualizados, vieses e formatos 
inconsistentes
Definição
A N A L O G I A
Ingredientes
Sem ingredientes de qualidade, 
mesmo o melhor cozinheiro não faz 
boa comida em ML, dados ruins 
geram modelos ruins, sem exceção.


---
## Página 16

M Ó D U L O  0 3   •   C O N C E I T O  2  D E  5
Preparação de dados
Módulo 3 — Pipeline de ML
16 / 38
■
Etapa em que dados brutos viram dados utilizáveis para o 
treinamento do modelo
■
Costuma consumir 60% a 80% do tempo total de um projeto de 
ML
■
Inclui limpar valores ausentes, normalizar escalas e codificar 
variáveis
■
Também envolve dividir os dados em treino, validação e teste
■
Boa preparação reduz necessidade de algoritmos complexos no 
treinamento
Definição
Distinção essencial
Limpeza
Remover ruído, valores faltantes e 
inconsistências dos dados
Transformação
Ajustar formato, escala e representação 
para o algoritmo escolhido


---
## Página 17

M Ó D U L O  0 3   •   C O N C E I T O  3  D E  5
Treinamento do modelo
Módulo 3 — Pipeline de ML
17 / 38
■
Etapa em que o algoritmo processa os dados preparados e ajusta 
o modelo
■
Envolve definir algoritmo, hiperparâmetros e estratégia de 
validação
■
Usa grande capacidade computacional, em CPU, GPU ou 
hardware especializado
■
É comum testar várias combinações para encontrar a melhor 
configuração
■
O resultado é um artefato de modelo pronto para avaliação e 
implantação
Definição
Características
Algoritmo
Define como o modelo aprende com os 
dados
Hiperparâmetros
Configurações do algoritmo, ajustadas em 
tuning
Hardware
CPU, GPU ou aceleradores conforme o 
modelo
Tempo
Horas, dias ou semanas dependendo do 
volume


---
## Página 18

M Ó D U L O  0 3   •   C O N C E I T O  4  D E  5
Avaliação do modelo
Módulo 3 — Pipeline de ML
18 / 38
■
Etapa em que medimos a qualidade do modelo em dados que ele 
não viu durante o treino
■
Garante que o modelo generaliza, em vez de apenas decorar os 
exemplos
■
Usa métricas alinhadas ao tipo de problema e ao impacto no 
negócio
■
Métricas isoladas não bastam; o modelo precisa ser avaliado em 
cenários reais
■
Resultados ruins na avaliação exigem voltar para preparação ou 
treinamento
Definição
M É T R I C A S   ×
P R I N C I P A I S
Classificação
Treinamento: Acerto, precisão, recall
Inferência: F1-score e matriz de confusão
Regressão
Treinamento: Erro médio absoluto e RMSE
Inferência: R² para variância explicada
Negócio
Treinamento: Receita gerada, fraudes 
detectadas
Inferência: Métricas conectadas ao impacto


---
## Página 19

M Ó D U L O  0 3   •   C O N C E I T O  5  D E  5
Implantação e monitoramento
Módulo 3 — Pipeline de ML
19 / 38
■
Implantação coloca o modelo em ambiente acessível pelas aplicações
■
Pode ocorrer como endpoint em tempo real, em lote ou em dispositivos
■
Requer atenção a versionamento, escalabilidade e segurança do endpoint
■
Monitorar é acompanhar o modelo em produção para detectar desvios
■
Sem monitoramento, modelos perdem qualidade silenciosamente com o tempo
Definição


---
## Página 20

M Ó D U L O
04
Coleta de Dados
Como capturar e gerenciar dados de qualidade para alimentar 
pipelines de machine learning


---
## Página 21

M Ó D U L O  0 4   •  P R I N C Í P I O S
Coleta como pipeline contínuo
Módulo 4 — Coleta de Dados
21 / 38
■
A coleta deve ser pensada como pipeline contínuo, com 
responsáveis e cadência claros
■
Dados envelhecem rápido, exigindo atualização e revalidação 
periódicas
■
Cada nova fonte adiciona complexidade e precisa ser tratada 
como peça do pipeline
■
Sem governança, dados se acumulam sem qualidade e geram 
retrabalho constante
■
Pipelines bem definidos viabilizam reuso e aceleram novos 
projetos de ML
Definição
Pipeline
Coleta é fluxo contínuo, não evento isolado 
de projeto
Contínuo
Dados envelhecem, mudam e exigem 
atualização constante


---
## Página 22

M Ó D U L O  0 4   •   A R M A D I L H A S
Erros comuns na coleta de dados
Módulo 4 — Coleta de Dados
22 / 38
■
Coletar dados desatualizados que não refletem a realidade atual do negócio
■
Ignorar vieses históricos presentes nos dados que podem ser amplificados pelo modelo
■
Misturar formatos e padrões inconsistentes entre fontes diferentes
■
Não validar a qualidade dos dados antes de avançar para a preparação
■
Subestimar volume necessário para que o modelo generalize com confiança
Definição


---
## Página 23

M Ó D U L O  0 4   •   B O A S  P R Á T I C A S
Boas práticas de coleta de dados
Módulo 4 — Coleta de Dados
23 / 38
Boas práticas
■
Definir claramente quais dados coletar antes de 
começar
■
Versionar todos os datasets utilizados em treino e 
avaliação
■
Documentar origem, frequência e responsável por 
cada fonte
■
Validar qualidade automaticamente em cada nova 
carga
■
Estabelecer rotinas de atualização periódica das 
bases
A evitar
■
Coletar tudo sem critério e decidir o uso depois
■
Misturar dados de teste e treino sem 
rastreabilidade
■
Usar amostras pequenas para representar 
populações inteiras
■
Tratar coleta como tarefa única e não como 
pipeline
■
Ignorar requisitos de privacidade e governança dos 
dados


---
## Página 24

M Ó D U L O
05
Análise Exploratória (EDA)
Investigando os dados antes de modelar para entender padrões, 
qualidade e relações


---
## Página 25

M Ó D U L O  0 5   •   D E F I N I Ç Ã O
O que é Análise Exploratória?
Módulo 5 — EDA
25 / 38
■
Sigla para Exploratory Data Analysis, ou análise exploratória de dados
■
Etapa em que investigamos os dados sem hipóteses fixas, deixando os números 
falarem
■
Combina estatísticas descritivas com visualizações para entender o conjunto
■
Revela padrões, anomalias e relações entre variáveis antes do treinamento
■
Dispensável apenas em pipelines maduros com dados muito conhecidos
Definição


---
## Página 26

M Ó D U L O  0 5   •   C O M P A R A Ç Ã O
EDA x Análise final
Módulo 5 — EDA
26 / 38
Aspecto
EDA
Análise final
Quando ocorre
Antes do treinamento do modelo
Após implantar e operar o modelo
Objetivo
Entender dados sem hipóteses fixas
Validar resultado e medir impacto
Ferramentas
Pandas, Matplotlib, Seaborn, Data Wrangler
Painéis, dashboards e relatórios executivos
Saídas
Insights sobre estrutura e qualidade
Decisões e ajustes em produção
Audiência
Cientistas de dados e engenheiros de ML
Stakeholders, gestores e área de negócio


---
## Página 27

M Ó D U L O  0 5   •   A P L I C A B I L I D A D E
Quando aplicar EDA?
Módulo 5 — EDA
27 / 38
Início de projeto
Sempre que conhecemos pouco a fundo o conjunto de dados disponível
Após coleta nova
Quando uma fonte nova é incorporada ao pipeline de dados
Antes de modelar
Para escolher variáveis, transformações e estratégia de treino
Em problemas teimosos
Quando o modelo não converge ou tem desempenho abaixo do esperado
Comunicar negócio
Para apresentar achados a stakeholders antes de investir em modelagem


---
## Página 28

M Ó D U L O
06
Data Wrangler e Feature 
Store
Preparação visual de dados e gestão centralizada de features para 
treinamento e inferência


---
## Página 29

M Ó D U L O  0 6   •   C O N C E I T O
O que é SageMaker Data Wrangler?
Módulo 6 — Data Wrangler e Feature Store
29 / 38
■
Ferramenta visual do SageMaker Studio para preparar dados sem 
escrever muito código
■
Conecta-se a fontes como S3, Athena, Redshift, Snowflake e 
Salesforce
■
Inclui mais de 300 transformações prontas para limpeza, escalas 
e codificações
■
Permite visualizar distribuições e detectar problemas durante a 
preparação
■
Exporta o fluxo de transformações como código para reuso em 
pipelines de produção
Definição
P O R  Q U E  U S A R
Wrangler
Reduz drasticamente o tempo de 
preparação de dados ao combinar 
interface visual, mais de 300 
transformações prontas e exportação 
direta para pipelines de produção.


---
## Página 30

M Ó D U L O  0 6   •   F L U X O
Etapas no Data Wrangler
Módulo 6 — Data Wrangler e Feature Store
30 / 38
■
Importar dados de uma ou várias fontes conectadas pelo Data Wrangler
■
Explorar com estatísticas e visualizações para entender o conjunto
■
Aplicar transformações encadeadas em uma sequência reproduzível
■
Validar resultado da preparação antes de exportar o fluxo
■
Exportar para um pipeline de produção como código ou job recorrente
Definição


---
## Página 31

M Ó D U L O  0 6   •   G E S T Ã O  D E  F E A T U R E S
SageMaker Feature Store
Módulo 6 — Data Wrangler e Feature Store
31 / 38
■
Repositório centralizado para armazenar, versionar e 
compartilhar features de ML
■
Garante que a mesma feature seja usada no treino e na 
inferência sem divergência
■
Suporta dois modos: online para baixa latência e offline para 
treinamento em lote
■
Permite que múltiplos times reutilizem features sem recalcular 
tudo do zero
■
Reduz erros causados por inconsistências entre dados de treino e 
produção
Ideia central
Features bem gerenciadas evitam 
retrabalho entre treino e inferência e 
mantêm consistência ao longo do 
ciclo.
Inconsistência entre features de treino 
e produção é causa comum de 
degradação silenciosa de modelos.


---
## Página 32

M Ó D U L O
07
SageMaker Model 
Monitor
Acompanhamento contínuo de modelos em produção para 
detectar desvios e degradação


---
## Página 33

M Ó D U L O  0 7   •   C O N C E I T O
O que é SageMaker Model Monitor?
Módulo 7 — Model Monitor
33 / 38
■
Serviço gerenciado do SageMaker para monitorar modelos depois de implantados
■
Compara dados de produção com a distribuição original usada no treinamento
■
Detecta desvios em dados, qualidade do modelo, vieses e atribuição de features
■
Gera alertas quando os desvios ultrapassam limites configurados pelo time
■
Integra-se com SageMaker Endpoints sem precisar mudar o código da aplicação
Definição


---
## Página 34

M Ó D U L O  0 7   •   I M P O R T Â N C I A
Por que monitorar modelos?
Módulo 7 — Model Monitor
34 / 38
Mudanças nos dados
Dados de produção mudam com o tempo, e o modelo deixa de representá-los
Queda silenciosa
Sem monitoramento, qualidade cai sem ninguém perceber até dar problema
Decisões críticas
Modelos influenciam decisões sensíveis em finanças, saúde e segurança
Compliance e auditoria
Reguladores exigem evidência contínua de que modelos operam dentro do 
esperado


---
## Página 35

M Ó D U L O  0 7   •   A R Q U I T E T U R A
Como funciona o Model Monitor
Módulo 7 — Model Monitor
35 / 38
■
Captura uma linha de base estatística a partir dos dados originais 
de tdadosnamento
■
Coleta amostras das requisições reais que chegam ao endpoint 
em produção
■
Compara as duas distribuições para detectar desvios de dados ou 
de qualidade
■
Gera relatórios periódicos e dispara alertas quando os limites são 
ultrapassados
■
Permite ao time decidir entre retreinar, ajustar regras ou 
investigar a causa
Definição
Fluxo de monitoramento
rei
modelo
drift
alerta
Da linha de base ao alerta de desvio em produção


---
## Página 36

E N C E R R A M E N T O
Recapitulando os conceitos da aula
Encerramento
36 / 38
■
Amazon Kendra entrega busca corporativa em linguagem natural com base em IA
■
O ciclo de ML tem quatro etapas: definir, desenvolver, implantar e monitorar
■
Pipeline de ML granular cobre coleta, preparação, treinamento, avaliação e implantação
■
Coleta de dados é processo contínuo, e qualidade dos dados define teto do modelo
■
EDA investiga os dados antes de modelar para evitar surpresas no treino
■
SageMaker Data Wrangler acelera preparação de dados com interface visual
■
SageMaker Feature Store centraliza features para treino e inferência consistentes
■
SageMaker Model Monitor detecta drift e degradação de modelos em produção


---
## Página 37

P e r g u n t a 1
Pergunta
37 / 38
(A) SageMaker Data Wrangler
(B) SageMaker Feature Store
(C) SageMaker Model Monitor
(D) Amazon Kendra
Em um projeto de ML, uma equipe descobriu que após o deploy a precisão do modelo caiu drasticamente devido a 
mudanças nos dados em produção. Qual ferramenta da AWS deveria ter sido usada para detectar esse problema?


---
## Página 38

P e r g u n t a 1
Pergunta
38 / 38
(A) SageMaker Data Wrangler
(B) SageMaker Feature Store
(C) SageMaker Model Monitor
(D) Amazon Kendra
Em um projeto de ML, uma equipe descobriu que após o deploy a precisão do modelo caiu drasticamente devido a 
mudanças nos dados em produção. Qual ferramenta da AWS deveria ter sido usada para detectar esse problema?
