/**
 * 451) Sort Characters By Frequency
 * Difficulty:  Medium
 * Topics: Hash Table, String, Sorting, Heap (Priority Queue), Bucket Sort, Counting
 * Companies: Apple, Facebook, Adobe, Microsoft, Bloomberg, Amazon, Walmart Labs, Google
 */

function frequencySort(s: string): string {
  const map = new Map();
  const arr = [];
  let output = '';

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  for (let key of map.keys()) {
    arr.push(key);
  }

  arr.sort((a, b) => (map.get(a) > map.get(b) ? -1 : 1));

  for (let j = 0; j < arr.length; j++) {
    const count = map.get(arr[j]);

    for (let k = 0; k < count; k++) {
      output += arr[j];
    }
  }

  return output;
}
