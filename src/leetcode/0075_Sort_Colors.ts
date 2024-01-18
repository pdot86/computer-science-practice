/**
 * 75) Sort Colors
 * Difficulty:  Medium
 * Topics: Array, Two Pointers, Sorting
 * Companies: Microsoft, Adobe, Amazon, Oracle, Apple, Walmart Labs, Google, Bloomberg, Yahoo, DE Shaw, TikTok, Uber, VMware, Facebook, Nvidia, ServiceNow, Grab, Salesforce, Samsung, Infosys, ByteDance, Pocket Gems
 */

/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    for (let j = len - 1; j > i; j--) {
      if (nums[i] > nums[j]) {
        let swap = nums[j];
        nums[j] = nums[i];
        nums[i] = swap;
      }
    }
  }
}
