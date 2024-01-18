/*
This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer 
(greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000]
*/

// 100% O(N) or O(N * log(N))
function solution (A) {
  A = [ ...new Set(A) ].reduce((acc, curr) => {
    acc[curr] = acc[curr] || true;
    return acc;
  }, {});

  let result = 0;

  while(++result) {
    if (result in A) {
      continue;
    } else {
      break;
    }
  }

  return result > 0 ? result : 1;
}

// 77% O(N**2)
// function solution (A) {
//   A = [ ...new Set(A) ];

//   let i = 1;
//   let looking = true;

//   while (looking) {
//     if (A.indexOf(i) === -1) {
//       looking = false;
//     } else {
//       i += 1;
//     }
//   }

//   return i;
// }

// 66% O(N**2)
// function solution (A) {
//   A = A.filter(v => v > 0);

//   let i = 1;
//   let found = false;

//   while (!found) {
//     if (A.indexOf(i) === -1) {
//       found = true;
//     } else {
//       i++;
//     } 
//   }

//   return i;
// }