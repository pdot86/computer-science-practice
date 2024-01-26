/**
 * Lonely Integer
 * Difficulty: Easy
 * Max Score: 20
 * Score: 20
 */

function lonelyinteger(a: number[]): number {
  const map = new Map();

  for (let i = 0; i < a.length; i++) {
    if (map.has(a[i])) {
      map.set(a[i], map.get(a[i]) + 1);
    } else {
      map.set(a[i], 1);
    }
  }

  for (let [key, value] of map.entries()) {
    if (value === 1) {
      return key;
    }
  }

  throw new Error('No lonely integer found...');
}
