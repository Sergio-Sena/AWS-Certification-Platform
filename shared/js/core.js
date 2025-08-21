// AWS Certification Platform - Core Configuration
const CERTIFICATION_CONFIG = {
    // Configurações Globais (Seguindo padrões oficiais AWS)
    passingScore: {
        clf: 70, // CLF-C02 oficial: 700/1000 (70%)
        dva: 72, // DVA-C02 oficial: 720/1000 (72%)
        saa: 72  // SAA-C03 oficial: 720/1000 (72%)
    },
    examQuestions: 65,
    bankQuestions: 200,
    examDuration: 130, // minutos
    
    // Mensagem Motivacional
    getMotivationalMessage: function(cert, score) {
        const officialScore = this.passingScore[cert];
        if (score >= 80) {
            return `🎉 Excelente! Com ${score}% você está MUITO bem preparado! Considere agendar sua prova oficial AWS - você tem grandes chances de aprovação!`;
        } else if (score >= officialScore) {
            return `✅ Parabéns! Você atingiu ${score}%, acima da nota oficial (${officialScore}%). Continue praticando para aumentar sua confiança!`;
        } else {
            return `📚 Você obteve ${score}%. A nota oficial é ${officialScore}%. Continue estudando - você está no caminho certo!`;
        }
    },
    
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