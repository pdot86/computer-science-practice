/**
 * Cut The Sticks
 * Difficulty: Easy
 * Max Score: 25
 * Score: 25
 */

function cutTheSticks(arr: number[]): number[] {
  const result: number[] = [];
  let shortest: number = Number.MAX_SAFE_INTEGER;

  arr.sort((a, b) => a - b);

  while (arr.length) {
    result.push(arr.length);

    shortest = arr.shift() as number;

    arr = arr.reduce((acc, curr) => {
      if (curr > shortest) {
        acc.push(curr - shortest);
      }
      return acc;
    }, [] as number[]);
  }

  return result;
}
