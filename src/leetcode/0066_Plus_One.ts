/**
 * 66) Plus One
 * Difficulty:  Easy
 * Topics: Array, Math
 * Companies: Amazon, Adobe, Google, Microsoft, Bloomberg, Yahoo, Agoda, Apple, Facebook, Zoho, eBay
 */

function plusOne(digits: number[]): number[] {
  const len = digits.length;
  let i = len - 1;

  if (digits[i] < 9) {
    digits[i] += 1;

    return digits;
  }

  let carry = 1;

  for (i; i > -1 && carry; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i] += 1;
      carry = 0;
      break;
    }
  }

  carry && digits.unshift(1);

  return digits;
}
