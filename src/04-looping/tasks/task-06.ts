/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

const stock: number [] = [0, 5, 10, 15, 20, 0];
let outOfStock = 0;
let lowStock = 0;
let safeStock = 0;
let totalStock = 0;

for (let i = 0; i < stock.length; i++) {
    const quantity = stock[i];

    if (quantity === 0) {
        outOfStock++;
    } else if (quantity < 10) {
        lowStock++;
    } else {
        safeStock++;
    }

    totalStock += quantity;
}

const averageStock = totalStock / stock.length;

console.log("Out of Stock", outOfStock);
console.log("Low Stock", lowStock);
console.log("Safe Stock", safeStock);
console.log("Total Inventory", totalStock);
console.log("Average Stock", averageStock);

