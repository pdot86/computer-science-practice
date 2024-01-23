/**
 * Minimum Swaps 2
 * Difficulty: Medium
 * Max Score: 40
 * Score: 40
 */

function minimumSwaps(arr) {
  const len = arr.length;
  let swaps = 0;
  let i = 0;

  while (i < len) {
    if (arr[i] != i + 1) {
      while (arr[i] != i + 1) {
        let tmp = arr[arr[i] - 1];
        arr[arr[i] - 1] = arr[i];
        arr[i] = tmp;
        swaps += 1;
      }
    }

    i += 1;
  }

  return swaps;
}
