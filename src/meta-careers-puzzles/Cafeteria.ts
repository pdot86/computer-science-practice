/**
 * Cafeteria
 * - Level 1
 *
 * A cafeteria table consists of a row of `N` seats, numbered from 1 to `N` from
 * left to right. Social distancing guidelines require that every diner be
 * seated such that `K` seats to their left and `K` seats to their right (or all
 * the remaining seats to that side if there are fewer than `K`) remain empty.
 *
 * There are currently `M` diners seated at the table, the ith of whom is in
 * seat `S[i]`. No two diners are sitting in the same seat, and the social
 * distancing guidelines are satisfied.
 *
 * Determine the maximum number of additional diners who can potentially sit at
 * the table without social distancing guidelines being violated for any new or
 * existing diners, assuming that the existing diners cannot move and that the
 * additional diners will cooperate to maximize how many of them can sit down.
 *
 * Please take care to write a solution which runs within the time limit.
 *
 * Constraints
 * 1 <= N <= 10^15
 * 1 <= K <= N
 * 1 <= M <= 500,000
 * M <= N
 * 1 <= S[i] <= N
 *
 * Example:
 * N = 10 <<< Total number of seats
 * K = 1 <<< Required empty seats on either side of an occupant
 * M = 2 <<< The number of occupants already seated
 * S = [2, 6] <<< The seat number of each occupant
 *
 * Initial layout
 *  001   002   003   004   005   006   007   008   009   010
 * [   ] [ x ] [   ] [   ] [   ] [ x ] [   ] [   ] [   ] [   ]
 *
 * To the left of seat 2, no available seats, the next available seat is 4
 *  001   002   003   004   005   006   007   008   009   010
 * [ - ] [ x ] [ - ] [ o ] [   ] [ x ] [   ] [   ] [   ] [   ]
 *
 * To the left of seat 6, 1 available seat in group, 1/(K+1) rounded up is 1
 * added to total count, next available seat is 8
 *  001   002   003   004   005   006   007   008   009   010
 * [ - ] [ x ] [ - ] [ + ] [ - ] [ x ] [ - ] [ o ] [   ] [   ]
 *
 * From the last seat back to the next available seat we have a group of
 * 3 available seats, 3/(K+1) rounded up is 2 added to the total count
 *  001   002   003   004   005   006   007   008   009   010
 * [ - ] [ x ] [ - ] [ + ] [ - ] [ x ] [ - ] [ + ] [ - ] [ + ]
 *                     1                       2           3
 *
 * Expected = 3
 */

/**
 * Calculates the maximum number of seats that can be filled in given the total
 * number of seats, social distancing requirements, and seat locations of
 * current occupants.
 *
 * @param N {number} Number of total seats at the table
 * @param K {number} Required empty seats between occupants
 * @param M {number} Total occupants (length of S)
 * @param S {number[]} Currently occupied seat numbers
 * @returns
 */
function getMaxAdditionalDinersCount(N: number, K: number, M: number, S: number[]): number {
  // N = number of total seats at table
  // K = reqd empty seats between occupied seats
  // M = total occupants (the length of S)
  // S = current occupants and their seat numbers

  // Keep count of how many additional diners
  let count = 0;
  // The next available seat at our table
  let nextSeat = 1;
  // The number of seats in the group of available seats
  let available;

  // Sort our current occupants so we only need to loop M times
  S.sort((a, b) => a - b);

  // Loop over the sorted list of occupants
  for (let i = 0; i < M; i++) {
    // Calculate the number of available seats before the current occupied seat
    available = S[i] - K - nextSeat;

    // If there are any available seats
    if (available > 0) {
      // Add how many new people can fit via algorithm to our count
      count += Math.ceil(available / (K + 1));
    }

    // Set up the next available seat for the next run
    nextSeat = S[i] + K + 1;
  }

  // Calculate the number of available seats from the last seat backwards to the last occupied seat
  available = N + 1 - nextSeat;

  // If we have any available seats left
  if (available > 0) {
    // Add how mamny new people can fit via algorithm to our count
    count += Math.ceil(available / (K + 1));
  }

  // Return our count
  return count;
}
