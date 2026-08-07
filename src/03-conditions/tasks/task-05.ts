/**
 * Sebuah universitas sedang menyeleksi mahasiswa untuk mendapatkan beasiswa penuh.
 * Tahap seleksi pertama mensyaratkan:
 * - IPK ≥ 3,75
 * - Penghasilan keluarga < Rp5.000.000
 * 
 * Jika mahasiswa lolos tahap seleksi pertama,
 * maka universitas akan melakukan tahap seleksi kedua.
 * Tahap seleksi kedua mensyaratkan:
 * - Mengikuti minimal 3 kompetisi
 * - Tidak memiliki catatan pelanggaran disiplin
 * - Dokumen administrasi lengkap
 * 
 * Hanya mahasiswa yang lolos kedua tahap seleksi yang akan mendapatkan beasiswa.
 * Data mahasiswa:
 * | Informasi                 | Nilai          |
 * | -------------------------- | -------------- |
 * | Nama Mahasiswa            | Fajar Hidayat  |
 * | IPK                       | 3,86           |
 * | Penghasilan Keluarga      | 4.200.000      |
 * | Jumlah Kompetisi          | 4              |
 * | Memiliki Catatan Disiplin | Tidak          |
 * | Dokumen Lengkap           | Ya             |
 *
 * 
 * Tampilkan salah satu pesan berikut:
 * - Beasiswa Disetujui
 * - Lolos Seleksi Tahap Pertama, tetapi Gagal pada Tahap Kedua
 * - Gagal pada Tahap Pertama
 *
 * Tugas Siswa:
 * - Deklarasikan semua variabel.
 * - Implementasikan seleksi tahap pertama.
 * - Implementasikan seleksi tahap kedua hanya jika tahap pertama berhasil dilalui.
 * - Tampilkan hasil yang sesuai.
 */

const studentName: string = "Fajar Hidayat";
const gpa: number = 3.86;
const familyIncome: number = 4200000;
const competitionCount: number = 4;
const hasDisciplinaryRecord: boolean = false;
const documentsComplete: boolean = true;

console.log("Student Name:", studentName);

if (gpa >= 3.75 && familyIncome < 5000000) {
    if (
        competitionCount >= 3 &&
        !hasDisciplinaryRecord &&
        documentsComplete
    ) {
        console.log("Scholarship Approved");
    } else {
        console.log("Passed the First Selection Stage, but Failed the Second Stage");
    }

} else {
    console.log("Failed the First Selection Stage");
}