/**
 * An online store has the following products below.
 * Tasks:
 * 1. Display only products that are currently available.
 * 2. Display only products that are currently available.
 * 3. Generate an array containing only the product names.
 * 4. Calculate the total value of all products currently in stock.
 * 5. Sort available products from most expensive → cheapest.
 */

const products = [
    {
        id: 1,
        name: "Keyboard",
        category: "Computer",
        price: 350000,
        stock: 10,
    },
    {
        id: 2,
        name: "Mouse",
        category: "Computer",
        price: 150000,
        stock: 0,
    },
    {
        id: 3,
        name: "Monitor",
        category: "Computer",
        price: 2500000,
        stock: 5,
    },
    {
        id: 4,
        name: "Headset",
        category: "Audio",
        price: 450000,
        stock: 8,
    },
    {
        id: 5,
        name: "Microphone",
        category: "Audio",
        price: 850000,
        stock: 3,
    },
];

// 1. Produk yang tersedia
const availableProducts = products.filter(
    product => product.stock > 0
);

console.log("Available Products:");
console.log(availableProducts);


// 2. Produk yang tersedia
const availableProducts2 = products.filter(
    product => product.stock > 0
);

console.log("Available Products 2:");
console.log(availableProducts2);


// 3. Nama produk
const productNames = products.map(
    product => product.name
);

console.log("Product Names:");
console.log(productNames);


// 4. Total nilai semua produk yang tersedia
const totalStockValue = products
    .filter(product => product.stock > 0)
    .reduce((total, product) => {
        return total + (product.price * product.stock);
    }, 0);

console.log("Total Stock Value:");
console.log(totalStockValue);


// 5. Urutkan dari termahal ke termurah
const sortedProducts = products
    .filter(product => product.stock > 0)
    .sort((a, b) => b.price - a.price);

console.log("Sorted Products:");
console.log(sortedProducts);