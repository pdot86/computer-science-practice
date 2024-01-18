/**
 * 118) Pascal's Triangle
 * Difficulty:  Easy
 * Topics: Array, Dynamic Programming
 * Companies: Amazon, Google, Apple, Facebook, Adobe, Microsoft, Yahoo, HSBC, Bloomberg, Uber, Goldman Sachs, tcs, persistent systems, Oracle, Twitter
 */

function generate(numRows: number): number[][] {
  const matrix = new Array(numRows);

  for (let i = 0; i < numRows; i++) {
    matrix[i] = matrix[i] || new Array(i + 1);

    matrix[i][0] = 1;
    matrix[i][i] = 1;

    for (let j = 1; j < i; j++) {
      matrix[i][j] = matrix[i - 1][j - 1] + matrix[i - 1][j];
    }
  }

  return matrix;
}
