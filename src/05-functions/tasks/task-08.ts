/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
let submission = [
   { name: "Ciara", submitted: true, score: 95 },
   { name: "Anin", submitted: true, score: 90 },
   { name: "Mouza", submitted: true, score: 85 },
   { name: "Hayfa", submitted: false, score: 0 },
   { name: "Nabil", submitted: true, score: 70 },
   { name: "Zidan", submitted: true, score: 87 },
]

function countTotalStudents(submissions: { name: string; submitted: boolean; score: number }[]): number {
  return submissions.length;
}

function countSubmitted(submissions: { name: string; submitted: boolean; score: number }[]): number {
  let count = 0;
  for (let i = 0; i < submissions.length; i++) {
    if (submissions[i].submitted === true) {
      count = count + 1;
    }
  }
  return count;
}

function countMissing(submissions: { name: string; submitted: boolean; score: number }[]): number {
  let count = 0;
  for (let i = 0; i < submissions.length; i++) {
    if (submissions[i].submitted === false) {
      count = count + 1;
    }
  }
  return count;
}

function countPassed(submissions: { name: string; submitted: boolean; score: number }[]): number {
  let count = 0;
  for (let i = 0; i < submissions.length; i++) {
    if (submissions[i].submitted === true && submissions[i].score >= 75) {
      count = count + 1;
    }
  }
  return count;
}

function countRevision(submissions: { name: string; submitted: boolean; score: number }[]): number {
  let count = 0;
  for (let i = 0; i < submissions.length; i++) {
    if (submissions[i].submitted === true && submissions[i].score < 75) {
      count = count + 1;
    }
  }
  return count;
}
function calculateAverageScore(submissions: { name: string; submitted: boolean; score: number }[]): number {
  let total = 0;
  for (let i = 0; i < submissions.length; i++) {
    total = total + submissions[i].score;
  }
  return total / submissions.length;
}

function findHighestScore(submissions: { name: string; submitted: boolean; score: number }[]): number {
  let highest = submissions[0].score;
  for (let i = 1; i < submissions.length; i++) {
    if (submissions[i].score > highest) {
      highest = submissions[i].score;
    }
  }
  return highest;
}

function findLowestScore(submissions: { name: string; submitted: boolean; score: number }[]): number {
  let lowest = submissions[0].score;
  for (let i = 1; i < submissions.length; i++) {
    if (submissions[i].score < lowest) {
      lowest = submissions[i].score;
    }
  }
  return lowest;
}

function printReport(submissions: { name: string; submitted: boolean; score: number }[]): void {
  console.log("=== LMS Assignment Report ===");
  console.log("Total Students: " + countTotalStudents(submissions));
  console.log("Submitted Assignments: " + countSubmitted(submissions));
  console.log("Missing Assignments: " + countMissing(submissions));
  console.log("Passed Students: " + countPassed(submissions));
  console.log("Students Requiring Revision: " + countRevision(submissions));
  console.log("Average Score: " + calculateAverageScore(submissions));
  console.log("Highest Score: " + findHighestScore(submissions));
  console.log("Lowest Score: " + findLowestScore(submissions));
}
