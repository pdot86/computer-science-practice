/**
 * Rotary Lock Chapter 1
 * - Level 1
 *
 * You're trying to open a lock. The lock comes with a wheel which has the
 * integers from `1` to `N` arranged in a circle in order around it (with
 * integers `1` and `N` adjacent to one another). The wheel is initially
 * pointing at `1`.
 *
 * For example, the following depicts the lock for `N = 10` (as is presented in
 * the second sample case).
 *
 *              01
 *          10     02
 *       09           03
 *     .                 .
 *       08           04
 *          07     05
 *              06
 *
 *
 * It takes `1` second to rotate the wheel by `1` unit to an adjacent integer in
 * either direction, and it takes no time to select an integer once the wheel is
 * pointing at it.
 *
 * The lock will open if you enter a certain code. The code consists of a
 * sequence of `M` integers, the `ith` of which is `C[i]`. Determine the
 * minimum number of seconds required to select all `M` of the code's integers
 * in order.
 *
 * Please take care to write a solution which runs within the time limit.
 *
 * Constraints:
 * 3 <= N <= 50,000,000
 * 1 <= M <= 1,000
 * 1 <= C[i] <= N
 *
 * Sample test case #1
 * N = 3
 * M = 3
 * C = [1, 2, 3]
 *
 * Expected Return Value = 2
 *
 * Sample test case #2
 * N = 10
 * M = 4
 * C = [9, 4, 4, 8]
 *
 * Expected Return Value = 11
 */

/**
 * Determines the minimum amount of seconds to enter the unlock sequence.
 *
 * @param N {number} The amount of numbers on the lock (1 - N)
 * @param M {number} The amount of numbers in the unlock sequence
 * @param C {number[]} The unlocking sequence
 */
function getMinCodeEntryTime(N: number, M: number, C: number[]) {
  let curr = 1;
  let time = 0;

  for (let i = 0; i < M; i++) {
    time += Math.min(Math.abs(curr - C[i]), N - Math.abs(curr - C[i]));
    curr = C[i];
  }

  return time;
}
