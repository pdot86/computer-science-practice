/**
 * A sorting algorithm which is a variation of insertion sort that aims to sort
 * out-in and allows movement of more than one place. Working with elements far
 * apart you progressively reduce the gap between elements being compared.
 *
 * - Start with a gap that is half the length of the input
 * - Compare the current index value to the value of the index after the gap
 *    - Itterating from gap to the length of the input incrementing by 1
 *        - While: the current index is greater than the gap AND the gap index
 *                 value is greater than the current index value
 *          - Swap indicies
 *          - Reduce the current index by the gap
 *    - Continue to compare and swap until you reach the end
 * - Continue to compare until there is a gap of 1
 *
 * TIME COMPLEXITY: Ο(n log(n))
 *
 * SPACE COMPLEXITY: Ο(1)
 *
 * IN/OUT-OF-PLACE: in-place
 *
 * STABILITY: unstable
 *
 * COMPARISON SORT: comparison
 *
 * @param arr {number[]} An unsorted array of numbers
 * @returns {number[]} The array of numbers sorted in increasing order
 */
function shellSort(arr: number[]): number[] {
  const len = arr.length;
  let gap = Math.floor(len / 2);

  for (gap; gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < len; i++) {
      let j = i;

      while (j >= gap && arr[j] < arr[j - gap]) {
        [arr[j], arr[j - gap]] = [arr[j - gap], arr[j]];
        j = j - gap;
      }
    }
  }

  return arr;
}

export default shellSort;
