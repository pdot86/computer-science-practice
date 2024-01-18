/**
 * 162) Find Peak Element
 * Difficulty:  Medium
 * Topics: Array, Binary Search
 * Companies: Facebook, Amazon, Apple, Adobe, Google, Bloomberg, TikTok, Microsoft, Uber, Snapchat, Roblox, HRT, Goldman Sachs
 */

function findPeakElement(nums: number[]): number {
  if (nums.length === 1) {
    return 0;
  }
  if (nums.length === 2) {
    if (nums[0] >= nums[1]) {
      return 0;
    } else {
      return 1;
    }
  }
  if (nums.length === 3) {
    if (nums[1] > nums[0] && nums[1] > nums[2]) {
      return 1;
    }
  }

  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      return i;
    }
  }

  let max = 0;
  let idx = 0;
  nums.forEach((v, i) => {
    max = Math.max(max, v);
    if (max === v) {
      idx = i;
    }
  });
  return idx;
}
