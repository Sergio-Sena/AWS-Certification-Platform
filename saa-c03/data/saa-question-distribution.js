// Função para selecionar questões conforme distribuição oficial SAA-C03
function selectSAAExamQuestions() {
    // Distribuição oficial AWS SAA-C03 (65 questões):
    const domainDistribution = {
        'resilient': 19,      // 30% de 65 questões
        'performance': 18,    // 28% de 65 questões  
        'secure': 16,         // 24% de 65 questões
        'cost': 12            // 18% de 65 questões
    };
    
    // Classificar questões por domínio
    const questionsByDomain = {
        'resilient': [],
        'performance': [],
        'secure': [],
        'cost': []
    };
    
    // Classificar questões existentes por domínio
    saa200Questions.forEach(question => {
        const domain = question.domain || question.topic || 'resilient';
        if (questionsByDomain[domain]) {
            questionsByDomain[domain].push(question);
        } else {
            questionsByDomain['resilient'].push(question); // Default para resilient
        }
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
        const remaining = saa200Questions.filter(q => !selectedQuestions.includes(q));
        if (remaining.length === 0) break;
        const randomQuestion = remaining[Math.floor(Math.random() * remaining.length)];
        selectedQuestions.push(randomQuestion);
    }
    
    return shuffleArray(selectedQuestions).slice(0, 65);
}

// Função auxiliar para embaralhar array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Disponibilizar globalmente
window.selectSAAExamQuestions = selectSAAExamQuestions;