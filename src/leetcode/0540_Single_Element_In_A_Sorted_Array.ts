/**
 * 540) Single Element in a Sorted Array
 * Difficulty:  Medium
 * Topics: Array, Binary Search
 * Companies: Amazon, Facebook, Uber, Bloomberg, Adobe, Apple, Oracle, Nvidia, Google, Microsoft, Yahoo, Infosys, tcs, ShareChat
 */

function singleNonDuplicate(nums: number[]): number {
  // Quick exit case
  if (nums.length === 1) {
    return nums[0];
  }

  // Left pointer
  let L = 0;
  //Right pointer
  let R = nums.length - 1;
  // Middle pointer
  let M;

  while (L < R) {
    // Se the middle pointer half way
    M = L + (R - L) / 2;

    // Determine if we have an even number of elements on either side
    // because we have two of each number if we have an odd number then
    // we know that the single element is in that direction
    let isEven = (R - M) % 2 === 0;

    // When we have a match in one direction we have a non match in the opposite
    // so we know that based on whether or not the number of elements is even or not
    // determines if the single element is in that direction
    if (nums[M] === nums[M - 1]) {
      if (isEven) {
        R = M - 2;
      } else {
        L = M + 1;
      }
    } else if (nums[M] === nums[M + 1]) {
      if (isEven) {
        L = M + 2;
      } else {
        R = M - 1;
      }
    } else {
      return nums[M];
    }
  }

  return nums[L];
}
