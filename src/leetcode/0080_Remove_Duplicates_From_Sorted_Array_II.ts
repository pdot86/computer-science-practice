/**
 * 80) Remove Duplicates from Sorted Array II
 * Difficulty:  Medium
 * Topics: Array, Two Pointers
 * Companies: Adobe, Amazon, Apple, Google, Microsoft, Facebook, TikTok
 */

function removeDuplicates(nums: number[]): number {
  let curr: number | undefined;
  let currCount = 0;
  let i = 0;

  while (i < nums.length) {
    if (curr !== nums[i]) {
      curr = nums[i];
      currCount = 1;
      i += 1;
    } else {
      currCount += 1;

      if (currCount > 2) {
        nums.splice(i, 1);
      } else {
        i += 1;
      }
    }
  }

  return nums.length;
}
