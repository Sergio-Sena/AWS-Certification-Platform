# Encontro 7.pdf

*Convertido automaticamente de PDF*


---
## Página 1

Inteligência Artificial na AWS
Da teoria aos serviços: GANs, Visão Computacional,
NLP e o pilar do acesso seguro


---
## Página 2

V I S Ã O  G E R A L  D A  A U L A
Agenda
Visão geral
2 / 39
01
Sub-campos da Inteligência Artificial
ML, Deep Learning, Visão, NLP e Robótica.
02
GAN — Generative Adversarial 
Network
Duas redes competem para criar conteúdo realista.
03
Visão Computacional
Como máquinas aprendem a ver imagens.
05
Distribuição de credenciais na AWS
Acesso seguro vem antes do nome do serviço.
04
Amazon Rekognition
Visão Computacional pronta para usar na AWS.
06
Amazon Rekognition Custom Labels
Modelos treinados com seus próprios dados.


---
## Página 3

M Ó D U L O
01
Sub-campos da Inteligência 
Artificial
A IA reúne disciplinas diferentes, cada uma resolvendo classes 
específicas de problemas.


---
## Página 4

M Ó D U L O  1
•
S U B - C A M P O S  D E  I A
A Inteligência Artificial não é uma área única
Módulo 1 — ONDE A IA AGREGA VALOR
4 / 34
Aprendizado de Máquina
Modelos que aprendem padrões a partir 
de dados
Aprendizado Profundo
Redes neurais com múltiplas camadas
Visão Computacional
Interpretação automática de imagens e 
vídeos
NLP
Compreensão e geração de linguagem 
humana
Robótica
Sistemas físicos que percebem e agem
Sistemas Especialistas
Conhecimento estruturado em regras


---
## Página 5

M Ó D U L O  1
•
S U B - C A M P O S  D E  I A
Como os sub-campos se relacionam
Módulo 1 — ONDE A IA AGREGA VALOR
5 / 34
Inteligência Artificial
Aprendizado de Máquina
Aprendizado Profundo
GANs · Visão · NLP
A relação entre os campos
■
IA é o conceito mais amplo
■
ML é um subconjunto da IA
■
Deep Learning é um subconjunto do ML
■
GANs, NLP e Visão Computacional usam 
Deep Learning como base


---
## Página 6

M Ó D U L O
02
GAN — Generative 
Adversarial Network
Duas redes competem para criar conteúdo realista.


---
## Página 7

M Ó D U L O  2
•
G e n e r a t i v e  A d v e r s a r i a l  N e t w o r k
O que é uma GAN
Módulo 2 — GAN
7 / 34
Definição
▪
Rede neural composta por duas redes que competem entre si
▪
Uma rede gera dados chamada de Gerador
▪
Outra rede julga se o dado é real ou falso chamada de Discriminador
▪
A competição produz resultados cada vez mais realistas
▪
É uma técnica de aprendizado profundo voltada à geração de conteúdo


---
## Página 8

M Ó D U L O  2
•
G e n e r a t i v e  A d v e r s a r i a l  N e t w o r k
A arquitetura de uma GAN
Módulo 2 — GAN
8 / 34
Gerador
■
Cria dados sintéticos a partir de ruído 
aleatório
■
Tenta se aproximar dos dados reais
■
Aprende com cada erro identificado pelo 
Discriminador
■
Seu objetivo é enganar o Discriminador
Discriminador
■
Recebe dados reais e dados gerados
■
Aprende a distinguir o verdadeiro do falso
■
Devolve uma pontuação de autenticidade
■
Seu objetivo é não ser enganado
A competição entre as duas redes é o que faz o sistema evoluir.


---
## Página 9

M Ó D U L O  2
•
G e n e r a t i v e  A d v e r s a r i a l  N e t w o r k
Aplicações práticas das GANs
Módulo 2 — GAN
9 / 34
Definição
▪
Geração de imagens realistas de pessoas, paisagens e produtos
▪
Aumento de dados (data augmentation) para treinar outros modelos
▪
Restauração e melhoria de qualidade de imagens
▪
Criação de conteúdo sintético para simulação e testes
▪
Apoio à pesquisa em áreas onde dados reais são escassos


---
## Página 10

M Ó D U L O
03
Visão Computacional
Como máquinas aprendem a ver imagens.


---
## Página 11

M Ó D U L O  3
•
V I S Ã O  C O M P U T A C I O N A L
O que é Visão Computacional
Módulo 1 — VISÃO COMPUTACIONAL
11 / 34
Definição
▪
Subárea da IA dedicada à interpretação de imagens e vídeos
▪
Permite que máquinas "vejam" e compreendam o conteúdo visual
▪
Combina técnicas de Deep Learning com processamento de imagens
▪
Transforma pixels em informação útil para decisões
▪
É a base de muitos serviços de IA modernos, inclusive na nuvem


---
## Página 12

M Ó D U L O  3
•
V I S Ã O  C O M P U T A C I O N A L
Principais tarefas da Visão Computacional
Módulo 1 — VISÃO COMPUTACIONAL
12 / 34
1
Classificação
Identificar a categoria principal de uma 
imagem
2
Detecção de objetos
Localizar e rotular objetos dentro da 
imagem
3
Reconhecimento facial
Identificar e comparar rostos
4
Segmentação
Delimitar regiões pixel a pixel
5
Análise de cenas
Compreender contexto e atividades
6
Reconhecimento de 
texto
Ler texto presente em imagens


---
## Página 13

M Ó D U L O  3
•
V I S Ã O  C O M P U T A C I O N A L
Onde a Visão Computacional é aplicada
Módulo 1 — VISÃO COMPUTACIONAL
13 / 34
Definição
▪
Segurança e monitoramento de ambientes
▪
Veículos autônomos e sistemas de assistência ao motorista
▪
Saúde apoio a diagnóstico por imagem
▪
Indústria controle de qualidade na linha de produção
▪
Varejo análise de comportamento e prateleiras inteligentes
▪
Setor público monitoramento urbano e mobilidade


---
## Página 14

M Ó D U L O
04
Amazon Rekognition
Visão Computacional pronta para usar na AWS.


---
## Página 15

M Ó D U L O  4
•
A m a z o n  R e k o g n i t i o n
Amazon Rekognition
Módulo 4 — Amazon Rekognition
15 / 34
Definição
▪
Serviço gerenciado de Visão Computacional na AWS
▪
Análise pronta para uso, sem necessidade de treinar modelos
▪
Acessível via API, integrável a aplicações
▪
Baseado em modelos de Deep Learning treinados pela AWS
▪
Reduz a barreira de entrada para times sem especialistas em IA


---
## Página 16

M Ó D U L O  4
•
A m a z o n  R e k o g n i t i o n
O que o Rekognition entrega
Módulo 4 — Amazon Rekognition
16 / 34
Definição
▪
Detecção de objetos, cenas e atividades
▪
Reconhecimento e comparação facial
▪
Análise de emoções e atributos faciais
▪
Detecção de conteúdo impróprio
▪
Reconhecimento de texto em imagens
▪
Análise de vídeos e linhas do tempo de eventos


---
## Página 17

M Ó D U L O  4
•
A m a z o n  R e k o g n i t i o n
Casos de uso do Rekognition
Módulo 4 — Amazon Rekognition
17 / 34
Definição
▪
Verificação de identidade em processos de onboarding
▪
Moderação automática de conteúdo em plataformas digitais
▪
Indexação de bibliotecas de imagens e vídeos
▪
Análise de tráfego e ambientes urbanos
▪
Apoio a sistemas de segurança pública e privada
▪
Personalização de experiências baseadas em conteúdo visual


---
## Página 18

M Ó D U L O
05
Distribuição de 
credenciais na AWS
O conceito de acesso seguro vem antes do nome do serviço.


---
## Página 19

M Ó D U L O  5
•
D i s t r i b u i ç ã o  d e  c r e d e n c i a i s  n a  A W S
Acesso seguro: a base da segurança na AWS
Módulo 5 — Distribuição de credenciais na AWS
19 / 34
Definição
▪
Antes de usar qualquer serviço de IA, é preciso autenticar-se
▪
Credenciais mal distribuídas comprometem todo o ambiente
▪
Segurança começa pelo controle de quem acessa o quê
▪
Arquitetar bem o acesso é proteger dados, modelos e custos


---
## Página 20

M Ó D U L O  5
•
D i s t r i b u i ç ã o  d e  c r e d e n c i a i s  n a  A W S
Princípios para distribuir credenciais
Módulo 5 — Distribuição de credenciais na AWS
20 / 34
Menor privilégio
Conceder apenas o necessário para a tarefa
Credenciais temporárias
Preferíveis a chaves permanentes
Separação de responsabilidades
Perfis distintos para funções distintas
Rastreabilidade
Registrar e auditar cada acesso
Rotação periódica
Trocar chaves e segredos regularmente
Revogação rápida
Capacidade de cortar acesso imediatamente


---
## Página 21

M Ó D U L O  5
•
D i s t r i b u i ç ã o  d e  c r e d e n c i a i s  n a  A W S
Boas práticas na distribuição de credenciais
Módulo 5 — Distribuição de credenciais na AWS
21 / 34
Definição
▪
Evitar credenciais embarcadas em código-fonte
▪
Usar funções e papéis em vez de chaves estáticas
▪
Centralizar a gestão de identidade em um diretório único
▪
Aplicar autenticação multifator (MFA) sempre que possível
▪
Monitorar uso anômalo de credenciais continuamente
▪
Documentar e revisar políticas de acesso periodicamente


---
## Página 22

M Ó D U L O
06
Amazon Rekognition 
Custom Labels
Modelos treinados com seus próprios dados.


---
## Página 23

M Ó D U L O  6
•
A m a z o n  R e k o g n i t i o n  C u s t o m  L a b e l s
Amazon Rekognition Custom Labels
Módulo 6 — Amazon Rekognition Custom Labels
23 / 34
Definição
■Extensão do Rekognition para casos específicos do seu domínio
■Permite treinar modelos customizados com seus próprios dados
■Indicado quando o modelo padrão não reconhece o que você precisa
■Mantém a abstração de serviço gerenciado pela AWS
■Une personalização e simplicidade operacional


---
## Página 24

M Ó D U L O  6
•
A m a z o n  R e k o g n i t i o n  C u s t o m  L a b e l s
Quando usar Custom Labels
Módulo 6 — Amazon Rekognition Custom Labels
24 / 34
Definição
■Identificação de produtos específicos da sua marca
■Reconhecimento de peças industriais e equipamentos próprios
■Detecção de defeitos em linhas de produção
■Classificação de imagens com categorias particulares ao negócio
■Cenários onde o vocabulário visual do domínio é único


---
## Página 25

M Ó D U L O  6
•
A m a z o n  R e k o g n i t i o n  C u s t o m  L a b e l s
Fluxo de uso do Custom Labels
Módulo 6 — Amazon Rekognition Custom Labels
25 / 34
1
Coletar
Reunir imagens 
representativas do 
problema
2
Rotular
Marcar exemplos com as 
labels desejadas
3
Treinar
Treinar o modelo no 
ambiente da AWS
4
Avaliar
Analisar a qualidade e os 
erros do modelo
5
Publicar
Disponibilizar para 
consumo via API
Um ciclo iterativo: avaliar e re-treinar até atingir a qualidade desejada.


---
## Página 26

M Ó D U L O
07
NLP — PROCESSAMENTO 
DE LINGUAGEM NATURAL
Quando a máquina entende a linguagem humana.


---
## Página 27

M Ó D U L O  7
•
P R O C E S S A M E N T O  D E  L I N G U A G E M  N A T U R A L
O que é NLP
Módulo 7 — NLP
27 / 34
Definição
■Subárea da IA que lida com a linguagem humana
■Permite que máquinas leiam, interpretem e gerem texto
■Combina linguística, estatística e Deep Learning
■É a base de chatbots, traduções e buscas semânticas
■Trabalha tanto com texto escrito quanto com fala transcrita


---
## Página 28

M Ó D U L O  7
•
P R O C E S S A M E N T O  D E  L I N G U A G E M  N A T U R A L
Principais tarefas de NLP
Módulo 7 — NLP
28 / 34
Tradução automática
Conversão entre idiomas
Reconhecimento de 
entidades
Identificação de nomes, lugares, datas
Resumo de textos
Síntese automática de documentos
Classificação de documentos
Categorização de conteúdos
Geração de texto
Produção de respostas e conteúdos
Análise de sentimento
Polaridade da opinião expressa


---
## Página 29

M Ó D U L O  7
•
P R O C E S S A M E N T O  D E  L I N G U A G E M  N A T U R A L
Aplicações do NLP no mercado
Módulo 7 — NLP
29 / 34
Definição
■Atendimento automatizado e chatbots
■Análise de pesquisas e feedbacks de clientes
■Monitoramento de redes sociais e reputação
■Triagem de documentos jurídicos e médicos
■Buscas inteligentes em bases de conhecimento internas
■Apoio à acessibilidade leitura e síntese de textos


---
## Página 30

M Ó D U L O
08
Análise de Sentimento
Transformando opiniões em dados acionáveis.


---
## Página 31

M Ó D U L O  8
•
A n á l i s e  d e  S e n t i m e n t o
O que é Análise de Sentimento
Módulo 8 — Análise de Sentimento
31 / 34
Definição
■Tarefa de NLP que classifica a polaridade de um texto
■Identifica se a opinião é positiva, negativa ou neutra
■Pode também detectar emoções específicas
■Funciona em comentários, avaliações, mensagens e notícias
■Permite transformar texto livre em dado estruturado


---
## Página 32

M Ó D U L O  8
•
A n á l i s e  d e  S e n t i m e n t o
Como funciona a Análise de Sentimento
Módulo 8 — Análise de Sentimento
32 / 34
1
Pré-processamento
Limpeza e tokenização do 
texto
2
Classificação
Modelo treinado avalia cada 
trecho
3
Saída
Polaridade e nível de 
confiança
4
Agregação
Resultados consolidados em 
volume
De texto não estruturado a indicadores acionáveis.


---
## Página 33

M Ó D U L O  8
•
A n á l i s e  d e  S e n t i m e n t o
Casos de uso da Análise de Sentimento
Módulo 8 — Análise de Sentimento
33 / 34
Voz do cliente
Medir satisfação em avaliações de produtos
Marketing
Acompanhar a percepção de marca
Suporte
Priorizar tickets com sentimento negativo
Pesquisa de mercado
Avaliar a reação a campanhas
Recursos humanos
Analisar pesquisas de clima organizacional
Mídia e notícias
Monitorar tom da cobertura jornalística


---
## Página 34

E N C E R R A M E N T O
Recapitulando os conceitos da aula
Encerramento
34 / 34
■
A IA é composta por sub-campos complementares
■
GANs criam dados, Visão Computacional interpreta imagens
■
NLP entende linguagem, Análise de Sentimento mede opinião
■
Amazon Rekognition e Custom Labels operacionalizam Visão Computacional
■
O acesso seguro é o alicerce de qualquer arquitetura na AWS


---
## Página 35

P e r g u n t a 1
Pergunta
37 / 38
(A) Detecção de anomalias
(B) Preenchimento de imagem
(C) Detecção de objetos
(D) Reconhecimento de entidades nomeadas
Um pesquisador de IA possui um banco de imagens capturadas por drones, contendo diversas espécies de plantas. 
Ele deseja desenvolver um sistema que identifique automaticamente as espécies presentes nas imagens, sem a 
necessidade de classificação manual. Qual estratégia atende a esses requisitos?


---
## Página 36

P e r g u n t a 1
Pergunta
37 / 38
(A) Detecção de anomalias
(B) Preenchimento de imagem
(C) Detecção de objetos
(D) Reconhecimento de entidades nomeadas
Um pesquisador de IA possui um banco de imagens capturadas por drones, contendo diversas espécies de plantas. 
Ele deseja desenvolver um sistema que identifique automaticamente as espécies presentes nas imagens, sem a 
necessidade de classificação manual. Qual estratégia atende a esses requisitos?
