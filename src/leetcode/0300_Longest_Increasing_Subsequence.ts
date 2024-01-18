/**
 * 300) Longest Increasing Subsequence
 * Difficulty:  Medium
 * Topics: Array, Binary Search, Dynamic Programming
 * Companies: Oracle, Amazon, TikTok, Google, Apple, Goldman Sachs, Facebook, Atlassian, Microsoft, Uber, Adobe, Intuit, Commvault, Accenture, Yandex, Pure Storage, Booking.com, Bloomberg, IBM, TuSimple, Expedia, VMware, Visa, Yahoo, ByteDance, PayPal, Infosys, Huawei, Deutsche Bank, Chewy, Udemy
 */

function lengthOfLIS(nums: number[]): number {
  let LIS = Array(nums.length).fill(1);

  for (let i = nums.length - 1; i > -1; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        LIS[i] = LIS[i] > 1 + LIS[j] ? LIS[i] : 1 + LIS[j];
      }
    }
  }

  return LIS.reduce((acc, curr) => {
    acc = curr > acc ? curr : acc;
    return acc;
  }, 0);
}
