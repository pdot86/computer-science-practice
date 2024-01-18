/**
 * 228) Summary Ranges
 * Difficulty:  Easy
 * Topics: Array
 * Companies: Yandex, Uber, Bloomberg, Google, Amazon, Qualtrics, Shopify
 */

function summaryRanges(nums: number[]): string[] {
  const ranges: string[] = [];
  let start = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] === 1) {
      continue;
    }

    ranges.push(start === nums[i] ? `${start}` : `${start}->${nums[i]}`);

    start = nums[i + 1];
  }

  return ranges;
}
