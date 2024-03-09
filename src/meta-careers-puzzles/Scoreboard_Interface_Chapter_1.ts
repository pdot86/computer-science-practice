/**
 * Scoreboard Stabilization (Chapter 1)
 * - Level 1
 *
 * You are spectating a programming contest with `N` competitors, each trying
 * to independently solve the same set of programming problems. Each problem has
 * a point value, which is either 1 or 2.
 *
 * On the scoreboard, you observe that the `ith` competitor has attained a score
 * of S[i], which is a positive integer equal to the sum of the point values of
 * all the problems they have solved.
 *
 * The scoreboard does not display the number of problems in the contest, nor
 * their point values. Using the information available, you would like to
 * determine the minimum possible number of problems in the contest.
 *
 * Constraints
 * 1 <= N <= 500,000
 * 1 <= S[i] <= 1,000,000,000
 *
 * Example
 * N = 6
 * S = [1, 2, 3, 4, 5, 6]
 *  - Max score = 6
 *  - Not every score is divisible by 2
 *  - 6 / 2 + 1 = 4
 *  > 4
 */

/**
 * Determines the minimum number of puzzles in the contest.
 *
 * @param N {number} The number of players on the scoreboard
 * @param S {number[]} The scores of each player on the scoreboard
 * @returns {number}
 */
function getMinProblemCount(N: number, S: number[]): number {
  // Determine the list of unique scores
  const scores = [...new Set(S)];

  // Find our maximum score from our list of scores
  const max = scores.reduce((a, c) => {
    if (c > a) {
      a = c;
    }
    return a;
  }, 0);

  // When every unique score is an even number, we can assume that every problem
  // was worth exactly 2 points giving us our lowest number of problems to reach
  // our max score by simply dividing the maximum score by 2; however, when even
  // just one unique score is not evenly divisible by 2 we must assume that
  // there is at least one problem that is only worth 1 point meaning that our
  // lowest number of problems is reached by flooring max score divided by 2
  // and adding 1.
  return scores.every((v) => v % 2 === 0) ? max / 2 : Math.floor(max / 2) + 1;
}
