/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendance = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

let presentCount: number = 0;
let absentCount: number = 0;
let absentNames: string[] = [];

for (let i = 0; i < attendance.length; i++) {

  if (attendance[i].present === true) {
    presentCount++;
  } else {
      absentCount++;
      absentNames.push(attendance[i].name);
  }
}

const attendancePercentage: number = (presentCount / attendance.length) * 100;

console.log("Number of present students:", presentCount);
console.log("Number of absent students:", absentCount);
console.log("Absent students:", absentNames);
console.log("Attendance percentage:", attendancePercentage + "%");
