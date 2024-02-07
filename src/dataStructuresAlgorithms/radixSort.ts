/**
 * A sorting algorithm that does not compare elements of the array, instead it uses digits to
 * sort an array into sorted sub-arrays for each digit and merges them back together.
 *
 * - Determine the largest number in the array
 *    - Determine how many digits there are in the number
 * - Bassed on the number of digits of the maximum value we will itterate this many times
 *    - Take the maximum number and pull the digit in each space starting from the right
 *      on each itteration
 *    - Sort the array based on this digit
 * - Continue this for each digit of the maximum
 *
 * TIME COMPLEXITY: Ο(nm)
 * - This requires looping through the original array as many times as there are digits
 *   in the maximum value
 *
 * SPACE COMPLEXITY: Ο(n + m)
 * - This creates a two dimmensional array that is the length of the original array as many
 *   times as there are digits in the maximum value
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
function radixSort(arr: number[]): number[] {
  const max = Math.max(...arr);
  const maxDigitCount = max === 0 ? 1 : Math.floor(Math.log10(Math.abs(max))) + 1;

  /**
   * Extracts the digit at a specific position.
   *
   * @param subj {number} The number you wish to pull a digit from
   * @param idx {number} The position of the digit you wish to pull
   * @returns {number}
   */
  function getDigit(subj: number, idx: number): number {
    return Math.floor(Math.abs(subj) / Math.pow(10, idx)) % 10;
  }

  for (let i = 0; i < maxDigitCount; i++) {
    const sortedPerDigit = Array.from({ length: arr.length }, () => [] as number[]);

    for (let j = 0; j < arr.length; j++) {
      sortedPerDigit[getDigit(arr[j], i)].push(arr[j]);
    }

    arr = sortedPerDigit.flat();
  }

  return arr;
}

export default radixSort;
