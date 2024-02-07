/**
 * 1582) Special Positions in a Binary Matrix
 * Difficulty:  Easy
 * Topics: Array, Matrix
 * Companies: Yahoo, Bloomberg, Google
 */

function numSpecial(mat: number[][]): number {
  let count = 0;
  const rows = mat.length;
  const cols = mat[0].length;
  const rowsCount = new Array(rows).fill(0);
  const colsCount = new Array(cols).fill(0);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (mat[row][col] === 1) {
        rowsCount[row] += 1;
        colsCount[col] += 1;
      }
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (mat[row][col] === 1 && rowsCount[row] === 1 && colsCount[col] === 1) {
        count += 1;
      }
    }
  }

  return count;
}
