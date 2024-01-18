/**
 * 39) Combination Sum
 * Difficulty:  Medium
 * Topics: Array, Backtracking
 * Companies: Facebook, TikTok, Amazon, Microsoft, Airbnb, Google, Yahoo, Apple, Salesforce, Adobe, Bloomberg, LinkedIn, ByteDance, eBay, Reddit, Oracle, Goldman Sachs, Uber, Walmart Labs, Zillow, JPMorgan, Snapchat
 */

function combinationSum(candidates: number[], target: number): number[][] {
  const combos = [];

  comboRecursion(candidates, target, combos, [], 0);

  return combos;
}

function comboRecursion(candidates: number[], target: number, combos: number[][], curr: number[], index: number) {
  if (target === 0) {
    combos.push([...curr]);
  }

  for (let i = index; i < candidates.length; i++) {
    if (candidates[i] <= target) {
      curr.push(candidates[i]);
      comboRecursion(candidates, target - candidates[i], combos, curr, i);
      curr.pop();
    }
  }
}
