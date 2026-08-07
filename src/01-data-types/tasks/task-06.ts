/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

const product1: { productCode: string; productName: string; sellingPrice: number; stockQuantity: number; productWeight: number; averageRating: number; isDiscounted: boolean } = {
  productCode: "PRD001",
  productName: "Wireless Mouse",
    sellingPrice: 150000,
    stockQuantity: 50,
    productWeight: 0.2,
    averageRating: 4.0,
    isDiscounted: true
};

const product2: { productCode: string; productName: string; sellingPrice: number; stockQuantity: number; productWeight: number; averageRating: number; isDiscounted: boolean } = {
  productCode: "PRB001",
  productName: "Gaming Headset",
    sellingPrice: 120000,
    stockQuantity: 50,
    productWeight: 0.2,
    averageRating: 4.9,
    isDiscounted: true
};

const product3: { productCode: string; productName: string; sellingPrice: number; stockQuantity: number; productWeight: number; averageRating: number; isDiscounted: boolean } = {
  productCode: "KB001",
  productName: "Mechanical Keyboard ",
    sellingPrice: 850000 ,
    stockQuantity: 50,
    productWeight: 0.2,
    averageRating: 4.5,
    isDiscounted: true
};

const buy: number = 2;
const total: number = product1.sellingPrice * buy;

console.log("Product 1:", product1);
console.log("Product 2:", product2);
console.log("Product 3:", product3);
console.log(`Harga laptop : ${product1.sellingPrice}`);
console.log(`Jumlah laptop : ${buy}`);
console.log(`Total Harga : Rp${total}`);