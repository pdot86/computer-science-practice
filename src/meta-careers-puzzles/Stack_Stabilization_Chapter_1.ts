/**
 * Stack Stabilization (Chapter 1)
 * - Level 1
 *
 * There's a stack of `N` inflatable discs, with the `ith` disc from the top
 * having an initial radius of `R[i]` inches.
 *
 * The stack is considered unstable if it includes at least one disc whose
 * radius is larger than or equal to that of the disc directly under it. In
 * other words, for the stack to be stable, each disc must have a strictly
 * smaller radius than that of the disc directly under it.
 *
 * As long as the stack is unstable, you can repeatedly choose any disc of your
 * choice and deflate it down to have a radius of your choice which is strictly
 * smaller than the disc’s prior radius. The new radius must be a positive
 * integer number of inches.
 *
 * Determine the minimum number of discs which need to be deflated in order to
 * make the stack stable, if this is possible at all. If it is impossible to
 * stabilize the stack, return `−1` instead.
 *
 * Constraints
 * 1 <= N <= 50
 * 1 <= R[i] <= 1,000,000,000
 *
 * Example
 * N = 5
 * R = [2, 5, 3, 6, 5]
 *  - R[4]: do nothing (5)
 *  - R[3]: reduce to R[4] - 1 (4)
 *  - R[2]: do nothing (3)
 *  - R[1]: reduce to R[2] - 1 (2)
 *  - R[0]: reduce to R[1] - 1 (1)
 *  - Final Array: [1, 2, 3, 4, 5]
 *  > 3 total changes
 */

/**
 * Determines the minimum number of edits to the stack to create a stabile stack
 * @param N {number} The length of the stack
 * @param R {number[]} The stack to be stabilized
 * @returns
 */
function getMinimumDeflatedDiscCount(N: number, R: number[]): number {
  // Setup a counter
  let count = 0;

  // From right to left look if the current value
  for (let i = N - 1; i > 0; i--) {
    // If you come across a value less than the remaining amount of indicies
    // then we know that the stack can never be stabilized, exit early return -1
    if (R[i] < i + 1) {
      return -1;
    }
    // If the current index is less than or equal to the one under it, then
    // deflate the one under it to the current value minus one and add to count
    if (R[i] <= R[i - 1]) {
      R[i - 1] = R[i] - 1;
      count += 1;
    }
  }

  // Return the final count of edits
  return count;
}
