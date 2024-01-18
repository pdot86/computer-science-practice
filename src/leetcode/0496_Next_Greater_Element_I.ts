/**
 * 496) Next Greater Element I
 * Difficulty:  Easy
 * Topics: Array, Hash Table, Stack, Monotonic Stack
 * Companies: Amazon, Adobe, Bloomberg, Google, Microsoft, Apple, Yahoo, Uber, Goldman Sachs
 */

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const map = new Map();

  for (let i = 0; i < nums2.length; i++) {
    for (let j = i + 1; j < nums2.length; j++) {
      if (nums2[j] > nums2[i]) {
        map.set(nums2[i], nums2[j]);
        break;
      }
    }

    if (!map.has(nums2[i])) {
      map.set(nums2[i], -1);
    }
  }

  return nums1.map((n) => map.get(n));
}
