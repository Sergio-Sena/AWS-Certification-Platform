# Encontro 4.pdf

*Convertido automaticamente de PDF*


---
## Página 1

Tipos de Inferência e Métricas de 
Performance de Modelos
Fundamentos conceituais para arquitetos e profissionais de nuvem


---
## Página 2

V I S Ã O  G E R A L  D A  A U L A
Agenda
Visão geral
2 / 25
01
Tipos de Inferência
Inferência em lote (batch), Inferência em tempo real
Comparação entre as abordagens, Inferência 
assíncrona, Inferência serverless e SageMaker 
Serverless Inference
02
Métricas de Performance
Acurácia, Precisão, Recall, F1 Score e AUC
Matriz de confusão, MAE (Mean Absolute Error)
E Métricas de negócio (ROI, custo, impacto)


---
## Página 3

M Ó D U L O
01
Tipos de Inferência
•
Inferência em lote (batch)
•
Inferência em tempo real
•
Comparação entre as abordagens
•
Inferência assíncrona
•
Inferência serverless
•
SageMaker Serverless Inference


---
## Página 4

M Ó D U L O  1
•
T i p o s  d e  I n f e r ê n c i a
Tipos de Inferência: visão geral
Módulo 1 — Conceito
4 / 25
Definição
▪
Inferência é o uso do modelo já treinado para gerar previsões a partir de novos dados.
▪
Diferentes contextos de uso exigem diferentes formas de servir o modelo.
▪
A escolha do tipo de inferência impacta latência, custo e arquitetura.
▪
Principais abordagens: lote, tempo real, assíncrona e serverless.
Lote
Grandes volumes 
processados juntos
Tempo real
Resposta imediata por 
requisição
Assíncrona
Processada em segundo 
plano
Serverless
Sem gerenciar servidores


---
## Página 5

M Ó D U L O  1
•
T i p o s  d e  I n f e r ê n c i a
Inferência em Lote (Batch)
Módulo 1 — Tipos de Inferência
5 / 25
Definição
▪
Processa grandes volumes de dados de uma só vez.
▪
Execução planejada não exige resposta imediata.
▪
Resultados são gravados em armazenamento (ex.: arquivo, 
banco).
▪
Recursos computacionais são alocados apenas durante o job.
▪
Geralmente apresenta menor custo por previsão.


---
## Página 6

M Ó D U L O  1
•
T i p o s  d e  I n f e r ê n c i a
Inferência em Tempo Real
Módulo 1 — Tipos de Inferência
6 / 25
Definição
▪
Resposta imediata a cada requisição (latência em 
milissegundos).
▪
Endpoint do modelo permanece sempre disponível.
▪
Capacidade dimensionada para o pico de uso esperado.
▪
Custo geralmente maior, pela disponibilidade contínua.
▪
Exige monitoramento próximo de latência e disponibilidade.


---
## Página 7

M Ó D U L O  1
•
T i p o s  d e  I n f e r ê n c i a
Inferência em Lote vs Tempo Real
Módulo 1 — Tipos de Inferência
7 / 25
Critério
Inferência em Lote
Inferência em Tempo Real
Latência
Alta - minutos a horas
Baixa - milissegundos
Volume
Grandes volumes acumulados
Requisições individuais
Custo
Menor - recursos sob demanda
Maior - endpoint sempre ativo
Disponibilidade
Job executado periodicamente
Endpoint contínuo
Uso típico
Relatórios, scoring noturno
Apps interativos, fraude online


---
## Página 8

M Ó D U L O  1
•
T i p o s  d e  I n f e r ê n c i a
Inferência Assíncrona
Módulo 1 — Tipos de Inferência
8 / 25
Como funciona
▪
A requisição é enviada e o processamento ocorre em segundo 
plano.
▪
O resultado é entregue quando a previsão estiver pronta (sem 
bloqueio).
▪
Útil quando o tempo de inferência é longo ou o payload é grande.
▪
Posiciona-se entre o lote e o tempo real, equilibrando latência e 
custo.
▪
Permite processar requisições mesmo sem resposta imediata ao 
cliente.
Indicada quando o cliente pode esperar, mas o volume não justifica um lote 
agendado.


---
## Página 9

M Ó D U L O  1
•
T i p o s  d e  I n f e r ê n c i a
Inferência Serverless
Módulo 1 — Tipos de Inferência
9 / 21
Definição
▪
O usuário não gerencia servidores nem capacidade do endpoint.
▪
A infraestrutura escala automaticamente conforme a demanda.
▪
Cobrança somente pelo uso efetivo da inferência.
▪
Adequado para cargas intermitentes, imprevisíveis ou com baixa 
frequência.
▪
Reduz a complexidade operacional e o custo ocioso.
9 / 25


---
## Página 10

M Ó D U L O  1
•
T i p o s  d e  I n f e r ê n c i a
SageMaker Serverless Inference
Módulo 1 — Tipos de Inferência
10 / 25
Características principais
▪
Serviço gerenciado da AWS para servir modelos sem provisionar 
infraestrutura.
▪
Inicialização automática do endpoint quando há requisições.
▪
Sem custo enquanto o endpoint está ocioso.
▪
Escala automaticamente conforme o tráfego varia.
▪
Indicado para workloads imprevisíveis ou de baixo volume.


---
## Página 11

M Ó D U L O
02
Métricas de Performance 
de Modelos
Acurácia
Precisão
Recall
F1 Score
AUC
Matriz de confusão
MAE (Mean Absolute Error)
Métricas de negócio (ROI, custo, impacto)


---
## Página 12

M Ó D U L O  2
•
M é t r i c a s  d e  P e r f o r m a n c e  d e  M o d e l o s
Métricas de Performance de Modelos
Módulo 2 — Métricas de Performance de Modelos
12 / 25
Características principais
▪
Um modelo precisa ser avaliado antes de ir para produção.
▪
Cada métrica responde a uma pergunta diferente sobre o 
desempenho.
▪
A escolha da métrica depende do tipo de problema e do impacto do 
erro.
▪
Métricas técnicas devem ser combinadas com métricas de negócio.


---
## Página 13

M Ó D U L O  2
•
M é t r i c a s  d e  P e r f o r m a n c e  d e  M o d e l o s
Matriz de Confusão
Módulo 2 — Métricas de Performance de Modelos
13 / 25
Características principais
■
Estrutura que organiza acertos e erros em problemas de 
classificação.
■
É a base de várias métricas (acurácia, precisão, recall, F1).
■
Permite enxergar onde o modelo erra, e não apenas o quanto erra.
Previsto
Positivo
Negativo
Pos.
Neg.
VP
Verdadeiro Positivo
FP
Falso Positivo
FN
Falso Negativo
VN
Verdadeiro Negativo


---
## Página 14

M Ó D U L O  2
•
M é t r i c a s  d e  P e r f o r m a n c e  d e  M o d e l o s
Acurácia
Módulo 2 — Métricas de Performance de Modelos
14 / 25
Características principais
■
Proporção de previsões corretas em relação ao total.
■
Fórmula conceitual: (acertos) ÷ (total de previsões).
■
Boa visão geral quando as classes estão balanceadas.
■
Pode ser enganosa em problemas com classes desbalanceadas.
F ó r m u l a
(VP + VN)
VP + VN + FP + FN
Atenção em classes desbalanceadas.


---
## Página 15

M Ó D U L O  2
•
M é t r i c a s  d e  P e r f o r m a n c e  d e  M o d e l o s
Precisão
Módulo 2 — Métricas de Performance de Modelos
15 / 25
Características principais
■
Dos exemplos previstos como positivos, quantos eram realmente 
positivos.
■
Fórmula conceitual: VP ÷ (VP + FP).
■
Importante quando o custo de um falso positivo é alto.
■
Exemplo: marcar uma transação legítima como fraude.
F ó r m u l a
VP
VP + FP
Foco: reduzir falsos positivos.


---
## Página 16

M Ó D U L O  2
•
T i p o s
d e  I n f e r ê n c i a
Recall (Sensibilidade)
Módulo 2 — Métricas de Performance de Modelos
16 / 25
Características principais
■
Dos exemplos realmente positivos, quantos o modelo conseguiu 
identificar.
■
Fórmula conceitual: VP ÷ (VP + FN).
■
Importante quando o custo de um falso negativo é alto.
■
Exemplo: deixar passar um caso real de fraude ou de doença.
F ó r m u l a
VP
VP + FN
Foco: reduzir falsos negativos.


---
## Página 17

M Ó D U L O  2
•
M é t r i c a s  d e  P e r f o r m a n c e  d e  M o d e l o s
F1 Score
Módulo 2 — Métricas de Performance de Modelos
17 / 25
Características principais
■
Combina Precisão e Recall em uma única métrica.
■
É a média harmônica entre as duas penaliza desequilíbrios.
■
Útil quando se deseja equilíbrio entre falsos positivos e falsos 
negativos.
■
Especialmente recomendado em problemas com classes 
desbalanceadas.
Foco: reduzir falsos negativos.
Precisão
+
Recall
=
F1 Score


---
## Página 18

M Ó D U L O  2
•
M é t r i c a s  d e  P e r f o r m a n c e  d e  M o d e l o s
AUC - Area Under the Curve
Módulo 2 — Métricas de Performance de Modelos
18 / 25
Características principais
■
Mede a capacidade do modelo em distinguir entre as classes.
■
Avalia o desempenho considerando diferentes limiares de decisão.
■
Valores próximos de 1 indicam ótima separação entre classes.
■
Valores próximos de 0,5 indicam desempenho semelhante ao acaso.
■
Independente do limiar específico de classificação utilizado.
Foco: reduzir falsos negativos.
I N T E R P R E T A Ç Ã O
0,90 — 1,00
Excelente
0,80 — 0,90
Bom
0,70 — 0,80
Razoável
0,50 — 0,70
Fraco
≈ 0,50
Aleatório


---
## Página 19

M Ó D U L O  2
•
M é t r i c a s  d e  P e r f o r m a n c e  d e  M o d e l o s
MAE - Mean Absolute Error
Módulo 2 — Métricas de Performance de Modelos
19 / 25
Características principais
■
Métrica usada em problemas de regressão (saída numérica 
contínua).
■
Calcula o erro absoluto médio entre o valor previsto e o valor real.
■
Mantém a mesma unidade da variável que está sendo prevista.
■
Quanto menor o MAE, mais próximo o modelo está dos valores 
reais.
■
Interpretação direta e fácil de comunicar para áreas de negócio.
E M  U M A  F R A S E
"Em média, o quanto a previsão 
se afasta do valor real."
Aplicações: previsão de demanda, preço, 
temperatura, tempo.


---
## Página 20

M Ó D U L O  2
•
M é t r i c a s  d e  P e r f o r m a n c e  d e  M o d e l o s
Métricas de Negócio
Módulo 2 — Métricas de Performance de Modelos
20 / 25
Por que olhar além das métricas técnicas?
ROI
Retorno sobre investimento
Compara o ganho gerado pelo modelo 
com o custo de desenvolvê-lo e operá-
lo.
Custo
Operação e infraestrutura
Considera o custo de inferência, 
treinamento, armazenamento e 
manutenção.
Impacto
Efeito real no negócio
Mede mudança em indicadores como 
receita, conversão, churn ou eficiência.
Um modelo tecnicamente bom precisa também gerar valor para a organização.


---
## Página 21

E N C E R R A M E N T O ​
Resumo da aula
Encerramento​
21 / 25
■
O tipo de inferência (lote, tempo real, assíncrona, serverless) deve 
ser escolhido pelo caso de uso, não pela tecnologia.
■
Cada métrica de classificação responde a uma pergunta diferente 
analise sempre matriz de confusão e o impacto dos erros.
■
MAE é a métrica de erro mais direta para problemas de regressão.
■
Métricas técnicas isoladas não bastam: ROI, custo e impacto 
definem se o modelo realmente entrega valor.


---
## Página 22

P e r g u n t a 1
Pergunta
22 / 25
(A) Inferência em tempo real
(B) Inferência assíncrona
(C) Transformação em lote
(D) Inferência sem servidor
Uma organização de saúde está desenvolvendo um modelo de aprendizado de máquina (ML) para analisar dados 
de históricos médicos arquivados. A organização precisa realizar inferência em grandes conjuntos de dados que 
possuem vários GB de tamanho. A organização não precisa acessar as previsões do modelo imediatamente. Qual 
opção de inferência do Amazon SageMaker atenderá a esses requisitos?


---
## Página 23

P e r g u n t a 1
Pergunta
23 / 25
(A) Inferência em tempo real
(B) Inferência assíncrona
(C) Transformação em lote
(D) Inferência sem servidor
Uma organização de saúde está desenvolvendo um modelo de aprendizado de máquina (ML) para analisar dados 
de históricos médicos arquivados. A organização precisa realizar inferência em grandes conjuntos de dados que 
possuem vários GB de tamanho. A organização não precisa acessar as previsões do modelo imediatamente. Qual 
opção de inferência do Amazon SageMaker atenderá a esses requisitos?


---
## Página 24

P e r g u n t a 2
Pergunta
24 / 25
(A) Transformação em lote
(B) Inferência em tempo real 
(C) Inferência assíncrona
(D) Inferência sem servidor
Uma organização utiliza o Amazon SageMaker para processar modelos de Machine Learning (ML) em um ambiente 
de aprendizado online. A instituição lida com grandes volumes de dados dos alunos, com arquivos de até 1 GB e 
tempos de processamento de aproximadamente 1 hora. Ela precisa de uma solução de inferência que forneça 
resultados quase em tempo real para garantir um feedback rápido aos alunos. Qual opção de inferência do 
SageMaker atende a esses requisitos?


---
## Página 25

P e r g u n t a 2
Pergunta
25/ 25
(A) Transformação em lote
(B) Inferência em tempo real 
(C) Inferência assíncrona
(D) Inferência sem servidor
Uma organização utiliza o Amazon SageMaker para processar modelos de Machine Learning (ML) em um ambiente 
de aprendizado online. A instituição lida com grandes volumes de dados dos alunos, com arquivos de até 1 GB e 
tempos de processamento de aproximadamente 1 hora. Ela precisa de uma solução de inferência que forneça 
resultados quase em tempo real para garantir um feedback rápido aos alunos. Qual opção de inferência do 
SageMaker atende a esses requisitos?
