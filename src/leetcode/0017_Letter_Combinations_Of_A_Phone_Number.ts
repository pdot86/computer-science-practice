/**
 * 17) Letter Combinations of a Phone Number
 * Difficulty:  Medium
 * Topics: Hash Table, String, Backtracking
 * Companies: Facebook, Amazon, Apple, Adobe, Bloomberg, Google, Microsoft, Epic Systems, Tesla, Pinterest, Uber, IBM, Zoho, DE Shaw, Oracle, eBay, VMware, Twilio, Flexport, LinkedIn, Intuit, Yahoo, Walmart Labs, Twitch, Swiggy, Chime, Dropbox
 */

const map = new Map([
  ['2', ['a', 'b', 'c']],
  ['3', ['d', 'e', 'f']],
  ['4', ['g', 'h', 'i']],
  ['5', ['j', 'k', 'l']],
  ['6', ['m', 'n', 'o']],
  ['7', ['p', 'q', 'r', 's']],
  ['8', ['t', 'u', 'v']],
  ['9', ['w', 'x', 'y', 'z']],
]);

function letterCombinations(digits: string): string[] {
  const combos = [];

  if (!digits.length) {
    return combos;
  }

  function findCombos(str: string, idx: number): void {
    if (str.length === digits.length) {
      combos.push(str);
      return;
    }

    let currSet = map.get(digits.charAt(idx));

    for (let i = 0; i < currSet.length; i++) {
      findCombos(str + currSet[i], idx + 1);
    }
  }

  findCombos('', 0);

  return combos;
}
