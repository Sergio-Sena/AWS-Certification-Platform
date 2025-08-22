// Função para selecionar questões conforme distribuição oficial CLF-C02
function selectCLFExamQuestions() {
    // Distribuição oficial AWS CLF-C02 (65 questões):
    const domainDistribution = {
        'cloud-concepts': 16,    // 24% de 65 questões
        'security': 20,          // 30% de 65 questões  
        'technology': 22,        // 34% de 65 questões
        'billing': 7             // 12% de 65 questões
    };
    
    // Classificar questões por domínio
    const questionsByDomain = {
        'cloud-concepts': [],
        'security': [],
        'technology': [],
        'billing': []
    };
    
    // Classificar questões existentes por domínio
    clf200Questions.forEach(question => {
        const domain = question.domain || question.topic || 'technology';
        if (questionsByDomain[domain]) {
            questionsByDomain[domain].push(question);
        } else {
            questionsByDomain['technology'].push(question); // Default para technology
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
        const remaining = clf200Questions.filter(q => !selectedQuestions.includes(q));
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
window.selectCLFExamQuestions = selectCLFExamQuestions;