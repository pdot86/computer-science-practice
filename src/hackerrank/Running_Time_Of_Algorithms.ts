/**
 * Running Time of Algorithms
 * Difficulty: Easy
 * Max Score: 30
 * Score: 30
 */

function runningTime(arr: number[]): number {
  let result = 0;

  let left = 0;
  let right = arr.length - 1;

  for (let i = left + 1; i <= right; i++) {
    const curr = arr[i];
    let j = i - 1;
    while (j >= left && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
      result += 1;
    }
    arr[j + 1] = curr;
  }

  return result;
}
