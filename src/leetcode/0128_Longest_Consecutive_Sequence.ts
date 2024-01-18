/**
 * 128) Longest Consecutive Sequence
 * Difficulty:  Medium
 * Topics: Array, Hash Table, Union Find
 * Companies: Amazon, Adobe, Google, Bloomberg, Microsoft, Apple, Uber, Yahoo, Facebook, turing, Spotify, Visa, Qualtrics, Morgan Stanley, Netflix, smartnews, Grammarly
 */

function longestConsecutive(nums: number[]): number {
  const len = nums.length;
  const half = Math.floor(len / 2);
  const set = new Set(nums);
  let max = 0;

  for (let num of set) {
    let count = 1;

    if (set.has(num - 1)) {
      continue;
    }

    while (set.has(num + 1)) {
      num += 1;
      count += 1;
    }

    max = count > max ? count : max;

    if (max >= half) {
      break;
    }
  }

  return max;
}
