/**
 * 73) Set Matrix Zeroes
 * Difficulty:  Medium
 * Topics: Array, Hash Table, Matrix
 * Companies: Amazon, Adobe, Facebook, Apple, Oracle, Uber, Sprinklr, Microsoft, Bloomberg, Nvidia, Accenture
 */

/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const m: number = matrix.length;
  const zRow: any = new Set();
  const zCol: any = new Set();

  for (let i = 0; i < m; i++) {
    const n = matrix[i].length;
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        zRow.add(i);
        zCol.add(j);
      }
    }
  }

  for (const row of zRow.values()) {
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[row][j] = 0;
      }
    }
  }

  for (const col of zCol.values()) {
    for (let i = 0; i < m; i++) {
      matrix[i][col] = 0;
    }
  }
}
