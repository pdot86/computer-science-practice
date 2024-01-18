/**
 * 442) Find All Duplicates in an Array
 * Difficulty:  Medium
 * Topics: Array, Hash Table
 * Companies: Amazon, Apple, Microsoft, Adobe, Facebook, Google, Nagarro, Visa, Pocket Gems
 */

function findDuplicates(nums: number[]): number[] {
  let stash = new Set();
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (stash.has(nums[i])) {
      result.push(nums[i]);
    } else {
      stash.add(nums[i]);
    }
  }

  return result;
}
