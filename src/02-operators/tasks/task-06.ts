/**
 * Sebuah warnet (internet café) mengenakan biaya Rp8.000 per jam.
 *
 * Pelanggan akan dikenakan biaya untuk setiap jam yang sudah dimulai
 * (dibulatkan ke atas menjadi 1 jam penuh).
 *
 * Jika total waktu bermain melebihi 5 jam,
 * pelanggan akan mendapatkan diskon sebesar 15%.
 *
 * Hari ini, seorang pelanggan menggunakan komputer selama:
 * - 7 jam 35 menit
 *
 * Yang perlu dihitung:
 * - Total waktu bermain dalam menit
 * - Sisa menit setelah dihitung menjadi jam penuh
 * - Total jam yang ditagihkan
 * - Total pembayaran sebelum diskon
 * - Besar diskon
 * - Total pembayaran akhir
 */

const Perjam: number = 8000;
const Lamabermain: number = 7;
const Menit: number = 35;

const Totalmenit = Lamabermain * 60 + Menit;
const sisaMenit = Totalmenit % 60;
const biayaTagihan = sisaMenit > 0 ? Lamabermain + 1 : Lamabermain;

//Biaya sebelum diskon
const totalSebelumDiskon = biayaTagihan * Perjam;
const diskon = Lamabermain > 5 ? totalSebelumDiskon * 0.15 : 0;
const totalBiaya = totalSebelumDiskon - diskon;

console.log("Total menit:", Totalmenit);
console.log("sisaMenit:", sisaMenit);
console.log("Jam ditagih:", biayaTagihan); 
console.log("Sebelum diskon:", totalSebelumDiskon);
console.log("Diskon:", diskon);
console.log("Total biaya:", totalBiaya);
