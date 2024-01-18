import insertionSort from './insertionSort';

/**
 * A sorting algorithm that is a hybrid of insertion and merge sort. This joint
 * effort work well by using a more optimal sorting algorithm based off the size
 * of the current list.
 *
 * - Define the minimum size of the runs
 * - Divide the array into sub arrays for each run
 *    - Apply insertion sort to each run
 *    - Merge the runs
 *    - Double the run size until it exceeds the length of the rray
 *
 * TIME COMPLEXITY: Ο(n log(n))
 *
 * SPACE COMPLEXITY: Ο(n)
 *
 * IN/OUT-OF-PLACE: out-of-place
 *
 * STABILITY: stable
 *
 * COMPARISON SORT: comparison
 *
 * @param arr {number[]} An unsorted array of numbers
 * @returns {number[]} The array of numbers sorted in increasing order
 */
function timSort(arr: number[]): number[] {
  const RUN_LENGTH = 32;
  const len = arr.length;

  // Partition the array by the RUN_LENGTH and perform an insertion sort on each
  for (let i = 0; i < len; i += RUN_LENGTH) {
    arr = insertionSort(arr, i, Math.min(i + RUN_LENGTH - 1, len - 1));
  }

  // Double our minimum length each iteration until we reach the end
  for (let size = RUN_LENGTH; size < len; size *= 2) {
    // Run mergeSort on each sub array
    for (let left = 0; left < len; left += 2 * size) {
      const mid = left + size - 1;
      const right = Math.min(left + 2 * size - 1, len - 1);

      if (mid < right) {
        const lowLen = mid - left + 1;
        const highLen = right - mid;
        const lowArr = new Array(lowLen);
        const highArr = new Array(highLen);

        for (let i = 0; i < lowLen; i++) {
          lowArr[i] = arr[left + i];
        }

        for (let i = 0; i < highLen; i++) {
          highArr[i] = arr[mid + 1 + i];
        }

        let lowIdx = 0;
        let highIdx = 0;
        let currIdx = left;

        while (lowIdx < lowArr.length && highIdx < highArr.length) {
          if (lowArr[lowIdx] > highArr[highIdx]) {
            arr[currIdx++] = highArr[highIdx++];
          } else {
            arr[currIdx++] = lowArr[lowIdx++];
          }
        }

        while (lowIdx < lowArr.length) {
          arr[currIdx++] = lowArr[lowIdx++];
        }

        while (highIdx < highArr.length) {
          arr[currIdx++] = highArr[highIdx++];
        }
      }
    }
  }

  return arr;
}

export default timSort;
