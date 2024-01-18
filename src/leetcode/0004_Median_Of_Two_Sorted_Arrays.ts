/**
 * 4) Median of Two Sorted Arrays
 * Difficulty:  Hard
 * Topics: Array, Binary Search, Divide and Conquer
 * Companies: Amazon, Apple, Adobe, Google, Goldman Sachs, Microsoft, Bloomberg, Facebook, Rippling, Uber, eBay, VMware, Yahoo, TikTok, tcs, LinkedIn, PayPal, ServiceNow, Morgan Stanley, Zoho, Walmart Labs, MathWorks, SAP, Arcesium, Sprinklr, Accenture, OLX, Zenefits, Dropbox
 */

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const nums = nums1.concat(nums2).sort((a, b) => a - b);
  const mid = nums.length / 2 - 1;

  return nums.length % 2 ? nums[Math.ceil(mid)] : (nums[mid] + nums[mid + 1]) / 2;
}
