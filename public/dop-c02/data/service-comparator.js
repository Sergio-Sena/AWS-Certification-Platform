// Service Comparator — Tabelas comparativas de serviços AWS confusos no exame
// Compartilhado entre todas as certificações

const serviceComparator = {
    // === COMPUTE ===
    'lambda-vs-fargate': {
        title: 'Lambda vs Fargate',
        exams: ['CLF', 'DVA', 'SAA', 'DOP'],
        table: [
            ['Aspecto', 'Lambda', 'Fargate'],
            ['Modelo', 'Funções event-driven', 'Containers serverless'],
            ['Timeout', '15 min máximo', 'Sem limite'],
            ['Memória', 'Até 10 GB', 'Até 120 GB'],
            ['Stateful', 'Não (stateless)', 'Sim (pode ter volume)'],
            ['Pricing', 'Por request + duração (ms)', 'Por vCPU + memória (por segundo)'],
            ['Cold start', 'Sim (mitigar com Provisioned)', 'Mínimo (task já running)'],
            ['Use case', 'Eventos curtos, APIs, triggers', 'Processos longos, containers existentes']
        ],
        keyword_signal: "Curto + event-driven = Lambda. Longo + container = Fargate."
    },

    'ec2-vs-lambda': {
        title: 'EC2 vs Lambda',
        exams: ['CLF', 'SAA'],
        table: [
            ['Aspecto', 'EC2', 'Lambda'],
            ['Controle', 'Total (OS, runtime, patches)', 'Nenhum (só código)'],
            ['Scaling', 'Manual/Auto Scaling Group', 'Automático por request'],
            ['Custo idle', 'Paga mesmo parado', 'Zero se não executar'],
            ['Persistência', 'Disco local (EBS)', 'Stateless (/tmp até 10GB)'],
            ['Licensing', 'BYOL possível', 'Não aplicável'],
            ['Use case', 'Workloads 24/7, GPU, custom OS', 'Event-driven, intermitente, microservices']
        ],
        keyword_signal: "Precisa de OS/controle = EC2. Sem gerenciar infra = Lambda."
    },

    // === DATABASE ===
    'rds-vs-dynamodb': {
        title: 'RDS vs DynamoDB',
        exams: ['CLF', 'DVA', 'SAA'],
        table: [
            ['Aspecto', 'RDS', 'DynamoDB'],
            ['Tipo', 'Relacional (SQL)', 'NoSQL (key-value/document)'],
            ['Schema', 'Rígido (tabelas, colunas)', 'Flexível (schema-on-read)'],
            ['Scaling', 'Vertical (instance size)', 'Horizontal (ilimitado)'],
            ['Latência', 'Milissegundos', 'Single-digit ms (consistente)'],
            ['Transações', 'ACID completo', 'ACID limitado (TransactWriteItems)'],
            ['Use case', 'Joins complexos, relações, reports', 'Alta escala, key-value, gaming, IoT']
        ],
        keyword_signal: "Joins/relações = RDS. Escala massiva + ms latência = DynamoDB."
    },

    'aurora-vs-rds': {
        title: 'Aurora vs RDS Standard',
        exams: ['SAA', 'DVA'],
        table: [
            ['Aspecto', 'Aurora', 'RDS Standard'],
            ['Performance', '5x MySQL, 3x PostgreSQL', 'Performance padrão'],
            ['Storage', 'Auto-scaling até 128TB, 6 cópias em 3 AZs', 'EBS, até 64TB'],
            ['Replicas', 'Até 15 read replicas (<10ms lag)', 'Até 5 (async)'],
            ['Failover', '<30 segundos', '60-120 segundos'],
            ['Global', 'Aurora Global Database (<1s replication)', 'Cross-region read replica'],
            ['Serverless', 'Aurora Serverless v2 (auto-scale compute)', 'Não disponível'],
            ['Custo', '~20% mais caro que RDS', 'Baseline mais barato']
        ],
        keyword_signal: "Alta disponibilidade + performance = Aurora. Custo mínimo + simples = RDS."
    },

    // === STORAGE ===
    's3-vs-ebs-vs-efs': {
        title: 'S3 vs EBS vs EFS',
        exams: ['CLF', 'SAA', 'DVA'],
        table: [
            ['Aspecto', 'S3', 'EBS', 'EFS'],
            ['Tipo', 'Object storage', 'Block storage', 'File storage (NFS)'],
            ['Acesso', 'HTTP/API (qualquer lugar)', '1 EC2 por vez (exceto io2)', 'Múltiplas EC2 simultaneamente'],
            ['Durabilidade', '99.999999999% (11 noves)', '99.999%', '99.999999999%'],
            ['Scaling', 'Ilimitado', 'Provisioned (até 64TB)', 'Auto-scaling (petabytes)'],
            ['Use case', 'Data lake, backup, static web', 'Boot disk, databases, apps', 'Shared files, CMS, home dirs']
        ],
        keyword_signal: "Objetos/web/backup = S3. Disco de EC2 = EBS. Compartilhado Linux = EFS."
    },

    // === MESSAGING ===
    'sqs-vs-sns-vs-eventbridge': {
        title: 'SQS vs SNS vs EventBridge',
        exams: ['DVA', 'SAA', 'DOP'],
        table: [
            ['Aspecto', 'SQS', 'SNS', 'EventBridge'],
            ['Modelo', 'Queue (pull)', 'Pub/Sub (push)', 'Event bus (rules)'],
            ['Consumers', '1 consumer group', 'Múltiplos subscribers', 'Múltiplos targets com filtro'],
            ['Retry', 'Automático + DLQ', 'Retry por destination', 'Retry + DLQ + archive'],
            ['Ordering', 'FIFO disponível', 'FIFO disponível', 'Não garantido'],
            ['Filtering', 'Não nativo', 'Message filtering', 'Event pattern matching (avançado)'],
            ['Use case', 'Decouple, buffer, worker', 'Fan-out, notificações', 'Event-driven architecture, SaaS']
        ],
        keyword_signal: "Buffer/decouple = SQS. Fan-out = SNS. Event-driven routing = EventBridge."
    },

    // === SECURITY ===
    'sg-vs-nacl': {
        title: 'Security Group vs NACL',
        exams: ['CLF', 'SAA', 'DVA'],
        table: [
            ['Aspecto', 'Security Group', 'NACL'],
            ['Nível', 'Instance (ENI)', 'Subnet'],
            ['Stateful', 'Sim (retorno automático)', 'Não (regras in+out separadas)'],
            ['Default', 'Deny all in, allow all out', 'Allow all in+out'],
            ['Rules', 'Apenas ALLOW', 'ALLOW e DENY'],
            ['Evaluation', 'Todas as regras', 'Ordem numérica (primeira match)'],
            ['Use case', 'Firewall por instância', 'Camada extra na subnet']
        ],
        keyword_signal: "Stateful + instance = SG. Stateless + subnet + deny rules = NACL."
    },

    'kms-vs-cloudhsm': {
        title: 'KMS vs CloudHSM',
        exams: ['SAA', 'CLF'],
        table: [
            ['Aspecto', 'KMS', 'CloudHSM'],
            ['Tenancy', 'Multi-tenant (compartilhado)', 'Single-tenant (dedicado)'],
            ['Controle', 'AWS gerencia hardware', 'Você controla hardware'],
            ['Compliance', 'FIPS 140-2 Level 3', 'FIPS 140-2 Level 3'],
            ['Integração', 'Nativa com 100+ serviços AWS', 'Requer custom code'],
            ['Custo', '$1/chave/mês + API calls', '$~1.50/hora por HSM'],
            ['Use case', '99% dos casos de criptografia', 'Compliance que exige HSM dedicado']
        ],
        keyword_signal: "Criptografia padrão = KMS. Compliance exige dedicado/single-tenant = CloudHSM."
    },

    // === NETWORKING ===
    'direct-connect-vs-vpn': {
        title: 'Direct Connect vs Site-to-Site VPN',
        exams: ['SAA', 'CLF'],
        table: [
            ['Aspecto', 'Direct Connect', 'Site-to-Site VPN'],
            ['Meio', 'Fibra dedicada (não internet)', 'Internet pública (criptografada)'],
            ['Latência', 'Consistente e baixa', 'Variável (internet)'],
            ['Bandwidth', '1/10/100 Gbps dedicado', 'Limitado pela internet (~1.25 Gbps)'],
            ['Setup time', 'Semanas/meses', 'Minutos/horas'],
            ['Custo', 'Alto (port + data transfer)', 'Baixo (por hora + transfer)'],
            ['Redundância', '2 connections em locations diferentes', 'VPN sobre Direct Connect como backup'],
            ['Use case', 'Workloads pesados, latência crítica', 'Backup rápido, conectividade imediata']
        ],
        keyword_signal: "Dedicado + consistente + alto bandwidth = Direct Connect. Rápido + barato + backup = VPN."
    },

    // === AI/ML (AIF) ===
    'rag-vs-finetuning': {
        title: 'RAG vs Fine-tuning',
        exams: ['AIF'],
        table: [
            ['Aspecto', 'RAG', 'Fine-tuning'],
            ['Problema', 'Conhecimento (dados factuais)', 'Comportamento (estilo/formato)'],
            ['Dados mudam', 'Atualiza documentos = resposta atualizada', 'Precisa retreinar (caro)'],
            ['Custo', 'Baixo (storage + embedding)', 'Alto (compute GPU por horas)'],
            ['Alucinação', 'Reduz (grounded em fontes)', 'Não reduz diretamente'],
            ['Complexidade', 'Média (chunking + vector DB)', 'Alta (dataset + training + eval)'],
            ['Quando usar', 'FAQ, docs internos, dados vivos', 'Mudar tom, formato, domínio específico']
        ],
        keyword_signal: "Dados mudam frequentemente = RAG. Mudar estilo/comportamento = Fine-tuning."
    },

    'bedrock-vs-sagemaker': {
        title: 'Bedrock vs SageMaker',
        exams: ['AIF'],
        table: [
            ['Aspecto', 'Bedrock', 'SageMaker'],
            ['Modelo', 'Serverless (API)', 'Managed endpoints (instâncias)'],
            ['FMs disponíveis', 'Claude, Titan, Llama, Mistral', 'JumpStart + custom models'],
            ['Customização', 'Fine-tuning limitado + RAG', 'Treinar do zero, full control'],
            ['Pricing', 'Pay-per-token', 'Pay-per-hour (instância)'],
            ['Infra', 'Zero gerenciamento', 'Gerencia endpoints, scaling'],
            ['Quando usar', 'Consumir FMs prontos, RAG, Agents', 'Treinar modelos custom, MLOps completo']
        ],
        keyword_signal: "Usar FM pronto sem infra = Bedrock. Treinar seu próprio modelo = SageMaker."
    }
};

window.serviceComparator = serviceComparator;
