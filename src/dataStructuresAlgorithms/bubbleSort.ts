/**
 * An sorting algorithm that loops over the entire array and swaps positions of items
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
  let sorted = false;

  while (!sorted) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
      }
    }
  }

  return arr;
}

export default bubbleSort;
