/**
 * Counting Sort 1
 * Difficulty: Easy
 * Max Score: 30
 * Score: 30
 */

function countingSort(arr: number[]): number[] {
  let maxVal = 0;

  for (let i = 0; i < arr.length; i++) {
    maxVal = maxVal > arr[i] ? maxVal : arr[i];
  }

  const max = Math.max(100, maxVal);
  const result = new Array(max).fill(0);

  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] += 1;
  }

  return result;
}
