// Função para selecionar questões conforme distribuição oficial DVA-C02
function selectQuestionsByDomain() {
    // Distribuição oficial AWS DVA-C02 (65 questões):
    const domainDistribution = {
        development: 21,    // 32% de 65 questões
        security: 17,       // 26% de 65 questões  
        deployment: 15,     // 24% de 65 questões (corrigido)
        troubleshooting: 12 // 18% de 65 questões (corrigido)
    };
    
    // Classificar questões por domínio
    const questionsByDomain = {
        development: [],
        security: [],
        deployment: [],
        troubleshooting: []
    };
    
    // Mapear tópicos para domínios
    const topicToDomain = {
        'lambda': 'development',
        'dynamodb': 'development', 
        'apigateway': 'development',
        's3': 'development',
        'ec2': 'development',
        'containers': 'development',
        'messaging': 'development',
        'cognito': 'development',
        'systems-manager': 'development',
        'security': 'security',
        'deployment': 'deployment',
        'monitoring': 'troubleshooting'
    };
    
    // Classificar questões existentes
    questionBank.forEach(question => {
        const domain = topicToDomain[question.topic] || 'development';
        questionsByDomain[domain].push(question);
    });
    
    // Selecionar questões respeitando a distribuição
    let selectedQuestions = [];
    
    Object.keys(domainDistribution).forEach(domain => {
        const needed = domainDistribution[domain];
        const available = questionsByDomain[domain];
        const shuffled = shuffleArray(available);
        const selected = shuffled.slice(0, Math.min(needed, available.length));
        selectedQuestions = selectedQuestions.concat(selected);
    });
    
    // Se não temos questões suficientes, completar com questões aleatórias
    while (selectedQuestions.length < 65) {
        const remaining = questionBank.filter(q => !selectedQuestions.includes(q));
        if (remaining.length === 0) break;
        const randomQuestion = remaining[Math.floor(Math.random() * remaining.length)];
        selectedQuestions.push(randomQuestion);
    }
    
    return shuffleArray(selectedQuestions).slice(0, 65);
}