/**
 * 387) First Unique Character in a String
 * Difficulty:  Easy
 * Topics: Hash Table, String, Queue, Counting
 * Companies: Goldman Sachs, Bloomberg, Amazon, Apple, Microsoft, Oracle, Zillow, Adobe, TikTok, PayPal, Qualtrics, Uber, Walmart Labs, Facebook, Yahoo, Infosys, Nagarro, Morgan Stanley, Google
 */

function firstUniqChar(s: string): number {
  let looked = new Set();

  for (let i = 0; i < s.length; i++) {
    let curr = s.charAt(i);

    if (looked.has(curr)) {
      continue;
    } else {
      looked.add(curr);
    }

    let match = false;

    for (let j = s.length - 1; j > i; j--) {
      if (s.charAt(j) === curr) {
        match = true;
        break;
      }
    }

    if (!match) {
      return i;
    }
  }

  return -1;
}
