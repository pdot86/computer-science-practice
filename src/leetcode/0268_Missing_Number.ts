/**
 * 268) Missing Number
 * Difficulty:  Easy
 * Topics: Array, Hash Table, Math, Binary Search, Bit Manipulation, Sorting
 * Companies: Amazon, Adobe, Nvidia, warnermedia, Bloomberg, Microsoft, Facebook, Google, Apple, Yahoo, Uber, Oracle, VMware, Intel, Snapchat
 */

function missingNumber(nums: number[]): number {
  let start = Math.min(...nums);
  let end = start === 0 ? nums.length : start + nums.length - 1;
  const map = new Map(nums.map((v) => [v, 1]));
  let missing: number;

  for (let i = start + 1; i <= end; i++) {
    if (!map.has(i)) {
      return i;
    }
  }

  return 0;
}
