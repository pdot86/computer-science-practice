/**
 * 283) Move Zeroes
 * Difficulty:  Easy
 * Topics: Array, Two Pointers
 * Companies: Facebook, Apple, Amazon, Yandex, Zoho, Google, Oracle, eBay, Tesla, TikTok, Cognizant, Ozon, Uber, Adobe, Yahoo, Bloomberg, Microsoft, ServiceNow, Expedia, Splunk, JPMorgan, VMware, Salesforce, Samsung, Wix
 */

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index++] = nums[i];
    }
  }

  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }
}
