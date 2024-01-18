/**
 * 35) Search Insert Position
 * Difficulty:  Easy
 * Topics: Array, Binary Search
 * Companies: Google, Amazon, Apple, Adobe, Uber, Yahoo, Bloomberg, Microsoft, Facebook, tcs
 */

function searchInsert(nums: number[], target: number): number {
  let idx = nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (target <= nums[i]) {
      idx = i;
      break;
    }
  }

  return idx;
}
