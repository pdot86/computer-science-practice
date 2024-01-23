/**
 * Sorting - Bubble Sort
 * Difficulty: Easy
 * Max Score: 30
 * Score: 30
 */

function countSwaps(a: number[]): void {
  let swaps = 0;

  for (let i = 0, len = a.length; i < len; i++) {
    for (let j = i; j > 0; j--) {
      if (a[j] - a[j - 1] < 0) {
        [a[j - 1], a[j]] = [a[j], a[j - 1]];
        swaps += 1;
      }
    }
  }

  process.stdout.write(`Array is sorted in ${swaps} swaps.` + '\n' + `First Element: ${a[0]}` + '\n' + `Last Element: ${a[a.length - 1]}` + '\n');
}
