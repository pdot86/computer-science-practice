/**
 * 12) Integer to Roman
 * Difficulty:  Medium
 * Topics: Hash Table, Math, String
 * Companies: IBM9, Amazon6, Microsoft4, Adobe2, Salesforce2, Google3, Apple3, ZScaler2, Bloomberg7, Facebook5, Citadel4, LinkedIn3, Oracle3, Capital One3, VMware2, Yandex2, Atlassian2, TikTok2, Morgan Stanley2, Walmart Labs2, Etsy2, Smartsheet2, Twitter
 */

const dict = new Map([
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
]);

function intToRoman(num: number): string {
  let result = '';

  while (num) {
    for (let [int, roman] of dict.entries()) {
      if (num >= int) {
        num -= int;
        result += roman;
        break;
      } else {
        continue;
      }
    }
  }

  return result;
}
