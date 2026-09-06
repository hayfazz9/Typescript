/**
 * A customer has a shopping cart below.
 * Tasks:
 * 1. Count subtotal of all products (expected result: 3.350.000)
 * 2. Calculate discount with this rules.
 *  - subtotal >= 3,000,000 → 10% discount
 *  - subtotal >= 2,000,000 → 5% discount
 *  - otherwise             → 0%
 * 
 * 3. Calculate final subtotal after given discount
 * 4. Find expensive product ( > 1.000.000)
 */

const cart = [
    {
        product: "Keyboard",
        price: 350000,
        quantity: 2,
    },
    {
        product: "Mouse",
        price: 150000,
        quantity: 1,
    },
    {
        product: "Monitor",
        price: 2500000,
        quantity: 1,
    },
];

// 1. Mmenghitung subtotal 
const subtotal = cart.reduce(
    (total, item) => total + (item.price * item.quantity),
    0
);

console.log("Subtotal:");
console.log(subtotal);

// 2. menghitung diskon
let discount = 0;

if (subtotal >= 3000000) {
    discount = 10;
} else if (subtotal >= 2000000) {
    discount = 5;
} else {
    discount = 0;
}

console.log("Discount:");
console.log(discount + "%");

// 3. menghitung subtotal setelah discount
const discountAmount = subtotal * discount / 100;
const finalSubtotal = subtotal - discountAmount;

console.log("Final Subtotal:");
console.log(finalSubtotal);


// 4. produk harga lebih dari 1.000.000
const expensiveProducts = cart.filter(
    item => item.price > 1000000
);

console.log("Expensive Products:");
console.log(expensiveProducts);
