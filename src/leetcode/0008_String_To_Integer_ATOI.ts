/**
 * 8) String to Integer (atoi)
 * Difficulty:  Medium
 * Topics: String
 * Companies: Facebook, Apple, Amazon, Adobe, Samsung, Microsoft, Google, Goldman Sachs, Bloomberg, Yahoo, Uber, Qualcomm, Redfin
 */

function myAtoi(s: string): number {
  let final = 0;
  const min = Math.pow(-2, 31);
  const max = Math.pow(2, 31) - 1;

  const rgxAtoi = /^[\+\-]?[0-9\.]+/g;
  const str = s.trim().match(rgxAtoi);

  if (str) {
    final = Number(str[0]);
  }

  if (final > max) {
    return max;
  }

  if (final < min) {
    return min;
  }

  return final;
}
