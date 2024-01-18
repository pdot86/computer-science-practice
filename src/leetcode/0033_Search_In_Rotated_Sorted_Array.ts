/**
 * 33) Search in Rotated Sorted Array
 * Difficulty:  Medium
 * Topics: Array, Binary Search
 * Companies: Amazon, Facebook, Microsoft, Bloomberg, Google, Adobe, Apple, TikTok, Arcesium, Yandex, LinkedIn, eBay, Salesforce, ServiceNow, Navi, Uber, Yahoo, Oracle, VMware, Walmart Labs, ByteDance, Media.net, Nvidia, Visa, Splunk, IXL, Expedia, Goldman Sachs, PayPal, Tesla, PhonePe, Airtel, Snowflake, Criteo
 */

function search(nums: number[], target: number): number {
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    if (nums[i] > target) {
      continue;
    } else if (nums[i] < target) {
      continue;
    } else {
      return i;
    }
  }

  return -1;
}
