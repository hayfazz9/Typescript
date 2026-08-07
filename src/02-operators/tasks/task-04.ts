/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const mechanicalKeyboard: number = 850000;
const keyboardQuantity: number = 1;
const wirelessMouse : number = 275000;
const mouseQuantity: number = 2;
const mousePad: number = 120000;
const mousePadQuantity: number = 1;
const isPremiumMember: boolean = true;

const subtotal = mechanicalKeyboard * keyboardQuantity + wirelessMouse * mouseQuantity + mousePad * mousePadQuantity;

let totalItems: number = 0;
/* 1 Machanical Keybord*/
totalItems++;
/* 2 Wireless Mice*/
totalItems++;
totalItems++;
/* Mouse Pad*/
totalItems++;

const discount: number = subtotal > 1000000 ? subtotal * 0.1 : 0;
const finalPayment: number = subtotal - discount;

console.log(`Subtotal: Rp${subtotal}`);
console.log(`Total Items: ${totalItems}`);
console.log(`Premium Member: ${isPremiumMember}`);
console.log(`Discount: Rp${discount}`);
console.log(`Final Payment: Rp${finalPayment}`);