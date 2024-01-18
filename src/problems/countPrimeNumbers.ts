import isPrimeNumber from './isPrimeNumber';

/**
 * Determine the amount of prime numbers up to and including the provided number.
 *
 * @param num {number} The upper bound you wish to find the number of primes for
 * @returns {number}
 */
function countPrimeNumbers(num: number): number {
  if (num < 2) {
    return 0;
  }

  if (num === 2) {
    return 1;
  }

  let count = 0;

  for (let i = 2; i <= num; i++) {
    count += Number(isPrimeNumber(i));
  }

  return count;
}
