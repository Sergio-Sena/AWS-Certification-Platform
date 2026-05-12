// DVA-C02 - Banco Completo de 200 Questões
// Distribuição: Development(64) + Security(52) + Deployment(48) + Troubleshooting(36) = 200

const dva200Questions = [];

// Combinar questões reais dos arquivos especializados quando carregados
function loadAllQuestions() {
    const allRealQuestions = [
        ...(window.developmentQuestionsReal || []),
        ...(window.securityQuestionsReal || []),
        ...(window.deploymentQuestionsReal || []),
        ...(window.troubleshootingQuestionsReal || [])
    ];
    
    // Limpar array e adicionar questões reais
    dva200Questions.length = 0;
    dva200Questions.push(...allRealQuestions);
    
    console.log(`DVA-C02: ${dva200Questions.length} questões carregadas`);
    console.log('Distribuição:', {
        development: dva200Questions.filter(q => q.domain === 'development').length,
        security: dva200Questions.filter(q => q.domain === 'security').length,
        deployment: dva200Questions.filter(q => q.domain === 'deployment').length,
        troubleshooting: dva200Questions.filter(q => q.domain === 'troubleshooting').length
    });
}

// Carregar questões quando todos os arquivos estiverem prontos
if (typeof window !== 'undefined') {
    // Aguardar carregamento de todos os arquivos
    const checkAndLoad = () => {
        if (window.developmentQuestionsReal && 
            window.securityQuestionsReal && 
            window.deploymentQuestionsReal && 
            window.troubleshootingQuestionsReal) {
            loadAllQuestions();
        } else {
            setTimeout(checkAndLoad, 100);
        }
    };
    checkAndLoad();
}

// Função para obter questões por domínio
function getQuestionsByDomain(domain) {
    return dva200Questions.filter(q => q.domain === domain);
}

// Função para selecionar 65 questões para simulado
function selectExamQuestions() {
    const distribution = {
        development: 21,    // 32%
        security: 17,       // 26%
        deployment: 15,     // 24%
        troubleshooting: 12 // 18%
    };
    
    let selectedQuestions = [];
    
    Object.keys(distribution).forEach(domain => {
        const domainQuestions = getQuestionsByDomain(domain);
        const shuffled = shuffleArray(domainQuestions);
        const selected = shuffled.slice(0, distribution[domain]);
        selectedQuestions = selectedQuestions.concat(selected);
    });
    
    return shuffleArray(selectedQuestions);
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Exportar para uso global
window.dva200Questions = dva200Questions;
window.getQuestionsByDomain = getQuestionsByDomain;
window.selectExamQuestions = selectExamQuestions;