/**
 * 349) Intersection of Two Arrays
 * Difficulty:  Easy
 * Topics: Array, Hash Table, Two Pointers, Binary Search, Sorting
 * Companies: Apple, LinkedIn, Facebook, Yandex, Amazon, Adobe, Google, Microsoft, Bloomberg, JPMorgan, Two Sigma, Wix
 */

function intersection(nums1: number[], nums2: number[]): number[] {
  let intersection: number[] = [];

  nums1 = [...new Set(nums1)];
  nums2 = [...new Set(nums2)];

  nums1.forEach((v) => nums2.indexOf(v) > -1 && intersection.push(v));

  return intersection;
}
