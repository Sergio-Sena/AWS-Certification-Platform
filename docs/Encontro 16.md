# Encontro 16.pdf

*Convertido automaticamente de PDF*


---
## Página 1

Governança e Segurança
em sistemas
responsáveis de IA
Amazon A2I, Service Cards, APIs de moderação, Security 
Scoping Matrix, linhagem de dados


---
## Página 2

V I S Ã O  G E R A L  D A  A U L A
Agenda
Visão geral
2 / 28
01
A2I e Explicabilidade
Revisão humana e ferramentas para explicar decisões
02
Service Cards e Trade-offs
Documentação de modelos AWS e equilíbrio com 
interpretabilidade
04
Linhagem e Engenharia
Citação de fontes e boas práticas de engenharia de 
dados segura
03
Moderação e Segurança
APIs de moderação e Generative AI Security Scoping 
Matrix


---
## Página 3

M Ó D U L O
01
Amazon A2I e 
Explicabilidade
Inserindo revisão humana em fluxos de IA e ferramentas para 
explicar decisões dos modelos


---
## Página 4

M Ó D U L O  0 1   •  C O N C E I T O  I N I C I A L
O que é Amazon A2I?
Módulo 1 — A2I e Explicabilidade
4 / 28
Definição
■
Amazon Augmented AI, serviço gerenciado para incluir revisão 
humana em pipelines de IA
■
Permite enviar previsões de baixa confiança para revisão 
humana de forma automática
■
Integra-se a serviços como Textract, Rekognition, Comprehend 
e endpoints SageMaker
■
Inclui interface pronta para revisores e fluxos de trabalho 
configuráveis
Fluxo do A2I
Predição
Critério
Revisão
Resultado


---
## Página 5

M Ó D U L O  0 1   •   E X P L I C A B I L I D A D E
Ferramentas de explicabilidade
Módulo 1 — A2I e Explicabilidade
5 / 28
■
Conjunto de técnicas para entender como modelos chegam a suas decisões
■
Algumas explicam o modelo todo; outras explicam decisões individuais
■
Não substituem auditoria humana, mas dão suporte para revisões e investigações
■
Cada técnica tem custo computacional e nível de confiabilidade próprios
Definição
SHAP
Atribui contribuição de cada feature 
usando teoria de jogos cooperativos
LIME
Aproxima localmente o modelo complexo 
por um modelo simples interpretável
Importância de features
Mede impacto global de cada feature no 
desempenho geral do modelo


---
## Página 6

M Ó D U L O  0 1   •   Q U A N D O  U S A R
Quando usar revisão humana
Módulo 1 — A2I e Explicabilidade
6 / 28
■
Casos com baixa confiança devolvida pelo modelo precisam de 
validação humana
■
Domínios sensíveis como saúde, jurídico e financeiro exigem 
revisão por padrão
■
Auditoria periódica de amostras aleatórias para validar qualidade 
do modelo
■
Coleta de feedback humano para melhorar o modelo com 
retreinamento posterior
■
Resultados marginais que afetam decisões importantes de 
negócio em escala
Definição
D E S T A Q U E
HITL
Amazon A2I é a opção certa quando o 
time precisa de revisão humana integrada 
a serviços de IA da AWS sem construir 
infraestrutura própria.


---
## Página 7

M Ó D U L O  0 1   •   C O M P A R A T I V O
Amazon A2I vs SageMaker Ground Truth
Módulo 1 — A2I e Explicabilidade
7 / 28
Amazon A2I
■
Foco em revisão humana de previsões em 
produção (HITL)
■
Integra com Textract, Rekognition, Comprehend e 
endpoints SageMaker
■
Aciona revisão por baixa confiança ou amostragem 
aleatória
■
Workforce: equipe privada, fornecedores ou 
Mechanical Turk
■
Cobrança por previsão revisada, sem infraestrutura 
para gerenciar
SageMaker Ground Truth
■
Foco em rotulagem de datasets antes do 
treinamento do modelo
■
Suporta imagem, texto, vídeo, áudio, ponto 3D e 
dados tabulares
■
Active learning reduz custo rotulando só amostras 
incertas
■
Workforce idêntico ao A2I, mais opção Ground 
Truth Plus gerenciado
■
Cobrança por objeto rotulado, ideal para grandes 
volumes iniciais


---
## Página 8

M Ó D U L O  0 1   •   C A S O S  D E  U S O
Casos de uso reais do Amazon A2I
Módulo 1 — A2I e Explicabilidade
8 / 28
Documentos médicos
Classificação automática validada por especialistas quando 
confiança fica baixa.
Análise financeira
Extração de dados de contratos e notas com revisão por 
compliance e jurídico.
Moderação de conteúdo
Casos ambíguos de imagens ou texto enviados a revisores 
humanos treinados.
Sinistros de seguro
Documentos e fotos triados pela IA e validados por peritos 
antes da liberação.


---
## Página 9

M Ó D U L O
02
Service Cards e Trade-offs
Documentação dos modelos da AWS e equilíbrio entre 
desempenho e interpretabilidade


---
## Página 10

M Ó D U L O  0 2   •   C O N C E I T O
AWS AI Service Cards
Módulo 2 — Service Cards e Trade-offs
10 / 28
■
Documentos públicos da AWS que descrevem casos de uso e 
limitações dos serviços de IA
■
Descrevem casos previstos, casos não recomendados e 
considerações de design
■
Trazem informações sobre dados de treino, métricas de 
desempenho e equidade
■
Cobertura inclui Rekognition, Textract, Comprehend, 
Transcribe e outros serviços
■
Leitura recomendada antes de adotar qualquer serviço de IA 
da AWS em produção
Definição


---
## Página 11

M Ó D U L O  0 2   •   T R A D E - O F F S
Performance x Interpretabilidade
Módulo 2 — Service Cards e Trade-offs
11 / 28
1
Modelos simples
Regressão linear e árvores 
rasas: alta interpretabilidade 
e baixa performance
2
Modelos médios
Random forest e gradient 
boosting: equilíbrio razoável 
entre os dois lados
3
Deep learning
Alta performance em 
padrões complexos, mas com 
baixa interpretabilidade 
nativa
4
Decisão
Use modelo mais simples 
possível que atinja a métrica 
mínima exigida pelo negócio
Em domínios regulados, interpretabilidade pode pesar mais que pontos extras de acurácia


---
## Página 12

M Ó D U L O  0 2   •  A P L I C A Ç Ã O
Como aplicar service cards
Módulo 2 — Service Cards e Trade-offs
12 / 28
Antes da escolha
Ler o card antes de escolher um serviço para validar 
adequação ao caso.
Durante o design
Considerar limites declarados no design da arquitetura 
final da solução.
Em produção
Comparar comportamento real do serviço com casos 
previstos no card.
Em revisões
Reler o card em revisões periódicas, especialmente em 
mudanças de versão.


---
## Página 13

M Ó D U L O
03
Moderação e Segurança
APIs de moderação e Generative AI Security Scoping Matrix para 
sistemas seguros


---
## Página 14

M Ó D U L O  0 3   •  V O C A B U L Á R I O  E S S E N C I A L
Cinco conceitos sobre segurança
Módulo 3 — Moderação e Segurança
14 / 28
0 1
Moderação
Processo de filtrar 
conteúdos 
inapropriados gerados 
ou consumidos pela IA
0 2
Guardrails
Limites técnicos que 
impedem o modelo de 
gerar saídas 
indesejadas
0 3
Toxicidade
Conteúdo ofensivo, 
agressivo ou prejudicial 
que pode aparecer em 
saídas
0 4
Prompt injection
Ataque em que entrada 
manipula o modelo a 
ignorar instruções 
originais
0 5
Scoping
Mapeamento de 
responsabilidades de 
segurança conforme 
nível de uso da IA


---
## Página 15

M Ó D U L O  0 3   •  C O N C E I T O
APIs de moderação
Módulo 3 — Moderação e Segurança
15 / 28
■
Serviços que classificam e filtram conteúdos automaticamente 
em pipelines de IA
■
Amazon Comprehend detecta toxicidade, PII e tópicos sensíveis 
em texto
■
Amazon Rekognition modera imagens e vídeos identificando 
conteúdo impróprio
■
Bedrock Guardrails aplicam filtros configuráveis em entradas e 
saídas de LLMs
■
Uso combinado dessas APIs reduz risco de exposição a conteúdo 
problemático
Definição
A N A L O G I A
Filtro
Pense em APIs de moderação como 
filtros de água: removem 
contaminantes antes de chegarem ao 
usuário e antes que saídas 
problemáticas voltem ao sistema.


---
## Página 16

M Ó D U L O  0 3   •  S C O P I N G  M A T R I X
Generative AI Security Scoping Matrix
Módulo 3 — Moderação e Segurança
16 / 28
■
Framework da AWS que ajuda a entender responsabilidades de 
segurança em IA generativa
■
Define cinco escopos, do uso de apps de consumo até treinar 
modelos próprios
■
Cada escopo tem distribuição diferente de responsabilidade 
entre cliente e provedor
■
Quanto mais customizado o uso, mais responsabilidades caem 
sobre o cliente final
■
Identificar o escopo correto é essencial para definir controles de 
segurança aplicáveis
Definição


---
## Página 17

M Ó D U L O  0 3   •   E S C O P O S
Os cinco escopos da Scoping Matrix
Módulo 3 — Moderação e Segurança
17 / 28
0 1
Escopo 1
App de IA generativa 
consumidor: 
responsabilidade quase 
toda do fornecedor
0 2
Escopo 2
App empresarial 
pronto: cliente cuida de 
dados, identidade e 
configurações
0 3
Escopo 3
App de terceiros com 
API: você integra, cuida 
de dados e prompt 
injection
0 4
Escopo 4
Modelo pré-treinado 
customizado: fine-
tuning amplia 
responsabilidade do 
cliente
0 5
Escopo 5
Modelo próprio 
treinado: cliente é 
responsável por quase 
toda a stack de 
segurança


---
## Página 18

M Ó D U L O
04
Linhagem e Engenharia 
Segura
Citação de fontes, linhagem de dados e boas práticas de 
engenharia de dados segura


---
## Página 19

M Ó D U L O  0 4   •   D E F I N I Ç Ã O
Citação de fontes e linhagem
Módulo 4 — Linhagem e Engenharia
20 / 28
■
Citação de fontes mostra ao usuário a origem das informações 
em cada resposta gerada
■
Aumenta confiança nas respostas e permite verificação manual 
das informações
■
Linhagem de dados rastreia todo o caminho desde a fonte até o 
modelo treinado
■
Combinadas, dão visibilidade completa para auditoria, 
compliance e governança
■
Sem essas práticas, sistemas de IA viram caixas-pretas sem 
possibilidade de auditoria
Definição
Citar
Indicar fontes utilizadas para gerar cada 
resposta
Rastrear
Documentar todo o caminho dos dados até 
o modelo


---
## Página 20

M Ó D U L O  0 4   •   L I N H A G E M
Linhagem de dados
Módulo 4 — Linhagem e Engenharia
21 / 28
■
Linhagem de dados é o histórico completo de origem e transformações dos dados
■
Permite identificar quais fontes alimentaram o modelo treinado em cada versão
■
Essencial para auditoria, compliance e investigação de incidentes em produção
■
Bedrock Knowledge Bases já entregam citação automática nas respostas geradas
■
Sem linhagem clara, é impossível responder a pedidos de remoção de dados
Definição


---
## Página 21

M Ó D U L O  0 4   •   B O A S  P R Á T I C A S
Engenharia de dados segura
Módulo 4 — Linhagem e Engenharia
22 / 28
Boas práticas
■
Criptografar dados em repouso e em trânsito em 
todos os pontos do pipeline
■
Aplicar princípio do menor privilégio em acessos a 
buckets, bancos e modelos
■
Anonimizar e remover dados pessoais antes de 
usá-los em treinamento de modelos
■
Versionar dados, modelos e códigos de 
transformação para rastreabilidade total
■
Auditar acessos e mudanças com CloudTrail e logs 
centralizados em tempo real
A evitar
■
Acessos amplos a dados sensíveis sem justificativa 
registrada
■
Pipelines sem testes de integridade dos dados de 
entrada
■
Treinar modelos diretamente com dados pessoais 
sem anonimização prévia
■
Compartilhar conjuntos de treino sem controle de 
versão ou origem
■
Ignorar requisitos de compliance setoriais e 
regulatórios aplicáveis


---
## Página 22

M Ó D U L O  0 4   •   C O M P L I A N C E
LGPD e GDPR aplicadas à IA
Módulo 4 — Linhagem e Engenharia
23 / 28
LGPD (Brasil)
■
Lei 13.709 regula tratamento de dados pessoais no 
Brasil desde 2020
■
Exige base legal explícita para usar dados pessoais 
em treinamento de modelos
■
Garante direito à explicação em decisões 
automatizadas que afetam o titular
■
Permite revisão de decisões automatizadas por 
humano quando solicitada pelo titular
■
ANPD (Autoridade Nacional) pode aplicar multas 
de até 2% do faturamento limitado a 50M
GDPR (UE)
■
Regulamento (UE) 2016/679, referência global em 
proteção de dados desde 2018
■
Define seis bases legais e exige avaliação de 
impacto para IA de alto risco
■
AI Act complementa o GDPR classificando sistemas 
por nível de risco aplicado
■
Inclui direito ao esquecimento e oposição a 
decisões totalmente automatizadas
■
Multas chegam a 4% do faturamento global anual 
ou 20 milhões de euros, o maior valor


---
## Página 23

E N C E R R A M E N T O
Recapitulando os conceitos da aula
Encerramento
24 / 28
■
Amazon A2I integra revisão humana em pipelines para casos de baixa confiança
■
SHAP, LIME e importância de features explicam decisões de modelos opacos
■
AWS AI Service Cards documentam casos previstos e limites dos serviços de IA
■
Trade-off entre performance e interpretabilidade exige escolhas conscientes
■
APIs de moderação filtram conteúdo tóxico, PII e respostas inadequadas
■
Generative AI Security Scoping Matrix mapeia responsabilidades em cinco escopos
■
Citação de fontes e linhagem garantem rastreabilidade e atendem compliance
■
Engenharia de dados segura combina criptografia, mínimo privilégio e auditoria


---
## Página 24

P e r g u n t a 1
Pergunta
25 / 28
(A) SageMaker Model Monitor para detectar drift
(B) Amazon A2I para revisão humana automatizada
(C) Bedrock Guardrails para filtrar conteúdo gerado
(D) AWS AI Service Cards para documentar limites
Uma equipe está construindo um sistema de classificação de documentos médicos e precisa garantir que casos de 
baixa confiança do modelo sejam revisados por especialistas humanos antes da decisão final. Qual serviço da AWS 
é mais adequado?


---
## Página 25

P e r g u n t a 1
Pergunta
26 / 28
(A) SageMaker Model Monitor para detectar drift
(B) Amazon A2I para revisão humana automatizada
(C) Bedrock Guardrails para filtrar conteúdo gerado
(D) AWS AI Service Cards para documentar limites
Uma equipe está construindo um sistema de classificação de documentos médicos e precisa garantir que casos de 
baixa confiança do modelo sejam revisados por especialistas humanos antes da decisão final. Qual serviço da AWS 
é mais adequado?


---
## Página 26

P e r g u n t a 3
Pergunta
27 / 28
(A) Escopo 1 — uso de aplicativo de IA generativa pronto
(B) Escopo 3 — aplicativo de terceiros consumido via API
(C) Escopo 4 — modelo pré-treinado com fine-tuning próprio
(D) Escopo 5 — modelo treinado do zero pela empresa
Uma empresa decidiu fazer fine-tuning do Claude no Bedrock com seus próprios dados de atendimento. Em qual 
escopo da Generative AI Security Scoping Matrix essa configuração se encaixa?


---
## Página 27

P e r g u n t a 3
Pergunta
28 / 28
(A) Escopo 1 — uso de aplicativo de IA generativa pronto
(B) Escopo 3 — aplicativo de terceiros consumido via API
(C) Escopo 4 — modelo pré-treinado com fine-tuning próprio
(D) Escopo 5 — modelo treinado do zero pela empresa
Uma empresa decidiu fazer fine-tuning do Claude no Bedrock com seus próprios dados de atendimento. Em qual 
escopo da Generative AI Security Scoping Matrix essa configuração se encaixa?
