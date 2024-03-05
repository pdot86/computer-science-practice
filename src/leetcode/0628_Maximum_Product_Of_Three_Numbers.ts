/**
 * 628) Maximum Product of Three Numbers
 * Difficulty:  Easy
 * Topics: Array, Math, Sorting
 * Companies: Bloomberg, Microsoft, Amazon, Uber, Adobe, Salesforce, Cloudera, Intuit
 */

function maximumProduct(nums: number[]): number {
  if (nums.length === 3) {
    return nums.reduce((acc, curr) => {
      acc = acc * curr;

      return acc;
    }, 1);
  }

  let max1 = Number.MIN_SAFE_INTEGER;
  let max2 = max1;
  let max3 = max2;
  let min1 = Number.MAX_SAFE_INTEGER;
  let min2 = min1;

  for (let num of nums) {
    if (num <= min1) {
      min2 = min1;
      min1 = num;
    } else if (num <= min2) {
      min2 = num;
    }

    if (num >= max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num >= max2) {
      max3 = max2;
      max2 = num;
    } else if (num >= max3) {
      max3 = num;
    }
  }

  let p1 = min1 * min2 * max1;
  let p2 = max1 * max2 * max3;

  return p1 > p2 ? p1 : p2;
}
