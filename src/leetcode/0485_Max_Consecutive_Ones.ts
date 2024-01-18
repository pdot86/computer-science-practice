/**
 * 485) Max Consecutive Ones
 * Difficulty:  Easy
 * Topics: Array
 * Companies: Google, Adobe, Amazon, Apple, Yandex, Microsoft, Yahoo
 */

function findMaxConsecutiveOnes(nums: number[]): number {
  let max = 0;
  let collection = 0;

  for (let i = 0; i < nums.length; i++) {
    collection += nums[i];
    if (!nums[i]) {
      max = collection > max ? collection : max;
      collection = 0;
    }
  }

  max = collection > max ? collection : max;

  return max;
}
