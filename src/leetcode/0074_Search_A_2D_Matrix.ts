/**
 * 74) Search a 2D Matrix
 * Difficulty:  Medium
 * Topics: Array, Binary Search, Matrix
 * Companies: Amazon10, Facebook6, Goldman Sachs5, Apple4, Google3, Microsoft2, Yahoo2, Snapchat2, Tinkoff2, Bloomberg2, Adobe2, Oracle2, Coupang2, Walmart Labs4, Uber2, Visa2, Expedia2, Nvidia2, TikTok2
 */

function searchMatrix(matrix: number[][], target: number): boolean {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][matrix[i].length - 1] >= target) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === target) {
          return true;
        }
        if (matrix[i][j] > target) {
          return false;
        }
      }
    }
  }

  return false;
}
