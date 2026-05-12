// SAA-C03 - Banco Completo de 200 Questões
// Distribuição: Resilient(60) + Performance(56) + Secure(48) + Cost(36) = 200

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function getSAAQuestionsByDomain(domain) {
    const all = [
        ...(window.resilientQuestions || []),
        ...(window.performanceQuestions || []),
        ...(window.secureQuestions || []),
        ...(window.costQuestions || [])
    ];
    return all.filter(q => q.domain === domain);
}

function selectSAAExamQuestions() {
    const distribution = {
        'resilient': 19,
        'performance': 18,
        'secure': 16,
        'cost': 12
    };
    let selected = [];
    Object.keys(distribution).forEach(domain => {
        const questions = getSAAQuestionsByDomain(domain);
        selected = selected.concat(shuffleArray(questions).slice(0, distribution[domain]));
    });
    return shuffleArray(selected);
}

function selectPracticeQuestions() {
    const all = [
        ...(window.resilientQuestions || []),
        ...(window.performanceQuestions || []),
        ...(window.secureQuestions || []),
        ...(window.costQuestions || [])
    ];
    return shuffleArray(all).slice(0, 10);
}

window.saa200Questions = [];
window.getSAAQuestionsByDomain = getSAAQuestionsByDomain;
window.selectSAAExamQuestions = selectSAAExamQuestions;
window.selectPracticeQuestions = selectPracticeQuestions;

document.addEventListener('DOMContentLoaded', function() {
    window.saa200Questions = [
        ...(window.resilientQuestions || []),
        ...(window.performanceQuestions || []),
        ...(window.secureQuestions || []),
        ...(window.costQuestions || [])
    ];
    console.log('SAA-C03 Question Bank Loaded:');
    console.log('  Resilient:', (window.resilientQuestions || []).length, '/ 60');
    console.log('  Performance:', (window.performanceQuestions || []).length, '/ 56');
    console.log('  Secure:', (window.secureQuestions || []).length, '/ 48');
    console.log('  Cost:', (window.costQuestions || []).length, '/ 36');
    console.log('  Total:', window.saa200Questions.length, '/ 200');
});
