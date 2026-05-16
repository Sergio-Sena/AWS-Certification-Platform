# Prompt de Continuação — AWS Certification Platform

## Contexto do Projeto
Plataforma de certificações AWS com 5 certs: CLF-C02 ✅, DVA-C02 ✅, SAA-C03 ✅, AIF-C01 ✅, DOP-C02 🔄

## Onde Paramos — DOP-C02 (DevOps Engineer Professional)
- **75 questões no exame | 180 min | 75% aprovação | Banco: 225 questões (3x75)**
- **Estrutura criada:** página, material de estudo (6 domínios), script, loader
- **Branch:** develop (trabalho) → main (deploy)

### Progresso das questões:
| Domínio | Peso | Questões feitas | Faltam | Arquivo |
|---|---|---|---|---|
| SDLC Automation | 22% | 50/50 ✅ | 0 | `sdlc-questions.js` |
| Config Management & IaC | 17% | 20/38 | **18** | `config-iac-questions.js` (append) |
| Resilient Cloud Solutions | 15% | 0/34 | **34** | `resilient-questions.js` (criar) |
| Monitoring & Logging | 15% | 0/34 | **34** | `monitoring-questions.js` (criar) |
| Incident & Event Response | 14% | 0/32 | **32** | `incident-questions.js` (criar) |
| Security & Compliance | 17% | 0/37 | **37** | `security-questions.js` (criar) |

### Total restante: 155 questões em lotes de ~20

## Padrão das Questões
- Scenario-based (cenário empresarial → qual solução AWS)
- Formato: `{ id, question, options (4), correct (array), explanation, topic, domain }`
- IDs: `cfg_021`, `res_001`, `mon_001`, `inc_001`, `secdop_001`
- Nível: Professional (avançado, multi-step, troubleshooting)

## Tópicos por Domínio (ainda não feitos):

### Config/IaC (faltam 18): 
- CloudFormation: UpdatePolicy, AutoScalingRollingUpdate, helper scripts (cfn-init, cfn-hup)
- CDK: constructs, aspects, context, testing
- SSM: Inventory, Compliance, Distributor, hybrid (on-premises)

### Resilient Cloud (34):
- Multi-AZ/Multi-Region DR automation
- Auto Scaling advanced (lifecycle hooks, instance refresh)
- Self-healing patterns, chaos engineering (FIS)
- Data replication automation, backup automation

### Monitoring & Logging (34):
- CloudWatch: custom metrics, metric math, anomaly detection, composite alarms
- X-Ray: distributed tracing, service map, annotations
- CloudWatch Logs: metric filters, subscription filters, cross-account
- EventBridge: event patterns, archive/replay, cross-account

### Incident & Event Response (32):
- EventBridge → Lambda/SSM auto-remediation
- SSM Automation runbooks, OpsCenter, Incident Manager
- Auto-remediation patterns (Config Rules + SSM)
- Escalation, ChatOps (AWS Chatbot)

### Security & Compliance (37):
- IAM advanced: permission boundaries, SCPs, cross-account roles
- Pipeline security: SAST/DAST, image scanning, signed artifacts
- Secrets rotation, KMS key policies, envelope encryption
- Config Rules, conformance packs, Security Hub, Audit Manager
- Compliance as Code patterns

## Instruções para Continuar
1. Ler este prompt para contexto
2. Continuar criando questões em lotes de ~20
3. Append nos arquivos existentes (Config/IaC) ou criar novos (outros domínios)
4. Commit a cada 2-3 lotes
5. Após completar 225 questões, fazer commit final e atualizar status

## Arquivos do Projeto
```
public/dop-c02/
├── css/dop-theme.css
├── data/
│   ├── dop-study-material.js ✅
│   ├── dop-questions-225.js ✅ (loader)
│   ├── sdlc-questions.js ✅ (50q)
│   ├── config-iac-questions.js 🔄 (20q, faltam 18)
│   ├── resilient-questions.js ⬜ (placeholder)
│   ├── monitoring-questions.js ⬜ (placeholder)
│   ├── incident-questions.js ⬜ (placeholder)
│   └── security-questions.js ⬜ (placeholder)
├── js/dop-script.js ✅
└── index.html ✅
```

## Após DOP-C02
- Deploy para main (trigger esteira CI/CD)
- Testar todas as 5 certificações
- URL: https://cert.sstechnologies-cloud.com/
