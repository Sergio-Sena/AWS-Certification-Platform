// DOP-C02 Domain 4: Monitoring & Logging (34 questões - 15%)
// Tópicos: CloudWatch (custom metrics, metric math, anomaly detection, composite alarms), X-Ray, CloudWatch Logs, EventBridge

const monitoringQuestions = [
    {
        id: 'mon_001',
        question: "Uma aplicação precisa monitorar business metrics (orders per minute, revenue) que não são métricas AWS padrão. Como?",
        options: [
            "CloudWatch Custom Metrics via PutMetricData API — aplicação publica métricas custom com namespace, dimensions e values",
            "CloudTrail",
            "CloudWatch Logs apenas",
            "X-Ray annotations"
        ],
        correct: [0],
        explanation: "✅ Custom Metrics: PutMetricData API publica qualquer métrica. Namespace custom (ex: MyApp/Orders). Dimensions para segmentar (environment, region). Resolution: standard (60s) ou high-res (1s). Alarmes e dashboards normais.",
        topic: "cloudwatch",
        domain: "monitoring"
    },
    {
        id: 'mon_002',
        question: "Uma equipe quer criar um alarme que dispara apenas quando CPU > 80% E requests > 10000 simultaneamente (evitar false positives). Como?",
        options: [
            "Dois alarmes separados com SNS",
            "Metric Math",
            "CloudWatch Composite Alarm — combina múltiplos alarmes com lógica AND/OR/NOT. Dispara apenas quando condição composta é verdadeira",
            "Anomaly Detection"
        ],
        correct: [2],
        explanation: "✅ Composite Alarms: combina child alarms com expressões booleanas (AND, OR, NOT). Reduz alarm noise. Ex: ALARM(CPUHigh) AND ALARM(RequestsHigh). Suppressor alarm pode silenciar durante maintenance windows.",
        topic: "cloudwatch",
        domain: "monitoring"
    },
    {
        id: 'mon_003',
        question: "Uma empresa quer detectar anomalias em métricas sem definir thresholds estáticos (padrões variam por hora/dia). Qual feature?",
        options: [
            "Static threshold com valor alto",
            "Percentile statistics",
            "Manual monitoring",
            "CloudWatch Anomaly Detection — ML model aprende padrão normal da métrica e cria banda de valores esperados. Alarme quando valor sai da banda",
        ],
        correct: [3],
        explanation: "✅ Anomaly Detection: ML treina em 2 semanas de dados. Cria expected band (upper/lower). Considera sazonalidade (hora, dia da semana). Alarme quando métrica sai da banda. Ideal para métricas com padrões variáveis.",
        topic: "cloudwatch",
        domain: "monitoring"
    },
    {
        id: 'mon_004',
        question: "Uma equipe quer calcular error rate (errors/total requests * 100) como métrica para alarme sem publicar nova métrica. Como?",
        options: [
            "Lambda calculando periodicamente",
            "CloudWatch Metric Math — expressão matemática sobre métricas existentes: (m1/m2)*100 onde m1=5xx errors, m2=total requests",
            "Custom metric publicada pela app",
            "CloudWatch Logs Insights query"
        ],
        correct: [1],
        explanation: "✅ Metric Math: expressões sobre métricas existentes. Operações: +, -, *, /, funções (AVG, SUM, RATE, FILL). Pode criar alarme diretamente na expressão. Sem custo adicional. Não precisa publicar nova métrica.",
        topic: "cloudwatch",
        domain: "monitoring"
    },
    {
        id: 'mon_005',
        question: "Uma aplicação distribuída (API Gateway → Lambda → DynamoDB → SQS → Lambda) tem latência alta. Como identificar o bottleneck?",
        options: [
            "AWS X-Ray — distributed tracing que mostra service map com latência de cada segmento, identifica exatamente onde está o gargalo",
            "CloudWatch Logs de cada serviço",
            "CloudWatch Metrics de cada serviço",
            "VPC Flow Logs"
        ],
        correct: [0],
        explanation: "✅ X-Ray: trace completo da request através de todos os serviços. Service Map visual mostra latência entre componentes. Segments e subsegments detalham tempo em cada operação. Identifica bottleneck exato (ex: DynamoDB scan lento).",
        topic: "xray",
        domain: "monitoring"
    },
    {
        id: 'mon_006',
        question: "Uma equipe quer filtrar traces no X-Ray para encontrar apenas requests que falharam com erro 500 em um serviço específico. Como?",
        options: [
            "Revisar todos os traces",
            "CloudWatch Logs filter",
            "X-Ray Filter Expressions — query como: service(\"payment-api\") AND responsetime > 5 AND http.status = 500",
            "X-Ray Groups apenas"
        ],
        correct: [2],
        explanation: "✅ Filter Expressions: query language para traces. Filtra por service name, response time, status code, annotations, user. Groups: salva filter expression como grupo com CloudWatch metric própria. Alarme em error rate do grupo.",
        topic: "xray",
        domain: "monitoring"
    },
    {
        id: 'mon_007',
        question: "Uma empresa quer extrair métricas de logs (contar ocorrências de 'ERROR' nos logs da aplicação e criar alarme). Como?",
        options: [
            "Grep manual",
            "Lambda processando logs",
            "Athena query",
            "CloudWatch Logs Metric Filters — define pattern match nos logs e publica como custom metric. Criar alarme na métrica gerada",
        ],
        correct: [3],
        explanation: "✅ Metric Filters: pattern matching em log events (ex: [ERROR], {$.statusCode = 500}). Cada match incrementa métrica. Alarme na métrica. Zero código. Patterns suportam JSON, space-delimited, e regex-like.",
        topic: "cloudwatch-logs",
        domain: "monitoring"
    },
    {
        id: 'mon_008',
        question: "Uma empresa quer enviar logs do CloudWatch Logs em real-time para Elasticsearch/OpenSearch para análise. Qual mecanismo?",
        options: [
            "S3 export + import",
            "CloudWatch Logs Subscription Filter — stream de log events em real-time para destinos: Lambda, Kinesis Data Firehose, ou Kinesis Data Streams",
            "CloudWatch Logs Insights",
            "EventBridge"
        ],
        correct: [1],
        explanation: "✅ Subscription Filters: real-time streaming de logs. Destinos: Lambda (transform + load), Kinesis Firehose (→ OpenSearch, S3, Splunk), Kinesis Streams (custom processing). Filter pattern seleciona quais logs enviar.",
        topic: "cloudwatch-logs",
        domain: "monitoring"
    },
    {
        id: 'mon_009',
        question: "Uma empresa multi-account quer centralizar logs de todas as contas em uma conta de logging dedicada. Como?",
        options: [
            "CloudWatch Logs cross-account subscription filters — cada conta envia logs via subscription para Kinesis/Firehose na conta central de logging",
            "Copiar logs manualmente",
            "S3 replication",
            "CloudTrail Organization trail apenas"
        ],
        correct: [0],
        explanation: "✅ Cross-account log aggregation: subscription filter em cada conta → Kinesis Data Streams/Firehose na conta central → S3/OpenSearch. Destination policy permite acesso cross-account. Alternativa: CloudWatch cross-account observability.",
        topic: "cloudwatch-logs",
        domain: "monitoring"
    },
    {
        id: 'mon_010',
        question: "Uma equipe quer ser notificada quando um EC2 instance state muda para 'terminated' ou quando um deployment falha no CodeDeploy. Qual serviço?",
        options: [
            "CloudWatch Alarms",
            "CloudTrail + SNS",
            "Amazon EventBridge — event bus que captura eventos de serviços AWS (state changes) e roteia para targets baseado em event patterns",
            "AWS Config"
        ],
        correct: [2],
        explanation: "✅ EventBridge: event bus para eventos AWS (EC2 state change, CodeDeploy deployment state). Rules com event patterns filtram eventos específicos. Targets: SNS, Lambda, SQS, SSM Automation. Near real-time. Serverless.",
        topic: "eventbridge",
        domain: "monitoring"
    },
    {
        id: 'mon_011',
        question: "Uma empresa quer adicionar metadata custom aos traces X-Ray para filtrar por customer_id ou transaction_type. Como?",
        options: [
            "Log statements",
            "Segment name",
            "X-Ray Metadata",
            "X-Ray Annotations — key-value pairs indexados que podem ser usados em filter expressions para buscar traces específicos",
        ],
        correct: [3],
        explanation: "✅ Annotations: key-value INDEXADOS. Usados em filter expressions (annotation.customer_id = '123'). Metadata: key-value NÃO indexados (dados adicionais, não filtráveis). Annotations para busca, Metadata para contexto.",
        topic: "xray",
        domain: "monitoring"
    },
    {
        id: 'mon_012',
        question: "Uma empresa quer replay de eventos passados do EventBridge para testar uma nova regra ou reprocessar eventos que falharam. Como?",
        options: [
            "Não é possível",
            "EventBridge Archive + Replay — archive armazena eventos por período configurável. Replay reenvia eventos do archive para o event bus",
            "SQS DLQ replay",
            "CloudTrail lookup"
        ],
        correct: [1],
        explanation: "✅ Archive: armazena eventos (todos ou filtrados por pattern) com retention configurável. Replay: reenvia eventos do archive para event bus em time range específico. Útil para testar novas rules, reprocessar falhas, debugging.",
        topic: "eventbridge",
        domain: "monitoring"
    },
    {
        id: 'mon_013',
        question: "Uma empresa quer monitorar API calls feitas em sua conta AWS para auditoria e detecção de atividades suspeitas. Qual serviço?",
        options: [
            "AWS CloudTrail — registra todas as API calls (management events) com who, what, when, where. Data events para S3/Lambda opcionais",
            "CloudWatch Logs",
            "VPC Flow Logs",
            "X-Ray"
        ],
        correct: [0],
        explanation: "✅ CloudTrail: audit log de API calls. Management events (grátis, 90 dias). Data events (S3 object-level, Lambda invocations — custo adicional). Trail → S3 para retenção longa. CloudTrail Lake para SQL queries. Integra com EventBridge.",
        topic: "cloudwatch-logs",
        domain: "monitoring"
    },
    {
        id: 'mon_014',
        question: "Uma equipe quer criar um dashboard unificado mostrando métricas de múltiplas contas AWS e regiões. Como?",
        options: [
            "Dashboard por conta",
            "Grafana self-hosted",
            "CloudWatch Cross-Account Observability — conta monitoring central visualiza métricas, logs e traces de contas source. Dashboard unificado",
            "Custom aggregation Lambda"
        ],
        correct: [2],
        explanation: "✅ Cross-Account Observability: conta monitoring (sink) + contas source (link). Métricas, logs e traces compartilhados. Dashboard na conta central com widgets de múltiplas contas/regiões. Nativo, sem infraestrutura adicional.",
        topic: "cloudwatch",
        domain: "monitoring"
    },
    {
        id: 'mon_015',
        question: "Uma aplicação Lambda tem cold starts impactando latência. Como identificar e medir cold starts com X-Ray?",
        options: [
            "CloudWatch Duration metric",
            "Custom metric",
            "Lambda Insights",
            "X-Ray trace mostra 'Initialization' subsegment separado do 'Invocation' — duração do init indica cold start. Filtrar traces com initialization > 0",
        ],
        correct: [3],
        explanation: "✅ X-Ray Lambda: trace mostra segments separados — Initialization (cold start), Invocation (execution), Overhead. Filter: initialisation.duration > 0 encontra cold starts. Mede impacto real. Provisioned Concurrency elimina cold starts.",
        topic: "xray",
        domain: "monitoring"
    },
    {
        id: 'mon_016',
        question: "Uma empresa quer enviar eventos de uma conta AWS para outra conta via EventBridge (ex: conta de produção → conta de monitoring). Como?",
        options: [
            "SNS cross-account",
            "EventBridge cross-account event bus — conta source envia eventos para event bus na conta destino via resource-based policy que permite PutEvents",
            "SQS cross-account",
            "Lambda cross-account invoke"
        ],
        correct: [1],
        explanation: "✅ Cross-account EventBridge: conta destino cria event bus com resource policy permitindo PutEvents da conta source. Rule na conta source com target = event bus da outra conta. Ou usar Organizations para simplificar.",
        topic: "eventbridge",
        domain: "monitoring"
    },
    {
        id: 'mon_017',
        question: "Uma equipe quer query ad-hoc em logs do CloudWatch sem configurar infraestrutura (Elasticsearch, Athena). Qual feature?",
        options: [
            "CloudWatch Logs Insights — query language nativo para análise interativa de logs. Suporta filter, stats, sort, parse, visualize",
            "Metric Filters",
            "S3 Select",
            "Grep no console"
        ],
        correct: [0],
        explanation: "✅ Logs Insights: query engine serverless para CloudWatch Logs. Syntax própria: fields, filter, stats (count, avg, sum), sort, parse (regex). Visualização em gráficos. Query múltiplos log groups. Paga por dados escaneados.",
        topic: "cloudwatch-logs",
        domain: "monitoring"
    },
    {
        id: 'mon_018',
        question: "Uma empresa quer que um alarme CloudWatch NÃO dispare durante janelas de manutenção programadas. Como?",
        options: [
            "Desabilitar alarme manualmente",
            "SNS filter policy",
            "Composite Alarm com Suppressor Alarm — alarm suppressor ativo durante maintenance window impede composite alarm de mudar state",
            "EventBridge schedule disable"
        ],
        correct: [2],
        explanation: "✅ Alarm Suppression: composite alarm com suppressor. Quando suppressor está em ALARM (maintenance window ativa), composite alarm não muda de state. Maintenance window → Lambda seta suppressor → alarmes suprimidos.",
        topic: "cloudwatch",
        domain: "monitoring"
    },
    {
        id: 'mon_019',
        question: "Uma aplicação precisa de métricas com resolução de 1 segundo para detectar spikes muito rápidos. Qual configuração?",
        options: [
            "Standard resolution (60s)",
            "Detailed Monitoring (1 min)",
            "Enhanced Monitoring",
            "High-Resolution Custom Metrics — PutMetricData com StorageResolution = 1 segundo. Alarme com period de 10s para detecção rápida",
        ],
        correct: [3],
        explanation: "✅ High-Resolution: StorageResolution=1 no PutMetricData. Métricas armazenadas com granularidade de 1s. Alarmes com period 10s, 30s ou múltiplos de 60s. Custo maior que standard. Ideal para trading, gaming, real-time systems.",
        topic: "cloudwatch",
        domain: "monitoring"
    },
    {
        id: 'mon_020',
        question: "Uma empresa quer detectar quando um padrão específico de eventos ocorre em sequência (ex: 3 failed logins seguidos do mesmo IP). Qual feature do EventBridge?",
        options: [
            "Multiple rules",
            "EventBridge Pipes com enrichment — ou CloudWatch Logs metric filter com threshold, ou custom Lambda com state tracking",
            "EventBridge Scheduler",
            "Simple event pattern"
        ],
        correct: [1],
        explanation: "✅ Para correlação de eventos sequenciais: CloudWatch Logs metric filter (conta ocorrências em window) + alarme com threshold. Ou Lambda com DynamoDB tracking state. EventBridge patterns são stateless (single event match).",
        topic: "eventbridge",
        domain: "monitoring"
    },
    {
        id: 'mon_021',
        question: "Uma equipe quer sampling de traces X-Ray (não rastrear 100% das requests em produção para reduzir custo). Como configurar?",
        options: [
            "X-Ray Sampling Rules — define rate (ex: 5% das requests) + reservoir (mínimo fixo por segundo). Rules por service name, URL path, HTTP method",
            "Desabilitar X-Ray em algumas instâncias",
            "Random if/else no código",
            "CloudWatch Agent sampling"
        ],
        correct: [0],
        explanation: "✅ Sampling Rules: reservoir (requests fixas/s garantidas) + rate (% do restante). Default: 1/s + 5%. Custom rules por service/path (ex: /health 0%, /payment 100%). Centralizado no X-Ray console. Sem redeploy para mudar.",
        topic: "xray",
        domain: "monitoring"
    },
    {
        id: 'mon_022',
        question: "Uma empresa quer reter logs do CloudWatch por 1 ano para compliance mas reduzir custos de armazenamento. Qual estratégia?",
        options: [
            "Retention policy de 1 ano no log group",
            "Deletar logs antigos",
            "Retention policy curta (30 dias) no CloudWatch + export para S3 (Glacier) via subscription filter ou scheduled export para retenção longa com custo menor",
            "Comprimir logs no CloudWatch"
        ],
        correct: [2],
        explanation: "✅ CloudWatch Logs: caro para retenção longa. Estratégia: retention 30 dias + subscription filter → Kinesis Firehose → S3 (real-time) ou CreateExportTask (batch). S3 lifecycle → Glacier para compliance. 90% mais barato.",
        topic: "cloudwatch-logs",
        domain: "monitoring"
    },
    {
        id: 'mon_023',
        question: "Uma empresa quer monitorar a saúde de endpoints on-premises que não são acessíveis pela internet. Como usar CloudWatch?",
        options: [
            "Route 53 Health Checks",
            "Custom script no servidor",
            "Ping externo",
            "CloudWatch Synthetics Canaries com VPC configuration — canary roda em VPC com conectividade ao on-premises (VPN/DX) e monitora endpoints privados",
        ],
        correct: [3],
        explanation: "✅ Synthetics Canaries: scripts (Node.js/Python) que simulam usuário. VPC-enabled: roda em subnet com acesso ao on-premises via VPN/Direct Connect. Monitora endpoints privados. Screenshots, HAR files, métricas de disponibilidade.",
        topic: "cloudwatch",
        domain: "monitoring"
    },
    {
        id: 'mon_024',
        question: "Uma equipe quer correlacionar logs, métricas e traces de uma mesma request para troubleshooting rápido. Qual abordagem?",
        options: [
            "Buscar manualmente em cada serviço",
            "Correlation: incluir X-Ray trace ID nos logs (structured logging) + CloudWatch ServiceLens que unifica metrics, logs e traces por service",
            "Apenas X-Ray",
            "Apenas CloudWatch Logs"
        ],
        correct: [1],
        explanation: "✅ ServiceLens: visão unificada de health por service (métricas + traces + logs). Structured logging com trace_id permite correlação. Clica em trace → vê logs relacionados. Clica em métrica → vê traces do período. Observabilidade completa.",
        topic: "xray",
        domain: "monitoring"
    },
    {
        id: 'mon_025',
        question: "Uma empresa quer criar alarmes automaticamente para todas as Lambda functions (errors > 0) sem configurar manualmente cada uma. Como?",
        options: [
            "CloudFormation/CDK com loop sobre functions OU CloudWatch Metric Math SEARCH expression que agrega métricas de todas as functions dinamicamente",
            "Criar alarme por função manualmente",
            "Composite Alarm",
            "EventBridge rule"
        ],
        correct: [0],
        explanation: "✅ SEARCH expression: SEARCH('{AWS/Lambda,FunctionName} MetricName=\"Errors\"', 'Sum') retorna métricas de TODAS as functions. Alarme na expressão. Novas functions incluídas automaticamente. Sem manutenção manual.",
        topic: "cloudwatch",
        domain: "monitoring"
    },
    {
        id: 'mon_026',
        question: "Uma empresa quer que eventos do EventBridge sejam entregues garantidamente mesmo se o target (Lambda) estiver temporariamente indisponível. Como?",
        options: [
            "Aceitar perda de eventos",
            "Duplicar regra",
            "EventBridge retry policy (max attempts + max age) + Dead Letter Queue (SQS) para eventos que falharam após todas as retries",
            "Archive apenas"
        ],
        correct: [2],
        explanation: "✅ Retry policy: configura max attempts (até 185) e max event age (até 24h). Se todas retries falham, evento vai para DLQ (SQS). Nenhum evento perdido. DLQ permite reprocessamento posterior. Configurável por target.",
        topic: "eventbridge",
        domain: "monitoring"
    },
    {
        id: 'mon_027',
        question: "Uma equipe quer visualizar a topologia completa de sua aplicação distribuída (quais serviços chamam quais, latência entre eles). Qual feature?",
        options: [
            "CloudWatch Dashboard manual",
            "CloudWatch Contributor Insights",
            "VPC Flow Logs",
            "X-Ray Service Map — visualização automática da topologia mostrando nodes (serviços), edges (chamadas), latência, error rates e throughput",
        ],
        correct: [3],
        explanation: "✅ Service Map: gerado automaticamente dos traces. Cada node = serviço (Lambda, DynamoDB, external API). Edges mostram chamadas com latência/errors. Cores indicam health (verde/amarelo/vermelho). Drill-down para traces específicos.",
        topic: "xray",
        domain: "monitoring"
    },
    {
        id: 'mon_028',
        question: "Uma empresa quer identificar os top contributors para um problema (ex: quais IPs geram mais 5xx errors). Qual feature?",
        options: [
            "CloudWatch Logs Insights manual",
            "CloudWatch Contributor Insights — analisa log data em real-time e cria time series dos top-N contributors por qualquer campo do log",
            "X-Ray analytics",
            "Athena query"
        ],
        correct: [1],
        explanation: "✅ Contributor Insights: regras que analisam logs continuamente. Identifica top contributors (IPs, URLs, user agents) para qualquer métrica. Real-time. Útil para: top talkers, most errored endpoints, heaviest users.",
        topic: "cloudwatch-logs",
        domain: "monitoring"
    },
    {
        id: 'mon_029',
        question: "Uma empresa quer monitorar a experiência do usuário final (page load time, API response time) de diferentes localizações geográficas. Qual serviço?",
        options: [
            "CloudWatch Synthetics — canaries que simulam user journeys de múltiplas regiões AWS, medem disponibilidade e latência do ponto de vista do cliente",
            "X-Ray no backend",
            "Real User Monitoring apenas",
            "Ping test"
        ],
        correct: [0],
        explanation: "✅ Synthetics Canaries: scripts automatizados rodando em schedule (1 min a 1h). Simulam navegação (clicks, forms, API calls). Múltiplas regiões. Screenshots em falha. Métricas: availability, latency. Alarmes em degradação.",
        topic: "cloudwatch",
        domain: "monitoring"
    },
    {
        id: 'mon_030',
        question: "Uma equipe quer transformar eventos do EventBridge antes de entregar ao target (ex: extrair apenas campos relevantes do evento). Como?",
        options: [
            "Lambda intermediária",
            "SQS message transform",
            "EventBridge Input Transformer — template que extrai campos do evento (input path) e formata output customizado (input template) antes de enviar ao target",
            "API Gateway mapping"
        ],
        correct: [2],
        explanation: "✅ Input Transformer: input path extrai variáveis do evento JSON ($.detail.instance-id). Input template formata output (\"Instance <instance> changed state\"). Target recebe apenas dados relevantes. Sem Lambda intermediária.",
        topic: "eventbridge",
        domain: "monitoring"
    },
    {
        id: 'mon_031',
        question: "Uma empresa quer detectar automaticamente quando uma métrica muda de comportamento (ex: latência que era estável começa a subir gradualmente). Qual abordagem?",
        options: [
            "Threshold estático alto",
            "Percentile alarm",
            "Manual monitoring",
            "CloudWatch Anomaly Detection com alarme — detecta desvios do padrão aprendido mesmo que valor absoluto não ultrapasse threshold fixo",
        ],
        correct: [3],
        explanation: "✅ Anomaly Detection: detecta mudanças sutis que threshold estático não pega. Ex: latência normal 50ms sobe para 80ms (abaixo do threshold 200ms mas anômalo). Band se ajusta a sazonalidade. Alarme: ANOMALY_DETECTION_BAND.",
        topic: "cloudwatch",
        domain: "monitoring"
    },
    {
        id: 'mon_032',
        question: "Uma empresa quer agendar tarefas recorrentes (ex: invocar Lambda todo dia às 2h para cleanup) sem usar CloudWatch Events (legacy). Qual serviço?",
        options: [
            "Cron no EC2",
            "Amazon EventBridge Scheduler — scheduler serverless com one-time e recurring schedules, timezone support, e flexible time windows",
            "Step Functions Wait state",
            "Lambda scheduled event (CloudWatch Events)"
        ],
        correct: [1],
        explanation: "✅ EventBridge Scheduler: evolução do CloudWatch Events scheduled rules. Suporta: rate, cron, one-time. Timezone-aware. Flexible time window (distribui execuções). Retry policy + DLQ. Mais features que rules com schedule.",
        topic: "eventbridge",
        domain: "monitoring"
    },
    {
        id: 'mon_033',
        question: "Uma equipe quer que logs de aplicação incluam automaticamente request ID, user ID e trace ID em formato estruturado para facilitar queries. Qual prática?",
        options: [
            "Structured Logging (JSON) com campos padronizados — usar Powertools for AWS Lambda ou logging library que inclui correlation IDs automaticamente",
            "Console.log com strings",
            "Log tudo em uma linha",
            "Separate log files"
        ],
        correct: [0],
        explanation: "✅ Structured Logging: JSON com campos consistentes (timestamp, level, message, request_id, trace_id, user_id). Powertools: injeta automaticamente. CloudWatch Logs Insights parseia JSON nativamente. Metric Filters em campos específicos.",
        topic: "cloudwatch-logs",
        domain: "monitoring"
    },
    {
        id: 'mon_034',
        question: "Uma empresa quer ser alertada quando custos AWS ultrapassam budget E quando há anomalias de custo inesperadas. Qual combinação?",
        options: [
            "Billing Dashboard manual",
            "AWS Budgets (threshold alerts) + Cost Anomaly Detection (ML detecta gastos anômalos) + SNS/Chatbot notifications",
            "CloudWatch Billing alarm apenas",
            "Trusted Advisor"
        ],
        correct: [1],
        explanation: "✅ Budgets: alerta em threshold fixo (80%, 100% do budget). Cost Anomaly Detection: ML identifica gastos inesperados (novo serviço, spike). Complementares: Budgets para planejado, Anomaly Detection para inesperado. Ambos → SNS/Chatbot.",
        topic: "cloudwatch",
        domain: "monitoring"
    }
];

window.monitoringQuestions = monitoringQuestions;
