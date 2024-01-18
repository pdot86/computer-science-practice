/**
 * 389) Find the Difference
 * Difficulty:  Easy
 * Topics: Hash Table, String, Bit Manipulation, Sorting
 * Companies: Google, Amazon, Apple, Bloomberg, Microsoft, IBM, turing
 */

function findTheDifference(s: string, t: string): string {
  if (t.length === 1) {
    return t;
  }

  for (let i = 0; i < s.length; i++) {
    t = t.replace(s[i], '');
  }

  return t;
}
