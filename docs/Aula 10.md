# Aula 10.pdf

*Convertido automaticamente de PDF*


---
## Página 1

Serviços de IA da 
AWS 
Aplicações práticas
Textract, Translate, Personalize, Fraud Detector, Q, Lex, Titan, 
Nova e OpenSearch


---
## Página 2

V I S Ã O  G E R A L  D A  A U L A
Agenda
Visão geral
2 / 44
01
Amazon Textract
Extração inteligente de texto e dados de documentos
02
Amazon Translate
Tradução automática entre idiomas em tempo real
03
Recomendação e Personalize
Sistemas de recomendação e Amazon Personalize
04
Fraud Detector e Amazon Q
Detecção de fraudes e assistente generativo Amazon Q
05
Lex, Titan, Nova
Outros serviços de IA e busca inteligente
06
OpenSearch Service
Busca, análise e vetores com OpenSearch.


---
## Página 3

M Ó D U L O
Amazon Textract
Serviço gerenciado de extração de texto, formulários e tabelas a 
partir de documentos


---
## Página 4

M Ó D U L O  0 1   •   C O N C E I T O  I N I C I A L
O que é Amazon Textract?
Módulo 1 — Amazon Textract
4 / 44
Definição
■
Serviço de IA da AWS para extrair texto, dados e estruturas de 
documentos digitalizados
■
Vai além do OCR tradicional ao reconhecer formulários, 
tabelas e relações entre campos
■
Funciona com documentos em formatos PDF, JPEG, PNG e TIFF
■
Totalmente gerenciado, sem necessidade de treinar modelos 
próprios
Camadas de extração
Texto
Formulários
Tabelas
Consultas
(Queries)


---
## Página 5

M Ó D U L O  0 1   •   F U N C I O N A L I D A D E S
Funcionalidades do Amazon Textract
Módulo 1 — Amazon Textract
5 / 44
Definição
■
Detecta texto impresso e manuscrito em diversos idiomas com alta precisão
■
Identifica pares chave-valor em formulários como nome, CPF e endereço
■
Reconhece e estrutura tabelas mantendo linhas e colunas organizadas
■
Usa Queries para fazer perguntas em linguagem natural sobre o documento
OCR
Reconhece caracteres 
impressos e manuscritos em 
diferentes layouts e 
qualidades
Forms
Extrai pares de chave e valor 
de formulários estruturados 
ou semiestruturados
Tables
Preserva a estrutura de 
tabelas para análises e 
integrações com bancos de 
dados
Queries
Permite fazer perguntas em 
linguagem natural para extrair 
informações específicas do 
documento


---
## Página 6

M Ó D U L O  0 1   •   A N Á L I S E  A V A N Ç A D A
Análise avançada de documentos
Módulo 1 — Amazon Textract
6 / 44
■
Possui APIs especializadas para documentos de identidade, 
faturas e recibos
■
Identifica automaticamente campos sem treinamento prévio do 
usuário
■
Retorna metadados como confiança e localização de cada 
elemento extraído
■
Integra-se com S3, Lambda e outros serviços para fluxos 
automatizados
■
Processa documentos em lote ou em tempo real conforme a 
necessidade
D E S T A Q U E
Sem treinamento
O Textract já vem pré-treinado pela 
AWS, eliminando a necessidade de 
criar e ajustar modelos próprios para 
extração de dados.
Definição


---
## Página 7

M Ó D U L O  0 1   •   C A S O S  D E  U S O
Onde o Textract é aplicado
Módulo 1 — Amazon Textract
7 / 44
Definição
■
Automatiza o processamento de documentos em escala 
empresarial
■
Reduz erros e tempo gasto em tarefas manuais de digitação
■
Mantém a estrutura original do documento ao extrair dados
■
Atende setores como financeiro, saúde, jurídico e 
governamental
■
Pode ser combinado com Comprehend para análise semântica 
do texto extraído
Exemplos práticos
Financeiro
Faturas, contratos e extratos
Saúde
Prontuários e formulários
Jurídico
Petições e processos
Governo
Documentos de identidade


---
## Página 8

M Ó D U L O  0 1   •  C O M P A R A Ç Ã O
Textract comparado ao OCR tradicional
Módulo 1 — Amazon Textract
8 / 44
Amazon Textract
OCR tradicional
Aspecto
Texto, formulários, tabelas e queries
Apenas texto bruto
Conteúdo extraído
Preserva chaves, valores e relações entre campos
Perde a organização do documento
Estrutura
Reconhece manuscritos com boa acurácia
Suporte limitado ou inexistente
Manuscritos
Serviço gerenciado e escalável na nuvem
Instalação local e manutenção
Operação


---
## Página 9

M Ó D U L O
Amazon Translate
Serviço de tradução automática neural entre dezenas de idiomas, 
em tempo real e em lote


---
## Página 10

M Ó D U L O  0 2   •   C O N C E I T O
O que é Amazon Translate? 
Módulo 2 — Amazon Translate
10 / 44
Definição
■
Serviço de tradução automática baseado em redes neurais 
profundas
■
Traduz texto entre dezenas de idiomas com fluência próxima 
da humana
■
Funciona de forma totalmente gerenciada, sem necessidade 
de configurar modelos
■
Pode ser usado em tempo real via API ou em lote para grandes 
volumes
■
Cobra apenas pelo volume de caracteres traduzidos, sem 
custos fixos
Fluxo de tradução
Origem
Modelo
Destino


---
## Página 11

M Ó D U L O  0 2   •   P R O C E S S O  D E  T R A D U Ç Ã O
Como o Translate processa um texto?
Módulo 2 — Amazon Translate
11 / 44
1
Recebe o texto
O texto de origem é enviado 
por chamada de API ou 
arquivo em lote
2
Identifica o idioma
O serviço detecta 
automaticamente o idioma 
de origem quando não 
informado
3
Traduz com modelo 
neural
O texto passa pelo modelo 
neural que considera 
contexto e nuances
4
Devolve o resultado
O texto traduzido é 
retornado para a aplicação 
que solicitou
Todo o processo acontece em milissegundos, viabilizando aplicações em tempo real


---
## Página 12

M Ó D U L O  0 2   •   R E C U R S O S
Principais recursos do Amazon Translate
Módulo 2 — Amazon Translate
12 / 44
Tradução em tempo real
Traduz frases ou textos curtos por API com baixa latência 
para aplicações interativas.
Tradução em lote
Processa grandes volumes de documentos armazenados 
no Amazon S3 de forma assíncrona.
Terminologia personalizada
Permite definir traduções específicas para termos técnicos 
ou nomes próprios da empresa.
Tradução ativa personalizada
Adapta o modelo ao estilo e vocabulário da empresa 
usando exemplos paralelos.


---
## Página 13

M Ó D U L O
Recomendação e 
Personalize
Sistemas de recomendação, tipos de filtragem e o serviço 
gerenciado Amazon Personalize


---
## Página 14

M Ó D U L O  0 3   •   V O C A B U L Á R I O  E S S E N C I A L
Cinco conceitos sobre recomendação
Módulo 3 — Recomendação e Personalize
14 / 44
0 1
Usuário
Pessoa cujas 
preferências o sistema 
busca prever e atender
0 2
Item
Produto, conteúdo ou 
serviço a ser 
recomendado
0 3
Interação
Evento entre usuário e 
item, como cliques ou 
compras
0 4
Sinal
Indicação de 
preferência extraída do 
comportamento do 
usuário
0 5
Receita
Algoritmo pré-pronto 
do Amazon Personalize 
para um caso de uso


---
## Página 15

M Ó D U L O  0 3   •   C O N C E I T O  1  D E  4
Sistemas de Recomendação
Módulo 3 — Recomendação e Personalize
15 / 44
Definição
■
Sistemas que sugerem itens relevantes com base no 
comportamento do usuário
■
Aprendem padrões a partir de cliques, compras, avaliações e 
visualizações
■
Personalizam a experiência aumentando engajamento e 
conversão
■
Estão presentes em e-commerce, streaming, redes sociais e 
notícias
■
Quanto mais dados de qualidade, mais relevantes ficam as 
sugestões
A N A L O G I A
Vendedor atento
Pense em um vendedor que conhece o 
gosto de cada cliente e sugere 
produtos com base no que já 
compraram e em clientes parecidos.


---
## Página 16

M Ó D U L O  0 3   •   C O N C E I T O  2  D E  4
Tipos de filtragem
Módulo 3 — Recomendação e Personalize
16 / 44
Definição
■
A filtragem colaborativa recomenda com base em usuários 
parecidos
■
A filtragem baseada em conteúdo recomenda itens com 
atributos similares
■
Sistemas modernos combinam abordagens em modelos 
híbridos
■
Cada abordagem tem pontos fortes conforme o volume e tipo 
de dados
■
O Amazon Personalize implementa essas técnicas em receitas 
pré-prontas
Distinção essencial
Colaborativa
Usa o comportamento de muitos 
usuários para encontrar padrões em 
comum
Por conteúdo
Compara atributos dos itens, como 
gênero, autor ou categoria


---
## Página 17

M Ó D U L O  0 3   •   C O N C E I T O  3  D E  4
Amazon Personalize
Módulo 3 — Recomendação e Personalize
17 / 44
Definição
■
Serviço gerenciado da AWS para criar sistemas de 
recomendação personalizados
■
Baseado na mesma tecnologia usada pela Amazon.com em 
seus produtos
■
Aceita dados de usuários, itens e interações em formato CSV
■
Treina, avalia e implanta modelos com poucos cliques na 
console
■
Atualiza recomendações em tempo real conforme novas 
interações ocorrem
Características
Sem ML expert
Não exige cientista de dados
Tempo real
Atualiza com novos eventos
Multi-domínio
Varejo, mídia, conteúdo
Privado
Modelos isolados por cliente


---
## Página 18

M Ó D U L O  0 3   •   C O N C E I T O  4  D E  4
Receitas do Personalize
Módulo 3 — Recomendação e Personalize
18 / 44
Definição
■
Receitas são algoritmos pré-configurados para diferentes casos 
de uso
■
Cada receita resolve um problema específico de 
recomendação
■
Não é necessário escolher o algoritmo manualmente para 
começar
■
O Personalize ajusta hiperparâmetros automaticamente 
durante o treino
■
O resultado é uma campaign pronta para servir 
recomendações via API
R E C E I T A S   ×
P R I N C I P A I S
User-Personalization
Recomenda itens para um usuário específico
—
Similar-Items
Recomenda itens parecidos com um item 
dado
—
Personalized-Ranking
Reordena uma lista de itens para o usuário
—


---
## Página 19

M Ó D U L O  0 3   •   A P L I C A Ç Õ E S
Onde aplicar o Amazon Personalize
Módulo 3 — Recomendação e Personalize
19 / 44
Definição
■
E-commerce com vitrines de produtos relevantes para cada 
visitante
■
Plataformas de streaming sugerindo filmes, séries ou músicas
■
Portais de notícias destacando conteúdos do interesse de cada 
leitor
■
Aplicativos de viagens recomendando destinos e experiências
■
Educação online sugerindo cursos com base no histórico do 
aluno


---
## Página 20

M Ó D U L O
Detecção de Fraudes e 
Fraud Detector
Como identificar atividades suspeitas em escala usando o Amazon 
Fraud Detector


---
## Página 21

M Ó D U L O  0 4   •   D E F I N I Ç Ã O
O que é detecção de fraudes?
Módulo 4 — Detecção de Fraudes
21 / 44
Definição
■
Processo de identificar transações ou comportamentos 
suspeitos em tempo real
■
Combina regras de negócio com modelos de machine learning 
para maior precisão
■
Reduz prejuízos financeiros e protege reputação das empresas
■
Aplicada a pagamentos, abertura de contas, login e abuso de 
promoções
■
Quanto mais dados históricos, mais precisos ficam os modelos 
preditivos
Bilhões
de dólares em prejuízos anuais com fraudes 
online no mundo
Tempo real
para classificar uma transação suspeita


---
## Página 22

M Ó D U L O  0 4   •   D E F I N I Ç Ã O
Como funciona o Amazon Fraud Detector?
Módulo 4 — Detecção de Fraudes
22 / 44
Definição
■
Carrega dados históricos de eventos para treinar o modelo
■
Usa modelos pré-treinados pela AWS contra fraudes online comuns
■
Permite criar regras de negócio que complementam as previsões do modelo
■
Devolve uma pontuação de risco e uma decisão para cada evento avaliado
■
A resposta acontece em tempo real para integrar com o fluxo de transação


---
## Página 23

M Ó D U L O  0 4   •   D E F I N I Ç Ã O
Capacidades e limitações do Fraud Detector
Módulo 4 — Detecção de Fraudes
23 / 44
Capacidades
■
Detectar fraudes em pagamentos online e abertura 
de contas
■
Combinar machine learning e regras de negócio em 
uma única decisão
■
Treinar modelos personalizados com dados 
próprios da empresa
■
Aproveitar modelos pré-treinados para começar 
rapidamente
■
Avaliar eventos em tempo real durante a transação 
do cliente
Limitações
■
Depende da qualidade e quantidade dos dados 
históricos
■
Modelos precisam ser retreinados periodicamente 
com dados novos
■
Não substitui completamente investigação humana 
em casos complexos
■
Pode gerar falsos positivos que precisam ser 
ajustados com regras
■
Funcionalidade focada em fraudes online, não 
cobre todos os tipos


---
## Página 24

M Ó D U L O
Amazon Q
Assistente generativo da AWS, com versões para desenvolvedores 
e para análise de dados


---
## Página 25

M Ó D U L O  0 4   •   D E F I N I Ç Ã O
O que é Amazon Q?
Módulo 5 — Amazon Q
25 / 44
Definição
■
Assistente baseado em IA generativa criado pela AWS para uso corporativo
■
Atende casos de uso específicos com versões dedicadas a cada perfil de usuário
■
Conecta-se aos dados da empresa de forma segura e respeitando permissões
■
Conversa em linguagem natural e gera respostas, código e visualizações
■
Acelera tarefas do dia a dia em desenvolvimento, suporte e análise de dados


---
## Página 26

M Ó D U L O  0 4   •   C O M P A R A Ç Ã O
Amazon Q Developer x Amazon Q em QuickSight
Módulo 5 — Amazon Q
26 / 44
Q em QuickSight
Q Developer
Aspecto
Analistas de dados e usuários de negócio
Desenvolvedores e times de engenharia
Público-alvo
Análise e visualização de dados
Geração e explicação de código
Foco principal
Gráficos, dashboards e resumos automáticos
Funções, testes, refatorações e 
documentação
Saídas geradas
Dentro do Amazon QuickSight
IDEs, AWS Console e linha de comando
Onde é usado
Linguagem natural sobre dados corporativos
Inglês e linguagem técnica de programação
Linguagem do prompt


---
## Página 27

M Ó D U L O  0 4   •   A P L I C A B I L I D A D E
Quando usar o Amazon Q?
Módulo 5 — Amazon Q
27 / 44
Acelerar desenvolvimento
O time precisa gerar código, testes e documentação com mais agilidade
Apoio a operações na nuvem
É necessário consultar a documentação AWS de forma conversacional
Análise self-service
Usuários de negócio querem perguntar sobre dados em linguagem natural
Dashboards automáticos
É preciso criar e atualizar dashboards rapidamente no QuickSight
Conhecimento corporativo
Funcionários precisam consultar conteúdos internos da empresa com IA generativa


---
## Página 28

M Ó D U L O
Amazon Lex, Titan e Nova
Construção de bots conversacionais e modelos fundacionais para 
IA Generativa


---
## Página 29

M Ó D U L O  0 6   •   B O T S  C O N V E R S A C I O N A I S
Amazon Lex
Módulo 6 — Lex, Titan e Nova
29 / 44
Definição
■
Serviço para construir interfaces de conversação por voz e 
texto
■
Usa a mesma tecnologia da Alexa para entender e responder 
ao usuário
■
Combina reconhecimento de fala e compreensão de linguagem 
natural
■
Permite criar fluxos com intenções, slots e respostas 
configuráveis
■
Integra-se com Lambda, Connect e outros serviços de 
atendimento da AWS
C A S O S  D E  U S O
Bots
Atendimento ao cliente, agendamento 
de serviços, reservas e perguntas 
frequentes em sites e aplicativos.


---
## Página 30

M Ó D U L O  0 6   •   M O D E L O  F U N D A C I O N A L
Amazon Titan
Módulo 6 — Lex, Titan e Nova
30 / 44
Definição
■
Família de modelos fundacionais desenvolvida pela AWS, disponível no Amazon Bedrock
■
Inclui modelos para geração de texto, embeddings e geração de imagens
■
Treinado pela AWS com foco em qualidade, segurança e responsabilidade
■
Usado para resumos, geração de conteúdo, busca semântica e classificação
■
Pode ser personalizado com dados próprios da empresa de forma privada


---
## Página 31

M Ó D U L O  0 6   •   M O D E L O  M U L T I M O D A L
Amazon Nova
Módulo 6 — Lex, Titan e Nova
31 / 44
Definição
■
Nova geração de modelos fundacionais da AWS no Amazon 
Bedrock
■
Trabalha com texto, imagem e vídeo de forma multimodal
■
Disponível em variantes otimizadas para custo, velocidade ou 
qualidade
■
Pensado para empresas que precisam combinar diferentes 
tipos de mídia
■
Suporta personalização e ajustes para casos de uso específicos
Ideia central
“Um portfólio de modelos 
fundacionais, com diferentes 
níveis de capacidade e custo, 
em uma mesma família.”
Permite escolher o modelo mais 
adequado para cada tarefa, sem 
trocar de plataforma.


---
## Página 32

M Ó D U L O
OpenSearch Service
Serviço gerenciado de busca, análise e visualização que evoluiu 
para suportar busca vetorial


---
## Página 33

M Ó D U L O  0 7   •   C O N C E I T O
O que é Amazon OpenSearch Service?
Módulo 7 — OpenSearch Service
33 / 44
Definição
■
Serviço gerenciado da AWS para busca, análise e observabilidade de dados
■
Baseado nos projetos open source OpenSearch e OpenSearch Dashboards
■
Suporta busca por palavra-chave, busca semântica e busca vetorial
■
Indica relevância usando rankings e funciona em volumes massivos de dados
■
Combina logs, métricas e conteúdo textual em uma única plataforma


---
## Página 34

M Ó D U L O  0 7   •   I M P O R T Â N C I A
Por que o OpenSearch importa?
Módulo 7 — OpenSearch Service
34 / 44
Busca em escala
Indexa e consulta bilhões de documentos com tempo de resposta em 
milissegundos
Análise de logs
Centraliza logs de aplicações e infraestrutura para diagnóstico em tempo real
Busca vetorial
Suporta embeddings para busca semântica e aplicações de IA Generativa com 
RAG
Visualização integrada
OpenSearch Dashboards permite criar painéis interativos sobre os dados 
indexados


---
## Página 35

M Ó D U L O  0 7   •   B U S C A  S E M Â N T I C A
Busca semântica e RAG com OpenSearch
Módulo 7 — OpenSearch Service
35 / 44
Definição
■
OpenSearch armazena vetores gerados por modelos como o Amazon 
Titan
■
Permite encontrar documentos por significado, e não apenas por 
palavras-chave
■
Suporta o padrão RAG, em que LLMs consultam dados privados antes 
de responder
■
Conecta-se ao Bedrock para criar aplicações de busca conversacional 
sobre dados próprios
■
Combina busca tradicional e vetorial em uma só consulta para mais 
relevância
Pipeline RAG
pergunta
busca vetorial
contexto
resposta
Resposta enriquecida com dados privados


---
## Página 36

E N C E R R A M E N T O
Recapitulando os conceitos da aula
Encerramento
36 / 44
■
Amazon Textract extrai texto, formulários e tabelas de documentos digitalizados
■
Amazon Translate realiza tradução automática neural entre dezenas de idiomas
■
Amazon Personalize cria sistemas de recomendação personalizados em escala
■
Amazon Fraud Detector identifica atividades suspeitas combinando ML e regras
■
Amazon Q acelera trabalho de desenvolvedores e analistas de dados
■
Amazon Lex constrói bots conversacionais por voz e texto
■
Amazon Titan e Amazon Nova são modelos fundacionais disponíveis no Bedrock
■
Amazon OpenSearch Service entrega busca, análise e busca vetorial em escala


---
## Página 37

P e r g u n t a 1
Pergunta
37 / 44
(A) Amazon Lex
(B) Amazon Transcribe 
(C) Amazon Textract
(D) Amazon Personalize
Um hospital armazena formulários médicos de pacientes em formato PDF. Com o aumento no número de 
pacientes, o volume desses documentos está sobrecarregando a equipe administrativa. O hospital precisa de um 
sistema automatizado para converter os formulários em PDF para texto simples, facilitando o processamento e 
análise dos dados. Qual serviço da AWS atende a esse requisito?


---
## Página 38

P e r g u n t a 1
Pergunta
38 / 44
(A) Amazon Lex
(B) Amazon Transcribe 
(C) Amazon Textract
(D) Amazon Personalize
Um hospital armazena formulários médicos de pacientes em formato PDF. Com o aumento no número de 
pacientes, o volume desses documentos está sobrecarregando a equipe administrativa. O hospital precisa de um 
sistema automatizado para converter os formulários em PDF para texto simples, facilitando o processamento e 
análise dos dados. Qual serviço da AWS atende a esse requisito?


---
## Página 39

P e r g u n t a 2
Pergunta
39 / 44
(A) Transcrever as gravações de chamadas usando o Amazon Transcribe.
(B) Extrair informações das gravações de chamadas usando o Amazon SageMaker Model Monitor.
(C) Criar rótulos de classificação usando o Amazon Comprehend.
(D) Construir um chatbot conversacional usando o Amazon Lex.
Uma instituição financeira está implementando um sistema de atendimento ao cliente e deseja obter insights a 
partir das interações telefônicas com os clientes. A instituição precisa transcrever e analisar o conteúdo das 
chamadas para extrair informações importantes sobre as necessidades dos clientes. Qual solução atende a esses 
requisitos?


---
## Página 40

P e r g u n t a 2
Pergunta
40/ 44
(A) Transcrever as gravações de chamadas usando o Amazon Transcribe.
(B) Extrair informações das gravações de chamadas usando o Amazon SageMaker Model Monitor.
(C) Criar rótulos de classificação usando o Amazon Comprehend.
(D) Construir um chatbot conversacional usando o Amazon Lex.
Uma instituição financeira está implementando um sistema de atendimento ao cliente e deseja obter insights a 
partir das interações telefônicas com os clientes. A instituição precisa transcrever e analisar o conteúdo das 
chamadas para extrair informações importantes sobre as necessidades dos clientes. Qual solução atende a esses 
requisitos?


---
## Página 41

P e r g u n t a 3
Pergunta
41 / 44
(A) Executar um aplicativo sem provisionar ou gerenciar servidores. 
(B) Criar trechos de software, rastrear referências e rastrear licenças de código aberto.
(C) Habilitar comandos de voz para codificação e fornecer busca em linguagem natural. 
(D) Converter arquivos de áudio em documentos de texto usando modelos de ML.
Uma empresa busca soluções para aumentar a eficiência no desenvolvimento de software utilizando ferramentas 
de IA generativa. Ela está considerando implementar o Amazon Q Developer. De que forma o Amazon Q Developer 
pode contribuir para atender a essas necessidades?


---
## Página 42

P e r g u n t a 3
Pergunta
42 / 44
(A) Executar um aplicativo sem provisionar ou gerenciar servidores. 
(B) Criar trechos de software, rastrear referências e rastrear licenças de código aberto.
(C) Habilitar comandos de voz para codificação e fornecer busca em linguagem natural. 
(D) Converter arquivos de áudio em documentos de texto usando modelos de ML.
Uma empresa busca soluções para aumentar a eficiência no desenvolvimento de software utilizando ferramentas 
de IA generativa. Ela está considerando implementar o Amazon Q Developer. De que forma o Amazon Q Developer 
pode contribuir para atender a essas necessidades?


---
## Página 43

P e r g u n t a 4
Pergunta
43 / 44
(A) Desenvolver um sistema de detecção de anomalias. 
(B) Criar um sistema de reconhecimento de entidades nomeadas (NLP). 
(C) Criar um sistema de previsão de fraudes.
(D) Construir um sistema de reconhecimento de fala.
Uma instituição financeira deseja usar IA para monitorar suas transações digitais em busca de atividades 
incomuns. A solução de IA precisa identificar comportamentos suspeitos que possam indicar atividades irregulares 
ou não autorizadas. Qual solução atende a esses requisitos?


---
## Página 44

P e r g u n t a 4
Pergunta
44 / 44
(A) Desenvolver um sistema de detecção de anomalias. 
(B) Criar um sistema de reconhecimento de entidades nomeadas (NLP). 
(C) Criar um sistema de previsão de fraudes.
(D) Construir um sistema de reconhecimento de fala.
Uma instituição financeira deseja usar IA para monitorar suas transações digitais em busca de atividades 
incomuns. A solução de IA precisa identificar comportamentos suspeitos que possam indicar atividades irregulares 
ou não autorizadas. Qual solução atende a esses requisitos?
