/**
 * Arrays - Sparse Arrays
 * Difficulty: Medium
 * Max Score: 25
 * Score: 25
 */

function matchingStrings(stringList: string[], queries: string[]): number[] {
  return queries.map((q) => stringList.filter((str) => str === q).length);
}
