/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

type Student = {
    name: string;
    course: string;
    completed: boolean;
    score: number;
    learningHours: number;
    learningDuration: number;
};

const students: Student[] = [
    { name: "Zizi", course: "JavaScript", completed: true, score: 85, learningHours: 20,learningDuration: 120 },
    { name: "Ciara", course: "Python", completed: true, score: 90, learningHours: 25,learningDuration: 150 },
    { name: "Jaehyun", course: "JavaScript", completed: false, score: 75, learningHours: 18,learningDuration: 90 },
    { name: "Andi", course: "Python", completed: true, score: 70, learningHours: 30,learningDuration: 110 },
    { name: "Hayfa", course: "HTML & CSS", completed: false, score: 80, learningHours: 12,learningDuration: 80 },
] 



// 1. Total enrollments
function getTotalEnrollments(students: Student[]): number {
    return students.length;
}


// 2. Completed enrollments
function getCompletedEnrollments(students: Student[]): number {
    return students.filter(student => student.completed).length;
}


// 3. Incomplete enrollments
function getIncompleteEnrollments(students: Student[]): number {
    return students.filter(student => !student.completed).length;
}


// 4. Completion percentage
function getCompletionPercentage(students: Student[]): number {
    return (getCompletedEnrollments(students) / getTotalEnrollments(students)) * 100;
}


// 5. Highest score
function getHighestScore(students: Student[]): number {
    return Math.max(...students.map(student => student.score));
}


// 6. Lowest score
function getLowestScore(students: Student[]): number {
    return Math.min(...students.map(student => student.score));
}


// 7. Average score
function getAverageScore(students: Student[]): number {
    const total = students.reduce((sum, student) => sum + student.score, 0);
    return total / students.length;
}


// 8. Students with passing scores
function getPassingStudents(students: Student[]): string[] {
    return students
        .filter(student => student.score >= 75)
        .map(student => student.name);
}


// 9. Number of students in each course
function getStudentsByCourse(students: Student[]): { [key: string]: number } {
    const result: { [key: string]: number } = {};

    students.forEach(student => {
        if (result[student.course]) {
            result[student.course]++;
        } else {
            result[student.course] = 1;
        }
    });

    return result;
}


// 10. Average score for each course
function getAverageScoreByCourse(students: Student[]): { [key: string]: number } {
    const result: { [key: string]: number } = {};
    const count: { [key: string]: number } = {};

    students.forEach(student => {
        if (result[student.course]) {
            result[student.course] += student.score;
            count[student.course]++;
        } else {
            result[student.course] = student.score;
            count[student.course] = 1;
        }
    });

    Object.keys(result).forEach(course => {
        result[course] = result[course] / count[course];
    });

    return result;
}


// 11. Total learning hours
function getTotalLearningHours(students: Student[]): number {
    return students.reduce((total, student) => total + student.learningHours, 0);
}


// 12. Average learning duration
function getAverageLearningDuration(students: Student[]): number {
    const total = students.reduce(
        (total, student) => total + student.learningDuration,
        0
    );

    return total / students.length;
}


// VOID FUNCTION 1
function printCompletionStatistics(
    total: number,
    completed: number,
    incomplete: number,
    percentage: number
): void {
    console.log("=== Completion Statistics ===");
    console.log("Total Enrollments:", total);
    console.log("Completed Enrollments:", completed);
    console.log("Incomplete Enrollments:", incomplete);
    console.log("Completion Percentage:", percentage + "%");
}


// VOID FUNCTION 2
function printDashboard(
    highest: number,
    lowest: number,
    average: number,
    passing: string[],
    courseCount: { [key: string]: number },
    courseAverage: { [key: string]: number },
    totalHours: number,
    averageDuration: number
): void {
    console.log("=== Academic Statistics ===");
    console.log("Highest Score:", highest);
    console.log("Lowest Score:", lowest);
    console.log("Average Score:", average);
    console.log("Passing Students:", passing);

    console.log("=== Course Statistics ===");
    console.log("Students by Course:", courseCount);
    console.log("Average Score by Course:", courseAverage);

    console.log("=== Learning Statistics ===");
    console.log("Total Learning Hours:", totalHours);
    console.log("Average Learning Duration:", averageDuration);
}


// Mengambil semua hasil dari function
const totalEnrollments = getTotalEnrollments(students);
const completedEnrollments = getCompletedEnrollments(students);
const incompleteEnrollments = getIncompleteEnrollments(students);
const completionPercentage = getCompletionPercentage(students);

const highestScore = getHighestScore(students);
const lowestScore = getLowestScore(students);
const averageScore = getAverageScore(students);
const passingStudents = getPassingStudents(students);

const studentsByCourse = getStudentsByCourse(students);
const averageScoreByCourse = getAverageScoreByCourse(students);

const totalLearningHours = getTotalLearningHours(students);
const averageLearningDuration = getAverageLearningDuration(students);


// Menampilkan dashboard
printCompletionStatistics(
    totalEnrollments,
    completedEnrollments,
    incompleteEnrollments,
    completionPercentage
);

printDashboard(
    highestScore,
    lowestScore,
    averageScore,
    passingStudents,
    studentsByCourse,
    averageScoreByCourse,
    totalLearningHours,
    averageLearningDuration
);