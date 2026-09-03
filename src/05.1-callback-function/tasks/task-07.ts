/**
 * An LMS stores student performance data below.
 * The school wants to analyze students using different criteria.
 * A student is considered academically successful if:
 * - Score ≥ 75
 * - Attendance ≥ 90%
 * 
 * 
 * The teacher wants to generate:
 *  - Pass/fail status.
 *  - Academic performance category.
 *  - Attendance status.
 *  - Final recommendation.
 * 
 * Recommendation Rules:
 * ----------------------------------------------------------------|
 * | Condition                      | Recommendation               |
 * | ------------------------------ | ---------------------------- |
 * | Score ≥ 90 AND attendance ≥ 90 | Excellent                    |
 * | Score ≥ 75 AND attendance ≥ 90 | Good                         |
 * | Score ≥ 75 BUT attendance < 90 | Improve Attendance           |
 * | Score < 75                     | Improve Academic Performance |
 * ----------------------------------------------------------------|
 * 
 * Challenge:
 * - processStudents() should know nothing about these rules.
 * - It should only process the students and execute the callback.
 */

const students = [
    { name: "Alya", score: 92, attendance: 96 },
    { name: "Budi", score: 68, attendance: 88 },
    { name: "Citra", score: 84, attendance: 91 },
    { name: "Dimas", score: 73, attendance: 95 },
    { name: "Eka", score: 95, attendance: 82 },
    { name: "Fajar", score: 79, attendance: 97 }
];

// 1. Pass / Fail Status
function getPassFailStatus(student: typeof students[number]) {

    if (student.score >= 75 && student.attendance >= 90) {
        return {
            ...student,
            status: "PASS"
        };
    } else {
        return {
            ...student,
            status: "FAIL"
        };
    }
}


// 2. Academic Performance Category
function getAcademicCategory(student: typeof students[number]) {

    let category: string;

    if (student.score >= 90) {
        category = "Excellent";
    } else if (student.score >= 75) {
        category = "Good";
    } else {
        category = "Needs Improvement";
    }

    return {
        ...student,
        category: category
    };
}


// 3. Attendance Status
function getAttendanceStatus(student: typeof students[number]) {

    if (student.attendance >= 90) {
        return {
            ...student,
            attendanceStatus: "Good Attendance"
        };
    } else {
        return {
            ...student,
            attendanceStatus: "Poor Attendance"
        };
    }
}


// 4. Final Recommendation
function getRecommendation(student: typeof students[number]) {

    let recommendation: string;

    if (student.score >= 90 && student.attendance >= 90) {
        recommendation = "Excellent";
    } else if (student.score >= 75 && student.attendance >= 90) {
        recommendation = "Good";
    } else if (student.score >= 75 && student.attendance < 90) {
        recommendation = "Improve Attendance";
    } else {
        recommendation = "Improve Academic Performance";
    }

    return {
        ...student,
        recommendation: recommendation
    };
}


// Reusable processing function
function processStudents<T>(
    arr: typeof students,
    callback: (student: typeof students[number]) => T
): T[] {

    return arr.map(callback);
}


// Process students using different callbacks
const studentsPassFail =
    processStudents(students, getPassFailStatus);

const studentsAcademic =
    processStudents(students, getAcademicCategory);

const studentsAttendance =
    processStudents(students, getAttendanceStatus);

const studentsRecommendation =
    processStudents(students, getRecommendation);


// Display results
console.log(`====== PASS / FAIL STATUS ======`);
console.log({ students: studentsPassFail });

console.log(`====== ACADEMIC CATEGORY ======`);
console.log({ students: studentsAcademic });

console.log(`====== ATTENDANCE STATUS ======`);
console.log({ students: studentsAttendance });

console.log(`====== FINAL RECOMMENDATION ======`);
console.log({ students: studentsRecommendation });