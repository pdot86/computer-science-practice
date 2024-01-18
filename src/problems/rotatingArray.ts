/**
 * A given array should be rotated n times. The process of rotatin an array is
 * to take the first element and move it to the end of the array. Assume you are
 * always given a rotation number that is >= 0.
 *
 * EXAMPLE:
 *   Given the array: [1, 2, 3, 4, 5]
 *   Rotations: 3
 *      First Rotation:  [2, 3, 4, 5, 1]
 *      Second Rotation: [3, 4, 5, 1, 2]
 *      Third Rotation:  [4, 5, 1, 2, 3]
 *   Result: [4, 5, 1, 2, 3]
 */

/**
 * Rotates the given array n times- moving the first element to the last
 * position n times. It also provides a shortcut where if the number of
 * rotations is equal to or has a modulus of 0 to the length of the given array
 * it skips the rotation as the final value will be exactly the same. Another
 * shortcut included is when the length of the given array is larger than the
 * number of rotations, we can cut our rotations down to the modulus or the
 * remainder of array length / n, as the rotations we skip will leave us were we
 * started with only the remainder left to perform. Not only does this cut the
 * number of swaps we actually perform down to a maximum of 9, we are also
 * optimized for memory by running the swaps in place by mutating the array
 * using the .shift() and .splice() methods.
 * @param arr {any[]} The array to be rotated
 * @param n {number} The number of times to rotate the given array
 * @returns {any[]}
 */
function rotatingArray(arr: any[], n: number) {
  if (
    n === 0 ||
    arr.length === n ||
    arr.length % n === 0 ||
    n % arr.length === 0
  ) {
    return arr;
  }

  if (n > arr.length) {
    n = n % arr.length;
  }

  while (n--) {
    arr.splice(arr.length, 0, arr.shift());
  }

  return arr;
}
