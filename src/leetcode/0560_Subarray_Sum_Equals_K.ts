/**
 * 560) Subarray Sum Equals K
 * Difficulty:  Medium
 * Topics: Array, Hash Table, Prefix Sum
 * Companies: Facebook, Yandex, Amazon, TikTok, Apple, Google, Bloomberg, Adobe, Microsoft, Oracle, Yahoo, JPMorgan, MathWorks, Expedia, Visa, ByteDance, Quora, Citadel, ServiceNow, Bolt, Goldman Sachs, Snapchat, Uber, Nutanix, Infosys, PayPal, DRW, Workday
 */

function subarraySum(nums: number[], k: number): number {
  const map = new Map([[0, 1]]);
  let results = 0;
  let sum = 0;

  nums.forEach((n) => {
    sum += n;

    if (map.has(sum - k)) {
      results += map.get(sum - k) as number;
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  });

  return results;
}
