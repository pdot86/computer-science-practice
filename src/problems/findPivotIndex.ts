/**
 * Given an array of integers, determine the left most pivot index or return -1.
 *
 * The pivot index is the index where the sum of all the numbers to left is
 * equal to the sum of all numbers to the right. When at the first index the
 * left sum is 0. When at the right index, the right sum is 0.
 *
 * @LeetCode 724
 * @LeetCode 1991
 */

/**
 * Determines the left most pivot index for an array. First we calculate the
 * right sum so that we can itterate through from left to right updating the
 * sums as we go along. With the right sum calculated from the 1 index we can
 * start itterating from the left at index 0. If the left of the current index
 * sum is equal to the right of the current index sum, then return early with
 * our pivot index; otherwise, add the current index's value to the left sum
 * and subtract the next index's value from the right sum and continue. If
 * our loop completes without exiting early, then there is no pivot index so
 * we will return -1.
 *
 * @param nums {number[]} An array of numbers
 * @returns {number}
 */
function findPivotIndex(nums: number[]): number {
  let left = 0;
  let right = 0;

  for (let i = 1; i < nums.length; i++) {
    right += nums[i];
  }

  for (let p = 0; p < nums.length; p++) {
    if (left === right) {
      return p;
    }

    left += nums[p];
    right -= nums[p + 1];
  }

  return -1;
}

export default findPivotIndex;
