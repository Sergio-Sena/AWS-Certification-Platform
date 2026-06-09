# Material_Aluno_Encontro11.pdf

*Convertido automaticamente de PDF*


---
## Página 1

Instrutora Josely Castro    
1 
 
M A T E R I A L  D O  A L U N O  
 
 
Kendra e MLOps 
Construindo pipelines de IA na AWS 
Instrutora Josely Castro 
Guia de Estudos Completo — Encontro 11 
 
 


---
## Página 2

Instrutora Josely Castro    
2 
Visão Geral — Agenda do Encontro 11 
Este guia é o seu material de apoio completo para o Encontro 11. Ele foi pensado para ir muito 
além do que foi apresentado em aula: aqui você encontrará explicações aprofundadas, exemplos 
do mundo real, comparações detalhadas, erros comuns a evitar e conexões diretas com o mercado 
de trabalho e com as certificações AWS. 
Sempre que aparecer um termo técnico em inglês, ele estará explicado em um bloco de destaque 
roxo — assim você aprende o conteúdo e o vocabulário do mercado ao mesmo tempo. 
 
Módulo 
Tema 
Termos-Chave em Inglês 
01 
Amazon Kendra 
Semantic Search, NLP, Connectors, Feedback Loop, Index 
02 
Ciclo de Vida de 
ML 
ML, Deploy, Drift, Concept Drift, Iterative Process 
03 
Pipeline de ML 
Pipeline, MLOps, Preprocessing, Algorithm, Hyperparameters, 
GPU 
04 
Coleta de Dados 
Dataset, Versioning, Data Leakage, Missing Values, Bias, 
Freshness 
05 
EDA 
EDA, Outliers, Distribution, Correlation, Feature Leaker, 
Cardinality 
06 
Data Wrangler e 
Feature Store 
Feature, Encoding, Normalization, Feature Store, Online/Offline 
Store, Skew 
07 
Model Monitor 
Data Drift, Baseline, Sampling, Model Degradation, Compliance, 
PSI 
 
M Ó D U L O  0 1  
Amazon Kendra 
 
Serviço de busca corporativa inteligente baseada em IA 
O que é Amazon Kendra — Conceito e Contexto 
Para entender o valor do Amazon Kendra, é preciso primeiro entender o problema que ele resolve. 
Empresas de médio e grande porte acumulam conhecimento espalhado em dezenas de sistemas 
diferentes: manuais no SharePoint, políticas no Confluence, contratos no Salesforce, relatórios no 
S3, artigos em bases de dados internas. Quando um colaborador precisa de uma informação com 
urgência, onde ele começa a procurar? 
Pesquisas do setor indicam que colaboradores gastam em média 20% da sua jornada de trabalho 
apenas procurando informações que já existem dentro da própria empresa. São duas horas por 
dia, todos os dias, perdidas em buscas improdutivas. O Kendra foi criado para resolver exatamente 
esse problema. 
 
TERMO TÉCNICO  Semantic Search  |  Busca Semântica 


---
## Página 3

Instrutora Josely Castro    
3 
Tipo de busca que compreende o significado e a intenção por trás de uma pergunta, não 
apenas as palavras literais digitadas. Utiliza modelos de NLP para mapear o texto em um 
espaço de significados, onde perguntas e documentos com significados similares ficam 
próximos — mesmo que usem palavras completamente diferentes. 
 
TERMO TÉCNICO  NLP — Natural Language Processing  |  Processamento de Linguagem 
Natural 
Área da inteligência artificial dedicada a ensinar computadores a ler, compreender e interpretar 
a linguagem humana. Abrange desde tarefas simples como identificar idioma e extrair palavras-
chave, até tarefas complexas como compreender sarcasmo, ambiguidade e contexto cultural. É 
a tecnologia central do Kendra, do ChatGPT e de qualquer sistema que processa texto. 
 
TERMO TÉCNICO  Index — Índice  |  Estrutura de Dados para Busca Rápida 
No contexto do Kendra, o índice é a estrutura criada pelo serviço a partir dos seus documentos, 
que permite buscas rápidas e semânticas. Diferente de um índice de palavras-chave simples, o 
índice do Kendra armazena representações semânticas do conteúdo de cada documento. 
 
DEFINIÇÃO COMPLETA 
Amazon Kendra é um serviço gerenciado de busca empresarial baseado em machine learning 
que usa técnicas avançadas de NLP para compreender perguntas em linguagem natural e 
retornar: (1) respostas diretas extraídas do texto, (2) trechos relevantes do documento, ou (3) 
documentos ranqueados por relevância — sem precisar treinar nenhum modelo. 
 
O Problema de Negócio que o Kendra Resolve 
Veja como o mesmo cenário se resolve com busca tradicional versus com o Kendra: 
Situação 
Busca Tradicional 
Amazon Kendra 
Funcionário 
pergunta: 'Qual é 
a política de 
reembolso de 
despesas de 
viagem?' 
Retorna 340 documentos que 
contêm as palavras 'política', 
'reembolso', 'despesas' ou 'viagem' 
Retorna o trecho exato da política 
de reembolso com o valor máximo 
por categoria 
Agente de 
atendimento: 
'Cliente quer saber 
prazo de garantia 
do produto X' 
Retorna o catálogo de produtos 
completo e os termos gerais de 
garantia 
Extrai diretamente: 'Produto X tem 
garantia de 24 meses contra 
defeitos de fabricação' 
RH: 'Funcionário 
pergunta quantos 
dias de férias tem 
direito' 
Lista todos os documentos do 
manual do funcionário 
Retorna: 'Funcionários com mais 
de 1 ano têm direito a 30 dias 
corridos de férias' 
 
Arquitetura Interna — Como o Kendra Processa uma Pergunta 
O processamento de uma pergunta no Kendra segue estas etapas internas: 


---
## Página 4

Instrutora Josely Castro    
4 
• Tokenização e análise linguística: a pergunta é dividida em tokens (palavras e partes de 
palavras) e analisada gramaticalmente para identificar substantivos, verbos e relações 
sintáticas. 
• Compreensão de intenção: o modelo NLP classifica a intenção da pergunta — está pedindo 
um fato, uma instrução, uma comparação ou um documento? 
• Vetorização semântica: a pergunta é transformada em um vetor numérico que representa seu 
significado no espaço semântico do modelo. 
• Busca no índice: o Kendra compara o vetor da pergunta com os vetores de todos os 
documentos indexados, identificando os mais semanticamente próximos. 
• Extração e ranqueamento: dos documentos recuperados, o Kendra extrai os trechos mais 
relevantes e os ranqueia por confiança de resposta. 
• Retorno ao usuário: resposta direta (quando possível), trechos relevantes e lista de 
documentos ranqueados. 
Capacidades Técnicas do Amazon Kendra 
TERMO TÉCNICO  Connector  |  Conector de Fonte de Dados 
Componente de software pré-construído que permite ao Kendra conectar-se a um sistema 
externo e importar seus documentos automaticamente. Cada conector sabe como autenticar no 
sistema de origem, navegar pela estrutura de arquivos ou banco de dados, extrair o conteúdo 
de cada documento e respeitar as permissões de acesso originais. 
 
TERMO TÉCNICO  Feedback Loop  |  Ciclo de Retroalimentação / Aprendizado com Uso 
Mecanismo em que o sistema melhora continuamente com base nas reações dos usuários. No 
Kendra: quando um usuário clica em um resultado, o sistema reforça aquele ranqueamento 
para buscas similares. Quando ignora os resultados e reformula a pergunta, o sistema aprende 
que os resultados não foram satisfatórios. Com o tempo, a qualidade das respostas melhora 
para os termos e padrões de busca específicos da empresa. 
 
Os Quatro Pilares de Capacidade 
1 — Busca Semântica com Compreensão de Sinônimos e Jargão 
O Kendra vai além de sinônimos simples. Ele aprende o vocabulário específico da empresa. Se na 
sua empresa 'CCT' é o Contrato Coletivo de Trabalho, e os colaboradores frequentemente usam 
esse acrônimo, o Kendra aprende essa associação com o uso. Isso é especialmente valioso em 
setores técnicos como jurídico, médico e de engenharia, onde o jargão é muito específico. 
 
2 — Conectores para 40+ Fontes Corporativas 
Os conectores nativos do Kendra cobrem as principais plataformas corporativas: 
• Armazenamento em nuvem: Amazon S3, Google Drive, OneDrive, Box 
• Colaboração e intranet: Confluence (Server e Cloud), SharePoint (Online e Server 2013-
2019) 
• CRM e ITSM: Salesforce, ServiceNow, Zendesk 
• Bases de dados: Amazon RDS, Aurora — o Kendra pode indexar conteúdo de tabelas 
• Outros: GitHub (documentação de código), Quip, sites via Web Crawler 
 


---
## Página 5

Instrutora Josely Castro    
5 
3 — Access Control — Controle de Acesso Granular 
O Kendra respeita e propaga as permissões originais de cada documento. Se um contrato no 
SharePoint está restrito ao grupo 'Diretoria Financeira', quando um analista de outro departamento 
fizer uma busca, esse documento simplesmente não aparecerá nos resultados. Isso é chamado de 
Permission-aware Search — Busca com Ciência de Permissões, e é um requisito crítico para a 
adoção corporativa de qualquer sistema de busca. 
 
4 — Tipos de Resposta Retornados 
Tipo de 
Resposta 
Quando é Retornado 
Exemplo 
Resposta direta 
(Factoid) 
Quando o modelo 
identifica com alta 
confiança um trecho 
que responde 
diretamente 
'Qual o CNPJ da empresa?' → retorna o número 
diretamente 
Resposta de 
FAQ 
Quando existe uma 
pergunta-resposta 
explicitamente 
cadastrada 
Perguntas do tipo 'Como faço para...' com 
respostas pré-definidas 
Trecho 
relevante 
(Passage) 
Quando há contexto 
relevante mas sem 
resposta direta extraível 
Retorna o parágrafo mais relevante do 
documento mais pertinente 
Documentos 
ranqueados 
Para buscas amplas 
sem resposta direta 
Lista de documentos ordenados por relevância 
semântica 
Kendra x Busca Tradicional x OpenSearch — 
Comparação Detalhada 
Por que a Busca por Palavra-Chave Falha em Ambientes Corporativos 
A busca por palavra-chave foi desenvolvida nos anos 1970 e funciona bem para buscas simples e 
diretas. Mas o ambiente corporativo tem características que a tornam inadequada: 
• Inconsistência de vocabulário: o departamento jurídico fala em 'rescisão contratual', o RH fala 
em 'desligamento', o financeiro fala em 'encerramento de vínculo' — todas referindo o mesmo 
evento. 
• Documentos longos e complexos: um contrato de 80 páginas contém centenas de termos em 
cada página. A busca por palavra-chave não sabe qual parágrafo é relevante. 
• Perguntas em linguagem natural: usuários corporativos não são treinados em técnicas de 
busca como os desenvolvedores. Eles digitam perguntas completas como fariam para um 
colega. 
• Ausência de ranqueamento por relevância real: todos os documentos que contêm as palavras 
recebem o mesmo peso básico, sem considerar contexto ou qualidade da resposta. 
 
Kendra x OpenSearch — Quando Usar Cada Um 
Essa é uma das comparações mais cobradas nas certificações AWS. A confusão é compreensível 
porque ambos são 'serviços de busca'. A diferença está no propósito: 


---
## Página 6

Instrutora Josely Castro    
6 
Critério 
Amazon Kendra 
Amazon OpenSearch Service 
Propósito central 
Busca corporativa — ajudar 
pessoas a encontrar informação em 
documentos internos 
Busca técnica, análise de logs, 
observabilidade de sistemas 
Tipo de consulta 
Pergunta em linguagem natural: 
'Como solicito férias?' 
Query estruturada: logs entre datas 
X e Y com status 500 
Usuário típico 
Funcionário, agente de 
atendimento, pesquisador 
Engenheiro de plataforma, SRE, 
time de operações 
IA embarcada 
NLP pré-treinado pela AWS para 
compreensão de linguagem 
KNN para busca vetorial, ML para 
detecção de anomalias 
Configuração 
Baixa — conecta fontes e indexa 
automaticamente 
Alta — define mapeamentos, 
shards, réplicas, índices 
Casos de uso 
típicos 
Knowledge base, chatbot 
corporativo, pesquisa interna 
Elasticsearch de logs, APM, SIEM, 
busca de e-commerce 
 
REGRA DE OURO PARA PROVAS 
Se a questão menciona: 'usuários fazem perguntas em linguagem natural', 'documentos 
internos corporativos', 'FAQ', 'knowledge base corporativa' → Amazon Kendra. Se menciona: 
'logs de aplicação', 'métricas', 'observabilidade', 'busca full-text com filtros avançados' → 
Amazon OpenSearch. 
 
MERCADO DE TRABALHO — KENDRA 
Kendra aparece frequentemente em arquiteturas de: (1) Assistentes virtuais corporativos 
combinados com LLMs via RAG, (2) Plataformas de knowledge management, (3) Sistemas de 
onboarding de novos colaboradores. Vagas que mencionam Kendra costumam ser de Arquiteto 
de Soluções AWS, Engenheiro de IA/NLP ou Líder Técnico de projetos de IA generativa. 
 
 
M Ó D U L O  0 2  
Ciclo de Vida de ML 
 
Visão geral das fases para construir, implantar e operar machine learning 
Por que o Ciclo de Vida de ML Importa 
Antes de detalhar as etapas, é fundamental entender por que o ciclo existe — e por que tantos 
projetos de ML fracassam sem ele. 
Uma pesquisa da Gartner de 2022 apontou que entre 80% e 85% dos projetos de ML e IA nunca 
chegam a produção ou são descontinuados logo após o lançamento. As causas não são 
tecnológicas — os algoritmos existem, a computação está disponível. As causas são processuais: 
falta de alinhamento com o negócio, dados de baixa qualidade, ausência de monitoramento, falta 
de processo iterativo. 


---
## Página 7

Instrutora Josely Castro    
7 
O ciclo de vida de ML não é burocracia. É o conjunto de práticas que separa experimentos que 
ficam em notebooks de projetos que geram valor real para o negócio. 
 
TERMO TÉCNICO  ML — Machine Learning  |  Aprendizado de Máquina 
Subcampo da inteligência artificial em que algoritmos aprendem padrões a partir de dados 
históricos, sem serem explicitamente programados para cada regra. O modelo descobre 
sozinho as relações entre variáveis olhando para exemplos. Existem três paradigmas principais: 
aprendizado supervisionado (com exemplos rotulados), não supervisionado (sem rótulos) e por 
reforço (aprendendo por tentativa e erro com recompensas). 
 
TERMO TÉCNICO  Deploy  |  Implantação em Produção 
Ato de colocar um modelo treinado em um ambiente real, acessível por usuários ou sistemas de 
produção. Envolve: empacotar o modelo, provisioná-lo em infraestrutura adequada, criar a API 
de acesso (endpoint), configurar escalabilidade, logging e monitoramento. É o ponto em que o 
trabalho de desenvolvimento se torna valor de negócio. 
 
TERMO TÉCNICO  Iterative Process  |  Processo Iterativo 
Abordagem em que um processo não é executado linearmente de uma única vez, mas sim em 
ciclos repetidos de refinamento. Em ML, isso significa que você vai e volta entre as etapas: 
testa o modelo, descobre um problema nos dados, volta para a preparação, retreina, avalia de 
novo. A qualidade melhora a cada iteração. 
 
As 4 Etapas em Profundidade 
Etapa 1 — Definir: O Alinhamento com o Negócio 
Esta é a etapa mais subestimada e mais importante. Antes de qualquer dado ou código, você 
precisa responder com precisão: 
• Qual é exatamente o problema de negócio? (Não 'queremos ML', mas 'queremos reduzir em 
20% o índice de inadimplência nos contratos de crédito pessoal') 
• Como vamos medir o sucesso? Qual métrica de negócio importa? (Não só acurácia do 
modelo, mas receita gerada, fraudes evitadas, tempo economizado) 
• Temos dados suficientes e de qualidade para resolver isso com ML? (ML não resolve 
problemas sem dados históricos relevantes) 
• ML é realmente a abordagem certa? (Às vezes uma regra simples resolve melhor e mais 
barato) 
• Qual é o custo de um erro? (Um falso negativo num diagnóstico de câncer é muito mais caro 
que um falso positivo) 
 
Times que pulam essa etapa chegam ao final com modelos que tecnicamente funcionam mas que 
o negócio não adota — porque o problema errado foi resolvido, ou porque as métricas de sucesso 
nunca foram definidas claramente. 
 
Etapa 2 — Desenvolver: Dados, Experimentos e Modelo 
Esta etapa contém o pipeline técnico completo (que veremos em detalhe no Módulo 03): coleta de 
dados, análise exploratória, preparação, treinamento, avaliação e refinamento iterativo. É aqui que 


---
## Página 8

Instrutora Josely Castro    
8 
mais tempo é gasto e onde mais experimentos acontecem. Um único projeto pode ter dezenas de 
iterações de treino-avaliação antes de chegar a um modelo satisfatório. 
 
Etapa 3 — Implantar: Do Notebook para a Produção 
Implantar um modelo de ML é muito diferente de implantar um software convencional. Além dos 
desafios típicos de deploy (disponibilidade, escalabilidade, segurança), existe um conjunto de 
desafios específicos de ML: 
• Reprodutibilidade: o modelo deve produzir os mesmos resultados para as mesmas entradas, 
independente do ambiente 
• Versionamento: qual versão do modelo está em produção? É possível fazer rollback para a 
versão anterior? 
• Latência vs. custo: um modelo mais preciso frequentemente é mais lento e caro; qual o 
equilíbrio certo para o caso de uso? 
• Shadow deployment: técnica de colocar o novo modelo para rodar em paralelo sem afetar o 
resultado real, para comparar com o modelo atual antes da virada 
• Canary release: técnica de direcionar apenas uma pequena porcentagem do tráfego para o 
novo modelo antes de migrar completamente 
 
Etapa 4 — Monitorar: O Ciclo Nunca Acaba 
O monitoramento fecha o ciclo e o reinicia quando necessário. Sem monitoramento, projetos de ML 
se tornam bombas relógio: funcionam bem no lançamento e vão silenciosamente piorando com o 
tempo, até que alguém percebe que algo está muito errado — geralmente quando o dano já 
aconteceu. 
 
TERMO TÉCNICO  Drift  |  Desvio / Deriva 
Fenômeno em que os dados ou comportamentos de produção divergem progressivamente dos 
dados usados no treinamento. Existem dois tipos principais: Data Drift (as características dos 
dados de entrada mudaram) e Concept Drift (a relação entre as features e o que o modelo deve 
prever mudou). O drift é inevitável em qualquer sistema de ML com o passar do tempo. 
 
Etapa 
Entradas 
Saídas 
Sinal de que está errada 
Definir 
Problema de 
negócio, dados 
disponíveis, KPIs 
Critérios de sucesso 
claros, escopo delimitado 
O modelo pronto não 
interessa ao negócio 
Desenvolver 
Dados brutos, 
critérios de 
sucesso 
Modelo avaliado e 
aprovado, artefatos 
versionados 
Modelo não passa na 
avaliação repetidamente 
Implantar 
Modelo aprovado, 
infraestrutura 
target 
Endpoint funcional, 
pipeline de 
monitoramento ativo 
Erros em produção, latência 
inaceitável 
Monitorar 
Dados de 
produção, 
baseline do 
modelo 
Alertas, relatórios de 
drift, decisão de retreino 
Degradação não detectada 
até virar crise 
 


---
## Página 9

Instrutora Josely Castro    
9 
RESUMO DO MÓDULO 02 
Ciclo de ML: 4 etapas iterativas (Definir → Desenvolver → Implantar → Monitorar). 80-85% dos 
projetos falham por falta de processo, não de tecnologia. Cada etapa tem entradas, saídas e 
sinais de falha. O drift é inevitável — o monitoramento é o que fecha o ciclo de forma saudável. 
 
 
M Ó D U L O  0 3  
Pipeline de ML em Detalhe 
 
As 5 fases granulares de um pipeline de machine learning 
Pipeline de ML — O que é e Por que Automatizar 
TERMO TÉCNICO  Pipeline  |  Fluxo de Etapas Automatizadas e Encadeadas 
Sequência de processos onde a saída de cada etapa é automaticamente a entrada da próxima. 
O termo vem da analogia com oleodutos de petróleo. Em ML, um pipeline garante que o 
processo de transformar dados brutos em modelo implantado seja reprodutível, automatizado e 
auditável. Sem pipeline, cada execução é manual e sujeita a variações. 
 
TERMO TÉCNICO  MLOps — Machine Learning Operations  |  Operações de Machine 
Learning 
Disciplina que aplica os princípios de DevOps (automação, entrega contínua, monitoramento) 
ao ciclo de vida de modelos de ML. Um time de MLOps constrói os pipelines de treinamento e 
deploy, garante que os modelos sejam monitorados continuamente, automatiza o retreino e 
mantém a qualidade ao longo do tempo. É uma das funções de mais alta demanda no mercado 
de dados atual. 
 
Um pipeline de ML bem construído garante três propriedades fundamentais: 
• Reprodutibilidade — Reproducibility: dado os mesmos dados de entrada, o pipeline sempre 
produz o mesmo modelo. Isso é essencial para auditoria e para diagnosticar problemas. 
• Rastreabilidade — Traceability / Lineage: você sabe exatamente quais dados, qual código e 
quais hiperparâmetros produziram cada versão do modelo. 
• Automatização — Automation: o pipeline roda sem intervenção manual a cada novo ciclo de 
retreinamento, reduzindo erros humanos e acelerando a entrega. 
 
Etapa 
Nome Técnico 
% do Tempo 
em Projetos 
Reais 
Ferramentas AWS Principais 
01 
Coleta — Data 
Collection 
5-10% 
S3, AWS Glue, Kinesis Data Streams, DMS, 
AppFlow 
02 
Preparação — 
Preprocessing 
60-80% 
SageMaker Data Wrangler, AWS Glue 
DataBrew, EMR 


---
## Página 10

Instrutora Josely Castro    
10 
03 
Treinamento — 
Model Training 
10-20% 
SageMaker Training Jobs, Debugger, HPO, 
Spot Instances 
04 
Avaliação — 
Model Evaluation 
5-10% 
SageMaker Experiments, Clarify, Model 
Registry 
05 
Deploy + 
Monitoramento 
Contínuo 
SageMaker Endpoints, Batch Transform, Model 
Monitor 
 
Etapa 1 — Coleta de Dados em Detalhe 
A coleta parece simples — 'vamos baixar os dados'. Na prática, é uma das etapas mais complexas 
e propensas a problemas silenciosos. Dados de fontes corporativas raramente chegam limpos, 
completos e no formato certo. 
Fontes Comuns em Projetos Corporativos 
Tipo de 
Fonte 
Exemplos 
Desafios Típicos 
Bancos 
transacionais 
PostgreSQL, MySQL, 
SQL Server, Oracle 
CDC (Change Data Capture), joins complexos, 
volume alto 
Data 
warehouses 
Amazon Redshift, 
Snowflake, BigQuery 
Custo de consultas, latência de carga, cotas 
Sistemas 
legados 
ERP (SAP, TOTVS), 
mainframes, sistemas 
próprios 
APIs antigas, formatos proprietários, sem 
documentação 
Streaming de 
eventos 
Kinesis, Kafka, SQS 
Volume enorme, janelas de tempo, dados fora de 
ordem 
APIs externas 
REST APIs, feeds, open 
data, redes sociais 
Limites de taxa, SLA incerto, formato variável 
Dados não 
estruturados 
E-mails, PDFs, 
imagens, áudios, vídeos 
Precisam de pré-processamento especializado 
antes do ML 
 
Versionamento de Dados — Por que é Essencial 
TERMO TÉCNICO  Versioning — Data Versioning  |  Controle de Versão de Dados 
Prática de registrar e preservar um histórico imutável de todas as versões de um dataset, 
incluindo o que mudou, quando e por quem. Permite que você saiba com precisão quais dados 
foram usados para treinar cada versão de um modelo — fundamental para reprodutibilidade, 
auditoria e rollback. 
 
Imagine este cenário real: um modelo de crédito está em produção há 6 meses. O banco central 
solicita uma auditoria e quer saber exatamente com quais dados esse modelo foi treinado. Sem 
versionamento de dados, essa resposta é impossível de dar. Com versionamento, você aponta 
para a versão exata do dataset — com timestamp, hash de integridade e metadados. 
 


---
## Página 11

Instrutora Josely Castro    
11 
Erros Graves na Coleta e Como Evitá-los 
Erro 
Termo Técnico 
O que Causa 
Como Prevenir 
Usar dados 
muito antigos 
Data Staleness 
Modelo aprende 
padrões que não 
existem mais 
Pipeline de atualização contínua + 
alertas de freshness 
Viés 
sistemático 
Historical Bias 
Modelo discrimina e 
perpetua injustiças 
Análise de fairness por grupo 
durante EDA 
Informação do 
futuro no 
treino 
Data Leakage 
Métricas infladas, 
falha total em 
produção 
Análise temporal rigorosa, 
separação por data 
Amostras 
insuficientes 
Underfitting / 
High Variance 
Modelo não 
generaliza para a 
população real 
Definir volume mínimo na etapa 
Definir do ciclo 
Sem 
privacidade 
LGPD/GDPR 
Violation 
Multas, processos, 
dano de reputação 
Catalogar dados pessoais, base 
legal, anonimização 
 
Etapa 2 — Preparação de Dados em Detalhe 
A preparação de dados é onde a maior parte do tempo de um projeto de ML é gasta — entre 60% 
e 80% do tempo total. Isso surpreende quem está começando na área, mas faz sentido: dados 
reais do mundo corporativo são bagunçados, inconsistentes e frequentemente incompletos. 
Transformá-los em um dataset pronto para treino é um trabalho intenso e detalhista. 
 
TERMO TÉCNICO  Preprocessing — Data Preprocessing  |  Pré-processamento de Dados 
Conjunto completo de operações aplicadas aos dados brutos antes do treinamento. Inclui: 
limpeza (remover ruído e erros), transformação (mudar formato e representação), normalização 
(ajustar escalas), encoding (converter categorias em números), feature engineering (criar novas 
variáveis) e splitting (dividir em treino, validação e teste). 
 
Tratamento de Missing Values — Estratégias Detalhadas 
TERMO TÉCNICO  Missing Values / Null Values  |  Valores Ausentes / Nulos 
Campos de um dataset sem valor preenchido. Existem três mecanismos de ausência, cada um 
exigindo estratégia diferente: MCAR (Missing Completely At Random) — ausência é aleatória e 
não relacionada a nenhuma variável; MAR (Missing At Random) — ausência é relacionada a 
outras variáveis observadas; MNAR (Missing Not At Random) — a ausência em si carrega 
informação importante. 
 
Estratégia 
Quando 
Usar 
Exemplo de 
Aplicação 
Risco 
Remover a 
linha 
Poucos nulos 
(<5%), MCAR 
Remover registros com 
endereço ausente 
quando poucos 
Perde dados; viés se MCAR não 
se confirmar 


---
## Página 12

Instrutora Josely Castro    
12 
Remover a 
coluna 
Mais de 60-
70% nulos 
Campo de 'segundo 
telefone' quase sempre 
vazio 
Perde variável potencialmente útil 
Imputar com 
média 
Variável 
numérica, 
distribuição 
simétrica 
Preencher altura com a 
média da população 
Reduz variância artificialmente 
Imputar com 
mediana 
Variável 
numérica, 
distribuição 
com outliers 
Preencher renda com 
mediana (outliers 
distorcem a média) 
Menos distorção que a média em 
dados assimétricos 
Imputar com 
moda 
Variável 
categórica 
Preencher estado civil 
com o valor mais 
frequente 
Pode introduzir viés para categoria 
majoritária 
Imputar por 
modelo 
Variável 
importante, 
MNAR 
Prever a renda com 
base em outras 
variáveis 
Mais complexo; pode introduzir 
ruído se o modelo for ruim 
Criar flag de 
ausência 
O fato de 
estar ausente 
é informativo 
Adicionar coluna 
binária 
'renda_estava_ausente' 
Aumenta dimensionalidade do 
dataset 
 
Normalização e Encoding — Por que São Obrigatórios 
TERMO TÉCNICO  Normalization / Standardization  |  Normalização / Padronização 
Ajuste das escalas das variáveis numéricas para que fiquem em faixas comparáveis. Algoritmos 
baseados em distância (KNN, SVM) e gradiente (redes neurais) são muito sensíveis à escala — 
uma variável com valores na faixa de 0-1.000.000 vai dominar o aprendizado sobre outra na 
faixa 0-1. Min-Max coloca tudo em [0,1]; Z-score centraliza em 0 com desvio padrão 1. 
 
TERMO TÉCNICO  Encoding  |  Codificação Categórica 
Processo de converter variáveis categóricas (textos como 'SP', 'RJ', 'feminino', 'masculino') em 
representações numéricas que os algoritmos de ML conseguem processar. Os dois métodos 
mais comuns são: One-Hot Encoding (cria uma coluna binária por categoria) e Label Encoding 
(atribui um número inteiro a cada categoria). 
 
Divisão do Dataset — A Regra dos Três Conjuntos 
Todo dataset de ML deve ser dividido em três conjuntos distintos e independentes: 
Conjunto 
Proporção 
Típica 
Função 
O que Acontece se 
Misturar 
Treino — Training 
Set 
60-80% 
O modelo aprende os 
padrões neste conjunto 
— 
Validação — 
Validation Set 
10-20% 
Ajuste de hiperparâmetros 
durante o desenvolvimento 
Overfitting nos 
hiperparâmetros — 
métricas falsas 


---
## Página 13

Instrutora Josely Castro    
13 
Teste — Test Set 
10-20% 
Avaliação final, usada UMA 
ÚNICA VEZ 
Data leakage — métricas 
infladas que não se 
replicam em produção 
 
ERRO CRÍTICO — NUNCA USE O TEST SET DURANTE O DESENVOLVIMENTO 
O test set deve ser 'guardado no cofre' desde o início. Usá-lo para ajustar o modelo ou escolher 
algoritmos é um dos erros mais graves em ML — as métricas ficam otimistamente infladas e o 
modelo falha em produção. Uma boa prática é colocar o test set em uma pasta separada e não 
abri-la até o modelo estar completamente finalizado. 
 
Etapa 3 — Treinamento do Modelo 
TERMO TÉCNICO  Algorithm — Algoritmo  |  Receita Matemática de Aprendizado 
Conjunto de operações matemáticas que define como o modelo ajusta seus parâmetros 
internos para minimizar o erro nas previsões. Diferentes algoritmos têm diferentes suposições 
sobre os dados, diferentes capacidades de capturar padrões complexos e diferentes requisitos 
computacionais. A escolha do algoritmo certo para cada problema é uma das habilidades 
centrais de um cientista de dados. 
 
TERMO TÉCNICO  Hyperparameters — Hiperparâmetros  |  Configurações do Algoritmo 
Definidas Antes do Treino 
Valores que controlam o processo de aprendizado mas que o próprio algoritmo não aprende — 
você define. Exemplos: taxa de aprendizado (learning rate), número de árvores (n_estimators), 
profundidade máxima (max_depth), número de épocas (epochs). Diferentes valores levam a 
modelos com desempenhos muito diferentes. 
 
Famílias de Algoritmos — Guia Rápido de Escolha 
Família 
Exemplos 
Melhor Para 
Limitação Principal 
Regressão 
Linear/Logística 
Ridge, Lasso, 
ElasticNet 
Relações lineares, alta 
interpretabilidade 
Não captura padrões não-
lineares complexos 
Árvores de 
Decisão 
Decision Tree, 
Random Forest, 
XGBoost 
Dados tabulares, boa 
acurácia, interpretável 
Random Forest e XGBoost 
são caixas-preta 
parcialmente 
Support Vector 
Machines 
SVM, SVR 
Dados de alta 
dimensão, margens de 
separação claras 
Escala mal com volumes 
muito grandes 
Redes Neurais 
MLP, CNN, RNN, 
Transformers 
Imagens, textos, 
sequências, dados 
complexos 
Requer muito dado e poder 
computacional 
Clustering 
K-Means, 
DBSCAN 
Segmentação sem 
rótulos, descoberta de 
padrões 
Necessita definir número de 
clusters (K-Means) 
 


---
## Página 14

Instrutora Josely Castro    
14 
Overfitting e Underfitting — Os Dois Inimigos do Treinamento 
TERMO TÉCNICO  Overfitting  |  Sobreajuste / Memorização 
Quando o modelo aprende os dados de treino com detalhes demais — incluindo ruído e 
exceções — e perde a capacidade de generalizar. Resultado: acurácia muito alta no treino, 
muito baixa no teste. Como um aluno que decorou as respostas mas não aprendeu o conteúdo. 
 
TERMO TÉCNICO  Underfitting  |  Subajuste / Aprendizado Insuficiente 
Quando o modelo é simples demais para capturar os padrões nos dados. Resultado: acurácia 
baixa tanto no treino quanto no teste. Como um aluno que estudou pouco demais. 
 
Problema 
Sinal 
Causa Comum 
Solução 
Overfitting 
Treino: 98%, 
Teste: 65% 
Modelo muito 
complexo, poucos 
dados, sem 
regularização 
Mais dados, regularização, 
dropout, simplificar modelo 
Underfitting 
Treino: 62%, 
Teste: 60% 
Modelo simples 
demais, features ruins, 
poucas épocas 
Modelo mais complexo, mais 
features, mais épocas de treino 
Ideal 
Treino: 92%, 
Teste: 89% 
Bom equilíbrio entre 
complexidade e dados 
Manter este equilíbrio com 
regularização e validação 
 
Etapa 4 — Avaliação do Modelo — Métricas Completas 
Avaliar um modelo significa responder uma pergunta simples: esse modelo está bom o suficiente 
para ser implantado? Mas 'bom o suficiente' depende de dois critérios: métricas técnicas e impacto 
de negócio. 
Métricas para Classificação — Entendendo a Matriz de Confusão 
TERMO TÉCNICO  Confusion Matrix  |  Matriz de Confusão 
Tabela que mostra os quatro resultados possíveis de um classificador binário: VP (Verdadeiro 
Positivo — acertou que é positivo), VN (Verdadeiro Negativo — acertou que é negativo), FP 
(Falso Positivo — disse positivo mas era negativo) e FN (Falso Negativo — disse negativo mas 
era positivo). Todas as métricas de classificação são derivadas dessa matriz. 
 
Métrica 
Fórmula 
Interprete como... 
Priorize quando... 
Accuracy — 
Acurácia 
(VP+VN)/(VP+VN+FP+FN) 
% total de previsões 
corretas 
Classes balanceadas, 
custo de erro igual 
Precision — 
Precisão 
VP/(VP+FP) 
De tudo que disse 
ser positivo, quanto 
acertou? 
FP é muito caro (spam 
filter, recomendação 
paga) 


---
## Página 15

Instrutora Josely Castro    
15 
Recall — 
Sensibilidade 
VP/(VP+FN) 
De todos os 
positivos reais, 
quanto encontrou? 
FN é muito caro 
(diagnóstico, segurança, 
fraude) 
F1-Score 
2×(P×R)/(P+R) 
Equilíbrio entre 
Precision e Recall 
Classes 
desbalanceadas, ambos 
os erros importam 
AUC-ROC 
Área sob a curva ROC 
Capacidade geral de 
discriminação 
Comparar modelos, 
threshold variável 
 
Métricas para Regressão 
Métrica 
O que mede 
Unidade 
Penaliza erros grandes? 
MAE — Mean 
Absolute Error 
Erro médio 
absoluto 
Mesma do 
target (ex: 
R$) 
Não — todos os erros têm mesmo 
peso 
RMSE — Root 
Mean Square 
Error 
Raiz do erro 
quadrático médio 
Mesma do 
target 
Sim — erros grandes são 
penalizados mais 
R² — Coeficiente 
de Determinação 
% da variância do 
target explicada 
pelo modelo 
0 a 1 (1 = 
perfeito) 
Não diretamente 
MAPE — Mean 
Absolute 
Percentage Error 
Erro percentual 
médio 
Porcentagem 
(%) 
Não — mas é escala-independente 
 
MÉTRICAS DE NEGÓCIO SÃO MAIS IMPORTANTES QUE MÉTRICAS TÉCNICAS 
Um modelo com F1=0.85 que gera R$2M de receita adicional é muito melhor que um modelo 
com F1=0.92 que gera R$500K. Sempre traduza as métricas técnicas em impacto de negócio: 
fraudes detectadas, clientes retidos, tempo economizado, receita gerada. Isso é o que o gestor 
vai aprovar. 
 
Opções de Deploy no SageMaker 
Tipo 
Latência 
Disponibilidade 
Caso de Uso 
Custo 
Real-time 
Endpoint 
< 100ms 
24/7 sempre 
ativo 
Chatbot, antifraude, 
recomendação ao 
vivo 
Instância dedicada 
sempre ligada 
Serverless 
Inference 
1-5s (cold 
start) 
Escala até zero 
Tráfego irregular, 
baixo volume 
Paga por requisição 
— zero quando 
inativo 
Async 
Inference 
Segundos 
a minutos 
Fila gerenciada 
Modelos grandes, 
processamento em 
fila 
Por requisição + 
armazenamento de 
resultado 


---
## Página 16

Instrutora Josely Castro    
16 
Batch 
Transform 
Horas 
Job programado 
Recalcular scores 
para toda a base 
Por hora de 
instância durante o 
job 
 
RESUMO DO MÓDULO 03 
Pipeline de 5 etapas: Coleta → Preprocessing (60-80% do tempo) → Training → Evaluation → 
Deploy. MLOps automatiza e garante reprodutibilidade. Overfitting e underfitting são os dois 
inimigos do treino. Métricas técnicas (accuracy, F1, RMSE) devem ser traduzidas em impacto 
de negócio. 
 
 
M Ó D U L O  0 4  
Coleta de Dados 
 
Como capturar e gerenciar dados de qualidade para pipelines de ML 
Coleta como Pipeline Contínuo — O Princípio Central 
O erro mais comum de times que estão começando em ML é tratar a coleta como uma tarefa de 
projeto: 'vamos coletar os dados agora, pronto'. Esse pensamento leva a modelos que envelhecem 
rapidamente, porque os dados que os alimentam ficam desatualizados. 
O princípio correto é: coleta de dados é um processo contínuo, igual a um sistema de 
abastecimento de água. O reservatório (modelo) precisa ser alimentado continuamente pelo cano 
(pipeline de coleta). Se o cano secar, o reservatório esvazia. 
 
TERMO TÉCNICO  Data Freshness  |  Frescor dos Dados / Dados Atualizados 
Medida de quão recentes são os dados em relação à realidade atual. Dados com baixa 
freshness estão desatualizados e podem não representar mais o comportamento atual do 
negócio. Em muitos domínios (finanças, e-commerce, redes sociais), dados de mais de 30 dias 
já podem estar obsoletos para certos modelos. 
 
Componentes de um Pipeline de Coleta Robusto 
Componente 
O que Faz 
Ferramenta AWS 
Por que é Necessário 
Extração 
Captura dados 
das fontes de 
origem 
Glue, DMS, 
Kinesis, AppFlow 
Automatiza a captura sem 
intervenção manual 
Validação de 
Qualidade 
Verifica 
integridade, 
completude e 
formato 
Glue DataBrew, 
Lambda com 
regras 
Detecta problemas antes de 
contaminar o modelo 


---
## Página 17

Instrutora Josely Castro    
17 
Deduplicação 
Remove 
registros 
duplicados 
AWS Glue com 
Record Matching 
Duplicatas distorcem distribuições e 
inflam volumes 
Versionamento 
Salva histórico 
imutável de 
cada carga 
S3 Versioning, 
Feature Store 
Reprodutibilidade e auditoria 
Catalogação 
Documenta 
origem, schema 
e uso dos 
dados 
AWS Glue Data 
Catalog, 
DataZone 
Governança e descoberta de dados 
pela equipe 
Orquestração 
Agenda, 
monitora e 
alerta sobre o 
pipeline 
Step Functions, 
MWAA (Airflow) 
Garante que o pipeline rode de forma 
confiável 
 
Erros Comuns na Coleta e Suas Consequências 
TERMO TÉCNICO  Data Leakage  |  Vazamento de Dados 
Ocorre quando informação que não estaria disponível no momento da previsão em produção 
acaba sendo usada no treinamento. Resulta em modelos com métricas falsamente altas 
durante o desenvolvimento e falha completa em produção. É um dos erros mais graves e mais 
difíceis de detectar em ML. 
 
TERMO TÉCNICO  Historical Bias  |  Viés Histórico 
Quando dados históricos refletem desigualdades ou discriminações passadas, e o modelo 
aprende a reproduzi-las. Exemplo: dados de contratação histórica que favoreciam candidatos 
de determinado gênero ou etnia. O modelo aprende esse padrão e o perpetua, com 
consequências legais e éticas sérias. 
 
Erro 
Impacto no 
Modelo 
Impacto no 
Negócio 
Solução 
Dados 
desatualizados 
(Data 
Staleness) 
Modelo aprendeu 
padrões que não 
existem mais 
Previsões 
incorretas, 
decisões ruins 
Pipeline contínuo + alertas de 
freshness 
Data Leakage 
Métricas de 95%+ 
no 
desenvolvimento, 
60% em produção 
Implantação de 
modelo que não 
funciona 
Análise temporal rigorosa, 
separação por data de corte 
Historical Bias 
Modelo discrimina 
grupos 
sistematicamente 
Multas, processos 
judiciais, dano de 
reputação 
Análise de fairness, técnicas de 
debiasing 
Formatos 
inconsistentes 
Erros silenciosos 
que corrompem 
features 
Modelo produz 
saídas erradas 
sem alertar 
Schema enforcement + testes 
automatizados 


---
## Página 18

Instrutora Josely Castro    
18 
Volume 
insuficiente 
Overfitting — bom 
no treino, ruim em 
produção 
Modelo não escala 
para novos perfis 
Definir volume mínimo antes de 
iniciar o projeto 
Violação de 
privacidade 
N/A tecnicamente 
Multa LGPD: até 
2% do 
faturamento (máx 
R$50M/infração) 
Base legal, anonimização, 
consentimento 
 
LGPD e ML — O que Todo Profissional Precisa Saber 
A Lei Geral de Proteção de Dados (Lei 13.709/2018) se aplica diretamente a projetos de ML que 
utilizam dados pessoais. As principais obrigações: 
• Base legal: todo tratamento de dados pessoais precisa de uma base legal explícita 
(consentimento, legítimo interesse, execução de contrato, etc.) 
• Minimização: colete apenas os dados estritamente necessários para a finalidade declarada 
• RIPD: projetos de alto risco exigem Relatório de Impacto à Proteção de Dados 
• Explicabilidade: titulares têm direito de saber quando decisões automatizadas afetam seus 
direitos 
• Direito ao esquecimento: dados devem poder ser removidos, o que inclui modelos treinados 
com esses dados 
 
RESUMO DO MÓDULO 04 
Coleta é pipeline contínuo, não evento único. Componentes: extração, validação, deduplicação, 
versionamento, catalogação, orquestração. Data leakage e historical bias são os erros mais 
graves. LGPD se aplica a projetos de ML com dados pessoais. Qualidade dos dados define o 
teto do modelo. 
 
 
M Ó D U L O  0 5  
Análise Exploratória — EDA 
 
Investigando os dados antes de modelar para entender padrões, qualidade e relações 
 
 


---
## Página 19

Instrutora Josely Castro    
19 
EDA — O que é e Por que é Indispensável 
TERMO TÉCNICO  EDA — Exploratory Data Analysis  |  Análise Exploratória de Dados 
Processo sistemático de investigação inicial dos dados usando estatísticas descritivas e 
visualizações para entender a estrutura, qualidade e padrões do conjunto — sem hipóteses pré-
fixadas. É a fase em que você 'ouve o que os dados têm a dizer' antes de qualquer decisão de 
modelagem. Identificar problemas na EDA é muito mais barato do que descobri-los depois do 
treino. 
 
A EDA responde um conjunto de perguntas fundamentais que nenhum modelo de ML consegue 
responder sozinho: 
• Os dados fazem sentido? Existem valores impossíveis, formatos errados, campos trocados? 
• Qual a distribuição das variáveis? Os valores são concentrados, espalhados, bimodais? 
• Existem outliers? São erros de coleta ou eventos raros mas reais? 
• Há missing values? Em que proporção? O padrão de ausência é aleatório ou informativo? 
• As variáveis se correlacionam? Quais pares têm correlação alta? Há multicolinearidade? 
• Existe feature leakage? Alguma variável contém informação que não estaria disponível em 
produção? 
• As classes são balanceadas? A proporção de positivos e negativos é razoável? 
 
Estatísticas Descritivas — O Ponto de Partida 
TERMO TÉCNICO  Descriptive Statistics  |  Estatísticas Descritivas 
Conjunto de medidas numéricas que resumem as características principais de um conjunto de 
dados. Incluem: medidas de tendência central (média, mediana, moda), medidas de dispersão 
(desvio padrão, variância, IQR), percentis e contagens de valores únicos e ausentes. 
 
Estatística 
O que Mede 
O que Revela 
Ferramenta Pandas 
Média (Mean) 
Valor central 
ponderado por 
todos os dados 
Sensível a outliers — 
se muito diferente da 
mediana, há assimetria 
df.mean() 
Mediana 
(Median) 
Valor do meio 
quando os dados 
estão ordenados 
Resistente a outliers — 
boa para dados 
assimétricos 
df.median() 
Desvio Padrão 
(Std) 
Dispersão em 
torno da média 
Alto std = dados muito 
espalhados = alta 
variância 
df.std() 
Mínimo e 
Máximo 
Extremos da 
distribuição 
Detecta valores 
impossíveis (idade=-5, 
salário=0) 
df.min(), df.max() 
Percentis (25%, 
75%) 
Quartis da 
distribuição 
IQR = P75-P25 é a 
base para detectar 
outliers 
df.quantile([.25,.75]) 
Value Counts 
Frequência de 
cada valor único 
Detecta alta 
cardinalidade e classes 
desbalanceadas 
df.value_counts() 


---
## Página 20

Instrutora Josely Castro    
20 
Visualizações Essenciais na EDA 
TERMO TÉCNICO  Distribution  |  Distribuição 
Padrão que descreve como os valores de uma variável se organizam — onde estão 
concentrados, quão espalhados estão, se têm formato simétrico ou assimétrico, se têm uma ou 
mais modas. Visualizada com histogramas, density plots ou box plots. 
 
TERMO TÉCNICO  Outlier  |  Valor Atípico 
Observação que se distancia significativamente do padrão dos demais dados. Pode ser: (1) erro 
de coleta/digitação, (2) evento real mas excepcional, ou (3) fraude/anomalia. A decisão de 
remover, manter ou transformar um outlier depende do contexto do negócio. 
 
TERMO TÉCNICO  Correlation  |  Correlação 
Medida estatística do grau de associação linear entre duas variáveis, variando de -1 (correlação 
negativa perfeita) a +1 (correlação positiva perfeita). Correlação 0 indica ausência de relação 
linear (mas pode haver relação não-linear). Correlações muito altas entre features 
(multicolinearidade) podem prejudicar certos algoritmos. 
 
Visualização 
O que Revela 
Quando Usar 
Ferramenta 
Histograma 
Distribuição de 
uma variável 
contínua — 
formato, picos, 
caudas 
Sempre — para 
cada variável 
numérica 
Seaborn histplot, Matplotlib hist 
Box Plot 
Mediana, quartis e 
outliers de uma 
variável 
Comparar 
distribuições entre 
grupos, detectar 
outliers 
Seaborn boxplot 
Heatmap de 
Correlação 
Matriz de 
correlação entre 
todas as variáveis 
numéricas 
Identificar 
correlações fortes 
e 
multicolinearidade 
Seaborn heatmap com df.corr() 
Scatter Plot 
Relação entre 
duas variáveis 
contínuas 
Detectar padrões 
não-lineares, 
clusters, outliers 
bivariados 
Seaborn scatterplot 
Heatmap de 
Missing 
Padrão de 
ausência de 
valores por coluna 
e linha 
Identificar colunas 
problemáticas e 
padrões de MNAR 
Biblioteca missingno 
Bar Plot de 
Classes 
Proporção de 
cada classe no 
target 
Detectar 
desbalanceamento 
de classes 
Seaborn countplot 
 
Feature Leakage — O Erro Mais Silencioso e Caro 


---
## Página 21

Instrutora Josely Castro    
21 
TERMO TÉCNICO  Feature Leaker  |  Variável com Vazamento de Informação Temporal 
Feature que contém informação do futuro — informação que não estaria disponível no momento 
real em que o modelo fará a previsão em produção. Resulta em modelos com métricas de 
avaliação artificialmente altíssimas e falha completa quando implantados. É um dos erros mais 
difíceis de detectar porque as métricas parecem excelentes. 
 
Exemplos clássicos de data leakage por feature leaker: 
• Modelo para prever se cliente vai cancelar amanhã, usando como feature 'data de 
cancelamento' (essa data só existe depois que cancela) 
• Modelo de detecção de fraude usando o resultado final da investigação como feature de 
treino 
• Modelo de previsão de churn usando o 'status_cliente' que é alterado automaticamente 
quando o churn ocorre 
• Modelo de previsão de vendas usando dados de estoque que são atualizados 
automaticamente após cada venda 
 
Como detectar: verifique se alguma feature tem correlação inusitadamente alta com o target (acima 
de 0.9 costuma ser suspeito), e sempre faça análise temporal — se sua variável target é um evento 
futuro, todas as features devem ser observadas ANTES desse evento. 
 
EDA vs. Análise Final — Diferenças Cruciais 
Aspecto 
EDA (Análise Exploratória) 
Análise Final (Pós-Produção) 
Quando ocorre 
Antes do treinamento do modelo 
Após implantação e meses de 
operação 
Objetivo 
Entender os dados, tomar decisões 
de modelagem 
Medir impacto, validar ROI, planejar 
evolução 
Hipóteses 
Abertas — 'o que os dados têm a 
dizer?' 
Específicas — 'o modelo atingiu a 
meta X?' 
Audiência 
Cientistas de dados, engenheiros 
Stakeholders, gestores, diretores 
Ferramentas 
Pandas, Matplotlib, Seaborn, Data 
Wrangler 
QuickSight, Power BI, Tableau, 
relatórios 
Resultado 
Decisões técnicas sobre features e 
algoritmos 
Decisões de negócio sobre 
investimento e escala 
 
RESUMO DO MÓDULO 05 
EDA = Exploratory Data Analysis = investigação sem hipóteses fixas. Combina estatísticas 
descritivas (média, desvio padrão, percentis) com visualizações (histograma, box plot, heatmap 
de correlação). Detecta outliers, missing values, correlações, distribuições e feature leakers. 
Use pandas + seaborn ou o SageMaker Data Wrangler. 
 
 
 


---
## Página 22

Instrutora Josely Castro    
22 
 
M Ó D U L O  0 6  
Data Wrangler e Feature Store 
 
Preparação visual de dados e gestão centralizada de features 
SageMaker Data Wrangler — Ferramenta Completa 
TERMO TÉCNICO  Feature  |  Característica / Variável de Entrada do Modelo 
Cada uma das variáveis fornecidas ao modelo como entrada para que ele faça sua previsão. 
Em um modelo de churn: 'logins nos últimos 30 dias', 'valor médio de compras', 'dias desde 
última compra'. A qualidade e a relevância das features têm mais impacto no desempenho do 
modelo do que a escolha do algoritmo. 
 
O SageMaker Data Wrangler existe porque preparar dados é a parte mais demorada de qualquer 
projeto de ML, e grande parte dessa preparação é repetitiva e passível de automação. O Wrangler 
oferece uma interface visual que: 
• Elimina a necessidade de escrever código boilerplate para operações padrão 
• Torna o fluxo de preparação reprodutível e documentado automaticamente 
• Permite que analistas sem domínio profundo de programação contribuam com a preparação 
• Exporta cada transformação como código Python pronto para produção 
 
Fluxo de Trabalho Detalhado — 5 Etapas 
Etapa 1 — Importar Dados 
Conecte a qualquer das fontes suportadas: S3 (CSV, Parquet, ORC, JSON), Athena (SQL sobre 
dados no S3), Redshift, Snowflake, Salesforce. Para múltiplas fontes, você pode fazer joins visuais 
— seleciona a coluna de junção e o tipo de join (inner, left, right, full outer). 
 
Etapa 2 — Análise Exploratória Visual 
O Wrangler gera automaticamente um relatório de qualidade que inclui: estatísticas descritivas por 
coluna, histogramas de distribuição, heatmap de missing values, detecção de outliers por Z-score e 
IQR, e análise de correlação. É uma EDA rápida integrada à ferramenta, sem precisar escrever 
pandas. 
 
Etapa 3 — Aplicar Transformações 
O catálogo de 300+ transformações está organizado por categoria. Você clica em menus, configura 
parâmetros e vê o resultado imediatamente. Cada transformação adiciona um 'passo' ao seu fluxo 
visual, que pode ser reordenado, editado ou removido a qualquer momento: 
 
Categoria de 
Transformação 
O que Inclui 
Quando Usar 


---
## Página 23

Instrutora Josely Castro    
23 
Missing Values 
Imputar (média, mediana, 
moda, valor fixo, modelo), 
remover linhas/colunas, 
criar flag 
Quase sempre — todo dataset real tem 
missing values 
Codificação 
Categórica 
One-Hot Encoding, Label 
Encoding, Target Encoding, 
Ordinal Encoding, Binary 
Encoding 
Quando há variáveis de texto que precisam 
virar número 
Normalização e 
Escala 
Min-Max, Z-score 
(Standard), Robust Scaler, 
Log Transform, Quantile 
Transform 
Algoritmos sensíveis a escala: KNN, SVM, 
redes neurais 
Feature 
Engineering 
Operações matemáticas, 
combinação de colunas, 
extração de data (dia, mês, 
trimestre), lag features 
Criar novas variáveis mais informativas que 
as originais 
Balanceamento de 
Classes 
SMOTE (oversampling 
sintético), Random 
Undersampling, ADASYN 
Quando uma classe é muito mais frequente 
que a outra 
Texto Básico 
Tokenização, remoção de 
stopwords, TF-IDF, 
contagem de palavras 
Para modelos que incluem features textuais 
simples 
Formato e Tipo 
Converter tipos, parsear 
datas, extrair componentes, 
tratar strings 
Quando os tipos de dados estão incorretos 
após a importação 
 
Etapa 4 — Análise de Qualidade Automática 
O Wrangler inclui análises automáticas pós-transformação: 
• Target Leakage Detection — Detecção de Leakage no Target: analisa automaticamente 
features com correlação suspeita com o target 
• Quick Model — Modelo Rápido: treina um modelo simples nos dados preparados e 
mostra a feature importance, dando uma ideia de quais variáveis são mais relevantes 
• Class Imbalance — Desbalanceamento de Classes: avisa se o target está muito 
desbalanceado e sugere estratégias de tratamento 
 
Etapa 5 — Exportar para Produção 
Formato de 
Exportação 
O que Gera 
Quando Usar 
Python Script 
Código Python executável 
com todas as transformações 
Para customização adicional e integração 
em pipelines existentes 
SageMaker 
Processing Job 
Job gerenciado que roda as 
transformações em escala na 
AWS 
Para produção com grandes volumes de 
dados 
SageMaker 
Pipeline Step 
Passo de pipeline 
automatizado no SageMaker 
Pipelines 
Para MLOps — integra ao pipeline de 
retreinamento automático 


---
## Página 24

Instrutora Josely Castro    
24 
Feature Store 
Ingere as features preparadas 
diretamente no Feature Store 
Para garantir consistência entre treino e 
inferência em produção 
 
SageMaker Feature Store — Gerenciamento Profissional 
de Features 
TERMO TÉCNICO  Feature Store  |  Repositório Centralizado de Features 
Sistema que armazena, versiona e disponibiliza features de ML para uso consistente tanto no 
treinamento quanto na inferência em produção. Resolve o problema da divergência treino-
produção (Training-Serving Skew) ao garantir que a mesma lógica de cálculo seja usada em 
ambos os contextos. 
 
TERMO TÉCNICO  Training-Serving Skew  |  Divergência Treino-Produção 
Problema que ocorre quando as features usadas para treinar o modelo são calculadas de forma 
ligeiramente diferente das features usadas durante a inferência em produção. Resulta em 
degradação silenciosa do modelo, pois ele recebe inputs em produção que são diferentes dos 
inputs que aprendeu a processar. 
 
O Problema que o Feature Store Resolve — Exemplo Detalhado 
Cenário real em uma empresa sem Feature Store: 
• Mês 1: Time de Data Science calcula a feature 'media_compras_30_dias' em Python/Pandas 
no notebook de desenvolvimento. O modelo é treinado com essa feature. 
• Mês 3: Time de Engenharia de Software recebe a tarefa de colocar o modelo em produção. 
Eles precisam calcular a mesma feature em tempo real em Java para o sistema de produção. 
• O engenheiro de software calcula a média dos últimos 30 dias corridos. O cientista de dados 
usou 30 dias úteis (sem fins de semana). 
• Diferença pequena? Depende: para alguns usuários com padrão de compras semanal, a 
diferença pode ser de 15-20%. 
• O modelo começa a receber features ligeiramente diferentes das que foi treinado. A acurácia 
cai progressivamente. Depois de semanas de investigação, descobrem a causa. 
Com o Feature Store: a definição de 'media_compras_30_dias' está centralizada. O Data Science 
grava no Feature Store, e a produção lê do Feature Store. Mesma feature garantida nos dois 
contextos. 
 
Arquitetura do Feature Store — Online Store vs. Offline Store 
TERMO TÉCNICO  Online Store  |  Armazenamento Online 
Parte do Feature Store otimizada para leitura com latência ultrabaixa (<10ms), usada durante 
inferência em tempo real. Mantém apenas o estado atual de cada entidade (cliente, produto, 
transação). Implementada sobre banco de dados de alta performance (baseado em DynamoDB 
no SageMaker). 
 


---
## Página 25

Instrutora Josely Castro    
25 
TERMO TÉCNICO  Offline Store  |  Armazenamento Offline 
Parte do Feature Store otimizada para leitura em lote, armazenada em Amazon S3 em formato 
Parquet colunar. Contém o histórico completo de todas as features ao longo do tempo com 
timestamps, usado para treinar e retreinar modelos com dados históricos. 
 
Característica 
Online Store 
Offline Store 
Tecnologia base 
Banco de dados de alta 
performance 
Amazon S3 + formato Parquet 
colunar 
Latência de leitura 
< 10ms — sub-milissegundo em 
alguns casos 
Segundos a minutos — consulta 
em lote 
Dados disponíveis 
Snapshot atual de cada entity 
(cliente, produto) 
Histórico completo com timestamps 
Capacidade 
Limitada — custo alto por GB 
Praticamente ilimitada — S3 é 
barato 
Uso principal 
Inferência em tempo real 
Treino de modelos, backtesting, 
análises 
Atualização 
Em tempo real (streaming ou micro-
batch) 
Sincronizada após cada escrita 
Custo 
Por leitura/escrita individual 
Por armazenamento e 
processamento 
 
Feature Groups — Como o Feature Store se Organiza 
No Feature Store, features são organizadas em Feature Groups — Grupos de Features: 
coleções lógicas de features relacionadas a uma mesma entidade. Exemplos: 'features de cliente' 
(histórico de compras, frequência, recência), 'features de produto' (popularidade, margem, 
estoque), 'features de transação' (valor, canal, horário). Cada Feature Group tem um schema fixo, 
com tipos definidos para cada feature. 
 
RESUMO DO MÓDULO 06 
Data Wrangler: preparação visual com 300+ transformações categorizadas, análise automática 
de qualidade (leakage detection, feature importance), exporta para Python/Job/Pipeline/Feature 
Store. Feature Store: resolve Training-Serving Skew com Online Store (<10ms para inferência) 
e Offline Store (histórico para treino). Feature Groups organizam features por entidade. 
 
 
 


---
## Página 26

Instrutora Josely Castro    
26 
 
M Ó D U L O  0 7  
SageMaker Model Monitor 
 
Acompanhamento contínuo de modelos em produção 
Model Monitor — Por que Monitorar é Obrigatório 
Um modelo implantado não é um produto acabado. É um produto vivo, que opera em um ambiente 
que muda continuamente. Sem monitoramento, a trajetória de todo modelo de ML em produção é a 
mesma: funciona bem no lançamento, degrada progressivamente, e falha visivelmente quando o 
dano já é significativo. 
O SageMaker Model Monitor é o sistema que fecha esse ciclo: ele captura os dados de produção, 
compara com o que o modelo aprendeu, e avisa quando algo está mudando de forma preocupante. 
 
TERMO TÉCNICO  Data Drift / Covariate Shift  |  Desvio de Dados / Deslocamento de 
Covariáveis 
Fenômeno em que a distribuição estatística dos dados de entrada em produção diverge da 
distribuição dos dados usados no treinamento. É o tipo mais comum de drift. O modelo não 
mudou — o mundo ao redor dele mudou. Causas: sazonalidade, mudanças econômicas, novos 
perfis de clientes, evoluções dos sistemas de origem. 
 
TERMO TÉCNICO  Concept Drift  |  Deriva Conceitual 
Mudança na relação entre as features de entrada e o que o modelo deve prever. Diferente do 
data drift (os dados mudaram), o concept drift significa que o próprio conceito que o modelo 
aprendeu não é mais válido. Exemplo: um modelo de risco de crédito aprende a relação renda-
risco em um período de crescimento econômico. Uma recessão muda completamente essa 
relação. 
 
TERMO TÉCNICO  Model Degradation / Silent Model Degradation  |  Degradação do 
Modelo / Degradação Silenciosa 
Queda gradual e imperceptível na qualidade do modelo ao longo do tempo. Sem 
monitoramento ativo, a degradação progride sem alertas até causar impacto significativo no 
negócio. É chamada de 'silenciosa' porque o sistema continua funcionando — ele simplesmente 
fica cada vez mais errado. 
 
Os 4 Tipos de Monitoramento do Model Monitor 
Tipo 
Nome Completo 
O que Detecta 
Sinal de Alerta Típico 
Data 
Quality 
Monitoramento de 
Qualidade de Dados 
Mudanças nas distribuições 
das features de entrada 
Proporção de nulos 
passou de 2% para 20%; 
média de feature X 
mudou 3 desvios padrão 


---
## Página 27

Instrutora Josely Castro    
27 
Model 
Quality 
Monitoramento de 
Qualidade do 
Modelo 
Queda nas métricas de 
desempenho do modelo 
Accuracy caiu de 0.92 
para 0.74 nas últimas 2 
semanas 
Bias Drift 
Monitoramento de 
Desvio de Viés 
Discriminação emergente 
entre grupos protegidos 
Taxa de aprovação 
divergiu 18% entre 
grupos demográficos 
Feature 
Attribution 
Drift 
Monitoramento de 
Atribuição de 
Features 
Mudança na importância 
relativa das features 
Feature 'tempo_no_app' 
que era top-3 agora tem 
importância ~0 
 
Como Funciona o Model Monitor — Fluxo Técnico 
Completo 
Fase 1 — Captura do Baseline 
TERMO TÉCNICO  Baseline  |  Linha de Base / Referência Estatística 
Snapshot das características estatísticas dos dados de treinamento original, capturado antes do 
deploy. Serve como 'foto da saúde' do sistema no momento em que o modelo foi criado. Todas 
as comparações futuras são feitas contra esse baseline. Inclui: distribuições de cada feature, 
estatísticas descritivas, proporção de missing values, correlações. 
 
O processo de criação do baseline no SageMaker: 
• Você fornece o dataset de treino ao Model Monitor 
• O serviço calcula estatísticas para cada feature: média, desvio padrão, percentis (P5, P25, 
P50, P75, P95), contagem de nulos, distribuição de valores únicos 
• Cria constraints (restrições): se a feature 'idade' tem média 35 e desvio 12 no treino, uma 
constraint pode ser: 'alertar se a média desviar mais de 2 desvios padrão' 
• Salva o baseline em S3 como JSON — você pode inspecionar e ajustar os limites 
manualmente 
 
Fase 2 — Captura de Dados em Produção 
TERMO TÉCNICO  Sampling  |  Amostragem 
Seleção de um subconjunto representativo das requisições que chegam ao endpoint para 
análise, em vez de processar 100% do tráfego. Configurado como porcentagem (ex: 10% das 
requisições). Para volumes altos, 10% já é estatisticamente suficiente para detectar drift. Para 
volumes baixos, 100% é recomendado. 
 
O que é capturado: 
• Dados de entrada (features): o que foi enviado ao modelo para gerar cada previsão 
• Dados de saída (predictions): o que o modelo respondeu para cada requisição 
• Timestamp: quando cada requisição foi processada — fundamental para análises temporais 
• Metadados opcionais: versão do modelo, identificador de sessão, etc. 
 


---
## Página 28

Instrutora Josely Castro    
28 
Fase 3 — Comparação e Detecção de Drift 
O Model Monitor compara periodicamente (horária, diária ou semanal — você configura) os dados 
capturados com o baseline usando testes estatísticos: 
TERMO TÉCNICO  PSI — Population Stability Index  |  Índice de Estabilidade Populacional 
Medida estatística amplamente usada no setor financeiro para quantificar o quanto uma 
distribuição mudou em relação a um período de referência. PSI < 0.1: mudança insignificante. 
PSI 0.1-0.2: mudança moderada, monitorar. PSI > 0.2: mudança significativa, investigar e 
possivelmente retreinar. 
 
TERMO TÉCNICO  KL Divergence — Kullback-Leibler Divergence  |  Divergência de 
Kullback-Leibler 
Medida da diferença entre duas distribuições de probabilidade. Quanto maior, mais diferentes 
são as distribuições. Usada pelo Model Monitor junto com o PSI para detectar desvios nas 
distribuições das features. 
 
Fase 4 — Relatórios e Alertas Automáticos 
Quando violações são detectadas, o Model Monitor gera um relatório em JSON salvo no S3 e envia 
métricas ao CloudWatch. A partir daí, você configura a resposta automática: 
Nível de 
Resposta 
Configuração 
Quando Usar 
Notificação 
CloudWatch Alarm → SNS 
→ E-mail/SMS 
Drift moderado — alerta o time para investigar 
manualmente 
Ticket 
automático 
CloudWatch Alarm → 
EventBridge → Lambda → 
Jira/ServiceNow 
Drift moderado em sistema crítico — garante 
investigação rastreável 
Retreino 
automático 
CloudWatch Alarm → 
EventBridge → SageMaker 
Pipeline 
Drift severo em sistema com alto volume — 
retreina automaticamente 
Rollback 
automático 
CloudWatch Alarm → 
EventBridge → Lambda → 
Swap endpoint 
Falha crítica de qualidade — reverte para 
versão anterior do modelo 
 
Casos Reais de Degradação por Setor 
Setor 
Cenário de Drift 
Consequência sem 
Monitoramento 
Consequência com 
Model Monitor 
Banco (crédito) 
Crise econômica 
muda relação 
renda-
inadimplência 
Aumento de 40% na 
inadimplência antes de 
alguém perceber 
Alerta em 2 semanas, 
retreino antes do impacto 
escalar 
Saúde 
(diagnóstico) 
Nova variante 
com 
apresentação 
diferente 
Falsos negativos 
crescentes — risco à vida 
dos pacientes 
Detecção de queda de 
recall, revisão imediata do 
modelo 


---
## Página 29

Instrutora Josely Castro    
29 
E-commerce 
(recomendação) 
Tendência de 
consumo muda 
pós-evento macro 
CTR cai 30% em 3 meses 
sem que ninguém 
entenda o porquê 
Alerta de data drift em 
features de 
comportamento de 
navegação 
Logística 
(demanda) 
Novo concorrente 
entra no mercado 
e muda padrão 
de compras 
Excesso de estoque e 
rupturas recorrentes por 2 
trimestres 
Feature drift detectado, 
modelo de demanda 
retreinado em 4 semanas 
 
Compliance e Model Monitor — O Que os Reguladores Exigem 
TERMO TÉCNICO  Compliance  |  Conformidade Regulatória 
Capacidade de demonstrar que um sistema opera dentro das regras, regulamentos e políticas 
aplicáveis. No contexto de ML, inclui: evidência de que o modelo não discrimina grupos 
protegidos, que foi monitorado continuamente, que decisões podem ser explicadas e auditadas, 
e que existe um processo formal de retreino quando o modelo se deteriora. 
 
Setores com exigências crescentes de compliance para modelos de ML: 
• Financeiro: Banco Central do Brasil (BC) — Resolução CMN 4.557 sobre gestão de riscos em 
modelos. Modelos de crédito devem ser validados periodicamente com evidência 
documentada. 
• Saúde: ANVISA — dispositivos com IA generativa ou preditiva passam por processo 
regulatório. FDA nos EUA já publicou guias específicos para ML em saúde. 
• Seguros: SUSEP — modelos de precificação e risco devem demonstrar não-discriminação e 
estabilidade ao longo do tempo. 
• Crédito ao consumidor: LGPD + Código de Defesa do Consumidor — decisões 
automatizadas que afetem o consumidor precisam de mecanismo de revisão humana. 
 
RESUMO DO MÓDULO 07 
Model Monitor: 4 tipos (Data Quality, Model Quality, Bias Drift, Feature Attribution Drift). Fluxo: 
baseline estatístico → sampling em produção → comparação com PSI e KL Divergence → 
alertas via CloudWatch/SNS → ações automáticas via EventBridge. Essencial para compliance 
regulatório e prevenção de silent model degradation. 
 
 
 


---
## Página 30

Instrutora Josely Castro    
30 
Glossário Consolidado — Todos os Termos do Encontro 
11 
Termo em Inglês 
Tradução 
Definição Resumida 
Semantic Search 
Busca Semântica 
Busca por significado e intenção, não por 
palavras-chave 
NLP (Natural 
Language 
Processing) 
Processamento de 
Linguagem Natural 
IA para compreender e interpretar a linguagem 
humana 
Connector 
Conector 
Ponte entre o Kendra e sistemas externos 
(SharePoint, S3, etc.) 
Feedback Loop 
Ciclo de 
Retroalimentação 
Sistema melhora continuamente com base 
nas reações dos usuários 
ML (Machine 
Learning) 
Aprendizado de Máquina 
Computadores aprendem padrões de dados 
sem programação explícita 
Deploy 
Implantação 
Colocar um modelo treinado em produção 
para uso real 
Drift 
Desvio 
Dados de produção divergindo dos dados de 
treinamento ao longo do tempo 
Garbage In, 
Garbage Out 
Lixo Entra, Lixo Sai 
Qualidade da saída é limitada pela qualidade 
da entrada 
Pipeline 
Fluxo de Processamento 
Etapas automatizadas e encadeadas, saída 
de uma é entrada da próxima 
MLOps 
Operações de ML 
Automação e operação confiável de modelos 
de ML em produção 
Preprocessing 
Pré-processamento 
Preparação dos dados brutos antes do 
treinamento 
Algorithm 
Algoritmo 
Receita matemática que define como o 
modelo aprende 
Hyperparameters 
Hiperparâmetros 
Configurações do algoritmo definidas antes do 
treino 
Overfitting 
Sobreajuste 
Modelo memoriza o treino e não generaliza 
para novos dados 
Underfitting 
Subajuste 
Modelo simples demais para capturar os 
padrões nos dados 
Accuracy 
Acurácia 
Porcentagem total de previsões corretas 
Precision 
Precisão 
Dos ditos positivos, quantos realmente são? 
Recall 
Revocação/Sensibilidade 
Dos realmente positivos, quantos o modelo 
identificou? 
F1-Score 
Média Harmônica P+R 
Equilíbrio entre precision e recall 
RMSE 
Raiz do Erro Quadrático 
Médio 
Erro médio ponderado para modelos de 
regressão 
Dataset 
Conjunto de Dados 
Coleção organizada de dados para uso em ML 


---
## Página 31

Instrutora Josely Castro    
31 
Versioning 
Versionamento 
Histórico imutável de versões dos dados 
Data Leakage 
Vazamento de Dados 
Informação do futuro contamina o treino — 
métricas infladas 
Missing Values 
Valores Ausentes 
Campos em branco que deveriam ter valor 
Historical Bias 
Viés Histórico 
Dados refletem discriminações passadas, 
modelo as perpetua 
EDA (Exploratory 
Data Analysis) 
Análise Exploratória de 
Dados 
Investigação inicial dos dados sem hipóteses 
fixas 
Outlier 
Valor Atípico 
Valor muito distante do padrão dos demais 
dados 
Correlation 
Correlação 
Medida de associação linear entre duas 
variáveis (-1 a +1) 
Feature Leaker 
Variável com Vazamento 
Feature com informação do futuro — data 
leakage por variável 
Feature 
Característica/Variável 
de Entrada 
Variável fornecida ao modelo para fazer a 
previsão 
Encoding 
Codificação Categórica 
Converter texto/categorias em números para o 
modelo 
Normalization 
Normalização 
Ajustar escala das variáveis para faixas 
comparáveis 
Feature Store 
Repositório de Features 
Sistema centralizado que garante consistência 
entre treino e produção 
Online Store 
Armazenamento Online 
Leitura <10ms para inferência em tempo real 
Offline Store 
Armazenamento Offline 
Histórico em S3 para retreino em lote 
Training-Serving 
Skew 
Divergência Treino-
Produção 
Features calculadas diferente no treino e em 
produção 
Data Drift 
Desvio de Dados 
Distribuição dos dados de produção difere do 
treino 
Concept Drift 
Deriva Conceitual 
A relação entre features e target mudou 
Baseline 
Linha de Base 
Referência estatística do treino para 
comparação 
Sampling 
Amostragem 
Capturar fração das requisições para 
monitoramento 
PSI (Population 
Stability Index) 
Índice de Estabilidade 
Populacional 
Mede quanto uma distribuição mudou vs. 
referência 
Silent Model 
Degradation 
Degradação Silenciosa 
Queda gradual de qualidade sem alertas 
visíveis 
Compliance 
Conformidade 
Regulatória 
Provar que o sistema opera dentro das regras 
aplicáveis 
 
 
 


---
## Página 32

Instrutora Josely Castro    
32 
Questão de Avaliação — Análise Completa 
Em um projeto de ML, uma equipe descobriu que após o deploy a precisão do modelo 
caiu drasticamente devido a mudanças nos dados em produção. Qual ferramenta da 
AWS deveria ter sido usada para detectar esse problema? 
 
Opção 
Veredicto 
Análise Detalhada 
A — 
SageMaker 
Data Wrangler 
INCORRETA 
O Data Wrangler atua ANTES do treinamento, na fase de 
preprocessing. Sua função é preparar e transformar dados 
para o treino — não monitorar dados em produção após o 
deploy. Não tem capacidade de detecção de drift. 
B — 
SageMaker 
Feature Store 
INCORRETA 
O Feature Store é um repositório para armazenar e 
disponibilizar features de forma consistente entre treino e 
inferência. Resolve o Training-Serving Skew, mas não 
monitora mudanças nas distribuições ao longo do tempo em 
produção. 
C — 
SageMaker 
Model Monitor 
CORRETA 
É exatamente para isso que o Model Monitor foi criado: 
captura o baseline dos dados de treino, monitora os dados 
que chegam ao endpoint em produção, compara as 
distribuições usando PSI e KL Divergence, e gera alertas 
quando detecta data drift — que é exatamente o que 
aconteceu na questão. 
D — Amazon 
Kendra 
INCORRETA 
O Kendra é um serviço de busca corporativa em linguagem 
natural — não tem nenhuma relação com treinamento, 
deploy ou monitoramento de modelos de ML. 
 
RESPOSTA CORRETA: (C) — JUSTIFICATIVA COM PALAVRAS-CHAVE 
Mapeamento de termos da questão para o conteúdo do módulo: 'após o deploy' → aconteceu 
em produção (pós-implantação). 'Precisão do modelo caiu' → model degradation. 'Mudanças 
nos dados em produção' → data drift / covariate shift. Ferramenta que detecta data drift e model 
degradation em produção → SageMaker Model Monitor. Esta é a associação mais importante 
deste módulo para certificações AWS. 
 
