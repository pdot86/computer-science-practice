/**
 * Given an array of integers and a target sum, determine which two values equal
 * the target sum and return their two indicies ([index1, index2]). You are not
 * allowed to use the same index twice ([index1, index1]). There is always going
 * to be 2 or more number in the array and exactly one solution for the target.
 *
 * @LeetCode 1
 */
/**
 * Determines which two elements in the array add up to the target.
 * @param nums {number[]} An array of integers
 * @param target {number} The target sum
 * @returns {number[]}
 */
function twoSum(nums: number[], target: number): number[] {
  let map = new Map();
  let result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let remainder = target - nums[i];

    if (map.has(remainder)) {
      result = [i, map.get(remainder)];

      return result;
    } else {
      map.set(nums[i], i);
    }
  }

  return result;
}
