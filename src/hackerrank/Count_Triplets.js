/**
 * Count Triplets
 * Difficulty: Medium
 * Max Score: 35
 * Score: 35
 */

function countTriplets(arr, r) {
  const len = arr.length;
  let count = 0;
  const potential = new Map();
  const counter = new Map();

  for (let i = 0; i < len; i++) {
    const key = arr[i] / r;

    if (counter.has(key) && arr[i] % r === 0) {
      count += counter.get(key);
    }

    if (potential.has(key) && arr[i] % r === 0) {
      const c = potential.get(key);
      let next = counter.get(arr[i]) || 0;
      next += c;
      counter.set(arr[i], next);
    }

    let curr = potential.get(arr[i]) || 0;
    curr += 1;
    potential.set(arr[i], curr);
  }

  return count;
}
