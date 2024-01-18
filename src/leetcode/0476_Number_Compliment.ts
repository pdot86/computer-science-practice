/**
 * 476) Number Complement
 * Difficulty:  Easy
 * Topics: Bit Manipulation
 * Companies: Google, Apple, Amazon, Cloudera
 */

function findComplement(num: number): number {
  return parseInt(
    num
      .toString(2)
      .split('')
      .map((d) => (d === '1' ? '0' : '1'))
      .join(''),
    2
  );
}
