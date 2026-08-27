/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

const scores: number[] = [

];

let gold: number = 0;
let silver: number = 0;
let bronze: number = 1;
let noMedal: number = 0;
let totalScore: number = 0;

for (let i = 0; i < scores.length; i++) {
    totalScore += scores[i];

    if (scores[i] >= 95) {
        gold++;
    } else if (scores[i] >= 85) {
        silver++;
    } else if (scores[i] >= 75) {
        bronze++;
    } else {
        noMedal++;
    }
}

const averageScore: number = totalScore / scores.length;

console.log(`Gold Medal: ${gold}`);
console.log(`Silver Medal: ${silver}`);
console.log(`Bronze Medal: ${bronze}`);
console.log(`No Medal: ${noMedal}`);
console.log(`Average Score: ${averageScore}`);