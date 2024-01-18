/**
 * A two pointer sorting algorithm that takes itterates over the array setting each
 * index as the current minimum vlue, then itterates through the rest of the array
 * and when a new minimum is found the two indicies are swapped creating a sorted
 * partition on the left while looping through the unsorted partition on the right.
 *
 * - With the first loop we step through the array setting the current index
 *   as the current minimum value
 * - Itterate over the items to thr right of the current minimum value
 *    - When you find a new minumum swap values putting the newly found item
 *      to the left of the index creating a sorted array to the left
 *    - Repeat the process for the rest of the array continueing to add to the
 *      sorted array on the left from the unsorted array on the right
 *
 * TIME COMPLEXITY: O(n^2)
 * - Because we are using a nested loop, we have quadratic time complexity
 *
 * SPACE COMPLEXITY: O(1)
 * - Items in the array are swapped in place, making this efficient in space complexity
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
function selectionSort(arr: number[]): number[] {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let currMinIndex = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[currMinIndex]) {
        currMinIndex = j;
      }
    }

    [arr[i], arr[currMinIndex]] = [arr[currMinIndex], arr[i]];
  }

  return arr;
}

export default selectionSort;
