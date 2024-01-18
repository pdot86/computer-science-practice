/**
 * Get the nth fibonacci number in the sequence.
 * This is a bottom-up approach- the array is built from left to right.
 * We start off with the known first 3 values and then loop until we reach
 * the nth position as we build out the array. With a built array we have a
 * constant look up time.
 *
 * O(n)
 *
 * To improve upon this further you can save the memory space by only
 * keeping track of the previous 2 values rather than keeping the whole array.
 * @param n {number} The index of the fibonacci number you want to pull
 * @returns {number}
 */
function nthFibonacciNumber(n: number): number {
  if (n === 0) {
    return 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }

  let result = Array(n + 1);
  result[0] = 0;
  result[1] = 1;
  result[2] = 1;

  for (let i = 3; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result[n];
}

export default nthFibonacciNumber;

/**
 * This is a dynamic programming approach to the same problem.
 * This solution will be slightly slower than the bottom up approach,
 * as it is linear.
 * O(n)
 * The reason this is not as fast as bottom-up is because as you memoize
 * new results, you are running in O(2n+1), but the lookup time is still
 * O(1) which ends up as O(n).
 * With memoization you do not need to repeat calculations as you will
 * dynamically pass the previous results into the recursive call.
 * While this may be just as efficient as recursive for smaller numbers,
 * as you scale it continues to hold it's efficiency a bit longer; however,
 * when you start to get bigger it loses out to bottom up.
 * @param n {number} The index of the fibonacci number you want to pull
 * @returns {number}
 */
function nthFibonacciNumberDynamicProgramming(n: number): number {
  if (n === 0) {
    return 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }

  function dpFib(n: number, memo?: number[]): number {
    if (!memo) {
      return dpFib(n, [0, 1, 1]);
    }

    if (memo[n] !== undefined) {
      return memo[n];
    }

    memo[n] = dpFib(n - 1, memo) + dpFib(n - 2, memo);

    return memo[n];
  }

  return dpFib(n);
}

/**
 * This is a simple recursive solution to the problem. While it may seem
 * efficient, you actually end up repeating a lot of calculations giving
 * this version exponential timing.
 * O(2^n)
 * While this may be fast for smaller numbers, it quickly becomes inefficient.
 * @param n {number} The
 * @returns {number}
 */
function nthFibonacciNumberRecursive(n: number): number {
  if (n === 1 || n === 2) {
    return 1;
  }

  return (
    nthFibonacciNumberRecursive(n - 1) + nthFibonacciNumberRecursive(n - 2)
  );
}
