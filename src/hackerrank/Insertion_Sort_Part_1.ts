/**
 * Insertion Sort - Part 1
 * Difficulty: Easy
 * Max Score: 30
 * Score: 30
 */

function insertionSort1(n: number, arr: number[]): void {
  const left = 0;
  const right = n - 1;

  for (let i = left + 1; i <= right; i++) {
    const curr = arr[i];
    let j = i - 1;
    while (j >= left && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
      process.stdout.write(arr.join(' ') + '\n');
    }
    arr[j + 1] = curr;
  }

  process.stdout.write(arr.join(' ') + '\n');
}
