/**
 * Kaitenzushi
 * - Level 1
 *
 * There are `N` dishes in a row on a kaiten belt, with the `ith` dish being of
 * type `D[i]`. Some dishes may be of the same type as one another.
 *
 * You're very hungry, but you'd also like to keep things interesting. The `N`
 * dishes will arrive in front of you, one after another in order, and for each
 * one you'll eat it as long as it isn't the same type as any of the previous
 * `K` dishes you've eaten. You eat very fast, so you can consume a dish before
 * the next one gets to you. Any dishes you choose not to eat as they pass will
 * be eaten by others.
 *
 * Determine how many dishes you'll end up eating.
 *
 * Please take care to write a solution which runs within the time limit.
 *
 * Constraints:
 * 1 <= N <= 500,000
 * 1 <= K <= N
 * 1 <= D[i] <= 1,000,000
 *
 * Sample test case #1
 * N = 6
 * D = [1, 2, 3, 3, 2, 1]
 * K = 1
 *
 * Expected Return Value = 5
 *
 * Sample test case #2
 * N = 6
 * D = [1, 2, 3, 3, 2, 1]
 * K = 2
 *
 * Expected Return Value = 4
 *
 * Sample test case #3
 * N = 7
 * D = [1, 2, 1, 2, 1, 2, 1]
 * K = 2
 *
 * Expected Return Value = 2
 */

/**
 * Determines the total number of dishes given the requirements.
 *
 * @param N {number} Amount of dishes on the belt
 * @param D {number[]} The order of the dishes on the belt
 * @param K {number} The required gap from dishes previously eaten
 * @returns {number} The total number of dishes eaten given the requirements
 */
function getMaximumEatenDishCount(N: number, D: number[], K: number) {
  // Establish an array to track the dishes we have eaten
  let eaten = [D[0]];
  // Create a set that will contain at most the last K dishes eaten
  let lastEaten = new Set(eaten);

  // Go through the dishes on the belt...
  for (let i = 1; i < D.length; i++) {
    if (lastEaten.has(D[i])) {
      // When we have eaten the current dish within the last K dishes eaten, we
      // want to skip the dish so continue on...
      continue;
    } else {
      // When we have NOT eaten the current dish within the last K dishes eaten,
      // we need to first remove the oldest dish from our lastEaten set, then
      // add the current dish to our set of lastEaten dishes as well as our
      // array of all dishes we have eaten
      lastEaten.delete(eaten[eaten.length - K]);
      lastEaten.add(D[i]);
      eaten.push(D[i]);
    }
  }

  // Return the total number of dishes we have eaten
  return eaten.length;
}
