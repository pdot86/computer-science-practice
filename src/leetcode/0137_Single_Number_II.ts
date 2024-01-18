/**
 * 137) Single Number II
 * Difficulty:  Medium
 * Topics: Array, Bit Manipulation
 * Companies: Adobe, Amazon, Apple, Google, Yahoo
 */

function singleNumber(nums: number[]): number {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let count = map.get(nums[i]) || 0;

    map.set(nums[i], count + 1);
  }

  for (let [key, value] of map.entries()) {
    if (value === 1) {
      return key;
    }
  }

  throw new Error('No single number found...');
}
