// DOP-C02 - Banco Completo de 225 Questões (3x75)
// Distribuição: SDLC(50) + Config(38) + Resilient(34) + Monitoring(34) + Incident(32) + Security(37) = 225

function selectDOPExamQuestions() {
    const distribution = { 'sdlc': 16, 'config-iac': 13, 'resilient': 11, 'monitoring': 11, 'incident': 11, 'security': 13 };
    let selected = [];
    Object.keys(distribution).forEach(domain => {
        const questions = (window.dop225Questions || []).filter(q => q.domain === domain);
        selected = selected.concat(shuffleArray(questions).slice(0, distribution[domain]));
    });
    return shuffleArray(selected);
}

function shuffleArray(a) { const s=[...a]; for(let i=s.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[s[i],s[j]]=[s[j],s[i]];} return s; }

window.dop225Questions = [];
window.selectDOPExamQuestions = selectDOPExamQuestions;

document.addEventListener('DOMContentLoaded', function() {
    window.dop225Questions = [
        ...(window.sdlcQuestions || []),
        ...(window.configIacQuestions || []),
        ...(window.resilientDopQuestions || []),
        ...(window.monitoringQuestions || []),
        ...(window.incidentQuestions || []),
        ...(window.securityDopQuestions || [])
    ];
    console.log('DOP-C02 Question Bank:', window.dop225Questions.length, '/ 225');
});
