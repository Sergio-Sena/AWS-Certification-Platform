# Deploy — CDN Unificado SStech

## Configuração

| Parâmetro | Valor |
|-----------|-------|
| Bucket S3 | `sstech-cdn-unified` |
| Distribution ID | `E9ZQJ3RPSA04N` |
| Certificado | `*.sstechnologies-cloud.com` (wildcard) |
| Região | us-east-1 |

## Como fazer deploy

### 1. Sync para o bucket com prefixo do projeto

```bash
aws s3 sync ./PASTA_BUILD/ s3://sstech-cdn-unified/PREFIXO/ \
  --exclude ".git/*" \
  --exclude "node_modules/*" \
  --exclude "*.md" \
  --exclude "_archive/*" \
  --delete
```

### 2. Invalidar cache

```bash
aws cloudfront create-invalidation \
  --distribution-id E9ZQJ3RPSA04N \
  --paths "/PREFIXO/*"
```

## Mapa de Projetos

| Projeto | Prefixo | Subdomínio | Pasta de Build |
|---------|---------|-----------|----------------|
| Portfolio | `portfolio` | dev-cloud.sstechnologies-cloud.com | `.` (raiz) |
| AWS-Services | `aws-services` | aws-services.sstechnologies-cloud.com | `.` (raiz) |
| Ritech | `ritech` | ritech-fechaduras-digitais.sstechnologies-cloud.com | `.` (raiz) |
| Tráfego | `trafego` | sstrafegopago.sstechnologies-cloud.com | `.` (raiz) |
| AWS-Cert | `aws-cert` | aws-certification-platform.sstechnologies-cloud.com | `.` (raiz) |
| Kate Kuray | `kate-kuray` | kate-kuray-profile.sstechnologies-cloud.com | `.` (raiz) |
| Hub | `hub` | hub.sstechnologies-cloud.com | `.` (raiz) |
| SmartFinance | `smartfinance` | smartfinance.sstechnologies-cloud.com | `dist/` |
| MidiaFlow | `midiaflow` | midiaflow.sstechnologies-cloud.com | `out/` |

## Adicionar novo projeto

1. Criar pasta no bucket:
```bash
aws s3 sync ./build/ s3://sstech-cdn-unified/NOVO-PREFIXO/
```

2. Adicionar rota na CloudFront Function `sstech-host-router`:
```javascript
'novo-subdominio.sstechnologies-cloud.com': '/NOVO-PREFIXO'
```

3. Adicionar CNAME na distribuição E9ZQJ3RPSA04N

4. Criar registro Alias no Route 53:
```
novo-subdominio.sstechnologies-cloud.com → d10mjoe1zes9j1.cloudfront.net (Alias tipo A)
```

## Importante

- **NÃO** usar CNAME no Route 53 — usar sempre **Alias (tipo A)**
- **NÃO** criar novas distribuições CloudFront — tudo vai na E9ZQJ3RPSA04N
- Invalidação é por prefixo: `"/PREFIXO/*"` (não invalida os outros projetos)
- O bucket `sstech-cdn-unified` é compartilhado — cuidado com `--delete` (só deleta dentro do prefixo)
