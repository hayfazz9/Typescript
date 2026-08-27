/**
 * An online store stores product prices in an array in below.
 * The finance department needs to calculate the total purchase amount.
 * Instead of calculating the total directly in the main program, create reusable function.
 * The function should return the total price.
 * Student Tasks
 * 1. Create a function named calculateTotalPrice.
 * 2. The function receives an array of prices.
 * 3. Use a loop to calculate the total.
 * 4. Return the total price.
 * 5. Display the returned value.
 */

let productPrices = [15000, 25000, 10000, 5000];

function calculateTotalPrice(prices: number[]): number {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total = total + prices[i];
  }
  return total;
}

let total = calculateTotalPrice(productPrices);

console.log("Total purchase amount: " + total);