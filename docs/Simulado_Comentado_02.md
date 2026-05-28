# Simulado_Comentado_02.pdf

*Convertido automaticamente de PDF*


---
## Página 1

Simulado Comentado 02
AWS Certified AI Practitioner   •   AIF-C01
C N N   •   EM BE D D I N G S   •   C L A S S IF I C A Ç Ã O   •   IN F E R Ê N C I A   •   EX P L I C A BI L I D A D E   •   P R O M P T S   •   
R E K O G N I T I O N   •   M L O P S


---
## Página 2

S I M U L A D O    •    P E R G U N T A  1  D E  2 0    •    E N C O N T R O  1
Uma empresa de seguros precisa classificar AUTOMATICAMENTE fotografias de veículos envolvidos em sinistros em 
três categorias de severidade: leve, moderada e grave. A solução exige reconhecimento de padrões visuais em 
milhares de imagens. Que tipo de arquitetura de rede neural é a MAIS adequada para esse caso de uso?
A
Rede neural recorrente (RNN)
B
Rede neural convolucional (CNN)
C
Regressão linear simples sobre os pixels da imagem.
D
Árvore de decisão sobre os metadados das fotos.
Encontro 1  
1 / 20


---
## Página 3

G A B A R I T O    •    P E R G U N T A  1  D E  2 0    •    E N C O N T R O  1
A
Rede neural recorrente (RNN)
✓
Rede neural convolucional (CNN)
C
Regressão linear simples sobre os pixels da imagem.
D
Árvore de decisão sobre os metadados das fotos.
Por que B é a resposta correta
Redes neurais convolucionais (CNNs) são especificamente projetadas para extrair padrões espaciais em imagens (bordas, formas, texturas), sendo a arquitetura padrão 
para tarefas de visão computacional como classificação de imagens. RNNs (A) são para dados sequenciais como texto e séries temporais. Regressão linear (C) é simples 
demais para imagens. Árvore de decisão sobre metadados (D) ignora o conteúdo visual.
Encontro 1
1 / 20


---
## Página 4

S I M U L A D O    •    P E R G U N T A  2  D E  2 0    •    E N C O N T R O  1
Uma fabricante de robôs autônomos precisa treinar seu robô a navegar em armazéns evitando obstáculos. O robô 
NÃO possui rótulos prévios indicando o caminho correto, mas recebe RECOMPENSAS positivas ao concluir percursos 
e PENALIDADES ao colidir. Qual paradigma de aprendizado de máquina atende a esses requisitos?
A
Aprendizado supervisionado, com pares rotulados de entrada e saída.
B
Aprendizado não supervisionado, focado em agrupar dados sem rótulos.
C
Aprendizado por reforço (Reinforcement Learning)
D
Aprendizado por transferência (Transfer Learning) de um modelo pré-treinado.
Encontro 1
2 / 20


---
## Página 5

G A B A R I T O    •    P E R G U N T A  2  D E  2 0    •    E N C O N T R O  1
A
Aprendizado supervisionado, com pares rotulados de entrada e saída.
B
Aprendizado não supervisionado, focado em agrupar dados sem rótulos.
✓
Aprendizado por reforço (Reinforcement Learning)
D
Aprendizado por transferência (Transfer Learning) de um modelo pré-treinado.
Por que C é a resposta correta
O aprendizado por reforço é o paradigma em que um agente aprende a tomar decisões interagindo com um ambiente e recebendo RECOMPENSAS ou PENALIDADES. É 
o caso clássico de robôs, jogos e otimização de rotas. Supervisionado (A) exige rótulos. Não supervisionado (B) descobre padrões sem feedback. Transfer Learning (D) 
reaproveita modelos já treinados, mas não descreve o mecanismo de aprendizado por recompensa.
Encontro 1
2 / 20


---
## Página 6

S I M U L A D O    •    P E R G U N T A  3  D E  2 0    •    E N C O N T R O  2
Uma equipe está construindo um sistema de busca semântica que converte documentos em vetores de 1024 
dimensões (embeddings) e precisa encontrar os documentos MAIS SIMILARES a uma consulta. Qual métrica é a 
MAIS comumente usada para medir a similaridade entre dois embeddings?
A
Erro quadrático médio (MSE) entre os vetores.
B
Similaridade do cosseno (Cosine similarity) entre os vetores.
C
Acurácia entre os valores de cada dimensão.
D
Pontuação F1 entre os vetores comparados.
Encontro 2
3 / 20


---
## Página 7

G A B A R I T O    •    P E R G U N T A  3  D E  2 0    •    E N C O N T R O  2
A
Erro quadrático médio (MSE) entre os vetores.
✓
Similaridade do cosseno (Cosine similarity) entre os vetores.
C
Acurácia entre os valores de cada dimensão.
D
Pontuação F1 entre os vetores comparados.
Por que B é a resposta correta
A similaridade do cosseno mede o ângulo entre dois vetores e é a métrica padrão para comparar embeddings em busca semântica e RAG, pois captura proximidade 
direcional independentemente da magnitude. MSE (A) é para regressão. Acurácia (C) e F1 (D) são métricas de classificação, não de similaridade vetorial.
Encontro 2
3 / 20


---
## Página 8

S I M U L A D O    •    P E R G U N T A  4  D E  2 0
Uma empresa quer converter milhões de descrições TEXTUAIS de produtos em representações vetoriais 
(embeddings) para alimentar um sistema de busca semântica, usando um modelo gerenciado no Amazon Bedrock. 
Qual modelo é o MAIS adequado?
A
Amazon Titan Text Generation, para gerar descrições novas a partir de prompts.
B
Amazon Titan Embeddings, para gerar representações vetoriais de texto.
C
Stable Diffusion, para gerar imagens a partir de texto.
D
Amazon Nova Reel, para gerar vídeos a partir de texto.
Encontro 2
4 / 20


---
## Página 9

G A B A R I T O    •    P E R G U N T A  4  D E  2 0
A
Amazon Titan Text Generation, para gerar descrições novas a partir de prompts.
✓
Amazon Titan Embeddings, para gerar representações vetoriais de texto.
C
Stable Diffusion, para gerar imagens a partir de texto.
D
Amazon Nova Reel, para gerar vídeos a partir de texto.
Por que B é a resposta correta
Amazon Titan Embeddings é o modelo do Bedrock projetado para converter texto em vetores numéricos densos, base para busca semântica, RAG e clusterização. Titan 
Text Generation (A) gera texto novo, não embeddings. Stable Diffusion (C) gera imagens. Nova Reel (D) gera vídeos.
Encontro 2
4 / 20


---
## Página 10

S I M U L A D O    •    P E R G U N T A  5  D E  2 0    •    E N C O N T R O  3
Regressão vs Classificação
S E L E C I O N E  2
R E S P O S T A S
Uma equipe está iniciando vários projetos de ML e precisa identificar qual tipo de problema cada caso de uso 
representa. Selecione DUAS afirmações CORRETAS sobre a diferença entre regressão e classificação.
A
Prever o preço de venda de um imóvel em reais é um problema de REGRESSÃO.
B
Decidir se uma transação é fraudulenta ou legítima é um problema de REGRESSÃO.
C
Classificar um e-mail entre ‘spam’ ou ‘não spam’ é um problema de CLASSIFICAÇÃO BINÁRIA.
D
Regressão e classificação são sinônimos: ambos preveem categorias.
E
Agrupar clientes em segmentos não rotulados é um problema de CLASSIFICAÇÃO supervisionada.
Encontro 3  — Regressão vs Classificação
5 / 20


---
## Página 11

G A B A R I T O    •    P E R G U N T A  5  D E  2 0    •    E N C O N T R O  3
Regressão vs Classificação
S E L E C I O N E  2
R E S P O S T A S
✓
Prever o preço de venda de um imóvel em reais é um problema de REGRESSÃO.
B
Decidir se uma transação é fraudulenta ou legítima é um problema de REGRESSÃO.
✓
Classificar um e-mail entre ‘spam’ ou ‘não spam’ é um problema de CLASSIFICAÇÃO BINÁRIA.
D
Regressão e classificação são sinônimos: ambos preveem categorias.
E
Agrupar clientes em segmentos não rotulados é um problema de CLASSIFICAÇÃO supervisionada.
Por que A e C são as respostas corretas
Regressão prevê um VALOR NUMÉRICO CONTÍNUO (preço de imóvel - A) e classificação prevê uma CATEGORIA (spam/não-spam - C). Decidir fraude (B) é classificação
BINÁRIA, não regressão. Regressão e classificação NÃO são sinônimos (D): preveem coisas diferentes. Agrupar clientes não rotulados (E) é clustering NÃO 
SUPERVISIONADO, não classificação supervisionada.
Encontro 3  — Regressão vs Classificação
5 / 20


---
## Página 12

S I M U L A D O    •    P E R G U N T A  6  D E  2 0    •    E N C O N T R O  3
Uma equipe quer avaliar o desempenho de um modelo de classificação de forma ROBUSTA, mas dispõe de um 
conjunto de dados RELATIVAMENTE PEQUENO. A equipe deseja usar TODAS as amostras tanto para treino quanto 
para validação ao longo de várias iterações. Qual técnica é a MAIS adequada?
A
Treinar com todo o dataset sem separar dados de validação.
B
Validação cruzada k-fold (k-fold cross-validation).
C
Dividir 99% dos dados para treino e 1% para teste, em uma única divisão.
D
Treinar o modelo várias vezes com os mesmos dados de treino e teste.
Encontro 3
6 / 20


---
## Página 13

G A B A R I T O    •    P E R G U N T A  6  D E  2 0    •    E N C O N T R O  3
A
Treinar com todo o dataset sem separar dados de validação.
✓
Validação cruzada k-fold (k-fold cross-validation).
C
Dividir 99% dos dados para treino e 1% para teste, em uma única divisão.
D
Treinar o modelo várias vezes com os mesmos dados de treino e teste.
Por que B é a resposta correta
A validação cruzada k-fold divide o dataset em K partes (folds), treina em K-1 e valida em 1, rotacionando as partes. Cada amostra é usada para treino e validação em 
diferentes rodadas, dando uma estimativa robusta com poucos dados. Treinar sem validar (A) impede medir generalização. 99%/1% (C) gera estimativa instável. Repetir 
com o mesmo split (D) não acrescenta robustez.
Encontro 3
6 / 20


---
## Página 14

S I M U L A D O    •    P E R G U N T A  7  D E  2 0    •    E N C O N T R O  4
Uma startup desenvolveu um modelo de ML que recebe TRÁFEGO INTERMITENTE e IMPREVISÍVEL, com longos 
períodos de inatividade entre rajadas curtas de requisições. A startup quer evitar pagar por instâncias provisionadas 
durante a ociosidade. Qual opção de inferência do Amazon SageMaker é a MAIS adequada?
A
Inferência em tempo real (Real-time inference) com instâncias provisionadas 24/7.
B
Inferência sem servidor (Serverless inference)
C
Transformação em lote (Batch transform) sob demanda manual.
D
Inferência assíncrona (Asynchronous inference) para payloads de 1 GB.
Encontro 4
7 / 20


---
## Página 15

G A B A R I T O    •    P E R G U N T A  7  D E  2 0    •    E N C O N T R O  4
A
Inferência em tempo real (Real-time inference) com instâncias provisionadas 24/7.
✓
Inferência sem servidor (Serverless inference)
C
Transformação em lote (Batch transform) sob demanda manual.
D
Inferência assíncrona (Asynchronous inference) para payloads de 1 GB.
Por que B é a resposta correta
SageMaker Serverless Inference escala automaticamente do zero conforme a demanda e cobra apenas pelo tempo efetivo de execução, ideal para tráfego intermitente 
e imprevisível. Real-time provisionada (A) gera custo ocioso. Batch (C) é para grandes volumes sem necessidade de latência. Asynchronous (D) é otimizada para 
payloads grandes (até 1 GB) e tempos longos, não para tráfego esporádico de baixa latência.
Encontro 4
7 / 20


---
## Página 16

S I M U L A D O    •    P E R G U N T A  8  D E  2 0
Uma empresa observa que seu endpoint do Amazon SageMaker para inferência em tempo real sofre PICOS DE 
LATÊNCIA durante horários comerciais, mas fica OCIOSO à noite. Qual recurso a empresa pode habilitar para ajustar 
AUTOMATICAMENTE a capacidade conforme a demanda real?
A
Habilitar Auto Scaling no endpoint do SageMaker.
B
Aumentar permanentemente o número de instâncias para o pico máximo.
C
Reduzir a temperatura do modelo durante a noite.
D
Reiniciar manualmente o endpoint a cada hora.
Encontro 4
8 / 20


---
## Página 17

G A B A R I T O    •    P E R G U N T A  8  D E  2 0
✓
Habilitar Auto Scaling no endpoint do SageMaker.
B
Aumentar permanentemente o número de instâncias para o pico máximo.
C
Reduzir a temperatura do modelo durante a noite.
D
Reiniciar manualmente o endpoint a cada hora.
Por que A é a resposta correta
Auto Scaling em endpoints do SageMaker adiciona ou remove instâncias automaticamente com base em métricas como invocações por minuto ou utilização de CPU, 
mantendo latência aceitável e reduzindo custo em horários de baixa demanda. Aumentar permanentemente (B) desperdiça recursos à noite. Temperatura (C) não tem 
relação com capacidade. Reinício manual (D) não atende automação.
Encontro 4
8 / 20


---
## Página 18

S I M U L A D O    •    P E R G U N T A  9  D E  2 0    •    E N C O N T R O  5
Um hospital usa um modelo de ML para identificar pacientes com RISCO DE CÂNCER. A equipe médica considera 
MUITO MAIS GRAVE deixar de detectar um paciente doente (falso negativo) do que classificar um paciente saudável 
como suspeito (falso positivo). Qual métrica a equipe deve PRIORIZAR ao avaliar o modelo?
A
Acurácia (Accuracy), pois é a métrica mais simples.
B
Precisão (Precision), pois minimiza falsos positivos.
C
Recall (Revocação), pois minimiza falsos negativos.
D
Tempo médio de resposta (Latency).
Encontro 5
9 / 20


---
## Página 19

G A B A R I T O    •    P E R G U N T A  9  D E  2 0    •    E N C O N T R O  5
A
Acurácia (Accuracy), pois é a métrica mais simples.
B
Precisão (Precision), pois minimiza falsos positivos.
✓
Recall (Revocação), pois minimiza falsos negativos.
D
Tempo médio de resposta (Latency).
Por que C é a resposta correta
Recall mede a proporção de positivos REAIS que o modelo captou, sendo a métrica a priorizar quando falsos negativos são mais custosos, como em diagnóstico de 
doenças. Acurácia (A) pode enganar em datasets desbalanceados. Precision (B) minimiza falsos positivos, mas o cenário pede o oposto. Latência (D) é métrica
operacional, não de qualidade preditiva.
Encontro 5
9 / 20


---
## Página 20

S I M U L A D O    •    P E R G U N T A  1 0  D E  2 0    •    E N C O N T R O  5
Uma instituição financeira precisa explicar previsões INDIVIDUAIS de seu modelo de aprovação de crédito para 
clientes específicos que tiveram pedidos negados. A empresa quer uma técnica que explique cada predição de 
forma LOCAL e seja AGNÓSTICA AO MODELO. Qual técnica é a MAIS adequada?
A
Aumentar o número de épocas durante o treinamento.
B
LIME (Local Interpretable Model-agnostic Explanations).
C
Reduzir o tamanho do dataset de treinamento.
D
Aumentar o parâmetro de temperatura do modelo.
Encontro 5 
10 / 20


---
## Página 21

G A B A R I T O    •    P E R G U N T A  1 0  D E  2 0    •    E N C O N T R O  5
A
Aumentar o número de épocas durante o treinamento.
✓
LIME (Local Interpretable Model-agnostic Explanations).
C
Reduzir o tamanho do dataset de treinamento.
D
Aumentar o parâmetro de temperatura do modelo.
Por que B é a resposta correta
LIME é uma técnica de explicabilidade LOCAL e AGNÓSTICA ao modelo: aproxima o comportamento do modelo na vizinhança de uma predição específica com um 
modelo simples e interpretável, indicando quais atributos pesaram naquela decisão individual. Aumentar épocas (A) afeta treino, não explicabilidade. Reduzir dataset 
(C) prejudica o modelo. Temperatura (D) só se aplica a LLMs.
Encontro 5
10 / 20


---
## Página 22

S I M U L A D O    •    P E R G U N T A  1 1  D E  2 0    •    E N C O N T R O  6
Uma equipe está ajustando os parâmetros de inferência de um LLM no Amazon Bedrock e quer controlar a 
DIVERSIDADE da saída limitando o conjunto de tokens candidatos àqueles cuja probabilidade ACUMULADA atinge 
um determinado valor (por exemplo, 0,9). Qual parâmetro de inferência atende a esse requisito?
A
Temperature, que controla a aleatoriedade da distribuição.
B
Top-p (nucleus sampling), que limita o sorteio aos tokens cuja probabilidade acumulada atinge o valor configurado.
C
Maximum tokens, que limita o tamanho da resposta gerada.
D
Stop sequences, que indicam quando o modelo deve parar de gerar.
Encontro 6
11 / 20


---
## Página 23

G A B A R I T O    •    P E R G U N T A  1 1  D E  2 0    •    E N C O N T R O  6
A
Temperature, que controla a aleatoriedade da distribuição.
✓
Top-p (nucleus sampling), que limita o sorteio aos tokens cuja probabilidade acumulada atinge o valor configurado.
C
Maximum tokens, que limita o tamanho da resposta gerada.
D
Stop sequences, que indicam quando o modelo deve parar de gerar.
Por que B é a resposta correta
Top-p (nucleus sampling) é o parâmetro que limita o sorteio do próximo token ao menor conjunto de tokens cuja probabilidade ACUMULADA atinge o valor configurado 
(ex.: 0,9 = só os tokens que juntos somam 90% da massa de probabilidade). Temperature (A) afeta a forma da distribuição. Maximum tokens (C) define tamanho da 
resposta. Stop sequences (D) interrompem a geração em strings específicas.
Encontro 6
11 / 20


---
## Página 24

S I M U L A D O    •    P E R G U N T A  1 2  D E  2 0    •    E N C O N T R O  6
Uma empresa tem vários times que consomem o mesmo LLM no Amazon Bedrock para tarefas distintas (resumo, 
classificação, tradução). A empresa quer PADRONIZAR a estrutura dos prompts, REUTILIZAR templates entre times e 
GERENCIAR versões dos prompts de forma centralizada. Qual recurso do Amazon Bedrock atende a esses 
requisitos?
A
Amazon Bedrock Knowledge Bases, para implementar RAG sobre dados privados.
B
Amazon Bedrock Agents, para orquestrar chamadas a APIs.
C
Amazon Bedrock Prompt Management, para criar, versionar e compartilhar prompts.
D
Amazon Bedrock Guardrails, para filtrar conteúdo sensível.
Encontro 6
12 / 20


---
## Página 25

G A B A R I T O    •    P E R G U N T A  1 2  D E  2 0    •    E N C O N T R O  6
A
Amazon Bedrock Knowledge Bases, para implementar RAG sobre dados privados.
B
Amazon Bedrock Agents, para orquestrar chamadas a APIs.
✓
Amazon Bedrock Prompt Management, para criar, versionar e compartilhar prompts.
D
Amazon Bedrock Guardrails, para filtrar conteúdo sensível.
Por que C é a resposta correta
Bedrock Prompt Management é o recurso voltado à criação, versionamento e compartilhamento de prompts entre times, permitindo padronizar e iterar templates sem 
espalhar prompts pelo código. Knowledge Bases (A) implementa RAG. Agents (B) orquestra ferramentas. Guardrails (D) filtra conteúdo, não gerencia prompts.
Encontro 6
12 / 20


---
## Página 26

S I M U L A D O    •    P E R G U N T A  1 3  D E  2 0    •    E N C O N T R O  7
Uma rede de varejo quer detectar atividades atípicas em VÍDEOS de câmeras de segurança de suas lojas em tempo 
quase real, identificando pessoas, objetos e movimentos suspeitos sem treinar um modelo do zero. Qual serviço da 
AWS é o MAIS adequado?
A
Amazon Rekognition Video, que analisa pessoas, objetos e atividades em fluxos de vídeo.
B
Amazon Polly, que converte texto em voz.
C
Amazon Comprehend Medical, que analisa textos clínicos.
D
Amazon Translate, que traduz texto entre idiomas.
Encontro 7
13 / 20


---
## Página 27

G A B A R I T O    •    P E R G U N T A  1 3  D E  2 0    •    E N C O N T R O  7
✓
Amazon Rekognition Video, que analisa pessoas, objetos e atividades em fluxos de vídeo.
B
Amazon Polly, que converte texto em voz.
C
Amazon Comprehend Medical, que analisa textos clínicos.
D
Amazon Translate, que traduz texto entre idiomas.
Por que A é a resposta correta
Amazon Rekognition Video é o serviço gerenciado para análise de vídeos: detecta pessoas, objetos, atividades, rostos e conteúdo impróprio em fluxos armazenados ou 
em tempo quase real, sem necessidade de treinar modelos. Polly (B) é text-to-speech. Comprehend Medical (C) é para textos clínicos. Translate (D) é tradução de texto.
Encontro 7
13 / 20


---
## Página 28

S I M U L A D O    •    P E R G U N T A  1 4  D E  2 0    •    E N C O N T R O  7
S E L E C I O N E  2
R E S P O S T A S
Uma aplicação de IA hospedada em uma instância Amazon EC2 precisa acessar dados em um bucket Amazon S3 
para inferência. Selecione DUAS práticas RECOMENDADAS pela AWS para conceder essas permissões de forma 
SEGURA.
A
Atribuir uma IAM Role à instância EC2 com permissões mínimas necessárias para acessar o bucket S3.
B
Embutir Access Key e Secret Key permanentes diretamente no código-fonte da aplicação.
C
Aplicar o princípio do MENOR PRIVILÉGIO, concedendo apenas as ações S3 estritamente necessárias.
D
Compartilhar a credencial root da conta AWS com a aplicação para simplificar o acesso.
E
Permitir acesso público anônimo ao bucket S3 para evitar a necessidade de credenciais.
Encontro 7
14 / 20


---
## Página 29

G A B A R I T O    •    P E R G U N T A  1 4  D E  2 0    •    E N C O N T R O  7
S E L E C I O N E  2
R E S P O S T A S
✓
Atribuir uma IAM Role à instância EC2 com permissões mínimas necessárias para acessar o bucket S3.
B
Embutir Access Key e Secret Key permanentes diretamente no código-fonte da aplicação.
✓
Aplicar o princípio do MENOR PRIVILÉGIO, concedendo apenas as ações S3 estritamente necessárias.
D
Compartilhar a credencial root da conta AWS com a aplicação para simplificar o acesso.
E
Permitir acesso público anônimo ao bucket S3 para evitar a necessidade de credenciais.
Por que A e C são as respostas corretas
As duas práticas recomendadas são: atribuir uma IAM Role à EC2 (A), que entrega credenciais TEMPORÁRIAS automaticamente sem chaves estáticas, e aplicar o 
princípio do MENOR PRIVILÉGIO (C), concedendo apenas as ações necessárias. As demais são antipadrões: B vaza credenciais em código; D viola separação de 
responsabilidades e expõe a conta inteira; E expõe os dados publicamente.
Encontro 7
14 / 20


---
## Página 30

S I M U L A D O    •    P E R G U N T A  1 5  D E  2 0    •    E N C O N T R O  8
Uma empresa quer classificar tickets de suporte interno em categorias ESPECÍFICAS do negócio (por exemplo, 
‘problema de rede’, ‘bug de software’, ‘pedido de feature’) que NÃO estão disponíveis nas categorias padrão do 
serviço de NLP. A empresa não tem time de ciência de dados. Qual serviço atende a esses requisitos?
A
Amazon Comprehend Custom Classification, treinando um classificador customizado com exemplos rotulados.
B
Amazon Polly com vozes neurais.
C
Amazon Translate em modo batch.
D
Amazon Rekognition Custom Labels.
Encontro 8
15 / 20


---
## Página 31

G A B A R I T O    •    P E R G U N T A  1 5  D E  2 0    •    E N C O N T R O  8
✓
Amazon Comprehend Custom Classification, treinando um classificador customizado com exemplos rotulados.
B
Amazon Polly com vozes neurais.
C
Amazon Translate em modo batch.
D
Amazon Rekognition Custom Labels.
Por que A é a resposta correta
Amazon Comprehend Custom Classification permite treinar um classificador de texto customizado para categorias específicas do negócio, fornecendo apenas exemplos
rotulados, sem necessidade de expertise em ML. Polly (B) é texto→voz. Translate (C) traduz idiomas. Rekognition Custom Labels (D) é para imagens, não para texto.
Encontro 8
15 / 20


---
## Página 32

S I M U L A D O    •    P E R G U N T A  1 6  D E  2 0    •    E N C O N T R O  8
Um podcast quer gerar transcrições automáticas de seus episódios DISTINGUINDO o que cada participante 
(apresentador e convidados) disse, com rótulos por falante (‘Speaker 0’, ‘Speaker 1’, etc.). Qual recurso da AWS 
atende a esse requisito?
A
Amazon Translate, em modo batch.
B
Amazon Transcribe com identificação de falantes (Speaker Identification / Diarization).
C
Amazon Polly com SSML para múltiplas vozes.
D
Amazon Comprehend, com análise de sentimento por sentença.
Encontro 8
16 / 20


---
## Página 33

G A B A R I T O    •    P E R G U N T A  1 6  D E  2 0    •    E N C O N T R O  8
A
Amazon Translate, em modo batch.
✓
Amazon Transcribe com identificação de falantes (Speaker Identification / Diarization).
C
Amazon Polly com SSML para múltiplas vozes.
D
Amazon Comprehend, com análise de sentimento por sentença.
Por que B é a resposta correta
Amazon Transcribe oferece identificação de falantes (speaker diarization), que segmenta a transcrição rotulando cada trecho com o falante correspondente, ideal para 
podcasts, reuniões e atendimentos. Translate (A) traduz idiomas. Polly (C) é texto→voz. Comprehend (D) faz análise de texto, não diariza áudio.
Encontro 8
16 / 20


---
## Página 34

S I M U L A D O    •    P E R G U N T A  1 7  D E  2 0    •    E N C O N T R O  9
Uma empresa de telecomunicações quer construir um sistema de URA inteligente que entenda PERGUNTAS em 
linguagem natural por voz e texto, ofereça INTENÇÕES pré-definidas (consulta de saldo, pagamento, suporte) e 
integre-se ao backend via AWS Lambda. Qual serviço da AWS é o MAIS adequado?
A
Amazon Polly, para converter texto em voz natural.
B
Amazon Lex, para construir chatbots conversacionais com intenções e slots.
C
Amazon Transcribe, para converter fala em texto.
D
Amazon Comprehend, para extrair sentimento de textos.
Encontro 9
17 / 20


---
## Página 35

G A B A R I T O    •    P E R G U N T A  1 7  D E  2 0    •    E N C O N T R O  9
A
Amazon Polly, para converter texto em voz natural.
✓
Amazon Lex, para construir chatbots conversacionais com intenções e slots.
C
Amazon Transcribe, para converter fala em texto.
D
Amazon Comprehend, para extrair sentimento de textos.
Por que B é a resposta correta
Amazon Lex é o serviço para construir interfaces conversacionais (chatbots de voz e texto) usando intenções, slots e prompts, com integração nativa ao Lambda para 
executar lógica de backend. É a base por trás da Alexa. Polly (A), Transcribe (C) e Comprehend (D) cobrem partes do pipeline, mas não orquestram o chatbot completo.
Encontro 9
17 / 20


---
## Página 36

S I M U L A D O    •    P E R G U N T A  1 8  D E  2 0    •    E N C O N T R O  9
Uma plataforma de e-commerce quer mostrar aos usuários produtos SEMELHANTES a um item que estão 
visualizando no momento (por exemplo, ‘outras camisetas semelhantes a esta’). Qual receita (recipe) do Amazon 
Personalize é a MAIS adequada para esse caso de uso item-a-item?
A
USER_PERSONALIZATION, para recomendações personalizadas baseadas no usuário.
B
SIMS (item-to-item similarity), para recomendar itens similares a um item.
C
PERSONALIZED_RANKING, para reordenar uma lista existente para o usuário.
D
FORECAST, para previsão de séries temporais.
Encontro 9
18 / 20


---
## Página 37

G A B A R I T O    •    P E R G U N T A  1 8  D E  2 0    •    E N C O N T R O  9
A
USER_PERSONALIZATION, para recomendações personalizadas baseadas no usuário.
✓
SIMS (item-to-item similarity), para recomendar itens similares a um item.
C
PERSONALIZED_RANKING, para reordenar uma lista existente para o usuário.
D
FORECAST, para previsão de séries temporais.
Por que B é a resposta correta
SIMS (Similar Items) é a receita do Amazon Personalize para recomendações ITEM-A-ITEM: dado um item de referência, retorna itens semelhantes com base no 
comportamento agregado dos usuários. USER_PERSONALIZATION (A) personaliza por usuário, não por item. PERSONALIZED_RANKING (C) reordena listas. FORECAST (D) 
é previsão temporal, fora do escopo de recomendação por similaridade.
Encontro 9
18 / 20


---
## Página 38

S I M U L A D O    •    P E R G U N T A  1 9  D E  2 0    •    E N C O N T R O  1 0
Uma equipe de CIENTISTAS DE DADOS quer um ambiente integrado baseado em WEB para desenvolver, treinar, 
depurar e implantar modelos de ML, com notebooks colaborativos, debugger visual e gestão de experimentos. Qual 
recurso é o MAIS adequado?
A
Amazon SageMaker Canvas, interface visual no-code para analistas de negócio.
B
Amazon SageMaker Studio, IDE web completa para cientistas de dados.
C
AWS DeepRacer, ambiente de aprendizado por reforço gamificado.
D
Amazon Rekognition, serviço pré-treinado de visão computacional.
Encontro 10
19 / 20


---
## Página 39

G A B A R I T O    •    P E R G U N T A  1 9  D E  2 0    •    E N C O N T R O  1 0
A
Amazon SageMaker Canvas, interface visual no-code para analistas de negócio.
✓
Amazon SageMaker Studio, IDE web completa para cientistas de dados.
C
AWS DeepRacer, ambiente de aprendizado por reforço gamificado.
D
Amazon Rekognition, serviço pré-treinado de visão computacional.
Por que B é a resposta correta
Amazon SageMaker Studio é a IDE web unificada do SageMaker voltada a cientistas de dados, com notebooks Jupyter colaborativos, debugger visual, profiler, 
gerenciamento de experimentos, pipelines e endpoints, tudo na mesma interface. Canvas (A) é no-code para analistas de negócio. DeepRacer (C) é gamificado e 
educacional. Rekognition (D) é serviço de visão pré-treinado, não IDE.
Encontro 10
19 / 20


---
## Página 40

S I M U L A D O    •    P E R G U N T A  2 0  D E  2 0    •    E N C O N T R O  1 1
S E L E C I O N E  2
R E S P O S T A S
Uma empresa quer implementar MLOps maduro para garantir QUALIDADE e REPRODUTIBILIDADE de seus modelos 
de ML em produção ao longo do tempo. Selecione DUAS práticas FUNDAMENTAIS para alcançar esse objetivo.
A
VERSIONAR dados, modelos e código de forma integrada, permitindo reproduzir qualquer experimento.
B
Implantar modelos manualmente em produção, sem pipelines automatizados, para garantir controle individual.
C
MONITORAR continuamente drift, qualidade e custo do modelo em produção, disparando ações quando necessário.
D
Eliminar a etapa de avaliação automática, confiando apenas na inspeção humana após o deploy.
E
Reduzir registros e logs para diminuir custo de armazenamento e simplificar auditorias.
Encontro 11
20 / 20


---
## Página 41

G A B A R I T O    •    P E R G U N T A  2 0  D E  2 0    •    E N C O N T R O  1 1
S E L E C I O N E  2
R E S P O S T A S
✓
VERSIONAR dados, modelos e código de forma integrada, permitindo reproduzir qualquer experimento.
B
Implantar modelos manualmente em produção, sem pipelines automatizados, para garantir controle individual.
✓
MONITORAR continuamente drift, qualidade e custo do modelo em produção, disparando ações quando necessário.
D
Eliminar a etapa de avaliação automática, confiando apenas na inspeção humana após o deploy.
E
Reduzir registros e logs para diminuir custo de armazenamento e simplificar auditorias.
Por que A e C são as respostas corretas
MLOps maduro exige: VERSIONAMENTO integrado de dados, modelo e código (A), sem isso, é impossível reproduzirexperimentos ou auditar decisões; e 
MONITORAMENTO contínuo em produção ©, sem isso, modelos degradam silenciosamente. As demais são antipadrões: deploys manuais (B) introduzem erros e 
atrasam; pular avaliação automática (D) deixa passar regressões; reduzir logs (E) inviabiliza auditoria e diagnóstico de incidentes.
Encontro 11
20 / 20


---
## Página 42

Fim do Simulado
Bons estudos para a AWS Certified AI Practitioner (AIF-C01)
20
Questões respondidas
11
Encontros revisados (1 a 11)
Revise os pontos errados antes da próxima aula
