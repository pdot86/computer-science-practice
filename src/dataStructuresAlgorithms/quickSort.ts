/**
 * A recursive sorting algorithm that partitions the array at a pivot and sorts
 * each partition by the pivot until sorted. Choosing a pivot can be done 1 of 4
 * different ways: first, last, middle, or random. You want to choose the pivot
 * based on what you know abou the array. This example will always choose the
 * middle item as the pivot.
 *
 * TIME COMPLEXITY: O(n^2)
 * - We may run through our array n times
 *
 * SPACE COMPLEXITY: O(log(n))
 * - We split our array at each step meaning we will end up up with log(n) branches
 *
 * IN/OUT-OF-PLACE: in-place
 *
 * STABILITY: unstable
 *
 * COMPARISON SORT: comparison
 *
 * @param arr {number[]} An unsorted array of numbers
 * @returns {number[]} The array of numbers sorted in increasing order
 */
function quickSort(arr: number[]): number[] {
  /**
   * Creates a partition index and sorts the partition before and after in place.
   * @param arr {number[]} An unsorted array of numbers
   * @param left {number} The lowest indext for the partition being sorted
   * @param right {number} The highest index for the partition being sorted
   * @returns {void}
   */
  function doSort(arr: number[], left: number, right: number): void {
    if (left >= right) {
      return;
    }

    const partitionIndex = partition(arr, left, right);

    doSort(arr, left, partitionIndex - 1);
    doSort(arr, partitionIndex + 1, right);
  }

  /**
   * Partitions the array and swaps around values to create an ascending array within the partition.
   *
   * - Determine the pivot
   * - Set the current partition index (the start of the partition to the left)
   * - Loop through the partition (left to pivot)
   *    - When the current position's value is smaller than the pivot value
   *      move it to the left of the pivot
   * - After looping through the partition, move the pivot to it's correct index
   * - Return the index after the current partition
   * @param arr {number[]} An unsorted array
   * @param left {number} The lowest index of the array
   * @param right {number} The highest index of the array
   * @returns {number} The index where the array was partitioned
   */
  function partition(arr: number[], left: number, right: number): number {
    const pivot = arr[right];
    let currPartitionIndex = left - 1;

    for (let i = left; i <= right - 1; i++) {
      if (arr[i] < pivot) {
        currPartitionIndex += 1;
        [arr[i], arr[currPartitionIndex]] = [arr[currPartitionIndex], arr[i]];
      }
    }

    [arr[currPartitionIndex + 1], arr[right]] = [
      arr[right],
      arr[currPartitionIndex + 1],
    ];

    return currPartitionIndex + 1;
  }

  doSort(arr, 0, arr.length - 1);

  return arr;
}

export default quickSort;
