/**
 * 455) Assign Cookies
 * Difficulty:  Easy
 * Topics: Array, Two Pointers, Greedy, Sorting
 * Companies: Apple, Google, Adobe, Amazon, Expedia, Microsoft
 */

function findContentChildren(g: number[], s: number[]): number {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  let fed = 0;

  while (s.length && g.length) {
    let c = s.shift();

    if (c < g[0]) {
      continue;
    }

    g.shift();
    fed += 1;
  }

  return fed;
}
