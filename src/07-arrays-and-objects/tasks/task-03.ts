/**
 * A school has attendance data below.
 * Tasks:
 * 1. Get all student's names who are present
 * expected array: ["Andi","Citra"]
 * 2. Get all students who are present
 * expected array: ["Budi"]
 * 3. Get students who are late
 * expected array: ["Deni"]
 * 4. Generate array that contains {name, status}
 */

const students = [
    { id: 1, name: "Andi" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Citra" },
    { id: 4, name: "Deni" },
];

const attendance = [
    { studentId: 1, status: "present" },
    { studentId: 2, status: "absent" },
    { studentId: 3, status: "present" },
    { studentId: 4, status: "late" },
];

//1. nama siswa yang hadir
const presentStudents = attendance.filter(
    student => student.status === "present"
);

const presentStudentNames = presentStudents.map(att => {
    const student = students.find(s => s.id === att.studentId);
    return student?.name;
});

console.log(presentStudentNames);
console.log(presentStudents);

//2. siswa yang tidak hadir
const absentStudents = attendance.filter(
    student => student.status === "absent"
);

const absentStudentNames = absentStudents.map(att => {
    const student = students.find(s => s.id === att.studentId);
    return student?.name;
});

console.log("Absent Students:");
console.log(absentStudentNames);

//3. siswa yang terlambar
const lateStudents = attendance.filter(
    student => student.status === "late"
);

const lateStudentNames = lateStudents.map(att => {
    const student = students.find(s => s.id === att.studentId);
    return student?.name;
});

console.log("Late Students:");
console.log(lateStudentNames);

// 4
const studentAttendance = attendance.map(att => {
    const student = students.find(s => s.id === att.studentId);

    return {
        name: student?.name,
        status: att.status
    };
});

console.log("Student Attendance:");
console.log(studentAttendance);