/**
 * 9) Palindrome Number
 * Difficulty:  Easy
 * Topics: Math
 * Companies: Apple, Amazon, Adobe, Google, Microsoft, Bloomberg, Uber, Yandex, Accenture, Facebook, tcs, MathWorks, Cognizant, Yahoo, SAP, Salesforce, Deloitte
 */

function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  const num = x.toString();
  const len = num.length;
  let i = 0;
  let j = len - 1;
  let invalid = false;

  while (i < len && j > i && invalid === false) {
    if (num.charAt(i) === num.charAt(j)) {
      i += 1;
      j -= 1;
    } else {
      invalid = true;
    }
  }

  return !invalid;
}
