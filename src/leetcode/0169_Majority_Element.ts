/**
 * 169) Majority Element
 * Difficulty:  Easy
 * Topics: Array, Hash Table, Divide and Conquer, Sorting, Counting
 * Companies: Amazon, Apple, Bloomberg, Facebook, Adobe, Google, Microsoft, eBay, Uber, Media.net, Salesforce, Yandex, Yahoo, PayPal, Rubrik, Zenefits
 */

function majorityElement(nums: number[]): number {
  let count = 1;
  let el = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      el = nums[i];
      count = 1;
    } else {
      count += el === nums[i] ? 1 : -1;
    }
  }

  return el;
}
