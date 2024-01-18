/**
 * 64) Minimum Path Sum
 * Difficulty:  Medium
 * Topics: Array, Dynamic Programming, Matrix
 * Companies: Goldman Sachs, Amazon, Bloomberg, Microsoft, Apple, Google, Uber, Oracle, Square, Snapchat, Nutanix, ByteDance, MakeMyTrip, AQR Capital Management LLC
 */

function minPathSum(grid: number[][]): number {
  const rows = grid.length;
  const cols = rows ? grid[0].length : 0;
  let sum = 0;

  for (let i = 1; i < rows; i++) {
    grid[i][0] += grid[i - 1][0];
  }

  for (let j = 1; j < cols; j++) {
    grid[0][j] += grid[0][j - 1];
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }

  return cols ? grid[rows - 1][cols - 1] : 0;
}
