/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */

type Patient = {
    name: string;
    department: string;
    status: string;
    bill: number;
};

const patients = [
  {name: "Ciara", department: "IGD", status: "admitted", bill: 300000},
  {name: "Hayfa", department: "IGD", status: "discharged", bill: 100000},
  {name: "Mouza", department: "ICU", status: "discharged", bill: 400000},
  {name: "Laura", department: "ICU", status: "admitted", bill: 800000},
];

//1. mmenghitung semua pasien
function getTotalPatients(pasients: Patient[]): number {
  return patients.length;
}

//2. pasien yang masih dirawat
function getTotalAdmitted(pasients: Patient[]): number {
  return pasients.filter(patient => patient.status === "admitted").length;
}

//3. pasien yang sudah pulang ke rumah, yey alhamdulillah
function getTotalDischarged(pasients: Patient[]): number {
  return pasients.filter(patient => patient.status === "discharged").length;
}

//4. Jumlah pasien di setiap departement
function getPatientsByDepartment(patients: Patient[]): { [key: string]: number } {
  const result: { [key: string]: number } = {};

  patients.forEach(patient => {
    if(result[patient.department]) {
      result[patient.department]++;
    } else {
      result[patient.department] = 1;
    }
  });

  return result;
}

//5. bill ter mahal
function getHighestBill(patients: Patient[]): number {
    return Math.max(...patients.map(patient => patient.bill));
}

//6. bill ter rendah
function getLowestBill(patients: Patient[]): number {
    return Math.min(...patients.map(patient => patient.bill));
}

// 7. rata rata bill
function getAverageBill(patients: Patient[]): number {
    const total = patients.reduce((sum, patient) => sum + patient.bill, 0);
    return total / patients.length;
}

// 8. total pendapatan rumah sakit
function getTotalRevenue(patients: Patient[]): number {
    return patients.reduce((total, patient) => total + patient.bill, 0);
}

//9. pasien yang masih di rawat
function getAdmittedPatientNames(patients: Patient[]): string[] {
    return patients
        .filter(patient => patient.status === "admitted")
        .map(patient => patient.name);
}

function printHospitalReport(
    totalPatients: number,
    totalAdmitted: number,
    totalDischarged: number,
    patientsByDepartment: { [key: string]: number },
    highestBill: number,
    lowestBill: number,
    averageBill: number,
    totalRevenue: number,
    admittedNames: string[]
): void {

  console.log("=== HOSPITAL DAILY REPORT ===");
  console.log("Total Patients:", totalPatients);
  console.log("Total Admitted:", totalAdmitted);
  console.log("Total Discharged:", totalDischarged);
  console.log("Patients by Department:", patientsByDepartment);
  console.log("Highest Bill:", highestBill);
  console.log("Lowest Bill:", lowestBill);
  console.log("Average Bill:", averageBill);
  console.log("Total Revenue:", totalRevenue);
  console.log("Admitted Patients:", admittedNames);
}

const totalPatients = getTotalPatients(patients);
const totalAdmitted = getTotalAdmitted(patients);
const totalDischarged = getTotalDischarged(patients);
const patientsByDepartment = getPatientsByDepartment(patients);
const highestBill = getHighestBill(patients);
const lowestBill = getLowestBill(patients);
const averageBill = getAverageBill(patients);
const totalRevenue = getTotalRevenue(patients);
const admittedNames = getAdmittedPatientNames(patients);

printHospitalReport(
    totalPatients,
    totalAdmitted,
    totalDischarged,
    patientsByDepartment,
    highestBill,
    lowestBill,
    averageBill,
    totalRevenue,
    admittedNames
);