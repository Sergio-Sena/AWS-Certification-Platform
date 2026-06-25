// CLF-C02 - Banco de Questões (Loader)
// Combina questões de todos os arquivos por domínio
// Distribuição exame: Cloud Concepts(24%) + Security(30%) + Technology(34%) + Billing(12%)

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Função para selecionar 65 questões para simulado CLF
function selectCLFExamQuestions() {
    const distribution = {
        'cloud-concepts': 16,  // 24%
        'security': 20,        // 30%
        'technology': 22,      // 34%
        'billing': 7           // 12%
    };

    const allQuestions = window.clf200Questions || [];
    let selected = [];

    Object.keys(distribution).forEach(domain => {
        const domainQuestions = allQuestions.filter(q => q.domain === domain);
        const shuffled = shuffleArray(domainQuestions);
        selected = selected.concat(shuffled.slice(0, distribution[domain]));
    });

    return shuffleArray(selected);
}

// Combinar todas as questões quando DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    const allQuestions = [
        ...(window.cloudConceptsQuestions || []),
        ...(window.securityQuestions || []),
        ...(window.technologyQuestions || []),
        ...(window.billingQuestions || [])
    ];

    window.clf200Questions = allQuestions;
    window.selectCLFExamQuestions = selectCLFExamQuestions;

    console.log('CLF-C02 Question Bank:');
    console.log('  Cloud Concepts:', (window.cloudConceptsQuestions || []).length);
    console.log('  Security:', (window.securityQuestions || []).length);
    console.log('  Technology:', (window.technologyQuestions || []).length);
    console.log('  Billing:', (window.billingQuestions || []).length);
    console.log('  Total:', allQuestions.length);
});
