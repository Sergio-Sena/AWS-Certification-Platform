# Encontro 12.pdf

*Convertido automaticamente de PDF*


---
## Página 1

Treinamento de Modelos
Hiperparâmetros,
épocas e ajuste fino
Pré-processamento, treinamento, fine-tuning, hiperparâmetros, overfitting e underfitting


---
## Página 2

V I S Ã O  G E R A L  D A  A U L A
Agenda
Visão geral
2 / 46
01
Preparação de Dados
Pré-processamento, engenharia de atributos e Feature 
Store
02
Treinamento e Estratégias
Datasets de benchmark, pré-treino continuado e fine-
tuning
03
Hiperparâmetros de Inferência
Temperatura, top-k e máximo de tokens em LLMs
05
Overfitting e Underfitting
Diagnóstico e correção dos extremos de ajuste do 
modelo
04
Hiperparâmetros e Épocas
Conceitos de hiperparâmetros e papel das épocas no 
treino


---
## Página 3

M Ó D U L O
Preparação de Dados
Pré-processamento, engenharia de atributos, Feature Store e data 
augmentation


---
## Página 4

M Ó D U L O  1
•
C O N C E I T O  I N I C I A L
O que é pré-processamento?
Módulo 1 — Preparação de Dados
4 / 46
Definição
■
Conjunto de operações que transformam dados brutos em 
formato adequado para o treinamento
■
Inclui limpeza, normalização, codificação e divisão em treino, 
validação e teste
■
Tem impacto direto na qualidade do modelo final e costuma 
consumir maior parte do projeto
■
Etapa essencial mesmo quando os dados parecem prontos à 
primeira vista
Fluxo de preparação
Dados brutos
Limpeza
Transformação
Pronto


---
## Página 5

M Ó D U L O  1
•
E N G E N H A R I A
Engenharia de atributos
Módulo 1 — Preparação de Dados
5 / 46
Definição
■
Processo de criar variáveis informativas a partir dos dados disponíveis
■
Boa engenharia de atributos pode superar algoritmos mais sofisticados
■
Combina conhecimento do negócio com técnicas estatísticas e matemáticas
■
Pode incluir agregações temporais, razões, codificações e interações entre features
Criação
Derivar novas variáveis a partir das 
existentes com regras de negócio ou 
agregações
Seleção
Escolher as variáveis mais relevantes e 
descartar as redundantes ou ruidosas
Transformação
Mudar formato, escala ou representação 
para ajudar o algoritmo a aprender 
melhor


---
## Página 6

M Ó D U L O  1
•
G E S T Ã O
SageMaker Feature Store
Módulo 1 — Preparação de Dados
6 / 46
Definição
■
Repositório centralizado para armazenar, versionar e compartilhar 
features de ML
■
Garante que a mesma feature seja usada em treino e inferência sem 
divergência
■
Suporta dois modos: online para baixa latência e offline para 
treinamento em lote
■
Permite que múltiplos times reutilizem features sem recalcular tudo do 
zero
■
Reduz erros causados por inconsistências entre dados de treino e 
produção
D E S T A Q U E
Reuso
Feature Store evita que cada time 
recalcule as mesmas features e garante 
consistência entre o que vê o treino e o 
que vê a inferência.
JC1


---
## Página 7

Slide 6
JC1 
Assunto ja visto no encontro anterior: 11
Josely Castro; 2026-05-27T18:22:22.905


---
## Página 8

M Ó D U L O  1
•
E X P A N S Ã O
Data augmentation
Módulo 1 — Preparação de Dados
7 / 46
Definição
■
Técnica que amplia datasets de treino criando variações dos exemplos 
existentes
■
Ajuda o modelo a generalizar melhor e reduz risco de overfitting
■
Especialmente útil quando o dataset original é pequeno ou 
desbalanceado
■
Pode ser aplicada em tempo de treino ou criar dataset estendido 
offline
■
As técnicas variam por tipo de dado: imagem, texto, áudio e tabular
Técnicas por tipo de dado
Texto
Rotação, recorte, espelhamento e 
variações de cor
Imagem
Sinônimos, paráfrases e tradução de ida e 
volta
Áudio
Mudança de tom, ruído de fundo e 
variação de velocidade
Tabular
SMOTE para classes raras e perturbação 
de variáveis


---
## Página 9

M Ó D U L O  1
•
C O M P A R A Ç Ã O
Pré-processamento x Engenharia de atributos
Módulo 1 — Preparação de Dados
8 / 46
Engenharia de atributos
Pré-processamento
Aspecto
Criar variáveis informativas para o modelo
Limpar e preparar dados existentes
Objetivo
Criativa: depende de conhecimento do negócio
Mecânica: limpeza, normalização, 
divisão
Tipo de operação
Cientista de dados com domínio do problema
Engenheiro de dados ou ML
Quem faz
Pode superar algoritmos mais sofisticados
Garantia de qualidade dos dados de 
entrada
IA Generativa


---
## Página 10

M Ó D U L O
Treinamento de Modelos
Como os modelos aprendem com os dados, e como medimos o 
desempenho com datasets de benchmark


---
## Página 11

M Ó D U L O  2
•
C O N C E I T O
O que é treinamento?
Módulo 2 — Treinamento
10 / 46
Definição
■
Processo em que o algoritmo ajusta os parâmetros do modelo a partir dos dados
■
Compara a previsão do modelo com a resposta correta usando uma função de erro
■
Ajusta os pesos do modelo iterativamente até reduzir o erro a um nível aceitável
■
Demanda dados, algoritmo escolhido e capacidade computacional adequada
■
Resulta em um artefato de modelo pronto para ser avaliado e implantado


---
## Página 12

M Ó D U L O  2
•
E T A P A S
Etapas do treinamento
Módulo 2 — Treinamento
11 / 46
1
Carregar
Carregar dados preparados 
nos formatos esperados pelo 
algoritmo
2
Inicializar
Inicializar o modelo com 
pesos aleatórios e definir 
hiperparâmetros
3
Iterar
Iterar épocas, calculando erro 
e ajustando pesos para 
reduzi-lo
4
Salvar
Salvar o modelo treinado 
como artefato pronto para 
avaliação
O processo combina dados, algoritmo, hiperparâmetros e poder computacional


---
## Página 13

M Ó D U L O  2
•
R E F E R Ê N C I A S
Datasets de benchmark
Módulo 2 — Treinamento
12 / 46
ImageNet
Padrão para classificação de imagens com mais de 1 milhão 
de exemplos rotulados.
GLUE e MMLU
Avaliam compreensão e raciocínio em modelos de 
linguagem em vários idiomas.
COCO
Imagens com legendas para tarefas multimodais e 
detecção de objetos.
LibriSpeech
Áudio em inglês para reconhecimento de fala e 
processamento de áudio.


---
## Página 14

M Ó D U L O
Estratégias de Treinamento
Pré-treino do zero, pré-treino continuado, fine-tuning e 
abordagens auxiliares


---
## Página 15

M Ó D U L O  3
•
V O C A B U L Á R I O  E S S E N C I A L
Cinco estratégias de treinamento
Módulo 3 — Estratégias
14 / 46
0 1
Pré-treino
Treinar do zero em 
grandes volumes de 
dados, exigindo alto 
custo e tempo
0 2
Pré-treino 
continuado
Continuar o pré-treino 
de um modelo 
existente com dados de 
domínio específico
0 3
Fine-tuning
Ajustar um modelo pré-
treinado para uma 
tarefa com pares de 
exemplos rotulados
0 4
RLHF
Aprendizado por 
reforço com feedback 
humano para alinhar 
respostas a 
preferências
0 5
Few-shot
Guiar o modelo apenas 
com exemplos no 
prompt, sem 
treinamento adicional


---
## Página 16

M Ó D U L O  3
•
C O N C E I T O  1  D E  5
Pré-treino continuado
Módulo 3 — Estratégias
15 / 46
Definição
■
Continua o treinamento de um modelo já pré-treinado em 
dados de domínio específico
■
Não exige pares rotulados, usa textos e documentos do 
domínio
■
Útil para adaptar vocabulário, estilo e contexto do setor
■
Mais barato e rápido que treinar do zero, ainda exige bom 
volume de dados
■
Costuma vir antes do fine-tuning supervisionado em projetos 
de domínio fechado
A N A L O G I A
Especialização
Pense no pré-treino continuado como 
um médico generalista fazendo 
residência em uma área: aproveita 
toda a base anterior e adiciona 
profundidade no domínio escolhido.


---
## Página 17

M Ó D U L O  3
•
C O N C E I T O  2  D E  5
Fine-tuning
Módulo 3 — Estratégias
16 / 46
Definição
■
Ajustar um modelo pré-treinado em uma tarefa específica 
usando pares rotulados
■
Exige pares de entrada e saída esperada, mas em volume bem 
menor que o pré-treino
■
Foca o modelo em comportamento desejado: respostas, 
formatos, estilo
■
Pode ser feito em todo o modelo ou em poucas camadas com 
técnicas como LoRA
■
Costuma ser combinado com pré-treino continuado em 
projetos corporativos
Distinção essencial
Pré-treino continuado
Aprende vocabulário e estilo: dados não 
rotulados do domínio
Fine-tuning
Aprende comportamento: pares 
rotulados do que entra e do que sair


---
## Página 18

M Ó D U L O  3
•
C O N C E I T O  3  D E  5
Tipos de fine-tuning
Módulo 3 — Estratégias
17 / 46
Definição
■
Existem diferentes formas de fazer fine-tuning conforme custo e 
flexibilidade
■
Full fine-tuning ajusta todos os pesos, exige mais hardware e 
dados
■
LoRA e PEFT ajustam poucas camadas e mantêm o modelo 
original quase intacto
■
Instruction tuning treina o modelo a seguir instruções em 
formato natural
■
A escolha depende de orçamento, dados disponíveis e objetivo 
final
Modalidades
Full
Ajusta todos os pesos do modelo
LoRA
Adiciona pequenas matrizes treináveis
PEFT
Ajusta poucos parâmetros eficientes
Instruction
Treina a obedecer comandos


---
## Página 19

M Ó D U L O  3
•
C O N C E I T O  4  D E  5
Quando usar cada estratégia
Módulo 3 — Estratégias
18 / 46
Definição
■
A escolha entre estratégias depende de dados disponíveis e 
custo aceitável
■
Pré-treino do zero faz sentido apenas para grandes empresas 
com dados massivos
■
Pré-treino continuado é ideal para adaptar o vocabulário a um 
domínio fechado
■
Fine-tuning é o caminho para tarefas específicas com pares de 
exemplos
■
Few-shot prompting resolve casos pontuais sem qualquer 
treinamento adicional
E S T R A T É G I A   ×
C O N T E X T O
Domínio novo
Treinamento: Pré-treino continuado
Inferência: Vocabulário adaptado
Tarefa específica
Treinamento: Fine-tuning supervisionado
Inferência: Comportamento desejado
Caso pontual
Treinamento: Few-shot prompting
Inferência: Sem retraining adicional


---
## Página 20

M Ó D U L O  3
•
C U S T O S
Custos e benefícios das estratégias
Módulo 3 — Estratégias
19 / 46
Definição
■
Pré-treino do zero pode custar milhões de dólares e meses de execução
■
Pré-treino continuado custa fração do anterior e leva dias ou semanas
■
Fine-tuning de poucas camadas pode rodar em horas, com hardware acessível
■
Few-shot e RAG não envolvem treino, ideais para iterar rápido sobre dados
■
Combinar estratégias permite balancear qualidade, tempo e investimento


---
## Página 21

M Ó D U L O
Hiperparâmetros
Configurações que controlam o aprendizado e o comportamento 
do modelo durante o treinamento


---
## Página 22

M Ó D U L O  4
•
D E F I N I Ç Ã O
O que são hiperparâmetros?
Módulo 4 — Hiperparâmetros
21 / 46
Definição
■
Hiperparâmetros são configurações que controlam como o 
modelo aprende durante o treinamento
■
Não são aprendidos pelo modelo, são definidos previamente 
pelo time de ML
■
Exemplos incluem taxa de aprendizado, tamanho de batch e 
número de épocas
■
Boa escolha acelera convergência e reduz risco de overfitting 
ou underfitting
■
Encontrar bons hiperparâmetros costuma exigir 
experimentação organizada
Antes
Configurados antes do treinamento começar
Durante
Não mudam ao longo da execução do 
treinamento


---
## Página 23

M Ó D U L O  4
•
T I P O S
Tipos de hiperparâmetros
Módulo 4 — Hiperparâmetros
22 / 46
Definição
■
Taxa de aprendizado controla o tamanho do passo nos ajustes de pesos
■
Tamanho de batch define quantos exemplos passam pela rede a cada atualização
■
Número de épocas determina quantas vezes o dataset será percorrido
■
Regularização reduz overfitting penalizando pesos muito grandes
■
Arquitetura define camadas, neurônios e ativações que compõem o modelo


---
## Página 24

M Ó D U L O  4
•
A J U S T E
Ajuste de hiperparâmetros
Módulo 4 — Hiperparâmetros
23 / 46
Métodos comuns
■
Grid search testa todas as combinações em uma 
grade definida
■
Random search amostra combinações aleatórias 
dentro do espaço de busca
■
Otimização bayesiana usa resultados anteriores 
para escolher próximas tentativas
■
SageMaker oferece tuning gerenciado integrado ao 
treinamento
■
Validação cruzada ajuda a comparar combinações 
com mais robustez
Trade-offs
■
Espaço de busca grande explode em custo 
computacional
■
Resultados muito sensíveis a dados específicos do 
experimento
■
Bons hiperparâmetros não compensam dados 
ruins ou modelo inadequado
■
Otimizar a métrica errada leva a um modelo bonito 
que falha no negócio
■
Documentar a busca evita repetir os mesmos 
experimentos no futuro


---
## Página 25

M Ó D U L O
Épocas no Treinamento
Quantas vezes o modelo passa pelos dados durante o 
treinamento, e por que isso importa


---
## Página 26

M Ó D U L O  5
•
D E F I N I Ç Ã O
O que são épocas?
Módulo 5 — ROTULAGEM
25 / 46
Definição
■
Uma época é uma passagem completa pelos dados de treino durante o aprendizado
■
A cada época, os pesos do modelo são ajustados para reduzir o erro
■
Modelos costumam treinar por dezenas a milhares de épocas
■
O número certo depende do volume de dados, da arquitetura e da tarefa
■
Acompanhar erro de treino e validação em cada época é essencial


---
## Página 27

M Ó D U L O  5
•
C O M P A R A Ç Ã O
Poucas épocas x Muitas épocas
Módulo 5 — ROTULAGEM
26 / 46
Muitas épocas
Poucas épocas
Aspecto
Pode atingir bom ajuste, ou sobreajustar
Modelo pode ficar subajustado
Convergência
Overfitting depois do ponto ótimo
Underfitting nos dados
Risco principal
Treinamento longo e caro
Treinamento curto e barato
Tempo e custo
Curva mostra ponto de virada
Curva pode estar incompleta
Validação
Reduzir ou usar early stopping
Aumentar até a curva estabilizar
Decisão


---
## Página 28

M Ó D U L O  5
•
P R Á T I C A
Quantas épocas usar?
Módulo 5 — ROTULAGEM
27 / 46
Datasets pequenos
Mais épocas tendem a ajudar, pois o modelo precisa de mais passagens para aprender
Datasets grandes
Menos épocas costumam bastar, pois cada passada já oferece muita informação
Modelos grandes
Cuidado com excesso de épocas, alto risco de overfitting em poucas iterações
Fine-tuning
Geralmente bastam de uma a cinco épocas para ajustar o modelo à tarefa
Decisão prática
Use validação para detectar o ponto de parar com early stopping


---
## Página 29

M Ó D U L O
Hiperparâmetros de 
Inferência
Temperatura, top-k e máximo de tokens guiam a geração sem 
alterar o modelo


---
## Página 30

M Ó D U L O  6
•
C O N C E I T O
Hiperparâmetros de inferência
Módulo 6 — Hiperparâmetros
29 / 46
Definição
■
Configuram como o modelo escolhe o próximo token durante a 
geração
■
Não alteram o modelo treinado, apenas guiam suas saídas em 
tempo real
■
Permitem ajustar criatividade, precisão e custo conforme o caso 
de uso
■
Os principais são temperatura, top-k, top-p e máximo de tokens
■
Uma boa escolha pode mudar drasticamente a experiência do 
usuário final
G E R A Ç Ã O
Saída
Esses parâmetros controlam como o 
modelo gera saída token por token, sem 
alterar seus pesos internos, e podem ser 
ajustados a cada chamada.


---
## Página 31

M Ó D U L O  6
•
T E M P E R A T U R A
Temperatura
Módulo 6 — TEMPERATURA
30 / 46
Definição
■
Controla o quanto o modelo é determinístico ou criativo na escolha do próximo token
■
Valores baixos como 0.1 produzem respostas previsíveis e factuais
■
Valores altos como 1.0 ou mais aumentam variação e criatividade
■
Para tarefas como código e dados, temperatura próxima de zero costuma ser melhor
■
Para criação de conteúdo e brainstorming, valores maiores tendem a ajudar


---
## Página 32

M Ó D U L O  6
•
T O P - K  E  T O K E N S
Top-k e máximo de tokens
Módulo 6 — TOP-K E TOKENS
31 / 46
Definição
■
Top-k limita o sorteio do próximo token aos K tokens mais prováveis em cada 
passo
■
Top-k pequeno torna a saída mais previsível, top-k maior dá mais variedade
■
Máximo de tokens define o tamanho-limite da resposta gerada pelo modelo
■
Esse limite controla custo, latência e impede respostas longas demais
■
Bons valores dependem do caso: chatbot curto, resumo médio, análise longa
Ideia central
Hiperparâmetros de inferência são 
alavancas para equilibrar 
criatividade, precisão e custo em 
cada chamada.
Pequenos ajustes em temperatura, 
top-k e tokens podem mudar a 
experiência percebida do usuário 
final.


---
## Página 33

M Ó D U L O
Overfitting e Underfitting
Os dois extremos de ajuste do modelo, como diagnosticá-los e 
corrigi-los


---
## Página 34

M Ó D U L O  7
•
C O N C E I T O
Overfitting e underfitting
Módulo 7 — Ajuste do Modelo
33 / 46
Definição
■
São os dois extremos opostos de ajuste do modelo aos dados de treino
■
Overfitting acontece quando o modelo aprende ruído e detalhes que não 
generalizam
■
Underfitting acontece quando o modelo é simples demais para capturar os 
padrões
■
Ambos resultam em desempenho ruim em produção, ainda que por motivos 
opostos
■
O objetivo é encontrar o equilíbrio entre os dois extremos


---
## Página 35

M Ó D U L O  7
•
D I A G N Ó S T I C O
Como detectar e evitar
Módulo 7 — Ajuste do Modelo
34 / 46
Detectar overfitting
Acompanhar a diferença entre erro de treino e erro de validação a cada época
Evitar overfitting
Aplicar regularização, dropout, data augmentation ou aumentar dados de 
treino
Detectar underfitting
Modelo não atinge desempenho mínimo nem nos próprios dados de 
treinamento
Evitar underfitting
Aumentar capacidade do modelo, criar mais features ou treinar por mais 
épocas


---
## Página 36

M Ó D U L O  7
•
E Q U I L Í B R I O
Buscando o equilíbrio
Módulo 7 — Ajuste do Modelo
35 / 46
■
O modelo ideal está entre o simples demais e o complexo demais 
para os dados
■
Curvas de erro de tunderfitno e validação ajudam a localizar o 
ponto de virada
■
Early stopping interrompe o treino quando a validação começa a 
piorar
■
Aumentar volume e qualidade dos dados é a forma mais robusta 
de evitar overfitting
■
O equilíbrio é busca contínua, não estado final que se atinge uma 
vez
Pontos de ajuste
rei
ideal
overfit
ruído
O ponto ideal fica entre o simples demais e o 
complexo demais
Definição


---
## Página 37

E N C E R R A M E N T O
Recapitulando os conceitos da aula 
Encerramento
36 / 46
■
Pré-processamento e engenharia de atributos preparam dados para o treinamento
■
Feature Store centraliza features e mantém consistência entre treino e inferência
■
Data augmentation amplia datasets criando variações dos exemplos existentes
■
Datasets de benchmark medem qualidade dos modelos em tarefas conhecidas
■
Pré-treino continuado adapta vocabulário; fine-tuning ajusta a tarefas específicas
■
Hiperparâmetros são definidos antes do treino e ajustados via tuning
■
Temperatura, top-k e máximo de tokens guiam a geração na inferência
■
Overfitting e underfitting são extremos de ajuste, evitados com técnicas apropriadas
Explore na prática:
https://brianmonteiro54.github.io/Balaio-de-Gatos/aula12/
