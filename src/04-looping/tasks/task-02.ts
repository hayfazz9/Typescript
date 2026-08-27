/**
 * A shopping mall has a parking building with:
 * - 5 floors
 * - Each floor contains 20 parking spaces
 * 
 * The parking management system wants to display every parking location using the following format:
 * ------------------------------
 * Floor 1 - Slot 1
 * Floor 1 - Slot 2
 * ...
 * Floor 1 - Slot 20
 * 
 * Floor 2 - Slot 1
 * Floor 2 - Slot 2
 * ...
 * 
 * Floor 5 - Slot 20
 * ------------------------------
 * 
 * Tasks:
 *  - Use nested for loops.
 *  - Display every parking location.
 *  - Print a blank line after each floor.
 */

const totalFloors: number = 5;
const totalSlotsPerFloor: number = 20;
for (let floor: number = 1; floor <= totalFloors; floor++) {
    for (let slot: number = 1; slot <= totalSlotsPerFloor; slot++) {
        console.log(`Floor ${floor} - Slot ${slot}`);
    }
    console.log(""); // Print a blank line after each floor
}