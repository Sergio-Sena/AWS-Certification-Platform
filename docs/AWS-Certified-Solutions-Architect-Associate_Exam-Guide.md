# AWS-Certified-Solutions-Architect-Associate_Exam-Guide.pdf

*Convertido automaticamente de PDF*


---
## Página 1

 
 
Versão 1.1 SAA-C03 
 
1 | PÁGINA 
Guia do exame AWS Certified Solutions Architect - Associate (SAA-C03) 
Introdução 
O exame AWS Certified Solutions Architect - Associate (SAA-C03) destina-se a pessoas 
que desempenham a função de arquiteto de soluções. O exame valida a capacidade 
do candidato de projetar soluções com base no AWS Well-Architected Framework.  
O exame também valida a capacidade do candidato de concluir as seguintes tarefas: 
• Projetar soluções que incorporam os serviços da AWS para atender aos 
requisitos empresariais atuais e às necessidades futuras projetadas. 
• Projetar arquiteturas seguras, resilientes, de alto desempenho e econômicas. 
• Analisar as soluções existentes e determinar como realizar melhorias. 
Descrição do candidato 
O candidato deve ter pelo menos um ano de experiência prática em design de 
soluções de nuvem que usam serviços da AWS. 
Consulte no Apêndice uma lista de tecnologias e conceitos que podem aparecer no 
exame e uma lista de serviços e recursos da AWS dentro e fora do escopo. 
Conteúdo do exame 
Tipos de resposta 
Existem dois tipos de perguntas no exame:  
• Múltipla escolha: tem uma resposta correta e três respostas incorretas 
(distratores) 
• Múltipla resposta: tem duas ou mais respostas corretas dentre cinco ou mais 
opções de resposta 
Selecione uma ou mais respostas que completem melhor a afirmação ou respondam à 
pergunta. Pegadinhas, ou respostas incorretas, são opções de resposta que um 
candidato com habilidades ou conhecimentos insuficientes pode escolher. 
Geralmente, as pegadinhas são respostas plausíveis que correspondem à área de 
conteúdo. 


---
## Página 2

 
Versão 1.1 SAA-C03 
 
2 | PÁGINA 
As perguntas não respondidas são avaliadas como incorretas; não há penalidade por 
tentar adivinhar. O exame inclui 50 perguntas que afetam sua pontuação. 
Conteúdo não avaliado 
O exame inclui 15 perguntas não avaliadas que não afetam sua pontuação. A AWS 
coleta informações sobre o desempenho nas perguntas não avaliadas a fim de 
verificá-las para uso futuro como perguntas avaliadas. As perguntas não avaliadas 
não são identificadas no exame.  
Resultados do exame 
O exame AWS Certified Solutions Architect - Associate (SAA-C03) tem uma 
designação de aprovação ou reprovação. O exame é avaliado de acordo com um 
padrão mínimo estabelecido por profissionais da AWS que seguem as práticas 
recomendadas e as diretrizes do setor de certificação.  
Os resultados do exame são fornecidos como uma pontuação em escala de 100 a 
1.000. A pontuação mínima de aprovação é de 720. A pontuação mostra como foi suo 
desempenho no exame como um todo e se você obteve aprovação. Os modelos de 
pontuação em escala ajudam a correlacionar as pontuações em várias formas de 
exame que podem ter níveis de dificuldade um pouco diferentes. 
O relatório de pontuação pode conter uma tabela de classificações de seu 
desempenho em cada nível de seção. O exame usa um modelo de pontuação 
compensatória, o que significa que não é necessário obter uma pontuação de 
aprovação em cada seção. Você só precisa passar no exame geral. 
Cada seção do exame tem uma ponderação específica, portanto algumas seções têm 
mais perguntas do que outras. A tabela de classificações contém informações gerais 
que destacam seus pontos fortes e fracos. Tenha cuidado ao interpretar o feedback 
no nível de seção.  
Resumo do conteúdo 
Este guia do exame inclui as ponderações, os domínios do conteúdo e as declarações 
de tarefas do exame. Ele não fornece uma lista abrangente do conteúdo do exame. 
No entanto, um contexto adicional para cada declaração de tarefa está disponível 
para ajudar você a se preparar para o exame.  


---
## Página 3

 
Versão 1.1 SAA-C03 
 
3 | PÁGINA 
O exame tem os seguintes domínios do conteúdo e ponderações: 
• Domínio 1: Criação de arquiteturas seguras (30% do conteúdo pontuado) 
• Domínio 2: Criação de arquiteturas resilientes (26% do conteúdo pontuado) 
• Domínio 3: Criação de arquiteturas de alto desempenho (24% do conteúdo 
pontuado) 
• Domínio 4: Criação de arquiteturas com custo otimizado (20% do conteúdo 
pontuado) 
Domínio 1: Design de arquiteturas seguras 
Declaração de tarefa 1.1: Projetar acesso seguro aos recursos da AWS.  
Conhecimento sobre: 
• Controles de acesso e gerenciamento em várias contas. 
• Serviços de identidade e acesso federado da AWS (por exemplo, AWS 
Identity and Access Management [IAM], AWS Identity Center [AWS Single 
Sign-On]). 
• Infraestrutura global da AWS (por exemplo, Zonas de Disponibilidade, 
Regiões AWS). 
• Práticas recomendadas de segurança da AWS (por exemplo, o princípio de 
menor privilégio). 
• O modelo de responsabilidade compartilhada da AWS. 
Habilidades em: 
• Aplicar as práticas recomendadas de segurança da AWS a usuários do IAM e 
usuários-raiz (por exemplo, autenticação com multifator [MFA]). 
• Projetar um modelo de autorização flexível que inclua usuários, grupos, 
funções e políticas do IAM. 
• Projetar uma estratégia de controle de acesso baseada em função (por 
exemplo, AWS Security Token Service [AWS STS], mudança de função, 
acesso entre contas). 
• Projetar uma estratégia de segurança para várias contas da AWS (por 
exemplo, AWS Control Tower, políticas de controle de serviço [SCPs]). 
• Determinar o uso apropriado de políticas de recursos para os serviços da 
AWS. 
• Determinar quando federar um serviço de diretório com funções do IAM. 


---
## Página 4

 
Versão 1.1 SAA-C03 
 
4 | PÁGINA 
Declaração de tarefa 1.2: Projetar cargas de trabalho e aplicações seguras. 
Conhecimento sobre: 
• Configuração de aplicações e segurança de credenciais. 
• Endpoints de serviço da AWS. 
• Controle de portas, protocolos e tráfego de rede na AWS. 
• Acesso seguro a aplicações. 
• Serviços de segurança com casos de uso apropriados (por exemplo, Amazon 
Cognito, Amazon GuardDuty, Amazon Macie). 
• Vetores de ameaças externos à AWS (por exemplo, DDoS, SQL injection). 
Habilidades em: 
• Projetar arquiteturas de VPC com componentes de segurança (por exemplo, 
security groups, tabelas de rotas, ACLs de rede, gateways NAT). 
• Determinar estratégias de segmentação de rede (por exemplo, usando sub-
redes públicas e privadas). 
• Integrar serviços da AWS para proteger aplicações (por exemplo, AWS 
Shield, AWS WAF, IAM Identity Center, AWS Secrets Manager). 
• Proteger conexões de rede externas de e para a nuvem AWS (por exemplo, 
VPN, AWS Direct Connect). 
Declaração de tarefa 1.3: Determinar os controles de segurança de dados apropriados. 
Conhecimento sobre: 
• Acesso e governança de dados. 
• Recuperação de dados. 
• Classificação e retenção de dados. 
• Criptografia e gerenciamento de chaves apropriado. 
Habilidades em: 
• Alinhar as tecnologias da AWS para atender aos requisitos de conformidade. 
• Criptografia de dados em repouso (por exemplo, AWS Key Management 
Service [AWS KMS]). 
• Criptografia de dados em trânsito (por exemplo, AWS Certificate Manager 
[ACM] usando TLS). 
• Implementar políticas de acesso para chaves de criptografia. 
• Implementar backups e replicações de dados. 


---
## Página 5

 
Versão 1.1 SAA-C03 
 
5 | PÁGINA 
• Implementar políticas para acesso, ciclo de vida e proteção de dados. 
• Alternar chaves de criptografia e renovar certificados. 
Domínio 2: Design de arquiteturas resilientes  
Declaração de tarefa 2.1: Projetar arquiteturas dimensionáveis e com acoplamento 
fraco. 
Conhecimento sobre: 
• Criação e gerenciamento de APIs (por exemplo, Amazon API Gateway, API 
REST). 
• AWS Managed Services com casos de uso apropriados (por exemplo, AWS 
Transfer Family, Amazon Simple Queue Service [Amazon SQS], Secrets 
Manager). 
• Estratégias de armazenamento em cache. 
• Princípios de design para microsserviços (por exemplo, cargas de trabalho 
stateless em comparação com cargas de trabalho stateful). 
• Arquiteturas orientadas por eventos.  
• Scaling horizontal e vertical. 
• Como usar adequadamente os aceleradores de borda (por exemplo, rede de 
entrega de conteúdo [CDN]). 
• Como migrar aplicações para contêineres. 
• Conceitos de balanceamento de carga (por exemplo, Application Load 
Balancer). 
• Arquiteturas multicamadas. 
• Conceitos de enfileiramento e sistema de mensagens (por exemplo, 
publicar/assinar). 
• Tecnologias e padrões sem servidor (por exemplo, AWS Fargate, AWS 
Lambda). 
• Tipos de armazenamento com características associadas (por exemplo, 
objeto, arquivo, bloco). 
• A orquestração de contêineres (por exemplo, Amazon Elastic Container 
Service [Amazon ECS], Amazon Elastic Kubernetes Service [Amazon EKS]). 
• Quando usar réplicas de leitura.  
• Orquestração de fluxo de trabalho (por exemplo, AWS Step Functions). 


---
## Página 6

 
Versão 1.1 SAA-C03 
 
6 | PÁGINA 
Habilidades em: 
• Projetar arquiteturas orientadas por eventos, microsserviços e/ou 
multicamadas com base em requisitos. 
• Determinar estratégias de scaling para componentes usados em um projeto 
de arquitetura. 
• Determinar os serviços da AWS necessários para obter um acomplamento 
fraco com base em requisitos. 
• Determinar quando usar contêineres.  
• Determinar quando usar tecnologias e padrões sem servidor. 
• Recomendar tecnologias apropriadas de computação, armazenamento, 
redes e banco de dados com base em requisitos. 
• Usar serviços da AWS com propósito específico para cargas de trabalho. 
Declaração de tarefa 2.2: Projetar arquiteturas altamente disponíveis e/ou tolerantes 
a falhas. 
Conhecimento sobre: 
• Infraestrutura global da AWS (por exemplo, Zonas de Disponibilidade, 
Regiões AWS, Amazon Route 53). 
• AWS Managed Services com casos de uso apropriados (por exemplo, 
Amazon Comprehend, Amazon Polly). 
• Conceitos básicos de redes (por exemplo, tabelas de rotas). 
• Estratégias de recuperação de desastres (DR) (por exemplo, backup e 
restauração, luz piloto, warm standby, failover ativo-ativo, objetivo de 
ponto de recuperação [RPO], objetivo de tempo de recuperação [RTO]). 
• Padrões de design distribuídos. 
• Estratégias de failover.  
• Infraestrutura imutável. 
• Conceitos de balanceamento de carga (por exemplo, Application Load 
Balancer). 
• Conceitos de proxy (por exemplo, Proxy do Amazon RDS). 
• Cotas de serviço e limitação de largura de banda (por exemplo, como 
configurar as cotas de serviço para uma carga de trabalho em um ambiente 
de standby). 


---
## Página 7

 
Versão 1.1 SAA-C03 
 
7 | PÁGINA 
• Opções e características de armazenamento (por exemplo, durabilidade, 
replicação). 
• Visibilidade da carga de trabalho (por exemplo, AWS X-Ray). 
Habilidades em: 
• Determinar estratégias de automação para garantir a integridade da 
infraestrutura. 
• Determinar os serviços da AWS necessários para fornecer uma arquitetura 
altamente disponível e/ou tolerante a falhas nas Zonas de Disponibilidade 
ou Regiões AWS. 
• Identificar métricas com base nos requisitos empresariais para oferecer uma 
solução altamente disponível. 
• Implementar designs para mitigar pontos únicos de falha. 
• Implementar estratégias para garantir a durabilidade e a disponibilidade 
dos dados (por exemplo, backups). 
• Selecionar uma estratégia de DR apropriada para atender aos requisitos 
empresariais. 
• Usar serviços da AWS que melhoram a confiabilidade de aplicações legados 
e aplicações que não foram criadas para a nuvem (por exemplo, quando não 
é possível fazer alterações nas aplicações). 
• Usar serviços da AWS com propósito específico para cargas de trabalho. 
Domínio 3: Design de arquiteturas de alta performance  
Declaração de tarefa 3.1: Determinar soluções de armazenamento dimensionáveis 
e/ou de alto desempenho. 
Conhecimento sobre: 
• Soluções de armazenamento híbrido para atender aos requisitos 
empresariais  
• Serviços de armazenamento com casos de uso apropriados (por exemplo, 
Amazon S3, Amazon Elastic File System [Amazon EFS], Amazon Elastic 
Block Store [Amazon EBS]) 
• Tipos de armazenamento com características associadas (por exemplo, 
objeto, arquivo, bloco). 
 
 


---
## Página 8

 
Versão 1.1 SAA-C03 
 
8 | PÁGINA 
Habilidades em: 
• Determinar quais serviços e configurações de armazenamento atendem às 
demandas de desempenho. 
• Determinar quais serviços de armazenamento que podem ser 
dimensionados para atender às necessidades futuras. 
Declaração de tarefa 3.2: Projetar soluções de computação elásticas e de alto 
desempenho. 
Conhecimento sobre: 
• Serviços de computação da AWS com casos de uso apropriados (por 
exemplo, AWS Batch, Amazon EMR, Fargate).  
• Conceitos de computação distribuída com base na infraestrutura global e 
nos serviços de borda da AWS. 
• Conceitos de enfileiramento e sistema de mensagens (por exemplo, 
publicar/assinar). 
• Recursos de escalabilidade com casos de uso apropriados (por exemplo, 
Amazon EC2 Auto Scaling, AWS Auto Scaling). 
• Tecnologias e padrões sem servidor (por exemplo, Lambda, Fargate). 
• A orquestração de contêineres (por exemplo, Amazon ECS, Amazon EKS). 
Habilidades em: 
• Desacoplar cargas de trabalho para que os componentes possam ser 
dimensionados de forma independente. 
• Identificar métricas e condições para realizar ações de scaling. 
• Selecionar as opções e os recursos de computação apropriados (por 
exemplo, tipos de instância do EC2) para atender aos requisitos 
empresariais. 
• Selecionar o tipo e o tamanho de recurso apropriados (por exemplo, a 
quantidade de memória do Lambda) para atender aos requisitos 
empresariais. 
 
 


---
## Página 9

 
Versão 1.1 SAA-C03 
 
9 | PÁGINA 
Declaração de tarefa 3.3: Determinar soluções de banco de dados de alto 
desempenho. 
Conhecimento sobre: 
• Infraestrutura global da AWS (por exemplo, Zonas de Disponibilidade, 
Regiões AWS). 
• Estratégias e serviços de armazenamento em cache (por exemplo, Amazon 
ElastiCache). 
• Padrões de acesso a dados (por exemplo, leitura intensiva em comparação 
com gravação intensiva). 
• Planejamento da capacidade de bancos de dados (por exemplo, unidades de 
capacidade, tipos de instância, IOPS provisionado). 
• Proxies e conexões de banco de dados. 
• Mecanismos de banco de dados com casos de uso apropriados (por 
exemplo, migrações homogêneas e heterogêneas). 
• Replicação de banco de dados (por exemplo, réplicas de leitura). 
• Tipos e serviços de banco de dados (por exemplo, sem servidor, relacional 
em comparação com não relacional, na memória). 
Habilidades em: 
• Configurar réplicas de leitura para atender aos requisitos empresariais. 
• Projetar arquiteturas de banco de dados. 
• Determinar um mecanismo de banco de dados apropriado (por exemplo, 
MySQL em comparação com o PostgreSQL). 
• Determinar um tipo de banco de dados apropriado (por exemplo, Amazon 
Aurora, Amazon DynamoDB). 
• Integrar o armazenamento em cache para atender aos requisitos 
empresariais. 
Declaração de tarefa 3.4: Determinar arquiteturas de rede dimensionáveis e/ou de 
alto desempenho. 
Conhecimento sobre: 
• Serviços de redes de borda com casos de uso apropriados (por exemplo, 
Amazon CloudFront, AWS Global Accelerator).  
• Como projetar arquitetura de rede (por exemplo, camadas de sub-rede, 
roteamento, endereçamento IP). 


---
## Página 10

 
Versão 1.1 SAA-C03 
 
10 | PÁGINA 
• Conceitos de balanceamento de carga (por exemplo, Application Load 
Balancer). 
• Opções de conexão de rede (por exemplo, AWS VPN, Direct Connect, AWS 
PrivateLink). 
Habilidades em: 
• Criar uma topologia de rede para várias arquiteturas (por exemplo, global, 
híbrida, multicamadas).  
• Determinar quais configurações de rede podem ser dimensionadas para 
acomodar necessidades futuras. 
• Determinar o posicionamento adequado dos recursos para atender aos 
requisitos empresariais. 
• Selecionar a estratégia de balanceamento de carga apropriada.  
Declaração de tarefa 3.5: Determinar soluções de transformação e ingestão de dados 
de alto desempenho. 
Conhecimento sobre: 
• Serviços de data analytics e visualização de dados com casos de uso 
apropriados (por exemplo, Amazon Athena, AWS Lake Formation, Amazon 
QuickSight). 
• Padrões de ingestão de dados (por exemplo, frequência). 
• Serviços de transferência de dados com casos de uso apropriados (por 
exemplo, AWS DataSync, AWS Storage Gateway).  
• Serviços de transformação de dados com casos de uso apropriados (por 
exemplo, AWS Glue).  
• Acesso seguro a pontos de acesso de ingestão. 
• Tamanhos e velocidades necessários para atender aos requisitos 
empresariais. 
• Serviços de streaming de dados com casos de uso apropriados (por 
exemplo, Amazon Kinesis). 
Habilidades em: 
• Criar e proteger data lakes. 
• Projetar arquiteturas de streaming de dados.  
• Projetar soluções de transferência de dados. 


---
## Página 11

 
Versão 1.1 SAA-C03 
 
11 | PÁGINA 
• Implementar estratégias de visualização. 
• Selecionar opções de computação apropriadas para processamento de 
dados (por exemplo, Amazon EMR). 
• Selecionar configurações apropriadas para ingestão. 
• Transformar dados entre formatos (por exemplo, .csv em .parquet). 
Domínio 4: Design de arquiteturas econômicas  
Declaração de tarefa 4.1: Projetar soluções de armazenamento econômicas. 
Conhecimento sobre: 
• Opções de acesso (por exemplo, um bucket do S3 com armazenamento de 
objetos de Requester Pays). 
• Recursos do serviço de gerenciamento de custos da AWS (por exemplo, tags 
de alocação de custos, cobrança de várias contas) 
• Ferramentas de gerenciamento de custos da AWS com casos de uso 
apropriados (por exemplo, AWS Cost Explorer, AWS Budgets, AWS Cost and 
Usage Report). 
• Serviços de armazenamento da AWS com casos de uso apropriados (por 
exemplo, Amazon FSx, Amazon EFS, Amazon S3, Amazon EBS). 
• Estratégias de backup. 
• Opções de armazenamento em bloco (por exemplo, tipos de volume da 
unidade de disco rígido [HDD], tipos de volume da unidade de estado sólido 
[SSD]). 
• Ciclos de vida dos dados. 
• Opções de armazenamento híbrido (por exemplo, DataSync, Transfer 
Family, Storage Gateway). 
• Padrões de acesso ao armazenamento. 
• Armazenamento em camadas (por exemplo, camadas frias para 
armazenamento de objetos). 
• Tipos de armazenamento com características associadas (por exemplo, 
objeto, arquivo, bloco). 
 
 


---
## Página 12

 
Versão 1.1 SAA-C03 
 
12 | PÁGINA 
Habilidades em: 
• Projetar estratégias de armazenamento apropriadas (por exemplo, fazer 
upload em lote para o Amazon S3 em comparação com upload individual). 
• Determinar o tamanho de armazenamento correto para uma carga de 
trabalho. 
• Determinar o método de menor custo de transferência de dados de uma 
carga de trabalho para o armazenamento da AWS. 
• Determinar quando o auto scaling de armazenamento é necessário.  
• Gerenciar ciclos de vida de objetos do S3. 
• Selecionar a solução apropriada de backup e/ou arquivamento. 
• Selecionar o serviço apropriado para a migração de dados aos serviços de 
armazenamento. 
• Selecionar o nível de armazenamento apropriado.  
• Selecionar o ciclo de vida de dados correto para armazenamento. 
• Selecionar o serviço de armazenamento mais econômico para uma carga de 
trabalho. 
Declaração de tarefa 4.2: Projetar soluções de computação econômicas. 
Conhecimento sobre: 
• Recursos do serviço de gerenciamento de custos da AWS (por exemplo, tags 
de alocação de custos, cobrança de várias contas) 
• Ferramentas de gerenciamento de custos da AWS com casos de uso 
apropriados (por exemplo, Cost Explorer, AWS Budgets, AWS Cost and 
Usage Report). 
• Infraestrutura global da AWS (por exemplo, Zonas de Disponibilidade, 
Regiões AWS). 
• Opções de compra da AWS (por exemplo, instâncias spot, instâncias 
reservadas, Savings Plans). 
• Estratégias de computação distribuída (por exemplo, processamento de 
borda). 
• Opções de computação híbrida (por exemplo, AWS Outposts, AWS Snowball 
Edge). 
• Famílias, tamanhos e tipos de instâncias (por exemplo, otimizadas para 
memória, otimizadas para computação, virtualização). 


---
## Página 13

 
Versão 1.1 SAA-C03 
 
13 | PÁGINA 
• Otimização da utilização da computação (por exemplo, contêineres, 
computação sem servidor, microsserviços). 
• Estratégias de scaling (por exemplo, auto scaling, hibernação). 
Habilidades em: 
• Determinar uma estratégia de balanceamento de carga apropriada (por 
exemplo, Application Load Balancer [camada 7] em comparação com o 
Network Load Balancer [camada 4] em comparação com o Gateway Load 
Balancer). 
• Determinar métodos e estratégias de scaling apropriados para cargas de 
trabalho elásticas (por exemplo, horizontal em comparação com vertical, 
hibernação do EC2). 
• Determinar serviços de computação da AWS econômicos com casos de uso 
apropriados (por exemplo, Lambda, Amazon EC2, Fargate) 
• Determinar a disponibilidade necessária para diferentes classes de cargas de 
trabalho (por exemplo, cargas de trabalho de produção e de não produção) 
• Escolher a família de instâncias apropriada para uma carga de trabalho. 
• Escolher o tamanho de instância apropriado para uma carga de trabalho. 
Declaração de tarefa 4.3: Projetar soluções de banco de dados econômicas. 
Conhecimento sobre: 
• Recursos do serviço de gerenciamento de custos da AWS (por exemplo, tags 
de alocação de custos, cobrança de várias contas) 
• Ferramentas de gerenciamento de custos da AWS com casos de uso 
apropriados (por exemplo, Cost Explorer, AWS Budgets, AWS Cost and 
Usage Report). 
• Estratégias de armazenamento em cache. 
• Políticas de retenção de dados. 
• Planejamento da capacidade do banco de dados (por exemplo, unidades de 
capacidade). 
• Proxies e conexões de banco de dados. 
• Mecanismos de banco de dados com casos de uso apropriados (por 
exemplo, migrações homogêneas e heterogêneas). 
• Replicação de banco de dados (por exemplo, réplicas de leitura). 


---
## Página 14

 
Versão 1.1 SAA-C03 
 
14 | PÁGINA 
• Tipos e serviços de banco de dados (por exemplo, relacional em comparação 
com não relacional, Aurora, DynamoDB). 
Habilidades em: 
• Projetar políticas de backup e retenção apropriadas (por exemplo, 
frequência de snapshots). 
• Determinar um mecanismo de banco de dados apropriado (por exemplo, 
MySQL em comparação com o PostgreSQL). 
• Determinar serviços de banco de dados da AWS econômicos com casos de 
uso apropriados (por exemplo, DynamoDB em comparação com o Amazon 
RDS, sem servidor). 
• Determinar tipos de banco de dados da AWS econômicos (por exemplo, 
formato de série temporal, formato colunar). 
• Migrar esquemas e dados de banco de dados para diferentes locais e/ou 
diferentes mecanismos de banco de dados. 
Declaração de tarefa 4.4: Projetar arquiteturas de rede econômicas. 
Conhecimento sobre: 
• Recursos do serviço de gerenciamento de custos da AWS (por exemplo, tags 
de alocação de custos, cobrança de várias contas) 
• Ferramentas de gerenciamento de custos da AWS com casos de uso 
apropriados (por exemplo, Cost Explorer, AWS Budgets, AWS Cost and 
Usage Report). 
• Conceitos de balanceamento de carga (por exemplo, Application Load 
Balancer). 
• Gateways NAT (por exemplo, custos de instância NAT em comparação com 
os custos do gateway NAT). 
• Conectividade de rede (por exemplo, linhas privadas, linhas dedicadas, 
VPNs). 
• Roteamento de rede, topologia e peering (por exemplo, transit gateway da 
AWS, peering de VPC). 
• Serviços de rede com casos de uso apropriados (por exemplo, DNS). 
 
 


---
## Página 15

 
Versão 1.1 SAA-C03 
 
15 | PÁGINA 
Habilidades em: 
• Configurar tipos de gateway NAT apropriados para uma rede (por exemplo, 
um único gateway NAT compartilhado em comparação com gateways NAT 
para cada Zona de Disponibilidade). 
• Configurar conexões de rede apropriadas (por exemplo, Direct Connect em 
comparação com a VPN e com a Internet). 
• Configurar rotas de rede apropriadas para minimizar os custos de 
transferência de rede (por exemplo, região para região, Zona de 
Disponibilidade para Zona de Disponibilidade, privado para público, Global 
Accelerator, endpoints de VPC). 
• Determinar necessidades estratégicas para redes de entrega de conteúdo 
(CDNs) e cache de borda. 
• Analisar as cargas de trabalho para otimizações de rede.  
• Selecionar uma estratégia de limitação de largura de banda apropriada.  
• Selecionar a alocação de largura de banda apropriada para um dispositivo 
de rede (por exemplo, uma única VPN em comparação com várias VPNs, 
velocidade do Direct Connect). 
 
 


---
## Página 16

 
Versão 1.1 SAA-C03 
 
16 | PÁGINA 
Apêndice 
Tecnologias e conceitos que podem aparecer no exame 
A lista a seguir contém tecnologias e conceitos que podem aparecer no exame. Essa 
lista não é completa e está sujeita a alterações. A ordem e a posição dos itens nessa 
lista não indicam seu peso relativo ou importância no exame:  
• Computação 
• Gerenciamento de custos 
• Banco de dados 
• Recuperação de desastres 
• Alto desempenho 
• Gerenciamento e governança 
• Microsserviços e entrega de componentes 
• Migração e transferência de dados 
• Redes, conectividade e entrega de conteúdo 
• Resiliência 
• Segurança 
• Princípios de design sem servidor e orientados por eventos 
• Armazenamento 
Recursos e produtos da AWS no escopo 
A lista a seguir contém os serviços e recursos da AWS que estão no escopo do exame. 
Essa lista não é completa e está sujeita a alterações. As ofertas da AWS aparecem em 
categorias que se alinham às funções principais das ofertas: 
Analytics: 
• Amazon Athena 
• AWS Data Exchange 
• AWS Data Pipeline 
• Amazon EMR 
• AWS Glue 
• Amazon Kinesis 
• AWS Lake Formation 
• Amazon Managed Streaming for Apache Kafka (Amazon MSK) 


---
## Página 17

 
Versão 1.1 SAA-C03 
 
17 | PÁGINA 
• Amazon OpenSearch Service 
• Amazon QuickSight 
• Amazon Redshift 
Integração de aplicações: 
• Amazon AppFlow 
• AWS AppSync 
• Amazon EventBridge 
• Amazon MQ 
• Amazon Simple Notification Service (Amazon SNS) 
• Amazon Simple Queue Service (Amazon SQS) 
• AWS Step Functions 
Gerenciamento de custos da AWS: 
• AWS Budgets 
• AWS relatório de uso e custo 
• AWS Cost Explorer 
• Savings Plans 
Computação: 
• AWS Batch 
• Amazon EC2 
• Amazon EC2 Auto Scaling 
• AWS Elastic Beanstalk 
• AWS Outposts 
• AWS Serverless Application Repository 
• VMware Cloud on AWS 
• AWS Wavelength 
Contêineres: 
• Amazon ECS Anywhere 
• Amazon EKS Anywhere 
• Amazon EKS Distro 
• Amazon Elastic Container Registry (Amazon ECR) 


---
## Página 18

 
Versão 1.1 SAA-C03 
 
18 | PÁGINA 
• Amazon Elastic Container Service (Amazon ECS) 
• Amazon Elastic Kubernetes Service (Amazon EKS) 
Banco de dados: 
• Amazon Aurora 
• Amazon Aurora sem servidor 
• Amazon DocumentDB (compatível com MongoDB) 
• Amazon DynamoDB 
• Amazon ElastiCache 
• Amazon Keyspaces (for Apache Cassandra) 
• Amazon Neptune  
• Amazon Quantum Ledger Database (Amazon QLDB) 
• Amazon RDS 
• Amazon Redshift 
Ferramentas do desenvolvedor: 
• AWS X-Ray 
Web e dispositivos móveis de front-end: 
• AWS Amplify 
• Amazon API Gateway 
• AWS Device Farm 
• Amazon Pinpoint 
Machine learning: 
• Amazon Comprehend 
• Amazon Forecast 
• Amazon Fraud Detector 
• Amazon Kendra 
• Amazon Lex 
• Amazon Polly 
• Amazon Rekognition 
• Amazon SageMaker 
• Amazon Textract 


---
## Página 19

 
Versão 1.1 SAA-C03 
 
19 | PÁGINA 
• Amazon Transcribe 
• Amazon Translate 
Gerenciamento e governança: 
• AWS Auto Scaling 
• AWS CloudFormation 
• AWS CloudTrail 
• Amazon CloudWatch 
• AWS Command Line Interface (AWS CLI) 
• AWS Compute Optimizer 
• AWS Config 
• AWS Control Tower 
• AWS Health Dashboard 
• AWS License Manager 
• Amazon Managed Grafana 
• Amazon Managed Service for Prometheus 
• AWS Management Console 
• AWS Organizations 
• AWS Proton 
• AWS Service Catalog 
• AWS Systems Manager 
• AWS Trusted Advisor 
• Ferramenta do AWS Well-Architected 
Serviços de mídia: 
• Amazon Elastic Transcoder 
• Amazon Kinesis Video Streams 
Migração e transferência: 
• AWS Application Discovery Service 
• AWS Application Migration Service 
• AWS Database Migration Service (AWS DMS) 
• AWS DataSync 
• AWS Migration Hub 


---
## Página 20

 
Versão 1.1 SAA-C03 
 
20 | PÁGINA 
• Família AWS Snow 
• AWS Transfer Family 
Redes e entrega de conteúdo: 
• AWS Client VPN 
• Amazon CloudFront 
• AWS Direct Connect 
• Elastic Load Balancing (ELB) 
• AWS Global Accelerator 
• AWS PrivateLink 
• Amazon Route 53 
• AWS Site-to-Site VPN 
• AWS Transit Gateway 
• Amazon VPC 
Segurança, identidade e conformidade: 
• AWS Artifact 
• AWS Audit Manager 
• AWS Certificate Manager (ACM) 
• AWS CloudHSM 
• Amazon Cognito 
• Amazon Detective 
• AWS Directory Service 
• AWS Firewall Manager 
• Amazon GuardDuty 
• AWS IAM Identity Center (AWS Single Sign-On) 
• AWS Identity and Access Management (IAM) 
• Amazon Inspector 
• AWS Key Management Service (AWS KMS) 
• Amazon Macie 
• AWS Network Firewall 
• AWS Resource Access Manager (AWS RAM) 
• AWS Secrets Manager 
• AWS Security Hub 


---
## Página 21

 
Versão 1.1 SAA-C03 
 
21 | PÁGINA 
• AWS Shield 
• AWS WAF 
Sem servidor: 
• AWS AppSync 
• AWS Fargate 
• AWS Lambda 
Armazenamento: 
• AWS Backup 
• Amazon Elastic Block Store (Amazon EBS) 
• Amazon Elastic File System (Amazon EFS) 
• Amazon FSx (para todos os tipos) 
• Amazon S3 
• Amazon S3 Glacier 
• AWS Storage Gateway 
Recursos e serviços da AWS fora do escopo 
A lista a seguir contém serviços e recursos da AWS que estão fora do escopo do 
exame. Essa lista não é completa e está sujeita a alterações. As ofertas da AWS que 
não estão totalmente relacionadas às funções de trabalho desejadas para o exame 
foram excluídas dessa lista: 
Analytics: 
• Amazon CloudSearch 
Integração de aplicações: 
• Amazon Managed Workflows for Apache Airflow (Amazon MWAA) 
AR e VR: 
• Amazon Sumerian 
Blockchain: 
• Amazon Managed Blockchain 


---
## Página 22

 
Versão 1.1 SAA-C03 
 
22 | PÁGINA 
Computação: 
• Amazon Lightsail 
Banco de dados: 
• Amazon RDS on VMware 
Ferramentas do desenvolvedor: 
• AWS Cloud9 
• AWS Cloud Development Kit (AWS CDK) 
• AWS CloudShell 
• AWS CodeArtifact 
• AWS CodeBuild 
• AWS CodeCommit 
• AWS CodeDeploy 
• Amazon CodeGuru 
• AWS CodeStar 
• Amazon Corretto 
• AWS Fault Injection Simulator (AWS FIS) 
• Ferramentas e SDKs da AWS 
Web e dispositivos móveis de front-end: 
• Amazon Location Service 
Tecnologia de jogos: 
• Amazon GameLift 
• Amazon Lumberyard 
Internet das Coisas: 
• Todos os serviços 
Machine learning: 
• Apache MXNet on AWS 
• Amazon Augmented AI (Amazon A2I) 
• AWS DeepComposer 


---
## Página 23

 
Versão 1.1 SAA-C03 
 
23 | PÁGINA 
• AWS Deep Learning AMIs (DLAMI) 
• AWS Deep Learning Containers 
• AWS DeepLens 
• AWS DeepRacer 
• Amazon DevOps Guru 
• Amazon Elastic Inference 
• Amazon HealthLake 
• AWS Inferentia 
• Amazon Lookout for Equipment 
• Amazon Lookout for Metrics 
• Amazon Lookout for Vision 
• Amazon Monitron 
• AWS Panorama 
• Amazon Personalize 
• PyTorch na AWS 
• Amazon SageMaker Data Wrangler 
• Amazon SageMaker Ground Truth 
• TensorFlow na AWS 
Gerenciamento e governança: 
• AWS Chatbot 
• Aplicativo móvel AWS Console 
• AWS Distro for OpenTelemetry 
• AWS OpsWorks 
Serviços de mídia: 
• Dispositivos e software do AWS Elemental 
• AWS Elemental MediaConnect 
• AWS Elemental MediaConvert 
• AWS Elemental MediaLive 
• AWS Elemental MediaPackage 
• AWS Elemental MediaStore 
• AWS Elemental MediaTailor 
• Amazon Interactive Video Service (Amazon IVS) 


---
## Página 24

 
Versão 1.1 SAA-C03 
 
24 | PÁGINA 
Migração e transferência: 
• Migration Evaluator 
Redes e entrega de conteúdo: 
• AWS App Mesh 
• AWS Cloud Map 
Tecnologias quânticas: 
• Amazon Braket 
Robótica: 
• AWS RoboMaker 
Satélite: 
• AWS Ground Station 
Pesquisa 
Este guia do exame foi útil? Informe-nos respondendo à nossa pesquisa. 
 
