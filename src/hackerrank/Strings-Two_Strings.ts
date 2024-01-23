/**
 * Strings - Two Strings
 * Difficulty: Easy
 * Max Score: 25
 * Score: 25
 */

function twoStrings(s1: string, s2: string): string {
  const arr1 = [...new Set(s1.split(''))];
  const arr2 = [...new Set(s2.split(''))];

  return arr1.every((n) => arr2.indexOf(n) === -1) ? 'NO' : 'YES';
}
