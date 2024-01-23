/**
 * Arrays - 2D Array - DS
 * Difficulty: Easy
 * Max Score: 15
 * Score: 15
 */

function hourglassSum(arr: number[][]): number {
  const x = arr.length;
  const y = arr[0].length;
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < x - 2; i++) {
    for (let j = 0; j < y - 2; j++) {
      let sum = 0;
      sum += arr[i][j];
      sum += arr[i][j + 1];
      sum += arr[i][j + 2];
      sum += arr[i + 1][j + 1];
      sum += arr[i + 2][j];
      sum += arr[i + 2][j + 1];
      sum += arr[i + 2][j + 2];
      maxSum = Math.max(maxSum, sum);
    }
  }

  return maxSum;
}
