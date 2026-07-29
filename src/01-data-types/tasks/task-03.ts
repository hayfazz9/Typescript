/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */
const student1: { studentId: string; fullName: string; age: number; isActive: boolean } = {
  studentId: "ST2026045",
  fullName: "Nadia Putri",
  age: 17,
  isActive: true,
};

const student2:{ studentId: string; fullName: string; age: number; isActive: boolean } = {
  studentId: "ST3026045",
  fullName: "Ciara Martiandini",
  age: 16,
  isActive: true,
};

const student3 : { studentId: string; fullName: string; age: number; isActive: boolean } = {
  studentId: "ST4026045",
  fullName: "Mouza Aqilla",
  age: 16,
  isActive: true,
};

/*untuk memunculkan data*/
console.log("Student 1:", student1);
console.log("Student 2:", student2);
console.log("Student 3:", student3);