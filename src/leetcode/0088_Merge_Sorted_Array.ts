/**
 * 88) Merge Sorted Array
 * Difficulty:  Easy
 * Topics: Array, Two Pointers, Sorting
 * Companies: Facebook, Amazon, Microsoft, Google, Adobe, Apple, Uber, Bloomberg, Yahoo, PayPal, Yandex, Infosys, TikTok, LinkedIn, Goldman Sachs, IBM, Accenture, Atlassian, Intuit, Shopee, tcs, Oracle, Indeed, Reddit, Nvidia, Barclays, Cisco, Walmart Labs, Morgan Stanley, ByteDance, Splunk, Avito, Hubspot
 */

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  let t = n + m - 1;

  while (i >= 0 || j >= 0) {
    if (i < 0) {
      nums1[t--] = nums2[j--];
    } else if (j < 0) {
      nums1[t--] = nums1[i--];
    } else if (nums1[i] >= nums2[j]) {
      nums1[t--] = nums1[i--];
    } else if (nums1[i] < nums2[j]) {
      nums1[t--] = nums2[j--];
    }
  }
}
