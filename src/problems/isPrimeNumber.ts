/**
 * Determines if a given number is prime.
 *
 * @param num {number} The number you want to check
 * @returns {boolean}
 */
function isPrimeNumber(num: number) {
  if (!num || num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

export default isPrimeNumber;
