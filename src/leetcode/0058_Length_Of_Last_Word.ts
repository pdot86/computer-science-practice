/**
 * 58) Length of Last Word
 * Difficulty:  Easy
 * Topics: String
 * Companies: Adobe, Amazon, Apple, Uber, Google, Yahoo, Bloomberg, Facebook
 */

function lengthOfLastWord(s: string): number {
  let i = s.length;
  let count = 0;

  while (i--) {
    if (s[i] === ' ') {
      if (count === 0) {
        continue;
      } else {
        break;
      }
    } else {
      count += 1;
    }
  }

  return count;
}
