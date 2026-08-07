/**
 * SMK Telkom Malang is preparing the graduation list for Grade 12 students. A student is eligible to graduate only if all of the following requirements are satisfied:

 * - Final score is at least 75
 * - Attendance is at least 90%
 * - All tuition fees have been paid
 * 
 * The administration received the following student information.
 * | Information  | Value      |
 * | ------------ | ---------- |
 * | Student Name | Alya Putri |
 * | Final Score  | 82         |
 * | Attendance   | 94         |
 * | Tuition Paid | Yes        |
 * 
 * Tasks:
 * 1. Deklarasikan semua variabel yang diperlukan.
 * 2. Implementasikan logika keputusan menggunakan pernyataan if.
 * 3. Tampilkan pesan yang sesuai.
 * Jika siswa memenuhi semua persyaratan,
 * tampilkan: "Selamat! Anda memenuhi syarat untuk lulus."
 * Jika tidak memenuhi semua persyaratan,
 * tampilkan: "Anda belum memenuhi syarat untuk lulus."
 * */

const StudentName: string = "Alya Putri";
const FinalScore: number = 82;
const Attendance: number = 94;
const TuitionPaid: boolean = true;

if (FinalScore >= 75 && Attendance >= 90 && TuitionPaid) {
  console.log("Selamat! Anda memenuhi syarat untuk lulus.");
} else {
  console.log("Anda belum memenuhi syarat untuk lulus.");
}