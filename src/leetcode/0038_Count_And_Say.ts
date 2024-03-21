/**
 * 38) Count and Say
 * Difficulty:  Medium
 * Topics: String
 * Companies: Pinterest, Facebook, Amazon, Yahoo, Akuna Capital, Apple, Adobe, Wells Fargo, Google, Bloomberg, Uber, Microsoft, Epic Systems, Cisco
 */

function countAndSay(n: number): string {
  let result = '1';

  if (n === 1) {
    return result;
  }

  while (--n) {
    let nextDigit = result.charAt(0);
    let counter = 1;
    let currEntry = '';

    for (let i = 1; i < result.length; i++) {
      if (nextDigit !== result.charAt(i)) {
        currEntry += `${counter}${nextDigit}`;
        nextDigit = result.charAt(i);
        counter = 1;
      } else {
        counter += 1;
      }
    }

    currEntry += `${counter}${nextDigit}`;

    result = currEntry;
  }

  return result;
}
