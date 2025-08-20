// Teste da lógica de verificação de respostas
function testAnswerLogic() {
    console.log('🧪 Testando lógica de verificação de respostas...\n');
    
    // Casos de teste
    const testCases = [
        {
            name: 'Questão única - Resposta correta',
            correctAnswer: [2],
            userAnswer: 2,
            expected: true
        },
        {
            name: 'Questão única - Resposta incorreta',
            correctAnswer: [2],
            userAnswer: 1,
            expected: false
        },
        {
            name: 'Questão múltipla - Todas corretas',
            correctAnswer: [0, 2],
            userAnswer: [0, 2],
            expected: true
        },
        {
            name: 'Questão múltipla - Ordem diferente mas corretas',
            correctAnswer: [0, 2],
            userAnswer: [2, 0],
            expected: true
        },
        {
            name: 'Questão múltipla - Faltando uma resposta',
            correctAnswer: [0, 2],
            userAnswer: [0],
            expected: false
        },
        {
            name: 'Questão múltipla - Resposta extra',
            correctAnswer: [0, 2],
            userAnswer: [0, 1, 2],
            expected: false
        },
        {
            name: 'Questão múltipla - Completamente errada',
            correctAnswer: [0, 2],
            userAnswer: [1, 3],
            expected: false
        }
    ];
    
    let passed = 0;
    let failed = 0;
    
    testCases.forEach((test, index) => {
        const result = checkAnswer(test.correctAnswer, test.userAnswer);
        const status = result === test.expected ? '✅ PASSOU' : '❌ FALHOU';
        
        console.log(`Teste ${index + 1}: ${test.name}`);
        console.log(`  Resposta correta: ${JSON.stringify(test.correctAnswer)}`);
        console.log(`  Resposta usuário: ${JSON.stringify(test.userAnswer)}`);
        console.log(`  Esperado: ${test.expected}, Resultado: ${result}`);
        console.log(`  Status: ${status}\n`);
        
        if (result === test.expected) {
            passed++;
        } else {
            failed++;
        }
    });
    
    console.log(`📊 Resumo dos testes:`);
    console.log(`✅ Passou: ${passed}`);
    console.log(`❌ Falhou: ${failed}`);
    console.log(`📈 Taxa de sucesso: ${Math.round((passed / testCases.length) * 100)}%`);
    
    return failed === 0;
}

// Função que replica a lógica corrigida
function checkAnswer(correctAnswer, userAnswer) {
    let isCorrect = false;
    
    if (correctAnswer.length > 1) { // Multiple choice
        if (Array.isArray(userAnswer) && userAnswer.length === correctAnswer.length) {
            isCorrect = correctAnswer.every(ans => userAnswer.includes(ans)) && 
                       userAnswer.every(ans => correctAnswer.includes(ans));
        }
    } else { // Single choice
        isCorrect = userAnswer === correctAnswer[0];
    }
    
    return isCorrect;
}

// Executar teste
testAnswerLogic();