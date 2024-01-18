/**
 * A sorting algorithm that virtually splits the array into two- a sorted and unsorted side.
 * You itterate over the array one by one comparing the current element to the
 * elements in the sorted array from right to left and insert it at the correct
 * position in the sorted array until all items are inserted in the correct position
 * of the sorted array.
 *
 * - Start at second element (index 1) and compare it to the value of it's previous item (index 0)
 *    - If the current value is smaller than the previous item insert it to the left
 * - Continue to itterate towards the right
 *    - On each itteration test to see if the current item is smaller than each item in the
 *      sorted array going from right to left
 * - Repeat this process until you have gone through the original array meaning you have inserted
 *   each index in it's proper location to sort the full array.
 *
 * TIME COMPLEXITY: O(n^2)
 * - Because we are using a nested loop, we have quadratic time complexity
 *
 * SPACE COMPLEXITY: O(1)
 * - Items in the array are swapped in place, making this efficient in space complexity
 *
 * IN/OUT-OF-PLACE: in-place
 *
 * STABILITY: stable
 *
 * COMPARISON SORT: comparison
 *
 * @param arr {number[]} An unsorted array of numbers
 * @param left {undefined|number} The sub array to the left left of the current index
 * @param right {undefined|number} The sub array to the right of the current index
 * @returns {number[]} The array of numbers sorted in increasing order
 */
function insertionSort(arr: number[], left?: number, right?: number): number[] {
  if (left === undefined || right === undefined) {
    return insertionSort(arr, 0, arr.length - 1);
  }

  for (let i = left + 1; i <= right; i++) {
    const curr = arr[i];
    let j = i - 1;
    while (j >= left && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }

  // for (let i = left + 1; i < right; i++) {
  //   let currValue = arr[i];
  //   let subIndex = i - 1;

  //   while (subIndex >= left && arr[subIndex] > currValue) {
  //     arr[subIndex + 1] = arr[subIndex];
  //     subIndex -= 1;
  //   }
  //   arr[subIndex + 1] = currValue;
  // }

  return arr;
}

export default insertionSort;
