/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const scores: number[] = [
    95, 87, 76, 65, 92, 84, 73, 58, 90, 81
];

let gradeA: number = 0;
let gradeB: number = 0;
let gradeC: number = 0;
let gradeD: number = 0;

let highestScore: number = scores[0];
let lowestScore: number = scores[0];
let totalScore: number = 0;

for (let i = 0; i < scores.length; i++) {

    // Grade
    if (scores[i] >= 90) {
        gradeA++;
    } else if (scores[i] >= 80) {
        gradeB++;
    } else if (scores[i] >= 70) {
        gradeC++;
    } else {
        gradeD++;
    }

    // Highest score
    if (scores[i] > highestScore) {
        highestScore = scores[i];
    }

    // Lowest score
    if (scores[i] < lowestScore) {
        lowestScore = scores[i];
    }

    // Total
    totalScore += scores[i];
}

const averageScore: number = totalScore / scores.length;

console.log("Number of A students:", gradeA);
console.log("Number of B students:", gradeB);
console.log("Number of C students:", gradeC);
console.log("Number of D students:", gradeD);
console.log("Highest score:", highestScore);
console.log("Lowest score:", lowestScore);
console.log("Average score:", averageScore);