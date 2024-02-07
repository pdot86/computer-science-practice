/**
 * 198) House Robber
 * Difficulty:  Medium
 * Topics: Array, Dynamic Programming
 * Companies: Cisco, Amazon, Apple, Google, Adobe, Microsoft, Bloomberg, Goldman Sachs, ByteDance, Citadel, Databricks, Yahoo, TikTok, Uber, Facebook, Agoda, Sigmoid, Infosys, Walmart Labs, Miro, Arcesium, Sprinklr, Wells Fargo, LinkedIn, Airbnb
 */

function rob(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  const dp = [0, nums[0]];

  for (let i = 1; i < nums.length; i++) {
    dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i]);
  }

  return dp[nums.length];
}
