/**
 * PROBLEM: Given an unsorted array of intergers, count the number of swaps necessary to sort the array.
 */

/**
 * Uses bubbleSort to sort an array, and counts the number of swaps required.
 * @param arr {number[]} An unsorted array of numbers
 * @returns {number} The number of swaps required to sort the given array
 */
function bubbleSortSwaps(arr: number[]): number {
  let a = [...arr];
  let sorted = false;
  let swaps = 0;

  while (!sorted) {
    const before = swaps;

    for (let i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        let tmpA = a[i];
        let tmpB = a[i + 1];
        a[i] = tmpB;
        a[i + 1] = tmpA;
        swaps += 1;
      }
    }

    sorted = before === swaps;
  }

  return swaps;
}

export default bubbleSortSwaps;
