/**
 * An online store has customer orders.
 * Tasks:
 * 1. Get only completed orders.
 * 2. Calculate the total value of each order.
 * 3. Find the customer who spent the most.
 * 4. Calculate the total revenue from completed orders.
 * 5. Find all products that have been purchased.
 */
const orders = [
    {
        id: 101,
        customer: "Andi",
        status: "completed",
        items: [
            { product: "Keyboard", price: 350000, quantity: 1 },
            { product: "Mouse", price: 150000, quantity: 2 },
        ],
    },
    {
        id: 102,
        customer: "Budi",
        status: "cancelled",
        items: [
            { product: "Monitor", price: 2500000, quantity: 1 },
        ],
    },
    {
        id: 103,
        customer: "Citra",
        status: "completed",
        items: [
            { product: "Monitor", price: 2500000, quantity: 2 },
            { product: "Keyboard", price: 350000, quantity: 1 },
        ],
    },
];

// 1. Mendapatkan order yang selesai
const completedOrders = orders.filter(
    order => order.status === "completed"
);

console.log("Completed Orders:");
console.log(completedOrders);


// 2. Menghitung total nilai setiap order
const orderTotals = orders.map(order => {
    const total = order.items.reduce(
        (sum, item) => sum + (item.price * item.quantity),
        0
    );

    return {
        customer: order.customer,
        total: total
    };
});

console.log("Order Totals:");
console.log(orderTotals);


// 3. Mencari customer yang mengeluarkan uang paling banyak
const highestSpender = orderTotals.reduce(
    (highest, order) =>
        order.total > highest.total ? order : highest
);

console.log("Highest Spender:");
console.log(highestSpender);


// 4. Menghitung total revenue dari completed orders
const completedRevenue = completedOrders.reduce(
    (total, order) => {
        return total + order.items.reduce(
            (sum, item) => sum + (item.price * item.quantity),
            0
        );
    },
    0
);

console.log("Total Revenue:");
console.log(completedRevenue);


// 5. Mencari semua produk yang pernah dibeli
const purchasedProducts = orders.flatMap(
    order => order.items.map(item => item.product)
);

console.log("Purchased Products:");
console.log(purchasedProducts);