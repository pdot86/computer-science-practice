/**
 * PROBLEM: Given an unsorted array of intergers, count the number of passes necessary to sort the array.
 * Passes should only include passes when an item was swapped.
 */

/**
 * Uses bubbleSort to sort an array, and counts the number of passes required.
 * @param arr {number[]} An unsorted array of numbers
 * @returns {number} The number of passes required to sort the given array
 */
function bubbleSortPasses(arr: number[]): number {
  let a = [...arr];
  let sorted = false;
  let passes = -1;

  while (!sorted) {
    passes += 1;
    let isSorted = true;

    for (let i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        let tmp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = tmp;
        isSorted = false;
      }
    }

    sorted = isSorted;
  }

  return passes;
}

export default bubbleSortPasses;
