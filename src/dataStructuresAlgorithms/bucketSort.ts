import insertionSort from './insertionSort';

/**
 * A sorting algorithm that virtually splits the array into buckets distributing
 * the elements. Then each of the buckets are sorted using another sorting
 * algorithm, insertionSort, and finally the sorted buckets are then gathered
 * in order leaving you with a fully sorted array.
 *
 * - Start off by returning the array immediately if it has a length of 0 or 1
 * - Determine the size of our buckets from the argument or take a random size
 *   (the random size chosen here is the length of the array divided by 3 + 1)
 * - Determine the minimum and maximum values in the array
 * - Create an array to store all of our buckets
 * - Initialize each bucket as an empty array
 * - Loop over the input array and place each number in their respective buckets
 * - Reset the input array
 * - Individually sort each bucket then push the sorted elements for the bucket
 *   to the array
 * - Return the array
 *
 * TIME COMPLEXITY: O(n^2)
 * - Because we are using a nested loop, we have quadratic time complexity
 *
 * SPACE COMPLEXITY: O(1)
 * - Items in the array are swapped in place, making this efficient in space complexity
 *
 * IN/OUT-OF-PLACE: in-place
 *
 * STABILITY: stable
 *
 * COMPARISON SORT: comparison
 *
 * @param arr {number[]} An unsorted array of numbers
 * @param left {undefined|number} The sub array to the left left of the current index
 * @param right {undefined|number} The sub array to the right of the current index
 * @returns {number[]} The array of numbers sorted in increasing order
 */
function bucketSort(arr: number[], size?: number): number[] {
  if (arr.length < 2) {
    return arr;
  }

  // Determine max size of each bucket
  size = size || Math.floor(arr.length / 3) + 1;

  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  // Determine min and max elements
  for (let i = 0; i < arr.length; i++) {
    min = arr[i] < min ? arr[i] : min;
    max = arr[i] > max ? arr[i] : max;
  }

  // Create an array to hold each bucket and insert an empty array for each bucket
  const buckets = new Array(Math.floor((max - min) / size) + 1);

  // Initialize an empty array for each bucket
  for (let x = 0; x < buckets.length; x++) {
    buckets[x] = [];
  }

  // Place elements in their respective buckets
  for (let j = 0; j < arr.length; j++) {
    buckets[Math.floor((arr[j] - min) / size)].push(arr[j]);
  }

  // Reset the given array
  arr.length = 0;

  // Sort each bucket and push the sorted items to arr
  for (let k = 0; k < buckets.length; k++) {
    buckets[k] = insertionSort(buckets[k]);
    arr.push(...buckets[k]);
  }

  return arr;
}

export default bucketSort;
