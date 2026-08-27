/**
 * The warehouse checks customer orders before shipping based on array below.
 * 
 * Business Rules
 * An order is ready to ship only if:
 * - Payment has been completed.
 * - Stock is available.
 * 
 * Student Task:
 * Loop through every order and calculate:
 * - Number of orders ready to ship
 * - Number of unpaid orders
 * - Number of orders waiting for stock
 * - Display all order IDs that are ready to ship
 */
const orders = [
    { orderId: "ORD001", paymentCompleted: true, stockAvailable: true },
    { orderId: "ORD002", paymentCompleted: false, stockAvailable: true },
    { orderId: "ORD003", paymentCompleted: true, stockAvailable: false },
    { orderId: "ORD004", paymentCompleted: true, stockAvailable: true },
    { orderId: "ORD005", paymentCompleted: false, stockAvailable: false }
];

let readyToShip: number = 0;
let unpaidOrders: number = 0;
let waitingForStock: number = 0;
let readyOrderIds: string[] = [];

for (let i = 0; i < orders.length; i++) {

    if (orders[i].paymentCompleted === false) {
        unpaidOrders++;
    }

    if (orders[i].stockAvailable === false) {
        waitingForStock++;
    }

    if (
        orders[i].paymentCompleted === true && orders[i].stockAvailable === true
    ) {
        readyToShip++;
        readyOrderIds.push(orders[i].orderId);
    }
}

console.log("Orders ready to ship:", readyToShip);
console.log("Unpaid orders:", unpaidOrders);
console.log("Orders waiting for stock:", waitingForStock);
console.log("Ready order IDs:", readyOrderIds);