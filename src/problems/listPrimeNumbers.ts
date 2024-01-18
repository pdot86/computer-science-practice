/**
 * A prime number is any whole number greater than 1 that cannot be evenly divided by a whole number other than itself.
 */

/**
 * Prepares a list of all the prime numbers up to, and possibly including, a given number.
 * This uses a bottom-up approach and will itterate over all numbers up to the given number.
 * @param n {number} The max number you want to list primes to
 * @param inclusive {boolean} Whether or not the list should be inclusive of n
 * @returns {number[]}
 */
function listPrimeNumbers(n: number, inclusive: boolean = true): number[] {
  let primes = n === 2 ? [2] : [];

  if (n > 2) {
    for (let i = 2; i < n; i++) {
      isPrime(i) && primes.push(i);
    }

    inclusive && isPrime(n) && primes.push(n);
  }

  return primes;
}

/**
 * Determines if a given number is a prime number.
 * @param n {number} The number to check if prime
 * @returns {boolean}
 */
function isPrime(n: number) {
  if (!n || n <= 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

export default listPrimeNumbers;
