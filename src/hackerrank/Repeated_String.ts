/**
 * Repeated String
 * Difficulty: Easy
 * Max Score: 20
 * Score: 20
 */

function repeatedString(s: string, n: number): number {
  let result = 0;

  const repeats = Math.floor(n / s.length);
  const remainder = n % s.length;
  let currCount = 0;

  for (let i = 0; i < s.length; i++) {
    currCount += Number(s.charAt(i) === 'a');
  }

  result = repeats * currCount;

  const rStr = s.slice(0, remainder);

  for (let j = 0; j < rStr.length; j++) {
    if (rStr.charAt(j) === 'a') {
      result += 1;
    }
  }

  return result;
}
