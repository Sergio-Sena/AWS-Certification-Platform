# 🚀 GUIA RÁPIDO - Como Fazer Deploy

**SIGA ESTE PASSO A PASSO SEMPRE QUE FOR FAZER ALTERAÇÕES**

---

## 📝 Passo a Passo Completo

### 1️⃣ Criar Branch de Feature
```bash
# Ir para develop
git checkout develop
git pull origin develop

# Criar nova branch
git checkout -b feature/nome-da-alteracao
```

**Exemplo:**
```bash
git checkout -b feature/melhorar-funcionalidade
```

---

### 2️⃣ Fazer Alterações e Testar Local
```bash
# Rodar projeto local (ajuste conforme seu projeto)
npm run dev
# ou
python manage.py runserver
# ou
dotnet run

# Testar no navegador
# http://localhost:3000 (ou porta do seu projeto)
```

---

### 3️⃣ Commitar Alterações
```bash
# Ver o que mudou
git status

# Adicionar arquivos
git add .

# Commitar com mensagem
git commit -m "feat: Descrição do que fez"
```

**Exemplos de mensagens:**
```bash
git commit -m "feat: Adicionar nova funcionalidade"
git commit -m "fix: Corrigir bug no sistema"
git commit -m "style: Melhorar layout"
git commit -m "docs: Atualizar documentação"
```

---

### 4️⃣ Enviar para GitHub
```bash
# Push da sua branch
git push origin feature/nome-da-alteracao
```

**Exemplo:**
```bash
git push origin feature/melhorar-funcionalidade
```

---

### 5️⃣ Criar Pull Request para DEVELOP (Testes)

**No GitHub:**
1. Ir no repositório do projeto
2. Clicar em "Pull requests"
3. Clicar em "New pull request"
4. Selecionar:
   - **base:** `develop` ← **compare:** `feature/sua-branch`
5. Clicar em "Create pull request"
6. Clicar em "Merge pull request"
7. Clicar em "Confirm merge"

**✅ Agora está em DEVELOP para testes!**

---

### 6️⃣ Testar em Develop

**Aguardar alguns minutos e testar:**
- Se tiver ambiente de staging, testar lá
- Se não tiver, revisar código no GitHub
- Verificar se não quebrou nada

---

### 7️⃣ Criar Pull Request para MAIN (Produção)

**No GitHub:**
1. Ir em "Pull requests"
2. Clicar em "New pull request"
3. Selecionar:
   - **base:** `main` ← **compare:** `develop`
4. Clicar em "Create pull request"
5. Clicar em "Merge pull request"
6. Clicar em "Confirm merge"

**🚀 CI/CD DISPARA AUTOMATICAMENTE (se configurado)!**

---

### 8️⃣ Aguardar Deploy Automático

**GitHub → Actions:**
- Ver "Deploy Production" rodando (se tiver CI/CD)
- Aguardar ~3-5 minutos
- ✅ Verde = Deploy com sucesso!

**Verificar site/aplicação em produção**

---

## 🆘 Comandos Rápidos

### Ver branches
```bash
git branch
```

### Voltar para develop
```bash
git checkout develop
```

### Voltar para main
```bash
git checkout main
```

### Atualizar branch atual
```bash
git pull origin nome-da-branch
```

### Ver status
```bash
git status
```

### Ver histórico de commits
```bash
git log --oneline
```

---

## ⚠️ NUNCA FAÇA

❌ `git push origin main` (direto)
❌ `git push origin develop` (direto)
❌ Commitar direto em main
❌ Commitar direto em develop
❌ `git push --force` em branches compartilhadas

## ✅ SEMPRE FAÇA

✅ Criar feature branch
✅ Push da feature
✅ Pull Request no GitHub
✅ Merge via GitHub
✅ Testar antes de fazer merge

---

## 📊 Fluxo Git Flow

```
main (produção)
  ↑
  └── develop (testes)
        ↑
        └── feature/sua-alteracao (desenvolvimento)
```

---

## 📞 Dúvidas?

**Sempre que for fazer alterações, abra este arquivo e siga o passo a passo!**

**Arquivo:** `docs/DEPLOY_PASSO_A_PASSO.md`

---

**Última atualização:** 19/02/2026
