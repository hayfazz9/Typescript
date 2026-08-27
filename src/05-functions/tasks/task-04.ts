/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */

let attendanceData = [
  { name: "Ciara", status: "Present" },
  { name: "Hayfa", status: "Absent" },
  { name: "Mouza", status: "Present" },
  { name: "Anin", status: "Absent" },
  { name: "Imel", status: "Present" },
];

function printAttendanceReport(attendance: { name: string; status: string }[]): void {
  let totalPresent = 0;
  let totalAbsent = 0;
  let absentNames: string[] = [];

  for (let i = 0; i < attendance.length; i++) {
    if (attendance[i].status === "Present") {
      totalPresent = totalPresent + 1;
    } else {
      totalAbsent = totalAbsent + 1;
      absentNames.push(attendance[i].name);
    }
  }

  console.log("=== Attendance Report ===");
  console.log("Total Present: " + totalPresent);
  console.log("Total Absent: " + totalAbsent);
  console.log("Absent Students: " + absentNames.join(", "));
}

printAttendanceReport(attendanceData);