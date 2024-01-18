/*
A string S consisting of N characters is considered to be properly nested if 
any of the following conditions is true:

S is empty;
S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, the string "{[()()]}" is properly nested but "([)()]" is not.

Write a function:

function solution(S);

that, given a string S consisting of N characters, returns 1 if S is 
properly nested and 0 otherwise.

For example, given S = "{[()()]}", the function should return 1 and 
given S = "([)()]", the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..200,000];
string S consists only of the following characters: 
"(", "{", "[", "]", "}" and/or ")"
*/
// 100% O(N)
function solution (S) {
  if (!S.length) { return 1; }

  S = S.split('');

  let rgxOpen = /[\(\[\{]/;
  let rgxClose = /[\)\]\}]/;

  if (
    !rgxOpen.test(S[0]) ||
    !rgxClose.test(S[S.length-1])
  ) {
    return 0;
  }

  let stack = [];

  S.every((v, i, a) => {
    if (stack.length > ((a.length-i)-1)) {
      if (rgxOpen.test(v)) {
        return false;
      }
    }

    let last;

    if (rgxOpen.test(v)) {
      stack.push(v);
    } else {
      if (stack.length) {
        if (v === ')') {
          last = stack.pop();
          if (last !== '(') { stack.push(last); return false; }
        } else if (v === ']') {
          last = stack.pop();
          if (last !== '[') { stack.push(last); return false; }
        } else if (v === '}') {
          last = stack.pop();
          if (last !== '{') { stack.push(last); return false; }
        }
      } else {
        stack.push(v)
        return false;
      } 
    }

    return true;
  });

  if (stack.length) {
    return 0;
  } else {
    return 1;
  }
}


// 87% O(N)
// function solution (S) {
//   if (!S.length) { return 1; }

//   S = S.split('');

//   if (
//     S[0] !== '(' &&
//     S[0] !== '[' &&
//     S[0] !== '{' &&
//     S[S.length-1] !== ')' && 
//     S[S.length-1] !== ']' && 
//     S[S.length-1] !== '}'
//   ) {
//     return 0;
//   }

//   let seq = [];
//   let open = {
//     paren: 0,
//     bracket: 0,
//     brace: 0,
//     all: 0
//   };

//   S.forEach((v, i, a) => {
//     if (seq.length > ((a.length-i)-1)) {
//       if (v === '(' || v === '[' || v === '{') {
//         return false;
//       }
//     }

//     if (open.paren < 0 || open.bracket < 0 || open.brace < 0 || open.all < 0) {
//       return false;
//     }

//     let last;

//     switch (v) {
//       case '(':
//         open.all++;
//         open.paren++;
//         seq.push(v);
//         break;
//       case '[':
//         open.all++;
//         open.bracket++;
//         seq.push(v);
//         break;
//       case '{':
//         open.all++;
//         open.brace++;
//         seq.push(v);
//         break;
//       case ')':
//         last = seq.pop();
//         if (last !== '(') {
//           return false;
//         }
//         open.all--;
//         open.paren--;
//         break;
//       case ']':
//         last = seq.pop();
//         if (last !== '[') {
//           return false;
//         }
//         open.all--;
//         open.bracket--;
//         break;
//       case '}':
//         last = seq.pop();
//         if (last !== '{') {
//           return false;
//         }
//         open.all--;
//         open.brace--;
//         break;
//     }
//   });

//   if (
//     seq.length !== 0 || 
//     open.paren !== 0 ||
//     open.bracket !== 0 ||
//     open.bracket !== 0 ||
//     open.all !== 0
//   ) {
//     return 0;
//   }

//   return 1;
// }

// 75%
// function solution (S) {
//   S = S.split('');

//   if (
//     S[0] !== '(' &&
//     S[0] !== '[' &&
//     S[0] !== '{' &&
//     S[S.length-1] !== '(' && 
//     S[S.length-1] !== '[' && 
//     S[S.length-1] !== '{'
//   ) {
//     return 0;
//   }

//   let seq = [];
//   let open = {
//     paren: 0,
//     bracket: 0,
//     brace: 0,
//     all: 0
//   };

//   S.forEach((v, i, a) => {
//     if (seq.length > ((a.length-i)-1)) {
//       if (v === '(' || v === '[' || v === '{') {
//         return false;
//       }
//     }

//     if (open.paren < 0 || open.bracket < 0 || open.brace < 0 || open.all < 0) {
//       return false;
//     }

//     let last;

//     switch (v) {
//       case '(':
//         open.all++;
//         open.paren++;
//         seq.push(v);
//         break;
//       case '[':
//         open.all++;
//         open.bracket++;
//         seq.push(v);
//         break;
//       case '{':
//         open.all++;
//         open.brace++;
//         seq.push(v);
//         break;
//       case ')':
//         last = seq.pop();
//         if (last !== '(') {
//           return false;
//         }
//         open.all--;
//         open.paren--;
//         break;
//       case ']':
//         last = seq.pop();
//         if (last !== '[') {
//           return false;
//         }
//         open.all--;
//         open.bracket--;
//         break;
//       case '}':
//         last = seq.pop();
//         if (last !== '{') {
//           return false;
//         }
//         open.all--;
//         open.brace--;
//         break;
//     }
//   });

//   if (
//     seq.length !== 0 || 
//     open.paren !== 0 ||
//     open.bracket !== 0 ||
//     open.bracket !== 0 ||
//     open.all !== 0
//   ) {
//     return 0;
//   }

//   return 1;
// }