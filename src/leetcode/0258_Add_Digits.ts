/**
 * 258) Add Digits
 * Difficulty:  Easy
 * Topics: Math, Simulation, Number Theory
 * Companies: Amazon, Google, American Express, Bloomberg, Apple, Adobe, Microsoft
 */

function addDigits(num: number): number {
  let numAsArr = num.toString().split('');

  while (numAsArr.length > 1) {
    numAsArr = numAsArr.concat((Number(numAsArr.pop()) + Number(numAsArr.pop())).toString().split(''));
  }

  return Number(numAsArr[0]);
}
