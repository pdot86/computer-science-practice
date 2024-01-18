/**
 * 13) Roman to Integer
 * Difficulty:  Easy
 * Topics: Hash Table, Math, String
 * Companies: Amazon, Apple, Google, Adobe, IBM, Microsoft, Facebook, Bloomberg, Uber, Accenture, Zoho, RBC, Yahoo, Oracle, tcs, TikTok, Yandex, Intel, Expedia, Qualtrics, JPMorgan, Flipkart, Morgan Stanley
 */

const dict = new Map([
  ['M', 1000],
  ['D', 500],
  ['C', 100],
  ['L', 50],
  ['X', 10],
  ['V', 5],
  ['I', 1],
]);

function romanToInt(s: string): number {
  let tally = 0;
  let i = s.length - 1;

  while (i > -1) {
    if (s[i] === 'M') {
      if (s[i - 1] === 'C') {
        i -= 2;
        tally += dict.get('M') - dict.get('C');
      } else {
        i -= 1;
        tally += dict.get('M');
      }
    } else if (s[i] === 'D') {
      if (s[i - 1] === 'C') {
        i -= 2;
        tally += dict.get('D') - dict.get('C');
      } else {
        i -= 1;
        tally += dict.get('D');
      }
    } else if (s[i] === 'C') {
      if (s[i - 1] === 'X') {
        i -= 2;
        tally += dict.get('C') - dict.get('X');
      } else {
        i -= 1;
        tally += dict.get('C');
      }
    } else if (s[i] === 'L') {
      if (s[i - 1] === 'X') {
        i -= 2;
        tally += dict.get('L') - dict.get('X');
      } else {
        i -= 1;
        tally += dict.get('L');
      }
    } else if (s[i] === 'X') {
      if (s[i - 1] === 'I') {
        i -= 2;
        tally += dict.get('X') - dict.get('I');
      } else {
        i -= 1;
        tally += dict.get('X');
      }
    } else if (s[i] === 'V') {
      if (s[i - 1] === 'I') {
        i -= 2;
        tally += dict.get('V') - dict.get('I');
      } else {
        i -= 1;
        tally += dict.get('V');
      }
    } else if (s[i] === 'I') {
      i -= 1;
      tally += dict.get('I');
    }
  }

  return tally;
}
