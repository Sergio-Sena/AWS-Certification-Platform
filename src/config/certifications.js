// Configurações das certificações AWS
export const CERTIFICATIONS = {
    'clf-c02': {
        name: 'Cloud Practitioner',
        code: 'CLF-C02',
        theme: 'green',
        primaryColor: '#00A651',
        duration: 90,
        totalQuestions: 65,
        passingScore: 70,
        recommendedScore: 80,
        bankSize: 200,
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
        duration: 130,
        totalQuestions: 65,
        passingScore: 72,
        recommendedScore: 80,
        bankSize: 200,
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
        duration: 130,
        totalQuestions: 65,
        passingScore: 72,
        recommendedScore: 80,
        bankSize: 200,
        domains: [
            { name: 'Secure Architectures', weight: 30, examQuestions: 19, bankQuestions: 60 },
            { name: 'Resilient Architectures', weight: 26, examQuestions: 17, bankQuestions: 52 },
            { name: 'High-Performing Architectures', weight: 24, examQuestions: 16, bankQuestions: 48 },
            { name: 'Cost-Optimized Architectures', weight: 20, examQuestions: 13, bankQuestions: 40 }
        ]
    },
    'dop-c02': {
        name: 'DevOps Engineer Professional',
        code: 'DOP-C02',
        theme: 'purple',
        primaryColor: '#8B5CF6',
        duration: 180,
        totalQuestions: 75,
        passingScore: 75,
        recommendedScore: 80,
        bankSize: 225,
        domains: [
            { name: 'SDLC Automation', weight: 22, examQuestions: 16, bankQuestions: 50 },
            { name: 'Configuration Management & IaC', weight: 17, examQuestions: 13, bankQuestions: 38 },
            { name: 'Resilient Cloud Solutions', weight: 15, examQuestions: 11, bankQuestions: 34 },
            { name: 'Monitoring & Logging', weight: 15, examQuestions: 11, bankQuestions: 34 },
            { name: 'Incident & Event Response', weight: 14, examQuestions: 10, bankQuestions: 32 },
            { name: 'Security & Compliance', weight: 17, examQuestions: 13, bankQuestions: 37 }
        ]
    },
    'aif-c01': {
        name: 'AI Practitioner',
        code: 'AIF-C01',
        theme: 'teal',
        primaryColor: '#06B6D4',
        duration: 90,
        totalQuestions: 65,
        passingScore: 70,
        recommendedScore: 80,
        bankSize: 195,
        domains: [
            { name: 'Fundamentals of AI & ML', weight: 20, examQuestions: 13, bankQuestions: 39 },
            { name: 'Fundamentals of Generative AI', weight: 24, examQuestions: 16, bankQuestions: 47 },
            { name: 'Applications of Foundation Models', weight: 28, examQuestions: 18, bankQuestions: 54 },
            { name: 'Guidelines for Responsible AI', weight: 14, examQuestions: 9, bankQuestions: 27 },
            { name: 'Security & Compliance for AI', weight: 14, examQuestions: 9, bankQuestions: 28 }
        ]
    }
};

export const EXAM_CONFIG = {
    practiceMode: {
        questionCount: 10,
        timeLimit: null
    },
    fullExam: {
        showTimer: true
    }
};
