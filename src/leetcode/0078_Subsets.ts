/**
 * 78) Subsets
 * Difficulty:  Medium
 * Topics: Array, Backtracking, Bit Manipulation
 * Companies: Facebook, Amazon, Apple, Google, Yahoo, TikTok, Microsoft, Bloomberg, Adobe, Uber, Oracle, Twitter, Reddit, turing, Goldman Sachs, VMware, Walmart Labs, Visa, tcs, Coupang
 */

function subsets(nums: number[]): number[][] {
  const out = [];

  function backtrack(list: number[], idx: number) {
    out.push(list);

    for (let i = idx; i < nums.length; i++) {
      backtrack(list.concat(nums[i]), i + 1);
    }
  }

  backtrack([], 0);

  return out;
}
