/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

let students = [
  { name: "Zizi", status: "Active", major: "Software Engineering" },
  { name: "Ciara", status: "Inactive", major: "Networking" },
  { name: "Mouza", status: "Active", major: "Multimedia" },
  { name: "Anin", status: "Active", major: "Software Engineering" },
  { name: "Nabil", status: "Inactive", major: "Multimedia" },
  { name: "Zidan", status: "Active", major: "Networking" },
];

function countTotalStudents(students: { name: string; status: string; major: string }[]): number {
  return students.length;
}

function countActiveStudents(students: { name: string; status: string; major: string }[]): number {
  let count = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].status === "Active") {
      count = count + 1;
    }
  }
  return count;
}

function countInactiveStudents(students: { name: string; status: string; major: string }[]): number {
  let count = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].status === "Inactive") {
      count = count + 1;
    }
  }
  return count;
}

function countSoftwareEngineering(students: { name: string; status: string; major: string }[]): number {
  let count = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].major === "Software Engineering") {
      count = count + 1;
    }
  }
  return count;
}

function countNetworking(students: { name: string; status: string; major: string }[]): number {
  let count = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].major === "Networking") {
      count = count + 1;
    }
  }
  return count;
}

function countMultimedia(students: { name: string; status: string; major: string }[]): number {
  let count = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].major === "Multimedia") {
      count = count + 1;
    }
  }
  return count;
}

function printEnrollmentReport(students: { name: string; status: string; major: string }[]): void {
  console.log("=== University Enrollment Report ===");
  console.log("Total Students: " + countTotalStudents(students));
  console.log("Active Students: " + countActiveStudents(students));
  console.log("Inactive Students: " + countInactiveStudents(students));
  console.log("Software Engineering Students: " + countSoftwareEngineering(students));
  console.log("Networking Students: " + countNetworking(students));
  console.log("Multimedia Students: " + countMultimedia(students));
}

printEnrollmentReport(students);