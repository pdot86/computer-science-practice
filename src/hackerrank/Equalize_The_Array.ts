/**
 * Equalize the Array
 * Difficulty: Easy
 * Max Score: 20
 * Score: 20
 */

function equalizeArray(arr: number[]): number {
  let result = Infinity;

  [...new Set(arr)].forEach((val) => {
    let removals = arr.filter((v) => v !== val).length;
    result = removals < result ? removals : result;
  });

  return result;
}
