import inquirer from "inquirer";
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    }
];
let score = 0;
let currentQuestionIndex = 0;
const askQuestion = async (question) => {
    const { answer } = await inquirer.prompt([
        {
            type: 'list',
            name: 'answer',
            message: question.question,
            choices: question.options
        }
    ]);
    if (answer === question.answer) {
        score++;
        console.log("Correct!\n");
    }
    else {
        console.log(`Wrong! The correct answer is ${question.answer}\n`);
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        askQuestion(questions[currentQuestionIndex]);
    }
    else {
        console.log(`Quiz finished! Your score is ${score}/${questions.length}`);
    }
};
console.log("Welcome to the CLI Quiz!");
askQuestion(questions[currentQuestionIndex]);
