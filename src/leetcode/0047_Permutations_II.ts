/**
 * 47) Permutations II
 * Difficulty:  Medium
 * Topics: Array, Backtracking
 * Companies: TikTok, Facebook, Amazon, Bloomberg, LinkedIn, Google, Microsoft
 */

function permuteUnique(nums: number[]): number[][] {
  if (nums.length === 1) {
    return [nums];
  }
  if (nums.length === 2) {
    if (nums[0] === nums[1]) {
      return [nums];
    } else {
      return [nums, [nums[1], nums[0]]];
    }
  }

  return nums.reduce((acc, curr, idx) => {
    let start = nums.slice(0, idx);
    let end = nums.slice(idx + 1, nums.length);
    let p = permuteUnique([...start, ...end]).map((v) => [curr, ...v]);

    return acc.concat(p).filter(
      (v, i, a) =>
        !a
          .slice(i + 1, a.length)
          .map((val) => val.join(''))
          .includes(v.join(''))
    );
  }, []);
}
