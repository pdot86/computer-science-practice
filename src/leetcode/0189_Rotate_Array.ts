/**
 * 189) Rotate Array
 * Difficulty:  Medium
 * Topics: Array, Math, Two Pointers
 * Companies: Amazon, Adobe, Apple, Google, Uber, Accenture, Walmart Labs, Goldman Sachs, Zoho, TikTok, Microsoft, Yahoo, Facebook, SAP, tcs, LinkedIn, Bloomberg, Cohesity, Salesforce, Infosys
 */

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  while (k--) {
    nums.unshift(nums.pop());
  }
}
