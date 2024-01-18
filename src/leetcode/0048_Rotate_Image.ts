/**
 * 48) Rotate Image
 * Difficulty:  Medium
 * Topics: Array, Math, Matrix
 * Companies: Cisco, Google, Amazon, Apple, Microsoft, Bloomberg, Adobe, Uber, Yahoo, Facebook, ZScaler, TikTok, EPAM Systems, Nvidia, Rubrik, Oracle, PayPal, eBay, Citadel, Square, Tiger Analytics, Goldman Sachs, Tesla, Roblox
 */

/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const max = matrix.length;

  // swap matrix axis
  let i = 0;
  while (i < max) {
    let j = i;
    while (j < max) {
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
      j += 1;
    }
    i += 1;
  }

  // flip matrix horizontally
  i = 0;
  while (i < max) {
    let j = 0;
    let k = max - 1;
    while (k > j) {
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[i][k];
      matrix[i][k] = tmp;
      j += 1;
      k -= 1;
    }
    i += 1;
  }
}
