/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */
const questions = [
    {
        id: 1,
        question: "What is TypeScript?",
        correctAnswer: "A",
        category: "TypeScript",
    },
    {
        id: 2,
        question: "Which method transforms an array?",
        correctAnswer: "B",
        category: "Array",
    },
    {
        id: 3,
        question: "Which method filters an array?",
        correctAnswer: "C",
        category: "Array",
    },
    {
        id: 4,
        question: "What does reduce() do?",
        correctAnswer: "D",
        category: "Array",
    },
];

const submissions = [
    {
        student: "Andi",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Budi",
        answers: [
            { questionId: 1, answer: "B" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "A" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Citra",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "C" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "B" },
        ],
    },
];

const studentScores = submissions.map(submission => {

    const correct = submission.answers.filter(answer => {
        const question = questions.find(
            question => question.id === answer.questionId
        );

        return answer.answer === question?.correctAnswer;
    }).length;

    return {
        student: submission.student,
        score: correct * 25
    };
});

console.log("1. Student Scores:");
console.log(studentScores);

const answerResults = submissions.map(submission => {

    const correct = submission.answers.filter(answer => {
        const question = questions.find(
            question => question.id === answer.questionId
        );

        return answer.answer === question?.correctAnswer;
    }).length;

    const wrong = submission.answers.length - correct;

    return {
        student: submission.student,
        correct: correct,
        wrong: wrong
    };
});

console.log("2. Answer Results:");
console.log(answerResults);

const categories = [...new Set(
    questions.map(question => question.category)
)];

const categoryAverages = categories.map(category => {

    const categoryQuestions = questions.filter(
        question => question.category === category
    );

    const categoryScores = submissions.map(submission => {

        let correct = 0;

        categoryQuestions.forEach(question => {

            const answer = submission.answers.find(
                answer => answer.questionId === question.id
            );

            if (answer?.answer === question.correctAnswer) {
                correct++;
            }
        });

        return correct * 25;
    });

    const total = categoryScores.reduce(
        (sum, score) => sum + score,
        0
    );

    const average = total / categoryScores.length;

    return {
        category: category,
        averageScore: Number(average.toFixed(2))
    };
});

console.log("3. Category Averages:");
console.log(categoryAverages);

const scores = studentScores.map(
    student => student.score
);

const totalScore = scores.reduce(
    (total, score) => total + score,
    0
);

const averageScore = totalScore / scores.length;
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);

const passedStudents = studentScores.filter(
    student => student.score > 75
).length;

const failedStudents = studentScores.filter(
    student => student.score <= 75
).length;

const passRate =
    (passedStudents / studentScores.length) * 100;

const analytics = {
    totalStudents: submissions.length,
    averageScore: Number(averageScore.toFixed(2)),
    highestScore: highestScore,
    lowestScore: lowestScore,
    passedStudents: passedStudents,
    failedStudents: failedStudents,
    passRate: Number(passRate.toFixed(2))
};

console.log("4. Final Exam Analytics:");
console.log(analytics);