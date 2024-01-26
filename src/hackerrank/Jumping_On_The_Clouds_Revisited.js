/**
 * Jumping On The Clouds: Revisited
 * Difficulty: Easy
 * Max Score: 15
 * Score: 15
 */

function jumpingOnClouds(c, k) {
  let pos = 0;
  let energy = 100;

  while (energy === 100 || (pos !== 0 && energy)) {
    energy -= c[pos] ? 3 : 1
    pos = (pos + k) % c.length;
  }

  return energy;
}