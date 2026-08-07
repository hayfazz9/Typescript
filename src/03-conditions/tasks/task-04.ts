/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Deklarasikan semua variabel.
 * 2. Implementasikan logika menggunakan nested if (if di dalam if).
 * 3. Tampilkan hasil reservasi.
 */

let customerName: string = "Nadia Putri";
let isPremiumMember: boolean = true;
let roomAvailable: boolean = false;

console.log("Customer Name:", customerName);

if (roomAvailable) {
    if (isPremiumMember) {
        console.log("Reservation Status: Free rom upgrade");
    }else {
        console.log("Reservation Status: Reserved room only");
    }

} else {

    if (isPremiumMember) {
        console.log("Reservation Status: Place on the priority waiting list");
    } else {
        console.log("Reservation Status: no rooms are available");
    }

}