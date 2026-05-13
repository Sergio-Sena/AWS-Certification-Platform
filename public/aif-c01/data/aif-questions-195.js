// AIF-C01 - Banco Completo de 195 Questões (3x65)
// Distribuição: AI/ML(39) + GenAI(47) + Foundation Models(54) + Responsible AI(27) + Security(28) = 195

function selectAIFExamQuestions() {
    const distribution = {
        'ai-ml': 13,
        'generative-ai': 16,
        'foundation-models': 18,
        'responsible-ai': 9,
        'security-ai': 9
    };
    let selected = [];
    Object.keys(distribution).forEach(domain => {
        const questions = getAIFQuestionsByDomain(domain);
        selected = selected.concat(shuffleArray(questions).slice(0, distribution[domain]));
    });
    return shuffleArray(selected);
}

function getAIFQuestionsByDomain(domain) {
    const all = window.aif195Questions || [];
    return all.filter(q => q.domain === domain);
}

function shuffleArray(array) {
    const s = [...array];
    for (let i = s.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [s[i], s[j]] = [s[j], s[i]]; }
    return s;
}

window.aif195Questions = [];
window.selectAIFExamQuestions = selectAIFExamQuestions;
window.getAIFQuestionsByDomain = getAIFQuestionsByDomain;

document.addEventListener('DOMContentLoaded', function() {
    window.aif195Questions = [
        ...(window.aiMlQuestions || []),
        ...(window.generativeAiQuestions || []),
        ...(window.foundationModelsQuestions || []),
        ...(window.responsibleAiQuestions || []),
        ...(window.securityAiQuestions || [])
    ];
    console.log('AIF-C01 Question Bank:');
    console.log('  AI/ML:', (window.aiMlQuestions || []).length, '/ 39');
    console.log('  Generative AI:', (window.generativeAiQuestions || []).length, '/ 47');
    console.log('  Foundation Models:', (window.foundationModelsQuestions || []).length, '/ 54');
    console.log('  Responsible AI:', (window.responsibleAiQuestions || []).length, '/ 27');
    console.log('  Security:', (window.securityAiQuestions || []).length, '/ 28');
    console.log('  Total:', window.aif195Questions.length, '/ 195');
});
