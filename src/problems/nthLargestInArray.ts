/**
 * Given an unsorted array, return the nth largest number in the array.
 *
 * - Make the given array unique
 * - Sort the given array in desacending order
 * - Return the value at index n-1 (because arrays ar zer-indexed)
 *
 * @param n {number} The number of the nth largest value to find (>= 0)
 * @param arr {number[]} An unsorted array of integers
 * @returns {number}
 */
function nthLargestInArray(n: number, arr: number[]): number {
  arr = [...new Set(arr)];
  arr.sort((a, b) => b - a);

  return arr[n - 1];
}

export default nthLargestInArray;
