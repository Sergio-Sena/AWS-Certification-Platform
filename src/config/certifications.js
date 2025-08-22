// Configurações das certificações AWS
export const CERTIFICATIONS = {
    'clf-c02': {
        name: 'Cloud Practitioner',
        code: 'CLF-C02',
        theme: 'green',
        primaryColor: '#00A651',
        secondaryColor: '#146EB4',
        duration: 90, // minutos
        totalQuestions: 65,
        passingScore: 70,
        recommendedScore: 80,
        domains: [
            { name: 'Cloud Concepts', weight: 24, examQuestions: 16, bankQuestions: 48 },
            { name: 'Security & Compliance', weight: 30, examQuestions: 19, bankQuestions: 60 },
            { name: 'Technology & Services', weight: 34, examQuestions: 22, bankQuestions: 68 },
            { name: 'Billing & Support', weight: 12, examQuestions: 8, bankQuestions: 24 }
        ]
    },
    'dva-c02': {
        name: 'Developer Associate',
        code: 'DVA-C02',
        theme: 'orange',
        primaryColor: '#FF9900',
        secondaryColor: '#232F3E',
        duration: 130, // minutos
        totalQuestions: 65,
        passingScore: 72,
        recommendedScore: 80,
        domains: [
            { name: 'Development', weight: 32, examQuestions: 21, bankQuestions: 64 },
            { name: 'Security', weight: 26, examQuestions: 17, bankQuestions: 52 },
            { name: 'Deployment', weight: 24, examQuestions: 15, bankQuestions: 48 },
            { name: 'Troubleshooting', weight: 18, examQuestions: 12, bankQuestions: 36 }
        ]
    },
    'saa-c03': {
        name: 'Solutions Architect Associate',
        code: 'SAA-C03',
        theme: 'blue',
        primaryColor: '#007EB9',
        secondaryColor: '#232F3E',
        duration: 130, // minutos
        totalQuestions: 65,
        passingScore: 72,
        recommendedScore: 80,
        domains: [
            { name: 'Resilient Architectures', weight: 30, examQuestions: 19, bankQuestions: 60 },
            { name: 'High-Performing Architectures', weight: 28, examQuestions: 18, bankQuestions: 56 },
            { name: 'Secure Applications', weight: 24, examQuestions: 16, bankQuestions: 48 },
            { name: 'Cost-Optimized Architectures', weight: 18, examQuestions: 12, bankQuestions: 36 }
        ]
    }
};

export const EXAM_CONFIG = {
    practiceMode: {
        questionCount: 10,
        timeLimit: null
    },
    fullExam: {
        questionCount: 65,
        showTimer: true
    }
};