/**
 * Arrays - Left Rotation
 * Difficulty: Easy
 * Max Score: 20
 * Score: 20
 */

function rotLeft(a: number[], d: number): number[] {
  while (d) {
    let curr = a.shift() as number;
    a.push(curr);
    d -= 1;
  }

  return a;
}
