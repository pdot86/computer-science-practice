/**
 * 415) Add Strings
 * Difficulty:  Easy
 * Topics: Math, String, Simulation
 * Companies: Facebook, Wayfair, Google, Microsoft, Apple, Oracle, Adobe, Amazon, Snapchat, Bloomberg, TikTok, Workday, Airbnb
 */

function addStrings(num1: string, num2: string): string {
  let out = '';

  let carry = 0;

  for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0 || carry > 0; i--, j--) {
    let iNum = i < 0 ? 0 : parseInt(num1[i]);
    let jNum = j < 0 ? 0 : parseInt(num2[j]);
    let intNum = iNum + jNum + carry;
    out = `${intNum % 10}${out}`;
    carry = Math.floor(intNum / 10);
  }

  return out;
}
