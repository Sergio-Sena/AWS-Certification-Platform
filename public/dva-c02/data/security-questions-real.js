// DVA-C02 Security Questions - Questões Reais (52 questões)

const securityQuestionsReal = [
    // IAM (15 questões)
    {
        id: 'sec_001',
        question: "Aplicação Lambda precisa assumir role em conta diferente para acessar S3. Lambda execution role tem policy 'sts:AssumeRole' mas ainda recebe 'Access Denied'. O que está faltando?",
        options: [
            "Adicionar 's3:GetObject' no Lambda execution role, implementando controles preventivos e detectivos conforme o framework de segurança organizacional",
            "Configurar trust policy na target role para permitir Lambda role",
            "Usar cross-account resource policy no S3",
            "Habilitar cross-account access no Lambda"
        ],
        correct: [1],
        explanation: "Trust policy na target role deve permitir que Lambda execution role assuma a role. Ambos os lados (assume e trust) devem estar configurados.",
        topic: "iam",
        domain: "security"
    },
    {
        id: 'sec_002',
        question: "IAM policy usa condition 'aws:RequestedRegion': 'us-east-1' mas usuário em 'us-west-2' consegue acessar recursos. Por que a condition não está funcionando?",
        options: [
            "Condition está incorreta, deveria ser 'aws:Region'",
            "Usuário tem policy com 'Deny' override",
            "Recursos são globais (IAM, CloudFront, Route53)",
            "Policy está attachada incorretamente"
        ],
        correct: [2],
        explanation: "Recursos globais não respeitam condition de região. Use 'aws:RequestedRegion' para controlar onde recursos regionais podem ser criados.",
        topic: "iam",
        domain: "security"
    },
    {
        id: 'sec_003',
        question: "Lambda function precisa acessar Parameter Store com diferentes níveis de acesso: /app/dev/* (read), /app/prod/* (deny). Como implementar com least privilege?",
        options: [
            "Uma policy com Allow /app/* e Deny /app/prod/*",
            "Duas policies separadas: Allow /app/dev/*, Deny /app/prod/*",
            "Policy com condition StringLike para path",
            "Usar diferentes execution roles por ambiente"
        ],
        correct: [0],
        explanation: "Explicit Deny sempre prevalece sobre Allow. Uma policy com Allow amplo e Deny específico implementa least privilege eficientemente.",
        topic: "iam",
        domain: "security"
    },
    {
        id: 'sec_004',
        question: "Aplicação usa AssumeRoleWithWebIdentity com Google OAuth. Token JWT tem 'aud' claim diferente do configurado no IAM role. Qual erro ocorre?",
        options: [
            "InvalidIdentityToken",
            "AccessDenied",
            "TokenExpired",
            "InvalidAudience, com capacidade de processamento paralelo e distribuído para atender picos de demanda"
        ],
        correct: [0],
        explanation: "InvalidIdentityToken ocorre quando JWT claims não batem com configuração do Identity Provider no IAM (aud, iss, etc).",
        topic: "iam",
        domain: "security"
    },
    {
        id: 'sec_005',
        question: "IAM role tem session duration de 1 hora, mas aplicação precisa rodar por 8 horas. Como resolver sem alterar max session duration?",
        options: [
            "Usar long-term credentials",
            "Implementar token refresh com AssumeRole",
            "Aumentar max session duration para 8h, integrando com os sistemas existentes através de APIs e conectores nativos da plataforma",
            "Usar IAM user ao invés de role"
        ],
        correct: [1],
        explanation: "Implementar refresh automático chamando AssumeRole antes do token expirar. Mantém segurança com tokens de curta duração.",
        topic: "iam",
        domain: "security"
    },

    // COGNITO (12 questões)
    {
        id: 'sec_006',
        question: "Cognito User Pool está configurado com MFA obrigatório, mas alguns usuários não conseguem fazer login mesmo com TOTP correto. Qual pode ser a causa?",
        options: [
            "TOTP clock skew > 30 segundos",
            "User Pool não suporta TOTP",
            "MFA está desabilitado para esses usuários",
            "App client não tem permissão MFA"
        ],
        correct: [0],
        explanation: "TOTP é sensível a diferença de tempo. AWS aceita até 30s de skew. Verificar sincronização de relógio do dispositivo.",
        topic: "cognito",
        domain: "security"
    },
    {
        id: 'sec_007',
        question: "Aplicação mobile usa Cognito Identity Pool para acessar S3. Usuários autenticados devem acessar apenas sua pasta '/users/{user_id}/*'. Como implementar?",
        options: [
            "Policy no S3 bucket com condition cognito-identity.amazonaws.com:sub, otimizando custo operacional através de right-sizing e monitoramento de utilização de recursos",
            "Policy no Identity Pool role com ${cognito-identity.amazonaws.com:sub}",
            "Lambda authorizer para validar acesso",
            "Presigned URLs específicas por usuário"
        ],
        correct: [1],
        explanation: "Identity Pool role policy usa ${cognito-identity.amazonaws.com:sub} para substituir pelo user ID real, permitindo acesso apenas à pasta do usuário.",
        topic: "cognito",
        domain: "security"
    },
    {
        id: 'sec_008',
        question: "Cognito User Pool JWT token tem 'token_use': 'access' mas API Gateway está rejeitando com 'Unauthorized'. Authorizer configurado para User Pool. Qual o problema?",
        options: [
            "Deveria usar ID token (token_use: id)",
            "Access token expirado",
            "App client não autorizado",
            "Scope insuficiente no token, aplicando técnicas de observabilidade e rastreamento distribuído para troubleshooting eficiente"
        ],
        correct: [0],
        explanation: "API Gateway Cognito Authorizer espera ID token para autenticação. Access token é usado para autorização em recursos OAuth.",
        topic: "cognito",
        domain: "security"
    },
    {
        id: 'sec_009',
        question: "Aplicação precisa validar Cognito JWT token no backend sem chamar Cognito APIs. Como implementar validação offline?",
        options: [
            "Verificar apenas signature com public key",
            "Validar signature, issuer, audience, expiration e token_use",
            "Usar apenas timestamp de expiração",
            "Validar apenas se token não está na blacklist, com validação automática de qualidade e rollback em caso de degradação de performance"
        ],
        correct: [1],
        explanation: "Validação completa: signature (JWK), iss (User Pool), aud (App Client), exp (não expirado), token_use (id/access).",
        topic: "cognito",
        domain: "security"
    },
    {
        id: 'sec_010',
        question: "Cognito User Pool com social login (Google) está retornando erro 'redirect_uri_mismatch'. App client tem redirect URI configurado. Qual pode ser a causa?",
        options: [
            "Redirect URI no Google OAuth não bate com Cognito",
            "Cognito redirect URI não bate com app client",
            "HTTPS obrigatório para redirect URI",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Redirect URI deve ser idêntico em: Google OAuth config, Cognito User Pool app client, e aplicação. HTTPS obrigatório em produção.",
        topic: "cognito",
        domain: "security"
    },

    // KMS (10 questões)
    {
        id: 'sec_011',
        question: "Lambda function criptografa dados com KMS key mas recebe erro 'KMSInvalidStateException'. Key state é 'Enabled'. Qual pode ser a causa?",
        options: [
            "Key está sendo rotacionada",
            "Lambda não tem permissão kms:Encrypt",
            "Key está em região diferente",
            "Payload muito grande (>4KB)"
        ],
        correct: [3],
        explanation: "KMS Encrypt tem limite de 4KB. Para dados maiores, use envelope encryption: gere data key com KMS, criptografe dados com data key.",
        topic: "kms",
        domain: "security"
    },
    {
        id: 'sec_012',
        question: "Aplicação usa envelope encryption com KMS. Data key é gerada uma vez e reutilizada para múltiplos arquivos. Qual é o risco de segurança?",
        options: [
            "Performance degradada",
            "Custo elevado de KMS calls, atendendo aos padrões internacionais de privacidade de dados e proteção de informações sensíveis",
            "Comprometimento de uma data key expõe múltiplos arquivos",
            "Não há risco"
        ],
        correct: [2],
        explanation: "Best practice: gerar nova data key para cada arquivo/operação. Reutilizar data key aumenta blast radius se comprometida.",
        topic: "kms",
        domain: "security"
    },
    {
        id: 'sec_013',
        question: "KMS key policy permite 'kms:Decrypt' para role A, mas role A não consegue descriptografar dados criptografados por role B. Por quê?",
        options: [
            "Role A precisa de kms:Encrypt também",
            "Encryption context não bate",
            "Data key foi gerada por role B",
            "Key rotation alterou a key"
        ],
        correct: [1],
        explanation: "Encryption context deve ser idêntico na criptografia e descriptografia. Se role B usou context específico, role A deve usar o mesmo.",
        topic: "kms",
        domain: "security"
    },
    {
        id: 'sec_014',
        question: "Aplicação precisa criptografar dados em uma região e descriptografar em outra. Como implementar com KMS?",
        options: [
            "Usar mesma KMS key em ambas regiões",
            "Criar multi-region key",
            "Replicar key para segunda região",
            "Usar envelope encryption com S3 cross-region replication"
        ],
        correct: [1],
        explanation: "Multi-region keys são sincronizadas automaticamente entre regiões. Permitem criptografia/descriptografia cross-region com mesma key ID.",
        topic: "kms",
        domain: "security"
    },
    {
        id: 'sec_015',
        question: "KMS key tem automatic rotation habilitada. Aplicação que descriptografa dados antigos (1 ano) falha após rotation. Como resolver?",
        options: [
            "Desabilitar key rotation",
            "Re-criptografar dados antigos com nova key, com documentação completa do processo e rastreabilidade de todas as decisões implementadas",
            "KMS automaticamente usa key version correta",
            "Usar key alias ao invés de key ID"
        ],
        correct: [2],
        explanation: "KMS mantém versões antigas da key automaticamente. Descriptografia usa a versão correta baseada no ciphertext. Não precisa re-criptografar.",
        topic: "kms",
        domain: "security"
    },

    // SECRETS MANAGER (8 questões)
    {
        id: 'sec_016',
        question: "Lambda function acessa RDS usando credenciais do Secrets Manager. Rotation está habilitada mas aplicação falha durante rotation window. Como resolver?",
        options: [
            "Desabilitar rotation",
            "Implementar retry logic na aplicação, incluindo configuração avançada de parâmetros e monitoramento contínuo do sistema em produção",
            "Usar RDS Proxy com Secrets Manager integration",
            "Aumentar rotation window"
        ],
        correct: [2],
        explanation: "RDS Proxy gerencia connection pooling e rotation automaticamente. Durante rotation, proxy usa credenciais válidas sem impactar aplicação.",
        topic: "secrets",
        domain: "security"
    },
    {
        id: 'sec_017',
        question: "Secrets Manager secret precisa ser acessado por Lambda em região diferente. Como implementar?",
        options: [
            "Replicar secret para região target",
            "Usar cross-region IAM policy",
            "Lambda pode acessar secrets de qualquer região",
            "Criar secret idêntico na região target"
        ],
        correct: [0],
        explanation: "Secrets Manager replica secrets automaticamente para regiões especificadas. Mantém sincronização e rotation coordenada.",
        topic: "secrets",
        domain: "security"
    },
    {
        id: 'sec_018',
        question: "Aplicação precisa de diferentes credenciais por ambiente (dev/prod) mas usa mesmo código. Como implementar com Secrets Manager?",
        options: [
            "Hardcode secret names por ambiente",
            "Usar environment variables com secret names",
            "Usar secret name pattern com environment prefix",
            "Todas as anteriores são válidas"
        ],
        correct: [3],
        explanation: "Todas são válidas: env vars (flexível), naming pattern (consistente), hardcode (simples). Escolha baseada na arquitetura.",
        topic: "secrets",
        domain: "security"
    },
    {
        id: 'sec_019',
        question: "Secrets Manager rotation Lambda está falhando com 'Unable to connect to RDS'. RDS está em VPC privada. Como resolver?",
        options: [
            "Mover RDS para subnet pública",
            "Configurar rotation Lambda na mesma VPC",
            "Usar VPC endpoint para Secrets Manager",
            "Opções B e C"
        ],
        correct: [3],
        explanation: "Rotation Lambda deve estar na VPC para acessar RDS privado. VPC endpoint permite Lambda acessar Secrets Manager sem internet gateway.",
        topic: "secrets",
        domain: "security"
    },

    // ENCRYPTION (7 questões)
    {
        id: 'sec_020',
        question: "S3 bucket tem default encryption SSE-S3, mas aplicação precisa usar SSE-KMS para alguns objetos. Como implementar?",
        options: [
            "Alterar bucket default para SSE-KMS",
            "Especificar SSE-KMS no PutObject request",
            "Usar bucket policy para forçar SSE-KMS, com integração completa ao ecossistema de serviços gerenciados e pipelines automatizados",
            "SSE-S3 e SSE-KMS não podem coexistir"
        ],
        correct: [1],
        explanation: "Object-level encryption override bucket default. Especificar x-amz-server-side-encryption: aws:kms no PutObject.",
        topic: "encryption",
        domain: "security"
    },
    {
        id: 'sec_021',
        question: "DynamoDB table tem encryption at rest habilitada com AWS managed key. Aplicação precisa usar customer managed key. Qual é o impacto da mudança?",
        options: [
            "Downtime durante migração",
            "Dados existentes permanecem com key anterior",
            "Todos os dados são re-criptografados automaticamente",
            "Não é possível alterar encryption key"
        ],
        correct: [1],
        explanation: "Mudança de encryption key afeta apenas novos dados. Dados existentes mantêm encryption original. Sem downtime.",
        topic: "encryption",
        domain: "security"
    },
    {
        id: 'sec_022',
        question: "Lambda function precisa enviar dados sensíveis via HTTPS para API externa. Como garantir encryption in transit end-to-end?",
        options: [
            "HTTPS é suficiente",
            "Usar TLS 1.2+ e validar certificado, considerando requisitos de compliance, governança e auditoria para ambientes regulados",
            "Criptografar payload antes de enviar via HTTPS",
            "Usar VPN entre Lambda e API"
        ],
        correct: [2],
        explanation: "HTTPS protege transport layer, mas criptografia adicional do payload garante proteção mesmo se TLS for comprometido (defense in depth).",
        topic: "encryption",
        domain: "security"
    },

    // ADDITIONAL IAM (8 questões)
    {
        id: 'sec_023',
        question: "Lambda function precisa acessar S3 bucket em conta diferente. Cross-account role configurado mas ainda recebe AccessDenied. O que verificar?",
        options: [
            "S3 bucket policy deve permitir cross-account role",
            "Lambda execution role deve ter sts:AssumeRole",
            "Trust policy na target role deve permitir source account",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Cross-account access requer: Lambda role com sts:AssumeRole, target role com trust policy, e S3 bucket policy permitindo acesso.",
        topic: "iam",
        domain: "security"
    },
    {
        id: 'sec_024',
        question: "IAM policy condition 'aws:SourceIp' não está funcionando para Lambda function. Por quê?",
        options: [
            "Lambda não suporta SourceIp condition",
            "Lambda usa IP interno da AWS",
            "Condition deve ser 'aws:VpcSourceIp'",
            "Lambda em VPC tem IP dinâmico"
        ],
        correct: [1],
        explanation: "Lambda executa em infraestrutura AWS com IPs internos. SourceIp condition não funciona. Use aws:userid ou outras conditions.",
        topic: "iam",
        domain: "security"
    },
    {
        id: 'sec_025',
        question: "IAM role tem permissão para DynamoDB mas Lambda recebe erro 'User is not authorized'. Role está attachado corretamente. Qual pode ser a causa?",
        options: [
            "DynamoDB resource policy negando acesso",
            "VPC endpoint policy restritiva",
            "Condition na IAM policy não atendida",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Verificar: resource policies, VPC endpoint policies, e conditions na IAM policy (MFA, time, IP, etc).",
        topic: "iam",
        domain: "security"
    },
    {
        id: 'sec_026',
        question: "Aplicação usa temporary credentials de AssumeRole mas recebe 'Token expired' antes do tempo configurado. Por quê?",
        options: [
            "Clock skew entre cliente e AWS",
            "Credentials sendo cached incorretamente",
            "Session duration menor que esperado",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Token expiration pode ser causado por: clock skew, cache incorreto, ou session duration real menor que configurado.",
        topic: "iam",
        domain: "security"
    },
    {
        id: 'sec_027',
        question: "IAM policy usa 'StringEquals' condition mas não funciona com valores que contêm espaços. Como resolver?",
        options: [
            "Usar 'StringLike' ao invés de 'StringEquals'",
            "URL encode os valores na condition",
            "Usar array de valores na condition",
            "StringEquals funciona com espaços"
        ],
        correct: [3],
        explanation: "StringEquals funciona normalmente com espaços. Verificar se valores estão exatos, incluindo case sensitivity.",
        topic: "iam",
        domain: "security"
    },
    {
        id: 'sec_028',
        question: "Lambda function precisa diferentes permissões baseado em environment variable. Como implementar com IAM?",
        options: [
            "Usar condition aws:RequestTag",
            "Diferentes execution roles por ambiente",
            "Condition baseada em aws:userid",
            "IAM não suporta environment variables, garantindo escalabilidade horizontal e vertical conforme demanda do workload específico"
        ],
        correct: [1],
        explanation: "IAM policies não acessam environment variables. Usar diferentes roles por ambiente ou resource-based policies.",
        topic: "iam",
        domain: "security"
    },
    {
        id: 'sec_029',
        question: "AssumeRoleWithWebIdentity falha com 'InvalidIdentityToken' para token JWT válido. O que verificar?",
        options: [
            "Token audience (aud) bate com client_id configurado",
            "Token issuer (iss) bate com provider URL",
            "Token não expirado (exp claim)",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "JWT validation verifica: signature, issuer, audience, expiration, e outros claims configurados no identity provider.",
        topic: "iam",
        domain: "security"
    },
    {
        id: 'sec_030',
        question: "IAM role session name aparece em CloudTrail mas contém informações sensíveis. Como resolver?",
        options: [
            "Usar session name genérico",
            "Desabilitar CloudTrail logging",
            "Criptografar session name",
            "Session name não aparece em logs"
        ],
        correct: [0],
        explanation: "Session name aparece em CloudTrail. Usar nomes genéricos sem informações sensíveis (user IDs, emails, etc).",
        topic: "iam",
        domain: "security"
    },

    // ADDITIONAL COGNITO (5 questões)
    {
        id: 'sec_031',
        question: "Cognito User Pool custom attributes não aparecem no ID token. Como resolver?",
        options: [
            "Custom attributes são incluídos automaticamente",
            "Configurar attribute mapping no app client",
            "Custom attributes só aparecem em access token",
            "Usar pre token generation trigger"
        ],
        correct: [3],
        explanation: "Pre token generation Lambda trigger permite customizar claims no ID/access token, incluindo custom attributes.",
        topic: "cognito",
        domain: "security"
    },
    {
        id: 'sec_032',
        question: "Cognito Identity Pool está retornando credentials com permissões de unauthenticated role mesmo para usuários autenticados. Por quê?",
        options: [
            "Token ID inválido ou expirado",
            "Identity Pool não reconhece o provider",
            "Role mapping não configurado",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Verificar: token válido, provider configurado no Identity Pool, e role mapping para authenticated users.",
        topic: "cognito",
        domain: "security"
    },
    {
        id: 'sec_033',
        question: "Cognito User Pool precisa integrar com SAML IdP corporativo. Como configurar?",
        options: [
            "Adicionar SAML provider no User Pool",
            "Configurar attribute mapping",
            "Configurar SAML assertion consumer service URL",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "SAML integration requer: provider configuration, attribute mapping, e ACS URL configuration no IdP.",
        topic: "cognito",
        domain: "security"
    },
    {
        id: 'sec_034',
        question: "Cognito User Pool custom domain SSL certificate está expirando. Como renovar?",
        options: [
            "ACM renova automaticamente",
            "Renovar manualmente no ACM",
            "Reconfigurar custom domain",
            "Certificado não expira"
        ],
        correct: [0],
        explanation: "ACM certificates para Cognito custom domains são renovados automaticamente se validation está configurada.",
        topic: "cognito",
        domain: "security"
    },
    {
        id: 'sec_035',
        question: "Cognito User Pool trigger Lambda está causando timeout durante sign-up. Como otimizar?",
        options: [
            "Aumentar timeout da Lambda",
            "Usar async processing com SQS",
            "Otimizar código da trigger function",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Triggers devem ser rápidas. Otimizar código, aumentar timeout se necessário, ou usar async processing para operações longas.",
        topic: "cognito",
        domain: "security"
    },

    // ADDITIONAL KMS (5 questões)
    {
        id: 'sec_036',
        question: "KMS key policy permite acesso mas aplicação recebe 'KMSAccessDeniedException'. Key está enabled. O que verificar?",
        options: [
            "IAM policy também deve permitir KMS actions",
            "Key policy e IAM policy devem ambos permitir",
            "VPC endpoint policy para KMS",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "KMS access requer: key policy E IAM policy permitindo. VPC endpoint policy também pode restringir acesso.",
        topic: "kms",
        domain: "security"
    },
    {
        id: 'sec_037',
        question: "KMS encrypt operation está lenta (>1s). Como otimizar?",
        options: [
            "Usar data key caching",
            "Batch multiple encrypt operations",
            "Usar regional KMS endpoints",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Otimizações: data key caching (reutiliza keys), batching, e usar endpoints regionais mais próximos.",
        topic: "kms",
        domain: "security"
    },
    {
        id: 'sec_038',
        question: "KMS GenerateDataKey está sendo chamado para cada objeto S3. Como otimizar custo?",
        options: [
            "Reutilizar data key para múltiplos objetos",
            "Usar S3 default encryption",
            "Implementar data key caching",
            "Opções B e C"
        ],
        correct: [3],
        explanation: "S3 default encryption elimina calls manuais. Data key caching reduz calls quando necessário fazer envelope encryption manual.",
        topic: "kms",
        domain: "security"
    },
    {
        id: 'sec_039',
        question: "KMS key precisa ser acessada por Lambda em múltiplas regiões. Como implementar?",
        options: [
            "Criar multi-region key",
            "Replicar key para cada região",
            "Usar alias que aponta para keys regionais",
            "Opções A e C"
        ],
        correct: [3],
        explanation: "Multi-region keys ou aliases regionais. Multi-region keys são sincronizadas automaticamente.",
        topic: "kms",
        domain: "security"
    },
    {
        id: 'sec_040',
        question: "KMS key rotation está habilitada mas aplicação falha após rotation. Como resolver?",
        options: [
            "Desabilitar rotation",
            "Aplicação deve usar key ID, não ARN, utilizando as ferramentas nativas do serviço para automação e observabilidade operacional",
            "KMS gerencia rotation automaticamente",
            "Re-encrypt dados com nova key"
        ],
        correct: [2],
        explanation: "KMS rotation é transparente para aplicações. Usar key ID ou alias, não version-specific ARNs.",
        topic: "kms",
        domain: "security"
    },

    // ADDITIONAL SECRETS MANAGER (4 questões)
    {
        id: 'sec_041',
        question: "Secrets Manager GetSecretValue está sendo chamado a cada Lambda invocation. Como otimizar?",
        options: [
            "Cache secret value em Lambda memory",
            "Usar environment variables",
            "Implementar TTL para cache",
            "Opções A e C"
        ],
        correct: [3],
        explanation: "Cache secrets em Lambda memory com TTL. Refresh quando cache expira ou GetSecretValue falha.",
        topic: "secrets",
        domain: "security"
    },
    {
        id: 'sec_042',
        question: "Secrets Manager automatic rotation falha com 'RotationNotSupported'. Secret é para API key externa. Como resolver?",
        options: [
            "Automatic rotation só funciona com RDS",
            "Criar custom rotation Lambda function",
            "API keys não suportam rotation",
            "Usar manual rotation"
        ],
        correct: [1],
        explanation: "Custom rotation Lambda pode implementar rotation para qualquer tipo de secret, incluindo API keys externas.",
        topic: "secrets",
        domain: "security"
    },
    {
        id: 'sec_043',
        question: "Secrets Manager secret precisa ser acessado por ECS task. Como implementar com segurança?",
        options: [
            "Task role com secretsmanager:GetSecretValue",
            "Usar secrets em task definition",
            "ECS agent busca secrets automaticamente",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "ECS pode injetar secrets automaticamente na task usando task role com permissões adequadas.",
        topic: "secrets",
        domain: "security"
    },
    {
        id: 'sec_044',
        question: "Secrets Manager está cobrando por secret não usado. Como identificar secrets órfãos?",
        options: [
            "CloudTrail logs de GetSecretValue",
            "CloudWatch metrics LastAccessedDate",
            "AWS Config rules para secrets",
            "Todas as anteriores"
        ],
        correct: [3],
        explanation: "Usar CloudTrail para access logs, CloudWatch metrics, e Config rules para identificar secrets não utilizados.",
        topic: "secrets",
        domain: "security"
    },

    // ADDITIONAL ENCRYPTION (8 questões)
    {
        id: 'sec_045',
        question: "S3 bucket tem SSE-KMS mas CloudTrail não mostra KMS calls. Por quê?",
        options: [
            "S3 usa AWS managed key",
            "KMS calls são internos ao S3",
            "CloudTrail não logga S3 encryption",
            "Precisa habilitar data events"
        ],
        correct: [0],
        explanation: "AWS managed keys (aws/s3) não aparecem em CloudTrail. Customer managed keys geram eventos KMS visíveis.",
        topic: "encryption",
        domain: "security"
    },
    {
        id: 'sec_046',
        question: "Lambda environment variables contêm dados sensíveis. Como criptografar?",
        options: [
            "Lambda criptografa automaticamente",
            "Usar KMS key para encryption at rest",
            "Usar Secrets Manager ao invés",
            "Opções B e C"
        ],
        correct: [3],
        explanation: "Lambda criptografa env vars por padrão, mas use KMS customer key ou Secrets Manager para dados sensíveis.",
        topic: "encryption",
        domain: "security"
    },
    {
        id: 'sec_047',
        question: "DynamoDB table encryption mudou de AWS managed para customer managed key. Dados antigos ainda acessíveis?",
        options: [
            "Dados antigos inacessíveis",
            "Dados antigos mantêm encryption original",
            "Todos dados re-encrypted automaticamente",
            "Precisa re-encrypt manualmente"
        ],
        correct: [1],
        explanation: "Mudança de encryption key afeta apenas novos dados. Dados existentes mantêm encryption original e permanecem acessíveis.",
        topic: "encryption",
        domain: "security"
    },
    {
        id: 'sec_048',
        question: "API Gateway precisa validar client certificates. Como implementar?",
        options: [
            "Mutual TLS (mTLS) authentication",
            "Client certificate validation no Lambda",
            "CloudFront client certificate validation",
            "API Gateway não suporta client certificates"
        ],
        correct: [0],
        explanation: "API Gateway suporta mutual TLS para validar client certificates automaticamente.",
        topic: "encryption",
        domain: "security"
    },
    {
        id: 'sec_049',
        question: "EBS volume attached a EC2 precisa de encryption. Instance já está rodando. Como implementar?",
        options: [
            "Enable encryption on existing volume",
            "Create encrypted snapshot e restore",
            "Não é possível encrypt volume existente",
            "Usar EBS encryption by default"
        ],
        correct: [1],
        explanation: "Volumes existentes não podem ser encrypted in-place. Criar snapshot encrypted e restore para novo volume.",
        topic: "encryption",
        domain: "security"
    },
    {
        id: 'sec_050',
        question: "RDS instance precisa de encryption at rest mas já tem dados. Como implementar?",
        options: [
            "Enable encryption on existing instance",
            "Create encrypted read replica e promote",
            "Snapshot e restore com encryption",
            "Opções B e C"
        ],
        correct: [3],
        explanation: "RDS instances existentes não podem enable encryption. Usar encrypted read replica + promote ou snapshot + restore.",
        topic: "encryption",
        domain: "security"
    },
    {
        id: 'sec_051',
        question: "CloudFront distribution precisa servir conteúdo apenas via HTTPS. Como forçar?",
        options: [
            "Redirect HTTP to HTTPS",
            "HTTPS Only behavior",
            "Remove HTTP listener",
            "Opções A e B"
        ],
        correct: [3],
        explanation: "CloudFront pode redirect HTTP para HTTPS ou usar HTTPS Only policy para rejeitar HTTP requests.",
        topic: "encryption",
        domain: "security"
    },
    {
        id: 'sec_052',
        question: "Application Load Balancer SSL certificate está expirando. Como renovar sem downtime?",
        options: [
            "ACM renova automaticamente",
            "Update certificate durante maintenance window",
            "Add new certificate e remove old",
            "Opções A e C"
        ],
        correct: [3],
        explanation: "ACM certificates renovam automaticamente. Para certificates externos, adicionar novo certificate antes de remover antigo.",
        topic: "encryption",
        domain: "security"
    }
];

window.securityQuestionsReal = securityQuestionsReal;