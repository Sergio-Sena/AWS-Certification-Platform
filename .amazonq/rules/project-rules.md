# AWS Certification Platform - Project Rules

## Arquitetura
- **Stack**: HTML5 + CSS3 + JavaScript ES6+ (front-end puro, sem framework)
- **Hosting**: S3 + CloudFront (CDN Unificado)
- **Bucket**: `sstech-cdn-unified`
- **Prefixo**: `/aws-cert/`
- **Distribution**: `E9ZQJ3RPSA04N`
- **URL**: `https://cert.sstechnologies-cloud.com/`

## Certificações
| Código | Nome | Banco | Status |
|--------|------|-------|--------|
| CLF-C02 | Cloud Practitioner | 200q | ✅ |
| DVA-C02 | Developer Associate | 200q | ✅ |
| SAA-C03 | Solutions Architect | 200q | 🚧 |
| DOP-C02 | DevOps Engineer | 225q | 📋 |
| AIF-C01 | AI Practitioner | 195q | 📋 |

## Regras de Segurança
- NUNCA expor credentials em código
- NUNCA usar fallback para secrets (fail-fast)
- NUNCA fazer sync na raiz do bucket sstech-cdn-unified
- NUNCA invalidar `/*` no CloudFront — usar `/aws-cert/*`
- Questões não devem conter informações sensíveis reais

## Padrões de Código
- Questões: objetos JS com id, question, options, correct (array), explanation, topic, domain
- IDs: `{domain_prefix}_{number}` (ex: dev_001, sec_015)
- Banco de questões: 3x o número de questões do exame
- Score de aprovação: usar score oficial da AWS
- Meta recomendada: 80% (acima do oficial)

## CI/CD
- Branch `develop`: desenvolvimento + CI (validação)
- Branch `main`: produção + deploy automático AWS
- Flow: develop → PR → main → deploy S3 + invalidate CDN
- Rollback: `git revert` (sem blue/green)
- Tag: `Project=aws-certification-platform`

## FinOps
- Tag: `Project=aws-certification-platform`
- Target custo: ~$0 (site estático em CDN compartilhado)
- Email SES: senanetworker@gmail.com

## ⚠️ CDN UNIFICADO - REGRAS CRÍTICAS
- Bucket `sstech-cdn-unified` é COMPARTILHADO por 9 projetos
- Deploy APENAS em `s3://sstech-cdn-unified/aws-cert/`
- `--delete` APENAS dentro do prefixo: `aws s3 sync ./public/ s3://sstech-cdn-unified/aws-cert/ --delete`
- Invalidação APENAS por prefixo: `--paths "/aws-cert/*"`
- NUNCA alterar distribution, CloudFront Function ou DNS
