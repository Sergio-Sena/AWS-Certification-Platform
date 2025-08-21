# 🔐 Configuração GitHub Actions - Passo a Passo

## 📋 Credenciais Necessárias

### ✅ **GITHUB_TOKEN** (Automático)
- **Status:** Já disponível
- **Permissões:** Automáticas para o repositório
- **Uso:** Deploy GitHub Pages

### ⚙️ **Configuração GitHub Pages**

#### **Passo 1: Habilitar GitHub Pages**
1. Acesse: https://github.com/Sergio-Sena/AWS-Certification-Platform/settings/pages
2. **Source:** Deploy from a branch
3. **Branch:** Selecione `gh-pages` (será criado pelo Actions)
4. **Folder:** `/ (root)`
5. Clique **Save**

#### **Passo 2: Configurar Permissões do Actions**
1. Acesse: https://github.com/Sergio-Sena/AWS-Certification-Platform/settings/actions
2. **Workflow permissions:** 
   - ✅ Marque "Read and write permissions"
   - ✅ Marque "Allow GitHub Actions to create and approve pull requests"
3. Clique **Save**

## 🚀 Testar Deploy Manual

### **Executar Workflow:**
1. Acesse: https://github.com/Sergio-Sena/AWS-Certification-Platform/actions
2. Clique em "Deploy AWS Certification Platform"
3. Clique **Run workflow** → **Run workflow**
4. Aguarde execução

### **Verificar Resultado:**
- ✅ Workflow executado com sucesso
- ✅ Branch `gh-pages` criada
- ✅ Site disponível em: `https://sergio-sena.github.io/AWS-Certification-Platform/`

## 🔧 URLs Importantes

### **Configurações:**
- **Pages:** https://github.com/Sergio-Sena/AWS-Certification-Platform/settings/pages
- **Actions:** https://github.com/Sergio-Sena/AWS-Certification-Platform/settings/actions
- **Secrets:** https://github.com/Sergio-Sena/AWS-Certification-Platform/settings/secrets/actions

### **Monitoramento:**
- **Workflows:** https://github.com/Sergio-Sena/AWS-Certification-Platform/actions
- **Site:** https://sergio-sena.github.io/AWS-Certification-Platform/

## ✅ Checklist de Configuração

- [ ] GitHub Pages habilitado
- [ ] Permissões Actions configuradas
- [ ] Primeiro deploy manual executado
- [ ] Site acessível via GitHub Pages
- [ ] Workflow funcionando corretamente

## 🚨 Troubleshooting

### **Erro: Permission denied**
- Verificar permissões do Actions (Read and write)

### **Erro: Pages not found**
- Aguardar criação da branch `gh-pages`
- Verificar configuração do Pages

### **Erro: Deploy failed**
- Verificar logs do workflow
- Confirmar estrutura de arquivos