/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

let foodQuantity = 3;
let foodPrice = 18000;

let drinkQuantity = 2;
let drinkPrice = 5000;

let discount = 10000;

let totalFood = foodQuantity * foodPrice;
let totalDrink = drinkQuantity * drinkPrice;
let grandTotal = totalFood + totalDrink;
let finalPayment = grandTotal - discount;

console.log("Total Food:", totalFood);
console.log("Total Drink:", totalDrink);
console.log("Grand Total:", grandTotal);
console.log("Final Payment:", finalPayment);