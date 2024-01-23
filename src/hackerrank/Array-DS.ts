/**
 * Array - DS
 * Difficulty: Easy
 * Max Score: 10
 * Score: 10
 */

function reverseArray(a: number[]): number[] {
  let revArr = [];
  let i = a.length;
  while (--i >= 0) {
    revArr.push(a[i]);
  }

  return revArr;
}
