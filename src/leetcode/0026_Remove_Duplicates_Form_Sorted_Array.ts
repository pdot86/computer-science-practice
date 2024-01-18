/**
 * 26) Remove Duplicates from Sorted Array
 * Difficulty:  Easy
 * Topics: Array, Two Pointers
 * Companies: Amazon, Apple, Adobe, Yahoo, Bloomberg, Facebook, Google, Accenture, Capgemini, Microsoft, Akamai, Ozon, Uber, VMware, Walmart Labs, Oracle, LinkedIn, Infosys, tcs
 */

function removeDuplicates(nums: number[]): number {
  let count = 0;
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
    }
  }

  return nums.length;
}
