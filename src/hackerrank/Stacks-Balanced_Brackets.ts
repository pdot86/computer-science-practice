/**
 * Stacks - Balanced Brackets
 * Difficulty: Medium
 * Max Score: 25
 * Score: 25
 */

function isBalanced(s: string): string {
  // Base case - no brackets is a balanced state
  if (s.length === 0) {
    return 'YES';
  }

  // Setup our dictionary
  const brackets = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
  ]);
  // Create a stack to track things
  const stack = [];

  // Loop over the input characters and determine if it is valid
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    if (brackets.has(char)) {
      // char is OPEN bracket
      // push to stack
      stack.push(char);
    } else {
      // char is CLOSE bracket
      if (char === brackets.get(stack[stack.length - 1])) {
        // char is the matching closing bracket to the last item of our stack
        // pop the stack and continue on
        stack.pop();
      } else {
        // char does not match the last item in our stack, or the stack is empty
        return 'NO';
      }
    }
  }

  // If we have anything left in the stack it is not valid
  // If the stack is empty then we have valid brackets
  return stack.length ? 'NO' : 'YES';
}
