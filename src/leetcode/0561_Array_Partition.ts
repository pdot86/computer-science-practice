/**
 * 561) Array Partition
 * Difficulty:  Easy
 * Topics: Array, Greedy, Sorting, Counting Sort
 * Companies: Yahoo, Amazon, Adobe
 */

function arrayPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);

  let sum = 0;

  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }

  return sum;
}
