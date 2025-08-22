# 🔐 GitHub Secrets - Configuração Segura

## 🚨 **IMPORTANTE: Segurança das Credenciais**

**NUNCA** coloque credenciais AWS diretamente no código ou documentação!

## 📋 **Passo a Passo: Configurar GitHub Secrets**

### **1. Acessar GitHub Secrets**
1. Vá para: https://github.com/Sergio-Sena/AWS-Certification-Platform
2. Clique em **Settings** (aba do repositório)
3. No menu lateral: **Secrets and variables** → **Actions**
4. Clique **New repository secret**

### **2. Adicionar Secrets (4 secrets necessários)**

#### **Secret 1: AWS_ACCESS_KEY_ID**
- **Name**: `AWS_ACCESS_KEY_ID`
- **Secret**: `[SUA_ACCESS_KEY_AQUI]` (obtida do AWS IAM)
- Clique **Add secret**

#### **Secret 2: AWS_SECRET_ACCESS_KEY**
- **Name**: `AWS_SECRET_ACCESS_KEY`  
- **Secret**: `[SUA_SECRET_KEY_AQUI]` (obtida do AWS IAM)
- Clique **Add secret**

#### **Secret 3: S3_BUCKET_NAME**
- **Name**: `S3_BUCKET_NAME`
- **Secret**: Nome do bucket criado pelo script (ex: `aws-certification-platform-1234567890`)
- Clique **Add secret**

#### **Secret 4: CLOUDFRONT_DISTRIBUTION_ID**
- **Name**: `CLOUDFRONT_DISTRIBUTION_ID`
- **Secret**: ID da distribuição CloudFront (ex: `E1234567890ABC`)
- Clique **Add secret**

### **3. Verificar Secrets Configurados**
Após adicionar, você deve ver 4 secrets:
- ✅ `AWS_ACCESS_KEY_ID`
- ✅ `AWS_SECRET_ACCESS_KEY`
- ✅ `S3_BUCKET_NAME`
- ✅ `CLOUDFRONT_DISTRIBUTION_ID`

## 🔄 **Executar Deploy**

Após configurar os secrets:

```bash
# Fazer qualquer commit para main branch
git add .
git commit -m "feat: Configure AWS deployment secrets"
git push origin main
```

O GitHub Actions será executado automaticamente!

## 🔍 **Monitorar Deploy**

1. Vá para: https://github.com/Sergio-Sena/AWS-Certification-Platform/actions
2. Clique no workflow mais recente
3. Acompanhe os logs em tempo real

## ✅ **Deploy Bem-sucedido**

Você verá:
- ✅ Files synced to S3
- ✅ CloudFront cache invalidated
- 🌐 Site disponível via CloudFront URL

## 🚨 **Troubleshooting**

### **Erro: Invalid credentials**
- Verificar se AWS_ACCESS_KEY_ID e AWS_SECRET_ACCESS_KEY estão corretos
- Confirmar que o usuário IAM tem as permissões necessárias

### **Erro: Bucket not found**
- Verificar se S3_BUCKET_NAME está correto
- Confirmar que o bucket existe na região us-east-1

### **Erro: Distribution not found**
- Verificar se CLOUDFRONT_DISTRIBUTION_ID está correto
- Aguardar deployment do CloudFront (pode levar 15-20 min)

## 🔒 **Segurança**

### **Boas Práticas:**
- ✅ Usar GitHub Secrets para credenciais
- ✅ Criar usuário IAM específico para CI/CD
- ✅ Aplicar princípio do menor privilégio
- ✅ Rotacionar credenciais periodicamente

### **Nunca Fazer:**
- ❌ Colocar credenciais no código
- ❌ Fazer commit de arquivos .env
- ❌ Compartilhar credenciais em chat/email
- ❌ Usar credenciais de usuário root

---

**🔐 Segurança em primeiro lugar! Credenciais sempre nos Secrets.**