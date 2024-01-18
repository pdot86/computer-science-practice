/*
Write a function:

function solution(A, B, K);

that, given three integers A, B and K, returns the number of integers within 
the range [A..B] that are divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your function should return 3, 
because there are three numbers divisible by 2 within the range [6..11], 
namely 6, 8 and 10.

Write an efficient algorithm for the following assumptions:

A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B
*/

// 100% O(1)
function solution (A, B, K) {
  return Math.floor(B/K) - Math.ceil(A/K) + 1;
}

// 25%
function solution (A, B, K) {
  let result = 0;

  while (A <= B) {
    if (A % 2 === 0) {
      result += 1;
    }
    A += 1;
  }

  return result;
}
// 12%
function solution (A, B, K) {
  let min = ((A + K - 1) / K) * K;

  return (min > B) ? 0 : ((B - min)/ K) + 1;
}