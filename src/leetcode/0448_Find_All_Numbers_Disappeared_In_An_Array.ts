/**
 * 448) Find All Numbers Disappeared in an Array
 * Difficulty:  Easy
 * Topics: Array, Hash Table
 * Companies: Facebook, Amazon, Google, Microsoft, Apple
 */

function findDisappearedNumbers(nums: number[]): number[] {
  const set = new Set(nums);
  const len = nums.length;
  const results = [];

  for (let i = 1; i <= len; i++) {
    if (!set.has(i)) {
      results.push(i);
    }
  }

  return results;
}
