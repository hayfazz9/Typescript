/**
 * Sebuah maskapai penerbangan secara otomatis menentukan status check-in penumpang.
 * Aturan Bisnis
 * Step 1
 * Jika penumpang belum melakukan check-in online, 
 * tampilkan pesan:
 * "Silakan selesaikan proses check-in online terlebih dahulu."
 * 
 * Otherwise, continue.
 * Step 2
 * Jika berat bagasi melebihi 20 kg:
 * - Business Class → Bagasi tambahan diperbolehkan.
 * - Economy Class → Harus membayar biaya bagasi tambahan.
 * 
 * Otherwise:
 * Proceed to boarding pass printing.
 * 
 * Informasi Penumpang:
 * | Information     | Value         |
 * | --------------- | ------------- |
 * | Passenger       | Fajar Nugroho |
 * | Online Check-in | Yes           |
 * | Cabin Class     | Economy       |
 * | Baggage Weight  | 24 kg         |
 * 
 * Student Tasks
 * 1. Deklarasikan semua variabel.
 * 2. Implementasikan proses pengambilan keputusan maskapai.
 * 3. Tampilkan pesan yang sesuai.
 */

const passenger: string = "Fajar Nugroho";
const onlineCheckIn: boolean = true;
const cabinClass: string = "Economy";
const baggageWeight: number = 24;

console.log("Passenger:", passenger);

if (onlineCheckIn) {

    if (baggageWeight > 20) {

        if (cabinClass === "Business") {
            console.log("Extra baggage is allowed.");
        } else {
            console.log("Additional baggage fee is required.");
        }

    } else {

        console.log("Proceed to boarding pass printing.");

    }

} else {

    console.log("Please complete the online check-in process first.");

}