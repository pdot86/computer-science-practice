/**
 * Append and Delete
 * Difficulty: Easy
 * Max Score: 20
 * Score: 20
 */

function appendAndDelete(s: string, t: string, k: number): string {
  if (s === t || k >= s.length + t.length) {
    return 'Yes';
  }

  let i = 0;

  while (t.charAt(i) === s.charAt(i) && i < s.length && i < t.length) {
    i += 1;
  }

  const diff = s.length - i + (t.length - i);

  if (k < diff) {
    return 'No';
  } else if (diff === k || (k - diff) % 2 === 0) {
    return 'Yes';
  } else {
    return 'No';
  }
}
