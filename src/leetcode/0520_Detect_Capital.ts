/**
 * 520) Detect Capital
 * Difficulty:  Easy
 * Topics: String
 * Companies: Google
 */

const rgxCap = new RegExp('^[A-Z]*$', '');
const rgxLow = new RegExp('^[a-z]*$', '');
const rgxCapFirst = new RegExp('^[A-Z][a-z]*$', '');

function detectCapitalUse(word: string): boolean {
  return rgxCap.test(word) || rgxLow.test(word) || rgxCapFirst.test(word);
}
