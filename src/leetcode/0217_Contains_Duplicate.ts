/**
 * 217) Contains Duplicate
 * Difficulty:  Easy
 * Topics: Array, Hash Table, Sorting
 * Companies: Amazon, Apple, Google, Bloomberg, Uber, Microsoft, Facebook, Adobe, Yahoo, tcs, JPMorgan, Oracle, Accenture, Atlassian, Intel, Nagarro, Palo Alto Networks, Airbnb, Palantir Technologies
 */

function containsDuplicate(nums: number[]): boolean {
  if (nums.length) {
    const dict = new Map();

    for (let i = 0; i < nums.length; i++) {
      if (dict.has(nums[i])) {
        return true;
      } else {
        dict.set(nums[i], 1);
      }
    }
  }

  return false;
}
