// AWS Certification Platform - Core Configuration
const CERTIFICATION_CONFIG = {
    // Configurações Globais
    passingScore: 80,
    examQuestions: 65,
    bankQuestions: 200,
    examDuration: 130, // minutos
    
    // Mensagem Motivacional
    motivationalMessage: `
        💡 Nossa meta de 80% garante que você esteja REALMENTE preparado.
        É mais desafiador que o exame oficial, mas isso te dará confiança total no dia da prova!
    `,
    
    // Distribuição de Questões por Certificação
    distributions: {
        clf: {
            // Simulado (65 questões)
            exam: { domain1: 16, domain2: 19, domain3: 22, domain4: 8 },
            // Banco (200 questões)
            bank: { domain1: 48, domain2: 60, domain3: 68, domain4: 24 }
        },
        dva: {
            // Simulado (65 questões)
            exam: { domain1: 21, domain2: 17, domain3: 15, domain4: 12 },
            // Banco (200 questões)
            bank: { domain1: 64, domain2: 52, domain3: 48, domain4: 36 }
        },
        saa: {
            // Simulado (65 questões)
            exam: { domain1: 19, domain2: 18, domain3: 16, domain4: 12 },
            // Banco (200 questões)
            bank: { domain1: 60, domain2: 56, domain3: 48, domain4: 36 }
        }
    },
    
    // Temas por Certificação
    themes: {
        clf: {
            name: 'Cloud Practitioner',
            code: 'CLF-C02',
            primary: '#00A651',
            secondary: '#146EB4',
            icon: '☁️'
        },
        dva: {
            name: 'Developer Associate',
            code: 'DVA-C02',
            primary: '#FF9900',
            secondary: '#232F3E',
            icon: '⚡'
        },
        saa: {
            name: 'Solutions Architect Associate',
            code: 'SAA-C03',
            primary: '#007EB9',
            secondary: '#232F3E',
            icon: '🏗️'
        }
    }
};

// Função para aplicar tema
function applyTheme(certType) {
    const theme = CERTIFICATION_CONFIG.themes[certType];
    if (theme) {
        document.documentElement.style.setProperty('--primary-color', theme.primary);
        document.documentElement.style.setProperty('--secondary-color', theme.secondary);
    }
}

// Função para navegação entre certificações
function navigateTo(cert) {
    window.location.href = `${cert}/index.html`;
}

// Função para voltar ao hub
function goHome() {
    window.location.href = '../index.html';
}

// Exportar configurações
window.CERTIFICATION_CONFIG = CERTIFICATION_CONFIG;
window.applyTheme = applyTheme;
window.navigateTo = navigateTo;
window.goHome = goHome;