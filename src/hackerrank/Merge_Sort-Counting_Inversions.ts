/**
 * Merge Sort: Counting Inversions
 * Difficulty: Hard
 * Max Score: 45
 * Score: 45
 */

function countInversions(arr: number[]): number {
  let swaps = 0;
  let merged = mergeSort(arr);

  function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }

    const mid = Math.ceil(arr.length / 2);
    const L = mergeSort(arr.splice(0, mid));
    const R = mergeSort(arr.splice(-mid));
    const merged = [];

    while (L.length && R.length) {
      if (L[0] > R[0]) {
        swaps += L.length;
        merged.push(R.shift() as number);
      } else {
        merged.push(L.shift() as number);
      }
    }

    return [...merged, ...L, ...R];
  }

  return swaps;
}
