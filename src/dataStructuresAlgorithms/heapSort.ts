/**
 * A sorting algorithm similar to Selection Sort in that it creates a sorted and
 * unsorted partition and narrows down the unsorted partition by removing the
 * largest element from the unsorted partition and inserting it into the sorted
 * partition in-place.
 *
 * - Reorder the array into a MaxHeap
 * - Sort the MaxHeap
 *    - Swap the position of the largest element and the first element
 *    - Continue to swap over the itterations until sorted
 *
 * TIME COMPLEXITY: Ο(n log(n))
 *
 * SPACE COMPLEXITY: Ο(1)
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
function heapSort(arr: number[]): number[] {
  let len = arr.length;

  // Reorder the array into a MaxHeap
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapify(i);
  }

  // Narrow down the range, while swapping in place to sort the MaxHeap
  for (let i = len - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    len--;
    heapify(0);
  }

  /**
   * Turns the array into a MaxHeap
   * @param i {number} The index to reorganize the heap around
   * @returns {void}
   */
  function heapify(i: number) {
    var leftChildNodeIndex = 2 * i + 1;
    var rightChildNodeIndex = 2 * i + 2;
    var maxIndex = i;

    if (leftChildNodeIndex < len && arr[leftChildNodeIndex] > arr[maxIndex]) {
      maxIndex = leftChildNodeIndex;
    }

    if (rightChildNodeIndex < len && arr[rightChildNodeIndex] > arr[maxIndex]) {
      maxIndex = rightChildNodeIndex;
    }

    if (maxIndex != i) {
      [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
      heapify(maxIndex);
    }
  }

  return arr;
}
