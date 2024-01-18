/**
 * A sorting algorithm that starts off by counting the occurences of each value in the array
 * and saving the minimum and maximum of the array, then loop through each number one by one
 * from the minimum to the maximum and when that number is included in the counts push the
 * value into a results array however many times it was recorded.
 *
 * - Create a data structure to count the occurences of each item in the array
 * - Determine the minimum and maximum values in the array
 *    - Looping over every number from the minimum to the maximum, push the value
 *      to the sorted array however many times it was counted in the first step
 * - After reaching the maxiumum value we end up with a sorted array
 *
 * TIME COMPLEXITY: Ο(n + m)
 * - This requires looping through the original array, then each number between the min and max
 *
 * SPACE COMPLEXITY: Ο(m)
 * - To track the counts we need to use maximum - minimum space
 *
 * IN/OUT-OF-PLACE: out-of-place
 *
 * STABILITY: stable
 *
 * COMPARISON SORT: non-comparison
 *
 * @param arr {number[]} An unsorted array of numbers
 * @returns {number[]} The array of numbers sorted in increasing order
 */
function countingSort(arr: number[]): number[] {
  const sortedArray = [];
  const counts = new Map();
  let min = Infinity;
  let max = -1;

  for (let i = 0; i < arr.length; i++) {
    min = arr[i] < min ? arr[i] : min;
    max = arr[i] > max ? arr[i] : max;

    if (counts.has(arr[i])) {
      counts.set(arr[i], counts.get(arr[i]) + 1);
    } else {
      counts.set(arr[i], 1);
    }
  }

  for (let i = min; i <= max; i++) {
    if (counts.has(i)) {
      while (counts.get(i) > 0) {
        sortedArray.push(i);
        counts.set(i, counts.get(i) - 1);
      }
    }
  }

  return sortedArray;
}

export default countingSort;
