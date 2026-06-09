# Simulado_Comentado_03.pptx.pdf

*Convertido automaticamente de PDF*


---
## Página 1

REVISÃO  •  ENCONTROS 7 A 14
Simulado Comentado 03
AWS Certified AI Practitioner   •   AIF-C01
20 questões  ·  com gabarito e comentário em cada alternativa


---
## Página 2

SIMULADO   •   PERGUNTA 1 DE 20   •   ENCONTRO 7
PERGUNTA
Uma equipe de visão computacional precisa não apenas IDENTIFICAR se há um veículo na imagem, mas também DESENHAR a caixa 
delimitadora ao redor de cada veículo e indicar sua POSIÇÃO precisa na cena.
Que tipo de tarefa de visão computacional é a MAIS adequada?
A
Classificação de imagens (Image Classification).
B
Detecção de objetos (Object Detection).
C
Segmentação semântica (Semantic Segmentation) ao nível de pixel.
D
Geração de imagens (Image Generation) com modelos de difusão.
1 / 20


---
## Página 3

GABARITO   •   PERGUNTA 1 DE 20   •   ENCONTRO 7
1 / 20
RESPOSTA
PERGUNTA
Uma equipe de visão computacional precisa não apenas IDENTIFICAR se há um veículo na imagem, mas também
DESENHAR a caixa delimitadora ao redor de cada veículo e indicar sua POSIÇÃO precisa na cena. Que tipo de tarefa
de visão computacional é a MAIS adequada?
A
Classificação de imagens (Image Classification).
Só atribui uma classe à imagem inteira, sem localizar.
B
Detecção de objetos (Object Detection).
Identifica múltiplas instâncias e devolve a bounding box de cada objeto.
✓ CORRETA
C
Segmentação semântica (Semantic Segmentation) ao nível de pixel.
Rotula cada pixel, mais detalhada e custosa do que o caso pede.
D
Geração de imagens (Image Generation) com modelos de difusão.
Cria imagens novas, não analisa cenas existentes.
💡
Bounding box + múltiplos objetos = Object Detection. Classificação não localiza, segmentação vai ao nível de pixel.


---
## Página 4

SIMULADO   •   PERGUNTA 2 DE 20   •   ENCONTRO 7
PERGUNTA
Uma operadora de pedágios quer LER AUTOMATICAMENTE as placas dos veículos a partir de fotos capturadas pelas câmeras de 
aproximação, sem treinar um modelo do zero.
Qual recurso da AWS é o MAIS adequado?
A
Amazon Textract, para análise de formulários e tabelas em documentos.
B
Amazon Polly, para converter texto em fala.
C
Amazon Comprehend, para análise de entidades em texto já transcrito.
D
Amazon Rekognition com DetectText, para extrair texto de IMAGENS de cenas naturais.
2 / 20


---
## Página 5

GABARITO   •   PERGUNTA 2 DE 20   •   ENCONTRO 7
2 / 20
RESPOSTA
PERGUNTA
Uma operadora de pedágios quer LER AUTOMATICAMENTE as placas dos veículos a partir de fotos capturadas pelas câmeras de aproximação, sem 
treinar um modelo do zero. Qual recurso da AWS é o MAIS adequado?
A
Amazon Textract, para análise de formulários e tabelas em documentos.
Ótimo para documentos digitalizados, não para cenas de câmera.
B
Amazon Polly, para converter texto em fala.
Faz o inverso: texto → voz.
C
Amazon Comprehend, para análise de entidades em texto já transcrito.
Trabalha sobre texto já existente, não sobre imagens.
D
Amazon Rekognition com DetectText, para extrair texto de IMAGENS de cenas naturais.
Extrai texto de imagens de cenas naturais (placas, letreiros).
✓ CORRETA
💡
Texto dentro de IMAGENS de cena natural = Rekognition DetectText. Textract é para documentos.


---
## Página 6

SIMULADO   •   PERGUNTA 3 DE 20   •   ENCONTRO 7
PERGUNTA
Uma seguradora armazena formulários digitalizados de clientes em buckets Amazon S3 e precisa identificar
automaticamente arquivos que contenham informações pessoais sensíveis (PII), como CPF e cartão de crédito, para
evitar vazamentos. 
Qual serviço da AWS é o MAIS adequado?
A
AWS Trusted Advisor, para recomendações de custo e segurança.
B
Amazon GuardDuty, para detectar atividades maliciosas na conta AWS.
C
Amazon Macie, que detecta e classifica dados sensíveis em buckets S3 com ML.
D
AWS CloudTrail, para registrar chamadas de API.
3 / 20


---
## Página 7

GABARITO   •   PERGUNTA 3 DE 20   •   ENCONTRO 7
3 / 20
RESPOSTA
PERGUNTA
Uma seguradora armazena formulários digitalizados de clientes em buckets Amazon S3 e precisa identificar automaticamente arquivos que 
contenham informações pessoais sensíveis (PII), como CPF e cartão de crédito, para evitar vazamentos. Qual serviço da AWS é o MAIS adequado?
A
AWS Trusted Advisor, para recomendações de custo e segurança.
Faz recomendações genéricas, não classifica conteúdo.
B
Amazon GuardDuty, para detectar atividades maliciosas na conta AWS.
Detecta ameaças na conta, não inspeciona conteúdo.
C
Amazon Macie, que detecta e classifica dados sensíveis em buckets S3 com ML.
Descobre, classifica e protege PII em buckets S3, com alertas.
✓ CORRETA
D
AWS CloudTrail, para registrar chamadas de API.
Registra eventos de API, não o conteúdo dos objetos.
💡
Classificar dados sensíveis (PII) dentro de buckets S3 = Amazon Macie.


---
## Página 8

SIMULADO   •   PERGUNTA 4 DE 20   •   ENCONTRO 8
PERGUNTA
Uma empresa farmacêutica usa Amazon Polly para narrar treinamentos internos. Os textos contêm muitos NOMES TÉCNICOS de 
medicamentos que o Polly pronuncia INCORRETAMENTE por padrão. A empresa precisa garantir a pronúncia adequada SEM alterar 
o texto-fonte. 
Qual recurso atende a esse requisito?
A
Mudar a voz do Polly para uma voz neural diferente.
B
Migrar para o Amazon Transcribe para realizar a transcrição.
C
Aumentar a velocidade de fala (rate) do Polly globalmente.
D
Configurar um Lexicon (léxico de pronúncia).
4 / 20


---
## Página 9

GABARITO   •   PERGUNTA 4 DE 20   •   ENCONTRO 8
4 / 20
RESPOSTA
PERGUNTA
Uma empresa farmacêutica usa Amazon Polly para narrar treinamentos internos. Os textos contêm muitos NOMES TÉCNICOS de medicamentos que o 
Polly pronuncia INCORRETAMENTE por padrão. A empresa precisa garantir a pronúncia adequada SEM alterar o texto-fonte. Qual recurso atende a 
esse requisito?
A
Mudar a voz do Polly para uma voz neural diferente.
Muda o timbre, mas não corrige a pronúncia.
B
Migrar para o Amazon Transcribe para realizar a transcrição.
É o serviço inverso: fala → texto.
C
Aumentar a velocidade de fala (rate) do Polly globalmente.
Só acelera a fala, não ajusta a pronúncia.
D
Configurar um Lexicon (léxico de pronúncia).
Mapeia termos para pronúncias customizadas sem alterar o texto.
✓ CORRETA
💡
Pronúncia customizada no Polly sem tocar no texto = Lexicon (formato PLS).


---
## Página 10

SIMULADO   •   PERGUNTA 5 DE 20   •   ENCONTRO 8
PERGUNTA
Uma editora quer ANALISAR milhares de artigos de blog para descobrir, de forma NÃO SUPERVISIONADA, quais
TÓPICOS PRINCIPAIS aparecem na coleção sem precisar definir categorias previamente. 
Qual recurso da AWS atende a esse requisito?
A
Amazon Comprehend, Topic Modeling, que descobre tópicos latentes em uma coleção de documentos.
B
Amazon Comprehend, Sentiment Analysis, que classifica sentimento positivo/negativo/neutro.
C
Amazon Comprehend, Custom Classification, que requer categorias rotuladas.
D
Amazon Translate, que traduz texto entre idiomas.
5 / 20


---
## Página 11

GABARITO   •   PERGUNTA 5 DE 20   •   ENCONTRO 8
5 / 20
RESPOSTA
PERGUNTA
Uma editora quer ANALISAR milhares de artigos de blog para descobrir, de forma NÃO SUPERVISIONADA, quais TÓPICOS PRINCIPAIS aparecem na 
coleção sem precisar definir categorias previamente. Qual recurso da AWS atende a esse requisito?
A
Amazon Comprehend, Topic Modeling, que descobre tópicos latentes em uma coleção de documentos.
Descobre tópicos latentes (LDA), não supervisionado, sem rótulos.
✓ CORRETA
B
Amazon Comprehend, Sentiment Analysis, que classifica sentimento positivo/negativo/neutro.
Detecta emoção, não tópicos.
C
Amazon Comprehend, Custom Classification, que requer categorias rotuladas.
Exige categorias previamente rotuladas.
D
Amazon Translate, que traduz texto entre idiomas.
Apenas traduz idiomas.
💡
Tópicos sem rótulos prévios = Comprehend Topic Modeling (baseado em LDA).


---
## Página 12

SIMULADO   •   PERGUNTA 6 DE 20   •   ENCONTRO 9
PERGUNTA
Uma empresa processa milhares de contratos digitalizados e precisa extrair CAMPOS ESPECÍFICOS de cada
Documento, por exemplo, ‘Qual é a data de assinatura?’ e ‘Qual é o valor total do contrato?’, sem treinar um
modelo customizado e usando perguntas em linguagem natural. 
Qual recurso atende a esse requisito?
A
Amazon Textract, Queries, que extrai informações respondendo a perguntas em linguagem natural sobre o documento.
B
Amazon Comprehend Custom Entity Recognition, treinando um modelo customizado para cada campo.
C
Amazon Rekognition Custom Labels, para identificar logos no documento.
D
Amazon Translate, para traduzir o contrato antes da análise.
6 / 20


---
## Página 13

GABARITO   •   PERGUNTA 6 DE 20   •   ENCONTRO 9
6 / 20
RESPOSTA
PERGUNTA
Uma empresa processa milhares de contratos digitalizados e precisa extrair CAMPOS ESPECÍFICOS de cada documento, por exemplo, ‘Qual é a data de 
assinatura?’ e ‘Qual é o valor total do contrato?’, sem treinar um modelo customizado e usando perguntas em linguagem natural. Qual recurso 
atende a esse requisito?
A
Amazon Textract, Queries, que extrai informações respondendo a perguntas em linguagem natural sobre o documento.
Extrai campos respondendo a perguntas em linguagem natural, sem treino.
✓ CORRETA
B
Amazon Comprehend Custom Entity Recognition, treinando um modelo customizado para cada campo.
Exigiria rotular um dataset por campo.
C
Amazon Rekognition Custom Labels, para identificar logos no documento.
É para imagens, não para documentos.
D
Amazon Translate, para traduzir o contrato antes da análise.
Traduz, não extrai informação.
💡
Perguntas em linguagem natural sobre documentos = Textract Queries (sem modelo customizado).


---
## Página 14

SIMULADO   •   PERGUNTA 7 DE 20   •   ENCONTRO 9
PERGUNTA
Uma empresa de tecnologia traduz documentação técnica do inglês para o português usando Amazon Translate e precisa garantir 
que TERMOS ESPECÍFICOS do produto (nomes de funcionalidades, jargões internos) sejam traduzidos de forma CONSISTENTE em 
todos os documentos.
Qual recurso atende a esse requisito?
A
Utilizar o Active Custom Translation (ACT) para processar os documentos em lote, adaptando o modelo fundacional ao estilo técnico da 
empresa.
B
Implementar o recurso de Custom Terminology, fornecendo um arquivo de glossário (CSV ou TMX) para o serviço aplicar durante a 
inferência da tradução.
C
Configurar o Amazon Comprehend Custom Entities para identificar e isolar os jargões do produto no texto original antes de realizar o 
processamento linguístico.
D
Criar um dicionário específico da empresa usando o Amazon Transcribe Custom Vocabulary para mapear os nomes das funcionalidades 
para o português.
7 / 20


---
## Página 15

GABARITO   •   PERGUNTA 7 DE 20   •   ENCONTRO 9
7 / 20
RESPOSTA
PERGUNTA
Uma empresa de tecnologia traduz documentação técnica do inglês para o português usando Amazon Translate e precisa garantir que TERMOS 
ESPECÍFICOS do produto (nomes de funcionalidades, jargões internos) sejam traduzidos de forma CONSISTENTE em todos os documentos. Qual recurso 
atende a esse requisito?
A
Utilizar o Active Custom Translation (ACT) para processar os documentos em lote, adaptando o modelo fundacional ao estilo técnico 
da empresa.
Translate não tem parâmetro de temperatura.
B
Implementar o recurso de Custom Terminology, fornecendo um arquivo de glossário (CSV ou TMX) para o serviço aplicar durante a 
inferência da tradução.
Aplica um glossário (CSV/TMX) para traduções consistentes.
✓ CORRETA
C
Configurar o Amazon Comprehend Custom Entities para identificar e isolar os jargões do produto no texto original antes de realizar 
o processamento linguístico.
Trabalho extra e desnecessário.
D
Criar um dicionário específico da empresa usando o Amazon Transcribe Custom Vocabulary para mapear os nomes das 
funcionalidades para o português.
Esforço altíssimo, sem ganho.
💡
Glossário de termos consistente no Translate = Custom Terminology.


---
## Página 16

SIMULADO   •   PERGUNTA 8 DE 20   •   ENCONTRO 9
PERGUNTA
Uma empresa usa o Amazon Connect como central de atendimento e quer oferecer aos AGENTES, EM TEMPO REAL durante as 
chamadas, respostas sugeridas e trechos relevantes da base de conhecimento interna.
Qual serviço da AWS atende a esse requisito?
A
Amazon Q in Connect, que sugere respostas e ações em tempo real para agentes de call center.
B
Amazon Q Developer, focado em geração e revisão de código para desenvolvedores.
C
Amazon Q Business, para consultas a dados corporativos a partir de uma interface web.
D
Amazon Polly, para gerar áudios de mensagens automáticas.
8 / 20


---
## Página 17

GABARITO   •   PERGUNTA 8 DE 20   •   ENCONTRO 9
8 / 20
RESPOSTA
PERGUNTA
Uma empresa usa o Amazon Connect como central de atendimento e quer oferecer aos AGENTES, EM TEMPO REAL durante as chamadas, respostas 
sugeridas e trechos relevantes da base de conhecimento interna. Qual serviço da AWS atende a esse requisito?
A
Amazon Q in Connect, que sugere respostas e ações em tempo real para agentes de call center.
Sugere respostas e ações em tempo real aos agentes do call center.
✓ CORRETA
B
Amazon Q Developer, focado em geração e revisão de código para desenvolvedores.
Focado em geração e revisão de código.
C
Amazon Q Business, para consultas a dados corporativos a partir de uma interface web.
Consultas web a dados, não tempo real em chamadas.
D
Amazon Polly, para gerar áudios de mensagens automáticas.
Só gera áudio.
💡
Assistência ao agente em tempo real no Connect = Amazon Q in Connect.


---
## Página 18

SIMULADO   •   PERGUNTA 9 DE 20   •   ENCONTRO 10
PERGUNTA
Uma empresa quer um assistente de IA generativa que não só RESPONDA perguntas, mas também EXECUTE AÇÕES, consultar a API 
do CRM, atualizar registros no banco e disparar notificações, orquestrando passos complexos a partir de uma instrução em 
linguagem natural.
Qual recurso do Amazon Bedrock atende a esses requisitos?
A
Amazon Bedrock Knowledge Bases, para consultar documentos via RAG.
B
Amazon Bedrock Agents, para orquestrar ferramentas e executar ações multi-etapas.
C
Amazon Bedrock Guardrails, para filtrar conteúdo das respostas.
D
Amazon Bedrock Model Evaluation, para comparar modelos.
9 / 20


---
## Página 19

GABARITO   •   PERGUNTA 9 DE 20   •   ENCONTRO 10
9 / 20
RESPOSTA
PERGUNTA
Uma empresa quer um assistente de IA generativa que não só RESPONDA perguntas, mas também EXECUTE AÇÕES, consultar a API do CRM, atualizar 
registros no banco e disparar notificações, orquestrando passos complexos a partir de uma instrução em linguagem natural. Qual recurso do Amazon 
Bedrock atende a esses requisitos?
A
Amazon Bedrock Knowledge Bases, para consultar documentos via RAG.
Só fornecem contexto via RAG, sem executar ações.
B
Amazon Bedrock Agents, para orquestrar ferramentas e executar ações multi-etapas.
Orquestram ferramentas e executam ações multi-etapas (invocam APIs).
✓ CORRETA
C
Amazon Bedrock Guardrails, para filtrar conteúdo das respostas.
Apenas filtram o conteúdo das respostas.
D
Amazon Bedrock Model Evaluation, para comparar modelos.
Serve para comparar modelos.
💡
Executar ações e orquestrar ferramentas = Bedrock Agents. Knowledge Bases só trazem contexto.


---
## Página 20

SIMULADO   •   PERGUNTA 10 DE 20   •   ENCONTRO 10
PERGUNTA
Uma empresa quer que um LLM no Amazon Bedrock RESPONDA perguntas com base em manuais INTERNOS que mudam várias 
vezes por mês, EVITANDO o custo de fine-tuning a cada atualização e buscando o conteúdo MAIS RECENTE em tempo de 
inferência.
Qual abordagem atende a esses requisitos?
A
Fazer fine-tuning do modelo toda vez que um manual for atualizado.
B
Aumentar a temperatura do modelo para gerar respostas mais criativas.
C
Implementar RAG usando Amazon Bedrock Knowledge Bases, que recupera trechos em tempo de inferência.
D
Pré-treinar continuamente o modelo (continued pre-training) a cada nova versão.
10 / 20


---
## Página 21

GABARITO   •   PERGUNTA 10 DE 20   •   ENCONTRO 10
10 / 20
RESPOSTA
PERGUNTA
Uma empresa quer que um LLM no Amazon Bedrock RESPONDA perguntas com base em manuais INTERNOS que mudam várias vezes por mês, 
EVITANDO o custo de fine-tuning a cada atualização e buscando o conteúdo MAIS RECENTE em tempo de inferência. Selecione DUAS práticas 
RECOMENDADAS ao usar o Amazon SageMaker Ground Truth.
A
Fazer fine-tuning do modelo toda vez que um manual for atualizado.
Caro e demorado para conteúdo que muda sempre.
B
Aumentar a temperatura do modelo para gerar respostas mais criativas.
Piora a alucinação, não traz dados novos.
C
Implementar RAG usando Amazon Bedrock Knowledge Bases, que recupera trechos em tempo de inferência.
Recupera trechos relevantes em tempo de inferência, sem retreinar.
✓ CORRETA
D
Pré-treinar continuamente o modelo (continued pre-training) a cada nova versão.
Ciclos longos e custosos, inadequado para conteúdo dinâmico.
💡
Conteúdo que muda sempre, sem retreino = RAG com Knowledge Bases.


---
## Página 22

SIMULADO   •   PERGUNTA 11 DE 20   •   ENCONTRO 10
PERGUNTA
SELECIONE 2
Uma equipe precisa rotular 100.000 imagens médicas para treinar um classificador e quer GARANTIR a qualidade dos rótulos sem precisar 
construir uma aplicação de rotulagem do zero.
Selecione DUAS práticas RECOMENDADAS ao usar o Amazon SageMaker Ground Truth.
A
Rotular manualmente todas as imagens em planilhas locais, sem workflow gerenciado.
B
Eliminar revisões cruzadas (consolidation) entre rotuladores para acelerar.
C
Usar a integração nativa com forças de trabalho (workforces), funcionários, AWS Marketplace ou Mechanical Turk.
D
Treinar o modelo final ANTES de iniciar a rotulagem para acelerar.
E
Habilitar auto-labeling (rotulagem ativa) para reduzir custo nos casos de alta confiança.
11 / 20


---
## Página 23

GABARITO   •   PERGUNTA 11 DE 20   •   ENCONTRO 10
11 / 20
RESPOSTA
SELECIONE 2
PERGUNTA
Uma equipe precisa rotular 100.000 imagens médicas para treinar um classificador e quer GARANTIR a qualidade dos rótulos sem precisar construir uma 
aplicação de rotulagem do zero. Selecione DUAS práticas RECOMENDADAS ao usar o Amazon SageMaker Ground Truth.
A
Rotular manualmente todas as imagens em planilhas locais, sem workflow gerenciado.
Anula o propósito do serviço gerenciado.
B
Eliminar revisões cruzadas (consolidation) entre rotuladores para acelerar.
Destrói a qualidade dos rótulos.
C
Usar a integração nativa com forças de trabalho (workforces), funcionários, AWS Marketplace ou Mechanical Turk.
Funcionários, AWS Marketplace ou Mechanical Turk, sem app ad hoc.
✓ CORRETA
D
Treinar o modelo final ANTES de iniciar a rotulagem para acelerar.
Circular, sem rótulos não há treino.
E
Habilitar auto-labeling (rotulagem ativa) para reduzir custo nos casos de alta confiança.
O modelo rotula os casos de alta confiança e reduz custo.
✓ CORRETA
💡
Ground Truth: use workforces gerenciadas + auto-labeling, mantendo humanos nos casos difíceis.


---
## Página 24

SIMULADO   •   PERGUNTA 12 DE 20   •   ENCONTRO 11
PERGUNTA
Uma equipe testa muitas combinações de hiperparâmetros, algoritmos e datasets em paralelo e precisa REGISTRAR de forma 
organizada os parâmetros, métricas e artefatos de cada execução para COMPARAR resultados depois.
Qual recurso do Amazon SageMaker atende a esse requisito?
A
Amazon SageMaker Experiments, para rastrear, organizar e comparar execuções de treino.
B
Amazon SageMaker Model Monitor, para detectar drift em produção.
C
Amazon SageMaker Feature Store, para armazenar atributos.
D
Amazon SageMaker Ground Truth, para rotular dados.
12 / 20


---
## Página 25

GABARITO   •   PERGUNTA 12 DE 20   •   ENCONTRO 11
12 / 20
RESPOSTA
PERGUNTA
Uma equipe testa muitas combinações de hiperparâmetros, algoritmos e datasets em paralelo e precisa REGISTRAR de forma organizada os 
parâmetros, métricas e artefatos de cada execução para COMPARAR resultados depois. Qual recurso do Amazon SageMaker atende a esse requisito?
A
Amazon SageMaker Experiments, para rastrear, organizar e comparar execuções de treino.
Rastreia, organiza e compara execuções (runs) de treino.
✓ CORRETA
B
Amazon SageMaker Model Monitor, para detectar drift em produção.
Atua em produção (drift), não no treino.
C
Amazon SageMaker Feature Store, para armazenar atributos.
Gerencia atributos, não experimentos.
D
Amazon SageMaker Ground Truth, para rotular dados.
Serve para rotular dados.
💡
Rastrear e comparar runs de treino = SageMaker Experiments.


---
## Página 26

SIMULADO   •   PERGUNTA 13 DE 20   •   ENCONTRO 11
PERGUNTA
SELECIONE 2
Uma empresa quer adotar o Amazon SageMaker Clarify em seu pipeline de ML para atender aos requisitos de IA RESPONSÁVEL exigidos pelo time 
de compliance.
Selecione DUAS capacidades fornecidas pelo SageMaker Clarify.
A
Detectar VIÉS (bias) em dados de treinamento e nas previsões do modelo.
B
Fornecer EXPLICAÇÕES de previsões (feature attribution / valores de Shapley).
C
Implantar endpoints com auto-scaling para inferência em tempo real.
D
Armazenar e versionar features compartilhadas entre times.
E
Traduzir documentos automaticamente para outros idiomas.
13 / 20


---
## Página 27

GABARITO   •   PERGUNTA 13 DE 20   •   ENCONTRO 11
13 / 20
RESPOSTA
SELECIONE 2
PERGUNTA
Uma empresa quer adotar o Amazon SageMaker Clarify em seu pipeline de ML para atender aos requisitos de IA RESPONSÁVEL exigidos pelo time de compliance. 
Selecione DUAS capacidades fornecidas pelo SageMaker Clarify.
A
Detectar VIÉS (bias) em dados de treinamento e nas previsões do modelo.
Mede viés no dataset e nas previsões do modelo.
✓ CORRETA
B
Fornecer EXPLICAÇÕES de previsões (feature attribution / valores de Shapley).
Promove transparência e explicabilidade.
✓ CORRETA
C
Implantar endpoints com auto-scaling para inferência em tempo real.
Isso é função do SageMaker Hosting.
D
Armazenar e versionar features compartilhadas entre times.
Isso é o Feature Store.
E
Traduzir documentos automaticamente para outros idiomas.
Isso é o Amazon Translate.
💡
Clarify = IA responsável: detecção de viés + explicabilidade (Shapley).


---
## Página 28

SIMULADO   •   PERGUNTA 14 DE 20   •   ENCONTRO 12
PERGUNTA
Uma empresa usa um LLM do Amazon Bedrock para gerar respostas a clientes. Mesmo ajustando os prompts com cuidado, o 
modelo NÃO mantém o tom corporativo ESPECÍFICO de forma CONSISTENTE em milhares de interações por dia.
Qual abordagem é a MAIS adequada para resolver isso?
A
Continuar refinando o prompt indefinidamente até obter consistência total.
B
Aumentar drasticamente o parâmetro de temperatura para forçar o tom.
C
Realizar fine-tuning do modelo com exemplos rotulados que demonstrem o tom corporativo desejado.
D
Trocar para um modelo mais antigo que tenha menos parâmetros.
14 / 20


---
## Página 29

GABARITO   •   PERGUNTA 14 DE 20   •   ENCONTRO 12
14 / 20
RESPOSTA
PERGUNTA
Uma empresa usa um LLM do Amazon Bedrock para gerar respostas a clientes. Mesmo ajustando os prompts com cuidado, o modelo NÃO mantém o 
tom corporativo ESPECÍFICO de forma CONSISTENTE em milhares de interações por dia. Qual abordagem é a MAIS adequada para resolver isso?
A
Continuar refinando o prompt indefinidamente até obter consistência total.
Tem retornos decrescentes; não garante consistência.
B
Aumentar drasticamente o parâmetro de temperatura para forçar o tom.
Piora a consistência.
C
Realizar fine-tuning do modelo com exemplos rotulados que demonstrem o tom corporativo desejado.
O modelo aprende o padrão específico da empresa, em escala.
✓ CORRETA
D
Trocar para um modelo mais antigo que tenha menos parâmetros.
Tende a ter desempenho inferior, não resolve.
💡
Quando o prompt não dá consistência em escala, a resposta é fine-tuning.


---
## Página 30

SIMULADO   •   PERGUNTA 15 DE 20   •   ENCONTRO 12
PERGUNTA
Uma empresa fará fine-tuning de um LLM no Amazon Bedrock com dados internos. Para DETECTAR overfitting durante o processo e 
garantir que o modelo GENERALIZE para dados não vistos, qual prática é FUNDAMENTAL?
A
Usar TODOS os dados disponíveis no conjunto de treinamento, sem reservar amostras.
B
Treinar com o maior número possível de épocas (epochs) sem interrupção.
C
Aumentar a temperatura do modelo durante o treinamento.
D
Reservar uma parte dos dados como conjunto de VALIDAÇÃO separado para monitorar a perda.
15 / 20


---
## Página 31

GABARITO   •   PERGUNTA 15 DE 20   •   ENCONTRO 12
15 / 20
RESPOSTA
PERGUNTA
Uma empresa fará fine-tuning de um LLM no Amazon Bedrock com dados internos. Para DETECTAR overfitting durante o processo e garantir que o 
modelo GENERALIZE para dados não vistos, qual prática é FUNDAMENTAL?
A
Usar TODOS os dados disponíveis no conjunto de treinamento, sem reservar amostras.
Impede detectar overfitting.
B
Treinar com o maior número possível de épocas (epochs) sem interrupção.
Agrava o overfitting.
C
Aumentar a temperatura do modelo durante o treinamento.
Temperatura só afeta a inferência, não o treino.
D
Reservar uma parte dos dados como conjunto de VALIDAÇÃO separado para monitorar a perda.
Monitora a perda em dados não vistos e permite early stopping.
✓ CORRETA
💡
Conjunto de validação separado detecta overfitting: treino cai, validação sobe → parar (early stopping).


---
## Página 32

SIMULADO   •   PERGUNTA 16 DE 20   •   ENCONTRO 13
PERGUNTA
Uma equipe quer avaliar a qualidade INTRÍNSECA de modelos de linguagem comparando quão BEM cada modelo prevê o 
PRÓXIMO TOKEN em um conjunto de teste de texto.
Qual métrica é a MAIS adequada?
A
BLEU, que mede sobreposição de n-gramas entre tradução gerada e referência.
B
Perplexity, que mede quão BEM o modelo prevê o próximo token (valores menores = melhor).
C
Acurácia binária entre saída e gabarito.
D
Pontuação F1 sobre classes de tópicos.
16 / 20


---
## Página 33

GABARITO   •   PERGUNTA 16 DE 20   •   ENCONTRO 13
16 / 20
RESPOSTA
PERGUNTA
Uma equipe quer avaliar a qualidade INTRÍNSECA de modelos de linguagem comparando quão BEM cada modelo prevê o PRÓXIMO TOKEN em um 
conjunto de teste de texto. Qual métrica é a MAIS adequada?
A
BLEU, que mede sobreposição de n-gramas entre tradução gerada e referência.
Métrica extrínseca, específica de tradução.
B
Perplexity, que mede quão BEM o modelo prevê o próximo token (valores menores = melhor).
Mede quão bem o modelo prevê o próximo token (menor = melhor).
✓ CORRETA
C
Acurácia binária entre saída e gabarito.
É para classificação, não geração.
D
Pontuação F1 sobre classes de tópicos.
Também é métrica de classificação.
💡
Avaliação intrínseca de LLM = Perplexity. BLEU/ROUGE são métricas extrínsecas.


---
## Página 34

SIMULADO   •   PERGUNTA 17 DE 20   •   ENCONTRO 13
PERGUNTA
Uma equipe avalia vários LLMs no Amazon Bedrock para um chatbot que exige respostas com TOM EMPÁTICO, NUANCES 
CULTURAIS e SUBJETIVIDADE difíceis de capturar com métricas como BLEU ou ROUGE.
Qual abordagem é a MAIS adequada para essa avaliação?
A
Avaliação automática baseada apenas em BLEU.
B
Comparar somente os tempos de resposta dos modelos.
C
Selecionar o modelo com maior número de parâmetros, por padrão.
D
Avaliação humana com revisores treinados, usando o Amazon Bedrock Model Evaluation.
17 / 20


---
## Página 35

GABARITO   •   PERGUNTA 17 DE 20   •   ENCONTRO 13
17 / 20
RESPOSTA
PERGUNTA
Uma equipe avalia vários LLMs no Amazon Bedrock para um chatbot que exige respostas com TOM EMPÁTICO, NUANCES CULTURAIS e 
SUBJETIVIDADE difíceis de capturar com métricas como BLEU ou ROUGE. Qual abordagem é a MAIS adequada para essa avaliação?
A
Avaliação automática baseada apenas em BLEU.
Ignora nuances subjetivas.
B
Comparar somente os tempos de resposta dos modelos.
É métrica operacional, não de qualidade.
C
Selecionar o modelo com maior número de parâmetros, por padrão.
Tamanho não garante qualidade.
D
Avaliação humana com revisores treinados, usando o Amazon Bedrock Model Evaluation.
Revisores treinados julgam qualidades subjetivas.
✓ CORRETA
💡
Qualidades subjetivas (empatia, tom) = avaliação humana no Bedrock Model Evaluation.


---
## Página 36

SIMULADO   •   PERGUNTA 18 DE 20   •   ENCONTRO 14
PERGUNTA
Uma empresa tem uma aplicação de IA generativa com TRÁFEGO ALTO, PREVISÍVEL e SUSTENTADO ao longo do dia, exigindo 
capacidade GARANTIDA e latência consistente, e quer otimizar o custo por requisição.
Qual modalidade de cobrança do Amazon Bedrock é a MAIS adequada?
A
Provisioned Throughput, com capacidade reservada e custo previsível para tráfego alto e sustentado.
B
On-Demand (sob demanda), pago por token, ideal para tráfego intermitente.
C
AWS Spot Instances, com preço reduzido e interrupções possíveis.
D
AWS Savings Plan para Amazon EC2.
18 / 20


---
## Página 37

GABARITO   •   PERGUNTA 18 DE 20   •   ENCONTRO 14
18 / 20
RESPOSTA
PERGUNTA
Uma empresa tem uma aplicação de IA generativa com TRÁFEGO ALTO, PREVISÍVEL e SUSTENTADO ao longo do dia, exigindo capacidade GARANTIDA 
e latência consistente, e quer otimizar o custo por requisição. Qual modalidade de cobrança do Amazon Bedrock é a MAIS adequada?
A
Provisioned Throughput, com capacidade reservada e custo previsível para tráfego alto e sustentado.
Capacidade reservada e custo previsível para tráfego alto e sustentado.
✓ CORRETA
B
On-Demand (sob demanda), pago por token, ideal para tráfego intermitente.
Melhor para tráfego intermitente e imprevisível.
C
AWS Spot Instances, com preço reduzido e interrupções possíveis.
Família EC2, com interrupções, incompatível com produção crítica.
D
AWS Savings Plan para Amazon EC2.
Específico de EC2/Compute, não do Bedrock.
💡
Tráfego alto e previsível no Bedrock = Provisioned Throughput (capacidade reservada).


---
## Página 38

SIMULADO   •   PERGUNTA 19 DE 20   •   ENCONTRO 14
PERGUNTA
SELECIONE 2
Uma empresa estima o custo mensal de uma aplicação RAG sobre o Amazon Bedrock, com base de conhecimento corporativa, e o time financeiro 
precisa entender os principais COMPONENTES do custo de inferência.
Selecione DOIS componentes FUNDAMENTAIS do custo de inferência.
A
Custo fixo mensal de licença por modelo, independentemente de uso.
B
Tokens de ENTRADA (incluindo prompt do usuário + trechos recuperados da base de conhecimento).
C
Custo de armazenamento dos pesos do modelo na conta do cliente.
D
Custo de aluguel das GPUs físicas onde o modelo está hospedado.
E
Tokens de SAÍDA (resposta gerada pelo modelo).
19 / 20


---
## Página 39

GABARITO   •   PERGUNTA 19 DE 20   •   ENCONTRO 14
19 / 20
RESPOSTA
SELECIONE 2
PERGUNTA
Uma empresa estima o custo mensal de uma aplicação RAG sobre o Amazon Bedrock, com base de conhecimento corporativa, e o time financeiro precisa entender os 
principais COMPONENTES do custo de inferência. Selecione DOIS componentes FUNDAMENTAIS do custo de inferência.
A
Custo fixo mensal de licença por modelo, independentemente de uso.
Não existe no Bedrock On-Demand.
B
Tokens de ENTRADA (incluindo prompt do usuário + trechos recuperados da base de conhecimento).
Em RAG, inclui o prompt e o contexto recuperado.
✓ CORRETA
C
Custo de armazenamento dos pesos do modelo na conta do cliente.
O cliente não armazena pesos, Bedrock é gerenciado.
D
Custo de aluguel das GPUs físicas onde o modelo está hospedado.
O cliente não aluga GPUs, tudo é gerenciado.
E
Tokens de SAÍDA (resposta gerada pelo modelo).
O modelo cobra pela resposta gerada.
✓ CORRETA
💡
No Bedrock On-Demand o custo é só tokens de entrada + tokens de saída.


---
## Página 40

SIMULADO   •   PERGUNTA 20 DE 20   •   ENCONTRO 14
PERGUNTA
Uma empresa de saúde precisa monitorar CONTINUAMENTE se seus recursos AWS, incluindo buckets S3 com dados de pacientes e 
endpoints do SageMaker, permanecem em conformidade com REGRAS de configuração (ex.: criptografia obrigatória, sem acesso 
público).
Qual serviço da AWS é o MAIS adequado?
A
AWS Trusted Advisor, que fornece recomendações pontuais.
B
Amazon Macie, que detecta dados sensíveis em buckets S3.
C
AWS Config, que avalia continuamente as configurações dos recursos contra regras de conformidade.
D
AWS CloudTrail, que registra chamadas de API para auditoria.
20 / 20


---
## Página 41

GABARITO   •   PERGUNTA 20 DE 20   •   ENCONTRO 14
20 / 20
RESPOSTA
PERGUNTA
Uma empresa de saúde precisa monitorar CONTINUAMENTE se seus recursos AWS, incluindo buckets S3 com dados de pacientes e endpoints do 
SageMaker, permanecem em conformidade com REGRAS de configuração (ex.: criptografia obrigatória, sem acesso público). Qual serviço da 
AWS é o MAIS adequado?
A
AWS Trusted Advisor, que fornece recomendações pontuais.
Recomendações pontuais e mais limitadas.
B
Amazon Macie, que detecta dados sensíveis em buckets S3.
Detecta dados sensíveis em buckets, não avalia configuração.
C
AWS Config, que avalia continuamente as configurações dos recursos contra regras de conformidade.
Avalia continuamente as configurações contra regras de conformidade.
✓ CORRETA
D
AWS CloudTrail, que registra chamadas de API para auditoria.
Registra chamadas de API, não o estado de configuração.
💡
Conformidade contínua da configuração dos recursos = AWS Config.


---
## Página 42

Fim do Simulado
Bons estudos para a AWS Certified AI Practitioner (AIF-C01)
20
Questões respondidas
08
Encontros revisados (7 a 14)
💡
Revise os pontos errados antes da próxima aula.
