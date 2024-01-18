/**
 * 53) Maximum Subarray
 * Difficulty:  Medium
 * Topics: Array, Divide and Conquer, Dynamic Programming
 * Companies: Amazon, Microsoft, Bloomberg, Apple, Adobe, TikTok, Goldman Sachs, JPMorgan, Google, Uber, DE Shaw, Cisco, Facebook, Walmart Labs, tcs, LinkedIn, Oracle, Twilio, Shopee, Expedia, Salesforce, VMware, IBM, Docusign, Yahoo, Zillow, ServiceNow, ByteDance, Paytm, Infosys, Poshmark, Veeva, HashedIn, Upstart, Gopuff, Wix
 */

function maxSubArray(nums: number[]): number {
  let maxValue = nums[0];
  let subArr;
  let table = [];
  table[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    table[i] = Math.max(nums[i], nums[i] + table[i - 1]);
    maxValue = Math.max(maxValue, table[i]);
  }

  return maxValue;
}
