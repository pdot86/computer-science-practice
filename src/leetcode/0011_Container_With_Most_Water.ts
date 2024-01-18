/**
 * 11) Container With Most Water
 * Difficulty:  Medium
 * Topics: Array, Two Pointers, Greedy
 * Companies: Amazon, Apple, Microsoft, Adobe, Yahoo, Google, Oracle, Flipkart, Uber, Tesla, Citadel, TikTok, Bloomberg, Facebook, Goldman Sachs, eBay, Bosch, ByteDance, Walmart Labs, Qualtrics, Zoho, MakeMyTrip, Samsung, Palantir Technologies, VMware, Intel, Cisco, DE Shaw, JPMorgan, Wix
 */

function maxArea(height: number[]): number {
  let aMax = Number.MIN_SAFE_INTEGER;
  let i = 0;
  let j = height.length - 1;

  while (i < j && j > i) {
    if (height[i] > height[j]) {
      aMax = Math.max(aMax, height[j] * (j - i));
      j -= 1;
    } else {
      aMax = Math.max(aMax, height[i] * (j - i));
      i += 1;
    }
  }

  return aMax;
}
