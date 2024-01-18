/**
 * 45) Jump Game II
 * Difficulty:  Medium
 * Topics: Array, Dynamic Programming, Greedy
 * Companies: Amazon, Uber, Apple, Adobe, Google, Oracle, DoorDash, Bloomberg, Facebook, Goldman Sachs, Microsoft, Miro, Salesforce, Tesla, TikTok, Visa, PhonePe
 */

function jump(nums: number[]): number {
  let len = nums.length;

  if (len === 1) {
    return 0;
  }

  if (nums[0] >= len - 1) {
    return 1;
  }

  let jumps = 1;
  let currMax = nums[0];
  let currPos = nums[0];

  for (let i = 1; i < len; i++) {
    currMax = i + nums[i] > currMax ? i + nums[i] : currMax;

    if (currPos === i) {
      jumps += 1;
      currPos = currMax;
    }

    if (currPos >= len - 1) {
      break;
    } else {
      continue;
    }
  }

  return jumps;
}
