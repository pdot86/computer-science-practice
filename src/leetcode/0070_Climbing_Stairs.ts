/**
 * 70) Climbing Stairs
 * Difficulty:  Easy
 * Topics: Math, Dynamic Programming, Memoization
 * Companies: Amazon, Google, Apple, Adobe, Zoho, Microsoft, Yahoo, Bloomberg, Facebook, Accenture, Oracle, Accolite, Uber, Swiggy, turing, Goldman Sachs, Intel, Cisco, Visa, Yandex, Qualcomm, Deloitte, Nagarro, Grammarly, Autodesk
 */

function climbStairs(n: number): number {
  let stairs = Array(n);

  stairs[0] = 1;
  stairs[1] = 2;

  for (let i = 2; i < n; i++) {
    stairs[i] = stairs[i - 1] + stairs[i - 2];
  }

  return stairs[n - 1];
}
