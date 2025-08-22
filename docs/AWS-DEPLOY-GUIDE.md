# 🚀 AWS Serverless Deploy Guide

## 📋 Pré-requisitos

- ✅ Conta AWS ativa
- ✅ AWS CLI instalado e configurado
- ✅ Permissões: S3, CloudFront, IAM

## 🏗️ Arquitetura Serverless

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   GitHub Repo   │───▶│   GitHub Actions │───▶│   AWS S3 Bucket │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                                         │
                                                         ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Global Users  │◀───│   CloudFront CDN │◀───│   Static Files  │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## 🚀 Setup Rápido (5 minutos)

### **Passo 1: Executar Setup AWS**

```bash
# Clonar repositório
git clone https://github.com/Sergio-Sena/AWS-Certification-Platform.git
cd AWS-Certification-Platform

# Executar setup (requer AWS CLI configurado)
chmod +x aws-setup.sh
./aws-setup.sh
```

### **Passo 2: Configurar GitHub Secrets**

Acesse: `https://github.com/Sergio-Sena/AWS-Certification-Platform/settings/secrets/actions`

Adicionar secrets (valores obtidos após executar o script):

- `AWS_ACCESS_KEY_ID`: Sua access key AWS (do AWS CLI)
- `AWS_SECRET_ACCESS_KEY`: Sua secret key AWS (do AWS CLI)
- `S3_BUCKET_NAME`: Nome do bucket criado pelo script
- `CLOUDFRONT_DISTRIBUTION_ID`: ID da distribuição CloudFront

### **Passo 3: Deploy Automático**

```bash
# Fazer push para main branch
git add .
git commit -m "feat: Configure AWS Serverless deployment"
git push origin main
```

## 🔧 Setup Manual (Alternativo)

### **1. Criar S3 Bucket**

```bash
# Criar bucket único
BUCKET_NAME="aws-certification-platform-$(date +%s)"
aws s3 mb s3://$BUCKET_NAME --region us-east-1

# Configurar static hosting
aws s3 website s3://$BUCKET_NAME --index-document index.html
```

### **2. Configurar Política Pública**

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::BUCKET_NAME/*"
    }
  ]
}
```

### **3. Criar CloudFront Distribution**

- **Origin**: S3 bucket website endpoint
- **Viewer Protocol**: Redirect HTTP to HTTPS
- **Price Class**: Use Only US, Canada and Europe
- **Default Root Object**: index.html

### **4. Criar IAM User para GitHub Actions**

Permissões necessárias:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:PutObjectAcl",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": ["arn:aws:s3:::BUCKET_NAME", "arn:aws:s3:::BUCKET_NAME/*"]
    },
    {
      "Effect": "Allow",
      "Action": ["cloudfront:CreateInvalidation"],
      "Resource": "*"
    }
  ]
}
```

## 📊 Custos Estimados (us-east-1)

| Serviço                 | Uso Estimado | Custo/Mês      |
| ----------------------- | ------------ | -------------- |
| **S3 Storage**          | 100MB        | $0.02          |
| **S3 Requests**         | 10K requests | $0.04          |
| **CloudFront**          | 1GB transfer | $0.085         |
| **CloudFront Requests** | 10K requests | $0.01          |
| **Total**               |              | **~$0.15/mês** |

## 🌐 URLs Finais

Após deploy completo:

- **S3 Website**: `http://BUCKET_NAME.s3-website-us-east-1.amazonaws.com`
- **CloudFront**: `https://DISTRIBUTION_ID.cloudfront.net`
- **Custom Domain** (opcional): `https://seudominio.com`

## 🔍 Monitoramento

### **CloudWatch Metrics**

- S3 bucket size e requests
- CloudFront cache hit ratio
- Error rates e latência

### **Logs**

- CloudFront access logs
- S3 server access logs

## 🚨 Troubleshooting

### **Deploy Falha**

```bash
# Verificar credenciais AWS
aws sts get-caller-identity

# Testar permissões S3
aws s3 ls s3://BUCKET_NAME

# Verificar CloudFront status
aws cloudfront get-distribution --id DISTRIBUTION_ID
```

### **Cache Issues**

```bash
# Invalidar cache manualmente
aws cloudfront create-invalidation --distribution-id DISTRIBUTION_ID --paths "/*"
```

### **Permissões**

- Verificar IAM policies
- Confirmar bucket policy pública
- Validar CORS se necessário

## 🎯 Próximos Passos

1. ✅ **Deploy Básico**: S3 + CloudFront
2. 🔧 **Domínio Custom**: Route 53 + Certificate Manager
3. 📊 **Analytics**: CloudWatch + Google Analytics
4. 🔒 **Security Headers**: Lambda@Edge
5. 🚀 **Performance**: Otimizações avançadas

## 📞 Suporte

- **AWS Documentation**: https://docs.aws.amazon.com/
- **GitHub Issues**: Para problemas específicos do projeto
- **AWS Support**: Para questões de infraestrutura

---

**🚀 Deploy configurado para máxima performance e mínimo custo!**
