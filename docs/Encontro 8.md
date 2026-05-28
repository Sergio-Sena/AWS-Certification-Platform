# Encontro 8.pdf

*Convertido automaticamente de PDF*


---
## Página 1

Serviços de IA da
AWS para Linguagem e Áudio


---
## Página 2

V I S Ã O  G E R A L  D A  A U L A
Agenda
Visão geral
2 / 34
01
Visão geral dos serviços de IA da AWS
Categorias e fundamentos dos serviços de linguagem
02
Amazon Comprehend
Análise de texto e processamento de linguagem natural
04
Text-to-Speech e Amazon Polly
Síntese de voz e prática guiada com Polly
03
Comprehend Medical e HealthScribe
Serviços especializados em informações clínicas
05
Speech-to-Text e Amazon Transcribe
Reconhecimento de fala e transcrição automática


---
## Página 3

M Ó D U L O
01
Visão geral dos serviços 
de IA da AWS
Categorias, fundamentos e contexto dos serviços de linguagem e 
áudio


---
## Página 4

M Ó D U L O  0 1   •   C O N C E I T O  I N I C I A L
O que são serviços de IA gerenciados da AWS?
Módulo 1 — Visão geral
4 / 34
Definição
■
Soluções prontas que aplicam IA sem que você precise treinar 
modelos do zero
■
Disponíveis via API, escalam automaticamente e abstraem a 
infraestrutura
■
A AWS oferece serviços para visão, linguagem, áudio, busca e 
mais
■
Foram treinados pela AWS com grandes volumes de dados de 
qualidade
Camadas de serviços
AWS
IA Gerenciada
Linguagem
Áudio


---
## Página 5

M Ó D U L O  0 1   •   C A T E G O R I A S
Categorias de serviços de IA da AWS
Módulo 1 — Visão geral
5 / 34
Definição
■
A AWS organiza seus serviços de IA em categorias por tipo de dado e aplicação
■
Cada categoria reúne serviços especializados em uma forma de comunicação ou conteúdo
■
Vamos focar nesta aula em serviços de linguagem natural e áudio
■
Esses serviços podem ser combinados em pipelines de aplicação
Linguagem natural
Compreende, analisa e extrai informações 
de textos em diversos idiomas
Áudio e voz
Converte texto em fala e áudio em texto 
com qualidade profissional
Saúde e domínios
Serviços com vocabulário especializado, 
como aplicações clínicas


---
## Página 6

M Ó D U L O  0 1   •   P O R  Q U E  U S A R
Por que usar serviços gerenciados de IA?
Módulo 1 — Visão geral
6 / 34
Definição
■
Permitem usar IA avançada sem precisar de equipe especializada em 
ML
■
A AWS cuida do treinamento, atualização e infraestrutura dos modelos
■
Reduzem o tempo de desenvolvimento de meses para dias ou horas
■
Cobram por uso, sem custos fixos de servidores ou licenças
■
Escalam automaticamente conforme a demanda da aplicação cresce
D E S T A Q U E
Sem treinar do zero
Você envia o dado de entrada e 
recebe o resultado pronto, sem se 
preocupar em treinar, hospedar ou 
monitorar o modelo subjacente.


---
## Página 7

M Ó D U L O  0 1   •  E S C O P O  D A  A U L A
Serviços que vamos explorar hoje
Módulo 1 — Visão geral
7 / 34
Definição
■
Um conjunto de cinco serviços complementares de IA da AWS
■
Cobrem análise de texto, domínio clínico, síntese de voz e transcrição
■
Podem ser usados isoladamente ou combinados em pipelines 
integrados
■
Todos são totalmente gerenciados e disponíveis via API REST
■
Vamos entender o que cada um faz, quando usar e como integrar
Serviços desta aula
Comprehend
Análise de texto e linguagem natural
Comprehend Medical
NLP especializado em saúde
Polly
Conversão de texto em fala
Transcribe
Conversão de fala em texto


---
## Página 8

M Ó D U L O  0 1   •  C O M P A R A Ç Ã O
Comparativo dos serviços que veremos
Módulo 1 — Visão geral
8 / 34
Serviço
Tipo de dado
Caso de uso típico
Amazon Comprehend
Texto
Classificação de sentimento e extração de entidades
Comprehend Medical
Texto clínico
Extração de informações médicas de prontuários
AWS HealthScribe
Áudio clínico
Gera notas clínicas a partir de consultas gravadas
Amazon Polly
Texto para áudio
Síntese de voz natural em diversos idiomas
Amazon Transcribe complementa Polly fazendo o caminho inverso: áudio para texto  


---
## Página 9

M Ó D U L O
02
Amazon Comprehend
Serviço gerenciado de processamento de linguagem natural para 
textos em diversos idiomas


---
## Página 10

M Ó D U L O  0 2   •  C O N C E I T O
O que é o Amazon Comprehend?
Módulo 2 — Amazon Comprehend
10 / 34
Definição
■
Soluções prontas que aplicam IA sem que você precise treinar 
modelos do zero
■
Disponíveis via API, escalam automaticamente e abstraem a 
infraestrutura
■
A AWS oferece serviços para visão, linguagem, áudio, busca e 
mais
■
Foram treinados pela AWS com grandes volumes de dados de 
qualidade
Como funciona
Texto
Comprehend
Análises


---
## Página 11

M Ó D U L O  0 2   •  P R O C E S S O
O que é o Amazon Comprehend?
Módulo 2 — Amazon Comprehend
11 / 34
1
Recebe o texto
O texto é enviado via API ou 
console em português ou 
outro idioma
2
Identifica idioma
Detecta automaticamente o 
idioma antes de aplicar 
análises específicas
3
Aplica análises
Executa entidades, 
sentimento, frases-chave, 
sintaxe e classificação 
conforme solicitado
4
Devolve resultados
Retorna estruturas em JSON 
com os achados e níveis de 
confiança
Pode operar em modo síncrono para textos pequenos ou assíncrono para grandes volumes


---
## Página 12

M Ó D U L O  0 2   •  R E C U R S O S
Principais recursos do Amazon Comprehend
Módulo 2 — Amazon Comprehend
12 / 34
Detecção de entidades
Identifica nomes de pessoas, locais, organizações, datas e 
valores citados no texto.
Análise de sentimento
Classifica o tom geral do texto como positivo, negativo, 
neutro ou misto.
Frases-chave e tópicos
Extrai termos relevantes que resumem o conteúdo 
principal do texto.
Classificação personalizada
Permite criar classificadores específicos com seus próprios 
rótulos e exemplos.


---
## Página 13

M Ó D U L O
03
Amazon Comprehend 
Medical
Serviço de NLP especializado em textos clínicos e informações de 
saúde


---
## Página 14

M Ó D U L O  0 3   •  E X T R A Ç Õ E S  P R I N C I P A I S
Principais recursos do Amazon Comprehend
Módulo 3 — Comprehend Medical
14 / 34
0 1
Condições 
médicas
Doenças, sintomas e 
diagnósticos 
identificados no texto 
clínico
0 2
Medicamentos
Nomes de remédios, 
dosagens, vias de 
administração e 
frequência
0 3
Anatomia
Partes do corpo, 
sistemas e estruturas 
anatômicas 
mencionadas
0 4
Procedimentos
Exames, tratamentos e 
procedimentos clínicos 
documentados
0 5
PHI
Dados protegidos de 
saúde, como nomes, 
datas e identificadores 
do paciente


---
## Página 15

M Ó D U L O  0 3   •  E X T R A Ç Ã O  1  D E  4
Condições médicas
Módulo 3 — Comprehend Medical
15 / 34
Definição
■
Inclui doenças, sintomas, sinais clínicos e diagnósticos 
relatados no texto
■
Cada achado vem com atributos como negativação, severidade 
e contexto temporal
■
Permite estruturar prontuários e relatórios em campos 
pesquisáveis
■
Apoia codificação automática em padrões como ICD-10 e 
SNOMED CT
■
Aceita texto livre escrito por médicos, com abreviações e 
jargão clínico
A N A L O G I A
Etiquetas automáticas
Pense em cada doença ou sintoma do 
prontuário recebendo uma etiqueta 
automática, com a possibilidade de 
marcar quando o sinal foi negado pelo 
médico.


---
## Página 16

M Ó D U L O  0 3   •  E X T R A Ç Ã O  2  D E  4
Medicamentos e RxNorm
Módulo 3 — Comprehend Medical
16 / 34
Definição
■
Identifica medicamentos mencionados em prontuários, 
prescrições e notas clínicas
■
Extrai dosagem, via de administração, frequência, duração e 
quantidade prescrita
■
Faz a vinculação automática ao padrão RxNorm, comum no 
setor de saúde
■
Útil para revisão de prescrições, controle de estoque e análises 
farmacológicas
■
Apoia auditorias, interações medicamentosas e estudos 
epidemiológicos
Saída estruturada
Texto bruto
Reconhece o nome comercial ou 
genérico em texto livre
Código RxNorm
Retorna o código padronizado, 
facilitando integração entre sistemas


---
## Página 17

M Ó D U L O  0 3   •  E X T R A Ç Ã O  3  D E  4
Anatomia e procedimentos
Módulo 3 — Comprehend Medical
17 / 34
Definição
■
Identifica partes do corpo, sistemas e estruturas anatômicas 
no texto
■
Reconhece exames, testes laboratoriais e procedimentos 
diagnósticos
■
Detecta tratamentos, cirurgias e intervenções mencionadas
■
Cada item recebe atributos como direcionalidade e localização 
no corpo
■
Esses dados estruturados alimentam relatórios clínicos e 
pesquisas
Tipos identificados
Anatomia
Órgãos, regiões e estruturas
Testes
Exames laboratoriais e diagnósticos
Tratamentos
Cirurgias e intervenções
Procedimentos
Atos clínicos realizados


---
## Página 18

M Ó D U L O  0 3   •  E X T R A Ç Ã O  4  D E  4
PHI: dados protegidos de saúde
Módulo 3 — Comprehend Medical
18 / 34
Definição
■
PHI são informações pessoais relacionadas à saúde do 
paciente
■
Incluem nome, endereço, data de nascimento, número do 
prontuário e contatos
■
O Comprehend Medical detecta esses dados automaticamente 
em texto livre
■
Permite mascarar ou remover PHI antes de compartilhar dados 
para pesquisa
■
É um recurso essencial para conformidade com 
regulamentações como LGPD e HIPAA
C O M P R E H E N D   ×
C O M P R E H E N D  M E D I C A L
Domínio?
Comprehend: Texto geral
Medical: Texto clínico
Vocabulário?
Comprehend: Comum
Medical: Médico
PHI?
Comprehend: Não detecta
Medical: Detecta e mascara


---
## Página 19

M Ó D U L O  0 3   •  A P L I C A Ç Õ E S
Aplicações em saúde
Módulo 3 — Comprehend Medical
19 / 34
Definição
■
Estruturação de prontuários eletrônicos e relatórios clínicos
■
Codificação automática em padrões ICD-10, SNOMED CT e RxNorm
■
Anonimização de PHI para uso em pesquisa clínica e estudos populacionais
■
Apoio à cobrança hospitalar e auditoria de procedimentos médicos
■
Indexação de dados clínicos para sistemas de busca e análise epidemiológica
Comprehend Medical é usado em hospitais, planos de saúde, pesquisa clínica e seguradoras


---
## Página 20

M Ó D U L O
04
AWS HealthScribe
Serviço gerenciado que transcreve e estrutura conversas clínicas 
em notas médicas


---
## Página 21

M Ó D U L O  0 4   •  C O N C E I T O
O que é o AWS HealthScribe?
Módulo 4 — AWS HealthScribe
21 / 34
Definição
■
Serviço gerenciado da AWS para a área de saúde
■
Combina reconhecimento de fala e processamento de linguagem clínica
■
Transcreve consultas médicas entre profissional e paciente
■
Combina reconhecimento de fala e processamento de linguagem clínica
■
Reduz tempo gasto em documentação clínica pelo profissional de saúde
Áudio
transcrito automaticamente de conversas 
entre médico e paciente
Notas
clínicas estruturadas geradas a partir da 
transcrição


---
## Página 22

M Ó D U L O  0 4   •  F U N C I O N A M E N T O
Como o HealthScribe funciona?
Módulo 4 — AWS HealthScribe
22 / 34
Definição
■
Recebe o áudio de uma conversa clínica entre profissional e paciente
■
Aplica reconhecimento de fala adaptado ao vocabulário médico
■
Identifica os interlocutores e segmenta o diálogo automaticamente
■
Extrai os pontos clínicos relevantes e os organiza em seções padronizadas
■
Devolve a transcrição e a nota clínica estruturada para revisão pelo profissional


---
## Página 23

M Ó D U L O  0 4   •  P E R S P E C T I V A  R E A L I S T A
Capacidades e limitações do HealthScribe
Módulo 4 — AWS HealthScribe
23 / 34
Capacidades
■
Transcrever conversas médicas com vocabulário 
clínico
■
Identificar interlocutores e segmentar o diálogo
■
Gerar notas clínicas estruturadas em seções 
padronizadas
■
Reduzir tempo de documentação do profissional 
de saúde
■
Integrar com sistemas de prontuário eletrônico via 
API
Limitações
■
Necessita revisão clínica antes de uso oficial da 
nota
■
Qualidade depende da clareza do áudio e da 
pronúncia
■
Disponibilidade limitada a determinadas regiões da 
AWS
■
Atualmente focado em inglês, com idiomas 
adicionais em expansão
■
Requer atenção a privacidade e conformidade com 
LGPD e HIPAA


---
## Página 24

M Ó D U L O
05
Text-to-Speech e Amazon 
Polly
Convertendo texto em voz natural com o serviço gerenciado de 
síntese de fala da AWS


---
## Página 25

M Ó D U L O  0 5   •  C O N C E I T O
O que é TTS e Amazon Polly?
Módulo 5 — TTS e Polly
25 / 34
Definição
■
Text-to-Speech é a tecnologia que converte texto escrito em áudio falado
■
Amazon Polly é o serviço gerenciado de TTS da AWS
■
Oferece dezenas de vozes naturais em diversos idiomas e sotaques
■
Suporta saída em formatos como MP3, OGG e PCM, prontos para uso
■
Acessado via API, console ou SDKs, sem necessidade de gerenciar infraestrutura


---
## Página 26

M Ó D U L O  0 5   •  C O M P A R A Ç Ã O
Engines de voz do Amazon Polly
Módulo 5 — TTS e Polly
26 / 34
Aspecto
Standard
Neural
Naturalidade
Voz robotizada básica
Voz próxima do humano
Custo
Mais baixo por carácter
Moderado por carácter
Idiomas
Ampla cobertura
Cobertura focada em principais idiomas
Expressão
Tom uniforme, pouca variação
Entonação e ritmo mais naturais
Indicação
Avisos curtos e alertas
Audição prolongada e narração


---
## Página 27

M Ó D U L O  0 5   •   A P L I C A B I L I D A D E
Quando usar o Amazon Polly?
Módulo 5 — TTS e Polly
27 / 34
Acessibilidade
Tornar conteúdos escritos auditíveis para pessoas com deficiência visual ou em 
deslocamento
Atendimento automático
Mensagens em URAs, chatbots por voz e centrais telefônicas
E-learning e narração
Cursos online, audiolivros e narração de vídeos automatizados
Notificações
Avisos por voz em aplicações, dispositivos IoT e assistentes virtuais
Localização
Conteúdos multilíngues entregues com vozes nativas em cada idioma


---
## Página 28

M Ó D U L O
06
Speech-to-Text e Amazon 
Transcribe
Convertendo áudio em texto com o serviço gerenciado de 
transcrição automática da AWS


---
## Página 29

M Ó D U L O  0 6   •   C O N C E I T O
O que é STT e Amazon Transcribe?
Módulo 6 — STT e Transcribe
29 / 34
■
Speech-to-Text é a tecnologia que converte áudio falado em texto escrito
■
Amazon Transcribe é o serviço gerenciado de STT da AWS
■
Suporta dezenas de idiomas, incluindo o português do Brasil
■
Funciona em modo em tempo real ou por lote, conforme a necessidade do projeto
■
Acessado via API, console e SDKs, sem necessidade de gerenciar infraestrutura
Definição


---
## Página 30

M Ó D U L O  0 6   •   R E C U R S O S
Recursos principais do Amazon Transcribe
Módulo 6 — STT e Transcribe
30 / 34
Identificação de falantes
Distingue automaticamente diferentes vozes, útil em entrevistas e reuniões
Vocabulário personalizado
Permite cadastrar termos específicos de cada domínio para melhorar a precisão
Filtros de conteúdo
Mascara automaticamente palavras inadequadas e dados sensíveis na 
transcrição
Saída com timestamps
Cada palavra ou trecho retorna com marcação de tempo, ideal para legendas e 
busca


---
## Página 31

M Ó D U L O  0 6   •   P I P E L I N E  I N T E G R A D O
Pipeline integrado de serviços de fala e linguagem
Módulo 6 — STT e Transcribe
31 / 34
■
Serviços de IA da AWS podem ser combinados em pipelines 
completos de fala e texto
■
Transcribe converte áudio em texto, ponto de partida da análise
■
Comprehend extrai entidades, sentimento e classificação do texto 
transcrito
■
Polly devolve uma resposta em áudio natural ao usuário final
■
Esse encadeamento é a base de URAs inteligentes, assistentes e 
centrais de atendimento
Definição
Fluxo do pipeline
Áudio
Transcribe
Comprehend
Polly
Cada serviço entrega entrada para o próximo


---
## Página 32

E N C E R R A M E N T O
Recapitulando os conceitos da aula
Encerramento
32 / 34
■
Serviços gerenciados de IA da AWS entregam linguagem e fala sem treinar modelos do zero
■
Amazon Comprehend extrai entidades, sentimento e frases-chave de textos em diversos idiomas
■
Comprehend Medical é especializado em texto clínico e detecta PHI automaticamente
■
AWS HealthScribe transcreve consultas e gera notas clínicas estruturadas
■
Amazon Polly converte texto em voz natural com múltiplas engines, idiomas e vozes
■
O lab prático mostrou como gerar áudio em português direto pelo console do Polly
■
Amazon Transcribe converte áudio em texto com identificação de falantes e timestamps
■
Esses serviços podem ser combinados em pipelines completos de áudio, texto e voz
Definição


---
## Página 33

P e r g u n t a 1
Pergunta
33 / 34
(A) Amazon Transcribe
(B) Amazon Translate
(C) Amazon Lex
(D) Amazon Comprehend
Uma instituição educacional recebe centenas de avaliações de alunos sobre cursos e professores diariamente e 
deseja analisar esses comentários para identificar temas recorrentes e obter insights. Qual serviço da AWS a 
instituição pode usar para atender a essa necessidade?


---
## Página 34

P e r g u n t a 1
Pergunta
34 / 34
(A) Amazon Transcribe
(B) Amazon Translate
(C) Amazon Lex
(D) Amazon Comprehend
Uma instituição educacional recebe centenas de avaliações de alunos sobre cursos e professores diariamente e 
deseja analisar esses comentários para identificar temas recorrentes e obter insights. Qual serviço da AWS a 
instituição pode usar para atender a essa necessidade?
