/**
 * Counting Sort 2
 * Difficulty: Easy
 * Max Score: 30
 * Score: 30
 */

function countingSort(arr: number[]): number[] {
  const sortedArray = [];
  const counts = new Map();
  let min = Infinity;
  let max = -1;

  for (let i = 0; i < arr.length; i++) {
    min = arr[i] < min ? arr[i] : min;
    max = arr[i] > max ? arr[i] : max;

    if (counts.has(arr[i])) {
      counts.set(arr[i], counts.get(arr[i]) + 1);
    } else {
      counts.set(arr[i], 1);
    }
  }

  for (let i = min; i <= max; i++) {
    if (counts.has(i)) {
      while (counts.get(i) > 0) {
        sortedArray.push(i);
        counts.set(i, counts.get(i) - 1);
      }
    }
  }

  return sortedArray;
}
