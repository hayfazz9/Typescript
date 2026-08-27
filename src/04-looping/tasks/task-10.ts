/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const assignments = [
    { name: "Andi", submitted: true, score: 85 },
    { name: "Budi", submitted: false, score: 0 },
    { name: "Citra", submitted: true, score: 70 },
    { name: "Dinda", submitted: true, score: 90 },
    { name: "Eka", submitted: false, score: 0 },
    { name: "Fajar", submitted: true, score: 60 }
];

let submittedCount: number = 0;
let notSubmittedCount: number = 0;
let passedCount: number = 0;
let reviseCount: number = 0;

let notSubmittedNames: string[] = [];
let reviseNames: string[] = [];

let totalScore: number = 0;


for (let i = 0; i < assignments.length; i++) {
    if (assignments[i].submitted === true) {
        submittedCount++;
        if (assignments[i].score >= 75) {
            passedCount++;
        } else {
            reviseCount++;
            reviseNames.push(assignments[i].name);
        }

    } else {
        notSubmittedCount++;
        notSubmittedNames.push(assignments[i].name);
    }
    notSubmittedCount++;
}

const classAverage: number = totalScore / assignments.length;

console.log("Students who submitted:", submittedCount);
console.log("Students who did not submit:", notSubmittedCount);
console.log("Students who passed:", passedCount);
console.log("Students who must revise:", reviseCount);

console.log("Students who did not submit:", notSubmittedNames);
console.log("Students who must revise:", reviseNames);

console.log("Class average score:", classAverage);