/**
 * Generate a fibonacci sequence n numbers deep. This version uses a bottom-up approach.
 * @param n {number} The number of how many results you wish to include in the sequence
 * @returns {number[]} The fibonacci sequence
 */
function fibonacciSequence(n: number): number[] {
  let result = n <= 0 ? [] : n === 1 ? [0] : n === 2 ? [0, 1] : [0, 1, 1];

  for (let i = 3; result.length < n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result;
}

export default fibonacciSequence;
