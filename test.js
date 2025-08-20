function runTests() {
    console.log('Running tests...');

    // Mock data
    const mockQuestions = [
        { id: 1, topic: 'lambda', correct: [0] }, // Single choice, correct answer is 0
        { id: 2, topic: 'dynamodb', correct: [1, 2] }, // Multiple choice, correct answers are 1 and 2
        { id: 3, topic: 's3', correct: [3] }, // Single choice, correct answer is 3
        { id: 4, topic: 'ec2', correct: [0, 3] }, // Multiple choice, correct answers are 0 and 3
    ];

    // Test case 1: All correct
    examState = {
        questions: mockQuestions,
        answers: {
            1: 0,
            2: [1, 2],
            3: 3,
            4: [0, 3]
        },
        startTime: new Date()
    };
    let results = calculateResults();
    console.assert(results.correctAnswers === 4, 'Test Case 1 Failed: All correct');
    console.assert(results.percentage === 100, 'Test Case 1 Failed: Percentage should be 100');

    // Test case 2: Some correct
    examState = {
        questions: mockQuestions,
        answers: {
            1: 1, // wrong
            2: [1, 2], // correct
            3: 3, // correct
            4: [0] // wrong
        },
        startTime: new Date()
    };
    results = calculateResults();
    console.assert(results.correctAnswers === 2, 'Test Case 2 Failed: Some correct');
    console.assert(results.percentage === 50, 'Test Case 2 Failed: Percentage should be 50');

    // Test case 3: All wrong
    examState = {
        questions: mockQuestions,
        answers: {
            1: 1,
            2: [0, 1],
            3: 2,
            4: [1, 2]
        },
        startTime: new Date()
    };
    results = calculateResults();
    console.assert(results.correctAnswers === 0, 'Test Case 3 Failed: All wrong');
    console.assert(results.percentage === 0, 'Test Case 3 Failed: Percentage should be 0');

    // Test case 4: No answers
    examState = {
        questions: mockQuestions,
        answers: {},
        startTime: new Date()
    };
    results = calculateResults();
    console.assert(results.correctAnswers === 0, 'Test Case 4 Failed: No answers');
    console.assert(results.percentage === 0, 'Test Case 4 Failed: Percentage should be 0');

    console.log('Tests finished.');
}
