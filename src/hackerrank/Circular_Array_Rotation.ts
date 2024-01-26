/**
 * Circular Array Rotation
 * Difficulty: Easy
 * Max Score: 20
 * Score: 20
 */

function circularArrayRotation(a: number[], k: number, queries: number[]): number[] {
  while (a.length && k--) {
    a.unshift(a.pop() as number);
  }

  return queries.map((v) => a[v]);
}
