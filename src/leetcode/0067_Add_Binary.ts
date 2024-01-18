/**
 * 67) Add Binary
 * Difficulty:  Easy
 * Topics: Math, String, Bit Manipulation, Simulation
 * Companies: Facebook, Amazon, Apple, Adobe, Bloomberg, Microsoft, Google, HRT, Hudson River Trading, General Motors, Uber, Cohesity, Snapchat
 */

function addBinary(a: string, b: string): string {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
}
