/**
 * 27) Remove Element
 * Difficulty:  Easy
 * Topics: Array, Two Pointers
 * Companies: Amazon, Adobe, Apple, Facebook, Google, Yahoo, Bloomberg, Yandex, Uber, Microsoft
 */

function removeElement(nums: number[], val: number): number {
  const idx = nums.findIndex((v) => v === val);

  if (idx > -1) {
    nums.splice(idx, 1);
    return removeElement(nums, val);
  }

  return nums.length;
}
