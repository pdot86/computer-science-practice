/*
A non-empty array A consisting of N integers is given.

The leader of this array is the value that occurs in more than half of the 
elements of A.

An equi leader is an index S such that 0 ≤ S < N − 1 and two sequences 
A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N − 1] have leaders of 
the same value.

For example, given array A such that:

    A[0] = 4
    A[1] = 3
    A[2] = 4
    A[3] = 4
    A[4] = 4
    A[5] = 2
we can find two equi leaders:

0, because sequences: (4) and (3, 4, 4, 4, 2) have the same leader, whose 
value is 4.
2, because sequences: (4, 3, 4) and (4, 4, 2) have the same leader, whose 
value is 4.
The goal is to count the number of equi leaders.

Write a function:

function solution(A);

that, given a non-empty array A consisting of N integers, returns the number 
of equi leaders.

For example, given:

    A[0] = 4
    A[1] = 3
    A[2] = 4
    A[3] = 4
    A[4] = 4
    A[5] = 2
the function should return 2, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range 
[−1,000,000,000..1,000,000,000].
*/

// 100%  O(N)
function solution(A) {
  // Create a map to count our occurences
  const leaderMap = new Map();
  // cache the length of our array
  const len = A.length;
  // cache the half length of our array
  const hLen = len/2;

  // Loop over the array and if our map has a key set add one to it, otherwise set a new key to one
  for (let i = 0; i < len; i++) {
    let val = leaderMap.has(A[i]) ? leaderMap.get(A[i])+1 : 1;
    leaderMap.set(A[i], val);
  }

  // Now find the max value and max count
  let maxValue = A[0];
  let maxCount = 1
  // by looping over our map entries
  for (let [key, value] of leaderMap.entries()) {
      if (value > maxCount) {
        maxCount = value;
        maxValue = key;
      }
  }

  // look for a leader, if a leader does not occur more than half the time return zero
  let leaderValue = 0;
  let leaderCount = 0;

  if (maxCount >= hLen) {
    leaderValue = maxValue;
    leaderCount = maxCount;
  } else {
    return 0;
  }

  // Count the leader on the left and right so we can track the equileaders
  let countEquiLeaders = 0;
  let leftLeaders = 0;

  // scan the entire array
  for (let i = 0; i < len; i++) {
    if (A[i] === leaderValue) {
      leftLeaders += 1;
    }

    // if the left leader is more than half check the right side
    if (leftLeaders > ((i+1)/2)) {
      let rightLeaders = leaderCount - leftLeaders;
      // if the right side leader is more than half
      if (rightLeaders > ((len-i-1)/2)) {
        countEquiLeaders += 1; // we have an equileader
      }
    }
  }

  return countEquiLeaders;
}
