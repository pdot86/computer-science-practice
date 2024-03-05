/**
 * 674) Longest Continuous Increasing Subsequence
 * Difficulty:  Easy
 * Topics: Array
 * Companies: Facebook, Google, Amazon
 */

function findLengthOfLCIS(nums: number[]): number {
  let count = 0;
  let tmp = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      tmp.push(nums[i]);
    } else {
      count = count >= tmp.length ? count : tmp.length;
      tmp = [nums[i]];
    }
  }

  count = count >= tmp.length ? count : tmp.length;

  return count;
}
