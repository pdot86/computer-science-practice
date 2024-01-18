/**
 * Sums the value of all numbers in a fibonacci sequence up to and including the given number.
 *
 * @param n {number} The maximum number that the fibonacci sequence should go up to
 * @returns {number}
 */
function fibonacciSum(n: number): number {
  if (n <= 0) {
    return 0;
  }

  let sequence = [0, 1, 1];

  for (let i = 3; sequence[i - 1] < n; i++) {
    const next = sequence[i - 1] + sequence[i - 2];

    if (next <= n) {
      sequence.push(next);
    } else {
      break;
    }
  }

  return sequence.reduce((acc, curr) => (acc += curr), 0);
}

export default fibonacciSum;
