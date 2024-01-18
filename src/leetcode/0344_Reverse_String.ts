/**
 * 344) Reverse String
 * Difficulty:  Easy
 * Topics: Two Pointers, String
 * Companies: Apple, Amazon, Adobe, Google, Deutsche Bank, Microsoft, Facebook, tcs, Goldman Sachs, Yahoo, Arista Networks, Intel
 */

/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  for (let i = 0; i < s.length / 2; i++) {
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
  }
  // --------- OR ---------- (with native method)
  // s.reverse();
}
