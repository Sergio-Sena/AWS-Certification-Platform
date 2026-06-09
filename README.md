# 🚀 AWS Certification Platform

## 🎯 Visão Geral
Plataforma completa de estudos e simulação para certificações AWS com sistema de aprendizado personalizado, interface profissional e suporte a múltiplas certificações.

---

## 🏆 Certificações Suportadas

| Certificação | Código | Cor | Status |
|---|---|---|---|
| Cloud Practitioner | **CLF-C02** | 🟢 Verde | ✅ Completo |
| Developer Associate | **DVA-C02** | 🟠 Laranja | ✅ Completo |
| Solutions Architect Associate | **SAA-C03** | 🔵 Azul | 🚧 Em progresso |
| DevOps Engineer Professional | **DOP-C02** | 🟣 Roxo | 📋 Planejado |
| AI Practitioner | **AIF-C01** | 🩵 Teal | 📋 Planejado |

---

## ✨ Funcionalidades

### 📚 Sistema de Estudos
- Avaliação inicial para personalizar plano de estudos
- Material completo com cards visuais por domínio
- Layout responsivo e acessível (WCAG 2.1 AA)

### 🎯 Simulador de Exame
- 200 questões por certificação
- Simulado completo seguindo distribuição oficial AWS
- Modo prática com 10 questões aleatórias
- Timer inteligente por certificação

### 📊 Resultados
- Meta 80% (acima do score oficial)
- Análise por domínio
- Revisão com explicações detalhadas

---

## 🏗️ Estrutura do Projeto

```
aws-certification-platform/
├── public/                     # Deploy (GitHub Pages)
│   ├── index.html              # Landing page
│   ├── clf-c02/                # Cloud Practitioner ✅
│   ├── dva-c02/                # Developer Associate ✅
│   ├── saa-c03/                # Solutions Architect 🚧
│   ├── dop-c02/                # DevOps Engineer 📋
│   └── aif-c01/                # AI Practitioner 📋
├── src/                        # Código fonte compartilhado
│   ├── assets/                 # Imagens e recursos
│   ├── config/                 # Configurações
│   ├── shared/                 # CSS/JS compartilhados
│   └── utils/                  # Utilitários
├── docs/                       # Guias oficiais AWS (PDFs)
├── tests/                      # Testes automatizados
└── .github/workflows/          # CI/CD
```

---

## 📊 Distribuição por Exame

### CLF-C02 — Cloud Practitioner (65q / 90min / 70%)
| Domínio | Peso |
|---|---|
| Cloud Concepts | 24% |
| Security & Compliance | 30% |
| Technology & Services | 34% |
| Billing & Support | 12% |

### DVA-C02 — Developer Associate (65q / 130min / 72%)
| Domínio | Peso |
|---|---|
| Development | 32% |
| Security | 26% |
| Deployment | 24% |
| Troubleshooting | 18% |

### SAA-C03 — Solutions Architect (65q / 130min / 72%)
| Domínio | Peso |
|---|---|
| Secure Architectures | 30% |
| Resilient Architectures | 26% |
| High-Performing Architectures | 24% |
| Cost-Optimized Architectures | 20% |

### DOP-C02 — DevOps Engineer (75q / 180min / 75%)
| Domínio | Peso |
|---|---|
| SDLC Automation | 22% |
| Configuration Management & IaC | 17% |
| Resilient Cloud Solutions | 15% |
| Monitoring & Logging | 15% |
| Incident & Event Response | 14% |
| Security & Compliance | 17% |

### AIF-C01 — AI Practitioner (65q / 90min / 70%)
| Domínio | Peso |
|---|---|
| Fundamentals of AI & ML | 20% |
| Fundamentals of Generative AI | 24% |
| Applications of Foundation Models | 28% |
| Guidelines for Responsible AI | 14% |
| Security & Compliance for AI | 14% |

---

## 🚀 Como Usar

```bash
# Clonar
git clone https://github.com/Sergio-Sena/AWS-Certification-Platform.git
cd AWS-Certification-Platform

# Servir localmente
cd public
python -m http.server 8000
# Acessar: http://localhost:8000
```

**Produção**: https://sergio-sena.github.io/AWS-Certification-Platform/

---

## 🎨 Tecnologias
- HTML5 + CSS3 (Grid, Flexbox, animações)
- JavaScript ES6+ (módulos, localStorage)
- Font Awesome + Google Fonts (Inter)
- GitHub Pages + GitHub Actions

---

## 📄 Licença
MIT — Projeto educacional para certificações AWS.

---

> 💡 **"Nossa meta de 80% garante que você esteja REALMENTE preparado. É mais desafiador que o exame oficial, mas isso te dará confiança total no dia da prova!"**
