/**
 * 371) Sum of Two Integers
 * Difficulty:  Medium
 * Topics: Math, Bit Manipulation
 * Companies: Amazon, Yahoo, Adobe, Facebook, Microsoft, Apple, Bloomberg, Hulu
 */

function getSum(a: number, b: number): number {
  if (b === 0) {
    return a;
  } else {
    return getSum(a ^ b, (a & b) << 1);
  }
}
