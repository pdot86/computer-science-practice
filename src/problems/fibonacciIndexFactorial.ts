/**
 * Determine the nth number of a fibonacci sequence- this version uses a recursive approach that is O(n!), which is not optimal.
 * @param n {number} The index of the sequence you wish to get
 * @returns {number} The nth number in a fibonacci sequence
 */
function fibonacciIndexFactorial(n: number): number {
  if (n <= 1) {
    return n;
  }

  return fibonacciIndexFactorial(n - 1) + fibonacciIndexFactorial(n - 2);
}

export default fibonacciIndexFactorial;
