# Prompt de Continuação — AIF-C01 Simulado 03

## Contexto do Projeto
Plataforma de certificações AWS: CLF-C02 ✅, DVA-C02 ✅, SAA-C03 ✅, DOP-C02 ✅, AIF-C01 🔄

## Onde Paramos — AIF-C01
- **Banco atual:** 215 questões (39+47+54+27+28+20 extras)
- **Meta original:** 195 (3x65). Banco já está acima da meta.
- **Material de estudo:** atualizado com Encontros 1-17, Simulados 01-02
- **Branch:** develop (trabalho) → main (deploy)

## O que falta fazer

### 1. Incorporar 10 melhores questões do Simulado 03
O arquivo `docs/Simulado_Comentado_03.pptx.md` tem 20 questões (Encontros 7-14).
Selecionar as 10 que cobrem **gaps** no banco e adicionar nos arquivos de domínio corretos:

| Questão | Tema (GAP no banco) | Domínio | Arquivo destino |
|---|---|---|---|
| Q2 | Rekognition DetectText (cena natural vs Textract docs) | D3 | foundation-models-questions.js |
| Q4 | Polly Lexicon (pronúncia customizada) | D3 | foundation-models-questions.js |
| Q5 | Comprehend Topic Modeling (não supervisionado) | D3 | foundation-models-questions.js |
| Q6 | Textract Queries (linguagem natural sobre docs) | D3 | foundation-models-questions.js |
| Q7 | Translate Custom Terminology (glossário) | D3 | foundation-models-questions.js |
| Q8 | Amazon Q in Connect (assistência a agentes) | D3 | foundation-models-questions.js |
| Q12 | SageMaker Experiments (rastrear runs) | D1 | ai-ml-questions.js |
| Q16 | Perplexity (métrica intrínseca de LLMs) | D2 | generative-ai-questions.js |
| Q18 | Provisioned Throughput (tráfego alto) | D2 | generative-ai-questions.js |
| Q19 | Custo Bedrock (tokens entrada + saída) | D2 | generative-ai-questions.js |

### 2. Formato das questões
```javascript
{
    id: '{prefix}_{number}',
    question: "texto da questão",
    options: ["A", "B", "C", "D"],
    correct: [índice_zero_based],  // ou array para múltipla resposta
    explanation: "explicação",
    topic: "tema",
    domain: "domínio"
}
```

### 3. IDs por domínio
- ai-ml-questions.js: último ID é `aiml_039` → próximo: `aiml_040`
- generative-ai-questions.js: verificar último ID
- foundation-models-questions.js: verificar último ID

### 4. Após incorporar questões
- Commit: `feat(AIF-C01): add Simulado 03 questions covering gaps`
- Push para develop
- Considerar PR → main para deploy

## Arquivos do Projeto AIF-C01
```
public/aif-c01/
├── data/
│   ├── aif-study-material.js ✅ (atualizado)
│   ├── aif-questions-195.js ✅ (loader)
│   ├── ai-ml-questions.js ✅ (39q)
│   ├── generative-ai-questions.js ✅ (47q)
│   ├── foundation-models-questions.js ✅ (54q)
│   ├── responsible-ai-questions.js ✅ (27q)
│   ├── security-ai-questions.js ✅ (28q)
│   └── aif-extra-questions.js ✅ (20q - prova real)
├── js/aif-script.js ✅
└── index.html ✅
```

## Regras
- Append nos arquivos existentes (não criar novos)
- Manter distribuição por peso do exame
- IDs sequenciais por domínio
- Commit na branch develop
