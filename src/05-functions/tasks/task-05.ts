/**
 * A university wants to analyze the scores of students enrolled in Backend Development.
 * The dean requests several statistics.
 * Instead of writing one long program, the developer decides to divide the work into reusable functions.
 * Required calculations:
 * Highest score
 * Lowest score
 * Average score
 * Number of students who passed (passing score = 75)
 * 
 * Finally, another function should display the complete report.
 * Student Tasks
 * 1. Create function to find highest value.
 * 2. Create function to find lowest value.
 * 3. Create function to find average value.
 * 4. Create function to return number of passing students.
 */

let scores = [80, 65, 90, 75, 60, 88, 72, 95];

function findHighest(scores: number[]): number {
  let highest = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highest) {
      highest = scores[i];
    }
  }
  return highest;
}

function findLowest(scores: number[]): number {
  let lowest = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < lowest) {
      lowest = scores[i];
    }
  }
  return lowest;
}

function findAverage(scores: number[]): number {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total = total + scores[i];
  }
  return total / scores.length;
}

function countPassing(scores: number[]): number {
  let count = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 75) {
      count = count + 1;
    }
  }
  return count;
}

function printReport(scores: number[]): void {
  console.log("=== Student Score Report ===");
  console.log("Highest Score: " + findHighest(scores));
  console.log("Lowest Score: " + findLowest(scores));
  console.log("Average Score: " + findAverage(scores));
  console.log("Number of Passing Students: " + countPassing(scores));
}

printReport(scores);