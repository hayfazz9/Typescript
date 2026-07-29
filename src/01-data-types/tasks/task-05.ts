/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type Attendance = {
  employeeId: string;
  employeeName: string;
  date: string;
  checkInTime: string;
  checkOutTime: string;
  totalWorkingHours: number;
  isPresent: boolean;
};

const attendance1: Attendance = {
  employeeId: "EMP001",
  employeeName: "Nadia Putri",
  date: "2026-07-27",
  checkInTime: "08:00",
  checkOutTime: "17:00",
  totalWorkingHours: 8,
  isPresent: true,
};

const attendance2: Attendance = {
  employeeId: "EMP002",
  employeeName: "Budi Santoso",
  date: "2026-07-27",
  checkInTime: "08:15",
  checkOutTime: "17:15",
  totalWorkingHours: 8,
  isPresent: true,
};

const attendance3: Attendance = {
  employeeId: "EMP003",
  employeeName: "Citra Martiandini",
  date: "2026-07-27",
  checkInTime: "-",
  checkOutTime: "-",
  totalWorkingHours: 0,
  isPresent: false,
};

console.log("Attendance 1:", attendance1);
console.log("Attendance 2:", attendance2);
console.log("Attendance 3:", attendance3);