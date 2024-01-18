/**
 * 204) Count Primes
 * Difficulty:  Medium
 * Topics: Array, Math, Enumeration, Number Theory
 * Companies: Amazon, Bloomberg, Apple, Adobe, Capital One, TikTok, Microsoft, Yandex, Cisco, tcs, Cognizant, PornHub
 */

function countPrimes(n: number): number {
  if (n < 2) {
    return 0;
  }

  let primes = new Array(n);
  let pCount = 0;

  for (let i = 2; i < n; i++) {
    if (!primes[i]) {
      pCount += 1;

      for (let j = i * i; j < n; j += i) {
        primes[j] = 1;
      }
    }
  }

  return pCount;
}
