/**
 * You are developing a simple exam analytics system.
 * Tasks: 
 * 1. Calculate student score (each correct answer get 20 points)
 * 2. Get students that pass (> 70)
 * 3. Find student who reach highest score 
 * 4. Calculate class's average score
 */

const students = [
    {
        id: 1,
        name: "Andi",
        answers: ["A", "B", "C", "A", "B"],
    },
    {
        id: 2,
        name: "Budi",
        answers: ["A", "C", "C", "A", "D"],
    },
    {
        id: 3,
        name: "Citra",
        answers: ["B", "B", "C", "A", "B"],
    },
];

const correctAnswers = ["A", "B", "C", "A", "B"];

// 1.menghitung nilai siswa
const studentScores = students.map(student => {
    const correct = student.answers.filter(
        (answer, index) => answer === correctAnswers[index]
    ).length;

    const score = correct * 20;

    return {
        name: student.name,
        score: score
    };
});

console.log("Student Scores:");
console.log(studentScores);


// 2. siswa yang lulus (> 70)
const passedStudents = studentScores.filter(
    student => student.score > 70
);

console.log("Passed Students:");
console.log(passedStudents);


// 3. Siswa dengan nilaai tertinggi
const highestScore = studentScores.reduce(
    (highest, student) =>
        student.score > highest.score ? student : highest
);

console.log("Highest Score:");
console.log(highestScore);


// 4. Menghitung rata rata
const totalScore = studentScores.reduce(
    (total, student) => total + student.score,
    0
);

const averageScore = totalScore / studentScores.length;

console.log("Class Average:");
console.log(averageScore);