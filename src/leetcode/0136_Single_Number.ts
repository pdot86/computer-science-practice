/**
 * 136) Single Number
 * Difficulty:  Easy
 * Topics: Array, Bit Manipulation
 * Companies: Amazon, Adobe, Google, Apple, Yandex, Yahoo, Zoho, Bloomberg, Facebook, Uber, Microsoft, tcs, Atlassian, Airbnb, Palantir Technologies
 */

function singleNumber(nums: number[]): number {
  const map = new Map();

  nums.forEach((n) => {
    map.has(n) ? map.set(n, map.get(n) + 1) : map.set(n, 1);
  });

  for (const entry of map) {
    if (entry[1] === 1) {
      return entry[0];
    }
  }

  throw new Error('No single number found...');
}
