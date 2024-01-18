/**
 * 278) First Bad Version
 * Difficulty:  Easy
 * Topics: Binary Search, Interactive
 * Companies: Uber3, Adobe3, Apple3, Facebook2, Google2, Amazon2, Yahoo2, Microsoft9, Expedia2, Salesforce2, Cisco2, TikTok2
 */

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  let min = 1;
  let max;

  return function (n: number): number {
    max = n;

    console.log(`min: ${min}   max: ${max}`);

    while (min < max) {
      let mid = min + (max - min) / 2;

      if (isBadVersion(mid)) {
        max = mid;
      } else {
        min = mid + 1;
      }
    }

    return Math.floor(min);
  };
};
