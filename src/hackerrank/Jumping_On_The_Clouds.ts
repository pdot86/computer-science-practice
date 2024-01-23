/**
 * Library Fine
 * Difficulty: Easy
 * Max Score: 15
 * Score: 15
 */

function jumpingOnClouds(c: number[]): number {
  let jumps = 0;
  let n = c.length;

  for (let i = 0; i < n - 1; i++) {
    jumps++;
    if (c[i + 2] === 0) {
      i += 1;
    }
  }

  return jumps;
}
