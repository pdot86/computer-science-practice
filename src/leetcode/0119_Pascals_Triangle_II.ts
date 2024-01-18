/**
 * 119) Pascal's Triangle II
 * Difficulty:  Easy
 * Topics: Array, Dynamic Programming
 * Companies: Adobe, Yahoo, Amazon, Goldman Sachs, Microsoft, Apple, Bloomberg, Google
 */

function getRow(rowIndex: number): number[] {
  const pascal = [[1], [1, 1], [1, 2, 1]];

  while (rowIndex >= pascal.length) {
    let last = pascal[pascal.length - 1];
    let next = new Array(pascal.length + 1);

    next[0] = 1;
    next[next.length - 1] = 1;

    for (let i = 1; i < next.length - 1; i++) {
      next[i] = last[i] + last[i - 1];
    }

    pascal.push(next);
  }

  return pascal[rowIndex];
}
