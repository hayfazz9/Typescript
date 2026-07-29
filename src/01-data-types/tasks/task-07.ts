/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

const registration1: { studentId: string; fullName: string; gradeLevel: number; courseId: string; courseTitle: string; instructorName: string; totalLearningHours: number; registrationDate: string; isPaymentCompleted: boolean } = {
  studentId: "ST2026045",
  fullName: "Ciara Martintin",
  gradeLevel: 11,
  courseId: "CS101",
  courseTitle: "Introduction to Programming",    
  instructorName: "Mr. Agung",
  totalLearningHours: 40,
  registrationDate: "2026-10-01",
  isPaymentCompleted: true
};

const registration2: { studentId: string; fullName: string; gradeLevel: number; courseId: string; courseTitle: string; instructorName: string; totalLearningHours: number; registrationDate: string; isPaymentCompleted: boolean } = {
  studentId: "SH2026045",
  fullName: "Hayfa Zizi",
  gradeLevel: 11,
  courseId: "CH101",
  courseTitle: "Introduction to Programming",    
  instructorName: "Mr. Agung",
  totalLearningHours: 35,
  registrationDate: "2026-10-01",
  isPaymentCompleted: true
};

const registration3: { studentId: string; fullName: string; gradeLevel: number; courseId: string; courseTitle: string; instructorName: string; totalLearningHours: number; registrationDate: string; isPaymentCompleted: boolean } = {
  studentId: "ST3026045",
  fullName: "Mouza aqilla",
  gradeLevel: 11,
  courseId: "CS301",
  courseTitle: "Introduction to Programming",    
  instructorName: "Mr. Agung",
  totalLearningHours: 40,
  registrationDate: "2023-10-01",
  isPaymentCompleted: true
};

console.log("Registration 1:", registration1);
console.log("Registration 2:", registration2);
console.log("Registration 3:", registration3);