/*
You are given two non-empty arrays A and B consisting of N integers. 
Arrays A and B represent N voracious fish in a river, ordered downstream along 
the flow of the river.

The fish are numbered from 0 to N − 1. If P and Q are two fish and P < Q, 
then fish P is initially upstream of fish Q. Initially, each fish has a 
unique position.

Fish number P is represented by A[P] and B[P]. Array A contains the sizes of 
the fish. All its elements are unique. Array B contains the directions of 
the fish. It contains only 0s and/or 1s, where:

0 represents a fish flowing upstream,
1 represents a fish flowing downstream.
If two fish move in opposite directions and there are no other (living) fish 
between them, they will eventually meet each other. Then only one fish can 
stay alive − the larger fish eats the smaller one. More precisely, we say 
that two fish P and Q meet each other when P < Q, B[P] = 1 and B[Q] = 0, and 
there are no living fish between them. After they meet:

If A[P] > A[Q] then P eats Q, and P will still be flowing downstream,
If A[Q] > A[P] then Q eats P, and Q will still be flowing upstream.
We assume that all the fish are flowing at the same speed. That is, fish 
moving in the same direction never meet. The goal is to calculate the number of 
fish that will stay alive.

For example, consider arrays A and B such that:

  A[0] = 4    B[0] = 0
  A[1] = 3    B[1] = 1
  A[2] = 2    B[2] = 0
  A[3] = 1    B[3] = 0
  A[4] = 5    B[4] = 0
Initially all the fish are alive and all except fish number 1 are moving 
upstream. Fish number 1 meets fish number 2 and eats it, then it meets fish 
number 3 and eats it too. Finally, it meets fish number 4 and is eaten by it. 
The remaining two fish, number 0 and 4, never meet and therefore stay alive.

Write a function:

function solution(A, B);

that, given two non-empty arrays A and B consisting of N integers, returns 
the number of fish that will stay alive.

For example, given the arrays shown above, the function should return 2, as 
explained above.

Write an efficient algorithm for the following assumptions:

- N is an integer within the range [1..100,000];
- each element of array A is an integer within the range [0..1,000,000,000];
- each element of array B is an integer that can have one of the following values: 0, 1;
- the elements of A are all distinct
*/

// 100% O(n)
function Solution (A, B) {
  let stack = [0];
  let i = 1;
  
  while (i < A.length) {
    let lastFish = stack.pop();
    let currFish = i;
    
    if (B[lastFish] === 0 || B[currFish] === 1) {
      stack.push(lastFish);
      stack.push(currFish);

      i += 1;
    } else if (B[lastFish] === 1 && B[currFish] === 0) {
      if (A[lastFish] > A[currFish]) {
        stack.push(lastFish);
        i += 1;
      }

      if (stack.length === 0) {
        stack.push(currFish);
        i += 1;
      }
    }
  }

  return stack.length;
}















// function Solution (A, B) {
//   let survivors = 0;
//   let stack = [];

//   for (let i = 0; i < A.length; i++) {
//     stack.push(A[i]);

//     if (B[i] === 0) {
//       // Loop through our stream/stack
//       console.log('start the while loop', stack);
//       while (stack.length) {
//         if (stack[stack.length-1] > A[i]) {
//           // Current stack ends with the biggest fish
//           console.log('break the while loop');
//           break;
//         } else {
//           // Last fish in the stack has been eaten
//           console.log('pop the stack');
//           stack.pop();
//         }
//       }
//     }
//   }

//   survivors += stack.length;

//   console.log(`survivors: ${survivors}`);

//   return survivors;
// }

// console.log(Solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]));







// function Solution (A, B) {
//   let survivors = 0;
//   let stack = [];

//   for (let i = 0; i < A.length; i++) {
//     if (B[i] === 0) {
//       if (!stack.length) {
//         // Nothing in the stream to eat
//         survivors += 1; 
//       } else {
//         // Loop through our stream/stack
//         console.log('start the while loop', stack);
//         while (stack.length) {
//           if (stack[stack.length-1] > A[i]) {
//             // Current stack has the biggest fish
//             console.log('break the while loop');
//             break;
//           } else {
//             // Last fish in the stack has been eaten
//             console.log('pop the stack');
//             stack.pop();
//           }
//         }
//       }

//       // Push the last fish to the stack
//       stack.push(A[i]);
//     } else {
//       // B[i] === 1 start a new direction, push the current fish to the stack
//       stack.push(A[i]);
//     }
//   }

//   survivors += stack.length;

//   console.log(`survivors: ${survivors}`);

//   return survivors;
// }

// console.log(Solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]));

// // function solution (A, B) {
// //   let stack = [];

// //   for (let i = 0; i < A.length; i++) {
// //     while (stack.length) {
// //       const pop = stack.pop();

// //       if (B[pop] === B[i]) {
// //         stack.push(pop);
// //       } else if (
// //         B[i] === 0 &&
// //         A[pop] > A[i]
// //       ) {
// //         stack.push(pop)
// //       } else if (
// //         B[i] === 0 &&
// //         A[pop] < A[i]
// //       ) {
// //         // 
// //       } else {
// //         stack.push(i);
// //       }
// //     }
// //   //   // pop
// //   //   while (
// //   //     stack.length &&
// //   //     B[stack.slice(-1)[0]] !== B[i] &&
// //   //     B[i] === 0 &&
// //   //     A[stack.slice(-1)[0]] < A[i]
// //   //   ) {
// //   //     // no push
// //   //     stack.pop();
// //   //   }
// //   //   //push

// //   //   // decide to continue
// //   //   if (
// //   //     stack.length &&
// //   //     B[stack.slice(-1)[0]] !== B[i] &&
// //   //     B[i] === 0 &&
// //   //     A[stack.slice(-1)[0]] > A[i]
// //   //   ) {
// //   //     continue;
// //   //   }
 
// //   //   // add another
// //   //   stack.push(i);
// //   // }

// //   // for (let i = 0; i < A.length; i++) {
// //   //   // pop
// //   //   while (
// //   //     stack.length &&
// //   //     B[stack.slice(-1)[0]] !== B[i] &&
// //   //     B[i] === 0 &&
// //   //     A[stack.slice(-1)[0]] < A[i]
// //   //   ) {
// //   //     // no push
// //   //     stack.pop();
// //   //   }
// //   //   //push

// //   //   // decide to continue
// //   //   if (
// //   //     stack.length &&
// //   //     B[stack.slice(-1)[0]] !== B[i] &&
// //   //     B[i] === 0 &&
// //   //     A[stack.slice(-1)[0]] > A[i]
// //   //   ) {
// //   //     continue;
// //   //   }
 
// //   //   // add another
// //   //   stack.push(i);
// //   // }

// //   return stack.length;
// // }
// console.log(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]));





























































// // 37%
// function solution (A, B) {
//   let survivors = A.length;
//   let len = A.length;

//   let downstream;
//   for (let i = 0; i < len; i++) {
//     if (B[i] === 1) {
//       downstream = A[i];
//     } else {
//       if (downstream !== undefined) {
//         survivors--;
//         if (downstream < A[i]) {
//           downstream = undefined;
//         }
//       }
//     }
//   }

//   return survivors;
// }

// x=solution([6,5,4,3,8,9],[0,1,0,0,0,0])
// // x=solution([4,3,2,1,5],[0,1,0,0,0]);
// console.log(x);


// [6,5,4,3,8,9][0,1,0,0,0,0]

// 6  0    s+
// 5  1    -
// 4  0    5>4 s-
// 3  0    5>3 s-
// 8  0    5<8 s-
// 9  0    s+









// ([0-9]{2}(?=\#))|([0-9]{1})      $&|

// (?<all>(?<little>[0-9]{1}(?![0-9]\#))|(?<big>[0-9]{2}(?=\#)))|(?<hash>\#)?


// var xarr = [];
// for(let i = 0; i < x.length; i++) {
//  if (x[i] !== '#' && x[i+2] === '#') {
//   xarr.push(x[i]+x[i+1]);
//  } else {
//   xarr.push(x[i]);
//  }
// }


// function maximum69Number (num: number): number {
//   let arr = [ ...`${num}` ];
//   let arrL = arr.length;
  
//   for (let i = 0; i < arrL; i++) {
//     if (arr[i] === '6') {
//       arr[i] = '9';
//       break;
//     }
//   }
  
//   return Number(arr.join(''));
// };
