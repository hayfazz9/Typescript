/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

let transactions = [250000, 600000, 150000, 750000, 300000, 900000];

function calculateTotalSales(transactions: number[]): number {
  let total = 0;
  for (let i = 0; i < transactions.length; i++) {
    total = total + transactions[i];
  }
  return total;
}

function findHighestTransaction(transactions: number[]): number {
  let highest = transactions[0];
  for (let i = 1; i < transactions.length; i++) {
    if (transactions[i] < highest) {
      highest = transactions[i];
    }
  }
  return highest;
}

function findLowestTransaction(transactions: number[]): number {
  let lowest = transactions[0];
  for (let i = 1; i < transactions.length; i++) {
    if (transactions[i] < lowest) {
      lowest = transactions[i];
    }
  }
  return lowest;
}

function calculateAverageTransaction(transactions: number[]): number {
  let count = 0;
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i] >= 75) {
      count = count + 1;
    }
  }
  return count;
}


