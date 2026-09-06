/**
 * A teacher has a list of students and their exam scores below.
 * The teacher wants to analyze the exam results.
 * Tasks:
 * 1. Get an array containing only the student names.
 * expected array: ["Andi", "Budi", "Citra", "Deni", "Eka"]
 * 2. Get students who passed. Passing score is >= 70. 
 * expected array: [
 * { name: "Andi", score: 85 },
 * { name: "Citra", score: 91 },
 * { name: "Deni", score: 74 }
 * ]
 * 
 * 3. Find the student named "Citra".
 * 4. Calculate the average score.
 */

const students = [
  { name: "Andi", score: 85 },
  { name: "Budi", score: 62 },
  { name: "Citra", score: 91 },
  { name: "Deni", score: 74 },
  { name: "Eka", score: 55 },
];

// 1. Mendapatkan nama siswa
const studentNames = students.map(student => student.name);

console.log("Student Names:");
console.log(studentNames);


// 2. Mendapatkan siswa yang lulus
const passedStudents = students.filter(student => student.score >= 70);

console.log("Passed Students:");
console.log(passedStudents);


// 3. Mencari siswa bernama Citra
const citra = students.find(student => student.name === "Citra");

console.log("Student Citra:");
console.log(citra);


// 4. Menghitung rata-rata nilai
const totalScore = students.reduce((total, student) => total + student.score, 0);
const averageScore = totalScore / students.length;

console.log("Average Score:");
console.log(averageScore);