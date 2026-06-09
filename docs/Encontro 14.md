# Encontro 14.pdf

*Convertido automaticamente de PDF*


---
## Página 1

Bedrock e modelos
Capacidades,
consumo de dívida técnica
Amazon Bedrock, Playground, capacidade sob-demanda e 
provisionada, dívida técnica em ML


---
## Página 2

V I S Ã O  G E R A L  D A  A U L A
Agenda
Visão geral
2 / 36
01
Dívida Técnica em ML
O que é, como aparece em projetos de ML e como 
pagar
02
Amazon Bedrock
Visão geral do serviço e dos modelos disponíveis
04
Capacidade do Bedrock
Modos sob-demanda e provisionada de consumir os 
modelos
03
Bedrock Playground
Ambiente para experimentar modelos antes de integrar
05
Comparação e escolha
Quando usar cada modalidade conforme padrão de 
uso


---
## Página 3

M Ó D U L O
01
Dívida Técnica em ML
Como atalhos durante o desenvolvimento se acumulam e 
impactam projetos de machine learning


---
## Página 4

M Ó D U L O  0 1   •   C O N C E I T O  I N I C I A L
O que é dívida técnica?
Módulo 1 — Dívida Técnica
4 / 36
Definição
■
Custo futuro acumulado por escolhas rápidas tomadas durante 
o desenvolvimento
■
Análoga a uma dívida financeira, com juros que crescem se ela 
não for paga
■
Pode ser deliberada para acelerar entrega ou inadvertida por 
falta de prática
■
Em ML, ela aparece em código, dados e modelos, dificultando 
manutenção
Como se acumula
Projeto
Código
Atalhos
Dívida


---
## Página 5

M Ó D U L O  0 1   •   T I P O S
Tipos de dívida técnica
Módulo 1 — Dívida Técnica
5 / 36
■
Nem toda dívida técnica é igual: existem origens diferentes e formas distintas de tratar
■
Um framework clássico classifica em deliberada ou inadvertida, prudente ou imprudente
■
Cada combinação pede uma resposta diferente do time técnico e da liderança
■
Reconhecer o tipo é o primeiro passo para definir como pagá-la
Definição
Estratégica
Tomada conscientemente para acelerar 
entrega prioritária e validar hipóteses
Acidental
Surge sem que o time perceba durante o 
trabalho diário, por falta de prática
Por evolução
Tecnologias e práticas envelhecem em 
projetos longos, exigindo atualização 
constante


---
## Página 6

M Ó D U L O  0 1   •   E M  M L
Dívida técnica em ML
Módulo 1 — Dívida Técnica
6 / 36
■
Em projetos de ML, dívida técnica acumula em três dimensões 
diferentes ao mesmo tempo
■
No código, scripts manuais e ausência de testes complicam 
manutenção e reproduzibilidade
■
Nos dados, falta de governança, versionamento e monitoramento 
gera problemas silenciosos
■
Nos modelos, falta de versionamento e métricas dificulta saber 
qual está em produção
■
Cada uma dessas frentes precisa de práticas próprias de MLOps 
para ser controlada
Definição
D E S T A Q U E
Tripla frente
Diferente de software tradicional, dívida 
em ML acumula em três frentes 
simultâneas: código, dados e modelos 
cada uma com seus próprios riscos.


---
## Página 7

M Ó D U L O  0 1   •   S I N A I S
Como identificar dívida técnica
Módulo 1 — Dívida Técnica
7 / 36
■
Dívida técnica raramente aparece em uma reunião, ela se 
manifesta em sintomas no dia a dia
■
Times atentos a esses sinais conseguem priorizar pagamento 
antes de virar bloqueio
■
Quanto mais sintomas, maior a probabilidade de que a dívida 
esteja afetando entregas
■
Diagnóstico honesto evita decisões baseadas em culpa e abre 
caminho para refatorar
■
Documentar a dívida em backlog torna o tema visível e 
gerenciável pela liderança
Definição
Sinais comuns
Builds lentos
Pipelines que exigem horas para rodar e 
validar
Deploys arriscados
Cada release exige intervenção manual e 
gera medo
Bugs recorrentes
Os mesmos defeitos voltam em diferentes 
formas
Time exausto
Esforço alto para mudanças simples e 
fadiga crescente


---
## Página 8

M Ó D U L O  0 1   •   C O M P A R A Ç Ã O
Boa dívida x Má dívida técnica
Módulo 1 — Dívida Técnica
8 / 36
Aspecto
Boa dívida
Má dívida
Conhecimento
Time sabe que existe e onde está
Acumula em silêncio até virar problema
Plano de pagamento
Tem prazo claro para refatoração
Sem prazo, vira parte permanente
Trade-off
Velocidade hoje em troca de ajuste 
futuro
Acelera no curto e trava no longo
IA Generativa
Registrada e visível em backlog ou 
ADR
Esquecida ou ignorada pelo time atual


---
## Página 9

M Ó D U L O
02
Amazon Bedrock
Plataforma da AWS para acessar modelos fundacionais via API, 
sem gerenciar infraestrutura


---
## Página 10

M Ó D U L O  0 2   •   C O N C E I T O
O que é Amazon Bedrock?
Módulo 2 — Amazon Bedrock
10 / 36
■
Serviço gerenciado da AWS que oferece acesso a modelos 
fundacionais via API
■
Reúne modelos de Anthropic, Meta, Amazon, Cohere, Mistral e 
outros provedores
■
Não exige instalação ou hospedagem de modelos pelo cliente
■
Inclui recursos como Knowledge Bases, Agents, Guardrails e 
Playground
■
Cobra apenas pelo uso, integrando-se a outros serviços como 
Lambda e Step Functions
Definição


---
## Página 11

M Ó D U L O  0 2   •   C O M O  U S A R
Como começar com o Bedrock
Módulo 2 — Amazon Bedrock
11 / 36
1
Habilitar
Solicitar acesso aos modelos 
desejados na console do 
Bedrock
2
Explorar
Testar prompts no 
Playground antes de escrever 
código de integração
3
Integrar
Chamar a API InvokeModel a 
partir da aplicação ou 
pipeline
4
Iterar
Refinar prompts, parâmetros 
e modelo com base em 
métricas reais
Esse ciclo curto reduz tempo entre experimento e produção em projetos novos


---
## Página 12

M Ó D U L O  0 2   •   R E C U R S O S
Principais recursos do Bedrock
Módulo 2 — Amazon Bedrock
12 / 36
Foundation Models
Catálogo curado de modelos generativos de texto, imagem 
e embeddings.
Knowledge Bases
Implementa RAG sobre dados privados sem montar 
infraestrutura de busca vetorial.
Agents
Orquestra chamadas a APIs e ferramentas para resolver 
tarefas complexas com LLMs.
Guardrails
Filtra conteúdos sensíveis e impõe limites de segurança 
nas respostas geradas.


---
## Página 13

M Ó D U L O
03
Conceitos-chave
Modelo, algoritmo, treinamento, inferência e a introdução aos 
LLMs


---
## Página 14

M Ó D U L O  0 3   •   V O C A B U L Á R I O  E S S E N C I A L
Cinco aspectos dos modelos do Bedrock
Módulo 3 — Modelos no Bedrock
14 / 36
0 1
Modelo
Empresa responsável 
por criar e treinar o 
modelo: Anthropic, 
Meta, Amazon e outras
0 2
Família
Linha de modelos 
relacionados pelo 
provedor, como Claude, 
Llama, Titan e Nova
0 3
Tamanho
Quantidade de 
parâmetros do modelo, 
que afeta qualidade, 
custo e latência
0 4
Custo
Cobrança baseada em 
tokens de entrada e 
saída, com preços 
diferentes por modelo
0 5
Casos de uso
Cada modelo tem 
combinação preferida 
de tarefas, idiomas e 
capacidades 
multimodais


---
## Página 15

M Ó D U L O  0 3   •   C O N C E I T O  1  D E  4
Anthropic Claude
Módulo 3 — Modelos no Bedrock
15 / 36
■
Família de modelos da Anthropic, focada em raciocínio, 
segurança e contexto longo
■
Forte em tarefas analíticas, escrita estruturada e seguir 
instruções complexas
■
Janela de contexto extensa permite processar documentos 
inteiros em uma chamada
■
Modelos vêm em variantes Sonnet e Opus, equilibrando custo e 
qualidade
■
Bom para chatbots corporativos, agentes, análise de documentos 
e geração de código
Definição
A N A L O G I A
Especialidade
Pense em Claude como um analista 
cuidadoso: respostas estruturadas, 
segue regras com rigor e lida bem 
com documentos longos e diretrizes 
detalhadas.


---
## Página 16

M Ó D U L O  0 3   •   C O N C E I T O  2  D E  4
Meta Llama
Módulo 3 — Modelos no Bedrock
16 / 36
■
Família de modelos da Meta com pesos abertos, disponível 
também via Bedrock
■
Equilíbrio competitivo entre tamanho, qualidade e custo, com 
suporte multilíngue
■
Opções de tamanho variam de modelos pequenos a versões 
maiores em paralelo
■
Adotado em ambientes corporativos por permitir personalização 
avançada
■
No Bedrock, é consumido como API gerenciada sem gestão de 
infraestrutura
Definição
Distinção essencial
Aberto
Pesos abertos permitem fine-tuning 
fora do Bedrock também
Modelo
Via Bedrock, AWS cuida de 
hospedagem, segurança e 
escalabilidade


---
## Página 17

M Ó D U L O  0 3   •   C O N C E I T O  3  D E  4
Amazon Titan
Módulo 3 — Modelos no Bedrock
17 / 36
■
Família de modelos fundacionais desenvolvida pela própria AWS, 
exclusiva no Bedrock
■
Inclui modelos para geração de texto, embeddings e geração de 
imagens
■
Treinada com foco em qualidade, segurança e responsabilidade 
no uso de dados
■
Boa relação custo-benefício para tarefas comuns de 
produtividade e busca
■
Pode ser customizada com dados próprios da empresa de forma 
privada e segura
Definição
Variantes
Text
Geração e resumo de textos
Embeddings
Vetores para busca semântica
Image
Geração e edição de imagens
Express
Versão otimizada para custo


---
## Página 18

M Ó D U L O  0 3   •   C O N C E I T O  4  D E  4
Amazon Nova
Módulo 3 — Modelos no Bedrock
18 / 36
■
Nova geração de modelos fundacionais da AWS, com foco em 
multimodalidade e custo
■
Trabalha com texto, imagem e vídeo de forma integrada em uma 
mesma família
■
Variantes otimizadas para diferentes pontos de equilíbrio entre 
custo e qualidade
■
Acessível via Bedrock como qualquer outro modelo, com a 
mesma API e ferramentas
■
Permite combinar diferentes mídias em um mesmo fluxo de 
inferência
Definição
V A R I A N T E S   ×
N O V A
Micro
Treinamento: Mais rápida e econômica
Inferência: Texto puro com baixo custo
Lite
Treinamento: Equilíbrio entre custo e 
qualidade
Inferência: Multimodal econômica
Pro
Treinamento: Maior qualidade da família
Inferência: Casos exigentes e multimodais


---
## Página 19

M Ó D U L O  0 3   •   P R Á T I C A
Como escolher um modelo do Bedrock
Módulo 3 — Modelos no Bedrock
19 / 36
■
A escolha depende de tarefa, idioma, contexto necessário, custo e latência aceitável
■
Para tarefas com documentos longos, modelos com janela de contexto ampla são ideais
■
Para volumes altos com baixo custo, considere variantes pequenas como Titan Express
■
Para casos críticos de raciocínio, escolha modelos de maior qualidade da família
■
Sempre teste mais de um modelo no mesmo conjunto de prompts antes de decidir
Definição


---
## Página 20

M Ó D U L O
04
Bedrock Playground
Ambiente interativo dentro do Bedrock para experimentar 
modelos e prompts antes de integrar


---
## Página 21

M Ó D U L O  0 4   •   D E F I N I Ç Ã O
O que é o Bedrock Playground?
Módulo 4 — Bedrock Playground
21 / 36
■
Ambiente interativo dentro da console do Bedrock para testar 
modelos sem código
■
Permite experimentar prompts antes de investir em integração 
na aplicação
■
Suporta ajuste rápido de parâmetros como temperatura, top-p e 
máximo de tokens
■
Ideal para iterar prompts em ciclos curtos com modelos 
diferentes em paralelo
■
Não substitui testes automatizados, mas acelera muito o 
aprendizado inicial do time
Definição
Testar
Testar prompts e modelos sem escrever 
código de integração
Comparar
Comparar resultados entre modelos para a 
mesma entrada


---
## Página 22

M Ó D U L O  0 4   •   R E C U R S O S
Recursos do Playground
Módulo 4 — Bedrock Playground
22 / 36
■
Interface visual na console com seleção rápida de modelo e parâmetros
■
Modos de chat e completion para diferentes estilos de interação
■
Ajuste de temperatura, top-p, máximo de tokens e prompt do sistema
■
Histórico de conversa preservado durante a sessão para iterar prompts
■
Exporta amostras como exemplo de chamada para CLI, SDK ou notebook
Definição


---
## Página 23

M Ó D U L O  0 4   •  P E R S P E C T I V A
Módulo 4 — Bedrock Playground
23 / 36
Quando usar e limitações
Quando usar
■
Validar ideias de prompts antes de investir em 
código de integração
■
Comparar modelos e parâmetros para escolher o 
mais adequado
■
Demonstrar capacidades dos modelos para 
stakeholders e times de produto
■
Treinar prompt engineers e onboard novos 
integrantes do time de IA
■
Documentar casos de teste com prompts e 
respostas reais para revisão
Limitações
■
Não substitui testes automatizados em pipelines 
de produção
■
Sessão é interativa e individual, sem 
versionamento entre execuções
■
Cada chamada consome tokens e gera custo na 
conta como qualquer invocação
■
Modelos disponíveis dependem de habilitação 
prévia na conta AWS
■
Não avalia automaticamente qualidade ou 
segurança das respostas geradas


---
## Página 24

M Ó D U L O
05
Capacidade Sob-demanda
Modalidade padrão de consumo do Bedrock, com cobrança por 
token e sem reserva prévia


---
## Página 25

M Ó D U L O  0 5   •   D E F I N I Ç Ã O
O que é capacidade sob-demanda?
Módulo 5 — Sob-demanda
25 / 36
■
Modalidade padrão do Bedrock, em que cada chamada é cobrada por tokens 
consumidos
■
Não exige reserva nem compromisso de uso mínimo na conta AWS
■
Custo varia conforme tokens de entrada e saída, com preços diferentes por 
modelo
■
Latência sujeita à fila compartilhada do serviço durante picos de demanda
■
Quotas regionais limitam total de tokens por minuto disponíveis para a conta
Definição


---
## Página 26

M Ó D U L O  0 5   •   C O M P A R A Ç Ã O
Características da sob-demanda
Módulo 5 — Sob-demanda
26 / 36
Aspecto
Vantagem
Cuidado
Compromisso
Sem reserva nem contrato mínimo
Quotas regionais podem limitar pico
Cobrança
Pago apenas pelo que foi consumido
Custo unitário mais alto que provisionada
Latência
Adequada para uso intermitente
Pode oscilar com tráfego concorrente
Onboarding
Disponível imediatamente após habilitar
Sem etapa de provisionamento prévio
Caso típico
Provas de conceito e cargas variáveis
Aplicações com demanda imprevisível


---
## Página 27

M Ó D U L O  0 5   •  U S O
Quando usar a sob-demanda?
Módulo 5 — Sob-demanda
27 / 36
Provas de conceito
Validar ideias e protótipos sem assumir compromisso financeiro
Tráfego variável
Aplicações com volume imprevisível ou sazonal ao longo do dia
Volume baixo
Cargas pequenas em que provisionar capacidade não compensa o custo
Equipes pequenas
Times sem dedicado MLOps que precisam começar com mínimo overhead
Múltiplos modelos
Quando há experimentação contínua entre modelos diferentes


---
## Página 28

M Ó D U L O
06
Capacidade Provisionada
Modalidade do Bedrock com throughput reservado, ideal para 
tráfego previsível e alto volume


---
## Página 29

M Ó D U L O  0 6   •   C O N C E I T O
O que é capacidade provisionada?
Módulo 6 — Transformers
29 / 36
■
Modalidade em que o cliente reserva throughput dedicado em 
unidades de modelo
■
Compromisso de uso por hora ou por períodos de um e seis 
meses
■
Garante latência consistente e capacidade independente de 
outras contas
■
Costuma ter custo total menor em volumes elevados e previsíveis
■
Permite usar modelos customizados via fine-tuning na própria 
conta
Definição
R E S E R V A
Provisionada
Modalidade do Bedrock em que o cliente 
reserva throughput dedicado por hora ou 
por períodos contratados, garantindo 
latência consistente e capacidade 
exclusiva.


---
## Página 30

M Ó D U L O  0 6   •   C O M O  P R O V I S I O N A R
Como configurar capacidade provisionada
Módulo 6 — Transformers
30 / 36
■
Selecionar o modelo desejado dentro do catálogo do Bedrock
■
Definir o número de unidades de modelo conforme necessidade prevista
■
Escolher o prazo de compromisso entre 1, 6 meses ou sob demanda especial
■
Confirmar contrato e custo total estimado antes da ativação do recurso
■
A unidade fica disponível para a conta exclusivamente até o fim do contrato
Definição


---
## Página 31

M Ó D U L O  0 6   •   Q U A N D O  U S A R
Quando usar capacidade provisionada
Módulo 6 — Transformers
31 / 36
■
Aplicações com volume previsível e alto durante períodos 
extensos do dia
■
Cargas de produção que exigem latência consistente 
independentemente de picos
■
Casos em que modelos customizados precisam estar sempre 
disponíveis sem fila
■
Cenários em que custo unitário do token sob-demanda já não é 
viável
■
Negócios com pico previsível concentrado em horários definidos 
do dia
Ideia central
Provisionada compensa quando o 
tráfego é alto, previsível e exige 
latência consistente em produção.
Antes de provisionar, valide o padrão 
de uso real durante semanas em 
modalidade sob-demanda.


---
## Página 32

M Ó D U L O
07
Comparação e Escolha
Como decidir entre sob-demanda e provisionada para o seu caso 
de uso


---
## Página 33

M Ó D U L O  0 7   •   C O N C E I T O
Sob-demanda x Provisionada
Módulo 7 — Dimensões
33 / 36
■
Sob-demanda cobra por token consumido sem qualquer compromisso de uso
■
Provisionada reserva throughput dedicado por hora, ou por períodos contratados
■
Sob-demanda é ideal para experimentação e cargas variáveis no curto prazo
■
Provisionada é ideal para produção previsível com alto volume e latência crítica
■
A escolha errada pode aumentar custo total ou comprometer a experiência do usuário
Definição


---
## Página 34

M Ó D U L O  0 7   •   C R I T É R I O S
Como escolher a modalidade
Módulo 7 — Dimensões
34 / 36
Padrão de tráfego
Tráfego previsível e estável favorece provisionada, oscilante prefere sob-
demanda
Volume previsto
Volumes altos justificam o investimento em capacidade reservada por contrato
Latência exigida
SLA estrito de latência consistente pede provisionada, sem fila concorrente
Modelos customizados
Modelos próprios via fine-tuning costumam exigir capacidade provisionada


---
## Página 35

M Ó D U L O  0 7   •   E Q U I L Í B R I O
Encontrando o ponto de equilíbrio
Módulo 7 — Dimensões
35 / 36
■
Comece com sob-demanda em provas de conceito e cargas 
iniciais sem compromisso
■
Monitore custo por mês e número de tokens consumidos pela 
aplicação em produção
■
Compare cenários de provisionamento com base no consumo 
médio observado
■
Quando custo unitário sob-demanda passar a doer, migre para 
capacidade provisionada
■
Modalidade pode ser revisada periodicamente conforme padrão 
de uso evoluir
Definição
Padrão de uso
estável
alto
baixo
variável
Tráfego previsível e alto pede provisionada; variável 
e baixo, sob-demanda


---
## Página 36

E N C E R R A M E N T O
Recapitulando os conceitos da aula
Encerramento
36 / 36
■
Dívida técnica em ML acumula em código, dados e modelos ao mesmo tempo
■
Boas práticas de MLOps são a forma estruturada de pagar dívida técnica em IA
■
Amazon Bedrock dá acesso gerenciado a modelos fundacionais via API
■
Catálogo do Bedrock inclui Claude, Llama, Titan, Nova e outros modelos
■
Bedrock Playground acelera prototipagem e comparação de prompts e modelos
■
Capacidade sob-demanda cobra por token e é ideal para tráfego variável
■
Capacidade provisionada reserva throughput para volume previsível e alto
■
Modalidade pode ser revisada conforme padrão de uso muda ao longo do projeto
