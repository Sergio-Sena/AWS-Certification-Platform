# 🚀 AWS Certification Platform

## 🎯 Visão Geral
Plataforma completa de estudos e simulação para certificações AWS com sistema de aprendizado personalizado, interface profissional e suporte a múltiplas certificações.

### 🏆 Certificações Suportadas
- **CLF-C02** - Cloud Practitioner (Verde AWS)
- **DVA-C02** - Developer Associate (Laranja AWS) 
- **SAA-C03** - Solutions Architect Associate (Azul AWS)

---

## ✨ Funcionalidades Principais

### 📚 Sistema de Estudos
- **Avaliação Inicial**: 5 questões para personalizar o plano de estudos
- **Material Completo**: Tópicos essenciais com cards visuais interativos
- **Planos Personalizados**: Recomendações baseadas no nível do usuário
- **Layout Responsivo**: Cards organizados por domínios oficiais AWS

### 🎯 Simulador de Exame
- **600 Questões Total**: 200 questões por certificação
- **Simulado Completo**: 65 questões seguindo distribuição oficial AWS
- **Modo Prática**: 10 questões aleatórias sem limite de tempo
- **Tipos de Questão**: Escolha única e múltipla escolha
- **Timer Inteligente**: 90min (CLF) / 130min (DVA/SAA)

### 📊 Sistema de Resultados
- **Meta 80%**: Recomendação acima do score oficial para máxima confiança
- **Análise Detalhada**: Performance por tópico e domínio
- **Revisão de Respostas**: Explicações detalhadas para cada questão
- **Histórico**: Acompanhamento do progresso ao longo do tempo

---

## 🏗️ Arquitetura do Projeto

### **Nova Estrutura Organizada**
```
aws-certification-platform/
├── public/                          # Arquivos servidos
│   ├── index.html                   # Landing page principal
│   ├── clf-c02/                     # Cloud Practitioner
│   │   ├── index.html
│   │   ├── css/clf-theme.css        # Verde AWS
│   │   ├── data/                    # 200 questões + material
│   │   └── js/                      # Scripts específicos
│   ├── dva-c02/                     # Developer Associate
│   │   ├── index.html
│   │   ├── css/dva-theme.css        # Laranja AWS
│   │   ├── data/                    # 200 questões + material
│   │   └── js/                      # Scripts específicos
│   └── saa-c03/                     # Solutions Architect
│       ├── index.html
│       ├── css/saa-theme.css        # Azul AWS
│       ├── data/                    # 200 questões + material
│       └── js/                      # Scripts específicos
├── src/                             # Código fonte
│   ├── assets/                      # Recursos estáticos
│   │   ├── images/                  # AWS.svg, logos
│   │   └── docs/                    # PDFs oficiais AWS
│   ├── config/                      # Configurações
│   │   └── certifications.js       # Config centralizada
│   ├── shared/                      # Recursos compartilhados
│   │   ├── css/base.css            # Estilos base
│   │   ├── js/core.js              # Lógica principal
│   │   └── components/             # Componentes reutilizáveis
│   └── utils/                       # Utilitários
│       └── pathResolver.js          # Resolução de caminhos
├── docs/                            # Documentação + PDFs oficiais
├── tests/                           # Testes automatizados
└── .github/workflows/               # CI/CD Pipeline
```

### **Tecnologias Utilizadas**
- **HTML5**: Estrutura semântica com roles ARIA
- **CSS3**: Grid, Flexbox, animações e media queries
- **JavaScript ES6+**: Módulos, async/await, localStorage
- **Font Awesome**: Ícones profissionais
- **Google Fonts**: Tipografia Inter

---

## 📊 Distribuição Oficial AWS

### **CLF-C02 - Cloud Practitioner**
| Domínio | Peso | Simulado (65q) | Banco (200q) |
|---------|------|----------------|--------------|
| Cloud Concepts | 24% | 16 | 48 |
| Security & Compliance | 30% | 19 | 60 |
| Technology & Services | 34% | 22 | 68 |
| Billing & Support | 12% | 8 | 24 |
| **Score Oficial** | **70%** | **Meta: 80%** | **90min** |

### **DVA-C02 - Developer Associate**
| Domínio | Peso | Simulado (65q) | Banco (200q) |
|---------|------|----------------|--------------|
| Development | 32% | 21 | 64 |
| Security | 26% | 17 | 52 |
| Deployment | 24% | 15 | 48 |
| Troubleshooting | 18% | 12 | 36 |
| **Score Oficial** | **72%** | **Meta: 80%** | **130min** |

### **SAA-C03 - Solutions Architect**
| Domínio | Peso | Simulado (65q) | Banco (200q) |
|---------|------|----------------|--------------|
| Resilient Architectures | 30% | 19 | 60 |
| High-Performing Architectures | 28% | 18 | 56 |
| Secure Applications | 24% | 16 | 48 |
| Cost-Optimized Architectures | 18% | 12 | 36 |
| **Score Oficial** | **72%** | **Meta: 80%** | **130min** |

---

## 🎨 Design e UX

### **Acessibilidade (WCAG 2.1 AA)**
- ✅ **Skip Links**: Navegação rápida para conteúdo principal
- ✅ **ARIA Labels**: Suporte completo para leitores de tela
- ✅ **Navegação por Teclado**: Tab, Enter, setas funcionais
- ✅ **Alto Contraste**: Suporte para preferências do usuário
- ✅ **Movimento Reduzido**: Respeita configurações de acessibilidade

### **Interface Visual**
- ✅ **Paleta AWS Oficial**: Cores autênticas por certificação
- ✅ **Design Responsivo**: Mobile-first com breakpoints inteligentes
- ✅ **Cards Interativos**: Microinterações e efeitos hover
- ✅ **Estados Visuais**: Loading, feedback e transições suaves

### **Experiência do Usuário**
- ✅ **Auto-save**: Progresso salvo automaticamente
- ✅ **Notificações Toast**: Feedback visual não-intrusivo
- ✅ **Proteção Touch**: Prevenção de toques fantasma
- ✅ **Performance Monitor**: Rastreamento de interações

---

## 🚀 Como Usar

### **Acesso Rápido**
- 🌐 **Produção**: https://sergio-sena.github.io/AWS-Certification-Platform/
- 💻 **Local**: Abrir `public/index.html` no navegador

### **Primeira Utilização**
1. **Escolha a Certificação**: CLF-C02, DVA-C02 ou SAA-C03
2. **Avaliação Inicial**: 5 questões para personalização
3. **Material de Estudo**: Explore cards visuais por domínio
4. **Simulado**: Pratique com questões reais do exame

### **Navegação**
- **Teclado**: Tab, Enter, Setas para navegação completa
- **Mouse/Touch**: Cliques e toques otimizados
- **Atalhos**: Skip links para navegação rápida

---

## 🔧 Desenvolvimento

### **Setup Local**
```bash
# Clonar repositório
git clone https://github.com/Sergio-Sena/AWS-Certification-Platform.git
cd AWS-Certification-Platform

# Servir arquivos localmente
cd public
python -m http.server 8000
# ou
npx serve .

# Acessar: http://localhost:8000
```

### **Estrutura de Desenvolvimento**
- **`public/`** - Arquivos servidos (deploy)
- **`src/`** - Código fonte e recursos
- **`docs/`** - Documentação e PDFs oficiais
- **`tests/`** - Testes automatizados

### **Adicionando Nova Certificação**
1. Criar pasta em `public/nova-cert/`
2. Adicionar configuração em `src/config/certifications.js`
3. Implementar tema CSS específico
4. Criar banco de 200 questões
5. Atualizar landing page

---

## 🚀 CI/CD Pipeline

### **Ambientes**
- **DEV**: GitHub Pages (branches feature/*)
- **PROD**: GitHub Pages (branch main)

### **Deploy Automático**
```yaml
# .github/workflows/deploy.yml
name: Deploy AWS Certification Platform

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

### **URLs Importantes**
- **Site**: https://sergio-sena.github.io/AWS-Certification-Platform/
- **Actions**: https://github.com/Sergio-Sena/AWS-Certification-Platform/actions
- **Configurações**: https://github.com/Sergio-Sena/AWS-Certification-Platform/settings

---

## 📊 Métricas de Qualidade

### **Performance** ✅
- ⚡ **Carregamento**: < 2s em conexões 3G
- 🎯 **Interatividade**: Feedback visual < 100ms
- 📱 **Responsividade**: Transições suaves 60fps

### **Acessibilidade** ✅
- ♿ **WCAG 2.1 AA**: Conformidade completa
- 🎨 **Contraste**: Mínimo 4.5:1 para texto normal
- ⌨️ **Navegação**: 100% funcional por teclado
- 🔊 **Leitores de Tela**: Suporte completo NVDA/JAWS

### **Compatibilidade** ✅
- 🌐 **Navegadores**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- 📱 **Dispositivos**: Desktop, tablet, smartphone
- 💻 **Sistemas**: Windows, macOS, Linux, iOS, Android

---

## 🎓 Conteúdo Educacional

### **CLF-C02 - Tópicos Cobertos**
- ☁️ **Cloud Concepts**: Fundamentos AWS, modelos de nuvem
- 🔒 **Security**: IAM, compliance, shared responsibility
- ⚙️ **Technology**: Compute, storage, database, networking
- 💰 **Billing**: Pricing models, cost optimization, support

### **DVA-C02 - Tópicos Cobertos**
- 🔧 **Development**: Lambda, API Gateway, SDK/CLI
- 🛡️ **Security**: IAM, KMS, Cognito, secrets management
- 🚀 **Deployment**: CI/CD, CloudFormation, containers
- 🔍 **Troubleshooting**: CloudWatch, X-Ray, debugging

### **SAA-C03 - Tópicos Cobertos**
- 🏗️ **Resilient**: Multi-AZ, load balancing, disaster recovery
- ⚡ **Performance**: CloudFront, caching, compute optimization
- 🔐 **Security**: Network security, data protection, monitoring
- 💸 **Cost**: Pricing models, storage classes, optimization

---

## 📈 Status do Projeto

### **✅ Concluído (95%)**
- ✅ **3 Certificações**: CLF-C02, DVA-C02, SAA-C03 implementadas
- ✅ **600 Questões**: 200 por certificação com distribuição oficial
- ✅ **Cards Visuais**: Interface moderna com interações
- ✅ **80% Standard**: Meta acima do score oficial
- ✅ **Estrutura Organizada**: Melhores práticas implementadas
- ✅ **CI/CD**: Deploy automático configurado

### **🚧 Em Andamento (5%)**
- ⏳ **Testes Automatizados**: Cobertura de código
- ⏳ **Performance Audit**: Otimizações finais
- ⏳ **Documentação**: Guias de contribuição

---

## 🤝 Contribuição

### **Como Contribuir**
1. Fork o repositório
2. Crie branch feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit mudanças (`git commit -m 'Add: nova funcionalidade'`)
4. Push para branch (`git push origin feature/nova-funcionalidade`)
5. Abra Pull Request

### **Diretrizes**
- Seguir estrutura de pastas existente
- Manter acessibilidade WCAG 2.1 AA
- Testar em múltiplos dispositivos
- Documentar mudanças significativas

---

## 📄 Licença

Projeto educacional para fins de estudo das certificações AWS. 

### **Recursos Oficiais**
- 📚 **Guias Oficiais**: Incluídos em `docs/`
- 🎯 **Distribuições**: Baseadas em documentação AWS oficial
- ✅ **Compliance**: Seguindo diretrizes educacionais

---

## 🎯 Roadmap Futuro

### **Próximas Features**
- [ ] **Modo Escuro/Claro**: Toggle de tema
- [ ] **Exportação PDF**: Relatórios de resultados
- [ ] **Calendário**: Integração com plano de estudos
- [ ] **Imagens**: Questões com diagramas AWS
- [ ] **Gamificação**: Sistema de badges e conquistas
- [ ] **Social**: Comparação com outros usuários

### **Novas Certificações**
- [ ] **SOA-C02**: SysOps Administrator
- [ ] **ANS-C01**: Advanced Networking
- [ ] **SCS-C02**: Security Specialty

---

**🚀 Desenvolvido com ❤️ para a comunidade AWS**

> 💡 **"Nossa meta de 80% garante que você esteja REALMENTE preparado. É mais desafiador que o exame oficial, mas isso te dará confiança total no dia da prova!"**