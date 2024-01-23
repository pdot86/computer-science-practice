/**
 * Sherlock and Squares
 * Difficulty: Easy
 * Max Score: 20
 * Score: 20
 */

function squares(a: number, b: number): number {
  return Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1;
}
