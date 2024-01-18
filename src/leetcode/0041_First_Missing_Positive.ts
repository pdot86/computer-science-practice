/**
 * 41) First Missing Positive
 * Difficulty:  Hard
 * Topics: Array, Hash Table
 * Companies: Amazon, Netflix, Microsoft, Google, Apple, Morgan Stanley, Facebook, MakeMyTrip, Roblox, Adobe, Nutanix, Databricks, Bloomberg, Oracle, IBM, Grab, Walmart Labs, Salesforce, Uber, Twitch, ByteDance, DE Shaw, TikTok, Shopee, Snapdeal, Hudson River Trading, tekion
 */

function firstMissingPositive(nums: number[]): number {
  let min = Number.MAX_SAFE_INTEGER;
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      min = Math.min(nums[i], min);
      set.add(nums[i]);
    }
  }

  let found;
  let i = 1;

  while (!found) {
    if (!set.has(i)) {
      found = i;
    } else {
      i += 1;
    }
  }

  return found;
}
