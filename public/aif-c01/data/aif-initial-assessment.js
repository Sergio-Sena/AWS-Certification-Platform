// AIF-C01 - Avaliação Inicial (diagnóstico 80/20)
const aifInitialAssessment = [
    {
        id: 'assess_1',
        question: "Qual é a diferença entre Machine Learning e Deep Learning?",
        options: [
            "São a mesma coisa",
            "Deep Learning usa redes neurais com múltiplas camadas, ML é mais amplo",
            "ML é mais avançado que Deep Learning",
            "Deep Learning não usa dados"
        ],
        correct: 1,
        domain: 'ai-ml'
    },
    {
        id: 'assess_2',
        question: "O que é RAG (Retrieval-Augmented Generation)?",
        options: [
            "Um tipo de rede neural",
            "Técnica que busca dados externos e injeta no prompt do LLM para respostas contextualizadas",
            "Um modelo de linguagem da AWS",
            "Um método de treinamento de modelos"
        ],
        correct: 1,
        domain: 'foundation-models'
    },
    {
        id: 'assess_3',
        question: "Para que serve o parâmetro 'temperatura' em um LLM?",
        options: [
            "Controlar o tamanho da resposta",
            "Definir o idioma da resposta",
            "Controlar a criatividade/aleatoriedade da geração",
            "Limitar o custo da inferência"
        ],
        correct: 2,
        domain: 'generative-ai'
    },
    {
        id: 'assess_4',
        question: "O que são 'alucinações' em modelos de IA generativa?",
        options: [
            "Erros de programação no modelo",
            "Quando o modelo gera informação falsa com tom de certeza",
            "Quando o modelo não responde",
            "Problemas de performance"
        ],
        correct: 1,
        domain: 'responsible-ai'
    },
    {
        id: 'assess_5',
        question: "No Amazon Bedrock, como proteger dados sensíveis nos prompts?",
        options: [
            "Não é possível",
            "Usar Bedrock Guardrails com PII redaction",
            "Criptografar o prompt manualmente",
            "Usar apenas modelos menores"
        ],
        correct: 1,
        domain: 'security-ai'
    }
];

window.aifInitialAssessment = aifInitialAssessment;
