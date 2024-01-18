/**
 * 7) Reverse Integer
 * Difficulty:  Medium
 * Topics: Math
 * Companies: Amazon, Adobe, Google, Microsoft, Uber, Apple, Bloomberg, Facebook, Accenture, tcs, Intel, Infosys, Yahoo, Oracle, JPMorgan, IBM, Virtusa, Workday
 */

function reverse(x: number): number {
  let result = 0;
  const sign = x < 0;

  x = Math.abs(x);

  while (x) {
    result = result * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return result > 0x7fffffff ? 0 : sign ? -result : result;
}
