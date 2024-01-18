/*
An array A consisting of N different integers is given. The array contains 
integers in the range [1..(N + 1)], which means that exactly one element is 
missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)]
*/

// 100% O(N) or O(N * log(N))
function solution (A) {
  if (!A.length){
    return 1;
  } else if (A.length === 1) {
    if (A[0] === 1) {
      return 2;
    } else {
      return 1;
    }
  }

  let total = ((A.length + 1) * ((A.length + 1) + 1)) / 2;
  let sum = A.reduce((acc, curr) => { return acc += curr; });
  return (total - sum);
}