/**
 * An LMS stores assignment scores:
 */
const scores = [92, 68, 84, 73, 95, 61, 88];
/**
 * The LMS needs to perform different analyses:
 * 1. Determine whether each student passed. Passing grade is 70.
 * 2. Convert each score into a grade.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     |
 * 
 * 3. Calculate a score after adding 5 bonus points.
 * 4. Determine whether the score is considered excellent. 
 * Score with more than 90 will be "Excellent", otherwise "Reguler".
 * 
 * 
 * Instead of creating four separate loops, create a reusable function that receives a callback responsible for transforming a score.
 */

function processScores(
    scores: number[],
    operation: (score: number) => void
): void {
    for (const score of scores) {
        operation(score);
    }
}

// 1. menentukan lulus atau tidak
console.log("=== PASS / FAIL ===");
processScores(scores, (score) => {
    if (score >= 70) {
        console.log(`${score} - Passed`);
    } else {
        console.log(`${score} - Failed`);
    }
});

// 2. mengkategorikan nilai
console.log("\n=== GRADES ===");

processScores(scores, (score) => {
    if (score >= 90) {
        console.log(`${score} - A`);
    } else if (score >= 80) {
        console.log(`${score} - B`);
    } else if (score >= 70) {
        console.log(`${score} - C`);
    } else {
        console.log(`${score} - D`);
    }
});

// 3. Di tambah 5 poin
console.log("\n=== BONUS SCORES ===");

processScores(scores, (score) => {
    const bonusScore = score + 5;
    console.log(`${score} + 5 = ${bonusScore}`);
});

// 4. 
console.log("\n=== EXCELLENT / REGULAR ===");
processScores(scores, (score) => {
    if (score > 90) {
        console.log(`${score} - Excellent`);
    } else {
        console.log(`${score} - Regular`);
    }
});