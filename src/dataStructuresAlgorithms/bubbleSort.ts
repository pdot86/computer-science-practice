/**
 * A sorting algorithm that loops over the entire array and swaps positions of items
 * over and over until the array is finally sorted.
 *
 * TIME COMPLEXITY: O(n^2)
 * - Each pass is only O(n) but it may require up to n passes
 *
 * SPACE COMPLEXITY: O(1)
 * - No extra memory is required
 *
 * IN/OUT-OF-PLACE: in-place
 *
 * STABILITY: stable
 *
 * COMPARISON SORT: comparison
 *
 * @param arr {number[]} An unsorted array of numbers
 * @returns {number[]} The array of numbers sorted in increasing order
 */
function bubbleSort(arr: number[]): number[] {
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] - arr[j - 1] < 0) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }

  return arr;
}

export default bubbleSort;
