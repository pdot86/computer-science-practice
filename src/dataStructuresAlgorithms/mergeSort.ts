/**
 * A recursive and out-of-place sorting algorithm that completes the sort by recursively divinding
 * the array in half, followed by sorting each half, and finally merging the two sorted halves.
 * This algorithm is most efficient at scale, for smaller arrays there are much more efficient
 * sorting algorithms.
 *
 * TIME COMPLEXITY: Ο(n log(n))
 * - When splitting the array in half recursively we double the number of sub arrays each time
 *
 * SPACE COMPLEXITY: Ο(n)
 * - We do the sorting out of place
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
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const midPoint = Math.floor(arr.length / 2);

  /**
   * Run through the left and right arrays and place the items into a new array in the
   * proper order to output a sorted array composed of the left and right halves merged
   * in order.
   *
   * @param left {number[]} The first half of the current array split
   * @param right {number[]} The second half of the current array split
   * @returns {number[]}
   */
  function merge(left: number[], right: number[]): number[] {
    const mergedArr = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        mergedArr.push(left[i]);
        i += 1;
      } else {
        mergedArr.push(right[j]);
        j += 1;
      }
    }

    while (i < left.length) {
      mergedArr.push(left[i]);
      i += 1;
    }

    while (j < right.length) {
      mergedArr.push(right[j]);
      j += 1;
    }

    return mergedArr;
  }

  return merge(
    mergeSort(arr.slice(0, midPoint)),
    mergeSort(arr.slice(midPoint))
  );
}

export default mergeSort;
